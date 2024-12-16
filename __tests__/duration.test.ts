import { expect, test } from "vitest";
import { Duration } from "../src/index";

test("Basic", async () => {
  expect(Duration.with({ days: 4 }).seconds).toBe(345600);
  expect(Duration.with({ days: 100000 }).seconds).toBe(8.64e9);
  expect(Duration.with({ days: 1, hours: 24 }).days).toBe(2);
  expect(Duration.with({ milliseconds: 1000 }).seconds).toBe(1);
  expect(Duration.with({ hours: 12 }).days).toBe(1 / 2);
  expect(Duration.with({ microseconds: 1 }).microseconds).toBe(1);
  expect(Duration.with({ weeks: 2, days: 6, hours: 24 }).weeks).toBe(3);
  expect(Duration.toMilliseconds({ minutes: 60 })).toBe(3.6e6);
  expect(Duration.with({}).hours).toBe(0);
});

test("Date", async () => {
  const d1 = new Date("2024-01-01T00:00:00Z");
  const d2 = new Date("2024-01-02T00:00:00Z");

  expect(Duration.difference(d1, d2).days).toBe(1);
});

test("From Now", async () => {
  const d1 = new Date("2024-01-01T00:00:00Z");
  const d2 = new Date("2024-01-02T00:00:00Z");

  expect(Duration.with({ days: 1 }).addTo(d1)).toStrictEqual(d2);
  expect(Duration.with({ days: 1 }).subtractFrom(d2)).toStrictEqual(d1);
});

console.log(Duration.with({ days: 1 }).ago());
