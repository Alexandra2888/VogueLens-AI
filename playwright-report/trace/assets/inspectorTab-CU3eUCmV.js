const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './codeMirrorModule-CljfAbcd.js',
      '../codeMirrorModule.ez37Vkbh.css',
    ])
) => i.map((i) => d[i]);
var Cp = Object.defineProperty;
var Np = (e, t, n) =>
  t in e
    ? Cp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var H = (e, t, n) => Np(e, typeof t != 'symbol' ? t + '' : t, n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var D1 =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function bp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Pc = { exports: {} },
  Eo = {},
  Rc = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = Symbol.for('react.element'),
  Ap = Symbol.for('react.portal'),
  Lp = Symbol.for('react.fragment'),
  Ip = Symbol.for('react.strict_mode'),
  Mp = Symbol.for('react.profiler'),
  Pp = Symbol.for('react.provider'),
  Rp = Symbol.for('react.context'),
  $p = Symbol.for('react.forward_ref'),
  Op = Symbol.for('react.suspense'),
  jp = Symbol.for('react.memo'),
  Dp = Symbol.for('react.lazy'),
  Ua = Symbol.iterator;
function zp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ua && e[Ua]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var $c = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Oc = Object.assign,
  jc = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = jc),
    (this.updater = n || $c);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Dc() {}
Dc.prototype = Qn.prototype;
function Rl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = jc),
    (this.updater = n || $c);
}
var $l = (Rl.prototype = new Dc());
$l.constructor = Rl;
Oc($l, Qn.prototype);
$l.isPureReactComponent = !0;
var Va = Array.isArray,
  zc = Object.prototype.hasOwnProperty,
  Ol = { current: null },
  Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hc(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      zc.call(t, r) && !Fc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Gr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Ol.current,
  };
}
function Fp(e, t) {
  return {
    $$typeof: Gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function jl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gr;
}
function Hp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ba = /\/+/g;
function Qo(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Hp('' + e.key)
    : t.toString(36);
}
function Ni(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Gr:
          case Ap:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + Qo(s, 0) : r),
      Va(i)
        ? ((n = ''),
          e != null && (n = e.replace(Ba, '$&/') + '/'),
          Ni(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (jl(i) &&
            (i = Fp(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Ba, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Va(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Qo(o, l);
      s += Ni(o, t, n, a, i);
    }
  else if (((a = zp(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Qo(o, l++)), (s += Ni(o, t, n, a, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function ii(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ni(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Up(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  bi = { transition: null },
  Vp = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: bi,
    ReactCurrentOwner: Ol,
  };
O.Children = {
  map: ii,
  forEach: function (e, t, n) {
    ii(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ii(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ii(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!jl(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
O.Component = Qn;
O.Fragment = Lp;
O.Profiler = Mp;
O.PureComponent = Rl;
O.StrictMode = Ip;
O.Suspense = Op;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vp;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Oc({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Ol.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      zc.call(t, a) &&
        !Fc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Gr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: Rp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pp, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Hc;
O.createFactory = function (e) {
  var t = Hc.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: $p, render: e };
};
O.isValidElement = jl;
O.lazy = function (e) {
  return { $$typeof: Dp, _payload: { _status: -1, _result: e }, _init: Up };
};
O.memo = function (e, t) {
  return { $$typeof: jp, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = bi.transition;
  bi.transition = {};
  try {
    e();
  } finally {
    bi.transition = t;
  }
};
O.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
O.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
O.useContext = function (e) {
  return Te.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
O.useId = function () {
  return Te.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return Te.current.useRef(e);
};
O.useState = function (e) {
  return Te.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return Te.current.useTransition();
};
O.version = '18.2.0';
Rc.exports = O;
var M = Rc.exports;
const Ze = bp(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bp = M,
  qp = Symbol.for('react.element'),
  Wp = Symbol.for('react.fragment'),
  Qp = Object.prototype.hasOwnProperty,
  Kp = Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uc(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Qp.call(t, r) && !Gp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: qp,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Kp.current,
  };
}
Eo.Fragment = Wp;
Eo.jsx = Uc;
Eo.jsxs = Uc;
Pc.exports = Eo;
var x = Pc.exports;
function Xp(e, t, n, r) {
  const [i, o] = Ze.useState(n);
  return (
    Ze.useEffect(() => {
      let s = !1;
      return (
        e().then((l) => {
          s || o(l);
        }),
        () => {
          s = !0;
        }
      );
    }, t),
    i
  );
}
function To() {
  const e = Ze.useRef(null),
    [t, n] = Ze.useState(new DOMRect(0, 0, 10, 10));
  return (
    Ze.useLayoutEffect(() => {
      const r = e.current;
      if (!r) return;
      const i = new ResizeObserver((o) => {
        const s = o[o.length - 1];
        s && s.contentRect && n(s.contentRect);
      });
      return i.observe(r), () => i.disconnect();
    }, [e]),
    [t, e]
  );
}
function Is(e) {
  if (e < 0 || !isFinite(e)) return '-';
  if (e === 0) return '0';
  if (e < 1e3) return e.toFixed(0) + 'ms';
  const t = e / 1e3;
  if (t < 60) return t.toFixed(1) + 's';
  const n = t / 60;
  if (n < 60) return n.toFixed(1) + 'm';
  const r = n / 60;
  return r < 24 ? r.toFixed(1) + 'h' : (r / 24).toFixed(1) + 'd';
}
function Yp(e) {
  if (e < 0 || !isFinite(e)) return '-';
  if (e === 0) return '0';
  if (e < 1e3) return e.toFixed(0);
  const t = e / 1024;
  if (t < 1e3) return t.toFixed(1) + 'K';
  const n = t / 1024;
  return n < 1e3 ? n.toFixed(1) + 'M' : (n / 1024).toFixed(1) + 'G';
}
function z1(e, t, n, r, i) {
  let o = 0,
    s = i !== void 0 ? i : e.length;
  for (; o < s; ) {
    const l = (o + s) >> 1;
    n(t, e[l]) >= 0 ? (o = l + 1) : (s = l);
  }
  return s;
}
function Jp(e) {
  const t = document.createElement('textarea');
  (t.style.position = 'absolute'),
    (t.style.zIndex = '-1000'),
    (t.value = e),
    document.body.appendChild(t),
    t.select(),
    document.execCommand('copy'),
    t.remove();
}
function qa(e, t) {
  e && (t = Yt.getObject(e, t));
  const [n, r] = Ze.useState(t),
    i = Ze.useCallback(
      (o) => {
        e ? Yt.setObject(e, o) : r(o);
      },
      [e, r]
    );
  return (
    Ze.useEffect(() => {
      if (e) {
        const o = () => r(Yt.getObject(e, t));
        return (
          Yt.onChangeEmitter.addEventListener(e, o),
          () => Yt.onChangeEmitter.removeEventListener(e, o)
        );
      }
    }, [t, e]),
    [n, i]
  );
}
class Zp {
  constructor() {
    this.onChangeEmitter = new EventTarget();
  }
  getString(t, n) {
    return localStorage[t] || n;
  }
  setString(t, n) {
    var r;
    (localStorage[t] = n),
      this.onChangeEmitter.dispatchEvent(new Event(t)),
      (r = window.saveSettings) == null || r.call(window);
  }
  getObject(t, n) {
    if (!localStorage[t]) return n;
    try {
      return JSON.parse(localStorage[t]);
    } catch {
      return n;
    }
  }
  setObject(t, n) {
    var r;
    (localStorage[t] = JSON.stringify(n)),
      this.onChangeEmitter.dispatchEvent(new Event(t)),
      (r = window.saveSettings) == null || r.call(window);
  }
}
const Yt = new Zp();
function et(...e) {
  return e.filter(Boolean).join(' ');
}
async function F1(e) {
  const t = new TextEncoder().encode(e);
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-1', t)))
    .map((n) => n.toString(16).padStart(2, '0'))
    .join('');
}
const Wa = '\\u0000-\\u0020\\u007f-\\u009f',
  eg = new RegExp(
    '(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|www\\.)[^\\s' +
      Wa +
      '"]{2,}[^\\s' +
      Wa +
      `"')}\\],:;.!?]`,
    'ug'
  );
function H1() {
  if (document.playwrightThemeInitialized) return;
  (document.playwrightThemeInitialized = !0),
    document.defaultView.addEventListener(
      'focus',
      (n) => {
        n.target.document.nodeType === Node.DOCUMENT_NODE &&
          document.body.classList.remove('inactive');
      },
      !1
    ),
    document.defaultView.addEventListener(
      'blur',
      (n) => {
        document.body.classList.add('inactive');
      },
      !1
    );
  const e = Yt.getString('theme', 'light-mode'),
    t = window.matchMedia('(prefers-color-scheme: dark)');
  (e === 'dark-mode' || t.matches) && document.body.classList.add('dark-mode');
}
const Dl = new Set();
function tg() {
  const e = Ms(),
    t = e === 'dark-mode' ? 'light-mode' : 'dark-mode';
  e && document.body.classList.remove(e),
    document.body.classList.add(t),
    Yt.setString('theme', t);
  for (const n of Dl) n(t);
}
function U1(e) {
  Dl.add(e);
}
function V1(e) {
  Dl.delete(e);
}
function Ms() {
  return document.body.classList.contains('dark-mode')
    ? 'dark-mode'
    : 'light-mode';
}
function B1() {
  const [e, t] = Ze.useState(Ms() === 'dark-mode');
  return [
    e,
    (n) => {
      (Ms() === 'dark-mode') !== n && tg(), t(n);
    },
  ];
}
var Vc = { exports: {} },
  ze = {},
  Bc = { exports: {} },
  qc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, R) {
    var $ = L.length;
    L.push(R);
    e: for (; 0 < $; ) {
      var J = ($ - 1) >>> 1,
        se = L[J];
      if (0 < i(se, R)) (L[J] = R), (L[$] = se), ($ = J);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var R = L[0],
      $ = L.pop();
    if ($ !== R) {
      L[0] = $;
      e: for (var J = 0, se = L.length, ni = se >>> 1; J < ni; ) {
        var Wt = 2 * (J + 1) - 1,
          Wo = L[Wt],
          Qt = Wt + 1,
          ri = L[Qt];
        if (0 > i(Wo, $))
          Qt < se && 0 > i(ri, Wo)
            ? ((L[J] = ri), (L[Qt] = $), (J = Qt))
            : ((L[J] = Wo), (L[Wt] = $), (J = Wt));
        else if (Qt < se && 0 > i(ri, $)) (L[J] = ri), (L[Qt] = $), (J = Qt);
        else break e;
      }
    }
    return R;
  }
  function i(L, R) {
    var $ = L.sortIndex - R.sortIndex;
    return $ !== 0 ? $ : L.id - R.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(L) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= L)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function _(L) {
    if (((v = !1), m(L), !y))
      if (n(a) !== null) (y = !0), er(T);
      else {
        var R = n(u);
        R !== null && tr(_, R.startTime - L);
      }
  }
  function T(L, R) {
    (y = !1), v && ((v = !1), p(b), (b = -1)), (g = !0);
    var $ = d;
    try {
      for (
        m(R), f = n(a);
        f !== null && (!(f.expirationTime > R) || (L && !D()));

      ) {
        var J = f.callback;
        if (typeof J == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var se = J(f.expirationTime <= R);
          (R = e.unstable_now()),
            typeof se == 'function' ? (f.callback = se) : f === n(a) && r(a),
            m(R);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ni = !0;
      else {
        var Wt = n(u);
        Wt !== null && tr(_, Wt.startTime - R), (ni = !1);
      }
      return ni;
    } finally {
      (f = null), (d = $), (g = !1);
    }
  }
  var E = !1,
    k = null,
    b = -1,
    S = 5,
    I = -1;
  function D() {
    return !(e.unstable_now() - I < S);
  }
  function N() {
    if (k !== null) {
      var L = e.unstable_now();
      I = L;
      var R = !0;
      try {
        R = k(!0, L);
      } finally {
        R ? P() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var P;
  if (typeof h == 'function')
    P = function () {
      h(N);
    };
  else if (typeof MessageChannel < 'u') {
    var Y = new MessageChannel(),
      it = Y.port2;
    (Y.port1.onmessage = N),
      (P = function () {
        it.postMessage(null);
      });
  } else
    P = function () {
      w(N, 0);
    };
  function er(L) {
    (k = L), E || ((E = !0), P());
  }
  function tr(L, R) {
    b = w(function () {
      L(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), er(T));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (S = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (L) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = d;
      }
      var $ = d;
      d = R;
      try {
        return L();
      } finally {
        d = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, R) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var $ = d;
      d = L;
      try {
        return R();
      } finally {
        d = $;
      }
    }),
    (e.unstable_scheduleCallback = function (L, R, $) {
      var J = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? J + $ : J))
          : ($ = J),
        L)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = $ + se),
        (L = {
          id: c++,
          callback: R,
          priorityLevel: L,
          startTime: $,
          expirationTime: se,
          sortIndex: -1,
        }),
        $ > J
          ? ((L.sortIndex = $),
            t(u, L),
            n(a) === null &&
              L === n(u) &&
              (v ? (p(b), (b = -1)) : (v = !0), tr(_, $ - J)))
          : ((L.sortIndex = se), t(a, L), y || g || ((y = !0), er(T))),
        L
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (L) {
      var R = d;
      return function () {
        var $ = d;
        d = R;
        try {
          return L.apply(this, arguments);
        } finally {
          d = $;
        }
      };
    });
})(qc);
Bc.exports = qc;
var ng = Bc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wc = M,
  je = ng;
function C(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Qc = new Set(),
  Mr = {};
function hn(e, t) {
  Fn(e, t), Fn(e + 'Capture', t);
}
function Fn(e, t) {
  for (Mr[e] = t, e = 0; e < t.length; e++) Qc.add(t[e]);
}
var wt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ps = Object.prototype.hasOwnProperty,
  rg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qa = {},
  Ka = {};
function ig(e) {
  return Ps.call(Ka, e)
    ? !0
    : Ps.call(Qa, e)
      ? !1
      : rg.test(e)
        ? (Ka[e] = !0)
        : ((Qa[e] = !0), !1);
}
function og(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function sg(e, t, n, r) {
  if (t === null || typeof t > 'u' || og(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ke(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var fe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  fe[e] = new ke(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  fe[e] = new ke(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  fe[e] = new ke(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zl = /[\-:]([a-z])/g;
function Fl(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(zl, Fl);
    fe[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(zl, Fl);
    fe[t] = new ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(zl, Fl);
  fe[t] = new ke(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hl(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (sg(t, n, i, r) && (n = null),
    r || i === null
      ? ig(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  oi = Symbol.for('react.element'),
  xn = Symbol.for('react.portal'),
  _n = Symbol.for('react.fragment'),
  Ul = Symbol.for('react.strict_mode'),
  Rs = Symbol.for('react.profiler'),
  Kc = Symbol.for('react.provider'),
  Gc = Symbol.for('react.context'),
  Vl = Symbol.for('react.forward_ref'),
  $s = Symbol.for('react.suspense'),
  Os = Symbol.for('react.suspense_list'),
  Bl = Symbol.for('react.memo'),
  kt = Symbol.for('react.lazy'),
  Xc = Symbol.for('react.offscreen'),
  Ga = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ga && e[Ga]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var G = Object.assign,
  Ko;
function gr(e) {
  if (Ko === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ko = (t && t[1]) || '';
    }
  return (
    `
` +
    Ko +
    e
  );
}
var Go = !1;
function Xo(e, t) {
  if (!e || Go) return '';
  Go = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Go = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? gr(e) : '';
}
function lg(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr('Lazy');
    case 13:
      return gr('Suspense');
    case 19:
      return gr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Xo(e.type, !1)), e;
    case 11:
      return (e = Xo(e.type.render, !1)), e;
    case 1:
      return (e = Xo(e.type, !0)), e;
    default:
      return '';
  }
}
function js(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case _n:
      return 'Fragment';
    case xn:
      return 'Portal';
    case Rs:
      return 'Profiler';
    case Ul:
      return 'StrictMode';
    case $s:
      return 'Suspense';
    case Os:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Gc:
        return (e.displayName || 'Context') + '.Consumer';
      case Kc:
        return (e._context.displayName || 'Context') + '.Provider';
      case Vl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Bl:
        return (
          (t = e.displayName || null), t !== null ? t : js(e.type) || 'Memo'
        );
      case kt:
        (t = e._payload), (e = e._init);
        try {
          return js(e(t));
        } catch {}
    }
  return null;
}
function ag(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return js(t);
    case 8:
      return t === Ul ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Ht(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Yc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function ug(e) {
  var t = Yc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = '' + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function si(e) {
  e._valueTracker || (e._valueTracker = ug(e));
}
function Jc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Yc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ds(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Xa(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Zc(e, t) {
  (t = t.checked), t != null && Hl(e, 'checked', t, !1);
}
function zs(e, t) {
  Zc(e, t);
  var n = Ht(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Fs(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Fs(e, t.type, Ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ya(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Fs(e, t, n) {
  (t !== 'number' || Qi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var mr = Array.isArray;
function Pn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Ht(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ja(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (mr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function ed(e, t) {
  var n = Ht(t.value),
    r = Ht(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Za(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function td(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Us(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? td(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var li,
  nd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        li = li || document.createElement('div'),
          li.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = li.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Er = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  cg = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Er).forEach(function (e) {
  cg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Er[t] = Er[e]);
  });
});
function rd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Er.hasOwnProperty(e) && Er[e])
      ? ('' + t).trim()
      : t + 'px';
}
function id(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = rd(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var dg = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Vs(e, t) {
  if (t) {
    if (dg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62));
  }
}
function Bs(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var qs = null;
function ql(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ws = null,
  Rn = null,
  $n = null;
function eu(e) {
  if ((e = Jr(e))) {
    if (typeof Ws != 'function') throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ao(t)), Ws(e.stateNode, e.type, t));
  }
}
function od(e) {
  Rn ? ($n ? $n.push(e) : ($n = [e])) : (Rn = e);
}
function sd() {
  if (Rn) {
    var e = Rn,
      t = $n;
    if ((($n = Rn = null), eu(e), t)) for (e = 0; e < t.length; e++) eu(t[e]);
  }
}
function ld(e, t) {
  return e(t);
}
function ad() {}
var Yo = !1;
function ud(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return ld(e, t, n);
  } finally {
    (Yo = !1), (Rn !== null || $n !== null) && (ad(), sd());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ao(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n));
  return n;
}
var Qs = !1;
if (wt)
  try {
    var rr = {};
    Object.defineProperty(rr, 'passive', {
      get: function () {
        Qs = !0;
      },
    }),
      window.addEventListener('test', rr, rr),
      window.removeEventListener('test', rr, rr);
  } catch {
    Qs = !1;
  }
function fg(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Tr = !1,
  Ki = null,
  Gi = !1,
  Ks = null,
  hg = {
    onError: function (e) {
      (Tr = !0), (Ki = e);
    },
  };
function pg(e, t, n, r, i, o, s, l, a) {
  (Tr = !1), (Ki = null), fg.apply(hg, arguments);
}
function gg(e, t, n, r, i, o, s, l, a) {
  if ((pg.apply(this, arguments), Tr)) {
    if (Tr) {
      var u = Ki;
      (Tr = !1), (Ki = null);
    } else throw Error(C(198));
    Gi || ((Gi = !0), (Ks = u));
  }
}
function pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tu(e) {
  if (pn(e) !== e) throw Error(C(188));
}
function mg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return tu(i), e;
        if (o === r) return tu(i), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function dd(e) {
  return (e = mg(e)), e !== null ? fd(e) : null;
}
function fd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hd = je.unstable_scheduleCallback,
  nu = je.unstable_cancelCallback,
  vg = je.unstable_shouldYield,
  yg = je.unstable_requestPaint,
  Z = je.unstable_now,
  wg = je.unstable_getCurrentPriorityLevel,
  Wl = je.unstable_ImmediatePriority,
  pd = je.unstable_UserBlockingPriority,
  Xi = je.unstable_NormalPriority,
  xg = je.unstable_LowPriority,
  gd = je.unstable_IdlePriority,
  ko = null,
  ct = null;
function _g(e) {
  if (ct && typeof ct.onCommitFiberRoot == 'function')
    try {
      ct.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : Tg,
  Sg = Math.log,
  Eg = Math.LN2;
function Tg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sg(e) / Eg) | 0)) | 0;
}
var ai = 64,
  ui = 4194304;
function vr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = vr(l)) : ((o &= s), o !== 0 && (r = vr(o)));
  } else (s = n & ~i), s !== 0 ? (r = vr(s)) : o !== 0 && (r = vr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function kg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Cg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - tt(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = kg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Gs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function md() {
  var e = ai;
  return (ai <<= 1), !(ai & 4194240) && (ai = 64), e;
}
function Jo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function Ng(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - tt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ql(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function vd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yd,
  Kl,
  wd,
  xd,
  _d,
  Xs = !1,
  ci = [],
  Pt = null,
  Rt = null,
  $t = null,
  $r = new Map(),
  Or = new Map(),
  At = [],
  bg =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function ru(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Pt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Rt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      $t = null;
      break;
    case 'pointerover':
    case 'pointerout':
      $r.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Or.delete(t.pointerId);
  }
}
function ir(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Jr(t)), t !== null && Kl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ag(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Pt = ir(Pt, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Rt = ir(Rt, e, t, n, r, i)), !0;
    case 'mouseover':
      return ($t = ir($t, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return $r.set(o, ir($r.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Or.set(o, ir(Or.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Sd(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cd(n)), t !== null)) {
          (e.blockedOn = t),
            _d(e.priority, function () {
              wd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ai(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ys(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qs = r), n.target.dispatchEvent(r), (qs = null);
    } else return (t = Jr(n)), t !== null && Kl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function iu(e, t, n) {
  Ai(e) && n.delete(t);
}
function Lg() {
  (Xs = !1),
    Pt !== null && Ai(Pt) && (Pt = null),
    Rt !== null && Ai(Rt) && (Rt = null),
    $t !== null && Ai($t) && ($t = null),
    $r.forEach(iu),
    Or.forEach(iu);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xs ||
      ((Xs = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, Lg)));
}
function jr(e) {
  function t(i) {
    return or(i, e);
  }
  if (0 < ci.length) {
    or(ci[0], e);
    for (var n = 1; n < ci.length; n++) {
      var r = ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Pt !== null && or(Pt, e),
      Rt !== null && or(Rt, e),
      $t !== null && or($t, e),
      $r.forEach(t),
      Or.forEach(t),
      n = 0;
    n < At.length;
    n++
  )
    (r = At[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < At.length && ((n = At[0]), n.blockedOn === null); )
    Sd(n), n.blockedOn === null && At.shift();
}
var On = Et.ReactCurrentBatchConfig,
  Ji = !0;
function Ig(e, t, n, r) {
  var i = z,
    o = On.transition;
  On.transition = null;
  try {
    (z = 1), Gl(e, t, n, r);
  } finally {
    (z = i), (On.transition = o);
  }
}
function Mg(e, t, n, r) {
  var i = z,
    o = On.transition;
  On.transition = null;
  try {
    (z = 4), Gl(e, t, n, r);
  } finally {
    (z = i), (On.transition = o);
  }
}
function Gl(e, t, n, r) {
  if (Ji) {
    var i = Ys(e, t, n, r);
    if (i === null) as(e, t, r, Zi, n), ru(e, r);
    else if (Ag(i, e, t, n, r)) r.stopPropagation();
    else if ((ru(e, r), t & 4 && -1 < bg.indexOf(e))) {
      for (; i !== null; ) {
        var o = Jr(i);
        if (
          (o !== null && yd(o),
          (o = Ys(e, t, n, r)),
          o === null && as(e, t, r, Zi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else as(e, t, r, null, n);
  }
}
var Zi = null;
function Ys(e, t, n, r) {
  if (((Zi = null), (e = ql(r)), (e = Jt(e)), e !== null))
    if (((t = pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zi = e), null;
}
function Ed(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (wg()) {
        case Wl:
          return 1;
        case pd:
          return 4;
        case Xi:
        case xg:
          return 16;
        case gd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null,
  Xl = null,
  Li = null;
function Td() {
  if (Li) return Li;
  var e,
    t = Xl,
    n = t.length,
    r,
    i = 'value' in It ? It.value : It.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Li = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ii(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function di() {
  return !0;
}
function ou() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? di
        : ou),
      (this.isPropagationStopped = ou),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = di));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = di));
      },
      persist: function () {},
      isPersistent: di,
    }),
    t
  );
}
var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yl = Fe(Kn),
  Yr = G({}, Kn, { view: 0, detail: 0 }),
  Pg = Fe(Yr),
  Zo,
  es,
  sr,
  Co = G({}, Yr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Jl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== sr &&
            (sr && e.type === 'mousemove'
              ? ((Zo = e.screenX - sr.screenX), (es = e.screenY - sr.screenY))
              : (es = Zo = 0),
            (sr = e)),
          Zo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : es;
    },
  }),
  su = Fe(Co),
  Rg = G({}, Co, { dataTransfer: 0 }),
  $g = Fe(Rg),
  Og = G({}, Yr, { relatedTarget: 0 }),
  ts = Fe(Og),
  jg = G({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dg = Fe(jg),
  zg = G({}, Kn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Fg = Fe(zg),
  Hg = G({}, Kn, { data: 0 }),
  lu = Fe(Hg),
  Ug = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Vg = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Bg = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function qg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Bg[e]) ? !!t[e] : !1;
}
function Jl() {
  return qg;
}
var Wg = G({}, Yr, {
    key: function (e) {
      if (e.key) {
        var t = Ug[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ii(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Vg[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jl,
    charCode: function (e) {
      return e.type === 'keypress' ? Ii(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ii(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Qg = Fe(Wg),
  Kg = G({}, Co, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  au = Fe(Kg),
  Gg = G({}, Yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jl,
  }),
  Xg = Fe(Gg),
  Yg = G({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jg = Fe(Yg),
  Zg = G({}, Co, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  em = Fe(Zg),
  tm = [9, 13, 27, 32],
  Zl = wt && 'CompositionEvent' in window,
  kr = null;
wt && 'documentMode' in document && (kr = document.documentMode);
var nm = wt && 'TextEvent' in window && !kr,
  kd = wt && (!Zl || (kr && 8 < kr && 11 >= kr)),
  uu = ' ',
  cu = !1;
function Cd(e, t) {
  switch (e) {
    case 'keyup':
      return tm.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Nd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Sn = !1;
function rm(e, t) {
  switch (e) {
    case 'compositionend':
      return Nd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((cu = !0), uu);
    case 'textInput':
      return (e = t.data), e === uu && cu ? null : e;
    default:
      return null;
  }
}
function im(e, t) {
  if (Sn)
    return e === 'compositionend' || (!Zl && Cd(e, t))
      ? ((e = Td()), (Li = Xl = It = null), (Sn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return kd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var om = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!om[e.type] : t === 'textarea';
}
function bd(e, t, n, r) {
  od(r),
    (t = eo(t, 'onChange')),
    0 < t.length &&
      ((n = new Yl('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cr = null,
  Dr = null;
function sm(e) {
  zd(e, 0);
}
function No(e) {
  var t = kn(e);
  if (Jc(t)) return e;
}
function lm(e, t) {
  if (e === 'change') return t;
}
var Ad = !1;
if (wt) {
  var ns;
  if (wt) {
    var rs = 'oninput' in document;
    if (!rs) {
      var fu = document.createElement('div');
      fu.setAttribute('oninput', 'return;'),
        (rs = typeof fu.oninput == 'function');
    }
    ns = rs;
  } else ns = !1;
  Ad = ns && (!document.documentMode || 9 < document.documentMode);
}
function hu() {
  Cr && (Cr.detachEvent('onpropertychange', Ld), (Dr = Cr = null));
}
function Ld(e) {
  if (e.propertyName === 'value' && No(Dr)) {
    var t = [];
    bd(t, Dr, e, ql(e)), ud(sm, t);
  }
}
function am(e, t, n) {
  e === 'focusin'
    ? (hu(), (Cr = t), (Dr = n), Cr.attachEvent('onpropertychange', Ld))
    : e === 'focusout' && hu();
}
function um(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return No(Dr);
}
function cm(e, t) {
  if (e === 'click') return No(t);
}
function dm(e, t) {
  if (e === 'input' || e === 'change') return No(t);
}
function fm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == 'function' ? Object.is : fm;
function zr(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ps.call(t, i) || !rt(e[i], t[i])) return !1;
  }
  return !0;
}
function pu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gu(e, t) {
  var n = pu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pu(n);
  }
}
function Id(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Id(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Md() {
  for (var e = window, t = Qi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qi(e.document);
  }
  return t;
}
function ea(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function hm(e) {
  var t = Md(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Id(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ea(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = gu(n, o));
        var s = gu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var pm = wt && 'documentMode' in document && 11 >= document.documentMode,
  En = null,
  Js = null,
  Nr = null,
  Zs = !1;
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zs ||
    En == null ||
    En !== Qi(r) ||
    ((r = En),
    'selectionStart' in r && ea(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Nr && zr(Nr, r)) ||
      ((Nr = r),
      (r = eo(Js, 'onSelect')),
      0 < r.length &&
        ((t = new Yl('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = En))));
}
function fi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Tn = {
    animationend: fi('Animation', 'AnimationEnd'),
    animationiteration: fi('Animation', 'AnimationIteration'),
    animationstart: fi('Animation', 'AnimationStart'),
    transitionend: fi('Transition', 'TransitionEnd'),
  },
  is = {},
  Pd = {};
wt &&
  ((Pd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  'TransitionEvent' in window || delete Tn.transitionend.transition);
function bo(e) {
  if (is[e]) return is[e];
  if (!Tn[e]) return e;
  var t = Tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Pd) return (is[e] = t[n]);
  return e;
}
var Rd = bo('animationend'),
  $d = bo('animationiteration'),
  Od = bo('animationstart'),
  jd = bo('transitionend'),
  Dd = new Map(),
  vu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Vt(e, t) {
  Dd.set(e, t), hn(t, [e]);
}
for (var os = 0; os < vu.length; os++) {
  var ss = vu[os],
    gm = ss.toLowerCase(),
    mm = ss[0].toUpperCase() + ss.slice(1);
  Vt(gm, 'on' + mm);
}
Vt(Rd, 'onAnimationEnd');
Vt($d, 'onAnimationIteration');
Vt(Od, 'onAnimationStart');
Vt('dblclick', 'onDoubleClick');
Vt('focusin', 'onFocus');
Vt('focusout', 'onBlur');
Vt(jd, 'onTransitionEnd');
Fn('onMouseEnter', ['mouseout', 'mouseover']);
Fn('onMouseLeave', ['mouseout', 'mouseover']);
Fn('onPointerEnter', ['pointerout', 'pointerover']);
Fn('onPointerLeave', ['pointerout', 'pointerover']);
hn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
hn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
hn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
hn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
hn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
hn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var yr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  vm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(yr));
function yu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), gg(r, t, void 0, e), (e.currentTarget = null);
}
function zd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          yu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          yu(i, l, u), (o = a);
        }
    }
  }
  if (Gi) throw ((e = Ks), (Gi = !1), (Ks = null), e);
}
function U(e, t) {
  var n = t[il];
  n === void 0 && (n = t[il] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Fd(t, e, 2, !1), n.add(r));
}
function ls(e, t, n) {
  var r = 0;
  t && (r |= 4), Fd(n, e, r, t);
}
var hi = '_reactListening' + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[hi]) {
    (e[hi] = !0),
      Qc.forEach(function (n) {
        n !== 'selectionchange' && (vm.has(n) || ls(n, !1, e), ls(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hi] || ((t[hi] = !0), ls('selectionchange', !1, t));
  }
}
function Fd(e, t, n, r) {
  switch (Ed(t)) {
    case 1:
      var i = Ig;
      break;
    case 4:
      i = Mg;
      break;
    default:
      i = Gl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Qs ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function as(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Jt(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  ud(function () {
    var u = o,
      c = ql(n),
      f = [];
    e: {
      var d = Dd.get(e);
      if (d !== void 0) {
        var g = Yl,
          y = e;
        switch (e) {
          case 'keypress':
            if (Ii(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = Qg;
            break;
          case 'focusin':
            (y = 'focus'), (g = ts);
            break;
          case 'focusout':
            (y = 'blur'), (g = ts);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = ts;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = su;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = $g;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Xg;
            break;
          case Rd:
          case $d:
          case Od:
            g = Dg;
            break;
          case jd:
            g = Jg;
            break;
          case 'scroll':
            g = Pg;
            break;
          case 'wheel':
            g = em;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = Fg;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = au;
        }
        var v = (t & 4) !== 0,
          w = !v && e === 'scroll',
          p = v ? (d !== null ? d + 'Capture' : null) : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var _ = m.stateNode;
          if (
            (m.tag === 5 &&
              _ !== null &&
              ((m = _),
              p !== null && ((_ = Rr(h, p)), _ != null && v.push(Hr(h, _, m)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== qs &&
            (y = n.relatedTarget || n.fromElement) &&
            (Jt(y) || y[xt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Jt(y) : null),
              y !== null &&
                ((w = pn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = su),
            (_ = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = au),
              (_ = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (w = g == null ? d : kn(g)),
            (m = y == null ? d : kn(y)),
            (d = new v(_, h + 'leave', g, n, c)),
            (d.target = w),
            (d.relatedTarget = m),
            (_ = null),
            Jt(c) === u &&
              ((v = new v(p, h + 'enter', y, n, c)),
              (v.target = m),
              (v.relatedTarget = w),
              (_ = v)),
            (w = _),
            g && y)
          )
            t: {
              for (v = g, p = y, h = 0, m = v; m; m = gn(m)) h++;
              for (m = 0, _ = p; _; _ = gn(_)) m++;
              for (; 0 < h - m; ) (v = gn(v)), h--;
              for (; 0 < m - h; ) (p = gn(p)), m--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = gn(v)), (p = gn(p));
              }
              v = null;
            }
          else v = null;
          g !== null && wu(f, d, g, v, !1),
            y !== null && w !== null && wu(f, w, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? kn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var T = lm;
        else if (du(d))
          if (Ad) T = dm;
          else {
            T = um;
            var E = am;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (T = cm);
        if (T && (T = T(e, u))) {
          bd(f, T, n, c);
          break e;
        }
        E && E(e, d, u),
          e === 'focusout' &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === 'number' &&
            Fs(d, 'number', d.value);
      }
      switch (((E = u ? kn(u) : window), e)) {
        case 'focusin':
          (du(E) || E.contentEditable === 'true') &&
            ((En = E), (Js = u), (Nr = null));
          break;
        case 'focusout':
          Nr = Js = En = null;
          break;
        case 'mousedown':
          Zs = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Zs = !1), mu(f, n, c);
          break;
        case 'selectionchange':
          if (pm) break;
        case 'keydown':
        case 'keyup':
          mu(f, n, c);
      }
      var k;
      if (Zl)
        e: {
          switch (e) {
            case 'compositionstart':
              var b = 'onCompositionStart';
              break e;
            case 'compositionend':
              b = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              b = 'onCompositionUpdate';
              break e;
          }
          b = void 0;
        }
      else
        Sn
          ? Cd(e, n) && (b = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (b = 'onCompositionStart');
      b &&
        (kd &&
          n.locale !== 'ko' &&
          (Sn || b !== 'onCompositionStart'
            ? b === 'onCompositionEnd' && Sn && (k = Td())
            : ((It = c),
              (Xl = 'value' in It ? It.value : It.textContent),
              (Sn = !0))),
        (E = eo(u, b)),
        0 < E.length &&
          ((b = new lu(b, e, null, n, c)),
          f.push({ event: b, listeners: E }),
          k ? (b.data = k) : ((k = Nd(n)), k !== null && (b.data = k)))),
        (k = nm ? rm(e, n) : im(e, n)) &&
          ((u = eo(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new lu('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    zd(f, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function eo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Rr(e, n)),
      o != null && r.unshift(Hr(e, o, i)),
      (o = Rr(e, t)),
      o != null && r.push(Hr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Rr(n, o)), a != null && s.unshift(Hr(n, a, l)))
        : i || ((a = Rr(n, o)), a != null && s.push(Hr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ym = /\r\n?/g,
  wm = /\u0000|\uFFFD/g;
function xu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      ym,
      `
`
    )
    .replace(wm, '');
}
function pi(e, t, n) {
  if (((t = xu(t)), xu(e) !== t && n)) throw Error(C(425));
}
function to() {}
var el = null,
  tl = null;
function nl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var rl = typeof setTimeout == 'function' ? setTimeout : void 0,
  xm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  _u = typeof Promise == 'function' ? Promise : void 0,
  _m =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof _u < 'u'
        ? function (e) {
            return _u.resolve(null).then(e).catch(Sm);
          }
        : rl;
function Sm(e) {
  setTimeout(function () {
    throw e;
  });
}
function us(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), jr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  jr(t);
}
function Ot(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Su(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gn = Math.random().toString(36).slice(2),
  ut = '__reactFiber$' + Gn,
  Ur = '__reactProps$' + Gn,
  xt = '__reactContainer$' + Gn,
  il = '__reactEvents$' + Gn,
  Em = '__reactListeners$' + Gn,
  Tm = '__reactHandles$' + Gn;
function Jt(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Su(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = Su(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jr(e) {
  return (
    (e = e[ut] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ao(e) {
  return e[Ur] || null;
}
var ol = [],
  Cn = -1;
function Bt(e) {
  return { current: e };
}
function V(e) {
  0 > Cn || ((e.current = ol[Cn]), (ol[Cn] = null), Cn--);
}
function F(e, t) {
  Cn++, (ol[Cn] = e.current), (e.current = t);
}
var Ut = {},
  ye = Bt(Ut),
  Ie = Bt(!1),
  sn = Ut;
function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function no() {
  V(Ie), V(ye);
}
function Eu(e, t, n) {
  if (ye.current !== Ut) throw Error(C(168));
  F(ye, t), F(Ie, n);
}
function Hd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, ag(e) || 'Unknown', i));
  return G({}, n, r);
}
function ro(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ut),
    (sn = ye.current),
    F(ye, e),
    F(Ie, Ie.current),
    !0
  );
}
function Tu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Hd(e, t, sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(Ie),
      V(ye),
      F(ye, e))
    : V(Ie),
    F(Ie, n);
}
var gt = null,
  Lo = !1,
  cs = !1;
function Ud(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function km(e) {
  (Lo = !0), Ud(e);
}
function qt() {
  if (!cs && gt !== null) {
    cs = !0;
    var e = 0,
      t = z;
    try {
      var n = gt;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Lo = !1);
    } catch (i) {
      throw (gt !== null && (gt = gt.slice(e + 1)), hd(Wl, qt), i);
    } finally {
      (z = t), (cs = !1);
    }
  }
  return null;
}
var Nn = [],
  bn = 0,
  io = null,
  oo = 0,
  He = [],
  Ue = 0,
  ln = null,
  mt = 1,
  vt = '';
function Kt(e, t) {
  (Nn[bn++] = oo), (Nn[bn++] = io), (io = e), (oo = t);
}
function Vd(e, t, n) {
  (He[Ue++] = mt), (He[Ue++] = vt), (He[Ue++] = ln), (ln = e);
  var r = mt;
  e = vt;
  var i = 32 - tt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - tt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (mt = (1 << (32 - tt(t) + i)) | (n << i) | r),
      (vt = o + e);
  } else (mt = (1 << o) | (n << i) | r), (vt = e);
}
function ta(e) {
  e.return !== null && (Kt(e, 1), Vd(e, 1, 0));
}
function na(e) {
  for (; e === io; )
    (io = Nn[--bn]), (Nn[bn] = null), (oo = Nn[--bn]), (Nn[bn] = null);
  for (; e === ln; )
    (ln = He[--Ue]),
      (He[Ue] = null),
      (vt = He[--Ue]),
      (He[Ue] = null),
      (mt = He[--Ue]),
      (He[Ue] = null);
}
var Oe = null,
  $e = null,
  q = !1,
  Je = null;
function Bd(e, t) {
  var n = Be(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), ($e = Ot(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), ($e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ln !== null ? { id: mt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            ($e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function sl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ll(e) {
  if (q) {
    var t = $e;
    if (t) {
      var n = t;
      if (!ku(e, t)) {
        if (sl(e)) throw Error(C(418));
        t = Ot(n.nextSibling);
        var r = Oe;
        t && ku(e, t)
          ? Bd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (Oe = e));
      }
    } else {
      if (sl(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (Oe = e);
    }
  }
}
function Cu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function gi(e) {
  if (e !== Oe) return !1;
  if (!q) return Cu(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !nl(e.type, e.memoizedProps))),
    t && (t = $e))
  ) {
    if (sl(e)) throw (qd(), Error(C(418)));
    for (; t; ) Bd(e, t), (t = Ot(t.nextSibling));
  }
  if ((Cu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              $e = Ot(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Oe ? Ot(e.stateNode.nextSibling) : null;
  return !0;
}
function qd() {
  for (var e = $e; e; ) e = Ot(e.nextSibling);
}
function Un() {
  ($e = Oe = null), (q = !1);
}
function ra(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
var Cm = Et.ReactCurrentBatchConfig;
function Xe(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var so = Bt(null),
  lo = null,
  An = null,
  ia = null;
function oa() {
  ia = An = lo = null;
}
function sa(e) {
  var t = so.current;
  V(so), (e._currentValue = t);
}
function al(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function jn(e, t) {
  (lo = e),
    (ia = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function Qe(e) {
  var t = e._currentValue;
  if (ia !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (lo === null) throw Error(C(308));
      (An = e), (lo.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var Zt = null;
function la(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function Wd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), la(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function aa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), la(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function Mi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ql(e, n);
  }
}
function Nu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ao(e, t, n, r) {
  var i = e.updateQueue;
  Ct = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == 'function' ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = G({}, f, d);
              break e;
            case 2:
              Ct = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (un |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function bu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var Kd = new Wc.Component().refs;
function ul(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Io = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = zt(e),
      o = yt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, i)),
      t !== null && (nt(t, e, i, r), Mi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = zt(e),
      o = yt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, i)),
      t !== null && (nt(t, e, i, r), Mi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = zt(e),
      i = yt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = jt(e, i, r)),
      t !== null && (nt(t, e, r, n), Mi(t, e, r));
  },
};
function Au(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !zr(n, r) || !zr(i, o)
        : !0
  );
}
function Gd(e, t, n) {
  var r = !1,
    i = Ut,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Qe(o))
      : ((i = Me(t) ? sn : ye.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Hn(e, i) : Ut)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Io),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Lu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Io.enqueueReplaceState(t, t.state, null);
}
function cl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Kd), aa(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Qe(o))
    : ((o = Me(t) ? sn : ye.current), (i.context = Hn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (ul(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Io.enqueueReplaceState(i, i.state, null),
      ao(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Kd && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function mi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Iu(e) {
  var t = e._init;
  return t(e._payload);
}
function Xd(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Ft(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, m, _) {
    return h === null || h.tag !== 6
      ? ((h = vs(m, p.mode, _)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function a(p, h, m, _) {
    var T = m.type;
    return T === _n
      ? c(p, h, m.props.children, _, m.key)
      : h !== null &&
          (h.elementType === T ||
            (typeof T == 'object' &&
              T !== null &&
              T.$$typeof === kt &&
              Iu(T) === h.type))
        ? ((_ = i(h, m.props)), (_.ref = lr(p, h, m)), (_.return = p), _)
        : ((_ = Di(m.type, m.key, m.props, null, p.mode, _)),
          (_.ref = lr(p, h, m)),
          (_.return = p),
          _);
  }
  function u(p, h, m, _) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = ys(m, p.mode, _)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, _, T) {
    return h === null || h.tag !== 7
      ? ((h = rn(m, p.mode, _, T)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = vs('' + h, p.mode, m)), (h.return = p), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case oi:
          return (
            (m = Di(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = lr(p, null, h)),
            (m.return = p),
            m
          );
        case xn:
          return (h = ys(h, p.mode, m)), (h.return = p), h;
        case kt:
          var _ = h._init;
          return f(p, _(h._payload), m);
      }
      if (mr(h) || nr(h))
        return (h = rn(h, p.mode, m, null)), (h.return = p), h;
      mi(p, h);
    }
    return null;
  }
  function d(p, h, m, _) {
    var T = h !== null ? h.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return T !== null ? null : l(p, h, '' + m, _);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case oi:
          return m.key === T ? a(p, h, m, _) : null;
        case xn:
          return m.key === T ? u(p, h, m, _) : null;
        case kt:
          return (T = m._init), d(p, h, T(m._payload), _);
      }
      if (mr(m) || nr(m)) return T !== null ? null : c(p, h, m, _, null);
      mi(p, m);
    }
    return null;
  }
  function g(p, h, m, _, T) {
    if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
      return (p = p.get(m) || null), l(h, p, '' + _, T);
    if (typeof _ == 'object' && _ !== null) {
      switch (_.$$typeof) {
        case oi:
          return (p = p.get(_.key === null ? m : _.key) || null), a(h, p, _, T);
        case xn:
          return (p = p.get(_.key === null ? m : _.key) || null), u(h, p, _, T);
        case kt:
          var E = _._init;
          return g(p, h, m, E(_._payload), T);
      }
      if (mr(_) || nr(_)) return (p = p.get(m) || null), c(h, p, _, T, null);
      mi(h, _);
    }
    return null;
  }
  function y(p, h, m, _) {
    for (
      var T = null, E = null, k = h, b = (h = 0), S = null;
      k !== null && b < m.length;
      b++
    ) {
      k.index > b ? ((S = k), (k = null)) : (S = k.sibling);
      var I = d(p, k, m[b], _);
      if (I === null) {
        k === null && (k = S);
        break;
      }
      e && k && I.alternate === null && t(p, k),
        (h = o(I, h, b)),
        E === null ? (T = I) : (E.sibling = I),
        (E = I),
        (k = S);
    }
    if (b === m.length) return n(p, k), q && Kt(p, b), T;
    if (k === null) {
      for (; b < m.length; b++)
        (k = f(p, m[b], _)),
          k !== null &&
            ((h = o(k, h, b)), E === null ? (T = k) : (E.sibling = k), (E = k));
      return q && Kt(p, b), T;
    }
    for (k = r(p, k); b < m.length; b++)
      (S = g(k, p, b, m[b], _)),
        S !== null &&
          (e && S.alternate !== null && k.delete(S.key === null ? b : S.key),
          (h = o(S, h, b)),
          E === null ? (T = S) : (E.sibling = S),
          (E = S));
    return (
      e &&
        k.forEach(function (D) {
          return t(p, D);
        }),
      q && Kt(p, b),
      T
    );
  }
  function v(p, h, m, _) {
    var T = nr(m);
    if (typeof T != 'function') throw Error(C(150));
    if (((m = T.call(m)), m == null)) throw Error(C(151));
    for (
      var E = (T = null), k = h, b = (h = 0), S = null, I = m.next();
      k !== null && !I.done;
      b++, I = m.next()
    ) {
      k.index > b ? ((S = k), (k = null)) : (S = k.sibling);
      var D = d(p, k, I.value, _);
      if (D === null) {
        k === null && (k = S);
        break;
      }
      e && k && D.alternate === null && t(p, k),
        (h = o(D, h, b)),
        E === null ? (T = D) : (E.sibling = D),
        (E = D),
        (k = S);
    }
    if (I.done) return n(p, k), q && Kt(p, b), T;
    if (k === null) {
      for (; !I.done; b++, I = m.next())
        (I = f(p, I.value, _)),
          I !== null &&
            ((h = o(I, h, b)), E === null ? (T = I) : (E.sibling = I), (E = I));
      return q && Kt(p, b), T;
    }
    for (k = r(p, k); !I.done; b++, I = m.next())
      (I = g(k, p, b, I.value, _)),
        I !== null &&
          (e && I.alternate !== null && k.delete(I.key === null ? b : I.key),
          (h = o(I, h, b)),
          E === null ? (T = I) : (E.sibling = I),
          (E = I));
    return (
      e &&
        k.forEach(function (N) {
          return t(p, N);
        }),
      q && Kt(p, b),
      T
    );
  }
  function w(p, h, m, _) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === _n &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case oi:
          e: {
            for (var T = m.key, E = h; E !== null; ) {
              if (E.key === T) {
                if (((T = m.type), T === _n)) {
                  if (E.tag === 7) {
                    n(p, E.sibling),
                      (h = i(E, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  E.elementType === T ||
                  (typeof T == 'object' &&
                    T !== null &&
                    T.$$typeof === kt &&
                    Iu(T) === E.type)
                ) {
                  n(p, E.sibling),
                    (h = i(E, m.props)),
                    (h.ref = lr(p, E, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            m.type === _n
              ? ((h = rn(m.props.children, p.mode, _, m.key)),
                (h.return = p),
                (p = h))
              : ((_ = Di(m.type, m.key, m.props, null, p.mode, _)),
                (_.ref = lr(p, h, m)),
                (_.return = p),
                (p = _));
          }
          return s(p);
        case xn:
          e: {
            for (E = m.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = ys(m, p.mode, _)), (h.return = p), (p = h);
          }
          return s(p);
        case kt:
          return (E = m._init), w(p, h, E(m._payload), _);
      }
      if (mr(m)) return y(p, h, m, _);
      if (nr(m)) return v(p, h, m, _);
      mi(p, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = vs(m, p.mode, _)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return w;
}
var Vn = Xd(!0),
  Yd = Xd(!1),
  Zr = {},
  dt = Bt(Zr),
  Vr = Bt(Zr),
  Br = Bt(Zr);
function en(e) {
  if (e === Zr) throw Error(C(174));
  return e;
}
function ua(e, t) {
  switch ((F(Br, t), F(Vr, e), F(dt, Zr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Us(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Us(t, e));
  }
  V(dt), F(dt, t);
}
function Bn() {
  V(dt), V(Vr), V(Br);
}
function Jd(e) {
  en(Br.current);
  var t = en(dt.current),
    n = Us(t, e.type);
  t !== n && (F(Vr, e), F(dt, n));
}
function ca(e) {
  Vr.current === e && (V(dt), V(Vr));
}
var Q = Bt(0);
function uo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ds = [];
function da() {
  for (var e = 0; e < ds.length; e++)
    ds[e]._workInProgressVersionPrimary = null;
  ds.length = 0;
}
var Pi = Et.ReactCurrentDispatcher,
  fs = Et.ReactCurrentBatchConfig,
  an = 0,
  K = null,
  ie = null,
  le = null,
  co = !1,
  br = !1,
  qr = 0,
  Nm = 0;
function he() {
  throw Error(C(321));
}
function fa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function ha(e, t, n, r, i, o) {
  if (
    ((an = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Pi.current = e === null || e.memoizedState === null ? Im : Mm),
    (e = n(r, i)),
    br)
  ) {
    o = 0;
    do {
      if (((br = !1), (qr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (le = ie = null),
        (t.updateQueue = null),
        (Pi.current = Pm),
        (e = n(r, i));
    } while (br);
  }
  if (
    ((Pi.current = fo),
    (t = ie !== null && ie.next !== null),
    (an = 0),
    (le = ie = K = null),
    (co = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function pa() {
  var e = qr !== 0;
  return (qr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (K.memoizedState = le = e) : (le = le.next = e), le;
}
function Ke() {
  if (ie === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null) (le = t), (ie = e);
  else {
    if (e === null) throw Error(C(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      le === null ? (K.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Wr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function hs(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((an & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (K.lanes |= c),
          (un |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      rt(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (K.lanes |= o), (un |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ps(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    rt(o, t.memoizedState) || (Le = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Zd() {}
function ef(e, t) {
  var n = K,
    r = Ke(),
    i = t(),
    o = !rt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Le = !0)),
    (r = r.queue),
    ga(rf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qr(9, nf.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(C(349));
    an & 30 || tf(n, t, i);
  }
  return i;
}
function tf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function nf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), of(t) && sf(e);
}
function rf(e, t, n) {
  return n(function () {
    of(t) && sf(e);
  });
}
function of(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function sf(e) {
  var t = _t(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function Mu(e) {
  var t = st();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Lm.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function lf() {
  return Ke().memoizedState;
}
function Ri(e, t, n, r) {
  var i = st();
  (K.flags |= e),
    (i.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Mo(e, t, n, r) {
  var i = Ke();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var s = ie.memoizedState;
    if (((o = s.destroy), r !== null && fa(r, s.deps))) {
      i.memoizedState = Qr(t, n, o, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = Qr(1 | t, n, o, r));
}
function Pu(e, t) {
  return Ri(8390656, 8, e, t);
}
function ga(e, t) {
  return Mo(2048, 8, e, t);
}
function af(e, t) {
  return Mo(4, 2, e, t);
}
function uf(e, t) {
  return Mo(4, 4, e, t);
}
function cf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function df(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Mo(4, 4, cf.bind(null, t, e), n)
  );
}
function ma() {}
function ff(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function hf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pf(e, t, n) {
  return an & 21
    ? (rt(n, t) || ((n = md()), (K.lanes |= n), (un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function bm(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fs.transition;
  fs.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (fs.transition = r);
  }
}
function gf() {
  return Ke().memoizedState;
}
function Am(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mf(e))
  )
    vf(t, n);
  else if (((n = Wd(e, t, n, r)), n !== null)) {
    var i = Se();
    nt(n, e, r, i), yf(n, t, r);
  }
}
function Lm(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mf(e)) vf(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), rt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), la(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wd(e, t, i, r)),
      n !== null && ((i = Se()), nt(n, e, r, i), yf(n, t, r));
  }
}
function mf(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function vf(e, t) {
  br = co = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ql(e, n);
  }
}
var fo = {
    readContext: Qe,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Im = {
    readContext: Qe,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qe,
    useEffect: Pu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ri(4194308, 4, cf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Am.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Mu,
    useDebugValue: ma,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = Mu(!1),
        t = e[0];
      return (e = bm.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = st();
      if (q) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(C(349));
        an & 30 || tf(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Pu(rf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Qr(9, nf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ae.identifierPrefix;
      if (q) {
        var n = vt,
          r = mt;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = qr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Nm++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Mm = {
    readContext: Qe,
    useCallback: ff,
    useContext: Qe,
    useEffect: ga,
    useImperativeHandle: df,
    useInsertionEffect: af,
    useLayoutEffect: uf,
    useMemo: hf,
    useReducer: hs,
    useRef: lf,
    useState: function () {
      return hs(Wr);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = Ke();
      return pf(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = hs(Wr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: Zd,
    useSyncExternalStore: ef,
    useId: gf,
    unstable_isNewReconciler: !1,
  },
  Pm = {
    readContext: Qe,
    useCallback: ff,
    useContext: Qe,
    useEffect: ga,
    useImperativeHandle: df,
    useInsertionEffect: af,
    useLayoutEffect: uf,
    useMemo: hf,
    useReducer: ps,
    useRef: lf,
    useState: function () {
      return ps(Wr);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = Ke();
      return ie === null ? (t.memoizedState = e) : pf(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = ps(Wr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: Zd,
    useSyncExternalStore: ef,
    useId: gf,
    unstable_isNewReconciler: !1,
  };
function qn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += lg(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function gs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function dl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Rm = typeof WeakMap == 'function' ? WeakMap : Map;
function wf(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      po || ((po = !0), (_l = r)), dl(e, t);
    }),
    n
  );
}
function xf(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        dl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        dl(e, t),
          typeof r != 'function' &&
            (Dt === null ? (Dt = new Set([this])) : Dt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function Ru(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rm();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Km.bind(null, e, t, n)), t.then(e, e));
}
function $u(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var $m = Et.ReactCurrentOwner,
  Le = !1;
function we(e, t, n, r) {
  t.child = e === null ? Yd(t, null, n, r) : Vn(t, e.child, n, r);
}
function ju(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    jn(t, i),
    (r = ha(e, t, n, r, o, i)),
    (n = pa()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        St(e, t, i))
      : (q && n && ta(t), (t.flags |= 1), we(e, t, r, i), t.child)
  );
}
function Du(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Ta(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), _f(e, t, o, r, i))
      : ((e = Di(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(s, r) && e.ref === t.ref)
    )
      return St(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ft(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function _f(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zr(o, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), St(e, t, i);
  }
  return fl(e, t, n, r, i);
}
function Sf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(In, Re),
        (Re |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(In, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(In, Re),
        (Re |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(In, Re),
      (Re |= r);
  return we(e, t, i, n), t.child;
}
function Ef(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function fl(e, t, n, r, i) {
  var o = Me(n) ? sn : ye.current;
  return (
    (o = Hn(t, o)),
    jn(t, i),
    (n = ha(e, t, n, r, o, i)),
    (r = pa()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        St(e, t, i))
      : (q && r && ta(t), (t.flags |= 1), we(e, t, n, i), t.child)
  );
}
function zu(e, t, n, r, i) {
  if (Me(n)) {
    var o = !0;
    ro(t);
  } else o = !1;
  if ((jn(t, i), t.stateNode === null))
    $i(e, t), Gd(t, n, r), cl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Qe(u))
      : ((u = Me(n) ? sn : ye.current), (u = Hn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && Lu(t, s, r, u)),
      (Ct = !1);
    var d = t.memoizedState;
    (s.state = d),
      ao(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ie.current || Ct
        ? (typeof c == 'function' && (ul(t, n, c, r), (a = t.memoizedState)),
          (l = Ct || Au(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Qd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Xe(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Qe(a))
        : ((a = Me(n) ? sn : ye.current), (a = Hn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== f || d !== a) && Lu(t, s, r, a)),
      (Ct = !1),
      (d = t.memoizedState),
      (s.state = d),
      ao(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Ie.current || Ct
      ? (typeof g == 'function' && (ul(t, n, g, r), (y = t.memoizedState)),
        (u = Ct || Au(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return hl(e, t, n, r, o, i);
}
function hl(e, t, n, r, i, o) {
  Ef(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Tu(t, n, !1), St(e, t, o);
  (r = t.stateNode), ($m.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Vn(t, e.child, null, o)), (t.child = Vn(t, null, l, o)))
      : we(e, t, l, o),
    (t.memoizedState = r.state),
    i && Tu(t, n, !0),
    t.child
  );
}
function Tf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Eu(e, t.context, !1),
    ua(e, t.containerInfo);
}
function Fu(e, t, n, r, i) {
  return Un(), ra(i), (t.flags |= 256), we(e, t, n, r), t.child;
}
var pl = { dehydrated: null, treeContext: null, retryLane: 0 };
function gl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kf(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    F(Q, i & 1),
    e === null)
  )
    return (
      ll(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = $o(s, r, 0, null)),
              (e = rn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = gl(n)),
              (t.memoizedState = pl),
              e)
            : va(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Om(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ft(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Ft(l, o)) : ((o = rn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? gl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = pl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ft(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function va(e, t) {
  return (
    (t = $o({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vi(e, t, n, r) {
  return (
    r !== null && ra(r),
    Vn(t, e.child, null, n),
    (e = va(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Om(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gs(Error(C(422)))), vi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = $o({ mode: 'visible', children: r.children }, i, 0, null)),
          (o = rn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Vn(t, e.child, null, s),
          (t.child.memoizedState = gl(s)),
          (t.memoizedState = pl),
          o);
  if (!(t.mode & 1)) return vi(e, t, s, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(C(419))), (r = gs(o, r, void 0)), vi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Le || l)) {
    if (((r = ae), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), _t(e, i), nt(r, e, i, -1));
    }
    return Ea(), (r = gs(Error(C(421)))), vi(e, t, s, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Gm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      ($e = Ot(i.nextSibling)),
      (Oe = t),
      (q = !0),
      (Je = null),
      e !== null &&
        ((He[Ue++] = mt),
        (He[Ue++] = vt),
        (He[Ue++] = ln),
        (mt = e.id),
        (vt = e.overflow),
        (ln = t)),
      (t = va(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), al(e.return, t, n);
}
function ms(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Cf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((we(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hu(e, n, t);
        else if (e.tag === 19) Hu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && uo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ms(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && uo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ms(t, !0, n, null, o);
        break;
      case 'together':
        ms(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $i(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (un |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function jm(e, t, n) {
  switch (t.tag) {
    case 3:
      Tf(t), Un();
      break;
    case 5:
      Jd(t);
      break;
    case 1:
      Me(t.type) && ro(t);
      break;
    case 4:
      ua(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      F(so, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? kf(e, t, n)
            : (F(Q, Q.current & 1),
              (e = St(e, t, n)),
              e !== null ? e.sibling : null);
      F(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Cf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        F(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sf(e, t, n);
  }
  return St(e, t, n);
}
var Nf, ml, bf, Af;
Nf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ml = function () {};
bf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), en(dt.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = Ds(e, i)), (r = Ds(e, r)), (o = []);
        break;
      case 'select':
        (i = G({}, i, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = Hs(e, i)), (r = Hs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = to);
    }
    Vs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Mr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') ||
                (o = o || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Mr.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && U('scroll', e),
                    o || l === a || (o = []))
                  : (o = o || []).push(u, a));
    }
    n && (o = o || []).push('style', n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Af = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!q)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Dm(e, t, n) {
  var r = t.pendingProps;
  switch ((na(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Me(t.type) && no(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Bn(),
        V(Ie),
        V(ye),
        da(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Je !== null && (Tl(Je), (Je = null)))),
        ml(e, t),
        pe(t),
        null
      );
    case 5:
      ca(t);
      var i = en(Br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        bf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return pe(t), null;
        }
        if (((e = en(dt.current)), gi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ut] = t), (r[Ur] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              U('cancel', r), U('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              U('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < yr.length; i++) U(yr[i], r);
              break;
            case 'source':
              U('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              U('error', r), U('load', r);
              break;
            case 'details':
              U('toggle', r);
              break;
            case 'input':
              Xa(r, o), U('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U('invalid', r);
              break;
            case 'textarea':
              Ja(r, o), U('invalid', r);
          }
          Vs(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Mr.hasOwnProperty(s) &&
                  l != null &&
                  s === 'onScroll' &&
                  U('scroll', r);
            }
          switch (n) {
            case 'input':
              si(r), Ya(r, o, !0);
              break;
            case 'textarea':
              si(r), Za(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = to);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = td(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ut] = t),
            (e[Ur] = r),
            Nf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Bs(n, r)), n)) {
              case 'dialog':
                U('cancel', e), U('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                U('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < yr.length; i++) U(yr[i], e);
                i = r;
                break;
              case 'source':
                U('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                U('error', e), U('load', e), (i = r);
                break;
              case 'details':
                U('toggle', e), (i = r);
                break;
              case 'input':
                Xa(e, r), (i = Ds(e, r)), U('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = G({}, r, { value: void 0 })),
                  U('invalid', e);
                break;
              case 'textarea':
                Ja(e, r), (i = Hs(e, r)), U('invalid', e);
                break;
              default:
                i = r;
            }
            Vs(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === 'style'
                  ? id(e, a)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && nd(e, a))
                    : o === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && Pr(e, a)
                        : typeof a == 'number' && Pr(e, '' + a)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (Mr.hasOwnProperty(o)
                          ? a != null && o === 'onScroll' && U('scroll', e)
                          : a != null && Hl(e, o, a, s));
              }
            switch (n) {
              case 'input':
                si(e), Ya(e, r, !1);
                break;
              case 'textarea':
                si(e), Za(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Ht(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Pn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Pn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = to);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) Af(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166));
        if (((n = en(Br.current)), en(dt.current), gi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (o = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                pi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (V(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && $e !== null && t.mode & 1 && !(t.flags & 128))
          qd(), Un(), (t.flags |= 98560), (o = !1);
        else if (((o = gi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[ut] = t;
          } else
            Un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (o = !1);
        } else Je !== null && (Tl(Je), (Je = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? oe === 0 && (oe = 3) : Ea())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Bn(), ml(e, t), e === null && Fr(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return sa(t.type._context), pe(t), null;
    case 17:
      return Me(t.type) && no(), pe(t), null;
    case 19:
      if ((V(Q), (o = t.memoizedState), o === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ar(o, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = uo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ar(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Z() > Wn &&
            ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = uo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !q)
            )
              return pe(t), null;
          } else
            2 * Z() - o.renderingStartTime > Wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = Q.current),
          F(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function zm(e, t) {
  switch ((na(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && no(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Bn(),
        V(Ie),
        V(ye),
        da(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ca(t), null;
    case 13:
      if ((V(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(Q), null;
    case 4:
      return Bn(), null;
    case 10:
      return sa(t.type._context), null;
    case 22:
    case 23:
      return Sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yi = !1,
  me = !1,
  Fm = typeof WeakSet == 'function' ? WeakSet : Set,
  A = null;
function Ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function vl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Uu = !1;
function Hm(e, t) {
  if (((el = Ji), (e = Md()), ea(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (tl = { focusedElem: e, selectionRange: n }, Ji = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    w = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Xe(t.type, v),
                      w
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (_) {
          X(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (y = Uu), (Uu = !1), y;
}
function Ar(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && vl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Po(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function yl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Lf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[Ur], delete t[il], delete t[Em], delete t[Tm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function If(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || If(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = to));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wl(e, t, n), e = e.sibling; e !== null; ) wl(e, t, n), (e = e.sibling);
}
function xl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xl(e, t, n), e = e.sibling; e !== null; ) xl(e, t, n), (e = e.sibling);
}
var ue = null,
  Ye = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) Mf(e, t, n), (n = n.sibling);
}
function Mf(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == 'function')
    try {
      ct.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Ln(n, t);
    case 6:
      var r = ue,
        i = Ye;
      (ue = null),
        Tt(e, t, n),
        (ue = r),
        (Ye = i),
        ue !== null &&
          (Ye
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Ye
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? us(e.parentNode, n)
              : e.nodeType === 1 && us(e, n),
            jr(e))
          : us(ue, n.stateNode));
      break;
    case 4:
      (r = ue),
        (i = Ye),
        (ue = n.stateNode.containerInfo),
        (Ye = !0),
        Tt(e, t, n),
        (ue = r),
        (Ye = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && vl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Tt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          X(n, t, l);
        }
      Tt(e, t, n);
      break;
    case 21:
      Tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), Tt(e, t, n), (me = r))
        : Tt(e, t, n);
      break;
    default:
      Tt(e, t, n);
  }
}
function Bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fm()),
      t.forEach(function (r) {
        var i = Xm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ue = l.stateNode), (Ye = !1);
              break e;
            case 3:
              (ue = l.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (ue = l.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          l = l.return;
        }
        if (ue === null) throw Error(C(160));
        Mf(o, s, i), (ue = null), (Ye = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pf(t, e), (t = t.sibling);
}
function Pf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), ot(e), r & 4)) {
        try {
          Ar(3, e, e.return), Po(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          Ar(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      Ge(t, e), ot(e), r & 512 && n !== null && Ln(n, n.return);
      break;
    case 5:
      if (
        (Ge(t, e),
        ot(e),
        r & 512 && n !== null && Ln(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Pr(i, '');
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && Zc(i, o),
              Bs(l, s);
            var u = Bs(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === 'style'
                ? id(i, f)
                : c === 'dangerouslySetInnerHTML'
                  ? nd(i, f)
                  : c === 'children'
                    ? Pr(i, f)
                    : Hl(i, c, f, u);
            }
            switch (l) {
              case 'input':
                zs(i, o);
                break;
              case 'textarea':
                ed(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Pn(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Pn(i, !!o.multiple, o.defaultValue, !0)
                      : Pn(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Ur] = o;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          jr(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      Ge(t, e), ot(e);
      break;
    case 13:
      Ge(t, e),
        ot(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (xa = Z())),
        r & 4 && Bu(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), Ge(t, e), (me = u)) : Ge(t, e),
        ot(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (f = A = c; A !== null; ) {
              switch (((d = A), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ar(4, d, d.return);
                  break;
                case 1:
                  Ln(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Ln(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Wu(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (A = g)) : Wu(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = rd('display', s)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), ot(e), r & 4 && Bu(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), ot(e);
  }
}
function ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (If(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Pr(i, ''), (r.flags &= -33));
          var o = Vu(e);
          xl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Vu(e);
          wl(e, l, s);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Um(e, t, n) {
  (A = e), Rf(e);
}
function Rf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || yi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || me;
        l = yi;
        var u = me;
        if (((yi = s), (me = a) && !u))
          for (A = i; A !== null; )
            (s = A),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Qu(i)
                : a !== null
                  ? ((a.return = s), (A = a))
                  : Qu(i);
        for (; o !== null; ) (A = o), Rf(o), (o = o.sibling);
        (A = i), (yi = l), (me = u);
      }
      qu(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (A = o)) : qu(e);
  }
}
function qu(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Po(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && bu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && jr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        me || (t.flags & 512 && yl(t));
      } catch (d) {
        X(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Wu(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Qu(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Po(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var o = t.return;
          try {
            yl(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            yl(t);
          } catch (a) {
            X(t, s, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      A = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (A = l);
      break;
    }
    A = t.return;
  }
}
var Vm = Math.ceil,
  ho = Et.ReactCurrentDispatcher,
  ya = Et.ReactCurrentOwner,
  We = Et.ReactCurrentBatchConfig,
  j = 0,
  ae = null,
  ne = null,
  de = 0,
  Re = 0,
  In = Bt(0),
  oe = 0,
  Kr = null,
  un = 0,
  Ro = 0,
  wa = 0,
  Lr = null,
  Ne = null,
  xa = 0,
  Wn = 1 / 0,
  pt = null,
  po = !1,
  _l = null,
  Dt = null,
  wi = !1,
  Mt = null,
  go = 0,
  Ir = 0,
  Sl = null,
  Oi = -1,
  ji = 0;
function Se() {
  return j & 6 ? Z() : Oi !== -1 ? Oi : (Oi = Z());
}
function zt(e) {
  return e.mode & 1
    ? j & 2 && de !== 0
      ? de & -de
      : Cm.transition !== null
        ? (ji === 0 && (ji = md()), ji)
        : ((e = z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ed(e.type))),
          e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < Ir) throw ((Ir = 0), (Sl = null), Error(C(185)));
  Xr(e, n, r),
    (!(j & 2) || e !== ae) &&
      (e === ae && (!(j & 2) && (Ro |= n), oe === 4 && Lt(e, de)),
      Pe(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((Wn = Z() + 500), Lo && qt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Cg(e, t);
  var r = Yi(e, e === ae ? de : 0);
  if (r === 0)
    n !== null && nu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nu(n), t === 1))
      e.tag === 0 ? km(Ku.bind(null, e)) : Ud(Ku.bind(null, e)),
        _m(function () {
          !(j & 6) && qt();
        }),
        (n = null);
    else {
      switch (vd(r)) {
        case 1:
          n = Wl;
          break;
        case 4:
          n = pd;
          break;
        case 16:
          n = Xi;
          break;
        case 536870912:
          n = gd;
          break;
        default:
          n = Xi;
      }
      n = Uf(n, $f.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $f(e, t) {
  if (((Oi = -1), (ji = 0), j & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Dn() && e.callbackNode !== n) return null;
  var r = Yi(e, e === ae ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = mo(e, r);
  else {
    t = r;
    var i = j;
    j |= 2;
    var o = jf();
    (ae !== e || de !== t) && ((pt = null), (Wn = Z() + 500), nn(e, t));
    do
      try {
        Wm();
        break;
      } catch (l) {
        Of(e, l);
      }
    while (!0);
    oa(),
      (ho.current = o),
      (j = i),
      ne !== null ? (t = 0) : ((ae = null), (de = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Gs(e)), i !== 0 && ((r = i), (t = El(e, i)))), t === 1)
    )
      throw ((n = Kr), nn(e, 0), Lt(e, r), Pe(e, Z()), n);
    if (t === 6) Lt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Bm(i) &&
          ((t = mo(e, r)),
          t === 2 && ((o = Gs(e)), o !== 0 && ((r = o), (t = El(e, o)))),
          t === 1))
      )
        throw ((n = Kr), nn(e, 0), Lt(e, r), Pe(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Gt(e, Ne, pt);
          break;
        case 3:
          if (
            (Lt(e, r), (r & 130023424) === r && ((t = xa + 500 - Z()), 10 < t))
          ) {
            if (Yi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = rl(Gt.bind(null, e, Ne, pt), t);
            break;
          }
          Gt(e, Ne, pt);
          break;
        case 4:
          if ((Lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - tt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Vm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = rl(Gt.bind(null, e, Ne, pt), r);
            break;
          }
          Gt(e, Ne, pt);
          break;
        case 5:
          Gt(e, Ne, pt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Pe(e, Z()), e.callbackNode === n ? $f.bind(null, e) : null;
}
function El(e, t) {
  var n = Lr;
  return (
    e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
    (e = mo(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && Tl(t)),
    e
  );
}
function Tl(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Bm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!rt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Lt(e, t) {
  for (
    t &= ~wa,
      t &= ~Ro,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ku(e) {
  if (j & 6) throw Error(C(327));
  Dn();
  var t = Yi(e, 0);
  if (!(t & 1)) return Pe(e, Z()), null;
  var n = mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Gs(e);
    r !== 0 && ((t = r), (n = El(e, r)));
  }
  if (n === 1) throw ((n = Kr), nn(e, 0), Lt(e, t), Pe(e, Z()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Gt(e, Ne, pt),
    Pe(e, Z()),
    null
  );
}
function _a(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((Wn = Z() + 500), Lo && qt());
  }
}
function cn(e) {
  Mt !== null && Mt.tag === 0 && !(j & 6) && Dn();
  var t = j;
  j |= 1;
  var n = We.transition,
    r = z;
  try {
    if (((We.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (We.transition = n), (j = t), !(j & 6) && qt();
  }
}
function Sa() {
  (Re = In.current), V(In);
}
function nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xm(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((na(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && no();
          break;
        case 3:
          Bn(), V(Ie), V(ye), da();
          break;
        case 5:
          ca(r);
          break;
        case 4:
          Bn();
          break;
        case 13:
          V(Q);
          break;
        case 19:
          V(Q);
          break;
        case 10:
          sa(r.type._context);
          break;
        case 22:
        case 23:
          Sa();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (ne = e = Ft(e.current, null)),
    (de = Re = t),
    (oe = 0),
    (Kr = null),
    (wa = Ro = un = 0),
    (Ne = Lr = null),
    Zt !== null)
  ) {
    for (t = 0; t < Zt.length; t++)
      if (((n = Zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Zt = null;
  }
  return e;
}
function Of(e, t) {
  do {
    var n = ne;
    try {
      if ((oa(), (Pi.current = fo), co)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        co = !1;
      }
      if (
        ((an = 0),
        (le = ie = K = null),
        (br = !1),
        (qr = 0),
        (ya.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (Kr = t), (ne = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = de),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = $u(s);
          if (g !== null) {
            (g.flags &= -257),
              Ou(g, s, l, o, t),
              g.mode & 1 && Ru(o, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ru(o, u, t), Ea();
              break e;
            }
            a = Error(C(426));
          }
        } else if (q && l.mode & 1) {
          var w = $u(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Ou(w, s, l, o, t),
              ra(qn(a, l));
            break e;
          }
        }
        (o = a = qn(a, l)),
          oe !== 4 && (oe = 2),
          Lr === null ? (Lr = [o]) : Lr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = wf(o, a, t);
              Nu(o, p);
              break e;
            case 1:
              l = a;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Dt === null || !Dt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var _ = xf(o, l, t);
                Nu(o, _);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      zf(n);
    } catch (T) {
      (t = T), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function jf() {
  var e = ho.current;
  return (ho.current = fo), e === null ? fo : e;
}
function Ea() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ae === null || (!(un & 268435455) && !(Ro & 268435455)) || Lt(ae, de);
}
function mo(e, t) {
  var n = j;
  j |= 2;
  var r = jf();
  (ae !== e || de !== t) && ((pt = null), nn(e, t));
  do
    try {
      qm();
      break;
    } catch (i) {
      Of(e, i);
    }
  while (!0);
  if ((oa(), (j = n), (ho.current = r), ne !== null)) throw Error(C(261));
  return (ae = null), (de = 0), oe;
}
function qm() {
  for (; ne !== null; ) Df(ne);
}
function Wm() {
  for (; ne !== null && !vg(); ) Df(ne);
}
function Df(e) {
  var t = Hf(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps),
    t === null ? zf(e) : (ne = t),
    (ya.current = null);
}
function zf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = zm(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (ne = null);
        return;
      }
    } else if (((n = Dm(n, t, Re)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Gt(e, t, n) {
  var r = z,
    i = We.transition;
  try {
    (We.transition = null), (z = 1), Qm(e, t, n, r);
  } finally {
    (We.transition = i), (z = r);
  }
  return null;
}
function Qm(e, t, n, r) {
  do Dn();
  while (Mt !== null);
  if (j & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Ng(e, o),
    e === ae && ((ne = ae = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wi ||
      ((wi = !0),
      Uf(Xi, function () {
        return Dn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = We.transition), (We.transition = null);
    var s = z;
    z = 1;
    var l = j;
    (j |= 4),
      (ya.current = null),
      Hm(e, n),
      Pf(n, e),
      hm(tl),
      (Ji = !!el),
      (tl = el = null),
      (e.current = n),
      Um(n),
      yg(),
      (j = l),
      (z = s),
      (We.transition = o);
  } else e.current = n;
  if (
    (wi && ((wi = !1), (Mt = e), (go = i)),
    (o = e.pendingLanes),
    o === 0 && (Dt = null),
    _g(n.stateNode),
    Pe(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (po) throw ((po = !1), (e = _l), (_l = null), e);
  return (
    go & 1 && e.tag !== 0 && Dn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Sl ? Ir++ : ((Ir = 0), (Sl = e))) : (Ir = 0),
    qt(),
    null
  );
}
function Dn() {
  if (Mt !== null) {
    var e = vd(go),
      t = We.transition,
      n = z;
    try {
      if (((We.transition = null), (z = 16 > e ? 16 : e), Mt === null))
        var r = !1;
      else {
        if (((e = Mt), (Mt = null), (go = 0), j & 6)) throw Error(C(331));
        var i = j;
        for (j |= 4, A = e.current; A !== null; ) {
          var o = A,
            s = o.child;
          if (A.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ar(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (A = f);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var d = c.sibling,
                        g = c.return;
                      if ((Lf(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (A = d);
                        break;
                      }
                      A = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              A = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (A = s);
          else
            e: for (; A !== null; ) {
              if (((o = A), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ar(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (A = p);
                break e;
              }
              A = o.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          s = A;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (A = m);
          else
            e: for (s = h; A !== null; ) {
              if (((l = A), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Po(9, l);
                  }
                } catch (T) {
                  X(l, l.return, T);
                }
              if (l === s) {
                A = null;
                break e;
              }
              var _ = l.sibling;
              if (_ !== null) {
                (_.return = l.return), (A = _);
                break e;
              }
              A = l.return;
            }
        }
        if (
          ((j = i), qt(), ct && typeof ct.onPostCommitFiberRoot == 'function')
        )
          try {
            ct.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (We.transition = t);
    }
  }
  return !1;
}
function Gu(e, t, n) {
  (t = qn(n, t)),
    (t = wf(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = Se()),
    e !== null && (Xr(e, 1, t), Pe(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) Gu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Dt === null || !Dt.has(r)))
        ) {
          (e = qn(n, e)),
            (e = xf(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = Se()),
            t !== null && (Xr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Km(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (de & n) === n &&
      (oe === 4 || (oe === 3 && (de & 130023424) === de && 500 > Z() - xa)
        ? nn(e, 0)
        : (wa |= n)),
    Pe(e, t);
}
function Ff(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ui), (ui <<= 1), !(ui & 130023424) && (ui = 4194304))
      : (t = 1));
  var n = Se();
  (e = _t(e, t)), e !== null && (Xr(e, t, n), Pe(e, n));
}
function Gm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ff(e, n);
}
function Xm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Ff(e, n);
}
var Hf;
Hf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), jm(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), q && t.flags & 1048576 && Vd(t, oo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $i(e, t), (e = t.pendingProps);
      var i = Hn(t, ye.current);
      jn(t, n), (i = ha(null, t, r, e, i, n));
      var o = pa();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((o = !0), ro(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            aa(t),
            (i.updater = Io),
            (t.stateNode = i),
            (i._reactInternals = t),
            cl(t, r, e, n),
            (t = hl(null, t, r, !0, o, n)))
          : ((t.tag = 0), q && o && ta(t), we(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($i(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Jm(r)),
          (e = Xe(r, e)),
          i)
        ) {
          case 0:
            t = fl(null, t, r, e, n);
            break e;
          case 1:
            t = zu(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = Du(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        fl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        zu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Tf(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Qd(e, t),
          ao(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = qn(Error(C(423)), t)), (t = Fu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = qn(Error(C(424)), t)), (t = Fu(e, t, r, n, i));
            break e;
          } else
            for (
              $e = Ot(t.stateNode.containerInfo.firstChild),
                Oe = t,
                q = !0,
                Je = null,
                n = Yd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Un(), r === i)) {
            t = St(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jd(t),
        e === null && ll(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        nl(r, i) ? (s = null) : o !== null && nl(r, o) && (t.flags |= 32),
        Ef(e, t),
        we(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ll(t), null;
    case 13:
      return kf(e, t, n);
    case 4:
      return (
        ua(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : we(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        ju(e, t, r, i, n)
      );
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          F(so, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (rt(o.value, s)) {
            if (o.children === i.children && !Ie.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = yt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      al(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(C(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  al(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        we(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        jn(t, n),
        (i = Qe(i)),
        (r = r(i)),
        (t.flags |= 1),
        we(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Xe(r, t.pendingProps)),
        (i = Xe(r.type, i)),
        Du(e, t, r, i, n)
      );
    case 15:
      return _f(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        $i(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), ro(t)) : (e = !1),
        jn(t, n),
        Gd(t, r, i),
        cl(t, r, i, n),
        hl(null, t, r, !0, e, n)
      );
    case 19:
      return Cf(e, t, n);
    case 22:
      return Sf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Uf(e, t) {
  return hd(e, t);
}
function Ym(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Be(e, t, n, r) {
  return new Ym(e, t, n, r);
}
function Ta(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Jm(e) {
  if (typeof e == 'function') return Ta(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vl)) return 11;
    if (e === Bl) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Di(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == 'function')) Ta(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case _n:
        return rn(n.children, i, o, t);
      case Ul:
        (s = 8), (i |= 8);
        break;
      case Rs:
        return (
          (e = Be(12, n, t, i | 2)), (e.elementType = Rs), (e.lanes = o), e
        );
      case $s:
        return (e = Be(13, n, t, i)), (e.elementType = $s), (e.lanes = o), e;
      case Os:
        return (e = Be(19, n, t, i)), (e.elementType = Os), (e.lanes = o), e;
      case Xc:
        return $o(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Kc:
              s = 10;
              break e;
            case Gc:
              s = 9;
              break e;
            case Vl:
              s = 11;
              break e;
            case Bl:
              s = 14;
              break e;
            case kt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Be(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function rn(e, t, n, r) {
  return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function $o(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = Xc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vs(e, t, n) {
  return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function ys(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Zm(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Jo(0)),
    (this.expirationTimes = Jo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Jo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ka(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Zm(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    aa(o),
    e
  );
}
function ev(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Vf(e) {
  if (!e) return Ut;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return Hd(e, n, t);
  }
  return t;
}
function Bf(e, t, n, r, i, o, s, l, a) {
  return (
    (e = ka(n, r, !0, e, i, o, s, l, a)),
    (e.context = Vf(null)),
    (n = e.current),
    (r = Se()),
    (i = zt(n)),
    (o = yt(r, i)),
    (o.callback = t ?? null),
    jt(n, o, i),
    (e.current.lanes = i),
    Xr(e, i, r),
    Pe(e, r),
    e
  );
}
function Oo(e, t, n, r) {
  var i = t.current,
    o = Se(),
    s = zt(i);
  return (
    (n = Vf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(i, t, s)),
    e !== null && (nt(e, i, s, o), Mi(e, i, s)),
    s
  );
}
function vo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ca(e, t) {
  Xu(e, t), (e = e.alternate) && Xu(e, t);
}
function tv() {
  return null;
}
var qf =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Na(e) {
  this._internalRoot = e;
}
jo.prototype.render = Na.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Oo(e, t, null, null);
};
jo.prototype.unmount = Na.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cn(function () {
      Oo(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function jo(e) {
  this._internalRoot = e;
}
jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++);
    At.splice(n, 0, e), n === 0 && Sd(e);
  }
};
function ba(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Do(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Yu() {}
function nv(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var u = vo(s);
        o.call(u);
      };
    }
    var s = Bf(t, r, e, 0, null, !1, !1, '', Yu);
    return (
      (e._reactRootContainer = s),
      (e[xt] = s.current),
      Fr(e.nodeType === 8 ? e.parentNode : e),
      cn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = vo(a);
      l.call(u);
    };
  }
  var a = ka(e, 0, !1, null, null, !1, !1, '', Yu);
  return (
    (e._reactRootContainer = a),
    (e[xt] = a.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    cn(function () {
      Oo(t, a, n, r);
    }),
    a
  );
}
function zo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var a = vo(s);
        l.call(a);
      };
    }
    Oo(t, s, e, i);
  } else s = nv(n, t, e, i, r);
  return vo(s);
}
yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vr(t.pendingLanes);
        n !== 0 &&
          (Ql(t, n | 1), Pe(t, Z()), !(j & 6) && ((Wn = Z() + 500), qt()));
      }
      break;
    case 13:
      cn(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var i = Se();
          nt(r, e, 1, i);
        }
      }),
        Ca(e, 1);
  }
};
Kl = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Se();
      nt(t, e, 134217728, n);
    }
    Ca(e, 134217728);
  }
};
wd = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Se();
      nt(n, e, t, r);
    }
    Ca(e, t);
  }
};
xd = function () {
  return z;
};
_d = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
Ws = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((zs(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ao(r);
            if (!i) throw Error(C(90));
            Jc(r), zs(r, i);
          }
        }
      }
      break;
    case 'textarea':
      ed(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Pn(e, !!n.multiple, t, !1);
  }
};
ld = _a;
ad = cn;
var rv = { usingClientEntryPoint: !1, Events: [Jr, kn, Ao, od, sd, _a] },
  ur = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  iv = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = dd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || tv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xi.isDisabled && xi.supportsFiber)
    try {
      (ko = xi.inject(iv)), (ct = xi);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rv;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ba(t)) throw Error(C(200));
  return ev(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!ba(e)) throw Error(C(299));
  var n = !1,
    r = '',
    i = qf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ka(e, 1, !1, null, null, n, !1, r, i)),
    (e[xt] = t.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    new Na(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(C(188))
      : ((e = Object.keys(e).join(',')), Error(C(268, e)));
  return (e = dd(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return cn(e);
};
ze.hydrate = function (e, t, n) {
  if (!Do(t)) throw Error(C(200));
  return zo(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!ba(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = qf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Bf(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[xt] = t.current),
    Fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new jo(t);
};
ze.render = function (e, t, n) {
  if (!Do(t)) throw Error(C(200));
  return zo(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!Do(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (cn(function () {
        zo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = _a;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Do(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return zo(e, t, n, !1, r);
};
ze.version = '18.2.0-next-9e3b772b8-20220608';
function Wf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wf);
    } catch (e) {
      console.error(e);
    }
}
Wf(), (Vc.exports = ze);
var ov = Vc.exports,
  sv,
  Ju = ov;
(sv = Ju.createRoot), Ju.hydrateRoot;
const dn = ({
    children: e,
    title: t = '',
    icon: n,
    disabled: r = !1,
    toggled: i = !1,
    onClick: o = () => {},
    style: s,
    testId: l,
    className: a,
    ariaLabel: u,
  }) =>
    x.jsxs('button', {
      className: et(a, 'toolbar-button', n, i && 'toggled'),
      onMouseDown: Zu,
      onClick: o,
      onDoubleClick: Zu,
      title: t,
      disabled: !!r,
      style: s,
      'data-testid': l,
      'aria-label': u,
      children: [
        n &&
          x.jsx('span', {
            className: `codicon codicon-${n}`,
            style: e ? { marginRight: 5 } : {},
          }),
        e,
      ],
    }),
  q1 = ({ style: e }) =>
    x.jsx('div', { className: 'toolbar-separator', style: e }),
  Zu = (e) => {
    e.stopPropagation(), e.preventDefault();
  },
  wr = Symbol('context'),
  lv = Symbol('page'),
  Qf = Symbol('next'),
  Kf = Symbol('prev'),
  ec = Symbol('events');
class W1 {
  constructor(t) {
    H(this, 'startTime');
    H(this, 'endTime');
    H(this, 'browserName');
    H(this, 'channel');
    H(this, 'platform');
    H(this, 'wallTime');
    H(this, 'title');
    H(this, 'options');
    H(this, 'pages');
    H(this, 'actions');
    H(this, 'events');
    H(this, 'stdio');
    H(this, 'errors');
    H(this, 'errorDescriptors');
    H(this, 'hasSource');
    H(this, 'hasStepData');
    H(this, 'sdkLanguage');
    H(this, 'testIdAttributeName');
    H(this, 'sources');
    H(this, 'resources');
    t.forEach((r) => av(r));
    const n = t.find((r) => r.origin === 'library');
    (this.browserName = (n == null ? void 0 : n.browserName) || ''),
      (this.sdkLanguage = n == null ? void 0 : n.sdkLanguage),
      (this.channel = n == null ? void 0 : n.channel),
      (this.testIdAttributeName = n == null ? void 0 : n.testIdAttributeName),
      (this.platform = (n == null ? void 0 : n.platform) || ''),
      (this.title = (n == null ? void 0 : n.title) || ''),
      (this.options = (n == null ? void 0 : n.options) || {}),
      (this.actions = uv(t)),
      (this.pages = [].concat(...t.map((r) => r.pages))),
      (this.wallTime = t
        .map((r) => r.wallTime)
        .reduce(
          (r, i) => Math.min(r || Number.MAX_VALUE, i),
          Number.MAX_VALUE
        )),
      (this.startTime = t
        .map((r) => r.startTime)
        .reduce((r, i) => Math.min(r, i), Number.MAX_VALUE)),
      (this.endTime = t
        .map((r) => r.endTime)
        .reduce((r, i) => Math.max(r, i), Number.MIN_VALUE)),
      (this.events = [].concat(...t.map((r) => r.events))),
      (this.stdio = [].concat(...t.map((r) => r.stdio))),
      (this.errors = [].concat(...t.map((r) => r.errors))),
      (this.hasSource = t.some((r) => r.hasSource)),
      (this.hasStepData = t.some((r) => r.origin === 'testRunner')),
      (this.resources = [...t.map((r) => r.resources)].flat()),
      this.events.sort((r, i) => r.time - i.time),
      this.resources.sort((r, i) => r._monotonicTime - i._monotonicTime),
      (this.errorDescriptors = this.hasStepData
        ? this._errorDescriptorsFromTestRunner()
        : this._errorDescriptorsFromActions()),
      (this.sources = vv(this.actions, this.errorDescriptors));
  }
  failedAction() {
    return this.actions.findLast((t) => t.error);
  }
  _errorDescriptorsFromActions() {
    var n;
    const t = [];
    for (const r of this.actions || [])
      (n = r.error) != null &&
        n.message &&
        t.push({ action: r, stack: r.stack, message: r.error.message });
    return t;
  }
  _errorDescriptorsFromTestRunner() {
    const t = [];
    for (const n of this.errors || [])
      n.message && t.push({ stack: n.stack, message: n.message });
    return t;
  }
}
function av(e) {
  for (const n of e.pages) n[wr] = e;
  for (let n = 0; n < e.actions.length; ++n) {
    const r = e.actions[n];
    (r[wr] = e), (r[lv] = e.pages.find((i) => i.pageId === r.pageId));
  }
  let t;
  for (let n = e.actions.length - 1; n >= 0; n--) {
    const r = e.actions[n];
    (r[Qf] = t), r.apiName.includes('route.') || (t = r);
  }
  for (const n of e.events) n[wr] = e;
  for (const n of e.resources) n[wr] = e;
}
function uv(e) {
  const t = new Map();
  for (const i of e) {
    const o = i.traceUrl;
    let s = t.get(o);
    s || ((s = []), t.set(o, s)), s.push(i);
  }
  const n = [];
  let r = 0;
  for (const [, i] of t) {
    t.size > 1 && cv(i, ++r);
    const o = dv(i);
    n.push(...o);
  }
  n.sort((i, o) =>
    o.parentId === i.callId
      ? -1
      : i.parentId === o.callId
        ? 1
        : i.startTime - o.startTime
  );
  for (let i = 1; i < n.length; ++i) n[i][Kf] = n[i - 1];
  return n;
}
function cv(e, t) {
  for (const n of e)
    for (const r of n.actions)
      r.callId && (r.callId = `${t}:${r.callId}`),
        r.parentId && (r.parentId = `${t}:${r.parentId}`);
}
function dv(e) {
  const t = new Map(),
    n = e.filter((l) => l.origin === 'library'),
    r = e.filter((l) => l.origin === 'testRunner');
  if (!r.length || !n.length)
    return e.map((l) => l.actions.map((a) => ({ ...a, context: l }))).flat();
  const i = n.some((l) => l.actions.some((a) => !!a.stepId));
  for (const l of n)
    for (const a of l.actions) {
      const u = i ? a.stepId : `${a.apiName}@${a.wallTime}`;
      t.set(u, { ...a, context: l });
    }
  const o = hv(r, t, i);
  o && fv(n, o);
  const s = new Map();
  for (const l of r)
    for (const a of l.actions) {
      const u = i ? a.callId : `${a.apiName}@${a.wallTime}`,
        c = t.get(u);
      if (c) {
        s.set(a.callId, c.callId),
          a.error && (c.error = a.error),
          a.attachments && (c.attachments = a.attachments),
          a.parentId && (c.parentId = s.get(a.parentId) ?? a.parentId),
          (c.startTime = a.startTime),
          (c.endTime = a.endTime);
        continue;
      }
      a.parentId && (a.parentId = s.get(a.parentId) ?? a.parentId),
        t.set(u, { ...a, context: l });
    }
  return [...t.values()];
}
function fv(e, t) {
  for (const n of e) {
    (n.startTime += t), (n.endTime += t);
    for (const r of n.actions)
      r.startTime && (r.startTime += t), r.endTime && (r.endTime += t);
    for (const r of n.events) r.time += t;
    for (const r of n.stdio) r.timestamp += t;
    for (const r of n.pages)
      for (const i of r.screencastFrames) i.timestamp += t;
    for (const r of n.resources) r._monotonicTime && (r._monotonicTime += t);
  }
}
function hv(e, t, n) {
  for (const r of e)
    for (const i of r.actions) {
      if (!i.startTime) continue;
      const o = n ? i.callId : `${i.apiName}@${i.wallTime}`,
        s = t.get(o);
      if (s) return i.startTime - s.startTime;
    }
  return 0;
}
function Q1(e) {
  const t = new Map();
  for (const r of e)
    t.set(r.callId, { id: r.callId, parent: void 0, children: [], action: r });
  const n = { id: '', parent: void 0, children: [] };
  for (const r of t.values()) {
    const i = (r.action.parentId && t.get(r.action.parentId)) || n;
    i.children.push(r), (r.parent = i);
  }
  return { rootItem: n, itemMap: t };
}
function yo(e) {
  return e[wr];
}
function pv(e) {
  return e[Qf];
}
function gv(e) {
  return e[Kf];
}
function K1(e) {
  let t = 0,
    n = 0;
  for (const r of mv(e)) {
    if (r.type === 'console') {
      const i = r.messageType;
      i === 'warning' ? ++n : i === 'error' && ++t;
    }
    r.type === 'event' && r.method === 'pageError' && ++t;
  }
  return { errors: t, warnings: n };
}
function mv(e) {
  let t = e[ec];
  if (t) return t;
  const n = pv(e);
  return (
    (t = yo(e).events.filter(
      (r) => r.time >= e.startTime && (!n || r.time < n.startTime)
    )),
    (e[ec] = t),
    t
  );
}
function vv(e, t) {
  var r;
  const n = new Map();
  for (const i of e)
    for (const o of i.stack || []) {
      let s = n.get(o.file);
      s || ((s = { errors: [], content: void 0 }), n.set(o.file, s));
    }
  for (const i of t) {
    const { action: o, stack: s, message: l } = i;
    !o ||
      !s ||
      (r = n.get(s[0].file)) == null ||
      r.errors.push({ line: s[0].line || 0, message: l });
  }
  return n;
}
const ws = new Set([
  'page.route',
  'page.routefromhar',
  'page.unroute',
  'page.unrouteall',
  'browsercontext.route',
  'browsercontext.routefromhar',
  'browsercontext.unroute',
  'browsercontext.unrouteall',
]);
{
  for (const e of [...ws]) ws.add(e + 'async');
  for (const e of [
    'page.route_from_har',
    'page.unroute_all',
    'context.route_from_har',
    'context.unroute_all',
  ])
    ws.add(e);
}
const yv = 50,
  Gf = ({
    sidebarSize: e,
    sidebarHidden: t = !1,
    sidebarIsFirst: n = !1,
    orientation: r = 'vertical',
    minSidebarSize: i = yv,
    settingName: o,
    sidebar: s,
    main: l,
  }) => {
    const a = Math.max(i, e) * window.devicePixelRatio,
      [u, c] = qa(o ? o + '.' + r + ':size' : void 0, a),
      [f, d] = qa(o ? o + '.' + r + ':size' : void 0, a),
      [g, y] = M.useState(null),
      [v, w] = To();
    let p;
    r === 'vertical'
      ? ((p = f / window.devicePixelRatio),
        v && v.height < p && (p = v.height - 10))
      : ((p = u / window.devicePixelRatio),
        v && v.width < p && (p = v.width - 10)),
      (document.body.style.userSelect = g ? 'none' : 'inherit');
    let h = {};
    return (
      r === 'vertical'
        ? n
          ? (h = {
              top: g ? 0 : p - 4,
              bottom: g ? 0 : void 0,
              height: g ? 'initial' : 8,
            })
          : (h = {
              bottom: g ? 0 : p - 4,
              top: g ? 0 : void 0,
              height: g ? 'initial' : 8,
            })
        : n
          ? (h = {
              left: g ? 0 : p - 4,
              right: g ? 0 : void 0,
              width: g ? 'initial' : 8,
            })
          : (h = {
              right: g ? 0 : p - 4,
              left: g ? 0 : void 0,
              width: g ? 'initial' : 8,
            }),
      x.jsxs('div', {
        className: et('split-view', r, n && 'sidebar-first'),
        ref: w,
        children: [
          x.jsx('div', { className: 'split-view-main', children: l }),
          !t &&
            x.jsx('div', {
              style: { flexBasis: p },
              className: 'split-view-sidebar',
              children: s,
            }),
          !t &&
            x.jsx('div', {
              style: h,
              className: 'split-view-resizer',
              onMouseDown: (m) =>
                y({
                  offset: r === 'vertical' ? m.clientY : m.clientX,
                  size: p,
                }),
              onMouseUp: () => y(null),
              onMouseMove: (m) => {
                if (!m.buttons) y(null);
                else if (g) {
                  const T =
                      (r === 'vertical' ? m.clientY : m.clientX) - g.offset,
                    E = n ? g.size + T : g.size - T,
                    b = m.target.parentElement.getBoundingClientRect(),
                    S = Math.min(
                      Math.max(i, E),
                      (r === 'vertical' ? b.height : b.width) - i
                    );
                  r === 'vertical'
                    ? d(S * window.devicePixelRatio)
                    : c(S * window.devicePixelRatio);
                }
              },
            }),
        ],
      })
    );
  };
function Fo(e, t = "'") {
  const n = JSON.stringify(e),
    r = n.substring(1, n.length - 1).replace(/\\"/g, '"');
  if (t === "'") return t + r.replace(/[']/g, "\\'") + t;
  if (t === '"') return t + r.replace(/["]/g, '\\"') + t;
  if (t === '`') return t + r.replace(/[`]/g, '`') + t;
  throw new Error('Invalid escape char');
}
function wo(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
function Xf(e) {
  return e
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
    .toLowerCase();
}
function Ve(e) {
  let t = '';
  for (let n = 0; n < e.length; n++) t += wv(e, n);
  return t;
}
function cr(e) {
  return `"${Ve(e).replace(/\\ /g, ' ')}"`;
}
function wv(e, t) {
  const n = e.charCodeAt(t);
  return n === 0
    ? '�'
    : (n >= 1 && n <= 31) ||
        (n >= 48 && n <= 57 && (t === 0 || (t === 1 && e.charCodeAt(0) === 45)))
      ? '\\' + n.toString(16) + ' '
      : t === 0 && n === 45 && e.length === 1
        ? '\\' + e.charAt(t)
        : n >= 128 ||
            n === 45 ||
            n === 95 ||
            (n >= 48 && n <= 57) ||
            (n >= 65 && n <= 90) ||
            (n >= 97 && n <= 122)
          ? e.charAt(t)
          : '\\' + e.charAt(t);
}
let Xt;
function xv() {
  Xt = new Map();
}
function De(e) {
  let t = Xt == null ? void 0 : Xt.get(e);
  return (
    t === void 0 &&
      ((t = e
        .replace(/\u200b/g, '')
        .trim()
        .replace(/\s+/g, ' ')),
      Xt == null || Xt.set(e, t)),
    t
  );
}
function Ho(e) {
  return e.replace(/(^|[^\\])(\\\\)*\\(['"`])/g, '$1$2$3');
}
function Yf(e) {
  return e.unicode || e.unicodeSets
    ? String(e)
    : String(e)
        .replace(/(^|[^\\])(\\\\)*(["'`])/g, '$1$2\\$3')
        .replace(/>>/g, '\\>\\>');
}
function qe(e, t) {
  return typeof e != 'string' ? Yf(e) : `${JSON.stringify(e)}${t ? 's' : 'i'}`;
}
function xe(e, t) {
  return typeof e != 'string'
    ? Yf(e)
    : `"${e.replace(/\\/g, '\\\\').replace(/["]/g, '\\"')}"${t ? 's' : 'i'}`;
}
function _v(e, t, n = '') {
  if (e.length <= t) return e;
  const r = [...e];
  return r.length > t ? r.slice(0, t - n.length).join('') + n : r.join('');
}
function tc(e, t) {
  return _v(e, t, '…');
}
function Sv(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const Jf = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};
function Ev(e) {
  return e.replace(/[&<>"']/gu, (t) => Jf[t]);
}
function Tv(e) {
  return e.replace(/[&<]/gu, (t) => Jf[t]);
}
const te = function (e, t, n) {
  return e >= t && e <= n;
};
function Ce(e) {
  return te(e, 48, 57);
}
function nc(e) {
  return Ce(e) || te(e, 65, 70) || te(e, 97, 102);
}
function kv(e) {
  return te(e, 65, 90);
}
function Cv(e) {
  return te(e, 97, 122);
}
function Nv(e) {
  return kv(e) || Cv(e);
}
function bv(e) {
  return e >= 128;
}
function zi(e) {
  return Nv(e) || bv(e) || e === 95;
}
function rc(e) {
  return zi(e) || Ce(e) || e === 45;
}
function Av(e) {
  return te(e, 0, 8) || e === 11 || te(e, 14, 31) || e === 127;
}
function Fi(e) {
  return e === 10;
}
function ft(e) {
  return Fi(e) || e === 9 || e === 32;
}
const Lv = 1114111;
class Aa extends Error {
  constructor(t) {
    super(t), (this.name = 'InvalidCharacterError');
  }
}
function Iv(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (
      (r === 13 && e.charCodeAt(n + 1) === 10 && ((r = 10), n++),
      (r === 13 || r === 12) && (r = 10),
      r === 0 && (r = 65533),
      te(r, 55296, 56319) && te(e.charCodeAt(n + 1), 56320, 57343))
    ) {
      const i = r - 55296,
        o = e.charCodeAt(n + 1) - 56320;
      (r = Math.pow(2, 16) + i * Math.pow(2, 10) + o), n++;
    }
    t.push(r);
  }
  return t;
}
function re(e) {
  if (e <= 65535) return String.fromCharCode(e);
  e -= Math.pow(2, 16);
  const t = Math.floor(e / Math.pow(2, 10)) + 55296,
    n = (e % Math.pow(2, 10)) + 56320;
  return String.fromCharCode(t) + String.fromCharCode(n);
}
function Mv(e) {
  const t = Iv(e);
  let n = -1;
  const r = [];
  let i;
  const o = function (N) {
      return N >= t.length ? -1 : t[N];
    },
    s = function (N) {
      if ((N === void 0 && (N = 1), N > 3))
        throw 'Spec Error: no more than three codepoints of lookahead.';
      return o(n + N);
    },
    l = function (N) {
      return N === void 0 && (N = 1), (n += N), (i = o(n)), !0;
    },
    a = function () {
      return (n -= 1), !0;
    },
    u = function (N) {
      return N === void 0 && (N = i), N === -1;
    },
    c = function () {
      if ((f(), l(), ft(i))) {
        for (; ft(s()); ) l();
        return new kl();
      } else {
        if (i === 34) return y();
        if (i === 35)
          if (rc(s()) || p(s(1), s(2))) {
            const N = new hh('');
            return m(s(1), s(2), s(3)) && (N.type = 'id'), (N.value = k()), N;
          } else return new ge(i);
        else
          return i === 36
            ? s() === 61
              ? (l(), new Ov())
              : new ge(i)
            : i === 39
              ? y()
              : i === 40
                ? new ah()
                : i === 41
                  ? new uh()
                  : i === 42
                    ? s() === 61
                      ? (l(), new jv())
                      : new ge(i)
                    : i === 43
                      ? E()
                        ? (a(), d())
                        : new ge(i)
                      : i === 44
                        ? new ih()
                        : i === 45
                          ? E()
                            ? (a(), d())
                            : s(1) === 45 && s(2) === 62
                              ? (l(2), new th())
                              : _()
                                ? (a(), g())
                                : new ge(i)
                          : i === 46
                            ? E()
                              ? (a(), d())
                              : new ge(i)
                            : i === 58
                              ? new nh()
                              : i === 59
                                ? new rh()
                                : i === 60
                                  ? s(1) === 33 && s(2) === 45 && s(3) === 45
                                    ? (l(3), new eh())
                                    : new ge(i)
                                  : i === 64
                                    ? m(s(1), s(2), s(3))
                                      ? new fh(k())
                                      : new ge(i)
                                    : i === 91
                                      ? new lh()
                                      : i === 92
                                        ? h()
                                          ? (a(), g())
                                          : new ge(i)
                                        : i === 93
                                          ? new Cl()
                                          : i === 94
                                            ? s() === 61
                                              ? (l(), new $v())
                                              : new ge(i)
                                            : i === 123
                                              ? new oh()
                                              : i === 124
                                                ? s() === 61
                                                  ? (l(), new Rv())
                                                  : s() === 124
                                                    ? (l(), new ch())
                                                    : new ge(i)
                                                : i === 125
                                                  ? new sh()
                                                  : i === 126
                                                    ? s() === 61
                                                      ? (l(), new Pv())
                                                      : new ge(i)
                                                    : Ce(i)
                                                      ? (a(), d())
                                                      : zi(i)
                                                        ? (a(), g())
                                                        : u()
                                                          ? new Ui()
                                                          : new ge(i);
      }
    },
    f = function () {
      for (; s(1) === 47 && s(2) === 42; )
        for (l(2); ; )
          if ((l(), i === 42 && s() === 47)) {
            l();
            break;
          } else if (u()) return;
    },
    d = function () {
      const N = b();
      if (m(s(1), s(2), s(3))) {
        const P = new Dv();
        return (
          (P.value = N.value),
          (P.repr = N.repr),
          (P.type = N.type),
          (P.unit = k()),
          P
        );
      } else if (s() === 37) {
        l();
        const P = new vh();
        return (P.value = N.value), (P.repr = N.repr), P;
      } else {
        const P = new mh();
        return (P.value = N.value), (P.repr = N.repr), (P.type = N.type), P;
      }
    },
    g = function () {
      const N = k();
      if (N.toLowerCase() === 'url' && s() === 40) {
        for (l(); ft(s(1)) && ft(s(2)); ) l();
        return s() === 34 || s() === 39
          ? new Vi(N)
          : ft(s()) && (s(2) === 34 || s(2) === 39)
            ? new Vi(N)
            : v();
      } else return s() === 40 ? (l(), new Vi(N)) : new dh(N);
    },
    y = function (N) {
      N === void 0 && (N = i);
      let P = '';
      for (; l(); ) {
        if (i === N || u()) return new ph(P);
        if (Fi(i)) return a(), new Zf();
        i === 92 ? u(s()) || (Fi(s()) ? l() : (P += re(w()))) : (P += re(i));
      }
      throw new Error('Internal error');
    },
    v = function () {
      const N = new gh('');
      for (; ft(s()); ) l();
      if (u(s())) return N;
      for (; l(); ) {
        if (i === 41 || u()) return N;
        if (ft(i)) {
          for (; ft(s()); ) l();
          return s() === 41 || u(s()) ? (l(), N) : (I(), new Hi());
        } else {
          if (i === 34 || i === 39 || i === 40 || Av(i)) return I(), new Hi();
          if (i === 92)
            if (h()) N.value += re(w());
            else return I(), new Hi();
          else N.value += re(i);
        }
      }
      throw new Error('Internal error');
    },
    w = function () {
      if ((l(), nc(i))) {
        const N = [i];
        for (let Y = 0; Y < 5 && nc(s()); Y++) l(), N.push(i);
        ft(s()) && l();
        let P = parseInt(
          N.map(function (Y) {
            return String.fromCharCode(Y);
          }).join(''),
          16
        );
        return P > Lv && (P = 65533), P;
      } else return u() ? 65533 : i;
    },
    p = function (N, P) {
      return !(N !== 92 || Fi(P));
    },
    h = function () {
      return p(i, s());
    },
    m = function (N, P, Y) {
      return N === 45
        ? zi(P) || P === 45 || p(P, Y)
        : zi(N)
          ? !0
          : N === 92
            ? p(N, P)
            : !1;
    },
    _ = function () {
      return m(i, s(1), s(2));
    },
    T = function (N, P, Y) {
      return N === 43 || N === 45
        ? !!(Ce(P) || (P === 46 && Ce(Y)))
        : N === 46
          ? !!Ce(P)
          : !!Ce(N);
    },
    E = function () {
      return T(i, s(1), s(2));
    },
    k = function () {
      let N = '';
      for (; l(); )
        if (rc(i)) N += re(i);
        else if (h()) N += re(w());
        else return a(), N;
      throw new Error('Internal parse error');
    },
    b = function () {
      let N = '',
        P = 'integer';
      for ((s() === 43 || s() === 45) && (l(), (N += re(i))); Ce(s()); )
        l(), (N += re(i));
      if (s(1) === 46 && Ce(s(2)))
        for (l(), N += re(i), l(), N += re(i), P = 'number'; Ce(s()); )
          l(), (N += re(i));
      const Y = s(1),
        it = s(2),
        er = s(3);
      if ((Y === 69 || Y === 101) && Ce(it))
        for (l(), N += re(i), l(), N += re(i), P = 'number'; Ce(s()); )
          l(), (N += re(i));
      else if ((Y === 69 || Y === 101) && (it === 43 || it === 45) && Ce(er))
        for (
          l(), N += re(i), l(), N += re(i), l(), N += re(i), P = 'number';
          Ce(s());

        )
          l(), (N += re(i));
      const tr = S(N);
      return { type: P, value: tr, repr: N };
    },
    S = function (N) {
      return +N;
    },
    I = function () {
      for (; l(); ) {
        if (i === 41 || u()) return;
        h() && w();
      }
    };
  let D = 0;
  for (; !u(s()); )
    if ((r.push(c()), D++, D > t.length * 2))
      throw new Error("I'm infinite-looping!");
  return r;
}
class ee {
  constructor() {
    this.tokenType = '';
  }
  toJSON() {
    return { token: this.tokenType };
  }
  toString() {
    return this.tokenType;
  }
  toSource() {
    return '' + this;
  }
}
class Zf extends ee {
  constructor() {
    super(...arguments), (this.tokenType = 'BADSTRING');
  }
}
class Hi extends ee {
  constructor() {
    super(...arguments), (this.tokenType = 'BADURL');
  }
}
class kl extends ee {
  constructor() {
    super(...arguments), (this.tokenType = 'WHITESPACE');
  }
  toString() {
    return 'WS';
  }
  toSource() {
    return ' ';
  }
}
class eh extends ee {
  constructor() {
    super(...arguments), (this.tokenType = 'CDO');
  }
  toSource() {
    return '<!--';
  }
}
class th extends ee {
  constructor() {
    super(...arguments), (this.tokenType = 'CDC');
  }
  toSource() {
    return '-->';
  }
}
class nh extends ee {
  constructor() {
    super(...arguments), (this.tokenType = ':');
  }
}
class rh extends ee {
  constructor() {
    super(...arguments), (this.tokenType = ';');
  }
}
class ih extends ee {
  constructor() {
    super(...arguments), (this.tokenType = ',');
  }
}
class Xn extends ee {
  constructor() {
    super(...arguments), (this.value = ''), (this.mirror = '');
  }
}
class oh extends Xn {
  constructor() {
    super(), (this.tokenType = '{'), (this.value = '{'), (this.mirror = '}');
  }
}
class sh extends Xn {
  constructor() {
    super(), (this.tokenType = '}'), (this.value = '}'), (this.mirror = '{');
  }
}
class lh extends Xn {
  constructor() {
    super(), (this.tokenType = '['), (this.value = '['), (this.mirror = ']');
  }
}
class Cl extends Xn {
  constructor() {
    super(), (this.tokenType = ']'), (this.value = ']'), (this.mirror = '[');
  }
}
class ah extends Xn {
  constructor() {
    super(), (this.tokenType = '('), (this.value = '('), (this.mirror = ')');
  }
}
class uh extends Xn {
  constructor() {
    super(), (this.tokenType = ')'), (this.value = ')'), (this.mirror = '(');
  }
}
class Pv extends ee {
  constructor() {
    super(...arguments), (this.tokenType = '~=');
  }
}
class Rv extends ee {
  constructor() {
    super(...arguments), (this.tokenType = '|=');
  }
}
class $v extends ee {
  constructor() {
    super(...arguments), (this.tokenType = '^=');
  }
}
class Ov extends ee {
  constructor() {
    super(...arguments), (this.tokenType = '$=');
  }
}
class jv extends ee {
  constructor() {
    super(...arguments), (this.tokenType = '*=');
  }
}
class ch extends ee {
  constructor() {
    super(...arguments), (this.tokenType = '||');
  }
}
class Ui extends ee {
  constructor() {
    super(...arguments), (this.tokenType = 'EOF');
  }
  toSource() {
    return '';
  }
}
class ge extends ee {
  constructor(t) {
    super(),
      (this.tokenType = 'DELIM'),
      (this.value = ''),
      (this.value = re(t));
  }
  toString() {
    return 'DELIM(' + this.value + ')';
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
  toSource() {
    return this.value === '\\'
      ? `\\
`
      : this.value;
  }
}
class Yn extends ee {
  constructor() {
    super(...arguments), (this.value = '');
  }
  ASCIIMatch(t) {
    return this.value.toLowerCase() === t.toLowerCase();
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
}
class dh extends Yn {
  constructor(t) {
    super(), (this.tokenType = 'IDENT'), (this.value = t);
  }
  toString() {
    return 'IDENT(' + this.value + ')';
  }
  toSource() {
    return ei(this.value);
  }
}
class Vi extends Yn {
  constructor(t) {
    super(),
      (this.tokenType = 'FUNCTION'),
      (this.value = t),
      (this.mirror = ')');
  }
  toString() {
    return 'FUNCTION(' + this.value + ')';
  }
  toSource() {
    return ei(this.value) + '(';
  }
}
class fh extends Yn {
  constructor(t) {
    super(), (this.tokenType = 'AT-KEYWORD'), (this.value = t);
  }
  toString() {
    return 'AT(' + this.value + ')';
  }
  toSource() {
    return '@' + ei(this.value);
  }
}
class hh extends Yn {
  constructor(t) {
    super(),
      (this.tokenType = 'HASH'),
      (this.value = t),
      (this.type = 'unrestricted');
  }
  toString() {
    return 'HASH(' + this.value + ')';
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.type = this.type), t;
  }
  toSource() {
    return this.type === 'id' ? '#' + ei(this.value) : '#' + zv(this.value);
  }
}
class ph extends Yn {
  constructor(t) {
    super(), (this.tokenType = 'STRING'), (this.value = t);
  }
  toString() {
    return '"' + yh(this.value) + '"';
  }
}
class gh extends Yn {
  constructor(t) {
    super(), (this.tokenType = 'URL'), (this.value = t);
  }
  toString() {
    return 'URL(' + this.value + ')';
  }
  toSource() {
    return 'url("' + yh(this.value) + '")';
  }
}
class mh extends ee {
  constructor() {
    super(),
      (this.tokenType = 'NUMBER'),
      (this.type = 'integer'),
      (this.repr = '');
  }
  toString() {
    return this.type === 'integer'
      ? 'INT(' + this.value + ')'
      : 'NUMBER(' + this.value + ')';
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.value = this.value), (t.type = this.type), (t.repr = this.repr), t
    );
  }
  toSource() {
    return this.repr;
  }
}
class vh extends ee {
  constructor() {
    super(), (this.tokenType = 'PERCENTAGE'), (this.repr = '');
  }
  toString() {
    return 'PERCENTAGE(' + this.value + ')';
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.repr = this.repr), t;
  }
  toSource() {
    return this.repr + '%';
  }
}
class Dv extends ee {
  constructor() {
    super(),
      (this.tokenType = 'DIMENSION'),
      (this.type = 'integer'),
      (this.repr = ''),
      (this.unit = '');
  }
  toString() {
    return 'DIM(' + this.value + ',' + this.unit + ')';
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (
      (t.value = this.value),
      (t.type = this.type),
      (t.repr = this.repr),
      (t.unit = this.unit),
      t
    );
  }
  toSource() {
    const t = this.repr;
    let n = ei(this.unit);
    return (
      n[0].toLowerCase() === 'e' &&
        (n[1] === '-' || te(n.charCodeAt(1), 48, 57)) &&
        (n = '\\65 ' + n.slice(1, n.length)),
      t + n
    );
  }
}
function ei(e) {
  e = '' + e;
  let t = '';
  const n = e.charCodeAt(0);
  for (let r = 0; r < e.length; r++) {
    const i = e.charCodeAt(r);
    if (i === 0) throw new Aa('Invalid character: the input contains U+0000.');
    te(i, 1, 31) ||
    i === 127 ||
    (r === 0 && te(i, 48, 57)) ||
    (r === 1 && te(i, 48, 57) && n === 45)
      ? (t += '\\' + i.toString(16) + ' ')
      : i >= 128 ||
          i === 45 ||
          i === 95 ||
          te(i, 48, 57) ||
          te(i, 65, 90) ||
          te(i, 97, 122)
        ? (t += e[r])
        : (t += '\\' + e[r]);
  }
  return t;
}
function zv(e) {
  e = '' + e;
  let t = '';
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new Aa('Invalid character: the input contains U+0000.');
    r >= 128 ||
    r === 45 ||
    r === 95 ||
    te(r, 48, 57) ||
    te(r, 65, 90) ||
    te(r, 97, 122)
      ? (t += e[n])
      : (t += '\\' + r.toString(16) + ' ');
  }
  return t;
}
function yh(e) {
  e = '' + e;
  let t = '';
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new Aa('Invalid character: the input contains U+0000.');
    te(r, 1, 31) || r === 127
      ? (t += '\\' + r.toString(16) + ' ')
      : r === 34 || r === 92
        ? (t += '\\' + e[n])
        : (t += e[n]);
  }
  return t;
}
class be extends Error {}
function Fv(e, t) {
  let n;
  try {
    (n = Mv(e)), n[n.length - 1] instanceof Ui || n.push(new Ui());
  } catch (S) {
    const I = S.message + ` while parsing selector "${e}"`,
      D = (S.stack || '').indexOf(S.message);
    throw (
      (D !== -1 &&
        (S.stack =
          S.stack.substring(0, D) +
          I +
          S.stack.substring(D + S.message.length)),
      (S.message = I),
      S)
    );
  }
  const r = n.find(
    (S) =>
      S instanceof fh ||
      S instanceof Zf ||
      S instanceof Hi ||
      S instanceof ch ||
      S instanceof eh ||
      S instanceof th ||
      S instanceof rh ||
      S instanceof oh ||
      S instanceof sh ||
      S instanceof gh ||
      S instanceof vh
  );
  if (r)
    throw new be(
      `Unsupported token "${r.toSource()}" while parsing selector "${e}"`
    );
  let i = 0;
  const o = new Set();
  function s() {
    return new be(
      `Unexpected token "${n[i].toSource()}" while parsing selector "${e}"`
    );
  }
  function l() {
    for (; n[i] instanceof kl; ) i++;
  }
  function a(S = i) {
    return n[S] instanceof dh;
  }
  function u(S = i) {
    return n[S] instanceof ph;
  }
  function c(S = i) {
    return n[S] instanceof mh;
  }
  function f(S = i) {
    return n[S] instanceof ih;
  }
  function d(S = i) {
    return n[S] instanceof ah;
  }
  function g(S = i) {
    return n[S] instanceof uh;
  }
  function y(S = i) {
    return n[S] instanceof Vi;
  }
  function v(S = i) {
    return n[S] instanceof ge && n[S].value === '*';
  }
  function w(S = i) {
    return n[S] instanceof Ui;
  }
  function p(S = i) {
    return n[S] instanceof ge && ['>', '+', '~'].includes(n[S].value);
  }
  function h(S = i) {
    return f(S) || g(S) || w(S) || p(S) || n[S] instanceof kl;
  }
  function m() {
    const S = [_()];
    for (; l(), !!f(); ) i++, S.push(_());
    return S;
  }
  function _() {
    return l(), c() || u() ? n[i++].value : T();
  }
  function T() {
    const S = { simples: [] };
    for (
      l(),
        p()
          ? S.simples.push({
              selector: { functions: [{ name: 'scope', args: [] }] },
              combinator: '',
            })
          : S.simples.push({ selector: E(), combinator: '' });
      ;

    ) {
      if ((l(), p()))
        (S.simples[S.simples.length - 1].combinator = n[i++].value), l();
      else if (h()) break;
      S.simples.push({ combinator: '', selector: E() });
    }
    return S;
  }
  function E() {
    let S = '';
    const I = [];
    for (; !h(); )
      if (a() || v()) S += n[i++].toSource();
      else if (n[i] instanceof hh) S += n[i++].toSource();
      else if (n[i] instanceof ge && n[i].value === '.')
        if ((i++, a())) S += '.' + n[i++].toSource();
        else throw s();
      else if (n[i] instanceof nh)
        if ((i++, a()))
          if (!t.has(n[i].value.toLowerCase())) S += ':' + n[i++].toSource();
          else {
            const D = n[i++].value.toLowerCase();
            I.push({ name: D, args: [] }), o.add(D);
          }
        else if (y()) {
          const D = n[i++].value.toLowerCase();
          if (
            (t.has(D)
              ? (I.push({ name: D, args: m() }), o.add(D))
              : (S += `:${D}(${k()})`),
            l(),
            !g())
          )
            throw s();
          i++;
        } else throw s();
      else if (n[i] instanceof lh) {
        for (S += '[', i++; !(n[i] instanceof Cl) && !w(); )
          S += n[i++].toSource();
        if (!(n[i] instanceof Cl)) throw s();
        (S += ']'), i++;
      } else throw s();
    if (!S && !I.length) throw s();
    return { css: S || void 0, functions: I };
  }
  function k() {
    let S = '',
      I = 1;
    for (; !w() && ((d() || y()) && I++, g() && I--, !!I); )
      S += n[i++].toSource();
    return S;
  }
  const b = m();
  if (!w()) throw s();
  if (b.some((S) => typeof S != 'object' || !('simples' in S)))
    throw new be(`Error while parsing selector "${e}"`);
  return { selector: b, names: Array.from(o) };
}
const Nl = new Set([
    'internal:has',
    'internal:has-not',
    'internal:and',
    'internal:or',
    'internal:chain',
    'left-of',
    'right-of',
    'above',
    'below',
    'near',
  ]),
  Hv = new Set(['left-of', 'right-of', 'above', 'below', 'near']),
  wh = new Set([
    'not',
    'is',
    'where',
    'has',
    'scope',
    'light',
    'visible',
    'text',
    'text-matches',
    'text-is',
    'has-text',
    'above',
    'below',
    'right-of',
    'left-of',
    'near',
    'nth-match',
  ]);
function Uo(e) {
  const t = Bv(e),
    n = [];
  for (const r of t.parts) {
    if (r.name === 'css' || r.name === 'css:light') {
      r.name === 'css:light' && (r.body = ':light(' + r.body + ')');
      const i = Fv(r.body, wh);
      n.push({ name: 'css', body: i.selector, source: r.body });
      continue;
    }
    if (Nl.has(r.name)) {
      let i, o;
      try {
        const u = JSON.parse('[' + r.body + ']');
        if (
          !Array.isArray(u) ||
          u.length < 1 ||
          u.length > 2 ||
          typeof u[0] != 'string'
        )
          throw new be(`Malformed selector: ${r.name}=` + r.body);
        if (((i = u[0]), u.length === 2)) {
          if (typeof u[1] != 'number' || !Hv.has(r.name))
            throw new be(`Malformed selector: ${r.name}=` + r.body);
          o = u[1];
        }
      } catch {
        throw new be(`Malformed selector: ${r.name}=` + r.body);
      }
      const s = {
          name: r.name,
          source: r.body,
          body: { parsed: Uo(i), distance: o },
        },
        l = [...s.body.parsed.parts]
          .reverse()
          .find(
            (u) => u.name === 'internal:control' && u.body === 'enter-frame'
          ),
        a = l ? s.body.parsed.parts.indexOf(l) : -1;
      a !== -1 &&
        Uv(s.body.parsed.parts.slice(0, a + 1), n.slice(0, a + 1)) &&
        s.body.parsed.parts.splice(0, a + 1),
        n.push(s);
      continue;
    }
    n.push({ ...r, source: r.body });
  }
  if (Nl.has(n[0].name))
    throw new be(`"${n[0].name}" selector cannot be first`);
  return { capture: t.capture, parts: n };
}
function Uv(e, t) {
  return fn({ parts: e }) === fn({ parts: t });
}
function fn(e, t) {
  return typeof e == 'string'
    ? e
    : e.parts
        .map((n, r) => {
          let i = !0;
          !t &&
            r !== e.capture &&
            (n.name === 'css' ||
              (n.name === 'xpath' && n.source.startsWith('//')) ||
              n.source.startsWith('..')) &&
            (i = !1);
          const o = i ? n.name + '=' : '';
          return `${r === e.capture ? '*' : ''}${o}${n.source}`;
        })
        .join(' >> ');
}
function Vv(e, t) {
  const n = (r, i) => {
    for (const o of r.parts) t(o, i), Nl.has(o.name) && n(o.body.parsed, !0);
  };
  n(e, !1);
}
function Bv(e) {
  let t = 0,
    n,
    r = 0;
  const i = { parts: [] },
    o = () => {
      const l = e.substring(r, t).trim(),
        a = l.indexOf('=');
      let u, c;
      a !== -1 &&
      l
        .substring(0, a)
        .trim()
        .match(/^[a-zA-Z_0-9-+:*]+$/)
        ? ((u = l.substring(0, a).trim()), (c = l.substring(a + 1)))
        : (l.length > 1 && l[0] === '"' && l[l.length - 1] === '"') ||
            (l.length > 1 && l[0] === "'" && l[l.length - 1] === "'")
          ? ((u = 'text'), (c = l))
          : /^\(*\/\//.test(l) || l.startsWith('..')
            ? ((u = 'xpath'), (c = l))
            : ((u = 'css'), (c = l));
      let f = !1;
      if (
        (u[0] === '*' && ((f = !0), (u = u.substring(1))),
        i.parts.push({ name: u, body: c }),
        f)
      ) {
        if (i.capture !== void 0)
          throw new be(
            'Only one of the selectors can capture using * modifier'
          );
        i.capture = i.parts.length - 1;
      }
    };
  if (!e.includes('>>')) return (t = e.length), o(), i;
  const s = () => {
    const a = e.substring(r, t).match(/^\s*text\s*=(.*)$/);
    return !!a && !!a[1];
  };
  for (; t < e.length; ) {
    const l = e[t];
    l === '\\' && t + 1 < e.length
      ? (t += 2)
      : l === n
        ? ((n = void 0), t++)
        : !n && (l === '"' || l === "'" || l === '`') && !s()
          ? ((n = l), t++)
          : !n && l === '>' && e[t + 1] === '>'
            ? (o(), (t += 2), (r = t))
            : t++;
  }
  return o(), i;
}
function on(e, t) {
  let n = 0,
    r = e.length === 0;
  const i = () => e[n] || '',
    o = () => {
      const w = i();
      return ++n, (r = n >= e.length), w;
    },
    s = (w) => {
      throw r
        ? new be(`Unexpected end of selector while parsing selector \`${e}\``)
        : new be(
            `Error while parsing selector \`${e}\` - unexpected symbol "${i()}" at position ${n}` +
              (w ? ' during ' + w : '')
          );
    };
  function l() {
    for (; !r && /\s/.test(i()); ) o();
  }
  function a(w) {
    return (
      w >= '' ||
      (w >= '0' && w <= '9') ||
      (w >= 'A' && w <= 'Z') ||
      (w >= 'a' && w <= 'z') ||
      (w >= '0' && w <= '9') ||
      w === '_' ||
      w === '-'
    );
  }
  function u() {
    let w = '';
    for (l(); !r && a(i()); ) w += o();
    return w;
  }
  function c(w) {
    let p = o();
    for (p !== w && s('parsing quoted string'); !r && i() !== w; )
      i() === '\\' && o(), (p += o());
    return i() !== w && s('parsing quoted string'), (p += o()), p;
  }
  function f() {
    o() !== '/' && s('parsing regular expression');
    let w = '',
      p = !1;
    for (; !r; ) {
      if (i() === '\\') (w += o()), r && s('parsing regular expression');
      else if (p && i() === ']') p = !1;
      else if (!p && i() === '[') p = !0;
      else if (!p && i() === '/') break;
      w += o();
    }
    o() !== '/' && s('parsing regular expression');
    let h = '';
    for (; !r && i().match(/[dgimsuy]/); ) h += o();
    try {
      return new RegExp(w, h);
    } catch (m) {
      throw new be(`Error while parsing selector \`${e}\`: ${m.message}`);
    }
  }
  function d() {
    let w = '';
    return (
      l(),
      i() === "'" || i() === '"' ? (w = c(i()).slice(1, -1)) : (w = u()),
      w || s('parsing property path'),
      w
    );
  }
  function g() {
    l();
    let w = '';
    return (
      r || (w += o()),
      !r && w !== '=' && (w += o()),
      ['=', '*=', '^=', '$=', '|=', '~='].includes(w) || s('parsing operator'),
      w
    );
  }
  function y() {
    o();
    const w = [];
    for (w.push(d()), l(); i() === '.'; ) o(), w.push(d()), l();
    if (i() === ']')
      return (
        o(),
        {
          name: w.join('.'),
          jsonPath: w,
          op: '<truthy>',
          value: null,
          caseSensitive: !1,
        }
      );
    const p = g();
    let h,
      m = !0;
    if ((l(), i() === '/')) {
      if (p !== '=')
        throw new be(
          `Error while parsing selector \`${e}\` - cannot use ${p} in attribute with regular expression`
        );
      h = f();
    } else if (i() === "'" || i() === '"')
      (h = c(i()).slice(1, -1)),
        l(),
        i() === 'i' || i() === 'I'
          ? ((m = !1), o())
          : (i() === 's' || i() === 'S') && ((m = !0), o());
    else {
      for (h = ''; !r && (a(i()) || i() === '+' || i() === '.'); ) h += o();
      h === 'true'
        ? (h = !0)
        : h === 'false'
          ? (h = !1)
          : t || ((h = +h), Number.isNaN(h) && s('parsing attribute value'));
    }
    if (
      (l(),
      i() !== ']' && s('parsing attribute value'),
      o(),
      p !== '=' && typeof h != 'string')
    )
      throw new be(
        `Error while parsing selector \`${e}\` - cannot use ${p} in attribute with non-string matching value - ${h}`
      );
    return {
      name: w.join('.'),
      jsonPath: w,
      op: p,
      value: h,
      caseSensitive: m,
    };
  }
  const v = { name: '', attributes: [] };
  for (v.name = u(), l(); i() === '['; ) v.attributes.push(y()), l();
  if ((r || s(void 0), !v.name && !v.attributes.length))
    throw new be(
      `Error while parsing selector \`${e}\` - selector cannot be empty`
    );
  return v;
}
function zn(e, t, n = !1) {
  return xh(e, t, n)[0];
}
function xh(e, t, n = !1, r = 20, i) {
  try {
    return wn(new Yv[e](i), Uo(t), n, r);
  } catch {
    return [t];
  }
}
function wn(e, t, n = !1, r = 20) {
  const i = [...t.parts],
    o = [];
  let s = n ? 'frame-locator' : 'page';
  for (let l = 0; l < i.length; l++) {
    const a = i[l],
      u = s;
    if (((s = 'locator'), a.name === 'nth')) {
      a.body === '0'
        ? o.push([
            e.generateLocator(u, 'first', ''),
            e.generateLocator(u, 'nth', '0'),
          ])
        : a.body === '-1'
          ? o.push([
              e.generateLocator(u, 'last', ''),
              e.generateLocator(u, 'nth', '-1'),
            ])
          : o.push([e.generateLocator(u, 'nth', a.body)]);
      continue;
    }
    if (a.name === 'internal:text') {
      const { exact: v, text: w } = dr(a.body);
      o.push([e.generateLocator(u, 'text', w, { exact: v })]);
      continue;
    }
    if (a.name === 'internal:has-text') {
      const { exact: v, text: w } = dr(a.body);
      if (!v) {
        o.push([e.generateLocator(u, 'has-text', w, { exact: v })]);
        continue;
      }
    }
    if (a.name === 'internal:has-not-text') {
      const { exact: v, text: w } = dr(a.body);
      if (!v) {
        o.push([e.generateLocator(u, 'has-not-text', w, { exact: v })]);
        continue;
      }
    }
    if (a.name === 'internal:has') {
      const v = wn(e, a.body.parsed, !1, r);
      o.push(v.map((w) => e.generateLocator(u, 'has', w)));
      continue;
    }
    if (a.name === 'internal:has-not') {
      const v = wn(e, a.body.parsed, !1, r);
      o.push(v.map((w) => e.generateLocator(u, 'hasNot', w)));
      continue;
    }
    if (a.name === 'internal:and') {
      const v = wn(e, a.body.parsed, !1, r);
      o.push(v.map((w) => e.generateLocator(u, 'and', w)));
      continue;
    }
    if (a.name === 'internal:or') {
      const v = wn(e, a.body.parsed, !1, r);
      o.push(v.map((w) => e.generateLocator(u, 'or', w)));
      continue;
    }
    if (a.name === 'internal:chain') {
      const v = wn(e, a.body.parsed, !1, r);
      o.push(v.map((w) => e.generateLocator(u, 'chain', w)));
      continue;
    }
    if (a.name === 'internal:label') {
      const { exact: v, text: w } = dr(a.body);
      o.push([e.generateLocator(u, 'label', w, { exact: v })]);
      continue;
    }
    if (a.name === 'internal:role') {
      const v = on(a.body, !0),
        w = { attrs: [] };
      for (const p of v.attributes)
        p.name === 'name'
          ? ((w.exact = p.caseSensitive), (w.name = p.value))
          : (p.name === 'level' &&
              typeof p.value == 'string' &&
              (p.value = +p.value),
            w.attrs.push({
              name: p.name === 'include-hidden' ? 'includeHidden' : p.name,
              value: p.value,
            }));
      o.push([e.generateLocator(u, 'role', v.name, w)]);
      continue;
    }
    if (a.name === 'internal:testid') {
      const v = on(a.body, !0),
        { value: w } = v.attributes[0];
      o.push([e.generateLocator(u, 'test-id', w)]);
      continue;
    }
    if (a.name === 'internal:attr') {
      const v = on(a.body, !0),
        { name: w, value: p, caseSensitive: h } = v.attributes[0],
        m = p,
        _ = !!h;
      if (w === 'placeholder') {
        o.push([e.generateLocator(u, 'placeholder', m, { exact: _ })]);
        continue;
      }
      if (w === 'alt') {
        o.push([e.generateLocator(u, 'alt', m, { exact: _ })]);
        continue;
      }
      if (w === 'title') {
        o.push([e.generateLocator(u, 'title', m, { exact: _ })]);
        continue;
      }
    }
    if (a.name === 'internal:control' && a.body === 'enter-frame') {
      o.push([e.generateLocator(u, 'frame', '')]), (s = 'frame-locator');
      continue;
    }
    let c = 'default';
    const f = i[l + 1],
      d = fn({ parts: [a] }),
      g = e.generateLocator(u, c, d);
    if (f && ['internal:has-text', 'internal:has-not-text'].includes(f.name)) {
      const { exact: v, text: w } = dr(f.body);
      if (!v) {
        const p = e.generateLocator(
            'locator',
            f.name === 'internal:has-text' ? 'has-text' : 'has-not-text',
            w,
            { exact: v }
          ),
          h = {};
        f.name === 'internal:has-text' ? (h.hasText = w) : (h.hasNotText = w);
        const m = e.generateLocator(u, 'default', d, h);
        o.push([e.chainLocators([g, p]), m]), l++;
        continue;
      }
    }
    let y;
    if (['xpath', 'css'].includes(a.name)) {
      const v = fn({ parts: [a] }, !0);
      y = e.generateLocator(u, c, v);
    }
    o.push([g, y].filter(Boolean));
  }
  return qv(e, o, r);
}
function qv(e, t, n) {
  const r = t.map(() => ''),
    i = [],
    o = (s) => {
      if (s === t.length) return i.push(e.chainLocators(r)), r.length < n;
      for (const l of t[s]) if (((r[s] = l), !o(s + 1))) return !1;
      return !0;
    };
  return o(0), i;
}
function dr(e) {
  let t = !1;
  const n = e.match(/^\/(.*)\/([igm]*)$/);
  return n
    ? { text: new RegExp(n[1], n[2]) }
    : (e.endsWith('"')
        ? ((e = JSON.parse(e)), (t = !0))
        : e.endsWith('"s')
          ? ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !0))
          : e.endsWith('"i') &&
            ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !1)),
      { exact: t, text: e });
}
class Wv {
  constructor(t) {
    this.preferredQuote = t;
  }
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case 'default':
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, { hasText: ${this.toHasText(i.hasText)} })`
          : i.hasNotText !== void 0
            ? `locator(${this.quote(r)}, { hasNotText: ${this.toHasText(i.hasNotText)} })`
            : `locator(${this.quote(r)})`;
      case 'frame':
        return 'contentFrame()';
      case 'nth':
        return `nth(${r})`;
      case 'first':
        return 'first()';
      case 'last':
        return 'last()';
      case 'role':
        const o = [];
        ce(i.name)
          ? o.push(`name: ${this.regexToSourceString(i.name)}`)
          : typeof i.name == 'string' &&
            (o.push(`name: ${this.quote(i.name)}`),
            i.exact && o.push('exact: true'));
        for (const { name: l, value: a } of i.attrs)
          o.push(`${l}: ${typeof a == 'string' ? this.quote(a) : a}`);
        const s = o.length ? `, { ${o.join(', ')} }` : '';
        return `getByRole(${this.quote(r)}${s})`;
      case 'has-text':
        return `filter({ hasText: ${this.toHasText(r)} })`;
      case 'has-not-text':
        return `filter({ hasNotText: ${this.toHasText(r)} })`;
      case 'has':
        return `filter({ has: ${r} })`;
      case 'hasNot':
        return `filter({ hasNot: ${r} })`;
      case 'and':
        return `and(${r})`;
      case 'or':
        return `or(${r})`;
      case 'chain':
        return `locator(${r})`;
      case 'test-id':
        return `getByTestId(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact('getByText', r, !!i.exact);
      case 'alt':
        return this.toCallWithExact('getByAltText', r, !!i.exact);
      case 'placeholder':
        return this.toCallWithExact('getByPlaceholder', r, !!i.exact);
      case 'label':
        return this.toCallWithExact('getByLabel', r, !!i.exact);
      case 'title':
        return this.toCallWithExact('getByTitle', r, !!i.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToSourceString(t) {
    return Ho(String(t));
  }
  toCallWithExact(t, n, r) {
    return ce(n)
      ? `${t}(${this.regexToSourceString(n)})`
      : r
        ? `${t}(${this.quote(n)}, { exact: true })`
        : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return ce(t) ? this.regexToSourceString(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return ce(t) ? this.regexToSourceString(t) : this.quote(t);
  }
  quote(t) {
    return Fo(t, this.preferredQuote ?? "'");
  }
}
class Qv {
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case 'default':
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, has_text=${this.toHasText(i.hasText)})`
          : i.hasNotText !== void 0
            ? `locator(${this.quote(r)}, has_not_text=${this.toHasText(i.hasNotText)})`
            : `locator(${this.quote(r)})`;
      case 'frame':
        return 'content_frame';
      case 'nth':
        return `nth(${r})`;
      case 'first':
        return 'first';
      case 'last':
        return 'last';
      case 'role':
        const o = [];
        ce(i.name)
          ? o.push(`name=${this.regexToString(i.name)}`)
          : typeof i.name == 'string' &&
            (o.push(`name=${this.quote(i.name)}`),
            i.exact && o.push('exact=True'));
        for (const { name: l, value: a } of i.attrs) {
          let u = typeof a == 'string' ? this.quote(a) : a;
          typeof a == 'boolean' && (u = a ? 'True' : 'False'),
            o.push(`${Xf(l)}=${u}`);
        }
        const s = o.length ? `, ${o.join(', ')}` : '';
        return `get_by_role(${this.quote(r)}${s})`;
      case 'has-text':
        return `filter(has_text=${this.toHasText(r)})`;
      case 'has-not-text':
        return `filter(has_not_text=${this.toHasText(r)})`;
      case 'has':
        return `filter(has=${r})`;
      case 'hasNot':
        return `filter(has_not=${r})`;
      case 'and':
        return `and_(${r})`;
      case 'or':
        return `or_(${r})`;
      case 'chain':
        return `locator(${r})`;
      case 'test-id':
        return `get_by_test_id(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact('get_by_text', r, !!i.exact);
      case 'alt':
        return this.toCallWithExact('get_by_alt_text', r, !!i.exact);
      case 'placeholder':
        return this.toCallWithExact('get_by_placeholder', r, !!i.exact);
      case 'label':
        return this.toCallWithExact('get_by_label', r, !!i.exact);
      case 'title':
        return this.toCallWithExact('get_by_title', r, !!i.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToString(t) {
    const n = t.flags.includes('i') ? ', re.IGNORECASE' : '';
    return `re.compile(r"${Ho(t.source).replace(/\\\//, '/').replace(/"/g, '\\"')}"${n})`;
  }
  toCallWithExact(t, n, r) {
    return ce(n)
      ? `${t}(${this.regexToString(n)})`
      : r
        ? `${t}(${this.quote(n)}, exact=True)`
        : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return ce(t) ? this.regexToString(t) : `${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return ce(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return Fo(t, '"');
  }
}
class Kv {
  generateLocator(t, n, r, i = {}) {
    let o;
    switch (t) {
      case 'page':
        o = 'Page';
        break;
      case 'frame-locator':
        o = 'FrameLocator';
        break;
      case 'locator':
        o = 'Locator';
        break;
    }
    switch (n) {
      case 'default':
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, new ${o}.LocatorOptions().setHasText(${this.toHasText(i.hasText)}))`
          : i.hasNotText !== void 0
            ? `locator(${this.quote(r)}, new ${o}.LocatorOptions().setHasNotText(${this.toHasText(i.hasNotText)}))`
            : `locator(${this.quote(r)})`;
      case 'frame':
        return 'contentFrame()';
      case 'nth':
        return `nth(${r})`;
      case 'first':
        return 'first()';
      case 'last':
        return 'last()';
      case 'role':
        const s = [];
        ce(i.name)
          ? s.push(`.setName(${this.regexToString(i.name)})`)
          : typeof i.name == 'string' &&
            (s.push(`.setName(${this.quote(i.name)})`),
            i.exact && s.push('.setExact(true)'));
        for (const { name: a, value: u } of i.attrs)
          s.push(`.set${wo(a)}(${typeof u == 'string' ? this.quote(u) : u})`);
        const l = s.length ? `, new ${o}.GetByRoleOptions()${s.join('')}` : '';
        return `getByRole(AriaRole.${Xf(r).toUpperCase()}${l})`;
      case 'has-text':
        return `filter(new ${o}.FilterOptions().setHasText(${this.toHasText(r)}))`;
      case 'has-not-text':
        return `filter(new ${o}.FilterOptions().setHasNotText(${this.toHasText(r)}))`;
      case 'has':
        return `filter(new ${o}.FilterOptions().setHas(${r}))`;
      case 'hasNot':
        return `filter(new ${o}.FilterOptions().setHasNot(${r}))`;
      case 'and':
        return `and(${r})`;
      case 'or':
        return `or(${r})`;
      case 'chain':
        return `locator(${r})`;
      case 'test-id':
        return `getByTestId(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact(o, 'getByText', r, !!i.exact);
      case 'alt':
        return this.toCallWithExact(o, 'getByAltText', r, !!i.exact);
      case 'placeholder':
        return this.toCallWithExact(o, 'getByPlaceholder', r, !!i.exact);
      case 'label':
        return this.toCallWithExact(o, 'getByLabel', r, !!i.exact);
      case 'title':
        return this.toCallWithExact(o, 'getByTitle', r, !!i.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToString(t) {
    const n = t.flags.includes('i') ? ', Pattern.CASE_INSENSITIVE' : '';
    return `Pattern.compile(${this.quote(Ho(t.source))}${n})`;
  }
  toCallWithExact(t, n, r, i) {
    return ce(r)
      ? `${n}(${this.regexToString(r)})`
      : i
        ? `${n}(${this.quote(r)}, new ${t}.${wo(n)}Options().setExact(true))`
        : `${n}(${this.quote(r)})`;
  }
  toHasText(t) {
    return ce(t) ? this.regexToString(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return ce(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return Fo(t, '"');
  }
}
class Gv {
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case 'default':
        return i.hasText !== void 0
          ? `Locator(${this.quote(r)}, new() { ${this.toHasText(i.hasText)} })`
          : i.hasNotText !== void 0
            ? `Locator(${this.quote(r)}, new() { ${this.toHasNotText(i.hasNotText)} })`
            : `Locator(${this.quote(r)})`;
      case 'frame':
        return 'ContentFrame';
      case 'nth':
        return `Nth(${r})`;
      case 'first':
        return 'First';
      case 'last':
        return 'Last';
      case 'role':
        const o = [];
        ce(i.name)
          ? o.push(`NameRegex = ${this.regexToString(i.name)}`)
          : typeof i.name == 'string' &&
            (o.push(`Name = ${this.quote(i.name)}`),
            i.exact && o.push('Exact = true'));
        for (const { name: l, value: a } of i.attrs)
          o.push(`${wo(l)} = ${typeof a == 'string' ? this.quote(a) : a}`);
        const s = o.length ? `, new() { ${o.join(', ')} }` : '';
        return `GetByRole(AriaRole.${wo(r)}${s})`;
      case 'has-text':
        return `Filter(new() { ${this.toHasText(r)} })`;
      case 'has-not-text':
        return `Filter(new() { ${this.toHasNotText(r)} })`;
      case 'has':
        return `Filter(new() { Has = ${r} })`;
      case 'hasNot':
        return `Filter(new() { HasNot = ${r} })`;
      case 'and':
        return `And(${r})`;
      case 'or':
        return `Or(${r})`;
      case 'chain':
        return `Locator(${r})`;
      case 'test-id':
        return `GetByTestId(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact('GetByText', r, !!i.exact);
      case 'alt':
        return this.toCallWithExact('GetByAltText', r, !!i.exact);
      case 'placeholder':
        return this.toCallWithExact('GetByPlaceholder', r, !!i.exact);
      case 'label':
        return this.toCallWithExact('GetByLabel', r, !!i.exact);
      case 'title':
        return this.toCallWithExact('GetByTitle', r, !!i.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToString(t) {
    const n = t.flags.includes('i') ? ', RegexOptions.IgnoreCase' : '';
    return `new Regex(${this.quote(Ho(t.source))}${n})`;
  }
  toCallWithExact(t, n, r) {
    return ce(n)
      ? `${t}(${this.regexToString(n)})`
      : r
        ? `${t}(${this.quote(n)}, new() { Exact = true })`
        : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return ce(t)
      ? `HasTextRegex = ${this.regexToString(t)}`
      : `HasText = ${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return ce(t) ? this.regexToString(t) : this.quote(t);
  }
  toHasNotText(t) {
    return ce(t)
      ? `HasNotTextRegex = ${this.regexToString(t)}`
      : `HasNotText = ${this.quote(t)}`;
  }
  quote(t) {
    return Fo(t, '"');
  }
}
class Xv {
  generateLocator(t, n, r, i = {}) {
    return JSON.stringify({ kind: n, body: r, options: i });
  }
  chainLocators(t) {
    const n = t.map((r) => JSON.parse(r));
    for (let r = 0; r < n.length - 1; ++r) n[r].next = n[r + 1];
    return JSON.stringify(n[0]);
  }
}
const Yv = { javascript: Wv, python: Qv, java: Kv, csharp: Gv, jsonl: Xv };
function ce(e) {
  return e instanceof RegExp;
}
const ic = new Map();
function La({
  name: e,
  items: t = [],
  id: n,
  render: r,
  icon: i,
  isError: o,
  isWarning: s,
  isInfo: l,
  indent: a,
  selectedItem: u,
  onAccepted: c,
  onSelected: f,
  onLeftArrow: d,
  onRightArrow: g,
  onHighlighted: y,
  onIconClicked: v,
  noItemsMessage: w,
  dataTestId: p,
  notSelectable: h,
}) {
  const m = M.useRef(null),
    [_, T] = M.useState();
  return (
    M.useEffect(() => {
      y == null || y(_);
    }, [y, _]),
    M.useEffect(() => {
      const E = m.current;
      if (!E) return;
      const k = () => {
        ic.set(e, E.scrollTop);
      };
      return (
        E.addEventListener('scroll', k, { passive: !0 }),
        () => E.removeEventListener('scroll', k)
      );
    }, [e]),
    M.useEffect(() => {
      m.current && (m.current.scrollTop = ic.get(e) || 0);
    }, [e]),
    x.jsx('div', {
      className: et('list-view vbox', e + '-list-view'),
      role: t.length > 0 ? 'list' : void 0,
      'data-testid': p || e + '-list',
      children: x.jsxs('div', {
        className: et('list-view-content', h && 'not-selectable'),
        tabIndex: 0,
        onKeyDown: (E) => {
          var I;
          if (u && E.key === 'Enter') {
            c == null || c(u, t.indexOf(u));
            return;
          }
          if (
            E.key !== 'ArrowDown' &&
            E.key !== 'ArrowUp' &&
            E.key !== 'ArrowLeft' &&
            E.key !== 'ArrowRight'
          )
            return;
          if (
            (E.stopPropagation(),
            E.preventDefault(),
            u && E.key === 'ArrowLeft')
          ) {
            d == null || d(u, t.indexOf(u));
            return;
          }
          if (u && E.key === 'ArrowRight') {
            g == null || g(u, t.indexOf(u));
            return;
          }
          const k = u ? t.indexOf(u) : -1;
          let b = k;
          E.key === 'ArrowDown' &&
            (k === -1 ? (b = 0) : (b = Math.min(k + 1, t.length - 1))),
            E.key === 'ArrowUp' &&
              (k === -1 ? (b = t.length - 1) : (b = Math.max(k - 1, 0)));
          const S = (I = m.current) == null ? void 0 : I.children.item(b);
          Jv(S || void 0),
            y == null || y(void 0),
            f == null || f(t[b], b),
            T(void 0);
        },
        ref: m,
        children: [
          w &&
            t.length === 0 &&
            x.jsx('div', { className: 'list-view-empty', children: w }),
          t.map((E, k) => {
            const b = (a == null ? void 0 : a(E, k)) || 0,
              S = r(E, k);
            return x.jsxs(
              'div',
              {
                onDoubleClick: () => (c == null ? void 0 : c(E, k)),
                role: 'listitem',
                className: et(
                  'list-view-entry',
                  u === E && 'selected',
                  !h && _ === E && 'highlighted',
                  (o == null ? void 0 : o(E, k)) && 'error',
                  (s == null ? void 0 : s(E, k)) && 'warning',
                  (l == null ? void 0 : l(E, k)) && 'info'
                ),
                onClick: () => (f == null ? void 0 : f(E, k)),
                onMouseEnter: () => T(E),
                onMouseLeave: () => T(void 0),
                children: [
                  b
                    ? new Array(b)
                        .fill(0)
                        .map(() =>
                          x.jsx('div', { className: 'list-view-indent' })
                        )
                    : void 0,
                  i &&
                    x.jsx('div', {
                      className: 'codicon ' + (i(E, k) || 'codicon-blank'),
                      style: { minWidth: 16, marginRight: 4 },
                      onDoubleClick: (I) => {
                        I.preventDefault(), I.stopPropagation();
                      },
                      onClick: (I) => {
                        I.stopPropagation(),
                          I.preventDefault(),
                          v == null || v(E, k);
                      },
                    }),
                  typeof S == 'string'
                    ? x.jsx('div', {
                        style: { textOverflow: 'ellipsis', overflow: 'hidden' },
                        children: S,
                      })
                    : S,
                ],
              },
              (n == null ? void 0 : n(E, k)) || k
            );
          }),
        ],
      }),
    })
  );
}
function Jv(e) {
  e &&
    (e != null && e.scrollIntoViewIfNeeded
      ? e.scrollIntoViewIfNeeded(!1)
      : e == null || e.scrollIntoView());
}
const Zv = ({ value: e, description: t }) => {
    const [n, r] = M.useState('copy'),
      i = M.useCallback(() => {
        (typeof e == 'function' ? e() : Promise.resolve(e)).then(
          (s) => {
            navigator.clipboard.writeText(s).then(
              () => {
                r('check'),
                  setTimeout(() => {
                    r('copy');
                  }, 3e3);
              },
              () => {
                r('close');
              }
            );
          },
          () => {
            r('close');
          }
        );
      }, [e]);
    return x.jsx(dn, { title: t || 'Copy', icon: n, onClick: i });
  },
  oc = ({ value: e, description: t }) => {
    const n = M.useCallback(async () => {
      const r = typeof e == 'function' ? await e() : e;
      await navigator.clipboard.writeText(r);
    }, [e]);
    return x.jsx(dn, {
      title: t,
      onClick: n,
      className: 'copy-to-clipboard-text-button',
      children: t,
    });
  },
  _h = ({ text: e }) =>
    x.jsx('div', {
      className: 'fill',
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        opacity: 0.5,
      },
      children: e,
    });
function xo(e) {
  const t = /(\x1b\[(\d+(;\d+)*)m)|([^\x1b]+)/g,
    n = [];
  let r,
    i = {};
  for (; (r = t.exec(e)) !== null; ) {
    const [, , o, , s] = r;
    if (o) {
      const l = +o;
      switch (l) {
        case 0:
          i = {};
          break;
        case 1:
          i['font-weight'] = 'bold';
          break;
        case 2:
          i.opacity = '0.8';
          break;
        case 3:
          i['font-style'] = 'italic';
          break;
        case 4:
          i['text-decoration'] = 'underline';
          break;
        case 8:
          i.display = 'none';
          break;
        case 9:
          i['text-decoration'] = 'line-through';
          break;
        case 22:
          i = {
            ...i,
            'font-weight': void 0,
            'font-style': void 0,
            opacity: void 0,
            'text-decoration': void 0,
          };
          break;
        case 23:
          i = {
            ...i,
            'font-weight': void 0,
            'font-style': void 0,
            opacity: void 0,
          };
          break;
        case 24:
          i = { ...i, 'text-decoration': void 0 };
          break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
          i.color = sc[l - 30];
          break;
        case 39:
          i = { ...i, color: void 0 };
          break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
          i['background-color'] = sc[l - 40];
          break;
        case 49:
          i = { ...i, 'background-color': void 0 };
          break;
        case 53:
          i['text-decoration'] = 'overline';
          break;
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
          i.color = lc[l - 90];
          break;
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
          i['background-color'] = lc[l - 100];
          break;
      }
    } else s && n.push(`<span style="${t0(i)}">${e0(s)}</span>`);
  }
  return n.join('');
}
const sc = {
    0: 'var(--vscode-terminal-ansiBlack)',
    1: 'var(--vscode-terminal-ansiRed)',
    2: 'var(--vscode-terminal-ansiGreen)',
    3: 'var(--vscode-terminal-ansiYellow)',
    4: 'var(--vscode-terminal-ansiBlue)',
    5: 'var(--vscode-terminal-ansiMagenta)',
    6: 'var(--vscode-terminal-ansiCyan)',
    7: 'var(--vscode-terminal-ansiWhite)',
  },
  lc = {
    0: 'var(--vscode-terminal-ansiBrightBlack)',
    1: 'var(--vscode-terminal-ansiBrightRed)',
    2: 'var(--vscode-terminal-ansiBrightGreen)',
    3: 'var(--vscode-terminal-ansiBrightYellow)',
    4: 'var(--vscode-terminal-ansiBrightBlue)',
    5: 'var(--vscode-terminal-ansiBrightMagenta)',
    6: 'var(--vscode-terminal-ansiBrightCyan)',
    7: 'var(--vscode-terminal-ansiBrightWhite)',
  };
function e0(e) {
  return e.replace(
    /[&"<>]/g,
    (t) => ({ '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' })[t]
  );
}
function t0(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n}`)
    .join('; ');
}
const n0 = La;
function G1(e, t) {
  const { entries: n } = M.useMemo(() => {
    if (!e) return { entries: [] };
    const i = [];
    for (const o of e.events) {
      if (o.type === 'console') {
        const s = o.args && o.args.length ? r0(o.args) : Sh(o.text),
          l = o.location.url,
          u = `${l ? l.substring(l.lastIndexOf('/') + 1) : '<anonymous>'}:${o.location.lineNumber}`;
        i.push({
          browserMessage: { body: s, location: u },
          isError: o.messageType === 'error',
          isWarning: o.messageType === 'warning',
          timestamp: o.time,
        });
      }
      o.type === 'event' &&
        o.method === 'pageError' &&
        i.push({
          browserError: o.params.error,
          isError: !0,
          isWarning: !1,
          timestamp: o.time,
        });
    }
    for (const o of e.stdio) {
      let s = '';
      o.text && (s = xo(o.text.trim()) || ''),
        o.base64 && (s = xo(atob(o.base64).trim()) || ''),
        i.push({
          nodeMessage: { html: s },
          isError: o.type === 'stderr',
          isWarning: !1,
          timestamp: o.timestamp,
        });
    }
    return i.sort((o, s) => o.timestamp - s.timestamp), { entries: i };
  }, [e]);
  return {
    entries: M.useMemo(
      () =>
        t
          ? n.filter(
              (i) => i.timestamp >= t.minimum && i.timestamp <= t.maximum
            )
          : n,
      [n, t]
    ),
  };
}
const X1 = ({
  consoleModel: e,
  boundaries: t,
  onEntryHovered: n,
  onAccepted: r,
}) =>
  e.entries.length
    ? x.jsx('div', {
        className: 'console-tab',
        children: x.jsx(n0, {
          name: 'console',
          onAccepted: r,
          onHighlighted: n,
          items: e.entries,
          isError: (i) => i.isError,
          isWarning: (i) => i.isWarning,
          render: (i) => {
            const o = Is(i.timestamp - t.minimum),
              s = x.jsx('span', { className: 'console-time', children: o }),
              l = i.isError
                ? 'status-error'
                : i.isWarning
                  ? 'status-warning'
                  : 'status-none',
              a =
                i.browserMessage || i.browserError
                  ? x.jsx('span', {
                      className: et('codicon', 'codicon-browser', l),
                      title: 'Browser message',
                    })
                  : x.jsx('span', {
                      className: et('codicon', 'codicon-file', l),
                      title: 'Runner message',
                    });
            let u, c, f, d;
            const { browserMessage: g, browserError: y, nodeMessage: v } = i;
            if ((g && ((u = g.location), (c = g.body)), y)) {
              const { error: w, value: p } = y;
              w ? ((c = w.message), (d = w.stack)) : (c = String(p));
            }
            return (
              v && (f = v.html),
              x.jsxs('div', {
                className: 'console-line',
                children: [
                  s,
                  a,
                  u &&
                    x.jsx('span', {
                      className: 'console-location',
                      children: u,
                    }),
                  c &&
                    x.jsx('span', {
                      className: 'console-line-message',
                      children: c,
                    }),
                  f &&
                    x.jsx('span', {
                      className: 'console-line-message',
                      dangerouslySetInnerHTML: { __html: f },
                    }),
                  d &&
                    x.jsx('div', { className: 'console-stack', children: d }),
                ],
              })
            );
          },
        }),
      })
    : x.jsx(_h, { text: 'No console entries' });
function r0(e) {
  if (e.length === 1) return Sh(e[0].preview);
  const t = typeof e[0].value == 'string' && e[0].value.includes('%'),
    n = t ? e[0].value : '',
    r = t ? e.slice(1) : e;
  let i = 0;
  const o = /%([%sdifoOc])/g;
  let s;
  const l = [];
  let a = [];
  l.push(x.jsx('span', { children: a }));
  let u = 0;
  for (; (s = o.exec(n)) !== null; ) {
    const c = n.substring(u, s.index);
    a.push(x.jsx('span', { children: c })), (u = s.index + 2);
    const f = s[0][1];
    if (f === '%') a.push(x.jsx('span', { children: '%' }));
    else if (
      f === 's' ||
      f === 'o' ||
      f === 'O' ||
      f === 'd' ||
      f === 'i' ||
      f === 'f'
    ) {
      const d = r[i++],
        g = {};
      typeof (d == null ? void 0 : d.value) != 'string' &&
        (g.color = 'var(--vscode-debugTokenExpression-number)'),
        a.push(
          x.jsx('span', {
            style: g,
            children: (d == null ? void 0 : d.preview) || '',
          })
        );
    } else if (f === 'c') {
      a = [];
      const d = r[i++],
        g = d ? i0(d.preview) : {};
      l.push(x.jsx('span', { style: g, children: a }));
    }
  }
  for (
    u < n.length && a.push(x.jsx('span', { children: n.substring(u) }));
    i < r.length;
    i++
  ) {
    const c = r[i],
      f = {};
    a.length && a.push(x.jsx('span', { children: ' ' })),
      typeof (c == null ? void 0 : c.value) != 'string' &&
        (f.color = 'var(--vscode-debugTokenExpression-number)'),
      a.push(
        x.jsx('span', {
          style: f,
          children: (c == null ? void 0 : c.preview) || '',
        })
      );
  }
  return l;
}
function Sh(e) {
  return [x.jsx('span', { dangerouslySetInnerHTML: { __html: xo(e.trim()) } })];
}
function i0(e) {
  try {
    const t = {},
      n = e.split(';');
    for (const r of n) {
      const i = r.trim();
      if (!i) continue;
      let [o, s] = i.split(':');
      if (((o = o.trim()), (s = s.trim()), !o0(o))) continue;
      const l = o.replace(/-([a-z])/g, (a) => a[1].toUpperCase());
      t[l] = s;
    }
    return t;
  } catch {
    return {};
  }
}
function o0(e) {
  return [
    'background',
    'border',
    'color',
    'font',
    'line',
    'margin',
    'padding',
    'text',
  ].some((n) => e.startsWith(n));
}
const Ia = ({
    noShadow: e,
    children: t,
    noMinHeight: n,
    className: r,
    sidebarBackground: i,
    onClick: o,
  }) =>
    x.jsx('div', {
      className: et(
        'toolbar',
        e && 'no-shadow',
        n && 'no-min-height',
        r,
        i && 'toolbar-sidebar-background'
      ),
      onClick: o,
      children: t,
    }),
  s0 = ({
    tabs: e,
    selectedTab: t,
    setSelectedTab: n,
    leftToolbar: r,
    rightToolbar: i,
    dataTestId: o,
    mode: s,
  }) => (
    t || (t = e[0].id),
    s || (s = 'default'),
    x.jsx('div', {
      className: 'tabbed-pane',
      'data-testid': o,
      children: x.jsxs('div', {
        className: 'vbox',
        children: [
          x.jsxs(Ia, {
            children: [
              r &&
                x.jsxs('div', {
                  style: {
                    flex: 'none',
                    display: 'flex',
                    margin: '0 4px',
                    alignItems: 'center',
                  },
                  children: [...r],
                }),
              s === 'default' &&
                x.jsx('div', {
                  style: {
                    flex: 'auto',
                    display: 'flex',
                    height: '100%',
                    overflow: 'hidden',
                  },
                  children: [
                    ...e.map((l) =>
                      x.jsx(
                        Eh,
                        {
                          id: l.id,
                          title: l.title,
                          count: l.count,
                          errorCount: l.errorCount,
                          selected: t === l.id,
                          onSelect: n,
                        },
                        l.id
                      )
                    ),
                  ],
                }),
              s === 'select' &&
                x.jsx('div', {
                  style: {
                    flex: 'auto',
                    display: 'flex',
                    height: '100%',
                    overflow: 'hidden',
                  },
                  children: x.jsx('select', {
                    style: {
                      width: '100%',
                      background: 'none',
                      cursor: 'pointer',
                    },
                    onChange: (l) => {
                      n == null || n(e[l.currentTarget.selectedIndex].id);
                    },
                    children: e.map((l) => {
                      let a = '';
                      return (
                        l.count && (a = ` (${l.count})`),
                        l.errorCount && (a = ` (${l.errorCount})`),
                        x.jsxs(
                          'option',
                          {
                            value: l.id,
                            selected: l.id === t,
                            children: [l.title, a],
                          },
                          l.id
                        )
                      );
                    }),
                  }),
                }),
              i &&
                x.jsxs('div', {
                  style: {
                    flex: 'none',
                    display: 'flex',
                    alignItems: 'center',
                  },
                  children: [...i],
                }),
            ],
          }),
          e.map((l) => {
            const a = 'tab-content tab-' + l.id;
            if (l.component)
              return x.jsx(
                'div',
                {
                  className: a,
                  style: { display: t === l.id ? 'inherit' : 'none' },
                  children: l.component,
                },
                l.id
              );
            if (t === l.id)
              return x.jsx('div', { className: a, children: l.render() }, l.id);
          }),
        ],
      }),
    })
  ),
  Eh = ({
    id: e,
    title: t,
    count: n,
    errorCount: r,
    selected: i,
    onSelect: o,
  }) =>
    x.jsxs(
      'div',
      {
        className: et('tabbed-pane-tab', i && 'selected'),
        onClick: () => (o == null ? void 0 : o(e)),
        title: t,
        children: [
          x.jsx('div', { className: 'tabbed-pane-tab-label', children: t }),
          !!n &&
            x.jsx('div', { className: 'tabbed-pane-tab-counter', children: n }),
          !!r &&
            x.jsx('div', {
              className: 'tabbed-pane-tab-counter error',
              children: r,
            }),
        ],
      },
      e
    ),
  l0 = 'modulepreload',
  a0 = function (e, t) {
    return new URL(e, t).href;
  },
  ac = {},
  u0 = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName('link'),
        l = document.querySelector('meta[property=csp-nonce]'),
        a =
          (l == null ? void 0 : l.nonce) ||
          (l == null ? void 0 : l.getAttribute('nonce'));
      i = Promise.allSettled(
        n.map((u) => {
          if (((u = a0(u, r)), u in ac)) return;
          ac[u] = !0;
          const c = u.endsWith('.css'),
            f = c ? '[rel="stylesheet"]' : '';
          if (!!r)
            for (let y = s.length - 1; y >= 0; y--) {
              const v = s[y];
              if (v.href === u && (!c || v.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${u}"]${f}`)) return;
          const g = document.createElement('link');
          if (
            ((g.rel = c ? 'stylesheet' : l0),
            c || (g.as = 'script'),
            (g.crossOrigin = ''),
            (g.href = u),
            a && g.setAttribute('nonce', a),
            document.head.appendChild(g),
            c)
          )
            return new Promise((y, v) => {
              g.addEventListener('load', y),
                g.addEventListener('error', () =>
                  v(new Error(`Unable to preload CSS for ${u}`))
                );
            });
        })
      );
    }
    function o(s) {
      const l = new Event('vite:preloadError', { cancelable: !0 });
      if (((l.payload = s), window.dispatchEvent(l), !l.defaultPrevented))
        throw s;
    }
    return i.then((s) => {
      for (const l of s || []) l.status === 'rejected' && o(l.reason);
      return t().catch(o);
    });
  },
  Y1 = 20,
  Vo = ({
    text: e,
    language: t,
    mimeType: n,
    linkify: r,
    readOnly: i,
    highlight: o,
    revealLine: s,
    lineNumbers: l,
    isFocused: a,
    focusOnChange: u,
    wrapLines: c,
    onChange: f,
  }) => {
    const [d, g] = To(),
      [y] = M.useState(
        u0(
          () => import('./codeMirrorModule-CljfAbcd.js'),
          __vite__mapDeps([0, 1]),
          import.meta.url
        ).then((h) => h.default)
      ),
      v = M.useRef(null),
      [w, p] = M.useState();
    return (
      M.useEffect(() => {
        (async () => {
          var E, k;
          const h = await y;
          d0(h);
          const m = g.current;
          if (!m) return;
          const _ = h0(t) || f0(n) || (r ? 'text/linkified' : '');
          if (
            v.current &&
            _ === v.current.cm.getOption('mode') &&
            !!i === v.current.cm.getOption('readOnly') &&
            l === v.current.cm.getOption('lineNumbers') &&
            c === v.current.cm.getOption('lineWrapping')
          )
            return;
          (k = (E = v.current) == null ? void 0 : E.cm) == null ||
            k.getWrapperElement().remove();
          const T = h(m, {
            value: '',
            mode: _,
            readOnly: !!i,
            lineNumbers: l,
            lineWrapping: c,
          });
          return (v.current = { cm: T }), a && T.focus(), p(T), T;
        })();
      }, [y, w, g, t, n, r, l, c, i, a]),
      M.useEffect(() => {
        v.current && v.current.cm.setSize(d.width, d.height);
      }, [d]),
      M.useLayoutEffect(() => {
        var _;
        if (!w) return;
        let h = !1;
        if (
          (w.getValue() !== e &&
            (w.setValue(e),
            (h = !0),
            u && (w.execCommand('selectAll'), w.focus())),
          h || JSON.stringify(o) !== JSON.stringify(v.current.highlight))
        ) {
          for (const E of v.current.highlight || [])
            w.removeLineClass(E.line - 1, 'wrap');
          for (const E of o || [])
            w.addLineClass(E.line - 1, 'wrap', `source-line-${E.type}`);
          for (const E of v.current.widgets || []) w.removeLineWidget(E);
          const T = [];
          for (const E of o || []) {
            if (E.type !== 'error') continue;
            const k =
              (_ = v.current) == null ? void 0 : _.cm.getLine(E.line - 1);
            if (k) {
              const S = document.createElement('div');
              (S.className = 'source-line-error-underline'),
                (S.innerHTML = '&nbsp;'.repeat(k.length || 1)),
                T.push(
                  w.addLineWidget(E.line, S, { above: !0, coverGutter: !1 })
                );
            }
            const b = document.createElement('div');
            (b.innerHTML = xo(E.message || '')),
              (b.className = 'source-line-error-widget'),
              T.push(
                w.addLineWidget(E.line, b, { above: !0, coverGutter: !1 })
              );
          }
          (v.current.highlight = o), (v.current.widgets = T);
        }
        typeof s == 'number' &&
          v.current.cm.lineCount() >= s &&
          w.scrollIntoView({ line: Math.max(0, s - 1), ch: 0 }, 50);
        let m;
        return (
          f && ((m = () => f(w.getValue())), w.on('change', m)),
          () => {
            m && w.off('change', m);
          }
        );
      }, [w, e, o, s, u, f]),
      x.jsx('div', { className: 'cm-wrapper', ref: g, onClick: c0 })
    );
  };
function c0(e) {
  var n;
  if (!(e.target instanceof HTMLElement)) return;
  let t;
  e.target.classList.contains('cm-linkified')
    ? (t = e.target.textContent)
    : e.target.classList.contains('cm-link') &&
      (n = e.target.nextElementSibling) != null &&
      n.classList.contains('cm-url') &&
      (t = e.target.nextElementSibling.textContent.slice(1, -1)),
    t && (e.preventDefault(), e.stopPropagation(), window.open(t, '_blank'));
}
let uc = !1;
function d0(e) {
  uc ||
    ((uc = !0),
    e.defineSimpleMode('text/linkified', {
      start: [{ regex: eg, token: 'linkified' }],
    }));
}
function f0(e) {
  if (e) {
    if (e.includes('javascript') || e.includes('json')) return 'javascript';
    if (e.includes('python')) return 'python';
    if (e.includes('csharp')) return 'text/x-csharp';
    if (e.includes('java')) return 'text/x-java';
    if (e.includes('markdown')) return 'markdown';
    if (e.includes('html') || e.includes('svg')) return 'htmlmixed';
    if (e.includes('css')) return 'css';
  }
}
function h0(e) {
  if (e)
    return {
      javascript: 'javascript',
      jsonl: 'javascript',
      python: 'python',
      csharp: 'text/x-csharp',
      java: 'text/x-java',
      markdown: 'markdown',
      html: 'htmlmixed',
      css: 'css',
    }[e];
}
async function p0(e) {
  const t = navigator.platform.includes('Win') ? 'win' : 'unix';
  let n = [];
  const r = new Set([
    'accept-encoding',
    'host',
    'method',
    'path',
    'scheme',
    'version',
    'authority',
    'protocol',
  ]);
  function i(f) {
    const d = '^"';
    return (
      d +
      f
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/[^a-zA-Z0-9\s_\-:=+~'\/.',?;()*`]/g, '^$&')
        .replace(/%(?=[a-zA-Z0-9_])/g, '%^')
        .replace(
          /\r?\n/g,
          `^

`
        ) +
      d
    );
  }
  function o(f) {
    function d(g) {
      let v = g.charCodeAt(0).toString(16);
      for (; v.length < 4; ) v = '0' + v;
      return '\\u' + v;
    }
    return /[\0-\x1F\x7F-\x9F!]|\'/.test(f)
      ? "$'" +
          f
            .replace(/\\/g, '\\\\')
            .replace(/\'/g, "\\'")
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/[\0-\x1F\x7F-\x9F!]/g, d) +
          "'"
      : "'" + f + "'";
  }
  const s = t === 'win' ? i : o;
  n.push(s(e.request.url).replace(/[[{}\]]/g, '\\$&'));
  let l = 'GET';
  const a = [],
    u = await Th(e);
  u && (a.push('--data-raw ' + s(u)), r.add('content-length'), (l = 'POST')),
    e.request.method !== l && n.push('-X ' + s(e.request.method));
  const c = e.request.headers;
  for (let f = 0; f < c.length; f++) {
    const d = c[f],
      g = d.name.replace(/^:/, '');
    r.has(g.toLowerCase()) ||
      (d.value.trim()
        ? n.push('-H ' + s(g + ': ' + d.value))
        : n.push('-H ' + s(g + ';')));
  }
  return (
    (n = n.concat(a)),
    'curl ' +
      n.join(
        n.length >= 3
          ? t === 'win'
            ? ` ^
  `
            : ` \\
  `
          : ' '
      )
  );
}
async function g0(e, t = 0) {
  const n = new Set([
      'method',
      'path',
      'scheme',
      'version',
      'accept-charset',
      'accept-encoding',
      'access-control-request-headers',
      'access-control-request-method',
      'connection',
      'content-length',
      'cookie',
      'cookie2',
      'date',
      'dnt',
      'expect',
      'host',
      'keep-alive',
      'origin',
      'referer',
      'te',
      'trailer',
      'transfer-encoding',
      'upgrade',
      'via',
      'user-agent',
    ]),
    r = new Set(['cookie', 'authorization']),
    i = JSON.stringify(e.request.url),
    o = e.request.headers,
    s = o.reduce((y, v) => {
      const w = v.name;
      return (
        !n.has(w.toLowerCase()) && !w.includes(':') && y.append(w, v.value), y
      );
    }, new Headers()),
    l = {};
  for (const y of s) l[y[0]] = y[1];
  const a =
      e.request.cookies.length ||
      o.some(({ name: y }) => r.has(y.toLowerCase()))
        ? 'include'
        : 'omit',
    u = o.find(({ name: y }) => y.toLowerCase() === 'referer'),
    c = u ? u.value : void 0,
    f = await Th(e),
    d = {
      headers: Object.keys(l).length ? l : void 0,
      referrer: c,
      body: f,
      method: e.request.method,
      mode: 'cors',
    };
  if (t === 1) {
    const y = o.find((w) => w.name.toLowerCase() === 'cookie'),
      v = {};
    delete d.mode,
      y && (v.cookie = y.value),
      c && (delete d.referrer, (v.Referer = c)),
      Object.keys(v).length && (d.headers = { ...l, ...v });
  } else d.credentials = a;
  const g = JSON.stringify(d, null, 2);
  return `fetch(${i}, ${g});`;
}
async function Th(e) {
  var t, n;
  return (t = e.request.postData) != null && t._sha1
    ? await fetch(`sha1/${e.request.postData._sha1}`).then((r) => r.text())
    : (n = e.request.postData) == null
      ? void 0
      : n.text;
}
const m0 = ({ resource: e, onClose: t }) => {
    const [n, r] = M.useState('request');
    return x.jsx(s0, {
      dataTestId: 'network-request-details',
      leftToolbar: [
        x.jsx(dn, { icon: 'close', title: 'Close', onClick: t }, 'close'),
      ],
      tabs: [
        {
          id: 'request',
          title: 'Request',
          render: () => x.jsx(v0, { resource: e }),
        },
        {
          id: 'response',
          title: 'Response',
          render: () => x.jsx(y0, { resource: e }),
        },
        { id: 'body', title: 'Body', render: () => x.jsx(w0, { resource: e }) },
      ],
      selectedTab: n,
      setSelectedTab: r,
    });
  },
  v0 = ({ resource: e }) => {
    const [t, n] = M.useState(null);
    return (
      M.useEffect(() => {
        (async () => {
          if (e.request.postData) {
            const i = e.request.headers.find(
                (s) => s.name.toLowerCase() === 'content-type'
              ),
              o = i ? i.value : '';
            if (e.request.postData._sha1) {
              const s = await fetch(`sha1/${e.request.postData._sha1}`);
              n({ text: bl(await s.text(), o), mimeType: o });
            } else n({ text: bl(e.request.postData.text, o), mimeType: o });
          } else n(null);
        })();
      }, [e]),
      x.jsxs('div', {
        className: 'network-request-details-tab',
        children: [
          x.jsx('div', {
            className: 'network-request-details-header',
            children: 'General',
          }),
          x.jsx('div', {
            className: 'network-request-details-url',
            children: `URL: ${e.request.url}`,
          }),
          x.jsx('div', {
            className: 'network-request-details-general',
            children: `Method: ${e.request.method}`,
          }),
          e.response.status !== -1 &&
            x.jsxs('div', {
              className: 'network-request-details-general',
              style: { display: 'flex' },
              children: [
                'Status Code: ',
                x.jsx('span', {
                  className: _0(e.response.status),
                  style: { display: 'inline-flex' },
                  children: `${e.response.status} ${e.response.statusText}`,
                }),
              ],
            }),
          e.request.queryString.length
            ? x.jsxs(x.Fragment, {
                children: [
                  x.jsx('div', {
                    className: 'network-request-details-header',
                    children: 'Query String Parameters',
                  }),
                  x.jsx('div', {
                    className: 'network-request-details-headers',
                    children: e.request.queryString.map(
                      (r) => `${r.name}: ${r.value}`
                    ).join(`
`),
                  }),
                ],
              })
            : null,
          x.jsx('div', {
            className: 'network-request-details-header',
            children: 'Request Headers',
          }),
          x.jsx('div', {
            className: 'network-request-details-headers',
            children: e.request.headers.map((r) => `${r.name}: ${r.value}`)
              .join(`
`),
          }),
          x.jsxs('div', {
            className: 'network-request-details-copy',
            children: [
              x.jsx(oc, { description: 'Copy as cURL', value: () => p0(e) }),
              x.jsx(oc, { description: 'Copy as Fetch', value: () => g0(e) }),
            ],
          }),
          t &&
            x.jsx('div', {
              className: 'network-request-details-header',
              children: 'Request Body',
            }),
          t &&
            x.jsx(Vo, {
              text: t.text,
              mimeType: t.mimeType,
              readOnly: !0,
              lineNumbers: !0,
            }),
        ],
      })
    );
  },
  y0 = ({ resource: e }) =>
    x.jsxs('div', {
      className: 'network-request-details-tab',
      children: [
        x.jsx('div', {
          className: 'network-request-details-header',
          children: 'Response Headers',
        }),
        x.jsx('div', {
          className: 'network-request-details-headers',
          children: e.response.headers.map((t) => `${t.name}: ${t.value}`)
            .join(`
`),
        }),
      ],
    }),
  w0 = ({ resource: e }) => {
    const [t, n] = M.useState(null);
    return (
      M.useEffect(() => {
        (async () => {
          if (e.response.content._sha1) {
            const i = e.response.content.mimeType.includes('image'),
              o = e.response.content.mimeType.includes('font'),
              s = await fetch(`sha1/${e.response.content._sha1}`);
            if (i) {
              const l = await s.blob(),
                a = new FileReader(),
                u = new Promise((c) => (a.onload = c));
              a.readAsDataURL(l), n({ dataUrl: (await u).target.result });
            } else if (o) {
              const l = await s.arrayBuffer();
              n({ font: l });
            } else {
              const l = bl(await s.text(), e.response.content.mimeType);
              n({ text: l, mimeType: e.response.content.mimeType });
            }
          } else n(null);
        })();
      }, [e]),
      x.jsxs('div', {
        className: 'network-request-details-tab',
        children: [
          !e.response.content._sha1 &&
            x.jsx('div', {
              children: 'Response body is not available for this request.',
            }),
          t && t.font && x.jsx(x0, { font: t.font }),
          t &&
            t.dataUrl &&
            x.jsx('img', { draggable: 'false', src: t.dataUrl }),
          t &&
            t.text &&
            x.jsx(Vo, {
              text: t.text,
              mimeType: t.mimeType,
              readOnly: !0,
              lineNumbers: !0,
            }),
        ],
      })
    );
  },
  x0 = ({ font: e }) => {
    const [t, n] = M.useState(!1);
    return (
      M.useEffect(() => {
        let r;
        try {
          (r = new FontFace('font-preview', e)),
            r.status === 'loaded' && document.fonts.add(r),
            r.status === 'error' && n(!0);
        } catch {
          n(!0);
        }
        return () => {
          document.fonts.delete(r);
        };
      }, [e]),
      t
        ? x.jsx('div', {
            className: 'network-font-preview-error',
            children: 'Could not load font preview',
          })
        : x.jsxs('div', {
            className: 'network-font-preview',
            children: [
              'ABCDEFGHIJKLM',
              x.jsx('br', {}),
              'NOPQRSTUVWXYZ',
              x.jsx('br', {}),
              'abcdefghijklm',
              x.jsx('br', {}),
              'nopqrstuvwxyz',
              x.jsx('br', {}),
              '1234567890',
            ],
          })
    );
  };
function _0(e) {
  return e < 300 || e === 304
    ? 'green-circle'
    : e < 400
      ? 'yellow-circle'
      : 'red-circle';
}
function bl(e, t) {
  if (e === null) return 'Loading...';
  const n = e;
  if (n === '') return '<Empty>';
  if (t.includes('application/json'))
    try {
      return JSON.stringify(JSON.parse(n), null, 2);
    } catch {
      return n;
    }
  return t.includes('application/x-www-form-urlencoded')
    ? decodeURIComponent(n)
    : n;
}
const S0 = ({
    cursor: e,
    onPaneMouseMove: t,
    onPaneMouseUp: n,
    onPaneDoubleClick: r,
  }) => (
    Ze.useEffect(() => {
      const i = document.createElement('div');
      return (
        (i.style.position = 'fixed'),
        (i.style.top = '0'),
        (i.style.right = '0'),
        (i.style.bottom = '0'),
        (i.style.left = '0'),
        (i.style.zIndex = '9999'),
        (i.style.cursor = e),
        document.body.appendChild(i),
        t && i.addEventListener('mousemove', t),
        n && i.addEventListener('mouseup', n),
        r && document.body.addEventListener('dblclick', r),
        () => {
          t && i.removeEventListener('mousemove', t),
            n && i.removeEventListener('mouseup', n),
            r && document.body.removeEventListener('dblclick', r),
            document.body.removeChild(i);
        }
      );
    }, [e, t, n, r]),
    x.jsx(x.Fragment, {})
  ),
  E0 = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
  T0 = ({
    orientation: e,
    offsets: t,
    setOffsets: n,
    resizerColor: r,
    resizerWidth: i,
    minColumnWidth: o,
  }) => {
    const s = o || 0,
      [l, a] = Ze.useState(null),
      [u, c] = To(),
      f = {
        position: 'absolute',
        right: e === 'horizontal' ? void 0 : 0,
        bottom: e === 'horizontal' ? 0 : void 0,
        width: e === 'horizontal' ? 7 : void 0,
        height: e === 'horizontal' ? void 0 : 7,
        borderTopWidth: e === 'horizontal' ? void 0 : (7 - i) / 2,
        borderRightWidth: e === 'horizontal' ? (7 - i) / 2 : void 0,
        borderBottomWidth: e === 'horizontal' ? void 0 : (7 - i) / 2,
        borderLeftWidth: e === 'horizontal' ? (7 - i) / 2 : void 0,
        borderColor: 'transparent',
        borderStyle: 'solid',
        cursor: e === 'horizontal' ? 'ew-resize' : 'ns-resize',
      };
    return x.jsxs('div', {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: -(7 - i) / 2,
        zIndex: 100,
        pointerEvents: 'none',
      },
      ref: c,
      children: [
        !!l &&
          x.jsx(S0, {
            cursor: e === 'horizontal' ? 'ew-resize' : 'ns-resize',
            onPaneMouseUp: () => a(null),
            onPaneMouseMove: (d) => {
              if (!d.buttons) a(null);
              else if (l) {
                const g =
                    e === 'horizontal'
                      ? d.clientX - l.clientX
                      : d.clientY - l.clientY,
                  y = l.offset + g,
                  v = l.index > 0 ? t[l.index - 1] : 0,
                  w = e === 'horizontal' ? u.width : u.height,
                  p = Math.min(Math.max(v + s, y), w - s) - t[l.index];
                for (let h = l.index; h < t.length; ++h) t[h] = t[h] + p;
                n([...t]);
              }
            },
          }),
        t.map((d, g) =>
          x.jsx(
            'div',
            {
              style: {
                ...f,
                top: e === 'horizontal' ? 0 : d,
                left: e === 'horizontal' ? d : 0,
                pointerEvents: 'initial',
              },
              onMouseDown: (y) =>
                a({
                  clientX: y.clientX,
                  clientY: y.clientY,
                  offset: d,
                  index: g,
                }),
              children: x.jsx('div', { style: { ...E0, background: r } }),
            },
            g
          )
        ),
      ],
    });
  };
function k0(e) {
  const [t, n] = M.useState([]);
  M.useEffect(() => {
    const o = [];
    for (let s = 0; s < e.columns.length - 1; ++s) {
      const l = e.columns[s];
      o[s] = (o[s - 1] || 0) + e.columnWidths.get(l);
    }
    n(o);
  }, [e.columns, e.columnWidths]);
  function r(o) {
    const s = new Map(e.columnWidths.entries());
    for (let l = 0; l < o.length; ++l) {
      const a = o[l] - (o[l - 1] || 0),
        u = e.columns[l];
      s.set(u, a);
    }
    e.setColumnWidths(s);
  }
  const i = M.useCallback(
    (o) => {
      var s, l;
      (l = e.setSorting) == null ||
        l.call(e, {
          by: o,
          negate:
            ((s = e.sorting) == null ? void 0 : s.by) === o
              ? !e.sorting.negate
              : !1,
        });
    },
    [e]
  );
  return x.jsxs('div', {
    className: `grid-view ${e.name}-grid-view`,
    children: [
      x.jsx(T0, {
        orientation: 'horizontal',
        offsets: t,
        setOffsets: r,
        resizerColor: 'var(--vscode-panel-border)',
        resizerWidth: 1,
        minColumnWidth: 25,
      }),
      x.jsxs('div', {
        className: 'vbox',
        children: [
          x.jsx('div', {
            className: 'grid-view-header',
            children: e.columns.map((o, s) =>
              x.jsxs(
                'div',
                {
                  className: 'grid-view-header-cell ' + C0(o, e.sorting),
                  style: {
                    width:
                      s < e.columns.length - 1 ? e.columnWidths.get(o) : void 0,
                  },
                  onClick: () => e.setSorting && i(o),
                  children: [
                    x.jsx('span', {
                      className: 'grid-view-header-cell-title',
                      children: e.columnTitle(o),
                    }),
                    x.jsx('span', { className: 'codicon codicon-triangle-up' }),
                    x.jsx('span', {
                      className: 'codicon codicon-triangle-down',
                    }),
                  ],
                },
                e.columnTitle(o)
              )
            ),
          }),
          x.jsx(La, {
            name: e.name,
            items: e.items,
            id: e.id,
            render: (o, s) =>
              x.jsx(x.Fragment, {
                children: e.columns.map((l, a) => {
                  const { body: u, title: c } = e.render(o, l, s);
                  return x.jsx(
                    'div',
                    {
                      className: `grid-view-cell grid-view-column-${String(l)}`,
                      title: c,
                      style: {
                        width:
                          a < e.columns.length - 1
                            ? e.columnWidths.get(l)
                            : void 0,
                      },
                      children: u,
                    },
                    e.columnTitle(l)
                  );
                }),
              }),
            icon: e.icon,
            indent: e.indent,
            isError: e.isError,
            isWarning: e.isWarning,
            isInfo: e.isInfo,
            selectedItem: e.selectedItem,
            onAccepted: e.onAccepted,
            onSelected: e.onSelected,
            onLeftArrow: e.onLeftArrow,
            onRightArrow: e.onRightArrow,
            onHighlighted: e.onHighlighted,
            onIconClicked: e.onIconClicked,
            noItemsMessage: e.noItemsMessage,
            dataTestId: e.dataTestId,
            notSelectable: e.notSelectable,
          }),
        ],
      }),
    ],
  });
}
function C0(e, t) {
  return e === (t == null ? void 0 : t.by)
    ? ' filter-' + (t.negate ? 'negative' : 'positive')
    : '';
}
const N0 = ['All', 'Fetch', 'HTML', 'JS', 'CSS', 'Font', 'Image'],
  b0 = { searchValue: '', resourceType: 'All' },
  A0 = ({ filterState: e, onFilterStateChange: t }) =>
    x.jsxs('div', {
      className: 'network-filters',
      children: [
        x.jsx('input', {
          type: 'search',
          placeholder: 'Filter network',
          spellCheck: !1,
          value: e.searchValue,
          onChange: (n) => t({ ...e, searchValue: n.target.value }),
        }),
        x.jsx('div', {
          className: 'network-filters-resource-types',
          children: N0.map((n) =>
            x.jsx(
              'div',
              {
                title: n,
                onClick: () => t({ ...e, resourceType: n }),
                className: `network-filters-resource-type ${e.resourceType === n ? 'selected' : ''}`,
                children: n,
              },
              n
            )
          ),
        }),
      ],
    }),
  L0 = k0;
function J1(e, t) {
  const n = M.useMemo(
      () =>
        ((e == null ? void 0 : e.resources) || []).filter((s) =>
          t
            ? !!s._monotonicTime &&
              s._monotonicTime >= t.minimum &&
              s._monotonicTime <= t.maximum
            : !0
        ),
      [e, t]
    ),
    r = M.useMemo(() => new $0(e), [e]);
  return { resources: n, contextIdMap: r };
}
const Z1 = ({ boundaries: e, networkModel: t, onEntryHovered: n }) => {
    const [r, i] = M.useState(void 0),
      [o, s] = M.useState(void 0),
      [l, a] = M.useState(b0),
      { renderedEntries: u } = M.useMemo(() => {
        const y = t.resources
          .map((v) => O0(v, e, t.contextIdMap))
          .filter(H0(l));
        return r && D0(y, r), { renderedEntries: y };
      }, [t.resources, t.contextIdMap, l, r, e]),
      [c, f] = M.useState(() => new Map(kh().map((y) => [y, M0(y)]))),
      d = M.useCallback((y) => {
        a(y), s(void 0);
      }, []);
    if (!t.resources.length) return x.jsx(_h, { text: 'No network calls' });
    const g = x.jsx(L0, {
      name: 'network',
      items: u,
      selectedItem: o,
      onSelected: (y) => s(y),
      onHighlighted: (y) =>
        n == null ? void 0 : n(y == null ? void 0 : y.resource),
      columns: P0(!!o, u),
      columnTitle: I0,
      columnWidths: c,
      setColumnWidths: f,
      isError: (y) => y.status.code >= 400 || y.status.code === -1,
      isInfo: (y) => !!y.route,
      render: (y, v) => R0(y, v),
      sorting: r,
      setSorting: i,
    });
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(A0, { filterState: l, onFilterStateChange: d }),
        !o && g,
        o &&
          x.jsx(Gf, {
            sidebarSize: c.get('name'),
            sidebarIsFirst: !0,
            orientation: 'horizontal',
            settingName: 'networkResourceDetails',
            main: x.jsx(m0, { resource: o.resource, onClose: () => s(void 0) }),
            sidebar: g,
          }),
      ],
    });
  },
  I0 = (e) =>
    e === 'contextId'
      ? 'Source'
      : e === 'name'
        ? 'Name'
        : e === 'method'
          ? 'Method'
          : e === 'status'
            ? 'Status'
            : e === 'contentType'
              ? 'Content Type'
              : e === 'duration'
                ? 'Duration'
                : e === 'size'
                  ? 'Size'
                  : e === 'start'
                    ? 'Start'
                    : e === 'route'
                      ? 'Route'
                      : '',
  M0 = (e) =>
    e === 'name'
      ? 200
      : e === 'method' || e === 'status'
        ? 60
        : e === 'contentType'
          ? 200
          : e === 'contextId'
            ? 60
            : 100;
function P0(e, t) {
  if (e) {
    const r = ['name'];
    return cc(t) && r.unshift('contextId'), r;
  }
  let n = kh();
  return cc(t) || (n = n.filter((r) => r !== 'contextId')), n;
}
function kh() {
  return [
    'contextId',
    'name',
    'method',
    'status',
    'contentType',
    'duration',
    'size',
    'start',
    'route',
  ];
}
const R0 = (e, t) =>
  t === 'contextId'
    ? { body: e.contextId, title: e.name.url }
    : t === 'name'
      ? { body: e.name.name, title: e.name.url }
      : t === 'method'
        ? { body: e.method }
        : t === 'status'
          ? {
              body: e.status.code > 0 ? e.status.code : '',
              title: e.status.text,
            }
          : t === 'contentType'
            ? { body: e.contentType }
            : t === 'duration'
              ? { body: Is(e.duration) }
              : t === 'size'
                ? { body: Yp(e.size) }
                : t === 'start'
                  ? { body: Is(e.start) }
                  : t === 'route'
                    ? { body: e.route }
                    : { body: '' };
class $0 {
  constructor(t) {
    H(this, '_pagerefToShortId', new Map());
    H(this, '_contextToId', new Map());
    H(this, '_lastPageId', 0);
    H(this, '_lastApiRequestContextId', 0);
  }
  contextId(t) {
    return t.pageref
      ? this._pageId(t.pageref)
      : t._apiRequest
        ? this._apiRequestContextId(t)
        : '';
  }
  _pageId(t) {
    let n = this._pagerefToShortId.get(t);
    return (
      n ||
        (++this._lastPageId,
        (n = 'page#' + this._lastPageId),
        this._pagerefToShortId.set(t, n)),
      n
    );
  }
  _apiRequestContextId(t) {
    const n = yo(t);
    if (!n) return '';
    let r = this._contextToId.get(n);
    return (
      r ||
        (++this._lastApiRequestContextId,
        (r = 'api#' + this._lastApiRequestContextId),
        this._contextToId.set(n, r)),
      r
    );
  }
}
function cc(e) {
  const t = new Set();
  for (const n of e) if ((t.add(n.contextId), t.size > 1)) return !0;
  return !1;
}
const O0 = (e, t, n) => {
  const r = j0(e);
  let i;
  try {
    const l = new URL(e.request.url);
    (i = l.pathname.substring(l.pathname.lastIndexOf('/') + 1)),
      i || (i = l.host);
  } catch {
    i = e.request.url;
  }
  let o = e.response.content.mimeType;
  const s = o.match(/^(.*);\s*charset=.*$/);
  return (
    s && (o = s[1]),
    {
      name: { name: i, url: e.request.url },
      method: e.request.method,
      status: { code: e.response.status, text: e.response.statusText },
      contentType: o,
      duration: e.time,
      size:
        e.response._transferSize > 0
          ? e.response._transferSize
          : e.response.bodySize,
      start: e._monotonicTime - t.minimum,
      route: r,
      resource: e,
      contextId: n.contextId(e),
    }
  );
};
function j0(e) {
  return e._wasAborted
    ? 'aborted'
    : e._wasContinued
      ? 'continued'
      : e._wasFulfilled
        ? 'fulfilled'
        : e._apiRequest
          ? 'api'
          : '';
}
function D0(e, t) {
  const n = z0(t == null ? void 0 : t.by);
  n && e.sort(n), t.negate && e.reverse();
}
function z0(e) {
  if (e === 'start') return (t, n) => t.start - n.start;
  if (e === 'duration') return (t, n) => t.duration - n.duration;
  if (e === 'status') return (t, n) => t.status.code - n.status.code;
  if (e === 'method')
    return (t, n) => {
      const r = t.method,
        i = n.method;
      return r.localeCompare(i);
    };
  if (e === 'size') return (t, n) => t.size - n.size;
  if (e === 'contentType')
    return (t, n) => t.contentType.localeCompare(n.contentType);
  if (e === 'name') return (t, n) => t.name.name.localeCompare(n.name.name);
  if (e === 'route') return (t, n) => t.route.localeCompare(n.route);
  if (e === 'contextId')
    return (t, n) => t.contextId.localeCompare(n.contextId);
}
const F0 = {
  All: () => !0,
  Fetch: (e) => e === 'application/json',
  HTML: (e) => e === 'text/html',
  CSS: (e) => e === 'text/css',
  JS: (e) => e.includes('javascript'),
  Font: (e) => e.includes('font'),
  Image: (e) => e.includes('image'),
};
function H0({ searchValue: e, resourceType: t }) {
  return (n) => {
    const r = F0[t];
    return (
      r(n.contentType) && n.name.url.toLowerCase().includes(e.toLowerCase())
    );
  };
}
const dc = {
  queryAll(e, t) {
    t.startsWith('/') && e.nodeType !== Node.DOCUMENT_NODE && (t = '.' + t);
    const n = [],
      r = e.ownerDocument || e;
    if (!r) return n;
    const i = r.evaluate(t, e, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    for (let o = i.iterateNext(); o; o = i.iterateNext())
      o.nodeType === Node.ELEMENT_NODE && n.push(o);
    return n;
  },
};
let Ch = '';
function U0(e) {
  Ch = e;
}
function Bo(e, t) {
  for (; t; ) {
    if (e.contains(t)) return !0;
    t = bh(t);
  }
  return !1;
}
function _e(e) {
  if (e.parentElement) return e.parentElement;
  if (e.parentNode && e.parentNode.nodeType === 11 && e.parentNode.host)
    return e.parentNode.host;
}
function Nh(e) {
  let t = e;
  for (; t.parentNode; ) t = t.parentNode;
  if (t.nodeType === 11 || t.nodeType === 9) return t;
}
function bh(e) {
  for (; e.parentElement; ) e = e.parentElement;
  return _e(e);
}
function xr(e, t, n) {
  for (; e; ) {
    const r = e.closest(t);
    if (n && r !== n && r != null && r.contains(n)) return;
    if (r) return r;
    e = bh(e);
  }
}
function Jn(e, t) {
  return e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView.getComputedStyle(e, t)
    : void 0;
}
function Ah(e, t) {
  if (((t = t ?? Jn(e)), !t)) return !0;
  if (Element.prototype.checkVisibility && Ch !== 'webkit') {
    if (!e.checkVisibility()) return !1;
  } else {
    const n = e.closest('details,summary');
    if (n !== e && (n == null ? void 0 : n.nodeName) === 'DETAILS' && !n.open)
      return !1;
  }
  return t.visibility === 'visible';
}
function tn(e) {
  const t = Jn(e);
  if (!t) return !0;
  if (t.display === 'contents') {
    for (let r = e.firstChild; r; r = r.nextSibling)
      if ((r.nodeType === 1 && tn(r)) || (r.nodeType === 3 && Lh(r))) return !0;
    return !1;
  }
  if (!Ah(e, t)) return !1;
  const n = e.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function Lh(e) {
  const t = e.ownerDocument.createRange();
  t.selectNode(e);
  const n = t.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function ve(e) {
  return e instanceof HTMLFormElement ? 'FORM' : e.tagName.toUpperCase();
}
function fc(e) {
  return e.hasAttribute('aria-label') || e.hasAttribute('aria-labelledby');
}
const hc =
    'article:not([role]), aside:not([role]), main:not([role]), nav:not([role]), section:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]',
  V0 = new Map([
    ['aria-atomic', void 0],
    ['aria-busy', void 0],
    ['aria-controls', void 0],
    ['aria-current', void 0],
    ['aria-describedby', void 0],
    ['aria-details', void 0],
    ['aria-dropeffect', void 0],
    ['aria-flowto', void 0],
    ['aria-grabbed', void 0],
    ['aria-hidden', void 0],
    ['aria-keyshortcuts', void 0],
    [
      'aria-label',
      new Set([
        'caption',
        'code',
        'deletion',
        'emphasis',
        'generic',
        'insertion',
        'paragraph',
        'presentation',
        'strong',
        'subscript',
        'superscript',
      ]),
    ],
    [
      'aria-labelledby',
      new Set([
        'caption',
        'code',
        'deletion',
        'emphasis',
        'generic',
        'insertion',
        'paragraph',
        'presentation',
        'strong',
        'subscript',
        'superscript',
      ]),
    ],
    ['aria-live', void 0],
    ['aria-owns', void 0],
    ['aria-relevant', void 0],
    ['aria-roledescription', new Set(['generic'])],
  ]);
function Ih(e, t) {
  return [...V0].some(
    ([n, r]) => !(r != null && r.has(t || '')) && e.hasAttribute(n)
  );
}
function Mh(e) {
  return !Number.isNaN(Number(String(e.getAttribute('tabindex'))));
}
function B0(e) {
  return !qh(e) && (q0(e) || Mh(e));
}
function q0(e) {
  const t = ve(e);
  return ['BUTTON', 'DETAILS', 'SELECT', 'TEXTAREA'].includes(t)
    ? !0
    : t === 'A' || t === 'AREA'
      ? e.hasAttribute('href')
      : t === 'INPUT'
        ? !e.hidden
        : !1;
}
const xs = {
    A: (e) => (e.hasAttribute('href') ? 'link' : null),
    AREA: (e) => (e.hasAttribute('href') ? 'link' : null),
    ARTICLE: () => 'article',
    ASIDE: () => 'complementary',
    BLOCKQUOTE: () => 'blockquote',
    BUTTON: () => 'button',
    CAPTION: () => 'caption',
    CODE: () => 'code',
    DATALIST: () => 'listbox',
    DD: () => 'definition',
    DEL: () => 'deletion',
    DETAILS: () => 'group',
    DFN: () => 'term',
    DIALOG: () => 'dialog',
    DT: () => 'term',
    EM: () => 'emphasis',
    FIELDSET: () => 'group',
    FIGURE: () => 'figure',
    FOOTER: (e) => (xr(e, hc) ? null : 'contentinfo'),
    FORM: (e) => (fc(e) ? 'form' : null),
    H1: () => 'heading',
    H2: () => 'heading',
    H3: () => 'heading',
    H4: () => 'heading',
    H5: () => 'heading',
    H6: () => 'heading',
    HEADER: (e) => (xr(e, hc) ? null : 'banner'),
    HR: () => 'separator',
    HTML: () => 'document',
    IMG: (e) =>
      e.getAttribute('alt') === '' &&
      !e.getAttribute('title') &&
      !Ih(e) &&
      !Mh(e)
        ? 'presentation'
        : 'img',
    INPUT: (e) => {
      const t = e.type.toLowerCase();
      if (t === 'search')
        return e.hasAttribute('list') ? 'combobox' : 'searchbox';
      if (['email', 'tel', 'text', 'url', ''].includes(t)) {
        const n = ti(e, e.getAttribute('list'))[0];
        return n && ve(n) === 'DATALIST' ? 'combobox' : 'textbox';
      }
      return t === 'hidden'
        ? ''
        : {
            button: 'button',
            checkbox: 'checkbox',
            image: 'button',
            number: 'spinbutton',
            radio: 'radio',
            range: 'slider',
            reset: 'button',
            submit: 'button',
          }[t] || 'textbox';
    },
    INS: () => 'insertion',
    LI: () => 'listitem',
    MAIN: () => 'main',
    MARK: () => 'mark',
    MATH: () => 'math',
    MENU: () => 'list',
    METER: () => 'meter',
    NAV: () => 'navigation',
    OL: () => 'list',
    OPTGROUP: () => 'group',
    OPTION: () => 'option',
    OUTPUT: () => 'status',
    P: () => 'paragraph',
    PROGRESS: () => 'progressbar',
    SECTION: (e) => (fc(e) ? 'region' : null),
    SELECT: (e) =>
      e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox',
    STRONG: () => 'strong',
    SUB: () => 'subscript',
    SUP: () => 'superscript',
    SVG: () => 'img',
    TABLE: () => 'table',
    TBODY: () => 'rowgroup',
    TD: (e) => {
      const t = xr(e, 'table'),
        n = t ? _o(t) : '';
      return n === 'grid' || n === 'treegrid' ? 'gridcell' : 'cell';
    },
    TEXTAREA: () => 'textbox',
    TFOOT: () => 'rowgroup',
    TH: (e) => {
      if (e.getAttribute('scope') === 'col') return 'columnheader';
      if (e.getAttribute('scope') === 'row') return 'rowheader';
      const t = xr(e, 'table'),
        n = t ? _o(t) : '';
      return n === 'grid' || n === 'treegrid' ? 'gridcell' : 'cell';
    },
    THEAD: () => 'rowgroup',
    TIME: () => 'time',
    TR: () => 'row',
    UL: () => 'list',
  },
  W0 = {
    DD: ['DL', 'DIV'],
    DIV: ['DL'],
    DT: ['DL', 'DIV'],
    LI: ['OL', 'UL'],
    TBODY: ['TABLE'],
    TD: ['TR'],
    TFOOT: ['TABLE'],
    TH: ['TR'],
    THEAD: ['TABLE'],
    TR: ['THEAD', 'TBODY', 'TFOOT', 'TABLE'],
  };
function pc(e) {
  var r;
  const t = ((r = xs[ve(e)]) == null ? void 0 : r.call(xs, e)) || '';
  if (!t) return null;
  let n = e;
  for (; n; ) {
    const i = _e(n),
      o = W0[ve(n)];
    if (!o || !i || !o.includes(ve(i))) break;
    const s = _o(i);
    if ((s === 'none' || s === 'presentation') && !Ph(i, s)) return s;
    n = i;
  }
  return t;
}
const Q0 = [
    'alert',
    'alertdialog',
    'application',
    'article',
    'banner',
    'blockquote',
    'button',
    'caption',
    'cell',
    'checkbox',
    'code',
    'columnheader',
    'combobox',
    'command',
    'complementary',
    'composite',
    'contentinfo',
    'definition',
    'deletion',
    'dialog',
    'directory',
    'document',
    'emphasis',
    'feed',
    'figure',
    'form',
    'generic',
    'grid',
    'gridcell',
    'group',
    'heading',
    'img',
    'input',
    'insertion',
    'landmark',
    'link',
    'list',
    'listbox',
    'listitem',
    'log',
    'main',
    'marquee',
    'math',
    'meter',
    'menu',
    'menubar',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'navigation',
    'none',
    'note',
    'option',
    'paragraph',
    'presentation',
    'progressbar',
    'radio',
    'radiogroup',
    'range',
    'region',
    'roletype',
    'row',
    'rowgroup',
    'rowheader',
    'scrollbar',
    'search',
    'searchbox',
    'section',
    'sectionhead',
    'select',
    'separator',
    'slider',
    'spinbutton',
    'status',
    'strong',
    'structure',
    'subscript',
    'superscript',
    'switch',
    'tab',
    'table',
    'tablist',
    'tabpanel',
    'term',
    'textbox',
    'time',
    'timer',
    'toolbar',
    'tooltip',
    'tree',
    'treegrid',
    'treeitem',
    'widget',
    'window',
  ],
  K0 = [
    'command',
    'composite',
    'input',
    'landmark',
    'range',
    'roletype',
    'section',
    'sectionhead',
    'select',
    'structure',
    'widget',
    'window',
  ],
  G0 = Q0.filter((e) => !K0.includes(e));
function _o(e) {
  return (
    (e.getAttribute('role') || '')
      .split(' ')
      .map((n) => n.trim())
      .find((n) => G0.includes(n)) || null
  );
}
function Ph(e, t) {
  return Ih(e, t) || B0(e);
}
function Ee(e) {
  const t = _o(e);
  if (!t) return pc(e);
  if (t === 'none' || t === 'presentation') {
    const n = pc(e);
    if (Ph(e, n)) return n;
  }
  return t;
}
function Rh(e) {
  return e === null ? void 0 : e.toLowerCase() === 'true';
}
function $h(e) {
  return ['STYLE', 'SCRIPT', 'NOSCRIPT', 'TEMPLATE'].includes(ve(e));
}
function at(e) {
  if ($h(e)) return !0;
  const t = Jn(e),
    n = e.nodeName === 'SLOT';
  if ((t == null ? void 0 : t.display) === 'contents' && !n) {
    for (let i = e.firstChild; i; i = i.nextSibling)
      if ((i.nodeType === 1 && !at(i)) || (i.nodeType === 3 && Lh(i)))
        return !1;
    return !0;
  }
  return !(e.nodeName === 'OPTION' && !!e.closest('select')) && !n && !Ah(e, t)
    ? !0
    : Oh(e);
}
function Oh(e) {
  let t = Nt == null ? void 0 : Nt.get(e);
  if (t === void 0) {
    if (
      ((t = !1),
      e.parentElement &&
        e.parentElement.shadowRoot &&
        !e.assignedSlot &&
        (t = !0),
      !t)
    ) {
      const n = Jn(e);
      t =
        !n || n.display === 'none' || Rh(e.getAttribute('aria-hidden')) === !0;
    }
    if (!t) {
      const n = _e(e);
      n && (t = Oh(n));
    }
    Nt == null || Nt.set(e, t);
  }
  return t;
}
function ti(e, t) {
  if (!t) return [];
  const n = Nh(e);
  if (!n) return [];
  try {
    const r = t.split(' ').filter((o) => !!o),
      i = new Set();
    for (const o of r) {
      const s = n.querySelector('#' + CSS.escape(o));
      s && i.add(s);
    }
    return [...i];
  } catch {
    return [];
  }
}
function ht(e) {
  return e.trim();
}
function Bi(e) {
  return e
    .split(' ')
    .map((t) =>
      t
        .replace(
          /\r\n/g,
          `
`
        )
        .replace(/\s\s*/g, ' ')
    )
    .join(' ')
    .trim();
}
function gc(e, t) {
  const n = [...e.querySelectorAll(t)];
  for (const r of ti(e, e.getAttribute('aria-owns')))
    r.matches(t) && n.push(r), n.push(...r.querySelectorAll(t));
  return n;
}
function mc(e, t) {
  const n = t === '::before' ? Oa : ja;
  if (n != null && n.has(e)) return (n == null ? void 0 : n.get(e)) || '';
  const r = Jn(e, t),
    i = X0(r);
  return n && n.set(e, i), i;
}
function X0(e) {
  if (!e || e.display === 'none' || e.visibility === 'hidden') return '';
  const t = e.content;
  if (
    (t[0] === "'" && t[t.length - 1] === "'") ||
    (t[0] === '"' && t[t.length - 1] === '"')
  ) {
    const n = t.substring(1, t.length - 1);
    return (e.display || 'inline') !== 'inline' ? ' ' + n + ' ' : n;
  }
  return '';
}
function jh(e) {
  const t = e.getAttribute('aria-labelledby');
  return t === null ? null : ti(e, t);
}
function Y0(e, t) {
  const n = [
      'button',
      'cell',
      'checkbox',
      'columnheader',
      'gridcell',
      'heading',
      'link',
      'menuitem',
      'menuitemcheckbox',
      'menuitemradio',
      'option',
      'radio',
      'row',
      'rowheader',
      'switch',
      'tab',
      'tooltip',
      'treeitem',
    ].includes(e),
    r =
      t &&
      [
        '',
        'caption',
        'code',
        'contentinfo',
        'definition',
        'deletion',
        'emphasis',
        'insertion',
        'list',
        'listitem',
        'mark',
        'none',
        'paragraph',
        'presentation',
        'region',
        'row',
        'rowgroup',
        'section',
        'strong',
        'subscript',
        'superscript',
        'table',
        'term',
        'time',
      ].includes(e);
  return n || r;
}
function So(e, t) {
  const n = t ? Pa : Ma;
  let r = n == null ? void 0 : n.get(e);
  return (
    r === void 0 &&
      ((r = ''),
      [
        'caption',
        'code',
        'definition',
        'deletion',
        'emphasis',
        'generic',
        'insertion',
        'mark',
        'paragraph',
        'presentation',
        'strong',
        'subscript',
        'suggestion',
        'superscript',
        'term',
        'time',
      ].includes(Ee(e) || '') ||
        (r = Bi(
          lt(e, {
            includeHidden: t,
            visitedElements: new Set(),
            embeddedInDescribedBy: void 0,
            embeddedInLabelledBy: void 0,
            embeddedInLabel: void 0,
            embeddedInNativeTextAlternative: void 0,
            embeddedInTargetElement: 'self',
          })
        )),
      n == null || n.set(e, r)),
    r
  );
}
function vc(e, t) {
  const n = t ? $a : Ra;
  let r = n == null ? void 0 : n.get(e);
  if (r === void 0) {
    if (((r = ''), e.hasAttribute('aria-describedby'))) {
      const i = ti(e, e.getAttribute('aria-describedby'));
      r = Bi(
        i
          .map((o) =>
            lt(o, {
              includeHidden: t,
              visitedElements: new Set(),
              embeddedInLabelledBy: void 0,
              embeddedInLabel: void 0,
              embeddedInNativeTextAlternative: void 0,
              embeddedInTargetElement: 'none',
              embeddedInDescribedBy: { element: o, hidden: at(o) },
            })
          )
          .join(' ')
      );
    } else
      e.hasAttribute('aria-description')
        ? (r = Bi(e.getAttribute('aria-description') || ''))
        : (r = Bi(e.getAttribute('title') || ''));
    n == null || n.set(e, r);
  }
  return r;
}
function lt(e, t) {
  var a, u, c, f;
  if (t.visitedElements.has(e)) return '';
  const n = {
    ...t,
    embeddedInTargetElement:
      t.embeddedInTargetElement === 'self'
        ? 'descendant'
        : t.embeddedInTargetElement,
  };
  if (!t.includeHidden) {
    const d =
      !!((a = t.embeddedInLabelledBy) != null && a.hidden) ||
      !!((u = t.embeddedInDescribedBy) != null && u.hidden) ||
      !!((c = t.embeddedInNativeTextAlternative) != null && c.hidden) ||
      !!((f = t.embeddedInLabel) != null && f.hidden);
    if ($h(e) || (!d && at(e))) return t.visitedElements.add(e), '';
  }
  const r = jh(e);
  if (!t.embeddedInLabelledBy) {
    const d = (r || [])
      .map((g) =>
        lt(g, {
          ...t,
          embeddedInLabelledBy: { element: g, hidden: at(g) },
          embeddedInDescribedBy: void 0,
          embeddedInTargetElement: 'none',
          embeddedInLabel: void 0,
          embeddedInNativeTextAlternative: void 0,
        })
      )
      .join(' ');
    if (d) return d;
  }
  const i = Ee(e) || '',
    o = ve(e);
  if (
    t.embeddedInLabel ||
    t.embeddedInLabelledBy ||
    t.embeddedInTargetElement === 'descendant'
  ) {
    const d = [...(e.labels || [])].includes(e),
      g = (r || []).includes(e);
    if (!d && !g) {
      if (i === 'textbox')
        return (
          t.visitedElements.add(e),
          o === 'INPUT' || o === 'TEXTAREA' ? e.value : e.textContent || ''
        );
      if (['combobox', 'listbox'].includes(i)) {
        t.visitedElements.add(e);
        let y;
        if (o === 'SELECT')
          (y = [...e.selectedOptions]),
            !y.length && e.options.length && y.push(e.options[0]);
        else {
          const v =
            i === 'combobox' ? gc(e, '*').find((w) => Ee(w) === 'listbox') : e;
          y = v
            ? gc(v, '[aria-selected="true"]').filter((w) => Ee(w) === 'option')
            : [];
        }
        return !y.length && o === 'INPUT'
          ? e.value
          : y.map((v) => lt(v, n)).join(' ');
      }
      if (
        ['progressbar', 'scrollbar', 'slider', 'spinbutton', 'meter'].includes(
          i
        )
      )
        return (
          t.visitedElements.add(e),
          e.hasAttribute('aria-valuetext')
            ? e.getAttribute('aria-valuetext') || ''
            : e.hasAttribute('aria-valuenow')
              ? e.getAttribute('aria-valuenow') || ''
              : e.getAttribute('value') || ''
        );
      if (['menu'].includes(i)) return t.visitedElements.add(e), '';
    }
  }
  const s = e.getAttribute('aria-label') || '';
  if (ht(s)) return t.visitedElements.add(e), s;
  if (!['presentation', 'none'].includes(i)) {
    if (o === 'INPUT' && ['button', 'submit', 'reset'].includes(e.type)) {
      t.visitedElements.add(e);
      const d = e.value || '';
      return ht(d)
        ? d
        : e.type === 'submit'
          ? 'Submit'
          : e.type === 'reset'
            ? 'Reset'
            : e.getAttribute('title') || '';
    }
    if (o === 'INPUT' && e.type === 'image') {
      t.visitedElements.add(e);
      const d = e.labels || [];
      if (d.length && !t.embeddedInLabelledBy) return _i(d, t);
      const g = e.getAttribute('alt') || '';
      if (ht(g)) return g;
      const y = e.getAttribute('title') || '';
      return ht(y) ? y : 'Submit';
    }
    if (!r && o === 'BUTTON') {
      t.visitedElements.add(e);
      const d = e.labels || [];
      if (d.length) return _i(d, t);
    }
    if (!r && o === 'OUTPUT') {
      t.visitedElements.add(e);
      const d = e.labels || [];
      return d.length ? _i(d, t) : e.getAttribute('title') || '';
    }
    if (!r && (o === 'TEXTAREA' || o === 'SELECT' || o === 'INPUT')) {
      t.visitedElements.add(e);
      const d = e.labels || [];
      if (d.length) return _i(d, t);
      const g =
          (o === 'INPUT' &&
            ['text', 'password', 'search', 'tel', 'email', 'url'].includes(
              e.type
            )) ||
          o === 'TEXTAREA',
        y = e.getAttribute('placeholder') || '',
        v = e.getAttribute('title') || '';
      return !g || v ? v : y;
    }
    if (!r && o === 'FIELDSET') {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (ve(g) === 'LEGEND')
          return lt(g, {
            ...n,
            embeddedInNativeTextAlternative: { element: g, hidden: at(g) },
          });
      return e.getAttribute('title') || '';
    }
    if (!r && o === 'FIGURE') {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (ve(g) === 'FIGCAPTION')
          return lt(g, {
            ...n,
            embeddedInNativeTextAlternative: { element: g, hidden: at(g) },
          });
      return e.getAttribute('title') || '';
    }
    if (o === 'IMG') {
      t.visitedElements.add(e);
      const d = e.getAttribute('alt') || '';
      return ht(d) ? d : e.getAttribute('title') || '';
    }
    if (o === 'TABLE') {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (ve(g) === 'CAPTION')
          return lt(g, {
            ...n,
            embeddedInNativeTextAlternative: { element: g, hidden: at(g) },
          });
      const d = e.getAttribute('summary') || '';
      if (d) return d;
    }
    if (o === 'AREA') {
      t.visitedElements.add(e);
      const d = e.getAttribute('alt') || '';
      return ht(d) ? d : e.getAttribute('title') || '';
    }
    if (o === 'SVG' || e.ownerSVGElement) {
      t.visitedElements.add(e);
      for (let d = e.firstElementChild; d; d = d.nextElementSibling)
        if (ve(d) === 'TITLE' && d.ownerSVGElement)
          return lt(d, {
            ...n,
            embeddedInLabelledBy: { element: d, hidden: at(d) },
          });
    }
    if (e.ownerSVGElement && o === 'A') {
      const d = e.getAttribute('xlink:title') || '';
      if (ht(d)) return t.visitedElements.add(e), d;
    }
  }
  const l = o === 'SUMMARY' && !['presentation', 'none'].includes(i);
  if (
    Y0(i, t.embeddedInTargetElement === 'descendant') ||
    l ||
    t.embeddedInLabelledBy ||
    t.embeddedInDescribedBy ||
    t.embeddedInLabel ||
    t.embeddedInNativeTextAlternative
  ) {
    t.visitedElements.add(e);
    const d = [],
      g = (p, h) => {
        var m;
        if (!(h && p.assignedSlot))
          if (p.nodeType === 1) {
            const _ = ((m = Jn(p)) == null ? void 0 : m.display) || 'inline';
            let T = lt(p, n);
            (_ !== 'inline' || p.nodeName === 'BR') && (T = ' ' + T + ' '),
              d.push(T);
          } else p.nodeType === 3 && d.push(p.textContent || '');
      };
    d.push(mc(e, '::before'));
    const y = e.nodeName === 'SLOT' ? e.assignedNodes() : [];
    if (y.length) for (const p of y) g(p, !1);
    else {
      for (let p = e.firstChild; p; p = p.nextSibling) g(p, !0);
      if (e.shadowRoot)
        for (let p = e.shadowRoot.firstChild; p; p = p.nextSibling) g(p, !0);
      for (const p of ti(e, e.getAttribute('aria-owns'))) g(p, !0);
    }
    d.push(mc(e, '::after'));
    const v = d.join('');
    if (t.embeddedInTargetElement === 'self' ? ht(v) : v) return v;
  }
  if (!['presentation', 'none'].includes(i) || o === 'IFRAME') {
    t.visitedElements.add(e);
    const d = e.getAttribute('title') || '';
    if (ht(d)) return d;
  }
  return t.visitedElements.add(e), '';
}
const Dh = [
  'gridcell',
  'option',
  'row',
  'tab',
  'rowheader',
  'columnheader',
  'treeitem',
];
function J0(e) {
  return ve(e) === 'OPTION'
    ? e.selected
    : Dh.includes(Ee(e) || '')
      ? Rh(e.getAttribute('aria-selected')) === !0
      : !1;
}
const zh = [
  'checkbox',
  'menuitemcheckbox',
  'option',
  'radio',
  'switch',
  'menuitemradio',
  'treeitem',
];
function Z0(e) {
  const t = Fh(e, !0);
  return t === 'error' ? !1 : t;
}
function Fh(e, t) {
  const n = ve(e);
  if (t && n === 'INPUT' && e.indeterminate) return 'mixed';
  if (n === 'INPUT' && ['checkbox', 'radio'].includes(e.type)) return e.checked;
  if (zh.includes(Ee(e) || '')) {
    const r = e.getAttribute('aria-checked');
    return r === 'true' ? !0 : t && r === 'mixed' ? 'mixed' : !1;
  }
  return 'error';
}
const Hh = ['button'];
function ey(e) {
  if (Hh.includes(Ee(e) || '')) {
    const t = e.getAttribute('aria-pressed');
    if (t === 'true') return !0;
    if (t === 'mixed') return 'mixed';
  }
  return !1;
}
const Uh = [
  'application',
  'button',
  'checkbox',
  'combobox',
  'gridcell',
  'link',
  'listbox',
  'menuitem',
  'row',
  'rowheader',
  'tab',
  'treeitem',
  'columnheader',
  'menuitemcheckbox',
  'menuitemradio',
  'rowheader',
  'switch',
];
function ty(e) {
  if (ve(e) === 'DETAILS') return e.open;
  if (Uh.includes(Ee(e) || '')) {
    const t = e.getAttribute('aria-expanded');
    return t === null ? 'none' : t === 'true';
  }
  return 'none';
}
const Vh = ['heading', 'listitem', 'row', 'treeitem'];
function ny(e) {
  const t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[ve(e)];
  if (t) return t;
  if (Vh.includes(Ee(e) || '')) {
    const n = e.getAttribute('aria-level'),
      r = n === null ? Number.NaN : Number(n);
    if (Number.isInteger(r) && r >= 1) return r;
  }
  return 0;
}
const ry = [
  'application',
  'button',
  'composite',
  'gridcell',
  'group',
  'input',
  'link',
  'menuitem',
  'scrollbar',
  'separator',
  'tab',
  'checkbox',
  'columnheader',
  'combobox',
  'grid',
  'listbox',
  'menu',
  'menubar',
  'menuitemcheckbox',
  'menuitemradio',
  'option',
  'radio',
  'radiogroup',
  'row',
  'rowheader',
  'searchbox',
  'select',
  'slider',
  'spinbutton',
  'switch',
  'tablist',
  'textbox',
  'toolbar',
  'tree',
  'treegrid',
  'treeitem',
];
function Bh(e) {
  return qh(e) || Qh(e);
}
function qh(e) {
  return (
    ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'OPTION', 'OPTGROUP'].includes(
      e.tagName
    ) &&
    (e.hasAttribute('disabled') || Wh(e))
  );
}
function Wh(e) {
  return e
    ? ve(e) === 'FIELDSET' && e.hasAttribute('disabled')
      ? !0
      : Wh(e.parentElement)
    : !1;
}
function Qh(e) {
  if (!e) return !1;
  if (ry.includes(Ee(e) || '')) {
    const t = (e.getAttribute('aria-disabled') || '').toLowerCase();
    if (t === 'true') return !0;
    if (t === 'false') return !1;
  }
  return Qh(_e(e));
}
function _i(e, t) {
  return [...e]
    .map((n) =>
      lt(n, {
        ...t,
        embeddedInLabel: { element: n, hidden: at(n) },
        embeddedInNativeTextAlternative: void 0,
        embeddedInLabelledBy: void 0,
        embeddedInDescribedBy: void 0,
        embeddedInTargetElement: 'none',
      })
    )
    .filter((n) => !!n)
    .join(' ');
}
let Ma,
  Pa,
  Ra,
  $a,
  Nt,
  Oa,
  ja,
  Kh = 0;
function Da() {
  ++Kh,
    Ma ?? (Ma = new Map()),
    Pa ?? (Pa = new Map()),
    Ra ?? (Ra = new Map()),
    $a ?? ($a = new Map()),
    Nt ?? (Nt = new Map()),
    Oa ?? (Oa = new Map()),
    ja ?? (ja = new Map());
}
function za() {
  --Kh ||
    ((Ma = void 0),
    (Pa = void 0),
    (Ra = void 0),
    ($a = void 0),
    (Nt = void 0),
    (Oa = void 0),
    (ja = void 0));
}
function Gh(e, t) {
  for (const n of t.jsonPath) e != null && (e = e[n]);
  return Xh(e, t);
}
function Xh(e, t) {
  const n = typeof e == 'string' && !t.caseSensitive ? e.toUpperCase() : e,
    r =
      typeof t.value == 'string' && !t.caseSensitive
        ? t.value.toUpperCase()
        : t.value;
  return t.op === '<truthy>'
    ? !!n
    : t.op === '='
      ? r instanceof RegExp
        ? typeof n == 'string' && !!n.match(r)
        : n === r
      : typeof n != 'string' || typeof r != 'string'
        ? !1
        : t.op === '*='
          ? n.includes(r)
          : t.op === '^='
            ? n.startsWith(r)
            : t.op === '$='
              ? n.endsWith(r)
              : t.op === '|='
                ? n === r || n.startsWith(r + '-')
                : t.op === '~='
                  ? n.split(' ').includes(r)
                  : !1;
}
function Fa(e) {
  const t = e.ownerDocument;
  return (
    e.nodeName === 'SCRIPT' ||
    e.nodeName === 'NOSCRIPT' ||
    e.nodeName === 'STYLE' ||
    (t.head && t.head.contains(e))
  );
}
function Ae(e, t) {
  let n = e.get(t);
  if (n === void 0) {
    if (((n = { full: '', normalized: '', immediate: [] }), !Fa(t))) {
      let r = '';
      if (
        t instanceof HTMLInputElement &&
        (t.type === 'submit' || t.type === 'button')
      )
        n = { full: t.value, normalized: De(t.value), immediate: [t.value] };
      else {
        for (let i = t.firstChild; i; i = i.nextSibling)
          i.nodeType === Node.TEXT_NODE
            ? ((n.full += i.nodeValue || ''), (r += i.nodeValue || ''))
            : (r && n.immediate.push(r),
              (r = ''),
              i.nodeType === Node.ELEMENT_NODE && (n.full += Ae(e, i).full));
        r && n.immediate.push(r),
          t.shadowRoot && (n.full += Ae(e, t.shadowRoot).full),
          n.full && (n.normalized = De(n.full));
      }
    }
    e.set(t, n);
  }
  return n;
}
function qo(e, t, n) {
  if (Fa(t) || !n(Ae(e, t))) return 'none';
  for (let r = t.firstChild; r; r = r.nextSibling)
    if (r.nodeType === Node.ELEMENT_NODE && n(Ae(e, r)))
      return 'selfAndChildren';
  return t.shadowRoot && n(Ae(e, t.shadowRoot)) ? 'selfAndChildren' : 'self';
}
function Yh(e, t) {
  const n = jh(t);
  if (n) return n.map((o) => Ae(e, o));
  const r = t.getAttribute('aria-label');
  if (r !== null && r.trim())
    return [{ full: r, normalized: De(r), immediate: [r] }];
  const i = t.nodeName === 'INPUT' && t.type !== 'hidden';
  if (
    ['BUTTON', 'METER', 'OUTPUT', 'PROGRESS', 'SELECT', 'TEXTAREA'].includes(
      t.nodeName
    ) ||
    i
  ) {
    const o = t.labels;
    if (o) return [...o].map((s) => Ae(e, s));
  }
  return [];
}
function yc(e) {
  return e.displayName || e.name || 'Anonymous';
}
function iy(e) {
  if (e.type)
    switch (typeof e.type) {
      case 'function':
        return yc(e.type);
      case 'string':
        return e.type;
      case 'object':
        return e.type.displayName || (e.type.render ? yc(e.type.render) : '');
    }
  if (e._currentElement) {
    const t = e._currentElement.type;
    if (typeof t == 'string') return t;
    if (typeof t == 'function') return t.displayName || t.name || 'Anonymous';
  }
  return '';
}
function oy(e) {
  var t;
  return e.key ?? ((t = e._currentElement) == null ? void 0 : t.key);
}
function sy(e) {
  if (e.child) {
    const n = [];
    for (let r = e.child; r; r = r.sibling) n.push(r);
    return n;
  }
  if (!e._currentElement) return [];
  const t = (n) => {
    var i;
    const r = (i = n._currentElement) == null ? void 0 : i.type;
    return typeof r == 'function' || typeof r == 'string';
  };
  if (e._renderedComponent) {
    const n = e._renderedComponent;
    return t(n) ? [n] : [];
  }
  return e._renderedChildren
    ? [...Object.values(e._renderedChildren)].filter(t)
    : [];
}
function ly(e) {
  var r;
  const t =
    e.memoizedProps || ((r = e._currentElement) == null ? void 0 : r.props);
  if (!t || typeof t == 'string') return t;
  const n = { ...t };
  return delete n.children, n;
}
function Jh(e) {
  var r;
  const t = {
      key: oy(e),
      name: iy(e),
      children: sy(e).map(Jh),
      rootElements: [],
      props: ly(e),
    },
    n =
      e.stateNode ||
      e._hostNode ||
      ((r = e._renderedComponent) == null ? void 0 : r._hostNode);
  if (n instanceof Element) t.rootElements.push(n);
  else for (const i of t.children) t.rootElements.push(...i.rootElements);
  return t;
}
function Zh(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) Zh(r, t, n);
  return n;
}
function ep(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
  do {
    const i = r.currentNode,
      o = i,
      s = Object.keys(o).find(
        (a) => a.startsWith('__reactContainer') && o[a] !== null
      );
    if (s) t.push(o[s].stateNode.current);
    else {
      const a = '_reactRootContainer';
      o.hasOwnProperty(a) &&
        o[a] !== null &&
        t.push(o[a]._internalRoot.current);
    }
    if (i instanceof Element && i.hasAttribute('data-reactroot'))
      for (const a of Object.keys(i))
        (a.startsWith('__reactInternalInstance') ||
          a.startsWith('__reactFiber')) &&
          t.push(i[a]);
    const l = i instanceof Element ? i.shadowRoot : null;
    l && ep(l, t);
  } while (r.nextNode());
  return t;
}
const ay = {
  queryAll(e, t) {
    const { name: n, attributes: r } = on(t, !1),
      s = ep(e.ownerDocument || e)
        .map((a) => Jh(a))
        .map((a) =>
          Zh(a, (u) => {
            const c = u.props ?? {};
            if (
              (u.key !== void 0 && (c.key = u.key),
              (n && u.name !== n) || u.rootElements.some((f) => !Bo(e, f)))
            )
              return !1;
            for (const f of r) if (!Gh(c, f)) return !1;
            return !0;
          })
        )
        .flat(),
      l = new Set();
    for (const a of s) for (const u of a.rootElements) l.add(u);
    return [...l];
  },
};
function tp(e, t) {
  const n = e.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/');
  let r = n.substring(n.lastIndexOf('/') + 1);
  return r.endsWith(t) && (r = r.substring(0, r.length - t.length)), r;
}
function uy(e, t) {
  return t ? t.toUpperCase() : '';
}
const cy = /(?:^|[-_/])(\w)/g,
  np = (e) => e && e.replace(cy, uy);
function dy(e) {
  function t(c) {
    const f = c.name || c._componentTag || c.__playwright_guessedName;
    if (f) return f;
    const d = c.__file;
    if (d) return np(tp(d, '.vue'));
  }
  function n(c, f) {
    return (c.type.__playwright_guessedName = f), f;
  }
  function r(c) {
    var d, g, y, v;
    const f = t(c.type || {});
    if (f) return f;
    if (c.root === c) return 'Root';
    for (const w in (g = (d = c.parent) == null ? void 0 : d.type) == null
      ? void 0
      : g.components)
      if (((y = c.parent) == null ? void 0 : y.type.components[w]) === c.type)
        return n(c, w);
    for (const w in (v = c.appContext) == null ? void 0 : v.components)
      if (c.appContext.components[w] === c.type) return n(c, w);
    return 'Anonymous Component';
  }
  function i(c) {
    return c._isBeingDestroyed || c.isUnmounted;
  }
  function o(c) {
    return c.subTree.type.toString() === 'Symbol(Fragment)';
  }
  function s(c) {
    const f = [];
    return (
      c.component && f.push(c.component),
      c.suspense && f.push(...s(c.suspense.activeBranch)),
      Array.isArray(c.children) &&
        c.children.forEach((d) => {
          d.component ? f.push(d.component) : f.push(...s(d));
        }),
      f.filter((d) => {
        var g;
        return !i(d) && !((g = d.type.devtools) != null && g.hide);
      })
    );
  }
  function l(c) {
    return o(c) ? a(c.subTree) : [c.subTree.el];
  }
  function a(c) {
    if (!c.children) return [];
    const f = [];
    for (let d = 0, g = c.children.length; d < g; d++) {
      const y = c.children[d];
      y.component ? f.push(...l(y.component)) : y.el && f.push(y.el);
    }
    return f;
  }
  function u(c) {
    return {
      name: r(c),
      children: s(c.subTree).map(u),
      rootElements: l(c),
      props: c.props,
    };
  }
  return u(e);
}
function fy(e) {
  function t(o) {
    const s = o.displayName || o.name || o._componentTag;
    if (s) return s;
    const l = o.__file;
    if (l) return np(tp(l, '.vue'));
  }
  function n(o) {
    const s = t(o.$options || o.fnOptions || {});
    return s || (o.$root === o ? 'Root' : 'Anonymous Component');
  }
  function r(o) {
    return o.$children
      ? o.$children
      : Array.isArray(o.subTree.children)
        ? o.subTree.children
            .filter((s) => !!s.component)
            .map((s) => s.component)
        : [];
  }
  function i(o) {
    return {
      name: n(o),
      children: r(o).map(i),
      rootElements: [o.$el],
      props: o._props,
    };
  }
  return i(e);
}
function rp(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) rp(r, t, n);
  return n;
}
function ip(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT),
    i = new Set();
  do {
    const o = r.currentNode;
    o.__vue__ && i.add(o.__vue__.$root),
      o.__vue_app__ &&
        o._vnode &&
        o._vnode.component &&
        t.push({ root: o._vnode.component, version: 3 });
    const s = o instanceof Element ? o.shadowRoot : null;
    s && ip(s, t);
  } while (r.nextNode());
  for (const o of i) t.push({ version: 2, root: o });
  return t;
}
const hy = {
    queryAll(e, t) {
      const n = e.ownerDocument || e,
        { name: r, attributes: i } = on(t, !1),
        l = ip(n)
          .map((u) => (u.version === 3 ? dy(u.root) : fy(u.root)))
          .map((u) =>
            rp(u, (c) => {
              if ((r && c.name !== r) || c.rootElements.some((f) => !Bo(e, f)))
                return !1;
              for (const f of i) if (!Gh(c.props, f)) return !1;
              return !0;
            })
          )
          .flat(),
        a = new Set();
      for (const u of l) for (const c of u.rootElements) a.add(c);
      return [...a];
    },
  },
  op = [
    'selected',
    'checked',
    'pressed',
    'expanded',
    'level',
    'disabled',
    'name',
    'include-hidden',
  ];
op.sort();
function fr(e, t, n) {
  if (!t.includes(n))
    throw new Error(
      `"${e}" attribute is only supported for roles: ${t
        .slice()
        .sort()
        .map((r) => `"${r}"`)
        .join(', ')}`
    );
}
function mn(e, t) {
  if (e.op !== '<truthy>' && !t.includes(e.value))
    throw new Error(
      `"${e.name}" must be one of ${t.map((n) => JSON.stringify(n)).join(', ')}`
    );
}
function vn(e, t) {
  if (!t.includes(e.op))
    throw new Error(`"${e.name}" does not support "${e.op}" matcher`);
}
function py(e, t) {
  const n = { role: t };
  for (const r of e)
    switch (r.name) {
      case 'checked': {
        fr(r.name, zh, t),
          mn(r, [!0, !1, 'mixed']),
          vn(r, ['<truthy>', '=']),
          (n.checked = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'pressed': {
        fr(r.name, Hh, t),
          mn(r, [!0, !1, 'mixed']),
          vn(r, ['<truthy>', '=']),
          (n.pressed = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'selected': {
        fr(r.name, Dh, t),
          mn(r, [!0, !1]),
          vn(r, ['<truthy>', '=']),
          (n.selected = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'expanded': {
        fr(r.name, Uh, t),
          mn(r, [!0, !1]),
          vn(r, ['<truthy>', '=']),
          (n.expanded = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'level': {
        if (
          (fr(r.name, Vh, t),
          typeof r.value == 'string' && (r.value = +r.value),
          r.op !== '=' || typeof r.value != 'number' || Number.isNaN(r.value))
        )
          throw new Error('"level" attribute must be compared to a number');
        n.level = r.value;
        break;
      }
      case 'disabled': {
        mn(r, [!0, !1]),
          vn(r, ['<truthy>', '=']),
          (n.disabled = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'name': {
        if (r.op === '<truthy>')
          throw new Error('"name" attribute must have a value');
        if (typeof r.value != 'string' && !(r.value instanceof RegExp))
          throw new Error(
            '"name" attribute must be a string or a regular expression'
          );
        (n.name = r.value), (n.nameOp = r.op), (n.exact = r.caseSensitive);
        break;
      }
      case 'include-hidden': {
        mn(r, [!0, !1]),
          vn(r, ['<truthy>', '=']),
          (n.includeHidden = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      default:
        throw new Error(
          `Unknown attribute "${r.name}", must be one of ${op.map((i) => `"${i}"`).join(', ')}.`
        );
    }
  return n;
}
function gy(e, t, n) {
  const r = [],
    i = (s) => {
      if (
        Ee(s) === t.role &&
        !(t.selected !== void 0 && J0(s) !== t.selected) &&
        !(t.checked !== void 0 && Z0(s) !== t.checked) &&
        !(t.pressed !== void 0 && ey(s) !== t.pressed) &&
        !(t.expanded !== void 0 && ty(s) !== t.expanded) &&
        !(t.level !== void 0 && ny(s) !== t.level) &&
        !(t.disabled !== void 0 && Bh(s) !== t.disabled) &&
        !(!t.includeHidden && at(s))
      ) {
        if (t.name !== void 0) {
          const l = De(So(s, !!t.includeHidden));
          if (
            (typeof t.name == 'string' && (t.name = De(t.name)),
            n && !t.exact && t.nameOp === '=' && (t.nameOp = '*='),
            !Xh(l, {
              name: '',
              jsonPath: [],
              op: t.nameOp || '=',
              value: t.name,
              caseSensitive: !!t.exact,
            }))
          )
            return;
        }
        r.push(s);
      }
    },
    o = (s) => {
      const l = [];
      s.shadowRoot && l.push(s.shadowRoot);
      for (const a of s.querySelectorAll('*'))
        i(a), a.shadowRoot && l.push(a.shadowRoot);
      l.forEach(o);
    };
  return o(e), r;
}
function wc(e) {
  return {
    queryAll: (t, n) => {
      const r = on(n, !0),
        i = r.name.toLowerCase();
      if (!i) throw new Error('Role must not be empty');
      const o = py(r.attributes, i);
      Da();
      try {
        return gy(t, o, e);
      } finally {
        za();
      }
    },
  };
}
function my(e, t, n) {
  const r = e.left - t.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function vy(e, t, n) {
  const r = t.left - e.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function yy(e, t, n) {
  const r = t.top - e.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function wy(e, t, n) {
  const r = e.top - t.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function xy(e, t, n) {
  const r = n === void 0 ? 50 : n;
  let i = 0;
  return (
    e.left - t.right >= 0 && (i += e.left - t.right),
    t.left - e.right >= 0 && (i += t.left - e.right),
    t.top - e.bottom >= 0 && (i += t.top - e.bottom),
    e.top - t.bottom >= 0 && (i += e.top - t.bottom),
    i > r ? void 0 : i
  );
}
const _y = ['left-of', 'right-of', 'above', 'below', 'near'];
function sp(e, t, n, r) {
  const i = t.getBoundingClientRect(),
    o = { 'left-of': vy, 'right-of': my, above: yy, below: wy, near: xy }[e];
  let s;
  for (const l of n) {
    if (l === t) continue;
    const a = o(i, l.getBoundingClientRect(), r);
    a !== void 0 && (s === void 0 || a < s) && (s = a);
  }
  return s;
}
class Sy {
  constructor(t) {
    (this._engines = new Map()),
      (this._cacheQueryCSS = new Map()),
      (this._cacheMatches = new Map()),
      (this._cacheQuery = new Map()),
      (this._cacheMatchesSimple = new Map()),
      (this._cacheMatchesParents = new Map()),
      (this._cacheCallMatches = new Map()),
      (this._cacheCallQuery = new Map()),
      (this._cacheQuerySimple = new Map()),
      (this._cacheText = new Map()),
      (this._retainCacheCounter = 0);
    for (const [i, o] of t) this._engines.set(i, o);
    this._engines.set('not', ky),
      this._engines.set('is', _r),
      this._engines.set('where', _r),
      this._engines.set('has', Ey),
      this._engines.set('scope', Ty),
      this._engines.set('light', Cy),
      this._engines.set('visible', Ny),
      this._engines.set('text', by),
      this._engines.set('text-is', Ay),
      this._engines.set('text-matches', Ly),
      this._engines.set('has-text', Iy),
      this._engines.set('right-of', hr('right-of')),
      this._engines.set('left-of', hr('left-of')),
      this._engines.set('above', hr('above')),
      this._engines.set('below', hr('below')),
      this._engines.set('near', hr('near')),
      this._engines.set('nth-match', My);
    const n = [...this._engines.keys()];
    n.sort();
    const r = [...wh];
    if ((r.sort(), n.join('|') !== r.join('|')))
      throw new Error(
        `Please keep customCSSNames in sync with evaluator engines: ${n.join('|')} vs ${r.join('|')}`
      );
  }
  begin() {
    ++this._retainCacheCounter;
  }
  end() {
    --this._retainCacheCounter,
      this._retainCacheCounter ||
        (this._cacheQueryCSS.clear(),
        this._cacheMatches.clear(),
        this._cacheQuery.clear(),
        this._cacheMatchesSimple.clear(),
        this._cacheMatchesParents.clear(),
        this._cacheCallMatches.clear(),
        this._cacheCallQuery.clear(),
        this._cacheQuerySimple.clear(),
        this._cacheText.clear());
  }
  _cached(t, n, r, i) {
    t.has(n) || t.set(n, []);
    const o = t.get(n),
      s = o.find((a) => r.every((u, c) => a.rest[c] === u));
    if (s) return s.result;
    const l = i();
    return o.push({ rest: r, result: l }), l;
  }
  _checkSelector(t) {
    if (
      !(
        typeof t == 'object' &&
        t &&
        (Array.isArray(t) || ('simples' in t && t.simples.length))
      )
    )
      throw new Error(`Malformed selector "${t}"`);
    return t;
  }
  matches(t, n, r) {
    const i = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheMatches,
        t,
        [i, r.scope, r.pierceShadow, r.originalScope],
        () =>
          Array.isArray(i)
            ? this._matchesEngine(_r, t, i, r)
            : (this._hasScopeClause(i) &&
                (r = this._expandContextForScopeMatching(r)),
              this._matchesSimple(
                t,
                i.simples[i.simples.length - 1].selector,
                r
              )
                ? this._matchesParents(t, i, i.simples.length - 2, r)
                : !1)
      );
    } finally {
      this.end();
    }
  }
  query(t, n) {
    const r = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheQuery,
        r,
        [t.scope, t.pierceShadow, t.originalScope],
        () => {
          if (Array.isArray(r)) return this._queryEngine(_r, t, r);
          this._hasScopeClause(r) &&
            (t = this._expandContextForScopeMatching(t));
          const i = this._scoreMap;
          this._scoreMap = new Map();
          let o = this._querySimple(
            t,
            r.simples[r.simples.length - 1].selector
          );
          return (
            (o = o.filter((s) =>
              this._matchesParents(s, r, r.simples.length - 2, t)
            )),
            this._scoreMap.size &&
              o.sort((s, l) => {
                const a = this._scoreMap.get(s),
                  u = this._scoreMap.get(l);
                return a === u
                  ? 0
                  : a === void 0
                    ? 1
                    : u === void 0
                      ? -1
                      : a - u;
              }),
            (this._scoreMap = i),
            o
          );
        }
      );
    } finally {
      this.end();
    }
  }
  _markScore(t, n) {
    this._scoreMap && this._scoreMap.set(t, n);
  }
  _hasScopeClause(t) {
    return t.simples.some((n) =>
      n.selector.functions.some((r) => r.name === 'scope')
    );
  }
  _expandContextForScopeMatching(t) {
    if (t.scope.nodeType !== 1) return t;
    const n = _e(t.scope);
    return n
      ? { ...t, scope: n, originalScope: t.originalScope || t.scope }
      : t;
  }
  _matchesSimple(t, n, r) {
    return this._cached(
      this._cacheMatchesSimple,
      t,
      [n, r.scope, r.pierceShadow, r.originalScope],
      () => {
        if (t === r.scope || (n.css && !this._matchesCSS(t, n.css))) return !1;
        for (const i of n.functions)
          if (!this._matchesEngine(this._getEngine(i.name), t, i.args, r))
            return !1;
        return !0;
      }
    );
  }
  _querySimple(t, n) {
    return n.functions.length
      ? this._cached(
          this._cacheQuerySimple,
          n,
          [t.scope, t.pierceShadow, t.originalScope],
          () => {
            let r = n.css;
            const i = n.functions;
            r === '*' && i.length && (r = void 0);
            let o,
              s = -1;
            r !== void 0
              ? (o = this._queryCSS(t, r))
              : ((s = i.findIndex(
                  (l) => this._getEngine(l.name).query !== void 0
                )),
                s === -1 && (s = 0),
                (o = this._queryEngine(
                  this._getEngine(i[s].name),
                  t,
                  i[s].args
                )));
            for (let l = 0; l < i.length; l++) {
              if (l === s) continue;
              const a = this._getEngine(i[l].name);
              a.matches !== void 0 &&
                (o = o.filter((u) => this._matchesEngine(a, u, i[l].args, t)));
            }
            for (let l = 0; l < i.length; l++) {
              if (l === s) continue;
              const a = this._getEngine(i[l].name);
              a.matches === void 0 &&
                (o = o.filter((u) => this._matchesEngine(a, u, i[l].args, t)));
            }
            return o;
          }
        )
      : this._queryCSS(t, n.css || '*');
  }
  _matchesParents(t, n, r, i) {
    return r < 0
      ? !0
      : this._cached(
          this._cacheMatchesParents,
          t,
          [n, r, i.scope, i.pierceShadow, i.originalScope],
          () => {
            const { selector: o, combinator: s } = n.simples[r];
            if (s === '>') {
              const l = Si(t, i);
              return !l || !this._matchesSimple(l, o, i)
                ? !1
                : this._matchesParents(l, n, r - 1, i);
            }
            if (s === '+') {
              const l = _s(t, i);
              return !l || !this._matchesSimple(l, o, i)
                ? !1
                : this._matchesParents(l, n, r - 1, i);
            }
            if (s === '') {
              let l = Si(t, i);
              for (; l; ) {
                if (this._matchesSimple(l, o, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === '') break;
                }
                l = Si(l, i);
              }
              return !1;
            }
            if (s === '~') {
              let l = _s(t, i);
              for (; l; ) {
                if (this._matchesSimple(l, o, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === '~') break;
                }
                l = _s(l, i);
              }
              return !1;
            }
            if (s === '>=') {
              let l = t;
              for (; l; ) {
                if (this._matchesSimple(l, o, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === '') break;
                }
                l = Si(l, i);
              }
              return !1;
            }
            throw new Error(`Unsupported combinator "${s}"`);
          }
        );
  }
  _matchesEngine(t, n, r, i) {
    if (t.matches) return this._callMatches(t, n, r, i);
    if (t.query) return this._callQuery(t, r, i).includes(n);
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _queryEngine(t, n, r) {
    if (t.query) return this._callQuery(t, r, n);
    if (t.matches)
      return this._queryCSS(n, '*').filter((i) =>
        this._callMatches(t, i, r, n)
      );
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _callMatches(t, n, r, i) {
    return this._cached(
      this._cacheCallMatches,
      n,
      [t, i.scope, i.pierceShadow, i.originalScope, ...r],
      () => t.matches(n, r, i, this)
    );
  }
  _callQuery(t, n, r) {
    return this._cached(
      this._cacheCallQuery,
      t,
      [r.scope, r.pierceShadow, r.originalScope, ...n],
      () => t.query(r, n, this)
    );
  }
  _matchesCSS(t, n) {
    return t.matches(n);
  }
  _queryCSS(t, n) {
    return this._cached(
      this._cacheQueryCSS,
      n,
      [t.scope, t.pierceShadow, t.originalScope],
      () => {
        let r = [];
        function i(o) {
          if (((r = r.concat([...o.querySelectorAll(n)])), !!t.pierceShadow)) {
            o.shadowRoot && i(o.shadowRoot);
            for (const s of o.querySelectorAll('*'))
              s.shadowRoot && i(s.shadowRoot);
          }
        }
        return i(t.scope), r;
      }
    );
  }
  _getEngine(t) {
    const n = this._engines.get(t);
    if (!n) throw new Error(`Unknown selector engine "${t}"`);
    return n;
  }
}
const _r = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      return t.some((i) => r.matches(e, i, n));
    },
    query(e, t, n) {
      if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      let r = [];
      for (const i of t) r = r.concat(n.query(e, i));
      return t.length === 1 ? r : lp(r);
    },
  },
  Ey = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"has" engine expects non-empty selector list');
      return r.query({ ...n, scope: e }, t).length > 0;
    },
  },
  Ty = {
    matches(e, t, n, r) {
      if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      const i = n.originalScope || n.scope;
      return i.nodeType === 9 ? e === i.documentElement : e === i;
    },
    query(e, t, n) {
      if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      const r = e.originalScope || e.scope;
      if (r.nodeType === 9) {
        const i = r.documentElement;
        return i ? [i] : [];
      }
      return r.nodeType === 1 ? [r] : [];
    },
  },
  ky = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"not" engine expects non-empty selector list');
      return !r.matches(e, t, n);
    },
  },
  Cy = {
    query(e, t, n) {
      return n.query({ ...e, pierceShadow: !1 }, t);
    },
    matches(e, t, n, r) {
      return r.matches(e, t, { ...n, pierceShadow: !1 });
    },
  },
  Ny = {
    matches(e, t, n, r) {
      if (t.length) throw new Error('"visible" engine expects no arguments');
      return tn(e);
    },
  },
  by = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != 'string')
        throw new Error('"text" engine expects a single string');
      const i = De(t[0]).toLowerCase(),
        o = (s) => s.normalized.toLowerCase().includes(i);
      return qo(r._cacheText, e, o) === 'self';
    },
  },
  Ay = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != 'string')
        throw new Error('"text-is" engine expects a single string');
      const i = De(t[0]),
        o = (s) =>
          !i && !s.immediate.length ? !0 : s.immediate.some((l) => De(l) === i);
      return qo(r._cacheText, e, o) !== 'none';
    },
  },
  Ly = {
    matches(e, t, n, r) {
      if (
        t.length === 0 ||
        typeof t[0] != 'string' ||
        t.length > 2 ||
        (t.length === 2 && typeof t[1] != 'string')
      )
        throw new Error(
          '"text-matches" engine expects a regexp body and optional regexp flags'
        );
      const i = new RegExp(t[0], t.length === 2 ? t[1] : void 0),
        o = (s) => i.test(s.full);
      return qo(r._cacheText, e, o) === 'self';
    },
  },
  Iy = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != 'string')
        throw new Error('"has-text" engine expects a single string');
      if (Fa(e)) return !1;
      const i = De(t[0]).toLowerCase();
      return ((s) => s.normalized.toLowerCase().includes(i))(
        Ae(r._cacheText, e)
      );
    },
  };
function hr(e) {
  return {
    matches(t, n, r, i) {
      const o =
          n.length && typeof n[n.length - 1] == 'number'
            ? n[n.length - 1]
            : void 0,
        s = o === void 0 ? n : n.slice(0, n.length - 1);
      if (n.length < 1 + (o === void 0 ? 0 : 1))
        throw new Error(
          `"${e}" engine expects a selector list and optional maximum distance in pixels`
        );
      const l = i.query(r, s),
        a = sp(e, t, l, o);
      return a === void 0 ? !1 : (i._markScore(t, a), !0);
    },
  };
}
const My = {
  query(e, t, n) {
    let r = t[t.length - 1];
    if (t.length < 2)
      throw new Error(
        '"nth-match" engine expects non-empty selector list and an index argument'
      );
    if (typeof r != 'number' || r < 1)
      throw new Error(
        '"nth-match" engine expects a one-based index as the last argument'
      );
    const i = _r.query(e, t.slice(0, t.length - 1), n);
    return r--, r < i.length ? [i[r]] : [];
  },
};
function Si(e, t) {
  if (e !== t.scope) return t.pierceShadow ? _e(e) : e.parentElement || void 0;
}
function _s(e, t) {
  if (e !== t.scope) return e.previousElementSibling || void 0;
}
function lp(e) {
  const t = new Map(),
    n = [],
    r = [];
  function i(s) {
    let l = t.get(s);
    if (l) return l;
    const a = _e(s);
    return (
      a ? i(a).children.push(s) : n.push(s),
      (l = { children: [], taken: !1 }),
      t.set(s, l),
      l
    );
  }
  for (const s of e) i(s).taken = !0;
  function o(s) {
    const l = t.get(s);
    if ((l.taken && r.push(s), l.children.length > 1)) {
      const a = new Set(l.children);
      l.children = [];
      let u = s.firstElementChild;
      for (; u && l.children.length < a.size; )
        a.has(u) && l.children.push(u), (u = u.nextElementSibling);
      for (
        u = s.shadowRoot ? s.shadowRoot.firstElementChild : null;
        u && l.children.length < a.size;

      )
        a.has(u) && l.children.push(u), (u = u.nextElementSibling);
    }
    l.children.forEach(o);
  }
  return n.forEach(o), r;
}
const Al = new Map(),
  Ll = new Map(),
  ap = 10,
  Zn = ap / 2,
  xc = 1,
  Py = 2,
  Ry = 10,
  $y = 50,
  up = 100,
  cp = 120,
  dp = 140,
  fp = 160,
  Il = 180,
  hp = 200,
  Oy = 250,
  jy = up + Zn,
  Dy = cp + Zn,
  zy = dp + Zn,
  Fy = fp + Zn,
  Hy = Il + Zn,
  Uy = hp + Zn,
  Vy = 300,
  By = 500,
  qy = 510,
  Ss = 520,
  pp = 530,
  gp = 1e4,
  Wy = 1e7,
  Qy = 1e3;
function _c(e, t, n) {
  e._evaluator.begin(), Da();
  try {
    let r = [];
    if (n.forTextExpect) {
      let s = Ei(e, t.ownerDocument.documentElement, n);
      for (let l = t; l; l = _e(l)) {
        const a = yn(e, l, { ...n, noText: !0 });
        if (!a) continue;
        if (bt(a) <= Qy) {
          s = a;
          break;
        }
      }
      r = [qi(s)];
    } else {
      if (!t.matches('input,textarea,select') && !t.isContentEditable) {
        const s = xr(
          t,
          'button,select,input,[role=button],[role=checkbox],[role=radio],a,[role=link]',
          n.root
        );
        s && tn(s) && (t = s);
      }
      if (n.multiple) {
        const s = yn(e, t, n),
          l = yn(e, t, { ...n, noText: !0 });
        let a = [s, l];
        if (
          (Al.clear(),
          Ll.clear(),
          s && Es(s) && a.push(yn(e, t, { ...n, noCSSId: !0 })),
          l && Es(l) && a.push(yn(e, t, { ...n, noText: !0, noCSSId: !0 })),
          (a = a.filter(Boolean)),
          !a.length)
        ) {
          const u = Ei(e, t, n);
          a.push(u), Es(u) && a.push(Ei(e, t, { ...n, noCSSId: !0 }));
        }
        r = [...new Set(a.map((u) => qi(u)))];
      } else {
        const s = yn(e, t, n) || Ei(e, t, n);
        r = [qi(s)];
      }
    }
    const i = r[0],
      o = e.parseSelector(i);
    return {
      selector: i,
      selectors: r,
      elements: e.querySelectorAll(o, n.root ?? t.ownerDocument),
    };
  } finally {
    Al.clear(), Ll.clear(), za(), e._evaluator.end();
  }
}
function Sc(e) {
  return e.filter((t) => t[0].selector[0] !== '/');
}
function yn(e, t, n) {
  if (n.root && !Bo(n.root, t))
    throw new Error("Target element must belong to the root's subtree");
  if (t === n.root) return [{ engine: 'css', selector: ':scope', score: 1 }];
  if (t.ownerDocument.documentElement === t)
    return [{ engine: 'css', selector: 'html', score: 1 }];
  const r = (o, s) => {
      const l = o === t;
      let a = s ? Gy(e, o, o === t) : [];
      o !== t && (a = Sc(a));
      const u = Ky(e, o, n)
        .filter(
          (d) => !n.omitInternalEngines || !d.engine.startsWith('internal:')
        )
        .map((d) => [d]);
      let c = Ec(e, n.root ?? t.ownerDocument, o, [...a, ...u], l);
      a = Sc(a);
      const f = (d) => {
        const g = s && !d.length,
          y = [...d, ...u].filter((w) => (c ? bt(w) < bt(c) : !0));
        let v = y[0];
        if (v)
          for (let w = _e(o); w && w !== n.root; w = _e(w)) {
            const p = i(w, g);
            if (!p || (c && bt([...p, ...v]) >= bt(c))) continue;
            if (((v = Ec(e, w, o, y, l)), !v)) return;
            const h = [...p, ...v];
            (!c || bt(h) < bt(c)) && (c = h);
          }
      };
      return f(a), o === t && a.length && f([]), c;
    },
    i = (o, s) => {
      const l = s ? Al : Ll;
      let a = l.get(o);
      return a === void 0 && ((a = r(o, s)), l.set(o, a)), a;
    };
  return r(t, !n.noText);
}
function Ky(e, t, n) {
  const r = [];
  {
    for (const s of ['data-testid', 'data-test-id', 'data-test'])
      s !== n.testIdAttributeName &&
        t.getAttribute(s) &&
        r.push({
          engine: 'css',
          selector: `[${s}=${cr(t.getAttribute(s))}]`,
          score: Py,
        });
    if (!n.noCSSId) {
      const s = t.getAttribute('id');
      s && !Xy(s) && r.push({ engine: 'css', selector: mp(s), score: By });
    }
    r.push({
      engine: 'css',
      selector: Ve(t.nodeName.toLowerCase()),
      score: pp,
    });
  }
  if (t.nodeName === 'IFRAME') {
    for (const s of ['name', 'title'])
      t.getAttribute(s) &&
        r.push({
          engine: 'css',
          selector: `${Ve(t.nodeName.toLowerCase())}[${s}=${cr(t.getAttribute(s))}]`,
          score: Ry,
        });
    return (
      t.getAttribute(n.testIdAttributeName) &&
        r.push({
          engine: 'css',
          selector: `[${n.testIdAttributeName}=${cr(t.getAttribute(n.testIdAttributeName))}]`,
          score: xc,
        }),
      Ml([r]),
      r
    );
  }
  if (
    (t.getAttribute(n.testIdAttributeName) &&
      r.push({
        engine: 'internal:testid',
        selector: `[${n.testIdAttributeName}=${xe(t.getAttribute(n.testIdAttributeName), !0)}]`,
        score: xc,
      }),
    t.nodeName === 'INPUT' || t.nodeName === 'TEXTAREA')
  ) {
    const s = t;
    if (s.placeholder) {
      r.push({
        engine: 'internal:attr',
        selector: `[placeholder=${xe(s.placeholder, !0)}]`,
        score: jy,
      });
      for (const l of Mn(s.placeholder))
        r.push({
          engine: 'internal:attr',
          selector: `[placeholder=${xe(l.text, !1)}]`,
          score: up - l.scoreBouns,
        });
    }
  }
  const i = Yh(e._evaluator._cacheText, t);
  for (const s of i) {
    const l = s.normalized;
    r.push({ engine: 'internal:label', selector: qe(l, !0), score: Dy });
    for (const a of Mn(l))
      r.push({
        engine: 'internal:label',
        selector: qe(a.text, !1),
        score: cp - a.scoreBouns,
      });
  }
  const o = Ee(t);
  return (
    o &&
      !['none', 'presentation'].includes(o) &&
      r.push({ engine: 'internal:role', selector: o, score: qy }),
    t.getAttribute('name') &&
      [
        'BUTTON',
        'FORM',
        'FIELDSET',
        'FRAME',
        'IFRAME',
        'INPUT',
        'KEYGEN',
        'OBJECT',
        'OUTPUT',
        'SELECT',
        'TEXTAREA',
        'MAP',
        'META',
        'PARAM',
      ].includes(t.nodeName) &&
      r.push({
        engine: 'css',
        selector: `${Ve(t.nodeName.toLowerCase())}[name=${cr(t.getAttribute('name'))}]`,
        score: Ss,
      }),
    ['INPUT', 'TEXTAREA'].includes(t.nodeName) &&
      t.getAttribute('type') !== 'hidden' &&
      t.getAttribute('type') &&
      r.push({
        engine: 'css',
        selector: `${Ve(t.nodeName.toLowerCase())}[type=${cr(t.getAttribute('type'))}]`,
        score: Ss,
      }),
    ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.nodeName) &&
      t.getAttribute('type') !== 'hidden' &&
      r.push({
        engine: 'css',
        selector: Ve(t.nodeName.toLowerCase()),
        score: Ss + 1,
      }),
    Ml([r]),
    r
  );
}
function Gy(e, t, n) {
  if (t.nodeName === 'SELECT') return [];
  const r = [],
    i = t.getAttribute('title');
  if (i) {
    r.push([
      { engine: 'internal:attr', selector: `[title=${xe(i, !0)}]`, score: Uy },
    ]);
    for (const a of Mn(i))
      r.push([
        {
          engine: 'internal:attr',
          selector: `[title=${xe(a.text, !1)}]`,
          score: hp - a.scoreBouns,
        },
      ]);
  }
  const o = t.getAttribute('alt');
  if (o && ['APPLET', 'AREA', 'IMG', 'INPUT'].includes(t.nodeName)) {
    r.push([
      { engine: 'internal:attr', selector: `[alt=${xe(o, !0)}]`, score: Fy },
    ]);
    for (const a of Mn(o))
      r.push([
        {
          engine: 'internal:attr',
          selector: `[alt=${xe(a.text, !1)}]`,
          score: fp - a.scoreBouns,
        },
      ]);
  }
  const s = Ae(e._evaluator._cacheText, t).normalized;
  if (s) {
    const a = Mn(s);
    if (n) {
      s.length <= 80 &&
        r.push([{ engine: 'internal:text', selector: qe(s, !0), score: Hy }]);
      for (const c of a)
        r.push([
          {
            engine: 'internal:text',
            selector: qe(c.text, !1),
            score: Il - c.scoreBouns,
          },
        ]);
    }
    const u = {
      engine: 'css',
      selector: Ve(t.nodeName.toLowerCase()),
      score: pp,
    };
    for (const c of a)
      r.push([
        u,
        {
          engine: 'internal:has-text',
          selector: qe(c.text, !1),
          score: Il - c.scoreBouns,
        },
      ]);
    if (s.length <= 80) {
      const c = new RegExp('^' + Sv(s) + '$');
      r.push([
        u,
        { engine: 'internal:has-text', selector: qe(c, !1), score: Oy },
      ]);
    }
  }
  const l = Ee(t);
  if (l && !['none', 'presentation'].includes(l)) {
    const a = So(t, !1);
    if (a) {
      r.push([
        {
          engine: 'internal:role',
          selector: `${l}[name=${xe(a, !0)}]`,
          score: zy,
        },
      ]);
      for (const u of Mn(a))
        r.push([
          {
            engine: 'internal:role',
            selector: `${l}[name=${xe(u.text, !1)}]`,
            score: dp - u.scoreBouns,
          },
        ]);
    }
  }
  return Ml(r), r;
}
function mp(e) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(e) ? '#' + e : `[id="${Ve(e)}"]`;
}
function Es(e) {
  return e.some(
    (t) =>
      t.engine === 'css' &&
      (t.selector.startsWith('#') || t.selector.startsWith('[id="'))
  );
}
function Ei(e, t, n) {
  const r = n.root ?? t.ownerDocument,
    i = [];
  function o(l) {
    const a = i.slice();
    l && a.unshift(l);
    const u = a.join(' > '),
      c = e.parseSelector(u);
    return e.querySelector(c, r, !1) === t ? u : void 0;
  }
  function s(l) {
    const a = { engine: 'css', selector: l, score: Wy },
      u = e.parseSelector(l),
      c = e.querySelectorAll(u, r);
    if (c.length === 1) return [a];
    const f = { engine: 'nth', selector: String(c.indexOf(t)), score: gp };
    return [a, f];
  }
  for (let l = t; l && l !== r; l = _e(l)) {
    const a = l.nodeName.toLowerCase();
    let u = '';
    if (l.id && !n.noCSSId) {
      const d = mp(l.id),
        g = o(d);
      if (g) return s(g);
      u = d;
    }
    const c = l.parentNode,
      f = [...l.classList];
    for (let d = 0; d < f.length; ++d) {
      const g = '.' + Ve(f.slice(0, d + 1).join('.')),
        y = o(g);
      if (y) return s(y);
      !u && c && c.querySelectorAll(g).length === 1 && (u = g);
    }
    if (c) {
      const d = [...c.children],
        y =
          d.filter((w) => w.nodeName.toLowerCase() === a).indexOf(l) === 0
            ? Ve(a)
            : `${Ve(a)}:nth-child(${1 + d.indexOf(l)})`,
        v = o(y);
      if (v) return s(v);
      u || (u = y);
    } else u || (u = Ve(a));
    i.unshift(u);
  }
  return s(o());
}
function Ml(e) {
  for (const t of e)
    for (const n of t)
      n.score > $y &&
        n.score < Vy &&
        (n.score += Math.min(ap, (n.selector.length / 10) | 0));
}
function qi(e) {
  const t = [];
  let n = '';
  for (const { engine: r, selector: i } of e)
    t.length &&
      (n !== 'css' || r !== 'css' || i.startsWith(':nth-match(')) &&
      t.push('>>'),
      (n = r),
      r === 'css' ? t.push(i) : t.push(`${r}=${i}`);
  return t.join(' ');
}
function bt(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n].score * (e.length - n);
  return t;
}
function Ec(e, t, n, r, i) {
  const o = r.map((l) => ({ tokens: l, score: bt(l) }));
  o.sort((l, a) => l.score - a.score);
  let s = null;
  for (const { tokens: l } of o) {
    const a = e.parseSelector(qi(l)),
      u = e.querySelectorAll(a, t);
    if (u[0] === n && u.length === 1) return l;
    const c = u.indexOf(n);
    if (!i || s || c === -1 || u.length > 5) continue;
    const f = { engine: 'nth', selector: String(c), score: gp };
    s = [...l, f];
  }
  return s;
}
function Xy(e) {
  let t,
    n = 0;
  for (let r = 0; r < e.length; ++r) {
    const i = e[r];
    let o;
    if (!(i === '-' || i === '_')) {
      if (
        (i >= 'a' && i <= 'z'
          ? (o = 'lower')
          : i >= 'A' && i <= 'Z'
            ? (o = 'upper')
            : i >= '0' && i <= '9'
              ? (o = 'digit')
              : (o = 'other'),
        o === 'lower' && t === 'upper')
      ) {
        t = o;
        continue;
      }
      t && t !== o && ++n, (t = o);
    }
  }
  return n >= e.length / 4;
}
function Ti(e, t) {
  if (e.length <= t) return e;
  e = e.substring(0, t);
  const n = e.match(/^(.*)\b(.+?)$/);
  return n ? n[1].trimEnd() : '';
}
function Mn(e) {
  let t = [];
  {
    const n = e.match(/^([\d.,]+)[^.,\w]/),
      r = n ? n[1].length : 0;
    if (r) {
      const i = Ti(e.substring(r).trimStart(), 80);
      t.push({ text: i, scoreBouns: i.length <= 30 ? 2 : 1 });
    }
  }
  {
    const n = e.match(/[^.,\w]([\d.,]+)$/),
      r = n ? n[1].length : 0;
    if (r) {
      const i = Ti(e.substring(0, e.length - r).trimEnd(), 80);
      t.push({ text: i, scoreBouns: i.length <= 30 ? 2 : 1 });
    }
  }
  return (
    e.length <= 30
      ? t.push({ text: e, scoreBouns: 0 })
      : (t.push({ text: Ti(e, 80), scoreBouns: 0 }),
        t.push({ text: Ti(e, 30), scoreBouns: 1 })),
    (t = t.filter((n) => n.text)),
    t.length || t.push({ text: e.substring(0, 80), scoreBouns: 0 }),
    t
  );
}
const Tc =
  ':host{font-size:13px;font-family:system-ui,Ubuntu,Droid Sans,sans-serif;color:#333}svg{position:absolute;height:0}x-pw-tooltip{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:#fff;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:none;font-size:12.8px;font-weight:400;left:0;line-height:1.5;max-width:600px;position:absolute;top:0;padding:0;flex-direction:column;overflow:hidden}x-pw-tooltip-line{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;cursor:pointer}x-pw-tooltip-line.selectable:hover{background-color:#f2f2f2;overflow:hidden}x-pw-tooltip-footer{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;color:#777}x-pw-dialog{background-color:#fff;pointer-events:auto;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:flex;flex-direction:column;position:absolute;width:400px;height:150px;z-index:10;font-size:13px}x-pw-dialog-body{display:flex;flex-direction:column;flex:auto}x-pw-dialog-body label{margin:5px 8px;display:flex;flex-direction:row;align-items:center}x-pw-highlight{position:absolute;top:0;left:0;width:0;height:0}x-pw-action-point{position:absolute;width:20px;height:20px;background:red;border-radius:10px;margin:-10px 0 0 -10px;z-index:2}x-pw-separator{height:1px;margin:6px 9px;background:#949494e5}x-pw-tool-gripper{height:28px;width:24px;margin:2px 0;cursor:grab}x-pw-tool-gripper:active{cursor:grabbing}x-pw-tool-gripper>x-div{width:16px;height:16px;margin:6px 4px;clip-path:url(#icon-gripper);background-color:#555}x-pw-tools-list>label{display:flex;align-items:center;margin:0 10px;-webkit-user-select:none;user-select:none}x-pw-tools-list{display:flex;width:100%;border-bottom:1px solid #dddddd}x-pw-tool-item{pointer-events:auto;cursor:pointer;height:28px;width:28px;border-radius:3px}x-pw-tool-item:not(.disabled):hover{background-color:#dbdbdb}x-pw-tool-item.active{background-color:#8acae480}x-pw-tool-item.active:not(.disabled):hover{background-color:#8acae4c4}x-pw-tool-item>x-div{width:16px;height:16px;margin:6px;background-color:#3a3a3a}x-pw-tool-item.disabled>x-div{background-color:#61616180;cursor:default}x-pw-tool-item.record.active{background-color:transparent}x-pw-tool-item.record.active:hover{background-color:#dbdbdb}x-pw-tool-item.record.active>x-div{background-color:#a1260d}x-pw-tool-item.accept>x-div{background-color:#388a34}x-pw-tool-item.record>x-div{clip-path:url(#icon-circle-large-filled)}x-pw-tool-item.pick-locator>x-div{clip-path:url(#icon-inspect)}x-pw-tool-item.text>x-div{clip-path:url(#icon-whole-word)}x-pw-tool-item.visibility>x-div{clip-path:url(#icon-eye)}x-pw-tool-item.value>x-div{clip-path:url(#icon-symbol-constant)}x-pw-tool-item.accept>x-div{clip-path:url(#icon-check)}x-pw-tool-item.cancel>x-div{clip-path:url(#icon-close)}x-pw-tool-item.succeeded>x-div{clip-path:url(#icon-pass);background-color:#388a34!important}x-pw-overlay{position:absolute;top:0;max-width:min-content;z-index:2147483647;background:transparent;pointer-events:auto}x-pw-overlay x-pw-tools-list{background-color:#fffd;box-shadow:#0000001a 0 5px 5px;border-radius:3px;border-bottom:none}x-pw-overlay x-pw-tool-item{margin:2px}textarea.text-editor{font-family:system-ui,Ubuntu,Droid Sans,sans-serif;flex:auto;border:none;margin:6px 10px;color:#333;outline:1px solid transparent!important;resize:none;padding:0;font-size:13px}textarea.text-editor.does-not-match{outline:1px solid red!important}x-div{display:block}x-spacer{flex:auto}*{box-sizing:border-box}*[hidden]{display:none!important}x-locator-editor{flex:none;width:100%;height:60px;padding:4px;border-bottom:1px solid #dddddd;outline:1px solid transparent}x-locator-editor.does-not-match{outline:1px solid red}.CodeMirror{width:100%!important;height:100%!important}';
class Ts {
  constructor(t) {
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._language = 'javascript'),
      (this._injectedScript = t);
    const n = t.document;
    (this._isUnderTest = t.isUnderTest),
      (this._glassPaneElement = n.createElement('x-pw-glass')),
      (this._glassPaneElement.style.position = 'fixed'),
      (this._glassPaneElement.style.top = '0'),
      (this._glassPaneElement.style.right = '0'),
      (this._glassPaneElement.style.bottom = '0'),
      (this._glassPaneElement.style.left = '0'),
      (this._glassPaneElement.style.zIndex = '2147483646'),
      (this._glassPaneElement.style.pointerEvents = 'none'),
      (this._glassPaneElement.style.display = 'flex'),
      (this._glassPaneElement.style.backgroundColor = 'transparent');
    for (const r of [
      'click',
      'auxclick',
      'dragstart',
      'input',
      'keydown',
      'keyup',
      'pointerdown',
      'pointerup',
      'mousedown',
      'mouseup',
      'mouseleave',
      'focus',
      'scroll',
    ])
      this._glassPaneElement.addEventListener(r, (i) => {
        i.stopPropagation(),
          i.stopImmediatePropagation(),
          i.type === 'click' &&
            i.button === 0 &&
            this._highlightOptions.tooltipListItemSelected &&
            this._highlightOptions.tooltipListItemSelected(void 0);
      });
    if (
      ((this._actionPointElement = n.createElement('x-pw-action-point')),
      this._actionPointElement.setAttribute('hidden', 'true'),
      (this._glassPaneShadow = this._glassPaneElement.attachShadow({
        mode: this._isUnderTest ? 'open' : 'closed',
      })),
      typeof this._glassPaneShadow.adoptedStyleSheets.push == 'function')
    ) {
      const r = new this._injectedScript.window.CSSStyleSheet();
      r.replaceSync(Tc), this._glassPaneShadow.adoptedStyleSheets.push(r);
    } else {
      const r = this._injectedScript.document.createElement('style');
      (r.textContent = Tc), this._glassPaneShadow.appendChild(r);
    }
    this._glassPaneShadow.appendChild(this._actionPointElement);
  }
  install() {
    this._injectedScript.document.documentElement.contains(
      this._glassPaneElement
    ) ||
      this._injectedScript.document.documentElement.appendChild(
        this._glassPaneElement
      );
  }
  setLanguage(t) {
    this._language = t;
  }
  runHighlightOnRaf(t) {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this.updateHighlight(
        this._injectedScript.querySelectorAll(
          t,
          this._injectedScript.document.documentElement
        ),
        { tooltipText: zn(this._language, fn(t)) }
      ),
      (this._rafRequest = this._injectedScript.builtinRequestAnimationFrame(
        () => this.runHighlightOnRaf(t)
      ));
  }
  uninstall() {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this._glassPaneElement.remove();
  }
  showActionPoint(t, n) {
    (this._actionPointElement.style.top = n + 'px'),
      (this._actionPointElement.style.left = t + 'px'),
      (this._actionPointElement.hidden = !1);
  }
  hideActionPoint() {
    this._actionPointElement.hidden = !0;
  }
  clearHighlight() {
    var t, n;
    for (const r of this._highlightEntries)
      (t = r.highlightElement) == null || t.remove(),
        (n = r.tooltipElement) == null || n.remove();
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._glassPaneElement.style.pointerEvents = 'none');
  }
  updateHighlight(t, n) {
    this._innerUpdateHighlight(t, n);
  }
  maskElements(t, n) {
    this._innerUpdateHighlight(t, { color: n });
  }
  _innerUpdateHighlight(t, n) {
    let r = n.color;
    if (
      (r || (r = t.length > 1 ? '#f6b26b7f' : '#6fa8dc7f'),
      !this._highlightIsUpToDate(t, n))
    ) {
      this.clearHighlight(),
        (this._highlightOptions = n),
        (this._glassPaneElement.style.pointerEvents = n.tooltipListItemSelected
          ? 'initial'
          : 'none');
      for (let i = 0; i < t.length; ++i) {
        const o = this._createHighlightElement();
        this._glassPaneShadow.appendChild(o);
        let s;
        if (n.tooltipList || n.tooltipText || n.tooltipFooter) {
          (s = this._injectedScript.document.createElement('x-pw-tooltip')),
            this._glassPaneShadow.appendChild(s),
            (s.style.top = '0'),
            (s.style.left = '0'),
            (s.style.display = 'flex');
          let l = [];
          if (n.tooltipList) l = n.tooltipList;
          else if (n.tooltipText) {
            const a = t.length > 1 ? ` [${i + 1} of ${t.length}]` : '';
            l = [n.tooltipText + a];
          }
          for (let a = 0; a < l.length; a++) {
            const u =
              this._injectedScript.document.createElement('x-pw-tooltip-line');
            (u.textContent = l[a]),
              s.appendChild(u),
              n.tooltipListItemSelected &&
                (u.classList.add('selectable'),
                u.addEventListener('click', () => {
                  var c;
                  return (c = n.tooltipListItemSelected) == null
                    ? void 0
                    : c.call(n, a);
                }));
          }
          if (n.tooltipFooter) {
            const a = this._injectedScript.document.createElement(
              'x-pw-tooltip-footer'
            );
            (a.textContent = n.tooltipFooter), s.appendChild(a);
          }
        }
        this._highlightEntries.push({
          targetElement: t[i],
          tooltipElement: s,
          highlightElement: o,
        });
      }
      for (const i of this._highlightEntries) {
        if (
          ((i.box = i.targetElement.getBoundingClientRect()), !i.tooltipElement)
        )
          continue;
        const { anchorLeft: o, anchorTop: s } = this.tooltipPosition(
          i.box,
          i.tooltipElement
        );
        (i.tooltipTop = s), (i.tooltipLeft = o);
      }
      for (const i of this._highlightEntries) {
        i.tooltipElement &&
          ((i.tooltipElement.style.top = i.tooltipTop + 'px'),
          (i.tooltipElement.style.left = i.tooltipLeft + 'px'));
        const o = i.box;
        (i.highlightElement.style.backgroundColor = r),
          (i.highlightElement.style.left = o.x + 'px'),
          (i.highlightElement.style.top = o.y + 'px'),
          (i.highlightElement.style.width = o.width + 'px'),
          (i.highlightElement.style.height = o.height + 'px'),
          (i.highlightElement.style.display = 'block'),
          this._isUnderTest &&
            console.error(
              'Highlight box for test: ' +
                JSON.stringify({
                  x: o.x,
                  y: o.y,
                  width: o.width,
                  height: o.height,
                })
            );
      }
    }
  }
  firstBox() {
    var t;
    return (t = this._highlightEntries[0]) == null ? void 0 : t.box;
  }
  tooltipPosition(t, n) {
    const r = n.offsetWidth,
      i = n.offsetHeight,
      o = this._glassPaneElement.offsetWidth,
      s = this._glassPaneElement.offsetHeight;
    let l = t.left;
    l + r > o - 5 && (l = o - r - 5);
    let a = t.bottom + 5;
    return (
      a + i > s - 5 && (t.top > i + 5 ? (a = t.top - i - 5) : (a = s - 5 - i)),
      { anchorLeft: l, anchorTop: a }
    );
  }
  _highlightIsUpToDate(t, n) {
    var r, i;
    if (
      n.tooltipText !== this._highlightOptions.tooltipText ||
      n.tooltipListItemSelected !==
        this._highlightOptions.tooltipListItemSelected ||
      n.tooltipFooter !== this._highlightOptions.tooltipFooter ||
      ((r = n.tooltipList) == null ? void 0 : r.length) !==
        ((i = this._highlightOptions.tooltipList) == null ? void 0 : i.length)
    )
      return !1;
    if (n.tooltipList && this._highlightOptions.tooltipList) {
      for (let o = 0; o < n.tooltipList.length; o++)
        if (n.tooltipList[o] !== this._highlightOptions.tooltipList[o])
          return !1;
    }
    if (t.length !== this._highlightEntries.length) return !1;
    for (let o = 0; o < this._highlightEntries.length; ++o) {
      if (t[o] !== this._highlightEntries[o].targetElement) return !1;
      const s = this._highlightEntries[o].box;
      if (!s) return !1;
      const l = t[o].getBoundingClientRect();
      if (
        l.top !== s.top ||
        l.right !== s.right ||
        l.bottom !== s.bottom ||
        l.left !== s.left
      )
        return !1;
    }
    return !0;
  }
  _createHighlightElement() {
    return this._injectedScript.document.createElement('x-pw-highlight');
  }
  appendChild(t) {
    this._glassPaneShadow.appendChild(t);
  }
}
const Yy = new Set(['button', 'checkbox', 'combobox', 'link', 'textbox']);
let Wi;
function Jy(e, t) {
  return e1(e, t).node;
}
function Zy(e, t) {
  const n = Wi == null ? void 0 : Wi.elements.get(t);
  if (!n) throw new Error(`Internal error: element with id "${t}" not found`);
  return e.generateSelectorSimple(n);
}
function e1(e, t) {
  const n = (u) =>
      u.replace(/[\s\n]+/g, (c) =>
        c.includes(`
`)
          ? `
`
          : ' '
      ),
    r = [],
    i = new Map();
  let o = 0,
    s;
  const l = (u) => {
    if (u.nodeType === Node.TEXT_NODE) {
      r.push(u.nodeValue);
      return;
    }
    if (u.nodeType === Node.ELEMENT_NODE) {
      const c = u;
      if (
        c.nodeName === 'SCRIPT' ||
        c.nodeName === 'STYLE' ||
        c.nodeName === 'NOSCRIPT'
      )
        return;
      if (e.utils.isElementVisible(c)) {
        const f = e.utils.getAriaRole(c);
        if (f && Yy.has(f)) {
          let d;
          (c.nodeName === 'INPUT' || c.nodeName === 'TEXTAREA') &&
            (d = c.value);
          const g = e.utils.getElementAccessibleName(c, !1),
            y = String(++o);
          i.set(y, c),
            r.push(kc(e, f, g, y, { value: d })),
            c === t && (s = { tag: kc(e, f, g, y), id: y });
          return;
        }
      }
      for (let f = c.firstChild; f; f = f.nextSibling) l(f);
    }
  };
  e.utils.beginAriaCaches();
  try {
    l(e.document.body);
  } finally {
    e.utils.endAriaCaches();
  }
  const a = { markup: n(r.join(' ')), elements: i };
  if (t && !s) throw new Error('Target element is not in the simple DOM');
  return (Wi = a), { dom: a, node: s ? { dom: a, ...s } : void 0 };
}
function kc(e, t, n, r, i) {
  const o = e.utils.escapeHTML(n),
    s = e.utils.escapeHTMLAttribute((i == null ? void 0 : i.value) || '');
  switch (t) {
    case 'button':
      return `<button id="${r}">${o}</button>`;
    case 'link':
      return `<a id="${r}">${o}</a>`;
    case 'textbox':
      return `<input id="${r}" title="${o}" value="${s}"></input>`;
  }
  return `<div role=${t} id="${r}">${o}</div>`;
}
class vp {
  constructor(t, n, r, i, o, s, l) {
    (this.onGlobalListenersRemoved = new Set()),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen =
        'data-testid'),
      (this.utils = {
        asLocator: zn,
        beginAriaCaches: Da,
        cacheNormalizedWhitespaces: xv,
        elementText: Ae,
        endAriaCaches: za,
        escapeHTML: Tv,
        escapeHTMLAttribute: Ev,
        getAriaRole: Ee,
        getElementAccessibleDescription: vc,
        getElementAccessibleName: So,
        isElementVisible: tn,
        isInsideScope: Bo,
        normalizeWhiteSpace: De,
      }),
      (this.window = t),
      (this.document = t.document),
      (this.isUnderTest = n),
      (this._sdkLanguage = r),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen = i),
      (this._evaluator = new Sy(new Map())),
      (this._engines = new Map()),
      this._engines.set('xpath', dc),
      this._engines.set('xpath:light', dc),
      this._engines.set('_react', ay),
      this._engines.set('_vue', hy),
      this._engines.set('role', wc(!1)),
      this._engines.set('text', this._createTextEngine(!0, !1)),
      this._engines.set('text:light', this._createTextEngine(!1, !1)),
      this._engines.set('id', this._createAttributeEngine('id', !0)),
      this._engines.set('id:light', this._createAttributeEngine('id', !1)),
      this._engines.set(
        'data-testid',
        this._createAttributeEngine('data-testid', !0)
      ),
      this._engines.set(
        'data-testid:light',
        this._createAttributeEngine('data-testid', !1)
      ),
      this._engines.set(
        'data-test-id',
        this._createAttributeEngine('data-test-id', !0)
      ),
      this._engines.set(
        'data-test-id:light',
        this._createAttributeEngine('data-test-id', !1)
      ),
      this._engines.set(
        'data-test',
        this._createAttributeEngine('data-test', !0)
      ),
      this._engines.set(
        'data-test:light',
        this._createAttributeEngine('data-test', !1)
      ),
      this._engines.set('css', this._createCSSEngine()),
      this._engines.set('nth', { queryAll: () => [] }),
      this._engines.set('visible', this._createVisibleEngine()),
      this._engines.set('internal:control', this._createControlEngine()),
      this._engines.set('internal:has', this._createHasEngine()),
      this._engines.set('internal:has-not', this._createHasNotEngine()),
      this._engines.set('internal:and', { queryAll: () => [] }),
      this._engines.set('internal:or', { queryAll: () => [] }),
      this._engines.set('internal:chain', this._createInternalChainEngine()),
      this._engines.set('internal:label', this._createInternalLabelEngine()),
      this._engines.set('internal:text', this._createTextEngine(!0, !0)),
      this._engines.set(
        'internal:has-text',
        this._createInternalHasTextEngine()
      ),
      this._engines.set(
        'internal:has-not-text',
        this._createInternalHasNotTextEngine()
      ),
      this._engines.set('internal:attr', this._createNamedAttributeEngine()),
      this._engines.set('internal:testid', this._createNamedAttributeEngine()),
      this._engines.set('internal:role', wc(!0));
    for (const { name: a, engine: u } of l) this._engines.set(a, u);
    (this._stableRafCount = o),
      (this._browserName = s),
      U0(s),
      this._setupGlobalListenersRemovalDetection(),
      this._setupHitTargetInterceptors(),
      n && (this.window.__injectedScript = this);
  }
  builtinSetTimeout(t, n) {
    var r;
    return (r = this.window.__pwClock) != null && r.builtin
      ? this.window.__pwClock.builtin.setTimeout(t, n)
      : setTimeout(t, n);
  }
  builtinRequestAnimationFrame(t) {
    var n;
    return (n = this.window.__pwClock) != null && n.builtin
      ? this.window.__pwClock.builtin.requestAnimationFrame(t)
      : requestAnimationFrame(t);
  }
  eval(t) {
    return this.window.eval(t);
  }
  testIdAttributeNameForStrictErrorAndConsoleCodegen() {
    return this._testIdAttributeNameForStrictErrorAndConsoleCodegen;
  }
  parseSelector(t) {
    const n = Uo(t);
    return (
      Vv(n, (r) => {
        if (!this._engines.has(r.name))
          throw this.createStacklessError(
            `Unknown engine "${r.name}" while parsing selector ${t}`
          );
      }),
      n
    );
  }
  generateSelector(t, n) {
    return _c(this, t, n);
  }
  generateSelectorSimple(t, n) {
    return _c(this, t, {
      ...n,
      testIdAttributeName:
        this._testIdAttributeNameForStrictErrorAndConsoleCodegen,
    }).selector;
  }
  querySelector(t, n, r) {
    const i = this.querySelectorAll(t, n);
    if (r && i.length > 1) throw this.strictModeViolationError(t, i);
    return i[0];
  }
  _queryNth(t, n) {
    const r = [...t];
    let i = +n.body;
    return i === -1 && (i = r.length - 1), new Set(r.slice(i, i + 1));
  }
  _queryLayoutSelector(t, n, r) {
    const i = n.name,
      o = n.body,
      s = [],
      l = this.querySelectorAll(o.parsed, r);
    for (const a of t) {
      const u = sp(i, a, l, o.distance);
      u !== void 0 && s.push({ element: a, score: u });
    }
    return (
      s.sort((a, u) => a.score - u.score), new Set(s.map((a) => a.element))
    );
  }
  querySelectorAll(t, n) {
    if (t.capture !== void 0) {
      if (t.parts.some((i) => i.name === 'nth'))
        throw this.createStacklessError(
          "Can't query n-th element in a request with the capture."
        );
      const r = { parts: t.parts.slice(0, t.capture + 1) };
      if (t.capture < t.parts.length - 1) {
        const i = { parts: t.parts.slice(t.capture + 1) },
          o = { name: 'internal:has', body: { parsed: i }, source: fn(i) };
        r.parts.push(o);
      }
      return this.querySelectorAll(r, n);
    }
    if (!n.querySelectorAll)
      throw this.createStacklessError('Node is not queryable.');
    if (t.capture !== void 0)
      throw this.createStacklessError(
        'Internal error: there should not be a capture in the selector.'
      );
    if (
      n.nodeType === 11 &&
      t.parts.length === 1 &&
      t.parts[0].name === 'css' &&
      t.parts[0].source === ':scope'
    )
      return [n];
    this._evaluator.begin();
    try {
      let r = new Set([n]);
      for (const i of t.parts)
        if (i.name === 'nth') r = this._queryNth(r, i);
        else if (i.name === 'internal:and') {
          const o = this.querySelectorAll(i.body.parsed, n);
          r = new Set(o.filter((s) => r.has(s)));
        } else if (i.name === 'internal:or') {
          const o = this.querySelectorAll(i.body.parsed, n);
          r = new Set(lp(new Set([...r, ...o])));
        } else if (_y.includes(i.name)) r = this._queryLayoutSelector(r, i, n);
        else {
          const o = new Set();
          for (const s of r) {
            const l = this._queryEngineAll(i, s);
            for (const a of l) o.add(a);
          }
          r = o;
        }
      return [...r];
    } finally {
      this._evaluator.end();
    }
  }
  _queryEngineAll(t, n) {
    const r = this._engines.get(t.name).queryAll(n, t.body);
    for (const i of r)
      if (!('nodeName' in i))
        throw this.createStacklessError(
          `Expected a Node but got ${Object.prototype.toString.call(i)}`
        );
    return r;
  }
  _createAttributeEngine(t, n) {
    const r = (i) => [
      {
        simples: [
          {
            selector: { css: `[${t}=${JSON.stringify(i)}]`, functions: [] },
            combinator: '',
          },
        ],
      },
    ];
    return {
      queryAll: (i, o) =>
        this._evaluator.query({ scope: i, pierceShadow: n }, r(o)),
    };
  }
  _createCSSEngine() {
    return {
      queryAll: (t, n) =>
        this._evaluator.query({ scope: t, pierceShadow: !0 }, n),
    };
  }
  _createTextEngine(t, n) {
    return {
      queryAll: (i, o) => {
        const { matcher: s, kind: l } = Ci(o, n),
          a = [];
        let u = null;
        const c = (d) => {
          if (l === 'lax' && u && u.contains(d)) return !1;
          const g = qo(this._evaluator._cacheText, d, s);
          g === 'none' && (u = d),
            (g === 'self' ||
              (g === 'selfAndChildren' && l === 'strict' && !n)) &&
              a.push(d);
        };
        i.nodeType === Node.ELEMENT_NODE && c(i);
        const f = this._evaluator._queryCSS({ scope: i, pierceShadow: t }, '*');
        for (const d of f) c(d);
        return a;
      },
    };
  }
  _createInternalHasTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          i = Ae(this._evaluator._cacheText, r),
          { matcher: o } = Ci(n, !0);
        return o(i) ? [r] : [];
      },
    };
  }
  _createInternalHasNotTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          i = Ae(this._evaluator._cacheText, r),
          { matcher: o } = Ci(n, !0);
        return o(i) ? [] : [r];
      },
    };
  }
  _createInternalLabelEngine() {
    return {
      queryAll: (t, n) => {
        const { matcher: r } = Ci(n, !0);
        return this._evaluator
          ._queryCSS({ scope: t, pierceShadow: !0 }, '*')
          .filter((o) => Yh(this._evaluator._cacheText, o).some((s) => r(s)));
      },
    };
  }
  _createNamedAttributeEngine() {
    return {
      queryAll: (n, r) => {
        const i = on(r, !0);
        if (i.name || i.attributes.length !== 1)
          throw new Error('Malformed attribute selector: ' + r);
        const { name: o, value: s, caseSensitive: l } = i.attributes[0],
          a = l ? null : s.toLowerCase();
        let u;
        return (
          s instanceof RegExp
            ? (u = (f) => !!f.match(s))
            : l
              ? (u = (f) => f === s)
              : (u = (f) => f.toLowerCase().includes(a)),
          this._evaluator
            ._queryCSS({ scope: n, pierceShadow: !0 }, `[${o}]`)
            .filter((f) => u(f.getAttribute(o)))
        );
      },
    };
  }
  _createControlEngine() {
    return {
      queryAll(t, n) {
        if (n === 'enter-frame') return [];
        if (n === 'return-empty') return [];
        if (n === 'component')
          return t.nodeType !== 1
            ? []
            : [t.childElementCount === 1 ? t.firstElementChild : t];
        throw new Error(
          `Internal error, unknown internal:control selector ${n}`
        );
      },
    };
  }
  _createHasEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1
          ? []
          : !!this.querySelector(r.parsed, n, !1)
            ? [n]
            : [],
    };
  }
  _createHasNotEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1
          ? []
          : !!this.querySelector(r.parsed, n, !1)
            ? []
            : [n],
    };
  }
  _createVisibleEngine() {
    return {
      queryAll: (n, r) => (n.nodeType !== 1 ? [] : tn(n) === !!r ? [n] : []),
    };
  }
  _createInternalChainEngine() {
    return { queryAll: (n, r) => this.querySelectorAll(r.parsed, n) };
  }
  extend(t, n) {
    const r = this.window.eval(`
    (() => {
      const module = {};
      ${t}
      return module.exports.default();
    })()`);
    return new r(this, n);
  }
  async viewportRatio(t) {
    return await new Promise((n) => {
      const r = new IntersectionObserver((i) => {
        n(i[0].intersectionRatio), r.disconnect();
      });
      r.observe(t), this.builtinRequestAnimationFrame(() => {});
    });
  }
  getElementBorderWidth(t) {
    if (
      t.nodeType !== Node.ELEMENT_NODE ||
      !t.ownerDocument ||
      !t.ownerDocument.defaultView
    )
      return { left: 0, top: 0 };
    const n = t.ownerDocument.defaultView.getComputedStyle(t);
    return {
      left: parseInt(n.borderLeftWidth || '', 10),
      top: parseInt(n.borderTopWidth || '', 10),
    };
  }
  describeIFrameStyle(t) {
    if (!t.ownerDocument || !t.ownerDocument.defaultView)
      return 'error:notconnected';
    const n = t.ownerDocument.defaultView;
    for (let i = t; i; i = _e(i))
      if (n.getComputedStyle(i).transform !== 'none') return 'transformed';
    const r = n.getComputedStyle(t);
    return {
      left:
        parseInt(r.borderLeftWidth || '', 10) +
        parseInt(r.paddingLeft || '', 10),
      top:
        parseInt(r.borderTopWidth || '', 10) + parseInt(r.paddingTop || '', 10),
    };
  }
  retarget(t, n) {
    let r = t.nodeType === Node.ELEMENT_NODE ? t : t.parentElement;
    return r
      ? (n === 'none' ||
          (!r.matches('input, textarea, select') &&
            !r.isContentEditable &&
            (n === 'button-link'
              ? (r = r.closest('button, [role=button], a, [role=link]') || r)
              : (r =
                  r.closest(
                    'button, [role=button], [role=checkbox], [role=radio]'
                  ) || r)),
          n === 'follow-label' &&
            (!r.matches(
              'a, input, textarea, button, select, [role=link], [role=button], [role=checkbox], [role=radio]'
            ) &&
              !r.isContentEditable &&
              (r = r.closest('label') || r),
            r.nodeName === 'LABEL' && (r = r.control || r))),
        r)
      : null;
  }
  async checkElementStates(t, n) {
    if (n.includes('stable')) {
      const r = await this._checkElementIsStable(t);
      if (r === !1) return { missingState: 'stable' };
      if (r === 'error:notconnected') return r;
    }
    for (const r of n)
      if (r !== 'stable') {
        const i = this.elementState(t, r);
        if (i === !1) return { missingState: r };
        if (i === 'error:notconnected') return i;
      }
  }
  async _checkElementIsStable(t) {
    const n = Symbol('continuePolling');
    let r,
      i = 0,
      o = 0;
    const s = () => {
      const f = this.retarget(t, 'no-follow-label');
      if (!f) return 'error:notconnected';
      const d = performance.now();
      if (this._stableRafCount > 1 && d - o < 15) return n;
      o = d;
      const g = f.getBoundingClientRect(),
        y = { x: g.top, y: g.left, width: g.width, height: g.height };
      if (r) {
        if (
          !(
            y.x === r.x &&
            y.y === r.y &&
            y.width === r.width &&
            y.height === r.height
          )
        )
          return !1;
        if (++i >= this._stableRafCount) return !0;
      }
      return (r = y), n;
    };
    let l, a;
    const u = new Promise((f, d) => {
        (l = f), (a = d);
      }),
      c = () => {
        try {
          const f = s();
          f !== n ? l(f) : this.builtinRequestAnimationFrame(c);
        } catch (f) {
          a(f);
        }
      };
    return this.builtinRequestAnimationFrame(c), u;
  }
  elementState(t, n) {
    const r = this.retarget(
      t,
      ['stable', 'visible', 'hidden'].includes(n) ? 'none' : 'follow-label'
    );
    if (!r || !r.isConnected) return n === 'hidden' ? !0 : 'error:notconnected';
    if (n === 'visible') return tn(r);
    if (n === 'hidden') return !tn(r);
    const i = Bh(r);
    if (n === 'disabled') return i;
    if (n === 'enabled') return !i;
    const o = !(
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(r.nodeName) &&
      r.hasAttribute('readonly')
    );
    if (n === 'editable') return !i && o;
    if (n === 'checked' || n === 'unchecked') {
      const s = n === 'checked',
        l = Fh(r, !1);
      if (l === 'error')
        throw this.createStacklessError('Not a checkbox or radio button');
      return s === l;
    }
    throw this.createStacklessError(`Unexpected element state "${n}"`);
  }
  selectOptions(t, n) {
    const r = this.retarget(t, 'follow-label');
    if (!r) return 'error:notconnected';
    if (r.nodeName.toLowerCase() !== 'select')
      throw this.createStacklessError('Element is not a <select> element');
    const i = r,
      o = [...i.options],
      s = [];
    let l = n.slice();
    for (let a = 0; a < o.length; a++) {
      const u = o[a],
        c = (f) => {
          if (f instanceof Node) return u === f;
          let d = !0;
          return (
            f.valueOrLabel !== void 0 &&
              (d =
                d &&
                (f.valueOrLabel === u.value || f.valueOrLabel === u.label)),
            f.value !== void 0 && (d = d && f.value === u.value),
            f.label !== void 0 && (d = d && f.label === u.label),
            f.index !== void 0 && (d = d && f.index === a),
            d
          );
        };
      if (l.some(c))
        if ((s.push(u), i.multiple)) l = l.filter((f) => !c(f));
        else {
          l = [];
          break;
        }
    }
    return l.length
      ? 'error:optionsnotfound'
      : ((i.value = void 0),
        s.forEach((a) => (a.selected = !0)),
        i.dispatchEvent(new Event('input', { bubbles: !0, composed: !0 })),
        i.dispatchEvent(new Event('change', { bubbles: !0 })),
        s.map((a) => a.value));
  }
  fill(t, n) {
    const r = this.retarget(t, 'follow-label');
    if (!r) return 'error:notconnected';
    if (r.nodeName.toLowerCase() === 'input') {
      const i = r,
        o = i.type.toLowerCase(),
        s = new Set([
          'color',
          'date',
          'time',
          'datetime-local',
          'month',
          'range',
          'week',
        ]);
      if (
        !new Set([
          '',
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'url',
        ]).has(o) &&
        !s.has(o)
      )
        throw this.createStacklessError(
          `Input of type "${o}" cannot be filled`
        );
      if (o === 'number' && ((n = n.trim()), isNaN(Number(n))))
        throw this.createStacklessError(
          'Cannot type text into input[type=number]'
        );
      if (s.has(o)) {
        if (((n = n.trim()), i.focus(), (i.value = n), i.value !== n))
          throw this.createStacklessError('Malformed value');
        return (
          r.dispatchEvent(new Event('input', { bubbles: !0, composed: !0 })),
          r.dispatchEvent(new Event('change', { bubbles: !0 })),
          'done'
        );
      }
    } else if (r.nodeName.toLowerCase() !== 'textarea') {
      if (!r.isContentEditable)
        throw this.createStacklessError(
          'Element is not an <input>, <textarea> or [contenteditable] element'
        );
    }
    return this.selectText(r), 'needsinput';
  }
  selectText(t) {
    const n = this.retarget(t, 'follow-label');
    if (!n) return 'error:notconnected';
    if (n.nodeName.toLowerCase() === 'input') {
      const o = n;
      return o.select(), o.focus(), 'done';
    }
    if (n.nodeName.toLowerCase() === 'textarea') {
      const o = n;
      return (
        (o.selectionStart = 0),
        (o.selectionEnd = o.value.length),
        o.focus(),
        'done'
      );
    }
    const r = n.ownerDocument.createRange();
    r.selectNodeContents(n);
    const i = n.ownerDocument.defaultView.getSelection();
    return i && (i.removeAllRanges(), i.addRange(r)), n.focus(), 'done';
  }
  _activelyFocused(t) {
    const n = t.getRootNode().activeElement,
      r = n === t && !!t.ownerDocument && t.ownerDocument.hasFocus();
    return { activeElement: n, isFocused: r };
  }
  focusNode(t, n) {
    if (!t.isConnected) return 'error:notconnected';
    if (t.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError('Node is not an element');
    const { activeElement: r, isFocused: i } = this._activelyFocused(t);
    if (
      (t.isContentEditable && !i && r && r.blur && r.blur(),
      t.focus(),
      t.focus(),
      n && !i && t.nodeName.toLowerCase() === 'input')
    )
      try {
        t.setSelectionRange(0, 0);
      } catch {}
    return 'done';
  }
  blurNode(t) {
    if (!t.isConnected) return 'error:notconnected';
    if (t.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError('Node is not an element');
    return t.blur(), 'done';
  }
  setInputFiles(t, n) {
    if (t.nodeType !== Node.ELEMENT_NODE)
      return 'Node is not of type HTMLElement';
    const r = t;
    if (r.nodeName !== 'INPUT') return 'Not an <input> element';
    const i = r;
    if ((i.getAttribute('type') || '').toLowerCase() !== 'file')
      return 'Not an input[type=file] element';
    const s = n.map((a) => {
        const u = Uint8Array.from(atob(a.buffer), (c) => c.charCodeAt(0));
        return new File([u], a.name, {
          type: a.mimeType,
          lastModified: a.lastModifiedMs,
        });
      }),
      l = new DataTransfer();
    for (const a of s) l.items.add(a);
    (i.files = l.files),
      i.dispatchEvent(new Event('input', { bubbles: !0, composed: !0 })),
      i.dispatchEvent(new Event('change', { bubbles: !0 }));
  }
  expectHitTarget(t, n) {
    const r = [];
    let i = n;
    for (; i; ) {
      const c = Nh(i);
      if (!c || (r.push(c), c.nodeType === 9)) break;
      i = c.host;
    }
    let o;
    for (let c = r.length - 1; c >= 0; c--) {
      const f = r[c],
        d = f.elementsFromPoint(t.x, t.y),
        g = f.elementFromPoint(t.x, t.y);
      if (g && d[0] && _e(g) === d[0]) {
        const v = this.window.getComputedStyle(g);
        (v == null ? void 0 : v.display) === 'contents' && d.unshift(g);
      }
      d[0] && d[0].shadowRoot === f && d[1] === g && d.shift();
      const y = d[0];
      if (!y || ((o = y), c && y !== r[c - 1].host)) break;
    }
    const s = [];
    for (; o && o !== n; ) s.push(o), (o = _e(o));
    if (o === n) return 'done';
    const l = this.previewNode(s[0] || this.document.documentElement);
    let a,
      u = n;
    for (; u; ) {
      const c = s.indexOf(u);
      if (c !== -1) {
        c > 1 && (a = this.previewNode(s[c - 1]));
        break;
      }
      u = _e(u);
    }
    return a
      ? { hitTargetDescription: `${l} from ${a} subtree` }
      : { hitTargetDescription: l };
  }
  setupHitTargetInterceptor(t, n, r, i) {
    const o = this.retarget(t, 'button-link');
    if (!o || !o.isConnected) return 'error:notconnected';
    if (r) {
      const c = this.expectHitTarget(r, o);
      if (c !== 'done') return c.hitTargetDescription;
    }
    if (n === 'drag') return { stop: () => 'done' };
    const s = { hover: yp, tap: wp, mouse: xp }[n];
    let l;
    const a = (c) => {
        if (!s.has(c.type) || !c.isTrusted) return;
        const f =
          this.window.TouchEvent && c instanceof this.window.TouchEvent
            ? c.touches[0]
            : c;
        l === void 0 &&
          f &&
          (l = this.expectHitTarget({ x: f.clientX, y: f.clientY }, o)),
          (i || (l !== 'done' && l !== void 0)) &&
            (c.preventDefault(),
            c.stopPropagation(),
            c.stopImmediatePropagation());
      },
      u = () => (
        this._hitTargetInterceptor === a &&
          (this._hitTargetInterceptor = void 0),
        l || 'done'
      );
    return (this._hitTargetInterceptor = a), { stop: u };
  }
  dispatchEvent(t, n, r) {
    let i;
    switch (
      ((r = { bubbles: !0, cancelable: !0, composed: !0, ...r }), r1.get(n))
    ) {
      case 'mouse':
        i = new MouseEvent(n, r);
        break;
      case 'keyboard':
        i = new KeyboardEvent(n, r);
        break;
      case 'touch':
        i = new TouchEvent(n, r);
        break;
      case 'pointer':
        i = new PointerEvent(n, r);
        break;
      case 'focus':
        i = new FocusEvent(n, r);
        break;
      case 'drag':
        i = new DragEvent(n, r);
        break;
      case 'wheel':
        i = new WheelEvent(n, r);
        break;
      case 'deviceorientation':
        try {
          i = new DeviceOrientationEvent(n, r);
        } catch {
          const {
            bubbles: o,
            cancelable: s,
            alpha: l,
            beta: a,
            gamma: u,
            absolute: c,
          } = r;
          (i = this.document.createEvent('DeviceOrientationEvent')),
            i.initDeviceOrientationEvent(n, o, s, l, a, u, c);
        }
        break;
      case 'devicemotion':
        try {
          i = new DeviceMotionEvent(n, r);
        } catch {
          const {
            bubbles: o,
            cancelable: s,
            acceleration: l,
            accelerationIncludingGravity: a,
            rotationRate: u,
            interval: c,
          } = r;
          (i = this.document.createEvent('DeviceMotionEvent')),
            i.initDeviceMotionEvent(n, o, s, l, a, u, c);
        }
        break;
      default:
        i = new Event(n, r);
        break;
    }
    t.dispatchEvent(i);
  }
  previewNode(t) {
    if (t.nodeType === Node.TEXT_NODE) return ki(`#text=${t.nodeValue || ''}`);
    if (t.nodeType !== Node.ELEMENT_NODE)
      return ki(`<${t.nodeName.toLowerCase()} />`);
    const n = t,
      r = [];
    for (let a = 0; a < n.attributes.length; a++) {
      const { name: u, value: c } = n.attributes[a];
      u !== 'style' &&
        (!c && n1.has(u) ? r.push(` ${u}`) : r.push(` ${u}="${c}"`));
    }
    r.sort((a, u) => a.length - u.length);
    const i = tc(r.join(''), 500);
    if (t1.has(n.nodeName)) return ki(`<${n.nodeName.toLowerCase()}${i}/>`);
    const o = n.childNodes;
    let s = !1;
    if (o.length <= 5) {
      s = !0;
      for (let a = 0; a < o.length; a++)
        s = s && o[a].nodeType === Node.TEXT_NODE;
    }
    const l = s ? n.textContent || '' : o.length ? '…' : '';
    return ki(
      `<${n.nodeName.toLowerCase()}${i}>${tc(l, 50)}</${n.nodeName.toLowerCase()}>`
    );
  }
  strictModeViolationError(t, n) {
    const r = n
        .slice(0, 10)
        .map((o) => ({
          preview: this.previewNode(o),
          selector: this.generateSelectorSimple(o),
        })),
      i = r.map(
        (o, s) => `
    ${s + 1}) ${o.preview} aka ${zn(this._sdkLanguage, o.selector)}`
      );
    return (
      r.length < n.length &&
        i.push(`
    ...`),
      this
        .createStacklessError(`strict mode violation: ${zn(this._sdkLanguage, fn(t))} resolved to ${n.length} elements:${i.join('')}
`)
    );
  }
  createStacklessError(t) {
    if (this._browserName === 'firefox') {
      const r = new Error('Error: ' + t);
      return (r.stack = ''), r;
    }
    const n = new Error(t);
    return delete n.stack, n;
  }
  createHighlight() {
    return new Ts(this);
  }
  maskSelectors(t, n) {
    this._highlight && this.hideHighlight(),
      (this._highlight = new Ts(this)),
      this._highlight.install();
    const r = [];
    for (const i of t)
      r.push(this.querySelectorAll(i, this.document.documentElement));
    this._highlight.maskElements(r.flat(), n);
  }
  highlight(t) {
    this._highlight ||
      ((this._highlight = new Ts(this)), this._highlight.install()),
      this._highlight.runHighlightOnRaf(t);
  }
  hideHighlight() {
    this._highlight && (this._highlight.uninstall(), delete this._highlight);
  }
  markTargetElements(t, n) {
    const r = new CustomEvent('__playwright_target__', {
      bubbles: !0,
      cancelable: !0,
      detail: n,
      composed: !0,
    });
    for (const i of t) i.dispatchEvent(r);
  }
  _setupGlobalListenersRemovalDetection() {
    const t = '__playwright_global_listeners_check__';
    let n = !1;
    const r = () => (n = !0);
    this.window.addEventListener(t, r),
      new MutationObserver((i) => {
        if (
          i.some((s) =>
            Array.from(s.addedNodes).includes(this.document.documentElement)
          ) &&
          ((n = !1), this.window.dispatchEvent(new CustomEvent(t)), !n)
        ) {
          this.window.addEventListener(t, r);
          for (const s of this.onGlobalListenersRemoved) s();
        }
      }).observe(this.document, { childList: !0 });
  }
  _setupHitTargetInterceptors() {
    const t = (r) => {
        var i;
        return (i = this._hitTargetInterceptor) == null
          ? void 0
          : i.call(this, r);
      },
      n = () => {
        for (const r of i1)
          this.window.addEventListener(r, t, { capture: !0, passive: !1 });
      };
    n(), this.onGlobalListenersRemoved.add(n);
  }
  async expect(t, n, r) {
    return n.expression === 'to.have.count' || n.expression.endsWith('.array')
      ? this.expectArray(r, n)
      : t
        ? await this.expectSingleElement(t, n)
        : !n.isNot && n.expression === 'to.be.hidden'
          ? { matches: !0 }
          : n.isNot && n.expression === 'to.be.visible'
            ? { matches: !1 }
            : !n.isNot && n.expression === 'to.be.detached'
              ? { matches: !0 }
              : n.isNot && n.expression === 'to.be.attached'
                ? { matches: !1 }
                : n.isNot && n.expression === 'to.be.in.viewport'
                  ? { matches: !1 }
                  : { matches: n.isNot, missingReceived: !0 };
  }
  async expectSingleElement(t, n) {
    var i;
    const r = n.expression;
    {
      let o;
      if (
        (r === 'to.have.attribute'
          ? (o = t.hasAttribute(n.expressionArg))
          : r === 'to.be.checked'
            ? (o = this.elementState(t, 'checked'))
            : r === 'to.be.unchecked'
              ? (o = this.elementState(t, 'unchecked'))
              : r === 'to.be.disabled'
                ? (o = this.elementState(t, 'disabled'))
                : r === 'to.be.editable'
                  ? (o = this.elementState(t, 'editable'))
                  : r === 'to.be.readonly'
                    ? (o = !this.elementState(t, 'editable'))
                    : r === 'to.be.empty'
                      ? t.nodeName === 'INPUT' || t.nodeName === 'TEXTAREA'
                        ? (o = !t.value)
                        : (o = !((i = t.textContent) != null && i.trim()))
                      : r === 'to.be.enabled'
                        ? (o = this.elementState(t, 'enabled'))
                        : r === 'to.be.focused'
                          ? (o = this._activelyFocused(t).isFocused)
                          : r === 'to.be.hidden'
                            ? (o = this.elementState(t, 'hidden'))
                            : r === 'to.be.visible'
                              ? (o = this.elementState(t, 'visible'))
                              : r === 'to.be.attached'
                                ? (o = !0)
                                : r === 'to.be.detached' && (o = !1),
        o !== void 0)
      ) {
        if (o === 'error:notcheckbox')
          throw this.createStacklessError('Element is not a checkbox');
        if (o === 'error:notconnected')
          throw this.createStacklessError('Element is not connected');
        return { received: o, matches: o };
      }
    }
    if (r === 'to.have.property') {
      let o = t;
      const s = n.expressionArg.split('.');
      for (let u = 0; u < s.length - 1; u++) {
        if (typeof o != 'object' || !(s[u] in o))
          return { received: void 0, matches: !1 };
        o = o[s[u]];
      }
      const l = o[s[s.length - 1]],
        a = Pl(l, n.expectedValue);
      return { received: l, matches: a };
    }
    if (r === 'to.be.in.viewport') {
      const o = await this.viewportRatio(t);
      return {
        received: `viewport ratio ${o}`,
        matches: o > 0 && o > (n.expectedNumber ?? 0) - 1e-9,
      };
    }
    if (r === 'to.have.values') {
      if (
        ((t = this.retarget(t, 'follow-label')),
        t.nodeName !== 'SELECT' || !t.multiple)
      )
        throw this.createStacklessError(
          'Not a select element with a multiple attribute'
        );
      const o = [...t.selectedOptions].map((s) => s.value);
      return o.length !== n.expectedText.length
        ? { received: o, matches: !1 }
        : {
            received: o,
            matches: o
              .map((s, l) => new ks(n.expectedText[l]).matches(s))
              .every(Boolean),
          };
    }
    {
      let o;
      if (r === 'to.have.attribute.value') {
        const s = t.getAttribute(n.expressionArg);
        if (s === null) return { received: null, matches: !1 };
        o = s;
      } else if (r === 'to.have.class') o = t.classList.toString();
      else if (r === 'to.have.css')
        o = this.window.getComputedStyle(t).getPropertyValue(n.expressionArg);
      else if (r === 'to.have.id') o = t.id;
      else if (r === 'to.have.text')
        o = n.useInnerText ? t.innerText : Ae(new Map(), t).full;
      else if (r === 'to.have.accessible.name') o = So(t, !1);
      else if (r === 'to.have.accessible.description') o = vc(t, !1);
      else if (r === 'to.have.role') o = Ee(t) || '';
      else if (r === 'to.have.title') o = this.document.title;
      else if (r === 'to.have.url') o = this.document.location.href;
      else if (r === 'to.have.value') {
        if (
          ((t = this.retarget(t, 'follow-label')),
          t.nodeName !== 'INPUT' &&
            t.nodeName !== 'TEXTAREA' &&
            t.nodeName !== 'SELECT')
        )
          throw this.createStacklessError('Not an input element');
        o = t.value;
      }
      if (o !== void 0 && n.expectedText) {
        const s = new ks(n.expectedText[0]);
        return { received: o, matches: s.matches(o) };
      }
    }
    throw this.createStacklessError('Unknown expect matcher: ' + r);
  }
  expectArray(t, n) {
    const r = n.expression;
    if (r === 'to.have.count') {
      const o = t.length,
        s = o === n.expectedNumber;
      return { received: o, matches: s };
    }
    let i;
    if (
      (r === 'to.have.text.array' || r === 'to.contain.text.array'
        ? (i = t.map((o) =>
            n.useInnerText ? o.innerText : Ae(new Map(), o).full
          ))
        : r === 'to.have.class.array' &&
          (i = t.map((o) => o.classList.toString())),
      i && n.expectedText)
    ) {
      const o = r !== 'to.contain.text.array';
      if (!(i.length === n.expectedText.length || !o))
        return { received: i, matches: !1 };
      const l = n.expectedText.map((c) => new ks(c));
      let a = 0,
        u = 0;
      for (; a < l.length && u < i.length; ) l[a].matches(i[u]) && ++a, ++u;
      return { received: i, matches: a === l.length };
    }
    throw this.createStacklessError('Unknown expect matcher: ' + r);
  }
  generateSimpleDomNode(t) {
    const n = this.querySelector(
      this.parseSelector(t),
      this.document.documentElement,
      !0
    );
    if (n) return Jy(this, n);
  }
  selectorForSimpleDomNodeId(t) {
    return Zy(this, t);
  }
}
const t1 = new Set([
    'AREA',
    'BASE',
    'BR',
    'COL',
    'COMMAND',
    'EMBED',
    'HR',
    'IMG',
    'INPUT',
    'KEYGEN',
    'LINK',
    'MENUITEM',
    'META',
    'PARAM',
    'SOURCE',
    'TRACK',
    'WBR',
  ]),
  n1 = new Set(['checked', 'selected', 'disabled', 'readonly', 'multiple']);
function ki(e) {
  return e.replace(/\n/g, '↵').replace(/\t/g, '⇆');
}
const r1 = new Map([
    ['auxclick', 'mouse'],
    ['click', 'mouse'],
    ['dblclick', 'mouse'],
    ['mousedown', 'mouse'],
    ['mouseeenter', 'mouse'],
    ['mouseleave', 'mouse'],
    ['mousemove', 'mouse'],
    ['mouseout', 'mouse'],
    ['mouseover', 'mouse'],
    ['mouseup', 'mouse'],
    ['mouseleave', 'mouse'],
    ['mousewheel', 'mouse'],
    ['keydown', 'keyboard'],
    ['keyup', 'keyboard'],
    ['keypress', 'keyboard'],
    ['textInput', 'keyboard'],
    ['touchstart', 'touch'],
    ['touchmove', 'touch'],
    ['touchend', 'touch'],
    ['touchcancel', 'touch'],
    ['pointerover', 'pointer'],
    ['pointerout', 'pointer'],
    ['pointerenter', 'pointer'],
    ['pointerleave', 'pointer'],
    ['pointerdown', 'pointer'],
    ['pointerup', 'pointer'],
    ['pointermove', 'pointer'],
    ['pointercancel', 'pointer'],
    ['gotpointercapture', 'pointer'],
    ['lostpointercapture', 'pointer'],
    ['focus', 'focus'],
    ['blur', 'focus'],
    ['drag', 'drag'],
    ['dragstart', 'drag'],
    ['dragend', 'drag'],
    ['dragover', 'drag'],
    ['dragenter', 'drag'],
    ['dragleave', 'drag'],
    ['dragexit', 'drag'],
    ['drop', 'drag'],
    ['wheel', 'wheel'],
    ['deviceorientation', 'deviceorientation'],
    ['deviceorientationabsolute', 'deviceorientation'],
    ['devicemotion', 'devicemotion'],
  ]),
  yp = new Set(['mousemove']),
  wp = new Set([
    'pointerdown',
    'pointerup',
    'touchstart',
    'touchend',
    'touchcancel',
  ]),
  xp = new Set([
    'mousedown',
    'mouseup',
    'pointerdown',
    'pointerup',
    'click',
    'auxclick',
    'dblclick',
    'contextmenu',
  ]),
  i1 = new Set([...yp, ...wp, ...xp]);
function o1(e) {
  if (((e = e.substring(1, e.length - 1)), !e.includes('\\'))) return e;
  const t = [];
  let n = 0;
  for (; n < e.length; )
    e[n] === '\\' && n + 1 < e.length && n++, t.push(e[n++]);
  return t.join('');
}
function Ci(e, t) {
  if (e[0] === '/' && e.lastIndexOf('/') > 0) {
    const i = e.lastIndexOf('/'),
      o = new RegExp(e.substring(1, i), e.substring(i + 1));
    return { matcher: (s) => o.test(s.full), kind: 'regex' };
  }
  const n = t ? JSON.parse.bind(JSON) : o1;
  let r = !1;
  return (
    e.length > 1 && e[0] === '"' && e[e.length - 1] === '"'
      ? ((e = n(e)), (r = !0))
      : t &&
          e.length > 1 &&
          e[0] === '"' &&
          e[e.length - 2] === '"' &&
          e[e.length - 1] === 'i'
        ? ((e = n(e.substring(0, e.length - 1))), (r = !1))
        : t &&
            e.length > 1 &&
            e[0] === '"' &&
            e[e.length - 2] === '"' &&
            e[e.length - 1] === 's'
          ? ((e = n(e.substring(0, e.length - 1))), (r = !0))
          : e.length > 1 &&
            e[0] === "'" &&
            e[e.length - 1] === "'" &&
            ((e = n(e)), (r = !0)),
    (e = De(e)),
    r
      ? t
        ? { kind: 'strict', matcher: (o) => o.normalized === e }
        : {
            matcher: (o) =>
              !e && !o.immediate.length
                ? !0
                : o.immediate.some((s) => De(s) === e),
            kind: 'strict',
          }
      : ((e = e.toLowerCase()),
        { kind: 'lax', matcher: (i) => i.normalized.toLowerCase().includes(e) })
  );
}
class ks {
  constructor(t) {
    if (
      ((this._normalizeWhiteSpace = t.normalizeWhiteSpace),
      (this._ignoreCase = t.ignoreCase),
      (this._string = t.matchSubstring ? void 0 : this.normalize(t.string)),
      (this._substring = t.matchSubstring ? this.normalize(t.string) : void 0),
      t.regexSource)
    ) {
      const n = new Set((t.regexFlags || '').split(''));
      t.ignoreCase === !1 && n.delete('i'),
        t.ignoreCase === !0 && n.add('i'),
        (this._regex = new RegExp(t.regexSource, [...n].join('')));
    }
  }
  matches(t) {
    return (
      this._regex || (t = this.normalize(t)),
      this._string !== void 0
        ? t === this._string
        : this._substring !== void 0
          ? t.includes(this._substring)
          : this._regex
            ? !!this._regex.test(t)
            : !1
    );
  }
  normalize(t) {
    return (
      t &&
      (this._normalizeWhiteSpace && (t = De(t)),
      this._ignoreCase && (t = t.toLocaleLowerCase()),
      t)
    );
  }
}
function Pl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    if (Array.isArray(e)) {
      if (e.length !== t.length) return !1;
      for (let r = 0; r < e.length; ++r) if (!Pl(e[r], t[r])) return !1;
      return !0;
    }
    if (e instanceof RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let r = 0; r < n.length; ++r) if (!t.hasOwnProperty(n[r])) return !1;
    for (const r of n) if (!Pl(e[r], t[r])) return !1;
    return !0;
  }
  return typeof e == 'number' && typeof t == 'number'
    ? isNaN(e) && isNaN(t)
    : !1;
}
const s1 = {
  tagName: 'svg',
  children: [
    {
      tagName: 'defs',
      children: [
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-gripper',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                d: 'M5 3h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm4-8h2v2H9zm0 4h2v2H9zm0 4h2v2H9z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-circle-large-filled',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                d: 'M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-inspect',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-whole-word',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M0 11H1V13H15V11H16V14H15H1H0V11Z',
              },
            },
            {
              tagName: 'path',
              attrs: {
                d: 'M6.84048 11H5.95963V10.1406H5.93814C5.555 10.7995 4.99104 11.1289 4.24625 11.1289C3.69839 11.1289 3.26871 10.9839 2.95718 10.6938C2.64924 10.4038 2.49527 10.0189 2.49527 9.53906C2.49527 8.51139 3.10041 7.91341 4.3107 7.74512L5.95963 7.51416C5.95963 6.57959 5.58186 6.1123 4.82632 6.1123C4.16389 6.1123 3.56591 6.33789 3.03238 6.78906V5.88672C3.57307 5.54297 4.19612 5.37109 4.90152 5.37109C6.19416 5.37109 6.84048 6.05501 6.84048 7.42285V11ZM5.95963 8.21777L4.63297 8.40039C4.22476 8.45768 3.91682 8.55973 3.70914 8.70654C3.50145 8.84977 3.39761 9.10579 3.39761 9.47461C3.39761 9.74316 3.4925 9.96338 3.68228 10.1353C3.87564 10.3035 4.13166 10.3877 4.45035 10.3877C4.8872 10.3877 5.24706 10.2355 5.52994 9.93115C5.8164 9.62321 5.95963 9.2347 5.95963 8.76562V8.21777Z',
              },
            },
            {
              tagName: 'path',
              attrs: {
                d: 'M9.3475 10.2051H9.32601V11H8.44515V2.85742H9.32601V6.4668H9.3475C9.78076 5.73633 10.4146 5.37109 11.2489 5.37109C11.9543 5.37109 12.5057 5.61816 12.9032 6.1123C13.3042 6.60286 13.5047 7.26172 13.5047 8.08887C13.5047 9.00911 13.2809 9.74674 12.8333 10.3018C12.3857 10.8532 11.7734 11.1289 10.9964 11.1289C10.2695 11.1289 9.71989 10.821 9.3475 10.2051ZM9.32601 7.98682V8.75488C9.32601 9.20964 9.47282 9.59635 9.76644 9.91504C10.0636 10.2301 10.4396 10.3877 10.8944 10.3877C11.4279 10.3877 11.8451 10.1836 12.1458 9.77539C12.4502 9.36719 12.6024 8.79964 12.6024 8.07275C12.6024 7.46045 12.4609 6.98063 12.1781 6.6333C11.8952 6.28597 11.512 6.1123 11.0286 6.1123C10.5166 6.1123 10.1048 6.29134 9.7933 6.64941C9.48177 7.00391 9.32601 7.44971 9.32601 7.98682Z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-eye',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                d: 'M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-symbol-constant',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M4 6h8v1H4V6zm8 3H4v1h8V9z',
              },
            },
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-check',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-close',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-pass',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                d: 'M6.27 10.87h.71l4.56-4.56-.71-.71-4.2 4.21-1.92-1.92L4 8.6l2.27 2.27z',
              },
            },
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6z',
              },
            },
          ],
        },
      ],
    },
  ],
};
class Cc {
  cursor() {
    return 'default';
  }
}
class Cs {
  constructor(t, n) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._hoveredSelectors = null),
      (this._recorder = t),
      (this._assertVisibility = n);
  }
  cursor() {
    return 'pointer';
  }
  cleanup() {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._hoveredSelectors = null);
  }
  onClick(t) {
    var n;
    B(t),
      t.button === 0 &&
        (n = this._hoveredModel) != null &&
        n.selector &&
        this._commit(this._hoveredModel.selector);
  }
  onContextMenu(t) {
    if (
      this._hoveredModel &&
      !this._hoveredModel.tooltipListItemSelected &&
      this._hoveredSelectors &&
      this._hoveredSelectors.length > 1
    ) {
      B(t);
      const n = this._hoveredSelectors;
      (this._hoveredModel.tooltipFooter = void 0),
        (this._hoveredModel.tooltipList = n.map((r) =>
          this._recorder.injectedScript.utils.asLocator(
            this._recorder.state.language,
            r
          )
        )),
        (this._hoveredModel.tooltipListItemSelected = (r) => {
          r === void 0 ? this._reset(!0) : this._commit(n[r]);
        }),
        this._recorder.updateHighlight(this._hoveredModel, !0);
    }
  }
  onPointerDown(t) {
    B(t);
  }
  onPointerUp(t) {
    B(t);
  }
  onMouseDown(t) {
    B(t);
  }
  onMouseUp(t) {
    B(t);
  }
  onMouseMove(t) {
    var o;
    B(t);
    let n = this._recorder.deepEventTarget(t);
    if ((n.isConnected || (n = null), this._hoveredElement === n)) return;
    this._hoveredElement = n;
    let r = null,
      i = [];
    if (this._hoveredElement) {
      const s = this._recorder.injectedScript.generateSelector(
        this._hoveredElement,
        {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
          multiple: !1,
        }
      );
      (i = s.selectors),
        (r = {
          selector: s.selector,
          elements: s.elements,
          tooltipText: this._recorder.injectedScript.utils.asLocator(
            this._recorder.state.language,
            s.selector
          ),
          tooltipFooter:
            i.length > 1
              ? 'Click to select, right-click for more options'
              : void 0,
          color: this._assertVisibility ? '#8acae480' : void 0,
        });
    }
    ((o = this._hoveredModel) == null ? void 0 : o.selector) !==
      (r == null ? void 0 : r.selector) &&
      ((this._hoveredModel = r),
      (this._hoveredSelectors = i),
      this._recorder.updateHighlight(r, !0));
  }
  onMouseEnter(t) {
    B(t);
  }
  onMouseLeave(t) {
    B(t);
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(t).nodeType === Node.DOCUMENT_NODE &&
      this._reset(!0);
  }
  onKeyDown(t) {
    var n;
    B(t),
      t.key === 'Escape' &&
        ((n = this._hoveredModel) != null && n.tooltipListItemSelected
          ? this._reset(!0)
          : this._assertVisibility && this._recorder.setMode('recording'));
  }
  onKeyUp(t) {
    B(t);
  }
  onScroll(t) {
    this._reset(!1);
  }
  _commit(t) {
    var n;
    this._assertVisibility
      ? (this._recorder.recordAction({
          name: 'assertVisible',
          selector: t,
          signals: [],
        }),
        this._recorder.setMode('recording'),
        (n = this._recorder.overlay) == null ||
          n.flashToolSucceeded('assertingVisibility'))
      : this._recorder.setSelector(t);
  }
  _reset(t) {
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._hoveredSelectors = null),
      this._recorder.updateHighlight(null, t);
  }
}
class l1 {
  constructor(t) {
    (this._performingActions = new Set()),
      (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1),
      (this._recorder = t);
  }
  cursor() {
    return 'pointer';
  }
  cleanup() {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1);
  }
  onClick(t) {
    if (
      Ls(this._hoveredElement) ||
      (t.button === 2 && t.type === 'auxclick') ||
      this._shouldIgnoreMouseEvent(t) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel)
    )
      return;
    const n = As(this._recorder.deepEventTarget(t));
    if (n) {
      this._performAction({
        name: n.checked ? 'check' : 'uncheck',
        selector: this._hoveredModel.selector,
        signals: [],
      });
      return;
    }
    this._cancelPendingClickAction(),
      t.detail === 1 &&
        (this._pendingClickAction = {
          action: {
            name: 'click',
            selector: this._hoveredModel.selector,
            position: bs(t),
            signals: [],
            button: bc(t),
            modifiers: Ns(t),
            clickCount: t.detail,
          },
          timeout: this._recorder.injectedScript.builtinSetTimeout(
            () => this._commitPendingClickAction(),
            200
          ),
        });
  }
  onDblClick(t) {
    Ls(this._hoveredElement) ||
      this._shouldIgnoreMouseEvent(t) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel) ||
      (this._cancelPendingClickAction(),
      this._performAction({
        name: 'click',
        selector: this._hoveredModel.selector,
        position: bs(t),
        signals: [],
        button: bc(t),
        modifiers: Ns(t),
        clickCount: t.detail,
      }));
  }
  _commitPendingClickAction() {
    this._pendingClickAction &&
      this._performAction(this._pendingClickAction.action),
      this._cancelPendingClickAction();
  }
  _cancelPendingClickAction() {
    this._pendingClickAction && clearTimeout(this._pendingClickAction.timeout),
      (this._pendingClickAction = void 0);
  }
  onContextMenu(t) {
    this._shouldIgnoreMouseEvent(t) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel) ||
      this._performAction({
        name: 'click',
        selector: this._hoveredModel.selector,
        position: bs(t),
        signals: [],
        button: 'right',
        modifiers: 0,
        clickCount: 0,
      });
  }
  onPointerDown(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingActions.size || B(t);
  }
  onPointerUp(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingActions.size || B(t);
  }
  onMouseDown(t) {
    this._shouldIgnoreMouseEvent(t) ||
      (this._performingActions.size || B(t),
      (this._activeModel = this._hoveredModel));
  }
  onMouseUp(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingActions.size || B(t);
  }
  onMouseMove(t) {
    const n = this._recorder.deepEventTarget(t);
    this._hoveredElement !== n &&
      ((this._hoveredElement = n), this._updateModelForHoveredElement());
  }
  onMouseLeave(t) {
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(t).nodeType === Node.DOCUMENT_NODE &&
      ((this._hoveredElement = null), this._updateModelForHoveredElement());
  }
  onFocus(t) {
    this._onFocus(!0);
  }
  onInput(t) {
    const n = this._recorder.deepEventTarget(t);
    if (n.nodeName === 'INPUT' && n.type.toLowerCase() === 'file') {
      this._recorder.recordAction({
        name: 'setInputFiles',
        selector: this._activeModel.selector,
        signals: [],
        files: [...(n.files || [])].map((r) => r.name),
      });
      return;
    }
    if (Ls(n)) {
      this._recorder.recordAction({
        name: 'fill',
        selector: this._hoveredModel.selector,
        signals: [],
        text: n.value,
      });
      return;
    }
    if (['INPUT', 'TEXTAREA'].includes(n.nodeName) || n.isContentEditable) {
      if (
        (n.nodeName === 'INPUT' &&
          ['checkbox', 'radio'].includes(n.type.toLowerCase())) ||
        this._consumedDueWrongTarget(t)
      )
        return;
      this._recorder.recordAction({
        name: 'fill',
        selector: this._activeModel.selector,
        signals: [],
        text: n.isContentEditable ? n.innerText : n.value,
      });
    }
    if (n.nodeName === 'SELECT') {
      const r = n;
      if (this._actionInProgress(t)) return;
      this._performAction({
        name: 'select',
        selector: this._activeModel.selector,
        options: [...r.selectedOptions].map((i) => i.value),
        signals: [],
      });
    }
  }
  onKeyDown(t) {
    if (this._shouldGenerateKeyPressFor(t)) {
      if (this._actionInProgress(t)) {
        this._expectProgrammaticKeyUp = !0;
        return;
      }
      if (!this._consumedDueWrongTarget(t)) {
        if (t.key === ' ') {
          const n = As(this._recorder.deepEventTarget(t));
          if (n) {
            this._performAction({
              name: n.checked ? 'uncheck' : 'check',
              selector: this._activeModel.selector,
              signals: [],
            });
            return;
          }
        }
        this._performAction({
          name: 'press',
          selector: this._activeModel.selector,
          signals: [],
          key: t.key,
          modifiers: Ns(t),
        });
      }
    }
  }
  onKeyUp(t) {
    if (this._shouldGenerateKeyPressFor(t)) {
      if (!this._expectProgrammaticKeyUp) {
        B(t);
        return;
      }
      this._expectProgrammaticKeyUp = !1;
    }
  }
  onScroll(t) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      this._recorder.updateHighlight(null, !1);
  }
  _onFocus(t) {
    const n = d1(this._recorder.document);
    if (t && n === this._recorder.document.body) return;
    const r = n
      ? this._recorder.injectedScript.generateSelector(n, {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
        })
      : null;
    (this._activeModel = r && r.selector ? r : null),
      t && (this._hoveredElement = n),
      this._updateModelForHoveredElement();
  }
  _shouldIgnoreMouseEvent(t) {
    const n = this._recorder.deepEventTarget(t),
      r = n.nodeName;
    return !!(
      r === 'SELECT' ||
      r === 'OPTION' ||
      (r === 'INPUT' && ['date', 'range'].includes(n.type))
    );
  }
  _actionInProgress(t) {
    const n = t instanceof KeyboardEvent,
      r = t instanceof MouseEvent || t instanceof PointerEvent;
    for (const i of this._performingActions)
      if (
        (n && i.name === 'press' && t.key === i.key) ||
        (r &&
          (i.name === 'click' || i.name === 'check' || i.name === 'uncheck'))
      )
        return !0;
    return B(t), !1;
  }
  _consumedDueToNoModel(t, n) {
    return n ? !1 : (B(t), !0);
  }
  _consumedDueWrongTarget(t) {
    return this._activeModel &&
      this._activeModel.elements[0] === this._recorder.deepEventTarget(t)
      ? !1
      : (B(t), !0);
  }
  _performAction(t) {
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._activeModel = null),
      this._recorder.updateHighlight(null, !1),
      this._performingActions.add(t),
      this._recorder.performAction(t).then(() => {
        this._performingActions.delete(t),
          this._onFocus(!1),
          this._recorder.injectedScript.isUnderTest &&
            console.error(
              'Action performed for test: ' +
                JSON.stringify({
                  hovered: this._hoveredModel
                    ? this._hoveredModel.selector
                    : null,
                  active: this._activeModel ? this._activeModel.selector : null,
                })
            );
      });
  }
  _shouldGenerateKeyPressFor(t) {
    if (
      (t.key === 'Enter' &&
        (this._recorder.deepEventTarget(t).nodeName === 'TEXTAREA' ||
          this._recorder.deepEventTarget(t).isContentEditable)) ||
      ['Backspace', 'Delete', 'AltGraph'].includes(t.key) ||
      (t.key === '@' && t.code === 'KeyL')
    )
      return !1;
    if (navigator.platform.includes('Mac')) {
      if (t.key === 'v' && t.metaKey) return !1;
    } else if (
      (t.key === 'v' && t.ctrlKey) ||
      (t.key === 'Insert' && t.shiftKey)
    )
      return !1;
    if (['Shift', 'Control', 'Meta', 'Alt', 'Process'].includes(t.key))
      return !1;
    const n = t.ctrlKey || t.altKey || t.metaKey;
    return t.key.length === 1 && !n
      ? !!As(this._recorder.deepEventTarget(t))
      : !0;
  }
  _updateModelForHoveredElement() {
    if (!this._hoveredElement || !this._hoveredElement.isConnected) {
      (this._hoveredModel = null),
        (this._hoveredElement = null),
        this._recorder.updateHighlight(null, !0);
      return;
    }
    const { selector: t, elements: n } =
      this._recorder.injectedScript.generateSelector(this._hoveredElement, {
        testIdAttributeName: this._recorder.state.testIdAttributeName,
      });
    (this._hoveredModel && this._hoveredModel.selector === t) ||
      ((this._hoveredModel = t
        ? { selector: t, elements: n, color: '#dc6f6f7f' }
        : null),
      this._recorder.updateHighlight(this._hoveredModel, !0));
  }
}
class Nc {
  constructor(t, n) {
    (this._hoverHighlight = null),
      (this._action = null),
      (this._textCache = new Map()),
      (this._recorder = t),
      (this._kind = n),
      (this._dialog = new c1(t));
  }
  cursor() {
    return 'pointer';
  }
  cleanup() {
    this._dialog.close(), (this._hoverHighlight = null);
  }
  onClick(t) {
    B(t),
      this._kind === 'value'
        ? this._commitAssertValue()
        : this._dialog.isShowing() || this._showDialog();
  }
  onMouseDown(t) {
    const n = this._recorder.deepEventTarget(t);
    this._elementHasValue(n) && t.preventDefault();
  }
  onPointerUp(t) {
    var r;
    const n = (r = this._hoverHighlight) == null ? void 0 : r.elements[0];
    this._kind === 'value' &&
      n &&
      (n.nodeName === 'INPUT' || n.nodeName === 'SELECT') &&
      n.disabled &&
      this._commitAssertValue();
  }
  onMouseMove(t) {
    var r;
    if (this._dialog.isShowing()) return;
    const n = this._recorder.deepEventTarget(t);
    ((r = this._hoverHighlight) == null ? void 0 : r.elements[0]) !== n &&
      (this._kind === 'text'
        ? (this._hoverHighlight =
            this._recorder.injectedScript.utils.elementText(this._textCache, n)
              .full
              ? { elements: [n], selector: '' }
              : null)
        : (this._hoverHighlight = this._elementHasValue(n)
            ? this._recorder.injectedScript.generateSelector(n, {
                testIdAttributeName: this._recorder.state.testIdAttributeName,
              })
            : null),
      this._hoverHighlight && (this._hoverHighlight.color = '#8acae480'),
      this._recorder.updateHighlight(this._hoverHighlight, !0));
  }
  onKeyDown(t) {
    t.key === 'Escape' && this._recorder.setMode('recording'), B(t);
  }
  onScroll(t) {
    this._recorder.updateHighlight(this._hoverHighlight, !1);
  }
  _elementHasValue(t) {
    return (
      t.nodeName === 'TEXTAREA' ||
      t.nodeName === 'SELECT' ||
      (t.nodeName === 'INPUT' &&
        !['button', 'image', 'reset', 'submit'].includes(t.type))
    );
  }
  _generateAction() {
    var n;
    this._textCache.clear();
    const t = (n = this._hoverHighlight) == null ? void 0 : n.elements[0];
    if (!t) return null;
    if (this._kind === 'value') {
      if (!this._elementHasValue(t)) return null;
      const { selector: r } = this._recorder.injectedScript.generateSelector(
        t,
        { testIdAttributeName: this._recorder.state.testIdAttributeName }
      );
      return t.nodeName === 'INPUT' &&
        ['checkbox', 'radio'].includes(t.type.toLowerCase())
        ? {
            name: 'assertChecked',
            selector: r,
            signals: [],
            checked: !t.checked,
          }
        : { name: 'assertValue', selector: r, signals: [], value: t.value };
    } else
      return (
        (this._hoverHighlight = this._recorder.injectedScript.generateSelector(
          t,
          {
            testIdAttributeName: this._recorder.state.testIdAttributeName,
            forTextExpect: !0,
          }
        )),
        (this._hoverHighlight.color = '#8acae480'),
        this._recorder.updateHighlight(this._hoverHighlight, !0),
        {
          name: 'assertText',
          selector: this._hoverHighlight.selector,
          signals: [],
          text: this._recorder.injectedScript.utils.elementText(
            this._textCache,
            t
          ).normalized,
          substring: !0,
        }
      );
  }
  _renderValue(t) {
    return (t == null ? void 0 : t.name) === 'assertText'
      ? this._recorder.injectedScript.utils.normalizeWhiteSpace(t.text)
      : (t == null ? void 0 : t.name) === 'assertChecked'
        ? String(t.checked)
        : (t == null ? void 0 : t.name) === 'assertValue'
          ? t.value
          : '';
  }
  _commit() {
    !this._action ||
      !this._dialog.isShowing() ||
      (this._dialog.close(),
      this._recorder.recordAction(this._action),
      this._recorder.setMode('recording'));
  }
  _showDialog() {
    var l;
    if (
      !((l = this._hoverHighlight) != null && l.elements[0]) ||
      ((this._action = this._generateAction()),
      !this._action || this._action.name !== 'assertText')
    )
      return;
    const t = this._action,
      n = this._recorder.document.createElement('textarea');
    n.setAttribute('spellcheck', 'false'),
      (n.value = this._renderValue(this._action)),
      n.classList.add('text-editor');
    const r = () => {
      var d;
      const a = this._recorder.injectedScript.utils.normalizeWhiteSpace(
          n.value
        ),
        u = (d = this._hoverHighlight) == null ? void 0 : d.elements[0];
      if (!u) return;
      t.text = a;
      const c = this._recorder.injectedScript.utils.elementText(
          this._textCache,
          u
        ).normalized,
        f = a && c.includes(a);
      n.classList.toggle('does-not-match', !f);
    };
    n.addEventListener('input', r);
    const o = this._dialog.show({
        label: 'Assert that element contains text',
        body: n,
        onCommit: () => this._commit(),
      }),
      s = this._recorder.highlight.tooltipPosition(
        this._recorder.highlight.firstBox(),
        o
      );
    this._dialog.moveTo(s.anchorTop, s.anchorLeft), n.focus();
  }
  _commitAssertValue() {
    var n;
    if (this._kind !== 'value') return;
    const t = this._generateAction();
    t &&
      (this._recorder.recordAction(t),
      this._recorder.setMode('recording'),
      (n = this._recorder.overlay) == null ||
        n.flashToolSucceeded('assertingValue'));
  }
}
class a1 {
  constructor(t) {
    (this._listeners = []),
      (this._offsetX = 0),
      (this._measure = { width: 0, height: 0 }),
      (this._recorder = t);
    const n = this._recorder.document;
    (this._overlayElement = n.createElement('x-pw-overlay')),
      this._overlayElement.appendChild(Sp(this._recorder.document, s1));
    const r = n.createElement('x-pw-tools-list');
    this._overlayElement.appendChild(r),
      (this._dragHandle = n.createElement('x-pw-tool-gripper')),
      this._dragHandle.appendChild(n.createElement('x-div')),
      r.appendChild(this._dragHandle),
      (this._recordToggle =
        this._recorder.document.createElement('x-pw-tool-item')),
      (this._recordToggle.title = 'Record'),
      this._recordToggle.classList.add('record'),
      this._recordToggle.appendChild(
        this._recorder.document.createElement('x-div')
      ),
      r.appendChild(this._recordToggle),
      (this._pickLocatorToggle =
        this._recorder.document.createElement('x-pw-tool-item')),
      (this._pickLocatorToggle.title = 'Pick locator'),
      this._pickLocatorToggle.classList.add('pick-locator'),
      this._pickLocatorToggle.appendChild(
        this._recorder.document.createElement('x-div')
      ),
      r.appendChild(this._pickLocatorToggle),
      (this._assertVisibilityToggle =
        this._recorder.document.createElement('x-pw-tool-item')),
      (this._assertVisibilityToggle.title = 'Assert visibility'),
      this._assertVisibilityToggle.classList.add('visibility'),
      this._assertVisibilityToggle.appendChild(
        this._recorder.document.createElement('x-div')
      ),
      r.appendChild(this._assertVisibilityToggle),
      (this._assertTextToggle =
        this._recorder.document.createElement('x-pw-tool-item')),
      (this._assertTextToggle.title = 'Assert text'),
      this._assertTextToggle.classList.add('text'),
      this._assertTextToggle.appendChild(
        this._recorder.document.createElement('x-div')
      ),
      r.appendChild(this._assertTextToggle),
      (this._assertValuesToggle =
        this._recorder.document.createElement('x-pw-tool-item')),
      (this._assertValuesToggle.title = 'Assert value'),
      this._assertValuesToggle.classList.add('value'),
      this._assertValuesToggle.appendChild(
        this._recorder.document.createElement('x-div')
      ),
      r.appendChild(this._assertValuesToggle),
      this._updateVisualPosition(),
      this._refreshListeners();
  }
  _refreshListeners() {
    _p(this._listeners),
      (this._listeners = [
        W(this._dragHandle, 'mousedown', (t) => {
          this._dragState = {
            offsetX: this._offsetX,
            dragStart: { x: t.clientX, y: 0 },
          };
        }),
        W(this._recordToggle, 'click', () => {
          this._recorder.setMode(
            this._recorder.state.mode === 'none' ||
              this._recorder.state.mode === 'standby' ||
              this._recorder.state.mode === 'inspecting'
              ? 'recording'
              : 'standby'
          );
        }),
        W(this._pickLocatorToggle, 'click', () => {
          const t = {
            inspecting: 'standby',
            none: 'inspecting',
            standby: 'inspecting',
            recording: 'recording-inspecting',
            'recording-inspecting': 'recording',
            assertingText: 'recording-inspecting',
            assertingVisibility: 'recording-inspecting',
            assertingValue: 'recording-inspecting',
          };
          this._recorder.setMode(t[this._recorder.state.mode]);
        }),
        W(this._assertVisibilityToggle, 'click', () => {
          this._assertVisibilityToggle.classList.contains('disabled') ||
            this._recorder.setMode(
              this._recorder.state.mode === 'assertingVisibility'
                ? 'recording'
                : 'assertingVisibility'
            );
        }),
        W(this._assertTextToggle, 'click', () => {
          this._assertTextToggle.classList.contains('disabled') ||
            this._recorder.setMode(
              this._recorder.state.mode === 'assertingText'
                ? 'recording'
                : 'assertingText'
            );
        }),
        W(this._assertValuesToggle, 'click', () => {
          this._assertValuesToggle.classList.contains('disabled') ||
            this._recorder.setMode(
              this._recorder.state.mode === 'assertingValue'
                ? 'recording'
                : 'assertingValue'
            );
        }),
      ]);
  }
  install() {
    this._recorder.highlight.appendChild(this._overlayElement),
      this._refreshListeners(),
      this._updateVisualPosition();
  }
  contains(t) {
    return this._recorder.injectedScript.utils.isInsideScope(
      this._overlayElement,
      t
    );
  }
  setUIState(t) {
    this._recordToggle.classList.toggle(
      'active',
      t.mode === 'recording' ||
        t.mode === 'assertingText' ||
        t.mode === 'assertingVisibility' ||
        t.mode === 'assertingValue' ||
        t.mode === 'recording-inspecting'
    ),
      this._pickLocatorToggle.classList.toggle(
        'active',
        t.mode === 'inspecting' || t.mode === 'recording-inspecting'
      ),
      this._assertVisibilityToggle.classList.toggle(
        'active',
        t.mode === 'assertingVisibility'
      ),
      this._assertVisibilityToggle.classList.toggle(
        'disabled',
        t.mode === 'none' || t.mode === 'standby' || t.mode === 'inspecting'
      ),
      this._assertTextToggle.classList.toggle(
        'active',
        t.mode === 'assertingText'
      ),
      this._assertTextToggle.classList.toggle(
        'disabled',
        t.mode === 'none' || t.mode === 'standby' || t.mode === 'inspecting'
      ),
      this._assertValuesToggle.classList.toggle(
        'active',
        t.mode === 'assertingValue'
      ),
      this._assertValuesToggle.classList.toggle(
        'disabled',
        t.mode === 'none' || t.mode === 'standby' || t.mode === 'inspecting'
      ),
      this._offsetX !== t.overlay.offsetX &&
        ((this._offsetX = t.overlay.offsetX), this._updateVisualPosition()),
      t.mode === 'none' ? this._hideOverlay() : this._showOverlay();
  }
  flashToolSucceeded(t) {
    const n =
      t === 'assertingVisibility'
        ? this._assertVisibilityToggle
        : this._assertValuesToggle;
    n.classList.add('succeeded'),
      this._recorder.injectedScript.builtinSetTimeout(
        () => n.classList.remove('succeeded'),
        2e3
      );
  }
  _hideOverlay() {
    this._overlayElement.setAttribute('hidden', 'true');
  }
  _showOverlay() {
    this._overlayElement.hasAttribute('hidden') &&
      (this._overlayElement.removeAttribute('hidden'),
      this._updateVisualPosition());
  }
  _updateVisualPosition() {
    (this._measure = this._overlayElement.getBoundingClientRect()),
      (this._overlayElement.style.left =
        (this._recorder.injectedScript.window.innerWidth -
          this._measure.width) /
          2 +
        this._offsetX +
        'px');
  }
  onMouseMove(t) {
    if (!t.buttons) return (this._dragState = void 0), !1;
    if (this._dragState) {
      this._offsetX =
        this._dragState.offsetX + t.clientX - this._dragState.dragStart.x;
      const n =
        (this._recorder.injectedScript.window.innerWidth -
          this._measure.width) /
          2 -
        10;
      return (
        (this._offsetX = Math.max(-n, Math.min(n, this._offsetX))),
        this._updateVisualPosition(),
        this._recorder.setOverlayState({ offsetX: this._offsetX }),
        B(t),
        !0
      );
    }
    return !1;
  }
  onMouseUp(t) {
    return this._dragState ? (B(t), !0) : !1;
  }
  onClick(t) {
    return this._dragState ? ((this._dragState = void 0), B(t), !0) : !1;
  }
  onDblClick(t) {
    return !1;
  }
}
class u1 {
  constructor(t) {
    (this._listeners = []),
      (this._actionSelectorModel = null),
      (this.state = {
        mode: 'none',
        testIdAttributeName: 'data-testid',
        language: 'javascript',
        overlay: { offsetX: 0 },
      }),
      (this._delegate = {}),
      (this.document = t.document),
      (this.injectedScript = t),
      (this.highlight = t.createHighlight()),
      (this._tools = {
        none: new Cc(),
        standby: new Cc(),
        inspecting: new Cs(this, !1),
        recording: new l1(this),
        'recording-inspecting': new Cs(this, !1),
        assertingText: new Nc(this, 'text'),
        assertingVisibility: new Cs(this, !0),
        assertingValue: new Nc(this, 'value'),
      }),
      (this._currentTool = this._tools.none),
      t.window.top === t.window &&
        ((this.overlay = new a1(this)), this.overlay.setUIState(this.state)),
      (this._stylesheet = new t.window.CSSStyleSheet()),
      this._stylesheet.replaceSync(`
      body[data-pw-cursor=pointer] *, body[data-pw-cursor=pointer] *::after { cursor: pointer !important; }
      body[data-pw-cursor=text] *, body[data-pw-cursor=text] *::after { cursor: text !important; }
    `),
      this.installListeners(),
      t.utils.cacheNormalizedWhitespaces(),
      t.isUnderTest && console.error('Recorder script ready for test');
  }
  installListeners() {
    var r;
    _p(this._listeners),
      (this._listeners = [
        W(this.document, 'click', (i) => this._onClick(i), !0),
        W(this.document, 'auxclick', (i) => this._onClick(i), !0),
        W(this.document, 'dblclick', (i) => this._onDblClick(i), !0),
        W(this.document, 'contextmenu', (i) => this._onContextMenu(i), !0),
        W(this.document, 'dragstart', (i) => this._onDragStart(i), !0),
        W(this.document, 'input', (i) => this._onInput(i), !0),
        W(this.document, 'keydown', (i) => this._onKeyDown(i), !0),
        W(this.document, 'keyup', (i) => this._onKeyUp(i), !0),
        W(this.document, 'pointerdown', (i) => this._onPointerDown(i), !0),
        W(this.document, 'pointerup', (i) => this._onPointerUp(i), !0),
        W(this.document, 'mousedown', (i) => this._onMouseDown(i), !0),
        W(this.document, 'mouseup', (i) => this._onMouseUp(i), !0),
        W(this.document, 'mousemove', (i) => this._onMouseMove(i), !0),
        W(this.document, 'mouseleave', (i) => this._onMouseLeave(i), !0),
        W(this.document, 'mouseenter', (i) => this._onMouseEnter(i), !0),
        W(this.document, 'focus', (i) => this._onFocus(i), !0),
        W(this.document, 'scroll', (i) => this._onScroll(i), !0),
      ]),
      this.highlight.install();
    let t;
    const n = () => {
      this.highlight.install(),
        (t = this.injectedScript.builtinSetTimeout(n, 500));
    };
    (t = this.injectedScript.builtinSetTimeout(n, 500)),
      this._listeners.push(() => clearInterval(t)),
      (r = this.overlay) == null || r.install(),
      this.document.adoptedStyleSheets.push(this._stylesheet);
  }
  _switchCurrentTool() {
    var n, r, i;
    const t = this._tools[this.state.mode];
    t !== this._currentTool &&
      ((r = (n = this._currentTool).cleanup) == null || r.call(n),
      this.clearHighlight(),
      (this._currentTool = t),
      (i = this.injectedScript.document.body) == null ||
        i.setAttribute('data-pw-cursor', t.cursor()));
  }
  setUIState(t, n) {
    var r, i, o, s;
    (this._delegate = n),
      (t.actionPoint &&
        this.state.actionPoint &&
        t.actionPoint.x === this.state.actionPoint.x &&
        t.actionPoint.y === this.state.actionPoint.y) ||
        (!t.actionPoint && !this.state.actionPoint) ||
        (t.actionPoint
          ? this.highlight.showActionPoint(t.actionPoint.x, t.actionPoint.y)
          : this.highlight.hideActionPoint()),
      (this.state = t),
      this.highlight.setLanguage(t.language),
      this._switchCurrentTool(),
      (r = this.overlay) == null || r.setUIState(t),
      (i = this._actionSelectorModel) != null &&
        i.selector &&
        !((o = this._actionSelectorModel) != null && o.elements.length) &&
        (this._actionSelectorModel = null),
      t.actionSelector !==
        ((s = this._actionSelectorModel) == null ? void 0 : s.selector) &&
        (this._actionSelectorModel = t.actionSelector
          ? f1(this.injectedScript, t.actionSelector, this.document)
          : null),
      (this.state.mode === 'none' || this.state.mode === 'standby') &&
        this.updateHighlight(this._actionSelectorModel, !1);
  }
  clearHighlight() {
    var t, n;
    (n = (t = this._currentTool).cleanup) == null || n.call(t),
      this.updateHighlight(null, !1);
  }
  _onClick(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onClick(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onClick) == null ||
        i.call(r, t));
  }
  _onDblClick(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onDblClick(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onDblClick) == null ||
        i.call(r, t));
  }
  _onContextMenu(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onContextMenu) == null ||
        r.call(n, t));
  }
  _onDragStart(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onDragStart) == null ||
        r.call(n, t));
  }
  _onPointerDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onPointerDown) == null ||
        r.call(n, t));
  }
  _onPointerUp(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onPointerUp) == null ||
        r.call(n, t));
  }
  _onMouseDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseDown) == null ||
        r.call(n, t));
  }
  _onMouseUp(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onMouseUp(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onMouseUp) == null ||
        i.call(r, t));
  }
  _onMouseMove(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onMouseMove(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onMouseMove) == null ||
        i.call(r, t));
  }
  _onMouseEnter(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseEnter) == null ||
        r.call(n, t));
  }
  _onMouseLeave(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseLeave) == null ||
        r.call(n, t));
  }
  _onFocus(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onFocus) == null ||
        r.call(n, t));
  }
  _onScroll(t) {
    var n, r;
    t.isTrusted &&
      (this.highlight.hideActionPoint(),
      (r = (n = this._currentTool).onScroll) == null || r.call(n, t));
  }
  _onInput(t) {
    var n, r;
    this._ignoreOverlayEvent(t) ||
      (r = (n = this._currentTool).onInput) == null ||
      r.call(n, t);
  }
  _onKeyDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onKeyDown) == null ||
        r.call(n, t));
  }
  _onKeyUp(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onKeyUp) == null ||
        r.call(n, t));
  }
  updateHighlight(t, n) {
    var i, o;
    let r = t == null ? void 0 : t.tooltipText;
    r === void 0 &&
      !(t != null && t.tooltipList) &&
      t != null &&
      t.selector &&
      (r = this.injectedScript.utils.asLocator(
        this.state.language,
        t.selector
      )),
      this.highlight.updateHighlight((t == null ? void 0 : t.elements) || [], {
        ...t,
        tooltipText: r,
      }),
      n && ((o = (i = this._delegate).highlightUpdated) == null || o.call(i));
  }
  _ignoreOverlayEvent(t) {
    return t
      .composedPath()
      .some((n) => (n.nodeName || '').toLowerCase() === 'x-pw-glass');
  }
  deepEventTarget(t) {
    var n;
    for (const r of t.composedPath())
      if (!((n = this.overlay) != null && n.contains(r))) return r;
    return t.composedPath()[0];
  }
  setMode(t) {
    var n, r;
    (r = (n = this._delegate).setMode) == null || r.call(n, t);
  }
  async performAction(t) {
    var n, r;
    await ((r = (n = this._delegate).performAction) == null
      ? void 0
      : r.call(n, t).catch(() => {}));
  }
  recordAction(t) {
    var n, r;
    (r = (n = this._delegate).recordAction) == null || r.call(n, t);
  }
  setOverlayState(t) {
    var n, r;
    (r = (n = this._delegate).setOverlayState) == null || r.call(n, t);
  }
  setSelector(t) {
    var n, r;
    (r = (n = this._delegate).setSelector) == null || r.call(n, t);
  }
}
class c1 {
  constructor(t) {
    (this._dialogElement = null), (this._recorder = t);
  }
  isShowing() {
    return !!this._dialogElement;
  }
  show(t) {
    const n = this._recorder.document.createElement('x-pw-tool-item');
    (n.title = 'Accept'),
      n.classList.add('accept'),
      n.appendChild(this._recorder.document.createElement('x-div')),
      n.addEventListener('click', () => t.onCommit());
    const r = this._recorder.document.createElement('x-pw-tool-item');
    (r.title = 'Close'),
      r.classList.add('cancel'),
      r.appendChild(this._recorder.document.createElement('x-div')),
      r.addEventListener('click', () => {
        var l;
        this.close(), (l = t.onCancel) == null || l.call(t);
      }),
      (this._dialogElement =
        this._recorder.document.createElement('x-pw-dialog')),
      (this._keyboardListener = (l) => {
        var a;
        if (l.key === 'Escape') {
          this.close(), (a = t.onCancel) == null || a.call(t);
          return;
        }
        if (l.key === 'Enter' && (l.ctrlKey || l.metaKey)) {
          this._dialogElement && t.onCommit();
          return;
        }
      }),
      this._recorder.document.addEventListener(
        'keydown',
        this._keyboardListener,
        !0
      );
    const i = this._recorder.document.createElement('x-pw-tools-list'),
      o = this._recorder.document.createElement('label');
    (o.textContent = t.label),
      i.appendChild(o),
      i.appendChild(this._recorder.document.createElement('x-spacer')),
      i.appendChild(n),
      i.appendChild(r),
      this._dialogElement.appendChild(i);
    const s = this._recorder.document.createElement('x-pw-dialog-body');
    return (
      s.appendChild(t.body),
      this._dialogElement.appendChild(s),
      this._recorder.highlight.appendChild(this._dialogElement),
      this._dialogElement
    );
  }
  moveTo(t, n) {
    this._dialogElement &&
      ((this._dialogElement.style.top = t + 'px'),
      (this._dialogElement.style.left = n + 'px'));
  }
  close() {
    this._dialogElement &&
      (this._dialogElement.remove(),
      this._recorder.document.removeEventListener(
        'keydown',
        this._keyboardListener
      ),
      (this._dialogElement = null));
  }
}
function d1(e) {
  let t = e.activeElement;
  for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Ns(e) {
  return (
    (e.altKey ? 1 : 0) |
    (e.ctrlKey ? 2 : 0) |
    (e.metaKey ? 4 : 0) |
    (e.shiftKey ? 8 : 0)
  );
}
function bc(e) {
  switch (e.which) {
    case 1:
      return 'left';
    case 2:
      return 'middle';
    case 3:
      return 'right';
  }
  return 'left';
}
function bs(e) {
  if (e.target.nodeName === 'CANVAS') return { x: e.offsetX, y: e.offsetY };
}
function B(e) {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}
function As(e) {
  if (!e || e.nodeName !== 'INPUT') return null;
  const t = e;
  return ['checkbox', 'radio'].includes(t.type) ? t : null;
}
function Ls(e) {
  return !e || e.nodeName !== 'INPUT' ? !1 : e.type.toLowerCase() === 'range';
}
function W(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    () => {
      e.removeEventListener(t, n, r);
    }
  );
}
function _p(e) {
  for (const t of e) t();
  e.splice(0, e.length);
}
function f1(e, t, n) {
  try {
    const r = e.parseSelector(t);
    return { selector: t, elements: e.querySelectorAll(r, n) };
  } catch {
    return { selector: t, elements: [] };
  }
}
function Sp(e, { tagName: t, attrs: n, children: r }) {
  const i = e.createElementNS('http://www.w3.org/2000/svg', t);
  if (n) for (const [o, s] of Object.entries(n)) i.setAttribute(o, s);
  if (r) for (const o of r) i.appendChild(Sp(e, o));
  return i;
}
function Ha(e, t, n) {
  return `internal:attr=[${e}=${xe(t, (n == null ? void 0 : n.exact) || !1)}]`;
}
function h1(e, t) {
  return `internal:testid=[${e}=${xe(t, !0)}]`;
}
function p1(e, t) {
  return 'internal:label=' + qe(e, !!(t != null && t.exact));
}
function g1(e, t) {
  return Ha('alt', e, t);
}
function m1(e, t) {
  return Ha('title', e, t);
}
function v1(e, t) {
  return Ha('placeholder', e, t);
}
function y1(e, t) {
  return 'internal:text=' + qe(e, !!(t != null && t.exact));
}
function w1(e, t = {}) {
  const n = [];
  return (
    t.checked !== void 0 && n.push(['checked', String(t.checked)]),
    t.disabled !== void 0 && n.push(['disabled', String(t.disabled)]),
    t.selected !== void 0 && n.push(['selected', String(t.selected)]),
    t.expanded !== void 0 && n.push(['expanded', String(t.expanded)]),
    t.includeHidden !== void 0 &&
      n.push(['include-hidden', String(t.includeHidden)]),
    t.level !== void 0 && n.push(['level', String(t.level)]),
    t.name !== void 0 && n.push(['name', xe(t.name, !!t.exact)]),
    t.pressed !== void 0 && n.push(['pressed', String(t.pressed)]),
    `internal:role=${e}${n.map(([r, i]) => `[${r}=${i}]`).join('')}`
  );
}
const pr = Symbol('selector'),
  x1 = class Sr {
    constructor(t, n, r) {
      if (
        (r != null &&
          r.hasText &&
          (n += ` >> internal:has-text=${qe(r.hasText, !1)}`),
        r != null &&
          r.hasNotText &&
          (n += ` >> internal:has-not-text=${qe(r.hasNotText, !1)}`),
        r != null &&
          r.has &&
          (n += ' >> internal:has=' + JSON.stringify(r.has[pr])),
        r != null &&
          r.hasNot &&
          (n += ' >> internal:has-not=' + JSON.stringify(r.hasNot[pr])),
        (this[pr] = n),
        n)
      ) {
        const s = t.parseSelector(n);
        (this.element = t.querySelector(s, t.document, !1)),
          (this.elements = t.querySelectorAll(s, t.document));
      }
      const i = n,
        o = this;
      (o.locator = (s, l) => new Sr(t, i ? i + ' >> ' + s : s, l)),
        (o.getByTestId = (s) =>
          o.locator(
            h1(t.testIdAttributeNameForStrictErrorAndConsoleCodegen(), s)
          )),
        (o.getByAltText = (s, l) => o.locator(g1(s, l))),
        (o.getByLabel = (s, l) => o.locator(p1(s, l))),
        (o.getByPlaceholder = (s, l) => o.locator(v1(s, l))),
        (o.getByText = (s, l) => o.locator(y1(s, l))),
        (o.getByTitle = (s, l) => o.locator(m1(s, l))),
        (o.getByRole = (s, l = {}) => o.locator(w1(s, l))),
        (o.filter = (s) => new Sr(t, n, s)),
        (o.first = () => o.locator('nth=0')),
        (o.last = () => o.locator('nth=-1')),
        (o.nth = (s) => o.locator(`nth=${s}`)),
        (o.and = (s) =>
          new Sr(t, i + ' >> internal:and=' + JSON.stringify(s[pr]))),
        (o.or = (s) =>
          new Sr(t, i + ' >> internal:or=' + JSON.stringify(s[pr])));
    }
  };
let _1 = x1;
class S1 {
  constructor(t) {
    (this._injectedScript = t),
      !this._injectedScript.window.playwright &&
        ((this._injectedScript.window.playwright = {
          $: (n, r) => this._querySelector(n, !!r),
          $$: (n) => this._querySelectorAll(n),
          inspect: (n) => this._inspect(n),
          selector: (n) => this._selector(n),
          generateLocator: (n, r) => this._generateLocator(n, r),
          resume: () => this._resume(),
          ...new _1(t, ''),
        }),
        delete this._injectedScript.window.playwright.filter,
        delete this._injectedScript.window.playwright.first,
        delete this._injectedScript.window.playwright.last,
        delete this._injectedScript.window.playwright.nth,
        delete this._injectedScript.window.playwright.and,
        delete this._injectedScript.window.playwright.or);
  }
  _querySelector(t, n) {
    if (typeof t != 'string')
      throw new Error("Usage: playwright.query('Playwright >> selector').");
    const r = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelector(
      r,
      this._injectedScript.document,
      n
    );
  }
  _querySelectorAll(t) {
    if (typeof t != 'string')
      throw new Error("Usage: playwright.$$('Playwright >> selector').");
    const n = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelectorAll(
      n,
      this._injectedScript.document
    );
  }
  _inspect(t) {
    if (typeof t != 'string')
      throw new Error("Usage: playwright.inspect('Playwright >> selector').");
    this._injectedScript.window.inspect(this._querySelector(t, !1));
  }
  _selector(t) {
    if (!(t instanceof Element))
      throw new Error('Usage: playwright.selector(element).');
    return this._injectedScript.generateSelectorSimple(t);
  }
  _generateLocator(t, n) {
    if (!(t instanceof Element))
      throw new Error('Usage: playwright.locator(element).');
    const r = this._injectedScript.generateSelectorSimple(t);
    return zn(n || 'javascript', r);
  }
  _resume() {
    this._injectedScript.window.__pw_resume().catch(() => {});
  }
}
function E1(e, t) {
  e = e
    .replace(/AriaRole\s*\.\s*([\w]+)/g, (o, s) => s.toLowerCase())
    .replace(
      /(get_by_role|getByRole)\s*\(\s*(?:["'`])([^'"`]+)['"`]/g,
      (o, s, l) => `${s}(${l.toLowerCase()}`
    );
  const n = [];
  let r = '';
  for (let o = 0; o < e.length; ++o) {
    const s = e[o];
    if (s !== '"' && s !== "'" && s !== '`' && s !== '/') {
      r += s;
      continue;
    }
    const l = e[o - 1] === 'r' || e[o] === '/';
    ++o;
    let a = '';
    for (; o < e.length; ) {
      if (e[o] === '\\') {
        l
          ? (e[o + 1] !== s && (a += e[o]), ++o, (a += e[o]))
          : (++o,
            e[o] === 'n'
              ? (a += `
`)
              : e[o] === 'r'
                ? (a += '\r')
                : e[o] === 't'
                  ? (a += '	')
                  : (a += e[o])),
          ++o;
        continue;
      }
      if (e[o] !== s) {
        a += e[o++];
        continue;
      }
      break;
    }
    n.push({ quote: s, text: a }),
      (r += (s === '/' ? 'r' : '') + '$' + n.length);
  }
  r = r
    .toLowerCase()
    .replace(/get_by_alt_text/g, 'getbyalttext')
    .replace(/get_by_test_id/g, 'getbytestid')
    .replace(/get_by_([\w]+)/g, 'getby$1')
    .replace(/has_not_text/g, 'hasnottext')
    .replace(/has_text/g, 'hastext')
    .replace(/has_not/g, 'hasnot')
    .replace(/frame_locator/g, 'framelocator')
    .replace(/content_frame/g, 'contentframe')
    .replace(/[{}\s]/g, '')
    .replace(/new\(\)/g, '')
    .replace(/new[\w]+\.[\w]+options\(\)/g, '')
    .replace(/\.set/g, ',set')
    .replace(/\.or_\(/g, 'or(')
    .replace(/\.and_\(/g, 'and(')
    .replace(/:/g, '=')
    .replace(/,re\.ignorecase/g, 'i')
    .replace(/,pattern.case_insensitive/g, 'i')
    .replace(/,regexoptions.ignorecase/g, 'i')
    .replace(/re.compile\(([^)]+)\)/g, '$1')
    .replace(/pattern.compile\(([^)]+)\)/g, 'r$1')
    .replace(/newregex\(([^)]+)\)/g, 'r$1')
    .replace(/string=/g, '=')
    .replace(/regex=/g, '=')
    .replace(/,,/g, ',');
  const i = n.map((o) => o.quote).filter((o) => '\'"`'.includes(o))[0];
  return { selector: Ep(r, n, t), preferredQuote: i };
}
function Ac(e) {
  return [...e.matchAll(/\$\d+/g)].length;
}
function Lc(e, t) {
  return e.replace(/\$(\d+)/g, (n, r) => `$${r - t}`);
}
function Ep(e, t, n) {
  for (;;) {
    const i = e.match(/filter\(,?(has=|hasnot=|sethas\(|sethasnot\()/);
    if (!i) break;
    const o = i.index + i[0].length;
    let s = 0,
      l = o;
    for (
      ;
      l < e.length && (e[l] === '(' ? s++ : e[l] === ')' && s--, !(s < 0));
      l++
    );
    let a = e.substring(0, o),
      u = 0;
    ['sethas(', 'sethasnot('].includes(i[1]) &&
      ((u = 1),
      (a = a.replace(/sethas\($/, 'has=').replace(/sethasnot\($/, 'hasnot=')));
    const c = Ac(e.substring(0, o)),
      f = Lc(e.substring(o, l), c),
      d = Ac(f),
      g = t.slice(c, c + d),
      y = JSON.stringify(Ep(f, g, n));
    e = a.replace(/=$/, '2=') + `$${c + 1}` + Lc(e.substring(l + u), d - 1);
    const v = t.slice(0, c),
      w = t.slice(c + d);
    t = v.concat([{ quote: '"', text: y }]).concat(w);
  }
  e = e
    .replace(
      /\,set([\w]+)\(([^)]+)\)/g,
      (i, o, s) => ',' + o.toLowerCase() + '=' + s.toLowerCase()
    )
    .replace(/framelocator\(([^)]+)\)/g, '$1.internal:control=enter-frame')
    .replace(/contentframe(\(\))?/g, 'internal:control=enter-frame')
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      'locator($1).internal:has-text=$2'
    )
    .replace(
      /locator\(([^)]+),hasnottext=([^),]+)\)/g,
      'locator($1).internal:has-not-text=$2'
    )
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      'locator($1).internal:has-text=$2'
    )
    .replace(/locator\(([^)]+)\)/g, '$1')
    .replace(/getbyrole\(([^)]+)\)/g, 'internal:role=$1')
    .replace(/getbytext\(([^)]+)\)/g, 'internal:text=$1')
    .replace(/getbylabel\(([^)]+)\)/g, 'internal:label=$1')
    .replace(/getbytestid\(([^)]+)\)/g, `internal:testid=[${n}=$1]`)
    .replace(
      /getby(placeholder|alt|title)(?:text)?\(([^)]+)\)/g,
      'internal:attr=[$1=$2]'
    )
    .replace(/first(\(\))?/g, 'nth=0')
    .replace(/last(\(\))?/g, 'nth=-1')
    .replace(/nth\(([^)]+)\)/g, 'nth=$1')
    .replace(/filter\(,?hastext=([^)]+)\)/g, 'internal:has-text=$1')
    .replace(/filter\(,?hasnottext=([^)]+)\)/g, 'internal:has-not-text=$1')
    .replace(/filter\(,?has2=([^)]+)\)/g, 'internal:has=$1')
    .replace(/filter\(,?hasnot2=([^)]+)\)/g, 'internal:has-not=$1')
    .replace(/,exact=false/g, '')
    .replace(/,exact=true/g, 's')
    .replace(/\,/g, '][');
  const r = e.split('.');
  for (let i = 0; i < r.length - 1; i++)
    if (
      r[i] === 'internal:control=enter-frame' &&
      r[i + 1].startsWith('nth=')
    ) {
      const [o] = r.splice(i, 1);
      r.splice(i + 1, 0, o);
    }
  return r
    .map((i) =>
      !i.startsWith('internal:') || i === 'internal:control'
        ? i.replace(/\$(\d+)/g, (o, s) => t[+s - 1].text)
        : ((i = i.includes('[') ? i.replace(/\]/, '') + ']' : i),
          (i = i
            .replace(/(?:r)\$(\d+)(i)?/g, (o, s, l) => {
              const a = t[+s - 1];
              return i.startsWith('internal:attr') ||
                i.startsWith('internal:testid') ||
                i.startsWith('internal:role')
                ? xe(new RegExp(a.text), !1) + (l || '')
                : qe(new RegExp(a.text, l), !1);
            })
            .replace(/\$(\d+)(i|s)?/g, (o, s, l) => {
              const a = t[+s - 1];
              return i.startsWith('internal:has=') ||
                i.startsWith('internal:has-not=')
                ? a.text
                : i.startsWith('internal:testid')
                  ? xe(a.text, !0)
                  : i.startsWith('internal:attr') ||
                      i.startsWith('internal:role')
                    ? xe(a.text, l === 's')
                    : qe(a.text, l === 's');
            })),
          i)
    )
    .join(' >> ');
}
function T1(e, t, n) {
  try {
    return Uo(t), t;
  } catch {}
  try {
    const { selector: r, preferredQuote: i } = E1(t, n),
      o = xh(e, r, void 0, void 0, i),
      s = Ic(e, t);
    if (o.some((l) => Ic(e, l) === s)) return r;
  } catch {}
  return '';
}
function Ic(e, t) {
  return (
    (t = t.replace(/\s/g, '')),
    e === 'javascript' && (t = t.replace(/\\?["`]/g, "'")),
    t
  );
}
const k1 = ({ url: e }) =>
    x.jsxs('div', {
      className: 'browser-frame-header',
      children: [
        x.jsxs('div', {
          style: { whiteSpace: 'nowrap' },
          children: [
            x.jsx('span', {
              className: 'browser-frame-dot',
              style: { backgroundColor: 'rgb(242, 95, 88)' },
            }),
            x.jsx('span', {
              className: 'browser-frame-dot',
              style: { backgroundColor: 'rgb(251, 190, 60)' },
            }),
            x.jsx('span', {
              className: 'browser-frame-dot',
              style: { backgroundColor: 'rgb(88, 203, 66)' },
            }),
          ],
        }),
        x.jsx('div', {
          className: 'browser-frame-address-bar',
          title: e || 'about:blank',
          children: e || 'about:blank',
        }),
        x.jsx('div', {
          style: { marginLeft: 'auto' },
          children: x.jsxs('div', {
            children: [
              x.jsx('span', { className: 'browser-frame-menu-bar' }),
              x.jsx('span', { className: 'browser-frame-menu-bar' }),
              x.jsx('span', { className: 'browser-frame-menu-bar' }),
            ],
          }),
        }),
      ],
    }),
  ew = ({
    action: e,
    sdkLanguage: t,
    testIdAttributeName: n,
    isInspecting: r,
    setIsInspecting: i,
    highlightedLocator: o,
    setHighlightedLocator: s,
    openPage: l,
  }) => {
    const [a, u] = M.useState('action'),
      c = !1,
      f = M.useMemo(() => A1(e), [e]),
      d = M.useMemo(() => {
        const g = f[a];
        return g ? L1(g) : void 0;
      }, [f, a]);
    return x.jsxs('div', {
      className: 'snapshot-tab vbox',
      children: [
        x.jsxs(Ia, {
          children: [
            x.jsx(dn, {
              className: 'pick-locator',
              title: 'Pick locator',
              icon: 'target',
              toggled: r,
              onClick: () => i(!r),
              disabled: c,
            }),
            ['action', 'before', 'after'].map((g) =>
              x.jsx(
                Eh,
                {
                  id: g,
                  title: b1(g),
                  selected: a === g,
                  onSelect: () => u(g),
                },
                g
              )
            ),
            x.jsx('div', { style: { flex: 'auto' } }),
            x.jsx(dn, {
              icon: 'link-external',
              title: 'Open snapshot in a new tab',
              disabled: !(d != null && d.popoutUrl) || c,
              onClick: () => {
                l || (l = window.open);
                const g = l((d == null ? void 0 : d.popoutUrl) || '', '_blank');
                g == null ||
                  g.addEventListener('DOMContentLoaded', () => {
                    const y = new vp(g, !1, t, n, 1, 'chromium', []);
                    new S1(y);
                  });
              },
            }),
          ],
        }),
        x.jsx(C1, {
          snapshotUrls: d,
          sdkLanguage: t,
          testIdAttributeName: n,
          isInspecting: r,
          setIsInspecting: i,
          highlightedLocator: o,
          setHighlightedLocator: s,
        }),
        c,
      ],
    });
  },
  C1 = ({
    snapshotUrls: e,
    sdkLanguage: t,
    testIdAttributeName: n,
    isInspecting: r,
    setIsInspecting: i,
    highlightedLocator: o,
    setHighlightedLocator: s,
  }) => {
    const l = M.useRef(null),
      a = M.useRef(null),
      [u, c] = M.useState({ viewport: kp, url: '' }),
      f = M.useRef({ iteration: 0, visibleIframe: 0 });
    return (
      M.useEffect(() => {
        (async () => {
          const d = f.current.iteration + 1,
            g = 1 - f.current.visibleIframe;
          f.current.iteration = d;
          const y = await I1(e == null ? void 0 : e.snapshotInfoUrl);
          if (f.current.iteration !== d) return;
          const v = [l, a][g].current;
          if (v) {
            let w = () => {};
            const p = new Promise((h) => (w = h));
            try {
              v.addEventListener('load', w), v.addEventListener('error', w);
              const h = (e == null ? void 0 : e.snapshotUrl) || M1;
              v.contentWindow
                ? v.contentWindow.location.replace(h)
                : (v.src = h),
                await p;
            } catch {
            } finally {
              v.removeEventListener('load', w),
                v.removeEventListener('error', w);
            }
          }
          f.current.iteration === d && ((f.current.visibleIframe = g), c(y));
        })();
      }, [e]),
      x.jsxs('div', {
        className: 'vbox',
        tabIndex: 0,
        onKeyDown: (d) => {
          d.key === 'Escape' && r && i(!1);
        },
        children: [
          x.jsx(Mc, {
            isInspecting: r,
            sdkLanguage: t,
            testIdAttributeName: n,
            highlightedLocator: o,
            setHighlightedLocator: s,
            iframe: l.current,
            iteration: f.current.iteration,
          }),
          x.jsx(Mc, {
            isInspecting: r,
            sdkLanguage: t,
            testIdAttributeName: n,
            highlightedLocator: o,
            setHighlightedLocator: s,
            iframe: a.current,
            iteration: f.current.iteration,
          }),
          x.jsx(N1, {
            snapshotInfo: u,
            children: x.jsxs('div', {
              className: 'snapshot-switcher',
              children: [
                x.jsx('iframe', {
                  ref: l,
                  name: 'snapshot',
                  title: 'DOM Snapshot',
                  className: et(
                    f.current.visibleIframe === 0 && 'snapshot-visible'
                  ),
                }),
                x.jsx('iframe', {
                  ref: a,
                  name: 'snapshot',
                  title: 'DOM Snapshot',
                  className: et(
                    f.current.visibleIframe === 1 && 'snapshot-visible'
                  ),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  N1 = ({ snapshotInfo: e, children: t }) => {
    const [n, r] = To(),
      o = { width: e.viewport.width, height: e.viewport.height + 40 },
      s = Math.min(n.width / o.width, n.height / o.height, 1),
      l = { x: (n.width - o.width) / 2, y: (n.height - o.height) / 2 };
    return x.jsx('div', {
      ref: r,
      className: 'snapshot-wrapper',
      children: x.jsxs('div', {
        className: 'snapshot-container',
        style: {
          width: o.width + 'px',
          height: o.height + 'px',
          transform: `translate(${l.x}px, ${l.y}px) scale(${s})`,
        },
        children: [x.jsx(k1, { url: e.url }), t],
      }),
    });
  };
function b1(e) {
  return e === 'before'
    ? 'Before'
    : e === 'after'
      ? 'After'
      : e === 'action'
        ? 'Action'
        : e;
}
const Mc = ({
  iframe: e,
  isInspecting: t,
  sdkLanguage: n,
  testIdAttributeName: r,
  highlightedLocator: i,
  setHighlightedLocator: o,
  iteration: s,
}) => (
  M.useEffect(() => {
    const l = [],
      a =
        new URLSearchParams(window.location.search).get('isUnderTest') ===
        'true';
    try {
      Tp(l, n, r, a, '', e == null ? void 0 : e.contentWindow);
    } catch {}
    for (const { recorder: u, frameSelector: c } of l) {
      const f = T1(n, i, r);
      u.setUIState(
        {
          mode: t ? 'inspecting' : 'none',
          actionSelector: f.startsWith(c)
            ? f.substring(c.length).trim()
            : void 0,
          language: n,
          testIdAttributeName: r,
          overlay: { offsetX: 0 },
        },
        {
          async setSelector(d) {
            o(zn(n, c + d));
          },
          highlightUpdated() {
            for (const d of l) d.recorder !== u && d.recorder.clearHighlight();
          },
        }
      );
    }
  }, [e, t, i, o, n, r, s]),
  x.jsx(x.Fragment, {})
);
function Tp(e, t, n, r, i, o) {
  if (!o) return;
  const s = o;
  if (!s._recorder) {
    const l = new vp(o, r, t, n, 1, 'chromium', []),
      a = new u1(l);
    (s._injectedScript = l), (s._recorder = { recorder: a, frameSelector: i });
  }
  e.push(s._recorder);
  for (let l = 0; l < o.frames.length; ++l) {
    const a = o.frames[l],
      u = a.frameElement
        ? s._injectedScript.generateSelectorSimple(a.frameElement, {
            omitInternalEngines: !0,
            testIdAttributeName: n,
          }) + ' >> internal:control=enter-frame >> '
        : '';
    Tp(e, t, n, r, i + u, a);
  }
}
function A1(e) {
  if (!e) return {};
  let t = e.beforeSnapshot
      ? { action: e, snapshotName: e.beforeSnapshot }
      : void 0,
    n = e;
  for (; !t && n; )
    (n = gv(n)),
      (t =
        n != null && n.afterSnapshot
          ? { action: n, snapshotName: n == null ? void 0 : n.afterSnapshot }
          : void 0);
  const r = e.afterSnapshot ? { action: e, snapshotName: e.afterSnapshot } : t,
    i = e.inputSnapshot
      ? { action: e, snapshotName: e.inputSnapshot, hasInputTarget: !0 }
      : r;
  return i && (i.point = e.point), { action: i, before: t, after: r };
}
function L1(e) {
  const t = new URLSearchParams();
  t.set('trace', yo(e.action).traceUrl),
    t.set('name', e.snapshotName),
    e.point &&
      (t.set('pointX', String(e.point.x)),
      t.set('pointY', String(e.point.y)),
      e.hasInputTarget && t.set('hasInputTarget', '1'));
  const n = new URL(
      `snapshot/${e.action.pageId}?${t.toString()}`,
      window.location.href
    ).toString(),
    r = new URL(
      `snapshotInfo/${e.action.pageId}?${t.toString()}`,
      window.location.href
    ).toString(),
    i = new URLSearchParams();
  i.set('r', n),
    i.set('trace', yo(e.action).traceUrl),
    e.point &&
      (i.set('pointX', String(e.point.x)),
      i.set('pointY', String(e.point.y)),
      e.hasInputTarget && t.set('hasInputTarget', '1'));
  const o = new URL(
    `snapshot.html?${i.toString()}`,
    window.location.href
  ).toString();
  return { snapshotInfoUrl: r, snapshotUrl: n, popoutUrl: o };
}
async function I1(e) {
  const t = { url: '', viewport: kp, timestamp: void 0, wallTime: void 0 };
  if (e) {
    const r = await (await fetch(e)).json();
    r.error ||
      ((t.url = r.url),
      (t.viewport = r.viewport),
      (t.timestamp = r.timestamp),
      (t.wallTime = r.wallTime));
  }
  return t;
}
const kp = { width: 1280, height: 720 },
  M1 = 'data:text/html,<body style="background: #ddd"></body>',
  P1 = La,
  R1 = ({ stack: e, setSelectedFrame: t, selectedFrame: n }) => {
    const r = e || [];
    return x.jsx(P1, {
      name: 'stack-trace',
      items: r,
      selectedItem: r[n],
      render: (i) => {
        const o = i.file[1] === ':' ? '\\' : '/';
        return x.jsxs(x.Fragment, {
          children: [
            x.jsx('span', {
              className: 'stack-trace-frame-function',
              children: i.function || '(anonymous)',
            }),
            x.jsx('span', {
              className: 'stack-trace-frame-location',
              children: i.file.split(o).pop(),
            }),
            x.jsx('span', {
              className: 'stack-trace-frame-line',
              children: ':' + i.line,
            }),
          ],
        });
      },
      onSelected: (i) => t(r.indexOf(i)),
    });
  },
  tw = ({
    stack: e,
    sources: t,
    rootDir: n,
    fallbackLocation: r,
    stackFrameLocation: i,
    onOpenExternally: o,
  }) => {
    const [s, l] = M.useState(),
      [a, u] = M.useState(0);
    M.useEffect(() => {
      s !== e && (l(e), u(0));
    }, [e, s, l, u]);
    const {
        source: c,
        highlight: f,
        targetLine: d,
        fileName: g,
        location: y,
      } = Xp(
        async () => {
          var I, D, N, P;
          const h = e == null ? void 0 : e[a],
            m = !(h != null && h.file);
          if (m && !r)
            return {
              source: { file: '', errors: [], content: void 0 },
              targetLine: 0,
              highlight: [],
            };
          const _ = m ? r.file : h.file;
          let T = t.get(_);
          T ||
            ((T = {
              errors:
                ((I = r == null ? void 0 : r.source) == null
                  ? void 0
                  : I.errors) || [],
              content:
                (D = r == null ? void 0 : r.source) == null
                  ? void 0
                  : D.content,
            }),
            t.set(_, T));
          const E = m ? r : h,
            k = m
              ? (r == null ? void 0 : r.line) ||
                ((N = T.errors[0]) == null ? void 0 : N.line) ||
                0
              : h.line,
            b = n && _.startsWith(n) ? _.substring(n.length + 1) : _,
            S = T.errors.map((Y) => ({
              type: 'error',
              line: Y.line,
              message: Y.message,
            }));
          if (
            (S.push({ line: k, type: 'running' }),
            ((P = r == null ? void 0 : r.source) == null
              ? void 0
              : P.content) !== void 0)
          )
            T.content = r.source.content;
          else if (T.content === void 0 || m) {
            const Y = await $1(_);
            try {
              let it = await fetch(`sha1/src@${Y}.txt`);
              it.status === 404 &&
                (it = await fetch(`file?path=${encodeURIComponent(_)}`)),
                it.status >= 400
                  ? (T.content = `<Unable to read "${_}">`)
                  : (T.content = await it.text());
            } catch {
              T.content = `<Unable to read "${_}">`;
            }
          }
          return {
            source: T,
            highlight: S,
            targetLine: k,
            fileName: b,
            location: E,
          };
        },
        [e, a, n, r],
        { source: { errors: [], content: 'Loading…' }, highlight: [] }
      ),
      v = M.useCallback(() => {
        y &&
          (o
            ? o(y)
            : (window.location.href = `vscode://file//${y.file}:${y.line}`));
      }, [o, y]),
      w = ((e == null ? void 0 : e.length) ?? 0) > 1,
      p = O1(g);
    return x.jsx(Gf, {
      sidebarSize: 200,
      orientation: i === 'bottom' ? 'vertical' : 'horizontal',
      sidebarHidden: !w,
      main: x.jsxs('div', {
        className: 'vbox',
        'data-testid': 'source-code',
        children: [
          g &&
            x.jsxs(Ia, {
              children: [
                x.jsx('div', {
                  className: 'source-tab-file-name',
                  title: g,
                  children: x.jsx('div', { children: p }),
                }),
                x.jsx(Zv, { description: 'Copy filename', value: p }),
                y &&
                  x.jsx(dn, {
                    icon: 'link-external',
                    title: 'Open in VS Code',
                    onClick: v,
                  }),
              ],
            }),
          x.jsx(Vo, {
            text: c.content || '',
            language: 'javascript',
            highlight: f,
            revealLine: d,
            readOnly: !0,
            lineNumbers: !0,
          }),
        ],
      }),
      sidebar: x.jsx(R1, { stack: e, selectedFrame: a, setSelectedFrame: u }),
    });
  };
async function $1(e) {
  const t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest('SHA-1', t),
    r = [],
    i = new DataView(n);
  for (let o = 0; o < i.byteLength; o += 1) {
    const s = i.getUint8(o).toString(16).padStart(2, '0');
    r.push(s);
  }
  return r.join('');
}
function O1(e) {
  if (!e) return '';
  const t = e != null && e.includes('/') ? '/' : '\\';
  return (e == null ? void 0 : e.split(t).pop()) ?? '';
}
const nw = ({
  showScreenshot: e,
  sdkLanguage: t,
  setIsInspecting: n,
  highlightedLocator: r,
  setHighlightedLocator: i,
}) =>
  x.jsxs('div', {
    className: 'vbox',
    style: { backgroundColor: 'var(--vscode-sideBar-background)' },
    children: [
      x.jsx('div', {
        style: {
          margin: '10px 0px 10px 10px',
          color: 'var(--vscode-editorCodeLens-foreground)',
          flex: 'none',
        },
        children: 'Locator',
      }),
      x.jsx('div', {
        style: { margin: '0 10px 10px', flex: 'auto' },
        children: x.jsx(Vo, {
          text: e
            ? '/* disable "show screenshot" setting to pick locator */'
            : r,
          language: t,
          focusOnChange: !0,
          isFocused: !0,
          wrapLines: !0,
          onChange: (o) => {
            i(o), n(!1);
          },
        }),
      }),
      x.jsx('div', {
        style: { position: 'absolute', right: 5, top: 5 },
        children: x.jsx(dn, {
          icon: 'files',
          title: 'Copy locator',
          onClick: () => {
            Jp(r);
          },
        }),
      }),
    ],
  });
export {
  X1 as A,
  ew as B,
  Zv as C,
  s0 as D,
  tw as E,
  F1 as F,
  S0 as G,
  q1 as H,
  nw as I,
  Jp as J,
  A1 as K,
  La as L,
  W1 as M,
  Z1 as N,
  L1 as O,
  _h as P,
  C1 as Q,
  Ze as R,
  Gf as S,
  dn as T,
  bp as U,
  D1 as V,
  u0 as _,
  H1 as a,
  Ms as b,
  sv as c,
  U1 as d,
  V1 as e,
  et as f,
  Ia as g,
  qa as h,
  B1 as i,
  x as j,
  Q1 as k,
  K1 as l,
  Is as m,
  zn as n,
  xo as o,
  z1 as p,
  T0 as q,
  M as r,
  Yt as s,
  tg as t,
  To as u,
  eg as v,
  Y1 as w,
  Vo as x,
  G1 as y,
  J1 as z,
};
