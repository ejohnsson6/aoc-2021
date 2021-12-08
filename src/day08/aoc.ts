import _ from 'lodash';
import { getInput } from '../common/get-input';

export const DAY = 8;

export const parseInput = (data: string): [Set<string>[], Set<string>[]][] => {
    return data
        .trim()
        .split('\n')
        .map((line) => {
            const inout = line.split(' | ');
            const inp = inout[0];
            const outp = inout[1];
            return [
                inp
                    .trim()
                    .split(' ')
                    .map((v) => new Set(v.split(''))),
                outp
                    .trim()
                    .split(' ')
                    .map((v) => new Set(v.split(''))),
            ];
        });
};

export const getSolutionPart1 = (
    input: [Set<string>[], Set<string>[]][]
): number => {
    const out = input.map((v) => v[1]).flat();
    const counter = _.countBy(out, _.size);
    return counter['2'] + counter['4'] + counter['3'] + counter['7'];
};

export const getSolutionPart2 = (
    input: [Set<string>[], Set<string>[]][]
): number => {
    let sum = 0;
    for (const row of input) {
        const flat = row.flat();
        const one = flat.find((l) => l.size === 2);
        const four = flat.find((l) => l.size === 4);
        const seven = flat.find((l) => l.size === 3);
        const eight = flat.find((l) => l.size === 7);

        const bd = difference(four, one);
        const eg = difference(difference(eight, four), seven);

        const three = flat.find(
            (l) => l.size === 5 && difference(l, one).size === 3
        );

        const two = flat.find(
            (l) => l.size === 5 && difference(l, eg).size === 3
        );
        const five = flat.find(
            (l) => l.size === 5 && difference(l, bd).size === 3
        );
        const nine = flat.find(
            (l) => l.size === 6 && difference(l, eg).size === 5
        );
        const six = flat.find(
            (l) => l.size === 6 && difference(l, one).size === 5
        );
        const zero = flat.find(
            (l) => l.size === 6 && difference(l, bd).size === 5
        );

        const snum = row[1].map((l) => {
            if (_.isEqual(l, zero)) {
                return 0;
            }
            if (_.isEqual(l, one)) {
                return 1;
            }
            if (_.isEqual(l, two)) {
                return 2;
            }
            if (_.isEqual(l, three)) {
                return 3;
            }
            if (_.isEqual(l, four)) {
                return 4;
            }
            if (_.isEqual(l, five)) {
                return 5;
            }
            if (_.isEqual(l, six)) {
                return 6;
            }
            if (_.isEqual(l, seven)) {
                return 7;
            }
            if (_.isEqual(l, eight)) {
                return 8;
            }
            if (_.isEqual(l, nine)) {
                return 9;
            }
        });
        sum += Number.parseInt(snum.join(''), 10);
    }
    return sum;
};

const difference = <T>(setA: Set<T>, setB: Set<T>): Set<T> => {
    const _difference = new Set(setA);
    for (const elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
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
