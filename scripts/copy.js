import fs from 'fs-extra';
import * as glob from 'glob';
import { normalizeFilePath } from './shared.js';
import dotenv from 'dotenv';

dotenv.config();

const startTime = Date.now();
const files = glob.sync(['src/**/*.!(ts)', 'src-webviews/**/*.lua']);

let filesCopied = 0;
for (let file of files) {
  const filePath = normalizeFilePath(file);

  if (filePath.includes('src/')) {
    const finalPath = filePath.replace('src/', `${process.env.CLIENT_DEST_PATH}/`);
    fs.copySync(filePath, finalPath, { overwrite: true });
  }

  if (filePath.includes('src-webviews')) {
    const finalPath = filePath.replace('src-webviews/', `${process.env.WEBVIEWS_DEST_PATH}/`);
    fs.copySync(filePath, finalPath, { overwrite: true });
  }

  filesCopied += 1;
}

console.log(`${filesCopied} Files Moved | ${Date.now() - startTime}ms`);
