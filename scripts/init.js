const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Choose your setup (js/ts): ', (answer) => {
  if (answer !== 'js' && answer !== 'ts') {
    console.log('Invalid choice. Please choose "js" or "ts".');
    rl.close();
    return;
  }

  const srcDir = path.join(__dirname, '..', answer);
  const destDir = path.join(__dirname, '..');

  fs.readdir(srcDir, (err, files) => {
    if (err) {
      console.error(`Failed to read ${srcDir}`);
      rl.close();
      return;
    }

    files.forEach(file => {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);

      if (fs.lstatSync(srcFile).isDirectory()) {
        fs.cpSync(srcFile, destFile, { recursive: true });
      } else {
        fs.copyFileSync(srcFile, destFile);
      }
    });

    console.log(`Project initialized with ${answer.toUpperCase()} setup.`);
    rl.close();
  });
});
