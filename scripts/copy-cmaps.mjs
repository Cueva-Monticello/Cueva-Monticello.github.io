import fs from 'node:fs';
import path from 'node:path';

function copyDir(from, to) {
  // Ensure target directory exists
  fs.mkdirSync(to, { recursive: true });

  const files = fs.readdirSync(from);
  files.forEach((file) => {
    fs.copyFileSync(path.join(from, file), path.join(to, file));
  });
}

const pdfjsDistPackageJsonPath = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  '../node_modules/pdfjs-dist/package.json'
);
const pdfjsDistPath = path.dirname(pdfjsDistPackageJsonPath);
const cMapsDir = path.join(pdfjsDistPath, 'cmaps');

const targetDir = path.join('public', 'cmaps');

copyDir(cMapsDir, targetDir);
