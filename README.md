# @chriscdn/duration

The `Duration` class represents an elapsed time, and provides getters to convert among different units.

## Installing

Using npm:

```bash
npm install @chriscdn/duration
```

Using yarn:

```bash
yarn add @chriscdn/duration
```

## Example

Construct a `Duration` instance.

Each unit parameter (e.g., `days`, `hours`), is optional and defaults to zero if not specific.

```js
import { Duration } from "@chriscdn/duration";

const duration = new Duration({
  days: 1,
  hours: 0,
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

There is also a convenient static method to quickly convert to milliseconds, which is useful with the [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) and [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) functions:

```js
import { Duration } from "@chriscdn/duration";

Duration.toMilliseconds({ hours: 1 })) // 3.6e+6

// or, with setInterval to run once per hour

setInterval(callback, Duration.toMilliseconds({ hours: 1 })))
```
