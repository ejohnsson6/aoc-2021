import axios from 'axios';
import dotenv from 'dotenv';

export const getInput = async (day: number): Promise<string> => {
    dotenv.config();
    const input = await axios.get(
        `https://adventofcode.com/2021/day/${day}/input`,
        {
            headers: {
                cookie: `session=${process.env.SESSION}`,
            },
        }
    );
    return input.data;
};
