// tslint:disable-next-line: no-submodule-imports
import { CaseResult, Summary } from 'benny/lib/internal/common-types';
import colors from 'colors/safe';
import si from 'systeminformation';

export const cycleFormat = (cycle: CaseResult) => {
    const fmtNum = (num: number) =>
        colors.green(
            num.toLocaleString(undefined, { maximumFractionDigits: 0 })
        );

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

export const completeFormat = async (summary: Summary) => {
    console.log(
        colors.blue(
            `Finished ${
                summary.results.length
            } cases at ${summary.date.toLocaleTimeString()}`
        )
    );
    console.log(colors.blue(`System Information:`));
    const cpu = await si.cpu();
    console.log(
        `\tCPU: ` +
            colors.green(`${cpu.manufacturer} ${cpu.brand} ${cpu.speed} GHz`)
    );
    console.log(`\tOS: ` + colors.green(`${process.platform} ${process.arch}`));
    console.log(`\tNode: ` + colors.green(process.version));
};
