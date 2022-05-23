const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output, stdout } = require('process');
const line = readline.createInterface({ input, output });

stdout.write('Привет, введите текст, а я запишу его в файл \n');

const writeText =  fs.createWriteStream(path.join(__dirname, './main.txt'));
process.on('exit', () => stdout.write('Удачи!'));
line.on('line', (input) => {
    if(input==='exit'){
      line.close();
    }
    writeText.write(`${input}\n`);
  });