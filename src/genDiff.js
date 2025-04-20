import fs from 'fs';
import path from 'path';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const readJSON = (filepath) => {
  const fullPath = getFullPath(filepath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(content);
};

const genDiff = (filepath1, filepath2) => {
  const obj1 = readJSON(filepath1);
  const obj2 = readJSON(filepath2);

  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)]));
  const sortedKeys = keys.sort();

  const lines = sortedKeys.flatMap((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (!Object.hasOwn(obj2, key)) {
      return `  - ${key}: ${val1}`;
    }
    if (!Object.hasOwn(obj1, key)) {
      return `  + ${key}: ${val2}`;
    }
    if (val1 !== val2) {
      return [`  - ${key}: ${val1}`, `  + ${key}: ${val2}`];
    }
    return `    ${key}: ${val1}`;
  });

  return `{\n${lines.join('\n')}\n}`;
};

export default genDiff;
