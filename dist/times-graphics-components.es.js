import Te, { useState as N, useEffect as H, memo as ke, useRef as X, useCallback as Re } from "react";
import E, { createGlobalStyle as Me, css as ee } from "styled-components";
var G = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function Ce() {
  if (ue) return F;
  ue = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(i, r, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), r.key !== void 0 && (s = "" + r.key), "key" in r) {
      o = {};
      for (var l in r)
        l !== "key" && (o[l] = r[l]);
    } else o = r;
    return r = o.ref, {
      $$typeof: n,
      type: i,
      key: s,
      ref: r !== void 0 ? r : null,
      props: o
    };
  }
  return F.Fragment = e, F.jsx = t, F.jsxs = t, F;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Ee() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && function() {
    function n(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === A ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case C:
          return "Fragment";
        case T:
          return "Profiler";
        case x:
          return "StrictMode";
        case h:
          return "Suspense";
        case b:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case w:
            return "Portal";
          case D:
            return (a.displayName || "Context") + ".Provider";
          case R:
            return (a._context.displayName || "Context") + ".Consumer";
          case v:
            var y = a.render;
            return a = a.displayName, a || (a = y.displayName || y.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case k:
            return y = a.displayName || null, y !== null ? y : n(a.type) || "Memo";
          case _:
            y = a._payload, a = a._init;
            try {
              return n(a(y));
            } catch {
            }
        }
      return null;
    }
    function e(a) {
      return "" + a;
    }
    function t(a) {
      try {
        e(a);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var M = y.error, P = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return M.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), e(a);
      }
    }
    function i(a) {
      if (a === C) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === _)
        return "<...>";
      try {
        var y = n(a);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var a = L.A;
      return a === null ? null : a.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(a) {
      if (B.call(a, "key")) {
        var y = Object.getOwnPropertyDescriptor(a, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function l(a, y) {
      function M() {
        se || (se = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: M,
        configurable: !0
      });
    }
    function u() {
      var a = n(this.type);
      return ae[a] || (ae[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function f(a, y, M, P, z, W, Z, Q) {
      return M = W.ref, a = {
        $$typeof: g,
        type: a,
        key: y,
        props: W,
        _owner: z
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function d(a, y, M, P, z, W, Z, Q) {
      var j = y.children;
      if (j !== void 0)
        if (P)
          if (we(j)) {
            for (P = 0; P < j.length; P++)
              p(j[P]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(j);
      if (B.call(y, "key")) {
        j = n(a);
        var I = Object.keys(y).filter(function(xe) {
          return xe !== "key";
        });
        P = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", ce[j + P] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          j,
          I,
          j
        ), ce[j + P] = !0);
      }
      if (j = null, M !== void 0 && (t(M), j = "" + M), s(y) && (t(y.key), j = "" + y.key), "key" in y) {
        M = {};
        for (var K in y)
          K !== "key" && (M[K] = y[K]);
      } else M = y;
      return j && l(
        M,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), f(
        a,
        j,
        W,
        z,
        r(),
        M,
        Z,
        Q
      );
    }
    function p(a) {
      typeof a == "object" && a !== null && a.$$typeof === g && a._store && (a._store.validated = 1);
    }
    var m = Te, g = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), D = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), L = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, we = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var se, ae = {}, le = m["react-stack-bottom-frame"].bind(
      m,
      o
    )(), de = J(i(o)), ce = {};
    q.Fragment = C, q.jsx = function(a, y, M, P, z) {
      var W = 1e4 > L.recentlyCreatedOwnerStacks++;
      return d(
        a,
        y,
        M,
        !1,
        P,
        z,
        W ? Error("react-stack-top-frame") : le,
        W ? J(i(a)) : de
      );
    }, q.jsxs = function(a, y, M, P, z) {
      var W = 1e4 > L.recentlyCreatedOwnerStacks++;
      return d(
        a,
        y,
        M,
        !0,
        P,
        z,
        W ? Error("react-stack-top-frame") : le,
        W ? J(i(a)) : de
      );
    };
  }()), q;
}
var he;
function Se() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? G.exports = Ce() : G.exports = Ee()), G.exports;
}
var c = Se();
function S(n, e, t, i) {
  return new (t || (t = Promise))(function(r, o) {
    function s(f) {
      try {
        u(i.next(f));
      } catch (d) {
        o(d);
      }
    }
    function l(f) {
      try {
        u(i.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function u(f) {
      var d;
      f.done ? r(f.value) : (d = f.value, d instanceof t ? d : new t(function(p) {
        p(d);
      })).then(s, l);
    }
    u((i = i.apply(n, e || [])).next());
  });
}
class V {
  constructor() {
    this.listeners = {};
  }
  on(e, t, i) {
    if (this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), this.listeners[e].add(t), i == null ? void 0 : i.once) {
      const r = () => {
        this.un(e, r), this.un(e, t);
      };
      return this.on(e, r), r;
    }
    return () => this.un(e, t);
  }
  un(e, t) {
    var i;
    (i = this.listeners[e]) === null || i === void 0 || i.delete(t);
  }
  once(e, t) {
    return this.on(e, t, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(e, ...t) {
    this.listeners[e] && this.listeners[e].forEach((i) => i(...t));
  }
}
const U = { decode: function(n, e) {
  return S(this, void 0, void 0, function* () {
    const t = new AudioContext({ sampleRate: e });
    return t.decodeAudioData(n).finally(() => t.close());
  });
}, createBuffer: function(n, e) {
  return typeof n[0] == "number" && (n = [n]), function(t) {
    const i = t[0];
    if (i.some((r) => r > 1 || r < -1)) {
      const r = i.length;
      let o = 0;
      for (let s = 0; s < r; s++) {
        const l = Math.abs(i[s]);
        l > o && (o = l);
      }
      for (const s of t) for (let l = 0; l < r; l++) s[l] /= o;
    }
  }(n), { duration: e, length: n[0].length, sampleRate: n[0].length / e, numberOfChannels: n.length, getChannelData: (t) => n == null ? void 0 : n[t], copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function ye(n, e) {
  const t = e.xmlns ? document.createElementNS(e.xmlns, n) : document.createElement(n);
  for (const [i, r] of Object.entries(e)) if (i === "children") for (const [o, s] of Object.entries(e)) typeof s == "string" ? t.appendChild(document.createTextNode(s)) : t.appendChild(ye(o, s));
  else i === "style" ? Object.assign(t.style, r) : i === "textContent" ? t.textContent = r : t.setAttribute(i, r.toString());
  return t;
}
function me(n, e, t) {
  const i = ye(n, e || {});
  return t == null || t.appendChild(i), i;
}
var Pe = Object.freeze({ __proto__: null, createElement: me, default: me });
const je = { fetchBlob: function(n, e, t) {
  return S(this, void 0, void 0, function* () {
    const i = yield fetch(n, t);
    if (i.status >= 400) throw new Error(`Failed to fetch ${n}: ${i.status} (${i.statusText})`);
    return function(r, o) {
      S(this, void 0, void 0, function* () {
        if (!r.body || !r.headers) return;
        const s = r.body.getReader(), l = Number(r.headers.get("Content-Length")) || 0;
        let u = 0;
        const f = (p) => S(this, void 0, void 0, function* () {
          u += (p == null ? void 0 : p.length) || 0;
          const m = Math.round(u / l * 100);
          o(m);
        }), d = () => S(this, void 0, void 0, function* () {
          let p;
          try {
            p = yield s.read();
          } catch {
            return;
          }
          p.done || (f(p.value), yield d());
        });
        d();
      });
    }(i.clone(), e), i.blob();
  });
} };
class De extends V {
  constructor(e) {
    super(), this.isExternalMedia = !1, e.media ? (this.media = e.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), e.mediaControls && (this.media.controls = !0), e.autoplay && (this.media.autoplay = !0), e.playbackRate != null && this.onMediaEvent("canplay", () => {
      e.playbackRate != null && (this.media.playbackRate = e.playbackRate);
    }, { once: !0 });
  }
  onMediaEvent(e, t, i) {
    return this.media.addEventListener(e, t, i), () => this.media.removeEventListener(e, t, i);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const e = this.getSrc();
    e.startsWith("blob:") && URL.revokeObjectURL(e);
  }
  canPlayType(e) {
    return this.media.canPlayType(e) !== "";
  }
  setSrc(e, t) {
    const i = this.getSrc();
    if (e && i === e) return;
    this.revokeSrc();
    const r = t instanceof Blob && (this.canPlayType(t.type) || !e) ? URL.createObjectURL(t) : e;
    i && (this.media.src = "");
    try {
      this.media.src = r;
    } catch {
      this.media.src = e;
    }
  }
  destroy() {
    this.isExternalMedia || (this.media.pause(), this.media.remove(), this.revokeSrc(), this.media.src = "", this.media.load());
  }
  setMediaElement(e) {
    this.media = e;
  }
  play() {
    return S(this, void 0, void 0, function* () {
      return this.media.play();
    });
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(e) {
    this.media.currentTime = Math.max(0, Math.min(e, this.getDuration()));
  }
  getDuration() {
    return this.media.duration;
  }
  getCurrentTime() {
    return this.media.currentTime;
  }
  getVolume() {
    return this.media.volume;
  }
  setVolume(e) {
    this.media.volume = e;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(e) {
    this.media.muted = e;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(e, t) {
    t != null && (this.media.preservesPitch = t), this.media.playbackRate = e;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(e) {
    return this.media.setSinkId(e);
  }
}
class $ extends V {
  constructor(e, t) {
    super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = e;
    const i = this.parentFromOptionsContainer(e.container);
    this.parent = i;
    const [r, o] = this.initHtml();
    i.appendChild(r), this.container = r, this.scrollContainer = o.querySelector(".scroll"), this.wrapper = o.querySelector(".wrapper"), this.canvasWrapper = o.querySelector(".canvases"), this.progressWrapper = o.querySelector(".progress"), this.cursor = o.querySelector(".cursor"), t && o.appendChild(t), this.initEvents();
  }
  parentFromOptionsContainer(e) {
    let t;
    if (typeof e == "string" ? t = document.querySelector(e) : e instanceof HTMLElement && (t = e), !t) throw new Error("Container not found");
    return t;
  }
  initEvents() {
    const e = (t) => {
      const i = this.wrapper.getBoundingClientRect(), r = t.clientX - i.left, o = t.clientY - i.top;
      return [r / i.width, o / i.height];
    };
    if (this.wrapper.addEventListener("click", (t) => {
      const [i, r] = e(t);
      this.emit("click", i, r);
    }), this.wrapper.addEventListener("dblclick", (t) => {
      const [i, r] = e(t);
      this.emit("dblclick", i, r);
    }), this.options.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const { scrollLeft: t, scrollWidth: i, clientWidth: r } = this.scrollContainer, o = t / i, s = (t + r) / i;
      this.emit("scroll", o, s, t, t + r);
    }), typeof ResizeObserver == "function") {
      const t = this.createDelay(100);
      this.resizeObserver = new ResizeObserver(() => {
        t().then(() => this.onContainerResize()).catch(() => {
        });
      }), this.resizeObserver.observe(this.scrollContainer);
    }
  }
  onContainerResize() {
    const e = this.parent.clientWidth;
    e === this.lastContainerWidth && this.options.height !== "auto" || (this.lastContainerWidth = e, this.reRender());
  }
  initDrag() {
    this.subscriptions.push(function(e, t, i, r, o = 3, s = 0, l = 100) {
      if (!e) return () => {
      };
      const u = matchMedia("(pointer: coarse)").matches;
      let f = () => {
      };
      const d = (p) => {
        if (p.button !== s) return;
        p.preventDefault(), p.stopPropagation();
        let m = p.clientX, g = p.clientY, w = !1;
        const C = Date.now(), x = (h) => {
          if (h.preventDefault(), h.stopPropagation(), u && Date.now() - C < l) return;
          const b = h.clientX, k = h.clientY, _ = b - m, O = k - g;
          if (w || Math.abs(_) > o || Math.abs(O) > o) {
            const A = e.getBoundingClientRect(), { left: L, top: B } = A;
            w || (i == null || i(m - L, g - B), w = !0), t(_, O, b - L, k - B), m = b, g = k;
          }
        }, T = (h) => {
          if (w) {
            const b = h.clientX, k = h.clientY, _ = e.getBoundingClientRect(), { left: O, top: A } = _;
            r == null || r(b - O, k - A);
          }
          f();
        }, R = (h) => {
          h.relatedTarget && h.relatedTarget !== document.documentElement || T(h);
        }, D = (h) => {
          w && (h.stopPropagation(), h.preventDefault());
        }, v = (h) => {
          w && h.preventDefault();
        };
        document.addEventListener("pointermove", x), document.addEventListener("pointerup", T), document.addEventListener("pointerout", R), document.addEventListener("pointercancel", R), document.addEventListener("touchmove", v, { passive: !1 }), document.addEventListener("click", D, { capture: !0 }), f = () => {
          document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", T), document.removeEventListener("pointerout", R), document.removeEventListener("pointercancel", R), document.removeEventListener("touchmove", v), setTimeout(() => {
            document.removeEventListener("click", D, { capture: !0 });
          }, 10);
        };
      };
      return e.addEventListener("pointerdown", d), () => {
        f(), e.removeEventListener("pointerdown", d);
      };
    }(this.wrapper, (e, t, i) => {
      this.emit("drag", Math.max(0, Math.min(1, i / this.wrapper.getBoundingClientRect().width)));
    }, (e) => {
      this.isDragging = !0, this.emit("dragstart", Math.max(0, Math.min(1, e / this.wrapper.getBoundingClientRect().width)));
    }, (e) => {
      this.isDragging = !1, this.emit("dragend", Math.max(0, Math.min(1, e / this.wrapper.getBoundingClientRect().width)));
    }));
  }
  getHeight(e, t) {
    var i;
    const r = ((i = this.audioData) === null || i === void 0 ? void 0 : i.numberOfChannels) || 1;
    if (e == null) return 128;
    if (!isNaN(Number(e))) return Number(e);
    if (e === "auto") {
      const o = this.parent.clientHeight || 128;
      return t != null && t.every((s) => !s.overlay) ? o / r : o;
    }
    return 128;
  }
  initHtml() {
    const e = document.createElement("div"), t = e.attachShadow({ mode: "open" }), i = this.options.cspNonce && typeof this.options.cspNonce == "string" ? this.options.cspNonce.replace(/"/g, "") : "";
    return t.innerHTML = `
      <style${i ? ` nonce="${i}"` : ""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [e, t];
  }
  setOptions(e) {
    if (this.options.container !== e.container) {
      const t = this.parentFromOptionsContainer(e.container);
      t.appendChild(this.container), this.parent = t;
    }
    e.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.options = e, this.reRender();
  }
  getWrapper() {
    return this.wrapper;
  }
  getWidth() {
    return this.scrollContainer.clientWidth;
  }
  getScroll() {
    return this.scrollContainer.scrollLeft;
  }
  setScroll(e) {
    this.scrollContainer.scrollLeft = e;
  }
  setScrollPercentage(e) {
    const { scrollWidth: t } = this.scrollContainer, i = t * e;
    this.setScroll(i);
  }
  destroy() {
    var e, t;
    this.subscriptions.forEach((i) => i()), this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.unsubscribeOnScroll) === null || t === void 0 || t.forEach((i) => i()), this.unsubscribeOnScroll = [];
  }
  createDelay(e = 10) {
    let t, i;
    const r = () => {
      t && clearTimeout(t), i && i();
    };
    return this.timeouts.push(r), () => new Promise((o, s) => {
      r(), i = s, t = setTimeout(() => {
        t = void 0, i = void 0, o();
      }, e);
    });
  }
  convertColorValues(e) {
    if (!Array.isArray(e)) return e || "";
    if (e.length < 2) return e[0] || "";
    const t = document.createElement("canvas"), i = t.getContext("2d"), r = t.height * (window.devicePixelRatio || 1), o = i.createLinearGradient(0, 0, 0, r), s = 1 / (e.length - 1);
    return e.forEach((l, u) => {
      const f = u * s;
      o.addColorStop(f, l);
    }), o;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(e, t, i, r) {
    const o = e[0], s = e[1] || e[0], l = o.length, { width: u, height: f } = i.canvas, d = f / 2, p = this.getPixelRatio(), m = t.barWidth ? t.barWidth * p : 1, g = t.barGap ? t.barGap * p : t.barWidth ? m / 2 : 0, w = t.barRadius || 0, C = u / (m + g) / l, x = w && "roundRect" in i ? "roundRect" : "rect";
    i.beginPath();
    let T = 0, R = 0, D = 0;
    for (let v = 0; v <= l; v++) {
      const h = Math.round(v * C);
      if (h > T) {
        const _ = Math.round(R * d * r), O = _ + Math.round(D * d * r) || 1;
        let A = d - _;
        t.barAlign === "top" ? A = 0 : t.barAlign === "bottom" && (A = f - O), i[x](T * (m + g), A, m, O, w), T = h, R = 0, D = 0;
      }
      const b = Math.abs(o[v] || 0), k = Math.abs(s[v] || 0);
      b > R && (R = b), k > D && (D = k);
    }
    i.fill(), i.closePath();
  }
  renderLineWaveform(e, t, i, r) {
    const o = (s) => {
      const l = e[s] || e[0], u = l.length, { height: f } = i.canvas, d = f / 2, p = i.canvas.width / u;
      i.moveTo(0, d);
      let m = 0, g = 0;
      for (let w = 0; w <= u; w++) {
        const C = Math.round(w * p);
        if (C > m) {
          const T = d + (Math.round(g * d * r) || 1) * (s === 0 ? -1 : 1);
          i.lineTo(m, T), m = C, g = 0;
        }
        const x = Math.abs(l[w] || 0);
        x > g && (g = x);
      }
      i.lineTo(m, d);
    };
    i.beginPath(), o(0), o(1), i.fill(), i.closePath();
  }
  renderWaveform(e, t, i) {
    if (i.fillStyle = this.convertColorValues(t.waveColor), t.renderFunction) return void t.renderFunction(e, i);
    let r = t.barHeight || 1;
    if (t.normalize) {
      const o = Array.from(e[0]).reduce((s, l) => Math.max(s, Math.abs(l)), 0);
      r = o ? 1 / o : 1;
    }
    t.barWidth || t.barGap || t.barAlign ? this.renderBarWaveform(e, t, i, r) : this.renderLineWaveform(e, t, i, r);
  }
  renderSingleCanvas(e, t, i, r, o, s, l) {
    const u = this.getPixelRatio(), f = document.createElement("canvas");
    f.width = Math.round(i * u), f.height = Math.round(r * u), f.style.width = `${i}px`, f.style.height = `${r}px`, f.style.left = `${Math.round(o)}px`, s.appendChild(f);
    const d = f.getContext("2d");
    if (this.renderWaveform(e, t, d), f.width > 0 && f.height > 0) {
      const p = f.cloneNode(), m = p.getContext("2d");
      m.drawImage(f, 0, 0), m.globalCompositeOperation = "source-in", m.fillStyle = this.convertColorValues(t.progressColor), m.fillRect(0, 0, f.width, f.height), l.appendChild(p);
    }
  }
  renderMultiCanvas(e, t, i, r, o, s) {
    const l = this.getPixelRatio(), { clientWidth: u } = this.scrollContainer, f = i / l;
    let d = Math.min($.MAX_CANVAS_WIDTH, u, f), p = {};
    if (d === 0) return;
    if (t.barWidth || t.barGap) {
      const x = t.barWidth || 0.5, T = x + (t.barGap || x / 2);
      d % T != 0 && (d = Math.floor(d / T) * T);
    }
    const m = (x) => {
      if (x < 0 || x >= g || p[x]) return;
      p[x] = !0;
      const T = x * d, R = Math.min(f - T, d);
      if (R <= 0) return;
      const D = e.map((v) => {
        const h = Math.floor(T / f * v.length), b = Math.floor((T + R) / f * v.length);
        return v.slice(h, b);
      });
      this.renderSingleCanvas(D, t, R, r, T, o, s);
    }, g = Math.ceil(f / d);
    if (!this.isScrollable) {
      for (let x = 0; x < g; x++) m(x);
      return;
    }
    const w = this.scrollContainer.scrollLeft / f, C = Math.floor(w * g);
    if (m(C - 1), m(C), m(C + 1), g > 1) {
      const x = this.on("scroll", () => {
        const { scrollLeft: T } = this.scrollContainer, R = Math.floor(T / f * g);
        Object.keys(p).length > $.MAX_NODES && (o.innerHTML = "", s.innerHTML = "", p = {}), m(R - 1), m(R), m(R + 1);
      });
      this.unsubscribeOnScroll.push(x);
    }
  }
  renderChannel(e, t, i, r) {
    var { overlay: o } = t, s = function(d, p) {
      var m = {};
      for (var g in d) Object.prototype.hasOwnProperty.call(d, g) && p.indexOf(g) < 0 && (m[g] = d[g]);
      if (d != null && typeof Object.getOwnPropertySymbols == "function") {
        var w = 0;
        for (g = Object.getOwnPropertySymbols(d); w < g.length; w++) p.indexOf(g[w]) < 0 && Object.prototype.propertyIsEnumerable.call(d, g[w]) && (m[g[w]] = d[g[w]]);
      }
      return m;
    }(t, ["overlay"]);
    const l = document.createElement("div"), u = this.getHeight(s.height, s.splitChannels);
    l.style.height = `${u}px`, o && r > 0 && (l.style.marginTop = `-${u}px`), this.canvasWrapper.style.minHeight = `${u}px`, this.canvasWrapper.appendChild(l);
    const f = l.cloneNode();
    this.progressWrapper.appendChild(f), this.renderMultiCanvas(e, s, i, u, l, f);
  }
  render(e) {
    return S(this, void 0, void 0, function* () {
      var t;
      this.timeouts.forEach((u) => u()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", this.options.width != null && (this.scrollContainer.style.width = typeof this.options.width == "number" ? `${this.options.width}px` : this.options.width);
      const i = this.getPixelRatio(), r = this.scrollContainer.clientWidth, o = Math.ceil(e.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = o > r;
      const s = this.options.fillParent && !this.isScrollable, l = (s ? r : o) * i;
      if (this.wrapper.style.width = s ? "100%" : `${o}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e, this.emit("render"), this.options.splitChannels) for (let u = 0; u < e.numberOfChannels; u++) {
        const f = Object.assign(Object.assign({}, this.options), (t = this.options.splitChannels) === null || t === void 0 ? void 0 : t[u]);
        this.renderChannel([e.getChannelData(u)], f, l, u);
      }
      else {
        const u = [e.getChannelData(0)];
        e.numberOfChannels > 1 && u.push(e.getChannelData(1)), this.renderChannel(u, this.options, l, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    if (this.unsubscribeOnScroll.forEach((i) => i()), this.unsubscribeOnScroll = [], !this.audioData) return;
    const { scrollWidth: e } = this.scrollContainer, { right: t } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && e !== this.scrollContainer.scrollWidth) {
      const { right: i } = this.progressWrapper.getBoundingClientRect();
      let r = i - t;
      r *= 2, r = r < 0 ? Math.floor(r) : Math.ceil(r), r /= 2, this.scrollContainer.scrollLeft += r;
    }
  }
  zoom(e) {
    this.options.minPxPerSec = e, this.reRender();
  }
  scrollIntoView(e, t = !1) {
    const { scrollLeft: i, scrollWidth: r, clientWidth: o } = this.scrollContainer, s = e * r, l = i, u = i + o, f = o / 2;
    if (this.isDragging)
      s + 30 > u ? this.scrollContainer.scrollLeft += 30 : s - 30 < l && (this.scrollContainer.scrollLeft -= 30);
    else {
      (s < l || s > u) && (this.scrollContainer.scrollLeft = s - (this.options.autoCenter ? f : 0));
      const d = s - i - f;
      t && this.options.autoCenter && d > 0 && (this.scrollContainer.scrollLeft += Math.min(d, 10));
    }
    {
      const d = this.scrollContainer.scrollLeft, p = d / r, m = (d + o) / r;
      this.emit("scroll", p, m, d, d + o);
    }
  }
  renderProgress(e, t) {
    if (isNaN(e)) return;
    const i = 100 * e;
    this.canvasWrapper.style.clipPath = `polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`, this.progressWrapper.style.width = `${i}%`, this.cursor.style.left = `${i}%`, this.cursor.style.transform = `translateX(-${Math.round(i) === 100 ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(e, t);
  }
  exportImage(e, t, i) {
    return S(this, void 0, void 0, function* () {
      const r = this.canvasWrapper.querySelectorAll("canvas");
      if (!r.length) throw new Error("No waveform data");
      if (i === "dataURL") {
        const o = Array.from(r).map((s) => s.toDataURL(e, t));
        return Promise.resolve(o);
      }
      return Promise.all(Array.from(r).map((o) => new Promise((s, l) => {
        o.toBlob((u) => {
          u ? s(u) : l(new Error("Could not export image"));
        }, e, t);
      })));
    });
  }
}
$.MAX_CANVAS_WIDTH = 8e3, $.MAX_NODES = 10;
class _e extends V {
  constructor() {
    super(...arguments), this.unsubscribe = () => {
    };
  }
  start() {
    this.unsubscribe = this.on("tick", () => {
      requestAnimationFrame(() => {
        this.emit("tick");
      });
    }), this.emit("tick");
  }
  stop() {
    this.unsubscribe();
  }
  destroy() {
    this.unsubscribe();
  }
}
class te extends V {
  constructor(e = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = e, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return S(this, void 0, void 0, function* () {
    });
  }
  get src() {
    return this.currentSrc;
  }
  set src(e) {
    if (this.currentSrc = e, this._duration = void 0, !e) return this.buffer = null, void this.emit("emptied");
    fetch(e).then((t) => {
      if (t.status >= 400) throw new Error(`Failed to fetch ${e}: ${t.status} (${t.statusText})`);
      return t.arrayBuffer();
    }).then((t) => this.currentSrc !== e ? null : this.audioContext.decodeAudioData(t)).then((t) => {
      this.currentSrc === e && (this.buffer = t, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    });
  }
  _play() {
    var e;
    if (!this.paused) return;
    this.paused = !1, (e = this.bufferNode) === null || e === void 0 || e.disconnect(), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let t = this.playedDuration * this._playbackRate;
    (t >= this.duration || t < 0) && (t = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, t), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var e;
    this.paused = !0, (e = this.bufferNode) === null || e === void 0 || e.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return S(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(e) {
    const t = e - this.currentTime, i = this.bufferNode;
    i == null || i.stop(this.audioContext.currentTime + t), i == null || i.addEventListener("ended", () => {
      i === this.bufferNode && (this.bufferNode = null, this.pause());
    }, { once: !0 });
  }
  setSinkId(e) {
    return S(this, void 0, void 0, function* () {
      return this.audioContext.setSinkId(e);
    });
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(e) {
    this._playbackRate = e, this.bufferNode && (this.bufferNode.playbackRate.value = e);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(e) {
    const t = !this.paused;
    t && this._pause(), this.playedDuration = e / this._playbackRate, t && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var e, t;
    return (e = this._duration) !== null && e !== void 0 ? e : ((t = this.buffer) === null || t === void 0 ? void 0 : t.duration) || 0;
  }
  set duration(e) {
    this._duration = e;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(e) {
    this.gainNode.gain.value = e, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(e) {
    this._muted !== e && (this._muted = e, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(e) {
    return /^(audio|video)\//.test(e);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const e = [];
    if (!this.buffer) return e;
    const t = this.buffer.numberOfChannels;
    for (let i = 0; i < t; i++) e.push(this.buffer.getChannelData(i));
    return e;
  }
}
const Ne = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class Y extends De {
  static create(e) {
    return new Y(e);
  }
  constructor(e) {
    const t = e.media || (e.backend === "WebAudio" ? new te() : void 0);
    super({ media: t, mediaControls: e.mediaControls, autoplay: e.autoplay, playbackRate: e.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, Ne, e), this.timer = new _e();
    const i = t ? void 0 : this.getMediaElement();
    this.renderer = new $(this.options, i), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const r = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const { peaks: o, duration: s } = this.options;
      (r || o && s) && this.load(r, o, s).catch(() => null);
    });
  }
  updateProgress(e = this.getCurrentTime()) {
    return this.renderer.renderProgress(e / this.getDuration(), this.isPlaying()), e;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", () => {
      if (!this.isSeeking()) {
        const e = this.updateProgress();
        this.emit("timeupdate", e), this.emit("audioprocess", e), this.stopAtPosition != null && this.isPlaying() && e >= this.stopAtPosition && this.pause();
      }
    }));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
      const e = this.updateProgress();
      this.emit("timeupdate", e);
    }), this.onMediaEvent("play", () => {
      this.emit("play"), this.timer.start();
    }), this.onMediaEvent("pause", () => {
      this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("emptied", () => {
      this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("ended", () => {
      this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
    }), this.onMediaEvent("seeking", () => {
      this.emit("seeking", this.getCurrentTime());
    }), this.onMediaEvent("error", () => {
      var e;
      this.emit("error", (e = this.getMediaElement().error) !== null && e !== void 0 ? e : new Error("Media error")), this.stopAtPosition = null;
    }));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", (e, t) => {
      this.options.interact && (this.seekTo(e), this.emit("interaction", e * this.getDuration()), this.emit("click", e, t));
    }), this.renderer.on("dblclick", (e, t) => {
      this.emit("dblclick", e, t);
    }), this.renderer.on("scroll", (e, t, i, r) => {
      const o = this.getDuration();
      this.emit("scroll", e * o, t * o, i, r);
    }), this.renderer.on("render", () => {
      this.emit("redraw");
    }), this.renderer.on("rendered", () => {
      this.emit("redrawcomplete");
    }), this.renderer.on("dragstart", (e) => {
      this.emit("dragstart", e);
    }), this.renderer.on("dragend", (e) => {
      this.emit("dragend", e);
    }));
    {
      let e;
      this.subscriptions.push(this.renderer.on("drag", (t) => {
        if (!this.options.interact) return;
        let i;
        this.renderer.renderProgress(t), clearTimeout(e), this.isPlaying() ? i = 0 : this.options.dragToSeek === !0 ? i = 200 : typeof this.options.dragToSeek == "object" && this.options.dragToSeek !== void 0 && (i = this.options.dragToSeek.debounceTime), e = setTimeout(() => {
          this.seekTo(t);
        }, i), this.emit("interaction", t * this.getDuration()), this.emit("drag", t);
      }));
    }
  }
  initPlugins() {
    var e;
    !((e = this.options.plugins) === null || e === void 0) && e.length && this.options.plugins.forEach((t) => {
      this.registerPlugin(t);
    });
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach((e) => e()), this.mediaSubscriptions = [];
  }
  setOptions(e) {
    this.options = Object.assign({}, this.options, e), e.duration && !e.peaks && (this.decodedData = U.createBuffer(this.exportPeaks(), e.duration)), e.peaks && e.duration && (this.decodedData = U.createBuffer(e.peaks, e.duration)), this.renderer.setOptions(this.options), e.audioRate && this.setPlaybackRate(e.audioRate), e.mediaControls != null && (this.getMediaElement().controls = e.mediaControls);
  }
  registerPlugin(e) {
    return e._init(this), this.plugins.push(e), this.subscriptions.push(e.once("destroy", () => {
      this.plugins = this.plugins.filter((t) => t !== e);
    })), e;
  }
  getWrapper() {
    return this.renderer.getWrapper();
  }
  getWidth() {
    return this.renderer.getWidth();
  }
  getScroll() {
    return this.renderer.getScroll();
  }
  setScroll(e) {
    return this.renderer.setScroll(e);
  }
  setScrollTime(e) {
    const t = e / this.getDuration();
    this.renderer.setScrollPercentage(t);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(e, t, i, r) {
    return S(this, void 0, void 0, function* () {
      var o;
      if (this.emit("load", e), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !t && !i) {
        const l = this.options.fetchParams || {};
        window.AbortController && !l.signal && (this.abortController = new AbortController(), l.signal = (o = this.abortController) === null || o === void 0 ? void 0 : o.signal);
        const u = (d) => this.emit("loading", d);
        t = yield je.fetchBlob(e, u, l);
        const f = this.options.blobMimeType;
        f && (t = new Blob([t], { type: f }));
      }
      this.setSrc(e, t);
      const s = yield new Promise((l) => {
        const u = r || this.getDuration();
        u ? l(u) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => l(this.getDuration()), { once: !0 }));
      });
      if (!e && !t) {
        const l = this.getMediaElement();
        l instanceof te && (l.duration = s);
      }
      if (i) this.decodedData = U.createBuffer(i, s || 0);
      else if (t) {
        const l = yield t.arrayBuffer();
        this.decodedData = yield U.decode(l, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e, t, i) {
    return S(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e, void 0, t, i);
      } catch (r) {
        throw this.emit("error", r), r;
      }
    });
  }
  loadBlob(e, t, i) {
    return S(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", e, t, i);
      } catch (r) {
        throw this.emit("error", r), r;
      }
    });
  }
  zoom(e) {
    if (!this.decodedData) throw new Error("No audio loaded");
    this.renderer.zoom(e), this.emit("zoom", e);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({ channels: e = 2, maxLength: t = 8e3, precision: i = 1e4 } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const r = Math.min(e, this.decodedData.numberOfChannels), o = [];
    for (let s = 0; s < r; s++) {
      const l = this.decodedData.getChannelData(s), u = [], f = l.length / t;
      for (let d = 0; d < t; d++) {
        const p = l.slice(Math.floor(d * f), Math.ceil((d + 1) * f));
        let m = 0;
        for (let g = 0; g < p.length; g++) {
          const w = p[g];
          Math.abs(w) > Math.abs(m) && (m = w);
        }
        u.push(Math.round(m * i) / i);
      }
      o.push(u);
    }
    return o;
  }
  getDuration() {
    let e = super.getDuration() || 0;
    return e !== 0 && e !== 1 / 0 || !this.decodedData || (e = this.decodedData.duration), e;
  }
  toggleInteraction(e) {
    this.options.interact = e;
  }
  setTime(e) {
    this.stopAtPosition = null, super.setTime(e), this.updateProgress(e), this.emit("timeupdate", e);
  }
  seekTo(e) {
    const t = this.getDuration() * e;
    this.setTime(t);
  }
  play(e, t) {
    const i = Object.create(null, { play: { get: () => super.play } });
    return S(this, void 0, void 0, function* () {
      e != null && this.setTime(e);
      const r = yield i.play.call(this);
      return t != null && (this.media instanceof te ? this.media.stopAt(t) : this.stopAtPosition = t), r;
    });
  }
  playPause() {
    return S(this, void 0, void 0, function* () {
      return this.isPlaying() ? this.pause() : this.play();
    });
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(e) {
    this.setTime(this.getCurrentTime() + e);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(e) {
    this.unsubscribePlayerEvents(), super.setMediaElement(e), this.initPlayerEvents();
  }
  exportImage() {
    return S(this, arguments, void 0, function* (e = "image/png", t = 1, i = "dataURL") {
      return this.renderer.exportImage(e, t, i);
    });
  }
  destroy() {
    var e;
    this.emit("destroy"), (e = this.abortController) === null || e === void 0 || e.abort(), this.plugins.forEach((t) => t.destroy()), this.subscriptions.forEach((t) => t()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
Y.BasePlugin = class extends V {
  constructor(n) {
    super(), this.subscriptions = [], this.options = n;
  }
  onInit() {
  }
  _init(n) {
    this.wavesurfer = n, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach((n) => n());
  }
}, Y.dom = Pe;
const We = (n, e) => {
  const [t, i] = N(null);
  return H(() => {
    if (!n.current) return;
    const r = Y.create({
      ...e,
      container: n.current
    });
    return i(r), () => {
      r.destroy();
    };
  }, [e, n]), t;
}, Oe = E.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 0.5em;
    width: 100%;

    justify-content: center;
    align-items: center;

    .waveform-time {
        margin-top: 0 !important;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    .play-icon {
        cursor: pointer;
        width: 48px;
        aspect-ratio: 1 / 1;
    }

    .volume-container {
        display: none;

        @media (min-width: 1024px) {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5em;
            margin-inline-start: 0.5em;
        }
    }

    .volume-icon {
        cursor: pointer;
        width: 20px;
        aspect-ratio: 1 / 1;
    }

    input[type='range'].styled-slider {
        height: 2.2em;
        -webkit-appearance: none;
        background: transparent;
        cursor: pointer;
    }

    /*progress support*/
    input[type='range'].styled-slider.slider-progress {
        --range: calc(var(--max) - var(--min));
        --ratio: calc((var(--value) - var(--min)) / var(--range));
        --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));
    }

    input[type='range'].styled-slider:focus {
        outline: none;
    }

    /*webkit*/
    input[type='range'].styled-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: #ffffff;
        border: none;
        box-shadow: 0 0 2px black;
        margin-top: calc(max((1em - 1px - 1px) * 0.5, 0px) - 2em * 0.5);
    }

    input[type='range'].styled-slider::-webkit-slider-runnable-track {
        height: 1em;
        border: 1px solid #b2b2b2;
        border-radius: 0.5em;
        background: #333333;
        box-shadow: none;
    }

    input[type='range'].styled-slider.slider-progress::-webkit-slider-runnable-track {
        background:
            linear-gradient(#940000, #940000) 0 / var(--sx) 100% no-repeat,
            #333333;
    }

    /*mozilla*/
    input[type='range'].styled-slider::-moz-range-thumb {
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: #ffffff;
        border: none;
        box-shadow: 0 0 2px black;
    }

    input[type='range'].styled-slider::-moz-range-track {
        height: max(calc(1em - 1px - 1px), 0px);
        border: 1px solid #b2b2b2;
        border-radius: 0.5em;
        background: #333333;
        box-shadow: none;
    }

    input[type='range'].styled-slider.slider-progress::-moz-range-track {
        background:
            linear-gradient(#940000, #940000) 0 / var(--sx) 100% no-repeat,
            #333333;
    }

    /*ms*/
    input[type='range'].styled-slider::-ms-fill-upper {
        background: transparent;
        border-color: transparent;
    }

    input[type='range'].styled-slider::-ms-fill-lower {
        background: transparent;
        border-color: transparent;
    }

    input[type='range'].styled-slider::-ms-thumb {
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: #ffffff;
        border: none;
        box-shadow: 0 0 2px black;
        margin-top: 0;
        box-sizing: border-box;
    }

    input[type='range'].styled-slider::-ms-track {
        height: 1em;
        border-radius: 0.5em;
        background: #333333;
        border: 1px solid #b2b2b2;
        box-shadow: none;
        box-sizing: border-box;
    }

    input[type='range'].styled-slider.slider-progress::-ms-fill-lower {
        height: max(calc(1em - 1px - 1px), 0px);
        border-radius: 0.5em 0 0 0.5em;
        margin: -1px 0 -1px -1px;
        background: #940000;
        border: 1px solid #b2b2b2;
        border-right-width: 0;
    }
`, Ae = ke((n) => {
  const e = X(null), [t, i] = N(!1), [r, o] = N(0.5), [s, l] = N(0), [u, f] = N(
    T(0)
  ), [d, p] = N(!1), m = We(e, n), g = X(null), { onPlay: w, onReady: C } = n, x = Re(() => {
    m.playPause();
  }, [m]);
  H(() => {
    if (!m) return;
    m.setVolume(r);
    const v = () => ({
      media: m.getMediaElement(),
      peaks: m.exportPeaks()
    }), h = [
      m.on("ready", () => {
        C && C(v()), l(
          T(
            Math.round(m.getDuration() * 1e3)
          )
        ), i(m.isPlaying());
      }),
      m.on("play", () => {
        w && w((b) => {
          const k = v();
          return !b || b.media !== k.media ? (b && (b.media.pause(), b.media.currentTime = 0), k) : b;
        }), i(!0);
      }),
      m.on("audioprocess", () => {
        f(
          T(
            Math.round(m.getCurrentTime() * 1e3)
          )
        );
      }),
      m.on("pause", () => i(!1))
    ];
    return () => {
      h.forEach((b) => b());
    };
  }, [m, w, C, r]), H(() => {
    const v = g.current;
    v.style.setProperty("--value", v.value), v.style.setProperty("--min", v.min === "" ? "0" : v.min), v.style.setProperty("--max", v.max === "" ? "100" : v.max), v.style.setProperty("--value", v.value);
  }, []);
  function T(v) {
    var h = Math.floor(v / 6e4), b = (v % 6e4 / 1e3).toFixed(0);
    return h + ":" + (b < 10 ? "0" : "") + b;
  }
  function R(v) {
    o(v.target.value);
    const h = v.target;
    h.style.setProperty("--value", h.value), h.style.setProperty("--min", h.min === "" ? "0" : h.min), h.style.setProperty("--max", h.max === "" ? "100" : h.max), h.style.setProperty("--value", h.value);
  }
  function D() {
    p(!d);
  }
  return /* @__PURE__ */ c.jsxs(Oe, { children: [
    t ? /* @__PURE__ */ c.jsx(
      "img",
      {
        className: "play-icon",
        src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",
        onClick: x
      }
    ) : /* @__PURE__ */ c.jsx(
      "img",
      {
        className: "play-icon",
        src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",
        onClick: x
      }
    ),
    /* @__PURE__ */ c.jsx("div", { ref: e, style: { width: "100%" } }),
    /* @__PURE__ */ c.jsxs("p", { className: "waveform-time", children: [
      /* @__PURE__ */ c.jsx("span", { children: u }),
      " / ",
      /* @__PURE__ */ c.jsx("span", { children: s })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "volume-container", children: [
      /* @__PURE__ */ c.jsx(
        "img",
        {
          className: "volume-icon",
          src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",
          onClick: D
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: g,
          className: "styled-slider slider-progress",
          type: "range",
          id: "volume-slider",
          min: 0,
          max: 1,
          step: 0.1,
          value: r,
          onChange: R,
          style: {
            opacity: d ? 1 : 0,
            pointerEvents: d ? "all" : "none"
          }
        }
      )
    ] })
  ] });
}), ne = Me`
  @font-face {
            font-family: Roboto-Regular;
            src: url(/d/fonts/Roboto/Roboto-Regular-1f6d3cf6d3.woff2) format("woff2"), url(/d/fonts/Roboto/Roboto-Regular.woff) format("woff"), url(/d/fonts/Roboto/Roboto-Regular.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto-Regular-fallback;
            src: local("Arial");
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            ascent-override: 92.49%;
            descent-override: 24.34%;
            line-gap-override: 0;
            size-adjust: 100.3%
        }

        @font-face {
            font-family: Roboto-Medium;
            src: url(/d/fonts/Roboto/Roboto-Medium-e7df3d0942.woff2) format("woff2"), url(/d/fonts/Roboto/Roboto-Medium.woff) format("woff"), url(/d/fonts/Roboto/Roboto-Medium.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto-Medium-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Arial");
            ascent-override: 91.62%;
            descent-override: 24.11%;
            line-gap-override: 0;
            size-adjust: 101.26%
        }

        @font-face {
            font-family: Roboto;
            src: url(/d/fonts/Roboto/Roboto-Regular-1f6d3cf6d3.woff2) format("woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto;
            src: url(/d/fonts/Roboto/Roboto-Medium-e7df3d0942.woff2) format("woff2");
            font-weight: 500;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto;
            src: url(/d/fonts/Roboto/Roboto-Bold-e9f5aaf547.woff2) format("woff2");
            font-weight: 700;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-dca82eac02.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-c93f4e13dd.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 87.46%;
            descent-override: 28.13%;
            line-gap-override: 0;
            size-adjust: 113.42%
        }

        @font-face {
            font-family: TimesDigitalW04-Regular;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-dca82eac02.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-c93f4e13dd.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-bf4b850ffb.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-Regular-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 87.46%;
            descent-override: 28.13%;
            line-gap-override: 0;
            size-adjust: 113.42%
        }

        @font-face {
            font-family: TimesDigitalW04-RegularSC;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-RegularSC-5fc97c82cd.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-RegularSC-a06bfa24de.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-RegularSC-b3f19b6c56.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-RegularSC-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 87.46%;
            descent-override: 28.13%;
            line-gap-override: 0;
            size-adjust: 113.42%
        }

        @font-face {
            font-family: TimesDigitalW04-Bold;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Bold-9a71df9f73.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-Bold-956d1db6de.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-Bold-e627de75c8.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-Bold-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 700;
            src: local("Times New Roman Bold");
            ascent-override: 86.91%;
            descent-override: 27.95%;
            line-gap-override: 0;
            size-adjust: 114.14%
        }

        @font-face {
            font-family: TimesDigitalW04-BoldItalic;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-BoldItalic-bc6071c2c8.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldItalic-8c36a2d2bd.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldItalic-2a78549947.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-BoldItalic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 700;
            src: local("Times New Roman Bold Italic");
            ascent-override: 84.79%;
            descent-override: 27.27%;
            line-gap-override: 0;
            size-adjust: 116.99%
        }

        @font-face {
            font-family: TimesDigitalW04-Italic;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Italic-b1475ca316.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-Italic-a577e30ef1.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-Italic-624f40f1d5.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-Italic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 400;
            src: local("Times New Roman Italic");
            ascent-override: 89.35%;
            descent-override: 28.73%;
            line-gap-override: 0;
            size-adjust: 111.02%
        }

        @font-face {
            font-family: TimesDigitalW04-BoldSC;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-BoldSC-cd2602db9d.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldSC-ddd4d0a956.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldSC-5099432df6.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-BoldSC-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 700;
            src: local("Times New Roman Bold");
            ascent-override: 86.91%;
            descent-override: 27.95%;
            line-gap-override: 0;
            size-adjust: 114.14%
        }

        @font-face {
            font-family: "Times Digital W04 Regular";
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-dca82eac02.woff2) format("woff2")
        }

        @font-face {
            font-family: TimesModern-Regular;
            src: url(/d/fonts/TimesModern/TimesModern-Regular-f3419df85d.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-Regular-39c619f4ef.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-Regular-e47b8c277b.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-Regular-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 71.84%;
            descent-override: 17.78%;
            line-gap-override: 6.72%;
            size-adjust: 96.74%
        }

        @font-face {
            font-family: TimesModern-Bold;
            src: url(/d/fonts/TimesModern/TimesModern-Bold-62eb027e67.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-Bold-828aec4ccd.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-Bold-a2020323c6.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-Bold-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 700;
            src: local("Times New Roman Bold");
            ascent-override: 73.8%;
            descent-override: 18.26%;
            line-gap-override: 6.9%;
            size-adjust: 94.18%
        }

        @font-face {
            font-family: TimesModern-ExtraBold-Italic;
            src: url(/d/fonts/TimesModern/TimesModern-ExtraBold-Italic-c71c30fb0b.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-ExtraBold-Italic-ad4b681d5b.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-ExtraBold-Italic-36c209071c.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-ExtraBold-Italic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 700;
            src: local("Times New Roman Bold Italic");
            ascent-override: 71.6%;
            descent-override: 17.82%;
            line-gap-override: 6.7%;
            size-adjust: 97.06%
        }

        @font-face {
            font-family: TimesModern-Italic;
            src: url(/d/fonts/TimesModern/TimesModern-Italic-cc70e7e7f9.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-Italic-c85a679cf5.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-Italic-2f957b4455.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-Italic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 400;
            src: local("Times New Roman Italic");
            ascent-override: 83.3%;
            descent-override: 21.13%;
            line-gap-override: 7.83%;
            size-adjust: 89.44%
        }

        @font-face {
            font-family: "Times Modern";
            src: url(/d/fonts/TimesModern/TimesModern-Regular-f3419df85d.woff2) format("woff2");
            font-display: swap;
            font-style: normal;
            font-weight: 400
        }

        @font-face {
            font-family: "Times Modern";
            src: url(/d/fonts/TimesModern/TimesModern-Bold-62eb027e67.woff2) format("woff2");
            font-display: swap;
            font-style: normal;
            font-weight: 700
        }

        @font-face {
            font-family: "Times Modern";
            src: url(/d/fonts/TimesModern/TimesModern-ExtraBold-afbbdbe2e3.woff2) format("woff2");
            font-display: swap;
            font-style: normal;
            font-weight: 800
        }

        @font-face {
            font-family: TimesModernMagazine;
            src: url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Bd-367d1488f7.woff2) format("woff2"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Bd-1fbe4b75f4.woff) format("woff"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Bd-2d23205196.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModernMagazine-fallback;
            src: local("Times New Roman");
            font-display: swap
        }

        @font-face {
            font-family: TimesModernMagazine-Lt;
            src: url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Lt-02f06ffbdb.woff2) format("woff2"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Lt-e73cf89261.woff) format("woff"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Lt-a35dbc7e66.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModernMagazine-Lt-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 97.73%;
            descent-override: 24.2%;
            line-gap-override: 0;
            size-adjust: 97.51%
        }

`, ve = E.div`
    margin-block-start: 1em;
    margin-block-end: 100px;
`, ze = E.div`
    font-family: 'RobotoRegular', sans-serif;

    background-color: black;
    color: white;
    margin: 40px 0;
    padding-block-start: 16px;
    padding-block-end: 8px;
    padding-inline: 12px;

    .card-image {
        width: 172px;
        aspect-ratio: 1 / 1;
    }

    .card-name {
        margin-block-start: 8px;
        margin-block-end: 0;
    }

    .card-quote {
        font-family: 'Times Modern', serif;
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
        text-align: left;

        color: #d9d9d9;
        margin-block-start: 12px;
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1em;

        .waveform-container {
            grid-column: 2 / 3;
            margin-block: 0.5em;
        }

        .card-image--container {
            grid-row: 1 / 3;
        }

        .card-quote {
            margin-block: 0;
        }

        .card-image {
            width: 100%;
        }

        .card-name {
            font-size: 1rem;
        }
    }
`;
function lt({ data: n }) {
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(ne, {}),
    /* @__PURE__ */ c.jsxs(ze, { children: [
      /* @__PURE__ */ c.jsxs("div", { className: "card-image--container", children: [
        /* @__PURE__ */ c.jsx(
          "img",
          {
            src: `https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${n.imgSrc}.jpg`,
            className: "card-image"
          }
        ),
        /* @__PURE__ */ c.jsx("p", { className: "card-name", children: n.name })
      ] }),
      /* @__PURE__ */ c.jsx("p", { className: "card-quote", children: n.quote }),
      /* @__PURE__ */ c.jsx(
        Ae,
        {
          height: 100,
          waveColor: "#ff0000",
          progressColor: "#940000",
          url: `https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${n.audioSrc}.m4a`,
          normalize: !0,
          barWidth: 2,
          barGap: 2,
          barRadius: 2,
          cursorWidth: 2
        },
        n.id
      )
    ] })
  ] });
}
var ie = {}, re = {}, pe;
function Le() {
  return pe || (pe = 1, function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e;
    function t(r, o, s) {
      return o in r ? Object.defineProperty(r, o, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = s, r;
    }
    var i = {
      digital: (e = {
        blue: {
          r: 37,
          g: 66,
          b: 81
        },
        yellow: {
          r: 224,
          g: 171,
          b: 38
        },
        lightBlue: {
          r: 224,
          g: 171,
          b: 38
        }
      }, t(e, "yellow", {
        r: 128,
        g: 177,
        b: 226
      }), t(e, "orange", {
        r: 243,
        g: 127,
        b: 47
      }), t(e, "teal", {
        r: 50,
        g: 146,
        b: 166
      }), t(e, "purple", {
        r: 108,
        g: 60,
        b: 94
      }), t(e, "sand", {
        r: 218,
        g: 207,
        b: 193
      }), e),
      ukPoliticalParties: {
        con: {
          r: 64,
          g: 147,
          b: 178
        },
        lab: {
          r: 236,
          g: 81,
          b: 86
        },
        libdem: {
          r: 246,
          g: 197,
          b: 94
        },
        ukip: {
          r: 151,
          g: 103,
          b: 174
        },
        snp: {
          r: 255,
          g: 246,
          b: 133
        },
        green: {
          r: 97,
          g: 169,
          b: 97
        },
        pc: {
          r: 144,
          g: 205,
          b: 124
        },
        dup: {
          r: 161,
          g: 82,
          b: 82
        },
        sf: {
          r: 68,
          g: 150,
          b: 107
        },
        sdlp: {
          r: 125,
          g: 161,
          b: 125
        },
        uup: {
          r: 63,
          g: 97,
          b: 124
        },
        others: {
          r: 160,
          g: 147,
          b: 143
        }
      }
    };
    n.default = i;
  }(re)), re;
}
var oe = {}, ge;
function Ie() {
  return ge || (ge = 1, function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = {
      micro: "400px",
      small: "520px",
      mobile: "768px",
      tablet: "1024px",
      desktop: "1200px",
      "desktop-wide": "1320px"
    };
    n.default = e;
  }(oe)), oe;
}
var be;
function $e() {
  return be || (be = 1, function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "colors", {
      enumerable: !0,
      get: function() {
        return e.default;
      }
    }), Object.defineProperty(n, "breakpoints", {
      enumerable: !0,
      get: function() {
        return t.default;
      }
    });
    var e = i(Le()), t = i(Ie());
    function i(r) {
      return r && r.__esModule ? r : { default: r };
    }
  }(ie)), ie;
}
$e();
const Be = E.div`
    .headline {
        font-family: 'RobotoRegular', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #232323;
        text-align: left;
        line-height: normal;
    }

    .standfirst {
        font-family: 'RobotoRegular', sans-serif;
        font-size: 18px;
        color: #232323;
        text-align: left;
    }

    padding-inline-start: 10px;

`;
function Fe({ headline: n, standfirst: e }) {
  return /* @__PURE__ */ c.jsxs(Be, { children: [
    n && /* @__PURE__ */ c.jsx("h1", { className: "headline", children: n }),
    e && /* @__PURE__ */ c.jsx("p", { className: "standfirst", children: e })
  ] });
}
const qe = E.div`
    margin-block: 1em;
    margin-inline: 10px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5em;

    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        gap: 1em;
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(7, 1fr);
        gap: 1em;
    }
`, He = E.img`
    width: 100%;
    height: 80px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${(n) => n.isHovered ? "1" : "0.5"};

    -webkit-filter: ${(n) => n.grayscale ? "grayscale(100%)" : "none"};
    filter: ${(n) => n.grayscale ? "grayscale(100%)" : "none"};

    transition: opacity 250ms ease-in;
`;
function Ye({
  data: n,
  clickedImage: e,
  setClickedImage: t,
  setShowTooltip: i,
  setTooltipPos: r
}) {
  function o(l, u) {
    t(u), i(!0), r([
      l.clientX,
      l.target.offsetTop + l.target.offsetHeight - 20
    ]);
  }
  const s = n.map((l) => /* @__PURE__ */ c.jsx(
    He,
    {
      src: `https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${l.imgSrc}.jpg`,
      alt: l.name,
      grayscale: !1,
      lazy: !0,
      onClick: (u) => o(u, l),
      isHovered: e === l
    },
    l.id
  ));
  return /* @__PURE__ */ c.jsx(qe, { children: s });
}
const Ve = E.div`
    position: absolute;
    left: 0px;
    top: ${(n) => n.isImageInLastRow ? n.tooltipPos[1] - 380 : n.tooltipPos[1]}px;

    margin-inline: 15%;
    padding: 0.5em;
    border: 1px solid #000;
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: flex-start;

    background-color: #ffffff;

    font-family: 'RobotoRegular', sans-serif;
    font-size: 1.6rem;

    opacity: ${(n) => n.showTooltip ? "1" : "0"};
    transition: opacity 250ms ease-in;

    .tooltip-image {
        object-fit: cover;
        width: 150px;
        height: 130px;

        @media (min-width: 768px) {
            height: 180px;
            margin-inline: auto;
            margin-block-start: 0;
            margin-block-end: 15px;
        }
    }

    .tooltip-content {
        h3 {
            font-size: 20px;
            margin-block-end: 10px;
            text-align: left;
        }
        p {
            text-align: left;
            font-size: 16px;
        }
    }

    .tooltip-close {
        font-family: 'RobotoRegular', sans-serif !important;
        font-size: 20px;
        font-weight: bold;

        position: absolute;
        top: 1rem;
        right: 1rem;

        cursor: pointer;

        background-color: inherit;
        border: none;

        opacity: 0.8;
        transition: opacity 250ms ease-in;

        &:hover {
            opacity: 1;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;

        .tooltip-content > h3 {
            margin-block-start: 10px;
        }
    }
`;
function Ge({
  clickedImage: n,
  setClickedImage: e,
  tooltipPos: t,
  showTooltip: i,
  setShowTooltip: r,
  isImageInLastRow: o
}) {
  if (!n) return;
  function s() {
    r(!1), e(null);
  }
  return /* @__PURE__ */ c.jsxs(
    Ve,
    {
      showTooltip: i,
      tooltipPos: t,
      isImageInLastRow: o,
      children: [
        /* @__PURE__ */ c.jsx(
          "img",
          {
            className: "tooltip-image",
            src: `https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${n.imgSrc}.jpg`,
            alt: n.name
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "tooltip-content", children: [
          /* @__PURE__ */ c.jsx("h3", { children: n.name }),
          /* @__PURE__ */ c.jsx("p", { children: n.copy })
        ] }),
        /* @__PURE__ */ c.jsx("button", { className: "tooltip-close", onClick: s, children: /* @__PURE__ */ c.jsx("img", { src: "https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg" }) })
      ]
    }
  );
}
function dt({ data: n }) {
  const [e, t] = N(null), [i, r] = N(!1), [o, s] = N([0, 0]);
  let u = n.length - n.indexOf(e) <= 7;
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(ne, {}),
    /* @__PURE__ */ c.jsxs(ve, { children: [
      /* @__PURE__ */ c.jsx(
        Fe,
        {
          headline: "Lorem ipsum dolor sit amet",
          standfirst: "Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"
        }
      ),
      /* @__PURE__ */ c.jsx(
        Ye,
        {
          data: n,
          clickedImage: e,
          setClickedImage: t,
          setShowTooltip: r,
          setTooltipPos: s
        }
      ),
      /* @__PURE__ */ c.jsx(
        Ge,
        {
          clickedImage: e,
          setClickedImage: t,
          showTooltip: i,
          setShowTooltip: r,
          tooltipPos: o,
          isImageInLastRow: u
        }
      )
    ] })
  ] });
}
E.div`
    position: relative;
    width: 100%;
`;
const Ue = E.div`
    position: sticky;
    top: 30vh;
    width: 100%;
    overflow: hidden;

    &.edge-to-edge {
        top: 0;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        height: 100vh !important;
    }

    &.bleed {
        top: 30vh;
        width: 40vw;
        margin-left: calc(50% - 20vw);
        height: 500px !important;
    }

    &.edge-to-edge iframe {
        height: 100vh;
    }
`, Xe = E.div`
    position: relative;
    width: 100%;
    height: 100%;
`, Je = E.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 0.4s ease;

    &.overlap {
        opacity: 1;
        pointer-events: auto;
    }
`, Ze = E.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`, Qe = E.p`
    line-height: 1.4;
    font-family: 'Times Modern', serif;
    font-size: ${({ size: n }) => n === "lg" ? "20px" : "16px"} !important;
    padding: 1rem;
    max-width: 600px;
    background: white;
    z-index: 1;
    font-size: 18px;
    line-height: 30px;
`;
function ct({ data: n }) {
  const {
    slides: e = [],
    imgFit: t = "cover",
    containerWidth: i = "edge-to-edge",
    borderRadius: r = "0",
    fixedImgHeight: o,
    fontSize: s = "md",
    videoLoop: l = !0,
    videoAutoplay: u = !0,
    videoControls: f = !1,
    videoMute: d = !0
  } = n, [p, m] = N(0), [g, w] = N([]), C = X([]), x = X([]);
  H(() => {
    const h = new IntersectionObserver(
      (b) => {
        b.forEach((k) => {
          if (k.isIntersecting) {
            const _ = parseInt(k.target.dataset.index, 10);
            m(_);
          }
        });
      },
      { threshold: 0.6 }
    );
    return C.current.forEach((b) => b && h.observe(b)), () => h.disconnect();
  }, [e.length]), H(() => {
    const h = e.map((b, k) => k === p);
    w(h);
  }, [p, e]);
  const T = (h) => g[h] ? 2 : 1, R = (h) => {
    var b;
    if (h.includes("youtube.com")) {
      const k = (b = h.split("v=")[1]) == null ? void 0 : b.split("&")[0];
      return `https://www.youtube.com/embed/${k}?autoplay=${u ? 1 : 0}&loop=${l ? 1 : 0}&controls=${f ? 1 : 0}&mute=${d ? 1 : 0}&playlist=${k}`;
    } else if (h.includes("vimeo.com"))
      return `https://player.vimeo.com/video/${h.split("/").pop()}?autoplay=${u ? 1 : 0}&loop=${l ? 1 : 0}&controls=${f ? 1 : 0}&muted=${d ? 1 : 0}`;
    return h;
  }, D = (h) => h.includes("youtube.com") || h.includes("youtu.be"), v = (h) => h.endsWith(".mp4");
  return /* @__PURE__ */ c.jsxs(ve, { children: [
    /* @__PURE__ */ c.jsx(
      Ue,
      {
        style: {
          height: o || "500px"
        },
        className: i === "edge-to-edge" ? "edge-to-edge" : i === "bleed" ? "bleed" : "",
        children: /* @__PURE__ */ c.jsx(Xe, { children: e.map((h, b) => /* @__PURE__ */ c.jsx(
          Je,
          {
            ref: (k) => x.current[b] = k,
            className: g[b] ? "overlap" : "",
            style: { zIndex: T(b) },
            children: D(h.media) ? /* @__PURE__ */ c.jsx(
              "iframe",
              {
                title: "YouTube video",
                src: R(h.media),
                frameBorder: "0",
                allow: "autoplay; encrypted-media",
                allowFullScreen: !0,
                style: {
                  objectFit: t,
                  width: "100%",
                  height: o || (i === "edge-to-edge" ? "100vh" : "100%"),
                  borderRadius: r
                }
              }
            ) : v(h.media) ? /* @__PURE__ */ c.jsx(
              "video",
              {
                autoPlay: u,
                loop: l,
                controls: f,
                muted: d,
                style: {
                  objectFit: t,
                  width: "100%",
                  height: o || "100%",
                  borderRadius: r
                },
                children: /* @__PURE__ */ c.jsx(
                  "source",
                  {
                    src: h.media,
                    type: "video/mp4"
                  }
                )
              }
            ) : /* @__PURE__ */ c.jsx(
              "img",
              {
                src: h.media,
                alt: h.altText || "Slide image",
                style: {
                  objectFit: t,
                  width: "100%",
                  height: o || "100%",
                  borderRadius: r
                }
              }
            )
          },
          b
        )) })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "scroller-sections", children: e.map((h, b) => /* @__PURE__ */ c.jsx(
      Ze,
      {
        className: "trigger",
        "data-index": b,
        ref: (k) => C.current[b] = k,
        children: h.text && /* @__PURE__ */ c.jsx(
          Qe,
          {
            size: s,
            dangerouslySetInnerHTML: { __html: h.text }
          }
        )
      },
      b
    )) })
  ] });
}
const Ke = E.div`
    h3 {
        line-height: 20px;
        color: #000;
        font-family: 'Times Modern', serif;
        font-size: 22px;
        font-weight: 700;
        margin: 0 auto;
        padding: 0 0 4px;
        text-align: left;
    }

    h4 {
        line-height: 20px;
        color: #000;
        font-family: 'Times Modern', serif;
        font-size: 16px;
        font-weight: 400;
        margin: 0 auto 15px;
        padding: 0 0 4px;
        text-align: left;
    }

    .chart-title {
        line-height: 20px;
        color: #000;
        font-family: 'Times Modern', serif;
        font-size: 16px;
        font-weight: 400;
        margin: 0 auto 15px;
        padding: 0 0 4px;
        text-align: left;
    }

    .note {
        color: rgb(51, 51, 51);
        font-family: Roboto-Regular, Roboto-Regular-fallback, sans-serif;
        font-size: 9px;
        line-height: 17px;
        margin-bottom: 0px;
        font-weight: 400;
        letter-spacing: 0.5px;
        text-align: left;
    }
`, et = ({ data: n = {}, children: e }) => {
  const {
    hed: t = "",
    dek: i = "",
    chartTitle: r = "",
    note: o = "",
    source: s = ""
  } = n;
  return /* @__PURE__ */ c.jsxs(Ke, { children: [
    t && /* @__PURE__ */ c.jsx("h3", { children: t }),
    i && /* @__PURE__ */ c.jsx("h4", { children: i }),
    r && /* @__PURE__ */ c.jsx("p", { className: "chart-title", children: r }),
    e,
    (o || s) && /* @__PURE__ */ c.jsxs("div", { className: "note-container", children: [
      o && /* @__PURE__ */ c.jsx("p", { className: "note", children: o }),
      s && /* @__PURE__ */ c.jsx("p", { className: "note", children: s })
    ] })
  ] });
}, tt = E.div`
    display: block;
    margin: 20px auto;
    position: relative;

    &.bleed {
        width: 80vw;
        margin-left: calc(-50vw + 50%);
        padding: 0 10vw;
    }

    &.edge-to-edge {
        width: 96vw;
        margin-left: calc(-48vw + 50%);
    }

    @media (max-width: 767px) {
        padding: 0 14px !important;
        &.bleed {
            padding: 0;
        }
    }
`, it = E.div`
    margin-top: 10px;
    text-align: left;
    font-family: 'Times Modern', serif;
    p {
        font-family: 'Times Modern', serif;
        font-size: 14px;
        color: rgb(105, 105, 105);
        line-height: 19px;
        margin-bottom: 4px;
        text-align: left;
    }
`, rt = E.div`
    position: absolute;
    top: 0;
    background-color: black;
    color: #fff;
    padding: 10px;
    font-family: 'Times Modern', serif;
    border-radius: ${({ $imgBorderRadius: n }) => `${n} 0 0 0`};

    p {
        color: #fff;
        font-size: 12px;
        margin: 0;
    }
`, ot = E.div`
    position: relative;

    iframe,
    video,
    img {
        width: 100%;
        height: auto;
        border: none;
        ${({ $containerWidth: n, $fixedImgHeight: e, $imgBorderRadius: t }) => n === "edge-to-edge" ? ee`
                    height: 100vh;
                    object-fit: cover;
                    border-radius: ${t};
                ` : n === "bleed" || n === "inline" && e ? ee`
                    height: ${e};
                    object-fit: cover;
                    border-radius: ${t};
                ` : ee`
                border-radius: ${t};
            `}
    }
`, nt = (n, e, t, i, r) => {
  var o;
  if (n.includes("youtube.com")) {
    const s = (o = n.split("v=")[1]) == null ? void 0 : o.split("&")[0];
    return `https://www.youtube.com/embed/${s}?autoplay=${e ? 1 : 0}&loop=${t ? 1 : 0}&controls=${i ? 1 : 0}&mute=${r ? 1 : 0}&playlist=${s}`;
  } else if (n.includes("vimeo.com"))
    return `https://player.vimeo.com/video/${n.split("/").pop()}?autoplay=${e ? 1 : 0}&loop=${t ? 1 : 0}&controls=${i ? 1 : 0}&muted=${r ? 1 : 0}`;
  return n;
}, ut = ({ data: n }) => {
  if (!n) return null;
  const {
    fixedImgHeight: e = null,
    containerWidth: t = "inline",
    imgBorderRadius: i = null,
    media: r = "",
    videoLoop: o = "true",
    videoAutoplay: s = "true",
    videoControls: l = "false",
    videoMute: u = "true",
    text: f,
    caption: d,
    altText: p
  } = n, x = nt(
    r,
    s === !0,
    o === !0,
    l === !0,
    u === !0
  ), T = /* @__PURE__ */ c.jsxs(
    ot,
    {
      $containerWidth: t,
      $fixedImgHeight: e,
      $imgBorderRadius: i,
      children: [
        r.includes("youtube.com") || r.includes("vimeo.com") ? /* @__PURE__ */ c.jsx(
          "iframe",
          {
            src: x,
            title: "Embedded media",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0
          }
        ) : r.endsWith(".mp4") ? /* @__PURE__ */ c.jsxs(
          "video",
          {
            autoPlay: s,
            loop: o,
            controls: l,
            muted: u,
            children: [
              /* @__PURE__ */ c.jsx("source", { src: r, type: "video/mp4" }),
              /* @__PURE__ */ c.jsx(
                "track",
                {
                  kind: "captions",
                  src: r.replace(".mp4", ".vtt"),
                  label: "English"
                }
              ),
              "Your browser does not support the video tag."
            ]
          }
        ) : /* @__PURE__ */ c.jsx("img", { src: r, alt: p }),
        f && /* @__PURE__ */ c.jsx(
          it,
          {
            $imgBorderRadius: i,
            dangerouslySetInnerHTML: { __html: f }
          }
        ),
        d && /* @__PURE__ */ c.jsx(
          rt,
          {
            $imgBorderRadius: i,
            dangerouslySetInnerHTML: { __html: d }
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(ne, {}),
    /* @__PURE__ */ c.jsx(tt, { className: t, children: /* @__PURE__ */ c.jsx(et, { data: n, children: T }) })
  ] });
};
export {
  lt as AudioPlayer,
  Ae as Equalizer,
  Ye as Grid,
  Fe as Header,
  dt as ImageGrid,
  ut as MediaBlock,
  ct as ScrollStory,
  Ge as Tooltip
};
