const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/\\\`/g, '\`').replace(/\\\$/g, '$');
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInFiles('src');
