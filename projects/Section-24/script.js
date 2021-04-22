
import { largeNumber } from './script2.js';

// Inside package.json add "type": "module", to use imports like modules
const a = largeNumber;
const b = 5;

// Run usingL node script.js
console.log(a+b);