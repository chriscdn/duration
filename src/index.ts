type DurationInit = {
  weeks?: number;
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
const MicrosecondsPerWeek = 6.048e11;

export class Duration {
  private _microseconds = 0;

  constructor(input: DurationInit) {
    this._microseconds = (input.weeks ?? 0) * MicrosecondsPerWeek +
      (input.days ?? 0) * MicrosecondsPerDay +
      (input.hours ?? 0) * MicrosecondsPerHour +
      (input.minutes ?? 0) * MicrosecondsPerMinute +
      (input.seconds ?? 0) * MicrosecondsPerSecond +
      (input.milliseconds ?? 0) * MicrosecondsPerMillisecond +
      (input.microseconds ?? 0);
  }

  static with(input: DurationInit) {
    return new Duration(input);
  }

  static toWeeks(input: DurationInit) {
    return Duration.with(input).weeks;
  }

  static toDays(input: DurationInit) {
    return Duration.with(input).days;
  }

  static toHours(input: DurationInit) {
    return Duration.with(input).hours;
  }

  static toMinutes(input: DurationInit) {
    return Duration.with(input).minutes;
  }

  static toSeconds(input: DurationInit) {
    return Duration.with(input).seconds;
  }

  static toMilliseconds(input: DurationInit) {
    return Duration.with(input).milliseconds;
  }

  static toMicroseconds(input: DurationInit) {
    return Duration.with(input).microseconds;
  }

  static difference(d1: Date, d2: Date): Duration {
    return Duration.with({ milliseconds: d2.getTime() - d1.getTime() });
  }

  get weeks(): number {
    return this._microseconds / MicrosecondsPerWeek;
  }

  get days(): number {
    return this._microseconds / MicrosecondsPerDay;
  }

  get hours(): number {
    return this._microseconds / MicrosecondsPerHour;
  }

  get minutes(): number {
    return this._microseconds / MicrosecondsPerMinute;
  }

  get seconds(): number {
    return this._microseconds / MicrosecondsPerSecond;
  }

  get milliseconds(): number {
    return this._microseconds / MicrosecondsPerMillisecond;
  }

  get microseconds(): number {
    return this._microseconds;
  }

  addTo(d: Date): Date {
    return new Date(d.getTime() + this.milliseconds);
  }

  subtractFrom(d: Date): Date {
    return new Date(d.getTime() - this.milliseconds);
  }

  fromNow(): Date {
    return this.addTo(new Date());
  }

  ago(): Date {
    return this.subtractFrom(new Date());
  }

  get abs(): Duration {
    return new Duration({ microseconds: Math.abs(this.microseconds) });
  }
}
