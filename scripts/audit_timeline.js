/**
 * audit_timeline.js
 * 
 * 稽核所有連線的時間合理性：
 * 1. 連線年份在任一方的生卒年之外（太早或太晚）
 * 2. 兩人生卒年完全不重疊（根本不可能見面）
 * 3. 連線備註不是「傳承/靈感/時代座標」等合理例外
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function audit() {
  const figuresModule = await import(`file://${path.join(rootDir, 'src/data/figures.js')}`);
  const connectionsModule = await import(`file://${path.join(rootDir, 'src/data/connections.js')}`);
  const extraModule = await import(`file://${path.join(rootDir, 'src/data/connections_extra.js')}`);

  const FIGURES = figuresModule.FIGURES;
  const ALL_CONNECTIONS = [
    ...connectionsModule.CONNECTIONS,
    ...(extraModule.CONNECTIONS_EXTRA || []),
  ];

  // 標記為「歷史傳承」類型而非真實見面的連線類型關鍵字
  const HERITAGE_KEYWORDS = ['傳承', '靈感', '影響', '精神', '啟發', '座標', '象徵', '繼承', '仿效',
                             'inspiration', 'admiration', 'influence', 'contemporary', 'political'];

  const results = {
    impossible: [],      // 兩人生卒年完全不重疊
    yearOutOfRange: [],  // 年份在某人生前/死後
    suspicious: [],      // 年份差距超過300年（明顯跨時代）
    heritage: [],        // 已標記為傳承類，僅供參考
  };

  for (const conn of ALL_CONNECTIONS) {
    const figA = FIGURES[conn.from];
    const figB = FIGURES[conn.to];

    if (!figA || !figB) continue;

    const bornA = figA.born ?? null;
    const diedA = figA.died ?? null;
    const bornB = figB.born ?? null;
    const diedB = figB.died ?? null;

    // 跳過沒有生卒年的人物（born=0/died=0 表示未知）
    const hasDataA = bornA !== null && bornA !== 0 && diedA !== null && diedA !== 0;
    const hasDataB = bornB !== null && bornB !== 0 && diedB !== null && diedB !== 0;

    if (!hasDataA || !hasDataB) continue;

    const isHeritage = HERITAGE_KEYWORDS.some(kw =>
      (conn.desc_zh || '').includes(kw) || (conn.type || '').includes(kw)
    );

    // 檢查是否完全不重疊（一人死亡時另一人尚未出生）
    // 寬容 30 年以內（父子輩、跨代見面情況）
    const TOLERANCE = 30;
    const overlapImpossible = (diedA + TOLERANCE < bornB) || (diedB + TOLERANCE < bornA);

    // 計算生存年份重疊期
    const overlapStart = Math.max(bornA, bornB);
    const overlapEnd = Math.min(diedA, diedB);
    const overlapYears = overlapEnd - overlapStart;

    const connYear = conn.year ?? null;

    if (overlapImpossible && !isHeritage) {
      results.impossible.push({
        id: conn.id,
        from: `${conn.from} (${figA.name_zh}, ${bornA}~${diedA})`,
        to: `${conn.to} (${figB.name_zh}, ${bornB}~${diedB})`,
        year: connYear,
        gap: bornB > diedA ? `A死後 ${bornB - diedA} 年B才出生` : `B死後 ${bornA - diedB} 年A才出生`,
        desc: (conn.desc_zh || '').slice(0, 60),
      });
    } else if (overlapImpossible && isHeritage) {
      results.heritage.push({
        id: conn.id,
        from: `${conn.from} (${figA.name_zh}, ${bornA}~${diedA})`,
        to: `${conn.to} (${figB.name_zh}, ${bornB}~${diedB})`,
        type: conn.type,
        year: connYear,
        gap: bornB > diedA ? `A死後 ${bornB - diedA} 年B才出生` : `B死後 ${bornA - diedB} 年A才出生`,
      });
    }

    // 檢查連線年份是否在合理範圍內（兩人都活著±10年）
    if (!overlapImpossible && connYear !== null) {
      const effectiveBornA = bornA;
      const effectiveDiedA = diedA;
      const effectiveBornB = bornB;
      const effectiveDiedB = diedB;

      const yearValid = connYear >= (Math.max(effectiveBornA, effectiveBornB) - 10)
                     && connYear <= (Math.min(effectiveDiedA, effectiveDiedB) + 10);

      if (!yearValid && !isHeritage) {
        results.yearOutOfRange.push({
          id: conn.id,
          from: `${conn.from} (${figA.name_zh}, ${bornA}~${diedA})`,
          to: `${conn.to} (${figB.name_zh}, ${bornB}~${diedB})`,
          year: connYear,
          validRange: `${Math.max(bornA, bornB)} ~ ${Math.min(diedA, diedB)}`,
          desc: (conn.desc_zh || '').slice(0, 60),
        });
      }
    }
  }

  // ─── 輸出報告 ───

  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║          History Bridge 時間軸稽核報告                         ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  console.log(`📊 稽核統計`);
  console.log(`  ．稽核連線總數（有完整生卒年）：${ALL_CONNECTIONS.filter(c => {
    const a = FIGURES[c.from], b = FIGURES[c.to];
    return a && b && a.born && a.born !== 0 && a.died && a.died !== 0 && b.born && b.born !== 0 && b.died && b.died !== 0;
  }).length} 條`);
  console.log(`  ．❌ 時代完全不重疊（需刪除）：${results.impossible.length} 條`);
  console.log(`  ．⚠️  連線年份超出合理範圍：${results.yearOutOfRange.length} 條`);
  console.log(`  ．📜 傳承類（不重疊但已標記）：${results.heritage.length} 條`);

  if (results.impossible.length > 0) {
    console.log('\n\n══════════════════════════════════════════════════════════════');
    console.log(`❌ 時代完全不重疊的連線（共 ${results.impossible.length} 條，建議刪除）`);
    console.log('══════════════════════════════════════════════════════════════\n');
    results.impossible.forEach((r, i) => {
      console.log(`${i + 1}. [${r.id}]`);
      console.log(`   A: ${r.from}`);
      console.log(`   B: ${r.to}`);
      console.log(`   連線年份: ${r.year}  |  問題: ${r.gap}`);
      console.log(`   描述: ${r.desc}`);
      console.log('');
    });
  }

  if (results.yearOutOfRange.length > 0) {
    console.log('\n══════════════════════════════════════════════════════════════');
    console.log(`⚠️  連線年份超出合理範圍（共 ${results.yearOutOfRange.length} 條，請複核）`);
    console.log('══════════════════════════════════════════════════════════════\n');
    results.yearOutOfRange.forEach((r, i) => {
      console.log(`${i + 1}. [${r.id}]`);
      console.log(`   A: ${r.from}`);
      console.log(`   B: ${r.to}`);
      console.log(`   連線年份: ${r.year}  |  合理範圍: ${r.validRange}`);
      console.log(`   描述: ${r.desc}`);
      console.log('');
    });
  }

  if (results.heritage.length > 0) {
    console.log('\n══════════════════════════════════════════════════════════════');
    console.log(`📜 傳承類連線（時代不重疊但合理，共 ${results.heritage.length} 條）`);
    console.log('══════════════════════════════════════════════════════════════\n');
    results.heritage.forEach((r, i) => {
      console.log(`${i + 1}. [${r.id}] type=${r.type} year=${r.year}`);
      console.log(`   ${r.from}`);
      console.log(`   → ${r.to}`);
      console.log(`   間距: ${r.gap}`);
      console.log('');
    });
  }

  console.log('\n══════════════════════════════════════════════════════════════');
  console.log('✅ 稽核完成');
}

audit().catch(console.error);
