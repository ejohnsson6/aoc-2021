import b from 'benny';
import { cycleFormat } from '../common/bench-format';
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
        return () => {
            const pInput = parseInput(input);
            getSolutionPart1(pInput);
        };
    }),
    b.add('Part 2', async () => {
        const input = await getInput(DAY);
        return () => {
            const pInput = parseInput(input);
            getSolutionPart2(pInput);
        };
    }),
    b.cycle(cycleFormat),
    b.complete()
);
