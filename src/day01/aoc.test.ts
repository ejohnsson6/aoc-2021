import { getSolutionPart1, getSolutionPart2, parseInput } from './aoc';

const testInput1 = `1721\n979\n366\n299\n675\n1456`;
const testInput2 = `1721\n979\n366\n299\n675\n1456`;

test('Test part 1', () => {
    expect(getSolutionPart1(parseInput(testInput1))).toBe(514579);
});

test('Test part 2', () => {
    expect(getSolutionPart2(parseInput(testInput2))).toBe(241861950);
});
