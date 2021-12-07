import { getSolutionPart1, getSolutionPart2, parseInput } from './aoc';

const testInput1 = `16,1,2,0,4,2,7,1,2,14`;
const testInput2 = testInput1;

test('Test part 1', () => {
    expect(getSolutionPart1(parseInput(testInput1))).toBe(37);
});

test('Test part 2', () => {
    expect(getSolutionPart2(parseInput(testInput2))).toBe(206);
});
