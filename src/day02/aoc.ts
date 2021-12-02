import _, { split } from 'lodash';
import { getInput } from '../common/get-input';

export const DAY = 2;

export const parseInput = (data: string): [string, number][] => {
    return _(data)
        .trim()
        .split('\n')
        .map((s) => {
            const splitS = s.split(' ');
            return [splitS[0], Number.parseInt(splitS[1], 10)];
        });
};

export const getSolutionPart1 = (input: [string, number][]): number => {
    let horz = 0;
    let depth = 0;
    for (const [dir, amt] of input) {
        switch (dir) {
            case 'forward':
                horz += amt;
                break;
            case 'down':
                depth += amt;
                break;
            case 'up':
                depth -= amt;
                break;
        }
    }
    return horz * depth;
};

export const getSolutionPart2 = (input: [string, number][]): number => {
    let horz = 0;
    let depth = 0;
    let aim = 0;
    for (const [dir, amt] of input) {
        switch (dir) {
            case 'forward':
                horz += amt;
                depth += aim * amt;
                break;
            case 'down':
                aim += amt;
                break;
            case 'up':
                aim -= amt;
                break;
        }
    }
    return horz * depth;
};

const main = async () => {
    const data = await getInput(DAY);
    const input = parseInput(data);
    // Part 1
    const solution1 = getSolutionPart1(input);
    console.log(solution1);
    // Part 2
    const solution2 = getSolutionPart2(input);
    console.log(solution2);
};

if (require.main === module) {
    main();
}
