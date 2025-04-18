import Ee, { useState as O, useEffect as Y, memo as Re, useRef as J, useCallback as Se } from "react";
import C, { createGlobalStyle as Te, css as te, keyframes as je } from "styled-components";
var U = { exports: {} }, H = {};
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
  if (ue) return H;
  ue = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var c in i)
        c !== "key" && (s[c] = i[c]);
    } else s = i;
    return i = s.ref, {
      $$typeof: n,
      type: r,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return H.Fragment = e, H.jsx = t, H.jsxs = t, H;
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
var he;
function Me() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    function n(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === $ ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case T:
          return "Fragment";
        case k:
          return "Profiler";
        case w:
          return "StrictMode";
        case p:
          return "Suspense";
        case b:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case y:
            return "Portal";
          case _:
            return (l.displayName || "Context") + ".Provider";
          case R:
            return (l._context.displayName || "Context") + ".Consumer";
          case x:
            var v = l.render;
            return l = l.displayName, l || (l = v.displayName || v.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case E:
            return v = l.displayName || null, v !== null ? v : n(l.type) || "Memo";
          case N:
            v = l._payload, l = l._init;
            try {
              return n(l(v));
            } catch {
            }
        }
      return null;
    }
    function e(l) {
      return "" + l;
    }
    function t(l) {
      try {
        e(l);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var S = v.error, P = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return S.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), e(l);
      }
    }
    function r(l) {
      if (l === T) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === N)
        return "<...>";
      try {
        var v = n(l);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var l = z.A;
      return l === null ? null : l.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(l) {
      if (B.call(l, "key")) {
        var v = Object.getOwnPropertyDescriptor(l, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function c(l, v) {
      function S() {
        oe || (oe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: S,
        configurable: !0
      });
    }
    function u() {
      var l = n(this.type);
      return ae[l] || (ae[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function h(l, v, S, P, L, D, Q, K) {
      return S = D.ref, l = {
        $$typeof: g,
        type: l,
        key: v,
        props: D,
        _owner: L
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function d(l, v, S, P, L, D, Q, K) {
      var M = v.children;
      if (M !== void 0)
        if (P)
          if (ke(M)) {
            for (P = 0; P < M.length; P++)
              f(M[P]);
            Object.freeze && Object.freeze(M);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(M);
      if (B.call(v, "key")) {
        M = n(l);
        var I = Object.keys(v).filter(function(Ce) {
          return Ce !== "key";
        });
        P = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", de[M + P] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          M,
          I,
          M
        ), de[M + P] = !0);
      }
      if (M = null, S !== void 0 && (t(S), M = "" + S), a(v) && (t(v.key), M = "" + v.key), "key" in v) {
        S = {};
        for (var ee in v)
          ee !== "key" && (S[ee] = v[ee]);
      } else S = v;
      return M && c(
        S,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), h(
        l,
        M,
        D,
        L,
        i(),
        S,
        Q,
        K
      );
    }
    function f(l) {
      typeof l == "object" && l !== null && l.$$typeof === g && l._store && (l._store.validated = 1);
    }
    var m = Ee, g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), z = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, ke = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(l) {
        return l();
      }
    };
    var oe, ae = {}, le = m["react-stack-bottom-frame"].bind(
      m,
      s
    )(), ce = Z(r(s)), de = {};
    q.Fragment = T, q.jsx = function(l, v, S, P, L) {
      var D = 1e4 > z.recentlyCreatedOwnerStacks++;
      return d(
        l,
        v,
        S,
        !1,
        P,
        L,
        D ? Error("react-stack-top-frame") : le,
        D ? Z(r(l)) : ce
      );
    }, q.jsxs = function(l, v, S, P, L) {
      var D = 1e4 > z.recentlyCreatedOwnerStacks++;
      return d(
        l,
        v,
        S,
        !0,
        P,
        L,
        D ? Error("react-stack-top-frame") : le,
        D ? Z(r(l)) : ce
      );
    };
  }()), q;
}
var pe;
function _e() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? U.exports = Pe() : U.exports = Me()), U.exports;
}
var o = _e();
function j(n, e, t, r) {
  return new (t || (t = Promise))(function(i, s) {
    function a(h) {
      try {
        u(r.next(h));
      } catch (d) {
        s(d);
      }
    }
    function c(h) {
      try {
        u(r.throw(h));
      } catch (d) {
        s(d);
      }
    }
    function u(h) {
      var d;
      h.done ? i(h.value) : (d = h.value, d instanceof t ? d : new t(function(f) {
        f(d);
      })).then(a, c);
    }
    u((r = r.apply(n, e || [])).next());
  });
}
class G {
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
const X = { decode: function(n, e) {
  return j(this, void 0, void 0, function* () {
    const t = new AudioContext({ sampleRate: e });
    return t.decodeAudioData(n).finally(() => t.close());
  });
}, createBuffer: function(n, e) {
  return typeof n[0] == "number" && (n = [n]), function(t) {
    const r = t[0];
    if (r.some((i) => i > 1 || i < -1)) {
      const i = r.length;
      let s = 0;
      for (let a = 0; a < i; a++) {
        const c = Math.abs(r[a]);
        c > s && (s = c);
      }
      for (const a of t) for (let c = 0; c < i; c++) a[c] /= s;
    }
  }(n), { duration: e, length: n[0].length, sampleRate: n[0].length / e, numberOfChannels: n.length, getChannelData: (t) => n == null ? void 0 : n[t], copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function ye(n, e) {
  const t = e.xmlns ? document.createElementNS(e.xmlns, n) : document.createElement(n);
  for (const [r, i] of Object.entries(e)) if (r === "children") for (const [s, a] of Object.entries(e)) typeof a == "string" ? t.appendChild(document.createTextNode(a)) : t.appendChild(ye(s, a));
  else r === "style" ? Object.assign(t.style, i) : r === "textContent" ? t.textContent = i : t.setAttribute(r, i.toString());
  return t;
}
function me(n, e, t) {
  const r = ye(n, e || {});
  return t == null || t.appendChild(r), r;
}
var Ne = Object.freeze({ __proto__: null, createElement: me, default: me });
const Oe = { fetchBlob: function(n, e, t) {
  return j(this, void 0, void 0, function* () {
    const r = yield fetch(n, t);
    if (r.status >= 400) throw new Error(`Failed to fetch ${n}: ${r.status} (${r.statusText})`);
    return function(i, s) {
      j(this, void 0, void 0, function* () {
        if (!i.body || !i.headers) return;
        const a = i.body.getReader(), c = Number(i.headers.get("Content-Length")) || 0;
        let u = 0;
        const h = (f) => j(this, void 0, void 0, function* () {
          u += (f == null ? void 0 : f.length) || 0;
          const m = Math.round(u / c * 100);
          s(m);
        }), d = () => j(this, void 0, void 0, function* () {
          let f;
          try {
            f = yield a.read();
          } catch {
            return;
          }
          f.done || (h(f.value), yield d());
        });
        d();
      });
    }(r.clone(), e), r.blob();
  });
} };
class De extends G {
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
    return j(this, void 0, void 0, function* () {
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
class F extends G {
  constructor(e, t) {
    super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = e;
    const r = this.parentFromOptionsContainer(e.container);
    this.parent = r;
    const [i, s] = this.initHtml();
    r.appendChild(i), this.container = i, this.scrollContainer = s.querySelector(".scroll"), this.wrapper = s.querySelector(".wrapper"), this.canvasWrapper = s.querySelector(".canvases"), this.progressWrapper = s.querySelector(".progress"), this.cursor = s.querySelector(".cursor"), t && s.appendChild(t), this.initEvents();
  }
  parentFromOptionsContainer(e) {
    let t;
    if (typeof e == "string" ? t = document.querySelector(e) : e instanceof HTMLElement && (t = e), !t) throw new Error("Container not found");
    return t;
  }
  initEvents() {
    const e = (t) => {
      const r = this.wrapper.getBoundingClientRect(), i = t.clientX - r.left, s = t.clientY - r.top;
      return [i / r.width, s / r.height];
    };
    if (this.wrapper.addEventListener("click", (t) => {
      const [r, i] = e(t);
      this.emit("click", r, i);
    }), this.wrapper.addEventListener("dblclick", (t) => {
      const [r, i] = e(t);
      this.emit("dblclick", r, i);
    }), this.options.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const { scrollLeft: t, scrollWidth: r, clientWidth: i } = this.scrollContainer, s = t / r, a = (t + i) / r;
      this.emit("scroll", s, a, t, t + i);
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
    this.subscriptions.push(function(e, t, r, i, s = 3, a = 0, c = 100) {
      if (!e) return () => {
      };
      const u = matchMedia("(pointer: coarse)").matches;
      let h = () => {
      };
      const d = (f) => {
        if (f.button !== a) return;
        f.preventDefault(), f.stopPropagation();
        let m = f.clientX, g = f.clientY, y = !1;
        const T = Date.now(), w = (p) => {
          if (p.preventDefault(), p.stopPropagation(), u && Date.now() - T < c) return;
          const b = p.clientX, E = p.clientY, N = b - m, A = E - g;
          if (y || Math.abs(N) > s || Math.abs(A) > s) {
            const $ = e.getBoundingClientRect(), { left: z, top: B } = $;
            y || (r == null || r(m - z, g - B), y = !0), t(N, A, b - z, E - B), m = b, g = E;
          }
        }, k = (p) => {
          if (y) {
            const b = p.clientX, E = p.clientY, N = e.getBoundingClientRect(), { left: A, top: $ } = N;
            i == null || i(b - A, E - $);
          }
          h();
        }, R = (p) => {
          p.relatedTarget && p.relatedTarget !== document.documentElement || k(p);
        }, _ = (p) => {
          y && (p.stopPropagation(), p.preventDefault());
        }, x = (p) => {
          y && p.preventDefault();
        };
        document.addEventListener("pointermove", w), document.addEventListener("pointerup", k), document.addEventListener("pointerout", R), document.addEventListener("pointercancel", R), document.addEventListener("touchmove", x, { passive: !1 }), document.addEventListener("click", _, { capture: !0 }), h = () => {
          document.removeEventListener("pointermove", w), document.removeEventListener("pointerup", k), document.removeEventListener("pointerout", R), document.removeEventListener("pointercancel", R), document.removeEventListener("touchmove", x), setTimeout(() => {
            document.removeEventListener("click", _, { capture: !0 });
          }, 10);
        };
      };
      return e.addEventListener("pointerdown", d), () => {
        h(), e.removeEventListener("pointerdown", d);
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
      const s = this.parent.clientHeight || 128;
      return t != null && t.every((a) => !a.overlay) ? s / i : s;
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
    return this.timeouts.push(i), () => new Promise((s, a) => {
      i(), r = a, t = setTimeout(() => {
        t = void 0, r = void 0, s();
      }, e);
    });
  }
  convertColorValues(e) {
    if (!Array.isArray(e)) return e || "";
    if (e.length < 2) return e[0] || "";
    const t = document.createElement("canvas"), r = t.getContext("2d"), i = t.height * (window.devicePixelRatio || 1), s = r.createLinearGradient(0, 0, 0, i), a = 1 / (e.length - 1);
    return e.forEach((c, u) => {
      const h = u * a;
      s.addColorStop(h, c);
    }), s;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(e, t, r, i) {
    const s = e[0], a = e[1] || e[0], c = s.length, { width: u, height: h } = r.canvas, d = h / 2, f = this.getPixelRatio(), m = t.barWidth ? t.barWidth * f : 1, g = t.barGap ? t.barGap * f : t.barWidth ? m / 2 : 0, y = t.barRadius || 0, T = u / (m + g) / c, w = y && "roundRect" in r ? "roundRect" : "rect";
    r.beginPath();
    let k = 0, R = 0, _ = 0;
    for (let x = 0; x <= c; x++) {
      const p = Math.round(x * T);
      if (p > k) {
        const N = Math.round(R * d * i), A = N + Math.round(_ * d * i) || 1;
        let $ = d - N;
        t.barAlign === "top" ? $ = 0 : t.barAlign === "bottom" && ($ = h - A), r[w](k * (m + g), $, m, A, y), k = p, R = 0, _ = 0;
      }
      const b = Math.abs(s[x] || 0), E = Math.abs(a[x] || 0);
      b > R && (R = b), E > _ && (_ = E);
    }
    r.fill(), r.closePath();
  }
  renderLineWaveform(e, t, r, i) {
    const s = (a) => {
      const c = e[a] || e[0], u = c.length, { height: h } = r.canvas, d = h / 2, f = r.canvas.width / u;
      r.moveTo(0, d);
      let m = 0, g = 0;
      for (let y = 0; y <= u; y++) {
        const T = Math.round(y * f);
        if (T > m) {
          const k = d + (Math.round(g * d * i) || 1) * (a === 0 ? -1 : 1);
          r.lineTo(m, k), m = T, g = 0;
        }
        const w = Math.abs(c[y] || 0);
        w > g && (g = w);
      }
      r.lineTo(m, d);
    };
    r.beginPath(), s(0), s(1), r.fill(), r.closePath();
  }
  renderWaveform(e, t, r) {
    if (r.fillStyle = this.convertColorValues(t.waveColor), t.renderFunction) return void t.renderFunction(e, r);
    let i = t.barHeight || 1;
    if (t.normalize) {
      const s = Array.from(e[0]).reduce((a, c) => Math.max(a, Math.abs(c)), 0);
      i = s ? 1 / s : 1;
    }
    t.barWidth || t.barGap || t.barAlign ? this.renderBarWaveform(e, t, r, i) : this.renderLineWaveform(e, t, r, i);
  }
  renderSingleCanvas(e, t, r, i, s, a, c) {
    const u = this.getPixelRatio(), h = document.createElement("canvas");
    h.width = Math.round(r * u), h.height = Math.round(i * u), h.style.width = `${r}px`, h.style.height = `${i}px`, h.style.left = `${Math.round(s)}px`, a.appendChild(h);
    const d = h.getContext("2d");
    if (this.renderWaveform(e, t, d), h.width > 0 && h.height > 0) {
      const f = h.cloneNode(), m = f.getContext("2d");
      m.drawImage(h, 0, 0), m.globalCompositeOperation = "source-in", m.fillStyle = this.convertColorValues(t.progressColor), m.fillRect(0, 0, h.width, h.height), c.appendChild(f);
    }
  }
  renderMultiCanvas(e, t, r, i, s, a) {
    const c = this.getPixelRatio(), { clientWidth: u } = this.scrollContainer, h = r / c;
    let d = Math.min(F.MAX_CANVAS_WIDTH, u, h), f = {};
    if (d === 0) return;
    if (t.barWidth || t.barGap) {
      const w = t.barWidth || 0.5, k = w + (t.barGap || w / 2);
      d % k != 0 && (d = Math.floor(d / k) * k);
    }
    const m = (w) => {
      if (w < 0 || w >= g || f[w]) return;
      f[w] = !0;
      const k = w * d, R = Math.min(h - k, d);
      if (R <= 0) return;
      const _ = e.map((x) => {
        const p = Math.floor(k / h * x.length), b = Math.floor((k + R) / h * x.length);
        return x.slice(p, b);
      });
      this.renderSingleCanvas(_, t, R, i, k, s, a);
    }, g = Math.ceil(h / d);
    if (!this.isScrollable) {
      for (let w = 0; w < g; w++) m(w);
      return;
    }
    const y = this.scrollContainer.scrollLeft / h, T = Math.floor(y * g);
    if (m(T - 1), m(T), m(T + 1), g > 1) {
      const w = this.on("scroll", () => {
        const { scrollLeft: k } = this.scrollContainer, R = Math.floor(k / h * g);
        Object.keys(f).length > F.MAX_NODES && (s.innerHTML = "", a.innerHTML = "", f = {}), m(R - 1), m(R), m(R + 1);
      });
      this.unsubscribeOnScroll.push(w);
    }
  }
  renderChannel(e, t, r, i) {
    var { overlay: s } = t, a = function(d, f) {
      var m = {};
      for (var g in d) Object.prototype.hasOwnProperty.call(d, g) && f.indexOf(g) < 0 && (m[g] = d[g]);
      if (d != null && typeof Object.getOwnPropertySymbols == "function") {
        var y = 0;
        for (g = Object.getOwnPropertySymbols(d); y < g.length; y++) f.indexOf(g[y]) < 0 && Object.prototype.propertyIsEnumerable.call(d, g[y]) && (m[g[y]] = d[g[y]]);
      }
      return m;
    }(t, ["overlay"]);
    const c = document.createElement("div"), u = this.getHeight(a.height, a.splitChannels);
    c.style.height = `${u}px`, s && i > 0 && (c.style.marginTop = `-${u}px`), this.canvasWrapper.style.minHeight = `${u}px`, this.canvasWrapper.appendChild(c);
    const h = c.cloneNode();
    this.progressWrapper.appendChild(h), this.renderMultiCanvas(e, a, r, u, c, h);
  }
  render(e) {
    return j(this, void 0, void 0, function* () {
      var t;
      this.timeouts.forEach((u) => u()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", this.options.width != null && (this.scrollContainer.style.width = typeof this.options.width == "number" ? `${this.options.width}px` : this.options.width);
      const r = this.getPixelRatio(), i = this.scrollContainer.clientWidth, s = Math.ceil(e.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = s > i;
      const a = this.options.fillParent && !this.isScrollable, c = (a ? i : s) * r;
      if (this.wrapper.style.width = a ? "100%" : `${s}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e, this.emit("render"), this.options.splitChannels) for (let u = 0; u < e.numberOfChannels; u++) {
        const h = Object.assign(Object.assign({}, this.options), (t = this.options.splitChannels) === null || t === void 0 ? void 0 : t[u]);
        this.renderChannel([e.getChannelData(u)], h, c, u);
      }
      else {
        const u = [e.getChannelData(0)];
        e.numberOfChannels > 1 && u.push(e.getChannelData(1)), this.renderChannel(u, this.options, c, 0);
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
    const { scrollLeft: r, scrollWidth: i, clientWidth: s } = this.scrollContainer, a = e * i, c = r, u = r + s, h = s / 2;
    if (this.isDragging)
      a + 30 > u ? this.scrollContainer.scrollLeft += 30 : a - 30 < c && (this.scrollContainer.scrollLeft -= 30);
    else {
      (a < c || a > u) && (this.scrollContainer.scrollLeft = a - (this.options.autoCenter ? h : 0));
      const d = a - r - h;
      t && this.options.autoCenter && d > 0 && (this.scrollContainer.scrollLeft += Math.min(d, 10));
    }
    {
      const d = this.scrollContainer.scrollLeft, f = d / i, m = (d + s) / i;
      this.emit("scroll", f, m, d, d + s);
    }
  }
  renderProgress(e, t) {
    if (isNaN(e)) return;
    const r = 100 * e;
    this.canvasWrapper.style.clipPath = `polygon(${r}% 0, 100% 0, 100% 100%, ${r}% 100%)`, this.progressWrapper.style.width = `${r}%`, this.cursor.style.left = `${r}%`, this.cursor.style.transform = `translateX(-${Math.round(r) === 100 ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(e, t);
  }
  exportImage(e, t, r) {
    return j(this, void 0, void 0, function* () {
      const i = this.canvasWrapper.querySelectorAll("canvas");
      if (!i.length) throw new Error("No waveform data");
      if (r === "dataURL") {
        const s = Array.from(i).map((a) => a.toDataURL(e, t));
        return Promise.resolve(s);
      }
      return Promise.all(Array.from(i).map((s) => new Promise((a, c) => {
        s.toBlob((u) => {
          u ? a(u) : c(new Error("Could not export image"));
        }, e, t);
      })));
    });
  }
}
F.MAX_CANVAS_WIDTH = 8e3, F.MAX_NODES = 10;
class Ae extends G {
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
class re extends G {
  constructor(e = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = e, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return j(this, void 0, void 0, function* () {
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
    return j(this, void 0, void 0, function* () {
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
    return j(this, void 0, void 0, function* () {
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
const $e = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class V extends De {
  static create(e) {
    return new V(e);
  }
  constructor(e) {
    const t = e.media || (e.backend === "WebAudio" ? new re() : void 0);
    super({ media: t, mediaControls: e.mediaControls, autoplay: e.autoplay, playbackRate: e.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, $e, e), this.timer = new Ae();
    const r = t ? void 0 : this.getMediaElement();
    this.renderer = new F(this.options, r), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const i = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const { peaks: s, duration: a } = this.options;
      (i || s && a) && this.load(i, s, a).catch(() => null);
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
      const s = this.getDuration();
      this.emit("scroll", e * s, t * s, r, i);
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
    this.options = Object.assign({}, this.options, e), e.duration && !e.peaks && (this.decodedData = X.createBuffer(this.exportPeaks(), e.duration)), e.peaks && e.duration && (this.decodedData = X.createBuffer(e.peaks, e.duration)), this.renderer.setOptions(this.options), e.audioRate && this.setPlaybackRate(e.audioRate), e.mediaControls != null && (this.getMediaElement().controls = e.mediaControls);
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
    return j(this, void 0, void 0, function* () {
      var s;
      if (this.emit("load", e), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !t && !r) {
        const c = this.options.fetchParams || {};
        window.AbortController && !c.signal && (this.abortController = new AbortController(), c.signal = (s = this.abortController) === null || s === void 0 ? void 0 : s.signal);
        const u = (d) => this.emit("loading", d);
        t = yield Oe.fetchBlob(e, u, c);
        const h = this.options.blobMimeType;
        h && (t = new Blob([t], { type: h }));
      }
      this.setSrc(e, t);
      const a = yield new Promise((c) => {
        const u = i || this.getDuration();
        u ? c(u) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => c(this.getDuration()), { once: !0 }));
      });
      if (!e && !t) {
        const c = this.getMediaElement();
        c instanceof re && (c.duration = a);
      }
      if (r) this.decodedData = X.createBuffer(r, a || 0);
      else if (t) {
        const c = yield t.arrayBuffer();
        this.decodedData = yield X.decode(c, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e, t, r) {
    return j(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e, void 0, t, r);
      } catch (i) {
        throw this.emit("error", i), i;
      }
    });
  }
  loadBlob(e, t, r) {
    return j(this, void 0, void 0, function* () {
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
    const i = Math.min(e, this.decodedData.numberOfChannels), s = [];
    for (let a = 0; a < i; a++) {
      const c = this.decodedData.getChannelData(a), u = [], h = c.length / t;
      for (let d = 0; d < t; d++) {
        const f = c.slice(Math.floor(d * h), Math.ceil((d + 1) * h));
        let m = 0;
        for (let g = 0; g < f.length; g++) {
          const y = f[g];
          Math.abs(y) > Math.abs(m) && (m = y);
        }
        u.push(Math.round(m * r) / r);
      }
      s.push(u);
    }
    return s;
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
    return j(this, void 0, void 0, function* () {
      e != null && this.setTime(e);
      const i = yield r.play.call(this);
      return t != null && (this.media instanceof re ? this.media.stopAt(t) : this.stopAtPosition = t), i;
    });
  }
  playPause() {
    return j(this, void 0, void 0, function* () {
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
    return j(this, arguments, void 0, function* (e = "image/png", t = 1, r = "dataURL") {
      return this.renderer.exportImage(e, t, r);
    });
  }
  destroy() {
    var e;
    this.emit("destroy"), (e = this.abortController) === null || e === void 0 || e.abort(), this.plugins.forEach((t) => t.destroy()), this.subscriptions.forEach((t) => t()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
V.BasePlugin = class extends G {
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
}, V.dom = Ne;
const Le = (n, e) => {
  const [t, r] = O(null);
  return Y(() => {
    if (!n.current) return;
    const i = V.create({
      ...e,
      container: n.current
    });
    return r(i), () => {
      i.destroy();
    };
  }, [e, n]), t;
}, We = C.div`
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
`, ze = Re((n) => {
  const e = J(null), [t, r] = O(!1), [i, s] = O(0.5), [a, c] = O(0), [u, h] = O(
    k(0)
  ), [d, f] = O(!1), m = Le(e, n), g = J(null), { onPlay: y, onReady: T } = n, w = Se(() => {
    m.playPause();
  }, [m]);
  Y(() => {
    if (!m) return;
    m.setVolume(i);
    const x = () => ({
      media: m.getMediaElement(),
      peaks: m.exportPeaks()
    }), p = [
      m.on("ready", () => {
        T && T(x()), c(
          k(
            Math.round(m.getDuration() * 1e3)
          )
        ), r(m.isPlaying());
      }),
      m.on("play", () => {
        y && y((b) => {
          const E = x();
          return !b || b.media !== E.media ? (b && (b.media.pause(), b.media.currentTime = 0), E) : b;
        }), r(!0);
      }),
      m.on("audioprocess", () => {
        h(
          k(
            Math.round(m.getCurrentTime() * 1e3)
          )
        );
      }),
      m.on("pause", () => r(!1))
    ];
    return () => {
      p.forEach((b) => b());
    };
  }, [m, y, T, i]), Y(() => {
    const x = g.current;
    x.style.setProperty("--value", x.value), x.style.setProperty("--min", x.min === "" ? "0" : x.min), x.style.setProperty("--max", x.max === "" ? "100" : x.max), x.style.setProperty("--value", x.value);
  }, []);
  function k(x) {
    var p = Math.floor(x / 6e4), b = (x % 6e4 / 1e3).toFixed(0);
    return p + ":" + (b < 10 ? "0" : "") + b;
  }
  function R(x) {
    s(x.target.value);
    const p = x.target;
    p.style.setProperty("--value", p.value), p.style.setProperty("--min", p.min === "" ? "0" : p.min), p.style.setProperty("--max", p.max === "" ? "100" : p.max), p.style.setProperty("--value", p.value);
  }
  function _() {
    f(!d);
  }
  return /* @__PURE__ */ o.jsxs(We, { children: [
    t ? /* @__PURE__ */ o.jsx(
      "img",
      {
        className: "play-icon",
        src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",
        onClick: w
      }
    ) : /* @__PURE__ */ o.jsx(
      "img",
      {
        className: "play-icon",
        src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",
        onClick: w
      }
    ),
    /* @__PURE__ */ o.jsx("div", { ref: e, style: { width: "100%" } }),
    /* @__PURE__ */ o.jsxs("p", { className: "waveform-time", children: [
      /* @__PURE__ */ o.jsx("span", { children: u }),
      " / ",
      /* @__PURE__ */ o.jsx("span", { children: a })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "volume-container", children: [
      /* @__PURE__ */ o.jsx(
        "img",
        {
          className: "volume-icon",
          src: "https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",
          onClick: _
        }
      ),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          ref: g,
          className: "styled-slider slider-progress",
          type: "range",
          id: "volume-slider",
          min: 0,
          max: 1,
          step: 0.1,
          value: i,
          onChange: R,
          style: {
            opacity: d ? 1 : 0,
            pointerEvents: d ? "all" : "none"
          }
        }
      )
    ] })
  ] });
}), W = Te`

   @media (prefers-color-scheme: dark) {
        :root {
            --color-bg: #121212;
            --color-page: #1b1b1b;
            --color-font: #b6b6b6;
        }
        body {
            background-color: var(--color-bg);
            color: var(--color-font) !important;
        }
        h1, h2, h3, h4, h5, h6, p {
            color: var(--color-font) !important;
        }
        .Page {
            background-color: var(--color-page);
        } 
        .MainContainer {
            background-color: var(--color-bg);
        }
        #article-main{
            border-color: rgb(49 49 49) black !important;
        }
        @media (min-width: 520px) {
            .MainContainer {
                border-right: 1px solid rgb(0 0 0 / 50%);
                border-left: 1px solid rgb(0 0 0 / 50%);
        }    
    }
`, we = C.div`
    margin-block-start: 1em;
    margin-block-end: 100px;
`, Ie = C.div`
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
function Rt({ data: n }) {
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(W, {}),
    /* @__PURE__ */ o.jsxs(Ie, { children: [
      /* @__PURE__ */ o.jsxs("div", { className: "card-image--container", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: `https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${n.imgSrc}.jpg`,
            className: "card-image"
          }
        ),
        /* @__PURE__ */ o.jsx("p", { className: "card-name", children: n.name })
      ] }),
      /* @__PURE__ */ o.jsx("p", { className: "card-quote", children: n.quote }),
      /* @__PURE__ */ o.jsx(
        ze,
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
var ie = {}, ne = {}, fe;
function Fe() {
  return fe || (fe = 1, function(n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e;
    function t(i, s, a) {
      return s in i ? Object.defineProperty(i, s, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : i[s] = a, i;
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
    n.default = r;
  }(ne)), ne;
}
var se = {}, ge;
function Be() {
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
  }(se)), se;
}
var be;
function He() {
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
    var e = r(Fe()), t = r(Be());
    function r(i) {
      return i && i.__esModule ? i : { default: i };
    }
  }(ie)), ie;
}
He();
const qe = C.div`
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
function Ye({ headline: n, standfirst: e }) {
  return /* @__PURE__ */ o.jsxs(qe, { children: [
    n && /* @__PURE__ */ o.jsx("h1", { className: "headline", children: n }),
    e && /* @__PURE__ */ o.jsx("p", { className: "standfirst", children: e })
  ] });
}
const Ve = C.div`
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
`, Ge = C.img`
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
function Ue({
  data: n,
  clickedImage: e,
  setClickedImage: t,
  setShowTooltip: r,
  setTooltipPos: i
}) {
  function s(c, u) {
    t(u), r(!0), i([
      c.clientX,
      c.target.offsetTop + c.target.offsetHeight - 20
    ]);
  }
  const a = n.map((c) => /* @__PURE__ */ o.jsx(
    Ge,
    {
      src: `https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${c.imgSrc}.jpg`,
      alt: c.name,
      grayscale: !1,
      lazy: !0,
      onClick: (u) => s(u, c),
      isHovered: e === c
    },
    c.id
  ));
  return /* @__PURE__ */ o.jsx(Ve, { children: a });
}
const Xe = C.div`
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

    @media (prefers-color-scheme: dark) {
        background-color: #1b1b1b;
    }

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
function Je({
  clickedImage: n,
  setClickedImage: e,
  tooltipPos: t,
  showTooltip: r,
  setShowTooltip: i,
  isImageInLastRow: s
}) {
  if (!n) return;
  function a() {
    i(!1), e(null);
  }
  return /* @__PURE__ */ o.jsxs(
    Xe,
    {
      showTooltip: r,
      tooltipPos: t,
      isImageInLastRow: s,
      children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            className: "tooltip-image",
            src: `https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${n.imgSrc}.jpg`,
            alt: n.name
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: "tooltip-content", children: [
          /* @__PURE__ */ o.jsx("h3", { children: n.name }),
          /* @__PURE__ */ o.jsx("p", { children: n.copy })
        ] }),
        /* @__PURE__ */ o.jsx("button", { className: "tooltip-close", onClick: a, children: /* @__PURE__ */ o.jsx("img", { src: "https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg" }) })
      ]
    }
  );
}
function St({ data: n }) {
  const [e, t] = O(null), [r, i] = O(!1), [s, a] = O([0, 0]);
  let u = n.length - n.indexOf(e) <= 7;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(W, {}),
    /* @__PURE__ */ o.jsxs(we, { children: [
      /* @__PURE__ */ o.jsx(
        Ye,
        {
          headline: "Lorem ipsum dolor sit amet",
          standfirst: "Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"
        }
      ),
      /* @__PURE__ */ o.jsx(
        Ue,
        {
          data: n,
          clickedImage: e,
          setClickedImage: t,
          setShowTooltip: i,
          setTooltipPos: a
        }
      ),
      /* @__PURE__ */ o.jsx(
        Je,
        {
          clickedImage: e,
          setClickedImage: t,
          showTooltip: r,
          setShowTooltip: i,
          tooltipPos: s,
          isImageInLastRow: u
        }
      )
    ] })
  ] });
}
C.div`
    position: relative;
    width: 100%;
`;
const Ze = C.div`
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
`, Qe = C.div`
    position: relative;
    width: 100%;
    height: 100%;
`, Ke = C.div`
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
`, et = C.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`, tt = C.p`
    line-height: 1.4;
    font-size: ${({ size: n }) => n === "lg" ? "20px" : "16px"} !important;
    padding: 1rem;
    font-weight: 400;
    max-width: 600px;
    background: white;
    @media (prefers-color-scheme: dark) {
        background-color: #1b1b1b;
    }
    z-index: 1;
    font-size: 18px;
    line-height: 30px;
`;
function Tt({ data: n }) {
  const {
    slides: e = [],
    imgFit: t = "cover",
    containerWidth: r = "edge-to-edge",
    borderRadius: i = "0",
    fixedImgHeight: s,
    fontSize: a = "md",
    videoLoop: c = !0,
    videoAutoplay: u = !0,
    videoControls: h = !1,
    videoMute: d = !0
  } = n, [f, m] = O(0), [g, y] = O([]), T = J([]), w = J([]);
  Y(() => {
    const p = new IntersectionObserver(
      (b) => {
        b.forEach((E) => {
          if (E.isIntersecting) {
            const N = parseInt(E.target.dataset.index, 10);
            m(N);
          }
        });
      },
      { threshold: 0.6 }
    );
    return T.current.forEach((b) => b && p.observe(b)), () => p.disconnect();
  }, [e.length]), Y(() => {
    const p = e.map((b, E) => E === f);
    y(p);
  }, [f, e]);
  const k = (p) => g[p] ? 2 : 1, R = (p) => {
    var b;
    if (p.includes("youtube.com")) {
      const E = (b = p.split("v=")[1]) == null ? void 0 : b.split("&")[0];
      return `https://www.youtube.com/embed/${E}?autoplay=${u ? 1 : 0}&loop=${c ? 1 : 0}&controls=${h ? 1 : 0}&mute=${d ? 1 : 0}&playlist=${E}`;
    } else if (p.includes("vimeo.com"))
      return `https://player.vimeo.com/video/${p.split("/").pop()}?autoplay=${u ? 1 : 0}&loop=${c ? 1 : 0}&controls=${h ? 1 : 0}&muted=${d ? 1 : 0}`;
    return p;
  }, _ = (p) => p.includes("youtube.com") || p.includes("youtu.be"), x = (p) => p.endsWith(".mp4");
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(W, {}),
    /* @__PURE__ */ o.jsxs(we, { children: [
      /* @__PURE__ */ o.jsx(
        Ze,
        {
          style: {
            height: s || "500px"
          },
          className: r === "edge-to-edge" ? "edge-to-edge" : r === "bleed" ? "bleed" : "",
          children: /* @__PURE__ */ o.jsx(Qe, { children: e.map((p, b) => /* @__PURE__ */ o.jsx(
            Ke,
            {
              ref: (E) => w.current[b] = E,
              className: g[b] ? "overlap" : "",
              style: { zIndex: k(b) },
              children: _(p.media) ? /* @__PURE__ */ o.jsx(
                "iframe",
                {
                  title: "YouTube video",
                  src: R(p.media),
                  frameBorder: "0",
                  allow: "autoplay; encrypted-media",
                  allowFullScreen: !0,
                  style: {
                    objectFit: t,
                    width: "100%",
                    height: s || (r === "edge-to-edge" ? "100vh" : "100%"),
                    borderRadius: i
                  }
                }
              ) : x(p.media) ? /* @__PURE__ */ o.jsx(
                "video",
                {
                  autoPlay: u,
                  loop: c,
                  controls: h,
                  muted: d,
                  style: {
                    objectFit: t,
                    width: "100%",
                    height: s || "100%",
                    borderRadius: i
                  },
                  children: /* @__PURE__ */ o.jsx(
                    "source",
                    {
                      src: p.media,
                      type: "video/mp4"
                    }
                  )
                }
              ) : /* @__PURE__ */ o.jsx(
                "img",
                {
                  src: p.media,
                  alt: p.altText || "Slide image",
                  style: {
                    objectFit: t,
                    width: "100%",
                    height: s || "100%",
                    borderRadius: i
                  }
                }
              )
            },
            b
          )) })
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "scroller-sections", children: e.map((p, b) => /* @__PURE__ */ o.jsx(
        et,
        {
          className: "trigger",
          "data-index": b,
          ref: (E) => T.current[b] = E,
          children: p.text && /* @__PURE__ */ o.jsx(
            tt,
            {
              size: a,
              dangerouslySetInnerHTML: {
                __html: p.text
              }
            }
          )
        },
        b
      )) })
    ] })
  ] });
}
const rt = C.div`
    h3 {
        line-height: 20px;
        color: #000;
        font-size: 22px;
        font-weight: 700;
        margin: 0 auto;
        padding: 0 0 4px;
        text-align: left;
    }

    h4 {
        line-height: 20px;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        margin: 0 auto 15px;
        padding: 0 0 4px;
        text-align: left;
    }

    .chart-title {
        line-height: 20px;
        color: #000;
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
`, it = ({ data: n = {}, children: e }) => {
  const {
    hed: t = "",
    dek: r = "",
    chartTitle: i = "",
    note: s = "",
    source: a = ""
  } = n;
  return /* @__PURE__ */ o.jsxs(rt, { children: [
    t && /* @__PURE__ */ o.jsx("h3", { children: t }),
    r && /* @__PURE__ */ o.jsx("h4", { children: r }),
    i && /* @__PURE__ */ o.jsx("p", { className: "chart-title", children: i }),
    e,
    (s || a) && /* @__PURE__ */ o.jsxs("div", { className: "note-container", children: [
      s && /* @__PURE__ */ o.jsx("p", { className: "note", children: s }),
      a && /* @__PURE__ */ o.jsx("p", { className: "note", children: a })
    ] })
  ] });
}, nt = C.div`
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
`, st = C.div`
    margin-top: 10px;
    text-align: left;
    font-family: Roboto-Regular, Roboto-Regular-fallback, sans-serif;
    p {
        font-size: 14px;
        color: rgb(105, 105, 105);
        line-height: 19px;
        margin-bottom: 4px;
        text-align: left;
    }
`, ot = C.div`
    position: absolute;
    top: 0;
    background-color: black;
    color: #fff;
    padding: 10px;
    border-radius: ${({ $imgBorderRadius: n }) => `${n} 0 0 0`};

    p {
        color: #fff;
        font-size: 12px;
        margin: 0;
    }
`, at = C.div`
    position: relative;

    iframe,
    video,
    img {
        width: 100%;
        height: auto;
        border: none;
        ${({ $containerWidth: n, $fixedImgHeight: e, $imgBorderRadius: t }) => n === "edge-to-edge" ? te`
                    height: 100vh;
                    object-fit: cover;
                    border-radius: ${t};
                ` : n === "bleed" || n === "inline" && e ? te`
                    height: ${e};
                    object-fit: cover;
                    border-radius: ${t};
                ` : te`
                border-radius: ${t};
            `}
    }
`, lt = (n, e, t, r, i) => {
  var s;
  if (n.includes("youtube.com")) {
    const a = (s = n.split("v=")[1]) == null ? void 0 : s.split("&")[0];
    return `https://www.youtube.com/embed/${a}?autoplay=${e ? 1 : 0}&loop=${t ? 1 : 0}&controls=${r ? 1 : 0}&mute=${i ? 1 : 0}&playlist=${a}`;
  } else if (n.includes("vimeo.com"))
    return `https://player.vimeo.com/video/${n.split("/").pop()}?autoplay=${e ? 1 : 0}&loop=${t ? 1 : 0}&controls=${r ? 1 : 0}&muted=${i ? 1 : 0}`;
  return n;
}, ct = ({ data: n }) => {
  if (!n) return null;
  const {
    fixedImgHeight: e = null,
    containerWidth: t = "inline",
    imgBorderRadius: r = null,
    media: i = "",
    videoLoop: s = "true",
    videoAutoplay: a = "true",
    videoControls: c = "false",
    videoMute: u = "true",
    text: h,
    caption: d,
    altText: f
  } = n, w = lt(
    i,
    a === !0,
    s === !0,
    c === !0,
    u === !0
  ), k = /* @__PURE__ */ o.jsxs(
    at,
    {
      $containerWidth: t,
      $fixedImgHeight: e,
      $imgBorderRadius: r,
      children: [
        i.includes("youtube.com") || i.includes("vimeo.com") ? /* @__PURE__ */ o.jsx(
          "iframe",
          {
            src: w,
            title: "Embedded media",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0
          }
        ) : i.endsWith(".mp4") ? /* @__PURE__ */ o.jsxs(
          "video",
          {
            autoPlay: a,
            loop: s,
            controls: c,
            muted: u,
            children: [
              /* @__PURE__ */ o.jsx("source", { src: i, type: "video/mp4" }),
              /* @__PURE__ */ o.jsx(
                "track",
                {
                  kind: "captions",
                  src: i.replace(".mp4", ".vtt"),
                  label: "English"
                }
              ),
              "Your browser does not support the video tag."
            ]
          }
        ) : /* @__PURE__ */ o.jsx("img", { src: i, alt: f }),
        h && /* @__PURE__ */ o.jsx(
          st,
          {
            $imgBorderRadius: r,
            dangerouslySetInnerHTML: { __html: h }
          }
        ),
        d && /* @__PURE__ */ o.jsx(
          ot,
          {
            $imgBorderRadius: r,
            dangerouslySetInnerHTML: { __html: d }
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(W, {}),
    /* @__PURE__ */ o.jsx(nt, { className: t, children: /* @__PURE__ */ o.jsx(it, { data: n, children: k }) })
  ] });
}, dt = C.h1`
    box-sizing: border-box;
    padding: 0px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin: 0px 0px 7px;
    font-weight: 600;
    font-size: 30px;
    line-height: 33px;
    color: rgb(29, 29, 27);
    text-align: ${({ align: n }) => n || "left"};

    font-family: TimesModern-Bold, TimesModern-Bold-fallback, serif;
    @media (min-width: 768px) {
        font-size: 45px;
        line-height: 45px;
    }
`, ut = ({ text: n, align: e = "left" }) => n ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  /* @__PURE__ */ o.jsx(W, {}),
  /* @__PURE__ */ o.jsx(dt, { align: e, children: n })
] }) : null, ht = C.p`
    font-family: TimesModern-Regular, TimesModern-Regular-fallback, serif;
    font-size: 20px;
    line-height: 26px;
    color: rgb(51, 51, 51);
    padding-bottom: 10px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    text-align: ${({ align: n }) => n || "left"};
`, pt = ({ text: n, align: e = "left" }) => n ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  /* @__PURE__ */ o.jsx(W, {}),
  /* @__PURE__ */ o.jsx(ht, { align: e, children: n })
] }) : null, mt = je`
  0% { opacity: 1 }
  50% { opacity: 0 }
  100% { opacity: 1 }
`, ft = C.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;

    ${({ withContainer: n }) => n && `
    margin-bottom: 15px;
    margin-top: 5px;
  `}
`, gt = C.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    p {
        color: rgb(51, 51, 51);
        font-family: Roboto-Regular;
        font-size: 14px;
        line-height: 16px;
    }
`, bt = C.div`
    display: flex;
    align-items: center;
    background: #9f0000;
    height: 24px;
    padding: 7px;
    display: flex;
    flex-direction: row;
    width: fit-content;
    color: white;
    gap: 6px;
    font-family: Roboto-Regular;
    font-weight: 200;
    font-size: 12px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`, vt = C.div`
    width: 6px;
    height: 6px;
    background: white;
    animation: ${mt} 1.2s infinite;
`, ve = C.div`
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;
    line-height: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: TimesDigitalW04-RegularSC;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ $type: n }) => {
  switch (n) {
    case "UPDATED":
      return "#3c81be";
    case "EXCLUSIVE":
      return "#c51d24";
    case "SPONSORED":
      return "#4d4d4d";
    case "NEW":
      return "#e34605";
    case "LONGREAD":
      return "#696969";
    default:
      return "#000";
  }
}};
`, xe = C.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
`, xt = (n) => {
  if (!n) return null;
  const e = new Date(n), t = { month: "long", day: "numeric" }, r = e.toLocaleDateString("en-US", t);
  let i = e.getHours();
  const s = e.getMinutes().toString().padStart(2, "0"), a = i >= 12 ? "pm" : "am";
  i = i % 12 || 12;
  const c = `${i}.${s}${a}`;
  return `Updated ${r}, ${c}`;
}, yt = ({
  flags: n = [],
  longRead: e = !1,
  withContainer: t = !0
}) => !n.length && !e ? null : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  /* @__PURE__ */ o.jsx(W, {}),
  /* @__PURE__ */ o.jsxs(ft, { withContainer: t, children: [
    n.map((r, i) => {
      const s = r.type;
      if (r.expiryTime && new Date(r.expiryTime) <= /* @__PURE__ */ new Date())
        return null;
      const a = xt(r.updatedTime);
      return s === "LIVE" || s === "BREAKING" ? /* @__PURE__ */ o.jsxs(gt, { children: [
        /* @__PURE__ */ o.jsxs(bt, { $type: s, children: [
          /* @__PURE__ */ o.jsx(vt, {}),
          /* @__PURE__ */ o.jsx("span", { className: "live-breaking", children: s })
        ] }, i),
        a && /* @__PURE__ */ o.jsx(
          "p",
          {
            className: "live-breaking",
            style: {
              fontWeight: 400,
              marginLeft: 6
            },
            children: a
          }
        )
      ] }) : /* @__PURE__ */ o.jsxs(ve, { $type: s, children: [
        /* @__PURE__ */ o.jsx(xe, {}),
        /* @__PURE__ */ o.jsx("span", { children: s })
      ] }, i);
    }),
    e && /* @__PURE__ */ o.jsxs(ve, { $type: "LONGREAD", children: [
      /* @__PURE__ */ o.jsx(xe, {}),
      /* @__PURE__ */ o.jsx("span", { children: "Long Read" })
    ] }, "longread")
  ] })
] }), wt = C.p`
    font-family: TimesModern-Regular, TimesModern-Regular-fallback, serif;
    font-size: 20px;
    line-height: 26px;
    color: rgb(51, 51, 51);
    padding-bottom: 10px;
    text-align: ${({ align: n }) => n || "left"};
`, kt = ({ text: n, align: e = "left" }) => n ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  /* @__PURE__ */ o.jsx(W, {}),
  /* @__PURE__ */ o.jsx(wt, { align: e, dangerouslySetInnerHTML: { __html: n } })
] }) : null, jt = ({ blocks: n, align: e = "left" }) => /* @__PURE__ */ o.jsx(o.Fragment, { children: n.map((t, r) => {
  switch (t.type) {
    case "headline":
      return /* @__PURE__ */ o.jsx(ut, { text: t.text, align: e }, r);
    case "description":
      return /* @__PURE__ */ o.jsx(pt, { text: t.text, align: e }, r);
    case "flags":
      return /* @__PURE__ */ o.jsx(
        yt,
        {
          withContainer: t.withContainer,
          longRead: t.longRead,
          flags: t.flags
        },
        r
      );
    case "text":
      return /* @__PURE__ */ o.jsx(kt, { text: t.text, align: e }, r);
    case "media":
      return /* @__PURE__ */ o.jsx(ct, { data: t.data }, r);
    default:
      return null;
  }
}) });
export {
  yt as ArticleFlags,
  Rt as AudioPlayer,
  pt as Description,
  ze as Equalizer,
  jt as FurnitureBlock,
  Ue as Grid,
  Ye as Header,
  ut as Headline,
  St as ImageGrid,
  ct as MediaBlock,
  Tt as ScrollStory,
  kt as Text,
  Je as Tooltip
};
