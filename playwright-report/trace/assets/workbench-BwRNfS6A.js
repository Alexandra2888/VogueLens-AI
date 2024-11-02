import {
  r as d,
  j as e,
  L as Mt,
  k as Vt,
  l as _t,
  n as kt,
  m as F,
  P as J,
  f as K,
  C as Gt,
  o as Yt,
  u as ht,
  p as St,
  G as qt,
  q as Kt,
  v as Jt,
  w as Qt,
  x as Zt,
  h as jt,
  y as te,
  z as ee,
  A as se,
  N as ie,
  S as wt,
  B as ne,
  D as Nt,
  T as bt,
  I as ae,
  E as re,
} from './inspectorTab-CU3eUCmV.js';
const ce = Mt;
function le({
  name: t,
  rootItem: s,
  render: i,
  icon: n,
  isError: c,
  isVisible: l,
  selectedItem: a,
  onAccepted: r,
  onSelected: o,
  onHighlighted: x,
  treeState: h,
  setTreeState: v,
  noItemsMessage: m,
  dataTestId: b,
  autoExpandDepth: j,
}) {
  const w = d.useMemo(() => oe(s, a, h.expandedItems, j || 0), [s, a, h, j]),
    M = d.useMemo(() => {
      if (!l) return [...w.keys()];
      const f = new Map(),
        N = (T) => {
          const L = f.get(T);
          if (L !== void 0) return L;
          let R = T.children.some((z) => N(z));
          for (const z of T.children) {
            const G = N(z);
            R = R || G;
          }
          const X = l(T) || R;
          return f.set(T, X), X;
        };
      for (const T of w.keys()) N(T);
      const y = [];
      for (const T of w.keys()) l(T) && y.push(T);
      return y;
    }, [w, l]);
  return e.jsx(ce, {
    name: t,
    items: M,
    id: (f) => f.id,
    dataTestId: b || t + '-tree',
    render: (f) => {
      const N = i(f);
      return e.jsxs(e.Fragment, {
        children: [
          n &&
            e.jsx('div', {
              className: 'codicon ' + (n(f) || 'blank'),
              style: { minWidth: 16, marginRight: 4 },
            }),
          typeof N == 'string'
            ? e.jsx('div', {
                style: { textOverflow: 'ellipsis', overflow: 'hidden' },
                children: N,
              })
            : N,
        ],
      });
    },
    icon: (f) => {
      const N = w.get(f).expanded;
      if (typeof N == 'boolean')
        return N ? 'codicon-chevron-down' : 'codicon-chevron-right';
    },
    isError: (f) => (c == null ? void 0 : c(f)) || !1,
    indent: (f) => w.get(f).depth,
    selectedItem: a,
    onAccepted: (f) => (r == null ? void 0 : r(f)),
    onSelected: (f) => (o == null ? void 0 : o(f)),
    onHighlighted: (f) => (x == null ? void 0 : x(f)),
    onLeftArrow: (f) => {
      const { expanded: N, parent: y } = w.get(f);
      N
        ? (h.expandedItems.set(f.id, !1), v({ ...h }))
        : y && (o == null || o(y));
    },
    onRightArrow: (f) => {
      f.children.length && (h.expandedItems.set(f.id, !0), v({ ...h }));
    },
    onIconClicked: (f) => {
      const { expanded: N } = w.get(f);
      if (N) {
        for (let y = a; y; y = y.parent)
          if (y === f) {
            o == null || o(f);
            break;
          }
        h.expandedItems.set(f.id, !1);
      } else h.expandedItems.set(f.id, !0);
      v({ ...h });
    },
    noItemsMessage: m,
  });
}
function oe(t, s, i, n) {
  const c = new Map(),
    l = new Set();
  for (let r = s == null ? void 0 : s.parent; r; r = r.parent) l.add(r.id);
  const a = (r, o) => {
    for (const x of r.children) {
      const h = l.has(x.id) || i.get(x.id),
        v = n > o && c.size < 25 && h !== !1,
        m = x.children.length ? (h ?? v) : void 0;
      c.set(x, { depth: o, expanded: m, parent: t === r ? null : r }),
        m && a(x, o + 1);
    }
  };
  return a(t, 0), c;
}
const he = le,
  de = ({
    actions: t,
    selectedAction: s,
    selectedTime: i,
    setSelectedTime: n,
    sdkLanguage: c,
    onSelected: l,
    onHighlighted: a,
    revealConsole: r,
    isLive: o,
  }) => {
    const [x, h] = d.useState({ expandedItems: new Map() }),
      { rootItem: v, itemMap: m } = d.useMemo(() => Vt(t), [t]),
      { selectedItem: b } = d.useMemo(
        () => ({ selectedItem: s ? m.get(s.callId) : void 0 }),
        [m, s]
      );
    return e.jsxs('div', {
      className: 'vbox',
      children: [
        i &&
          e.jsxs('div', {
            className: 'action-list-show-all',
            onClick: () => n(void 0),
            children: [
              e.jsx('span', { className: 'codicon codicon-triangle-left' }),
              'Show all',
            ],
          }),
        e.jsx(he, {
          name: 'actions',
          rootItem: v,
          treeState: x,
          setTreeState: h,
          selectedItem: b,
          onSelected: (j) => (l == null ? void 0 : l(j.action)),
          onHighlighted: (j) =>
            a == null ? void 0 : a(j == null ? void 0 : j.action),
          onAccepted: (j) =>
            n({ minimum: j.action.startTime, maximum: j.action.endTime }),
          isError: (j) => {
            var w, M;
            return !!(
              (M = (w = j.action) == null ? void 0 : w.error) != null &&
              M.message
            );
          },
          isVisible: (j) =>
            !i ||
            (j.action.startTime <= i.maximum && j.action.endTime >= i.minimum),
          render: (j) =>
            dt(j.action, {
              sdkLanguage: c,
              revealConsole: r,
              isLive: o,
              showDuration: !0,
              showBadges: !0,
            }),
        }),
      ],
    });
  },
  dt = (t, s) => {
    const {
        sdkLanguage: i,
        revealConsole: n,
        isLive: c,
        showDuration: l,
        showBadges: a,
      } = s,
      { errors: r, warnings: o } = _t(t),
      x = t.params.selector ? kt(i || 'javascript', t.params.selector) : void 0;
    let h = '';
    return (
      t.endTime
        ? (h = F(t.endTime - t.startTime))
        : t.error
          ? (h = 'Timed out')
          : c || (h = '-'),
      e.jsxs(e.Fragment, {
        children: [
          e.jsxs('div', {
            className: 'action-title',
            title: t.apiName,
            children: [
              e.jsx('span', { children: t.apiName }),
              x &&
                e.jsx('div', {
                  className: 'action-selector',
                  title: x,
                  children: x,
                }),
              t.method === 'goto' &&
                t.params.url &&
                e.jsx('div', {
                  className: 'action-url',
                  title: t.params.url,
                  children: t.params.url,
                }),
              t.class === 'APIRequestContext' &&
                t.params.url &&
                e.jsx('div', {
                  className: 'action-url',
                  title: t.params.url,
                  children: me(t.params.url),
                }),
            ],
          }),
          (l || a) && e.jsx('div', { className: 'spacer' }),
          l &&
            e.jsx('div', {
              className: 'action-duration',
              children:
                h || e.jsx('span', { className: 'codicon codicon-loading' }),
            }),
          a &&
            e.jsxs('div', {
              className: 'action-icons',
              onClick: () => (n == null ? void 0 : n()),
              children: [
                !!r &&
                  e.jsxs('div', {
                    className: 'action-icon',
                    children: [
                      e.jsx('span', { className: 'codicon codicon-error' }),
                      e.jsx('span', {
                        className: 'action-icon-value',
                        children: r,
                      }),
                    ],
                  }),
                !!o &&
                  e.jsxs('div', {
                    className: 'action-icon',
                    children: [
                      e.jsx('span', { className: 'codicon codicon-warning' }),
                      e.jsx('span', {
                        className: 'action-icon-value',
                        children: o,
                      }),
                    ],
                  }),
              ],
            }),
        ],
      })
    );
  };
function me(t) {
  try {
    const s = new URL(t);
    return s.pathname + s.search;
  } catch {
    return t;
  }
}
const ue = ({ action: t, sdkLanguage: s }) => {
  if (!t) return e.jsx(J, { text: 'No action selected' });
  const i = { ...t.params };
  delete i.info;
  const n = Object.keys(i),
    c = t.startTime + (t.context.wallTime - t.context.startTime),
    l = new Date(c).toLocaleString(),
    a = t.endTime ? F(t.endTime - t.startTime) : 'Timed Out';
  return e.jsxs('div', {
    className: 'call-tab',
    children: [
      e.jsx('div', { className: 'call-line', children: t.apiName }),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx('div', { className: 'call-section', children: 'Time' }),
          l &&
            e.jsxs('div', {
              className: 'call-line',
              children: [
                'wall time:',
                e.jsx('span', {
                  className: 'call-value datetime',
                  title: l,
                  children: l,
                }),
              ],
            }),
          e.jsxs('div', {
            className: 'call-line',
            children: [
              'duration:',
              e.jsx('span', {
                className: 'call-value datetime',
                title: a,
                children: a,
              }),
            ],
          }),
        ],
      }),
      !!n.length &&
        e.jsx('div', { className: 'call-section', children: 'Parameters' }),
      !!n.length && n.map((r, o) => yt(Tt(t, r, i[r], s), 'param-' + o)),
      !!t.result &&
        e.jsx('div', { className: 'call-section', children: 'Return value' }),
      !!t.result &&
        Object.keys(t.result).map((r, o) =>
          yt(Tt(t, r, t.result[r], s), 'result-' + o)
        ),
    ],
  });
};
function yt(t, s) {
  let i = t.text.replace(/\n/g, '↵');
  return (
    t.type === 'string' && (i = `"${i}"`),
    e.jsxs(
      'div',
      {
        className: 'call-line',
        children: [
          t.name,
          ':',
          e.jsx('span', {
            className: K('call-value', t.type),
            title: t.text,
            children: i,
          }),
          ['string', 'number', 'object', 'locator'].includes(t.type) &&
            e.jsx(Gt, { value: t.text }),
        ],
      },
      s
    )
  );
}
function Tt(t, s, i, n) {
  const c = t.method.includes('eval') || t.method === 'waitForFunction';
  if (s === 'files') return { text: '<files>', type: 'string', name: s };
  if (
    ((s === 'eventInit' || s === 'expectedValue' || (s === 'arg' && c)) &&
      (i = tt(i.value, new Array(10).fill({ handle: '<handle>' }))),
    ((s === 'value' && c) || (s === 'received' && t.method === 'expect')) &&
      (i = tt(i, new Array(10).fill({ handle: '<handle>' }))),
    s === 'selector')
  )
    return {
      text: kt(n || 'javascript', t.params.selector),
      type: 'locator',
      name: 'locator',
    };
  const l = typeof i;
  return l !== 'object' || i === null
    ? { text: String(i), type: l, name: s }
    : i.guid
      ? { text: '<handle>', type: 'handle', name: s }
      : { text: JSON.stringify(i).slice(0, 1e3), type: 'object', name: s };
}
function tt(t, s) {
  if (t.n !== void 0) return t.n;
  if (t.s !== void 0) return t.s;
  if (t.b !== void 0) return t.b;
  if (t.v !== void 0) {
    if (t.v === 'undefined') return;
    if (t.v === 'null') return null;
    if (t.v === 'NaN') return NaN;
    if (t.v === 'Infinity') return 1 / 0;
    if (t.v === '-Infinity') return -1 / 0;
    if (t.v === '-0') return -0;
  }
  if (t.d !== void 0) return new Date(t.d);
  if (t.r !== void 0) return new RegExp(t.r.p, t.r.f);
  if (t.a !== void 0) return t.a.map((i) => tt(i, s));
  if (t.o !== void 0) {
    const i = {};
    for (const { k: n, v: c } of t.o) i[n] = tt(c, s);
    return i;
  }
  return t.h !== void 0 ? (s === void 0 ? '<object>' : s[t.h]) : '<object>';
}
const xe = Mt,
  fe = ({ action: t, isLive: s }) => {
    const i = d.useMemo(() => {
      var a;
      if (!t || !t.log.length) return [];
      const n = t.log,
        c = t.context.wallTime - t.context.startTime,
        l = [];
      for (let r = 0; r < n.length; ++r) {
        let o = '';
        if (n[r].time !== -1) {
          const x = (a = n[r]) == null ? void 0 : a.time;
          r + 1 < n.length
            ? (o = F(n[r + 1].time - x))
            : t.endTime > 0
              ? (o = F(t.endTime - x))
              : s
                ? (o = F(Date.now() - c - x))
                : (o = '-');
        }
        l.push({ message: n[r].message, time: o });
      }
      return l;
    }, [t, s]);
    return i.length
      ? e.jsx(xe, {
          name: 'log',
          items: i,
          render: (n) =>
            e.jsxs('div', {
              className: 'log-list-item',
              children: [
                e.jsx('span', {
                  className: 'log-list-duration',
                  children: n.time,
                }),
                n.message,
              ],
            }),
          notSelectable: !0,
        })
      : e.jsx(J, { text: 'No log entries' });
  },
  pe = ({ error: t }) => {
    const s = d.useMemo(() => Yt(t), [t]);
    return e.jsx('div', {
      className: 'error-message',
      dangerouslySetInnerHTML: { __html: s || '' },
    });
  };
function ge(t) {
  return d.useMemo(() => {
    if (!t) return { errors: new Map() };
    const s = new Map();
    for (const i of t.errorDescriptors) s.set(i.message, i);
    return { errors: s };
  }, [t]);
}
const ve = ({ errorsModel: t, sdkLanguage: s, revealInSource: i }) =>
    t.errors.size
      ? e.jsx('div', {
          className: 'fill',
          style: { overflow: 'auto' },
          children: [...t.errors.entries()].map(([n, c]) => {
            var o;
            let l, a;
            const r = (o = c.stack) == null ? void 0 : o[0];
            return (
              r &&
                ((l = r.file.replace(/.*[/\\](.*)/, '$1') + ':' + r.line),
                (a = r.file + ':' + r.line)),
              e.jsxs(
                'div',
                {
                  children: [
                    e.jsxs('div', {
                      className: 'hbox',
                      style: {
                        alignItems: 'center',
                        padding: '5px 10px',
                        minHeight: 36,
                        fontWeight: 'bold',
                        color: 'var(--vscode-errorForeground)',
                      },
                      children: [
                        c.action && dt(c.action, { sdkLanguage: s }),
                        l &&
                          e.jsxs('div', {
                            className: 'action-location',
                            children: [
                              '@ ',
                              e.jsx('span', {
                                title: a,
                                onClick: () => i(c),
                                children: l,
                              }),
                            ],
                          }),
                      ],
                    }),
                    e.jsx(pe, { error: n }),
                  ],
                },
                n
              )
            );
          }),
        })
      : e.jsx(J, { text: 'No errors' }),
  Ct = { width: 200, height: 45 },
  _ = 2.5,
  je = Ct.height + _ * 2,
  we = ({ model: t, boundaries: s, previewPoint: i }) => {
    var h, v;
    const [n, c] = ht(),
      l = d.useRef(null);
    let a = 0;
    if (l.current && i) {
      const m = l.current.getBoundingClientRect();
      a = ((i.clientY - m.top + l.current.scrollTop) / je) | 0;
    }
    const r =
      (v = (h = t == null ? void 0 : t.pages) == null ? void 0 : h[a]) == null
        ? void 0
        : v.screencastFrames;
    let o, x;
    if (i !== void 0 && r && r.length) {
      const m = s.minimum + ((s.maximum - s.minimum) * i.x) / n.width;
      o = r[St(r, m, Lt) - 1];
      const b = {
        width: Math.min(800, (window.innerWidth / 2) | 0),
        height: Math.min(800, (window.innerHeight / 2) | 0),
      };
      x = o ? It({ width: o.width, height: o.height }, b) : void 0;
    }
    return e.jsxs('div', {
      className: 'film-strip',
      ref: c,
      children: [
        e.jsx('div', {
          className: 'film-strip-lanes',
          ref: l,
          children:
            t == null
              ? void 0
              : t.pages.map((m, b) =>
                  m.screencastFrames.length
                    ? e.jsx(Ne, { boundaries: s, page: m, width: n.width }, b)
                    : null
                ),
        }),
        (i == null ? void 0 : i.x) !== void 0 &&
          e.jsxs('div', {
            className: 'film-strip-hover',
            style: {
              top: n.bottom + 5,
              left: Math.min(i.x, n.width - (x ? x.width : 0) - 10),
            },
            children: [
              i.action &&
                e.jsx('div', {
                  className: 'film-strip-hover-title',
                  children: dt(i.action, i),
                }),
              o &&
                x &&
                e.jsx('div', {
                  style: { width: x.width, height: x.height },
                  children: e.jsx('img', {
                    src: `sha1/${o.sha1}`,
                    width: x.width,
                    height: x.height,
                  }),
                }),
            ],
          }),
      ],
    });
  },
  Ne = ({ boundaries: t, page: s, width: i }) => {
    const n = { width: 0, height: 0 },
      c = s.screencastFrames;
    for (const w of c)
      (n.width = Math.max(n.width, w.width)),
        (n.height = Math.max(n.height, w.height));
    const l = It(n, Ct),
      a = c[0].timestamp,
      r = c[c.length - 1].timestamp,
      o = t.maximum - t.minimum,
      x = ((a - t.minimum) / o) * i,
      h = ((t.maximum - r) / o) * i,
      m = ((((r - a) / o) * i) / (l.width + 2 * _)) | 0,
      b = (r - a) / m,
      j = [];
    for (let w = 0; a && b && w < m; ++w) {
      const M = a + b * w,
        f = St(c, M, Lt) - 1;
      j.push(
        e.jsx(
          'div',
          {
            className: 'film-strip-frame',
            style: {
              width: l.width,
              height: l.height,
              backgroundImage: `url(sha1/${c[f].sha1})`,
              backgroundSize: `${l.width}px ${l.height}px`,
              margin: _,
              marginRight: _,
            },
          },
          w
        )
      );
    }
    return (
      j.push(
        e.jsx(
          'div',
          {
            className: 'film-strip-frame',
            style: {
              width: l.width,
              height: l.height,
              backgroundImage: `url(sha1/${c[c.length - 1].sha1})`,
              backgroundSize: `${l.width}px ${l.height}px`,
              margin: _,
              marginRight: _,
            },
          },
          j.length
        )
      ),
      e.jsx('div', {
        className: 'film-strip-lane',
        style: { marginLeft: x + 'px', marginRight: h + 'px' },
        children: j,
      })
    );
  };
function Lt(t, s) {
  return t - s.timestamp;
}
function It(t, s) {
  const i = Math.max(t.width / s.width, t.height / s.height);
  return { width: (t.width / i) | 0, height: (t.height / i) | 0 };
}
const be = ({
  model: t,
  boundaries: s,
  consoleEntries: i,
  onSelected: n,
  highlightedAction: c,
  highlightedEntry: l,
  highlightedConsoleEntry: a,
  selectedTime: r,
  setSelectedTime: o,
  sdkLanguage: x,
}) => {
  const [h, v] = ht(),
    [m, b] = d.useState(),
    [j, w] = d.useState(),
    {
      offsets: M,
      curtainLeft: f,
      curtainRight: N,
    } = d.useMemo(() => {
      let p = r || s;
      if (m && m.startX !== m.endX) {
        const k = H(h.width, s, m.startX),
          I = H(h.width, s, m.endX);
        p = { minimum: Math.min(k, I), maximum: Math.max(k, I) };
      }
      const u = W(h.width, s, p.minimum),
        C = W(h.width, s, s.maximum) - W(h.width, s, p.maximum);
      return { offsets: ye(h.width, s), curtainLeft: u, curtainRight: C };
    }, [r, s, m, h]),
    y = d.useMemo(() => {
      const p = [];
      for (const u of (t == null ? void 0 : t.actions) || [])
        u.class !== 'Test' &&
          p.push({
            action: u,
            leftTime: u.startTime,
            rightTime: u.endTime || s.maximum,
            leftPosition: W(h.width, s, u.startTime),
            rightPosition: W(h.width, s, u.endTime || s.maximum),
            active: !1,
            error: !!u.error,
          });
      for (const u of (t == null ? void 0 : t.resources) || []) {
        const S = u._monotonicTime,
          C = u._monotonicTime + u.time;
        p.push({
          resource: u,
          leftTime: S,
          rightTime: C,
          leftPosition: W(h.width, s, S),
          rightPosition: W(h.width, s, C),
          active: !1,
          error: !1,
        });
      }
      for (const u of i || [])
        p.push({
          consoleMessage: u,
          leftTime: u.timestamp,
          rightTime: u.timestamp,
          leftPosition: W(h.width, s, u.timestamp),
          rightPosition: W(h.width, s, u.timestamp),
          active: !1,
          error: u.isError,
        });
      return p;
    }, [t, i, s, h]);
  d.useMemo(() => {
    for (const p of y)
      c
        ? (p.active = p.action === c)
        : l
          ? (p.active = p.resource === l)
          : a
            ? (p.active = p.consoleMessage === a)
            : (p.active = !1);
  }, [y, c, l, a]);
  const T = d.useCallback(
      (p) => {
        if ((w(void 0), !v.current)) return;
        const u = p.clientX - v.current.getBoundingClientRect().left,
          S = H(h.width, s, u),
          C = r ? W(h.width, s, r.minimum) : 0,
          k = r ? W(h.width, s, r.maximum) : 0;
        r && Math.abs(u - C) < 10
          ? b({ startX: k, endX: u, type: 'resize' })
          : r && Math.abs(u - k) < 10
            ? b({ startX: C, endX: u, type: 'resize' })
            : r &&
                S > r.minimum &&
                S < r.maximum &&
                p.clientY - v.current.getBoundingClientRect().top < 20
              ? b({ startX: C, endX: k, pivot: u, type: 'move' })
              : b({ startX: u, endX: u, type: 'resize' });
      },
      [s, h, v, r]
    ),
    L = d.useCallback(
      (p) => {
        if (!v.current) return;
        const u = p.clientX - v.current.getBoundingClientRect().left,
          S = H(h.width, s, u),
          C = t == null ? void 0 : t.actions.findLast((A) => A.startTime <= S);
        if (!p.buttons) {
          b(void 0);
          return;
        }
        if ((C && n(C), !m)) return;
        let k = m;
        if (m.type === 'resize') k = { ...m, endX: u };
        else {
          const A = u - m.pivot;
          let U = m.startX + A,
            $ = m.endX + A;
          U < 0 && ((U = 0), ($ = U + (m.endX - m.startX))),
            $ > h.width && (($ = h.width), (U = $ - (m.endX - m.startX))),
            (k = { ...m, startX: U, endX: $, pivot: u });
        }
        b(k);
        const I = H(h.width, s, k.startX),
          P = H(h.width, s, k.endX);
        I !== P && o({ minimum: Math.min(I, P), maximum: Math.max(I, P) });
      },
      [s, m, h, t, n, v, o]
    ),
    R = d.useCallback(() => {
      if ((w(void 0), !!m)) {
        if (m.startX !== m.endX) {
          const p = H(h.width, s, m.startX),
            u = H(h.width, s, m.endX);
          o({ minimum: Math.min(p, u), maximum: Math.max(p, u) });
        } else {
          const p = H(h.width, s, m.startX),
            u =
              t == null ? void 0 : t.actions.findLast((S) => S.startTime <= p);
          u && n(u), o(void 0);
        }
        b(void 0);
      }
    }, [s, m, h, t, o, n]),
    X = d.useCallback(
      (p) => {
        if (!v.current) return;
        const u = p.clientX - v.current.getBoundingClientRect().left,
          S = H(h.width, s, u),
          C = t == null ? void 0 : t.actions.findLast((k) => k.startTime <= S);
        w({ x: u, clientY: p.clientY, action: C, sdkLanguage: x });
      },
      [s, h, t, v, x]
    ),
    z = d.useCallback(() => {
      w(void 0);
    }, []),
    G = d.useCallback(() => {
      o(void 0);
    }, [o]);
  return e.jsxs('div', {
    style: {
      flex: 'none',
      borderBottom: '1px solid var(--vscode-panel-border)',
    },
    children: [
      !!m &&
        e.jsx(qt, {
          cursor:
            (m == null ? void 0 : m.type) === 'resize' ? 'ew-resize' : 'grab',
          onPaneMouseUp: R,
          onPaneMouseMove: L,
          onPaneDoubleClick: G,
        }),
      e.jsxs('div', {
        ref: v,
        className: 'timeline-view',
        onMouseDown: T,
        onMouseMove: X,
        onMouseLeave: z,
        children: [
          e.jsx('div', {
            className: 'timeline-grid',
            children: M.map((p, u) =>
              e.jsx(
                'div',
                {
                  className: 'timeline-divider',
                  style: { left: p.position + 'px' },
                  children: e.jsx('div', {
                    className: 'timeline-time',
                    children: F(p.time - s.minimum),
                  }),
                },
                u
              )
            ),
          }),
          e.jsx('div', { style: { height: 8 } }),
          e.jsx(we, { model: t, boundaries: s, previewPoint: j }),
          e.jsx('div', {
            className: 'timeline-bars',
            children: y.map((p, u) =>
              e.jsx(
                'div',
                {
                  className: K(
                    'timeline-bar',
                    p.action && 'action',
                    p.resource && 'network',
                    p.consoleMessage && 'console-message',
                    p.active && 'active',
                    p.error && 'error'
                  ),
                  style: {
                    left: p.leftPosition,
                    width: Math.max(5, p.rightPosition - p.leftPosition),
                    top: Te(p),
                    bottom: 0,
                  },
                },
                u
              )
            ),
          }),
          e.jsx('div', {
            className: 'timeline-marker',
            style: {
              display: j !== void 0 ? 'block' : 'none',
              left: ((j == null ? void 0 : j.x) || 0) + 'px',
            },
          }),
          r &&
            e.jsxs('div', {
              className: 'timeline-window',
              children: [
                e.jsx('div', {
                  className: 'timeline-window-curtain left',
                  style: { width: f },
                }),
                e.jsx('div', {
                  className: 'timeline-window-resizer',
                  style: { left: -5 },
                }),
                e.jsx('div', {
                  className: 'timeline-window-center',
                  children: e.jsx('div', { className: 'timeline-window-drag' }),
                }),
                e.jsx('div', {
                  className: 'timeline-window-resizer',
                  style: { left: 5 },
                }),
                e.jsx('div', {
                  className: 'timeline-window-curtain right',
                  style: { width: N },
                }),
              ],
            }),
        ],
      }),
    ],
  });
};
function ye(t, s) {
  let n = t / 64;
  const c = s.maximum - s.minimum,
    l = t / c;
  let a = c / n;
  const r = Math.ceil(Math.log(a) / Math.LN10);
  (a = Math.pow(10, r)),
    a * l >= 5 * 64 && (a = a / 5),
    a * l >= 2 * 64 && (a = a / 2);
  const o = s.minimum;
  let x = s.maximum;
  (x += 64 / l), (n = Math.ceil((x - o) / a)), a || (n = 0);
  const h = [];
  for (let v = 0; v < n; ++v) {
    const m = o + a * v;
    h.push({ position: W(t, s, m), time: m });
  }
  return h;
}
function W(t, s, i) {
  return ((i - s.minimum) / (s.maximum - s.minimum)) * t;
}
function H(t, s, i) {
  return (i / t) * (s.maximum - s.minimum) + s.minimum;
}
function Te(t) {
  return t.resource ? 25 : 20;
}
const Me = ({ model: t }) => {
  var s, i;
  return t
    ? e.jsxs('div', {
        'data-testid': 'metadata-view',
        className: 'vbox',
        style: { flexShrink: 0 },
        children: [
          e.jsx('div', {
            className: 'call-section',
            style: { paddingTop: 2 },
            children: 'Time',
          }),
          !!t.wallTime &&
            e.jsxs('div', {
              className: 'call-line',
              children: [
                'start time:',
                e.jsx('span', {
                  className: 'call-value datetime',
                  title: new Date(t.wallTime).toLocaleString(),
                  children: new Date(t.wallTime).toLocaleString(),
                }),
              ],
            }),
          e.jsxs('div', {
            className: 'call-line',
            children: [
              'duration:',
              e.jsx('span', {
                className: 'call-value number',
                title: F(t.endTime - t.startTime),
                children: F(t.endTime - t.startTime),
              }),
            ],
          }),
          e.jsx('div', { className: 'call-section', children: 'Browser' }),
          e.jsxs('div', {
            className: 'call-line',
            children: [
              'engine:',
              e.jsx('span', {
                className: 'call-value string',
                title: t.browserName,
                children: t.browserName,
              }),
            ],
          }),
          t.channel &&
            e.jsxs('div', {
              className: 'call-line',
              children: [
                'channel:',
                e.jsx('span', {
                  className: 'call-value string',
                  title: t.channel,
                  children: t.channel,
                }),
              ],
            }),
          t.platform &&
            e.jsxs('div', {
              className: 'call-line',
              children: [
                'platform:',
                e.jsx('span', {
                  className: 'call-value string',
                  title: t.platform,
                  children: t.platform,
                }),
              ],
            }),
          t.options.userAgent &&
            e.jsxs('div', {
              className: 'call-line',
              children: [
                'user agent:',
                e.jsx('span', {
                  className: 'call-value datetime',
                  title: t.options.userAgent,
                  children: t.options.userAgent,
                }),
              ],
            }),
          t.options.baseURL &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx('div', {
                  className: 'call-section',
                  style: { paddingTop: 2 },
                  children: 'Config',
                }),
                e.jsxs('div', {
                  className: 'call-line',
                  children: [
                    'baseURL:',
                    e.jsx('a', {
                      className: 'call-value string',
                      href: t.options.baseURL,
                      title: t.options.baseURL,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      children: t.options.baseURL,
                    }),
                  ],
                }),
              ],
            }),
          e.jsx('div', { className: 'call-section', children: 'Viewport' }),
          t.options.viewport &&
            e.jsxs('div', {
              className: 'call-line',
              children: [
                'width:',
                e.jsx('span', {
                  className: 'call-value number',
                  title: String(
                    !!((s = t.options.viewport) != null && s.width)
                  ),
                  children: t.options.viewport.width,
                }),
              ],
            }),
          t.options.viewport &&
            e.jsxs('div', {
              className: 'call-line',
              children: [
                'height:',
                e.jsx('span', {
                  className: 'call-value number',
                  title: String(
                    !!((i = t.options.viewport) != null && i.height)
                  ),
                  children: t.options.viewport.height,
                }),
              ],
            }),
          e.jsxs('div', {
            className: 'call-line',
            children: [
              'is mobile:',
              e.jsx('span', {
                className: 'call-value boolean',
                title: String(!!t.options.isMobile),
                children: String(!!t.options.isMobile),
              }),
            ],
          }),
          t.options.deviceScaleFactor &&
            e.jsxs('div', {
              className: 'call-line',
              children: [
                'device scale:',
                e.jsx('span', {
                  className: 'call-value number',
                  title: String(t.options.deviceScaleFactor),
                  children: String(t.options.deviceScaleFactor),
                }),
              ],
            }),
          e.jsx('div', { className: 'call-section', children: 'Counts' }),
          e.jsxs('div', {
            className: 'call-line',
            children: [
              'pages:',
              e.jsx('span', {
                className: 'call-value number',
                children: t.pages.length,
              }),
            ],
          }),
          e.jsxs('div', {
            className: 'call-line',
            children: [
              'actions:',
              e.jsx('span', {
                className: 'call-value number',
                children: t.actions.length,
              }),
            ],
          }),
          e.jsxs('div', {
            className: 'call-line',
            children: [
              'events:',
              e.jsx('span', {
                className: 'call-value number',
                children: t.events.length,
              }),
            ],
          }),
        ],
      })
    : e.jsx(e.Fragment, {});
};
async function lt(t) {
  const s = new Image();
  return (
    t &&
      ((s.src = t),
      await new Promise((i, n) => {
        (s.onload = i), (s.onerror = i);
      })),
    s
  );
}
const ot = {
    backgroundImage: `linear-gradient(45deg, #80808020 25%, transparent 25%),
                    linear-gradient(-45deg, #80808020 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #80808020 75%),
                    linear-gradient(-45deg, transparent 75%, #80808020 75%)`,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    boxShadow: `rgb(0 0 0 / 10%) 0px 1.8px 1.9px,
              rgb(0 0 0 / 15%) 0px 6.1px 6.3px,
              rgb(0 0 0 / 10%) 0px -2px 4px,
              rgb(0 0 0 / 15%) 0px -6.1px 12px,
              rgb(0 0 0 / 25%) 0px 6px 12px`,
  },
  ke = ({ diff: t, noTargetBlank: s }) => {
    const [i, n] = d.useState(t.diff ? 'diff' : 'actual'),
      [c, l] = d.useState(!1),
      [a, r] = d.useState(null),
      [o, x] = d.useState(null),
      [h, v] = d.useState(null),
      [m, b] = ht();
    d.useEffect(() => {
      (async () => {
        var R, X, z;
        r(await lt((R = t.expected) == null ? void 0 : R.attachment.path)),
          x(await lt((X = t.actual) == null ? void 0 : X.attachment.path)),
          v(await lt((z = t.diff) == null ? void 0 : z.attachment.path));
      })();
    }, [t]);
    const j = a && o && h,
      w = j ? Math.max(a.naturalWidth, o.naturalWidth, 200) : 500,
      M = j ? Math.max(a.naturalHeight, o.naturalHeight, 200) : 500,
      f = Math.min(1, (m.width - 30) / w),
      N = Math.min(1, (m.width - 50) / w / 2),
      y = w * f,
      T = M * f,
      L = {
        flex: 'none',
        margin: '0 10px',
        cursor: 'pointer',
        userSelect: 'none',
      };
    return e.jsx('div', {
      'data-testid': 'test-result-image-mismatch',
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 'auto',
      },
      ref: b,
      children:
        j &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsxs('div', {
              'data-testid': 'test-result-image-mismatch-tabs',
              style: { display: 'flex', margin: '10px 0 20px' },
              children: [
                t.diff &&
                  e.jsx('div', {
                    style: { ...L, fontWeight: i === 'diff' ? 600 : 'initial' },
                    onClick: () => n('diff'),
                    children: 'Diff',
                  }),
                e.jsx('div', {
                  style: { ...L, fontWeight: i === 'actual' ? 600 : 'initial' },
                  onClick: () => n('actual'),
                  children: 'Actual',
                }),
                e.jsx('div', {
                  style: {
                    ...L,
                    fontWeight: i === 'expected' ? 600 : 'initial',
                  },
                  onClick: () => n('expected'),
                  children: 'Expected',
                }),
                e.jsx('div', {
                  style: { ...L, fontWeight: i === 'sxs' ? 600 : 'initial' },
                  onClick: () => n('sxs'),
                  children: 'Side by side',
                }),
                e.jsx('div', {
                  style: { ...L, fontWeight: i === 'slider' ? 600 : 'initial' },
                  onClick: () => n('slider'),
                  children: 'Slider',
                }),
              ],
            }),
            e.jsxs('div', {
              style: {
                display: 'flex',
                justifyContent: 'center',
                flex: 'auto',
                minHeight: T + 60,
              },
              children: [
                t.diff &&
                  i === 'diff' &&
                  e.jsx(E, {
                    image: h,
                    alt: 'Diff',
                    canvasWidth: y,
                    canvasHeight: T,
                    scale: f,
                  }),
                t.diff &&
                  i === 'actual' &&
                  e.jsx(E, {
                    image: o,
                    alt: 'Actual',
                    canvasWidth: y,
                    canvasHeight: T,
                    scale: f,
                  }),
                t.diff &&
                  i === 'expected' &&
                  e.jsx(E, {
                    image: a,
                    alt: 'Expected',
                    canvasWidth: y,
                    canvasHeight: T,
                    scale: f,
                  }),
                t.diff &&
                  i === 'slider' &&
                  e.jsx(Se, {
                    expectedImage: a,
                    actualImage: o,
                    canvasWidth: y,
                    canvasHeight: T,
                    scale: f,
                  }),
                t.diff &&
                  i === 'sxs' &&
                  e.jsxs('div', {
                    style: { display: 'flex' },
                    children: [
                      e.jsx(E, {
                        image: a,
                        title: 'Expected',
                        canvasWidth: N * w,
                        canvasHeight: N * M,
                        scale: N,
                      }),
                      e.jsx(E, {
                        image: c ? h : o,
                        title: c ? 'Diff' : 'Actual',
                        onClick: () => l(!c),
                        canvasWidth: N * w,
                        canvasHeight: N * M,
                        scale: N,
                      }),
                    ],
                  }),
                !t.diff &&
                  i === 'actual' &&
                  e.jsx(E, {
                    image: o,
                    title: 'Actual',
                    canvasWidth: y,
                    canvasHeight: T,
                    scale: f,
                  }),
                !t.diff &&
                  i === 'expected' &&
                  e.jsx(E, {
                    image: a,
                    title: 'Expected',
                    canvasWidth: y,
                    canvasHeight: T,
                    scale: f,
                  }),
                !t.diff &&
                  i === 'sxs' &&
                  e.jsxs('div', {
                    style: { display: 'flex' },
                    children: [
                      e.jsx(E, {
                        image: a,
                        title: 'Expected',
                        canvasWidth: N * w,
                        canvasHeight: N * M,
                        scale: N,
                      }),
                      e.jsx(E, {
                        image: o,
                        title: 'Actual',
                        canvasWidth: N * w,
                        canvasHeight: N * M,
                        scale: N,
                      }),
                    ],
                  }),
              ],
            }),
            e.jsxs('div', {
              style: {
                alignSelf: 'start',
                lineHeight: '18px',
                marginLeft: '15px',
              },
              children: [
                e.jsx('div', {
                  children:
                    t.diff &&
                    e.jsx('a', {
                      target: '_blank',
                      href: t.diff.attachment.path,
                      rel: 'noreferrer',
                      children: t.diff.attachment.name,
                    }),
                }),
                e.jsx('div', {
                  children: e.jsx('a', {
                    target: s ? '' : '_blank',
                    href: t.actual.attachment.path,
                    rel: 'noreferrer',
                    children: t.actual.attachment.name,
                  }),
                }),
                e.jsx('div', {
                  children: e.jsx('a', {
                    target: s ? '' : '_blank',
                    href: t.expected.attachment.path,
                    rel: 'noreferrer',
                    children: t.expected.attachment.name,
                  }),
                }),
              ],
            }),
          ],
        }),
    });
  },
  Se = ({
    expectedImage: t,
    actualImage: s,
    canvasWidth: i,
    canvasHeight: n,
    scale: c,
  }) => {
    const l = { position: 'absolute', top: 0, left: 0 },
      [a, r] = d.useState(i / 2),
      o =
        t.naturalWidth === s.naturalWidth &&
        t.naturalHeight === s.naturalHeight;
    return e.jsxs('div', {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        userSelect: 'none',
      },
      children: [
        e.jsxs('div', {
          style: { margin: 5 },
          children: [
            !o &&
              e.jsx('span', {
                style: { flex: 'none', margin: '0 5px' },
                children: 'Expected ',
              }),
            e.jsx('span', { children: t.naturalWidth }),
            e.jsx('span', {
              style: { flex: 'none', margin: '0 5px' },
              children: 'x',
            }),
            e.jsx('span', { children: t.naturalHeight }),
            !o &&
              e.jsx('span', {
                style: { flex: 'none', margin: '0 5px 0 15px' },
                children: 'Actual ',
              }),
            !o && e.jsx('span', { children: s.naturalWidth }),
            !o &&
              e.jsx('span', {
                style: { flex: 'none', margin: '0 5px' },
                children: 'x',
              }),
            !o && e.jsx('span', { children: s.naturalHeight }),
          ],
        }),
        e.jsxs('div', {
          style: {
            position: 'relative',
            width: i,
            height: n,
            margin: 15,
            ...ot,
          },
          children: [
            e.jsx(Kt, {
              orientation: 'horizontal',
              offsets: [a],
              setOffsets: (x) => r(x[0]),
              resizerColor: '#57606a80',
              resizerWidth: 6,
            }),
            e.jsx('img', {
              alt: 'Expected',
              style: { width: t.naturalWidth * c, height: t.naturalHeight * c },
              draggable: 'false',
              src: t.src,
            }),
            e.jsx('div', {
              style: { ...l, bottom: 0, overflow: 'hidden', width: a, ...ot },
              children: e.jsx('img', {
                alt: 'Actual',
                style: {
                  width: s.naturalWidth * c,
                  height: s.naturalHeight * c,
                },
                draggable: 'false',
                src: s.src,
              }),
            }),
          ],
        }),
      ],
    });
  },
  E = ({
    image: t,
    title: s,
    alt: i,
    canvasWidth: n,
    canvasHeight: c,
    scale: l,
    onClick: a,
  }) =>
    e.jsxs('div', {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      },
      children: [
        e.jsxs('div', {
          style: { margin: 5 },
          children: [
            s &&
              e.jsx('span', {
                style: { flex: 'none', margin: '0 5px' },
                children: s,
              }),
            e.jsx('span', { children: t.naturalWidth }),
            e.jsx('span', {
              style: { flex: 'none', margin: '0 5px' },
              children: 'x',
            }),
            e.jsx('span', { children: t.naturalHeight }),
          ],
        }),
        e.jsx('div', {
          style: {
            display: 'flex',
            flex: 'none',
            width: n,
            height: c,
            margin: 15,
            ...ot,
          },
          children: e.jsx('img', {
            width: t.naturalWidth * l,
            height: t.naturalHeight * l,
            alt: s || i,
            style: { cursor: a ? 'pointer' : 'initial' },
            draggable: 'false',
            src: t.src,
            onClick: a,
          }),
        }),
      ],
    });
function Ce(t) {
  return !!t.match(
    /^(text\/.*?|application\/(json|(x-)?javascript|xml.*?|ecmascript|graphql|x-www-form-urlencoded)|image\/svg(\+xml)?|application\/.*?(\+json|\+xml))(;\s*charset=.*)?$/
  );
}
const Le = ({
  title: t,
  children: s,
  setExpanded: i,
  expanded: n,
  expandOnTitleClick: c,
}) =>
  e.jsxs('div', {
    className: K('expandable', n && 'expanded'),
    children: [
      e.jsxs('div', {
        className: 'expandable-title',
        onClick: () => c && i(!n),
        children: [
          e.jsx('div', {
            className: K(
              'codicon',
              n ? 'codicon-chevron-down' : 'codicon-chevron-right'
            ),
            style: {
              cursor: 'pointer',
              color: 'var(--vscode-foreground)',
              marginLeft: '5px',
            },
            onClick: () => !c && i(!n),
          }),
          t,
        ],
      }),
      n && e.jsx('div', { style: { marginLeft: 25 }, children: s }),
    ],
  });
function Wt(t) {
  const s = [];
  let i = 0,
    n;
  for (; (n = Jt.exec(t)) !== null; ) {
    const l = t.substring(i, n.index);
    l && s.push(l);
    const a = n[0];
    s.push(Ie(a)), (i = n.index + a.length);
  }
  const c = t.substring(i);
  return c && s.push(c), s;
}
function Ie(t) {
  let s = t;
  return (
    s.startsWith('www.') && (s = 'https://' + s),
    e.jsx('a', {
      href: s,
      target: '_blank',
      rel: 'noopener noreferrer',
      children: t,
    })
  );
}
const We = ({ attachment: t }) => {
    const [s, i] = d.useState(!1),
      [n, c] = d.useState(null),
      [l, a] = d.useState(null),
      r = Ce(t.contentType),
      o = !!t.sha1 || !!t.path;
    d.useEffect(() => {
      s &&
        n === null &&
        l === null &&
        (a('Loading ...'),
        fetch(mt(t))
          .then((v) => v.text())
          .then((v) => {
            c(v), a(null);
          })
          .catch((v) => {
            a('Failed to load: ' + v.message);
          }));
    }, [s, n, l, t]);
    const x = d.useMemo(() => {
        const v = n
          ? n.split(`
`).length
          : 0;
        return Math.min(Math.max(5, v), 20) * Qt;
      }, [n]),
      h = e.jsxs('span', {
        style: { marginLeft: 5 },
        children: [
          Wt(t.name),
          ' ',
          o &&
            e.jsx('a', {
              style: { marginLeft: 5 },
              href: Z(t),
              children: 'download',
            }),
        ],
      });
    return !r || !o
      ? e.jsx('div', { style: { marginLeft: 20 }, children: h })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(Le, {
              title: h,
              expanded: s,
              setExpanded: i,
              expandOnTitleClick: !0,
              children: l && e.jsx('i', { children: l }),
            }),
            s &&
              n !== null &&
              e.jsx('div', {
                className: 'vbox',
                style: { height: x },
                children: e.jsx(Zt, {
                  text: n,
                  readOnly: !0,
                  mimeType: t.contentType,
                  linkify: !0,
                  lineNumbers: !0,
                  wrapLines: !1,
                }),
              }),
          ],
        });
  },
  Re = ({ model: t }) => {
    const {
      diffMap: s,
      screenshots: i,
      attachments: n,
    } = d.useMemo(() => {
      const c = new Set(),
        l = new Set();
      for (const r of (t == null ? void 0 : t.actions) || []) {
        const o = r.context.traceUrl;
        for (const x of r.attachments || []) c.add({ ...x, traceUrl: o });
      }
      const a = new Map();
      for (const r of c) {
        if (!r.path && !r.sha1) continue;
        const o = r.name.match(/^(.*)-(expected|actual|diff)\.png$/);
        if (o) {
          const x = o[1],
            h = o[2],
            v = a.get(x) || { expected: void 0, actual: void 0, diff: void 0 };
          (v[h] = r), a.set(x, v), c.delete(r);
        } else r.contentType.startsWith('image/') && (l.add(r), c.delete(r));
      }
      return { diffMap: a, attachments: c, screenshots: l };
    }, [t]);
    return !s.size && !i.size && !n.size
      ? e.jsx(J, { text: 'No attachments' })
      : e.jsxs('div', {
          className: 'attachments-tab',
          children: [
            [...s.values()].map(({ expected: c, actual: l, diff: a }) =>
              e.jsxs(e.Fragment, {
                children: [
                  c &&
                    l &&
                    e.jsx('div', {
                      className: 'attachments-section',
                      children: 'Image diff',
                    }),
                  c &&
                    l &&
                    e.jsx(ke, {
                      noTargetBlank: !0,
                      diff: {
                        name: 'Image diff',
                        expected: {
                          attachment: { ...c, path: Z(c) },
                          title: 'Expected',
                        },
                        actual: { attachment: { ...l, path: Z(l) } },
                        diff: a ? { attachment: { ...a, path: Z(a) } } : void 0,
                      },
                    }),
                ],
              })
            ),
            i.size
              ? e.jsx('div', {
                  className: 'attachments-section',
                  children: 'Screenshots',
                })
              : void 0,
            [...i.values()].map((c, l) => {
              const a = mt(c);
              return e.jsxs(
                'div',
                {
                  className: 'attachment-item',
                  children: [
                    e.jsx('div', {
                      children: e.jsx('img', { draggable: 'false', src: a }),
                    }),
                    e.jsx('div', {
                      children: e.jsx('a', {
                        target: '_blank',
                        href: a,
                        rel: 'noreferrer',
                        children: c.name,
                      }),
                    }),
                  ],
                },
                `screenshot-${l}`
              );
            }),
            n.size
              ? e.jsx('div', {
                  className: 'attachments-section',
                  children: 'Attachments',
                })
              : void 0,
            [...n.values()].map((c, l) =>
              e.jsx(
                'div',
                {
                  className: 'attachment-item',
                  children: e.jsx(We, { attachment: c }),
                },
                ze(c, l)
              )
            ),
          ],
        });
  };
function mt(t, s = {}) {
  const i = new URLSearchParams(s);
  return t.sha1
    ? (i.set('trace', t.traceUrl), 'sha1/' + t.sha1 + '?' + i.toString())
    : (i.set('path', t.path), 'file?' + i.toString());
}
function Z(t) {
  const s = { dn: t.name };
  return t.contentType && (s.dct = t.contentType), mt(t, s);
}
function ze(t, s) {
  return s + '-' + (t.sha1 ? 'sha1-' + t.sha1 : 'path-' + t.path);
}
const He = ({ annotations: t }) =>
  t.length
    ? e.jsx('div', {
        className: 'annotations-tab',
        children: t.map((s, i) =>
          e.jsxs(
            'div',
            {
              className: 'annotation-item',
              children: [
                e.jsx('span', {
                  style: { fontWeight: 'bold' },
                  children: s.type,
                }),
                s.description &&
                  e.jsxs('span', { children: [': ', Wt(s.description)] }),
              ],
            },
            `annotation-${i}`
          )
        ),
      })
    : e.jsx(J, { text: 'No annotations' });
function Xe(t) {
  return t === 'scheduled'
    ? 'codicon-clock'
    : t === 'running'
      ? 'codicon-loading'
      : t === 'failed'
        ? 'codicon-error'
        : t === 'passed'
          ? 'codicon-check'
          : t === 'skipped'
            ? 'codicon-circle-slash'
            : 'codicon-circle-outline';
}
function Ae(t) {
  return t === 'scheduled'
    ? 'Pending'
    : t === 'running'
      ? 'Running'
      : t === 'failed'
        ? 'Failed'
        : t === 'passed'
          ? 'Passed'
          : t === 'skipped'
            ? 'Skipped'
            : 'Did not run';
}
const Ee = ({
  model: t,
  showSourcesFirst: s,
  rootDir: i,
  fallbackLocation: n,
  isLive: c,
  hideTimeline: l,
  status: a,
  annotations: r,
  inert: o,
  openPage: x,
  onOpenExternally: h,
  revealSource: v,
  showSettings: m,
}) => {
  var vt;
  const [b, j] = d.useState(void 0),
    [w, M] = d.useState(void 0),
    [f, N] = d.useState(),
    [y, T] = d.useState(),
    [L, R] = d.useState(),
    [X, z] = d.useState('actions'),
    [G, p] = jt('propertiesTab', s ? 'source' : 'call'),
    [u, S] = d.useState(!1),
    [C, k] = d.useState(''),
    [I, P] = d.useState(),
    [A, U] = jt('propertiesSidebarLocation', 'bottom'),
    $ = !1,
    et = d.useCallback((g) => {
      j(g == null ? void 0 : g.callId), M(void 0);
    }, []),
    st = d.useMemo(
      () => (t == null ? void 0 : t.actions.find((g) => g.callId === f)),
      [t, f]
    ),
    it = d.useCallback((g) => {
      N(g == null ? void 0 : g.callId);
    }, []),
    Rt = d.useMemo(() => (t == null ? void 0 : t.sources) || new Map(), [t]);
  d.useEffect(() => {
    P(void 0), M(void 0);
  }, [t]);
  const B = d.useMemo(() => {
      if (b) {
        const q = t == null ? void 0 : t.actions.find((O) => O.callId === b);
        if (q) return q;
      }
      const g = t == null ? void 0 : t.failedAction();
      if (g) return g;
      if (t != null && t.actions.length) {
        let q = t.actions.length - 1;
        for (let O = 0; O < t.actions.length; ++O)
          if (t.actions[O].apiName === 'After Hooks' && O) {
            q = O - 1;
            break;
          }
        return t.actions[q];
      }
    }, [t, b]),
    zt = d.useMemo(() => (w ? w.stack : B == null ? void 0 : B.stack), [B, w]),
    nt = d.useMemo(() => st || B, [B, st]),
    ut = d.useCallback(
      (g) => {
        et(g), it(void 0);
      },
      [et, it]
    ),
    D = d.useCallback(
      (g) => {
        p(g), g !== 'inspector' && S(!1);
      },
      [p]
    ),
    xt = d.useCallback(
      (g) => {
        !u && g && D('inspector'), S(g);
      },
      [S, D, u]
    ),
    Ht = d.useCallback(
      (g) => {
        k(g), D('inspector');
      },
      [D]
    );
  d.useEffect(() => {
    v && D('source');
  }, [v, D]);
  const at = te(t, I),
    ft = ee(t, I),
    pt = ge(t),
    Xt = d.useMemo(
      () =>
        (t == null
          ? void 0
          : t.actions.map((g) => g.attachments || []).flat()) || [],
      [t]
    ),
    V = (t == null ? void 0 : t.sdkLanguage) || 'javascript',
    At = {
      id: 'inspector',
      title: 'Locator',
      render: () =>
        e.jsx(ae, {
          showScreenshot: $,
          sdkLanguage: V,
          setIsInspecting: xt,
          highlightedLocator: C,
          setHighlightedLocator: k,
        }),
    },
    Dt = {
      id: 'call',
      title: 'Call',
      render: () => e.jsx(ue, { action: nt, sdkLanguage: V }),
    },
    Et = {
      id: 'log',
      title: 'Log',
      render: () => e.jsx(fe, { action: nt, isLive: c }),
    },
    Ft = {
      id: 'errors',
      title: 'Errors',
      errorCount: pt.errors.size,
      render: () =>
        e.jsx(ve, {
          errorsModel: pt,
          sdkLanguage: V,
          revealInSource: (g) => {
            g.action ? et(g.action) : M(g), D('source');
          },
        }),
    };
  let gt;
  !B && n && (gt = (vt = n.source) == null ? void 0 : vt.errors.length);
  const rt = {
      id: 'source',
      title: 'Source',
      errorCount: gt,
      render: () =>
        e.jsx(re, {
          stack: zt,
          sources: Rt,
          rootDir: i,
          stackFrameLocation: A === 'bottom' ? 'right' : 'bottom',
          fallbackLocation: n,
          onOpenExternally: h,
        }),
    },
    Pt = {
      id: 'console',
      title: 'Console',
      count: at.entries.length,
      render: () =>
        e.jsx(se, {
          consoleModel: at,
          boundaries: ct,
          selectedTime: I,
          onAccepted: (g) => P({ minimum: g.timestamp, maximum: g.timestamp }),
          onEntryHovered: R,
        }),
    },
    Ut = {
      id: 'network',
      title: 'Network',
      count: ft.resources.length,
      render: () =>
        e.jsx(ie, { boundaries: ct, networkModel: ft, onEntryHovered: T }),
    },
    Bt = {
      id: 'attachments',
      title: 'Attachments',
      count: Xt.length,
      render: () => e.jsx(Re, { model: t }),
    },
    Y = [At, Dt, Et, Ft, Pt, Ut, rt, Bt];
  if (r !== void 0) {
    const g = {
      id: 'annotations',
      title: 'Annotations',
      count: r.length,
      render: () => e.jsx(He, { annotations: r }),
    };
    Y.push(g);
  }
  if (s) {
    const g = Y.indexOf(rt);
    Y.splice(g, 1), Y.splice(1, 0, rt);
  }
  const { boundaries: ct } = d.useMemo(() => {
    const g = {
      minimum: (t == null ? void 0 : t.startTime) || 0,
      maximum: (t == null ? void 0 : t.endTime) || 3e4,
    };
    return (
      g.minimum > g.maximum && ((g.minimum = 0), (g.maximum = 3e4)),
      (g.maximum += (g.maximum - g.minimum) / 20),
      { boundaries: g }
    );
  }, [t]);
  let Q = 0;
  !c && t && t.endTime >= 0
    ? (Q = t.endTime - t.startTime)
    : t && t.wallTime && (Q = Date.now() - t.wallTime);
  const $t = {
      id: 'actions',
      title: 'Actions',
      component: e.jsxs('div', {
        className: 'vbox',
        children: [
          a &&
            e.jsxs('div', {
              className: 'workbench-run-status',
              children: [
                e.jsx('span', { className: K('codicon', Xe(a)) }),
                e.jsx('div', { children: Ae(a) }),
                e.jsx('div', { className: 'spacer' }),
                e.jsx('div', {
                  className: 'workbench-run-duration',
                  children: Q ? F(Q) : '',
                }),
              ],
            }),
          e.jsx(de, {
            sdkLanguage: V,
            actions: (t == null ? void 0 : t.actions) || [],
            selectedAction: t ? B : void 0,
            selectedTime: I,
            setSelectedTime: P,
            onSelected: ut,
            onHighlighted: it,
            revealConsole: () => D('console'),
            isLive: c,
          }),
        ],
      }),
    },
    Ot = {
      id: 'metadata',
      title: 'Metadata',
      component: e.jsx(Me, { model: t }),
    };
  return e.jsxs('div', {
    className: 'vbox workbench',
    ...(o ? { inert: 'true' } : {}),
    children: [
      !l &&
        e.jsx(be, {
          model: t,
          consoleEntries: at.entries,
          boundaries: ct,
          highlightedAction: st,
          highlightedEntry: y,
          highlightedConsoleEntry: L,
          onSelected: ut,
          sdkLanguage: V,
          selectedTime: I,
          setSelectedTime: P,
        }),
      e.jsx(wt, {
        sidebarSize: 250,
        orientation: A === 'bottom' ? 'vertical' : 'horizontal',
        settingName: 'propertiesSidebar',
        main: e.jsx(wt, {
          sidebarSize: 250,
          orientation: 'horizontal',
          sidebarIsFirst: !0,
          settingName: 'actionListSidebar',
          main: e.jsx(ne, {
            action: nt,
            model: t,
            sdkLanguage: V,
            testIdAttributeName:
              (t == null ? void 0 : t.testIdAttributeName) || 'data-testid',
            isInspecting: u,
            setIsInspecting: xt,
            highlightedLocator: C,
            setHighlightedLocator: Ht,
            openPage: x,
          }),
          sidebar: e.jsx(Nt, {
            tabs: [$t, Ot],
            selectedTab: X,
            setSelectedTab: z,
          }),
        }),
        sidebar: e.jsx(Nt, {
          tabs: Y,
          selectedTab: G,
          setSelectedTab: D,
          rightToolbar: [
            A === 'bottom'
              ? e.jsx(bt, {
                  title: 'Dock to right',
                  icon: 'layout-sidebar-right-off',
                  onClick: () => {
                    U('right');
                  },
                })
              : e.jsx(bt, {
                  title: 'Dock to bottom',
                  icon: 'layout-panel-off',
                  onClick: () => {
                    U('bottom');
                  },
                }),
          ],
          mode: A === 'bottom' ? 'default' : 'select',
        }),
      }),
    ],
  });
};
export { Le as E, le as T, Ee as W, Xe as t };
