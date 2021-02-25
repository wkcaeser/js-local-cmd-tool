#!/usr/bin/env node

const { convert } = require("./convert");
const fs = require('fs');

console.log(`current_dir: ${process.argv[0]}`);
console.log(`current_run_file: ${process.argv[1]}`);

let cmd = process.argv[2];
console.log(`current_run_cmd: ${cmd}\n`);
let data = process.argv[3];
let arround = process.argv[4];

if (cmd === "convert") {
  convert(data, arround);
} else if (cmd === "file") {
  try {
    data = fs.readFileSync(data, 'utf8');
    convert(data, arround);
  } catch (err) {
    console.error(err);
  }
} else {
  console.log(`unsupport param run cmd : ${cmd}`);
}
