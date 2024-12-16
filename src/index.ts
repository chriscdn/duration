type TDurationInput = {
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

  constructor(input: TDurationInput) {
    this._microseconds = (input.weeks ?? 0) * MicrosecondsPerWeek +
      (input.days ?? 0) * MicrosecondsPerDay +
      (input.hours ?? 0) * MicrosecondsPerHour +
      (input.minutes ?? 0) * MicrosecondsPerMinute +
      (input.seconds ?? 0) * MicrosecondsPerSecond +
      (input.milliseconds ?? 0) * MicrosecondsPerMillisecond +
      (input.microseconds ?? 0);
  }

  static with(input: TDurationInput) {
    return new Duration(input);
  }

  static toWeeks(input: TDurationInput) {
    return Duration.with(input).weeks;
  }

  static toDays(input: TDurationInput) {
    return Duration.with(input).days;
  }

  static toHours(input: TDurationInput) {
    return Duration.with(input).hours;
  }

  static toMinutes(input: TDurationInput) {
    return Duration.with(input).minutes;
  }

  static toSeconds(input: TDurationInput) {
    return Duration.with(input).seconds;
  }

  static toMilliseconds(input: TDurationInput) {
    return Duration.with(input).milliseconds;
  }

  static toMicroseconds(input: TDurationInput) {
    return Duration.with(input).microseconds;
  }

  static difference(d1: Date, d2: Date) {
    return Duration.with({ milliseconds: d2.getTime() - d1.getTime() });
  }

  get weeks() {
    return this._microseconds / MicrosecondsPerWeek;
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

  addTo(d: Date) {
    return new Date(d.getTime() + this.milliseconds);
  }

  subtractFrom(d: Date) {
    return new Date(d.getTime() - this.milliseconds);
  }

  fromNow() {
    return this.addTo(new Date());
  }

  ago() {
    return this.subtractFrom(new Date());
  }

  get abs() {
    return new Duration({ microseconds: Math.abs(this.microseconds) });
  }
}
