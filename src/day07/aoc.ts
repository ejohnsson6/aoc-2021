import _ from 'lodash';
import { getInput } from '../common/get-input';

export const DAY = 7;

export const parseInput = (data: string): number[] => {
    return _(data)
        .trim()
        .split(',')
        .map((v) => parseInt(v, 10));
};

export const getSolutionPart1 = (input: number[]): number =>
    Math.min(
        ..._.range(Math.min(...input), Math.max(...input) + 1).map((i) =>
            _.sum(input.map((v) => Math.abs(v - i)))
        )
    );

export const getSolutionPart2 = (input: number[]): number =>
    Math.min(
        ..._.range(Math.min(...input), Math.max(...input) + 1).map((i) =>
            _.sum(
                input.map((v) => {
                    const n = Math.abs(v - i);
                    return (Math.pow(n, 2) + n) / 2;
                })
            )
        )
    );

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
