import fs from 'node:fs';
import path from 'node:path';

const pdfjsDistPackageJsonPath = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  '../node_modules/pdfjs-dist/package.json'
);
const pdfjsDistPath = path.dirname(pdfjsDistPackageJsonPath);

const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.min.js');

const targetDir = 'public';
const targetPath = path.join(targetDir, 'pdf.worker.js');

// Ensure target directory exists
fs.mkdirSync(targetDir, { recursive: true });

// Copy file
fs.copyFileSync(pdfWorkerPath, targetPath);
