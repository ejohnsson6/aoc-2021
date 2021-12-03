import { getSolutionPart1, getSolutionPart2, parseInput } from './aoc';

const testInput1 = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
const testInput2 = testInput1;

test('Test part 1', () => {
    expect(getSolutionPart1(parseInput(testInput1))).toBe(198);
});

test('Test part 2', () => {
    expect(getSolutionPart2(parseInput(testInput2))).toBe(230);
});
