import fs from 'fs';
import path from 'path';

export const getSolution = (input: number[]): number => {
    return input[0];
};

const parseInput = (input: string): number[] => {
    const split = input.split(',');
    return split.map((s) => parseInt(s, 10));
};

export const main = () => {
    const data = fs.readFileSync('./input/day01.txt', 'utf8');
    const parsedData = parseInput(data);
    const result = getSolution(parsedData);
    console.log(result);
};

if (require.main === module) {
    main();
}
