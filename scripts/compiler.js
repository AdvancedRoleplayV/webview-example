import fs from 'fs-extra';
import * as glob from 'glob';
import swc from '@swc/core';
import { normalizeFilePath } from './shared.js';
import dotenv from 'dotenv';

dotenv.config();

const SWC_CONFIG = {
  jsc: {
    parser: {
      syntax: 'typescript',
      dynamicImport: true,
      decorators: true,
    },
    transform: {
      legacyDecorator: true,
      decoratorMetadata: true,
    },
    target: 'es2020',
  },
  sourceMaps: false,
};

const startTime = Date.now();
const filesToCompile = glob.sync("./src/**/*.ts");

if (fs.existsSync(process.env.CLIENT_DEST_PATH)) {
  fs.rmSync(process.env.CLIENT_DEST_PATH, { force: true, recursive: true });
}

let compileCount = 0;
for (let i = 0; i < filesToCompile.length; i++) {
  const filePath = normalizeFilePath(filesToCompile[i]);
  const finalPath = filePath.replace('src/', `${process.env.CLIENT_DEST_PATH}/`).replace('.ts', '.js');
  const compiled = swc.transformFileSync(filePath, SWC_CONFIG);
  fs.outputFileSync(finalPath, compiled.code, { encoding: 'utf-8' });
  compileCount += 1;
}

console.log(`${compileCount} Files Built | ${Date.now() - startTime}ms`);
