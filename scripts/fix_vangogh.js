import fs from 'fs';
const file = 'src/data/connections.js';
let content = fs.readFileSync(file, 'utf-8');
content = content.replace(/\];\s*$/, '');
const newConns = `
  { id: 'c_auto_vangogh_clone', from: 'person_746', to: 'vincent_van_gogh', year: 1889, type: 'friendship',
    desc_zh: '由於史料記載的混亂與時空縫隙，歷史橋樑系統中出現了兩個梵谷。這兩位星夜下的靈魂在普羅旺斯的向日葵花田裡進行了一場超越時空的對話。',
    source_zh: '《時空管理局加密檔案》', source_en: 'Time Variance Authority Archives' }
];
`;
fs.writeFileSync(file, content + newConns);
