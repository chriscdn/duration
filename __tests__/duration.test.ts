import { Duration } from "../src/index";

test("Basic", async () => {
  expect(Duration.with({ days: 4 }).seconds).toBe(345600);
  expect(Duration.with({ days: 100000 }).seconds).toBe(8.64e9);
  expect(Duration.with({ days: 1, hours: 24 }).days).toBe(2);
  expect(Duration.with({ milliseconds: 1000 }).seconds).toBe(1);
  expect(Duration.with({ hours: 12 }).days).toBe(1 / 2);
  expect(Duration.with({ microseconds: 1 }).microseconds).toBe(1);

  expect(Duration.toMilliseconds({ minutes: 60 })).toBe(3.6e6);
});
