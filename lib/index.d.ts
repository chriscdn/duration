type TDurationInput = {
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    microseconds?: number;
};
export declare class Duration {
    private _microseconds;
    constructor(input: TDurationInput);
    static with(input: TDurationInput): Duration;
    static toWeeks(input: TDurationInput): number;
    static toDays(input: TDurationInput): number;
    static toHours(input: TDurationInput): number;
    static toMinutes(input: TDurationInput): number;
    static toSeconds(input: TDurationInput): number;
    static toMilliseconds(input: TDurationInput): number;
    static toMicroseconds(input: TDurationInput): number;
    static difference(d1: Date, d2: Date): Duration;
    get weeks(): number;
    get days(): number;
    get hours(): number;
    get minutes(): number;
    get seconds(): number;
    get milliseconds(): number;
    get microseconds(): number;
    addTo(d: Date): Date;
    subtractFrom(d: Date): Date;
    fromNow(): Date;
    ago(): Date;
    get abs(): Duration;
}
export {};
