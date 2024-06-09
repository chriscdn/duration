type TDurationConstructor = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  microseconds?: number;
};

export const MicrosecondsPerMillisecond = 1e3;
export const MicrosecondsPerSecond = 1e6;
export const MicrosecondsPerMinute = 6e7;
export const MicrosecondsPerHour = 3.6e9;
export const MicrosecondsPerDay = 8.64e10;

export class Duration {
  private _microseconds = 0;

  constructor(options: TDurationConstructor) {
    this._microseconds =
      (options.days ?? 0) * MicrosecondsPerDay +
      (options.hours ?? 0) * MicrosecondsPerHour +
      (options.minutes ?? 0) * MicrosecondsPerMinute +
      (options.seconds ?? 0) * MicrosecondsPerSecond +
      (options.milliseconds ?? 0) * MicrosecondsPerMillisecond +
      (options.microseconds ?? 0);
  }

  static with(options: TDurationConstructor) {
    return new Duration(options);
  }

  static toMilliseconds(options: TDurationConstructor) {
    return new Duration(options).milliseconds;
  }

  get days() {
    return this._microseconds / MicrosecondsPerDay;
  }

  get hours() {
    return this._microseconds / MicrosecondsPerHour;
  }

  get minutes() {
    return this._microseconds / MicrosecondsPerMinute;
  }

  get seconds() {
    return this._microseconds / MicrosecondsPerSecond;
  }

  get milliseconds() {
    return this._microseconds / MicrosecondsPerMillisecond;
  }

  get microseconds() {
    return this._microseconds;
  }

  abs() {
    return new Duration({ microseconds: Math.abs(this.microseconds) });
  }
}
