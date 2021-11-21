import _ from 'lodash';
import { getInput } from '../common/get-input';

export const DAY = 1;

export const getSolutionPart1 = (input: number[]): number => {
    const numberExists = new Set();
    input.forEach((v) => numberExists.add(v));
    for (const v of input) {
        const diff = 2020 - v;
        if (numberExists.has(diff)) {
            return v * diff;
        }
    }
    throw new Error('No numbers found');
};

export const parseInput = (data: string): number[] => {
    return _(data)
        .trim()
        .split('\n')
        .map((s) => parseInt(s, 10));
};

export const getSolutionPart2 = (input: number[]): number => {
    const numberExists = new Set();
    input.forEach((v) => numberExists.add(v));
    for (const [i, v] of input.entries()) {
        for (const [ii, vv] of input.entries()) {
            if (i === ii) {
                continue;
            }
            const diff = 2020 - v - vv;
            if (numberExists.has(diff)) {
                return v * vv * diff;
            }
        }
    }
    throw new Error('No numbers found');
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
