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
    const sum = calculateSum(input);
    const gamma = binArrayToNumber(sum.map((v) => (v >= 0 ? 1 : 0)));
    const epsilon = binArrayToNumber(sum.map((v) => (v >= 0 ? 0 : 1)));
    return gamma * epsilon;
};

export const getSolutionPart2 = (input: number[][]): number => {
    let sum = calculateSum(input);
    let oxygenNumbers = [...input];
    let i = 0;
    while (oxygenNumbers.length > 1) {
        oxygenNumbers = oxygenNumbers.filter(
            (row) => row[i] === (sum[i] >= 0 ? 1 : 0)
        );
        sum = calculateSum(oxygenNumbers);
        i++;
    }
    let scrubberNumbers = [...input];
    i = 0;
    while (scrubberNumbers.length > 1) {
        sum = calculateSum(scrubberNumbers);
        scrubberNumbers = scrubberNumbers.filter(
            (row) => row[i] === (sum[i] < 0 ? 1 : 0)
        );
        i++;
    }
    const oNum = binArrayToNumber(oxygenNumbers[0]);
    const sNum = binArrayToNumber(scrubberNumbers[0]);
    return oNum * sNum;
};

const binArrayToNumber = (array: number[]): number =>
    array.reduce((p, v, i) => p | (v << (array.length - i - 1)), 0);

const calculateSum = (rows: number[][]): number[] => {
    const sum: number[] = [];
    rows.forEach((row) => {
        for (let i = 0; i < row.length; i++) {
            const prevVal = sum[i] || 0;
            const newVal = prevVal + (row[i] === 1 ? 1 : -1);
            sum[i] = newVal;
        }
    });
    return sum;
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
