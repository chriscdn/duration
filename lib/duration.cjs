function e(e){var n=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof n?n:n+""}var n=1e6,t=6e7,r=36e8,o=864e8,i=6048e8;exports.Duration=/*#__PURE__*/function(){function s(e){var s,c,u,l,f,d,m;this._microseconds=0,this._microseconds=(null!=(s=e.weeks)?s:0)*i+(null!=(c=e.days)?c:0)*o+(null!=(u=e.hours)?u:0)*r+(null!=(l=e.minutes)?l:0)*t+(null!=(f=e.seconds)?f:0)*n+1e3*(null!=(d=e.milliseconds)?d:0)+(null!=(m=e.microseconds)?m:0)}var c,u;return s.with=function(e){return new s(e)},s.toWeeks=function(e){return s.with(e).weeks},s.toDays=function(e){return s.with(e).days},s.toHours=function(e){return s.with(e).hours},s.toMinuates=function(e){return s.with(e).minutes},s.toSeconds=function(e){return s.with(e).seconds},s.toMilliseconds=function(e){return s.with(e).milliseconds},s.toMicroseconds=function(e){return s.with(e).microseconds},s.prototype.abs=function(){return new s({microseconds:Math.abs(this.microseconds)})},c=s,(u=[{key:"weeks",get:function(){return this._microseconds/i}},{key:"days",get:function(){return this._microseconds/o}},{key:"hours",get:function(){return this._microseconds/r}},{key:"minutes",get:function(){return this._microseconds/t}},{key:"seconds",get:function(){return this._microseconds/n}},{key:"milliseconds",get:function(){return this._microseconds/1e3}},{key:"microseconds",get:function(){return this._microseconds}}])&&function(n,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,e(o.key),o)}}(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c}();
//# sourceMappingURL=duration.cjs.map
