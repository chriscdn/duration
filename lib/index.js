// src/index.ts
var MicrosecondsPerMillisecond = 1e3;
var MicrosecondsPerSecond = 1e6;
var MicrosecondsPerMinute = 6e7;
var MicrosecondsPerHour = 36e8;
var MicrosecondsPerDay = 864e8;
var MicrosecondsPerWeek = 6048e8;
var Duration = class _Duration {
  _microseconds = 0;
  constructor(input) {
    this._microseconds = (input.weeks ?? 0) * MicrosecondsPerWeek + (input.days ?? 0) * MicrosecondsPerDay + (input.hours ?? 0) * MicrosecondsPerHour + (input.minutes ?? 0) * MicrosecondsPerMinute + (input.seconds ?? 0) * MicrosecondsPerSecond + (input.milliseconds ?? 0) * MicrosecondsPerMillisecond + (input.microseconds ?? 0);
  }
  static with(input) {
    return new _Duration(input);
  }
  static toWeeks(input) {
    return _Duration.with(input).weeks;
  }
  static toDays(input) {
    return _Duration.with(input).days;
  }
  static toHours(input) {
    return _Duration.with(input).hours;
  }
  static toMinutes(input) {
    return _Duration.with(input).minutes;
  }
  static toSeconds(input) {
    return _Duration.with(input).seconds;
  }
  static toMilliseconds(input) {
    return _Duration.with(input).milliseconds;
  }
  static toMicroseconds(input) {
    return _Duration.with(input).microseconds;
  }
  static difference(d1, d2) {
    return _Duration.with({ milliseconds: d2.getTime() - d1.getTime() });
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
  addTo(d) {
    return new Date(d.getTime() + this.milliseconds);
  }
  subtractFrom(d) {
    return new Date(d.getTime() - this.milliseconds);
  }
  fromNow() {
    return this.addTo(/* @__PURE__ */ new Date());
  }
  ago() {
    return this.subtractFrom(/* @__PURE__ */ new Date());
  }
  get abs() {
    return new _Duration({ microseconds: Math.abs(this.microseconds) });
  }
};
export {
  Duration
};
//# sourceMappingURL=index.js.map