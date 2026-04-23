import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const figuresPath = path.join(rootDir, 'src/data/figures.js');
let figuresContent = fs.readFileSync(figuresPath, 'utf8');

const ai = new GoogleGenAI({ apiKey: "process.env.GEMINI_API_KEY" });

async function run() {
  console.log("Analyzing figures.js for person_XXX...");
  const tempMatches = [...figuresContent.matchAll(/id:\s*'(person_\d+)'/g)];
  const tempIds = [...new Set(tempMatches.map(m => m[1]))];
  console.log(`Found ${tempIds.length} person_XXX placeholders.`);

  if (tempIds.length === 0) {
    console.log("No person_XXX found.");
  } else {
    console.log("Skipping GenAI Pinyin translation due to 503 API limits. Preserving person_XXX IDs for now.");
  }

  console.log("Processing pending connections from temporary scripts...");
  // Now extract connections from append_conn.js and fix_vangogh.js
  const appendFile = path.join(rootDir, 'append_conn.js');
  const fixFile = path.join(rootDir, 'fix_vangogh.js');

  const extraConnsStr = [];
  
  if (fs.existsSync(appendFile)) {
    const c = fs.readFileSync(appendFile, 'utf8');
    const m = c.match(/const newConns = `([\s\S]+?)`;/);
    if (m) {
      let lines = m[1].replace(/\];/g, '').trim();
      extraConnsStr.push(lines);
    }
  }

  if (fs.existsSync(fixFile)) {
    const c = fs.readFileSync(fixFile, 'utf8');
    const m = c.match(/const newConns = `([\s\S]+?)`;/);
    if(m) {
       let lines = m[1].replace(/\];/g, '').trim();
       extraConnsStr.push(lines);
    }
  }

  if (extraConnsStr.length > 0) {
      const extraPath = path.join(rootDir, 'src/data/connections_extra.js');
      let combined = extraConnsStr.join(',\n').replace(/^\[|\]$/g, '');
      const fixedLines = combined.split('\n').filter(l => l.trim() !== '' && !l.includes(']')).join('\n');
      
      let outContent = `export const CONNECTIONS_EXTRA = [\n${fixedLines}\n];\n`;
      fs.writeFileSync(extraPath, outContent);
      console.log("Created connections_extra.js with temporary links!");

      // Now ensure connections.js imports it
      const connsMainPath = path.join(rootDir, 'src/data/connections.js');
      let connsContent = fs.readFileSync(connsMainPath, 'utf8');
      
      if (!connsContent.includes('CONNECTIONS_EXTRA')) {
          connsContent = connsContent.replace(
              /import \{ CONNECTIONS_MODERN \} from '\.\/connections_modern\.js';/,
              "import { CONNECTIONS_MODERN } from './connections_modern.js';\nimport { CONNECTIONS_EXTRA } from './connections_extra.js';"
          );
          
          connsContent = connsContent.replace(
              /\.\.\.CONNECTIONS_MODERN,/,
              "...CONNECTIONS_MODERN,\n  ...CONNECTIONS_EXTRA,"
          );
          fs.writeFileSync(connsMainPath, connsContent);
          console.log("Updated connections.js to include CONNECTIONS_EXTRA.");
      }
  }
}

run().catch(console.error);
