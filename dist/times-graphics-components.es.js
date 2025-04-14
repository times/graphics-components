import ke, { useState as N, useEffect as Y, memo as Ce, useRef as X, useCallback as Ee } from "react";
import M, { createGlobalStyle as Se } from "styled-components";
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
var de;
function Pe() {
  if (de) return F;
  de = 1;
  var s = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(i, r, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      n = {};
      for (var l in r)
        l !== "key" && (n[l] = r[l]);
    } else n = r;
    return r = n.ref, {
      $$typeof: s,
      type: i,
      key: a,
      ref: r !== void 0 ? r : null,
      props: n
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
var ue;
function Re() {
  return ue || (ue = 1, process.env.NODE_ENV !== "production" && function() {
    function s(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === L ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case P:
          return "Fragment";
        case k:
          return "Profiler";
        case w:
          return "StrictMode";
        case d:
          return "Suspense";
        case g:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case x:
            return "Portal";
          case _:
            return (o.displayName || "Context") + ".Provider";
          case E:
            return (o._context.displayName || "Context") + ".Consumer";
          case y:
            var v = o.render;
            return o = o.displayName, o || (o = v.displayName || v.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case C:
            return v = o.displayName || null, v !== null ? v : s(o.type) || "Memo";
          case O:
            v = o._payload, o = o._init;
            try {
              return s(o(v));
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
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var S = v.error, T = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return S.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), e(o);
      }
    }
    function i(o) {
      if (o === P) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === O)
        return "<...>";
      try {
        var v = s(o);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var o = $.A;
      return o === null ? null : o.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (B.call(o, "key")) {
        var v = Object.getOwnPropertyDescriptor(o, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function l(o, v) {
      function S() {
        se || (se = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: S,
        configurable: !0
      });
    }
    function u() {
      var o = s(this.type);
      return oe[o] || (oe[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function h(o, v, S, T, W, A, Z, Q) {
      return S = A.ref, o = {
        $$typeof: b,
        type: o,
        key: v,
        props: A,
        _owner: W
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(o, "ref", {
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
        value: Z
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function c(o, v, S, T, W, A, Z, Q) {
      var j = v.children;
      if (j !== void 0)
        if (T)
          if (xe(j)) {
            for (T = 0; T < j.length; T++)
              f(j[T]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(j);
      if (B.call(v, "key")) {
        j = s(o);
        var z = Object.keys(v).filter(function(we) {
          return we !== "key";
        });
        T = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", ce[j + T] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          j,
          z,
          j
        ), ce[j + T] = !0);
      }
      if (j = null, S !== void 0 && (t(S), j = "" + S), a(v) && (t(v.key), j = "" + v.key), "key" in v) {
        S = {};
        for (var K in v)
          K !== "key" && (S[K] = v[K]);
      } else S = v;
      return j && l(
        S,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), h(
        o,
        j,
        A,
        W,
        r(),
        S,
        Z,
        Q
      );
    }
    function f(o) {
      typeof o == "object" && o !== null && o.$$typeof === b && o._store && (o._store.validated = 1);
    }
    var p = ke, b = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), L = Symbol.for("react.client.reference"), $ = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, xe = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(o) {
        return o();
      }
    };
    var se, oe = {}, ae = p["react-stack-bottom-frame"].bind(
      p,
      n
    )(), le = J(i(n)), ce = {};
    q.Fragment = P, q.jsx = function(o, v, S, T, W) {
      var A = 1e4 > $.recentlyCreatedOwnerStacks++;
      return c(
        o,
        v,
        S,
        !1,
        T,
        W,
        A ? Error("react-stack-top-frame") : ae,
        A ? J(i(o)) : le
      );
    }, q.jsxs = function(o, v, S, T, W) {
      var A = 1e4 > $.recentlyCreatedOwnerStacks++;
      return c(
        o,
        v,
        S,
        !0,
        T,
        W,
        A ? Error("react-stack-top-frame") : ae,
        A ? J(i(o)) : le
      );
    };
  }()), q;
}
var he;
function Te() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? G.exports = Pe() : G.exports = Re()), G.exports;
}
var m = Te();
function R(s, e, t, i) {
  return new (t || (t = Promise))(function(r, n) {
    function a(h) {
      try {
        u(i.next(h));
      } catch (c) {
        n(c);
      }
    }
    function l(h) {
      try {
        u(i.throw(h));
      } catch (c) {
        n(c);
      }
    }
    function u(h) {
      var c;
      h.done ? r(h.value) : (c = h.value, c instanceof t ? c : new t(function(f) {
        f(c);
      })).then(a, l);
    }
    u((i = i.apply(s, e || [])).next());
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
const U = { decode: function(s, e) {
  return R(this, void 0, void 0, function* () {
    const t = new AudioContext({ sampleRate: e });
    return t.decodeAudioData(s).finally(() => t.close());
  });
}, createBuffer: function(s, e) {
  return typeof s[0] == "number" && (s = [s]), function(t) {
    const i = t[0];
    if (i.some((r) => r > 1 || r < -1)) {
      const r = i.length;
      let n = 0;
      for (let a = 0; a < r; a++) {
        const l = Math.abs(i[a]);
        l > n && (n = l);
      }
      for (const a of t) for (let l = 0; l < r; l++) a[l] /= n;
    }
  }(s), { duration: e, length: s[0].length, sampleRate: s[0].length / e, numberOfChannels: s.length, getChannelData: (t) => s == null ? void 0 : s[t], copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function be(s, e) {
  const t = e.xmlns ? document.createElementNS(e.xmlns, s) : document.createElement(s);
  for (const [i, r] of Object.entries(e)) if (i === "children") for (const [n, a] of Object.entries(e)) typeof a == "string" ? t.appendChild(document.createTextNode(a)) : t.appendChild(be(n, a));
  else i === "style" ? Object.assign(t.style, r) : i === "textContent" ? t.textContent = r : t.setAttribute(i, r.toString());
  return t;
}
function pe(s, e, t) {
  const i = be(s, e || {});
  return t == null || t.appendChild(i), i;
}
var je = Object.freeze({ __proto__: null, createElement: pe, default: pe });
const _e = { fetchBlob: function(s, e, t) {
  return R(this, void 0, void 0, function* () {
    const i = yield fetch(s, t);
    if (i.status >= 400) throw new Error(`Failed to fetch ${s}: ${i.status} (${i.statusText})`);
    return function(r, n) {
      R(this, void 0, void 0, function* () {
        if (!r.body || !r.headers) return;
        const a = r.body.getReader(), l = Number(r.headers.get("Content-Length")) || 0;
        let u = 0;
        const h = (f) => R(this, void 0, void 0, function* () {
          u += (f == null ? void 0 : f.length) || 0;
          const p = Math.round(u / l * 100);
          n(p);
        }), c = () => R(this, void 0, void 0, function* () {
          let f;
          try {
            f = yield a.read();
          } catch {
            return;
          }
          f.done || (h(f.value), yield c());
        });
        c();
      });
    }(i.clone(), e), i.blob();
  });
} };
class Me extends V {
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
class I extends V {
  constructor(e, t) {
    super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = e;
    const i = this.parentFromOptionsContainer(e.container);
    this.parent = i;
    const [r, n] = this.initHtml();
    i.appendChild(r), this.container = r, this.scrollContainer = n.querySelector(".scroll"), this.wrapper = n.querySelector(".wrapper"), this.canvasWrapper = n.querySelector(".canvases"), this.progressWrapper = n.querySelector(".progress"), this.cursor = n.querySelector(".cursor"), t && n.appendChild(t), this.initEvents();
  }
  parentFromOptionsContainer(e) {
    let t;
    if (typeof e == "string" ? t = document.querySelector(e) : e instanceof HTMLElement && (t = e), !t) throw new Error("Container not found");
    return t;
  }
  initEvents() {
    const e = (t) => {
      const i = this.wrapper.getBoundingClientRect(), r = t.clientX - i.left, n = t.clientY - i.top;
      return [r / i.width, n / i.height];
    };
    if (this.wrapper.addEventListener("click", (t) => {
      const [i, r] = e(t);
      this.emit("click", i, r);
    }), this.wrapper.addEventListener("dblclick", (t) => {
      const [i, r] = e(t);
      this.emit("dblclick", i, r);
    }), this.options.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const { scrollLeft: t, scrollWidth: i, clientWidth: r } = this.scrollContainer, n = t / i, a = (t + r) / i;
      this.emit("scroll", n, a, t, t + r);
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
    this.subscriptions.push(function(e, t, i, r, n = 3, a = 0, l = 100) {
      if (!e) return () => {
      };
      const u = matchMedia("(pointer: coarse)").matches;
      let h = () => {
      };
      const c = (f) => {
        if (f.button !== a) return;
        f.preventDefault(), f.stopPropagation();
        let p = f.clientX, b = f.clientY, x = !1;
        const P = Date.now(), w = (d) => {
          if (d.preventDefault(), d.stopPropagation(), u && Date.now() - P < l) return;
          const g = d.clientX, C = d.clientY, O = g - p, D = C - b;
          if (x || Math.abs(O) > n || Math.abs(D) > n) {
            const L = e.getBoundingClientRect(), { left: $, top: B } = L;
            x || (i == null || i(p - $, b - B), x = !0), t(O, D, g - $, C - B), p = g, b = C;
          }
        }, k = (d) => {
          if (x) {
            const g = d.clientX, C = d.clientY, O = e.getBoundingClientRect(), { left: D, top: L } = O;
            r == null || r(g - D, C - L);
          }
          h();
        }, E = (d) => {
          d.relatedTarget && d.relatedTarget !== document.documentElement || k(d);
        }, _ = (d) => {
          x && (d.stopPropagation(), d.preventDefault());
        }, y = (d) => {
          x && d.preventDefault();
        };
        document.addEventListener("pointermove", w), document.addEventListener("pointerup", k), document.addEventListener("pointerout", E), document.addEventListener("pointercancel", E), document.addEventListener("touchmove", y, { passive: !1 }), document.addEventListener("click", _, { capture: !0 }), h = () => {
          document.removeEventListener("pointermove", w), document.removeEventListener("pointerup", k), document.removeEventListener("pointerout", E), document.removeEventListener("pointercancel", E), document.removeEventListener("touchmove", y), setTimeout(() => {
            document.removeEventListener("click", _, { capture: !0 });
          }, 10);
        };
      };
      return e.addEventListener("pointerdown", c), () => {
        h(), e.removeEventListener("pointerdown", c);
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
      const n = this.parent.clientHeight || 128;
      return t != null && t.every((a) => !a.overlay) ? n / r : n;
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
    return this.timeouts.push(r), () => new Promise((n, a) => {
      r(), i = a, t = setTimeout(() => {
        t = void 0, i = void 0, n();
      }, e);
    });
  }
  convertColorValues(e) {
    if (!Array.isArray(e)) return e || "";
    if (e.length < 2) return e[0] || "";
    const t = document.createElement("canvas"), i = t.getContext("2d"), r = t.height * (window.devicePixelRatio || 1), n = i.createLinearGradient(0, 0, 0, r), a = 1 / (e.length - 1);
    return e.forEach((l, u) => {
      const h = u * a;
      n.addColorStop(h, l);
    }), n;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(e, t, i, r) {
    const n = e[0], a = e[1] || e[0], l = n.length, { width: u, height: h } = i.canvas, c = h / 2, f = this.getPixelRatio(), p = t.barWidth ? t.barWidth * f : 1, b = t.barGap ? t.barGap * f : t.barWidth ? p / 2 : 0, x = t.barRadius || 0, P = u / (p + b) / l, w = x && "roundRect" in i ? "roundRect" : "rect";
    i.beginPath();
    let k = 0, E = 0, _ = 0;
    for (let y = 0; y <= l; y++) {
      const d = Math.round(y * P);
      if (d > k) {
        const O = Math.round(E * c * r), D = O + Math.round(_ * c * r) || 1;
        let L = c - O;
        t.barAlign === "top" ? L = 0 : t.barAlign === "bottom" && (L = h - D), i[w](k * (p + b), L, p, D, x), k = d, E = 0, _ = 0;
      }
      const g = Math.abs(n[y] || 0), C = Math.abs(a[y] || 0);
      g > E && (E = g), C > _ && (_ = C);
    }
    i.fill(), i.closePath();
  }
  renderLineWaveform(e, t, i, r) {
    const n = (a) => {
      const l = e[a] || e[0], u = l.length, { height: h } = i.canvas, c = h / 2, f = i.canvas.width / u;
      i.moveTo(0, c);
      let p = 0, b = 0;
      for (let x = 0; x <= u; x++) {
        const P = Math.round(x * f);
        if (P > p) {
          const k = c + (Math.round(b * c * r) || 1) * (a === 0 ? -1 : 1);
          i.lineTo(p, k), p = P, b = 0;
        }
        const w = Math.abs(l[x] || 0);
        w > b && (b = w);
      }
      i.lineTo(p, c);
    };
    i.beginPath(), n(0), n(1), i.fill(), i.closePath();
  }
  renderWaveform(e, t, i) {
    if (i.fillStyle = this.convertColorValues(t.waveColor), t.renderFunction) return void t.renderFunction(e, i);
    let r = t.barHeight || 1;
    if (t.normalize) {
      const n = Array.from(e[0]).reduce((a, l) => Math.max(a, Math.abs(l)), 0);
      r = n ? 1 / n : 1;
    }
    t.barWidth || t.barGap || t.barAlign ? this.renderBarWaveform(e, t, i, r) : this.renderLineWaveform(e, t, i, r);
  }
  renderSingleCanvas(e, t, i, r, n, a, l) {
    const u = this.getPixelRatio(), h = document.createElement("canvas");
    h.width = Math.round(i * u), h.height = Math.round(r * u), h.style.width = `${i}px`, h.style.height = `${r}px`, h.style.left = `${Math.round(n)}px`, a.appendChild(h);
    const c = h.getContext("2d");
    if (this.renderWaveform(e, t, c), h.width > 0 && h.height > 0) {
      const f = h.cloneNode(), p = f.getContext("2d");
      p.drawImage(h, 0, 0), p.globalCompositeOperation = "source-in", p.fillStyle = this.convertColorValues(t.progressColor), p.fillRect(0, 0, h.width, h.height), l.appendChild(f);
    }
  }
  renderMultiCanvas(e, t, i, r, n, a) {
    const l = this.getPixelRatio(), { clientWidth: u } = this.scrollContainer, h = i / l;
    let c = Math.min(I.MAX_CANVAS_WIDTH, u, h), f = {};
    if (c === 0) return;
    if (t.barWidth || t.barGap) {
      const w = t.barWidth || 0.5, k = w + (t.barGap || w / 2);
      c % k != 0 && (c = Math.floor(c / k) * k);
    }
    const p = (w) => {
      if (w < 0 || w >= b || f[w]) return;
      f[w] = !0;
      const k = w * c, E = Math.min(h - k, c);
      if (E <= 0) return;
      const _ = e.map((y) => {
        const d = Math.floor(k / h * y.length), g = Math.floor((k + E) / h * y.length);
        return y.slice(d, g);
      });
      this.renderSingleCanvas(_, t, E, r, k, n, a);
    }, b = Math.ceil(h / c);
    if (!this.isScrollable) {
      for (let w = 0; w < b; w++) p(w);
      return;
    }
    const x = this.scrollContainer.scrollLeft / h, P = Math.floor(x * b);
    if (p(P - 1), p(P), p(P + 1), b > 1) {
      const w = this.on("scroll", () => {
        const { scrollLeft: k } = this.scrollContainer, E = Math.floor(k / h * b);
        Object.keys(f).length > I.MAX_NODES && (n.innerHTML = "", a.innerHTML = "", f = {}), p(E - 1), p(E), p(E + 1);
      });
      this.unsubscribeOnScroll.push(w);
    }
  }
  renderChannel(e, t, i, r) {
    var { overlay: n } = t, a = function(c, f) {
      var p = {};
      for (var b in c) Object.prototype.hasOwnProperty.call(c, b) && f.indexOf(b) < 0 && (p[b] = c[b]);
      if (c != null && typeof Object.getOwnPropertySymbols == "function") {
        var x = 0;
        for (b = Object.getOwnPropertySymbols(c); x < b.length; x++) f.indexOf(b[x]) < 0 && Object.prototype.propertyIsEnumerable.call(c, b[x]) && (p[b[x]] = c[b[x]]);
      }
      return p;
    }(t, ["overlay"]);
    const l = document.createElement("div"), u = this.getHeight(a.height, a.splitChannels);
    l.style.height = `${u}px`, n && r > 0 && (l.style.marginTop = `-${u}px`), this.canvasWrapper.style.minHeight = `${u}px`, this.canvasWrapper.appendChild(l);
    const h = l.cloneNode();
    this.progressWrapper.appendChild(h), this.renderMultiCanvas(e, a, i, u, l, h);
  }
  render(e) {
    return R(this, void 0, void 0, function* () {
      var t;
      this.timeouts.forEach((u) => u()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", this.options.width != null && (this.scrollContainer.style.width = typeof this.options.width == "number" ? `${this.options.width}px` : this.options.width);
      const i = this.getPixelRatio(), r = this.scrollContainer.clientWidth, n = Math.ceil(e.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = n > r;
      const a = this.options.fillParent && !this.isScrollable, l = (a ? r : n) * i;
      if (this.wrapper.style.width = a ? "100%" : `${n}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e, this.emit("render"), this.options.splitChannels) for (let u = 0; u < e.numberOfChannels; u++) {
        const h = Object.assign(Object.assign({}, this.options), (t = this.options.splitChannels) === null || t === void 0 ? void 0 : t[u]);
        this.renderChannel([e.getChannelData(u)], h, l, u);
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
    const { scrollLeft: i, scrollWidth: r, clientWidth: n } = this.scrollContainer, a = e * r, l = i, u = i + n, h = n / 2;
    if (this.isDragging)
      a + 30 > u ? this.scrollContainer.scrollLeft += 30 : a - 30 < l && (this.scrollContainer.scrollLeft -= 30);
    else {
      (a < l || a > u) && (this.scrollContainer.scrollLeft = a - (this.options.autoCenter ? h : 0));
      const c = a - i - h;
      t && this.options.autoCenter && c > 0 && (this.scrollContainer.scrollLeft += Math.min(c, 10));
    }
    {
      const c = this.scrollContainer.scrollLeft, f = c / r, p = (c + n) / r;
      this.emit("scroll", f, p, c, c + n);
    }
  }
  renderProgress(e, t) {
    if (isNaN(e)) return;
    const i = 100 * e;
    this.canvasWrapper.style.clipPath = `polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`, this.progressWrapper.style.width = `${i}%`, this.cursor.style.left = `${i}%`, this.cursor.style.transform = `translateX(-${Math.round(i) === 100 ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(e, t);
  }
  exportImage(e, t, i) {
    return R(this, void 0, void 0, function* () {
      const r = this.canvasWrapper.querySelectorAll("canvas");
      if (!r.length) throw new Error("No waveform data");
      if (i === "dataURL") {
        const n = Array.from(r).map((a) => a.toDataURL(e, t));
        return Promise.resolve(n);
      }
      return Promise.all(Array.from(r).map((n) => new Promise((a, l) => {
        n.toBlob((u) => {
          u ? a(u) : l(new Error("Could not export image"));
        }, e, t);
      })));
    });
  }
}
I.MAX_CANVAS_WIDTH = 8e3, I.MAX_NODES = 10;
class Oe extends V {
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
class ee extends V {
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
    const t = e - this.currentTime, i = this.bufferNode;
    i == null || i.stop(this.audioContext.currentTime + t), i == null || i.addEventListener("ended", () => {
      i === this.bufferNode && (this.bufferNode = null, this.pause());
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
    for (let i = 0; i < t; i++) e.push(this.buffer.getChannelData(i));
    return e;
  }
}
const Ne = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class H extends Me {
  static create(e) {
    return new H(e);
  }
  constructor(e) {
    const t = e.media || (e.backend === "WebAudio" ? new ee() : void 0);
    super({ media: t, mediaControls: e.mediaControls, autoplay: e.autoplay, playbackRate: e.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, Ne, e), this.timer = new Oe();
    const i = t ? void 0 : this.getMediaElement();
    this.renderer = new I(this.options, i), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const r = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const { peaks: n, duration: a } = this.options;
      (r || n && a) && this.load(r, n, a).catch(() => null);
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
      const n = this.getDuration();
      this.emit("scroll", e * n, t * n, i, r);
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
    return R(this, void 0, void 0, function* () {
      var n;
      if (this.emit("load", e), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !t && !i) {
        const l = this.options.fetchParams || {};
        window.AbortController && !l.signal && (this.abortController = new AbortController(), l.signal = (n = this.abortController) === null || n === void 0 ? void 0 : n.signal);
        const u = (c) => this.emit("loading", c);
        t = yield _e.fetchBlob(e, u, l);
        const h = this.options.blobMimeType;
        h && (t = new Blob([t], { type: h }));
      }
      this.setSrc(e, t);
      const a = yield new Promise((l) => {
        const u = r || this.getDuration();
        u ? l(u) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => l(this.getDuration()), { once: !0 }));
      });
      if (!e && !t) {
        const l = this.getMediaElement();
        l instanceof ee && (l.duration = a);
      }
      if (i) this.decodedData = U.createBuffer(i, a || 0);
      else if (t) {
        const l = yield t.arrayBuffer();
        this.decodedData = yield U.decode(l, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e, t, i) {
    return R(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e, void 0, t, i);
      } catch (r) {
        throw this.emit("error", r), r;
      }
    });
  }
  loadBlob(e, t, i) {
    return R(this, void 0, void 0, function* () {
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
    const r = Math.min(e, this.decodedData.numberOfChannels), n = [];
    for (let a = 0; a < r; a++) {
      const l = this.decodedData.getChannelData(a), u = [], h = l.length / t;
      for (let c = 0; c < t; c++) {
        const f = l.slice(Math.floor(c * h), Math.ceil((c + 1) * h));
        let p = 0;
        for (let b = 0; b < f.length; b++) {
          const x = f[b];
          Math.abs(x) > Math.abs(p) && (p = x);
        }
        u.push(Math.round(p * i) / i);
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
    const i = Object.create(null, { play: { get: () => super.play } });
    return R(this, void 0, void 0, function* () {
      e != null && this.setTime(e);
      const r = yield i.play.call(this);
      return t != null && (this.media instanceof ee ? this.media.stopAt(t) : this.stopAtPosition = t), r;
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
    return R(this, arguments, void 0, function* (e = "image/png", t = 1, i = "dataURL") {
      return this.renderer.exportImage(e, t, i);
    });
  }
  destroy() {
    var e;
    this.emit("destroy"), (e = this.abortController) === null || e === void 0 || e.abort(), this.plugins.forEach((t) => t.destroy()), this.subscriptions.forEach((t) => t()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
H.BasePlugin = class extends V {
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
}, H.dom = je;
const Ae = (s, e) => {
  const [t, i] = N(null);
  return Y(() => {
    if (!s.current) return;
    const r = H.create({
      ...e,
      container: s.current
    });
    return i(r), () => {
      r.destroy();
    };
  }, [e, s]), t;
}, De = M.div`
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
`, Le = Ce((s) => {
  const e = X(null), [t, i] = N(!1), [r, n] = N(0.5), [a, l] = N(0), [u, h] = N(
    k(0)
  ), [c, f] = N(!1), p = Ae(e, s), b = X(null), { onPlay: x, onReady: P } = s, w = Ee(() => {
    p.playPause();
  }, [p]);
  Y(() => {
    if (!p) return;
    p.setVolume(r);
    const y = () => ({
      media: p.getMediaElement(),
      peaks: p.exportPeaks()
    }), d = [
      p.on("ready", () => {
        P && P(y()), l(
          k(
            Math.round(p.getDuration() * 1e3)
          )
        ), i(p.isPlaying());
      }),
      p.on("play", () => {
        x && x((g) => {
          const C = y();
          return !g || g.media !== C.media ? (g && (g.media.pause(), g.media.currentTime = 0), C) : g;
        }), i(!0);
      }),
      p.on("audioprocess", () => {
        h(
          k(
            Math.round(p.getCurrentTime() * 1e3)
          )
        );
      }),
      p.on("pause", () => i(!1))
    ];
    return () => {
      d.forEach((g) => g());
    };
  }, [p, x, P, r]), Y(() => {
    const y = b.current;
    y.style.setProperty("--value", y.value), y.style.setProperty("--min", y.min === "" ? "0" : y.min), y.style.setProperty("--max", y.max === "" ? "100" : y.max), y.style.setProperty("--value", y.value);
  }, []);
  function k(y) {
    var d = Math.floor(y / 6e4), g = (y % 6e4 / 1e3).toFixed(0);
    return d + ":" + (g < 10 ? "0" : "") + g;
  }
  function E(y) {
    n(y.target.value);
    const d = y.target;
    d.style.setProperty("--value", d.value), d.style.setProperty("--min", d.min === "" ? "0" : d.min), d.style.setProperty("--max", d.max === "" ? "100" : d.max), d.style.setProperty("--value", d.value);
  }
  function _() {
    f(!c);
  }
  return /* @__PURE__ */ m.jsxs(De, { children: [
    t ? /* @__PURE__ */ m.jsx(
      "img",
      {
        className: "play-icon",
        src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",
        onClick: w
      }
    ) : /* @__PURE__ */ m.jsx(
      "img",
      {
        className: "play-icon",
        src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",
        onClick: w
      }
    ),
    /* @__PURE__ */ m.jsx("div", { ref: e, style: { width: "100%" } }),
    /* @__PURE__ */ m.jsxs("p", { className: "waveform-time", children: [
      /* @__PURE__ */ m.jsx("span", { children: u }),
      " / ",
      /* @__PURE__ */ m.jsx("span", { children: a })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "volume-container", children: [
      /* @__PURE__ */ m.jsx(
        "img",
        {
          className: "volume-icon",
          src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",
          onClick: _
        }
      ),
      /* @__PURE__ */ m.jsx(
        "input",
        {
          ref: b,
          className: "styled-slider slider-progress",
          type: "range",
          id: "volume-slider",
          min: 0,
          max: 1,
          step: 0.1,
          value: r,
          onChange: E,
          style: {
            opacity: c ? 1 : 0,
            pointerEvents: c ? "all" : "none"
          }
        }
      )
    ] })
  ] });
}), ve = Se`
  @font-face {
    font-family: "Times Modern";
    src: url("../lib/assets/fonts/TimesModernRegular.woff2") format("woff2");
    font-display: swap;
    font-style: normal;
    font-weight: 400;
  }

`, ye = M.div`
    font-family: 'RobotoRegular', sans-serif;
    font-size: 1.6rem;

    margin-block-start: 1em;
    margin-block-end: 100px;
`, We = M.div`
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
function tt({ data: s }) {
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(ve, {}),
    /* @__PURE__ */ m.jsxs(We, { children: [
      /* @__PURE__ */ m.jsxs("div", { className: "card-image--container", children: [
        /* @__PURE__ */ m.jsx(
          "img",
          {
            src: `https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${s.imgSrc}.jpg`,
            className: "card-image"
          }
        ),
        /* @__PURE__ */ m.jsx("p", { className: "card-name", children: s.name })
      ] }),
      /* @__PURE__ */ m.jsx("p", { className: "card-quote", children: s.quote }),
      /* @__PURE__ */ m.jsx(
        Le,
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
var te = {}, ie = {}, me;
function $e() {
  return me || (me = 1, function(s) {
    Object.defineProperty(s, "__esModule", {
      value: !0
    }), s.default = void 0;
    var e;
    function t(r, n, a) {
      return n in r ? Object.defineProperty(r, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = a, r;
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
    s.default = i;
  }(ie)), ie;
}
var re = {}, fe;
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
  }(re)), re;
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
    var e = i($e()), t = i(ze());
    function i(r) {
      return r && r.__esModule ? r : { default: r };
    }
  }(te)), te;
}
var ne = Ie();
const Be = M.div`
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

    @media (min-width: ${ne.breakpoints.mobile}) {
        padding-inline: 72.297px;
    }

    @media (min-width: ${ne.breakpoints.tablet}) {
        padding-inline: 220.5px;
    }

    @media (min-width: ${ne.breakpoints.desktop}) {
        padding-inline: 258.4px;
    }
`;
function Fe({ headline: s, standfirst: e }) {
  return /* @__PURE__ */ m.jsxs(Be, { children: [
    s && /* @__PURE__ */ m.jsx("h1", { className: "headline", children: s }),
    e && /* @__PURE__ */ m.jsx("p", { className: "standfirst", children: e })
  ] });
}
const qe = M.div`
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
`, Ye = M.img`
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
  setShowTooltip: i,
  setTooltipPos: r
}) {
  function n(l, u) {
    t(u), i(!0), r([
      l.clientX,
      l.target.offsetTop + l.target.offsetHeight - 20
    ]);
  }
  const a = s.map((l) => /* @__PURE__ */ m.jsx(
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
  return /* @__PURE__ */ m.jsx(qe, { children: a });
}
const Ve = M.div`
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
  showTooltip: i,
  setShowTooltip: r,
  isImageInLastRow: n
}) {
  if (!s) return;
  function a() {
    r(!1), e(null);
  }
  return /* @__PURE__ */ m.jsxs(
    Ve,
    {
      showTooltip: i,
      tooltipPos: t,
      isImageInLastRow: n,
      children: [
        /* @__PURE__ */ m.jsx(
          "img",
          {
            className: "tooltip-image",
            src: `https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${s.imgSrc}.jpg`,
            alt: s.name
          }
        ),
        /* @__PURE__ */ m.jsxs("div", { className: "tooltip-content", children: [
          /* @__PURE__ */ m.jsx("h3", { children: s.name }),
          /* @__PURE__ */ m.jsx("p", { children: s.copy })
        ] }),
        /* @__PURE__ */ m.jsx("button", { className: "tooltip-close", onClick: a, children: /* @__PURE__ */ m.jsx("img", { src: "https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg" }) })
      ]
    }
  );
}
function it({ data: s }) {
  const [e, t] = N(null), [i, r] = N(!1), [n, a] = N([0, 0]);
  let u = s.length - s.indexOf(e) <= 7;
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(ve, {}),
    /* @__PURE__ */ m.jsxs(ye, { children: [
      /* @__PURE__ */ m.jsx(
        Fe,
        {
          headline: "Lorem ipsum dolor sit amet",
          standfirst: "Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"
        }
      ),
      /* @__PURE__ */ m.jsx(
        He,
        {
          data: s,
          clickedImage: e,
          setClickedImage: t,
          setShowTooltip: r,
          setTooltipPos: a
        }
      ),
      /* @__PURE__ */ m.jsx(
        Ge,
        {
          clickedImage: e,
          setClickedImage: t,
          showTooltip: i,
          setShowTooltip: r,
          tooltipPos: n,
          isImageInLastRow: u
        }
      )
    ] })
  ] });
}
M.div`
    position: relative;
    width: 100%;
`;
const Ue = M.div`
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

    &.inline {
        width: 56.2%;
        margin: 0 auto;
    }

    &.edge-to-edge iframe {
        height: 100vh;
    }
`, Xe = M.div`
    position: relative;
    width: 100%;
    height: 100%;
`, Je = M.div`
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
`, Ze = M.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`, Qe = M.p`
    line-height: 1.4;
    font-family: 'Times Modern', serif;
    font-size: ${({ size: s }) => s === "lg" ? "20px" : "16px"} !important;
    padding: 1rem;
    max-width: 600px;
    background: white;
    z-index: 1;
    font-size: 18px;
    line-height: 30px;
`;
function rt({ data: s }) {
  const {
    slides: e = [],
    imgFit: t = "cover",
    containerWidth: i = "edge-to-edge",
    borderRadius: r = "0",
    fixedImgHeight: n,
    fontSize: a = "md",
    videoLoop: l = !0,
    videoAutoplay: u = !0,
    videoControls: h = !1,
    videoMute: c = !0
  } = s, [f, p] = N(0), [b, x] = N([]), P = X([]), w = X([]);
  Y(() => {
    const d = new IntersectionObserver(
      (g) => {
        g.forEach((C) => {
          if (C.isIntersecting) {
            const O = parseInt(C.target.dataset.index, 10);
            p(O);
          }
        });
      },
      { threshold: 0.6 }
    );
    return P.current.forEach((g) => g && d.observe(g)), () => d.disconnect();
  }, [e.length]), Y(() => {
    const d = e.map((g, C) => C === f);
    x(d);
  }, [f, e]);
  const k = (d) => b[d] ? 2 : 1, E = (d) => {
    var g;
    if (d.includes("youtube.com")) {
      const C = (g = d.split("v=")[1]) == null ? void 0 : g.split("&")[0];
      return `https://www.youtube.com/embed/${C}?autoplay=${u ? 1 : 0}&loop=${l ? 1 : 0}&controls=${h ? 1 : 0}&mute=${c ? 1 : 0}&playlist=${C}`;
    } else if (d.includes("vimeo.com"))
      return `https://player.vimeo.com/video/${d.split("/").pop()}?autoplay=${u ? 1 : 0}&loop=${l ? 1 : 0}&controls=${h ? 1 : 0}&muted=${c ? 1 : 0}`;
    return d;
  }, _ = (d) => d.includes("youtube.com") || d.includes("youtu.be"), y = (d) => d.endsWith(".mp4");
  return /* @__PURE__ */ m.jsxs(ye, { children: [
    /* @__PURE__ */ m.jsx(
      Ue,
      {
        style: {
          height: n || "500px"
        },
        className: i === "edge-to-edge" ? "edge-to-edge" : i === "inline" ? "inline" : "",
        children: /* @__PURE__ */ m.jsx(Xe, { children: e.map((d, g) => /* @__PURE__ */ m.jsx(
          Je,
          {
            ref: (C) => w.current[g] = C,
            className: b[g] ? "overlap" : "",
            style: { zIndex: k(g) },
            children: _(d.media) ? /* @__PURE__ */ m.jsx(
              "iframe",
              {
                title: "YouTube video",
                src: E(d.media),
                frameBorder: "0",
                allow: "autoplay; encrypted-media",
                allowFullScreen: !0,
                style: {
                  objectFit: t,
                  width: "100%",
                  height: n || (i === "edge-to-edge" ? "100vh" : "500px"),
                  borderRadius: r
                }
              }
            ) : y(d.media) ? /* @__PURE__ */ m.jsx(
              "video",
              {
                autoPlay: u,
                loop: l,
                controls: h,
                muted: c,
                style: {
                  objectFit: t,
                  width: "100%",
                  height: n,
                  borderRadius: r
                },
                children: /* @__PURE__ */ m.jsx("source", { src: d.media, type: "video/mp4" })
              }
            ) : /* @__PURE__ */ m.jsx(
              "img",
              {
                src: d.media,
                alt: d.altText || "Slide image",
                style: {
                  objectFit: t,
                  width: "100%",
                  height: n,
                  borderRadius: r
                }
              }
            )
          },
          g
        )) })
      }
    ),
    /* @__PURE__ */ m.jsx("div", { className: "scroller-sections", children: e.map((d, g) => /* @__PURE__ */ m.jsx(
      Ze,
      {
        className: "trigger",
        "data-index": g,
        ref: (C) => P.current[g] = C,
        children: d.text && /* @__PURE__ */ m.jsx(
          Qe,
          {
            size: a,
            dangerouslySetInnerHTML: { __html: d.text }
          }
        )
      },
      g
    )) })
  ] });
}
export {
  tt as AudioPlayer,
  Le as Equalizer,
  He as Grid,
  Fe as Header,
  it as ImageGrid,
  rt as ScrollStory,
  Ge as Tooltip
};
