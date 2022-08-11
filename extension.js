!function(e) {
    function t(s) {
        if (n[s])
            return n[s].exports;
        var a = n[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(a.exports, a, a.exports, t),
            a.l = !0,
            a.exports
    }

    var n = {};
    t.m = e,
        t.c = n,
        t.d = function(e, n, s) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: s
            })
        }
        ,
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        t.t = function(e, n) {
            if (1 & n && (e = t(e)),
            8 & n)
                return e;
            if (4 & n && "object" == typeof e && e && e.__esModule)
                return e;
            var s = Object.create(null);
            if (t.r(s),
                Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & n && "string" != typeof e)
                for (var a in e)
                    t.d(s, a, function(t) {
                        return e[t]
                    }
                        .bind(null, a));
            return s
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
            ;
            return t.d(n, "a", n),
                n
        }
        ,
        t.o = function(e, t) {
            return {}.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 53)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const s = n(3)
        , a = n(12)
        , o = window.rea
        , i = "en";
    let r = {}
        , A = {}
        , l = null;
    const c = []
        , d = (e,...t)=>{
        const n = []
            , s = e=>{
                for (let t = 0; t < e.length; t++)
                    Array.isArray(e[t]) ? s(e[t]) : n.push(String(e[t]))
            }
        ;
        return s(t),
            o.i18n.getMessage(e, n)
    }
        , u = e=>new Promise((t,n)=>{
            const s = `_locales/${e}/messages.json`;
            a.getRaw(s, s=>{
                    try {
                        if (s)
                            return t(JSON.parse(s))
                    } catch (t) {
                        console.log("i18n: parsing locale " + e + " failed!")
                    }
                    n()
                }
            )
        }
    )
        , p = async e=>{
        e = e.concat(i);
        let t = -1
            , n = null;
        const s = async()=>{
                if (t++,
                t < e.length) {
                    const a = e[t];
                    if (!a || !f.includes(a))
                        return s();
                    try {
                        const e = await u(a);
                        n = a,
                            r = e
                    } catch (e) {
                        return s()
                    }
                    if (!b && a != i)
                        try {
                            const e = await u(i);
                            A = e || {}
                        } catch (e) {}
                }
            }
        ;
        return await s(),
            n
    }
        , g = e=>e ? e.replace(/-/g, "_").split("_").map((e,t)=>t ? e.toUpperCase() : e.toLowerCase()).join("_") : e
        , m = (e,t)=>{
        let n, a;
        return t = t || (l ? [l, l.split("_")[0]].concat(c).filter(e=>e) : c),
            s.each(t, (t,o)=>{
                    const i = Number(o);
                    if (s.each(e, (e,s)=>{
                            const o = Number(s)
                                , r = g(e)
                                , A = r.split(/_/)[0];
                            if (r == t)
                                return a = o,
                                    !1;
                            A == t && (void 0 === n || i < n) && (a = o,
                                n = i)
                        }
                    ),
                    void 0 !== a)
                        return !1
                }
            ),
            void 0 === a ? a : e[a]
    }
        , h = [{
        name: "Arabic - ‎‫العربية‬‎",
        value: "ar"
    }, {
        name: "Chinese (Simplified) - 中文（简体中文）",
        value: "zh_CN"
    }, {
        name: "Chinese (Traditional) - 中文（繁體）",
        value: "zh_TW"
    }, {
        name: "Croatian - hrvatski",
        value: "hr"
    }, {
        name: "Czech - čeština",
        value: "cs"
    }, {
        name: "Danish - dansk",
        value: "da"
    }, {
        name: "English",
        value: "en"
    }, {
        name: "French - français",
        value: "fr"
    }, {
        name: "German - Deutsch",
        value: "de"
    }, {
        name: "Hindi - हिन्दी",
        value: "hi"
    }, {
        name: "Hungarian - magyar",
        value: "hu"
    }, {
        name: "Indonesian - Indonesia",
        value: "id"
    }, {
        name: "Italian - italiano",
        value: "it"
    }, {
        name: "Japanese - 日本語",
        value: "ja"
    }, {
        name: "Korean - 한국어",
        value: "ko"
    }, {
        name: "Norwegian - norsk",
        value: "nb"
    }, {
        name: "Polish - polski",
        value: "pl"
    }, {
        name: "Portuguese (Brazil) - português (Brasil)",
        value: "pt_BR"
    }, {
        name: "Portuguese (Portugal) - português (Portugal)",
        value: "pt_PT"
    }, {
        name: "Russian - русский",
        value: "ru"
    }, {
        name: "Serbian - српски",
        value: "sr"
    }, {
        name: "Slovak - slovenčina",
        value: "sk"
    }, {
        name: "Spanish - español",
        value: "es"
    }, {
        name: "Turkish - Türkçe",
        value: "tr"
    }, {
        name: "Ukrainian - українська",
        value: "uk"
    }, {
        name: "Vietnamese - Tiếng Việt",
        value: "vi"
    }]
        , f = h.map(e=>e.value)
        , b = !(void 0 === o) && o.i18n.native_support
        , k = {
        init: async()=>{
            const e = async()=>{
                l || b || (l = await p(c))
            }
                , t = g(b ? o.i18n.getUILanguage() : navigator.language);
            if (t) {
                const e = [t]
                    , n = t.split(/_/);
                n[0] !== t && e.push(n[0]),
                    e.forEach(e=>{
                            c.unshift(e)
                        }
                    )
            }
            await e(),
            b && (await new Promise(e=>{
                    o.i18n.getAcceptLanguages(t=>{
                            t.forEach(e=>{
                                    c.push(g(e))
                                }
                            ),
                                e()
                        }
                    )
                }
            ),
                await e())
        }
        ,
        getMessage: (e,...t)=>{
            let n;
            return l && (n = r[e] || A[e]) ? ((e,t)=>{
                    let n = e.message;
                    return 1 == t.length && Array.isArray(t[0]) && (t = t[0]),
                    e.placeholders && Object.entries(e.placeholders).forEach(([e,s])=>{
                            try {
                                const a = Number(s.content.replace(/^\$/, "")) - 1;
                                let o;
                                a < t.length ? (o = t[a],
                                    n = n.replace("$" + e + "$", o)) : console.log('i18n: invalid argument count on processing "' + n + '" with args ' + JSON.stringify(t))
                            } catch (e) {
                                console.log('i18n: error processing "' + n + '" with args ' + JSON.stringify(t))
                            }
                        }
                    ),
                        n
                }
            )(n, t) : (b && (n = d(e, ...t)) || (n = function(e, ...t) {
                let n = e;
                1 == t.length && Array.isArray(t[0]) && (t = t[0]);
                const s = new RegExp("(^|_)0[a-zA-Z]+0(_|$)");
                for (let e = 0; e < t.length; e++) {
                    const a = n.match(s);
                    if (!a) {
                        console.log("i18n: getMessage(): wrong argument count!!!");
                        break
                    }
                    n = n.replace(s, (a[1] ? " " : "") + t[e] + (a[2] ? " " : ""))
                }
                return n.replace(/_/g, " ")
            }(e, ...t),
                console.warn("i18n: missing translation" + n)),
                n)
        }
        ,
        getOriginalMessage: d,
        normalizeLocale: g,
        getTranslation: (e,t)=>{
            let n, s;
            if (e && (s = e[t + "_i18n"] || {})) {
                e[t] && (s = {
                    ...s,
                    en: e[t]
                });
                const a = m(Object.keys(s));
                void 0 !== a && (n = s[a])
            }
            return n || e[t]
        }
        ,
        setLocale: async e=>{
            let t = e;
            if ("null" === e && (t = null),
            t && (t = g(t)),
            !t && b)
                l = t;
            else if (t !== l)
                return p([t, ...c, l].filter(e=>e)).then(t=>{
                        l = t,
                        l != e && console.log("i18n: retrieving locale " + t + " failed!")
                    }
                )
        }
        ,
        getLocale: ()=>l,
        getUiLocale: ()=>g(l || b ? o.i18n.getUILanguage() : c[0] || navigator.language || i),
        getBestLocale: m,
        supported: h
    };
    t.default = k
}
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.Deferred = void 0;
        const n = e=>{
                const t = (()=>{
                        let e, t;
                        const s = []
                            , a = []
                            , o = e=>{
                            a.push(e),
                                i()
                        }
                            , i = ()=>{
                            if (void 0 !== e) {
                                let n;
                                for (; a.length; )
                                    n = a.shift(),
                                    void 0 !== n.state && n.state !== e || (t = ("function" == typeof n.f ? n.f.call(r, t) : n.f) || t)
                            }
                        }
                            , r = {
                            promise: ()=>r,
                            done: e=>(o({
                                state: !0,
                                f: e
                            }),
                                r),
                            fail: e=>(o({
                                state: !1,
                                f: e
                            }),
                                r),
                            always: e=>(o({
                                f: e
                            }),
                                r),
                            progress: e=>(s.push(e),
                                r),
                            then: (e,s,a)=>n(n=>{
                                    [{
                                        fn: "done",
                                        forward: "resolve",
                                        f: e
                                    }, {
                                        fn: "fail",
                                        forward: "reject",
                                        f: s
                                    }, {
                                        fn: "progress",
                                        forward: "notify",
                                        f: a
                                    }].forEach(e=>{
                                            r[e.fn]((...s)=>{
                                                    const a = e.f ? e.f(t) : void 0;
                                                    if (a && "function" == typeof a.promise)
                                                        a.promise().done(n.resolve).fail(n.reject).progress(n.notify);
                                                    else {
                                                        const t = e.f ? [a] : s;
                                                        n[e.forward](...t)
                                                    }
                                                }
                                            )
                                        }
                                    )
                                }
                            ).promise(),
                            each: e=>{
                                const t = n();
                                return r.then(s=>{
                                        const a = Array.isArray(s) ? s : [s];
                                        n.when(a.map(t=>e(t))).then(t.resolve)
                                    }
                                ),
                                    t.promise()
                            }
                            ,
                            iterate: e=>{
                                const t = n();
                                return r.then(s=>{
                                        const a = (Array.isArray(s) ? s : [s]).map(t=>()=>e(t));
                                        n.onebyone(a, !0).done(e=>{
                                                t.resolve(e)
                                            }
                                        ).fail(t.reject)
                                    }
                                ),
                                    t.promise()
                            }
                        };
                        return {
                            get: ()=>r,
                            try_resolve: n=>(void 0 === e && (e = !0,
                                t = n),
                                i(),
                                r),
                            try_reject: function(n) {
                                return void 0 === e && (e = !1,
                                    t = n),
                                    i(),
                                    r
                            },
                            do_notify: function(e) {
                                (e=>{
                                        s.forEach(t=>t(e))
                                    }
                                )(e)
                            }
                        }
                    }
                )()
                    , s = {
                    promise: function() {
                        return t.get()
                    },
                    resolve: function(e) {
                        return t.try_resolve(e)
                    },
                    reject: function(e) {
                        return t.try_reject(e)
                    },
                    notify: function(e) {
                        return t.do_notify(e)
                    },
                    consume: function(e) {
                        return e.promise().done(s.resolve).fail(s.reject).progress(s.notify),
                            s.promise()
                    }
                };
                return e && e(s),
                    s
            }
        ;
        t.Deferred = n,
            n.Pledge = e=>{
                const t = n();
                return t.resolve(e),
                    t.promise()
            }
            ,
            n.Breach = e=>{
                const t = n();
                return t.reject(e),
                    t.promise()
            }
            ,
            n.onebyone = (e,t=!0)=>{
                const s = []
                    , a = n();
                let o = 0;
                const i = ()=>{
                        if (o < e.length) {
                            const n = (0,
                                e[o++])();
                            n && n.promise ? n.promise().done(e=>{
                                    s.push(e),
                                        i()
                                }
                            ).fail(()=>{
                                    if (s.push(null),
                                        t)
                                        return a.reject();
                                    i()
                                }
                            ) : (s.push(n),
                                i())
                        } else
                            a.resolve(s)
                    }
                ;
                return i(),
                    a.promise()
            }
            ,
            n.or = e=>{
                let t;
                const s = n()
                    , a = ()=>{
                        e.length ? (t = e.shift(),
                        t && n.Pledge().then(t).done(e=>{
                                s.resolve(e)
                            }
                        ).fail(a)) : s.reject()
                    }
                ;
                return a(),
                    s.promise()
            }
            ,
            n.sidebyside = e=>{
                e = Array.isArray(e) ? e : [e];
                const t = n();
                let s = e.length;
                return s ? e.forEach(e=>{
                        e && e.promise && e.promise().always(()=>{
                                0 == --s && t.resolve()
                            }
                        )
                    }
                ) : t.resolve(),
                    t.promise()
            }
            ,
            n.when = e=>{
                e = Array.isArray(e) ? e : [e];
                const t = n();
                let s = e.length;
                const a = [];
                return s ? e.forEach(e=>{
                        e && e.promise ? e.promise().fail(e=>{
                                t.reject(e),
                                    s = -1
                            }
                        ).done(e=>{
                                a.push(e),
                                0 == --s && t.resolve(a)
                            }
                        ) : console.warn("promise: incompatible object given to when()", e)
                    }
                ) : t.resolve(a),
                    t.promise()
            }
            ,
            n.sleep = e=>{
                const t = n();
                return window.setTimeout(t.resolve, e),
                    t.promise()
            }
    }
    , function(e, t) {
        "use strict";
        let n = 0;
        const s = []
            , a = ()=>{
            const e = ["debug"]
                , t = ["log"]
                , s = ["warn", "info"]
                , a = ["error"]
                , i = [...e, ...t, ...s, ...a];
            let r = a;
            n >= 80 && r.push(...e),
            n >= 60 && r.push(...t),
            n >= 60 && r.push(...t),
            n >= 30 && r.push(...s),
                i.forEach(e=>o[e] = r.includes(e) ? console[e].bind(console) : ()=>{}
                )
        }
            , o = {
            set: e=>{
                n = e,
                    s.forEach(e=>{
                            e(o, n)
                        }
                    ),
                    a()
            }
            ,
            get: ()=>n,
            verbose: (console.debug || (()=>{}
            )).bind(console),
            addChangeListener: e=>{
                s.push(e)
            }
        };
        a(),
            t.a = o
    }
    , function(e, t, n) {
        "use strict";
        var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.staticVars = t.safeFileName = t.encodeHtml = t.decodeHtml = t.createUUID = t.getDebouncer = t.adiff = t.copy = t.sleep = t.insert = t.each = t.splitSlice = t.toType = t.filterString = t.cPrompt = t.cConfirm = t.cAlert = t.getSource = t.getUrlArgs = t.isLocalImage = t.escapeForRegExp = t.escapeForRegExpURL = t.getStringBetweenTags = t.createUniqueId = void 0;
        const a = s(n(5))
            , o = window.rea;
        t.createUniqueId = (e,t)=>a.default.Base64.encode(e + "_" + t).replace(/[^0-9a-zA-Z_\-]/g, ""),
            t.getStringBetweenTags = (e,t,n)=>{
                const s = e.indexOf(t);
                if (-1 == s)
                    return "";
                if (!n)
                    return e.substr(s + t.length);
                const a = e.substr(s + t.length).indexOf(n);
                return -1 == a ? "" : e.substr(s + t.length, a)
            }
        ;
        const i = (e,t)=>{
                null == t && (t = []);
                const n = new RegExp("(\\" + ["/", ".", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].concat(t).join("|\\") + ")","g");
                return e.replace(n, "\\$1")
            }
        ;
        t.escapeForRegExpURL = i,
            t.escapeForRegExp = e=>i(e, ["*"]),
            t.isLocalImage = e=>{
                const t = "background.js";
                let n = o.extension.getURL(t);
                return n = n.replace(t, "") + "images/",
                e.length >= n.length && n == e.substr(0, n.length)
            }
            ,
            t.getUrlArgs = e=>{
                const t = {};
                let n = window.location.search.replace(/^\?/, "");
                const s = window.location.hash.replace(/^#/, "");
                n ? e && s && (n = n + "&" + s) : n = s;
                const a = n.split("&");
                let o;
                for (let e = 0; e < a.length; e++) {
                    if (o = a[e].split("="),
                    2 != o.length) {
                        const e = o[0]
                            , t = o.slice(1).join("=");
                        o = [e, t]
                    }
                    t[o[0]] = decodeURIComponent(o[1])
                }
                return t
            }
            ,
            t.cAlert = e=>{
                window.setTimeout(()=>{
                        alert(e)
                    }
                    , 1)
            }
            ,
            t.cConfirm = (e,t)=>{
                window.setTimeout(()=>{
                        const n = confirm(e);
                        t && t(n)
                    }
                    , 1)
            }
            ,
            t.cPrompt = (e,t,n)=>{
                window.setTimeout(()=>{
                        const s = prompt(e, t);
                        n && n(s)
                    }
                    , 1)
            }
        ;
        const r = e=>(({}.toString.apply(e).match(/\s([a-z|A-Z]+)/) || [])[1]);
        t.toType = r;
        const A = (e,t)=>{
                const n = r(e);
                if ("Array" === n || "NodeList" === n) {
                    for (let n = 0; n < e.length; n++)
                        if (!1 === t(e[n], n))
                            return
                } else if ("XPathResult" === n) {
                    let n = e.iterateNext()
                        , s = 0;
                    for (; n; ) {
                        if (!1 === t(n, s++))
                            return;
                        n = e.iterateNext()
                    }
                } else
                    for (const n in e)
                        if (e.hasOwnProperty(n) && !1 === t(e[n], n))
                            return
            }
        ;
        t.each = A,
            t.insert = (e,t,n,s)=>e.slice(0, t) + s + e.slice(t + Math.abs(n));
        const l = (e,t,n,s)=>{
                if (Array.isArray(n)) {
                    const e = {};
                    n.forEach(t=>{
                            e[t] = !0
                        }
                    ),
                        n = e
                }
                return A(n || e, (a,o)=>{
                        if (!n || n.hasOwnProperty(o)) {
                            let a;
                            const i = e[o]
                                , A = r(i);
                            if ("Undefined" == A)
                                return;
                            if (n && s && (a = r(n[o])) && a !== A && ("Array" === a || "Object" === a))
                                return;
                            "Object" == A ? (t[o] = {},
                                l(i, t[o], n ? n[o] : null)) : "Array" == A ? (t[o] = [],
                                l(i, t[o])) : t[o] = i
                        }
                    }
                ),
                    t
            }
        ;
        t.copy = l,
            t.decodeHtml = e=>e.replace(/(?:&#x([a-fA-F0-9]+);|&#([0-9]+);)/g, (e,t,n)=>t ? String.fromCharCode(parseInt(t, 16)) : String.fromCharCode(parseInt(n, 10))),
            t.encodeHtml = e=>e.replace(/[\u00A0-\u2666<>]/g, e=>"&#" + e.charCodeAt(0) + ";");
        const c = e=>document.body ? document.body.innerText : e.childNodes.length > 0 ? c(e.childNodes[e.childNodes.length - 1]) : e.innerText;
        t.getSource = c,
            t.getDebouncer = e=>(()=>{
                    let t = {};
                    const n = e || 1e3
                        , s = {
                        clear: ()=>{
                            A(t, e=>window.clearTimeout(e)),
                                t = {}
                        }
                        ,
                        is: (e,n)=>{
                            const a = void 0 !== t[e];
                            return n && s.add(e),
                                a
                        }
                        ,
                        add: (e,a)=>{
                            s.is(e) && window.clearTimeout(t[e]),
                                t[e] = window.setTimeout(()=>{
                                        delete t[e]
                                    }
                                    , a || n)
                        }
                    };
                    return s
                }
            )(),
            t.sleep = e=>{
                const t = Date.now();
                let n;
                for (; Date.now() - t < e; )
                    for (let e = 0; e < 100; e++)
                        n += 1
            }
            ,
            t.filterString = (e,t)=>e && t ? (e.match(t) || []).join("") : "",
            t.adiff = (e,t,n)=>{
                const s = [];
                return "both" == (n = n || "both") ? e.concat(t).forEach(n=>{
                        e.includes(n) && t.includes(n) || s.push(n)
                    }
                ) : "notinfirst" == n && t.forEach(t=>{
                        e.includes(t) || s.push(t)
                    }
                ),
                    s
            }
            ,
            t.safeFileName = (e,t,n)=>{
                void 0 === n && (n = "-");
                const s = t ? /[:<>|~?*\x00-\x1F\uFDD0-\uFDEF"]/g : /[:<>|~?*\x00-\x1F\uFDD0-\uFDEF"\/\\]|^[.]|[.]$/g;
                return !t && /^((CON|PRN|AUX|NUL|CLOCK\$|COM[1-9]|LPT[1-9])(\..*)?|device(\..*)?|desktop.ini|thumbs.db)$/i.test(e) ? (n || "_") + e.replace(s, n) : e.replace(s, n)
            }
            ,
            t.createUUID = ()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e=>{
                    const t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                }
            ),
            t.splitSlice = (e,t)=>{
                const n = [];
                for (let s = 0, a = e.length; s < a; s += t)
                    n.push(e.slice(s, t + s));
                return n
            }
        ;
        t.staticVars = {
            visible: void 0,
            invisible: "display: none;",
            visible_move: void 0,
            invisible_move: "position:absolute; left: -20000px; top: -200000px; width: 1px; height: 1px;"
        }
    }
    , function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n(2)
            , a = n(8)
            , o = n(3);
        const i = "de.net|gb.net|uk.net|dk.org|eu.org|asn.au|conf.au|csiro.au|edu.au|gov.au|id.au|info.au|net.au|org.au|otc.au|oz.au|telememo.au|ac.cn|ah.cn|bj.cn|cq.cn|edu.cn|gd.cn|gov.cn|gs.cn|gx.cn|gz.cn|hb.cn|he.cn|hi.cn|hk.cn|hl.cn|hn.cn|jl.cn|js.cn|ln.cn|mo.cn|net.cn|nm.cn|nx.cn|org.cn|qh.cn|sc.cn|sh.cn|sn.cn|sx.cn|tj.cn|tw.cn|xj.cn|xz.cn|yn.cn|zj.cn|ac.jp|ad.jp|aichi.jp|akita.jp|aomori.jp|chiba.jp|co.jp|ed.jp|ehime.jp|fukui.jp|fukuoka.jp|fukushima.jp|gifu.jp|go.jp|gov.jp|gr.jp|gunma.jp|hiroshima.jp|hokkaido.jp|hyogo.jp|ibaraki.jp|ishikawa.jp|iwate.jp|kagawa.jp|kagoshima.jp|kanagawa.jp|kanazawa.jp|kawasaki.jp|kitakyushu.jp|kobe.jp|kochi.jp|kumamoto.jp|kyoto.jp|lg.jp|matsuyama.jp|mie.jp|miyagi.jp|miyazaki.jp|nagano.jp|nagasaki.jp|nagoya.jp|nara.jp|ne.jp|net.jp|niigata.jp|oita.jp|okayama.jp|okinawa.jp|or.jp|org.jp|osaka.jp|saga.jp|saitama.jp|sapporo.jp|sendai.jp|shiga.jp|shimane.jp|shizuoka.jp|takamatsu.jp|tochigi.jp|tokushima.jp|tokyo.jp|tottori.jp|toyama.jp|utsunomiya.jp|wakayama.jp|yamagata.jp|yamaguchi.jp|yamanashi.jp|yokohama.jp|ac.uk|co.uk|edu.uk|gov.uk|ltd.uk|me.uk|mod.uk|net.uk|nhs.uk|nic.uk|org.uk|plc.uk|police.uk|sch.uk|co.tv|co.th|co.nz|co.za|com.ac|com.af|com.ag|com.ai|com.al|com.ar|com.au|com.aw|com.az|com.ba|com.bb|com.bh|com.bi|com.bm|com.bo|com.br|com.bs|com.bt|com.by|com.bz|com.ci|com.cm|com.cn|com.co|com.cu|com.cw|com.cy|com.dm|com.do|com.dz|com.ec|com.ee|com.eg|com.es|com.et|com.fr|com.ge|com.gh|com.gi|com.gl|com.gn|com.gp|com.gr|com.gt|com.gu|com.gy|com.hk|com.hn|com.hr|com.ht|com.im|com.io|com.iq|com.is|com.jo|com.kg|com.ki|com.km|com.kp|com.ky|com.kz|com.la|com.lb|com.lc|com.lk|com.lr|com.lv|com.ly|com.mg|com.mk|com.ml|com.mo|com.ms|com.mt|com.mu|com.mv|com.mw|com.mx|com.my|com.na|com.nf|com.ng|com.ni|com.nr|com.om|com.pa|com.pe|com.pf|com.ph|com.pk|com.pl|com.pr|com.ps|com.pt|com.py|com.qa|com.re|com.ro|com.rw|com.sa|com.sb|com.sc|com.sd|com.sg|com.sh|com.sl|com.sn|com.so|com.st|com.sv|com.sy|com.tj|com.tm|com.tn|com.to|com.tr|com.tt|com.tw|com.ua|com.ug|com.uy|com.uz|com.vc|com.ve|com.vi|com.vn|com.vu|com.ws|com.zm|com.de|com.se|com.ru"
            , r = (".(" + ["aaa|aarp|abb|abbott|abogado|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|af|afl|ag|agency|ai|aig|airforce|airtel|al|alibaba|alipay|allfinanz|alsace|am|amica|amsterdam|an|analytics|android|ao|apartments|app|apple|aq|aquarelle|ar|aramco|archi|army|arpa|arte|as|asia|associates|at|attorney|au|auction|audi|audio|author|auto|autos|aw|ax|axa|az|azure|ba|baidu|band|bank|bar|barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bb|bbc|bbva|bcn|bd|be|beats|beer|bentley|berlin|best|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|bl|black|blackfriday|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bom|bond|boo|book|boots|bosch|bostik|bot|boutique|bq|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|camera|camp|cancerresearch|canon|capetown|capital|car|caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chat|cheap|chloe|christmas|chrome|church|ci|cipriani|circle|cisco|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cool|coop|corsica|country|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|date|dating|datsun|day|dclk|de|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|dnp|do|docs|dog|doha|domains|doosan|download|drive|dubai|durban|dvag|dz|earth|eat|ec|edeka|edu|education|ee|eg|eh|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|er|erni|es|esq|estate|et|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|fage|fail|fairwinds|faith|family|fan|fans|farm|fashion|fast|feedback|ferrero|fi|film|final|finance|financial|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|florist|flowers|flsmidth|fly|fm|fo|foo|football|ford|forex|forsale|forum|foundation|fox|fr|fresenius|frl|frogans|frontier|fund|furniture|futbol|fyi|ga|gal|gallery|gallup|game|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glass|gle|global|globo|gm|gmail|gmo|gmx|gn|gold|goldpoint|golf|goo|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|group|gs|gt|gu|gucci|guge|guide|guitars|guru|gw|gy|hamburg|hangout|haus|hdfcbank|health|healthcare|help|helsinki|here|hermes|hiphop|hitachi|hiv|hk|hm|hn|hockey|holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hr|hsbc|ht|hu|hyundai|ibm|icbc|ice|icu|id|ie|ifm|iinet|il|im|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|international|investments|io|ipiranga|iq|ir|irish|is|iselect|ist|istanbul|it|itau|iwc|jaguar|java|jcb|je|jetzt|jewelry|jlc|jll|jm|jmp|jo|jobs|joburg|jot|joy|jp|jprs|juegos|kaufen|kddi|ke|kfh|kg|kh|ki|kia|kim|kinder|kitchen|kiwi|km|kn|koeln|komatsu|kp|kpn|kr|krd|kred|kw|ky|kyoto|kz|la|lacaixa|lamborghini|lamer|lancaster|land|landrover|lanxess|lasalle|lat|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|legal|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|limited|limo|lincoln|linde|link|live|living|lixil|lk|loan|loans|lol|london|lotte|lotto|love|lr|ls|lt|ltd|ltda|lu|lupin|luxe|luxury|lv|ly|ma|madrid|maif|maison|makeup|man|management|mango|market|marketing|markets|marriott|mba|mc|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|mf|mg|mh|miami|microsoft|mil|mini|mk|ml|mm|mma|mn|mo|mobi|mobily|moda|moe|moi|mom|monash|money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mp|mq|mr|ms|mt|mtn|mtpc|mtr|mu|museum|mutuelle|mv|mw|mx|my|mz|na|nadex|nagoya|name|natura|navy|nc|ne|nec|net|netbank|network|neustar|new|news|nexus|nf|ng|ngo|nhk|ni|nico|nikon|ninja|nissan|nl|no|nokia|norton|nowruz|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|office|okinawa|om|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|origins|osaka|otsuka|ovh|pa|page|pamperedchef|panerai|paris|pars|partners|parts|party|pe|pet|pf|pg|ph|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pohl|poker|porn|post|pr|praxi|press|pro|prod|productions|prof|promo|properties|property|protection|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|racing|re|read|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|ricoh|rio|rip|ro|rocher|rocks|rodeo|room|rs|rsvp|ru|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|saxo|sb|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scor|scot|sd|se|seat|security|seek|select|sener|services|seven|sew|sex|sexy|sfr|sg|sh|sharp|shell|shia|shiksha|shoes|show|shriram|si|singles|site|sj|sk|ski|skin|sky|skype|sl|sm|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|sony|soy|space|spiegel|spreadbetting|sr|srl|ss|st|stada|star|starhub|statefarm|statoil|stc|stcgroup|stockholm|storage|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|taobao|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|team|tech|technology|tel|telefonica|temasek|tennis|tf|tg|th|thd|theater|theatre|tickets|tienda|tiffany|tips|tires|tirol|tj|tk|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|tours|town|toyota|toys|tp|tr|trade|trading|training|travel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tushu|tv|tvs|tw|tz|ua|ubs|ug|uk|um|unicom|university|uno|uol|us|uy|uz|va|vacations|vana|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|villas|vin|vip|virgin|vision|vista|vistaprint|viva|vlaanderen|vn|vodka|volkswagen|vote|voting|voto|voyage|vu|wales|walter|wang|wanggou|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|wme|wolterskluwer|work|works|world|ws|wtc|wtf|xbox|xerox|xin|测试|कॉम|परीक्षा|佛山|慈善|集团|在线|한국|点看|คอม|ভারত|八卦|‏موقع‎|বাংলা|公益|公司|移动|我爱你|москва|испытание|қаз|онлайн|сайт|联通|срб|бел|‏קום‎|时尚|테스트|淡马锡|орг|नेट|삼성|சிங்கப்பூர்|商标|商店|商城|дети|мкд|‏טעסט‎|ею|ポイント|新闻|工行|‏كوم‎|中文网|中信|中国|中國|娱乐|谷歌|భారత్|ලංකා|购物|測試|ભારત|भारत|‏آزمایشی‎|பரிட்சை|网店|संगठन|餐厅|网络|ком|укр|香港|诺基亚|δοκιμή|飞利浦|‏إختبار‎|台湾|台灣|手表|手机|мон|‏الجزائر‎|‏عمان‎|‏ارامكو‎|‏ایران‎|‏امارات‎|‏بازار‎|‏پاکستان‎|‏الاردن‎|‏موبايلي‎|‏بھارت‎|‏المغرب‎|‏السعودية‎|‏سودان‎|‏همراه‎|‏عراق‎|‏مليسيا‎|澳門|닷컴|政府|‏شبكة‎|‏بيتك‎|გე|机构|组织机构|健康|ไทย|‏سورية‎|рус|рф|珠宝|‏تونس‎|大拿|みんな|グーグル|ελ|世界|ਭਾਰਤ|网址|닷넷|コム|游戏|vermögensberater|vermögensberatung|企业|信息|‏مصر‎|‏قطر‎|广东|இலங்கை|இந்தியா|հայ|新加坡|‏فلسطين‎|テスト|政务|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|youtube|yt|za|zara|zero|zip|zm|zone|zuerich|zw", i].join("|") + ")").replace(/\./gi, "\\.")
            , A = a.a.cache;
        A.create("uris").setOptions({
            timeout: 180,
            check_interval: 120,
            retimeout_on_get: !0
        }).init();
        const l = (()=>{
                const e = e=>e.split("").map(e=>{
                        const t = e.toLowerCase()
                            , n = e.toUpperCase();
                        return t != n ? "[" + t + n + "]" : e
                    }
                ).join("")
                    , t = ["protocol", "hostname", "port", "origin"]
                    , n = ["pathname"]
                    , a = ["search", "hash"]
                    , l = t.concat(n).concat(a);
                let c;
                const d = (e,s)=>{
                    const o = {};
                    if (null == e)
                        l.forEach(e=>{
                                o[e] = ""
                            }
                        );
                    else if (["data:", "view-source:"].some(t=>e.startsWith(t))) {
                        o.origin = "null";
                        const t = e.indexOf(":");
                        o.protocol = e.substr(0, t + 1),
                            o.pathname = e.substr(t + 1)
                    } else {
                        const i = document.createElement("a");
                        i.href = e;
                        const r = document.body || document.documentElement || document;
                        if (r.appendChild(i),
                            l.forEach(e=>{
                                    o[e] = i[e]
                                }
                            ),
                            r.removeChild(i),
                        !s && o.protocol) {
                            if (0 !== e.toLowerCase().indexOf(o.protocol))
                                if (e.startsWith("//"))
                                    o.origin = "",
                                        o.protocol = "";
                                else {
                                    if (!["/", "?", "#"].includes(e[0]))
                                        return d("/" + e);
                                    c || (c = d("", !0)),
                                        a.concat(n).forEach(e=>{
                                                c[e] === o[e] && (o[e] = "")
                                            }
                                        ),
                                        t.forEach(e=>{
                                                o[e] = ""
                                            }
                                        )
                                }
                            ["tampermonkey:"].includes(o.protocol) && (o.pathname = ((o.hostname ? "/" + o.hostname : "") + (o.pathname || "")).replace(/^\/+/, "/"),
                                o.hostname = "")
                        }
                    }
                    return "0" === o.port && (o.port = ""),
                        Object.defineProperties(o, {
                            domain: {
                                get: function() {
                                    const e = o.hostname.split(".")
                                        , t = e.pop();
                                    let n = `${e.pop()}.${t}`;
                                    return m.isSecondLevelDomain(n) && (n = `${e.pop()}.${n}`),
                                        n
                                }
                            }
                        }),
                        o
                }
                    , u = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
                    , p = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
                let g;
                const m = {
                    isIp: function(e) {
                        return e.match(u) || e.match(p)
                    },
                    isIpOrHostname: function(e) {
                        return m.isIp(e) || !e.includes(".")
                    },
                    isSecondLevelDomain: function(e) {
                        return g = g || new RegExp("^(" + i.replace(/\./g, "\\.") + ")$"),
                            e.match(g)
                    },
                    sanitize: function(e, t, n) {
                        let s = !1;
                        const a = m.parse(e);
                        if (a)
                            return "tampermonkey:" == a.protocol ? a.pathname.includes("..") ? s = !0 : e = rea.extension.getURL(e.replace(/^tampermonkey:\/\//, "")) : a.protocol || t && (e = m.rel2abs(e, t, n || ["http:", "https:"])) || (s = !0),
                                s ? null : e
                    },
                    parse: function(e) {
                        if (null == e)
                            return;
                        let t = A.items.uris.get(e);
                        return t || (t = d(e),
                            A.items.uris.set(e, t),
                            t)
                    },
                    rel2abs: function(e, t, n) {
                        let s, a, o;
                        if (e && t && (s = m.parse(e)) && (a = m.parse(t)) && s && a && a.protocol && (!n || n.includes(a.protocol) || !e.includes("..")))
                            return e.startsWith("//") ? a.protocol + "//" + s.hostname + (s.port ? ":" + s.port : "") + s.pathname + s.search : ("/" === e[0] ? o = s.pathname : (t = m.woParams(a),
                                a = m.parse(t + ("/" === t[t.length - 1] ? "" : "/") + e),
                                o = a.pathname),
                            a.protocol + "//" + a.hostname + (a.port ? ":" + a.port : "") + o + s.search)
                    },
                    toUrl: function(e, t) {
                        return t = t || {},
                        (["about:"].includes(e.protocol) ? e.protocol : e.protocol + "//") + e.hostname + (e.port && e.port > 0 ? ":" + e.port : "") + (t.nopath ? "" : e.pathname + (t.nosearch ? "" : e.search))
                    },
                    woPath: function(e) {
                        const t = "string" == typeof e ? m.parse(e) : e;
                        return m.toUrl(t, {
                            nopath: !0
                        })
                    },
                    woParams: function(e) {
                        const t = "string" == typeof e ? m.parse(e) : e;
                        return m.toUrl(t, {
                            nosearch: !0
                        })
                    },
                    woHash: function(e) {
                        const t = "string" == typeof e ? m.parse(e) : e;
                        return m.toUrl(t)
                    },
                    hash2params: function(e) {
                        return Object.keys(e).map(t=>void 0 === e[t] ? null : encodeURIComponent(t) + "=" + encodeURIComponent(e[t])).filter(e=>e).join("&")
                    },
                    params2hash: function(e) {
                        return "string" != typeof e && (e = e.search ? e.search.substring(1) : e.hash ? e.hash.substring(1) : ""),
                            e.split("&").reduce((e,t)=>{
                                    const n = t.split("=");
                                    return e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]),
                                        e
                                }
                                , {})
                    },
                    getRegExpFromInclude: e=>{
                        let t;
                        return "*" == e ? t = "^(https?|file)://.*" : (t = e.includes(".*/") ? e.replace(".*/", ".tld/") : e,
                            t = "^" + Object(o.escapeForRegExpURL)(t),
                            t = t.replace(/\*/gi, ".*"),
                            t = t.replace(Object(o.escapeForRegExpURL)(".tld/"), r + "/"),
                            t = t.replace(/(\^|:\/\/)\.\*/, "$1([^\\?#])*"),
                            t = t.replace(/<1>/g, "([^\\/#\\?]*\\.)?"),
                            t = t.replace(/<2>/g, "[^#\\?]*"),
                            t = t.replace(/<3>/g, "([^\\?#]*\\.)*")),
                        "(" + t + ")"
                    }
                    ,
                    getRegExpFromMatch: (t,n)=>{
                        let a, i, A, l, c, d;
                        const u = "://"
                            , p = "/";
                        if (a = t.replace(/\$$/, "").split(u),
                            a.length < 2 ? (i = "",
                                A = t) : (i = a[0].replace(/^\^/, ""),
                                A = a.slice(1).join(u)),
                            l = A.split(p),
                            d = l.length < 2 ? "/" : p + l.slice(1).join(p),
                            c = l[0],
                            "http*" === i ? i = "https<1>" : i.match(/\*|http|https|file|ftp/) || (s.a.warn('uri: override scheme "' + i + '" with "*"'),
                                i = "*"),
                        "file" === i)
                            c = "";
                        else {
                            const e = c
                                , t = c.match(/\*$|(\*\.)?[^\/\*]+/);
                            c = (t ? t[0] : "").replace(/:[0-9]*$/, ""),
                            c !== e && s.a.warn('uri: override host "' + e + '" with "' + c + '"')
                        }
                        return d && d.substr(0, 1) === p || (s.a.warn('uri: prefix path "' + d + '" with "/"'),
                            d = p + d),
                            i = Object(o.escapeForRegExpURL)(i).replace(/\*/gi, "[^:\\/#\\?]*"),
                            c = Object(o.escapeForRegExpURL)(c).replace(/\*\\\./gi, "(*\\.)?").replace(/\*/gi, "[^#\\?\\/]*"),
                            d = Object(o.escapeForRegExpURL)(d).replace(/\*/gi, ".*"),
                            i = i.replace(/<1>/g, "?"),
                            c = c.replace(new RegExp(Object(o.escapeForRegExpURL)(".tld") + "$"), r),
                        n || (i = e(i),
                            c = e(c)),
                            c += "(:[0-9]{1,5})?",
                        "(^" + i + Object(o.escapeForRegExpURL)(u) + c + d + "$)"
                    }
                };
                return m
            }
        )();
        t.default = l
    }
    , function(e, t, n) {
        "use strict";
        n.r(t);
        const s = {
            encode: function(e) {
                return window.unescape(window.encodeURIComponent(e))
            },
            decode: function(e) {
                return window.decodeURIComponent(window.escape(e))
            }
        }
            , a = (e,t)=>{
            try {
                let n, a;
                if ("object" == typeof t ? (n = t.encoding,
                    a = t.array) : n = t,
                window.TextDecoder && !a && n)
                    return new window.TextDecoder(n).decode(e);
                {
                    let t = "";
                    const a = new window.Uint8Array(e);
                    for (let e = 0; e < a.length; e += 16384)
                        t += window.String.fromCharCode.apply(null, a.subarray(e, e + 16384));
                    return n && "utf-8" == n.toLowerCase() && (t = s.decode(t)),
                        t
                }
            } catch (e) {
                window.console.warn(e)
            }
            return null
        }
            , o = {
            UTF8: s,
            Base64: {
                encode: function(e) {
                    let t = "";
                    for (let n = 0; n < e.length; n++)
                        t += window.String.fromCharCode(255 & e.charCodeAt(n));
                    return window.btoa(t)
                },
                decode: function(e) {
                    return window.atob(e)
                }
            },
            encode: function(e) {
                return window.escape(e)
            },
            decode: function(e) {
                return window.unescape(e)
            },
            encodeR: function(e) {
                return e
            },
            decodeR: function(e) {
                return e
            },
            encodeS: function(e) {
                return window.btoa(s.encode(e))
            },
            decodeS: function(e) {
                return s.decode(window.atob(e))
            },
            MD5: (e,t)=>{
                const n = (e,t)=>e << t | e >>> 32 - t
                    , a = (e,t)=>{
                        let n, s, a, o, i;
                        return a = 2147483648 & e,
                            o = 2147483648 & t,
                            n = 1073741824 & e,
                            s = 1073741824 & t,
                            i = (1073741823 & e) + (1073741823 & t),
                            n & s ? 2147483648 ^ i ^ a ^ o : n | s ? 1073741824 & i ? 3221225472 ^ i ^ a ^ o : 1073741824 ^ i ^ a ^ o : i ^ a ^ o
                    }
                    , o = (e,t,s,o,i,r,A)=>(e = a(e, a(a(((e,t,n)=>e & t | ~e & n)(t, s, o), i), A)),
                        a(n(e, r), t))
                    , i = (e,t,s,o,i,r,A)=>(e = a(e, a(a(((e,t,n)=>e & n | t & ~n)(t, s, o), i), A)),
                        a(n(e, r), t))
                    , r = (e,t,s,o,i,r,A)=>(e = a(e, a(a(((e,t,n)=>e ^ t ^ n)(t, s, o), i), A)),
                        a(n(e, r), t))
                    , A = (e,t,s,o,i,r,A)=>(e = a(e, a(a(((e,t,n)=>t ^ (e | ~n))(t, s, o), i), A)),
                        a(n(e, r), t))
                    , l = e=>{
                        let t, n, s = "", a = "";
                        for (n = 0; n <= 3; n++)
                            t = e >>> 8 * n & 255,
                                a = "0" + t.toString(16),
                                s += a.substr(a.length - 2, 2);
                        return s
                    }
                ;
                let c, d, u, p, g, m, h, f, b, k = Array();
                for (t && "utf-8" == t.toLowerCase() && (e = s.encode(e)),
                         k = (e=>{
                                 let t;
                                 const n = e.length
                                     , s = n + 8
                                     , a = 16 * ((s - s % 64) / 64 + 1)
                                     , o = Array(a - 1);
                                 let i = 0
                                     , r = 0;
                                 for (; r < n; )
                                     t = (r - r % 4) / 4,
                                         i = r % 4 * 8,
                                         o[t] = o[t] | e.charCodeAt(r) << i,
                                         r++;
                                 return t = (r - r % 4) / 4,
                                     i = r % 4 * 8,
                                     o[t] = o[t] | 128 << i,
                                     o[a - 2] = n << 3,
                                     o[a - 1] = n >>> 29,
                                     o
                             }
                         )(e),
                         m = 1732584193,
                         h = 4023233417,
                         f = 2562383102,
                         b = 271733878,
                         c = 0; c < k.length; c += 16)
                    d = m,
                        u = h,
                        p = f,
                        g = b,
                        m = o(m, h, f, b, k[c + 0], 7, 3614090360),
                        b = o(b, m, h, f, k[c + 1], 12, 3905402710),
                        f = o(f, b, m, h, k[c + 2], 17, 606105819),
                        h = o(h, f, b, m, k[c + 3], 22, 3250441966),
                        m = o(m, h, f, b, k[c + 4], 7, 4118548399),
                        b = o(b, m, h, f, k[c + 5], 12, 1200080426),
                        f = o(f, b, m, h, k[c + 6], 17, 2821735955),
                        h = o(h, f, b, m, k[c + 7], 22, 4249261313),
                        m = o(m, h, f, b, k[c + 8], 7, 1770035416),
                        b = o(b, m, h, f, k[c + 9], 12, 2336552879),
                        f = o(f, b, m, h, k[c + 10], 17, 4294925233),
                        h = o(h, f, b, m, k[c + 11], 22, 2304563134),
                        m = o(m, h, f, b, k[c + 12], 7, 1804603682),
                        b = o(b, m, h, f, k[c + 13], 12, 4254626195),
                        f = o(f, b, m, h, k[c + 14], 17, 2792965006),
                        h = o(h, f, b, m, k[c + 15], 22, 1236535329),
                        m = i(m, h, f, b, k[c + 1], 5, 4129170786),
                        b = i(b, m, h, f, k[c + 6], 9, 3225465664),
                        f = i(f, b, m, h, k[c + 11], 14, 643717713),
                        h = i(h, f, b, m, k[c + 0], 20, 3921069994),
                        m = i(m, h, f, b, k[c + 5], 5, 3593408605),
                        b = i(b, m, h, f, k[c + 10], 9, 38016083),
                        f = i(f, b, m, h, k[c + 15], 14, 3634488961),
                        h = i(h, f, b, m, k[c + 4], 20, 3889429448),
                        m = i(m, h, f, b, k[c + 9], 5, 568446438),
                        b = i(b, m, h, f, k[c + 14], 9, 3275163606),
                        f = i(f, b, m, h, k[c + 3], 14, 4107603335),
                        h = i(h, f, b, m, k[c + 8], 20, 1163531501),
                        m = i(m, h, f, b, k[c + 13], 5, 2850285829),
                        b = i(b, m, h, f, k[c + 2], 9, 4243563512),
                        f = i(f, b, m, h, k[c + 7], 14, 1735328473),
                        h = i(h, f, b, m, k[c + 12], 20, 2368359562),
                        m = r(m, h, f, b, k[c + 5], 4, 4294588738),
                        b = r(b, m, h, f, k[c + 8], 11, 2272392833),
                        f = r(f, b, m, h, k[c + 11], 16, 1839030562),
                        h = r(h, f, b, m, k[c + 14], 23, 4259657740),
                        m = r(m, h, f, b, k[c + 1], 4, 2763975236),
                        b = r(b, m, h, f, k[c + 4], 11, 1272893353),
                        f = r(f, b, m, h, k[c + 7], 16, 4139469664),
                        h = r(h, f, b, m, k[c + 10], 23, 3200236656),
                        m = r(m, h, f, b, k[c + 13], 4, 681279174),
                        b = r(b, m, h, f, k[c + 0], 11, 3936430074),
                        f = r(f, b, m, h, k[c + 3], 16, 3572445317),
                        h = r(h, f, b, m, k[c + 6], 23, 76029189),
                        m = r(m, h, f, b, k[c + 9], 4, 3654602809),
                        b = r(b, m, h, f, k[c + 12], 11, 3873151461),
                        f = r(f, b, m, h, k[c + 15], 16, 530742520),
                        h = r(h, f, b, m, k[c + 2], 23, 3299628645),
                        m = A(m, h, f, b, k[c + 0], 6, 4096336452),
                        b = A(b, m, h, f, k[c + 7], 10, 1126891415),
                        f = A(f, b, m, h, k[c + 14], 15, 2878612391),
                        h = A(h, f, b, m, k[c + 5], 21, 4237533241),
                        m = A(m, h, f, b, k[c + 12], 6, 1700485571),
                        b = A(b, m, h, f, k[c + 3], 10, 2399980690),
                        f = A(f, b, m, h, k[c + 10], 15, 4293915773),
                        h = A(h, f, b, m, k[c + 1], 21, 2240044497),
                        m = A(m, h, f, b, k[c + 8], 6, 1873313359),
                        b = A(b, m, h, f, k[c + 15], 10, 4264355552),
                        f = A(f, b, m, h, k[c + 6], 15, 2734768916),
                        h = A(h, f, b, m, k[c + 13], 21, 1309151649),
                        m = A(m, h, f, b, k[c + 4], 6, 4149444226),
                        b = A(b, m, h, f, k[c + 11], 10, 3174756917),
                        f = A(f, b, m, h, k[c + 2], 15, 718787259),
                        h = A(h, f, b, m, k[c + 9], 21, 3951481745),
                        m = a(m, d),
                        h = a(h, u),
                        f = a(f, p),
                        b = a(b, g);
                return (l(m) + l(h) + l(f) + l(b)).toLowerCase()
            }
            ,
            arrbuf2str: a,
            str2arrbuf: (e,t)=>{
                try {
                    let n, a;
                    if ("object" == typeof t ? (n = t.encoding,
                        a = t.array) : n = t,
                    window.TextEncoder && !a && n)
                        return new window.TextEncoder(n).encode(e);
                    {
                        n && "utf-8" == n.toLowerCase() && (e = s.encode(e));
                        const t = new window.Uint8Array(e.length);
                        for (let n = 0; n < e.length; n++)
                            t[n] = 255 & e.charCodeAt(n);
                        return t.buffer
                    }
                } catch (e) {
                    window.console.warn(e)
                }
                return null
            }
            ,
            dataUri2Blob: e=>{
                let t;
                t = e.split(",")[0].includes("base64") ? window.atob(e.split(",")[1]) : window.unescape(e.split(",")[1]);
                const n = e.split(",")[0].split(":")[1].split(";")[0]
                    , s = new Uint8Array(t.length);
                for (let e = 0; e < t.length; e++)
                    s[e] = t.charCodeAt(e);
                return new window.Blob([s],{
                    type: n
                })
            }
            ,
            blob2dataUri: (e,t)=>{
                var n = new window.FileReader;
                n.onload = e=>{
                    t(e.target.result)
                }
                    ,
                    n.readAsDataURL(e)
            }
            ,
            blob2str: (e,t)=>{
                new window.Response(e).arrayBuffer().then(e=>t(a(e))).catch(e=>t(null, e))
            }
        };
        t.default = o
    }
    , function(e, t, n) {
        "use strict";
        var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.HEADER_STOP = t.HEADER_START = t.Parser = void 0;
        const a = n(3)
            , o = s(n(0));
        let i;
        const r = {}
            , A = (...e)=>{
            const t = {
                keys: e,
                default: ()=>[],
                convert: (e,t)=>(e.push(t),
                    e)
            };
            return (null == e ? void 0 : e.length) && e.forEach(e=>r[e] = t),
                t
        }
            , l = (...e)=>{
            const t = {
                keys: e,
                default: ()=>"",
                convert: (e,t)=>"" === e ? t : e
            };
            return (null == e ? void 0 : e.length) && e.forEach(e=>r[e] = t),
                t
        }
            , c = (...e)=>{
            const t = {
                keys: e,
                default: ()=>({}),
                convert: (e,t,n)=>(e[n = n ? o.default.normalizeLocale(n) : "default"] = t,
                    e)
            };
            return (null == e ? void 0 : e.length) && e.forEach(e=>r[e] = t),
                t
        }
            , d = {
            name: c(),
            version: l(),
            grant: A(),
            icon: l("icon", "iconURL", "defaulticon"),
            icon64: l("icon64", "iconURL64"),
            supportURL: l(),
            fileURL: l(),
            downloadURL: l(),
            updateURL: l(),
            namespace: l(),
            author: l(),
            copyright: l(),
            homepage: l("homepage", "homepageUrl", "website", "source"),
            description: c(),
            includes: A("include"),
            excludes: A("exclude"),
            matches: A("match"),
            requires: A("require"),
            resources: ((...e)=>{
                    const t = {
                        keys: e,
                        default: ()=>({}),
                        convert: (e,t)=>{
                            const n = t.match(/^(\w\S*)\s+(.*)/);
                            return n && void 0 === e[n[1]] && (e[n[1]] = n[2]),
                                e
                        }
                    };
                    return (null == e ? void 0 : e.length) && e.forEach(e=>r[e] = t),
                        t
                }
            )("resource"),
            noframes: ((...e)=>{
                    const t = {
                        default: ()=>!1,
                        convert: ()=>!0
                    };
                    return (null == e ? void 0 : e.length) && e.forEach(e=>r[e] = t),
                        t
                }
            )(),
            connects: A("connect", "connect-src", "domain"),
            webRequest: A(),
            "run-at": l(),
            antifeatures: ((...e)=>{
                    const t = {
                        keys: e,
                        default: ()=>({}),
                        convert: (e,t,n)=>{
                            var s;
                            n = n ? o.default.normalizeLocale(n) : "default";
                            const a = t.match(/^(\w\S*)\s+(.*)/);
                            return a && ((e[s = a[1]] || (e[s] = {}))[n] = a[2]),
                                e
                        }
                    };
                    return (null == e ? void 0 : e.length) && e.forEach(e=>r[e] = t),
                        t
                }
            )("antifeature")
        }
            , u = {};
        Object.entries(d).forEach(([e,t])=>{
                var n;
                null === (n = t.keys) || void 0 === n || n.forEach(t=>{
                        u[t] = e
                    }
                )
            }
        );
        const p = "==UserScript==";
        t.HEADER_START = p;
        const g = "==/UserScript==";
        t.HEADER_STOP = g;
        const m = /(?:^|\n)\s*\/\/\x20==UserScript==([\s\S]*?\n)\s*\/\/\x20==\/UserScript==|$/
            , h = ()=>({
            ...{
                ...Object.fromEntries(Object.keys(d).map(e=>[e, d[e].default()]))
            }
        })
            , f = e=>{
            const t = e.match(m)
                , n = (t ? t[1] : "") || ""
                , s = {};
            return n.replace(/(?:^|\n)\s*\/\/\x20(@\S+)(.*)/g, (e,t,n)=>{
                    const [a,o] = t.slice(1).split(":")
                        , i = r[a] || d[a] || void 0;
                    if (i) {
                        const e = u[a] || a
                            , t = n.trim();
                        let r = s[e];
                        void 0 === r && (r = i.default()),
                            s[e] = i.convert(r, t, o)
                    } else
                        console.warn(`parser:${(null == s ? void 0 : s.name.default) ? " script " + (null == s ? void 0 : s.name.default) : ""} unknown key @${a}`);
                    return ""
                }
            ),
                {
                    ...h(),
                    ...s
                }
        }
            , b = e=>{
            const {name: t, description: n, version: s, grant: a, icon: o, icon64: i, supportURL: r, fileURL: A, downloadURL: l, updateURL: c, namespace: d, requires: u, includes: p, matches: g, excludes: m, homepage: h, resources: f, connects: b, webRequest: k, noframes: _, author: R, copyright: v, antifeatures: w} = e
                , y = e["run-at"]
                , C = (e,{[e]: t, ...n})=>n
                , x = t.default
                , G = n.default
                , M = C("default", t)
                , E = C("default", n)
                , Z = Object.entries(f).map(([e,t])=>({
                name: e,
                url: t
            }));
            return {
                name: x,
                description: G,
                version: s,
                grant: a,
                icon: o,
                icon64: i,
                supportURL: r,
                fileURL: A,
                downloadURL: l,
                updateURL: c,
                namespace: d,
                requires: u.map(e=>({
                    url: e
                })),
                includes: p,
                matches: g,
                excludes: m,
                homepage: h,
                resources: Z,
                connects: b,
                webRequest: k.map(e=>JSON.parse(e)),
                author: R,
                copyright: v,
                antifeatures: w,
                name_i18n: M,
                description_i18n: E,
                uuid: null,
                system: !1,
                enabled: !0,
                position: 0,
                blockers: [],
                lastModified: 0,
                sync: {
                    imported: !1
                },
                options: {
                    check_for_updates: !0,
                    comment: null,
                    compatopts_for_requires: !0,
                    compat_wrappedjsobject: !1,
                    compat_metadata: !1,
                    compat_foreach: !1,
                    compat_prototypes: !1,
                    noframes: _,
                    run_at: y,
                    override: {
                        use_includes: [],
                        orig_includes: [],
                        merge_includes: !0,
                        use_matches: [],
                        orig_matches: [],
                        merge_matches: !0,
                        use_excludes: [],
                        orig_excludes: [],
                        merge_excludes: !0,
                        use_connects: [],
                        merge_connects: !0,
                        use_blockers: [],
                        orig_run_at: null,
                        orig_noframes: null
                    }
                },
                textContent: null,
                header: null
            }
        }
            , k = {
            init: e=>{
                i = e
            }
            ,
            createScript: ()=>b(h()) || {},
            processMetaHeader: e=>f(e),
            processHeader: e=>{
                const t = (e=>f(e))(e);
                if (t)
                    return b(t)
            }
            ,
            createScriptFromSrc: e=>{
                const t = (e=>{
                        const t = a.getStringBetweenTags(e, p, g);
                        if (!t)
                            return null;
                        const n = e.indexOf(p)
                            , s = e.indexOf("<html>")
                            , o = e.indexOf("<body>");
                        return s > 0 && s < n || o > 0 && o < n ? null : ["// ", p, t, g].join("")
                    }
                )(e = (e || "").replace(/(\r\n|\n|\r)/gm, "\n"));
                if (!t)
                    return null;
                const n = k.processHeader(t);
                return n ? (n.textContent = e,
                    n.header = t,
                    n.options.compat_wrappedjsobject = e != i.unWrappedJsObjectify(e),
                    n.options.compat_metadata = e != i.unMetaDataify(e),
                    n) : null
            }
            ,
            versionCmp: (()=>{
                    const e = e=>{
                            const t = e.split(".");
                            return t.slice(0, 3).concat([t.slice(3).join(".")]).concat([0, 0, 0, 0]).slice(0, 4).map(e=>{
                                    const t = e.toString().match(/((?:\-?[0-9]+)?)([^0-9\-]*)((?:\-?[0-9]+)?)(.*)/);
                                    return [Number(t[1]), t[2], Number(t[3]), t[4]]
                                }
                            ).reduce((e,t)=>e.concat(t))
                        }
                        , t = (n,s)=>{
                            const a = Array.isArray(n) ? n : e(n)
                                , o = Array.isArray(s) ? s : e(s);
                            for (let e = 0; e < 16; e++) {
                                const n = a[e]
                                    , s = o[e];
                                if (e % 2 == 1) {
                                    if (!n && s)
                                        return t.eNEWER;
                                    if (n && !s)
                                        return t.eOLDER;
                                    const e = n.match(/\w/g) || []
                                        , a = s.match(/\w/g) || [];
                                    for (let n = 0; n < Math.min(e.length, a.length); n++) {
                                        if (e[n].charCodeAt(0) > a[n].charCodeAt(0))
                                            return t.eNEWER;
                                        if (e[n].charCodeAt(0) < a[n].charCodeAt(0))
                                            return t.eOLDER
                                    }
                                    if (e.length > a.length)
                                        return t.eNEWER;
                                    if (e.length < a.length)
                                        return t.eOLDER
                                } else {
                                    if (Number(n) > Number(s))
                                        return t.eNEWER;
                                    if (Number(n) < Number(s))
                                        return t.eOLDER
                                }
                            }
                            return t.eEQUAL
                        }
                    ;
                    return t.eERROR = -2,
                        t.eOLDER = -1,
                        t.eEQUAL = 0,
                        t.eNEWER = 1,
                        t
                }
            )()
        };
        t.Parser = k
    }
    , , function(e, t, n) {
        "use strict";
        var s = n(1)
            , a = n(3);
        const o = {
            items: {},
            remove: function(e) {
                delete o.items[e]
            },
            create: function(e) {
                let t = {};
                const n = {
                    retimeout_on_get: !1,
                    timeout: 300,
                    check_interval: 120
                };
                let s;
                const i = {
                    init: function() {
                        return s || i.schedule(),
                            i
                    },
                    schedule: function() {
                        i.unschedule(),
                            s = window.setInterval(i.clean, 1e3 * n.check_interval)
                    },
                    unschedule: function() {
                        s && window.clearInterval(s),
                            s = null
                    },
                    setOptions: function(e) {
                        for (const t in e)
                            e.hasOwnProperty(t) && (n[t] = e[t],
                            "check_interval" == t && s && i.schedule());
                        return i
                    },
                    set: function(e, n) {
                        t[e] = {
                            value: n,
                            ts: Date.now()
                        }
                    },
                    setj: function(e, t) {
                        return i.set(e, t ? JSON.stringify(t) : t)
                    },
                    get: function(e, s) {
                        let a = s;
                        return t[e] && (n.retimeout_on_get && (t[e].ts = Date.now()),
                            a = t[e].value),
                            a
                    },
                    getj: function() {
                        const e = i.get.apply(this, arguments);
                        return e ? JSON.parse(e) : e
                    },
                    remove: function(e) {
                        delete t[e]
                    },
                    clean: function() {
                        const e = Date.now() - 1e3 * n.timeout;
                        Object(a.each)(t, (t,n)=>{
                                t.ts < e && window.setTimeout(()=>{
                                        i.remove(n)
                                    }
                                    , 1)
                            }
                        )
                    },
                    removeAll: function() {
                        t = {}
                    },
                    finalize: function() {
                        i.unschedule(),
                            t = {}
                    }
                };
                return o.items[e] = i,
                    i
            }
        }
            , i = {
            cache: o,
            createQueue: e=>{
                const t = []
                    , n = []
                    , a = ()=>{
                        let s;
                        if (n.length < e && t.length && (s = t.shift())) {
                            const e = s.fn();
                            n.push(e),
                                e.always(()=>{
                                        let t;
                                        (t = n.indexOf(e)) > -1 && n.splice(t, 1),
                                            a()
                                    }
                                ),
                                s.p.consume(e)
                        }
                    }
                ;
                return {
                    add: function(e) {
                        const n = Object(s.Deferred)();
                        return t.push({
                            fn: e,
                            p: n
                        }),
                            a(),
                            n.promise()
                    }
                }
            }
            ,
            sleep: e=>{
                const t = Object(s.Deferred)();
                return window.setTimeout(()=>{
                        t.resolve()
                    }
                    , e),
                    t.promise()
            }
            ,
            readAsText: e=>{
                const t = Object(s.Deferred)()
                    , n = new FileReader;
                return n.onloadend = function() {
                    t.resolve(this.result)
                }
                    ,
                    n.onerror = t.reject,
                    n.onabort = t.reject,
                    n.readAsText(e),
                    t.promise()
            }
        };
        t.a = i
    }
    , function(e, t, n) {
        "use strict";
        const s = rea.FEATURES;
        let a = null
            , o = s.PINGPONG.RETRIES;
        const i = (e,t)=>{
                const n = ()=>{
                        null != a && window.clearTimeout(a),
                            a = null
                    }
                    , s = t=>{
                        t ? (n(),
                        e && (e(t),
                            e = null)) : console.log("pp: Warn: got pseudo response!")
                    }
                ;
                a = window.setTimeout(()=>{
                        if (n(),
                        o-- > 0)
                            return i(e, t),
                                void (e = t = null);
                        t && t()
                    }
                    , 5e3);
                const r = {
                    method: "ping"
                };
                try {
                    rea.extension.sendMessage(r, s)
                } catch (e) {}
            }
        ;
        var r = i
            , A = n(0)
            , l = n.n(A);
        const c = rea.FEATURES;
        var d = [];
        let u = null;
        const p = (()=>{
                    const e = c.HTML5.LOCALSTORAGE;
                    let t, n;
                    return {
                        cache: function() {
                            const t = document.documentElement
                                , n = location.pathname;
                            if (e && t && n)
                                try {
                                    const s = JSON.parse(e.getItem("background") || "{}");
                                    s[n] = {
                                        class: t.getAttribute("class")
                                    },
                                        e.setItem("background", JSON.stringify(s))
                                } catch (e) {}
                        },
                        reset: function() {
                            n = !0;
                            const e = document.documentElement;
                            "string" == typeof t && e && e.setAttribute("class", t)
                        },
                        restore: function() {
                            if (n)
                                return;
                            const s = location.pathname;
                            if (e && s)
                                try {
                                    let n;
                                    const a = e.getItem("background");
                                    if (a && (n = JSON.parse(a)) && (n = n[s]) && n.class) {
                                        const e = document.documentElement;
                                        if (!e)
                                            return;
                                        t = e.getAttribute("class") || "",
                                            e.setAttribute("class", t + " " + n.class)
                                    }
                                } catch (e) {}
                        }
                    }
                }
            )()
            , g = e=>{
                const t = ()=>{
                        e(),
                            p.restore()
                    }
                ;
                k ? document.body ? t() : window.addEventListener("DOMContentLoaded", t) : (b = b || []).push(()=>{
                        g(e)
                    }
                ),
                u && (window.clearTimeout(u),
                    u = null)
            }
        ;
        d = [{
            name: l.a.getMessage("Default"),
            layout: "default"
        }, {
            name: l.a.getMessage("Default_Light"),
            layout: "default",
            theme: "light"
        }, {
            name: l.a.getMessage("Default_Dark"),
            layout: "default",
            theme: "dark"
        }, {
            name: l.a.getMessage("Default_Darker"),
            layout: "default",
            theme: "darker",
            footer: 'Theme by <a href="https://github.com/narcolepticinsomniac" target="blank">narcolepticinsomniac</a> from the <a href="https://github.com/openstyles/stylus" target="blank">Stylus</a> project.'
        }];
        let m = !1;
        const h = {
            default: l.a.getMessage("Default"),
            monokai: "Monokai",
            solarized: "Solarized",
            "mdn-like": "MDN-like",
            eclipse: "Eclipse",
            railscasts: "RailsCasts",
            zenburn: "ZenBurn"
        }
            , f = ()=>(m || (d = d.map(e=>(e.value = e.theme ? [e.layout, e.theme].join("#") : e.layout,
            e)),
            m = !0),
            d);
        var b, k = !1;
        const _ = {
            init: e=>{
                k = !0,
                b && (b.forEach(e=>{
                        e()
                    }
                ),
                    b = null),
                    p.restore(),
                    r(t=>{
                            let n, s, a;
                            var o;
                            t && (n = t.config) && (s = n.layout) && (n.dark && !s.includes("#") && (s += "#dark"),
                                (o = (e=>{
                                        let t;
                                        return f().some(n=>{
                                                if (n.value === e)
                                                    return t = n,
                                                        !0
                                            }
                                        ),
                                            t
                                    }
                                )(s)).theme && "light" !== o.theme ? (o.footer && $(".footer").html(o.footer),
                                    a = o.theme) : a = "default",
                                p.reset(),
                                $(document.documentElement).addClass([rea.FEATURES.RUNTIME.MOBILE ? "mobile" : "desktop", a].join(" ")),
                                window.setTimeout(p.cache, 500)),
                            e.suc && e.suc()
                        }
                        , e.fail)
            }
            ,
            images: {
                origin: function(e) {
                    return {
                        unknown: "data:image/png;base64,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",
                        uso: "data:image/png;base64,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",
                        mog: "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNC8yMy8xNJyRyqUAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAACVklEQVRYhc2XS2gUQRBAX6kHI5ioEBEhIKggRPaYw6KgCOkg6NGjICrs2SaQ6F3IoW/iBxEED+JNRAhNUBARIxGCxoho/OagBkW9rFGR9jCzMnZ6Pklmdy0Y2KmqrnrbVT01I8452ikr2pr9fwBYlecgynQDw0AF+A3cBS45q9+XASBZPRAnvwds90xfgFPO6nPLBcgrwUggOcB64Kwoc1mUWVYZU3dAlFkNvAO6c2LcAg46q+tLAcii7wI6C8TYB4yJMh1lA6wExNM9BT4FfKvAdVGmVIBfRF3vA1SBtwH/fuCaKONDLxlgHvjh6SrO6hfAbmAmsOYQcFuU2VoUIKsJAaaAnQn1d2CLs3pOlOkBxoHNgeV14DxwFZgmKucOYB0w6az+3HBM3QFnNcAzT90B9Mb2WWAA+BpYvgY4AUwAr+JrAhgDxkWZ3lyAWB4GdNUE5BSwB5jNiLGJf4/yNmCwKMD9gG5v8sZZ/QjoA27mxErK3yObBzDJwi3uE2U2eBAfnNUHgMPAk5yYdeBM4yZzFgCIMqNEtU7Kfmf1aIq/EB3JAaJ+WRubvgGPgStx6YAC05CocXyAXUAQwFntABtfuVJkkNwB/G2qFAleFsAb4Ken29hKgC4WlsoHairAENGTLCnPWwIgyhwDjgdMN5oOIMrUgIsB0zSLe+gsHkCUOQ2kve8ddVb7Y7o8AFHmJNFbcEhqzuoHZSUPAgBHUnyHnNUXykyeBvAxoKs5q0fKTp4GMAi8jn/PAP3N+OcNCQ4jUaYT6AFeOqvnm5U8FaCV0vaP0z8+BK0V8JWwlwAAAABJRU5ErkJggg==",
                        gf: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=",
                        gh: "data:image/png;base64,AAABAAIAEBAAAAEAIAAoBQAAJgAAACAgAAABACAAKBQAAE4FAAAoAAAAEAAAACAAAAABACAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABERE3YTExPFDg4OEgAAAAAAAAAADw8PERERFLETExNpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQUFJYTExT8ExMU7QAAABkAAAAAAAAAAAAAABgVFRf/FRUX/xERE4UAAAAAAAAAAAAAAAAAAAAAAAAAABERE8ETExTuERERHg8PDxAAAAAAAAAAAAAAAAAAAAANExMU9RUVF/8VFRf/EhIUrwAAAAAAAAAAAAAAABQUFJkVFRf/BQURLA0NDVwODg/BDw8PIgAAAAAAAAAADg4ONBAQEP8VFRf/FRUX/xUVF/8TExOPAAAAAA8PDzAPDQ//AAAA+QEBAe0CAgL/AgIC9g0NDTgAAAAAAAAAAAcHB0ACAgLrFRUX/xUVF/8VFRf/FRUX/xERES0TExacFBQV/wEBAfwPDxH7DAwROwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NEToTExTnFRUX/xUVF/8TExOaExMT2RUVF/8VFRf/ExMTTwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQTBUVF/8VFRf/ExMT2hMTFPYVFRf/FBQU8AAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAITExTxFRUX/xMTFPYTExT3FRUX/xQUFOEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBQU4RUVF/8TExT3ExMU3hUVF/8TExT5Dw8PIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQHxMTFPgVFRf/ExMU3hERFKIVFRf/FRUX/w4ODjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8PD0AVFRf/FRUX/xERFKINDQ04FRUX/xUVF/8SEhKYAAAAAAAAAAwAAAAKAAAAAAAAAAAAAAAMAAAAAQAAAAASEhKYFRUX/xUVF/8NDQ04AAAAABERFKQVFRf/ERETwQ4ODjYAAACBDQ0N3BISFNgSEhTYExMU9wAAAHQEBAQ3ERETwRUVF/8RERSkAAAAAAAAAAAAAAADExMTxhUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8TExPGAAAAAwAAAAAAAAAAAAAAAAAAAAMRERSiFRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8RERSiAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQED4SEhKXExMT2RISFPISEhTyExMT2RISEpcQEBA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwRERNzExMT2hMTFOwAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxMTFOwTExPaERETdAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERERRkExMU6hUVF/8VFRf/FRUX/w8PDxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDw8QFRUX/xUVF/8VFRf/ExMU6xERFGUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODg4SExMTtxUVF/8VFRf/FRUX/xUVF/8VFRf/Dw8PEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8PDxAVFRf/FRUX/xUVF/8VFRf/FRUX/xMTE7cODg4SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQHxMTFNsVFRf/FRUX/xQUFMMRERN1Dw8PYBMTE3gAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw8PEBUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xMTFNsQEBAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgTExTcFRUX/xUVF/8SEhJvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDw8QFRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xMTFNwAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEExMTxBUVF/8VFRf/ExMUuQAAAAAPDw8QDw8PYxISEnoODg5GAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDBUVFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xMTE8QAAAAEAAAAAAAAAAAAAAAAAAAAABISEn4VFRf/FRUX/xUVF/8NDQ04Dw8PIRMTE+IVFRf/FRUX/xUVF/8RERE8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQPhUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xISEn4AAAAAAAAAAAAAAAAREREeExMU9xUVF/8TExT+ERETcwAAAAcTExTJFRUX/xUVF/8VFRf/FRUX/xMTFK4AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAERERSwFRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/ExMU9xERER4AAAAAAAAAABISEpcVFRf/FRUX/xISEooQEBA/ERETwhUVF/8VFRf/ExMU+hMTFqoRERRlDg4ONAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAABA0NETkODhNoExMUrhMTFPoVFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/EhISlwAAAAAAAAANExMU9RUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xMTFKsAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRMTFKsVFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8TExT1AAAADQ4OFFkVFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8TExOPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTE48VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8ODhRZExMTnRUVF/8VFRf/FRUX/xUVF/8VFRf/EREU0QAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBERFNEVFRf/FRUX/xUVF/8VFRf/FRUX/xMTE50RERTQFRUX/xUVF/8VFRf/FRUX/xUVF/8SEhJeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhISXhUVF/8VFRf/FRUX/xUVF/8VFRf/EREU0BISFPIVFRf/FRUX/xUVF/8VFRf/FRUX/wAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFRUX/xUVF/8VFRf/FRUX/xUVF/8SEhTyFRUX/xUVF/8VFRf/FRUX/xUVF/8SEhTyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhTyFRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xMTFNsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTFNwVFRf/FRUX/xUVF/8VFRf/FRUX/xMTFPYVFRf/FRUX/xUVF/8VFRf/FBQU4QAA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AAAAAAAADAwMFA8PD2MRERSkFBQU0hMTFPMVFRf/FRUX/xMTFPMUFBTSEREUpA8PD2MMDAwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                        gl: "data:image/png;base64,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",
                        bb: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAIAAADdvvtQAAAVZElEQVR4AezSQREAAAgDIKvYyEo2X4e9uSMCs/c1EAiBEAiBEAgEQiAEQiAQCIEQCIFAIARCIAQCgRAIgRAIgUAgBEIgBAKBEAiBwt5ZeLeRa2H8X3j82sfMzMzQTbtlXC4tl/m0cZgZt7wNlhmzaZIyh5nJ5aYcajb1+yU6x+1L7dTxQByPdHRyHI9GuvebzxpdXelq6OSvjvG25q88k5++KrEyFoG+SoYEo72/OMo0zMPzcy+s+uyInvzpnrzy0/9d+bkXPL84yoti3xjv941xvt+Z6P+jKUE/nBJozfzLl1yiAMUozC3cyO1UImqjWiqnCRrq4Zkk0NDtSL40ymu4h4mH+sn/9DzgL73o9e0Jfr94NfS/7ydMXb7xnYD0FTG7QzZlrNt1avtHlzJOl5zIrTpXVJtb3lhUbS6sMpfVXa0z36x9KvMvX3KJAhSjMLdwI7dTCVVRIdVSOU3QEM3RKE0jAGIgDCK5aNclCcT7hd+96FGGeZi+PcH/L7Oipy7fsDx297qdJ/bmFJwuqKlpun7rzoOHbZ1dH3dbNEtUThM0VNN0g0ZpGgEQA2EQCcEQT/RYCIzYkkCDlnlN8L7gDcLfH08N8piTsDhi+9qdJ0/kVvPwWu61Pn5scZ2EMIiEYIiHkIiKwIhtVQF1JIH0eDd9caSJkcfwUSZeE695bopKPXo8t6rhSktHZ5dlSCUERmyERwUUQR2UQjUURE1JIJV5M9zDE3AZw744/4PQTRmMP6633O/uppNxh4QiqINSqIaCqImyqKyUSZJAGDtAyYcpyzas33WqpOZye+cji1snFERNlEVlFEd9QJAEGrDV3Wtse/773bjIlMyiKrMY+RoqoTKKoz4gAAWAfFUSyJEMUhjADAsOnSy+39puMXwCBKAAEGABHEkgu3n4SBNWLkidyq92kS6n+zHJVTokYAEcIAIoSaC+w2Ss2VHzEg+dKn7U1a3dM2ht77x84y6DDGYCs86VMQ3IaCMqNct/3aFVcXuwrsmLIra/5Z82yydltm/q66ak6V7Js3xTZ/qkzAvZKgowZ+i75kB4cqaYh8w8W8qUT155YxVTTfdaO1FAM9JRNxABFHABmiRQ70iZ39M4n+jUrLsP21TEmnmX6sbrWRcqNuw+Hbj+8JyQrZOWbfjbmzE/fyXkW+P9+BEzoUf+rI2MU4LsKUYew/jQm22WFM6QzzGRM8bn+5MDf/dG+Ig5CW94Ja+M2xOTdnRHZm5BRTOUZfpSRdUACrgADeiMTiCe0O+nRzK9phxWfvr1l28yXAjZmEFX/5dZURCF+nv8Cf9dCScgDf4E4ajSoBMV7jYv4W6DWzT6mRd6vCjM8YxZsHp+WM8858m8aix2VXooQAM62jIugVD+v+/FVzVeV4JjW8ej88X1zKCMX7T2e5MCeGaYvtTsOr4nKAt3YTCUwib/+SuhM7xTeP2V111VOJUFdACIskYkEN0v7iH8lE7Dh8uJ19PIuYn8yiENDwnGDBUnDALjcH155Yf4yx60djgNAl5eYARMYxGo50mP82Xs6TRw+48X/mlW1CfF3P+QXTUgXnbMPit5iQMjYFKbgQgEaqbEfU5DlrT/LONW/X92Gk59jfbenZ3vNCCACaRGIRC/Fdw9xdVm58C619r+x5mRgj1uk1kw9LfZMU6/ywATSAHWEAT60ijTf9+Pd9qr1dnZNXnpeoxndyLQ50asGj3/AwwCpz1ojKYB1hAEosd+zTNJyWxbae2Vv78dxwCIAakbrJ9kQP3r18MultYrmTEHUoA1BIEwlyYtXf9xt6IZ52st94I3Zvx4WpD29pdWmYkGsUZlYcT2+su3lKABmEAKDgZ5hXn9dXY0Sz8tilPj1ZbV24+NWbgaQ4yXGvPFmPSuTCaWsTLcgTfDRpoAAZdIQWWzchwAk9oA1hAE4r3z42nBrMezqJSYgy6uMTMn9JZ/+h9mREImnhBWyaBPJzI9zdy0dWIa0vx0WjADuLCkj/CM3rnfqhYCgAmkAGsUM55+4lJZg0WDxFNh18TOzFyfNQdeX7Xpb2/FMj1Nc5j9PEKxg4eunhlhvux1a5CVezC8YSqGIVyxbgURL5TfT49gadiymN1J+86wgNV8/Y4W3mLARB1jzQMxA2vRPt190NZ0tQVfx77jhRt2ncLr/m7QlgmL1/7rnbg/zojEsQq98IOK9WtkPCEi23SdWq9S0rrIixrwduF6GzknAe/98pg9sWlZ6YfPZ50rx1lx884DMdrTNAEm4hmLQNFpWYO4BhmD+dbdh83Xb7MGg0mUiyX1WefLccRuz8zdkZm3JeMivqqn89pdp5i95BIOdvKR06V0J3llDSU1ZhxS9Cv0fKJrGZQEmIYjEAtr1IJPJsA0FoGwRCYtWd/5SIVVMjIBI2ACqYEIhG3yuzcibt9TwQyRCRgBE0iN5Y1ntRe7zZXDJxNDdcA0ljeejF2debZMOXwyASNgGm5BGbMy2NXK4ZMJGAHTcARiiSfTa8rhkwkYAdNwBGKililahZNsMgEgMAKm4QjE1PsfZ0bduvdQCXwyASAwAqbhCIQXiXBx1cq2ZMgEgL0mmDG39Yz0xIGgBD6ZABAYDbovDN/4emWGmEwACIxGJdCIVavi9yqBTyYABEZjEghDzHPqio1O786UCegAEBgNSiAWYbE58N4DJ2MqyAR0AAiMBiUQ7pvvTAyobHDSEJOpquE6y9mA0bjROVjXdzK3yjn4ZAI6ADR0eBeWQX2494xz8MkEdABoaAJhQZgSnDTEZAI6ADR6gClCnLiaRwx5WAzPZj8GGWQ+8K+rCdnV3Q10hg4wJQwxdke4iCGGGNkXKti5MWnJut/PiBTjUzIf+JcvuUQB15EW6ADQwAQShtgEv6rBNsQIYxi/JYcIivygxV7pp3e48oF/+ZJLFKAYhbll0E2w707wRzZDE0i8xbLOlw3iivTUg+d/83r4Jx2OCU8xCnMLN3L7IHrBgE5Gae1dmrh7cDxiV27efSdgM5vqnXgRcAs3cjuVDIrwgAZ0kkC9SxOjB2FpYmXDtf+8F6cwzhC3UwlV6S8/oAGdJBAeMRPxBnQNTS9iU86OVuUBUAlV1Zlv6By4frKI5yIJxPiUCATYybqhz6Zm4lqq+POlKuKLtei4ze3mnYeABnSSQL15nE9F/VW9PNjdy6J3YU89P7izh0kEUeCH/tzjKalwRexuKtdHC+ACNHnUwZM9YgdPFutmvPRGNOvHyDIRf+NnL4fwjiCUB5kZIOL68GU/ZhoVUq1uCyyBC9AkgZ4YYolbcrSHnbD2nYQzs2f9MqcCS/7xdmzaofME3GDq2TrgaL52O/nAWWaA8D3ZIx/VUjlN6KAIcAGaJNCTMcTCcD2CdRw+XcIryR576EI4lqWfoQyx8X1WHxjmYTckI5XThA6KABegSQI9OfZg9ILVWhtirN+b7ZcG7vb6j9Xbjzty/nJserY9FlI5TdCQ1iYYcAGaJNCTYB2/fi2MwKua4t50reWHU4IYDtuOVxS508EHz6ttTuhWm0SkcpqgIU0VASjgejochzxwDuh9CiubtR14niiy2XNgcHGCDpHwHK8K/zynvnOjzbcYDWmqCEABF6BJAv1fH8D5KZriHrYpg4Gnzab91h4caG0r4/Zyo02DgIY0VQSg+jYtCcTCqMjUo9qBztjlvaAtNt87jJ2PXaocaIUf2QmqQhNY/jSnXQKoT0sC9cnYz5xKqQB2J2O5Y0/9cHKAE4Hi2QvwnYn+3O5MHH4FCYgACrgkgfpO342c94E4gUWLxKmlNi0XxjG/eCXEiWB7V27c/elUMSS3YVHSnEaKABFAAZckUN8H+bOXgq/d0soQe/Rx97jFa58lEAyAB1dvDrRdxtEtP5wcaJNANERzGikCRAAFXJJAfV8lWBacWKPdCfDTvVKY7Hm2XYKFE9x+oBWeLartXbVoYz6Jk8K1O/kbiHpNMEkgW/7I3Vn5Fs2S9wf7acJmu5ynPNDaWNVqcy0RtdGQdlrszsqz6wmWBArV0gBOPXDus7YeOS8dTu5tbR+AD+t+a8e/342z6VulCRrSTgsgkgSyu0v1Tb807aDnWIKv2m86af8A9jfSY9mzg2iChrTTAoiQVhLItiHGUZgcfaWd/fLi/NWY2TaH8N+fHMCZLI7Uw0lNGPA2XSJUThPa2ZKAA0QAJQlEtulICuQAFItmac3OE8wU26Mva4CeG7qaA1lwYthbhE/lq3ec0E5+wAEigJIEsrtj5lxRnUWzZL5+myOeOGPbXuv8ZcFGrflmHzMKP2t103XPhL2YXfbYg1FG5TShnfyAI4SUBLLr0Eg/dN6iZWIxRj+DUMxj3Ew/mhI40yclJi2bc582H7kYnZo13SuJdxyXKNCPEZC4Vdtlcax0AyJJoP4MMbYPa3wEXavH3ERma/p/mQ57wZNHBWPIfKB8/1MvFBg5L/HuQ213PQMOEEkC9fcY3jAlaR3yjrm4b0/wV3FLA1UxrM4rb9BUbGABnP6oLwnE8OLvb8UKQ0zTtCengMGEKmuyqISqqFBrmYEFcIBIEqgfhwbmdCC7/izap82HL2K9KxyTcjuVUJUOAjO0ZxwGRJJAz5lOPIotrdfmmJ++HOL04ixu5HbdNiQBi0NTiJJA7wZu1i32b0XDNQYWn+3dPTig7djcwo3crltEX2CRBHIgj+l5LzChp+c+8z3Z+Wx2Fqe+M8iw+ZrgSy5RgGIU5hY99/MDCLAAjiSQQ0Pp306PYOLOomPCmcq+0qVRO/86O/rr43wx3Z8248l8ySUKUIzCesoGFAAihs+SQI7a8yPmJIiVpjqnew/bC6vMR06VbNp3JjY9h8wH/uVLLukvDyB4zEkYmPUuCSRWp7PLuLTmssXAqaTm8j/eiXNiE6okkDhe3vNnr4TsY7uPIROKoz4gAIUkkPPjIUweArI0X79jHOqgLCqjuBj3SAIp3bfKSJaz9ZmvE6NXN04oiJooaw0DIgmkWlfEIsDxi9YS/qKjs8v9qINSh0+XoiBqqt/xSAKJTNQw7BFQ3vbRRbGZyw0SiqAOSqEaCgpNJYG0jcvJz5RwT5EpmaW1V4bokXWIjfCoIOJWWafCJYH0e6mxOIYzi9mHtTXjIvMlQ4JJCImoCIzYCI8Ker6wJIFseBjo+dmixWLh6aakTXvPFFSaW1kQ4mIJkRAM8RASURHY9iI1SSAtxj2f/M9K/IiOMEks2PvXO3ErYnbzK2cirmXwhko0jQCIgTCIJJZcOsIblEVlFJcEUmGZ/bQVH7LW+P2QrXwmO9InUUy4sdilxamiM3xSIlOO7s7Ov1TWwDZ4VmY91mC5INVSOU3QEM3RKE0jgJAEkRDMEX3JKIvKKM5nSSBFg2UCeN9vbRdPiMhfRNem83e85xebKETPhEOUxc5syhnxfgLvEdyiESmZrJnPOld2prAmv6KZ8284g4cAcvi8eOOQCblKFp/5kksUoBiFuYUbuZ1KqIoKqZbKaYKGRE9D0wjg+LsY1VAQNQW/UXy02MgmCeT0ii3v1fv7TNEujdr1xV5OOBtLj/7JJFZukHlm4nwnnO3fnxTAvpxfvRr6h+kRf54ZSea986+348RnvuQSBShGYW7hRm4X9VAh1VK5c7N/3I5SS6N3mf9/wh31qVwSyHl/6rzQrZZn0oncKoI4iRjyKg7GyaxPJbNIXmS6ELL1X3FVlFSxl0UR1EGpZzVFfSc9qZJA/Yc9YPsw69h5wYG+6I2GXEZshEeFvTkFqGPTrYH6gCAJ5HyvgMXbz15PIN57rHDKsg1i1CzCLrl4RkgxpkZshEeF/jcyK+3tpBVGMIPnnjp4Mq96YcSOn78ayrNhTyCgu+Z8FeIhJKIiMGI/L4pDjbTCVNiryuSb40efbsu49IZXMtv8rDMursAbhEEkFuEjnuOHraI4N0oCKTXEOEZpoL4CjhDk3IKpyzdgMVEDmZGEbmSiIZoT7XLiM2IgDCIN1NOC4opNMPkK8zBNWLSWqLnOnayO12lnZi5PgtEozxKLBsObvz0bAlUypqiEqqjQWjkN0RyN0jQCOLd5A5VRHPUlgVziGA1W27C34cjpEqJ0E3GcAHVM+jFNLCb9+KHz4MW8AJ2H1Xq3WvXiGy4Jq5vC3CImJ6mEqqiQaqmcJmiI5lzlQAzpCyOcT35Fk+oL/7BxLpU1Zpwp4fhj37WHFkXsmOWdPGnJeo85iX+dHfOnWdF/nBnFkmQyH/iXL7lEAYpRmFu4kduphKpUXyqJyigufWHqDIN2ZOZadEmPurpxad2538oiL1yhdANkPvAvX3KJAvpIgsooLgmkjiEWsP6wxWAJlVFcEkidGdvXTUniPFuDJJRFZRSXBFInfBOjkLvsCjVMQllURnFJIHWmVb49wa+s7qpxCISyqIzikkCqjaPFYbYGScwFqDmClgRiOCmOozNIik7LQmVJIDUXBhHi/7FhCPS2fxoqSwKpuYOHSB1ibavbpwfWk1wkgVTcHs+gsrb5hhEIhPtMHKYpCaTybBBbx41AII7zHaa6D1USiHNM4tKzjUCg+M3ZKCsJpHIWR0k+dveBNArO8EpGWUkgDdZH98Qgd/NhEAqiJspKAmkyneiz5oB7EwgFNZpClAQSW7d8ci5WuCt7ci5WoiBqSgJpNyFk+vXrYUQscMuArKiGgjI6h+Yb5om6ncdJ726UUAel9NsGLyOU/Xhq8L5jbhL+F0VQR0Yo09u5QTCDVfF7xSG9QzQhPCqgCOrIAFOD4N/4dG/4Xw76v/ugbWhRB4ERG+FRAUVkhLLB7Ip4Bv95N44DaW/deej61EFIRP3Pe3GIjfAyxJ1LZLET9A8zIsOSMoprzGLvhEslREIwxENIRFUQc0MSSNveaOU3xvlOWb5h4+7TBNFlG87g8gYBEANhEAnBEE/zXkcSSPl8IweUiAjAhIgL2nDkyOnShsstnV0f60MaGqI5GqVpBBCxfIdrH+lBEkiTIAc8vM95eOJgGrNgNTHkkvedOZ5bxZob9gp2qvGmoxKqokKqpXKaoCGao1Ga1j6ogySQbt1S7ziJlRIs9mPFFmORycvWzw/d6rv24OodJwitmnOhnNCZeeVNRdXm6qYbnJJszfzLl1yiAMUozC3cyO1UQlVUSLVUThPD9SeNJJD+fGLXFa8V66GWImImz55gCd8Y78fp4z+aEkSAMDIf+JcvuUQBilHYeiAmlVCVDcZIAhmWWyJ/5als/VLiIwkk8//apQMZAAAAgEH+1gd5WwgJhECcAoFACIRACAQCIRACIRACgUAIhEAIBAIhEAIhEAiEQAiEQCAQAiEQAkEyEVOTAEOkBQAAAABJRU5ErkJggg==",
                        ouj: "data:image/x-icon;base64,AAABAAEAQEAAAAEACAAoFgAAFgAAACgAAABAAAAAgAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwTwoAclEOAHVWAABzUhAAdlcAAHdYAAB0UxIAdVQTAHhZAgB2VRUAe1sJAH1dDgB3XB0AeF0eAHpfIQB7YCIAfGEjAH1iJAB+YyYAf2QnAIFmKQCEah8AgmcrAIVpLgCHbSQAhmovAIhuJQCJbyYAh3EzAIhyNACJczYAi3U4AIx2OQCNdzoAjng7AI95PACQej0Aknw/AJN9QQCXgUUAlYROAJaFTwCXhlAAnItWAKCPWgChkFsAo5FcAJ2RYQCekmIAn5NjAKKWZgCkmGgAp5pyAKqdbQCrnXUArJ52AK+hegCpoX4AraWCALOqhwC0q4gAtayJALatigC3r4sAuLCMALmxjQC3tJQAuLWVALm2lgC7uJgAvbqaAL67mwC/vJwAwb6eAMbBqQDHwqoAwsOuAMXGsgDHyLQAyMm1AM7PugDP0LsA0NG8ANLTvwDT1MAAztXEANDWxQDR18YA0tnHANTbyQDV3MoA19zTANfezQDZ4M8A2t/VANvg1gDc4dcA3eLYAN7j2QDf5NoA4OXbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRjYl9dXFlZWVlcXV9iY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY2FcVU9JQDo2NDQ2OkBJTlVcYWNkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRiXVZMPTIpIRoUDg0NDhQaISgyPUxWXWJkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGNfVEk0JxgLCAIDAQAAAAABAwIFCxgnNElTX2NkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJZSzQkEQUDAQAAAAAAAAAAAAAAAAEDBREjNEpZYmRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY2BSPykUBQEAAAAAAAAAAAAAAAAAAAAAAAABBBMoP1JfY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY11NNB0MAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDB00TV1jZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY11MMBYEAQAAAAAAAAEDBwIJBAQJAgcDAQAAAAAAAAEEFC5MW2NkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY11MLBMHAAAAAAABAwcIERccHyIiHxwXEQgHAwEAAAAAAAcTLExdY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGBNMBMHAAAAAAABCQ4YJi84PURGRkQ+OC8mGA4JAQAAAAAABxMuTV9kZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJSNBYHAAAAAAEDChgqOEVNUlhcW1tcWFJNRTkqGAoGAQAAAAAHFjRRYmRkZGRkZGRkZGRkZGRkZGRkZGRkZGNZPx0EAAAAAAECDyM0SFBcYGJiY2RkY2JiYFxRSTQjDwIBAAAAAAQdP1ljZGRkZGRkZGRkZGRkZGRkZGRkZGRfSykMAQAAAAEEFCk7TlphY2RkZGRkZGRkZGRjYVpPPCkUBAEAAAABDChKX2RkZGRkZGRkZGRkZGRkZGRkZGRiVDQUAwAAAAECFCtDUl5iZGRkZGRkZGRkZGRkZGRiXlNDKxQCAQAAAAMTNFNiZGRkZGRkZGRkZGRkZGRkZGRkXUkkBQAAAAADDypDVGBjZGRkZGRkZGRkZGRkZGRkZGNgVUMqEAYAAAAABSRJXWRkZGRkZGRkZGRkZGRkZGRkY1Y1EgMAAAABCiM8UmBjZGRkZGRkZGRkZGRkZGRkZGRkY2BTPCMKAQAAAAERNFZjZGRkZGRkZGRkZGRkZGRkZGFMJwgAAAABCRg0Tl5jZGRkZGRkZGRkZGRkZGRkZGRkZGRjXk80GAkBAAAABSdMYWRkZGRkZGRkZGRkZGRkZGRcPRgHAAAAAw4qSFpiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJaSCoOAwAAAAMYPVxkZGRkZGRkZGRkZGRkZGRjVTMOAQAAAAcYOFBhZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYVE5GAcAAAABCzJVY2RkZGRkZGRkZGRkZGRkYk8pCAAAAAEIJkVaYmRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGNcRSYIAQAAAAgpTmJkZGRkZGRkZGRkZGRkZGBJIgQAAAADES1NX2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYE0vEQMAAAACIUlfZGRkZGRkZGRkZGRkZGRdQRsHAAAABhc4UmJkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJSOBcHAAAABxpAXWRkZGRkZGRkZGRkZGRkXDoUAwAAAAccPVdiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRiWD4cAgAAAAEUOlxkZGRkZGRkZGRkZGRkZFo2DwEAAAACH0RcY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY1xEIAkAAAABDjZZZGRkZGRkZGRkZGRkZGRZNA0BAAAACSJGW2NkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRbRiIJAAAAAA00WWRkZGRkZGRkZGRkZGRkWTQNAQAAAAkiRltjZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkW0YiCQAAAAANNFlkZGRkZGRkZGRkZGRkZFo3DwEAAAACH0RcY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY1xEIAkAAAABDzZZZGRkZGRkZGRkZGRkZGRcOhQDAAAABxw9V2JkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJYPRwCAAAAARQ6XGRkZGRkZGRkZGRkZGRkXUEbBwAAAAYXOFJiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRiUjgXBwAAAAcaQF1kZGRkZGRkZGRkZGRkZGBJIgQAAAADES1NX2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYE0vEQMAAAACIklfZGRkZGRkZGRkZGRkZGRiTykIAAAAAQgmRVpiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY1xFJggBAAAACClOYmRkZGRkZGRkZGRkZGRkY1UzDgEAAAAHGDhQYGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGFQORgHAAAAAQsyVWNkZGRkZGRkZGRkZGRkZGRcPhoHAAAAAQ4qSFpiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJaSCoOAwAAAAMYPVxkZGRkZGRkZGRkZGRkZGRkYUwnCAAAAAEJGTROXmNkZGRkZGRkZGRkZGRkZGRkZGRkZGNeTjQYCQEAAAAFJ0xhZGRkZGRkZGRkZGRkZGRkZGNWNRIDAAAAAQgjO1JgY2RkZGRkZGRkZGRkZGRkZGRkZGNgUzwjCgEAAAABETRWY2RkZGRkZGRkZGRkZGRkZGRkXUkkBQAAAAADDylCVGBjZGRkZGRkZGRkZGRkZGRkZGNgVEMpDwMAAAAABSRJXWRkZGRkZGRkZGRkZGRkZGRkZGJUNRQDAAAAAQIUK0NSXmJkZGRkZGRkZGRkZGRkZGJeUkMrFAIBAAAAAxM0VGJkZGRkZGRkZGRkZGRkZGRkZGRkX0spDAEAAAABBBQpO05aYWJkZGRkZGRkZGRkYmFaTjspFAQBAAAAAQwoS19kZGRkZGRkZGRkZGRkZGRkZGRkZGNZQB4EAAAAAAECDyI0R1BaYGJiY2NjY2JiYFxQSDQjDwIBAAAAAAQdP1ljZGRkZGRkZGRkZGRkZGRkZGRkZGRkYlI0FQIAAAAAAQMIGCo4RU1SV1xbW1xXUk1FOSoYCAMBAAAAAAcWNFJiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRgTTEUBwAAAAAAAQkOGSUtOD1ERkZEPTgvJhgOCQEAAAAAAAcTME1gZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY15MLxQHAAAAAAABAwcIERccHyIiHxwXEQgHAwEAAAAAAAcTLExeY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRjXUwxFQUBAAAAAAAAAQMGBwIJCQIHBgMBAAAAAAAAAQQWMExdY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGNeTTQeDAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwwdNE1dY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY2BSQCkUBQMAAAAAAAAAAAAAAAAAAAAAAAADBRMpP1JgY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYllLNSQSCAcBAAAAAAAAAAAAAAAAAQcIEiQ0SlliZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRjX1RJNScaDggCBwMBAQEBAwcCCA4aJzVJVF9jZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRiXVZMPjMqIhsUDwsLDxQbIikzPkxWXWJkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRjYVxVT0lBOjc0NDc6QElPVVxhY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY2JgXVxaWVlaXF1gYmNkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                        usty: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPjlDMzAwNDI3LTg4Q0QtNDI2RC05QkZELUFEMUU2RUI2RjRDNjwvdGl0bGU+PGRlZnM+PHBhdGggZD0iTTAgNS42MjNBNS42MjMgNS42MjMgMCAwIDEgNS42MjMgMGgxMi43NTRBNS42MjMgNS42MjMgMCAwIDEgMjQgNS42MjN2MTIuNzU0QTUuNjIzIDUuNjIzIDAgMCAxIDE4LjM3NyAyNEg1LjYyM0E1LjYyMyA1LjYyMyAwIDAgMSAwIDE4LjM3N1Y1LjYyM3oiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHVzZSBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZmlsbD0iIzJFQ0M3MSIgbWFzaz0idXJsKCNiKSIgZD0iTTExLjI1IDB2MTQuNjI1SDBWMHoiLz48cGF0aCBmaWxsPSIjRTc0QzNDIiBtYXNrPSJ1cmwoI2IpIiBkPSJNMjQgMHY3Ljg3NUgxMi43NVYweiIvPjxwYXRoIGZpbGw9IiNGMzlDMTIiIG1hc2s9InVybCgjYikiIGQ9Ik0xMS4yNSAxNi4xMjVWMjRIMHYtNy44NzV6Ii8+PHBhdGggZmlsbD0iIzM0OThEQiIgbWFzaz0idXJsKCNiKSIgZD0iTTI0IDkuNTYzdjE0LjYyNEgxMi43NVY5LjU2M3oiLz48L2c+PC9zdmc+"
                    }[e]
                },
                brand: function(e) {
                    return "data:image/svg+xml," + encodeURI({
                        tampermonkey: "<?xml version='1.0' encoding='utf-8'?><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><g id='XMLID_273_'><g id='XMLID_78_'><path id='XMLID_83_' class='st0' d='M304.8,0H95.2C42.6,0,0,42.6,0,95.2v209.6C0,357.4,42.6,400,95.2,400h209.6 c52.6,0,95.2-42.6,95.2-95.2V95.2C400,42.6,357.4,0,304.8,0z M106.3,375C61.4,375,25,338.6,25,293.8c0-44.9,36.4-81.3,81.3-81.3 c44.9,0,81.3,36.4,81.3,81.3C187.5,338.6,151.1,375,106.3,375z M293.8,375c-44.9,0-81.3-36.4-81.3-81.3 c0-44.9,36.4-81.3,81.3-81.3c44.9,0,81.3,36.4,81.3,81.3C375,338.6,338.6,375,293.8,375z'/></g><g id='XMLID_67_' class='st2'><path id='XMLID_74_' class='st3' d='M304.8,0H95.2C42.6,0,0,42.6,0,95.2v209.6C0,357.4,42.6,400,95.2,400h209.6 c52.6,0,95.2-42.6,95.2-95.2V95.2C400,42.6,357.4,0,304.8,0z M106.3,375C61.4,375,25,338.6,25,293.8c0-44.9,36.4-81.3,81.3-81.3 c44.9,0,81.3,36.4,81.3,81.3C187.5,338.6,151.1,375,106.3,375z M293.8,375c-44.9,0-81.3-36.4-81.3-81.3 c0-44.9,36.4-81.3,81.3-81.3c44.9,0,81.3,36.4,81.3,81.3C375,338.6,338.6,375,293.8,375z'/></g></g></svg>",
                        webdav: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'><path d='M537.585 226.56C541.725 215.836 544 204.184 544 192c0-53.019-42.981-96-96-96-19.729 0-38.065 5.954-53.316 16.159C367.042 64.248 315.288 32 256 32c-88.366 0-160 71.634-160 160 0 2.728.07 5.439.204 8.133C40.171 219.845 0 273.227 0 336c0 79.529 64.471 144 144 144h368c70.692 0 128-57.308 128-128 0-61.93-43.983-113.586-102.415-125.44z'/></svg>",
                        yandex: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path d='M153.1 315.8L65.7 512H2l96-209.8c-45.1-22.9-75.2-64.4-75.2-141.1C22.7 53.7 90.8 0 171.7 0H254v512h-55.1V315.8h-45.8zm45.8-269.3h-29.4c-44.4 0-87.4 29.4-87.4 114.6 0 82.3 39.4 108.8 87.4 108.8h29.4V46.5z'/></svg>",
                        firefox: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'><path d='M496 262.5C497.6 380.8 388.9 504 248 504c-106.7 0-190.9-62.5-229.8-151.7-43-97.7-5.7-251.6 70.3-320.3l-2.7 69.7c3.9-5 32.5-6.4 37.1 0C139 71 190.7 48 232.1 47.2c-15.8 13.3-52.2 61.6-49.2 86.2 20.2 6.4 51.1 6.6 67.4 7.7 5 2.8 4.1 19.6-5.8 33.4 0 0-13 18-48.1 24.3l2.7 41.1-37-7.4c-12.4 31.5 17.4 59.4 48.4 54.2 34.3-5.8 45.9-32 70-30.6 23.8 1.4 33.2 14.6 30.1 27.1 0 0-3.9 14.9-29.6 12.4-21.8 34.5-50.4 53.5-97.3 49.4 71.3 59.1 168.3 5.5 192.6-42.8 24.3-48.1 8-122.1-16.3-142.3 28.7 12.4 43.7 27.6 54.2 55.5 5.5-61.9-22.9-132.1-73.8-173.3C436 70.1 494.3 144.2 496 262.5z'/></svg>",
                        chrome: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'><path d='M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z'/></svg>",
                        onedrive: "<svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' data-name='Layer 1' viewBox='0 0 24 24'><title>Artboard 1</title><g id='Templates'><path d='M17,10.57a3,3,0,0,1,1.18.23,3.11,3.11,0,0,1,1,.64,2.82,2.82,0,0,1,.65,1,3,3,0,0,1-1.6,3.95,3.08,3.08,0,0,1-1.16.23H8a4,4,0,0,1-1.56-.31,4,4,0,0,1,0-7.38A4,4,0,0,1,8,8.57a3.54,3.54,0,0,1,.73.07,4.63,4.63,0,0,1,.72-.87,4.72,4.72,0,0,1,.89-.65,4.58,4.58,0,0,1,1-.41,4.79,4.79,0,0,1,1.13-.14,4.37,4.37,0,0,1,1.64.3,4.55,4.55,0,0,1,1.36.84,4.39,4.39,0,0,1,1,1.27A4.66,4.66,0,0,1,17,10.57Z'/></g></svg>",
                        gdrive: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z'/></svg>",
                        dropbox: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 87.2l-151.9 93.9L0 97.5 150.6 0 256 87.2zM0 265.3l150.6 98.3 105.4-88L104.1 181 0 265.3zm256 10.3l105.4 88L512 265.3l-104.1-84.2L256 275.6zM512 97.5L361.4 0 256 87.2l151.9 93.9L512 97.5zM256.3 294.6l-105.7 87.7-45.2-29.5V385l150.9 90.5L407.2 385v-32.2L362 382.3l-105.7-87.7z'/></svg>",
                        instagram: "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='5 4 44 44' style='enable-background:new 5 4 44 44;' xml:space='preserve'><style type='text/css'>.st0{fill:none;}</style><g><rect x='-0.2' y='0.1' class='st0' width='53.8' height='53.4'/><path d='M48.1,26.3c0,4.3,0,7.2-0.1,8.8c-0.2,3.9-1.3,6.9-3.5,9s-5.1,3.3-9,3.5c-1.6,0.1-4.6,0.1-8.8,0.1c-4.3,0-7.2,0-8.8-0.1 c-3.9-0.2-6.9-1.3-9-3.5c-2.1-2.1-3.3-5.1-3.5-9c-0.1-1.6-0.1-4.6-0.1-8.8s0-7.2,0.1-8.8c0.2-3.9,1.3-6.9,3.5-9 c2.1-2.1,5.1-3.3,9-3.5c1.6-0.1,4.6-0.1,8.8-0.1c4.3,0,7.2,0,8.8,0.1c3.9,0.2,6.9,1.3,9,3.5s3.3,5.1,3.5,9 C48,19.1,48.1,22,48.1,26.3z M28.8,8.7c-1.3,0-2,0-2.1,0c-0.1,0-0.8,0-2.1,0c-1.3,0-2.3,0-2.9,0c-0.7,0-1.6,0-2.7,0.1 c-1.1,0-2.1,0.1-2.9,0.3c-0.8,0.1-1.5,0.3-2,0.5c-0.9,0.4-1.7,0.9-2.5,1.6c-0.7,0.7-1.2,1.5-1.6,2.5c-0.2,0.5-0.4,1.2-0.5,2 s-0.2,1.7-0.3,2.9c0,1.1-0.1,2-0.1,2.7c0,0.7,0,1.7,0,2.9c0,1.3,0,2,0,2.1s0,0.8,0,2.1c0,1.3,0,2.3,0,2.9c0,0.7,0,1.6,0.1,2.7 c0,1.1,0.1,2.1,0.3,2.9s0.3,1.5,0.5,2c0.4,0.9,0.9,1.7,1.6,2.5c0.7,0.7,1.5,1.2,2.5,1.6c0.5,0.2,1.2,0.4,2,0.5 c0.8,0.1,1.7,0.2,2.9,0.3s2,0.1,2.7,0.1c0.7,0,1.7,0,2.9,0c1.3,0,2,0,2.1,0c0.1,0,0.8,0,2.1,0c1.3,0,2.3,0,2.9,0 c0.7,0,1.6,0,2.7-0.1c1.1,0,2.1-0.1,2.9-0.3c0.8-0.1,1.5-0.3,2-0.5c0.9-0.4,1.7-0.9,2.5-1.6c0.7-0.7,1.2-1.5,1.6-2.5 c0.2-0.5,0.4-1.2,0.5-2c0.1-0.8,0.2-1.7,0.3-2.9c0-1.1,0.1-2,0.1-2.7c0-0.7,0-1.7,0-2.9c0-1.3,0-2,0-2.1s0-0.8,0-2.1 c0-1.3,0-2.3,0-2.9c0-0.7,0-1.6-0.1-2.7c0-1.1-0.1-2.1-0.3-2.9c-0.1-0.8-0.3-1.5-0.5-2c-0.4-0.9-0.9-1.7-1.6-2.5 c-0.7-0.7-1.5-1.2-2.5-1.6c-0.5-0.2-1.2-0.4-2-0.5c-0.8-0.1-1.7-0.2-2.9-0.3c-1.1,0-2-0.1-2.7-0.1C31.1,8.7,30.1,8.7,28.8,8.7z  M34.4,18.5c2.1,2.1,3.2,4.7,3.2,7.8s-1.1,5.6-3.2,7.8c-2.1,2.1-4.7,3.2-7.8,3.2c-3.1,0-5.6-1.1-7.8-3.2c-2.1-2.1-3.2-4.7-3.2-7.8 s1.1-5.6,3.2-7.8c2.1-2.1,4.7-3.2,7.8-3.2C29.7,15.3,32.3,16.3,34.4,18.5z M31.7,31.3c1.4-1.4,2.1-3.1,2.1-5s-0.7-3.7-2.1-5.1 c-1.4-1.4-3.1-2.1-5.1-2.1c-2,0-3.7,0.7-5.1,2.1s-2.1,3.1-2.1,5.1s0.7,3.7,2.1,5c1.4,1.4,3.1,2.1,5.1,2.1 C28.6,33.4,30.3,32.7,31.7,31.3z M39.9,13c0.5,0.5,0.8,1.1,0.8,1.8c0,0.7-0.3,1.3-0.8,1.8c-0.5,0.5-1.1,0.8-1.8,0.8 s-1.3-0.3-1.8-0.8c-0.5-0.5-0.8-1.1-0.8-1.8c0-0.7,0.3-1.3,0.8-1.8c0.5-0.5,1.1-0.8,1.8-0.8S39.4,12.5,39.9,13z'/></g></svg>",
                        facebook: "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 30 30' style='enable-background:new 0 0 30 30;' xml:space='preserve'><style type='text/css'>.f{}.c{fill:none;}</style><g><circle class='c' cx='15' cy='15' r='13' stroke='black' stroke-width='3'/><path class='f' d='M16.4,23.9v-8.1h2.7l0.4-3.2h-3.1v-2c0-0.9,0.3-1.5,1.6-1.5l1.7,0V6.2c-0.3,0-1.3-0.1-2.4-0.1c-2.4,0-4.1,1.5-4.1,4.2v2.3h-2.7v3.2h2.7v8.1H16.4z'/></g></svg>"
                    }[e]).replace(/%20/g, " ")
                },
                empty: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            },
            render: g,
            getLayouts: f,
            getEditorThemes: ()=>Object.keys(h).map(e=>({
                name: h[e] || e,
                value: e
            }))
        };
        t.a = _
    }
    , function(e, t, n) {
        "use strict";
        var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const a = s(n(4))
            , o = "mtm_visitor"
            , i = "default"
            , r = "pageview"
            , A = "script_update"
            , l = "script"
            , c = "cloud"
            , d = "event"
            , u = "pageview"
            , p = "ping"
            , g = "https://a.tampermonkey.net/matomo.php"
            , m = window.rea
            , h = m.FEATURES.HTML5.LOCALSTORAGE;
        let f, b, k, _ = !1, R = !1;
        const v = ()=>({
            url: g,
            siteId: 5,
            tracker: {
                [i]: {
                    enabled: I(5, 10)
                },
                [l]: {
                    enabled: !0
                },
                [c]: {
                    enabled: I(5, .001)
                }
            }
        })
            , w = ()=>({
            url: g,
            siteId: 6,
            tracker: {
                [i]: {
                    enabled: I(6, 50)
                },
                [l]: {
                    enabled: !0
                },
                [A]: {
                    enabled: I(6, 10)
                },
                [c]: {
                    enabled: I(6, .01)
                }
            }
        })
            , y = {
            default: v,
            gcal: v,
            iikm: ()=>({
                url: g,
                siteId: 4,
                tracker: {
                    [i]: {
                        enabled: I(4, 10)
                    },
                    [l]: {
                        enabled: !0
                    },
                    [c]: {
                        enabled: I(4, 5e-4)
                    }
                }
            }),
            saap: ()=>({
                url: g,
                siteId: 7,
                tracker: {
                    [i]: {
                        enabled: !0
                    },
                    [A]: {
                        enabled: I(7, 10)
                    },
                    [c]: {
                        enabled: I(7, .01)
                    }
                }
            }),
            fire: w,
            firb: w,
            dhdg: ()=>({
                url: g,
                siteId: 3,
                tracker: {
                    [i]: {
                        enabled: I(3, 1)
                    },
                    [l]: {
                        enabled: !0
                    },
                    [A]: {
                        enabled: I(3, 10)
                    },
                    [c]: {
                        enabled: I(3, 5e-4)
                    }
                }
            }),
            mfdh: v,
            heif: ()=>({
                url: "http://a.userscript.grobilan:8081/matomo.php",
                siteId: 2,
                tracker: {
                    [i]: {
                        enabled: !0
                    }
                }
            })
        };
        let C;
        const x = [{
                msg: "a disconnected port"
            }, {
                msg: "Function.prototype.apply: Arguments list has wrong type",
                url: "event_bindings"
            }, {
                msg: "Script error."
            }]
            , G = e=>[...Array(e)].map(()=>Math.floor(16 * Math.random()).toString(16)).join("")
            , M = e=>{
                if (!h)
                    return;
                const t = [e.uuid, e.createTs, e.visitCount, e.currentVisitTs, e.lastVisitTs].join(".");
                h.setItem(o, t)
            }
            , E = e=>{
                const t = e || i
                    , n = C.tracker[t] || C.tracker.default;
                return n.enabled ? {
                    url: C.url,
                    siteId: C.siteId,
                    options: n
                } : null
            }
            , Z = G(6)
            , T = async(e,t,n)=>{
                if (!e)
                    return;
                const s = (()=>{
                        if (!h)
                            return;
                        const e = h.getItem(o);
                        if (!e)
                            return;
                        const t = e.split(".");
                        if (t.length >= 5) {
                            t.unshift("0");
                            const [e,n,s,a,o,i] = t;
                            return {
                                createdNow: !1,
                                newVisitor: e,
                                uuid: n,
                                createTs: s,
                                visitCount: a,
                                currentVisitTs: o,
                                lastVisitTs: i
                            }
                        }
                    }
                )() || (()=>{
                        const e = Math.floor(Date.now() / 1e3).toString()
                            , t = {
                            createdNow: !0,
                            newVisitor: "1",
                            uuid: G(16),
                            createTs: e,
                            visitCount: "0",
                            currentVisitTs: e,
                            lastVisitTs: ""
                        };
                        return M(t),
                            t
                    }
                )();
                let i;
                const r = new Date
                    , A = {
                    idsite: e.siteId,
                    rec: 1,
                    action_name: document.title || m.runtime.short_id,
                    url: location.href,
                    _id: s.uuid,
                    rand: G(4),
                    apiv: 1,
                    h: r.getHours(),
                    m: r.getMinutes(),
                    s: r.getSeconds(),
                    cookie: 1,
                    pv_id: Z
                }
                    , l = {
                    ...A,
                    _idts: Number(s.createTs),
                    _idvc: Number(s.visitCount),
                    _viewts: Number(s.lastVisitTs),
                    res: `${screen.width}x${screen.height}`
                };
                if (t == u) {
                    const e = b ? {
                        gt_ms: b
                    } : {}
                        , t = {
                        ...A,
                        ...l,
                        ...e,
                        new_visit: 1
                    };
                    M((e=>{
                            const t = Math.floor(Date.now() / 1e3).toString();
                            return e.newVisitor = "0",
                                e.visitCount = (Number(e.visitCount) + 1).toString(),
                                e.lastVisitTs = e.currentVisitTs,
                                e.currentVisitTs = t,
                                e
                        }
                    )(s)),
                        i = t
                } else if (t == d) {
                    if (!n)
                        return;
                    i = {
                        ...A,
                        ca: 1,
                        e_c: n.category,
                        e_a: n.action,
                        e_n: n.name,
                        e_v: n.value
                    }
                } else {
                    if (t != p)
                        return;
                    i = {
                        ...A,
                        ...l,
                        ping: 1
                    }
                }
                i = Object.assign(A, i);
                const c = `${e.url}?${a.default.hash2params(i)}`
                    , g = document.createElement("img");
                g.src = c,
                    g.onload = ()=>{
                        document.body.removeChild(g)
                    }
                    ,
                    g.onerror = ()=>{}
                    ,
                    document.body.appendChild(g)
            }
            , I = (e,t)=>{
                let n = 100 * Math.random() < t;
                if (h)
                    try {
                        let s, a;
                        const o = ["wsr", e, t].join("_")
                            , i = Date.now()
                            , r = 864e7;
                        if (s = h.getItem(o)) {
                            try {
                                a = JSON.parse(s)
                            } catch (e) {}
                            (!a || a.ts + r < i) && (a = {
                                ts: i,
                                w: n
                            })
                        } else
                            a = {
                                ts: i,
                                w: n
                            };
                        n = a.w,
                            h.setItem(o, JSON.stringify(a))
                    } catch (e) {}
                return n
            }
            , U = e=>{
                _ && (R = e,
                    R ? f && F && (F(),
                        F = void 0) : k && (clearInterval(k),
                        k = void 0))
            }
        ;
        let F = ()=>{
                T(E(r), u),
                    k = window.setInterval(()=>T(E(r), p), 6e5)
            }
        ;
        const j = (e,t,n)=>{
            if (!R || !e.search)
                return;
            void 0 === t && (t = ""),
            void 0 === n && (t += " " + window.location.href,
                n = "");
            let s = !1;
            x.forEach(n=>{
                    (n.msg || n.url) && (n.msg && -1 == e.indexOf(n.msg) || n.url && -1 == t.indexOf(n.url) || (s = !0))
                }
            ),
            s || T(E("error"), d, {
                category: "Error",
                action: e,
                name: t + ":" + n
            })
        }
            , B = {
            init: (e,t,n)=>{
                const s = ((null == n ? void 0 : n.version) || "") + " ";
                C = (y[m.runtime.short_id] || y.default)(),
                    window.onerror = (t,n,a,o,i)=>{
                        let r = "";
                        if (i)
                            try {
                                r = i.stack || ""
                            } catch (e) {}
                        j(t.toString(), s + e + "@" + m.extension.urls.prepareForReport(n || ""), [a + ":" + o, r].join(";"))
                    }
                    ,
                    document.onsecuritypolicyviolation = t=>{
                        let n = "";
                        if (t)
                            try {
                                n = t.stack
                            } catch (e) {}
                        j("CSP violation of " + t.effectiveDirective, s + e + "@" + m.extension.urls.prepareForReport(t.documentURI), [t.sourceFile, " -> ", t.lineNumber + ":" + t.columnNumber, n].join(";"))
                    }
                    ,
                (null == n ? void 0 : n.started) && (b = Date.now() - n.started.getTime()),
                    _ = !0,
                    f = !!(null == n ? void 0 : n.trackView),
                    U(t)
            }
            ,
            setEnabled: U,
            isActive: function(e) {
                return R && !!E(e)
            },
            tC: (e,t,n)=>{
                if (!R)
                    return;
                let s = ""
                    , a = "";
                "init" === t ? (a = "Initialized",
                    s = e) : "error" === t && (a = "Error",
                    s = e + " -> " + n),
                    T(E(c), d, {
                        category: "Cloud",
                        action: a,
                        name: s
                    })
            }
            ,
            tS: (e,t,n,s)=>{
                if (!R)
                    return;
                const a = `${e}${n ? ` [${n.token}#${n.id}]` : s ? ` <${s}>` : ""}`;
                let o = ""
                    , i = null;
                if ("i" === t)
                    o = "Installed";
                else if ("u" === t)
                    o = "Updated",
                        i = E(A);
                else if ("m" === t)
                    o = "Revealed";
                else {
                    if ("r" !== t)
                        return;
                    o = "Removed"
                }
                T(i || E(l), d, {
                    category: "Script",
                    action: o,
                    name: a
                })
            }
            ,
            tE: j,
            tG: (e,t,n)=>{
                if (!R)
                    return;
                let s = ""
                    , a = "";
                "clicked" === e ? (a = "Click",
                    s = t + ":" + n) : "button" === e ? (a = "Button",
                    s = t) : "dialog" === e && (a = "Dialog"),
                    T(E("begging"), d, {
                        category: "Begging",
                        action: a,
                        name: s
                    })
            }
        };
        t.default = B
    }
    , function(e, t, n) {
        "use strict";
        var s = n(3)
            , a = n(5);
        let o;
        const i = e=>e && "http" == e.substr(0, 4)
            , r = ["internal", "user-agent", "accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
            , A = {
            "cache-control": "no-cache",
            pragma: "no-cache"
        }
            , l = {
            "cache-control": "max-age=0, must-revalidate"
        }
            , c = e=>{
            if (e) {
                const t = {};
                return Object.keys(e).forEach(n=>{
                        let s = n
                            , i = e[n];
                        if (o.prefix)
                            A = n.toLowerCase(),
                            (r.includes(A) || 0 === A.indexOf("proxy-") || 0 === A.indexOf("sec-")) && (s = o.prefix + n,
                                i = null === i ? "" : a.default.encodeS(i));
                        else if (null === i)
                            return;
                        var A;
                        t[s] = i
                    }
                ),
                    t
            }
        }
            , d = e=>({
            responseXML: "",
            responseText: "",
            response: null,
            readyState: 4,
            responseHeaders: "",
            status: 0,
            statusText: "",
            error: e = e || "Forbidden"
        })
            , u = e=>{
            if ("Blob" === e.type)
                return new Blob([a.default.str2arrbuf(e.value)]);
            if ("File" === e.type)
                return new File([a.default.str2arrbuf(e.value)],e.name,{
                    type: e.meta,
                    lastModified: e.lastModified || Date.now()
                });
            if ("FormData" == e.type) {
                const t = new FormData;
                return Object.keys(e.value).forEach(n=>{
                        const s = "Array" === e.value[n].type
                            , a = u(e.value[n])
                            , o = s ? a : [a];
                        o.forEach((e,s)=>{
                                t.append(n, o[s])
                            }
                        )
                    }
                ),
                    t
            }
            if ("Array" === e.type || "Object" === e.type) {
                let t, n, s;
                "Object" === e ? (s = Object.keys(e.value),
                    n = e=>e < s.length ? s[e] : null,
                    t = {}) : (n = t=>t < e.value.length ? t : null,
                    t = []);
                for (let s, a = 0; null !== (s = n(a)); a++)
                    t[s] = u(e.value[s]);
                return t
            }
            return e.value
        }
            , p = e=>{
            const t = {};
            return e && e.split("\n").forEach(e=>{
                    const n = e.match(/^([^:]+): ?(.*)/);
                    if (n) {
                        const e = n[1].toLowerCase();
                        t[e] = (void 0 !== t[e] ? ", " : "") + (n[2] || "").replace(/,/g, "%2C")
                    }
                }
            ),
                t
        }
            , g = "tm-finalurl" + rea.runtime.short_id.toLowerCase()
            , m = "tm-setcookie" + rea.runtime.short_id.toLowerCase();
        var h = (e,t,n,o,i)=>{
                const r = e=>{
                        const t = [];
                        let n, s;
                        return e.headers && (n = e.headers.get(g) || e.url,
                            e.headers.forEach((e,n)=>{
                                    const s = n.toLowerCase();
                                    [g, m].includes(s) || t.push(s + ":" + e)
                                }
                            ),
                        (s = e.headers.get(m)) && t.push("set-cookie:" + s)),
                            {
                                readyState: 4,
                                responseHeaders: t.join("\n"),
                                finalUrl: n,
                                status: e.status,
                                statusText: e.statusText
                            }
                    }
                ;
                let A, f, b;
                const k = e=>{
                        e && (b = !0),
                            R ? R.abort() : b ? _() : _({
                                name: "AbortError",
                                message: "Aborted by user"
                            })
                    }
                    , _ = e=>{
                        let t;
                        f || (b ? (t = r({
                            status: 408,
                            statusText: "Request Timeout"
                        }),
                            o("ontimeout")) : "AbortError" == e.name ? (t = d("aborted"),
                            o("onabort")) : (t = r({
                            status: 408,
                            statusText: e.message || "Request Timeout"
                        }),
                            o("onerror", t)),
                            f = !0,
                            o("ondone", t))
                    }
                ;
                try {
                    const d = {};
                    e.user && e.password,
                        d.method = e.method || "GET",
                        d.redirect = "follow";
                    let g = c(e.headers);
                    e.nocache ? d.cache = "reload" : e.revalidate && (d.cache = "default",
                        g = g || {},
                        g = {
                            ...g,
                            ...l
                        }),
                        e.anonymous ? d.credentials = "omit" : d.credentials = "include",
                    g && (d.headers = new window.Headers(g)),
                    void 0 !== e.data && ("typified" === e.data_type ? d.body = u(e.data) : "string" == typeof e.data ? d.body = e.data : d.body = JSON.stringify(e.data));
                    var R = window.AbortController ? new window.AbortController : null;
                    R && (d.signal = R.signal),
                        window.fetch(e.url, d).then(l=>{
                                if (A && (window.clearTimeout(A),
                                    A = null),
                                    f)
                                    return;
                                const c = r(l);
                                if ((0 !== c.status || c.status < 200 || c.status >= 300) && e.retries > 0)
                                    return e.retries--,
                                        void h(e, t, n, o, i);
                                (()=>{
                                        let t;
                                        return l.ok ? (void 0 !== e.responseType ? (()=>{
                                                let t;
                                                const n = e.responseType ? e.responseType.toLowerCase() : "";
                                                return e.convertBinary ? "document" == n ? (t = p(c.responseHeaders)["content-type"] || "text/html",
                                                    new window.Promise(e=>l.text().then(n=>{
                                                            e({
                                                                document: n,
                                                                contentType: t
                                                            })
                                                        }
                                                    ))) : "arraybuffer" == n || "blob" == n ? l.arrayBuffer().then(e=>a.default.arrbuf2str(e)) : l.text() : "arraybuffer" == e.responseType ? l.arrayBuffer() : "blob" == e.responseType ? l.blob() : "document" == e.responseType ? (t = (p(c.responseHeaders)["content-type"] || "text/xml").split(";")[0],
                                                    (new window.DOMParser).parseFromString(l.text(), t)) : ("json" == e.responseType || console.warn("xhr: responseType", e.responseType, " is not implemented!"),
                                                    l.text())
                                            }
                                        )().then(n=>{
                                                "json" == e.responseType ? c.response = JSON.parse(n) : c.response = n,
                                                    t()
                                            }
                                        ) : void 0 !== e.overrideMimeType && window.TextDecoder ? l.arrayBuffer().then(n=>{
                                                const s = e.overrideMimeType.toLowerCase().match(/charset=([^;]+)/)[1];
                                                c.response = new window.TextDecoder(s).decode(n),
                                                    t()
                                            }
                                        ) : l.text().then(e=>{
                                                c.response = e,
                                                    t()
                                            }
                                        ),
                                            {
                                                done: function(e) {
                                                    t = e
                                                }
                                            }) : (c.responseXML = null,
                                            c.responseText = "",
                                            c.response = null,
                                            {
                                                done: function(e) {
                                                    e()
                                                }
                                            })
                                    }
                                )().done(()=>{
                                        if (e.partialSize && t.onpartial) {
                                            const t = e.convertBinary && c.response ? c.response : c.responseText;
                                            ["response", "responseText", "responseXML"].forEach(e=>{
                                                    delete c[e]
                                                }
                                            ),
                                            t && (t.length > e.partialSize ? (t=>{
                                                    Object(s.splitSlice)(t, parseInt(e.partialSize)).forEach(e=>{
                                                            i("onpartial", {
                                                                partial: e
                                                            })
                                                        }
                                                    )
                                                }
                                            )(t) : c.response_data = t)
                                        }
                                        o("onload", c),
                                            o("ondone", c)
                                    }
                                )
                            }
                        ).catch(_),
                    void 0 !== e.timeout && (A = setTimeout(()=>{
                            A = null,
                                k(!0)
                        }
                        , e.timeout))
                } catch (e) {
                    console.error(e.stack);
                    const t = d(e.message);
                    o("onerror", t),
                        o("ondone", t)
                }
                return {
                    abort: ()=>k()
                }
            }
            , f = (e,t,n,r,m)=>{
                let h, b, k;
                e.anonymous && (h = o.mozAnon ? {
                    mozAnon: !0
                } : {
                    anonymous: !0
                });
                const _ = new XMLHttpRequest(h)
                    , R = t=>{
                    let n = ""
                        , s = e.url;
                    if (_.readyState >= 2) {
                        let e;
                        n = _.getAllResponseHeaders(),
                        n && (n = n.replace(/tm-finalurl[0-9a-zA-Z]*\: .*[\r\n]{1,2}/i, ""),
                            n = n.replace(/tm-setcookie[0-9a-zA-Z]*\:/i, "set-cookie:")),
                        (e = _.getResponseHeader(g) || _.responseURL) && (s = e)
                    }
                    const a = {
                        readyState: _.readyState,
                        responseHeaders: n,
                        finalUrl: s,
                        status: _.readyState >= 2 ? _.status : 0,
                        statusText: _.readyState >= 2 ? _.statusText : ""
                    };
                    return t && 4 == _.readyState ? _.responseType ? (a.responseXML = null,
                        a.responseText = null,
                        a.responseType = _.responseType,
                        a.response = _.response) : (a.responseXML = _.responseXML,
                        a.responseText = _.responseText,
                        a.response = _.response) : (a.responseXML = null,
                        a.responseText = "",
                        a.response = null),
                        a
                }
                    , v = {
                    onload: function() {
                        const o = R(!0);
                        if ((0 !== o.status || o.status < 200 || o.status >= 300) && e.retries > 0)
                            return e.retries--,
                                void f(e, t, n, r, m);
                        (()=>{
                                if (e.convertBinary && o.response) {
                                    const e = o.responseType ? o.responseType.toLowerCase() : "";
                                    if (b && e !== b && console.warn("xhr: requested responseType " + b + " differs from received " + e),
                                    "document" == e || "document" == b)
                                        if ("string" == typeof o.response) {
                                            const e = p(o.responseHeaders)["content-type"] || "text/html";
                                            o.response = {
                                                document: o.response,
                                                contentType: e
                                            }
                                        } else {
                                            const e = o.response
                                                , t = e.contentType || "text/html";
                                            try {
                                                o.response = {
                                                    document: (new XMLSerializer).serializeToString(e.documentElement),
                                                    contentType: t
                                                }
                                            } catch (n) {
                                                const s = "unable to serialize content type " + t;
                                                console.warn("xhr: ", s, e),
                                                    o.response = {
                                                        error: s,
                                                        contentType: t
                                                    }
                                            }
                                        }
                                    else if ("json" == e)
                                        o.response = JSON.stringify(o.response);
                                    else {
                                        if ("blob" == e) {
                                            let e;
                                            const t = new FileReader;
                                            return t.onload = ()=>{
                                                o.response = a.default.arrbuf2str(t.result),
                                                    e()
                                            }
                                                ,
                                                t.readAsArrayBuffer(o.response),
                                                {
                                                    done: function(t) {
                                                        e = t
                                                    }
                                                }
                                        }
                                        "arraybuffer" == e && (o.response = a.default.arrbuf2str(o.response))
                                    }
                                }
                                return {
                                    done: function(e) {
                                        e()
                                    }
                                }
                            }
                        )().done(()=>{
                                if (e.partialSize && t.onpartial) {
                                    const t = e.convertBinary && o.response ? o.response : o.responseText;
                                    ["response", "responseText", "responseXML"].forEach(e=>{
                                            delete o[e]
                                        }
                                    ),
                                    t && (t.length > e.partialSize ? (n = t,
                                        Object(s.splitSlice)(n, parseInt(e.partialSize)).forEach(e=>{
                                                m("onpartial", {
                                                    partial: e
                                                })
                                            }
                                        )) : o.response_data = t)
                                }
                                var n;
                                r("onload", o),
                                4 == o.readyState && r("ondone", o)
                            }
                        )
                    },
                    onerror: function() {
                        const s = R();
                        if (4 == s.readyState && 200 != s.status && 0 != s.status && e.retries > 0)
                            return e.retries--,
                                void f(e, t, n, r, m);
                        r("onerror", s),
                            r("ondone", s)
                    },
                    onloadstart: function() {
                        m("onloadstart", ()=>R())
                    },
                    onreadystatechange: function() {
                        m("onreadystatechange", ()=>R())
                    },
                    onprogress: function(e) {
                        m("onprogress", ()=>{
                                const t = R();
                                return y(e, t, t)
                            }
                        )
                    },
                    ontimeout: function() {
                        const e = R();
                        r("ontimeout"),
                            r("ondone", e)
                    },
                    onabort: function() {
                        const e = d("aborted");
                        r("onabort"),
                            r("ondone", e)
                    }
                }
                    , w = 0 == Object.keys(v).concat(["ondone"]).filter(e=>!!t[e]).length;
                if (w)
                    throw new Error("Synchronous XHR is not supported anymore");
                var y = (e,t,n)=>{
                        void 0 === n && (n = {});
                        try {
                            let s = null
                                , a = null;
                            if (e.lengthComputable || e.total > 0)
                                s = e.loaded,
                                    a = e.total;
                            else {
                                const n = !_.responseType || ["", "text"].includes(_.responseType) ? _.responseText : null;
                                let o = Number(p(t.responseHeaders)["content-length"] || "");
                                const i = t.readyState > 2 && n ? n.length : 0;
                                0 == o && (o = -1),
                                    s = e.loaded || i,
                                    a = e.total || o
                            }
                            n.lengthComputable = e.lengthComputable,
                                n.loaded = s,
                                n.done = s,
                                n.position = s,
                                n.total = a,
                                n.totalSize = a
                        } catch (e) {}
                        return n
                    }
                ;
                Object.keys(v).forEach(e=>{
                        (t[e] || ["ontimeout", "onload", "onerror", "onabort"].includes(e)) && (_[e] = v[e])
                    }
                );
                try {
                    if (!n.internal && !i(e.url))
                        throw new Error("Invalid scheme of url: " + e.url);
                    _.open(e.method || "GET", e.url, !w, e.user, e.password);
                    let s = c(e.headers);
                    (e.nocache || e.revalidate) && (s = s || {},
                        e.nocache ? s = {
                            ...s,
                            ...A
                        } : e.revalidate && (s = {
                            ...s,
                            ...l
                        })),
                    s && Object.keys(s).forEach(e=>{
                            try {
                                _.setRequestHeader(e, s[e])
                            } catch (t) {
                                console.warn("xhr: rejected header", e, s[e])
                            }
                        }
                    ),
                    void 0 !== e.overrideMimeType && _.overrideMimeType(e.overrideMimeType),
                    void 0 !== e.responseType && (b = e.responseType.toLowerCase(),
                    ["document", "json"].includes(b) || (_.responseType = b)),
                    void 0 !== e.timeout && (_.timeout = e.timeout),
                        void 0 !== e.data ? ("typified" === e.data_type ? _.send(u(e.data)) : "string" == typeof e.data ? _.send(e.data) : _.send(JSON.stringify(e.data)),
                        t.onprogress && _.upload && (_.upload.onprogress = v.onprogress)) : _.send()
                } catch (e) {
                    console.error(e.stack);
                    const t = d(e.message);
                    r("onerror", t),
                        r("ondone", t)
                }
                return k = k || {},
                    Object(s.copy)({
                        abort: function() {
                            _.abort()
                        }
                    }, k)
            }
        ;
        const b = {
            run: (e,t,n)=>{
                void 0 === n && (n = {});
                const s = {
                        ...t || {}
                    }
                    , a = (e,t)=>{
                        s[e] && s[e]("function" == typeof t ? t() : t)
                    }
                    , r = (e,t)=>{
                        s[e] && (a(e, t),
                            s[e] = null)
                    }
                ;
                if (!n.internal && !i(e.url)) {
                    console.warn("xhr: invalid scheme of url:", e.url);
                    const t = d("Invalid scheme");
                    return r("onerror", t),
                        void r("ondone", t)
                }
                const A = window.fetch && e.url && "http" == e.url.substr(0, 4)
                    , l = !o.mozAnon && e.anonymous
                    , c = e.fetch;
                return A && (l || c) ? h(e, s, n, r, a) : f(e, s, n, r, a)
            }
            ,
            setConfig: function(e) {
                o = e
            },
            getConfig: function() {
                return o
            },
            makeErrorResponse: d,
            parseCookie: e=>{
                const t = e.split(";").filter(e=>"string" == typeof e && !!e.trim())
                    , n = t.shift().split("=")
                    , s = n.shift()
                    , a = n.join("=")
                    , o = {
                    name: s,
                    value: decodeURIComponent(a)
                };
                return t.forEach((function(e) {
                        var t = e.split("=")
                            , n = t.shift().trimLeft().toLowerCase()
                            , s = t.join("=");
                        if ("expires" === n) {
                            const e = new Date(decodeURIComponent(s));
                            isNaN(e.getTime()) || (o.expires = e)
                        } else
                            "max-age" === n ? o.maxAge = parseInt(s, 10) : "secure" === n ? o.secure = !0 : "httponly" === n ? o.httpOnly = !0 : "samesite" === n ? o.sameSite = s : o[n] = s
                    }
                )),
                    o
            }
            ,
            parseHeaders: p
        };
        t.a = b
    }
    , function(e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "vendor", (function() {
                    return u
                }
            )),
            n.d(t, "getRaw", (function() {
                    return g
                }
            )),
            n.d(t, "require", (function() {
                    return p
                }
            )),
            n.d(t, "get", (function() {
                    return h
                }
            ));
        let s = [];
        const a = {}
            , o = {}
            , i = (e,t,n)=>{
                var i = ()=>{
                        e.every(e=>!!r[e]) ? n() : s.push(i)
                    }
                ;
                (e = "string" == typeof e ? [e] : e).forEach(e=>{
                        if (void 0 === r[e] && void 0 === a[e]) {
                            const n = window.setTimeout(()=>{
                                    o[e] || (delete a[e],
                                        c(e),
                                        m(rea.extension.getURL(e + ".js"), ()=>{
                                                t ? d(e, null, {}) : console.log("registry: finished loading " + e + ".js ")
                                            }
                                        ))
                                }
                                , 0);
                            a[e] = ()=>{
                                window.clearTimeout(n),
                                    delete a[e]
                            }
                        }
                    }
                ),
                    i()
            }
        ;
        var r = {};
        const A = {}
            , l = {}
            , c = e=>{
            o[e] = !0
        }
            , d = (e,t,n,i)=>{
            if (!r[e] || i) {
                let i;
                A[e] = t,
                    r[e] = n,
                    delete o[e],
                (i = a[e]) && i(),
                    (()=>{
                            const e = s;
                            for (s = []; e.length; )
                                e.pop()()
                        }
                    )()
            }
        }
            , u = (e,t)=>i(e, !0, t)
            , p = (e,t)=>i(e, !1, t)
            , g = (e,t)=>{
            let n;
            if (void 0 !== (n = l[e]))
                t && t(n);
            else {
                const s = rea.extension.getURL(e);
                try {
                    const a = new XMLHttpRequest;
                    if (XMLHttpRequest.onlyasync) {
                        if (!t)
                            return void console.warn("registry: async xhr without a callback!");
                        a.open("GET", s),
                            a.onload = ()=>{
                                t(a.responseText)
                            }
                            ,
                            a.onerror = ()=>{
                                t()
                            }
                            ,
                            a.send(null)
                    } else
                        a.open("GET", s, !1),
                            a.send(null),
                            n = a.responseText,
                        n || console.warn("registry: content of " + e + " is null!"),
                        t && t(n)
                } catch (e) {
                    console.log("getRawContent " + e)
                }
            }
            return n
        }
            , m = (e,t)=>{
            let n = 1;
            const s = ()=>{
                    0 == --n && t && t()
                }
            ;
            (e = "string" == typeof e ? [e] : e).forEach(e=>{
                    n++;
                    try {
                        rea.page.addScript(e, t=>{
                                t || console.warn("registry: self.load " + e + " failed! "),
                                    s()
                            }
                        )
                    } catch (t) {
                        console.warn("registry: self.load " + e + " failed! ", t),
                            s()
                    }
                }
            ),
                s()
        }
            , h = (e,...t)=>{
            let n;
            const s = r[e];
            return "function" == typeof s ? n = s.apply(void 0, t) : s && (n = s),
                n
        }
    }
    , function(e, t, n) {
        "use strict";
        var s = n(1)
            , a = n(4)
            , o = n(3)
            , i = n(5)
            , r = n(8)
            , A = n(10)
            , l = n.n(A)
            , c = n(11);
        const d = rea.FEATURES;
        let u, p;
        const g = r.a.createQueue(1)
            , m = e=>{
            const t = Object(s.Deferred)();
            return i.default.blob2str(e, (e,n)=>{
                    n ? t.reject(n) : t.resolve(e)
                }
            ),
                t.promise()
        }
            , h = e=>s.Deferred.Breach(e ? e.responseText || e.statusText : null)
            , f = (e,t)=>{
            const n = (e ? e.split("/") : []).concat(t ? [t] : []).join("/");
            return n ? ("/" == n.substr(0, 1) ? "" : "/") + n : ""
        }
            , b = function(e) {
            let t = {
                type: e,
                extend: function(e) {
                    return t = ((e,t)=>(t = new t(e),
                        Object.keys(e).forEach(n=>{
                                const s = Object.getOwnPropertyDescriptor(e, n);
                                if (s.get) {
                                    const e = {
                                        get: s.get,
                                        enumerable: !0
                                    };
                                    s.set && (e.set = s.set),
                                        Object.defineProperty(t, n, e)
                                } else
                                    t[n] = t[n] || e[n]
                            }
                        ),
                        Object.keys(t).forEach(n=>{
                                const s = Object.getOwnPropertyDescriptor(t, n);
                                s.get || s.set || (e[n] = e[n] || t[n])
                            }
                        ),
                        e.config = t.config = {
                            ...e.config || {},
                            ...t.config || {}
                        },
                        t))(t, e)
                },
                request: function(e) {
                    const t = ()=>{
                            const t = Object(s.Deferred)()
                                , n = e=>{
                                console.log("rest service: request failed", e),
                                    t.reject(e)
                            }
                                , a = "xml" === e.responseType
                                , o = "headers" === e.responseType;
                            return (a || o) && delete e.responseType,
                                u(e, {
                                    onload: function(s) {
                                        if ([200, 201, 204, 207].includes(s.status)) {
                                            if (a)
                                                if (e.anonymous || e.fetch) {
                                                    const e = new window.DOMParser;
                                                    s.result = e.parseFromString(s.responseText, "text/xml")
                                                } else
                                                    s.result = s.responseXML;
                                            else
                                                s.result = o ? c.a.parseHeaders(s.responseHeaders) : s.response;
                                            t.resolve(s)
                                        } else
                                            n(s)
                                    },
                                    onerror: n,
                                    ontimeout: n,
                                    onprogress: t.notify
                                }, {
                                    internal: !0
                                }),
                                t.promise()
                        }
                    ;
                    return e.no_queue ? t() : g.add(t)
                },
                error: function(t) {
                    let n = t.status;
                    try {
                        n = n + " | " + t.responseText
                    } catch (e) {}
                    l.a.tC(e, "error", "request: " + n)
                },
                wait: function(e) {
                    return function() {
                        return e.apply(this, arguments).then(e=>e, e=>h(e))
                    }
                }
            };
            return t
        }
            , k = function(e) {
            const t = e.type;
            let n, i = [], r = null;
            const A = {
                config: {
                    auth_prefix: "Bearer"
                },
                changes: (()=>{
                        let e;
                        return {
                            listen: function() {
                                return e || (e = Object(s.Deferred)(),
                                A.watch && A.watch.start()),
                                    e.promise()
                            },
                            notify: function(t) {
                                e.notify(t)
                            }
                        }
                    }
                )(),
                request: function(t) {
                    return t.no_auth || (t.headers = t.headers || {},
                        t.headers.Authorization = A.config.auth_prefix + " " + A.credentials.access_token),
                        e.request(t)
                },
                oauth: (()=>{
                        let e;
                        const i = {
                            run: function() {
                                if (n)
                                    return n;
                                let a = Object(s.Deferred)();
                                const r = n = a.promise();
                                e = "!!" + t + "-" + Object(o.createUUID)();
                                let c = A.credentials ? A.credentials.refresh_token : null;
                                const g = (e,t)=>{
                                        A.credentials = t,
                                            a.resolve(),
                                            a = null,
                                        e && e.close()
                                    }
                                ;
                                return (()=>{
                                        if (!A.config.refresh_supported || !c)
                                            return s.Deferred.Pledge();
                                        const e = Object(s.Deferred)()
                                            , n = ()=>{
                                                c = null,
                                                    delete A.credentials.refresh_token
                                            }
                                        ;
                                        return u({
                                            url: i.getRefreshUrl(c),
                                            fetch: !d.RUNTIME.SAFARI
                                        }, {
                                            onload: function(e) {
                                                const s = i.onUrl(e.finalUrl);
                                                s && (s.error || !s.access_token ? (l.a.tC(t, "error", "auth refresh token: " + (s.error || "!access_token")),
                                                    n()) : g(null, s))
                                            },
                                            onerror: n,
                                            ondone: e.resolve
                                        }),
                                            e.promise()
                                    }
                                )().then(()=>{
                                        if (!a)
                                            return;
                                        if (!A.config.refresh_supported)
                                            return s.Deferred.Pledge();
                                        const e = Object(s.Deferred)()
                                            , n = p({
                                            url: i.getRefreshUrl()
                                        });
                                        return n.promise.progress(e=>{
                                                let s;
                                                a && (s = i.onUrl(e.url)) && (s.error || !s.access_token ? (l.a.tC(t, "error", "auth refresh: " + (s.error || "!access_token")),
                                                    A.config.refresh_supported = !1) : g(n, s))
                                            }
                                        ).always(e.resolve),
                                            e.promise()
                                    }
                                ).then(()=>{
                                        if (!a)
                                            return;
                                        const e = Object(s.Deferred)()
                                            , n = p({
                                            url: i.getAuthUrl()
                                        });
                                        return n.promise.progress(e=>{
                                                let s;
                                                a && (s = i.onUrl(e.url)) && (s.error || !s.access_token ? l.a.tC(t, "error", "auth: " + (s.error || "!access_token")) : g(n, s))
                                            }
                                        ).always(e.resolve),
                                            e.promise()
                                    }
                                ).done(()=>{
                                        n = null,
                                        a && a.reject("auth_failed")
                                    }
                                ),
                                    r
                            },
                            getAuthUrl: function() {
                                return A.config.request_uri + "?" + a.default.hash2params({
                                    response_type: A.config.response_type,
                                    client_id: A.config.client_id,
                                    redirect_uri: A.config.redirect_uri,
                                    state: e,
                                    scope: A.config.scope
                                })
                            },
                            getRefreshUrl: function(t) {
                                const n = {
                                    client_id: A.config.client_id,
                                    redirect_uri: A.config.redirect_uri,
                                    state: e,
                                    scope: A.config.scope,
                                    refresh_token: t
                                };
                                return A.config.redirect_uri + "?" + a.default.hash2params(n)
                            },
                            onUrl: function(t) {
                                let n, s;
                                if (t && 0 === t.indexOf(A.config.redirect_uri) && (s = a.default.parse(t)) && (n = a.default.params2hash(s)) && (n.access_token || n.error) && n.state === e)
                                    return {
                                        uid: n.uid,
                                        access_token: n.access_token,
                                        refresh_token: n.refresh_token,
                                        error: n.error
                                    }
                            }
                        };
                        return i
                    }
                )(),
                wait: function(t) {
                    return e.wait((function() {
                            if (A.credentials.access_token)
                                return t.apply(this, arguments);
                            {
                                const e = arguments
                                    , n = Object(s.Deferred)();
                                return i.push((function() {
                                        n.consume(t.apply(this, e))
                                    }
                                )),
                                    A.oauth.run().done(()=>{
                                            i.forEach(e=>{
                                                    e()
                                                }
                                            ),
                                                i = []
                                        }
                                    ).fail(e=>{
                                            n.reject(e)
                                        }
                                    ),
                                    n.promise()
                            }
                        }
                    ))
                }
            }
                , c = d.HTML5.LOCALSTORAGE;
            return Object.defineProperty(A, "credentials", {
                get: function() {
                    if (null === r) {
                        if (l.a.tC(t, "init"),
                            c)
                            try {
                                const e = JSON.parse(c.getItem(A.config.storage_key));
                                r = {
                                    uid: e.uid,
                                    access_token: e.access_token,
                                    refresh_token: e.refresh_token
                                }
                            } catch (e) {}
                        r = r || {}
                    }
                    return r
                },
                set: function(e) {
                    if (c)
                        try {
                            c.setItem(A.config.storage_key, JSON.stringify({
                                uid: e.uid,
                                access_token: e.access_token,
                                refresh_token: e.refresh_token
                            }))
                        } catch (e) {}
                    r = e
                },
                enumerable: !0
            }),
                A
        }
            , _ = function(e) {
            const t = e.type;
            let n = null;
            const a = {
                config: {},
                changes: (()=>{
                        let e;
                        return {
                            listen: function() {
                                return e || (e = Object(s.Deferred)(),
                                a.watch && a.watch.start()),
                                    e.promise()
                            },
                            notify: function(t) {
                                e.notify(t)
                            }
                        }
                    }
                )(),
                request: function(t) {
                    return a.credentials.basic_auth ? (t.no_auth || (t.headers = t.headers || {},
                        t.headers.Authorization = "Basic " + a.credentials.basic_auth),
                        e.request(t)) : s.Deferred.Breach("Authentication failed")
                },
                wait: function(t) {
                    return e.wait((function() {
                            return t.apply(this, arguments)
                        }
                    ))
                }
            };
            return Object.defineProperty(a, "credentials", {
                get: function() {
                    return null === n && (l.a.tC(t, "init"),
                        n = {
                            basic_auth: a.config.basic_auth
                        }),
                        n
                },
                set: function(e) {
                    n = e
                },
                enumerable: !0
            }),
                a
        }
            , R = function(e) {
            let t, n, i, A, l, c, d, u, p, g = null, m = null;
            const h = e=>{
                let t;
                return e && (t = e.firstChild.nextSibling ? e.firstChild.nextSibling : e.firstChild),
                    t
            }
                , b = t=>e.wait((function() {
                    const e = arguments;
                    return w.init().then((function() {
                            return t.apply(this, e)
                        }
                    ))
                }
            ))
                , k = (e,t)=>{
                let n, s;
                if ((n = e.getElementsByTagNameNS("*", t)[0]) && (s = n.firstChild))
                    return s.nodeValue
            }
                , _ = e=>{
                const s = []
                    , a = e.getElementsByTagNameNS("*", "response");
                for (let e = 0; e < a.length; e++) {
                    const r = a[e];
                    let A = k(r, "href");
                    A = A.replace(/\/$/, "");
                    const l = r.getElementsByTagNameNS("*", "propstat")[0].getElementsByTagNameNS("*", "prop")[0]
                        , c = k(l, "getlastmodified")
                        , d = k(l, "getetag")
                        , u = k(l, "getcontentlength")
                        , p = l.getElementsByTagNameNS("*", "resourcetype")[0].getElementsByTagNameNS("*", "collection")[0]
                        , g = A.replace(new RegExp("^(" + [Object(o.escapeForRegExpURL)(n + t) + "/?", Object(o.escapeForRegExpURL)(i + t) + "/?"].join("|") + ")"), "");
                    if (p)
                        ;
                    else {
                        const e = {
                            etag: d,
                            name: g,
                            modifiedTime: c ? new Date(c).getTime() : void 0,
                            size: u >= 0 ? u : void 0,
                            removed: -1 == u
                        };
                        s.push(e)
                    }
                }
                return s
            }
                , R = e=>k(e, "td:cursor")
                , v = (e,t)=>((t = t || {}).set_current_list && (l = {}),
                w.request({
                    method: "PROPFIND",
                    url: e,
                    headers: {
                        "Content-Type": "text/xml; charset=UTF-8",
                        Depth: void 0 !== t.depth ? t.depth : 1
                    },
                    responseType: "xml"
                }).then(e=>{
                        const n = e.result;
                        let a;
                        if (null === n || !(a = h(n)) || !a.childNodes)
                            return s.Deferred.Breach();
                        const o = _(a);
                        if (t.set_current_list) {
                            const e = R(a);
                            e && (c = e),
                                o.forEach(e=>{
                                        l[e.name] = e
                                    }
                                )
                        }
                        return o
                    }
                ));
            var w = {
                config: {
                    watch_interval: 36e5
                },
                request: function(t) {
                    return t.headers = t.headers || {},
                        t.headers["User-Agent"] = "Tampermonkey",
                        t.headers.Cookie = "",
                        e.request.apply(this, arguments).then(e=>e, e=>!e || [403, 500].includes(e.status) ? (t.backoff = 2 * (t.backoff || 1e3),
                            r.a.sleep(t.backoff).then(()=>w.request(t))) : 404 == e.status ? s.Deferred.Pledge(e) : (w.error(e),
                            s.Deferred.Breach(e)))
                },
                init: function() {
                    if (A)
                        return A;
                    t = f(w.config.root, w.config.path),
                        n = w.config.url || "",
                    "/" == n.slice(-1) && (n = n.slice(0, -1)),
                        i = a.default.parse(n).pathname,
                    "/" == i.slice(-1) && (i = i.slice(0, -1));
                    const e = Object(s.Deferred)();
                    A = e.promise();
                    const o = n + t;
                    return w.request({
                        method: "OPTIONS",
                        url: n,
                        responseType: "headers"
                    }).done(e=>{
                            const t = e.result;
                            let n;
                            t && (n = t["access-control-allow-methods"]) && n.includes("EDITOR") && (p = !0)
                        }
                    ).always(()=>{
                            v(o, {
                                depth: 0
                            }).done(e.resolve).fail(()=>{
                                    const a = [];
                                    s.Deferred.onebyone(t.split("/").filter(e=>e).map(e=>{
                                            a.push(e);
                                            const t = a.join("/");
                                            return ()=>w.request({
                                                method: "MKCOL",
                                                url: n + "/" + t,
                                                headers: {
                                                    "Content-Type": "text/xml; charset=UTF-8"
                                                },
                                                responseType: "xml"
                                            })
                                        }
                                    )).done(e.resolve).fail(e.reject)
                                }
                            )
                        }
                    ),
                        A
                },
                list: b(e=>v(n + t, {
                    set_current_list: !0
                }).then(t=>{
                        const n = {};
                        return t.map(t=>{
                                if (!e) {
                                    if (n[t.name])
                                        return;
                                    n[t.name] = !0
                                }
                                return {
                                    name: t.name,
                                    size: t.size || 0,
                                    id: t.id,
                                    etag: t.etag,
                                    md5: t.md5Checksum,
                                    modified: t.modifiedTime,
                                    precision: 1e3,
                                    removed: t.removed
                                }
                            }
                        ).filter(e=>e)
                    }
                )),
                get: b(e=>{
                        const s = e.name || e;
                        return w.request({
                            method: "GET",
                            url: n + f(t, s),
                            headers: {
                                "Content-Type": "text/xml; charset=UTF-8"
                            },
                            responseType: "arraybuffer"
                        }).then(e=>{
                                const t = e.result;
                                return new Blob([t])
                            }
                        )
                    }
                ),
                put: b((e,s,a)=>{
                        const o = e.name || e;
                        let i, r, A;
                        const l = {
                            "Content-Type": "application/octet-stream"
                        }
                            , c = null === m;
                        return a && a.lastModified && (i = a.lastModified,
                            A = new Date(a.lastModified).toISOString(),
                            r = a.lastModified / 1e3,
                        (m || c) && (l["X-OC-Mtime"] = r)),
                            w.request({
                                method: "PUT",
                                url: n + f(t, o),
                                headers: l,
                                data_type: "typified",
                                data: {
                                    type: "raw",
                                    value: s
                                },
                                responseType: "headers"
                            }).then(e=>{
                                    const s = e.result;
                                    if (s && c) {
                                        let e;
                                        m = !("accepted" != s["x-oc-mtime"] && (!s.date || !(e = new Date(s.date).getTime()) || e != i && e != Math.floor(r)))
                                    }
                                    if (!m && !g && A)
                                        return w.request({
                                            method: "PROPPATCH",
                                            url: n + f(t, o),
                                            headers: {
                                                "Content-Type": "text/xml; charset=UTF-8"
                                            },
                                            responseType: "xml",
                                            data: [`<?xml version="1.0"?>\n                            <d:propertyupdate xmlns:d="DAV:">\n                                <d:set>\n                                    <d:prop>\n                                        <d:getlastmodified>${A}</d:getlastmodified>\n                                    </d:prop>\n                                </d:set>\n                            </d:propertyupdate>`].join("")
                                        }).then(e=>{
                                                const t = e.result;
                                                let n, s, a;
                                                t && (n = t.childNodes[0]) && (s = n.getElementsByTagNameNS("*", "status")[0]) && (a = s.firstChild.nodeValue) && -1 != a.search(/HTTP\/[0-9\.]+ 403/) && (console.warn("WebDAV: no way to set file modification date! This might cause redundant up and downloads."),
                                                    g = !0)
                                            }
                                            , ()=>{
                                                console.warn("WebDAV: no way to set file modification date! This might cause redundant up and downloads."),
                                                    g = !0
                                            }
                                        )
                                }
                            )
                    }
                ),
                delete: b(e=>{
                        const s = e.name || e;
                        return w.request({
                            method: "DELETE",
                            url: n + f(t, s),
                            headers: {
                                "Content-Type": "text/xml; charset=UTF-8"
                            }
                        })
                    }
                ),
                watch: {
                    start: function() {
                        if (d)
                            return;
                        d = !0;
                        let a = null;
                        const o = ()=>{
                                if (u = null,
                                    d)
                                    if (!1 === a) {
                                        const s = l;
                                        v(n + t, {
                                            set_current_list: !0
                                        }).then(()=>{
                                                s && (Object.keys(s).forEach(t=>{
                                                        const n = l[t]
                                                            , a = s[t];
                                                        n ? a.modifiedTime != n.modifiedTime && e.changes.notify({
                                                            time: n.modifiedTime,
                                                            name: n.name
                                                        }) : e.changes.notify({
                                                            time: Date.now(),
                                                            name: a.name,
                                                            removed: !0
                                                        })
                                                    }
                                                ),
                                                    Object.keys(l).forEach(t=>{
                                                            if (!s[t]) {
                                                                const n = l[t];
                                                                e.changes.notify({
                                                                    time: n.modifiedTime,
                                                                    name: n.name
                                                                })
                                                            }
                                                        }
                                                    ))
                                            }
                                        ).fail(e=>{
                                                console.warn("WebDAV: file changes check failed", e)
                                            }
                                        ).always(()=>{
                                                u = window.setTimeout(o, w.config.watch_interval)
                                            }
                                        )
                                    } else {
                                        let i = 100;
                                        ((e,t)=>{
                                                const n = {
                                                    "Content-Type": "text/xml; charset=UTF-8",
                                                    Depth: 1,
                                                    Timeout: 90
                                                };
                                                return t && (n.Cursor = t),
                                                    w.request({
                                                        method: "SUBSCRIBE",
                                                        url: e,
                                                        headers: n,
                                                        responseType: "xml",
                                                        no_queue: !0
                                                    }).then(e=>{
                                                            const t = e.result;
                                                            let n;
                                                            return null === t ? s.Deferred.Pledge({
                                                                changes: [],
                                                                cursor: c
                                                            }) : (n = h(t)) && n.childNodes ? {
                                                                changes: _(n),
                                                                cursor: R(n)
                                                            } : s.Deferred.Breach()
                                                        }
                                                    )
                                            }
                                        )(n + t, c).then(t=>{
                                                const n = t.changes;
                                                c = t.cursor,
                                                    i = 1,
                                                    n.forEach(t=>{
                                                            e.changes.notify({
                                                                time: t.modifiedTime,
                                                                name: t.name,
                                                                removed: t.removed
                                                            })
                                                        }
                                                    )
                                            }
                                            , ()=>{
                                                if (null !== a)
                                                    return i *= 2,
                                                        r.a.sleep(i);
                                                a = !1
                                            }
                                        ).always(o)
                                    }
                            }
                        ;
                        b(()=>d ? (o(),
                            s.Deferred.Pledge()) : s.Deferred.Breach())()
                    },
                    stop: function() {
                        d = !1,
                        u && (window.clearTimeout(u),
                            u = null)
                    }
                },
                getRemoteUrl: function(e) {
                    if (p)
                        return n + f(t, e) + "?method=editor#bypass=true"
                },
                getRemoteDomains: function() {
                    return [a.default.parse(n).origin.replace(/^.*:\/\//, "")]
                }
            };
            return w
        }
            , v = {
            init: function(e) {
                p = e,
                    u = c.a.run
            },
            drive: function() {
                let e, t;
                return (e = d.HTML5.LOCALSTORAGE) && (t = e.getItem("dropbox_poll_interval")) || (t = 18e5),
                    new b("drive").extend(k).extend((function(e) {
                            const n = "appDataFolder";
                            let A, l;
                            const c = {
                                config: {
                                    redirect_uri: "https://auth.tampermonkey.net/oauth.php",
                                    refresh_supported: !0,
                                    request_uri: "https://accounts.google.com/o/oauth2/v2/auth",
                                    client_id: "408438522028-3cgn3t3jas3fak7isbnfod1q4h15g2fv.apps.googleusercontent.com",
                                    storage_key: "gd_config",
                                    scope: "https://www.googleapis.com/auth/drive.appdata",
                                    response_type: "token",
                                    watch_interval: t
                                },
                                request: function(t) {
                                    return e.request.apply(this, arguments).then(e=>e, e=>{
                                            if (!e || [403, 500].includes(e.status))
                                                return t.backoff = 2 * (t.backoff || 1e3),
                                                    r.a.sleep(t.backoff).then(()=>c.request(t));
                                            if ([400, 401].includes(e.status)) {
                                                if (console.warn("Google Drive: authentication error", e),
                                                    delete c.credentials.access_token,
                                                    !t.retry_auth)
                                                    return t.retry_auth = !0,
                                                        c.oauth.run().then(()=>c.request(t))
                                            } else if (404 == e.status)
                                                return s.Deferred.Pledge(e);
                                            return c.error(e),
                                                s.Deferred.Breach(e)
                                        }
                                    )
                                },
                                list: e.wait(e=>{
                                        let t = [];
                                        const o = Object(s.Deferred)()
                                            , i = e=>"https://www.googleapis.com/drive/v3/files?" + a.default.hash2params({
                                            spaces: n,
                                            pageToken: e,
                                            orderBy: "modifiedTime desc",
                                            fields: "nextPageToken, files(id, size, name, modifiedTime, md5Checksum)",
                                            pageSize: 500
                                        })
                                            , r = e=>c.request({
                                            method: "GET",
                                            url: e,
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then(e=>{
                                                const n = e.result
                                                    , s = n ? JSON.parse(n) : {
                                                    files: []
                                                };
                                                if (t = t.concat(s.files),
                                                    s.nextPageToken)
                                                    return r(i(s.nextPageToken));
                                                o.resolve(t)
                                            }
                                        );
                                        return r(i()),
                                            o.promise().then(t=>{
                                                    const n = {};
                                                    return t.map(t=>{
                                                            if (!e) {
                                                                if (n[t.name])
                                                                    return;
                                                                n[t.name] = !0
                                                            }
                                                            return {
                                                                name: t.name,
                                                                size: t.size || 0,
                                                                id: t.id,
                                                                md5: t.md5Checksum,
                                                                modified: new Date(t.modifiedTime).getTime()
                                                            }
                                                        }
                                                    ).filter(e=>e)
                                                }
                                            )
                                    }
                                ),
                                get: e.wait(e=>{
                                        const t = e.id || e;
                                        return c.request({
                                            method: "GET",
                                            url: "https://www.googleapis.com/drive/v3/files/" + t + "?" + a.default.hash2params({
                                                spaces: n,
                                                alt: "media"
                                            }),
                                            responseType: "arraybuffer"
                                        }).then(e=>{
                                                const t = e.result;
                                                return new Blob([t])
                                            }
                                        )
                                    }
                                ),
                                put: e.wait((e,t,r)=>{
                                        const A = e.name || e
                                            , l = e.id
                                            , d = Object(o.createUUID)();
                                        return s.Deferred.Pledge().then(()=>{
                                                if (t)
                                                    return m(t)
                                            }
                                        ).then(e=>{
                                                const t = r && r.lastModified ? new Date(r.lastModified).toISOString() : void 0
                                                    , s = [];
                                                return s.push("--" + d),
                                                    s.push("Content-Type: application/json"),
                                                    s.push(""),
                                                    s.push(JSON.stringify({
                                                        name: A,
                                                        parents: l ? void 0 : [n],
                                                        modifiedTime: t
                                                    })),
                                                    s.push("--" + d),
                                                e && (s.push("Content-Type: application/octet-stream"),
                                                    s.push("Content-Transfer-Encoding: base64"),
                                                    s.push(""),
                                                    s.push(i.default.Base64.encode(e)),
                                                    s.push("--" + d + "--")),
                                                    s.push(""),
                                                    c.request({
                                                        method: l || !e ? "PATCH" : "POST",
                                                        url: "https://www.googleapis.com/" + (e ? "upload/" : "") + "drive/v3/files" + (l ? "/" + l : "") + "?" + a.default.hash2params({
                                                            uploadType: "multipart"
                                                        }),
                                                        headers: {
                                                            "Content-Type": "multipart/related; boundary=" + d
                                                        },
                                                        data: s.join("\r\n")
                                                    })
                                            }
                                        )
                                    }
                                ),
                                delete: e.wait(e=>{
                                        const t = e.id || e;
                                        return c.request({
                                            method: "DELETE",
                                            url: "https://www.googleapis.com/drive/v3/files/" + t + "?" + a.default.hash2params({
                                                spaces: n
                                            }),
                                            headers: {
                                                "Content-Type": " application/json"
                                            }
                                        })
                                    }
                                ),
                                revoke: e.wait(()=>{
                                        const t = c.credentials.access_token;
                                        return t ? e.request({
                                            method: "GET",
                                            url: "https://accounts.google.com/o/oauth2/revoke?" + a.default.hash2params({
                                                token: t
                                            })
                                        }) : s.Deferred.Breach()
                                    }
                                ),
                                compare: function(e, t) {
                                    const n = Object(s.Deferred)();
                                    let a;
                                    return (a = e.md5) && a == i.default.MD5(t, "utf-8") ? n.resolve(!0) : n.resolve(!1),
                                        n.promise()
                                },
                                watch: {
                                    start: function() {
                                        if (A)
                                            return;
                                        let t;
                                        A = !0;
                                        const n = ()=>{
                                                l = null,
                                                A && c.request({
                                                    method: "GET",
                                                    url: "https://www.googleapis.com/drive/v3/changes/?" + a.default.hash2params({
                                                        pageToken: t,
                                                        spaces: "appDataFolder",
                                                        pageSize: 1e3,
                                                        includeRemoved: !0
                                                    }),
                                                    headers: {
                                                        "Content-Type": " application/json"
                                                    }
                                                }).then(n=>{
                                                        const a = n.result;
                                                        if (!A)
                                                            return s.Deferred.Breach();
                                                        const o = a ? JSON.parse(a) : {};
                                                        if (!(t = o.newStartPageToken))
                                                            return console.warn("Google Drive: watch token error", a),
                                                                c.watch.stop();
                                                        o.nextPageToken && console.warn("Google Drive: too much changes", a),
                                                            (o.changes || []).forEach(t=>{
                                                                    let n, s;
                                                                    "file" === t.type && (s = t.file) && (n = Date.parse(t.time),
                                                                    isNaN(n) && (n = Date.now()),
                                                                        e.changes.notify({
                                                                            id: s.id,
                                                                            time: n,
                                                                            name: s.name,
                                                                            removed: t.removed
                                                                        }))
                                                                }
                                                            )
                                                    }
                                                ).fail(e=>{
                                                        console.warn("Google Drive: file changes check failed", e)
                                                    }
                                                ).always(()=>{
                                                        l = window.setTimeout(n, c.config.watch_interval)
                                                    }
                                                )
                                            }
                                        ;
                                        e.wait(()=>A ? c.request({
                                            method: "GET",
                                            url: "https://www.googleapis.com/drive/v3/changes/startPageToken",
                                            headers: {
                                                "Content-Type": " application/json"
                                            }
                                        }).then(e=>{
                                                const s = e.result
                                                    , a = s ? JSON.parse(s) : {};
                                                if (!(t = a.startPageToken))
                                                    return console.warn("Google Drive: watch token error", s),
                                                        c.watch.stop();
                                                n()
                                            }
                                        ) : s.Deferred.Breach())()
                                    },
                                    stop: function() {
                                        A = !1,
                                        l && (window.clearTimeout(l),
                                            l = null)
                                    }
                                }
                            };
                            return c
                        }
                    ))
            },
            dropbox: function(e) {
                const t = e.path || "";
                let n, a;
                return (n = d.HTML5.LOCALSTORAGE) && (a = n.getItem("dropbox_poll_interval")) || (a = 18e5),
                    new b("dropbox").extend(k).extend((function(e) {
                            let n, o, A, l, c = !0;
                            const d = e=>{
                                    let n = [];
                                    const a = Object(s.Deferred)()
                                        , o = e=>u.request({
                                        method: "POST",
                                        url: "https://api.dropboxapi.com/2/files/list_folder" + (e ? "/continue" : ""),
                                        headers: {
                                            "Content-Type": " application/json"
                                        },
                                        data: {
                                            path: e ? void 0 : f(t),
                                            cursor: e
                                        }
                                    }).then(e=>{
                                            const t = e.result
                                                , s = t ? JSON.parse(t) : {
                                                entries: []
                                            };
                                            if (n = n.concat(s.entries),
                                            s.has_more && s.cursor)
                                                return o(s.cursor);
                                            a.resolve({
                                                list: n,
                                                cursor: s.cursor
                                            })
                                        }
                                    ).fail(a.reject);
                                    return c ? (c = !1,
                                        u.put(".version", new Blob([rea.extension.manifest.version])).then(()=>{
                                                o(e)
                                            }
                                        ).fail(a.reject)) : o(e),
                                        a.promise()
                                }
                            ;
                            var u = {
                                config: {
                                    redirect_uri: "https://auth.tampermonkey.net/oauth.php",
                                    request_uri: "https://www.dropbox.com/oauth2/authorize",
                                    client_id: "gq3auc9yym0e21y",
                                    storage_key: "db_config",
                                    response_type: "token",
                                    watch_interval: a
                                },
                                request: function(t) {
                                    return e.request.apply(this, arguments).then(e=>e, e=>!e || [500, 429].includes(e.status) ? (t.backoff = 2 * (t.backoff || 1e3),
                                        r.a.sleep(t.backoff).then(()=>u.request(t))) : [401].includes(e.status) && (console.warn("Dropbox: authentication error", e),
                                        delete u.credentials.access_token,
                                        !t.retry_auth) ? (t.retry_auth = !0,
                                        u.oauth.run().then(()=>u.request(t))) : (u.error(e),
                                        s.Deferred.Breach(e)))
                                },
                                list: e.wait(e=>d().then(t=>{
                                        const n = {};
                                        return l = t.cursor,
                                            t.list.map(t=>{
                                                    if (!e) {
                                                        if (n[t.name])
                                                            return;
                                                        n[t.name] = !0
                                                    }
                                                    return {
                                                        name: t.name,
                                                        size: t.size,
                                                        dropbox_hash: t.content_hash,
                                                        modified: new Date(t.client_modified).getTime(),
                                                        precision: 1e3
                                                    }
                                                }
                                            ).filter(e=>e)
                                    }
                                ).always(()=>{
                                        A && l && (A(),
                                            A = null)
                                    }
                                )),
                                get: e.wait(e=>{
                                        const n = e.name || e;
                                        return u.request({
                                            method: "POST",
                                            url: "https://content.dropboxapi.com/2/files/download",
                                            headers: {
                                                "Dropbox-API-Arg": JSON.stringify({
                                                    path: f(t, n)
                                                })
                                            },
                                            responseType: "arraybuffer"
                                        }).then(e=>{
                                                const t = e.result;
                                                return new Blob([t])
                                            }
                                        )
                                    }
                                ),
                                put: e.wait((e,n,s)=>{
                                        const a = e.name || e
                                            , o = s && s.lastModified ? new Date(s.lastModified).toISOString().match(/[^:]*:[^:]*:[^:.a-zA_Z]*/)[0] + "Z" : void 0;
                                        return u.request({
                                            method: "POST",
                                            url: "https://content.dropboxapi.com/2/files/upload",
                                            headers: {
                                                "Dropbox-API-Arg": JSON.stringify({
                                                    path: f(t, a),
                                                    client_modified: o,
                                                    mode: "overwrite"
                                                }),
                                                "Content-Type": "application/octet-stream"
                                            },
                                            data_type: "typified",
                                            data: {
                                                type: "raw",
                                                value: n
                                            }
                                        })
                                    }
                                ),
                                delete: e.wait(e=>{
                                        const n = e.name || e;
                                        return u.request({
                                            method: "POST",
                                            url: "https://api.dropboxapi.com/2/files/delete",
                                            headers: {
                                                "Content-Type": " application/json"
                                            },
                                            data: {
                                                path: f(t, n)
                                            }
                                        })
                                    }
                                ),
                                compare: function(e, t) {
                                    const n = Object(s.Deferred)();
                                    if (window.crypto && window.ArrayBuffer) {
                                        const s = 4194304
                                            , a = i.default.str2arrbuf(t, "utf-8")
                                            , o = []
                                            , r = a.byteLength;
                                        let A = 1;
                                        const l = (e,t)=>{
                                                const n = new Uint8Array(e.byteLength + t.byteLength);
                                                return n.set(new Uint8Array(e), 0),
                                                    n.set(new Uint8Array(t), e.byteLength),
                                                    n.buffer
                                            }
                                            , c = ()=>{
                                                if (0 == --A) {
                                                    let t = new window.ArrayBuffer;
                                                    o.forEach(e=>{
                                                            t = l(t, e)
                                                        }
                                                    ),
                                                        window.crypto.subtle.digest("SHA-256", t).then(t=>{
                                                                const s = Array.from(new Uint8Array(t)).map(e=>("00" + e.toString(16)).slice(-2)).join("");
                                                                n.resolve(s == e.dropbox_hash)
                                                            }
                                                        )
                                                }
                                            }
                                        ;
                                        for (let e = 0, t = 0; t < r; t += s,
                                            e++)
                                            (e=>{
                                                    o.push(null),
                                                        A++,
                                                        window.crypto.subtle.digest("SHA-256", a.slice(t, t + Math.min(s, r - t))).then(t=>{
                                                                o[e] = t,
                                                                    c()
                                                            }
                                                            , ()=>{
                                                                console.warn("Dropbox: unable to calculate SHA-256 hashes"),
                                                                    n.reject()
                                                            }
                                                        )
                                                }
                                            )(e);
                                        c()
                                    } else
                                        console.warn("Dropbox: unable to calculate SHA-256 hashes"),
                                            n.reject();
                                    return n.promise()
                                },
                                watch: {
                                    start: function() {
                                        if (n)
                                            return;
                                        n = !0;
                                        let t = 0;
                                        const a = ()=>{
                                                if (o = null,
                                                    t = 0,
                                                    n)
                                                    return l ? void u.request({
                                                        method: "POST",
                                                        url: "https://notify.dropboxapi.com/2/files/list_folder/longpoll",
                                                        headers: {
                                                            "Content-Type": " application/json"
                                                        },
                                                        no_auth: !0,
                                                        no_queue: !0,
                                                        data: {
                                                            cursor: l,
                                                            timeout: 180
                                                        }
                                                    }).then(e=>{
                                                            const a = e.result;
                                                            if (!n)
                                                                return s.Deferred.Breach();
                                                            const o = a ? JSON.parse(a) : {};
                                                            return o.backoff && (t = 1e3 * o.backoff),
                                                                o.changes ? r.a.sleep(6e4).then(()=>d(l)).then(e=>(l = e.cursor) ? e.list : (console.warn("Dropbox: watch token error", a),
                                                                    u.watch.stop())) : null
                                                        }
                                                    ).then(t=>{
                                                            t && t.forEach(t=>{
                                                                    let n;
                                                                    const s = t[".tag"];
                                                                    ["file", "deleted"].includes(s) && (n = Date.parse(t.server_modified),
                                                                        e.changes.notify({
                                                                            id: t.id,
                                                                            time: n,
                                                                            name: t.name,
                                                                            removed: "deleted" == s
                                                                        }))
                                                                }
                                                            )
                                                        }
                                                    ).fail(e=>{
                                                            console.warn("Dropbox: file changes check failed", e)
                                                        }
                                                    ).always(()=>{
                                                            o = window.setTimeout(a, t + u.config.watch_interval)
                                                        }
                                                    ) : (console.warn("Dropbox: watch token error", l),
                                                        u.watch.stop())
                                            }
                                        ;
                                        e.wait(()=>n ? (l ? a() : A = a,
                                            s.Deferred.Pledge()) : s.Deferred.Breach())()
                                    },
                                    stop: function() {
                                        n = !1,
                                        o && (window.clearTimeout(o),
                                            o = null)
                                    }
                                },
                                getRemoteDomains: function() {
                                    return ["dropbox.com", "dropboxapi.com"]
                                }
                            };
                            return u
                        }
                    ))
            },
            onedrive: function(e) {
                const t = e.path || "";
                let n, a, o;
                return (n = d.HTML5.LOCALSTORAGE) && (a = n.getItem("onedrive_poll_interval")) || (a = 18e5),
                    new b("onedrive").extend(k).extend((function(e) {
                            let n, i;
                            const A = e=>{
                                    const n = Object(s.Deferred)();
                                    let a = [];
                                    const i = s=>l.request({
                                        method: "GET",
                                        url: s || "https://api.onedrive.com/v1.0/drive/special/approot:" + f(t) + ":/children",
                                        headers: {
                                            "Content-Type": " application/json"
                                        }
                                    }).then(t=>{
                                            const s = t.result
                                                , r = s ? JSON.parse(s) : {
                                                value: []
                                            };
                                            if (a = a.concat(r.value.map(e=>{
                                                    const t = (e.fileSystemInfo ? e.fileSystemInfo.lastModifiedDateTime : null) || e.lastModifiedDateTime
                                                        , n = e.file && e.file.hashes ? e.file.hashes.sha1Hash : void 0;
                                                    return {
                                                        id: e.id,
                                                        name: e.name,
                                                        size: e.size,
                                                        sha1: n,
                                                        modified: new Date(t).getTime()
                                                    }
                                                }
                                            )),
                                                r["@odata.nextLink"])
                                                return i(r["@odata.nextLink"]);
                                            e.set_current_list && (o = a),
                                                n.resolve(a)
                                        }
                                    );
                                    return i(),
                                        n.promise()
                                }
                            ;
                            var l = {
                                config: {
                                    redirect_uri: "https://auth.tampermonkey.net/oauth.php",
                                    request_uri: "https://login.live.com/oauth20_authorize.srf",
                                    client_id: "000000004C1A3122",
                                    storage_key: "od_config",
                                    response_type: "token",
                                    scope: "onedrive.appfolder",
                                    watch_interval: a
                                },
                                getRemoteDomains: function() {
                                    return ["onedrive.live.com"]
                                },
                                request: function(t) {
                                    return e.request.apply(this, arguments).then(e=>e, e=>{
                                            if (!e || [403, 500].includes(e.status))
                                                return t.backoff = 2 * (t.backoff || 1e3),
                                                    r.a.sleep(t.backoff).then(()=>l.request(t));
                                            if ([401].includes(e.status)) {
                                                if (console.warn("OneDrive: authentication error", e),
                                                    delete l.credentials.access_token,
                                                    !t.retry_auth)
                                                    return t.retry_auth = !0,
                                                        l.oauth.run().then(()=>l.request(t))
                                            } else if (404 == e.status)
                                                return s.Deferred.Pledge(e);
                                            return l.error(e),
                                                s.Deferred.Breach(e)
                                        }
                                    )
                                },
                                list: e.wait(()=>A({
                                    set_current_list: !0
                                })),
                                get: e.wait(e=>{
                                        const n = e.name || e;
                                        return l.request({
                                            method: "GET",
                                            url: "https://api.onedrive.com/v1.0/drive/special/approot:" + f(t, encodeURIComponent(n)) + ":/content",
                                            responseType: "arraybuffer"
                                        }).then(e=>{
                                                const t = e.result;
                                                return new Blob([t])
                                            }
                                        )
                                    }
                                ),
                                put: e.wait((e,n,s)=>{
                                        const a = e.name || e
                                            , o = encodeURIComponent(a.replace(/[#%<>:"|\?\*\/\\]/g, "-"));
                                        return l.request({
                                            method: "PUT",
                                            url: "https://api.onedrive.com/v1.0/drive/special/approot:" + f(t, o) + ":/content",
                                            headers: {
                                                "Content-Type": "application/octet-stream"
                                            },
                                            data_type: "typified",
                                            data: {
                                                type: "raw",
                                                value: n
                                            }
                                        }).then(e=>{
                                                const t = s && s.lastModified ? new Date(s.lastModified).toISOString() : void 0;
                                                if (!t)
                                                    return e;
                                                const n = e.result
                                                    , a = JSON.parse(n);
                                                return l.request({
                                                    method: "PATCH",
                                                    url: "https://api.onedrive.com/v1.0/drive/items/" + a.id,
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    data: JSON.stringify({
                                                        fileSystemInfo: {
                                                            lastModifiedDateTime: t
                                                        }
                                                    })
                                                })
                                            }
                                        )
                                    }
                                ),
                                delete: e.wait(e=>{
                                        const n = e.name || e;
                                        return l.request({
                                            method: "DELETE",
                                            url: "https://api.onedrive.com/v1.0/drive/special/approot:" + f(t, encodeURIComponent(n))
                                        })
                                    }
                                ),
                                watch: {
                                    start: function() {
                                        if (n)
                                            return;
                                        n = !0;
                                        const t = ()=>{
                                                if (i = null,
                                                    !n)
                                                    return;
                                                const s = o;
                                                A({
                                                    set_current_list: !0
                                                }).then(()=>{
                                                        if (!s)
                                                            return;
                                                        const t = {}
                                                            , n = {};
                                                        o.forEach(e=>{
                                                                t[e.id] = e
                                                            }
                                                        ),
                                                            s.forEach(e=>{
                                                                    n[e.id] = e
                                                                }
                                                            ),
                                                            Object.keys(n).forEach(s=>{
                                                                    const a = t[s]
                                                                        , o = n[s];
                                                                    a ? o.modified != a.modified && e.changes.notify({
                                                                        time: a.modified,
                                                                        name: a.name
                                                                    }) : e.changes.notify({
                                                                        time: Date.now(),
                                                                        name: o.name,
                                                                        removed: !0
                                                                    })
                                                                }
                                                            ),
                                                            Object.keys(t).forEach(s=>{
                                                                    if (!n[s]) {
                                                                        const n = t[s];
                                                                        e.changes.notify({
                                                                            time: n.modified,
                                                                            name: n.name
                                                                        })
                                                                    }
                                                                }
                                                            )
                                                    }
                                                ).fail(e=>{
                                                        console.warn("OneDrive: file changes check failed", e)
                                                    }
                                                ).always(()=>{
                                                        i = window.setTimeout(t, l.config.watch_interval)
                                                    }
                                                )
                                            }
                                        ;
                                        l.wait(()=>n ? (t(),
                                            s.Deferred.Pledge()) : s.Deferred.Breach())()
                                    },
                                    stop: function() {
                                        n = !1,
                                        i && (window.clearTimeout(i),
                                            i = null)
                                    }
                                }
                            };
                            return l
                        }
                    ))
            },
            yandex: function(e) {
                let t, n;
                return (t = d.HTML5.LOCALSTORAGE) && (n = t.getItem("yandex_poll_interval")) || (n = 18e5),
                    new b("yandex").extend(k).extend(R).extend((function(t) {
                            const a = t.request;
                            t.request = e=>(()=>{
                                    if (e.headers = e.headers || {},
                                        e.headers["X-Requested-With"] = "XMLHttpRequest",
                                    window.forge_sha256 && "PUT" == e.method && e.data && "raw" == e.data.type && e.data.value) {
                                        const t = Object(s.Deferred)();
                                        return m(e.data.value).then(t=>{
                                                e.headers.Etag = i.default.MD5(t),
                                                    e.headers.Sha256 = window.forge_sha256(t, "ASCII")
                                            }
                                        ).always(t.resolve),
                                            t.promise()
                                    }
                                    return s.Deferred.Pledge()
                                }
                            )().then(()=>a(e).then(e=>e, t=>t && [401].includes(t.status) && (console.warn("Yandex: authentication error", t),
                                delete A.credentials.access_token,
                                !e.retry_auth) ? (e.retry_auth = !0,
                                A.oauth.run().then(()=>a(e))) : t));
                            const o = t.init;
                            let r;
                            t.init = ()=>{
                                if (r)
                                    return r;
                                const e = Object(s.Deferred)();
                                return r = e.promise(),
                                    A.request({
                                        method: "GET",
                                        url: "https://cloud-api.yandex.net/v1/disk/"
                                    }).done(e=>{
                                            const t = e.result
                                                , n = t ? JSON.parse(t) : {};
                                            n.total_space && n.used_space && (n.used_space + 5e7 > n.total_space ? console.warn("Yandex: low disk space warning, only " + (n.total_space - n.used_space) + " bytes available") : console.log("Yandex: " + (n.total_space - n.used_space) + " bytes on disk available!"))
                                        }
                                    ).always(()=>{
                                            e.consume(o())
                                        }
                                    ),
                                    r
                            }
                            ;
                            var A = {
                                config: {
                                    root: "/Programs/Tampermonkey",
                                    url: "https://webdav.yandex.ru",
                                    redirect_uri: "https://auth.tampermonkey.net/oauth.php",
                                    refresh_supported: !0,
                                    request_uri: "https://oauth.yandex.com/authorize",
                                    client_id: "a591fcd2ccd248f0baa84222898065f4",
                                    storage_key: "ya_config",
                                    response_type: "token",
                                    auth_prefix: "OAuth",
                                    watch_interval: n,
                                    ...e
                                },
                                getRemoteDomains: function() {
                                    return ["disk.yandex.com"]
                                },
                                list: function(e) {
                                    return t.list(e).then(e=>e.map(e=>(e.md5 = e.etag,
                                        e)))
                                },
                                compare: function(e, t) {
                                    const n = Object(s.Deferred)();
                                    let a;
                                    return (a = e.md5) && a == i.default.MD5(t, "utf-8") ? n.resolve(!0) : n.resolve(!1),
                                        n.promise()
                                }
                            };
                            return A
                        }
                    ))
            },
            webdav: function(e) {
                let t, n;
                (t = d.HTML5.LOCALSTORAGE) && (n = t.getItem("webdav_poll_interval")) || (n = 18e5);
                var s = e.url;
                if (s) {
                    var a = s.toLowerCase();
                    a.startsWith("webdav") ? e.url = s.replace(/^webdav/i, "http") : a.startsWith("http") || (e.url = "http://" + s)
                }
                return new b("webdav").extend(_).extend(R).extend((function() {
                        return {
                            config: {
                                root: "Tampermonkey",
                                watch_interval: n,
                                ...e
                            }
                        }
                    }
                ))
            }
        };
        t.a = v
    }
    , function(e, t, n) {
        "use strict";
        var s = n(1)
            , a = n(2)
            , o = n(13)
            , i = n(8);
        let r = 0;
        const A = {
            ePASTEBIN: 1,
            eCHROMESYNC: 2,
            eSYNCFS: 3,
            eGDRIVE: 4,
            eDROPBOX: 5,
            eWEBDAV: 6,
            eYANDEX: 7,
            eONEDRIVE: 8
        };
        let l = []
            , c = !1;
        const d = (()=>{
                const e = e=>{
                    const t = e.type
                        , n = e.id
                        , A = ".meta.json"
                        , c = ".user.js";
                    let d, u, p = {};
                    return {
                        init: function(e) {
                            return d = o.a[t]({
                                ...e,
                                path: "sync"
                            }),
                                s.Deferred.Pledge().then(()=>{
                                        if (!d.credentials && !e.basic_auth)
                                            return d.list()
                                    }
                                ).then(()=>(u || (u = d.changes.listen(),
                                    u.progress(e=>{
                                            ((e,t)=>{
                                                    if (t != r)
                                                        return;
                                                    const n = e.name
                                                        , s = new RegExp(".meta.json$")
                                                        , o = new RegExp(".user.js$");
                                                    a.a.log("si: cloud file changed", n, e),
                                                    (n.match(s) || n.match(o)) && l.forEach(e=>{
                                                            e(n)
                                                        }
                                                    )
                                                }
                                            )(e, n)
                                        }
                                    )),
                                    !0))
                        },
                        list: e=>d.list(e).then(e=>{
                                p = {};
                                const t = {}
                                    , n = {};
                                let s, o;
                                const i = Date.now();
                                return e.forEach(e=>{
                                        p[e.name] = e;
                                        const r = new RegExp(".meta.json$")
                                            , A = new RegExp(".user.js$");
                                        var l;
                                        e.modified > i ? a.a.log("si: ignore future list item", i, e) : ((s = e.name.match(r)) || (o = e.name.match(A))) && (s ? (e.uuid = l = e.name.replace(r, ""),
                                            e.lastModified = e.modified,
                                            t[l] = e) : o && (l = e.name.replace(A, ""),
                                            n[l] = e))
                                    }
                                ),
                                    Object.keys(t).map(e=>{
                                            let s;
                                            if (s = t[e])
                                                return s.source = n[e],
                                                    s.options = s.options || {},
                                                    s
                                        }
                                    ).filter(e=>e)
                            }
                        ),
                        setSource: (e,t)=>{
                            const n = e + c
                                , o = p[n];
                            let i;
                            return s.Deferred.Pledge(!1).then(()=>{
                                    if (o && d.compare)
                                        return d.compare(o, t)
                                }
                            ).then(e=>e ? (a.a.log("si: remote source data matches, skip upload of", n),
                                s.Deferred.Pledge()) : (i = new Blob([t],{
                                type: "text/plain"
                            }),
                                d.put(o || n, i)))
                        }
                        ,
                        getSource: (e,t)=>{
                            const n = e + c
                                , o = p[n];
                            return o ? s.Deferred.Pledge(!1).then(()=>{
                                    if (t && d.compare)
                                        return d.compare(o, t)
                                }
                            ).then(e=>e ? (a.a.log("si: remote source data matches, skip download of", n),
                                s.Deferred.Pledge(t)) : d.get(o).then(i.a.readAsText)) : (a.a.warn("si: list cache does not contain this UUID", e),
                                s.Deferred.Breach())
                        }
                        ,
                        getMeta: e=>{
                            let t;
                            return (t = p[e + A]) ? d.get(t).then(i.a.readAsText).then(n=>{
                                    let s;
                                    if ((s = (e=>{
                                            let t = null;
                                            try {
                                                t = JSON.parse(e)
                                            } catch (e) {}
                                            return t && t.uuid ? t : (a.a.log("si: unable to parse extended info of " + void 0),
                                                null)
                                        }
                                    )(n)) && (s.uuid = e))
                                        return s.lastModified = t.modified || s.lastModified,
                                            s.precision = t.precision,
                                            s.options = s.options || {},
                                            s
                                }
                            ) : s.Deferred.Breach()
                        }
                        ,
                        setMeta: (e,t)=>{
                            const n = new Blob([JSON.stringify(e)],{
                                type: "text/plain"
                            })
                                , s = e.uuid + A
                                , a = p[s];
                            return d.put(a || s, n, t)
                        }
                        ,
                        remove: e=>{
                            e.options.removed = !0;
                            const t = new Blob([JSON.stringify(e)],{
                                type: "text/plain"
                            });
                            return d.put(e.uuid + A, t).then(()=>{
                                    let t;
                                    if (t = p[e.uuid + c])
                                        return d.delete(t)
                                }
                            )
                        }
                        ,
                        reset: ()=>d.list(!0).then(e=>e.filter(e=>{
                                const t = new RegExp(".meta.json$")
                                    , n = new RegExp(".user.js$");
                                return e.name.match(t) || e.name.match(n)
                            }
                        )).then(e=>{
                                const t = [];
                                return e.forEach(e=>{
                                        t.push((()=>{
                                                const t = Object(s.Deferred)();
                                                return d.delete(e).always(()=>{
                                                        t.resolve()
                                                    }
                                                ),
                                                    t.promise()
                                            }
                                        )())
                                    }
                                ),
                                    s.Deferred.when(t).always(()=>{
                                            p = {}
                                        }
                                    )
                            }
                        ),
                        getRemoteUrl: function(e) {
                            if (d.getRemoteUrl)
                                return d.getRemoteUrl(e.uuid + c)
                        },
                        getRemoteDomains: function() {
                            if (d.getRemoteDomains)
                                return d.getRemoteDomains()
                        }
                    }
                }
                    , t = e({
                    type: "drive",
                    id: A.eGDRIVE
                })
                    , n = e({
                    type: "dropbox",
                    id: A.eDROPBOX
                })
                    , c = e({
                    type: "onedrive",
                    id: A.eONEDRIVE
                })
                    , d = e({
                    type: "webdav",
                    id: A.eWEBDAV
                })
                    , p = e({
                    type: "yandex",
                    id: A.eYANDEX
                })
                    , g = (()=>{
                        let e, t = !1;
                        const n = (t,n)=>{
                                r == A.eCHROMESYNC && "sync" == n && s.Deferred.Pledge().then(()=>{
                                        const s = new RegExp(e + "$");
                                        t && Object.keys(t).forEach(e=>{
                                                const o = t[e];
                                                if (a.a.log('si: storage key "%s" in namespace "%s" changed. Old value was "%s", new value is "%s".', e, n, o.oldValue, o.newValue),
                                                -1 != e.search(s))
                                                    for (let t = 0; t < l.length; t++)
                                                        if (g[e])
                                                            ;
                                                        else {
                                                            const n = c(o.newValue, e);
                                                            n && l[t](e, n)
                                                        }
                                            }
                                        )
                                    }
                                )
                            }
                            , o = e=>{
                                const t = Object(s.Deferred)();
                                let n = [];
                                return e ? i().done(s=>{
                                        n = s.filter(t=>t.item && t.item.uuis == e),
                                            t.resolve(n)
                                    }
                                ).fail(e=>{
                                        t.reject(e)
                                    }
                                ) : t.resolve(n),
                                    t.promise()
                            }
                        ;
                        var i = ()=>u(()=>{
                                    const t = Object(s.Deferred)()
                                        , n = new RegExp(e + "$");
                                    return rea.storage.sync.get(null, e=>{
                                            const s = [];
                                            e && Object.keys(e).forEach(t=>{
                                                    -1 != t.search(n) && s.push({
                                                        key: t,
                                                        item: c(e[t], t)
                                                    })
                                                }
                                            ),
                                                t.resolve(s)
                                        }
                                    ),
                                        t.promise()
                                }
                            )
                            , c = (e,t)=>{
                                let n = null;
                                try {
                                    n = JSON.parse(e)
                                } catch (e) {}
                                return n && (n.url || n.options) ? n : (a.a.log("si: unable to parse extended info of " + t),
                                    null)
                            }
                        ;
                        const d = e=>e.then(e=>{
                                const t = {};
                                if ((e = e.filter(e=>{
                                        if (!t[e.key])
                                            return t[e.key] = !0,
                                                !0
                                    }
                                )).length > 1) {
                                    const t = Object(s.Deferred)()
                                        , n = []
                                        , a = e.pop();
                                    return e.forEach(e=>{
                                            n.push(m(e.key))
                                        }
                                    ),
                                        s.Deferred.when(n).done(()=>{
                                                t.resolve(a)
                                            }
                                        ),
                                        t.promise()
                                }
                                return s.Deferred.Pledge(e[0])
                            }
                        );
                        let p = null;
                        var g = {}
                            , m = e=>{
                                const t = Object(s.Deferred)();
                                return rea.storage.sync.remove(e, ()=>{
                                        const e = rea.runtime.lastError;
                                        e ? t.reject(e) : t.resolve()
                                    }
                                ),
                                    t.promise()
                            }
                            , h = ()=>{
                                const e = Object(s.Deferred)();
                                return rea.storage.sync.set(g, ()=>{
                                        const t = rea.runtime.lastError;
                                        t ? e.reject(t) : (g = {},
                                            e.resolve())
                                    }
                                ),
                                    e.promise()
                            }
                        ;
                        return {
                            init: function() {
                                let o = !0;
                                if (!t)
                                    try {
                                        rea.storage.onChanged.addListener(n),
                                            t = !0
                                    } catch (e) {
                                        a.a.warn("si: error registering sync callback: " + e.message),
                                            o = !1
                                    }
                                return e = "@v2",
                                    s.Deferred.Pledge(o)
                            },
                            list: ()=>s.Deferred.Pledge().then(()=>i()).then(t=>{
                                    const n = new RegExp(e + "$")
                                        , a = [];
                                    return t.forEach(e=>{
                                            const t = e.key
                                                , s = e.item
                                                , o = t.replace(n, "");
                                            let i = null;
                                            if (i = g[t] ? c(g[t], t) : s,
                                                !i)
                                                return;
                                            const r = i.options || {}
                                                , A = !!r.removed;
                                            a.push({
                                                id: o,
                                                uuid: A ? o : i.uuid,
                                                lastModified: A ? r.removed : i.lastModified,
                                                url: i.url,
                                                options: r
                                            })
                                        }
                                    ),
                                        s.Deferred.Pledge(a)
                                }
                            ),
                            setMeta: (t,n)=>{
                                const a = Object(s.Deferred)();
                                return d(o(t.uuid)).done(s=>{
                                        let o, i;
                                        s ? (o = s.key,
                                            i = s.item) : (o = t.uuid + e,
                                            i = {}),
                                            i.url = t.url,
                                            i.options = t.options || {},
                                            i.uuid = t.uuid,
                                        n.lastModified && (i.lastModified = n.lastModified),
                                            g[o] = JSON.stringify(i),
                                        p && window.clearTimeout(p),
                                            p = window.setTimeout(h, 3e3),
                                            a.resolve()
                                    }
                                ),
                                    a.promise()
                            }
                            ,
                            remove: t=>{
                                const n = Object(s.Deferred)();
                                return d(o(t.uuid)).done(s=>{
                                        let a, o;
                                        s ? (a = s.key,
                                            o = s.item) : (a = t.uuid + e,
                                            o = {}),
                                            o.options = o.options || {},
                                            o.options.removed = !0,
                                            g[a] = JSON.stringify(o),
                                        p && window.clearTimeout(p),
                                            p = window.setTimeout(h, 3e3),
                                            n.resolve()
                                    }
                                ),
                                    n.promise()
                            }
                            ,
                            reset: ()=>u(()=>{
                                    const e = Object(s.Deferred)();
                                    return rea.storage.sync.clear(()=>{
                                            g = {},
                                                e.resolve()
                                        }
                                    ),
                                        e.promise()
                                }
                            )
                        }
                    }
                )()
                    , m = {};
                return rea.storage.sync.supported && (m[A.eCHROMESYNC] = g),
                    m[A.eGDRIVE] = t,
                    m[A.eDROPBOX] = n,
                    m[A.eONEDRIVE] = c,
                    m[A.eWEBDAV] = d,
                    m[A.eYANDEX] = p,
                    m
            }
        )();
        var u = (e,t)=>{
                const n = Object(s.Deferred)();
                void 0 === t && (t = 3);
                const o = ()=>{
                        if (c)
                            window.setTimeout(o, 500);
                        else {
                            c = !0;
                            try {
                                e().always(()=>{
                                        c = !1
                                    }
                                ).done((function() {
                                        n.resolve.apply(this, arguments)
                                    }
                                )).fail(()=>{
                                        --t > 0 ? (a.a.log("si: some retries left, wait for", 6e4, "ms"),
                                            window.setTimeout(o, 6e4)) : (a.a.warn("si: no retries left, skipping this sync request!"),
                                            n.reject("no retries left"))
                                    }
                                )
                            } catch (e) {
                                a.a.warn(e),
                                    c = !1,
                                    n.reject(e)
                            }
                        }
                    }
                ;
                return o(),
                    n.promise()
            }
        ;
        const p = {
            init: (e,t)=>(l = [],
                r = e,
                d[r] ? d[r].init(t) : s.Deferred.Breach()),
            debug: function() {},
            addChangeListener: function(e) {
                l.push(e)
            },
            getRemoteUrl: function(e) {
                if (d[r] && d[r].getRemoteUrl)
                    return d[r].getRemoteUrl(e)
            },
            getRemoteDomains: function() {
                if (d[r] && d[r].getRemoteDomains)
                    return d[r].getRemoteDomains()
            },
            caps: (()=>{
                    const e = {};
                    return Object.defineProperties(e, {
                        specialMeta: {
                            get: function() {
                                return d[r] && !!d[r].getMeta
                            },
                            enumerable: !0
                        },
                        syncsSource: {
                            get: function() {
                                return d[r] && !!d[r].getSource
                            },
                            enumerable: !0
                        }
                    }),
                        e
                }
            )(),
            types: A
        };
        ["list", "setMeta", "getMeta", "setSource", "getSource", "reset", "remove"].forEach(e=>{
                p[e] = function() {
                    return d[r] && d[r][e] ? d[r][e].apply(this, arguments) : s.Deferred.Pledge()
                }
            }
        ),
            t.a = e=>(o.a.init(t=>{
                    let n = Object(s.Deferred)();
                    const a = e.openAndWatch({
                            url: t.url
                        }, e=>{
                            e ? n && n.notify(e) : n && (n.resolve("tab closed"),
                                n = null)
                        }
                    );
                    return {
                        promise: n.promise(),
                        close: function() {
                            a.cancel()
                        }
                    }
                }
            ),
                p)
    }
    , function(e, t, n) {
        "use strict";
        var s = n(1)
            , a = n(3)
            , o = n(12);
        const i = rea.FEATURES;
        let r;
        const A = i.RUNTIME.BROWSER_VERSION;
        let l = !0;
        r = i.RUNTIME.CHROME ? A >= 83 ? 2020 : A >= 64 ? 2018 : A >= 59 ? 2017 : A >= 47 ? 2015 : 5 : i.RUNTIME.SAFARI ? A >= 14 ? 2020 : A >= 11 ? 2018 : A >= 10 ? 2017 : A >= 6 ? 2015 : 3 : i.RUNTIME.EDGE ? A >= 83 ? 2020 : A >= 16 ? 2017 : 2016 : i.RUNTIME.FIREFOX ? A >= 77 ? 2020 : A >= 58 ? 2018 : A >= 52 ? 2017 : 2016 : 5;
        const c = {};
        i.RUNTIME.CHROME && A < 77 ? (l = !1,
            console.warn("hint: disable inline ESLint config due to web worker CSP issues", "https://bugs.chromium.org/p/chromium/issues/detail?id=777076", "https://bugs.chromium.org/p/chromium/issues/detail?id=159303")) : i.RUNTIME.EDGE ? (l = !1,
            console.warn("hint: disable inline ESLint config due to web worker CSP issues")) : window.Worker || (l = !1,
            console.warn("hint: disable inline ESLint config because web workers are unavailable and this extension's CSP doesn't allow unsafe eval, which is required for ESLint's dynamic reconfigration"));
        const d = {
            env: {
                es6: r >= 2015,
                browser: !0
            },
            parserOptions: {
                ecmaVersion: r,
                sourceType: "script",
                ecmaFeatures: {
                    globalReturn: !0
                }
            },
            rules: {
                curly: [1, "multi-line"],
                "dot-location": 0,
                "dot-notation": [1, {
                    allowKeywords: !0
                }],
                "no-caller": 1,
                "no-case-declarations": 2,
                "no-div-regex": 0,
                "no-empty-pattern": 2,
                "no-eq-null": 0,
                "no-eval": 1,
                "no-extra-bind": 1,
                "no-fallthrough": 1,
                "no-implicit-globals": 2,
                "no-implied-eval": 1,
                "no-lone-blocks": 1,
                "no-loop-func": 1,
                "no-multi-spaces": 1,
                "no-multi-str": 1,
                "no-native-reassign": 1,
                "no-octal-escape": 2,
                "no-octal": 2,
                "no-proto": 1,
                "no-redeclare": 2,
                "no-return-assign": 1,
                "no-sequences": 1,
                "no-undef": 1,
                "no-useless-call": 1,
                "no-useless-concat": 1,
                "no-with": 1
            }
        }
            , u = {};
        let p;
        Object(a.each)(["uneval", "unsafeWindow", "TM_info", "GM_info", "GM", "GM_addStyle", "GM_deleteValue", "GM_listValues", "GM_getValue", "GM_download", "GM_log", "GM_registerMenuCommand", "GM_unregisterMenuCommand", "GM_openInTab", "GM_setValue", "GM_addValueChangeListener", "GM_removeValueChangeListener", "GM_xmlhttpRequest", "GM_getTab", "GM_setTab", "GM_saveTab", "GM_getTabs", "GM_setClipboard", "GM_notification", "GM_getResourceText", "GM_getResourceURL"], e=>{
                u[e] = "writeable"
            }
        ),
            d.globals = u;
        const g = {};
        let m;
        const h = {
            hint: function(e, t, n) {
                const r = Object(s.Deferred)()
                    , A = r.promise()
                    , h = n || c;
                let f;
                if (t ? (f = t,
                    f.globals = {
                        ...f.globals || {},
                        ...u
                    }) : f = d,
                window.Worker && !i.RUNTIME.SAFARI) {
                    const t = ()=>{
                            p = new Worker("worker/lint.js"),
                                p.onmessage = e=>{
                                    const t = e.data
                                        , n = t.id;
                                    let s, a, o;
                                    n && (s = g[n]) && (a = s.d) && (delete g[n],
                                        (o = t.results) ? (l || (o = o.map(e=>{
                                                let t;
                                                return e.message && (t = e.message.match(/Configuration for rule "([^"]+)"[\s\S]*evaluate a string as JavaScript[\s\S]*/)) && (e.message = 'Rule "' + t[1] + '": ESLint inline configuration is not supported by this browser.',
                                                    e.severity = 1),
                                                    e
                                            }
                                        )),
                                            a.resolve(o)) : a.reject(t.error || "Unknown error")),
                                        b(n)
                                }
                                ,
                                p.postMessage({
                                    method: "base_uri",
                                    value: rea.extension.getURL("/")
                                }),
                                m = null
                        }
                    ;
                    var b = e=>{
                            if (p || t(),
                                e)
                                m = null;
                            else if (m)
                                return;
                            let n, s = Date.now();
                            Object.keys(g).forEach(e=>{
                                    g[e].ts <= s && (n = g[e],
                                        s = n.ts)
                                }
                            ),
                            n && (m = n.id,
                                p.postMessage({
                                    method: n.method,
                                    id: n.id,
                                    config: n.c,
                                    options: n.o,
                                    text: n.t
                                }))
                        }
                    ;
                    A.abort = ()=>{
                        p && (p.terminate(),
                            p = null,
                            b())
                    }
                        ,
                    p || t();
                    const n = Object(a.createUUID)();
                    g[n] = {
                        method: "lint",
                        id: n,
                        d: r,
                        t: `(async () => {${e}})();`,
                        c: f,
                        o: h,
                        ts: Date.now()
                    },
                        b()
                } else
                    Object(o.vendor)("vendor/eslint/eslint", ()=>{
                            try {
                                const t = {
                                    problem: "error",
                                    layout: 1,
                                    suggestion: 1
                                }
                                    , n = new window.eslint.Linter;
                                f.extends && f.extends.includes("eslint:recommended") && (f.rules = f.rules || [],
                                    n.getRules().forEach((function(e, n) {
                                            let s, a, o, i, r;
                                            if (!(e && (a = e.meta) && void 0 === f.rules[n] && (s = a.docs) && s.recommended))
                                                return;
                                            const A = [(a.type ? t[a.type] : null) || 1];
                                            (o = a.schema) && (i = {},
                                                o.forEach(e=>{
                                                        "object" == e.type && Object.keys(e.properties).forEach(t=>{
                                                                const n = e.properties[t].default;
                                                                void 0 !== n && !1 !== n && (i[t] = e.properties[t].default,
                                                                    r = !0)
                                                            }
                                                        )
                                                    }
                                                ),
                                            r && A.push(i)),
                                                f.rules[n] = A
                                        }
                                    )));
                                const s = n.verify(`(async () => {${e}})();`, f, h);
                                r.resolve(s || [])
                            } catch (e) {
                                r.reject(e)
                            }
                        }
                    );
                return A
            },
            globals: u,
            config: d,
            options: c,
            autoHintMaxLength: 5e4
        };
        t.a = h
    }
    , function(e, t) {
        "use strict";
        Object.defineProperties(Promise.prototype, {
            done: {
                value: function(e) {
                    return this.then((...t)=>e.apply(this, t))
                }
            },
            fail: {
                value: function(e) {
                    return this.then(()=>{}
                        , (...t)=>e.apply(this, t))
                }
            },
            always: {
                value: function(e) {
                    return this.then((...t)=>e.apply(this, t), (...t)=>e.apply(this, t))
                }
            }
        }),
            t.a = Promise
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t),
            n(16);
        var s = n(3);
        const a = (e,t,n,a,o,i)=>{
            let r;
            try {
                let A = e + "_" + Object(s.createUniqueId)(n, a);
                if (null != o && (A += "_" + o),
                    r = document.getElementById(A),
                r && i) {
                    const t = document.createElement(e);
                    t.setAttribute("id", A);
                    const n = r.parentNode;
                    n.insertBefore(t, r),
                        n.removeChild(r),
                        r = t
                } else
                    r ? r.inserted = !0 : (r = document.createElement(e),
                        r.setAttribute("id", A));
                t && r.setAttribute("class", t),
                r.__removeChild || (r.__removeChild = r.removeChild,
                        r.removeChild = e=>{
                            delete e.inserted,
                                r.__removeChild(e)
                        }
                ),
                r.__appendChild || (r.__appendChild = r.appendChild,
                        r.appendChild = (e,t)=>{
                            "Array" !== Object(s.toType)(e) && (e = [e]),
                                e.forEach(e=>{
                                        (!e.parentElement && !e.inserted || t) && r.__appendChild(e)
                                    }
                                )
                        }
                ),
                r.__insertBefore || (r.__insertBefore = r.insertBefore,
                        r.insertBefore = (e,t)=>{
                            e.parentElement || e.inserted || r.__insertBefore(e, t)
                        }
                )
            } catch (e) {
                console.log("options: Error:" + e.message)
            }
            return r
        }
            , o = (e,t,n,s,o)=>a(e, null, t, n, s, o);
        var i = n(0)
            , r = n.n(i);
        let A = null
            , l = null;
        const c = (e,t)=>{
                t || (t = {});
                const n = "ct"
                    , s = "0"
                    , i = o("div", n, s, "p")
                    , r = a("div", "curbg", n, s, "c")
                    , A = a("div", t.fixed ? "curmiddle_fixed" : "curmiddle_relative", n, s, "d");
                i.inserted || (i.setAttribute("class", "curouter hide"),
                    i.setAttribute("style", "z-index: 10000"));
                const l = ((e,t,n,s)=>{
                        s || (s = "");
                        const o = a("table", "curtable", t, n, "table" + s)
                            , i = a("tr", "", t, n, "tr2" + s)
                            , r = a("td", "curtableoutertd", t, n, "td1" + s)
                            , A = a("td", "curtableinner", t, n, "td2" + s)
                            , l = a("td", "curtableoutertd", t, n, "td3" + s);
                        return i.appendChild(r),
                            i.appendChild(A),
                            i.appendChild(l),
                            o.appendChild(i),
                        e && A.appendChild(e),
                            o
                    }
                )(e, n, s);
                return A.appendChild(l),
                    i.appendChild(A),
                    i.appendChild(r),
                    i.show = ()=>{
                        i.setAttribute("class", "curouter block")
                    }
                    ,
                    i.hide = ()=>{
                        i.setAttribute("class", "curouter hide")
                    }
                    ,
                    i.remove = ()=>{
                        i.parentNode && i.parentNode.removeChild(i)
                    }
                    ,
                    i.setText = e=>{
                        i.text = e
                    }
                    ,
                    i.print = e=>{
                        i.text && (i.text.textContent = e)
                    }
                    ,
                    document.body.appendChild(i),
                    i
            }
            , d = ()=>{
                const e = document.createElement("div");
                e.setAttribute("class", "curcontainer");
                const t = document.createElement("div");
                t.setAttribute("class", "curwaithead");
                const n = document.createElement("div");
                return n.setAttribute("class", "curwaitmsg"),
                    e.appendChild(t),
                    e.appendChild(n),
                    {
                        outer: e,
                        inner: n
                    }
            }
        ;
        var u = e=>{
            if (document.body) {
                if (void 0 === e && (e = r.a.getMessage("Please_wait___")),
                null === l) {
                    A && (A.remove(),
                        A = null),
                        l = 0;
                    const t = (e=>{
                            const t = d()
                                , n = t.inner
                                , s = document.createElement("div");
                            return s.textContent = e,
                                s.setAttribute("class", "curtext"),
                                $(n).append($('<div class="lds-css ng-scope"><div class="lds-dual-ring"><div></div><div></div></div></div>')).append(s),
                                {
                                    all: t.outer,
                                    text: s
                                }
                        }
                    )(e);
                    return A = c(t.all, {
                        fixed: !0
                    }),
                        A.setText(t.text),
                        A.show(),
                        !0
                }
                return 0 === l && (void 0 === e && (e = r.a.getMessage("Please_wait___")),
                    A) ? (e && A.print(e),
                    A.show(),
                    !0) : void 0
            }
        }
            , p = ()=>{
            0 === l && (A && A.hide(),
                l = null)
        }
            , g = e=>{
            if (!document.body)
                return;
            if (1 === l)
                return !1;
            if (null !== l)
                return;
            A && (A.remove(),
                A = null),
                l = 1;
            const t = d();
            return t.inner.appendChild(e),
                A = c(t.outer),
                A.show(),
                !0
        }
            , m = ()=>{
            1 === l && (A && A.hide(),
                l = null)
        }
            , h = n(9)
            , f = n(1)
            , b = n(10)
            , k = n.n(b)
            , _ = n(4)
            , R = n(14)
            , v = n(5)
            , w = n(8)
            , y = n(12);
        let C = ()=>{
                const e = Object(f.Deferred)();
                return Object(y.vendor)(["vendor/jszip/jszip"], ()=>{
                        C = f.Deferred.Pledge,
                            e.resolve()
                    }
                ),
                    e.promise()
            }
        ;
        const x = (()=>{
                let e, t, n = !1;
                const s = ()=>{
                        const e = Object(f.Deferred)();
                        return t = e,
                            e
                    }
                ;
                return {
                    write: function() {
                        const t = Object(f.Deferred)();
                        return n = !1,
                            e = new JSZip,
                            t.resolve(e),
                            t.promise()
                    },
                    open: function(a) {
                        const o = s();
                        return n = !0,
                            JSZip.loadAsync(a).then(t=>{
                                    e = t,
                                        o.resolve(e)
                                }
                                , e=>{
                                    t && t.reject(e),
                                        o.reject(e)
                                }
                            ),
                            o.promise()
                    },
                    entries: function() {
                        const t = s()
                            , n = e.files;
                        return t.resolve(Object.keys(n).map(e=>{
                                const t = n[e];
                                if (t && !t.dir)
                                    return {
                                        filename: t.name
                                    }
                            }
                        ).filter(e=>e)),
                            t.promise()
                    },
                    get: function(t) {
                        const n = s();
                        return e.file(t.filename).async("arraybuffer").then(e=>{
                                n.resolve(e)
                            }
                        ),
                            n.promise()
                    },
                    put: function(t, n, a) {
                        const o = s();
                        try {
                            e.file(t, n, {
                                date: a ? new Date(a) : void 0
                            }),
                                o.resolve()
                        } catch (e) {
                            o.reject(e)
                        }
                        return o.promise()
                    },
                    end: function() {
                        const t = s();
                        return n ? t.resolve() : e.generateAsync({
                            type: "blob",
                            compression: "DEFLATE",
                            comment: "Created by Tampermonkey"
                        }).then(e=>{
                                t.resolve(e)
                            }
                            , e=>{
                                t.reject(e)
                            }
                        ),
                            t.promise()
                    }
                }
            }
        )();
        var G = {
            create: function(e, t) {
                const n = Object(f.Deferred)();
                let s = 0;
                return C().then(()=>x.write()).then(()=>{
                        const t = Object(f.Deferred)()
                            , a = {}
                            , o = (e,t)=>{
                                let n = [e, t].join(".");
                                if (a[n]) {
                                    let s;
                                    do {
                                        s = e + " (" + a[n] + ")",
                                            n = [s, t].join("."),
                                            a[n]++
                                    } while (a[n]);
                                    return o(s, t)
                                }
                                return a[n] = 1,
                                    n
                            }
                            , i = e.length
                            , r = ()=>{
                                if (!e.length)
                                    return t.resolve();
                                const a = e.shift()
                                    , A = a.meta.name.replace(/[\\\/$*?|]/g, "-")
                                    , l = o(A, "user.js")
                                    , c = o(A, "options.json")
                                    , d = o(A, "storage.json")
                                    , u = JSON.stringify({
                                    options: a.options,
                                    settings: a.settings,
                                    meta: a.meta
                                })
                                    , p = a.storage ? JSON.stringify(a.storage) : null;
                                s += a.source.length,
                                    console.log("porter: add to zip", l, s),
                                    n.notify("Zip: " + Math.floor((i - e.length) / i * 100) + "%"),
                                    x.put(l, a.source, a.meta.modified).then(()=>(s += u.length,
                                        console.log("porter: add to zip", c, s),
                                        x.put(c, u))).then(()=>p ? (s += p.length,
                                        console.log("porter: add to zip", d, s),
                                        x.put(d, p)) : f.Deferred.Pledge()).then(()=>{
                                            if (!a.resources.length && !a.requires.length)
                                                return f.Deferred.Pledge();
                                            const e = [];
                                            return ["resources", "requires"].forEach(t=>{
                                                    a[t].forEach(n=>{
                                                            if (void 0 === n.source)
                                                                return;
                                                            const s = n.meta.name.replace(/[\\\/$*?|]/g, "-")
                                                                , a = v.default.MD5(t + n.meta.url)
                                                                , o = [l, a, s].join("-")
                                                                , i = JSON.stringify(n.meta)
                                                                , r = v.default.str2arrbuf(n.source, "resources" == t ? void 0 : "UTF-8");
                                                            e.push(x.put(o, r).then(()=>x.put(o + "." + t + ".json", i)))
                                                        }
                                                    )
                                                }
                                            ),
                                                f.Deferred.when(e)
                                        }
                                    ).fail(e=>{
                                            console.log("porter: add to zip failed", e)
                                        }
                                    ).always(()=>{
                                            console.log("porter: add to zip -> next round"),
                                                window.setTimeout(r, 5)
                                        }
                                    )
                            }
                        ;
                        return r(),
                            t.promise()
                    }
                ).then(()=>(console.log("porter: add global props"),
                    t ? x.put("Tampermonkey.global.json", JSON.stringify(t)) : f.Deferred.Pledge())).then(()=>x.end()).done(e=>{
                        n.resolve(e)
                    }
                ).fail(()=>{
                        n.reject()
                    }
                ),
                    n.promise()
            },
            read: function(e) {
                const t = Object(f.Deferred)();
                let n;
                return C().then(()=>x.open(e)).then(()=>x.entries()).then(e=>{
                        const a = Object(f.Deferred)()
                            , o = {}
                            , i = {}
                            , r = e.length
                            , A = ()=>{
                                if (e.length) {
                                    const s = e.shift();
                                    console.log("porter: read from zip", s.filename),
                                        x.get(s).done(e=>{
                                                let t = s.filename.match(/((.*)\.(storage\.json)|(.*)\.(options\.json)|(.*)\.(global\.json)|(.*)\.(user\.js)|(.*)\.user\.js-[0-9a-f]+-.*\.(resources\.json)|(.*)\.user\.js-[0-9a-f]+-.*\.(requires\.json))$/);
                                                if (t && (t = t.slice(1).filter(e=>e)),
                                                !t || t.length < 3)
                                                    i[s.filename] = e;
                                                else
                                                    try {
                                                        const a = t[1]
                                                            , i = t[2];
                                                        o[a] = o[a] || {
                                                            resources: {},
                                                            requires: {}
                                                        },
                                                            e = v.default.arrbuf2str(e, "UTF-8"),
                                                            "global.json" == i ? n = JSON.parse(e) : "user.js" == i ? o[a].source = e : "options.json" == i ? o[a].options = JSON.parse(e) : "resources.json" == i ? o[a].resources[s.filename] = {
                                                                name: s.filename,
                                                                data: JSON.parse(e)
                                                            } : "requires.json" == i ? o[a].requires[s.filename] = {
                                                                name: s.filename,
                                                                data: JSON.parse(e)
                                                            } : "storage.json" == i && (o[a].storage = JSON.parse(e))
                                                    } catch (e) {
                                                        console.warn("porter: read from zip failed", e)
                                                    }
                                            }
                                        ).always(()=>{
                                                t.notify("Zip: " + Math.floor((r - e.length) / r * 100) + "%"),
                                                    window.setTimeout(A, 5)
                                            }
                                        )
                                } else {
                                    const e = [];
                                    Object(s.each)(o, t=>{
                                            const n = t.options || {};
                                            n.source = t.source,
                                                n.storage = t.storage,
                                                ["resources", "requires"].forEach(e=>{
                                                        const a = t[e];
                                                        a && Object(s.each)(a, t=>{
                                                                let s, a;
                                                                const o = t.name.replace("." + e + ".json", "");
                                                                (a = i[o]) && (n[e] = s = n[e] || [],
                                                                    s.push({
                                                                        meta: t.data,
                                                                        source: v.default.arrbuf2str(a, "resources" == e ? void 0 : "UTF-8")
                                                                    }))
                                                            }
                                                        )
                                                    }
                                                ),
                                                e.push(n)
                                        }
                                    ),
                                        a.resolve({
                                            scripts: e,
                                            global_settings: n
                                        })
                                }
                            }
                        ;
                        return A(),
                            a.promise()
                    }
                ).done(e=>{
                        t.resolve(e)
                    }
                ).fail(()=>{
                        t.reject()
                    }
                ),
                    t.promise()
            }
        }
            , M = {
            create: function(e, t) {
                const n = Object(f.Deferred)()
                    , s = {
                    created_by: "Tampermonkey",
                    version: "1",
                    scripts: [],
                    settings: t
                };
                return e.forEach(e=>{
                        const t = {
                            name: e.meta.name,
                            options: e.options,
                            storage: e.storage,
                            enabled: e.settings.enabled,
                            position: e.settings.position,
                            file_url: e.meta.file_url,
                            uuid: e.meta.uuid,
                            source: v.default.Base64.encode(v.default.UTF8.encode(e.source))
                        };
                        ["resources", "requires"].forEach(n=>{
                                const s = e[n];
                                if (!s || !s.length)
                                    return;
                                const a = t[n] = [];
                                s.forEach(e=>{
                                        if (void 0 === e.source)
                                            return;
                                        const t = e.meta
                                            , n = v.default.Base64.encode(v.default.UTF8.encode(e.source));
                                        a.push({
                                            meta: t,
                                            source: n
                                        })
                                    }
                                )
                            }
                        ),
                            s.scripts.push(t)
                    }
                ),
                    n.resolve(JSON.stringify(s)),
                    n.promise()
            },
            read: function(e) {
                const t = Object(f.Deferred)()
                    , n = e=>{
                        if (e.trim()) {
                            let s = null;
                            try {
                                return s = JSON.parse(e),
                                    s.scripts = s.scripts.map(e=>{
                                            const t = {
                                                meta: {
                                                    uuid: e.uuid,
                                                    name: e.name,
                                                    file_url: e.file_url
                                                },
                                                settings: {
                                                    enabled: e.enabled,
                                                    position: e.position
                                                },
                                                options: e.options,
                                                storage: e.storage,
                                                source: v.default.UTF8.decode(v.default.Base64.decode(e.source))
                                            };
                                            return ["resources", "requires"].forEach(n=>{
                                                    const s = e[n];
                                                    s && s.length && (t[n] = s.map(e=>({
                                                        meta: e.meta,
                                                        source: v.default.UTF8.decode(v.default.Base64.decode(e.source))
                                                    })))
                                                }
                                            ),
                                                t
                                        }
                                    ),
                                    t.resolve({
                                        scripts: s.scripts,
                                        global_settings: s.settings
                                    })
                            } catch (t) {
                                const s = "<body>"
                                    , a = "</body>";
                                if (-1 != e.indexOf(s)) {
                                    const t = e.indexOf(s)
                                        , o = e.lastIndexOf(a);
                                    if (-1 != t && -1 != o)
                                        return e = e.substr(t + s.length, o - (t + s.length)),
                                            n(e)
                                }
                            }
                        }
                        t.reject()
                    }
                ;
                return n(e),
                    t.promise()
            }
        }
            , E = n(15)
            , Z = n(6)
            , T = n(13)
            , I = n(11)
            , U = {
            images: {
                origin: h.a.images.origin,
                brand: h.a.images.brand,
                get: function(e) {
                    return {
                        about: "info-circle blue",
                        bug: "bug",
                        button_ok: "check green",
                        cancel: "times red",
                        check: "badge-check",
                        clock: "clock green",
                        cloud: "cloud",
                        critical: "exclamation-triangle orange",
                        contrib: "heart",
                        db: "database grey",
                        delete: "trash-alt",
                        download: "spinner rotate",
                        edit: "edit",
                        edit_add: "plus-square",
                        editor_cancel: "undo",
                        enabler: "angle-right",
                        enabler_enabled: "angle-down",
                        error: "bell red",
                        exit: "times",
                        filesave: "save",
                        filter: "filter",
                        flag: "flag",
                        encrypted: "lock orange",
                        save_to_disk: "download",
                        help: "question-square",
                        home: "home",
                        import: "upload",
                        info: "info-square",
                        no_script: "info",
                        lock: "cog",
                        menu_cmd: "cogs",
                        no: "minus-circle red",
                        no_domain: "thumbs-down red",
                        question_mark: "question-circle",
                        resources: "cloud cyan",
                        script_add: "plus-square",
                        script_cancel: "industry-alt",
                        script_download: "file-code cyan",
                        script_search: "search",
                        update: "sync",
                        utilities: "cog",
                        web: "globe blue",
                        windowlist: "window-restore grey",
                        yes_domain: "thumbs-up green"
                    }[e] || ""
                }
            },
            formatBytes: (e,t)=>{
                if (0 == e)
                    return "0 Byte";
                const n = t || 3
                    , s = Math.floor(Math.log(e) / Math.log(1e3));
                return parseFloat((e / Math.pow(1e3, s)).toFixed(n)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][s]
            }
        };
        const F = U.images
            , j = (e,t,n,s)=>{
            const a = (s.uuid ? s.uuid : "") + s.id;
            t.title = e;
            const o = L({
                after: {
                    image: "help"
                },
                name: s.name,
                id: a
            });
            o && n.appendChild(o)
        }
            , B = (e,t,n,s,o,i)=>{
            const r = a("i", "far fa-" + e, t, n, s, !0);
            if (r.alt = o ? r.title = o : t || s || n,
                r.key = n,
                r.name = t,
                i) {
                const e = r.getAttribute("class") || "";
                r.setAttribute("class", e + " clickable"),
                    r.addEventListener("click", i),
                    r.href = "#"
            }
            return r
        }
            , O = (e,t,n)=>{
            const s = (t.uuid ? t.uuid : "") + t.id
                , i = o("div", t.name, s, "input");
            i.key = t.id;
            const r = o("input", t.name, s, "input", !0)
                , A = e.split("##");
            r.name = t.name,
                r.uuid = t.uuid,
                r.key = t.id,
                r.oldvalue = t.value,
                r.value = null != t.value ? t.value : "",
                r.type = t.password ? "password" : "text",
                r.setAttribute("spellcheck", "false"),
            t.placeholder && r.setAttribute("placeholder", t.placeholder),
            n && !r.inserted && r.addEventListener("change", n);
            const l = a("span", "optiondesc", t.name, s, "s1")
                , c = o("span", t.name, s, "s2");
            return l.textContent = A[0] + ":",
            A.length > 1 && (c.textContent = A[1]),
                i.appendChild(l),
                i.appendChild(r),
                i.appendChild(c),
            t.enabledBy && i.setAttribute("name", "enabled_by_" + t.enabledBy),
                {
                    elem: i,
                    input: r
                }
        }
            , S = (e,t,n)=>{
            const s = (t.uuid ? t.uuid : "") + t.id;
            let o = null;
            return o = a("input", "button", t.name, s, "bu", !0),
                o.name = t.name,
                o.uuid = t.uuid,
                o.key = t.id,
                o.type = "button",
                o.value = t.name,
                o.data = t.data,
                o.reload = t.reload,
                o.ignore = t.ignore || t.reload,
                o.warning = t.warning,
            t.enabledBy && o.setAttribute("name", "enabled_by_" + t.enabledBy),
            !o.inserted && n && o.addEventListener("click", n),
                o
        }
            , D = (e,t,n,s)=>{
            let o = null;
            return o = a("input", "button", e, t, "bu", !0),
                o.name = e,
                o.key = t,
                o.type = "button",
                o.value = n,
            !o.inserted && s && o.addEventListener("click", s),
                o
        }
            , L = (e,t)=>{
            const n = (e.uuid ? e.uuid : "") + e.id;
            let s, o, i;
            if (o = e.after || e.validation) {
                if (i = e.validation ? "validation" : "help",
                t && (i += " clickable"),
                    s = a("span", i, e.name, n, i, !0),
                    o.image) {
                    const e = B(F.get(o.image), n, "after_icon")
                        , t = [];
                    o.opacity && t.push("opacity: " + o.opacity),
                        e.setAttribute("style", t.join(";")),
                        s.appendChild(e)
                }
                s && (t && s.addEventListener("click", t),
                o.msg && s.setAttribute("title", o.msg))
            }
            return s
        }
            , V = e=>({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;"
        }[e] || e);
        var N = {
            getInfoFromUrl: e=>{
                let t;
                if (-1 != e.search(/\/\^?(http(s|s\?|\.\+)?|\.\*):\/\/(\.\*)*\$?\/?$/) || -1 != e.search(/htt(ps|p):\/\/(\*\/\*|\*)*$/) || -1 != e.search(/\*:\/\/(\*\/\*|\*)*$/) || "*" == e)
                    return {
                        dom: "*",
                        tld: "*"
                    };
                0 == e.search(/\//) ? (t = e,
                    t = t.replace(/\([^\)]*\)[\?|\+|\*|\{[^\}]*]*/g, ""),
                    t = t.replace(/\[[^\]]*\][\?|\+|\*|\{[^\}]*]*/g, ""),
                    t = t.replace(/^\/|\/$|\^|\$|\\\?.*|#.*|\?|\(|\)|\+|\\|\.\*|/g, "")) : t = e,
                    t = t.replace(/^\*:\/\//, "http://"),
                0 != t.search("http") && (t = "http://" + t);
                const n = t.split("/");
                if (n.length < 3)
                    return null;
                const s = n[2].split(".");
                if (s.length < 2)
                    return null;
                const a = s[s.length - 1].split(":")[0];
                let o = s[s.length - 2];
                "*" !== o && (o = o.replace(/\*/g, ""));
                const i = [];
                for (let e = s.length - 3; e >= 0 && -1 == s[e].search("\\*"); e--)
                    i.push(s[e]);
                return {
                    tld: a,
                    dom: o,
                    subdom: i.reverse()
                }
            }
            ,
            getValue: e=>{
                let t = e.value;
                if ("native" === e.valtype)
                    if ("undefined" === t)
                        t = void 0;
                    else if ("null" === t)
                        t = null;
                    else
                        try {
                            t = JSON.parse(t)
                        } catch (e) {}
                return t
            }
            ,
            safeTagsReplace: e=>e.replace(/[&<>]/g, V),
            addClass: (e,t)=>{
                let n = e.getAttribute("class") || "";
                const s = new RegExp("[ \t]*" + t + "[ \t]*");
                -1 == n.search(s) && (n = (n ? n + " " : "") + t),
                    e.setAttribute("class", n)
            }
            ,
            toggleClass: (e,t)=>{
                let n = e.getAttribute("class") || "";
                const s = new RegExp("[ \t]*" + t + "[ \t]*");
                n = -1 != n.search(s) ? n.replace(s, "") : (n ? n + " " : "") + t,
                    e.setAttribute("class", n)
            }
            ,
            setHelp: j,
            createAfterIcon: L,
            createEnabler: (e,t,n,s,o)=>{
                const i = s.append
                    , r = s.disabled
                    , A = s.title
                    , l = a("div", "enabler " + e, t, n + "_enabler", i, "wrap")
                    , c = a("i", "far fa-toggle-on on", t, n + "toggle-on")
                    , d = a("i", "far fa-toggle-on fa-flip-horizontal off greyed", t, n + "toggle-off");
                l.appendChild([c, d]),
                A && (l.title = A),
                    l.key = n,
                    l.uuid = t;
                const u = "enabler_enabled";
                return r || l.addEventListener("click", ()=>{
                        $(l).hasClass(u) ? $(l).removeClass(u) : $(l).addClass(u),
                        o && window.setTimeout(()=>{
                                o.call(l)
                            }
                            , 100)
                    }
                ),
                    l
            }
            ,
            createImage: (e,t,n,s,o,i)=>{
                const r = a("img", "icon16", t, n, s, !0);
                if (r.setAttribute("src", e),
                    i) {
                    const e = r.getAttribute("class") || "";
                    r.setAttribute("class", e + " clickable")
                }
                return r.alt = o ? r.title = o : t || s || n,
                    r.key = n,
                    r.name = t,
                i && (r.addEventListener("click", i),
                    r.href = "#"),
                    r
            }
            ,
            createIcon: B,
            createFavicon: (e,t,n,o)=>{
                const i = a("img", "icon16", t, n, Object(s.filterString)(o, /[a-zA-Z0-9]/g));
                if (i.inserted)
                    return i;
                "Array" !== Object(s.toType)(e) && (e = [e]);
                const r = ()=>{
                        if (0 == e.length)
                            return;
                        const s = e.shift();
                        "function" == typeof s ? window.setTimeout(()=>{
                                i.parentNode && (i.parentNode.insertBefore(B(s(), t + "_ico", n, o), i),
                                    i.parentNode.removeChild(i))
                            }
                            , 1) : (i.setAttribute("src", s),
                            i.setAttribute("async", "true"))
                    }
                ;
                return i.addEventListener("error", r),
                    r(),
                    i.alt = o ? i.title = o : t,
                    i
            }
            ,
            createFileInput: (e,t,n)=>{
                const s = a("input", "import", "file", null, null, !0);
                return s.inserted || (s.type = "file",
                n && s.addEventListener("change", n)),
                    s
            }
            ,
            createNamedSettings: (e,t,n)=>{
                const s = (t.uuid ? t.uuid : "") + t.id
                    , i = a("div", "settingsta", t.name, s, "named_wrapper")
                    , r = a("div", "named", t.name, s, "named_settings")
                    , A = []
                    , l = o("span", t.name, s, "s1");
                return e && (l.textContent = e + ":"),
                t.desc && j(t.desc, l, l, t),
                    i.appendChild(l),
                    i.appendChild(r),
                    i.key = t.id,
                    t.value.forEach(e=>{
                            const i = a("div", "", t.name + e.name, s, "named", !0)
                                , l = a("div", "", t.name + e.name, s, "named_label", !0);
                            l.textContent = e.name,
                                i.appendChild(l);
                            const c = o("textarea", t.name + e.name, s, "textarea", !0);
                            c.setAttribute("spellcheck", "false"),
                                c.name = t.name,
                                c.key = t.id,
                                c.named_name = e.name,
                                c.uuid = t.uuid,
                                c.named = !0,
                                c.oldvalue = e.value || "",
                                c.value = e.value || "",
                            n && !c.inserted && c.addEventListener("change", n),
                                i.appendChild(c),
                                r.appendChild(i),
                                A.push(c)
                        }
                    ),
                    {
                        elem: i,
                        textareas: A,
                        label: l
                    }
            }
            ,
            createTextarea: (e,t,n)=>{
                const s = (t.uuid ? t.uuid : "") + t.id
                    , i = o("div", t.name, s, "textarea");
                i.key = t.id;
                const r = a("textarea", "settingsta", t.name, s, "textarea", !0);
                r.setAttribute("spellcheck", "false"),
                    r.name = t.name,
                    r.key = t.id,
                    r.uuid = t.uuid,
                    r.json = t.json,
                    r.array = t.array,
                    r.oldvalue = t.value,
                    void 0 === t.value || null === t.value ? r.value = "" : t.array ? r.value = t.value.join("\n") : t.json ? r.value = JSON.stringify(t.value, null, 4) : r.value = t.value,
                n && !r.inserted && r.addEventListener("change", n);
                const A = o("span", t.name, s, "s1");
                return e && (A.textContent = e + ":"),
                t.desc && j(t.desc, A, A, t),
                    i.appendChild(A),
                    i.appendChild(r),
                    {
                        elem: i,
                        textarea: r,
                        label: A
                    }
            }
            ,
            createFileSelect: (e,t,n)=>{
                const s = (t.uuid ? t.uuid : "") + t.id
                    , a = o("input", t.name, s, "file");
                if (a.inserted || (a.type = "file",
                    a.addEventListener("change", e=>{
                            n(e.target.files)
                        }
                        , !1)),
                    e) {
                    const n = o("div", t.name, s, "input")
                        , i = o("span", t.name, s, "s1");
                    return i.textContent = e + ":",
                        n.appendChild(i),
                        n.appendChild(a),
                        {
                            elem: n,
                            input: a
                        }
                }
                return {
                    elem: a
                }
            }
            ,
            createInput: O,
            createColorChooser: (e,t,n)=>{
                const s = (t.uuid ? t.uuid : "") + t.id
                    , o = O(e, t, n)
                    , i = function() {
                    n && n.apply(this, arguments);
                    const e = (this.value.match(/[a-fA-F0-9]+/) || "")[0];
                    e && [3, 6].includes(e.length) && r.setAttribute("style", "background-color: #" + e + ";")
                };
                o.input.inserted || o.input.addEventListener("keyup", i);
                const r = a("span", "color_choosed", t.name, s, "col");
                return o.col = r,
                    o.elem.appendChild(o.col),
                    i.call(o.input),
                    o
            }
            ,
            createPassword: (e,t,n)=>{
                const s = O(e, t, n);
                return s.input.setAttribute("type", "password"),
                    s
            }
            ,
            createCheckbox: (e,t,n)=>{
                const s = (t.uuid ? t.uuid : "") + t.id
                    , i = a("div", "checkbox", t.name, s, "cb1");
                i.key = t.id;
                const r = o("input", t.name, s, "cb", !0);
                r.title = t.desc ? t.desc : "",
                    r.name = t.name,
                    r.uuid = t.uuid,
                    r.key = t.id,
                    r.reload = t.reload,
                    r.warning = t.warning,
                    r.oldvalue = t.enabled,
                    r.checked = t.enabled,
                    r.type = "checkbox",
                    r.valtype = "boolean",
                n && !r.inserted && r.addEventListener("click", n);
                const A = a("span", "checkbox_desc", t.name, s, "cb2");
                return A.textContent = e,
                t.desc && j(t.desc, i, A, t),
                    i.appendChild(r),
                    i.appendChild(A),
                    {
                        elem: i,
                        input: r
                    }
            }
            ,
            createDropDown: (e,t,n,i,r)=>{
                const A = (t.uuid ? t.uuid : "") + t.id
                    , l = o("div", t.name, A, "outer_dd");
                l.key = t.id;
                const c = o("select", t.name, A, "dd", !0);
                let d = !1;
                if (n && Object.keys(n).forEach(e=>{
                        const a = o("option", t.name, n[e].name, "dd" + A, !0);
                        a.textContent = Object(s.decodeHtml)(n[e].name),
                            a.value = n[e].value,
                            a.warning = n[e].warning,
                            d |= !!n[e].warning,
                        n[e].enabledBy && a.setAttribute("name", "enabled_by_" + n[e].enabledBy),
                        t.enabler && n[e].enable && a.setAttribute("enables", JSON.stringify(n[e].enable)),
                        n[e].value == t.value && (a.selected = !0),
                            c.appendChild(a)
                    }
                ),
                    c.key = t.id,
                    c.name = t.name,
                    c.uuid = t.uuid,
                    c.reload = t.reload,
                    c.warning = t.warning,
                    c.oldvalue = t.value,
                    c.valtype = "native",
                c.inserted || (i && c.addEventListener("change", i),
                d && r && c.addEventListener("change", r)),
                null !== e) {
                    const n = a("span", "optiondesc", t.name, A, "inner_dd");
                    n.textContent = e + ": ",
                        l.appendChild(n)
                }
                return l.appendChild(c),
                t.desc && j(t.desc, l, l, t),
                t.enabledBy && l.setAttribute("name", "enabled_by_" + t.enabledBy),
                    {
                        elem: l,
                        select: c
                    }
            }
            ,
            createImageButton: (e,t,n,s,o)=>{
                let i = null
                    , r = null
                    , A = null;
                return i = a("button", "imgbutton button", e, t, "bu", !0),
                    r = a("div", "imgbutton_container", e, t, "bu_container"),
                    r.appendChild(i),
                    i.uuid = e,
                    i.key = t,
                    A = a("i", "imgbutton_image far fa-" + s, e, t, "bu_img", !0),
                    i.appendChild(A),
                    i.title = A.title = A.alt = n,
                !i.inserted && o && i.addEventListener("click", o),
                    r
            }
            ,
            createImageTextButton: (e,t,n,s,i)=>{
                const r = a("button", "button imgtextbutton", e, t + n, "itb", !0);
                if (r.key = t,
                    r.uuid = e,
                    s) {
                    const a = B(F.get(s), e, t + n + "itb", s);
                    r.appendChild(a)
                }
                const A = o("span", e, t + n, "itb");
                return A.textContent = n,
                    r.appendChild(A),
                i && r.addEventListener("click", i),
                    r
            }
            ,
            createButton: function(e, t) {
                return "Object" === Object(s.toType)(t) ? S.apply(this, arguments) : D.apply(this, arguments)
            },
            createPosition: (e,t,n)=>{
                const s = (t.uuid ? t.uuid : "") + t.id
                    , i = o("div", t.name, s, "pos1")
                    , r = o("select", t.name, s, "pos", !0);
                for (let e = 1; e <= t.posof; e++) {
                    const n = o("option", t.name, s, "opt" + e);
                    n.textContent = e,
                    e == t.pos && (n.selected = !0),
                        r.appendChild(n)
                }
                r.key = t.id,
                    r.uuid = t.uuid,
                    r.name = t.name,
                n && !r.inserted && r.addEventListener("change", n);
                const A = a("span", "optiondesc", t.name, s, "pos2");
                return A.textContent = e,
                    i.appendChild(A),
                    i.appendChild(r),
                    i
            }
            ,
            createSearchBox: e=>{
                const t = a("div", "searchbox", "search_inner")
                    , n = a("div", "searchbox_mv", "search_inner_mv")
                    , s = a("input", "searchbox_input", "search_input")
                    , o = a("input", "searchbox_button", "search_button");
                s.type = "text",
                    s.setAttribute("spellcheck", "false"),
                    s.value = e,
                    o.type = "button",
                    o.value = "Go";
                const i = ()=>{
                        const e = s.value;
                        window.location = window.location.origin + window.location.pathname + "?url=" + encodeURIComponent(e)
                    }
                ;
                return o.addEventListener("click", i),
                    s.addEventListener("keyup", e=>{
                            e && 13 == e.keyCode && i()
                        }
                    ),
                    n.appendChild(s),
                    n.appendChild(o),
                    t.appendChild(n),
                    t
            }
            ,
            createSocialButtons: ()=>{
                const e = []
                    , t = a("a", "", "github_link");
                t.href = "https://github.com/derjanb",
                    t.target = "_blank";
                const n = a("img", "icon16", "github");
                n.setAttribute("src", F.origin("gh")),
                    t.appendChild(n),
                    e.push(t);
                const s = a("a", "", "facebook_link");
                s.href = "https://www.facebook.com/tampermonkey",
                    s.target = "_blank";
                const o = a("img", "icon16", "facebook");
                o.setAttribute("src", F.brand("facebook")),
                    s.appendChild(o),
                    e.push(s);
                const i = a("a", "", "insta_link");
                i.href = "https://www.instagram.com/der_jan_b/",
                    i.target = "_blank";
                const r = a("img", "icon16", "instagram");
                return r.setAttribute("src", F.brand("instagram")),
                    i.appendChild(r),
                    e.push(i),
                    e
            }
            ,
            createGobalHint: (e,t)=>{
                const n = "global_hint_" + (e.class ? e.class : "warning")
                    , s = Date.now()
                    , i = a("span", ["global_hint", n].join(" "), "globalhint", s)
                    , r = o("span", "globalhint_c", s)
                    , A = o("span", "globalhint_t", s);
                e.title && (A.title = e.title),
                e.image && r.appendChild(B(F.get(e.image), "globalhint_" + s, "icon" + s)),
                    A.textContent = e.text,
                e.onclick && !A.inserted && A.addEventListener("click", e.onclick),
                    r.appendChild(A),
                    i.appendChild(r);
                const l = $(i);
                return e.instant || (l.hide(),
                    window.setTimeout(()=>{
                            l.slideDown()
                        }
                        , e.delay ? e.delay : 1)),
                e.timeout && window.setTimeout(()=>{
                        e.instant ? (l.hide(),
                            l.remove()) : l.slideUp(()=>{
                                l.remove()
                            }
                        ),
                        e.done && e.done(i)
                    }
                    , e.timeout),
                    l.prependTo(t || document.body),
                    l
            }
            ,
            isScrolledIntoView: (e,t)=>{
                const n = $(e)
                    , s = $(window)
                    , a = t && t.padding || 0
                    , o = s.scrollTop()
                    , i = o + s.height()
                    , r = n.offset().top;
                return r + n.height() <= i - a && r >= o + a
            }
        };
        const P = {};
        var Q = (e,t,n,i)=>{
                const r = (A = e,
                    Object(s.filterString)(A, /[0-9a-zA-Z]/g));
                var A;
                let l = !1;
                null == n && (n = {
                    tv: "tv",
                    tv_table: "tv_table",
                    tr_tabs: "tr_tabs",
                    tr_content: "tr_content",
                    td_content: "td_content",
                    td_tabs: "td_tabs",
                    tv_tabs_fill: "tv_tabs_fill",
                    tv_tabs_table: "tv_tabs_table",
                    tv_tabs_align: "tv_tabs_align",
                    tv_contents: "tv_contents",
                    tv_tab_selected: "tv_tab tv_selected",
                    tv_tab_close: "tv_tab_close",
                    tv_tab: "tv_tab",
                    tv_content: "tv_content"
                });
                const c = a("div", n.tv, "main" + r)
                    , d = a("table", n.tv_table + " noborder", "main_table" + r);
                d.inserted ? l = !0 : (P[r] = {},
                    P[r].g_entries = {},
                    P[r].g_selectedId = null);
                const u = a("tr", n.tr_tabs, "tabs" + t.id + r)
                    , p = a("td", n.td_tabs, "pages" + r)
                    , g = a("div", n.tv_tabs_fill, "tv_tabs_fill" + r)
                    , m = a("div", n.tv_tabs_table, "tv_tabs_table" + r)
                    , h = a("div", n.tv_tabs_align, "tv_tabs_align" + r)
                    , b = a("tr", n.tr_content, "content" + t.id + r)
                    , k = a("td", n.td_content, "content" + r)
                    , _ = a("div", n.tv_contents, "tv_content" + r)
                    , R = o("tfoot", "tv_footer_t" + r)
                    , v = o("tr", "tv_footer_tr" + r)
                    , w = o("td", "tv_footer_td" + r);
                R.appendChild(v),
                    v.appendChild(w),
                    m.appendChild(h),
                    g.appendChild(m),
                    p.appendChild(g),
                    u.appendChild(p),
                    d.appendChild(u),
                    k.appendChild(_),
                    b.appendChild(k),
                    d.appendChild(b),
                    d.appendChild(R),
                    c.appendChild(d),
                    t.appendChild(c);
                const y = (e,t,n)=>{
                        t ? e.setAttribute("style", n ? s.staticVars.visible_move : s.staticVars.visible) : e.setAttribute("style", n ? s.staticVars.invisible_move : s.staticVars.invisible),
                            e.setAttribute("vis", t.toString())
                    }
                    , C = (e,t)=>{
                        const n = e.getId();
                        if (P[r].g_entries[n]) {
                            if (t == P[r].g_entries[n].visible)
                                return;
                            P[r].g_entries[n].visible = t,
                                y(P[r].g_entries[n].tab, t)
                        }
                    }
                    , x = (e,t)=>{
                        e && y(e.content, t, !1)
                    }
                    , G = e=>{
                        if (null === e)
                            return null;
                        const t = Object.keys(P[r].g_entries);
                        for (let n, s = 0; n = t[s]; s++) {
                            const t = P[r].g_entries[n];
                            if (t.entry.getId() == e)
                                return t.entry
                        }
                        return null
                    }
                    , M = e=>{
                        e.hide();
                        const t = e.getId()
                            , n = P[r].g_entries[t];
                        if (n) {
                            n.tab.parentNode.removeChild(n.tab),
                                n.content.parentNode.removeChild(n.content);
                            const e = (e=>{
                                    const t = Object.keys(P[r].g_entries);
                                    for (let n, s = 0; n = t[s]; s++)
                                        if (P[r].g_entries[n].tab.id == e.id)
                                            return n;
                                    return null
                                }
                            )(n.tab);
                            e && delete P[r].g_entries[e]
                        } else
                            console.log("tv: WARN: tab not part of tabview!")
                    }
                ;
                let E = null;
                return l ? E = P[r].tv : (E = {
                    getTabById: G,
                    getSelectedTab: function() {
                        return G(P[r].g_selectedId)
                    },
                    getAllTabs: function() {
                        const e = $(h).find("div[tvid]");
                        let t, n;
                        const s = [];
                        return e.each(a=>{
                                (t = $(e.get(a)).attr("tvid")) && (n = G(t)) && s.push(n)
                            }
                        ),
                            s
                    },
                    getNextTab: function() {
                        const e = $(h).find("div[tvid]");
                        let t;
                        return P[r].g_selectedId && e.each((n,s)=>{
                                t || $(s).attr("tvid") === P[r].g_selectedId && (t = $(e.get(n + 1)).attr("tvid"))
                            }
                        ),
                            G(t || e.first().attr("tvid"))
                    },
                    getPreviousTab: function() {
                        const e = $(h).find("div[tvid]");
                        let t;
                        return P[r].g_selectedId && e.each((n,s)=>{
                                t || $(s).attr("tvid") === P[r].g_selectedId && (t = $(e.get(n - 1)).attr("tvid"))
                            }
                        ),
                            G(t || e.last().attr("tvid"))
                    },
                    removeTab: M,
                    appendTab: function(e, t, n, s, a) {
                        return this.insertTab(void 0, e, t, n, s, a)
                    },
                    insertTab: function(e, t, s, A, l, c) {
                        null === e && (e = h.firstChild);
                        const d = "tab_" + t
                            , u = o("div", d, "content" + r)
                            , p = void 0 !== u.inserted && 1 == u.inserted
                            , g = o("div", d, "head_text" + r);
                        if (s.appendChild(g),
                            c) {
                            const e = a("div", n.tv_tab_close, d, "tv_close" + r, "tab_close");
                            e.inserted || e.addEventListener("click", ()=>{
                                    c()
                                }
                            ),
                                s.appendChild(e)
                        }
                        if (p) {
                            const e = (e=>{
                                    const t = Object.keys(P[r].g_entries);
                                    for (let n, s = 0; n = t[s]; s++) {
                                        const t = P[r].g_entries[n];
                                        if (t.tab.id == e.id)
                                            return t
                                    }
                                    return null
                                }
                            )(u);
                            if (e)
                                return e.entry;
                            console.log("tv: WARN: old tab, but not in tabs collection!")
                        }
                        let m;
                        const b = t
                            , k = e=>{
                                "" != e.target.className && e.target.className == n.tv_tab_close || m.select()
                            }
                        ;
                        return u.setAttribute("tvid", t),
                            u.addEventListener("click", k),
                            s.addEventListener("click", k),
                            u.setAttribute("name", "tabview_tab" + r),
                            u.setAttribute("class", n.tv_tab),
                            u.appendChild(s),
                            e ? h.insertBefore(u, e) : h.appendChild(u),
                            A.setAttribute("name", "tabview_content" + r),
                            A.setAttribute("class", n.tv_content),
                            _.appendChild(A),
                            m = {
                                getId: function() {
                                    return b
                                },
                                isVisible: function() {
                                    return "true" == u.getAttribute("vis")
                                },
                                isSelected: function() {
                                    return P[r].g_selectedId == this.getId()
                                },
                                isCloseable: function() {
                                    return !!c
                                },
                                modified: function() {
                                    return $(s).hasClass("modified")
                                },
                                remove: function() {
                                    M(this)
                                },
                                hide: function() {
                                    (e=>{
                                            const t = e.getId()
                                                , n = t == P[r].g_selectedId;
                                            if (P[r].g_entries[t] ? C(e, !1) : console.log("tv: WARN: tab not part of tabview!"),
                                                n) {
                                                let e = null
                                                    , t = null;
                                                for (const n in P[r].g_entries)
                                                    P[r].g_entries[n].visible && (e = P[r].g_entries[n],
                                                    t || e.closable || (t = e));
                                                i || e.closable || (e = t),
                                                    e ? e.entry.select() : (P[r].g_selectedId = null,
                                                        console.log("tv: WARN: selected tab set, but entry collection empty!"))
                                            }
                                        }
                                    )(this)
                                },
                                show: function() {
                                    (e=>{
                                            const t = e.getId();
                                            P[r].g_entries[t] ? C(e, !0) : console.log("tv: WARN: tab not part of tabview!")
                                        }
                                    )(this)
                                },
                                select: function(e) {
                                    if (!e && m.isSelected())
                                        return;
                                    const t = Object(f.Deferred)();
                                    l && l(t.promise()),
                                        (e=>{
                                                if (e.getId() == P[r].g_selectedId)
                                                    return;
                                                const t = e.getId();
                                                P[r].g_selectedId && x(P[r].g_entries[P[r].g_selectedId], !1),
                                                    Object.keys(P[r].g_entries).forEach(e=>{
                                                            const s = P[r].g_entries[e];
                                                            s.entry.getId() == t ? s.visible ? s.selected || (s.tab.setAttribute("class", n.tv_tab_selected),
                                                                x(s, !0),
                                                                s.selected = !0) : console.log("tv: WARN: tab selected but not visible!") : s.selected && (s.tab.setAttribute("class", n.tv_tab),
                                                                x(s, !1),
                                                                s.selected = !1)
                                                        }
                                                    ),
                                                    P[r].g_selectedId = t
                                            }
                                        )(this),
                                        t.resolve()
                                },
                                setHeading: function(e, t, n) {
                                    const a = s.firstChild;
                                    if (t && e.length > t) {
                                        const s = Math.round(t / 2);
                                        a.textContent = e.substr(0, s) + "..." + e.substr(s - t),
                                            a.title = n || e
                                    } else
                                        a.textContent = e
                                },
                                toggleClass: function(e, t) {
                                    $(s, _).toggleClass(e, t)
                                },
                                close: function() {
                                    c && c()
                                }
                            },
                            P[r].g_entries[b] = {
                                entry: m,
                                tab: u,
                                content: A,
                                closable: null != c
                            },
                            x(P[r].g_entries[b], !1),
                            m.show(),
                            m
                    },
                    setFooter: function(e) {
                        w.appendChild(e)
                    }
                },
                    P[r].tv = E),
                    E
            }
        ;
        window.requestFileSystem || (window.requestFileSystem = window.webkitRequestFileSystem);
        const z = rea.FEATURES
            , H = U.images
            , X = w.a.cache
            , Y = window.CodeMirror
            , J = window.MirrorFrame;
        window.Hinter = E.a;
        var q = ()=>{
                h.a.render(()=>{
                        const e = {};
                        let t = {};
                        const n = []
                            , i = {}
                            , A = {};
                        let l = {};
                        const c = (()=>{
                                let e, t, n, s, a, o;
                                if ((e = z.HTML5.LOCALSTORAGE) && (t = e.getItem("export_tm_settings"),
                                    n = "true" === t,
                                    t = e.getItem("export_externals"),
                                    s = "false" !== t,
                                    t = e.getItem("export_script_storage"),
                                    o = "false" !== t,
                                    a = e.getItem("cloud_config")))
                                    try {
                                        a = JSON.parse(v.default.Base64.decode(a))
                                    } catch (e) {}
                                return {
                                    script_storage: o,
                                    add_tm_settings: n,
                                    include_externals: s,
                                    cloud_config: a
                                }
                            }
                        )();
                        let d;
                        const b = {}
                            , C = function(e, t) {
                                let n, s;
                                if ((n = b[e]) && (s = n[t]))
                                    return s.apply(this, [].slice.call(arguments, 2))
                            }
                            , x = e=>{
                                const t = e.msg || e;
                                if (e.once) {
                                    if (A[t])
                                        return !0;
                                    A[t] = !0
                                }
                                let n = confirm(t)
                                    , s = {};
                                return n && e.ok ? s = e.ok : !n && e.cancel && (s = e.cancel),
                                (e.ok || e.cancel) && (n = !0),
                                s.url && sendMessage({
                                        method: "newTab",
                                        url: s.url
                                    }, ()=>{}
                                ),
                                    n
                            }
                            , F = (e,t)=>{
                                try {
                                    const n = ()=>{
                                            t && z.OPTIONPAGE.CLOSE_ALLOWED && window.close()
                                        }
                                    ;
                                    t ? sendMessage({
                                        method: "newTab",
                                        url: e
                                    }, n) : rea.tabs.getSelected(null, s=>{
                                            rea.tabs.sendMessage(s.id, {
                                                method: "loadUrl",
                                                url: e,
                                                newtab: t
                                            }, n)
                                        }
                                    )
                                } catch (e) {
                                    console.log("lU: " + e.message)
                                }
                            }
                        ;
                        let j = !1;
                        const B = e=>{
                                if (j)
                                    return;
                                const t = r.a.getLocale()
                                    , n = $("<div>").hide()
                                    , s = e=>{
                                        e ? (n.html(""),
                                            n.append($('<div class="contrib_iframe" style="font-size: 2.5em;"></div>').append($('<div style="padding-top: 150px;">').text(e))),
                                            window.setTimeout(s, 1e3)) : (n.fadeOut(1e3),
                                            window.setTimeout(m, 1e3))
                                    }
                                    , a = $('<iframe src="https://www.tampermonkey.net/contrib.php?embedded=2' + (t ? "&locale=" + t : "") + "&src=" + (e || "e") + rea.runtime.short_id + '" class="contrib_iframe"></iframe>')
                                    , o = [$('<button class="contrib_button">').html(r.a.getMessage("Remind_me_later")).click(()=>{
                                            Ae("later"),
                                                s(r.a.getMessage("Ok"))
                                        }
                                    ), $('<button class="contrib_button">').html(r.a.getMessage("I_contributed_already")).click(()=>{
                                            Ae("contributed"),
                                                s(r.a.getMessage("Thank_you_very_much_"))
                                        }
                                    ), $('<button class="contrib_button">').html(r.a.getMessage("I_dont_want_to_contribute")).click(()=>{
                                            Ae("hide"),
                                                s(r.a.getMessage("Ok"))
                                        }
                                    )]
                                    , i = ()=>{
                                        A && window.clearTimeout(A),
                                            o.forEach(e=>{
                                                    e.prop("disabled", !1)
                                                }
                                            )
                                    }
                                ;
                                o.forEach(e=>{
                                        e.prop("disabled", !0)
                                    }
                                ),
                                    n.append(a, o),
                                    a.bind("load", i);
                                let A = window.setTimeout(()=>{
                                        A = null,
                                            i()
                                    }
                                    , 15e3);
                                const l = ()=>{
                                        const e = g(n[0]);
                                        !0 === e ? (n.fadeIn(1e3),
                                            Ae("dialog")) : void 0 === e && window.setTimeout(l, 500),
                                            j = !0
                                    }
                                ;
                                l(),
                                    window.addEventListener("message", e=>{
                                            let t;
                                            const a = e.data.clicked || e.data.type
                                                , o = e.data.amount
                                                , i = e.data.currency
                                                , A = e.data.redirect_url;
                                            if (a)
                                                if (A && F(A, !0),
                                                    e.data.success) {
                                                    t = $(".contrib_iframe");
                                                    const n = t.data("oheight");
                                                    if (!n || n < 0 || n > 1e3)
                                                        return;
                                                    t.animate({
                                                        height: n
                                                    }, 1e3),
                                                        Ae("contributed", a, {
                                                            id: e.data.id
                                                        })
                                                } else
                                                    e.data.clicked && (Ae("clicked", a, {
                                                        amount: o || "?",
                                                        currency: i || "?"
                                                    }),
                                                        $(".contrib_button").remove(),
                                                        n.append($('<button class="contrib_button">').html(r.a.getMessage("Ok")).click(()=>{
                                                                s()
                                                            }
                                                        )),
                                                    e.data.enlarge && (t = $(".contrib_iframe"),
                                                        t.data("oheight", t.height()),
                                                        t.animate({
                                                            height: 740
                                                        }, 1e3)))
                                        }
                                        , !1)
                            }
                            , O = ()=>{
                                if (z.HTML5.LOCALSTORAGE)
                                    return z.HTML5.LOCALSTORAGE.getItem("sort_key")
                            }
                            , S = ()=>{
                                if (z.HTML5.LOCALSTORAGE)
                                    return z.HTML5.LOCALSTORAGE.getItem("sort_sequence")
                            }
                            , D = e=>{
                                if (z.HTML5.LOCALSTORAGE)
                                    return z.HTML5.LOCALSTORAGE.setItem("sort_key", e)
                            }
                            , L = e=>{
                                if (z.HTML5.LOCALSTORAGE)
                                    return z.HTML5.LOCALSTORAGE.setItem("sort_sequence", e)
                            }
                            , V = e=>{
                                const t = (e,n)=>e.tagName == n ? e : e.parentNode ? t(e.parentNode, n) : null;
                                let n = "down" == S()
                                    , s = null
                                    , a = []
                                    , o = 0;
                                const i = Date.now();
                                Object.keys(l).forEach(e=>{
                                        const n = l[e];
                                        if (!n)
                                            return void console.warn("options: something went wrong!", e);
                                        const A = t(n.dom, "TR");
                                        if (A) {
                                            const e = t(A, "TBODY");
                                            let l, c;
                                            s ? e && s != e && console.warn("options: different parents?!?!") : s = e,
                                                o++,
                                            (!(l = n.script.lastModified || n.script.lastUpdated) || (c = i - parseInt(l)) && isNaN(c)) && (c = 0),
                                                a.push({
                                                    tr: A,
                                                    sites: P.get(n.script),
                                                    enabled: n.script.enabled,
                                                    position: n.script.position ? n.script.position : 1e3 + o,
                                                    name: r.a.getTranslation(n.script, "name").toLowerCase(),
                                                    homepage: [n.script.origin ? _.default.parse(n.script.origin.url).hostname : "z", Ue(n.script) ? _.default.parse(Ue(n.script)).hostname : "z"].join("_"),
                                                    updated: c,
                                                    version: n.script.version || ""
                                                }),
                                                A.inserted = !1,
                                            A.parentNode && A.parentNode.removeChild(A)
                                        } else
                                            console.log("options: unable to sort script at pos " + n.pos)
                                    }
                                ),
                                    a = (e=>{
                                            let t;
                                            const s = e=>(t,n)=>t[e] - n[e]
                                                , a = O();
                                            var o, i;
                                            return "pos" == a ? t = s("position") : "enabled" == a ? (o = "enabled",
                                                i = n,
                                                t = (e,t)=>{
                                                    const n = (i ^ e[o] ? "a" : "b") + e.name
                                                        , s = (i ^ t[o] ? "a" : "b") + t.name;
                                                    return n < s ? -1 : n > s ? 1 : 0
                                                }
                                                ,
                                                n = null) : t = "ver" == a ? (e=>(t,n)=>Z.Parser.versionCmp(String(t[e]), String(n[e])))("version") : "updated" == a ? s("updated") : (e=>(t,n)=>t[e] < n[e] ? -1 : t[e] > n[e] ? 1 : 0)(a),
                                                e.sort(t),
                                                e
                                        }
                                    )(a),
                                n && (a = a.reverse());
                                for (let e = 0; e < o; e++)
                                    s.appendChild(a[e].tr);
                                $(".sorting").each((e,t)=>{
                                        $(t)["pos" == O() && "up" == S() ? "fadeIn" : "fadeOut"]()
                                    }
                                ),
                                e && e()
                            }
                        ;
                        X.create("sites").setOptions({
                            timeout: 600,
                            check_interval: 300,
                            retimeout_on_get: !0
                        }).init();
                        const P = (()=>{
                                let e = {};
                                const t = e=>e.toString().length < 7 ? t("0" + e) : e
                                    , n = e=>{
                                        if (e.includes || e.matches) {
                                            const t = {}
                                                , n = []
                                                , s = e.includes.length ? e.includes : e.matches;
                                            for (let a = 0; a < s.length; a++) {
                                                const o = s[a];
                                                if (!o) {
                                                    console.log("o: Warn: script '" + e.name + "' has invalid include (index: " + a + ")");
                                                    continue
                                                }
                                                const i = X.items.sites.get(o)
                                                    , r = (void 0 !== i ? i : null) || N.getInfoFromUrl(o);
                                                void 0 === i && X.items.sites.set(o, r),
                                                    r && r.dom ? t[r.dom] || (t[r.dom] = !0,
                                                        n.push({
                                                            include: o,
                                                            info: r
                                                        })) : n.push({
                                                        include: o
                                                    })
                                            }
                                            return n
                                        }
                                    }
                                ;
                                return {
                                    init: function(t) {
                                        e = {},
                                            t.forEach(t=>{
                                                    const s = n(t);
                                                    s && s.length && s.forEach(t=>{
                                                            t.info && (e[t.info.dom] = (e[t.info.dom] || 0) + 1)
                                                        }
                                                    )
                                                }
                                            )
                                    },
                                    get: function(s) {
                                        const a = n(s);
                                        if (!a || !a.length)
                                            return t(0);
                                        const o = a.map(t=>t.info ? {
                                            score: 1e3 * e[t.info.dom] + t.info.dom.charCodeAt(0) || 0,
                                            dom: t.info.dom
                                        } : {
                                            score: 0,
                                            dom: ""
                                        }).sort((e,t)=>t.score - e.score)[0];
                                        return t(o.score) + o.dom
                                    },
                                    topIcons: function(t, o) {
                                        let i;
                                        const r = []
                                            , A = n(t);
                                        if (!A || !A.length)
                                            return [];
                                        const l = A.map(t=>(t.score = t.info && e[t.info.dom] || 0,
                                            t)).sort((e,t)=>t.score - e.score);
                                        return Object(s.each)(l, e=>{
                                                const n = e.info;
                                                if (0 == o--) {
                                                    const e = a("span", "", t.uuid, "tbc");
                                                    return e.textContent = "...",
                                                        r.push(e),
                                                        !1
                                                }
                                                if (!n)
                                                    return i = N.createIcon(H.get("question_mark"), "favicon", t.uuid, e.include, e.include),
                                                        void r.push(i);
                                                if ("*" == n.tld)
                                                    return i = N.createIcon(H.get("web"), "web", t.uuid, e.include, e.include),
                                                        r.push(i),
                                                        !1;
                                                let s = "com"
                                                    , A = "";
                                                "*" != n.tld && "tld" != n.tld && (s = n.tld),
                                                n.subdom.length && (A = n.subdom.join(".") + ".");
                                                const l = (A + n.dom + "." + s).replace(/\*/g, "")
                                                    , [c,d] = Fe(l);
                                                i = N.createFavicon([c, d, ()=>H.get("question_mark")].filter(e=>e), "favicon", t.uuid, e.include, e.include),
                                                    r.push(i)
                                            }
                                        ),
                                            r
                                    }
                                }
                            }
                        )();
                        let q = null;
                        const W = ()=>{
                                q && (window.clearTimeout(q),
                                    q = null)
                            }
                            , K = e=>{
                                let t;
                                const n = e.key || "general";
                                (t = We[n]) && $(t).remove(),
                                    We[n] = N.createGobalHint(e, $("body > div.status")[0])
                            }
                            , ee = (e,t,n,s)=>{
                                void 0 === s && (s = 3e3),
                                    K({
                                        key: "success",
                                        text: e,
                                        image: t,
                                        class: n,
                                        delay: 500,
                                        timeout: s,
                                        done: ()=>{}
                                    })
                            }
                            , te = ()=>{
                                ee(r.a.getMessage("Operation_completed_successfully"), "button_ok", "notice")
                            }
                            , ne = (e,t)=>{
                                void 0 === t && (t = "button_ok"),
                                    ee(e, t, "information", 8e3)
                            }
                            , se = (e,t)=>{
                                void 0 === t && (t = "error"),
                                    ee(e, t, "warning", 8e3)
                            }
                            , ae = e=>{
                                q || (q = window.setTimeout(()=>{
                                        q = null,
                                            u(r.a.getMessage("Please_wait___"))
                                    }
                                    , e || 500))
                            }
                        ;
                        let oe = null
                            , ie = null;
                        const re = (e,t)=>{
                            null != oe ? (window.clearTimeout(oe),
                                oe = null,
                                re(e || ie.items, e ? t : ie.with_scripts)) : (ie = {
                                items: e,
                                with_scripts: t
                            },
                                oe = window.setTimeout(()=>{
                                        oe = null,
                                        ie.with_scripts && (l = {}),
                                            Te(ie.items),
                                            ie = null
                                    }
                                    , 50))
                        }
                            , Ae = (e,t,n)=>{
                            const s = Object(f.Deferred)();
                            return sendMessage({
                                    method: "begEvent",
                                    action: e,
                                    type: t,
                                    extra: n
                                }, e=>{
                                    s.resolve(e)
                                }
                            ),
                                s.promise()
                        }
                            , le = (e,t)=>{
                            const n = Object(f.Deferred)();
                            try {
                                ae(),
                                    sendMessage({
                                            method: "installScript",
                                            url: e.url,
                                            code: e.code,
                                            reload: t.reload
                                        }, e=>{
                                            W(),
                                                e.items ? (te(),
                                                    re(e.items, !1)) : p(),
                                                e.err ? n.reject(e) : n.resolve(e)
                                        }
                                    )
                            } catch (e) {
                                console.log("sS: " + e.message),
                                    n.reject({
                                        err: e.message
                                    })
                            }
                            return n.promise()
                        }
                            , ce = (e,t)=>{
                            const n = Object(f.Deferred)();
                            try {
                                ae(),
                                    sendMessage({
                                            method: "importFromJson",
                                            json: e,
                                            reload: t.reload
                                        }, e=>{
                                            W(),
                                                e.reload ? window.setTimeout(()=>{
                                                        rea.page.reload()
                                                    }
                                                    , 500) : e.items ? (te(),
                                                    re(e.items, !0)) : p(),
                                                e.err ? n.reject(e) : n.resolve(e)
                                        }
                                    )
                            } catch (e) {
                                console.log("sS: " + e.message),
                                    n.reject({
                                        err: e.message
                                    })
                            }
                            return n.promise()
                        }
                            , de = (e,t,n)=>{
                            const s = Object(f.Deferred)();
                            void 0 === n.reload && (n.reload = !0);
                            try {
                                n.auto_save || ae(),
                                    sendMessage({
                                            method: "saveScript",
                                            uuid: e,
                                            code: t,
                                            clean: n.clean,
                                            force: n.force,
                                            new_script: n.new_script,
                                            auto_save: n.auto_save,
                                            lastModTime: n.lastModTime,
                                            reload: n.reload
                                        }, e=>{
                                            n.auto_save || (te(),
                                                W()),
                                                (e = e || {}).items ? re(e.items, !0) : p(),
                                            !t && n.reload && p(),
                                                s.resolve(e)
                                        }
                                    )
                            } catch (e) {
                                console.log("sS: " + e.message),
                                    s.reject({
                                        err: e.message
                                    })
                            }
                            return s.promise()
                        }
                            , ue = (e,n,s)=>{
                            const a = Object(f.Deferred)();
                            try {
                                ae(),
                                    sendMessage({
                                            method: "setOption",
                                            name: e,
                                            value: n
                                        }, e=>{
                                            W(),
                                                te(),
                                                t = e.options || t,
                                                !s && e.items ? re(e.items, !1) : p(),
                                                a.resolve(e)
                                        }
                                    )
                            } catch (e) {
                                console.log("sO: " + e.message),
                                    a.reject({
                                        err: e.message
                                    })
                            }
                            return a.promise()
                        }
                            , pe = (e,t)=>{
                            ae(),
                                sendMessage({
                                        method: "loadTree",
                                        complete: e.complete,
                                        uuid: e.uuid,
                                        url: e.url,
                                        referrer: e.referrer,
                                        layout: e.layout,
                                        filter: e.filter
                                    }, e=>{
                                        W(),
                                        e.items || (e.error ? Object(s.cAlert)(e.error) : confirm(r.a.getOriginalMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_")) && (window.location.href = "https://www.tampermonkey.net/bug")),
                                            t(e)
                                    }
                                )
                        }
                            , ge = ()=>{
                            pe({
                                    referrer: "options.scripts"
                                }, e=>{
                                    e.items ? re(e.items, !0) : p()
                                }
                            )
                        }
                            , me = (e,n,s)=>{
                            null == s && (s = !0);
                            try {
                                const a = {
                                    method: "modifyScriptOptions",
                                    uuid: e,
                                    reload: s
                                };
                                for (const e in n)
                                    n.hasOwnProperty(e) && (a[e] = n[e]);
                                ae(),
                                    sendMessage(a, e=>{
                                            W(),
                                                t = e.options || t,
                                            e.i18n && r.a.setLocale(e.i18n),
                                                te(),
                                                e.items ? re(e.items, !0) : p()
                                        }
                                    )
                            } catch (e) {
                                console.log("mSo: " + e.message)
                            }
                        }
                            , he = (e,t,n)=>{
                            try {
                                const s = {
                                    method: "saveStorageKey",
                                    uuid: e,
                                    key: t,
                                    value: n,
                                    id: "options"
                                };
                                ae(),
                                    sendMessage(s, ()=>{
                                            W(),
                                                te(),
                                                p()
                                        }
                                    )
                            } catch (e) {
                                console.log("sSk: " + e.message)
                            }
                        }
                            , fe = (e,t,n)=>{
                            try {
                                const s = {
                                    method: "download",
                                    details: {
                                        url: e,
                                        name: t,
                                        saveAs: !0
                                    },
                                    id: "options"
                                };
                                ae(),
                                    sendMessage(s, e=>{
                                            W(),
                                                e.load ? te() : e.error && se(r.a.getMessage("Action_failed")),
                                                p(),
                                            n && n()
                                        }
                                    )
                            } catch (e) {
                                console.log("dDU: " + e.message)
                            }
                        }
                            , be = window.navigator.userAgent.includes("Mac") ? "mac" : "other";
                        let ke;
                        window.addEventListener("keydown", e=>{
                                let t, n, s = !1;
                                if ("keydown" == e.type && !e.defaultPrevented) {
                                    if (27 == e.keyCode) {
                                        if (t = d.getTabById("dashboard"),
                                            !t.isSelected())
                                            return;
                                        if (e.target && "text" == e.target.type)
                                            return void $(e.target).blur();
                                        b.multiselect.toggleRow(!1),
                                            s = !0
                                    } else
                                        ("mac" != be && 39 == e.keyCode || "mac" == be && 40 == e.keyCode) && !e.ctrlKey && e.altKey && !e.shiftKey ? (n = d.getNextTab(),
                                        n && (n.select(),
                                            s = !0)) : ("mac" != be && 37 == e.keyCode || "mac" == be && 38 == e.keyCode) && !e.ctrlKey && e.altKey && !e.shiftKey && (n = d.getPreviousTab(),
                                        n && (n.select(),
                                            s = !0));
                                    return s ? (e.stopPropagation(),
                                        e.preventDefault(),
                                        !1) : void 0
                                }
                            }
                            , !0),
                            window.addEventListener("keydown", e=>{
                                    let t, n, s = !1;
                                    if ("keydown" == e.type && !e.defaultPrevented) {
                                        if (112 == e.keyCode)
                                            t = d.getTabById("help"),
                                            t && t.select(),
                                                s = !0;
                                        else if (38 != e.keyCode && 40 != e.keyCode || !e.shiftKey) {
                                            if (70 == e.keyCode && (e.ctrlKey || e.metaKey)) {
                                                if (t = d.getTabById("dashboard"),
                                                    !t.isSelected())
                                                    return;
                                                b.multiselect.toggleRow(!0, !0),
                                                    s = !0
                                            } else if (65 == e.keyCode && (e.ctrlKey || e.metaKey)) {
                                                if (t = d.getTabById("dashboard"),
                                                !t.isSelected() || e.target && "text" == e.target.type)
                                                    return;
                                                b.multiselect.un_selectAll(!0),
                                                    s = !0
                                            }
                                        } else {
                                            if (t = d.getTabById("dashboard"),
                                                !t.isSelected())
                                                return;
                                            let a = Xe.length && Xe[Xe.length - 1];
                                            a && (a = $(a)) && (()=>{
                                                    s = !0;
                                                    const t = a.closest("tr");
                                                    if (!t.length)
                                                        return;
                                                    let o, i;
                                                    if (38 == e.keyCode ? (n = t.prevAll("tr:visible:first"),
                                                        o = !0) : (n = t.nextAll("tr:visible:first"),
                                                        o = !1),
                                                        !n.length)
                                                        return;
                                                    const r = n.find('input[name="scriptselectors"]');
                                                    Xe.includes(r[0]) ? (Xe.pop(),
                                                        a.prop("checked", !1),
                                                        a.removeClass("selected"),
                                                        i = a) : r.length && (r.prop("checked", !0),
                                                        r.addClass("selected"),
                                                        Xe.push(r[0]),
                                                    void 0 === Xe.direction && (Xe.direction = o),
                                                        i = r),
                                                    i && (N.isScrolledIntoView(n, {
                                                        padding: 100
                                                    }) || $("html, body").animate({
                                                        scrollTop: o ? n.offset().top - 100 - n.height() : n.offset().top - $(window).height() + 100 + 2 * n.height()
                                                    }, 0),
                                                        b.multiselect.single_click())
                                                }
                                            )()
                                        }
                                        return s ? (e.stopPropagation(),
                                            e.preventDefault(),
                                            !1) : void 0
                                    }
                                }
                                , !1);
                        const _e = (()=>{
                                const e = {}
                                    , t = ()=>{
                                        ke = Object(s.getUrlArgs)(!0),
                                            Object.keys(e).forEach(t=>{
                                                    const n = e[t];
                                                    i.is(n.main, n.sub) && n.fn()
                                                }
                                            )
                                    }
                                ;
                                let a;
                                t(),
                                    window.onhashchange = function() {
                                        a || t.apply(this, arguments)
                                    }
                                ;
                                const o = e=>{
                                    a = !0,
                                        e(),
                                        a = !1
                                }
                                    , i = {
                                    set: function(e) {
                                        const n = i.get();
                                        let s;
                                        s = "object" == typeof e ? [e.main, e.sub].filter(e=>e) : arguments,
                                        n.main === s[0] && n.sub === s[1] || (!s[0] && s[1] ? i.setSub(s[1]) : o(()=>{
                                                window.location.hash = "nav=" + [].join.call(s, "+"),
                                                    t()
                                            }
                                        ))
                                    },
                                    setSub: function(e) {
                                        const n = i.get();
                                        n.sub !== e && o(()=>{
                                                window.location.hash = "nav=" + (n.main ? n.main : "") + "+" + e,
                                                    t()
                                            }
                                        )
                                    },
                                    get: function() {
                                        const e = ke.nav ? ke.nav.split("+") : [];
                                        return {
                                            main: e[0],
                                            sub: e[1]
                                        }
                                    },
                                    is: function(e, t) {
                                        const n = i.get()
                                            , s = !e || n.main === e
                                            , a = !t || n.sub === t;
                                        return s && a
                                    },
                                    isSub: function(e) {
                                        return i.is(null, e)
                                    },
                                    registerListener: function(t, n, s) {
                                        void 0 === s && (s = n,
                                            n = null);
                                        const a = [t, n].join("+");
                                        return e[a] = {
                                            main: t,
                                            sub: n,
                                            fn: s
                                        },
                                        i.is(t, n) && s(),
                                            a
                                    },
                                    unregisterListener: function(t) {
                                        delete e[t]
                                    },
                                    clear: function() {
                                        i.set("")
                                    }
                                }
                                    , r = i.get();
                                return n.push(()=>{
                                        const e = d.getTabById(r.main);
                                        if (e)
                                            return e.select(!0);
                                        if (r.main) {
                                            const e = d.getTabById("dashboard");
                                            e && e.select(!0),
                                                n.push(()=>{
                                                        window.setTimeout(()=>{
                                                                i.set(r)
                                                            }
                                                            , 1)
                                                    }
                                                )
                                        } else
                                            window.onhashchange()
                                    }
                                ),
                                    i
                            }
                        )();
                        n.push(()=>{
                                t.statistics_enabled && k.a.init("opt", !0, {
                                    trackView: !1,
                                    version: rea.extension.manifest.version
                                })
                            }
                        );
                        const Re = Object(s.getDebouncer)(1e3)
                            , ve = ()=>{
                                for (; n.length; )
                                    try {
                                        n.shift()()
                                    } catch (e) {
                                        console.warn("doneListeners:", e)
                                    }
                            }
                            , we = (e,t)=>{
                                const n = o("input", e.name, e.id, "Save");
                                return n.inserted || (n.type = "button",
                                    n.section = e,
                                    n.disabled = !0,
                                    n.value = r.a.getMessage("Save"),
                                    n.addEventListener("click", (function() {
                                            if (t && t.warning && !x(t.warning))
                                                return;
                                            const e = $(this.section).find("input, select, textarea").toArray()
                                                , n = []
                                                , a = [];
                                            for (let o = 0; o < e.length; o++) {
                                                let i = null;
                                                const A = e[o]
                                                    , l = A.key;
                                                if (!a.includes(A)) {
                                                    if ("textarea" == A.tagName.toLowerCase())
                                                        if (A.named) {
                                                            const e = document.getElementsByName(A.name);
                                                            i = [],
                                                                Object(s.each)(e, e=>{
                                                                        i.push({
                                                                            name: e.named_name,
                                                                            value: e.value
                                                                        }),
                                                                            a.push(e)
                                                                    }
                                                                )
                                                        } else if (A.array)
                                                            i = A.value.split("\n").map(e=>e.trim()).filter(e=>e);
                                                        else if (A.json) {
                                                            let e;
                                                            try {
                                                                i = (e = A.value) && (e = e.trim()) ? JSON.parse(e) : null
                                                            } catch (e) {
                                                                return void Object(s.cAlert)(r.a.getMessage("Unable_to_parse_0name0", A.name))
                                                            }
                                                        } else
                                                            i = A.value;
                                                    else if ("checkbox" == A.getAttribute("type"))
                                                        i = A.checked;
                                                    else if ("select" == A.getAttribute("type")) {
                                                        let e = 0;
                                                        A.selectedIndex >= 0 && A.selectedIndex < A.options.length && (e = A.selectedIndex),
                                                            i = A[e] ? A[e].value : A.options[0].value
                                                    } else
                                                        "button" == A.getAttribute("type") || (i = A.value);
                                                    l && n.push(ue(l, i, t && t.reload))
                                                }
                                            }
                                            t && t.reload && (u(),
                                                f.Deferred.when(n).done(()=>{
                                                        rea.page.reload()
                                                    }
                                                ))
                                        }
                                    ), !1)),
                                    n
                            }
                            , ye = (i,A,c,d)=>{
                                let u, g, m, h, k, _, R = [];
                                const v = (e,t)=>{
                                        if (c)
                                            if (c.save_button)
                                                $(e).on("change", ()=>{
                                                        c.save_button.disabled = !1
                                                    }
                                                ),
                                                    $(t).on("input propertychange", ()=>{
                                                            c.save_button.disabled = !1
                                                        }
                                                    );
                                            else {
                                                const e = "Section needs a save button!";
                                                console.error(e, c)
                                            }
                                    }
                                ;
                                if (A.divider)
                                    return null;
                                if (A.image && (A.image_id = H.get(A.image)),
                                    A.checkbox)
                                    m = function() {
                                        let e = !0;
                                        const t = this;
                                        t.warning && (e = x(t.warning),
                                        e || (t.checked = !t.checked)),
                                        e && ue(this.key, t.checked, t.reload).always(()=>{
                                                t.reload && rea.page.reload(500)
                                            }
                                        )
                                    }
                                        ,
                                    c && c.need_save && (g = null,
                                        m = null),
                                        u = N.createCheckbox(A.name, A, m),
                                        R.push(u.elem),
                                    c && c.save_button && v(null, u.input);
                                else if (A.button)
                                    m = function() {
                                        let e = !0;
                                        const t = this;
                                        t.warning && (e = x(t.warning)),
                                        e && ((e,t,n)=>{
                                                const s = Object(f.Deferred)();
                                                try {
                                                    ae(),
                                                        sendMessage({
                                                                method: "buttonPress",
                                                                name: e,
                                                                data: t
                                                            }, e=>{
                                                                W(),
                                                                    !n && e.items ? (te(),
                                                                        re(e.items, !1)) : p(),
                                                                    s.resolve(e)
                                                            }
                                                        )
                                                } catch (e) {
                                                    console.log("sO: " + e.message),
                                                        s.reject({
                                                            err: e.message
                                                        })
                                                }
                                                return s.promise()
                                            }
                                        )(t.key, t.data, t.ignore).always(()=>{
                                                t.reload && rea.page.reload(500)
                                            }
                                        )
                                    }
                                        ,
                                        u = N.createButton(A.name, A, m),
                                        R.push(u);
                                else if (A.named)
                                    u = N.createNamedSettings(A.name, A),
                                        R.push({
                                            element: u.elem,
                                            validation: u.label
                                        }),
                                        v(null, u.textareas);
                                else if (A.input)
                                    u = N.createTextarea(A.name, A),
                                        R.push({
                                            element: u.elem,
                                            validation: u.label
                                        }),
                                        v(null, u.textarea);
                                else if (A.text)
                                    u = N.createInput(A.name, A),
                                        R.push(u.elem),
                                        v(u.input);
                                else if (A.color)
                                    u = N.createColorChooser(A.name, A),
                                        R.push(u.elem),
                                        v(u.input);
                                else if (A.password)
                                    u = N.createPassword(A.name, A),
                                        R.push(u.elem),
                                        v(u.input);
                                else if (A.select) {
                                    g = function() {
                                        let e = !0;
                                        const t = this;
                                        t.warning && (e = x(t.warning),
                                        e || (t.value = t.oldvalue)),
                                        e && ue(t.key, N.getValue(t), t.reload).always(()=>{
                                                t.reload && rea.page.reload(500)
                                            }
                                        )
                                    }
                                    ;
                                    const e = function() {
                                        let e = !0;
                                        this.selectedOptions.length && this.selectedOptions[0].warning && this.selectedOptions[0].value !== this.oldvalue && (e = x(this.selectedOptions[0].warning),
                                        e || (this.value = this.previousValue || this.oldvalue)),
                                            this.previousValue = this.value
                                    };
                                    c && c.need_save && (g = A.enabler ? function() {
                                            const e = document.getElementsByName("enabled_by_" + this.key)
                                                , t = (this.selectedIndex < this.options.length ? this.options[this.selectedIndex] : this.options[0]).getAttribute("enables")
                                                , n = t ? JSON.parse(t) : {};
                                            Object(s.each)(e, e=>{
                                                    void 0 === n[e.key] || n[e.key] ? e.setAttribute("style", s.staticVars.visible) : e.setAttribute("style", s.staticVars.invisible)
                                                }
                                            )
                                        }
                                        : null),
                                        u = N.createDropDown(A.name, A, A.select, g, e),
                                        R.push(u.elem),
                                    c && c.save_button && v(u.select),
                                    i && A.enabler && (()=>{
                                            const e = g
                                                , t = u;
                                            n.push(()=>{
                                                    e.apply(t.select, [])
                                                }
                                            )
                                        }
                                    )()
                                } else if (A.url) {
                                    const e = o("a", A.name, A.id);
                                    e.href = "#",
                                        e.url = A.url,
                                        e.newtab = A.newtab,
                                    e.inserted || (g = function() {
                                        F(this.url, this.newtab)
                                    }
                                        ,
                                        e.addEventListener("click", g)),
                                        e.textContent = A.name,
                                        R = Array(13),
                                        R[3] = e
                                } else if (A.main_menu_item) {
                                    k = o("div", A.name, A.id),
                                        k.textContent = A.name;
                                    const l = o("div", A.name, A.id, "tab_content")
                                        , u = ((e,i)=>{
                                            const A = (e,t,n,s,o)=>{
                                                    let i;
                                                    const r = a("th", "settingsth", e.name, e.id, t)
                                                        , A = a("a", "settingsth_a", e.name, e.id, t + "_a");
                                                    A.setAttribute("name", "settingsth_a" + e.name);
                                                    const l = a("a", "settingsth_a_up", e.name, e.id, t + "_a_up");
                                                    l.setAttribute("name", "settingsth_a_up" + e.name);
                                                    const c = a("a", "settingsth_a_down", e.name, e.id, t + "_a_down");
                                                    c.setAttribute("name", "settingsth_a_down" + e.name);
                                                    const d = ()=>{
                                                            ((t,n,s)=>{
                                                                    const a = document.getElementsByName("settingsth_a_up" + e.name)
                                                                        , o = document.getElementsByName("settingsth_a_down" + e.name);
                                                                    for (i = 0; i < a.length; i++)
                                                                        a[i].style.display = "none";
                                                                    for (i = 0; i < o.length; i++)
                                                                        o[i].style.display = "none";
                                                                    "up" == S() ? n.style.display = "" : s.style.display = ""
                                                                }
                                                            )(0, l, c)
                                                        }
                                                        , u = ()=>{
                                                            d()
                                                        }
                                                        , p = ()=>{
                                                            window.setTimeout(()=>{
                                                                    O() == s ? L("down" == S() ? "up" : "down") : D(s),
                                                                        V(u)
                                                                }
                                                                , 1)
                                                        }
                                                    ;
                                                    return r.inserted || (r.appendChild(A),
                                                        r.appendChild(c),
                                                        r.appendChild(l),
                                                        A.addEventListener("click", p),
                                                        l.addEventListener("click", p),
                                                        c.addEventListener("click", p),
                                                        A.textContent = n + " ",
                                                        A.href = "#",
                                                        l.innerHTML = "&#x25B4;",
                                                        l.href = "#",
                                                        c.innerHTML = "&#x25BE;",
                                                        c.href = "#"),
                                                        o && !O() ? (D(s),
                                                            L("up"),
                                                            window.setTimeout(d, 1)) : s == O() && window.setTimeout(d, 1),
                                                        r
                                                }
                                            ;
                                            let l, c, d, u, p, g;
                                            if (p = o("tbody", e.name, e.id, "body"),
                                                g = o("thead", e.name, e.id, "head"),
                                                e.scriptTab) {
                                                const p = qe(e)
                                                    , m = He(e);
                                                l = o("table", e.name, e.id, "main"),
                                                l.inserted || l.setAttribute("class", "scripttable multiselect");
                                                const h = a("th", "script_sel", e.name, e.id, "thead_sel");
                                                h.appendChild(p.selAllm);
                                                const f = a("th", "left", e.name, e.id, "thead_multi_action");
                                                f.setAttribute("colspan", z.RUNTIME.MOBILE ? 3 : 11),
                                                    f.appendChild(p.actionBox),
                                                    f.appendChild(m);
                                                const k = a("th", "right", e.name, e.id, "thead_multi_close");
                                                k.appendChild(p.close),
                                                    d = a("tr", "multiselectrow", e.name, e.id, "filler_multi"),
                                                    d.appendChild([h, f, k]),
                                                    u = a("tr", "multiselectscrolldummy", e.name, e.id, "scrolldummy");
                                                const _ = a("th", "left", e.name, e.id, "scrolldummyth");
                                                _.setAttribute("colspan", z.RUNTIME.MOBILE ? 3 : 11),
                                                    u.appendChild([_]),
                                                    c = a("tr", "scripttr multiselectreplaced", e.name, e.id, "filler");
                                                const R = a("th", "script_sel", e.name, e.id, "thead_sel");
                                                R.appendChild(p.selAll);
                                                const v = A(e, "thead_pos", "#", "pos")
                                                    , w = A(e, "thead_en", r.a.getMessage("Enabled"), "enabled")
                                                    , y = A(e, "thead_name", r.a.getMessage("Name"), "name", !0)
                                                    , C = a("th", "settingsth", e.name, e.id, "thead_del");
                                                if (C.textContent = r.a.getMessage("Actions"),
                                                    z.RUNTIME.MOBILE)
                                                    Object(s.each)([R, v, w, y, C], e=>{
                                                            c.appendChild(e)
                                                        }
                                                    );
                                                else {
                                                    const o = A(e, "thead_ver", r.a.getMessage("Version"), "ver")
                                                        , i = a("th", "settingsth ", e.name, e.id, "thead_type")
                                                        , l = a("span", "script_type", e.name, e.id, "thead_type_span");
                                                    l.textContent = r.a.getMessage("Type"),
                                                        i.appendChild(l);
                                                    const d = a("th", "settingsth", e.name, e.id, "thead_sync");
                                                    d.textContent = "";
                                                    const u = A(e, "thead_sites", r.a.getMessage("Sites"), "sites");
                                                    u.width = "25%";
                                                    const p = a("th", "settingsth", e.name, e.id, "thead_features");
                                                    p.textContent = r.a.getMessage("Features");
                                                    const g = A(e, "thead_homepage", r.a.getMessage("Homepage"), "homepage")
                                                        , m = A(e, "thead_updated", r.a.getMessage("Last_updated"), "updated")
                                                        , h = a("th", "settingsth", e.name, e.id, "thead_sort")
                                                        , f = a("span", "sorting", e.name, e.id, "thead_sort_span");
                                                    f.textContent = r.a.getMessage("Sort"),
                                                    "pos" == O() && "up" == S() || f.setAttribute("style", "display: none;"),
                                                        h.appendChild(f);
                                                    const b = ()=>{
                                                            t.sync_enabled && (d.textContent = r.a.getMessage("Imported"))
                                                        }
                                                    ;
                                                    n.push(b),
                                                        Object(s.each)([R, v, w, y, o, i, d, u, p, g, m, h, C], e=>{
                                                                c.appendChild(e)
                                                            }
                                                        )
                                                }
                                                g.appendChild([d, u, c]),
                                                c.inserted || (b.multiselect.checkScroll = ()=>{
                                                    const e = $(g)
                                                        , t = e.is(":visible") && $(d).is(":visible") && $(i).scrollTop() > 0;
                                                    e.toggleClass("multiscrolling", t)
                                                }
                                                    ,
                                                    $(i).scroll(b.multiselect.checkScroll))
                                            } else
                                                l = a("table", "settingstable", e.name, e.id, "main");
                                            return l.appendChild(g),
                                                l.appendChild(p),
                                                {
                                                    table: l,
                                                    head: g,
                                                    body: p
                                                }
                                        }
                                    )(A, l);
                                    l.appendChild(u.table);
                                    let g = null;
                                    const m = d.appendTab(A.id, k, l, t=>{
                                            t.then(()=>{
                                                    g && (e.global ? g() : n.push(g)),
                                                        _e.set(A.id),
                                                        document.title = A.name
                                                }
                                            )
                                        }
                                    );
                                    _e.registerListener(A.id, ()=>{
                                            m.select()
                                        }
                                    ),
                                    A.referrer && (g = ()=>{
                                            g = null,
                                                ae(50),
                                                pe({
                                                        referrer: A.referrer
                                                    }, e=>{
                                                        e.items && e.items.forEach(e=>{
                                                                ye(i, e, c, d)
                                                            }
                                                        ),
                                                            ve(),
                                                            W(),
                                                            p()
                                                    }
                                                )
                                        }
                                    ),
                                    A.items && Ce(u.body, A.items, null, d),
                                    !e.global && A.selected_default && n.push(()=>{
                                            d.getSelectedTab() || m.select()
                                        }
                                    )
                                } else if (A.sub_menu_item)
                                    h = a("div", "section type_" + A.id, A.name, A.id, "section"),
                                        k = a("div", "section_head", A.name, A.id, "head"),
                                        _ = a("table", "section_content", A.name, A.id, "content"),
                                        k.textContent = A.name,
                                        h.appendChild(k),
                                    A.desc && N.setHelp(A.desc, k, k, A),
                                        h.appendChild(_),
                                    A.need_save && (A.save_button = we(_, A)),
                                        Ce(_, A.items, A, d),
                                    A.save_button && _.appendChild(A.save_button),
                                        R.push(h);
                                else if (A.userscript)
                                    if (R = Le(A, i, d),
                                    A.userscript && (l[A.uuid] = {
                                        dom: i,
                                        script: A
                                    }),
                                        i.setAttribute("class", "scripttr"),
                                        A.nnew)
                                        i.setAttribute("style", "display: none;");
                                    else {
                                        const t = "script_refresh";
                                        Re.is(t) || (n.push(()=>{
                                                P.init(Object.values(l).map(e=>e.script)),
                                                    b.multiselect.single_click(),
                                                    V(),
                                                    e.scripts = !0,
                                                    Re.clear()
                                            }
                                        ),
                                            Re.add(t))
                                    }
                                else if (A.globalhint)
                                    K(Object(s.copy)(A.options, {
                                        onclick: A.options.info_url ? ()=>{
                                                F(A.options.info_url, !0)
                                            }
                                            : null
                                    }));
                                else {
                                    const e = o("span", "", A.uuid || A.id + A.name);
                                    e.textContent = A.name,
                                        R = Array(13),
                                        R[3] = e
                                }
                                return R.forEach(e=>{
                                        if (e) {
                                            if (void 0 !== A.level && (e.element || e).setAttribute("style", A.level > t.configMode ? s.staticVars.invisible : s.staticVars.visible || ""),
                                                A.hint) {
                                                const t = o("span", "", A.uuid || A.id + A.name, "hint");
                                                t.textContent = A.hint,
                                                    e.appendChild(t)
                                            }
                                            A.validation && xe(A, e.validation || e.element || e),
                                            A.width && e.setAttribute("class", "width-172-" + A.width)
                                        }
                                    }
                                ),
                                i && (_ = i.getAttribute("class"),
                                    k = " hide",
                                    !1 === A.visible ? _ = (_ || "") + k : _ && (_ = _.replace(k, "")),
                                    i.setAttribute("class", _)),
                                    R
                            }
                            , Ce = (e,t,n,o)=>{
                                Object.keys(t).forEach(i=>{
                                        const r = t[i]
                                            , A = e ? a("tr", "settingstr", r.uuid || r.id + r.name, "pi") : null
                                            , l = ye(A, r, n, o);
                                        l && l.length && (e && e.appendChild(A),
                                            Object(s.each)(l, (e,t)=>{
                                                    let n = e
                                                        , o = "";
                                                    "Object" === Object(s.toType)(e) && (n = e.element,
                                                        o = e.style || "");
                                                    const i = a("td", o + " settingstd", "", r.uuid || r.id + r.name, t);
                                                    e && i.appendChild(n),
                                                    A && A.appendChild(i)
                                                }
                                            ))
                                    }
                                )
                            }
                            , xe = (e,t)=>{
                                let n;
                                if (e.validation) {
                                    e.validation.url && (n = function() {
                                            F(this.url, !0)
                                        }
                                    );
                                    const s = N.createAfterIcon(e, n);
                                    s && (s.url = e.validation ? e.validation.url : void 0,
                                        t.appendChild(s))
                                }
                            }
                            , Ge = e=>{
                                const t = e.meta || {}
                                    , n = e.settings || {}
                                    , s = e=>({
                                    url: e.meta.url,
                                    sri: e.meta.sri,
                                    ts: e.meta.ts,
                                    mimetype: e.meta.mimetype,
                                    modified: e.meta.modified,
                                    content: e.source
                                });
                                return {
                                    source: e.source,
                                    name: t.name,
                                    uuid: t.uuid,
                                    file_url: t.file_url,
                                    options: e.options,
                                    storage: e.storage,
                                    lastModified: t.modified,
                                    enabled: n.enabled,
                                    position: n.position,
                                    resources: e.resources ? e.resources.map(s) : [],
                                    requires: e.requires ? e.requires.map(s) : []
                                }
                            }
                            , Me = (e,t)=>{
                                const n = Object(f.Deferred)()
                                    , s = [];
                                return ((e,t)=>{
                                        const n = [];
                                        let s, a = Object(f.Deferred)();
                                        const o = e=>{
                                                a && (e && a.reject(),
                                                s && s.disconnect(),
                                                    a = null)
                                            }
                                        ;
                                        try {
                                            ae(),
                                                s = rea.extension.connect("exportToJson"),
                                                s.onMessage.addListener(e=>{
                                                        if (a)
                                                            if (e.partial && n.push(e.partial),
                                                                e.done) {
                                                                const e = n.join("");
                                                                let t;
                                                                try {
                                                                    t = JSON.parse(e)
                                                                } catch (e) {}
                                                                W(),
                                                                    p(),
                                                                    t ? a.resolve(t) : a.reject(),
                                                                    o()
                                                            } else
                                                                e.error && o(!0)
                                                    }
                                                ),
                                                s.onDisconnect.addListener(()=>{
                                                        o(!0)
                                                    }
                                                ),
                                                s.postMessage({
                                                    method: "exportToJson",
                                                    ids: e,
                                                    options: t
                                                })
                                        } catch (e) {
                                            console.log("eJ: " + e.message),
                                                o(!0)
                                        }
                                        return a.promise()
                                    }
                                )(e, t).done(e=>{
                                        e.scripts.forEach(e=>{
                                                e.uuid && e.userscript && !e.system && !e.nnew && (e.code && "" != e.code.trim() ? s.push((e=>{
                                                        const t = e=>e.url ? {
                                                            meta: {
                                                                name: _.default.parse(e.url).pathname.split("/").pop(),
                                                                url: e.url,
                                                                sri: e.sri,
                                                                ts: e.ts,
                                                                mimetype: e.mimetype,
                                                                modified: e.modified
                                                            },
                                                            source: e.data.content
                                                        } : void 0
                                                            , n = e=>e;
                                                        return {
                                                            source: e.code,
                                                            meta: {
                                                                name: e.name,
                                                                uuid: e.uuid,
                                                                modified: e.lastModified,
                                                                file_url: e.file_url && e.file_url.trim() ? e.file_url : void 0
                                                            },
                                                            storage: e.storage,
                                                            options: e.options,
                                                            settings: {
                                                                enabled: e.enabled,
                                                                position: e.position
                                                            },
                                                            resources: e.resources ? e.resources.map(t).filter(n) : [],
                                                            requires: e.requires ? e.requires.map(t).filter(n) : []
                                                        }
                                                    }
                                                )(e)) : console.log("options: Strange script: " + e.name))
                                            }
                                        ),
                                            n.resolve({
                                                scripts: s,
                                                global_settings: e.global_settings
                                            })
                                    }
                                ).fail(()=>{
                                        n.reject()
                                    }
                                ),
                                    n.promise()
                            }
                        ;
                        let Ee = ()=>{
                                if (z.RUNTIME.SHARED_OBJECT_URLS)
                                    return window.saveAs = (e,t)=>{
                                        const n = URL.createObjectURL(e);
                                        fe(n, t, ()=>{
                                                URL.revokeObjectURL(n)
                                            }
                                        )
                                    }
                                        ,
                                        f.Deferred.Pledge();
                                if (z.RUNTIME.SAFARI)
                                    return window.saveAs = (e,t)=>{
                                        v.default.blob2dataUri(e, e=>fe(e, t))
                                    }
                                        ,
                                        f.Deferred.Pledge();
                                if (z.RUNTIME.EDGE && window.navigator && window.navigator.msSaveBlob)
                                    return window.saveAs = (e,t)=>{
                                        window.navigator.msSaveBlob(e, t)
                                    }
                                        ,
                                        f.Deferred.Pledge();
                                {
                                    const e = Object(f.Deferred)();
                                    return Object(y.vendor)(["vendor/saveas/filesaver"], ()=>{
                                            Ee = f.Deferred.Pledge,
                                                e.resolve()
                                        }
                                    ),
                                        e.promise()
                                }
                            }
                        ;
                        const Ze = e=>{
                                const i = {
                                    name: "utils",
                                    id: "utils"
                                }
                                    , A = o("div", i.name, i.id, "tab_util_h")
                                    , l = A.textContent = r.a.getMessage("Utilities")
                                    , d = o("div", i.name, i.id, "tab_util");
                                e.appendTab(i.id, A, d, e=>{
                                        e.then(()=>{
                                                _e.set(i.id),
                                                    document.title = l
                                            }
                                        )
                                    }
                                ).show();
                                const h = a("div", "tv_util", i.name, i.id, "tab_util_cont");
                                let b = ()=>{
                                    T.a.init(e=>{
                                            let t = Object(f.Deferred)();
                                            const n = rea.extension.connect("tabWatch");
                                            return n.onMessage.addListener(e=>{
                                                    let s;
                                                    t && ((s = e.tab) ? t.notify(s) : (t.resolve(),
                                                        t = null,
                                                        n.disconnect()))
                                                }
                                            ),
                                                n.onDisconnect.addListener(()=>{
                                                        t && t.resolve()
                                                    }
                                                ),
                                                n.postMessage({
                                                    method: "tabWatch",
                                                    url: e.url
                                                }),
                                                {
                                                    promise: t.promise(),
                                                    close: function() {
                                                        t && t.resolve(),
                                                            n.disconnect()
                                                    }
                                                }
                                        }
                                    ),
                                        b = null
                                }
                                    , k = {};
                                const _ = e=>{
                                    let t, n;
                                    return t = "webdav" == e && (n = c.cloud_config) ? {
                                        url: n.url,
                                        basic_auth: v.default.Base64.encode(n.user + ":" + n.pass)
                                    } : {},
                                        k[e] = k[e] || T.a[e](t)
                                }
                                    , R = ()=>Me(null, {
                                    storage: c.script_storage,
                                    global_settings: c.add_tm_settings,
                                    externals: c.include_externals
                                }).then(e=>(u(),
                                    G.create(e.scripts, e.global_settings).progress(u).done(()=>te()).fail(()=>se(r.a.getMessage("Action_failed")))))
                                    , y = e=>{
                                    for (let t, n = 0; t = e[n]; n++)
                                        G.read(t).progress(u).then(e=>ce({
                                            scripts: Object.values(e.scripts).map(e=>Ge(e)),
                                            global_settings: e.global_settings
                                        }, {
                                            reload: !0
                                        })).done(e=>{
                                                e.err && Object(s.cAlert)(e.err)
                                            }
                                        ).fail(()=>{
                                                Object(s.cAlert)(r.a.getMessage("Unable_to_parse_this_"))
                                            }
                                        ).always(p)
                                }
                                    , C = N.createButton(i.name, i.id + "_i_ta", r.a.getMessage("Import"), ()=>{
                                        M.read(V.value).then(e=>ce({
                                            scripts: Object.values(e.scripts).map(e=>Ge(e)),
                                            global_settings: e.global_settings
                                        }, {
                                            reload: !0
                                        })).done(e=>{
                                                e.err && Object(s.cAlert)(e.err)
                                            }
                                        ).fail(()=>{
                                                Object(s.cAlert)(r.a.getMessage("Unable_to_parse_this_"))
                                            }
                                        )
                                    }
                                )
                                    , x = N.createFileSelect(r.a.getMessage("Import"), {
                                    name: "zip",
                                    id: i.id
                                }, e=>(u(),
                                    y(e)))
                                    , E = N.createFileSelect(r.a.getMessage("Import"), {
                                        name: "file",
                                        id: i.id
                                    }, e=>{
                                        u();
                                        for (let t, n = 0; t = e[n]; n++)
                                            w.a.readAsText(t).then(e=>M.read(e).then(e=>ce({
                                                scripts: Object.values(e.scripts).map(e=>Ge(e)),
                                                global_settings: e.global_settings
                                            }, {
                                                reload: !0
                                            }), (function() {
                                                    return le({
                                                        code: e
                                                    }, {
                                                        reload: !0
                                                    })
                                                }
                                            ))).done(e=>{
                                                    e.err && Object(s.cAlert)(e.err)
                                                }
                                            ).fail(()=>{
                                                    Object(s.cAlert)(r.a.getMessage("Unable_to_parse_this_"))
                                                }
                                            ).always(p)
                                    }
                                )
                                    , Z = N.createButton(i.name, i.id + "_i_cloud", r.a.getMessage("Show_backups"), ()=>{
                                        u();
                                        const e = ie.select.value
                                            , t = ie.select.selectedOptions[0].text;
                                        b && b(),
                                            _(e).list().progress(e=>{
                                                    e.total > 0 && u(t + ": " + Math.floor(e.loaded / e.total * 100) + "%")
                                                }
                                            ).then(e=>(e = e.filter(e=>e.name.match(/\.zip$/))).length ? e : f.Deferred.Breach("empty")).then(t=>{
                                                    const n = Object(f.Deferred)()
                                                        , s = $('<table class="nowrap file_select">');
                                                    $('<thead><tr><th colspan="3">' + r.a.getMessage("Please_select_a_file") + ":</th></tr></thead>").appendTo(s),
                                                        t.sort((e,t)=>e.modified - t.modified).forEach(t=>{
                                                                const a = $('<input class="button" type="button" value="' + r.a.getMessage("Import") + '">').click(()=>{
                                                                        n.resolve(t),
                                                                            m(),
                                                                            u()
                                                                    }
                                                                )
                                                                    , o = $('<input class="button" type="button" value="' + r.a.getMessage("Delete") + '">').click(()=>{
                                                                        i.hide(),
                                                                            _(e).delete(t)
                                                                    }
                                                                )
                                                                    , i = $("<tr><td>" + [N.safeTagsReplace(t.name), U.formatBytes(t.size, 2), new Date(t.modified).toLocaleString().replace((new Date).toLocaleDateString(), r.a.getMessage("Today"))].join("</td><td>") + "</td></tr>");
                                                                $("<td>").append(a, o).appendTo(i),
                                                                    i.appendTo(s)
                                                            }
                                                        );
                                                    const a = $('<input class="button" type="button" value="' + r.a.getMessage("Cancel") + '">').click(()=>{
                                                            n.reject("cancel"),
                                                                m()
                                                        }
                                                    );
                                                    return $("<tfoot>").append($("<tr>").append($('<td colspan="3">').append(a))).appendTo(s),
                                                        p(),
                                                        g(s[0]),
                                                        n.promise()
                                                }
                                            ).then(n=>_(e).get(n).progress(e=>{
                                                    e.total > 0 && u(t + ": " + Math.floor(e.loaded / e.total * 100) + "%")
                                                }
                                            )).then(e=>y([e])).fail(e=>{
                                                    let t;
                                                    "empty" === e ? t = r.a.getMessage("No_backups_found") : "cancel" == e || ("auth_failed" == e ? console.warn("cloud: Authentication failed") : t = r.a.getMessage("Error") + ": " + (e || r.a.getMessage("Action_failed"))),
                                                    t && Object(s.cAlert)(t),
                                                        p()
                                                }
                                            )
                                    }
                                )
                                    , I = N.createButton(i.name, i.id + "_i_url", r.a.getMessage("Install"), ()=>(u(),
                                    le({
                                        url: be.value
                                    }, {
                                        reload: !0
                                    }).fail(e=>{
                                            const t = e.err ? e.err : r.a.getMessage("Unable_to_parse_this_");
                                            Object(s.cAlert)(t)
                                        }
                                    ).always(p)))
                                    , F = N.createButton(i.name, i.id + "_e_ta", r.a.getMessage("Export"), ()=>{
                                        u(),
                                            Me(null, {
                                                storage: c.script_storage,
                                                global_settings: c.add_tm_settings,
                                                externals: c.include_externals
                                            }).then(e=>M.create(e.scripts, e.global_settings)).done(e=>{
                                                    V.value = e,
                                                        te()
                                                }
                                            ).fail(()=>se(r.a.getMessage("Action_failed"))).always(p)
                                    }
                                )
                                    , j = N.createButton(i.name, i.id + "_e_file", r.a.getMessage("Export"), ()=>{
                                        u(),
                                            Me(null, {
                                                storage: c.script_storage,
                                                global_settings: c.add_tm_settings,
                                                externals: c.include_externals
                                            }).then(e=>M.create(e.scripts, e.global_settings).then(e=>Ee().done(()=>{
                                                    const t = new Blob([e],{
                                                        type: "text/plain"
                                                    });
                                                    saveAs(t, Object(s.safeFileName)("tampermonkey-backup-" + z.RUNTIME.BROWSER + "-" + (new Date).toISOString().replace(/[.:]/g, "-") + ".txt")),
                                                        te()
                                                }
                                            ))).fail(()=>se(r.a.getMessage("Action_failed"))).always(p)
                                    }
                                )
                                    , B = N.createButton(i.name, i.id + "_e_zip", r.a.getMessage("Export"), ()=>R().then(e=>Ee().done(()=>{
                                        saveAs(e, Object(s.safeFileName)("tampermonkey-backup-" + z.RUNTIME.BROWSER + "-" + (new Date).toISOString().replace(/[.:]/g, "-") + ".zip"))
                                    }
                                )).always(p))
                                    , O = N.createButton(i.name, i.id + "_e_zip", r.a.getMessage("Export"), ()=>{
                                        const e = Object(f.Deferred)()
                                            , t = ie.select.value
                                            , n = ie.select.selectedOptions[0].text;
                                        return Object(s.cPrompt)(r.a.getMessage("Name"), "backup-" + z.RUNTIME.BROWSER + "-" + (new Date).toISOString().replace(/[.:]/g, "-"), a=>{
                                                a ? e.consume((e=>R().then(s=>(u(n + "..."),
                                                b && b(),
                                                    _(t).put(e + ".zip", s).progress(e=>{
                                                            e.total > 0 && u(n + ":" + Math.floor(e.loaded / e.total * 100) + "%")
                                                        }
                                                    ))).fail(e=>{
                                                        Object(s.cAlert)(r.a.getMessage("Error") + ": " + (e || r.a.getMessage("Action_failed")))
                                                    }
                                                ).always(p))(a)) : e.reject("aborted")
                                            }
                                        ),
                                            e.promise()
                                    }
                                )
                                    , S = N.createCheckbox(r.a.getMessage("Include_TM_settings"), {
                                    id: i.id + "_e_export_tm_settings",
                                    enabled: "true"
                                }, (function() {
                                        c.add_tm_settings = this.checked,
                                        z.HTML5.LOCALSTORAGE && z.HTML5.LOCALSTORAGE.setItem("export_tm_settings", c.add_tm_settings)
                                    }
                                ));
                                S.elem.setAttribute("style", "padding-left: 2px"),
                                    S.input.checked = c.add_tm_settings;
                                const D = N.createCheckbox(r.a.getMessage("Include_script_storage"), {
                                    id: i.id + "_e_export_storage",
                                    enabled: "true"
                                }, (function() {
                                        c.script_storage = this.checked,
                                        z.HTML5.LOCALSTORAGE && z.HTML5.LOCALSTORAGE.setItem("export_script_storage", c.script_storage)
                                    }
                                ));
                                D.elem.setAttribute("style", "padding-left: 2px; display: inline"),
                                    D.input.checked = c.script_storage;
                                const L = N.createCheckbox(r.a.getMessage("Include_script_externals"), {
                                    id: i.id + "_e_export_externals",
                                    enabled: "true"
                                }, (function() {
                                        c.include_externals = this.checked,
                                        z.HTML5.LOCALSTORAGE && z.HTML5.LOCALSTORAGE.setItem("export_externals", c.include_externals)
                                    }
                                ));
                                L.elem.setAttribute("style", "padding-left: 2px"),
                                    L.input.checked = c.include_externals;
                                var V = a("textarea", "importta", i.name, i.id, "ta");
                                V.setAttribute("spellcheck", "false");
                                const P = a("div", "section", i.name, i.id, "ta")
                                    , Q = a("div", "section_head", i.name, i.id, "head_ta")
                                    , H = a("div", "section_content", i.name, i.id, "content_ta");
                                Q.textContent = r.a.getMessage("General"),
                                    H.appendChild(D.elem),
                                    H.appendChild(S.elem),
                                    H.appendChild(L.elem),
                                    P.appendChild(Q),
                                    P.appendChild(H);
                                const X = a("div", "section", i.name, i.id, "ta")
                                    , Y = a("div", "section_head", i.name, i.id, "head_ta")
                                    , J = a("div", "section_content", i.name, i.id, "content_ta");
                                Y.textContent = r.a.getMessage("TextArea"),
                                    J.appendChild(F),
                                    J.appendChild(C),
                                    J.appendChild(V),
                                    X.appendChild(Y),
                                    X.appendChild(J);
                                const q = a("div", "section", i.name, i.id, "sb")
                                    , W = a("div", "section_head", i.name, i.id, "head_sb")
                                    , K = a("div", "section_content", i.name, i.id, "content_sb");
                                W.textContent = r.a.getMessage("Zip"),
                                    q.appendChild(W),
                                    q.appendChild(K),
                                    K.appendChild(B),
                                    K.appendChild(x.elem);
                                const ee = a("div", "section", i.name, i.id, "sb")
                                    , ne = a("div", "section_head", i.name, i.id, "head_sb")
                                    , ae = a("div", "section_content", i.name, i.id, "content_sb")
                                    , oe = function() {
                                    $(pe).toggle("webdav" === this.value);
                                    const e = _(this.value);
                                    $(ge).toggle(e && !!e.revoke)
                                };
                                var ie = N.createDropDown(r.a.getMessage("Type"), {
                                    id: "cloud_type",
                                    value: "edge" == z.RUNTIME.BROWSER ? "onedrive" : "drive"
                                }, [{
                                    name: r.a.getMessage("Google_Drive"),
                                    value: "drive"
                                }, "safari" == z.RUNTIME.BROWSER ? null : {
                                    name: r.a.getMessage("Dropbox"),
                                    value: "dropbox"
                                }, {
                                    name: r.a.getMessage("OneDrive"),
                                    value: "onedrive"
                                }, "safari" == z.RUNTIME.BROWSER ? null : {
                                    name: r.a.getMessage("Yandex_Disk"),
                                    value: "yandex"
                                }, "safari" == z.RUNTIME.BROWSER ? null : {
                                    name: r.a.getMessage("WebDAV"),
                                    value: "webdav"
                                }].filter(e=>e), oe);
                                const re = e=>function() {
                                    let t;
                                    k = {},
                                        (c.cloud_config = c.cloud_config || {})[e] = this.value,
                                    (t = z.HTML5.LOCALSTORAGE) && t.setItem("cloud_config", v.default.Base64.encode(JSON.stringify(c.cloud_config)))
                                }
                                    , Ae = N.createInput(r.a.getMessage("URL"), {
                                    id: "select_cloud_url",
                                    uuid: i.uuid,
                                    value: (c.cloud_config ? c.cloud_config.url : null) || ""
                                }, re("url"))
                                    , de = N.createInput(r.a.getMessage("Login"), {
                                    id: "select_cloud_username",
                                    uuid: i.uuid,
                                    value: (c.cloud_config ? c.cloud_config.user : null) || ""
                                }, re("user"))
                                    , ue = N.createInput(r.a.getMessage("Password"), {
                                    id: "select_cloud_password",
                                    uuid: i.uuid,
                                    password: !0,
                                    value: (c.cloud_config ? c.cloud_config.pass : null) || ""
                                }, re("pass"))
                                    , pe = [Ae.elem, de.elem, ue.elem];
                                n.push(()=>{
                                        oe.apply(ie.select, [])
                                    }
                                ),
                                    ne.textContent = r.a.getMessage("Cloud"),
                                    ee.appendChild(ne),
                                    ee.appendChild(ae),
                                    ae.appendChild([ie.elem].concat(pe)),
                                    ae.appendChild(O),
                                    ae.appendChild(Z);
                                const ge = N.createButton("revoke_token_button", i.uuid, r.a.getMessage("Revoke_Access_Token"), ()=>{
                                        b && b(),
                                            $(ge).prop("disabled", !0);
                                        const e = _(ie.select.value);
                                        u(),
                                            e.revoke().then(()=>w.a.sleep(15e3)).done(te).fail(()=>se(r.a.getMessage("Action_failed"))).always(()=>{
                                                    p(),
                                                        $(ge).prop("disabled", !1)
                                                }
                                            )
                                    }
                                );
                                ae.appendChild(ge);
                                const me = a("div", "section", i.name, i.id, "fi")
                                    , he = a("div", "section_head", i.name, i.id, "head_fi")
                                    , fe = a("div", "section_content", i.name, i.id, "content_fi");
                                he.textContent = r.a.getMessage("File"),
                                    me.appendChild(he),
                                    me.appendChild(fe),
                                    fe.appendChild(j),
                                    fe.appendChild(E.elem);
                                const be = a("input", "updateurl_input", i.name, i.id, "url");
                                be.setAttribute("type", "text"),
                                    be.setAttribute("spellcheck", "false");
                                const ke = a("div", "section", i.name, i.id, "ur")
                                    , Re = a("div", "section_head", i.name, i.id, "head_ur")
                                    , ve = a("div", "section_content", i.name, i.id, "content_ur");
                                Re.textContent = r.a.getMessage("Install_from_URL"),
                                    ke.appendChild(Re),
                                    ke.appendChild(ve),
                                    ve.appendChild(be),
                                    ve.appendChild(I),
                                    h.appendChild(P),
                                "undefined" != typeof Blob && h.appendChild(ee),
                                z.RUNTIME.CAN_SAVEAS_ZIP && h.appendChild(q),
                                "undefined" != typeof Blob && h.appendChild(me),
                                    h.appendChild(X),
                                    h.appendChild(ke),
                                    Object(s.each)([X], e=>{
                                            const n = " hide";
                                            let s = e.getAttribute("class");
                                            t.configMode < 50 ? s += n : s = s.replace(n, ""),
                                                e.setAttribute("class", s)
                                        }
                                    ),
                                    d.appendChild(h)
                            }
                            , Te = e=>{
                                Ce(null, e, null, d),
                                    p(),
                                    ve()
                            }
                            , Ie = (e,t,n,i)=>{
                                void 0 === i && (i = {});
                                const A = t.item
                                    , l = A.uuid + (i.orig || "") + t.id
                                    , c = (i.orig ? "orig_" : "use_") + t.id
                                    , d = e=>"select_" + Object(s.createUniqueId)(e, A.uuid) + "_sel1"
                                    , u = a("div", "cludes", e, l, "cb1")
                                    , p = o("span", e, l, "cb2");
                                if (i.orig) {
                                    const n = function() {
                                        if ("checkbox" == this.type) {
                                            const e = {};
                                            e[this.key] = this.checked,
                                                me(this.uuid, e)
                                        }
                                    }
                                        , s = "merge_" + t.id
                                        , a = !!(A.options && A.options.override && A.options.override[s])
                                        , o = N.createCheckbox(e, {
                                        id: s,
                                        uuid: A.uuid,
                                        enabled: a
                                    }, n);
                                    p.appendChild(o.elem)
                                } else
                                    p.textContent = e;
                                const g = a("select", "cludes", c, A.uuid, "sel1");
                                g.innerHTML = "",
                                    g.setAttribute("size", "6"),
                                    g.setAttribute("multiple", "true");
                                for (let e = 0; e < n.length; e++) {
                                    const t = document.createElement("option");
                                    t.value = t.text = n[e],
                                        g.appendChild(t)
                                }
                                u.appendChild(p),
                                A.desc && N.setHelp(A.desc, u, p, A),
                                    u.appendChild(g);
                                const m = e=>{
                                        const t = []
                                            , n = e && e.options;
                                        for (let e = 0, s = n.length; e < s; e++)
                                            n[e].selected && t.push(n[e]);
                                        return t
                                    }
                                    , h = ()=>{
                                        const e = d("use_" + ("excludes" == t.id ? "includes" : "excludes"))
                                            , n = document.getElementById(e)
                                            , s = m(g);
                                        let a = !1;
                                        const o = "matches" == t.id;
                                        s.forEach(e=>{
                                                const t = o ? "/" + _.default.getRegExpFromMatch(e.value, !0) + "/" : e.value;
                                                let s;
                                                e && !n.querySelector('option[value="' + t + '"]') && (s = e.cloneNode(!0),
                                                o && (s.value = t,
                                                    s.textContent = t),
                                                    n.appendChild(s),
                                                    a = !0)
                                            }
                                        ),
                                        a && v()
                                    }
                                    , f = ()=>{
                                        const e = prompt(r.a.getMessage("Enter_the_new_rule"));
                                        if (e) {
                                            const t = document.createElement("option");
                                            t.value = t.text = e.trim(),
                                                g.appendChild(t),
                                                v()
                                        }
                                    }
                                    , b = ()=>{
                                        const e = g.options[g.selectedIndex];
                                        if (!e)
                                            return;
                                        const t = prompt(r.a.getMessage("Enter_the_new_rule"), e.value);
                                        t && (e.value = e.text = t.trim(),
                                            v())
                                    }
                                    , k = ()=>{
                                        const e = m(g);
                                        let t = !1;
                                        e.forEach(e=>{
                                                e && (e.parentNode.removeChild(e),
                                                    t = !0)
                                            }
                                        ),
                                        t && v()
                                    }
                                    , R = e=>{
                                        const t = [];
                                        for (let n = 0; n < e.options.length; n++)
                                            t.push(e.options[n].value);
                                        return t
                                    }
                                ;
                                var v = ()=>{
                                        const e = {
                                            includes: R(document.getElementById(d("use_includes"))),
                                            matches: R(document.getElementById(d("use_matches"))),
                                            excludes: R(document.getElementById(d("use_excludes"))),
                                            connects: R(document.getElementById(d("use_connects"))),
                                            temp_connects: R(document.getElementById(d("use_temp_connects"))),
                                            blockers: R(document.getElementById(d("use_blockers")))
                                        };
                                        return me(A.uuid, e),
                                            !0
                                    }
                                ;
                                if (i.other_name) {
                                    const t = o("button", e, l, "btn1", !0);
                                    t.textContent = r.a.getMessage("Add_as_0clude0", i.other_name),
                                        t.addEventListener("click", h, !1),
                                        u.appendChild(t)
                                } else if (!i.orig) {
                                    const t = o("button", e, l, "btn2", !0);
                                    t.textContent = r.a.getMessage("Add") + "...",
                                        t.addEventListener("click", f, !1),
                                        u.appendChild(t);
                                    const n = o("button", e, l, "btn3", !0);
                                    n.textContent = r.a.getMessage("Edit") + "...",
                                        n.addEventListener("click", b, !1),
                                        u.appendChild(n);
                                    const s = o("button", e, l, "btn4", !0);
                                    s.textContent = r.a.getMessage("Remove"),
                                        s.addEventListener("click", k, !1),
                                        u.appendChild(s)
                                }
                                return {
                                    elem: u
                                }
                            }
                            , Ue = e=>e.homepage ? e.homepage : e.namespace && 0 == e.namespace.search(/https?:\/\//) ? e.namespace : null
                            , Fe = e=>{
                                const n = "http://" + e + "/"
                                    , s = z.RUNTIME.CHROME ? "chrome://favicon/" + n : null;
                                let a;
                                return a = 0 == n.indexOf("http://userscripts.org/") || 0 == n.indexOf("http://userscripts.com/") ? H.origin("uso") : "native" == t.favicon_service ? n + "favicon.ico" : "duckduckgo" == t.favicon_service ? "https://icons.duckduckgo.com/ip2/" + encodeURIComponent(e) + ".ico" : "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(e),
                                    [a, s]
                            }
                            , je = (e,t)=>{
                                const n = o("div", e.uuid, "script_setting_h")
                                    , s = o("div", e.uuid, "script_settings_c");
                                n.textContent = r.a.getMessage("Settings");
                                const i = function() {
                                    const e = {};
                                    if ("checkbox" == this.type)
                                        e[this.key] = !!this.checked,
                                            me(this.uuid, e);
                                    else if ("button" == this.type)
                                        e[this.key] = !this.oldvalue,
                                            me(this.uuid, e);
                                    else if ("text" == this.type || "textarea" == this.type || "select-one" == this.type) {
                                        const t = N.getValue(this);
                                        e[this.key] = t,
                                            me(this.uuid, e)
                                    }
                                }
                                    , A = N.createCheckbox(r.a.getMessage("Enabled"), {
                                    id: "enabled",
                                    uuid: e.uuid,
                                    name: "upd",
                                    enabled: e.enabled
                                }, i).elem
                                    , l = N.createPosition(r.a.getMessage("Position_") + ": ", {
                                    id: "position",
                                    uuid: e.uuid,
                                    name: "pos",
                                    pos: e.position,
                                    posof: e.positionof
                                }, i)
                                    , c = N.createDropDown(r.a.getMessage("Run_at"), {
                                    id: "run_at",
                                    uuid: e.uuid,
                                    name: "run-at",
                                    value: e.run_at
                                }, [{
                                    name: "document-start",
                                    value: "document-start"
                                }, {
                                    name: "document-body",
                                    value: "document-body"
                                }, {
                                    name: "document-end",
                                    value: "document-end"
                                }, {
                                    name: "document-idle",
                                    value: "document-idle"
                                }, {
                                    name: "context-menu",
                                    value: "context-menu"
                                }, {
                                    name: r.a.getMessage("Default"),
                                    value: null
                                }], i)
                                    , d = N.createDropDown(r.a.getMessage("No_frames"), {
                                    id: "noframes",
                                    uuid: e.uuid,
                                    name: "no_frames",
                                    value: e.noframes
                                }, [{
                                    name: r.a.getMessage("Yes"),
                                    value: !0
                                }, {
                                    name: r.a.getMessage("No"),
                                    value: !1
                                }, {
                                    name: r.a.getMessage("Default"),
                                    value: null
                                }], i)
                                    , u = N.createCheckbox(r.a.getMessage("Check_for_Updates"), {
                                    id: "check_for_updates",
                                    uuid: e.uuid,
                                    name: "upd",
                                    enabled: e.check_for_updates
                                })
                                    , p = N.createInput(r.a.getMessage("Update_URL_"), {
                                    id: "file_url",
                                    uuid: e.uuid,
                                    name: "uu",
                                    value: e.file_url
                                });
                                p.input.setAttribute("class", "updateurl_input"),
                                    p.elem.setAttribute("class", "updateurl"),
                                e.is_external && p.input.setAttribute("readonly", "true");
                                const g = t=>(e.options && e.options.override ? e.options.override[t] : null) || []
                                    , m = Ie(r.a.getMessage("Original_includes"), {
                                    id: "includes",
                                    item: e
                                }, g("orig_includes"), {
                                    orig: !0,
                                    other_name: r.a.getMessage("User_excludes")
                                })
                                    , h = Ie(r.a.getMessage("Original_matches"), {
                                    id: "matches",
                                    item: e
                                }, g("orig_matches"), {
                                    orig: !0,
                                    other_name: r.a.getMessage("User_excludes")
                                })
                                    , f = Ie(r.a.getMessage("Original_excludes"), {
                                    id: "excludes",
                                    item: e
                                }, g("orig_excludes"), {
                                    orig: !0,
                                    other_name: r.a.getMessage("User_includes")
                                })
                                    , b = a("div", "clear", e.uuid, "clear")
                                    , k = Ie(r.a.getMessage("User_includes"), {
                                    id: "includes",
                                    item: e
                                }, g("use_includes"))
                                    , _ = Ie(r.a.getMessage("User_matches"), {
                                    id: "matches",
                                    item: e
                                }, g("use_matches"))
                                    , R = Ie(r.a.getMessage("User_excludes"), {
                                    id: "excludes",
                                    item: e
                                }, g("use_excludes"))
                                    , v = Ie(r.a.getMessage("Original_domain_whitelist"), {
                                    id: "connects",
                                    item: e
                                }, e.connects, {
                                    orig: !0
                                })
                                    , w = Ie(r.a.getMessage("Temporary_domain_whitelist"), {
                                    id: "temp_connects",
                                    item: e
                                }, e.temp_connects)
                                    , y = Ie(r.a.getMessage("User_domain_whitelist"), {
                                    id: "connects",
                                    item: e
                                }, g("use_connects"))
                                    , C = Ie(r.a.getMessage("User_domain_blacklist"), {
                                    id: "blockers",
                                    item: e
                                }, g("use_blockers"))
                                    , x = [N.createCheckbox(r.a.getMessage("Apply_compatibility_options_to_required_script_too"), {
                                    id: "compatopts_for_requires",
                                    uuid: e.uuid,
                                    name: "",
                                    enabled: e.compatopts_for_requires
                                }, i), N.createCheckbox(r.a.getMessage("Fix_wrappedJSObject_property_access"), {
                                    id: "compat_wrappedjsobject",
                                    uuid: e.uuid,
                                    name: "",
                                    enabled: e.compat_wrappedjsobject
                                }, i), N.createCheckbox(r.a.getMessage("Convert_CDATA_sections_into_a_chrome_compatible_format"), {
                                    id: "compat_metadata",
                                    uuid: e.uuid,
                                    name: "",
                                    enabled: e.compat_metadata
                                }, i), N.createCheckbox(r.a.getMessage("Replace_for_each_statements"), {
                                    id: "compat_foreach",
                                    uuid: e.uuid,
                                    name: "",
                                    enabled: e.compat_foreach
                                }, i), N.createCheckbox(r.a.getMessage("Add_toSource_function_to_Object_Prototype"), {
                                    id: "compat_prototypes",
                                    uuid: e.uuid,
                                    name: "",
                                    enabled: e.compat_prototypes
                                }, i)]
                                    , G = a("div", "section", e.uuid, "ta_opt")
                                    , M = a("div", "section_head", e.uuid, "head_ta_opt")
                                    , E = a("div", "section_content", e.uuid, "content_ta_opt");
                                M.textContent = r.a.getMessage("Settings"),
                                    G.appendChild(M),
                                    G.appendChild(E);
                                const Z = a("div", "section", e.uuid, "ta_upd")
                                    , T = a("div", "section_head", e.uuid, "head_ta_upd")
                                    , I = a("div", "section_content", e.uuid, "content_ta_upd");
                                T.textContent = r.a.getMessage("Updates"),
                                    Z.appendChild(T),
                                    Z.appendChild(I);
                                const F = a("div", "section", e.uuid, "ta_cludes")
                                    , j = a("div", "section_head", e.uuid, "head_ta_cludes")
                                    , B = a("div", "section_content", e.uuid, "content_ta_cludes");
                                j.textContent = r.a.getMessage("Includes_Excludes"),
                                    F.appendChild(j),
                                    F.appendChild(B);
                                const O = a("div", "section", e.uuid, "ta_security")
                                    , S = a("div", "section_head", e.uuid, "head_ta_security")
                                    , D = a("div", "section_content", e.uuid, "content_ta_security");
                                S.textContent = r.a.getMessage("XHR_Security"),
                                    O.appendChild(S),
                                    O.appendChild(D);
                                const L = a("div", "section", e.uuid, "ta_compat")
                                    , V = a("div", "section_head", e.uuid, "head_ta_compat")
                                    , P = a("div", "section_content", e.uuid, "content_ta_compat");
                                V.textContent = r.a.getMessage("GM_compat_options_"),
                                    L.appendChild(V),
                                    L.appendChild(P),
                                    E.appendChild(A),
                                    E.appendChild(l),
                                    E.appendChild(c.elem),
                                    E.appendChild(d.elem);
                                const Q = N.createButton("save_update_button", e.uuid, r.a.getMessage("Save"), ()=>{
                                        i.apply(u.input, []),
                                        e.is_external || i.apply(p.input, [])
                                    }
                                );
                                I.appendChild([u.elem, p.elem, Q]),
                                    B.appendChild([m.elem, h.elem, f.elem, b, k.elem, _.elem, R.elem]),
                                    D.appendChild([v.elem, w.elem, y.elem, C.elem]),
                                    s.appendChild([G, Z, F, O]);
                                for (let e = 0; e < x.length; e++)
                                    P.appendChild(x[e].elem);
                                s.appendChild(L);
                                const z = {
                                    name: "",
                                    uuid: e.uuid,
                                    id: "comment",
                                    value: e.options.comment
                                }
                                    , H = N.createTextarea(null, z);
                                H.elem.setAttribute("class", "script_setting_wrapper");
                                const X = o("div", e.uuid, "save")
                                    , Y = N.createButton("save_button", e.uuid, r.a.getMessage("Save"), ()=>{
                                        i.apply(H.textarea, [])
                                    }
                                );
                                X.appendChild(Y);
                                const J = a("div", "section", e.uuid, "ta_comment")
                                    , q = a("div", "section_head", e.uuid, "head_ta_comment")
                                    , W = a("div", "section_content", e.uuid, "content_ta_comment");
                                q.textContent = r.a.getMessage("Comment"),
                                    J.appendChild(q),
                                    J.appendChild(W),
                                    W.appendChild(H.elem),
                                    W.appendChild(X),
                                    s.appendChild(J);
                                const K = a("div", "section", e.uuid, "ta_det")
                                    , $ = a("div", "section_head", e.uuid, "head_ta_det")
                                    , ee = a("div", "section_content", e.uuid, "content_ta_det");
                                $.textContent = r.a.getMessage("Details"),
                                    K.appendChild($),
                                    K.appendChild(ee),
                                    $.textContent = r.a.getMessage("Details");
                                const te = a("table", "script_details", e.uuid, "script_details");
                                [{
                                    label: r.a.getMessage("Size"),
                                    value: U.formatBytes((e.code ? e.code : e).length, 2)
                                }, {
                                    label: r.a.getMessage("UUID"),
                                    value: e.uuid
                                }].forEach(t=>{
                                        const n = a("tr", "external_desc", e.uuid, t.label, "tr")
                                            , s = a("td", "external_desc", e.uuid, t.label, "td1")
                                            , o = a("td", "", e.uuid, t.label, "td2");
                                        s.textContent = t.label,
                                            o.textContent = t.value,
                                            n.appendChild(s),
                                            n.appendChild(o),
                                            te.appendChild(n)
                                    }
                                ),
                                    ee.appendChild(te),
                                    s.appendChild(K);
                                const ne = t.appendTab("settings", n, s, e=>{
                                        e.then(()=>{
                                                _e.setSub("settings")
                                            }
                                        )
                                    }
                                );
                                return _e.registerListener(e.uuid, "settings", ()=>{
                                        ne.select()
                                    }
                                ),
                                    {}
                            }
                            , Be = (e,t,n,i)=>{
                                const A = a("table", "externals", e.uuid, "outer_req2html", t, !0);
                                let l = 0;
                                const c = [{
                                    label: r.a.getMessage("URL"),
                                    prop: "display_url"
                                }, {
                                    label: r.a.getMessage("Size"),
                                    prop: "data",
                                    fn: function(e) {
                                        let t = "?";
                                        return e && (void 0 !== e.length ? t = e.length : void 0 !== e.content && (t = e.content.length)),
                                            U.formatBytes(t, 2)
                                    }
                                }, {
                                    label: r.a.getMessage("MIME_Type"),
                                    prop: "mimetype"
                                }, {
                                    label: r.a.getMessage("Subresource_Integrity"),
                                    prop: "sri",
                                    fn: function(e) {
                                        return e ? e.type + "=" + e.value : r.a.getMessage("_not_set_")
                                    }
                                }, {
                                    label: r.a.getMessage("Last_updated"),
                                    prop: "ts",
                                    fn: function(e) {
                                        return e ? new Date(e).toString() : null
                                    }
                                }];
                                if (c.push({
                                    label: r.a.getMessage("User_modified"),
                                    prop: "modified",
                                    klass: "validation",
                                    title: r.a.getMessage("This_external_resource_will_not_auto_update__Please_delete_it_in_order_to_enable_updates_again_"),
                                    icon: H.get("info"),
                                    fn: function(e) {
                                        return e ? r.a.getMessage("Yes") : null
                                    }
                                }),
                                    e[t].forEach(d=>{
                                            const u = l + Object(s.createUniqueId)(d.url) + t;
                                            c.forEach(t=>{
                                                    let n;
                                                    const s = a("tr", "", e.uuid, t.prop, "tr" + u)
                                                        , o = a("td", "external_label", e.uuid, t.prop, "td1" + u)
                                                        , i = a("td", "external_desc", e.uuid, t.prop, "td2" + u);
                                                    if (o.textContent = t.label,
                                                        i.textContent = n = (t.fn ? t.fn : e=>e)(d[t.prop]),
                                                    null !== n) {
                                                        if (t.klass && $(i).addClass(t.klass),
                                                        t.title && i.setAttribute("title", t.title),
                                                            t.icon) {
                                                            const n = a("span", "validation", e.uuid, "validation", "span" + u);
                                                            n.appendChild(N.createIcon(t.icon + " red", "warning", e.uuid, u + "no_require_update_warning")),
                                                                i.appendChild(n)
                                                        }
                                                        s.appendChild(o),
                                                            s.appendChild(i),
                                                            A.appendChild(s)
                                                    }
                                                }
                                            );
                                            const g = a("tr", "external_desc_buttons", e.uuid, d.url, "tr" + u)
                                                , m = a("td", "", e.uuid, "buttons", "td" + u);
                                            if (g.appendChild(m),
                                                A.appendChild(g),
                                                d.ts) {
                                                if ("requires" == t || d.editable) {
                                                    const t = o("span", e.uuid, "edit_external" + u)
                                                        , s = N.createImageTextButton(e.uuid, "edit_external" + u, r.a.getMessage("Edit"), "edit", ()=>{
                                                            Oe(n, e.uuid, d, i)
                                                        }
                                                    );
                                                    t.appendChild(s),
                                                        m.appendChild(t)
                                                }
                                                const s = o("span", e.uuid, "delete_external" + u)
                                                    , a = N.createImageTextButton(e.uuid, "delete_external" + u, r.a.getMessage("Delete"), "delete", ()=>{
                                                        ((e,t)=>{
                                                                try {
                                                                    ae(),
                                                                        sendMessage({
                                                                                method: "buttonPress",
                                                                                name: "externals_delete",
                                                                                scriptuid: e,
                                                                                safe_url: t
                                                                            }, e=>{
                                                                                W(),
                                                                                    te(),
                                                                                    e.items ? re(e.items, !1) : p()
                                                                            }
                                                                        )
                                                                } catch (e) {
                                                                    console.log("dEx: " + e.message)
                                                                }
                                                            }
                                                        )(e.uuid, d.url),
                                                        a.parentNode && a.parentNode.removeChild(a)
                                                    }
                                                );
                                                s.appendChild(a),
                                                    m.appendChild(s)
                                            }
                                            l++
                                        }
                                    ),
                                    !l) {
                                    const t = a("tr", "script_desc", e.uuid, l, "tr")
                                        , n = a("td", "script_desc", e.uuid, l, "td1");
                                    n.textContent = r.a.getMessage("No_entry_found"),
                                        t.appendChild(n),
                                        A.appendChild(t)
                                }
                                return A
                            }
                            , Oe = (e,t,n,s)=>{
                                const a = "externals-" + t + "-" + n.url;
                                b[a] = {};
                                const o = De({
                                        uuid: a,
                                        script_uuid: t,
                                        mimetype: n.mimetype,
                                        name: r.a.getMessage("Externals") + " - " + n.url,
                                        file_url: n.url,
                                        referrer: "options.scripts.userscripts"
                                    }, e, ()=>{
                                        s(o.getEditor())
                                    }
                                    , ()=>{
                                        delete i["tab" + a],
                                            delete i["editor" + a],
                                            delete b[a]
                                    }
                                );
                                o.show()
                            }
                            , Se = (e,n,A)=>{
                                const l = a("tr", "editor_container p100100", e.uuid, "container")
                                    , c = A.mimetype || "text/javascript"
                                    , d = !c || /(application|text)\/(?:x-)?(?:java|ecma)script/.test(c);
                                if (!e.nnew && C(e.uuid, "lastI"))
                                    return i["editor" + e.uuid] || {};
                                e.nnew && (e.code = (e=>{
                                        const t = ke.url ? v.default.Base64.decode(ke.url) : null;
                                        return e.replace("<$URL$>", t || "http://*/*").replace("<$ICON$>", t ? Fe(_.default.parse(t).domain)[0] : h.a.images.empty)
                                    }
                                )(t.script_templates[0].value));
                                const g = o("div", e.uuid, "script_editor_h")
                                    , m = g.inserted
                                    , k = o("div", e.uuid, "script_editor_c")
                                    , R = a("tr", "editormenubar", e.uuid, "container_menu")
                                    , w = a("tr", "editorbuttonbar", e.uuid, "container_button_menu")
                                    , y = a("table", "editor_container_o p100100 noborder", e.uuid, "container_o");
                                y.appendChild(w),
                                    y.appendChild(R),
                                    y.appendChild(l),
                                    k.appendChild(y);
                                const x = ()=>{
                                    let n = !1;
                                    return l.editor && (t.editor_enabled ? n |= l.editor.changed && l.editor.mirror.historySize().undo : n = l.editor.value != e.code),
                                        n
                                }
                                    , G = ()=>{
                                    Y.commands.trimTrailingSpacesIfEnabled(l.editor.mirror),
                                        C(e.uuid, "saveEm")
                                }
                                    , M = (e,t,n)=>{
                                    A.do_close && A.do_close(t, n)
                                }
                                    , Z = n=>{
                                    (n || confirm(r.a.getMessage("Really_reset_all_changes_"))) && l.editor && (t.editor_enabled ? (l.editor.mirror.setValue(e.code),
                                        T(!1)) : l.editor.value = e.code)
                                }
                                    , T = e=>{
                                    l.editor.changed != e && (A.set_tab_class && A.set_tab_class("modified", e),
                                        K.toggleClass("modified", e)),
                                        l.editor.changed = e
                                }
                                    , I = a("td", "", e.uuid, "editor_buttonmenu_td");
                                w.appendChild(I);
                                const U = a("ul", "editormenu", e.uuid, "editormenu")
                                    , F = a("td", "", e.uuid, "editormenu_td");
                                let j, B;
                                F.appendChild(U);
                                const O = (e,t)=>{
                                        let n, s;
                                        e && (n = $(e),
                                            s = !!t && n.hasClass("visible")),
                                            $("ul.editormenu .submenu").removeClass("visible"),
                                            e ? (n.toggleClass("visible", !s),
                                                B = s ? null : e) : B = null,
                                        e && s || (j = e=>{
                                            let t;
                                            j && (t = $(e.target)) && !t.closest(".editormenu").length && (O(),
                                                document.body.removeEventListener("click", j),
                                                j = null)
                                        }
                                            ,
                                            document.body.addEventListener("click", j))
                                    }
                                    , S = (t,n)=>{
                                        const s = a("li", "entry", e.uuid, t, "editormenuentry", !0)
                                            , i = o("label", e.uuid, t, "editormenulabel_id");
                                        i.textContent = n;
                                        const r = a("table", "submenu noborder", e.uuid, "editormenucontent" + t);
                                        return s.appendChild([i, r]),
                                            s.addEventListener("click", e=>{
                                                    $(e.target).closest(".entry").hasClass("list") || O(r, !0)
                                                }
                                            ),
                                            s.addEventListener("mousemove", (function() {
                                                    B && B != this && O(r)
                                                }
                                            )),
                                            {
                                                elem: s,
                                                content: r
                                            }
                                    }
                                    , D = e=>()=>{
                                        l.editor.mirror.focus(),
                                            l.editor.mirror.execCommand(e)
                                    }
                                    , L = {
                                        file: {
                                            text: r.a.getMessage("File"),
                                            entries: [{
                                                text: r.a.getMessage("Save"),
                                                command: "save",
                                                image: H.get("filesave"),
                                                cb: G
                                            }, {
                                                text: r.a.getMessage("Save_to_disk"),
                                                command: "save_to_disk",
                                                image: H.get("save_to_disk"),
                                                cb: ()=>{
                                                    C(e.uuid, "saveToDisk")
                                                }
                                            }, {
                                                type: "sep"
                                            }, {
                                                command: "cancel",
                                                text: r.a.getMessage("Editor_reset"),
                                                image: H.get("editor_cancel"),
                                                cb: Z
                                            }].concat(e.nnew || e.is_external ? [] : [{
                                                text: r.a.getMessage("Check_for_Updates"),
                                                command: "update",
                                                image: H.get("update"),
                                                disabled: (!e.options.check_for_updates || !e.file_url || "none" == e.file_url) && r.a.getMessage("Update_check_is_disabled"),
                                                cb: ()=>{
                                                    x() && !confirm(r.a.getMessage("Really_reset_all_changes_")) || (Z(!0),
                                                        C(e.uuid, "scriptUpdate"))
                                                }
                                            }, {
                                                text: r.a.getMessage("Remove"),
                                                command: "remove",
                                                image: H.get("delete"),
                                                cb: ()=>{
                                                    M(0, !0, !1),
                                                        b[e.uuid].deleteScript()
                                                }
                                            }]).concat([{
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Close"),
                                                command: "close",
                                                image: H.get("exit"),
                                                cb: M
                                            }])
                                        },
                                        edit: {
                                            text: r.a.getMessage("Edit"),
                                            entries: [{
                                                text: r.a.getMessage("Undo"),
                                                command: "undo"
                                            }, {
                                                text: r.a.getMessage("Redo"),
                                                command: "redo"
                                            }, {
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Select_All"),
                                                command: "selectAll"
                                            }, {
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Toggle_Comment"),
                                                command: "toggleComment"
                                            }, {
                                                text: r.a.getMessage("Toggle_Comment_Indented"),
                                                command: "toggleCommentIndented"
                                            }, {
                                                text: r.a.getMessage("Toggle_Block_Comment"),
                                                command: "toggleBlockComment",
                                                modes: ["js"]
                                            }, {
                                                type: "sep"
                                            }, {
                                                id: "edit_lines",
                                                text: r.a.getMessage("Lines"),
                                                modes: ["js"],
                                                entries: [{
                                                    text: r.a.getMessage("Indent"),
                                                    command: "intelligentTab"
                                                }, {
                                                    text: r.a.getMessage("Indent_Less"),
                                                    command: "indentLess"
                                                }, {
                                                    text: r.a.getMessage("Indent_More"),
                                                    command: "indentMore"
                                                }, {
                                                    text: r.a.getMessage("Auto_Indent_all"),
                                                    command: "reindentall"
                                                }, {
                                                    type: "sep"
                                                }, {
                                                    text: r.a.getMessage("Move_Line_Up"),
                                                    command: "swapLineUp"
                                                }, {
                                                    text: r.a.getMessage("Move_Line_Down"),
                                                    command: "swapLineDown"
                                                }, {
                                                    text: r.a.getMessage("Duplicate_Lines"),
                                                    command: "duplicateLine"
                                                }, {
                                                    text: r.a.getMessage("Delete_Line"),
                                                    command: "deleteLine"
                                                }, {
                                                    text: r.a.getMessage("Join_Lines"),
                                                    command: "joinLines"
                                                }, {
                                                    type: "sep"
                                                }, {
                                                    text: r.a.getMessage("Insert_Line_Before"),
                                                    command: "insertLineBefore"
                                                }, {
                                                    text: r.a.getMessage("Insert_Line_After"),
                                                    command: "insertLineAfter"
                                                }]
                                            }, {
                                                id: "edit_text",
                                                text: r.a.getMessage("Text"),
                                                entries: [{
                                                    text: r.a.getMessage("Upper_Case"),
                                                    command: "upcaseAtCursor"
                                                }, {
                                                    text: r.a.getMessage("Lower_Case"),
                                                    command: "downcaseAtCursor"
                                                }, {
                                                    type: "sep"
                                                }, {
                                                    text: r.a.getMessage("Delete_Line_Left"),
                                                    command: "delLineLeft"
                                                }, {
                                                    text: r.a.getMessage("Delete_Line_Right"),
                                                    command: "delLineRight"
                                                }, {
                                                    text: r.a.getMessage("Delete_to_Previous_Word_Boundary"),
                                                    command: "delGroupBefore"
                                                }, {
                                                    text: r.a.getMessage("Delete_to_Next_Word_Boundary"),
                                                    command: "delGroupAfter"
                                                }, {
                                                    text: r.a.getMessage("Delete_Line"),
                                                    command: "deleteLine"
                                                }, {
                                                    type: "sep"
                                                }, {
                                                    text: r.a.getMessage("Transpose"),
                                                    command: "transposeChars"
                                                }]
                                            }, {
                                                id: "edit_sort",
                                                text: r.a.getMessage("Sort"),
                                                entries: [{
                                                    text: r.a.getMessage("Lines"),
                                                    command: "sortLines"
                                                }, {
                                                    text: r.a.getMessage("Line_Case_Insensitive"),
                                                    command: "sortLinesInsensitive"
                                                }]
                                            }, {
                                                id: "edit_folding",
                                                text: r.a.getMessage("Folding"),
                                                entries: [{
                                                    text: r.a.getMessage("Fold"),
                                                    command: "fold"
                                                }, {
                                                    text: r.a.getMessage("Unfold"),
                                                    command: "unfold"
                                                }, {
                                                    text: r.a.getMessage("Fold_All"),
                                                    command: "foldAll"
                                                }, {
                                                    text: r.a.getMessage("Unfold_All"),
                                                    command: "unfoldAll"
                                                }]
                                            }, {
                                                id: "edit_sublime_mark",
                                                text: r.a.getMessage("Sublime_Mark"),
                                                entries: [{
                                                    text: r.a.getMessage("Set_Sublime_Mark"),
                                                    command: "setSublimeMark"
                                                }, {
                                                    text: r.a.getMessage("Select_to_Sublime_Mark"),
                                                    command: "selectToSublimeMark"
                                                }, {
                                                    text: r.a.getMessage("Swap_with_Sublime_Mark"),
                                                    command: "swapWithSublimeMark"
                                                }, {
                                                    text: r.a.getMessage("Delete_to_Sublime_Mark"),
                                                    command: "deleteToSublimeMark"
                                                }, {
                                                    text: r.a.getMessage("Yank_Sublime_Mark"),
                                                    command: "sublimeYank"
                                                }]
                                            }]
                                        },
                                        selection: {
                                            text: r.a.getMessage("Selection"),
                                            entries: [{
                                                text: r.a.getMessage("Incremental_Find"),
                                                command: "selectMatchingPartsOfCurrentSelection"
                                            }, {
                                                text: r.a.getMessage("Split_into_Lines"),
                                                command: "splitSelection"
                                            }, {
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Incremental_Find"),
                                                command: "selectMatchingPartsOfCurrentSelection"
                                            }, {
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Select_Line"),
                                                command: "selectLine"
                                            }, {
                                                text: r.a.getMessage("Select_Scope"),
                                                command: "selectScope"
                                            }, {
                                                text: r.a.getMessage("Select_Bookmarks"),
                                                command: "selectBookmarks"
                                            }, {
                                                text: r.a.getMessage("Select_between_Brackets"),
                                                command: "selectBetweenBrackets"
                                            }, {
                                                text: r.a.getMessage("Select_Next_Occurrence"),
                                                command: "selectNextOccurrence"
                                            }]
                                        },
                                        find: {
                                            text: r.a.getMessage("Find"),
                                            entries: [{
                                                text: r.a.getMessage("Find"),
                                                command: "find"
                                            }, {
                                                text: r.a.getMessage("Replace"),
                                                command: "replace"
                                            }, {
                                                text: r.a.getMessage("Replace_All"),
                                                command: "replaceAll"
                                            }, {
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Find_Next"),
                                                command: "findNext"
                                            }, {
                                                text: r.a.getMessage("Find_Previous"),
                                                command: "findPrev"
                                            }, {
                                                text: r.a.getMessage("Find_Under"),
                                                command: "findUnder"
                                            }, {
                                                text: r.a.getMessage("Find_All_Under"),
                                                command: "findAllUnder"
                                            }, {
                                                text: r.a.getMessage("Find_Under_Previous"),
                                                command: "findUnderPrevious"
                                            }, {
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Incremental_Find"),
                                                command: "selectMatchingPartsOfCurrentSelection"
                                            }]
                                        },
                                        goto: {
                                            text: r.a.getMessage("GoTo"),
                                            entries: [{
                                                text: r.a.getMessage("Jump_to_line"),
                                                command: "jump"
                                            }, {
                                                text: r.a.getMessage("Document_Start"),
                                                command: "goDocStart"
                                            }, {
                                                text: r.a.getMessage("Document_End"),
                                                command: "goDocEnd"
                                            }, {
                                                text: r.a.getMessage("Group_Left"),
                                                command: "goGroupLeft"
                                            }, {
                                                text: r.a.getMessage("Group_Right"),
                                                command: "goGroupRight"
                                            }, {
                                                text: r.a.getMessage("Closing_Bracket"),
                                                command: "goToBracket"
                                            }, {
                                                text: r.a.getMessage("Line_Up"),
                                                command: "goLineUp"
                                            }, {
                                                text: r.a.getMessage("Line_Down"),
                                                command: "goLineDown"
                                            }, {
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Center_Cursor"),
                                                command: "showInCenter"
                                            }, {
                                                type: "sep"
                                            }, {
                                                id: "bookmarks",
                                                text: r.a.getMessage("Bookmarks"),
                                                entries: [{
                                                    text: r.a.getMessage("Toggle"),
                                                    command: "toggleBookmark"
                                                }, {
                                                    text: r.a.getMessage("Clear_All"),
                                                    command: "clearBookmarks"
                                                }, {
                                                    type: "sep"
                                                }, {
                                                    text: r.a.getMessage("Next_Bookmark"),
                                                    command: "nextBookmark"
                                                }, {
                                                    text: r.a.getMessage("Prev_Bookmark"),
                                                    command: "prevBookmark"
                                                }]
                                            }]
                                        },
                                        dev: {
                                            text: r.a.getMessage("Developer"),
                                            entries: [{
                                                command: "macro",
                                                text: r.a.getMessage("Insert_constructor"),
                                                modes: ["js"]
                                            }].concat(!e.system && t.editor_enabled && d ? [{
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Run_syntax_check"),
                                                command: "lint_script",
                                                image: H.get("check"),
                                                cb: ()=>{
                                                    window.setTimeout(()=>{
                                                            let e;
                                                            t.editor_enabled && (e = l.editor) && (u(),
                                                                window.setTimeout(()=>{
                                                                        (()=>{
                                                                                const t = e.mirror.performLint(!0);
                                                                                return t && t.then ? t : f.Deferred.Pledge(t)
                                                                            }
                                                                        )().then(()=>{
                                                                                const t = e.mirror.state.lint ? e.mirror.state.lint.marked : null;
                                                                                if (t && t.length) {
                                                                                    1 === t.length ? se(r.a.getMessage("One_error_or_hint_was_found_")) : se(r.a.getMessage("0count0_errors_or_hints_were_found_", t.length));
                                                                                    for (let n, s = 0; n = t[s]; s++) {
                                                                                        let t, s, a;
                                                                                        if (void 0 !== n.line && void 0 !== n.column ? (s = n.line,
                                                                                            a = n.column) : n.lines && n.lines.length && (t = n.lines[0],
                                                                                            s = t.lineNo() + 1,
                                                                                            a = t.markedSpans && t.markedSpans.length ? t.markedSpans[0].from + 1 : 1),
                                                                                        s && a) {
                                                                                            e.mirror.setCursor(s - 1, a - 1),
                                                                                                e.mirror.focus();
                                                                                            break
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                    ne(r.a.getMessage("No_syntax_errors_were_found_"));
                                                                                p()
                                                                            }
                                                                        )
                                                                    }
                                                                    , 100))
                                                        }
                                                        , 1)
                                                }
                                            }, {
                                                text: r.a.getMessage("Auto_Indent_all"),
                                                command: "reindentall"
                                            }] : []).concat(e.nnew || e.is_external ? [] : [{
                                                type: "sep"
                                            }, {
                                                text: r.a.getMessage("Full_reset"),
                                                command: "reset",
                                                image: H.get("script_cancel"),
                                                cb: ()=>{
                                                    confirm(r.a.getMessage("Really_factory_reset_this_script_")) && b[e.uuid].fullReset(e=>{
                                                            e.cleaned && M(0, !0, !1)
                                                        }
                                                    )
                                                }
                                            }]).concat(e.nnew ? [{
                                                type: "sep"
                                            }, {
                                                id: "templates",
                                                text: r.a.getMessage("Templates"),
                                                entries: t.script_templates.map(e=>({
                                                    text: e.name,
                                                    command: e.name,
                                                    image: H.get("dot"),
                                                    cb: function() {
                                                        if (x() && !confirm(r.a.getMessage("Really_reset_all_changes_")))
                                                            return;
                                                        const n = e.value;
                                                        l.editor && (t.editor_enabled ? (l.editor.mirror.setValue(n),
                                                            T(!1)) : l.editor.value = n)
                                                    }
                                                }))
                                            }] : [])
                                        }
                                    }
                                    , V = (e,t)=>{
                                        const n = t[0];
                                        let s, a;
                                        return (s = e[n]) ? V(s, t.slice(1)) : (e.entries && e.entries.some(e=>e.command == n ? (a = e,
                                            !0) : !(!e.entries || !(a = V(e, t))) || void 0),
                                            a)
                                    }
                                ;
                                ["file.save_to_disk", "file.save", "file.cancel", "dev.reset", "find.findNext", "find.findPrev", "edit.replace", "goto.jump", "edit.reindentall", "dev.lint_script", "file.close"].forEach(t=>{
                                        const n = V(L, t.split("."));
                                        n && (n.image ? I.appendChild(N.createImageButton(e.uuid, n.id || n.command, n.text, n.image, n.cb || D(n.command))) : I.appendChild(N.createButton(n.id || n.command, e.uuid, n.text, n.cb || D(n.command))))
                                    }
                                );
                                const P = (e,n)=>{
                                    const s = n || Y.keyMap[t.editor_keyMap];
                                    let a, o;
                                    return Object.keys(s).every(t=>s[t] != e || (a = t,
                                        !1)),
                                    a || (s.fallthrough && (o = Y.keyMap[s.fallthrough]) && o !== s ? P(e, o) : void 0)
                                }
                                    , Q = (t,n)=>n.map((n,s)=>{
                                        if (n.modes && !n.modes.includes(d ? "js" : "other"))
                                            ;
                                        else {
                                            if ("sep" == n.type)
                                                return (t=>{
                                                        const n = a("tr", "entry sep", e.uuid, "editorsubmenusep_tr" + t)
                                                            , s = o("td", e.uuid, "editorsubmenusep_td" + t)
                                                            , i = o("hr", e.uuid, "editorsubmenusep" + t);
                                                        return s.setAttribute("colspan", 4),
                                                            n.appendChild(s),
                                                            s.appendChild(i),
                                                            n
                                                    }
                                                )(t + s);
                                            if (n.command)
                                                return ((t,n,s,i,r,A,l,c)=>{
                                                        const d = A || Y.commands.hasOwnProperty(n)
                                                            , u = a("tr", "entry " + (!l && d ? "" : "disabled"), e.uuid, t, "editorsubmenuentry_tr", !0);
                                                        let p;
                                                        p = a("i", i ? "far fa-" + i : "far", e.uuid, t, "editorsubmenuentry_i", !0);
                                                        const g = o("td", e.uuid, "editorsubmenuentry_td_i" + t);
                                                        g.appendChild(p);
                                                        const m = a("td", "label", e.uuid, "editorsubmenuentry_td_l" + t);
                                                        m.textContent = s;
                                                        const h = a("td", "shortcut", e.uuid, "editorsubmenuentry_td_m" + t);
                                                        return h.setAttribute("colspan", 2),
                                                        r && (h.textContent = r),
                                                            u.appendChild([g, m, h]),
                                                            l ? "string" == typeof l && u.setAttribute("title", l) : d && u.addEventListener("click", c),
                                                            u
                                                    }
                                                )(t + "_" + n.command, n.command, n.text, n.image, P(n.command), !!n.cb, n.disabled, n.cb || D(n.command));
                                            {
                                                const s = t + n.id
                                                    , i = ((t,n,s)=>{
                                                        const i = a("tr", "entry list", e.uuid, t, "editorsubmenulistentry", !0);
                                                        let r;
                                                        r = a("i", s ? "far fa-" + s : "far", e.uuid, t, "editorsubmenulistentry_i", !0);
                                                        const A = o("td", e.uuid, "editorsubmenulistentry_td_i" + t);
                                                        A.appendChild(r);
                                                        const l = a("td", "label", e.uuid, "editorsubmenulistentry_td_l" + t);
                                                        l.textContent = n;
                                                        const c = a("td", e.uuid, "editorsubmenulistentry_td_m" + t)
                                                            , d = o("td", e.uuid, "editorsubmenulistentry_td_s" + t);
                                                        i.appendChild([A, l, c, d]);
                                                        const u = a("span", "submenulist", e.uuid, "editorsubmenulistcontent" + t)
                                                            , p = a("span", "submenumore", e.uuid, "editorsubmenulistmore" + t)
                                                            , g = a("i", "more far fa-caret-right", e.uuid, t, "editorsubmenulistentrymore_i", !0);
                                                        return p.appendChild([g, u]),
                                                            d.appendChild([g, p]),
                                                            {
                                                                elem: i,
                                                                content: u
                                                            }
                                                    }
                                                )(s, n.text, n.image)
                                                    , r = Q(s, n.entries);
                                                if (r.length > 0)
                                                    return i.content.appendChild(r),
                                                        i.elem
                                            }
                                        }
                                    }
                                ).filter(e=>e);
                                Object.keys(L).forEach(e=>{
                                        const t = L[e]
                                            , n = S(e, t.text)
                                            , s = Q(e, t.entries);
                                        s.length > 0 && (U.appendChild(n.elem),
                                            n.content.appendChild(s))
                                    }
                                );
                                const z = a("textarea", "editorta", e.uuid, "editor");
                                z.setAttribute("wrap", "off"),
                                    z.setAttribute("spellcheck", "false");
                                const X = a("td", "editor_outer", e.uuid, "edit")
                                    , q = a("div", "editor_100 editor_border", e.uuid, "edit");
                                X.appendChild(q),
                                    R.appendChild(F),
                                l.inserted || (q.appendChild(z),
                                    l.appendChild(X)),
                                    b[e.uuid].saveToDisk = ()=>{
                                        if (!l.editor)
                                            return;
                                        const n = t.editor_enabled ? l.editor.mirror.getValue() : l.editor.value;
                                        return u(),
                                            Ee().done(()=>{
                                                    const t = new Blob([n],{
                                                        type: "text/plain"
                                                    });
                                                    saveAs(t, Object(s.safeFileName)(e.name + (e.is_external ? "" : ".user.js")))
                                                }
                                            ).always(()=>{
                                                    p()
                                                }
                                            )
                                    }
                                    ,
                                e.system || (e.is_external ? b[e.uuid].saveEm = n=>{
                                            if (!l.editor)
                                                return;
                                            const a = t.editor_enabled ? l.editor.mirror.getValue() : l.editor.value;
                                            ((e,t,n)=>{
                                                    const s = Object(f.Deferred)();
                                                    try {
                                                        n.auto_save || ae(),
                                                            sendMessage({
                                                                    method: "saveExternal",
                                                                    uuid: e,
                                                                    code: t,
                                                                    mimetype: n.mimetype,
                                                                    url: n.url,
                                                                    auto_save: n.auto_save
                                                                }, e=>{
                                                                    n.auto_save || (te(),
                                                                        W()),
                                                                        (e = e || {}).items ? re(e.items, !0) : p(),
                                                                        s.resolve(e)
                                                                }
                                                            )
                                                    } catch (e) {
                                                        console.log("sS: " + e.message),
                                                            s.reject({
                                                                err: e.message
                                                            })
                                                    }
                                                    return s.promise()
                                                }
                                            )(e.script_uuid, a, {
                                                url: e.file_url,
                                                mimetype: e.mimetype,
                                                auto_save: n && n.auto_save
                                            }).done(e=>{
                                                    e.success ? T(!1) : e.aborted || n && n.auto_save || (e.messages && e.messages.errors && e.messages.errors.length ? Object(s.cAlert)(e.messages.errors.join("\n")) : Object(s.cAlert)(r.a.getMessage("Unable_to_parse_this_")))
                                                }
                                            )
                                        }
                                        : b[e.uuid].saveEm = n=>{
                                            if (!l.editor)
                                                return;
                                            let a = !0;
                                            t.showFixedSrc && (a = confirm(r.a.getMessage("Do_you_really_want_to_store_fixed_code_", r.a.getMessage("Show_fixed_source"))));
                                            const o = t.editor_enabled ? l.editor.mirror.getValue() : l.editor.value;
                                            return a && de(e.uuid, o, {
                                                clean: !1,
                                                new_script: e.nnew,
                                                auto_save: n && n.auto_save,
                                                reload: !0,
                                                lastModTime: b[e.uuid].saveEm_lastModTime
                                            }).done(t=>{
                                                    t.installed ? e.nnew ? M(0, !0, !1) : (T(!1),
                                                    t.lastModified && (e.lastModTime = t.lastModified)) : t.aborted || n && n.auto_save || (t.messages && t.messages.errors && t.messages.errors.length ? Object(s.cAlert)(t.messages.errors.join("\n")) : Object(s.cAlert)(r.a.getMessage("Unable_to_parse_this_")))
                                                }
                                            ),
                                                a
                                        }
                                );
                                const K = n.insertTab(null, A.navid, g, k, e=>{
                                        e.then(()=>{
                                                _e.setSub(A.navid),
                                                A.on_tab_select && A.on_tab_select()
                                            }
                                        )
                                    }
                                    , A.on_tab_close);
                                if (K.setHeading(A.tab_name || r.a.getMessage("Editor"), 50),
                                    _e.registerListener(e.uuid, A.navid, ()=>{
                                            K.select(),
                                            t.editor_enabled && l.editor && (l.editor.refresh(),
                                                l.editor.mirror.focus())
                                        }
                                    ),
                                    m)
                                    return i["editor" + e.uuid];
                                const ee = (e,t,n,s)=>{
                                    e = s.getValue();
                                    const a = s.getHelper(Y.Pos(0, 0), "lint")(e, n, s);
                                    if (a && a.then)
                                        return a.then(t);
                                    t(a)
                                }
                                    , oe = e=>{
                                    ue("editor_theme", e, !0).done(()=>{
                                            ne("Theme switched to " + e)
                                        }
                                    )
                                }
                                    , ie = ()=>{
                                    t.editor_autoSave && x() && C(e.uuid, "saveEm", {
                                        auto_save: !0
                                    })
                                }
                                    , Ae = {
                                    getTab: function() {
                                        return K
                                    },
                                    getEditor: function() {
                                        if (l.editor)
                                            return t.editor_enabled ? l.editor.mirror : {
                                                save: G
                                            }
                                    },
                                    onShow: ()=>{
                                        (()=>{
                                                const t = Object(f.Deferred)();
                                                return e.referrer && void 0 === e.code ? pe(Object(s.copy)(A.tree_opts || {}, {
                                                        referrer: e.referrer + "." + A.treeid,
                                                        uuid: e.uuid
                                                    }), n=>{
                                                        n.items ? (e.code = n.items[0],
                                                            t.resolve()) : t.reject(),
                                                            p()
                                                    }
                                                ) : window.setTimeout(t.resolve, 100),
                                                    t.promise()
                                            }
                                        )().done(()=>{
                                                const n = k.getElementsByTagName("textarea");
                                                if (b[e.uuid].lastI = ()=>e,
                                                n.length && !l.editor) {
                                                    const s = n[0]
                                                        , a = ()=>{
                                                            l.editor && T(!!l.editor.mirror.historySize().undo)
                                                        }
                                                    ;
                                                    if (t.editor_enabled) {
                                                        const n = s.parentNode;
                                                        n.removeChild(s),
                                                            l.editor = new J(n,{
                                                                mode: c,
                                                                theme: t.editor_theme,
                                                                fontSize: t.editor_fontSize,
                                                                themeOptions: {
                                                                    all: h.a.getEditorThemes().map(e=>e.value),
                                                                    onChange: oe
                                                                },
                                                                value: e.code,
                                                                indentUnit: Number(t.editor_indentUnit),
                                                                tabSize: Number(t.editor_tabSize),
                                                                indentWithTabs: "tabs" == t.editor_indentWithTabs,
                                                                smartIndent: "classic" != t.editor_tabMode,
                                                                indentByTab: "indent" == t.editor_tabMode,
                                                                electricChars: "true" == t.editor_electricChars.toString(),
                                                                lineNumbers: !0,
                                                                lineWrapping: t.editor_lineWrapping,
                                                                extraKeys: {
                                                                    Enter: "newlineAndIndentContinueComment"
                                                                },
                                                                keyMap: t.editor_keyMap,
                                                                bookmarkGutter: !0,
                                                                gutters: ["gutter", "CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers", "CodeMirror-bookmarks"],
                                                                matchBrackets: !0,
                                                                foldGutter: !0,
                                                                styleActiveLine: !0,
                                                                specifyMoreJsTokens: d,
                                                                styleSelectedText: !0,
                                                                autoTrimTrailingSpace: "true" == t.editor_trimTrailingSpacesFromModifiedLines.toString(),
                                                                hintOptions: d ? {
                                                                    keywords: Object.keys(E.a.globals)
                                                                } : void 0,
                                                                lint: d ? {
                                                                    lintOnChange: t.editor_autoLint,
                                                                    autoLintMaxLen: t.editor_autoLintMaxLen,
                                                                    async: !0,
                                                                    getAnnotations: ee,
                                                                    hint_config: t.editor_linter_config || E.a.config
                                                                } : void 0,
                                                                showTrailingSpace: t.editor_highlightTrailingWhitespace
                                                            },{
                                                                save: G,
                                                                close: M
                                                            },{
                                                                change: a,
                                                                blur: ie
                                                            },r.a.getMessage)
                                                    } else
                                                        l.editor = s,
                                                            s.value = e.code;
                                                    A.on_editor_load && A.on_editor_load()
                                                }
                                            }
                                        ).fail(()=>{
                                                M(0, !1, !0)
                                            }
                                        )
                                    }
                                    ,
                                    onClose: function(t) {
                                        const n = ()=>{
                                                l.editor = null,
                                                    delete b[e.uuid].lastI
                                            }
                                        ;
                                        if (!t && x()) {
                                            const e = confirm(r.a.getMessage("There_are_unsaved_changed_"));
                                            return e && n(),
                                                !e
                                        }
                                        return n(),
                                            !1
                                    }
                                };
                                return i["editor" + e.uuid] = Ae,
                                    Ae
                            }
                            , De = (e,t,n,s)=>{
                                let a;
                                e.is_external = !0;
                                const o = ()=>{
                                    a && !i.onClose() && (s(),
                                    a && a.remove(),
                                        a = null)
                                }
                                    , i = Se(e, t, {
                                    tab_name: e.name,
                                    navid: e.uuid,
                                    treeid: "external",
                                    mimetype: e.mimetype,
                                    tree_opts: {
                                        url: e.file_url,
                                        uuid: e.script_uuid
                                    },
                                    do_close: function() {
                                        window.setTimeout(o, 100)
                                    },
                                    on_tab_close: o,
                                    on_tab_select: n,
                                    on_editor_load: n
                                });
                                return a = i.getTab(),
                                    i.show = ()=>{
                                        i.onShow(),
                                            a.select()
                                    }
                                    ,
                                    i
                            }
                            , Le = (e,A,c)=>{
                                let d, g;
                                b[e.uuid] || (b[e.uuid] = {});
                                const m = e.icon
                                    , h = [];
                                h.push("clickable"),
                                (e.blacklisted || e.foisted) && h.push("crossedout");
                                const k = a("span", h.join(" "), e.uuid, "sname")
                                    , _ = a(m ? "img" : "span", "nameNicon16 icon16 " + (m ? "nameNicon16" : "nameNOicon16"), e.uuid, "sname_img")
                                    , v = a("span", "nameNname16 " + (e.enabled ? "" : "greyed"), e.uuid, "sname_name");
                                k.appendChild(_);
                                const w = Ue(e)
                                    , y = r.a.getTranslation(e, "name");
                                v.textContent = y;
                                const x = o("span", e.uuid, "spos");
                                x.textContent = e.position || "";
                                const G = o("span", e.uuid, "sversion");
                                G.textContent = e.version ? e.version : "",
                                m && (_.src = e.icon);
                                const M = []
                                    , E = (e,t,n)=>{
                                        const o = a("span", n || "", e.uuid, "wrap");
                                        return t && ("Array" === Object(s.toType)(t) ? Object(s.each)(t, e=>{
                                                o.appendChild(e)
                                            }
                                        ) : o.appendChild(t)),
                                            o
                                    }
                                    , Z = (t,n)=>{
                                        void 0 === n && (n = !t),
                                        g && g.onClose && g.onClose(t) || (e.uuid && _e.is(e.uuid) && _e.clear(),
                                        d && (d.remove(),
                                            d = null),
                                            delete i["tab" + e.uuid],
                                            delete i["editor" + e.uuid],
                                        k.parentNode && k.parentNode.removeChild(k),
                                        n && window.setTimeout(()=>{
                                                const t = Object.keys(l);
                                                for (let n, s = 0; n = t[s]; s++) {
                                                    const t = l[n].script;
                                                    if (t.uuid == e.uuid) {
                                                        Ce(A, [t], null, c);
                                                        break
                                                    }
                                                }
                                                ve()
                                            }
                                            , 1))
                                    }
                                    , T = e=>{
                                        g && g.onSelect && g.onSelect(e)
                                    }
                                    , I = ()=>{
                                        let n = null;
                                        e.nnew ? (n = a("div", "head_icon", e.uuid, "details_h"),
                                            n.appendChild(N.createIcon(e.image_id, "", e.uuid, "new_script_head"))) : n = o("div", e.uuid, "details_h");
                                        const A = o("div", e.uuid, "details_c");
                                        if (d = c.insertTab(null, e.uuid, n, A, T, e.nnew ? null : Z),
                                            !e.nnew) {
                                            let t;
                                            t = e.version ? " " + e.version : "";
                                            const n = r.a.getMessage("Edit") + " - " + r.a.getTranslation(e, "name") + t;
                                            d.setHeading(n, 50)
                                        }
                                        g = ((e,n,A,l,c)=>{
                                                const d = o("div", n.uuid, "script_tab_head")
                                                    , g = d.inserted
                                                    , m = a("table", "noborder p100100 heading", n.uuid, "h_table")
                                                    , h = a("tr", "", n.uuid, "h_tr1")
                                                    , b = a("td", "nameNicon64", n.uuid, "h_td1")
                                                    , k = a("td", "", n.uuid, "h_td2");
                                                m.appendChild(h),
                                                    h.appendChild(b),
                                                    h.appendChild(k),
                                                    k.setAttribute("style", "width: 99%");
                                                const _ = o("img", n.uuid, "heading_icon")
                                                    , R = n.icon64 ? n.icon64 : n.icon;
                                                _.src = R;
                                                const v = a("div", "nameNname64", n.uuid, "heading_name");
                                                v.textContent = r.a.getTranslation(n, "name"),
                                                R && b.appendChild(_),
                                                    k.appendChild(v);
                                                const w = a("div", "author", n.uuid, "author");
                                                n.author ? w.textContent = "by " + n.author : n.copyright && (w.innerHTML = "&copy; ",
                                                    w.textContent += n.copyright),
                                                    k.appendChild(w);
                                                const y = a("table", "noborder p100100", n.uuid, "table")
                                                    , C = a("tr", "script_tab_head", n.uuid, "tr1")
                                                    , x = a("tr", "details", n.uuid, "tr2")
                                                    , G = a("td", "", n.uuid, "td1")
                                                    , M = a("td", "", n.uuid, "td2");
                                                d.appendChild(m),
                                                    G.appendChild(d),
                                                    C.appendChild(G),
                                                    x.appendChild(M),
                                                    y.appendChild(C),
                                                    y.appendChild(x),
                                                    l.appendChild(y);
                                                const E = Q("_details" + n.uuid, M, {
                                                    tv: "tv tv_alt",
                                                    tv_table: "tv_table tv_table_alt",
                                                    tr_tabs: "tr_tabs tr_tabs_alt",
                                                    tr_content: "tr_content tr_content_alt",
                                                    td_content: "td_content td_content_alt",
                                                    td_tabs: "td_tabs td_tabs_alt",
                                                    tv_tabs_align: "tv_tabs_align tv_tabs_align_alt",
                                                    tv_tabs_fill: "tv_tabs_fill tv_tabs_fill_alt",
                                                    tv_tabs_table: "tv_tabs_table tv_tabs_table_alt",
                                                    tv_contents: "tv_contents tv_contents_alt",
                                                    tv_tab_selected: "tv_tab tv_selected tv_tab_alt tv_selected_alt",
                                                    tv_tab_close: "tv_tab_close",
                                                    tv_tab: "tv_tab tv_tab_alt",
                                                    tv_content: "tv_content tv_content_alt"
                                                }, !0)
                                                    , Z = ((e,t,n,s)=>Se(e, t, {
                                                    do_close: s,
                                                    set_tab_class: n,
                                                    navid: "editor",
                                                    treeid: "source"
                                                }))(n, E, (t,n)=>{
                                                        e.toggleClass(t, n)
                                                    }
                                                    , c)
                                                    , T = n.nnew || n.system ? {} : je(n, E)
                                                    , I = n.nnew || n.system || !n.storage_key_count || t.configMode < 80 ? {} : ((e,t)=>{
                                                        const n = o("div", "", e.uuid, "script_storage_h");
                                                        n.textContent = r.a.getMessage("Storage");
                                                        const i = o("div", "", e.uuid, "script_storages_c")
                                                            , A = a("div", "section", e.uuid, "ta_storage")
                                                            , l = a("div", "section_head", e.uuid, "head_ta_storage")
                                                            , c = a("div", "section_content", e.uuid, "content_ta_storage");
                                                        let d;
                                                        l.textContent = r.a.getMessage("Storage"),
                                                            A.appendChild(l),
                                                            A.appendChild(c);
                                                        const g = a("textarea", "storageta", e.uuid, "storage");
                                                        g.setAttribute("wrap", "off"),
                                                            g.setAttribute("spellcheck", "false"),
                                                            g.addEventListener("change", ()=>d = !0);
                                                        const m = N.createButton("storage_save_button", e.uuid, r.a.getMessage("Save"), ()=>{
                                                                let t = null;
                                                                try {
                                                                    t = JSON.parse(g.value)
                                                                } catch (e) {
                                                                    return void Object(s.cAlert)(r.a.getMessage("Unable_to_parse_this_"))
                                                                }
                                                                const n = Object.keys(t)
                                                                    , a = Object.keys(e.storage);
                                                                n.concat(a).filter((e,t,n)=>n.lastIndexOf(e) === t).forEach(s=>{
                                                                        n.includes(s) ? a.includes(s) && t[s] === e.storage[s] || he(e.uuid, s, (e=>{
                                                                                const t = (typeof e)[0];
                                                                                switch (t) {
                                                                                    case "o":
                                                                                        try {
                                                                                            e = t + JSON.stringify(e)
                                                                                        } catch (e) {
                                                                                            return void console.log(e)
                                                                                        }
                                                                                        break;
                                                                                    default:
                                                                                        e = t + e
                                                                                }
                                                                                return e
                                                                            }
                                                                        )(t[s])) : he(e.uuid, s)
                                                                    }
                                                                )
                                                            }
                                                        )
                                                            , h = N.createButton("storage_reload_button", e.uuid, r.a.getMessage("Reload"), ()=>{
                                                                d && !confirm(r.a.getMessage("Really_reset_all_changes_")) || (u(),
                                                                    b(!0).always(()=>{
                                                                            window.setTimeout(p, 500),
                                                                                te()
                                                                        }
                                                                    ))
                                                            }
                                                        )
                                                            , b = t=>(g.setAttribute("disabled", "disabled"),
                                                            (()=>{
                                                                    if (e.referrer && void 0 === e.storage) {
                                                                        const t = Object(f.Deferred)();
                                                                        return pe({
                                                                                referrer: e.referrer + ".storage",
                                                                                uuid: e.uuid
                                                                            }, e=>{
                                                                                if (e.items) {
                                                                                    const n = {}
                                                                                        , s = e.items[0];
                                                                                    Object.keys(s).forEach(e=>{
                                                                                            n[e] = ((e,t)=>{
                                                                                                    if ("string" != typeof e)
                                                                                                        return t;
                                                                                                    {
                                                                                                        const n = e[0];
                                                                                                        switch (e = e.substr(1),
                                                                                                            n) {
                                                                                                            case "b":
                                                                                                                return "true" === e;
                                                                                                            case "n":
                                                                                                                return Number(e);
                                                                                                            case "o":
                                                                                                                try {
                                                                                                                    return JSON.parse(e)
                                                                                                                } catch (e) {
                                                                                                                    console.log("values: parseValueFromStorage: " + e)
                                                                                                                }
                                                                                                                return t;
                                                                                                            default:
                                                                                                                return e
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            )(s[e])
                                                                                        }
                                                                                    ),
                                                                                        t.resolve(n)
                                                                                } else
                                                                                    t.reject();
                                                                                p()
                                                                            }
                                                                        ),
                                                                            t.promise()
                                                                    }
                                                                    return f.Deferred.Pledge(e.storage)
                                                                }
                                                            )().done(n=>{
                                                                    !t && g.value || (g.value = JSON.stringify(n, null, 4),
                                                                        d = !1),
                                                                        e.storage = n,
                                                                        g.removeAttribute("disabled")
                                                                }
                                                            ).fail(()=>{
                                                                    g.setAttribute("disabled", !0)
                                                                }
                                                            ));
                                                        c.appendChild(g),
                                                            c.appendChild(m),
                                                            c.appendChild(h),
                                                            i.appendChild(A);
                                                        const k = t.appendTab("storage", n, i, e=>{
                                                                e.then(()=>{
                                                                        _e.setSub("storage")
                                                                    }
                                                                )
                                                            }
                                                        );
                                                        return _e.registerListener(e.uuid, "storage", ()=>{
                                                                b(),
                                                                    k.select()
                                                            }
                                                        ),
                                                            {}
                                                    }
                                                )(n, E)
                                                    , U = n.nnew || n.system || !n.requires.length && !n.resources.length ? {} : ((e,t)=>{
                                                        let n;
                                                        const s = e=>{
                                                            n = e
                                                        }
                                                            , i = o("div", "", e.uuid, "script_external_h");
                                                        i.textContent = r.a.getMessage("Externals");
                                                        const A = o("div", "", e.uuid, "script_externals_c")
                                                            , l = a("div", "section", e.uuid, "ta_requires")
                                                            , c = a("div", "section_head", e.uuid, "head_ta_requires")
                                                            , d = a("div", "section_content", e.uuid, "content_ta_requires");
                                                        c.textContent = r.a.getMessage("Requires"),
                                                            l.appendChild(c),
                                                            l.appendChild(d),
                                                            d.appendChild(Be(e, "requires", t, s));
                                                        const u = a("div", "section", e.uuid, "ta_resources")
                                                            , p = a("div", "section_head", e.uuid, "head_ta_resources")
                                                            , g = a("div", "section_content", e.uuid, "content_ta_resources");
                                                        p.textContent = r.a.getMessage("Resources"),
                                                            u.appendChild(p),
                                                            u.appendChild(g),
                                                            g.appendChild(Be(e, "resources", t, s)),
                                                            A.appendChild(l),
                                                            A.appendChild(u);
                                                        const m = t.appendTab("externals", i, A, e=>{
                                                                e.then(()=>{
                                                                        _e.setSub("externals")
                                                                    }
                                                                )
                                                            }
                                                        );
                                                        return _e.registerListener(e.uuid, "externals", ()=>{
                                                                m.select()
                                                            }
                                                        ),
                                                            {
                                                                getEditor: function() {
                                                                    return n
                                                                }
                                                            }
                                                    }
                                                )(n, E);
                                                if (g)
                                                    return i["tab" + n.uuid];
                                                const F = ()=>{
                                                    let e;
                                                    return (e = E.getSelectedTab()) && e.isCloseable() ? U.getEditor() : Z.getEditor()
                                                }
                                                    , j = n=>{
                                                    let s = !1;
                                                    if ("keydown" == n.type && e.isSelected() && !n.defaultPrevented) {
                                                        if (27 == n.keyCode) {
                                                            if (!t.editor_enabled || "vim" != t.editor_keyMap) {
                                                                let e;
                                                                (e = E.getSelectedTab()) && e.isCloseable() ? e.close() : window.setTimeout(c, 1),
                                                                    s = !0
                                                            }
                                                        } else if (t.editor_enabled) {
                                                            const e = {
                                                                save: !0,
                                                                find: !0,
                                                                findNext: !0,
                                                                findPrev: !0,
                                                                replace: !0,
                                                                replaceAll: !0
                                                            }
                                                                , t = F()
                                                                , a = Y.keyName(n);
                                                            t && !t.hasFocus() && "handled" == Y.lookupKey(a, t.getOption("keyMap"), n=>{
                                                                    if (e[n])
                                                                        return t.execCommand(n),
                                                                            !0
                                                                }
                                                            ) && (s = !0)
                                                        } else if (83 == n.keyCode && (n.ctrlKey || n.metaKey)) {
                                                            const e = F();
                                                            e && (e.save(),
                                                                s = !0)
                                                        }
                                                        return s ? (n.stopPropagation(),
                                                            n.preventDefault(),
                                                            !1) : void 0
                                                    }
                                                }
                                                    , B = {
                                                    onShow: ()=>{
                                                        Object(s.each)([T, Z, I, U], e=>{
                                                                e.onShow && e.onShow()
                                                            }
                                                        ),
                                                            window.addEventListener("keydown", j, !1)
                                                    }
                                                    ,
                                                    onClose: e=>{
                                                        let t;
                                                        return Object(s.each)([T, Z, I, U], n=>{
                                                                if (n.onClose && n.onClose(e))
                                                                    return t = !0,
                                                                        !1
                                                            }
                                                        ),
                                                        t || window.removeEventListener("keydown", j, !1),
                                                            t
                                                    }
                                                    ,
                                                    onSelect: e=>{
                                                        e.then(()=>{
                                                                if (n.uuid) {
                                                                    const e = _e.get().sub
                                                                        , t = E.getTabById(e);
                                                                    _e.set(n.uuid, (t ? e : null) || "editor"),
                                                                        document.title = r.a.getTranslation(n, "name")
                                                                }
                                                            }
                                                        ),
                                                            Object(s.each)([T, Z, U], t=>{
                                                                    t.onSelect && t.onSelect(e)
                                                                }
                                                            )
                                                    }
                                                };
                                                return i["tab" + n.uuid] = B,
                                                    B
                                            }
                                        )(d, e, 0, A, Z)
                                    }
                                    , U = b[e.uuid].scriptClick = (e,t)=>{
                                        d || I(),
                                        g && g.onShow && g.onShow(),
                                            d.show(),
                                        e && 1 == e.button || t || d.select(),
                                            v.setAttribute("open", "true")
                                    }
                                ;
                                "true" == v.getAttribute("open") && U(null, !0);
                                const F = o("span", "", e.uuid, "last_updated", !0);
                                let j = "?";
                                if (e.nnew || e.system)
                                    j = "";
                                else if (b[e.uuid].scriptUpdate = ()=>{
                                    const t = F.textContent;
                                    F.textContent = "",
                                        F.appendChild(N.createIcon(H.get("download"), "down", e.uuid, "spinner")),
                                        ((e,t)=>{
                                                try {
                                                    sendMessage({
                                                            method: "buttonPress",
                                                            name: "run_script_updates",
                                                            scriptuid: e
                                                        }, e=>{
                                                            te(),
                                                            t && t(e.updatable)
                                                        }
                                                    )
                                                } catch (e) {
                                                    console.log("rSu: " + e.message)
                                                }
                                            }
                                        )(e.uuid, n=>{
                                                F.textContent = t,
                                                    n ? ($(F).addClass("green"),
                                                        F.title = r.a.getMessage("There_is_an_update_for_0name0_avaiable_", e.name),
                                                        Z(!0),
                                                        ge()) : ($(F).addClass("red"),
                                                        F.title = r.a.getMessage("No_update_found__sry_"))
                                            }
                                        )
                                }
                                    ,
                                    e.options.check_for_updates && e.file_url && "none" != e.file_url ? (F.addEventListener("click", ()=>{
                                            C(e.uuid, "scriptUpdate")
                                        }
                                    ),
                                        F.setAttribute("class", "clickable"),
                                        F.title = r.a.getMessage("Check_for_Updates")) : (F.setAttribute("class", "greyed italic"),
                                        F.title = r.a.getMessage("Update_check_is_disabled")),
                                e.lastModified || e.lastUpdated)
                                    try {
                                        j = ((e,t)=>{
                                                const n = e.getTime()
                                                    , s = t.getTime()
                                                    , a = Math.abs(n - s)
                                                    , o = Math.round(a / 6e4)
                                                    , i = Math.round(a / 36e5)
                                                    , r = Math.round(a / 864e5);
                                                return o <= 60 ? o + " min" : i <= 48 ? i + " h" : r + " d"
                                            }
                                        )(new Date, new Date(e.lastModified || e.lastUpdated))
                                    } catch (e) {
                                        console.log("o: error calculating time " + e.message)
                                    }
                                F.textContent = j;
                                let B, O = o("div", e.uuid, "imported"), S = "";
                                n.push(()=>{
                                        t.sync_enabled && (S = e.nnew || e.system ? "" : e.sync && e.sync.imported ? e.sync.imported == R.a.types.eCHROMESYNC ? z.RUNTIME.FIREFOX ? '<img src="' + H.brand("firefox") + '" class="icon16" title="Firefox Sync"/>' : '<img src="' + H.brand("chrome") + '" class="icon16" title="Google Sync"/>' : e.sync.imported == R.a.types.eGDRIVE ? '<img src="' + H.brand("gdrive") + '" class="icon16" title="Google Drive"/>' : e.sync.imported == R.a.types.eDROPBOX ? '<img src="' + H.brand("dropbox") + '" class="icon16" title="Dropbox"/>' : e.sync.imported == R.a.types.eWEBDAV ? '<img src="' + H.brand("webdav") + '" class="icon16" title="WebDAV"/>' : e.sync.imported == R.a.types.eYANDEX ? '<img src="' + H.brand("yandex") + '" class="icon16" title="Yandex"/>' : e.sync.imported == R.a.types.eONEDRIVE ? '<img src="' + H.brand("onedrive") + '" class="icon16" title="OneDrive"/>' : '<i class="icon16 far fa-' + H.get("question_mark") + '" />' : "",
                                            O.innerHTML = S,
                                            O = null)
                                    }
                                );
                                const D = o("span", e.uuid, "hp");
                                if (e.origin) {
                                    B = o("a", e.uuid, "hp_origin"),
                                        B.setAttribute("href", e.origin.url),
                                        B.setAttribute("target", "_blank");
                                    const t = N.createImage(H.origin(e.origin.token), "", e.uuid, e.origin.token);
                                    B.appendChild(t),
                                        D.appendChild(B)
                                }
                                if (w && (!e.origin || e.origin.url !== w)) {
                                    B = o("a", e.uuid, "hp_script"),
                                        B.setAttribute("href", w),
                                        B.setAttribute("target", "_blank");
                                    const t = N.createIcon(H.get("home"), "", e.uuid, "homepage", "");
                                    B.appendChild(t),
                                        D.appendChild(B)
                                }
                                b[e.uuid].saveEm_lastModTime = e.lastModified,
                                    b[e.uuid].fullReset = t=>{
                                        de(e.uuid, null, {
                                            clean: !0,
                                            reload: !0
                                        }).done(t || (()=>{}
                                        )),
                                            A.parentNode.removeChild(A)
                                    }
                                    ,
                                    b[e.uuid].reportAnIssue = t=>{
                                        ((e,t)=>{
                                                try {
                                                    sendMessage({
                                                            method: "reportAnIssue",
                                                            uuid: e,
                                                            to: t
                                                        }, ()=>{}
                                                    )
                                                } catch (e) {
                                                    console.log("rRi: " + e.message)
                                                }
                                            }
                                        )(e.uuid, t)
                                    }
                                    ,
                                    b[e.uuid].deleteScript = (t,n)=>{
                                        let s;
                                        if (s = n || confirm(r.a.getMessage("Really_delete_0name0__", e.name)),
                                        1 == s) {
                                            const t = {
                                                reload: !n
                                            };
                                            de(e.uuid, null, t),
                                                A.parentNode.removeChild(A)
                                        }
                                    }
                                ;
                                const L = [];
                                if (!e.nnew && !e.system && e.origin && e.origin.abuse_url) {
                                    const t = N.createIcon(H.get("flag"), "", e.uuid, "issue", r.a.getMessage("Report_an_issue_to_the_script_hoster_"), ()=>{
                                            C(e.uuid, "reportAnIssue", "hoster")
                                        }
                                    );
                                    L.push(t)
                                }
                                if (!e.nnew && !e.system && (e.origin || e.supportURL)) {
                                    const t = N.createIcon(H.get("bug"), "", e.uuid, "bug", r.a.getMessage("Report_a_bug"), ()=>{
                                            C(e.uuid, "reportAnIssue", "author")
                                        }
                                    );
                                    L.push(t)
                                }
                                if (!e.nnew && !e.system) {
                                    if (e.remote_url) {
                                        const t = N.createIcon(H.get("cloud"), "", e.uuid, "cloud_edit", r.a.getMessage("Edit"), ()=>{
                                                sendMessage({
                                                        method: "newTab",
                                                        url: e.remote_url
                                                    }, ()=>{}
                                                )
                                            }
                                        );
                                        L.push(t)
                                    }
                                    const t = N.createIcon(H.get("edit"), "", e.uuid, "edit", r.a.getMessage("Edit"), ()=>{
                                            C(e.uuid, "scriptClick")
                                        }
                                    );
                                    L.push(t)
                                }
                                if (!e.nnew && !e.system) {
                                    const t = N.createIcon(H.get("delete"), "", e.uuid, "delete", r.a.getMessage("Delete"), ()=>{
                                            C(e.uuid, "deleteScript")
                                        }
                                    );
                                    L.push(t)
                                }
                                z.RUNTIME.MOBILE ? k.inserted || v.addEventListener("click", ()=>{
                                        $(A).toggleClass("show_details")
                                    }
                                ) : k.inserted || (k.addEventListener("click", U),
                                    k.addEventListener("auxclick", U)),
                                    k.appendChild(v);
                                let V = [e.name];
                                if (e.description && V.push(r.a.getTranslation(e, "description")),
                                (e.blacklisted || e.foisted) && (V = [e.blacklisted || e.foisted]),
                                    k.title = V.join("\n\n").replace(/\"/g, '"'),
                                    M.push(e.nnew || e.system ? null : {
                                        element: Je(e),
                                        style: "script_sel"
                                    }),
                                    M.push(x),
                                    M.push((()=>{
                                            let t = null;
                                            t = e.blacklisted || e.foisted ? "enabler_warning" : e.enabled ? e.contexter ? "enabler_enabled enabler_later" : "enabler_enabled" : "enabler_disabled";
                                            const n = e.blacklisted || e.foisted || (e.enabled ? r.a.getMessage("Enabled") : r.a.getMessage("Disabled"))
                                                , s = N.createEnabler(t, e.uuid, "enabled", {
                                                    append: "enabled",
                                                    disabled: !!e.blacklisted,
                                                    title: n
                                                }, ()=>{
                                                    C(e.uuid, "switchEnabled")
                                                }
                                            );
                                            return b[e.uuid].switchEnabled = (t,n,s)=>{
                                                void 0 === n && (n = !e.enabled),
                                                    me(e.uuid, {
                                                        enabled: n,
                                                        whitewash: !!e.foisted
                                                    }, s)
                                            }
                                                ,
                                                s
                                        }
                                    )()),
                                    M.push({
                                        element: k,
                                        style: "script_name"
                                    }),
                                    z.RUNTIME.MOBILE) {
                                    const t = (t,n,s,o)=>{
                                        const i = a("dt", "script_info " + (o || ""), e.name, e.uuid, "dt_mapping" + n)
                                            , r = a("dd", "script_info " + (o || ""), e.name, e.uuid, "dd_mapping" + n);
                                        i.textContent = n,
                                            "string" == typeof s ? r.textContent = s : r.appendChild(s),
                                            t.appendChild([i, r])
                                    }
                                        , n = a("dl", "script_details", e.name, e.uuid, "script_details_dl");
                                    let s;
                                    k.appendChild(n),
                                        t(n, r.a.getMessage("Version"), G),
                                        t(n, r.a.getMessage("Type"), Ve(e), "script_type"),
                                        t(n, r.a.getMessage("Sites"), ze(e)),
                                    (s = Ne(e)) && t(n, r.a.getMessage("Features"), s),
                                    w && t(n, r.a.getMessage("Homepage"), D),
                                    j && t(n, r.a.getMessage("Last_updated"), F),
                                        M.push(E(e, L, "actions"))
                                } else {
                                    M.push({
                                        element: G,
                                        style: "script_version"
                                    }),
                                        M.push(Ve(e)),
                                        M.push(O),
                                        M.push(ze(e)),
                                        M.push(Ne(e)),
                                        M.push(D),
                                        M.push(F),
                                        M.push(Qe(e)),
                                        M.push(E(e, L, "actions"));
                                    for (let e = M.length; e < 10; e++)
                                        M.push(null)
                                }
                                return _e.registerListener(e.uuid, ()=>{
                                        U()
                                    }
                                ),
                                e.nnew && n.push(()=>{
                                        U(null, !0)
                                    }
                                ),
                                    M
                            }
                            , Ve = e=>{
                                let t;
                                const n = a("span", "script_type", "", e.uuid, "pos_type", !0);
                                return e.nnew || e.userscript && (t = N.createImage(H.origin("uso"), "", e.uuid, "user_script", r.a.getMessage("This_is_a_userscript")),
                                    n.appendChild(t)),
                                    n
                            }
                            , Ne = e=>{
                                let t, n, s, a = null;
                                const i = [];
                                if (e.nnew)
                                    return null;
                                e.system && (t = N.createIcon(H.get("lock"), "", e.uuid, "lock", r.a.getMessage("This_is_a_system_script")),
                                    i.push(t)),
                                e.warnings && e.warnings.forEach((n,s)=>{
                                        t = N.createIcon(H.get("critical"), "compat", e.uuid, "warning_" + s, n),
                                            $(t).addClass("flashing"),
                                            i.push(t)
                                    }
                                ),
                                e.requires.length && (s = !e.requires.filter(e=>e.modified).length,
                                    t = N.createIcon(H.get("script_download") + (s ? "" : " red"), "", e.uuid, "requires", e.requires.filter(e=>e && e.url).map(e=>e.url).join("\n"), ()=>{
                                            _e.set(e.uuid, "externals")
                                        }
                                    ),
                                    i.push(t)),
                                e.resources.length && (s = !e.resources.filter(e=>e.modified).length,
                                    t = N.createIcon(H.get("resources") + (s ? "" : " red"), "", e.uuid, "resources", e.resources.filter(e=>e && e.url).map(e=>e.url).join("\n"), ()=>{
                                            _e.set(e.uuid, "externals")
                                        }
                                    ),
                                    i.push(t));
                                let A = !1;
                                const l = {
                                    includes: !0,
                                    matches: !0
                                };
                                for (n in l)
                                    if (e[n]) {
                                        for (let s = 0; s < e[n].length; s++)
                                            if (e[n][s] && (0 == e[n][s].search(/\/\^?http(s|\.\*?|s\?|\[[^\]]*s[^\]]*\]|\([^\)]*s[^\)]*\))+/) || 0 == e[n][s].search(/http[s\*]{1,1}|\*/))) {
                                                t = N.createIcon(H.get("encrypted"), "", e.uuid, "encrypt", r.a.getMessage("This_script_has_access_to_https_pages")),
                                                    i.push(t),
                                                    A = !0;
                                                break
                                            }
                                        if (A)
                                            break
                                    }
                                const c = {};
                                for (n in e.grant.forEach(e=>{
                                        c[e] = !0
                                    }
                                ),
                                c.GM_xmlhttpRequest && (t = N.createIcon(H.get("web"), "", e.uuid, "web", r.a.getMessage("This_script_has_full_web_access")),
                                    i.push(t)),
                                c.GM_setValue && (t = N.createIcon(H.get("db"), "", e.uuid, "db", r.a.getMessage("This_script_stores_data")),
                                    i.push(t)),
                                c.unsafeWindow && (t = N.createIcon(H.get("windowlist"), "", e.uuid, "unsafeWindow", r.a.getMessage("This_script_has_access_to_webpage_scripts")),
                                    i.push(t)),
                                    e.options)
                                    if (-1 != n.indexOf("compat_") && e.options[n]) {
                                        t = N.createIcon(H.get("critical"), "compat", e.uuid, "crit", r.a.getMessage("One_or_more_compatibility_options_are_set")),
                                            i.push(t);
                                        break
                                    }
                                for (n in e.antifeatures) {
                                    const s = e.antifeatures[n];
                                    let a;
                                    a = "ads" == n ? r.a.getMessage("Antifeature_ads") : "miner" == n ? r.a.getMessage("Antifeature_miner") : "tracking" == n ? r.a.getMessage("Antifeature_tracking") : r.a.getMessage("Antifeature_other");
                                    const o = s[r.a.getBestLocale(Object.keys(s))] || s.default || s.en || r.a.getMessage("Antifeature_no_details");
                                    t = N.createIcon(H.get("about"), "compat", e.uuid, "crit", r.a.getMessage("Antifeature__0name0__0description0", a, o)),
                                        i.push(t)
                                }
                                return i.length && (a = o("span", "", e.uuid, "pos_features", !0),
                                    a.appendChild(i, !0)),
                                    a
                            }
                            , Pe = (()=>{
                                    let e = null
                                        , t = null
                                        , n = null
                                        , s = 0
                                        , a = 0
                                        , o = 0;
                                    const i = t=>{
                                            const s = n.x + t.pageX
                                                , a = n.y + t.pageY;
                                            e.style.top = a + "px",
                                                e.style.left = s + "px"
                                        }
                                    ;
                                    let r, A, l;
                                    const c = n=>{
                                            if (e && !r) {
                                                let e, u, p, g, m, h = null;
                                                for (i(n),
                                                     A && (window.clearTimeout(A),
                                                         A = null); h != o; )
                                                    h = o,
                                                        u = t.previousSibling,
                                                        p = t.nextSibling,
                                                        g = t.parentNode,
                                                        m = d(t),
                                                        n.pageY > m.y + s + a && p ? (g.removeChild(p),
                                                            g.insertBefore(p, t),
                                                            o++,
                                                            e = !1) : n.pageY < m.y && o > 1 && (g.removeChild(u),
                                                            p ? g.insertBefore(u, p) : g.appendChild(u),
                                                            o--,
                                                            e = !0);
                                                const f = Math.min(.03 * document.documentElement.clientHeight, 100);
                                                if (void 0 !== e) {
                                                    if (p = e ? $(u) : $(p),
                                                    p.length && !N.isScrolledIntoView(p, {
                                                        padding: f
                                                    })) {
                                                        const t = e ? p.offset().top - f - p.height() : p.offset().top - document.documentElement.clientHeight + f + 2 * p.height();
                                                        r = !0;
                                                        const s = t - document.body.scrollTop;
                                                        $("html, body").animate({
                                                                scrollTop: t
                                                            }, 0, ()=>{
                                                                window.setTimeout(()=>{
                                                                        r = !1,
                                                                            A = window.setTimeout(()=>{
                                                                                    A = null,
                                                                                    l === n && c({
                                                                                        pageX: l.pageX,
                                                                                        pageY: l.pageY + s
                                                                                    })
                                                                                }
                                                                                , 100)
                                                                    }
                                                                    , 100)
                                                            }
                                                        )
                                                    }
                                                    return n.stopPropagation && (n.stopPropagation(),
                                                        n.preventDefault()),
                                                        l = n,
                                                        !1
                                                }
                                            }
                                        }
                                        , d = e=>{
                                            const t = e.getBoundingClientRect();
                                            return {
                                                x: Math.floor(t.left + window.pageXOffset),
                                                y: Math.floor(t.top + window.pageYOffset)
                                            }
                                        }
                                        , u = s=>{
                                            e.style.position = "static";
                                            const a = {};
                                            return a[e.key] = o,
                                                me(e.uuid, a),
                                                e = t = n = null,
                                                document.removeEventListener("mousemove", c),
                                                document.removeEventListener("scroll", c),
                                                document.removeEventListener("mouseup", u),
                                                s.stopPropagation(),
                                                s.preventDefault(),
                                                !1
                                        }
                                    ;
                                    return {
                                        start: function(r, A) {
                                            return ((o,r)=>{
                                                    const A = o.parentNode.parentNode
                                                        , l = A.parentNode
                                                        , c = l.parentNode.parentNode;
                                                    e = o,
                                                        t = l,
                                                        s = t.offsetHeight,
                                                        a = t.offsetHeight - A.clientHeight,
                                                        n = d(c),
                                                        n.x = -n.x - e.offsetWidth / 2,
                                                        n.y = -n.y - t.offsetHeight / 2 + 2 * a,
                                                        e.style.position = "absolute",
                                                        i(r)
                                                }
                                            )(this, r),
                                                o = A,
                                                document.addEventListener("mousemove", c),
                                                document.addEventListener("scroll", c),
                                                document.addEventListener("mouseup", u),
                                                r.stopPropagation(),
                                                r.preventDefault(),
                                                !1
                                        }
                                    }
                                }
                            )()
                            , Qe = e=>{
                                const t = a("span", "sorting", "", e.uuid, "pos_images", !0);
                                if (e.nnew)
                                    return t;
                                if ("pos" == O() && "up" == S() || t.setAttribute("style", "display: none;"),
                                e.position > 1 || e.position < e.positionof) {
                                    const n = a("span", "clickable movable", "position", e.uuid, !0);
                                    n.innerHTML = "&#9776;",
                                        n.title = r.a.getMessage("Click_here_to_move_this_script"),
                                        n.uuid = e.uuid,
                                        n.key = "position",
                                        n.addEventListener("mousedown", (function(t) {
                                                Pe.start.apply(this, [t, e.position])
                                            }
                                        )),
                                        t.appendChild(n)
                                }
                                return t
                            }
                            , ze = e=>{
                                let t = o("span", "", e.uuid, "site_images")
                                    , n = null;
                                return t.inserted && (n = t,
                                    n.setAttribute("id", n.id + "foo"),
                                    t = o("span", "", e.uuid, "site_images")),
                                    P.topIcons(e, 7).forEach(e=>{
                                            t.appendChild(e, !0)
                                        }
                                    ),
                                n && n.parentNode.removeChild(n),
                                    t
                            }
                            , He = e=>{
                                const t = a("div", "search_filter", e.name, e.id, "filter");
                                if (t.inserted)
                                    return t;
                                const o = $(t);
                                let i, A, c, d = null;
                                const u = (e,t)=>{
                                    i && !e || (d && window.clearTimeout(d),
                                        h.show(),
                                        d = window.setTimeout(()=>{
                                                k = null,
                                                    A = R,
                                                    c = g.value;
                                                const e = ()=>A != R || c != g.value
                                                    , t = document.getElementsByName("scriptselectors")
                                                    , n = [];
                                                for (let e = 0; e < t.length; e++)
                                                    n.push(t[e]);
                                                i = !0,
                                                    ("matching_url" != A && "auto" != A || !c.match(_.matching_url.match) ? f.Deferred.Pledge() : (v = _.matching_url.update_interval || v,
                                                        (e=>{
                                                                const t = Object(f.Deferred)();
                                                                return sendMessage({
                                                                        method: "determineScriptsToRun",
                                                                        url: e
                                                                    }, e=>{
                                                                        t.resolve(e.scripts || [])
                                                                    }
                                                                ),
                                                                    t.promise()
                                                            }
                                                        )(c))).then(t=>{
                                                            const a = new RegExp(Object(s.escapeForRegExp)(c),"i")
                                                                , i = new RegExp(Object(s.escapeForRegExp)(c))
                                                                , r = w.a.createQueue(32)
                                                                , d = []
                                                                , u = n.map(n=>()=>{
                                                                    let s, r, c, u;
                                                                    return (r = l[n.s_id]) && (c = r.script) && (u = r.dom) && !e() ? (d.push(()=>{
                                                                            $(u).toggle(!!s),
                                                                                n.is_hidden = !s
                                                                        }
                                                                    ),
                                                                        (()=>{
                                                                                if (!o.is(":visible"))
                                                                                    return f.Deferred.Pledge();
                                                                                if ("auto" == A)
                                                                                    return f.Deferred.or(Object.keys(_).map(e=>()=>{
                                                                                            const n = _[e];
                                                                                            return n.check ? n.check(c, n.ignore_case ? a : i, t) : f.Deferred.Breach()
                                                                                        }
                                                                                    ));
                                                                                {
                                                                                    const e = _[A];
                                                                                    if (e.check)
                                                                                        return e.check(c, e.ignore_case ? a : i, t)
                                                                                }
                                                                                return f.Deferred.Breach()
                                                                            }
                                                                        )().done(()=>{
                                                                                s = !0
                                                                            }
                                                                        ).fail(()=>{
                                                                                s = !1
                                                                            }
                                                                        )) : f.Deferred.Breach()
                                                                }
                                                            );
                                                            return f.Deferred.sidebyside(u.map(e=>r.add(e))).always(()=>d.forEach(e=>e()))
                                                        }
                                                    ).always(()=>{
                                                            i = !1,
                                                                e() ? u(!1, 1) : h.fadeOut()
                                                        }
                                                    )
                                            }
                                            , t || v))
                                }
                                    , g = a("input", "filter_text", "sms", "all", null);
                                g.setAttribute("spellcheck", "false");
                                let m = "";
                                g.inserted || g.addEventListener("keyup", ()=>{
                                        m != g.value && (m = g.value,
                                            u())
                                    }
                                );
                                const h = $(N.createIcon(H.get("download"), "wait_for_filter", e.uuid));
                                let k;
                                h.attr("style", "vertical-align: middle;"),
                                    h.hide(),
                                    b.filter = {
                                        onShow: function(e) {
                                            u(!0),
                                            e && $(g).focus()
                                        },
                                        onHide: function() {
                                            g.value = "",
                                                u(!0, 1)
                                        }
                                    };
                                const _ = {
                                    auto: {
                                        name: r.a.getMessage("Auto"),
                                        update_interval: 500
                                    },
                                    name: {
                                        name: "@name",
                                        sync: function(e, t) {
                                            return -1 != e.name.search(t)
                                        },
                                        ignore_case: !0
                                    },
                                    namespace: {
                                        name: "@namespace",
                                        sync: function(e, t) {
                                            return e.namespace && -1 != e.namespace.search(t)
                                        },
                                        ignore_case: !0
                                    },
                                    author: {
                                        name: "@author",
                                        sync: function(e, t) {
                                            return e.author && -1 != e.author.search(t)
                                        },
                                        ignore_case: !0
                                    },
                                    grant: {
                                        name: "@grant",
                                        default: "GM_",
                                        sync: function(e, t) {
                                            return e.grant && e.grant.filter(e=>-1 != e.search(t)).length > 0
                                        },
                                        ignore_case: !0
                                    },
                                    includes: {
                                        name: "@include/@match",
                                        sync: function(e, t) {
                                            return e.includes && e.includes.filter(e=>-1 != e.search(t)).length > 0 || e.matches && e.matches.filter(e=>-1 != e.search(t)).length > 0
                                        },
                                        ignore_case: !0
                                    },
                                    code: {
                                        name: r.a.getMessage("Source_Code"),
                                        async: function(e, t) {
                                            const n = Object(f.Deferred)();
                                            if (!k) {
                                                const e = Object(f.Deferred)();
                                                k = e.promise(),
                                                    null,
                                                    s = {
                                                        code: t.toString()
                                                    },
                                                    a = t=>{
                                                        e.resolve(t)
                                                    }
                                                    ,
                                                    pe({
                                                            referrer: "options.scripts.userscripts.matches",
                                                            uuid: null,
                                                            filter: s
                                                        }, e=>{
                                                            p(),
                                                                a(e.items)
                                                        }
                                                    )
                                            }
                                            var s, a;
                                            return k.done(t=>{
                                                    window.setTimeout(()=>{
                                                            (t.includes(e.uuid) ? n.resolve : n.reject)()
                                                        }
                                                        , 0)
                                                }
                                            ),
                                                n.promise()
                                        },
                                        ignore_case: !0
                                    },
                                    comment: {
                                        name: r.a.getMessage("Comment"),
                                        sync: function(e, t) {
                                            return e.comment && -1 != e.comment.search(t)
                                        },
                                        ignore_case: !0
                                    },
                                    url: {
                                        name: r.a.getMessage("Update_URL_"),
                                        default: "https://",
                                        sync: function(e, t) {
                                            return e.file_url && -1 != e.file_url.search(t)
                                        },
                                        ignore_case: !0
                                    },
                                    matching_url: {
                                        name: r.a.getMessage("Matching_URL"),
                                        update_interval: 1500,
                                        default: "http://",
                                        match: new RegExp("^https?://.*"),
                                        sync: function(e, t, n) {
                                            return n && n.includes(e.uuid)
                                        }
                                    }
                                };
                                Object.keys(_).forEach(e=>{
                                        const t = _[e];
                                        t.check = t.sync || t.async ? function() {
                                                return t.sync ? t.sync.apply(this, arguments) ? f.Deferred.Pledge() : f.Deferred.Breach() : t.async ? t.async.apply(this, arguments) : void 0
                                            }
                                            : null
                                    }
                                );
                                let R = "auto"
                                    , v = _.auto.update_interval;
                                const y = N.createDropDown(r.a.getMessage("Filter_by"), {
                                    value: 0,
                                    uuid: "sms-filter",
                                    name: "select"
                                }, Object.keys(_).map(e=>({
                                    name: _[e].name,
                                    value: e
                                })), (function() {
                                        let e, t;
                                        const n = this.value;
                                        n != R && (R = n,
                                            e = _[R],
                                            v = (e ? e.update_interval : null) || _.auto.update_interval,
                                            t = (e ? e.default : null) || "",
                                            g.value = g.value || t,
                                            u())
                                    }
                                ));
                                return y.elem.setAttribute("class", "label"),
                                    t.appendChild(y.elem),
                                    t.appendChild(g),
                                    t.appendChild(h[0]),
                                ke.filter && n.push(()=>{
                                        b.multiselect.toggleRow(!0, !0),
                                            g.value = ke.filter
                                    }
                                ),
                                    t
                            }
                        ;
                        let Xe = [];
                        const Ye = e=>{
                                Xe = [],
                                e && Xe.push(e)
                            }
                            , Je = e=>{
                                const t = o("input", "", e.uuid, "sel");
                                return t.type = "checkbox",
                                    t.s_id = e.uuid,
                                    t.name = "scriptselectors",
                                t.inserted || t.addEventListener("click", e=>{
                                        Ye(t),
                                            e.ctrlKey || e.metaKey ? b.multiselect.un_selectAll() : b.multiselect.single_click()
                                    }
                                ),
                                    t
                            }
                            , qe = e=>{
                                const t = a("input", "multiselectcb", "sms", "all", null)
                                    , n = a("div", "filter multiselectcb clickable", "sms2", "all", null);
                                t.inserted || (t.type = "checkbox",
                                    t.addEventListener("click", b.multiselect.un_selectAll),
                                    n.addEventListener("click", ()=>{
                                            b.multiselect.toggleRow()
                                        }
                                    ));
                                let s = 0
                                    , o = [{
                                    name: r.a.getMessage("__Please_choose__"),
                                    value: 0
                                }, {
                                    name: r.a.getMessage("Enable"),
                                    value: 1
                                }, {
                                    name: r.a.getMessage("Disable"),
                                    value: 2
                                }, {
                                    name: r.a.getMessage("Toggle_Enable"),
                                    value: 7
                                }];
                                (z.RUNTIME.CAN_SAVEAS_ZIP || "undefined" != typeof Blob) && o.push({
                                    name: r.a.getMessage("Export"),
                                    value: 3
                                }),
                                    o = o.concat([{
                                        name: r.a.getMessage("Trigger_Update"),
                                        value: 5
                                    }, {
                                        name: r.a.getMessage("Factory_Reset"),
                                        value: 8
                                    }, {
                                        name: r.a.getMessage("Remove"),
                                        value: 6
                                    }]);
                                const i = N.createDropDown(r.a.getMessage("Apply_this_action_to_the_selected_scripts"), {
                                    value: 0,
                                    uuid: "sms-select",
                                    name: "select"
                                }, o, (function() {
                                        0 == this.value ? A.setAttribute("disabled", "true") : A.removeAttribute("disabled"),
                                            s = this.value
                                    }
                                ))
                                    , A = N.createButton("MultiSelectButton", "start_button", r.a.getMessage("Start"), ()=>{
                                        if (0 == s)
                                            return void console.log("option: ?!?!");
                                        let e, t = null;
                                        if (6 == s ? t = r.a.getMessage("Really_delete_the_selected_items_") : 8 == s && (t = r.a.getMessage("Really_factory_reset_the_selected_items_")),
                                        t && !confirm(t))
                                            return;
                                        const n = document.getElementsByName("scriptselectors")
                                            , a = [];
                                        for (e = 0; e < n.length; e++)
                                            a.push(n[e]);
                                        const o = {};
                                        let i, A = !1, d = 100;
                                        for (e = 0; e < a.length; e++)
                                            if (a[e].checked && !a[e].is_hidden)
                                                if (1 == s || 2 == s || 7 == s) {
                                                    let t;
                                                    i = "switchEnabled";
                                                    const n = l[a[e].s_id] ? l[a[e].s_id].script : null;
                                                    7 == s ? n && (t = !n.enabled || !!n.foisted) : 2 == s && n && n.foisted || (t = 1 == s),
                                                    void 0 !== t && (C(a[e].s_id, i, null, t, !1),
                                                        A = !0)
                                                } else
                                                    3 == s ? o[a[e].s_id] = !0 : 5 == s ? (i = "scriptUpdate",
                                                        C(a[e].s_id, i)) : 6 == s ? (i = "deleteScript",
                                                        C(a[e].s_id, i, null, !0),
                                                        A = !0,
                                                        d = 1500) : 8 == s && (i = "fullReset",
                                                        C(a[e].s_id, i),
                                                        A = !0,
                                                        d = 1500);
                                        3 == s && (u(),
                                            Me(o, {
                                                storage: c.script_storage,
                                                externals: c.include_externals
                                            }).then(e=>(u(),
                                                z.RUNTIME.CAN_SAVEAS_ZIP ? G.create(e.scripts).progress(u) : M.create(e.scripts).then(e=>new Blob([e],{
                                                    type: "text/plain"
                                                })))).then(e=>Ee().done(()=>{
                                                    saveAs(e, "tampermonkey_scripts" + (z.RUNTIME.CAN_SAVEAS_ZIP ? ".zip" : ".txt")),
                                                        te()
                                                }
                                            )).fail(()=>se(r.a.getMessage("Action_failed"))).always(()=>{
                                                    p()
                                                }
                                            )),
                                        A && (u(r.a.getMessage("Please_wait___")),
                                            window.setTimeout(()=>{
                                                    ge()
                                                }
                                                , d))
                                    }
                                );
                                A.setAttribute("class", "action_button"),
                                    A.setAttribute("disabled", "true"),
                                    i.elem.appendChild(A);
                                const d = a("div", "actions", e.name, e.id, "actions");
                                d.appendChild(i.elem);
                                const g = N.createButton("MultiSelectButton", "close_button", r.a.getMessage("Close"), ()=>{
                                        b.multiselect.toggleRow(!1)
                                    }
                                );
                                return $(g).addClass("close_button"),
                                    {
                                        selAllm: t,
                                        selAll: n,
                                        actionBox: d,
                                        close: g
                                    }
                            }
                        ;
                        (()=>{
                                let e = 0;
                                b.multiselect = {};
                                let t = !1;
                                b.multiselect.toggleRow = (e,n)=>{
                                    const s = $(".multiselect");
                                    void 0 === e && (e = !t),
                                        e ? (t = !0,
                                            s.addClass("multiselectvisible"),
                                            b.filter.onShow(n)) : (t = !1,
                                            s.removeClass("multiselectvisible"),
                                            b.filter.onHide(),
                                            b.multiselect.un_selectAll(!1))
                                }
                                    ,
                                    b.multiselect.single_click = ()=>{
                                        let t = 0;
                                        const n = document.getElementsByName("scriptselectors");
                                        let s = !0
                                            , a = !1
                                            , o = !1
                                            , i = 0;
                                        for (let e = 0; e < n.length; e++) {
                                            o = !0,
                                                s = s && n[e].checked,
                                                a = a || n[e].checked;
                                            const t = $(n[e]).closest("tr");
                                            n[e].checked ? (i++,
                                                t.addClass("selected")) : t.removeClass("selected")
                                        }
                                        o && s && (t += 2),
                                        t != e && (e = t,
                                            $(".multiselectcb").prop("checked", 0 != t ? "checked" : "")),
                                        i && b.multiselect.toggleRow(!0),
                                        b.multiselect.checkScroll && b.multiselect.checkScroll()
                                    }
                                    ,
                                    b.multiselect.un_selectAll = t=>{
                                        ++e > 3 && (e = 0),
                                        1 == e && e++;
                                        let n = !1
                                            , s = 0;
                                        const a = document.getElementsByName("scriptselectors");
                                        Ye(),
                                        !0 === t && (e = 2);
                                        for (let o = 0; o < a.length; o++) {
                                            const i = $(a[o]).closest("tr");
                                            !1 === t ? (a[o].checked = !1,
                                                i.removeClass("selected")) : (0 == o && 3 == e && (e = 0),
                                                n = !0,
                                                a[o].checked = 3 == e || 2 == e,
                                                a[o].checked ? (s++,
                                                    i.addClass("selected"),
                                                    Xe.push(a[o])) : i.removeClass("selected")),
                                            s && b.multiselect.toggleRow(!0)
                                        }
                                        void 0 === t ? e > 1 && !n && (e = 0) : t || (e = 0),
                                            $(".multiselectcb").prop("checked", 0 != e ? "checked" : "")
                                    }
                            }
                        )();
                        const We = {};
                        rea.extension.onMessage.addListener((e,n,a)=>{
                                if ("updateOptions" == e.method)
                                    t = e.options || t,
                                        re(e.items, !1),
                                        a({});
                                else if ("confirm" == e.method) {
                                    const t = e=>{
                                            a({
                                                confirm: e
                                            })
                                        }
                                    ;
                                    Object(s.cConfirm)(e.msg, t)
                                } else if ("showMsg" == e.method)
                                    Object(s.cAlert)(e.msg),
                                        a({});
                                else {
                                    if ("status" != e.method)
                                        return !1;
                                    K(e.options),
                                        a({})
                                }
                                return !0
                            }
                        ),
                            (()=>{
                                    const s = a("div", "content_wrapper", "options", "main")
                                        , i = a("div", "status", "options", "status");
                                    $(document.body).append(s, i).addClass("main");
                                    const A = a("div", "head_container", "opt", "head_container")
                                        , l = a("div", "tv_container_fit", "opt", "tv_container")
                                        , c = o("a", "head_link", "heads", "head_link");
                                    c.href = "https://www.tampermonkey.net",
                                        c.target = "_blank";
                                    const g = a("div", "float", "heads", "head1")
                                        , m = a("img", "banner", "heads");
                                    m.src = H.brand("tampermonkey");
                                    const h = a("div", "float head", "heads", "head2")
                                        , f = a("div", "header_title", "heads")
                                        , b = a("div", "version", "version", "version");
                                    b.textContent = "v" + rea.extension.manifest.version;
                                    const k = o("div", "search", "box", "")
                                        , _ = a("div", "footer", "footer");
                                    f.innerHTML = "Tampermonkey<sup>®</sup>";
                                    const R = a("div", "social", "social");
                                    R.textContent = " by Jan Biniok",
                                        R.appendChild(N.createSocialButtons()),
                                        f.appendChild(R),
                                        g.appendChild(m),
                                        h.appendChild(f),
                                        h.appendChild(b),
                                        c.appendChild(g),
                                        c.appendChild(h),
                                        A.appendChild(c),
                                        A.appendChild(k),
                                        s.appendChild(A),
                                        s.appendChild(l),
                                        window.tab_view = d = Q("_main", l),
                                        d.setFooter(_),
                                        n.unshift(()=>{
                                                Ze(d),
                                                    (e=>{
                                                            let n, s;
                                                            const i = "help"
                                                                , A = "help"
                                                                , l = o("div", i, A, "tab_help_h")
                                                                , c = l.textContent = r.a.getMessage("Help")
                                                                , d = o("div", i, A, "tab_help");
                                                            e.appendTab(A, l, d, e=>{
                                                                    e.then(()=>{
                                                                            if (_e.set(A),
                                                                                document.title = c,
                                                                                !s) {
                                                                                u();
                                                                                const e = a("div", "section", i, A, "ta")
                                                                                    , l = a("div", "section_head", i, A, "head_ta")
                                                                                    , c = a("div", "section_content", i, A, "content_ta");
                                                                                l.textContent = r.a.getMessage("Editor"),
                                                                                    e.appendChild([l, c]);
                                                                                const g = a("dl", "dl-horizontal shortcuts", i, A, "dl");
                                                                                c.appendChild(g);
                                                                                const m = a("dt", "keymapping", i, A, "dt_mapping");
                                                                                if (n = a("dd", "keymapping", i, A, "dd_mapping"),
                                                                                    m.textContent = r.a.getMessage("Key_Mapping"),
                                                                                    n.textContent = t.editor_keyMap,
                                                                                    g.appendChild([m, n]),
                                                                                "vim" == t.editor_keyMap)
                                                                                    n = a("dd", "keymapping", i, A, "dd_unsup"),
                                                                                        n.textContent = r.a.getMessage("Please_check_the_0editor0_documentation_for_more_details_", "VIM"),
                                                                                        g.appendChild(n);
                                                                                else if ("emacs" == t.editor_keyMap)
                                                                                    n = a("dd", "keymapping", i, A, "dd_unsup"),
                                                                                        n.textContent = r.a.getMessage("Please_check_the_0editor0_documentation_for_more_details_", "Emacs"),
                                                                                        g.appendChild(n);
                                                                                else {
                                                                                    const e = [];
                                                                                    s = {};
                                                                                    const n = e=>{
                                                                                            const t = e.split(/-+/)
                                                                                                , n = t.pop()
                                                                                                , s = [];
                                                                                            let a = "";
                                                                                            return -1 != (a = ["up", "down", "left", "right"].indexOf(n.toLowerCase())) && s.push("#cursor"),
                                                                                            n.toLowerCase().match(/f[0-9]{1,2}/) && s.push("#function"),
                                                                                                s.length ? s.join("-") + t.join("-") + a + n : ("0000" + (100 - Math.min(n.length, 4))).slice(-4) + n + t.join("-")
                                                                                        }
                                                                                    ;
                                                                                    [{
                                                                                        Esc: "backOrClose",
                                                                                        ..."mac" != be ? {
                                                                                            "Alt-Left": "previousTab",
                                                                                            "Alt-Right": "nextTab"
                                                                                        } : {
                                                                                            "Alt-Up": "previousTab",
                                                                                            "Alt-Down": "nextTab"
                                                                                        }
                                                                                    }, Y.keyMap[t.editor_keyMap], "mac" != be ? Y.keyMap.pcDefault : Y.keyMap.macDefault, Y.keyMap.default].forEach(t=>{
                                                                                            Object.keys(t).forEach(a=>{
                                                                                                    s[a] || "fallthrough" == a || (e.push({
                                                                                                        name: a,
                                                                                                        fn: t[a].replace ? t[a].replace(/([A-Z])/g, " $1").replace(/ [A-Z]/g, e=>e.toLowerCase()) : t[a],
                                                                                                        sort: n(a)
                                                                                                    }),
                                                                                                        s[a] = !0)
                                                                                                }
                                                                                            )
                                                                                        }
                                                                                    ),
                                                                                        e.sort((e,t)=>e.sort < t.sort ? -1 : e.sort > t.sort ? 1 : 0),
                                                                                        e.forEach(e=>{
                                                                                                const t = o("dt", i, A, "dt_" + e.sort)
                                                                                                    , n = o("dd", i, A, "dd_" + e.sort);
                                                                                                t.textContent = e.name,
                                                                                                    n.textContent = e.fn,
                                                                                                    g.appendChild([t, n])
                                                                                            }
                                                                                        )
                                                                                }
                                                                                d.appendChild(e),
                                                                                    p()
                                                                            }
                                                                        }
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    )(d)
                                            }
                                        ),
                                        n.push(()=>{
                                                void 0 !== ke.contribute && window.setTimeout(()=>{
                                                        B("f")
                                                    }
                                                    , 100),
                                                    e.global = !0
                                            }
                                        ),
                                        window.onbeforeunload = ()=>{
                                            let e;
                                            return d.getAllTabs().forEach(t=>{
                                                    e = e || t.modified()
                                                }
                                            ),
                                                e ? r.a.getMessage("There_are_unsaved_changed_") : void 0
                                        }
                                }
                            )(),
                            pe({
                                    referrer: "options"
                                }, e=>{
                                    if (e.options && e.options.layout_user_css && "reset" !== ke.layout) {
                                        const t = document.createElement("style");
                                        t.innerHTML = e.options.layout_user_css,
                                            (document.head || document.body || document.documentElement || document).appendChild(t)
                                    }
                                    t = e.options || t,
                                    e.xhr && I.a.setConfig(e.xhr),
                                        e.items ? (re(e.items, !1),
                                        e.begging && n.push(()=>{
                                                window.setTimeout(()=>{
                                                        B(e.begging)
                                                    }
                                                    , 100)
                                            }
                                        )) : p()
                                }
                            )
                    }
                )
            }
        ;
        window.requestFileSystem || (window.requestFileSystem = window.webkitRequestFileSystem),
        window.BlobBuilder || (window.BlobBuilder = window.WebKitBlobBuilder);
        const W = rea.FEATURES
            , K = U.images
            , ee = window.MirrorFrame;
        var te = ()=>{
                h.a.render(()=>{
                        let e = null
                            , t = {}
                            , n = "???"
                            , i = null;
                        const A = (e,n,a)=>{
                                a = a || {};
                                const o = Object(f.Deferred)();
                                try {
                                    const i = {
                                        aid: e,
                                        method: n
                                    };
                                    a.data && Object(s.each)(a.data, (e,t)=>{
                                            i[t] = a.data[t]
                                        }
                                    ),
                                        sendMessage({
                                                method: "askCom",
                                                data: i
                                            }, e=>{
                                                a.bg || p(),
                                                    t = e.options || t,
                                                    e.error ? (e.please_close && window.setTimeout(window.close, 100),
                                                        o.reject(e)) : o.resolve(e)
                                            }
                                        ),
                                    a.bg || u(r.a.getMessage("Please_wait___"))
                                } catch (e) {
                                    console.warn("sS: " + e.message),
                                        o.reject()
                                }
                                return o.promise()
                            }
                            , l = ()=>A(e.aid, "ping", {
                                bg: !0
                            })
                            , c = ()=>A(e.aid, "abort")
                            , d = ()=>{
                                let e;
                                const t = a("div", "content_wrapper", "ask", "main");
                                $(document.body).append(t).addClass("main");
                                const n = a("div", "head_container", "ask", "head_container")
                                    , s = a("div", "tv_container_fit", "ask", "tv_container")
                                    , i = o("a", "head_link", "ask", "head_link");
                                i.href = "https://www.tampermonkey.net",
                                    i.target = "_blank";
                                const r = a("div", "float", "ask", "head1")
                                    , A = a("img", "banner", "ask");
                                A.src = K.brand("tampermonkey");
                                const l = a("div", "float head", "ask", "head2")
                                    , c = a("div", "header_title", "heading")
                                    , d = a("div", "version", "version", "version");
                                d.textContent = "v" + rea.extension.manifest.version;
                                const u = o("div", "search", "box", "");
                                c.innerHTML = "Tampermonkey<sup>&reg;</sup>",
                                    r.appendChild(A),
                                    l.appendChild(c),
                                    l.appendChild(d),
                                    i.appendChild(r),
                                    i.appendChild(l),
                                    n.appendChild(i),
                                    n.appendChild(u),
                                    t.appendChild(n),
                                    t.appendChild(s);
                                const m = Q("_main", s);
                                return e = g(m),
                                    p(),
                                    e
                            }
                            , g = e=>{
                                const t = "main"
                                    , a = "main"
                                    , i = o("div", t, a, "tab_content_h");
                                i.textContent = n;
                                const r = o("div", t, a, "tab_content");
                                return e.appendTab(Object(s.createUniqueId)(t, a), i, r).select(),
                                    r
                            }
                            , m = e=>{
                                const n = e.script
                                    , s = e.oldscript
                                    , i = a("div", "viewer_bottom_tab", "bottom", "")
                                    , A = {
                                    tv: "tv tv_alt",
                                    tv_table: "tv_table tv_table_alt",
                                    tr_tabs: "tr_tabs tr_tabs_alt",
                                    tr_content: "tr_content tr_content_alt",
                                    td_content: "td_content td_content_alt",
                                    td_tabs: "td_tabs td_tabs_alt",
                                    tv_tabs_align: "tv_tabs_align tv_tabs_align_alt",
                                    tv_tabs_fill: "tv_tabs_fill tv_tabs_fill_alt",
                                    tv_tabs_table: "tv_tabs_table tv_tabs_table_alt",
                                    tv_contents: "tv_contents tv_contents_alt",
                                    tv_tab_selected: "tv_tab tv_selected tv_tab_alt tv_selected_alt",
                                    tv_tab_close: "",
                                    tv_tab: "tv_tab tv_tab_alt",
                                    tv_content: "tv_content tv_content_alt"
                                };
                                if (t.editor_enabled) {
                                    const e = Q("_source" + n.uuid, i, A);
                                    let l;
                                    const c = (e,t)=>{
                                            const n = a("div", "tv_content tv_content_alt", e.uuid, t + "container_o")
                                                , s = a("table", "editor_container_o editor_400p_container_o p100100 noborder", e.uuid, t + "container_o")
                                                , o = a("tr", "editor_container p100100", e.uuid, t + "container");
                                            n.appendChild(s),
                                                s.appendChild(o);
                                            const i = a("td", "editor_outer editor_400p_outer", e.uuid, t + "edit")
                                                , r = a("div", "editor_100 editor_border", e.uuid, t + "edit");
                                            return o.appendChild(i),
                                                i.appendChild(r),
                                                {
                                                    c: n,
                                                    e: r
                                                }
                                        }
                                    ;
                                    let d = ()=>{
                                            const e = Object(f.Deferred)();
                                            return Object(y.vendor)(["vendor/jsdiff/diff"], ()=>{
                                                    d = f.Deferred.Pledge,
                                                        e.resolve()
                                                }
                                            ),
                                                e.promise()
                                        }
                                    ;
                                    (s && s.textContent != n.textContent ? d().then(()=>{
                                            const a = o("div", n.uuid, "diff_h");
                                            a.textContent = r.a.getMessage("Changes");
                                            const A = c(n, "diff");
                                            i.diff = new ee(A.e,{
                                                theme: "diff",
                                                fontSize: t.editor_fontSize,
                                                value: r.a.getMessage("Please_wait___"),
                                                noButtons: !0,
                                                mode: "diff",
                                                readOnly: !0
                                            }),
                                                l = e.appendTab("diff", a, A.c, ()=>{
                                                        window.setTimeout(()=>{
                                                                i.diff.refresh(),
                                                                    i.diff.mirror.focus()
                                                            }
                                                            , 1)
                                                    }
                                                ),
                                                window.setTimeout(()=>{
                                                        let e;
                                                        try {
                                                            e = window.JsDiff.createTwoFilesPatch(r.a.getMessage("Current_Version"), r.a.getMessage("New_Version"), s.textContent, n.textContent, void 0, void 0, {
                                                                timeout: 4e3
                                                            })
                                                        } catch (e) {
                                                            console.warn(e)
                                                        }
                                                        e || (e = r.a.getMessage("The_diff_for_this_script_is_too_large_to_render")),
                                                            i.diff.mirror.setValue(e)
                                                    }
                                                    , 500)
                                        }
                                    ) : f.Deferred.Pledge()).then(()=>{
                                            const s = o("div", n.uuid, "source_h");
                                            s.textContent = r.a.getMessage("Source_Code");
                                            const a = c(n, "source");
                                            i.editor = new ee(a.e,{
                                                theme: t.editor_theme,
                                                fontSize: t.editor_fontSize,
                                                tabSize: Number(t.editor_tabSize),
                                                value: n.textContent,
                                                noButtons: !0,
                                                matchBrackets: !0,
                                                readOnly: !0
                                            });
                                            const A = e.appendTab("source", s, a.c, ()=>{
                                                    window.setTimeout(()=>{
                                                            i.editor.refresh(),
                                                                i.editor.mirror.focus()
                                                        }
                                                        , 1)
                                                }
                                            );
                                            l = l || A
                                        }
                                    ).then(()=>{
                                            l.select()
                                        }
                                    )
                                } else {
                                    const e = a("div", "editor_400p_outer", "editor", n.name)
                                        , t = a("div", "editor_400p editor_border", "editor", n.name);
                                    i.appendChild(e),
                                        e.appendChild(t);
                                    const s = a("textarea", "editorta", "editor", n.name);
                                    s.setAttribute("wrap", "off"),
                                        t.appendChild(s),
                                        s.value = n.textContent
                                }
                                return i
                            }
                            , h = (()=>{
                                    const e = {};
                                    return window.addEventListener("keydown", t=>{
                                            let n = !1;
                                            if ("keydown" == t.type)
                                                return e[t.keyCode] && (n = e[t.keyCode](t)),
                                                    n ? (t.stopPropagation(),
                                                        t.preventDefault(),
                                                        !1) : void 0
                                        }
                                        , !0),
                                        {
                                            registerListener: function(t, n) {
                                                e[t] = n
                                            }
                                        }
                                }
                            )()
                            , b = (e,t,n)=>{
                                n.filter(e=>e.label).forEach(n=>{
                                        const s = n.icon ? N.createImageTextButton(n.id, n.id, n.label, n.icon, n.fn) : N.createButton(n.label, n.id, n.label, n.fn)
                                            , a = $(s);
                                        if (a.addClass(t),
                                        n.id && a.attr("data-btn-id", n.id),
                                            e.appendChild(s),
                                        n.focus && window.setTimeout(()=>{
                                                a.focus()
                                            }
                                            , 300),
                                            n.keyDown) {
                                            const e = n.keyDown.keyCode ? n.keyDown.keyCode : n.keyDown
                                                , t = n.keyDown.cb ? n.keyDown.cb : n.fn;
                                            h.registerListener(e, t)
                                        }
                                    }
                                )
                            }
                            , _ = t=>{
                                const n = t.script
                                    , s = a("div", "viewer_last", "install")
                                    , o = a("div", "viewer_content", "install_content")
                                    , i = a("div", "ask_action_buttons", "install_buttons")
                                    , l = [];
                                return l.push({
                                    label: t.messages.action,
                                    fn: function() {
                                        A(e.aid, "install")
                                    },
                                    focus: !0
                                }),
                                W.RUNTIME.CHROME && W.RUNTIME.BROWSER_VERSION < 21 && l.push({
                                    label: t.messages.flags.install ? r.a.getMessage("Process_with_Chrome") : null,
                                    fn: function() {
                                        C(n.fileURL),
                                            $(s).hide()
                                    }
                                }),
                                    l.push({
                                        label: r.a.getMessage("Cancel"),
                                        fn: x,
                                        keyDown: 27
                                    }),
                                    b(i, "install", l),
                                    o.appendChild(i),
                                    s.appendChild(o),
                                    s
                            }
                            , R = ()=>{
                                const e = a("div", "viewer_last", "ok")
                                    , t = a("div", "viewer_content", "ok_content")
                                    , n = a("div", "ask_action_buttons", "ok_buttons");
                                return b(n, "import", [{
                                    label: r.a.getMessage("Ok"),
                                    fn: x,
                                    focus: !0
                                }]),
                                    t.appendChild(n),
                                    e.appendChild(t),
                                    e
                            }
                            , v = (e,t)=>{
                                const n = o("input", e + "_", t, "", !0);
                                return n.setAttribute("data-import-id", t),
                                    n.checked = !0,
                                    n.type = "checkbox",
                                    n.addEventListener("click", e=>{
                                            (e.ctrlKey || e.metaKey) && $("input[type=checkbox][data-import-id!=" + t + "]").prop("checked", n.checked)
                                        }
                                    ),
                                    n
                            }
                            , w = (e,t)=>{
                                const n = e.preparat
                                    , s = e.content
                                    , i = n.script || {}
                                    , A = i.uuid || i.id || i.name;
                                n.short_info || (n.short_info = []);
                                const l = a("div", "viewer_upper", A)
                                    , c = a("div", "viewer_info " + (t ? "viewer_info_wide" : "viewer_info_multiple"), "general", A)
                                    , d = a("div", "viewer_content", "general_content", A)
                                    , u = o("h3", "install", "heading", A);
                                if (e.checkbox && u.appendChild(v(e.checkbox, e.key)),
                                i.icon || i.icon64) {
                                    const e = o("img", "version", "heading", A);
                                    e.src = i.icon || i.icon64,
                                        u.appendChild(e)
                                }
                                const p = o("span", "name", "heading", A);
                                if (p.textContent = n.heading || i.name || "",
                                    u.appendChild(p),
                                    i.version) {
                                    const e = a("span", "view_version", "heading", A);
                                    e.textContent = "v" == i.version[0] ? "" : "v",
                                        e.textContent += i.version,
                                        u.appendChild(e)
                                }
                                c.appendChild(u),
                                t && n.short_info.unshift({
                                    prop: "heading",
                                    value: n.messages.heading,
                                    label: r.a.getMessage("Action")
                                });
                                const g = a("table", "script_desc", A);
                                n.short_info.forEach(e=>{
                                        const n = i[e.prop] || e.value;
                                        if (!n && t)
                                            return;
                                        const s = a("tr", "script_desc", e.prop, A)
                                            , o = a("td", "script_desc", e.prop, A + "dt")
                                            , l = a("td", "script_desc", e.prop, A + "dd");
                                        o.textContent = e.label ? e.label : "",
                                            l.textContent = n || r.a.getMessage("_not_set_"),
                                            s.appendChild(o),
                                            s.appendChild(l),
                                            g.appendChild(s)
                                    }
                                ),
                                    d.appendChild(g);
                                const m = a("div", "viewer_info viewer_info_multiple", "info", A);
                                let h;
                                if (t)
                                    h = d;
                                else {
                                    h = a("div", "viewer_content", "info_content", A);
                                    const e = o("h4", "action", "heading", A);
                                    document.title = e.textContent = n.messages.heading,
                                        h.appendChild(e)
                                }
                                let f = 0;
                                ["errors", "warnings", "info"].forEach(e=>{
                                        const t = o("table", e, A + f);
                                        (n.messages[e] || []).forEach(n=>{
                                                f++;
                                                const s = o("tr", e, A + f)
                                                    , a = o("td", e, A + "dt" + f)
                                                    , i = o("td", e, A + "dd" + f);
                                                if ("info" == e)
                                                    if (n.label && n.value)
                                                        a.textContent = n.label,
                                                            i.textContent = n.value;
                                                    else {
                                                        let e = '<i class="far fa-' + K.get("about") + '"></i>&nbsp;';
                                                        W.RUNTIME.MOBILE || (a.innerHTML = e,
                                                            e = ""),
                                                            i.innerHTML = e + N.safeTagsReplace(n).replace(/\n/g, "<br />")
                                                    }
                                                else if ("warnings" == e) {
                                                    let e = '<i class="far fa-' + K.get("critical") + '"></i>&nbsp;';
                                                    W.RUNTIME.MOBILE || (a.innerHTML = e,
                                                        e = ""),
                                                        i.innerHTML = e + N.safeTagsReplace(n).replace(/\n/g, "<br />")
                                                } else if ("errors" == e) {
                                                    let e = '<i class="far fa-' + K.get("error") + '"></i>&nbsp;';
                                                    W.RUNTIME.MOBILE || (a.innerHTML = e,
                                                        e = ""),
                                                        i.innerHTML = e + N.safeTagsReplace(n).replace(/\n/g, "<br />")
                                                }
                                                s.appendChild(a),
                                                    s.appendChild(i),
                                                    t.appendChild(s)
                                            }
                                        ),
                                            h.appendChild(t)
                                    }
                                );
                                const b = (e,t,n,s)=>{
                                        const l = o("table", e, A);
                                        let c = 0;
                                        const d = {};
                                        if (t.forEach(t=>{
                                                if (c > s)
                                                    return;
                                                const o = t;
                                                if (d[o])
                                                    return;
                                                d[o] = !0;
                                                const i = a("tr", e + "desc", o, A + c)
                                                    , r = a("td", e + "desc", o, A + c + "dt")
                                                    , u = a("td", e + "desc", o, A + c + "dd");
                                                r.innerHTML = 0 == c ? N.safeTagsReplace(n.label) : "&nbsp;",
                                                    u.innerHTML = c == s ? '<span title="' + N.safeTagsReplace(n.warning) + '">...!</span>' : N.safeTagsReplace(o),
                                                    i.appendChild(r),
                                                    i.appendChild(u),
                                                    l.appendChild(i),
                                                    c++
                                            }
                                        ),
                                            i.options) {
                                            const t = i.options.override && i.options.override["use_" + e];
                                            if (t && t.length) {
                                                const t = a("tr", e + "desc", "ovverride", A + c)
                                                    , s = a("td", e + "desc", "ovverride", A + c + "dt")
                                                    , o = a("td", e + "desc", "ovverride", A + c + "dd");
                                                s.innerHTML = 0 == c ? N.safeTagsReplace(n.label) : "&nbsp;",
                                                    o.innerHTML = N.safeTagsReplace(" (" + r.a.getMessage("overwritten_by_user") + ")"),
                                                    t.appendChild(s),
                                                    t.appendChild(o),
                                                    l.appendChild(t)
                                            }
                                        }
                                        h.appendChild(l)
                                    }
                                ;
                                b("includes", (i.includes || []).concat(i.matches || []), {
                                    label: r.a.getMessage("Include_s__"),
                                    warning: r.a.getMessage("Attention_Can_not_display_all_includes_")
                                }, 5),
                                    b("excludes", i.excludes || [], {
                                        label: r.a.getMessage("Exclude_s__"),
                                        warning: r.a.getMessage("Attention_Can_not_display_all_excludes_")
                                    }, 3),
                                    c.appendChild(d),
                                    m.appendChild(h),
                                    l.appendChild(c),
                                    l.appendChild(m);
                                const k = a("div", "section", A, "install_src");
                                k.appendChild(l),
                                e.install && k.appendChild(e.install(n)),
                                e.editor && k.appendChild(e.editor(n)),
                                    s.appendChild(k)
                            }
                            , C = e=>{
                                c(),
                                    window.setTimeout(()=>{
                                            window.location = e + "#bypass=true"
                                        }
                                        , 10)
                            }
                        ;
                        var x = ()=>{
                                c(),
                                    window.setTimeout(()=>{
                                            window.close()
                                        }
                                        , 3e3)
                            }
                        ;
                        const G = ()=>{
                                A(e.aid, "unload"),
                                i && (window.clearInterval(i),
                                    i = null),
                                    window.removeEventListener("unload", G)
                            }
                        ;
                        window.addEventListener("unload", G);
                        const M = ()=>{
                                window.location.search || window.location.hash ? (e = Object(s.getUrlArgs)(),
                                    e.aid ? ((e.aid,
                                        A(e.aid, "preparat")).done(t=>{
                                            if (t.options && (t.options.statistics_enabled && k.a.init("ask", !0, {
                                                trackView: !1,
                                                version: rea.extension.manifest.version
                                            }),
                                                t.options.layout_user_css)) {
                                                const e = document.createElement("style");
                                                e.innerHTML = t.options.layout_user_css,
                                                    (document.head || document.body || document.documentElement || document).appendChild(e)
                                            }
                                            n = r.a.getMessage("Install");
                                            let s = null;
                                            t.preparat && ("install" == t.type ? s = ()=>{
                                                    w({
                                                        content: d(),
                                                        preparat: t.preparat,
                                                        install: _,
                                                        editor: m
                                                    })
                                                }
                                                : "install_error" == t.type ? s = ()=>{
                                                        w({
                                                            content: d(),
                                                            preparat: t.preparat,
                                                            install: R
                                                        }, !0)
                                                    }
                                                    : "import" == t.type ? s = ()=>{
                                                            ((t,n)=>{
                                                                    if (document.title = r.a.getMessage("Import"),
                                                                        t.appendChild((t=>{
                                                                                const n = a("div", "viewer_last", "import")
                                                                                    , s = a("div", "viewer_content", "import_content")
                                                                                    , o = a("div", "ask_action_buttons import_buttons", "import_buttons");
                                                                                b(o, "import", [{
                                                                                    label: r.a.getMessage("Import"),
                                                                                    fn: function() {
                                                                                        var n, s;
                                                                                        n = Object.keys(t.scripts).filter(e=>!!$("input[type=checkbox][data-import-id=" + e + "]:checked").val()),
                                                                                            s = t.global_settings && !!$("input[type=checkbox][data-import-id=global_settings]:checked").val(),
                                                                                            A(e.aid, "import", {
                                                                                                data: {
                                                                                                    import_ids: n,
                                                                                                    global_settings: s
                                                                                                }
                                                                                            })
                                                                                    },
                                                                                    focus: !0
                                                                                }, {
                                                                                    label: r.a.getMessage("Cancel"),
                                                                                    fn: x,
                                                                                    keyDown: 27
                                                                                }]),
                                                                                    s.appendChild(o),
                                                                                    n.appendChild(s);
                                                                                const i = a("div", "section", "btn");
                                                                                return i.appendChild(n),
                                                                                    i
                                                                            }
                                                                        )(n)),
                                                                        n.global_settings) {
                                                                        const e = a("div", "viewer_upper", "");
                                                                        (e=>{
                                                                                const t = e.key
                                                                                    , n = e.content
                                                                                    , s = a("div", "viewer_upper", t)
                                                                                    , i = a("div", "viewer_info viewer_info_wide", "general", t)
                                                                                    , A = a("div", "viewer_content", "general_content", t)
                                                                                    , l = o("h3", "install", "heading", t);
                                                                                e.checkbox && l.appendChild(v(e.checkbox, e.key));
                                                                                const c = o("img", "version", "heading", t);
                                                                                c.src = K.brand("tampermonkey"),
                                                                                    l.appendChild(c);
                                                                                const d = o("span", "name", "heading", t);
                                                                                d.textContent = r.a.getMessage("Global_Settings"),
                                                                                    l.appendChild(d),
                                                                                    i.appendChild(l);
                                                                                const u = a("table", "script_desc", t);
                                                                                let p = a("tr", "settings_desc", "action", t)
                                                                                    , g = a("td", "settings_desc", "action", t + "dt")
                                                                                    , m = a("td", "settings_desc", "action", t + "dd");
                                                                                g.textContent = r.a.getMessage("Action"),
                                                                                    m.textContent = r.a.getMessage("Global_settings_import"),
                                                                                    p.appendChild(g),
                                                                                    p.appendChild(m),
                                                                                    u.appendChild(p),
                                                                                    p = a("tr", "settings_desc", "warning", t),
                                                                                    g = a("td", "settings_desc", "warning", t + "dt"),
                                                                                    m = a("td", "settings_desc", "warning", t + "dd");
                                                                                let h = '<i class="far fa-' + K.get("critical") + '"></i>&nbsp;';
                                                                                W.RUNTIME.MOBILE || (g.innerHTML = h,
                                                                                    h = ""),
                                                                                    m.innerHTML = h + N.safeTagsReplace(r.a.getMessage("This_will_overwrite_your_global_settings_")),
                                                                                    p.appendChild(g),
                                                                                    p.appendChild(m),
                                                                                    u.appendChild(p),
                                                                                    A.appendChild(u),
                                                                                    i.appendChild(A),
                                                                                    s.appendChild(i);
                                                                                const f = a("div", "section", "settings_src");
                                                                                f.appendChild(s),
                                                                                    n.appendChild(f)
                                                                            }
                                                                        )({
                                                                            content: e,
                                                                            checkbox: "import",
                                                                            key: "global_settings"
                                                                        }),
                                                                            t.appendChild(e)
                                                                    }
                                                                    n.scripts && Object.keys(n.scripts).forEach(e=>{
                                                                            const s = n.scripts[e]
                                                                                , o = a("div", "viewer_upper", e);
                                                                            w({
                                                                                content: o,
                                                                                preparat: s,
                                                                                checkbox: "import",
                                                                                key: e
                                                                            }, !0),
                                                                                t.appendChild(o)
                                                                        }
                                                                    )
                                                                }
                                                            )(d(), t.preparat)
                                                        }
                                                        : "permission" == t.type ? s = ()=>{
                                                                ((t,n)=>{
                                                                        const s = a("div", "viewer_last", "ok")
                                                                            , i = a("div", "viewer_content", "ok_content")
                                                                            , l = a("div", "ask_action_buttons", "ok_buttons");
                                                                        b(l, "permission", [{
                                                                            label: r.a.getMessage("Ok"),
                                                                            fn: ()=>{
                                                                                const t = {
                                                                                    permissions: n.permissions,
                                                                                    origins: n.origins
                                                                                };
                                                                                rea.permissions.request(t, n=>{
                                                                                        let s;
                                                                                        rea.runtime.lastError && (s = rea.runtime.lastError.message,
                                                                                            console.warn("notify: error on getting permission", t, "reason:", s)),
                                                                                            ((t,n,s)=>{
                                                                                                    A(e.aid, "permission", {
                                                                                                        data: {
                                                                                                            granted: t,
                                                                                                            permissions: n.permissions,
                                                                                                            origins: n.origins,
                                                                                                            error: s
                                                                                                        }
                                                                                                    })
                                                                                                }
                                                                                            )(n, t, s)
                                                                                    }
                                                                                )
                                                                            }
                                                                            ,
                                                                            focus: !0
                                                                        }, {
                                                                            label: r.a.getMessage("Cancel"),
                                                                            fn: x,
                                                                            keyDown: 27
                                                                        }]),
                                                                            i.appendChild(l),
                                                                            s.appendChild(i);
                                                                        const c = "permission"
                                                                            , d = a("div", "viewer_upper", c)
                                                                            , u = a("div", "viewer_info viewer_info_wide", "general", c)
                                                                            , p = a("div", "viewer_content", "general_content", c)
                                                                            , g = o("h3", "install", "heading", c)
                                                                            , m = o("span", "install", "heading_span", c)
                                                                            , h = a("span", "message", "heading", c);
                                                                        document.title = m.textContent = n.title,
                                                                            h.innerHTML = N.safeTagsReplace(n.message).replace(/\n/g, "<br>"),
                                                                            g.appendChild(m),
                                                                            p.appendChild(h),
                                                                            u.appendChild(g),
                                                                            u.appendChild(p),
                                                                            d.appendChild(u);
                                                                        const f = a("div", "section", "perm_src", c);
                                                                        f.appendChild(d),
                                                                            f.appendChild(s),
                                                                            t.appendChild(f)
                                                                    }
                                                                )(d(), t.preparat)
                                                            }
                                                            : "connect" == t.type && (s = ()=>{
                                                                ((t,n)=>{
                                                                        const s = Date.now();
                                                                        let i, l;
                                                                        n.timeout && (i = window.setTimeout(()=>{
                                                                                x(),
                                                                                    d()
                                                                            }
                                                                            , n.timeout));
                                                                        const c = ()=>$("input[data-btn-id]")[0]
                                                                            , d = ()=>{
                                                                            let e;
                                                                            l && window.clearInterval(l),
                                                                            i && window.clearTimeout(i),
                                                                                l = i = null,
                                                                            (e = c()) && e.parentNode.removeChild(e)
                                                                        }
                                                                            , u = a("div", "viewer_last", "ok")
                                                                            , p = a("div", "viewer_content", "ok_content")
                                                                            , g = a("div", "ask_action_buttons", "ok_buttons")
                                                                            , m = a("div", "ask_action_buttons", "ok_buttons")
                                                                            , h = a("div", "ask_action_buttons", "ok_buttons")
                                                                            , f = "connect";
                                                                        b(g, "connect", [{
                                                                            label: r.a.getMessage("Allow_once"),
                                                                            icon: "button_ok",
                                                                            fn: function() {
                                                                                return A(e.aid, "connect", {
                                                                                    data: {
                                                                                        ok: !0,
                                                                                        allow: !0,
                                                                                        once: !0
                                                                                    }
                                                                                })
                                                                            },
                                                                            focus: !0
                                                                        }, {
                                                                            label: r.a.getMessage("Temporarily_allow"),
                                                                            icon: "clock",
                                                                            fn: function() {
                                                                                return A(e.aid, "connect", {
                                                                                    data: {
                                                                                        ok: !0,
                                                                                        allow: !0,
                                                                                        temporary: !0
                                                                                    }
                                                                                })
                                                                            }
                                                                        }, {
                                                                            label: n.hostname != n.domain ? r.a.getMessage("Always_allow") : r.a.getMessage("Always_allow_domain"),
                                                                            icon: "yes_domain",
                                                                            fn: function() {
                                                                                return A(e.aid, "connect", {
                                                                                    data: {
                                                                                        ok: !0,
                                                                                        allow: !0
                                                                                    }
                                                                                })
                                                                            }
                                                                        }, n.domain && n.hostname != n.domain ? {
                                                                            label: r.a.getMessage("Always_allow_domain"),
                                                                            icon: "yes_domain",
                                                                            fn: function() {
                                                                                return A(e.aid, "connect", {
                                                                                    data: {
                                                                                        ok: !0,
                                                                                        allow: !0,
                                                                                        whole_domain: !0
                                                                                    }
                                                                                })
                                                                            }
                                                                        } : null, n.all_domains ? {
                                                                            label: r.a.getMessage("Always_allow_all_domains"),
                                                                            icon: "critical",
                                                                            fn: function() {
                                                                                if (d(),
                                                                                    window.confirm(r.a.getMessage("This_gives_this_script_the_permission_to_retrieve_and_send_data_from_and_to_every_webpage__This_is_potentially_unsafe__Are_you_sure_you_want_to_continue_")))
                                                                                    return A(e.aid, "connect", {
                                                                                        data: {
                                                                                            ok: !0,
                                                                                            allow: !0,
                                                                                            all_domains: !0
                                                                                        }
                                                                                    })
                                                                            }
                                                                        } : null].filter(e=>e)),
                                                                            b(m, "connect", [{
                                                                                label: r.a.getMessage("Forbid_once"),
                                                                                icon: "cancel",
                                                                                fn: function() {
                                                                                    return A(e.aid, "connect", {
                                                                                        data: {
                                                                                            ok: !0,
                                                                                            deny: !0,
                                                                                            once: !0
                                                                                        }
                                                                                    })
                                                                                },
                                                                                keyDown: 27
                                                                            }, {
                                                                                label: n.hostname != n.domain ? r.a.getMessage("Always_forbid") : r.a.getMessage("Always_forbid_domain"),
                                                                                icon: "no_domain",
                                                                                fn: function() {
                                                                                    return A(e.aid, "connect", {
                                                                                        data: {
                                                                                            ok: !0,
                                                                                            deny: !0
                                                                                        }
                                                                                    })
                                                                                }
                                                                            }, n.domain && n.hostname != n.domain ? {
                                                                                label: r.a.getMessage("Always_forbid_domain"),
                                                                                icon: "no",
                                                                                fn: function() {
                                                                                    return A(e.aid, "connect", {
                                                                                        data: {
                                                                                            ok: !0,
                                                                                            deny: !0,
                                                                                            whole_domain: !0
                                                                                        }
                                                                                    })
                                                                                }
                                                                            } : null, {
                                                                                label: r.a.getMessage("Dont_ask_again"),
                                                                                icon: "no",
                                                                                fn: function() {
                                                                                    return A(e.aid, "connect", {
                                                                                        data: {
                                                                                            ok: !0,
                                                                                            deny: !0,
                                                                                            all_domains: !0
                                                                                        }
                                                                                    })
                                                                                }
                                                                            }].filter(e=>e)),
                                                                            b(h, "connect_misc", [n.tabid ? {
                                                                                label: r.a.getMessage("Focus_tab"),
                                                                                icon: "windowlist",
                                                                                fn: function() {
                                                                                    ((e,t)=>{
                                                                                            try {
                                                                                                sendMessage({
                                                                                                        method: "buttonPress",
                                                                                                        name: "focus_tab",
                                                                                                        ...t
                                                                                                    }, ()=>{}
                                                                                                )
                                                                                            } catch (e) {
                                                                                                console.log("button: " + e.message)
                                                                                            }
                                                                                        }
                                                                                    )(0, {
                                                                                        tabid: n.tabid
                                                                                    })
                                                                                }
                                                                            } : null, (()=>{
                                                                                    if (n.timeout)
                                                                                        return l = window.setInterval(()=>{
                                                                                                let e;
                                                                                                (e = c()) && $(e).attr("value", r.a.getMessage("Skip_timeout__0seconds0_seconds_", Math.round((n.timeout + s - Date.now()) / 1e3)))
                                                                                            }
                                                                                            , 1e3),
                                                                                            {
                                                                                                label: r.a.getMessage("Skip_timeout__0seconds0_seconds_", Math.round(n.timeout / 1e3)),
                                                                                                id: "skip_timeout_button",
                                                                                                fn: d
                                                                                            }
                                                                                }
                                                                            )()].filter(e=>e));
                                                                        const k = a("div", "viewer_upper", f)
                                                                            , _ = a("div", "viewer_info viewer_info_wide", "general", f)
                                                                            , R = a("div", "viewer_content", "general_content", f)
                                                                            , v = o("h3", "install", "heading", f)
                                                                            , w = o("span", "install", "heading_span", f)
                                                                            , y = a("span", "message", "heading", f);
                                                                        if (n.script.icon) {
                                                                            const e = o("img", "version", "heading", f);
                                                                            e.src = n.script.icon,
                                                                                w.appendChild(e)
                                                                        }
                                                                        document.title = w.textContent = r.a.getMessage("A_userscript_wants_to_access_a_cross_origin_resource_");
                                                                        const C = a("div", "ask_action_buttons message", "help", f)
                                                                            , G = o("div", "help", f);
                                                                        let M = r.a.getMessage("A_request_to_a_cross_origin_resource_is_nothing_unusual__You_just_have_to_check_whether_this_script_has_a_good_reason_to_access_this_domain__For_example_there_are_only_a_very_few_reasons_for_a_userscript_to_contact_your_bank__Please_note_that_userscript_authors_can_avoid_this_dialog_by_adding_@connect_tags_to_their_scripts__You_can_change_your_opinion_at_any_time_at_the_scripts_settings_tab_", n.connect_url, n.settings_url);
                                                                        M = N.safeTagsReplace(M).replace(/\[url=([^\]]+)\](.*)\[\/url\]/g, '<a target="_blank" href="$1">$2 &#x2B00;</a>').replace(/\n/g, "<br>"),
                                                                            G.innerHTML = M + "<br><br>",
                                                                            C.appendChild(G),
                                                                            v.appendChild(w),
                                                                            p.appendChild([h, C, g, m]),
                                                                            u.appendChild(p);
                                                                        const E = a("table", "script_desc", f);
                                                                        [{
                                                                            prop: "name",
                                                                            label: r.a.getMessage("Name")
                                                                        }, {
                                                                            prop: "src_url",
                                                                            label: r.a.getMessage("Tab_URL")
                                                                        }, n.domain ? {
                                                                            prop: "hostname",
                                                                            label: r.a.getMessage("Destination_domain")
                                                                        } : null, {
                                                                            prop: "url",
                                                                            label: r.a.getMessage("Destination_URL")
                                                                        }].forEach(e=>{
                                                                                if (!e)
                                                                                    return;
                                                                                const t = n[e.prop] || n.script[e.prop] || e.value
                                                                                    , s = a("tr", "script_desc", e.prop, f)
                                                                                    , o = a("td", "script_desc", e.prop, f + "dt")
                                                                                    , i = a("td", "script_desc", e.prop, f + "dd");
                                                                                o.textContent = e.label ? e.label : "",
                                                                                    i.textContent = t || r.a.getMessage("_not_set_"),
                                                                                    s.appendChild(o),
                                                                                    s.appendChild(i),
                                                                                    E.appendChild(s)
                                                                            }
                                                                        ),
                                                                            y.appendChild(E),
                                                                            R.appendChild(y),
                                                                            _.appendChild(v),
                                                                            _.appendChild(R),
                                                                            k.appendChild(_);
                                                                        const Z = a("div", "section", "connect_src", f);
                                                                        Z.appendChild(k),
                                                                            Z.appendChild(u),
                                                                            t.appendChild(Z)
                                                                    }
                                                                )(d(), t.preparat)
                                                            }
                                                        ),
                                                i = window.setInterval(l, 3e3),
                                            s && window.setTimeout(()=>{
                                                    var e, n;
                                                    s(),
                                                    (e = t.preparat) && (n = e.hints) && n.length && n.forEach(e=>{
                                                            e.globalhint && N.createGobalHint(e.options, $("body > div.status")[0])
                                                        }
                                                    )
                                                }
                                                , 1))
                                        }
                                    ).fail(()=>{
                                            x()
                                        }
                                    ),
                                        u(r.a.getMessage("Please_wait___"))) : x()) : window.onhashchange = ()=>{
                                    M()
                                }
                            }
                        ;
                        rea.extension.onMessage.addListener((e,n,a)=>{
                                if (t = e.options || t,
                                "confirm" == e.method) {
                                    const t = e=>{
                                            a({
                                                confirm: e
                                            })
                                        }
                                    ;
                                    Object(s.cConfirm)(e.msg, t)
                                } else {
                                    if ("showMsg" != e.method)
                                        return !1;
                                    Object(s.cAlert)(e.msg),
                                        a({})
                                }
                                return !0
                            }
                        ),
                            M()
                    }
                )
            }
        ;
        const ne = rea.FEATURES
            , se = U.images;
        let ae = 3;
        if (ne.RUNTIME.MOBILE)
            try {
                window.matchMedia("(orientation: portrait)").matches && (ae = 1)
            } catch (e) {}
        var oe = ()=>{
                h.a.render(()=>{
                        let e, t = {};
                        const n = (A,g)=>{
                            const k = [];
                            if (g.sub_menu_item) {
                                if (g.tabId && (e = g.tabId),
                                    g.items.length) {
                                    const e = a("table", "actiontable at_" + g.id, "actiontable-" + g.id);
                                    if (g.more_menu) {
                                        const t = a("tr", "", g.name, g.id, "mm_outer_tr");
                                        e.appendChild(t);
                                        const n = a("td", "", g.name, g.id, "mm_outer_td1")
                                            , s = a("td", "", g.name, g.id, "mm_outer_td2");
                                        s.setAttribute("colspan", 2),
                                            t.appendChild([n, s]);
                                        const o = a("table", "moremenu", "mmtable-" + g.id);
                                        s.appendChild(o);
                                        const r = a("tr", "moremenu_toggle", g.name, g.id, "tw_tr1");
                                        let A = [r];
                                        const l = a("div", "clickable", g.name, g.id, "mmname");
                                        l.textContent = g.name;
                                        const c = a("td", "", g.name, g.id, "mm_td2");
                                        c.setAttribute("colspan", 2),
                                            r.appendChild(c),
                                            c.appendChild(l);
                                        const d = a("div", "", g.name, g.id, "mmenablercol")
                                            , u = a("i", "ifdisabled clickable far fa-" + se.get("enabler"), g.name, g.id, "mmenabler")
                                            , p = a("i", "ifenabled clickable far fa-" + se.get("enabler_enabled"), g.name, g.id, "mmenabler_enabled")
                                            , m = a("td", "moremenuenabler", g.name, g.id, "tw_td3")
                                            , h = $(m);
                                        let f;
                                        $("body").get(0).addEventListener("click", ()=>{
                                                f ? f = !1 : ($(o).removeClass("show_moremenu"),
                                                    h.removeClass("enabled"))
                                            }
                                            , !1),
                                            t.addEventListener("click", ()=>{
                                                    h.toggleClass("enabled"),
                                                        $(o).toggleClass("show_moremenu"),
                                                        f = !0
                                                }
                                                , !0),
                                            d.appendChild([u, p]),
                                            r.appendChild(m),
                                            m.appendChild(d),
                                            o.appendChild(A),
                                            i(o, g.items)
                                    } else
                                        i(e, g.items);
                                    k.push(e)
                                }
                            } else {
                                let e = null;
                                if (g.image ? e = N.createIcon(se.get(g.image), g.name, g.id, null, "") : g.enabler && (e = N.createIcon(se.get(t.enabled ? "button_ok" : "cancel"), g.name, g.uuid, null, "")),
                                e && k.push(e),
                                g.url || g.urls) {
                                    const e = o("span", g.name, g.id, "urls")
                                        , t = g.urls || [g];
                                    for (let n = 0; n < t.length; n++) {
                                        const s = t[n]
                                            , a = document.createElement("span");
                                        let o;
                                        s.social ? (o = N.createSocialButtons(),
                                            $(a).addClass("social").append(o)) : (a.textContent = s.name,
                                            o = g.urls ? a : A,
                                            o.url = s.url,
                                            o.newtab = s.newtab);
                                        const i = function(e) {
                                            l(this.url || this.href, this.newtab || s.social),
                                                e.preventDefault()
                                        };
                                        if ($(o).addClass("clickable").on("click auxclick", i),
                                            e.appendChild(a),
                                        g.always_visible && $(A).addClass("always_visible"),
                                        n < t.length - 1) {
                                            const t = document.createElement("span");
                                            t.textContent = " | ",
                                                e.appendChild(t)
                                        }
                                    }
                                    k.push(e)
                                } else if (g.globalhint)
                                    d(g.options);
                                else if (g.button) {
                                    const e = function() {
                                        let e = !0;
                                        this.warning && (e = c(this.warning)),
                                        e && p(this.key, {
                                            reload: this.reload,
                                            data: this.data
                                        })
                                    }
                                        , t = a("span", g.display || "", g.name, g.id, "bu", !0);
                                    t.textContent = g.name,
                                        A.key = g.id,
                                        A.warning = g.warning,
                                        A.reload = g.reload,
                                        A.data = g.data,
                                        A.addEventListener("click", e),
                                        $(A).addClass("clickable"),
                                        k.push(t)
                                } else if (g.userscript) {
                                    const e = a("table", "", g.name, g.uuid, "tw")
                                        , t = a("tr", "script", g.name, g.uuid, "tw_tr1");
                                    let n = [t];
                                    const o = a("div", "clickable" + (g.active_count ? "" : " not_executed") + (g.deleted ? " was_deleted" : ""), g.name, g.uuid, "ai");
                                    if (g.uuid) {
                                        const e = [];
                                        let n = null;
                                        n = g.blacklisted || g.foisted ? "enabler_warning" : g.enabled ? g.contexter ? "enabler_enabled enabler_later" : "enabler_enabled" : "enabler_disabled";
                                        const i = g.blacklisted || g.foisted || (g.enabled ? r.a.getMessage("Enabled") : r.a.getMessage("Disabled"))
                                            , c = function(e) {
                                            if (e && (0 != e.button || e.ctrlKey || e.metaKey))
                                                return l(rea.extension.getURL("options.html") + "#nav=" + this.key, !0),
                                                    e.stopPropagation(),
                                                    e.preventDefault(),
                                                    !1;
                                            g.foisted ? f(g.uuid, "whitewash", !0) : f(g.uuid, "enabled", !g.enabled)
                                        }
                                            , d = N.createEnabler(n, g.uuid, "enabled", {
                                            append: "enabled",
                                            disabled: g.blacklisted || g.deleted,
                                            title: i
                                        }, c)
                                            , p = a("td", "", g.name, g.uuid, "tw_td1");
                                        t.appendChild(p),
                                            p.appendChild(d);
                                        const b = a("div", "script_name", g.name, g.uuid, "name");
                                        if (b.textContent = r.a.getTranslation(g, "name"),
                                            o.appendChild(b),
                                            o.uuid = g.uuid,
                                            o.key = g.uuid,
                                        !g.deleted && !g.blacklisted) {
                                            $(o).on("click auxclick", c);
                                            const t = r.a.getMessage("Edit")
                                                , n = N.createIcon(se.get("edit"), "", g.uuid, "edit_script", t)
                                                , s = a("span", "clickable", g.name, g.uuid, "edit_script");
                                            s.setAttribute("title", t),
                                                s.textContent = t,
                                                e.push({
                                                    always_visible: !1,
                                                    id: "edit_script",
                                                    img: n,
                                                    text: s,
                                                    oc: function() {
                                                        l(rea.extension.getURL("options.html") + "#nav=" + g.uuid, !0)
                                                    }
                                                })
                                        }
                                        g.blacklisted || g.foisted ? (A.setAttribute("title", g.blacklisted || g.foisted),
                                            $(o).addClass("crossedout")) : g.active_count ? b.title = r.a.getMessage("This_script_was_executed_0count0_times", g.active_count) : g.all_time_active_count ? b.title = r.a.getMessage("This_script_was_executed_0count0_times_but_is_not_active_anymore", g.all_time_active_count) : b.title = r.a.getMessage("This_script_was_not_executed_yet");
                                        const k = a("td", "", g.name, g.uuid, "tw_td2");
                                        let R;
                                        if (k.appendChild(o),
                                        !g.nnew && !g.system && g.abuse) {
                                            const t = N.createIcon(se.get("flag"), "", g.uuid, "issue", r.a.getMessage("Report_an_issue_to_the_script_hoster_"))
                                                , n = a("span", "clickable", g.name, g.uuid, "action_issue_expl");
                                            n.textContent = r.a.getMessage("Report_an_issue_to_the_script_hoster_").split(/[\.\(]+/)[0],
                                                e.push({
                                                    always_visible: !1,
                                                    id: "action_issue_expl",
                                                    img: t,
                                                    text: n,
                                                    oc: function() {
                                                        u(g.uuid, "hoster")
                                                    }
                                                })
                                        }
                                        if (!g.nnew && !g.system && g.support) {
                                            const t = N.createIcon(se.get("bug"), "", g.uuid, "bug", r.a.getMessage("Report_a_bug"))
                                                , n = a("span", "clickable", g.name, g.uuid, "action_issue_expl");
                                            n.textContent = r.a.getMessage("Report_a_bug"),
                                                e.push({
                                                    always_visible: !1,
                                                    id: "action_issue_expl",
                                                    img: t,
                                                    text: n,
                                                    oc: function() {
                                                        u(g.uuid, "author")
                                                    }
                                                })
                                        }
                                        const v = {};
                                        if (g.active_urls && g.active_urls.forEach(t=>{
                                                const n = _.default.parse(t).hostname;
                                                if (v[n])
                                                    return;
                                                v[n] = !0;
                                                const s = "/" + _.default.getRegExpFromMatch("*://*." + n + "/*", !0) + "/";
                                                if (g.override && g.override.use_excludes.includes(s))
                                                    return;
                                                const o = r.a.getMessage("Exclude_0domain0", n)
                                                    , i = N.createIcon(se.get("no"), "", g.uuid, "domain" + t, o)
                                                    , A = a("span", "clickable", g.name, g.uuid, "action_domain");
                                                A.setAttribute("title", o),
                                                    A.textContent = o,
                                                    e.push({
                                                        always_visible: !1,
                                                        id: "action_domain",
                                                        img: i,
                                                        text: A,
                                                        oc: function() {
                                                            f(g.uuid, "add_excludes", [s])
                                                        }
                                                    })
                                            }
                                        ),
                                            g.menu_cmds) {
                                            let t;
                                            try {
                                                t = new RegExp("^" + Object(s.escapeForRegExp)(g.name) + "[ -:+/]*")
                                            } catch (e) {
                                                console.log(e)
                                            }
                                            g.menu_cmds.forEach(n=>{
                                                    const s = a("span", "clickable", g.name, g.uuid, "menucmd_" + g.id);
                                                    s.setAttribute("title", g.name);
                                                    const o = t ? n.name.replace(t, "") : n.name;
                                                    s.textContent = o;
                                                    const i = ()=>{
                                                            h(n.id, ()=>{
                                                                    ne.ACTIONMENU.CLOSE_ALLOWED && window.close()
                                                                }
                                                            )
                                                        }
                                                    ;
                                                    if (n.accessKey) {
                                                        const e = n.accessKey[0].toUpperCase();
                                                        if (m(e, i, A)) {
                                                            const t = new RegExp(e,"i");
                                                            let o = s.textContent.search(t);
                                                            const i = [];
                                                            -1 == o && (s.textContent += " (" + e + ")",
                                                                o = s.textContent.search(t)),
                                                                i.push({
                                                                    text: s.textContent.substr(0, o)
                                                                }),
                                                                i.push({
                                                                    text: s.textContent.substr(o, 1),
                                                                    class: "underlined"
                                                                }),
                                                                i.push({
                                                                    text: s.textContent.substr(o + 1)
                                                                }),
                                                                s.textContent = "",
                                                                i.forEach(e=>{
                                                                        const t = a("span", e.class || "", n.id, e);
                                                                        t.textContent = e.text,
                                                                            s.appendChild(t)
                                                                    }
                                                                )
                                                        } else
                                                            console.warn("Registering keyboard shortcut for '" + n.name + "' failed")
                                                    }
                                                    e.push({
                                                        always_visible: !0,
                                                        id: g.id,
                                                        img: N.createIcon(se.get(n.image), o, n.id, null, ""),
                                                        text: s,
                                                        oc: i
                                                    })
                                                }
                                            )
                                        }
                                        if (g.deleted || !e.length)
                                            t.appendChild(k);
                                        else {
                                            const n = a("td", "", g.name, g.uuid, "mma_outer_td2");
                                            n.setAttribute("colspan", 2);
                                            const s = a("table", "moremenu", "mmatable-" + g.uuid);
                                            n.appendChild(s),
                                                t.appendChild(n);
                                            const o = a("tr", "moremenu_toggle", g.name, g.uuid, "mma_n_tr");
                                            o.appendChild(k),
                                                s.appendChild(o),
                                                e.forEach(e=>{
                                                        const t = g.uuid + e.id
                                                            , n = a("tr", e.always_visible ? " always_visible" : "", g.name, g.uuid, "tw_tr1")
                                                            , o = a("td", "clickable", t, "tw_tdn", 2, !0);
                                                        o.setAttribute("colspan", "2"),
                                                            o.addEventListener("click", e.oc),
                                                            o.appendChild([e.img, e.text]),
                                                            n.appendChild(o),
                                                            s.appendChild(n)
                                                    }
                                                ),
                                                R = a("div", "", g.name, g.uuid, "moremenuenabler");
                                            const i = a("i", "ifdisabled clickable far fa-" + se.get("enabler"), g.name, g.uuid, "moremenuenabler")
                                                , r = a("i", "ifenabled clickable far fa-" + se.get("enabler_enabled"), g.name, g.uuid, "moremenuenabler_enabled")
                                                , A = a("td", "moremenuenabler", g.name, g.uuid, "tw_td3")
                                                , l = $(A);
                                            let c;
                                            $("body").get(0).addEventListener("click", ()=>{
                                                    c ? c = !1 : ($(s).removeClass("show_moremenu"),
                                                        l.removeClass("enabled"))
                                                }
                                                , !1),
                                                R.addEventListener("click", ()=>{
                                                        l.toggleClass("enabled"),
                                                            $(s).toggleClass("show_moremenu"),
                                                            c = !0
                                                    }
                                                    , !0),
                                                R.appendChild([i, r]),
                                                o.appendChild(A),
                                                A.appendChild(R)
                                        }
                                    }
                                    e.appendChild(n),
                                        k.push(e)
                                } else if (g.referrer) {
                                    const t = a("span", g.class || "", g.referrer, g.id, "ref", !0);
                                    t.textContent = g.name,
                                        $(A).addClass("pleasewait"),
                                        k.push(t),
                                        b(Object(s.copy)(g.data, {
                                                referrer: g.referrer
                                            }), s=>{
                                                $(A).removeClass("pleasewait");
                                                const [a,o] = n(A, s.items[0]);
                                                let i, r;
                                                o ? (i = a,
                                                    r = o) : r = a,
                                                i && e.parentNode.replaceChild(i, e),
                                                    t.parentNode.replaceChild(r, t)
                                            }
                                        )
                                } else {
                                    const e = a("span", g.class || "", g.name, g.id, "ai");
                                    e.textContent = g.name,
                                        k.push(e)
                                }
                            }
                            return k
                        }
                            , i = (e,t,s)=>{
                            Object.keys(t).forEach(a=>{
                                    const i = t[a];
                                    if (!e) {
                                        if (!s[i.pos])
                                            return void console.warn("Warn(cAm): unknown pos " + i.pos);
                                        i.items && i.items.length && $(s[i.pos]).show()
                                    }
                                    const r = e || s[i.pos]
                                        , A = r ? o("tr", i.name, i.uuid || i.id, "outer") : null
                                        , l = n(A, i);
                                    if (l && l.length) {
                                        r.appendChild(A);
                                        for (let e, t = 0; e = l[t]; t++) {
                                            const n = t == l.length - 1 ? 3 - t : 0
                                                , s = o("td", "actiontd", i.name, i.uuid || i.id, t);
                                            n > 0 && s.setAttribute("colspan", n),
                                            e && s.appendChild(e),
                                                A.appendChild(s)
                                        }
                                    }
                                }
                            )
                        }
                            , A = e=>{
                            let n;
                            (n = document.getElementById("action")) ? n.innerHTML = "" : (n = o("div"),
                                n.setAttribute("id", "action"),
                                n.setAttribute("class", "action"),
                                $(document.body).append(n, status));
                            const s = a("table", "actionlayout", "actionlayout");
                            n.appendChild(s);
                            const r = a("tr", "actionpostr", "hor")
                                , A = a("td", "actionpostd", "hor_west");
                            let l;
                            r.appendChild(A),
                                s.appendChild(r);
                            const c = a("table", "actionregion noborder ar_top", "top")
                                , d = a("table", "actionregion noborder ar_right", "right");
                            let u;
                            const p = a("table", "actionregion noborder ar_left", "left")
                                , g = a("table", "actionregion noborder ar_bottom", "bottom");
                            if (Math.min(t.action_menu_columns, ae) > 2) {
                                u = a("table", "actionregion noborder ar_center", "center");
                                const e = a("td", "actionpostd", "hor_center");
                                l = a("td", "actionpostd", "hor_east"),
                                    e.appendChild(u),
                                    r.appendChild(e),
                                    r.appendChild(l)
                            } else
                                Math.min(t.action_menu_columns, ae) > 1 ? (u = d,
                                    l = a("td", "actionpostd", "hor_east"),
                                    r.appendChild(l)) : (u = p,
                                    l = A);
                            $([u, d]).hide(),
                                A.appendChild(c),
                                l.appendChild(d),
                                A.appendChild(p),
                                A.appendChild(g),
                                i(null, e, {
                                    top: c,
                                    left: p,
                                    center: u,
                                    right: d,
                                    bottom: g
                                })
                        }
                            , l = (e,t)=>{
                            try {
                                const n = ()=>{
                                        t && ne.ACTIONMENU.CLOSE_ALLOWED && window.close()
                                    }
                                ;
                                t ? sendMessage({
                                    method: "newTab",
                                    url: e
                                }, n) : rea.tabs.getSelected(null, s=>{
                                        rea.tabs.sendMessage(s.id, {
                                            method: "loadUrl",
                                            url: e,
                                            newtab: t
                                        }, n)
                                    }
                                )
                            } catch (e) {
                                console.warn("lU:", e)
                            }
                        }
                            , c = e=>{
                            let t = confirm(e.msg)
                                , n = {};
                            return t && e.ok ? n = e.ok : !t && e.cancel && (n = e.cancel),
                            (e.ok || e.cancel) && (t = !0),
                            n.url && sendMessage({
                                method: "newTab",
                                url: n.url
                            }, ()=>null),
                                t
                        }
                            , d = e=>{
                            let t;
                            const n = e.key || "general";
                            (t = R[n]) && $(t).remove(),
                                R[n] = N.createGobalHint(Object(s.copy)(e, {
                                    instant: !0
                                }), document.getElementById("action"))
                        }
                            , u = (e,t,n)=>{
                            try {
                                sendMessage({
                                        method: "reportAnIssue",
                                        uuid: e,
                                        to: t
                                    }, ()=>{
                                        n && n()
                                    }
                                )
                            } catch (e) {
                                console.warn("raI:", e)
                            }
                        }
                            , p = (e,t)=>{
                            try {
                                sendMessage({
                                        method: "buttonPress",
                                        name: e,
                                        data: t.data
                                    }, ()=>{
                                        t.reload && rea.page.reload()
                                    }
                                )
                            } catch (e) {
                                console.warn("rSU:", e)
                            }
                        }
                            , g = {}
                            , m = (e,t,n)=>{
                            const s = e.charCodeAt(0);
                            return g[s] ? (console.log("MenuCmdKeyListener: ...failed!"),
                                !1) : (g[s] = {
                                key: s,
                                cb: t,
                                elem: n
                            },
                                !0)
                        }
                            , h = (e,t)=>{
                            try {
                                sendMessage({
                                        method: "execMenuCmd",
                                        id: e
                                    }, ()=>{
                                        t && t()
                                    }
                                )
                            } catch (e) {
                                console.warn("Error(eMC):", e)
                            }
                        }
                            , f = (e,n,s)=>{
                            try {
                                const a = {
                                    method: "modifyScriptOptions",
                                    uuid: e
                                };
                                n && "" != n && (a[n] = s),
                                    sendMessage(a, e=>{
                                            document.getElementById("action").innerHTML = "",
                                            e && e.items && (e.options && (t = {
                                                ...t,
                                                ...e.options
                                            }),
                                                A(e.items))
                                        }
                                    )
                            } catch (e) {
                                console.warn("Error(mSo): " + e.message)
                            }
                        }
                            , b = (e,n)=>{
                            const s = Date.now()
                                , a = e.referrer
                                , o = e.min_delay
                                , i = e.layout;
                            sendMessage({
                                    method: "loadTree",
                                    referrer: a,
                                    layout: i,
                                    url: e.url,
                                    available_columns: ae,
                                    uuid: e.uuid,
                                    tabId: e.tabId
                                }, e=>{
                                    e.options && (t = {
                                        ...t,
                                        ...e.options
                                    },
                                    t.statistics_enabled && k.a.init("act", !0, {
                                        trackView: !1,
                                        version: rea.extension.manifest.version
                                    }));
                                    const a = Date.now() - s
                                        , i = ()=>{
                                            n(e)
                                        }
                                    ;
                                    !o || a >= o ? i() : window.setTimeout(i, o - a)
                                }
                            )
                        }
                            , R = {};
                        rea.extension.onMessage.addListener((e,t,n)=>{
                                "update" == e.method ? v() : "status" == e.method ? (d(e.options),
                                    n({})) : console.log('onMessage: Unknown method "' + e.method + '"')
                            }
                        );
                        const v = window.main = ()=>{
                                b({
                                        referrer: "actions",
                                        min_delay: ne.ACTIONMENU.MIN_DELAY,
                                        layout: !0,
                                        tabId: e
                                    }, e=>{
                                        if (e.options && e.options.layout_user_css) {
                                            const t = document.createElement("style");
                                            t.innerHTML = e.options.layout_user_css,
                                                (document.head || document.body || document.documentElement || document).appendChild(t)
                                        }
                                        document.body.addEventListener("keydown", e=>{
                                                e.altKey || e.ctrlKey || e.shiftKey || Object.keys(g).forEach(t=>{
                                                        const n = g[t];
                                                        n && e.keyCode == n.key && n.cb.apply(n.elem || window, [])
                                                    }
                                                )
                                            }
                                            , !1),
                                            A(e.items)
                                    }
                                )
                            }
                        ;
                        v()
                    }
                )
            }
        ;
        r.a.init(),
        "serviceWorker"in navigator && ["/options.html"].forEach(e=>{
                navigator.serviceWorker.register("cache.js", {
                    scope: e
                }).then((function(t) {
                        console.debug(`SQ: registration succ'ed for ${e} scope -> ${t.scope}`)
                    }
                )).catch((function(t) {
                        console.log(`SQ: registration for ${e} failed -> ${t}`)
                    }
                ))
            }
        ),
            0 === window.location.pathname.indexOf("/action") ? (()=>{
                    window.sendMessage = (e,t)=>{
                        e.origin = "action";
                        const s = e=>{
                                n(),
                                    t(e)
                            }
                        ;
                        rea.extension.sendMessage(e, e=>{
                                if (e && e.i18n)
                                    return r.a.setLocale(e.i18n).always(()=>s(e));
                                s(e)
                            }
                        )
                    }
                    ;
                    let e = null
                        , t = null;
                    const n = ()=>{
                            e && (window.clearTimeout(e),
                                e = null),
                            t && (t.remove(),
                                t = null)
                        }
                    ;
                    e = window.setTimeout(()=>{
                            t = $('<div id="initialWait" class="lds-css ng-scope"><div class="lds-dual-ring"><div></div><div></div></div></div>'),
                                $("body").append(t)
                        }
                        , 200),
                        h.a.init({
                            suc: ()=>{
                                oe()
                            }
                            ,
                            fail: ()=>{
                                n(),
                                confirm(r.a.getMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_")) && window.open("https://www.tampermonkey.net/bug")
                            }
                        })
                }
            )() : 0 === window.location.pathname.indexOf("/options") ? (window.sendMessage = (e,t)=>{
                e.origin = "options",
                    rea.extension.sendMessage(e, e=>{
                            if (e && e.i18n)
                                return r.a.setLocale(e.i18n).always(()=>{
                                        t(e)
                                    }
                                );
                            t(e)
                        }
                    )
            }
                ,
                u(r.a.getMessage("Please_wait___")),
                h.a.init({
                    suc: ()=>{
                        p(),
                            q()
                    }
                    ,
                    fail: ()=>{
                        window.confirm(r.a.getOriginalMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_")) && (window.location.href = "https://www.tampermonkey.net/bug")
                    }
                }),
                document.title = "...") : 0 === window.location.pathname.indexOf("/ask") ? (window.sendMessage = (e,t)=>{
                e.origin = "extension",
                    rea.extension.sendMessage(e, e=>{
                            if (e && e.i18n)
                                return r.a.setLocale(e.i18n).always(()=>{
                                        t(e)
                                    }
                                );
                            t(e)
                        }
                    )
            }
                ,
                h.a.init({
                    suc: ()=>{
                        u(r.a.getMessage("Please_wait___")),
                            te()
                    }
                    ,
                    fail: ()=>{
                        window.confirm(r.a.getOriginalMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_")) && (window.location.href = "https://www.tampermonkey.net/bug")
                    }
                }),
                document.title = "...") : 0 === window.location.pathname.indexOf("/userscript") && (()=>{
                    const e = Object(s.getUrlArgs)(!0);
                    e.id && (window.location.href = rea.extension.getURL("options.html") + "#nav=" + e.id + "+editor")
                }
            )()
    }
]);
//# sourceMappingURL=http://localhost:8000/sourcemaps/extension.js.map
