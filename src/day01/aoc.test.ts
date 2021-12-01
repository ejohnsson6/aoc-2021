import { getSolutionPart1, getSolutionPart2, parseInput } from './aoc';

const testInput1 = `199
200
208
210
200
207
240
269
260
263`;
const testInput2 = testInput1;

test('Test part 1', () => {
    expect(getSolutionPart1(parseInput(testInput1))).toBe(7);
});

test('Test part 2', () => {
    expect(getSolutionPart2(parseInput(testInput2))).toBe(5);
});
