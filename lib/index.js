//#region src/index.ts
const MicrosecondsPerMillisecond = 1e3;
const MicrosecondsPerSecond = 1e6;
const MicrosecondsPerMinute = 6e7;
const MicrosecondsPerHour = 36e8;
const MicrosecondsPerDay = 864e8;
const MicrosecondsPerWeek = 6048e8;
var Duration = class Duration {
	_microseconds = 0;
	constructor(input) {
		this._microseconds = (input.weeks ?? 0) * MicrosecondsPerWeek + (input.days ?? 0) * MicrosecondsPerDay + (input.hours ?? 0) * MicrosecondsPerHour + (input.minutes ?? 0) * MicrosecondsPerMinute + (input.seconds ?? 0) * MicrosecondsPerSecond + (input.milliseconds ?? 0) * MicrosecondsPerMillisecond + (input.microseconds ?? 0);
	}
	static with(input) {
		return new Duration(input);
	}
	static toWeeks(input) {
		return Duration.with(input).weeks;
	}
	static toDays(input) {
		return Duration.with(input).days;
	}
	static toHours(input) {
		return Duration.with(input).hours;
	}
	static toMinutes(input) {
		return Duration.with(input).minutes;
	}
	static toSeconds(input) {
		return Duration.with(input).seconds;
	}
	static toMilliseconds(input) {
		return Duration.with(input).milliseconds;
	}
	static toMicroseconds(input) {
		return Duration.with(input).microseconds;
	}
	static difference(d1, d2) {
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
		return new Duration({ microseconds: Math.abs(this.microseconds) });
	}
};
//#endregion
export { Duration };

//# sourceMappingURL=index.js.map