import { getSolutionPart1, getSolutionPart2, parseInput } from './aoc';

const testInput1 = `3,4,3,1,2`;
const testInput2 = testInput1;

test('Test part 1', () => {
    expect(getSolutionPart1(parseInput(testInput1))).toBe(5934);
});

test('Test part 2', () => {
    expect(getSolutionPart2(parseInput(testInput2))).toBe(230);
});
