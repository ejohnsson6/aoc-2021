import _ from 'lodash';
import { getInput } from '../common/get-input';

export const DAY = 1;

export const parseInput = (data: string): number[] => {
    return _(data)
        .trim()
        .split('\n')
        .map((s) => parseInt(s, 10));
};

export const getSolutionPart1 = (input: number[]): number => {
    let num = 0;
    let last = -1;
    for (const i of input) {
        if (last !== -1) {
            if (i > last) {
                num = num + 1;
            }
        }
        last = i;
    }
    return num;
};

export const getSolutionPart2 = (input: number[]): number => {
    let num = 0;
    for (let i = 1; i <= input.length - 2; i++) {
        if (input[i + 2] > input[i - 1]) {
            num++;
        }
    }
    return num;
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
