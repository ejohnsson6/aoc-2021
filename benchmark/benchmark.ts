import b from 'benny';
import { main } from '../src/day01/aoc';

b.suite(
    'AOC Day 1',

    b.add('Part 1', () => {
        main();
    }),

    b.cycle(),
    b.complete()
);
