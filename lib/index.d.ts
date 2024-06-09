type TDurationConstructor = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    microseconds?: number;
};
export declare class Duration {
    private _microseconds;
    constructor(options: TDurationConstructor);
    static with(options: TDurationConstructor): Duration;
    static toDays(options: TDurationConstructor): number;
    static toHours(options: TDurationConstructor): number;
    static toMinuates(options: TDurationConstructor): number;
    static toSeconds(options: TDurationConstructor): number;
    static toMilliseconds(options: TDurationConstructor): number;
    static toMicroseconds(options: TDurationConstructor): number;
    get days(): number;
    get hours(): number;
    get minutes(): number;
    get seconds(): number;
    get milliseconds(): number;
    get microseconds(): number;
    abs(): Duration;
}
export {};
