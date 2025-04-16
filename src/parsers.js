import path from 'path';
import fs from 'fs';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const readFile = (filepath) => {
  const fullPath = getFullPath(filepath);
  return fs.readFileSync(fullPath, 'utf-8');
};

const parse = (content, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(content);
    default:
      throw new Error(`Unsupported file format: ${format}`);
  }
};

const getData = (filepath) => {
  const content = readFile(filepath);
  const format = getFileFormat(filepath);
  return parse(content, format);
};

export default getData;
