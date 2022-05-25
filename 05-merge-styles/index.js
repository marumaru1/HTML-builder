const fs = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');

const sourcePath = path.resolve(__dirname, 'styles');
const outputPath = path.resolve(__dirname, 'project-dist');

const output = fs.createWriteStream(path.resolve(outputPath, 'bundle.css'));
async function createBundleCss() {
  try {
    const files = await readdir(sourcePath);

    files.forEach((file) => {
      const { ext } = path.parse(path.resolve(sourcePath, file));
      if (ext === '.css') {
        const readStream = fs.createReadStream(
          path.resolve(path.resolve(sourcePath, file)),
          'utf-8',
        );
        readStream.on('data', (chunk) => output.write(chunk));
      }
    });
  } catch (err) {
    console.log(err.message);
  }
}

createBundleCss();