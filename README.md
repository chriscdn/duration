# @chriscdn/duration

The `Duration` class represents an elapsed time, and provides methods and getters to convert among units.

## Installing

Using npm:

```bash
npm install @chriscdn/duration
```

Using yarn:

```bash
yarn add @chriscdn/duration
```

## Usage

Construct a `Duration` instance.

Each unit parameter (e.g., `days`, `hours`), is optional and defaults to zero if not provided.

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

duration.days; // 1
duration.hours; // 24
duration.minutes; // 1440
duration.seconds; // 86400
duration.milliseconds; // 86400000
duration.microseconds; // 86400000000
```

A factory function exists to make the syntax more compact:

```js
import { Duration } from "@chriscdn/duration";

const duration = Duration.with({ hours: 12 });

const days = duration.days; // 0.5

// or

const days = Duration.with({ hours: 12 }).days;
```

Static method are also availble if the `Duration` instance isn't required:

```js
import { Duration } from "@chriscdn/duration";

const hours = Duration.toHours({ hours: 1, minutes: 120 }); // 3
const milliseconds = Duration.toMilliseconds({ hours: 1 }); // 3.6e+6
```

This can be useful with the [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) and [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) functions:

```js
// once per hour
setInterval(callback, Duration.toMilliseconds({ hours: 1 }));
```

A `Duration` instance can also be constructed from two dates.

```js
const d1 = new Date("2024-01-01T00:00:00Z");
const d2 = new Date("2024-01-02T00:00:00Z");

const duration = Duration.difference(d1, d2);
duration.days === 1; // true

// this is functionally equivalent to:

const duration = Duration.with({ milliseconds: d2.getTime() - d1.getTime() });
```

## License

[MIT](LICENSE)
