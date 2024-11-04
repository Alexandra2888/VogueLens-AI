const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ['./assets/xtermModule-BeNbaIVa.js', './xtermModule.DSXBckUd.css'])
) => i.map((i) => d[i]);
import {
  u as Me,
  r as V,
  b as De,
  _ as Le,
  d as Fe,
  e as Oe,
  j as o,
  R as h,
  s as me,
  f as re,
  m as We,
  g as $,
  T as M,
  M as Ue,
  h as Ae,
  i as ze,
  S as Ve,
  a as Ke,
  c as He,
} from './assets/inspectorTab-CU3eUCmV.js';
import { T as $e, W as qe } from './assets/testServerConnection-DeE2kSzz.js';
import {
  E as Ye,
  t as Qe,
  T as Xe,
  W as Ge,
} from './assets/workbench-BwRNfS6A.js';
var Je = {};
class se {
  constructor(e, t = {}) {
    (this.isListing = !1),
      (this._tests = new Map()),
      (this._rootSuite = new q('', 'root')),
      (this._options = t),
      (this._reporter = e);
  }
  reset() {
    (this._rootSuite._entries = []), this._tests.clear();
  }
  dispatch(e) {
    const { method: t, params: s } = e;
    if (t === 'onConfigure') {
      this._onConfigure(s.config);
      return;
    }
    if (t === 'onProject') {
      this._onProject(s.project);
      return;
    }
    if (t === 'onBegin') {
      this._onBegin();
      return;
    }
    if (t === 'onTestBegin') {
      this._onTestBegin(s.testId, s.result);
      return;
    }
    if (t === 'onTestEnd') {
      this._onTestEnd(s.test, s.result);
      return;
    }
    if (t === 'onStepBegin') {
      this._onStepBegin(s.testId, s.resultId, s.step);
      return;
    }
    if (t === 'onStepEnd') {
      this._onStepEnd(s.testId, s.resultId, s.step);
      return;
    }
    if (t === 'onError') {
      this._onError(s.error);
      return;
    }
    if (t === 'onStdIO') {
      this._onStdIO(s.type, s.testId, s.resultId, s.data, s.isBase64);
      return;
    }
    if (t === 'onEnd') return this._onEnd(s.result);
    if (t === 'onExit') return this._onExit();
  }
  _onConfigure(e) {
    var t, s;
    (this._rootDir = e.rootDir),
      (this._config = this._parseConfig(e)),
      (s = (t = this._reporter).onConfigure) == null || s.call(t, this._config);
  }
  _onProject(e) {
    let t = this._options.mergeProjects
      ? this._rootSuite.suites.find((s) => s.project().name === e.name)
      : void 0;
    t || ((t = new q(e.name, 'project')), this._rootSuite._addSuite(t)),
      (t._project = this._parseProject(e));
    for (const s of e.suites) this._mergeSuiteInto(s, t);
  }
  _onBegin() {
    var e, t;
    (t = (e = this._reporter).onBegin) == null || t.call(e, this._rootSuite);
  }
  _onTestBegin(e, t) {
    var c, a;
    const s = this._tests.get(e);
    this._options.clearPreviousResultsWhenTestBegins && (s.results = []);
    const r = s._createTestResult(t.id);
    (r.retry = t.retry),
      (r.workerIndex = t.workerIndex),
      (r.parallelIndex = t.parallelIndex),
      r.setStartTimeNumber(t.startTime),
      (a = (c = this._reporter).onTestBegin) == null || a.call(c, s, r);
  }
  _onTestEnd(e, t) {
    var c, a, m;
    const s = this._tests.get(e.testId);
    (s.timeout = e.timeout),
      (s.expectedStatus = e.expectedStatus),
      (s.annotations = e.annotations);
    const r = s.results.find((l) => l._id === t.id);
    (r.duration = t.duration),
      (r.status = t.status),
      (r.errors = t.errors),
      (r.error = (c = r.errors) == null ? void 0 : c[0]),
      (r.attachments = this._parseAttachments(t.attachments)),
      (m = (a = this._reporter).onTestEnd) == null || m.call(a, s, r),
      (r._stepMap = new Map());
  }
  _onStepBegin(e, t, s) {
    var _, n;
    const r = this._tests.get(e),
      c = r.results.find((f) => f._id === t),
      a = s.parentStepId ? c._stepMap.get(s.parentStepId) : void 0,
      m = this._absoluteLocation(s.location),
      l = new et(s, a, m);
    a ? a.steps.push(l) : c.steps.push(l),
      c._stepMap.set(s.id, l),
      (n = (_ = this._reporter).onStepBegin) == null || n.call(_, r, c, l);
  }
  _onStepEnd(e, t, s) {
    var m, l;
    const r = this._tests.get(e),
      c = r.results.find((_) => _._id === t),
      a = c._stepMap.get(s.id);
    (a.duration = s.duration),
      (a.error = s.error),
      (l = (m = this._reporter).onStepEnd) == null || l.call(m, r, c, a);
  }
  _onError(e) {
    var t, s;
    (s = (t = this._reporter).onError) == null || s.call(t, e);
  }
  _onStdIO(e, t, s, r, c) {
    var _, n, f, S;
    const a = c ? (globalThis.Buffer ? Buffer.from(r, 'base64') : atob(r)) : r,
      m = t ? this._tests.get(t) : void 0,
      l = m && s ? m.results.find((d) => d._id === s) : void 0;
    e === 'stdout'
      ? (l == null || l.stdout.push(a),
        (n = (_ = this._reporter).onStdOut) == null || n.call(_, a, m, l))
      : (l == null || l.stderr.push(a),
        (S = (f = this._reporter).onStdErr) == null || S.call(f, a, m, l));
  }
  async _onEnd(e) {
    var t, s;
    await ((s = (t = this._reporter).onEnd) == null
      ? void 0
      : s.call(t, {
          status: e.status,
          startTime: new Date(e.startTime),
          duration: e.duration,
        }));
  }
  _onExit() {
    var e, t;
    return (t = (e = this._reporter).onExit) == null ? void 0 : t.call(e);
  }
  _parseConfig(e) {
    const t = { ...st, ...e };
    return (
      this._options.configOverrides &&
        ((t.configFile = this._options.configOverrides.configFile),
        (t.reportSlowTests = this._options.configOverrides.reportSlowTests),
        (t.quiet = this._options.configOverrides.quiet),
        (t.reporter = [...this._options.configOverrides.reporter])),
      t
    );
  }
  _parseProject(e) {
    return {
      metadata: e.metadata,
      name: e.name,
      outputDir: this._absolutePath(e.outputDir),
      repeatEach: e.repeatEach,
      retries: e.retries,
      testDir: this._absolutePath(e.testDir),
      testIgnore: Z(e.testIgnore),
      testMatch: Z(e.testMatch),
      timeout: e.timeout,
      grep: Z(e.grep),
      grepInvert: Z(e.grepInvert),
      dependencies: e.dependencies,
      teardown: e.teardown,
      snapshotDir: this._absolutePath(e.snapshotDir),
      use: {},
    };
  }
  _parseAttachments(e) {
    return e.map((t) => ({
      ...t,
      body:
        t.base64 && globalThis.Buffer
          ? Buffer.from(t.base64, 'base64')
          : void 0,
    }));
  }
  _mergeSuiteInto(e, t) {
    let s = t.suites.find((r) => r.title === e.title);
    s ||
      ((s = new q(e.title, t.type === 'project' ? 'file' : 'describe')),
      t._addSuite(s)),
      (s.location = this._absoluteLocation(e.location)),
      e.entries.forEach((r) => {
        'testId' in r ? this._mergeTestInto(r, s) : this._mergeSuiteInto(r, s);
      });
  }
  _mergeTestInto(e, t) {
    let s = this._options.mergeTestCases
      ? t.tests.find(
          (r) => r.title === e.title && r.repeatEachIndex === e.repeatEachIndex
        )
      : void 0;
    s ||
      ((s = new Ze(
        e.testId,
        e.title,
        this._absoluteLocation(e.location),
        e.repeatEachIndex
      )),
      t._addTest(s),
      this._tests.set(s.id, s)),
      this._updateTest(e, s);
  }
  _updateTest(e, t) {
    return (
      (t.id = e.testId),
      (t.location = this._absoluteLocation(e.location)),
      (t.retries = e.retries),
      (t.tags = e.tags ?? []),
      (t.annotations = e.annotations ?? []),
      t
    );
  }
  _absoluteLocation(e) {
    return e && { ...e, file: this._absolutePath(e.file) };
  }
  _absolutePath(e) {
    if (e !== void 0)
      return this._options.resolvePath
        ? this._options.resolvePath(this._rootDir, e)
        : this._rootDir + '/' + e;
  }
}
class q {
  constructor(e, t) {
    (this._entries = []),
      (this._requireFile = ''),
      (this._parallelMode = 'none'),
      (this.title = e),
      (this._type = t);
  }
  get type() {
    return this._type;
  }
  get suites() {
    return this._entries.filter((e) => e.type !== 'test');
  }
  get tests() {
    return this._entries.filter((e) => e.type === 'test');
  }
  entries() {
    return this._entries;
  }
  allTests() {
    const e = [],
      t = (s) => {
        for (const r of s.entries()) r.type === 'test' ? e.push(r) : t(r);
      };
    return t(this), e;
  }
  titlePath() {
    const e = this.parent ? this.parent.titlePath() : [];
    return (this.title || this._type !== 'describe') && e.push(this.title), e;
  }
  project() {
    var e;
    return this._project ?? ((e = this.parent) == null ? void 0 : e.project());
  }
  _addTest(e) {
    (e.parent = this), this._entries.push(e);
  }
  _addSuite(e) {
    (e.parent = this), this._entries.push(e);
  }
}
class Ze {
  constructor(e, t, s, r) {
    (this.fn = () => {}),
      (this.results = []),
      (this.type = 'test'),
      (this.expectedStatus = 'passed'),
      (this.timeout = 0),
      (this.annotations = []),
      (this.retries = 0),
      (this.tags = []),
      (this.repeatEachIndex = 0),
      (this.id = e),
      (this.title = t),
      (this.location = s),
      (this.repeatEachIndex = r);
  }
  titlePath() {
    const e = this.parent ? this.parent.titlePath() : [];
    return e.push(this.title), e;
  }
  outcome() {
    return it(this);
  }
  ok() {
    const e = this.outcome();
    return e === 'expected' || e === 'flaky' || e === 'skipped';
  }
  _createTestResult(e) {
    const t = new tt(this.results.length, e);
    return this.results.push(t), t;
  }
}
class et {
  constructor(e, t, s) {
    (this.duration = -1),
      (this.steps = []),
      (this._startTime = 0),
      (this.title = e.title),
      (this.category = e.category),
      (this.location = s),
      (this.parent = t),
      (this._startTime = e.startTime);
  }
  titlePath() {
    var t;
    return [
      ...(((t = this.parent) == null ? void 0 : t.titlePath()) || []),
      this.title,
    ];
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(e) {
    this._startTime = +e;
  }
}
class tt {
  constructor(e, t) {
    (this.parallelIndex = -1),
      (this.workerIndex = -1),
      (this.duration = -1),
      (this.stdout = []),
      (this.stderr = []),
      (this.attachments = []),
      (this.status = 'skipped'),
      (this.steps = []),
      (this.errors = []),
      (this._stepMap = new Map()),
      (this._startTime = 0),
      (this.retry = e),
      (this._id = t);
  }
  setStartTimeNumber(e) {
    this._startTime = e;
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(e) {
    this._startTime = +e;
  }
}
const st = {
  forbidOnly: !1,
  fullyParallel: !1,
  globalSetup: null,
  globalTeardown: null,
  globalTimeout: 0,
  grep: /.*/,
  grepInvert: null,
  maxFailures: 0,
  metadata: {},
  preserveOutput: 'always',
  projects: [],
  reporter: [[Je.CI ? 'dot' : 'list']],
  reportSlowTests: { max: 5, threshold: 15e3 },
  configFile: '',
  rootDir: '',
  quiet: !1,
  shard: null,
  updateSnapshots: 'missing',
  version: '',
  workers: 0,
  webServer: null,
};
function Z(i) {
  return i.map((e) =>
    e.s !== void 0 ? e.s : new RegExp(e.r.source, e.r.flags)
  );
}
function it(i) {
  let e = 0,
    t = 0,
    s = 0;
  for (const r of i.results)
    r.status === 'interrupted' ||
      (r.status === 'skipped' && i.expectedStatus === 'skipped'
        ? ++e
        : r.status === 'skipped' ||
          (r.status === i.expectedStatus ? ++t : ++s));
  return t === 0 && s === 0
    ? 'skipped'
    : s === 0
      ? 'expected'
      : t === 0 && e === 0
        ? 'unexpected'
        : 'flaky';
}
class ie {
  constructor(e, t, s, r, c) {
    (this._treeItemById = new Map()), (this._treeItemByTestId = new Map());
    const a = r && [...r.values()].some(Boolean);
    (this.pathSeparator = c),
      (this.rootItem = {
        kind: 'group',
        subKind: 'folder',
        id: e,
        title: '',
        location: { file: '', line: 0, column: 0 },
        duration: 0,
        parent: void 0,
        children: [],
        status: 'none',
        hasLoadErrors: !1,
      }),
      this._treeItemById.set(e, this.rootItem);
    const m = (l, _, n) => {
      for (const f of _.suites) {
        const S = f.title || '<anonymous>';
        let d = n.children.find((p) => p.kind === 'group' && p.title === S);
        d ||
          ((d = {
            kind: 'group',
            subKind: 'describe',
            id: 'suite:' + _.titlePath().join('') + '' + S,
            title: S,
            location: f.location,
            duration: 0,
            parent: n,
            children: [],
            status: 'none',
            hasLoadErrors: !1,
          }),
          this._addChild(n, d)),
          m(l, f, d);
      }
      for (const f of _.tests) {
        const S = f.title;
        let d = n.children.find((E) => E.kind !== 'group' && E.title === S);
        d ||
          ((d = {
            kind: 'case',
            id: 'test:' + f.titlePath().join(''),
            title: S,
            parent: n,
            children: [],
            tests: [],
            location: f.location,
            duration: 0,
            status: 'none',
            project: void 0,
            test: void 0,
            tags: f.tags,
          }),
          this._addChild(n, d));
        const p = f.results[0];
        let x = 'none';
        (p == null ? void 0 : p[Y]) === 'scheduled'
          ? (x = 'scheduled')
          : (p == null ? void 0 : p[Y]) === 'running'
            ? (x = 'running')
            : (p == null ? void 0 : p.status) === 'skipped'
              ? (x = 'skipped')
              : (p == null ? void 0 : p.status) === 'interrupted'
                ? (x = 'none')
                : p && f.outcome() !== 'expected'
                  ? (x = 'failed')
                  : p && f.outcome() === 'expected' && (x = 'passed'),
          d.tests.push(f);
        const R = {
          kind: 'test',
          id: f.id,
          title: l.name,
          location: f.location,
          test: f,
          parent: d,
          children: [],
          status: x,
          duration: f.results.length ? Math.max(0, f.results[0].duration) : 0,
          project: l,
        };
        this._addChild(d, R),
          this._treeItemByTestId.set(f.id, R),
          (d.duration = d.children.reduce((E, I) => E + I.duration, 0));
      }
    };
    for (const l of (t == null ? void 0 : t.suites) || [])
      if (!(a && !r.get(l.title)))
        for (const _ of l.suites) {
          const n = this._fileItem(_.location.file.split(c), !0);
          m(l.project(), _, n);
        }
    for (const l of s) {
      if (!l.location) continue;
      const _ = this._fileItem(l.location.file.split(c), !0);
      _.hasLoadErrors = !0;
    }
  }
  _addChild(e, t) {
    e.children.push(t), (t.parent = e), this._treeItemById.set(t.id, t);
  }
  filterTree(e, t, s) {
    const r = e.trim().toLowerCase().split(' '),
      c = [...t.values()].some(Boolean),
      a = (l) => {
        const _ = [...l.tests[0].titlePath(), ...l.tests[0].tags]
          .join(' ')
          .toLowerCase();
        return !r.every((n) => _.includes(n)) &&
          !l.tests.some((n) => (s == null ? void 0 : s.has(n.id)))
          ? !1
          : ((l.children = l.children.filter(
              (n) =>
                !c || (s == null ? void 0 : s.has(n.test.id)) || t.get(n.status)
            )),
            (l.tests = l.children.map((n) => n.test)),
            !!l.children.length);
      },
      m = (l) => {
        const _ = [];
        for (const n of l.children)
          n.kind === 'case'
            ? a(n) && _.push(n)
            : (m(n), (n.children.length || n.hasLoadErrors) && _.push(n));
        l.children = _;
      };
    m(this.rootItem);
  }
  _fileItem(e, t) {
    if (e.length === 0) return this.rootItem;
    const s = e.join(this.pathSeparator),
      r = this._treeItemById.get(s);
    if (r) return r;
    const c = this._fileItem(e.slice(0, e.length - 1), !1),
      a = {
        kind: 'group',
        subKind: t ? 'file' : 'folder',
        id: s,
        title: e[e.length - 1],
        location: { file: s, line: 0, column: 0 },
        duration: 0,
        parent: c,
        children: [],
        status: 'none',
        hasLoadErrors: !1,
      };
    return this._addChild(c, a), a;
  }
  sortAndPropagateStatus() {
    _e(this.rootItem);
  }
  flattenForSingleProject() {
    const e = (t) => {
      t.kind === 'case' && t.children.length === 1
        ? ((t.project = t.children[0].project),
          (t.test = t.children[0].test),
          (t.children = []),
          this._treeItemByTestId.set(t.test.id, t))
        : t.children.forEach(e);
    };
    e(this.rootItem);
  }
  shortenRoot() {
    let e = this.rootItem;
    for (
      ;
      e.children.length === 1 &&
      e.children[0].kind === 'group' &&
      e.children[0].subKind === 'folder';

    )
      e = e.children[0];
    (e.location = this.rootItem.location), (this.rootItem = e);
  }
  testIds() {
    const e = new Set(),
      t = (s) => {
        s.kind === 'case' && s.tests.forEach((r) => e.add(r.id)),
          s.children.forEach(t);
      };
    return t(this.rootItem), e;
  }
  fileNames() {
    const e = new Set(),
      t = (s) => {
        s.kind === 'group' && s.subKind === 'file'
          ? e.add(s.id)
          : s.children.forEach(t);
      };
    return t(this.rootItem), [...e];
  }
  flatTreeItems() {
    const e = [],
      t = (s) => {
        e.push(s), s.children.forEach(t);
      };
    return t(this.rootItem), e;
  }
  treeItemById(e) {
    return this._treeItemById.get(e);
  }
  collectTestIds(e) {
    return e ? rt(e) : new Set();
  }
}
function _e(i) {
  for (const a of i.children) _e(a);
  i.kind === 'group' &&
    i.children.sort(
      (a, m) =>
        a.location.file.localeCompare(m.location.file) ||
        a.location.line - m.location.line
    );
  let e = i.children.length > 0,
    t = i.children.length > 0,
    s = !1,
    r = !1,
    c = !1;
  for (const a of i.children)
    (t = t && a.status === 'skipped'),
      (e = e && (a.status === 'passed' || a.status === 'skipped')),
      (s = s || a.status === 'failed'),
      (r = r || a.status === 'running'),
      (c = c || a.status === 'scheduled');
  r
    ? (i.status = 'running')
    : c
      ? (i.status = 'scheduled')
      : s
        ? (i.status = 'failed')
        : t
          ? (i.status = 'skipped')
          : e && (i.status = 'passed');
}
function rt(i) {
  const e = new Set(),
    t = (s) => {
      var r;
      s.kind === 'case'
        ? s.tests.map((c) => c.id).forEach((c) => e.add(c))
        : s.kind === 'test'
          ? e.add(s.id)
          : (r = s.children) == null || r.forEach(t);
    };
  return t(i), e;
}
const Y = Symbol('statusEx');
class ot {
  constructor(e) {
    (this.loadErrors = []),
      (this.progress = { total: 0, passed: 0, failed: 0, skipped: 0 }),
      (this._lastRunTestCount = 0),
      (this._receiver = new se(this._createReporter(), {
        mergeProjects: !0,
        mergeTestCases: !0,
        resolvePath: (t, s) => t + e.pathSeparator + s,
        clearPreviousResultsWhenTestBegins: !0,
      })),
      (this._options = e);
  }
  _createReporter() {
    return {
      version: () => 'v2',
      onConfigure: (e) => {
        (this.config = e),
          (this._lastRunReceiver = new se(
            {
              version: () => 'v2',
              onBegin: (t) => {
                (this._lastRunTestCount = t.allTests().length),
                  (this._lastRunReceiver = void 0);
              },
            },
            {
              mergeProjects: !0,
              mergeTestCases: !1,
              resolvePath: (t, s) => t + this._options.pathSeparator + s,
            }
          ));
      },
      onBegin: (e) => {
        var t;
        if (
          (this.rootSuite || (this.rootSuite = e), this._testResultsSnapshot)
        ) {
          for (const s of this.rootSuite.allTests())
            s.results =
              ((t = this._testResultsSnapshot) == null
                ? void 0
                : t.get(s.id)) || s.results;
          this._testResultsSnapshot = void 0;
        }
        (this.progress.total = this._lastRunTestCount),
          (this.progress.passed = 0),
          (this.progress.failed = 0),
          (this.progress.skipped = 0),
          this._options.onUpdate(!0);
      },
      onEnd: () => {
        this._options.onUpdate(!0);
      },
      onTestBegin: (e, t) => {
        (t[Y] = 'running'), this._options.onUpdate();
      },
      onTestEnd: (e, t) => {
        e.outcome() === 'skipped'
          ? ++this.progress.skipped
          : e.outcome() === 'unexpected'
            ? ++this.progress.failed
            : ++this.progress.passed,
          (t[Y] = t.status),
          this._options.onUpdate();
      },
      onError: (e) => this._handleOnError(e),
      printsToStdio: () => !1,
    };
  }
  processGlobalReport(e) {
    const t = new se({
      version: () => 'v2',
      onConfigure: (s) => {
        this.config = s;
      },
      onError: (s) => this._handleOnError(s),
    });
    for (const s of e) t.dispatch(s);
  }
  processListReport(e) {
    var s;
    const t = ((s = this.rootSuite) == null ? void 0 : s.allTests()) || [];
    (this._testResultsSnapshot = new Map(t.map((r) => [r.id, r.results]))),
      this._receiver.reset();
    for (const r of e) this._receiver.dispatch(r);
  }
  processTestReportEvent(e) {
    var t, s, r;
    (s = (t = this._lastRunReceiver) == null ? void 0 : t.dispatch(e)) ==
      null || s.catch(() => {}),
      (r = this._receiver.dispatch(e)) == null || r.catch(() => {});
  }
  _handleOnError(e) {
    var t, s;
    this.loadErrors.push(e),
      (s = (t = this._options).onError) == null || s.call(t, e),
      this._options.onUpdate();
  }
  asModel() {
    return {
      rootSuite: this.rootSuite || new q('', 'root'),
      config: this.config,
      loadErrors: this.loadErrors,
      progress: this.progress,
    };
  }
}
const nt = ({ source: i }) => {
    const [e, t] = Me(),
      [s, r] = V.useState(De()),
      [c] = V.useState(
        Le(
          () => import('./assets/xtermModule-BeNbaIVa.js'),
          __vite__mapDeps([0, 1]),
          import.meta.url
        ).then((m) => m.default)
      ),
      a = V.useRef(null);
    return (
      V.useEffect(() => (Fe(r), () => Oe(r)), []),
      V.useEffect(() => {
        const m = i.write,
          l = i.clear;
        return (
          (async () => {
            const { Terminal: _, FitAddon: n } = await c,
              f = t.current;
            if (!f) return;
            const S = s === 'dark-mode' ? lt : at;
            if (a.current && a.current.terminal.options.theme === S) return;
            a.current && (f.textContent = '');
            const d = new _({
                convertEol: !0,
                fontSize: 13,
                scrollback: 1e4,
                fontFamily: 'var(--vscode-editor-font-family)',
                theme: S,
              }),
              p = new n();
            d.loadAddon(p);
            for (const x of i.pending) d.write(x);
            (i.write = (x) => {
              i.pending.push(x), d.write(x);
            }),
              (i.clear = () => {
                (i.pending = []), d.clear();
              }),
              d.open(f),
              p.fit(),
              (a.current = { terminal: d, fitAddon: p });
          })(),
          () => {
            (i.clear = l), (i.write = m);
          }
        );
      }, [c, a, t, i, s]),
      V.useEffect(() => {
        setTimeout(() => {
          a.current &&
            (a.current.fitAddon.fit(),
            i.resize(a.current.terminal.cols, a.current.terminal.rows));
        }, 250);
      }, [e, i]),
      o.jsx('div', {
        'data-testid': 'output',
        className: 'xterm-wrapper',
        style: { flex: 'auto' },
        ref: t,
      })
    );
  },
  at = {
    foreground: '#383a42',
    background: '#fafafa',
    cursor: '#383a42',
    black: '#000000',
    red: '#e45649',
    green: '#50a14f',
    yellow: '#c18401',
    blue: '#4078f2',
    magenta: '#a626a4',
    cyan: '#0184bc',
    white: '#a0a0a0',
    brightBlack: '#000000',
    brightRed: '#e06c75',
    brightGreen: '#98c379',
    brightYellow: '#d19a66',
    brightBlue: '#4078f2',
    brightMagenta: '#a626a4',
    brightCyan: '#0184bc',
    brightWhite: '#383a42',
    selectionBackground: '#d7d7d7',
    selectionForeground: '#383a42',
  },
  lt = {
    foreground: '#f8f8f2',
    background: '#1e1e1e',
    cursor: '#f8f8f0',
    black: '#000000',
    red: '#ff5555',
    green: '#50fa7b',
    yellow: '#f1fa8c',
    blue: '#bd93f9',
    magenta: '#ff79c6',
    cyan: '#8be9fd',
    white: '#bfbfbf',
    brightBlack: '#4d4d4d',
    brightRed: '#ff6e6e',
    brightGreen: '#69ff94',
    brightYellow: '#ffffa5',
    brightBlue: '#d6acff',
    brightMagenta: '#ff92df',
    brightCyan: '#a4ffff',
    brightWhite: '#e6e6e6',
    selectionBackground: '#44475a',
    selectionForeground: '#f8f8f2',
  },
  ct = ({
    filterText: i,
    setFilterText: e,
    statusFilters: t,
    setStatusFilters: s,
    projectFilters: r,
    setProjectFilters: c,
    testModel: a,
    runTests: m,
  }) => {
    const [l, _] = h.useState(!1),
      n = h.useRef(null);
    h.useEffect(() => {
      var d;
      (d = n.current) == null || d.focus();
    }, []);
    const f =
        [...t.entries()]
          .filter(([d, p]) => p)
          .map(([d]) => d)
          .join(' ') || 'all',
      S =
        [...r.entries()]
          .filter(([d, p]) => p)
          .map(([d]) => d)
          .join(' ') || 'all';
    return o.jsxs('div', {
      className: 'filters',
      children: [
        o.jsx(Ye, {
          expanded: l,
          setExpanded: _,
          title: o.jsx('input', {
            ref: n,
            type: 'search',
            placeholder: 'Filter (e.g. text, @tag)',
            spellCheck: !1,
            value: i,
            onChange: (d) => {
              e(d.target.value);
            },
            onKeyDown: (d) => {
              d.key === 'Enter' && m();
            },
          }),
        }),
        o.jsxs('div', {
          className: 'filter-summary',
          title:
            'Status: ' +
            f +
            `
Projects: ` +
            S,
          onClick: () => _(!l),
          children: [
            o.jsx('span', { className: 'filter-label', children: 'Status:' }),
            ' ',
            f,
            o.jsx('span', { className: 'filter-label', children: 'Projects:' }),
            ' ',
            S,
          ],
        }),
        l &&
          o.jsxs('div', {
            className: 'hbox',
            style: { marginLeft: 14, maxHeight: 200, overflowY: 'auto' },
            children: [
              o.jsx('div', {
                className: 'filter-list',
                children: [...t.entries()].map(([d, p]) =>
                  o.jsx(
                    'div',
                    {
                      className: 'filter-entry',
                      children: o.jsxs('label', {
                        children: [
                          o.jsx('input', {
                            type: 'checkbox',
                            checked: p,
                            onClick: () => {
                              const x = new Map(t);
                              x.set(d, !x.get(d)), s(x);
                            },
                          }),
                          o.jsx('div', { children: d }),
                        ],
                      }),
                    },
                    d
                  )
                ),
              }),
              o.jsx('div', {
                className: 'filter-list',
                children: [...r.entries()].map(([d, p]) =>
                  o.jsx(
                    'div',
                    {
                      className: 'filter-entry',
                      children: o.jsxs('label', {
                        children: [
                          o.jsx('input', {
                            type: 'checkbox',
                            checked: p,
                            onClick: () => {
                              var E;
                              const x = new Map(r);
                              x.set(d, !x.get(d)), c(x);
                              const R =
                                (E = a == null ? void 0 : a.config) == null
                                  ? void 0
                                  : E.configFile;
                              R &&
                                me.setObject(
                                  R + ':projects',
                                  [...x.entries()]
                                    .filter(([I, W]) => W)
                                    .map(([I]) => I)
                                );
                            },
                          }),
                          o.jsx('div', { children: d || 'untitled' }),
                        ],
                      }),
                    },
                    d
                  )
                ),
              }),
            ],
          }),
      ],
    });
  },
  dt = ({ tag: i, style: e, onClick: t }) =>
    o.jsx('span', {
      className: re('tag', `tag-color-${ut(i)}`),
      onClick: t,
      style: { margin: '6px 0 0 6px', ...e },
      title: `Click to filter by tag: ${i}`,
      children: i,
    });
function ut(i) {
  let e = 0;
  for (let t = 0; t < i.length; t++) e = i.charCodeAt(t) + ((e << 8) - e);
  return Math.abs(e % 6);
}
const ht = Xe,
  ft = ({
    filterText: i,
    testModel: e,
    testServerConnection: t,
    testTree: s,
    runTests: r,
    runningState: c,
    watchAll: a,
    watchedTreeIds: m,
    setWatchedTreeIds: l,
    isLoading: _,
    onItemSelected: n,
    requestedCollapseAllCount: f,
    setFilterText: S,
    onRevealSource: d,
  }) => {
    const [p, x] = h.useState({ expandedItems: new Map() }),
      [R, E] = h.useState(),
      [I, W] = h.useState(f);
    h.useEffect(() => {
      if (I !== f) {
        p.expandedItems.clear();
        for (const b of s.flatTreeItems()) p.expandedItems.set(b.id, !1);
        W(f), E(void 0), x({ ...p });
        return;
      }
      if (!c || c.itemSelectedByUser) return;
      let u;
      const B = (b) => {
        var L;
        b.children.forEach(B),
          !u &&
            b.status === 'failed' &&
            ((b.kind === 'test' && c.testIds.has(b.test.id)) ||
              (b.kind === 'case' &&
                c.testIds.has((L = b.tests[0]) == null ? void 0 : L.id))) &&
            (u = b);
      };
      B(s.rootItem), u && E(u.id);
    }, [c, E, s, I, W, f, p, x]);
    const { selectedTreeItem: D } = h.useMemo(() => {
      if (!e) return { selectedTreeItem: void 0 };
      const u = R ? s.treeItemById(R) : void 0,
        B = pt(u, e);
      let b;
      return (
        (u == null ? void 0 : u.kind) === 'test'
          ? (b = u.test)
          : (u == null ? void 0 : u.kind) === 'case' &&
            u.tests.length === 1 &&
            (b = u.tests[0]),
        n({ treeItem: u, testCase: b, testFile: B }),
        { selectedTreeItem: u }
      );
    }, [n, R, e, s]);
    h.useEffect(() => {
      if (!_)
        if (a) t == null || t.watchNoReply({ fileNames: s.fileNames() });
        else {
          const u = new Set();
          for (const B of m.value) {
            const b = s.treeItemById(B),
              L = b == null ? void 0 : b.location.file;
            L && u.add(L);
          }
          t == null || t.watchNoReply({ fileNames: [...u] });
        }
    }, [_, s, a, m, t]);
    const K = (u) => {
        E(u.id), r('bounce-if-busy', s.collectTestIds(u));
      },
      N = (u, B) => {
        if ((u.preventDefault(), u.stopPropagation(), u.metaKey || u.ctrlKey)) {
          const b = i.split(' ');
          b.includes(B)
            ? S(
                b
                  .filter((L) => L !== B)
                  .join(' ')
                  .trim()
              )
            : S((i + ' ' + B).trim());
        } else
          S(
            (
              i
                .split(' ')
                .filter((b) => !b.startsWith('@'))
                .join(' ') +
              ' ' +
              B
            ).trim()
          );
      };
    return o.jsx(ht, {
      name: 'tests',
      treeState: p,
      setTreeState: x,
      rootItem: s.rootItem,
      dataTestId: 'test-tree',
      render: (u) =>
        o.jsxs('div', {
          className: 'hbox ui-mode-list-item',
          children: [
            o.jsxs('div', {
              className: 'ui-mode-list-item-title',
              children: [
                o.jsx('span', { title: u.title, children: u.title }),
                u.kind === 'case'
                  ? u.tags.map((B) =>
                      o.jsx(dt, { tag: B.slice(1), onClick: (b) => N(b, B) }, B)
                    )
                  : null,
              ],
            }),
            !!u.duration &&
              u.status !== 'skipped' &&
              o.jsx('div', {
                className: 'ui-mode-list-item-time',
                children: We(u.duration),
              }),
            o.jsxs($, {
              noMinHeight: !0,
              noShadow: !0,
              children: [
                o.jsx(M, {
                  icon: 'play',
                  title: 'Run',
                  onClick: () => K(u),
                  disabled: !!c && !c.completed,
                }),
                o.jsx(M, {
                  icon: 'go-to-file',
                  title: 'Show source',
                  onClick: d,
                  style:
                    u.kind === 'group' && u.subKind === 'folder'
                      ? { visibility: 'hidden' }
                      : {},
                }),
                !a &&
                  o.jsx(M, {
                    icon: 'eye',
                    title: 'Watch',
                    onClick: () => {
                      m.value.has(u.id)
                        ? m.value.delete(u.id)
                        : m.value.add(u.id),
                        l({ ...m });
                    },
                    toggled: m.value.has(u.id),
                  }),
              ],
            }),
          ],
        }),
      icon: (u) => Qe(u.status),
      selectedItem: D,
      onAccepted: K,
      onSelected: (u) => {
        c && (c.itemSelectedByUser = !0), E(u.id);
      },
      isError: (u) => (u.kind === 'group' ? u.hasLoadErrors : !1),
      autoExpandDepth: i ? 5 : 1,
      noItemsMessage: _ ? 'Loading…' : 'No tests',
    });
  };
function pt(i, e) {
  if (!(!i || !e))
    return {
      file: i.location.file,
      line: i.location.line,
      column: i.location.column,
      source: {
        errors: e.loadErrors
          .filter((t) => {
            var s;
            return (
              ((s = t.location) == null ? void 0 : s.file) === i.location.file
            );
          })
          .map((t) => ({ line: t.location.line, message: t.message })),
        content: void 0,
      },
    };
}
function gt(i) {
  return `.playwright-artifacts-${i}`;
}
const mt = ({
    item: i,
    rootDir: e,
    onOpenExternally: t,
    revealSource: s,
    pathSeparator: r,
  }) => {
    var f, S;
    const [c, a] = h.useState(),
      [m, l] = h.useState(0),
      _ = h.useRef(null),
      { outputDir: n } = h.useMemo(
        () => ({ outputDir: i.testCase ? _t(i.testCase) : void 0 }),
        [i]
      );
    return (
      h.useEffect(() => {
        var R, E;
        _.current && clearTimeout(_.current);
        const d = (R = i.testCase) == null ? void 0 : R.results[0];
        if (!d) {
          a(void 0);
          return;
        }
        const p =
          d && d.duration >= 0 && d.attachments.find((I) => I.name === 'trace');
        if (p && p.path) {
          fe(p.path).then((I) => a({ model: I, isLive: !1 }));
          return;
        }
        if (!n) {
          a(void 0);
          return;
        }
        const x = [
          n,
          gt(d.workerIndex),
          'traces',
          `${(E = i.testCase) == null ? void 0 : E.id}.json`,
        ].join(r);
        return (
          (_.current = setTimeout(async () => {
            try {
              const I = await fe(x);
              a({ model: I, isLive: !0 });
            } catch {
              a(void 0);
            } finally {
              l(m + 1);
            }
          }, 500)),
          () => {
            _.current && clearTimeout(_.current);
          }
        );
      }, [n, i, a, m, l, r]),
      o.jsx(
        Ge,
        {
          model: c == null ? void 0 : c.model,
          showSourcesFirst: !0,
          rootDir: e,
          fallbackLocation: i.testFile,
          isLive: c == null ? void 0 : c.isLive,
          status: (f = i.treeItem) == null ? void 0 : f.status,
          annotations:
            ((S = i.testCase) == null ? void 0 : S.annotations) || [],
          onOpenExternally: t,
          revealSource: s,
        },
        'workbench'
      )
    );
  },
  _t = (i) => {
    var e;
    for (let t = i.parent; t; t = t.parent)
      if (t.project()) return (e = t.project()) == null ? void 0 : e.outputDir;
  };
async function fe(i) {
  const e = new URLSearchParams();
  e.set('trace', i);
  const s = await (await fetch(`contexts?${e.toString()}`)).json();
  return new Ue(s);
}
const wt = ({ settings: i }) =>
  o.jsx('div', {
    className: 'vbox settings-view',
    children: i.map(({ value: e, set: t, title: s }) =>
      o.jsx(
        'div',
        {
          className: 'setting',
          children: o.jsxs('label', {
            children: [
              o.jsx('input', {
                type: 'checkbox',
                checked: e,
                onClick: () => t(!e),
              }),
              s,
            ],
          }),
        },
        s
      )
    ),
  });
let pe = { cols: 80, rows: 24 };
const A = {
    pending: [],
    clear: () => {},
    write: (i) => A.pending.push(i),
    resize: () => {},
  },
  O = new URLSearchParams(window.location.search),
  vt = O.get('ws'),
  we = new URL(`../${vt}`, window.location.toString());
we.protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const y = {
  args: O.getAll('arg'),
  grep: O.get('grep') || void 0,
  grepInvert: O.get('grepInvert') || void 0,
  projects: O.getAll('project'),
  workers: O.get('workers') || void 0,
  headed: O.has('headed'),
  updateSnapshots: O.get('updateSnapshots') || void 0,
  reporters: O.has('reporter') ? O.getAll('reporter') : void 0,
  pathSeparator: O.get('pathSeparator') || '/',
};
y.updateSnapshots &&
  !['all', 'none', 'missing'].includes(y.updateSnapshots) &&
  (y.updateSnapshots = void 0);
const ge = navigator.platform === 'MacIntel',
  St = ({}) => {
    var he;
    const [i, e] = h.useState(''),
      [t, s] = h.useState(!1),
      [r, c] = h.useState(!1),
      [a, m] = h.useState(
        new Map([
          ['passed', !1],
          ['failed', !1],
          ['skipped', !1],
        ])
      ),
      [l, _] = h.useState(new Map()),
      [n, f] = h.useState(),
      [S, d] = h.useState(),
      [p, x] = h.useState({}),
      [R, E] = h.useState(new Set()),
      [I, W] = h.useState(!1),
      [D, K] = h.useState(),
      N = D && !D.completed,
      [u, B] = Ae('watch-all', !1),
      [b, L] = h.useState({ value: new Set() }),
      H = h.useRef(Promise.resolve()),
      Q = h.useRef(new Set()),
      [oe, ve] = h.useState(0),
      [Se, xe] = h.useState(!1),
      [ne, ae] = h.useState(!0),
      [v, be] = h.useState(),
      [X, Te] = h.useState(),
      [G, ke] = h.useState(!1);
    h.useState(!1);
    const [je, le] = h.useState(!1),
      ye = h.useCallback(() => le(!0), [le]),
      Ee = !1,
      [ce, xt] = h.useState(!1),
      [de, bt] = h.useState(!1),
      [ue, Tt] = h.useState(!1),
      [Ie, Re] = ze(),
      Be = h.useRef(null),
      J = h.useCallback(() => {
        be(new $e(new qe(we)));
      }, []);
    h.useEffect(() => {
      var w;
      (w = Be.current) == null || w.focus(), W(!0), J();
    }, [J]),
      h.useEffect(() => {
        if (!v) return;
        const w = [
          v.onStdio((g) => {
            if (g.buffer) {
              const T = atob(g.buffer);
              A.write(T);
            } else A.write(g.text);
            g.type === 'stderr' && c(!0);
          }),
          v.onClose(() => xe(!0)),
        ];
        return (
          (A.resize = (g, T) => {
            (pe = { cols: g, rows: T }),
              v.resizeTerminalNoReply({ cols: g, rows: T });
          }),
          () => {
            for (const g of w) g.dispose();
          }
        );
      }, [v]),
      h.useEffect(() => {
        if (!v) return;
        let w;
        const g = new ot({
          onUpdate: (T) => {
            clearTimeout(w),
              (w = void 0),
              T
                ? f(g.asModel())
                : w ||
                  (w = setTimeout(() => {
                    f(g.asModel());
                  }, 250));
          },
          onError: (T) => {
            A.write(
              (T.stack || T.value || '') +
                `
`
            ),
              c(!0);
          },
          pathSeparator: y.pathSeparator,
        });
        return (
          Te(g),
          f(void 0),
          W(!0),
          L({ value: new Set() }),
          (async () => {
            try {
              await v.initialize({ interceptStdio: !0, watchTestDirs: !0 });
              const { status: T, report: j } = await v.runGlobalSetup({});
              if ((g.processGlobalReport(j), T !== 'passed')) return;
              const C = await v.listTests({
                projects: y.projects,
                locations: y.args,
                grep: y.grep,
                grepInvert: y.grepInvert,
              });
              g.processListReport(C.report),
                v.onReport((P) => {
                  g.processTestReportEvent(P);
                });
              const { hasBrowsers: F } = await v.checkBrowsers({});
              ae(F);
            } finally {
              W(!1);
            }
          })(),
          () => {
            clearTimeout(w);
          }
        );
      }, [v]),
      h.useEffect(() => {
        if (!n) return;
        const { config: w, rootSuite: g } = n,
          T = w.configFile
            ? me.getObject(w.configFile + ':projects', void 0)
            : void 0,
          j = new Map(l);
        for (const C of j.keys())
          g.suites.find((F) => F.title === C) || j.delete(C);
        for (const C of g.suites)
          j.has(C.title) ||
            j.set(C.title, !!(T != null && T.includes(C.title)));
        !T &&
          j.size &&
          ![...j.values()].includes(!0) &&
          j.set(j.entries().next().value[0], !0),
          (l.size !== j.size || [...l].some(([C, F]) => j.get(C) !== F)) &&
            _(j);
      }, [l, n]),
      h.useEffect(() => {
        N && n != null && n.progress ? d(n.progress) : n || d(void 0);
      }, [n, N]);
    const { testTree: Ce } = h.useMemo(() => {
        if (!n)
          return {
            testTree: new ie('', new q('', 'root'), [], l, y.pathSeparator),
          };
        const w = new ie('', n.rootSuite, n.loadErrors, l, y.pathSeparator);
        return (
          w.filterTree(i, a, N ? (D == null ? void 0 : D.testIds) : void 0),
          w.sortAndPropagateStatus(),
          w.shortenRoot(),
          w.flattenForSingleProject(),
          E(w.testIds()),
          { testTree: w }
        );
      }, [i, n, a, l, E, D, N]),
      z = h.useCallback(
        (w, g) => {
          !v ||
            !n ||
            (w === 'bounce-if-busy' && N) ||
            ((Q.current = new Set([...Q.current, ...g])),
            (H.current = H.current.then(async () => {
              var C, F, P;
              const T = Q.current;
              if (((Q.current = new Set()), !T.size)) return;
              {
                for (const k of ((C = n.rootSuite) == null
                  ? void 0
                  : C.allTests()) || [])
                  if (T.has(k.id)) {
                    k.results = [];
                    const U = k._createTestResult('pending');
                    U[Y] = 'scheduled';
                  }
                f({ ...n });
              }
              const j = '  [' + new Date().toLocaleTimeString() + ']';
              A.write(
                '\x1B[2m—'.repeat(Math.max(0, pe.cols - j.length)) +
                  j +
                  '\x1B[22m'
              ),
                d({ total: 0, passed: 0, failed: 0, skipped: 0 }),
                K({ testIds: T }),
                await v.runTests({
                  locations: y.args,
                  grep: y.grep,
                  grepInvert: y.grepInvert,
                  testIds: [...T],
                  projects: [...l].filter(([k, U]) => U).map(([k]) => k),
                  ...(ce ? { workers: '1' } : {}),
                  ...(de ? { headed: !0 } : {}),
                  ...(ue ? { updateSnapshots: 'all' } : {}),
                  reporters: y.reporters,
                  trace: 'on',
                });
              for (const k of ((F = n.rootSuite) == null
                ? void 0
                : F.allTests()) || [])
                ((P = k.results[0]) == null ? void 0 : P.duration) === -1 &&
                  (k.results = []);
              f({ ...n }), K((k) => (k ? { ...k, completed: !0 } : void 0));
            })));
        },
        [l, N, n, v, ce, de, ue]
      );
    h.useEffect(() => {
      if (!v || !X) return;
      const w = v.onTestFilesChanged(async (g) => {
        if (
          ((H.current = H.current.then(async () => {
            W(!0);
            try {
              const P = await v.listTests({
                projects: y.projects,
                locations: y.args,
                grep: y.grep,
                grepInvert: y.grepInvert,
              });
              X.processListReport(P.report);
            } catch (P) {
              console.log(P);
            } finally {
              W(!1);
            }
          })),
          await H.current,
          g.testFiles.length === 0)
        )
          return;
        const T = X.asModel(),
          j = new ie('', T.rootSuite, T.loadErrors, l, y.pathSeparator),
          C = [],
          F = new Set(g.testFiles);
        if (u) {
          const P = (k) => {
            const U = k.location.file;
            U && F.has(U) && C.push(...j.collectTestIds(k)),
              k.kind === 'group' &&
                k.subKind === 'folder' &&
                k.children.forEach(P);
          };
          P(j.rootItem);
        } else
          for (const P of b.value) {
            const k = j.treeItemById(P),
              U = k == null ? void 0 : k.location.file;
            U && F.has(U) && C.push(...j.collectTestIds(k));
          }
        z('queue-if-busy', new Set(C));
      });
      return () => w.dispose();
    }, [z, v, u, b, X, l]),
      h.useEffect(() => {
        if (!v) return;
        const w = (g) => {
          g.code === 'Backquote' && g.ctrlKey
            ? (g.preventDefault(), s(!t))
            : g.code === 'F5' && g.shiftKey
              ? (g.preventDefault(), v == null || v.stopTestsNoReply({}))
              : g.code === 'F5' && (g.preventDefault(), z('bounce-if-busy', R));
        };
        return (
          addEventListener('keydown', w),
          () => {
            removeEventListener('keydown', w);
          }
        );
      }, [z, J, v, R, t]);
    const ee = h.useRef(null),
      Ne = h.useCallback((w) => {
        var g;
        w.preventDefault(),
          w.stopPropagation(),
          (g = ee.current) == null || g.showModal();
      }, []),
      te = h.useCallback((w) => {
        var g;
        w.preventDefault(),
          w.stopPropagation(),
          (g = ee.current) == null || g.close();
      }, []),
      Pe = h.useCallback(
        (w) => {
          te(w),
            s(!0),
            v == null ||
              v.installBrowsers({}).then(async () => {
                s(!1);
                const { hasBrowsers: g } = await (v == null
                  ? void 0
                  : v.checkBrowsers({}));
                ae(g);
              });
        },
        [te, v]
      );
    return o.jsxs('div', {
      className: 'vbox ui-mode',
      children: [
        !ne &&
          o.jsxs('dialog', {
            ref: ee,
            children: [
              o.jsxs('div', {
                className: 'title',
                children: [
                  o.jsx('span', { className: 'codicon codicon-lightbulb' }),
                  'Install browsers',
                ],
              }),
              o.jsxs('div', {
                className: 'body',
                children: [
                  'Playwright did not find installed browsers.',
                  o.jsx('br', {}),
                  'Would you like to run `playwright install`?',
                  o.jsx('br', {}),
                  o.jsx('button', {
                    className: 'button',
                    onClick: Pe,
                    children: 'Install',
                  }),
                  o.jsx('button', {
                    className: 'button secondary',
                    onClick: te,
                    children: 'Dismiss',
                  }),
                ],
              }),
            ],
          }),
        Se &&
          o.jsxs('div', {
            className: 'disconnected',
            children: [
              o.jsx('div', {
                className: 'title',
                children: 'UI Mode disconnected',
              }),
              o.jsxs('div', {
                children: [
                  o.jsx('a', {
                    href: '#',
                    onClick: () => (window.location.href = '/'),
                    children: 'Reload the page',
                  }),
                  ' to reconnect',
                ],
              }),
            ],
          }),
        o.jsx(Ve, {
          sidebarSize: 250,
          minSidebarSize: 150,
          orientation: 'horizontal',
          sidebarIsFirst: !0,
          settingName: 'testListSidebar',
          main: o.jsxs('div', {
            className: 'vbox',
            children: [
              o.jsxs('div', {
                className: re('vbox', !t && 'hidden'),
                children: [
                  o.jsxs($, {
                    children: [
                      o.jsx('div', {
                        className: 'section-title',
                        style: { flex: 'none' },
                        children: 'Output',
                      }),
                      o.jsx(M, {
                        icon: 'circle-slash',
                        title: 'Clear output',
                        onClick: () => {
                          A.clear(), c(!1);
                        },
                      }),
                      o.jsx('div', { className: 'spacer' }),
                      o.jsx(M, {
                        icon: 'close',
                        title: 'Close',
                        onClick: () => s(!1),
                      }),
                    ],
                  }),
                  o.jsx(nt, { source: A }),
                ],
              }),
              o.jsx('div', {
                className: re('vbox', t && 'hidden'),
                children: o.jsx(mt, {
                  pathSeparator: y.pathSeparator,
                  item: p,
                  rootDir:
                    (he = n == null ? void 0 : n.config) == null
                      ? void 0
                      : he.rootDir,
                  revealSource: je,
                  onOpenExternally: (w) =>
                    v == null
                      ? void 0
                      : v.openNoReply({
                          location: {
                            file: w.file,
                            line: w.line,
                            column: w.column,
                          },
                        }),
                }),
              }),
            ],
          }),
          sidebar: o.jsxs('div', {
            className: 'vbox ui-mode-sidebar',
            children: [
              o.jsxs($, {
                noShadow: !0,
                noMinHeight: !0,
                children: [
                  o.jsx('img', {
                    src: 'playwright-logo.svg',
                    alt: 'Playwright logo',
                  }),
                  o.jsx('div', {
                    className: 'section-title',
                    children: 'Playwright',
                  }),
                  o.jsx(M, {
                    icon: 'refresh',
                    title: 'Reload',
                    onClick: () => J(),
                    disabled: N || I,
                  }),
                  o.jsxs('div', {
                    style: { position: 'relative' },
                    children: [
                      o.jsx(M, {
                        icon: 'terminal',
                        title: 'Toggle output — ' + (ge ? '⌃`' : 'Ctrl + `'),
                        toggled: t,
                        onClick: () => {
                          s(!t);
                        },
                      }),
                      r &&
                        o.jsx('div', {
                          title: 'Output contains error',
                          style: {
                            position: 'absolute',
                            top: 2,
                            right: 2,
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            backgroundColor:
                              'var(--vscode-notificationsErrorIcon-foreground)',
                          },
                        }),
                    ],
                  }),
                  !ne &&
                    o.jsx(M, {
                      icon: 'lightbulb-autofix',
                      style: { color: 'var(--vscode-list-warningForeground)' },
                      title: 'Playwright browsers are missing',
                      onClick: Ne,
                    }),
                ],
              }),
              o.jsx(ct, {
                filterText: i,
                setFilterText: e,
                statusFilters: a,
                setStatusFilters: m,
                projectFilters: l,
                setProjectFilters: _,
                testModel: n,
                runTests: () => z('bounce-if-busy', R),
              }),
              o.jsxs($, {
                noMinHeight: !0,
                children: [
                  !N &&
                    !S &&
                    o.jsx('div', {
                      className: 'section-title',
                      children: 'Tests',
                    }),
                  !N &&
                    S &&
                    o.jsx('div', {
                      'data-testid': 'status-line',
                      className: 'status-line',
                      children: o.jsxs('div', {
                        children: [
                          S.passed,
                          '/',
                          S.total,
                          ' passed (',
                          ((S.passed / S.total) * 100) | 0,
                          '%)',
                        ],
                      }),
                    }),
                  N &&
                    S &&
                    o.jsx('div', {
                      'data-testid': 'status-line',
                      className: 'status-line',
                      children: o.jsxs('div', {
                        children: [
                          'Running ',
                          S.passed,
                          '/',
                          D.testIds.size,
                          ' passed (',
                          ((S.passed / D.testIds.size) * 100) | 0,
                          '%)',
                        ],
                      }),
                    }),
                  o.jsx(M, {
                    icon: 'play',
                    title: 'Run all — F5',
                    onClick: () => z('bounce-if-busy', R),
                    disabled: N || I,
                  }),
                  o.jsx(M, {
                    icon: 'debug-stop',
                    title: 'Stop — ' + (ge ? '⇧F5' : 'Shift + F5'),
                    onClick: () => (v == null ? void 0 : v.stopTests({})),
                    disabled: !N || I,
                  }),
                  o.jsx(M, {
                    icon: 'eye',
                    title: 'Watch all',
                    toggled: u,
                    onClick: () => {
                      L({ value: new Set() }), B(!u);
                    },
                  }),
                  o.jsx(M, {
                    icon: 'collapse-all',
                    title: 'Collapse all',
                    onClick: () => {
                      ve(oe + 1);
                    },
                  }),
                ],
              }),
              o.jsx(ft, {
                filterText: i,
                testModel: n,
                testTree: Ce,
                testServerConnection: v,
                runningState: D,
                runTests: z,
                onItemSelected: x,
                watchAll: u,
                watchedTreeIds: b,
                setWatchedTreeIds: L,
                isLoading: I,
                requestedCollapseAllCount: oe,
                setFilterText: e,
                onRevealSource: ye,
              }),
              Ee,
              o.jsxs($, {
                noShadow: !0,
                noMinHeight: !0,
                className: 'settings-toolbar',
                onClick: () => ke(!G),
                children: [
                  o.jsx('span', {
                    className: `codicon codicon-${G ? 'chevron-down' : 'chevron-right'}`,
                    style: { marginLeft: 5 },
                    title: G ? 'Hide Settings' : 'Show Settings',
                  }),
                  o.jsx('div', {
                    className: 'section-title',
                    children: 'Settings',
                  }),
                ],
              }),
              G &&
                o.jsx(wt, {
                  settings: [{ value: Ie, set: Re, title: 'Dark mode' }],
                }),
            ],
          }),
        }),
      ],
    });
  };
(async () => {
  if ((Ke(), window.location.protocol !== 'file:')) {
    if (
      (window.location.href.includes('isUnderTest=true') &&
        (await new Promise((i) => setTimeout(i, 1e3))),
      !navigator.serviceWorker)
    )
      throw new Error(`Service workers are not supported.
Make sure to serve the website (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register('sw.bundle.js'),
      navigator.serviceWorker.controller ||
        (await new Promise((i) => {
          navigator.serviceWorker.oncontrollerchange = () => i();
        })),
      setInterval(function () {
        fetch('ping');
      }, 1e4);
  }
  He(document.querySelector('#root')).render(o.jsx(St, {}));
})();