function e(e) {
  var r = (function (e, r) {
    if ("object" != typeof e || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var o = n.call(e, "string");
      if ("object" != typeof o) return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  })(e);
  return "symbol" == typeof r ? r : r + "";
}
var r = 1e3,
  n = 1e6,
  o = 6e7,
  t = 36e8,
  i = 864e8;
(exports.Duration = /*#__PURE__*/ (function () {
  function s(e) {
    var s, c, u, l, d, f;
    (this._microseconds = 0),
      (this._microseconds =
        (null != (s = e.days) ? s : 0) * i +
        (null != (c = e.hours) ? c : 0) * t +
        (null != (u = e.minutes) ? u : 0) * o +
        (null != (l = e.seconds) ? l : 0) * n +
        (null != (d = e.milliseconds) ? d : 0) * r +
        (null != (f = e.microseconds) ? f : 0));
  }
  return (
    (s.with = function (e) {
      return new s(e);
    }),
    (s.toMilliseconds = function (e) {
      return new s(e).milliseconds;
    }),
    (c = s),
    (u = [
      {
        key: "days",
        get: function () {
          return this._microseconds / i;
        },
      },
      {
        key: "hours",
        get: function () {
          return this._microseconds / t;
        },
      },
      {
        key: "minutes",
        get: function () {
          return this._microseconds / o;
        },
      },
      {
        key: "seconds",
        get: function () {
          return this._microseconds / n;
        },
      },
      {
        key: "milliseconds",
        get: function () {
          return this._microseconds / r;
        },
      },
      {
        key: "microseconds",
        get: function () {
          return this._microseconds;
        },
      },
    ]) &&
      (function (r, n) {
        for (var o = 0; o < n.length; o++) {
          var t = n[o];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            "value" in t && (t.writable = !0),
            Object.defineProperty(r, e(t.key), t);
        }
      })(c.prototype, u),
    Object.defineProperty(c, "prototype", { writable: !1 }),
    c
  );
  var c, u;
})()),
  (exports.MicrosecondsPerDay = i),
  (exports.MicrosecondsPerHour = t),
  (exports.MicrosecondsPerMillisecond = r),
  (exports.MicrosecondsPerMinute = o),
  (exports.MicrosecondsPerSecond = n);
//# sourceMappingURL=duration.cjs.map
