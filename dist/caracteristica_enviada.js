!(function (t, n) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = n();
  else if ("function" == typeof define && define.amd) define([], n);
  else {
    var e = n();
    for (var r in e) ("object" == typeof exports ? exports : t)[r] = e[r];
  }
})(window, function () {
  return (function (t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var i in t)
            e.d(
              r,
              i,
              function (n) {
                return t[n];
              }.bind(null, i)
            );
        return r;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ""),
      e((e.s = 16))
    );
  })([
    ,
    function (t, n, e) {
      (function (n) {
        var e = Object.assign
            ? Object.assign
            : function (t, n, e, r) {
                for (var i = 1; i < arguments.length; i++)
                  a(Object(arguments[i]), function (n, e) {
                    t[e] = n;
                  });
                return t;
              },
          r = (function () {
            if (Object.create)
              return function (t, n, r, i) {
                var o = u(arguments, 1);
                return e.apply(this, [Object.create(t)].concat(o));
              };
            {
              function t() {}
              return function (n, r, i, o) {
                var a = u(arguments, 1);
                return (t.prototype = n), e.apply(this, [new t()].concat(a));
              };
            }
          })(),
          i = String.prototype.trim
            ? function (t) {
                return String.prototype.trim.call(t);
              }
            : function (t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              },
          o = "undefined" != typeof window ? window : n;
        function u(t, n) {
          return Array.prototype.slice.call(t, n || 0);
        }
        function a(t, n) {
          c(t, function (t, e) {
            return n(t, e), !1;
          });
        }
        function c(t, n) {
          if (f(t)) {
            for (var e = 0; e < t.length; e++) if (n(t[e], e)) return t[e];
          } else
            for (var r in t) if (t.hasOwnProperty(r) && n(t[r], r)) return t[r];
        }
        function f(t) {
          return (
            null != t && "function" != typeof t && "number" == typeof t.length
          );
        }
        t.exports = {
          assign: e,
          create: r,
          trim: i,
          bind: function (t, n) {
            return function () {
              return n.apply(t, Array.prototype.slice.call(arguments, 0));
            };
          },
          slice: u,
          each: a,
          map: function (t, n) {
            var e = f(t) ? [] : {};
            return (
              c(t, function (t, r) {
                return (e[r] = n(t, r)), !1;
              }),
              e
            );
          },
          pluck: c,
          isList: f,
          isFunction: function (t) {
            return t && "[object Function]" === {}.toString.call(t);
          },
          isObject: function (t) {
            return t && "[object Object]" === {}.toString.call(t);
          },
          Global: o,
        };
      }).call(this, e(6));
    },
    function (t, n, e) {
      var r = e(5),
        i = e(7),
        o = [e(14)];
      t.exports = r.createStore(i, o);
    },
    ,
    ,
    function (t, n, e) {
      var r = e(1),
        i = r.slice,
        o = r.pluck,
        u = r.each,
        a = r.bind,
        c = r.create,
        f = r.isList,
        s = r.isFunction,
        l = r.isObject;
      t.exports = { createStore: d };
      var h = {
        version: "2.0.12",
        enabled: !1,
        get: function (t, n) {
          var e = this.storage.read(this._namespacePrefix + t);
          return this._deserialize(e, n);
        },
        set: function (t, n) {
          return void 0 === n
            ? this.remove(t)
            : (this.storage.write(
                this._namespacePrefix + t,
                this._serialize(n)
              ),
              n);
        },
        remove: function (t) {
          this.storage.remove(this._namespacePrefix + t);
        },
        each: function (t) {
          var n = this;
          this.storage.each(function (e, r) {
            t.call(
              n,
              n._deserialize(e),
              (r || "").replace(n._namespaceRegexp, "")
            );
          });
        },
        clearAll: function () {
          this.storage.clearAll();
        },
        hasNamespace: function (t) {
          return this._namespacePrefix == "__storejs_" + t + "_";
        },
        createStore: function () {
          return d.apply(this, arguments);
        },
        addPlugin: function (t) {
          this._addPlugin(t);
        },
        namespace: function (t) {
          return d(this.storage, this.plugins, t);
        },
      };
      function d(t, n, e) {
        e || (e = ""), t && !f(t) && (t = [t]), n && !f(n) && (n = [n]);
        var r = e ? "__storejs_" + e + "_" : "",
          d = e ? new RegExp("^" + r) : null;
        if (!/^[a-zA-Z0-9_\-]*$/.test(e))
          throw new Error(
            "store.js namespaces can only have alphanumerics + underscores and dashes"
          );
        var p = c(
          {
            _namespacePrefix: r,
            _namespaceRegexp: d,
            _testStorage: function (t) {
              try {
                var n = "__storejs__test__";
                t.write(n, n);
                var e = t.read(n) === n;
                return t.remove(n), e;
              } catch (t) {
                return !1;
              }
            },
            _assignPluginFnProp: function (t, n) {
              var e = this[n];
              this[n] = function () {
                var n = i(arguments, 0),
                  r = this;
                function o() {
                  if (e)
                    return (
                      u(arguments, function (t, e) {
                        n[e] = t;
                      }),
                      e.apply(r, n)
                    );
                }
                var a = [o].concat(n);
                return t.apply(r, a);
              };
            },
            _serialize: function (t) {
              return JSON.stringify(t);
            },
            _deserialize: function (t, n) {
              if (!t) return n;
              var e = "";
              try {
                e = JSON.parse(t);
              } catch (n) {
                e = t;
              }
              return void 0 !== e ? e : n;
            },
            _addStorage: function (t) {
              this.enabled ||
                (this._testStorage(t) &&
                  ((this.storage = t), (this.enabled = !0)));
            },
            _addPlugin: function (t) {
              var n = this;
              if (f(t))
                u(t, function (t) {
                  n._addPlugin(t);
                });
              else if (
                !o(this.plugins, function (n) {
                  return t === n;
                })
              ) {
                if ((this.plugins.push(t), !s(t)))
                  throw new Error(
                    "Plugins must be function values that return objects"
                  );
                var e = t.call(this);
                if (!l(e))
                  throw new Error(
                    "Plugins must return an object of function properties"
                  );
                u(e, function (e, r) {
                  if (!s(e))
                    throw new Error(
                      "Bad plugin property: " +
                        r +
                        " from plugin " +
                        t.name +
                        ". Plugins should only return functions."
                    );
                  n._assignPluginFnProp(e, r);
                });
              }
            },
            addStorage: function (t) {
              !(function () {
                var t = "undefined" == typeof console ? null : console;
                if (t) {
                  var n = t.warn ? t.warn : t.log;
                  n.apply(t, arguments);
                }
              })(
                "store.addStorage(storage) is deprecated. Use createStore([storages])"
              ),
                this._addStorage(t);
            },
          },
          h,
          { plugins: [] }
        );
        return (
          (p.raw = {}),
          u(p, function (t, n) {
            s(t) && (p.raw[n] = a(p, t));
          }),
          u(t, function (t) {
            p._addStorage(t);
          }),
          u(n, function (t) {
            p._addPlugin(t);
          }),
          p
        );
      }
    },
    function (t, n) {
      var e;
      e = (function () {
        return this;
      })();
      try {
        e = e || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (e = window);
      }
      t.exports = e;
    },
    function (t, n, e) {
      t.exports = [e(8), e(9), e(10), e(11), e(12), e(13)];
    },
    function (t, n, e) {
      var r = e(1).Global;
      function i() {
        return r.localStorage;
      }
      function o(t) {
        return i().getItem(t);
      }
      t.exports = {
        name: "localStorage",
        read: o,
        write: function (t, n) {
          return i().setItem(t, n);
        },
        each: function (t) {
          for (var n = i().length - 1; n >= 0; n--) {
            var e = i().key(n);
            t(o(e), e);
          }
        },
        remove: function (t) {
          return i().removeItem(t);
        },
        clearAll: function () {
          return i().clear();
        },
      };
    },
    function (t, n, e) {
      var r = e(1).Global;
      t.exports = {
        name: "oldFF-globalStorage",
        read: function (t) {
          return i[t];
        },
        write: function (t, n) {
          i[t] = n;
        },
        each: o,
        remove: function (t) {
          return i.removeItem(t);
        },
        clearAll: function () {
          o(function (t, n) {
            delete i[t];
          });
        },
      };
      var i = r.globalStorage;
      function o(t) {
        for (var n = i.length - 1; n >= 0; n--) {
          var e = i.key(n);
          t(i[e], e);
        }
      }
    },
    function (t, n, e) {
      var r = e(1).Global;
      t.exports = {
        name: "oldIE-userDataStorage",
        write: function (t, n) {
          if (u) return;
          var e = c(t);
          o(function (t) {
            t.setAttribute(e, n), t.save("storejs");
          });
        },
        read: function (t) {
          if (u) return;
          var n = c(t),
            e = null;
          return (
            o(function (t) {
              e = t.getAttribute(n);
            }),
            e
          );
        },
        each: function (t) {
          o(function (n) {
            for (
              var e = n.XMLDocument.documentElement.attributes,
                r = e.length - 1;
              r >= 0;
              r--
            ) {
              var i = e[r];
              t(n.getAttribute(i.name), i.name);
            }
          });
        },
        remove: function (t) {
          var n = c(t);
          o(function (t) {
            t.removeAttribute(n), t.save("storejs");
          });
        },
        clearAll: function () {
          o(function (t) {
            var n = t.XMLDocument.documentElement.attributes;
            t.load("storejs");
            for (var e = n.length - 1; e >= 0; e--)
              t.removeAttribute(n[e].name);
            t.save("storejs");
          });
        },
      };
      var i = r.document,
        o = (function () {
          if (!i || !i.documentElement || !i.documentElement.addBehavior)
            return null;
          var t, n, e;
          try {
            (n = new ActiveXObject("htmlfile")).open(),
              n.write(
                '<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'
              ),
              n.close(),
              (t = n.w.frames[0].document),
              (e = t.createElement("div"));
          } catch (n) {
            (e = i.createElement("div")), (t = i.body);
          }
          return function (n) {
            var r = [].slice.call(arguments, 0);
            r.unshift(e),
              t.appendChild(e),
              e.addBehavior("#default#userData"),
              e.load("storejs"),
              n.apply(this, r),
              t.removeChild(e);
          };
        })(),
        u = (r.navigator ? r.navigator.userAgent : "").match(
          / (MSIE 8|MSIE 9|MSIE 10)\./
        );
      var a = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
      function c(t) {
        return t.replace(/^\d/, "___$&").replace(a, "___");
      }
    },
    function (t, n, e) {
      var r = e(1),
        i = r.Global,
        o = r.trim;
      t.exports = {
        name: "cookieStorage",
        read: function (t) {
          if (!t || !f(t)) return null;
          var n =
            "(?:^|.*;\\s*)" +
            escape(t).replace(/[\-\.\+\*]/g, "\\$&") +
            "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
          return unescape(u.cookie.replace(new RegExp(n), "$1"));
        },
        write: function (t, n) {
          if (!t) return;
          u.cookie =
            escape(t) +
            "=" +
            escape(n) +
            "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
        },
        each: a,
        remove: c,
        clearAll: function () {
          a(function (t, n) {
            c(n);
          });
        },
      };
      var u = i.document;
      function a(t) {
        for (var n = u.cookie.split(/; ?/g), e = n.length - 1; e >= 0; e--)
          if (o(n[e])) {
            var r = n[e].split("="),
              i = unescape(r[0]);
            t(unescape(r[1]), i);
          }
      }
      function c(t) {
        t &&
          f(t) &&
          (u.cookie =
            escape(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");
      }
      function f(t) {
        return new RegExp(
          "(?:^|;\\s*)" + escape(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\="
        ).test(u.cookie);
      }
    },
    function (t, n, e) {
      var r = e(1).Global;
      function i() {
        return r.sessionStorage;
      }
      function o(t) {
        return i().getItem(t);
      }
      t.exports = {
        name: "sessionStorage",
        read: o,
        write: function (t, n) {
          return i().setItem(t, n);
        },
        each: function (t) {
          for (var n = i().length - 1; n >= 0; n--) {
            var e = i().key(n);
            t(o(e), e);
          }
        },
        remove: function (t) {
          return i().removeItem(t);
        },
        clearAll: function () {
          return i().clear();
        },
      };
    },
    function (t, n) {
      t.exports = {
        name: "memoryStorage",
        read: function (t) {
          return e[t];
        },
        write: function (t, n) {
          e[t] = n;
        },
        each: function (t) {
          for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
        },
        remove: function (t) {
          delete e[t];
        },
        clearAll: function (t) {
          e = {};
        },
      };
      var e = {};
    },
    function (t, n, e) {
      t.exports = function () {
        return e(15), {};
      };
    },
    function (module, exports) {
      "object" != typeof JSON && (JSON = {}),
        (function () {
          "use strict";
          var rx_one = /^[\],:{}\s]*$/,
            rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            rx_three =
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            rx_four = /(?:^|:|,)(?:\s*\[)+/g,
            rx_escapable =
              /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            rx_dangerous =
              /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap,
            indent,
            meta,
            rep;
          function f(t) {
            return t < 10 ? "0" + t : t;
          }
          function this_value() {
            return this.valueOf();
          }
          function quote(t) {
            return (
              (rx_escapable.lastIndex = 0),
              rx_escapable.test(t)
                ? '"' +
                  t.replace(rx_escapable, function (t) {
                    var n = meta[t];
                    return "string" == typeof n
                      ? n
                      : "\\u" +
                          ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
                  }) +
                  '"'
                : '"' + t + '"'
            );
          }
          function str(t, n) {
            var e,
              r,
              i,
              o,
              u,
              a = gap,
              c = n[t];
            switch (
              (c &&
                "object" == typeof c &&
                "function" == typeof c.toJSON &&
                (c = c.toJSON(t)),
              "function" == typeof rep && (c = rep.call(n, t, c)),
              typeof c)
            ) {
              case "string":
                return quote(c);
              case "number":
                return isFinite(c) ? String(c) : "null";
              case "boolean":
              case "null":
                return String(c);
              case "object":
                if (!c) return "null";
                if (
                  ((gap += indent),
                  (u = []),
                  "[object Array]" === Object.prototype.toString.apply(c))
                ) {
                  for (o = c.length, e = 0; e < o; e += 1)
                    u[e] = str(e, c) || "null";
                  return (
                    (i =
                      0 === u.length
                        ? "[]"
                        : gap
                        ? "[\n" + gap + u.join(",\n" + gap) + "\n" + a + "]"
                        : "[" + u.join(",") + "]"),
                    (gap = a),
                    i
                  );
                }
                if (rep && "object" == typeof rep)
                  for (o = rep.length, e = 0; e < o; e += 1)
                    "string" == typeof rep[e] &&
                      (i = str((r = rep[e]), c)) &&
                      u.push(quote(r) + (gap ? ": " : ":") + i);
                else
                  for (r in c)
                    Object.prototype.hasOwnProperty.call(c, r) &&
                      (i = str(r, c)) &&
                      u.push(quote(r) + (gap ? ": " : ":") + i);
                return (
                  (i =
                    0 === u.length
                      ? "{}"
                      : gap
                      ? "{\n" + gap + u.join(",\n" + gap) + "\n" + a + "}"
                      : "{" + u.join(",") + "}"),
                  (gap = a),
                  i
                );
            }
          }
          "function" != typeof Date.prototype.toJSON &&
            ((Date.prototype.toJSON = function () {
              return isFinite(this.valueOf())
                ? this.getUTCFullYear() +
                    "-" +
                    f(this.getUTCMonth() + 1) +
                    "-" +
                    f(this.getUTCDate()) +
                    "T" +
                    f(this.getUTCHours()) +
                    ":" +
                    f(this.getUTCMinutes()) +
                    ":" +
                    f(this.getUTCSeconds()) +
                    "Z"
                : null;
            }),
            (Boolean.prototype.toJSON = this_value),
            (Number.prototype.toJSON = this_value),
            (String.prototype.toJSON = this_value)),
            "function" != typeof JSON.stringify &&
              ((meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\",
              }),
              (JSON.stringify = function (t, n, e) {
                var r;
                if (((gap = ""), (indent = ""), "number" == typeof e))
                  for (r = 0; r < e; r += 1) indent += " ";
                else "string" == typeof e && (indent = e);
                if (
                  ((rep = n),
                  n &&
                    "function" != typeof n &&
                    ("object" != typeof n || "number" != typeof n.length))
                )
                  throw new Error("JSON.stringify");
                return str("", { "": t });
              })),
            "function" != typeof JSON.parse &&
              (JSON.parse = function (text, reviver) {
                var j;
                function walk(t, n) {
                  var e,
                    r,
                    i = t[n];
                  if (i && "object" == typeof i)
                    for (e in i)
                      Object.prototype.hasOwnProperty.call(i, e) &&
                        (void 0 !== (r = walk(i, e))
                          ? (i[e] = r)
                          : delete i[e]);
                  return reviver.call(t, n, i);
                }
                if (
                  ((text = String(text)),
                  (rx_dangerous.lastIndex = 0),
                  rx_dangerous.test(text) &&
                    (text = text.replace(rx_dangerous, function (t) {
                      return (
                        "\\u" +
                        ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                      );
                    })),
                  rx_one.test(
                    text
                      .replace(rx_two, "@")
                      .replace(rx_three, "]")
                      .replace(rx_four, "")
                  ))
                )
                  return (
                    (j = eval("(" + text + ")")),
                    "function" == typeof reviver ? walk({ "": j }, "") : j
                  );
                throw new SyntaxError("JSON.parse");
              });
        })();
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var r = {};
      e.r(r),
        e.d(r, "bisect", function () {
          return g;
        }),
        e.d(r, "bisectRight", function () {
          return h;
        }),
        e.d(r, "bisectLeft", function () {
          return d;
        }),
        e.d(r, "bisectCenter", function () {
          return p;
        }),
        e.d(r, "ascending", function () {
          return o;
        }),
        e.d(r, "bisector", function () {
          return a;
        }),
        e.d(r, "blur", function () {
          return y;
        }),
        e.d(r, "blur2", function () {
          return v;
        }),
        e.d(r, "blurImage", function () {
          return _;
        }),
        e.d(r, "count", function () {
          return M;
        }),
        e.d(r, "cross", function () {
          return E;
        }),
        e.d(r, "cumsum", function () {
          return N;
        }),
        e.d(r, "descending", function () {
          return u;
        }),
        e.d(r, "deviation", function () {
          return C;
        }),
        e.d(r, "extent", function () {
          return P;
        }),
        e.d(r, "Adder", function () {
          return z;
        }),
        e.d(r, "fsum", function () {
          return $;
        }),
        e.d(r, "fcumsum", function () {
          return O;
        }),
        e.d(r, "group", function () {
          return U;
        }),
        e.d(r, "flatGroup", function () {
          return H;
        }),
        e.d(r, "flatRollup", function () {
          return X;
        }),
        e.d(r, "groups", function () {
          return L;
        }),
        e.d(r, "index", function () {
          return J;
        }),
        e.d(r, "indexes", function () {
          return Z;
        }),
        e.d(r, "rollup", function () {
          return V;
        }),
        e.d(r, "rollups", function () {
          return G;
        }),
        e.d(r, "groupSort", function () {
          return rt;
        }),
        e.d(r, "bin", function () {
          return yt;
        }),
        e.d(r, "histogram", function () {
          return yt;
        }),
        e.d(r, "thresholdFreedmanDiaconis", function () {
          return Et;
        }),
        e.d(r, "thresholdScott", function () {
          return Nt;
        }),
        e.d(r, "thresholdSturges", function () {
          return gt;
        }),
        e.d(r, "max", function () {
          return vt;
        }),
        e.d(r, "maxIndex", function () {
          return _t;
        }),
        e.d(r, "mean", function () {
          return kt;
        }),
        e.d(r, "median", function () {
          return Ct;
        }),
        e.d(r, "medianIndex", function () {
          return Pt;
        }),
        e.d(r, "merge", function () {
          return zt;
        }),
        e.d(r, "min", function () {
          return mt;
        }),
        e.d(r, "minIndex", function () {
          return bt;
        }),
        e.d(r, "mode", function () {
          return $t;
        }),
        e.d(r, "nice", function () {
          return pt;
        }),
        e.d(r, "pairs", function () {
          return Ot;
        }),
        e.d(r, "permute", function () {
          return Q;
        }),
        e.d(r, "quantile", function () {
          return At;
        }),
        e.d(r, "quantileIndex", function () {
          return Tt;
        }),
        e.d(r, "quantileSorted", function () {
          return St;
        }),
        e.d(r, "quickselect", function () {
          return xt;
        }),
        e.d(r, "range", function () {
          return Rt;
        }),
        e.d(r, "rank", function () {
          return jt;
        }),
        e.d(r, "least", function () {
          return qt;
        }),
        e.d(r, "leastIndex", function () {
          return Ft;
        }),
        e.d(r, "greatest", function () {
          return Mt;
        }),
        e.d(r, "greatestIndex", function () {
          return Bt;
        }),
        e.d(r, "scan", function () {
          return It;
        }),
        e.d(r, "shuffle", function () {
          return Ut;
        }),
        e.d(r, "shuffler", function () {
          return Lt;
        }),
        e.d(r, "sum", function () {
          return Yt;
        }),
        e.d(r, "ticks", function () {
          return lt;
        }),
        e.d(r, "tickIncrement", function () {
          return ht;
        }),
        e.d(r, "tickStep", function () {
          return dt;
        }),
        e.d(r, "transpose", function () {
          return Ht;
        }),
        e.d(r, "variance", function () {
          return k;
        }),
        e.d(r, "zip", function () {
          return Vt;
        }),
        e.d(r, "every", function () {
          return Gt;
        }),
        e.d(r, "some", function () {
          return Jt;
        }),
        e.d(r, "filter", function () {
          return Zt;
        }),
        e.d(r, "map", function () {
          return Wt;
        }),
        e.d(r, "reduce", function () {
          return Kt;
        }),
        e.d(r, "reverse", function () {
          return Qt;
        }),
        e.d(r, "sort", function () {
          return tt;
        }),
        e.d(r, "difference", function () {
          return tn;
        }),
        e.d(r, "disjoint", function () {
          return nn;
        }),
        e.d(r, "intersection", function () {
          return en;
        }),
        e.d(r, "subset", function () {
          return an;
        }),
        e.d(r, "superset", function () {
          return on;
        }),
        e.d(r, "union", function () {
          return cn;
        }),
        e.d(r, "InternMap", function () {
          return D;
        }),
        e.d(r, "InternSet", function () {
          return R;
        }),
        e.d(r, "axisTop", function () {
          return yn;
        }),
        e.d(r, "axisRight", function () {
          return vn;
        }),
        e.d(r, "axisBottom", function () {
          return _n;
        }),
        e.d(r, "axisLeft", function () {
          return mn;
        }),
        e.d(r, "brush", function () {
          return gc;
        }),
        e.d(r, "brushX", function () {
          return dc;
        }),
        e.d(r, "brushY", function () {
          return pc;
        }),
        e.d(r, "brushSelection", function () {
          return hc;
        }),
        e.d(r, "chord", function () {
          return Tc;
        }),
        e.d(r, "chordTranspose", function () {
          return Ec;
        }),
        e.d(r, "chordDirected", function () {
          return Nc;
        }),
        e.d(r, "ribbon", function () {
          return Vc;
        }),
        e.d(r, "ribbonArrow", function () {
          return Gc;
        }),
        e.d(r, "color", function () {
          return cr;
        }),
        e.d(r, "rgb", function () {
          return hr;
        }),
        e.d(r, "hsl", function () {
          return xr;
        }),
        e.d(r, "lab", function () {
          return Qc;
        }),
        e.d(r, "hcl", function () {
          return cf;
        }),
        e.d(r, "lch", function () {
          return af;
        }),
        e.d(r, "gray", function () {
          return Kc;
        }),
        e.d(r, "cubehelix", function () {
          return yf;
        }),
        e.d(r, "contours", function () {
          return Tf;
        }),
        e.d(r, "contourDensity", function () {
          return Of;
        }),
        e.d(r, "Delaunay", function () {
          return fs;
        }),
        e.d(r, "Voronoi", function () {
          return rs;
        }),
        e.d(r, "dispatch", function () {
          return Tn;
        }),
        e.d(r, "drag", function () {
          return vs;
        }),
        e.d(r, "dragDisable", function () {
          return Ye;
        }),
        e.d(r, "dragEnable", function () {
          return He;
        }),
        e.d(r, "dsvFormat", function () {
          return As;
        }),
        e.d(r, "csvParse", function () {
          return Ts;
        }),
        e.d(r, "csvParseRows", function () {
          return Es;
        }),
        e.d(r, "csvFormat", function () {
          return Ns;
        }),
        e.d(r, "csvFormatBody", function () {
          return ks;
        }),
        e.d(r, "csvFormatRows", function () {
          return Cs;
        }),
        e.d(r, "csvFormatRow", function () {
          return Ps;
        }),
        e.d(r, "csvFormatValue", function () {
          return zs;
        }),
        e.d(r, "tsvParse", function () {
          return Os;
        }),
        e.d(r, "tsvParseRows", function () {
          return Ds;
        }),
        e.d(r, "tsvFormat", function () {
          return Rs;
        }),
        e.d(r, "tsvFormatBody", function () {
          return js;
        }),
        e.d(r, "tsvFormatRows", function () {
          return qs;
        }),
        e.d(r, "tsvFormatRow", function () {
          return Fs;
        }),
        e.d(r, "tsvFormatValue", function () {
          return Bs;
        }),
        e.d(r, "autoType", function () {
          return Is;
        }),
        e.d(r, "easeLinear", function () {
          return Ls;
        }),
        e.d(r, "easeQuad", function () {
          return Xs;
        }),
        e.d(r, "easeQuadIn", function () {
          return Ys;
        }),
        e.d(r, "easeQuadOut", function () {
          return Hs;
        }),
        e.d(r, "easeQuadInOut", function () {
          return Xs;
        }),
        e.d(r, "easeCubic", function () {
          return Oa;
        }),
        e.d(r, "easeCubicIn", function () {
          return za;
        }),
        e.d(r, "easeCubicOut", function () {
          return $a;
        }),
        e.d(r, "easeCubicInOut", function () {
          return Oa;
        }),
        e.d(r, "easePoly", function () {
          return Js;
        }),
        e.d(r, "easePolyIn", function () {
          return Vs;
        }),
        e.d(r, "easePolyOut", function () {
          return Gs;
        }),
        e.d(r, "easePolyInOut", function () {
          return Js;
        }),
        e.d(r, "easeSin", function () {
          return tl;
        }),
        e.d(r, "easeSinIn", function () {
          return Ks;
        }),
        e.d(r, "easeSinOut", function () {
          return Qs;
        }),
        e.d(r, "easeSinInOut", function () {
          return tl;
        }),
        e.d(r, "easeExp", function () {
          return il;
        }),
        e.d(r, "easeExpIn", function () {
          return el;
        }),
        e.d(r, "easeExpOut", function () {
          return rl;
        }),
        e.d(r, "easeExpInOut", function () {
          return il;
        }),
        e.d(r, "easeCircle", function () {
          return al;
        }),
        e.d(r, "easeCircleIn", function () {
          return ol;
        }),
        e.d(r, "easeCircleOut", function () {
          return ul;
        }),
        e.d(r, "easeCircleInOut", function () {
          return al;
        }),
        e.d(r, "easeBounce", function () {
          return fl;
        }),
        e.d(r, "easeBounceIn", function () {
          return cl;
        }),
        e.d(r, "easeBounceOut", function () {
          return fl;
        }),
        e.d(r, "easeBounceInOut", function () {
          return sl;
        }),
        e.d(r, "easeBack", function () {
          return dl;
        }),
        e.d(r, "easeBackIn", function () {
          return ll;
        }),
        e.d(r, "easeBackOut", function () {
          return hl;
        }),
        e.d(r, "easeBackInOut", function () {
          return dl;
        }),
        e.d(r, "easeElastic", function () {
          return yl;
        }),
        e.d(r, "easeElasticIn", function () {
          return gl;
        }),
        e.d(r, "easeElasticOut", function () {
          return yl;
        }),
        e.d(r, "easeElasticInOut", function () {
          return vl;
        }),
        e.d(r, "blob", function () {
          return ml;
        }),
        e.d(r, "buffer", function () {
          return xl;
        }),
        e.d(r, "dsv", function () {
          return Sl;
        }),
        e.d(r, "csv", function () {
          return Tl;
        }),
        e.d(r, "tsv", function () {
          return El;
        }),
        e.d(r, "image", function () {
          return Nl;
        }),
        e.d(r, "json", function () {
          return Cl;
        }),
        e.d(r, "text", function () {
          return Ml;
        }),
        e.d(r, "xml", function () {
          return zl;
        }),
        e.d(r, "html", function () {
          return $l;
        }),
        e.d(r, "svg", function () {
          return Ol;
        }),
        e.d(r, "forceCenter", function () {
          return Dl;
        }),
        e.d(r, "forceCollide", function () {
          return Gl;
        }),
        e.d(r, "forceLink", function () {
          return Wl;
        }),
        e.d(r, "forceManyBody", function () {
          return eh;
        }),
        e.d(r, "forceRadial", function () {
          return rh;
        }),
        e.d(r, "forceSimulation", function () {
          return nh;
        }),
        e.d(r, "forceX", function () {
          return ih;
        }),
        e.d(r, "forceY", function () {
          return oh;
        }),
        e.d(r, "formatDefaultLocale", function () {
          return xh;
        }),
        e.d(r, "format", function () {
          return dh;
        }),
        e.d(r, "formatPrefix", function () {
          return ph;
        }),
        e.d(r, "formatLocale", function () {
          return bh;
        }),
        e.d(r, "formatSpecifier", function () {
          return fh;
        }),
        e.d(r, "FormatSpecifier", function () {
          return sh;
        }),
        e.d(r, "precisionFixed", function () {
          return wh;
        }),
        e.d(r, "precisionPrefix", function () {
          return Mh;
        }),
        e.d(r, "precisionRound", function () {
          return Ah;
        }),
        e.d(r, "geoArea", function () {
          return Md;
        }),
        e.d(r, "geoBounds", function () {
          return ip;
        }),
        e.d(r, "geoCentroid", function () {
          return yp;
        }),
        e.d(r, "geoCircle", function () {
          return Ep;
        }),
        e.d(r, "geoClipAntimeridian", function () {
          return qp;
        }),
        e.d(r, "geoClipCircle", function () {
          return Fp;
        }),
        e.d(r, "geoClipExtent", function () {
          return Hp;
        }),
        e.d(r, "geoClipRectangle", function () {
          return Bp;
        }),
        e.d(r, "geoContains", function () {
          return cg;
        }),
        e.d(r, "geoDistance", function () {
          return Qp;
        }),
        e.d(r, "geoGraticule", function () {
          return lg;
        }),
        e.d(r, "geoGraticule10", function () {
          return hg;
        }),
        e.d(r, "geoInterpolate", function () {
          return vg;
        }),
        e.d(r, "geoLength", function () {
          return Zp;
        }),
        e.d(r, "geoPath", function () {
          return my;
        }),
        e.d(r, "geoAlbers", function () {
          return jy;
        }),
        e.d(r, "geoAlbersUsa", function () {
          return qy;
        }),
        e.d(r, "geoAzimuthalEqualArea", function () {
          return Uy;
        }),
        e.d(r, "geoAzimuthalEqualAreaRaw", function () {
          return Iy;
        }),
        e.d(r, "geoAzimuthalEquidistant", function () {
          return Yy;
        }),
        e.d(r, "geoAzimuthalEquidistantRaw", function () {
          return Ly;
        }),
        e.d(r, "geoConicConformal", function () {
          return Zy;
        }),
        e.d(r, "geoConicConformalRaw", function () {
          return Jy;
        }),
        e.d(r, "geoConicEqualArea", function () {
          return Ry;
        }),
        e.d(r, "geoConicEqualAreaRaw", function () {
          return Dy;
        }),
        e.d(r, "geoConicEquidistant", function () {
          return tv;
        }),
        e.d(r, "geoConicEquidistantRaw", function () {
          return Qy;
        }),
        e.d(r, "geoEqualEarth", function () {
          return av;
        }),
        e.d(r, "geoEqualEarthRaw", function () {
          return uv;
        }),
        e.d(r, "geoEquirectangular", function () {
          return Ky;
        }),
        e.d(r, "geoEquirectangularRaw", function () {
          return Wy;
        }),
        e.d(r, "geoGnomonic", function () {
          return fv;
        }),
        e.d(r, "geoGnomonicRaw", function () {
          return cv;
        }),
        e.d(r, "geoIdentity", function () {
          return sv;
        }),
        e.d(r, "geoProjection", function () {
          return zy;
        }),
        e.d(r, "geoProjectionMutator", function () {
          return $y;
        }),
        e.d(r, "geoMercator", function () {
          return Xy;
        }),
        e.d(r, "geoMercatorRaw", function () {
          return Hy;
        }),
        e.d(r, "geoNaturalEarth1", function () {
          return hv;
        }),
        e.d(r, "geoNaturalEarth1Raw", function () {
          return lv;
        }),
        e.d(r, "geoOrthographic", function () {
          return pv;
        }),
        e.d(r, "geoOrthographicRaw", function () {
          return dv;
        }),
        e.d(r, "geoStereographic", function () {
          return yv;
        }),
        e.d(r, "geoStereographicRaw", function () {
          return gv;
        }),
        e.d(r, "geoTransverseMercator", function () {
          return _v;
        }),
        e.d(r, "geoTransverseMercatorRaw", function () {
          return vv;
        }),
        e.d(r, "geoRotation", function () {
          return Ap;
        }),
        e.d(r, "geoStream", function () {
          return id;
        }),
        e.d(r, "geoTransform", function () {
          return by;
        }),
        e.d(r, "cluster", function () {
          return wv;
        }),
        e.d(r, "hierarchy", function () {
          return Av;
        }),
        e.d(r, "Node", function () {
          return kv;
        }),
        e.d(r, "pack", function () {
          return Wv;
        }),
        e.d(r, "packSiblings", function () {
          return Jv;
        }),
        e.d(r, "packEnclose", function () {
          return Dv;
        }),
        e.d(r, "partition", function () {
          return r_;
        }),
        e.d(r, "stratify", function () {
          return f_;
        }),
        e.d(r, "tree", function () {
          return __;
        }),
        e.d(r, "treemap", function () {
          return M_;
        }),
        e.d(r, "treemapBinary", function () {
          return A_;
        }),
        e.d(r, "treemapDice", function () {
          return e_;
        }),
        e.d(r, "treemapSlice", function () {
          return m_;
        }),
        e.d(r, "treemapSliceDice", function () {
          return S_;
        }),
        e.d(r, "treemapSquarify", function () {
          return w_;
        }),
        e.d(r, "treemapResquarify", function () {
          return T_;
        }),
        e.d(r, "interpolate", function () {
          return Gr;
        }),
        e.d(r, "interpolateArray", function () {
          return Br;
        }),
        e.d(r, "interpolateBasis", function () {
          return Er;
        }),
        e.d(r, "interpolateBasisClosed", function () {
          return Nr;
        }),
        e.d(r, "interpolateDate", function () {
          return Ur;
        }),
        e.d(r, "interpolateDiscrete", function () {
          return E_;
        }),
        e.d(r, "interpolateHue", function () {
          return N_;
        }),
        e.d(r, "interpolateNumber", function () {
          return Lr;
        }),
        e.d(r, "interpolateNumberArray", function () {
          return qr;
        }),
        e.d(r, "interpolateObject", function () {
          return Yr;
        }),
        e.d(r, "interpolateRound", function () {
          return k_;
        }),
        e.d(r, "interpolateString", function () {
          return Vr;
        }),
        e.d(r, "interpolateTransformCss", function () {
          return Qu;
        }),
        e.d(r, "interpolateTransformSvg", function () {
          return ta;
        }),
        e.d(r, "interpolateZoom", function () {
          return P_;
        }),
        e.d(r, "interpolateRgb", function () {
          return Or;
        }),
        e.d(r, "interpolateRgbBasis", function () {
          return Rr;
        }),
        e.d(r, "interpolateRgbBasisClosed", function () {
          return jr;
        }),
        e.d(r, "interpolateHsl", function () {
          return $_;
        }),
        e.d(r, "interpolateHslLong", function () {
          return O_;
        }),
        e.d(r, "interpolateLab", function () {
          return D_;
        }),
        e.d(r, "interpolateHcl", function () {
          return j_;
        }),
        e.d(r, "interpolateHclLong", function () {
          return q_;
        }),
        e.d(r, "interpolateCubehelix", function () {
          return B_;
        }),
        e.d(r, "interpolateCubehelixLong", function () {
          return I_;
        }),
        e.d(r, "piecewise", function () {
          return U_;
        }),
        e.d(r, "quantize", function () {
          return L_;
        }),
        e.d(r, "Path", function () {
          return Oc;
        }),
        e.d(r, "path", function () {
          return Dc;
        }),
        e.d(r, "pathRound", function () {
          return Rc;
        }),
        e.d(r, "polygonArea", function () {
          return Y_;
        }),
        e.d(r, "polygonCentroid", function () {
          return H_;
        }),
        e.d(r, "polygonHull", function () {
          return G_;
        }),
        e.d(r, "polygonContains", function () {
          return J_;
        }),
        e.d(r, "polygonLength", function () {
          return Z_;
        }),
        e.d(r, "quadtree", function () {
          return Bl;
        }),
        e.d(r, "randomUniform", function () {
          return K_;
        }),
        e.d(r, "randomInt", function () {
          return Q_;
        }),
        e.d(r, "randomNormal", function () {
          return tm;
        }),
        e.d(r, "randomLogNormal", function () {
          return nm;
        }),
        e.d(r, "randomBates", function () {
          return rm;
        }),
        e.d(r, "randomIrwinHall", function () {
          return em;
        }),
        e.d(r, "randomExponential", function () {
          return im;
        }),
        e.d(r, "randomPareto", function () {
          return om;
        }),
        e.d(r, "randomBernoulli", function () {
          return um;
        }),
        e.d(r, "randomGeometric", function () {
          return am;
        }),
        e.d(r, "randomBinomial", function () {
          return sm;
        }),
        e.d(r, "randomGamma", function () {
          return cm;
        }),
        e.d(r, "randomBeta", function () {
          return fm;
        }),
        e.d(r, "randomWeibull", function () {
          return lm;
        }),
        e.d(r, "randomCauchy", function () {
          return hm;
        }),
        e.d(r, "randomLogistic", function () {
          return dm;
        }),
        e.d(r, "randomPoisson", function () {
          return pm;
        }),
        e.d(r, "randomLcg", function () {
          return ym;
        }),
        e.d(r, "scaleBand", function () {
          return xm;
        }),
        e.d(r, "scalePoint", function () {
          return Mm;
        }),
        e.d(r, "scaleIdentity", function () {
          return Zm;
        }),
        e.d(r, "scaleLinear", function () {
          return Jm;
        }),
        e.d(r, "scaleLog", function () {
          return ob;
        }),
        e.d(r, "scaleSymlog", function () {
          return fb;
        }),
        e.d(r, "scaleOrdinal", function () {
          return bm;
        }),
        e.d(r, "scaleImplicit", function () {
          return mm;
        }),
        e.d(r, "scalePow", function () {
          return pb;
        }),
        e.d(r, "scaleSqrt", function () {
          return gb;
        }),
        e.d(r, "scaleRadial", function () {
          return _b;
        }),
        e.d(r, "scaleQuantile", function () {
          return mb;
        }),
        e.d(r, "scaleQuantize", function () {
          return bb;
        }),
        e.d(r, "scaleThreshold", function () {
          return xb;
        }),
        e.d(r, "scaleTime", function () {
          return cM;
        }),
        e.d(r, "scaleUtc", function () {
          return fM;
        }),
        e.d(r, "scaleSequential", function () {
          return hM;
        }),
        e.d(r, "scaleSequentialLog", function () {
          return dM;
        }),
        e.d(r, "scaleSequentialPow", function () {
          return gM;
        }),
        e.d(r, "scaleSequentialSqrt", function () {
          return yM;
        }),
        e.d(r, "scaleSequentialSymlog", function () {
          return pM;
        }),
        e.d(r, "scaleSequentialQuantile", function () {
          return vM;
        }),
        e.d(r, "scaleDiverging", function () {
          return mM;
        }),
        e.d(r, "scaleDivergingLog", function () {
          return bM;
        }),
        e.d(r, "scaleDivergingPow", function () {
          return wM;
        }),
        e.d(r, "scaleDivergingSqrt", function () {
          return MM;
        }),
        e.d(r, "scaleDivergingSymlog", function () {
          return xM;
        }),
        e.d(r, "tickFormat", function () {
          return Vm;
        }),
        e.d(r, "schemeCategory10", function () {
          return SM;
        }),
        e.d(r, "schemeAccent", function () {
          return TM;
        }),
        e.d(r, "schemeDark2", function () {
          return EM;
        }),
        e.d(r, "schemePaired", function () {
          return NM;
        }),
        e.d(r, "schemePastel1", function () {
          return kM;
        }),
        e.d(r, "schemePastel2", function () {
          return CM;
        }),
        e.d(r, "schemeSet1", function () {
          return PM;
        }),
        e.d(r, "schemeSet2", function () {
          return zM;
        }),
        e.d(r, "schemeSet3", function () {
          return $M;
        }),
        e.d(r, "schemeTableau10", function () {
          return OM;
        }),
        e.d(r, "interpolateBrBG", function () {
          return jM;
        }),
        e.d(r, "schemeBrBG", function () {
          return RM;
        }),
        e.d(r, "interpolatePRGn", function () {
          return FM;
        }),
        e.d(r, "schemePRGn", function () {
          return qM;
        }),
        e.d(r, "interpolatePiYG", function () {
          return IM;
        }),
        e.d(r, "schemePiYG", function () {
          return BM;
        }),
        e.d(r, "interpolatePuOr", function () {
          return LM;
        }),
        e.d(r, "schemePuOr", function () {
          return UM;
        }),
        e.d(r, "interpolateRdBu", function () {
          return HM;
        }),
        e.d(r, "schemeRdBu", function () {
          return YM;
        }),
        e.d(r, "interpolateRdGy", function () {
          return VM;
        }),
        e.d(r, "schemeRdGy", function () {
          return XM;
        }),
        e.d(r, "interpolateRdYlBu", function () {
          return JM;
        }),
        e.d(r, "schemeRdYlBu", function () {
          return GM;
        }),
        e.d(r, "interpolateRdYlGn", function () {
          return WM;
        }),
        e.d(r, "schemeRdYlGn", function () {
          return ZM;
        }),
        e.d(r, "interpolateSpectral", function () {
          return QM;
        }),
        e.d(r, "schemeSpectral", function () {
          return KM;
        }),
        e.d(r, "interpolateBuGn", function () {
          return nA;
        }),
        e.d(r, "schemeBuGn", function () {
          return tA;
        }),
        e.d(r, "interpolateBuPu", function () {
          return rA;
        }),
        e.d(r, "schemeBuPu", function () {
          return eA;
        }),
        e.d(r, "interpolateGnBu", function () {
          return oA;
        }),
        e.d(r, "schemeGnBu", function () {
          return iA;
        }),
        e.d(r, "interpolateOrRd", function () {
          return aA;
        }),
        e.d(r, "schemeOrRd", function () {
          return uA;
        }),
        e.d(r, "interpolatePuBuGn", function () {
          return fA;
        }),
        e.d(r, "schemePuBuGn", function () {
          return cA;
        }),
        e.d(r, "interpolatePuBu", function () {
          return lA;
        }),
        e.d(r, "schemePuBu", function () {
          return sA;
        }),
        e.d(r, "interpolatePuRd", function () {
          return dA;
        }),
        e.d(r, "schemePuRd", function () {
          return hA;
        }),
        e.d(r, "interpolateRdPu", function () {
          return gA;
        }),
        e.d(r, "schemeRdPu", function () {
          return pA;
        }),
        e.d(r, "interpolateYlGnBu", function () {
          return vA;
        }),
        e.d(r, "schemeYlGnBu", function () {
          return yA;
        }),
        e.d(r, "interpolateYlGn", function () {
          return mA;
        }),
        e.d(r, "schemeYlGn", function () {
          return _A;
        }),
        e.d(r, "interpolateYlOrBr", function () {
          return xA;
        }),
        e.d(r, "schemeYlOrBr", function () {
          return bA;
        }),
        e.d(r, "interpolateYlOrRd", function () {
          return MA;
        }),
        e.d(r, "schemeYlOrRd", function () {
          return wA;
        }),
        e.d(r, "interpolateBlues", function () {
          return SA;
        }),
        e.d(r, "schemeBlues", function () {
          return AA;
        }),
        e.d(r, "interpolateGreens", function () {
          return EA;
        }),
        e.d(r, "schemeGreens", function () {
          return TA;
        }),
        e.d(r, "interpolateGreys", function () {
          return kA;
        }),
        e.d(r, "schemeGreys", function () {
          return NA;
        }),
        e.d(r, "interpolatePurples", function () {
          return PA;
        }),
        e.d(r, "schemePurples", function () {
          return CA;
        }),
        e.d(r, "interpolateReds", function () {
          return $A;
        }),
        e.d(r, "schemeReds", function () {
          return zA;
        }),
        e.d(r, "interpolateOranges", function () {
          return DA;
        }),
        e.d(r, "schemeOranges", function () {
          return OA;
        }),
        e.d(r, "interpolateCividis", function () {
          return RA;
        }),
        e.d(r, "interpolateCubehelixDefault", function () {
          return jA;
        }),
        e.d(r, "interpolateRainbow", function () {
          return IA;
        }),
        e.d(r, "interpolateWarm", function () {
          return qA;
        }),
        e.d(r, "interpolateCool", function () {
          return FA;
        }),
        e.d(r, "interpolateSinebow", function () {
          return HA;
        }),
        e.d(r, "interpolateTurbo", function () {
          return XA;
        }),
        e.d(r, "interpolateViridis", function () {
          return GA;
        }),
        e.d(r, "interpolateMagma", function () {
          return JA;
        }),
        e.d(r, "interpolateInferno", function () {
          return ZA;
        }),
        e.d(r, "interpolatePlasma", function () {
          return WA;
        }),
        e.d(r, "create", function () {
          return dT;
        }),
        e.d(r, "creator", function () {
          return eS;
        }),
        e.d(r, "local", function () {
          return gT;
        }),
        e.d(r, "matcher", function () {
          return cS;
        }),
        e.d(r, "namespace", function () {
          return QA;
        }),
        e.d(r, "namespaces", function () {
          return KA;
        }),
        e.d(r, "pointer", function () {
          return _T;
        }),
        e.d(r, "pointers", function () {
          return mT;
        }),
        e.d(r, "select", function () {
          return hT;
        }),
        e.d(r, "selectAll", function () {
          return bT;
        }),
        e.d(r, "selection", function () {
          return lT;
        }),
        e.d(r, "selector", function () {
          return iS;
        }),
        e.d(r, "selectorAll", function () {
          return aS;
        }),
        e.d(r, "style", function () {
          return zS;
        }),
        e.d(r, "window", function () {
          return NS;
        }),
        e.d(r, "arc", function () {
          return UT;
        }),
        e.d(r, "area", function () {
          return ZT;
        }),
        e.d(r, "line", function () {
          return JT;
        }),
        e.d(r, "pie", function () {
          return QT;
        }),
        e.d(r, "areaRadial", function () {
          return oE;
        }),
        e.d(r, "radialArea", function () {
          return oE;
        }),
        e.d(r, "lineRadial", function () {
          return iE;
        }),
        e.d(r, "radialLine", function () {
          return iE;
        }),
        e.d(r, "pointRadial", function () {
          return uE;
        }),
        e.d(r, "link", function () {
          return pE;
        }),
        e.d(r, "linkHorizontal", function () {
          return gE;
        }),
        e.d(r, "linkVertical", function () {
          return yE;
        }),
        e.d(r, "linkRadial", function () {
          return vE;
        }),
        e.d(r, "symbol", function () {
          return YE;
        }),
        e.d(r, "symbolsStroke", function () {
          return LE;
        }),
        e.d(r, "symbolsFill", function () {
          return UE;
        }),
        e.d(r, "symbols", function () {
          return UE;
        }),
        e.d(r, "symbolAsterisk", function () {
          return mE;
        }),
        e.d(r, "symbolCircle", function () {
          return bE;
        }),
        e.d(r, "symbolCross", function () {
          return xE;
        }),
        e.d(r, "symbolDiamond", function () {
          return AE;
        }),
        e.d(r, "symbolDiamond2", function () {
          return SE;
        }),
        e.d(r, "symbolPlus", function () {
          return TE;
        }),
        e.d(r, "symbolSquare", function () {
          return EE;
        }),
        e.d(r, "symbolSquare2", function () {
          return NE;
        }),
        e.d(r, "symbolStar", function () {
          return zE;
        }),
        e.d(r, "symbolTriangle", function () {
          return OE;
        }),
        e.d(r, "symbolTriangle2", function () {
          return RE;
        }),
        e.d(r, "symbolWye", function () {
          return BE;
        }),
        e.d(r, "symbolTimes", function () {
          return IE;
        }),
        e.d(r, "symbolX", function () {
          return IE;
        }),
        e.d(r, "curveBasisClosed", function () {
          return ZE;
        }),
        e.d(r, "curveBasisOpen", function () {
          return KE;
        }),
        e.d(r, "curveBasis", function () {
          return GE;
        }),
        e.d(r, "curveBumpX", function () {
          return fE;
        }),
        e.d(r, "curveBumpY", function () {
          return sE;
        }),
        e.d(r, "curveBundle", function () {
          return tN;
        }),
        e.d(r, "curveCardinalClosed", function () {
          return oN;
        }),
        e.d(r, "curveCardinalOpen", function () {
          return aN;
        }),
        e.d(r, "curveCardinal", function () {
          return rN;
        }),
        e.d(r, "curveCatmullRomClosed", function () {
          return hN;
        }),
        e.d(r, "curveCatmullRomOpen", function () {
          return pN;
        }),
        e.d(r, "curveCatmullRom", function () {
          return sN;
        }),
        e.d(r, "curveLinearClosed", function () {
          return yN;
        }),
        e.d(r, "curveLinear", function () {
          return XT;
        }),
        e.d(r, "curveMonotoneX", function () {
          return AN;
        }),
        e.d(r, "curveMonotoneY", function () {
          return SN;
        }),
        e.d(r, "curveNatural", function () {
          return NN;
        }),
        e.d(r, "curveStep", function () {
          return CN;
        }),
        e.d(r, "curveStepAfter", function () {
          return zN;
        }),
        e.d(r, "curveStepBefore", function () {
          return PN;
        }),
        e.d(r, "stack", function () {
          return jN;
        }),
        e.d(r, "stackOffsetExpand", function () {
          return qN;
        }),
        e.d(r, "stackOffsetDiverging", function () {
          return FN;
        }),
        e.d(r, "stackOffsetNone", function () {
          return $N;
        }),
        e.d(r, "stackOffsetSilhouette", function () {
          return BN;
        }),
        e.d(r, "stackOffsetWiggle", function () {
          return IN;
        }),
        e.d(r, "stackOrderAppearance", function () {
          return UN;
        }),
        e.d(r, "stackOrderAscending", function () {
          return YN;
        }),
        e.d(r, "stackOrderDescending", function () {
          return XN;
        }),
        e.d(r, "stackOrderInsideOut", function () {
          return VN;
        }),
        e.d(r, "stackOrderNone", function () {
          return ON;
        }),
        e.d(r, "stackOrderReverse", function () {
          return GN;
        }),
        e.d(r, "timeInterval", function () {
          return Ab;
        }),
        e.d(r, "utcMillisecond", function () {
          return Sb;
        }),
        e.d(r, "utcMilliseconds", function () {
          return Tb;
        }),
        e.d(r, "timeMillisecond", function () {
          return Sb;
        }),
        e.d(r, "timeMilliseconds", function () {
          return Tb;
        }),
        e.d(r, "utcSecond", function () {
          return Eb;
        }),
        e.d(r, "utcSeconds", function () {
          return Nb;
        }),
        e.d(r, "timeSecond", function () {
          return Eb;
        }),
        e.d(r, "timeSeconds", function () {
          return Nb;
        }),
        e.d(r, "timeMinute", function () {
          return kb;
        }),
        e.d(r, "timeMinutes", function () {
          return Cb;
        }),
        e.d(r, "utcMinute", function () {
          return Pb;
        }),
        e.d(r, "utcMinutes", function () {
          return zb;
        }),
        e.d(r, "timeHour", function () {
          return $b;
        }),
        e.d(r, "timeHours", function () {
          return Ob;
        }),
        e.d(r, "utcHour", function () {
          return Db;
        }),
        e.d(r, "utcHours", function () {
          return Rb;
        }),
        e.d(r, "timeDay", function () {
          return jb;
        }),
        e.d(r, "timeDays", function () {
          return qb;
        }),
        e.d(r, "utcDay", function () {
          return Fb;
        }),
        e.d(r, "utcDays", function () {
          return Bb;
        }),
        e.d(r, "unixDay", function () {
          return Ib;
        }),
        e.d(r, "unixDays", function () {
          return Ub;
        }),
        e.d(r, "timeWeek", function () {
          return Yb;
        }),
        e.d(r, "timeWeeks", function () {
          return Wb;
        }),
        e.d(r, "timeSunday", function () {
          return Yb;
        }),
        e.d(r, "timeSundays", function () {
          return Wb;
        }),
        e.d(r, "timeMonday", function () {
          return Hb;
        }),
        e.d(r, "timeMondays", function () {
          return Kb;
        }),
        e.d(r, "timeTuesday", function () {
          return Xb;
        }),
        e.d(r, "timeTuesdays", function () {
          return Qb;
        }),
        e.d(r, "timeWednesday", function () {
          return Vb;
        }),
        e.d(r, "timeWednesdays", function () {
          return tx;
        }),
        e.d(r, "timeThursday", function () {
          return Gb;
        }),
        e.d(r, "timeThursdays", function () {
          return nx;
        }),
        e.d(r, "timeFriday", function () {
          return Jb;
        }),
        e.d(r, "timeFridays", function () {
          return ex;
        }),
        e.d(r, "timeSaturday", function () {
          return Zb;
        }),
        e.d(r, "timeSaturdays", function () {
          return rx;
        }),
        e.d(r, "utcWeek", function () {
          return ox;
        }),
        e.d(r, "utcWeeks", function () {
          return hx;
        }),
        e.d(r, "utcSunday", function () {
          return ox;
        }),
        e.d(r, "utcSundays", function () {
          return hx;
        }),
        e.d(r, "utcMonday", function () {
          return ux;
        }),
        e.d(r, "utcMondays", function () {
          return dx;
        }),
        e.d(r, "utcTuesday", function () {
          return ax;
        }),
        e.d(r, "utcTuesdays", function () {
          return px;
        }),
        e.d(r, "utcWednesday", function () {
          return cx;
        }),
        e.d(r, "utcWednesdays", function () {
          return gx;
        }),
        e.d(r, "utcThursday", function () {
          return fx;
        }),
        e.d(r, "utcThursdays", function () {
          return yx;
        }),
        e.d(r, "utcFriday", function () {
          return sx;
        }),
        e.d(r, "utcFridays", function () {
          return vx;
        }),
        e.d(r, "utcSaturday", function () {
          return lx;
        }),
        e.d(r, "utcSaturdays", function () {
          return _x;
        }),
        e.d(r, "timeMonth", function () {
          return mx;
        }),
        e.d(r, "timeMonths", function () {
          return bx;
        }),
        e.d(r, "utcMonth", function () {
          return xx;
        }),
        e.d(r, "utcMonths", function () {
          return wx;
        }),
        e.d(r, "timeYear", function () {
          return Mx;
        }),
        e.d(r, "timeYears", function () {
          return Ax;
        }),
        e.d(r, "utcYear", function () {
          return Sx;
        }),
        e.d(r, "utcYears", function () {
          return Tx;
        }),
        e.d(r, "utcTicks", function () {
          return Nx;
        }),
        e.d(r, "utcTickInterval", function () {
          return kx;
        }),
        e.d(r, "timeTicks", function () {
          return Cx;
        }),
        e.d(r, "timeTickInterval", function () {
          return Px;
        }),
        e.d(r, "timeFormatDefaultLocale", function () {
          return iM;
        }),
        e.d(r, "timeFormat", function () {
          return jx;
        }),
        e.d(r, "timeParse", function () {
          return qx;
        }),
        e.d(r, "utcFormat", function () {
          return Fx;
        }),
        e.d(r, "utcParse", function () {
          return Bx;
        }),
        e.d(r, "timeFormatLocale", function () {
          return Dx;
        }),
        e.d(r, "isoFormat", function () {
          return JN;
        }),
        e.d(r, "isoParse", function () {
          return ZN;
        }),
        e.d(r, "now", function () {
          return zu;
        }),
        e.d(r, "timer", function () {
          return Du;
        }),
        e.d(r, "timerFlush", function () {
          return Ru;
        }),
        e.d(r, "timeout", function () {
          return Bu;
        }),
        e.d(r, "interval", function () {
          return WN;
        }),
        e.d(r, "transition", function () {
          return ka;
        }),
        e.d(r, "active", function () {
          return qa;
        }),
        e.d(r, "interrupt", function () {
          return Gu;
        }),
        e.d(r, "zoom", function () {
          return dk;
        }),
        e.d(r, "zoomTransform", function () {
          return ik;
        }),
        e.d(r, "zoomIdentity", function () {
          return rk;
        }),
        e.d(r, "ZoomTransform", function () {
          return ek;
        });
      const i = {
        title_graphic: { section: "1. Main", type: "string", label: "1 Title" },
        default_icon: {
          section: "1. Main",
          type: "string",
          label: "2. Title Icon <i>",
          default: "",
        },
        dimension_title: {
          section: "1. Main",
          type: "string",
          label: "3. Dimension tooltip",
          default: "",
        },
        measure_title: {
          section: "1. Main",
          type: "string",
          label: "4. Measure tooltip",
          default: "",
        },
        chart_description: {
          section: "1. Main",
          type: "string",
          label: "5. Chart description",
          default: "",
        },
        thead_title_1: {
          section: "1. Main",
          type: "string",
          label: "6. Table Thead title 1",
          default: "",
        },
        thead_title_2: {
          section: "1. Main",
          type: "string",
          label: "7. Table Thead title 2",
          default: "",
        },
        color_not_selected: {
          section: "2. Layout",
          type: "string",
          display: "color",
          label: "Color when not selected",
          default: "#dedede",
        },
        color_table: {
          section: "2. Layout",
          type: "string",
          display: "color",
          label: "Table Bar Color",
          default: "#dedede",
        },
        table_font_size: {
          section: "2. Layout",
          type: "string",
          label: "Table Font Size",
          default: "11",
        },
        table_font_weight: {
          section: "2. Layout",
          type: "string",
          label: "Table Font Weight",
          display: "select",
          values: [{ normal: "normal" }, { bold: "bold" }],
          default: "normal",
        },
        table_font_family: {
          section: "2. Layout",
          type: "string",
          label: "Table Font Family",
          display: "select",
          values: [{ "'Quicksand', sans-serif": "'Quicksand', sans-serif" }],
          default: "'Quicksand', sans-serif",
        },
        table_font_color: {
          section: "2. Layout",
          type: "string",
          display: "color",
          label: "Table Font Color",
          default: "#333333",
        },
        number_format: {
          section: "4. Format",
          type: "string",
          label: "Number format",
          display: "select",
          values: [{ Percent: "percent" }, { Normal: "normal" }],
          default: "normal",
        },
        merge_selected_filters: {
          section: "4. Format",
          type: "string",
          label: "Merge selected filters",
          display: "select",
          values: [{ Yes: "yes" }, { No: "no" }],
          default: "no",
        },
        show_title: {
          section: "4. Format",
          type: "string",
          label: "Show title (thead)",
          display: "select",
          default: "no",
          values: [{ Yes: "yes" }, { No: "no" }],
        },
      };
      function o(t, n) {
        return null == t || null == n
          ? NaN
          : t < n
          ? -1
          : t > n
          ? 1
          : t >= n
          ? 0
          : NaN;
      }
      function u(t, n) {
        return null == t || null == n
          ? NaN
          : n < t
          ? -1
          : n > t
          ? 1
          : n >= t
          ? 0
          : NaN;
      }
      function a(t) {
        let n, e, r;
        function i(t, r, i = 0, o = t.length) {
          if (i < o) {
            if (0 !== n(r, r)) return o;
            do {
              const n = (i + o) >>> 1;
              e(t[n], r) < 0 ? (i = n + 1) : (o = n);
            } while (i < o);
          }
          return i;
        }
        return (
          2 !== t.length
            ? ((n = o), (e = (n, e) => o(t(n), e)), (r = (n, e) => t(n) - e))
            : ((n = t === o || t === u ? t : c), (e = t), (r = t)),
          {
            left: i,
            center: function (t, n, e = 0, o = t.length) {
              const u = i(t, n, e, o - 1);
              return u > e && r(t[u - 1], n) > -r(t[u], n) ? u - 1 : u;
            },
            right: function (t, r, i = 0, o = t.length) {
              if (i < o) {
                if (0 !== n(r, r)) return o;
                do {
                  const n = (i + o) >>> 1;
                  e(t[n], r) <= 0 ? (i = n + 1) : (o = n);
                } while (i < o);
              }
              return i;
            },
          }
        );
      }
      function c() {
        return 0;
      }
      function f(t) {
        return null === t ? NaN : +t;
      }
      function* s(t, n) {
        if (void 0 === n)
          for (let n of t) null != n && (n = +n) >= n && (yield n);
        else {
          let e = -1;
          for (let r of t)
            null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r);
        }
      }
      const l = a(o),
        h = l.right,
        d = l.left,
        p = a(f).center;
      var g = h;
      function y(t, n) {
        if (!((n = +n) >= 0)) throw new RangeError("invalid r");
        let e = t.length;
        if (!((e = Math.floor(e)) >= 0)) throw new RangeError("invalid length");
        if (!e || !n) return t;
        const r = w(n),
          i = t.slice();
        return r(t, i, 0, e, 1), r(i, t, 0, e, 1), r(t, i, 0, e, 1), t;
      }
      const v = m(w),
        _ = m(function (t) {
          const n = w(t);
          return (t, e, r, i, o) => {
            n(t, e, (r <<= 2) + 0, (i <<= 2) + 0, (o <<= 2)),
              n(t, e, r + 1, i + 1, o),
              n(t, e, r + 2, i + 2, o),
              n(t, e, r + 3, i + 3, o);
          };
        });
      function m(t) {
        return function (n, e, r = e) {
          if (!((e = +e) >= 0)) throw new RangeError("invalid rx");
          if (!((r = +r) >= 0)) throw new RangeError("invalid ry");
          let { data: i, width: o, height: u } = n;
          if (!((o = Math.floor(o)) >= 0))
            throw new RangeError("invalid width");
          if (!((u = Math.floor(void 0 !== u ? u : i.length / o)) >= 0))
            throw new RangeError("invalid height");
          if (!o || !u || (!e && !r)) return n;
          const a = e && t(e),
            c = r && t(r),
            f = i.slice();
          return (
            a && c
              ? (b(a, f, i, o, u),
                b(a, i, f, o, u),
                b(a, f, i, o, u),
                x(c, i, f, o, u),
                x(c, f, i, o, u),
                x(c, i, f, o, u))
              : a
              ? (b(a, i, f, o, u), b(a, f, i, o, u), b(a, i, f, o, u))
              : c && (x(c, i, f, o, u), x(c, f, i, o, u), x(c, i, f, o, u)),
            n
          );
        };
      }
      function b(t, n, e, r, i) {
        for (let o = 0, u = r * i; o < u; ) t(n, e, o, (o += r), 1);
      }
      function x(t, n, e, r, i) {
        for (let o = 0, u = r * i; o < r; ++o) t(n, e, o, o + u, r);
      }
      function w(t) {
        const n = Math.floor(t);
        if (n === t)
          return (function (t) {
            const n = 2 * t + 1;
            return (e, r, i, o, u) => {
              if (!((o -= u) >= i)) return;
              let a = t * r[i];
              const c = u * t;
              for (let t = i, n = i + c; t < n; t += u) a += r[Math.min(o, t)];
              for (let t = i, f = o; t <= f; t += u)
                (a += r[Math.min(o, t + c)]),
                  (e[t] = a / n),
                  (a -= r[Math.max(i, t - c)]);
            };
          })(t);
        const e = t - n,
          r = 2 * t + 1;
        return (t, i, o, u, a) => {
          if (!((u -= a) >= o)) return;
          let c = n * i[o];
          const f = a * n,
            s = f + a;
          for (let t = o, n = o + f; t < n; t += a) c += i[Math.min(u, t)];
          for (let n = o, l = u; n <= l; n += a)
            (c += i[Math.min(u, n + f)]),
              (t[n] =
                (c + e * (i[Math.max(o, n - s)] + i[Math.min(u, n + s)])) / r),
              (c -= i[Math.max(o, n - f)]);
        };
      }
      function M(t, n) {
        let e = 0;
        if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && ++e;
        else {
          let r = -1;
          for (let i of t) null != (i = n(i, ++r, t)) && (i = +i) >= i && ++e;
        }
        return e;
      }
      function A(t) {
        return 0 | t.length;
      }
      function S(t) {
        return !(t > 0);
      }
      function T(t) {
        return "object" != typeof t || "length" in t ? t : Array.from(t);
      }
      function E(...t) {
        const n =
            "function" == typeof t[t.length - 1] &&
            (function (t) {
              return (n) => t(...n);
            })(t.pop()),
          e = (t = t.map(T)).map(A),
          r = t.length - 1,
          i = new Array(r + 1).fill(0),
          o = [];
        if (r < 0 || e.some(S)) return o;
        for (;;) {
          o.push(i.map((n, e) => t[e][n]));
          let u = r;
          for (; ++i[u] === e[u]; ) {
            if (0 === u) return n ? o.map(n) : o;
            i[u--] = 0;
          }
        }
      }
      function N(t, n) {
        var e = 0,
          r = 0;
        return Float64Array.from(
          t,
          void 0 === n
            ? (t) => (e += +t || 0)
            : (i) => (e += +n(i, r++, t) || 0)
        );
      }
      function k(t, n) {
        let e,
          r = 0,
          i = 0,
          o = 0;
        if (void 0 === n)
          for (let n of t)
            null != n &&
              (n = +n) >= n &&
              ((e = n - i), (i += e / ++r), (o += e * (n - i)));
        else {
          let u = -1;
          for (let a of t)
            null != (a = n(a, ++u, t)) &&
              (a = +a) >= a &&
              ((e = a - i), (i += e / ++r), (o += e * (a - i)));
        }
        if (r > 1) return o / (r - 1);
      }
      function C(t, n) {
        const e = k(t, n);
        return e ? Math.sqrt(e) : e;
      }
      function P(t, n) {
        let e, r;
        if (void 0 === n)
          for (const n of t)
            null != n &&
              (void 0 === e
                ? n >= n && (e = r = n)
                : (e > n && (e = n), r < n && (r = n)));
        else {
          let i = -1;
          for (let o of t)
            null != (o = n(o, ++i, t)) &&
              (void 0 === e
                ? o >= o && (e = r = o)
                : (e > o && (e = o), r < o && (r = o)));
        }
        return [e, r];
      }
      class z {
        constructor() {
          (this._partials = new Float64Array(32)), (this._n = 0);
        }
        add(t) {
          const n = this._partials;
          let e = 0;
          for (let r = 0; r < this._n && r < 32; r++) {
            const i = n[r],
              o = t + i,
              u = Math.abs(t) < Math.abs(i) ? t - (o - i) : i - (o - t);
            u && (n[e++] = u), (t = o);
          }
          return (n[e] = t), (this._n = e + 1), this;
        }
        valueOf() {
          const t = this._partials;
          let n,
            e,
            r,
            i = this._n,
            o = 0;
          if (i > 0) {
            for (
              o = t[--i];
              i > 0 &&
              ((n = o), (e = t[--i]), (o = n + e), (r = e - (o - n)), !r);

            );
            i > 0 &&
              ((r < 0 && t[i - 1] < 0) || (r > 0 && t[i - 1] > 0)) &&
              ((e = 2 * r), (n = o + e), e == n - o && (o = n));
          }
          return o;
        }
      }
      function $(t, n) {
        const e = new z();
        if (void 0 === n) for (let n of t) (n = +n) && e.add(n);
        else {
          let r = -1;
          for (let i of t) (i = +n(i, ++r, t)) && e.add(i);
        }
        return +e;
      }
      function O(t, n) {
        const e = new z();
        let r = -1;
        return Float64Array.from(
          t,
          void 0 === n
            ? (t) => e.add(+t || 0)
            : (i) => e.add(+n(i, ++r, t) || 0)
        );
      }
      class D extends Map {
        constructor(t, n = B) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: n },
            }),
            null != t)
          )
            for (const [n, e] of t) this.set(n, e);
        }
        get(t) {
          return super.get(j(this, t));
        }
        has(t) {
          return super.has(j(this, t));
        }
        set(t, n) {
          return super.set(q(this, t), n);
        }
        delete(t) {
          return super.delete(F(this, t));
        }
      }
      class R extends Set {
        constructor(t, n = B) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: n },
            }),
            null != t)
          )
            for (const n of t) this.add(n);
        }
        has(t) {
          return super.has(j(this, t));
        }
        add(t) {
          return super.add(q(this, t));
        }
        delete(t) {
          return super.delete(F(this, t));
        }
      }
      function j({ _intern: t, _key: n }, e) {
        const r = n(e);
        return t.has(r) ? t.get(r) : e;
      }
      function q({ _intern: t, _key: n }, e) {
        const r = n(e);
        return t.has(r) ? t.get(r) : (t.set(r, e), e);
      }
      function F({ _intern: t, _key: n }, e) {
        const r = n(e);
        return t.has(r) && ((e = t.get(r)), t.delete(r)), e;
      }
      function B(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      function I(t) {
        return t;
      }
      function U(t, ...n) {
        return K(t, I, I, n);
      }
      function L(t, ...n) {
        return K(t, Array.from, I, n);
      }
      function Y(t, n) {
        for (let e = 1, r = n.length; e < r; ++e)
          t = t.flatMap((t) => t.pop().map(([n, e]) => [...t, n, e]));
        return t;
      }
      function H(t, ...n) {
        return Y(L(t, ...n), n);
      }
      function X(t, n, ...e) {
        return Y(G(t, n, ...e), e);
      }
      function V(t, n, ...e) {
        return K(t, I, n, e);
      }
      function G(t, n, ...e) {
        return K(t, Array.from, n, e);
      }
      function J(t, ...n) {
        return K(t, I, W, n);
      }
      function Z(t, ...n) {
        return K(t, Array.from, W, n);
      }
      function W(t) {
        if (1 !== t.length) throw new Error("duplicate key");
        return t[0];
      }
      function K(t, n, e, r) {
        return (function t(i, o) {
          if (o >= r.length) return e(i);
          const u = new D(),
            a = r[o++];
          let c = -1;
          for (const t of i) {
            const n = a(t, ++c, i),
              e = u.get(n);
            e ? e.push(t) : u.set(n, [t]);
          }
          for (const [n, e] of u) u.set(n, t(e, o));
          return n(u);
        })(t, 0);
      }
      function Q(t, n) {
        return Array.from(n, (n) => t[n]);
      }
      function tt(t, ...n) {
        if ("function" != typeof t[Symbol.iterator])
          throw new TypeError("values is not iterable");
        t = Array.from(t);
        let [e] = n;
        if ((e && 2 !== e.length) || n.length > 1) {
          const r = Uint32Array.from(t, (t, n) => n);
          return (
            n.length > 1
              ? ((n = n.map((n) => t.map(n))),
                r.sort((t, e) => {
                  for (const r of n) {
                    const n = et(r[t], r[e]);
                    if (n) return n;
                  }
                }))
              : ((e = t.map(e)), r.sort((t, n) => et(e[t], e[n]))),
            Q(t, r)
          );
        }
        return t.sort(nt(e));
      }
      function nt(t = o) {
        if (t === o) return et;
        if ("function" != typeof t)
          throw new TypeError("compare is not a function");
        return (n, e) => {
          const r = t(n, e);
          return r || 0 === r ? r : (0 === t(e, e)) - (0 === t(n, n));
        };
      }
      function et(t, n) {
        return (
          (null == t || !(t >= t)) - (null == n || !(n >= n)) ||
          (t < n ? -1 : t > n ? 1 : 0)
        );
      }
      function rt(t, n, e) {
        return (
          2 !== n.length
            ? tt(V(t, n, e), ([t, n], [e, r]) => o(n, r) || o(t, e))
            : tt(U(t, e), ([t, e], [r, i]) => n(e, i) || o(t, r))
        ).map(([t]) => t);
      }
      var it = Array.prototype,
        ot = it.slice;
      it.map;
      function ut(t) {
        return () => t;
      }
      const at = Math.sqrt(50),
        ct = Math.sqrt(10),
        ft = Math.sqrt(2);
      function st(t, n, e) {
        const r = (n - t) / Math.max(0, e),
          i = Math.floor(Math.log10(r)),
          o = r / Math.pow(10, i),
          u = o >= at ? 10 : o >= ct ? 5 : o >= ft ? 2 : 1;
        let a, c, f;
        return (
          i < 0
            ? ((f = Math.pow(10, -i) / u),
              (a = Math.round(t * f)),
              (c = Math.round(n * f)),
              a / f < t && ++a,
              c / f > n && --c,
              (f = -f))
            : ((f = Math.pow(10, i) * u),
              (a = Math.round(t / f)),
              (c = Math.round(n / f)),
              a * f < t && ++a,
              c * f > n && --c),
          c < a && 0.5 <= e && e < 2 ? st(t, n, 2 * e) : [a, c, f]
        );
      }
      function lt(t, n, e) {
        if (!((e = +e) > 0)) return [];
        if ((t = +t) === (n = +n)) return [t];
        const r = n < t,
          [i, o, u] = r ? st(n, t, e) : st(t, n, e);
        if (!(o >= i)) return [];
        const a = o - i + 1,
          c = new Array(a);
        if (r)
          if (u < 0) for (let t = 0; t < a; ++t) c[t] = (o - t) / -u;
          else for (let t = 0; t < a; ++t) c[t] = (o - t) * u;
        else if (u < 0) for (let t = 0; t < a; ++t) c[t] = (i + t) / -u;
        else for (let t = 0; t < a; ++t) c[t] = (i + t) * u;
        return c;
      }
      function ht(t, n, e) {
        return st((t = +t), (n = +n), (e = +e))[2];
      }
      function dt(t, n, e) {
        e = +e;
        const r = (n = +n) < (t = +t),
          i = r ? ht(n, t, e) : ht(t, n, e);
        return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
      }
      function pt(t, n, e) {
        let r;
        for (;;) {
          const i = ht(t, n, e);
          if (i === r || 0 === i || !isFinite(i)) return [t, n];
          i > 0
            ? ((t = Math.floor(t / i) * i), (n = Math.ceil(n / i) * i))
            : i < 0 &&
              ((t = Math.ceil(t * i) / i), (n = Math.floor(n * i) / i)),
            (r = i);
        }
      }
      function gt(t) {
        return Math.max(1, Math.ceil(Math.log(M(t)) / Math.LN2) + 1);
      }
      function yt() {
        var t = I,
          n = P,
          e = gt;
        function r(r) {
          Array.isArray(r) || (r = Array.from(r));
          var i,
            o,
            u,
            a = r.length,
            c = new Array(a);
          for (i = 0; i < a; ++i) c[i] = t(r[i], i, r);
          var f = n(c),
            s = f[0],
            l = f[1],
            h = e(c, s, l);
          if (!Array.isArray(h)) {
            const t = l,
              e = +h;
            if (
              (n === P && ([s, l] = pt(s, l, e)),
              (h = lt(s, l, e))[0] <= s && (u = ht(s, l, e)),
              h[h.length - 1] >= l)
            )
              if (t >= l && n === P) {
                const t = ht(s, l, e);
                isFinite(t) &&
                  (t > 0
                    ? (l = (Math.floor(l / t) + 1) * t)
                    : t < 0 && (l = (Math.ceil(l * -t) + 1) / -t));
              } else h.pop();
          }
          for (var d = h.length, p = 0, y = d; h[p] <= s; ) ++p;
          for (; h[y - 1] > l; ) --y;
          (p || y < d) && ((h = h.slice(p, y)), (d = y - p));
          var v,
            _ = new Array(d + 1);
          for (i = 0; i <= d; ++i)
            ((v = _[i] = []).x0 = i > 0 ? h[i - 1] : s),
              (v.x1 = i < d ? h[i] : l);
          if (isFinite(u)) {
            if (u > 0)
              for (i = 0; i < a; ++i)
                null != (o = c[i]) &&
                  s <= o &&
                  o <= l &&
                  _[Math.min(d, Math.floor((o - s) / u))].push(r[i]);
            else if (u < 0)
              for (i = 0; i < a; ++i)
                if (null != (o = c[i]) && s <= o && o <= l) {
                  const t = Math.floor((s - o) * u);
                  _[Math.min(d, t + (h[t] <= o))].push(r[i]);
                }
          } else
            for (i = 0; i < a; ++i)
              null != (o = c[i]) &&
                s <= o &&
                o <= l &&
                _[g(h, o, 0, d)].push(r[i]);
          return _;
        }
        return (
          (r.value = function (n) {
            return arguments.length
              ? ((t = "function" == typeof n ? n : ut(n)), r)
              : t;
          }),
          (r.domain = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : ut([t[0], t[1]])), r)
              : n;
          }),
          (r.thresholds = function (t) {
            return arguments.length
              ? ((e =
                  "function" == typeof t
                    ? t
                    : ut(Array.isArray(t) ? ot.call(t) : t)),
                r)
              : e;
          }),
          r
        );
      }
      function vt(t, n) {
        let e;
        if (void 0 === n)
          for (const n of t)
            null != n && (e < n || (void 0 === e && n >= n)) && (e = n);
        else {
          let r = -1;
          for (let i of t)
            null != (i = n(i, ++r, t)) &&
              (e < i || (void 0 === e && i >= i)) &&
              (e = i);
        }
        return e;
      }
      function _t(t, n) {
        let e,
          r = -1,
          i = -1;
        if (void 0 === n)
          for (const n of t)
            ++i,
              null != n &&
                (e < n || (void 0 === e && n >= n)) &&
                ((e = n), (r = i));
        else
          for (let o of t)
            null != (o = n(o, ++i, t)) &&
              (e < o || (void 0 === e && o >= o)) &&
              ((e = o), (r = i));
        return r;
      }
      function mt(t, n) {
        let e;
        if (void 0 === n)
          for (const n of t)
            null != n && (e > n || (void 0 === e && n >= n)) && (e = n);
        else {
          let r = -1;
          for (let i of t)
            null != (i = n(i, ++r, t)) &&
              (e > i || (void 0 === e && i >= i)) &&
              (e = i);
        }
        return e;
      }
      function bt(t, n) {
        let e,
          r = -1,
          i = -1;
        if (void 0 === n)
          for (const n of t)
            ++i,
              null != n &&
                (e > n || (void 0 === e && n >= n)) &&
                ((e = n), (r = i));
        else
          for (let o of t)
            null != (o = n(o, ++i, t)) &&
              (e > o || (void 0 === e && o >= o)) &&
              ((e = o), (r = i));
        return r;
      }
      function xt(t, n, e = 0, r = 1 / 0, i) {
        if (
          ((n = Math.floor(n)),
          (e = Math.floor(Math.max(0, e))),
          (r = Math.floor(Math.min(t.length - 1, r))),
          !(e <= n && n <= r))
        )
          return t;
        for (i = void 0 === i ? et : nt(i); r > e; ) {
          if (r - e > 600) {
            const o = r - e + 1,
              u = n - e + 1,
              a = Math.log(o),
              c = 0.5 * Math.exp((2 * a) / 3),
              f =
                0.5 *
                Math.sqrt((a * c * (o - c)) / o) *
                (u - o / 2 < 0 ? -1 : 1);
            xt(
              t,
              n,
              Math.max(e, Math.floor(n - (u * c) / o + f)),
              Math.min(r, Math.floor(n + ((o - u) * c) / o + f)),
              i
            );
          }
          const o = t[n];
          let u = e,
            a = r;
          for (wt(t, e, n), i(t[r], o) > 0 && wt(t, e, r); u < a; ) {
            for (wt(t, u, a), ++u, --a; i(t[u], o) < 0; ) ++u;
            for (; i(t[a], o) > 0; ) --a;
          }
          0 === i(t[e], o) ? wt(t, e, a) : (++a, wt(t, a, r)),
            a <= n && (e = a + 1),
            n <= a && (r = a - 1);
        }
        return t;
      }
      function wt(t, n, e) {
        const r = t[n];
        (t[n] = t[e]), (t[e] = r);
      }
      function Mt(t, n = o) {
        let e,
          r = !1;
        if (1 === n.length) {
          let i;
          for (const u of t) {
            const t = n(u);
            (r ? o(t, i) > 0 : 0 === o(t, t)) && ((e = u), (i = t), (r = !0));
          }
        } else
          for (const i of t)
            (r ? n(i, e) > 0 : 0 === n(i, i)) && ((e = i), (r = !0));
        return e;
      }
      function At(t, n, e) {
        if ((r = (t = Float64Array.from(s(t, e))).length) && !isNaN((n = +n))) {
          if (n <= 0 || r < 2) return mt(t);
          if (n >= 1) return vt(t);
          var r,
            i = (r - 1) * n,
            o = Math.floor(i),
            u = vt(xt(t, o).subarray(0, o + 1));
          return u + (mt(t.subarray(o + 1)) - u) * (i - o);
        }
      }
      function St(t, n, e = f) {
        if ((r = t.length) && !isNaN((n = +n))) {
          if (n <= 0 || r < 2) return +e(t[0], 0, t);
          if (n >= 1) return +e(t[r - 1], r - 1, t);
          var r,
            i = (r - 1) * n,
            o = Math.floor(i),
            u = +e(t[o], o, t);
          return u + (+e(t[o + 1], o + 1, t) - u) * (i - o);
        }
      }
      function Tt(t, n, e) {
        if ((r = (t = Float64Array.from(s(t, e))).length) && !isNaN((n = +n))) {
          if (n <= 0 || r < 2) return bt(t);
          if (n >= 1) return _t(t);
          var r,
            i = Math.floor((r - 1) * n);
          return Mt(
            xt(
              Uint32Array.from(t, (t, n) => n),
              i,
              0,
              r - 1,
              (n, e) => et(t[n], t[e])
            ).subarray(0, i + 1),
            (n) => t[n]
          );
        }
      }
      function Et(t, n, e) {
        const r = M(t),
          i = At(t, 0.75) - At(t, 0.25);
        return r && i ? Math.ceil((e - n) / (2 * i * Math.pow(r, -1 / 3))) : 1;
      }
      function Nt(t, n, e) {
        const r = M(t),
          i = C(t);
        return r && i ? Math.ceil(((e - n) * Math.cbrt(r)) / (3.49 * i)) : 1;
      }
      function kt(t, n) {
        let e = 0,
          r = 0;
        if (void 0 === n)
          for (let n of t) null != n && (n = +n) >= n && (++e, (r += n));
        else {
          let i = -1;
          for (let o of t)
            null != (o = n(o, ++i, t)) && (o = +o) >= o && (++e, (r += o));
        }
        if (e) return r / e;
      }
      function Ct(t, n) {
        return At(t, 0.5, n);
      }
      function Pt(t, n) {
        return Tt(t, 0.5, n);
      }
      function zt(t) {
        return Array.from(
          (function* (t) {
            for (const n of t) yield* n;
          })(t)
        );
      }
      function $t(t, n) {
        const e = new D();
        if (void 0 === n)
          for (let n of t) null != n && n >= n && e.set(n, (e.get(n) || 0) + 1);
        else {
          let r = -1;
          for (let i of t)
            null != (i = n(i, ++r, t)) &&
              i >= i &&
              e.set(i, (e.get(i) || 0) + 1);
        }
        let r,
          i = 0;
        for (const [t, n] of e) n > i && ((i = n), (r = t));
        return r;
      }
      function Ot(t, n = Dt) {
        const e = [];
        let r,
          i = !1;
        for (const o of t) i && e.push(n(r, o)), (r = o), (i = !0);
        return e;
      }
      function Dt(t, n) {
        return [t, n];
      }
      function Rt(t, n, e) {
        (t = +t),
          (n = +n),
          (e =
            (i = arguments.length) < 2
              ? ((n = t), (t = 0), 1)
              : i < 3
              ? 1
              : +e);
        for (
          var r = -1,
            i = 0 | Math.max(0, Math.ceil((n - t) / e)),
            o = new Array(i);
          ++r < i;

        )
          o[r] = t + r * e;
        return o;
      }
      function jt(t, n = o) {
        if ("function" != typeof t[Symbol.iterator])
          throw new TypeError("values is not iterable");
        let e = Array.from(t);
        const r = new Float64Array(e.length);
        2 !== n.length && ((e = e.map(n)), (n = o));
        const i = (t, r) => n(e[t], e[r]);
        let u, a;
        return (
          (t = Uint32Array.from(e, (t, n) => n)).sort(
            n === o ? (t, n) => et(e[t], e[n]) : nt(i)
          ),
          t.forEach((t, n) => {
            const e = i(t, void 0 === u ? t : u);
            e >= 0
              ? ((void 0 === u || e > 0) && ((u = t), (a = n)), (r[t] = a))
              : (r[t] = NaN);
          }),
          r
        );
      }
      function qt(t, n = o) {
        let e,
          r = !1;
        if (1 === n.length) {
          let i;
          for (const u of t) {
            const t = n(u);
            (r ? o(t, i) < 0 : 0 === o(t, t)) && ((e = u), (i = t), (r = !0));
          }
        } else
          for (const i of t)
            (r ? n(i, e) < 0 : 0 === n(i, i)) && ((e = i), (r = !0));
        return e;
      }
      function Ft(t, n = o) {
        if (1 === n.length) return bt(t, n);
        let e,
          r = -1,
          i = -1;
        for (const o of t)
          ++i, (r < 0 ? 0 === n(o, o) : n(o, e) < 0) && ((e = o), (r = i));
        return r;
      }
      function Bt(t, n = o) {
        if (1 === n.length) return _t(t, n);
        let e,
          r = -1,
          i = -1;
        for (const o of t)
          ++i, (r < 0 ? 0 === n(o, o) : n(o, e) > 0) && ((e = o), (r = i));
        return r;
      }
      function It(t, n) {
        const e = Ft(t, n);
        return e < 0 ? void 0 : e;
      }
      var Ut = Lt(Math.random);
      function Lt(t) {
        return function (n, e = 0, r = n.length) {
          let i = r - (e = +e);
          for (; i; ) {
            const r = (t() * i--) | 0,
              o = n[i + e];
            (n[i + e] = n[r + e]), (n[r + e] = o);
          }
          return n;
        };
      }
      function Yt(t, n) {
        let e = 0;
        if (void 0 === n) for (let n of t) (n = +n) && (e += n);
        else {
          let r = -1;
          for (let i of t) (i = +n(i, ++r, t)) && (e += i);
        }
        return e;
      }
      function Ht(t) {
        if (!(i = t.length)) return [];
        for (var n = -1, e = mt(t, Xt), r = new Array(e); ++n < e; )
          for (var i, o = -1, u = (r[n] = new Array(i)); ++o < i; )
            u[o] = t[o][n];
        return r;
      }
      function Xt(t) {
        return t.length;
      }
      function Vt() {
        return Ht(arguments);
      }
      function Gt(t, n) {
        if ("function" != typeof n)
          throw new TypeError("test is not a function");
        let e = -1;
        for (const r of t) if (!n(r, ++e, t)) return !1;
        return !0;
      }
      function Jt(t, n) {
        if ("function" != typeof n)
          throw new TypeError("test is not a function");
        let e = -1;
        for (const r of t) if (n(r, ++e, t)) return !0;
        return !1;
      }
      function Zt(t, n) {
        if ("function" != typeof n)
          throw new TypeError("test is not a function");
        const e = [];
        let r = -1;
        for (const i of t) n(i, ++r, t) && e.push(i);
        return e;
      }
      function Wt(t, n) {
        if ("function" != typeof t[Symbol.iterator])
          throw new TypeError("values is not iterable");
        if ("function" != typeof n)
          throw new TypeError("mapper is not a function");
        return Array.from(t, (e, r) => n(e, r, t));
      }
      function Kt(t, n, e) {
        if ("function" != typeof n)
          throw new TypeError("reducer is not a function");
        const r = t[Symbol.iterator]();
        let i,
          o,
          u = -1;
        if (arguments.length < 3) {
          if ((({ done: i, value: e } = r.next()), i)) return;
          ++u;
        }
        for (; ({ done: i, value: o } = r.next()), !i; ) e = n(e, o, ++u, t);
        return e;
      }
      function Qt(t) {
        if ("function" != typeof t[Symbol.iterator])
          throw new TypeError("values is not iterable");
        return Array.from(t).reverse();
      }
      function tn(t, ...n) {
        t = new R(t);
        for (const e of n) for (const n of e) t.delete(n);
        return t;
      }
      function nn(t, n) {
        const e = n[Symbol.iterator](),
          r = new R();
        for (const n of t) {
          if (r.has(n)) return !1;
          let t, i;
          for (; ({ value: t, done: i } = e.next()) && !i; ) {
            if (Object.is(n, t)) return !1;
            r.add(t);
          }
        }
        return !0;
      }
      function en(t, ...n) {
        (t = new R(t)), (n = n.map(rn));
        t: for (const e of t)
          for (const r of n)
            if (!r.has(e)) {
              t.delete(e);
              continue t;
            }
        return t;
      }
      function rn(t) {
        return t instanceof R ? t : new R(t);
      }
      function on(t, n) {
        const e = t[Symbol.iterator](),
          r = new Set();
        for (const t of n) {
          const n = un(t);
          if (r.has(n)) continue;
          let i, o;
          for (; ({ value: i, done: o } = e.next()); ) {
            if (o) return !1;
            const t = un(i);
            if ((r.add(t), Object.is(n, t))) break;
          }
        }
        return !0;
      }
      function un(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      function an(t, n) {
        return on(n, t);
      }
      function cn(...t) {
        const n = new R();
        for (const e of t) for (const t of e) n.add(t);
        return n;
      }
      var fn = function (t) {
        return t;
      };
      function sn(t) {
        return "translate(" + t + ",0)";
      }
      function ln(t) {
        return "translate(0," + t + ")";
      }
      function hn(t) {
        return (n) => +t(n);
      }
      function dn(t, n) {
        return (
          (n = Math.max(0, t.bandwidth() - 2 * n) / 2),
          t.round() && (n = Math.round(n)),
          (e) => +t(e) + n
        );
      }
      function pn() {
        return !this.__axis;
      }
      function gn(t, n) {
        var e = [],
          r = null,
          i = null,
          o = 6,
          u = 6,
          a = 3,
          c =
            "undefined" != typeof window && window.devicePixelRatio > 1
              ? 0
              : 0.5,
          f = 1 === t || 4 === t ? -1 : 1,
          s = 4 === t || 2 === t ? "x" : "y",
          l = 1 === t || 3 === t ? sn : ln;
        function h(h) {
          var d = null == r ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : r,
            p = null == i ? (n.tickFormat ? n.tickFormat.apply(n, e) : fn) : i,
            g = Math.max(o, 0) + a,
            y = n.range(),
            v = +y[0] + c,
            _ = +y[y.length - 1] + c,
            m = (n.bandwidth ? dn : hn)(n.copy(), c),
            b = h.selection ? h.selection() : h,
            x = b.selectAll(".domain").data([null]),
            w = b.selectAll(".tick").data(d, n).order(),
            M = w.exit(),
            A = w.enter().append("g").attr("class", "tick"),
            S = w.select("line"),
            T = w.select("text");
          (x = x.merge(
            x
              .enter()
              .insert("path", ".tick")
              .attr("class", "domain")
              .attr("stroke", "currentColor")
          )),
            (w = w.merge(A)),
            (S = S.merge(
              A.append("line")
                .attr("stroke", "currentColor")
                .attr(s + "2", f * o)
            )),
            (T = T.merge(
              A.append("text")
                .attr("fill", "currentColor")
                .attr(s, f * g)
                .attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")
            )),
            h !== b &&
              ((x = x.transition(h)),
              (w = w.transition(h)),
              (S = S.transition(h)),
              (T = T.transition(h)),
              (M = M.transition(h)
                .attr("opacity", 1e-6)
                .attr("transform", function (t) {
                  return isFinite((t = m(t)))
                    ? l(t + c)
                    : this.getAttribute("transform");
                })),
              A.attr("opacity", 1e-6).attr("transform", function (t) {
                var n = this.parentNode.__axis;
                return l((n && isFinite((n = n(t))) ? n : m(t)) + c);
              })),
            M.remove(),
            x.attr(
              "d",
              4 === t || 2 === t
                ? u
                  ? "M" + f * u + "," + v + "H" + c + "V" + _ + "H" + f * u
                  : "M" + c + "," + v + "V" + _
                : u
                ? "M" + v + "," + f * u + "V" + c + "H" + _ + "V" + f * u
                : "M" + v + "," + c + "H" + _
            ),
            w.attr("opacity", 1).attr("transform", function (t) {
              return l(m(t) + c);
            }),
            S.attr(s + "2", f * o),
            T.attr(s, f * g).text(p),
            b
              .filter(pn)
              .attr("fill", "none")
              .attr("font-size", 10)
              .attr("font-family", "sans-serif")
              .attr(
                "text-anchor",
                2 === t ? "start" : 4 === t ? "end" : "middle"
              ),
            b.each(function () {
              this.__axis = m;
            });
        }
        return (
          (h.scale = function (t) {
            return arguments.length ? ((n = t), h) : n;
          }),
          (h.ticks = function () {
            return (e = Array.from(arguments)), h;
          }),
          (h.tickArguments = function (t) {
            return arguments.length
              ? ((e = null == t ? [] : Array.from(t)), h)
              : e.slice();
          }),
          (h.tickValues = function (t) {
            return arguments.length
              ? ((r = null == t ? null : Array.from(t)), h)
              : r && r.slice();
          }),
          (h.tickFormat = function (t) {
            return arguments.length ? ((i = t), h) : i;
          }),
          (h.tickSize = function (t) {
            return arguments.length ? ((o = u = +t), h) : o;
          }),
          (h.tickSizeInner = function (t) {
            return arguments.length ? ((o = +t), h) : o;
          }),
          (h.tickSizeOuter = function (t) {
            return arguments.length ? ((u = +t), h) : u;
          }),
          (h.tickPadding = function (t) {
            return arguments.length ? ((a = +t), h) : a;
          }),
          (h.offset = function (t) {
            return arguments.length ? ((c = +t), h) : c;
          }),
          h
        );
      }
      function yn(t) {
        return gn(1, t);
      }
      function vn(t) {
        return gn(2, t);
      }
      function _n(t) {
        return gn(3, t);
      }
      function mn(t) {
        return gn(4, t);
      }
      var bn = { value: () => {} };
      function xn() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
          if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t))
            throw new Error("illegal type: " + t);
          r[t] = [];
        }
        return new wn(r);
      }
      function wn(t) {
        this._ = t;
      }
      function Mn(t, n) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              r = t.indexOf(".");
            if (
              (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
              t && !n.hasOwnProperty(t))
            )
              throw new Error("unknown type: " + t);
            return { type: t, name: e };
          });
      }
      function An(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r)
          if ((e = t[r]).name === n) return e.value;
      }
      function Sn(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
          if (t[r].name === n) {
            (t[r] = bn), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        return null != e && t.push({ name: n, value: e }), t;
      }
      wn.prototype = xn.prototype = {
        constructor: wn,
        on: function (t, n) {
          var e,
            r = this._,
            i = Mn(t + "", r),
            o = -1,
            u = i.length;
          if (!(arguments.length < 2)) {
            if (null != n && "function" != typeof n)
              throw new Error("invalid callback: " + n);
            for (; ++o < u; )
              if ((e = (t = i[o]).type)) r[e] = Sn(r[e], t.name, n);
              else if (null == n) for (e in r) r[e] = Sn(r[e], t.name, null);
            return this;
          }
          for (; ++o < u; )
            if ((e = (t = i[o]).type) && (e = An(r[e], t.name))) return e;
        },
        copy: function () {
          var t = {},
            n = this._;
          for (var e in n) t[e] = n[e].slice();
          return new wn(t);
        },
        call: function (t, n) {
          if ((e = arguments.length - 2) > 0)
            for (var e, r, i = new Array(e), o = 0; o < e; ++o)
              i[o] = arguments[o + 2];
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (o = 0, e = (r = this._[t]).length; o < e; ++o)
            r[o].value.apply(n, i);
        },
        apply: function (t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
            r[i].value.apply(n, e);
        },
      };
      var Tn = xn;
      function En() {}
      var Nn = function (t) {
        return null == t
          ? En
          : function () {
              return this.querySelector(t);
            };
      };
      function kn(t) {
        return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
      }
      function Cn() {
        return [];
      }
      function Pn(t) {
        return function (n) {
          return n.matches(t);
        };
      }
      var zn = Array.prototype.find;
      function $n() {
        return this.firstElementChild;
      }
      var On = Array.prototype.filter;
      function Dn() {
        return Array.from(this.children);
      }
      var Rn = function (t) {
        return new Array(t.length);
      };
      function jn(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      jn.prototype = {
        constructor: jn,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var qn = function (t) {
        return function () {
          return t;
        };
      };
      function Fn(t, n, e, r, i, o) {
        for (var u, a = 0, c = n.length, f = o.length; a < f; ++a)
          (u = n[a])
            ? ((u.__data__ = o[a]), (r[a] = u))
            : (e[a] = new jn(t, o[a]));
        for (; a < c; ++a) (u = n[a]) && (i[a] = u);
      }
      function Bn(t, n, e, r, i, o, u) {
        var a,
          c,
          f,
          s = new Map(),
          l = n.length,
          h = o.length,
          d = new Array(l);
        for (a = 0; a < l; ++a)
          (c = n[a]) &&
            ((d[a] = f = u.call(c, c.__data__, a, n) + ""),
            s.has(f) ? (i[a] = c) : s.set(f, c));
        for (a = 0; a < h; ++a)
          (f = u.call(t, o[a], a, o) + ""),
            (c = s.get(f))
              ? ((r[a] = c), (c.__data__ = o[a]), s.delete(f))
              : (e[a] = new jn(t, o[a]));
        for (a = 0; a < l; ++a) (c = n[a]) && s.get(d[a]) === c && (i[a] = c);
      }
      function In(t) {
        return t.__data__;
      }
      function Un(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      function Ln(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      var Yn = "http://www.w3.org/1999/xhtml",
        Hn = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: Yn,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        Xn = function (t) {
          var n = (t += ""),
            e = n.indexOf(":");
          return (
            e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            Hn.hasOwnProperty(n) ? { space: Hn[n], local: t } : t
          );
        };
      function Vn(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function Gn(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function Jn(t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      }
      function Zn(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      }
      function Wn(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }
      function Kn(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, e);
        };
      }
      var Qn = function (t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      };
      function te(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function ne(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      }
      function ee(t, n, e) {
        return function () {
          var r = n.apply(this, arguments);
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, e);
        };
      }
      function re(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          Qn(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
      function ie(t) {
        return function () {
          delete this[t];
        };
      }
      function oe(t, n) {
        return function () {
          this[t] = n;
        };
      }
      function ue(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : (this[t] = e);
        };
      }
      function ae(t) {
        return t.trim().split(/^|\s+/);
      }
      function ce(t) {
        return t.classList || new fe(t);
      }
      function fe(t) {
        (this._node = t), (this._names = ae(t.getAttribute("class") || ""));
      }
      function se(t, n) {
        for (var e = ce(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
      }
      function le(t, n) {
        for (var e = ce(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
      }
      function he(t) {
        return function () {
          se(this, t);
        };
      }
      function de(t) {
        return function () {
          le(this, t);
        };
      }
      function pe(t, n) {
        return function () {
          (n.apply(this, arguments) ? se : le)(this, t);
        };
      }
      fe.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      function ge() {
        this.textContent = "";
      }
      function ye(t) {
        return function () {
          this.textContent = t;
        };
      }
      function ve(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? "" : n;
        };
      }
      function _e() {
        this.innerHTML = "";
      }
      function me(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function be(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? "" : n;
        };
      }
      function xe() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function we() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function Me(t) {
        return function () {
          var n = this.ownerDocument,
            e = this.namespaceURI;
          return e === Yn && n.documentElement.namespaceURI === Yn
            ? n.createElement(t)
            : n.createElementNS(e, t);
        };
      }
      function Ae(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      var Se = function (t) {
        var n = Xn(t);
        return (n.local ? Ae : Me)(n);
      };
      function Te() {
        return null;
      }
      function Ee() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function Ne() {
        var t = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function ke() {
        var t = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function Ce(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              e = t.indexOf(".");
            return (
              e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
              { type: t, name: n }
            );
          });
      }
      function Pe(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
              (e = n[r]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++i] = e)
                  : this.removeEventListener(e.type, e.listener, e.options);
            ++i ? (n.length = i) : delete this.__on;
          }
        };
      }
      function ze(t, n, e) {
        return function () {
          var r,
            i = this.__on,
            o = (function (t) {
              return function (n) {
                t.call(this, n, this.__data__);
              };
            })(n);
          if (i)
            for (var u = 0, a = i.length; u < a; ++u)
              if ((r = i[u]).type === t.type && r.name === t.name)
                return (
                  this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = o),
                    (r.options = e)
                  ),
                  void (r.value = n)
                );
          this.addEventListener(t.type, o, e),
            (r = {
              type: t.type,
              name: t.name,
              value: n,
              listener: o,
              options: e,
            }),
            i ? i.push(r) : (this.__on = [r]);
        };
      }
      function $e(t, n, e) {
        var r = Qn(t),
          i = r.CustomEvent;
        "function" == typeof i
          ? (i = new i(n, e))
          : ((i = r.document.createEvent("Event")),
            e
              ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
              : i.initEvent(n, !1, !1)),
          t.dispatchEvent(i);
      }
      function Oe(t, n) {
        return function () {
          return $e(this, t, n);
        };
      }
      function De(t, n) {
        return function () {
          return $e(this, t, n.apply(this, arguments));
        };
      }
      var Re = [null];
      function je(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function qe() {
        return new je([[document.documentElement]], Re);
      }
      je.prototype = qe.prototype = {
        constructor: je,
        select: function (t) {
          "function" != typeof t && (t = Nn(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o,
                u,
                a = n[i],
                c = a.length,
                f = (r[i] = new Array(c)),
                s = 0;
              s < c;
              ++s
            )
              (o = a[s]) &&
                (u = t.call(o, o.__data__, s, a)) &&
                ("__data__" in o && (u.__data__ = o.__data__), (f[s] = u));
          return new je(r, this._parents);
        },
        selectAll: function (t) {
          var n;
          "function" == typeof t
            ? (t = (function (t) {
                return function () {
                  return kn(t.apply(this, arguments));
                };
              })(t))
            : (t =
                null == (n = t)
                  ? Cn
                  : function () {
                      return this.querySelectorAll(n);
                    });
          for (
            var e = this._groups, r = e.length, i = [], o = [], u = 0;
            u < r;
            ++u
          )
            for (var a, c = e[u], f = c.length, s = 0; s < f; ++s)
              (a = c[s]) && (i.push(t.call(a, a.__data__, s, c)), o.push(a));
          return new je(i, o);
        },
        selectChild: function (t) {
          return this.select(
            null == t
              ? $n
              : (function (t) {
                  return function () {
                    return zn.call(this.children, t);
                  };
                })("function" == typeof t ? t : Pn(t))
          );
        },
        selectChildren: function (t) {
          return this.selectAll(
            null == t
              ? Dn
              : (function (t) {
                  return function () {
                    return On.call(this.children, t);
                  };
                })("function" == typeof t ? t : Pn(t))
          );
        },
        filter: function (t) {
          var n;
          "function" != typeof t &&
            ((n = t),
            (t = function () {
              return this.matches(n);
            }));
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          )
            for (
              var u, a = e[o], c = a.length, f = (i[o] = []), s = 0;
              s < c;
              ++s
            )
              (u = a[s]) && t.call(u, u.__data__, s, a) && f.push(u);
          return new je(i, this._parents);
        },
        data: function (t, n) {
          if (!arguments.length) return Array.from(this, In);
          var e = n ? Bn : Fn,
            r = this._parents,
            i = this._groups;
          "function" != typeof t && (t = qn(t));
          for (
            var o = i.length,
              u = new Array(o),
              a = new Array(o),
              c = new Array(o),
              f = 0;
            f < o;
            ++f
          ) {
            var s = r[f],
              l = i[f],
              h = l.length,
              d = Un(t.call(s, s && s.__data__, f, r)),
              p = d.length,
              g = (a[f] = new Array(p)),
              y = (u[f] = new Array(p)),
              v = (c[f] = new Array(h));
            e(s, l, g, y, v, d, n);
            for (var _, m, b = 0, x = 0; b < p; ++b)
              if ((_ = g[b])) {
                for (b >= x && (x = b + 1); !(m = y[x]) && ++x < p; );
                _._next = m || null;
              }
          }
          return ((u = new je(u, r))._enter = a), (u._exit = c), u;
        },
        enter: function () {
          return new je(this._enter || this._groups.map(Rn), this._parents);
        },
        exit: function () {
          return new je(this._exit || this._groups.map(Rn), this._parents);
        },
        join: function (t, n, e) {
          var r = this.enter(),
            i = this,
            o = this.exit();
          return (
            "function" == typeof t
              ? (r = t(r)) && (r = r.selection())
              : (r = r.append(t + "")),
            null != n && (i = n(i)) && (i = i.selection()),
            null == e ? o.remove() : e(o),
            r && i ? r.merge(i).order() : i
          );
        },
        merge: function (t) {
          for (
            var n = t.selection ? t.selection() : t,
              e = this._groups,
              r = n._groups,
              i = e.length,
              o = r.length,
              u = Math.min(i, o),
              a = new Array(i),
              c = 0;
            c < u;
            ++c
          )
            for (
              var f,
                s = e[c],
                l = r[c],
                h = s.length,
                d = (a[c] = new Array(h)),
                p = 0;
              p < h;
              ++p
            )
              (f = s[p] || l[p]) && (d[p] = f);
          for (; c < i; ++c) a[c] = e[c];
          return new je(a, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
              (r = i[o]) &&
                (u &&
                  4 ^ r.compareDocumentPosition(u) &&
                  u.parentNode.insertBefore(r, u),
                (u = r));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = Ln);
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          ) {
            for (
              var u, a = e[o], c = a.length, f = (i[o] = new Array(c)), s = 0;
              s < c;
              ++s
            )
              (u = a[s]) && (f[s] = u);
            f.sort(n);
          }
          return new je(i, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
              var u = r[i];
              if (u) return u;
            }
          return null;
        },
        size: function () {
          let t = 0;
          for (const n of this) ++t;
          return t;
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
              (i = o[u]) && t.call(i, i.__data__, u, o);
          return this;
        },
        attr: function (t, n) {
          var e = Xn(t);
          if (arguments.length < 2) {
            var r = this.node();
            return e.local
              ? r.getAttributeNS(e.space, e.local)
              : r.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? Gn
                : Vn
              : "function" == typeof n
              ? e.local
                ? Kn
                : Wn
              : e.local
              ? Zn
              : Jn)(e, n)
          );
        },
        style: function (t, n, e) {
          return arguments.length > 1
            ? this.each(
                (null == n ? te : "function" == typeof n ? ee : ne)(
                  t,
                  n,
                  null == e ? "" : e
                )
              )
            : re(this.node(), t);
        },
        property: function (t, n) {
          return arguments.length > 1
            ? this.each(
                (null == n ? ie : "function" == typeof n ? ue : oe)(t, n)
              )
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = ae(t + "");
          if (arguments.length < 2) {
            for (var r = ce(this.node()), i = -1, o = e.length; ++i < o; )
              if (!r.contains(e[i])) return !1;
            return !0;
          }
          return this.each(("function" == typeof n ? pe : n ? he : de)(e, n));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? ge : ("function" == typeof t ? ve : ye)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? _e : ("function" == typeof t ? be : me)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(xe);
        },
        lower: function () {
          return this.each(we);
        },
        append: function (t) {
          var n = "function" == typeof t ? t : Se(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, n) {
          var e = "function" == typeof t ? t : Se(t),
            r = null == n ? Te : "function" == typeof n ? n : Nn(n);
          return this.select(function () {
            return this.insertBefore(
              e.apply(this, arguments),
              r.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(Ee);
        },
        clone: function (t) {
          return this.select(t ? ke : Ne);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: function (t, n, e) {
          var r,
            i,
            o = Ce(t + ""),
            u = o.length;
          if (!(arguments.length < 2)) {
            for (a = n ? ze : Pe, r = 0; r < u; ++r) this.each(a(o[r], n, e));
            return this;
          }
          var a = this.node().__on;
          if (a)
            for (var c, f = 0, s = a.length; f < s; ++f)
              for (r = 0, c = a[f]; r < u; ++r)
                if ((i = o[r]).type === c.type && i.name === c.name)
                  return c.value;
        },
        dispatch: function (t, n) {
          return this.each(("function" == typeof n ? De : Oe)(t, n));
        },
        [Symbol.iterator]: function* () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r, i = t[n], o = 0, u = i.length; o < u; ++o)
              (r = i[o]) && (yield r);
        },
      };
      var Fe = function (t) {
        return "string" == typeof t
          ? new je([[document.querySelector(t)]], [document.documentElement])
          : new je([[t]], Re);
      };
      const Be = { passive: !1 },
        Ie = { capture: !0, passive: !1 };
      function Ue(t) {
        t.stopImmediatePropagation();
      }
      var Le = function (t) {
          t.preventDefault(), t.stopImmediatePropagation();
        },
        Ye = function (t) {
          var n = t.document.documentElement,
            e = Fe(t).on("dragstart.drag", Le, Ie);
          "onselectstart" in n
            ? e.on("selectstart.drag", Le, Ie)
            : ((n.__noselect = n.style.MozUserSelect),
              (n.style.MozUserSelect = "none"));
        };
      function He(t, n) {
        var e = t.document.documentElement,
          r = Fe(t).on("dragstart.drag", null);
        n &&
          (r.on("click.drag", Le, Ie),
          setTimeout(function () {
            r.on("click.drag", null);
          }, 0)),
          "onselectstart" in e
            ? r.on("selectstart.drag", null)
            : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
      }
      var Xe = function (t, n, e) {
        (t.prototype = n.prototype = e), (e.constructor = t);
      };
      function Ve(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e;
      }
      function Ge() {}
      var Je = "\\s*([+-]?\\d+)\\s*",
        Ze = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        We = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        Ke = /^#([0-9a-f]{3,8})$/,
        Qe = new RegExp(`^rgb\\(${Je},${Je},${Je}\\)$`),
        tr = new RegExp(`^rgb\\(${We},${We},${We}\\)$`),
        nr = new RegExp(`^rgba\\(${Je},${Je},${Je},${Ze}\\)$`),
        er = new RegExp(`^rgba\\(${We},${We},${We},${Ze}\\)$`),
        rr = new RegExp(`^hsl\\(${Ze},${We},${We}\\)$`),
        ir = new RegExp(`^hsla\\(${Ze},${We},${We},${Ze}\\)$`),
        or = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function ur() {
        return this.rgb().formatHex();
      }
      function ar() {
        return this.rgb().formatRgb();
      }
      function cr(t) {
        var n, e;
        return (
          (t = (t + "").trim().toLowerCase()),
          (n = Ke.exec(t))
            ? ((e = n[1].length),
              (n = parseInt(n[1], 16)),
              6 === e
                ? fr(n)
                : 3 === e
                ? new dr(
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    ((15 & n) << 4) | (15 & n),
                    1
                  )
                : 8 === e
                ? sr(
                    (n >> 24) & 255,
                    (n >> 16) & 255,
                    (n >> 8) & 255,
                    (255 & n) / 255
                  )
                : 4 === e
                ? sr(
                    ((n >> 12) & 15) | ((n >> 8) & 240),
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    (((15 & n) << 4) | (15 & n)) / 255
                  )
                : null)
            : (n = Qe.exec(t))
            ? new dr(n[1], n[2], n[3], 1)
            : (n = tr.exec(t))
            ? new dr(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                1
              )
            : (n = nr.exec(t))
            ? sr(n[1], n[2], n[3], n[4])
            : (n = er.exec(t))
            ? sr(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                n[4]
              )
            : (n = rr.exec(t))
            ? mr(n[1], n[2] / 100, n[3] / 100, 1)
            : (n = ir.exec(t))
            ? mr(n[1], n[2] / 100, n[3] / 100, n[4])
            : or.hasOwnProperty(t)
            ? fr(or[t])
            : "transparent" === t
            ? new dr(NaN, NaN, NaN, 0)
            : null
        );
      }
      function fr(t) {
        return new dr((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function sr(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new dr(t, n, e, r);
      }
      function lr(t) {
        return (
          t instanceof Ge || (t = cr(t)),
          t ? new dr((t = t.rgb()).r, t.g, t.b, t.opacity) : new dr()
        );
      }
      function hr(t, n, e, r) {
        return 1 === arguments.length
          ? lr(t)
          : new dr(t, n, e, null == r ? 1 : r);
      }
      function dr(t, n, e, r) {
        (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
      }
      function pr() {
        return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
      }
      function gr() {
        const t = yr(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${vr(this.r)}, ${vr(this.g)}, ${vr(
          this.b
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function yr(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function vr(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function _r(t) {
        return ((t = vr(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function mr(t, n, e, r) {
        return (
          r <= 0
            ? (t = n = e = NaN)
            : e <= 0 || e >= 1
            ? (t = n = NaN)
            : n <= 0 && (t = NaN),
          new wr(t, n, e, r)
        );
      }
      function br(t) {
        if (t instanceof wr) return new wr(t.h, t.s, t.l, t.opacity);
        if ((t instanceof Ge || (t = cr(t)), !t)) return new wr();
        if (t instanceof wr) return t;
        var n = (t = t.rgb()).r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = Math.min(n, e, r),
          o = Math.max(n, e, r),
          u = NaN,
          a = o - i,
          c = (o + i) / 2;
        return (
          a
            ? ((u =
                n === o
                  ? (e - r) / a + 6 * (e < r)
                  : e === o
                  ? (r - n) / a + 2
                  : (n - e) / a + 4),
              (a /= c < 0.5 ? o + i : 2 - o - i),
              (u *= 60))
            : (a = c > 0 && c < 1 ? 0 : u),
          new wr(u, a, c, t.opacity)
        );
      }
      function xr(t, n, e, r) {
        return 1 === arguments.length
          ? br(t)
          : new wr(t, n, e, null == r ? 1 : r);
      }
      function wr(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
      }
      function Mr(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function Ar(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function Sr(t, n, e) {
        return (
          255 *
          (t < 60
            ? n + ((e - n) * t) / 60
            : t < 180
            ? e
            : t < 240
            ? n + ((e - n) * (240 - t)) / 60
            : n)
        );
      }
      function Tr(t, n, e, r, i) {
        var o = t * t,
          u = o * t;
        return (
          ((1 - 3 * t + 3 * o - u) * n +
            (4 - 6 * o + 3 * u) * e +
            (1 + 3 * t + 3 * o - 3 * u) * r +
            u * i) /
          6
        );
      }
      Xe(Ge, cr, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: ur,
        formatHex: ur,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return br(this).formatHsl();
        },
        formatRgb: ar,
        toString: ar,
      }),
        Xe(
          dr,
          hr,
          Ve(Ge, {
            brighter(t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new dr(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new dr(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new dr(
                vr(this.r),
                vr(this.g),
                vr(this.b),
                yr(this.opacity)
              );
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: pr,
            formatHex: pr,
            formatHex8: function () {
              return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r(
                255 * (isNaN(this.opacity) ? 1 : this.opacity)
              )}`;
            },
            formatRgb: gr,
            toString: gr,
          })
        ),
        Xe(
          wr,
          xr,
          Ve(Ge, {
            brighter(t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new wr(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new wr(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < 0.5 ? e : 1 - e) * n,
                i = 2 * e - r;
              return new dr(
                Sr(t >= 240 ? t - 240 : t + 120, i, r),
                Sr(t, i, r),
                Sr(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              );
            },
            clamp() {
              return new wr(
                Mr(this.h),
                Ar(this.s),
                Ar(this.l),
                yr(this.opacity)
              );
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              const t = yr(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${Mr(this.h)}, ${
                100 * Ar(this.s)
              }%, ${100 * Ar(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          })
        );
      var Er = function (t) {
          var n = t.length - 1;
          return function (e) {
            var r =
                e <= 0
                  ? (e = 0)
                  : e >= 1
                  ? ((e = 1), n - 1)
                  : Math.floor(e * n),
              i = t[r],
              o = t[r + 1],
              u = r > 0 ? t[r - 1] : 2 * i - o,
              a = r < n - 1 ? t[r + 2] : 2 * o - i;
            return Tr((e - r / n) * n, u, i, o, a);
          };
        },
        Nr = function (t) {
          var n = t.length;
          return function (e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
              i = t[(r + n - 1) % n],
              o = t[r % n],
              u = t[(r + 1) % n],
              a = t[(r + 2) % n];
            return Tr((e - r / n) * n, i, o, u, a);
          };
        },
        kr = (t) => () => t;
      function Cr(t, n) {
        return function (e) {
          return t + e * n;
        };
      }
      function Pr(t, n) {
        var e = n - t;
        return e
          ? Cr(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
          : kr(isNaN(t) ? n : t);
      }
      function zr(t) {
        return 1 == (t = +t)
          ? $r
          : function (n, e) {
              return e - n
                ? (function (t, n, e) {
                    return (
                      (t = Math.pow(t, e)),
                      (n = Math.pow(n, e) - t),
                      (e = 1 / e),
                      function (r) {
                        return Math.pow(t + r * n, e);
                      }
                    );
                  })(n, e, t)
                : kr(isNaN(n) ? e : n);
            };
      }
      function $r(t, n) {
        var e = n - t;
        return e ? Cr(t, e) : kr(isNaN(t) ? n : t);
      }
      var Or = (function t(n) {
        var e = zr(n);
        function r(t, n) {
          var r = e((t = hr(t)).r, (n = hr(n)).r),
            i = e(t.g, n.g),
            o = e(t.b, n.b),
            u = $r(t.opacity, n.opacity);
          return function (n) {
            return (
              (t.r = r(n)),
              (t.g = i(n)),
              (t.b = o(n)),
              (t.opacity = u(n)),
              t + ""
            );
          };
        }
        return (r.gamma = t), r;
      })(1);
      function Dr(t) {
        return function (n) {
          var e,
            r,
            i = n.length,
            o = new Array(i),
            u = new Array(i),
            a = new Array(i);
          for (e = 0; e < i; ++e)
            (r = hr(n[e])),
              (o[e] = r.r || 0),
              (u[e] = r.g || 0),
              (a[e] = r.b || 0);
          return (
            (o = t(o)),
            (u = t(u)),
            (a = t(a)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = u(t)), (r.b = a(t)), r + "";
            }
          );
        };
      }
      var Rr = Dr(Er),
        jr = Dr(Nr),
        qr = function (t, n) {
          n || (n = []);
          var e,
            r = t ? Math.min(n.length, t.length) : 0,
            i = n.slice();
          return function (o) {
            for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
            return i;
          };
        };
      function Fr(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
      var Br = function (t, n) {
        return (Fr(n) ? qr : Ir)(t, n);
      };
      function Ir(t, n) {
        var e,
          r = n ? n.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          u = new Array(r);
        for (e = 0; e < i; ++e) o[e] = Gr(t[e], n[e]);
        for (; e < r; ++e) u[e] = n[e];
        return function (t) {
          for (e = 0; e < i; ++e) u[e] = o[e](t);
          return u;
        };
      }
      var Ur = function (t, n) {
          var e = new Date();
          return (
            (t = +t),
            (n = +n),
            function (r) {
              return e.setTime(t * (1 - r) + n * r), e;
            }
          );
        },
        Lr = function (t, n) {
          return (
            (t = +t),
            (n = +n),
            function (e) {
              return t * (1 - e) + n * e;
            }
          );
        },
        Yr = function (t, n) {
          var e,
            r = {},
            i = {};
          for (e in ((null !== t && "object" == typeof t) || (t = {}),
          (null !== n && "object" == typeof n) || (n = {}),
          n))
            e in t ? (r[e] = Gr(t[e], n[e])) : (i[e] = n[e]);
          return function (t) {
            for (e in r) i[e] = r[e](t);
            return i;
          };
        },
        Hr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Xr = new RegExp(Hr.source, "g");
      var Vr = function (t, n) {
          var e,
            r,
            i,
            o = (Hr.lastIndex = Xr.lastIndex = 0),
            u = -1,
            a = [],
            c = [];
          for (t += "", n += ""; (e = Hr.exec(t)) && (r = Xr.exec(n)); )
            (i = r.index) > o &&
              ((i = n.slice(o, i)), a[u] ? (a[u] += i) : (a[++u] = i)),
              (e = e[0]) === (r = r[0])
                ? a[u]
                  ? (a[u] += r)
                  : (a[++u] = r)
                : ((a[++u] = null), c.push({ i: u, x: Lr(e, r) })),
              (o = Xr.lastIndex);
          return (
            o < n.length &&
              ((i = n.slice(o)), a[u] ? (a[u] += i) : (a[++u] = i)),
            a.length < 2
              ? c[0]
                ? (function (t) {
                    return function (n) {
                      return t(n) + "";
                    };
                  })(c[0].x)
                : (function (t) {
                    return function () {
                      return t;
                    };
                  })(n)
              : ((n = c.length),
                function (t) {
                  for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                  return a.join("");
                })
          );
        },
        Gr = function (t, n) {
          var e,
            r = typeof n;
          return null == n || "boolean" === r
            ? kr(n)
            : ("number" === r
                ? Lr
                : "string" === r
                ? (e = cr(n))
                  ? ((n = e), Or)
                  : Vr
                : n instanceof cr
                ? Or
                : n instanceof Date
                ? Ur
                : Fr(n)
                ? qr
                : Array.isArray(n)
                ? Ir
                : ("function" != typeof n.valueOf &&
                    "function" != typeof n.toString) ||
                  isNaN(n)
                ? Yr
                : Lr)(t, n);
        };
      function Jr() {}
      var Zr = function (t) {
        return null == t
          ? Jr
          : function () {
              return this.querySelector(t);
            };
      };
      function Wr(t) {
        return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
      }
      function Kr() {
        return [];
      }
      function Qr(t) {
        return function (n) {
          return n.matches(t);
        };
      }
      var ti = Array.prototype.find;
      function ni() {
        return this.firstElementChild;
      }
      var ei = Array.prototype.filter;
      function ri() {
        return Array.from(this.children);
      }
      var ii = function (t) {
        return new Array(t.length);
      };
      function oi(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      oi.prototype = {
        constructor: oi,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var ui = function (t) {
        return function () {
          return t;
        };
      };
      function ai(t, n, e, r, i, o) {
        for (var u, a = 0, c = n.length, f = o.length; a < f; ++a)
          (u = n[a])
            ? ((u.__data__ = o[a]), (r[a] = u))
            : (e[a] = new oi(t, o[a]));
        for (; a < c; ++a) (u = n[a]) && (i[a] = u);
      }
      function ci(t, n, e, r, i, o, u) {
        var a,
          c,
          f,
          s = new Map(),
          l = n.length,
          h = o.length,
          d = new Array(l);
        for (a = 0; a < l; ++a)
          (c = n[a]) &&
            ((d[a] = f = u.call(c, c.__data__, a, n) + ""),
            s.has(f) ? (i[a] = c) : s.set(f, c));
        for (a = 0; a < h; ++a)
          (f = u.call(t, o[a], a, o) + ""),
            (c = s.get(f))
              ? ((r[a] = c), (c.__data__ = o[a]), s.delete(f))
              : (e[a] = new oi(t, o[a]));
        for (a = 0; a < l; ++a) (c = n[a]) && s.get(d[a]) === c && (i[a] = c);
      }
      function fi(t) {
        return t.__data__;
      }
      function si(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      function li(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      var hi = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        di = function (t) {
          var n = (t += ""),
            e = n.indexOf(":");
          return (
            e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            hi.hasOwnProperty(n) ? { space: hi[n], local: t } : t
          );
        };
      function pi(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function gi(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function yi(t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      }
      function vi(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      }
      function _i(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }
      function mi(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, e);
        };
      }
      var bi = function (t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      };
      function xi(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function wi(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      }
      function Mi(t, n, e) {
        return function () {
          var r = n.apply(this, arguments);
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, e);
        };
      }
      function Ai(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          bi(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
      function Si(t) {
        return function () {
          delete this[t];
        };
      }
      function Ti(t, n) {
        return function () {
          this[t] = n;
        };
      }
      function Ei(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : (this[t] = e);
        };
      }
      function Ni(t) {
        return t.trim().split(/^|\s+/);
      }
      function ki(t) {
        return t.classList || new Ci(t);
      }
      function Ci(t) {
        (this._node = t), (this._names = Ni(t.getAttribute("class") || ""));
      }
      function Pi(t, n) {
        for (var e = ki(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
      }
      function zi(t, n) {
        for (var e = ki(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
      }
      function $i(t) {
        return function () {
          Pi(this, t);
        };
      }
      function Oi(t) {
        return function () {
          zi(this, t);
        };
      }
      function Di(t, n) {
        return function () {
          (n.apply(this, arguments) ? Pi : zi)(this, t);
        };
      }
      Ci.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      function Ri() {
        this.textContent = "";
      }
      function ji(t) {
        return function () {
          this.textContent = t;
        };
      }
      function qi(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? "" : n;
        };
      }
      function Fi() {
        this.innerHTML = "";
      }
      function Bi(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function Ii(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? "" : n;
        };
      }
      function Ui() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function Li() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function Yi(t) {
        return function () {
          var n = this.ownerDocument,
            e = this.namespaceURI;
          return "http://www.w3.org/1999/xhtml" === e &&
            "http://www.w3.org/1999/xhtml" === n.documentElement.namespaceURI
            ? n.createElement(t)
            : n.createElementNS(e, t);
        };
      }
      function Hi(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      var Xi = function (t) {
        var n = di(t);
        return (n.local ? Hi : Yi)(n);
      };
      function Vi() {
        return null;
      }
      function Gi() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function Ji() {
        var t = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function Zi() {
        var t = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function Wi(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              e = t.indexOf(".");
            return (
              e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
              { type: t, name: n }
            );
          });
      }
      function Ki(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
              (e = n[r]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++i] = e)
                  : this.removeEventListener(e.type, e.listener, e.options);
            ++i ? (n.length = i) : delete this.__on;
          }
        };
      }
      function Qi(t, n, e) {
        return function () {
          var r,
            i = this.__on,
            o = (function (t) {
              return function (n) {
                t.call(this, n, this.__data__);
              };
            })(n);
          if (i)
            for (var u = 0, a = i.length; u < a; ++u)
              if ((r = i[u]).type === t.type && r.name === t.name)
                return (
                  this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = o),
                    (r.options = e)
                  ),
                  void (r.value = n)
                );
          this.addEventListener(t.type, o, e),
            (r = {
              type: t.type,
              name: t.name,
              value: n,
              listener: o,
              options: e,
            }),
            i ? i.push(r) : (this.__on = [r]);
        };
      }
      function to(t, n, e) {
        var r = bi(t),
          i = r.CustomEvent;
        "function" == typeof i
          ? (i = new i(n, e))
          : ((i = r.document.createEvent("Event")),
            e
              ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
              : i.initEvent(n, !1, !1)),
          t.dispatchEvent(i);
      }
      function no(t, n) {
        return function () {
          return to(this, t, n);
        };
      }
      function eo(t, n) {
        return function () {
          return to(this, t, n.apply(this, arguments));
        };
      }
      var ro = [null];
      function io(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function oo() {
        return new io([[document.documentElement]], ro);
      }
      io.prototype = oo.prototype = {
        constructor: io,
        select: function (t) {
          "function" != typeof t && (t = Zr(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o,
                u,
                a = n[i],
                c = a.length,
                f = (r[i] = new Array(c)),
                s = 0;
              s < c;
              ++s
            )
              (o = a[s]) &&
                (u = t.call(o, o.__data__, s, a)) &&
                ("__data__" in o && (u.__data__ = o.__data__), (f[s] = u));
          return new io(r, this._parents);
        },
        selectAll: function (t) {
          var n;
          "function" == typeof t
            ? (t = (function (t) {
                return function () {
                  return Wr(t.apply(this, arguments));
                };
              })(t))
            : (t =
                null == (n = t)
                  ? Kr
                  : function () {
                      return this.querySelectorAll(n);
                    });
          for (
            var e = this._groups, r = e.length, i = [], o = [], u = 0;
            u < r;
            ++u
          )
            for (var a, c = e[u], f = c.length, s = 0; s < f; ++s)
              (a = c[s]) && (i.push(t.call(a, a.__data__, s, c)), o.push(a));
          return new io(i, o);
        },
        selectChild: function (t) {
          return this.select(
            null == t
              ? ni
              : (function (t) {
                  return function () {
                    return ti.call(this.children, t);
                  };
                })("function" == typeof t ? t : Qr(t))
          );
        },
        selectChildren: function (t) {
          return this.selectAll(
            null == t
              ? ri
              : (function (t) {
                  return function () {
                    return ei.call(this.children, t);
                  };
                })("function" == typeof t ? t : Qr(t))
          );
        },
        filter: function (t) {
          var n;
          "function" != typeof t &&
            ((n = t),
            (t = function () {
              return this.matches(n);
            }));
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          )
            for (
              var u, a = e[o], c = a.length, f = (i[o] = []), s = 0;
              s < c;
              ++s
            )
              (u = a[s]) && t.call(u, u.__data__, s, a) && f.push(u);
          return new io(i, this._parents);
        },
        data: function (t, n) {
          if (!arguments.length) return Array.from(this, fi);
          var e = n ? ci : ai,
            r = this._parents,
            i = this._groups;
          "function" != typeof t && (t = ui(t));
          for (
            var o = i.length,
              u = new Array(o),
              a = new Array(o),
              c = new Array(o),
              f = 0;
            f < o;
            ++f
          ) {
            var s = r[f],
              l = i[f],
              h = l.length,
              d = si(t.call(s, s && s.__data__, f, r)),
              p = d.length,
              g = (a[f] = new Array(p)),
              y = (u[f] = new Array(p)),
              v = (c[f] = new Array(h));
            e(s, l, g, y, v, d, n);
            for (var _, m, b = 0, x = 0; b < p; ++b)
              if ((_ = g[b])) {
                for (b >= x && (x = b + 1); !(m = y[x]) && ++x < p; );
                _._next = m || null;
              }
          }
          return ((u = new io(u, r))._enter = a), (u._exit = c), u;
        },
        enter: function () {
          return new io(this._enter || this._groups.map(ii), this._parents);
        },
        exit: function () {
          return new io(this._exit || this._groups.map(ii), this._parents);
        },
        join: function (t, n, e) {
          var r = this.enter(),
            i = this,
            o = this.exit();
          return (
            "function" == typeof t
              ? (r = t(r)) && (r = r.selection())
              : (r = r.append(t + "")),
            null != n && (i = n(i)) && (i = i.selection()),
            null == e ? o.remove() : e(o),
            r && i ? r.merge(i).order() : i
          );
        },
        merge: function (t) {
          for (
            var n = t.selection ? t.selection() : t,
              e = this._groups,
              r = n._groups,
              i = e.length,
              o = r.length,
              u = Math.min(i, o),
              a = new Array(i),
              c = 0;
            c < u;
            ++c
          )
            for (
              var f,
                s = e[c],
                l = r[c],
                h = s.length,
                d = (a[c] = new Array(h)),
                p = 0;
              p < h;
              ++p
            )
              (f = s[p] || l[p]) && (d[p] = f);
          for (; c < i; ++c) a[c] = e[c];
          return new io(a, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
              (r = i[o]) &&
                (u &&
                  4 ^ r.compareDocumentPosition(u) &&
                  u.parentNode.insertBefore(r, u),
                (u = r));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = li);
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          ) {
            for (
              var u, a = e[o], c = a.length, f = (i[o] = new Array(c)), s = 0;
              s < c;
              ++s
            )
              (u = a[s]) && (f[s] = u);
            f.sort(n);
          }
          return new io(i, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
              var u = r[i];
              if (u) return u;
            }
          return null;
        },
        size: function () {
          let t = 0;
          for (const n of this) ++t;
          return t;
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
              (i = o[u]) && t.call(i, i.__data__, u, o);
          return this;
        },
        attr: function (t, n) {
          var e = di(t);
          if (arguments.length < 2) {
            var r = this.node();
            return e.local
              ? r.getAttributeNS(e.space, e.local)
              : r.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? gi
                : pi
              : "function" == typeof n
              ? e.local
                ? mi
                : _i
              : e.local
              ? vi
              : yi)(e, n)
          );
        },
        style: function (t, n, e) {
          return arguments.length > 1
            ? this.each(
                (null == n ? xi : "function" == typeof n ? Mi : wi)(
                  t,
                  n,
                  null == e ? "" : e
                )
              )
            : Ai(this.node(), t);
        },
        property: function (t, n) {
          return arguments.length > 1
            ? this.each(
                (null == n ? Si : "function" == typeof n ? Ei : Ti)(t, n)
              )
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = Ni(t + "");
          if (arguments.length < 2) {
            for (var r = ki(this.node()), i = -1, o = e.length; ++i < o; )
              if (!r.contains(e[i])) return !1;
            return !0;
          }
          return this.each(("function" == typeof n ? Di : n ? $i : Oi)(e, n));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? Ri : ("function" == typeof t ? qi : ji)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? Fi : ("function" == typeof t ? Ii : Bi)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(Ui);
        },
        lower: function () {
          return this.each(Li);
        },
        append: function (t) {
          var n = "function" == typeof t ? t : Xi(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, n) {
          var e = "function" == typeof t ? t : Xi(t),
            r = null == n ? Vi : "function" == typeof n ? n : Zr(n);
          return this.select(function () {
            return this.insertBefore(
              e.apply(this, arguments),
              r.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(Gi);
        },
        clone: function (t) {
          return this.select(t ? Zi : Ji);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: function (t, n, e) {
          var r,
            i,
            o = Wi(t + ""),
            u = o.length;
          if (!(arguments.length < 2)) {
            for (a = n ? Qi : Ki, r = 0; r < u; ++r) this.each(a(o[r], n, e));
            return this;
          }
          var a = this.node().__on;
          if (a)
            for (var c, f = 0, s = a.length; f < s; ++f)
              for (r = 0, c = a[f]; r < u; ++r)
                if ((i = o[r]).type === c.type && i.name === c.name)
                  return c.value;
        },
        dispatch: function (t, n) {
          return this.each(("function" == typeof n ? eo : no)(t, n));
        },
        [Symbol.iterator]: function* () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r, i = t[n], o = 0, u = i.length; o < u; ++o)
              (r = i[o]) && (yield r);
        },
      };
      var uo = function (t) {
          return "string" == typeof t
            ? new io([[document.querySelector(t)]], [document.documentElement])
            : new io([[t]], ro);
        },
        ao = function (t, n) {
          if (
            ((t = (function (t) {
              let n;
              for (; (n = t.sourceEvent); ) t = n;
              return t;
            })(t)),
            void 0 === n && (n = t.currentTarget),
            n)
          ) {
            var e = n.ownerSVGElement || n;
            if (e.createSVGPoint) {
              var r = e.createSVGPoint();
              return (
                (r.x = t.clientX),
                (r.y = t.clientY),
                [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
              );
            }
            if (n.getBoundingClientRect) {
              var i = n.getBoundingClientRect();
              return [
                t.clientX - i.left - n.clientLeft,
                t.clientY - i.top - n.clientTop,
              ];
            }
          }
          return [t.pageX, t.pageY];
        };
      function co() {}
      var fo = function (t) {
          return null == t
            ? co
            : function () {
                return this.querySelector(t);
              };
        },
        so = function (t) {
          return "object" == typeof t && "length" in t ? t : Array.from(t);
        };
      function lo() {
        return [];
      }
      var ho = function (t) {
        return null == t
          ? lo
          : function () {
              return this.querySelectorAll(t);
            };
      };
      var po = function (t) {
        return function () {
          return this.matches(t);
        };
      };
      function go(t) {
        return function (n) {
          return n.matches(t);
        };
      }
      var yo = Array.prototype.find;
      function vo() {
        return this.firstElementChild;
      }
      var _o = Array.prototype.filter;
      function mo() {
        return this.children;
      }
      var bo = function (t) {
        return new Array(t.length);
      };
      function xo(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      xo.prototype = {
        constructor: xo,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var wo = function (t) {
        return function () {
          return t;
        };
      };
      function Mo(t, n, e, r, i, o) {
        for (var u, a = 0, c = n.length, f = o.length; a < f; ++a)
          (u = n[a])
            ? ((u.__data__ = o[a]), (r[a] = u))
            : (e[a] = new xo(t, o[a]));
        for (; a < c; ++a) (u = n[a]) && (i[a] = u);
      }
      function Ao(t, n, e, r, i, o, u) {
        var a,
          c,
          f,
          s = new Map(),
          l = n.length,
          h = o.length,
          d = new Array(l);
        for (a = 0; a < l; ++a)
          (c = n[a]) &&
            ((d[a] = f = u.call(c, c.__data__, a, n) + ""),
            s.has(f) ? (i[a] = c) : s.set(f, c));
        for (a = 0; a < h; ++a)
          (f = u.call(t, o[a], a, o) + ""),
            (c = s.get(f))
              ? ((r[a] = c), (c.__data__ = o[a]), s.delete(f))
              : (e[a] = new xo(t, o[a]));
        for (a = 0; a < l; ++a) (c = n[a]) && s.get(d[a]) === c && (i[a] = c);
      }
      function So(t) {
        return t.__data__;
      }
      function To(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      var Eo = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        No = function (t) {
          var n = (t += ""),
            e = n.indexOf(":");
          return (
            e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            Eo.hasOwnProperty(n) ? { space: Eo[n], local: t } : t
          );
        };
      function ko(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function Co(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function Po(t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      }
      function zo(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      }
      function $o(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }
      function Oo(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, e);
        };
      }
      var Do = function (t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      };
      function Ro(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function jo(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      }
      function qo(t, n, e) {
        return function () {
          var r = n.apply(this, arguments);
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, e);
        };
      }
      function Fo(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          Do(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
      function Bo(t) {
        return function () {
          delete this[t];
        };
      }
      function Io(t, n) {
        return function () {
          this[t] = n;
        };
      }
      function Uo(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : (this[t] = e);
        };
      }
      function Lo(t) {
        return t.trim().split(/^|\s+/);
      }
      function Yo(t) {
        return t.classList || new Ho(t);
      }
      function Ho(t) {
        (this._node = t), (this._names = Lo(t.getAttribute("class") || ""));
      }
      function Xo(t, n) {
        for (var e = Yo(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
      }
      function Vo(t, n) {
        for (var e = Yo(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
      }
      function Go(t) {
        return function () {
          Xo(this, t);
        };
      }
      function Jo(t) {
        return function () {
          Vo(this, t);
        };
      }
      function Zo(t, n) {
        return function () {
          (n.apply(this, arguments) ? Xo : Vo)(this, t);
        };
      }
      Ho.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      function Wo() {
        this.textContent = "";
      }
      function Ko(t) {
        return function () {
          this.textContent = t;
        };
      }
      function Qo(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? "" : n;
        };
      }
      function tu() {
        this.innerHTML = "";
      }
      function nu(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function eu(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? "" : n;
        };
      }
      function ru() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function iu() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function ou(t) {
        return function () {
          var n = this.ownerDocument,
            e = this.namespaceURI;
          return "http://www.w3.org/1999/xhtml" === e &&
            "http://www.w3.org/1999/xhtml" === n.documentElement.namespaceURI
            ? n.createElement(t)
            : n.createElementNS(e, t);
        };
      }
      function uu(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      var au = function (t) {
        var n = No(t);
        return (n.local ? uu : ou)(n);
      };
      function cu() {
        return null;
      }
      function fu() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function su() {
        var t = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function lu() {
        var t = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function hu(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              e = t.indexOf(".");
            return (
              e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
              { type: t, name: n }
            );
          });
      }
      function du(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
              (e = n[r]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++i] = e)
                  : this.removeEventListener(e.type, e.listener, e.options);
            ++i ? (n.length = i) : delete this.__on;
          }
        };
      }
      function pu(t, n, e) {
        return function () {
          var r,
            i = this.__on,
            o = (function (t) {
              return function (n) {
                t.call(this, n, this.__data__);
              };
            })(n);
          if (i)
            for (var u = 0, a = i.length; u < a; ++u)
              if ((r = i[u]).type === t.type && r.name === t.name)
                return (
                  this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = o),
                    (r.options = e)
                  ),
                  void (r.value = n)
                );
          this.addEventListener(t.type, o, e),
            (r = {
              type: t.type,
              name: t.name,
              value: n,
              listener: o,
              options: e,
            }),
            i ? i.push(r) : (this.__on = [r]);
        };
      }
      function gu(t, n, e) {
        var r = Do(t),
          i = r.CustomEvent;
        "function" == typeof i
          ? (i = new i(n, e))
          : ((i = r.document.createEvent("Event")),
            e
              ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
              : i.initEvent(n, !1, !1)),
          t.dispatchEvent(i);
      }
      function yu(t, n) {
        return function () {
          return gu(this, t, n);
        };
      }
      function vu(t, n) {
        return function () {
          return gu(this, t, n.apply(this, arguments));
        };
      }
      var _u = [null];
      function mu(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function bu() {
        return new mu([[document.documentElement]], _u);
      }
      mu.prototype = bu.prototype = {
        constructor: mu,
        select: function (t) {
          "function" != typeof t && (t = fo(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o,
                u,
                a = n[i],
                c = a.length,
                f = (r[i] = new Array(c)),
                s = 0;
              s < c;
              ++s
            )
              (o = a[s]) &&
                (u = t.call(o, o.__data__, s, a)) &&
                ("__data__" in o && (u.__data__ = o.__data__), (f[s] = u));
          return new mu(r, this._parents);
        },
        selectAll: function (t) {
          t =
            "function" == typeof t
              ? (function (t) {
                  return function () {
                    var n = t.apply(this, arguments);
                    return null == n ? [] : so(n);
                  };
                })(t)
              : ho(t);
          for (
            var n = this._groups, e = n.length, r = [], i = [], o = 0;
            o < e;
            ++o
          )
            for (var u, a = n[o], c = a.length, f = 0; f < c; ++f)
              (u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
          return new mu(r, i);
        },
        selectChild: function (t) {
          return this.select(
            null == t
              ? vo
              : (function (t) {
                  return function () {
                    return yo.call(this.children, t);
                  };
                })("function" == typeof t ? t : go(t))
          );
        },
        selectChildren: function (t) {
          return this.selectAll(
            null == t
              ? mo
              : (function (t) {
                  return function () {
                    return _o.call(this.children, t);
                  };
                })("function" == typeof t ? t : go(t))
          );
        },
        filter: function (t) {
          "function" != typeof t && (t = po(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o, u = n[i], a = u.length, c = (r[i] = []), f = 0;
              f < a;
              ++f
            )
              (o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
          return new mu(r, this._parents);
        },
        data: function (t, n) {
          if (!arguments.length) return Array.from(this, So);
          var e = n ? Ao : Mo,
            r = this._parents,
            i = this._groups;
          "function" != typeof t && (t = wo(t));
          for (
            var o = i.length,
              u = new Array(o),
              a = new Array(o),
              c = new Array(o),
              f = 0;
            f < o;
            ++f
          ) {
            var s = r[f],
              l = i[f],
              h = l.length,
              d = so(t.call(s, s && s.__data__, f, r)),
              p = d.length,
              g = (a[f] = new Array(p)),
              y = (u[f] = new Array(p)),
              v = (c[f] = new Array(h));
            e(s, l, g, y, v, d, n);
            for (var _, m, b = 0, x = 0; b < p; ++b)
              if ((_ = g[b])) {
                for (b >= x && (x = b + 1); !(m = y[x]) && ++x < p; );
                _._next = m || null;
              }
          }
          return ((u = new mu(u, r))._enter = a), (u._exit = c), u;
        },
        enter: function () {
          return new mu(this._enter || this._groups.map(bo), this._parents);
        },
        exit: function () {
          return new mu(this._exit || this._groups.map(bo), this._parents);
        },
        join: function (t, n, e) {
          var r = this.enter(),
            i = this,
            o = this.exit();
          return (
            (r = "function" == typeof t ? t(r) : r.append(t + "")),
            null != n && (i = n(i)),
            null == e ? o.remove() : e(o),
            r && i ? r.merge(i).order() : i
          );
        },
        merge: function (t) {
          if (!(t instanceof mu)) throw new Error("invalid merge");
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              o = Math.min(r, i),
              u = new Array(r),
              a = 0;
            a < o;
            ++a
          )
            for (
              var c,
                f = n[a],
                s = e[a],
                l = f.length,
                h = (u[a] = new Array(l)),
                d = 0;
              d < l;
              ++d
            )
              (c = f[d] || s[d]) && (h[d] = c);
          for (; a < r; ++a) u[a] = n[a];
          return new mu(u, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
              (r = i[o]) &&
                (u &&
                  4 ^ r.compareDocumentPosition(u) &&
                  u.parentNode.insertBefore(r, u),
                (u = r));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = To);
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          ) {
            for (
              var u, a = e[o], c = a.length, f = (i[o] = new Array(c)), s = 0;
              s < c;
              ++s
            )
              (u = a[s]) && (f[s] = u);
            f.sort(n);
          }
          return new mu(i, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
              var u = r[i];
              if (u) return u;
            }
          return null;
        },
        size: function () {
          let t = 0;
          for (const n of this) ++t;
          return t;
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
              (i = o[u]) && t.call(i, i.__data__, u, o);
          return this;
        },
        attr: function (t, n) {
          var e = No(t);
          if (arguments.length < 2) {
            var r = this.node();
            return e.local
              ? r.getAttributeNS(e.space, e.local)
              : r.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? Co
                : ko
              : "function" == typeof n
              ? e.local
                ? Oo
                : $o
              : e.local
              ? zo
              : Po)(e, n)
          );
        },
        style: function (t, n, e) {
          return arguments.length > 1
            ? this.each(
                (null == n ? Ro : "function" == typeof n ? qo : jo)(
                  t,
                  n,
                  null == e ? "" : e
                )
              )
            : Fo(this.node(), t);
        },
        property: function (t, n) {
          return arguments.length > 1
            ? this.each(
                (null == n ? Bo : "function" == typeof n ? Uo : Io)(t, n)
              )
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = Lo(t + "");
          if (arguments.length < 2) {
            for (var r = Yo(this.node()), i = -1, o = e.length; ++i < o; )
              if (!r.contains(e[i])) return !1;
            return !0;
          }
          return this.each(("function" == typeof n ? Zo : n ? Go : Jo)(e, n));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? Wo : ("function" == typeof t ? Qo : Ko)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? tu : ("function" == typeof t ? eu : nu)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(ru);
        },
        lower: function () {
          return this.each(iu);
        },
        append: function (t) {
          var n = "function" == typeof t ? t : au(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, n) {
          var e = "function" == typeof t ? t : au(t),
            r = null == n ? cu : "function" == typeof n ? n : fo(n);
          return this.select(function () {
            return this.insertBefore(
              e.apply(this, arguments),
              r.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(fu);
        },
        clone: function (t) {
          return this.select(t ? lu : su);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: function (t, n, e) {
          var r,
            i,
            o = hu(t + ""),
            u = o.length;
          if (!(arguments.length < 2)) {
            for (a = n ? pu : du, r = 0; r < u; ++r) this.each(a(o[r], n, e));
            return this;
          }
          var a = this.node().__on;
          if (a)
            for (var c, f = 0, s = a.length; f < s; ++f)
              for (r = 0, c = a[f]; r < u; ++r)
                if ((i = o[r]).type === c.type && i.name === c.name)
                  return c.value;
        },
        dispatch: function (t, n) {
          return this.each(("function" == typeof n ? vu : yu)(t, n));
        },
        [Symbol.iterator]: function* () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r, i = t[n], o = 0, u = i.length; o < u; ++o)
              (r = i[o]) && (yield r);
        },
      };
      var xu,
        wu,
        Mu = bu,
        Au = 0,
        Su = 0,
        Tu = 0,
        Eu = 0,
        Nu = 0,
        ku = 0,
        Cu =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        Pu =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function zu() {
        return Nu || (Pu($u), (Nu = Cu.now() + ku));
      }
      function $u() {
        Nu = 0;
      }
      function Ou() {
        this._call = this._time = this._next = null;
      }
      function Du(t, n, e) {
        var r = new Ou();
        return r.restart(t, n, e), r;
      }
      function Ru() {
        zu(), ++Au;
        for (var t, n = xu; n; )
          (t = Nu - n._time) >= 0 && n._call.call(void 0, t), (n = n._next);
        --Au;
      }
      function ju() {
        (Nu = (Eu = Cu.now()) + ku), (Au = Su = 0);
        try {
          Ru();
        } finally {
          (Au = 0),
            (function () {
              var t,
                n,
                e = xu,
                r = 1 / 0;
              for (; e; )
                e._call
                  ? (r > e._time && (r = e._time), (t = e), (e = e._next))
                  : ((n = e._next),
                    (e._next = null),
                    (e = t ? (t._next = n) : (xu = n)));
              (wu = t), Fu(r);
            })(),
            (Nu = 0);
        }
      }
      function qu() {
        var t = Cu.now(),
          n = t - Eu;
        n > 1e3 && ((ku -= n), (Eu = t));
      }
      function Fu(t) {
        Au ||
          (Su && (Su = clearTimeout(Su)),
          t - Nu > 24
            ? (t < 1 / 0 && (Su = setTimeout(ju, t - Cu.now() - ku)),
              Tu && (Tu = clearInterval(Tu)))
            : (Tu || ((Eu = Cu.now()), (Tu = setInterval(qu, 1e3))),
              (Au = 1),
              Pu(ju)));
      }
      Ou.prototype = Du.prototype = {
        constructor: Ou,
        restart: function (t, n, e) {
          if ("function" != typeof t)
            throw new TypeError("callback is not a function");
          (e = (null == e ? zu() : +e) + (null == n ? 0 : +n)),
            this._next ||
              wu === this ||
              (wu ? (wu._next = this) : (xu = this), (wu = this)),
            (this._call = t),
            (this._time = e),
            Fu();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), Fu());
        },
      };
      var Bu = function (t, n, e) {
          var r = new Ou();
          return (
            (n = null == n ? 0 : +n),
            r.restart(
              (e) => {
                r.stop(), t(e + n);
              },
              n,
              e
            ),
            r
          );
        },
        Iu = Tn("start", "end", "cancel", "interrupt"),
        Uu = [],
        Lu = function (t, n, e, r, i, o) {
          var u = t.__transition;
          if (u) {
            if (e in u) return;
          } else t.__transition = {};
          !(function (t, n, e) {
            var r,
              i = t.__transition;
            function o(c) {
              var f, s, l, h;
              if (1 !== e.state) return a();
              for (f in i)
                if ((h = i[f]).name === e.name) {
                  if (3 === h.state) return Bu(o);
                  4 === h.state
                    ? ((h.state = 6),
                      h.timer.stop(),
                      h.on.call("interrupt", t, t.__data__, h.index, h.group),
                      delete i[f])
                    : +f < n &&
                      ((h.state = 6),
                      h.timer.stop(),
                      h.on.call("cancel", t, t.__data__, h.index, h.group),
                      delete i[f]);
                }
              if (
                (Bu(function () {
                  3 === e.state &&
                    ((e.state = 4), e.timer.restart(u, e.delay, e.time), u(c));
                }),
                (e.state = 2),
                e.on.call("start", t, t.__data__, e.index, e.group),
                2 === e.state)
              ) {
                for (
                  e.state = 3,
                    r = new Array((l = e.tween.length)),
                    f = 0,
                    s = -1;
                  f < l;
                  ++f
                )
                  (h = e.tween[f].value.call(
                    t,
                    t.__data__,
                    e.index,
                    e.group
                  )) && (r[++s] = h);
                r.length = s + 1;
              }
            }
            function u(n) {
              for (
                var i =
                    n < e.duration
                      ? e.ease.call(null, n / e.duration)
                      : (e.timer.restart(a), (e.state = 5), 1),
                  o = -1,
                  u = r.length;
                ++o < u;

              )
                r[o].call(t, i);
              5 === e.state &&
                (e.on.call("end", t, t.__data__, e.index, e.group), a());
            }
            function a() {
              for (var r in ((e.state = 6), e.timer.stop(), delete i[n], i))
                return;
              delete t.__transition;
            }
            (i[n] = e),
              (e.timer = Du(
                function (t) {
                  (e.state = 1),
                    e.timer.restart(o, e.delay, e.time),
                    e.delay <= t && o(t - e.delay);
                },
                0,
                e.time
              ));
          })(t, e, {
            name: n,
            index: r,
            group: i,
            on: Iu,
            tween: Uu,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: 0,
          });
        };
      function Yu(t, n) {
        var e = Xu(t, n);
        if (e.state > 0) throw new Error("too late; already scheduled");
        return e;
      }
      function Hu(t, n) {
        var e = Xu(t, n);
        if (e.state > 3) throw new Error("too late; already running");
        return e;
      }
      function Xu(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e;
      }
      var Vu,
        Gu = function (t, n) {
          var e,
            r,
            i,
            o = t.__transition,
            u = !0;
          if (o) {
            for (i in ((n = null == n ? null : n + ""), o))
              (e = o[i]).name === n
                ? ((r = e.state > 2 && e.state < 5),
                  (e.state = 6),
                  e.timer.stop(),
                  e.on.call(
                    r ? "interrupt" : "cancel",
                    t,
                    t.__data__,
                    e.index,
                    e.group
                  ),
                  delete o[i])
                : (u = !1);
            u && delete t.__transition;
          }
        },
        Ju = 180 / Math.PI,
        Zu = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        },
        Wu = function (t, n, e, r, i, o) {
          var u, a, c;
          return (
            (u = Math.sqrt(t * t + n * n)) && ((t /= u), (n /= u)),
            (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
            (a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (c /= a)),
            t * r < n * e && ((t = -t), (n = -n), (c = -c), (u = -u)),
            {
              translateX: i,
              translateY: o,
              rotate: Math.atan2(n, t) * Ju,
              skewX: Math.atan(c) * Ju,
              scaleX: u,
              scaleY: a,
            }
          );
        };
      function Ku(t, n, e, r) {
        function i(t) {
          return t.length ? t.pop() + " " : "";
        }
        return function (o, u) {
          var a = [],
            c = [];
          return (
            (o = t(o)),
            (u = t(u)),
            (function (t, r, i, o, u, a) {
              if (t !== i || r !== o) {
                var c = u.push("translate(", null, n, null, e);
                a.push({ i: c - 4, x: Lr(t, i) }, { i: c - 2, x: Lr(r, o) });
              } else (i || o) && u.push("translate(" + i + n + o + e);
            })(o.translateX, o.translateY, u.translateX, u.translateY, a, c),
            (function (t, n, e, o) {
              t !== n
                ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                  o.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: Lr(t, n),
                  }))
                : n && e.push(i(e) + "rotate(" + n + r);
            })(o.rotate, u.rotate, a, c),
            (function (t, n, e, o) {
              t !== n
                ? o.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: Lr(t, n),
                  })
                : n && e.push(i(e) + "skewX(" + n + r);
            })(o.skewX, u.skewX, a, c),
            (function (t, n, e, r, o, u) {
              if (t !== e || n !== r) {
                var a = o.push(i(o) + "scale(", null, ",", null, ")");
                u.push({ i: a - 4, x: Lr(t, e) }, { i: a - 2, x: Lr(n, r) });
              } else
                (1 === e && 1 === r) ||
                  o.push(i(o) + "scale(" + e + "," + r + ")");
            })(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c),
            (o = u = null),
            function (t) {
              for (var n, e = -1, r = c.length; ++e < r; )
                a[(n = c[e]).i] = n.x(t);
              return a.join("");
            }
          );
        };
      }
      var Qu = Ku(
          function (t) {
            const n = new (
              "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(t + "");
            return n.isIdentity ? Zu : Wu(n.a, n.b, n.c, n.d, n.e, n.f);
          },
          "px, ",
          "px)",
          "deg)"
        ),
        ta = Ku(
          function (t) {
            return null == t
              ? Zu
              : (Vu ||
                  (Vu = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  )),
                Vu.setAttribute("transform", t),
                (t = Vu.transform.baseVal.consolidate())
                  ? ((t = t.matrix), Wu(t.a, t.b, t.c, t.d, t.e, t.f))
                  : Zu);
          },
          ", ",
          ")",
          ")"
        );
      function na(t, n) {
        var e, r;
        return function () {
          var i = Hu(this, t),
            o = i.tween;
          if (o !== e)
            for (var u = 0, a = (r = e = o).length; u < a; ++u)
              if (r[u].name === n) {
                (r = r.slice()).splice(u, 1);
                break;
              }
          i.tween = r;
        };
      }
      function ea(t, n, e) {
        var r, i;
        if ("function" != typeof e) throw new Error();
        return function () {
          var o = Hu(this, t),
            u = o.tween;
          if (u !== r) {
            i = (r = u).slice();
            for (var a = { name: n, value: e }, c = 0, f = i.length; c < f; ++c)
              if (i[c].name === n) {
                i[c] = a;
                break;
              }
            c === f && i.push(a);
          }
          o.tween = i;
        };
      }
      function ra(t, n, e) {
        var r = t._id;
        return (
          t.each(function () {
            var t = Hu(this, r);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments);
          }),
          function (t) {
            return Xu(t, r).value[n];
          }
        );
      }
      var ia = function (t, n) {
        var e;
        return (
          "number" == typeof n
            ? Lr
            : n instanceof cr
            ? Or
            : (e = cr(n))
            ? ((n = e), Or)
            : Vr
        )(t, n);
      };
      function oa(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function ua(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function aa(t, n, e) {
        var r,
          i,
          o = e + "";
        return function () {
          var u = this.getAttribute(t);
          return u === o ? null : u === r ? i : (i = n((r = u), e));
        };
      }
      function ca(t, n, e) {
        var r,
          i,
          o = e + "";
        return function () {
          var u = this.getAttributeNS(t.space, t.local);
          return u === o ? null : u === r ? i : (i = n((r = u), e));
        };
      }
      function fa(t, n, e) {
        var r, i, o;
        return function () {
          var u,
            a,
            c = e(this);
          if (null != c)
            return (u = this.getAttribute(t)) === (a = c + "")
              ? null
              : u === r && a === i
              ? o
              : ((i = a), (o = n((r = u), c)));
          this.removeAttribute(t);
        };
      }
      function sa(t, n, e) {
        var r, i, o;
        return function () {
          var u,
            a,
            c = e(this);
          if (null != c)
            return (u = this.getAttributeNS(t.space, t.local)) === (a = c + "")
              ? null
              : u === r && a === i
              ? o
              : ((i = a), (o = n((r = u), c)));
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function la(t, n) {
        return function (e) {
          this.setAttribute(t, n.call(this, e));
        };
      }
      function ha(t, n) {
        return function (e) {
          this.setAttributeNS(t.space, t.local, n.call(this, e));
        };
      }
      function da(t, n) {
        var e, r;
        function i() {
          var i = n.apply(this, arguments);
          return i !== r && (e = (r = i) && ha(t, i)), e;
        }
        return (i._value = n), i;
      }
      function pa(t, n) {
        var e, r;
        function i() {
          var i = n.apply(this, arguments);
          return i !== r && (e = (r = i) && la(t, i)), e;
        }
        return (i._value = n), i;
      }
      function ga(t, n) {
        return function () {
          Yu(this, t).delay = +n.apply(this, arguments);
        };
      }
      function ya(t, n) {
        return (
          (n = +n),
          function () {
            Yu(this, t).delay = n;
          }
        );
      }
      function va(t, n) {
        return function () {
          Hu(this, t).duration = +n.apply(this, arguments);
        };
      }
      function _a(t, n) {
        return (
          (n = +n),
          function () {
            Hu(this, t).duration = n;
          }
        );
      }
      function ma(t, n) {
        if ("function" != typeof n) throw new Error();
        return function () {
          Hu(this, t).ease = n;
        };
      }
      function ba(t, n, e) {
        var r,
          i,
          o = (function (t) {
            return (t + "")
              .trim()
              .split(/^|\s+/)
              .every(function (t) {
                var n = t.indexOf(".");
                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
              });
          })(n)
            ? Yu
            : Hu;
        return function () {
          var u = o(this, t),
            a = u.on;
          a !== r && (i = (r = a).copy()).on(n, e), (u.on = i);
        };
      }
      var xa = Mu.prototype.constructor;
      function wa(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function Ma(t, n, e) {
        return function (r) {
          this.style.setProperty(t, n.call(this, r), e);
        };
      }
      function Aa(t, n, e) {
        var r, i;
        function o() {
          var o = n.apply(this, arguments);
          return o !== i && (r = (i = o) && Ma(t, o, e)), r;
        }
        return (o._value = n), o;
      }
      function Sa(t) {
        return function (n) {
          this.textContent = t.call(this, n);
        };
      }
      function Ta(t) {
        var n, e;
        function r() {
          var r = t.apply(this, arguments);
          return r !== e && (n = (e = r) && Sa(r)), n;
        }
        return (r._value = t), r;
      }
      var Ea = 0;
      function Na(t, n, e, r) {
        (this._groups = t),
          (this._parents = n),
          (this._name = e),
          (this._id = r);
      }
      function ka(t) {
        return Mu().transition(t);
      }
      function Ca() {
        return ++Ea;
      }
      var Pa = Mu.prototype;
      function za(t) {
        return t * t * t;
      }
      function $a(t) {
        return --t * t * t + 1;
      }
      function Oa(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
      Na.prototype = ka.prototype = {
        constructor: Na,
        select: function (t) {
          var n = this._name,
            e = this._id;
          "function" != typeof t && (t = fo(t));
          for (
            var r = this._groups, i = r.length, o = new Array(i), u = 0;
            u < i;
            ++u
          )
            for (
              var a,
                c,
                f = r[u],
                s = f.length,
                l = (o[u] = new Array(s)),
                h = 0;
              h < s;
              ++h
            )
              (a = f[h]) &&
                (c = t.call(a, a.__data__, h, f)) &&
                ("__data__" in a && (c.__data__ = a.__data__),
                (l[h] = c),
                Lu(l[h], n, e, h, l, Xu(a, e)));
          return new Na(o, this._parents, n, e);
        },
        selectAll: function (t) {
          var n = this._name,
            e = this._id;
          "function" != typeof t && (t = ho(t));
          for (
            var r = this._groups, i = r.length, o = [], u = [], a = 0;
            a < i;
            ++a
          )
            for (var c, f = r[a], s = f.length, l = 0; l < s; ++l)
              if ((c = f[l])) {
                for (
                  var h,
                    d = t.call(c, c.__data__, l, f),
                    p = Xu(c, e),
                    g = 0,
                    y = d.length;
                  g < y;
                  ++g
                )
                  (h = d[g]) && Lu(h, n, e, g, d, p);
                o.push(d), u.push(c);
              }
          return new Na(o, u, n, e);
        },
        selectChild: Pa.selectChild,
        selectChildren: Pa.selectChildren,
        filter: function (t) {
          "function" != typeof t && (t = po(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o, u = n[i], a = u.length, c = (r[i] = []), f = 0;
              f < a;
              ++f
            )
              (o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
          return new Na(r, this._parents, this._name, this._id);
        },
        merge: function (t) {
          if (t._id !== this._id) throw new Error();
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              o = Math.min(r, i),
              u = new Array(r),
              a = 0;
            a < o;
            ++a
          )
            for (
              var c,
                f = n[a],
                s = e[a],
                l = f.length,
                h = (u[a] = new Array(l)),
                d = 0;
              d < l;
              ++d
            )
              (c = f[d] || s[d]) && (h[d] = c);
          for (; a < r; ++a) u[a] = n[a];
          return new Na(u, this._parents, this._name, this._id);
        },
        selection: function () {
          return new xa(this._groups, this._parents);
        },
        transition: function () {
          for (
            var t = this._name,
              n = this._id,
              e = Ca(),
              r = this._groups,
              i = r.length,
              o = 0;
            o < i;
            ++o
          )
            for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
              if ((u = a[f])) {
                var s = Xu(u, n);
                Lu(u, t, e, f, a, {
                  time: s.time + s.delay + s.duration,
                  delay: 0,
                  duration: s.duration,
                  ease: s.ease,
                });
              }
          return new Na(r, this._parents, t, e);
        },
        call: Pa.call,
        nodes: Pa.nodes,
        node: Pa.node,
        size: Pa.size,
        empty: Pa.empty,
        each: Pa.each,
        on: function (t, n) {
          var e = this._id;
          return arguments.length < 2
            ? Xu(this.node(), e).on.on(t)
            : this.each(ba(e, t, n));
        },
        attr: function (t, n) {
          var e = No(t),
            r = "transform" === e ? ta : ia;
          return this.attrTween(
            t,
            "function" == typeof n
              ? (e.local ? sa : fa)(e, r, ra(this, "attr." + t, n))
              : null == n
              ? (e.local ? ua : oa)(e)
              : (e.local ? ca : aa)(e, r, n)
          );
        },
        attrTween: function (t, n) {
          var e = "attr." + t;
          if (arguments.length < 2) return (e = this.tween(e)) && e._value;
          if (null == n) return this.tween(e, null);
          if ("function" != typeof n) throw new Error();
          var r = No(t);
          return this.tween(e, (r.local ? da : pa)(r, n));
        },
        style: function (t, n, e) {
          var r = "transform" == (t += "") ? Qu : ia;
          return null == n
            ? this.styleTween(
                t,
                (function (t, n) {
                  var e, r, i;
                  return function () {
                    var o = Fo(this, t),
                      u = (this.style.removeProperty(t), Fo(this, t));
                    return o === u
                      ? null
                      : o === e && u === r
                      ? i
                      : (i = n((e = o), (r = u)));
                  };
                })(t, r)
              ).on("end.style." + t, wa(t))
            : "function" == typeof n
            ? this.styleTween(
                t,
                (function (t, n, e) {
                  var r, i, o;
                  return function () {
                    var u = Fo(this, t),
                      a = e(this),
                      c = a + "";
                    return (
                      null == a &&
                        (this.style.removeProperty(t), (c = a = Fo(this, t))),
                      u === c
                        ? null
                        : u === r && c === i
                        ? o
                        : ((i = c), (o = n((r = u), a)))
                    );
                  };
                })(t, r, ra(this, "style." + t, n))
              ).each(
                (function (t, n) {
                  var e,
                    r,
                    i,
                    o,
                    u = "style." + n,
                    a = "end." + u;
                  return function () {
                    var c = Hu(this, t),
                      f = c.on,
                      s = null == c.value[u] ? o || (o = wa(n)) : void 0;
                    (f === e && i === s) || (r = (e = f).copy()).on(a, (i = s)),
                      (c.on = r);
                  };
                })(this._id, t)
              )
            : this.styleTween(
                t,
                (function (t, n, e) {
                  var r,
                    i,
                    o = e + "";
                  return function () {
                    var u = Fo(this, t);
                    return u === o ? null : u === r ? i : (i = n((r = u), e));
                  };
                })(t, r, n),
                e
              ).on("end.style." + t, null);
        },
        styleTween: function (t, n, e) {
          var r = "style." + (t += "");
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == n) return this.tween(r, null);
          if ("function" != typeof n) throw new Error();
          return this.tween(r, Aa(t, n, null == e ? "" : e));
        },
        text: function (t) {
          return this.tween(
            "text",
            "function" == typeof t
              ? (function (t) {
                  return function () {
                    var n = t(this);
                    this.textContent = null == n ? "" : n;
                  };
                })(ra(this, "text", t))
              : (function (t) {
                  return function () {
                    this.textContent = t;
                  };
                })(null == t ? "" : t + "")
          );
        },
        textTween: function (t) {
          var n = "text";
          if (arguments.length < 1) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw new Error();
          return this.tween(n, Ta(t));
        },
        remove: function () {
          return this.on(
            "end.remove",
            ((t = this._id),
            function () {
              var n = this.parentNode;
              for (var e in this.__transition) if (+e !== t) return;
              n && n.removeChild(this);
            })
          );
          var t;
        },
        tween: function (t, n) {
          var e = this._id;
          if (((t += ""), arguments.length < 2)) {
            for (
              var r, i = Xu(this.node(), e).tween, o = 0, u = i.length;
              o < u;
              ++o
            )
              if ((r = i[o]).name === t) return r.value;
            return null;
          }
          return this.each((null == n ? na : ea)(e, t, n));
        },
        delay: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(("function" == typeof t ? ga : ya)(n, t))
            : Xu(this.node(), n).delay;
        },
        duration: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(("function" == typeof t ? va : _a)(n, t))
            : Xu(this.node(), n).duration;
        },
        ease: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(ma(n, t))
            : Xu(this.node(), n).ease;
        },
        easeVarying: function (t) {
          if ("function" != typeof t) throw new Error();
          return this.each(
            (function (t, n) {
              return function () {
                var e = n.apply(this, arguments);
                if ("function" != typeof e) throw new Error();
                Hu(this, t).ease = e;
              };
            })(this._id, t)
          );
        },
        end: function () {
          var t,
            n,
            e = this,
            r = e._id,
            i = e.size();
          return new Promise(function (o, u) {
            var a = { value: u },
              c = {
                value: function () {
                  0 == --i && o();
                },
              };
            e.each(function () {
              var e = Hu(this, r),
                i = e.on;
              i !== t &&
                ((n = (t = i).copy())._.cancel.push(a),
                n._.interrupt.push(a),
                n._.end.push(c)),
                (e.on = n);
            }),
              0 === i && o();
          });
        },
        [Symbol.iterator]: Pa[Symbol.iterator],
      };
      var Da = { time: null, delay: 0, duration: 250, ease: Oa };
      function Ra(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]); )
          if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
        return e;
      }
      (Mu.prototype.interrupt = function (t) {
        return this.each(function () {
          Gu(this, t);
        });
      }),
        (Mu.prototype.transition = function (t) {
          var n, e;
          t instanceof Na
            ? ((n = t._id), (t = t._name))
            : ((n = Ca()),
              ((e = Da).time = zu()),
              (t = null == t ? null : t + ""));
          for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
              (u = a[f]) && Lu(u, t, n, f, a, e || Ra(u, n));
          return new Na(r, this._parents, t, n);
        });
      var ja = [null],
        qa = function (t, n) {
          var e,
            r,
            i = t.__transition;
          if (i)
            for (r in ((n = null == n ? null : n + ""), i))
              if ((e = i[r]).state > 1 && e.name === n)
                return new Na([[t]], ja, n, +r);
          return null;
        },
        Fa = (t) => () => t;
      function Ba(
        t,
        { sourceEvent: n, target: e, selection: r, mode: i, dispatch: o }
      ) {
        Object.defineProperties(this, {
          type: { value: t, enumerable: !0, configurable: !0 },
          sourceEvent: { value: n, enumerable: !0, configurable: !0 },
          target: { value: e, enumerable: !0, configurable: !0 },
          selection: { value: r, enumerable: !0, configurable: !0 },
          mode: { value: i, enumerable: !0, configurable: !0 },
          _: { value: o },
        });
      }
      function Ia(t) {
        t.stopImmediatePropagation();
      }
      var Ua = function (t) {
          t.preventDefault(), t.stopImmediatePropagation();
        },
        La = { name: "drag" },
        Ya = { name: "space" },
        Ha = { name: "handle" },
        Xa = { name: "center" };
      const { abs: Va, max: Ga, min: Ja } = Math;
      function Za(t) {
        return [+t[0], +t[1]];
      }
      function Wa(t) {
        return [Za(t[0]), Za(t[1])];
      }
      var Ka = {
          name: "x",
          handles: ["w", "e"].map(uc),
          input: function (t, n) {
            return null == t
              ? null
              : [
                  [+t[0], n[0][1]],
                  [+t[1], n[1][1]],
                ];
          },
          output: function (t) {
            return t && [t[0][0], t[1][0]];
          },
        },
        Qa = {
          name: "y",
          handles: ["n", "s"].map(uc),
          input: function (t, n) {
            return null == t
              ? null
              : [
                  [n[0][0], +t[0]],
                  [n[1][0], +t[1]],
                ];
          },
          output: function (t) {
            return t && [t[0][1], t[1][1]];
          },
        },
        tc = {
          name: "xy",
          handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(uc),
          input: function (t) {
            return null == t ? null : Wa(t);
          },
          output: function (t) {
            return t;
          },
        },
        nc = {
          overlay: "crosshair",
          selection: "move",
          n: "ns-resize",
          e: "ew-resize",
          s: "ns-resize",
          w: "ew-resize",
          nw: "nwse-resize",
          ne: "nesw-resize",
          se: "nwse-resize",
          sw: "nesw-resize",
        },
        ec = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
        rc = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
        ic = {
          overlay: 1,
          selection: 1,
          n: null,
          e: 1,
          s: null,
          w: -1,
          nw: -1,
          ne: 1,
          se: 1,
          sw: -1,
        },
        oc = {
          overlay: 1,
          selection: 1,
          n: -1,
          e: null,
          s: 1,
          w: null,
          nw: -1,
          ne: -1,
          se: 1,
          sw: 1,
        };
      function uc(t) {
        return { type: t };
      }
      function ac(t) {
        return !t.ctrlKey && !t.button;
      }
      function cc() {
        var t = this.ownerSVGElement || this;
        return t.hasAttribute("viewBox")
          ? [
              [(t = t.viewBox.baseVal).x, t.y],
              [t.x + t.width, t.y + t.height],
            ]
          : [
              [0, 0],
              [t.width.baseVal.value, t.height.baseVal.value],
            ];
      }
      function fc() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function sc(t) {
        for (; !t.__brush; ) if (!(t = t.parentNode)) return;
        return t.__brush;
      }
      function lc(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1];
      }
      function hc(t) {
        var n = t.__brush;
        return n ? n.dim.output(n.selection) : null;
      }
      function dc() {
        return yc(Ka);
      }
      function pc() {
        return yc(Qa);
      }
      var gc = function () {
        return yc(tc);
      };
      function yc(t) {
        var n,
          e = cc,
          r = ac,
          i = fc,
          o = !0,
          u = Tn("start", "brush", "end"),
          a = 6;
        function c(n) {
          var e = n
            .property("__brush", g)
            .selectAll(".overlay")
            .data([uc("overlay")]);
          e
            .enter()
            .append("rect")
            .attr("class", "overlay")
            .attr("pointer-events", "all")
            .attr("cursor", nc.overlay)
            .merge(e)
            .each(function () {
              var t = sc(this).extent;
              uo(this)
                .attr("x", t[0][0])
                .attr("y", t[0][1])
                .attr("width", t[1][0] - t[0][0])
                .attr("height", t[1][1] - t[0][1]);
            }),
            n
              .selectAll(".selection")
              .data([uc("selection")])
              .enter()
              .append("rect")
              .attr("class", "selection")
              .attr("cursor", nc.selection)
              .attr("fill", "#777")
              .attr("fill-opacity", 0.3)
              .attr("stroke", "#fff")
              .attr("shape-rendering", "crispEdges");
          var r = n.selectAll(".handle").data(t.handles, function (t) {
            return t.type;
          });
          r.exit().remove(),
            r
              .enter()
              .append("rect")
              .attr("class", function (t) {
                return "handle handle--" + t.type;
              })
              .attr("cursor", function (t) {
                return nc[t.type];
              }),
            n
              .each(f)
              .attr("fill", "none")
              .attr("pointer-events", "all")
              .on("mousedown.brush", h)
              .filter(i)
              .on("touchstart.brush", h)
              .on("touchmove.brush", d)
              .on("touchend.brush touchcancel.brush", p)
              .style("touch-action", "none")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function f() {
          var t = uo(this),
            n = sc(this).selection;
          n
            ? (t
                .selectAll(".selection")
                .style("display", null)
                .attr("x", n[0][0])
                .attr("y", n[0][1])
                .attr("width", n[1][0] - n[0][0])
                .attr("height", n[1][1] - n[0][1]),
              t
                .selectAll(".handle")
                .style("display", null)
                .attr("x", function (t) {
                  return "e" === t.type[t.type.length - 1]
                    ? n[1][0] - a / 2
                    : n[0][0] - a / 2;
                })
                .attr("y", function (t) {
                  return "s" === t.type[0] ? n[1][1] - a / 2 : n[0][1] - a / 2;
                })
                .attr("width", function (t) {
                  return "n" === t.type || "s" === t.type
                    ? n[1][0] - n[0][0] + a
                    : a;
                })
                .attr("height", function (t) {
                  return "e" === t.type || "w" === t.type
                    ? n[1][1] - n[0][1] + a
                    : a;
                }))
            : t
                .selectAll(".selection,.handle")
                .style("display", "none")
                .attr("x", null)
                .attr("y", null)
                .attr("width", null)
                .attr("height", null);
        }
        function s(t, n, e) {
          var r = t.__brush.emitter;
          return !r || (e && r.clean) ? new l(t, n, e) : r;
        }
        function l(t, n, e) {
          (this.that = t),
            (this.args = n),
            (this.state = t.__brush),
            (this.active = 0),
            (this.clean = e);
        }
        function h(e) {
          if ((!n || e.touches) && r.apply(this, arguments)) {
            var i,
              u,
              a,
              c,
              l,
              h,
              d,
              p,
              g,
              y,
              v,
              _ = this,
              m = e.target.__data__.type,
              b =
                "selection" === (o && e.metaKey ? (m = "overlay") : m)
                  ? La
                  : o && e.altKey
                  ? Xa
                  : Ha,
              x = t === Qa ? null : ic[m],
              w = t === Ka ? null : oc[m],
              M = sc(_),
              A = M.extent,
              S = M.selection,
              T = A[0][0],
              E = A[0][1],
              N = A[1][0],
              k = A[1][1],
              C = 0,
              P = 0,
              z = x && w && o && e.shiftKey,
              $ = Array.from(e.touches || [e], (t) => {
                const n = t.identifier;
                return (
                  ((t = ao(t, _)).point0 = t.slice()), (t.identifier = n), t
                );
              });
            Gu(_);
            var O = s(_, arguments, !0).beforestart();
            if ("overlay" === m) {
              S && (g = !0);
              const n = [$[0], $[1] || $[0]];
              (M.selection = S =
                [
                  [
                    (i = t === Qa ? T : Ja(n[0][0], n[1][0])),
                    (a = t === Ka ? E : Ja(n[0][1], n[1][1])),
                  ],
                  [
                    (l = t === Qa ? N : Ga(n[0][0], n[1][0])),
                    (d = t === Ka ? k : Ga(n[0][1], n[1][1])),
                  ],
                ]),
                $.length > 1 && F(e);
            } else (i = S[0][0]), (a = S[0][1]), (l = S[1][0]), (d = S[1][1]);
            (u = i), (c = a), (h = l), (p = d);
            var D = uo(_).attr("pointer-events", "none"),
              R = D.selectAll(".overlay").attr("cursor", nc[m]);
            if (e.touches) (O.moved = q), (O.ended = B);
            else {
              var j = uo(e.view)
                .on("mousemove.brush", q, !0)
                .on("mouseup.brush", B, !0);
              o && j.on("keydown.brush", I, !0).on("keyup.brush", U, !0),
                Ye(e.view);
            }
            f.call(_), O.start(e, b.name);
          }
          function q(t) {
            for (const n of t.changedTouches || [t])
              for (const t of $)
                t.identifier === n.identifier && (t.cur = ao(n, _));
            if (z && !y && !v && 1 === $.length) {
              const t = $[0];
              Va(t.cur[0] - t[0]) > Va(t.cur[1] - t[1]) ? (v = !0) : (y = !0);
            }
            for (const t of $) t.cur && ((t[0] = t.cur[0]), (t[1] = t.cur[1]));
            (g = !0), Ua(t), F(t);
          }
          function F(t) {
            const n = $[0],
              e = n.point0;
            var r;
            switch (((C = n[0] - e[0]), (P = n[1] - e[1]), b)) {
              case Ya:
              case La:
                x && ((C = Ga(T - i, Ja(N - l, C))), (u = i + C), (h = l + C)),
                  w &&
                    ((P = Ga(E - a, Ja(k - d, P))), (c = a + P), (p = d + P));
                break;
              case Ha:
                $[1]
                  ? (x &&
                      ((u = Ga(T, Ja(N, $[0][0]))),
                      (h = Ga(T, Ja(N, $[1][0]))),
                      (x = 1)),
                    w &&
                      ((c = Ga(E, Ja(k, $[0][1]))),
                      (p = Ga(E, Ja(k, $[1][1]))),
                      (w = 1)))
                  : (x < 0
                      ? ((C = Ga(T - i, Ja(N - i, C))), (u = i + C), (h = l))
                      : x > 0 &&
                        ((C = Ga(T - l, Ja(N - l, C))), (u = i), (h = l + C)),
                    w < 0
                      ? ((P = Ga(E - a, Ja(k - a, P))), (c = a + P), (p = d))
                      : w > 0 &&
                        ((P = Ga(E - d, Ja(k - d, P))), (c = a), (p = d + P)));
                break;
              case Xa:
                x &&
                  ((u = Ga(T, Ja(N, i - C * x))),
                  (h = Ga(T, Ja(N, l + C * x)))),
                  w &&
                    ((c = Ga(E, Ja(k, a - P * w))),
                    (p = Ga(E, Ja(k, d + P * w))));
            }
            h < u &&
              ((x *= -1),
              (r = i),
              (i = l),
              (l = r),
              (r = u),
              (u = h),
              (h = r),
              m in ec && R.attr("cursor", nc[(m = ec[m])])),
              p < c &&
                ((w *= -1),
                (r = a),
                (a = d),
                (d = r),
                (r = c),
                (c = p),
                (p = r),
                m in rc && R.attr("cursor", nc[(m = rc[m])])),
              M.selection && (S = M.selection),
              y && ((u = S[0][0]), (h = S[1][0])),
              v && ((c = S[0][1]), (p = S[1][1])),
              (S[0][0] === u &&
                S[0][1] === c &&
                S[1][0] === h &&
                S[1][1] === p) ||
                ((M.selection = [
                  [u, c],
                  [h, p],
                ]),
                f.call(_),
                O.brush(t, b.name));
          }
          function B(t) {
            if ((Ia(t), t.touches)) {
              if (t.touches.length) return;
              n && clearTimeout(n),
                (n = setTimeout(function () {
                  n = null;
                }, 500));
            } else
              He(t.view, g),
                j.on(
                  "keydown.brush keyup.brush mousemove.brush mouseup.brush",
                  null
                );
            D.attr("pointer-events", "all"),
              R.attr("cursor", nc.overlay),
              M.selection && (S = M.selection),
              lc(S) && ((M.selection = null), f.call(_)),
              O.end(t, b.name);
          }
          function I(t) {
            switch (t.keyCode) {
              case 16:
                z = x && w;
                break;
              case 18:
                b === Ha &&
                  (x && ((l = h - C * x), (i = u + C * x)),
                  w && ((d = p - P * w), (a = c + P * w)),
                  (b = Xa),
                  F(t));
                break;
              case 32:
                (b !== Ha && b !== Xa) ||
                  (x < 0 ? (l = h - C) : x > 0 && (i = u - C),
                  w < 0 ? (d = p - P) : w > 0 && (a = c - P),
                  (b = Ya),
                  R.attr("cursor", nc.selection),
                  F(t));
                break;
              default:
                return;
            }
            Ua(t);
          }
          function U(t) {
            switch (t.keyCode) {
              case 16:
                z && ((y = v = z = !1), F(t));
                break;
              case 18:
                b === Xa &&
                  (x < 0 ? (l = h) : x > 0 && (i = u),
                  w < 0 ? (d = p) : w > 0 && (a = c),
                  (b = Ha),
                  F(t));
                break;
              case 32:
                b === Ya &&
                  (t.altKey
                    ? (x && ((l = h - C * x), (i = u + C * x)),
                      w && ((d = p - P * w), (a = c + P * w)),
                      (b = Xa))
                    : (x < 0 ? (l = h) : x > 0 && (i = u),
                      w < 0 ? (d = p) : w > 0 && (a = c),
                      (b = Ha)),
                  R.attr("cursor", nc[m]),
                  F(t));
                break;
              default:
                return;
            }
            Ua(t);
          }
        }
        function d(t) {
          s(this, arguments).moved(t);
        }
        function p(t) {
          s(this, arguments).ended(t);
        }
        function g() {
          var n = this.__brush || { selection: null };
          return (n.extent = Wa(e.apply(this, arguments))), (n.dim = t), n;
        }
        return (
          (c.move = function (n, e, r) {
            n.tween
              ? n
                  .on("start.brush", function (t) {
                    s(this, arguments).beforestart().start(t);
                  })
                  .on("interrupt.brush end.brush", function (t) {
                    s(this, arguments).end(t);
                  })
                  .tween("brush", function () {
                    var n = this,
                      r = n.__brush,
                      i = s(n, arguments),
                      o = r.selection,
                      u = t.input(
                        "function" == typeof e ? e.apply(this, arguments) : e,
                        r.extent
                      ),
                      a = Gr(o, u);
                    function c(t) {
                      (r.selection = 1 === t && null === u ? null : a(t)),
                        f.call(n),
                        i.brush();
                    }
                    return null !== o && null !== u ? c : c(1);
                  })
              : n.each(function () {
                  var n = this,
                    i = arguments,
                    o = n.__brush,
                    u = t.input(
                      "function" == typeof e ? e.apply(n, i) : e,
                      o.extent
                    ),
                    a = s(n, i).beforestart();
                  Gu(n),
                    (o.selection = null === u ? null : u),
                    f.call(n),
                    a.start(r).brush(r).end(r);
                });
          }),
          (c.clear = function (t, n) {
            c.move(t, null, n);
          }),
          (l.prototype = {
            beforestart: function () {
              return (
                1 == ++this.active &&
                  ((this.state.emitter = this), (this.starting = !0)),
                this
              );
            },
            start: function (t, n) {
              return (
                this.starting
                  ? ((this.starting = !1), this.emit("start", t, n))
                  : this.emit("brush", t),
                this
              );
            },
            brush: function (t, n) {
              return this.emit("brush", t, n), this;
            },
            end: function (t, n) {
              return (
                0 == --this.active &&
                  (delete this.state.emitter, this.emit("end", t, n)),
                this
              );
            },
            emit: function (n, e, r) {
              var i = uo(this.that).datum();
              u.call(
                n,
                this.that,
                new Ba(n, {
                  sourceEvent: e,
                  target: c,
                  selection: t.output(this.state.selection),
                  mode: r,
                  dispatch: u,
                }),
                i
              );
            },
          }),
          (c.extent = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : Fa(Wa(t))), c)
              : e;
          }),
          (c.filter = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : Fa(!!t)), c)
              : r;
          }),
          (c.touchable = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : Fa(!!t)), c)
              : i;
          }),
          (c.handleSize = function (t) {
            return arguments.length ? ((a = +t), c) : a;
          }),
          (c.keyModifiers = function (t) {
            return arguments.length ? ((o = !!t), c) : o;
          }),
          (c.on = function () {
            var t = u.on.apply(u, arguments);
            return t === u ? c : t;
          }),
          c
        );
      }
      var vc = Math.abs,
        _c = Math.cos,
        mc = Math.sin,
        bc = Math.PI,
        xc = bc / 2,
        wc = 2 * bc,
        Mc = Math.max;
      function Ac(t, n) {
        return Array.from({ length: n - t }, (n, e) => t + e);
      }
      function Sc(t) {
        return function (n, e) {
          return t(
            n.source.value + n.target.value,
            e.source.value + e.target.value
          );
        };
      }
      var Tc = function () {
        return kc(!1, !1);
      };
      function Ec() {
        return kc(!1, !0);
      }
      function Nc() {
        return kc(!0, !1);
      }
      function kc(t, n) {
        var e = 0,
          r = null,
          i = null,
          o = null;
        function u(u) {
          var a,
            c = u.length,
            f = new Array(c),
            s = Ac(0, c),
            l = new Array(c * c),
            h = new Array(c),
            d = 0;
          u = Float64Array.from(
            { length: c * c },
            n
              ? (t, n) => u[n % c][(n / c) | 0]
              : (t, n) => u[(n / c) | 0][n % c]
          );
          for (let n = 0; n < c; ++n) {
            let e = 0;
            for (let r = 0; r < c; ++r) e += u[n * c + r] + t * u[r * c + n];
            d += f[n] = e;
          }
          a = (d = Mc(0, wc - e * c) / d) ? e : wc / c;
          {
            let n = 0;
            r && s.sort((t, n) => r(f[t], f[n]));
            for (const e of s) {
              const r = n;
              if (t) {
                const t = Ac(1 + ~c, c).filter((t) =>
                  t < 0 ? u[~t * c + e] : u[e * c + t]
                );
                i &&
                  t.sort((t, n) =>
                    i(
                      t < 0 ? -u[~t * c + e] : u[e * c + t],
                      n < 0 ? -u[~n * c + e] : u[e * c + n]
                    )
                  );
                for (const r of t)
                  if (r < 0) {
                    (
                      l[~r * c + e] ||
                      (l[~r * c + e] = { source: null, target: null })
                    ).target = {
                      index: e,
                      startAngle: n,
                      endAngle: (n += u[~r * c + e] * d),
                      value: u[~r * c + e],
                    };
                  } else {
                    (
                      l[e * c + r] ||
                      (l[e * c + r] = { source: null, target: null })
                    ).source = {
                      index: e,
                      startAngle: n,
                      endAngle: (n += u[e * c + r] * d),
                      value: u[e * c + r],
                    };
                  }
                h[e] = { index: e, startAngle: r, endAngle: n, value: f[e] };
              } else {
                const t = Ac(0, c).filter((t) => u[e * c + t] || u[t * c + e]);
                i && t.sort((t, n) => i(u[e * c + t], u[e * c + n]));
                for (const r of t) {
                  let t;
                  if (
                    (e < r
                      ? ((t =
                          l[e * c + r] ||
                          (l[e * c + r] = { source: null, target: null })),
                        (t.source = {
                          index: e,
                          startAngle: n,
                          endAngle: (n += u[e * c + r] * d),
                          value: u[e * c + r],
                        }))
                      : ((t =
                          l[r * c + e] ||
                          (l[r * c + e] = { source: null, target: null })),
                        (t.target = {
                          index: e,
                          startAngle: n,
                          endAngle: (n += u[e * c + r] * d),
                          value: u[e * c + r],
                        }),
                        e === r && (t.source = t.target)),
                    t.source && t.target && t.source.value < t.target.value)
                  ) {
                    const n = t.source;
                    (t.source = t.target), (t.target = n);
                  }
                }
                h[e] = { index: e, startAngle: r, endAngle: n, value: f[e] };
              }
              n += a;
            }
          }
          return ((l = Object.values(l)).groups = h), o ? l.sort(o) : l;
        }
        return (
          (u.padAngle = function (t) {
            return arguments.length ? ((e = Mc(0, t)), u) : e;
          }),
          (u.sortGroups = function (t) {
            return arguments.length ? ((r = t), u) : r;
          }),
          (u.sortSubgroups = function (t) {
            return arguments.length ? ((i = t), u) : i;
          }),
          (u.sortChords = function (t) {
            return arguments.length
              ? (null == t ? (o = null) : ((o = Sc(t))._ = t), u)
              : o && o._;
          }),
          u
        );
      }
      const Cc = Math.PI,
        Pc = 2 * Cc,
        zc = Pc - 1e-6;
      function $c(t) {
        this._ += t[0];
        for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
      }
      class Oc {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? $c
                : (function (t) {
                    let n = Math.floor(t);
                    if (!(n >= 0)) throw new Error("invalid digits: " + t);
                    if (n > 15) return $c;
                    const e = 10 ** n;
                    return function (t) {
                      this._ += t[0];
                      for (let n = 1, r = t.length; n < r; ++n)
                        this._ += Math.round(arguments[n] * e) / e + t[n];
                    };
                  })(t));
        }
        moveTo(t, n) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +n)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, n) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
        }
        quadraticCurveTo(t, n, e, r) {
          this._append`Q${+t},${+n},${(this._x1 = +e)},${(this._y1 = +r)}`;
        }
        bezierCurveTo(t, n, e, r, i, o) {
          this._append`C${+t},${+n},${+e},${+r},${(this._x1 = +i)},${(this._y1 =
            +o)}`;
        }
        arcTo(t, n, e, r, i) {
          if (((t = +t), (n = +n), (e = +e), (r = +r), (i = +i) < 0))
            throw new Error("negative radius: " + i);
          let o = this._x1,
            u = this._y1,
            a = e - t,
            c = r - n,
            f = o - t,
            s = u - n,
            l = f * f + s * s;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
          else if (l > 1e-6)
            if (Math.abs(s * a - c * f) > 1e-6 && i) {
              let h = e - o,
                d = r - u,
                p = a * a + c * c,
                g = h * h + d * d,
                y = Math.sqrt(p),
                v = Math.sqrt(l),
                _ =
                  i * Math.tan((Cc - Math.acos((p + l - g) / (2 * y * v))) / 2),
                m = _ / v,
                b = _ / y;
              Math.abs(m - 1) > 1e-6 &&
                this._append`L${t + m * f},${n + m * s}`,
                this._append`A${i},${i},0,0,${+(s * h > f * d)},${(this._x1 =
                  t + b * a)},${(this._y1 = n + b * c)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
          else;
        }
        arc(t, n, e, r, i, o) {
          if (((t = +t), (n = +n), (o = !!o), (e = +e) < 0))
            throw new Error("negative radius: " + e);
          let u = e * Math.cos(r),
            a = e * Math.sin(r),
            c = t + u,
            f = n + a,
            s = 1 ^ o,
            l = o ? r - i : i - r;
          null === this._x1
            ? this._append`M${c},${f}`
            : (Math.abs(this._x1 - c) > 1e-6 ||
                Math.abs(this._y1 - f) > 1e-6) &&
              this._append`L${c},${f}`,
            e &&
              (l < 0 && (l = (l % Pc) + Pc),
              l > zc
                ? this._append`A${e},${e},0,1,${s},${t - u},${
                    n - a
                  }A${e},${e},0,1,${s},${(this._x1 = c)},${(this._y1 = f)}`
                : l > 1e-6 &&
                  this._append`A${e},${e},0,${+(l >= Cc)},${s},${(this._x1 =
                    t + e * Math.cos(i))},${(this._y1 = n + e * Math.sin(i))}`);
        }
        rect(t, n, e, r) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +n)}h${(e = +e)}v${+r}h${-e}Z`;
        }
        toString() {
          return this._;
        }
      }
      function Dc() {
        return new Oc();
      }
      function Rc(t = 3) {
        return new Oc(+t);
      }
      Dc.prototype = Oc.prototype;
      var jc = Array.prototype.slice,
        qc = function (t) {
          return function () {
            return t;
          };
        };
      function Fc(t) {
        return t.source;
      }
      function Bc(t) {
        return t.target;
      }
      function Ic(t) {
        return t.radius;
      }
      function Uc(t) {
        return t.startAngle;
      }
      function Lc(t) {
        return t.endAngle;
      }
      function Yc() {
        return 0;
      }
      function Hc() {
        return 10;
      }
      function Xc(t) {
        var n = Fc,
          e = Bc,
          r = Ic,
          i = Ic,
          o = Uc,
          u = Lc,
          a = Yc,
          c = null;
        function f() {
          var f,
            s = n.apply(this, arguments),
            l = e.apply(this, arguments),
            h = a.apply(this, arguments) / 2,
            d = jc.call(arguments),
            p = +r.apply(this, ((d[0] = s), d)),
            g = o.apply(this, d) - xc,
            y = u.apply(this, d) - xc,
            v = +i.apply(this, ((d[0] = l), d)),
            _ = o.apply(this, d) - xc,
            m = u.apply(this, d) - xc;
          if (
            (c || (c = f = Dc()),
            h > 1e-12 &&
              (vc(y - g) > 2 * h + 1e-12
                ? y > g
                  ? ((g += h), (y -= h))
                  : ((g -= h), (y += h))
                : (g = y = (g + y) / 2),
              vc(m - _) > 2 * h + 1e-12
                ? m > _
                  ? ((_ += h), (m -= h))
                  : ((_ -= h), (m += h))
                : (_ = m = (_ + m) / 2)),
            c.moveTo(p * _c(g), p * mc(g)),
            c.arc(0, 0, p, g, y),
            g !== _ || y !== m)
          )
            if (t) {
              var b = +t.apply(this, arguments),
                x = v - b,
                w = (_ + m) / 2;
              c.quadraticCurveTo(0, 0, x * _c(_), x * mc(_)),
                c.lineTo(v * _c(w), v * mc(w)),
                c.lineTo(x * _c(m), x * mc(m));
            } else
              c.quadraticCurveTo(0, 0, v * _c(_), v * mc(_)),
                c.arc(0, 0, v, _, m);
          if (
            (c.quadraticCurveTo(0, 0, p * _c(g), p * mc(g)), c.closePath(), f)
          )
            return (c = null), f + "" || null;
        }
        return (
          t &&
            (f.headRadius = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : qc(+n)), f)
                : t;
            }),
          (f.radius = function (t) {
            return arguments.length
              ? ((r = i = "function" == typeof t ? t : qc(+t)), f)
              : r;
          }),
          (f.sourceRadius = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : qc(+t)), f)
              : r;
          }),
          (f.targetRadius = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : qc(+t)), f)
              : i;
          }),
          (f.startAngle = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : qc(+t)), f)
              : o;
          }),
          (f.endAngle = function (t) {
            return arguments.length
              ? ((u = "function" == typeof t ? t : qc(+t)), f)
              : u;
          }),
          (f.padAngle = function (t) {
            return arguments.length
              ? ((a = "function" == typeof t ? t : qc(+t)), f)
              : a;
          }),
          (f.source = function (t) {
            return arguments.length ? ((n = t), f) : n;
          }),
          (f.target = function (t) {
            return arguments.length ? ((e = t), f) : e;
          }),
          (f.context = function (t) {
            return arguments.length ? ((c = null == t ? null : t), f) : c;
          }),
          f
        );
      }
      var Vc = function () {
        return Xc();
      };
      function Gc() {
        return Xc(Hc);
      }
      const Jc = Math.PI / 180,
        Zc = 180 / Math.PI;
      function Wc(t) {
        if (t instanceof tf) return new tf(t.l, t.a, t.b, t.opacity);
        if (t instanceof ff) return sf(t);
        t instanceof dr || (t = lr(t));
        var n,
          e,
          r = of(t.r),
          i = of(t.g),
          o = of(t.b),
          u = nf((0.2225045 * r + 0.7168786 * i + 0.0606169 * o) / 1);
        return (
          r === i && i === o
            ? (n = e = u)
            : ((n = nf(
                (0.4360747 * r + 0.3850649 * i + 0.1430804 * o) / 0.96422
              )),
              (e = nf(
                (0.0139322 * r + 0.0971045 * i + 0.7141733 * o) / 0.82521
              ))),
          new tf(116 * u - 16, 500 * (n - u), 200 * (u - e), t.opacity)
        );
      }
      function Kc(t, n) {
        return new tf(t, 0, 0, null == n ? 1 : n);
      }
      function Qc(t, n, e, r) {
        return 1 === arguments.length
          ? Wc(t)
          : new tf(t, n, e, null == r ? 1 : r);
      }
      function tf(t, n, e, r) {
        (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
      }
      function nf(t) {
        return t > (6 / 29) * (6 / 29) * (6 / 29)
          ? Math.pow(t, 1 / 3)
          : t / ((6 / 29) * 3 * (6 / 29)) + 4 / 29;
      }
      function ef(t) {
        return t > 6 / 29 ? t * t * t : (6 / 29) * 3 * (6 / 29) * (t - 4 / 29);
      }
      function rf(t) {
        return (
          255 *
          (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
        );
      }
      function of(t) {
        return (t /= 255) <= 0.04045
          ? t / 12.92
          : Math.pow((t + 0.055) / 1.055, 2.4);
      }
      function uf(t) {
        if (t instanceof ff) return new ff(t.h, t.c, t.l, t.opacity);
        if ((t instanceof tf || (t = Wc(t)), 0 === t.a && 0 === t.b))
          return new ff(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * Zc;
        return new ff(
          n < 0 ? n + 360 : n,
          Math.sqrt(t.a * t.a + t.b * t.b),
          t.l,
          t.opacity
        );
      }
      function af(t, n, e, r) {
        return 1 === arguments.length
          ? uf(t)
          : new ff(e, n, t, null == r ? 1 : r);
      }
      function cf(t, n, e, r) {
        return 1 === arguments.length
          ? uf(t)
          : new ff(t, n, e, null == r ? 1 : r);
      }
      function ff(t, n, e, r) {
        (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
      }
      function sf(t) {
        if (isNaN(t.h)) return new tf(t.l, 0, 0, t.opacity);
        var n = t.h * Jc;
        return new tf(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
      }
      Xe(
        tf,
        Qc,
        Ve(Ge, {
          brighter(t) {
            return new tf(
              this.l + 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            );
          },
          darker(t) {
            return new tf(
              this.l - 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            );
          },
          rgb() {
            var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              e = isNaN(this.b) ? t : t - this.b / 200;
            return new dr(
              rf(
                3.1338561 * (n = 0.96422 * ef(n)) -
                  1.6168667 * (t = 1 * ef(t)) -
                  0.4906146 * (e = 0.82521 * ef(e))
              ),
              rf(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
              rf(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
              this.opacity
            );
          },
        })
      ),
        Xe(
          ff,
          cf,
          Ve(Ge, {
            brighter(t) {
              return new ff(
                this.h,
                this.c,
                this.l + 18 * (null == t ? 1 : t),
                this.opacity
              );
            },
            darker(t) {
              return new ff(
                this.h,
                this.c,
                this.l - 18 * (null == t ? 1 : t),
                this.opacity
              );
            },
            rgb() {
              return sf(this).rgb();
            },
          })
        );
      var lf = -0.29227,
        hf = -1.7884503806,
        df = 3.5172982438,
        pf = -0.6557636667999999;
      function gf(t) {
        if (t instanceof vf) return new vf(t.h, t.s, t.l, t.opacity);
        t instanceof dr || (t = lr(t));
        var n = t.r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = (pf * r + hf * n - df * e) / (pf + hf - df),
          o = r - i,
          u = (1.97294 * (e - i) - lf * o) / -0.90649,
          a = Math.sqrt(u * u + o * o) / (1.97294 * i * (1 - i)),
          c = a ? Math.atan2(u, o) * Zc - 120 : NaN;
        return new vf(c < 0 ? c + 360 : c, a, i, t.opacity);
      }
      function yf(t, n, e, r) {
        return 1 === arguments.length
          ? gf(t)
          : new vf(t, n, e, null == r ? 1 : r);
      }
      function vf(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
      }
      Xe(
        vf,
        yf,
        Ve(Ge, {
          brighter(t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new vf(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new vf(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Jc,
              n = +this.l,
              e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              r = Math.cos(t),
              i = Math.sin(t);
            return new dr(
              255 * (n + e * (-0.14861 * r + 1.78277 * i)),
              255 * (n + e * (lf * r + -0.90649 * i)),
              255 * (n + e * (1.97294 * r)),
              this.opacity
            );
          },
        })
      );
      var _f = Array.prototype.slice,
        mf = function (t, n) {
          return t - n;
        },
        bf = (t) => () => t,
        xf = function (t, n) {
          for (var e, r = -1, i = n.length; ++r < i; )
            if ((e = wf(t, n[r]))) return e;
          return 0;
        };
      function wf(t, n) {
        for (
          var e = n[0], r = n[1], i = -1, o = 0, u = t.length, a = u - 1;
          o < u;
          a = o++
        ) {
          var c = t[o],
            f = c[0],
            s = c[1],
            l = t[a],
            h = l[0],
            d = l[1];
          if (Mf(c, l, n)) return 0;
          s > r != d > r && e < ((h - f) * (r - s)) / (d - s) + f && (i = -i);
        }
        return i;
      }
      function Mf(t, n, e) {
        var r, i, o, u;
        return (
          (function (t, n, e) {
            return (
              (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1])
            );
          })(t, n, e) &&
          ((i = t[(r = +(t[0] === n[0]))]),
          (o = e[r]),
          (u = n[r]),
          (i <= o && o <= u) || (u <= o && o <= i))
        );
      }
      var Af = function () {},
        Sf = [
          [],
          [
            [
              [1, 1.5],
              [0.5, 1],
            ],
          ],
          [
            [
              [1.5, 1],
              [1, 1.5],
            ],
          ],
          [
            [
              [1.5, 1],
              [0.5, 1],
            ],
          ],
          [
            [
              [1, 0.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 1.5],
              [0.5, 1],
            ],
            [
              [1, 0.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 0.5],
              [1, 1.5],
            ],
          ],
          [
            [
              [1, 0.5],
              [0.5, 1],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 0.5],
            ],
          ],
          [
            [
              [1, 1.5],
              [1, 0.5],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 0.5],
            ],
            [
              [1.5, 1],
              [1, 1.5],
            ],
          ],
          [
            [
              [1.5, 1],
              [1, 0.5],
            ],
          ],
          [
            [
              [0.5, 1],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 1.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 1.5],
            ],
          ],
          [],
        ],
        Tf = function () {
          var t = 1,
            n = 1,
            e = gt,
            r = a;
          function i(t) {
            var n = e(t);
            if (Array.isArray(n)) n = n.slice().sort(mf);
            else {
              const e = P(t, Ef);
              for (n = lt(...pt(e[0], e[1], n), n); n[n.length - 1] >= e[1]; )
                n.pop();
              for (; n[1] < e[0]; ) n.shift();
            }
            return n.map((n) => o(t, n));
          }
          function o(e, i) {
            const o = null == i ? NaN : +i;
            if (isNaN(o)) throw new Error("invalid value: " + i);
            var a = [],
              c = [];
            return (
              (function (e, r, i) {
                var o,
                  a,
                  c,
                  f,
                  s,
                  l,
                  h = new Array(),
                  d = new Array();
                (o = a = -1), (f = Nf(e[0], r)), Sf[f << 1].forEach(p);
                for (; ++o < t - 1; )
                  (c = f), (f = Nf(e[o + 1], r)), Sf[c | (f << 1)].forEach(p);
                Sf[f << 0].forEach(p);
                for (; ++a < n - 1; ) {
                  for (
                    o = -1,
                      f = Nf(e[a * t + t], r),
                      s = Nf(e[a * t], r),
                      Sf[(f << 1) | (s << 2)].forEach(p);
                    ++o < t - 1;

                  )
                    (c = f),
                      (f = Nf(e[a * t + t + o + 1], r)),
                      (l = s),
                      (s = Nf(e[a * t + o + 1], r)),
                      Sf[c | (f << 1) | (s << 2) | (l << 3)].forEach(p);
                  Sf[f | (s << 3)].forEach(p);
                }
                (o = -1), (s = e[a * t] >= r), Sf[s << 2].forEach(p);
                for (; ++o < t - 1; )
                  (l = s),
                    (s = Nf(e[a * t + o + 1], r)),
                    Sf[(s << 2) | (l << 3)].forEach(p);
                function p(t) {
                  var n,
                    e,
                    r = [t[0][0] + o, t[0][1] + a],
                    c = [t[1][0] + o, t[1][1] + a],
                    f = u(r),
                    s = u(c);
                  (n = d[f])
                    ? (e = h[s])
                      ? (delete d[n.end],
                        delete h[e.start],
                        n === e
                          ? (n.ring.push(c), i(n.ring))
                          : (h[n.start] = d[e.end] =
                              {
                                start: n.start,
                                end: e.end,
                                ring: n.ring.concat(e.ring),
                              }))
                      : (delete d[n.end], n.ring.push(c), (d[(n.end = s)] = n))
                    : (n = h[s])
                    ? (e = d[f])
                      ? (delete h[n.start],
                        delete d[e.end],
                        n === e
                          ? (n.ring.push(c), i(n.ring))
                          : (h[e.start] = d[n.end] =
                              {
                                start: e.start,
                                end: n.end,
                                ring: e.ring.concat(n.ring),
                              }))
                      : (delete h[n.start],
                        n.ring.unshift(r),
                        (h[(n.start = f)] = n))
                    : (h[f] = d[s] = { start: f, end: s, ring: [r, c] });
                }
                Sf[s << 3].forEach(p);
              })(e, o, function (t) {
                r(t, e, o),
                  (function (t) {
                    for (
                      var n = 0,
                        e = t.length,
                        r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1];
                      ++n < e;

                    )
                      r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
                    return r;
                  })(t) > 0
                    ? a.push([t])
                    : c.push(t);
              }),
              c.forEach(function (t) {
                for (var n, e = 0, r = a.length; e < r; ++e)
                  if (-1 !== xf((n = a[e])[0], t)) return void n.push(t);
              }),
              { type: "MultiPolygon", value: i, coordinates: a }
            );
          }
          function u(n) {
            return 2 * n[0] + n[1] * (t + 1) * 4;
          }
          function a(e, r, i) {
            e.forEach(function (e) {
              var o = e[0],
                u = e[1],
                a = 0 | o,
                c = 0 | u,
                f = kf(r[c * t + a]);
              o > 0 &&
                o < t &&
                a === o &&
                (e[0] = Cf(o, kf(r[c * t + a - 1]), f, i)),
                u > 0 &&
                  u < n &&
                  c === u &&
                  (e[1] = Cf(u, kf(r[(c - 1) * t + a]), f, i));
            });
          }
          return (
            (i.contour = o),
            (i.size = function (e) {
              if (!arguments.length) return [t, n];
              var r = Math.floor(e[0]),
                o = Math.floor(e[1]);
              if (!(r >= 0 && o >= 0)) throw new Error("invalid size");
              return (t = r), (n = o), i;
            }),
            (i.thresholds = function (t) {
              return arguments.length
                ? ((e =
                    "function" == typeof t
                      ? t
                      : Array.isArray(t)
                      ? bf(_f.call(t))
                      : bf(t)),
                  i)
                : e;
            }),
            (i.smooth = function (t) {
              return arguments.length ? ((r = t ? a : Af), i) : r === a;
            }),
            i
          );
        };
      function Ef(t) {
        return isFinite(t) ? t : NaN;
      }
      function Nf(t, n) {
        return null != t && +t >= n;
      }
      function kf(t) {
        return null == t || isNaN((t = +t)) ? -1 / 0 : t;
      }
      function Cf(t, n, e, r) {
        const i = r - n,
          o = e - n,
          u = isFinite(i) || isFinite(o) ? i / o : Math.sign(i) / Math.sign(o);
        return isNaN(u) ? t : t + u - 0.5;
      }
      function Pf(t) {
        return t[0];
      }
      function zf(t) {
        return t[1];
      }
      function $f() {
        return 1;
      }
      var Of = function () {
        var t = Pf,
          n = zf,
          e = $f,
          r = 960,
          i = 500,
          o = 20,
          u = 2,
          a = 3 * o,
          c = (r + 2 * a) >> u,
          f = (i + 2 * a) >> u,
          s = bf(20);
        function l(r) {
          var i = new Float32Array(c * f),
            s = Math.pow(2, -u),
            l = -1;
          for (const o of r) {
            var h = (t(o, ++l, r) + a) * s,
              d = (n(o, l, r) + a) * s,
              p = +e(o, l, r);
            if (p && h >= 0 && h < c && d >= 0 && d < f) {
              var g = Math.floor(h),
                y = Math.floor(d),
                _ = h - g - 0.5,
                m = d - y - 0.5;
              (i[g + y * c] += (1 - _) * (1 - m) * p),
                (i[g + 1 + y * c] += _ * (1 - m) * p),
                (i[g + 1 + (y + 1) * c] += _ * m * p),
                (i[g + (y + 1) * c] += (1 - _) * m * p);
            }
          }
          return v({ data: i, width: c, height: f }, o * s), i;
        }
        function h(t) {
          var n = l(t),
            e = s(n),
            r = Math.pow(2, 2 * u);
          return (
            Array.isArray(e) || (e = lt(Number.MIN_VALUE, vt(n) / r, e)),
            Tf()
              .size([c, f])
              .thresholds(e.map((t) => t * r))(n)
              .map((t, n) => ((t.value = +e[n]), d(t)))
          );
        }
        function d(t) {
          return t.coordinates.forEach(p), t;
        }
        function p(t) {
          t.forEach(g);
        }
        function g(t) {
          t.forEach(y);
        }
        function y(t) {
          (t[0] = t[0] * Math.pow(2, u) - a),
            (t[1] = t[1] * Math.pow(2, u) - a);
        }
        function _() {
          return (c = (r + 2 * (a = 3 * o)) >> u), (f = (i + 2 * a) >> u), h;
        }
        return (
          (h.contours = function (t) {
            var n = l(t),
              e = Tf().size([c, f]),
              r = Math.pow(2, 2 * u),
              i = (t) => {
                t = +t;
                var i = d(e.contour(n, t * r));
                return (i.value = t), i;
              };
            return Object.defineProperty(i, "max", { get: () => vt(n) / r }), i;
          }),
          (h.x = function (n) {
            return arguments.length
              ? ((t = "function" == typeof n ? n : bf(+n)), h)
              : t;
          }),
          (h.y = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : bf(+t)), h)
              : n;
          }),
          (h.weight = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : bf(+t)), h)
              : e;
          }),
          (h.size = function (t) {
            if (!arguments.length) return [r, i];
            var n = +t[0],
              e = +t[1];
            if (!(n >= 0 && e >= 0)) throw new Error("invalid size");
            return (r = n), (i = e), _();
          }),
          (h.cellSize = function (t) {
            if (!arguments.length) return 1 << u;
            if (!((t = +t) >= 1)) throw new Error("invalid cell size");
            return (u = Math.floor(Math.log(t) / Math.LN2)), _();
          }),
          (h.thresholds = function (t) {
            return arguments.length
              ? ((s =
                  "function" == typeof t
                    ? t
                    : Array.isArray(t)
                    ? bf(_f.call(t))
                    : bf(t)),
                h)
              : s;
          }),
          (h.bandwidth = function (t) {
            if (!arguments.length) return Math.sqrt(o * (o + 1));
            if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
            return (o = (Math.sqrt(4 * t * t + 1) - 1) / 2), _();
          }),
          h
        );
      };
      const Df = 134217729;
      function Rf(t, n, e, r, i) {
        let o,
          u,
          a,
          c,
          f = n[0],
          s = r[0],
          l = 0,
          h = 0;
        s > f == s > -f ? ((o = f), (f = n[++l])) : ((o = s), (s = r[++h]));
        let d = 0;
        if (l < t && h < e)
          for (
            s > f == s > -f
              ? ((u = f + o), (a = o - (u - f)), (f = n[++l]))
              : ((u = s + o), (a = o - (u - s)), (s = r[++h])),
              o = u,
              0 !== a && (i[d++] = a);
            l < t && h < e;

          )
            s > f == s > -f
              ? ((u = o + f),
                (c = u - o),
                (a = o - (u - c) + (f - c)),
                (f = n[++l]))
              : ((u = o + s),
                (c = u - o),
                (a = o - (u - c) + (s - c)),
                (s = r[++h])),
              (o = u),
              0 !== a && (i[d++] = a);
        for (; l < t; )
          (u = o + f),
            (c = u - o),
            (a = o - (u - c) + (f - c)),
            (f = n[++l]),
            (o = u),
            0 !== a && (i[d++] = a);
        for (; h < e; )
          (u = o + s),
            (c = u - o),
            (a = o - (u - c) + (s - c)),
            (s = r[++h]),
            (o = u),
            0 !== a && (i[d++] = a);
        return (0 === o && 0 !== d) || (i[d++] = o), d;
      }
      function jf(t, n) {
        let e = n[0];
        for (let r = 1; r < t; r++) e += n[r];
        return e;
      }
      function qf(t) {
        return new Float64Array(t);
      }
      const Ff = qf(4),
        Bf = qf(8),
        If = qf(12),
        Uf = qf(16),
        Lf = qf(4);
      function Yf(t, n, e, r, i, o) {
        const u = (n - o) * (e - i),
          a = (t - i) * (r - o),
          c = u - a;
        if (0 === u || 0 === a || u > 0 != a > 0) return c;
        const f = Math.abs(u + a);
        return Math.abs(c) >= 33306690738754716e-32 * f
          ? c
          : -(function (t, n, e, r, i, o, u) {
              let a, c, f, s, l, h, d, p, g, y, v, _, m, b, x, w, M, A;
              const S = t - i,
                T = e - i,
                E = n - o,
                N = r - o;
              (b = S * N),
                (h = Df * S),
                (d = h - (h - S)),
                (p = S - d),
                (h = Df * N),
                (g = h - (h - N)),
                (y = N - g),
                (x = p * y - (b - d * g - p * g - d * y)),
                (w = E * T),
                (h = Df * E),
                (d = h - (h - E)),
                (p = E - d),
                (h = Df * T),
                (g = h - (h - T)),
                (y = T - g),
                (M = p * y - (w - d * g - p * g - d * y)),
                (v = x - M),
                (l = x - v),
                (Ff[0] = x - (v + l) + (l - M)),
                (_ = b + v),
                (l = _ - b),
                (m = b - (_ - l) + (v - l)),
                (v = m - w),
                (l = m - v),
                (Ff[1] = m - (v + l) + (l - w)),
                (A = _ + v),
                (l = A - _),
                (Ff[2] = _ - (A - l) + (v - l)),
                (Ff[3] = A);
              let k = jf(4, Ff),
                C = 22204460492503146e-32 * u;
              if (k >= C || -k >= C) return k;
              if (
                ((l = t - S),
                (a = t - (S + l) + (l - i)),
                (l = e - T),
                (f = e - (T + l) + (l - i)),
                (l = n - E),
                (c = n - (E + l) + (l - o)),
                (l = r - N),
                (s = r - (N + l) + (l - o)),
                0 === a && 0 === c && 0 === f && 0 === s)
              )
                return k;
              if (
                ((C =
                  11093356479670487e-47 * u +
                  33306690738754706e-32 * Math.abs(k)),
                (k += S * s + N * a - (E * f + T * c)),
                k >= C || -k >= C)
              )
                return k;
              (b = a * N),
                (h = Df * a),
                (d = h - (h - a)),
                (p = a - d),
                (h = Df * N),
                (g = h - (h - N)),
                (y = N - g),
                (x = p * y - (b - d * g - p * g - d * y)),
                (w = c * T),
                (h = Df * c),
                (d = h - (h - c)),
                (p = c - d),
                (h = Df * T),
                (g = h - (h - T)),
                (y = T - g),
                (M = p * y - (w - d * g - p * g - d * y)),
                (v = x - M),
                (l = x - v),
                (Lf[0] = x - (v + l) + (l - M)),
                (_ = b + v),
                (l = _ - b),
                (m = b - (_ - l) + (v - l)),
                (v = m - w),
                (l = m - v),
                (Lf[1] = m - (v + l) + (l - w)),
                (A = _ + v),
                (l = A - _),
                (Lf[2] = _ - (A - l) + (v - l)),
                (Lf[3] = A);
              const P = Rf(4, Ff, 4, Lf, Bf);
              (b = S * s),
                (h = Df * S),
                (d = h - (h - S)),
                (p = S - d),
                (h = Df * s),
                (g = h - (h - s)),
                (y = s - g),
                (x = p * y - (b - d * g - p * g - d * y)),
                (w = E * f),
                (h = Df * E),
                (d = h - (h - E)),
                (p = E - d),
                (h = Df * f),
                (g = h - (h - f)),
                (y = f - g),
                (M = p * y - (w - d * g - p * g - d * y)),
                (v = x - M),
                (l = x - v),
                (Lf[0] = x - (v + l) + (l - M)),
                (_ = b + v),
                (l = _ - b),
                (m = b - (_ - l) + (v - l)),
                (v = m - w),
                (l = m - v),
                (Lf[1] = m - (v + l) + (l - w)),
                (A = _ + v),
                (l = A - _),
                (Lf[2] = _ - (A - l) + (v - l)),
                (Lf[3] = A);
              const z = Rf(P, Bf, 4, Lf, If);
              (b = a * s),
                (h = Df * a),
                (d = h - (h - a)),
                (p = a - d),
                (h = Df * s),
                (g = h - (h - s)),
                (y = s - g),
                (x = p * y - (b - d * g - p * g - d * y)),
                (w = c * f),
                (h = Df * c),
                (d = h - (h - c)),
                (p = c - d),
                (h = Df * f),
                (g = h - (h - f)),
                (y = f - g),
                (M = p * y - (w - d * g - p * g - d * y)),
                (v = x - M),
                (l = x - v),
                (Lf[0] = x - (v + l) + (l - M)),
                (_ = b + v),
                (l = _ - b),
                (m = b - (_ - l) + (v - l)),
                (v = m - w),
                (l = m - v),
                (Lf[1] = m - (v + l) + (l - w)),
                (A = _ + v),
                (l = A - _),
                (Lf[2] = _ - (A - l) + (v - l)),
                (Lf[3] = A);
              const $ = Rf(z, If, 4, Lf, Uf);
              return Uf[$ - 1];
            })(t, n, e, r, i, o, f);
      }
      qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(8),
        qf(8),
        qf(8),
        qf(4),
        qf(8),
        qf(8),
        qf(8),
        qf(12);
      qf(192), qf(192);
      qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(8),
        qf(8),
        qf(8),
        qf(8),
        qf(8),
        qf(8),
        qf(8),
        qf(8),
        qf(8),
        qf(4),
        qf(4),
        qf(4),
        qf(8),
        qf(16),
        qf(16),
        qf(16),
        qf(32),
        qf(32),
        qf(48),
        qf(64);
      qf(1152), qf(1152);
      qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(4),
        qf(24),
        qf(24),
        qf(24),
        qf(24),
        qf(24),
        qf(24),
        qf(24),
        qf(24),
        qf(24),
        qf(24),
        qf(1152),
        qf(1152),
        qf(1152),
        qf(1152),
        qf(1152),
        qf(2304),
        qf(2304),
        qf(3456),
        qf(5760),
        qf(8),
        qf(8),
        qf(8),
        qf(16),
        qf(24),
        qf(48),
        qf(48),
        qf(96),
        qf(192),
        qf(384),
        qf(384),
        qf(384),
        qf(768);
      qf(96), qf(96), qf(96), qf(1152);
      const Hf = Math.pow(2, -52),
        Xf = new Uint32Array(512);
      class Vf {
        static from(t, n = Qf, e = ts) {
          const r = t.length,
            i = new Float64Array(2 * r);
          for (let o = 0; o < r; o++) {
            const r = t[o];
            (i[2 * o] = n(r)), (i[2 * o + 1] = e(r));
          }
          return new Vf(i);
        }
        constructor(t) {
          const n = t.length >> 1;
          if (n > 0 && "number" != typeof t[0])
            throw new Error("Expected coords to contain numbers.");
          this.coords = t;
          const e = Math.max(2 * n - 5, 0);
          (this._triangles = new Uint32Array(3 * e)),
            (this._halfedges = new Int32Array(3 * e)),
            (this._hashSize = Math.ceil(Math.sqrt(n))),
            (this._hullPrev = new Uint32Array(n)),
            (this._hullNext = new Uint32Array(n)),
            (this._hullTri = new Uint32Array(n)),
            (this._hullHash = new Int32Array(this._hashSize).fill(-1)),
            (this._ids = new Uint32Array(n)),
            (this._dists = new Float64Array(n)),
            this.update();
        }
        update() {
          const {
              coords: t,
              _hullPrev: n,
              _hullNext: e,
              _hullTri: r,
              _hullHash: i,
            } = this,
            o = t.length >> 1;
          let u = 1 / 0,
            a = 1 / 0,
            c = -1 / 0,
            f = -1 / 0;
          for (let n = 0; n < o; n++) {
            const e = t[2 * n],
              r = t[2 * n + 1];
            e < u && (u = e),
              r < a && (a = r),
              e > c && (c = e),
              r > f && (f = r),
              (this._ids[n] = n);
          }
          const s = (u + c) / 2,
            l = (a + f) / 2;
          let h,
            d,
            p,
            g = 1 / 0;
          for (let n = 0; n < o; n++) {
            const e = Gf(s, l, t[2 * n], t[2 * n + 1]);
            e < g && ((h = n), (g = e));
          }
          const y = t[2 * h],
            v = t[2 * h + 1];
          g = 1 / 0;
          for (let n = 0; n < o; n++) {
            if (n === h) continue;
            const e = Gf(y, v, t[2 * n], t[2 * n + 1]);
            e < g && e > 0 && ((d = n), (g = e));
          }
          let _ = t[2 * d],
            m = t[2 * d + 1],
            b = 1 / 0;
          for (let n = 0; n < o; n++) {
            if (n === h || n === d) continue;
            const e = Zf(y, v, _, m, t[2 * n], t[2 * n + 1]);
            e < b && ((p = n), (b = e));
          }
          let x = t[2 * p],
            w = t[2 * p + 1];
          if (b === 1 / 0) {
            for (let n = 0; n < o; n++)
              this._dists[n] = t[2 * n] - t[0] || t[2 * n + 1] - t[1];
            Wf(this._ids, this._dists, 0, o - 1);
            const n = new Uint32Array(o);
            let e = 0;
            for (let t = 0, r = -1 / 0; t < o; t++) {
              const i = this._ids[t];
              this._dists[i] > r && ((n[e++] = i), (r = this._dists[i]));
            }
            return (
              (this.hull = n.subarray(0, e)),
              (this.triangles = new Uint32Array(0)),
              void (this.halfedges = new Uint32Array(0))
            );
          }
          if (Yf(y, v, _, m, x, w) < 0) {
            const t = d,
              n = _,
              e = m;
            (d = p), (_ = x), (m = w), (p = t), (x = n), (w = e);
          }
          const M = (function (t, n, e, r, i, o) {
            const u = e - t,
              a = r - n,
              c = i - t,
              f = o - n,
              s = u * u + a * a,
              l = c * c + f * f,
              h = 0.5 / (u * f - a * c);
            return { x: t + (f * s - a * l) * h, y: n + (u * l - c * s) * h };
          })(y, v, _, m, x, w);
          (this._cx = M.x), (this._cy = M.y);
          for (let n = 0; n < o; n++)
            this._dists[n] = Gf(t[2 * n], t[2 * n + 1], M.x, M.y);
          Wf(this._ids, this._dists, 0, o - 1), (this._hullStart = h);
          let A = 3;
          (e[h] = n[p] = d),
            (e[d] = n[h] = p),
            (e[p] = n[d] = h),
            (r[h] = 0),
            (r[d] = 1),
            (r[p] = 2),
            i.fill(-1),
            (i[this._hashKey(y, v)] = h),
            (i[this._hashKey(_, m)] = d),
            (i[this._hashKey(x, w)] = p),
            (this.trianglesLen = 0),
            this._addTriangle(h, d, p, -1, -1, -1);
          for (let o, u, a = 0; a < this._ids.length; a++) {
            const c = this._ids[a],
              f = t[2 * c],
              s = t[2 * c + 1];
            if (a > 0 && Math.abs(f - o) <= Hf && Math.abs(s - u) <= Hf)
              continue;
            if (((o = f), (u = s), c === h || c === d || c === p)) continue;
            let l = 0;
            for (
              let t = 0, n = this._hashKey(f, s);
              t < this._hashSize &&
              ((l = i[(n + t) % this._hashSize]), -1 === l || l === e[l]);
              t++
            );
            l = n[l];
            let g,
              y = l;
            for (
              ;
              (g = e[y]),
                Yf(f, s, t[2 * y], t[2 * y + 1], t[2 * g], t[2 * g + 1]) >= 0;

            )
              if (((y = g), y === l)) {
                y = -1;
                break;
              }
            if (-1 === y) continue;
            let v = this._addTriangle(y, c, e[y], -1, -1, r[y]);
            (r[c] = this._legalize(v + 2)), (r[y] = v), A++;
            let _ = e[y];
            for (
              ;
              (g = e[_]),
                Yf(f, s, t[2 * _], t[2 * _ + 1], t[2 * g], t[2 * g + 1]) < 0;

            )
              (v = this._addTriangle(_, c, g, r[c], -1, r[_])),
                (r[c] = this._legalize(v + 2)),
                (e[_] = _),
                A--,
                (_ = g);
            if (y === l)
              for (
                ;
                (g = n[y]),
                  Yf(f, s, t[2 * g], t[2 * g + 1], t[2 * y], t[2 * y + 1]) < 0;

              )
                (v = this._addTriangle(g, c, y, -1, r[y], r[g])),
                  this._legalize(v + 2),
                  (r[g] = v),
                  (e[y] = y),
                  A--,
                  (y = g);
            (this._hullStart = n[c] = y),
              (e[y] = n[_] = c),
              (e[c] = _),
              (i[this._hashKey(f, s)] = c),
              (i[this._hashKey(t[2 * y], t[2 * y + 1])] = y);
          }
          this.hull = new Uint32Array(A);
          for (let t = 0, n = this._hullStart; t < A; t++)
            (this.hull[t] = n), (n = e[n]);
          (this.triangles = this._triangles.subarray(0, this.trianglesLen)),
            (this.halfedges = this._halfedges.subarray(0, this.trianglesLen));
        }
        _hashKey(t, n) {
          return (
            Math.floor(
              (function (t, n) {
                const e = t / (Math.abs(t) + Math.abs(n));
                return (n > 0 ? 3 - e : 1 + e) / 4;
              })(t - this._cx, n - this._cy) * this._hashSize
            ) % this._hashSize
          );
        }
        _legalize(t) {
          const { _triangles: n, _halfedges: e, coords: r } = this;
          let i = 0,
            o = 0;
          for (;;) {
            const u = e[t],
              a = t - (t % 3);
            if (((o = a + ((t + 2) % 3)), -1 === u)) {
              if (0 === i) break;
              t = Xf[--i];
              continue;
            }
            const c = u - (u % 3),
              f = a + ((t + 1) % 3),
              s = c + ((u + 2) % 3),
              l = n[o],
              h = n[t],
              d = n[f],
              p = n[s];
            if (
              Jf(
                r[2 * l],
                r[2 * l + 1],
                r[2 * h],
                r[2 * h + 1],
                r[2 * d],
                r[2 * d + 1],
                r[2 * p],
                r[2 * p + 1]
              )
            ) {
              (n[t] = p), (n[u] = l);
              const r = e[s];
              if (-1 === r) {
                let n = this._hullStart;
                do {
                  if (this._hullTri[n] === s) {
                    this._hullTri[n] = t;
                    break;
                  }
                  n = this._hullPrev[n];
                } while (n !== this._hullStart);
              }
              this._link(t, r), this._link(u, e[o]), this._link(o, s);
              const a = c + ((u + 1) % 3);
              i < Xf.length && (Xf[i++] = a);
            } else {
              if (0 === i) break;
              t = Xf[--i];
            }
          }
          return o;
        }
        _link(t, n) {
          (this._halfedges[t] = n), -1 !== n && (this._halfedges[n] = t);
        }
        _addTriangle(t, n, e, r, i, o) {
          const u = this.trianglesLen;
          return (
            (this._triangles[u] = t),
            (this._triangles[u + 1] = n),
            (this._triangles[u + 2] = e),
            this._link(u, r),
            this._link(u + 1, i),
            this._link(u + 2, o),
            (this.trianglesLen += 3),
            u
          );
        }
      }
      function Gf(t, n, e, r) {
        const i = t - e,
          o = n - r;
        return i * i + o * o;
      }
      function Jf(t, n, e, r, i, o, u, a) {
        const c = t - u,
          f = n - a,
          s = e - u,
          l = r - a,
          h = i - u,
          d = o - a,
          p = s * s + l * l,
          g = h * h + d * d;
        return (
          c * (l * g - p * d) -
            f * (s * g - p * h) +
            (c * c + f * f) * (s * d - l * h) <
          0
        );
      }
      function Zf(t, n, e, r, i, o) {
        const u = e - t,
          a = r - n,
          c = i - t,
          f = o - n,
          s = u * u + a * a,
          l = c * c + f * f,
          h = 0.5 / (u * f - a * c),
          d = (f * s - a * l) * h,
          p = (u * l - c * s) * h;
        return d * d + p * p;
      }
      function Wf(t, n, e, r) {
        if (r - e <= 20)
          for (let i = e + 1; i <= r; i++) {
            const r = t[i],
              o = n[r];
            let u = i - 1;
            for (; u >= e && n[t[u]] > o; ) t[u + 1] = t[u--];
            t[u + 1] = r;
          }
        else {
          let i = e + 1,
            o = r;
          Kf(t, (e + r) >> 1, i),
            n[t[e]] > n[t[r]] && Kf(t, e, r),
            n[t[i]] > n[t[r]] && Kf(t, i, r),
            n[t[e]] > n[t[i]] && Kf(t, e, i);
          const u = t[i],
            a = n[u];
          for (;;) {
            do {
              i++;
            } while (n[t[i]] < a);
            do {
              o--;
            } while (n[t[o]] > a);
            if (o < i) break;
            Kf(t, i, o);
          }
          (t[e + 1] = t[o]),
            (t[o] = u),
            r - i + 1 >= o - e
              ? (Wf(t, n, i, r), Wf(t, n, e, o - 1))
              : (Wf(t, n, e, o - 1), Wf(t, n, i, r));
        }
      }
      function Kf(t, n, e) {
        const r = t[n];
        (t[n] = t[e]), (t[e] = r);
      }
      function Qf(t) {
        return t[0];
      }
      function ts(t) {
        return t[1];
      }
      class ns {
        constructor() {
          (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
        }
        moveTo(t, n) {
          this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +n)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        }
        lineTo(t, n) {
          this._ += `L${(this._x1 = +t)},${(this._y1 = +n)}`;
        }
        arc(t, n, e) {
          const r = (t = +t) + (e = +e),
            i = (n = +n);
          if (e < 0) throw new Error("negative radius");
          null === this._x1
            ? (this._ += `M${r},${i}`)
            : (Math.abs(this._x1 - r) > 1e-6 ||
                Math.abs(this._y1 - i) > 1e-6) &&
              (this._ += "L" + r + "," + i),
            e &&
              (this._ += `A${e},${e},0,1,1,${
                t - e
              },${n}A${e},${e},0,1,1,${(this._x1 = r)},${(this._y1 = i)}`);
        }
        rect(t, n, e, r) {
          this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +n)}h${+e}v${+r}h${-e}Z`;
        }
        value() {
          return this._ || null;
        }
      }
      class es {
        constructor() {
          this._ = [];
        }
        moveTo(t, n) {
          this._.push([t, n]);
        }
        closePath() {
          this._.push(this._[0].slice());
        }
        lineTo(t, n) {
          this._.push([t, n]);
        }
        value() {
          return this._.length ? this._ : null;
        }
      }
      class rs {
        constructor(t, [n, e, r, i] = [0, 0, 960, 500]) {
          if (!((r = +r) >= (n = +n) && (i = +i) >= (e = +e)))
            throw new Error("invalid bounds");
          (this.delaunay = t),
            (this._circumcenters = new Float64Array(2 * t.points.length)),
            (this.vectors = new Float64Array(2 * t.points.length)),
            (this.xmax = r),
            (this.xmin = n),
            (this.ymax = i),
            (this.ymin = e),
            this._init();
        }
        update() {
          return this.delaunay.update(), this._init(), this;
        }
        _init() {
          const {
            delaunay: { points: t, hull: n, triangles: e },
            vectors: r,
          } = this;
          let i, o;
          const u = (this.circumcenters = this._circumcenters.subarray(
            0,
            (e.length / 3) * 2
          ));
          for (let r, a, c = 0, f = 0, s = e.length; c < s; c += 3, f += 2) {
            const s = 2 * e[c],
              l = 2 * e[c + 1],
              h = 2 * e[c + 2],
              d = t[s],
              p = t[s + 1],
              g = t[l],
              y = t[l + 1],
              v = t[h],
              _ = t[h + 1],
              m = g - d,
              b = y - p,
              x = v - d,
              w = _ - p,
              M = 2 * (m * w - b * x);
            if (Math.abs(M) < 1e-9) {
              if (void 0 === i) {
                i = o = 0;
                for (const e of n) (i += t[2 * e]), (o += t[2 * e + 1]);
                (i /= n.length), (o /= n.length);
              }
              const e = 1e9 * Math.sign((i - d) * w - (o - p) * x);
              (r = (d + v) / 2 - e * w), (a = (p + _) / 2 + e * x);
            } else {
              const t = 1 / M,
                n = m * m + b * b,
                e = x * x + w * w;
              (r = d + (w * n - b * e) * t), (a = p + (m * e - x * n) * t);
            }
            (u[f] = r), (u[f + 1] = a);
          }
          let a,
            c,
            f,
            s = n[n.length - 1],
            l = 4 * s,
            h = t[2 * s],
            d = t[2 * s + 1];
          r.fill(0);
          for (let e = 0; e < n.length; ++e)
            (s = n[e]),
              (a = l),
              (c = h),
              (f = d),
              (l = 4 * s),
              (h = t[2 * s]),
              (d = t[2 * s + 1]),
              (r[a + 2] = r[l] = f - d),
              (r[a + 3] = r[l + 1] = h - c);
        }
        render(t) {
          const n = null == t ? (t = new ns()) : void 0,
            {
              delaunay: { halfedges: e, inedges: r, hull: i },
              circumcenters: o,
              vectors: u,
            } = this;
          if (i.length <= 1) return null;
          for (let n = 0, r = e.length; n < r; ++n) {
            const r = e[n];
            if (r < n) continue;
            const i = 2 * Math.floor(n / 3),
              u = 2 * Math.floor(r / 3),
              a = o[i],
              c = o[i + 1],
              f = o[u],
              s = o[u + 1];
            this._renderSegment(a, c, f, s, t);
          }
          let a,
            c = i[i.length - 1];
          for (let n = 0; n < i.length; ++n) {
            (a = c), (c = i[n]);
            const e = 2 * Math.floor(r[c] / 3),
              f = o[e],
              s = o[e + 1],
              l = 4 * a,
              h = this._project(f, s, u[l + 2], u[l + 3]);
            h && this._renderSegment(f, s, h[0], h[1], t);
          }
          return n && n.value();
        }
        renderBounds(t) {
          const n = null == t ? (t = new ns()) : void 0;
          return (
            t.rect(
              this.xmin,
              this.ymin,
              this.xmax - this.xmin,
              this.ymax - this.ymin
            ),
            n && n.value()
          );
        }
        renderCell(t, n) {
          const e = null == n ? (n = new ns()) : void 0,
            r = this._clip(t);
          if (null === r || !r.length) return;
          n.moveTo(r[0], r[1]);
          let i = r.length;
          for (; r[0] === r[i - 2] && r[1] === r[i - 1] && i > 1; ) i -= 2;
          for (let t = 2; t < i; t += 2)
            (r[t] === r[t - 2] && r[t + 1] === r[t - 1]) ||
              n.lineTo(r[t], r[t + 1]);
          return n.closePath(), e && e.value();
        }
        *cellPolygons() {
          const {
            delaunay: { points: t },
          } = this;
          for (let n = 0, e = t.length / 2; n < e; ++n) {
            const t = this.cellPolygon(n);
            t && ((t.index = n), yield t);
          }
        }
        cellPolygon(t) {
          const n = new es();
          return this.renderCell(t, n), n.value();
        }
        _renderSegment(t, n, e, r, i) {
          let o;
          const u = this._regioncode(t, n),
            a = this._regioncode(e, r);
          0 === u && 0 === a
            ? (i.moveTo(t, n), i.lineTo(e, r))
            : (o = this._clipSegment(t, n, e, r, u, a)) &&
              (i.moveTo(o[0], o[1]), i.lineTo(o[2], o[3]));
        }
        contains(t, n, e) {
          return (
            (n = +n) == n && (e = +e) == e && this.delaunay._step(t, n, e) === t
          );
        }
        *neighbors(t) {
          const n = this._clip(t);
          if (n)
            for (const e of this.delaunay.neighbors(t)) {
              const t = this._clip(e);
              if (t)
                t: for (let r = 0, i = n.length; r < i; r += 2)
                  for (let o = 0, u = t.length; o < u; o += 2)
                    if (
                      n[r] === t[o] &&
                      n[r + 1] === t[o + 1] &&
                      n[(r + 2) % i] === t[(o + u - 2) % u] &&
                      n[(r + 3) % i] === t[(o + u - 1) % u]
                    ) {
                      yield e;
                      break t;
                    }
            }
        }
        _cell(t) {
          const {
              circumcenters: n,
              delaunay: { inedges: e, halfedges: r, triangles: i },
            } = this,
            o = e[t];
          if (-1 === o) return null;
          const u = [];
          let a = o;
          do {
            const e = Math.floor(a / 3);
            if (
              (u.push(n[2 * e], n[2 * e + 1]),
              (a = a % 3 == 2 ? a - 2 : a + 1),
              i[a] !== t)
            )
              break;
            a = r[a];
          } while (a !== o && -1 !== a);
          return u;
        }
        _clip(t) {
          if (0 === t && 1 === this.delaunay.hull.length)
            return [
              this.xmax,
              this.ymin,
              this.xmax,
              this.ymax,
              this.xmin,
              this.ymax,
              this.xmin,
              this.ymin,
            ];
          const n = this._cell(t);
          if (null === n) return null;
          const { vectors: e } = this,
            r = 4 * t;
          return this._simplify(
            e[r] || e[r + 1]
              ? this._clipInfinite(t, n, e[r], e[r + 1], e[r + 2], e[r + 3])
              : this._clipFinite(t, n)
          );
        }
        _clipFinite(t, n) {
          const e = n.length;
          let r,
            i,
            o,
            u,
            a = null,
            c = n[e - 2],
            f = n[e - 1],
            s = this._regioncode(c, f),
            l = 0;
          for (let h = 0; h < e; h += 2)
            if (
              ((r = c),
              (i = f),
              (c = n[h]),
              (f = n[h + 1]),
              (o = s),
              (s = this._regioncode(c, f)),
              0 === o && 0 === s)
            )
              (u = l), (l = 0), a ? a.push(c, f) : (a = [c, f]);
            else {
              let n, e, h, d, p;
              if (0 === o) {
                if (null === (n = this._clipSegment(r, i, c, f, o, s)))
                  continue;
                [e, h, d, p] = n;
              } else {
                if (null === (n = this._clipSegment(c, f, r, i, s, o)))
                  continue;
                ([d, p, e, h] = n),
                  (u = l),
                  (l = this._edgecode(e, h)),
                  u && l && this._edge(t, u, l, a, a.length),
                  a ? a.push(e, h) : (a = [e, h]);
              }
              (u = l),
                (l = this._edgecode(d, p)),
                u && l && this._edge(t, u, l, a, a.length),
                a ? a.push(d, p) : (a = [d, p]);
            }
          if (a)
            (u = l),
              (l = this._edgecode(a[0], a[1])),
              u && l && this._edge(t, u, l, a, a.length);
          else if (
            this.contains(
              t,
              (this.xmin + this.xmax) / 2,
              (this.ymin + this.ymax) / 2
            )
          )
            return [
              this.xmax,
              this.ymin,
              this.xmax,
              this.ymax,
              this.xmin,
              this.ymax,
              this.xmin,
              this.ymin,
            ];
          return a;
        }
        _clipSegment(t, n, e, r, i, o) {
          const u = i < o;
          for (u && ([t, n, e, r, i, o] = [e, r, t, n, o, i]); ; ) {
            if (0 === i && 0 === o) return u ? [e, r, t, n] : [t, n, e, r];
            if (i & o) return null;
            let a,
              c,
              f = i || o;
            8 & f
              ? ((a = t + ((e - t) * (this.ymax - n)) / (r - n)),
                (c = this.ymax))
              : 4 & f
              ? ((a = t + ((e - t) * (this.ymin - n)) / (r - n)),
                (c = this.ymin))
              : 2 & f
              ? ((c = n + ((r - n) * (this.xmax - t)) / (e - t)),
                (a = this.xmax))
              : ((c = n + ((r - n) * (this.xmin - t)) / (e - t)),
                (a = this.xmin)),
              i
                ? ((t = a), (n = c), (i = this._regioncode(t, n)))
                : ((e = a), (r = c), (o = this._regioncode(e, r)));
          }
        }
        _clipInfinite(t, n, e, r, i, o) {
          let u,
            a = Array.from(n);
          if (
            ((u = this._project(a[0], a[1], e, r)) && a.unshift(u[0], u[1]),
            (u = this._project(a[a.length - 2], a[a.length - 1], i, o)) &&
              a.push(u[0], u[1]),
            (a = this._clipFinite(t, a)))
          )
            for (
              let n,
                e = 0,
                r = a.length,
                i = this._edgecode(a[r - 2], a[r - 1]);
              e < r;
              e += 2
            )
              (n = i),
                (i = this._edgecode(a[e], a[e + 1])),
                n && i && ((e = this._edge(t, n, i, a, e)), (r = a.length));
          else
            this.contains(
              t,
              (this.xmin + this.xmax) / 2,
              (this.ymin + this.ymax) / 2
            ) &&
              (a = [
                this.xmin,
                this.ymin,
                this.xmax,
                this.ymin,
                this.xmax,
                this.ymax,
                this.xmin,
                this.ymax,
              ]);
          return a;
        }
        _edge(t, n, e, r, i) {
          for (; n !== e; ) {
            let e, o;
            switch (n) {
              case 5:
                n = 4;
                continue;
              case 4:
                (n = 6), (e = this.xmax), (o = this.ymin);
                break;
              case 6:
                n = 2;
                continue;
              case 2:
                (n = 10), (e = this.xmax), (o = this.ymax);
                break;
              case 10:
                n = 8;
                continue;
              case 8:
                (n = 9), (e = this.xmin), (o = this.ymax);
                break;
              case 9:
                n = 1;
                continue;
              case 1:
                (n = 5), (e = this.xmin), (o = this.ymin);
            }
            (r[i] === e && r[i + 1] === o) ||
              !this.contains(t, e, o) ||
              (r.splice(i, 0, e, o), (i += 2));
          }
          return i;
        }
        _project(t, n, e, r) {
          let i,
            o,
            u,
            a = 1 / 0;
          if (r < 0) {
            if (n <= this.ymin) return null;
            (i = (this.ymin - n) / r) < a &&
              ((u = this.ymin), (o = t + (a = i) * e));
          } else if (r > 0) {
            if (n >= this.ymax) return null;
            (i = (this.ymax - n) / r) < a &&
              ((u = this.ymax), (o = t + (a = i) * e));
          }
          if (e > 0) {
            if (t >= this.xmax) return null;
            (i = (this.xmax - t) / e) < a &&
              ((o = this.xmax), (u = n + (a = i) * r));
          } else if (e < 0) {
            if (t <= this.xmin) return null;
            (i = (this.xmin - t) / e) < a &&
              ((o = this.xmin), (u = n + (a = i) * r));
          }
          return [o, u];
        }
        _edgecode(t, n) {
          return (
            (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) |
            (n === this.ymin ? 4 : n === this.ymax ? 8 : 0)
          );
        }
        _regioncode(t, n) {
          return (
            (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) |
            (n < this.ymin ? 4 : n > this.ymax ? 8 : 0)
          );
        }
        _simplify(t) {
          if (t && t.length > 4) {
            for (let n = 0; n < t.length; n += 2) {
              const e = (n + 2) % t.length,
                r = (n + 4) % t.length;
              ((t[n] === t[e] && t[e] === t[r]) ||
                (t[n + 1] === t[e + 1] && t[e + 1] === t[r + 1])) &&
                (t.splice(e, 2), (n -= 2));
            }
            t.length || (t = null);
          }
          return t;
        }
      }
      const is = 2 * Math.PI,
        os = Math.pow;
      function us(t) {
        return t[0];
      }
      function as(t) {
        return t[1];
      }
      function cs(t, n, e) {
        return [t + Math.sin(t + n) * e, n + Math.cos(t - n) * e];
      }
      class fs {
        static from(t, n = us, e = as, r) {
          return new fs(
            "length" in t
              ? (function (t, n, e, r) {
                  const i = t.length,
                    o = new Float64Array(2 * i);
                  for (let u = 0; u < i; ++u) {
                    const i = t[u];
                    (o[2 * u] = n.call(r, i, u, t)),
                      (o[2 * u + 1] = e.call(r, i, u, t));
                  }
                  return o;
                })(t, n, e, r)
              : Float64Array.from(
                  (function* (t, n, e, r) {
                    let i = 0;
                    for (const o of t)
                      yield n.call(r, o, i, t), yield e.call(r, o, i, t), ++i;
                  })(t, n, e, r)
                )
          );
        }
        constructor(t) {
          (this._delaunator = new Vf(t)),
            (this.inedges = new Int32Array(t.length / 2)),
            (this._hullIndex = new Int32Array(t.length / 2)),
            (this.points = this._delaunator.coords),
            this._init();
        }
        update() {
          return this._delaunator.update(), this._init(), this;
        }
        _init() {
          const t = this._delaunator,
            n = this.points;
          if (
            t.hull &&
            t.hull.length > 2 &&
            (function (t) {
              const { triangles: n, coords: e } = t;
              for (let t = 0; t < n.length; t += 3) {
                const r = 2 * n[t],
                  i = 2 * n[t + 1],
                  o = 2 * n[t + 2];
                if (
                  (e[o] - e[r]) * (e[i + 1] - e[r + 1]) -
                    (e[i] - e[r]) * (e[o + 1] - e[r + 1]) >
                  1e-10
                )
                  return !1;
              }
              return !0;
            })(t)
          ) {
            this.collinear = Int32Array.from(
              { length: n.length / 2 },
              (t, n) => n
            ).sort(
              (t, e) => n[2 * t] - n[2 * e] || n[2 * t + 1] - n[2 * e + 1]
            );
            const t = this.collinear[0],
              e = this.collinear[this.collinear.length - 1],
              r = [n[2 * t], n[2 * t + 1], n[2 * e], n[2 * e + 1]],
              i = 1e-8 * Math.hypot(r[3] - r[1], r[2] - r[0]);
            for (let t = 0, e = n.length / 2; t < e; ++t) {
              const e = cs(n[2 * t], n[2 * t + 1], i);
              (n[2 * t] = e[0]), (n[2 * t + 1] = e[1]);
            }
            this._delaunator = new Vf(n);
          } else delete this.collinear;
          const e = (this.halfedges = this._delaunator.halfedges),
            r = (this.hull = this._delaunator.hull),
            i = (this.triangles = this._delaunator.triangles),
            o = this.inedges.fill(-1),
            u = this._hullIndex.fill(-1);
          for (let t = 0, n = e.length; t < n; ++t) {
            const n = i[t % 3 == 2 ? t - 2 : t + 1];
            (-1 !== e[t] && -1 !== o[n]) || (o[n] = t);
          }
          for (let t = 0, n = r.length; t < n; ++t) u[r[t]] = t;
          r.length <= 2 &&
            r.length > 0 &&
            ((this.triangles = new Int32Array(3).fill(-1)),
            (this.halfedges = new Int32Array(3).fill(-1)),
            (this.triangles[0] = r[0]),
            (o[r[0]] = 1),
            2 === r.length &&
              ((o[r[1]] = 0),
              (this.triangles[1] = r[1]),
              (this.triangles[2] = r[1])));
        }
        voronoi(t) {
          return new rs(this, t);
        }
        *neighbors(t) {
          const {
            inedges: n,
            hull: e,
            _hullIndex: r,
            halfedges: i,
            triangles: o,
            collinear: u,
          } = this;
          if (u) {
            const n = u.indexOf(t);
            return (
              n > 0 && (yield u[n - 1]),
              void (n < u.length - 1 && (yield u[n + 1]))
            );
          }
          const a = n[t];
          if (-1 === a) return;
          let c = a,
            f = -1;
          do {
            if (
              (yield (f = o[c]), (c = c % 3 == 2 ? c - 2 : c + 1), o[c] !== t)
            )
              return;
            if (((c = i[c]), -1 === c)) {
              const n = e[(r[t] + 1) % e.length];
              return void (n !== f && (yield n));
            }
          } while (c !== a);
        }
        find(t, n, e = 0) {
          if ((t = +t) != t || (n = +n) != n) return -1;
          const r = e;
          let i;
          for (; (i = this._step(e, t, n)) >= 0 && i !== e && i !== r; ) e = i;
          return i;
        }
        _step(t, n, e) {
          const {
            inedges: r,
            hull: i,
            _hullIndex: o,
            halfedges: u,
            triangles: a,
            points: c,
          } = this;
          if (-1 === r[t] || !c.length) return (t + 1) % (c.length >> 1);
          let f = t,
            s = os(n - c[2 * t], 2) + os(e - c[2 * t + 1], 2);
          const l = r[t];
          let h = l;
          do {
            let r = a[h];
            const l = os(n - c[2 * r], 2) + os(e - c[2 * r + 1], 2);
            if (
              (l < s && ((s = l), (f = r)),
              (h = h % 3 == 2 ? h - 2 : h + 1),
              a[h] !== t)
            )
              break;
            if (((h = u[h]), -1 === h)) {
              if (
                ((h = i[(o[t] + 1) % i.length]),
                h !== r && os(n - c[2 * h], 2) + os(e - c[2 * h + 1], 2) < s)
              )
                return h;
              break;
            }
          } while (h !== l);
          return f;
        }
        render(t) {
          const n = null == t ? (t = new ns()) : void 0,
            { points: e, halfedges: r, triangles: i } = this;
          for (let n = 0, o = r.length; n < o; ++n) {
            const o = r[n];
            if (o < n) continue;
            const u = 2 * i[n],
              a = 2 * i[o];
            t.moveTo(e[u], e[u + 1]), t.lineTo(e[a], e[a + 1]);
          }
          return this.renderHull(t), n && n.value();
        }
        renderPoints(t, n) {
          void 0 !== n ||
            (t && "function" == typeof t.moveTo) ||
            ((n = t), (t = null)),
            (n = null == n ? 2 : +n);
          const e = null == t ? (t = new ns()) : void 0,
            { points: r } = this;
          for (let e = 0, i = r.length; e < i; e += 2) {
            const i = r[e],
              o = r[e + 1];
            t.moveTo(i + n, o), t.arc(i, o, n, 0, is);
          }
          return e && e.value();
        }
        renderHull(t) {
          const n = null == t ? (t = new ns()) : void 0,
            { hull: e, points: r } = this,
            i = 2 * e[0],
            o = e.length;
          t.moveTo(r[i], r[i + 1]);
          for (let n = 1; n < o; ++n) {
            const i = 2 * e[n];
            t.lineTo(r[i], r[i + 1]);
          }
          return t.closePath(), n && n.value();
        }
        hullPolygon() {
          const t = new es();
          return this.renderHull(t), t.value();
        }
        renderTriangle(t, n) {
          const e = null == n ? (n = new ns()) : void 0,
            { points: r, triangles: i } = this,
            o = 2 * i[(t *= 3)],
            u = 2 * i[t + 1],
            a = 2 * i[t + 2];
          return (
            n.moveTo(r[o], r[o + 1]),
            n.lineTo(r[u], r[u + 1]),
            n.lineTo(r[a], r[a + 1]),
            n.closePath(),
            e && e.value()
          );
        }
        *trianglePolygons() {
          const { triangles: t } = this;
          for (let n = 0, e = t.length / 3; n < e; ++n)
            yield this.trianglePolygon(n);
        }
        trianglePolygon(t) {
          const n = new es();
          return this.renderTriangle(t, n), n.value();
        }
      }
      var ss = function (t, n) {
          if (
            ((t = (function (t) {
              let n;
              for (; (n = t.sourceEvent); ) t = n;
              return t;
            })(t)),
            void 0 === n && (n = t.currentTarget),
            n)
          ) {
            var e = n.ownerSVGElement || n;
            if (e.createSVGPoint) {
              var r = e.createSVGPoint();
              return (
                (r.x = t.clientX),
                (r.y = t.clientY),
                [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
              );
            }
            if (n.getBoundingClientRect) {
              var i = n.getBoundingClientRect();
              return [
                t.clientX - i.left - n.clientLeft,
                t.clientY - i.top - n.clientTop,
              ];
            }
          }
          return [t.pageX, t.pageY];
        },
        ls = (t) => () => t;
      function hs(
        t,
        {
          sourceEvent: n,
          subject: e,
          target: r,
          identifier: i,
          active: o,
          x: u,
          y: a,
          dx: c,
          dy: f,
          dispatch: s,
        }
      ) {
        Object.defineProperties(this, {
          type: { value: t, enumerable: !0, configurable: !0 },
          sourceEvent: { value: n, enumerable: !0, configurable: !0 },
          subject: { value: e, enumerable: !0, configurable: !0 },
          target: { value: r, enumerable: !0, configurable: !0 },
          identifier: { value: i, enumerable: !0, configurable: !0 },
          active: { value: o, enumerable: !0, configurable: !0 },
          x: { value: u, enumerable: !0, configurable: !0 },
          y: { value: a, enumerable: !0, configurable: !0 },
          dx: { value: c, enumerable: !0, configurable: !0 },
          dy: { value: f, enumerable: !0, configurable: !0 },
          _: { value: s },
        });
      }
      function ds(t) {
        return !t.ctrlKey && !t.button;
      }
      function ps() {
        return this.parentNode;
      }
      function gs(t, n) {
        return null == n ? { x: t.x, y: t.y } : n;
      }
      function ys() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      hs.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t;
      };
      var vs = function () {
          var t,
            n,
            e,
            r,
            i = ds,
            o = ps,
            u = gs,
            a = ys,
            c = {},
            f = Tn("start", "drag", "end"),
            s = 0,
            l = 0;
          function h(t) {
            t.on("mousedown.drag", d)
              .filter(a)
              .on("touchstart.drag", y)
              .on("touchmove.drag", v, Be)
              .on("touchend.drag touchcancel.drag", _)
              .style("touch-action", "none")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          function d(u, a) {
            if (!r && i.call(this, u, a)) {
              var c = m(this, o.call(this, u, a), u, a, "mouse");
              c &&
                (Fe(u.view)
                  .on("mousemove.drag", p, Ie)
                  .on("mouseup.drag", g, Ie),
                Ye(u.view),
                Ue(u),
                (e = !1),
                (t = u.clientX),
                (n = u.clientY),
                c("start", u));
            }
          }
          function p(r) {
            if ((Le(r), !e)) {
              var i = r.clientX - t,
                o = r.clientY - n;
              e = i * i + o * o > l;
            }
            c.mouse("drag", r);
          }
          function g(t) {
            Fe(t.view).on("mousemove.drag mouseup.drag", null),
              He(t.view, e),
              Le(t),
              c.mouse("end", t);
          }
          function y(t, n) {
            if (i.call(this, t, n)) {
              var e,
                r,
                u = t.changedTouches,
                a = o.call(this, t, n),
                c = u.length;
              for (e = 0; e < c; ++e)
                (r = m(this, a, t, n, u[e].identifier, u[e])) &&
                  (Ue(t), r("start", t, u[e]));
            }
          }
          function v(t) {
            var n,
              e,
              r = t.changedTouches,
              i = r.length;
            for (n = 0; n < i; ++n)
              (e = c[r[n].identifier]) && (Le(t), e("drag", t, r[n]));
          }
          function _(t) {
            var n,
              e,
              i = t.changedTouches,
              o = i.length;
            for (
              r && clearTimeout(r),
                r = setTimeout(function () {
                  r = null;
                }, 500),
                n = 0;
              n < o;
              ++n
            )
              (e = c[i[n].identifier]) && (Ue(t), e("end", t, i[n]));
          }
          function m(t, n, e, r, i, o) {
            var a,
              l,
              d,
              p = f.copy(),
              g = ss(o || e, n);
            if (
              null !=
              (d = u.call(
                t,
                new hs("beforestart", {
                  sourceEvent: e,
                  target: h,
                  identifier: i,
                  active: s,
                  x: g[0],
                  y: g[1],
                  dx: 0,
                  dy: 0,
                  dispatch: p,
                }),
                r
              ))
            )
              return (
                (a = d.x - g[0] || 0),
                (l = d.y - g[1] || 0),
                function e(o, u, f) {
                  var y,
                    v = g;
                  switch (o) {
                    case "start":
                      (c[i] = e), (y = s++);
                      break;
                    case "end":
                      delete c[i], --s;
                    case "drag":
                      (g = ss(f || u, n)), (y = s);
                  }
                  p.call(
                    o,
                    t,
                    new hs(o, {
                      sourceEvent: u,
                      subject: d,
                      target: h,
                      identifier: i,
                      active: y,
                      x: g[0] + a,
                      y: g[1] + l,
                      dx: g[0] - v[0],
                      dy: g[1] - v[1],
                      dispatch: p,
                    }),
                    r
                  );
                }
              );
          }
          return (
            (h.filter = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : ls(!!t)), h)
                : i;
            }),
            (h.container = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : ls(t)), h)
                : o;
            }),
            (h.subject = function (t) {
              return arguments.length
                ? ((u = "function" == typeof t ? t : ls(t)), h)
                : u;
            }),
            (h.touchable = function (t) {
              return arguments.length
                ? ((a = "function" == typeof t ? t : ls(!!t)), h)
                : a;
            }),
            (h.on = function () {
              var t = f.on.apply(f, arguments);
              return t === f ? h : t;
            }),
            (h.clickDistance = function (t) {
              return arguments.length ? ((l = (t = +t) * t), h) : Math.sqrt(l);
            }),
            h
          );
        },
        _s = {},
        ms = {};
      function bs(t) {
        return new Function(
          "d",
          "return {" +
            t
              .map(function (t, n) {
                return JSON.stringify(t) + ": d[" + n + '] || ""';
              })
              .join(",") +
            "}"
        );
      }
      function xs(t) {
        var n = Object.create(null),
          e = [];
        return (
          t.forEach(function (t) {
            for (var r in t) r in n || e.push((n[r] = r));
          }),
          e
        );
      }
      function ws(t, n) {
        var e = t + "",
          r = e.length;
        return r < n ? new Array(n - r + 1).join(0) + e : e;
      }
      function Ms(t) {
        var n,
          e = t.getUTCHours(),
          r = t.getUTCMinutes(),
          i = t.getUTCSeconds(),
          o = t.getUTCMilliseconds();
        return isNaN(t)
          ? "Invalid Date"
          : ((n = t.getUTCFullYear()) < 0
              ? "-" + ws(-n, 6)
              : n > 9999
              ? "+" + ws(n, 6)
              : ws(n, 4)) +
              "-" +
              ws(t.getUTCMonth() + 1, 2) +
              "-" +
              ws(t.getUTCDate(), 2) +
              (o
                ? "T" +
                  ws(e, 2) +
                  ":" +
                  ws(r, 2) +
                  ":" +
                  ws(i, 2) +
                  "." +
                  ws(o, 3) +
                  "Z"
                : i
                ? "T" + ws(e, 2) + ":" + ws(r, 2) + ":" + ws(i, 2) + "Z"
                : r || e
                ? "T" + ws(e, 2) + ":" + ws(r, 2) + "Z"
                : "");
      }
      var As = function (t) {
          var n = new RegExp('["' + t + "\n\r]"),
            e = t.charCodeAt(0);
          function r(t, n) {
            var r,
              i = [],
              o = t.length,
              u = 0,
              a = 0,
              c = o <= 0,
              f = !1;
            function s() {
              if (c) return ms;
              if (f) return (f = !1), _s;
              var n,
                r,
                i = u;
              if (34 === t.charCodeAt(i)) {
                for (
                  ;
                  (u++ < o && 34 !== t.charCodeAt(u)) ||
                  34 === t.charCodeAt(++u);

                );
                return (
                  (n = u) >= o
                    ? (c = !0)
                    : 10 === (r = t.charCodeAt(u++))
                    ? (f = !0)
                    : 13 === r && ((f = !0), 10 === t.charCodeAt(u) && ++u),
                  t.slice(i + 1, n - 1).replace(/""/g, '"')
                );
              }
              for (; u < o; ) {
                if (10 === (r = t.charCodeAt((n = u++)))) f = !0;
                else if (13 === r) (f = !0), 10 === t.charCodeAt(u) && ++u;
                else if (r !== e) continue;
                return t.slice(i, n);
              }
              return (c = !0), t.slice(i, o);
            }
            for (
              10 === t.charCodeAt(o - 1) && --o,
                13 === t.charCodeAt(o - 1) && --o;
              (r = s()) !== ms;

            ) {
              for (var l = []; r !== _s && r !== ms; ) l.push(r), (r = s());
              (n && null == (l = n(l, a++))) || i.push(l);
            }
            return i;
          }
          function i(n, e) {
            return n.map(function (n) {
              return e
                .map(function (t) {
                  return u(n[t]);
                })
                .join(t);
            });
          }
          function o(n) {
            return n.map(u).join(t);
          }
          function u(t) {
            return null == t
              ? ""
              : t instanceof Date
              ? Ms(t)
              : n.test((t += ""))
              ? '"' + t.replace(/"/g, '""') + '"'
              : t;
          }
          return {
            parse: function (t, n) {
              var e,
                i,
                o = r(t, function (t, r) {
                  if (e) return e(t, r - 1);
                  (i = t),
                    (e = n
                      ? (function (t, n) {
                          var e = bs(t);
                          return function (r, i) {
                            return n(e(r), i, t);
                          };
                        })(t, n)
                      : bs(t));
                });
              return (o.columns = i || []), o;
            },
            parseRows: r,
            format: function (n, e) {
              return (
                null == e && (e = xs(n)),
                [e.map(u).join(t)].concat(i(n, e)).join("\n")
              );
            },
            formatBody: function (t, n) {
              return null == n && (n = xs(t)), i(t, n).join("\n");
            },
            formatRows: function (t) {
              return t.map(o).join("\n");
            },
            formatRow: o,
            formatValue: u,
          };
        },
        Ss = As(","),
        Ts = Ss.parse,
        Es = Ss.parseRows,
        Ns = Ss.format,
        ks = Ss.formatBody,
        Cs = Ss.formatRows,
        Ps = Ss.formatRow,
        zs = Ss.formatValue,
        $s = As("\t"),
        Os = $s.parse,
        Ds = $s.parseRows,
        Rs = $s.format,
        js = $s.formatBody,
        qs = $s.formatRows,
        Fs = $s.formatRow,
        Bs = $s.formatValue;
      function Is(t) {
        for (var n in t) {
          var e,
            r,
            i = t[n].trim();
          if (i)
            if ("true" === i) i = !0;
            else if ("false" === i) i = !1;
            else if ("NaN" === i) i = NaN;
            else if (isNaN((e = +i))) {
              if (
                !(r = i.match(
                  /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/
                ))
              )
                continue;
              Us &&
                r[4] &&
                !r[7] &&
                (i = i.replace(/-/g, "/").replace(/T/, " ")),
                (i = new Date(i));
            } else i = e;
          else i = null;
          t[n] = i;
        }
        return t;
      }
      const Us =
          new Date("2019-01-01T00:00").getHours() ||
          new Date("2019-07-01T00:00").getHours(),
        Ls = (t) => +t;
      function Ys(t) {
        return t * t;
      }
      function Hs(t) {
        return t * (2 - t);
      }
      function Xs(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
      }
      var Vs = (function t(n) {
          function e(t) {
            return Math.pow(t, n);
          }
          return (n = +n), (e.exponent = t), e;
        })(3),
        Gs = (function t(n) {
          function e(t) {
            return 1 - Math.pow(1 - t, n);
          }
          return (n = +n), (e.exponent = t), e;
        })(3),
        Js = (function t(n) {
          function e(t) {
            return (
              ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            );
          }
          return (n = +n), (e.exponent = t), e;
        })(3),
        Zs = Math.PI,
        Ws = Zs / 2;
      function Ks(t) {
        return 1 == +t ? 1 : 1 - Math.cos(t * Ws);
      }
      function Qs(t) {
        return Math.sin(t * Ws);
      }
      function tl(t) {
        return (1 - Math.cos(Zs * t)) / 2;
      }
      function nl(t) {
        return 1.0009775171065494 * (Math.pow(2, -10 * t) - 0.0009765625);
      }
      function el(t) {
        return nl(1 - +t);
      }
      function rl(t) {
        return 1 - nl(t);
      }
      function il(t) {
        return ((t *= 2) <= 1 ? nl(1 - t) : 2 - nl(t - 1)) / 2;
      }
      function ol(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function ul(t) {
        return Math.sqrt(1 - --t * t);
      }
      function al(t) {
        return (
          ((t *= 2) <= 1
            ? 1 - Math.sqrt(1 - t * t)
            : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
        );
      }
      function cl(t) {
        return 1 - fl(1 - t);
      }
      function fl(t) {
        return (t = +t) < 4 / 11
          ? 7.5625 * t * t
          : t < 8 / 11
          ? 7.5625 * (t -= 6 / 11) * t + 3 / 4
          : t < 10 / 11
          ? 7.5625 * (t -= 9 / 11) * t + 15 / 16
          : 7.5625 * (t -= 21 / 22) * t + 63 / 64;
      }
      function sl(t) {
        return ((t *= 2) <= 1 ? 1 - fl(1 - t) : fl(t - 1) + 1) / 2;
      }
      var ll = (function t(n) {
          function e(t) {
            return (t = +t) * t * (n * (t - 1) + t);
          }
          return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        hl = (function t(n) {
          function e(t) {
            return --t * t * ((t + 1) * n + t) + 1;
          }
          return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        dl = (function t(n) {
          function e(t) {
            return (
              ((t *= 2) < 1
                ? t * t * ((n + 1) * t - n)
                : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            );
          }
          return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        pl = 2 * Math.PI,
        gl = (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= pl);
          function i(t) {
            return n * nl(-(--t)) * Math.sin((r - t) / e);
          }
          return (
            (i.amplitude = function (n) {
              return t(n, e * pl);
            }),
            (i.period = function (e) {
              return t(n, e);
            }),
            i
          );
        })(1, 0.3),
        yl = (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= pl);
          function i(t) {
            return 1 - n * nl((t = +t)) * Math.sin((t + r) / e);
          }
          return (
            (i.amplitude = function (n) {
              return t(n, e * pl);
            }),
            (i.period = function (e) {
              return t(n, e);
            }),
            i
          );
        })(1, 0.3),
        vl = (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= pl);
          function i(t) {
            return (
              ((t = 2 * t - 1) < 0
                ? n * nl(-t) * Math.sin((r - t) / e)
                : 2 - n * nl(t) * Math.sin((r + t) / e)) / 2
            );
          }
          return (
            (i.amplitude = function (n) {
              return t(n, e * pl);
            }),
            (i.period = function (e) {
              return t(n, e);
            }),
            i
          );
        })(1, 0.3);
      function _l(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.blob();
      }
      var ml = function (t, n) {
        return fetch(t, n).then(_l);
      };
      function bl(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.arrayBuffer();
      }
      var xl = function (t, n) {
        return fetch(t, n).then(bl);
      };
      function wl(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text();
      }
      var Ml = function (t, n) {
        return fetch(t, n).then(wl);
      };
      function Al(t) {
        return function (n, e, r) {
          return (
            2 === arguments.length &&
              "function" == typeof e &&
              ((r = e), (e = void 0)),
            Ml(n, e).then(function (n) {
              return t(n, r);
            })
          );
        };
      }
      function Sl(t, n, e, r) {
        3 === arguments.length &&
          "function" == typeof e &&
          ((r = e), (e = void 0));
        var i = As(t);
        return Ml(n, e).then(function (t) {
          return i.parse(t, r);
        });
      }
      var Tl = Al(Ts),
        El = Al(Os),
        Nl = function (t, n) {
          return new Promise(function (e, r) {
            var i = new Image();
            for (var o in n) i[o] = n[o];
            (i.onerror = r),
              (i.onload = function () {
                e(i);
              }),
              (i.src = t);
          });
        };
      function kl(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        if (204 !== t.status && 205 !== t.status) return t.json();
      }
      var Cl = function (t, n) {
        return fetch(t, n).then(kl);
      };
      function Pl(t) {
        return (n, e) =>
          Ml(n, e).then((n) => new DOMParser().parseFromString(n, t));
      }
      var zl = Pl("application/xml"),
        $l = Pl("text/html"),
        Ol = Pl("image/svg+xml"),
        Dl = function (t, n) {
          var e,
            r = 1;
          function i() {
            var i,
              o,
              u = e.length,
              a = 0,
              c = 0;
            for (i = 0; i < u; ++i) (a += (o = e[i]).x), (c += o.y);
            for (a = (a / u - t) * r, c = (c / u - n) * r, i = 0; i < u; ++i)
              ((o = e[i]).x -= a), (o.y -= c);
          }
          return (
            null == t && (t = 0),
            null == n && (n = 0),
            (i.initialize = function (t) {
              e = t;
            }),
            (i.x = function (n) {
              return arguments.length ? ((t = +n), i) : t;
            }),
            (i.y = function (t) {
              return arguments.length ? ((n = +t), i) : n;
            }),
            (i.strength = function (t) {
              return arguments.length ? ((r = +t), i) : r;
            }),
            i
          );
        };
      function Rl(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i,
          o,
          u,
          a,
          c,
          f,
          s,
          l,
          h,
          d = t._root,
          p = { data: r },
          g = t._x0,
          y = t._y0,
          v = t._x1,
          _ = t._y1;
        if (!d) return (t._root = p), t;
        for (; d.length; )
          if (
            ((f = n >= (o = (g + v) / 2)) ? (g = o) : (v = o),
            (s = e >= (u = (y + _) / 2)) ? (y = u) : (_ = u),
            (i = d),
            !(d = d[(l = (s << 1) | f)]))
          )
            return (i[l] = p), t;
        if (
          ((a = +t._x.call(null, d.data)),
          (c = +t._y.call(null, d.data)),
          n === a && e === c)
        )
          return (p.next = d), i ? (i[l] = p) : (t._root = p), t;
        do {
          (i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
            (f = n >= (o = (g + v) / 2)) ? (g = o) : (v = o),
            (s = e >= (u = (y + _) / 2)) ? (y = u) : (_ = u);
        } while ((l = (s << 1) | f) == (h = ((c >= u) << 1) | (a >= o)));
        return (i[h] = d), (i[l] = p), t;
      }
      var jl = function (t, n, e, r, i) {
        (this.node = t),
          (this.x0 = n),
          (this.y0 = e),
          (this.x1 = r),
          (this.y1 = i);
      };
      function ql(t) {
        return t[0];
      }
      function Fl(t) {
        return t[1];
      }
      function Bl(t, n, e) {
        var r = new Il(
          null == n ? ql : n,
          null == e ? Fl : e,
          NaN,
          NaN,
          NaN,
          NaN
        );
        return null == t ? r : r.addAll(t);
      }
      function Il(t, n, e, r, i, o) {
        (this._x = t),
          (this._y = n),
          (this._x0 = e),
          (this._y0 = r),
          (this._x1 = i),
          (this._y1 = o),
          (this._root = void 0);
      }
      function Ul(t) {
        for (var n = { data: t.data }, e = n; (t = t.next); )
          e = e.next = { data: t.data };
        return n;
      }
      var Ll = (Bl.prototype = Il.prototype);
      (Ll.copy = function () {
        var t,
          n,
          e = new Il(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          r = this._root;
        if (!r) return e;
        if (!r.length) return (e._root = Ul(r)), e;
        for (
          t = [{ source: r, target: (e._root = new Array(4)) }];
          (r = t.pop());

        )
          for (var i = 0; i < 4; ++i)
            (n = r.source[i]) &&
              (n.length
                ? t.push({ source: n, target: (r.target[i] = new Array(4)) })
                : (r.target[i] = Ul(n)));
        return e;
      }),
        (Ll.add = function (t) {
          const n = +this._x.call(null, t),
            e = +this._y.call(null, t);
          return Rl(this.cover(n, e), n, e, t);
        }),
        (Ll.addAll = function (t) {
          var n,
            e,
            r,
            i,
            o = t.length,
            u = new Array(o),
            a = new Array(o),
            c = 1 / 0,
            f = 1 / 0,
            s = -1 / 0,
            l = -1 / 0;
          for (e = 0; e < o; ++e)
            isNaN((r = +this._x.call(null, (n = t[e])))) ||
              isNaN((i = +this._y.call(null, n))) ||
              ((u[e] = r),
              (a[e] = i),
              r < c && (c = r),
              r > s && (s = r),
              i < f && (f = i),
              i > l && (l = i));
          if (c > s || f > l) return this;
          for (this.cover(c, f).cover(s, l), e = 0; e < o; ++e)
            Rl(this, u[e], a[e], t[e]);
          return this;
        }),
        (Ll.cover = function (t, n) {
          if (isNaN((t = +t)) || isNaN((n = +n))) return this;
          var e = this._x0,
            r = this._y0,
            i = this._x1,
            o = this._y1;
          if (isNaN(e))
            (i = (e = Math.floor(t)) + 1), (o = (r = Math.floor(n)) + 1);
          else {
            for (
              var u, a, c = i - e || 1, f = this._root;
              e > t || t >= i || r > n || n >= o;

            )
              switch (
                ((a = ((n < r) << 1) | (t < e)),
                ((u = new Array(4))[a] = f),
                (f = u),
                (c *= 2),
                a)
              ) {
                case 0:
                  (i = e + c), (o = r + c);
                  break;
                case 1:
                  (e = i - c), (o = r + c);
                  break;
                case 2:
                  (i = e + c), (r = o - c);
                  break;
                case 3:
                  (e = i - c), (r = o - c);
              }
            this._root && this._root.length && (this._root = f);
          }
          return (
            (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this
          );
        }),
        (Ll.data = function () {
          var t = [];
          return (
            this.visit(function (n) {
              if (!n.length)
                do {
                  t.push(n.data);
                } while ((n = n.next));
            }),
            t
          );
        }),
        (Ll.extent = function (t) {
          return arguments.length
            ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
            : isNaN(this._x0)
            ? void 0
            : [
                [this._x0, this._y0],
                [this._x1, this._y1],
              ];
        }),
        (Ll.find = function (t, n, e) {
          var r,
            i,
            o,
            u,
            a,
            c,
            f,
            s = this._x0,
            l = this._y0,
            h = this._x1,
            d = this._y1,
            p = [],
            g = this._root;
          for (
            g && p.push(new jl(g, s, l, h, d)),
              null == e
                ? (e = 1 / 0)
                : ((s = t - e),
                  (l = n - e),
                  (h = t + e),
                  (d = n + e),
                  (e *= e));
            (c = p.pop());

          )
            if (
              !(
                !(g = c.node) ||
                (i = c.x0) > h ||
                (o = c.y0) > d ||
                (u = c.x1) < s ||
                (a = c.y1) < l
              )
            )
              if (g.length) {
                var y = (i + u) / 2,
                  v = (o + a) / 2;
                p.push(
                  new jl(g[3], y, v, u, a),
                  new jl(g[2], i, v, y, a),
                  new jl(g[1], y, o, u, v),
                  new jl(g[0], i, o, y, v)
                ),
                  (f = ((n >= v) << 1) | (t >= y)) &&
                    ((c = p[p.length - 1]),
                    (p[p.length - 1] = p[p.length - 1 - f]),
                    (p[p.length - 1 - f] = c));
              } else {
                var _ = t - +this._x.call(null, g.data),
                  m = n - +this._y.call(null, g.data),
                  b = _ * _ + m * m;
                if (b < e) {
                  var x = Math.sqrt((e = b));
                  (s = t - x),
                    (l = n - x),
                    (h = t + x),
                    (d = n + x),
                    (r = g.data);
                }
              }
          return r;
        }),
        (Ll.remove = function (t) {
          if (
            isNaN((o = +this._x.call(null, t))) ||
            isNaN((u = +this._y.call(null, t)))
          )
            return this;
          var n,
            e,
            r,
            i,
            o,
            u,
            a,
            c,
            f,
            s,
            l,
            h,
            d = this._root,
            p = this._x0,
            g = this._y0,
            y = this._x1,
            v = this._y1;
          if (!d) return this;
          if (d.length)
            for (;;) {
              if (
                ((f = o >= (a = (p + y) / 2)) ? (p = a) : (y = a),
                (s = u >= (c = (g + v) / 2)) ? (g = c) : (v = c),
                (n = d),
                !(d = d[(l = (s << 1) | f)]))
              )
                return this;
              if (!d.length) break;
              (n[(l + 1) & 3] || n[(l + 2) & 3] || n[(l + 3) & 3]) &&
                ((e = n), (h = l));
            }
          for (; d.data !== t; ) if (((r = d), !(d = d.next))) return this;
          return (
            (i = d.next) && delete d.next,
            r
              ? (i ? (r.next = i) : delete r.next, this)
              : n
              ? (i ? (n[l] = i) : delete n[l],
                (d = n[0] || n[1] || n[2] || n[3]) &&
                  d === (n[3] || n[2] || n[1] || n[0]) &&
                  !d.length &&
                  (e ? (e[h] = d) : (this._root = d)),
                this)
              : ((this._root = i), this)
          );
        }),
        (Ll.removeAll = function (t) {
          for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
          return this;
        }),
        (Ll.root = function () {
          return this._root;
        }),
        (Ll.size = function () {
          var t = 0;
          return (
            this.visit(function (n) {
              if (!n.length)
                do {
                  ++t;
                } while ((n = n.next));
            }),
            t
          );
        }),
        (Ll.visit = function (t) {
          var n,
            e,
            r,
            i,
            o,
            u,
            a = [],
            c = this._root;
          for (
            c && a.push(new jl(c, this._x0, this._y0, this._x1, this._y1));
            (n = a.pop());

          )
            if (
              !t(
                (c = n.node),
                (r = n.x0),
                (i = n.y0),
                (o = n.x1),
                (u = n.y1)
              ) &&
              c.length
            ) {
              var f = (r + o) / 2,
                s = (i + u) / 2;
              (e = c[3]) && a.push(new jl(e, f, s, o, u)),
                (e = c[2]) && a.push(new jl(e, r, s, f, u)),
                (e = c[1]) && a.push(new jl(e, f, i, o, s)),
                (e = c[0]) && a.push(new jl(e, r, i, f, s));
            }
          return this;
        }),
        (Ll.visitAfter = function (t) {
          var n,
            e = [],
            r = [];
          for (
            this._root &&
            e.push(new jl(this._root, this._x0, this._y0, this._x1, this._y1));
            (n = e.pop());

          ) {
            var i = n.node;
            if (i.length) {
              var o,
                u = n.x0,
                a = n.y0,
                c = n.x1,
                f = n.y1,
                s = (u + c) / 2,
                l = (a + f) / 2;
              (o = i[0]) && e.push(new jl(o, u, a, s, l)),
                (o = i[1]) && e.push(new jl(o, s, a, c, l)),
                (o = i[2]) && e.push(new jl(o, u, l, s, f)),
                (o = i[3]) && e.push(new jl(o, s, l, c, f));
            }
            r.push(n);
          }
          for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1);
          return this;
        }),
        (Ll.x = function (t) {
          return arguments.length ? ((this._x = t), this) : this._x;
        }),
        (Ll.y = function (t) {
          return arguments.length ? ((this._y = t), this) : this._y;
        });
      var Yl = function (t) {
          return function () {
            return t;
          };
        },
        Hl = function (t) {
          return 1e-6 * (t() - 0.5);
        };
      function Xl(t) {
        return t.x + t.vx;
      }
      function Vl(t) {
        return t.y + t.vy;
      }
      var Gl = function (t) {
        var n,
          e,
          r,
          i = 1,
          o = 1;
        function u() {
          for (var t, u, c, f, s, l, h, d = n.length, p = 0; p < o; ++p)
            for (u = Bl(n, Xl, Vl).visitAfter(a), t = 0; t < d; ++t)
              (c = n[t]),
                (l = e[c.index]),
                (h = l * l),
                (f = c.x + c.vx),
                (s = c.y + c.vy),
                u.visit(g);
          function g(t, n, e, o, u) {
            var a = t.data,
              d = t.r,
              p = l + d;
            if (!a) return n > f + p || o < f - p || e > s + p || u < s - p;
            if (a.index > c.index) {
              var g = f - a.x - a.vx,
                y = s - a.y - a.vy,
                v = g * g + y * y;
              v < p * p &&
                (0 === g && (v += (g = Hl(r)) * g),
                0 === y && (v += (y = Hl(r)) * y),
                (v = ((p - (v = Math.sqrt(v))) / v) * i),
                (c.vx += (g *= v) * (p = (d *= d) / (h + d))),
                (c.vy += (y *= v) * p),
                (a.vx -= g * (p = 1 - p)),
                (a.vy -= y * p));
            }
          }
        }
        function a(t) {
          if (t.data) return (t.r = e[t.data.index]);
          for (var n = (t.r = 0); n < 4; ++n)
            t[n] && t[n].r > t.r && (t.r = t[n].r);
        }
        function c() {
          if (n) {
            var r,
              i,
              o = n.length;
            for (e = new Array(o), r = 0; r < o; ++r)
              (i = n[r]), (e[i.index] = +t(i, r, n));
          }
        }
        return (
          "function" != typeof t && (t = Yl(null == t ? 1 : +t)),
          (u.initialize = function (t, e) {
            (n = t), (r = e), c();
          }),
          (u.iterations = function (t) {
            return arguments.length ? ((o = +t), u) : o;
          }),
          (u.strength = function (t) {
            return arguments.length ? ((i = +t), u) : i;
          }),
          (u.radius = function (n) {
            return arguments.length
              ? ((t = "function" == typeof n ? n : Yl(+n)), c(), u)
              : t;
          }),
          u
        );
      };
      function Jl(t) {
        return t.index;
      }
      function Zl(t, n) {
        var e = t.get(n);
        if (!e) throw new Error("node not found: " + n);
        return e;
      }
      var Wl = function (t) {
        var n,
          e,
          r,
          i,
          o,
          u,
          a = Jl,
          c = function (t) {
            return 1 / Math.min(i[t.source.index], i[t.target.index]);
          },
          f = Yl(30),
          s = 1;
        function l(r) {
          for (var i = 0, a = t.length; i < s; ++i)
            for (var c, f, l, h, d, p, g, y = 0; y < a; ++y)
              (f = (c = t[y]).source),
                (h = (l = c.target).x + l.vx - f.x - f.vx || Hl(u)),
                (d = l.y + l.vy - f.y - f.vy || Hl(u)),
                (h *= p =
                  (((p = Math.sqrt(h * h + d * d)) - e[y]) / p) * r * n[y]),
                (d *= p),
                (l.vx -= h * (g = o[y])),
                (l.vy -= d * g),
                (f.vx += h * (g = 1 - g)),
                (f.vy += d * g);
        }
        function h() {
          if (r) {
            var u,
              c,
              f = r.length,
              s = t.length,
              l = new Map(r.map((t, n) => [a(t, n, r), t]));
            for (u = 0, i = new Array(f); u < s; ++u)
              ((c = t[u]).index = u),
                "object" != typeof c.source && (c.source = Zl(l, c.source)),
                "object" != typeof c.target && (c.target = Zl(l, c.target)),
                (i[c.source.index] = (i[c.source.index] || 0) + 1),
                (i[c.target.index] = (i[c.target.index] || 0) + 1);
            for (u = 0, o = new Array(s); u < s; ++u)
              (c = t[u]),
                (o[u] =
                  i[c.source.index] / (i[c.source.index] + i[c.target.index]));
            (n = new Array(s)), d(), (e = new Array(s)), p();
          }
        }
        function d() {
          if (r)
            for (var e = 0, i = t.length; e < i; ++e) n[e] = +c(t[e], e, t);
        }
        function p() {
          if (r)
            for (var n = 0, i = t.length; n < i; ++n) e[n] = +f(t[n], n, t);
        }
        return (
          null == t && (t = []),
          (l.initialize = function (t, n) {
            (r = t), (u = n), h();
          }),
          (l.links = function (n) {
            return arguments.length ? ((t = n), h(), l) : t;
          }),
          (l.id = function (t) {
            return arguments.length ? ((a = t), l) : a;
          }),
          (l.iterations = function (t) {
            return arguments.length ? ((s = +t), l) : s;
          }),
          (l.strength = function (t) {
            return arguments.length
              ? ((c = "function" == typeof t ? t : Yl(+t)), d(), l)
              : c;
          }),
          (l.distance = function (t) {
            return arguments.length
              ? ((f = "function" == typeof t ? t : Yl(+t)), p(), l)
              : f;
          }),
          l
        );
      };
      function Kl(t) {
        return t.x;
      }
      function Ql(t) {
        return t.y;
      }
      var th = Math.PI * (3 - Math.sqrt(5)),
        nh = function (t) {
          var n,
            e = 1,
            r = 0.001,
            i = 1 - Math.pow(r, 1 / 300),
            o = 0,
            u = 0.6,
            a = new Map(),
            c = Du(l),
            f = Tn("tick", "end"),
            s = (function () {
              let t = 1;
              return () =>
                (t = (1664525 * t + 1013904223) % 4294967296) / 4294967296;
            })();
          function l() {
            h(), f.call("tick", n), e < r && (c.stop(), f.call("end", n));
          }
          function h(r) {
            var c,
              f,
              s = t.length;
            void 0 === r && (r = 1);
            for (var l = 0; l < r; ++l)
              for (
                e += (o - e) * i,
                  a.forEach(function (t) {
                    t(e);
                  }),
                  c = 0;
                c < s;
                ++c
              )
                null == (f = t[c]).fx
                  ? (f.x += f.vx *= u)
                  : ((f.x = f.fx), (f.vx = 0)),
                  null == f.fy
                    ? (f.y += f.vy *= u)
                    : ((f.y = f.fy), (f.vy = 0));
            return n;
          }
          function d() {
            for (var n, e = 0, r = t.length; e < r; ++e) {
              if (
                (((n = t[e]).index = e),
                null != n.fx && (n.x = n.fx),
                null != n.fy && (n.y = n.fy),
                isNaN(n.x) || isNaN(n.y))
              ) {
                var i = 10 * Math.sqrt(0.5 + e),
                  o = e * th;
                (n.x = i * Math.cos(o)), (n.y = i * Math.sin(o));
              }
              (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
            }
          }
          function p(n) {
            return n.initialize && n.initialize(t, s), n;
          }
          return (
            null == t && (t = []),
            d(),
            (n = {
              tick: h,
              restart: function () {
                return c.restart(l), n;
              },
              stop: function () {
                return c.stop(), n;
              },
              nodes: function (e) {
                return arguments.length ? ((t = e), d(), a.forEach(p), n) : t;
              },
              alpha: function (t) {
                return arguments.length ? ((e = +t), n) : e;
              },
              alphaMin: function (t) {
                return arguments.length ? ((r = +t), n) : r;
              },
              alphaDecay: function (t) {
                return arguments.length ? ((i = +t), n) : +i;
              },
              alphaTarget: function (t) {
                return arguments.length ? ((o = +t), n) : o;
              },
              velocityDecay: function (t) {
                return arguments.length ? ((u = 1 - t), n) : 1 - u;
              },
              randomSource: function (t) {
                return arguments.length ? ((s = t), a.forEach(p), n) : s;
              },
              force: function (t, e) {
                return arguments.length > 1
                  ? (null == e ? a.delete(t) : a.set(t, p(e)), n)
                  : a.get(t);
              },
              find: function (n, e, r) {
                var i,
                  o,
                  u,
                  a,
                  c,
                  f = 0,
                  s = t.length;
                for (null == r ? (r = 1 / 0) : (r *= r), f = 0; f < s; ++f)
                  (u = (i = n - (a = t[f]).x) * i + (o = e - a.y) * o) < r &&
                    ((c = a), (r = u));
                return c;
              },
              on: function (t, e) {
                return arguments.length > 1 ? (f.on(t, e), n) : f.on(t);
              },
            })
          );
        },
        eh = function () {
          var t,
            n,
            e,
            r,
            i,
            o = Yl(-30),
            u = 1,
            a = 1 / 0,
            c = 0.81;
          function f(e) {
            var i,
              o = t.length,
              u = Bl(t, Kl, Ql).visitAfter(l);
            for (r = e, i = 0; i < o; ++i) (n = t[i]), u.visit(h);
          }
          function s() {
            if (t) {
              var n,
                e,
                r = t.length;
              for (i = new Array(r), n = 0; n < r; ++n)
                (e = t[n]), (i[e.index] = +o(e, n, t));
            }
          }
          function l(t) {
            var n,
              e,
              r,
              o,
              u,
              a = 0,
              c = 0;
            if (t.length) {
              for (r = o = u = 0; u < 4; ++u)
                (n = t[u]) &&
                  (e = Math.abs(n.value)) &&
                  ((a += n.value), (c += e), (r += e * n.x), (o += e * n.y));
              (t.x = r / c), (t.y = o / c);
            } else {
              ((n = t).x = n.data.x), (n.y = n.data.y);
              do {
                a += i[n.data.index];
              } while ((n = n.next));
            }
            t.value = a;
          }
          function h(t, o, f, s) {
            if (!t.value) return !0;
            var l = t.x - n.x,
              h = t.y - n.y,
              d = s - o,
              p = l * l + h * h;
            if ((d * d) / c < p)
              return (
                p < a &&
                  (0 === l && (p += (l = Hl(e)) * l),
                  0 === h && (p += (h = Hl(e)) * h),
                  p < u && (p = Math.sqrt(u * p)),
                  (n.vx += (l * t.value * r) / p),
                  (n.vy += (h * t.value * r) / p)),
                !0
              );
            if (!(t.length || p >= a)) {
              (t.data !== n || t.next) &&
                (0 === l && (p += (l = Hl(e)) * l),
                0 === h && (p += (h = Hl(e)) * h),
                p < u && (p = Math.sqrt(u * p)));
              do {
                t.data !== n &&
                  ((d = (i[t.data.index] * r) / p),
                  (n.vx += l * d),
                  (n.vy += h * d));
              } while ((t = t.next));
            }
          }
          return (
            (f.initialize = function (n, r) {
              (t = n), (e = r), s();
            }),
            (f.strength = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : Yl(+t)), s(), f)
                : o;
            }),
            (f.distanceMin = function (t) {
              return arguments.length ? ((u = t * t), f) : Math.sqrt(u);
            }),
            (f.distanceMax = function (t) {
              return arguments.length ? ((a = t * t), f) : Math.sqrt(a);
            }),
            (f.theta = function (t) {
              return arguments.length ? ((c = t * t), f) : Math.sqrt(c);
            }),
            f
          );
        },
        rh = function (t, n, e) {
          var r,
            i,
            o,
            u = Yl(0.1);
          function a(t) {
            for (var u = 0, a = r.length; u < a; ++u) {
              var c = r[u],
                f = c.x - n || 1e-6,
                s = c.y - e || 1e-6,
                l = Math.sqrt(f * f + s * s),
                h = ((o[u] - l) * i[u] * t) / l;
              (c.vx += f * h), (c.vy += s * h);
            }
          }
          function c() {
            if (r) {
              var n,
                e = r.length;
              for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n)
                (o[n] = +t(r[n], n, r)),
                  (i[n] = isNaN(o[n]) ? 0 : +u(r[n], n, r));
            }
          }
          return (
            "function" != typeof t && (t = Yl(+t)),
            null == n && (n = 0),
            null == e && (e = 0),
            (a.initialize = function (t) {
              (r = t), c();
            }),
            (a.strength = function (t) {
              return arguments.length
                ? ((u = "function" == typeof t ? t : Yl(+t)), c(), a)
                : u;
            }),
            (a.radius = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : Yl(+n)), c(), a)
                : t;
            }),
            (a.x = function (t) {
              return arguments.length ? ((n = +t), a) : n;
            }),
            (a.y = function (t) {
              return arguments.length ? ((e = +t), a) : e;
            }),
            a
          );
        },
        ih = function (t) {
          var n,
            e,
            r,
            i = Yl(0.1);
          function o(t) {
            for (var i, o = 0, u = n.length; o < u; ++o)
              (i = n[o]).vx += (r[o] - i.x) * e[o] * t;
          }
          function u() {
            if (n) {
              var o,
                u = n.length;
              for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o)
                e[o] = isNaN((r[o] = +t(n[o], o, n))) ? 0 : +i(n[o], o, n);
            }
          }
          return (
            "function" != typeof t && (t = Yl(null == t ? 0 : +t)),
            (o.initialize = function (t) {
              (n = t), u();
            }),
            (o.strength = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : Yl(+t)), u(), o)
                : i;
            }),
            (o.x = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : Yl(+n)), u(), o)
                : t;
            }),
            o
          );
        },
        oh = function (t) {
          var n,
            e,
            r,
            i = Yl(0.1);
          function o(t) {
            for (var i, o = 0, u = n.length; o < u; ++o)
              (i = n[o]).vy += (r[o] - i.y) * e[o] * t;
          }
          function u() {
            if (n) {
              var o,
                u = n.length;
              for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o)
                e[o] = isNaN((r[o] = +t(n[o], o, n))) ? 0 : +i(n[o], o, n);
            }
          }
          return (
            "function" != typeof t && (t = Yl(null == t ? 0 : +t)),
            (o.initialize = function (t) {
              (n = t), u();
            }),
            (o.strength = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : Yl(+t)), u(), o)
                : i;
            }),
            (o.y = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : Yl(+n)), u(), o)
                : t;
            }),
            o
          );
        };
      function uh(t, n) {
        if (
          (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var e,
          r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
      }
      var ah = function (t) {
          return (t = uh(Math.abs(t))) ? t[1] : NaN;
        },
        ch =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function fh(t) {
        if (!(n = ch.exec(t))) throw new Error("invalid format: " + t);
        var n;
        return new sh({
          fill: n[1],
          align: n[2],
          sign: n[3],
          symbol: n[4],
          zero: n[5],
          width: n[6],
          comma: n[7],
          precision: n[8] && n[8].slice(1),
          trim: n[9],
          type: n[10],
        });
      }
      function sh(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      (fh.prototype = sh.prototype),
        (sh.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      var lh,
        hh,
        dh,
        ph,
        gh = function (t, n) {
          var e = uh(t, n);
          if (!e) return t + "";
          var r = e[0],
            i = e[1];
          return i < 0
            ? "0." + new Array(-i).join("0") + r
            : r.length > i + 1
            ? r.slice(0, i + 1) + "." + r.slice(i + 1)
            : r + new Array(i - r.length + 2).join("0");
        },
        yh = {
          "%": (t, n) => (100 * t).toFixed(n),
          b: (t) => Math.round(t).toString(2),
          c: (t) => t + "",
          d: function (t) {
            return Math.abs((t = Math.round(t))) >= 1e21
              ? t.toLocaleString("en").replace(/,/g, "")
              : t.toString(10);
          },
          e: (t, n) => t.toExponential(n),
          f: (t, n) => t.toFixed(n),
          g: (t, n) => t.toPrecision(n),
          o: (t) => Math.round(t).toString(8),
          p: (t, n) => gh(100 * t, n),
          r: gh,
          s: function (t, n) {
            var e = uh(t, n);
            if (!e) return t + "";
            var r = e[0],
              i = e[1],
              o =
                i - (lh = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
              u = r.length;
            return o === u
              ? r
              : o > u
              ? r + new Array(o - u + 1).join("0")
              : o > 0
              ? r.slice(0, o) + "." + r.slice(o)
              : "0." +
                new Array(1 - o).join("0") +
                uh(t, Math.max(0, n + o - 1))[0];
          },
          X: (t) => Math.round(t).toString(16).toUpperCase(),
          x: (t) => Math.round(t).toString(16),
        },
        vh = function (t) {
          return t;
        },
        _h = Array.prototype.map,
        mh = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ],
        bh = function (t) {
          var n,
            e,
            r =
              void 0 === t.grouping || void 0 === t.thousands
                ? vh
                : ((n = _h.call(t.grouping, Number)),
                  (e = t.thousands + ""),
                  function (t, r) {
                    for (
                      var i = t.length, o = [], u = 0, a = n[0], c = 0;
                      i > 0 &&
                      a > 0 &&
                      (c + a + 1 > r && (a = Math.max(1, r - c)),
                      o.push(t.substring((i -= a), i + a)),
                      !((c += a + 1) > r));

                    )
                      a = n[(u = (u + 1) % n.length)];
                    return o.reverse().join(e);
                  }),
            i = void 0 === t.currency ? "" : t.currency[0] + "",
            o = void 0 === t.currency ? "" : t.currency[1] + "",
            u = void 0 === t.decimal ? "." : t.decimal + "",
            a =
              void 0 === t.numerals
                ? vh
                : (function (t) {
                    return function (n) {
                      return n.replace(/[0-9]/g, function (n) {
                        return t[+n];
                      });
                    };
                  })(_h.call(t.numerals, String)),
            c = void 0 === t.percent ? "%" : t.percent + "",
            f = void 0 === t.minus ? "−" : t.minus + "",
            s = void 0 === t.nan ? "NaN" : t.nan + "";
          function l(t) {
            var n = (t = fh(t)).fill,
              e = t.align,
              l = t.sign,
              h = t.symbol,
              d = t.zero,
              p = t.width,
              g = t.comma,
              y = t.precision,
              v = t.trim,
              _ = t.type;
            "n" === _
              ? ((g = !0), (_ = "g"))
              : yh[_] || (void 0 === y && (y = 12), (v = !0), (_ = "g")),
              (d || ("0" === n && "=" === e)) &&
                ((d = !0), (n = "0"), (e = "="));
            var m =
                "$" === h
                  ? i
                  : "#" === h && /[boxX]/.test(_)
                  ? "0" + _.toLowerCase()
                  : "",
              b = "$" === h ? o : /[%p]/.test(_) ? c : "",
              x = yh[_],
              w = /[defgprs%]/.test(_);
            function M(t) {
              var i,
                o,
                c,
                h = m,
                M = b;
              if ("c" === _) (M = x(t) + M), (t = "");
              else {
                var A = (t = +t) < 0 || 1 / t < 0;
                if (
                  ((t = isNaN(t) ? s : x(Math.abs(t), y)),
                  v &&
                    (t = (function (t) {
                      t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                        switch (t[r]) {
                          case ".":
                            i = n = r;
                            break;
                          case "0":
                            0 === i && (i = r), (n = r);
                            break;
                          default:
                            if (!+t[r]) break t;
                            i > 0 && (i = 0);
                        }
                      return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                    })(t)),
                  A && 0 == +t && "+" !== l && (A = !1),
                  (h =
                    (A
                      ? "(" === l
                        ? l
                        : f
                      : "-" === l || "(" === l
                      ? ""
                      : l) + h),
                  (M =
                    ("s" === _ ? mh[8 + lh / 3] : "") +
                    M +
                    (A && "(" === l ? ")" : "")),
                  w)
                )
                  for (i = -1, o = t.length; ++i < o; )
                    if (48 > (c = t.charCodeAt(i)) || c > 57) {
                      (M = (46 === c ? u + t.slice(i + 1) : t.slice(i)) + M),
                        (t = t.slice(0, i));
                      break;
                    }
              }
              g && !d && (t = r(t, 1 / 0));
              var S = h.length + t.length + M.length,
                T = S < p ? new Array(p - S + 1).join(n) : "";
              switch (
                (g &&
                  d &&
                  ((t = r(T + t, T.length ? p - M.length : 1 / 0)), (T = "")),
                e)
              ) {
                case "<":
                  t = h + t + M + T;
                  break;
                case "=":
                  t = h + T + t + M;
                  break;
                case "^":
                  t = T.slice(0, (S = T.length >> 1)) + h + t + M + T.slice(S);
                  break;
                default:
                  t = T + h + t + M;
              }
              return a(t);
            }
            return (
              (y =
                void 0 === y
                  ? 6
                  : /[gprs]/.test(_)
                  ? Math.max(1, Math.min(21, y))
                  : Math.max(0, Math.min(20, y))),
              (M.toString = function () {
                return t + "";
              }),
              M
            );
          }
          return {
            format: l,
            formatPrefix: function (t, n) {
              var e = l((((t = fh(t)).type = "f"), t)),
                r = 3 * Math.max(-8, Math.min(8, Math.floor(ah(n) / 3))),
                i = Math.pow(10, -r),
                o = mh[8 + r / 3];
              return function (t) {
                return e(i * t) + o;
              };
            },
          };
        };
      function xh(t) {
        return (hh = bh(t)), (dh = hh.format), (ph = hh.formatPrefix), hh;
      }
      xh({ thousands: ",", grouping: [3], currency: ["$", ""] });
      var wh = function (t) {
          return Math.max(0, -ah(Math.abs(t)));
        },
        Mh = function (t, n) {
          return Math.max(
            0,
            3 * Math.max(-8, Math.min(8, Math.floor(ah(n) / 3))) -
              ah(Math.abs(t))
          );
        },
        Ah = function (t, n) {
          return (
            (t = Math.abs(t)),
            (n = Math.abs(n) - t),
            Math.max(0, ah(n) - ah(t)) + 1
          );
        },
        Sh = Math.PI,
        Th = Sh / 2,
        Eh = Sh / 4,
        Nh = 2 * Sh,
        kh = 180 / Sh,
        Ch = Sh / 180,
        Ph = Math.abs,
        zh = Math.atan,
        $h = Math.atan2,
        Oh = Math.cos,
        Dh = Math.ceil,
        Rh = Math.exp,
        jh = (Math.floor, Math.hypot),
        qh = Math.log,
        Fh = Math.pow,
        Bh = Math.sin,
        Ih =
          Math.sign ||
          function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          },
        Uh = Math.sqrt,
        Lh = Math.tan;
      function Yh(t) {
        return t > 1 ? 0 : t < -1 ? Sh : Math.acos(t);
      }
      function Hh(t) {
        return t > 1 ? Th : t < -1 ? -Th : Math.asin(t);
      }
      function Xh(t) {
        return (t = Bh(t / 2)) * t;
      }
      function Vh() {}
      function Gh(t, n) {
        t && Zh.hasOwnProperty(t.type) && Zh[t.type](t, n);
      }
      var Jh = {
          Feature: function (t, n) {
            Gh(t.geometry, n);
          },
          FeatureCollection: function (t, n) {
            for (var e = t.features, r = -1, i = e.length; ++r < i; )
              Gh(e[r].geometry, n);
          },
        },
        Zh = {
          Sphere: function (t, n) {
            n.sphere();
          },
          Point: function (t, n) {
            (t = t.coordinates), n.point(t[0], t[1], t[2]);
          },
          MultiPoint: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              (t = e[r]), n.point(t[0], t[1], t[2]);
          },
          LineString: function (t, n) {
            Wh(t.coordinates, n, 0);
          },
          MultiLineString: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              Wh(e[r], n, 0);
          },
          Polygon: function (t, n) {
            Kh(t.coordinates, n);
          },
          MultiPolygon: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              Kh(e[r], n);
          },
          GeometryCollection: function (t, n) {
            for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
              Gh(e[r], n);
          },
        };
      function Wh(t, n, e) {
        var r,
          i = -1,
          o = t.length - e;
        for (n.lineStart(); ++i < o; ) (r = t[i]), n.point(r[0], r[1], r[2]);
        n.lineEnd();
      }
      function Kh(t, n) {
        var e = -1,
          r = t.length;
        for (n.polygonStart(); ++e < r; ) Wh(t[e], n, 1);
        n.polygonEnd();
      }
      var Qh,
        td,
        nd,
        ed,
        rd,
        id = function (t, n) {
          t && Jh.hasOwnProperty(t.type) ? Jh[t.type](t, n) : Gh(t, n);
        },
        od = new z(),
        ud = new z(),
        ad = {
          point: Vh,
          lineStart: Vh,
          lineEnd: Vh,
          polygonStart: function () {
            (od = new z()), (ad.lineStart = cd), (ad.lineEnd = fd);
          },
          polygonEnd: function () {
            var t = +od;
            ud.add(t < 0 ? Nh + t : t),
              (this.lineStart = this.lineEnd = this.point = Vh);
          },
          sphere: function () {
            ud.add(Nh);
          },
        };
      function cd() {
        ad.point = sd;
      }
      function fd() {
        ld(Qh, td);
      }
      function sd(t, n) {
        (ad.point = ld),
          (Qh = t),
          (td = n),
          (nd = t *= Ch),
          (ed = Oh((n = (n *= Ch) / 2 + Eh))),
          (rd = Bh(n));
      }
      function ld(t, n) {
        var e = (t *= Ch) - nd,
          r = e >= 0 ? 1 : -1,
          i = r * e,
          o = Oh((n = (n *= Ch) / 2 + Eh)),
          u = Bh(n),
          a = rd * u,
          c = ed * o + a * Oh(i),
          f = a * r * Bh(i);
        od.add($h(f, c)), (nd = t), (ed = o), (rd = u);
      }
      var hd,
        dd,
        pd,
        gd,
        yd,
        vd,
        _d,
        md,
        bd,
        xd,
        wd,
        Md = function (t) {
          return (ud = new z()), id(t, ad), 2 * ud;
        };
      function Ad(t) {
        return [$h(t[1], t[0]), Hh(t[2])];
      }
      function Sd(t) {
        var n = t[0],
          e = t[1],
          r = Oh(e);
        return [r * Oh(n), r * Bh(n), Bh(e)];
      }
      function Td(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
      }
      function Ed(t, n) {
        return [
          t[1] * n[2] - t[2] * n[1],
          t[2] * n[0] - t[0] * n[2],
          t[0] * n[1] - t[1] * n[0],
        ];
      }
      function Nd(t, n) {
        (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
      }
      function kd(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n];
      }
      function Cd(t) {
        var n = Uh(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        (t[0] /= n), (t[1] /= n), (t[2] /= n);
      }
      var Pd = {
        point: zd,
        lineStart: Od,
        lineEnd: Dd,
        polygonStart: function () {
          (Pd.point = Rd),
            (Pd.lineStart = jd),
            (Pd.lineEnd = qd),
            (bd = new z()),
            ad.polygonStart();
        },
        polygonEnd: function () {
          ad.polygonEnd(),
            (Pd.point = zd),
            (Pd.lineStart = Od),
            (Pd.lineEnd = Dd),
            od < 0
              ? ((hd = -(pd = 180)), (dd = -(gd = 90)))
              : bd > 1e-6
              ? (gd = 90)
              : bd < -1e-6 && (dd = -90),
            (wd[0] = hd),
            (wd[1] = pd);
        },
        sphere: function () {
          (hd = -(pd = 180)), (dd = -(gd = 90));
        },
      };
      function zd(t, n) {
        xd.push((wd = [(hd = t), (pd = t)])),
          n < dd && (dd = n),
          n > gd && (gd = n);
      }
      function $d(t, n) {
        var e = Sd([t * Ch, n * Ch]);
        if (md) {
          var r = Ed(md, e),
            i = Ed([r[1], -r[0], 0], r);
          Cd(i), (i = Ad(i));
          var o,
            u = t - yd,
            a = u > 0 ? 1 : -1,
            c = i[0] * kh * a,
            f = Ph(u) > 180;
          f ^ (a * yd < c && c < a * t)
            ? (o = i[1] * kh) > gd && (gd = o)
            : f ^ (a * yd < (c = ((c + 360) % 360) - 180) && c < a * t)
            ? (o = -i[1] * kh) < dd && (dd = o)
            : (n < dd && (dd = n), n > gd && (gd = n)),
            f
              ? t < yd
                ? Fd(hd, t) > Fd(hd, pd) && (pd = t)
                : Fd(t, pd) > Fd(hd, pd) && (hd = t)
              : pd >= hd
              ? (t < hd && (hd = t), t > pd && (pd = t))
              : t > yd
              ? Fd(hd, t) > Fd(hd, pd) && (pd = t)
              : Fd(t, pd) > Fd(hd, pd) && (hd = t);
        } else xd.push((wd = [(hd = t), (pd = t)]));
        n < dd && (dd = n), n > gd && (gd = n), (md = e), (yd = t);
      }
      function Od() {
        Pd.point = $d;
      }
      function Dd() {
        (wd[0] = hd), (wd[1] = pd), (Pd.point = zd), (md = null);
      }
      function Rd(t, n) {
        if (md) {
          var e = t - yd;
          bd.add(Ph(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
        } else (vd = t), (_d = n);
        ad.point(t, n), $d(t, n);
      }
      function jd() {
        ad.lineStart();
      }
      function qd() {
        Rd(vd, _d),
          ad.lineEnd(),
          Ph(bd) > 1e-6 && (hd = -(pd = 180)),
          (wd[0] = hd),
          (wd[1] = pd),
          (md = null);
      }
      function Fd(t, n) {
        return (n -= t) < 0 ? n + 360 : n;
      }
      function Bd(t, n) {
        return t[0] - n[0];
      }
      function Id(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
      }
      var Ud,
        Ld,
        Yd,
        Hd,
        Xd,
        Vd,
        Gd,
        Jd,
        Zd,
        Wd,
        Kd,
        Qd,
        tp,
        np,
        ep,
        rp,
        ip = function (t) {
          var n, e, r, i, o, u, a;
          if (
            ((gd = pd = -(hd = dd = 1 / 0)),
            (xd = []),
            id(t, Pd),
            (e = xd.length))
          ) {
            for (xd.sort(Bd), n = 1, o = [(r = xd[0])]; n < e; ++n)
              Id(r, (i = xd[n])[0]) || Id(r, i[1])
                ? (Fd(r[0], i[1]) > Fd(r[0], r[1]) && (r[1] = i[1]),
                  Fd(i[0], r[1]) > Fd(r[0], r[1]) && (r[0] = i[0]))
                : o.push((r = i));
            for (
              u = -1 / 0, n = 0, r = o[(e = o.length - 1)];
              n <= e;
              r = i, ++n
            )
              (i = o[n]),
                (a = Fd(r[1], i[0])) > u && ((u = a), (hd = i[0]), (pd = r[1]));
          }
          return (
            (xd = wd = null),
            hd === 1 / 0 || dd === 1 / 0
              ? [
                  [NaN, NaN],
                  [NaN, NaN],
                ]
              : [
                  [hd, dd],
                  [pd, gd],
                ]
          );
        },
        op = {
          sphere: Vh,
          point: up,
          lineStart: cp,
          lineEnd: lp,
          polygonStart: function () {
            (op.lineStart = hp), (op.lineEnd = dp);
          },
          polygonEnd: function () {
            (op.lineStart = cp), (op.lineEnd = lp);
          },
        };
      function up(t, n) {
        t *= Ch;
        var e = Oh((n *= Ch));
        ap(e * Oh(t), e * Bh(t), Bh(n));
      }
      function ap(t, n, e) {
        ++Ud,
          (Yd += (t - Yd) / Ud),
          (Hd += (n - Hd) / Ud),
          (Xd += (e - Xd) / Ud);
      }
      function cp() {
        op.point = fp;
      }
      function fp(t, n) {
        t *= Ch;
        var e = Oh((n *= Ch));
        (np = e * Oh(t)),
          (ep = e * Bh(t)),
          (rp = Bh(n)),
          (op.point = sp),
          ap(np, ep, rp);
      }
      function sp(t, n) {
        t *= Ch;
        var e = Oh((n *= Ch)),
          r = e * Oh(t),
          i = e * Bh(t),
          o = Bh(n),
          u = $h(
            Uh(
              (u = ep * o - rp * i) * u +
                (u = rp * r - np * o) * u +
                (u = np * i - ep * r) * u
            ),
            np * r + ep * i + rp * o
          );
        (Ld += u),
          (Vd += u * (np + (np = r))),
          (Gd += u * (ep + (ep = i))),
          (Jd += u * (rp + (rp = o))),
          ap(np, ep, rp);
      }
      function lp() {
        op.point = up;
      }
      function hp() {
        op.point = pp;
      }
      function dp() {
        gp(Qd, tp), (op.point = up);
      }
      function pp(t, n) {
        (Qd = t), (tp = n), (t *= Ch), (n *= Ch), (op.point = gp);
        var e = Oh(n);
        (np = e * Oh(t)), (ep = e * Bh(t)), (rp = Bh(n)), ap(np, ep, rp);
      }
      function gp(t, n) {
        t *= Ch;
        var e = Oh((n *= Ch)),
          r = e * Oh(t),
          i = e * Bh(t),
          o = Bh(n),
          u = ep * o - rp * i,
          a = rp * r - np * o,
          c = np * i - ep * r,
          f = jh(u, a, c),
          s = Hh(f),
          l = f && -s / f;
        Zd.add(l * u),
          Wd.add(l * a),
          Kd.add(l * c),
          (Ld += s),
          (Vd += s * (np + (np = r))),
          (Gd += s * (ep + (ep = i))),
          (Jd += s * (rp + (rp = o))),
          ap(np, ep, rp);
      }
      var yp = function (t) {
          (Ud = Ld = Yd = Hd = Xd = Vd = Gd = Jd = 0),
            (Zd = new z()),
            (Wd = new z()),
            (Kd = new z()),
            id(t, op);
          var n = +Zd,
            e = +Wd,
            r = +Kd,
            i = jh(n, e, r);
          return i < 1e-12 &&
            ((n = Vd),
            (e = Gd),
            (r = Jd),
            Ld < 1e-6 && ((n = Yd), (e = Hd), (r = Xd)),
            (i = jh(n, e, r)) < 1e-12)
            ? [NaN, NaN]
            : [$h(e, n) * kh, Hh(r / i) * kh];
        },
        vp = function (t) {
          return function () {
            return t;
          };
        },
        _p = function (t, n) {
          function e(e, r) {
            return (e = t(e, r)), n(e[0], e[1]);
          }
          return (
            t.invert &&
              n.invert &&
              (e.invert = function (e, r) {
                return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
              }),
            e
          );
        };
      function mp(t, n) {
        return Ph(t) > Sh && (t -= Math.round(t / Nh) * Nh), [t, n];
      }
      function bp(t, n, e) {
        return (t %= Nh)
          ? n || e
            ? _p(wp(t), Mp(n, e))
            : wp(t)
          : n || e
          ? Mp(n, e)
          : mp;
      }
      function xp(t) {
        return function (n, e) {
          return Ph((n += t)) > Sh && (n -= Math.round(n / Nh) * Nh), [n, e];
        };
      }
      function wp(t) {
        var n = xp(t);
        return (n.invert = xp(-t)), n;
      }
      function Mp(t, n) {
        var e = Oh(t),
          r = Bh(t),
          i = Oh(n),
          o = Bh(n);
        function u(t, n) {
          var u = Oh(n),
            a = Oh(t) * u,
            c = Bh(t) * u,
            f = Bh(n),
            s = f * e + a * r;
          return [$h(c * i - s * o, a * e - f * r), Hh(s * i + c * o)];
        }
        return (
          (u.invert = function (t, n) {
            var u = Oh(n),
              a = Oh(t) * u,
              c = Bh(t) * u,
              f = Bh(n),
              s = f * i - c * o;
            return [$h(c * i + f * o, a * e + s * r), Hh(s * e - a * r)];
          }),
          u
        );
      }
      mp.invert = mp;
      var Ap = function (t) {
        function n(n) {
          return ((n = t(n[0] * Ch, n[1] * Ch))[0] *= kh), (n[1] *= kh), n;
        }
        return (
          (t = bp(t[0] * Ch, t[1] * Ch, t.length > 2 ? t[2] * Ch : 0)),
          (n.invert = function (n) {
            return (
              ((n = t.invert(n[0] * Ch, n[1] * Ch))[0] *= kh), (n[1] *= kh), n
            );
          }),
          n
        );
      };
      function Sp(t, n, e, r, i, o) {
        if (e) {
          var u = Oh(n),
            a = Bh(n),
            c = r * e;
          null == i
            ? ((i = n + r * Nh), (o = n - c / 2))
            : ((i = Tp(u, i)),
              (o = Tp(u, o)),
              (r > 0 ? i < o : i > o) && (i += r * Nh));
          for (var f, s = i; r > 0 ? s > o : s < o; s -= c)
            (f = Ad([u, -a * Oh(s), -a * Bh(s)])), t.point(f[0], f[1]);
        }
      }
      function Tp(t, n) {
        ((n = Sd(n))[0] -= t), Cd(n);
        var e = Yh(-n[1]);
        return ((-n[2] < 0 ? -e : e) + Nh - 1e-6) % Nh;
      }
      var Ep = function () {
          var t,
            n,
            e = vp([0, 0]),
            r = vp(90),
            i = vp(6),
            o = {
              point: function (e, r) {
                t.push((e = n(e, r))), (e[0] *= kh), (e[1] *= kh);
              },
            };
          function u() {
            var u = e.apply(this, arguments),
              a = r.apply(this, arguments) * Ch,
              c = i.apply(this, arguments) * Ch;
            return (
              (t = []),
              (n = bp(-u[0] * Ch, -u[1] * Ch, 0).invert),
              Sp(o, a, c, 1),
              (u = { type: "Polygon", coordinates: [t] }),
              (t = n = null),
              u
            );
          }
          return (
            (u.center = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : vp([+t[0], +t[1]])), u)
                : e;
            }),
            (u.radius = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : vp(+t)), u)
                : r;
            }),
            (u.precision = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : vp(+t)), u)
                : i;
            }),
            u
          );
        },
        Np = function () {
          var t,
            n = [];
          return {
            point: function (n, e, r) {
              t.push([n, e, r]);
            },
            lineStart: function () {
              n.push((t = []));
            },
            lineEnd: Vh,
            rejoin: function () {
              n.length > 1 && n.push(n.pop().concat(n.shift()));
            },
            result: function () {
              var e = n;
              return (n = []), (t = null), e;
            },
          };
        },
        kp = function (t, n) {
          return Ph(t[0] - n[0]) < 1e-6 && Ph(t[1] - n[1]) < 1e-6;
        };
      function Cp(t, n, e, r) {
        (this.x = t),
          (this.z = n),
          (this.o = e),
          (this.e = r),
          (this.v = !1),
          (this.n = this.p = null);
      }
      var Pp = function (t, n, e, r, i) {
        var o,
          u,
          a = [],
          c = [];
        if (
          (t.forEach(function (t) {
            if (!((n = t.length - 1) <= 0)) {
              var n,
                e,
                r = t[0],
                u = t[n];
              if (kp(r, u)) {
                if (!r[2] && !u[2]) {
                  for (i.lineStart(), o = 0; o < n; ++o)
                    i.point((r = t[o])[0], r[1]);
                  return void i.lineEnd();
                }
                u[0] += 2e-6;
              }
              a.push((e = new Cp(r, t, null, !0))),
                c.push((e.o = new Cp(r, null, e, !1))),
                a.push((e = new Cp(u, t, null, !1))),
                c.push((e.o = new Cp(u, null, e, !0)));
            }
          }),
          a.length)
        ) {
          for (c.sort(n), zp(a), zp(c), o = 0, u = c.length; o < u; ++o)
            c[o].e = e = !e;
          for (var f, s, l = a[0]; ; ) {
            for (var h = l, d = !0; h.v; ) if ((h = h.n) === l) return;
            (f = h.z), i.lineStart();
            do {
              if (((h.v = h.o.v = !0), h.e)) {
                if (d)
                  for (o = 0, u = f.length; o < u; ++o)
                    i.point((s = f[o])[0], s[1]);
                else r(h.x, h.n.x, 1, i);
                h = h.n;
              } else {
                if (d)
                  for (f = h.p.z, o = f.length - 1; o >= 0; --o)
                    i.point((s = f[o])[0], s[1]);
                else r(h.x, h.p.x, -1, i);
                h = h.p;
              }
              (f = (h = h.o).z), (d = !d);
            } while (!h.v);
            i.lineEnd();
          }
        }
      };
      function zp(t) {
        if ((n = t.length)) {
          for (var n, e, r = 0, i = t[0]; ++r < n; )
            (i.n = e = t[r]), (e.p = i), (i = e);
          (i.n = e = t[0]), (e.p = i);
        }
      }
      function $p(t) {
        return Ph(t[0]) <= Sh ? t[0] : Ih(t[0]) * (((Ph(t[0]) + Sh) % Nh) - Sh);
      }
      var Op = function (t, n) {
          var e = $p(n),
            r = n[1],
            i = Bh(r),
            o = [Bh(e), -Oh(e), 0],
            u = 0,
            a = 0,
            c = new z();
          1 === i ? (r = Th + 1e-6) : -1 === i && (r = -Th - 1e-6);
          for (var f = 0, s = t.length; f < s; ++f)
            if ((h = (l = t[f]).length))
              for (
                var l,
                  h,
                  d = l[h - 1],
                  p = $p(d),
                  g = d[1] / 2 + Eh,
                  y = Bh(g),
                  v = Oh(g),
                  _ = 0;
                _ < h;
                ++_, p = b, y = w, v = M, d = m
              ) {
                var m = l[_],
                  b = $p(m),
                  x = m[1] / 2 + Eh,
                  w = Bh(x),
                  M = Oh(x),
                  A = b - p,
                  S = A >= 0 ? 1 : -1,
                  T = S * A,
                  E = T > Sh,
                  N = y * w;
                if (
                  (c.add($h(N * S * Bh(T), v * M + N * Oh(T))),
                  (u += E ? A + S * Nh : A),
                  E ^ (p >= e) ^ (b >= e))
                ) {
                  var k = Ed(Sd(d), Sd(m));
                  Cd(k);
                  var C = Ed(o, k);
                  Cd(C);
                  var P = (E ^ (A >= 0) ? -1 : 1) * Hh(C[2]);
                  (r > P || (r === P && (k[0] || k[1]))) &&
                    (a += E ^ (A >= 0) ? 1 : -1);
                }
              }
          return (u < -1e-6 || (u < 1e-6 && c < -1e-12)) ^ (1 & a);
        },
        Dp = function (t, n, e, r) {
          return function (i) {
            var o,
              u,
              a,
              c = n(i),
              f = Np(),
              s = n(f),
              l = !1,
              h = {
                point: d,
                lineStart: g,
                lineEnd: y,
                polygonStart: function () {
                  (h.point = v),
                    (h.lineStart = _),
                    (h.lineEnd = m),
                    (u = []),
                    (o = []);
                },
                polygonEnd: function () {
                  (h.point = d),
                    (h.lineStart = g),
                    (h.lineEnd = y),
                    (u = zt(u));
                  var t = Op(o, r);
                  u.length
                    ? (l || (i.polygonStart(), (l = !0)), Pp(u, jp, t, e, i))
                    : t &&
                      (l || (i.polygonStart(), (l = !0)),
                      i.lineStart(),
                      e(null, null, 1, i),
                      i.lineEnd()),
                    l && (i.polygonEnd(), (l = !1)),
                    (u = o = null);
                },
                sphere: function () {
                  i.polygonStart(),
                    i.lineStart(),
                    e(null, null, 1, i),
                    i.lineEnd(),
                    i.polygonEnd();
                },
              };
            function d(n, e) {
              t(n, e) && i.point(n, e);
            }
            function p(t, n) {
              c.point(t, n);
            }
            function g() {
              (h.point = p), c.lineStart();
            }
            function y() {
              (h.point = d), c.lineEnd();
            }
            function v(t, n) {
              a.push([t, n]), s.point(t, n);
            }
            function _() {
              s.lineStart(), (a = []);
            }
            function m() {
              v(a[0][0], a[0][1]), s.lineEnd();
              var t,
                n,
                e,
                r,
                c = s.clean(),
                h = f.result(),
                d = h.length;
              if ((a.pop(), o.push(a), (a = null), d))
                if (1 & c) {
                  if ((n = (e = h[0]).length - 1) > 0) {
                    for (
                      l || (i.polygonStart(), (l = !0)), i.lineStart(), t = 0;
                      t < n;
                      ++t
                    )
                      i.point((r = e[t])[0], r[1]);
                    i.lineEnd();
                  }
                } else
                  d > 1 && 2 & c && h.push(h.pop().concat(h.shift())),
                    u.push(h.filter(Rp));
            }
            return h;
          };
        };
      function Rp(t) {
        return t.length > 1;
      }
      function jp(t, n) {
        return (
          ((t = t.x)[0] < 0 ? t[1] - Th - 1e-6 : Th - t[1]) -
          ((n = n.x)[0] < 0 ? n[1] - Th - 1e-6 : Th - n[1])
        );
      }
      var qp = Dp(
        function () {
          return !0;
        },
        function (t) {
          var n,
            e = NaN,
            r = NaN,
            i = NaN;
          return {
            lineStart: function () {
              t.lineStart(), (n = 1);
            },
            point: function (o, u) {
              var a = o > 0 ? Sh : -Sh,
                c = Ph(o - e);
              Ph(c - Sh) < 1e-6
                ? (t.point(e, (r = (r + u) / 2 > 0 ? Th : -Th)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(a, r),
                  t.point(o, r),
                  (n = 0))
                : i !== a &&
                  c >= Sh &&
                  (Ph(e - i) < 1e-6 && (e -= 1e-6 * i),
                  Ph(o - a) < 1e-6 && (o -= 1e-6 * a),
                  (r = (function (t, n, e, r) {
                    var i,
                      o,
                      u = Bh(t - e);
                    return Ph(u) > 1e-6
                      ? zh(
                          (Bh(n) * (o = Oh(r)) * Bh(e) -
                            Bh(r) * (i = Oh(n)) * Bh(t)) /
                            (i * o * u)
                        )
                      : (n + r) / 2;
                  })(e, r, o, u)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(a, r),
                  (n = 0)),
                t.point((e = o), (r = u)),
                (i = a);
            },
            lineEnd: function () {
              t.lineEnd(), (e = r = NaN);
            },
            clean: function () {
              return 2 - n;
            },
          };
        },
        function (t, n, e, r) {
          var i;
          if (null == t)
            (i = e * Th),
              r.point(-Sh, i),
              r.point(0, i),
              r.point(Sh, i),
              r.point(Sh, 0),
              r.point(Sh, -i),
              r.point(0, -i),
              r.point(-Sh, -i),
              r.point(-Sh, 0),
              r.point(-Sh, i);
          else if (Ph(t[0] - n[0]) > 1e-6) {
            var o = t[0] < n[0] ? Sh : -Sh;
            (i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
          } else r.point(n[0], n[1]);
        },
        [-Sh, -Th]
      );
      var Fp = function (t) {
        var n = Oh(t),
          e = 6 * Ch,
          r = n > 0,
          i = Ph(n) > 1e-6;
        function o(t, e) {
          return Oh(t) * Oh(e) > n;
        }
        function u(t, e, r) {
          var i = [1, 0, 0],
            o = Ed(Sd(t), Sd(e)),
            u = Td(o, o),
            a = o[0],
            c = u - a * a;
          if (!c) return !r && t;
          var f = (n * u) / c,
            s = (-n * a) / c,
            l = Ed(i, o),
            h = kd(i, f);
          Nd(h, kd(o, s));
          var d = l,
            p = Td(h, d),
            g = Td(d, d),
            y = p * p - g * (Td(h, h) - 1);
          if (!(y < 0)) {
            var v = Uh(y),
              _ = kd(d, (-p - v) / g);
            if ((Nd(_, h), (_ = Ad(_)), !r)) return _;
            var m,
              b = t[0],
              x = e[0],
              w = t[1],
              M = e[1];
            x < b && ((m = b), (b = x), (x = m));
            var A = x - b,
              S = Ph(A - Sh) < 1e-6;
            if (
              (!S && M < w && ((m = w), (w = M), (M = m)),
              S || A < 1e-6
                ? S
                  ? (w + M > 0) ^ (_[1] < (Ph(_[0] - b) < 1e-6 ? w : M))
                  : w <= _[1] && _[1] <= M
                : (A > Sh) ^ (b <= _[0] && _[0] <= x))
            ) {
              var T = kd(d, (-p + v) / g);
              return Nd(T, h), [_, Ad(T)];
            }
          }
        }
        function a(n, e) {
          var i = r ? t : Sh - t,
            o = 0;
          return (
            n < -i ? (o |= 1) : n > i && (o |= 2),
            e < -i ? (o |= 4) : e > i && (o |= 8),
            o
          );
        }
        return Dp(
          o,
          function (t) {
            var n, e, c, f, s;
            return {
              lineStart: function () {
                (f = c = !1), (s = 1);
              },
              point: function (l, h) {
                var d,
                  p = [l, h],
                  g = o(l, h),
                  y = r
                    ? g
                      ? 0
                      : a(l, h)
                    : g
                    ? a(l + (l < 0 ? Sh : -Sh), h)
                    : 0;
                if (
                  (!n && (f = c = g) && t.lineStart(),
                  g !== c &&
                    (!(d = u(n, p)) || kp(n, d) || kp(p, d)) &&
                    (p[2] = 1),
                  g !== c)
                )
                  (s = 0),
                    g
                      ? (t.lineStart(), (d = u(p, n)), t.point(d[0], d[1]))
                      : ((d = u(n, p)), t.point(d[0], d[1], 2), t.lineEnd()),
                    (n = d);
                else if (i && n && r ^ g) {
                  var v;
                  y & e ||
                    !(v = u(p, n, !0)) ||
                    ((s = 0),
                    r
                      ? (t.lineStart(),
                        t.point(v[0][0], v[0][1]),
                        t.point(v[1][0], v[1][1]),
                        t.lineEnd())
                      : (t.point(v[1][0], v[1][1]),
                        t.lineEnd(),
                        t.lineStart(),
                        t.point(v[0][0], v[0][1], 3)));
                }
                !g || (n && kp(n, p)) || t.point(p[0], p[1]),
                  (n = p),
                  (c = g),
                  (e = y);
              },
              lineEnd: function () {
                c && t.lineEnd(), (n = null);
              },
              clean: function () {
                return s | ((f && c) << 1);
              },
            };
          },
          function (n, r, i, o) {
            Sp(o, t, e, i, n, r);
          },
          r ? [0, -t] : [-Sh, t - Sh]
        );
      };
      function Bp(t, n, e, r) {
        function i(i, o) {
          return t <= i && i <= e && n <= o && o <= r;
        }
        function o(i, o, a, f) {
          var s = 0,
            l = 0;
          if (
            null == i ||
            (s = u(i, a)) !== (l = u(o, a)) ||
            (c(i, o) < 0) ^ (a > 0)
          )
            do {
              f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
            } while ((s = (s + a + 4) % 4) !== l);
          else f.point(o[0], o[1]);
        }
        function u(r, i) {
          return Ph(r[0] - t) < 1e-6
            ? i > 0
              ? 0
              : 3
            : Ph(r[0] - e) < 1e-6
            ? i > 0
              ? 2
              : 1
            : Ph(r[1] - n) < 1e-6
            ? i > 0
              ? 1
              : 0
            : i > 0
            ? 3
            : 2;
        }
        function a(t, n) {
          return c(t.x, n.x);
        }
        function c(t, n) {
          var e = u(t, 1),
            r = u(n, 1);
          return e !== r
            ? e - r
            : 0 === e
            ? n[1] - t[1]
            : 1 === e
            ? t[0] - n[0]
            : 2 === e
            ? t[1] - n[1]
            : n[0] - t[0];
        }
        return function (u) {
          var c,
            f,
            s,
            l,
            h,
            d,
            p,
            g,
            y,
            v,
            _,
            m = u,
            b = Np(),
            x = {
              point: w,
              lineStart: function () {
                (x.point = M), f && f.push((s = []));
                (v = !0), (y = !1), (p = g = NaN);
              },
              lineEnd: function () {
                c && (M(l, h), d && y && b.rejoin(), c.push(b.result()));
                (x.point = w), y && m.lineEnd();
              },
              polygonStart: function () {
                (m = b), (c = []), (f = []), (_ = !0);
              },
              polygonEnd: function () {
                var n = (function () {
                    for (var n = 0, e = 0, i = f.length; e < i; ++e)
                      for (
                        var o,
                          u,
                          a = f[e],
                          c = 1,
                          s = a.length,
                          l = a[0],
                          h = l[0],
                          d = l[1];
                        c < s;
                        ++c
                      )
                        (o = h),
                          (u = d),
                          (l = a[c]),
                          (h = l[0]),
                          (d = l[1]),
                          u <= r
                            ? d > r &&
                              (h - o) * (r - u) > (d - u) * (t - o) &&
                              ++n
                            : d <= r &&
                              (h - o) * (r - u) < (d - u) * (t - o) &&
                              --n;
                    return n;
                  })(),
                  e = _ && n,
                  i = (c = zt(c)).length;
                (e || i) &&
                  (u.polygonStart(),
                  e && (u.lineStart(), o(null, null, 1, u), u.lineEnd()),
                  i && Pp(c, a, n, o, u),
                  u.polygonEnd());
                (m = u), (c = f = s = null);
              },
            };
          function w(t, n) {
            i(t, n) && m.point(t, n);
          }
          function M(o, u) {
            var a = i(o, u);
            if ((f && s.push([o, u]), v))
              (l = o),
                (h = u),
                (d = a),
                (v = !1),
                a && (m.lineStart(), m.point(o, u));
            else if (a && y) m.point(o, u);
            else {
              var c = [
                  (p = Math.max(-1e9, Math.min(1e9, p))),
                  (g = Math.max(-1e9, Math.min(1e9, g))),
                ],
                b = [
                  (o = Math.max(-1e9, Math.min(1e9, o))),
                  (u = Math.max(-1e9, Math.min(1e9, u))),
                ];
              !(function (t, n, e, r, i, o) {
                var u,
                  a = t[0],
                  c = t[1],
                  f = 0,
                  s = 1,
                  l = n[0] - a,
                  h = n[1] - c;
                if (((u = e - a), l || !(u > 0))) {
                  if (((u /= l), l < 0)) {
                    if (u < f) return;
                    u < s && (s = u);
                  } else if (l > 0) {
                    if (u > s) return;
                    u > f && (f = u);
                  }
                  if (((u = i - a), l || !(u < 0))) {
                    if (((u /= l), l < 0)) {
                      if (u > s) return;
                      u > f && (f = u);
                    } else if (l > 0) {
                      if (u < f) return;
                      u < s && (s = u);
                    }
                    if (((u = r - c), h || !(u > 0))) {
                      if (((u /= h), h < 0)) {
                        if (u < f) return;
                        u < s && (s = u);
                      } else if (h > 0) {
                        if (u > s) return;
                        u > f && (f = u);
                      }
                      if (((u = o - c), h || !(u < 0))) {
                        if (((u /= h), h < 0)) {
                          if (u > s) return;
                          u > f && (f = u);
                        } else if (h > 0) {
                          if (u < f) return;
                          u < s && (s = u);
                        }
                        return (
                          f > 0 && ((t[0] = a + f * l), (t[1] = c + f * h)),
                          s < 1 && ((n[0] = a + s * l), (n[1] = c + s * h)),
                          !0
                        );
                      }
                    }
                  }
                }
              })(c, b, t, n, e, r)
                ? a && (m.lineStart(), m.point(o, u), (_ = !1))
                : (y || (m.lineStart(), m.point(c[0], c[1])),
                  m.point(b[0], b[1]),
                  a || m.lineEnd(),
                  (_ = !1));
            }
            (p = o), (g = u), (y = a);
          }
          return x;
        };
      }
      var Ip,
        Up,
        Lp,
        Yp,
        Hp = function () {
          var t,
            n,
            e,
            r = 0,
            i = 0,
            o = 960,
            u = 500;
          return (e = {
            stream: function (e) {
              return t && n === e ? t : (t = Bp(r, i, o, u)((n = e)));
            },
            extent: function (a) {
              return arguments.length
                ? ((r = +a[0][0]),
                  (i = +a[0][1]),
                  (o = +a[1][0]),
                  (u = +a[1][1]),
                  (t = n = null),
                  e)
                : [
                    [r, i],
                    [o, u],
                  ];
            },
          });
        },
        Xp = {
          sphere: Vh,
          point: Vh,
          lineStart: function () {
            (Xp.point = Gp), (Xp.lineEnd = Vp);
          },
          lineEnd: Vh,
          polygonStart: Vh,
          polygonEnd: Vh,
        };
      function Vp() {
        Xp.point = Xp.lineEnd = Vh;
      }
      function Gp(t, n) {
        (Up = t *= Ch), (Lp = Bh((n *= Ch))), (Yp = Oh(n)), (Xp.point = Jp);
      }
      function Jp(t, n) {
        t *= Ch;
        var e = Bh((n *= Ch)),
          r = Oh(n),
          i = Ph(t - Up),
          o = Oh(i),
          u = r * Bh(i),
          a = Yp * e - Lp * r * o,
          c = Lp * e + Yp * r * o;
        Ip.add($h(Uh(u * u + a * a), c)), (Up = t), (Lp = e), (Yp = r);
      }
      var Zp = function (t) {
          return (Ip = new z()), id(t, Xp), +Ip;
        },
        Wp = [null, null],
        Kp = { type: "LineString", coordinates: Wp },
        Qp = function (t, n) {
          return (Wp[0] = t), (Wp[1] = n), Zp(Kp);
        },
        tg = {
          Feature: function (t, n) {
            return eg(t.geometry, n);
          },
          FeatureCollection: function (t, n) {
            for (var e = t.features, r = -1, i = e.length; ++r < i; )
              if (eg(e[r].geometry, n)) return !0;
            return !1;
          },
        },
        ng = {
          Sphere: function () {
            return !0;
          },
          Point: function (t, n) {
            return rg(t.coordinates, n);
          },
          MultiPoint: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              if (rg(e[r], n)) return !0;
            return !1;
          },
          LineString: function (t, n) {
            return ig(t.coordinates, n);
          },
          MultiLineString: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              if (ig(e[r], n)) return !0;
            return !1;
          },
          Polygon: function (t, n) {
            return og(t.coordinates, n);
          },
          MultiPolygon: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              if (og(e[r], n)) return !0;
            return !1;
          },
          GeometryCollection: function (t, n) {
            for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
              if (eg(e[r], n)) return !0;
            return !1;
          },
        };
      function eg(t, n) {
        return !(!t || !ng.hasOwnProperty(t.type)) && ng[t.type](t, n);
      }
      function rg(t, n) {
        return 0 === Qp(t, n);
      }
      function ig(t, n) {
        for (var e, r, i, o = 0, u = t.length; o < u; o++) {
          if (0 === (r = Qp(t[o], n))) return !0;
          if (
            o > 0 &&
            (i = Qp(t[o], t[o - 1])) > 0 &&
            e <= i &&
            r <= i &&
            (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < 1e-12 * i
          )
            return !0;
          e = r;
        }
        return !1;
      }
      function og(t, n) {
        return !!Op(t.map(ug), ag(n));
      }
      function ug(t) {
        return (t = t.map(ag)).pop(), t;
      }
      function ag(t) {
        return [t[0] * Ch, t[1] * Ch];
      }
      var cg = function (t, n) {
        return (t && tg.hasOwnProperty(t.type) ? tg[t.type] : eg)(t, n);
      };
      function fg(t, n, e) {
        var r = Rt(t, n - 1e-6, e).concat(n);
        return function (t) {
          return r.map(function (n) {
            return [t, n];
          });
        };
      }
      function sg(t, n, e) {
        var r = Rt(t, n - 1e-6, e).concat(n);
        return function (t) {
          return r.map(function (n) {
            return [n, t];
          });
        };
      }
      function lg() {
        var t,
          n,
          e,
          r,
          i,
          o,
          u,
          a,
          c,
          f,
          s,
          l,
          h = 10,
          d = h,
          p = 90,
          g = 360,
          y = 2.5;
        function v() {
          return { type: "MultiLineString", coordinates: _() };
        }
        function _() {
          return Rt(Dh(r / p) * p, e, p)
            .map(s)
            .concat(Rt(Dh(a / g) * g, u, g).map(l))
            .concat(
              Rt(Dh(n / h) * h, t, h)
                .filter(function (t) {
                  return Ph(t % p) > 1e-6;
                })
                .map(c)
            )
            .concat(
              Rt(Dh(o / d) * d, i, d)
                .filter(function (t) {
                  return Ph(t % g) > 1e-6;
                })
                .map(f)
            );
        }
        return (
          (v.lines = function () {
            return _().map(function (t) {
              return { type: "LineString", coordinates: t };
            });
          }),
          (v.outline = function () {
            return {
              type: "Polygon",
              coordinates: [
                s(r).concat(
                  l(u).slice(1),
                  s(e).reverse().slice(1),
                  l(a).reverse().slice(1)
                ),
              ],
            };
          }),
          (v.extent = function (t) {
            return arguments.length
              ? v.extentMajor(t).extentMinor(t)
              : v.extentMinor();
          }),
          (v.extentMajor = function (t) {
            return arguments.length
              ? ((r = +t[0][0]),
                (e = +t[1][0]),
                (a = +t[0][1]),
                (u = +t[1][1]),
                r > e && ((t = r), (r = e), (e = t)),
                a > u && ((t = a), (a = u), (u = t)),
                v.precision(y))
              : [
                  [r, a],
                  [e, u],
                ];
          }),
          (v.extentMinor = function (e) {
            return arguments.length
              ? ((n = +e[0][0]),
                (t = +e[1][0]),
                (o = +e[0][1]),
                (i = +e[1][1]),
                n > t && ((e = n), (n = t), (t = e)),
                o > i && ((e = o), (o = i), (i = e)),
                v.precision(y))
              : [
                  [n, o],
                  [t, i],
                ];
          }),
          (v.step = function (t) {
            return arguments.length
              ? v.stepMajor(t).stepMinor(t)
              : v.stepMinor();
          }),
          (v.stepMajor = function (t) {
            return arguments.length ? ((p = +t[0]), (g = +t[1]), v) : [p, g];
          }),
          (v.stepMinor = function (t) {
            return arguments.length ? ((h = +t[0]), (d = +t[1]), v) : [h, d];
          }),
          (v.precision = function (h) {
            return arguments.length
              ? ((y = +h),
                (c = fg(o, i, 90)),
                (f = sg(n, t, y)),
                (s = fg(a, u, 90)),
                (l = sg(r, e, y)),
                v)
              : y;
          }),
          v
            .extentMajor([
              [-180, -89.999999],
              [180, 89.999999],
            ])
            .extentMinor([
              [-180, -80.000001],
              [180, 80.000001],
            ])
        );
      }
      function hg() {
        return lg()();
      }
      var dg,
        pg,
        gg,
        yg,
        vg = function (t, n) {
          var e = t[0] * Ch,
            r = t[1] * Ch,
            i = n[0] * Ch,
            o = n[1] * Ch,
            u = Oh(r),
            a = Bh(r),
            c = Oh(o),
            f = Bh(o),
            s = u * Oh(e),
            l = u * Bh(e),
            h = c * Oh(i),
            d = c * Bh(i),
            p = 2 * Hh(Uh(Xh(o - r) + u * c * Xh(i - e))),
            g = Bh(p),
            y = p
              ? function (t) {
                  var n = Bh((t *= p)) / g,
                    e = Bh(p - t) / g,
                    r = e * s + n * h,
                    i = e * l + n * d,
                    o = e * a + n * f;
                  return [$h(i, r) * kh, $h(o, Uh(r * r + i * i)) * kh];
                }
              : function () {
                  return [e * kh, r * kh];
                };
          return (y.distance = p), y;
        },
        _g = (t) => t,
        mg = new z(),
        bg = new z(),
        xg = {
          point: Vh,
          lineStart: Vh,
          lineEnd: Vh,
          polygonStart: function () {
            (xg.lineStart = wg), (xg.lineEnd = Sg);
          },
          polygonEnd: function () {
            (xg.lineStart = xg.lineEnd = xg.point = Vh),
              mg.add(Ph(bg)),
              (bg = new z());
          },
          result: function () {
            var t = mg / 2;
            return (mg = new z()), t;
          },
        };
      function wg() {
        xg.point = Mg;
      }
      function Mg(t, n) {
        (xg.point = Ag), (dg = gg = t), (pg = yg = n);
      }
      function Ag(t, n) {
        bg.add(yg * t - gg * n), (gg = t), (yg = n);
      }
      function Sg() {
        Ag(dg, pg);
      }
      var Tg = xg,
        Eg = 1 / 0,
        Ng = Eg,
        kg = -Eg,
        Cg = kg;
      var Pg,
        zg,
        $g,
        Og,
        Dg = {
          point: function (t, n) {
            t < Eg && (Eg = t);
            t > kg && (kg = t);
            n < Ng && (Ng = n);
            n > Cg && (Cg = n);
          },
          lineStart: Vh,
          lineEnd: Vh,
          polygonStart: Vh,
          polygonEnd: Vh,
          result: function () {
            var t = [
              [Eg, Ng],
              [kg, Cg],
            ];
            return (kg = Cg = -(Ng = Eg = 1 / 0)), t;
          },
        },
        Rg = 0,
        jg = 0,
        qg = 0,
        Fg = 0,
        Bg = 0,
        Ig = 0,
        Ug = 0,
        Lg = 0,
        Yg = 0,
        Hg = {
          point: Xg,
          lineStart: Vg,
          lineEnd: Zg,
          polygonStart: function () {
            (Hg.lineStart = Wg), (Hg.lineEnd = Kg);
          },
          polygonEnd: function () {
            (Hg.point = Xg), (Hg.lineStart = Vg), (Hg.lineEnd = Zg);
          },
          result: function () {
            var t = Yg
              ? [Ug / Yg, Lg / Yg]
              : Ig
              ? [Fg / Ig, Bg / Ig]
              : qg
              ? [Rg / qg, jg / qg]
              : [NaN, NaN];
            return (Rg = jg = qg = Fg = Bg = Ig = Ug = Lg = Yg = 0), t;
          },
        };
      function Xg(t, n) {
        (Rg += t), (jg += n), ++qg;
      }
      function Vg() {
        Hg.point = Gg;
      }
      function Gg(t, n) {
        (Hg.point = Jg), Xg(($g = t), (Og = n));
      }
      function Jg(t, n) {
        var e = t - $g,
          r = n - Og,
          i = Uh(e * e + r * r);
        (Fg += (i * ($g + t)) / 2),
          (Bg += (i * (Og + n)) / 2),
          (Ig += i),
          Xg(($g = t), (Og = n));
      }
      function Zg() {
        Hg.point = Xg;
      }
      function Wg() {
        Hg.point = Qg;
      }
      function Kg() {
        ty(Pg, zg);
      }
      function Qg(t, n) {
        (Hg.point = ty), Xg((Pg = $g = t), (zg = Og = n));
      }
      function ty(t, n) {
        var e = t - $g,
          r = n - Og,
          i = Uh(e * e + r * r);
        (Fg += (i * ($g + t)) / 2),
          (Bg += (i * (Og + n)) / 2),
          (Ig += i),
          (Ug += (i = Og * t - $g * n) * ($g + t)),
          (Lg += i * (Og + n)),
          (Yg += 3 * i),
          Xg(($g = t), (Og = n));
      }
      var ny = Hg;
      function ey(t) {
        this._context = t;
      }
      ey.prototype = {
        _radius: 4.5,
        pointRadius: function (t) {
          return (this._radius = t), this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._context.closePath(), (this._point = NaN);
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._context.moveTo(t, n), (this._point = 1);
              break;
            case 1:
              this._context.lineTo(t, n);
              break;
            default:
              this._context.moveTo(t + this._radius, n),
                this._context.arc(t, n, this._radius, 0, Nh);
          }
        },
        result: Vh,
      };
      var ry,
        iy,
        oy,
        uy,
        ay,
        cy = new z(),
        fy = {
          point: Vh,
          lineStart: function () {
            fy.point = sy;
          },
          lineEnd: function () {
            ry && ly(iy, oy), (fy.point = Vh);
          },
          polygonStart: function () {
            ry = !0;
          },
          polygonEnd: function () {
            ry = null;
          },
          result: function () {
            var t = +cy;
            return (cy = new z()), t;
          },
        };
      function sy(t, n) {
        (fy.point = ly), (iy = uy = t), (oy = ay = n);
      }
      function ly(t, n) {
        (uy -= t), (ay -= n), cy.add(Uh(uy * uy + ay * ay)), (uy = t), (ay = n);
      }
      var hy = fy;
      let dy, py, gy, yy;
      class vy {
        constructor(t) {
          (this._append =
            null == t
              ? _y
              : (function (t) {
                  const n = Math.floor(t);
                  if (!(n >= 0)) throw new RangeError("invalid digits: " + t);
                  if (n > 15) return _y;
                  if (n !== dy) {
                    const t = 10 ** n;
                    (dy = n),
                      (py = function (n) {
                        let e = 1;
                        this._ += n[0];
                        for (const r = n.length; e < r; ++e)
                          this._ += Math.round(arguments[e] * t) / t + n[e];
                      });
                  }
                  return py;
                })(t)),
            (this._radius = 4.5),
            (this._ = "");
        }
        pointRadius(t) {
          return (this._radius = +t), this;
        }
        polygonStart() {
          this._line = 0;
        }
        polygonEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          0 === this._line && (this._ += "Z"), (this._point = NaN);
        }
        point(t, n) {
          switch (this._point) {
            case 0:
              this._append`M${t},${n}`, (this._point = 1);
              break;
            case 1:
              this._append`L${t},${n}`;
              break;
            default:
              if (
                (this._append`M${t},${n}`,
                this._radius !== gy || this._append !== py)
              ) {
                const t = this._radius,
                  n = this._;
                (this._ = ""),
                  this._append`m0,${t}a${t},${t} 0 1,1 0,${
                    -2 * t
                  }a${t},${t} 0 1,1 0,${2 * t}z`,
                  (gy = t),
                  (py = this._append),
                  (yy = this._),
                  (this._ = n);
              }
              this._ += yy;
          }
        }
        result() {
          const t = this._;
          return (this._ = ""), t.length ? t : null;
        }
      }
      function _y(t) {
        let n = 1;
        this._ += t[0];
        for (const e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
      }
      var my = function (t, n) {
          let e,
            r,
            i = 3,
            o = 4.5;
          function u(t) {
            return (
              t &&
                ("function" == typeof o &&
                  r.pointRadius(+o.apply(this, arguments)),
                id(t, e(r))),
              r.result()
            );
          }
          return (
            (u.area = function (t) {
              return id(t, e(Tg)), Tg.result();
            }),
            (u.measure = function (t) {
              return id(t, e(hy)), hy.result();
            }),
            (u.bounds = function (t) {
              return id(t, e(Dg)), Dg.result();
            }),
            (u.centroid = function (t) {
              return id(t, e(ny)), ny.result();
            }),
            (u.projection = function (n) {
              return arguments.length
                ? ((e = null == n ? ((t = null), _g) : (t = n).stream), u)
                : t;
            }),
            (u.context = function (t) {
              return arguments.length
                ? ((r = null == t ? ((n = null), new vy(i)) : new ey((n = t))),
                  "function" != typeof o && r.pointRadius(o),
                  u)
                : n;
            }),
            (u.pointRadius = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : (r.pointRadius(+t), +t)),
                  u)
                : o;
            }),
            (u.digits = function (t) {
              if (!arguments.length) return i;
              if (null == t) i = null;
              else {
                const n = Math.floor(t);
                if (!(n >= 0)) throw new RangeError("invalid digits: " + t);
                i = n;
              }
              return null === n && (r = new vy(i)), u;
            }),
            u.projection(t).digits(i).context(n)
          );
        },
        by = function (t) {
          return { stream: xy(t) };
        };
      function xy(t) {
        return function (n) {
          var e = new wy();
          for (var r in t) e[r] = t[r];
          return (e.stream = n), e;
        };
      }
      function wy() {}
      function My(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return (
          t.scale(150).translate([0, 0]),
          null != r && t.clipExtent(null),
          id(e, t.stream(Dg)),
          n(Dg.result()),
          null != r && t.clipExtent(r),
          t
        );
      }
      function Ay(t, n, e) {
        return My(
          t,
          function (e) {
            var r = n[1][0] - n[0][0],
              i = n[1][1] - n[0][1],
              o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
              u = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
              a = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([u, a]);
          },
          e
        );
      }
      function Sy(t, n, e) {
        return Ay(t, [[0, 0], n], e);
      }
      function Ty(t, n, e) {
        return My(
          t,
          function (e) {
            var r = +n,
              i = r / (e[1][0] - e[0][0]),
              o = (r - i * (e[1][0] + e[0][0])) / 2,
              u = -i * e[0][1];
            t.scale(150 * i).translate([o, u]);
          },
          e
        );
      }
      function Ey(t, n, e) {
        return My(
          t,
          function (e) {
            var r = +n,
              i = r / (e[1][1] - e[0][1]),
              o = -i * e[0][0],
              u = (r - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([o, u]);
          },
          e
        );
      }
      wy.prototype = {
        constructor: wy,
        point: function (t, n) {
          this.stream.point(t, n);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      };
      var Ny = Oh(30 * Ch),
        ky = function (t, n) {
          return +n
            ? (function (t, n) {
                function e(r, i, o, u, a, c, f, s, l, h, d, p, g, y) {
                  var v = f - r,
                    _ = s - i,
                    m = v * v + _ * _;
                  if (m > 4 * n && g--) {
                    var b = u + h,
                      x = a + d,
                      w = c + p,
                      M = Uh(b * b + x * x + w * w),
                      A = Hh((w /= M)),
                      S =
                        Ph(Ph(w) - 1) < 1e-6 || Ph(o - l) < 1e-6
                          ? (o + l) / 2
                          : $h(x, b),
                      T = t(S, A),
                      E = T[0],
                      N = T[1],
                      k = E - r,
                      C = N - i,
                      P = _ * k - v * C;
                    ((P * P) / m > n ||
                      Ph((v * k + _ * C) / m - 0.5) > 0.3 ||
                      u * h + a * d + c * p < Ny) &&
                      (e(
                        r,
                        i,
                        o,
                        u,
                        a,
                        c,
                        E,
                        N,
                        S,
                        (b /= M),
                        (x /= M),
                        w,
                        g,
                        y
                      ),
                      y.point(E, N),
                      e(E, N, S, b, x, w, f, s, l, h, d, p, g, y));
                  }
                }
                return function (n) {
                  var r,
                    i,
                    o,
                    u,
                    a,
                    c,
                    f,
                    s,
                    l,
                    h,
                    d,
                    p,
                    g = {
                      point: y,
                      lineStart: v,
                      lineEnd: m,
                      polygonStart: function () {
                        n.polygonStart(), (g.lineStart = b);
                      },
                      polygonEnd: function () {
                        n.polygonEnd(), (g.lineStart = v);
                      },
                    };
                  function y(e, r) {
                    (e = t(e, r)), n.point(e[0], e[1]);
                  }
                  function v() {
                    (s = NaN), (g.point = _), n.lineStart();
                  }
                  function _(r, i) {
                    var o = Sd([r, i]),
                      u = t(r, i);
                    e(
                      s,
                      l,
                      f,
                      h,
                      d,
                      p,
                      (s = u[0]),
                      (l = u[1]),
                      (f = r),
                      (h = o[0]),
                      (d = o[1]),
                      (p = o[2]),
                      16,
                      n
                    ),
                      n.point(s, l);
                  }
                  function m() {
                    (g.point = y), n.lineEnd();
                  }
                  function b() {
                    v(), (g.point = x), (g.lineEnd = w);
                  }
                  function x(t, n) {
                    _((r = t), n),
                      (i = s),
                      (o = l),
                      (u = h),
                      (a = d),
                      (c = p),
                      (g.point = _);
                  }
                  function w() {
                    e(s, l, f, h, d, p, i, o, r, u, a, c, 16, n),
                      (g.lineEnd = m),
                      m();
                  }
                  return g;
                };
              })(t, n)
            : (function (t) {
                return xy({
                  point: function (n, e) {
                    (n = t(n, e)), this.stream.point(n[0], n[1]);
                  },
                });
              })(t);
        };
      var Cy = xy({
        point: function (t, n) {
          this.stream.point(t * Ch, n * Ch);
        },
      });
      function Py(t, n, e, r, i, o) {
        if (!o)
          return (function (t, n, e, r, i) {
            function o(o, u) {
              return [n + t * (o *= r), e - t * (u *= i)];
            }
            return (
              (o.invert = function (o, u) {
                return [((o - n) / t) * r, ((e - u) / t) * i];
              }),
              o
            );
          })(t, n, e, r, i);
        var u = Oh(o),
          a = Bh(o),
          c = u * t,
          f = a * t,
          s = u / t,
          l = a / t,
          h = (a * e - u * n) / t,
          d = (a * n + u * e) / t;
        function p(t, o) {
          return [c * (t *= r) - f * (o *= i) + n, e - f * t - c * o];
        }
        return (
          (p.invert = function (t, n) {
            return [r * (s * t - l * n + h), i * (d - l * t - s * n)];
          }),
          p
        );
      }
      function zy(t) {
        return $y(function () {
          return t;
        })();
      }
      function $y(t) {
        var n,
          e,
          r,
          i,
          o,
          u,
          a,
          c,
          f,
          s,
          l = 150,
          h = 480,
          d = 250,
          p = 0,
          g = 0,
          y = 0,
          v = 0,
          _ = 0,
          m = 0,
          b = 1,
          x = 1,
          w = null,
          M = qp,
          A = null,
          S = _g,
          T = 0.5;
        function E(t) {
          return c(t[0] * Ch, t[1] * Ch);
        }
        function N(t) {
          return (t = c.invert(t[0], t[1])) && [t[0] * kh, t[1] * kh];
        }
        function k() {
          var t = Py(l, 0, 0, b, x, m).apply(null, n(p, g)),
            r = Py(l, h - t[0], d - t[1], b, x, m);
          return (
            (e = bp(y, v, _)),
            (a = _p(n, r)),
            (c = _p(e, a)),
            (u = ky(a, T)),
            C()
          );
        }
        function C() {
          return (f = s = null), E;
        }
        return (
          (E.stream = function (t) {
            return f && s === t
              ? f
              : (f = Cy(
                  (function (t) {
                    return xy({
                      point: function (n, e) {
                        var r = t(n, e);
                        return this.stream.point(r[0], r[1]);
                      },
                    });
                  })(e)(M(u(S((s = t)))))
                ));
          }),
          (E.preclip = function (t) {
            return arguments.length ? ((M = t), (w = void 0), C()) : M;
          }),
          (E.postclip = function (t) {
            return arguments.length
              ? ((S = t), (A = r = i = o = null), C())
              : S;
          }),
          (E.clipAngle = function (t) {
            return arguments.length
              ? ((M = +t ? Fp((w = t * Ch)) : ((w = null), qp)), C())
              : w * kh;
          }),
          (E.clipExtent = function (t) {
            return arguments.length
              ? ((S =
                  null == t
                    ? ((A = r = i = o = null), _g)
                    : Bp(
                        (A = +t[0][0]),
                        (r = +t[0][1]),
                        (i = +t[1][0]),
                        (o = +t[1][1])
                      )),
                C())
              : null == A
              ? null
              : [
                  [A, r],
                  [i, o],
                ];
          }),
          (E.scale = function (t) {
            return arguments.length ? ((l = +t), k()) : l;
          }),
          (E.translate = function (t) {
            return arguments.length ? ((h = +t[0]), (d = +t[1]), k()) : [h, d];
          }),
          (E.center = function (t) {
            return arguments.length
              ? ((p = (t[0] % 360) * Ch), (g = (t[1] % 360) * Ch), k())
              : [p * kh, g * kh];
          }),
          (E.rotate = function (t) {
            return arguments.length
              ? ((y = (t[0] % 360) * Ch),
                (v = (t[1] % 360) * Ch),
                (_ = t.length > 2 ? (t[2] % 360) * Ch : 0),
                k())
              : [y * kh, v * kh, _ * kh];
          }),
          (E.angle = function (t) {
            return arguments.length ? ((m = (t % 360) * Ch), k()) : m * kh;
          }),
          (E.reflectX = function (t) {
            return arguments.length ? ((b = t ? -1 : 1), k()) : b < 0;
          }),
          (E.reflectY = function (t) {
            return arguments.length ? ((x = t ? -1 : 1), k()) : x < 0;
          }),
          (E.precision = function (t) {
            return arguments.length ? ((u = ky(a, (T = t * t))), C()) : Uh(T);
          }),
          (E.fitExtent = function (t, n) {
            return Ay(E, t, n);
          }),
          (E.fitSize = function (t, n) {
            return Sy(E, t, n);
          }),
          (E.fitWidth = function (t, n) {
            return Ty(E, t, n);
          }),
          (E.fitHeight = function (t, n) {
            return Ey(E, t, n);
          }),
          function () {
            return (
              (n = t.apply(this, arguments)), (E.invert = n.invert && N), k()
            );
          }
        );
      }
      function Oy(t) {
        var n = 0,
          e = Sh / 3,
          r = $y(t),
          i = r(n, e);
        return (
          (i.parallels = function (t) {
            return arguments.length
              ? r((n = t[0] * Ch), (e = t[1] * Ch))
              : [n * kh, e * kh];
          }),
          i
        );
      }
      function Dy(t, n) {
        var e = Bh(t),
          r = (e + Bh(n)) / 2;
        if (Ph(r) < 1e-6)
          return (function (t) {
            var n = Oh(t);
            function e(t, e) {
              return [t * n, Bh(e) / n];
            }
            return (
              (e.invert = function (t, e) {
                return [t / n, Hh(e * n)];
              }),
              e
            );
          })(t);
        var i = 1 + e * (2 * r - e),
          o = Uh(i) / r;
        function u(t, n) {
          var e = Uh(i - 2 * r * Bh(n)) / r;
          return [e * Bh((t *= r)), o - e * Oh(t)];
        }
        return (
          (u.invert = function (t, n) {
            var e = o - n,
              u = $h(t, Ph(e)) * Ih(e);
            return (
              e * r < 0 && (u -= Sh * Ih(t) * Ih(e)),
              [u / r, Hh((i - (t * t + e * e) * r * r) / (2 * r))]
            );
          }),
          u
        );
      }
      var Ry = function () {
          return Oy(Dy).scale(155.424).center([0, 33.6442]);
        },
        jy = function () {
          return Ry()
            .parallels([29.5, 45.5])
            .scale(1070)
            .translate([480, 250])
            .rotate([96, 0])
            .center([-0.6, 38.7]);
        };
      var qy = function () {
        var t,
          n,
          e,
          r,
          i,
          o,
          u = jy(),
          a = Ry().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
          c = Ry().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
          f = {
            point: function (t, n) {
              o = [t, n];
            },
          };
        function s(t) {
          var n = t[0],
            u = t[1];
          return (
            (o = null),
            e.point(n, u),
            o || (r.point(n, u), o) || (i.point(n, u), o)
          );
        }
        function l() {
          return (t = n = null), s;
        }
        return (
          (s.invert = function (t) {
            var n = u.scale(),
              e = u.translate(),
              r = (t[0] - e[0]) / n,
              i = (t[1] - e[1]) / n;
            return (
              i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
                ? a
                : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
                ? c
                : u
            ).invert(t);
          }),
          (s.stream = function (e) {
            return t && n === e
              ? t
              : ((r = [u.stream((n = e)), a.stream(e), c.stream(e)]),
                (i = r.length),
                (t = {
                  point: function (t, n) {
                    for (var e = -1; ++e < i; ) r[e].point(t, n);
                  },
                  sphere: function () {
                    for (var t = -1; ++t < i; ) r[t].sphere();
                  },
                  lineStart: function () {
                    for (var t = -1; ++t < i; ) r[t].lineStart();
                  },
                  lineEnd: function () {
                    for (var t = -1; ++t < i; ) r[t].lineEnd();
                  },
                  polygonStart: function () {
                    for (var t = -1; ++t < i; ) r[t].polygonStart();
                  },
                  polygonEnd: function () {
                    for (var t = -1; ++t < i; ) r[t].polygonEnd();
                  },
                }));
            var r, i;
          }),
          (s.precision = function (t) {
            return arguments.length
              ? (u.precision(t), a.precision(t), c.precision(t), l())
              : u.precision();
          }),
          (s.scale = function (t) {
            return arguments.length
              ? (u.scale(t),
                a.scale(0.35 * t),
                c.scale(t),
                s.translate(u.translate()))
              : u.scale();
          }),
          (s.translate = function (t) {
            if (!arguments.length) return u.translate();
            var n = u.scale(),
              o = +t[0],
              s = +t[1];
            return (
              (e = u
                .translate(t)
                .clipExtent([
                  [o - 0.455 * n, s - 0.238 * n],
                  [o + 0.455 * n, s + 0.238 * n],
                ])
                .stream(f)),
              (r = a
                .translate([o - 0.307 * n, s + 0.201 * n])
                .clipExtent([
                  [o - 0.425 * n + 1e-6, s + 0.12 * n + 1e-6],
                  [o - 0.214 * n - 1e-6, s + 0.234 * n - 1e-6],
                ])
                .stream(f)),
              (i = c
                .translate([o - 0.205 * n, s + 0.212 * n])
                .clipExtent([
                  [o - 0.214 * n + 1e-6, s + 0.166 * n + 1e-6],
                  [o - 0.115 * n - 1e-6, s + 0.234 * n - 1e-6],
                ])
                .stream(f)),
              l()
            );
          }),
          (s.fitExtent = function (t, n) {
            return Ay(s, t, n);
          }),
          (s.fitSize = function (t, n) {
            return Sy(s, t, n);
          }),
          (s.fitWidth = function (t, n) {
            return Ty(s, t, n);
          }),
          (s.fitHeight = function (t, n) {
            return Ey(s, t, n);
          }),
          s.scale(1070)
        );
      };
      function Fy(t) {
        return function (n, e) {
          var r = Oh(n),
            i = Oh(e),
            o = t(r * i);
          return o === 1 / 0 ? [2, 0] : [o * i * Bh(n), o * Bh(e)];
        };
      }
      function By(t) {
        return function (n, e) {
          var r = Uh(n * n + e * e),
            i = t(r),
            o = Bh(i),
            u = Oh(i);
          return [$h(n * o, r * u), Hh(r && (e * o) / r)];
        };
      }
      var Iy = Fy(function (t) {
        return Uh(2 / (1 + t));
      });
      Iy.invert = By(function (t) {
        return 2 * Hh(t / 2);
      });
      var Uy = function () {
          return zy(Iy).scale(124.75).clipAngle(179.999);
        },
        Ly = Fy(function (t) {
          return (t = Yh(t)) && t / Bh(t);
        });
      Ly.invert = By(function (t) {
        return t;
      });
      var Yy = function () {
        return zy(Ly).scale(79.4188).clipAngle(179.999);
      };
      function Hy(t, n) {
        return [t, qh(Lh((Th + n) / 2))];
      }
      Hy.invert = function (t, n) {
        return [t, 2 * zh(Rh(n)) - Th];
      };
      var Xy = function () {
        return Vy(Hy).scale(961 / Nh);
      };
      function Vy(t) {
        var n,
          e,
          r,
          i = zy(t),
          o = i.center,
          u = i.scale,
          a = i.translate,
          c = i.clipExtent,
          f = null;
        function s() {
          var o = Sh * u(),
            a = i(Ap(i.rotate()).invert([0, 0]));
          return c(
            null == f
              ? [
                  [a[0] - o, a[1] - o],
                  [a[0] + o, a[1] + o],
                ]
              : t === Hy
              ? [
                  [Math.max(a[0] - o, f), n],
                  [Math.min(a[0] + o, e), r],
                ]
              : [
                  [f, Math.max(a[1] - o, n)],
                  [e, Math.min(a[1] + o, r)],
                ]
          );
        }
        return (
          (i.scale = function (t) {
            return arguments.length ? (u(t), s()) : u();
          }),
          (i.translate = function (t) {
            return arguments.length ? (a(t), s()) : a();
          }),
          (i.center = function (t) {
            return arguments.length ? (o(t), s()) : o();
          }),
          (i.clipExtent = function (t) {
            return arguments.length
              ? (null == t
                  ? (f = n = e = r = null)
                  : ((f = +t[0][0]),
                    (n = +t[0][1]),
                    (e = +t[1][0]),
                    (r = +t[1][1])),
                s())
              : null == f
              ? null
              : [
                  [f, n],
                  [e, r],
                ];
          }),
          s()
        );
      }
      function Gy(t) {
        return Lh((Th + t) / 2);
      }
      function Jy(t, n) {
        var e = Oh(t),
          r = t === n ? Bh(t) : qh(e / Oh(n)) / qh(Gy(n) / Gy(t)),
          i = (e * Fh(Gy(t), r)) / r;
        if (!r) return Hy;
        function o(t, n) {
          i > 0
            ? n < 1e-6 - Th && (n = 1e-6 - Th)
            : n > Th - 1e-6 && (n = Th - 1e-6);
          var e = i / Fh(Gy(n), r);
          return [e * Bh(r * t), i - e * Oh(r * t)];
        }
        return (
          (o.invert = function (t, n) {
            var e = i - n,
              o = Ih(r) * Uh(t * t + e * e),
              u = $h(t, Ph(e)) * Ih(e);
            return (
              e * r < 0 && (u -= Sh * Ih(t) * Ih(e)),
              [u / r, 2 * zh(Fh(i / o, 1 / r)) - Th]
            );
          }),
          o
        );
      }
      var Zy = function () {
        return Oy(Jy).scale(109.5).parallels([30, 30]);
      };
      function Wy(t, n) {
        return [t, n];
      }
      Wy.invert = Wy;
      var Ky = function () {
        return zy(Wy).scale(152.63);
      };
      function Qy(t, n) {
        var e = Oh(t),
          r = t === n ? Bh(t) : (e - Oh(n)) / (n - t),
          i = e / r + t;
        if (Ph(r) < 1e-6) return Wy;
        function o(t, n) {
          var e = i - n,
            o = r * t;
          return [e * Bh(o), i - e * Oh(o)];
        }
        return (
          (o.invert = function (t, n) {
            var e = i - n,
              o = $h(t, Ph(e)) * Ih(e);
            return (
              e * r < 0 && (o -= Sh * Ih(t) * Ih(e)),
              [o / r, i - Ih(r) * Uh(t * t + e * e)]
            );
          }),
          o
        );
      }
      var tv = function () {
          return Oy(Qy).scale(131.154).center([0, 13.9389]);
        },
        nv = 1.340264,
        ev = -0.081106,
        rv = 893e-6,
        iv = 0.003796,
        ov = Uh(3) / 2;
      function uv(t, n) {
        var e = Hh(ov * Bh(n)),
          r = e * e,
          i = r * r * r;
        return [
          (t * Oh(e)) / (ov * (nv + 3 * ev * r + i * (7 * rv + 9 * iv * r))),
          e * (nv + ev * r + i * (rv + iv * r)),
        ];
      }
      uv.invert = function (t, n) {
        for (
          var e, r = n, i = r * r, o = i * i * i, u = 0;
          u < 12 &&
          ((o =
            (i =
              (r -= e =
                (r * (nv + ev * i + o * (rv + iv * i)) - n) /
                (nv + 3 * ev * i + o * (7 * rv + 9 * iv * i))) * r) *
            i *
            i),
          !(Ph(e) < 1e-12));
          ++u
        );
        return [
          (ov * t * (nv + 3 * ev * i + o * (7 * rv + 9 * iv * i))) / Oh(r),
          Hh(Bh(r) / ov),
        ];
      };
      var av = function () {
        return zy(uv).scale(177.158);
      };
      function cv(t, n) {
        var e = Oh(n),
          r = Oh(t) * e;
        return [(e * Bh(t)) / r, Bh(n) / r];
      }
      cv.invert = By(zh);
      var fv = function () {
          return zy(cv).scale(144.049).clipAngle(60);
        },
        sv = function () {
          var t,
            n,
            e,
            r,
            i,
            o,
            u,
            a = 1,
            c = 0,
            f = 0,
            s = 1,
            l = 1,
            h = 0,
            d = null,
            p = 1,
            g = 1,
            y = xy({
              point: function (t, n) {
                var e = m([t, n]);
                this.stream.point(e[0], e[1]);
              },
            }),
            v = _g;
          function _() {
            return (p = a * s), (g = a * l), (o = u = null), m;
          }
          function m(e) {
            var r = e[0] * p,
              i = e[1] * g;
            if (h) {
              var o = i * t - r * n;
              (r = r * t + i * n), (i = o);
            }
            return [r + c, i + f];
          }
          return (
            (m.invert = function (e) {
              var r = e[0] - c,
                i = e[1] - f;
              if (h) {
                var o = i * t + r * n;
                (r = r * t - i * n), (i = o);
              }
              return [r / p, i / g];
            }),
            (m.stream = function (t) {
              return o && u === t ? o : (o = y(v((u = t))));
            }),
            (m.postclip = function (t) {
              return arguments.length
                ? ((v = t), (d = e = r = i = null), _())
                : v;
            }),
            (m.clipExtent = function (t) {
              return arguments.length
                ? ((v =
                    null == t
                      ? ((d = e = r = i = null), _g)
                      : Bp(
                          (d = +t[0][0]),
                          (e = +t[0][1]),
                          (r = +t[1][0]),
                          (i = +t[1][1])
                        )),
                  _())
                : null == d
                ? null
                : [
                    [d, e],
                    [r, i],
                  ];
            }),
            (m.scale = function (t) {
              return arguments.length ? ((a = +t), _()) : a;
            }),
            (m.translate = function (t) {
              return arguments.length
                ? ((c = +t[0]), (f = +t[1]), _())
                : [c, f];
            }),
            (m.angle = function (e) {
              return arguments.length
                ? ((n = Bh((h = (e % 360) * Ch))), (t = Oh(h)), _())
                : h * kh;
            }),
            (m.reflectX = function (t) {
              return arguments.length ? ((s = t ? -1 : 1), _()) : s < 0;
            }),
            (m.reflectY = function (t) {
              return arguments.length ? ((l = t ? -1 : 1), _()) : l < 0;
            }),
            (m.fitExtent = function (t, n) {
              return Ay(m, t, n);
            }),
            (m.fitSize = function (t, n) {
              return Sy(m, t, n);
            }),
            (m.fitWidth = function (t, n) {
              return Ty(m, t, n);
            }),
            (m.fitHeight = function (t, n) {
              return Ey(m, t, n);
            }),
            m
          );
        };
      function lv(t, n) {
        var e = n * n,
          r = e * e;
        return [
          t *
            (0.8707 -
              0.131979 * e +
              r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)),
          n *
            (1.007226 +
              e * (0.015085 + r * (0.028874 * e - 0.044475 - 0.005916 * r))),
        ];
      }
      lv.invert = function (t, n) {
        var e,
          r = n,
          i = 25;
        do {
          var o = r * r,
            u = o * o;
          r -= e =
            (r *
              (1.007226 +
                o * (0.015085 + u * (0.028874 * o - 0.044475 - 0.005916 * u))) -
              n) /
            (1.007226 +
              o *
                (0.045255 + u * (0.259866 * o - 0.311325 - 0.005916 * 11 * u)));
        } while (Ph(e) > 1e-6 && --i > 0);
        return [
          t /
            (0.8707 +
              (o = r * r) *
                (o * (o * o * o * (0.003971 - 0.001529 * o) - 0.013791) -
                  0.131979)),
          r,
        ];
      };
      var hv = function () {
        return zy(lv).scale(175.295);
      };
      function dv(t, n) {
        return [Oh(n) * Bh(t), Bh(n)];
      }
      dv.invert = By(Hh);
      var pv = function () {
        return zy(dv).scale(249.5).clipAngle(90.000001);
      };
      function gv(t, n) {
        var e = Oh(n),
          r = 1 + Oh(t) * e;
        return [(e * Bh(t)) / r, Bh(n) / r];
      }
      gv.invert = By(function (t) {
        return 2 * zh(t);
      });
      var yv = function () {
        return zy(gv).scale(250).clipAngle(142);
      };
      function vv(t, n) {
        return [qh(Lh((Th + n) / 2)), -t];
      }
      vv.invert = function (t, n) {
        return [-n, 2 * zh(Rh(t)) - Th];
      };
      var _v = function () {
        var t = Vy(vv),
          n = t.center,
          e = t.rotate;
        return (
          (t.center = function (t) {
            return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]];
          }),
          (t.rotate = function (t) {
            return arguments.length
              ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
              : [(t = e())[0], t[1], t[2] - 90];
          }),
          e([0, 0, 90]).scale(159.155)
        );
      };
      function mv(t, n) {
        return t.parent === n.parent ? 1 : 2;
      }
      function bv(t, n) {
        return t + n.x;
      }
      function xv(t, n) {
        return Math.max(t, n.y);
      }
      var wv = function () {
        var t = mv,
          n = 1,
          e = 1,
          r = !1;
        function i(i) {
          var o,
            u = 0;
          i.eachAfter(function (n) {
            var e = n.children;
            e
              ? ((n.x = (function (t) {
                  return t.reduce(bv, 0) / t.length;
                })(e)),
                (n.y = (function (t) {
                  return 1 + t.reduce(xv, 0);
                })(e)))
              : ((n.x = o ? (u += t(n, o)) : 0), (n.y = 0), (o = n));
          });
          var a = (function (t) {
              for (var n; (n = t.children); ) t = n[0];
              return t;
            })(i),
            c = (function (t) {
              for (var n; (n = t.children); ) t = n[n.length - 1];
              return t;
            })(i),
            f = a.x - t(a, c) / 2,
            s = c.x + t(c, a) / 2;
          return i.eachAfter(
            r
              ? function (t) {
                  (t.x = (t.x - i.x) * n), (t.y = (i.y - t.y) * e);
                }
              : function (t) {
                  (t.x = ((t.x - f) / (s - f)) * n),
                    (t.y = (1 - (i.y ? t.y / i.y : 1)) * e);
                }
          );
        }
        return (
          (i.separation = function (n) {
            return arguments.length ? ((t = n), i) : t;
          }),
          (i.size = function (t) {
            return arguments.length
              ? ((r = !1), (n = +t[0]), (e = +t[1]), i)
              : r
              ? null
              : [n, e];
          }),
          (i.nodeSize = function (t) {
            return arguments.length
              ? ((r = !0), (n = +t[0]), (e = +t[1]), i)
              : r
              ? [n, e]
              : null;
          }),
          i
        );
      };
      function Mv(t) {
        var n = 0,
          e = t.children,
          r = e && e.length;
        if (r) for (; --r >= 0; ) n += e[r].value;
        else n = 1;
        t.value = n;
      }
      function Av(t, n) {
        t instanceof Map
          ? ((t = [void 0, t]), void 0 === n && (n = Tv))
          : void 0 === n && (n = Sv);
        for (var e, r, i, o, u, a = new kv(t), c = [a]; (e = c.pop()); )
          if ((i = n(e.data)) && (u = (i = Array.from(i)).length))
            for (e.children = i, o = u - 1; o >= 0; --o)
              c.push((r = i[o] = new kv(i[o]))),
                (r.parent = e),
                (r.depth = e.depth + 1);
        return a.eachBefore(Nv);
      }
      function Sv(t) {
        return t.children;
      }
      function Tv(t) {
        return Array.isArray(t) ? t[1] : null;
      }
      function Ev(t) {
        void 0 !== t.data.value && (t.value = t.data.value),
          (t.data = t.data.data);
      }
      function Nv(t) {
        var n = 0;
        do {
          t.height = n;
        } while ((t = t.parent) && t.height < ++n);
      }
      function kv(t) {
        (this.data = t), (this.depth = this.height = 0), (this.parent = null);
      }
      function Cv(t) {
        return null == t ? null : Pv(t);
      }
      function Pv(t) {
        if ("function" != typeof t) throw new Error();
        return t;
      }
      function zv() {
        return 0;
      }
      kv.prototype = Av.prototype = {
        constructor: kv,
        count: function () {
          return this.eachAfter(Mv);
        },
        each: function (t, n) {
          let e = -1;
          for (const r of this) t.call(n, r, ++e, this);
          return this;
        },
        eachAfter: function (t, n) {
          for (var e, r, i, o = this, u = [o], a = [], c = -1; (o = u.pop()); )
            if ((a.push(o), (e = o.children)))
              for (r = 0, i = e.length; r < i; ++r) u.push(e[r]);
          for (; (o = a.pop()); ) t.call(n, o, ++c, this);
          return this;
        },
        eachBefore: function (t, n) {
          for (var e, r, i = this, o = [i], u = -1; (i = o.pop()); )
            if ((t.call(n, i, ++u, this), (e = i.children)))
              for (r = e.length - 1; r >= 0; --r) o.push(e[r]);
          return this;
        },
        find: function (t, n) {
          let e = -1;
          for (const r of this) if (t.call(n, r, ++e, this)) return r;
        },
        sum: function (t) {
          return this.eachAfter(function (n) {
            for (
              var e = +t(n.data) || 0, r = n.children, i = r && r.length;
              --i >= 0;

            )
              e += r[i].value;
            n.value = e;
          });
        },
        sort: function (t) {
          return this.eachBefore(function (n) {
            n.children && n.children.sort(t);
          });
        },
        path: function (t) {
          for (
            var n = this,
              e = (function (t, n) {
                if (t === n) return t;
                var e = t.ancestors(),
                  r = n.ancestors(),
                  i = null;
                (t = e.pop()), (n = r.pop());
                for (; t === n; ) (i = t), (t = e.pop()), (n = r.pop());
                return i;
              })(n, t),
              r = [n];
            n !== e;

          )
            (n = n.parent), r.push(n);
          for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent);
          return r;
        },
        ancestors: function () {
          for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
          return n;
        },
        descendants: function () {
          return Array.from(this);
        },
        leaves: function () {
          var t = [];
          return (
            this.eachBefore(function (n) {
              n.children || t.push(n);
            }),
            t
          );
        },
        links: function () {
          var t = this,
            n = [];
          return (
            t.each(function (e) {
              e !== t && n.push({ source: e.parent, target: e });
            }),
            n
          );
        },
        copy: function () {
          return Av(this).eachBefore(Ev);
        },
        [Symbol.iterator]: function* () {
          var t,
            n,
            e,
            r,
            i = this,
            o = [i];
          do {
            for (t = o.reverse(), o = []; (i = t.pop()); )
              if ((yield i, (n = i.children)))
                for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
          } while (o.length);
        },
      };
      var $v = function (t) {
        return function () {
          return t;
        };
      };
      var Ov = function () {
        let t = 1;
        return () => (t = (1664525 * t + 1013904223) % 4294967296) / 4294967296;
      };
      var Dv = function (t) {
        return Rv(t, Ov());
      };
      function Rv(t, n) {
        for (
          var e,
            r,
            i = 0,
            o = (t = (function (t, n) {
              let e,
                r,
                i = t.length;
              for (; i; )
                (r = (n() * i--) | 0), (e = t[i]), (t[i] = t[r]), (t[r] = e);
              return t;
            })(Array.from(t), n)).length,
            u = [];
          i < o;

        )
          (e = t[i]), r && Fv(r, e) ? ++i : ((r = Iv((u = jv(u, e)))), (i = 0));
        return r;
      }
      function jv(t, n) {
        var e, r;
        if (Bv(n, t)) return [n];
        for (e = 0; e < t.length; ++e)
          if (qv(n, t[e]) && Bv(Uv(t[e], n), t)) return [t[e], n];
        for (e = 0; e < t.length - 1; ++e)
          for (r = e + 1; r < t.length; ++r)
            if (
              qv(Uv(t[e], t[r]), n) &&
              qv(Uv(t[e], n), t[r]) &&
              qv(Uv(t[r], n), t[e]) &&
              Bv(Lv(t[e], t[r], n), t)
            )
              return [t[e], t[r], n];
        throw new Error();
      }
      function qv(t, n) {
        var e = t.r - n.r,
          r = n.x - t.x,
          i = n.y - t.y;
        return e < 0 || e * e < r * r + i * i;
      }
      function Fv(t, n) {
        var e = t.r - n.r + 1e-9 * Math.max(t.r, n.r, 1),
          r = n.x - t.x,
          i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i;
      }
      function Bv(t, n) {
        for (var e = 0; e < n.length; ++e) if (!Fv(t, n[e])) return !1;
        return !0;
      }
      function Iv(t) {
        switch (t.length) {
          case 1:
            return { x: (n = t[0]).x, y: n.y, r: n.r };
          case 2:
            return Uv(t[0], t[1]);
          case 3:
            return Lv(t[0], t[1], t[2]);
        }
        var n;
      }
      function Uv(t, n) {
        var e = t.x,
          r = t.y,
          i = t.r,
          o = n.x,
          u = n.y,
          a = n.r,
          c = o - e,
          f = u - r,
          s = a - i,
          l = Math.sqrt(c * c + f * f);
        return {
          x: (e + o + (c / l) * s) / 2,
          y: (r + u + (f / l) * s) / 2,
          r: (l + i + a) / 2,
        };
      }
      function Lv(t, n, e) {
        var r = t.x,
          i = t.y,
          o = t.r,
          u = n.x,
          a = n.y,
          c = n.r,
          f = e.x,
          s = e.y,
          l = e.r,
          h = r - u,
          d = r - f,
          p = i - a,
          g = i - s,
          y = c - o,
          v = l - o,
          _ = r * r + i * i - o * o,
          m = _ - u * u - a * a + c * c,
          b = _ - f * f - s * s + l * l,
          x = d * p - h * g,
          w = (p * b - g * m) / (2 * x) - r,
          M = (g * y - p * v) / x,
          A = (d * m - h * b) / (2 * x) - i,
          S = (h * v - d * y) / x,
          T = M * M + S * S - 1,
          E = 2 * (o + w * M + A * S),
          N = w * w + A * A - o * o,
          k = -(Math.abs(T) > 1e-6
            ? (E + Math.sqrt(E * E - 4 * T * N)) / (2 * T)
            : N / E);
        return { x: r + w + M * k, y: i + A + S * k, r: k };
      }
      function Yv(t, n, e) {
        var r,
          i,
          o,
          u,
          a = t.x - n.x,
          c = t.y - n.y,
          f = a * a + c * c;
        f
          ? ((i = n.r + e.r),
            (i *= i),
            (u = t.r + e.r),
            i > (u *= u)
              ? ((r = (f + u - i) / (2 * f)),
                (o = Math.sqrt(Math.max(0, u / f - r * r))),
                (e.x = t.x - r * a - o * c),
                (e.y = t.y - r * c + o * a))
              : ((r = (f + i - u) / (2 * f)),
                (o = Math.sqrt(Math.max(0, i / f - r * r))),
                (e.x = n.x + r * a - o * c),
                (e.y = n.y + r * c + o * a)))
          : ((e.x = n.x + e.r), (e.y = n.y));
      }
      function Hv(t, n) {
        var e = t.r + n.r - 1e-6,
          r = n.x - t.x,
          i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i;
      }
      function Xv(t) {
        var n = t._,
          e = t.next._,
          r = n.r + e.r,
          i = (n.x * e.r + e.x * n.r) / r,
          o = (n.y * e.r + e.y * n.r) / r;
        return i * i + o * o;
      }
      function Vv(t) {
        (this._ = t), (this.next = null), (this.previous = null);
      }
      function Gv(t, n) {
        if (
          !(u = ((e = t),
          (t = "object" == typeof e && "length" in e ? e : Array.from(e)))
            .length)
        )
          return 0;
        var e, r, i, o, u, a, c, f, s, l, h, d;
        if ((((r = t[0]).x = 0), (r.y = 0), !(u > 1))) return r.r;
        if (((i = t[1]), (r.x = -i.r), (i.x = r.r), (i.y = 0), !(u > 2)))
          return r.r + i.r;
        Yv(i, r, (o = t[2])),
          (r = new Vv(r)),
          (i = new Vv(i)),
          (o = new Vv(o)),
          (r.next = o.previous = i),
          (i.next = r.previous = o),
          (o.next = i.previous = r);
        t: for (f = 3; f < u; ++f) {
          Yv(r._, i._, (o = t[f])),
            (o = new Vv(o)),
            (s = i.next),
            (l = r.previous),
            (h = i._.r),
            (d = r._.r);
          do {
            if (h <= d) {
              if (Hv(s._, o._)) {
                (i = s), (r.next = i), (i.previous = r), --f;
                continue t;
              }
              (h += s._.r), (s = s.next);
            } else {
              if (Hv(l._, o._)) {
                ((r = l).next = i), (i.previous = r), --f;
                continue t;
              }
              (d += l._.r), (l = l.previous);
            }
          } while (s !== l.next);
          for (
            o.previous = r, o.next = i, r.next = i.previous = i = o, a = Xv(r);
            (o = o.next) !== i;

          )
            (c = Xv(o)) < a && ((r = o), (a = c));
          i = r.next;
        }
        for (r = [i._], o = i; (o = o.next) !== i; ) r.push(o._);
        for (o = Rv(r, n), f = 0; f < u; ++f)
          ((r = t[f]).x -= o.x), (r.y -= o.y);
        return o.r;
      }
      var Jv = function (t) {
        return Gv(t, Ov()), t;
      };
      function Zv(t) {
        return Math.sqrt(t.value);
      }
      var Wv = function () {
        var t = null,
          n = 1,
          e = 1,
          r = zv;
        function i(i) {
          const o = Ov();
          return (
            (i.x = n / 2),
            (i.y = e / 2),
            t
              ? i.eachBefore(Kv(t)).eachAfter(Qv(r, 0.5, o)).eachBefore(t_(1))
              : i
                  .eachBefore(Kv(Zv))
                  .eachAfter(Qv(zv, 1, o))
                  .eachAfter(Qv(r, i.r / Math.min(n, e), o))
                  .eachBefore(t_(Math.min(n, e) / (2 * i.r))),
            i
          );
        }
        return (
          (i.radius = function (n) {
            return arguments.length ? ((t = Cv(n)), i) : t;
          }),
          (i.size = function (t) {
            return arguments.length ? ((n = +t[0]), (e = +t[1]), i) : [n, e];
          }),
          (i.padding = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : $v(+t)), i)
              : r;
          }),
          i
        );
      };
      function Kv(t) {
        return function (n) {
          n.children || (n.r = Math.max(0, +t(n) || 0));
        };
      }
      function Qv(t, n, e) {
        return function (r) {
          if ((i = r.children)) {
            var i,
              o,
              u,
              a = i.length,
              c = t(r) * n || 0;
            if (c) for (o = 0; o < a; ++o) i[o].r += c;
            if (((u = Gv(i, e)), c)) for (o = 0; o < a; ++o) i[o].r -= c;
            r.r = u + c;
          }
        };
      }
      function t_(t) {
        return function (n) {
          var e = n.parent;
          (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
        };
      }
      var n_ = function (t) {
          (t.x0 = Math.round(t.x0)),
            (t.y0 = Math.round(t.y0)),
            (t.x1 = Math.round(t.x1)),
            (t.y1 = Math.round(t.y1));
        },
        e_ = function (t, n, e, r, i) {
          for (
            var o,
              u = t.children,
              a = -1,
              c = u.length,
              f = t.value && (r - n) / t.value;
            ++a < c;

          )
            ((o = u[a]).y0 = e),
              (o.y1 = i),
              (o.x0 = n),
              (o.x1 = n += o.value * f);
        },
        r_ = function () {
          var t = 1,
            n = 1,
            e = 0,
            r = !1;
          function i(i) {
            var o = i.height + 1;
            return (
              (i.x0 = i.y0 = e),
              (i.x1 = t),
              (i.y1 = n / o),
              i.eachBefore(
                (function (t, n) {
                  return function (r) {
                    r.children &&
                      e_(
                        r,
                        r.x0,
                        (t * (r.depth + 1)) / n,
                        r.x1,
                        (t * (r.depth + 2)) / n
                      );
                    var i = r.x0,
                      o = r.y0,
                      u = r.x1 - e,
                      a = r.y1 - e;
                    u < i && (i = u = (i + u) / 2),
                      a < o && (o = a = (o + a) / 2),
                      (r.x0 = i),
                      (r.y0 = o),
                      (r.x1 = u),
                      (r.y1 = a);
                  };
                })(n, o)
              ),
              r && i.eachBefore(n_),
              i
            );
          }
          return (
            (i.round = function (t) {
              return arguments.length ? ((r = !!t), i) : r;
            }),
            (i.size = function (e) {
              return arguments.length ? ((t = +e[0]), (n = +e[1]), i) : [t, n];
            }),
            (i.padding = function (t) {
              return arguments.length ? ((e = +t), i) : e;
            }),
            i
          );
        },
        i_ = { depth: -1 },
        o_ = {},
        u_ = {};
      function a_(t) {
        return t.id;
      }
      function c_(t) {
        return t.parentId;
      }
      var f_ = function () {
        var t,
          n = a_,
          e = c_;
        function r(r) {
          var i,
            o,
            u,
            a,
            c,
            f,
            s,
            l,
            h = Array.from(r),
            d = n,
            p = e,
            g = new Map();
          if (null != t) {
            const n = h.map((n, e) =>
                (function (t) {
                  let n = (t = "" + t).length;
                  l_(t, n - 1) && !l_(t, n - 2) && (t = t.slice(0, -1));
                  return "/" === t[0] ? t : "/" + t;
                })(t(n, e, r))
              ),
              e = n.map(s_),
              i = new Set(n).add("");
            for (const t of e)
              i.has(t) || (i.add(t), n.push(t), e.push(s_(t)), h.push(u_));
            (d = (t, e) => n[e]), (p = (t, n) => e[n]);
          }
          for (u = 0, i = h.length; u < i; ++u)
            (o = h[u]),
              (f = h[u] = new kv(o)),
              null != (s = d(o, u, r)) &&
                (s += "") &&
                ((l = f.id = s), g.set(l, g.has(l) ? o_ : f)),
              null != (s = p(o, u, r)) && (s += "") && (f.parent = s);
          for (u = 0; u < i; ++u)
            if ((s = (f = h[u]).parent)) {
              if (!(c = g.get(s))) throw new Error("missing: " + s);
              if (c === o_) throw new Error("ambiguous: " + s);
              c.children ? c.children.push(f) : (c.children = [f]),
                (f.parent = c);
            } else {
              if (a) throw new Error("multiple roots");
              a = f;
            }
          if (!a) throw new Error("no root");
          if (null != t) {
            for (; a.data === u_ && 1 === a.children.length; )
              (a = a.children[0]), --i;
            for (let t = h.length - 1; t >= 0 && (f = h[t]).data === u_; --t)
              f.data = null;
          }
          if (
            ((a.parent = i_),
            a
              .eachBefore(function (t) {
                (t.depth = t.parent.depth + 1), --i;
              })
              .eachBefore(Nv),
            (a.parent = null),
            i > 0)
          )
            throw new Error("cycle");
          return a;
        }
        return (
          (r.id = function (t) {
            return arguments.length ? ((n = Cv(t)), r) : n;
          }),
          (r.parentId = function (t) {
            return arguments.length ? ((e = Cv(t)), r) : e;
          }),
          (r.path = function (n) {
            return arguments.length ? ((t = Cv(n)), r) : t;
          }),
          r
        );
      };
      function s_(t) {
        let n = t.length;
        if (n < 2) return "";
        for (; --n > 1 && !l_(t, n); );
        return t.slice(0, n);
      }
      function l_(t, n) {
        if ("/" === t[n]) {
          let e = 0;
          for (; n > 0 && "\\" === t[--n]; ) ++e;
          if (0 == (1 & e)) return !0;
        }
        return !1;
      }
      function h_(t, n) {
        return t.parent === n.parent ? 1 : 2;
      }
      function d_(t) {
        var n = t.children;
        return n ? n[0] : t.t;
      }
      function p_(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t;
      }
      function g_(t, n, e) {
        var r = e / (n.i - t.i);
        (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
      }
      function y_(t, n, e) {
        return t.a.parent === n.parent ? t.a : e;
      }
      function v_(t, n) {
        (this._ = t),
          (this.parent = null),
          (this.children = null),
          (this.A = null),
          (this.a = this),
          (this.z = 0),
          (this.m = 0),
          (this.c = 0),
          (this.s = 0),
          (this.t = null),
          (this.i = n);
      }
      v_.prototype = Object.create(kv.prototype);
      var __ = function () {
          var t = h_,
            n = 1,
            e = 1,
            r = null;
          function i(i) {
            var c = (function (t) {
              for (
                var n, e, r, i, o, u = new v_(t, 0), a = [u];
                (n = a.pop());

              )
                if ((r = n._.children))
                  for (
                    n.children = new Array((o = r.length)), i = o - 1;
                    i >= 0;
                    --i
                  )
                    a.push((e = n.children[i] = new v_(r[i], i))),
                      (e.parent = n);
              return ((u.parent = new v_(null, 0)).children = [u]), u;
            })(i);
            if ((c.eachAfter(o), (c.parent.m = -c.z), c.eachBefore(u), r))
              i.eachBefore(a);
            else {
              var f = i,
                s = i,
                l = i;
              i.eachBefore(function (t) {
                t.x < f.x && (f = t),
                  t.x > s.x && (s = t),
                  t.depth > l.depth && (l = t);
              });
              var h = f === s ? 1 : t(f, s) / 2,
                d = h - f.x,
                p = n / (s.x + h + d),
                g = e / (l.depth || 1);
              i.eachBefore(function (t) {
                (t.x = (t.x + d) * p), (t.y = t.depth * g);
              });
            }
            return i;
          }
          function o(n) {
            var e = n.children,
              r = n.parent.children,
              i = n.i ? r[n.i - 1] : null;
            if (e) {
              !(function (t) {
                for (
                  var n, e = 0, r = 0, i = t.children, o = i.length;
                  --o >= 0;

                )
                  ((n = i[o]).z += e), (n.m += e), (e += n.s + (r += n.c));
              })(n);
              var o = (e[0].z + e[e.length - 1].z) / 2;
              i ? ((n.z = i.z + t(n._, i._)), (n.m = n.z - o)) : (n.z = o);
            } else i && (n.z = i.z + t(n._, i._));
            n.parent.A = (function (n, e, r) {
              if (e) {
                for (
                  var i,
                    o = n,
                    u = n,
                    a = e,
                    c = o.parent.children[0],
                    f = o.m,
                    s = u.m,
                    l = a.m,
                    h = c.m;
                  (a = p_(a)), (o = d_(o)), a && o;

                )
                  (c = d_(c)),
                    ((u = p_(u)).a = n),
                    (i = a.z + l - o.z - f + t(a._, o._)) > 0 &&
                      (g_(y_(a, n, r), n, i), (f += i), (s += i)),
                    (l += a.m),
                    (f += o.m),
                    (h += c.m),
                    (s += u.m);
                a && !p_(u) && ((u.t = a), (u.m += l - s)),
                  o && !d_(c) && ((c.t = o), (c.m += f - h), (r = n));
              }
              return r;
            })(n, i, n.parent.A || r[0]);
          }
          function u(t) {
            (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
          }
          function a(t) {
            (t.x *= n), (t.y = t.depth * e);
          }
          return (
            (i.separation = function (n) {
              return arguments.length ? ((t = n), i) : t;
            }),
            (i.size = function (t) {
              return arguments.length
                ? ((r = !1), (n = +t[0]), (e = +t[1]), i)
                : r
                ? null
                : [n, e];
            }),
            (i.nodeSize = function (t) {
              return arguments.length
                ? ((r = !0), (n = +t[0]), (e = +t[1]), i)
                : r
                ? [n, e]
                : null;
            }),
            i
          );
        },
        m_ = function (t, n, e, r, i) {
          for (
            var o,
              u = t.children,
              a = -1,
              c = u.length,
              f = t.value && (i - e) / t.value;
            ++a < c;

          )
            ((o = u[a]).x0 = n),
              (o.x1 = r),
              (o.y0 = e),
              (o.y1 = e += o.value * f);
        },
        b_ = (1 + Math.sqrt(5)) / 2;
      function x_(t, n, e, r, i, o) {
        for (
          var u,
            a,
            c,
            f,
            s,
            l,
            h,
            d,
            p,
            g,
            y,
            v = [],
            _ = n.children,
            m = 0,
            b = 0,
            x = _.length,
            w = n.value;
          m < x;

        ) {
          (c = i - e), (f = o - r);
          do {
            s = _[b++].value;
          } while (!s && b < x);
          for (
            l = h = s,
              y = s * s * (g = Math.max(f / c, c / f) / (w * t)),
              p = Math.max(h / y, y / l);
            b < x;
            ++b
          ) {
            if (
              ((s += a = _[b].value),
              a < l && (l = a),
              a > h && (h = a),
              (y = s * s * g),
              (d = Math.max(h / y, y / l)) > p)
            ) {
              s -= a;
              break;
            }
            p = d;
          }
          v.push((u = { value: s, dice: c < f, children: _.slice(m, b) })),
            u.dice
              ? e_(u, e, r, i, w ? (r += (f * s) / w) : o)
              : m_(u, e, r, w ? (e += (c * s) / w) : i, o),
            (w -= s),
            (m = b);
        }
        return v;
      }
      var w_ = (function t(n) {
          function e(t, e, r, i, o) {
            x_(n, t, e, r, i, o);
          }
          return (
            (e.ratio = function (n) {
              return t((n = +n) > 1 ? n : 1);
            }),
            e
          );
        })(b_),
        M_ = function () {
          var t = w_,
            n = !1,
            e = 1,
            r = 1,
            i = [0],
            o = zv,
            u = zv,
            a = zv,
            c = zv,
            f = zv;
          function s(t) {
            return (
              (t.x0 = t.y0 = 0),
              (t.x1 = e),
              (t.y1 = r),
              t.eachBefore(l),
              (i = [0]),
              n && t.eachBefore(n_),
              t
            );
          }
          function l(n) {
            var e = i[n.depth],
              r = n.x0 + e,
              s = n.y0 + e,
              l = n.x1 - e,
              h = n.y1 - e;
            l < r && (r = l = (r + l) / 2),
              h < s && (s = h = (s + h) / 2),
              (n.x0 = r),
              (n.y0 = s),
              (n.x1 = l),
              (n.y1 = h),
              n.children &&
                ((e = i[n.depth + 1] = o(n) / 2),
                (r += f(n) - e),
                (s += u(n) - e),
                (l -= a(n) - e) < r && (r = l = (r + l) / 2),
                (h -= c(n) - e) < s && (s = h = (s + h) / 2),
                t(n, r, s, l, h));
          }
          return (
            (s.round = function (t) {
              return arguments.length ? ((n = !!t), s) : n;
            }),
            (s.size = function (t) {
              return arguments.length ? ((e = +t[0]), (r = +t[1]), s) : [e, r];
            }),
            (s.tile = function (n) {
              return arguments.length ? ((t = Pv(n)), s) : t;
            }),
            (s.padding = function (t) {
              return arguments.length
                ? s.paddingInner(t).paddingOuter(t)
                : s.paddingInner();
            }),
            (s.paddingInner = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : $v(+t)), s)
                : o;
            }),
            (s.paddingOuter = function (t) {
              return arguments.length
                ? s
                    .paddingTop(t)
                    .paddingRight(t)
                    .paddingBottom(t)
                    .paddingLeft(t)
                : s.paddingTop();
            }),
            (s.paddingTop = function (t) {
              return arguments.length
                ? ((u = "function" == typeof t ? t : $v(+t)), s)
                : u;
            }),
            (s.paddingRight = function (t) {
              return arguments.length
                ? ((a = "function" == typeof t ? t : $v(+t)), s)
                : a;
            }),
            (s.paddingBottom = function (t) {
              return arguments.length
                ? ((c = "function" == typeof t ? t : $v(+t)), s)
                : c;
            }),
            (s.paddingLeft = function (t) {
              return arguments.length
                ? ((f = "function" == typeof t ? t : $v(+t)), s)
                : f;
            }),
            s
          );
        },
        A_ = function (t, n, e, r, i) {
          var o,
            u,
            a = t.children,
            c = a.length,
            f = new Array(c + 1);
          for (f[0] = u = o = 0; o < c; ++o) f[o + 1] = u += a[o].value;
          !(function t(n, e, r, i, o, u, c) {
            if (n >= e - 1) {
              var s = a[n];
              return (s.x0 = i), (s.y0 = o), (s.x1 = u), void (s.y1 = c);
            }
            var l = f[n],
              h = r / 2 + l,
              d = n + 1,
              p = e - 1;
            for (; d < p; ) {
              var g = (d + p) >>> 1;
              f[g] < h ? (d = g + 1) : (p = g);
            }
            h - f[d - 1] < f[d] - h && n + 1 < d && --d;
            var y = f[d] - l,
              v = r - y;
            if (u - i > c - o) {
              var _ = r ? (i * v + u * y) / r : u;
              t(n, d, y, i, o, _, c), t(d, e, v, _, o, u, c);
            } else {
              var m = r ? (o * v + c * y) / r : c;
              t(n, d, y, i, o, u, m), t(d, e, v, i, m, u, c);
            }
          })(0, c, t.value, n, e, r, i);
        },
        S_ = function (t, n, e, r, i) {
          (1 & t.depth ? m_ : e_)(t, n, e, r, i);
        },
        T_ = (function t(n) {
          function e(t, e, r, i, o) {
            if ((u = t._squarify) && u.ratio === n)
              for (
                var u, a, c, f, s, l = -1, h = u.length, d = t.value;
                ++l < h;

              ) {
                for (
                  c = (a = u[l]).children, f = a.value = 0, s = c.length;
                  f < s;
                  ++f
                )
                  a.value += c[f].value;
                a.dice
                  ? e_(a, e, r, i, d ? (r += ((o - r) * a.value) / d) : o)
                  : m_(a, e, r, d ? (e += ((i - e) * a.value) / d) : i, o),
                  (d -= a.value);
              }
            else (t._squarify = u = x_(n, t, e, r, i, o)), (u.ratio = n);
          }
          return (
            (e.ratio = function (n) {
              return t((n = +n) > 1 ? n : 1);
            }),
            e
          );
        })(b_),
        E_ = function (t) {
          var n = t.length;
          return function (e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
          };
        },
        N_ = function (t, n) {
          var e = Pr(+t, +n);
          return function (t) {
            var n = e(t);
            return n - 360 * Math.floor(n / 360);
          };
        },
        k_ = function (t, n) {
          return (
            (t = +t),
            (n = +n),
            function (e) {
              return Math.round(t * (1 - e) + n * e);
            }
          );
        };
      function C_(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }
      var P_ = (function t(n, e, r) {
        function i(t, i) {
          var o,
            u,
            a = t[0],
            c = t[1],
            f = t[2],
            s = i[0],
            l = i[1],
            h = i[2],
            d = s - a,
            p = l - c,
            g = d * d + p * p;
          if (g < 1e-12)
            (u = Math.log(h / f) / n),
              (o = function (t) {
                return [a + t * d, c + t * p, f * Math.exp(n * t * u)];
              });
          else {
            var y = Math.sqrt(g),
              v = (h * h - f * f + r * g) / (2 * f * e * y),
              _ = (h * h - f * f - r * g) / (2 * h * e * y),
              m = Math.log(Math.sqrt(v * v + 1) - v),
              b = Math.log(Math.sqrt(_ * _ + 1) - _);
            (u = (b - m) / n),
              (o = function (t) {
                var r,
                  i = t * u,
                  o = C_(m),
                  s =
                    (f / (e * y)) *
                    (o *
                      ((r = n * i + m), ((r = Math.exp(2 * r)) - 1) / (r + 1)) -
                      (function (t) {
                        return ((t = Math.exp(t)) - 1 / t) / 2;
                      })(m));
                return [a + s * d, c + s * p, (f * o) / C_(n * i + m)];
              });
          }
          return (o.duration = (1e3 * u * n) / Math.SQRT2), o;
        }
        return (
          (i.rho = function (n) {
            var e = Math.max(0.001, +n),
              r = e * e;
            return t(e, r, r * r);
          }),
          i
        );
      })(Math.SQRT2, 2, 4);
      function z_(t) {
        return function (n, e) {
          var r = t((n = xr(n)).h, (e = xr(e)).h),
            i = $r(n.s, e.s),
            o = $r(n.l, e.l),
            u = $r(n.opacity, e.opacity);
          return function (t) {
            return (
              (n.h = r(t)),
              (n.s = i(t)),
              (n.l = o(t)),
              (n.opacity = u(t)),
              n + ""
            );
          };
        };
      }
      var $_ = z_(Pr),
        O_ = z_($r);
      function D_(t, n) {
        var e = $r((t = Qc(t)).l, (n = Qc(n)).l),
          r = $r(t.a, n.a),
          i = $r(t.b, n.b),
          o = $r(t.opacity, n.opacity);
        return function (n) {
          return (
            (t.l = e(n)), (t.a = r(n)), (t.b = i(n)), (t.opacity = o(n)), t + ""
          );
        };
      }
      function R_(t) {
        return function (n, e) {
          var r = t((n = cf(n)).h, (e = cf(e)).h),
            i = $r(n.c, e.c),
            o = $r(n.l, e.l),
            u = $r(n.opacity, e.opacity);
          return function (t) {
            return (
              (n.h = r(t)),
              (n.c = i(t)),
              (n.l = o(t)),
              (n.opacity = u(t)),
              n + ""
            );
          };
        };
      }
      var j_ = R_(Pr),
        q_ = R_($r);
      function F_(t) {
        return (function n(e) {
          function r(n, r) {
            var i = t((n = yf(n)).h, (r = yf(r)).h),
              o = $r(n.s, r.s),
              u = $r(n.l, r.l),
              a = $r(n.opacity, r.opacity);
            return function (t) {
              return (
                (n.h = i(t)),
                (n.s = o(t)),
                (n.l = u(Math.pow(t, e))),
                (n.opacity = a(t)),
                n + ""
              );
            };
          }
          return (e = +e), (r.gamma = n), r;
        })(1);
      }
      var B_ = F_(Pr),
        I_ = F_($r);
      function U_(t, n) {
        void 0 === n && ((n = t), (t = Gr));
        for (
          var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r);
          e < r;

        )
          o[e] = t(i, (i = n[++e]));
        return function (t) {
          var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
          return o[n](t - n);
        };
      }
      var L_ = function (t, n) {
          for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
          return e;
        },
        Y_ = function (t) {
          for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r; )
            (n = i), (i = t[e]), (o += n[1] * i[0] - n[0] * i[1]);
          return o / 2;
        },
        H_ = function (t) {
          for (
            var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0;
            ++r < i;

          )
            (n = a),
              (a = t[r]),
              (c += e = n[0] * a[1] - a[0] * n[1]),
              (o += (n[0] + a[0]) * e),
              (u += (n[1] + a[1]) * e);
          return [o / (c *= 3), u / c];
        };
      function X_(t, n) {
        return t[0] - n[0] || t[1] - n[1];
      }
      function V_(t) {
        const n = t.length,
          e = [0, 1];
        let r,
          i = 2;
        for (r = 2; r < n; ++r) {
          for (
            ;
            i > 1 &&
            ((o = t[e[i - 2]]),
            (u = t[e[i - 1]]),
            (a = t[r]),
            (u[0] - o[0]) * (a[1] - o[1]) - (u[1] - o[1]) * (a[0] - o[0]) <= 0);

          )
            --i;
          e[i++] = r;
        }
        var o, u, a;
        return e.slice(0, i);
      }
      var G_ = function (t) {
          if ((e = t.length) < 3) return null;
          var n,
            e,
            r = new Array(e),
            i = new Array(e);
          for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
          for (r.sort(X_), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
          var o = V_(r),
            u = V_(i),
            a = u[0] === o[0],
            c = u[u.length - 1] === o[o.length - 1],
            f = [];
          for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]);
          for (n = +a; n < u.length - c; ++n) f.push(t[r[u[n]][2]]);
          return f;
        },
        J_ = function (t, n) {
          for (
            var e,
              r,
              i = t.length,
              o = t[i - 1],
              u = n[0],
              a = n[1],
              c = o[0],
              f = o[1],
              s = !1,
              l = 0;
            l < i;
            ++l
          )
            (e = (o = t[l])[0]),
              (r = o[1]) > a != f > a &&
                u < ((c - e) * (a - r)) / (f - r) + e &&
                (s = !s),
              (c = e),
              (f = r);
          return s;
        },
        Z_ = function (t) {
          for (
            var n,
              e,
              r = -1,
              i = t.length,
              o = t[i - 1],
              u = o[0],
              a = o[1],
              c = 0;
            ++r < i;

          )
            (n = u),
              (e = a),
              (n -= u = (o = t[r])[0]),
              (e -= a = o[1]),
              (c += Math.hypot(n, e));
          return c;
        },
        W_ = Math.random,
        K_ = (function t(n) {
          function e(t, e) {
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              1 === arguments.length ? ((e = t), (t = 0)) : (e -= t),
              function () {
                return n() * e + t;
              }
            );
          }
          return (e.source = t), e;
        })(W_),
        Q_ = (function t(n) {
          function e(t, e) {
            return (
              arguments.length < 2 && ((e = t), (t = 0)),
              (t = Math.floor(t)),
              (e = Math.floor(e) - t),
              function () {
                return Math.floor(n() * e + t);
              }
            );
          }
          return (e.source = t), e;
        })(W_),
        tm = (function t(n) {
          function e(t, e) {
            var r, i;
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              function () {
                var o;
                if (null != r) (o = r), (r = null);
                else
                  do {
                    (r = 2 * n() - 1), (o = 2 * n() - 1), (i = r * r + o * o);
                  } while (!i || i > 1);
                return t + e * o * Math.sqrt((-2 * Math.log(i)) / i);
              }
            );
          }
          return (e.source = t), e;
        })(W_),
        nm = (function t(n) {
          var e = tm.source(n);
          function r() {
            var t = e.apply(this, arguments);
            return function () {
              return Math.exp(t());
            };
          }
          return (r.source = t), r;
        })(W_),
        em = (function t(n) {
          function e(t) {
            return (t = +t) <= 0
              ? () => 0
              : function () {
                  for (var e = 0, r = t; r > 1; --r) e += n();
                  return e + r * n();
                };
          }
          return (e.source = t), e;
        })(W_),
        rm = (function t(n) {
          var e = em.source(n);
          function r(t) {
            if (0 == (t = +t)) return n;
            var r = e(t);
            return function () {
              return r() / t;
            };
          }
          return (r.source = t), r;
        })(W_),
        im = (function t(n) {
          function e(t) {
            return function () {
              return -Math.log1p(-n()) / t;
            };
          }
          return (e.source = t), e;
        })(W_),
        om = (function t(n) {
          function e(t) {
            if ((t = +t) < 0) throw new RangeError("invalid alpha");
            return (
              (t = 1 / -t),
              function () {
                return Math.pow(1 - n(), t);
              }
            );
          }
          return (e.source = t), e;
        })(W_),
        um = (function t(n) {
          function e(t) {
            if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
            return function () {
              return Math.floor(n() + t);
            };
          }
          return (e.source = t), e;
        })(W_),
        am = (function t(n) {
          function e(t) {
            if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
            return 0 === t
              ? () => 1 / 0
              : 1 === t
              ? () => 1
              : ((t = Math.log1p(-t)),
                function () {
                  return 1 + Math.floor(Math.log1p(-n()) / t);
                });
          }
          return (e.source = t), e;
        })(W_),
        cm = (function t(n) {
          var e = tm.source(n)();
          function r(t, r) {
            if ((t = +t) < 0) throw new RangeError("invalid k");
            if (0 === t) return () => 0;
            if (((r = null == r ? 1 : +r), 1 === t))
              return () => -Math.log1p(-n()) * r;
            var i = (t < 1 ? t + 1 : t) - 1 / 3,
              o = 1 / (3 * Math.sqrt(i)),
              u = t < 1 ? () => Math.pow(n(), 1 / t) : () => 1;
            return function () {
              do {
                do {
                  var t = e(),
                    a = 1 + o * t;
                } while (a <= 0);
                a *= a * a;
                var c = 1 - n();
              } while (
                c >= 1 - 0.0331 * t * t * t * t &&
                Math.log(c) >= 0.5 * t * t + i * (1 - a + Math.log(a))
              );
              return i * a * u() * r;
            };
          }
          return (r.source = t), r;
        })(W_),
        fm = (function t(n) {
          var e = cm.source(n);
          function r(t, n) {
            var r = e(t),
              i = e(n);
            return function () {
              var t = r();
              return 0 === t ? 0 : t / (t + i());
            };
          }
          return (r.source = t), r;
        })(W_),
        sm = (function t(n) {
          var e = am.source(n),
            r = fm.source(n);
          function i(t, n) {
            return (
              (t = +t),
              (n = +n) >= 1
                ? () => t
                : n <= 0
                ? () => 0
                : function () {
                    for (
                      var i = 0, o = t, u = n;
                      o * u > 16 && o * (1 - u) > 16;

                    ) {
                      var a = Math.floor((o + 1) * u),
                        c = r(a, o - a + 1)();
                      c <= u
                        ? ((i += a), (o -= a), (u = (u - c) / (1 - c)))
                        : ((o = a - 1), (u /= c));
                    }
                    for (
                      var f = u < 0.5, s = e(f ? u : 1 - u), l = s(), h = 0;
                      l <= o;
                      ++h
                    )
                      l += s();
                    return i + (f ? h : o - h);
                  }
            );
          }
          return (i.source = t), i;
        })(W_),
        lm = (function t(n) {
          function e(t, e, r) {
            var i;
            return (
              0 == (t = +t)
                ? (i = (t) => -Math.log(t))
                : ((t = 1 / t), (i = (n) => Math.pow(n, t))),
              (e = null == e ? 0 : +e),
              (r = null == r ? 1 : +r),
              function () {
                return e + r * i(-Math.log1p(-n()));
              }
            );
          }
          return (e.source = t), e;
        })(W_),
        hm = (function t(n) {
          function e(t, e) {
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              function () {
                return t + e * Math.tan(Math.PI * n());
              }
            );
          }
          return (e.source = t), e;
        })(W_),
        dm = (function t(n) {
          function e(t, e) {
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              function () {
                var r = n();
                return t + e * Math.log(r / (1 - r));
              }
            );
          }
          return (e.source = t), e;
        })(W_),
        pm = (function t(n) {
          var e = cm.source(n),
            r = sm.source(n);
          function i(t) {
            return function () {
              for (var i = 0, o = t; o > 16; ) {
                var u = Math.floor(0.875 * o),
                  a = e(u)();
                if (a > o) return i + r(u - 1, o / a)();
                (i += u), (o -= a);
              }
              for (var c = -Math.log1p(-n()), f = 0; c <= o; ++f)
                c -= Math.log1p(-n());
              return i + f;
            };
          }
          return (i.source = t), i;
        })(W_);
      const gm = 1 / 4294967296;
      function ym(t = Math.random()) {
        let n = 0 | (0 <= t && t < 1 ? t / gm : Math.abs(t));
        return () => ((n = (1664525 * n + 1013904223) | 0), gm * (n >>> 0));
      }
      function vm(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(n).domain(t);
        }
        return this;
      }
      function _m(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              "function" == typeof n ? this.interpolator(n) : this.range(n);
        }
        return this;
      }
      const mm = Symbol("implicit");
      function bm() {
        var t = new D(),
          n = [],
          e = [],
          r = mm;
        function i(i) {
          let o = t.get(i);
          if (void 0 === o) {
            if (r !== mm) return r;
            t.set(i, (o = n.push(i) - 1));
          }
          return e[o % e.length];
        }
        return (
          (i.domain = function (e) {
            if (!arguments.length) return n.slice();
            (n = []), (t = new D());
            for (const r of e) t.has(r) || t.set(r, n.push(r) - 1);
            return i;
          }),
          (i.range = function (t) {
            return arguments.length ? ((e = Array.from(t)), i) : e.slice();
          }),
          (i.unknown = function (t) {
            return arguments.length ? ((r = t), i) : r;
          }),
          (i.copy = function () {
            return bm(n, e).unknown(r);
          }),
          vm.apply(i, arguments),
          i
        );
      }
      function xm() {
        var t,
          n,
          e = bm().unknown(void 0),
          r = e.domain,
          i = e.range,
          o = 0,
          u = 1,
          a = !1,
          c = 0,
          f = 0,
          s = 0.5;
        function l() {
          var e = r().length,
            l = u < o,
            h = l ? u : o,
            d = l ? o : u;
          (t = (d - h) / Math.max(1, e - c + 2 * f)),
            a && (t = Math.floor(t)),
            (h += (d - h - t * (e - c)) * s),
            (n = t * (1 - c)),
            a && ((h = Math.round(h)), (n = Math.round(n)));
          var p = Rt(e).map(function (n) {
            return h + t * n;
          });
          return i(l ? p.reverse() : p);
        }
        return (
          delete e.unknown,
          (e.domain = function (t) {
            return arguments.length ? (r(t), l()) : r();
          }),
          (e.range = function (t) {
            return arguments.length
              ? (([o, u] = t), (o = +o), (u = +u), l())
              : [o, u];
          }),
          (e.rangeRound = function (t) {
            return ([o, u] = t), (o = +o), (u = +u), (a = !0), l();
          }),
          (e.bandwidth = function () {
            return n;
          }),
          (e.step = function () {
            return t;
          }),
          (e.round = function (t) {
            return arguments.length ? ((a = !!t), l()) : a;
          }),
          (e.padding = function (t) {
            return arguments.length ? ((c = Math.min(1, (f = +t))), l()) : c;
          }),
          (e.paddingInner = function (t) {
            return arguments.length ? ((c = Math.min(1, t)), l()) : c;
          }),
          (e.paddingOuter = function (t) {
            return arguments.length ? ((f = +t), l()) : f;
          }),
          (e.align = function (t) {
            return arguments.length
              ? ((s = Math.max(0, Math.min(1, t))), l())
              : s;
          }),
          (e.copy = function () {
            return xm(r(), [o, u])
              .round(a)
              .paddingInner(c)
              .paddingOuter(f)
              .align(s);
          }),
          vm.apply(l(), arguments)
        );
      }
      function wm(t) {
        var n = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function () {
            return wm(n());
          }),
          t
        );
      }
      function Mm() {
        return wm(xm.apply(null, arguments).paddingInner(1));
      }
      function Am(t) {
        return +t;
      }
      var Sm = [0, 1];
      function Tm(t) {
        return t;
      }
      function Em(t, n) {
        return (n -= t = +t)
          ? function (e) {
              return (e - t) / n;
            }
          : ((e = isNaN(n) ? NaN : 0.5),
            function () {
              return e;
            });
        var e;
      }
      function Nm(t, n, e) {
        var r = t[0],
          i = t[1],
          o = n[0],
          u = n[1];
        return (
          i < r
            ? ((r = Em(i, r)), (o = e(u, o)))
            : ((r = Em(r, i)), (o = e(o, u))),
          function (t) {
            return o(r(t));
          }
        );
      }
      function km(t, n, e) {
        var r = Math.min(t.length, n.length) - 1,
          i = new Array(r),
          o = new Array(r),
          u = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
          ++u < r;

        )
          (i[u] = Em(t[u], t[u + 1])), (o[u] = e(n[u], n[u + 1]));
        return function (n) {
          var e = g(t, n, 1, r) - 1;
          return o[e](i[e](n));
        };
      }
      function Cm(t, n) {
        return n
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Pm() {
        var t,
          n,
          e,
          r,
          i,
          o,
          u = Sm,
          a = Sm,
          c = Gr,
          f = Tm;
        function s() {
          var t,
            n,
            e,
            c = Math.min(u.length, a.length);
          return (
            f !== Tm &&
              ((t = u[0]),
              (n = u[c - 1]),
              t > n && ((e = t), (t = n), (n = e)),
              (f = function (e) {
                return Math.max(t, Math.min(n, e));
              })),
            (r = c > 2 ? km : Nm),
            (i = o = null),
            l
          );
        }
        function l(n) {
          return null == n || isNaN((n = +n))
            ? e
            : (i || (i = r(u.map(t), a, c)))(t(f(n)));
        }
        return (
          (l.invert = function (e) {
            return f(n((o || (o = r(a, u.map(t), Lr)))(e)));
          }),
          (l.domain = function (t) {
            return arguments.length
              ? ((u = Array.from(t, Am)), s())
              : u.slice();
          }),
          (l.range = function (t) {
            return arguments.length ? ((a = Array.from(t)), s()) : a.slice();
          }),
          (l.rangeRound = function (t) {
            return (a = Array.from(t)), (c = k_), s();
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((f = !!t || Tm), s()) : f !== Tm;
          }),
          (l.interpolate = function (t) {
            return arguments.length ? ((c = t), s()) : c;
          }),
          (l.unknown = function (t) {
            return arguments.length ? ((e = t), l) : e;
          }),
          function (e, r) {
            return (t = e), (n = r), s();
          }
        );
      }
      function zm() {
        return Pm()(Tm, Tm);
      }
      var $m =
        /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Om(t) {
        if (!(n = $m.exec(t))) throw new Error("invalid format: " + t);
        var n;
        return new Dm({
          fill: n[1],
          align: n[2],
          sign: n[3],
          symbol: n[4],
          zero: n[5],
          width: n[6],
          comma: n[7],
          precision: n[8] && n[8].slice(1),
          trim: n[9],
          type: n[10],
        });
      }
      function Dm(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      (Om.prototype = Dm.prototype),
        (Dm.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      function Rm(t, n) {
        if (
          (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var e,
          r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
      }
      var jm,
        qm,
        Fm,
        Bm,
        Im = function (t) {
          return (t = Rm(Math.abs(t))) ? t[1] : NaN;
        },
        Um = function (t, n) {
          var e = Rm(t, n);
          if (!e) return t + "";
          var r = e[0],
            i = e[1];
          return i < 0
            ? "0." + new Array(-i).join("0") + r
            : r.length > i + 1
            ? r.slice(0, i + 1) + "." + r.slice(i + 1)
            : r + new Array(i - r.length + 2).join("0");
        },
        Lm = {
          "%": (t, n) => (100 * t).toFixed(n),
          b: (t) => Math.round(t).toString(2),
          c: (t) => t + "",
          d: function (t) {
            return Math.abs((t = Math.round(t))) >= 1e21
              ? t.toLocaleString("en").replace(/,/g, "")
              : t.toString(10);
          },
          e: (t, n) => t.toExponential(n),
          f: (t, n) => t.toFixed(n),
          g: (t, n) => t.toPrecision(n),
          o: (t) => Math.round(t).toString(8),
          p: (t, n) => Um(100 * t, n),
          r: Um,
          s: function (t, n) {
            var e = Rm(t, n);
            if (!e) return t + "";
            var r = e[0],
              i = e[1],
              o =
                i - (jm = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
              u = r.length;
            return o === u
              ? r
              : o > u
              ? r + new Array(o - u + 1).join("0")
              : o > 0
              ? r.slice(0, o) + "." + r.slice(o)
              : "0." +
                new Array(1 - o).join("0") +
                Rm(t, Math.max(0, n + o - 1))[0];
          },
          X: (t) => Math.round(t).toString(16).toUpperCase(),
          x: (t) => Math.round(t).toString(16),
        },
        Ym = function (t) {
          return t;
        },
        Hm = Array.prototype.map,
        Xm = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      (qm = (function (t) {
        var n,
          e,
          r =
            void 0 === t.grouping || void 0 === t.thousands
              ? Ym
              : ((n = Hm.call(t.grouping, Number)),
                (e = t.thousands + ""),
                function (t, r) {
                  for (
                    var i = t.length, o = [], u = 0, a = n[0], c = 0;
                    i > 0 &&
                    a > 0 &&
                    (c + a + 1 > r && (a = Math.max(1, r - c)),
                    o.push(t.substring((i -= a), i + a)),
                    !((c += a + 1) > r));

                  )
                    a = n[(u = (u + 1) % n.length)];
                  return o.reverse().join(e);
                }),
          i = void 0 === t.currency ? "" : t.currency[0] + "",
          o = void 0 === t.currency ? "" : t.currency[1] + "",
          u = void 0 === t.decimal ? "." : t.decimal + "",
          a =
            void 0 === t.numerals
              ? Ym
              : (function (t) {
                  return function (n) {
                    return n.replace(/[0-9]/g, function (n) {
                      return t[+n];
                    });
                  };
                })(Hm.call(t.numerals, String)),
          c = void 0 === t.percent ? "%" : t.percent + "",
          f = void 0 === t.minus ? "−" : t.minus + "",
          s = void 0 === t.nan ? "NaN" : t.nan + "";
        function l(t) {
          var n = (t = Om(t)).fill,
            e = t.align,
            l = t.sign,
            h = t.symbol,
            d = t.zero,
            p = t.width,
            g = t.comma,
            y = t.precision,
            v = t.trim,
            _ = t.type;
          "n" === _
            ? ((g = !0), (_ = "g"))
            : Lm[_] || (void 0 === y && (y = 12), (v = !0), (_ = "g")),
            (d || ("0" === n && "=" === e)) && ((d = !0), (n = "0"), (e = "="));
          var m =
              "$" === h
                ? i
                : "#" === h && /[boxX]/.test(_)
                ? "0" + _.toLowerCase()
                : "",
            b = "$" === h ? o : /[%p]/.test(_) ? c : "",
            x = Lm[_],
            w = /[defgprs%]/.test(_);
          function M(t) {
            var i,
              o,
              c,
              h = m,
              M = b;
            if ("c" === _) (M = x(t) + M), (t = "");
            else {
              var A = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? s : x(Math.abs(t), y)),
                v &&
                  (t = (function (t) {
                    t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                      switch (t[r]) {
                        case ".":
                          i = n = r;
                          break;
                        case "0":
                          0 === i && (i = r), (n = r);
                          break;
                        default:
                          if (!+t[r]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                  })(t)),
                A && 0 == +t && "+" !== l && (A = !1),
                (h =
                  (A ? ("(" === l ? l : f) : "-" === l || "(" === l ? "" : l) +
                  h),
                (M =
                  ("s" === _ ? Xm[8 + jm / 3] : "") +
                  M +
                  (A && "(" === l ? ")" : "")),
                w)
              )
                for (i = -1, o = t.length; ++i < o; )
                  if (48 > (c = t.charCodeAt(i)) || c > 57) {
                    (M = (46 === c ? u + t.slice(i + 1) : t.slice(i)) + M),
                      (t = t.slice(0, i));
                    break;
                  }
            }
            g && !d && (t = r(t, 1 / 0));
            var S = h.length + t.length + M.length,
              T = S < p ? new Array(p - S + 1).join(n) : "";
            switch (
              (g &&
                d &&
                ((t = r(T + t, T.length ? p - M.length : 1 / 0)), (T = "")),
              e)
            ) {
              case "<":
                t = h + t + M + T;
                break;
              case "=":
                t = h + T + t + M;
                break;
              case "^":
                t = T.slice(0, (S = T.length >> 1)) + h + t + M + T.slice(S);
                break;
              default:
                t = T + h + t + M;
            }
            return a(t);
          }
          return (
            (y =
              void 0 === y
                ? 6
                : /[gprs]/.test(_)
                ? Math.max(1, Math.min(21, y))
                : Math.max(0, Math.min(20, y))),
            (M.toString = function () {
              return t + "";
            }),
            M
          );
        }
        return {
          format: l,
          formatPrefix: function (t, n) {
            var e = l((((t = Om(t)).type = "f"), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(Im(n) / 3))),
              i = Math.pow(10, -r),
              o = Xm[8 + r / 3];
            return function (t) {
              return e(i * t) + o;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (Fm = qm.format),
        (Bm = qm.formatPrefix);
      function Vm(t, n, e, r) {
        var i,
          o = dt(t, n, e);
        switch ((r = Om(null == r ? ",f" : r)).type) {
          case "s":
            var u = Math.max(Math.abs(t), Math.abs(n));
            return (
              null != r.precision ||
                isNaN(
                  (i = (function (t, n) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(Im(n) / 3))) -
                        Im(Math.abs(t))
                    );
                  })(o, u))
                ) ||
                (r.precision = i),
              Bm(r, u)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != r.precision ||
              isNaN(
                (i = (function (t, n) {
                  return (
                    (t = Math.abs(t)),
                    (n = Math.abs(n) - t),
                    Math.max(0, Im(n) - Im(t)) + 1
                  );
                })(o, Math.max(Math.abs(t), Math.abs(n))))
              ) ||
              (r.precision = i - ("e" === r.type));
            break;
          case "f":
          case "%":
            null != r.precision ||
              isNaN(
                (i = (function (t) {
                  return Math.max(0, -Im(Math.abs(t)));
                })(o))
              ) ||
              (r.precision = i - 2 * ("%" === r.type));
        }
        return Fm(r);
      }
      function Gm(t) {
        var n = t.domain;
        return (
          (t.ticks = function (t) {
            var e = n();
            return lt(e[0], e[e.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, e) {
            var r = n();
            return Vm(r[0], r[r.length - 1], null == t ? 10 : t, e);
          }),
          (t.nice = function (e) {
            null == e && (e = 10);
            var r,
              i,
              o = n(),
              u = 0,
              a = o.length - 1,
              c = o[u],
              f = o[a],
              s = 10;
            for (
              f < c && ((i = c), (c = f), (f = i), (i = u), (u = a), (a = i));
              s-- > 0;

            ) {
              if ((i = ht(c, f, e)) === r) return (o[u] = c), (o[a] = f), n(o);
              if (i > 0)
                (c = Math.floor(c / i) * i), (f = Math.ceil(f / i) * i);
              else {
                if (!(i < 0)) break;
                (c = Math.ceil(c * i) / i), (f = Math.floor(f * i) / i);
              }
              r = i;
            }
            return t;
          }),
          t
        );
      }
      function Jm() {
        var t = zm();
        return (
          (t.copy = function () {
            return Cm(t, Jm());
          }),
          vm.apply(t, arguments),
          Gm(t)
        );
      }
      function Zm(t) {
        var n;
        function e(t) {
          return null == t || isNaN((t = +t)) ? n : t;
        }
        return (
          (e.invert = e),
          (e.domain = e.range =
            function (n) {
              return arguments.length
                ? ((t = Array.from(n, Am)), e)
                : t.slice();
            }),
          (e.unknown = function (t) {
            return arguments.length ? ((n = t), e) : n;
          }),
          (e.copy = function () {
            return Zm(t).unknown(n);
          }),
          (t = arguments.length ? Array.from(t, Am) : [0, 1]),
          Gm(e)
        );
      }
      function Wm(t, n) {
        var e,
          r = 0,
          i = (t = t.slice()).length - 1,
          o = t[r],
          u = t[i];
        return (
          u < o && ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)),
          (t[r] = n.floor(o)),
          (t[i] = n.ceil(u)),
          t
        );
      }
      function Km(t) {
        return Math.log(t);
      }
      function Qm(t) {
        return Math.exp(t);
      }
      function tb(t) {
        return -Math.log(-t);
      }
      function nb(t) {
        return -Math.exp(-t);
      }
      function eb(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function rb(t) {
        return (n, e) => -t(-n, e);
      }
      function ib(t) {
        const n = t(Km, Qm),
          e = n.domain;
        let r,
          i,
          o = 10;
        function u() {
          return (
            (r = (function (t) {
              return t === Math.E
                ? Math.log
                : (10 === t && Math.log10) ||
                    (2 === t && Math.log2) ||
                    ((t = Math.log(t)), (n) => Math.log(n) / t);
            })(o)),
            (i = (function (t) {
              return 10 === t
                ? eb
                : t === Math.E
                ? Math.exp
                : (n) => Math.pow(t, n);
            })(o)),
            e()[0] < 0 ? ((r = rb(r)), (i = rb(i)), t(tb, nb)) : t(Km, Qm),
            n
          );
        }
        return (
          (n.base = function (t) {
            return arguments.length ? ((o = +t), u()) : o;
          }),
          (n.domain = function (t) {
            return arguments.length ? (e(t), u()) : e();
          }),
          (n.ticks = (t) => {
            const n = e();
            let u = n[0],
              a = n[n.length - 1];
            const c = a < u;
            c && ([u, a] = [a, u]);
            let f,
              s,
              l = r(u),
              h = r(a);
            const d = null == t ? 10 : +t;
            let p = [];
            if (!(o % 1) && h - l < d) {
              if (((l = Math.floor(l)), (h = Math.ceil(h)), u > 0)) {
                for (; l <= h; ++l)
                  for (f = 1; f < o; ++f)
                    if (((s = l < 0 ? f / i(-l) : f * i(l)), !(s < u))) {
                      if (s > a) break;
                      p.push(s);
                    }
              } else
                for (; l <= h; ++l)
                  for (f = o - 1; f >= 1; --f)
                    if (((s = l > 0 ? f / i(-l) : f * i(l)), !(s < u))) {
                      if (s > a) break;
                      p.push(s);
                    }
              2 * p.length < d && (p = lt(u, a, d));
            } else p = lt(l, h, Math.min(h - l, d)).map(i);
            return c ? p.reverse() : p;
          }),
          (n.tickFormat = (t, e) => {
            if (
              (null == t && (t = 10),
              null == e && (e = 10 === o ? "s" : ","),
              "function" != typeof e &&
                (o % 1 || null != (e = Om(e)).precision || (e.trim = !0),
                (e = Fm(e))),
              t === 1 / 0)
            )
              return e;
            const u = Math.max(1, (o * t) / n.ticks().length);
            return (t) => {
              let n = t / i(Math.round(r(t)));
              return n * o < o - 0.5 && (n *= o), n <= u ? e(t) : "";
            };
          }),
          (n.nice = () =>
            e(
              Wm(e(), {
                floor: (t) => i(Math.floor(r(t))),
                ceil: (t) => i(Math.ceil(r(t))),
              })
            )),
          n
        );
      }
      function ob() {
        const t = ib(Pm()).domain([1, 10]);
        return (
          (t.copy = () => Cm(t, ob()).base(t.base())), vm.apply(t, arguments), t
        );
      }
      function ub(t) {
        return function (n) {
          return Math.sign(n) * Math.log1p(Math.abs(n / t));
        };
      }
      function ab(t) {
        return function (n) {
          return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
        };
      }
      function cb(t) {
        var n = 1,
          e = t(ub(n), ab(n));
        return (
          (e.constant = function (e) {
            return arguments.length ? t(ub((n = +e)), ab(n)) : n;
          }),
          Gm(e)
        );
      }
      function fb() {
        var t = cb(Pm());
        return (
          (t.copy = function () {
            return Cm(t, fb()).constant(t.constant());
          }),
          vm.apply(t, arguments)
        );
      }
      function sb(t) {
        return function (n) {
          return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
        };
      }
      function lb(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function hb(t) {
        return t < 0 ? -t * t : t * t;
      }
      function db(t) {
        var n = t(Tm, Tm),
          e = 1;
        function r() {
          return 1 === e
            ? t(Tm, Tm)
            : 0.5 === e
            ? t(lb, hb)
            : t(sb(e), sb(1 / e));
        }
        return (
          (n.exponent = function (t) {
            return arguments.length ? ((e = +t), r()) : e;
          }),
          Gm(n)
        );
      }
      function pb() {
        var t = db(Pm());
        return (
          (t.copy = function () {
            return Cm(t, pb()).exponent(t.exponent());
          }),
          vm.apply(t, arguments),
          t
        );
      }
      function gb() {
        return pb.apply(null, arguments).exponent(0.5);
      }
      function yb(t) {
        return Math.sign(t) * t * t;
      }
      function vb(t) {
        return Math.sign(t) * Math.sqrt(Math.abs(t));
      }
      function _b() {
        var t,
          n = zm(),
          e = [0, 1],
          r = !1;
        function i(e) {
          var i = vb(n(e));
          return isNaN(i) ? t : r ? Math.round(i) : i;
        }
        return (
          (i.invert = function (t) {
            return n.invert(yb(t));
          }),
          (i.domain = function (t) {
            return arguments.length ? (n.domain(t), i) : n.domain();
          }),
          (i.range = function (t) {
            return arguments.length
              ? (n.range((e = Array.from(t, Am)).map(yb)), i)
              : e.slice();
          }),
          (i.rangeRound = function (t) {
            return i.range(t).round(!0);
          }),
          (i.round = function (t) {
            return arguments.length ? ((r = !!t), i) : r;
          }),
          (i.clamp = function (t) {
            return arguments.length ? (n.clamp(t), i) : n.clamp();
          }),
          (i.unknown = function (n) {
            return arguments.length ? ((t = n), i) : t;
          }),
          (i.copy = function () {
            return _b(n.domain(), e).round(r).clamp(n.clamp()).unknown(t);
          }),
          vm.apply(i, arguments),
          Gm(i)
        );
      }
      function mb() {
        var t,
          n = [],
          e = [],
          r = [];
        function i() {
          var t = 0,
            i = Math.max(1, e.length);
          for (r = new Array(i - 1); ++t < i; ) r[t - 1] = St(n, t / i);
          return u;
        }
        function u(n) {
          return null == n || isNaN((n = +n)) ? t : e[g(r, n)];
        }
        return (
          (u.invertExtent = function (t) {
            var i = e.indexOf(t);
            return i < 0
              ? [NaN, NaN]
              : [
                  i > 0 ? r[i - 1] : n[0],
                  i < r.length ? r[i] : n[n.length - 1],
                ];
          }),
          (u.domain = function (t) {
            if (!arguments.length) return n.slice();
            n = [];
            for (let e of t) null == e || isNaN((e = +e)) || n.push(e);
            return n.sort(o), i();
          }),
          (u.range = function (t) {
            return arguments.length ? ((e = Array.from(t)), i()) : e.slice();
          }),
          (u.unknown = function (n) {
            return arguments.length ? ((t = n), u) : t;
          }),
          (u.quantiles = function () {
            return r.slice();
          }),
          (u.copy = function () {
            return mb().domain(n).range(e).unknown(t);
          }),
          vm.apply(u, arguments)
        );
      }
      function bb() {
        var t,
          n = 0,
          e = 1,
          r = 1,
          i = [0.5],
          o = [0, 1];
        function u(n) {
          return null != n && n <= n ? o[g(i, n, 0, r)] : t;
        }
        function a() {
          var t = -1;
          for (i = new Array(r); ++t < r; )
            i[t] = ((t + 1) * e - (t - r) * n) / (r + 1);
          return u;
        }
        return (
          (u.domain = function (t) {
            return arguments.length
              ? (([n, e] = t), (n = +n), (e = +e), a())
              : [n, e];
          }),
          (u.range = function (t) {
            return arguments.length
              ? ((r = (o = Array.from(t)).length - 1), a())
              : o.slice();
          }),
          (u.invertExtent = function (t) {
            var u = o.indexOf(t);
            return u < 0
              ? [NaN, NaN]
              : u < 1
              ? [n, i[0]]
              : u >= r
              ? [i[r - 1], e]
              : [i[u - 1], i[u]];
          }),
          (u.unknown = function (n) {
            return arguments.length ? ((t = n), u) : u;
          }),
          (u.thresholds = function () {
            return i.slice();
          }),
          (u.copy = function () {
            return bb().domain([n, e]).range(o).unknown(t);
          }),
          vm.apply(Gm(u), arguments)
        );
      }
      function xb() {
        var t,
          n = [0.5],
          e = [0, 1],
          r = 1;
        function i(i) {
          return null != i && i <= i ? e[g(n, i, 0, r)] : t;
        }
        return (
          (i.domain = function (t) {
            return arguments.length
              ? ((n = Array.from(t)), (r = Math.min(n.length, e.length - 1)), i)
              : n.slice();
          }),
          (i.range = function (t) {
            return arguments.length
              ? ((e = Array.from(t)), (r = Math.min(n.length, e.length - 1)), i)
              : e.slice();
          }),
          (i.invertExtent = function (t) {
            var r = e.indexOf(t);
            return [n[r - 1], n[r]];
          }),
          (i.unknown = function (n) {
            return arguments.length ? ((t = n), i) : t;
          }),
          (i.copy = function () {
            return xb().domain(n).range(e).unknown(t);
          }),
          vm.apply(i, arguments)
        );
      }
      const wb = new Date(),
        Mb = new Date();
      function Ab(t, n, e, r) {
        function i(n) {
          return t((n = 0 === arguments.length ? new Date() : new Date(+n))), n;
        }
        return (
          (i.floor = (n) => (t((n = new Date(+n))), n)),
          (i.ceil = (e) => (t((e = new Date(e - 1))), n(e, 1), t(e), e)),
          (i.round = (t) => {
            const n = i(t),
              e = i.ceil(t);
            return t - n < e - t ? n : e;
          }),
          (i.offset = (t, e) => (
            n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t
          )),
          (i.range = (e, r, o) => {
            const u = [];
            if (
              ((e = i.ceil(e)),
              (o = null == o ? 1 : Math.floor(o)),
              !(e < r && o > 0))
            )
              return u;
            let a;
            do {
              u.push((a = new Date(+e))), n(e, o), t(e);
            } while (a < e && e < r);
            return u;
          }),
          (i.filter = (e) =>
            Ab(
              (n) => {
                if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
              },
              (t, r) => {
                if (t >= t)
                  if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                  else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
              }
            )),
          e &&
            ((i.count = (n, r) => (
              wb.setTime(+n),
              Mb.setTime(+r),
              t(wb),
              t(Mb),
              Math.floor(e(wb, Mb))
            )),
            (i.every = (t) => (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? i.filter(
                      r ? (n) => r(n) % t == 0 : (n) => i.count(0, n) % t == 0
                    )
                  : i
                : null
            ))),
          i
        );
      }
      const Sb = Ab(
        () => {},
        (t, n) => {
          t.setTime(+t + n);
        },
        (t, n) => n - t
      );
      Sb.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? Ab(
                (n) => {
                  n.setTime(Math.floor(n / t) * t);
                },
                (n, e) => {
                  n.setTime(+n + e * t);
                },
                (n, e) => (e - n) / t
              )
            : Sb
          : null
      );
      const Tb = Sb.range,
        Eb = Ab(
          (t) => {
            t.setTime(t - t.getMilliseconds());
          },
          (t, n) => {
            t.setTime(+t + 1e3 * n);
          },
          (t, n) => (n - t) / 1e3,
          (t) => t.getUTCSeconds()
        ),
        Nb = Eb.range,
        kb = Ab(
          (t) => {
            t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
          },
          (t, n) => {
            t.setTime(+t + 6e4 * n);
          },
          (t, n) => (n - t) / 6e4,
          (t) => t.getMinutes()
        ),
        Cb = kb.range,
        Pb = Ab(
          (t) => {
            t.setUTCSeconds(0, 0);
          },
          (t, n) => {
            t.setTime(+t + 6e4 * n);
          },
          (t, n) => (n - t) / 6e4,
          (t) => t.getUTCMinutes()
        ),
        zb = Pb.range,
        $b = Ab(
          (t) => {
            t.setTime(
              t -
                t.getMilliseconds() -
                1e3 * t.getSeconds() -
                6e4 * t.getMinutes()
            );
          },
          (t, n) => {
            t.setTime(+t + 36e5 * n);
          },
          (t, n) => (n - t) / 36e5,
          (t) => t.getHours()
        ),
        Ob = $b.range,
        Db = Ab(
          (t) => {
            t.setUTCMinutes(0, 0, 0);
          },
          (t, n) => {
            t.setTime(+t + 36e5 * n);
          },
          (t, n) => (n - t) / 36e5,
          (t) => t.getUTCHours()
        ),
        Rb = Db.range,
        jb = Ab(
          (t) => t.setHours(0, 0, 0, 0),
          (t, n) => t.setDate(t.getDate() + n),
          (t, n) =>
            (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) /
            864e5,
          (t) => t.getDate() - 1
        ),
        qb = jb.range,
        Fb = Ab(
          (t) => {
            t.setUTCHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setUTCDate(t.getUTCDate() + n);
          },
          (t, n) => (n - t) / 864e5,
          (t) => t.getUTCDate() - 1
        ),
        Bb = Fb.range,
        Ib = Ab(
          (t) => {
            t.setUTCHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setUTCDate(t.getUTCDate() + n);
          },
          (t, n) => (n - t) / 864e5,
          (t) => Math.floor(t / 864e5)
        ),
        Ub = Ib.range;
      function Lb(t) {
        return Ab(
          (n) => {
            n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
              n.setHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setDate(t.getDate() + 7 * n);
          },
          (t, n) =>
            (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) /
            6048e5
        );
      }
      const Yb = Lb(0),
        Hb = Lb(1),
        Xb = Lb(2),
        Vb = Lb(3),
        Gb = Lb(4),
        Jb = Lb(5),
        Zb = Lb(6),
        Wb = Yb.range,
        Kb = Hb.range,
        Qb = Xb.range,
        tx = Vb.range,
        nx = Gb.range,
        ex = Jb.range,
        rx = Zb.range;
      function ix(t) {
        return Ab(
          (n) => {
            n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
              n.setUTCHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setUTCDate(t.getUTCDate() + 7 * n);
          },
          (t, n) => (n - t) / 6048e5
        );
      }
      const ox = ix(0),
        ux = ix(1),
        ax = ix(2),
        cx = ix(3),
        fx = ix(4),
        sx = ix(5),
        lx = ix(6),
        hx = ox.range,
        dx = ux.range,
        px = ax.range,
        gx = cx.range,
        yx = fx.range,
        vx = sx.range,
        _x = lx.range,
        mx = Ab(
          (t) => {
            t.setDate(1), t.setHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setMonth(t.getMonth() + n);
          },
          (t, n) =>
            n.getMonth() -
            t.getMonth() +
            12 * (n.getFullYear() - t.getFullYear()),
          (t) => t.getMonth()
        ),
        bx = mx.range,
        xx = Ab(
          (t) => {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setUTCMonth(t.getUTCMonth() + n);
          },
          (t, n) =>
            n.getUTCMonth() -
            t.getUTCMonth() +
            12 * (n.getUTCFullYear() - t.getUTCFullYear()),
          (t) => t.getUTCMonth()
        ),
        wx = xx.range,
        Mx = Ab(
          (t) => {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setFullYear(t.getFullYear() + n);
          },
          (t, n) => n.getFullYear() - t.getFullYear(),
          (t) => t.getFullYear()
        );
      Mx.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? Ab(
              (n) => {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                  n.setMonth(0, 1),
                  n.setHours(0, 0, 0, 0);
              },
              (n, e) => {
                n.setFullYear(n.getFullYear() + e * t);
              }
            )
          : null;
      const Ax = Mx.range,
        Sx = Ab(
          (t) => {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setUTCFullYear(t.getUTCFullYear() + n);
          },
          (t, n) => n.getUTCFullYear() - t.getUTCFullYear(),
          (t) => t.getUTCFullYear()
        );
      Sx.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? Ab(
              (n) => {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                  n.setUTCMonth(0, 1),
                  n.setUTCHours(0, 0, 0, 0);
              },
              (n, e) => {
                n.setUTCFullYear(n.getUTCFullYear() + e * t);
              }
            )
          : null;
      const Tx = Sx.range;
      function Ex(t, n, e, r, i, o) {
        const u = [
          [Eb, 1, 1e3],
          [Eb, 5, 5e3],
          [Eb, 15, 15e3],
          [Eb, 30, 3e4],
          [o, 1, 6e4],
          [o, 5, 3e5],
          [o, 15, 9e5],
          [o, 30, 18e5],
          [i, 1, 36e5],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [r, 1, 864e5],
          [r, 2, 1728e5],
          [e, 1, 6048e5],
          [n, 1, 2592e6],
          [n, 3, 7776e6],
          [t, 1, 31536e6],
        ];
        function c(n, e, r) {
          const i = Math.abs(e - n) / r,
            o = a(([, , t]) => t).right(u, i);
          if (o === u.length) return t.every(dt(n / 31536e6, e / 31536e6, r));
          if (0 === o) return Sb.every(Math.max(dt(n, e, r), 1));
          const [c, f] = u[i / u[o - 1][2] < u[o][2] / i ? o - 1 : o];
          return c.every(f);
        }
        return [
          function (t, n, e) {
            const r = n < t;
            r && ([t, n] = [n, t]);
            const i = e && "function" == typeof e.range ? e : c(t, n, e),
              o = i ? i.range(t, +n + 1) : [];
            return r ? o.reverse() : o;
          },
          c,
        ];
      }
      const [Nx, kx] = Ex(Sx, xx, ox, Ib, Db, Pb),
        [Cx, Px] = Ex(Mx, mx, Yb, jb, $b, kb);
      function zx(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return n.setFullYear(t.y), n;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function $x(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return n.setUTCFullYear(t.y), n;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function Ox(t, n, e) {
        return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
      }
      function Dx(t) {
        var n = t.dateTime,
          e = t.date,
          r = t.time,
          i = t.periods,
          o = t.days,
          u = t.shortDays,
          a = t.months,
          c = t.shortMonths,
          f = Vx(i),
          s = Gx(i),
          l = Vx(o),
          h = Gx(o),
          d = Vx(u),
          p = Gx(u),
          g = Vx(a),
          y = Gx(a),
          v = Vx(c),
          _ = Gx(c),
          m = {
            a: function (t) {
              return u[t.getDay()];
            },
            A: function (t) {
              return o[t.getDay()];
            },
            b: function (t) {
              return c[t.getMonth()];
            },
            B: function (t) {
              return a[t.getMonth()];
            },
            c: null,
            d: gw,
            e: gw,
            f: bw,
            g: Pw,
            G: $w,
            H: yw,
            I: vw,
            j: _w,
            L: mw,
            m: xw,
            M: ww,
            p: function (t) {
              return i[+(t.getHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getMonth() / 3);
            },
            Q: eM,
            s: rM,
            S: Mw,
            u: Aw,
            U: Sw,
            V: Ew,
            w: Nw,
            W: kw,
            x: null,
            X: null,
            y: Cw,
            Y: zw,
            Z: Ow,
            "%": nM,
          },
          b = {
            a: function (t) {
              return u[t.getUTCDay()];
            },
            A: function (t) {
              return o[t.getUTCDay()];
            },
            b: function (t) {
              return c[t.getUTCMonth()];
            },
            B: function (t) {
              return a[t.getUTCMonth()];
            },
            c: null,
            d: Dw,
            e: Dw,
            f: Bw,
            g: Ww,
            G: Qw,
            H: Rw,
            I: jw,
            j: qw,
            L: Fw,
            m: Iw,
            M: Uw,
            p: function (t) {
              return i[+(t.getUTCHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getUTCMonth() / 3);
            },
            Q: eM,
            s: rM,
            S: Lw,
            u: Yw,
            U: Hw,
            V: Vw,
            w: Gw,
            W: Jw,
            x: null,
            X: null,
            y: Zw,
            Y: Kw,
            Z: tM,
            "%": nM,
          },
          x = {
            a: function (t, n, e) {
              var r = d.exec(n.slice(e));
              return r
                ? ((t.w = p.get(r[0].toLowerCase())), e + r[0].length)
                : -1;
            },
            A: function (t, n, e) {
              var r = l.exec(n.slice(e));
              return r
                ? ((t.w = h.get(r[0].toLowerCase())), e + r[0].length)
                : -1;
            },
            b: function (t, n, e) {
              var r = v.exec(n.slice(e));
              return r
                ? ((t.m = _.get(r[0].toLowerCase())), e + r[0].length)
                : -1;
            },
            B: function (t, n, e) {
              var r = g.exec(n.slice(e));
              return r
                ? ((t.m = y.get(r[0].toLowerCase())), e + r[0].length)
                : -1;
            },
            c: function (t, e, r) {
              return A(t, n, e, r);
            },
            d: ow,
            e: ow,
            f: lw,
            g: nw,
            G: tw,
            H: aw,
            I: aw,
            j: uw,
            L: sw,
            m: iw,
            M: cw,
            p: function (t, n, e) {
              var r = f.exec(n.slice(e));
              return r
                ? ((t.p = s.get(r[0].toLowerCase())), e + r[0].length)
                : -1;
            },
            q: rw,
            Q: dw,
            s: pw,
            S: fw,
            u: Zx,
            U: Wx,
            V: Kx,
            w: Jx,
            W: Qx,
            x: function (t, n, r) {
              return A(t, e, n, r);
            },
            X: function (t, n, e) {
              return A(t, r, n, e);
            },
            y: nw,
            Y: tw,
            Z: ew,
            "%": hw,
          };
        function w(t, n) {
          return function (e) {
            var r,
              i,
              o,
              u = [],
              a = -1,
              c = 0,
              f = t.length;
            for (e instanceof Date || (e = new Date(+e)); ++a < f; )
              37 === t.charCodeAt(a) &&
                (u.push(t.slice(c, a)),
                null != (i = Ix[(r = t.charAt(++a))])
                  ? (r = t.charAt(++a))
                  : (i = "e" === r ? " " : "0"),
                (o = n[r]) && (r = o(e, i)),
                u.push(r),
                (c = a + 1));
            return u.push(t.slice(c, a)), u.join("");
          };
        }
        function M(t, n) {
          return function (e) {
            var r,
              i,
              o = Ox(1900, void 0, 1);
            if (A(o, t, (e += ""), 0) != e.length) return null;
            if ("Q" in o) return new Date(o.Q);
            if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
            if (
              (n && !("Z" in o) && (o.Z = 0),
              "p" in o && (o.H = (o.H % 12) + 12 * o.p),
              void 0 === o.m && (o.m = "q" in o ? o.q : 0),
              "V" in o)
            ) {
              if (o.V < 1 || o.V > 53) return null;
              "w" in o || (o.w = 1),
                "Z" in o
                  ? ((i = (r = $x(Ox(o.y, 0, 1))).getUTCDay()),
                    (r = i > 4 || 0 === i ? ux.ceil(r) : ux(r)),
                    (r = Fb.offset(r, 7 * (o.V - 1))),
                    (o.y = r.getUTCFullYear()),
                    (o.m = r.getUTCMonth()),
                    (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                  : ((i = (r = zx(Ox(o.y, 0, 1))).getDay()),
                    (r = i > 4 || 0 === i ? Hb.ceil(r) : Hb(r)),
                    (r = jb.offset(r, 7 * (o.V - 1))),
                    (o.y = r.getFullYear()),
                    (o.m = r.getMonth()),
                    (o.d = r.getDate() + ((o.w + 6) % 7)));
            } else
              ("W" in o || "U" in o) &&
                ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
                (i =
                  "Z" in o
                    ? $x(Ox(o.y, 0, 1)).getUTCDay()
                    : zx(Ox(o.y, 0, 1)).getDay()),
                (o.m = 0),
                (o.d =
                  "W" in o
                    ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                    : o.w + 7 * o.U - ((i + 6) % 7)));
            return "Z" in o
              ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), $x(o))
              : zx(o);
          };
        }
        function A(t, n, e, r) {
          for (var i, o, u = 0, a = n.length, c = e.length; u < a; ) {
            if (r >= c) return -1;
            if (37 === (i = n.charCodeAt(u++))) {
              if (
                ((i = n.charAt(u++)),
                !(o = x[i in Ix ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0)
              )
                return -1;
            } else if (i != e.charCodeAt(r++)) return -1;
          }
          return r;
        }
        return (
          (m.x = w(e, m)),
          (m.X = w(r, m)),
          (m.c = w(n, m)),
          (b.x = w(e, b)),
          (b.X = w(r, b)),
          (b.c = w(n, b)),
          {
            format: function (t) {
              var n = w((t += ""), m);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
            parse: function (t) {
              var n = M((t += ""), !1);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
            utcFormat: function (t) {
              var n = w((t += ""), b);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
            utcParse: function (t) {
              var n = M((t += ""), !0);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
          }
        );
      }
      var Rx,
        jx,
        qx,
        Fx,
        Bx,
        Ix = { "-": "", _: " ", 0: "0" },
        Ux = /^\s*\d+/,
        Lx = /^%/,
        Yx = /[\\^$*+?|[\]().{}]/g;
      function Hx(t, n, e) {
        var r = t < 0 ? "-" : "",
          i = (r ? -t : t) + "",
          o = i.length;
        return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
      }
      function Xx(t) {
        return t.replace(Yx, "\\$&");
      }
      function Vx(t) {
        return new RegExp("^(?:" + t.map(Xx).join("|") + ")", "i");
      }
      function Gx(t) {
        return new Map(t.map((t, n) => [t.toLowerCase(), n]));
      }
      function Jx(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 1));
        return r ? ((t.w = +r[0]), e + r[0].length) : -1;
      }
      function Zx(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 1));
        return r ? ((t.u = +r[0]), e + r[0].length) : -1;
      }
      function Wx(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 2));
        return r ? ((t.U = +r[0]), e + r[0].length) : -1;
      }
      function Kx(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 2));
        return r ? ((t.V = +r[0]), e + r[0].length) : -1;
      }
      function Qx(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 2));
        return r ? ((t.W = +r[0]), e + r[0].length) : -1;
      }
      function tw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 4));
        return r ? ((t.y = +r[0]), e + r[0].length) : -1;
      }
      function nw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 2));
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
          : -1;
      }
      function ew(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
          : -1;
      }
      function rw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 1));
        return r ? ((t.q = 3 * r[0] - 3), e + r[0].length) : -1;
      }
      function iw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 2));
        return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
      }
      function ow(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 2));
        return r ? ((t.d = +r[0]), e + r[0].length) : -1;
      }
      function uw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
      }
      function aw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 2));
        return r ? ((t.H = +r[0]), e + r[0].length) : -1;
      }
      function cw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 2));
        return r ? ((t.M = +r[0]), e + r[0].length) : -1;
      }
      function fw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 2));
        return r ? ((t.S = +r[0]), e + r[0].length) : -1;
      }
      function sw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 3));
        return r ? ((t.L = +r[0]), e + r[0].length) : -1;
      }
      function lw(t, n, e) {
        var r = Ux.exec(n.slice(e, e + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
      }
      function hw(t, n, e) {
        var r = Lx.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1;
      }
      function dw(t, n, e) {
        var r = Ux.exec(n.slice(e));
        return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
      }
      function pw(t, n, e) {
        var r = Ux.exec(n.slice(e));
        return r ? ((t.s = +r[0]), e + r[0].length) : -1;
      }
      function gw(t, n) {
        return Hx(t.getDate(), n, 2);
      }
      function yw(t, n) {
        return Hx(t.getHours(), n, 2);
      }
      function vw(t, n) {
        return Hx(t.getHours() % 12 || 12, n, 2);
      }
      function _w(t, n) {
        return Hx(1 + jb.count(Mx(t), t), n, 3);
      }
      function mw(t, n) {
        return Hx(t.getMilliseconds(), n, 3);
      }
      function bw(t, n) {
        return mw(t, n) + "000";
      }
      function xw(t, n) {
        return Hx(t.getMonth() + 1, n, 2);
      }
      function ww(t, n) {
        return Hx(t.getMinutes(), n, 2);
      }
      function Mw(t, n) {
        return Hx(t.getSeconds(), n, 2);
      }
      function Aw(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n;
      }
      function Sw(t, n) {
        return Hx(Yb.count(Mx(t) - 1, t), n, 2);
      }
      function Tw(t) {
        var n = t.getDay();
        return n >= 4 || 0 === n ? Gb(t) : Gb.ceil(t);
      }
      function Ew(t, n) {
        return (
          (t = Tw(t)), Hx(Gb.count(Mx(t), t) + (4 === Mx(t).getDay()), n, 2)
        );
      }
      function Nw(t) {
        return t.getDay();
      }
      function kw(t, n) {
        return Hx(Hb.count(Mx(t) - 1, t), n, 2);
      }
      function Cw(t, n) {
        return Hx(t.getFullYear() % 100, n, 2);
      }
      function Pw(t, n) {
        return Hx((t = Tw(t)).getFullYear() % 100, n, 2);
      }
      function zw(t, n) {
        return Hx(t.getFullYear() % 1e4, n, 4);
      }
      function $w(t, n) {
        var e = t.getDay();
        return Hx(
          (t = e >= 4 || 0 === e ? Gb(t) : Gb.ceil(t)).getFullYear() % 1e4,
          n,
          4
        );
      }
      function Ow(t) {
        var n = t.getTimezoneOffset();
        return (
          (n > 0 ? "-" : ((n *= -1), "+")) +
          Hx((n / 60) | 0, "0", 2) +
          Hx(n % 60, "0", 2)
        );
      }
      function Dw(t, n) {
        return Hx(t.getUTCDate(), n, 2);
      }
      function Rw(t, n) {
        return Hx(t.getUTCHours(), n, 2);
      }
      function jw(t, n) {
        return Hx(t.getUTCHours() % 12 || 12, n, 2);
      }
      function qw(t, n) {
        return Hx(1 + Fb.count(Sx(t), t), n, 3);
      }
      function Fw(t, n) {
        return Hx(t.getUTCMilliseconds(), n, 3);
      }
      function Bw(t, n) {
        return Fw(t, n) + "000";
      }
      function Iw(t, n) {
        return Hx(t.getUTCMonth() + 1, n, 2);
      }
      function Uw(t, n) {
        return Hx(t.getUTCMinutes(), n, 2);
      }
      function Lw(t, n) {
        return Hx(t.getUTCSeconds(), n, 2);
      }
      function Yw(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n;
      }
      function Hw(t, n) {
        return Hx(ox.count(Sx(t) - 1, t), n, 2);
      }
      function Xw(t) {
        var n = t.getUTCDay();
        return n >= 4 || 0 === n ? fx(t) : fx.ceil(t);
      }
      function Vw(t, n) {
        return (
          (t = Xw(t)), Hx(fx.count(Sx(t), t) + (4 === Sx(t).getUTCDay()), n, 2)
        );
      }
      function Gw(t) {
        return t.getUTCDay();
      }
      function Jw(t, n) {
        return Hx(ux.count(Sx(t) - 1, t), n, 2);
      }
      function Zw(t, n) {
        return Hx(t.getUTCFullYear() % 100, n, 2);
      }
      function Ww(t, n) {
        return Hx((t = Xw(t)).getUTCFullYear() % 100, n, 2);
      }
      function Kw(t, n) {
        return Hx(t.getUTCFullYear() % 1e4, n, 4);
      }
      function Qw(t, n) {
        var e = t.getUTCDay();
        return Hx(
          (t = e >= 4 || 0 === e ? fx(t) : fx.ceil(t)).getUTCFullYear() % 1e4,
          n,
          4
        );
      }
      function tM() {
        return "+0000";
      }
      function nM() {
        return "%";
      }
      function eM(t) {
        return +t;
      }
      function rM(t) {
        return Math.floor(+t / 1e3);
      }
      function iM(t) {
        return (
          (Rx = Dx(t)),
          (jx = Rx.format),
          (qx = Rx.parse),
          (Fx = Rx.utcFormat),
          (Bx = Rx.utcParse),
          Rx
        );
      }
      function oM(t) {
        return new Date(t);
      }
      function uM(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function aM(t, n, e, r, i, o, u, a, c, f) {
        var s = zm(),
          l = s.invert,
          h = s.domain,
          d = f(".%L"),
          p = f(":%S"),
          g = f("%I:%M"),
          y = f("%I %p"),
          v = f("%a %d"),
          _ = f("%b %d"),
          m = f("%B"),
          b = f("%Y");
        function x(t) {
          return (
            c(t) < t
              ? d
              : a(t) < t
              ? p
              : u(t) < t
              ? g
              : o(t) < t
              ? y
              : r(t) < t
              ? i(t) < t
                ? v
                : _
              : e(t) < t
              ? m
              : b
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(l(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? h(Array.from(t, uM)) : h().map(oM);
          }),
          (s.ticks = function (n) {
            var e = h();
            return t(e[0], e[e.length - 1], null == n ? 10 : n);
          }),
          (s.tickFormat = function (t, n) {
            return null == n ? x : f(n);
          }),
          (s.nice = function (t) {
            var e = h();
            return (
              (t && "function" == typeof t.range) ||
                (t = n(e[0], e[e.length - 1], null == t ? 10 : t)),
              t ? h(Wm(e, t)) : s
            );
          }),
          (s.copy = function () {
            return Cm(s, aM(t, n, e, r, i, o, u, a, c, f));
          }),
          s
        );
      }
      function cM() {
        return vm.apply(
          aM(Cx, Px, Mx, mx, Yb, jb, $b, kb, Eb, jx).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function fM() {
        return vm.apply(
          aM(Nx, kx, Sx, xx, ox, Fb, Db, Pb, Eb, Fx).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function sM() {
        var t,
          n,
          e,
          r,
          i,
          o = 0,
          u = 1,
          a = Tm,
          c = !1;
        function f(n) {
          return null == n || isNaN((n = +n))
            ? i
            : a(
                0 === e
                  ? 0.5
                  : ((n = (r(n) - t) * e), c ? Math.max(0, Math.min(1, n)) : n)
              );
        }
        function s(t) {
          return function (n) {
            var e, r;
            return arguments.length
              ? (([e, r] = n), (a = t(e, r)), f)
              : [a(0), a(1)];
          };
        }
        return (
          (f.domain = function (i) {
            return arguments.length
              ? (([o, u] = i),
                (t = r((o = +o))),
                (n = r((u = +u))),
                (e = t === n ? 0 : 1 / (n - t)),
                f)
              : [o, u];
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((c = !!t), f) : c;
          }),
          (f.interpolator = function (t) {
            return arguments.length ? ((a = t), f) : a;
          }),
          (f.range = s(Gr)),
          (f.rangeRound = s(k_)),
          (f.unknown = function (t) {
            return arguments.length ? ((i = t), f) : i;
          }),
          function (i) {
            return (
              (r = i),
              (t = i(o)),
              (n = i(u)),
              (e = t === n ? 0 : 1 / (n - t)),
              f
            );
          }
        );
      }
      function lM(t, n) {
        return n
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function hM() {
        var t = Gm(sM()(Tm));
        return (
          (t.copy = function () {
            return lM(t, hM());
          }),
          _m.apply(t, arguments)
        );
      }
      function dM() {
        var t = ib(sM()).domain([1, 10]);
        return (
          (t.copy = function () {
            return lM(t, dM()).base(t.base());
          }),
          _m.apply(t, arguments)
        );
      }
      function pM() {
        var t = cb(sM());
        return (
          (t.copy = function () {
            return lM(t, pM()).constant(t.constant());
          }),
          _m.apply(t, arguments)
        );
      }
      function gM() {
        var t = db(sM());
        return (
          (t.copy = function () {
            return lM(t, gM()).exponent(t.exponent());
          }),
          _m.apply(t, arguments)
        );
      }
      function yM() {
        return gM.apply(null, arguments).exponent(0.5);
      }
      function vM() {
        var t = [],
          n = Tm;
        function e(e) {
          if (null != e && !isNaN((e = +e)))
            return n((g(t, e, 1) - 1) / (t.length - 1));
        }
        return (
          (e.domain = function (n) {
            if (!arguments.length) return t.slice();
            t = [];
            for (let e of n) null == e || isNaN((e = +e)) || t.push(e);
            return t.sort(o), e;
          }),
          (e.interpolator = function (t) {
            return arguments.length ? ((n = t), e) : n;
          }),
          (e.range = function () {
            return t.map((e, r) => n(r / (t.length - 1)));
          }),
          (e.quantiles = function (n) {
            return Array.from({ length: n + 1 }, (e, r) => At(t, r / n));
          }),
          (e.copy = function () {
            return vM(n).domain(t);
          }),
          _m.apply(e, arguments)
        );
      }
      function _M() {
        var t,
          n,
          e,
          r,
          i,
          o,
          u,
          a = 0,
          c = 0.5,
          f = 1,
          s = 1,
          l = Tm,
          h = !1;
        function d(t) {
          return isNaN((t = +t))
            ? u
            : ((t = 0.5 + ((t = +o(t)) - n) * (s * t < s * n ? r : i)),
              l(h ? Math.max(0, Math.min(1, t)) : t));
        }
        function p(t) {
          return function (n) {
            var e, r, i;
            return arguments.length
              ? (([e, r, i] = n), (l = U_(t, [e, r, i])), d)
              : [l(0), l(0.5), l(1)];
          };
        }
        return (
          (d.domain = function (u) {
            return arguments.length
              ? (([a, c, f] = u),
                (t = o((a = +a))),
                (n = o((c = +c))),
                (e = o((f = +f))),
                (r = t === n ? 0 : 0.5 / (n - t)),
                (i = n === e ? 0 : 0.5 / (e - n)),
                (s = n < t ? -1 : 1),
                d)
              : [a, c, f];
          }),
          (d.clamp = function (t) {
            return arguments.length ? ((h = !!t), d) : h;
          }),
          (d.interpolator = function (t) {
            return arguments.length ? ((l = t), d) : l;
          }),
          (d.range = p(Gr)),
          (d.rangeRound = p(k_)),
          (d.unknown = function (t) {
            return arguments.length ? ((u = t), d) : u;
          }),
          function (u) {
            return (
              (o = u),
              (t = u(a)),
              (n = u(c)),
              (e = u(f)),
              (r = t === n ? 0 : 0.5 / (n - t)),
              (i = n === e ? 0 : 0.5 / (e - n)),
              (s = n < t ? -1 : 1),
              d
            );
          }
        );
      }
      function mM() {
        var t = Gm(_M()(Tm));
        return (
          (t.copy = function () {
            return lM(t, mM());
          }),
          _m.apply(t, arguments)
        );
      }
      function bM() {
        var t = ib(_M()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return lM(t, bM()).base(t.base());
          }),
          _m.apply(t, arguments)
        );
      }
      function xM() {
        var t = cb(_M());
        return (
          (t.copy = function () {
            return lM(t, xM()).constant(t.constant());
          }),
          _m.apply(t, arguments)
        );
      }
      function wM() {
        var t = db(_M());
        return (
          (t.copy = function () {
            return lM(t, wM()).exponent(t.exponent());
          }),
          _m.apply(t, arguments)
        );
      }
      function MM() {
        return wM.apply(null, arguments).exponent(0.5);
      }
      iM({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      });
      var AM = function (t) {
          for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
            e[r] = "#" + t.slice(6 * r, 6 * ++r);
          return e;
        },
        SM = AM("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        TM = AM("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
        EM = AM("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
        NM = AM(
          "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"
        ),
        kM = AM("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
        CM = AM("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
        PM = AM("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
        zM = AM("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
        $M = AM(
          "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
        ),
        OM = AM("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),
        DM = (t) => Rr(t[t.length - 1]),
        RM = new Array(3)
          .concat(
            "d8b365f5f5f55ab4ac",
            "a6611adfc27d80cdc1018571",
            "a6611adfc27df5f5f580cdc1018571",
            "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
            "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
            "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
            "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
            "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
            "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
          )
          .map(AM),
        jM = DM(RM),
        qM = new Array(3)
          .concat(
            "af8dc3f7f7f77fbf7b",
            "7b3294c2a5cfa6dba0008837",
            "7b3294c2a5cff7f7f7a6dba0008837",
            "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
            "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
            "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
            "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
            "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
            "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
          )
          .map(AM),
        FM = DM(qM),
        BM = new Array(3)
          .concat(
            "e9a3c9f7f7f7a1d76a",
            "d01c8bf1b6dab8e1864dac26",
            "d01c8bf1b6daf7f7f7b8e1864dac26",
            "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
            "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
            "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
            "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
            "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
            "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
          )
          .map(AM),
        IM = DM(BM),
        UM = new Array(3)
          .concat(
            "998ec3f7f7f7f1a340",
            "5e3c99b2abd2fdb863e66101",
            "5e3c99b2abd2f7f7f7fdb863e66101",
            "542788998ec3d8daebfee0b6f1a340b35806",
            "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
            "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
            "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
            "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
            "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
          )
          .map(AM),
        LM = DM(UM),
        YM = new Array(3)
          .concat(
            "ef8a62f7f7f767a9cf",
            "ca0020f4a58292c5de0571b0",
            "ca0020f4a582f7f7f792c5de0571b0",
            "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
            "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
            "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
            "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
            "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
            "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
          )
          .map(AM),
        HM = DM(YM),
        XM = new Array(3)
          .concat(
            "ef8a62ffffff999999",
            "ca0020f4a582bababa404040",
            "ca0020f4a582ffffffbababa404040",
            "b2182bef8a62fddbc7e0e0e09999994d4d4d",
            "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
            "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
            "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
            "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
            "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
          )
          .map(AM),
        VM = DM(XM),
        GM = new Array(3)
          .concat(
            "fc8d59ffffbf91bfdb",
            "d7191cfdae61abd9e92c7bb6",
            "d7191cfdae61ffffbfabd9e92c7bb6",
            "d73027fc8d59fee090e0f3f891bfdb4575b4",
            "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
            "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
            "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
            "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
            "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
          )
          .map(AM),
        JM = DM(GM),
        ZM = new Array(3)
          .concat(
            "fc8d59ffffbf91cf60",
            "d7191cfdae61a6d96a1a9641",
            "d7191cfdae61ffffbfa6d96a1a9641",
            "d73027fc8d59fee08bd9ef8b91cf601a9850",
            "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
            "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
            "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
            "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
            "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
          )
          .map(AM),
        WM = DM(ZM),
        KM = new Array(3)
          .concat(
            "fc8d59ffffbf99d594",
            "d7191cfdae61abdda42b83ba",
            "d7191cfdae61ffffbfabdda42b83ba",
            "d53e4ffc8d59fee08be6f59899d5943288bd",
            "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
            "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
            "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
            "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
            "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
          )
          .map(AM),
        QM = DM(KM),
        tA = new Array(3)
          .concat(
            "e5f5f999d8c92ca25f",
            "edf8fbb2e2e266c2a4238b45",
            "edf8fbb2e2e266c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
          )
          .map(AM),
        nA = DM(tA),
        eA = new Array(3)
          .concat(
            "e0ecf49ebcda8856a7",
            "edf8fbb3cde38c96c688419d",
            "edf8fbb3cde38c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
          )
          .map(AM),
        rA = DM(eA),
        iA = new Array(3)
          .concat(
            "e0f3dba8ddb543a2ca",
            "f0f9e8bae4bc7bccc42b8cbe",
            "f0f9e8bae4bc7bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
          )
          .map(AM),
        oA = DM(iA),
        uA = new Array(3)
          .concat(
            "fee8c8fdbb84e34a33",
            "fef0d9fdcc8afc8d59d7301f",
            "fef0d9fdcc8afc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
          )
          .map(AM),
        aA = DM(uA),
        cA = new Array(3)
          .concat(
            "ece2f0a6bddb1c9099",
            "f6eff7bdc9e167a9cf02818a",
            "f6eff7bdc9e167a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
          )
          .map(AM),
        fA = DM(cA),
        sA = new Array(3)
          .concat(
            "ece7f2a6bddb2b8cbe",
            "f1eef6bdc9e174a9cf0570b0",
            "f1eef6bdc9e174a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
          )
          .map(AM),
        lA = DM(sA),
        hA = new Array(3)
          .concat(
            "e7e1efc994c7dd1c77",
            "f1eef6d7b5d8df65b0ce1256",
            "f1eef6d7b5d8df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
          )
          .map(AM),
        dA = DM(hA),
        pA = new Array(3)
          .concat(
            "fde0ddfa9fb5c51b8a",
            "feebe2fbb4b9f768a1ae017e",
            "feebe2fbb4b9f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
          )
          .map(AM),
        gA = DM(pA),
        yA = new Array(3)
          .concat(
            "edf8b17fcdbb2c7fb8",
            "ffffcca1dab441b6c4225ea8",
            "ffffcca1dab441b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
          )
          .map(AM),
        vA = DM(yA),
        _A = new Array(3)
          .concat(
            "f7fcb9addd8e31a354",
            "ffffccc2e69978c679238443",
            "ffffccc2e69978c67931a354006837",
            "ffffccd9f0a3addd8e78c67931a354006837",
            "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
          )
          .map(AM),
        mA = DM(_A),
        bA = new Array(3)
          .concat(
            "fff7bcfec44fd95f0e",
            "ffffd4fed98efe9929cc4c02",
            "ffffd4fed98efe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
          )
          .map(AM),
        xA = DM(bA),
        wA = new Array(3)
          .concat(
            "ffeda0feb24cf03b20",
            "ffffb2fecc5cfd8d3ce31a1c",
            "ffffb2fecc5cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
          )
          .map(AM),
        MA = DM(wA),
        AA = new Array(3)
          .concat(
            "deebf79ecae13182bd",
            "eff3ffbdd7e76baed62171b5",
            "eff3ffbdd7e76baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
          )
          .map(AM),
        SA = DM(AA),
        TA = new Array(3)
          .concat(
            "e5f5e0a1d99b31a354",
            "edf8e9bae4b374c476238b45",
            "edf8e9bae4b374c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
          )
          .map(AM),
        EA = DM(TA),
        NA = new Array(3)
          .concat(
            "f0f0f0bdbdbd636363",
            "f7f7f7cccccc969696525252",
            "f7f7f7cccccc969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
          )
          .map(AM),
        kA = DM(NA),
        CA = new Array(3)
          .concat(
            "efedf5bcbddc756bb1",
            "f2f0f7cbc9e29e9ac86a51a3",
            "f2f0f7cbc9e29e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
          )
          .map(AM),
        PA = DM(CA),
        zA = new Array(3)
          .concat(
            "fee0d2fc9272de2d26",
            "fee5d9fcae91fb6a4acb181d",
            "fee5d9fcae91fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
          )
          .map(AM),
        $A = DM(zA),
        OA = new Array(3)
          .concat(
            "fee6cefdae6be6550d",
            "feeddefdbe85fd8d3cd94701",
            "feeddefdbe85fd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
          )
          .map(AM),
        DA = DM(OA),
        RA = function (t) {
          return (
            (t = Math.max(0, Math.min(1, t))),
            "rgb(" +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    -4.54 -
                      t *
                        (35.34 -
                          t *
                            (2381.73 -
                              t * (6402.7 - t * (7024.72 - 2710.57 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    32.49 +
                      t *
                        (170.73 +
                          t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    81.24 +
                      t *
                        (442.36 -
                          t *
                            (2482.43 -
                              t * (6167.24 - t * (6614.94 - 2475.67 * t))))
                  )
                )
              ) +
              ")"
          );
        },
        jA = I_(yf(300, 0.5, 0), yf(-240, 0.5, 1)),
        qA = I_(yf(-100, 0.75, 0.35), yf(80, 1.5, 0.8)),
        FA = I_(yf(260, 0.75, 0.35), yf(80, 1.5, 0.8)),
        BA = yf(),
        IA = function (t) {
          (t < 0 || t > 1) && (t -= Math.floor(t));
          var n = Math.abs(t - 0.5);
          return (
            (BA.h = 360 * t - 100),
            (BA.s = 1.5 - 1.5 * n),
            (BA.l = 0.8 - 0.9 * n),
            BA + ""
          );
        },
        UA = hr(),
        LA = Math.PI / 3,
        YA = (2 * Math.PI) / 3,
        HA = function (t) {
          var n;
          return (
            (t = (0.5 - t) * Math.PI),
            (UA.r = 255 * (n = Math.sin(t)) * n),
            (UA.g = 255 * (n = Math.sin(t + LA)) * n),
            (UA.b = 255 * (n = Math.sin(t + YA)) * n),
            UA + ""
          );
        },
        XA = function (t) {
          return (
            (t = Math.max(0, Math.min(1, t))),
            "rgb(" +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    34.61 +
                      t *
                        (1172.33 -
                          t *
                            (10793.56 -
                              t * (33300.12 - t * (38394.49 - 14825.05 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    23.31 +
                      t *
                        (557.33 +
                          t *
                            (1225.33 -
                              t * (3574.96 - t * (1073.77 + 707.56 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    27.2 +
                      t *
                        (3211.1 -
                          t *
                            (15327.97 -
                              t * (27814 - t * (22569.18 - 6838.66 * t))))
                  )
                )
              ) +
              ")"
          );
        };
      function VA(t) {
        var n = t.length;
        return function (e) {
          return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
        };
      }
      var GA = VA(
          AM(
            "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
          )
        ),
        JA = VA(
          AM(
            "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
          )
        ),
        ZA = VA(
          AM(
            "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
          )
        ),
        WA = VA(
          AM(
            "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
          )
        ),
        KA = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        QA = function (t) {
          var n = (t += ""),
            e = n.indexOf(":");
          return (
            e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            KA.hasOwnProperty(n) ? { space: KA[n], local: t } : t
          );
        };
      function tS(t) {
        return function () {
          var n = this.ownerDocument,
            e = this.namespaceURI;
          return "http://www.w3.org/1999/xhtml" === e &&
            "http://www.w3.org/1999/xhtml" === n.documentElement.namespaceURI
            ? n.createElement(t)
            : n.createElementNS(e, t);
        };
      }
      function nS(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      var eS = function (t) {
        var n = QA(t);
        return (n.local ? nS : tS)(n);
      };
      function rS() {}
      var iS = function (t) {
        return null == t
          ? rS
          : function () {
              return this.querySelector(t);
            };
      };
      function oS(t) {
        return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
      }
      function uS() {
        return [];
      }
      var aS = function (t) {
        return null == t
          ? uS
          : function () {
              return this.querySelectorAll(t);
            };
      };
      var cS = function (t) {
        return function () {
          return this.matches(t);
        };
      };
      function fS(t) {
        return function (n) {
          return n.matches(t);
        };
      }
      var sS = Array.prototype.find;
      function lS() {
        return this.firstElementChild;
      }
      var hS = Array.prototype.filter;
      function dS() {
        return Array.from(this.children);
      }
      var pS = function (t) {
        return new Array(t.length);
      };
      function gS(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      gS.prototype = {
        constructor: gS,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var yS = function (t) {
        return function () {
          return t;
        };
      };
      function vS(t, n, e, r, i, o) {
        for (var u, a = 0, c = n.length, f = o.length; a < f; ++a)
          (u = n[a])
            ? ((u.__data__ = o[a]), (r[a] = u))
            : (e[a] = new gS(t, o[a]));
        for (; a < c; ++a) (u = n[a]) && (i[a] = u);
      }
      function _S(t, n, e, r, i, o, u) {
        var a,
          c,
          f,
          s = new Map(),
          l = n.length,
          h = o.length,
          d = new Array(l);
        for (a = 0; a < l; ++a)
          (c = n[a]) &&
            ((d[a] = f = u.call(c, c.__data__, a, n) + ""),
            s.has(f) ? (i[a] = c) : s.set(f, c));
        for (a = 0; a < h; ++a)
          (f = u.call(t, o[a], a, o) + ""),
            (c = s.get(f))
              ? ((r[a] = c), (c.__data__ = o[a]), s.delete(f))
              : (e[a] = new gS(t, o[a]));
        for (a = 0; a < l; ++a) (c = n[a]) && s.get(d[a]) === c && (i[a] = c);
      }
      function mS(t) {
        return t.__data__;
      }
      function bS(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      function xS(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      function wS(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function MS(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function AS(t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      }
      function SS(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      }
      function TS(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }
      function ES(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, e);
        };
      }
      var NS = function (t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      };
      function kS(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function CS(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      }
      function PS(t, n, e) {
        return function () {
          var r = n.apply(this, arguments);
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, e);
        };
      }
      function zS(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          NS(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
      function $S(t) {
        return function () {
          delete this[t];
        };
      }
      function OS(t, n) {
        return function () {
          this[t] = n;
        };
      }
      function DS(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : (this[t] = e);
        };
      }
      function RS(t) {
        return t.trim().split(/^|\s+/);
      }
      function jS(t) {
        return t.classList || new qS(t);
      }
      function qS(t) {
        (this._node = t), (this._names = RS(t.getAttribute("class") || ""));
      }
      function FS(t, n) {
        for (var e = jS(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
      }
      function BS(t, n) {
        for (var e = jS(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
      }
      function IS(t) {
        return function () {
          FS(this, t);
        };
      }
      function US(t) {
        return function () {
          BS(this, t);
        };
      }
      function LS(t, n) {
        return function () {
          (n.apply(this, arguments) ? FS : BS)(this, t);
        };
      }
      qS.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      function YS() {
        this.textContent = "";
      }
      function HS(t) {
        return function () {
          this.textContent = t;
        };
      }
      function XS(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? "" : n;
        };
      }
      function VS() {
        this.innerHTML = "";
      }
      function GS(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function JS(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? "" : n;
        };
      }
      function ZS() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function WS() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function KS() {
        return null;
      }
      function QS() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function tT() {
        var t = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function nT() {
        var t = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function eT(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              e = t.indexOf(".");
            return (
              e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
              { type: t, name: n }
            );
          });
      }
      function rT(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
              (e = n[r]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++i] = e)
                  : this.removeEventListener(e.type, e.listener, e.options);
            ++i ? (n.length = i) : delete this.__on;
          }
        };
      }
      function iT(t, n, e) {
        return function () {
          var r,
            i = this.__on,
            o = (function (t) {
              return function (n) {
                t.call(this, n, this.__data__);
              };
            })(n);
          if (i)
            for (var u = 0, a = i.length; u < a; ++u)
              if ((r = i[u]).type === t.type && r.name === t.name)
                return (
                  this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = o),
                    (r.options = e)
                  ),
                  void (r.value = n)
                );
          this.addEventListener(t.type, o, e),
            (r = {
              type: t.type,
              name: t.name,
              value: n,
              listener: o,
              options: e,
            }),
            i ? i.push(r) : (this.__on = [r]);
        };
      }
      function oT(t, n, e) {
        var r = NS(t),
          i = r.CustomEvent;
        "function" == typeof i
          ? (i = new i(n, e))
          : ((i = r.document.createEvent("Event")),
            e
              ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
              : i.initEvent(n, !1, !1)),
          t.dispatchEvent(i);
      }
      function uT(t, n) {
        return function () {
          return oT(this, t, n);
        };
      }
      function aT(t, n) {
        return function () {
          return oT(this, t, n.apply(this, arguments));
        };
      }
      var cT = [null];
      function fT(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function sT() {
        return new fT([[document.documentElement]], cT);
      }
      fT.prototype = sT.prototype = {
        constructor: fT,
        select: function (t) {
          "function" != typeof t && (t = iS(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o,
                u,
                a = n[i],
                c = a.length,
                f = (r[i] = new Array(c)),
                s = 0;
              s < c;
              ++s
            )
              (o = a[s]) &&
                (u = t.call(o, o.__data__, s, a)) &&
                ("__data__" in o && (u.__data__ = o.__data__), (f[s] = u));
          return new fT(r, this._parents);
        },
        selectAll: function (t) {
          t =
            "function" == typeof t
              ? (function (t) {
                  return function () {
                    return oS(t.apply(this, arguments));
                  };
                })(t)
              : aS(t);
          for (
            var n = this._groups, e = n.length, r = [], i = [], o = 0;
            o < e;
            ++o
          )
            for (var u, a = n[o], c = a.length, f = 0; f < c; ++f)
              (u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
          return new fT(r, i);
        },
        selectChild: function (t) {
          return this.select(
            null == t
              ? lS
              : (function (t) {
                  return function () {
                    return sS.call(this.children, t);
                  };
                })("function" == typeof t ? t : fS(t))
          );
        },
        selectChildren: function (t) {
          return this.selectAll(
            null == t
              ? dS
              : (function (t) {
                  return function () {
                    return hS.call(this.children, t);
                  };
                })("function" == typeof t ? t : fS(t))
          );
        },
        filter: function (t) {
          "function" != typeof t && (t = cS(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o, u = n[i], a = u.length, c = (r[i] = []), f = 0;
              f < a;
              ++f
            )
              (o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
          return new fT(r, this._parents);
        },
        data: function (t, n) {
          if (!arguments.length) return Array.from(this, mS);
          var e = n ? _S : vS,
            r = this._parents,
            i = this._groups;
          "function" != typeof t && (t = yS(t));
          for (
            var o = i.length,
              u = new Array(o),
              a = new Array(o),
              c = new Array(o),
              f = 0;
            f < o;
            ++f
          ) {
            var s = r[f],
              l = i[f],
              h = l.length,
              d = bS(t.call(s, s && s.__data__, f, r)),
              p = d.length,
              g = (a[f] = new Array(p)),
              y = (u[f] = new Array(p)),
              v = (c[f] = new Array(h));
            e(s, l, g, y, v, d, n);
            for (var _, m, b = 0, x = 0; b < p; ++b)
              if ((_ = g[b])) {
                for (b >= x && (x = b + 1); !(m = y[x]) && ++x < p; );
                _._next = m || null;
              }
          }
          return ((u = new fT(u, r))._enter = a), (u._exit = c), u;
        },
        enter: function () {
          return new fT(this._enter || this._groups.map(pS), this._parents);
        },
        exit: function () {
          return new fT(this._exit || this._groups.map(pS), this._parents);
        },
        join: function (t, n, e) {
          var r = this.enter(),
            i = this,
            o = this.exit();
          return (
            "function" == typeof t
              ? (r = t(r)) && (r = r.selection())
              : (r = r.append(t + "")),
            null != n && (i = n(i)) && (i = i.selection()),
            null == e ? o.remove() : e(o),
            r && i ? r.merge(i).order() : i
          );
        },
        merge: function (t) {
          for (
            var n = t.selection ? t.selection() : t,
              e = this._groups,
              r = n._groups,
              i = e.length,
              o = r.length,
              u = Math.min(i, o),
              a = new Array(i),
              c = 0;
            c < u;
            ++c
          )
            for (
              var f,
                s = e[c],
                l = r[c],
                h = s.length,
                d = (a[c] = new Array(h)),
                p = 0;
              p < h;
              ++p
            )
              (f = s[p] || l[p]) && (d[p] = f);
          for (; c < i; ++c) a[c] = e[c];
          return new fT(a, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
              (r = i[o]) &&
                (u &&
                  4 ^ r.compareDocumentPosition(u) &&
                  u.parentNode.insertBefore(r, u),
                (u = r));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = xS);
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          ) {
            for (
              var u, a = e[o], c = a.length, f = (i[o] = new Array(c)), s = 0;
              s < c;
              ++s
            )
              (u = a[s]) && (f[s] = u);
            f.sort(n);
          }
          return new fT(i, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
              var u = r[i];
              if (u) return u;
            }
          return null;
        },
        size: function () {
          let t = 0;
          for (const n of this) ++t;
          return t;
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
              (i = o[u]) && t.call(i, i.__data__, u, o);
          return this;
        },
        attr: function (t, n) {
          var e = QA(t);
          if (arguments.length < 2) {
            var r = this.node();
            return e.local
              ? r.getAttributeNS(e.space, e.local)
              : r.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? MS
                : wS
              : "function" == typeof n
              ? e.local
                ? ES
                : TS
              : e.local
              ? SS
              : AS)(e, n)
          );
        },
        style: function (t, n, e) {
          return arguments.length > 1
            ? this.each(
                (null == n ? kS : "function" == typeof n ? PS : CS)(
                  t,
                  n,
                  null == e ? "" : e
                )
              )
            : zS(this.node(), t);
        },
        property: function (t, n) {
          return arguments.length > 1
            ? this.each(
                (null == n ? $S : "function" == typeof n ? DS : OS)(t, n)
              )
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = RS(t + "");
          if (arguments.length < 2) {
            for (var r = jS(this.node()), i = -1, o = e.length; ++i < o; )
              if (!r.contains(e[i])) return !1;
            return !0;
          }
          return this.each(("function" == typeof n ? LS : n ? IS : US)(e, n));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? YS : ("function" == typeof t ? XS : HS)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? VS : ("function" == typeof t ? JS : GS)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(ZS);
        },
        lower: function () {
          return this.each(WS);
        },
        append: function (t) {
          var n = "function" == typeof t ? t : eS(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, n) {
          var e = "function" == typeof t ? t : eS(t),
            r = null == n ? KS : "function" == typeof n ? n : iS(n);
          return this.select(function () {
            return this.insertBefore(
              e.apply(this, arguments),
              r.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(QS);
        },
        clone: function (t) {
          return this.select(t ? nT : tT);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: function (t, n, e) {
          var r,
            i,
            o = eT(t + ""),
            u = o.length;
          if (!(arguments.length < 2)) {
            for (a = n ? iT : rT, r = 0; r < u; ++r) this.each(a(o[r], n, e));
            return this;
          }
          var a = this.node().__on;
          if (a)
            for (var c, f = 0, s = a.length; f < s; ++f)
              for (r = 0, c = a[f]; r < u; ++r)
                if ((i = o[r]).type === c.type && i.name === c.name)
                  return c.value;
        },
        dispatch: function (t, n) {
          return this.each(("function" == typeof n ? aT : uT)(t, n));
        },
        [Symbol.iterator]: function* () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r, i = t[n], o = 0, u = i.length; o < u; ++o)
              (r = i[o]) && (yield r);
        },
      };
      var lT = sT,
        hT = function (t) {
          return "string" == typeof t
            ? new fT([[document.querySelector(t)]], [document.documentElement])
            : new fT([[t]], cT);
        },
        dT = function (t) {
          return hT(eS(t).call(document.documentElement));
        },
        pT = 0;
      function gT() {
        return new yT();
      }
      function yT() {
        this._ = "@" + (++pT).toString(36);
      }
      yT.prototype = gT.prototype = {
        constructor: yT,
        get: function (t) {
          for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
          return t[n];
        },
        set: function (t, n) {
          return (t[this._] = n);
        },
        remove: function (t) {
          return this._ in t && delete t[this._];
        },
        toString: function () {
          return this._;
        },
      };
      var vT = function (t) {
          let n;
          for (; (n = t.sourceEvent); ) t = n;
          return t;
        },
        _T = function (t, n) {
          if (((t = vT(t)), void 0 === n && (n = t.currentTarget), n)) {
            var e = n.ownerSVGElement || n;
            if (e.createSVGPoint) {
              var r = e.createSVGPoint();
              return (
                (r.x = t.clientX),
                (r.y = t.clientY),
                [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
              );
            }
            if (n.getBoundingClientRect) {
              var i = n.getBoundingClientRect();
              return [
                t.clientX - i.left - n.clientLeft,
                t.clientY - i.top - n.clientTop,
              ];
            }
          }
          return [t.pageX, t.pageY];
        },
        mT = function (t, n) {
          return (
            t.target &&
              ((t = vT(t)),
              void 0 === n && (n = t.currentTarget),
              (t = t.touches || [t])),
            Array.from(t, (t) => _T(t, n))
          );
        },
        bT = function (t) {
          return "string" == typeof t
            ? new fT([document.querySelectorAll(t)], [document.documentElement])
            : new fT([oS(t)], cT);
        },
        xT = function (t) {
          return function () {
            return t;
          };
        };
      const wT = Math.abs,
        MT = Math.atan2,
        AT = Math.cos,
        ST = Math.max,
        TT = Math.min,
        ET = Math.sin,
        NT = Math.sqrt,
        kT = Math.PI,
        CT = kT / 2,
        PT = 2 * kT;
      function zT(t) {
        return t > 1 ? 0 : t < -1 ? kT : Math.acos(t);
      }
      function $T(t) {
        return t >= 1 ? CT : t <= -1 ? -CT : Math.asin(t);
      }
      function OT(t) {
        let n = 3;
        return (
          (t.digits = function (e) {
            if (!arguments.length) return n;
            if (null == e) n = null;
            else {
              const t = Math.floor(e);
              if (!(t >= 0)) throw new RangeError("invalid digits: " + e);
              n = t;
            }
            return t;
          }),
          () => new Oc(n)
        );
      }
      function DT(t) {
        return t.innerRadius;
      }
      function RT(t) {
        return t.outerRadius;
      }
      function jT(t) {
        return t.startAngle;
      }
      function qT(t) {
        return t.endAngle;
      }
      function FT(t) {
        return t && t.padAngle;
      }
      function BT(t, n, e, r, i, o, u, a) {
        var c = e - t,
          f = r - n,
          s = u - i,
          l = a - o,
          h = l * c - s * f;
        if (!(h * h < 1e-12))
          return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f];
      }
      function IT(t, n, e, r, i, o, u) {
        var a = t - e,
          c = n - r,
          f = (u ? o : -o) / NT(a * a + c * c),
          s = f * c,
          l = -f * a,
          h = t + s,
          d = n + l,
          p = e + s,
          g = r + l,
          y = (h + p) / 2,
          v = (d + g) / 2,
          _ = p - h,
          m = g - d,
          b = _ * _ + m * m,
          x = i - o,
          w = h * g - p * d,
          M = (m < 0 ? -1 : 1) * NT(ST(0, x * x * b - w * w)),
          A = (w * m - _ * M) / b,
          S = (-w * _ - m * M) / b,
          T = (w * m + _ * M) / b,
          E = (-w * _ + m * M) / b,
          N = A - y,
          k = S - v,
          C = T - y,
          P = E - v;
        return (
          N * N + k * k > C * C + P * P && ((A = T), (S = E)),
          {
            cx: A,
            cy: S,
            x01: -s,
            y01: -l,
            x11: A * (i / x - 1),
            y11: S * (i / x - 1),
          }
        );
      }
      var UT = function () {
          var t = DT,
            n = RT,
            e = xT(0),
            r = null,
            i = jT,
            o = qT,
            u = FT,
            a = null,
            c = OT(f);
          function f() {
            var f,
              s,
              l = +t.apply(this, arguments),
              h = +n.apply(this, arguments),
              d = i.apply(this, arguments) - CT,
              p = o.apply(this, arguments) - CT,
              g = wT(p - d),
              y = p > d;
            if (
              (a || (a = f = c()),
              h < l && ((s = h), (h = l), (l = s)),
              h > 1e-12)
            )
              if (g > PT - 1e-12)
                a.moveTo(h * AT(d), h * ET(d)),
                  a.arc(0, 0, h, d, p, !y),
                  l > 1e-12 &&
                    (a.moveTo(l * AT(p), l * ET(p)), a.arc(0, 0, l, p, d, y));
              else {
                var v,
                  _,
                  m = d,
                  b = p,
                  x = d,
                  w = p,
                  M = g,
                  A = g,
                  S = u.apply(this, arguments) / 2,
                  T =
                    S > 1e-12 &&
                    (r ? +r.apply(this, arguments) : NT(l * l + h * h)),
                  E = TT(wT(h - l) / 2, +e.apply(this, arguments)),
                  N = E,
                  k = E;
                if (T > 1e-12) {
                  var C = $T((T / l) * ET(S)),
                    P = $T((T / h) * ET(S));
                  (M -= 2 * C) > 1e-12
                    ? ((x += C *= y ? 1 : -1), (w -= C))
                    : ((M = 0), (x = w = (d + p) / 2)),
                    (A -= 2 * P) > 1e-12
                      ? ((m += P *= y ? 1 : -1), (b -= P))
                      : ((A = 0), (m = b = (d + p) / 2));
                }
                var z = h * AT(m),
                  $ = h * ET(m),
                  O = l * AT(w),
                  D = l * ET(w);
                if (E > 1e-12) {
                  var R,
                    j = h * AT(b),
                    q = h * ET(b),
                    F = l * AT(x),
                    B = l * ET(x);
                  if (g < kT)
                    if ((R = BT(z, $, F, B, j, q, O, D))) {
                      var I = z - R[0],
                        U = $ - R[1],
                        L = j - R[0],
                        Y = q - R[1],
                        H =
                          1 /
                          ET(
                            zT(
                              (I * L + U * Y) /
                                (NT(I * I + U * U) * NT(L * L + Y * Y))
                            ) / 2
                          ),
                        X = NT(R[0] * R[0] + R[1] * R[1]);
                      (N = TT(E, (l - X) / (H - 1))),
                        (k = TT(E, (h - X) / (H + 1)));
                    } else N = k = 0;
                }
                A > 1e-12
                  ? k > 1e-12
                    ? ((v = IT(F, B, z, $, h, k, y)),
                      (_ = IT(j, q, O, D, h, k, y)),
                      a.moveTo(v.cx + v.x01, v.cy + v.y01),
                      k < E
                        ? a.arc(
                            v.cx,
                            v.cy,
                            k,
                            MT(v.y01, v.x01),
                            MT(_.y01, _.x01),
                            !y
                          )
                        : (a.arc(
                            v.cx,
                            v.cy,
                            k,
                            MT(v.y01, v.x01),
                            MT(v.y11, v.x11),
                            !y
                          ),
                          a.arc(
                            0,
                            0,
                            h,
                            MT(v.cy + v.y11, v.cx + v.x11),
                            MT(_.cy + _.y11, _.cx + _.x11),
                            !y
                          ),
                          a.arc(
                            _.cx,
                            _.cy,
                            k,
                            MT(_.y11, _.x11),
                            MT(_.y01, _.x01),
                            !y
                          )))
                    : (a.moveTo(z, $), a.arc(0, 0, h, m, b, !y))
                  : a.moveTo(z, $),
                  l > 1e-12 && M > 1e-12
                    ? N > 1e-12
                      ? ((v = IT(O, D, j, q, l, -N, y)),
                        (_ = IT(z, $, F, B, l, -N, y)),
                        a.lineTo(v.cx + v.x01, v.cy + v.y01),
                        N < E
                          ? a.arc(
                              v.cx,
                              v.cy,
                              N,
                              MT(v.y01, v.x01),
                              MT(_.y01, _.x01),
                              !y
                            )
                          : (a.arc(
                              v.cx,
                              v.cy,
                              N,
                              MT(v.y01, v.x01),
                              MT(v.y11, v.x11),
                              !y
                            ),
                            a.arc(
                              0,
                              0,
                              l,
                              MT(v.cy + v.y11, v.cx + v.x11),
                              MT(_.cy + _.y11, _.cx + _.x11),
                              y
                            ),
                            a.arc(
                              _.cx,
                              _.cy,
                              N,
                              MT(_.y11, _.x11),
                              MT(_.y01, _.x01),
                              !y
                            )))
                      : a.arc(0, 0, l, w, x, y)
                    : a.lineTo(O, D);
              }
            else a.moveTo(0, 0);
            if ((a.closePath(), f)) return (a = null), f + "" || null;
          }
          return (
            (f.centroid = function () {
              var e =
                  (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                r =
                  (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 -
                  kT / 2;
              return [AT(r) * e, ET(r) * e];
            }),
            (f.innerRadius = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : xT(+n)), f)
                : t;
            }),
            (f.outerRadius = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : xT(+t)), f)
                : n;
            }),
            (f.cornerRadius = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : xT(+t)), f)
                : e;
            }),
            (f.padRadius = function (t) {
              return arguments.length
                ? ((r = null == t ? null : "function" == typeof t ? t : xT(+t)),
                  f)
                : r;
            }),
            (f.startAngle = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : xT(+t)), f)
                : i;
            }),
            (f.endAngle = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : xT(+t)), f)
                : o;
            }),
            (f.padAngle = function (t) {
              return arguments.length
                ? ((u = "function" == typeof t ? t : xT(+t)), f)
                : u;
            }),
            (f.context = function (t) {
              return arguments.length ? ((a = null == t ? null : t), f) : a;
            }),
            f
          );
        },
        LT = Array.prototype.slice,
        YT = function (t) {
          return "object" == typeof t && "length" in t ? t : Array.from(t);
        };
      function HT(t) {
        this._context = t;
      }
      HT.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, n);
          }
        },
      };
      var XT = function (t) {
        return new HT(t);
      };
      function VT(t) {
        return t[0];
      }
      function GT(t) {
        return t[1];
      }
      var JT = function (t, n) {
          var e = xT(!0),
            r = null,
            i = XT,
            o = null,
            u = OT(a);
          function a(a) {
            var c,
              f,
              s,
              l = (a = YT(a)).length,
              h = !1;
            for (null == r && (o = i((s = u()))), c = 0; c <= l; ++c)
              !(c < l && e((f = a[c]), c, a)) === h &&
                ((h = !h) ? o.lineStart() : o.lineEnd()),
                h && o.point(+t(f, c, a), +n(f, c, a));
            if (s) return (o = null), s + "" || null;
          }
          return (
            (t = "function" == typeof t ? t : void 0 === t ? VT : xT(t)),
            (n = "function" == typeof n ? n : void 0 === n ? GT : xT(n)),
            (a.x = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : xT(+n)), a)
                : t;
            }),
            (a.y = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : xT(+t)), a)
                : n;
            }),
            (a.defined = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : xT(!!t)), a)
                : e;
            }),
            (a.curve = function (t) {
              return arguments.length
                ? ((i = t), null != r && (o = i(r)), a)
                : i;
            }),
            (a.context = function (t) {
              return arguments.length
                ? (null == t ? (r = o = null) : (o = i((r = t))), a)
                : r;
            }),
            a
          );
        },
        ZT = function (t, n, e) {
          var r = null,
            i = xT(!0),
            o = null,
            u = XT,
            a = null,
            c = OT(f);
          function f(f) {
            var s,
              l,
              h,
              d,
              p,
              g = (f = YT(f)).length,
              y = !1,
              v = new Array(g),
              _ = new Array(g);
            for (null == o && (a = u((p = c()))), s = 0; s <= g; ++s) {
              if (!(s < g && i((d = f[s]), s, f)) === y)
                if ((y = !y)) (l = s), a.areaStart(), a.lineStart();
                else {
                  for (a.lineEnd(), a.lineStart(), h = s - 1; h >= l; --h)
                    a.point(v[h], _[h]);
                  a.lineEnd(), a.areaEnd();
                }
              y &&
                ((v[s] = +t(d, s, f)),
                (_[s] = +n(d, s, f)),
                a.point(r ? +r(d, s, f) : v[s], e ? +e(d, s, f) : _[s]));
            }
            if (p) return (a = null), p + "" || null;
          }
          function s() {
            return JT().defined(i).curve(u).context(o);
          }
          return (
            (t = "function" == typeof t ? t : void 0 === t ? VT : xT(+t)),
            (n = "function" == typeof n ? n : xT(void 0 === n ? 0 : +n)),
            (e = "function" == typeof e ? e : void 0 === e ? GT : xT(+e)),
            (f.x = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : xT(+n)), (r = null), f)
                : t;
            }),
            (f.x0 = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : xT(+n)), f)
                : t;
            }),
            (f.x1 = function (t) {
              return arguments.length
                ? ((r = null == t ? null : "function" == typeof t ? t : xT(+t)),
                  f)
                : r;
            }),
            (f.y = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : xT(+t)), (e = null), f)
                : n;
            }),
            (f.y0 = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : xT(+t)), f)
                : n;
            }),
            (f.y1 = function (t) {
              return arguments.length
                ? ((e = null == t ? null : "function" == typeof t ? t : xT(+t)),
                  f)
                : e;
            }),
            (f.lineX0 = f.lineY0 =
              function () {
                return s().x(t).y(n);
              }),
            (f.lineY1 = function () {
              return s().x(t).y(e);
            }),
            (f.lineX1 = function () {
              return s().x(r).y(n);
            }),
            (f.defined = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : xT(!!t)), f)
                : i;
            }),
            (f.curve = function (t) {
              return arguments.length
                ? ((u = t), null != o && (a = u(o)), f)
                : u;
            }),
            (f.context = function (t) {
              return arguments.length
                ? (null == t ? (o = a = null) : (a = u((o = t))), f)
                : o;
            }),
            f
          );
        },
        WT = function (t, n) {
          return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
        },
        KT = function (t) {
          return t;
        },
        QT = function () {
          var t = KT,
            n = WT,
            e = null,
            r = xT(0),
            i = xT(PT),
            o = xT(0);
          function u(u) {
            var a,
              c,
              f,
              s,
              l,
              h = (u = YT(u)).length,
              d = 0,
              p = new Array(h),
              g = new Array(h),
              y = +r.apply(this, arguments),
              v = Math.min(PT, Math.max(-PT, i.apply(this, arguments) - y)),
              _ = Math.min(Math.abs(v) / h, o.apply(this, arguments)),
              m = _ * (v < 0 ? -1 : 1);
            for (a = 0; a < h; ++a)
              (l = g[(p[a] = a)] = +t(u[a], a, u)) > 0 && (d += l);
            for (
              null != n
                ? p.sort(function (t, e) {
                    return n(g[t], g[e]);
                  })
                : null != e &&
                  p.sort(function (t, n) {
                    return e(u[t], u[n]);
                  }),
                a = 0,
                f = d ? (v - h * m) / d : 0;
              a < h;
              ++a, y = s
            )
              (c = p[a]),
                (s = y + ((l = g[c]) > 0 ? l * f : 0) + m),
                (g[c] = {
                  data: u[c],
                  index: a,
                  value: l,
                  startAngle: y,
                  endAngle: s,
                  padAngle: _,
                });
            return g;
          }
          return (
            (u.value = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : xT(+n)), u)
                : t;
            }),
            (u.sortValues = function (t) {
              return arguments.length ? ((n = t), (e = null), u) : n;
            }),
            (u.sort = function (t) {
              return arguments.length ? ((e = t), (n = null), u) : e;
            }),
            (u.startAngle = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : xT(+t)), u)
                : r;
            }),
            (u.endAngle = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : xT(+t)), u)
                : i;
            }),
            (u.padAngle = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : xT(+t)), u)
                : o;
            }),
            u
          );
        },
        tE = eE(XT);
      function nE(t) {
        this._curve = t;
      }
      function eE(t) {
        function n(n) {
          return new nE(t(n));
        }
        return (n._curve = t), n;
      }
      function rE(t) {
        var n = t.curve;
        return (
          (t.angle = t.x),
          delete t.x,
          (t.radius = t.y),
          delete t.y,
          (t.curve = function (t) {
            return arguments.length ? n(eE(t)) : n()._curve;
          }),
          t
        );
      }
      nE.prototype = {
        areaStart: function () {
          this._curve.areaStart();
        },
        areaEnd: function () {
          this._curve.areaEnd();
        },
        lineStart: function () {
          this._curve.lineStart();
        },
        lineEnd: function () {
          this._curve.lineEnd();
        },
        point: function (t, n) {
          this._curve.point(n * Math.sin(t), n * -Math.cos(t));
        },
      };
      var iE = function () {
          return rE(JT().curve(tE));
        },
        oE = function () {
          var t = ZT().curve(tE),
            n = t.curve,
            e = t.lineX0,
            r = t.lineX1,
            i = t.lineY0,
            o = t.lineY1;
          return (
            (t.angle = t.x),
            delete t.x,
            (t.startAngle = t.x0),
            delete t.x0,
            (t.endAngle = t.x1),
            delete t.x1,
            (t.radius = t.y),
            delete t.y,
            (t.innerRadius = t.y0),
            delete t.y0,
            (t.outerRadius = t.y1),
            delete t.y1,
            (t.lineStartAngle = function () {
              return rE(e());
            }),
            delete t.lineX0,
            (t.lineEndAngle = function () {
              return rE(r());
            }),
            delete t.lineX1,
            (t.lineInnerRadius = function () {
              return rE(i());
            }),
            delete t.lineY0,
            (t.lineOuterRadius = function () {
              return rE(o());
            }),
            delete t.lineY1,
            (t.curve = function (t) {
              return arguments.length ? n(eE(t)) : n()._curve;
            }),
            t
          );
        },
        uE = function (t, n) {
          return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
        };
      class aE {
        constructor(t, n) {
          (this._context = t), (this._x = n);
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    n,
                    t,
                    n
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + n) / 2),
                    t,
                    this._y0,
                    t,
                    n
                  );
          }
          (this._x0 = t), (this._y0 = n);
        }
      }
      class cE {
        constructor(t) {
          this._context = t;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {}
        point(t, n) {
          if (((t = +t), (n = +n), 0 === this._point)) this._point = 1;
          else {
            const e = uE(this._x0, this._y0),
              r = uE(this._x0, (this._y0 = (this._y0 + n) / 2)),
              i = uE(t, this._y0),
              o = uE(t, n);
            this._context.moveTo(...e),
              this._context.bezierCurveTo(...r, ...i, ...o);
          }
          (this._x0 = t), (this._y0 = n);
        }
      }
      function fE(t) {
        return new aE(t, !0);
      }
      function sE(t) {
        return new aE(t, !1);
      }
      function lE(t) {
        return new cE(t);
      }
      function hE(t) {
        return t.source;
      }
      function dE(t) {
        return t.target;
      }
      function pE(t) {
        let n = hE,
          e = dE,
          r = VT,
          i = GT,
          o = null,
          u = null,
          a = OT(c);
        function c() {
          let c;
          const f = LT.call(arguments),
            s = n.apply(this, f),
            l = e.apply(this, f);
          if (
            (null == o && (u = t((c = a()))),
            u.lineStart(),
            (f[0] = s),
            u.point(+r.apply(this, f), +i.apply(this, f)),
            (f[0] = l),
            u.point(+r.apply(this, f), +i.apply(this, f)),
            u.lineEnd(),
            c)
          )
            return (u = null), c + "" || null;
        }
        return (
          (c.source = function (t) {
            return arguments.length ? ((n = t), c) : n;
          }),
          (c.target = function (t) {
            return arguments.length ? ((e = t), c) : e;
          }),
          (c.x = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : xT(+t)), c)
              : r;
          }),
          (c.y = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : xT(+t)), c)
              : i;
          }),
          (c.context = function (n) {
            return arguments.length
              ? (null == n ? (o = u = null) : (u = t((o = n))), c)
              : o;
          }),
          c
        );
      }
      function gE() {
        return pE(fE);
      }
      function yE() {
        return pE(sE);
      }
      function vE() {
        const t = pE(lE);
        return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
      }
      const _E = NT(3);
      var mE = {
          draw(t, n) {
            const e = 0.59436 * NT(n + TT(n / 28, 0.75)),
              r = e / 2,
              i = r * _E;
            t.moveTo(0, e),
              t.lineTo(0, -e),
              t.moveTo(-i, -r),
              t.lineTo(i, r),
              t.moveTo(-i, r),
              t.lineTo(i, -r);
          },
        },
        bE = {
          draw(t, n) {
            const e = NT(n / kT);
            t.moveTo(e, 0), t.arc(0, 0, e, 0, PT);
          },
        },
        xE = {
          draw(t, n) {
            const e = NT(n / 5) / 2;
            t.moveTo(-3 * e, -e),
              t.lineTo(-e, -e),
              t.lineTo(-e, -3 * e),
              t.lineTo(e, -3 * e),
              t.lineTo(e, -e),
              t.lineTo(3 * e, -e),
              t.lineTo(3 * e, e),
              t.lineTo(e, e),
              t.lineTo(e, 3 * e),
              t.lineTo(-e, 3 * e),
              t.lineTo(-e, e),
              t.lineTo(-3 * e, e),
              t.closePath();
          },
        };
      const wE = NT(1 / 3),
        ME = 2 * wE;
      var AE = {
          draw(t, n) {
            const e = NT(n / ME),
              r = e * wE;
            t.moveTo(0, -e),
              t.lineTo(r, 0),
              t.lineTo(0, e),
              t.lineTo(-r, 0),
              t.closePath();
          },
        },
        SE = {
          draw(t, n) {
            const e = 0.62625 * NT(n);
            t.moveTo(0, -e),
              t.lineTo(e, 0),
              t.lineTo(0, e),
              t.lineTo(-e, 0),
              t.closePath();
          },
        },
        TE = {
          draw(t, n) {
            const e = 0.87559 * NT(n - TT(n / 7, 2));
            t.moveTo(-e, 0), t.lineTo(e, 0), t.moveTo(0, e), t.lineTo(0, -e);
          },
        },
        EE = {
          draw(t, n) {
            const e = NT(n),
              r = -e / 2;
            t.rect(r, r, e, e);
          },
        },
        NE = {
          draw(t, n) {
            const e = 0.4431 * NT(n);
            t.moveTo(e, e),
              t.lineTo(e, -e),
              t.lineTo(-e, -e),
              t.lineTo(-e, e),
              t.closePath();
          },
        };
      const kE = ET(kT / 10) / ET((7 * kT) / 10),
        CE = ET(PT / 10) * kE,
        PE = -AT(PT / 10) * kE;
      var zE = {
        draw(t, n) {
          const e = NT(0.8908130915292852 * n),
            r = CE * e,
            i = PE * e;
          t.moveTo(0, -e), t.lineTo(r, i);
          for (let n = 1; n < 5; ++n) {
            const o = (PT * n) / 5,
              u = AT(o),
              a = ET(o);
            t.lineTo(a * e, -u * e), t.lineTo(u * r - a * i, a * r + u * i);
          }
          t.closePath();
        },
      };
      const $E = NT(3);
      var OE = {
        draw(t, n) {
          const e = -NT(n / (3 * $E));
          t.moveTo(0, 2 * e),
            t.lineTo(-$E * e, -e),
            t.lineTo($E * e, -e),
            t.closePath();
        },
      };
      const DE = NT(3);
      var RE = {
        draw(t, n) {
          const e = 0.6824 * NT(n),
            r = e / 2,
            i = (e * DE) / 2;
          t.moveTo(0, -e), t.lineTo(i, r), t.lineTo(-i, r), t.closePath();
        },
      };
      const jE = NT(3) / 2,
        qE = 1 / NT(12),
        FE = 3 * (qE / 2 + 1);
      var BE = {
          draw(t, n) {
            const e = NT(n / FE),
              r = e / 2,
              i = e * qE,
              o = r,
              u = e * qE + e,
              a = -o,
              c = u;
            t.moveTo(r, i),
              t.lineTo(o, u),
              t.lineTo(a, c),
              t.lineTo(-0.5 * r - jE * i, jE * r + -0.5 * i),
              t.lineTo(-0.5 * o - jE * u, jE * o + -0.5 * u),
              t.lineTo(-0.5 * a - jE * c, jE * a + -0.5 * c),
              t.lineTo(-0.5 * r + jE * i, -0.5 * i - jE * r),
              t.lineTo(-0.5 * o + jE * u, -0.5 * u - jE * o),
              t.lineTo(-0.5 * a + jE * c, -0.5 * c - jE * a),
              t.closePath();
          },
        },
        IE = {
          draw(t, n) {
            const e = 0.6189 * NT(n - TT(n / 6, 1.7));
            t.moveTo(-e, -e), t.lineTo(e, e), t.moveTo(-e, e), t.lineTo(e, -e);
          },
        };
      const UE = [bE, xE, AE, EE, zE, OE, BE],
        LE = [bE, TE, IE, RE, mE, NE, SE];
      function YE(t, n) {
        let e = null,
          r = OT(i);
        function i() {
          let i;
          if (
            (e || (e = i = r()),
            t.apply(this, arguments).draw(e, +n.apply(this, arguments)),
            i)
          )
            return (e = null), i + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : xT(t || bE)),
          (n = "function" == typeof n ? n : xT(void 0 === n ? 64 : +n)),
          (i.type = function (n) {
            return arguments.length
              ? ((t = "function" == typeof n ? n : xT(n)), i)
              : t;
          }),
          (i.size = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : xT(+t)), i)
              : n;
          }),
          (i.context = function (t) {
            return arguments.length ? ((e = null == t ? null : t), i) : e;
          }),
          i
        );
      }
      var HE = function () {};
      function XE(t, n, e) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + n) / 6,
          (t._y0 + 4 * t._y1 + e) / 6
        );
      }
      function VE(t) {
        this._context = t;
      }
      VE.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              XE(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              XE(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      };
      var GE = function (t) {
        return new VE(t);
      };
      function JE(t) {
        this._context = t;
      }
      JE.prototype = {
        areaStart: HE,
        areaEnd: HE,
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
              break;
            case 2:
              this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3
                ),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4);
          }
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), (this._x2 = t), (this._y2 = n);
              break;
            case 1:
              (this._point = 2), (this._x3 = t), (this._y3 = n);
              break;
            case 2:
              (this._point = 3),
                (this._x4 = t),
                (this._y4 = n),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + t) / 6,
                  (this._y0 + 4 * this._y1 + n) / 6
                );
              break;
            default:
              XE(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      };
      var ZE = function (t) {
        return new JE(t);
      };
      function WE(t) {
        this._context = t;
      }
      WE.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var e = (this._x0 + 4 * this._x1 + t) / 6,
                r = (this._y0 + 4 * this._y1 + n) / 6;
              this._line
                ? this._context.lineTo(e, r)
                : this._context.moveTo(e, r);
              break;
            case 3:
              this._point = 4;
            default:
              XE(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      };
      var KE = function (t) {
        return new WE(t);
      };
      function QE(t, n) {
        (this._basis = new VE(t)), (this._beta = n);
      }
      QE.prototype = {
        lineStart: function () {
          (this._x = []), (this._y = []), this._basis.lineStart();
        },
        lineEnd: function () {
          var t = this._x,
            n = this._y,
            e = t.length - 1;
          if (e > 0)
            for (
              var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1;
              ++c <= e;

            )
              (r = c / e),
                this._basis.point(
                  this._beta * t[c] + (1 - this._beta) * (i + r * u),
                  this._beta * n[c] + (1 - this._beta) * (o + r * a)
                );
          (this._x = this._y = null), this._basis.lineEnd();
        },
        point: function (t, n) {
          this._x.push(+t), this._y.push(+n);
        },
      };
      var tN = (function t(n) {
        function e(t) {
          return 1 === n ? new VE(t) : new QE(t, n);
        }
        return (
          (e.beta = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.85);
      function nN(t, n, e) {
        t._context.bezierCurveTo(
          t._x1 + t._k * (t._x2 - t._x0),
          t._y1 + t._k * (t._y2 - t._y0),
          t._x2 + t._k * (t._x1 - n),
          t._y2 + t._k * (t._y1 - e),
          t._x2,
          t._y2
        );
      }
      function eN(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      eN.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              nN(this, this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              (this._point = 2), (this._x1 = t), (this._y1 = n);
              break;
            case 2:
              this._point = 3;
            default:
              nN(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var rN = (function t(n) {
        function e(t) {
          return new eN(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function iN(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      iN.prototype = {
        areaStart: HE,
        areaEnd: HE,
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2),
                this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              nN(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var oN = (function t(n) {
        function e(t) {
          return new iN(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function uN(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      uN.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              nN(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var aN = (function t(n) {
        function e(t) {
          return new uN(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function cN(t, n, e) {
        var r = t._x1,
          i = t._y1,
          o = t._x2,
          u = t._y2;
        if (t._l01_a > 1e-12) {
          var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            c = 3 * t._l01_a * (t._l01_a + t._l12_a);
          (r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
            (i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c);
        }
        if (t._l23_a > 1e-12) {
          var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            s = 3 * t._l23_a * (t._l23_a + t._l12_a);
          (o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s),
            (u = (u * f + t._y1 * t._l23_2a - e * t._l12_2a) / s);
        }
        t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2);
      }
      function fN(t, n) {
        (this._context = t), (this._alpha = n);
      }
      fN.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              cN(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var sN = (function t(n) {
        function e(t) {
          return n ? new fN(t, n) : new eN(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function lN(t, n) {
        (this._context = t), (this._alpha = n);
      }
      lN.prototype = {
        areaStart: HE,
        areaEnd: HE,
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2),
                this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              cN(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var hN = (function t(n) {
        function e(t) {
          return n ? new lN(t, n) : new iN(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function dN(t, n) {
        (this._context = t), (this._alpha = n);
      }
      dN.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              cN(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var pN = (function t(n) {
        function e(t) {
          return n ? new dN(t, n) : new uN(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function gN(t) {
        this._context = t;
      }
      gN.prototype = {
        areaStart: HE,
        areaEnd: HE,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, n) {
          (t = +t),
            (n = +n),
            this._point
              ? this._context.lineTo(t, n)
              : ((this._point = 1), this._context.moveTo(t, n));
        },
      };
      var yN = function (t) {
        return new gN(t);
      };
      function vN(t) {
        return t < 0 ? -1 : 1;
      }
      function _N(t, n, e) {
        var r = t._x1 - t._x0,
          i = n - t._x1,
          o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
          u = (e - t._y1) / (i || (r < 0 && -0)),
          a = (o * i + u * r) / (r + i);
        return (
          (vN(o) + vN(u)) *
            Math.min(Math.abs(o), Math.abs(u), 0.5 * Math.abs(a)) || 0
        );
      }
      function mN(t, n) {
        var e = t._x1 - t._x0;
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
      }
      function bN(t, n, e) {
        var r = t._x0,
          i = t._y0,
          o = t._x1,
          u = t._y1,
          a = (o - r) / 3;
        t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u);
      }
      function xN(t) {
        this._context = t;
      }
      function wN(t) {
        this._context = new MN(t);
      }
      function MN(t) {
        this._context = t;
      }
      function AN(t) {
        return new xN(t);
      }
      function SN(t) {
        return new wN(t);
      }
      function TN(t) {
        this._context = t;
      }
      function EN(t) {
        var n,
          e,
          r = t.length - 1,
          i = new Array(r),
          o = new Array(r),
          u = new Array(r);
        for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
          (i[n] = 1), (o[n] = 4), (u[n] = 4 * t[n] + 2 * t[n + 1]);
        for (
          i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1;
          n < r;
          ++n
        )
          (e = i[n] / o[n - 1]), (o[n] -= e), (u[n] -= e * u[n - 1]);
        for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n)
          i[n] = (u[n] - i[n + 1]) / o[n];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
          o[n] = 2 * t[n + 1] - i[n + 1];
        return [i, o];
      }
      (xN.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
            case 3:
              bN(this, this._t0, mN(this, this._t0));
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          var e = NaN;
          if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
            switch (this._point) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3), bN(this, mN(this, (e = _N(this, t, n))), e);
                break;
              default:
                bN(this, this._t0, (e = _N(this, t, n)));
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = n),
              (this._t0 = e);
          }
        },
      }),
        ((wN.prototype = Object.create(xN.prototype)).point = function (t, n) {
          xN.prototype.point.call(this, n, t);
        }),
        (MN.prototype = {
          moveTo: function (t, n) {
            this._context.moveTo(n, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, n) {
            this._context.lineTo(n, t);
          },
          bezierCurveTo: function (t, n, e, r, i, o) {
            this._context.bezierCurveTo(n, t, r, e, o, i);
          },
        }),
        (TN.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              n = this._y,
              e = t.length;
            if (e)
              if (
                (this._line
                  ? this._context.lineTo(t[0], n[0])
                  : this._context.moveTo(t[0], n[0]),
                2 === e)
              )
                this._context.lineTo(t[1], n[1]);
              else
                for (var r = EN(t), i = EN(n), o = 0, u = 1; u < e; ++o, ++u)
                  this._context.bezierCurveTo(
                    r[0][o],
                    i[0][o],
                    r[1][o],
                    i[1][o],
                    t[u],
                    n[u]
                  );
            (this._line || (0 !== this._line && 1 === e)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, n) {
            this._x.push(+t), this._y.push(+n);
          },
        });
      var NN = function (t) {
        return new TN(t);
      };
      function kN(t, n) {
        (this._context = t), (this._t = n);
      }
      kN.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = this._y = NaN), (this._point = 0);
        },
        lineEnd: function () {
          0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line));
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                this._context.lineTo(this._x, n), this._context.lineTo(t, n);
              else {
                var e = this._x * (1 - this._t) + t * this._t;
                this._context.lineTo(e, this._y), this._context.lineTo(e, n);
              }
          }
          (this._x = t), (this._y = n);
        },
      };
      var CN = function (t) {
        return new kN(t, 0.5);
      };
      function PN(t) {
        return new kN(t, 0);
      }
      function zN(t) {
        return new kN(t, 1);
      }
      var $N = function (t, n) {
          if ((i = t.length) > 1)
            for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o)
              for (r = u, u = t[n[o]], e = 0; e < a; ++e)
                u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
        },
        ON = function (t) {
          for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
          return e;
        };
      function DN(t, n) {
        return t[n];
      }
      function RN(t) {
        const n = [];
        return (n.key = t), n;
      }
      var jN = function () {
          var t = xT([]),
            n = ON,
            e = $N,
            r = DN;
          function i(i) {
            var o,
              u,
              a = Array.from(t.apply(this, arguments), RN),
              c = a.length,
              f = -1;
            for (const t of i)
              for (o = 0, ++f; o < c; ++o)
                (a[o][f] = [0, +r(t, a[o].key, f, i)]).data = t;
            for (o = 0, u = YT(n(a)); o < c; ++o) a[u[o]].index = o;
            return e(a, u), a;
          }
          return (
            (i.keys = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : xT(Array.from(n))), i)
                : t;
            }),
            (i.value = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : xT(+t)), i)
                : r;
            }),
            (i.order = function (t) {
              return arguments.length
                ? ((n =
                    null == t
                      ? ON
                      : "function" == typeof t
                      ? t
                      : xT(Array.from(t))),
                  i)
                : n;
            }),
            (i.offset = function (t) {
              return arguments.length ? ((e = null == t ? $N : t), i) : e;
            }),
            i
          );
        },
        qN = function (t, n) {
          if ((r = t.length) > 0) {
            for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
              for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
              if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i;
            }
            $N(t, n);
          }
        },
        FN = function (t, n) {
          if ((a = t.length) > 0)
            for (var e, r, i, o, u, a, c = 0, f = t[n[0]].length; c < f; ++c)
              for (o = u = 0, e = 0; e < a; ++e)
                (i = (r = t[n[e]][c])[1] - r[0]) > 0
                  ? ((r[0] = o), (r[1] = o += i))
                  : i < 0
                  ? ((r[1] = u), (r[0] = u += i))
                  : ((r[0] = 0), (r[1] = i));
        },
        BN = function (t, n) {
          if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
              for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
              i[r][1] += i[r][0] = -a / 2;
            }
            $N(t, n);
          }
        },
        IN = function (t, n) {
          if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, o = 0, u = 1; u < r; ++u) {
              for (var a = 0, c = 0, f = 0; a < i; ++a) {
                for (
                  var s = t[n[a]],
                    l = s[u][1] || 0,
                    h = (l - (s[u - 1][1] || 0)) / 2,
                    d = 0;
                  d < a;
                  ++d
                ) {
                  var p = t[n[d]];
                  h += (p[u][1] || 0) - (p[u - 1][1] || 0);
                }
                (c += l), (f += h * l);
              }
              (e[u - 1][1] += e[u - 1][0] = o), c && (o -= f / c);
            }
            (e[u - 1][1] += e[u - 1][0] = o), $N(t, n);
          }
        },
        UN = function (t) {
          var n = t.map(LN);
          return ON(t).sort(function (t, e) {
            return n[t] - n[e];
          });
        };
      function LN(t) {
        for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i; )
          (n = +t[e][1]) > o && ((o = n), (r = e));
        return r;
      }
      var YN = function (t) {
        var n = t.map(HN);
        return ON(t).sort(function (t, e) {
          return n[t] - n[e];
        });
      };
      function HN(t) {
        for (var n, e = 0, r = -1, i = t.length; ++r < i; )
          (n = +t[r][1]) && (e += n);
        return e;
      }
      var XN = function (t) {
          return YN(t).reverse();
        },
        VN = function (t) {
          var n,
            e,
            r = t.length,
            i = t.map(HN),
            o = UN(t),
            u = 0,
            a = 0,
            c = [],
            f = [];
          for (n = 0; n < r; ++n)
            (e = o[n]),
              u < a ? ((u += i[e]), c.push(e)) : ((a += i[e]), f.push(e));
          return f.reverse().concat(c);
        },
        GN = function (t) {
          return ON(t).reverse();
        };
      var JN = Date.prototype.toISOString
        ? function (t) {
            return t.toISOString();
          }
        : Fx("%Y-%m-%dT%H:%M:%S.%LZ");
      var ZN = +new Date("2000-01-01T00:00:00.000Z")
          ? function (t) {
              var n = new Date(t);
              return isNaN(n) ? null : n;
            }
          : Bx("%Y-%m-%dT%H:%M:%S.%LZ"),
        WN = function (t, n, e) {
          var r = new Ou(),
            i = n;
          return null == n
            ? (r.restart(t, n, e), r)
            : ((r._restart = r.restart),
              (r.restart = function (t, n, e) {
                (n = +n),
                  (e = null == e ? zu() : +e),
                  r._restart(
                    function o(u) {
                      (u += i), r._restart(o, (i += n), e), t(u);
                    },
                    n,
                    e
                  );
              }),
              r.restart(t, n, e),
              r);
        },
        KN = function (t) {
          return "string" == typeof t
            ? new mu([[document.querySelector(t)]], [document.documentElement])
            : new mu([[t]], _u);
        },
        QN = function (t, n) {
          if (
            ((t = (function (t) {
              let n;
              for (; (n = t.sourceEvent); ) t = n;
              return t;
            })(t)),
            void 0 === n && (n = t.currentTarget),
            n)
          ) {
            var e = n.ownerSVGElement || n;
            if (e.createSVGPoint) {
              var r = e.createSVGPoint();
              return (
                (r.x = t.clientX),
                (r.y = t.clientY),
                [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
              );
            }
            if (n.getBoundingClientRect) {
              var i = n.getBoundingClientRect();
              return [
                t.clientX - i.left - n.clientLeft,
                t.clientY - i.top - n.clientTop,
              ];
            }
          }
          return [t.pageX, t.pageY];
        },
        tk = (t) => () => t;
      function nk(t, { sourceEvent: n, target: e, transform: r, dispatch: i }) {
        Object.defineProperties(this, {
          type: { value: t, enumerable: !0, configurable: !0 },
          sourceEvent: { value: n, enumerable: !0, configurable: !0 },
          target: { value: e, enumerable: !0, configurable: !0 },
          transform: { value: r, enumerable: !0, configurable: !0 },
          _: { value: i },
        });
      }
      function ek(t, n, e) {
        (this.k = t), (this.x = n), (this.y = e);
      }
      ek.prototype = {
        constructor: ek,
        scale: function (t) {
          return 1 === t ? this : new ek(this.k * t, this.x, this.y);
        },
        translate: function (t, n) {
          return (0 === t) & (0 === n)
            ? this
            : new ek(this.k, this.x + this.k * t, this.y + this.k * n);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var rk = new ek(1, 0, 0);
      function ik(t) {
        for (; !t.__zoom; ) if (!(t = t.parentNode)) return rk;
        return t.__zoom;
      }
      function ok(t) {
        t.stopImmediatePropagation();
      }
      ik.prototype = ek.prototype;
      var uk = function (t) {
        t.preventDefault(), t.stopImmediatePropagation();
      };
      function ak(t) {
        return !((t.ctrlKey && "wheel" !== t.type) || t.button);
      }
      function ck() {
        var t = this;
        return t instanceof SVGElement
          ? (t = t.ownerSVGElement || t).hasAttribute("viewBox")
            ? [
                [(t = t.viewBox.baseVal).x, t.y],
                [t.x + t.width, t.y + t.height],
              ]
            : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value],
              ]
          : [
              [0, 0],
              [t.clientWidth, t.clientHeight],
            ];
      }
      function fk() {
        return this.__zoom || rk;
      }
      function sk(t) {
        return (
          -t.deltaY *
          (1 === t.deltaMode ? 0.05 : t.deltaMode ? 1 : 0.002) *
          (t.ctrlKey ? 10 : 1)
        );
      }
      function lk() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function hk(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0],
          i = t.invertX(n[1][0]) - e[1][0],
          o = t.invertY(n[0][1]) - e[0][1],
          u = t.invertY(n[1][1]) - e[1][1];
        return t.translate(
          i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
          u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u)
        );
      }
      var dk = function () {
        var t,
          n,
          e,
          r = ak,
          i = ck,
          o = hk,
          u = sk,
          a = lk,
          c = [0, 1 / 0],
          f = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          s = 250,
          l = P_,
          h = Tn("start", "zoom", "end"),
          d = 0,
          p = 10;
        function g(t) {
          t.property("__zoom", fk)
            .on("wheel.zoom", w, { passive: !1 })
            .on("mousedown.zoom", M)
            .on("dblclick.zoom", A)
            .filter(a)
            .on("touchstart.zoom", S)
            .on("touchmove.zoom", T)
            .on("touchend.zoom touchcancel.zoom", E)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function y(t, n) {
          return (n = Math.max(c[0], Math.min(c[1], n))) === t.k
            ? t
            : new ek(n, t.x, t.y);
        }
        function v(t, n, e) {
          var r = n[0] - e[0] * t.k,
            i = n[1] - e[1] * t.k;
          return r === t.x && i === t.y ? t : new ek(t.k, r, i);
        }
        function _(t) {
          return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
        }
        function m(t, n, e, r) {
          t.on("start.zoom", function () {
            b(this, arguments).event(r).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              b(this, arguments).event(r).end();
            })
            .tween("zoom", function () {
              var t = this,
                o = arguments,
                u = b(t, o).event(r),
                a = i.apply(t, o),
                c =
                  null == e ? _(a) : "function" == typeof e ? e.apply(t, o) : e,
                f = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                s = t.__zoom,
                h = "function" == typeof n ? n.apply(t, o) : n,
                d = l(s.invert(c).concat(f / s.k), h.invert(c).concat(f / h.k));
              return function (t) {
                if (1 === t) t = h;
                else {
                  var n = d(t),
                    e = f / n[2];
                  t = new ek(e, c[0] - n[0] * e, c[1] - n[1] * e);
                }
                u.zoom(null, t);
              };
            });
        }
        function b(t, n, e) {
          return (!e && t.__zooming) || new x(t, n);
        }
        function x(t, n) {
          (this.that = t),
            (this.args = n),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = i.apply(t, n)),
            (this.taps = 0);
        }
        function w(t, ...n) {
          if (r.apply(this, arguments)) {
            var e = b(this, n).event(t),
              i = this.__zoom,
              a = Math.max(
                c[0],
                Math.min(c[1], i.k * Math.pow(2, u.apply(this, arguments)))
              ),
              s = QN(t);
            if (e.wheel)
              (e.mouse[0][0] === s[0] && e.mouse[0][1] === s[1]) ||
                (e.mouse[1] = i.invert((e.mouse[0] = s))),
                clearTimeout(e.wheel);
            else {
              if (i.k === a) return;
              (e.mouse = [s, i.invert(s)]), Gu(this), e.start();
            }
            uk(t),
              (e.wheel = setTimeout(l, 150)),
              e.zoom(
                "mouse",
                o(v(y(i, a), e.mouse[0], e.mouse[1]), e.extent, f)
              );
          }
          function l() {
            (e.wheel = null), e.end();
          }
        }
        function M(t, ...n) {
          if (!e && r.apply(this, arguments)) {
            var i = t.currentTarget,
              u = b(this, n, !0).event(t),
              a = KN(t.view)
                .on("mousemove.zoom", h, !0)
                .on("mouseup.zoom", p, !0),
              c = QN(t, i),
              s = t.clientX,
              l = t.clientY;
            Ye(t.view),
              ok(t),
              (u.mouse = [c, this.__zoom.invert(c)]),
              Gu(this),
              u.start();
          }
          function h(t) {
            if ((uk(t), !u.moved)) {
              var n = t.clientX - s,
                e = t.clientY - l;
              u.moved = n * n + e * e > d;
            }
            u.event(t).zoom(
              "mouse",
              o(
                v(u.that.__zoom, (u.mouse[0] = QN(t, i)), u.mouse[1]),
                u.extent,
                f
              )
            );
          }
          function p(t) {
            a.on("mousemove.zoom mouseup.zoom", null),
              He(t.view, u.moved),
              uk(t),
              u.event(t).end();
          }
        }
        function A(t, ...n) {
          if (r.apply(this, arguments)) {
            var e = this.__zoom,
              u = QN(t.changedTouches ? t.changedTouches[0] : t, this),
              a = e.invert(u),
              c = e.k * (t.shiftKey ? 0.5 : 2),
              l = o(v(y(e, c), u, a), i.apply(this, n), f);
            uk(t),
              s > 0
                ? KN(this).transition().duration(s).call(m, l, u, t)
                : KN(this).call(g.transform, l, u, t);
          }
        }
        function S(e, ...i) {
          if (r.apply(this, arguments)) {
            var o,
              u,
              a,
              c,
              f = e.touches,
              s = f.length,
              l = b(this, i, e.changedTouches.length === s).event(e);
            for (ok(e), u = 0; u < s; ++u)
              (a = f[u]),
                (c = [(c = QN(a, this)), this.__zoom.invert(c), a.identifier]),
                l.touch0
                  ? l.touch1 ||
                    l.touch0[2] === c[2] ||
                    ((l.touch1 = c), (l.taps = 0))
                  : ((l.touch0 = c), (o = !0), (l.taps = 1 + !!t));
            t && (t = clearTimeout(t)),
              o &&
                (l.taps < 2 &&
                  ((n = c[0]),
                  (t = setTimeout(function () {
                    t = null;
                  }, 500))),
                Gu(this),
                l.start());
          }
        }
        function T(t, ...n) {
          if (this.__zooming) {
            var e,
              r,
              i,
              u,
              a = b(this, n).event(t),
              c = t.changedTouches,
              s = c.length;
            for (uk(t), e = 0; e < s; ++e)
              (r = c[e]),
                (i = QN(r, this)),
                a.touch0 && a.touch0[2] === r.identifier
                  ? (a.touch0[0] = i)
                  : a.touch1 &&
                    a.touch1[2] === r.identifier &&
                    (a.touch1[0] = i);
            if (((r = a.that.__zoom), a.touch1)) {
              var l = a.touch0[0],
                h = a.touch0[1],
                d = a.touch1[0],
                p = a.touch1[1],
                g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g,
                _ = (_ = p[0] - h[0]) * _ + (_ = p[1] - h[1]) * _;
              (r = y(r, Math.sqrt(g / _))),
                (i = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2]),
                (u = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]);
            } else {
              if (!a.touch0) return;
              (i = a.touch0[0]), (u = a.touch0[1]);
            }
            a.zoom("touch", o(v(r, i, u), a.extent, f));
          }
        }
        function E(t, ...r) {
          if (this.__zooming) {
            var i,
              o,
              u = b(this, r).event(t),
              a = t.changedTouches,
              c = a.length;
            for (
              ok(t),
                e && clearTimeout(e),
                e = setTimeout(function () {
                  e = null;
                }, 500),
                i = 0;
              i < c;
              ++i
            )
              (o = a[i]),
                u.touch0 && u.touch0[2] === o.identifier
                  ? delete u.touch0
                  : u.touch1 && u.touch1[2] === o.identifier && delete u.touch1;
            if (
              (u.touch1 &&
                !u.touch0 &&
                ((u.touch0 = u.touch1), delete u.touch1),
              u.touch0)
            )
              u.touch0[1] = this.__zoom.invert(u.touch0[0]);
            else if (
              (u.end(),
              2 === u.taps &&
                ((o = QN(o, this)), Math.hypot(n[0] - o[0], n[1] - o[1]) < p))
            ) {
              var f = KN(this).on("dblclick.zoom");
              f && f.apply(this, arguments);
            }
          }
        }
        return (
          (g.transform = function (t, n, e, r) {
            var i = t.selection ? t.selection() : t;
            i.property("__zoom", fk),
              t !== i
                ? m(t, n, e, r)
                : i.interrupt().each(function () {
                    b(this, arguments)
                      .event(r)
                      .start()
                      .zoom(
                        null,
                        "function" == typeof n ? n.apply(this, arguments) : n
                      )
                      .end();
                  });
          }),
          (g.scaleBy = function (t, n, e, r) {
            g.scaleTo(
              t,
              function () {
                var t = this.__zoom.k,
                  e = "function" == typeof n ? n.apply(this, arguments) : n;
                return t * e;
              },
              e,
              r
            );
          }),
          (g.scaleTo = function (t, n, e, r) {
            g.transform(
              t,
              function () {
                var t = i.apply(this, arguments),
                  r = this.__zoom,
                  u =
                    null == e
                      ? _(t)
                      : "function" == typeof e
                      ? e.apply(this, arguments)
                      : e,
                  a = r.invert(u),
                  c = "function" == typeof n ? n.apply(this, arguments) : n;
                return o(v(y(r, c), u, a), t, f);
              },
              e,
              r
            );
          }),
          (g.translateBy = function (t, n, e, r) {
            g.transform(
              t,
              function () {
                return o(
                  this.__zoom.translate(
                    "function" == typeof n ? n.apply(this, arguments) : n,
                    "function" == typeof e ? e.apply(this, arguments) : e
                  ),
                  i.apply(this, arguments),
                  f
                );
              },
              null,
              r
            );
          }),
          (g.translateTo = function (t, n, e, r, u) {
            g.transform(
              t,
              function () {
                var t = i.apply(this, arguments),
                  u = this.__zoom,
                  a =
                    null == r
                      ? _(t)
                      : "function" == typeof r
                      ? r.apply(this, arguments)
                      : r;
                return o(
                  rk
                    .translate(a[0], a[1])
                    .scale(u.k)
                    .translate(
                      "function" == typeof n ? -n.apply(this, arguments) : -n,
                      "function" == typeof e ? -e.apply(this, arguments) : -e
                    ),
                  t,
                  f
                );
              },
              r,
              u
            );
          }),
          (x.prototype = {
            event: function (t) {
              return t && (this.sourceEvent = t), this;
            },
            start: function () {
              return (
                1 == ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (t, n) {
              return (
                this.mouse &&
                  "mouse" !== t &&
                  (this.mouse[1] = n.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== t &&
                  (this.touch0[1] = n.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== t &&
                  (this.touch1[1] = n.invert(this.touch1[0])),
                (this.that.__zoom = n),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 == --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (t) {
              var n = KN(this.that).datum();
              h.call(
                t,
                this.that,
                new nk(t, {
                  sourceEvent: this.sourceEvent,
                  target: g,
                  type: t,
                  transform: this.that.__zoom,
                  dispatch: h,
                }),
                n
              );
            },
          }),
          (g.wheelDelta = function (t) {
            return arguments.length
              ? ((u = "function" == typeof t ? t : tk(+t)), g)
              : u;
          }),
          (g.filter = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : tk(!!t)), g)
              : r;
          }),
          (g.touchable = function (t) {
            return arguments.length
              ? ((a = "function" == typeof t ? t : tk(!!t)), g)
              : a;
          }),
          (g.extent = function (t) {
            return arguments.length
              ? ((i =
                  "function" == typeof t
                    ? t
                    : tk([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]],
                      ])),
                g)
              : i;
          }),
          (g.scaleExtent = function (t) {
            return arguments.length
              ? ((c[0] = +t[0]), (c[1] = +t[1]), g)
              : [c[0], c[1]];
          }),
          (g.translateExtent = function (t) {
            return arguments.length
              ? ((f[0][0] = +t[0][0]),
                (f[1][0] = +t[1][0]),
                (f[0][1] = +t[0][1]),
                (f[1][1] = +t[1][1]),
                g)
              : [
                  [f[0][0], f[0][1]],
                  [f[1][0], f[1][1]],
                ];
          }),
          (g.constrain = function (t) {
            return arguments.length ? ((o = t), g) : o;
          }),
          (g.duration = function (t) {
            return arguments.length ? ((s = +t), g) : s;
          }),
          (g.interpolate = function (t) {
            return arguments.length ? ((l = t), g) : l;
          }),
          (g.on = function () {
            var t = h.on.apply(h, arguments);
            return t === h ? g : t;
          }),
          (g.clickDistance = function (t) {
            return arguments.length ? ((d = (t = +t) * t), g) : Math.sqrt(d);
          }),
          (g.tapDistance = function (t) {
            return arguments.length ? ((p = +t), g) : p;
          }),
          g
        );
      };
      function pk(t, n, e, r) {
        let i = "",
          o = "",
          u = "";
        n.config.color_table;
        return (
          0 == e &&
            (u = `<div style="position:absolute; margin-top:-25px; left:0; margin-left:10px;">${n.config.thead_title_1}</div>`),
          (i = `<td width="110">${u}<div>${t.dimension}</div></td>`),
          (o += (function (t, n, e, r = 1, i = "") {
            let o = "",
              u = (t.width, t.margin, e.dimension),
              a = e.measure,
              c = (e.measure / n) * 100,
              f = c < 5 ? 5 : c;
            f = f > 100 ? 100 : f;
            let s = e.color;
            try {
              u = JSON.stringify(u);
            } catch (t) {}
            try {
              a = a.toFixed(2);
            } catch (t) {}
            0 == r &&
              (o = `<div style="position:absolute; margin-top:-20px; left:0; margin-left:0px;">${t.config.thead_title_2}</div> `);
            return `\n    <td style="position:relative"> \n          ${o} \n        <div  \n        style="margin-right:5px; float:left; border-radius:0px 7px 7px 0px; height:25px; width:${f}%; background:${s}" \n        data-value="${u}">\n        </div>   \n    </td>  \n    <td align="right" width="70">\n        <div style="overflow:hidden;margin-top: 8px;"> \n          ${Intl.NumberFormat(
              "pt-BR"
            ).format(a)}${i}\n        </div>  \n    </td>   \n    `;
          })(n, r, t, e, "")),
          i + o
        );
      }
      function gk(t, n) {
        let e = !1,
          r = [],
          i = [];
        return (
          console.log("params", t),
          t.data.forEach(function (e) {
            let r = e[t.queryResponse.fields.dimensions[0].name].value,
              i = e[t.queryResponse.fields.measures[0].name].value,
              o = t.config.color_table;
            t.details.crossfilters.length > 0 &&
              (o = (function (t, n) {
                return yk(t, n)
                  ? t.config.color_table
                  : t.config.color_not_selected;
              })(t, r)),
              n.push({ dimension: r, measure: i, color: o });
          }),
          n.forEach(function (n) {
            try {
              t.details.crossfilters.length > 0 &&
                (yk(t, n.dimension) ? r.push(n) : i.push(n), (e = !0));
            } catch (t) {}
          }),
          e && (n = [...r, ...i]),
          n
        );
      }
      function yk(t, n) {
        let e = !1,
          r = [];
        try {
          r = t.details.crossfilters[0].values;
        } catch (t) {}
        try {
          n = JSON.parse(n);
        } catch (t) {}
        let i = (function (t) {
          let n = t;
          if (
            (console.log("pipeExists - old filter", t), t[0].includes(" | "))
          ) {
            let e = JSON.parse(t[0]);
            e.replace(/\"/gm, "").replace(/\[/gm, "").replace(/\]/gm, ""),
              (n = e.split(" | "));
          }
          return console.log("pipeExists - new filter", n), n;
        })(r);
        if ("object" == typeof i)
          for (let t = 0; t < i.length; t++) {
            let r = i[t];
            try {
              r = JSON.parse(r);
            } catch (t) {}
            if ((console.log("1 - É object - Comparar", n, r), r == n)) {
              e = !0;
              break;
            }
          }
        else {
          let t = i;
          try {
            t = JSON.parse(t);
          } catch (t) {}
          console.log("1 - É string - Comparar", n, t), t == n && (e = !0);
        }
        return console.log("Checando se o termo existe nos filtros", e), e;
      }
      function vk(t) {
        var n = t.d3;
        let r = e(2);
        t.width;
        var i = t.margin,
          o = t.height,
          u = t.queryResponse,
          a = [];
        let c = Array(),
          f = "";
        (f =
          0 == n.select("#toolTip").size()
            ? n.select("body").append("div").attr("id", "toolTip")
            : n.select("#toolTip")),
          (a = gk(t, a));
        var s = n
            .select("#chart")
            .append("div")
            .attr(
              "style",
              `\n      position: absolute;\n      margin-top: 50px;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      width: 98%; \n      height: ${
                o + i.top + i.bottom - 40
              }px`
            )
            .append("table")
            .attr("id", "box")
            .attr(
              "style",
              `\n      margin-top: 20px;\n      width: 98%;\n      margin-left:10px;  \n      margin-right:10px;   \n      font-family: ${t.config.table_font_family};\n      font-weight: ${t.config.table_font_weight};\n      font-size: ${t.config.table_font_size}px;\n      color: ${t.config.table_font_color};\n      `
            ),
          l = n.max(a, function (t) {
            return t.measure;
          }),
          h = Array(),
          d = 0;
        return (
          s
            .selectAll("table")
            .attr("id", "table_horizontal")
            .data(a)
            .enter()
            .append("tr")
            .attr("data-value", function (t) {
              return t.dimension;
            })
            .attr("class", "filtered-table-value")
            .on("click", function (e, i) {
              let o = i.dimension,
                a = e,
                f = "";
              if ("yes" == t.config.merge_selected_filters && 1 == e.ctrlKey) {
                try {
                  o = (function (t, n) {
                    let e = "";
                    return (
                      (t = t.reverse()),
                      (e = t[t.length - 1] + " | " + n),
                      (e = JSON.stringify(e.replace(/"/gm, ""))),
                      e
                    );
                  })(t.details.crossfilters[0].values, i.dimension);
                } catch (t) {}
                try {
                  (o = JSON.parse(o).split(" | ").sort().join(" | ")), (f = o);
                } catch (t) {
                  f = t;
                }
                a = { ctrlKey: !1, metaKey: !1 };
              }
              return (
                (h[u.fields.dimensions[0].name] = {
                  field: u.fields.dimensions[0].name,
                  value: JSON.stringify(o),
                }),
                (c = { event: a, row: h }),
                console.log("Dados ordenados", f),
                LookerCharts.Utils.toggleCrossfilter(c),
                _k(n, "or", o, "data-or", r),
                _k(n, "and", o, "data-and", r),
                !1
              );
            })
            .html(function (n, e) {
              let r = pk(n, t, d, l);
              return d++, r;
            }),
          s
        );
      }
      function _k(t, n, e, r, i) {
        try {
          (e = e.replace(/\\"/gm, "").replace(/\"/gm, "")),
            "or" == n &&
              (e = (e = e.replace(" | ", ","))
                .replace(/\[/gm, "")
                .replace(/\]/gm, ""));
        } catch (t) {
          console.log("setData", t);
        }
        t.select("#toggle_filter").attr(r, e);
        try {
          i.set(r, { name: e });
        } catch (t) {
          console.log("setData", t);
        }
        return e;
      }
      looker.plugins.visualizations.add({
        id: "viz-bar_image-marketplace",
        label: "Carecterística enviada",
        options: i,
        create: function (t, n) {
          var e = t.appendChild(document.createElement("div"));
          e.id = "chart";
          const r = document.createElement("style");
          (r.innerHTML = void 0), document.head.appendChild(r);
          var i = document.createElement("link");
          (i.type = "text/css"),
            (i.rel = "stylesheet"),
            (i.crossorigin = "anonymous"),
            (i.referrerpolicy = "no-referrer"),
            document.head.appendChild(i),
            (i.href =
              "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css");
          let o = document.createElement("link");
          (o.rel = "preconnect"),
            document.head.appendChild(o),
            (o.href = "https://fonts.googleapis.com");
          let u = document.createElement("link");
          (u.rel = "preconnect"),
            (u.crossorigin = "anonymous"),
            document.head.appendChild(u),
            (u.href = "https://fonts.gstatic.com");
          let a = document.createElement("link");
          (a.type = "text/css"),
            (a.rel = "stylesheet"),
            document.head.appendChild(a),
            (a.href =
              "https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Quicksand:wght@300;700&family=Roboto&display=swap");
          let c = document.createElement("script");
          return (
            (c.crossorigin = "anonymous"),
            document.head.appendChild(c),
            (c.src = "https://kit.fontawesome.com/9e8face2b6.js"),
            e
          );
        },
        updateAsync: function (t, n, o, u, a, c) {
          let f = {
              top: 170,
              right: o.side_margin,
              bottom: -10,
              left: o.side_margin,
            },
            s = n.clientWidth - f.left - f.right,
            l = n.clientHeight - f.top - f.bottom;
          const h = {
            vis: this,
            d3: r,
            config: o,
            data: t,
            queryResponse: u,
            element: n,
            details: a,
            width: s,
            height: l,
            margin: f,
          };
          hT("#chart").remove(),
            (n.appendChild(document.createElement("div")).id = "chart");
          let d = (function (t) {
            let n = e(2),
              r = "AND",
              i = "",
              o = "",
              u = "",
              a = "";
            try {
              (r = n.get("toggle_filter").name),
                (i = n.get("data-or").name),
                (o = n.get("data-and").name);
            } catch (t) {}
            return (
              (u =
                "AND" == r
                  ? '\n        <div class="slider round">                \n                <span class="off">AND</span>\n                <span class="on">OR</span>                \n              </div>'
                  : '\n        <div class="slider round">              \n                <span class="off">OR</span>\n                <span class="on">AND</span>  \n              </div>'),
              (a = `<div style="position:absolute; margin-left:10px; margin-top:-10px;">\n  <h3>${t.config.default_icon} <span style="font-family: ${t.config.table_font_family}; font-weight: normal;"> ${t.config.title_graphic}</span></h3>\n  </div>      \n  <div style="position:relative; float:right; right:30px;margin-top:10px;" id="toggle_filter"\n    data-condition="${r}" \n    data-or="${i}"\n    data-and="${o}"      \n    >\n    <label class="switch">\n    <input type="checkbox" id="togBtn">\n    ${u}\n    </label>\n  </div>      \n  `),
              a
            );
          })(h);
          hT("#chart").html(d), this.trigger("registerOptions", i);
          let p = e(2),
            g = "AND";
          try {
            g = p.get("toggle_filter").name;
          } catch (t) {}
          let y = !0;
          hT("#toggle_filter").on("click", function (t, n) {
            if (y) {
              let t = "OR" == hT(this).attr("data-condition") ? "AND" : "OR";
              hT(this).attr("data-condition", t),
                p.set("toggle_filter", { name: t });
              let n = { event: { ctrlKey: !1, metaKey: !1 }, row: "" };
              LookerCharts.Utils.toggleCrossfilter(n), (y = !1);
            } else y = !0;
          }),
            "AND" == g
              ? vk(h)
              : (function (t) {
                  let n = t.d3,
                    e = Array();
                  var r = Array();
                  if (0 == n.select("#toolTip").size())
                    var i = n
                      .select("body")
                      .append("div")
                      .attr("id", "toolTip");
                  else i = n.select("#toolTip");
                  e = gk(t, e);
                  var o = n
                      .select("#chart")
                      .append("div")
                      .attr(
                        "style",
                        `\n      position: absolute;\n      margin-top: 50px;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      width: 98%; \n      height:${
                          t.height + t.margin.top + t.margin.bottom - 40
                        }px`
                      )
                      .append("table")
                      .attr("id", "box")
                      .attr(
                        "style",
                        `\n      width: 98%;\n      margin-left: 10px;      \n      margin-right: 10px;      \n      font-family: ${t.config.table_font_family};\n      font-weight: ${t.config.table_font_weight};\n      font-size: ${t.config.table_font_size}px;\n      color: ${t.config.table_font_color};\n       `
                      ),
                    u = n.max(e, function (t) {
                      return t.measure;
                    });
                  o.selectAll("table")
                    .attr("id", "table_horizontal")
                    .data(e)
                    .enter()
                    .append("tr")
                    .attr("data-value", function (t) {
                      return t.dimension;
                    })
                    .attr("class", "filtered-table-value")
                    .html(function (t, n) {
                      let e = "",
                        r = t.color,
                        i = (t.measure / u) * 100;
                      return (
                        (i = i < 5 ? 3 : i),
                        (e = `<td width="110">${
                          t.dimension
                        }</td> \n        <td>       \n          <div style="border-radius:0px 7px 7px 0px; height:25px; width: ${i}%; background:${r}" data-value="${
                          t.dimension
                        }"></div>        \n        </td> \n        <td align="right" width="70">\n          ${Intl.NumberFormat(
                          "pt-BR"
                        ).format(t.measure)}\n        </td>`),
                        e
                      );
                    })
                    .on("click", function (n, e) {
                      try {
                        i.style("position", "absolute"),
                          i.style("display", "none"),
                          (r[t.queryResponse.fields.dimensions[0].name] = {
                            field: t.queryResponse.fields.dimensions[0].name,
                            value: JSON.stringify(e.dimension),
                          });
                        var o = { event: n, row: r };
                        LookerCharts.Utils.toggleCrossfilter(o);
                      } catch (t) {}
                      return !1;
                    });
                })(h),
            c();
        },
      });
    },
  ]);
});
