import b from 'benny';
import { getInput } from '../common/get-input';
import { DAY, getSolutionPart1, getSolutionPart2, parseInput } from './aoc';
b.suite(
    `AOC Day ${DAY}`,
    b.add('Parsing', async () => {
        const input = await getInput(DAY);
        return () => {
            parseInput(input);
        };
    }),
    b.add('Part 1', async () => {
        const input = await getInput(DAY);
        const pInput = parseInput(input);
        return () => {
            getSolutionPart1(pInput);
        };
    }),
    b.add('Part 2', async () => {
        const input = await getInput(DAY);
        const pInput = parseInput(input);
        return () => {
            getSolutionPart2(pInput);
        };
    }),
    b.cycle(),
    b.complete()
);
