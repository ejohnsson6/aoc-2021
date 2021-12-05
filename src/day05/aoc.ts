import _ from 'lodash';
import { getInput } from '../common/get-input';

export const DAY = 5;

export const parseInput = (
    data: string
): [[number, number], [number, number]][] => {
    return data
        .trim()
        .split('\n')
        .map((line) => {
            const sLine = line.split(' -> ');
            const ssLine0 = sLine[0]
                .split(',')
                .map((v) => Number.parseInt(v, 10));
            const ssLine1 = sLine[1]
                .split(',')
                .map((v) => Number.parseInt(v, 10));
            return [
                [ssLine0[0], ssLine0[1]],
                [ssLine1[0], ssLine1[1]],
            ];
        });
};

const genFloorMap = (
    input: [[number, number], [number, number]][]
): number[][] => {
    let maxx = 0;
    let maxy = 0;
    for (const [[x1, y1], [x2, y2]] of input) {
        const maxx1x2 = Math.max(x1, x2);
        const maxy1y2 = Math.max(y1, y2);
        if (maxx1x2 > maxx) {
            maxx = maxx1x2;
        }
        if (maxy1y2 > maxy) {
            maxy = maxy1y2;
        }
    }
    return new Array(maxy + 1)
        .fill(null)
        .map(() => new Array(maxx + 1).fill(0));
};

const range = (x1: number, x2: number): number[] => {
    if (x2 >= x1) {
        return _.range(x1, x2 + 1);
    } else {
        return _.range(x1, x2 - 1, -1);
    }
};

export const getSolutionPart1 = (
    input: [[number, number], [number, number]][]
): number => {
    const floorMap = genFloorMap(input);
    for (const [[x1, y1], [x2, y2]] of input) {
        if (x1 === x2) {
            for (const i of range(y1, y2)) {
                floorMap[i][x1]++;
            }
        } else if (y1 === y2) {
            for (const i of range(x1, x2)) {
                floorMap[y1][i]++;
            }
        }
    }
    return floorMap
        .map((row) => row.filter((v) => v > 1).length)
        .reduce((a, b) => a + b, 0);
};

export const getSolutionPart2 = (
    input: [[number, number], [number, number]][]
): number => {
    const floorMap = genFloorMap(input);
    for (const [[x1, y1], [x2, y2]] of input) {
        if (x1 === x2) {
            for (const i of range(y1, y2)) {
                floorMap[i][x1]++;
            }
        } else if (y1 === y2) {
            for (const i of range(x1, x2)) {
                floorMap[y1][i]++;
            }
        } else {
            const rx = range(x1, x2);
            const ry = range(y1, y2);
            const rr = _.zip(rx, ry);

            for (const [xx, yy] of rr) {
                floorMap[yy][xx]++;
            }
        }
    }
    return floorMap
        .map((row) => row.filter((v) => v > 1).length)
        .reduce((a, b) => a + b, 0);
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
