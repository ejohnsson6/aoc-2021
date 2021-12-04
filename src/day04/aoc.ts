import _ from 'lodash';
import { getInput } from '../common/get-input';

export const DAY = 4;

export const parseInput = (data: string): [number[][][], number[]] => {
    const sections = data.split('\n\n');
    const draw = sections[0].split(',').map((v) => Number.parseInt(v, 10));
    const boards = sections.slice(1).map((board) =>
        board.split('\n').map((row) =>
            row
                .trim()
                .split(/\s+/)
                .map((v) => Number.parseInt(v, 10))
        )
    );
    return [boards, draw];
};

const arrayColumn = <T>(arr: T[][], n: number): T[] => arr.map((x) => x[n]);
const hasBingo = (board: number[][], drawn: Set<number>): boolean => {
    return (
        !!board.find((row) => row.every((v) => drawn.has(v))) ||
        !!Array.from(board.keys())
            .map((k) => arrayColumn(board, k))
            .find((row) => row.every((v) => drawn.has(v)))
    );
};

const countUnDrawn = (board: number[][], drawn: Set<number>): number =>
    board
        .map((row) =>
            row.filter((v) => !drawn.has(v)).reduce((a, b) => a + b, 0)
        )
        .reduce((a, b) => a + b, 0);

export const getSolutionPart1 = (input: [number[][][], number[]]): number => {
    const [boards, pile] = input;
    const drawn = new Set<number>();
    for (const draw of pile) {
        drawn.add(draw);
        const winner = boards.find((b) => hasBingo(b, drawn));
        if (winner) {
            return countUnDrawn(winner, drawn) * draw;
        }
    }
    return 0;
};

export const getSolutionPart2 = (input: [number[][][], number[]]): number => {
    let [boards, pile] = input;
    const drawn = new Set<number>();
    const minNumToDraw = Math.min(boards[0].length, boards[0][0].length);
    for (const draw of pile) {
        drawn.add(draw);
        if (boards.length < 2 && hasBingo(boards[0], drawn)) {
            return countUnDrawn(boards[0], drawn) * draw;
        }
        if (drawn.size >= minNumToDraw) {
            boards = boards.filter((b) => !hasBingo(b, drawn));
        }
    }
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
