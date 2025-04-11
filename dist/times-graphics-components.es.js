import we, { useState as A, useEffect as ie, memo as ke, useRef as ce, useCallback as Ce } from "react";
import W, { createGlobalStyle as Ee } from "styled-components";
var V = { exports: {} }, q = {};
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
function Pe() {
  if (ue) return q;
  ue = 1;
  var s = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, i, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      n = {};
      for (var l in i)
        l !== "key" && (n[l] = i[l]);
    } else n = i;
    return i = n.ref, {
      $$typeof: s,
      type: r,
      key: a,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return q.Fragment = e, q.jsx = t, q.jsxs = t, q;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Re() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && function() {
    function s(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === D ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case P:
          return "Fragment";
        case w:
          return "Profiler";
        case x:
          return "StrictMode";
        case f:
          return "Suspense";
        case k:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case y:
            return "Portal";
          case _:
            return (o.displayName || "Context") + ".Provider";
          case E:
            return (o._context.displayName || "Context") + ".Consumer";
          case v:
            var g = o.render;
            return o = o.displayName, o || (o = g.displayName || g.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case M:
            return g = o.displayName || null, g !== null ? g : s(o.type) || "Memo";
          case O:
            g = o._payload, o = o._init;
            try {
              return s(o(g));
            } catch {
            }
        }
      return null;
    }
    function e(o) {
      return "" + o;
    }
    function t(o) {
      try {
        e(o);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var C = g.error, S = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return C.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), e(o);
      }
    }
    function r(o) {
      if (o === P) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === O)
        return "<...>";
      try {
        var g = s(o);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var o = $.A;
      return o === null ? null : o.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (B.call(o, "key")) {
        var g = Object.getOwnPropertyDescriptor(o, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function l(o, g) {
      function C() {
        ne || (ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: C,
        configurable: !0
      });
    }
    function u() {
      var o = s(this.type);
      return se[o] || (se[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function d(o, g, C, S, L, j, X, J) {
      return C = j.ref, o = {
        $$typeof: m,
        type: o,
        key: g,
        props: j,
        _owner: L
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function c(o, g, C, S, L, j, X, J) {
      var T = g.children;
      if (T !== void 0)
        if (S)
          if (ye(T)) {
            for (S = 0; S < T.length; S++)
              p(T[S]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(T);
      if (B.call(g, "key")) {
        T = s(o);
        var z = Object.keys(g).filter(function(xe) {
          return xe !== "key";
        });
        S = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", le[T + S] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          T,
          z,
          T
        ), le[T + S] = !0);
      }
      if (T = null, C !== void 0 && (t(C), T = "" + C), a(g) && (t(g.key), T = "" + g.key), "key" in g) {
        C = {};
        for (var Z in g)
          Z !== "key" && (C[Z] = g[Z]);
      } else C = g;
      return T && l(
        C,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), d(
        o,
        T,
        j,
        L,
        i(),
        C,
        X,
        J
      );
    }
    function p(o) {
      typeof o == "object" && o !== null && o.$$typeof === m && o._store && (o._store.validated = 1);
    }
    var h = we, m = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), $ = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, ye = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(o) {
        return o();
      }
    };
    var ne, se = {}, oe = h["react-stack-bottom-frame"].bind(
      h,
      n
    )(), ae = U(r(n)), le = {};
    F.Fragment = P, F.jsx = function(o, g, C, S, L) {
      var j = 1e4 > $.recentlyCreatedOwnerStacks++;
      return c(
        o,
        g,
        C,
        !1,
        S,
        L,
        j ? Error("react-stack-top-frame") : oe,
        j ? U(r(o)) : ae
      );
    }, F.jsxs = function(o, g, C, S, L) {
      var j = 1e4 > $.recentlyCreatedOwnerStacks++;
      return c(
        o,
        g,
        C,
        !0,
        S,
        L,
        j ? Error("react-stack-top-frame") : oe,
        j ? U(r(o)) : ae
      );
    };
  }()), F;
}
var he;
function Se() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? V.exports = Pe() : V.exports = Re()), V.exports;
}
var b = Se();
function R(s, e, t, r) {
  return new (t || (t = Promise))(function(i, n) {
    function a(d) {
      try {
        u(r.next(d));
      } catch (c) {
        n(c);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (c) {
        n(c);
      }
    }
    function u(d) {
      var c;
      d.done ? i(d.value) : (c = d.value, c instanceof t ? c : new t(function(p) {
        p(c);
      })).then(a, l);
    }
    u((r = r.apply(s, e || [])).next());
  });
}
class H {
  constructor() {
    this.listeners = {};
  }
  on(e, t, r) {
    if (this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), this.listeners[e].add(t), r == null ? void 0 : r.once) {
      const i = () => {
        this.un(e, i), this.un(e, t);
      };
      return this.on(e, i), i;
    }
    return () => this.un(e, t);
  }
  un(e, t) {
    var r;
    (r = this.listeners[e]) === null || r === void 0 || r.delete(t);
  }
  once(e, t) {
    return this.on(e, t, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(e, ...t) {
    this.listeners[e] && this.listeners[e].forEach((r) => r(...t));
  }
}
const G = { decode: function(s, e) {
  return R(this, void 0, void 0, function* () {
    const t = new AudioContext({ sampleRate: e });
    return t.decodeAudioData(s).finally(() => t.close());
  });
}, createBuffer: function(s, e) {
  return typeof s[0] == "number" && (s = [s]), function(t) {
    const r = t[0];
    if (r.some((i) => i > 1 || i < -1)) {
      const i = r.length;
      let n = 0;
      for (let a = 0; a < i; a++) {
        const l = Math.abs(r[a]);
        l > n && (n = l);
      }
      for (const a of t) for (let l = 0; l < i; l++) a[l] /= n;
    }
  }(s), { duration: e, length: s[0].length, sampleRate: s[0].length / e, numberOfChannels: s.length, getChannelData: (t) => s == null ? void 0 : s[t], copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function be(s, e) {
  const t = e.xmlns ? document.createElementNS(e.xmlns, s) : document.createElement(s);
  for (const [r, i] of Object.entries(e)) if (r === "children") for (const [n, a] of Object.entries(e)) typeof a == "string" ? t.appendChild(document.createTextNode(a)) : t.appendChild(be(n, a));
  else r === "style" ? Object.assign(t.style, i) : r === "textContent" ? t.textContent = i : t.setAttribute(r, i.toString());
  return t;
}
function pe(s, e, t) {
  const r = be(s, e || {});
  return t == null || t.appendChild(r), r;
}
var Te = Object.freeze({ __proto__: null, createElement: pe, default: pe });
const _e = { fetchBlob: function(s, e, t) {
  return R(this, void 0, void 0, function* () {
    const r = yield fetch(s, t);
    if (r.status >= 400) throw new Error(`Failed to fetch ${s}: ${r.status} (${r.statusText})`);
    return function(i, n) {
      R(this, void 0, void 0, function* () {
        if (!i.body || !i.headers) return;
        const a = i.body.getReader(), l = Number(i.headers.get("Content-Length")) || 0;
        let u = 0;
        const d = (p) => R(this, void 0, void 0, function* () {
          u += (p == null ? void 0 : p.length) || 0;
          const h = Math.round(u / l * 100);
          n(h);
        }), c = () => R(this, void 0, void 0, function* () {
          let p;
          try {
            p = yield a.read();
          } catch {
            return;
          }
          p.done || (d(p.value), yield c());
        });
        c();
      });
    }(r.clone(), e), r.blob();
  });
} };
class Me extends H {
  constructor(e) {
    super(), this.isExternalMedia = !1, e.media ? (this.media = e.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), e.mediaControls && (this.media.controls = !0), e.autoplay && (this.media.autoplay = !0), e.playbackRate != null && this.onMediaEvent("canplay", () => {
      e.playbackRate != null && (this.media.playbackRate = e.playbackRate);
    }, { once: !0 });
  }
  onMediaEvent(e, t, r) {
    return this.media.addEventListener(e, t, r), () => this.media.removeEventListener(e, t, r);
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
    const r = this.getSrc();
    if (e && r === e) return;
    this.revokeSrc();
    const i = t instanceof Blob && (this.canPlayType(t.type) || !e) ? URL.createObjectURL(t) : e;
    r && (this.media.src = "");
    try {
      this.media.src = i;
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
    return R(this, void 0, void 0, function* () {
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
class I extends H {
  constructor(e, t) {
    super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = e;
    const r = this.parentFromOptionsContainer(e.container);
    this.parent = r;
    const [i, n] = this.initHtml();
    r.appendChild(i), this.container = i, this.scrollContainer = n.querySelector(".scroll"), this.wrapper = n.querySelector(".wrapper"), this.canvasWrapper = n.querySelector(".canvases"), this.progressWrapper = n.querySelector(".progress"), this.cursor = n.querySelector(".cursor"), t && n.appendChild(t), this.initEvents();
  }
  parentFromOptionsContainer(e) {
    let t;
    if (typeof e == "string" ? t = document.querySelector(e) : e instanceof HTMLElement && (t = e), !t) throw new Error("Container not found");
    return t;
  }
  initEvents() {
    const e = (t) => {
      const r = this.wrapper.getBoundingClientRect(), i = t.clientX - r.left, n = t.clientY - r.top;
      return [i / r.width, n / r.height];
    };
    if (this.wrapper.addEventListener("click", (t) => {
      const [r, i] = e(t);
      this.emit("click", r, i);
    }), this.wrapper.addEventListener("dblclick", (t) => {
      const [r, i] = e(t);
      this.emit("dblclick", r, i);
    }), this.options.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const { scrollLeft: t, scrollWidth: r, clientWidth: i } = this.scrollContainer, n = t / r, a = (t + i) / r;
      this.emit("scroll", n, a, t, t + i);
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
    this.subscriptions.push(function(e, t, r, i, n = 3, a = 0, l = 100) {
      if (!e) return () => {
      };
      const u = matchMedia("(pointer: coarse)").matches;
      let d = () => {
      };
      const c = (p) => {
        if (p.button !== a) return;
        p.preventDefault(), p.stopPropagation();
        let h = p.clientX, m = p.clientY, y = !1;
        const P = Date.now(), x = (f) => {
          if (f.preventDefault(), f.stopPropagation(), u && Date.now() - P < l) return;
          const k = f.clientX, M = f.clientY, O = k - h, N = M - m;
          if (y || Math.abs(O) > n || Math.abs(N) > n) {
            const D = e.getBoundingClientRect(), { left: $, top: B } = D;
            y || (r == null || r(h - $, m - B), y = !0), t(O, N, k - $, M - B), h = k, m = M;
          }
        }, w = (f) => {
          if (y) {
            const k = f.clientX, M = f.clientY, O = e.getBoundingClientRect(), { left: N, top: D } = O;
            i == null || i(k - N, M - D);
          }
          d();
        }, E = (f) => {
          f.relatedTarget && f.relatedTarget !== document.documentElement || w(f);
        }, _ = (f) => {
          y && (f.stopPropagation(), f.preventDefault());
        }, v = (f) => {
          y && f.preventDefault();
        };
        document.addEventListener("pointermove", x), document.addEventListener("pointerup", w), document.addEventListener("pointerout", E), document.addEventListener("pointercancel", E), document.addEventListener("touchmove", v, { passive: !1 }), document.addEventListener("click", _, { capture: !0 }), d = () => {
          document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", w), document.removeEventListener("pointerout", E), document.removeEventListener("pointercancel", E), document.removeEventListener("touchmove", v), setTimeout(() => {
            document.removeEventListener("click", _, { capture: !0 });
          }, 10);
        };
      };
      return e.addEventListener("pointerdown", c), () => {
        d(), e.removeEventListener("pointerdown", c);
      };
    }(this.wrapper, (e, t, r) => {
      this.emit("drag", Math.max(0, Math.min(1, r / this.wrapper.getBoundingClientRect().width)));
    }, (e) => {
      this.isDragging = !0, this.emit("dragstart", Math.max(0, Math.min(1, e / this.wrapper.getBoundingClientRect().width)));
    }, (e) => {
      this.isDragging = !1, this.emit("dragend", Math.max(0, Math.min(1, e / this.wrapper.getBoundingClientRect().width)));
    }));
  }
  getHeight(e, t) {
    var r;
    const i = ((r = this.audioData) === null || r === void 0 ? void 0 : r.numberOfChannels) || 1;
    if (e == null) return 128;
    if (!isNaN(Number(e))) return Number(e);
    if (e === "auto") {
      const n = this.parent.clientHeight || 128;
      return t != null && t.every((a) => !a.overlay) ? n / i : n;
    }
    return 128;
  }
  initHtml() {
    const e = document.createElement("div"), t = e.attachShadow({ mode: "open" }), r = this.options.cspNonce && typeof this.options.cspNonce == "string" ? this.options.cspNonce.replace(/"/g, "") : "";
    return t.innerHTML = `
      <style${r ? ` nonce="${r}"` : ""}>
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
    const { scrollWidth: t } = this.scrollContainer, r = t * e;
    this.setScroll(r);
  }
  destroy() {
    var e, t;
    this.subscriptions.forEach((r) => r()), this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.unsubscribeOnScroll) === null || t === void 0 || t.forEach((r) => r()), this.unsubscribeOnScroll = [];
  }
  createDelay(e = 10) {
    let t, r;
    const i = () => {
      t && clearTimeout(t), r && r();
    };
    return this.timeouts.push(i), () => new Promise((n, a) => {
      i(), r = a, t = setTimeout(() => {
        t = void 0, r = void 0, n();
      }, e);
    });
  }
  convertColorValues(e) {
    if (!Array.isArray(e)) return e || "";
    if (e.length < 2) return e[0] || "";
    const t = document.createElement("canvas"), r = t.getContext("2d"), i = t.height * (window.devicePixelRatio || 1), n = r.createLinearGradient(0, 0, 0, i), a = 1 / (e.length - 1);
    return e.forEach((l, u) => {
      const d = u * a;
      n.addColorStop(d, l);
    }), n;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(e, t, r, i) {
    const n = e[0], a = e[1] || e[0], l = n.length, { width: u, height: d } = r.canvas, c = d / 2, p = this.getPixelRatio(), h = t.barWidth ? t.barWidth * p : 1, m = t.barGap ? t.barGap * p : t.barWidth ? h / 2 : 0, y = t.barRadius || 0, P = u / (h + m) / l, x = y && "roundRect" in r ? "roundRect" : "rect";
    r.beginPath();
    let w = 0, E = 0, _ = 0;
    for (let v = 0; v <= l; v++) {
      const f = Math.round(v * P);
      if (f > w) {
        const O = Math.round(E * c * i), N = O + Math.round(_ * c * i) || 1;
        let D = c - O;
        t.barAlign === "top" ? D = 0 : t.barAlign === "bottom" && (D = d - N), r[x](w * (h + m), D, h, N, y), w = f, E = 0, _ = 0;
      }
      const k = Math.abs(n[v] || 0), M = Math.abs(a[v] || 0);
      k > E && (E = k), M > _ && (_ = M);
    }
    r.fill(), r.closePath();
  }
  renderLineWaveform(e, t, r, i) {
    const n = (a) => {
      const l = e[a] || e[0], u = l.length, { height: d } = r.canvas, c = d / 2, p = r.canvas.width / u;
      r.moveTo(0, c);
      let h = 0, m = 0;
      for (let y = 0; y <= u; y++) {
        const P = Math.round(y * p);
        if (P > h) {
          const w = c + (Math.round(m * c * i) || 1) * (a === 0 ? -1 : 1);
          r.lineTo(h, w), h = P, m = 0;
        }
        const x = Math.abs(l[y] || 0);
        x > m && (m = x);
      }
      r.lineTo(h, c);
    };
    r.beginPath(), n(0), n(1), r.fill(), r.closePath();
  }
  renderWaveform(e, t, r) {
    if (r.fillStyle = this.convertColorValues(t.waveColor), t.renderFunction) return void t.renderFunction(e, r);
    let i = t.barHeight || 1;
    if (t.normalize) {
      const n = Array.from(e[0]).reduce((a, l) => Math.max(a, Math.abs(l)), 0);
      i = n ? 1 / n : 1;
    }
    t.barWidth || t.barGap || t.barAlign ? this.renderBarWaveform(e, t, r, i) : this.renderLineWaveform(e, t, r, i);
  }
  renderSingleCanvas(e, t, r, i, n, a, l) {
    const u = this.getPixelRatio(), d = document.createElement("canvas");
    d.width = Math.round(r * u), d.height = Math.round(i * u), d.style.width = `${r}px`, d.style.height = `${i}px`, d.style.left = `${Math.round(n)}px`, a.appendChild(d);
    const c = d.getContext("2d");
    if (this.renderWaveform(e, t, c), d.width > 0 && d.height > 0) {
      const p = d.cloneNode(), h = p.getContext("2d");
      h.drawImage(d, 0, 0), h.globalCompositeOperation = "source-in", h.fillStyle = this.convertColorValues(t.progressColor), h.fillRect(0, 0, d.width, d.height), l.appendChild(p);
    }
  }
  renderMultiCanvas(e, t, r, i, n, a) {
    const l = this.getPixelRatio(), { clientWidth: u } = this.scrollContainer, d = r / l;
    let c = Math.min(I.MAX_CANVAS_WIDTH, u, d), p = {};
    if (c === 0) return;
    if (t.barWidth || t.barGap) {
      const x = t.barWidth || 0.5, w = x + (t.barGap || x / 2);
      c % w != 0 && (c = Math.floor(c / w) * w);
    }
    const h = (x) => {
      if (x < 0 || x >= m || p[x]) return;
      p[x] = !0;
      const w = x * c, E = Math.min(d - w, c);
      if (E <= 0) return;
      const _ = e.map((v) => {
        const f = Math.floor(w / d * v.length), k = Math.floor((w + E) / d * v.length);
        return v.slice(f, k);
      });
      this.renderSingleCanvas(_, t, E, i, w, n, a);
    }, m = Math.ceil(d / c);
    if (!this.isScrollable) {
      for (let x = 0; x < m; x++) h(x);
      return;
    }
    const y = this.scrollContainer.scrollLeft / d, P = Math.floor(y * m);
    if (h(P - 1), h(P), h(P + 1), m > 1) {
      const x = this.on("scroll", () => {
        const { scrollLeft: w } = this.scrollContainer, E = Math.floor(w / d * m);
        Object.keys(p).length > I.MAX_NODES && (n.innerHTML = "", a.innerHTML = "", p = {}), h(E - 1), h(E), h(E + 1);
      });
      this.unsubscribeOnScroll.push(x);
    }
  }
  renderChannel(e, t, r, i) {
    var { overlay: n } = t, a = function(c, p) {
      var h = {};
      for (var m in c) Object.prototype.hasOwnProperty.call(c, m) && p.indexOf(m) < 0 && (h[m] = c[m]);
      if (c != null && typeof Object.getOwnPropertySymbols == "function") {
        var y = 0;
        for (m = Object.getOwnPropertySymbols(c); y < m.length; y++) p.indexOf(m[y]) < 0 && Object.prototype.propertyIsEnumerable.call(c, m[y]) && (h[m[y]] = c[m[y]]);
      }
      return h;
    }(t, ["overlay"]);
    const l = document.createElement("div"), u = this.getHeight(a.height, a.splitChannels);
    l.style.height = `${u}px`, n && i > 0 && (l.style.marginTop = `-${u}px`), this.canvasWrapper.style.minHeight = `${u}px`, this.canvasWrapper.appendChild(l);
    const d = l.cloneNode();
    this.progressWrapper.appendChild(d), this.renderMultiCanvas(e, a, r, u, l, d);
  }
  render(e) {
    return R(this, void 0, void 0, function* () {
      var t;
      this.timeouts.forEach((u) => u()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", this.options.width != null && (this.scrollContainer.style.width = typeof this.options.width == "number" ? `${this.options.width}px` : this.options.width);
      const r = this.getPixelRatio(), i = this.scrollContainer.clientWidth, n = Math.ceil(e.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = n > i;
      const a = this.options.fillParent && !this.isScrollable, l = (a ? i : n) * r;
      if (this.wrapper.style.width = a ? "100%" : `${n}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e, this.emit("render"), this.options.splitChannels) for (let u = 0; u < e.numberOfChannels; u++) {
        const d = Object.assign(Object.assign({}, this.options), (t = this.options.splitChannels) === null || t === void 0 ? void 0 : t[u]);
        this.renderChannel([e.getChannelData(u)], d, l, u);
      }
      else {
        const u = [e.getChannelData(0)];
        e.numberOfChannels > 1 && u.push(e.getChannelData(1)), this.renderChannel(u, this.options, l, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    if (this.unsubscribeOnScroll.forEach((r) => r()), this.unsubscribeOnScroll = [], !this.audioData) return;
    const { scrollWidth: e } = this.scrollContainer, { right: t } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && e !== this.scrollContainer.scrollWidth) {
      const { right: r } = this.progressWrapper.getBoundingClientRect();
      let i = r - t;
      i *= 2, i = i < 0 ? Math.floor(i) : Math.ceil(i), i /= 2, this.scrollContainer.scrollLeft += i;
    }
  }
  zoom(e) {
    this.options.minPxPerSec = e, this.reRender();
  }
  scrollIntoView(e, t = !1) {
    const { scrollLeft: r, scrollWidth: i, clientWidth: n } = this.scrollContainer, a = e * i, l = r, u = r + n, d = n / 2;
    if (this.isDragging)
      a + 30 > u ? this.scrollContainer.scrollLeft += 30 : a - 30 < l && (this.scrollContainer.scrollLeft -= 30);
    else {
      (a < l || a > u) && (this.scrollContainer.scrollLeft = a - (this.options.autoCenter ? d : 0));
      const c = a - r - d;
      t && this.options.autoCenter && c > 0 && (this.scrollContainer.scrollLeft += Math.min(c, 10));
    }
    {
      const c = this.scrollContainer.scrollLeft, p = c / i, h = (c + n) / i;
      this.emit("scroll", p, h, c, c + n);
    }
  }
  renderProgress(e, t) {
    if (isNaN(e)) return;
    const r = 100 * e;
    this.canvasWrapper.style.clipPath = `polygon(${r}% 0, 100% 0, 100% 100%, ${r}% 100%)`, this.progressWrapper.style.width = `${r}%`, this.cursor.style.left = `${r}%`, this.cursor.style.transform = `translateX(-${Math.round(r) === 100 ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(e, t);
  }
  exportImage(e, t, r) {
    return R(this, void 0, void 0, function* () {
      const i = this.canvasWrapper.querySelectorAll("canvas");
      if (!i.length) throw new Error("No waveform data");
      if (r === "dataURL") {
        const n = Array.from(i).map((a) => a.toDataURL(e, t));
        return Promise.resolve(n);
      }
      return Promise.all(Array.from(i).map((n) => new Promise((a, l) => {
        n.toBlob((u) => {
          u ? a(u) : l(new Error("Could not export image"));
        }, e, t);
      })));
    });
  }
}
I.MAX_CANVAS_WIDTH = 8e3, I.MAX_NODES = 10;
class Oe extends H {
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
class Q extends H {
  constructor(e = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = e, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return R(this, void 0, void 0, function* () {
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
    return R(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(e) {
    const t = e - this.currentTime, r = this.bufferNode;
    r == null || r.stop(this.audioContext.currentTime + t), r == null || r.addEventListener("ended", () => {
      r === this.bufferNode && (this.bufferNode = null, this.pause());
    }, { once: !0 });
  }
  setSinkId(e) {
    return R(this, void 0, void 0, function* () {
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
    for (let r = 0; r < t; r++) e.push(this.buffer.getChannelData(r));
    return e;
  }
}
const je = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class Y extends Me {
  static create(e) {
    return new Y(e);
  }
  constructor(e) {
    const t = e.media || (e.backend === "WebAudio" ? new Q() : void 0);
    super({ media: t, mediaControls: e.mediaControls, autoplay: e.autoplay, playbackRate: e.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, je, e), this.timer = new Oe();
    const r = t ? void 0 : this.getMediaElement();
    this.renderer = new I(this.options, r), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const i = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const { peaks: n, duration: a } = this.options;
      (i || n && a) && this.load(i, n, a).catch(() => null);
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
    }), this.renderer.on("scroll", (e, t, r, i) => {
      const n = this.getDuration();
      this.emit("scroll", e * n, t * n, r, i);
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
        let r;
        this.renderer.renderProgress(t), clearTimeout(e), this.isPlaying() ? r = 0 : this.options.dragToSeek === !0 ? r = 200 : typeof this.options.dragToSeek == "object" && this.options.dragToSeek !== void 0 && (r = this.options.dragToSeek.debounceTime), e = setTimeout(() => {
          this.seekTo(t);
        }, r), this.emit("interaction", t * this.getDuration()), this.emit("drag", t);
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
    this.options = Object.assign({}, this.options, e), e.duration && !e.peaks && (this.decodedData = G.createBuffer(this.exportPeaks(), e.duration)), e.peaks && e.duration && (this.decodedData = G.createBuffer(e.peaks, e.duration)), this.renderer.setOptions(this.options), e.audioRate && this.setPlaybackRate(e.audioRate), e.mediaControls != null && (this.getMediaElement().controls = e.mediaControls);
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
  loadAudio(e, t, r, i) {
    return R(this, void 0, void 0, function* () {
      var n;
      if (this.emit("load", e), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !t && !r) {
        const l = this.options.fetchParams || {};
        window.AbortController && !l.signal && (this.abortController = new AbortController(), l.signal = (n = this.abortController) === null || n === void 0 ? void 0 : n.signal);
        const u = (c) => this.emit("loading", c);
        t = yield _e.fetchBlob(e, u, l);
        const d = this.options.blobMimeType;
        d && (t = new Blob([t], { type: d }));
      }
      this.setSrc(e, t);
      const a = yield new Promise((l) => {
        const u = i || this.getDuration();
        u ? l(u) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => l(this.getDuration()), { once: !0 }));
      });
      if (!e && !t) {
        const l = this.getMediaElement();
        l instanceof Q && (l.duration = a);
      }
      if (r) this.decodedData = G.createBuffer(r, a || 0);
      else if (t) {
        const l = yield t.arrayBuffer();
        this.decodedData = yield G.decode(l, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e, t, r) {
    return R(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e, void 0, t, r);
      } catch (i) {
        throw this.emit("error", i), i;
      }
    });
  }
  loadBlob(e, t, r) {
    return R(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", e, t, r);
      } catch (i) {
        throw this.emit("error", i), i;
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
  exportPeaks({ channels: e = 2, maxLength: t = 8e3, precision: r = 1e4 } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const i = Math.min(e, this.decodedData.numberOfChannels), n = [];
    for (let a = 0; a < i; a++) {
      const l = this.decodedData.getChannelData(a), u = [], d = l.length / t;
      for (let c = 0; c < t; c++) {
        const p = l.slice(Math.floor(c * d), Math.ceil((c + 1) * d));
        let h = 0;
        for (let m = 0; m < p.length; m++) {
          const y = p[m];
          Math.abs(y) > Math.abs(h) && (h = y);
        }
        u.push(Math.round(h * r) / r);
      }
      n.push(u);
    }
    return n;
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
    const r = Object.create(null, { play: { get: () => super.play } });
    return R(this, void 0, void 0, function* () {
      e != null && this.setTime(e);
      const i = yield r.play.call(this);
      return t != null && (this.media instanceof Q ? this.media.stopAt(t) : this.stopAtPosition = t), i;
    });
  }
  playPause() {
    return R(this, void 0, void 0, function* () {
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
    return R(this, arguments, void 0, function* (e = "image/png", t = 1, r = "dataURL") {
      return this.renderer.exportImage(e, t, r);
    });
  }
  destroy() {
    var e;
    this.emit("destroy"), (e = this.abortController) === null || e === void 0 || e.abort(), this.plugins.forEach((t) => t.destroy()), this.subscriptions.forEach((t) => t()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
Y.BasePlugin = class extends H {
  constructor(s) {
    super(), this.subscriptions = [], this.options = s;
  }
  onInit() {
  }
  _init(s) {
    this.wavesurfer = s, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach((s) => s());
  }
}, Y.dom = Te;
const Ne = (s, e) => {
  const [t, r] = A(null);
  return ie(() => {
    if (!s.current) return;
    const i = Y.create({
      ...e,
      container: s.current
    });
    return r(i), () => {
      i.destroy();
    };
  }, [e, s]), t;
}, De = W.div`
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
`, Ae = ke((s) => {
  const e = ce(null), [t, r] = A(!1), [i, n] = A(0.5), [a, l] = A(0), [u, d] = A(
    w(0)
  ), [c, p] = A(!1), h = Ne(e, s), m = ce(null), { onPlay: y, onReady: P } = s, x = Ce(() => {
    h.playPause();
  }, [h]);
  ie(() => {
    if (!h) return;
    h.setVolume(i);
    const v = () => ({
      media: h.getMediaElement(),
      peaks: h.exportPeaks()
    }), f = [
      h.on("ready", () => {
        P && P(v()), l(
          w(
            Math.round(h.getDuration() * 1e3)
          )
        ), r(h.isPlaying());
      }),
      h.on("play", () => {
        y && y((k) => {
          const M = v();
          return !k || k.media !== M.media ? (k && (k.media.pause(), k.media.currentTime = 0), M) : k;
        }), r(!0);
      }),
      h.on("audioprocess", () => {
        d(
          w(
            Math.round(h.getCurrentTime() * 1e3)
          )
        );
      }),
      h.on("pause", () => r(!1))
    ];
    return () => {
      f.forEach((k) => k());
    };
  }, [h, y, P, i]), ie(() => {
    const v = m.current;
    v.style.setProperty("--value", v.value), v.style.setProperty("--min", v.min === "" ? "0" : v.min), v.style.setProperty("--max", v.max === "" ? "100" : v.max), v.style.setProperty("--value", v.value);
  }, []);
  function w(v) {
    var f = Math.floor(v / 6e4), k = (v % 6e4 / 1e3).toFixed(0);
    return f + ":" + (k < 10 ? "0" : "") + k;
  }
  function E(v) {
    n(v.target.value);
    const f = v.target;
    f.style.setProperty("--value", f.value), f.style.setProperty("--min", f.min === "" ? "0" : f.min), f.style.setProperty("--max", f.max === "" ? "100" : f.max), f.style.setProperty("--value", f.value);
  }
  function _() {
    p(!c);
  }
  return /* @__PURE__ */ b.jsxs(De, { children: [
    t ? /* @__PURE__ */ b.jsx(
      "img",
      {
        className: "play-icon",
        src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",
        onClick: x
      }
    ) : /* @__PURE__ */ b.jsx(
      "img",
      {
        className: "play-icon",
        src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",
        onClick: x
      }
    ),
    /* @__PURE__ */ b.jsx("div", { ref: e, style: { width: "100%" } }),
    /* @__PURE__ */ b.jsxs("p", { className: "waveform-time", children: [
      /* @__PURE__ */ b.jsx("span", { children: u }),
      " / ",
      /* @__PURE__ */ b.jsx("span", { children: a })
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "volume-container", children: [
      /* @__PURE__ */ b.jsx(
        "img",
        {
          className: "volume-icon",
          src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",
          onClick: _
        }
      ),
      /* @__PURE__ */ b.jsx(
        "input",
        {
          ref: m,
          className: "styled-slider slider-progress",
          type: "range",
          id: "volume-slider",
          min: 0,
          max: 1,
          step: 0.1,
          value: i,
          onChange: E,
          style: {
            opacity: c ? 1 : 0,
            pointerEvents: c ? "all" : "none"
          }
        }
      )
    ] })
  ] });
}), ve = Ee`
  @font-face {
    font-family: "Times Modern";
    src: url("../lib/assets/fonts/TimesModernRegular.woff2") format("woff2");
    font-display: swap;
    font-style: normal;
    font-weight: 400;
  }

`, Le = W.div`
    font-family: 'RobotoRegular', sans-serif;
    font-size: 1.6rem;

    margin-block-start: 1em;
    margin-block-end: 100px;
`, We = W.div`
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
function Je({ data: s }) {
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(ve, {}),
    /* @__PURE__ */ b.jsxs(We, { children: [
      /* @__PURE__ */ b.jsxs("div", { className: "card-image--container", children: [
        /* @__PURE__ */ b.jsx(
          "img",
          {
            src: `https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${s.imgSrc}.jpg`,
            className: "card-image"
          }
        ),
        /* @__PURE__ */ b.jsx("p", { className: "card-name", children: s.name })
      ] }),
      /* @__PURE__ */ b.jsx("p", { className: "card-quote", children: s.quote }),
      /* @__PURE__ */ b.jsx(
        Ae,
        {
          height: 100,
          waveColor: "#ff0000",
          progressColor: "#940000",
          url: `https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${s.audioSrc}.m4a`,
          normalize: !0,
          barWidth: 2,
          barGap: 2,
          barRadius: 2,
          cursorWidth: 2
        },
        s.id
      )
    ] })
  ] });
}
var K = {}, ee = {}, me;
function $e() {
  return me || (me = 1, function(s) {
    Object.defineProperty(s, "__esModule", {
      value: !0
    }), s.default = void 0;
    var e;
    function t(i, n, a) {
      return n in i ? Object.defineProperty(i, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : i[n] = a, i;
    }
    var r = {
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
    s.default = r;
  }(ee)), ee;
}
var te = {}, fe;
function ze() {
  return fe || (fe = 1, function(s) {
    Object.defineProperty(s, "__esModule", {
      value: !0
    }), s.default = void 0;
    var e = {
      micro: "400px",
      small: "520px",
      mobile: "768px",
      tablet: "1024px",
      desktop: "1200px",
      "desktop-wide": "1320px"
    };
    s.default = e;
  }(te)), te;
}
var ge;
function Ie() {
  return ge || (ge = 1, function(s) {
    Object.defineProperty(s, "__esModule", {
      value: !0
    }), Object.defineProperty(s, "colors", {
      enumerable: !0,
      get: function() {
        return e.default;
      }
    }), Object.defineProperty(s, "breakpoints", {
      enumerable: !0,
      get: function() {
        return t.default;
      }
    });
    var e = r($e()), t = r(ze());
    function r(i) {
      return i && i.__esModule ? i : { default: i };
    }
  }(K)), K;
}
var re = Ie();
const Be = W.div`
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

    @media (min-width: ${re.breakpoints.mobile}) {
        padding-inline: 72.297px;
    }

    @media (min-width: ${re.breakpoints.tablet}) {
        padding-inline: 220.5px;
    }

    @media (min-width: ${re.breakpoints.desktop}) {
        padding-inline: 258.4px;
    }
`;
function qe({ headline: s, standfirst: e }) {
  return /* @__PURE__ */ b.jsxs(Be, { children: [
    s && /* @__PURE__ */ b.jsx("h1", { className: "headline", children: s }),
    e && /* @__PURE__ */ b.jsx("p", { className: "standfirst", children: e })
  ] });
}
const Fe = W.div`
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
`, Ye = W.img`
    width: 100%;
    height: 150px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${(s) => s.isHovered ? "1" : "0.5"};

    -webkit-filter: ${(s) => s.grayscale ? "grayscale(100%)" : "none"};
    filter: ${(s) => s.grayscale ? "grayscale(100%)" : "none"};

    transition: opacity 250ms ease-in;
`;
function He({
  data: s,
  clickedImage: e,
  setClickedImage: t,
  setShowTooltip: r,
  setTooltipPos: i
}) {
  function n(l, u) {
    t(u), r(!0), i([
      l.clientX,
      l.target.offsetTop + l.target.offsetHeight - 20
    ]);
  }
  const a = s.map((l) => /* @__PURE__ */ b.jsx(
    Ye,
    {
      src: `https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${l.imgSrc}.jpg`,
      alt: l.name,
      grayscale: !1,
      lazy: !0,
      onClick: (u) => n(u, l),
      isHovered: e === l
    },
    l.id
  ));
  return /* @__PURE__ */ b.jsx(Fe, { children: a });
}
const Ve = W.div`
    position: absolute;
    left: 0px;
    top: ${(s) => s.isImageInLastRow ? s.tooltipPos[1] - 380 : s.tooltipPos[1]}px;

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

    opacity: ${(s) => s.showTooltip ? "1" : "0"};
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
  clickedImage: s,
  setClickedImage: e,
  tooltipPos: t,
  showTooltip: r,
  setShowTooltip: i,
  isImageInLastRow: n
}) {
  if (!s) return;
  function a() {
    i(!1), e(null);
  }
  return /* @__PURE__ */ b.jsxs(
    Ve,
    {
      showTooltip: r,
      tooltipPos: t,
      isImageInLastRow: n,
      children: [
        /* @__PURE__ */ b.jsx(
          "img",
          {
            className: "tooltip-image",
            src: `https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${s.imgSrc}.jpg`,
            alt: s.name
          }
        ),
        /* @__PURE__ */ b.jsxs("div", { className: "tooltip-content", children: [
          /* @__PURE__ */ b.jsx("h3", { children: s.name }),
          /* @__PURE__ */ b.jsx("p", { children: s.copy })
        ] }),
        /* @__PURE__ */ b.jsx("button", { className: "tooltip-close", onClick: a, children: /* @__PURE__ */ b.jsx("img", { src: "https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg" }) })
      ]
    }
  );
}
function Ze({ data: s }) {
  const [e, t] = A(null), [r, i] = A(!1), [n, a] = A([0, 0]);
  let u = s.length - s.indexOf(e) <= 7;
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(ve, {}),
    /* @__PURE__ */ b.jsxs(Le, { children: [
      /* @__PURE__ */ b.jsx(
        qe,
        {
          headline: "Lorem ipsum dolor sit amet",
          standfirst: "Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"
        }
      ),
      /* @__PURE__ */ b.jsx(
        He,
        {
          data: s,
          clickedImage: e,
          setClickedImage: t,
          setShowTooltip: i,
          setTooltipPos: a
        }
      ),
      /* @__PURE__ */ b.jsx(
        Ge,
        {
          clickedImage: e,
          setClickedImage: t,
          showTooltip: r,
          setShowTooltip: i,
          tooltipPos: n,
          isImageInLastRow: u
        }
      )
    ] })
  ] });
}
export {
  Je as AudioPlayer,
  Ae as Equalizer,
  He as Grid,
  qe as Header,
  Ze as ImageGrid,
  Ge as Tooltip
};
