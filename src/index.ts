type TDurationConstructor = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  microseconds?: number;
};

const MicrosecondsPerMillisecond = 1e3;
const MicrosecondsPerSecond = 1e6;
const MicrosecondsPerMinute = 6e7;
const MicrosecondsPerHour = 3.6e9;
const MicrosecondsPerDay = 8.64e10;

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

  static toDays(options: TDurationConstructor) {
    return Duration.with(options).days;
  }

  static toHours(options: TDurationConstructor) {
    return Duration.with(options).hours;
  }

  static toMinuates(options: TDurationConstructor) {
    return Duration.with(options).minutes;
  }

  static toSeconds(options: TDurationConstructor) {
    return Duration.with(options).seconds;
  }

  static toMilliseconds(options: TDurationConstructor) {
    return Duration.with(options).milliseconds;
  }

  static toMicroseconds(options: TDurationConstructor) {
    return Duration.with(options).microseconds;
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
