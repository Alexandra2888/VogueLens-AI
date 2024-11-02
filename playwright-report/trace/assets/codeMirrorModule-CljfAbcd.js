import { U as Su, V as Tu } from './inspectorTab-CU3eUCmV.js';
var ba = { exports: {} };
(function (jt, Jt) {
  (function (F, Pe) {
    jt.exports = Pe();
  })(Tu, function () {
    var F = navigator.userAgent,
      Pe = navigator.platform,
      I = /gecko\/\d/i.test(F),
      de = /MSIE \d/.test(F),
      Me = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(F),
      se = /Edge\/(\d+)/.exec(F),
      k = de || Me || se,
      ee = k && (de ? document.documentMode || 6 : +(se || Me)[1]),
      U = !se && /WebKit\//.test(F),
      ve = U && /Qt\/\d+\.\d+/.test(F),
      O = !se && /Chrome\/(\d+)/.exec(F),
      H = O && +O[1],
      P = /Opera\//.test(F),
      K = /Apple Computer/.test(navigator.vendor),
      be = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(F),
      ke = /PhantomJS/.test(F),
      Q = K && (/Mobile\/\w+/.test(F) || navigator.maxTouchPoints > 2),
      V = /Android/.test(F),
      $ = Q || V || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(F),
      ie = Q || /Mac/.test(Pe),
      Fe = /\bCrOS\b/.test(F),
      me = /win/i.test(Pe),
      ue = P && F.match(/Version\/(\d*\.\d*)/);
    ue && (ue = Number(ue[1])), ue && ue >= 15 && ((P = !1), (U = !0));
    var ze = ie && (ve || (P && (ue == null || ue < 12.11))),
      le = I || (k && ee >= 9);
    function W(e) {
      return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
    }
    var Ae = function (e, t) {
      var n = e.className,
        r = W(t).exec(n);
      if (r) {
        var i = n.slice(r.index + r[0].length);
        e.className = n.slice(0, r.index) + (i ? r[1] + i : '');
      }
    };
    function C(e) {
      for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
      return e;
    }
    function Y(e, t) {
      return C(e).appendChild(t);
    }
    function d(e, t, n, r) {
      var i = document.createElement(e);
      if (
        (n && (i.className = n),
        r && (i.style.cssText = r),
        typeof t == 'string')
      )
        i.appendChild(document.createTextNode(t));
      else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
      return i;
    }
    function S(e, t, n, r) {
      var i = d(e, t, n, r);
      return i.setAttribute('role', 'presentation'), i;
    }
    var w;
    document.createRange
      ? (w = function (e, t, n, r) {
          var i = document.createRange();
          return i.setEnd(r || e, n), i.setStart(e, t), i;
        })
      : (w = function (e, t, n) {
          var r = document.body.createTextRange();
          try {
            r.moveToElementText(e.parentNode);
          } catch {
            return r;
          }
          return (
            r.collapse(!0),
            r.moveEnd('character', n),
            r.moveStart('character', t),
            r
          );
        });
    function m(e, t) {
      if ((t.nodeType == 3 && (t = t.parentNode), e.contains))
        return e.contains(t);
      do if ((t.nodeType == 11 && (t = t.host), t == e)) return !0;
      while ((t = t.parentNode));
    }
    function y(e) {
      var t = e.ownerDocument || e,
        n;
      try {
        n = e.activeElement;
      } catch {
        n = t.body || null;
      }
      for (; n && n.shadowRoot && n.shadowRoot.activeElement; )
        n = n.shadowRoot.activeElement;
      return n;
    }
    function N(e, t) {
      var n = e.className;
      W(t).test(n) || (e.className += (n ? ' ' : '') + t);
    }
    function re(e, t) {
      for (var n = e.split(' '), r = 0; r < n.length; r++)
        n[r] && !W(n[r]).test(t) && (t += ' ' + n[r]);
      return t;
    }
    var p = function (e) {
      e.select();
    };
    Q
      ? (p = function (e) {
          (e.selectionStart = 0), (e.selectionEnd = e.value.length);
        })
      : k &&
        (p = function (e) {
          try {
            e.select();
          } catch {}
        });
    function c(e) {
      return e.display.wrapper.ownerDocument;
    }
    function G(e) {
      return ye(e.display.wrapper);
    }
    function ye(e) {
      return e.getRootNode ? e.getRootNode() : e.ownerDocument;
    }
    function R(e) {
      return c(e).defaultView;
    }
    function oe(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return function () {
        return e.apply(null, t);
      };
    }
    function Se(e, t, n) {
      t || (t = {});
      for (var r in e)
        e.hasOwnProperty(r) &&
          (n !== !1 || !t.hasOwnProperty(r)) &&
          (t[r] = e[r]);
      return t;
    }
    function Te(e, t, n, r, i) {
      t == null && ((t = e.search(/[^\s\u00a0]/)), t == -1 && (t = e.length));
      for (var o = r || 0, l = i || 0; ; ) {
        var a = e.indexOf('	', o);
        if (a < 0 || a >= t) return l + (t - o);
        (l += a - o), (l += n - (l % n)), (o = a + 1);
      }
    }
    var xe = function () {
      (this.id = null),
        (this.f = null),
        (this.time = 0),
        (this.handler = oe(this.onTimeout, this));
    };
    (xe.prototype.onTimeout = function (e) {
      (e.id = 0),
        e.time <= +new Date()
          ? e.f()
          : setTimeout(e.handler, e.time - +new Date());
    }),
      (xe.prototype.set = function (e, t) {
        this.f = t;
        var n = +new Date() + e;
        (!this.id || n < this.time) &&
          (clearTimeout(this.id),
          (this.id = setTimeout(this.handler, e)),
          (this.time = n));
      });
    function te(e, t) {
      for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
      return -1;
    }
    var Ee = 50,
      qe = {
        toString: function () {
          return 'CodeMirror.Pass';
        },
      },
      Ve = { scroll: !1 },
      ct = { origin: '*mouse' },
      Ne = { origin: '+move' };
    function Re(e, t, n) {
      for (var r = 0, i = 0; ; ) {
        var o = e.indexOf('	', r);
        o == -1 && (o = e.length);
        var l = o - r;
        if (o == e.length || i + l >= t) return r + Math.min(l, t - i);
        if (((i += o - r), (i += n - (i % n)), (r = o + 1), i >= t)) return r;
      }
    }
    var Ue = [''];
    function et(e) {
      for (; Ue.length <= e; ) Ue.push(he(Ue) + ' ');
      return Ue[e];
    }
    function he(e) {
      return e[e.length - 1];
    }
    function Oe(e, t) {
      for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
      return n;
    }
    function T(e, t, n) {
      for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
      e.splice(r, 0, t);
    }
    function z() {}
    function M(e, t) {
      var n;
      return (
        Object.create
          ? (n = Object.create(e))
          : ((z.prototype = e), (n = new z())),
        t && Se(t, n),
        n
      );
    }
    var Ie =
      /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function ne(e) {
      return (
        /\w/.test(e) ||
        (e > '' && (e.toUpperCase() != e.toLowerCase() || Ie.test(e)))
      );
    }
    function we(e, t) {
      return t
        ? t.source.indexOf('\\w') > -1 && ne(e)
          ? !0
          : t.test(e)
        : ne(e);
    }
    function fe(e) {
      for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
      return !0;
    }
    var Be =
      /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function Ce(e) {
      return e.charCodeAt(0) >= 768 && Be.test(e);
    }
    function Lt(e, t, n) {
      for (; (n < 0 ? t > 0 : t < e.length) && Ce(e.charAt(t)); ) t += n;
      return t;
    }
    function Et(e, t, n) {
      for (var r = t > n ? -1 : 1; ; ) {
        if (t == n) return t;
        var i = (t + n) / 2,
          o = r < 0 ? Math.ceil(i) : Math.floor(i);
        if (o == t) return e(o) ? t : n;
        e(o) ? (n = o) : (t = o + r);
      }
    }
    function or(e, t, n, r) {
      if (!e) return r(t, n, 'ltr', 0);
      for (var i = !1, o = 0; o < e.length; ++o) {
        var l = e[o];
        ((l.from < n && l.to > t) || (t == n && l.to == t)) &&
          (r(
            Math.max(l.from, t),
            Math.min(l.to, n),
            l.level == 1 ? 'rtl' : 'ltr',
            o
          ),
          (i = !0));
      }
      i || r(t, n, 'ltr');
    }
    var br = null;
    function lr(e, t, n) {
      var r;
      br = null;
      for (var i = 0; i < e.length; ++i) {
        var o = e[i];
        if (o.from < t && o.to > t) return i;
        o.to == t && (o.from != o.to && n == 'before' ? (r = i) : (br = i)),
          o.from == t && (o.from != o.to && n != 'before' ? (r = i) : (br = i));
      }
      return r ?? br;
    }
    var vi = (function () {
      var e =
          'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
        t =
          'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
      function n(u) {
        return u <= 247
          ? e.charAt(u)
          : 1424 <= u && u <= 1524
            ? 'R'
            : 1536 <= u && u <= 1785
              ? t.charAt(u - 1536)
              : 1774 <= u && u <= 2220
                ? 'r'
                : 8192 <= u && u <= 8203
                  ? 'w'
                  : u == 8204
                    ? 'b'
                    : 'L';
      }
      var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
        i = /[stwN]/,
        o = /[LRr]/,
        l = /[Lb1n]/,
        a = /[1n]/;
      function s(u, h, v) {
        (this.level = u), (this.from = h), (this.to = v);
      }
      return function (u, h) {
        var v = h == 'ltr' ? 'L' : 'R';
        if (u.length == 0 || (h == 'ltr' && !r.test(u))) return !1;
        for (var b = u.length, x = [], D = 0; D < b; ++D)
          x.push(n(u.charCodeAt(D)));
        for (var E = 0, _ = v; E < b; ++E) {
          var q = x[E];
          q == 'm' ? (x[E] = _) : (_ = q);
        }
        for (var Z = 0, j = v; Z < b; ++Z) {
          var J = x[Z];
          J == '1' && j == 'r'
            ? (x[Z] = 'n')
            : o.test(J) && ((j = J), J == 'r' && (x[Z] = 'R'));
        }
        for (var ge = 1, ce = x[0]; ge < b - 1; ++ge) {
          var De = x[ge];
          De == '+' && ce == '1' && x[ge + 1] == '1'
            ? (x[ge] = '1')
            : De == ',' &&
              ce == x[ge + 1] &&
              (ce == '1' || ce == 'n') &&
              (x[ge] = ce),
            (ce = De);
        }
        for (var Ke = 0; Ke < b; ++Ke) {
          var st = x[Ke];
          if (st == ',') x[Ke] = 'N';
          else if (st == '%') {
            var Xe = void 0;
            for (Xe = Ke + 1; Xe < b && x[Xe] == '%'; ++Xe);
            for (
              var Mt =
                  (Ke && x[Ke - 1] == '!') || (Xe < b && x[Xe] == '1')
                    ? '1'
                    : 'N',
                wt = Ke;
              wt < Xe;
              ++wt
            )
              x[wt] = Mt;
            Ke = Xe - 1;
          }
        }
        for (var tt = 0, St = v; tt < b; ++tt) {
          var ft = x[tt];
          St == 'L' && ft == '1' ? (x[tt] = 'L') : o.test(ft) && (St = ft);
        }
        for (var nt = 0; nt < b; ++nt)
          if (i.test(x[nt])) {
            var rt = void 0;
            for (rt = nt + 1; rt < b && i.test(x[rt]); ++rt);
            for (
              var Qe = (nt ? x[nt - 1] : v) == 'L',
                Tt = (rt < b ? x[rt] : v) == 'L',
                nn = Qe == Tt ? (Qe ? 'L' : 'R') : v,
                xr = nt;
              xr < rt;
              ++xr
            )
              x[xr] = nn;
            nt = rt - 1;
          }
        for (var gt = [], Yt, ut = 0; ut < b; )
          if (l.test(x[ut])) {
            var fo = ut;
            for (++ut; ut < b && l.test(x[ut]); ++ut);
            gt.push(new s(0, fo, ut));
          } else {
            var ir = ut,
              Ar = gt.length,
              Er = h == 'rtl' ? 1 : 0;
            for (++ut; ut < b && x[ut] != 'L'; ++ut);
            for (var mt = ir; mt < ut; )
              if (a.test(x[mt])) {
                ir < mt && (gt.splice(Ar, 0, new s(1, ir, mt)), (Ar += Er));
                var on = mt;
                for (++mt; mt < ut && a.test(x[mt]); ++mt);
                gt.splice(Ar, 0, new s(2, on, mt)), (Ar += Er), (ir = mt);
              } else ++mt;
            ir < ut && gt.splice(Ar, 0, new s(1, ir, ut));
          }
        return (
          h == 'ltr' &&
            (gt[0].level == 1 &&
              (Yt = u.match(/^\s+/)) &&
              ((gt[0].from = Yt[0].length),
              gt.unshift(new s(0, 0, Yt[0].length))),
            he(gt).level == 1 &&
              (Yt = u.match(/\s+$/)) &&
              ((he(gt).to -= Yt[0].length),
              gt.push(new s(0, b - Yt[0].length, b)))),
          h == 'rtl' ? gt.reverse() : gt
        );
      };
    })();
    function We(e, t) {
      var n = e.order;
      return n == null && (n = e.order = vi(e.text, t)), n;
    }
    var Bn = [],
      pe = function (e, t, n) {
        if (e.addEventListener) e.addEventListener(t, n, !1);
        else if (e.attachEvent) e.attachEvent('on' + t, n);
        else {
          var r = e._handlers || (e._handlers = {});
          r[t] = (r[t] || Bn).concat(n);
        }
      };
    function Qt(e, t) {
      return (e._handlers && e._handlers[t]) || Bn;
    }
    function dt(e, t, n) {
      if (e.removeEventListener) e.removeEventListener(t, n, !1);
      else if (e.detachEvent) e.detachEvent('on' + t, n);
      else {
        var r = e._handlers,
          i = r && r[t];
        if (i) {
          var o = te(i, n);
          o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
        }
      }
    }
    function Ye(e, t) {
      var n = Qt(e, t);
      if (n.length)
        for (
          var r = Array.prototype.slice.call(arguments, 2), i = 0;
          i < n.length;
          ++i
        )
          n[i].apply(null, r);
    }
    function Ze(e, t, n) {
      return (
        typeof t == 'string' &&
          (t = {
            type: t,
            preventDefault: function () {
              this.defaultPrevented = !0;
            },
          }),
        Ye(e, n || t.type, e, t),
        yt(t) || t.codemirrorIgnore
      );
    }
    function Nt(e) {
      var t = e._handlers && e._handlers.cursorActivity;
      if (t)
        for (
          var n =
              e.curOp.cursorActivityHandlers ||
              (e.curOp.cursorActivityHandlers = []),
            r = 0;
          r < t.length;
          ++r
        )
          te(n, t[r]) == -1 && n.push(t[r]);
    }
    function Ct(e, t) {
      return Qt(e, t).length > 0;
    }
    function Pt(e) {
      (e.prototype.on = function (t, n) {
        pe(this, t, n);
      }),
        (e.prototype.off = function (t, n) {
          dt(this, t, n);
        });
    }
    function ht(e) {
      e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }
    function Nr(e) {
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
    }
    function yt(e) {
      return e.defaultPrevented != null
        ? e.defaultPrevented
        : e.returnValue == !1;
    }
    function ar(e) {
      ht(e), Nr(e);
    }
    function ln(e) {
      return e.target || e.srcElement;
    }
    function It(e) {
      var t = e.which;
      return (
        t == null &&
          (e.button & 1
            ? (t = 1)
            : e.button & 2
              ? (t = 3)
              : e.button & 4 && (t = 2)),
        ie && e.ctrlKey && t == 1 && (t = 3),
        t
      );
    }
    var mi = (function () {
        if (k && ee < 9) return !1;
        var e = d('div');
        return 'draggable' in e || 'dragDrop' in e;
      })(),
      Or;
    function Wn(e) {
      if (Or == null) {
        var t = d('span', '​');
        Y(e, d('span', [t, document.createTextNode('x')])),
          e.firstChild.offsetHeight != 0 &&
            (Or = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(k && ee < 8));
      }
      var n = Or
        ? d('span', '​')
        : d(
            'span',
            ' ',
            null,
            'display: inline-block; width: 1px; margin-right: -1px'
          );
      return n.setAttribute('cm-text', ''), n;
    }
    var an;
    function sr(e) {
      if (an != null) return an;
      var t = Y(e, document.createTextNode('AخA')),
        n = w(t, 0, 1).getBoundingClientRect(),
        r = w(t, 1, 2).getBoundingClientRect();
      return C(e), !n || n.left == n.right ? !1 : (an = r.right - n.right < 3);
    }
    var Ot =
        `

b`.split(/\n/).length != 3
          ? function (e) {
              for (var t = 0, n = [], r = e.length; t <= r; ) {
                var i = e.indexOf(
                  `
`,
                  t
                );
                i == -1 && (i = e.length);
                var o = e.slice(t, e.charAt(i - 1) == '\r' ? i - 1 : i),
                  l = o.indexOf('\r');
                l != -1
                  ? (n.push(o.slice(0, l)), (t += l + 1))
                  : (n.push(o), (t = i + 1));
              }
              return n;
            }
          : function (e) {
              return e.split(/\r\n?|\n/);
            },
      ur = window.getSelection
        ? function (e) {
            try {
              return e.selectionStart != e.selectionEnd;
            } catch {
              return !1;
            }
          }
        : function (e) {
            var t;
            try {
              t = e.ownerDocument.selection.createRange();
            } catch {}
            return !t || t.parentElement() != e
              ? !1
              : t.compareEndPoints('StartToEnd', t) != 0;
          },
      _n = (function () {
        var e = d('div');
        return 'oncopy' in e
          ? !0
          : (e.setAttribute('oncopy', 'return;'),
            typeof e.oncopy == 'function');
      })(),
      zt = null;
    function yi(e) {
      if (zt != null) return zt;
      var t = Y(e, d('span', 'x')),
        n = t.getBoundingClientRect(),
        r = w(t, 0, 1).getBoundingClientRect();
      return (zt = Math.abs(n.left - r.left) > 1);
    }
    var Pr = {},
      Bt = {};
    function Wt(e, t) {
      arguments.length > 2 &&
        (t.dependencies = Array.prototype.slice.call(arguments, 2)),
        (Pr[e] = t);
    }
    function kr(e, t) {
      Bt[e] = t;
    }
    function Ir(e) {
      if (typeof e == 'string' && Bt.hasOwnProperty(e)) e = Bt[e];
      else if (e && typeof e.name == 'string' && Bt.hasOwnProperty(e.name)) {
        var t = Bt[e.name];
        typeof t == 'string' && (t = { name: t }),
          (e = M(t, e)),
          (e.name = t.name);
      } else {
        if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
          return Ir('application/xml');
        if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
          return Ir('application/json');
      }
      return typeof e == 'string' ? { name: e } : e || { name: 'null' };
    }
    function zr(e, t) {
      t = Ir(t);
      var n = Pr[t.name];
      if (!n) return zr(e, 'text/plain');
      var r = n(e, t);
      if (fr.hasOwnProperty(t.name)) {
        var i = fr[t.name];
        for (var o in i)
          i.hasOwnProperty(o) &&
            (r.hasOwnProperty(o) && (r['_' + o] = r[o]), (r[o] = i[o]));
      }
      if (
        ((r.name = t.name),
        t.helperType && (r.helperType = t.helperType),
        t.modeProps)
      )
        for (var l in t.modeProps) r[l] = t.modeProps[l];
      return r;
    }
    var fr = {};
    function Br(e, t) {
      var n = fr.hasOwnProperty(e) ? fr[e] : (fr[e] = {});
      Se(t, n);
    }
    function Kt(e, t) {
      if (t === !0) return t;
      if (e.copyState) return e.copyState(t);
      var n = {};
      for (var r in t) {
        var i = t[r];
        i instanceof Array && (i = i.concat([])), (n[r] = i);
      }
      return n;
    }
    function sn(e, t) {
      for (var n; e.innerMode && ((n = e.innerMode(t)), !(!n || n.mode == e)); )
        (t = n.state), (e = n.mode);
      return n || { mode: e, state: t };
    }
    function Wr(e, t, n) {
      return e.startState ? e.startState(t, n) : !0;
    }
    var Je = function (e, t, n) {
      (this.pos = this.start = 0),
        (this.string = e),
        (this.tabSize = t || 8),
        (this.lastColumnPos = this.lastColumnValue = 0),
        (this.lineStart = 0),
        (this.lineOracle = n);
    };
    (Je.prototype.eol = function () {
      return this.pos >= this.string.length;
    }),
      (Je.prototype.sol = function () {
        return this.pos == this.lineStart;
      }),
      (Je.prototype.peek = function () {
        return this.string.charAt(this.pos) || void 0;
      }),
      (Je.prototype.next = function () {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }),
      (Je.prototype.eat = function (e) {
        var t = this.string.charAt(this.pos),
          n;
        if (
          (typeof e == 'string'
            ? (n = t == e)
            : (n = t && (e.test ? e.test(t) : e(t))),
          n)
        )
          return ++this.pos, t;
      }),
      (Je.prototype.eatWhile = function (e) {
        for (var t = this.pos; this.eat(e); );
        return this.pos > t;
      }),
      (Je.prototype.eatSpace = function () {
        for (
          var e = this.pos;
          /[\s\u00a0]/.test(this.string.charAt(this.pos));

        )
          ++this.pos;
        return this.pos > e;
      }),
      (Je.prototype.skipToEnd = function () {
        this.pos = this.string.length;
      }),
      (Je.prototype.skipTo = function (e) {
        var t = this.string.indexOf(e, this.pos);
        if (t > -1) return (this.pos = t), !0;
      }),
      (Je.prototype.backUp = function (e) {
        this.pos -= e;
      }),
      (Je.prototype.column = function () {
        return (
          this.lastColumnPos < this.start &&
            ((this.lastColumnValue = Te(
              this.string,
              this.start,
              this.tabSize,
              this.lastColumnPos,
              this.lastColumnValue
            )),
            (this.lastColumnPos = this.start)),
          this.lastColumnValue -
            (this.lineStart ? Te(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (Je.prototype.indentation = function () {
        return (
          Te(this.string, null, this.tabSize) -
          (this.lineStart ? Te(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (Je.prototype.match = function (e, t, n) {
        if (typeof e == 'string') {
          var r = function (l) {
              return n ? l.toLowerCase() : l;
            },
            i = this.string.substr(this.pos, e.length);
          if (r(i) == r(e)) return t !== !1 && (this.pos += e.length), !0;
        } else {
          var o = this.string.slice(this.pos).match(e);
          return o && o.index > 0
            ? null
            : (o && t !== !1 && (this.pos += o[0].length), o);
        }
      }),
      (Je.prototype.current = function () {
        return this.string.slice(this.start, this.pos);
      }),
      (Je.prototype.hideFirstChars = function (e, t) {
        this.lineStart += e;
        try {
          return t();
        } finally {
          this.lineStart -= e;
        }
      }),
      (Je.prototype.lookAhead = function (e) {
        var t = this.lineOracle;
        return t && t.lookAhead(e);
      }),
      (Je.prototype.baseToken = function () {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      });
    function ae(e, t) {
      if (((t -= e.first), t < 0 || t >= e.size))
        throw new Error(
          'There is no line ' + (t + e.first) + ' in the document.'
        );
      for (var n = e; !n.lines; )
        for (var r = 0; ; ++r) {
          var i = n.children[r],
            o = i.chunkSize();
          if (t < o) {
            n = i;
            break;
          }
          t -= o;
        }
      return n.lines[t];
    }
    function Vt(e, t, n) {
      var r = [],
        i = t.line;
      return (
        e.iter(t.line, n.line + 1, function (o) {
          var l = o.text;
          i == n.line && (l = l.slice(0, n.ch)),
            i == t.line && (l = l.slice(t.ch)),
            r.push(l),
            ++i;
        }),
        r
      );
    }
    function un(e, t, n) {
      var r = [];
      return (
        e.iter(t, n, function (i) {
          r.push(i.text);
        }),
        r
      );
    }
    function Ft(e, t) {
      var n = t - e.height;
      if (n) for (var r = e; r; r = r.parent) r.height += n;
    }
    function f(e) {
      if (e.parent == null) return null;
      for (
        var t = e.parent, n = te(t.lines, e), r = t.parent;
        r;
        t = r, r = r.parent
      )
        for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
      return n + t.first;
    }
    function g(e, t) {
      var n = e.first;
      e: do {
        for (var r = 0; r < e.children.length; ++r) {
          var i = e.children[r],
            o = i.height;
          if (t < o) {
            e = i;
            continue e;
          }
          (t -= o), (n += i.chunkSize());
        }
        return n;
      } while (!e.lines);
      for (var l = 0; l < e.lines.length; ++l) {
        var a = e.lines[l],
          s = a.height;
        if (t < s) break;
        t -= s;
      }
      return n + l;
    }
    function A(e, t) {
      return t >= e.first && t < e.first + e.size;
    }
    function B(e, t) {
      return String(e.lineNumberFormatter(t + e.firstLineNumber));
    }
    function L(e, t, n) {
      if ((n === void 0 && (n = null), !(this instanceof L)))
        return new L(e, t, n);
      (this.line = e), (this.ch = t), (this.sticky = n);
    }
    function X(e, t) {
      return e.line - t.line || e.ch - t.ch;
    }
    function _e(e, t) {
      return e.sticky == t.sticky && X(e, t) == 0;
    }
    function it(e) {
      return L(e.line, e.ch);
    }
    function xt(e, t) {
      return X(e, t) < 0 ? t : e;
    }
    function _r(e, t) {
      return X(e, t) < 0 ? e : t;
    }
    function ho(e, t) {
      return Math.max(e.first, Math.min(t, e.first + e.size - 1));
    }
    function Le(e, t) {
      if (t.line < e.first) return L(e.first, 0);
      var n = e.first + e.size - 1;
      return t.line > n
        ? L(n, ae(e, n).text.length)
        : Ta(t, ae(e, t.line).text.length);
    }
    function Ta(e, t) {
      var n = e.ch;
      return n == null || n > t ? L(e.line, t) : n < 0 ? L(e.line, 0) : e;
    }
    function po(e, t) {
      for (var n = [], r = 0; r < t.length; r++) n[r] = Le(e, t[r]);
      return n;
    }
    var Hn = function (e, t) {
        (this.state = e), (this.lookAhead = t);
      },
      Ut = function (e, t, n, r) {
        (this.state = t),
          (this.doc = e),
          (this.line = n),
          (this.maxLookAhead = r || 0),
          (this.baseTokens = null),
          (this.baseTokenPos = 1);
      };
    (Ut.prototype.lookAhead = function (e) {
      var t = this.doc.getLine(this.line + e);
      return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t;
    }),
      (Ut.prototype.baseToken = function (e) {
        if (!this.baseTokens) return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var t = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: t && t.replace(/( |^)overlay .*/, ''),
          size: this.baseTokens[this.baseTokenPos] - e,
        };
      }),
      (Ut.prototype.nextLine = function () {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }),
      (Ut.fromSaved = function (e, t, n) {
        return t instanceof Hn
          ? new Ut(e, Kt(e.mode, t.state), n, t.lookAhead)
          : new Ut(e, Kt(e.mode, t), n);
      }),
      (Ut.prototype.save = function (e) {
        var t = e !== !1 ? Kt(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new Hn(t, this.maxLookAhead) : t;
      });
    function go(e, t, n, r) {
      var i = [e.state.modeGen],
        o = {};
      ko(
        e,
        t.text,
        e.doc.mode,
        n,
        function (u, h) {
          return i.push(u, h);
        },
        o,
        r
      );
      for (
        var l = n.state,
          a = function (u) {
            n.baseTokens = i;
            var h = e.state.overlays[u],
              v = 1,
              b = 0;
            (n.state = !0),
              ko(
                e,
                t.text,
                h.mode,
                n,
                function (x, D) {
                  for (var E = v; b < x; ) {
                    var _ = i[v];
                    _ > x && i.splice(v, 1, x, i[v + 1], _),
                      (v += 2),
                      (b = Math.min(x, _));
                  }
                  if (D)
                    if (h.opaque)
                      i.splice(E, v - E, x, 'overlay ' + D), (v = E + 2);
                    else
                      for (; E < v; E += 2) {
                        var q = i[E + 1];
                        i[E + 1] = (q ? q + ' ' : '') + 'overlay ' + D;
                      }
                },
                o
              ),
              (n.state = l),
              (n.baseTokens = null),
              (n.baseTokenPos = 1);
          },
          s = 0;
        s < e.state.overlays.length;
        ++s
      )
        a(s);
      return { styles: i, classes: o.bgClass || o.textClass ? o : null };
    }
    function vo(e, t, n) {
      if (!t.styles || t.styles[0] != e.state.modeGen) {
        var r = fn(e, f(t)),
          i =
            t.text.length > e.options.maxHighlightLength &&
            Kt(e.doc.mode, r.state),
          o = go(e, t, r);
        i && (r.state = i),
          (t.stateAfter = r.save(!i)),
          (t.styles = o.styles),
          o.classes
            ? (t.styleClasses = o.classes)
            : t.styleClasses && (t.styleClasses = null),
          n === e.doc.highlightFrontier &&
            (e.doc.modeFrontier = Math.max(
              e.doc.modeFrontier,
              ++e.doc.highlightFrontier
            ));
      }
      return t.styles;
    }
    function fn(e, t, n) {
      var r = e.doc,
        i = e.display;
      if (!r.mode.startState) return new Ut(r, !0, t);
      var o = La(e, t, n),
        l = o > r.first && ae(r, o - 1).stateAfter,
        a = l ? Ut.fromSaved(r, l, o) : new Ut(r, Wr(r.mode), o);
      return (
        r.iter(o, t, function (s) {
          xi(e, s.text, a);
          var u = a.line;
          (s.stateAfter =
            u == t - 1 || u % 5 == 0 || (u >= i.viewFrom && u < i.viewTo)
              ? a.save()
              : null),
            a.nextLine();
        }),
        n && (r.modeFrontier = a.line),
        a
      );
    }
    function xi(e, t, n, r) {
      var i = e.doc.mode,
        o = new Je(t, e.options.tabSize, n);
      for (o.start = o.pos = r || 0, t == '' && mo(i, n.state); !o.eol(); )
        bi(i, o, n.state), (o.start = o.pos);
    }
    function mo(e, t) {
      if (e.blankLine) return e.blankLine(t);
      if (e.innerMode) {
        var n = sn(e, t);
        if (n.mode.blankLine) return n.mode.blankLine(n.state);
      }
    }
    function bi(e, t, n, r) {
      for (var i = 0; i < 10; i++) {
        r && (r[0] = sn(e, n).mode);
        var o = e.token(t, n);
        if (t.pos > t.start) return o;
      }
      throw new Error('Mode ' + e.name + ' failed to advance stream.');
    }
    var yo = function (e, t, n) {
      (this.start = e.start),
        (this.end = e.pos),
        (this.string = e.current()),
        (this.type = t || null),
        (this.state = n);
    };
    function xo(e, t, n, r) {
      var i = e.doc,
        o = i.mode,
        l;
      t = Le(i, t);
      var a = ae(i, t.line),
        s = fn(e, t.line, n),
        u = new Je(a.text, e.options.tabSize, s),
        h;
      for (r && (h = []); (r || u.pos < t.ch) && !u.eol(); )
        (u.start = u.pos),
          (l = bi(o, u, s.state)),
          r && h.push(new yo(u, l, Kt(i.mode, s.state)));
      return r ? h : new yo(u, l, s.state);
    }
    function bo(e, t) {
      if (e)
        for (;;) {
          var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
          if (!n) break;
          e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
          var r = n[1] ? 'bgClass' : 'textClass';
          t[r] == null
            ? (t[r] = n[2])
            : new RegExp('(?:^|\\s)' + n[2] + '(?:$|\\s)').test(t[r]) ||
              (t[r] += ' ' + n[2]);
        }
      return e;
    }
    function ko(e, t, n, r, i, o, l) {
      var a = n.flattenSpans;
      a == null && (a = e.options.flattenSpans);
      var s = 0,
        u = null,
        h = new Je(t, e.options.tabSize, r),
        v,
        b = e.options.addModeClass && [null];
      for (t == '' && bo(mo(n, r.state), o); !h.eol(); ) {
        if (
          (h.pos > e.options.maxHighlightLength
            ? ((a = !1),
              l && xi(e, t, r, h.pos),
              (h.pos = t.length),
              (v = null))
            : (v = bo(bi(n, h, r.state, b), o)),
          b)
        ) {
          var x = b[0].name;
          x && (v = 'm-' + (v ? x + ' ' + v : x));
        }
        if (!a || u != v) {
          for (; s < h.start; ) (s = Math.min(h.start, s + 5e3)), i(s, u);
          u = v;
        }
        h.start = h.pos;
      }
      for (; s < h.pos; ) {
        var D = Math.min(h.pos, s + 5e3);
        i(D, u), (s = D);
      }
    }
    function La(e, t, n) {
      for (
        var r,
          i,
          o = e.doc,
          l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
          a = t;
        a > l;
        --a
      ) {
        if (a <= o.first) return o.first;
        var s = ae(o, a - 1),
          u = s.stateAfter;
        if (
          u &&
          (!n || a + (u instanceof Hn ? u.lookAhead : 0) <= o.modeFrontier)
        )
          return a;
        var h = Te(s.text, null, e.options.tabSize);
        (i == null || r > h) && ((i = a - 1), (r = h));
      }
      return i;
    }
    function Ca(e, t) {
      if (
        ((e.modeFrontier = Math.min(e.modeFrontier, t)),
        !(e.highlightFrontier < t - 10))
      ) {
        for (var n = e.first, r = t - 1; r > n; r--) {
          var i = ae(e, r).stateAfter;
          if (i && (!(i instanceof Hn) || r + i.lookAhead < t)) {
            n = r + 1;
            break;
          }
        }
        e.highlightFrontier = Math.min(e.highlightFrontier, n);
      }
    }
    var wo = !1,
      $t = !1;
    function Da() {
      wo = !0;
    }
    function Ma() {
      $t = !0;
    }
    function Rn(e, t, n) {
      (this.marker = e), (this.from = t), (this.to = n);
    }
    function cn(e, t) {
      if (e)
        for (var n = 0; n < e.length; ++n) {
          var r = e[n];
          if (r.marker == t) return r;
        }
    }
    function Fa(e, t) {
      for (var n, r = 0; r < e.length; ++r)
        e[r] != t && (n || (n = [])).push(e[r]);
      return n;
    }
    function Aa(e, t, n) {
      var r =
        n &&
        window.WeakSet &&
        (n.markedSpans || (n.markedSpans = new WeakSet()));
      r && e.markedSpans && r.has(e.markedSpans)
        ? e.markedSpans.push(t)
        : ((e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]),
          r && r.add(e.markedSpans)),
        t.marker.attachLine(e);
    }
    function Ea(e, t, n) {
      var r;
      if (e)
        for (var i = 0; i < e.length; ++i) {
          var o = e[i],
            l = o.marker,
            a = o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
          if (
            a ||
            (o.from == t &&
              l.type == 'bookmark' &&
              (!n || !o.marker.insertLeft))
          ) {
            var s = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
            (r || (r = [])).push(new Rn(l, o.from, s ? null : o.to));
          }
        }
      return r;
    }
    function Na(e, t, n) {
      var r;
      if (e)
        for (var i = 0; i < e.length; ++i) {
          var o = e[i],
            l = o.marker,
            a = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
          if (
            a ||
            (o.from == t && l.type == 'bookmark' && (!n || o.marker.insertLeft))
          ) {
            var s =
              o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
            (r || (r = [])).push(
              new Rn(l, s ? null : o.from - t, o.to == null ? null : o.to - t)
            );
          }
        }
      return r;
    }
    function ki(e, t) {
      if (t.full) return null;
      var n = A(e, t.from.line) && ae(e, t.from.line).markedSpans,
        r = A(e, t.to.line) && ae(e, t.to.line).markedSpans;
      if (!n && !r) return null;
      var i = t.from.ch,
        o = t.to.ch,
        l = X(t.from, t.to) == 0,
        a = Ea(n, i, l),
        s = Na(r, o, l),
        u = t.text.length == 1,
        h = he(t.text).length + (u ? i : 0);
      if (a)
        for (var v = 0; v < a.length; ++v) {
          var b = a[v];
          if (b.to == null) {
            var x = cn(s, b.marker);
            x ? u && (b.to = x.to == null ? null : x.to + h) : (b.to = i);
          }
        }
      if (s)
        for (var D = 0; D < s.length; ++D) {
          var E = s[D];
          if ((E.to != null && (E.to += h), E.from == null)) {
            var _ = cn(a, E.marker);
            _ || ((E.from = h), u && (a || (a = [])).push(E));
          } else (E.from += h), u && (a || (a = [])).push(E);
        }
      a && (a = So(a)), s && s != a && (s = So(s));
      var q = [a];
      if (!u) {
        var Z = t.text.length - 2,
          j;
        if (Z > 0 && a)
          for (var J = 0; J < a.length; ++J)
            a[J].to == null &&
              (j || (j = [])).push(new Rn(a[J].marker, null, null));
        for (var ge = 0; ge < Z; ++ge) q.push(j);
        q.push(s);
      }
      return q;
    }
    function So(e) {
      for (var t = 0; t < e.length; ++t) {
        var n = e[t];
        n.from != null &&
          n.from == n.to &&
          n.marker.clearWhenEmpty !== !1 &&
          e.splice(t--, 1);
      }
      return e.length ? e : null;
    }
    function Oa(e, t, n) {
      var r = null;
      if (
        (e.iter(t.line, n.line + 1, function (x) {
          if (x.markedSpans)
            for (var D = 0; D < x.markedSpans.length; ++D) {
              var E = x.markedSpans[D].marker;
              E.readOnly && (!r || te(r, E) == -1) && (r || (r = [])).push(E);
            }
        }),
        !r)
      )
        return null;
      for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
        for (var l = r[o], a = l.find(0), s = 0; s < i.length; ++s) {
          var u = i[s];
          if (!(X(u.to, a.from) < 0 || X(u.from, a.to) > 0)) {
            var h = [s, 1],
              v = X(u.from, a.from),
              b = X(u.to, a.to);
            (v < 0 || (!l.inclusiveLeft && !v)) &&
              h.push({ from: u.from, to: a.from }),
              (b > 0 || (!l.inclusiveRight && !b)) &&
                h.push({ from: a.to, to: u.to }),
              i.splice.apply(i, h),
              (s += h.length - 3);
          }
        }
      return i;
    }
    function To(e) {
      var t = e.markedSpans;
      if (t) {
        for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
        e.markedSpans = null;
      }
    }
    function Lo(e, t) {
      if (t) {
        for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
        e.markedSpans = t;
      }
    }
    function qn(e) {
      return e.inclusiveLeft ? -1 : 0;
    }
    function jn(e) {
      return e.inclusiveRight ? 1 : 0;
    }
    function wi(e, t) {
      var n = e.lines.length - t.lines.length;
      if (n != 0) return n;
      var r = e.find(),
        i = t.find(),
        o = X(r.from, i.from) || qn(e) - qn(t);
      if (o) return -o;
      var l = X(r.to, i.to) || jn(e) - jn(t);
      return l || t.id - e.id;
    }
    function Co(e, t) {
      var n = $t && e.markedSpans,
        r;
      if (n)
        for (var i = void 0, o = 0; o < n.length; ++o)
          (i = n[o]),
            i.marker.collapsed &&
              (t ? i.from : i.to) == null &&
              (!r || wi(r, i.marker) < 0) &&
              (r = i.marker);
      return r;
    }
    function Do(e) {
      return Co(e, !0);
    }
    function Kn(e) {
      return Co(e, !1);
    }
    function Pa(e, t) {
      var n = $t && e.markedSpans,
        r;
      if (n)
        for (var i = 0; i < n.length; ++i) {
          var o = n[i];
          o.marker.collapsed &&
            (o.from == null || o.from < t) &&
            (o.to == null || o.to > t) &&
            (!r || wi(r, o.marker) < 0) &&
            (r = o.marker);
        }
      return r;
    }
    function Mo(e, t, n, r, i) {
      var o = ae(e, t),
        l = $t && o.markedSpans;
      if (l)
        for (var a = 0; a < l.length; ++a) {
          var s = l[a];
          if (s.marker.collapsed) {
            var u = s.marker.find(0),
              h = X(u.from, n) || qn(s.marker) - qn(i),
              v = X(u.to, r) || jn(s.marker) - jn(i);
            if (
              !((h >= 0 && v <= 0) || (h <= 0 && v >= 0)) &&
              ((h <= 0 &&
                (s.marker.inclusiveRight && i.inclusiveLeft
                  ? X(u.to, n) >= 0
                  : X(u.to, n) > 0)) ||
                (h >= 0 &&
                  (s.marker.inclusiveRight && i.inclusiveLeft
                    ? X(u.from, r) <= 0
                    : X(u.from, r) < 0)))
            )
              return !0;
          }
        }
    }
    function _t(e) {
      for (var t; (t = Do(e)); ) e = t.find(-1, !0).line;
      return e;
    }
    function Ia(e) {
      for (var t; (t = Kn(e)); ) e = t.find(1, !0).line;
      return e;
    }
    function za(e) {
      for (var t, n; (t = Kn(e)); )
        (e = t.find(1, !0).line), (n || (n = [])).push(e);
      return n;
    }
    function Si(e, t) {
      var n = ae(e, t),
        r = _t(n);
      return n == r ? t : f(r);
    }
    function Fo(e, t) {
      if (t > e.lastLine()) return t;
      var n = ae(e, t),
        r;
      if (!cr(e, n)) return t;
      for (; (r = Kn(n)); ) n = r.find(1, !0).line;
      return f(n) + 1;
    }
    function cr(e, t) {
      var n = $t && t.markedSpans;
      if (n) {
        for (var r = void 0, i = 0; i < n.length; ++i)
          if (((r = n[i]), !!r.marker.collapsed)) {
            if (r.from == null) return !0;
            if (
              !r.marker.widgetNode &&
              r.from == 0 &&
              r.marker.inclusiveLeft &&
              Ti(e, t, r)
            )
              return !0;
          }
      }
    }
    function Ti(e, t, n) {
      if (n.to == null) {
        var r = n.marker.find(1, !0);
        return Ti(e, r.line, cn(r.line.markedSpans, n.marker));
      }
      if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
      for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
        if (
          ((i = t.markedSpans[o]),
          i.marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == n.to &&
            (i.to == null || i.to != n.from) &&
            (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
            Ti(e, t, i))
        )
          return !0;
    }
    function er(e) {
      e = _t(e);
      for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
        var i = n.lines[r];
        if (i == e) break;
        t += i.height;
      }
      for (var o = n.parent; o; n = o, o = n.parent)
        for (var l = 0; l < o.children.length; ++l) {
          var a = o.children[l];
          if (a == n) break;
          t += a.height;
        }
      return t;
    }
    function Un(e) {
      if (e.height == 0) return 0;
      for (var t = e.text.length, n, r = e; (n = Do(r)); ) {
        var i = n.find(0, !0);
        (r = i.from.line), (t += i.from.ch - i.to.ch);
      }
      for (r = e; (n = Kn(r)); ) {
        var o = n.find(0, !0);
        (t -= r.text.length - o.from.ch),
          (r = o.to.line),
          (t += r.text.length - o.to.ch);
      }
      return t;
    }
    function Li(e) {
      var t = e.display,
        n = e.doc;
      (t.maxLine = ae(n, n.first)),
        (t.maxLineLength = Un(t.maxLine)),
        (t.maxLineChanged = !0),
        n.iter(function (r) {
          var i = Un(r);
          i > t.maxLineLength && ((t.maxLineLength = i), (t.maxLine = r));
        });
    }
    var Hr = function (e, t, n) {
      (this.text = e), Lo(this, t), (this.height = n ? n(this) : 1);
    };
    (Hr.prototype.lineNo = function () {
      return f(this);
    }),
      Pt(Hr);
    function Ba(e, t, n, r) {
      (e.text = t),
        e.stateAfter && (e.stateAfter = null),
        e.styles && (e.styles = null),
        e.order != null && (e.order = null),
        To(e),
        Lo(e, n);
      var i = r ? r(e) : 1;
      i != e.height && Ft(e, i);
    }
    function Wa(e) {
      (e.parent = null), To(e);
    }
    var _a = {},
      Ha = {};
    function Ao(e, t) {
      if (!e || /^\s*$/.test(e)) return null;
      var n = t.addModeClass ? Ha : _a;
      return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'));
    }
    function Eo(e, t) {
      var n = S('span', null, null, U ? 'padding-right: .1px' : null),
        r = {
          pre: S('pre', [n], 'CodeMirror-line'),
          content: n,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption('lineWrapping'),
        };
      t.measure = {};
      for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
        var o = i ? t.rest[i - 1] : t.line,
          l = void 0;
        (r.pos = 0),
          (r.addToken = qa),
          sr(e.display.measure) &&
            (l = We(o, e.doc.direction)) &&
            (r.addToken = Ka(r.addToken, l)),
          (r.map = []);
        var a = t != e.display.externalMeasured && f(o);
        Ua(o, r, vo(e, o, a)),
          o.styleClasses &&
            (o.styleClasses.bgClass &&
              (r.bgClass = re(o.styleClasses.bgClass, r.bgClass || '')),
            o.styleClasses.textClass &&
              (r.textClass = re(o.styleClasses.textClass, r.textClass || ''))),
          r.map.length == 0 &&
            r.map.push(0, 0, r.content.appendChild(Wn(e.display.measure))),
          i == 0
            ? ((t.measure.map = r.map), (t.measure.cache = {}))
            : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
              (t.measure.caches || (t.measure.caches = [])).push({}));
      }
      if (U) {
        var s = r.content.lastChild;
        (/\bcm-tab\b/.test(s.className) ||
          (s.querySelector && s.querySelector('.cm-tab'))) &&
          (r.content.className = 'cm-tab-wrap-hack');
      }
      return (
        Ye(e, 'renderLine', e, t.line, r.pre),
        r.pre.className &&
          (r.textClass = re(r.pre.className, r.textClass || '')),
        r
      );
    }
    function Ra(e) {
      var t = d('span', '•', 'cm-invalidchar');
      return (
        (t.title = '\\u' + e.charCodeAt(0).toString(16)),
        t.setAttribute('aria-label', t.title),
        t
      );
    }
    function qa(e, t, n, r, i, o, l) {
      if (t) {
        var a = e.splitSpaces ? ja(t, e.trailingSpace) : t,
          s = e.cm.state.specialChars,
          u = !1,
          h;
        if (!s.test(t))
          (e.col += t.length),
            (h = document.createTextNode(a)),
            e.map.push(e.pos, e.pos + t.length, h),
            k && ee < 9 && (u = !0),
            (e.pos += t.length);
        else {
          h = document.createDocumentFragment();
          for (var v = 0; ; ) {
            s.lastIndex = v;
            var b = s.exec(t),
              x = b ? b.index - v : t.length - v;
            if (x) {
              var D = document.createTextNode(a.slice(v, v + x));
              k && ee < 9 ? h.appendChild(d('span', [D])) : h.appendChild(D),
                e.map.push(e.pos, e.pos + x, D),
                (e.col += x),
                (e.pos += x);
            }
            if (!b) break;
            v += x + 1;
            var E = void 0;
            if (b[0] == '	') {
              var _ = e.cm.options.tabSize,
                q = _ - (e.col % _);
              (E = h.appendChild(d('span', et(q), 'cm-tab'))),
                E.setAttribute('role', 'presentation'),
                E.setAttribute('cm-text', '	'),
                (e.col += q);
            } else
              b[0] == '\r' ||
              b[0] ==
                `
`
                ? ((E = h.appendChild(
                    d('span', b[0] == '\r' ? '␍' : '␤', 'cm-invalidchar')
                  )),
                  E.setAttribute('cm-text', b[0]),
                  (e.col += 1))
                : ((E = e.cm.options.specialCharPlaceholder(b[0])),
                  E.setAttribute('cm-text', b[0]),
                  k && ee < 9
                    ? h.appendChild(d('span', [E]))
                    : h.appendChild(E),
                  (e.col += 1));
            e.map.push(e.pos, e.pos + 1, E), e.pos++;
          }
        }
        if (
          ((e.trailingSpace = a.charCodeAt(t.length - 1) == 32),
          n || r || i || u || o || l)
        ) {
          var Z = n || '';
          r && (Z += r), i && (Z += i);
          var j = d('span', [h], Z, o);
          if (l)
            for (var J in l)
              l.hasOwnProperty(J) &&
                J != 'style' &&
                J != 'class' &&
                j.setAttribute(J, l[J]);
          return e.content.appendChild(j);
        }
        e.content.appendChild(h);
      }
    }
    function ja(e, t) {
      if (e.length > 1 && !/  /.test(e)) return e;
      for (var n = t, r = '', i = 0; i < e.length; i++) {
        var o = e.charAt(i);
        o == ' ' &&
          n &&
          (i == e.length - 1 || e.charCodeAt(i + 1) == 32) &&
          (o = ' '),
          (r += o),
          (n = o == ' ');
      }
      return r;
    }
    function Ka(e, t) {
      return function (n, r, i, o, l, a, s) {
        i = i ? i + ' cm-force-border' : 'cm-force-border';
        for (var u = n.pos, h = u + r.length; ; ) {
          for (
            var v = void 0, b = 0;
            b < t.length && ((v = t[b]), !(v.to > u && v.from <= u));
            b++
          );
          if (v.to >= h) return e(n, r, i, o, l, a, s);
          e(n, r.slice(0, v.to - u), i, o, null, a, s),
            (o = null),
            (r = r.slice(v.to - u)),
            (u = v.to);
        }
      };
    }
    function No(e, t, n, r) {
      var i = !r && n.widgetNode;
      i && e.map.push(e.pos, e.pos + t, i),
        !r &&
          e.cm.display.input.needsContentAttribute &&
          (i || (i = e.content.appendChild(document.createElement('span'))),
          i.setAttribute('cm-marker', n.id)),
        i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
        (e.pos += t),
        (e.trailingSpace = !1);
    }
    function Ua(e, t, n) {
      var r = e.markedSpans,
        i = e.text,
        o = 0;
      if (!r) {
        for (var l = 1; l < n.length; l += 2)
          t.addToken(t, i.slice(o, (o = n[l])), Ao(n[l + 1], t.cm.options));
        return;
      }
      for (
        var a = i.length, s = 0, u = 1, h = '', v, b, x = 0, D, E, _, q, Z;
        ;

      ) {
        if (x == s) {
          (D = E = _ = b = ''), (Z = null), (q = null), (x = 1 / 0);
          for (var j = [], J = void 0, ge = 0; ge < r.length; ++ge) {
            var ce = r[ge],
              De = ce.marker;
            if (De.type == 'bookmark' && ce.from == s && De.widgetNode)
              j.push(De);
            else if (
              ce.from <= s &&
              (ce.to == null ||
                ce.to > s ||
                (De.collapsed && ce.to == s && ce.from == s))
            ) {
              if (
                (ce.to != null &&
                  ce.to != s &&
                  x > ce.to &&
                  ((x = ce.to), (E = '')),
                De.className && (D += ' ' + De.className),
                De.css && (b = (b ? b + ';' : '') + De.css),
                De.startStyle && ce.from == s && (_ += ' ' + De.startStyle),
                De.endStyle &&
                  ce.to == x &&
                  (J || (J = [])).push(De.endStyle, ce.to),
                De.title && ((Z || (Z = {})).title = De.title),
                De.attributes)
              )
                for (var Ke in De.attributes)
                  (Z || (Z = {}))[Ke] = De.attributes[Ke];
              De.collapsed && (!q || wi(q.marker, De) < 0) && (q = ce);
            } else ce.from > s && x > ce.from && (x = ce.from);
          }
          if (J)
            for (var st = 0; st < J.length; st += 2)
              J[st + 1] == x && (E += ' ' + J[st]);
          if (!q || q.from == s)
            for (var Xe = 0; Xe < j.length; ++Xe) No(t, 0, j[Xe]);
          if (q && (q.from || 0) == s) {
            if (
              (No(
                t,
                (q.to == null ? a + 1 : q.to) - s,
                q.marker,
                q.from == null
              ),
              q.to == null)
            )
              return;
            q.to == s && (q = !1);
          }
        }
        if (s >= a) break;
        for (var Mt = Math.min(a, x); ; ) {
          if (h) {
            var wt = s + h.length;
            if (!q) {
              var tt = wt > Mt ? h.slice(0, Mt - s) : h;
              t.addToken(
                t,
                tt,
                v ? v + D : D,
                _,
                s + tt.length == x ? E : '',
                b,
                Z
              );
            }
            if (wt >= Mt) {
              (h = h.slice(Mt - s)), (s = Mt);
              break;
            }
            (s = wt), (_ = '');
          }
          (h = i.slice(o, (o = n[u++]))), (v = Ao(n[u++], t.cm.options));
        }
      }
    }
    function Oo(e, t, n) {
      (this.line = t),
        (this.rest = za(t)),
        (this.size = this.rest ? f(he(this.rest)) - n + 1 : 1),
        (this.node = this.text = null),
        (this.hidden = cr(e, t));
    }
    function Gn(e, t, n) {
      for (var r = [], i, o = t; o < n; o = i) {
        var l = new Oo(e.doc, ae(e.doc, o), o);
        (i = o + l.size), r.push(l);
      }
      return r;
    }
    var Rr = null;
    function Ga(e) {
      Rr
        ? Rr.ops.push(e)
        : (e.ownsGroup = Rr = { ops: [e], delayedCallbacks: [] });
    }
    function Xa(e) {
      var t = e.delayedCallbacks,
        n = 0;
      do {
        for (; n < t.length; n++) t[n].call(null);
        for (var r = 0; r < e.ops.length; r++) {
          var i = e.ops[r];
          if (i.cursorActivityHandlers)
            for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
              i.cursorActivityHandlers[i.cursorActivityCalled++].call(
                null,
                i.cm
              );
        }
      } while (n < t.length);
    }
    function Ya(e, t) {
      var n = e.ownsGroup;
      if (n)
        try {
          Xa(n);
        } finally {
          (Rr = null), t(n);
        }
    }
    var dn = null;
    function ot(e, t) {
      var n = Qt(e, t);
      if (n.length) {
        var r = Array.prototype.slice.call(arguments, 2),
          i;
        Rr
          ? (i = Rr.delayedCallbacks)
          : dn
            ? (i = dn)
            : ((i = dn = []), setTimeout(Za, 0));
        for (
          var o = function (a) {
              i.push(function () {
                return n[a].apply(null, r);
              });
            },
            l = 0;
          l < n.length;
          ++l
        )
          o(l);
      }
    }
    function Za() {
      var e = dn;
      dn = null;
      for (var t = 0; t < e.length; ++t) e[t]();
    }
    function Po(e, t, n, r) {
      for (var i = 0; i < t.changes.length; i++) {
        var o = t.changes[i];
        o == 'text'
          ? Qa(e, t)
          : o == 'gutter'
            ? zo(e, t, n, r)
            : o == 'class'
              ? Ci(e, t)
              : o == 'widget' && Va(e, t, r);
      }
      t.changes = null;
    }
    function hn(e) {
      return (
        e.node == e.text &&
          ((e.node = d('div', null, null, 'position: relative')),
          e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
          e.node.appendChild(e.text),
          k && ee < 8 && (e.node.style.zIndex = 2)),
        e.node
      );
    }
    function Ja(e, t) {
      var n = t.bgClass
        ? t.bgClass + ' ' + (t.line.bgClass || '')
        : t.line.bgClass;
      if ((n && (n += ' CodeMirror-linebackground'), t.background))
        n
          ? (t.background.className = n)
          : (t.background.parentNode.removeChild(t.background),
            (t.background = null));
      else if (n) {
        var r = hn(t);
        (t.background = r.insertBefore(d('div', null, n), r.firstChild)),
          e.display.input.setUneditable(t.background);
      }
    }
    function Io(e, t) {
      var n = e.display.externalMeasured;
      return n && n.line == t.line
        ? ((e.display.externalMeasured = null),
          (t.measure = n.measure),
          n.built)
        : Eo(e, t);
    }
    function Qa(e, t) {
      var n = t.text.className,
        r = Io(e, t);
      t.text == t.node && (t.node = r.pre),
        t.text.parentNode.replaceChild(r.pre, t.text),
        (t.text = r.pre),
        r.bgClass != t.bgClass || r.textClass != t.textClass
          ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), Ci(e, t))
          : n && (t.text.className = n);
    }
    function Ci(e, t) {
      Ja(e, t),
        t.line.wrapClass
          ? (hn(t).className = t.line.wrapClass)
          : t.node != t.text && (t.node.className = '');
      var n = t.textClass
        ? t.textClass + ' ' + (t.line.textClass || '')
        : t.line.textClass;
      t.text.className = n || '';
    }
    function zo(e, t, n, r) {
      if (
        (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
        t.gutterBackground &&
          (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
        t.line.gutterClass)
      ) {
        var i = hn(t);
        (t.gutterBackground = d(
          'div',
          null,
          'CodeMirror-gutter-background ' + t.line.gutterClass,
          'left: ' +
            (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
            'px; width: ' +
            r.gutterTotalWidth +
            'px'
        )),
          e.display.input.setUneditable(t.gutterBackground),
          i.insertBefore(t.gutterBackground, t.text);
      }
      var o = t.line.gutterMarkers;
      if (e.options.lineNumbers || o) {
        var l = hn(t),
          a = (t.gutter = d(
            'div',
            null,
            'CodeMirror-gutter-wrapper',
            'left: ' +
              (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
              'px'
          ));
        if (
          (a.setAttribute('aria-hidden', 'true'),
          e.display.input.setUneditable(a),
          l.insertBefore(a, t.text),
          t.line.gutterClass && (a.className += ' ' + t.line.gutterClass),
          e.options.lineNumbers &&
            (!o || !o['CodeMirror-linenumbers']) &&
            (t.lineNumber = a.appendChild(
              d(
                'div',
                B(e.options, n),
                'CodeMirror-linenumber CodeMirror-gutter-elt',
                'left: ' +
                  r.gutterLeft['CodeMirror-linenumbers'] +
                  'px; width: ' +
                  e.display.lineNumInnerWidth +
                  'px'
              )
            )),
          o)
        )
          for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
            var u = e.display.gutterSpecs[s].className,
              h = o.hasOwnProperty(u) && o[u];
            h &&
              a.appendChild(
                d(
                  'div',
                  [h],
                  'CodeMirror-gutter-elt',
                  'left: ' +
                    r.gutterLeft[u] +
                    'px; width: ' +
                    r.gutterWidth[u] +
                    'px'
                )
              );
          }
      }
    }
    function Va(e, t, n) {
      t.alignable && (t.alignable = null);
      for (
        var r = W('CodeMirror-linewidget'), i = t.node.firstChild, o = void 0;
        i;
        i = o
      )
        (o = i.nextSibling), r.test(i.className) && t.node.removeChild(i);
      Bo(e, t, n);
    }
    function $a(e, t, n, r) {
      var i = Io(e, t);
      return (
        (t.text = t.node = i.pre),
        i.bgClass && (t.bgClass = i.bgClass),
        i.textClass && (t.textClass = i.textClass),
        Ci(e, t),
        zo(e, t, n, r),
        Bo(e, t, r),
        t.node
      );
    }
    function Bo(e, t, n) {
      if ((Wo(e, t.line, t, n, !0), t.rest))
        for (var r = 0; r < t.rest.length; r++) Wo(e, t.rest[r], t, n, !1);
    }
    function Wo(e, t, n, r, i) {
      if (t.widgets)
        for (var o = hn(n), l = 0, a = t.widgets; l < a.length; ++l) {
          var s = a[l],
            u = d(
              'div',
              [s.node],
              'CodeMirror-linewidget' + (s.className ? ' ' + s.className : '')
            );
          s.handleMouseEvents || u.setAttribute('cm-ignore-events', 'true'),
            es(s, u, n, r),
            e.display.input.setUneditable(u),
            i && s.above
              ? o.insertBefore(u, n.gutter || n.text)
              : o.appendChild(u),
            ot(s, 'redraw');
        }
    }
    function es(e, t, n, r) {
      if (e.noHScroll) {
        (n.alignable || (n.alignable = [])).push(t);
        var i = r.wrapperWidth;
        (t.style.left = r.fixedPos + 'px'),
          e.coverGutter ||
            ((i -= r.gutterTotalWidth),
            (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
          (t.style.width = i + 'px');
      }
      e.coverGutter &&
        ((t.style.zIndex = 5),
        (t.style.position = 'relative'),
        e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'));
    }
    function pn(e) {
      if (e.height != null) return e.height;
      var t = e.doc.cm;
      if (!t) return 0;
      if (!m(document.body, e.node)) {
        var n = 'position: relative;';
        e.coverGutter &&
          (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
          e.noHScroll &&
            (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
          Y(t.display.measure, d('div', [e.node], null, n));
      }
      return (e.height = e.node.parentNode.offsetHeight);
    }
    function tr(e, t) {
      for (var n = ln(t); n != e.wrapper; n = n.parentNode)
        if (
          !n ||
          (n.nodeType == 1 && n.getAttribute('cm-ignore-events') == 'true') ||
          (n.parentNode == e.sizer && n != e.mover)
        )
          return !0;
    }
    function Xn(e) {
      return e.lineSpace.offsetTop;
    }
    function Di(e) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight;
    }
    function _o(e) {
      if (e.cachedPaddingH) return e.cachedPaddingH;
      var t = Y(e.measure, d('pre', 'x', 'CodeMirror-line-like')),
        n = window.getComputedStyle
          ? window.getComputedStyle(t)
          : t.currentStyle,
        r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };
      return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
    }
    function Gt(e) {
      return Ee - e.display.nativeBarWidth;
    }
    function wr(e) {
      return e.display.scroller.clientWidth - Gt(e) - e.display.barWidth;
    }
    function Mi(e) {
      return e.display.scroller.clientHeight - Gt(e) - e.display.barHeight;
    }
    function ts(e, t, n) {
      var r = e.options.lineWrapping,
        i = r && wr(e);
      if (!t.measure.heights || (r && t.measure.width != i)) {
        var o = (t.measure.heights = []);
        if (r) {
          t.measure.width = i;
          for (
            var l = t.text.firstChild.getClientRects(), a = 0;
            a < l.length - 1;
            a++
          ) {
            var s = l[a],
              u = l[a + 1];
            Math.abs(s.bottom - u.bottom) > 2 &&
              o.push((s.bottom + u.top) / 2 - n.top);
          }
        }
        o.push(n.bottom - n.top);
      }
    }
    function Ho(e, t, n) {
      if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
      if (e.rest) {
        for (var r = 0; r < e.rest.length; r++)
          if (e.rest[r] == t)
            return { map: e.measure.maps[r], cache: e.measure.caches[r] };
        for (var i = 0; i < e.rest.length; i++)
          if (f(e.rest[i]) > n)
            return {
              map: e.measure.maps[i],
              cache: e.measure.caches[i],
              before: !0,
            };
      }
    }
    function rs(e, t) {
      t = _t(t);
      var n = f(t),
        r = (e.display.externalMeasured = new Oo(e.doc, t, n));
      r.lineN = n;
      var i = (r.built = Eo(e, r));
      return (r.text = i.pre), Y(e.display.lineMeasure, i.pre), r;
    }
    function Ro(e, t, n, r) {
      return Xt(e, qr(e, t), n, r);
    }
    function Fi(e, t) {
      if (t >= e.display.viewFrom && t < e.display.viewTo)
        return e.display.view[Lr(e, t)];
      var n = e.display.externalMeasured;
      if (n && t >= n.lineN && t < n.lineN + n.size) return n;
    }
    function qr(e, t) {
      var n = f(t),
        r = Fi(e, n);
      r && !r.text
        ? (r = null)
        : r && r.changes && (Po(e, r, n, Pi(e)), (e.curOp.forceUpdate = !0)),
        r || (r = rs(e, t));
      var i = Ho(r, t, n);
      return {
        line: t,
        view: r,
        rect: null,
        map: i.map,
        cache: i.cache,
        before: i.before,
        hasHeights: !1,
      };
    }
    function Xt(e, t, n, r, i) {
      t.before && (n = -1);
      var o = n + (r || ''),
        l;
      return (
        t.cache.hasOwnProperty(o)
          ? (l = t.cache[o])
          : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
            t.hasHeights || (ts(e, t.view, t.rect), (t.hasHeights = !0)),
            (l = is(e, t, n, r)),
            l.bogus || (t.cache[o] = l)),
        {
          left: l.left,
          right: l.right,
          top: i ? l.rtop : l.top,
          bottom: i ? l.rbottom : l.bottom,
        }
      );
    }
    var qo = { left: 0, right: 0, top: 0, bottom: 0 };
    function jo(e, t, n) {
      for (var r, i, o, l, a, s, u = 0; u < e.length; u += 3)
        if (
          ((a = e[u]),
          (s = e[u + 1]),
          t < a
            ? ((i = 0), (o = 1), (l = 'left'))
            : t < s
              ? ((i = t - a), (o = i + 1))
              : (u == e.length - 3 || (t == s && e[u + 3] > t)) &&
                ((o = s - a), (i = o - 1), t >= s && (l = 'right')),
          i != null)
        ) {
          if (
            ((r = e[u + 2]),
            a == s && n == (r.insertLeft ? 'left' : 'right') && (l = n),
            n == 'left' && i == 0)
          )
            for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
              (r = e[(u -= 3) + 2]), (l = 'left');
          if (n == 'right' && i == s - a)
            for (
              ;
              u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;

            )
              (r = e[(u += 3) + 2]), (l = 'right');
          break;
        }
      return {
        node: r,
        start: i,
        end: o,
        collapse: l,
        coverStart: a,
        coverEnd: s,
      };
    }
    function ns(e, t) {
      var n = qo;
      if (t == 'left')
        for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
      else
        for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
      return n;
    }
    function is(e, t, n, r) {
      var i = jo(t.map, n, r),
        o = i.node,
        l = i.start,
        a = i.end,
        s = i.collapse,
        u;
      if (o.nodeType == 3) {
        for (var h = 0; h < 4; h++) {
          for (; l && Ce(t.line.text.charAt(i.coverStart + l)); ) --l;
          for (
            ;
            i.coverStart + a < i.coverEnd &&
            Ce(t.line.text.charAt(i.coverStart + a));

          )
            ++a;
          if (
            (k && ee < 9 && l == 0 && a == i.coverEnd - i.coverStart
              ? (u = o.parentNode.getBoundingClientRect())
              : (u = ns(w(o, l, a).getClientRects(), r)),
            u.left || u.right || l == 0)
          )
            break;
          (a = l), (l = l - 1), (s = 'right');
        }
        k && ee < 11 && (u = os(e.display.measure, u));
      } else {
        l > 0 && (s = r = 'right');
        var v;
        e.options.lineWrapping && (v = o.getClientRects()).length > 1
          ? (u = v[r == 'right' ? v.length - 1 : 0])
          : (u = o.getBoundingClientRect());
      }
      if (k && ee < 9 && !l && (!u || (!u.left && !u.right))) {
        var b = o.parentNode.getClientRects()[0];
        b
          ? (u = {
              left: b.left,
              right: b.left + Kr(e.display),
              top: b.top,
              bottom: b.bottom,
            })
          : (u = qo);
      }
      for (
        var x = u.top - t.rect.top,
          D = u.bottom - t.rect.top,
          E = (x + D) / 2,
          _ = t.view.measure.heights,
          q = 0;
        q < _.length - 1 && !(E < _[q]);
        q++
      );
      var Z = q ? _[q - 1] : 0,
        j = _[q],
        J = {
          left: (s == 'right' ? u.right : u.left) - t.rect.left,
          right: (s == 'left' ? u.left : u.right) - t.rect.left,
          top: Z,
          bottom: j,
        };
      return (
        !u.left && !u.right && (J.bogus = !0),
        e.options.singleCursorHeightPerLine || ((J.rtop = x), (J.rbottom = D)),
        J
      );
    }
    function os(e, t) {
      if (
        !window.screen ||
        screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI ||
        !yi(e)
      )
        return t;
      var n = screen.logicalXDPI / screen.deviceXDPI,
        r = screen.logicalYDPI / screen.deviceYDPI;
      return {
        left: t.left * n,
        right: t.right * n,
        top: t.top * r,
        bottom: t.bottom * r,
      };
    }
    function Ko(e) {
      if (
        e.measure &&
        ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
      )
        for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
    }
    function Uo(e) {
      (e.display.externalMeasure = null), C(e.display.lineMeasure);
      for (var t = 0; t < e.display.view.length; t++) Ko(e.display.view[t]);
    }
    function gn(e) {
      Uo(e),
        (e.display.cachedCharWidth =
          e.display.cachedTextHeight =
          e.display.cachedPaddingH =
            null),
        e.options.lineWrapping || (e.display.maxLineChanged = !0),
        (e.display.lineNumChars = null);
    }
    function Go(e) {
      return O && V
        ? -(
            e.body.getBoundingClientRect().left -
            parseInt(getComputedStyle(e.body).marginLeft)
          )
        : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
    }
    function Xo(e) {
      return O && V
        ? -(
            e.body.getBoundingClientRect().top -
            parseInt(getComputedStyle(e.body).marginTop)
          )
        : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
    }
    function Ai(e) {
      var t = _t(e),
        n = t.widgets,
        r = 0;
      if (n) for (var i = 0; i < n.length; ++i) n[i].above && (r += pn(n[i]));
      return r;
    }
    function Yn(e, t, n, r, i) {
      if (!i) {
        var o = Ai(t);
        (n.top += o), (n.bottom += o);
      }
      if (r == 'line') return n;
      r || (r = 'local');
      var l = er(t);
      if (
        (r == 'local' ? (l += Xn(e.display)) : (l -= e.display.viewOffset),
        r == 'page' || r == 'window')
      ) {
        var a = e.display.lineSpace.getBoundingClientRect();
        l += a.top + (r == 'window' ? 0 : Xo(c(e)));
        var s = a.left + (r == 'window' ? 0 : Go(c(e)));
        (n.left += s), (n.right += s);
      }
      return (n.top += l), (n.bottom += l), n;
    }
    function Yo(e, t, n) {
      if (n == 'div') return t;
      var r = t.left,
        i = t.top;
      if (n == 'page') (r -= Go(c(e))), (i -= Xo(c(e)));
      else if (n == 'local' || !n) {
        var o = e.display.sizer.getBoundingClientRect();
        (r += o.left), (i += o.top);
      }
      var l = e.display.lineSpace.getBoundingClientRect();
      return { left: r - l.left, top: i - l.top };
    }
    function Zn(e, t, n, r, i) {
      return r || (r = ae(e.doc, t.line)), Yn(e, r, Ro(e, r, t.ch, i), n);
    }
    function Ht(e, t, n, r, i, o) {
      (r = r || ae(e.doc, t.line)), i || (i = qr(e, r));
      function l(D, E) {
        var _ = Xt(e, i, D, E ? 'right' : 'left', o);
        return E ? (_.left = _.right) : (_.right = _.left), Yn(e, r, _, n);
      }
      var a = We(r, e.doc.direction),
        s = t.ch,
        u = t.sticky;
      if (
        (s >= r.text.length
          ? ((s = r.text.length), (u = 'before'))
          : s <= 0 && ((s = 0), (u = 'after')),
        !a)
      )
        return l(u == 'before' ? s - 1 : s, u == 'before');
      function h(D, E, _) {
        var q = a[E],
          Z = q.level == 1;
        return l(_ ? D - 1 : D, Z != _);
      }
      var v = lr(a, s, u),
        b = br,
        x = h(s, v, u == 'before');
      return b != null && (x.other = h(s, b, u != 'before')), x;
    }
    function Zo(e, t) {
      var n = 0;
      (t = Le(e.doc, t)), e.options.lineWrapping || (n = Kr(e.display) * t.ch);
      var r = ae(e.doc, t.line),
        i = er(r) + Xn(e.display);
      return { left: n, right: n, top: i, bottom: i + r.height };
    }
    function Ei(e, t, n, r, i) {
      var o = L(e, t, n);
      return (o.xRel = i), r && (o.outside = r), o;
    }
    function Ni(e, t, n) {
      var r = e.doc;
      if (((n += e.display.viewOffset), n < 0))
        return Ei(r.first, 0, null, -1, -1);
      var i = g(r, n),
        o = r.first + r.size - 1;
      if (i > o)
        return Ei(r.first + r.size - 1, ae(r, o).text.length, null, 1, 1);
      t < 0 && (t = 0);
      for (var l = ae(r, i); ; ) {
        var a = ls(e, l, i, t, n),
          s = Pa(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
        if (!s) return a;
        var u = s.find(1);
        if (u.line == i) return u;
        l = ae(r, (i = u.line));
      }
    }
    function Jo(e, t, n, r) {
      r -= Ai(t);
      var i = t.text.length,
        o = Et(
          function (l) {
            return Xt(e, n, l - 1).bottom <= r;
          },
          i,
          0
        );
      return (
        (i = Et(
          function (l) {
            return Xt(e, n, l).top > r;
          },
          o,
          i
        )),
        { begin: o, end: i }
      );
    }
    function Qo(e, t, n, r) {
      n || (n = qr(e, t));
      var i = Yn(e, t, Xt(e, n, r), 'line').top;
      return Jo(e, t, n, i);
    }
    function Oi(e, t, n, r) {
      return e.bottom <= n ? !1 : e.top > n ? !0 : (r ? e.left : e.right) > t;
    }
    function ls(e, t, n, r, i) {
      i -= er(t);
      var o = qr(e, t),
        l = Ai(t),
        a = 0,
        s = t.text.length,
        u = !0,
        h = We(t, e.doc.direction);
      if (h) {
        var v = (e.options.lineWrapping ? ss : as)(e, t, n, o, h, r, i);
        (u = v.level != 1),
          (a = u ? v.from : v.to - 1),
          (s = u ? v.to : v.from - 1);
      }
      var b = null,
        x = null,
        D = Et(
          function (ge) {
            var ce = Xt(e, o, ge);
            return (
              (ce.top += l),
              (ce.bottom += l),
              Oi(ce, r, i, !1)
                ? (ce.top <= i && ce.left <= r && ((b = ge), (x = ce)), !0)
                : !1
            );
          },
          a,
          s
        ),
        E,
        _,
        q = !1;
      if (x) {
        var Z = r - x.left < x.right - r,
          j = Z == u;
        (D = b + (j ? 0 : 1)),
          (_ = j ? 'after' : 'before'),
          (E = Z ? x.left : x.right);
      } else {
        !u && (D == s || D == a) && D++,
          (_ =
            D == 0
              ? 'after'
              : D == t.text.length
                ? 'before'
                : Xt(e, o, D - (u ? 1 : 0)).bottom + l <= i == u
                  ? 'after'
                  : 'before');
        var J = Ht(e, L(n, D, _), 'line', t, o);
        (E = J.left), (q = i < J.top ? -1 : i >= J.bottom ? 1 : 0);
      }
      return (D = Lt(t.text, D, 1)), Ei(n, D, _, q, r - E);
    }
    function as(e, t, n, r, i, o, l) {
      var a = Et(
          function (v) {
            var b = i[v],
              x = b.level != 1;
            return Oi(
              Ht(
                e,
                L(n, x ? b.to : b.from, x ? 'before' : 'after'),
                'line',
                t,
                r
              ),
              o,
              l,
              !0
            );
          },
          0,
          i.length - 1
        ),
        s = i[a];
      if (a > 0) {
        var u = s.level != 1,
          h = Ht(
            e,
            L(n, u ? s.from : s.to, u ? 'after' : 'before'),
            'line',
            t,
            r
          );
        Oi(h, o, l, !0) && h.top > l && (s = i[a - 1]);
      }
      return s;
    }
    function ss(e, t, n, r, i, o, l) {
      var a = Jo(e, t, r, l),
        s = a.begin,
        u = a.end;
      /\s/.test(t.text.charAt(u - 1)) && u--;
      for (var h = null, v = null, b = 0; b < i.length; b++) {
        var x = i[b];
        if (!(x.from >= u || x.to <= s)) {
          var D = x.level != 1,
            E = Xt(e, r, D ? Math.min(u, x.to) - 1 : Math.max(s, x.from)).right,
            _ = E < o ? o - E + 1e9 : E - o;
          (!h || v > _) && ((h = x), (v = _));
        }
      }
      return (
        h || (h = i[i.length - 1]),
        h.from < s && (h = { from: s, to: h.to, level: h.level }),
        h.to > u && (h = { from: h.from, to: u, level: h.level }),
        h
      );
    }
    var Sr;
    function jr(e) {
      if (e.cachedTextHeight != null) return e.cachedTextHeight;
      if (Sr == null) {
        Sr = d('pre', null, 'CodeMirror-line-like');
        for (var t = 0; t < 49; ++t)
          Sr.appendChild(document.createTextNode('x')), Sr.appendChild(d('br'));
        Sr.appendChild(document.createTextNode('x'));
      }
      Y(e.measure, Sr);
      var n = Sr.offsetHeight / 50;
      return n > 3 && (e.cachedTextHeight = n), C(e.measure), n || 1;
    }
    function Kr(e) {
      if (e.cachedCharWidth != null) return e.cachedCharWidth;
      var t = d('span', 'xxxxxxxxxx'),
        n = d('pre', [t], 'CodeMirror-line-like');
      Y(e.measure, n);
      var r = t.getBoundingClientRect(),
        i = (r.right - r.left) / 10;
      return i > 2 && (e.cachedCharWidth = i), i || 10;
    }
    function Pi(e) {
      for (
        var t = e.display,
          n = {},
          r = {},
          i = t.gutters.clientLeft,
          o = t.gutters.firstChild,
          l = 0;
        o;
        o = o.nextSibling, ++l
      ) {
        var a = e.display.gutterSpecs[l].className;
        (n[a] = o.offsetLeft + o.clientLeft + i), (r[a] = o.clientWidth);
      }
      return {
        fixedPos: Ii(t),
        gutterTotalWidth: t.gutters.offsetWidth,
        gutterLeft: n,
        gutterWidth: r,
        wrapperWidth: t.wrapper.clientWidth,
      };
    }
    function Ii(e) {
      return (
        e.scroller.getBoundingClientRect().left -
        e.sizer.getBoundingClientRect().left
      );
    }
    function Vo(e) {
      var t = jr(e.display),
        n = e.options.lineWrapping,
        r =
          n && Math.max(5, e.display.scroller.clientWidth / Kr(e.display) - 3);
      return function (i) {
        if (cr(e.doc, i)) return 0;
        var o = 0;
        if (i.widgets)
          for (var l = 0; l < i.widgets.length; l++)
            i.widgets[l].height && (o += i.widgets[l].height);
        return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
      };
    }
    function zi(e) {
      var t = e.doc,
        n = Vo(e);
      t.iter(function (r) {
        var i = n(r);
        i != r.height && Ft(r, i);
      });
    }
    function Tr(e, t, n, r) {
      var i = e.display;
      if (!n && ln(t).getAttribute('cm-not-content') == 'true') return null;
      var o,
        l,
        a = i.lineSpace.getBoundingClientRect();
      try {
        (o = t.clientX - a.left), (l = t.clientY - a.top);
      } catch {
        return null;
      }
      var s = Ni(e, o, l),
        u;
      if (r && s.xRel > 0 && (u = ae(e.doc, s.line).text).length == s.ch) {
        var h = Te(u, u.length, e.options.tabSize) - u.length;
        s = L(
          s.line,
          Math.max(0, Math.round((o - _o(e.display).left) / Kr(e.display)) - h)
        );
      }
      return s;
    }
    function Lr(e, t) {
      if (t >= e.display.viewTo || ((t -= e.display.viewFrom), t < 0))
        return null;
      for (var n = e.display.view, r = 0; r < n.length; r++)
        if (((t -= n[r].size), t < 0)) return r;
    }
    function bt(e, t, n, r) {
      t == null && (t = e.doc.first),
        n == null && (n = e.doc.first + e.doc.size),
        r || (r = 0);
      var i = e.display;
      if (
        (r &&
          n < i.viewTo &&
          (i.updateLineNumbers == null || i.updateLineNumbers > t) &&
          (i.updateLineNumbers = t),
        (e.curOp.viewChanged = !0),
        t >= i.viewTo)
      )
        $t && Si(e.doc, t) < i.viewTo && hr(e);
      else if (n <= i.viewFrom)
        $t && Fo(e.doc, n + r) > i.viewFrom
          ? hr(e)
          : ((i.viewFrom += r), (i.viewTo += r));
      else if (t <= i.viewFrom && n >= i.viewTo) hr(e);
      else if (t <= i.viewFrom) {
        var o = Jn(e, n, n + r, 1);
        o
          ? ((i.view = i.view.slice(o.index)),
            (i.viewFrom = o.lineN),
            (i.viewTo += r))
          : hr(e);
      } else if (n >= i.viewTo) {
        var l = Jn(e, t, t, -1);
        l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : hr(e);
      } else {
        var a = Jn(e, t, t, -1),
          s = Jn(e, n, n + r, 1);
        a && s
          ? ((i.view = i.view
              .slice(0, a.index)
              .concat(Gn(e, a.lineN, s.lineN))
              .concat(i.view.slice(s.index))),
            (i.viewTo += r))
          : hr(e);
      }
      var u = i.externalMeasured;
      u &&
        (n < u.lineN
          ? (u.lineN += r)
          : t < u.lineN + u.size && (i.externalMeasured = null));
    }
    function dr(e, t, n) {
      e.curOp.viewChanged = !0;
      var r = e.display,
        i = e.display.externalMeasured;
      if (
        (i &&
          t >= i.lineN &&
          t < i.lineN + i.size &&
          (r.externalMeasured = null),
        !(t < r.viewFrom || t >= r.viewTo))
      ) {
        var o = r.view[Lr(e, t)];
        if (o.node != null) {
          var l = o.changes || (o.changes = []);
          te(l, n) == -1 && l.push(n);
        }
      }
    }
    function hr(e) {
      (e.display.viewFrom = e.display.viewTo = e.doc.first),
        (e.display.view = []),
        (e.display.viewOffset = 0);
    }
    function Jn(e, t, n, r) {
      var i = Lr(e, t),
        o,
        l = e.display.view;
      if (!$t || n == e.doc.first + e.doc.size) return { index: i, lineN: n };
      for (var a = e.display.viewFrom, s = 0; s < i; s++) a += l[s].size;
      if (a != t) {
        if (r > 0) {
          if (i == l.length - 1) return null;
          (o = a + l[i].size - t), i++;
        } else o = a - t;
        (t += o), (n += o);
      }
      for (; Si(e.doc, n) != n; ) {
        if (i == (r < 0 ? 0 : l.length - 1)) return null;
        (n += r * l[i - (r < 0 ? 1 : 0)].size), (i += r);
      }
      return { index: i, lineN: n };
    }
    function us(e, t, n) {
      var r = e.display,
        i = r.view;
      i.length == 0 || t >= r.viewTo || n <= r.viewFrom
        ? ((r.view = Gn(e, t, n)), (r.viewFrom = t))
        : (r.viewFrom > t
            ? (r.view = Gn(e, t, r.viewFrom).concat(r.view))
            : r.viewFrom < t && (r.view = r.view.slice(Lr(e, t))),
          (r.viewFrom = t),
          r.viewTo < n
            ? (r.view = r.view.concat(Gn(e, r.viewTo, n)))
            : r.viewTo > n && (r.view = r.view.slice(0, Lr(e, n)))),
        (r.viewTo = n);
    }
    function $o(e) {
      for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
        var i = t[r];
        !i.hidden && (!i.node || i.changes) && ++n;
      }
      return n;
    }
    function vn(e) {
      e.display.input.showSelection(e.display.input.prepareSelection());
    }
    function el(e, t) {
      t === void 0 && (t = !0);
      var n = e.doc,
        r = {},
        i = (r.cursors = document.createDocumentFragment()),
        o = (r.selection = document.createDocumentFragment()),
        l = e.options.$customCursor;
      l && (t = !0);
      for (var a = 0; a < n.sel.ranges.length; a++)
        if (!(!t && a == n.sel.primIndex)) {
          var s = n.sel.ranges[a];
          if (
            !(
              s.from().line >= e.display.viewTo ||
              s.to().line < e.display.viewFrom
            )
          ) {
            var u = s.empty();
            if (l) {
              var h = l(e, s);
              h && Bi(e, h, i);
            } else (u || e.options.showCursorWhenSelecting) && Bi(e, s.head, i);
            u || fs(e, s, o);
          }
        }
      return r;
    }
    function Bi(e, t, n) {
      var r = Ht(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
        i = n.appendChild(d('div', ' ', 'CodeMirror-cursor'));
      if (
        ((i.style.left = r.left + 'px'),
        (i.style.top = r.top + 'px'),
        (i.style.height =
          Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
        /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
      ) {
        var o = Zn(e, t, 'div', null, null),
          l = o.right - o.left;
        i.style.width = (l > 0 ? l : e.defaultCharWidth()) + 'px';
      }
      if (r.other) {
        var a = n.appendChild(
          d('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor')
        );
        (a.style.display = ''),
          (a.style.left = r.other.left + 'px'),
          (a.style.top = r.other.top + 'px'),
          (a.style.height = (r.other.bottom - r.other.top) * 0.85 + 'px');
      }
    }
    function Qn(e, t) {
      return e.top - t.top || e.left - t.left;
    }
    function fs(e, t, n) {
      var r = e.display,
        i = e.doc,
        o = document.createDocumentFragment(),
        l = _o(e.display),
        a = l.left,
        s = Math.max(r.sizerWidth, wr(e) - r.sizer.offsetLeft) - l.right,
        u = i.direction == 'ltr';
      function h(j, J, ge, ce) {
        J < 0 && (J = 0),
          (J = Math.round(J)),
          (ce = Math.round(ce)),
          o.appendChild(
            d(
              'div',
              null,
              'CodeMirror-selected',
              'position: absolute; left: ' +
                j +
                `px;
                             top: ` +
                J +
                'px; width: ' +
                (ge ?? s - j) +
                `px;
                             height: ` +
                (ce - J) +
                'px'
            )
          );
      }
      function v(j, J, ge) {
        var ce = ae(i, j),
          De = ce.text.length,
          Ke,
          st;
        function Xe(tt, St) {
          return Zn(e, L(j, tt), 'div', ce, St);
        }
        function Mt(tt, St, ft) {
          var nt = Qo(e, ce, null, tt),
            rt = (St == 'ltr') == (ft == 'after') ? 'left' : 'right',
            Qe =
              ft == 'after'
                ? nt.begin
                : nt.end - (/\s/.test(ce.text.charAt(nt.end - 1)) ? 2 : 1);
          return Xe(Qe, rt)[rt];
        }
        var wt = We(ce, i.direction);
        return (
          or(wt, J || 0, ge ?? De, function (tt, St, ft, nt) {
            var rt = ft == 'ltr',
              Qe = Xe(tt, rt ? 'left' : 'right'),
              Tt = Xe(St - 1, rt ? 'right' : 'left'),
              nn = J == null && tt == 0,
              xr = ge == null && St == De,
              gt = nt == 0,
              Yt = !wt || nt == wt.length - 1;
            if (Tt.top - Qe.top <= 3) {
              var ut = (u ? nn : xr) && gt,
                fo = (u ? xr : nn) && Yt,
                ir = ut ? a : (rt ? Qe : Tt).left,
                Ar = fo ? s : (rt ? Tt : Qe).right;
              h(ir, Qe.top, Ar - ir, Qe.bottom);
            } else {
              var Er, mt, on, co;
              rt
                ? ((Er = u && nn && gt ? a : Qe.left),
                  (mt = u ? s : Mt(tt, ft, 'before')),
                  (on = u ? a : Mt(St, ft, 'after')),
                  (co = u && xr && Yt ? s : Tt.right))
                : ((Er = u ? Mt(tt, ft, 'before') : a),
                  (mt = !u && nn && gt ? s : Qe.right),
                  (on = !u && xr && Yt ? a : Tt.left),
                  (co = u ? Mt(St, ft, 'after') : s)),
                h(Er, Qe.top, mt - Er, Qe.bottom),
                Qe.bottom < Tt.top && h(a, Qe.bottom, null, Tt.top),
                h(on, Tt.top, co - on, Tt.bottom);
            }
            (!Ke || Qn(Qe, Ke) < 0) && (Ke = Qe),
              Qn(Tt, Ke) < 0 && (Ke = Tt),
              (!st || Qn(Qe, st) < 0) && (st = Qe),
              Qn(Tt, st) < 0 && (st = Tt);
          }),
          { start: Ke, end: st }
        );
      }
      var b = t.from(),
        x = t.to();
      if (b.line == x.line) v(b.line, b.ch, x.ch);
      else {
        var D = ae(i, b.line),
          E = ae(i, x.line),
          _ = _t(D) == _t(E),
          q = v(b.line, b.ch, _ ? D.text.length + 1 : null).end,
          Z = v(x.line, _ ? 0 : null, x.ch).start;
        _ &&
          (q.top < Z.top - 2
            ? (h(q.right, q.top, null, q.bottom), h(a, Z.top, Z.left, Z.bottom))
            : h(q.right, q.top, Z.left - q.right, q.bottom)),
          q.bottom < Z.top && h(a, q.bottom, null, Z.top);
      }
      n.appendChild(o);
    }
    function Wi(e) {
      if (e.state.focused) {
        var t = e.display;
        clearInterval(t.blinker);
        var n = !0;
        (t.cursorDiv.style.visibility = ''),
          e.options.cursorBlinkRate > 0
            ? (t.blinker = setInterval(function () {
                e.hasFocus() || Ur(e),
                  (t.cursorDiv.style.visibility = (n = !n) ? '' : 'hidden');
              }, e.options.cursorBlinkRate))
            : e.options.cursorBlinkRate < 0 &&
              (t.cursorDiv.style.visibility = 'hidden');
      }
    }
    function tl(e) {
      e.hasFocus() || (e.display.input.focus(), e.state.focused || Hi(e));
    }
    function _i(e) {
      (e.state.delayingBlurEvent = !0),
        setTimeout(function () {
          e.state.delayingBlurEvent &&
            ((e.state.delayingBlurEvent = !1), e.state.focused && Ur(e));
        }, 100);
    }
    function Hi(e, t) {
      e.state.delayingBlurEvent &&
        !e.state.draggingText &&
        (e.state.delayingBlurEvent = !1),
        e.options.readOnly != 'nocursor' &&
          (e.state.focused ||
            (Ye(e, 'focus', e, t),
            (e.state.focused = !0),
            N(e.display.wrapper, 'CodeMirror-focused'),
            !e.curOp &&
              e.display.selForContextMenu != e.doc.sel &&
              (e.display.input.reset(),
              U &&
                setTimeout(function () {
                  return e.display.input.reset(!0);
                }, 20)),
            e.display.input.receivedFocus()),
          Wi(e));
    }
    function Ur(e, t) {
      e.state.delayingBlurEvent ||
        (e.state.focused &&
          (Ye(e, 'blur', e, t),
          (e.state.focused = !1),
          Ae(e.display.wrapper, 'CodeMirror-focused')),
        clearInterval(e.display.blinker),
        setTimeout(function () {
          e.state.focused || (e.display.shift = !1);
        }, 150));
    }
    function Vn(e) {
      for (
        var t = e.display,
          n = t.lineDiv.offsetTop,
          r = Math.max(0, t.scroller.getBoundingClientRect().top),
          i = t.lineDiv.getBoundingClientRect().top,
          o = 0,
          l = 0;
        l < t.view.length;
        l++
      ) {
        var a = t.view[l],
          s = e.options.lineWrapping,
          u = void 0,
          h = 0;
        if (!a.hidden) {
          if (((i += a.line.height), k && ee < 8)) {
            var v = a.node.offsetTop + a.node.offsetHeight;
            (u = v - n), (n = v);
          } else {
            var b = a.node.getBoundingClientRect();
            (u = b.bottom - b.top),
              !s &&
                a.text.firstChild &&
                (h =
                  a.text.firstChild.getBoundingClientRect().right - b.left - 1);
          }
          var x = a.line.height - u;
          if (
            (x > 0.005 || x < -0.005) &&
            (i < r && (o -= x), Ft(a.line, u), rl(a.line), a.rest)
          )
            for (var D = 0; D < a.rest.length; D++) rl(a.rest[D]);
          if (h > e.display.sizerWidth) {
            var E = Math.ceil(h / Kr(e.display));
            E > e.display.maxLineLength &&
              ((e.display.maxLineLength = E),
              (e.display.maxLine = a.line),
              (e.display.maxLineChanged = !0));
          }
        }
      }
      Math.abs(o) > 2 && (t.scroller.scrollTop += o);
    }
    function rl(e) {
      if (e.widgets)
        for (var t = 0; t < e.widgets.length; ++t) {
          var n = e.widgets[t],
            r = n.node.parentNode;
          r && (n.height = r.offsetHeight);
        }
    }
    function $n(e, t, n) {
      var r = n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop;
      r = Math.floor(r - Xn(e));
      var i = n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight,
        o = g(t, r),
        l = g(t, i);
      if (n && n.ensure) {
        var a = n.ensure.from.line,
          s = n.ensure.to.line;
        a < o
          ? ((o = a), (l = g(t, er(ae(t, a)) + e.wrapper.clientHeight)))
          : Math.min(s, t.lastLine()) >= l &&
            ((o = g(t, er(ae(t, s)) - e.wrapper.clientHeight)), (l = s));
      }
      return { from: o, to: Math.max(l, o + 1) };
    }
    function cs(e, t) {
      if (!Ze(e, 'scrollCursorIntoView')) {
        var n = e.display,
          r = n.sizer.getBoundingClientRect(),
          i = null,
          o = n.wrapper.ownerDocument;
        if (
          (t.top + r.top < 0
            ? (i = !0)
            : t.bottom + r.top >
                (o.defaultView.innerHeight || o.documentElement.clientHeight) &&
              (i = !1),
          i != null && !ke)
        ) {
          var l = d(
            'div',
            '​',
            null,
            `position: absolute;
                         top: ` +
              (t.top - n.viewOffset - Xn(e.display)) +
              `px;
                         height: ` +
              (t.bottom - t.top + Gt(e) + n.barHeight) +
              `px;
                         left: ` +
              t.left +
              'px; width: ' +
              Math.max(2, t.right - t.left) +
              'px;'
          );
          e.display.lineSpace.appendChild(l),
            l.scrollIntoView(i),
            e.display.lineSpace.removeChild(l);
        }
      }
    }
    function ds(e, t, n, r) {
      r == null && (r = 0);
      var i;
      !e.options.lineWrapping &&
        t == n &&
        ((n = t.sticky == 'before' ? L(t.line, t.ch + 1, 'before') : t),
        (t = t.ch
          ? L(t.line, t.sticky == 'before' ? t.ch - 1 : t.ch, 'after')
          : t));
      for (var o = 0; o < 5; o++) {
        var l = !1,
          a = Ht(e, t),
          s = !n || n == t ? a : Ht(e, n);
        i = {
          left: Math.min(a.left, s.left),
          top: Math.min(a.top, s.top) - r,
          right: Math.max(a.left, s.left),
          bottom: Math.max(a.bottom, s.bottom) + r,
        };
        var u = Ri(e, i),
          h = e.doc.scrollTop,
          v = e.doc.scrollLeft;
        if (
          (u.scrollTop != null &&
            (yn(e, u.scrollTop), Math.abs(e.doc.scrollTop - h) > 1 && (l = !0)),
          u.scrollLeft != null &&
            (Cr(e, u.scrollLeft),
            Math.abs(e.doc.scrollLeft - v) > 1 && (l = !0)),
          !l)
        )
          break;
      }
      return i;
    }
    function hs(e, t) {
      var n = Ri(e, t);
      n.scrollTop != null && yn(e, n.scrollTop),
        n.scrollLeft != null && Cr(e, n.scrollLeft);
    }
    function Ri(e, t) {
      var n = e.display,
        r = jr(e.display);
      t.top < 0 && (t.top = 0);
      var i =
          e.curOp && e.curOp.scrollTop != null
            ? e.curOp.scrollTop
            : n.scroller.scrollTop,
        o = Mi(e),
        l = {};
      t.bottom - t.top > o && (t.bottom = t.top + o);
      var a = e.doc.height + Di(n),
        s = t.top < r,
        u = t.bottom > a - r;
      if (t.top < i) l.scrollTop = s ? 0 : t.top;
      else if (t.bottom > i + o) {
        var h = Math.min(t.top, (u ? a : t.bottom) - o);
        h != i && (l.scrollTop = h);
      }
      var v = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
        b =
          e.curOp && e.curOp.scrollLeft != null
            ? e.curOp.scrollLeft
            : n.scroller.scrollLeft - v,
        x = wr(e) - n.gutters.offsetWidth,
        D = t.right - t.left > x;
      return (
        D && (t.right = t.left + x),
        t.left < 10
          ? (l.scrollLeft = 0)
          : t.left < b
            ? (l.scrollLeft = Math.max(0, t.left + v - (D ? 0 : 10)))
            : t.right > x + b - 3 &&
              (l.scrollLeft = t.right + (D ? 0 : 10) - x),
        l
      );
    }
    function qi(e, t) {
      t != null &&
        (ei(e),
        (e.curOp.scrollTop =
          (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) +
          t));
    }
    function Gr(e) {
      ei(e);
      var t = e.getCursor();
      e.curOp.scrollToPos = {
        from: t,
        to: t,
        margin: e.options.cursorScrollMargin,
      };
    }
    function mn(e, t, n) {
      (t != null || n != null) && ei(e),
        t != null && (e.curOp.scrollLeft = t),
        n != null && (e.curOp.scrollTop = n);
    }
    function ps(e, t) {
      ei(e), (e.curOp.scrollToPos = t);
    }
    function ei(e) {
      var t = e.curOp.scrollToPos;
      if (t) {
        e.curOp.scrollToPos = null;
        var n = Zo(e, t.from),
          r = Zo(e, t.to);
        nl(e, n, r, t.margin);
      }
    }
    function nl(e, t, n, r) {
      var i = Ri(e, {
        left: Math.min(t.left, n.left),
        top: Math.min(t.top, n.top) - r,
        right: Math.max(t.right, n.right),
        bottom: Math.max(t.bottom, n.bottom) + r,
      });
      mn(e, i.scrollLeft, i.scrollTop);
    }
    function yn(e, t) {
      Math.abs(e.doc.scrollTop - t) < 2 ||
        (I || Ki(e, { top: t }), il(e, t, !0), I && Ki(e), kn(e, 100));
    }
    function il(e, t, n) {
      (t = Math.max(
        0,
        Math.min(
          e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
          t
        )
      )),
        !(e.display.scroller.scrollTop == t && !n) &&
          ((e.doc.scrollTop = t),
          e.display.scrollbars.setScrollTop(t),
          e.display.scroller.scrollTop != t &&
            (e.display.scroller.scrollTop = t));
    }
    function Cr(e, t, n, r) {
      (t = Math.max(
        0,
        Math.min(
          t,
          e.display.scroller.scrollWidth - e.display.scroller.clientWidth
        )
      )),
        !(
          (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r
        ) &&
          ((e.doc.scrollLeft = t),
          ul(e),
          e.display.scroller.scrollLeft != t &&
            (e.display.scroller.scrollLeft = t),
          e.display.scrollbars.setScrollLeft(t));
    }
    function xn(e) {
      var t = e.display,
        n = t.gutters.offsetWidth,
        r = Math.round(e.doc.height + Di(e.display));
      return {
        clientHeight: t.scroller.clientHeight,
        viewHeight: t.wrapper.clientHeight,
        scrollWidth: t.scroller.scrollWidth,
        clientWidth: t.scroller.clientWidth,
        viewWidth: t.wrapper.clientWidth,
        barLeft: e.options.fixedGutter ? n : 0,
        docHeight: r,
        scrollHeight: r + Gt(e) + t.barHeight,
        nativeBarWidth: t.nativeBarWidth,
        gutterWidth: n,
      };
    }
    var Dr = function (e, t, n) {
      this.cm = n;
      var r = (this.vert = d(
          'div',
          [d('div', null, null, 'min-width: 1px')],
          'CodeMirror-vscrollbar'
        )),
        i = (this.horiz = d(
          'div',
          [d('div', null, null, 'height: 100%; min-height: 1px')],
          'CodeMirror-hscrollbar'
        ));
      (r.tabIndex = i.tabIndex = -1),
        e(r),
        e(i),
        pe(r, 'scroll', function () {
          r.clientHeight && t(r.scrollTop, 'vertical');
        }),
        pe(i, 'scroll', function () {
          i.clientWidth && t(i.scrollLeft, 'horizontal');
        }),
        (this.checkedZeroWidth = !1),
        k &&
          ee < 8 &&
          (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
    };
    (Dr.prototype.update = function (e) {
      var t = e.scrollWidth > e.clientWidth + 1,
        n = e.scrollHeight > e.clientHeight + 1,
        r = e.nativeBarWidth;
      if (n) {
        (this.vert.style.display = 'block'),
          (this.vert.style.bottom = t ? r + 'px' : '0');
        var i = e.viewHeight - (t ? r : 0);
        this.vert.firstChild.style.height =
          Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
      } else
        (this.vert.scrollTop = 0),
          (this.vert.style.display = ''),
          (this.vert.firstChild.style.height = '0');
      if (t) {
        (this.horiz.style.display = 'block'),
          (this.horiz.style.right = n ? r + 'px' : '0'),
          (this.horiz.style.left = e.barLeft + 'px');
        var o = e.viewWidth - e.barLeft - (n ? r : 0);
        this.horiz.firstChild.style.width =
          Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
      } else
        (this.horiz.style.display = ''),
          (this.horiz.firstChild.style.width = '0');
      return (
        !this.checkedZeroWidth &&
          e.clientHeight > 0 &&
          (r == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
        { right: n ? r : 0, bottom: t ? r : 0 }
      );
    }),
      (Dr.prototype.setScrollLeft = function (e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
          this.disableHoriz &&
            this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
      }),
      (Dr.prototype.setScrollTop = function (e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e),
          this.disableVert &&
            this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
      }),
      (Dr.prototype.zeroWidthHack = function () {
        var e = ie && !be ? '12px' : '18px';
        (this.horiz.style.height = this.vert.style.width = e),
          (this.horiz.style.visibility = this.vert.style.visibility = 'hidden'),
          (this.disableHoriz = new xe()),
          (this.disableVert = new xe());
      }),
      (Dr.prototype.enableZeroWidthBar = function (e, t, n) {
        e.style.visibility = '';
        function r() {
          var i = e.getBoundingClientRect(),
            o =
              n == 'vert'
                ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                : document.elementFromPoint(
                    (i.right + i.left) / 2,
                    i.bottom - 1
                  );
          o != e ? (e.style.visibility = 'hidden') : t.set(1e3, r);
        }
        t.set(1e3, r);
      }),
      (Dr.prototype.clear = function () {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      });
    var bn = function () {};
    (bn.prototype.update = function () {
      return { bottom: 0, right: 0 };
    }),
      (bn.prototype.setScrollLeft = function () {}),
      (bn.prototype.setScrollTop = function () {}),
      (bn.prototype.clear = function () {});
    function Xr(e, t) {
      t || (t = xn(e));
      var n = e.display.barWidth,
        r = e.display.barHeight;
      ol(e, t);
      for (
        var i = 0;
        (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
        i++
      )
        n != e.display.barWidth && e.options.lineWrapping && Vn(e),
          ol(e, xn(e)),
          (n = e.display.barWidth),
          (r = e.display.barHeight);
    }
    function ol(e, t) {
      var n = e.display,
        r = n.scrollbars.update(t);
      (n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
        (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
        (n.heightForcer.style.borderBottom = r.bottom + 'px solid transparent'),
        r.right && r.bottom
          ? ((n.scrollbarFiller.style.display = 'block'),
            (n.scrollbarFiller.style.height = r.bottom + 'px'),
            (n.scrollbarFiller.style.width = r.right + 'px'))
          : (n.scrollbarFiller.style.display = ''),
        r.bottom &&
        e.options.coverGutterNextToScrollbar &&
        e.options.fixedGutter
          ? ((n.gutterFiller.style.display = 'block'),
            (n.gutterFiller.style.height = r.bottom + 'px'),
            (n.gutterFiller.style.width = t.gutterWidth + 'px'))
          : (n.gutterFiller.style.display = '');
    }
    var ll = { native: Dr, null: bn };
    function al(e) {
      e.display.scrollbars &&
        (e.display.scrollbars.clear(),
        e.display.scrollbars.addClass &&
          Ae(e.display.wrapper, e.display.scrollbars.addClass)),
        (e.display.scrollbars = new ll[e.options.scrollbarStyle](
          function (t) {
            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
              pe(t, 'mousedown', function () {
                e.state.focused &&
                  setTimeout(function () {
                    return e.display.input.focus();
                  }, 0);
              }),
              t.setAttribute('cm-not-content', 'true');
          },
          function (t, n) {
            n == 'horizontal' ? Cr(e, t) : yn(e, t);
          },
          e
        )),
        e.display.scrollbars.addClass &&
          N(e.display.wrapper, e.display.scrollbars.addClass);
    }
    var gs = 0;
    function Mr(e) {
      (e.curOp = {
        cm: e,
        viewChanged: !1,
        startHeight: e.doc.height,
        forceUpdate: !1,
        updateInput: 0,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++gs,
        markArrays: null,
      }),
        Ga(e.curOp);
    }
    function Fr(e) {
      var t = e.curOp;
      t &&
        Ya(t, function (n) {
          for (var r = 0; r < n.ops.length; r++) n.ops[r].cm.curOp = null;
          vs(n);
        });
    }
    function vs(e) {
      for (var t = e.ops, n = 0; n < t.length; n++) ms(t[n]);
      for (var r = 0; r < t.length; r++) ys(t[r]);
      for (var i = 0; i < t.length; i++) xs(t[i]);
      for (var o = 0; o < t.length; o++) bs(t[o]);
      for (var l = 0; l < t.length; l++) ks(t[l]);
    }
    function ms(e) {
      var t = e.cm,
        n = t.display;
      Ss(t),
        e.updateMaxLine && Li(t),
        (e.mustUpdate =
          e.viewChanged ||
          e.forceUpdate ||
          e.scrollTop != null ||
          (e.scrollToPos &&
            (e.scrollToPos.from.line < n.viewFrom ||
              e.scrollToPos.to.line >= n.viewTo)) ||
          (n.maxLineChanged && t.options.lineWrapping)),
        (e.update =
          e.mustUpdate &&
          new ti(
            t,
            e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
            e.forceUpdate
          ));
    }
    function ys(e) {
      e.updatedDisplay = e.mustUpdate && ji(e.cm, e.update);
    }
    function xs(e) {
      var t = e.cm,
        n = t.display;
      e.updatedDisplay && Vn(t),
        (e.barMeasure = xn(t)),
        n.maxLineChanged &&
          !t.options.lineWrapping &&
          ((e.adjustWidthTo = Ro(t, n.maxLine, n.maxLine.text.length).left + 3),
          (t.display.sizerWidth = e.adjustWidthTo),
          (e.barMeasure.scrollWidth = Math.max(
            n.scroller.clientWidth,
            n.sizer.offsetLeft + e.adjustWidthTo + Gt(t) + t.display.barWidth
          )),
          (e.maxScrollLeft = Math.max(
            0,
            n.sizer.offsetLeft + e.adjustWidthTo - wr(t)
          ))),
        (e.updatedDisplay || e.selectionChanged) &&
          (e.preparedSelection = n.input.prepareSelection());
    }
    function bs(e) {
      var t = e.cm;
      e.adjustWidthTo != null &&
        ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
        e.maxScrollLeft < t.doc.scrollLeft &&
          Cr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
        (t.display.maxLineChanged = !1));
      var n = e.focus && e.focus == y(G(t));
      e.preparedSelection &&
        t.display.input.showSelection(e.preparedSelection, n),
        (e.updatedDisplay || e.startHeight != t.doc.height) &&
          Xr(t, e.barMeasure),
        e.updatedDisplay && Gi(t, e.barMeasure),
        e.selectionChanged && Wi(t),
        t.state.focused && e.updateInput && t.display.input.reset(e.typing),
        n && tl(e.cm);
    }
    function ks(e) {
      var t = e.cm,
        n = t.display,
        r = t.doc;
      if (
        (e.updatedDisplay && sl(t, e.update),
        n.wheelStartX != null &&
          (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) &&
          (n.wheelStartX = n.wheelStartY = null),
        e.scrollTop != null && il(t, e.scrollTop, e.forceScroll),
        e.scrollLeft != null && Cr(t, e.scrollLeft, !0, !0),
        e.scrollToPos)
      ) {
        var i = ds(
          t,
          Le(r, e.scrollToPos.from),
          Le(r, e.scrollToPos.to),
          e.scrollToPos.margin
        );
        cs(t, i);
      }
      var o = e.maybeHiddenMarkers,
        l = e.maybeUnhiddenMarkers;
      if (o)
        for (var a = 0; a < o.length; ++a)
          o[a].lines.length || Ye(o[a], 'hide');
      if (l)
        for (var s = 0; s < l.length; ++s)
          l[s].lines.length && Ye(l[s], 'unhide');
      n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
        e.changeObjs && Ye(t, 'changes', t, e.changeObjs),
        e.update && e.update.finish();
    }
    function Dt(e, t) {
      if (e.curOp) return t();
      Mr(e);
      try {
        return t();
      } finally {
        Fr(e);
      }
    }
    function lt(e, t) {
      return function () {
        if (e.curOp) return t.apply(e, arguments);
        Mr(e);
        try {
          return t.apply(e, arguments);
        } finally {
          Fr(e);
        }
      };
    }
    function vt(e) {
      return function () {
        if (this.curOp) return e.apply(this, arguments);
        Mr(this);
        try {
          return e.apply(this, arguments);
        } finally {
          Fr(this);
        }
      };
    }
    function at(e) {
      return function () {
        var t = this.cm;
        if (!t || t.curOp) return e.apply(this, arguments);
        Mr(t);
        try {
          return e.apply(this, arguments);
        } finally {
          Fr(t);
        }
      };
    }
    function kn(e, t) {
      e.doc.highlightFrontier < e.display.viewTo &&
        e.state.highlight.set(t, oe(ws, e));
    }
    function ws(e) {
      var t = e.doc;
      if (!(t.highlightFrontier >= e.display.viewTo)) {
        var n = +new Date() + e.options.workTime,
          r = fn(e, t.highlightFrontier),
          i = [];
        t.iter(
          r.line,
          Math.min(t.first + t.size, e.display.viewTo + 500),
          function (o) {
            if (r.line >= e.display.viewFrom) {
              var l = o.styles,
                a =
                  o.text.length > e.options.maxHighlightLength
                    ? Kt(t.mode, r.state)
                    : null,
                s = go(e, o, r, !0);
              a && (r.state = a), (o.styles = s.styles);
              var u = o.styleClasses,
                h = s.classes;
              h ? (o.styleClasses = h) : u && (o.styleClasses = null);
              for (
                var v =
                    !l ||
                    l.length != o.styles.length ||
                    (u != h &&
                      (!u ||
                        !h ||
                        u.bgClass != h.bgClass ||
                        u.textClass != h.textClass)),
                  b = 0;
                !v && b < l.length;
                ++b
              )
                v = l[b] != o.styles[b];
              v && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
            } else
              o.text.length <= e.options.maxHighlightLength && xi(e, o.text, r),
                (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                r.nextLine();
            if (+new Date() > n) return kn(e, e.options.workDelay), !0;
          }
        ),
          (t.highlightFrontier = r.line),
          (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
          i.length &&
            Dt(e, function () {
              for (var o = 0; o < i.length; o++) dr(e, i[o], 'text');
            });
      }
    }
    var ti = function (e, t, n) {
      var r = e.display;
      (this.viewport = t),
        (this.visible = $n(r, e.doc, t)),
        (this.editorIsHidden = !r.wrapper.offsetWidth),
        (this.wrapperHeight = r.wrapper.clientHeight),
        (this.wrapperWidth = r.wrapper.clientWidth),
        (this.oldDisplayWidth = wr(e)),
        (this.force = n),
        (this.dims = Pi(e)),
        (this.events = []);
    };
    (ti.prototype.signal = function (e, t) {
      Ct(e, t) && this.events.push(arguments);
    }),
      (ti.prototype.finish = function () {
        for (var e = 0; e < this.events.length; e++)
          Ye.apply(null, this.events[e]);
      });
    function Ss(e) {
      var t = e.display;
      !t.scrollbarsClipped &&
        t.scroller.offsetWidth &&
        ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
        (t.heightForcer.style.height = Gt(e) + 'px'),
        (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
        (t.sizer.style.borderRightWidth = Gt(e) + 'px'),
        (t.scrollbarsClipped = !0));
    }
    function Ts(e) {
      if (e.hasFocus()) return null;
      var t = y(G(e));
      if (!t || !m(e.display.lineDiv, t)) return null;
      var n = { activeElt: t };
      if (window.getSelection) {
        var r = R(e).getSelection();
        r.anchorNode &&
          r.extend &&
          m(e.display.lineDiv, r.anchorNode) &&
          ((n.anchorNode = r.anchorNode),
          (n.anchorOffset = r.anchorOffset),
          (n.focusNode = r.focusNode),
          (n.focusOffset = r.focusOffset));
      }
      return n;
    }
    function Ls(e) {
      if (
        !(!e || !e.activeElt || e.activeElt == y(ye(e.activeElt))) &&
        (e.activeElt.focus(),
        !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
          e.anchorNode &&
          m(document.body, e.anchorNode) &&
          m(document.body, e.focusNode))
      ) {
        var t = e.activeElt.ownerDocument,
          n = t.defaultView.getSelection(),
          r = t.createRange();
        r.setEnd(e.anchorNode, e.anchorOffset),
          r.collapse(!1),
          n.removeAllRanges(),
          n.addRange(r),
          n.extend(e.focusNode, e.focusOffset);
      }
    }
    function ji(e, t) {
      var n = e.display,
        r = e.doc;
      if (t.editorIsHidden) return hr(e), !1;
      if (
        !t.force &&
        t.visible.from >= n.viewFrom &&
        t.visible.to <= n.viewTo &&
        (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo) &&
        n.renderedView == n.view &&
        $o(e) == 0
      )
        return !1;
      fl(e) && (hr(e), (t.dims = Pi(e)));
      var i = r.first + r.size,
        o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
        l = Math.min(i, t.visible.to + e.options.viewportMargin);
      n.viewFrom < o &&
        o - n.viewFrom < 20 &&
        (o = Math.max(r.first, n.viewFrom)),
        n.viewTo > l && n.viewTo - l < 20 && (l = Math.min(i, n.viewTo)),
        $t && ((o = Si(e.doc, o)), (l = Fo(e.doc, l)));
      var a =
        o != n.viewFrom ||
        l != n.viewTo ||
        n.lastWrapHeight != t.wrapperHeight ||
        n.lastWrapWidth != t.wrapperWidth;
      us(e, o, l),
        (n.viewOffset = er(ae(e.doc, n.viewFrom))),
        (e.display.mover.style.top = n.viewOffset + 'px');
      var s = $o(e);
      if (
        !a &&
        s == 0 &&
        !t.force &&
        n.renderedView == n.view &&
        (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo)
      )
        return !1;
      var u = Ts(e);
      return (
        s > 4 && (n.lineDiv.style.display = 'none'),
        Cs(e, n.updateLineNumbers, t.dims),
        s > 4 && (n.lineDiv.style.display = ''),
        (n.renderedView = n.view),
        Ls(u),
        C(n.cursorDiv),
        C(n.selectionDiv),
        (n.gutters.style.height = n.sizer.style.minHeight = 0),
        a &&
          ((n.lastWrapHeight = t.wrapperHeight),
          (n.lastWrapWidth = t.wrapperWidth),
          kn(e, 400)),
        (n.updateLineNumbers = null),
        !0
      );
    }
    function sl(e, t) {
      for (var n = t.viewport, r = !0; ; r = !1) {
        if (!r || !e.options.lineWrapping || t.oldDisplayWidth == wr(e)) {
          if (
            (n &&
              n.top != null &&
              (n = {
                top: Math.min(e.doc.height + Di(e.display) - Mi(e), n.top),
              }),
            (t.visible = $n(e.display, e.doc, n)),
            t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo)
          )
            break;
        } else r && (t.visible = $n(e.display, e.doc, n));
        if (!ji(e, t)) break;
        Vn(e);
        var i = xn(e);
        vn(e), Xr(e, i), Gi(e, i), (t.force = !1);
      }
      t.signal(e, 'update', e),
        (e.display.viewFrom != e.display.reportedViewFrom ||
          e.display.viewTo != e.display.reportedViewTo) &&
          (t.signal(
            e,
            'viewportChange',
            e,
            e.display.viewFrom,
            e.display.viewTo
          ),
          (e.display.reportedViewFrom = e.display.viewFrom),
          (e.display.reportedViewTo = e.display.viewTo));
    }
    function Ki(e, t) {
      var n = new ti(e, t);
      if (ji(e, n)) {
        Vn(e), sl(e, n);
        var r = xn(e);
        vn(e), Xr(e, r), Gi(e, r), n.finish();
      }
    }
    function Cs(e, t, n) {
      var r = e.display,
        i = e.options.lineNumbers,
        o = r.lineDiv,
        l = o.firstChild;
      function a(D) {
        var E = D.nextSibling;
        return (
          U && ie && e.display.currentWheelTarget == D
            ? (D.style.display = 'none')
            : D.parentNode.removeChild(D),
          E
        );
      }
      for (var s = r.view, u = r.viewFrom, h = 0; h < s.length; h++) {
        var v = s[h];
        if (!v.hidden)
          if (!v.node || v.node.parentNode != o) {
            var b = $a(e, v, u, n);
            o.insertBefore(b, l);
          } else {
            for (; l != v.node; ) l = a(l);
            var x = i && t != null && t <= u && v.lineNumber;
            v.changes &&
              (te(v.changes, 'gutter') > -1 && (x = !1), Po(e, v, u, n)),
              x &&
                (C(v.lineNumber),
                v.lineNumber.appendChild(
                  document.createTextNode(B(e.options, u))
                )),
              (l = v.node.nextSibling);
          }
        u += v.size;
      }
      for (; l; ) l = a(l);
    }
    function Ui(e) {
      var t = e.gutters.offsetWidth;
      (e.sizer.style.marginLeft = t + 'px'), ot(e, 'gutterChanged', e);
    }
    function Gi(e, t) {
      (e.display.sizer.style.minHeight = t.docHeight + 'px'),
        (e.display.heightForcer.style.top = t.docHeight + 'px'),
        (e.display.gutters.style.height =
          t.docHeight + e.display.barHeight + Gt(e) + 'px');
    }
    function ul(e) {
      var t = e.display,
        n = t.view;
      if (
        !(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))
      ) {
        for (
          var r = Ii(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
            i = t.gutters.offsetWidth,
            o = r + 'px',
            l = 0;
          l < n.length;
          l++
        )
          if (!n[l].hidden) {
            e.options.fixedGutter &&
              (n[l].gutter && (n[l].gutter.style.left = o),
              n[l].gutterBackground && (n[l].gutterBackground.style.left = o));
            var a = n[l].alignable;
            if (a) for (var s = 0; s < a.length; s++) a[s].style.left = o;
          }
        e.options.fixedGutter && (t.gutters.style.left = r + i + 'px');
      }
    }
    function fl(e) {
      if (!e.options.lineNumbers) return !1;
      var t = e.doc,
        n = B(e.options, t.first + t.size - 1),
        r = e.display;
      if (n.length != r.lineNumChars) {
        var i = r.measure.appendChild(
            d(
              'div',
              [d('div', n)],
              'CodeMirror-linenumber CodeMirror-gutter-elt'
            )
          ),
          o = i.firstChild.offsetWidth,
          l = i.offsetWidth - o;
        return (
          (r.lineGutter.style.width = ''),
          (r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - l) + 1),
          (r.lineNumWidth = r.lineNumInnerWidth + l),
          (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
          (r.lineGutter.style.width = r.lineNumWidth + 'px'),
          Ui(e.display),
          !0
        );
      }
      return !1;
    }
    function Xi(e, t) {
      for (var n = [], r = !1, i = 0; i < e.length; i++) {
        var o = e[i],
          l = null;
        if (
          (typeof o != 'string' && ((l = o.style), (o = o.className)),
          o == 'CodeMirror-linenumbers')
        )
          if (t) r = !0;
          else continue;
        n.push({ className: o, style: l });
      }
      return (
        t && !r && n.push({ className: 'CodeMirror-linenumbers', style: null }),
        n
      );
    }
    function cl(e) {
      var t = e.gutters,
        n = e.gutterSpecs;
      C(t), (e.lineGutter = null);
      for (var r = 0; r < n.length; ++r) {
        var i = n[r],
          o = i.className,
          l = i.style,
          a = t.appendChild(d('div', null, 'CodeMirror-gutter ' + o));
        l && (a.style.cssText = l),
          o == 'CodeMirror-linenumbers' &&
            ((e.lineGutter = a),
            (a.style.width = (e.lineNumWidth || 1) + 'px'));
      }
      (t.style.display = n.length ? '' : 'none'), Ui(e);
    }
    function wn(e) {
      cl(e.display), bt(e), ul(e);
    }
    function Ds(e, t, n, r) {
      var i = this;
      (this.input = n),
        (i.scrollbarFiller = d('div', null, 'CodeMirror-scrollbar-filler')),
        i.scrollbarFiller.setAttribute('cm-not-content', 'true'),
        (i.gutterFiller = d('div', null, 'CodeMirror-gutter-filler')),
        i.gutterFiller.setAttribute('cm-not-content', 'true'),
        (i.lineDiv = S('div', null, 'CodeMirror-code')),
        (i.selectionDiv = d(
          'div',
          null,
          null,
          'position: relative; z-index: 1'
        )),
        (i.cursorDiv = d('div', null, 'CodeMirror-cursors')),
        (i.measure = d('div', null, 'CodeMirror-measure')),
        (i.lineMeasure = d('div', null, 'CodeMirror-measure')),
        (i.lineSpace = S(
          'div',
          [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
          null,
          'position: relative; outline: none'
        ));
      var o = S('div', [i.lineSpace], 'CodeMirror-lines');
      (i.mover = d('div', [o], null, 'position: relative')),
        (i.sizer = d('div', [i.mover], 'CodeMirror-sizer')),
        (i.sizerWidth = null),
        (i.heightForcer = d(
          'div',
          null,
          null,
          'position: absolute; height: ' + Ee + 'px; width: 1px;'
        )),
        (i.gutters = d('div', null, 'CodeMirror-gutters')),
        (i.lineGutter = null),
        (i.scroller = d(
          'div',
          [i.sizer, i.heightForcer, i.gutters],
          'CodeMirror-scroll'
        )),
        i.scroller.setAttribute('tabIndex', '-1'),
        (i.wrapper = d(
          'div',
          [i.scrollbarFiller, i.gutterFiller, i.scroller],
          'CodeMirror'
        )),
        O && H >= 105 && (i.wrapper.style.clipPath = 'inset(0px)'),
        i.wrapper.setAttribute('translate', 'no'),
        k &&
          ee < 8 &&
          ((i.gutters.style.zIndex = -1), (i.scroller.style.paddingRight = 0)),
        !U && !(I && $) && (i.scroller.draggable = !0),
        e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
        (i.viewFrom = i.viewTo = t.first),
        (i.reportedViewFrom = i.reportedViewTo = t.first),
        (i.view = []),
        (i.renderedView = null),
        (i.externalMeasured = null),
        (i.viewOffset = 0),
        (i.lastWrapHeight = i.lastWrapWidth = 0),
        (i.updateLineNumbers = null),
        (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
        (i.scrollbarsClipped = !1),
        (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
        (i.alignWidgets = !1),
        (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
        (i.maxLine = null),
        (i.maxLineLength = 0),
        (i.maxLineChanged = !1),
        (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
        (i.shift = !1),
        (i.selForContextMenu = null),
        (i.activeTouch = null),
        (i.gutterSpecs = Xi(r.gutters, r.lineNumbers)),
        cl(i),
        n.init(i);
    }
    var ri = 0,
      rr = null;
    k ? (rr = -0.53) : I ? (rr = 15) : O ? (rr = -0.7) : K && (rr = -1 / 3);
    function dl(e) {
      var t = e.wheelDeltaX,
        n = e.wheelDeltaY;
      return (
        t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
        n == null && e.detail && e.axis == e.VERTICAL_AXIS
          ? (n = e.detail)
          : n == null && (n = e.wheelDelta),
        { x: t, y: n }
      );
    }
    function Ms(e) {
      var t = dl(e);
      return (t.x *= rr), (t.y *= rr), t;
    }
    function hl(e, t) {
      O &&
        H == 102 &&
        (e.display.chromeScrollHack == null
          ? (e.display.sizer.style.pointerEvents = 'none')
          : clearTimeout(e.display.chromeScrollHack),
        (e.display.chromeScrollHack = setTimeout(function () {
          (e.display.chromeScrollHack = null),
            (e.display.sizer.style.pointerEvents = '');
        }, 100)));
      var n = dl(t),
        r = n.x,
        i = n.y,
        o = rr;
      t.deltaMode === 0 && ((r = t.deltaX), (i = t.deltaY), (o = 1));
      var l = e.display,
        a = l.scroller,
        s = a.scrollWidth > a.clientWidth,
        u = a.scrollHeight > a.clientHeight;
      if ((r && s) || (i && u)) {
        if (i && ie && U) {
          e: for (var h = t.target, v = l.view; h != a; h = h.parentNode)
            for (var b = 0; b < v.length; b++)
              if (v[b].node == h) {
                e.display.currentWheelTarget = h;
                break e;
              }
        }
        if (r && !I && !P && o != null) {
          i && u && yn(e, Math.max(0, a.scrollTop + i * o)),
            Cr(e, Math.max(0, a.scrollLeft + r * o)),
            (!i || (i && u)) && ht(t),
            (l.wheelStartX = null);
          return;
        }
        if (i && o != null) {
          var x = i * o,
            D = e.doc.scrollTop,
            E = D + l.wrapper.clientHeight;
          x < 0
            ? (D = Math.max(0, D + x - 50))
            : (E = Math.min(e.doc.height, E + x + 50)),
            Ki(e, { top: D, bottom: E });
        }
        ri < 20 &&
          t.deltaMode !== 0 &&
          (l.wheelStartX == null
            ? ((l.wheelStartX = a.scrollLeft),
              (l.wheelStartY = a.scrollTop),
              (l.wheelDX = r),
              (l.wheelDY = i),
              setTimeout(function () {
                if (l.wheelStartX != null) {
                  var _ = a.scrollLeft - l.wheelStartX,
                    q = a.scrollTop - l.wheelStartY,
                    Z =
                      (q && l.wheelDY && q / l.wheelDY) ||
                      (_ && l.wheelDX && _ / l.wheelDX);
                  (l.wheelStartX = l.wheelStartY = null),
                    Z && ((rr = (rr * ri + Z) / (ri + 1)), ++ri);
                }
              }, 200))
            : ((l.wheelDX += r), (l.wheelDY += i)));
      }
    }
    var At = function (e, t) {
      (this.ranges = e), (this.primIndex = t);
    };
    (At.prototype.primary = function () {
      return this.ranges[this.primIndex];
    }),
      (At.prototype.equals = function (e) {
        if (e == this) return !0;
        if (
          e.primIndex != this.primIndex ||
          e.ranges.length != this.ranges.length
        )
          return !1;
        for (var t = 0; t < this.ranges.length; t++) {
          var n = this.ranges[t],
            r = e.ranges[t];
          if (!_e(n.anchor, r.anchor) || !_e(n.head, r.head)) return !1;
        }
        return !0;
      }),
      (At.prototype.deepCopy = function () {
        for (var e = [], t = 0; t < this.ranges.length; t++)
          e[t] = new He(it(this.ranges[t].anchor), it(this.ranges[t].head));
        return new At(e, this.primIndex);
      }),
      (At.prototype.somethingSelected = function () {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty()) return !0;
        return !1;
      }),
      (At.prototype.contains = function (e, t) {
        t || (t = e);
        for (var n = 0; n < this.ranges.length; n++) {
          var r = this.ranges[n];
          if (X(t, r.from()) >= 0 && X(e, r.to()) <= 0) return n;
        }
        return -1;
      });
    var He = function (e, t) {
      (this.anchor = e), (this.head = t);
    };
    (He.prototype.from = function () {
      return _r(this.anchor, this.head);
    }),
      (He.prototype.to = function () {
        return xt(this.anchor, this.head);
      }),
      (He.prototype.empty = function () {
        return (
          this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        );
      });
    function Rt(e, t, n) {
      var r = e && e.options.selectionsMayTouch,
        i = t[n];
      t.sort(function (b, x) {
        return X(b.from(), x.from());
      }),
        (n = te(t, i));
      for (var o = 1; o < t.length; o++) {
        var l = t[o],
          a = t[o - 1],
          s = X(a.to(), l.from());
        if (r && !l.empty() ? s > 0 : s >= 0) {
          var u = _r(a.from(), l.from()),
            h = xt(a.to(), l.to()),
            v = a.empty() ? l.from() == l.head : a.from() == a.head;
          o <= n && --n, t.splice(--o, 2, new He(v ? h : u, v ? u : h));
        }
      }
      return new At(t, n);
    }
    function pr(e, t) {
      return new At([new He(e, t || e)], 0);
    }
    function gr(e) {
      return e.text
        ? L(
            e.from.line + e.text.length - 1,
            he(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
          )
        : e.to;
    }
    function pl(e, t) {
      if (X(e, t.from) < 0) return e;
      if (X(e, t.to) <= 0) return gr(t);
      var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
        r = e.ch;
      return e.line == t.to.line && (r += gr(t).ch - t.to.ch), L(n, r);
    }
    function Yi(e, t) {
      for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
        var i = e.sel.ranges[r];
        n.push(new He(pl(i.anchor, t), pl(i.head, t)));
      }
      return Rt(e.cm, n, e.sel.primIndex);
    }
    function gl(e, t, n) {
      return e.line == t.line
        ? L(n.line, e.ch - t.ch + n.ch)
        : L(n.line + (e.line - t.line), e.ch);
    }
    function Fs(e, t, n) {
      for (var r = [], i = L(e.first, 0), o = i, l = 0; l < t.length; l++) {
        var a = t[l],
          s = gl(a.from, i, o),
          u = gl(gr(a), i, o);
        if (((i = a.to), (o = u), n == 'around')) {
          var h = e.sel.ranges[l],
            v = X(h.head, h.anchor) < 0;
          r[l] = new He(v ? u : s, v ? s : u);
        } else r[l] = new He(s, s);
      }
      return new At(r, e.sel.primIndex);
    }
    function Zi(e) {
      (e.doc.mode = zr(e.options, e.doc.modeOption)), Sn(e);
    }
    function Sn(e) {
      e.doc.iter(function (t) {
        t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
      }),
        (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
        kn(e, 100),
        e.state.modeGen++,
        e.curOp && bt(e);
    }
    function vl(e, t) {
      return (
        t.from.ch == 0 &&
        t.to.ch == 0 &&
        he(t.text) == '' &&
        (!e.cm || e.cm.options.wholeLineUpdateBefore)
      );
    }
    function Ji(e, t, n, r) {
      function i(Z) {
        return n ? n[Z] : null;
      }
      function o(Z, j, J) {
        Ba(Z, j, J, r), ot(Z, 'change', Z, t);
      }
      function l(Z, j) {
        for (var J = [], ge = Z; ge < j; ++ge) J.push(new Hr(u[ge], i(ge), r));
        return J;
      }
      var a = t.from,
        s = t.to,
        u = t.text,
        h = ae(e, a.line),
        v = ae(e, s.line),
        b = he(u),
        x = i(u.length - 1),
        D = s.line - a.line;
      if (t.full)
        e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
      else if (vl(e, t)) {
        var E = l(0, u.length - 1);
        o(v, v.text, x),
          D && e.remove(a.line, D),
          E.length && e.insert(a.line, E);
      } else if (h == v)
        if (u.length == 1)
          o(h, h.text.slice(0, a.ch) + b + h.text.slice(s.ch), x);
        else {
          var _ = l(1, u.length - 1);
          _.push(new Hr(b + h.text.slice(s.ch), x, r)),
            o(h, h.text.slice(0, a.ch) + u[0], i(0)),
            e.insert(a.line + 1, _);
        }
      else if (u.length == 1)
        o(h, h.text.slice(0, a.ch) + u[0] + v.text.slice(s.ch), i(0)),
          e.remove(a.line + 1, D);
      else {
        o(h, h.text.slice(0, a.ch) + u[0], i(0)),
          o(v, b + v.text.slice(s.ch), x);
        var q = l(1, u.length - 1);
        D > 1 && e.remove(a.line + 1, D - 1), e.insert(a.line + 1, q);
      }
      ot(e, 'change', e, t);
    }
    function vr(e, t, n) {
      function r(i, o, l) {
        if (i.linked)
          for (var a = 0; a < i.linked.length; ++a) {
            var s = i.linked[a];
            if (s.doc != o) {
              var u = l && s.sharedHist;
              (n && !u) || (t(s.doc, u), r(s.doc, i, u));
            }
          }
      }
      r(e, null, !0);
    }
    function ml(e, t) {
      if (t.cm) throw new Error('This document is already in use.');
      (e.doc = t),
        (t.cm = e),
        zi(e),
        Zi(e),
        yl(e),
        (e.options.direction = t.direction),
        e.options.lineWrapping || Li(e),
        (e.options.mode = t.modeOption),
        bt(e);
    }
    function yl(e) {
      (e.doc.direction == 'rtl' ? N : Ae)(e.display.lineDiv, 'CodeMirror-rtl');
    }
    function As(e) {
      Dt(e, function () {
        yl(e), bt(e);
      });
    }
    function ni(e) {
      (this.done = []),
        (this.undone = []),
        (this.undoDepth = e ? e.undoDepth : 1 / 0),
        (this.lastModTime = this.lastSelTime = 0),
        (this.lastOp = this.lastSelOp = null),
        (this.lastOrigin = this.lastSelOrigin = null),
        (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
    }
    function Qi(e, t) {
      var n = { from: it(t.from), to: gr(t), text: Vt(e, t.from, t.to) };
      return (
        kl(e, n, t.from.line, t.to.line + 1),
        vr(
          e,
          function (r) {
            return kl(r, n, t.from.line, t.to.line + 1);
          },
          !0
        ),
        n
      );
    }
    function xl(e) {
      for (; e.length; ) {
        var t = he(e);
        if (t.ranges) e.pop();
        else break;
      }
    }
    function Es(e, t) {
      if (t) return xl(e.done), he(e.done);
      if (e.done.length && !he(e.done).ranges) return he(e.done);
      if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
        return e.done.pop(), he(e.done);
    }
    function bl(e, t, n, r) {
      var i = e.history;
      i.undone.length = 0;
      var o = +new Date(),
        l,
        a;
      if (
        (i.lastOp == r ||
          (i.lastOrigin == t.origin &&
            t.origin &&
            ((t.origin.charAt(0) == '+' &&
              i.lastModTime >
                o - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
              t.origin.charAt(0) == '*'))) &&
        (l = Es(i, i.lastOp == r))
      )
        (a = he(l.changes)),
          X(t.from, t.to) == 0 && X(t.from, a.to) == 0
            ? (a.to = gr(t))
            : l.changes.push(Qi(e, t));
      else {
        var s = he(i.done);
        for (
          (!s || !s.ranges) && ii(e.sel, i.done),
            l = { changes: [Qi(e, t)], generation: i.generation },
            i.done.push(l);
          i.done.length > i.undoDepth;

        )
          i.done.shift(), i.done[0].ranges || i.done.shift();
      }
      i.done.push(n),
        (i.generation = ++i.maxGeneration),
        (i.lastModTime = i.lastSelTime = o),
        (i.lastOp = i.lastSelOp = r),
        (i.lastOrigin = i.lastSelOrigin = t.origin),
        a || Ye(e, 'historyAdded');
    }
    function Ns(e, t, n, r) {
      var i = t.charAt(0);
      return (
        i == '*' ||
        (i == '+' &&
          n.ranges.length == r.ranges.length &&
          n.somethingSelected() == r.somethingSelected() &&
          new Date() - e.history.lastSelTime <=
            (e.cm ? e.cm.options.historyEventDelay : 500))
      );
    }
    function Os(e, t, n, r) {
      var i = e.history,
        o = r && r.origin;
      n == i.lastSelOp ||
      (o &&
        i.lastSelOrigin == o &&
        ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
          Ns(e, o, he(i.done), t)))
        ? (i.done[i.done.length - 1] = t)
        : ii(t, i.done),
        (i.lastSelTime = +new Date()),
        (i.lastSelOrigin = o),
        (i.lastSelOp = n),
        r && r.clearRedo !== !1 && xl(i.undone);
    }
    function ii(e, t) {
      var n = he(t);
      (n && n.ranges && n.equals(e)) || t.push(e);
    }
    function kl(e, t, n, r) {
      var i = t['spans_' + e.id],
        o = 0;
      e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (l) {
        l.markedSpans &&
          ((i || (i = t['spans_' + e.id] = {}))[o] = l.markedSpans),
          ++o;
      });
    }
    function Ps(e) {
      if (!e) return null;
      for (var t, n = 0; n < e.length; ++n)
        e[n].marker.explicitlyCleared
          ? t || (t = e.slice(0, n))
          : t && t.push(e[n]);
      return t ? (t.length ? t : null) : e;
    }
    function Is(e, t) {
      var n = t['spans_' + e.id];
      if (!n) return null;
      for (var r = [], i = 0; i < t.text.length; ++i) r.push(Ps(n[i]));
      return r;
    }
    function wl(e, t) {
      var n = Is(e, t),
        r = ki(e, t);
      if (!n) return r;
      if (!r) return n;
      for (var i = 0; i < n.length; ++i) {
        var o = n[i],
          l = r[i];
        if (o && l)
          e: for (var a = 0; a < l.length; ++a) {
            for (var s = l[a], u = 0; u < o.length; ++u)
              if (o[u].marker == s.marker) continue e;
            o.push(s);
          }
        else l && (n[i] = l);
      }
      return n;
    }
    function Yr(e, t, n) {
      for (var r = [], i = 0; i < e.length; ++i) {
        var o = e[i];
        if (o.ranges) {
          r.push(n ? At.prototype.deepCopy.call(o) : o);
          continue;
        }
        var l = o.changes,
          a = [];
        r.push({ changes: a });
        for (var s = 0; s < l.length; ++s) {
          var u = l[s],
            h = void 0;
          if ((a.push({ from: u.from, to: u.to, text: u.text }), t))
            for (var v in u)
              (h = v.match(/^spans_(\d+)$/)) &&
                te(t, Number(h[1])) > -1 &&
                ((he(a)[v] = u[v]), delete u[v]);
        }
      }
      return r;
    }
    function Vi(e, t, n, r) {
      if (r) {
        var i = e.anchor;
        if (n) {
          var o = X(t, i) < 0;
          o != X(n, i) < 0 ? ((i = t), (t = n)) : o != X(t, n) < 0 && (t = n);
        }
        return new He(i, t);
      } else return new He(n || t, t);
    }
    function oi(e, t, n, r, i) {
      i == null && (i = e.cm && (e.cm.display.shift || e.extend)),
        pt(e, new At([Vi(e.sel.primary(), t, n, i)], 0), r);
    }
    function Sl(e, t, n) {
      for (
        var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
        o < e.sel.ranges.length;
        o++
      )
        r[o] = Vi(e.sel.ranges[o], t[o], null, i);
      var l = Rt(e.cm, r, e.sel.primIndex);
      pt(e, l, n);
    }
    function $i(e, t, n, r) {
      var i = e.sel.ranges.slice(0);
      (i[t] = n), pt(e, Rt(e.cm, i, e.sel.primIndex), r);
    }
    function Tl(e, t, n, r) {
      pt(e, pr(t, n), r);
    }
    function zs(e, t, n) {
      var r = {
        ranges: t.ranges,
        update: function (i) {
          this.ranges = [];
          for (var o = 0; o < i.length; o++)
            this.ranges[o] = new He(Le(e, i[o].anchor), Le(e, i[o].head));
        },
        origin: n && n.origin,
      };
      return (
        Ye(e, 'beforeSelectionChange', e, r),
        e.cm && Ye(e.cm, 'beforeSelectionChange', e.cm, r),
        r.ranges != t.ranges ? Rt(e.cm, r.ranges, r.ranges.length - 1) : t
      );
    }
    function Ll(e, t, n) {
      var r = e.history.done,
        i = he(r);
      i && i.ranges ? ((r[r.length - 1] = t), li(e, t, n)) : pt(e, t, n);
    }
    function pt(e, t, n) {
      li(e, t, n), Os(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
    }
    function li(e, t, n) {
      (Ct(e, 'beforeSelectionChange') ||
        (e.cm && Ct(e.cm, 'beforeSelectionChange'))) &&
        (t = zs(e, t, n));
      var r =
        (n && n.bias) ||
        (X(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
      Cl(e, Ml(e, t, r, !0)),
        !(n && n.scroll === !1) &&
          e.cm &&
          e.cm.getOption('readOnly') != 'nocursor' &&
          Gr(e.cm);
    }
    function Cl(e, t) {
      t.equals(e.sel) ||
        ((e.sel = t),
        e.cm &&
          ((e.cm.curOp.updateInput = 1),
          (e.cm.curOp.selectionChanged = !0),
          Nt(e.cm)),
        ot(e, 'cursorActivity', e));
    }
    function Dl(e) {
      Cl(e, Ml(e, e.sel, null, !1));
    }
    function Ml(e, t, n, r) {
      for (var i, o = 0; o < t.ranges.length; o++) {
        var l = t.ranges[o],
          a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
          s = ai(e, l.anchor, a && a.anchor, n, r),
          u = l.head == l.anchor ? s : ai(e, l.head, a && a.head, n, r);
        (i || s != l.anchor || u != l.head) &&
          (i || (i = t.ranges.slice(0, o)), (i[o] = new He(s, u)));
      }
      return i ? Rt(e.cm, i, t.primIndex) : t;
    }
    function Zr(e, t, n, r, i) {
      var o = ae(e, t.line);
      if (o.markedSpans)
        for (var l = 0; l < o.markedSpans.length; ++l) {
          var a = o.markedSpans[l],
            s = a.marker,
            u = 'selectLeft' in s ? !s.selectLeft : s.inclusiveLeft,
            h = 'selectRight' in s ? !s.selectRight : s.inclusiveRight;
          if (
            (a.from == null || (u ? a.from <= t.ch : a.from < t.ch)) &&
            (a.to == null || (h ? a.to >= t.ch : a.to > t.ch))
          ) {
            if (i && (Ye(s, 'beforeCursorEnter'), s.explicitlyCleared))
              if (o.markedSpans) {
                --l;
                continue;
              } else break;
            if (!s.atomic) continue;
            if (n) {
              var v = s.find(r < 0 ? 1 : -1),
                b = void 0;
              if (
                ((r < 0 ? h : u) &&
                  (v = Fl(e, v, -r, v && v.line == t.line ? o : null)),
                v &&
                  v.line == t.line &&
                  (b = X(v, n)) &&
                  (r < 0 ? b < 0 : b > 0))
              )
                return Zr(e, v, t, r, i);
            }
            var x = s.find(r < 0 ? -1 : 1);
            return (
              (r < 0 ? u : h) && (x = Fl(e, x, r, x.line == t.line ? o : null)),
              x ? Zr(e, x, t, r, i) : null
            );
          }
        }
      return t;
    }
    function ai(e, t, n, r, i) {
      var o = r || 1,
        l =
          Zr(e, t, n, o, i) ||
          (!i && Zr(e, t, n, o, !0)) ||
          Zr(e, t, n, -o, i) ||
          (!i && Zr(e, t, n, -o, !0));
      return l || ((e.cantEdit = !0), L(e.first, 0));
    }
    function Fl(e, t, n, r) {
      return n < 0 && t.ch == 0
        ? t.line > e.first
          ? Le(e, L(t.line - 1))
          : null
        : n > 0 && t.ch == (r || ae(e, t.line)).text.length
          ? t.line < e.first + e.size - 1
            ? L(t.line + 1, 0)
            : null
          : new L(t.line, t.ch + n);
    }
    function Al(e) {
      e.setSelection(L(e.firstLine(), 0), L(e.lastLine()), Ve);
    }
    function El(e, t, n) {
      var r = {
        canceled: !1,
        from: t.from,
        to: t.to,
        text: t.text,
        origin: t.origin,
        cancel: function () {
          return (r.canceled = !0);
        },
      };
      return (
        n &&
          (r.update = function (i, o, l, a) {
            i && (r.from = Le(e, i)),
              o && (r.to = Le(e, o)),
              l && (r.text = l),
              a !== void 0 && (r.origin = a);
          }),
        Ye(e, 'beforeChange', e, r),
        e.cm && Ye(e.cm, 'beforeChange', e.cm, r),
        r.canceled
          ? (e.cm && (e.cm.curOp.updateInput = 2), null)
          : { from: r.from, to: r.to, text: r.text, origin: r.origin }
      );
    }
    function Jr(e, t, n) {
      if (e.cm) {
        if (!e.cm.curOp) return lt(e.cm, Jr)(e, t, n);
        if (e.cm.state.suppressEdits) return;
      }
      if (
        !(
          (Ct(e, 'beforeChange') || (e.cm && Ct(e.cm, 'beforeChange'))) &&
          ((t = El(e, t, !0)), !t)
        )
      ) {
        var r = wo && !n && Oa(e, t.from, t.to);
        if (r)
          for (var i = r.length - 1; i >= 0; --i)
            Nl(e, {
              from: r[i].from,
              to: r[i].to,
              text: i ? [''] : t.text,
              origin: t.origin,
            });
        else Nl(e, t);
      }
    }
    function Nl(e, t) {
      if (!(t.text.length == 1 && t.text[0] == '' && X(t.from, t.to) == 0)) {
        var n = Yi(e, t);
        bl(e, t, n, e.cm ? e.cm.curOp.id : NaN), Tn(e, t, n, ki(e, t));
        var r = [];
        vr(e, function (i, o) {
          !o && te(r, i.history) == -1 && (zl(i.history, t), r.push(i.history)),
            Tn(i, t, null, ki(i, t));
        });
      }
    }
    function si(e, t, n) {
      var r = e.cm && e.cm.state.suppressEdits;
      if (!(r && !n)) {
        for (
          var i = e.history,
            o,
            l = e.sel,
            a = t == 'undo' ? i.done : i.undone,
            s = t == 'undo' ? i.undone : i.done,
            u = 0;
          u < a.length &&
          ((o = a[u]), !(n ? o.ranges && !o.equals(e.sel) : !o.ranges));
          u++
        );
        if (u != a.length) {
          for (i.lastOrigin = i.lastSelOrigin = null; ; )
            if (((o = a.pop()), o.ranges)) {
              if ((ii(o, s), n && !o.equals(e.sel))) {
                pt(e, o, { clearRedo: !1 });
                return;
              }
              l = o;
            } else if (r) {
              a.push(o);
              return;
            } else break;
          var h = [];
          ii(l, s),
            s.push({ changes: h, generation: i.generation }),
            (i.generation = o.generation || ++i.maxGeneration);
          for (
            var v = Ct(e, 'beforeChange') || (e.cm && Ct(e.cm, 'beforeChange')),
              b = function (E) {
                var _ = o.changes[E];
                if (((_.origin = t), v && !El(e, _, !1)))
                  return (a.length = 0), {};
                h.push(Qi(e, _));
                var q = E ? Yi(e, _) : he(a);
                Tn(e, _, q, wl(e, _)),
                  !E &&
                    e.cm &&
                    e.cm.scrollIntoView({ from: _.from, to: gr(_) });
                var Z = [];
                vr(e, function (j, J) {
                  !J &&
                    te(Z, j.history) == -1 &&
                    (zl(j.history, _), Z.push(j.history)),
                    Tn(j, _, null, wl(j, _));
                });
              },
              x = o.changes.length - 1;
            x >= 0;
            --x
          ) {
            var D = b(x);
            if (D) return D.v;
          }
        }
      }
    }
    function Ol(e, t) {
      if (
        t != 0 &&
        ((e.first += t),
        (e.sel = new At(
          Oe(e.sel.ranges, function (i) {
            return new He(
              L(i.anchor.line + t, i.anchor.ch),
              L(i.head.line + t, i.head.ch)
            );
          }),
          e.sel.primIndex
        )),
        e.cm)
      ) {
        bt(e.cm, e.first, e.first - t, t);
        for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
          dr(e.cm, r, 'gutter');
      }
    }
    function Tn(e, t, n, r) {
      if (e.cm && !e.cm.curOp) return lt(e.cm, Tn)(e, t, n, r);
      if (t.to.line < e.first) {
        Ol(e, t.text.length - 1 - (t.to.line - t.from.line));
        return;
      }
      if (!(t.from.line > e.lastLine())) {
        if (t.from.line < e.first) {
          var i = t.text.length - 1 - (e.first - t.from.line);
          Ol(e, i),
            (t = {
              from: L(e.first, 0),
              to: L(t.to.line + i, t.to.ch),
              text: [he(t.text)],
              origin: t.origin,
            });
        }
        var o = e.lastLine();
        t.to.line > o &&
          (t = {
            from: t.from,
            to: L(o, ae(e, o).text.length),
            text: [t.text[0]],
            origin: t.origin,
          }),
          (t.removed = Vt(e, t.from, t.to)),
          n || (n = Yi(e, t)),
          e.cm ? Bs(e.cm, t, r) : Ji(e, t, r),
          li(e, n, Ve),
          e.cantEdit && ai(e, L(e.firstLine(), 0)) && (e.cantEdit = !1);
      }
    }
    function Bs(e, t, n) {
      var r = e.doc,
        i = e.display,
        o = t.from,
        l = t.to,
        a = !1,
        s = o.line;
      e.options.lineWrapping ||
        ((s = f(_t(ae(r, o.line)))),
        r.iter(s, l.line + 1, function (x) {
          if (x == i.maxLine) return (a = !0), !0;
        })),
        r.sel.contains(t.from, t.to) > -1 && Nt(e),
        Ji(r, t, n, Vo(e)),
        e.options.lineWrapping ||
          (r.iter(s, o.line + t.text.length, function (x) {
            var D = Un(x);
            D > i.maxLineLength &&
              ((i.maxLine = x),
              (i.maxLineLength = D),
              (i.maxLineChanged = !0),
              (a = !1));
          }),
          a && (e.curOp.updateMaxLine = !0)),
        Ca(r, o.line),
        kn(e, 400);
      var u = t.text.length - (l.line - o.line) - 1;
      t.full
        ? bt(e)
        : o.line == l.line && t.text.length == 1 && !vl(e.doc, t)
          ? dr(e, o.line, 'text')
          : bt(e, o.line, l.line + 1, u);
      var h = Ct(e, 'changes'),
        v = Ct(e, 'change');
      if (v || h) {
        var b = {
          from: o,
          to: l,
          text: t.text,
          removed: t.removed,
          origin: t.origin,
        };
        v && ot(e, 'change', e, b),
          h && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(b);
      }
      e.display.selForContextMenu = null;
    }
    function Qr(e, t, n, r, i) {
      var o;
      r || (r = n),
        X(r, n) < 0 && ((o = [r, n]), (n = o[0]), (r = o[1])),
        typeof t == 'string' && (t = e.splitLines(t)),
        Jr(e, { from: n, to: r, text: t, origin: i });
    }
    function Pl(e, t, n, r) {
      n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
    }
    function Il(e, t, n, r) {
      for (var i = 0; i < e.length; ++i) {
        var o = e[i],
          l = !0;
        if (o.ranges) {
          o.copied || ((o = e[i] = o.deepCopy()), (o.copied = !0));
          for (var a = 0; a < o.ranges.length; a++)
            Pl(o.ranges[a].anchor, t, n, r), Pl(o.ranges[a].head, t, n, r);
          continue;
        }
        for (var s = 0; s < o.changes.length; ++s) {
          var u = o.changes[s];
          if (n < u.from.line)
            (u.from = L(u.from.line + r, u.from.ch)),
              (u.to = L(u.to.line + r, u.to.ch));
          else if (t <= u.to.line) {
            l = !1;
            break;
          }
        }
        l || (e.splice(0, i + 1), (i = 0));
      }
    }
    function zl(e, t) {
      var n = t.from.line,
        r = t.to.line,
        i = t.text.length - (r - n) - 1;
      Il(e.done, n, r, i), Il(e.undone, n, r, i);
    }
    function Ln(e, t, n, r) {
      var i = t,
        o = t;
      return (
        typeof t == 'number' ? (o = ae(e, ho(e, t))) : (i = f(t)),
        i == null ? null : (r(o, i) && e.cm && dr(e.cm, i, n), o)
      );
    }
    function Cn(e) {
      (this.lines = e), (this.parent = null);
      for (var t = 0, n = 0; n < e.length; ++n)
        (e[n].parent = this), (t += e[n].height);
      this.height = t;
    }
    Cn.prototype = {
      chunkSize: function () {
        return this.lines.length;
      },
      removeInner: function (e, t) {
        for (var n = e, r = e + t; n < r; ++n) {
          var i = this.lines[n];
          (this.height -= i.height), Wa(i), ot(i, 'delete');
        }
        this.lines.splice(e, t);
      },
      collapse: function (e) {
        e.push.apply(e, this.lines);
      },
      insertInner: function (e, t, n) {
        (this.height += n),
          (this.lines = this.lines
            .slice(0, e)
            .concat(t)
            .concat(this.lines.slice(e)));
        for (var r = 0; r < t.length; ++r) t[r].parent = this;
      },
      iterN: function (e, t, n) {
        for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
      },
    };
    function Dn(e) {
      this.children = e;
      for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
        var i = e[r];
        (t += i.chunkSize()), (n += i.height), (i.parent = this);
      }
      (this.size = t), (this.height = n), (this.parent = null);
    }
    Dn.prototype = {
      chunkSize: function () {
        return this.size;
      },
      removeInner: function (e, t) {
        this.size -= t;
        for (var n = 0; n < this.children.length; ++n) {
          var r = this.children[n],
            i = r.chunkSize();
          if (e < i) {
            var o = Math.min(t, i - e),
              l = r.height;
            if (
              (r.removeInner(e, o),
              (this.height -= l - r.height),
              i == o && (this.children.splice(n--, 1), (r.parent = null)),
              (t -= o) == 0)
            )
              break;
            e = 0;
          } else e -= i;
        }
        if (
          this.size - t < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof Cn))
        ) {
          var a = [];
          this.collapse(a),
            (this.children = [new Cn(a)]),
            (this.children[0].parent = this);
        }
      },
      collapse: function (e) {
        for (var t = 0; t < this.children.length; ++t)
          this.children[t].collapse(e);
      },
      insertInner: function (e, t, n) {
        (this.size += t.length), (this.height += n);
        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
            o = i.chunkSize();
          if (e <= o) {
            if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
              for (
                var l = (i.lines.length % 25) + 25, a = l;
                a < i.lines.length;

              ) {
                var s = new Cn(i.lines.slice(a, (a += 25)));
                (i.height -= s.height),
                  this.children.splice(++r, 0, s),
                  (s.parent = this);
              }
              (i.lines = i.lines.slice(0, l)), this.maybeSpill();
            }
            break;
          }
          e -= o;
        }
      },
      maybeSpill: function () {
        if (!(this.children.length <= 10)) {
          var e = this;
          do {
            var t = e.children.splice(e.children.length - 5, 5),
              n = new Dn(t);
            if (e.parent) {
              (e.size -= n.size), (e.height -= n.height);
              var i = te(e.parent.children, e);
              e.parent.children.splice(i + 1, 0, n);
            } else {
              var r = new Dn(e.children);
              (r.parent = e), (e.children = [r, n]), (e = r);
            }
            n.parent = e.parent;
          } while (e.children.length > 10);
          e.parent.maybeSpill();
        }
      },
      iterN: function (e, t, n) {
        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
            o = i.chunkSize();
          if (e < o) {
            var l = Math.min(t, o - e);
            if (i.iterN(e, l, n)) return !0;
            if ((t -= l) == 0) break;
            e = 0;
          } else e -= o;
        }
      },
    };
    var Mn = function (e, t, n) {
      if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
      (this.doc = e), (this.node = t);
    };
    (Mn.prototype.clear = function () {
      var e = this.doc.cm,
        t = this.line.widgets,
        n = this.line,
        r = f(n);
      if (!(r == null || !t)) {
        for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
        t.length || (n.widgets = null);
        var o = pn(this);
        Ft(n, Math.max(0, n.height - o)),
          e &&
            (Dt(e, function () {
              Bl(e, n, -o), dr(e, r, 'widget');
            }),
            ot(e, 'lineWidgetCleared', e, this, r));
      }
    }),
      (Mn.prototype.changed = function () {
        var e = this,
          t = this.height,
          n = this.doc.cm,
          r = this.line;
        this.height = null;
        var i = pn(this) - t;
        i &&
          (cr(this.doc, r) || Ft(r, r.height + i),
          n &&
            Dt(n, function () {
              (n.curOp.forceUpdate = !0),
                Bl(n, r, i),
                ot(n, 'lineWidgetChanged', n, e, f(r));
            }));
      }),
      Pt(Mn);
    function Bl(e, t, n) {
      er(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && qi(e, n);
    }
    function Ws(e, t, n, r) {
      var i = new Mn(e, n, r),
        o = e.cm;
      return (
        o && i.noHScroll && (o.display.alignWidgets = !0),
        Ln(e, t, 'widget', function (l) {
          var a = l.widgets || (l.widgets = []);
          if (
            (i.insertAt == null
              ? a.push(i)
              : a.splice(Math.min(a.length, Math.max(0, i.insertAt)), 0, i),
            (i.line = l),
            o && !cr(e, l))
          ) {
            var s = er(l) < e.scrollTop;
            Ft(l, l.height + pn(i)),
              s && qi(o, i.height),
              (o.curOp.forceUpdate = !0);
          }
          return !0;
        }),
        o && ot(o, 'lineWidgetAdded', o, i, typeof t == 'number' ? t : f(t)),
        i
      );
    }
    var Wl = 0,
      mr = function (e, t) {
        (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++Wl);
      };
    (mr.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        var e = this.doc.cm,
          t = e && !e.curOp;
        if ((t && Mr(e), Ct(this, 'clear'))) {
          var n = this.find();
          n && ot(this, 'clear', n.from, n.to);
        }
        for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
          var l = this.lines[o],
            a = cn(l.markedSpans, this);
          e && !this.collapsed
            ? dr(e, f(l), 'text')
            : e && (a.to != null && (i = f(l)), a.from != null && (r = f(l))),
            (l.markedSpans = Fa(l.markedSpans, a)),
            a.from == null &&
              this.collapsed &&
              !cr(this.doc, l) &&
              e &&
              Ft(l, jr(e.display));
        }
        if (e && this.collapsed && !e.options.lineWrapping)
          for (var s = 0; s < this.lines.length; ++s) {
            var u = _t(this.lines[s]),
              h = Un(u);
            h > e.display.maxLineLength &&
              ((e.display.maxLine = u),
              (e.display.maxLineLength = h),
              (e.display.maxLineChanged = !0));
          }
        r != null && e && this.collapsed && bt(e, r, i + 1),
          (this.lines.length = 0),
          (this.explicitlyCleared = !0),
          this.atomic &&
            this.doc.cantEdit &&
            ((this.doc.cantEdit = !1), e && Dl(e.doc)),
          e && ot(e, 'markerCleared', e, this, r, i),
          t && Fr(e),
          this.parent && this.parent.clear();
      }
    }),
      (mr.prototype.find = function (e, t) {
        e == null && this.type == 'bookmark' && (e = 1);
        for (var n, r, i = 0; i < this.lines.length; ++i) {
          var o = this.lines[i],
            l = cn(o.markedSpans, this);
          if (l.from != null && ((n = L(t ? o : f(o), l.from)), e == -1))
            return n;
          if (l.to != null && ((r = L(t ? o : f(o), l.to)), e == 1)) return r;
        }
        return n && { from: n, to: r };
      }),
      (mr.prototype.changed = function () {
        var e = this,
          t = this.find(-1, !0),
          n = this,
          r = this.doc.cm;
        !t ||
          !r ||
          Dt(r, function () {
            var i = t.line,
              o = f(t.line),
              l = Fi(r, o);
            if (
              (l &&
                (Ko(l), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
              (r.curOp.updateMaxLine = !0),
              !cr(n.doc, i) && n.height != null)
            ) {
              var a = n.height;
              n.height = null;
              var s = pn(n) - a;
              s && Ft(i, i.height + s);
            }
            ot(r, 'markerChanged', r, e);
          });
      }),
      (mr.prototype.attachLine = function (e) {
        if (!this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (!t.maybeHiddenMarkers || te(t.maybeHiddenMarkers, this) == -1) &&
            (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
              this
            );
        }
        this.lines.push(e);
      }),
      (mr.prototype.detachLine = function (e) {
        if (
          (this.lines.splice(te(this.lines, e), 1),
          !this.lines.length && this.doc.cm)
        ) {
          var t = this.doc.cm.curOp;
          (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
        }
      }),
      Pt(mr);
    function Vr(e, t, n, r, i) {
      if (r && r.shared) return _s(e, t, n, r, i);
      if (e.cm && !e.cm.curOp) return lt(e.cm, Vr)(e, t, n, r, i);
      var o = new mr(e, i),
        l = X(t, n);
      if ((r && Se(r, o, !1), l > 0 || (l == 0 && o.clearWhenEmpty !== !1)))
        return o;
      if (
        (o.replacedWith &&
          ((o.collapsed = !0),
          (o.widgetNode = S('span', [o.replacedWith], 'CodeMirror-widget')),
          r.handleMouseEvents ||
            o.widgetNode.setAttribute('cm-ignore-events', 'true'),
          r.insertLeft && (o.widgetNode.insertLeft = !0)),
        o.collapsed)
      ) {
        if (
          Mo(e, t.line, t, n, o) ||
          (t.line != n.line && Mo(e, n.line, t, n, o))
        )
          throw new Error(
            'Inserting collapsed marker partially overlapping an existing one'
          );
        Ma();
      }
      o.addToHistory &&
        bl(e, { from: t, to: n, origin: 'markText' }, e.sel, NaN);
      var a = t.line,
        s = e.cm,
        u;
      if (
        (e.iter(a, n.line + 1, function (v) {
          s &&
            o.collapsed &&
            !s.options.lineWrapping &&
            _t(v) == s.display.maxLine &&
            (u = !0),
            o.collapsed && a != t.line && Ft(v, 0),
            Aa(
              v,
              new Rn(o, a == t.line ? t.ch : null, a == n.line ? n.ch : null),
              e.cm && e.cm.curOp
            ),
            ++a;
        }),
        o.collapsed &&
          e.iter(t.line, n.line + 1, function (v) {
            cr(e, v) && Ft(v, 0);
          }),
        o.clearOnEnter &&
          pe(o, 'beforeCursorEnter', function () {
            return o.clear();
          }),
        o.readOnly &&
          (Da(),
          (e.history.done.length || e.history.undone.length) &&
            e.clearHistory()),
        o.collapsed && ((o.id = ++Wl), (o.atomic = !0)),
        s)
      ) {
        if ((u && (s.curOp.updateMaxLine = !0), o.collapsed))
          bt(s, t.line, n.line + 1);
        else if (
          o.className ||
          o.startStyle ||
          o.endStyle ||
          o.css ||
          o.attributes ||
          o.title
        )
          for (var h = t.line; h <= n.line; h++) dr(s, h, 'text');
        o.atomic && Dl(s.doc), ot(s, 'markerAdded', s, o);
      }
      return o;
    }
    var Fn = function (e, t) {
      (this.markers = e), (this.primary = t);
      for (var n = 0; n < e.length; ++n) e[n].parent = this;
    };
    (Fn.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;
        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
        ot(this, 'clear');
      }
    }),
      (Fn.prototype.find = function (e, t) {
        return this.primary.find(e, t);
      }),
      Pt(Fn);
    function _s(e, t, n, r, i) {
      (r = Se(r)), (r.shared = !1);
      var o = [Vr(e, t, n, r, i)],
        l = o[0],
        a = r.widgetNode;
      return (
        vr(e, function (s) {
          a && (r.widgetNode = a.cloneNode(!0)),
            o.push(Vr(s, Le(s, t), Le(s, n), r, i));
          for (var u = 0; u < s.linked.length; ++u)
            if (s.linked[u].isParent) return;
          l = he(o);
        }),
        new Fn(o, l)
      );
    }
    function _l(e) {
      return e.findMarks(
        L(e.first, 0),
        e.clipPos(L(e.lastLine())),
        function (t) {
          return t.parent;
        }
      );
    }
    function Hs(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          i = r.find(),
          o = e.clipPos(i.from),
          l = e.clipPos(i.to);
        if (X(o, l)) {
          var a = Vr(e, o, l, r.primary, r.primary.type);
          r.markers.push(a), (a.parent = r);
        }
      }
    }
    function Rs(e) {
      for (
        var t = function (r) {
            var i = e[r],
              o = [i.primary.doc];
            vr(i.primary.doc, function (s) {
              return o.push(s);
            });
            for (var l = 0; l < i.markers.length; l++) {
              var a = i.markers[l];
              te(o, a.doc) == -1 &&
                ((a.parent = null), i.markers.splice(l--, 1));
            }
          },
          n = 0;
        n < e.length;
        n++
      )
        t(n);
    }
    var qs = 0,
      kt = function (e, t, n, r, i) {
        if (!(this instanceof kt)) return new kt(e, t, n, r, i);
        n == null && (n = 0),
          Dn.call(this, [new Cn([new Hr('', null)])]),
          (this.first = n),
          (this.scrollTop = this.scrollLeft = 0),
          (this.cantEdit = !1),
          (this.cleanGeneration = 1),
          (this.modeFrontier = this.highlightFrontier = n);
        var o = L(n, 0);
        (this.sel = pr(o)),
          (this.history = new ni(null)),
          (this.id = ++qs),
          (this.modeOption = t),
          (this.lineSep = r),
          (this.direction = i == 'rtl' ? 'rtl' : 'ltr'),
          (this.extend = !1),
          typeof e == 'string' && (e = this.splitLines(e)),
          Ji(this, { from: o, to: o, text: e }),
          pt(this, pr(o), Ve);
      };
    (kt.prototype = M(Dn.prototype, {
      constructor: kt,
      iter: function (e, t, n) {
        n
          ? this.iterN(e - this.first, t - e, n)
          : this.iterN(this.first, this.first + this.size, e);
      },
      insert: function (e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
        this.insertInner(e - this.first, t, n);
      },
      remove: function (e, t) {
        this.removeInner(e - this.first, t);
      },
      getValue: function (e) {
        var t = un(this, this.first, this.first + this.size);
        return e === !1 ? t : t.join(e || this.lineSeparator());
      },
      setValue: at(function (e) {
        var t = L(this.first, 0),
          n = this.first + this.size - 1;
        Jr(
          this,
          {
            from: t,
            to: L(n, ae(this, n).text.length),
            text: this.splitLines(e),
            origin: 'setValue',
            full: !0,
          },
          !0
        ),
          this.cm && mn(this.cm, 0, 0),
          pt(this, pr(t), Ve);
      }),
      replaceRange: function (e, t, n, r) {
        (t = Le(this, t)), (n = n ? Le(this, n) : t), Qr(this, e, t, n, r);
      },
      getRange: function (e, t, n) {
        var r = Vt(this, Le(this, e), Le(this, t));
        return n === !1
          ? r
          : n === ''
            ? r.join('')
            : r.join(n || this.lineSeparator());
      },
      getLine: function (e) {
        var t = this.getLineHandle(e);
        return t && t.text;
      },
      getLineHandle: function (e) {
        if (A(this, e)) return ae(this, e);
      },
      getLineNumber: function (e) {
        return f(e);
      },
      getLineHandleVisualStart: function (e) {
        return typeof e == 'number' && (e = ae(this, e)), _t(e);
      },
      lineCount: function () {
        return this.size;
      },
      firstLine: function () {
        return this.first;
      },
      lastLine: function () {
        return this.first + this.size - 1;
      },
      clipPos: function (e) {
        return Le(this, e);
      },
      getCursor: function (e) {
        var t = this.sel.primary(),
          n;
        return (
          e == null || e == 'head'
            ? (n = t.head)
            : e == 'anchor'
              ? (n = t.anchor)
              : e == 'end' || e == 'to' || e === !1
                ? (n = t.to())
                : (n = t.from()),
          n
        );
      },
      listSelections: function () {
        return this.sel.ranges;
      },
      somethingSelected: function () {
        return this.sel.somethingSelected();
      },
      setCursor: at(function (e, t, n) {
        Tl(this, Le(this, typeof e == 'number' ? L(e, t || 0) : e), null, n);
      }),
      setSelection: at(function (e, t, n) {
        Tl(this, Le(this, e), Le(this, t || e), n);
      }),
      extendSelection: at(function (e, t, n) {
        oi(this, Le(this, e), t && Le(this, t), n);
      }),
      extendSelections: at(function (e, t) {
        Sl(this, po(this, e), t);
      }),
      extendSelectionsBy: at(function (e, t) {
        var n = Oe(this.sel.ranges, e);
        Sl(this, po(this, n), t);
      }),
      setSelections: at(function (e, t, n) {
        if (e.length) {
          for (var r = [], i = 0; i < e.length; i++)
            r[i] = new He(
              Le(this, e[i].anchor),
              Le(this, e[i].head || e[i].anchor)
            );
          t == null && (t = Math.min(e.length - 1, this.sel.primIndex)),
            pt(this, Rt(this.cm, r, t), n);
        }
      }),
      addSelection: at(function (e, t, n) {
        var r = this.sel.ranges.slice(0);
        r.push(new He(Le(this, e), Le(this, t || e))),
          pt(this, Rt(this.cm, r, r.length - 1), n);
      }),
      getSelection: function (e) {
        for (var t = this.sel.ranges, n, r = 0; r < t.length; r++) {
          var i = Vt(this, t[r].from(), t[r].to());
          n = n ? n.concat(i) : i;
        }
        return e === !1 ? n : n.join(e || this.lineSeparator());
      },
      getSelections: function (e) {
        for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
          var i = Vt(this, n[r].from(), n[r].to());
          e !== !1 && (i = i.join(e || this.lineSeparator())), (t[r] = i);
        }
        return t;
      },
      replaceSelection: function (e, t, n) {
        for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
        this.replaceSelections(r, t, n || '+input');
      },
      replaceSelections: at(function (e, t, n) {
        for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
          var l = i.ranges[o];
          r[o] = {
            from: l.from(),
            to: l.to(),
            text: this.splitLines(e[o]),
            origin: n,
          };
        }
        for (
          var a = t && t != 'end' && Fs(this, r, t), s = r.length - 1;
          s >= 0;
          s--
        )
          Jr(this, r[s]);
        a ? Ll(this, a) : this.cm && Gr(this.cm);
      }),
      undo: at(function () {
        si(this, 'undo');
      }),
      redo: at(function () {
        si(this, 'redo');
      }),
      undoSelection: at(function () {
        si(this, 'undo', !0);
      }),
      redoSelection: at(function () {
        si(this, 'redo', !0);
      }),
      setExtending: function (e) {
        this.extend = e;
      },
      getExtending: function () {
        return this.extend;
      },
      historySize: function () {
        for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)
          e.done[r].ranges || ++t;
        for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
        return { undo: t, redo: n };
      },
      clearHistory: function () {
        var e = this;
        (this.history = new ni(this.history)),
          vr(
            this,
            function (t) {
              return (t.history = e.history);
            },
            !0
          );
      },
      markClean: function () {
        this.cleanGeneration = this.changeGeneration(!0);
      },
      changeGeneration: function (e) {
        return (
          e &&
            (this.history.lastOp =
              this.history.lastSelOp =
              this.history.lastOrigin =
                null),
          this.history.generation
        );
      },
      isClean: function (e) {
        return this.history.generation == (e || this.cleanGeneration);
      },
      getHistory: function () {
        return { done: Yr(this.history.done), undone: Yr(this.history.undone) };
      },
      setHistory: function (e) {
        var t = (this.history = new ni(this.history));
        (t.done = Yr(e.done.slice(0), null, !0)),
          (t.undone = Yr(e.undone.slice(0), null, !0));
      },
      setGutterMarker: at(function (e, t, n) {
        return Ln(this, e, 'gutter', function (r) {
          var i = r.gutterMarkers || (r.gutterMarkers = {});
          return (i[t] = n), !n && fe(i) && (r.gutterMarkers = null), !0;
        });
      }),
      clearGutter: at(function (e) {
        var t = this;
        this.iter(function (n) {
          n.gutterMarkers &&
            n.gutterMarkers[e] &&
            Ln(t, n, 'gutter', function () {
              return (
                (n.gutterMarkers[e] = null),
                fe(n.gutterMarkers) && (n.gutterMarkers = null),
                !0
              );
            });
        });
      }),
      lineInfo: function (e) {
        var t;
        if (typeof e == 'number') {
          if (!A(this, e) || ((t = e), (e = ae(this, e)), !e)) return null;
        } else if (((t = f(e)), t == null)) return null;
        return {
          line: t,
          handle: e,
          text: e.text,
          gutterMarkers: e.gutterMarkers,
          textClass: e.textClass,
          bgClass: e.bgClass,
          wrapClass: e.wrapClass,
          widgets: e.widgets,
        };
      },
      addLineClass: at(function (e, t, n) {
        return Ln(this, e, t == 'gutter' ? 'gutter' : 'class', function (r) {
          var i =
            t == 'text'
              ? 'textClass'
              : t == 'background'
                ? 'bgClass'
                : t == 'gutter'
                  ? 'gutterClass'
                  : 'wrapClass';
          if (!r[i]) r[i] = n;
          else {
            if (W(n).test(r[i])) return !1;
            r[i] += ' ' + n;
          }
          return !0;
        });
      }),
      removeLineClass: at(function (e, t, n) {
        return Ln(this, e, t == 'gutter' ? 'gutter' : 'class', function (r) {
          var i =
              t == 'text'
                ? 'textClass'
                : t == 'background'
                  ? 'bgClass'
                  : t == 'gutter'
                    ? 'gutterClass'
                    : 'wrapClass',
            o = r[i];
          if (o)
            if (n == null) r[i] = null;
            else {
              var l = o.match(W(n));
              if (!l) return !1;
              var a = l.index + l[0].length;
              r[i] =
                o.slice(0, l.index) +
                  (!l.index || a == o.length ? '' : ' ') +
                  o.slice(a) || null;
            }
          else return !1;
          return !0;
        });
      }),
      addLineWidget: at(function (e, t, n) {
        return Ws(this, e, t, n);
      }),
      removeLineWidget: function (e) {
        e.clear();
      },
      markText: function (e, t, n) {
        return Vr(this, Le(this, e), Le(this, t), n, (n && n.type) || 'range');
      },
      setBookmark: function (e, t) {
        var n = {
          replacedWith: t && (t.nodeType == null ? t.widget : t),
          insertLeft: t && t.insertLeft,
          clearWhenEmpty: !1,
          shared: t && t.shared,
          handleMouseEvents: t && t.handleMouseEvents,
        };
        return (e = Le(this, e)), Vr(this, e, e, n, 'bookmark');
      },
      findMarksAt: function (e) {
        e = Le(this, e);
        var t = [],
          n = ae(this, e.line).markedSpans;
        if (n)
          for (var r = 0; r < n.length; ++r) {
            var i = n[r];
            (i.from == null || i.from <= e.ch) &&
              (i.to == null || i.to >= e.ch) &&
              t.push(i.marker.parent || i.marker);
          }
        return t;
      },
      findMarks: function (e, t, n) {
        (e = Le(this, e)), (t = Le(this, t));
        var r = [],
          i = e.line;
        return (
          this.iter(e.line, t.line + 1, function (o) {
            var l = o.markedSpans;
            if (l)
              for (var a = 0; a < l.length; a++) {
                var s = l[a];
                !(
                  (s.to != null && i == e.line && e.ch >= s.to) ||
                  (s.from == null && i != e.line) ||
                  (s.from != null && i == t.line && s.from >= t.ch)
                ) &&
                  (!n || n(s.marker)) &&
                  r.push(s.marker.parent || s.marker);
              }
            ++i;
          }),
          r
        );
      },
      getAllMarks: function () {
        var e = [];
        return (
          this.iter(function (t) {
            var n = t.markedSpans;
            if (n)
              for (var r = 0; r < n.length; ++r)
                n[r].from != null && e.push(n[r].marker);
          }),
          e
        );
      },
      posFromIndex: function (e) {
        var t,
          n = this.first,
          r = this.lineSeparator().length;
        return (
          this.iter(function (i) {
            var o = i.text.length + r;
            if (o > e) return (t = e), !0;
            (e -= o), ++n;
          }),
          Le(this, L(n, t))
        );
      },
      indexFromPos: function (e) {
        e = Le(this, e);
        var t = e.ch;
        if (e.line < this.first || e.ch < 0) return 0;
        var n = this.lineSeparator().length;
        return (
          this.iter(this.first, e.line, function (r) {
            t += r.text.length + n;
          }),
          t
        );
      },
      copy: function (e) {
        var t = new kt(
          un(this, this.first, this.first + this.size),
          this.modeOption,
          this.first,
          this.lineSep,
          this.direction
        );
        return (
          (t.scrollTop = this.scrollTop),
          (t.scrollLeft = this.scrollLeft),
          (t.sel = this.sel),
          (t.extend = !1),
          e &&
            ((t.history.undoDepth = this.history.undoDepth),
            t.setHistory(this.getHistory())),
          t
        );
      },
      linkedDoc: function (e) {
        e || (e = {});
        var t = this.first,
          n = this.first + this.size;
        e.from != null && e.from > t && (t = e.from),
          e.to != null && e.to < n && (n = e.to);
        var r = new kt(
          un(this, t, n),
          e.mode || this.modeOption,
          t,
          this.lineSep,
          this.direction
        );
        return (
          e.sharedHist && (r.history = this.history),
          (this.linked || (this.linked = [])).push({
            doc: r,
            sharedHist: e.sharedHist,
          }),
          (r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
          Hs(r, _l(this)),
          r
        );
      },
      unlinkDoc: function (e) {
        if ((e instanceof Ge && (e = e.doc), this.linked))
          for (var t = 0; t < this.linked.length; ++t) {
            var n = this.linked[t];
            if (n.doc == e) {
              this.linked.splice(t, 1), e.unlinkDoc(this), Rs(_l(this));
              break;
            }
          }
        if (e.history == this.history) {
          var r = [e.id];
          vr(
            e,
            function (i) {
              return r.push(i.id);
            },
            !0
          ),
            (e.history = new ni(null)),
            (e.history.done = Yr(this.history.done, r)),
            (e.history.undone = Yr(this.history.undone, r));
        }
      },
      iterLinkedDocs: function (e) {
        vr(this, e);
      },
      getMode: function () {
        return this.mode;
      },
      getEditor: function () {
        return this.cm;
      },
      splitLines: function (e) {
        return this.lineSep ? e.split(this.lineSep) : Ot(e);
      },
      lineSeparator: function () {
        return (
          this.lineSep ||
          `
`
        );
      },
      setDirection: at(function (e) {
        e != 'rtl' && (e = 'ltr'),
          e != this.direction &&
            ((this.direction = e),
            this.iter(function (t) {
              return (t.order = null);
            }),
            this.cm && As(this.cm));
      }),
    })),
      (kt.prototype.eachLine = kt.prototype.iter);
    var Hl = 0;
    function js(e) {
      var t = this;
      if ((Rl(t), !(Ze(t, e) || tr(t.display, e)))) {
        ht(e), k && (Hl = +new Date());
        var n = Tr(t, e, !0),
          r = e.dataTransfer.files;
        if (!(!n || t.isReadOnly()))
          if (r && r.length && window.FileReader && window.File)
            for (
              var i = r.length,
                o = Array(i),
                l = 0,
                a = function () {
                  ++l == i &&
                    lt(t, function () {
                      n = Le(t.doc, n);
                      var x = {
                        from: n,
                        to: n,
                        text: t.doc.splitLines(
                          o
                            .filter(function (D) {
                              return D != null;
                            })
                            .join(t.doc.lineSeparator())
                        ),
                        origin: 'paste',
                      };
                      Jr(t.doc, x),
                        Ll(t.doc, pr(Le(t.doc, n), Le(t.doc, gr(x))));
                    })();
                },
                s = function (x, D) {
                  if (
                    t.options.allowDropFileTypes &&
                    te(t.options.allowDropFileTypes, x.type) == -1
                  ) {
                    a();
                    return;
                  }
                  var E = new FileReader();
                  (E.onerror = function () {
                    return a();
                  }),
                    (E.onload = function () {
                      var _ = E.result;
                      if (/[\x00-\x08\x0e-\x1f]{2}/.test(_)) {
                        a();
                        return;
                      }
                      (o[D] = _), a();
                    }),
                    E.readAsText(x);
                },
                u = 0;
              u < r.length;
              u++
            )
              s(r[u], u);
          else {
            if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
              t.state.draggingText(e),
                setTimeout(function () {
                  return t.display.input.focus();
                }, 20);
              return;
            }
            try {
              var h = e.dataTransfer.getData('Text');
              if (h) {
                var v;
                if (
                  (t.state.draggingText &&
                    !t.state.draggingText.copy &&
                    (v = t.listSelections()),
                  li(t.doc, pr(n, n)),
                  v)
                )
                  for (var b = 0; b < v.length; ++b)
                    Qr(t.doc, '', v[b].anchor, v[b].head, 'drag');
                t.replaceSelection(h, 'around', 'paste'),
                  t.display.input.focus();
              }
            } catch {}
          }
      }
    }
    function Ks(e, t) {
      if (k && (!e.state.draggingText || +new Date() - Hl < 100)) {
        ar(t);
        return;
      }
      if (
        !(Ze(e, t) || tr(e.display, t)) &&
        (t.dataTransfer.setData('Text', e.getSelection()),
        (t.dataTransfer.effectAllowed = 'copyMove'),
        t.dataTransfer.setDragImage && !K)
      ) {
        var n = d('img', null, null, 'position: fixed; left: 0; top: 0;');
        (n.src =
          'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
          P &&
            ((n.width = n.height = 1),
            e.display.wrapper.appendChild(n),
            (n._top = n.offsetTop)),
          t.dataTransfer.setDragImage(n, 0, 0),
          P && n.parentNode.removeChild(n);
      }
    }
    function Us(e, t) {
      var n = Tr(e, t);
      if (n) {
        var r = document.createDocumentFragment();
        Bi(e, n, r),
          e.display.dragCursor ||
            ((e.display.dragCursor = d(
              'div',
              null,
              'CodeMirror-cursors CodeMirror-dragcursors'
            )),
            e.display.lineSpace.insertBefore(
              e.display.dragCursor,
              e.display.cursorDiv
            )),
          Y(e.display.dragCursor, r);
      }
    }
    function Rl(e) {
      e.display.dragCursor &&
        (e.display.lineSpace.removeChild(e.display.dragCursor),
        (e.display.dragCursor = null));
    }
    function ql(e) {
      if (document.getElementsByClassName) {
        for (
          var t = document.getElementsByClassName('CodeMirror'), n = [], r = 0;
          r < t.length;
          r++
        ) {
          var i = t[r].CodeMirror;
          i && n.push(i);
        }
        n.length &&
          n[0].operation(function () {
            for (var o = 0; o < n.length; o++) e(n[o]);
          });
      }
    }
    var jl = !1;
    function Gs() {
      jl || (Xs(), (jl = !0));
    }
    function Xs() {
      var e;
      pe(window, 'resize', function () {
        e == null &&
          (e = setTimeout(function () {
            (e = null), ql(Ys);
          }, 100));
      }),
        pe(window, 'blur', function () {
          return ql(Ur);
        });
    }
    function Ys(e) {
      var t = e.display;
      (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
        (t.scrollbarsClipped = !1),
        e.setSize();
    }
    for (
      var yr = {
          3: 'Pause',
          8: 'Backspace',
          9: 'Tab',
          13: 'Enter',
          16: 'Shift',
          17: 'Ctrl',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Esc',
          32: 'Space',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'Left',
          38: 'Up',
          39: 'Right',
          40: 'Down',
          44: 'PrintScrn',
          45: 'Insert',
          46: 'Delete',
          59: ';',
          61: '=',
          91: 'Mod',
          92: 'Mod',
          93: 'Mod',
          106: '*',
          107: '=',
          109: '-',
          110: '.',
          111: '/',
          145: 'ScrollLock',
          173: '-',
          186: ';',
          187: '=',
          188: ',',
          189: '-',
          190: '.',
          191: '/',
          192: '`',
          219: '[',
          220: '\\',
          221: ']',
          222: "'",
          224: 'Mod',
          63232: 'Up',
          63233: 'Down',
          63234: 'Left',
          63235: 'Right',
          63272: 'Delete',
          63273: 'Home',
          63275: 'End',
          63276: 'PageUp',
          63277: 'PageDown',
          63302: 'Insert',
        },
        An = 0;
      An < 10;
      An++
    )
      yr[An + 48] = yr[An + 96] = String(An);
    for (var ui = 65; ui <= 90; ui++) yr[ui] = String.fromCharCode(ui);
    for (var En = 1; En <= 12; En++) yr[En + 111] = yr[En + 63235] = 'F' + En;
    var nr = {};
    (nr.basic = {
      Left: 'goCharLeft',
      Right: 'goCharRight',
      Up: 'goLineUp',
      Down: 'goLineDown',
      End: 'goLineEnd',
      Home: 'goLineStartSmart',
      PageUp: 'goPageUp',
      PageDown: 'goPageDown',
      Delete: 'delCharAfter',
      Backspace: 'delCharBefore',
      'Shift-Backspace': 'delCharBefore',
      Tab: 'defaultTab',
      'Shift-Tab': 'indentAuto',
      Enter: 'newlineAndIndent',
      Insert: 'toggleOverwrite',
      Esc: 'singleSelection',
    }),
      (nr.pcDefault = {
        'Ctrl-A': 'selectAll',
        'Ctrl-D': 'deleteLine',
        'Ctrl-Z': 'undo',
        'Shift-Ctrl-Z': 'redo',
        'Ctrl-Y': 'redo',
        'Ctrl-Home': 'goDocStart',
        'Ctrl-End': 'goDocEnd',
        'Ctrl-Up': 'goLineUp',
        'Ctrl-Down': 'goLineDown',
        'Ctrl-Left': 'goGroupLeft',
        'Ctrl-Right': 'goGroupRight',
        'Alt-Left': 'goLineStart',
        'Alt-Right': 'goLineEnd',
        'Ctrl-Backspace': 'delGroupBefore',
        'Ctrl-Delete': 'delGroupAfter',
        'Ctrl-S': 'save',
        'Ctrl-F': 'find',
        'Ctrl-G': 'findNext',
        'Shift-Ctrl-G': 'findPrev',
        'Shift-Ctrl-F': 'replace',
        'Shift-Ctrl-R': 'replaceAll',
        'Ctrl-[': 'indentLess',
        'Ctrl-]': 'indentMore',
        'Ctrl-U': 'undoSelection',
        'Shift-Ctrl-U': 'redoSelection',
        'Alt-U': 'redoSelection',
        fallthrough: 'basic',
      }),
      (nr.emacsy = {
        'Ctrl-F': 'goCharRight',
        'Ctrl-B': 'goCharLeft',
        'Ctrl-P': 'goLineUp',
        'Ctrl-N': 'goLineDown',
        'Ctrl-A': 'goLineStart',
        'Ctrl-E': 'goLineEnd',
        'Ctrl-V': 'goPageDown',
        'Shift-Ctrl-V': 'goPageUp',
        'Ctrl-D': 'delCharAfter',
        'Ctrl-H': 'delCharBefore',
        'Alt-Backspace': 'delWordBefore',
        'Ctrl-K': 'killLine',
        'Ctrl-T': 'transposeChars',
        'Ctrl-O': 'openLine',
      }),
      (nr.macDefault = {
        'Cmd-A': 'selectAll',
        'Cmd-D': 'deleteLine',
        'Cmd-Z': 'undo',
        'Shift-Cmd-Z': 'redo',
        'Cmd-Y': 'redo',
        'Cmd-Home': 'goDocStart',
        'Cmd-Up': 'goDocStart',
        'Cmd-End': 'goDocEnd',
        'Cmd-Down': 'goDocEnd',
        'Alt-Left': 'goGroupLeft',
        'Alt-Right': 'goGroupRight',
        'Cmd-Left': 'goLineLeft',
        'Cmd-Right': 'goLineRight',
        'Alt-Backspace': 'delGroupBefore',
        'Ctrl-Alt-Backspace': 'delGroupAfter',
        'Alt-Delete': 'delGroupAfter',
        'Cmd-S': 'save',
        'Cmd-F': 'find',
        'Cmd-G': 'findNext',
        'Shift-Cmd-G': 'findPrev',
        'Cmd-Alt-F': 'replace',
        'Shift-Cmd-Alt-F': 'replaceAll',
        'Cmd-[': 'indentLess',
        'Cmd-]': 'indentMore',
        'Cmd-Backspace': 'delWrappedLineLeft',
        'Cmd-Delete': 'delWrappedLineRight',
        'Cmd-U': 'undoSelection',
        'Shift-Cmd-U': 'redoSelection',
        'Ctrl-Up': 'goDocStart',
        'Ctrl-Down': 'goDocEnd',
        fallthrough: ['basic', 'emacsy'],
      }),
      (nr.default = ie ? nr.macDefault : nr.pcDefault);
    function Zs(e) {
      var t = e.split(/-(?!$)/);
      e = t[t.length - 1];
      for (var n, r, i, o, l = 0; l < t.length - 1; l++) {
        var a = t[l];
        if (/^(cmd|meta|m)$/i.test(a)) o = !0;
        else if (/^a(lt)?$/i.test(a)) n = !0;
        else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
        else if (/^s(hift)?$/i.test(a)) i = !0;
        else throw new Error('Unrecognized modifier name: ' + a);
      }
      return (
        n && (e = 'Alt-' + e),
        r && (e = 'Ctrl-' + e),
        o && (e = 'Cmd-' + e),
        i && (e = 'Shift-' + e),
        e
      );
    }
    function Js(e) {
      var t = {};
      for (var n in e)
        if (e.hasOwnProperty(n)) {
          var r = e[n];
          if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
          if (r == '...') {
            delete e[n];
            continue;
          }
          for (var i = Oe(n.split(' '), Zs), o = 0; o < i.length; o++) {
            var l = void 0,
              a = void 0;
            o == i.length - 1
              ? ((a = i.join(' ')), (l = r))
              : ((a = i.slice(0, o + 1).join(' ')), (l = '...'));
            var s = t[a];
            if (!s) t[a] = l;
            else if (s != l) throw new Error('Inconsistent bindings for ' + a);
          }
          delete e[n];
        }
      for (var u in t) e[u] = t[u];
      return e;
    }
    function $r(e, t, n, r) {
      t = fi(t);
      var i = t.call ? t.call(e, r) : t[e];
      if (i === !1) return 'nothing';
      if (i === '...') return 'multi';
      if (i != null && n(i)) return 'handled';
      if (t.fallthrough) {
        if (Object.prototype.toString.call(t.fallthrough) != '[object Array]')
          return $r(e, t.fallthrough, n, r);
        for (var o = 0; o < t.fallthrough.length; o++) {
          var l = $r(e, t.fallthrough[o], n, r);
          if (l) return l;
        }
      }
    }
    function Kl(e) {
      var t = typeof e == 'string' ? e : yr[e.keyCode];
      return t == 'Ctrl' || t == 'Alt' || t == 'Shift' || t == 'Mod';
    }
    function Ul(e, t, n) {
      var r = e;
      return (
        t.altKey && r != 'Alt' && (e = 'Alt-' + e),
        (ze ? t.metaKey : t.ctrlKey) && r != 'Ctrl' && (e = 'Ctrl-' + e),
        (ze ? t.ctrlKey : t.metaKey) && r != 'Mod' && (e = 'Cmd-' + e),
        !n && t.shiftKey && r != 'Shift' && (e = 'Shift-' + e),
        e
      );
    }
    function Gl(e, t) {
      if (P && e.keyCode == 34 && e.char) return !1;
      var n = yr[e.keyCode];
      return n == null || e.altGraphKey
        ? !1
        : (e.keyCode == 3 && e.code && (n = e.code), Ul(n, e, t));
    }
    function fi(e) {
      return typeof e == 'string' ? nr[e] : e;
    }
    function en(e, t) {
      for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
        for (var o = t(n[i]); r.length && X(o.from, he(r).to) <= 0; ) {
          var l = r.pop();
          if (X(l.from, o.from) < 0) {
            o.from = l.from;
            break;
          }
        }
        r.push(o);
      }
      Dt(e, function () {
        for (var a = r.length - 1; a >= 0; a--)
          Qr(e.doc, '', r[a].from, r[a].to, '+delete');
        Gr(e);
      });
    }
    function eo(e, t, n) {
      var r = Lt(e.text, t + n, n);
      return r < 0 || r > e.text.length ? null : r;
    }
    function to(e, t, n) {
      var r = eo(e, t.ch, n);
      return r == null ? null : new L(t.line, r, n < 0 ? 'after' : 'before');
    }
    function ro(e, t, n, r, i) {
      if (e) {
        t.doc.direction == 'rtl' && (i = -i);
        var o = We(n, t.doc.direction);
        if (o) {
          var l = i < 0 ? he(o) : o[0],
            a = i < 0 == (l.level == 1),
            s = a ? 'after' : 'before',
            u;
          if (l.level > 0 || t.doc.direction == 'rtl') {
            var h = qr(t, n);
            u = i < 0 ? n.text.length - 1 : 0;
            var v = Xt(t, h, u).top;
            (u = Et(
              function (b) {
                return Xt(t, h, b).top == v;
              },
              i < 0 == (l.level == 1) ? l.from : l.to - 1,
              u
            )),
              s == 'before' && (u = eo(n, u, 1));
          } else u = i < 0 ? l.to : l.from;
          return new L(r, u, s);
        }
      }
      return new L(r, i < 0 ? n.text.length : 0, i < 0 ? 'before' : 'after');
    }
    function Qs(e, t, n, r) {
      var i = We(t, e.doc.direction);
      if (!i) return to(t, n, r);
      n.ch >= t.text.length
        ? ((n.ch = t.text.length), (n.sticky = 'before'))
        : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'));
      var o = lr(i, n.ch, n.sticky),
        l = i[o];
      if (
        e.doc.direction == 'ltr' &&
        l.level % 2 == 0 &&
        (r > 0 ? l.to > n.ch : l.from < n.ch)
      )
        return to(t, n, r);
      var a = function (q, Z) {
          return eo(t, q instanceof L ? q.ch : q, Z);
        },
        s,
        u = function (q) {
          return e.options.lineWrapping
            ? ((s = s || qr(e, t)), Qo(e, t, s, q))
            : { begin: 0, end: t.text.length };
        },
        h = u(n.sticky == 'before' ? a(n, -1) : n.ch);
      if (e.doc.direction == 'rtl' || l.level == 1) {
        var v = (l.level == 1) == r < 0,
          b = a(n, v ? 1 : -1);
        if (
          b != null &&
          (v ? b <= l.to && b <= h.end : b >= l.from && b >= h.begin)
        ) {
          var x = v ? 'before' : 'after';
          return new L(n.line, b, x);
        }
      }
      var D = function (q, Z, j) {
          for (
            var J = function (Ke, st) {
              return st
                ? new L(n.line, a(Ke, 1), 'before')
                : new L(n.line, Ke, 'after');
            };
            q >= 0 && q < i.length;
            q += Z
          ) {
            var ge = i[q],
              ce = Z > 0 == (ge.level != 1),
              De = ce ? j.begin : a(j.end, -1);
            if (
              (ge.from <= De && De < ge.to) ||
              ((De = ce ? ge.from : a(ge.to, -1)), j.begin <= De && De < j.end)
            )
              return J(De, ce);
          }
        },
        E = D(o + r, r, h);
      if (E) return E;
      var _ = r > 0 ? h.end : a(h.begin, -1);
      return _ != null &&
        !(r > 0 && _ == t.text.length) &&
        ((E = D(r > 0 ? 0 : i.length - 1, r, u(_))), E)
        ? E
        : null;
    }
    var Nn = {
      selectAll: Al,
      singleSelection: function (e) {
        return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), Ve);
      },
      killLine: function (e) {
        return en(e, function (t) {
          if (t.empty()) {
            var n = ae(e.doc, t.head.line).text.length;
            return t.head.ch == n && t.head.line < e.lastLine()
              ? { from: t.head, to: L(t.head.line + 1, 0) }
              : { from: t.head, to: L(t.head.line, n) };
          } else return { from: t.from(), to: t.to() };
        });
      },
      deleteLine: function (e) {
        return en(e, function (t) {
          return {
            from: L(t.from().line, 0),
            to: Le(e.doc, L(t.to().line + 1, 0)),
          };
        });
      },
      delLineLeft: function (e) {
        return en(e, function (t) {
          return { from: L(t.from().line, 0), to: t.from() };
        });
      },
      delWrappedLineLeft: function (e) {
        return en(e, function (t) {
          var n = e.charCoords(t.head, 'div').top + 5,
            r = e.coordsChar({ left: 0, top: n }, 'div');
          return { from: r, to: t.from() };
        });
      },
      delWrappedLineRight: function (e) {
        return en(e, function (t) {
          var n = e.charCoords(t.head, 'div').top + 5,
            r = e.coordsChar(
              { left: e.display.lineDiv.offsetWidth + 100, top: n },
              'div'
            );
          return { from: t.from(), to: r };
        });
      },
      undo: function (e) {
        return e.undo();
      },
      redo: function (e) {
        return e.redo();
      },
      undoSelection: function (e) {
        return e.undoSelection();
      },
      redoSelection: function (e) {
        return e.redoSelection();
      },
      goDocStart: function (e) {
        return e.extendSelection(L(e.firstLine(), 0));
      },
      goDocEnd: function (e) {
        return e.extendSelection(L(e.lastLine()));
      },
      goLineStart: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return Xl(e, t.head.line);
          },
          { origin: '+move', bias: 1 }
        );
      },
      goLineStartSmart: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return Yl(e, t.head);
          },
          { origin: '+move', bias: 1 }
        );
      },
      goLineEnd: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return Vs(e, t.head.line);
          },
          { origin: '+move', bias: -1 }
        );
      },
      goLineRight: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, 'div').top + 5;
          return e.coordsChar(
            { left: e.display.lineDiv.offsetWidth + 100, top: n },
            'div'
          );
        }, Ne);
      },
      goLineLeft: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, 'div').top + 5;
          return e.coordsChar({ left: 0, top: n }, 'div');
        }, Ne);
      },
      goLineLeftSmart: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, 'div').top + 5,
            r = e.coordsChar({ left: 0, top: n }, 'div');
          return r.ch < e.getLine(r.line).search(/\S/) ? Yl(e, t.head) : r;
        }, Ne);
      },
      goLineUp: function (e) {
        return e.moveV(-1, 'line');
      },
      goLineDown: function (e) {
        return e.moveV(1, 'line');
      },
      goPageUp: function (e) {
        return e.moveV(-1, 'page');
      },
      goPageDown: function (e) {
        return e.moveV(1, 'page');
      },
      goCharLeft: function (e) {
        return e.moveH(-1, 'char');
      },
      goCharRight: function (e) {
        return e.moveH(1, 'char');
      },
      goColumnLeft: function (e) {
        return e.moveH(-1, 'column');
      },
      goColumnRight: function (e) {
        return e.moveH(1, 'column');
      },
      goWordLeft: function (e) {
        return e.moveH(-1, 'word');
      },
      goGroupRight: function (e) {
        return e.moveH(1, 'group');
      },
      goGroupLeft: function (e) {
        return e.moveH(-1, 'group');
      },
      goWordRight: function (e) {
        return e.moveH(1, 'word');
      },
      delCharBefore: function (e) {
        return e.deleteH(-1, 'codepoint');
      },
      delCharAfter: function (e) {
        return e.deleteH(1, 'char');
      },
      delWordBefore: function (e) {
        return e.deleteH(-1, 'word');
      },
      delWordAfter: function (e) {
        return e.deleteH(1, 'word');
      },
      delGroupBefore: function (e) {
        return e.deleteH(-1, 'group');
      },
      delGroupAfter: function (e) {
        return e.deleteH(1, 'group');
      },
      indentAuto: function (e) {
        return e.indentSelection('smart');
      },
      indentMore: function (e) {
        return e.indentSelection('add');
      },
      indentLess: function (e) {
        return e.indentSelection('subtract');
      },
      insertTab: function (e) {
        return e.replaceSelection('	');
      },
      insertSoftTab: function (e) {
        for (
          var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0;
          i < n.length;
          i++
        ) {
          var o = n[i].from(),
            l = Te(e.getLine(o.line), o.ch, r);
          t.push(et(r - (l % r)));
        }
        e.replaceSelections(t);
      },
      defaultTab: function (e) {
        e.somethingSelected()
          ? e.indentSelection('add')
          : e.execCommand('insertTab');
      },
      transposeChars: function (e) {
        return Dt(e, function () {
          for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
            if (t[r].empty()) {
              var i = t[r].head,
                o = ae(e.doc, i.line).text;
              if (o) {
                if (
                  (i.ch == o.length && (i = new L(i.line, i.ch - 1)), i.ch > 0)
                )
                  (i = new L(i.line, i.ch + 1)),
                    e.replaceRange(
                      o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                      L(i.line, i.ch - 2),
                      i,
                      '+transpose'
                    );
                else if (i.line > e.doc.first) {
                  var l = ae(e.doc, i.line - 1).text;
                  l &&
                    ((i = new L(i.line, 1)),
                    e.replaceRange(
                      o.charAt(0) +
                        e.doc.lineSeparator() +
                        l.charAt(l.length - 1),
                      L(i.line - 1, l.length - 1),
                      i,
                      '+transpose'
                    ));
                }
              }
              n.push(new He(i, i));
            }
          e.setSelections(n);
        });
      },
      newlineAndIndent: function (e) {
        return Dt(e, function () {
          for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
            e.replaceRange(
              e.doc.lineSeparator(),
              t[n].anchor,
              t[n].head,
              '+input'
            );
          t = e.listSelections();
          for (var r = 0; r < t.length; r++)
            e.indentLine(t[r].from().line, null, !0);
          Gr(e);
        });
      },
      openLine: function (e) {
        return e.replaceSelection(
          `
`,
          'start'
        );
      },
      toggleOverwrite: function (e) {
        return e.toggleOverwrite();
      },
    };
    function Xl(e, t) {
      var n = ae(e.doc, t),
        r = _t(n);
      return r != n && (t = f(r)), ro(!0, e, r, t, 1);
    }
    function Vs(e, t) {
      var n = ae(e.doc, t),
        r = Ia(n);
      return r != n && (t = f(r)), ro(!0, e, n, t, -1);
    }
    function Yl(e, t) {
      var n = Xl(e, t.line),
        r = ae(e.doc, n.line),
        i = We(r, e.doc.direction);
      if (!i || i[0].level == 0) {
        var o = Math.max(n.ch, r.text.search(/\S/)),
          l = t.line == n.line && t.ch <= o && t.ch;
        return L(n.line, l ? 0 : o, n.sticky);
      }
      return n;
    }
    function ci(e, t, n) {
      if (typeof t == 'string' && ((t = Nn[t]), !t)) return !1;
      e.display.input.ensurePolled();
      var r = e.display.shift,
        i = !1;
      try {
        e.isReadOnly() && (e.state.suppressEdits = !0),
          n && (e.display.shift = !1),
          (i = t(e) != qe);
      } finally {
        (e.display.shift = r), (e.state.suppressEdits = !1);
      }
      return i;
    }
    function $s(e, t, n) {
      for (var r = 0; r < e.state.keyMaps.length; r++) {
        var i = $r(t, e.state.keyMaps[r], n, e);
        if (i) return i;
      }
      return (
        (e.options.extraKeys && $r(t, e.options.extraKeys, n, e)) ||
        $r(t, e.options.keyMap, n, e)
      );
    }
    var eu = new xe();
    function On(e, t, n, r) {
      var i = e.state.keySeq;
      if (i) {
        if (Kl(t)) return 'handled';
        if (
          (/\'$/.test(t)
            ? (e.state.keySeq = null)
            : eu.set(50, function () {
                e.state.keySeq == i &&
                  ((e.state.keySeq = null), e.display.input.reset());
              }),
          Zl(e, i + ' ' + t, n, r))
        )
          return !0;
      }
      return Zl(e, t, n, r);
    }
    function Zl(e, t, n, r) {
      var i = $s(e, t, r);
      return (
        i == 'multi' && (e.state.keySeq = t),
        i == 'handled' && ot(e, 'keyHandled', e, t, n),
        (i == 'handled' || i == 'multi') && (ht(n), Wi(e)),
        !!i
      );
    }
    function Jl(e, t) {
      var n = Gl(t, !0);
      return n
        ? t.shiftKey && !e.state.keySeq
          ? On(e, 'Shift-' + n, t, function (r) {
              return ci(e, r, !0);
            }) ||
            On(e, n, t, function (r) {
              if (typeof r == 'string' ? /^go[A-Z]/.test(r) : r.motion)
                return ci(e, r);
            })
          : On(e, n, t, function (r) {
              return ci(e, r);
            })
        : !1;
    }
    function tu(e, t, n) {
      return On(e, "'" + n + "'", t, function (r) {
        return ci(e, r, !0);
      });
    }
    var no = null;
    function Ql(e) {
      var t = this;
      if (
        !(e.target && e.target != t.display.input.getField()) &&
        ((t.curOp.focus = y(G(t))), !Ze(t, e))
      ) {
        k && ee < 11 && e.keyCode == 27 && (e.returnValue = !1);
        var n = e.keyCode;
        t.display.shift = n == 16 || e.shiftKey;
        var r = Jl(t, e);
        P &&
          ((no = r ? n : null),
          !r &&
            n == 88 &&
            !_n &&
            (ie ? e.metaKey : e.ctrlKey) &&
            t.replaceSelection('', null, 'cut')),
          I &&
            !ie &&
            !r &&
            n == 46 &&
            e.shiftKey &&
            !e.ctrlKey &&
            document.execCommand &&
            document.execCommand('cut'),
          n == 18 &&
            !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) &&
            ru(t);
      }
    }
    function ru(e) {
      var t = e.display.lineDiv;
      N(t, 'CodeMirror-crosshair');
      function n(r) {
        (r.keyCode == 18 || !r.altKey) &&
          (Ae(t, 'CodeMirror-crosshair'),
          dt(document, 'keyup', n),
          dt(document, 'mouseover', n));
      }
      pe(document, 'keyup', n), pe(document, 'mouseover', n);
    }
    function Vl(e) {
      e.keyCode == 16 && (this.doc.sel.shift = !1), Ze(this, e);
    }
    function $l(e) {
      var t = this;
      if (
        !(e.target && e.target != t.display.input.getField()) &&
        !(
          tr(t.display, e) ||
          Ze(t, e) ||
          (e.ctrlKey && !e.altKey) ||
          (ie && e.metaKey)
        )
      ) {
        var n = e.keyCode,
          r = e.charCode;
        if (P && n == no) {
          (no = null), ht(e);
          return;
        }
        if (!(P && (!e.which || e.which < 10) && Jl(t, e))) {
          var i = String.fromCharCode(r ?? n);
          i != '\b' && (tu(t, e, i) || t.display.input.onKeyPress(e));
        }
      }
    }
    var nu = 400,
      io = function (e, t, n) {
        (this.time = e), (this.pos = t), (this.button = n);
      };
    io.prototype.compare = function (e, t, n) {
      return this.time + nu > e && X(t, this.pos) == 0 && n == this.button;
    };
    var Pn, In;
    function iu(e, t) {
      var n = +new Date();
      return In && In.compare(n, e, t)
        ? ((Pn = In = null), 'triple')
        : Pn && Pn.compare(n, e, t)
          ? ((In = new io(n, e, t)), (Pn = null), 'double')
          : ((Pn = new io(n, e, t)), (In = null), 'single');
    }
    function ea(e) {
      var t = this,
        n = t.display;
      if (!(Ze(t, e) || (n.activeTouch && n.input.supportsTouch()))) {
        if ((n.input.ensurePolled(), (n.shift = e.shiftKey), tr(n, e))) {
          U ||
            ((n.scroller.draggable = !1),
            setTimeout(function () {
              return (n.scroller.draggable = !0);
            }, 100));
          return;
        }
        if (!oo(t, e)) {
          var r = Tr(t, e),
            i = It(e),
            o = r ? iu(r, i) : 'single';
          R(t).focus(),
            i == 1 && t.state.selectingText && t.state.selectingText(e),
            !(r && ou(t, i, r, o, e)) &&
              (i == 1
                ? r
                  ? au(t, r, o, e)
                  : ln(e) == n.scroller && ht(e)
                : i == 2
                  ? (r && oi(t.doc, r),
                    setTimeout(function () {
                      return n.input.focus();
                    }, 20))
                  : i == 3 && (le ? t.display.input.onContextMenu(e) : _i(t)));
        }
      }
    }
    function ou(e, t, n, r, i) {
      var o = 'Click';
      return (
        r == 'double'
          ? (o = 'Double' + o)
          : r == 'triple' && (o = 'Triple' + o),
        (o = (t == 1 ? 'Left' : t == 2 ? 'Middle' : 'Right') + o),
        On(e, Ul(o, i), i, function (l) {
          if ((typeof l == 'string' && (l = Nn[l]), !l)) return !1;
          var a = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), (a = l(e, n) != qe);
          } finally {
            e.state.suppressEdits = !1;
          }
          return a;
        })
      );
    }
    function lu(e, t, n) {
      var r = e.getOption('configureMouse'),
        i = r ? r(e, t, n) : {};
      if (i.unit == null) {
        var o = Fe ? n.shiftKey && n.metaKey : n.altKey;
        i.unit = o
          ? 'rectangle'
          : t == 'single'
            ? 'char'
            : t == 'double'
              ? 'word'
              : 'line';
      }
      return (
        (i.extend == null || e.doc.extend) &&
          (i.extend = e.doc.extend || n.shiftKey),
        i.addNew == null && (i.addNew = ie ? n.metaKey : n.ctrlKey),
        i.moveOnDrag == null && (i.moveOnDrag = !(ie ? n.altKey : n.ctrlKey)),
        i
      );
    }
    function au(e, t, n, r) {
      k ? setTimeout(oe(tl, e), 0) : (e.curOp.focus = y(G(e)));
      var i = lu(e, n, r),
        o = e.doc.sel,
        l;
      e.options.dragDrop &&
      mi &&
      !e.isReadOnly() &&
      n == 'single' &&
      (l = o.contains(t)) > -1 &&
      (X((l = o.ranges[l]).from(), t) < 0 || t.xRel > 0) &&
      (X(l.to(), t) > 0 || t.xRel < 0)
        ? su(e, r, t, i)
        : uu(e, r, t, i);
    }
    function su(e, t, n, r) {
      var i = e.display,
        o = !1,
        l = lt(e, function (u) {
          U && (i.scroller.draggable = !1),
            (e.state.draggingText = !1),
            e.state.delayingBlurEvent &&
              (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : _i(e)),
            dt(i.wrapper.ownerDocument, 'mouseup', l),
            dt(i.wrapper.ownerDocument, 'mousemove', a),
            dt(i.scroller, 'dragstart', s),
            dt(i.scroller, 'drop', l),
            o ||
              (ht(u),
              r.addNew || oi(e.doc, n, null, null, r.extend),
              (U && !K) || (k && ee == 9)
                ? setTimeout(function () {
                    i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }),
                      i.input.focus();
                  }, 20)
                : i.input.focus());
        }),
        a = function (u) {
          o =
            o ||
            Math.abs(t.clientX - u.clientX) + Math.abs(t.clientY - u.clientY) >=
              10;
        },
        s = function () {
          return (o = !0);
        };
      U && (i.scroller.draggable = !0),
        (e.state.draggingText = l),
        (l.copy = !r.moveOnDrag),
        pe(i.wrapper.ownerDocument, 'mouseup', l),
        pe(i.wrapper.ownerDocument, 'mousemove', a),
        pe(i.scroller, 'dragstart', s),
        pe(i.scroller, 'drop', l),
        (e.state.delayingBlurEvent = !0),
        setTimeout(function () {
          return i.input.focus();
        }, 20),
        i.scroller.dragDrop && i.scroller.dragDrop();
    }
    function ta(e, t, n) {
      if (n == 'char') return new He(t, t);
      if (n == 'word') return e.findWordAt(t);
      if (n == 'line') return new He(L(t.line, 0), Le(e.doc, L(t.line + 1, 0)));
      var r = n(e, t);
      return new He(r.from, r.to);
    }
    function uu(e, t, n, r) {
      k && _i(e);
      var i = e.display,
        o = e.doc;
      ht(t);
      var l,
        a,
        s = o.sel,
        u = s.ranges;
      if (
        (r.addNew && !r.extend
          ? ((a = o.sel.contains(n)), a > -1 ? (l = u[a]) : (l = new He(n, n)))
          : ((l = o.sel.primary()), (a = o.sel.primIndex)),
        r.unit == 'rectangle')
      )
        r.addNew || (l = new He(n, n)), (n = Tr(e, t, !0, !0)), (a = -1);
      else {
        var h = ta(e, n, r.unit);
        r.extend ? (l = Vi(l, h.anchor, h.head, r.extend)) : (l = h);
      }
      r.addNew
        ? a == -1
          ? ((a = u.length),
            pt(o, Rt(e, u.concat([l]), a), { scroll: !1, origin: '*mouse' }))
          : u.length > 1 && u[a].empty() && r.unit == 'char' && !r.extend
            ? (pt(o, Rt(e, u.slice(0, a).concat(u.slice(a + 1)), 0), {
                scroll: !1,
                origin: '*mouse',
              }),
              (s = o.sel))
            : $i(o, a, l, ct)
        : ((a = 0), pt(o, new At([l], 0), ct), (s = o.sel));
      var v = n;
      function b(j) {
        if (X(v, j) != 0)
          if (((v = j), r.unit == 'rectangle')) {
            for (
              var J = [],
                ge = e.options.tabSize,
                ce = Te(ae(o, n.line).text, n.ch, ge),
                De = Te(ae(o, j.line).text, j.ch, ge),
                Ke = Math.min(ce, De),
                st = Math.max(ce, De),
                Xe = Math.min(n.line, j.line),
                Mt = Math.min(e.lastLine(), Math.max(n.line, j.line));
              Xe <= Mt;
              Xe++
            ) {
              var wt = ae(o, Xe).text,
                tt = Re(wt, Ke, ge);
              Ke == st
                ? J.push(new He(L(Xe, tt), L(Xe, tt)))
                : wt.length > tt &&
                  J.push(new He(L(Xe, tt), L(Xe, Re(wt, st, ge))));
            }
            J.length || J.push(new He(n, n)),
              pt(o, Rt(e, s.ranges.slice(0, a).concat(J), a), {
                origin: '*mouse',
                scroll: !1,
              }),
              e.scrollIntoView(j);
          } else {
            var St = l,
              ft = ta(e, j, r.unit),
              nt = St.anchor,
              rt;
            X(ft.anchor, nt) > 0
              ? ((rt = ft.head), (nt = _r(St.from(), ft.anchor)))
              : ((rt = ft.anchor), (nt = xt(St.to(), ft.head)));
            var Qe = s.ranges.slice(0);
            (Qe[a] = fu(e, new He(Le(o, nt), rt))), pt(o, Rt(e, Qe, a), ct);
          }
      }
      var x = i.wrapper.getBoundingClientRect(),
        D = 0;
      function E(j) {
        var J = ++D,
          ge = Tr(e, j, !0, r.unit == 'rectangle');
        if (ge)
          if (X(ge, v) != 0) {
            (e.curOp.focus = y(G(e))), b(ge);
            var ce = $n(i, o);
            (ge.line >= ce.to || ge.line < ce.from) &&
              setTimeout(
                lt(e, function () {
                  D == J && E(j);
                }),
                150
              );
          } else {
            var De = j.clientY < x.top ? -20 : j.clientY > x.bottom ? 20 : 0;
            De &&
              setTimeout(
                lt(e, function () {
                  D == J && ((i.scroller.scrollTop += De), E(j));
                }),
                50
              );
          }
      }
      function _(j) {
        (e.state.selectingText = !1),
          (D = 1 / 0),
          j && (ht(j), i.input.focus()),
          dt(i.wrapper.ownerDocument, 'mousemove', q),
          dt(i.wrapper.ownerDocument, 'mouseup', Z),
          (o.history.lastSelOrigin = null);
      }
      var q = lt(e, function (j) {
          j.buttons === 0 || !It(j) ? _(j) : E(j);
        }),
        Z = lt(e, _);
      (e.state.selectingText = Z),
        pe(i.wrapper.ownerDocument, 'mousemove', q),
        pe(i.wrapper.ownerDocument, 'mouseup', Z);
    }
    function fu(e, t) {
      var n = t.anchor,
        r = t.head,
        i = ae(e.doc, n.line);
      if (X(n, r) == 0 && n.sticky == r.sticky) return t;
      var o = We(i);
      if (!o) return t;
      var l = lr(o, n.ch, n.sticky),
        a = o[l];
      if (a.from != n.ch && a.to != n.ch) return t;
      var s = l + ((a.from == n.ch) == (a.level != 1) ? 0 : 1);
      if (s == 0 || s == o.length) return t;
      var u;
      if (r.line != n.line)
        u = (r.line - n.line) * (e.doc.direction == 'ltr' ? 1 : -1) > 0;
      else {
        var h = lr(o, r.ch, r.sticky),
          v = h - l || (r.ch - n.ch) * (a.level == 1 ? -1 : 1);
        h == s - 1 || h == s ? (u = v < 0) : (u = v > 0);
      }
      var b = o[s + (u ? -1 : 0)],
        x = u == (b.level == 1),
        D = x ? b.from : b.to,
        E = x ? 'after' : 'before';
      return n.ch == D && n.sticky == E ? t : new He(new L(n.line, D, E), r);
    }
    function ra(e, t, n, r) {
      var i, o;
      if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
      else
        try {
          (i = t.clientX), (o = t.clientY);
        } catch {
          return !1;
        }
      if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
        return !1;
      r && ht(t);
      var l = e.display,
        a = l.lineDiv.getBoundingClientRect();
      if (o > a.bottom || !Ct(e, n)) return yt(t);
      o -= a.top - l.viewOffset;
      for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
        var u = l.gutters.childNodes[s];
        if (u && u.getBoundingClientRect().right >= i) {
          var h = g(e.doc, o),
            v = e.display.gutterSpecs[s];
          return Ye(e, n, e, h, v.className, t), yt(t);
        }
      }
    }
    function oo(e, t) {
      return ra(e, t, 'gutterClick', !0);
    }
    function na(e, t) {
      tr(e.display, t) ||
        cu(e, t) ||
        Ze(e, t, 'contextmenu') ||
        le ||
        e.display.input.onContextMenu(t);
    }
    function cu(e, t) {
      return Ct(e, 'gutterContextMenu')
        ? ra(e, t, 'gutterContextMenu', !1)
        : !1;
    }
    function ia(e) {
      (e.display.wrapper.className =
        e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
        e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
        gn(e);
    }
    var tn = {
        toString: function () {
          return 'CodeMirror.Init';
        },
      },
      oa = {},
      di = {};
    function du(e) {
      var t = e.optionHandlers;
      function n(r, i, o, l) {
        (e.defaults[r] = i),
          o &&
            (t[r] = l
              ? function (a, s, u) {
                  u != tn && o(a, s, u);
                }
              : o);
      }
      (e.defineOption = n),
        (e.Init = tn),
        n(
          'value',
          '',
          function (r, i) {
            return r.setValue(i);
          },
          !0
        ),
        n(
          'mode',
          null,
          function (r, i) {
            (r.doc.modeOption = i), Zi(r);
          },
          !0
        ),
        n('indentUnit', 2, Zi, !0),
        n('indentWithTabs', !1),
        n('smartIndent', !0),
        n(
          'tabSize',
          4,
          function (r) {
            Sn(r), gn(r), bt(r);
          },
          !0
        ),
        n('lineSeparator', null, function (r, i) {
          if (((r.doc.lineSep = i), !!i)) {
            var o = [],
              l = r.doc.first;
            r.doc.iter(function (s) {
              for (var u = 0; ; ) {
                var h = s.text.indexOf(i, u);
                if (h == -1) break;
                (u = h + i.length), o.push(L(l, h));
              }
              l++;
            });
            for (var a = o.length - 1; a >= 0; a--)
              Qr(r.doc, i, o[a], L(o[a].line, o[a].ch + i.length));
          }
        }),
        n(
          'specialChars',
          /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
          function (r, i, o) {
            (r.state.specialChars = new RegExp(
              i.source + (i.test('	') ? '' : '|	'),
              'g'
            )),
              o != tn && r.refresh();
          }
        ),
        n(
          'specialCharPlaceholder',
          Ra,
          function (r) {
            return r.refresh();
          },
          !0
        ),
        n('electricChars', !0),
        n(
          'inputStyle',
          $ ? 'contenteditable' : 'textarea',
          function () {
            throw new Error(
              'inputStyle can not (yet) be changed in a running editor'
            );
          },
          !0
        ),
        n(
          'spellcheck',
          !1,
          function (r, i) {
            return (r.getInputField().spellcheck = i);
          },
          !0
        ),
        n(
          'autocorrect',
          !1,
          function (r, i) {
            return (r.getInputField().autocorrect = i);
          },
          !0
        ),
        n(
          'autocapitalize',
          !1,
          function (r, i) {
            return (r.getInputField().autocapitalize = i);
          },
          !0
        ),
        n('rtlMoveVisually', !me),
        n('wholeLineUpdateBefore', !0),
        n(
          'theme',
          'default',
          function (r) {
            ia(r), wn(r);
          },
          !0
        ),
        n('keyMap', 'default', function (r, i, o) {
          var l = fi(i),
            a = o != tn && fi(o);
          a && a.detach && a.detach(r, l), l.attach && l.attach(r, a || null);
        }),
        n('extraKeys', null),
        n('configureMouse', null),
        n('lineWrapping', !1, pu, !0),
        n(
          'gutters',
          [],
          function (r, i) {
            (r.display.gutterSpecs = Xi(i, r.options.lineNumbers)), wn(r);
          },
          !0
        ),
        n(
          'fixedGutter',
          !0,
          function (r, i) {
            (r.display.gutters.style.left = i ? Ii(r.display) + 'px' : '0'),
              r.refresh();
          },
          !0
        ),
        n(
          'coverGutterNextToScrollbar',
          !1,
          function (r) {
            return Xr(r);
          },
          !0
        ),
        n(
          'scrollbarStyle',
          'native',
          function (r) {
            al(r),
              Xr(r),
              r.display.scrollbars.setScrollTop(r.doc.scrollTop),
              r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
          },
          !0
        ),
        n(
          'lineNumbers',
          !1,
          function (r, i) {
            (r.display.gutterSpecs = Xi(r.options.gutters, i)), wn(r);
          },
          !0
        ),
        n('firstLineNumber', 1, wn, !0),
        n(
          'lineNumberFormatter',
          function (r) {
            return r;
          },
          wn,
          !0
        ),
        n('showCursorWhenSelecting', !1, vn, !0),
        n('resetSelectionOnContextMenu', !0),
        n('lineWiseCopyCut', !0),
        n('pasteLinesPerSelection', !0),
        n('selectionsMayTouch', !1),
        n('readOnly', !1, function (r, i) {
          i == 'nocursor' && (Ur(r), r.display.input.blur()),
            r.display.input.readOnlyChanged(i);
        }),
        n('screenReaderLabel', null, function (r, i) {
          (i = i === '' ? null : i),
            r.display.input.screenReaderLabelChanged(i);
        }),
        n(
          'disableInput',
          !1,
          function (r, i) {
            i || r.display.input.reset();
          },
          !0
        ),
        n('dragDrop', !0, hu),
        n('allowDropFileTypes', null),
        n('cursorBlinkRate', 530),
        n('cursorScrollMargin', 0),
        n('cursorHeight', 1, vn, !0),
        n('singleCursorHeightPerLine', !0, vn, !0),
        n('workTime', 100),
        n('workDelay', 100),
        n('flattenSpans', !0, Sn, !0),
        n('addModeClass', !1, Sn, !0),
        n('pollInterval', 100),
        n('undoDepth', 200, function (r, i) {
          return (r.doc.history.undoDepth = i);
        }),
        n('historyEventDelay', 1250),
        n(
          'viewportMargin',
          10,
          function (r) {
            return r.refresh();
          },
          !0
        ),
        n('maxHighlightLength', 1e4, Sn, !0),
        n('moveInputWithCursor', !0, function (r, i) {
          i || r.display.input.resetPosition();
        }),
        n('tabindex', null, function (r, i) {
          return (r.display.input.getField().tabIndex = i || '');
        }),
        n('autofocus', null),
        n(
          'direction',
          'ltr',
          function (r, i) {
            return r.doc.setDirection(i);
          },
          !0
        ),
        n('phrases', null);
    }
    function hu(e, t, n) {
      var r = n && n != tn;
      if (!t != !r) {
        var i = e.display.dragFunctions,
          o = t ? pe : dt;
        o(e.display.scroller, 'dragstart', i.start),
          o(e.display.scroller, 'dragenter', i.enter),
          o(e.display.scroller, 'dragover', i.over),
          o(e.display.scroller, 'dragleave', i.leave),
          o(e.display.scroller, 'drop', i.drop);
      }
    }
    function pu(e) {
      e.options.lineWrapping
        ? (N(e.display.wrapper, 'CodeMirror-wrap'),
          (e.display.sizer.style.minWidth = ''),
          (e.display.sizerWidth = null))
        : (Ae(e.display.wrapper, 'CodeMirror-wrap'), Li(e)),
        zi(e),
        bt(e),
        gn(e),
        setTimeout(function () {
          return Xr(e);
        }, 100);
    }
    function Ge(e, t) {
      var n = this;
      if (!(this instanceof Ge)) return new Ge(e, t);
      (this.options = t = t ? Se(t) : {}), Se(oa, t, !1);
      var r = t.value;
      typeof r == 'string'
        ? (r = new kt(r, t.mode, null, t.lineSeparator, t.direction))
        : t.mode && (r.modeOption = t.mode),
        (this.doc = r);
      var i = new Ge.inputStyles[t.inputStyle](this),
        o = (this.display = new Ds(e, r, i, t));
      (o.wrapper.CodeMirror = this),
        ia(this),
        t.lineWrapping &&
          (this.display.wrapper.className += ' CodeMirror-wrap'),
        al(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new xe(),
          keySeq: null,
          specialChars: null,
        }),
        t.autofocus && !$ && o.input.focus(),
        k &&
          ee < 11 &&
          setTimeout(function () {
            return n.display.input.reset(!0);
          }, 20),
        gu(this),
        Gs(),
        Mr(this),
        (this.curOp.forceUpdate = !0),
        ml(this, r),
        (t.autofocus && !$) || this.hasFocus()
          ? setTimeout(function () {
              n.hasFocus() && !n.state.focused && Hi(n);
            }, 20)
          : Ur(this);
      for (var l in di) di.hasOwnProperty(l) && di[l](this, t[l], tn);
      fl(this), t.finishInit && t.finishInit(this);
      for (var a = 0; a < lo.length; ++a) lo[a](this);
      Fr(this),
        U &&
          t.lineWrapping &&
          getComputedStyle(o.lineDiv).textRendering == 'optimizelegibility' &&
          (o.lineDiv.style.textRendering = 'auto');
    }
    (Ge.defaults = oa), (Ge.optionHandlers = di);
    function gu(e) {
      var t = e.display;
      pe(t.scroller, 'mousedown', lt(e, ea)),
        k && ee < 11
          ? pe(
              t.scroller,
              'dblclick',
              lt(e, function (s) {
                if (!Ze(e, s)) {
                  var u = Tr(e, s);
                  if (!(!u || oo(e, s) || tr(e.display, s))) {
                    ht(s);
                    var h = e.findWordAt(u);
                    oi(e.doc, h.anchor, h.head);
                  }
                }
              })
            )
          : pe(t.scroller, 'dblclick', function (s) {
              return Ze(e, s) || ht(s);
            }),
        pe(t.scroller, 'contextmenu', function (s) {
          return na(e, s);
        }),
        pe(t.input.getField(), 'contextmenu', function (s) {
          t.scroller.contains(s.target) || na(e, s);
        });
      var n,
        r = { end: 0 };
      function i() {
        t.activeTouch &&
          ((n = setTimeout(function () {
            return (t.activeTouch = null);
          }, 1e3)),
          (r = t.activeTouch),
          (r.end = +new Date()));
      }
      function o(s) {
        if (s.touches.length != 1) return !1;
        var u = s.touches[0];
        return u.radiusX <= 1 && u.radiusY <= 1;
      }
      function l(s, u) {
        if (u.left == null) return !0;
        var h = u.left - s.left,
          v = u.top - s.top;
        return h * h + v * v > 20 * 20;
      }
      pe(t.scroller, 'touchstart', function (s) {
        if (!Ze(e, s) && !o(s) && !oo(e, s)) {
          t.input.ensurePolled(), clearTimeout(n);
          var u = +new Date();
          (t.activeTouch = {
            start: u,
            moved: !1,
            prev: u - r.end <= 300 ? r : null,
          }),
            s.touches.length == 1 &&
              ((t.activeTouch.left = s.touches[0].pageX),
              (t.activeTouch.top = s.touches[0].pageY));
        }
      }),
        pe(t.scroller, 'touchmove', function () {
          t.activeTouch && (t.activeTouch.moved = !0);
        }),
        pe(t.scroller, 'touchend', function (s) {
          var u = t.activeTouch;
          if (
            u &&
            !tr(t, s) &&
            u.left != null &&
            !u.moved &&
            new Date() - u.start < 300
          ) {
            var h = e.coordsChar(t.activeTouch, 'page'),
              v;
            !u.prev || l(u, u.prev)
              ? (v = new He(h, h))
              : !u.prev.prev || l(u, u.prev.prev)
                ? (v = e.findWordAt(h))
                : (v = new He(L(h.line, 0), Le(e.doc, L(h.line + 1, 0)))),
              e.setSelection(v.anchor, v.head),
              e.focus(),
              ht(s);
          }
          i();
        }),
        pe(t.scroller, 'touchcancel', i),
        pe(t.scroller, 'scroll', function () {
          t.scroller.clientHeight &&
            (yn(e, t.scroller.scrollTop),
            Cr(e, t.scroller.scrollLeft, !0),
            Ye(e, 'scroll', e));
        }),
        pe(t.scroller, 'mousewheel', function (s) {
          return hl(e, s);
        }),
        pe(t.scroller, 'DOMMouseScroll', function (s) {
          return hl(e, s);
        }),
        pe(t.wrapper, 'scroll', function () {
          return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
        }),
        (t.dragFunctions = {
          enter: function (s) {
            Ze(e, s) || ar(s);
          },
          over: function (s) {
            Ze(e, s) || (Us(e, s), ar(s));
          },
          start: function (s) {
            return Ks(e, s);
          },
          drop: lt(e, js),
          leave: function (s) {
            Ze(e, s) || Rl(e);
          },
        });
      var a = t.input.getField();
      pe(a, 'keyup', function (s) {
        return Vl.call(e, s);
      }),
        pe(a, 'keydown', lt(e, Ql)),
        pe(a, 'keypress', lt(e, $l)),
        pe(a, 'focus', function (s) {
          return Hi(e, s);
        }),
        pe(a, 'blur', function (s) {
          return Ur(e, s);
        });
    }
    var lo = [];
    Ge.defineInitHook = function (e) {
      return lo.push(e);
    };
    function zn(e, t, n, r) {
      var i = e.doc,
        o;
      n == null && (n = 'add'),
        n == 'smart' && (i.mode.indent ? (o = fn(e, t).state) : (n = 'prev'));
      var l = e.options.tabSize,
        a = ae(i, t),
        s = Te(a.text, null, l);
      a.stateAfter && (a.stateAfter = null);
      var u = a.text.match(/^\s*/)[0],
        h;
      if (!r && !/\S/.test(a.text)) (h = 0), (n = 'not');
      else if (
        n == 'smart' &&
        ((h = i.mode.indent(o, a.text.slice(u.length), a.text)),
        h == qe || h > 150)
      ) {
        if (!r) return;
        n = 'prev';
      }
      n == 'prev'
        ? t > i.first
          ? (h = Te(ae(i, t - 1).text, null, l))
          : (h = 0)
        : n == 'add'
          ? (h = s + e.options.indentUnit)
          : n == 'subtract'
            ? (h = s - e.options.indentUnit)
            : typeof n == 'number' && (h = s + n),
        (h = Math.max(0, h));
      var v = '',
        b = 0;
      if (e.options.indentWithTabs)
        for (var x = Math.floor(h / l); x; --x) (b += l), (v += '	');
      if ((b < h && (v += et(h - b)), v != u))
        return (
          Qr(i, v, L(t, 0), L(t, u.length), '+input'), (a.stateAfter = null), !0
        );
      for (var D = 0; D < i.sel.ranges.length; D++) {
        var E = i.sel.ranges[D];
        if (E.head.line == t && E.head.ch < u.length) {
          var _ = L(t, u.length);
          $i(i, D, new He(_, _));
          break;
        }
      }
    }
    var qt = null;
    function hi(e) {
      qt = e;
    }
    function ao(e, t, n, r, i) {
      var o = e.doc;
      (e.display.shift = !1), r || (r = o.sel);
      var l = +new Date() - 200,
        a = i == 'paste' || e.state.pasteIncoming > l,
        s = Ot(t),
        u = null;
      if (a && r.ranges.length > 1)
        if (
          qt &&
          qt.text.join(`
`) == t
        ) {
          if (r.ranges.length % qt.text.length == 0) {
            u = [];
            for (var h = 0; h < qt.text.length; h++)
              u.push(o.splitLines(qt.text[h]));
          }
        } else
          s.length == r.ranges.length &&
            e.options.pasteLinesPerSelection &&
            (u = Oe(s, function (q) {
              return [q];
            }));
      for (var v = e.curOp.updateInput, b = r.ranges.length - 1; b >= 0; b--) {
        var x = r.ranges[b],
          D = x.from(),
          E = x.to();
        x.empty() &&
          (n && n > 0
            ? (D = L(D.line, D.ch - n))
            : e.state.overwrite && !a
              ? (E = L(
                  E.line,
                  Math.min(ae(o, E.line).text.length, E.ch + he(s).length)
                ))
              : a &&
                qt &&
                qt.lineWise &&
                qt.text.join(`
`) ==
                  s.join(`
`) &&
                (D = E = L(D.line, 0)));
        var _ = {
          from: D,
          to: E,
          text: u ? u[b % u.length] : s,
          origin:
            i || (a ? 'paste' : e.state.cutIncoming > l ? 'cut' : '+input'),
        };
        Jr(e.doc, _), ot(e, 'inputRead', e, _);
      }
      t && !a && aa(e, t),
        Gr(e),
        e.curOp.updateInput < 2 && (e.curOp.updateInput = v),
        (e.curOp.typing = !0),
        (e.state.pasteIncoming = e.state.cutIncoming = -1);
    }
    function la(e, t) {
      var n = e.clipboardData && e.clipboardData.getData('Text');
      if (n)
        return (
          e.preventDefault(),
          !t.isReadOnly() &&
            !t.options.disableInput &&
            t.hasFocus() &&
            Dt(t, function () {
              return ao(t, n, 0, null, 'paste');
            }),
          !0
        );
    }
    function aa(e, t) {
      if (!(!e.options.electricChars || !e.options.smartIndent))
        for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
          var i = n.ranges[r];
          if (
            !(
              i.head.ch > 100 ||
              (r && n.ranges[r - 1].head.line == i.head.line)
            )
          ) {
            var o = e.getModeAt(i.head),
              l = !1;
            if (o.electricChars) {
              for (var a = 0; a < o.electricChars.length; a++)
                if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                  l = zn(e, i.head.line, 'smart');
                  break;
                }
            } else
              o.electricInput &&
                o.electricInput.test(
                  ae(e.doc, i.head.line).text.slice(0, i.head.ch)
                ) &&
                (l = zn(e, i.head.line, 'smart'));
            l && ot(e, 'electricInput', e, i.head.line);
          }
        }
    }
    function sa(e) {
      for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
        var i = e.doc.sel.ranges[r].head.line,
          o = { anchor: L(i, 0), head: L(i + 1, 0) };
        n.push(o), t.push(e.getRange(o.anchor, o.head));
      }
      return { text: t, ranges: n };
    }
    function so(e, t, n, r) {
      e.setAttribute('autocorrect', n ? 'on' : 'off'),
        e.setAttribute('autocapitalize', r ? 'on' : 'off'),
        e.setAttribute('spellcheck', !!t);
    }
    function ua() {
      var e = d(
          'textarea',
          null,
          null,
          'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none'
        ),
        t = d(
          'div',
          [e],
          null,
          'overflow: hidden; position: relative; width: 3px; height: 0px;'
        );
      return (
        U ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
        Q && (e.style.border = '1px solid black'),
        t
      );
    }
    function vu(e) {
      var t = e.optionHandlers,
        n = (e.helpers = {});
      (e.prototype = {
        constructor: e,
        focus: function () {
          R(this).focus(), this.display.input.focus();
        },
        setOption: function (r, i) {
          var o = this.options,
            l = o[r];
          (o[r] == i && r != 'mode') ||
            ((o[r] = i),
            t.hasOwnProperty(r) && lt(this, t[r])(this, i, l),
            Ye(this, 'optionChange', this, r));
        },
        getOption: function (r) {
          return this.options[r];
        },
        getDoc: function () {
          return this.doc;
        },
        addKeyMap: function (r, i) {
          this.state.keyMaps[i ? 'push' : 'unshift'](fi(r));
        },
        removeKeyMap: function (r) {
          for (var i = this.state.keyMaps, o = 0; o < i.length; ++o)
            if (i[o] == r || i[o].name == r) return i.splice(o, 1), !0;
        },
        addOverlay: vt(function (r, i) {
          var o = r.token ? r : e.getMode(this.options, r);
          if (o.startState) throw new Error('Overlays may not be stateful.');
          T(
            this.state.overlays,
            {
              mode: o,
              modeSpec: r,
              opaque: i && i.opaque,
              priority: (i && i.priority) || 0,
            },
            function (l) {
              return l.priority;
            }
          ),
            this.state.modeGen++,
            bt(this);
        }),
        removeOverlay: vt(function (r) {
          for (var i = this.state.overlays, o = 0; o < i.length; ++o) {
            var l = i[o].modeSpec;
            if (l == r || (typeof r == 'string' && l.name == r)) {
              i.splice(o, 1), this.state.modeGen++, bt(this);
              return;
            }
          }
        }),
        indentLine: vt(function (r, i, o) {
          typeof i != 'string' &&
            typeof i != 'number' &&
            (i == null
              ? (i = this.options.smartIndent ? 'smart' : 'prev')
              : (i = i ? 'add' : 'subtract')),
            A(this.doc, r) && zn(this, r, i, o);
        }),
        indentSelection: vt(function (r) {
          for (var i = this.doc.sel.ranges, o = -1, l = 0; l < i.length; l++) {
            var a = i[l];
            if (a.empty())
              a.head.line > o &&
                (zn(this, a.head.line, r, !0),
                (o = a.head.line),
                l == this.doc.sel.primIndex && Gr(this));
            else {
              var s = a.from(),
                u = a.to(),
                h = Math.max(o, s.line);
              o = Math.min(this.lastLine(), u.line - (u.ch ? 0 : 1)) + 1;
              for (var v = h; v < o; ++v) zn(this, v, r);
              var b = this.doc.sel.ranges;
              s.ch == 0 &&
                i.length == b.length &&
                b[l].from().ch > 0 &&
                $i(this.doc, l, new He(s, b[l].to()), Ve);
            }
          }
        }),
        getTokenAt: function (r, i) {
          return xo(this, r, i);
        },
        getLineTokens: function (r, i) {
          return xo(this, L(r), i, !0);
        },
        getTokenTypeAt: function (r) {
          r = Le(this.doc, r);
          var i = vo(this, ae(this.doc, r.line)),
            o = 0,
            l = (i.length - 1) / 2,
            a = r.ch,
            s;
          if (a == 0) s = i[2];
          else
            for (;;) {
              var u = (o + l) >> 1;
              if ((u ? i[u * 2 - 1] : 0) >= a) l = u;
              else if (i[u * 2 + 1] < a) o = u + 1;
              else {
                s = i[u * 2 + 2];
                break;
              }
            }
          var h = s ? s.indexOf('overlay ') : -1;
          return h < 0 ? s : h == 0 ? null : s.slice(0, h - 1);
        },
        getModeAt: function (r) {
          var i = this.doc.mode;
          return i.innerMode
            ? e.innerMode(i, this.getTokenAt(r).state).mode
            : i;
        },
        getHelper: function (r, i) {
          return this.getHelpers(r, i)[0];
        },
        getHelpers: function (r, i) {
          var o = [];
          if (!n.hasOwnProperty(i)) return o;
          var l = n[i],
            a = this.getModeAt(r);
          if (typeof a[i] == 'string') l[a[i]] && o.push(l[a[i]]);
          else if (a[i])
            for (var s = 0; s < a[i].length; s++) {
              var u = l[a[i][s]];
              u && o.push(u);
            }
          else
            a.helperType && l[a.helperType]
              ? o.push(l[a.helperType])
              : l[a.name] && o.push(l[a.name]);
          for (var h = 0; h < l._global.length; h++) {
            var v = l._global[h];
            v.pred(a, this) && te(o, v.val) == -1 && o.push(v.val);
          }
          return o;
        },
        getStateAfter: function (r, i) {
          var o = this.doc;
          return (
            (r = ho(o, r ?? o.first + o.size - 1)), fn(this, r + 1, i).state
          );
        },
        cursorCoords: function (r, i) {
          var o,
            l = this.doc.sel.primary();
          return (
            r == null
              ? (o = l.head)
              : typeof r == 'object'
                ? (o = Le(this.doc, r))
                : (o = r ? l.from() : l.to()),
            Ht(this, o, i || 'page')
          );
        },
        charCoords: function (r, i) {
          return Zn(this, Le(this.doc, r), i || 'page');
        },
        coordsChar: function (r, i) {
          return (r = Yo(this, r, i || 'page')), Ni(this, r.left, r.top);
        },
        lineAtHeight: function (r, i) {
          return (
            (r = Yo(this, { top: r, left: 0 }, i || 'page').top),
            g(this.doc, r + this.display.viewOffset)
          );
        },
        heightAtLine: function (r, i, o) {
          var l = !1,
            a;
          if (typeof r == 'number') {
            var s = this.doc.first + this.doc.size - 1;
            r < this.doc.first
              ? (r = this.doc.first)
              : r > s && ((r = s), (l = !0)),
              (a = ae(this.doc, r));
          } else a = r;
          return (
            Yn(this, a, { top: 0, left: 0 }, i || 'page', o || l).top +
            (l ? this.doc.height - er(a) : 0)
          );
        },
        defaultTextHeight: function () {
          return jr(this.display);
        },
        defaultCharWidth: function () {
          return Kr(this.display);
        },
        getViewport: function () {
          return { from: this.display.viewFrom, to: this.display.viewTo };
        },
        addWidget: function (r, i, o, l, a) {
          var s = this.display;
          r = Ht(this, Le(this.doc, r));
          var u = r.bottom,
            h = r.left;
          if (
            ((i.style.position = 'absolute'),
            i.setAttribute('cm-ignore-events', 'true'),
            this.display.input.setUneditable(i),
            s.sizer.appendChild(i),
            l == 'over')
          )
            u = r.top;
          else if (l == 'above' || l == 'near') {
            var v = Math.max(s.wrapper.clientHeight, this.doc.height),
              b = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
            (l == 'above' || r.bottom + i.offsetHeight > v) &&
            r.top > i.offsetHeight
              ? (u = r.top - i.offsetHeight)
              : r.bottom + i.offsetHeight <= v && (u = r.bottom),
              h + i.offsetWidth > b && (h = b - i.offsetWidth);
          }
          (i.style.top = u + 'px'),
            (i.style.left = i.style.right = ''),
            a == 'right'
              ? ((h = s.sizer.clientWidth - i.offsetWidth),
                (i.style.right = '0px'))
              : (a == 'left'
                  ? (h = 0)
                  : a == 'middle' &&
                    (h = (s.sizer.clientWidth - i.offsetWidth) / 2),
                (i.style.left = h + 'px')),
            o &&
              hs(this, {
                left: h,
                top: u,
                right: h + i.offsetWidth,
                bottom: u + i.offsetHeight,
              });
        },
        triggerOnKeyDown: vt(Ql),
        triggerOnKeyPress: vt($l),
        triggerOnKeyUp: Vl,
        triggerOnMouseDown: vt(ea),
        execCommand: function (r) {
          if (Nn.hasOwnProperty(r)) return Nn[r].call(null, this);
        },
        triggerElectric: vt(function (r) {
          aa(this, r);
        }),
        findPosH: function (r, i, o, l) {
          var a = 1;
          i < 0 && ((a = -1), (i = -i));
          for (
            var s = Le(this.doc, r), u = 0;
            u < i && ((s = uo(this.doc, s, a, o, l)), !s.hitSide);
            ++u
          );
          return s;
        },
        moveH: vt(function (r, i) {
          var o = this;
          this.extendSelectionsBy(function (l) {
            return o.display.shift || o.doc.extend || l.empty()
              ? uo(o.doc, l.head, r, i, o.options.rtlMoveVisually)
              : r < 0
                ? l.from()
                : l.to();
          }, Ne);
        }),
        deleteH: vt(function (r, i) {
          var o = this.doc.sel,
            l = this.doc;
          o.somethingSelected()
            ? l.replaceSelection('', null, '+delete')
            : en(this, function (a) {
                var s = uo(l, a.head, r, i, !1);
                return r < 0
                  ? { from: s, to: a.head }
                  : { from: a.head, to: s };
              });
        }),
        findPosV: function (r, i, o, l) {
          var a = 1,
            s = l;
          i < 0 && ((a = -1), (i = -i));
          for (var u = Le(this.doc, r), h = 0; h < i; ++h) {
            var v = Ht(this, u, 'div');
            if (
              (s == null ? (s = v.left) : (v.left = s),
              (u = fa(this, v, a, o)),
              u.hitSide)
            )
              break;
          }
          return u;
        },
        moveV: vt(function (r, i) {
          var o = this,
            l = this.doc,
            a = [],
            s = !this.display.shift && !l.extend && l.sel.somethingSelected();
          if (
            (l.extendSelectionsBy(function (h) {
              if (s) return r < 0 ? h.from() : h.to();
              var v = Ht(o, h.head, 'div');
              h.goalColumn != null && (v.left = h.goalColumn), a.push(v.left);
              var b = fa(o, v, r, i);
              return (
                i == 'page' &&
                  h == l.sel.primary() &&
                  qi(o, Zn(o, b, 'div').top - v.top),
                b
              );
            }, Ne),
            a.length)
          )
            for (var u = 0; u < l.sel.ranges.length; u++)
              l.sel.ranges[u].goalColumn = a[u];
        }),
        findWordAt: function (r) {
          var i = this.doc,
            o = ae(i, r.line).text,
            l = r.ch,
            a = r.ch;
          if (o) {
            var s = this.getHelper(r, 'wordChars');
            (r.sticky == 'before' || a == o.length) && l ? --l : ++a;
            for (
              var u = o.charAt(l),
                h = we(u, s)
                  ? function (v) {
                      return we(v, s);
                    }
                  : /\s/.test(u)
                    ? function (v) {
                        return /\s/.test(v);
                      }
                    : function (v) {
                        return !/\s/.test(v) && !we(v);
                      };
              l > 0 && h(o.charAt(l - 1));

            )
              --l;
            for (; a < o.length && h(o.charAt(a)); ) ++a;
          }
          return new He(L(r.line, l), L(r.line, a));
        },
        toggleOverwrite: function (r) {
          (r != null && r == this.state.overwrite) ||
            ((this.state.overwrite = !this.state.overwrite)
              ? N(this.display.cursorDiv, 'CodeMirror-overwrite')
              : Ae(this.display.cursorDiv, 'CodeMirror-overwrite'),
            Ye(this, 'overwriteToggle', this, this.state.overwrite));
        },
        hasFocus: function () {
          return this.display.input.getField() == y(G(this));
        },
        isReadOnly: function () {
          return !!(this.options.readOnly || this.doc.cantEdit);
        },
        scrollTo: vt(function (r, i) {
          mn(this, r, i);
        }),
        getScrollInfo: function () {
          var r = this.display.scroller;
          return {
            left: r.scrollLeft,
            top: r.scrollTop,
            height: r.scrollHeight - Gt(this) - this.display.barHeight,
            width: r.scrollWidth - Gt(this) - this.display.barWidth,
            clientHeight: Mi(this),
            clientWidth: wr(this),
          };
        },
        scrollIntoView: vt(function (r, i) {
          r == null
            ? ((r = { from: this.doc.sel.primary().head, to: null }),
              i == null && (i = this.options.cursorScrollMargin))
            : typeof r == 'number'
              ? (r = { from: L(r, 0), to: null })
              : r.from == null && (r = { from: r, to: null }),
            r.to || (r.to = r.from),
            (r.margin = i || 0),
            r.from.line != null
              ? ps(this, r)
              : nl(this, r.from, r.to, r.margin);
        }),
        setSize: vt(function (r, i) {
          var o = this,
            l = function (s) {
              return typeof s == 'number' || /^\d+$/.test(String(s))
                ? s + 'px'
                : s;
            };
          r != null && (this.display.wrapper.style.width = l(r)),
            i != null && (this.display.wrapper.style.height = l(i)),
            this.options.lineWrapping && Uo(this);
          var a = this.display.viewFrom;
          this.doc.iter(a, this.display.viewTo, function (s) {
            if (s.widgets) {
              for (var u = 0; u < s.widgets.length; u++)
                if (s.widgets[u].noHScroll) {
                  dr(o, a, 'widget');
                  break;
                }
            }
            ++a;
          }),
            (this.curOp.forceUpdate = !0),
            Ye(this, 'refresh', this);
        }),
        operation: function (r) {
          return Dt(this, r);
        },
        startOperation: function () {
          return Mr(this);
        },
        endOperation: function () {
          return Fr(this);
        },
        refresh: vt(function () {
          var r = this.display.cachedTextHeight;
          bt(this),
            (this.curOp.forceUpdate = !0),
            gn(this),
            mn(this, this.doc.scrollLeft, this.doc.scrollTop),
            Ui(this.display),
            (r == null ||
              Math.abs(r - jr(this.display)) > 0.5 ||
              this.options.lineWrapping) &&
              zi(this),
            Ye(this, 'refresh', this);
        }),
        swapDoc: vt(function (r) {
          var i = this.doc;
          return (
            (i.cm = null),
            this.state.selectingText && this.state.selectingText(),
            ml(this, r),
            gn(this),
            this.display.input.reset(),
            mn(this, r.scrollLeft, r.scrollTop),
            (this.curOp.forceScroll = !0),
            ot(this, 'swapDoc', this, i),
            i
          );
        }),
        phrase: function (r) {
          var i = this.options.phrases;
          return i && Object.prototype.hasOwnProperty.call(i, r) ? i[r] : r;
        },
        getInputField: function () {
          return this.display.input.getField();
        },
        getWrapperElement: function () {
          return this.display.wrapper;
        },
        getScrollerElement: function () {
          return this.display.scroller;
        },
        getGutterElement: function () {
          return this.display.gutters;
        },
      }),
        Pt(e),
        (e.registerHelper = function (r, i, o) {
          n.hasOwnProperty(r) || (n[r] = e[r] = { _global: [] }), (n[r][i] = o);
        }),
        (e.registerGlobalHelper = function (r, i, o, l) {
          e.registerHelper(r, i, l), n[r]._global.push({ pred: o, val: l });
        });
    }
    function uo(e, t, n, r, i) {
      var o = t,
        l = n,
        a = ae(e, t.line),
        s = i && e.direction == 'rtl' ? -n : n;
      function u() {
        var Z = t.line + s;
        return Z < e.first || Z >= e.first + e.size
          ? !1
          : ((t = new L(Z, t.ch, t.sticky)), (a = ae(e, Z)));
      }
      function h(Z) {
        var j;
        if (r == 'codepoint') {
          var J = a.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
          if (isNaN(J)) j = null;
          else {
            var ge = n > 0 ? J >= 55296 && J < 56320 : J >= 56320 && J < 57343;
            j = new L(
              t.line,
              Math.max(0, Math.min(a.text.length, t.ch + n * (ge ? 2 : 1))),
              -n
            );
          }
        } else i ? (j = Qs(e.cm, a, t, n)) : (j = to(a, t, n));
        if (j == null)
          if (!Z && u()) t = ro(i, e.cm, a, t.line, s);
          else return !1;
        else t = j;
        return !0;
      }
      if (r == 'char' || r == 'codepoint') h();
      else if (r == 'column') h(!0);
      else if (r == 'word' || r == 'group')
        for (
          var v = null,
            b = r == 'group',
            x = e.cm && e.cm.getHelper(t, 'wordChars'),
            D = !0;
          !(n < 0 && !h(!D));
          D = !1
        ) {
          var E =
              a.text.charAt(t.ch) ||
              `
`,
            _ = we(E, x)
              ? 'w'
              : b &&
                  E ==
                    `
`
                ? 'n'
                : !b || /\s/.test(E)
                  ? null
                  : 'p';
          if ((b && !D && !_ && (_ = 's'), v && v != _)) {
            n < 0 && ((n = 1), h(), (t.sticky = 'after'));
            break;
          }
          if ((_ && (v = _), n > 0 && !h(!D))) break;
        }
      var q = ai(e, t, o, l, !0);
      return _e(o, q) && (q.hitSide = !0), q;
    }
    function fa(e, t, n, r) {
      var i = e.doc,
        o = t.left,
        l;
      if (r == 'page') {
        var a = Math.min(
            e.display.wrapper.clientHeight,
            R(e).innerHeight || i(e).documentElement.clientHeight
          ),
          s = Math.max(a - 0.5 * jr(e.display), 3);
        l = (n > 0 ? t.bottom : t.top) + n * s;
      } else r == 'line' && (l = n > 0 ? t.bottom + 3 : t.top - 3);
      for (var u; (u = Ni(e, o, l)), !!u.outside; ) {
        if (n < 0 ? l <= 0 : l >= i.height) {
          u.hitSide = !0;
          break;
        }
        l += n * 5;
      }
      return u;
    }
    var je = function (e) {
      (this.cm = e),
        (this.lastAnchorNode =
          this.lastAnchorOffset =
          this.lastFocusNode =
          this.lastFocusOffset =
            null),
        (this.polling = new xe()),
        (this.composing = null),
        (this.gracePeriod = !1),
        (this.readDOMTimeout = null);
    };
    (je.prototype.init = function (e) {
      var t = this,
        n = this,
        r = n.cm,
        i = (n.div = e.lineDiv);
      (i.contentEditable = !0),
        so(
          i,
          r.options.spellcheck,
          r.options.autocorrect,
          r.options.autocapitalize
        );
      function o(a) {
        for (var s = a.target; s; s = s.parentNode) {
          if (s == i) return !0;
          if (/\bCodeMirror-(?:line)?widget\b/.test(s.className)) break;
        }
        return !1;
      }
      pe(i, 'paste', function (a) {
        !o(a) ||
          Ze(r, a) ||
          la(a, r) ||
          (ee <= 11 &&
            setTimeout(
              lt(r, function () {
                return t.updateFromDOM();
              }),
              20
            ));
      }),
        pe(i, 'compositionstart', function (a) {
          t.composing = { data: a.data, done: !1 };
        }),
        pe(i, 'compositionupdate', function (a) {
          t.composing || (t.composing = { data: a.data, done: !1 });
        }),
        pe(i, 'compositionend', function (a) {
          t.composing &&
            (a.data != t.composing.data && t.readFromDOMSoon(),
            (t.composing.done = !0));
        }),
        pe(i, 'touchstart', function () {
          return n.forceCompositionEnd();
        }),
        pe(i, 'input', function () {
          t.composing || t.readFromDOMSoon();
        });
      function l(a) {
        if (!(!o(a) || Ze(r, a))) {
          if (r.somethingSelected())
            hi({ lineWise: !1, text: r.getSelections() }),
              a.type == 'cut' && r.replaceSelection('', null, 'cut');
          else if (r.options.lineWiseCopyCut) {
            var s = sa(r);
            hi({ lineWise: !0, text: s.text }),
              a.type == 'cut' &&
                r.operation(function () {
                  r.setSelections(s.ranges, 0, Ve),
                    r.replaceSelection('', null, 'cut');
                });
          } else return;
          if (a.clipboardData) {
            a.clipboardData.clearData();
            var u = qt.text.join(`
`);
            if (
              (a.clipboardData.setData('Text', u),
              a.clipboardData.getData('Text') == u)
            ) {
              a.preventDefault();
              return;
            }
          }
          var h = ua(),
            v = h.firstChild;
          so(v),
            r.display.lineSpace.insertBefore(h, r.display.lineSpace.firstChild),
            (v.value = qt.text.join(`
`));
          var b = y(ye(i));
          p(v),
            setTimeout(function () {
              r.display.lineSpace.removeChild(h),
                b.focus(),
                b == i && n.showPrimarySelection();
            }, 50);
        }
      }
      pe(i, 'copy', l), pe(i, 'cut', l);
    }),
      (je.prototype.screenReaderLabelChanged = function (e) {
        e
          ? this.div.setAttribute('aria-label', e)
          : this.div.removeAttribute('aria-label');
      }),
      (je.prototype.prepareSelection = function () {
        var e = el(this.cm, !1);
        return (e.focus = y(ye(this.div)) == this.div), e;
      }),
      (je.prototype.showSelection = function (e, t) {
        !e ||
          !this.cm.display.view.length ||
          ((e.focus || t) && this.showPrimarySelection(),
          this.showMultipleSelections(e));
      }),
      (je.prototype.getSelection = function () {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }),
      (je.prototype.showPrimarySelection = function () {
        var e = this.getSelection(),
          t = this.cm,
          n = t.doc.sel.primary(),
          r = n.from(),
          i = n.to();
        if (
          t.display.viewTo == t.display.viewFrom ||
          r.line >= t.display.viewTo ||
          i.line < t.display.viewFrom
        ) {
          e.removeAllRanges();
          return;
        }
        var o = pi(t, e.anchorNode, e.anchorOffset),
          l = pi(t, e.focusNode, e.focusOffset);
        if (
          !(
            o &&
            !o.bad &&
            l &&
            !l.bad &&
            X(_r(o, l), r) == 0 &&
            X(xt(o, l), i) == 0
          )
        ) {
          var a = t.display.view,
            s = (r.line >= t.display.viewFrom && ca(t, r)) || {
              node: a[0].measure.map[2],
              offset: 0,
            },
            u = i.line < t.display.viewTo && ca(t, i);
          if (!u) {
            var h = a[a.length - 1].measure,
              v = h.maps ? h.maps[h.maps.length - 1] : h.map;
            u = {
              node: v[v.length - 1],
              offset: v[v.length - 2] - v[v.length - 3],
            };
          }
          if (!s || !u) {
            e.removeAllRanges();
            return;
          }
          var b = e.rangeCount && e.getRangeAt(0),
            x;
          try {
            x = w(s.node, s.offset, u.offset, u.node);
          } catch {}
          x &&
            (!I && t.state.focused
              ? (e.collapse(s.node, s.offset),
                x.collapsed || (e.removeAllRanges(), e.addRange(x)))
              : (e.removeAllRanges(), e.addRange(x)),
            b && e.anchorNode == null
              ? e.addRange(b)
              : I && this.startGracePeriod()),
            this.rememberSelection();
        }
      }),
      (je.prototype.startGracePeriod = function () {
        var e = this;
        clearTimeout(this.gracePeriod),
          (this.gracePeriod = setTimeout(function () {
            (e.gracePeriod = !1),
              e.selectionChanged() &&
                e.cm.operation(function () {
                  return (e.cm.curOp.selectionChanged = !0);
                });
          }, 20));
      }),
      (je.prototype.showMultipleSelections = function (e) {
        Y(this.cm.display.cursorDiv, e.cursors),
          Y(this.cm.display.selectionDiv, e.selection);
      }),
      (je.prototype.rememberSelection = function () {
        var e = this.getSelection();
        (this.lastAnchorNode = e.anchorNode),
          (this.lastAnchorOffset = e.anchorOffset),
          (this.lastFocusNode = e.focusNode),
          (this.lastFocusOffset = e.focusOffset);
      }),
      (je.prototype.selectionInEditor = function () {
        var e = this.getSelection();
        if (!e.rangeCount) return !1;
        var t = e.getRangeAt(0).commonAncestorContainer;
        return m(this.div, t);
      }),
      (je.prototype.focus = function () {
        this.cm.options.readOnly != 'nocursor' &&
          ((!this.selectionInEditor() || y(ye(this.div)) != this.div) &&
            this.showSelection(this.prepareSelection(), !0),
          this.div.focus());
      }),
      (je.prototype.blur = function () {
        this.div.blur();
      }),
      (je.prototype.getField = function () {
        return this.div;
      }),
      (je.prototype.supportsTouch = function () {
        return !0;
      }),
      (je.prototype.receivedFocus = function () {
        var e = this,
          t = this;
        this.selectionInEditor()
          ? setTimeout(function () {
              return e.pollSelection();
            }, 20)
          : Dt(this.cm, function () {
              return (t.cm.curOp.selectionChanged = !0);
            });
        function n() {
          t.cm.state.focused &&
            (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, n));
        }
        this.polling.set(this.cm.options.pollInterval, n);
      }),
      (je.prototype.selectionChanged = function () {
        var e = this.getSelection();
        return (
          e.anchorNode != this.lastAnchorNode ||
          e.anchorOffset != this.lastAnchorOffset ||
          e.focusNode != this.lastFocusNode ||
          e.focusOffset != this.lastFocusOffset
        );
      }),
      (je.prototype.pollSelection = function () {
        if (
          !(
            this.readDOMTimeout != null ||
            this.gracePeriod ||
            !this.selectionChanged()
          )
        ) {
          var e = this.getSelection(),
            t = this.cm;
          if (
            V &&
            O &&
            this.cm.display.gutterSpecs.length &&
            mu(e.anchorNode)
          ) {
            this.cm.triggerOnKeyDown({
              type: 'keydown',
              keyCode: 8,
              preventDefault: Math.abs,
            }),
              this.blur(),
              this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var n = pi(t, e.anchorNode, e.anchorOffset),
              r = pi(t, e.focusNode, e.focusOffset);
            n &&
              r &&
              Dt(t, function () {
                pt(t.doc, pr(n, r), Ve),
                  (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
              });
          }
        }
      }),
      (je.prototype.pollContent = function () {
        this.readDOMTimeout != null &&
          (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
        var e = this.cm,
          t = e.display,
          n = e.doc.sel.primary(),
          r = n.from(),
          i = n.to();
        if (
          (r.ch == 0 &&
            r.line > e.firstLine() &&
            (r = L(r.line - 1, ae(e.doc, r.line - 1).length)),
          i.ch == ae(e.doc, i.line).text.length &&
            i.line < e.lastLine() &&
            (i = L(i.line + 1, 0)),
          r.line < t.viewFrom || i.line > t.viewTo - 1)
        )
          return !1;
        var o, l, a;
        r.line == t.viewFrom || (o = Lr(e, r.line)) == 0
          ? ((l = f(t.view[0].line)), (a = t.view[0].node))
          : ((l = f(t.view[o].line)), (a = t.view[o - 1].node.nextSibling));
        var s = Lr(e, i.line),
          u,
          h;
        if (
          (s == t.view.length - 1
            ? ((u = t.viewTo - 1), (h = t.lineDiv.lastChild))
            : ((u = f(t.view[s + 1].line) - 1),
              (h = t.view[s + 1].node.previousSibling)),
          !a)
        )
          return !1;
        for (
          var v = e.doc.splitLines(yu(e, a, h, l, u)),
            b = Vt(e.doc, L(l, 0), L(u, ae(e.doc, u).text.length));
          v.length > 1 && b.length > 1;

        )
          if (he(v) == he(b)) v.pop(), b.pop(), u--;
          else if (v[0] == b[0]) v.shift(), b.shift(), l++;
          else break;
        for (
          var x = 0,
            D = 0,
            E = v[0],
            _ = b[0],
            q = Math.min(E.length, _.length);
          x < q && E.charCodeAt(x) == _.charCodeAt(x);

        )
          ++x;
        for (
          var Z = he(v),
            j = he(b),
            J = Math.min(
              Z.length - (v.length == 1 ? x : 0),
              j.length - (b.length == 1 ? x : 0)
            );
          D < J &&
          Z.charCodeAt(Z.length - D - 1) == j.charCodeAt(j.length - D - 1);

        )
          ++D;
        if (v.length == 1 && b.length == 1 && l == r.line)
          for (
            ;
            x &&
            x > r.ch &&
            Z.charCodeAt(Z.length - D - 1) == j.charCodeAt(j.length - D - 1);

          )
            x--, D++;
        (v[v.length - 1] = Z.slice(0, Z.length - D).replace(/^\u200b+/, '')),
          (v[0] = v[0].slice(x).replace(/\u200b+$/, ''));
        var ge = L(l, x),
          ce = L(u, b.length ? he(b).length - D : 0);
        if (v.length > 1 || v[0] || X(ge, ce))
          return Qr(e.doc, v, ge, ce, '+input'), !0;
      }),
      (je.prototype.ensurePolled = function () {
        this.forceCompositionEnd();
      }),
      (je.prototype.reset = function () {
        this.forceCompositionEnd();
      }),
      (je.prototype.forceCompositionEnd = function () {
        this.composing &&
          (clearTimeout(this.readDOMTimeout),
          (this.composing = null),
          this.updateFromDOM(),
          this.div.blur(),
          this.div.focus());
      }),
      (je.prototype.readFromDOMSoon = function () {
        var e = this;
        this.readDOMTimeout == null &&
          (this.readDOMTimeout = setTimeout(function () {
            if (((e.readDOMTimeout = null), e.composing))
              if (e.composing.done) e.composing = null;
              else return;
            e.updateFromDOM();
          }, 80));
      }),
      (je.prototype.updateFromDOM = function () {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) &&
          Dt(this.cm, function () {
            return bt(e.cm);
          });
      }),
      (je.prototype.setUneditable = function (e) {
        e.contentEditable = 'false';
      }),
      (je.prototype.onKeyPress = function (e) {
        e.charCode == 0 ||
          this.composing ||
          (e.preventDefault(),
          this.cm.isReadOnly() ||
            lt(this.cm, ao)(
              this.cm,
              String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode),
              0
            ));
      }),
      (je.prototype.readOnlyChanged = function (e) {
        this.div.contentEditable = String(e != 'nocursor');
      }),
      (je.prototype.onContextMenu = function () {}),
      (je.prototype.resetPosition = function () {}),
      (je.prototype.needsContentAttribute = !0);
    function ca(e, t) {
      var n = Fi(e, t.line);
      if (!n || n.hidden) return null;
      var r = ae(e.doc, t.line),
        i = Ho(n, r, t.line),
        o = We(r, e.doc.direction),
        l = 'left';
      if (o) {
        var a = lr(o, t.ch);
        l = a % 2 ? 'right' : 'left';
      }
      var s = jo(i.map, t.ch, l);
      return (s.offset = s.collapse == 'right' ? s.end : s.start), s;
    }
    function mu(e) {
      for (var t = e; t; t = t.parentNode)
        if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
      return !1;
    }
    function rn(e, t) {
      return t && (e.bad = !0), e;
    }
    function yu(e, t, n, r, i) {
      var o = '',
        l = !1,
        a = e.doc.lineSeparator(),
        s = !1;
      function u(x) {
        return function (D) {
          return D.id == x;
        };
      }
      function h() {
        l && ((o += a), s && (o += a), (l = s = !1));
      }
      function v(x) {
        x && (h(), (o += x));
      }
      function b(x) {
        if (x.nodeType == 1) {
          var D = x.getAttribute('cm-text');
          if (D) {
            v(D);
            return;
          }
          var E = x.getAttribute('cm-marker'),
            _;
          if (E) {
            var q = e.findMarks(L(r, 0), L(i + 1, 0), u(+E));
            q.length &&
              (_ = q[0].find(0)) &&
              v(Vt(e.doc, _.from, _.to).join(a));
            return;
          }
          if (x.getAttribute('contenteditable') == 'false') return;
          var Z = /^(pre|div|p|li|table|br)$/i.test(x.nodeName);
          if (!/^br$/i.test(x.nodeName) && x.textContent.length == 0) return;
          Z && h();
          for (var j = 0; j < x.childNodes.length; j++) b(x.childNodes[j]);
          /^(pre|p)$/i.test(x.nodeName) && (s = !0), Z && (l = !0);
        } else
          x.nodeType == 3 &&
            v(x.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
      }
      for (; b(t), t != n; ) (t = t.nextSibling), (s = !1);
      return o;
    }
    function pi(e, t, n) {
      var r;
      if (t == e.display.lineDiv) {
        if (((r = e.display.lineDiv.childNodes[n]), !r))
          return rn(e.clipPos(L(e.display.viewTo - 1)), !0);
        (t = null), (n = 0);
      } else
        for (r = t; ; r = r.parentNode) {
          if (!r || r == e.display.lineDiv) return null;
          if (r.parentNode && r.parentNode == e.display.lineDiv) break;
        }
      for (var i = 0; i < e.display.view.length; i++) {
        var o = e.display.view[i];
        if (o.node == r) return xu(o, t, n);
      }
    }
    function xu(e, t, n) {
      var r = e.text.firstChild,
        i = !1;
      if (!t || !m(r, t)) return rn(L(f(e.line), 0), !0);
      if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
        var o = e.rest ? he(e.rest) : e.line;
        return rn(L(f(o), o.text.length), i);
      }
      var l = t.nodeType == 3 ? t : null,
        a = t;
      for (
        !l &&
        t.childNodes.length == 1 &&
        t.firstChild.nodeType == 3 &&
        ((l = t.firstChild), n && (n = l.nodeValue.length));
        a.parentNode != r;

      )
        a = a.parentNode;
      var s = e.measure,
        u = s.maps;
      function h(_, q, Z) {
        for (var j = -1; j < (u ? u.length : 0); j++)
          for (var J = j < 0 ? s.map : u[j], ge = 0; ge < J.length; ge += 3) {
            var ce = J[ge + 2];
            if (ce == _ || ce == q) {
              var De = f(j < 0 ? e.line : e.rest[j]),
                Ke = J[ge] + Z;
              return (
                (Z < 0 || ce != _) && (Ke = J[ge + (Z ? 1 : 0)]), L(De, Ke)
              );
            }
          }
      }
      var v = h(l, a, n);
      if (v) return rn(v, i);
      for (
        var b = a.nextSibling, x = l ? l.nodeValue.length - n : 0;
        b;
        b = b.nextSibling
      ) {
        if (((v = h(b, b.firstChild, 0)), v)) return rn(L(v.line, v.ch - x), i);
        x += b.textContent.length;
      }
      for (var D = a.previousSibling, E = n; D; D = D.previousSibling) {
        if (((v = h(D, D.firstChild, -1)), v))
          return rn(L(v.line, v.ch + E), i);
        E += D.textContent.length;
      }
    }
    var $e = function (e) {
      (this.cm = e),
        (this.prevInput = ''),
        (this.pollingFast = !1),
        (this.polling = new xe()),
        (this.hasSelection = !1),
        (this.composing = null),
        (this.resetting = !1);
    };
    ($e.prototype.init = function (e) {
      var t = this,
        n = this,
        r = this.cm;
      this.createField(e);
      var i = this.textarea;
      e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
        Q && (i.style.width = '0px'),
        pe(i, 'input', function () {
          k && ee >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
        }),
        pe(i, 'paste', function (l) {
          Ze(r, l) ||
            la(l, r) ||
            ((r.state.pasteIncoming = +new Date()), n.fastPoll());
        });
      function o(l) {
        if (!Ze(r, l)) {
          if (r.somethingSelected())
            hi({ lineWise: !1, text: r.getSelections() });
          else if (r.options.lineWiseCopyCut) {
            var a = sa(r);
            hi({ lineWise: !0, text: a.text }),
              l.type == 'cut'
                ? r.setSelections(a.ranges, null, Ve)
                : ((n.prevInput = ''),
                  (i.value = a.text.join(`
`)),
                  p(i));
          } else return;
          l.type == 'cut' && (r.state.cutIncoming = +new Date());
        }
      }
      pe(i, 'cut', o),
        pe(i, 'copy', o),
        pe(e.scroller, 'paste', function (l) {
          if (!(tr(e, l) || Ze(r, l))) {
            if (!i.dispatchEvent) {
              (r.state.pasteIncoming = +new Date()), n.focus();
              return;
            }
            var a = new Event('paste');
            (a.clipboardData = l.clipboardData), i.dispatchEvent(a);
          }
        }),
        pe(e.lineSpace, 'selectstart', function (l) {
          tr(e, l) || ht(l);
        }),
        pe(i, 'compositionstart', function () {
          var l = r.getCursor('from');
          n.composing && n.composing.range.clear(),
            (n.composing = {
              start: l,
              range: r.markText(l, r.getCursor('to'), {
                className: 'CodeMirror-composing',
              }),
            });
        }),
        pe(i, 'compositionend', function () {
          n.composing &&
            (n.poll(), n.composing.range.clear(), (n.composing = null));
        });
    }),
      ($e.prototype.createField = function (e) {
        (this.wrapper = ua()), (this.textarea = this.wrapper.firstChild);
        var t = this.cm.options;
        so(this.textarea, t.spellcheck, t.autocorrect, t.autocapitalize);
      }),
      ($e.prototype.screenReaderLabelChanged = function (e) {
        e
          ? this.textarea.setAttribute('aria-label', e)
          : this.textarea.removeAttribute('aria-label');
      }),
      ($e.prototype.prepareSelection = function () {
        var e = this.cm,
          t = e.display,
          n = e.doc,
          r = el(e);
        if (e.options.moveInputWithCursor) {
          var i = Ht(e, n.sel.primary().head, 'div'),
            o = t.wrapper.getBoundingClientRect(),
            l = t.lineDiv.getBoundingClientRect();
          (r.teTop = Math.max(
            0,
            Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)
          )),
            (r.teLeft = Math.max(
              0,
              Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left)
            ));
        }
        return r;
      }),
      ($e.prototype.showSelection = function (e) {
        var t = this.cm,
          n = t.display;
        Y(n.cursorDiv, e.cursors),
          Y(n.selectionDiv, e.selection),
          e.teTop != null &&
            ((this.wrapper.style.top = e.teTop + 'px'),
            (this.wrapper.style.left = e.teLeft + 'px'));
      }),
      ($e.prototype.reset = function (e) {
        if (!(this.contextMenuPending || (this.composing && e))) {
          var t = this.cm;
          if (((this.resetting = !0), t.somethingSelected())) {
            this.prevInput = '';
            var n = t.getSelection();
            (this.textarea.value = n),
              t.state.focused && p(this.textarea),
              k && ee >= 9 && (this.hasSelection = n);
          } else
            e ||
              ((this.prevInput = this.textarea.value = ''),
              k && ee >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }),
      ($e.prototype.getField = function () {
        return this.textarea;
      }),
      ($e.prototype.supportsTouch = function () {
        return !1;
      }),
      ($e.prototype.focus = function () {
        if (
          this.cm.options.readOnly != 'nocursor' &&
          (!$ || y(ye(this.textarea)) != this.textarea)
        )
          try {
            this.textarea.focus();
          } catch {}
      }),
      ($e.prototype.blur = function () {
        this.textarea.blur();
      }),
      ($e.prototype.resetPosition = function () {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }),
      ($e.prototype.receivedFocus = function () {
        this.slowPoll();
      }),
      ($e.prototype.slowPoll = function () {
        var e = this;
        this.pollingFast ||
          this.polling.set(this.cm.options.pollInterval, function () {
            e.poll(), e.cm.state.focused && e.slowPoll();
          });
      }),
      ($e.prototype.fastPoll = function () {
        var e = !1,
          t = this;
        t.pollingFast = !0;
        function n() {
          var r = t.poll();
          !r && !e
            ? ((e = !0), t.polling.set(60, n))
            : ((t.pollingFast = !1), t.slowPoll());
        }
        t.polling.set(20, n);
      }),
      ($e.prototype.poll = function () {
        var e = this,
          t = this.cm,
          n = this.textarea,
          r = this.prevInput;
        if (
          this.contextMenuPending ||
          this.resetting ||
          !t.state.focused ||
          (ur(n) && !r && !this.composing) ||
          t.isReadOnly() ||
          t.options.disableInput ||
          t.state.keySeq
        )
          return !1;
        var i = n.value;
        if (i == r && !t.somethingSelected()) return !1;
        if (
          (k && ee >= 9 && this.hasSelection === i) ||
          (ie && /[\uf700-\uf7ff]/.test(i))
        )
          return t.display.input.reset(), !1;
        if (t.doc.sel == t.display.selForContextMenu) {
          var o = i.charCodeAt(0);
          if ((o == 8203 && !r && (r = '​'), o == 8666))
            return this.reset(), this.cm.execCommand('undo');
        }
        for (
          var l = 0, a = Math.min(r.length, i.length);
          l < a && r.charCodeAt(l) == i.charCodeAt(l);

        )
          ++l;
        return (
          Dt(t, function () {
            ao(
              t,
              i.slice(l),
              r.length - l,
              null,
              e.composing ? '*compose' : null
            ),
              i.length > 1e3 ||
              i.indexOf(`
`) > -1
                ? (n.value = e.prevInput = '')
                : (e.prevInput = i),
              e.composing &&
                (e.composing.range.clear(),
                (e.composing.range = t.markText(
                  e.composing.start,
                  t.getCursor('to'),
                  { className: 'CodeMirror-composing' }
                )));
          }),
          !0
        );
      }),
      ($e.prototype.ensurePolled = function () {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }),
      ($e.prototype.onKeyPress = function () {
        k && ee >= 9 && (this.hasSelection = null), this.fastPoll();
      }),
      ($e.prototype.onContextMenu = function (e) {
        var t = this,
          n = t.cm,
          r = n.display,
          i = t.textarea;
        t.contextMenuPending && t.contextMenuPending();
        var o = Tr(n, e),
          l = r.scroller.scrollTop;
        if (!o || P) return;
        var a = n.options.resetSelectionOnContextMenu;
        a && n.doc.sel.contains(o) == -1 && lt(n, pt)(n.doc, pr(o), Ve);
        var s = i.style.cssText,
          u = t.wrapper.style.cssText,
          h = t.wrapper.offsetParent.getBoundingClientRect();
        (t.wrapper.style.cssText = 'position: static'),
          (i.style.cssText =
            `position: absolute; width: 30px; height: 30px;
      top: ` +
            (e.clientY - h.top - 5) +
            'px; left: ' +
            (e.clientX - h.left - 5) +
            `px;
      z-index: 1000; background: ` +
            (k ? 'rgba(255, 255, 255, .05)' : 'transparent') +
            `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`);
        var v;
        U && (v = i.ownerDocument.defaultView.scrollY),
          r.input.focus(),
          U && i.ownerDocument.defaultView.scrollTo(null, v),
          r.input.reset(),
          n.somethingSelected() || (i.value = t.prevInput = ' '),
          (t.contextMenuPending = x),
          (r.selForContextMenu = n.doc.sel),
          clearTimeout(r.detectingSelectAll);
        function b() {
          if (i.selectionStart != null) {
            var E = n.somethingSelected(),
              _ = '​' + (E ? i.value : '');
            (i.value = '⇚'),
              (i.value = _),
              (t.prevInput = E ? '' : '​'),
              (i.selectionStart = 1),
              (i.selectionEnd = _.length),
              (r.selForContextMenu = n.doc.sel);
          }
        }
        function x() {
          if (
            t.contextMenuPending == x &&
            ((t.contextMenuPending = !1),
            (t.wrapper.style.cssText = u),
            (i.style.cssText = s),
            k &&
              ee < 9 &&
              r.scrollbars.setScrollTop((r.scroller.scrollTop = l)),
            i.selectionStart != null)
          ) {
            (!k || (k && ee < 9)) && b();
            var E = 0,
              _ = function () {
                r.selForContextMenu == n.doc.sel &&
                i.selectionStart == 0 &&
                i.selectionEnd > 0 &&
                t.prevInput == '​'
                  ? lt(n, Al)(n)
                  : E++ < 10
                    ? (r.detectingSelectAll = setTimeout(_, 500))
                    : ((r.selForContextMenu = null), r.input.reset());
              };
            r.detectingSelectAll = setTimeout(_, 200);
          }
        }
        if ((k && ee >= 9 && b(), le)) {
          ar(e);
          var D = function () {
            dt(window, 'mouseup', D), setTimeout(x, 20);
          };
          pe(window, 'mouseup', D);
        } else setTimeout(x, 50);
      }),
      ($e.prototype.readOnlyChanged = function (e) {
        e || this.reset(),
          (this.textarea.disabled = e == 'nocursor'),
          (this.textarea.readOnly = !!e);
      }),
      ($e.prototype.setUneditable = function () {}),
      ($e.prototype.needsContentAttribute = !1);
    function bu(e, t) {
      if (
        ((t = t ? Se(t) : {}),
        (t.value = e.value),
        !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
        !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
        t.autofocus == null)
      ) {
        var n = y(ye(e));
        t.autofocus =
          n == e || (e.getAttribute('autofocus') != null && n == document.body);
      }
      function r() {
        e.value = a.getValue();
      }
      var i;
      if (e.form && (pe(e.form, 'submit', r), !t.leaveSubmitMethodAlone)) {
        var o = e.form;
        i = o.submit;
        try {
          var l = (o.submit = function () {
            r(), (o.submit = i), o.submit(), (o.submit = l);
          });
        } catch {}
      }
      (t.finishInit = function (s) {
        (s.save = r),
          (s.getTextArea = function () {
            return e;
          }),
          (s.toTextArea = function () {
            (s.toTextArea = isNaN),
              r(),
              e.parentNode.removeChild(s.getWrapperElement()),
              (e.style.display = ''),
              e.form &&
                (dt(e.form, 'submit', r),
                !t.leaveSubmitMethodAlone &&
                  typeof e.form.submit == 'function' &&
                  (e.form.submit = i));
          });
      }),
        (e.style.display = 'none');
      var a = Ge(function (s) {
        return e.parentNode.insertBefore(s, e.nextSibling);
      }, t);
      return a;
    }
    function ku(e) {
      (e.off = dt),
        (e.on = pe),
        (e.wheelEventPixels = Ms),
        (e.Doc = kt),
        (e.splitLines = Ot),
        (e.countColumn = Te),
        (e.findColumn = Re),
        (e.isWordChar = ne),
        (e.Pass = qe),
        (e.signal = Ye),
        (e.Line = Hr),
        (e.changeEnd = gr),
        (e.scrollbarModel = ll),
        (e.Pos = L),
        (e.cmpPos = X),
        (e.modes = Pr),
        (e.mimeModes = Bt),
        (e.resolveMode = Ir),
        (e.getMode = zr),
        (e.modeExtensions = fr),
        (e.extendMode = Br),
        (e.copyState = Kt),
        (e.startState = Wr),
        (e.innerMode = sn),
        (e.commands = Nn),
        (e.keyMap = nr),
        (e.keyName = Gl),
        (e.isModifierKey = Kl),
        (e.lookupKey = $r),
        (e.normalizeKeyMap = Js),
        (e.StringStream = Je),
        (e.SharedTextMarker = Fn),
        (e.TextMarker = mr),
        (e.LineWidget = Mn),
        (e.e_preventDefault = ht),
        (e.e_stopPropagation = Nr),
        (e.e_stop = ar),
        (e.addClass = N),
        (e.contains = m),
        (e.rmClass = Ae),
        (e.keyNames = yr);
    }
    du(Ge), vu(Ge);
    var wu = 'iter insert remove copy getEditor constructor'.split(' ');
    for (var gi in kt.prototype)
      kt.prototype.hasOwnProperty(gi) &&
        te(wu, gi) < 0 &&
        (Ge.prototype[gi] = (function (e) {
          return function () {
            return e.apply(this.doc, arguments);
          };
        })(kt.prototype[gi]));
    return (
      Pt(kt),
      (Ge.inputStyles = { textarea: $e, contenteditable: je }),
      (Ge.defineMode = function (e) {
        !Ge.defaults.mode && e != 'null' && (Ge.defaults.mode = e),
          Wt.apply(this, arguments);
      }),
      (Ge.defineMIME = kr),
      Ge.defineMode('null', function () {
        return {
          token: function (e) {
            return e.skipToEnd();
          },
        };
      }),
      Ge.defineMIME('text/plain', 'null'),
      (Ge.defineExtension = function (e, t) {
        Ge.prototype[e] = t;
      }),
      (Ge.defineDocExtension = function (e, t) {
        kt.prototype[e] = t;
      }),
      (Ge.fromTextArea = bu),
      ku(Ge),
      (Ge.version = '5.65.15'),
      Ge
    );
  });
})(ba);
var Zt = ba.exports;
const Du = Su(Zt);
var da = { exports: {} },
  ha;
function ka() {
  return (
    ha ||
      ((ha = 1),
      (function (jt, Jt) {
        (function (F) {
          F(Zt);
        })(function (F) {
          F.defineMode('css', function (le, W) {
            var Ae = W.inline;
            W.propertyKeywords || (W = F.resolveMode('text/css'));
            var C = le.indentUnit,
              Y = W.tokenHooks,
              d = W.documentTypes || {},
              S = W.mediaTypes || {},
              w = W.mediaFeatures || {},
              m = W.mediaValueKeywords || {},
              y = W.propertyKeywords || {},
              N = W.nonStandardPropertyKeywords || {},
              re = W.fontProperties || {},
              p = W.counterDescriptors || {},
              c = W.colorKeywords || {},
              G = W.valueKeywords || {},
              ye = W.allowNested,
              R = W.lineComment,
              oe = W.supportsAtComponent === !0,
              Se = le.highlightNonStandardPropertyKeywords !== !1,
              Te,
              xe;
            function te(T, z) {
              return (Te = z), T;
            }
            function Ee(T, z) {
              var M = T.next();
              if (Y[M]) {
                var Ie = Y[M](T, z);
                if (Ie !== !1) return Ie;
              }
              if (M == '@')
                return T.eatWhile(/[\w\\\-]/), te('def', T.current());
              if (M == '=' || ((M == '~' || M == '|') && T.eat('=')))
                return te(null, 'compare');
              if (M == '"' || M == "'")
                return (z.tokenize = qe(M)), z.tokenize(T, z);
              if (M == '#') return T.eatWhile(/[\w\\\-]/), te('atom', 'hash');
              if (M == '!')
                return T.match(/^\s*\w*/), te('keyword', 'important');
              if (/\d/.test(M) || (M == '.' && T.eat(/\d/)))
                return T.eatWhile(/[\w.%]/), te('number', 'unit');
              if (M === '-') {
                if (/[\d.]/.test(T.peek()))
                  return T.eatWhile(/[\w.%]/), te('number', 'unit');
                if (T.match(/^-[\w\\\-]*/))
                  return (
                    T.eatWhile(/[\w\\\-]/),
                    T.match(/^\s*:/, !1)
                      ? te('variable-2', 'variable-definition')
                      : te('variable-2', 'variable')
                  );
                if (T.match(/^\w+-/)) return te('meta', 'meta');
              } else
                return /[,+>*\/]/.test(M)
                  ? te(null, 'select-op')
                  : M == '.' && T.match(/^-?[_a-z][_a-z0-9-]*/i)
                    ? te('qualifier', 'qualifier')
                    : /[:;{}\[\]\(\)]/.test(M)
                      ? te(null, M)
                      : T.match(/^[\w-.]+(?=\()/)
                        ? (/^(url(-prefix)?|domain|regexp)$/i.test(
                            T.current()
                          ) && (z.tokenize = Ve),
                          te('variable callee', 'variable'))
                        : /[\w\\\-]/.test(M)
                          ? (T.eatWhile(/[\w\\\-]/), te('property', 'word'))
                          : te(null, null);
            }
            function qe(T) {
              return function (z, M) {
                for (var Ie = !1, ne; (ne = z.next()) != null; ) {
                  if (ne == T && !Ie) {
                    T == ')' && z.backUp(1);
                    break;
                  }
                  Ie = !Ie && ne == '\\';
                }
                return (
                  (ne == T || (!Ie && T != ')')) && (M.tokenize = null),
                  te('string', 'string')
                );
              };
            }
            function Ve(T, z) {
              return (
                T.next(),
                T.match(/^\s*[\"\')]/, !1)
                  ? (z.tokenize = null)
                  : (z.tokenize = qe(')')),
                te(null, '(')
              );
            }
            function ct(T, z, M) {
              (this.type = T), (this.indent = z), (this.prev = M);
            }
            function Ne(T, z, M, Ie) {
              return (
                (T.context = new ct(
                  M,
                  z.indentation() + (Ie === !1 ? 0 : C),
                  T.context
                )),
                M
              );
            }
            function Re(T) {
              return (
                T.context.prev && (T.context = T.context.prev), T.context.type
              );
            }
            function Ue(T, z, M) {
              return Oe[M.context.type](T, z, M);
            }
            function et(T, z, M, Ie) {
              for (var ne = Ie || 1; ne > 0; ne--) M.context = M.context.prev;
              return Ue(T, z, M);
            }
            function he(T) {
              var z = T.current().toLowerCase();
              G.hasOwnProperty(z)
                ? (xe = 'atom')
                : c.hasOwnProperty(z)
                  ? (xe = 'keyword')
                  : (xe = 'variable');
            }
            var Oe = {};
            return (
              (Oe.top = function (T, z, M) {
                if (T == '{') return Ne(M, z, 'block');
                if (T == '}' && M.context.prev) return Re(M);
                if (oe && /@component/i.test(T))
                  return Ne(M, z, 'atComponentBlock');
                if (/^@(-moz-)?document$/i.test(T))
                  return Ne(M, z, 'documentTypes');
                if (/^@(media|supports|(-moz-)?document|import)$/i.test(T))
                  return Ne(M, z, 'atBlock');
                if (/^@(font-face|counter-style)/i.test(T))
                  return (M.stateArg = T), 'restricted_atBlock_before';
                if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(T))
                  return 'keyframes';
                if (T && T.charAt(0) == '@') return Ne(M, z, 'at');
                if (T == 'hash') xe = 'builtin';
                else if (T == 'word') xe = 'tag';
                else {
                  if (T == 'variable-definition') return 'maybeprop';
                  if (T == 'interpolation') return Ne(M, z, 'interpolation');
                  if (T == ':') return 'pseudo';
                  if (ye && T == '(') return Ne(M, z, 'parens');
                }
                return M.context.type;
              }),
              (Oe.block = function (T, z, M) {
                if (T == 'word') {
                  var Ie = z.current().toLowerCase();
                  return y.hasOwnProperty(Ie)
                    ? ((xe = 'property'), 'maybeprop')
                    : N.hasOwnProperty(Ie)
                      ? ((xe = Se ? 'string-2' : 'property'), 'maybeprop')
                      : ye
                        ? ((xe = z.match(/^\s*:(?:\s|$)/, !1)
                            ? 'property'
                            : 'tag'),
                          'block')
                        : ((xe += ' error'), 'maybeprop');
                } else
                  return T == 'meta'
                    ? 'block'
                    : !ye && (T == 'hash' || T == 'qualifier')
                      ? ((xe = 'error'), 'block')
                      : Oe.top(T, z, M);
              }),
              (Oe.maybeprop = function (T, z, M) {
                return T == ':' ? Ne(M, z, 'prop') : Ue(T, z, M);
              }),
              (Oe.prop = function (T, z, M) {
                if (T == ';') return Re(M);
                if (T == '{' && ye) return Ne(M, z, 'propBlock');
                if (T == '}' || T == '{') return et(T, z, M);
                if (T == '(') return Ne(M, z, 'parens');
                if (
                  T == 'hash' &&
                  !/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(
                    z.current()
                  )
                )
                  xe += ' error';
                else if (T == 'word') he(z);
                else if (T == 'interpolation') return Ne(M, z, 'interpolation');
                return 'prop';
              }),
              (Oe.propBlock = function (T, z, M) {
                return T == '}'
                  ? Re(M)
                  : T == 'word'
                    ? ((xe = 'property'), 'maybeprop')
                    : M.context.type;
              }),
              (Oe.parens = function (T, z, M) {
                return T == '{' || T == '}'
                  ? et(T, z, M)
                  : T == ')'
                    ? Re(M)
                    : T == '('
                      ? Ne(M, z, 'parens')
                      : T == 'interpolation'
                        ? Ne(M, z, 'interpolation')
                        : (T == 'word' && he(z), 'parens');
              }),
              (Oe.pseudo = function (T, z, M) {
                return T == 'meta'
                  ? 'pseudo'
                  : T == 'word'
                    ? ((xe = 'variable-3'), M.context.type)
                    : Ue(T, z, M);
              }),
              (Oe.documentTypes = function (T, z, M) {
                return T == 'word' && d.hasOwnProperty(z.current())
                  ? ((xe = 'tag'), M.context.type)
                  : Oe.atBlock(T, z, M);
              }),
              (Oe.atBlock = function (T, z, M) {
                if (T == '(') return Ne(M, z, 'atBlock_parens');
                if (T == '}' || T == ';') return et(T, z, M);
                if (T == '{') return Re(M) && Ne(M, z, ye ? 'block' : 'top');
                if (T == 'interpolation') return Ne(M, z, 'interpolation');
                if (T == 'word') {
                  var Ie = z.current().toLowerCase();
                  Ie == 'only' || Ie == 'not' || Ie == 'and' || Ie == 'or'
                    ? (xe = 'keyword')
                    : S.hasOwnProperty(Ie)
                      ? (xe = 'attribute')
                      : w.hasOwnProperty(Ie)
                        ? (xe = 'property')
                        : m.hasOwnProperty(Ie)
                          ? (xe = 'keyword')
                          : y.hasOwnProperty(Ie)
                            ? (xe = 'property')
                            : N.hasOwnProperty(Ie)
                              ? (xe = Se ? 'string-2' : 'property')
                              : G.hasOwnProperty(Ie)
                                ? (xe = 'atom')
                                : c.hasOwnProperty(Ie)
                                  ? (xe = 'keyword')
                                  : (xe = 'error');
                }
                return M.context.type;
              }),
              (Oe.atComponentBlock = function (T, z, M) {
                return T == '}'
                  ? et(T, z, M)
                  : T == '{'
                    ? Re(M) && Ne(M, z, ye ? 'block' : 'top', !1)
                    : (T == 'word' && (xe = 'error'), M.context.type);
              }),
              (Oe.atBlock_parens = function (T, z, M) {
                return T == ')'
                  ? Re(M)
                  : T == '{' || T == '}'
                    ? et(T, z, M, 2)
                    : Oe.atBlock(T, z, M);
              }),
              (Oe.restricted_atBlock_before = function (T, z, M) {
                return T == '{'
                  ? Ne(M, z, 'restricted_atBlock')
                  : T == 'word' && M.stateArg == '@counter-style'
                    ? ((xe = 'variable'), 'restricted_atBlock_before')
                    : Ue(T, z, M);
              }),
              (Oe.restricted_atBlock = function (T, z, M) {
                return T == '}'
                  ? ((M.stateArg = null), Re(M))
                  : T == 'word'
                    ? ((M.stateArg == '@font-face' &&
                        !re.hasOwnProperty(z.current().toLowerCase())) ||
                      (M.stateArg == '@counter-style' &&
                        !p.hasOwnProperty(z.current().toLowerCase()))
                        ? (xe = 'error')
                        : (xe = 'property'),
                      'maybeprop')
                    : 'restricted_atBlock';
              }),
              (Oe.keyframes = function (T, z, M) {
                return T == 'word'
                  ? ((xe = 'variable'), 'keyframes')
                  : T == '{'
                    ? Ne(M, z, 'top')
                    : Ue(T, z, M);
              }),
              (Oe.at = function (T, z, M) {
                return T == ';'
                  ? Re(M)
                  : T == '{' || T == '}'
                    ? et(T, z, M)
                    : (T == 'word'
                        ? (xe = 'tag')
                        : T == 'hash' && (xe = 'builtin'),
                      'at');
              }),
              (Oe.interpolation = function (T, z, M) {
                return T == '}'
                  ? Re(M)
                  : T == '{' || T == ';'
                    ? et(T, z, M)
                    : (T == 'word'
                        ? (xe = 'variable')
                        : T != 'variable' &&
                          T != '(' &&
                          T != ')' &&
                          (xe = 'error'),
                      'interpolation');
              }),
              {
                startState: function (T) {
                  return {
                    tokenize: null,
                    state: Ae ? 'block' : 'top',
                    stateArg: null,
                    context: new ct(Ae ? 'block' : 'top', T || 0, null),
                  };
                },
                token: function (T, z) {
                  if (!z.tokenize && T.eatSpace()) return null;
                  var M = (z.tokenize || Ee)(T, z);
                  return (
                    M && typeof M == 'object' && ((Te = M[1]), (M = M[0])),
                    (xe = M),
                    Te != 'comment' && (z.state = Oe[z.state](Te, T, z)),
                    xe
                  );
                },
                indent: function (T, z) {
                  var M = T.context,
                    Ie = z && z.charAt(0),
                    ne = M.indent;
                  return (
                    M.type == 'prop' &&
                      (Ie == '}' || Ie == ')') &&
                      (M = M.prev),
                    M.prev &&
                      (Ie == '}' &&
                      (M.type == 'block' ||
                        M.type == 'top' ||
                        M.type == 'interpolation' ||
                        M.type == 'restricted_atBlock')
                        ? ((M = M.prev), (ne = M.indent))
                        : ((Ie == ')' &&
                            (M.type == 'parens' ||
                              M.type == 'atBlock_parens')) ||
                            (Ie == '{' &&
                              (M.type == 'at' || M.type == 'atBlock'))) &&
                          (ne = Math.max(0, M.indent - C))),
                    ne
                  );
                },
                electricChars: '}',
                blockCommentStart: '/*',
                blockCommentEnd: '*/',
                blockCommentContinue: ' * ',
                lineComment: R,
                fold: 'brace',
              }
            );
          });
          function Pe(le) {
            for (var W = {}, Ae = 0; Ae < le.length; ++Ae)
              W[le[Ae].toLowerCase()] = !0;
            return W;
          }
          var I = ['domain', 'regexp', 'url', 'url-prefix'],
            de = Pe(I),
            Me = [
              'all',
              'aural',
              'braille',
              'handheld',
              'print',
              'projection',
              'screen',
              'tty',
              'tv',
              'embossed',
            ],
            se = Pe(Me),
            k = [
              'width',
              'min-width',
              'max-width',
              'height',
              'min-height',
              'max-height',
              'device-width',
              'min-device-width',
              'max-device-width',
              'device-height',
              'min-device-height',
              'max-device-height',
              'aspect-ratio',
              'min-aspect-ratio',
              'max-aspect-ratio',
              'device-aspect-ratio',
              'min-device-aspect-ratio',
              'max-device-aspect-ratio',
              'color',
              'min-color',
              'max-color',
              'color-index',
              'min-color-index',
              'max-color-index',
              'monochrome',
              'min-monochrome',
              'max-monochrome',
              'resolution',
              'min-resolution',
              'max-resolution',
              'scan',
              'grid',
              'orientation',
              'device-pixel-ratio',
              'min-device-pixel-ratio',
              'max-device-pixel-ratio',
              'pointer',
              'any-pointer',
              'hover',
              'any-hover',
              'prefers-color-scheme',
              'dynamic-range',
              'video-dynamic-range',
            ],
            ee = Pe(k),
            U = [
              'landscape',
              'portrait',
              'none',
              'coarse',
              'fine',
              'on-demand',
              'hover',
              'interlace',
              'progressive',
              'dark',
              'light',
              'standard',
              'high',
            ],
            ve = Pe(U),
            O = [
              'align-content',
              'align-items',
              'align-self',
              'alignment-adjust',
              'alignment-baseline',
              'all',
              'anchor-point',
              'animation',
              'animation-delay',
              'animation-direction',
              'animation-duration',
              'animation-fill-mode',
              'animation-iteration-count',
              'animation-name',
              'animation-play-state',
              'animation-timing-function',
              'appearance',
              'azimuth',
              'backdrop-filter',
              'backface-visibility',
              'background',
              'background-attachment',
              'background-blend-mode',
              'background-clip',
              'background-color',
              'background-image',
              'background-origin',
              'background-position',
              'background-position-x',
              'background-position-y',
              'background-repeat',
              'background-size',
              'baseline-shift',
              'binding',
              'bleed',
              'block-size',
              'bookmark-label',
              'bookmark-level',
              'bookmark-state',
              'bookmark-target',
              'border',
              'border-bottom',
              'border-bottom-color',
              'border-bottom-left-radius',
              'border-bottom-right-radius',
              'border-bottom-style',
              'border-bottom-width',
              'border-collapse',
              'border-color',
              'border-image',
              'border-image-outset',
              'border-image-repeat',
              'border-image-slice',
              'border-image-source',
              'border-image-width',
              'border-left',
              'border-left-color',
              'border-left-style',
              'border-left-width',
              'border-radius',
              'border-right',
              'border-right-color',
              'border-right-style',
              'border-right-width',
              'border-spacing',
              'border-style',
              'border-top',
              'border-top-color',
              'border-top-left-radius',
              'border-top-right-radius',
              'border-top-style',
              'border-top-width',
              'border-width',
              'bottom',
              'box-decoration-break',
              'box-shadow',
              'box-sizing',
              'break-after',
              'break-before',
              'break-inside',
              'caption-side',
              'caret-color',
              'clear',
              'clip',
              'color',
              'color-profile',
              'column-count',
              'column-fill',
              'column-gap',
              'column-rule',
              'column-rule-color',
              'column-rule-style',
              'column-rule-width',
              'column-span',
              'column-width',
              'columns',
              'contain',
              'content',
              'counter-increment',
              'counter-reset',
              'crop',
              'cue',
              'cue-after',
              'cue-before',
              'cursor',
              'direction',
              'display',
              'dominant-baseline',
              'drop-initial-after-adjust',
              'drop-initial-after-align',
              'drop-initial-before-adjust',
              'drop-initial-before-align',
              'drop-initial-size',
              'drop-initial-value',
              'elevation',
              'empty-cells',
              'fit',
              'fit-content',
              'fit-position',
              'flex',
              'flex-basis',
              'flex-direction',
              'flex-flow',
              'flex-grow',
              'flex-shrink',
              'flex-wrap',
              'float',
              'float-offset',
              'flow-from',
              'flow-into',
              'font',
              'font-family',
              'font-feature-settings',
              'font-kerning',
              'font-language-override',
              'font-optical-sizing',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-synthesis',
              'font-variant',
              'font-variant-alternates',
              'font-variant-caps',
              'font-variant-east-asian',
              'font-variant-ligatures',
              'font-variant-numeric',
              'font-variant-position',
              'font-variation-settings',
              'font-weight',
              'gap',
              'grid',
              'grid-area',
              'grid-auto-columns',
              'grid-auto-flow',
              'grid-auto-rows',
              'grid-column',
              'grid-column-end',
              'grid-column-gap',
              'grid-column-start',
              'grid-gap',
              'grid-row',
              'grid-row-end',
              'grid-row-gap',
              'grid-row-start',
              'grid-template',
              'grid-template-areas',
              'grid-template-columns',
              'grid-template-rows',
              'hanging-punctuation',
              'height',
              'hyphens',
              'icon',
              'image-orientation',
              'image-rendering',
              'image-resolution',
              'inline-box-align',
              'inset',
              'inset-block',
              'inset-block-end',
              'inset-block-start',
              'inset-inline',
              'inset-inline-end',
              'inset-inline-start',
              'isolation',
              'justify-content',
              'justify-items',
              'justify-self',
              'left',
              'letter-spacing',
              'line-break',
              'line-height',
              'line-height-step',
              'line-stacking',
              'line-stacking-ruby',
              'line-stacking-shift',
              'line-stacking-strategy',
              'list-style',
              'list-style-image',
              'list-style-position',
              'list-style-type',
              'margin',
              'margin-bottom',
              'margin-left',
              'margin-right',
              'margin-top',
              'marks',
              'marquee-direction',
              'marquee-loop',
              'marquee-play-count',
              'marquee-speed',
              'marquee-style',
              'mask-clip',
              'mask-composite',
              'mask-image',
              'mask-mode',
              'mask-origin',
              'mask-position',
              'mask-repeat',
              'mask-size',
              'mask-type',
              'max-block-size',
              'max-height',
              'max-inline-size',
              'max-width',
              'min-block-size',
              'min-height',
              'min-inline-size',
              'min-width',
              'mix-blend-mode',
              'move-to',
              'nav-down',
              'nav-index',
              'nav-left',
              'nav-right',
              'nav-up',
              'object-fit',
              'object-position',
              'offset',
              'offset-anchor',
              'offset-distance',
              'offset-path',
              'offset-position',
              'offset-rotate',
              'opacity',
              'order',
              'orphans',
              'outline',
              'outline-color',
              'outline-offset',
              'outline-style',
              'outline-width',
              'overflow',
              'overflow-style',
              'overflow-wrap',
              'overflow-x',
              'overflow-y',
              'padding',
              'padding-bottom',
              'padding-left',
              'padding-right',
              'padding-top',
              'page',
              'page-break-after',
              'page-break-before',
              'page-break-inside',
              'page-policy',
              'pause',
              'pause-after',
              'pause-before',
              'perspective',
              'perspective-origin',
              'pitch',
              'pitch-range',
              'place-content',
              'place-items',
              'place-self',
              'play-during',
              'position',
              'presentation-level',
              'punctuation-trim',
              'quotes',
              'region-break-after',
              'region-break-before',
              'region-break-inside',
              'region-fragment',
              'rendering-intent',
              'resize',
              'rest',
              'rest-after',
              'rest-before',
              'richness',
              'right',
              'rotate',
              'rotation',
              'rotation-point',
              'row-gap',
              'ruby-align',
              'ruby-overhang',
              'ruby-position',
              'ruby-span',
              'scale',
              'scroll-behavior',
              'scroll-margin',
              'scroll-margin-block',
              'scroll-margin-block-end',
              'scroll-margin-block-start',
              'scroll-margin-bottom',
              'scroll-margin-inline',
              'scroll-margin-inline-end',
              'scroll-margin-inline-start',
              'scroll-margin-left',
              'scroll-margin-right',
              'scroll-margin-top',
              'scroll-padding',
              'scroll-padding-block',
              'scroll-padding-block-end',
              'scroll-padding-block-start',
              'scroll-padding-bottom',
              'scroll-padding-inline',
              'scroll-padding-inline-end',
              'scroll-padding-inline-start',
              'scroll-padding-left',
              'scroll-padding-right',
              'scroll-padding-top',
              'scroll-snap-align',
              'scroll-snap-type',
              'shape-image-threshold',
              'shape-inside',
              'shape-margin',
              'shape-outside',
              'size',
              'speak',
              'speak-as',
              'speak-header',
              'speak-numeral',
              'speak-punctuation',
              'speech-rate',
              'stress',
              'string-set',
              'tab-size',
              'table-layout',
              'target',
              'target-name',
              'target-new',
              'target-position',
              'text-align',
              'text-align-last',
              'text-combine-upright',
              'text-decoration',
              'text-decoration-color',
              'text-decoration-line',
              'text-decoration-skip',
              'text-decoration-skip-ink',
              'text-decoration-style',
              'text-emphasis',
              'text-emphasis-color',
              'text-emphasis-position',
              'text-emphasis-style',
              'text-height',
              'text-indent',
              'text-justify',
              'text-orientation',
              'text-outline',
              'text-overflow',
              'text-rendering',
              'text-shadow',
              'text-size-adjust',
              'text-space-collapse',
              'text-transform',
              'text-underline-position',
              'text-wrap',
              'top',
              'touch-action',
              'transform',
              'transform-origin',
              'transform-style',
              'transition',
              'transition-delay',
              'transition-duration',
              'transition-property',
              'transition-timing-function',
              'translate',
              'unicode-bidi',
              'user-select',
              'vertical-align',
              'visibility',
              'voice-balance',
              'voice-duration',
              'voice-family',
              'voice-pitch',
              'voice-range',
              'voice-rate',
              'voice-stress',
              'voice-volume',
              'volume',
              'white-space',
              'widows',
              'width',
              'will-change',
              'word-break',
              'word-spacing',
              'word-wrap',
              'writing-mode',
              'z-index',
              'clip-path',
              'clip-rule',
              'mask',
              'enable-background',
              'filter',
              'flood-color',
              'flood-opacity',
              'lighting-color',
              'stop-color',
              'stop-opacity',
              'pointer-events',
              'color-interpolation',
              'color-interpolation-filters',
              'color-rendering',
              'fill',
              'fill-opacity',
              'fill-rule',
              'image-rendering',
              'marker',
              'marker-end',
              'marker-mid',
              'marker-start',
              'paint-order',
              'shape-rendering',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'text-rendering',
              'baseline-shift',
              'dominant-baseline',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'text-anchor',
              'writing-mode',
            ],
            H = Pe(O),
            P = [
              'accent-color',
              'aspect-ratio',
              'border-block',
              'border-block-color',
              'border-block-end',
              'border-block-end-color',
              'border-block-end-style',
              'border-block-end-width',
              'border-block-start',
              'border-block-start-color',
              'border-block-start-style',
              'border-block-start-width',
              'border-block-style',
              'border-block-width',
              'border-inline',
              'border-inline-color',
              'border-inline-end',
              'border-inline-end-color',
              'border-inline-end-style',
              'border-inline-end-width',
              'border-inline-start',
              'border-inline-start-color',
              'border-inline-start-style',
              'border-inline-start-width',
              'border-inline-style',
              'border-inline-width',
              'content-visibility',
              'margin-block',
              'margin-block-end',
              'margin-block-start',
              'margin-inline',
              'margin-inline-end',
              'margin-inline-start',
              'overflow-anchor',
              'overscroll-behavior',
              'padding-block',
              'padding-block-end',
              'padding-block-start',
              'padding-inline',
              'padding-inline-end',
              'padding-inline-start',
              'scroll-snap-stop',
              'scrollbar-3d-light-color',
              'scrollbar-arrow-color',
              'scrollbar-base-color',
              'scrollbar-dark-shadow-color',
              'scrollbar-face-color',
              'scrollbar-highlight-color',
              'scrollbar-shadow-color',
              'scrollbar-track-color',
              'searchfield-cancel-button',
              'searchfield-decoration',
              'searchfield-results-button',
              'searchfield-results-decoration',
              'shape-inside',
              'zoom',
            ],
            K = Pe(P),
            be = [
              'font-display',
              'font-family',
              'src',
              'unicode-range',
              'font-variant',
              'font-feature-settings',
              'font-stretch',
              'font-weight',
              'font-style',
            ],
            ke = Pe(be),
            Q = [
              'additive-symbols',
              'fallback',
              'negative',
              'pad',
              'prefix',
              'range',
              'speak-as',
              'suffix',
              'symbols',
              'system',
            ],
            V = Pe(Q),
            $ = [
              'aliceblue',
              'antiquewhite',
              'aqua',
              'aquamarine',
              'azure',
              'beige',
              'bisque',
              'black',
              'blanchedalmond',
              'blue',
              'blueviolet',
              'brown',
              'burlywood',
              'cadetblue',
              'chartreuse',
              'chocolate',
              'coral',
              'cornflowerblue',
              'cornsilk',
              'crimson',
              'cyan',
              'darkblue',
              'darkcyan',
              'darkgoldenrod',
              'darkgray',
              'darkgreen',
              'darkgrey',
              'darkkhaki',
              'darkmagenta',
              'darkolivegreen',
              'darkorange',
              'darkorchid',
              'darkred',
              'darksalmon',
              'darkseagreen',
              'darkslateblue',
              'darkslategray',
              'darkslategrey',
              'darkturquoise',
              'darkviolet',
              'deeppink',
              'deepskyblue',
              'dimgray',
              'dimgrey',
              'dodgerblue',
              'firebrick',
              'floralwhite',
              'forestgreen',
              'fuchsia',
              'gainsboro',
              'ghostwhite',
              'gold',
              'goldenrod',
              'gray',
              'grey',
              'green',
              'greenyellow',
              'honeydew',
              'hotpink',
              'indianred',
              'indigo',
              'ivory',
              'khaki',
              'lavender',
              'lavenderblush',
              'lawngreen',
              'lemonchiffon',
              'lightblue',
              'lightcoral',
              'lightcyan',
              'lightgoldenrodyellow',
              'lightgray',
              'lightgreen',
              'lightgrey',
              'lightpink',
              'lightsalmon',
              'lightseagreen',
              'lightskyblue',
              'lightslategray',
              'lightslategrey',
              'lightsteelblue',
              'lightyellow',
              'lime',
              'limegreen',
              'linen',
              'magenta',
              'maroon',
              'mediumaquamarine',
              'mediumblue',
              'mediumorchid',
              'mediumpurple',
              'mediumseagreen',
              'mediumslateblue',
              'mediumspringgreen',
              'mediumturquoise',
              'mediumvioletred',
              'midnightblue',
              'mintcream',
              'mistyrose',
              'moccasin',
              'navajowhite',
              'navy',
              'oldlace',
              'olive',
              'olivedrab',
              'orange',
              'orangered',
              'orchid',
              'palegoldenrod',
              'palegreen',
              'paleturquoise',
              'palevioletred',
              'papayawhip',
              'peachpuff',
              'peru',
              'pink',
              'plum',
              'powderblue',
              'purple',
              'rebeccapurple',
              'red',
              'rosybrown',
              'royalblue',
              'saddlebrown',
              'salmon',
              'sandybrown',
              'seagreen',
              'seashell',
              'sienna',
              'silver',
              'skyblue',
              'slateblue',
              'slategray',
              'slategrey',
              'snow',
              'springgreen',
              'steelblue',
              'tan',
              'teal',
              'thistle',
              'tomato',
              'turquoise',
              'violet',
              'wheat',
              'white',
              'whitesmoke',
              'yellow',
              'yellowgreen',
            ],
            ie = Pe($),
            Fe = [
              'above',
              'absolute',
              'activeborder',
              'additive',
              'activecaption',
              'afar',
              'after-white-space',
              'ahead',
              'alias',
              'all',
              'all-scroll',
              'alphabetic',
              'alternate',
              'always',
              'amharic',
              'amharic-abegede',
              'antialiased',
              'appworkspace',
              'arabic-indic',
              'armenian',
              'asterisks',
              'attr',
              'auto',
              'auto-flow',
              'avoid',
              'avoid-column',
              'avoid-page',
              'avoid-region',
              'axis-pan',
              'background',
              'backwards',
              'baseline',
              'below',
              'bidi-override',
              'binary',
              'bengali',
              'blink',
              'block',
              'block-axis',
              'blur',
              'bold',
              'bolder',
              'border',
              'border-box',
              'both',
              'bottom',
              'break',
              'break-all',
              'break-word',
              'brightness',
              'bullets',
              'button',
              'buttonface',
              'buttonhighlight',
              'buttonshadow',
              'buttontext',
              'calc',
              'cambodian',
              'capitalize',
              'caps-lock-indicator',
              'caption',
              'captiontext',
              'caret',
              'cell',
              'center',
              'checkbox',
              'circle',
              'cjk-decimal',
              'cjk-earthly-branch',
              'cjk-heavenly-stem',
              'cjk-ideographic',
              'clear',
              'clip',
              'close-quote',
              'col-resize',
              'collapse',
              'color',
              'color-burn',
              'color-dodge',
              'column',
              'column-reverse',
              'compact',
              'condensed',
              'conic-gradient',
              'contain',
              'content',
              'contents',
              'content-box',
              'context-menu',
              'continuous',
              'contrast',
              'copy',
              'counter',
              'counters',
              'cover',
              'crop',
              'cross',
              'crosshair',
              'cubic-bezier',
              'currentcolor',
              'cursive',
              'cyclic',
              'darken',
              'dashed',
              'decimal',
              'decimal-leading-zero',
              'default',
              'default-button',
              'dense',
              'destination-atop',
              'destination-in',
              'destination-out',
              'destination-over',
              'devanagari',
              'difference',
              'disc',
              'discard',
              'disclosure-closed',
              'disclosure-open',
              'document',
              'dot-dash',
              'dot-dot-dash',
              'dotted',
              'double',
              'down',
              'drop-shadow',
              'e-resize',
              'ease',
              'ease-in',
              'ease-in-out',
              'ease-out',
              'element',
              'ellipse',
              'ellipsis',
              'embed',
              'end',
              'ethiopic',
              'ethiopic-abegede',
              'ethiopic-abegede-am-et',
              'ethiopic-abegede-gez',
              'ethiopic-abegede-ti-er',
              'ethiopic-abegede-ti-et',
              'ethiopic-halehame-aa-er',
              'ethiopic-halehame-aa-et',
              'ethiopic-halehame-am-et',
              'ethiopic-halehame-gez',
              'ethiopic-halehame-om-et',
              'ethiopic-halehame-sid-et',
              'ethiopic-halehame-so-et',
              'ethiopic-halehame-ti-er',
              'ethiopic-halehame-ti-et',
              'ethiopic-halehame-tig',
              'ethiopic-numeric',
              'ew-resize',
              'exclusion',
              'expanded',
              'extends',
              'extra-condensed',
              'extra-expanded',
              'fantasy',
              'fast',
              'fill',
              'fill-box',
              'fixed',
              'flat',
              'flex',
              'flex-end',
              'flex-start',
              'footnotes',
              'forwards',
              'from',
              'geometricPrecision',
              'georgian',
              'grayscale',
              'graytext',
              'grid',
              'groove',
              'gujarati',
              'gurmukhi',
              'hand',
              'hangul',
              'hangul-consonant',
              'hard-light',
              'hebrew',
              'help',
              'hidden',
              'hide',
              'higher',
              'highlight',
              'highlighttext',
              'hiragana',
              'hiragana-iroha',
              'horizontal',
              'hsl',
              'hsla',
              'hue',
              'hue-rotate',
              'icon',
              'ignore',
              'inactiveborder',
              'inactivecaption',
              'inactivecaptiontext',
              'infinite',
              'infobackground',
              'infotext',
              'inherit',
              'initial',
              'inline',
              'inline-axis',
              'inline-block',
              'inline-flex',
              'inline-grid',
              'inline-table',
              'inset',
              'inside',
              'intrinsic',
              'invert',
              'italic',
              'japanese-formal',
              'japanese-informal',
              'justify',
              'kannada',
              'katakana',
              'katakana-iroha',
              'keep-all',
              'khmer',
              'korean-hangul-formal',
              'korean-hanja-formal',
              'korean-hanja-informal',
              'landscape',
              'lao',
              'large',
              'larger',
              'left',
              'level',
              'lighter',
              'lighten',
              'line-through',
              'linear',
              'linear-gradient',
              'lines',
              'list-item',
              'listbox',
              'listitem',
              'local',
              'logical',
              'loud',
              'lower',
              'lower-alpha',
              'lower-armenian',
              'lower-greek',
              'lower-hexadecimal',
              'lower-latin',
              'lower-norwegian',
              'lower-roman',
              'lowercase',
              'ltr',
              'luminosity',
              'malayalam',
              'manipulation',
              'match',
              'matrix',
              'matrix3d',
              'media-play-button',
              'media-slider',
              'media-sliderthumb',
              'media-volume-slider',
              'media-volume-sliderthumb',
              'medium',
              'menu',
              'menulist',
              'menulist-button',
              'menutext',
              'message-box',
              'middle',
              'min-intrinsic',
              'mix',
              'mongolian',
              'monospace',
              'move',
              'multiple',
              'multiple_mask_images',
              'multiply',
              'myanmar',
              'n-resize',
              'narrower',
              'ne-resize',
              'nesw-resize',
              'no-close-quote',
              'no-drop',
              'no-open-quote',
              'no-repeat',
              'none',
              'normal',
              'not-allowed',
              'nowrap',
              'ns-resize',
              'numbers',
              'numeric',
              'nw-resize',
              'nwse-resize',
              'oblique',
              'octal',
              'opacity',
              'open-quote',
              'optimizeLegibility',
              'optimizeSpeed',
              'oriya',
              'oromo',
              'outset',
              'outside',
              'outside-shape',
              'overlay',
              'overline',
              'padding',
              'padding-box',
              'painted',
              'page',
              'paused',
              'persian',
              'perspective',
              'pinch-zoom',
              'plus-darker',
              'plus-lighter',
              'pointer',
              'polygon',
              'portrait',
              'pre',
              'pre-line',
              'pre-wrap',
              'preserve-3d',
              'progress',
              'push-button',
              'radial-gradient',
              'radio',
              'read-only',
              'read-write',
              'read-write-plaintext-only',
              'rectangle',
              'region',
              'relative',
              'repeat',
              'repeating-linear-gradient',
              'repeating-radial-gradient',
              'repeating-conic-gradient',
              'repeat-x',
              'repeat-y',
              'reset',
              'reverse',
              'rgb',
              'rgba',
              'ridge',
              'right',
              'rotate',
              'rotate3d',
              'rotateX',
              'rotateY',
              'rotateZ',
              'round',
              'row',
              'row-resize',
              'row-reverse',
              'rtl',
              'run-in',
              'running',
              's-resize',
              'sans-serif',
              'saturate',
              'saturation',
              'scale',
              'scale3d',
              'scaleX',
              'scaleY',
              'scaleZ',
              'screen',
              'scroll',
              'scrollbar',
              'scroll-position',
              'se-resize',
              'searchfield',
              'searchfield-cancel-button',
              'searchfield-decoration',
              'searchfield-results-button',
              'searchfield-results-decoration',
              'self-start',
              'self-end',
              'semi-condensed',
              'semi-expanded',
              'separate',
              'sepia',
              'serif',
              'show',
              'sidama',
              'simp-chinese-formal',
              'simp-chinese-informal',
              'single',
              'skew',
              'skewX',
              'skewY',
              'skip-white-space',
              'slide',
              'slider-horizontal',
              'slider-vertical',
              'sliderthumb-horizontal',
              'sliderthumb-vertical',
              'slow',
              'small',
              'small-caps',
              'small-caption',
              'smaller',
              'soft-light',
              'solid',
              'somali',
              'source-atop',
              'source-in',
              'source-out',
              'source-over',
              'space',
              'space-around',
              'space-between',
              'space-evenly',
              'spell-out',
              'square',
              'square-button',
              'start',
              'static',
              'status-bar',
              'stretch',
              'stroke',
              'stroke-box',
              'sub',
              'subpixel-antialiased',
              'svg_masks',
              'super',
              'sw-resize',
              'symbolic',
              'symbols',
              'system-ui',
              'table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row',
              'table-row-group',
              'tamil',
              'telugu',
              'text',
              'text-bottom',
              'text-top',
              'textarea',
              'textfield',
              'thai',
              'thick',
              'thin',
              'threeddarkshadow',
              'threedface',
              'threedhighlight',
              'threedlightshadow',
              'threedshadow',
              'tibetan',
              'tigre',
              'tigrinya-er',
              'tigrinya-er-abegede',
              'tigrinya-et',
              'tigrinya-et-abegede',
              'to',
              'top',
              'trad-chinese-formal',
              'trad-chinese-informal',
              'transform',
              'translate',
              'translate3d',
              'translateX',
              'translateY',
              'translateZ',
              'transparent',
              'ultra-condensed',
              'ultra-expanded',
              'underline',
              'unidirectional-pan',
              'unset',
              'up',
              'upper-alpha',
              'upper-armenian',
              'upper-greek',
              'upper-hexadecimal',
              'upper-latin',
              'upper-norwegian',
              'upper-roman',
              'uppercase',
              'urdu',
              'url',
              'var',
              'vertical',
              'vertical-text',
              'view-box',
              'visible',
              'visibleFill',
              'visiblePainted',
              'visibleStroke',
              'visual',
              'w-resize',
              'wait',
              'wave',
              'wider',
              'window',
              'windowframe',
              'windowtext',
              'words',
              'wrap',
              'wrap-reverse',
              'x-large',
              'x-small',
              'xor',
              'xx-large',
              'xx-small',
            ],
            me = Pe(Fe),
            ue = I.concat(Me)
              .concat(k)
              .concat(U)
              .concat(O)
              .concat(P)
              .concat($)
              .concat(Fe);
          F.registerHelper('hintWords', 'css', ue);
          function ze(le, W) {
            for (var Ae = !1, C; (C = le.next()) != null; ) {
              if (Ae && C == '/') {
                W.tokenize = null;
                break;
              }
              Ae = C == '*';
            }
            return ['comment', 'comment'];
          }
          F.defineMIME('text/css', {
            documentTypes: de,
            mediaTypes: se,
            mediaFeatures: ee,
            mediaValueKeywords: ve,
            propertyKeywords: H,
            nonStandardPropertyKeywords: K,
            fontProperties: ke,
            counterDescriptors: V,
            colorKeywords: ie,
            valueKeywords: me,
            tokenHooks: {
              '/': function (le, W) {
                return le.eat('*') ? ((W.tokenize = ze), ze(le, W)) : !1;
              },
            },
            name: 'css',
          }),
            F.defineMIME('text/x-scss', {
              mediaTypes: se,
              mediaFeatures: ee,
              mediaValueKeywords: ve,
              propertyKeywords: H,
              nonStandardPropertyKeywords: K,
              colorKeywords: ie,
              valueKeywords: me,
              fontProperties: ke,
              allowNested: !0,
              lineComment: '//',
              tokenHooks: {
                '/': function (le, W) {
                  return le.eat('/')
                    ? (le.skipToEnd(), ['comment', 'comment'])
                    : le.eat('*')
                      ? ((W.tokenize = ze), ze(le, W))
                      : ['operator', 'operator'];
                },
                ':': function (le) {
                  return le.match(/^\s*\{/, !1) ? [null, null] : !1;
                },
                $: function (le) {
                  return (
                    le.match(/^[\w-]+/),
                    le.match(/^\s*:/, !1)
                      ? ['variable-2', 'variable-definition']
                      : ['variable-2', 'variable']
                  );
                },
                '#': function (le) {
                  return le.eat('{') ? [null, 'interpolation'] : !1;
                },
              },
              name: 'css',
              helperType: 'scss',
            }),
            F.defineMIME('text/x-less', {
              mediaTypes: se,
              mediaFeatures: ee,
              mediaValueKeywords: ve,
              propertyKeywords: H,
              nonStandardPropertyKeywords: K,
              colorKeywords: ie,
              valueKeywords: me,
              fontProperties: ke,
              allowNested: !0,
              lineComment: '//',
              tokenHooks: {
                '/': function (le, W) {
                  return le.eat('/')
                    ? (le.skipToEnd(), ['comment', 'comment'])
                    : le.eat('*')
                      ? ((W.tokenize = ze), ze(le, W))
                      : ['operator', 'operator'];
                },
                '@': function (le) {
                  return le.eat('{')
                    ? [null, 'interpolation']
                    : le.match(
                          /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                          !1
                        )
                      ? !1
                      : (le.eatWhile(/[\w\\\-]/),
                        le.match(/^\s*:/, !1)
                          ? ['variable-2', 'variable-definition']
                          : ['variable-2', 'variable']);
                },
                '&': function () {
                  return ['atom', 'atom'];
                },
              },
              name: 'css',
              helperType: 'less',
            }),
            F.defineMIME('text/x-gss', {
              documentTypes: de,
              mediaTypes: se,
              mediaFeatures: ee,
              propertyKeywords: H,
              nonStandardPropertyKeywords: K,
              fontProperties: ke,
              counterDescriptors: V,
              colorKeywords: ie,
              valueKeywords: me,
              supportsAtComponent: !0,
              tokenHooks: {
                '/': function (le, W) {
                  return le.eat('*') ? ((W.tokenize = ze), ze(le, W)) : !1;
                },
              },
              name: 'css',
              helperType: 'gss',
            });
        });
      })()),
    da.exports
  );
}
ka();
var pa = { exports: {} },
  ga;
function wa() {
  return (
    ga ||
      ((ga = 1),
      (function (jt, Jt) {
        (function (F) {
          F(Zt);
        })(function (F) {
          var Pe = {
              autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
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
                menuitem: !0,
              },
              implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0,
              },
              contextGrabbers: {
                dd: { dd: !0, dt: !0 },
                dt: { dd: !0, dt: !0 },
                li: { li: !0 },
                option: { option: !0, optgroup: !0 },
                optgroup: { optgroup: !0 },
                p: {
                  address: !0,
                  article: !0,
                  aside: !0,
                  blockquote: !0,
                  dir: !0,
                  div: !0,
                  dl: !0,
                  fieldset: !0,
                  footer: !0,
                  form: !0,
                  h1: !0,
                  h2: !0,
                  h3: !0,
                  h4: !0,
                  h5: !0,
                  h6: !0,
                  header: !0,
                  hgroup: !0,
                  hr: !0,
                  menu: !0,
                  nav: !0,
                  ol: !0,
                  p: !0,
                  pre: !0,
                  section: !0,
                  table: !0,
                  ul: !0,
                },
                rp: { rp: !0, rt: !0 },
                rt: { rp: !0, rt: !0 },
                tbody: { tbody: !0, tfoot: !0 },
                td: { td: !0, th: !0 },
                tfoot: { tbody: !0 },
                th: { td: !0, th: !0 },
                thead: { tbody: !0, tfoot: !0 },
                tr: { tr: !0 },
              },
              doNotIndent: { pre: !0 },
              allowUnquoted: !0,
              allowMissing: !0,
              caseFold: !0,
            },
            I = {
              autoSelfClosers: {},
              implicitlyClosed: {},
              contextGrabbers: {},
              doNotIndent: {},
              allowUnquoted: !1,
              allowMissing: !1,
              allowMissingTagName: !1,
              caseFold: !1,
            };
          F.defineMode('xml', function (de, Me) {
            var se = de.indentUnit,
              k = {},
              ee = Me.htmlMode ? Pe : I;
            for (var U in ee) k[U] = ee[U];
            for (var U in Me) k[U] = Me[U];
            var ve, O;
            function H(d, S) {
              function w(N) {
                return (S.tokenize = N), N(d, S);
              }
              var m = d.next();
              if (m == '<')
                return d.eat('!')
                  ? d.eat('[')
                    ? d.match('CDATA[')
                      ? w(be('atom', ']]>'))
                      : null
                    : d.match('--')
                      ? w(be('comment', '-->'))
                      : d.match('DOCTYPE', !0, !0)
                        ? (d.eatWhile(/[\w\._\-]/), w(ke(1)))
                        : null
                  : d.eat('?')
                    ? (d.eatWhile(/[\w\._\-]/),
                      (S.tokenize = be('meta', '?>')),
                      'meta')
                    : ((ve = d.eat('/') ? 'closeTag' : 'openTag'),
                      (S.tokenize = P),
                      'tag bracket');
              if (m == '&') {
                var y;
                return (
                  d.eat('#')
                    ? d.eat('x')
                      ? (y = d.eatWhile(/[a-fA-F\d]/) && d.eat(';'))
                      : (y = d.eatWhile(/[\d]/) && d.eat(';'))
                    : (y = d.eatWhile(/[\w\.\-:]/) && d.eat(';')),
                  y ? 'atom' : 'error'
                );
              } else return d.eatWhile(/[^&<]/), null;
            }
            H.isInText = !0;
            function P(d, S) {
              var w = d.next();
              if (w == '>' || (w == '/' && d.eat('>')))
                return (
                  (S.tokenize = H),
                  (ve = w == '>' ? 'endTag' : 'selfcloseTag'),
                  'tag bracket'
                );
              if (w == '=') return (ve = 'equals'), null;
              if (w == '<') {
                (S.tokenize = H),
                  (S.state = Fe),
                  (S.tagName = S.tagStart = null);
                var m = S.tokenize(d, S);
                return m ? m + ' tag error' : 'tag error';
              } else
                return /[\'\"]/.test(w)
                  ? ((S.tokenize = K(w)),
                    (S.stringStartCol = d.column()),
                    S.tokenize(d, S))
                  : (d.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),
                    'word');
            }
            function K(d) {
              var S = function (w, m) {
                for (; !w.eol(); )
                  if (w.next() == d) {
                    m.tokenize = P;
                    break;
                  }
                return 'string';
              };
              return (S.isInAttribute = !0), S;
            }
            function be(d, S) {
              return function (w, m) {
                for (; !w.eol(); ) {
                  if (w.match(S)) {
                    m.tokenize = H;
                    break;
                  }
                  w.next();
                }
                return d;
              };
            }
            function ke(d) {
              return function (S, w) {
                for (var m; (m = S.next()) != null; ) {
                  if (m == '<')
                    return (w.tokenize = ke(d + 1)), w.tokenize(S, w);
                  if (m == '>')
                    if (d == 1) {
                      w.tokenize = H;
                      break;
                    } else return (w.tokenize = ke(d - 1)), w.tokenize(S, w);
                }
                return 'meta';
              };
            }
            function Q(d) {
              return d && d.toLowerCase();
            }
            function V(d, S, w) {
              (this.prev = d.context),
                (this.tagName = S || ''),
                (this.indent = d.indented),
                (this.startOfLine = w),
                (k.doNotIndent.hasOwnProperty(S) ||
                  (d.context && d.context.noIndent)) &&
                  (this.noIndent = !0);
            }
            function $(d) {
              d.context && (d.context = d.context.prev);
            }
            function ie(d, S) {
              for (var w; ; ) {
                if (
                  !d.context ||
                  ((w = d.context.tagName),
                  !k.contextGrabbers.hasOwnProperty(Q(w)) ||
                    !k.contextGrabbers[Q(w)].hasOwnProperty(Q(S)))
                )
                  return;
                $(d);
              }
            }
            function Fe(d, S, w) {
              return d == 'openTag'
                ? ((w.tagStart = S.column()), me)
                : d == 'closeTag'
                  ? ue
                  : Fe;
            }
            function me(d, S, w) {
              return d == 'word'
                ? ((w.tagName = S.current()), (O = 'tag'), W)
                : k.allowMissingTagName && d == 'endTag'
                  ? ((O = 'tag bracket'), W(d, S, w))
                  : ((O = 'error'), me);
            }
            function ue(d, S, w) {
              if (d == 'word') {
                var m = S.current();
                return (
                  w.context &&
                    w.context.tagName != m &&
                    k.implicitlyClosed.hasOwnProperty(Q(w.context.tagName)) &&
                    $(w),
                  (w.context && w.context.tagName == m) || k.matchClosing === !1
                    ? ((O = 'tag'), ze)
                    : ((O = 'tag error'), le)
                );
              } else
                return k.allowMissingTagName && d == 'endTag'
                  ? ((O = 'tag bracket'), ze(d, S, w))
                  : ((O = 'error'), le);
            }
            function ze(d, S, w) {
              return d != 'endTag' ? ((O = 'error'), ze) : ($(w), Fe);
            }
            function le(d, S, w) {
              return (O = 'error'), ze(d, S, w);
            }
            function W(d, S, w) {
              if (d == 'word') return (O = 'attribute'), Ae;
              if (d == 'endTag' || d == 'selfcloseTag') {
                var m = w.tagName,
                  y = w.tagStart;
                return (
                  (w.tagName = w.tagStart = null),
                  d == 'selfcloseTag' || k.autoSelfClosers.hasOwnProperty(Q(m))
                    ? ie(w, m)
                    : (ie(w, m), (w.context = new V(w, m, y == w.indented))),
                  Fe
                );
              }
              return (O = 'error'), W;
            }
            function Ae(d, S, w) {
              return d == 'equals'
                ? C
                : (k.allowMissing || (O = 'error'), W(d, S, w));
            }
            function C(d, S, w) {
              return d == 'string'
                ? Y
                : d == 'word' && k.allowUnquoted
                  ? ((O = 'string'), W)
                  : ((O = 'error'), W(d, S, w));
            }
            function Y(d, S, w) {
              return d == 'string' ? Y : W(d, S, w);
            }
            return {
              startState: function (d) {
                var S = {
                  tokenize: H,
                  state: Fe,
                  indented: d || 0,
                  tagName: null,
                  tagStart: null,
                  context: null,
                };
                return d != null && (S.baseIndent = d), S;
              },
              token: function (d, S) {
                if (
                  (!S.tagName && d.sol() && (S.indented = d.indentation()),
                  d.eatSpace())
                )
                  return null;
                ve = null;
                var w = S.tokenize(d, S);
                return (
                  (w || ve) &&
                    w != 'comment' &&
                    ((O = null),
                    (S.state = S.state(ve || w, d, S)),
                    O && (w = O == 'error' ? w + ' error' : O)),
                  w
                );
              },
              indent: function (d, S, w) {
                var m = d.context;
                if (d.tokenize.isInAttribute)
                  return d.tagStart == d.indented
                    ? d.stringStartCol + 1
                    : d.indented + se;
                if (m && m.noIndent) return F.Pass;
                if (d.tokenize != P && d.tokenize != H)
                  return w ? w.match(/^(\s*)/)[0].length : 0;
                if (d.tagName)
                  return k.multilineTagIndentPastTag !== !1
                    ? d.tagStart + d.tagName.length + 2
                    : d.tagStart + se * (k.multilineTagIndentFactor || 1);
                if (k.alignCDATA && /<!\[CDATA\[/.test(S)) return 0;
                var y = S && /^<(\/)?([\w_:\.-]*)/.exec(S);
                if (y && y[1])
                  for (; m; )
                    if (m.tagName == y[2]) {
                      m = m.prev;
                      break;
                    } else if (k.implicitlyClosed.hasOwnProperty(Q(m.tagName)))
                      m = m.prev;
                    else break;
                else if (y)
                  for (; m; ) {
                    var N = k.contextGrabbers[Q(m.tagName)];
                    if (N && N.hasOwnProperty(Q(y[2]))) m = m.prev;
                    else break;
                  }
                for (; m && m.prev && !m.startOfLine; ) m = m.prev;
                return m ? m.indent + se : d.baseIndent || 0;
              },
              electricInput: /<\/[\s\w:]+>$/,
              blockCommentStart: '<!--',
              blockCommentEnd: '-->',
              configuration: k.htmlMode ? 'html' : 'xml',
              helperType: k.htmlMode ? 'html' : 'xml',
              skipAttribute: function (d) {
                d.state == C && (d.state = W);
              },
              xmlCurrentTag: function (d) {
                return d.tagName
                  ? { name: d.tagName, close: d.type == 'closeTag' }
                  : null;
              },
              xmlCurrentContext: function (d) {
                for (var S = [], w = d.context; w; w = w.prev)
                  S.push(w.tagName);
                return S.reverse();
              },
            };
          }),
            F.defineMIME('text/xml', 'xml'),
            F.defineMIME('application/xml', 'xml'),
            F.mimeModes.hasOwnProperty('text/html') ||
              F.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
        });
      })()),
    pa.exports
  );
}
var va = { exports: {} },
  ma;
function Sa() {
  return (
    ma ||
      ((ma = 1),
      (function (jt, Jt) {
        (function (F) {
          F(Zt);
        })(function (F) {
          F.defineMode('javascript', function (Pe, I) {
            var de = Pe.indentUnit,
              Me = I.statementIndent,
              se = I.jsonld,
              k = I.json || se,
              ee = I.trackScope !== !1,
              U = I.typescript,
              ve = I.wordCharacters || /[\w$\xa1-\uffff]/,
              O = (function () {
                function f(it) {
                  return { type: it, style: 'keyword' };
                }
                var g = f('keyword a'),
                  A = f('keyword b'),
                  B = f('keyword c'),
                  L = f('keyword d'),
                  X = f('operator'),
                  _e = { type: 'atom', style: 'atom' };
                return {
                  if: f('if'),
                  while: g,
                  with: g,
                  else: A,
                  do: A,
                  try: A,
                  finally: A,
                  return: L,
                  break: L,
                  continue: L,
                  new: f('new'),
                  delete: B,
                  void: B,
                  throw: B,
                  debugger: f('debugger'),
                  var: f('var'),
                  const: f('var'),
                  let: f('var'),
                  function: f('function'),
                  catch: f('catch'),
                  for: f('for'),
                  switch: f('switch'),
                  case: f('case'),
                  default: f('default'),
                  in: X,
                  typeof: X,
                  instanceof: X,
                  true: _e,
                  false: _e,
                  null: _e,
                  undefined: _e,
                  NaN: _e,
                  Infinity: _e,
                  this: f('this'),
                  class: f('class'),
                  super: f('atom'),
                  yield: B,
                  export: f('export'),
                  import: f('import'),
                  extends: B,
                  await: B,
                };
              })(),
              H = /[+\-*&%=<>!?|~^@]/,
              P =
                /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
            function K(f) {
              for (var g = !1, A, B = !1; (A = f.next()) != null; ) {
                if (!g) {
                  if (A == '/' && !B) return;
                  A == '[' ? (B = !0) : B && A == ']' && (B = !1);
                }
                g = !g && A == '\\';
              }
            }
            var be, ke;
            function Q(f, g, A) {
              return (be = f), (ke = A), g;
            }
            function V(f, g) {
              var A = f.next();
              if (A == '"' || A == "'")
                return (g.tokenize = $(A)), g.tokenize(f, g);
              if (A == '.' && f.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
                return Q('number', 'number');
              if (A == '.' && f.match('..')) return Q('spread', 'meta');
              if (/[\[\]{}\(\),;\:\.]/.test(A)) return Q(A);
              if (A == '=' && f.eat('>')) return Q('=>', 'operator');
              if (A == '0' && f.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
                return Q('number', 'number');
              if (/\d/.test(A))
                return (
                  f.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
                  Q('number', 'number')
                );
              if (A == '/')
                return f.eat('*')
                  ? ((g.tokenize = ie), ie(f, g))
                  : f.eat('/')
                    ? (f.skipToEnd(), Q('comment', 'comment'))
                    : Ft(f, g, 1)
                      ? (K(f),
                        f.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                        Q('regexp', 'string-2'))
                      : (f.eat('='), Q('operator', 'operator', f.current()));
              if (A == '`') return (g.tokenize = Fe), Fe(f, g);
              if (A == '#' && f.peek() == '!')
                return f.skipToEnd(), Q('meta', 'meta');
              if (A == '#' && f.eatWhile(ve)) return Q('variable', 'property');
              if (
                (A == '<' && f.match('!--')) ||
                (A == '-' &&
                  f.match('->') &&
                  !/\S/.test(f.string.slice(0, f.start)))
              )
                return f.skipToEnd(), Q('comment', 'comment');
              if (H.test(A))
                return (
                  (A != '>' || !g.lexical || g.lexical.type != '>') &&
                    (f.eat('=')
                      ? (A == '!' || A == '=') && f.eat('=')
                      : /[<>*+\-|&?]/.test(A) &&
                        (f.eat(A), A == '>' && f.eat(A))),
                  A == '?' && f.eat('.')
                    ? Q('.')
                    : Q('operator', 'operator', f.current())
                );
              if (ve.test(A)) {
                f.eatWhile(ve);
                var B = f.current();
                if (g.lastType != '.') {
                  if (O.propertyIsEnumerable(B)) {
                    var L = O[B];
                    return Q(L.type, L.style, B);
                  }
                  if (
                    B == 'async' &&
                    f.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
                  )
                    return Q('async', 'keyword', B);
                }
                return Q('variable', 'variable', B);
              }
            }
            function $(f) {
              return function (g, A) {
                var B = !1,
                  L;
                if (se && g.peek() == '@' && g.match(P))
                  return (A.tokenize = V), Q('jsonld-keyword', 'meta');
                for (; (L = g.next()) != null && !(L == f && !B); )
                  B = !B && L == '\\';
                return B || (A.tokenize = V), Q('string', 'string');
              };
            }
            function ie(f, g) {
              for (var A = !1, B; (B = f.next()); ) {
                if (B == '/' && A) {
                  g.tokenize = V;
                  break;
                }
                A = B == '*';
              }
              return Q('comment', 'comment');
            }
            function Fe(f, g) {
              for (var A = !1, B; (B = f.next()) != null; ) {
                if (!A && (B == '`' || (B == '$' && f.eat('{')))) {
                  g.tokenize = V;
                  break;
                }
                A = !A && B == '\\';
              }
              return Q('quasi', 'string-2', f.current());
            }
            var me = '([{}])';
            function ue(f, g) {
              g.fatArrowAt && (g.fatArrowAt = null);
              var A = f.string.indexOf('=>', f.start);
              if (!(A < 0)) {
                if (U) {
                  var B = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                    f.string.slice(f.start, A)
                  );
                  B && (A = B.index);
                }
                for (var L = 0, X = !1, _e = A - 1; _e >= 0; --_e) {
                  var it = f.string.charAt(_e),
                    xt = me.indexOf(it);
                  if (xt >= 0 && xt < 3) {
                    if (!L) {
                      ++_e;
                      break;
                    }
                    if (--L == 0) {
                      it == '(' && (X = !0);
                      break;
                    }
                  } else if (xt >= 3 && xt < 6) ++L;
                  else if (ve.test(it)) X = !0;
                  else if (/["'\/`]/.test(it))
                    for (; ; --_e) {
                      if (_e == 0) return;
                      var _r = f.string.charAt(_e - 1);
                      if (_r == it && f.string.charAt(_e - 2) != '\\') {
                        _e--;
                        break;
                      }
                    }
                  else if (X && !L) {
                    ++_e;
                    break;
                  }
                }
                X && !L && (g.fatArrowAt = _e);
              }
            }
            var ze = {
              atom: !0,
              number: !0,
              variable: !0,
              string: !0,
              regexp: !0,
              this: !0,
              import: !0,
              'jsonld-keyword': !0,
            };
            function le(f, g, A, B, L, X) {
              (this.indented = f),
                (this.column = g),
                (this.type = A),
                (this.prev = L),
                (this.info = X),
                B != null && (this.align = B);
            }
            function W(f, g) {
              if (!ee) return !1;
              for (var A = f.localVars; A; A = A.next)
                if (A.name == g) return !0;
              for (var B = f.context; B; B = B.prev)
                for (var A = B.vars; A; A = A.next) if (A.name == g) return !0;
            }
            function Ae(f, g, A, B, L) {
              var X = f.cc;
              for (
                C.state = f,
                  C.stream = L,
                  C.marked = null,
                  C.cc = X,
                  C.style = g,
                  f.lexical.hasOwnProperty('align') || (f.lexical.align = !0);
                ;

              ) {
                var _e = X.length ? X.pop() : k ? te : Te;
                if (_e(A, B)) {
                  for (; X.length && X[X.length - 1].lex; ) X.pop()();
                  return C.marked
                    ? C.marked
                    : A == 'variable' && W(f, B)
                      ? 'variable-2'
                      : g;
                }
              }
            }
            var C = { state: null, column: null, marked: null, cc: null };
            function Y() {
              for (var f = arguments.length - 1; f >= 0; f--)
                C.cc.push(arguments[f]);
            }
            function d() {
              return Y.apply(null, arguments), !0;
            }
            function S(f, g) {
              for (var A = g; A; A = A.next) if (A.name == f) return !0;
              return !1;
            }
            function w(f) {
              var g = C.state;
              if (((C.marked = 'def'), !!ee)) {
                if (g.context) {
                  if (g.lexical.info == 'var' && g.context && g.context.block) {
                    var A = m(f, g.context);
                    if (A != null) {
                      g.context = A;
                      return;
                    }
                  } else if (!S(f, g.localVars)) {
                    g.localVars = new re(f, g.localVars);
                    return;
                  }
                }
                I.globalVars &&
                  !S(f, g.globalVars) &&
                  (g.globalVars = new re(f, g.globalVars));
              }
            }
            function m(f, g) {
              if (g)
                if (g.block) {
                  var A = m(f, g.prev);
                  return A ? (A == g.prev ? g : new N(A, g.vars, !0)) : null;
                } else
                  return S(f, g.vars)
                    ? g
                    : new N(g.prev, new re(f, g.vars), !1);
              else return null;
            }
            function y(f) {
              return (
                f == 'public' ||
                f == 'private' ||
                f == 'protected' ||
                f == 'abstract' ||
                f == 'readonly'
              );
            }
            function N(f, g, A) {
              (this.prev = f), (this.vars = g), (this.block = A);
            }
            function re(f, g) {
              (this.name = f), (this.next = g);
            }
            var p = new re('this', new re('arguments', null));
            function c() {
              (C.state.context = new N(C.state.context, C.state.localVars, !1)),
                (C.state.localVars = p);
            }
            function G() {
              (C.state.context = new N(C.state.context, C.state.localVars, !0)),
                (C.state.localVars = null);
            }
            c.lex = G.lex = !0;
            function ye() {
              (C.state.localVars = C.state.context.vars),
                (C.state.context = C.state.context.prev);
            }
            ye.lex = !0;
            function R(f, g) {
              var A = function () {
                var B = C.state,
                  L = B.indented;
                if (B.lexical.type == 'stat') L = B.lexical.indented;
                else
                  for (
                    var X = B.lexical;
                    X && X.type == ')' && X.align;
                    X = X.prev
                  )
                    L = X.indented;
                B.lexical = new le(L, C.stream.column(), f, null, B.lexical, g);
              };
              return (A.lex = !0), A;
            }
            function oe() {
              var f = C.state;
              f.lexical.prev &&
                (f.lexical.type == ')' && (f.indented = f.lexical.indented),
                (f.lexical = f.lexical.prev));
            }
            oe.lex = !0;
            function Se(f) {
              function g(A) {
                return A == f
                  ? d()
                  : f == ';' || A == '}' || A == ')' || A == ']'
                    ? Y()
                    : d(g);
              }
              return g;
            }
            function Te(f, g) {
              return f == 'var'
                ? d(R('vardef', g), Nr, Se(';'), oe)
                : f == 'keyword a'
                  ? d(R('form'), qe, Te, oe)
                  : f == 'keyword b'
                    ? d(R('form'), Te, oe)
                    : f == 'keyword d'
                      ? C.stream.match(/^\s*$/, !1)
                        ? d()
                        : d(R('stat'), ct, Se(';'), oe)
                      : f == 'debugger'
                        ? d(Se(';'))
                        : f == '{'
                          ? d(R('}'), G, Et, oe, ye)
                          : f == ';'
                            ? d()
                            : f == 'if'
                              ? (C.state.lexical.info == 'else' &&
                                  C.state.cc[C.state.cc.length - 1] == oe &&
                                  C.state.cc.pop()(),
                                d(R('form'), qe, Te, oe, Or))
                              : f == 'function'
                                ? d(Ot)
                                : f == 'for'
                                  ? d(R('form'), G, Wn, Te, ye, oe)
                                  : f == 'class' || (U && g == 'interface')
                                    ? ((C.marked = 'keyword'),
                                      d(
                                        R('form', f == 'class' ? f : g),
                                        Pr,
                                        oe
                                      ))
                                    : f == 'variable'
                                      ? U && g == 'declare'
                                        ? ((C.marked = 'keyword'), d(Te))
                                        : U &&
                                            (g == 'module' ||
                                              g == 'enum' ||
                                              g == 'type') &&
                                            C.stream.match(/^\s*\w/, !1)
                                          ? ((C.marked = 'keyword'),
                                            g == 'enum'
                                              ? d(ae)
                                              : g == 'type'
                                                ? d(
                                                    _n,
                                                    Se('operator'),
                                                    We,
                                                    Se(';')
                                                  )
                                                : d(
                                                    R('form'),
                                                    yt,
                                                    Se('{'),
                                                    R('}'),
                                                    Et,
                                                    oe,
                                                    oe
                                                  ))
                                          : U && g == 'namespace'
                                            ? ((C.marked = 'keyword'),
                                              d(R('form'), te, Te, oe))
                                            : U && g == 'abstract'
                                              ? ((C.marked = 'keyword'), d(Te))
                                              : d(R('stat'), Ie)
                                      : f == 'switch'
                                        ? d(
                                            R('form'),
                                            qe,
                                            Se('{'),
                                            R('}', 'switch'),
                                            G,
                                            Et,
                                            oe,
                                            oe,
                                            ye
                                          )
                                        : f == 'case'
                                          ? d(te, Se(':'))
                                          : f == 'default'
                                            ? d(Se(':'))
                                            : f == 'catch'
                                              ? d(R('form'), c, xe, Te, oe, ye)
                                              : f == 'export'
                                                ? d(R('stat'), Ir, oe)
                                                : f == 'import'
                                                  ? d(R('stat'), fr, oe)
                                                  : f == 'async'
                                                    ? d(Te)
                                                    : g == '@'
                                                      ? d(te, Te)
                                                      : Y(
                                                          R('stat'),
                                                          te,
                                                          Se(';'),
                                                          oe
                                                        );
            }
            function xe(f) {
              if (f == '(') return d(zt, Se(')'));
            }
            function te(f, g) {
              return Ve(f, g, !1);
            }
            function Ee(f, g) {
              return Ve(f, g, !0);
            }
            function qe(f) {
              return f != '(' ? Y() : d(R(')'), ct, Se(')'), oe);
            }
            function Ve(f, g, A) {
              if (C.state.fatArrowAt == C.stream.start) {
                var B = A ? Oe : he;
                if (f == '(')
                  return d(c, R(')'), Ce(zt, ')'), oe, Se('=>'), B, ye);
                if (f == 'variable') return Y(c, yt, Se('=>'), B, ye);
              }
              var L = A ? Re : Ne;
              return ze.hasOwnProperty(f)
                ? d(L)
                : f == 'function'
                  ? d(Ot, L)
                  : f == 'class' || (U && g == 'interface')
                    ? ((C.marked = 'keyword'), d(R('form'), yi, oe))
                    : f == 'keyword c' || f == 'async'
                      ? d(A ? Ee : te)
                      : f == '('
                        ? d(R(')'), ct, Se(')'), oe, L)
                        : f == 'operator' || f == 'spread'
                          ? d(A ? Ee : te)
                          : f == '['
                            ? d(R(']'), Je, oe, L)
                            : f == '{'
                              ? Lt(we, '}', null, L)
                              : f == 'quasi'
                                ? Y(Ue, L)
                                : f == 'new'
                                  ? d(T(A))
                                  : d();
            }
            function ct(f) {
              return f.match(/[;\}\)\],]/) ? Y() : Y(te);
            }
            function Ne(f, g) {
              return f == ',' ? d(ct) : Re(f, g, !1);
            }
            function Re(f, g, A) {
              var B = A == !1 ? Ne : Re,
                L = A == !1 ? te : Ee;
              if (f == '=>') return d(c, A ? Oe : he, ye);
              if (f == 'operator')
                return /\+\+|--/.test(g) || (U && g == '!')
                  ? d(B)
                  : U &&
                      g == '<' &&
                      C.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                    ? d(R('>'), Ce(We, '>'), oe, B)
                    : g == '?'
                      ? d(te, Se(':'), L)
                      : d(L);
              if (f == 'quasi') return Y(Ue, B);
              if (f != ';') {
                if (f == '(') return Lt(Ee, ')', 'call', B);
                if (f == '.') return d(ne, B);
                if (f == '[') return d(R(']'), ct, Se(']'), oe, B);
                if (U && g == 'as') return (C.marked = 'keyword'), d(We, B);
                if (f == 'regexp')
                  return (
                    (C.state.lastType = C.marked = 'operator'),
                    C.stream.backUp(C.stream.pos - C.stream.start - 1),
                    d(L)
                  );
              }
            }
            function Ue(f, g) {
              return f != 'quasi'
                ? Y()
                : g.slice(g.length - 2) != '${'
                  ? d(Ue)
                  : d(ct, et);
            }
            function et(f) {
              if (f == '}')
                return (C.marked = 'string-2'), (C.state.tokenize = Fe), d(Ue);
            }
            function he(f) {
              return ue(C.stream, C.state), Y(f == '{' ? Te : te);
            }
            function Oe(f) {
              return ue(C.stream, C.state), Y(f == '{' ? Te : Ee);
            }
            function T(f) {
              return function (g) {
                return g == '.'
                  ? d(f ? M : z)
                  : g == 'variable' && U
                    ? d(Ct, f ? Re : Ne)
                    : Y(f ? Ee : te);
              };
            }
            function z(f, g) {
              if (g == 'target') return (C.marked = 'keyword'), d(Ne);
            }
            function M(f, g) {
              if (g == 'target') return (C.marked = 'keyword'), d(Re);
            }
            function Ie(f) {
              return f == ':' ? d(oe, Te) : Y(Ne, Se(';'), oe);
            }
            function ne(f) {
              if (f == 'variable') return (C.marked = 'property'), d();
            }
            function we(f, g) {
              if (f == 'async') return (C.marked = 'property'), d(we);
              if (f == 'variable' || C.style == 'keyword') {
                if (((C.marked = 'property'), g == 'get' || g == 'set'))
                  return d(fe);
                var A;
                return (
                  U &&
                    C.state.fatArrowAt == C.stream.start &&
                    (A = C.stream.match(/^\s*:\s*/, !1)) &&
                    (C.state.fatArrowAt = C.stream.pos + A[0].length),
                  d(Be)
                );
              } else {
                if (f == 'number' || f == 'string')
                  return (
                    (C.marked = se ? 'property' : C.style + ' property'), d(Be)
                  );
                if (f == 'jsonld-keyword') return d(Be);
                if (U && y(g)) return (C.marked = 'keyword'), d(we);
                if (f == '[') return d(te, or, Se(']'), Be);
                if (f == 'spread') return d(Ee, Be);
                if (g == '*') return (C.marked = 'keyword'), d(we);
                if (f == ':') return Y(Be);
              }
            }
            function fe(f) {
              return f != 'variable' ? Y(Be) : ((C.marked = 'property'), d(Ot));
            }
            function Be(f) {
              if (f == ':') return d(Ee);
              if (f == '(') return Y(Ot);
            }
            function Ce(f, g, A) {
              function B(L, X) {
                if (A ? A.indexOf(L) > -1 : L == ',') {
                  var _e = C.state.lexical;
                  return (
                    _e.info == 'call' && (_e.pos = (_e.pos || 0) + 1),
                    d(function (it, xt) {
                      return it == g || xt == g ? Y() : Y(f);
                    }, B)
                  );
                }
                return L == g || X == g
                  ? d()
                  : A && A.indexOf(';') > -1
                    ? Y(f)
                    : d(Se(g));
              }
              return function (L, X) {
                return L == g || X == g ? d() : Y(f, B);
              };
            }
            function Lt(f, g, A) {
              for (var B = 3; B < arguments.length; B++)
                C.cc.push(arguments[B]);
              return d(R(g, A), Ce(f, g), oe);
            }
            function Et(f) {
              return f == '}' ? d() : Y(Te, Et);
            }
            function or(f, g) {
              if (U) {
                if (f == ':') return d(We);
                if (g == '?') return d(or);
              }
            }
            function br(f, g) {
              if (U && (f == ':' || g == 'in')) return d(We);
            }
            function lr(f) {
              if (U && f == ':')
                return C.stream.match(/^\s*\w+\s+is\b/, !1)
                  ? d(te, vi, We)
                  : d(We);
            }
            function vi(f, g) {
              if (g == 'is') return (C.marked = 'keyword'), d();
            }
            function We(f, g) {
              if (
                g == 'keyof' ||
                g == 'typeof' ||
                g == 'infer' ||
                g == 'readonly'
              )
                return (C.marked = 'keyword'), d(g == 'typeof' ? Ee : We);
              if (f == 'variable' || g == 'void')
                return (C.marked = 'type'), d(Nt);
              if (g == '|' || g == '&') return d(We);
              if (f == 'string' || f == 'number' || f == 'atom') return d(Nt);
              if (f == '[') return d(R(']'), Ce(We, ']', ','), oe, Nt);
              if (f == '{') return d(R('}'), pe, oe, Nt);
              if (f == '(') return d(Ce(Ze, ')'), Bn, Nt);
              if (f == '<') return d(Ce(We, '>'), We);
              if (f == 'quasi') return Y(dt, Nt);
            }
            function Bn(f) {
              if (f == '=>') return d(We);
            }
            function pe(f) {
              return f.match(/[\}\)\]]/)
                ? d()
                : f == ',' || f == ';'
                  ? d(pe)
                  : Y(Qt, pe);
            }
            function Qt(f, g) {
              if (f == 'variable' || C.style == 'keyword')
                return (C.marked = 'property'), d(Qt);
              if (g == '?' || f == 'number' || f == 'string') return d(Qt);
              if (f == ':') return d(We);
              if (f == '[') return d(Se('variable'), br, Se(']'), Qt);
              if (f == '(') return Y(ur, Qt);
              if (!f.match(/[;\}\)\],]/)) return d();
            }
            function dt(f, g) {
              return f != 'quasi'
                ? Y()
                : g.slice(g.length - 2) != '${'
                  ? d(dt)
                  : d(We, Ye);
            }
            function Ye(f) {
              if (f == '}')
                return (C.marked = 'string-2'), (C.state.tokenize = Fe), d(dt);
            }
            function Ze(f, g) {
              return (f == 'variable' && C.stream.match(/^\s*[?:]/, !1)) ||
                g == '?'
                ? d(Ze)
                : f == ':'
                  ? d(We)
                  : f == 'spread'
                    ? d(Ze)
                    : Y(We);
            }
            function Nt(f, g) {
              if (g == '<') return d(R('>'), Ce(We, '>'), oe, Nt);
              if (g == '|' || f == '.' || g == '&') return d(We);
              if (f == '[') return d(We, Se(']'), Nt);
              if (g == 'extends' || g == 'implements')
                return (C.marked = 'keyword'), d(We);
              if (g == '?') return d(We, Se(':'), We);
            }
            function Ct(f, g) {
              if (g == '<') return d(R('>'), Ce(We, '>'), oe, Nt);
            }
            function Pt() {
              return Y(We, ht);
            }
            function ht(f, g) {
              if (g == '=') return d(We);
            }
            function Nr(f, g) {
              return g == 'enum'
                ? ((C.marked = 'keyword'), d(ae))
                : Y(yt, or, It, mi);
            }
            function yt(f, g) {
              if (U && y(g)) return (C.marked = 'keyword'), d(yt);
              if (f == 'variable') return w(g), d();
              if (f == 'spread') return d(yt);
              if (f == '[') return Lt(ln, ']');
              if (f == '{') return Lt(ar, '}');
            }
            function ar(f, g) {
              return f == 'variable' && !C.stream.match(/^\s*:/, !1)
                ? (w(g), d(It))
                : (f == 'variable' && (C.marked = 'property'),
                  f == 'spread'
                    ? d(yt)
                    : f == '}'
                      ? Y()
                      : f == '['
                        ? d(te, Se(']'), Se(':'), ar)
                        : d(Se(':'), yt, It));
            }
            function ln() {
              return Y(yt, It);
            }
            function It(f, g) {
              if (g == '=') return d(Ee);
            }
            function mi(f) {
              if (f == ',') return d(Nr);
            }
            function Or(f, g) {
              if (f == 'keyword b' && g == 'else')
                return d(R('form', 'else'), Te, oe);
            }
            function Wn(f, g) {
              if (g == 'await') return d(Wn);
              if (f == '(') return d(R(')'), an, oe);
            }
            function an(f) {
              return f == 'var' ? d(Nr, sr) : f == 'variable' ? d(sr) : Y(sr);
            }
            function sr(f, g) {
              return f == ')'
                ? d()
                : f == ';'
                  ? d(sr)
                  : g == 'in' || g == 'of'
                    ? ((C.marked = 'keyword'), d(te, sr))
                    : Y(te, sr);
            }
            function Ot(f, g) {
              if (g == '*') return (C.marked = 'keyword'), d(Ot);
              if (f == 'variable') return w(g), d(Ot);
              if (f == '(') return d(c, R(')'), Ce(zt, ')'), oe, lr, Te, ye);
              if (U && g == '<') return d(R('>'), Ce(Pt, '>'), oe, Ot);
            }
            function ur(f, g) {
              if (g == '*') return (C.marked = 'keyword'), d(ur);
              if (f == 'variable') return w(g), d(ur);
              if (f == '(') return d(c, R(')'), Ce(zt, ')'), oe, lr, ye);
              if (U && g == '<') return d(R('>'), Ce(Pt, '>'), oe, ur);
            }
            function _n(f, g) {
              if (f == 'keyword' || f == 'variable')
                return (C.marked = 'type'), d(_n);
              if (g == '<') return d(R('>'), Ce(Pt, '>'), oe);
            }
            function zt(f, g) {
              return (
                g == '@' && d(te, zt),
                f == 'spread'
                  ? d(zt)
                  : U && y(g)
                    ? ((C.marked = 'keyword'), d(zt))
                    : U && f == 'this'
                      ? d(or, It)
                      : Y(yt, or, It)
              );
            }
            function yi(f, g) {
              return f == 'variable' ? Pr(f, g) : Bt(f, g);
            }
            function Pr(f, g) {
              if (f == 'variable') return w(g), d(Bt);
            }
            function Bt(f, g) {
              if (g == '<') return d(R('>'), Ce(Pt, '>'), oe, Bt);
              if (g == 'extends' || g == 'implements' || (U && f == ','))
                return (
                  g == 'implements' && (C.marked = 'keyword'),
                  d(U ? We : te, Bt)
                );
              if (f == '{') return d(R('}'), Wt, oe);
            }
            function Wt(f, g) {
              if (
                f == 'async' ||
                (f == 'variable' &&
                  (g == 'static' || g == 'get' || g == 'set' || (U && y(g))) &&
                  C.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
              )
                return (C.marked = 'keyword'), d(Wt);
              if (f == 'variable' || C.style == 'keyword')
                return (C.marked = 'property'), d(kr, Wt);
              if (f == 'number' || f == 'string') return d(kr, Wt);
              if (f == '[') return d(te, or, Se(']'), kr, Wt);
              if (g == '*') return (C.marked = 'keyword'), d(Wt);
              if (U && f == '(') return Y(ur, Wt);
              if (f == ';' || f == ',') return d(Wt);
              if (f == '}') return d();
              if (g == '@') return d(te, Wt);
            }
            function kr(f, g) {
              if (g == '!' || g == '?') return d(kr);
              if (f == ':') return d(We, It);
              if (g == '=') return d(Ee);
              var A = C.state.lexical.prev,
                B = A && A.info == 'interface';
              return Y(B ? ur : Ot);
            }
            function Ir(f, g) {
              return g == '*'
                ? ((C.marked = 'keyword'), d(Wr, Se(';')))
                : g == 'default'
                  ? ((C.marked = 'keyword'), d(te, Se(';')))
                  : f == '{'
                    ? d(Ce(zr, '}'), Wr, Se(';'))
                    : Y(Te);
            }
            function zr(f, g) {
              if (g == 'as') return (C.marked = 'keyword'), d(Se('variable'));
              if (f == 'variable') return Y(Ee, zr);
            }
            function fr(f) {
              return f == 'string'
                ? d()
                : f == '('
                  ? Y(te)
                  : f == '.'
                    ? Y(Ne)
                    : Y(Br, Kt, Wr);
            }
            function Br(f, g) {
              return f == '{'
                ? Lt(Br, '}')
                : (f == 'variable' && w(g),
                  g == '*' && (C.marked = 'keyword'),
                  d(sn));
            }
            function Kt(f) {
              if (f == ',') return d(Br, Kt);
            }
            function sn(f, g) {
              if (g == 'as') return (C.marked = 'keyword'), d(Br);
            }
            function Wr(f, g) {
              if (g == 'from') return (C.marked = 'keyword'), d(te);
            }
            function Je(f) {
              return f == ']' ? d() : Y(Ce(Ee, ']'));
            }
            function ae() {
              return Y(R('form'), yt, Se('{'), R('}'), Ce(Vt, '}'), oe, oe);
            }
            function Vt() {
              return Y(yt, It);
            }
            function un(f, g) {
              return (
                f.lastType == 'operator' ||
                f.lastType == ',' ||
                H.test(g.charAt(0)) ||
                /[,.]/.test(g.charAt(0))
              );
            }
            function Ft(f, g, A) {
              return (
                (g.tokenize == V &&
                  /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                    g.lastType
                  )) ||
                (g.lastType == 'quasi' &&
                  /\{\s*$/.test(f.string.slice(0, f.pos - (A || 0))))
              );
            }
            return {
              startState: function (f) {
                var g = {
                  tokenize: V,
                  lastType: 'sof',
                  cc: [],
                  lexical: new le((f || 0) - de, 0, 'block', !1),
                  localVars: I.localVars,
                  context: I.localVars && new N(null, null, !1),
                  indented: f || 0,
                };
                return (
                  I.globalVars &&
                    typeof I.globalVars == 'object' &&
                    (g.globalVars = I.globalVars),
                  g
                );
              },
              token: function (f, g) {
                if (
                  (f.sol() &&
                    (g.lexical.hasOwnProperty('align') ||
                      (g.lexical.align = !1),
                    (g.indented = f.indentation()),
                    ue(f, g)),
                  g.tokenize != ie && f.eatSpace())
                )
                  return null;
                var A = g.tokenize(f, g);
                return be == 'comment'
                  ? A
                  : ((g.lastType =
                      be == 'operator' && (ke == '++' || ke == '--')
                        ? 'incdec'
                        : be),
                    Ae(g, A, be, ke, f));
              },
              indent: function (f, g) {
                if (f.tokenize == ie || f.tokenize == Fe) return F.Pass;
                if (f.tokenize != V) return 0;
                var A = g && g.charAt(0),
                  B = f.lexical,
                  L;
                if (!/^\s*else\b/.test(g))
                  for (var X = f.cc.length - 1; X >= 0; --X) {
                    var _e = f.cc[X];
                    if (_e == oe) B = B.prev;
                    else if (_e != Or && _e != ye) break;
                  }
                for (
                  ;
                  (B.type == 'stat' || B.type == 'form') &&
                  (A == '}' ||
                    ((L = f.cc[f.cc.length - 1]) &&
                      (L == Ne || L == Re) &&
                      !/^[,\.=+\-*:?[\(]/.test(g)));

                )
                  B = B.prev;
                Me && B.type == ')' && B.prev.type == 'stat' && (B = B.prev);
                var it = B.type,
                  xt = A == it;
                return it == 'vardef'
                  ? B.indented +
                      (f.lastType == 'operator' || f.lastType == ','
                        ? B.info.length + 1
                        : 0)
                  : it == 'form' && A == '{'
                    ? B.indented
                    : it == 'form'
                      ? B.indented + de
                      : it == 'stat'
                        ? B.indented + (un(f, g) ? Me || de : 0)
                        : B.info == 'switch' &&
                            !xt &&
                            I.doubleIndentSwitch != !1
                          ? B.indented +
                            (/^(?:case|default)\b/.test(g) ? de : 2 * de)
                          : B.align
                            ? B.column + (xt ? 0 : 1)
                            : B.indented + (xt ? 0 : de);
              },
              electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
              blockCommentStart: k ? null : '/*',
              blockCommentEnd: k ? null : '*/',
              blockCommentContinue: k ? null : ' * ',
              lineComment: k ? null : '//',
              fold: 'brace',
              closeBrackets: '()[]{}\'\'""``',
              helperType: k ? 'json' : 'javascript',
              jsonldMode: se,
              jsonMode: k,
              expressionAllowed: Ft,
              skipExpression: function (f) {
                Ae(f, 'atom', 'atom', 'true', new F.StringStream('', 2, null));
              },
            };
          }),
            F.registerHelper('wordChars', 'javascript', /[\w$]/),
            F.defineMIME('text/javascript', 'javascript'),
            F.defineMIME('text/ecmascript', 'javascript'),
            F.defineMIME('application/javascript', 'javascript'),
            F.defineMIME('application/x-javascript', 'javascript'),
            F.defineMIME('application/ecmascript', 'javascript'),
            F.defineMIME('application/json', { name: 'javascript', json: !0 }),
            F.defineMIME('application/x-json', {
              name: 'javascript',
              json: !0,
            }),
            F.defineMIME('application/manifest+json', {
              name: 'javascript',
              json: !0,
            }),
            F.defineMIME('application/ld+json', {
              name: 'javascript',
              jsonld: !0,
            }),
            F.defineMIME('text/typescript', {
              name: 'javascript',
              typescript: !0,
            }),
            F.defineMIME('application/typescript', {
              name: 'javascript',
              typescript: !0,
            });
        });
      })()),
    va.exports
  );
}
(function (jt, Jt) {
  (function (F) {
    F(Zt, wa(), Sa(), ka());
  })(function (F) {
    var Pe = {
      script: [
        ['lang', /(javascript|babel)/i, 'javascript'],
        [
          'type',
          /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,
          'javascript',
        ],
        ['type', /./, 'text/plain'],
        [null, null, 'javascript'],
      ],
      style: [
        ['lang', /^css$/i, 'css'],
        ['type', /^(text\/)?(x-)?(stylesheet|css)$/i, 'css'],
        ['type', /./, 'text/plain'],
        [null, null, 'css'],
      ],
    };
    function I(ve, O, H) {
      var P = ve.current(),
        K = P.search(O);
      return (
        K > -1
          ? ve.backUp(P.length - K)
          : P.match(/<\/?$/) &&
            (ve.backUp(P.length), ve.match(O, !1) || ve.match(P)),
        H
      );
    }
    var de = {};
    function Me(ve) {
      var O = de[ve];
      return (
        O ||
        (de[ve] = new RegExp('\\s+' + ve + `\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))
      );
    }
    function se(ve, O) {
      var H = ve.match(Me(O));
      return H ? /^\s*(.*?)\s*$/.exec(H[2])[1] : '';
    }
    function k(ve, O) {
      return new RegExp((O ? '^' : '') + '</\\s*' + ve + '\\s*>', 'i');
    }
    function ee(ve, O) {
      for (var H in ve)
        for (
          var P = O[H] || (O[H] = []), K = ve[H], be = K.length - 1;
          be >= 0;
          be--
        )
          P.unshift(K[be]);
    }
    function U(ve, O) {
      for (var H = 0; H < ve.length; H++) {
        var P = ve[H];
        if (!P[0] || P[1].test(se(O, P[0]))) return P[2];
      }
    }
    F.defineMode(
      'htmlmixed',
      function (ve, O) {
        var H = F.getMode(ve, {
            name: 'xml',
            htmlMode: !0,
            multilineTagIndentFactor: O.multilineTagIndentFactor,
            multilineTagIndentPastTag: O.multilineTagIndentPastTag,
            allowMissingTagName: O.allowMissingTagName,
          }),
          P = {},
          K = O && O.tags,
          be = O && O.scriptTypes;
        if ((ee(Pe, P), K && ee(K, P), be))
          for (var ke = be.length - 1; ke >= 0; ke--)
            P.script.unshift(['type', be[ke].matches, be[ke].mode]);
        function Q(V, $) {
          var ie = H.token(V, $.htmlState),
            Fe = /\btag\b/.test(ie),
            me;
          if (
            Fe &&
            !/[<>\s\/]/.test(V.current()) &&
            (me = $.htmlState.tagName && $.htmlState.tagName.toLowerCase()) &&
            P.hasOwnProperty(me)
          )
            $.inTag = me + ' ';
          else if ($.inTag && Fe && />$/.test(V.current())) {
            var ue = /^([\S]+) (.*)/.exec($.inTag);
            $.inTag = null;
            var ze = V.current() == '>' && U(P[ue[1]], ue[2]),
              le = F.getMode(ve, ze),
              W = k(ue[1], !0),
              Ae = k(ue[1], !1);
            ($.token = function (C, Y) {
              return C.match(W, !1)
                ? ((Y.token = Q), (Y.localState = Y.localMode = null), null)
                : I(C, Ae, Y.localMode.token(C, Y.localState));
            }),
              ($.localMode = le),
              ($.localState = F.startState(le, H.indent($.htmlState, '', '')));
          } else
            $.inTag && (($.inTag += V.current()), V.eol() && ($.inTag += ' '));
          return ie;
        }
        return {
          startState: function () {
            var V = F.startState(H);
            return {
              token: Q,
              inTag: null,
              localMode: null,
              localState: null,
              htmlState: V,
            };
          },
          copyState: function (V) {
            var $;
            return (
              V.localState && ($ = F.copyState(V.localMode, V.localState)),
              {
                token: V.token,
                inTag: V.inTag,
                localMode: V.localMode,
                localState: $,
                htmlState: F.copyState(H, V.htmlState),
              }
            );
          },
          token: function (V, $) {
            return $.token(V, $);
          },
          indent: function (V, $, ie) {
            return !V.localMode || /^\s*<\//.test($)
              ? H.indent(V.htmlState, $, ie)
              : V.localMode.indent
                ? V.localMode.indent(V.localState, $, ie)
                : F.Pass;
          },
          innerMode: function (V) {
            return {
              state: V.localState || V.htmlState,
              mode: V.localMode || H,
            };
          },
        };
      },
      'xml',
      'javascript',
      'css'
    ),
      F.defineMIME('text/html', 'htmlmixed');
  });
})();
Sa();
(function (jt, Jt) {
  (function (F) {
    F(Zt);
  })(function (F) {
    function Pe(ee) {
      return new RegExp('^((' + ee.join(')|(') + '))\\b');
    }
    var I = Pe(['and', 'or', 'not', 'is']),
      de = [
        'as',
        'assert',
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'lambda',
        'pass',
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield',
        'in',
        'False',
        'True',
      ],
      Me = [
        'abs',
        'all',
        'any',
        'bin',
        'bool',
        'bytearray',
        'callable',
        'chr',
        'classmethod',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'filter',
        'float',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'hex',
        'id',
        'input',
        'int',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'list',
        'locals',
        'map',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'property',
        'range',
        'repr',
        'reversed',
        'round',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'vars',
        'zip',
        '__import__',
        'NotImplemented',
        'Ellipsis',
        '__debug__',
      ];
    F.registerHelper(
      'hintWords',
      'python',
      de.concat(Me).concat(['exec', 'print'])
    );
    function se(ee) {
      return ee.scopes[ee.scopes.length - 1];
    }
    F.defineMode('python', function (ee, U) {
      for (
        var ve = 'error',
          O = U.delimiters || U.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/,
          H = [
            U.singleOperators,
            U.doubleOperators,
            U.doubleDelimiters,
            U.tripleDelimiters,
            U.operators ||
              /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
          ],
          P = 0;
        P < H.length;
        P++
      )
        H[P] || H.splice(P--, 1);
      var K = U.hangingIndent || ee.indentUnit,
        be = de,
        ke = Me;
      U.extra_keywords != null && (be = be.concat(U.extra_keywords)),
        U.extra_builtins != null && (ke = ke.concat(U.extra_builtins));
      var Q = !(U.version && Number(U.version) < 3);
      if (Q) {
        var V =
          U.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
        (be = be.concat([
          'nonlocal',
          'None',
          'aiter',
          'anext',
          'async',
          'await',
          'breakpoint',
          'match',
          'case',
        ])),
          (ke = ke.concat(['ascii', 'bytes', 'exec', 'print']));
        var $ = new RegExp(
          `^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,
          'i'
        );
      } else {
        var V = U.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
        (be = be.concat(['exec', 'print'])),
          (ke = ke.concat([
            'apply',
            'basestring',
            'buffer',
            'cmp',
            'coerce',
            'execfile',
            'file',
            'intern',
            'long',
            'raw_input',
            'reduce',
            'reload',
            'unichr',
            'unicode',
            'xrange',
            'None',
          ]));
        var $ = new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`, 'i');
      }
      var ie = Pe(be),
        Fe = Pe(ke);
      function me(S, w) {
        var m = S.sol() && w.lastToken != '\\';
        if ((m && (w.indent = S.indentation()), m && se(w).type == 'py')) {
          var y = se(w).offset;
          if (S.eatSpace()) {
            var N = S.indentation();
            return (
              N > y
                ? W(w)
                : N < y && C(S, w) && S.peek() != '#' && (w.errorToken = !0),
              null
            );
          } else {
            var re = ue(S, w);
            return y > 0 && C(S, w) && (re += ' ' + ve), re;
          }
        }
        return ue(S, w);
      }
      function ue(S, w, m) {
        if (S.eatSpace()) return null;
        if (!m && S.match(/^#.*/)) return 'comment';
        if (S.match(/^[0-9\.]/, !1)) {
          var y = !1;
          if (
            (S.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (y = !0),
            S.match(/^[\d_]+\.\d*/) && (y = !0),
            S.match(/^\.\d+/) && (y = !0),
            y)
          )
            return S.eat(/J/i), 'number';
          var N = !1;
          if (
            (S.match(/^0x[0-9a-f_]+/i) && (N = !0),
            S.match(/^0b[01_]+/i) && (N = !0),
            S.match(/^0o[0-7_]+/i) && (N = !0),
            S.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (S.eat(/J/i), (N = !0)),
            S.match(/^0(?![\dx])/i) && (N = !0),
            N)
          )
            return S.eat(/L/i), 'number';
        }
        if (S.match($)) {
          var re = S.current().toLowerCase().indexOf('f') !== -1;
          return re
            ? ((w.tokenize = ze(S.current(), w.tokenize)), w.tokenize(S, w))
            : ((w.tokenize = le(S.current(), w.tokenize)), w.tokenize(S, w));
        }
        for (var p = 0; p < H.length; p++) if (S.match(H[p])) return 'operator';
        return S.match(O)
          ? 'punctuation'
          : w.lastToken == '.' && S.match(V)
            ? 'property'
            : S.match(ie) || S.match(I)
              ? 'keyword'
              : S.match(Fe)
                ? 'builtin'
                : S.match(/^(self|cls)\b/)
                  ? 'variable-2'
                  : S.match(V)
                    ? w.lastToken == 'def' || w.lastToken == 'class'
                      ? 'def'
                      : 'variable'
                    : (S.next(), m ? null : ve);
      }
      function ze(S, w) {
        for (; 'rubf'.indexOf(S.charAt(0).toLowerCase()) >= 0; )
          S = S.substr(1);
        var m = S.length == 1,
          y = 'string';
        function N(p) {
          return function (c, G) {
            var ye = ue(c, G, !0);
            return (
              ye == 'punctuation' &&
                (c.current() == '{'
                  ? (G.tokenize = N(p + 1))
                  : c.current() == '}' &&
                    (p > 1 ? (G.tokenize = N(p - 1)) : (G.tokenize = re))),
              ye
            );
          };
        }
        function re(p, c) {
          for (; !p.eol(); )
            if ((p.eatWhile(/[^'"\{\}\\]/), p.eat('\\'))) {
              if ((p.next(), m && p.eol())) return y;
            } else {
              if (p.match(S)) return (c.tokenize = w), y;
              if (p.match('{{')) return y;
              if (p.match('{', !1))
                return (c.tokenize = N(0)), p.current() ? y : c.tokenize(p, c);
              if (p.match('}}')) return y;
              if (p.match('}')) return ve;
              p.eat(/['"]/);
            }
          if (m) {
            if (U.singleLineStringErrors) return ve;
            c.tokenize = w;
          }
          return y;
        }
        return (re.isString = !0), re;
      }
      function le(S, w) {
        for (; 'rubf'.indexOf(S.charAt(0).toLowerCase()) >= 0; )
          S = S.substr(1);
        var m = S.length == 1,
          y = 'string';
        function N(re, p) {
          for (; !re.eol(); )
            if ((re.eatWhile(/[^'"\\]/), re.eat('\\'))) {
              if ((re.next(), m && re.eol())) return y;
            } else {
              if (re.match(S)) return (p.tokenize = w), y;
              re.eat(/['"]/);
            }
          if (m) {
            if (U.singleLineStringErrors) return ve;
            p.tokenize = w;
          }
          return y;
        }
        return (N.isString = !0), N;
      }
      function W(S) {
        for (; se(S).type != 'py'; ) S.scopes.pop();
        S.scopes.push({
          offset: se(S).offset + ee.indentUnit,
          type: 'py',
          align: null,
        });
      }
      function Ae(S, w, m) {
        var y = S.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : S.column() + 1;
        w.scopes.push({ offset: w.indent + K, type: m, align: y });
      }
      function C(S, w) {
        for (
          var m = S.indentation();
          w.scopes.length > 1 && se(w).offset > m;

        ) {
          if (se(w).type != 'py') return !0;
          w.scopes.pop();
        }
        return se(w).offset != m;
      }
      function Y(S, w) {
        S.sol() && ((w.beginningOfLine = !0), (w.dedent = !1));
        var m = w.tokenize(S, w),
          y = S.current();
        if (w.beginningOfLine && y == '@')
          return S.match(V, !1) ? 'meta' : Q ? 'operator' : ve;
        if (
          (/\S/.test(y) && (w.beginningOfLine = !1),
          (m == 'variable' || m == 'builtin') &&
            w.lastToken == 'meta' &&
            (m = 'meta'),
          (y == 'pass' || y == 'return') && (w.dedent = !0),
          y == 'lambda' && (w.lambda = !0),
          y == ':' &&
            !w.lambda &&
            se(w).type == 'py' &&
            S.match(/^\s*(?:#|$)/, !1) &&
            W(w),
          y.length == 1 && !/string|comment/.test(m))
        ) {
          var N = '[({'.indexOf(y);
          if (
            (N != -1 && Ae(S, w, '])}'.slice(N, N + 1)),
            (N = '])}'.indexOf(y)),
            N != -1)
          )
            if (se(w).type == y) w.indent = w.scopes.pop().offset - K;
            else return ve;
        }
        return (
          w.dedent &&
            S.eol() &&
            se(w).type == 'py' &&
            w.scopes.length > 1 &&
            w.scopes.pop(),
          m
        );
      }
      var d = {
        startState: function (S) {
          return {
            tokenize: me,
            scopes: [{ offset: S || 0, type: 'py', align: null }],
            indent: S || 0,
            lastToken: null,
            lambda: !1,
            dedent: 0,
          };
        },
        token: function (S, w) {
          var m = w.errorToken;
          m && (w.errorToken = !1);
          var y = Y(S, w);
          return (
            y &&
              y != 'comment' &&
              (w.lastToken =
                y == 'keyword' || y == 'punctuation' ? S.current() : y),
            y == 'punctuation' && (y = null),
            S.eol() && w.lambda && (w.lambda = !1),
            m ? y + ' ' + ve : y
          );
        },
        indent: function (S, w) {
          if (S.tokenize != me) return S.tokenize.isString ? F.Pass : 0;
          var m = se(S),
            y =
              m.type == w.charAt(0) ||
              (m.type == 'py' &&
                !S.dedent &&
                /^(else:|elif |except |finally:)/.test(w));
          return m.align != null
            ? m.align - (y ? 1 : 0)
            : m.offset - (y ? K : 0);
        },
        electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
        closeBrackets: { triples: `'"` },
        lineComment: '#',
        fold: 'indent',
      };
      return d;
    }),
      F.defineMIME('text/x-python', 'python');
    var k = function (ee) {
      return ee.split(' ');
    };
    F.defineMIME('text/x-cython', {
      name: 'python',
      extra_keywords: k(
        'by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE'
      ),
    });
  });
})();
(function (jt, Jt) {
  (function (F) {
    F(Zt);
  })(function (F) {
    function Pe(m, y, N, re, p, c) {
      (this.indented = m),
        (this.column = y),
        (this.type = N),
        (this.info = re),
        (this.align = p),
        (this.prev = c);
    }
    function I(m, y, N, re) {
      var p = m.indented;
      return (
        m.context &&
          m.context.type == 'statement' &&
          N != 'statement' &&
          (p = m.context.indented),
        (m.context = new Pe(p, y, N, re, null, m.context))
      );
    }
    function de(m) {
      var y = m.context.type;
      return (
        (y == ')' || y == ']' || y == '}') && (m.indented = m.context.indented),
        (m.context = m.context.prev)
      );
    }
    function Me(m, y, N) {
      if (
        y.prevToken == 'variable' ||
        y.prevToken == 'type' ||
        /\S(?:[^- ]>|[*\]])\s*$|\*$/.test(m.string.slice(0, N)) ||
        (y.typeAtEndOfLine && m.column() == m.indentation())
      )
        return !0;
    }
    function se(m) {
      for (;;) {
        if (!m || m.type == 'top') return !0;
        if (m.type == '}' && m.prev.info != 'namespace') return !1;
        m = m.prev;
      }
    }
    F.defineMode('clike', function (m, y) {
      var N = m.indentUnit,
        re = y.statementIndentUnit || N,
        p = y.dontAlignCalls,
        c = y.keywords || {},
        G = y.types || {},
        ye = y.builtin || {},
        R = y.blockKeywords || {},
        oe = y.defKeywords || {},
        Se = y.atoms || {},
        Te = y.hooks || {},
        xe = y.multiLineStrings,
        te = y.indentStatements !== !1,
        Ee = y.indentSwitch !== !1,
        qe = y.namespaceSeparator,
        Ve = y.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
        ct = y.numberStart || /[\d\.]/,
        Ne =
          y.number ||
          /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
        Re = y.isOperatorChar || /[+\-*&%=<>!?|\/]/,
        Ue = y.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
        et = y.isReservedIdentifier || !1,
        he,
        Oe;
      function T(ne, we) {
        var fe = ne.next();
        if (Te[fe]) {
          var Be = Te[fe](ne, we);
          if (Be !== !1) return Be;
        }
        if (fe == '"' || fe == "'")
          return (we.tokenize = z(fe)), we.tokenize(ne, we);
        if (ct.test(fe)) {
          if ((ne.backUp(1), ne.match(Ne))) return 'number';
          ne.next();
        }
        if (Ve.test(fe)) return (he = fe), null;
        if (fe == '/') {
          if (ne.eat('*')) return (we.tokenize = M), M(ne, we);
          if (ne.eat('/')) return ne.skipToEnd(), 'comment';
        }
        if (Re.test(fe)) {
          for (; !ne.match(/^\/[\/*]/, !1) && ne.eat(Re); );
          return 'operator';
        }
        if ((ne.eatWhile(Ue), qe)) for (; ne.match(qe); ) ne.eatWhile(Ue);
        var Ce = ne.current();
        return ee(c, Ce)
          ? (ee(R, Ce) && (he = 'newstatement'),
            ee(oe, Ce) && (Oe = !0),
            'keyword')
          : ee(G, Ce)
            ? 'type'
            : ee(ye, Ce) || (et && et(Ce))
              ? (ee(R, Ce) && (he = 'newstatement'), 'builtin')
              : ee(Se, Ce)
                ? 'atom'
                : 'variable';
      }
      function z(ne) {
        return function (we, fe) {
          for (var Be = !1, Ce, Lt = !1; (Ce = we.next()) != null; ) {
            if (Ce == ne && !Be) {
              Lt = !0;
              break;
            }
            Be = !Be && Ce == '\\';
          }
          return (Lt || !(Be || xe)) && (fe.tokenize = null), 'string';
        };
      }
      function M(ne, we) {
        for (var fe = !1, Be; (Be = ne.next()); ) {
          if (Be == '/' && fe) {
            we.tokenize = null;
            break;
          }
          fe = Be == '*';
        }
        return 'comment';
      }
      function Ie(ne, we) {
        y.typeFirstDefinitions &&
          ne.eol() &&
          se(we.context) &&
          (we.typeAtEndOfLine = Me(ne, we, ne.pos));
      }
      return {
        startState: function (ne) {
          return {
            tokenize: null,
            context: new Pe((ne || 0) - N, 0, 'top', null, !1),
            indented: 0,
            startOfLine: !0,
            prevToken: null,
          };
        },
        token: function (ne, we) {
          var fe = we.context;
          if (
            (ne.sol() &&
              (fe.align == null && (fe.align = !1),
              (we.indented = ne.indentation()),
              (we.startOfLine = !0)),
            ne.eatSpace())
          )
            return Ie(ne, we), null;
          he = Oe = null;
          var Be = (we.tokenize || T)(ne, we);
          if (Be == 'comment' || Be == 'meta') return Be;
          if (
            (fe.align == null && (fe.align = !0),
            he == ';' ||
              he == ':' ||
              (he == ',' && ne.match(/^\s*(?:\/\/.*)?$/, !1)))
          )
            for (; we.context.type == 'statement'; ) de(we);
          else if (he == '{') I(we, ne.column(), '}');
          else if (he == '[') I(we, ne.column(), ']');
          else if (he == '(') I(we, ne.column(), ')');
          else if (he == '}') {
            for (; fe.type == 'statement'; ) fe = de(we);
            for (fe.type == '}' && (fe = de(we)); fe.type == 'statement'; )
              fe = de(we);
          } else
            he == fe.type
              ? de(we)
              : te &&
                (((fe.type == '}' || fe.type == 'top') && he != ';') ||
                  (fe.type == 'statement' && he == 'newstatement')) &&
                I(we, ne.column(), 'statement', ne.current());
          if (
            (Be == 'variable' &&
              (we.prevToken == 'def' ||
                (y.typeFirstDefinitions &&
                  Me(ne, we, ne.start) &&
                  se(we.context) &&
                  ne.match(/^\s*\(/, !1))) &&
              (Be = 'def'),
            Te.token)
          ) {
            var Ce = Te.token(ne, we, Be);
            Ce !== void 0 && (Be = Ce);
          }
          return (
            Be == 'def' && y.styleDefs === !1 && (Be = 'variable'),
            (we.startOfLine = !1),
            (we.prevToken = Oe ? 'def' : Be || he),
            Ie(ne, we),
            Be
          );
        },
        indent: function (ne, we) {
          if (
            (ne.tokenize != T && ne.tokenize != null) ||
            (ne.typeAtEndOfLine && se(ne.context))
          )
            return F.Pass;
          var fe = ne.context,
            Be = we && we.charAt(0),
            Ce = Be == fe.type;
          if (
            (fe.type == 'statement' && Be == '}' && (fe = fe.prev),
            y.dontIndentStatements)
          )
            for (
              ;
              fe.type == 'statement' && y.dontIndentStatements.test(fe.info);

            )
              fe = fe.prev;
          if (Te.indent) {
            var Lt = Te.indent(ne, fe, we, N);
            if (typeof Lt == 'number') return Lt;
          }
          var Et = fe.prev && fe.prev.info == 'switch';
          if (y.allmanIndentation && /[{(]/.test(Be)) {
            for (; fe.type != 'top' && fe.type != '}'; ) fe = fe.prev;
            return fe.indented;
          }
          return fe.type == 'statement'
            ? fe.indented + (Be == '{' ? 0 : re)
            : fe.align && (!p || fe.type != ')')
              ? fe.column + (Ce ? 0 : 1)
              : fe.type == ')' && !Ce
                ? fe.indented + re
                : fe.indented +
                  (Ce ? 0 : N) +
                  (!Ce && Et && !/^(?:case|default)\b/.test(we) ? N : 0);
        },
        electricInput: Ee
          ? /^\s*(?:case .*?:|default:|\{\}?|\})$/
          : /^\s*[{}]$/,
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        blockCommentContinue: ' * ',
        lineComment: '//',
        fold: 'brace',
      };
    });
    function k(m) {
      for (var y = {}, N = m.split(' '), re = 0; re < N.length; ++re)
        y[N[re]] = !0;
      return y;
    }
    function ee(m, y) {
      return typeof m == 'function' ? m(y) : m.propertyIsEnumerable(y);
    }
    var U =
        'auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran',
      ve =
        'alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq',
      O =
        'bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available',
      H =
        'FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT',
      P = k('int long char short double float unsigned signed void bool'),
      K = k('SEL instancetype id Class Protocol BOOL');
    function be(m) {
      return ee(P, m) || /.+_t$/.test(m);
    }
    function ke(m) {
      return be(m) || ee(K, m);
    }
    var Q = 'case do else for if switch while struct enum union',
      V = 'struct enum union';
    function $(m, y) {
      if (!y.startOfLine) return !1;
      for (var N, re = null; (N = m.peek()); ) {
        if (N == '\\' && m.match(/^.$/)) {
          re = $;
          break;
        } else if (N == '/' && m.match(/^\/[\/\*]/, !1)) break;
        m.next();
      }
      return (y.tokenize = re), 'meta';
    }
    function ie(m, y) {
      return y.prevToken == 'type' ? 'type' : !1;
    }
    function Fe(m) {
      return !m || m.length < 2 || m[0] != '_'
        ? !1
        : m[1] == '_' || m[1] !== m[1].toLowerCase();
    }
    function me(m) {
      return m.eatWhile(/[\w\.']/), 'number';
    }
    function ue(m, y) {
      if ((m.backUp(1), m.match(/^(?:R|u8R|uR|UR|LR)/))) {
        var N = m.match(/^"([^\s\\()]{0,16})\(/);
        return N
          ? ((y.cpp11RawStringDelim = N[1]), (y.tokenize = W), W(m, y))
          : !1;
      }
      return m.match(/^(?:u8|u|U|L)/)
        ? m.match(/^["']/, !1)
          ? 'string'
          : !1
        : (m.next(), !1);
    }
    function ze(m) {
      var y = /(\w+)::~?(\w+)$/.exec(m);
      return y && y[1] == y[2];
    }
    function le(m, y) {
      for (var N; (N = m.next()) != null; )
        if (N == '"' && !m.eat('"')) {
          y.tokenize = null;
          break;
        }
      return 'string';
    }
    function W(m, y) {
      var N = y.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&'),
        re = m.match(new RegExp('.*?\\)' + N + '"'));
      return re ? (y.tokenize = null) : m.skipToEnd(), 'string';
    }
    function Ae(m, y) {
      typeof m == 'string' && (m = [m]);
      var N = [];
      function re(c) {
        if (c) for (var G in c) c.hasOwnProperty(G) && N.push(G);
      }
      re(y.keywords),
        re(y.types),
        re(y.builtin),
        re(y.atoms),
        N.length &&
          ((y.helperType = m[0]), F.registerHelper('hintWords', m[0], N));
      for (var p = 0; p < m.length; ++p) F.defineMIME(m[p], y);
    }
    Ae(['text/x-csrc', 'text/x-c', 'text/x-chdr'], {
      name: 'clike',
      keywords: k(U),
      types: be,
      blockKeywords: k(Q),
      defKeywords: k(V),
      typeFirstDefinitions: !0,
      atoms: k('NULL true false'),
      isReservedIdentifier: Fe,
      hooks: { '#': $, '*': ie },
      modeProps: { fold: ['brace', 'include'] },
    }),
      Ae(['text/x-c++src', 'text/x-c++hdr'], {
        name: 'clike',
        keywords: k(U + ' ' + ve),
        types: be,
        blockKeywords: k(Q + ' class try catch'),
        defKeywords: k(V + ' class namespace'),
        typeFirstDefinitions: !0,
        atoms: k('true false NULL nullptr'),
        dontIndentStatements: /^template$/,
        isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
        isReservedIdentifier: Fe,
        hooks: {
          '#': $,
          '*': ie,
          u: ue,
          U: ue,
          L: ue,
          R: ue,
          0: me,
          1: me,
          2: me,
          3: me,
          4: me,
          5: me,
          6: me,
          7: me,
          8: me,
          9: me,
          token: function (m, y, N) {
            if (
              N == 'variable' &&
              m.peek() == '(' &&
              (y.prevToken == ';' ||
                y.prevToken == null ||
                y.prevToken == '}') &&
              ze(m.current())
            )
              return 'def';
          },
        },
        namespaceSeparator: '::',
        modeProps: { fold: ['brace', 'include'] },
      }),
      Ae('text/x-java', {
        name: 'clike',
        keywords: k(
          'abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface'
        ),
        types: k(
          'var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void'
        ),
        blockKeywords: k('catch class do else finally for if switch try while'),
        defKeywords: k('class interface enum @interface'),
        typeFirstDefinitions: !0,
        atoms: k('true false null'),
        number:
          /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
        hooks: {
          '@': function (m) {
            return m.match('interface', !1)
              ? !1
              : (m.eatWhile(/[\w\$_]/), 'meta');
          },
          '"': function (m, y) {
            return m.match(/""$/) ? ((y.tokenize = C), y.tokenize(m, y)) : !1;
          },
        },
        modeProps: { fold: ['brace', 'import'] },
      }),
      Ae('text/x-csharp', {
        name: 'clike',
        keywords: k(
          'abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield'
        ),
        types: k(
          'Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong'
        ),
        blockKeywords: k(
          'catch class do else finally for foreach if struct switch try while'
        ),
        defKeywords: k('class interface namespace record struct var'),
        typeFirstDefinitions: !0,
        atoms: k('true false null'),
        hooks: {
          '@': function (m, y) {
            return m.eat('"')
              ? ((y.tokenize = le), le(m, y))
              : (m.eatWhile(/[\w\$_]/), 'meta');
          },
        },
      });
    function C(m, y) {
      for (var N = !1; !m.eol(); ) {
        if (!N && m.match('"""')) {
          y.tokenize = null;
          break;
        }
        N = m.next() == '\\' && !N;
      }
      return 'string';
    }
    function Y(m) {
      return function (y, N) {
        for (var re; (re = y.next()); )
          if (re == '*' && y.eat('/'))
            if (m == 1) {
              N.tokenize = null;
              break;
            } else return (N.tokenize = Y(m - 1)), N.tokenize(y, N);
          else if (re == '/' && y.eat('*'))
            return (N.tokenize = Y(m + 1)), N.tokenize(y, N);
        return 'comment';
      };
    }
    Ae('text/x-scala', {
      name: 'clike',
      keywords: k(
        'abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble'
      ),
      types: k(
        'AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void'
      ),
      multiLineStrings: !0,
      blockKeywords: k(
        'catch class enum do else finally for forSome if match switch try while'
      ),
      defKeywords: k('class enum def object package trait type val var'),
      atoms: k('true false null'),
      indentStatements: !1,
      indentSwitch: !1,
      isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
      hooks: {
        '@': function (m) {
          return m.eatWhile(/[\w\$_]/), 'meta';
        },
        '"': function (m, y) {
          return m.match('""') ? ((y.tokenize = C), y.tokenize(m, y)) : !1;
        },
        "'": function (m) {
          return m.match(/^(\\[^'\s]+|[^\\'])'/)
            ? 'string-2'
            : (m.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom');
        },
        '=': function (m, y) {
          var N = y.context;
          return N.type == '}' && N.align && m.eat('>')
            ? ((y.context = new Pe(
                N.indented,
                N.column,
                N.type,
                N.info,
                null,
                N.prev
              )),
              'operator')
            : !1;
        },
        '/': function (m, y) {
          return m.eat('*') ? ((y.tokenize = Y(1)), y.tokenize(m, y)) : !1;
        },
      },
      modeProps: { closeBrackets: { pairs: '()[]{}""', triples: '"' } },
    });
    function d(m) {
      return function (y, N) {
        for (var re = !1, p, c = !1; !y.eol(); ) {
          if (!m && !re && y.match('"')) {
            c = !0;
            break;
          }
          if (m && y.match('"""')) {
            c = !0;
            break;
          }
          (p = y.next()),
            !re && p == '$' && y.match('{') && y.skipTo('}'),
            (re = !re && p == '\\' && !m);
        }
        return (c || !m) && (N.tokenize = null), 'string';
      };
    }
    Ae('text/x-kotlin', {
      name: 'clike',
      keywords: k(
        'package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value'
      ),
      types: k(
        'Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit'
      ),
      intendSwitch: !1,
      indentStatements: !1,
      multiLineStrings: !0,
      number:
        /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
      blockKeywords: k(
        'catch class do else finally for if where try while enum'
      ),
      defKeywords: k('class val var object interface fun'),
      atoms: k('true false null this'),
      hooks: {
        '@': function (m) {
          return m.eatWhile(/[\w\$_]/), 'meta';
        },
        '*': function (m, y) {
          return y.prevToken == '.' ? 'variable' : 'operator';
        },
        '"': function (m, y) {
          return (y.tokenize = d(m.match('""'))), y.tokenize(m, y);
        },
        '/': function (m, y) {
          return m.eat('*') ? ((y.tokenize = Y(1)), y.tokenize(m, y)) : !1;
        },
        indent: function (m, y, N, re) {
          var p = N && N.charAt(0);
          if ((m.prevToken == '}' || m.prevToken == ')') && N == '')
            return m.indented;
          if (
            (m.prevToken == 'operator' && N != '}' && m.context.type != '}') ||
            (m.prevToken == 'variable' && p == '.') ||
            ((m.prevToken == '}' || m.prevToken == ')') && p == '.')
          )
            return re * 2 + y.indented;
          if (y.align && y.type == '}')
            return (
              y.indented + (m.context.type == (N || '').charAt(0) ? 0 : re)
            );
        },
      },
      modeProps: { closeBrackets: { triples: '"' } },
    }),
      Ae(['x-shader/x-vertex', 'x-shader/x-fragment'], {
        name: 'clike',
        keywords: k(
          'sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout'
        ),
        types: k(
          'float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4'
        ),
        blockKeywords: k('for while do if else struct'),
        builtin: k(
          'radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4'
        ),
        atoms: k(
          'true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers'
        ),
        indentSwitch: !1,
        hooks: { '#': $ },
        modeProps: { fold: ['brace', 'include'] },
      }),
      Ae('text/x-nesc', {
        name: 'clike',
        keywords: k(
          U +
            ' as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends'
        ),
        types: be,
        blockKeywords: k(Q),
        atoms: k('null true false'),
        hooks: { '#': $ },
        modeProps: { fold: ['brace', 'include'] },
      }),
      Ae('text/x-objectivec', {
        name: 'clike',
        keywords: k(U + ' ' + O),
        types: ke,
        builtin: k(H),
        blockKeywords: k(
          Q + ' @synthesize @try @catch @finally @autoreleasepool @synchronized'
        ),
        defKeywords: k(V + ' @interface @implementation @protocol @class'),
        dontIndentStatements: /^@.*$/,
        typeFirstDefinitions: !0,
        atoms: k('YES NO NULL Nil nil true false nullptr'),
        isReservedIdentifier: Fe,
        hooks: { '#': $, '*': ie },
        modeProps: { fold: ['brace', 'include'] },
      }),
      Ae('text/x-objectivec++', {
        name: 'clike',
        keywords: k(U + ' ' + O + ' ' + ve),
        types: ke,
        builtin: k(H),
        blockKeywords: k(
          Q +
            ' @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch'
        ),
        defKeywords: k(
          V + ' @interface @implementation @protocol @class class namespace'
        ),
        dontIndentStatements: /^@.*$|^template$/,
        typeFirstDefinitions: !0,
        atoms: k('YES NO NULL Nil nil true false nullptr'),
        isReservedIdentifier: Fe,
        hooks: {
          '#': $,
          '*': ie,
          u: ue,
          U: ue,
          L: ue,
          R: ue,
          0: me,
          1: me,
          2: me,
          3: me,
          4: me,
          5: me,
          6: me,
          7: me,
          8: me,
          9: me,
          token: function (m, y, N) {
            if (
              N == 'variable' &&
              m.peek() == '(' &&
              (y.prevToken == ';' ||
                y.prevToken == null ||
                y.prevToken == '}') &&
              ze(m.current())
            )
              return 'def';
          },
        },
        namespaceSeparator: '::',
        modeProps: { fold: ['brace', 'include'] },
      }),
      Ae('text/x-squirrel', {
        name: 'clike',
        keywords: k(
          'base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static'
        ),
        types: be,
        blockKeywords: k(
          'case catch class else for foreach if switch try while'
        ),
        defKeywords: k('function local class'),
        typeFirstDefinitions: !0,
        atoms: k('true false null'),
        hooks: { '#': $ },
        modeProps: { fold: ['brace', 'include'] },
      });
    var S = null;
    function w(m) {
      return function (y, N) {
        for (var re = !1, p, c = !1; !y.eol(); ) {
          if (!re && y.match('"') && (m == 'single' || y.match('""'))) {
            c = !0;
            break;
          }
          if (!re && y.match('``')) {
            (S = w(m)), (c = !0);
            break;
          }
          (p = y.next()), (re = m == 'single' && !re && p == '\\');
        }
        return c && (N.tokenize = null), 'string';
      };
    }
    Ae('text/x-ceylon', {
      name: 'clike',
      keywords: k(
        'abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while'
      ),
      types: function (m) {
        var y = m.charAt(0);
        return y === y.toUpperCase() && y !== y.toLowerCase();
      },
      blockKeywords: k(
        'case catch class dynamic else finally for function if interface module new object switch try while'
      ),
      defKeywords: k(
        'class dynamic function interface module object package value'
      ),
      builtin: k(
        'abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable'
      ),
      isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
      isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
      numberStart: /[\d#$]/,
      number:
        /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
      multiLineStrings: !0,
      typeFirstDefinitions: !0,
      atoms: k('true false null larger smaller equal empty finished'),
      indentSwitch: !1,
      styleDefs: !1,
      hooks: {
        '@': function (m) {
          return m.eatWhile(/[\w\$_]/), 'meta';
        },
        '"': function (m, y) {
          return (
            (y.tokenize = w(m.match('""') ? 'triple' : 'single')),
            y.tokenize(m, y)
          );
        },
        '`': function (m, y) {
          return !S || !m.match('`')
            ? !1
            : ((y.tokenize = S), (S = null), y.tokenize(m, y));
        },
        "'": function (m) {
          return m.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom';
        },
        token: function (m, y, N) {
          if ((N == 'variable' || N == 'type') && y.prevToken == '.')
            return 'variable-2';
        },
      },
      modeProps: { fold: ['brace', 'import'], closeBrackets: { triples: '"' } },
    });
  });
})();
var ya = { exports: {} },
  xa;
function Lu() {
  return (
    xa ||
      ((xa = 1),
      (function (jt, Jt) {
        (function (F) {
          F(Zt);
        })(function (F) {
          F.modeInfo = [
            {
              name: 'APL',
              mime: 'text/apl',
              mode: 'apl',
              ext: ['dyalog', 'apl'],
            },
            {
              name: 'PGP',
              mimes: [
                'application/pgp',
                'application/pgp-encrypted',
                'application/pgp-keys',
                'application/pgp-signature',
              ],
              mode: 'asciiarmor',
              ext: ['asc', 'pgp', 'sig'],
            },
            {
              name: 'ASN.1',
              mime: 'text/x-ttcn-asn',
              mode: 'asn.1',
              ext: ['asn', 'asn1'],
            },
            {
              name: 'Asterisk',
              mime: 'text/x-asterisk',
              mode: 'asterisk',
              file: /^extensions\.conf$/i,
            },
            {
              name: 'Brainfuck',
              mime: 'text/x-brainfuck',
              mode: 'brainfuck',
              ext: ['b', 'bf'],
            },
            {
              name: 'C',
              mime: 'text/x-csrc',
              mode: 'clike',
              ext: ['c', 'h', 'ino'],
            },
            {
              name: 'C++',
              mime: 'text/x-c++src',
              mode: 'clike',
              ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
              alias: ['cpp'],
            },
            {
              name: 'Cobol',
              mime: 'text/x-cobol',
              mode: 'cobol',
              ext: ['cob', 'cpy', 'cbl'],
            },
            {
              name: 'C#',
              mime: 'text/x-csharp',
              mode: 'clike',
              ext: ['cs'],
              alias: ['csharp', 'cs'],
            },
            {
              name: 'Clojure',
              mime: 'text/x-clojure',
              mode: 'clojure',
              ext: ['clj', 'cljc', 'cljx'],
            },
            {
              name: 'ClojureScript',
              mime: 'text/x-clojurescript',
              mode: 'clojure',
              ext: ['cljs'],
            },
            {
              name: 'Closure Stylesheets (GSS)',
              mime: 'text/x-gss',
              mode: 'css',
              ext: ['gss'],
            },
            {
              name: 'CMake',
              mime: 'text/x-cmake',
              mode: 'cmake',
              ext: ['cmake', 'cmake.in'],
              file: /^CMakeLists\.txt$/,
            },
            {
              name: 'CoffeeScript',
              mimes: [
                'application/vnd.coffeescript',
                'text/coffeescript',
                'text/x-coffeescript',
              ],
              mode: 'coffeescript',
              ext: ['coffee'],
              alias: ['coffee', 'coffee-script'],
            },
            {
              name: 'Common Lisp',
              mime: 'text/x-common-lisp',
              mode: 'commonlisp',
              ext: ['cl', 'lisp', 'el'],
              alias: ['lisp'],
            },
            {
              name: 'Cypher',
              mime: 'application/x-cypher-query',
              mode: 'cypher',
              ext: ['cyp', 'cypher'],
            },
            {
              name: 'Cython',
              mime: 'text/x-cython',
              mode: 'python',
              ext: ['pyx', 'pxd', 'pxi'],
            },
            {
              name: 'Crystal',
              mime: 'text/x-crystal',
              mode: 'crystal',
              ext: ['cr'],
            },
            { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
            {
              name: 'CQL',
              mime: 'text/x-cassandra',
              mode: 'sql',
              ext: ['cql'],
            },
            { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
            {
              name: 'Dart',
              mimes: ['application/dart', 'text/x-dart'],
              mode: 'dart',
              ext: ['dart'],
            },
            {
              name: 'diff',
              mime: 'text/x-diff',
              mode: 'diff',
              ext: ['diff', 'patch'],
            },
            { name: 'Django', mime: 'text/x-django', mode: 'django' },
            {
              name: 'Dockerfile',
              mime: 'text/x-dockerfile',
              mode: 'dockerfile',
              file: /^Dockerfile$/,
            },
            {
              name: 'DTD',
              mime: 'application/xml-dtd',
              mode: 'dtd',
              ext: ['dtd'],
            },
            {
              name: 'Dylan',
              mime: 'text/x-dylan',
              mode: 'dylan',
              ext: ['dylan', 'dyl', 'intr'],
            },
            { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
            { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
            {
              name: 'edn',
              mime: 'application/edn',
              mode: 'clojure',
              ext: ['edn'],
            },
            {
              name: 'Eiffel',
              mime: 'text/x-eiffel',
              mode: 'eiffel',
              ext: ['e'],
            },
            { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
            {
              name: 'Embedded JavaScript',
              mime: 'application/x-ejs',
              mode: 'htmlembedded',
              ext: ['ejs'],
            },
            {
              name: 'Embedded Ruby',
              mime: 'application/x-erb',
              mode: 'htmlembedded',
              ext: ['erb'],
            },
            {
              name: 'Erlang',
              mime: 'text/x-erlang',
              mode: 'erlang',
              ext: ['erl'],
            },
            { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
            {
              name: 'Factor',
              mime: 'text/x-factor',
              mode: 'factor',
              ext: ['factor'],
            },
            { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
            {
              name: 'Forth',
              mime: 'text/x-forth',
              mode: 'forth',
              ext: ['forth', 'fth', '4th'],
            },
            {
              name: 'Fortran',
              mime: 'text/x-fortran',
              mode: 'fortran',
              ext: ['f', 'for', 'f77', 'f90', 'f95'],
            },
            {
              name: 'F#',
              mime: 'text/x-fsharp',
              mode: 'mllike',
              ext: ['fs'],
              alias: ['fsharp'],
            },
            { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
            {
              name: 'Gherkin',
              mime: 'text/x-feature',
              mode: 'gherkin',
              ext: ['feature'],
            },
            {
              name: 'GitHub Flavored Markdown',
              mime: 'text/x-gfm',
              mode: 'gfm',
              file: /^(readme|contributing|history)\.md$/i,
            },
            { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
            {
              name: 'Groovy',
              mime: 'text/x-groovy',
              mode: 'groovy',
              ext: ['groovy', 'gradle'],
              file: /^Jenkinsfile$/,
            },
            { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
            {
              name: 'Haskell',
              mime: 'text/x-haskell',
              mode: 'haskell',
              ext: ['hs'],
            },
            {
              name: 'Haskell (Literate)',
              mime: 'text/x-literate-haskell',
              mode: 'haskell-literate',
              ext: ['lhs'],
            },
            { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
            { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
            {
              name: 'ASP.NET',
              mime: 'application/x-aspx',
              mode: 'htmlembedded',
              ext: ['aspx'],
              alias: ['asp', 'aspx'],
            },
            {
              name: 'HTML',
              mime: 'text/html',
              mode: 'htmlmixed',
              ext: ['html', 'htm', 'handlebars', 'hbs'],
              alias: ['xhtml'],
            },
            { name: 'HTTP', mime: 'message/http', mode: 'http' },
            { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
            {
              name: 'Pug',
              mime: 'text/x-pug',
              mode: 'pug',
              ext: ['jade', 'pug'],
              alias: ['jade'],
            },
            { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
            {
              name: 'Java Server Pages',
              mime: 'application/x-jsp',
              mode: 'htmlembedded',
              ext: ['jsp'],
              alias: ['jsp'],
            },
            {
              name: 'JavaScript',
              mimes: [
                'text/javascript',
                'text/ecmascript',
                'application/javascript',
                'application/x-javascript',
                'application/ecmascript',
              ],
              mode: 'javascript',
              ext: ['js'],
              alias: ['ecmascript', 'js', 'node'],
            },
            {
              name: 'JSON',
              mimes: ['application/json', 'application/x-json'],
              mode: 'javascript',
              ext: ['json', 'map'],
              alias: ['json5'],
            },
            {
              name: 'JSON-LD',
              mime: 'application/ld+json',
              mode: 'javascript',
              ext: ['jsonld'],
              alias: ['jsonld'],
            },
            { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
            {
              name: 'Jinja2',
              mime: 'text/jinja2',
              mode: 'jinja2',
              ext: ['j2', 'jinja', 'jinja2'],
            },
            {
              name: 'Julia',
              mime: 'text/x-julia',
              mode: 'julia',
              ext: ['jl'],
              alias: ['jl'],
            },
            {
              name: 'Kotlin',
              mime: 'text/x-kotlin',
              mode: 'clike',
              ext: ['kt'],
            },
            { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
            {
              name: 'LiveScript',
              mime: 'text/x-livescript',
              mode: 'livescript',
              ext: ['ls'],
              alias: ['ls'],
            },
            { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
            {
              name: 'Markdown',
              mime: 'text/x-markdown',
              mode: 'markdown',
              ext: ['markdown', 'md', 'mkd'],
            },
            { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
            { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
            {
              name: 'Mathematica',
              mime: 'text/x-mathematica',
              mode: 'mathematica',
              ext: ['m', 'nb', 'wl', 'wls'],
            },
            {
              name: 'Modelica',
              mime: 'text/x-modelica',
              mode: 'modelica',
              ext: ['mo'],
            },
            {
              name: 'MUMPS',
              mime: 'text/x-mumps',
              mode: 'mumps',
              ext: ['mps'],
            },
            { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
            {
              name: 'mbox',
              mime: 'application/mbox',
              mode: 'mbox',
              ext: ['mbox'],
            },
            { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
            {
              name: 'Nginx',
              mime: 'text/x-nginx-conf',
              mode: 'nginx',
              file: /nginx.*\.conf$/i,
            },
            {
              name: 'NSIS',
              mime: 'text/x-nsis',
              mode: 'nsis',
              ext: ['nsh', 'nsi'],
            },
            {
              name: 'NTriples',
              mimes: [
                'application/n-triples',
                'application/n-quads',
                'text/n-triples',
              ],
              mode: 'ntriples',
              ext: ['nt', 'nq'],
            },
            {
              name: 'Objective-C',
              mime: 'text/x-objectivec',
              mode: 'clike',
              ext: ['m'],
              alias: ['objective-c', 'objc'],
            },
            {
              name: 'Objective-C++',
              mime: 'text/x-objectivec++',
              mode: 'clike',
              ext: ['mm'],
              alias: ['objective-c++', 'objc++'],
            },
            {
              name: 'OCaml',
              mime: 'text/x-ocaml',
              mode: 'mllike',
              ext: ['ml', 'mli', 'mll', 'mly'],
            },
            {
              name: 'Octave',
              mime: 'text/x-octave',
              mode: 'octave',
              ext: ['m'],
            },
            { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
            {
              name: 'Pascal',
              mime: 'text/x-pascal',
              mode: 'pascal',
              ext: ['p', 'pas'],
            },
            { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
            {
              name: 'Perl',
              mime: 'text/x-perl',
              mode: 'perl',
              ext: ['pl', 'pm'],
            },
            {
              name: 'PHP',
              mimes: [
                'text/x-php',
                'application/x-httpd-php',
                'application/x-httpd-php-open',
              ],
              mode: 'php',
              ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
            },
            { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
            {
              name: 'Plain Text',
              mime: 'text/plain',
              mode: 'null',
              ext: ['txt', 'text', 'conf', 'def', 'list', 'log'],
            },
            { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
            { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
            {
              name: 'PowerShell',
              mime: 'application/x-powershell',
              mode: 'powershell',
              ext: ['ps1', 'psd1', 'psm1'],
            },
            {
              name: 'Properties files',
              mime: 'text/x-properties',
              mode: 'properties',
              ext: ['properties', 'ini', 'in'],
              alias: ['ini', 'properties'],
            },
            {
              name: 'ProtoBuf',
              mime: 'text/x-protobuf',
              mode: 'protobuf',
              ext: ['proto'],
            },
            {
              name: 'Python',
              mime: 'text/x-python',
              mode: 'python',
              ext: ['BUILD', 'bzl', 'py', 'pyw'],
              file: /^(BUCK|BUILD)$/,
            },
            {
              name: 'Puppet',
              mime: 'text/x-puppet',
              mode: 'puppet',
              ext: ['pp'],
            },
            { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
            {
              name: 'R',
              mime: 'text/x-rsrc',
              mode: 'r',
              ext: ['r', 'R'],
              alias: ['rscript'],
            },
            {
              name: 'reStructuredText',
              mime: 'text/x-rst',
              mode: 'rst',
              ext: ['rst'],
              alias: ['rst'],
            },
            { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
            {
              name: 'RPM Spec',
              mime: 'text/x-rpm-spec',
              mode: 'rpm',
              ext: ['spec'],
            },
            {
              name: 'Ruby',
              mime: 'text/x-ruby',
              mode: 'ruby',
              ext: ['rb'],
              alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
            },
            { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
            { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
            { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
            {
              name: 'Scala',
              mime: 'text/x-scala',
              mode: 'clike',
              ext: ['scala'],
            },
            {
              name: 'Scheme',
              mime: 'text/x-scheme',
              mode: 'scheme',
              ext: ['scm', 'ss'],
            },
            { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
            {
              name: 'Shell',
              mimes: ['text/x-sh', 'application/x-sh'],
              mode: 'shell',
              ext: ['sh', 'ksh', 'bash'],
              alias: ['bash', 'sh', 'zsh'],
              file: /^PKGBUILD$/,
            },
            {
              name: 'Sieve',
              mime: 'application/sieve',
              mode: 'sieve',
              ext: ['siv', 'sieve'],
            },
            {
              name: 'Slim',
              mimes: ['text/x-slim', 'application/x-slim'],
              mode: 'slim',
              ext: ['slim'],
            },
            {
              name: 'Smalltalk',
              mime: 'text/x-stsrc',
              mode: 'smalltalk',
              ext: ['st'],
            },
            {
              name: 'Smarty',
              mime: 'text/x-smarty',
              mode: 'smarty',
              ext: ['tpl'],
            },
            { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
            {
              name: 'SML',
              mime: 'text/x-sml',
              mode: 'mllike',
              ext: ['sml', 'sig', 'fun', 'smackspec'],
            },
            {
              name: 'Soy',
              mime: 'text/x-soy',
              mode: 'soy',
              ext: ['soy'],
              alias: ['closure template'],
            },
            {
              name: 'SPARQL',
              mime: 'application/sparql-query',
              mode: 'sparql',
              ext: ['rq', 'sparql'],
              alias: ['sparul'],
            },
            {
              name: 'Spreadsheet',
              mime: 'text/x-spreadsheet',
              mode: 'spreadsheet',
              alias: ['excel', 'formula'],
            },
            { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
            { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
            {
              name: 'Squirrel',
              mime: 'text/x-squirrel',
              mode: 'clike',
              ext: ['nut'],
            },
            {
              name: 'Stylus',
              mime: 'text/x-styl',
              mode: 'stylus',
              ext: ['styl'],
            },
            {
              name: 'Swift',
              mime: 'text/x-swift',
              mode: 'swift',
              ext: ['swift'],
            },
            { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
            {
              name: 'LaTeX',
              mime: 'text/x-latex',
              mode: 'stex',
              ext: ['text', 'ltx', 'tex'],
              alias: ['tex'],
            },
            {
              name: 'SystemVerilog',
              mime: 'text/x-systemverilog',
              mode: 'verilog',
              ext: ['v', 'sv', 'svh'],
            },
            { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
            {
              name: 'Textile',
              mime: 'text/x-textile',
              mode: 'textile',
              ext: ['textile'],
            },
            {
              name: 'TiddlyWiki',
              mime: 'text/x-tiddlywiki',
              mode: 'tiddlywiki',
            },
            { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
            { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
            { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
            {
              name: 'troff',
              mime: 'text/troff',
              mode: 'troff',
              ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            },
            {
              name: 'TTCN',
              mime: 'text/x-ttcn',
              mode: 'ttcn',
              ext: ['ttcn', 'ttcn3', 'ttcnpp'],
            },
            {
              name: 'TTCN_CFG',
              mime: 'text/x-ttcn-cfg',
              mode: 'ttcn-cfg',
              ext: ['cfg'],
            },
            {
              name: 'Turtle',
              mime: 'text/turtle',
              mode: 'turtle',
              ext: ['ttl'],
            },
            {
              name: 'TypeScript',
              mime: 'application/typescript',
              mode: 'javascript',
              ext: ['ts'],
              alias: ['ts'],
            },
            {
              name: 'TypeScript-JSX',
              mime: 'text/typescript-jsx',
              mode: 'jsx',
              ext: ['tsx'],
              alias: ['tsx'],
            },
            { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
            {
              name: 'Web IDL',
              mime: 'text/x-webidl',
              mode: 'webidl',
              ext: ['webidl'],
            },
            { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
            {
              name: 'VBScript',
              mime: 'text/vbscript',
              mode: 'vbscript',
              ext: ['vbs'],
            },
            {
              name: 'Velocity',
              mime: 'text/velocity',
              mode: 'velocity',
              ext: ['vtl'],
            },
            {
              name: 'Verilog',
              mime: 'text/x-verilog',
              mode: 'verilog',
              ext: ['v'],
            },
            {
              name: 'VHDL',
              mime: 'text/x-vhdl',
              mode: 'vhdl',
              ext: ['vhd', 'vhdl'],
            },
            {
              name: 'Vue.js Component',
              mimes: ['script/x-vue', 'text/x-vue'],
              mode: 'vue',
              ext: ['vue'],
            },
            {
              name: 'XML',
              mimes: ['application/xml', 'text/xml'],
              mode: 'xml',
              ext: ['xml', 'xsl', 'xsd', 'svg'],
              alias: ['rss', 'wsdl', 'xsd'],
            },
            {
              name: 'XQuery',
              mime: 'application/xquery',
              mode: 'xquery',
              ext: ['xy', 'xquery'],
            },
            { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
            {
              name: 'YAML',
              mimes: ['text/x-yaml', 'text/yaml'],
              mode: 'yaml',
              ext: ['yaml', 'yml'],
              alias: ['yml'],
            },
            { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
            {
              name: 'mscgen',
              mime: 'text/x-mscgen',
              mode: 'mscgen',
              ext: ['mscgen', 'mscin', 'msc'],
            },
            { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
            {
              name: 'msgenny',
              mime: 'text/x-msgenny',
              mode: 'mscgen',
              ext: ['msgenny'],
            },
            {
              name: 'WebAssembly',
              mime: 'text/webassembly',
              mode: 'wast',
              ext: ['wat', 'wast'],
            },
          ];
          for (var Pe = 0; Pe < F.modeInfo.length; Pe++) {
            var I = F.modeInfo[Pe];
            I.mimes && (I.mime = I.mimes[0]);
          }
          (F.findModeByMIME = function (de) {
            de = de.toLowerCase();
            for (var Me = 0; Me < F.modeInfo.length; Me++) {
              var se = F.modeInfo[Me];
              if (se.mime == de) return se;
              if (se.mimes) {
                for (var k = 0; k < se.mimes.length; k++)
                  if (se.mimes[k] == de) return se;
              }
            }
            if (/\+xml$/.test(de)) return F.findModeByMIME('application/xml');
            if (/\+json$/.test(de)) return F.findModeByMIME('application/json');
          }),
            (F.findModeByExtension = function (de) {
              de = de.toLowerCase();
              for (var Me = 0; Me < F.modeInfo.length; Me++) {
                var se = F.modeInfo[Me];
                if (se.ext) {
                  for (var k = 0; k < se.ext.length; k++)
                    if (se.ext[k] == de) return se;
                }
              }
            }),
            (F.findModeByFileName = function (de) {
              for (var Me = 0; Me < F.modeInfo.length; Me++) {
                var se = F.modeInfo[Me];
                if (se.file && se.file.test(de)) return se;
              }
              var k = de.lastIndexOf('.'),
                ee = k > -1 && de.substring(k + 1, de.length);
              if (ee) return F.findModeByExtension(ee);
            }),
            (F.findModeByName = function (de) {
              de = de.toLowerCase();
              for (var Me = 0; Me < F.modeInfo.length; Me++) {
                var se = F.modeInfo[Me];
                if (se.name.toLowerCase() == de) return se;
                if (se.alias) {
                  for (var k = 0; k < se.alias.length; k++)
                    if (se.alias[k].toLowerCase() == de) return se;
                }
              }
            });
        });
      })()),
    ya.exports
  );
}
(function (jt, Jt) {
  (function (F) {
    F(Zt, wa(), Lu());
  })(function (F) {
    F.defineMode(
      'markdown',
      function (Pe, I) {
        var de = F.getMode(Pe, 'text/html'),
          Me = de.name == 'null';
        function se(p) {
          if (F.findModeByName) {
            var c = F.findModeByName(p);
            c && (p = c.mime || c.mimes[0]);
          }
          var G = F.getMode(Pe, p);
          return G.name == 'null' ? null : G;
        }
        I.highlightFormatting === void 0 && (I.highlightFormatting = !1),
          I.maxBlockquoteDepth === void 0 && (I.maxBlockquoteDepth = 0),
          I.taskLists === void 0 && (I.taskLists = !1),
          I.strikethrough === void 0 && (I.strikethrough = !1),
          I.emoji === void 0 && (I.emoji = !1),
          I.fencedCodeBlockHighlighting === void 0 &&
            (I.fencedCodeBlockHighlighting = !0),
          I.fencedCodeBlockDefaultMode === void 0 &&
            (I.fencedCodeBlockDefaultMode = 'text/plain'),
          I.xml === void 0 && (I.xml = !0),
          I.tokenTypeOverrides === void 0 && (I.tokenTypeOverrides = {});
        var k = {
          header: 'header',
          code: 'comment',
          quote: 'quote',
          list1: 'variable-2',
          list2: 'variable-3',
          list3: 'keyword',
          hr: 'hr',
          image: 'image',
          imageAltText: 'image-alt-text',
          imageMarker: 'image-marker',
          formatting: 'formatting',
          linkInline: 'link',
          linkEmail: 'link',
          linkText: 'link',
          linkHref: 'string',
          em: 'em',
          strong: 'strong',
          strikethrough: 'strikethrough',
          emoji: 'builtin',
        };
        for (var ee in k)
          k.hasOwnProperty(ee) &&
            I.tokenTypeOverrides[ee] &&
            (k[ee] = I.tokenTypeOverrides[ee]);
        var U = /^([*\-_])(?:\s*\1){2,}\s*$/,
          ve = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
          O = /^\[(x| )\](?=\s)/i,
          H = I.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
          P = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
          K = /^[^#!\[\]*_\\<>` "'(~:]+/,
          be = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
          ke = /^\s*\[[^\]]+?\]:.*$/,
          Q =
            /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
          V = '    ';
        function $(p, c, G) {
          return (c.f = c.inline = G), G(p, c);
        }
        function ie(p, c, G) {
          return (c.f = c.block = G), G(p, c);
        }
        function Fe(p) {
          return !p || !/\S/.test(p.string);
        }
        function me(p) {
          if (
            ((p.linkTitle = !1),
            (p.linkHref = !1),
            (p.linkText = !1),
            (p.em = !1),
            (p.strong = !1),
            (p.strikethrough = !1),
            (p.quote = 0),
            (p.indentedCode = !1),
            p.f == ze)
          ) {
            var c = Me;
            if (!c) {
              var G = F.innerMode(de, p.htmlState);
              c =
                G.mode.name == 'xml' &&
                G.state.tagStart === null &&
                !G.state.context &&
                G.state.tokenize.isInText;
            }
            c && ((p.f = C), (p.block = ue), (p.htmlState = null));
          }
          return (
            (p.trailingSpace = 0),
            (p.trailingSpaceNewLine = !1),
            (p.prevLine = p.thisLine),
            (p.thisLine = { stream: null }),
            null
          );
        }
        function ue(p, c) {
          var G = p.column() === c.indentation,
            ye = Fe(c.prevLine.stream),
            R = c.indentedCode,
            oe = c.prevLine.hr,
            Se = c.list !== !1,
            Te = (c.listStack[c.listStack.length - 1] || 0) + 3;
          c.indentedCode = !1;
          var xe = c.indentation;
          if (
            c.indentationDiff === null &&
            ((c.indentationDiff = c.indentation), Se)
          ) {
            for (c.list = null; xe < c.listStack[c.listStack.length - 1]; )
              c.listStack.pop(),
                c.listStack.length
                  ? (c.indentation = c.listStack[c.listStack.length - 1])
                  : (c.list = !1);
            c.list !== !1 &&
              (c.indentationDiff = xe - c.listStack[c.listStack.length - 1]);
          }
          var te =
              !ye &&
              !oe &&
              !c.prevLine.header &&
              (!Se || !R) &&
              !c.prevLine.fencedCodeEnd,
            Ee =
              (c.list === !1 || oe || ye) && c.indentation <= Te && p.match(U),
            qe = null;
          if (
            c.indentationDiff >= 4 &&
            (R || c.prevLine.fencedCodeEnd || c.prevLine.header || ye)
          )
            return p.skipToEnd(), (c.indentedCode = !0), k.code;
          if (p.eatSpace()) return null;
          if (
            G &&
            c.indentation <= Te &&
            (qe = p.match(H)) &&
            qe[1].length <= 6
          )
            return (
              (c.quote = 0),
              (c.header = qe[1].length),
              (c.thisLine.header = !0),
              I.highlightFormatting && (c.formatting = 'header'),
              (c.f = c.inline),
              W(c)
            );
          if (c.indentation <= Te && p.eat('>'))
            return (
              (c.quote = G ? 1 : c.quote + 1),
              I.highlightFormatting && (c.formatting = 'quote'),
              p.eatSpace(),
              W(c)
            );
          if (
            !Ee &&
            !c.setext &&
            G &&
            c.indentation <= Te &&
            (qe = p.match(ve))
          ) {
            var Ve = qe[1] ? 'ol' : 'ul';
            return (
              (c.indentation = xe + p.current().length),
              (c.list = !0),
              (c.quote = 0),
              c.listStack.push(c.indentation),
              (c.em = !1),
              (c.strong = !1),
              (c.code = !1),
              (c.strikethrough = !1),
              I.taskLists && p.match(O, !1) && (c.taskList = !0),
              (c.f = c.inline),
              I.highlightFormatting && (c.formatting = ['list', 'list-' + Ve]),
              W(c)
            );
          } else {
            if (G && c.indentation <= Te && (qe = p.match(be, !0)))
              return (
                (c.quote = 0),
                (c.fencedEndRE = new RegExp(qe[1] + '+ *$')),
                (c.localMode =
                  I.fencedCodeBlockHighlighting &&
                  se(qe[2] || I.fencedCodeBlockDefaultMode)),
                c.localMode && (c.localState = F.startState(c.localMode)),
                (c.f = c.block = le),
                I.highlightFormatting && (c.formatting = 'code-block'),
                (c.code = -1),
                W(c)
              );
            if (
              c.setext ||
              ((!te || !Se) &&
                !c.quote &&
                c.list === !1 &&
                !c.code &&
                !Ee &&
                !ke.test(p.string) &&
                (qe = p.lookAhead(1)) &&
                (qe = qe.match(P)))
            )
              return (
                c.setext
                  ? ((c.header = c.setext),
                    (c.setext = 0),
                    p.skipToEnd(),
                    I.highlightFormatting && (c.formatting = 'header'))
                  : ((c.header = qe[0].charAt(0) == '=' ? 1 : 2),
                    (c.setext = c.header)),
                (c.thisLine.header = !0),
                (c.f = c.inline),
                W(c)
              );
            if (Ee)
              return p.skipToEnd(), (c.hr = !0), (c.thisLine.hr = !0), k.hr;
            if (p.peek() === '[') return $(p, c, m);
          }
          return $(p, c, c.inline);
        }
        function ze(p, c) {
          var G = de.token(p, c.htmlState);
          if (!Me) {
            var ye = F.innerMode(de, c.htmlState);
            ((ye.mode.name == 'xml' &&
              ye.state.tagStart === null &&
              !ye.state.context &&
              ye.state.tokenize.isInText) ||
              (c.md_inside && p.current().indexOf('>') > -1)) &&
              ((c.f = C), (c.block = ue), (c.htmlState = null));
          }
          return G;
        }
        function le(p, c) {
          var G = c.listStack[c.listStack.length - 1] || 0,
            ye = c.indentation < G,
            R = G + 3;
          if (
            c.fencedEndRE &&
            c.indentation <= R &&
            (ye || p.match(c.fencedEndRE))
          ) {
            I.highlightFormatting && (c.formatting = 'code-block');
            var oe;
            return (
              ye || (oe = W(c)),
              (c.localMode = c.localState = null),
              (c.block = ue),
              (c.f = C),
              (c.fencedEndRE = null),
              (c.code = 0),
              (c.thisLine.fencedCodeEnd = !0),
              ye ? ie(p, c, c.block) : oe
            );
          } else
            return c.localMode
              ? c.localMode.token(p, c.localState)
              : (p.skipToEnd(), k.code);
        }
        function W(p) {
          var c = [];
          if (p.formatting) {
            c.push(k.formatting),
              typeof p.formatting == 'string' &&
                (p.formatting = [p.formatting]);
            for (var G = 0; G < p.formatting.length; G++)
              c.push(k.formatting + '-' + p.formatting[G]),
                p.formatting[G] === 'header' &&
                  c.push(k.formatting + '-' + p.formatting[G] + '-' + p.header),
                p.formatting[G] === 'quote' &&
                  (!I.maxBlockquoteDepth || I.maxBlockquoteDepth >= p.quote
                    ? c.push(
                        k.formatting + '-' + p.formatting[G] + '-' + p.quote
                      )
                    : c.push('error'));
          }
          if (p.taskOpen) return c.push('meta'), c.length ? c.join(' ') : null;
          if (p.taskClosed)
            return c.push('property'), c.length ? c.join(' ') : null;
          if (
            (p.linkHref
              ? c.push(k.linkHref, 'url')
              : (p.strong && c.push(k.strong),
                p.em && c.push(k.em),
                p.strikethrough && c.push(k.strikethrough),
                p.emoji && c.push(k.emoji),
                p.linkText && c.push(k.linkText),
                p.code && c.push(k.code),
                p.image && c.push(k.image),
                p.imageAltText && c.push(k.imageAltText, 'link'),
                p.imageMarker && c.push(k.imageMarker)),
            p.header && c.push(k.header, k.header + '-' + p.header),
            p.quote &&
              (c.push(k.quote),
              !I.maxBlockquoteDepth || I.maxBlockquoteDepth >= p.quote
                ? c.push(k.quote + '-' + p.quote)
                : c.push(k.quote + '-' + I.maxBlockquoteDepth)),
            p.list !== !1)
          ) {
            var ye = (p.listStack.length - 1) % 3;
            ye
              ? ye === 1
                ? c.push(k.list2)
                : c.push(k.list3)
              : c.push(k.list1);
          }
          return (
            p.trailingSpaceNewLine
              ? c.push('trailing-space-new-line')
              : p.trailingSpace &&
                c.push('trailing-space-' + (p.trailingSpace % 2 ? 'a' : 'b')),
            c.length ? c.join(' ') : null
          );
        }
        function Ae(p, c) {
          if (p.match(K, !0)) return W(c);
        }
        function C(p, c) {
          var G = c.text(p, c);
          if (typeof G < 'u') return G;
          if (c.list) return (c.list = null), W(c);
          if (c.taskList) {
            var ye = p.match(O, !0)[1] === ' ';
            return (
              ye ? (c.taskOpen = !0) : (c.taskClosed = !0),
              I.highlightFormatting && (c.formatting = 'task'),
              (c.taskList = !1),
              W(c)
            );
          }
          if (
            ((c.taskOpen = !1),
            (c.taskClosed = !1),
            c.header && p.match(/^#+$/, !0))
          )
            return I.highlightFormatting && (c.formatting = 'header'), W(c);
          var R = p.next();
          if (c.linkTitle) {
            c.linkTitle = !1;
            var oe = R;
            R === '(' && (oe = ')'),
              (oe = (oe + '').replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1'));
            var Se = '^\\s*(?:[^' + oe + '\\\\]+|\\\\\\\\|\\\\.)' + oe;
            if (p.match(new RegExp(Se), !0)) return k.linkHref;
          }
          if (R === '`') {
            var Te = c.formatting;
            I.highlightFormatting && (c.formatting = 'code'), p.eatWhile('`');
            var xe = p.current().length;
            if (c.code == 0 && (!c.quote || xe == 1))
              return (c.code = xe), W(c);
            if (xe == c.code) {
              var te = W(c);
              return (c.code = 0), te;
            } else return (c.formatting = Te), W(c);
          } else if (c.code) return W(c);
          if (R === '\\' && (p.next(), I.highlightFormatting)) {
            var Ee = W(c),
              qe = k.formatting + '-escape';
            return Ee ? Ee + ' ' + qe : qe;
          }
          if (R === '!' && p.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
            return (
              (c.imageMarker = !0),
              (c.image = !0),
              I.highlightFormatting && (c.formatting = 'image'),
              W(c)
            );
          if (
            R === '[' &&
            c.imageMarker &&
            p.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)
          )
            return (
              (c.imageMarker = !1),
              (c.imageAltText = !0),
              I.highlightFormatting && (c.formatting = 'image'),
              W(c)
            );
          if (R === ']' && c.imageAltText) {
            I.highlightFormatting && (c.formatting = 'image');
            var Ee = W(c);
            return (
              (c.imageAltText = !1), (c.image = !1), (c.inline = c.f = d), Ee
            );
          }
          if (R === '[' && !c.image)
            return (
              (c.linkText && p.match(/^.*?\]/)) ||
                ((c.linkText = !0),
                I.highlightFormatting && (c.formatting = 'link')),
              W(c)
            );
          if (R === ']' && c.linkText) {
            I.highlightFormatting && (c.formatting = 'link');
            var Ee = W(c);
            return (
              (c.linkText = !1),
              (c.inline = c.f = p.match(/\(.*?\)| ?\[.*?\]/, !1) ? d : C),
              Ee
            );
          }
          if (
            R === '<' &&
            p.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)
          ) {
            (c.f = c.inline = Y),
              I.highlightFormatting && (c.formatting = 'link');
            var Ee = W(c);
            return Ee ? (Ee += ' ') : (Ee = ''), Ee + k.linkInline;
          }
          if (R === '<' && p.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
            (c.f = c.inline = Y),
              I.highlightFormatting && (c.formatting = 'link');
            var Ee = W(c);
            return Ee ? (Ee += ' ') : (Ee = ''), Ee + k.linkEmail;
          }
          if (
            I.xml &&
            R === '<' &&
            p.match(
              /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
              !1
            )
          ) {
            var Ve = p.string.indexOf('>', p.pos);
            if (Ve != -1) {
              var ct = p.string.substring(p.start, Ve);
              /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(ct) &&
                (c.md_inside = !0);
            }
            return p.backUp(1), (c.htmlState = F.startState(de)), ie(p, c, ze);
          }
          if (I.xml && R === '<' && p.match(/^\/\w*?>/))
            return (c.md_inside = !1), 'tag';
          if (R === '*' || R === '_') {
            for (
              var Ne = 1, Re = p.pos == 1 ? ' ' : p.string.charAt(p.pos - 2);
              Ne < 3 && p.eat(R);

            )
              Ne++;
            var Ue = p.peek() || ' ',
              et =
                !/\s/.test(Ue) && (!Q.test(Ue) || /\s/.test(Re) || Q.test(Re)),
              he =
                !/\s/.test(Re) && (!Q.test(Re) || /\s/.test(Ue) || Q.test(Ue)),
              Oe = null,
              T = null;
            if (
              (Ne % 2 &&
                (!c.em && et && (R === '*' || !he || Q.test(Re))
                  ? (Oe = !0)
                  : c.em == R &&
                    he &&
                    (R === '*' || !et || Q.test(Ue)) &&
                    (Oe = !1)),
              Ne > 1 &&
                (!c.strong && et && (R === '*' || !he || Q.test(Re))
                  ? (T = !0)
                  : c.strong == R &&
                    he &&
                    (R === '*' || !et || Q.test(Ue)) &&
                    (T = !1)),
              T != null || Oe != null)
            ) {
              I.highlightFormatting &&
                (c.formatting =
                  Oe == null ? 'strong' : T == null ? 'em' : 'strong em'),
                Oe === !0 && (c.em = R),
                T === !0 && (c.strong = R);
              var te = W(c);
              return Oe === !1 && (c.em = !1), T === !1 && (c.strong = !1), te;
            }
          } else if (R === ' ' && (p.eat('*') || p.eat('_'))) {
            if (p.peek() === ' ') return W(c);
            p.backUp(1);
          }
          if (I.strikethrough) {
            if (R === '~' && p.eatWhile(R)) {
              if (c.strikethrough) {
                I.highlightFormatting && (c.formatting = 'strikethrough');
                var te = W(c);
                return (c.strikethrough = !1), te;
              } else if (p.match(/^[^\s]/, !1))
                return (
                  (c.strikethrough = !0),
                  I.highlightFormatting && (c.formatting = 'strikethrough'),
                  W(c)
                );
            } else if (R === ' ' && p.match('~~', !0)) {
              if (p.peek() === ' ') return W(c);
              p.backUp(2);
            }
          }
          if (
            I.emoji &&
            R === ':' &&
            p.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
          ) {
            (c.emoji = !0), I.highlightFormatting && (c.formatting = 'emoji');
            var z = W(c);
            return (c.emoji = !1), z;
          }
          return (
            R === ' ' &&
              (p.match(/^ +$/, !1)
                ? c.trailingSpace++
                : c.trailingSpace && (c.trailingSpaceNewLine = !0)),
            W(c)
          );
        }
        function Y(p, c) {
          var G = p.next();
          if (G === '>') {
            (c.f = c.inline = C),
              I.highlightFormatting && (c.formatting = 'link');
            var ye = W(c);
            return ye ? (ye += ' ') : (ye = ''), ye + k.linkInline;
          }
          return p.match(/^[^>]+/, !0), k.linkInline;
        }
        function d(p, c) {
          if (p.eatSpace()) return null;
          var G = p.next();
          return G === '(' || G === '['
            ? ((c.f = c.inline = w(G === '(' ? ')' : ']')),
              I.highlightFormatting && (c.formatting = 'link-string'),
              (c.linkHref = !0),
              W(c))
            : 'error';
        }
        var S = {
          ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
          ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
        };
        function w(p) {
          return function (c, G) {
            var ye = c.next();
            if (ye === p) {
              (G.f = G.inline = C),
                I.highlightFormatting && (G.formatting = 'link-string');
              var R = W(G);
              return (G.linkHref = !1), R;
            }
            return c.match(S[p]), (G.linkHref = !0), W(G);
          };
        }
        function m(p, c) {
          return p.match(/^([^\]\\]|\\.)*\]:/, !1)
            ? ((c.f = y),
              p.next(),
              I.highlightFormatting && (c.formatting = 'link'),
              (c.linkText = !0),
              W(c))
            : $(p, c, C);
        }
        function y(p, c) {
          if (p.match(']:', !0)) {
            (c.f = c.inline = N),
              I.highlightFormatting && (c.formatting = 'link');
            var G = W(c);
            return (c.linkText = !1), G;
          }
          return p.match(/^([^\]\\]|\\.)+/, !0), k.linkText;
        }
        function N(p, c) {
          return p.eatSpace()
            ? null
            : (p.match(/^[^\s]+/, !0),
              p.peek() === void 0
                ? (c.linkTitle = !0)
                : p.match(
                    /^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,
                    !0
                  ),
              (c.f = c.inline = C),
              k.linkHref + ' url');
        }
        var re = {
          startState: function () {
            return {
              f: ue,
              prevLine: { stream: null },
              thisLine: { stream: null },
              block: ue,
              htmlState: null,
              indentation: 0,
              inline: C,
              text: Ae,
              formatting: !1,
              linkText: !1,
              linkHref: !1,
              linkTitle: !1,
              code: 0,
              em: !1,
              strong: !1,
              header: 0,
              setext: 0,
              hr: !1,
              taskList: !1,
              list: !1,
              listStack: [],
              quote: 0,
              trailingSpace: 0,
              trailingSpaceNewLine: !1,
              strikethrough: !1,
              emoji: !1,
              fencedEndRE: null,
            };
          },
          copyState: function (p) {
            return {
              f: p.f,
              prevLine: p.prevLine,
              thisLine: p.thisLine,
              block: p.block,
              htmlState: p.htmlState && F.copyState(de, p.htmlState),
              indentation: p.indentation,
              localMode: p.localMode,
              localState: p.localMode
                ? F.copyState(p.localMode, p.localState)
                : null,
              inline: p.inline,
              text: p.text,
              formatting: !1,
              linkText: p.linkText,
              linkTitle: p.linkTitle,
              linkHref: p.linkHref,
              code: p.code,
              em: p.em,
              strong: p.strong,
              strikethrough: p.strikethrough,
              emoji: p.emoji,
              header: p.header,
              setext: p.setext,
              hr: p.hr,
              taskList: p.taskList,
              list: p.list,
              listStack: p.listStack.slice(0),
              quote: p.quote,
              indentedCode: p.indentedCode,
              trailingSpace: p.trailingSpace,
              trailingSpaceNewLine: p.trailingSpaceNewLine,
              md_inside: p.md_inside,
              fencedEndRE: p.fencedEndRE,
            };
          },
          token: function (p, c) {
            if (((c.formatting = !1), p != c.thisLine.stream)) {
              if (((c.header = 0), (c.hr = !1), p.match(/^\s*$/, !0)))
                return me(c), null;
              if (
                ((c.prevLine = c.thisLine),
                (c.thisLine = { stream: p }),
                (c.taskList = !1),
                (c.trailingSpace = 0),
                (c.trailingSpaceNewLine = !1),
                !c.localState && ((c.f = c.block), c.f != ze))
              ) {
                var G = p.match(/^\s*/, !0)[0].replace(/\t/g, V).length;
                if (((c.indentation = G), (c.indentationDiff = null), G > 0))
                  return null;
              }
            }
            return c.f(p, c);
          },
          innerMode: function (p) {
            return p.block == ze
              ? { state: p.htmlState, mode: de }
              : p.localState
                ? { state: p.localState, mode: p.localMode }
                : { state: p, mode: re };
          },
          indent: function (p, c, G) {
            return p.block == ze && de.indent
              ? de.indent(p.htmlState, c, G)
              : p.localState && p.localMode.indent
                ? p.localMode.indent(p.localState, c, G)
                : F.Pass;
          },
          blankLine: me,
          getType: W,
          blockCommentStart: '<!--',
          blockCommentEnd: '-->',
          closeBrackets: '()[]{}\'\'""``',
          fold: 'markdown',
        };
        return re;
      },
      'xml'
    ),
      F.defineMIME('text/markdown', 'markdown'),
      F.defineMIME('text/x-markdown', 'markdown');
  });
})();
(function (jt, Jt) {
  (function (F) {
    F(Zt);
  })(function (F) {
    (F.defineSimpleMode = function (O, H) {
      F.defineMode(O, function (P) {
        return F.simpleMode(P, H);
      });
    }),
      (F.simpleMode = function (O, H) {
        Pe(H, 'start');
        var P = {},
          K = H.meta || {},
          be = !1;
        for (var ke in H)
          if (ke != K && H.hasOwnProperty(ke))
            for (var Q = (P[ke] = []), V = H[ke], $ = 0; $ < V.length; $++) {
              var ie = V[$];
              Q.push(new Me(ie, H)), (ie.indent || ie.dedent) && (be = !0);
            }
        var Fe = {
          startState: function () {
            return {
              state: 'start',
              pending: null,
              local: null,
              localState: null,
              indent: be ? [] : null,
            };
          },
          copyState: function (ue) {
            var ze = {
              state: ue.state,
              pending: ue.pending,
              local: ue.local,
              localState: null,
              indent: ue.indent && ue.indent.slice(0),
            };
            ue.localState &&
              (ze.localState = F.copyState(ue.local.mode, ue.localState)),
              ue.stack && (ze.stack = ue.stack.slice(0));
            for (var le = ue.persistentStates; le; le = le.next)
              ze.persistentStates = {
                mode: le.mode,
                spec: le.spec,
                state:
                  le.state == ue.localState
                    ? ze.localState
                    : F.copyState(le.mode, le.state),
                next: ze.persistentStates,
              };
            return ze;
          },
          token: se(P, O),
          innerMode: function (ue) {
            return ue.local && { mode: ue.local.mode, state: ue.localState };
          },
          indent: ve(P, K),
        };
        if (K) for (var me in K) K.hasOwnProperty(me) && (Fe[me] = K[me]);
        return Fe;
      });
    function Pe(O, H) {
      if (!O.hasOwnProperty(H))
        throw new Error('Undefined state ' + H + ' in simple mode');
    }
    function I(O, H) {
      if (!O) return /(?:)/;
      var P = '';
      return (
        O instanceof RegExp
          ? (O.ignoreCase && (P = 'i'), O.unicode && (P += 'u'), (O = O.source))
          : (O = String(O)),
        new RegExp((H === !1 ? '' : '^') + '(?:' + O + ')', P)
      );
    }
    function de(O) {
      if (!O) return null;
      if (O.apply) return O;
      if (typeof O == 'string') return O.replace(/\./g, ' ');
      for (var H = [], P = 0; P < O.length; P++)
        H.push(O[P] && O[P].replace(/\./g, ' '));
      return H;
    }
    function Me(O, H) {
      (O.next || O.push) && Pe(H, O.next || O.push),
        (this.regex = I(O.regex)),
        (this.token = de(O.token)),
        (this.data = O);
    }
    function se(O, H) {
      return function (P, K) {
        if (K.pending) {
          var be = K.pending.shift();
          return (
            K.pending.length == 0 && (K.pending = null),
            (P.pos += be.text.length),
            be.token
          );
        }
        if (K.local)
          if (K.local.end && P.match(K.local.end)) {
            var ke = K.local.endToken || null;
            return (K.local = K.localState = null), ke;
          } else {
            var ke = K.local.mode.token(P, K.localState),
              Q;
            return (
              K.local.endScan &&
                (Q = K.local.endScan.exec(P.current())) &&
                (P.pos = P.start + Q.index),
              ke
            );
          }
        for (var V = O[K.state], $ = 0; $ < V.length; $++) {
          var ie = V[$],
            Fe = (!ie.data.sol || P.sol()) && P.match(ie.regex);
          if (Fe) {
            ie.data.next
              ? (K.state = ie.data.next)
              : ie.data.push
                ? ((K.stack || (K.stack = [])).push(K.state),
                  (K.state = ie.data.push))
                : ie.data.pop &&
                  K.stack &&
                  K.stack.length &&
                  (K.state = K.stack.pop()),
              ie.data.mode && ee(H, K, ie.data.mode, ie.token),
              ie.data.indent && K.indent.push(P.indentation() + H.indentUnit),
              ie.data.dedent && K.indent.pop();
            var me = ie.token;
            if (
              (me && me.apply && (me = me(Fe)),
              Fe.length > 2 && ie.token && typeof ie.token != 'string')
            ) {
              for (var ue = 2; ue < Fe.length; ue++)
                Fe[ue] &&
                  (K.pending || (K.pending = [])).push({
                    text: Fe[ue],
                    token: ie.token[ue - 1],
                  });
              return P.backUp(Fe[0].length - (Fe[1] ? Fe[1].length : 0)), me[0];
            } else return me && me.join ? me[0] : me;
          }
        }
        return P.next(), null;
      };
    }
    function k(O, H) {
      if (O === H) return !0;
      if (!O || typeof O != 'object' || !H || typeof H != 'object') return !1;
      var P = 0;
      for (var K in O)
        if (O.hasOwnProperty(K)) {
          if (!H.hasOwnProperty(K) || !k(O[K], H[K])) return !1;
          P++;
        }
      for (var K in H) H.hasOwnProperty(K) && P--;
      return P == 0;
    }
    function ee(O, H, P, K) {
      var be;
      if (P.persistent)
        for (var ke = H.persistentStates; ke && !be; ke = ke.next)
          (P.spec ? k(P.spec, ke.spec) : P.mode == ke.mode) && (be = ke);
      var Q = be ? be.mode : P.mode || F.getMode(O, P.spec),
        V = be ? be.state : F.startState(Q);
      P.persistent &&
        !be &&
        (H.persistentStates = {
          mode: Q,
          spec: P.spec,
          state: V,
          next: H.persistentStates,
        }),
        (H.localState = V),
        (H.local = {
          mode: Q,
          end: P.end && I(P.end),
          endScan: P.end && P.forceEnd !== !1 && I(P.end, !1),
          endToken: K && K.join ? K[K.length - 1] : K,
        });
    }
    function U(O, H) {
      for (var P = 0; P < H.length; P++) if (H[P] === O) return !0;
    }
    function ve(O, H) {
      return function (P, K, be) {
        if (P.local && P.local.mode.indent)
          return P.local.mode.indent(P.localState, K, be);
        if (
          P.indent == null ||
          P.local ||
          (H.dontIndentStates && U(P.state, H.dontIndentStates) > -1)
        )
          return F.Pass;
        var ke = P.indent.length - 1,
          Q = O[P.state];
        e: for (;;) {
          for (var V = 0; V < Q.length; V++) {
            var $ = Q[V];
            if ($.data.dedent && $.data.dedentIfLineStart !== !1) {
              var ie = $.regex.exec(K);
              if (ie && ie[0]) {
                ke--,
                  ($.next || $.push) && (Q = O[$.next || $.push]),
                  (K = K.slice(ie[0].length));
                continue e;
              }
            }
          }
          break;
        }
        return ke < 0 ? 0 : P.indent[ke];
      };
    }
  });
})();
export { Du as default };
