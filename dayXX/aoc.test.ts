import { getSolutionPart1, getSolutionPart2 } from './aoc';

test('Test part 1', () => {
    expect(getSolutionPart1([1721, 979, 366, 299, 675, 1456])).toBe(514579);
});

test('Test part 2', () => {
    expect(getSolutionPart2([1721, 979, 366, 299, 675, 1456])).toBe(241861950);
});
