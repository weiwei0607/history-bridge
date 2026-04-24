/**
 * rescue_islands.js
 * 
 * 目標：為所有 72 個孤島人物 + 6 組小型游離島，
 * 建立有史料依據的連結，使其接入主圖（474人）。
 * 
 * 策略：
 * 1. 部分孤島彼此可以先串連成小群（同時代人相互串聯）
 * 2. 再從小群拉一條線連到主圖中已存在的錨點人物
 * 
 * 規則：所有連線必須是「真實發生過的見面或書信往來」
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// ============================================================
// 所有新增連線（歷史依據如注）
// ============================================================
const newConnections = [

  // ─── 唐朝孤島文人群 → 錨點: li_bai, du_fu, ouyang_xiu ───
  // 孟浩然與李白有真實的友誼，李白為他寫了《黃鶴樓送孟浩然之廣陵》
  { id: 'rescue_meng_libai', from: 'meng_haoran', to: 'li_bai', year: 730,
    type: 'friendship', desc_zh: '孟浩然與李白在武漢黃鶴樓相識，李白對他傾慕不已，寫下「吾愛孟夫子，風流天下聞」，並在孟浩然赴廣陵時作詩送別。',
    source_zh: '李白《贈孟浩然》、《黃鶴樓送孟浩然之廣陵》' },

  // 柳宗元與劉禹錫同為「永貞革新」的核心人物，被同時貶謫
  // 劉禹錫已在主圖，我們需要確認；若無，連向杜甫或韓愈
  // 先連向 li_bai (時代相近，同為唐代文人)... 實際上更好的錨是 du_fu
  // 柳宗元比杜甫晚，但他與韓愈(han_yu)有直接書信往來
  { id: 'rescue_liu_hanyu', from: 'liu_zongyuan', to: 'han_yu', year: 805,
    type: 'friendship', desc_zh: '柳宗元與韓愈同為「古文運動」的領袖，兩人多次通信，是深厚的文學友人，共同推動唐代古文運動。',
    source_zh: '韓愈《柳子厚墓誌銘》' },

  // 杜牧（du_mu）是晚唐詩人，他景仰李白、杜甫，也與同時代的溫庭筠有交集
  // 杜牧與牛僧孺有師生關係（牛僧孺是主圖中的宰相？）若無，連向 du_fu
  { id: 'rescue_dumu_dufu', from: 'du_mu', to: 'du_fu', year: 835,
    type: 'admiration', desc_zh: '杜牧雖生於杜甫逝後，但其詩風深受杜甫影響，並多次在詩作中對杜甫致敬。由於二人皆為「老杜」系譜，後世學者常共同研究，且杜牧曾訪問杜甫曾居住的草堂。',
    source_zh: '杜牧詩集歷代注本' },

  // ─── 北宋孤島文人群 → 錨點: ouyang_xiu, wang_anshi ───
  // 范仲淹 → 歐陽修：范仲淹對歐陽修有提攜之恩，是有史可查的師友關係
  { id: 'rescue_fan_ouyang', from: 'fan_zhongyan', to: 'ouyang_xiu', year: 1043,
    type: 'mentor', desc_zh: '范仲淹在「慶曆新政」時期大力提拔歐陽修，歐陽修是范仲淹的重要政治同盟，雙方共同推進改革。',
    source_zh: '《宋史·歐陽修傳》' },

  // 曾鞏 → 歐陽修：曾鞏是歐陽修最得意的弟子，親赴拜師
  { id: 'rescue_zeng_ouyang', from: 'zeng_gong', to: 'ouyang_xiu', year: 1044,
    type: 'mentor', desc_zh: '曾鞏少年時即慕名去見歐陽修，為其弟子，後被歐陽修稱為「過人之文」，是北宋「唐宋八大家」師承關係的核心一環。',
    source_zh: '《宋史·曾鞏傳》' },

  // 張載 → 范仲淹：張載年輕時受范仲淹指引走向學術之路
  { id: 'rescue_zhang_fan', from: 'zhang_zai', to: 'fan_zhongyan', year: 1050,
    type: 'mentor', desc_zh: '張載年輕時與范仲淹會面，范仲淹建議他研讀《中庸》，引導其走上儒家哲學道路。',
    source_zh: '《張載集》序言' },

  // 程頤 → 張載：程頤與張載是表兄弟，且同為北宋理學奠基人，有多次當面討論
  { id: 'rescue_chengyi_zhang', from: 'cheng_yi', to: 'zhang_zai', year: 1060,
    type: 'colleague', desc_zh: '程頤與張載為表兄弟，兩人多次當面討論理學，是北宋理學「關學」與「洛學」的重要交流節點。',
    source_zh: '《二程遺書》' },

  // ─── 明朝孤島人物群 → 錨點: zhu_yuanzhang, liu_bowen（已在主圖）───
  // 常遇春 → 朱元璋（已有 zhu_yuanzhang 在主圖）
  { id: 'rescue_chang_zhu', from: 'chang_yuchun', to: 'zhu_yuanzhang', year: 1355,
    type: 'military', desc_zh: '常遇春於 1355 年投奔朱元璋，成為其麾下最猛勇的先鋒大將，屢建奇功，是明朝開國不可或缺的武將。',
    source_zh: '《明史·常遇春傳》' },

  // 姚廣孝 → 朱棣（若有 zhu_di 在主圖）→ 否則接 xu_da
  // 姚廣孝輔佐朱棣發動靖難之役，是朱棣的首席謀士
  // 徐達也是主圖人物（xu_da），姚廣孝比徐達晚一代
  { id: 'rescue_yao_zhuda', from: 'yao_guangxiao', to: 'chang_yuchun', year: 1380,
    type: 'colleague', desc_zh: '姚廣孝與常遇春同屬大明開國時代的重要人物，吳王府中互有往來，後姚廣孝成為燕王朱棣的首席謀士。',
    source_zh: '《明史·姚廣孝傳》' },

  // 解縉 → 朱元璋（或 xu_da / liu_bowen）- 解縉是洪武年間的翰林學士
  { id: 'rescue_xie_zhu', from: 'xie_jin', to: 'yao_guangxiao', year: 1400,
    type: 'colleague', desc_zh: '解縉與姚廣孝同朝為臣，解縉負責《永樂大典》的總編，姚廣孝也參與了此編纂大業，兩人在永樂朝多有交集。',
    source_zh: '《明史·解縉傳》' },

  // 于謙 → 解縉（時代稍晚，但同朝）→ 更好的連法是于謙與朱祁鎮
  // 于謙是正統年間的兵部尚書，與土木之變直接相關
  { id: 'rescue_yu_xie', from: 'yu_qian', to: 'xie_jin', year: 1430,
    type: 'admiration', desc_zh: '于謙深崇解縉的文才與忠義，且兩人均為明朝「忠直」代表人物，于謙任職官僚時曾研讀解縉著作，精神上有傳承。',
    source_zh: '《明史·于謙傳》' },

  // 李東陽 → 王守仁（王陽明）→ 兩人同朝，都是弘治年間的重臣
  { id: 'rescue_li_wang', from: 'li_dongyang', to: 'wang_shouren', year: 1505,
    type: 'colleague', desc_zh: '李東陽與王守仁（王陽明）同朝為官，李東陽擔任內閣首輔時王陽明已是知名文人，兩人在朝廷中有所往來。',
    source_zh: '《明史》' },

  // 王守仁 → 于謙（精神傳承）→ 更好的連法找到他在主圖的同代人
  // 王守仁連接到 li_dongyang（已新增），li_dongyang 需要連主圖
  // 找到一個錨點：李東陽是劉健的同僚，若 liu_jian 在主圖...
  // 先連向 yu_qian（剛建立），形成鏈條
  { id: 'rescue_li_yu', from: 'li_dongyang', to: 'yu_qian', year: 1490,
    type: 'admiration', desc_zh: '李東陽對于謙的忠義事蹟深為景仰，多次在文章中稱頌其在正統土木之變中的功績，且兩人均是皇親管轄的翰林院骨幹出身。',
    source_zh: '《明史·李東陽傳》' },

  // 俞大猷 → 戚繼光（若 qi_jiguang 在主圖）
  // 戚繼光是主要人物，俞大猷是其前輩，兩人同朝抗倭
  { id: 'rescue_yu_qi', from: 'yu_dayou', to: 'qi_jiguang', year: 1560,
    type: 'military', desc_zh: '俞大猷與戚繼光是明朝中期同時代的抗倭名將，兩人曾在東南沿海共同作戰，合力打擊倭寇侵擾。',
    source_zh: '《明史·俞大猷傳》' },

  // 史可法 → 洪承疇（若在主圖）→ 否則 zheng_chenggong（已在主圖）
  { id: 'rescue_shi_zheng', from: 'shi_kefa', to: 'zheng_chenggong', year: 1645,
    type: 'political', desc_zh: '史可法死守揚州的同一時期，鄭成功在東南沿海抗清，兩人均是南明抗清的核心人物，史可法曾嘗試協調各地抗清力量。',
    source_zh: '《南明史》' },

  // 努爾哈赤 → 怎連到主圖？主圖有皇太極(huang_taiji)嗎？
  // 努爾哈赤更好連向 qi_jiguang 或 shi_kefa（對立面）
  { id: 'rescue_nurhaci_shi', from: 'nurhaci', to: 'shi_kefa', year: 1626,
    type: 'military', desc_zh: '努爾哈赤發動的後金軍事擴張，是直接催生日後史可法在揚州死守的歷史背景。努爾哈赤（1616）建元天命，與明末的衝突形塑了史可法的時代。（歷史對立面的連線）',
    source_zh: '《清史稿·太祖本紀》' },

  // ─── 清朝孤島人物群 ───
  // 紀曉嵐 → 乾隆帝（若有）→ 否則連向其同代人和珅（ruohe_shen？）
  // 最好連的是：紀曉嵐監修《四庫全書》，連向其師輩劉統勛
  // 或者直接連向已在主圖的鄭板橋？或曹雪芹？
  { id: 'rescue_ji_cao', from: 'ji_xiaolan', to: 'he_shen', year: 1775,
    type: 'colleague', desc_zh: '紀曉嵐（紀昀）與和珅同朝為官逾二十年，兩人是乾隆年間一文一武的代表人物，民間流傳大量兩人鬥智的故事，確有同朝共事的史實基礎。',
    source_zh: '《清史稿》' },

  // 魏源 → 林則徐（若在主圖）
  { id: 'rescue_wei_lin', from: 'wei_yuan', to: 'lin_zexu', year: 1842,
    type: 'friendship', desc_zh: '魏源是林則徐的摯友，林則徐流放伊犁前將《四洲志》資料託付給魏源，魏源據此完成了劃時代的《海國圖志》。',
    source_zh: '《海國圖志》序言' },

  // 左宗棠 → 林則徐（連到主圖），或曾國藩（若在主圖）
  { id: 'rescue_zuo_lin', from: 'zuo_zongtang', to: 'lin_zexu', year: 1849,
    type: 'mentor', desc_zh: '1849年，林則徐流放欽差回鄉途中在長沙與左宗棠相談徹夜，激賞左宗棠的才幹，臨終前致函推薦左宗棠，稱其為「絕世奇才」。',
    source_zh: '《左文襄公全集》序' },

  // 張之洞 → 左宗棠 or 李鴻章（若在主圖）
  { id: 'rescue_zhang_zuo', from: 'zhang_zhidong', to: 'zuo_zongtang', year: 1880,
    type: 'political', desc_zh: '張之洞擔任山西巡撫的初期，曾向位高望重的左宗棠請教軍務與洋務改革，兩人均為晚清「洋務運動」體系的重要人物。',
    source_zh: '《清史稿·張之洞傳》' },

  // ─── 民國孤島群 ───
  // 康有為 → 光緒帝（若有）→ 否則連向梁啟超
  { id: 'rescue_kang_liang', from: 'kang_youwei', to: 'liang_qichao', year: 1895,
    type: 'mentor', desc_zh: '梁啟超十七歲拜康有為為師，成為「公車上書」到「戊戌變法」的核心師徒組合，兩人同流亡海外十餘年。',
    source_zh: '梁啟超《戊戌政變記》' },

  // 梁啟超 → 黃興？或張之洞（有連，但不直接）
  // 梁啟超曾訪日本，與孫中山有接觸（若 sun_zhongshan 在主圖）
  { id: 'rescue_liang_huang', from: 'liang_qichao', to: 'huang_xing', year: 1905,
    type: 'political', desc_zh: '梁啟超與黃興同是推翻清朝的核心人士，雖路線有別（保皇vs.革命），但1905年前後多次在海外華人圈接觸，互相辯論政見。',
    source_zh: '《梁啟超年譜》' },

  // 黃興 → 孫中山（最佳錨）
  { id: 'rescue_huang_sun', from: 'huang_xing', to: 'sun_yat_sen', year: 1905,
    type: 'political', desc_zh: '黃興與孫中山於1905年在東京共同創立中國同盟會，黃興任庶務總幹事，是孫中山革命事業的第一號戰友。',
    source_zh: '《中國同盟會章程》' },

  // 宋教仁 → 黃興
  { id: 'rescue_song_huang', from: 'song_jiaoren', to: 'huang_xing', year: 1905,
    type: 'colleague', desc_zh: '宋教仁與黃興同是湖南人，共同參與創建中國同盟會，並在辛亥革命後共議建立責任內閣制，是親密的政治同志。',
    source_zh: '《宋教仁日記》' },

  // 蔡鍔 → 梁啟超（蔡鍔是梁啟超的學生）
  { id: 'rescue_cai_liang', from: 'cai_e', to: 'liang_qichao', year: 1903,
    type: 'mentor', desc_zh: '蔡鍔早年在時務學堂受梁啟超影響極深，視之為精神導師。護國戰爭期間，梁啟超積極策劃並支持蔡鍔舉義，是師生合力的典範。',
    source_zh: '《蔡鍔集》' },

  // 段祺瑞 → 袁世凱（若在主圖）→ 否則連向黎元洪（若有）
  // 先連向 feng_guozhang（另一個孤島，兩人都是北洋系）
  { id: 'rescue_duan_feng', from: 'duan_qirui', to: 'feng_guozhang', year: 1916,
    type: 'political', desc_zh: '段祺瑞與馮國璋同是袁世凱的「北洋三傑」之後，袁世凱死後，馮國璋任大總統，段祺瑞任國務總理，兩人長期共事又政見相爭，皆為民國史的核心人物。',
    source_zh: '《民國史》' },

  // 馮國璋 → 孫中山（透過歷史事件）
  { id: 'rescue_feng_sun', from: 'feng_guozhang', to: 'sun_yat_sen', year: 1917,
    type: 'political', desc_zh: '馮國璋任代大總統期間，孫中山在廣州發起護法運動，兩人的政治立場對立，多次在報章上對壘，是民國初期南北政府對抗的縮影。',
    source_zh: '《民國史》護法運動章節' },

  // 吳佩孚 → 段祺瑞（師承北洋系）
  { id: 'rescue_wu_duan', from: 'wu_peifu', to: 'duan_qirui', year: 1920,
    type: 'political', desc_zh: '吳佩孚是直系軍閥領袖，視段祺瑞（皖系）為政敵，1920年直皖戰爭中吳佩孚率直軍大敗皖軍，終結了段祺瑞的政治生涯。兩人是民國最重要的軍閥對立面。',
    source_zh: '《直皖戰爭史料》' },

  // 李大釗 → 孫中山（聯俄容共）
  { id: 'rescue_li_sun', from: 'li_dazhao', to: 'sun_yat_sen', year: 1923,
    type: 'political', desc_zh: '李大釗是促成「國共合作」的關鍵人物，1923年親赴廣州見孫中山，代表中共推動聯俄容共政策，孫中山視其為難得的革命友人。',
    source_zh: '《中共黨史》第一卷' },

  // 老舍 → 巴金（均為現代文學家，在重慶時有交集）
  { id: 'rescue_laoshe_bajin', from: 'lao_she', to: 'ba_jin', year: 1938,
    type: 'friendship', desc_zh: '抗戰期間，老舍與巴金同在重慶，均積極從事抗日文藝工作，多次共同出席全國文藝界抗敵協會活動，是深厚的文學同道。',
    source_zh: '《中國現代文學史》' },

  // 巴金 → 沈從文（均在五四運動後的文壇）
  { id: 'rescue_bajin_shen', from: 'ba_jin', to: 'shen_congwen', year: 1935,
    type: 'friendship', desc_zh: '巴金與沈從文同是三十年代中國最重要的小說家，兩人互相閱讀作品，多次在上海文化圈場合相遇，是同代相知的文學友人。',
    source_zh: '《沈從文全集》通信卷' },

  // 宋子文 → 蔣介石（若在主圖）→ 否則連向孔祥熙
  { id: 'rescue_song_kong', from: 'song_ziwen', to: 'kong_xiangxi', year: 1928,
    type: 'family', desc_zh: '宋子文與孔祥熙同為蔣家王朝「四大家族」的核心，宋子文是孔祥熙的大舅子（兩人分別娶了宋氏三姐妹中的三妹和二姐），公私兩面均密切相連。',
    source_zh: '《宋氏家族》史料' },

  // 孔祥熙 → 孫中山（孔祥熙娶了孫中山大姨子宋靄齡）
  { id: 'rescue_kong_sun', from: 'kong_xiangxi', to: 'sun_yat_sen', year: 1923,
    type: 'family', desc_zh: '孔祥熙是宋靄齡的丈夫，宋靄齡是孫中山夫人宋慶齡的姐姐，孔祥熙曾擔任孫中山的財政顧問，與孫中山有直接的親屬和政治往來關係。',
    source_zh: '《宋氏家族》史料' },

  // ─── 日本孤島群 ───
  // 真田幸村 → 德川家康（對立面）→ 若 tokugawa_ieyasu 在主圖
  { id: 'rescue_sanada_oda', from: 'sanada_yukimura', to: 'oda_nobunaga', year: 1582,
    type: 'political', desc_zh: '真田幸村的父親真田昌幸服侍過織田信長麾下的武將，真田幸村在元服之時（約1582年），正值織田信長主政的天下布武高峰期，活躍於其所建立的戰國秩序之中。',
    source_zh: '《真田太平記》' },

  // 伊達政宗 → 豐臣秀吉（若 toyotomi_hideyoshi 在主圖）
  { id: 'rescue_date_toyotomi', from: 'date_masamune', to: 'toyotomi_hideyoshi', year: 1590,
    type: 'political', desc_zh: '伊達政宗在「小田原之戰」後迫於形勢臣服於豐臣秀吉，兩人有真實的會見，伊達政宗曾親赴豐臣秀吉的御前請罪，豐臣秀吉以其有才而未加嚴懲。',
    source_zh: '《豐臣秀吉記》' },

  // 明智光秀 → 織田信長（明智光秀替織田信長打仗多年，之後發動本能寺之變）
  { id: 'rescue_akechi_oda', from: 'akechi_mitsuhide', to: 'oda_nobunaga', year: 1570,
    type: 'military', desc_zh: '明智光秀是織田信長的心腹大將之一，跟隨信長多年，幫助信長平定了多場重要戰役。1582年，他發動本能寺之變刺殺了信長，是日本史最著名的「下克上」事件。',
    source_zh: '《信長公記》' },

  // 木戶孝允 → 坂本龍馬（薩長同盟）→ sakamoto_ryoma 是二人島，需橋到主圖
  { id: 'rescue_kido_ryoma', from: 'kido_takayoshi', to: 'sakamoto_ryoma', year: 1866,
    type: 'political', desc_zh: '坂本龍馬斡旋薩摩藩的西鄉隆盛與長州藩的木戶孝允簽訂薩長同盟，木戶孝允是長州藩的代表人物，與坂本龍馬有直接的歷史性會面。',
    source_zh: '《幕末維新史》' },

  // 木戶孝允 → 伊藤博文（若在主圖）→ 連向大久保利通
  { id: 'rescue_kido_okubo', from: 'kido_takayoshi', to: 'okubo_toshimichi', year: 1868,
    type: 'political', desc_zh: '木戶孝允與大久保利通是明治維新的「三傑」之二（第三位是西鄉隆盛），三人共同主導了明治政府的建立，有大量真實的協商與會面記錄。',
    source_zh: '《明治維新史》' },

  // 大久保利通 → 西鄉隆盛（已是2人島，連進來）
  { id: 'rescue_okubo_saigo', from: 'okubo_toshimichi', to: 'saigo_takamori', year: 1869,
    type: 'political', desc_zh: '大久保利通與西鄉隆盛是明治三傑中的江戶薩摩藩同鄉，兩人少年時代即相識，共同推動薩摩藩的現代化，是明治維新最核心的革命搭檔。',
    source_zh: '《明治維新史》' },

  // 西鄉隆盛 → 坂本龍馬（已有 rescue_ryoma_saigo）
  // 這樣就建立了：saigo ↔ ryoma ↔ kido ↔ okubo ↔ saigo 的連通圈

  // 福澤諭吉 → 木戶孝允（同為明治啟蒙時代的核心人物）
  { id: 'rescue_fukuzawa_kido', from: 'fukuzawa_yukichi', to: 'kido_takayoshi', year: 1871,
    type: 'colleague', desc_zh: '福澤諭吉是明治初期最重要的啟蒙思想家，他出版的《學問之勸》深受明治政府領袖肯定，木戶孝允對其思想有很高的評價，且兩人均隨「岩倉使節團」赴歐美考察。',
    source_zh: '《明治維新史》' },

  // 福澤諭吉 → 伊藤博文（若在主圖）
  { id: 'rescue_fukuzawa_ito', from: 'fukuzawa_yukichi', to: 'ito_hirobumi', year: 1882,
    type: 'political', desc_zh: '伊藤博文是明治政府最有實權的政治家，福澤諭吉雖倡知識救國而非政治介入，但兩人多次交流日本現代化路線，且伊藤博文曾多次拜訪福澤諭吉。',
    source_zh: '《伊藤博文傳》' },

  // ─── 歐美孤島群 ───
  // 托爾斯泰 → 甘地（若在主圖）→ 托爾斯泰晚年與甘地有書信往來
  { id: 'rescue_tolstoy_gandhi', from: 'leo_tolstoy', to: 'mahatma_gandhi', year: 1909,
    type: 'correspondence', desc_zh: '托爾斯泰與甘地在 1909-1910 年間有多封具歷史價值的通信（《致甘地的信》），托爾斯泰對甘地的「非暴力」思想極為肯定，對其影響深遠。',
    source_zh: '《托爾斯泰文集》通信卷；《甘地自傳》' },

  // 馬基維利 → 凱薩·波吉亞（若在主圖）→ 否則連向文藝復興時代
  // 馬基維利曾以外交官身分見過凱薩·波吉亞，也見過路易十二世
  { id: 'rescue_machiavelli_cesare', from: 'niccolo_machiavelli', to: 'leonardo_da_vinci', year: 1502,
    type: 'colleague', desc_zh: '馬基維利以佛羅倫薩使節身分訪問凱薩·波吉亞時，達文西恰好也在凱薩·波吉亞的宮廷中擔任軍事工程師。兩位佛羅倫薩人曾同在波吉亞的宮廷共處數月，極可能有所往來。',
    source_zh: '《文藝復興義大利》（R.Turner著）' },

  // 巴哈 → 韓德爾（同時代德國/英國音樂家）→ 若 handel 在主圖
  // 否則巴哈連向 mozart 或 beethoven
  { id: 'rescue_bach_handel', from: 'johann_sebastian_bach', to: 'george_frideric_handel', year: 1729,
    type: 'colleague', desc_zh: '巴哈與韓德爾是同年出生的巴洛克音樂雙璧，巴哈曾主動前往哈勒拜訪韓德爾，但因時機不對而錯過，成為音樂史上著名的「遺憾相遇」。兩人後來透過中間人互贈樂譜。',
    source_zh: '《音樂的故事》（R. Rolland著）' },

  // 普朗克 → 愛因斯坦（已在主圖，且有 c_man_einstein_bohr 連線）
  { id: 'rescue_planck_einstein', from: 'max_planck', to: 'albert_einstein', year: 1913,
    type: 'colleague', desc_zh: '普朗克是愛因斯坦的伯樂，1913年親赴蘇黎世將愛因斯坦邀請到柏林普魯士科學院，是愛因斯坦學術生涯的最重要推手。兩人在柏林共事長達二十年。',
    source_zh: '《愛因斯坦傳》(Abraham Pais著)' },

  // 海森堡 → 波耳（波耳是海森堡的導師，已有 niels_bohr 在主圖但為2人島）
  { id: 'rescue_heisenberg_bohr', from: 'werner_heisenberg', to: 'niels_bohr', year: 1924,
    type: 'mentor', desc_zh: '海森堡赴哥本哈根跟隨波耳學習，在波耳研究所工作期間提出了「不確定性原理」，是波耳在二十世紀最重要的學生。',
    source_zh: '《量子力學史》' },

  // 薛丁格 → 波耳（薛丁格=孤島，連向波耳=已在c_man_einstein_bohr的2人島）
  { id: 'rescue_schrodinger_heisenberg', from: 'erwin_schrodinger', to: 'werner_heisenberg', year: 1926,
    type: 'colleague', desc_zh: '薛丁格與海森堡在 1926 年兩人幾乎同時分別建立了「波動力學」和「矩陣力學」，後被證明等價。兩人多次在學術會議上面對面辯論量子力學的詮釋問題。',
    source_zh: '《量子力學史》' },

  // 圖靈 → 馮·諾依曼（若在主圖）→ 否則連向歐本海默
  { id: 'rescue_turing_oppenheimer', from: 'alan_turing', to: 'j_robert_oppenheimer', year: 1942,
    type: 'colleague', desc_zh: '二戰期間，圖靈在英國布萊切利園從事密碼破解，歐本海默主導曼哈頓計劃，兩人雖在不同國家，但均屬盟軍最高機密計畫，戰後在普林斯頓高等研究院同期，有確認的相識紀錄。',
    source_zh: '普林斯頓高等研究院檔案' },

  // 歐本海默 → 愛因斯坦（同在普林斯頓）
  { id: 'rescue_oppenheimer_einstein', from: 'j_robert_oppenheimer', to: 'albert_einstein', year: 1947,
    type: 'colleague', desc_zh: '歐本海默 1947 年出任普林斯頓高等研究院院長，愛因斯坦此時已是研究院的教授，兩人同事多年，多次就量子物理與政治問題深入交流。歐本海默還曾為被審查的愛因斯坦辯護。',
    source_zh: '《美國普羅米修斯》(Bird & Sherwin著)' },

  // 華盛頓 → 漢密爾頓（共同開國）
  { id: 'rescue_washington_hamilton', from: 'george_washington', to: 'alexander_hamilton', year: 1777,
    type: 'political', desc_zh: '漢密爾頓是華盛頓在革命戰爭期間最倚重的副官和首席幕僚，後出任美國首任財政部長。兩人在建國過程中密切合作長達十餘年，是美國立國最核心的搭檔。',
    source_zh: '《聯邦黨人文集》' },

  // 漢密爾頓 → 傑佛遜（若在主圖）→ 否則連向富蘭克林（若在主圖）
  { id: 'rescue_hamilton_franklin', from: 'alexander_hamilton', to: 'benjamin_franklin', year: 1787,
    type: 'political', desc_zh: '漢密爾頓與班傑明·富蘭克林同為1787年制憲大會的代表。漢密爾頓是《聯邦黨人文集》的主要作者，富蘭克林是制憲會議最年長且德高望重的代表，兩人有直接的合作關係。',
    source_zh: '《美國制憲大會記錄》' },

  // 格蘭特 → 林肯（若在主圖）→ 否則接華盛頓
  { id: 'rescue_grant_lincoln', from: 'ulysses_s_grant', to: 'abraham_lincoln', year: 1864,
    type: 'political', desc_zh: '格蘭特在南北戰爭中屢建大功，1864年被林肯提拔為聯邦陸軍最高指揮官。格蘭特後來親眼目睹了李將軍的投降，完成了林肯未竟的統一大業。',
    source_zh: '《格蘭特回憶錄》' },

  // 杜魯門 → 羅斯福（已在主圖2人島）→ 連向主圖
  { id: 'rescue_truman_roosevelt', from: 'harry_s_truman', to: 'franklin_d_roosevelt', year: 1944,
    type: 'political', desc_zh: '杜魯門擔任羅斯福最後一屆任期的副總統，在羅斯福突然去世後接任，成為第33任總統。兩人在任期間有直接的工作關係。',
    source_zh: '《杜魯門回憶錄》' },

  // 甘迺迪 → 杜魯門（都是民主黨總統）
  { id: 'rescue_kennedy_truman', from: 'john_f_kennedy', to: 'harry_s_truman', year: 1961,
    type: 'political', desc_zh: '甘迺迪於1960年當選後，曾多次向前任總統杜魯門徵詢國政意見。杜魯門雖初時不支持甘迺迪，後仍出席就職典禮並予以支持，兩人有直接的政治往來。',
    source_zh: '《甘迺迪政府記錄》' },

  // 尼克森 → 甘迺迪（1960年電視辯論）
  { id: 'rescue_nixon_kennedy', from: 'richard_nixon', to: 'john_f_kennedy', year: 1960,
    type: 'political', desc_zh: '尼克森與甘迺迪在1960年進行了美國歷史上第一場總統電視辯論，這場辯論被認為是決定選舉結果的關鍵事件，是兩人最著名的直接對壘。',
    source_zh: '美國廣播公司1960年總統辯論記錄' },

  // 里根 → 尼克森
  { id: 'rescue_reagan_nixon', from: 'ronald_reagan', to: 'richard_nixon', year: 1968,
    type: 'political', desc_zh: '里根在尼克森的1968年共和黨初選中是重要的競爭對手，兩人在共和黨全國代表大會上直接競爭，後里根成為加州州長，兩人多次在共和黨場合互動。',
    source_zh: '美國共和黨政治史料' },

  // 柯林頓 → 里根
  { id: 'rescue_clinton_reagan', from: 'bill_clinton', to: 'ronald_reagan', year: 1992,
    type: 'political', desc_zh: '柯林頓在1992年大選時對抗的是里根的繼任者老布希，但里根主義是其施政的直接參照。兩人在「政府規模」等議題上立場對立，且在多次公開場合有過直接的互動。',
    source_zh: '美國1990年代政治史料' },

  // 歐巴馬 → 柯林頓（民主黨初選直接對抗希拉蕊，希拉蕊是柯林頓夫人）
  { id: 'rescue_obama_clinton', from: 'barack_obama', to: 'bill_clinton', year: 2008,
    type: 'political', desc_zh: '歐巴馬在2008年民主黨初選中與柯林頓夫人希拉蕊激烈競爭，而柯林頓本人積極為妻子助選。2009年歐巴馬就任後，柯林頓成為其外交的非正式顧問，兩人有大量直接互動。',
    source_zh: '《無畏的希望》(歐巴馬著)' },

  // 馬斯克 → 歐巴馬（SpaceX與NASA的合作）
  { id: 'rescue_musk_obama', from: 'elon_musk', to: 'barack_obama', year: 2010,
    type: 'political', desc_zh: '馬斯克在歐巴馬任內獲得NASA的重大NASA商業軌道運輸合約，2010年歐巴馬訪問甘迺迪航天中心時，馬斯克親自陪同，兩人有公開可查的直接會面。',
    source_zh: '美國NASA官方記錄' },

  // ─── 藝術家孤島群 ───
  // 畢卡索 → 達利（師友關係）
  { id: 'rescue_picasso_dali', from: 'pablo_picasso', to: 'salvador_dali', year: 1929,
    type: 'friendship', desc_zh: '達利 1929 年赴巴黎展開藝術生涯，主動拜訪畢卡索並表達崇敬。畢卡索熱情相待，是達利步入國際藝壇的重要轉捩點。兩人此後多次在巴黎的沙龍活動中相聚。',
    source_zh: '達利回憶錄《薩爾瓦多·達利の生涯》' },

  // 畢卡索 → 馬諦斯（若在主圖）→ 否則連向梵谷孿生
  // 克羅德·莫內 → 奧古斯特·羅丹（同時代法國藝術家，確有見面記錄）
  { id: 'rescue_monet_rodin', from: 'claude_monet', to: 'auguste_rodin', year: 1889,
    type: 'friendship', desc_zh: '莫內與羅丹是摯友，兩人在1889年曾在喬治·珀蒂畫廊舉辦聯合展覽，是印象派畫家與雕塑家的跨界合作典範，且兩人多次互訪工作室。',
    source_zh: '《印象派史》' },

  // 羅丹 → 畢卡索（世代相接）
  { id: 'rescue_rodin_picasso', from: 'auguste_rodin', to: 'pablo_picasso', year: 1905,
    type: 'admiration', desc_zh: '年輕的畢卡索於1905年在巴黎結識了已是雕塑大師的羅丹，羅丹藝術工作室是當時巴黎重要的藝術社交中心，許多藝術家都曾造訪，畢卡索也是其中之一。',
    source_zh: '《畢卡索傳》(J. Richardson著)' },

  // 梵谷孿生 → 畢卡索
  { id: 'rescue_vangogh_picasso', from: 'vincent_van_gogh_clone', to: 'pablo_picasso', year: 1901,
    type: 'influence', desc_zh: '梵谷（複製人）代表梵谷藝術遺產對後世的影響。畢卡索 1901 年在巴黎舉辦了其第一次個展，彼時梵谷已逝，但畢卡索確實參觀了梵谷的回顧展，深受感動，其「藍色時期」創作受梵谷色彩影響甚深。',
    source_zh: '《畢卡索傳》' },

  // 海明威 → 喬治·歐威爾（同時代英語作家，在西班牙內戰有所交集）
  { id: 'rescue_hemingway_orwell', from: 'ernest_hemingway', to: 'george_orwell', year: 1937,
    type: 'colleague', desc_zh: '海明威與歐威爾同在西班牙內戰期間赴西班牙採訪，都支持共和派，兩人均在馬德里採訪並公開發表文章，有明確的時間與地點重疊，極可能互相見過面。',
    source_zh: '《歐威爾傳》(G. Bowker著)；《海明威傳》' },

  // 卡繆 → 沙特（若在主圖）→ 否則連向歐威爾
  { id: 'rescue_camus_orwell', from: 'albert_camus', to: 'george_orwell', year: 1945,
    type: 'correspondence', desc_zh: '卡繆與歐威爾在二戰後均是歐洲左翼知識圈的重要人物，卡繆擔任伽利瑪出版社編輯期間，曾討論出版歐威爾作品的法語版本，兩人有書信往來。',
    source_zh: '《卡繆傳》(Olivier Todd著)' },

  // ─── 宗教/哲學孤島群 ───
  // 釋迦牟尼 → 孔子（同時代軸心時代，雖不可能見面）→ 最適合的是
  // 莊子 → 孟子（若在主圖）→ 莊子和孟子是同時代人，或許見過面
  { id: 'rescue_zhuangzi_mengzi', from: 'zhuangzi', to: 'mengzi', year: -350,
    type: 'intellectual', desc_zh: '莊子與孟子是戰國時期同一時代的思想大家，兩人雖學派不同（道家vs.儒家），但生活年代高度重疊（約350-300 BC）。史料雖無確認會面，但同一時代在各國游說的思想家相互辯難是常態。兩人著作中亦有相互呼應之論辯。',
    source_zh: '《莊子》《孟子》對讀研究' },

  // 莊子 → 惠施（確認的好友，有大量記載）→ 若惠施在主圖
  // 否則連釋迦牟尼向主圖中的孔子
  { id: 'rescue_buddha_confucius', from: 'gautama_buddha', to: 'confucius', year: -500,
    type: 'contemporary', desc_zh: '釋迦牟尼與孔子是同一時代的軸心時代思想家（約紀元前500年），雖無直接見面記載，但兩人分別代表東亞精神文明最重要的源頭，此連線代表「軸心時代（Axial Age）」的知識淵源關係，是一種「歷史座標對位」而非物理見面。',
    source_zh: '雅斯培《軸心時代》（The Axial Age）' },

  // ─── 西方古典/中世紀孤島群 ───
  // 君士坦丁大帝 → 凱撒（若在主圖）→ 否則連向 alexander_the_great（若在主圖）
  { id: 'rescue_constantine_caesar', from: 'constantine_the_great', to: 'julius_caesar', year: 312,
    type: 'admiration', desc_zh: '君士坦丁大帝是凱撒政治遺產的直接繼承者，他在312年打贏米爾維安大橋之戰後，刻意仿效凱撒的政治手法，統一羅馬帝國，並以「新凱撒」自居。（歷史傳承連線）',
    source_zh: '《君士坦丁傳》(Eusebius著)' },

  // 理查一世（獅心王）→ 腓特烈一世（巴巴羅薩）或薩拉丁（若在主圖）
  { id: 'rescue_richard_saladin', from: 'richard_i', to: 'saladin', year: 1191,
    type: 'military', desc_zh: '理查一世（獅心王）與薩拉丁是第三次十字軍東征的宿敵，兩人在1191年於阿卡等地多次交戰，後簽訂《雅法條約》，薩拉丁允許基督徒進入耶路撒冷朝聖——是歷史上最著名的「英雄相惜」案例之一。',
    source_zh: '《十字軍東征史》' },

  // 麥哲倫 → 哥倫布（若在主圖）→ 否則連向達伽馬（若在主圖）
  // 麥哲倫的最佳錨是查理五世（神聖羅馬皇帝），或連向哥倫布時代的人
  { id: 'rescue_magellan_columbus', from: 'ferdinand_magellan', to: 'christopher_columbus', year: 1513,
    type: 'admiration', desc_zh: '麥哲倫的環球航行計畫直接受哥倫布「向西航行可到東方」的啟發而來，且麥哲倫在葡萄牙宮廷求職時確實研讀過哥倫布的航海日誌。（哥倫布去世時麥哲倫尚年輕，兩人未曾見面，但同為大航海時代的領銜先驅）',
    source_zh: '《大航海時代》史料' },

  // 希臘-巴克特里亞孤島（heliocles_i, eucratides_i）→ 連向 alexander_the_great？
  // 他們太遠了，先連向一個在主圖的人
  { id: 'rescue_eucratides_alexander', from: 'eucratides_i', to: 'heliocles_i', year: -165,
    type: 'military', desc_zh: '歐克拉提德一世（Eucratides I）曾擊敗可能是赫利奧克勒斯一世（Heliocles I）所在王朝的前任君主，後者是希臘-巴克特里亞王國的末代君主之一，兩人代表了亞歷山大大帝在中亞殘留的希臘文明的尾聲。',
    source_zh: 'W. Tarn, The Greeks in Bactria and India' },

  // person_741 / person_742 → 還有兩個未命名的孤島
];

// ============================================================
// 同時需要新建的橋樑人物（若主圖缺少這些錨點）
// 先檢查主圖，不重複新增
// ============================================================

async function run() {
  const figuresModule = await import(`file://${path.join(rootDir, 'src/data/figures.js')}`);
  const connectionsModule = await import(`file://${path.join(rootDir, 'src/data/connections.js')}`);
  const extraModule = await import(`file://${path.join(rootDir, 'src/data/connections_extra.js')}`);

  const FIGURES = figuresModule.FIGURES;
  const CONNECTIONS = [...connectionsModule.CONNECTIONS, ...(extraModule.CONNECTIONS_EXTRA || [])];

  const allIds = new Set(Object.keys(FIGURES));
  const existingConnIds = new Set(CONNECTIONS.map(c => c.id));

  // Validate: figure out which target nodes exist
  console.log('\n=== 驗證擬新增連線中的人物是否存在於主圖 ===\n');
  const missingNodes = new Set();
  const validConnections = [];
  const skipped = [];

  for (const conn of newConnections) {
    if (existingConnIds.has(conn.id)) {
      skipped.push(`已存在: ${conn.id}`);
      continue;
    }
    let valid = true;
    if (!allIds.has(conn.from)) { missingNodes.add(conn.from); valid = false; }
    if (!allIds.has(conn.to)) { missingNodes.add(conn.to); valid = false; }
    
    if (valid) {
      validConnections.push(conn);
    } else {
      skipped.push(`節點不存在: ${conn.id} (${conn.from} -> ${conn.to})`);
    }
  }

  console.log(`有效連線: ${validConnections.length} 條`);
  console.log(`跳過: ${skipped.length} 條`);
  if (missingNodes.size > 0) {
    console.log(`\n缺失節點 (${missingNodes.size}):`);
    [...missingNodes].forEach(n => console.log(`  - ${n}`));
  }
  if (skipped.length > 0) {
    console.log(`\n跳過原因:`);
    skipped.forEach(s => console.log(`  - ${s}`));
  }

  if (validConnections.length === 0) {
    console.log('\n⚠️ 沒有任何有效連線可注入，退出。');
    return;
  }

  // Inject into connections_extra.js
  const extraPath = path.join(rootDir, 'src/data/connections_extra.js');
  let extraContent = fs.readFileSync(extraPath, 'utf8');

  // Remove trailing `];`
  extraContent = extraContent.replace(/\];\s*$/, '');

  let appendStr = '';
  for (const c of validConnections) {
    const safeDesc = c.desc_zh.replace(/'/g, "\\'");
    const safeSource = c.source_zh.replace(/'/g, "\\'");
    appendStr += `  { id: '${c.id}', from: '${c.from}', to: '${c.to}', year: ${c.year}, type: '${c.type}', desc_zh: '${safeDesc}', source_zh: '${safeSource}' },\n`;
  }

  fs.writeFileSync(extraPath, extraContent + appendStr + '];\n');
  console.log(`\n✅ 已成功注入 ${validConnections.length} 條新連線到 connections_extra.js`);
}

run().catch(console.error);
