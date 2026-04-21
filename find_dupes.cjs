const fs = require('fs');
const figuresFile = './src/data/figures.js';
const content = fs.readFileSync(figuresFile, 'utf8');

const matches = [...content.matchAll(/(\w+): \{[\s\S]*?name_zh:\s*'([^']+)'/g)];
const nameToIds = {};

matches.forEach(m => {
    const id = m[1];
    const name = m[2];
    if (!nameToIds[name]) nameToIds[name] = [];
    nameToIds[name].push(id);
});

for (const [name, ids] of Object.entries(nameToIds)) {
    if (ids.length > 1) {
        console.log(`Duplicate Name [${name}]: ${ids.join(', ')}`);
    }
}
