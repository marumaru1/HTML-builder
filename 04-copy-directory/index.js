const path =require('path');
const fs = require('fs');
const testFolder = path.join(__dirname,'files-copy');
//создание папки
fs.mkdir(testFolder, ()=>{});
// перебор файлов в папке и копирование
fs.readdir(path.join(__dirname,'files'), (err, files) => {
  files.forEach(file => {
    fs.copyFile(path.join(__dirname,'files', file), path.join(__dirname,'files-copy', file), ()=>{});
  });
});
