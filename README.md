# @chriscdn/duration

The `Duration` class represents an elapsed time, and provides methods and getters to convert among units.

## Installation

Using npm:

```bash
npm install @chriscdn/duration
```

Using yarn:

```bash
yarn add @chriscdn/duration
```

## Usage

### Creating a `Duration` Instance

You can construct a `Duration` instance by providing unit parameters. Each parameter is optional and defaults to zero if not provided.

```js
import { Duration } from "@chriscdn/duration";

const duration = new Duration({
  weeks: 0,
  days: 0,
  hours: 24,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  microseconds: 0,
});

console.log(duration.days); // 1
console.log(duration.hours); // 24
console.log(duration.minutes); // 1440
console.log(duration.seconds); // 86400
console.log(duration.milliseconds); // 86400000
console.log(duration.microseconds); // 86400000000
```

### Factory Function

A factory function is available to make the syntax a little more compact:

```js
import { Duration } from "@chriscdn/duration";

const duration = Duration.with({ hours: 12 });

console.log(duration.days); // 0.5

// Or directly access properties
console.log(Duration.with({ hours: 12 }).days); // 0.5
```

### Static Methods

Static methods are also available for conversion:

```js
import { Duration } from "@chriscdn/duration";

const hours = Duration.toHours({ hours: 1, minutes: 120 }); // 3
const milliseconds = Duration.toMilliseconds({ hours: 1 }); // 3.6e+6
```

These methods are useful with functions like [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) and [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout):

```js
// Execute callback once per hour
setInterval(callback, Duration.toMilliseconds({ hours: 1 }));
```

### Constructing from Dates

A `Duration` instance can be created from the difference between two dates:

```js
const d1 = new Date("2024-01-01T00:00:00Z");
const d2 = new Date("2024-01-02T00:00:00Z");

const duration = Duration.difference(d1, d2);
console.log(duration.days === 1); // true

// This is functionally equivalent to:
const duration = Duration.with({
  milliseconds: d2.getTime() - d1.getTime(),
});
```

## License

[MIT](LICENSE).
