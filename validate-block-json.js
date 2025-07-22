const fs = require('fs');
const path = require('path');

const blockJson = require('./build/todo-list/block.json');
const buildDir = path.resolve(__dirname, 'build/todo-list');

['style', 'editorStyle', 'editorScript', 'viewScript'].forEach((key) => {
  const val = blockJson[key];
  if (val?.startsWith('file:')) {
    const filePath = path.resolve(buildDir, val.replace('file:', ''));
    if (!fs.existsSync(filePath)) {
      console.warn(
        `⚠️ Warning: ${key} points to ${val}, but that file was not found in the build directory.`
      );
    }
  }
});
