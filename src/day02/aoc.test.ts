import { getSolutionPart1, getSolutionPart2, parseInput } from './aoc';

const testInput1 = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
const testInput2 = testInput1;

test('Test part 1', () => {
    expect(getSolutionPart1(parseInput(testInput1))).toBe(150);
});

test('Test part 2', () => {
    expect(getSolutionPart2(parseInput(testInput2))).toBe(900);
});
