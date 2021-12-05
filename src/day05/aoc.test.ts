import { getSolutionPart1, getSolutionPart2, parseInput } from './aoc';

const testInput1 = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;
const testInput2 = testInput1;

test('Test part 1', () => {
    expect(getSolutionPart1(parseInput(testInput1))).toBe(5);
});

test('Test part 2', () => {
    expect(getSolutionPart2(parseInput(testInput2))).toBe(12);
});
