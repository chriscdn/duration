type DurationInit = {
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
    constructor(input: DurationInit);
    static with(input: DurationInit): Duration;
    static toWeeks(input: DurationInit): number;
    static toDays(input: DurationInit): number;
    static toHours(input: DurationInit): number;
    static toMinutes(input: DurationInit): number;
    static toSeconds(input: DurationInit): number;
    static toMilliseconds(input: DurationInit): number;
    static toMicroseconds(input: DurationInit): number;
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
