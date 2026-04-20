const fs = require('fs');
const figures = fs.readFileSync('./src/data/figures.js', 'utf8');
const lines = figures.split('\n');
let currentId = null;
let hasName = false;
for (let line of lines) {
    const idMatch = line.match(/^\s*(\w+): \{/);
    if (idMatch) {
        if (currentId && !hasName) console.log(`Figure ${currentId} is missing name_zh!`);
        currentId = idMatch[1];
        hasName = false;
    }
    if (line.includes('name_zh:')) hasName = true;
}
