
const path =require('path');
const fs = require('fs');
const testFolder = path.join(__dirname,'secret-folder');
const { stat } = require('fs');
// проверка файлов в папке 
fs.readdir(testFolder, (err, files) => {
// перебор файлов
  files.forEach(file => {
    stat(path.join(__dirname,'secret-folder',file),(err, stats)=>{
      // проверка является ли файл папкой
      if(!stats.isDirectory()){
        console.log(path.parse(path.join(__dirname,'secret-folder', file)).name+'-'+path.extname(path.join(__dirname,'secret-folder',file)).substr(1)+'-'+stats.size);
      }
    });
  });
});