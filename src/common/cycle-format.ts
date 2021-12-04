// tslint:disable-next-line: no-submodule-imports
import colors from 'colors/safe';

export const cycleFormat = (cycle: any) => {
    const fmtNum = (num: number) =>
        colors.green(num.toLocaleString('en-us', { maximumFractionDigits: 0 }));

    console.log(colors.cyan(`${cycle.name}: (${cycle.samples} ops)`));
    console.log(
        `\tmean:\t${fmtNum(cycle.details.mean * Math.pow(10, 9))} ns/op`
    );
    console.log(
        `\tmedian:\t${fmtNum(cycle.details.median * Math.pow(10, 9))} ns/op`
    );
    console.log(`\tmax:\t${fmtNum(cycle.details.max * Math.pow(10, 9))} ns`);
    console.log(`\tmin:\t${fmtNum(cycle.details.min * Math.pow(10, 9))} ns`);
    console.log(
        `\t±:\t${fmtNum(
            (cycle.details.max - cycle.details.min) * Math.pow(10, 9)
        )} ns`
    );
};
