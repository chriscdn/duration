type TDurationConstructor = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    microseconds?: number;
};
export declare const MicrosecondsPerMillisecond = 1000;
export declare const MicrosecondsPerSecond = 1000000;
export declare const MicrosecondsPerMinute = 60000000;
export declare const MicrosecondsPerHour = 3600000000;
export declare const MicrosecondsPerDay = 86400000000;
export declare class Duration {
    private _microseconds;
    constructor(options: TDurationConstructor);
    static with(options: TDurationConstructor): Duration;
    static toMilliseconds(options: TDurationConstructor): number;
    get days(): number;
    get hours(): number;
    get minutes(): number;
    get seconds(): number;
    get milliseconds(): number;
    get microseconds(): number;
    abs(): Duration;
}
export {};
