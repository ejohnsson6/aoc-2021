import _ from 'lodash';
import { getInput } from '../common/get-input';

export const DAY = 3;

export const parseInput = (data: string): number[][] => {
    return _(data)
        .trim()
        .split('\n')
        .map((s) => s.split('').map((ss) => parseInt(ss, 2)));
};

export const getSolutionPart1 = (input: number[][]): number => {
    console.log(input);
    let sum = new Map<number, number>();
    input.forEach((row) => {
        for (let i = 0; i < row.length; i++) {
            const prevVal = sum.get(i) || 0;
            sum = sum.set(i, row[i] + prevVal);
        }
    });
    console.log(sum);
    let gamma = 0;
    let epsilon = 0;
    sum.forEach((val, key) => {
        if (val >= input.length / 2) {
            gamma |= 1 << (input[0].length - key - 1);
        } else {
            epsilon |= 1 << (input[0].length - key - 1);
        }
    });

    console.log(gamma.toString(2));
    console.log(epsilon.toString(2));
    const res = gamma * epsilon;
    return res;
};

export const getSolutionPart2 = (input: number[][]): number => {
    console.log(input);
    let sum = new Map<number, number>();
    input.forEach((row) => {
        for (let i = 0; i < row.length; i++) {
            const prevVal = sum.get(i) || 0;
            sum = sum.set(i, row[i] + prevVal);
        }
    });
    console.log(sum);

    let oxygenNumbers = input;
    let i = 0;
    while (oxygenNumbers.length > 1) {
        const newOxygenNumbers = oxygenNumbers.filter(
            (row) => (row[i] = sum.get(i) >= input.length / 2 ? 1 : 0)
        );
        if (newOxygenNumbers.length > 0) {
            oxygenNumbers = newOxygenNumbers;
        } else {
            oxygenNumbers.length = 1;
        }
        i++;
    }

    console.log(oxygenNumbers[0]);
    return 0;
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
