#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from './gendiff.js';

const program = new Command();

program
  .name('gendiff')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .description('Compares two configuration files and shows a difference.')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format));
  });

if (process.argv.slice(2).length === 0) {
  program.help(); // покажет справку, но не вызовет process.exit(1)
} else {
  program.parse();
}