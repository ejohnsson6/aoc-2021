import _ from 'lodash';
import { getInput } from '../common/get-input';

export const DAY = 6;

export const parseInput = (data: string): number[] => {
    return _(data)
        .trim()
        .split(',')
        .map((v) => parseInt(v, 10));
};

const calculateNumberOfFish = (input: number[], days: number): number => {
    const fishCounter = new Array(9).fill(0);
    for (const fish of input) {
        fishCounter[fish]++;
    }
    for (const _i of _.range(0, days)) {
        const keepCountZero = fishCounter[0];
        // Dec all fishes 1-8
        for (const ii of _.range(0, 8)) {
            fishCounter[ii] = fishCounter[ii + 1];
        }
        // Re-add fishes at 0
        fishCounter[6] = (fishCounter[6] ?? 0) + keepCountZero;
        fishCounter[8] = keepCountZero;
    }
    return _.sum(fishCounter);
};

export const getSolutionPart1 = (input: number[]): number =>
    calculateNumberOfFish(input, 80);

export const getSolutionPart2 = (input: number[]): number =>
    calculateNumberOfFish(input, 256);

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
