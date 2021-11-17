import b from 'benny';
import { getSolutionPart1, getSolutionPart2, readAndParseInput } from './aoc';
const inputDay01 = readAndParseInput();
b.suite(
    'AOC Day 1',
    b.add('Part 1', () => {
        getSolutionPart1(inputDay01);
    }),
    b.add('Part 2', () => {
        getSolutionPart2(inputDay01);
    }),
    b.cycle(),
    b.complete()
);
