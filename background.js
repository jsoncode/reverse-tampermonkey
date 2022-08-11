!function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var s = n[r] = { i: r, l: !1, exports: {} };
        return e[r].call(s.exports, s, s.exports, t), s.l = !0, s.exports
    }

    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e
            ;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var s in e) t.d(r, s, function (t) {
            return e[t]
        }.bind(null, s));
        return r
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return {}.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 54)
}([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(3), s = n(12), o = window.rea, a = "en";
    let i = {}, A = {}, l = null;
    const c = [], u = (e, ...t) => {
            const n = [], r = e => {
                for (let t = 0; t < e.length; t++) Array.isArray(e[t]) ? r(e[t]) : n.push(String(e[t]))
            };
            return r(t), o.i18n.getMessage(e, n)
        }, d = e => new Promise((t, n) => {
            const r = `_locales/${e}/messages.json`;
            s.getRaw(r, r => {
                try {
                    if (r) return t(JSON.parse(r))
                } catch (t) {
                    console.log("i18n: parsing locale " + e + " failed!")
                }
                n()
            })
        }), p = async e => {
            e = e.concat(a);
            let t = -1, n = null;
            const r = async () => {
                if (t++, t < e.length) {
                    const s = e[t]
                    ;
                    if (!s || !h.includes(s)) return r();
                    try {
                        const e = await d(s);
                        n = s, i = e
                    } catch (e) {
                        return r()
                    }
                    if (!R && s != a) try {
                        const e = await d(a);
                        A = e || {}
                    } catch (e) {
                    }
                }
            };
            return await r(), n
        }, f = e => e ? e.replace(/-/g, "_").split("_").map((e, t) => t ? e.toUpperCase() : e.toLowerCase()).join("_") : e,
        m = (e, t) => {
            let n, s;
            return t = t || (l ? [l, l.split("_")[0]].concat(c).filter(e => e) : c), r.each(t, (t, o) => {
                const a = Number(o);
                if (r.each(e, (e, r) => {
                    const o = Number(r), i = f(e), A = i.split(/_/)[0];
                    if (i == t) return s = o, !1;
                    A == t && (void 0 === n || a < n) && (s = o, n = a)
                }),
                void 0 !== s) return !1
            }), void 0 === s ? s : e[s]
        }, g = [{ name: "Arabic - ‎‫العربية‬‎", value: "ar" }, {
            name: "Chinese (Simplified) - 中文（简体中文）",
            value: "zh_CN"
        }, { name: "Chinese (Traditional) - 中文（繁體）", value: "zh_TW" }, {
            name: "Croatian - hrvatski",
            value: "hr"
        }, { name: "Czech - čeština", value: "cs" }, { name: "Danish - dansk", value: "da" }, {
            name: "English",
            value: "en"
        }, { name: "French - français", value: "fr" }, { name: "German - Deutsch", value: "de" }, {
            name: "Hindi - हिन्दी",
            value: "hi"
        }, { name: "Hungarian - magyar", value: "hu" }, {
            name: "Indonesian - Indonesia", value: "id"
        }, { name: "Italian - italiano", value: "it" }, { name: "Japanese - 日本語", value: "ja" }, {
            name: "Korean - 한국어",
            value: "ko"
        }, { name: "Norwegian - norsk", value: "nb" }, {
            name: "Polish - polski",
            value: "pl"
        }, {
            name: "Portuguese (Brazil) - português (Brasil)",
            value: "pt_BR"
        }, { name: "Portuguese (Portugal) - português (Portugal)", value: "pt_PT" }, {
            name: "Russian - русский",
            value: "ru"
        }, { name: "Serbian - српски", value: "sr" }, { name: "Slovak - slovenčina", value: "sk" }, {
            name: "Spanish - español",
            value: "es"
        }, { name: "Turkish - Türkçe", value: "tr" }, {
            name: "Ukrainian - українська",
            value: "uk"
        }, { name: "Vietnamese - Tiếng Việt", value: "vi" }], h = g.map(e => e.value),
        R = !(void 0 === o) && o.i18n.native_support, v = {
            init: async () => {
                const e = async () => {
                    l || R || (l = await p(c))
                }, t = f(R ? o.i18n.getUILanguage() : navigator.language);
                if (t) {
                    const e = [t], n = t.split(/_/);
                    n[0] !== t && e.push(n[0]), e.forEach(e => {
                        c.unshift(e)
                    })
                }
                await e(), R && (await new Promise(e => {
                    o.i18n.getAcceptLanguages(t => {
                        t.forEach(e => {
                            c.push(f(e))
                        }), e()
                    })
                }),
                    await e())
            },
            getMessage: (e, ...t) => {
                let n;
                return l && (n = i[e] || A[e]) ? ((e, t) => {
                    let n = e.message;
                    return 1 == t.length && Array.isArray(t[0]) && (t = t[0]), e.placeholders && Object.entries(e.placeholders).forEach(([e, r]) => {
                        try {
                            const s = Number(r.content.replace(/^\$/, "")) - 1;
                            let o;
                            s < t.length ? (o = t[s], n = n.replace("$" + e + "$", o)) : console.log('i18n: invalid argument count on processing "' + n + '" with args ' + JSON.stringify(t))
                        } catch (e) {
                            console.log('i18n: error processing "' + n + '" with args ' + JSON.stringify(t))
                        }
                    }), n
                })(n, t) : (R && (n = u(e, ...t)) || (n = function (e, ...t) {
                    let n = e;
                    1 == t.length && Array.isArray(t[0]) && (t = t[0]);
                    const r = new RegExp("(^|_)0[a-zA-Z]+0(_|$)");
                    for (let e = 0; e < t.length; e++) {
                        const s = n.match(r);
                        if (!s) {
                            console.log("i18n: getMessage(): wrong argument count!!!");
                            break
                        }
                        n = n.replace(r, (s[1] ? " " : "") + t[e] + (s[2] ? " " : ""))
                    }
                    return n.replace(/_/g, " ")
                }(e, ...t), console.warn("i18n: missing translation" + n)), n)
            },
            getOriginalMessage: u,
            normalizeLocale: f,
            getTranslation: (e, t) => {
                let n, r;
                if (e && (r = e[t + "_i18n"] || {})) {
                    e[t] && (r = { ...r, en: e[t] });
                    const s = m(Object.keys(r));
                    void 0 !== s && (n = r[s])
                }
                return n || e[t]
            },
            setLocale: async e => {
                let t = e;
                if ("null" === e && (t = null), t && (t = f(t)), !t && R) l = t; else if (t !== l) return p([t, ...c, l].filter(e => e)).then(t => {
                    l = t, l != e && console.log("i18n: retrieving locale " + t + " failed!")
                })
            },
            getLocale: () => l,
            getUiLocale: () => f(l || R ? o.i18n.getUILanguage() : c[0] || navigator.language || a),
            getBestLocale: m,
            supported: g
        };
    t.default = v
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
        t.Deferred = void 0;
    const n = e => {
        const t = (() => {
            let e, t;
            const r = [], s = [], o = e => {
                s.push(e), a()
            }, a = () => {
                if (void 0 !== e) {
                    let n;
                    for (; s.length;) n = s.shift(), void 0 !== n.state && n.state !== e || (t = ("function" == typeof n.f ? n.f.call(i, t) : n.f) || t)
                }
            }, i = {
                promise: () => i,
                done: e => (o({ state: !0, f: e }), i),
                fail: e => (o({ state: !1, f: e }), i),
                always: e => (o({ f: e }), i),
                progress: e => (r.push(e), i),
                then: (e, r, s) => n(n => {
                    [{ fn: "done", forward: "resolve", f: e }, {
                        fn: "fail",
                        forward: "reject",
                        f: r
                    }, { fn: "progress", forward: "notify", f: s }].forEach(e => {
                        i[e.fn]((...r) => {
                            const s = e.f ? e.f(t) : void 0;
                            if (s && "function" == typeof s.promise) s.promise().done(n.resolve).fail(n.reject).progress(n.notify); else {
                                const t = e.f ? [s] : r;
                                n[e.forward](...t)
                            }
                        })
                    })
                }).promise(),
                each: e => {
                    const t = n();
                    return i.then(r => {
                        const s = Array.isArray(r) ? r : [r];
                        n.when(s.map(t => e(t))).then(t.resolve)
                    }), t.promise()
                },
                iterate: e => {
                    const t = n();
                    return i.then(r => {
                        const s = (Array.isArray(r) ? r : [r]).map(t => () => e(t));
                        n.onebyone(s, !0).done(e => {
                            t.resolve(e)
                        }).fail(t.reject)
                    }), t.promise()
                }
            };
            return {
                get: () => i, try_resolve: n => (void 0 === e && (e = !0, t = n), a(), i), try_reject: function (n) {
                    return void 0 === e && (e = !1, t = n), a(), i
                }, do_notify: function (e) {
                    (e => {
                        r.forEach(t => t(e))
                    })(e)
                }
            }
        })(), r = {
            promise: function () {
                return t.get()
            }, resolve: function (e) {
                return t.try_resolve(e)
            }, reject: function (e) {
                return t.try_reject(e)
            }, notify: function (e) {
                return t.do_notify(e)
            }, consume: function (e) {
                return e.promise().done(r.resolve).fail(r.reject).progress(r.notify), r.promise()
            }
        };
        return e && e(r), r
    };
    t.Deferred = n, n.Pledge = e => {
        const t = n()
        ;
        return t.resolve(e), t.promise()
    }, n.Breach = e => {
        const t = n();
        return t.reject(e), t.promise()
    }, n.onebyone = (e, t = !0) => {
        const r = [], s = n();
        let o = 0;
        const a = () => {
            if (o < e.length) {
                const n = (0, e[o++])();
                n && n.promise ? n.promise().done(e => {
                    r.push(e), a()
                }).fail(() => {
                    if (r.push(null), t) return s.reject();
                    a()
                }) : (r.push(n), a())
            } else s.resolve(r)
        };
        return a(), s.promise()
    }, n.or = e => {
        let t;
        const r = n(), s = () => {
            e.length ? (t = e.shift(), t && n.Pledge().then(t).done(e => {
                r.resolve(e)
            }).fail(s)) : r.reject()
        };
        return s(), r.promise()
    },
        n.sidebyside = e => {
            e = Array.isArray(e) ? e : [e];
            const t = n();
            let r = e.length;
            return r ? e.forEach(e => {
                e && e.promise && e.promise().always(() => {
                    0 == --r && t.resolve()
                })
            }) : t.resolve(), t.promise()
        }, n.when = e => {
        e = Array.isArray(e) ? e : [e];
        const t = n();
        let r = e.length;
        const s = [];
        return r ? e.forEach(e => {
            e && e.promise ? e.promise().fail(e => {
                t.reject(e), r = -1
            }).done(e => {
                s.push(e), 0 == --r && t.resolve(s)
            }) : console.warn("promise: incompatible object given to when()", e)
        }) : t.resolve(s), t.promise()
    }, n.sleep = e => {
        const t = n()
        ;
        return window.setTimeout(t.resolve, e), t.promise()
    }
}, function (e, t) {
    "use strict";
    let n = 0;
    const r = [], s = () => {
        const e = ["debug"], t = ["log"], r = ["warn", "info"], s = ["error"], a = [...e, ...t, ...r, ...s];
        let i = s;
        n >= 80 && i.push(...e), n >= 60 && i.push(...t), n >= 60 && i.push(...t), n >= 30 && i.push(...r), a.forEach(e => o[e] = i.includes(e) ? console[e].bind(console) : () => {
        })
    }, o = {
        set: e => {
            n = e, r.forEach(e => {
                e(o, n)
            }), s()
        }, get: () => n, verbose: (console.debug || (() => {
        })).bind(console), addChangeListener: e => {
            r.push(e)
        }
    };
    s(), t.a = o
}, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : { default: e }
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.staticVars = t.safeFileName = t.encodeHtml = t.decodeHtml = t.createUUID = t.getDebouncer = t.adiff = t.copy = t.sleep = t.insert = t.each = t.splitSlice = t.toType = t.filterString = t.cPrompt = t.cConfirm = t.cAlert = t.getSource = t.getUrlArgs = t.isLocalImage = t.escapeForRegExp = t.escapeForRegExpURL = t.getStringBetweenTags = t.createUniqueId = void 0
    ;const s = r(n(5)), o = window.rea;
    t.createUniqueId = (e, t) => s.default.Base64.encode(e + "_" + t).replace(/[^0-9a-zA-Z_\-]/g, ""), t.getStringBetweenTags = (e, t, n) => {
        const r = e.indexOf(t);
        if (-1 == r) return "";
        if (!n) return e.substr(r + t.length);
        const s = e.substr(r + t.length).indexOf(n);
        return -1 == s ? "" : e.substr(r + t.length, s)
    };
    const a = (e, t) => {
        null == t && (t = []);
        const n = new RegExp("(\\" + ["/", ".", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].concat(t).join("|\\") + ")", "g");
        return e.replace(n, "\\$1")
    };
    t.escapeForRegExpURL = a,
        t.escapeForRegExp = e => a(e, ["*"]), t.isLocalImage = e => {
        const t = "background.js";
        let n = o.extension.getURL(t);
        return n = n.replace(t, "") + "images/", e.length >= n.length && n == e.substr(0, n.length)
    }, t.getUrlArgs = e => {
        const t = {};
        let n = window.location.search.replace(/^\?/, "");
        const r = window.location.hash.replace(/^#/, "");
        n ? e && r && (n = n + "&" + r) : n = r;
        const s = n.split("&");
        let o;
        for (let e = 0; e < s.length; e++) {
            if (o = s[e].split("="), 2 != o.length) {
                const e = o[0], t = o.slice(1).join("=");
                o = [e, t]
            }
            t[o[0]] = decodeURIComponent(o[1])
        }
        return t
    }, t.cAlert = e => {
        window.setTimeout(() => {
            alert(e)
        }, 1)
    }, t.cConfirm = (e, t) => {
        window.setTimeout(() => {
            const n = confirm(e);
            t && t(n)
        }, 1)
    }, t.cPrompt = (e, t, n) => {
        window.setTimeout(() => {
            const r = prompt(e, t);
            n && n(r)
        }, 1)
    };
    const i = e => (({}.toString.apply(e).match(/\s([a-z|A-Z]+)/) || [])[1]);
    t.toType = i;
    const A = (e, t) => {
        const n = i(e);
        if ("Array" === n || "NodeList" === n) {
            for (let n = 0; n < e.length; n++) if (!1 === t(e[n], n)) return
        } else if ("XPathResult" === n) {
            let n = e.iterateNext(), r = 0;
            for (; n;) {
                if (!1 === t(n, r++)) return
                    ;
                n = e.iterateNext()
            }
        } else for (const n in e) if (e.hasOwnProperty(n) && !1 === t(e[n], n)) return
    };
    t.each = A, t.insert = (e, t, n, r) => e.slice(0, t) + r + e.slice(t + Math.abs(n));
    const l = (e, t, n, r) => {
        if (Array.isArray(n)) {
            const e = {};
            n.forEach(t => {
                e[t] = !0
            }), n = e
        }
        return A(n || e, (s, o) => {
            if (!n || n.hasOwnProperty(o)) {
                let s;
                const a = e[o], A = i(a);
                if ("Undefined" == A) return;
                if (n && r && (s = i(n[o])) && s !== A && ("Array" === s || "Object" === s)) return;
                "Object" == A ? (t[o] = {}, l(a, t[o], n ? n[o] : null)) : "Array" == A ? (t[o] = [], l(a, t[o])) : t[o] = a
            }
        }), t
    };
    t.copy = l,
        t.decodeHtml = e => e.replace(/(?:&#x([a-fA-F0-9]+);|&#([0-9]+);)/g, (e, t, n) => t ? String.fromCharCode(parseInt(t, 16)) : String.fromCharCode(parseInt(n, 10))), t.encodeHtml = e => e.replace(/[\u00A0-\u2666<>]/g, e => "&#" + e.charCodeAt(0) + ";");
    const c = e => document.body ? document.body.innerText : e.childNodes.length > 0 ? c(e.childNodes[e.childNodes.length - 1]) : e.innerText;
    t.getSource = c, t.getDebouncer = e => (() => {
        let t = {};
        const n = e || 1e3, r = {
            clear: () => {
                A(t, e => window.clearTimeout(e)), t = {}
            }, is: (e, n) => {
                const s = void 0 !== t[e]
                ;
                return n && r.add(e), s
            }, add: (e, s) => {
                r.is(e) && window.clearTimeout(t[e]), t[e] = window.setTimeout(() => {
                    delete t[e]
                }, s || n)
            }
        };
        return r
    })(), t.sleep = e => {
        const t = Date.now();
        let n;
        for (; Date.now() - t < e;) for (let e = 0; e < 100; e++) n += 1
    }, t.filterString = (e, t) => e && t ? (e.match(t) || []).join("") : "", t.adiff = (e, t, n) => {
        const r = [];
        return "both" == (n = n || "both") ? e.concat(t).forEach(n => {
            e.includes(n) && t.includes(n) || r.push(n)
        }) : "notinfirst" == n && t.forEach(t => {
            e.includes(t) || r.push(t)
        }), r
    }, t.safeFileName = (e, t, n) => {
        void 0 === n && (n = "-");
        const r = t ? /[:<>|~?*\x00-\x1F\uFDD0-\uFDEF"]/g : /[:<>|~?*\x00-\x1F\uFDD0-\uFDEF"\/\\]|^[.]|[.]$/g;
        return !t && /^((CON|PRN|AUX|NUL|CLOCK\$|COM[1-9]|LPT[1-9])(\..*)?|device(\..*)?|desktop.ini|thumbs.db)$/i.test(e) ? (n || "_") + e.replace(r, n) : e.replace(r, n)
    }, t.createUUID = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
        const t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16)
    }), t.splitSlice = (e, t) => {
        const n = [];
        for (let r = 0, s = e.length; r < s; r += t) n.push(e.slice(r, t + r))
        ;
        return n
    };
    t.staticVars = {
        visible: void 0,
        invisible: "display: none;",
        visible_move: void 0,
        invisible_move: "position:absolute; left: -20000px; top: -200000px; width: 1px; height: 1px;"
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(2), s = n(8), o = n(3)
    ;const a = "de.net|gb.net|uk.net|dk.org|eu.org|asn.au|conf.au|csiro.au|edu.au|gov.au|id.au|info.au|net.au|org.au|otc.au|oz.au|telememo.au|ac.cn|ah.cn|bj.cn|cq.cn|edu.cn|gd.cn|gov.cn|gs.cn|gx.cn|gz.cn|hb.cn|he.cn|hi.cn|hk.cn|hl.cn|hn.cn|jl.cn|js.cn|ln.cn|mo.cn|net.cn|nm.cn|nx.cn|org.cn|qh.cn|sc.cn|sh.cn|sn.cn|sx.cn|tj.cn|tw.cn|xj.cn|xz.cn|yn.cn|zj.cn|ac.jp|ad.jp|aichi.jp|akita.jp|aomori.jp|chiba.jp|co.jp|ed.jp|ehime.jp|fukui.jp|fukuoka.jp|fukushima.jp|gifu.jp|go.jp|gov.jp|gr.jp|gunma.jp|hiroshima.jp|hokkaido.jp|hyogo.jp|ibaraki.jp|ishikawa.jp|iwate.jp|kagawa.jp|kagoshima.jp|kanagawa.jp|kanazawa.jp|kawasaki.jp|kitakyushu.jp|kobe.jp|kochi.jp|kumamoto.jp|kyoto.jp|lg.jp|matsuyama.jp|mie.jp|miyagi.jp|miyazaki.jp|nagano.jp|nagasaki.jp|nagoya.jp|nara.jp|ne.jp|net.jp|niigata.jp|oita.jp|okayama.jp|okinawa.jp|or.jp|org.jp|osaka.jp|saga.jp|saitama.jp|sapporo.jp|sendai.jp|shiga.jp|shimane.jp|shizuoka.jp|takamatsu.jp|tochigi.jp|tokushima.jp|tokyo.jp|tottori.jp|toyama.jp|utsunomiya.jp|wakayama.jp|yamagata.jp|yamaguchi.jp|yamanashi.jp|yokohama.jp|ac.uk|co.uk|edu.uk|gov.uk|ltd.uk|me.uk|mod.uk|net.uk|nhs.uk|nic.uk|org.uk|plc.uk|police.uk|sch.uk|co.tv|co.th|co.nz|co.za|com.ac|com.af|com.ag|com.ai|com.al|com.ar|com.au|com.aw|com.az|com.ba|com.bb|com.bh|com.bi|com.bm|com.bo|com.br|com.bs|com.bt|com.by|com.bz|com.ci|com.cm|com.cn|com.co|com.cu|com.cw|com.cy|com.dm|com.do|com.dz|com.ec|com.ee|com.eg|com.es|com.et|com.fr|com.ge|com.gh|com.gi|com.gl|com.gn|com.gp|com.gr|com.gt|com.gu|com.gy|com.hk|com.hn|com.hr|com.ht|com.im|com.io|com.iq|com.is|com.jo|com.kg|com.ki|com.km|com.kp|com.ky|com.kz|com.la|com.lb|com.lc|com.lk|com.lr|com.lv|com.ly|com.mg|com.mk|com.ml|com.mo|com.ms|com.mt|com.mu|com.mv|com.mw|com.mx|com.my|com.na|com.nf|com.ng|com.ni|com.nr|com.om|com.pa|com.pe|com.pf|com.ph|com.pk|com.pl|com.pr|com.ps|com.pt|com.py|com.qa|com.re|com.ro|com.rw|com.sa|com.sb|com.sc|com.sd|com.sg|com.sh|com.sl|com.sn|com.so|com.st|com.sv|com.sy|com.tj|com.tm|com.tn|com.to|com.tr|com.tt|com.tw|com.ua|com.ug|com.uy|com.uz|com.vc|com.ve|com.vi|com.vn|com.vu|com.ws|com.zm|com.de|com.se|com.ru",
        i = (".(" + ["aaa|aarp|abb|abbott|abogado|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|af|afl|ag|agency|ai|aig|airforce|airtel|al|alibaba|alipay|allfinanz|alsace|am|amica|amsterdam|an|analytics|android|ao|apartments|app|apple|aq|aquarelle|ar|aramco|archi|army|arpa|arte|as|asia|associates|at|attorney|au|auction|audi|audio|author|auto|autos|aw|ax|axa|az|azure|ba|baidu|band|bank|bar|barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bb|bbc|bbva|bcn|bd|be|beats|beer|bentley|berlin|best|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|bl|black|blackfriday|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bom|bond|boo|book|boots|bosch|bostik|bot|boutique|bq|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|camera|camp|cancerresearch|canon|capetown|capital|car|caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chat|cheap|chloe|christmas|chrome|church|ci|cipriani|circle|cisco|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cool|coop|corsica|country|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|date|dating|datsun|day|dclk|de|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|dnp|do|docs|dog|doha|domains|doosan|download|drive|dubai|durban|dvag|dz|earth|eat|ec|edeka|edu|education|ee|eg|eh|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|er|erni|es|esq|estate|et|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|fage|fail|fairwinds|faith|family|fan|fans|farm|fashion|fast|feedback|ferrero|fi|film|final|finance|financial|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|florist|flowers|flsmidth|fly|fm|fo|foo|football|ford|forex|forsale|forum|foundation|fox|fr|fresenius|frl|frogans|frontier|fund|furniture|futbol|fyi|ga|gal|gallery|gallup|game|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glass|gle|global|globo|gm|gmail|gmo|gmx|gn|gold|goldpoint|golf|goo|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|group|gs|gt|gu|gucci|guge|guide|guitars|guru|gw|gy|hamburg|hangout|haus|hdfcbank|health|healthcare|help|helsinki|here|hermes|hiphop|hitachi|hiv|hk|hm|hn|hockey|holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hr|hsbc|ht|hu|hyundai|ibm|icbc|ice|icu|id|ie|ifm|iinet|il|im|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|international|investments|io|ipiranga|iq|ir|irish|is|iselect|ist|istanbul|it|itau|iwc|jaguar|java|jcb|je|jetzt|jewelry|jlc|jll|jm|jmp|jo|jobs|joburg|jot|joy|jp|jprs|juegos|kaufen|kddi|ke|kfh|kg|kh|ki|kia|kim|kinder|kitchen|kiwi|km|kn|koeln|komatsu|kp|kpn|kr|krd|kred|kw|ky|kyoto|kz|la|lacaixa|lamborghini|lamer|lancaster|land|landrover|lanxess|lasalle|lat|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|legal|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|limited|limo|lincoln|linde|link|live|living|lixil|lk|loan|loans|lol|london|lotte|lotto|love|lr|ls|lt|ltd|ltda|lu|lupin|luxe|luxury|lv|ly|ma|madrid|maif|maison|makeup|man|management|mango|market|marketing|markets|marriott|mba|mc|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|mf|mg|mh|miami|microsoft|mil|mini|mk|ml|mm|mma|mn|mo|mobi|mobily|moda|moe|moi|mom|monash|money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mp|mq|mr|ms|mt|mtn|mtpc|mtr|mu|museum|mutuelle|mv|mw|mx|my|mz|na|nadex|nagoya|name|natura|navy|nc|ne|nec|net|netbank|network|neustar|new|news|nexus|nf|ng|ngo|nhk|ni|nico|nikon|ninja|nissan|nl|no|nokia|norton|nowruz|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|office|okinawa|om|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|origins|osaka|otsuka|ovh|pa|page|pamperedchef|panerai|paris|pars|partners|parts|party|pe|pet|pf|pg|ph|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pohl|poker|porn|post|pr|praxi|press|pro|prod|productions|prof|promo|properties|property|protection|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|racing|re|read|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|ricoh|rio|rip|ro|rocher|rocks|rodeo|room|rs|rsvp|ru|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|saxo|sb|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scor|scot|sd|se|seat|security|seek|select|sener|services|seven|sew|sex|sexy|sfr|sg|sh|sharp|shell|shia|shiksha|shoes|show|shriram|si|singles|site|sj|sk|ski|skin|sky|skype|sl|sm|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|sony|soy|space|spiegel|spreadbetting|sr|srl|ss|st|stada|star|starhub|statefarm|statoil|stc|stcgroup|stockholm|storage|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|taobao|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|team|tech|technology|tel|telefonica|temasek|tennis|tf|tg|th|thd|theater|theatre|tickets|tienda|tiffany|tips|tires|tirol|tj|tk|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|tours|town|toyota|toys|tp|tr|trade|trading|training|travel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tushu|tv|tvs|tw|tz|ua|ubs|ug|uk|um|unicom|university|uno|uol|us|uy|uz|va|vacations|vana|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|villas|vin|vip|virgin|vision|vista|vistaprint|viva|vlaanderen|vn|vodka|volkswagen|vote|voting|voto|voyage|vu|wales|walter|wang|wanggou|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|wme|wolterskluwer|work|works|world|ws|wtc|wtf|xbox|xerox|xin|测试|कॉम|परीक्षा|佛山|慈善|集团|在线|한국|点看|คอม|ভারত|八卦|‏موقع‎|বাংলা|公益|公司|移动|我爱你|москва|испытание|қаз|онлайн|сайт|联通|срб|бел|‏קום‎|时尚|테스트|淡马锡|орг|नेट|삼성|சிங்கப்பூர்|商标|商店|商城|дети|мкд|‏טעסט‎|ею|ポイント|新闻|工行|‏كوم‎|中文网|中信|中国|中國|娱乐|谷歌|భారత్|ලංකා|购物|測試|ભારત|भारत|‏آزمایشی‎|பரிட்சை|网店|संगठन|餐厅|网络|ком|укр|香港|诺基亚|δοκιμή|飞利浦|‏إختبار‎|台湾|台灣|手表|手机|мон|‏الجزائر‎|‏عمان‎|‏ارامكو‎|‏ایران‎|‏امارات‎|‏بازار‎|‏پاکستان‎|‏الاردن‎|‏موبايلي‎|‏بھارت‎|‏المغرب‎|‏السعودية‎|‏سودان‎|‏همراه‎|‏عراق‎|‏مليسيا‎|澳門|닷컴|政府|‏شبكة‎|‏بيتك‎|გე|机构|组织机构|健康|ไทย|‏سورية‎|рус|рф|珠宝|‏تونس‎|大拿|みんな|グーグル|ελ|世界|ਭਾਰਤ|网址|닷넷|コム|游戏|vermögensberater|vermögensberatung|企业|信息|‏مصر‎|‏قطر‎|广东|இலங்கை|இந்தியா|հայ|新加坡|‏فلسطين‎|テスト|政务|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|youtube|yt|za|zara|zero|zip|zm|zone|zuerich|zw", a].join("|") + ")").replace(/\./gi, "\\."),
        A = s.a.cache
    ;A.create("uris").setOptions({ timeout: 180, check_interval: 120, retimeout_on_get: !0 }).init();
    const l = (() => {
        const e = e => e.split("").map(e => {
                const t = e.toLowerCase(), n = e.toUpperCase();
                return t != n ? "[" + t + n + "]" : e
            }).join(""), t = ["protocol", "hostname", "port", "origin"], n = ["pathname"], s = ["search", "hash"],
            l = t.concat(n).concat(s);
        let c;
        const u = (e, r) => {
                const o = {};
                if (null == e) l.forEach(e => {
                    o[e] = ""
                }); else if (["data:", "view-source:"].some(t => e.startsWith(t))) {
                    o.origin = "null";
                    const t = e.indexOf(":")
                    ;o.protocol = e.substr(0, t + 1), o.pathname = e.substr(t + 1)
                } else {
                    const a = document.createElement("a");
                    a.href = e;
                    const i = document.body || document.documentElement || document;
                    if (i.appendChild(a), l.forEach(e => {
                        o[e] = a[e]
                    }), i.removeChild(a), !r && o.protocol) {
                        if (0 !== e.toLowerCase().indexOf(o.protocol)) if (e.startsWith("//")) o.origin = "", o.protocol = ""; else {
                            if (!["/", "?", "#"].includes(e[0])) return u("/" + e);
                            c || (c = u("", !0)), s.concat(n).forEach(e => {
                                c[e] === o[e] && (o[e] = "")
                            }), t.forEach(e => {
                                o[e] = ""
                            })
                        }
                        ["tampermonkey:"].includes(o.protocol) && (o.pathname = ((o.hostname ? "/" + o.hostname : "") + (o.pathname || "")).replace(/^\/+/, "/"), o.hostname = "")
                    }
                }
                return "0" === o.port && (o.port = ""), Object.defineProperties(o, {
                    domain: {
                        get: function () {
                            const e = o.hostname.split("."), t = e.pop();
                            let n = `${e.pop()}.${t}`;
                            return m.isSecondLevelDomain(n) && (n = `${e.pop()}.${n}`), n
                        }
                    }
                }), o
            },
            d = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            p = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/
        ;let f;
        const m = {
            isIp: function (e) {
                return e.match(d) || e.match(p)
            }, isIpOrHostname: function (e) {
                return m.isIp(e) || !e.includes(".")
            }, isSecondLevelDomain: function (e) {
                return f = f || new RegExp("^(" + a.replace(/\./g, "\\.") + ")$"), e.match(f)
            }, sanitize: function (e, t, n) {
                let r = !1;
                const s = m.parse(e);
                if (s) return "tampermonkey:" == s.protocol ? s.pathname.includes("..") ? r = !0 : e = rea.extension.getURL(e.replace(/^tampermonkey:\/\//, "")) : s.protocol || t && (e = m.rel2abs(e, t, n || ["http:", "https:"])) || (r = !0), r ? null : e
            },
            parse: function (e) {
                if (null == e) return;
                let t = A.items.uris.get(e);
                return t || (t = u(e), A.items.uris.set(e, t), t)
            }, rel2abs: function (e, t, n) {
                let r, s, o;
                if (e && t && (r = m.parse(e)) && (s = m.parse(t)) && r && s && s.protocol && (!n || n.includes(s.protocol) || !e.includes(".."))) return e.startsWith("//") ? s.protocol + "//" + r.hostname + (r.port ? ":" + r.port : "") + r.pathname + r.search : ("/" === e[0] ? o = r.pathname : (t = m.woParams(s), s = m.parse(t + ("/" === t[t.length - 1] ? "" : "/") + e), o = s.pathname),
                s.protocol + "//" + s.hostname + (s.port ? ":" + s.port : "") + o + r.search)
            }, toUrl: function (e, t) {
                return t = t || {}, (["about:"].includes(e.protocol) ? e.protocol : e.protocol + "//") + e.hostname + (e.port && e.port > 0 ? ":" + e.port : "") + (t.nopath ? "" : e.pathname + (t.nosearch ? "" : e.search))
            }, woPath: function (e) {
                const t = "string" == typeof e ? m.parse(e) : e;
                return m.toUrl(t, { nopath: !0 })
            }, woParams: function (e) {
                const t = "string" == typeof e ? m.parse(e) : e;
                return m.toUrl(t, { nosearch: !0 })
            }, woHash: function (e) {
                const t = "string" == typeof e ? m.parse(e) : e
                ;
                return m.toUrl(t)
            }, hash2params: function (e) {
                return Object.keys(e).map(t => void 0 === e[t] ? null : encodeURIComponent(t) + "=" + encodeURIComponent(e[t])).filter(e => e).join("&")
            }, params2hash: function (e) {
                return "string" != typeof e && (e = e.search ? e.search.substring(1) : e.hash ? e.hash.substring(1) : ""), e.split("&").reduce((e, t) => {
                    const n = t.split("=");
                    return e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]), e
                }, {})
            }, getRegExpFromInclude: e => {
                let t
                ;
                return "*" == e ? t = "^(https?|file)://.*" : (t = e.includes(".*/") ? e.replace(".*/", ".tld/") : e, t = "^" + Object(o.escapeForRegExpURL)(t), t = t.replace(/\*/gi, ".*"), t = t.replace(Object(o.escapeForRegExpURL)(".tld/"), i + "/"), t = t.replace(/(\^|:\/\/)\.\*/, "$1([^\\?#])*"), t = t.replace(/<1>/g, "([^\\/#\\?]*\\.)?"), t = t.replace(/<2>/g, "[^#\\?]*"), t = t.replace(/<3>/g, "([^\\?#]*\\.)*")), "(" + t + ")"
            }, getRegExpFromMatch: (t, n) => {
                let s, a, A, l, c, u;
                const d = "://", p = "/";
                if (s = t.replace(/\$$/, "").split(d), s.length < 2 ? (a = "",
                    A = t) : (a = s[0].replace(/^\^/, ""), A = s.slice(1).join(d)), l = A.split(p), u = l.length < 2 ? "/" : p + l.slice(1).join(p), c = l[0], "http*" === a ? a = "https<1>" : a.match(/\*|http|https|file|ftp/) || (r.a.warn('uri: override scheme "' + a + '" with "*"'), a = "*"), "file" === a) c = ""; else {
                    const e = c, t = c.match(/\*$|(\*\.)?[^\/\*]+/);
                    c = (t ? t[0] : "").replace(/:[0-9]*$/, ""), c !== e && r.a.warn('uri: override host "' + e + '" with "' + c + '"')
                }
                return u && u.substr(0, 1) === p || (r.a.warn('uri: prefix path "' + u + '" with "/"'), u = p + u),
                    a = Object(o.escapeForRegExpURL)(a).replace(/\*/gi, "[^:\\/#\\?]*"), c = Object(o.escapeForRegExpURL)(c).replace(/\*\\\./gi, "(*\\.)?").replace(/\*/gi, "[^#\\?\\/]*"), u = Object(o.escapeForRegExpURL)(u).replace(/\*/gi, ".*"), a = a.replace(/<1>/g, "?"), c = c.replace(new RegExp(Object(o.escapeForRegExpURL)(".tld") + "$"), i), n || (a = e(a), c = e(c)), c += "(:[0-9]{1,5})?", "(^" + a + Object(o.escapeForRegExpURL)(d) + c + u + "$)"
            }
        };
        return m
    })();
    t.default = l
}, function (e, t, n) {
    "use strict";
    n.r(t);
    const r = {
        encode: function (e) {
            return window.unescape(window.encodeURIComponent(e))
        }, decode: function (e) {
            return window.decodeURIComponent(window.escape(e))
        }
    }, s = (e, t) => {
        try {
            let n, s;
            if ("object" == typeof t ? (n = t.encoding, s = t.array) : n = t, window.TextDecoder && !s && n) return new window.TextDecoder(n).decode(e);
            {
                let t = "";
                const s = new window.Uint8Array(e);
                for (let e = 0; e < s.length; e += 16384) t += window.String.fromCharCode.apply(null, s.subarray(e, e + 16384));
                return n && "utf-8" == n.toLowerCase() && (t = r.decode(t)), t
            }
        } catch (e) {
            window.console.warn(e)
        }
        return null
    }, o = {
        UTF8: r, Base64: {
            encode: function (e) {
                let t = "";
                for (let n = 0; n < e.length; n++) t += window.String.fromCharCode(255 & e.charCodeAt(n));
                return window.btoa(t)
            }, decode: function (e) {
                return window.atob(e)
            }
        }, encode: function (e) {
            return window.escape(e)
        }, decode: function (e) {
            return window.unescape(e)
        }, encodeR: function (e) {
            return e
        }, decodeR: function (e) {
            return e
        }, encodeS: function (e) {
            return window.btoa(r.encode(e))
        }, decodeS: function (e) {
            return r.decode(window.atob(e))
        }, MD5: (e, t) => {
            const n = (e, t) => e << t | e >>> 32 - t, s = (e, t) => {
                    let n, r, s, o, a;
                    return s = 2147483648 & e, o = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ s ^ o : n | r ? 1073741824 & a ? 3221225472 ^ a ^ s ^ o : 1073741824 ^ a ^ s ^ o : a ^ s ^ o
                },
                o = (e, t, r, o, a, i, A) => (e = s(e, s(s(((e, t, n) => e & t | ~e & n)(t, r, o), a), A)), s(n(e, i), t)),
                a = (e, t, r, o, a, i, A) => (e = s(e, s(s(((e, t, n) => e & n | t & ~n)(t, r, o), a), A)), s(n(e, i), t)),
                i = (e, t, r, o, a, i, A) => (e = s(e, s(s(((e, t, n) => e ^ t ^ n)(t, r, o), a), A)),
                    s(n(e, i), t)),
                A = (e, t, r, o, a, i, A) => (e = s(e, s(s(((e, t, n) => t ^ (e | ~n))(t, r, o), a), A)), s(n(e, i), t)),
                l = e => {
                    let t, n, r = "", s = "";
                    for (n = 0; n <= 3; n++) t = e >>> 8 * n & 255, s = "0" + t.toString(16), r += s.substr(s.length - 2, 2);
                    return r
                };
            let c, u, d, p, f, m, g, h, R, v = Array();
            for (t && "utf-8" == t.toLowerCase() && (e = r.encode(e)), v = (e => {
                let t;
                const n = e.length, r = n + 8, s = 16 * ((r - r % 64) / 64 + 1), o = Array(s - 1);
                let a = 0, i = 0;
                for (; i < n;) t = (i - i % 4) / 4, a = i % 4 * 8, o[t] = o[t] | e.charCodeAt(i) << a, i++;
                return t = (i - i % 4) / 4, a = i % 4 * 8, o[t] = o[t] | 128 << a, o[s - 2] = n << 3, o[s - 1] = n >>> 29, o
            })(e), m = 1732584193, g = 4023233417, h = 2562383102, R = 271733878, c = 0; c < v.length; c += 16) u = m, d = g, p = h, f = R, m = o(m, g, h, R, v[c + 0], 7, 3614090360), R = o(R, m, g, h, v[c + 1], 12, 3905402710), h = o(h, R, m, g, v[c + 2], 17, 606105819), g = o(g, h, R, m, v[c + 3], 22, 3250441966), m = o(m, g, h, R, v[c + 4], 7, 4118548399), R = o(R, m, g, h, v[c + 5], 12, 1200080426), h = o(h, R, m, g, v[c + 6], 17, 2821735955), g = o(g, h, R, m, v[c + 7], 22, 4249261313), m = o(m, g, h, R, v[c + 8], 7, 1770035416), R = o(R, m, g, h, v[c + 9], 12, 2336552879), h = o(h, R, m, g, v[c + 10], 17, 4294925233), g = o(g, h, R, m, v[c + 11], 22, 2304563134),
                m = o(m, g, h, R, v[c + 12], 7, 1804603682), R = o(R, m, g, h, v[c + 13], 12, 4254626195), h = o(h, R, m, g, v[c + 14], 17, 2792965006), g = o(g, h, R, m, v[c + 15], 22, 1236535329), m = a(m, g, h, R, v[c + 1], 5, 4129170786), R = a(R, m, g, h, v[c + 6], 9, 3225465664), h = a(h, R, m, g, v[c + 11], 14, 643717713), g = a(g, h, R, m, v[c + 0], 20, 3921069994), m = a(m, g, h, R, v[c + 5], 5, 3593408605), R = a(R, m, g, h, v[c + 10], 9, 38016083), h = a(h, R, m, g, v[c + 15], 14, 3634488961), g = a(g, h, R, m, v[c + 4], 20, 3889429448), m = a(m, g, h, R, v[c + 9], 5, 568446438), R = a(R, m, g, h, v[c + 14], 9, 3275163606),
                h = a(h, R, m, g, v[c + 3], 14, 4107603335), g = a(g, h, R, m, v[c + 8], 20, 1163531501), m = a(m, g, h, R, v[c + 13], 5, 2850285829), R = a(R, m, g, h, v[c + 2], 9, 4243563512), h = a(h, R, m, g, v[c + 7], 14, 1735328473), g = a(g, h, R, m, v[c + 12], 20, 2368359562), m = i(m, g, h, R, v[c + 5], 4, 4294588738), R = i(R, m, g, h, v[c + 8], 11, 2272392833), h = i(h, R, m, g, v[c + 11], 16, 1839030562), g = i(g, h, R, m, v[c + 14], 23, 4259657740), m = i(m, g, h, R, v[c + 1], 4, 2763975236), R = i(R, m, g, h, v[c + 4], 11, 1272893353), h = i(h, R, m, g, v[c + 7], 16, 4139469664), g = i(g, h, R, m, v[c + 10], 23, 3200236656),
                m = i(m, g, h, R, v[c + 13], 4, 681279174), R = i(R, m, g, h, v[c + 0], 11, 3936430074), h = i(h, R, m, g, v[c + 3], 16, 3572445317), g = i(g, h, R, m, v[c + 6], 23, 76029189), m = i(m, g, h, R, v[c + 9], 4, 3654602809), R = i(R, m, g, h, v[c + 12], 11, 3873151461), h = i(h, R, m, g, v[c + 15], 16, 530742520), g = i(g, h, R, m, v[c + 2], 23, 3299628645), m = A(m, g, h, R, v[c + 0], 6, 4096336452), R = A(R, m, g, h, v[c + 7], 10, 1126891415), h = A(h, R, m, g, v[c + 14], 15, 2878612391), g = A(g, h, R, m, v[c + 5], 21, 4237533241), m = A(m, g, h, R, v[c + 12], 6, 1700485571), R = A(R, m, g, h, v[c + 3], 10, 2399980690),
                h = A(h, R, m, g, v[c + 10], 15, 4293915773), g = A(g, h, R, m, v[c + 1], 21, 2240044497), m = A(m, g, h, R, v[c + 8], 6, 1873313359), R = A(R, m, g, h, v[c + 15], 10, 4264355552), h = A(h, R, m, g, v[c + 6], 15, 2734768916), g = A(g, h, R, m, v[c + 13], 21, 1309151649), m = A(m, g, h, R, v[c + 4], 6, 4149444226), R = A(R, m, g, h, v[c + 11], 10, 3174756917), h = A(h, R, m, g, v[c + 2], 15, 718787259), g = A(g, h, R, m, v[c + 9], 21, 3951481745), m = s(m, u), g = s(g, d), h = s(h, p), R = s(R, f);
            return (l(m) + l(g) + l(h) + l(R)).toLowerCase()
        }, arrbuf2str: s, str2arrbuf: (e, t) => {
            try {
                let n, s;
                if ("object" == typeof t ? (n = t.encoding,
                    s = t.array) : n = t, window.TextEncoder && !s && n) return new window.TextEncoder(n).encode(e);
                {
                    n && "utf-8" == n.toLowerCase() && (e = r.encode(e));
                    const t = new window.Uint8Array(e.length);
                    for (let n = 0; n < e.length; n++) t[n] = 255 & e.charCodeAt(n);
                    return t.buffer
                }
            } catch (e) {
                window.console.warn(e)
            }
            return null
        }, dataUri2Blob: e => {
            let t;
            t = e.split(",")[0].includes("base64") ? window.atob(e.split(",")[1]) : window.unescape(e.split(",")[1]);
            const n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length)
            ;
            for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
            return new window.Blob([r], { type: n })
        }, blob2dataUri: (e, t) => {
            var n = new window.FileReader;
            n.onload = e => {
                t(e.target.result)
            }, n.readAsDataURL(e)
        }, blob2str: (e, t) => {
            new window.Response(e).arrayBuffer().then(e => t(s(e))).catch(e => t(null, e))
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : { default: e }
    };
    Object.defineProperty(t, "__esModule", { value: !0 }),
        t.HEADER_STOP = t.HEADER_START = t.Parser = void 0;
    const s = n(3), o = r(n(0));
    let a;
    const i = {}, A = (...e) => {
        const t = { keys: e, default: () => [], convert: (e, t) => (e.push(t), e) };
        return (null == e ? void 0 : e.length) && e.forEach(e => i[e] = t), t
    }, l = (...e) => {
        const t = { keys: e, default: () => "", convert: (e, t) => "" === e ? t : e };
        return (null == e ? void 0 : e.length) && e.forEach(e => i[e] = t), t
    }, c = (...e) => {
        const t = {
                keys: e,
                default: () => ({}),
                convert: (e, t, n) => (e[n = n ? o.default.normalizeLocale(n) : "default"] = t, e)
            }
        ;
        return (null == e ? void 0 : e.length) && e.forEach(e => i[e] = t), t
    }, u = {
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
        resources: ((...e) => {
            const t = {
                keys: e, default: () => ({}), convert: (e, t) => {
                    const n = t.match(/^(\w\S*)\s+(.*)/);
                    return n && void 0 === e[n[1]] && (e[n[1]] = n[2]), e
                }
            };
            return (null == e ? void 0 : e.length) && e.forEach(e => i[e] = t), t
        })("resource"),
        noframes: ((...e) => {
            const t = { default: () => !1, convert: () => !0 };
            return (null == e ? void 0 : e.length) && e.forEach(e => i[e] = t), t
        })(),
        connects: A("connect", "connect-src", "domain"),
        webRequest: A(),
        "run-at": l(),
        antifeatures: ((...e) => {
            const t = {
                keys: e, default: () => ({}), convert: (e, t, n) => {
                    var r;
                    n = n ? o.default.normalizeLocale(n) : "default"
                    ;const s = t.match(/^(\w\S*)\s+(.*)/);
                    return s && ((e[r = s[1]] || (e[r] = {}))[n] = s[2]), e
                }
            };
            return (null == e ? void 0 : e.length) && e.forEach(e => i[e] = t), t
        })("antifeature")
    }, d = {};
    Object.entries(u).forEach(([e, t]) => {
        var n;
        null === (n = t.keys) || void 0 === n || n.forEach(t => {
            d[t] = e
        })
    });
    const p = "==UserScript==";
    t.HEADER_START = p;
    const f = "==/UserScript==";
    t.HEADER_STOP = f;
    const m = /(?:^|\n)\s*\/\/\x20==UserScript==([\s\S]*?\n)\s*\/\/\x20==\/UserScript==|$/, g = () => ({
        ...{
            ...Object.fromEntries(Object.keys(u).map(e => [e, u[e].default()]))
        }
    }), h = e => {
        const t = e.match(m), n = (t ? t[1] : "") || "", r = {};
        return n.replace(/(?:^|\n)\s*\/\/\x20(@\S+)(.*)/g, (e, t, n) => {
            const [s, o] = t.slice(1).split(":"), a = i[s] || u[s] || void 0;
            if (a) {
                const e = d[s] || s, t = n.trim();
                let i = r[e];
                void 0 === i && (i = a.default()), r[e] = a.convert(i, t, o)
            } else console.warn(`parser:${(null == r ? void 0 : r.name.default) ? " script " + (null == r ? void 0 : r.name.default) : ""} unknown key @${s}`);
            return ""
        }), { ...g(), ...r }
    }, R = e => {
        const {
                name: t,
                description: n,
                version: r,
                grant: s,
                icon: o,
                icon64: a,
                supportURL: i,
                fileURL: A,
                downloadURL: l,
                updateURL: c,
                namespace: u,
                requires: d,
                includes: p,
                matches: f,
                excludes: m,
                homepage: g,
                resources: h,
                connects: R,
                webRequest: v,
                noframes: w,
                author: b,
                copyright: k,
                antifeatures: _
            } = e, y = e["run-at"], E = (e, { [e]: t, ...n }) => n, x = t.default, T = n.default, G = E("default", t),
            M = E("default", n), S = Object.entries(h).map(([e, t]) => ({ name: e, url: t }));
        return {
            name: x,
            description: T,
            version: r,
            grant: s,
            icon: o,
            icon64: a,
            supportURL: i,
            fileURL: A,
            downloadURL: l,
            updateURL: c,
            namespace: u,
            requires: d.map(e => ({ url: e })),
            includes: p,
            matches: f,
            excludes: m,
            homepage: g,
            resources: S,
            connects: R,
            webRequest: v.map(e => JSON.parse(e)),
            author: b,
            copyright: k,
            antifeatures: _,
            name_i18n: G,
            description_i18n: M,
            uuid: null,
            system: !1,
            enabled: !0,
            position: 0,
            blockers: [],
            lastModified: 0,
            sync: { imported: !1 },
            options: {
                check_for_updates: !0,
                comment: null,
                compatopts_for_requires: !0,
                compat_wrappedjsobject: !1,
                compat_metadata: !1,
                compat_foreach: !1,
                compat_prototypes: !1,
                noframes: w,
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
    }, v = {
        init: e => {
            a = e
        }, createScript: () => R(g()) || {}, processMetaHeader: e => h(e), processHeader: e => {
            const t = (e => h(e))(e);
            if (t) return R(t)
        }, createScriptFromSrc: e => {
            const t = (e => {
                const t = s.getStringBetweenTags(e, p, f);
                if (!t) return null
                    ;
                const n = e.indexOf(p), r = e.indexOf("<html>"), o = e.indexOf("<body>");
                return r > 0 && r < n || o > 0 && o < n ? null : ["// ", p, t, f].join("")
            })(e = (e || "").replace(/(\r\n|\n|\r)/gm, "\n"));
            if (!t) return null;
            const n = v.processHeader(t);
            return n ? (n.textContent = e, n.header = t, n.options.compat_wrappedjsobject = e != a.unWrappedJsObjectify(e), n.options.compat_metadata = e != a.unMetaDataify(e), n) : null
        }, versionCmp: (() => {
            const e = e => {
                const t = e.split(".")
                ;
                return t.slice(0, 3).concat([t.slice(3).join(".")]).concat([0, 0, 0, 0]).slice(0, 4).map(e => {
                    const t = e.toString().match(/((?:\-?[0-9]+)?)([^0-9\-]*)((?:\-?[0-9]+)?)(.*)/);
                    return [Number(t[1]), t[2], Number(t[3]), t[4]]
                }).reduce((e, t) => e.concat(t))
            }, t = (n, r) => {
                const s = Array.isArray(n) ? n : e(n), o = Array.isArray(r) ? r : e(r);
                for (let e = 0; e < 16; e++) {
                    const n = s[e], r = o[e];
                    if (e % 2 == 1) {
                        if (!n && r) return t.eNEWER;
                        if (n && !r) return t.eOLDER;
                        const e = n.match(/\w/g) || [], s = r.match(/\w/g) || []
                        ;
                        for (let n = 0; n < Math.min(e.length, s.length); n++) {
                            if (e[n].charCodeAt(0) > s[n].charCodeAt(0)) return t.eNEWER;
                            if (e[n].charCodeAt(0) < s[n].charCodeAt(0)) return t.eOLDER
                        }
                        if (e.length > s.length) return t.eNEWER;
                        if (e.length < s.length) return t.eOLDER
                    } else {
                        if (Number(n) > Number(r)) return t.eNEWER;
                        if (Number(n) < Number(r)) return t.eOLDER
                    }
                }
                return t.eEQUAL
            };
            return t.eERROR = -2, t.eOLDER = -1, t.eEQUAL = 0, t.eNEWER = 1, t
        })()
    };
    t.Parser = v
}, , function (e, t, n) {
    "use strict";
    var r = n(1), s = n(3);
    const o = {
        items: {}, remove: function (e) {
            delete o.items[e]
        }, create: function (e) {
            let t = {};
            const n = { retimeout_on_get: !1, timeout: 300, check_interval: 120 };
            let r;
            const a = {
                init: function () {
                    return r || a.schedule(), a
                }, schedule: function () {
                    a.unschedule(), r = window.setInterval(a.clean, 1e3 * n.check_interval)
                }, unschedule: function () {
                    r && window.clearInterval(r), r = null
                }, setOptions: function (e) {
                    for (const t in e) e.hasOwnProperty(t) && (n[t] = e[t], "check_interval" == t && r && a.schedule());
                    return a
                }, set: function (e, n) {
                    t[e] = { value: n, ts: Date.now() }
                }, setj: function (e, t) {
                    return a.set(e, t ? JSON.stringify(t) : t)
                }, get: function (e, r) {
                    let s = r;
                    return t[e] && (n.retimeout_on_get && (t[e].ts = Date.now()), s = t[e].value), s
                }, getj: function () {
                    const e = a.get.apply(this, arguments);
                    return e ? JSON.parse(e) : e
                }, remove: function (e) {
                    delete t[e]
                }, clean: function () {
                    const e = Date.now() - 1e3 * n.timeout;
                    Object(s.each)(t, (t, n) => {
                        t.ts < e && window.setTimeout(() => {
                            a.remove(n)
                        }, 1)
                    })
                }, removeAll: function () {
                    t = {}
                }, finalize: function () {
                    a.unschedule(), t = {}
                }
            };
            return o.items[e] = a, a
        }
    }, a = {
        cache: o, createQueue: e => {
            const t = [], n = [], s = () => {
                let r;
                if (n.length < e && t.length && (r = t.shift())) {
                    const e = r.fn();
                    n.push(e), e.always(() => {
                        let t;
                        (t = n.indexOf(e)) > -1 && n.splice(t, 1), s()
                    }), r.p.consume(e)
                }
            };
            return {
                add: function (e) {
                    const n = Object(r.Deferred)();
                    return t.push({ fn: e, p: n }), s(), n.promise()
                }
            }
        }, sleep: e => {
            const t = Object(r.Deferred)();
            return window.setTimeout(() => {
                t.resolve()
            }, e), t.promise()
        }, readAsText: e => {
            const t = Object(r.Deferred)(), n = new FileReader;
            return n.onloadend = function () {
                t.resolve(this.result)
            },
                n.onerror = t.reject, n.onabort = t.reject, n.readAsText(e), t.promise()
        }
    };
    t.a = a
}, function (e, t, n) {
    "use strict";
    const r = rea.FEATURES;
    let s = null, o = r.PINGPONG.RETRIES;
    const a = (e, t) => {
        const n = () => {
            null != s && window.clearTimeout(s), s = null
        }, r = t => {
            t ? (n(), e && (e(t), e = null)) : console.log("pp: Warn: got pseudo response!")
        };
        s = window.setTimeout(() => {
            if (n(), o-- > 0) return a(e, t), void (e = t = null);
            t && t()
        }, 5e3);
        const i = { method: "ping" };
        try {
            rea.extension.sendMessage(i, r)
        } catch (e) {
        }
    };
    var i = a, A = n(0), l = n.n(A);
    const c = rea.FEATURES
    ;var u = [];
    let d = null;
    const p = (() => {
        const e = c.HTML5.LOCALSTORAGE;
        let t, n;
        return {
            cache: function () {
                const t = document.documentElement, n = location.pathname;
                if (e && t && n) try {
                    const r = JSON.parse(e.getItem("background") || "{}");
                    r[n] = { class: t.getAttribute("class") }, e.setItem("background", JSON.stringify(r))
                } catch (e) {
                }
            }, reset: function () {
                n = !0;
                const e = document.documentElement;
                "string" == typeof t && e && e.setAttribute("class", t)
            }, restore: function () {
                if (n) return;
                const r = location.pathname;
                if (e && r) try {
                    let n
                    ;const s = e.getItem("background");
                    if (s && (n = JSON.parse(s)) && (n = n[r]) && n.class) {
                        const e = document.documentElement;
                        if (!e) return;
                        t = e.getAttribute("class") || "", e.setAttribute("class", t + " " + n.class)
                    }
                } catch (e) {
                }
            }
        }
    })(), f = e => {
        const t = () => {
            e(), p.restore()
        };
        v ? document.body ? t() : window.addEventListener("DOMContentLoaded", t) : (R = R || []).push(() => {
            f(e)
        }), d && (window.clearTimeout(d), d = null)
    };
    u = [{ name: l.a.getMessage("Default"), layout: "default" }, {
        name: l.a.getMessage("Default_Light"),
        layout: "default",
        theme: "light"
    }, {
        name: l.a.getMessage("Default_Dark"), layout: "default", theme: "dark"
    }, {
        name: l.a.getMessage("Default_Darker"),
        layout: "default",
        theme: "darker",
        footer: 'Theme by <a href="https://github.com/narcolepticinsomniac" target="blank">narcolepticinsomniac</a> from the <a href="https://github.com/openstyles/stylus" target="blank">Stylus</a> project.'
    }];
    let m = !1;
    const g = {
        default: l.a.getMessage("Default"),
        monokai: "Monokai",
        solarized: "Solarized",
        "mdn-like": "MDN-like",
        eclipse: "Eclipse",
        railscasts: "RailsCasts",
        zenburn: "ZenBurn"
    }, h = () => (m || (u = u.map(e => (e.value = e.theme ? [e.layout, e.theme].join("#") : e.layout, e)), m = !0), u);
    var R, v = !1;
    const w = {
        init: e => {
            v = !0, R && (R.forEach(e => {
                e()
            }), R = null), p.restore(), i(t => {
                let n, r, s;
                var o;
                t && (n = t.config) && (r = n.layout) && (n.dark && !r.includes("#") && (r += "#dark"), (o = (e => {
                    let t;
                    return h().some(n => {
                        if (n.value === e) return t = n, !0
                    }), t
                })(r)).theme && "light" !== o.theme ? (o.footer && $(".footer").html(o.footer), s = o.theme) : s = "default", p.reset(),
                    $(document.documentElement).addClass([rea.FEATURES.RUNTIME.MOBILE ? "mobile" : "desktop", s].join(" ")), window.setTimeout(p.cache, 500)), e.suc && e.suc()
            }, e.fail)
        }, images: {
            origin: function (e) {
                return {
                    unknown: "data:image/png;base64,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",
                    uso: "data:image/png;base64,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",
                    mog: "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNC8yMy8xNJyRyqUAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAACVklEQVRYhc2XS2gUQRBAX6kHI5ioEBEhIKggRPaYw6KgCOkg6NGjICrs2SaQ6F3IoW/iBxEED+JNRAhNUBARIxGCxoho/OagBkW9rFGR9jCzMnZ6Pklmdy0Y2KmqrnrbVT01I8452ikr2pr9fwBYlecgynQDw0AF+A3cBS45q9+XASBZPRAnvwds90xfgFPO6nPLBcgrwUggOcB64Kwoc1mUWVYZU3dAlFkNvAO6c2LcAg46q+tLAcii7wI6C8TYB4yJMh1lA6wExNM9BT4FfKvAdVGmVIBfRF3vA1SBtwH/fuCaKONDLxlgHvjh6SrO6hfAbmAmsOYQcFuU2VoUIKsJAaaAnQn1d2CLs3pOlOkBxoHNgeV14DxwFZgmKucOYB0w6az+3HBM3QFnNcAzT90B9Mb2WWAA+BpYvgY4AUwAr+JrAhgDxkWZ3lyAWB4GdNUE5BSwB5jNiLGJf4/yNmCwKMD9gG5v8sZZ/QjoA27mxErK3yObBzDJwi3uE2U2eBAfnNUHgMPAk5yYdeBM4yZzFgCIMqNEtU7Kfmf1aIq/EB3JAaJ+WRubvgGPgStx6YAC05CocXyAXUAQwFntABtfuVJkkNwB/G2qFAleFsAb4Ken29hKgC4WlsoHairAENGTLCnPWwIgyhwDjgdMN5oOIMrUgIsB0zSLe+gsHkCUOQ2kve8ddVb7Y7o8AFHmJNFbcEhqzuoHZSUPAgBHUnyHnNUXykyeBvAxoKs5q0fKTp4GMAi8jn/PAP3N+OcNCQ4jUaYT6AFeOqvnm5U8FaCV0vaP0z8+BK0V8JWwlwAAAABJRU5ErkJggg==",
                    gf: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=",
                    gh: "data:image/png;base64,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F/8VFRf/FRUX/xMTFKsAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRMTFKsVFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8TExT1AAAADQ4OFFkVFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8TExOPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTE48VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8ODhRZExMTnRUVF/8VFRf/FRUX/xUVF/8VFRf/EREU0QAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBERFNEVFRf/FRUX/xUVF/8VFRf/FRUX/xMTE50RERTQFRUX/xUVF/8VFRf/FRUX/xUVF/8SEhJeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhISXhUVF/8VFRf/FRUX/xUVF/8VFRf/EREU0BISFPIVFRf/FRUX/xUVF/8VFRf/FRUX/wAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFRUX/xUVF/8VFRf/FRUX/xUVF/8SEhTyFRUX/xUVF/8VFRf/FRUX/xUVF/8SEhTyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhTyFRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xUVF/8VFRf/FRUX/xMTFNsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTFNwVFRf/FRUX/xUVF/8VFRf/FRUX/xMTFPYVFRf/FRUX/xUVF/8VFRf/FBQU4QAA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AAAAAAAADAwMFA8PD2MRERSkFBQU0hMTFPMVFRf/FRUX/xMTFPMUFBTSEREUpA8PD2MMDAwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                    gl: "data:image/png;base64,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",
                    bb: "data:image/png;base64,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",
                    ouj: "data:image/x-icon;base64,AAABAAEAQEAAAAEACAAoFgAAFgAAACgAAABAAAAAgAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwTwoAclEOAHVWAABzUhAAdlcAAHdYAAB0UxIAdVQTAHhZAgB2VRUAe1sJAH1dDgB3XB0AeF0eAHpfIQB7YCIAfGEjAH1iJAB+YyYAf2QnAIFmKQCEah8AgmcrAIVpLgCHbSQAhmovAIhuJQCJbyYAh3EzAIhyNACJczYAi3U4AIx2OQCNdzoAjng7AI95PACQej0Aknw/AJN9QQCXgUUAlYROAJaFTwCXhlAAnItWAKCPWgChkFsAo5FcAJ2RYQCekmIAn5NjAKKWZgCkmGgAp5pyAKqdbQCrnXUArJ52AK+hegCpoX4AraWCALOqhwC0q4gAtayJALatigC3r4sAuLCMALmxjQC3tJQAuLWVALm2lgC7uJgAvbqaAL67mwC/vJwAwb6eAMbBqQDHwqoAwsOuAMXGsgDHyLQAyMm1AM7PugDP0LsA0NG8ANLTvwDT1MAAztXEANDWxQDR18YA0tnHANTbyQDV3MoA19zTANfezQDZ4M8A2t/VANvg1gDc4dcA3eLYAN7j2QDf5NoA4OXbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRjYl9dXFlZWVlcXV9iY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY2FcVU9JQDo2NDQ2OkBJTlVcYWNkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRiXVZMPTIpIRoUDg0NDhQaISgyPUxWXWJkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGNfVEk0JxgLCAIDAQAAAAABAwIFCxgnNElTX2NkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJZSzQkEQUDAQAAAAAAAAAAAAAAAAEDBREjNEpZYmRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY2BSPykUBQEAAAAAAAAAAAAAAAAAAAAAAAABBBMoP1JfY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY11NNB0MAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDB00TV1jZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY11MMBYEAQAAAAAAAAEDBwIJBAQJAgcDAQAAAAAAAAEEFC5MW2NkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY11MLBMHAAAAAAABAwcIERccHyIiHxwXEQgHAwEAAAAAAAcTLExdY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGBNMBMHAAAAAAABCQ4YJi84PURGRkQ+OC8mGA4JAQAAAAAABxMuTV9kZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJSNBYHAAAAAAEDChgqOEVNUlhcW1tcWFJNRTkqGAoGAQAAAAAHFjRRYmRkZGRkZGRkZGRkZGRkZGRkZGRkZGNZPx0EAAAAAAECDyM0SFBcYGJiY2RkY2JiYFxRSTQjDwIBAAAAAAQdP1ljZGRkZGRkZGRkZGRkZGRkZGRkZGRfSykMAQAAAAEEFCk7TlphY2RkZGRkZGRkZGRjYVpPPCkUBAEAAAABDChKX2RkZGRkZGRkZGRkZGRkZGRkZGRiVDQUAwAAAAECFCtDUl5iZGRkZGRkZGRkZGRkZGRiXlNDKxQCAQAAAAMTNFNiZGRkZGRkZGRkZGRkZGRkZGRkXUkkBQAAAAADDypDVGBjZGRkZGRkZGRkZGRkZGRkZGNgVUMqEAYAAAAABSRJXWRkZGRkZGRkZGRkZGRkZGRkY1Y1EgMAAAABCiM8UmBjZGRkZGRkZGRkZGRkZGRkZGRkY2BTPCMKAQAAAAERNFZjZGRkZGRkZGRkZGRkZGRkZGFMJwgAAAABCRg0Tl5jZGRkZGRkZGRkZGRkZGRkZGRkZGRjXk80GAkBAAAABSdMYWRkZGRkZGRkZGRkZGRkZGRcPRgHAAAAAw4qSFpiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJaSCoOAwAAAAMYPVxkZGRkZGRkZGRkZGRkZGRjVTMOAQAAAAcYOFBhZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYVE5GAcAAAABCzJVY2RkZGRkZGRkZGRkZGRkYk8pCAAAAAEIJkVaYmRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGNcRSYIAQAAAAgpTmJkZGRkZGRkZGRkZGRkZGBJIgQAAAADES1NX2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYE0vEQMAAAACIUlfZGRkZGRkZGRkZGRkZGRdQRsHAAAABhc4UmJkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJSOBcHAAAABxpAXWRkZGRkZGRkZGRkZGRkXDoUAwAAAAccPVdiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRiWD4cAgAAAAEUOlxkZGRkZGRkZGRkZGRkZFo2DwEAAAACH0RcY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY1xEIAkAAAABDjZZZGRkZGRkZGRkZGRkZGRZNA0BAAAACSJGW2NkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRbRiIJAAAAAA00WWRkZGRkZGRkZGRkZGRkWTQNAQAAAAkiRltjZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkW0YiCQAAAAANNFlkZGRkZGRkZGRkZGRkZFo3DwEAAAACH0RcY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY1xEIAkAAAABDzZZZGRkZGRkZGRkZGRkZGRcOhQDAAAABxw9V2JkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJYPRwCAAAAARQ6XGRkZGRkZGRkZGRkZGRkXUEbBwAAAAYXOFJiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRiUjgXBwAAAAcaQF1kZGRkZGRkZGRkZGRkZGBJIgQAAAADES1NX2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYE0vEQMAAAACIklfZGRkZGRkZGRkZGRkZGRiTykIAAAAAQgmRVpiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY1xFJggBAAAACClOYmRkZGRkZGRkZGRkZGRkY1UzDgEAAAAHGDhQYGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGFQORgHAAAAAQsyVWNkZGRkZGRkZGRkZGRkZGRcPhoHAAAAAQ4qSFpiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGJaSCoOAwAAAAMYPVxkZGRkZGRkZGRkZGRkZGRkYUwnCAAAAAEJGTROXmNkZGRkZGRkZGRkZGRkZGRkZGRkZGNeTjQYCQEAAAAFJ0xhZGRkZGRkZGRkZGRkZGRkZGNWNRIDAAAAAQgjO1JgY2RkZGRkZGRkZGRkZGRkZGRkZGNgUzwjCgEAAAABETRWY2RkZGRkZGRkZGRkZGRkZGRkXUkkBQAAAAADDylCVGBjZGRkZGRkZGRkZGRkZGRkZGNgVEMpDwMAAAAABSRJXWRkZGRkZGRkZGRkZGRkZGRkZGJUNRQDAAAAAQIUK0NSXmJkZGRkZGRkZGRkZGRkZGJeUkMrFAIBAAAAAxM0VGJkZGRkZGRkZGRkZGRkZGRkZGRkX0spDAEAAAABBBQpO05aYWJkZGRkZGRkZGRkYmFaTjspFAQBAAAAAQwoS19kZGRkZGRkZGRkZGRkZGRkZGRkZGNZQB4EAAAAAAECDyI0R1BaYGJiY2NjY2JiYFxQSDQjDwIBAAAAAAQdP1ljZGRkZGRkZGRkZGRkZGRkZGRkZGRkYlI0FQIAAAAAAQMIGCo4RU1SV1xbW1xXUk1FOSoYCAMBAAAAAAcWNFJiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRgTTEUBwAAAAAAAQkOGSUtOD1ERkZEPTgvJhgOCQEAAAAAAAcTME1gZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY15MLxQHAAAAAAABAwcIERccHyIiHxwXEQgHAwEAAAAAAAcTLExeY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRjXUwxFQUBAAAAAAAAAQMGBwIJCQIHBgMBAAAAAAAAAQQWMExdY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGNeTTQeDAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwwdNE1dY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY2BSQCkUBQMAAAAAAAAAAAAAAAAAAAAAAAADBRMpP1JgY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYllLNSQSCAcBAAAAAAAAAAAAAAAAAQcIEiQ0SlliZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRjX1RJNScaDggCBwMBAQEBAwcCCA4aJzVJVF9jZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRiXVZMPjMqIhsUDwsLDxQbIikzPkxWXWJkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRjYVxVT0lBOjc0NDc6QElPVVxhY2RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkY2JgXVxaWVlaXF1gYmNkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    usty: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPjlDMzAwNDI3LTg4Q0QtNDI2RC05QkZELUFEMUU2RUI2RjRDNjwvdGl0bGU+PGRlZnM+PHBhdGggZD0iTTAgNS42MjNBNS42MjMgNS42MjMgMCAwIDEgNS42MjMgMGgxMi43NTRBNS42MjMgNS42MjMgMCAwIDEgMjQgNS42MjN2MTIuNzU0QTUuNjIzIDUuNjIzIDAgMCAxIDE4LjM3NyAyNEg1LjYyM0E1LjYyMyA1LjYyMyAwIDAgMSAwIDE4LjM3N1Y1LjYyM3oiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHVzZSBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZmlsbD0iIzJFQ0M3MSIgbWFzaz0idXJsKCNiKSIgZD0iTTExLjI1IDB2MTQuNjI1SDBWMHoiLz48cGF0aCBmaWxsPSIjRTc0QzNDIiBtYXNrPSJ1cmwoI2IpIiBkPSJNMjQgMHY3Ljg3NUgxMi43NVYweiIvPjxwYXRoIGZpbGw9IiNGMzlDMTIiIG1hc2s9InVybCgjYikiIGQ9Ik0xMS4yNSAxNi4xMjVWMjRIMHYtNy44NzV6Ii8+PHBhdGggZmlsbD0iIzM0OThEQiIgbWFzaz0idXJsKCNiKSIgZD0iTTI0IDkuNTYzdjE0LjYyNEgxMi43NVY5LjU2M3oiLz48L2c+PC9zdmc+"
                }[e]
            }, brand: function (e) {
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
            }, empty: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        }, render: f, getLayouts: h, getEditorThemes: () => Object.keys(g).map(e => ({ name: g[e] || e, value: e }))
    };
    t.a = w
}, function (e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : { default: e }
    };
    Object.defineProperty(t, "__esModule", { value: !0 })
    ;const s = r(n(4)), o = "mtm_visitor", a = "default", i = "pageview", A = "script_update", l = "script",
        c = "cloud", u = "event", d = "pageview", p = "ping", f = "https://a.tampermonkey.net/matomo.php",
        m = window.rea, g = m.FEATURES.HTML5.LOCALSTORAGE;
    let h, R, v, w = !1, b = !1;
    const k = () => ({
        url: f,
        siteId: 5,
        tracker: { [a]: { enabled: O(5, 10) }, [l]: { enabled: !0 }, [c]: { enabled: O(5, .001) } }
    }), _ = () => ({
        url: f,
        siteId: 6,
        tracker: {
            [a]: { enabled: O(6, 50) },
            [l]: { enabled: !0 },
            [A]: { enabled: O(6, 10) },
            [c]: { enabled: O(6, .01) }
        }
    }), y = {
        default: k,
        gcal: k,
        iikm: () => ({
            url: f,
            siteId: 4, tracker: { [a]: { enabled: O(4, 10) }, [l]: { enabled: !0 }, [c]: { enabled: O(4, 5e-4) } }
        }),
        saap: () => ({
            url: f,
            siteId: 7,
            tracker: { [a]: { enabled: !0 }, [A]: { enabled: O(7, 10) }, [c]: { enabled: O(7, .01) } }
        }),
        fire: _,
        firb: _,
        dhdg: () => ({
            url: f,
            siteId: 3,
            tracker: {
                [a]: { enabled: O(3, 1) },
                [l]: { enabled: !0 },
                [A]: { enabled: O(3, 10) },
                [c]: { enabled: O(3, 5e-4) }
            }
        }),
        mfdh: k,
        heif: () => ({
            url: "http://a.userscript.grobilan:8081/matomo.php",
            siteId: 2,
            tracker: { [a]: { enabled: !0 } }
        })
    };
    let E;
    const x = [{ msg: "a disconnected port" }, {
            msg: "Function.prototype.apply: Arguments list has wrong type", url: "event_bindings"
        }, { msg: "Script error." }],
        T = e => [...Array(e)].map(() => Math.floor(16 * Math.random()).toString(16)).join(""), G = e => {
            if (!g) return;
            const t = [e.uuid, e.createTs, e.visitCount, e.currentVisitTs, e.lastVisitTs].join(".");
            g.setItem(o, t)
        }, M = e => {
            const t = e || a, n = E.tracker[t] || E.tracker.default;
            return n.enabled ? { url: E.url, siteId: E.siteId, options: n } : null
        }, S = T(6), U = async (e, t, n) => {
            if (!e) return;
            const r = (() => {
                if (!g) return
                    ;
                const e = g.getItem(o);
                if (!e) return;
                const t = e.split(".");
                if (t.length >= 5) {
                    t.unshift("0");
                    const [e, n, r, s, o, a] = t;
                    return {
                        createdNow: !1,
                        newVisitor: e,
                        uuid: n,
                        createTs: r,
                        visitCount: s,
                        currentVisitTs: o,
                        lastVisitTs: a
                    }
                }
            })() || (() => {
                const e = Math.floor(Date.now() / 1e3).toString(), t = {
                    createdNow: !0,
                    newVisitor: "1",
                    uuid: T(16),
                    createTs: e,
                    visitCount: "0",
                    currentVisitTs: e,
                    lastVisitTs: ""
                };
                return G(t), t
            })();
            let a;
            const i = new Date, A = {
                idsite: e.siteId, rec: 1, action_name: document.title || m.runtime.short_id, url: location.href,
                _id: r.uuid, rand: T(4), apiv: 1, h: i.getHours(), m: i.getMinutes(), s: i.getSeconds(), cookie: 1, pv_id: S
            }, l = {
                ...A,
                _idts: Number(r.createTs),
                _idvc: Number(r.visitCount),
                _viewts: Number(r.lastVisitTs),
                res: `${screen.width}x${screen.height}`
            };
            if (t == d) {
                const e = R ? { gt_ms: R } : {}, t = { ...A, ...l, ...e, new_visit: 1 };
                G((e => {
                    const t = Math.floor(Date.now() / 1e3).toString();
                    return e.newVisitor = "0", e.visitCount = (Number(e.visitCount) + 1).toString(), e.lastVisitTs = e.currentVisitTs, e.currentVisitTs = t, e
                })(r)), a = t
            } else if (t == u) {
                if (!n) return;
                a = { ...A, ca: 1, e_c: n.category, e_a: n.action, e_n: n.name, e_v: n.value }
            } else {
                if (t != p) return;
                a = { ...A, ...l, ping: 1 }
            }
            a = Object.assign(A, a);
            const c = `${e.url}?${s.default.hash2params(a)}`, f = document.createElement("img");
            f.src = c, f.onload = () => {
                document.body.removeChild(f)
            }, f.onerror = () => {
            }, document.body.appendChild(f)
        }, O = (e, t) => {
            let n = 100 * Math.random() < t;
            if (g) try {
                let r, s;
                const o = ["wsr", e, t].join("_"), a = Date.now(), i = 864e7;
                if (r = g.getItem(o)) {
                    try {
                        s = JSON.parse(r)
                    } catch (e) {
                    }
                    (!s || s.ts + i < a) && (s = {
                        ts: a, w: n
                    })
                } else s = { ts: a, w: n };
                n = s.w, g.setItem(o, JSON.stringify(s))
            } catch (e) {
            }
            return n
        }, Z = e => {
            w && (b = e, b ? h && I && (I(), I = void 0) : v && (clearInterval(v), v = void 0))
        };
    let I = () => {
        U(M(i), d), v = window.setInterval(() => U(M(i), p), 6e5)
    };
    const C = (e, t, n) => {
        if (!b || !e.search) return;
        void 0 === t && (t = ""), void 0 === n && (t += " " + window.location.href, n = "");
        let r = !1;
        x.forEach(n => {
            (n.msg || n.url) && (n.msg && -1 == e.indexOf(n.msg) || n.url && -1 == t.indexOf(n.url) || (r = !0))
        }), r || U(M("error"), u, { category: "Error", action: e, name: t + ":" + n })
    }, D = {
        init: (e, t, n) => {
            const r = ((null == n ? void 0 : n.version) || "") + " ";
            E = (y[m.runtime.short_id] || y.default)(), window.onerror = (t, n, s, o, a) => {
                let i = "";
                if (a) try {
                    i = a.stack || ""
                } catch (e) {
                }
                C(t.toString(), r + e + "@" + m.extension.urls.prepareForReport(n || ""), [s + ":" + o, i].join(";"))
            }, document.onsecuritypolicyviolation = t => {
                let n = "";
                if (t) try {
                    n = t.stack
                } catch (e) {
                }
                C("CSP violation of " + t.effectiveDirective, r + e + "@" + m.extension.urls.prepareForReport(t.documentURI), [t.sourceFile, " -> ", t.lineNumber + ":" + t.columnNumber, n].join(";"))
            }, (null == n ? void 0 : n.started) && (R = Date.now() - n.started.getTime()), w = !0, h = !!(null == n ? void 0 : n.trackView), Z(t)
        }, setEnabled: Z, isActive: function (e) {
            return b && !!M(e)
        }, tC: (e, t, n) => {
            if (!b) return;
            let r = "", s = "";
            "init" === t ? (s = "Initialized", r = e) : "error" === t && (s = "Error", r = e + " -> " + n), U(M(c), u, {
                category: "Cloud",
                action: s,
                name: r
            })
        }, tS: (e, t, n, r) => {
            if (!b) return;
            const s = `${e}${n ? ` [${n.token}#${n.id}]` : r ? ` <${r}>` : ""}`;
            let o = "", a = null;
            if ("i" === t) o = "Installed"; else if ("u" === t) o = "Updated", a = M(A); else if ("m" === t) o = "Revealed"; else {
                if ("r" !== t) return;
                o = "Removed"
            }
            U(a || M(l), u, { category: "Script", action: o, name: s })
        }, tE: C, tG: (e, t, n) => {
            if (!b) return;
            let r = "", s = "";
            "clicked" === e ? (s = "Click", r = t + ":" + n) : "button" === e ? (s = "Button", r = t) : "dialog" === e && (s = "Dialog"), U(M("begging"), u, {
                category: "Begging",
                action: s,
                name: r
            })
        }
    };
    t.default = D
}, function (e, t, n) {
    "use strict"
    ;var r = n(3), s = n(5);
    let o;
    const a = e => e && "http" == e.substr(0, 4),
        i = ["internal", "user-agent", "accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"],
        A = { "cache-control": "no-cache", pragma: "no-cache" }, l = { "cache-control": "max-age=0, must-revalidate" },
        c = e => {
            if (e) {
                const t = {}
                ;
                return Object.keys(e).forEach(n => {
                    let r = n, a = e[n];
                    if (o.prefix) A = n.toLowerCase(), (i.includes(A) || 0 === A.indexOf("proxy-") || 0 === A.indexOf("sec-")) && (r = o.prefix + n, a = null === a ? "" : s.default.encodeS(a)); else if (null === a) return;
                    var A;
                    t[r] = a
                }), t
            }
        }, u = e => ({
            responseXML: "",
            responseText: "",
            response: null,
            readyState: 4,
            responseHeaders: "",
            status: 0,
            statusText: "",
            error: e = e || "Forbidden"
        }), d = e => {
            if ("Blob" === e.type) return new Blob([s.default.str2arrbuf(e.value)])
                ;
            if ("File" === e.type) return new File([s.default.str2arrbuf(e.value)], e.name, {
                type: e.meta,
                lastModified: e.lastModified || Date.now()
            });
            if ("FormData" == e.type) {
                const t = new FormData;
                return Object.keys(e.value).forEach(n => {
                    const r = "Array" === e.value[n].type, s = d(e.value[n]), o = r ? s : [s];
                    o.forEach((e, r) => {
                        t.append(n, o[r])
                    })
                }), t
            }
            if ("Array" === e.type || "Object" === e.type) {
                let t, n, r;
                "Object" === e ? (r = Object.keys(e.value), n = e => e < r.length ? r[e] : null, t = {}) : (n = t => t < e.value.length ? t : null, t = [])
                ;
                for (let r, s = 0; null !== (r = n(s)); s++) t[r] = d(e.value[r]);
                return t
            }
            return e.value
        }, p = e => {
            const t = {};
            return e && e.split("\n").forEach(e => {
                const n = e.match(/^([^:]+): ?(.*)/);
                if (n) {
                    const e = n[1].toLowerCase();
                    t[e] = (void 0 !== t[e] ? ", " : "") + (n[2] || "").replace(/,/g, "%2C")
                }
            }), t
        }, f = "tm-finalurl" + rea.runtime.short_id.toLowerCase(), m = "tm-setcookie" + rea.runtime.short_id.toLowerCase();
    var g = (e, t, n, o, a) => {
        const i = e => {
            const t = [];
            let n, r;
            return e.headers && (n = e.headers.get(f) || e.url, e.headers.forEach((e, n) => {
                const r = n.toLowerCase();
                [f, m].includes(r) || t.push(r + ":" + e)
            }), (r = e.headers.get(m)) && t.push("set-cookie:" + r)), {
                readyState: 4,
                responseHeaders: t.join("\n"),
                finalUrl: n,
                status: e.status,
                statusText: e.statusText
            }
        };
        let A, h, R;
        const v = e => {
            e && (R = !0), b ? b.abort() : R ? w() : w({ name: "AbortError", message: "Aborted by user" })
        }, w = e => {
            let t;
            h || (R ? (t = i({
                status: 408,
                statusText: "Request Timeout"
            }), o("ontimeout")) : "AbortError" == e.name ? (t = u("aborted"), o("onabort")) : (t = i({
                status: 408,
                statusText: e.message || "Request Timeout"
            }),
                o("onerror", t)), h = !0, o("ondone", t))
        };
        try {
            const u = {};
            e.user && e.password, u.method = e.method || "GET", u.redirect = "follow";
            let f = c(e.headers);
            e.nocache ? u.cache = "reload" : e.revalidate && (u.cache = "default", f = f || {}, f = { ...f, ...l }), e.anonymous ? u.credentials = "omit" : u.credentials = "include", f && (u.headers = new window.Headers(f)), void 0 !== e.data && ("typified" === e.data_type ? u.body = d(e.data) : "string" == typeof e.data ? u.body = e.data : u.body = JSON.stringify(e.data))
            ;var b = window.AbortController ? new window.AbortController : null;
            b && (u.signal = b.signal), window.fetch(e.url, u).then(l => {
                if (A && (window.clearTimeout(A), A = null), h) return;
                const c = i(l);
                if ((0 !== c.status || c.status < 200 || c.status >= 300) && e.retries > 0) return e.retries--, void g(e, t, n, o, a);
                (() => {
                    let t;
                    return l.ok ? (void 0 !== e.responseType ? (() => {
                        let t;
                        const n = e.responseType ? e.responseType.toLowerCase() : "";
                        return e.convertBinary ? "document" == n ? (t = p(c.responseHeaders)["content-type"] || "text/html",
                            new window.Promise(e => l.text().then(n => {
                                e({ document: n, contentType: t })
                            }))) : "arraybuffer" == n || "blob" == n ? l.arrayBuffer().then(e => s.default.arrbuf2str(e)) : l.text() : "arraybuffer" == e.responseType ? l.arrayBuffer() : "blob" == e.responseType ? l.blob() : "document" == e.responseType ? (t = (p(c.responseHeaders)["content-type"] || "text/xml").split(";")[0], (new window.DOMParser).parseFromString(l.text(), t)) : ("json" == e.responseType || console.warn("xhr: responseType", e.responseType, " is not implemented!"), l.text())
                    })().then(n => {
                        "json" == e.responseType ? c.response = JSON.parse(n) : c.response = n, t()
                    }) : void 0 !== e.overrideMimeType && window.TextDecoder ? l.arrayBuffer().then(n => {
                        const r = e.overrideMimeType.toLowerCase().match(/charset=([^;]+)/)[1];
                        c.response = new window.TextDecoder(r).decode(n), t()
                    }) : l.text().then(e => {
                        c.response = e, t()
                    }), {
                        done: function (e) {
                            t = e
                        }
                    }) : (c.responseXML = null, c.responseText = "", c.response = null, {
                        done: function (e) {
                            e()
                        }
                    })
                })().done(() => {
                    if (e.partialSize && t.onpartial) {
                        const t = e.convertBinary && c.response ? c.response : c.responseText;
                        ["response", "responseText", "responseXML"].forEach(e => {
                            delete c[e]
                        }), t && (t.length > e.partialSize ? (t => {
                            Object(r.splitSlice)(t, parseInt(e.partialSize)).forEach(e => {
                                a("onpartial", { partial: e })
                            })
                        })(t) : c.response_data = t)
                    }
                    o("onload", c), o("ondone", c)
                })
            }).catch(w), void 0 !== e.timeout && (A = setTimeout(() => {
                A = null, v(!0)
            }, e.timeout))
        } catch (e) {
            console.error(e.stack);
            const t = u(e.message);
            o("onerror", t), o("ondone", t)
        }
        return { abort: () => v() }
    }, h = (e, t, n, i, m) => {
        let g, R, v;
        e.anonymous && (g = o.mozAnon ? { mozAnon: !0 } : { anonymous: !0 });
        const w = new XMLHttpRequest(g), b = t => {
            let n = "", r = e.url;
            if (w.readyState >= 2) {
                let e;
                n = w.getAllResponseHeaders(), n && (n = n.replace(/tm-finalurl[0-9a-zA-Z]*\: .*[\r\n]{1,2}/i, ""), n = n.replace(/tm-setcookie[0-9a-zA-Z]*\:/i, "set-cookie:")), (e = w.getResponseHeader(f) || w.responseURL) && (r = e)
            }
            const s = {
                    readyState: w.readyState,
                    responseHeaders: n,
                    finalUrl: r,
                    status: w.readyState >= 2 ? w.status : 0,
                    statusText: w.readyState >= 2 ? w.statusText : ""
                }
            ;
            return t && 4 == w.readyState ? w.responseType ? (s.responseXML = null, s.responseText = null, s.responseType = w.responseType, s.response = w.response) : (s.responseXML = w.responseXML, s.responseText = w.responseText, s.response = w.response) : (s.responseXML = null, s.responseText = "", s.response = null), s
        }, k = {
            onload: function () {
                const o = b(!0);
                if ((0 !== o.status || o.status < 200 || o.status >= 300) && e.retries > 0) return e.retries--, void h(e, t, n, i, m);
                (() => {
                    if (e.convertBinary && o.response) {
                        const e = o.responseType ? o.responseType.toLowerCase() : ""
                        ;
                        if (R && e !== R && console.warn("xhr: requested responseType " + R + " differs from received " + e), "document" == e || "document" == R) if ("string" == typeof o.response) {
                            const e = p(o.responseHeaders)["content-type"] || "text/html";
                            o.response = { document: o.response, contentType: e }
                        } else {
                            const e = o.response, t = e.contentType || "text/html";
                            try {
                                o.response = {
                                    document: (new XMLSerializer).serializeToString(e.documentElement),
                                    contentType: t
                                }
                            } catch (n) {
                                const r = "unable to serialize content type " + t;
                                console.warn("xhr: ", r, e), o.response = {
                                    error: r, contentType: t
                                }
                            }
                        } else if ("json" == e) o.response = JSON.stringify(o.response); else {
                            if ("blob" == e) {
                                let e;
                                const t = new FileReader;
                                return t.onload = () => {
                                    o.response = s.default.arrbuf2str(t.result), e()
                                }, t.readAsArrayBuffer(o.response), {
                                    done: function (t) {
                                        e = t
                                    }
                                }
                            }
                            "arraybuffer" == e && (o.response = s.default.arrbuf2str(o.response))
                        }
                    }
                    return {
                        done: function (e) {
                            e()
                        }
                    }
                })().done(() => {
                    if (e.partialSize && t.onpartial) {
                        const t = e.convertBinary && o.response ? o.response : o.responseText
                        ;["response", "responseText", "responseXML"].forEach(e => {
                            delete o[e]
                        }), t && (t.length > e.partialSize ? (n = t, Object(r.splitSlice)(n, parseInt(e.partialSize)).forEach(e => {
                            m("onpartial", { partial: e })
                        })) : o.response_data = t)
                    }
                    var n;
                    i("onload", o), 4 == o.readyState && i("ondone", o)
                })
            }, onerror: function () {
                const r = b();
                if (4 == r.readyState && 200 != r.status && 0 != r.status && e.retries > 0) return e.retries--, void h(e, t, n, i, m);
                i("onerror", r), i("ondone", r)
            }, onloadstart: function () {
                m("onloadstart", () => b())
            },
            onreadystatechange: function () {
                m("onreadystatechange", () => b())
            }, onprogress: function (e) {
                m("onprogress", () => {
                    const t = b();
                    return y(e, t, t)
                })
            }, ontimeout: function () {
                const e = b();
                i("ontimeout"), i("ondone", e)
            }, onabort: function () {
                const e = u("aborted");
                i("onabort"), i("ondone", e)
            }
        }, _ = 0 == Object.keys(k).concat(["ondone"]).filter(e => !!t[e]).length;
        if (_) throw new Error("Synchronous XHR is not supported anymore");
        var y = (e, t, n) => {
            void 0 === n && (n = {});
            try {
                let r = null, s = null;
                if (e.lengthComputable || e.total > 0) r = e.loaded,
                    s = e.total; else {
                    const n = !w.responseType || ["", "text"].includes(w.responseType) ? w.responseText : null;
                    let o = Number(p(t.responseHeaders)["content-length"] || "");
                    const a = t.readyState > 2 && n ? n.length : 0;
                    0 == o && (o = -1), r = e.loaded || a, s = e.total || o
                }
                n.lengthComputable = e.lengthComputable, n.loaded = r, n.done = r, n.position = r, n.total = s, n.totalSize = s
            } catch (e) {
            }
            return n
        };
        Object.keys(k).forEach(e => {
            (t[e] || ["ontimeout", "onload", "onerror", "onabort"].includes(e)) && (w[e] = k[e])
        });
        try {
            if (!n.internal && !a(e.url)) throw new Error("Invalid scheme of url: " + e.url);
            w.open(e.method || "GET", e.url, !_, e.user, e.password);
            let r = c(e.headers);
            (e.nocache || e.revalidate) && (r = r || {}, e.nocache ? r = { ...r, ...A } : e.revalidate && (r = { ...r, ...l })), r && Object.keys(r).forEach(e => {
                try {
                    w.setRequestHeader(e, r[e])
                } catch (t) {
                    console.warn("xhr: rejected header", e, r[e])
                }
            }), void 0 !== e.overrideMimeType && w.overrideMimeType(e.overrideMimeType), void 0 !== e.responseType && (R = e.responseType.toLowerCase(),
            ["document", "json"].includes(R) || (w.responseType = R)), void 0 !== e.timeout && (w.timeout = e.timeout), void 0 !== e.data ? ("typified" === e.data_type ? w.send(d(e.data)) : "string" == typeof e.data ? w.send(e.data) : w.send(JSON.stringify(e.data)), t.onprogress && w.upload && (w.upload.onprogress = k.onprogress)) : w.send()
        } catch (e) {
            console.error(e.stack);
            const t = u(e.message);
            i("onerror", t), i("ondone", t)
        }
        return v = v || {}, Object(r.copy)({
            abort: function () {
                w.abort()
            }
        }, v)
    };
    const R = {
            run: (e, t, n) => {
                void 0 === n && (n = {});
                const r = {
                    ...t || {}
                }, s = (e, t) => {
                    r[e] && r[e]("function" == typeof t ? t() : t)
                }, i = (e, t) => {
                    r[e] && (s(e, t), r[e] = null)
                };
                if (!n.internal && !a(e.url)) {
                    console.warn("xhr: invalid scheme of url:", e.url);
                    const t = u("Invalid scheme");
                    return i("onerror", t), void i("ondone", t)
                }
                const A = window.fetch && e.url && "http" == e.url.substr(0, 4), l = !o.mozAnon && e.anonymous, c = e.fetch;
                return A && (l || c) ? g(e, r, n, i, s) : h(e, r, n, i, s)
            }, setConfig: function (e) {
                o = e
            }, getConfig: function () {
                return o
            }, makeErrorResponse: u, parseCookie: e => {
                const t = e.split(";").filter(e => "string" == typeof e && !!e.trim()), n = t.shift().split("="),
                    r = n.shift(), s = n.join("="), o = { name: r, value: decodeURIComponent(s) };
                return t.forEach((function (e) {
                    var t = e.split("="), n = t.shift().trimLeft().toLowerCase(), r = t.join("=");
                    if ("expires" === n) {
                        const e = new Date(decodeURIComponent(r));
                        isNaN(e.getTime()) || (o.expires = e)
                    } else "max-age" === n ? o.maxAge = parseInt(r, 10) : "secure" === n ? o.secure = !0 : "httponly" === n ? o.httpOnly = !0 : "samesite" === n ? o.sameSite = r : o[n] = r
                })), o
            }, parseHeaders: p
        }
    ;t.a = R
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "vendor", (function () {
        return d
    })), n.d(t, "getRaw", (function () {
        return f
    })), n.d(t, "require", (function () {
        return p
    })), n.d(t, "get", (function () {
        return g
    }));
    let r = [];
    const s = {}, o = {}, a = (e, t, n) => {
        var a = () => {
            e.every(e => !!i[e]) ? n() : r.push(a)
        };
        (e = "string" == typeof e ? [e] : e).forEach(e => {
            if (void 0 === i[e] && void 0 === s[e]) {
                const n = window.setTimeout(() => {
                    o[e] || (delete s[e], c(e), m(rea.extension.getURL(e + ".js"), () => {
                        t ? u(e, null, {}) : console.log("registry: finished loading " + e + ".js ")
                    }))
                }, 0);
                s[e] = () => {
                    window.clearTimeout(n), delete s[e]
                }
            }
        }), a()
    };
    var i = {};
    const A = {}, l = {}, c = e => {
        o[e] = !0
    }, u = (e, t, n, a) => {
        if (!i[e] || a) {
            let a;
            A[e] = t, i[e] = n, delete o[e], (a = s[e]) && a(), (() => {
                const e = r;
                for (r = []; e.length;) e.pop()()
            })()
        }
    }, d = (e, t) => a(e, !0, t), p = (e, t) => a(e, !1, t), f = (e, t) => {
        let n;
        if (void 0 !== (n = l[e])) t && t(n); else {
            const r = rea.extension.getURL(e);
            try {
                const s = new XMLHttpRequest;
                if (XMLHttpRequest.onlyasync) {
                    if (!t) return void console.warn("registry: async xhr without a callback!");
                    s.open("GET", r), s.onload = () => {
                        t(s.responseText)
                    }, s.onerror = () => {
                        t()
                    }, s.send(null)
                } else s.open("GET", r, !1), s.send(null), n = s.responseText, n || console.warn("registry: content of " + e + " is null!"), t && t(n)
            } catch (e) {
                console.log("getRawContent " + e)
            }
        }
        return n
    }, m = (e, t) => {
        let n = 1;
        const r = () => {
            0 == --n && t && t()
        };
        (e = "string" == typeof e ? [e] : e).forEach(e => {
            n++;
            try {
                rea.page.addScript(e, t => {
                    t || console.warn("registry: self.load " + e + " failed! "),
                        r()
                })
            } catch (t) {
                console.warn("registry: self.load " + e + " failed! ", t), r()
            }
        }), r()
    }, g = (e, ...t) => {
        let n;
        const r = i[e];
        return "function" == typeof r ? n = r.apply(void 0, t) : r && (n = r), n
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1), s = n(4), o = n(3), a = n(5), i = n(8), A = n(10), l = n.n(A), c = n(11);
    const u = rea.FEATURES;
    let d, p;
    const f = i.a.createQueue(1), m = e => {
        const t = Object(r.Deferred)();
        return a.default.blob2str(e, (e, n) => {
            n ? t.reject(n) : t.resolve(e)
        }), t.promise()
    }, g = e => r.Deferred.Breach(e ? e.responseText || e.statusText : null), h = (e, t) => {
        const n = (e ? e.split("/") : []).concat(t ? [t] : []).join("/");
        return n ? ("/" == n.substr(0, 1) ? "" : "/") + n : ""
    }, R = function (e) {
        let t = {
            type: e, extend: function (e) {
                return t = ((e, t) => (t = new t(e), Object.keys(e).forEach(n => {
                    const r = Object.getOwnPropertyDescriptor(e, n);
                    if (r.get) {
                        const e = { get: r.get, enumerable: !0 };
                        r.set && (e.set = r.set), Object.defineProperty(t, n, e)
                    } else t[n] = t[n] || e[n]
                }), Object.keys(t).forEach(n => {
                    const r = Object.getOwnPropertyDescriptor(t, n);
                    r.get || r.set || (e[n] = e[n] || t[n])
                }), e.config = t.config = { ...e.config || {}, ...t.config || {} }, t))(t, e)
            }, request: function (e) {
                const t = () => {
                    const t = Object(r.Deferred)(), n = e => {
                        console.log("rest service: request failed", e), t.reject(e)
                    }, s = "xml" === e.responseType, o = "headers" === e.responseType;
                    return (s || o) && delete e.responseType, d(e, {
                        onload: function (r) {
                            if ([200, 201, 204, 207].includes(r.status)) {
                                if (s) if (e.anonymous || e.fetch) {
                                    const e = new window.DOMParser
                                    ;r.result = e.parseFromString(r.responseText, "text/xml")
                                } else r.result = r.responseXML; else r.result = o ? c.a.parseHeaders(r.responseHeaders) : r.response;
                                t.resolve(r)
                            } else n(r)
                        }, onerror: n, ontimeout: n, onprogress: t.notify
                    }, { internal: !0 }), t.promise()
                };
                return e.no_queue ? t() : f.add(t)
            }, error: function (t) {
                let n = t.status;
                try {
                    n = n + " | " + t.responseText
                } catch (e) {
                }
                l.a.tC(e, "error", "request: " + n)
            }, wait: function (e) {
                return function () {
                    return e.apply(this, arguments).then(e => e, e => g(e))
                }
            }
        };
        return t
    }, v = function (e) {
        const t = e.type;
        let n, a = [], i = null;
        const A = {
            config: { auth_prefix: "Bearer" }, changes: (() => {
                let e;
                return {
                    listen: function () {
                        return e || (e = Object(r.Deferred)(), A.watch && A.watch.start()), e.promise()
                    }, notify: function (t) {
                        e.notify(t)
                    }
                }
            })(), request: function (t) {
                return t.no_auth || (t.headers = t.headers || {}, t.headers.Authorization = A.config.auth_prefix + " " + A.credentials.access_token), e.request(t)
            }, oauth: (() => {
                let e;
                const a = {
                    run: function () {
                        if (n) return n;
                        let s = Object(r.Deferred)();
                        const i = n = s.promise()
                        ;e = "!!" + t + "-" + Object(o.createUUID)();
                        let c = A.credentials ? A.credentials.refresh_token : null;
                        const f = (e, t) => {
                            A.credentials = t, s.resolve(), s = null, e && e.close()
                        };
                        return (() => {
                            if (!A.config.refresh_supported || !c) return r.Deferred.Pledge();
                            const e = Object(r.Deferred)(), n = () => {
                                c = null, delete A.credentials.refresh_token
                            };
                            return d({ url: a.getRefreshUrl(c), fetch: !u.RUNTIME.SAFARI }, {
                                onload: function (e) {
                                    const r = a.onUrl(e.finalUrl)
                                    ;r && (r.error || !r.access_token ? (l.a.tC(t, "error", "auth refresh token: " + (r.error || "!access_token")), n()) : f(null, r))
                                }, onerror: n, ondone: e.resolve
                            }), e.promise()
                        })().then(() => {
                            if (!s) return;
                            if (!A.config.refresh_supported) return r.Deferred.Pledge();
                            const e = Object(r.Deferred)(), n = p({ url: a.getRefreshUrl() });
                            return n.promise.progress(e => {
                                let r;
                                s && (r = a.onUrl(e.url)) && (r.error || !r.access_token ? (l.a.tC(t, "error", "auth refresh: " + (r.error || "!access_token")), A.config.refresh_supported = !1) : f(n, r))
                            }).always(e.resolve), e.promise()
                        }).then(() => {
                            if (!s) return;
                            const e = Object(r.Deferred)(), n = p({ url: a.getAuthUrl() });
                            return n.promise.progress(e => {
                                let r;
                                s && (r = a.onUrl(e.url)) && (r.error || !r.access_token ? l.a.tC(t, "error", "auth: " + (r.error || "!access_token")) : f(n, r))
                            }).always(e.resolve), e.promise()
                        }).done(() => {
                            n = null, s && s.reject("auth_failed")
                        }), i
                    }, getAuthUrl: function () {
                        return A.config.request_uri + "?" + s.default.hash2params({
                            response_type: A.config.response_type, client_id: A.config.client_id,
                            redirect_uri: A.config.redirect_uri, state: e, scope: A.config.scope
                        })
                    }, getRefreshUrl: function (t) {
                        const n = {
                            client_id: A.config.client_id,
                            redirect_uri: A.config.redirect_uri,
                            state: e,
                            scope: A.config.scope,
                            refresh_token: t
                        };
                        return A.config.redirect_uri + "?" + s.default.hash2params(n)
                    }, onUrl: function (t) {
                        let n, r;
                        if (t && 0 === t.indexOf(A.config.redirect_uri) && (r = s.default.parse(t)) && (n = s.default.params2hash(r)) && (n.access_token || n.error) && n.state === e) return {
                            uid: n.uid, access_token: n.access_token,
                            refresh_token: n.refresh_token, error: n.error
                        }
                    }
                };
                return a
            })(), wait: function (t) {
                return e.wait((function () {
                    if (A.credentials.access_token) return t.apply(this, arguments);
                    {
                        const e = arguments, n = Object(r.Deferred)();
                        return a.push((function () {
                            n.consume(t.apply(this, e))
                        })), A.oauth.run().done(() => {
                            a.forEach(e => {
                                e()
                            }), a = []
                        }).fail(e => {
                            n.reject(e)
                        }), n.promise()
                    }
                }))
            }
        }, c = u.HTML5.LOCALSTORAGE;
        return Object.defineProperty(A, "credentials", {
            get: function () {
                if (null === i) {
                    if (l.a.tC(t, "init"), c) try {
                        const e = JSON.parse(c.getItem(A.config.storage_key));
                        i = { uid: e.uid, access_token: e.access_token, refresh_token: e.refresh_token }
                    } catch (e) {
                    }
                    i = i || {}
                }
                return i
            }, set: function (e) {
                if (c) try {
                    c.setItem(A.config.storage_key, JSON.stringify({
                        uid: e.uid,
                        access_token: e.access_token,
                        refresh_token: e.refresh_token
                    }))
                } catch (e) {
                }
                i = e
            }, enumerable: !0
        }), A
    }, w = function (e) {
        const t = e.type;
        let n = null;
        const s = {
            config: {}, changes: (() => {
                let e;
                return {
                    listen: function () {
                        return e || (e = Object(r.Deferred)(), s.watch && s.watch.start()),
                            e.promise()
                    }, notify: function (t) {
                        e.notify(t)
                    }
                }
            })(), request: function (t) {
                return s.credentials.basic_auth ? (t.no_auth || (t.headers = t.headers || {}, t.headers.Authorization = "Basic " + s.credentials.basic_auth), e.request(t)) : r.Deferred.Breach("Authentication failed")
            }, wait: function (t) {
                return e.wait((function () {
                    return t.apply(this, arguments)
                }))
            }
        };
        return Object.defineProperty(s, "credentials", {
            get: function () {
                return null === n && (l.a.tC(t, "init"), n = { basic_auth: s.config.basic_auth }), n
            }, set: function (e) {
                n = e
            },
            enumerable: !0
        }), s
    }, b = function (e) {
        let t, n, a, A, l, c, u, d, p, f = null, m = null;
        const g = e => {
            let t;
            return e && (t = e.firstChild.nextSibling ? e.firstChild.nextSibling : e.firstChild), t
        }, R = t => e.wait((function () {
            const e = arguments;
            return _.init().then((function () {
                return t.apply(this, e)
            }))
        })), v = (e, t) => {
            let n, r;
            if ((n = e.getElementsByTagNameNS("*", t)[0]) && (r = n.firstChild)) return r.nodeValue
        }, w = e => {
            const r = [], s = e.getElementsByTagNameNS("*", "response");
            for (let e = 0; e < s.length; e++) {
                const i = s[e];
                let A = v(i, "href")
                ;A = A.replace(/\/$/, "");
                const l = i.getElementsByTagNameNS("*", "propstat")[0].getElementsByTagNameNS("*", "prop")[0],
                    c = v(l, "getlastmodified"), u = v(l, "getetag"), d = v(l, "getcontentlength"),
                    p = l.getElementsByTagNameNS("*", "resourcetype")[0].getElementsByTagNameNS("*", "collection")[0],
                    f = A.replace(new RegExp("^(" + [Object(o.escapeForRegExpURL)(n + t) + "/?", Object(o.escapeForRegExpURL)(a + t) + "/?"].join("|") + ")"), "");
                if (p) ; else {
                    const e = {
                        etag: u, name: f, modifiedTime: c ? new Date(c).getTime() : void 0, size: d >= 0 ? d : void 0,
                        removed: -1 == d
                    };
                    r.push(e)
                }
            }
            return r
        }, b = e => v(e, "td:cursor"), k = (e, t) => ((t = t || {}).set_current_list && (l = {}), _.request({
            method: "PROPFIND",
            url: e,
            headers: { "Content-Type": "text/xml; charset=UTF-8", Depth: void 0 !== t.depth ? t.depth : 1 },
            responseType: "xml"
        }).then(e => {
            const n = e.result;
            let s;
            if (null === n || !(s = g(n)) || !s.childNodes) return r.Deferred.Breach();
            const o = w(s);
            if (t.set_current_list) {
                const e = b(s);
                e && (c = e), o.forEach(e => {
                    l[e.name] = e
                })
            }
            return o
        }));
        var _ = {
            config: { watch_interval: 36e5 }, request: function (t) {
                return t.headers = t.headers || {}, t.headers["User-Agent"] = "Tampermonkey", t.headers.Cookie = "", e.request.apply(this, arguments).then(e => e, e => !e || [403, 500].includes(e.status) ? (t.backoff = 2 * (t.backoff || 1e3), i.a.sleep(t.backoff).then(() => _.request(t))) : 404 == e.status ? r.Deferred.Pledge(e) : (_.error(e), r.Deferred.Breach(e)))
            }, init: function () {
                if (A) return A;
                t = h(_.config.root, _.config.path), n = _.config.url || "", "/" == n.slice(-1) && (n = n.slice(0, -1)), a = s.default.parse(n).pathname, "/" == a.slice(-1) && (a = a.slice(0, -1))
                ;const e = Object(r.Deferred)();
                A = e.promise();
                const o = n + t;
                return _.request({ method: "OPTIONS", url: n, responseType: "headers" }).done(e => {
                    const t = e.result;
                    let n;
                    t && (n = t["access-control-allow-methods"]) && n.includes("EDITOR") && (p = !0)
                }).always(() => {
                    k(o, { depth: 0 }).done(e.resolve).fail(() => {
                        const s = [];
                        r.Deferred.onebyone(t.split("/").filter(e => e).map(e => {
                            s.push(e);
                            const t = s.join("/");
                            return () => _.request({
                                method: "MKCOL",
                                url: n + "/" + t,
                                headers: { "Content-Type": "text/xml; charset=UTF-8" },
                                responseType: "xml"
                            })
                        })).done(e.resolve).fail(e.reject)
                    })
                }), A
            }, list: R(e => k(n + t, { set_current_list: !0 }).then(t => {
                const n = {};
                return t.map(t => {
                    if (!e) {
                        if (n[t.name]) return;
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
                }).filter(e => e)
            })), get: R(e => {
                const r = e.name || e;
                return _.request({
                    method: "GET",
                    url: n + h(t, r),
                    headers: { "Content-Type": "text/xml; charset=UTF-8" },
                    responseType: "arraybuffer"
                }).then(e => {
                    const t = e.result
                    ;
                    return new Blob([t])
                })
            }), put: R((e, r, s) => {
                const o = e.name || e;
                let a, i, A;
                const l = { "Content-Type": "application/octet-stream" }, c = null === m;
                return s && s.lastModified && (a = s.lastModified, A = new Date(s.lastModified).toISOString(), i = s.lastModified / 1e3, (m || c) && (l["X-OC-Mtime"] = i)), _.request({
                    method: "PUT",
                    url: n + h(t, o),
                    headers: l,
                    data_type: "typified",
                    data: { type: "raw", value: r },
                    responseType: "headers"
                }).then(e => {
                    const r = e.result;
                    if (r && c) {
                        let e
                        ;m = !("accepted" != r["x-oc-mtime"] && (!r.date || !(e = new Date(r.date).getTime()) || e != a && e != Math.floor(i)))
                    }
                    if (!m && !f && A) return _.request({
                        method: "PROPPATCH",
                        url: n + h(t, o),
                        headers: { "Content-Type": "text/xml; charset=UTF-8" },
                        responseType: "xml",
                        data: [`<?xml version="1.0"?>\n                            <d:propertyupdate xmlns:d="DAV:">\n                                <d:set>\n                                    <d:prop>\n                                        <d:getlastmodified>${A}</d:getlastmodified>\n                                    </d:prop>\n                                </d:set>\n                            </d:propertyupdate>`].join("")
                    }).then(e => {
                        const t = e.result;
                        let n, r, s
                        ;t && (n = t.childNodes[0]) && (r = n.getElementsByTagNameNS("*", "status")[0]) && (s = r.firstChild.nodeValue) && -1 != s.search(/HTTP\/[0-9\.]+ 403/) && (console.warn("WebDAV: no way to set file modification date! This might cause redundant up and downloads."), f = !0)
                    }, () => {
                        console.warn("WebDAV: no way to set file modification date! This might cause redundant up and downloads."), f = !0
                    })
                })
            }), delete: R(e => {
                const r = e.name || e;
                return _.request({
                    method: "DELETE", url: n + h(t, r), headers: {
                        "Content-Type": "text/xml; charset=UTF-8"
                    }
                })
            }), watch: {
                start: function () {
                    if (u) return;
                    u = !0;
                    let s = null;
                    const o = () => {
                        if (d = null, u) if (!1 === s) {
                            const r = l;
                            k(n + t, { set_current_list: !0 }).then(() => {
                                r && (Object.keys(r).forEach(t => {
                                    const n = l[t], s = r[t];
                                    n ? s.modifiedTime != n.modifiedTime && e.changes.notify({
                                        time: n.modifiedTime,
                                        name: n.name
                                    }) : e.changes.notify({ time: Date.now(), name: s.name, removed: !0 })
                                }), Object.keys(l).forEach(t => {
                                    if (!r[t]) {
                                        const n = l[t];
                                        e.changes.notify({ time: n.modifiedTime, name: n.name })
                                    }
                                }))
                            }).fail(e => {
                                console.warn("WebDAV: file changes check failed", e)
                            }).always(() => {
                                d = window.setTimeout(o, _.config.watch_interval)
                            })
                        } else {
                            let a = 100;
                            ((e, t) => {
                                const n = { "Content-Type": "text/xml; charset=UTF-8", Depth: 1, Timeout: 90 };
                                return t && (n.Cursor = t), _.request({
                                    method: "SUBSCRIBE",
                                    url: e,
                                    headers: n,
                                    responseType: "xml",
                                    no_queue: !0
                                }).then(e => {
                                    const t = e.result;
                                    let n;
                                    return null === t ? r.Deferred.Pledge({
                                        changes: [],
                                        cursor: c
                                    }) : (n = g(t)) && n.childNodes ? {
                                        changes: w(n),
                                        cursor: b(n)
                                    } : r.Deferred.Breach()
                                })
                            })(n + t, c).then(t => {
                                const n = t.changes;
                                c = t.cursor, a = 1, n.forEach(t => {
                                    e.changes.notify({ time: t.modifiedTime, name: t.name, removed: t.removed })
                                })
                            }, () => {
                                if (null !== s) return a *= 2, i.a.sleep(a);
                                s = !1
                            }).always(o)
                        }
                    };
                    R(() => u ? (o(), r.Deferred.Pledge()) : r.Deferred.Breach())()
                }, stop: function () {
                    u = !1, d && (window.clearTimeout(d), d = null)
                }
            }, getRemoteUrl: function (e) {
                if (p) return n + h(t, e) + "?method=editor#bypass=true"
            }, getRemoteDomains: function () {
                return [s.default.parse(n).origin.replace(/^.*:\/\//, "")]
            }
        };
        return _
    }, k = {
        init: function (e) {
            p = e,
                d = c.a.run
        }, drive: function () {
            let e, t;
            return (e = u.HTML5.LOCALSTORAGE) && (t = e.getItem("dropbox_poll_interval")) || (t = 18e5), new R("drive").extend(v).extend((function (e) {
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
                    }, request: function (t) {
                        return e.request.apply(this, arguments).then(e => e, e => {
                            if (!e || [403, 500].includes(e.status)) return t.backoff = 2 * (t.backoff || 1e3), i.a.sleep(t.backoff).then(() => c.request(t));
                            if ([400, 401].includes(e.status)) {
                                if (console.warn("Google Drive: authentication error", e), delete c.credentials.access_token, !t.retry_auth) return t.retry_auth = !0, c.oauth.run().then(() => c.request(t))
                            } else if (404 == e.status) return r.Deferred.Pledge(e);
                            return c.error(e), r.Deferred.Breach(e)
                        })
                    }, list: e.wait(e => {
                        let t = [];
                        const o = Object(r.Deferred)(),
                            a = e => "https://www.googleapis.com/drive/v3/files?" + s.default.hash2params({
                                spaces: n,
                                pageToken: e,
                                orderBy: "modifiedTime desc",
                                fields: "nextPageToken, files(id, size, name, modifiedTime, md5Checksum)",
                                pageSize: 500
                            }), i = e => c.request({
                                method: "GET",
                                url: e,
                                headers: { "Content-Type": "application/json" }
                            }).then(e => {
                                const n = e.result, r = n ? JSON.parse(n) : { files: [] }
                                ;
                                if (t = t.concat(r.files), r.nextPageToken) return i(a(r.nextPageToken));
                                o.resolve(t)
                            });
                        return i(a()), o.promise().then(t => {
                            const n = {};
                            return t.map(t => {
                                if (!e) {
                                    if (n[t.name]) return;
                                    n[t.name] = !0
                                }
                                return {
                                    name: t.name,
                                    size: t.size || 0,
                                    id: t.id,
                                    md5: t.md5Checksum,
                                    modified: new Date(t.modifiedTime).getTime()
                                }
                            }).filter(e => e)
                        })
                    }), get: e.wait(e => {
                        const t = e.id || e;
                        return c.request({
                            method: "GET",
                            url: "https://www.googleapis.com/drive/v3/files/" + t + "?" + s.default.hash2params({
                                spaces: n,
                                alt: "media"
                            }),
                            responseType: "arraybuffer"
                        }).then(e => {
                            const t = e.result;
                            return new Blob([t])
                        })
                    }), put: e.wait((e, t, i) => {
                        const A = e.name || e, l = e.id, u = Object(o.createUUID)();
                        return r.Deferred.Pledge().then(() => {
                            if (t) return m(t)
                        }).then(e => {
                            const t = i && i.lastModified ? new Date(i.lastModified).toISOString() : void 0, r = [];
                            return r.push("--" + u), r.push("Content-Type: application/json"), r.push(""), r.push(JSON.stringify({
                                name: A,
                                parents: l ? void 0 : [n],
                                modifiedTime: t
                            })), r.push("--" + u), e && (r.push("Content-Type: application/octet-stream"),
                                r.push("Content-Transfer-Encoding: base64"), r.push(""), r.push(a.default.Base64.encode(e)), r.push("--" + u + "--")), r.push(""), c.request({
                                method: l || !e ? "PATCH" : "POST",
                                url: "https://www.googleapis.com/" + (e ? "upload/" : "") + "drive/v3/files" + (l ? "/" + l : "") + "?" + s.default.hash2params({ uploadType: "multipart" }),
                                headers: { "Content-Type": "multipart/related; boundary=" + u },
                                data: r.join("\r\n")
                            })
                        })
                    }), delete: e.wait(e => {
                        const t = e.id || e;
                        return c.request({
                            method: "DELETE",
                            url: "https://www.googleapis.com/drive/v3/files/" + t + "?" + s.default.hash2params({ spaces: n }),
                            headers: { "Content-Type": " application/json" }
                        })
                    }), revoke: e.wait(() => {
                        const t = c.credentials.access_token;
                        return t ? e.request({
                            method: "GET",
                            url: "https://accounts.google.com/o/oauth2/revoke?" + s.default.hash2params({ token: t })
                        }) : r.Deferred.Breach()
                    }), compare: function (e, t) {
                        const n = Object(r.Deferred)();
                        let s;
                        return (s = e.md5) && s == a.default.MD5(t, "utf-8") ? n.resolve(!0) : n.resolve(!1), n.promise()
                    }, watch: {
                        start: function () {
                            if (A) return;
                            let t;
                            A = !0;
                            const n = () => {
                                l = null, A && c.request({
                                    method: "GET",
                                    url: "https://www.googleapis.com/drive/v3/changes/?" + s.default.hash2params({
                                        pageToken: t,
                                        spaces: "appDataFolder",
                                        pageSize: 1e3,
                                        includeRemoved: !0
                                    }),
                                    headers: { "Content-Type": " application/json" }
                                }).then(n => {
                                    const s = n.result;
                                    if (!A) return r.Deferred.Breach();
                                    const o = s ? JSON.parse(s) : {};
                                    if (!(t = o.newStartPageToken)) return console.warn("Google Drive: watch token error", s), c.watch.stop()
                                        ;
                                    o.nextPageToken && console.warn("Google Drive: too much changes", s), (o.changes || []).forEach(t => {
                                        let n, r;
                                        "file" === t.type && (r = t.file) && (n = Date.parse(t.time), isNaN(n) && (n = Date.now()), e.changes.notify({
                                            id: r.id,
                                            time: n,
                                            name: r.name,
                                            removed: t.removed
                                        }))
                                    })
                                }).fail(e => {
                                    console.warn("Google Drive: file changes check failed", e)
                                }).always(() => {
                                    l = window.setTimeout(n, c.config.watch_interval)
                                })
                            };
                            e.wait(() => A ? c.request({
                                method: "GET",
                                url: "https://www.googleapis.com/drive/v3/changes/startPageToken",
                                headers: {
                                    "Content-Type": " application/json"
                                }
                            }).then(e => {
                                const r = e.result, s = r ? JSON.parse(r) : {};
                                if (!(t = s.startPageToken)) return console.warn("Google Drive: watch token error", r), c.watch.stop();
                                n()
                            }) : r.Deferred.Breach())()
                        }, stop: function () {
                            A = !1, l && (window.clearTimeout(l), l = null)
                        }
                    }
                };
                return c
            }))
        }, dropbox: function (e) {
            const t = e.path || "";
            let n, s;
            return (n = u.HTML5.LOCALSTORAGE) && (s = n.getItem("dropbox_poll_interval")) || (s = 18e5), new R("dropbox").extend(v).extend((function (e) {
                let n, o, A, l, c = !0;
                const u = e => {
                    let n = []
                    ;const s = Object(r.Deferred)(), o = e => d.request({
                        method: "POST",
                        url: "https://api.dropboxapi.com/2/files/list_folder" + (e ? "/continue" : ""),
                        headers: { "Content-Type": " application/json" },
                        data: { path: e ? void 0 : h(t), cursor: e }
                    }).then(e => {
                        const t = e.result, r = t ? JSON.parse(t) : { entries: [] };
                        if (n = n.concat(r.entries), r.has_more && r.cursor) return o(r.cursor);
                        s.resolve({ list: n, cursor: r.cursor })
                    }).fail(s.reject);
                    return c ? (c = !1, d.put(".version", new Blob([rea.extension.manifest.version])).then(() => {
                        o(e)
                    }).fail(s.reject)) : o(e), s.promise()
                };
                var d = {
                    config: {
                        redirect_uri: "https://auth.tampermonkey.net/oauth.php",
                        request_uri: "https://www.dropbox.com/oauth2/authorize",
                        client_id: "gq3auc9yym0e21y",
                        storage_key: "db_config",
                        response_type: "token",
                        watch_interval: s
                    }, request: function (t) {
                        return e.request.apply(this, arguments).then(e => e, e => !e || [500, 429].includes(e.status) ? (t.backoff = 2 * (t.backoff || 1e3),
                            i.a.sleep(t.backoff).then(() => d.request(t))) : [401].includes(e.status) && (console.warn("Dropbox: authentication error", e), delete d.credentials.access_token, !t.retry_auth) ? (t.retry_auth = !0, d.oauth.run().then(() => d.request(t))) : (d.error(e), r.Deferred.Breach(e)))
                    }, list: e.wait(e => u().then(t => {
                        const n = {};
                        return l = t.cursor, t.list.map(t => {
                            if (!e) {
                                if (n[t.name]) return;
                                n[t.name] = !0
                            }
                            return {
                                name: t.name,
                                size: t.size,
                                dropbox_hash: t.content_hash,
                                modified: new Date(t.client_modified).getTime(),
                                precision: 1e3
                            }
                        }).filter(e => e)
                    }).always(() => {
                        A && l && (A(), A = null)
                    })), get: e.wait(e => {
                        const n = e.name || e;
                        return d.request({
                            method: "POST",
                            url: "https://content.dropboxapi.com/2/files/download",
                            headers: { "Dropbox-API-Arg": JSON.stringify({ path: h(t, n) }) },
                            responseType: "arraybuffer"
                        }).then(e => {
                            const t = e.result;
                            return new Blob([t])
                        })
                    }), put: e.wait((e, n, r) => {
                        const s = e.name || e,
                            o = r && r.lastModified ? new Date(r.lastModified).toISOString().match(/[^:]*:[^:]*:[^:.a-zA_Z]*/)[0] + "Z" : void 0;
                        return d.request({
                            method: "POST",
                            url: "https://content.dropboxapi.com/2/files/upload",
                            headers: {
                                "Dropbox-API-Arg": JSON.stringify({
                                    path: h(t, s),
                                    client_modified: o,
                                    mode: "overwrite"
                                }), "Content-Type": "application/octet-stream"
                            },
                            data_type: "typified",
                            data: { type: "raw", value: n }
                        })
                    }), delete: e.wait(e => {
                        const n = e.name || e;
                        return d.request({
                            method: "POST",
                            url: "https://api.dropboxapi.com/2/files/delete",
                            headers: { "Content-Type": " application/json" },
                            data: { path: h(t, n) }
                        })
                    }), compare: function (e, t) {
                        const n = Object(r.Deferred)()
                        ;
                        if (window.crypto && window.ArrayBuffer) {
                            const r = 4194304, s = a.default.str2arrbuf(t, "utf-8"), o = [], i = s.byteLength;
                            let A = 1;
                            const l = (e, t) => {
                                const n = new Uint8Array(e.byteLength + t.byteLength);
                                return n.set(new Uint8Array(e), 0), n.set(new Uint8Array(t), e.byteLength), n.buffer
                            }, c = () => {
                                if (0 == --A) {
                                    let t = new window.ArrayBuffer;
                                    o.forEach(e => {
                                        t = l(t, e)
                                    }), window.crypto.subtle.digest("SHA-256", t).then(t => {
                                        const r = Array.from(new Uint8Array(t)).map(e => ("00" + e.toString(16)).slice(-2)).join("")
                                        ;n.resolve(r == e.dropbox_hash)
                                    })
                                }
                            };
                            for (let e = 0, t = 0; t < i; t += r, e++) (e => {
                                o.push(null), A++, window.crypto.subtle.digest("SHA-256", s.slice(t, t + Math.min(r, i - t))).then(t => {
                                    o[e] = t, c()
                                }, () => {
                                    console.warn("Dropbox: unable to calculate SHA-256 hashes"), n.reject()
                                })
                            })(e);
                            c()
                        } else console.warn("Dropbox: unable to calculate SHA-256 hashes"), n.reject();
                        return n.promise()
                    }, watch: {
                        start: function () {
                            if (n) return;
                            n = !0;
                            let t = 0;
                            const s = () => {
                                if (o = null, t = 0, n) return l ? void d.request({
                                    method: "POST",
                                    url: "https://notify.dropboxapi.com/2/files/list_folder/longpoll",
                                    headers: { "Content-Type": " application/json" },
                                    no_auth: !0,
                                    no_queue: !0,
                                    data: { cursor: l, timeout: 180 }
                                }).then(e => {
                                    const s = e.result;
                                    if (!n) return r.Deferred.Breach();
                                    const o = s ? JSON.parse(s) : {};
                                    return o.backoff && (t = 1e3 * o.backoff), o.changes ? i.a.sleep(6e4).then(() => u(l)).then(e => (l = e.cursor) ? e.list : (console.warn("Dropbox: watch token error", s), d.watch.stop())) : null
                                }).then(t => {
                                    t && t.forEach(t => {
                                        let n;
                                        const r = t[".tag"]
                                        ;["file", "deleted"].includes(r) && (n = Date.parse(t.server_modified), e.changes.notify({
                                            id: t.id,
                                            time: n,
                                            name: t.name,
                                            removed: "deleted" == r
                                        }))
                                    })
                                }).fail(e => {
                                    console.warn("Dropbox: file changes check failed", e)
                                }).always(() => {
                                    o = window.setTimeout(s, t + d.config.watch_interval)
                                }) : (console.warn("Dropbox: watch token error", l), d.watch.stop())
                            };
                            e.wait(() => n ? (l ? s() : A = s, r.Deferred.Pledge()) : r.Deferred.Breach())()
                        }, stop: function () {
                            n = !1, o && (window.clearTimeout(o), o = null)
                        }
                    }, getRemoteDomains: function () {
                        return ["dropbox.com", "dropboxapi.com"]
                    }
                };
                return d
            }))
        }, onedrive: function (e) {
            const t = e.path || "";
            let n, s, o;
            return (n = u.HTML5.LOCALSTORAGE) && (s = n.getItem("onedrive_poll_interval")) || (s = 18e5), new R("onedrive").extend(v).extend((function (e) {
                let n, a;
                const A = e => {
                    const n = Object(r.Deferred)();
                    let s = [];
                    const a = r => l.request({
                        method: "GET",
                        url: r || "https://api.onedrive.com/v1.0/drive/special/approot:" + h(t) + ":/children",
                        headers: { "Content-Type": " application/json" }
                    }).then(t => {
                        const r = t.result, i = r ? JSON.parse(r) : {
                            value: []
                        };
                        if (s = s.concat(i.value.map(e => {
                            const t = (e.fileSystemInfo ? e.fileSystemInfo.lastModifiedDateTime : null) || e.lastModifiedDateTime,
                                n = e.file && e.file.hashes ? e.file.hashes.sha1Hash : void 0;
                            return { id: e.id, name: e.name, size: e.size, sha1: n, modified: new Date(t).getTime() }
                        })), i["@odata.nextLink"]) return a(i["@odata.nextLink"]);
                        e.set_current_list && (o = s), n.resolve(s)
                    });
                    return a(), n.promise()
                };
                var l = {
                    config: {
                        redirect_uri: "https://auth.tampermonkey.net/oauth.php",
                        request_uri: "https://login.live.com/oauth20_authorize.srf",
                        client_id: "000000004C1A3122",
                        storage_key: "od_config",
                        response_type: "token",
                        scope: "onedrive.appfolder",
                        watch_interval: s
                    }, getRemoteDomains: function () {
                        return ["onedrive.live.com"]
                    }, request: function (t) {
                        return e.request.apply(this, arguments).then(e => e, e => {
                            if (!e || [403, 500].includes(e.status)) return t.backoff = 2 * (t.backoff || 1e3), i.a.sleep(t.backoff).then(() => l.request(t));
                            if ([401].includes(e.status)) {
                                if (console.warn("OneDrive: authentication error", e), delete l.credentials.access_token, !t.retry_auth) return t.retry_auth = !0, l.oauth.run().then(() => l.request(t))
                            } else if (404 == e.status) return r.Deferred.Pledge(e);
                            return l.error(e), r.Deferred.Breach(e)
                        })
                    }, list: e.wait(() => A({ set_current_list: !0 })), get: e.wait(e => {
                        const n = e.name || e;
                        return l.request({
                            method: "GET",
                            url: "https://api.onedrive.com/v1.0/drive/special/approot:" + h(t, encodeURIComponent(n)) + ":/content",
                            responseType: "arraybuffer"
                        }).then(e => {
                            const t = e.result;
                            return new Blob([t])
                        })
                    }), put: e.wait((e, n, r) => {
                        const s = e.name || e, o = encodeURIComponent(s.replace(/[#%<>:"|\?\*\/\\]/g, "-"));
                        return l.request({
                            method: "PUT",
                            url: "https://api.onedrive.com/v1.0/drive/special/approot:" + h(t, o) + ":/content",
                            headers: { "Content-Type": "application/octet-stream" },
                            data_type: "typified",
                            data: { type: "raw", value: n }
                        }).then(e => {
                            const t = r && r.lastModified ? new Date(r.lastModified).toISOString() : void 0;
                            if (!t) return e;
                            const n = e.result, s = JSON.parse(n);
                            return l.request({
                                method: "PATCH",
                                url: "https://api.onedrive.com/v1.0/drive/items/" + s.id,
                                headers: { "Content-Type": "application/json" },
                                data: JSON.stringify({ fileSystemInfo: { lastModifiedDateTime: t } })
                            })
                        })
                    }), delete: e.wait(e => {
                        const n = e.name || e;
                        return l.request({
                            method: "DELETE",
                            url: "https://api.onedrive.com/v1.0/drive/special/approot:" + h(t, encodeURIComponent(n))
                        })
                    }), watch: {
                        start: function () {
                            if (n) return;
                            n = !0;
                            const t = () => {
                                if (a = null, !n) return;
                                const r = o;
                                A({ set_current_list: !0 }).then(() => {
                                    if (!r) return;
                                    const t = {}, n = {}
                                    ;o.forEach(e => {
                                        t[e.id] = e
                                    }), r.forEach(e => {
                                        n[e.id] = e
                                    }), Object.keys(n).forEach(r => {
                                        const s = t[r], o = n[r];
                                        s ? o.modified != s.modified && e.changes.notify({
                                            time: s.modified,
                                            name: s.name
                                        }) : e.changes.notify({ time: Date.now(), name: o.name, removed: !0 })
                                    }), Object.keys(t).forEach(r => {
                                        if (!n[r]) {
                                            const n = t[r];
                                            e.changes.notify({ time: n.modified, name: n.name })
                                        }
                                    })
                                }).fail(e => {
                                    console.warn("OneDrive: file changes check failed", e)
                                }).always(() => {
                                    a = window.setTimeout(t, l.config.watch_interval)
                                })
                            };
                            l.wait(() => n ? (t(),
                                r.Deferred.Pledge()) : r.Deferred.Breach())()
                        }, stop: function () {
                            n = !1, a && (window.clearTimeout(a), a = null)
                        }
                    }
                };
                return l
            }))
        }, yandex: function (e) {
            let t, n;
            return (t = u.HTML5.LOCALSTORAGE) && (n = t.getItem("yandex_poll_interval")) || (n = 18e5), new R("yandex").extend(v).extend(b).extend((function (t) {
                const s = t.request;
                t.request = e => (() => {
                    if (e.headers = e.headers || {}, e.headers["X-Requested-With"] = "XMLHttpRequest", window.forge_sha256 && "PUT" == e.method && e.data && "raw" == e.data.type && e.data.value) {
                        const t = Object(r.Deferred)()
                        ;
                        return m(e.data.value).then(t => {
                            e.headers.Etag = a.default.MD5(t), e.headers.Sha256 = window.forge_sha256(t, "ASCII")
                        }).always(t.resolve), t.promise()
                    }
                    return r.Deferred.Pledge()
                })().then(() => s(e).then(e => e, t => t && [401].includes(t.status) && (console.warn("Yandex: authentication error", t), delete A.credentials.access_token, !e.retry_auth) ? (e.retry_auth = !0, A.oauth.run().then(() => s(e))) : t));
                const o = t.init;
                let i;
                t.init = () => {
                    if (i) return i;
                    const e = Object(r.Deferred)();
                    return i = e.promise(), A.request({
                        method: "GET", url: "https://cloud-api.yandex.net/v1/disk/"
                    }).done(e => {
                        const t = e.result, n = t ? JSON.parse(t) : {};
                        n.total_space && n.used_space && (n.used_space + 5e7 > n.total_space ? console.warn("Yandex: low disk space warning, only " + (n.total_space - n.used_space) + " bytes available") : console.log("Yandex: " + (n.total_space - n.used_space) + " bytes on disk available!"))
                    }).always(() => {
                        e.consume(o())
                    }), i
                };
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
                        watch_interval: n, ...e
                    }, getRemoteDomains: function () {
                        return ["disk.yandex.com"]
                    }, list: function (e) {
                        return t.list(e).then(e => e.map(e => (e.md5 = e.etag, e)))
                    }, compare: function (e, t) {
                        const n = Object(r.Deferred)();
                        let s
                        ;
                        return (s = e.md5) && s == a.default.MD5(t, "utf-8") ? n.resolve(!0) : n.resolve(!1), n.promise()
                    }
                };
                return A
            }))
        }, webdav: function (e) {
            let t, n;
            (t = u.HTML5.LOCALSTORAGE) && (n = t.getItem("webdav_poll_interval")) || (n = 18e5);
            var r = e.url;
            if (r) {
                var s = r.toLowerCase();
                s.startsWith("webdav") ? e.url = r.replace(/^webdav/i, "http") : s.startsWith("http") || (e.url = "http://" + r)
            }
            return new R("webdav").extend(w).extend(b).extend((function () {
                return { config: { root: "Tampermonkey", watch_interval: n, ...e } }
            }))
        }
    };
    t.a = k
}, function (e, t, n) {
    "use strict";
    var r = n(1), s = n(2), o = n(13), a = n(8);
    let i = 0;
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
    let l = [], c = !1;
    const u = (() => {
        const e = e => {
                const t = e.type, n = e.id, A = ".meta.json", c = ".user.js";
                let u, d, p = {};
                return {
                    init: function (e) {
                        return u = o.a[t]({ ...e, path: "sync" }), r.Deferred.Pledge().then(() => {
                            if (!u.credentials && !e.basic_auth) return u.list()
                        }).then(() => (d || (d = u.changes.listen(), d.progress(e => {
                            ((e, t) => {
                                if (t != i) return
                                    ;
                                const n = e.name, r = new RegExp(".meta.json$"), o = new RegExp(".user.js$");
                                s.a.log("si: cloud file changed", n, e), (n.match(r) || n.match(o)) && l.forEach(e => {
                                    e(n)
                                })
                            })(e, n)
                        })), !0))
                    }, list: e => u.list(e).then(e => {
                        p = {};
                        const t = {}, n = {};
                        let r, o;
                        const a = Date.now();
                        return e.forEach(e => {
                            p[e.name] = e;
                            const i = new RegExp(".meta.json$"), A = new RegExp(".user.js$");
                            var l;
                            e.modified > a ? s.a.log("si: ignore future list item", a, e) : ((r = e.name.match(i)) || (o = e.name.match(A))) && (r ? (e.uuid = l = e.name.replace(i, ""),
                                e.lastModified = e.modified, t[l] = e) : o && (l = e.name.replace(A, ""), n[l] = e))
                        }), Object.keys(t).map(e => {
                            let r;
                            if (r = t[e]) return r.source = n[e], r.options = r.options || {}, r
                        }).filter(e => e)
                    }), setSource: (e, t) => {
                        const n = e + c, o = p[n];
                        let a;
                        return r.Deferred.Pledge(!1).then(() => {
                            if (o && u.compare) return u.compare(o, t)
                        }).then(e => e ? (s.a.log("si: remote source data matches, skip upload of", n), r.Deferred.Pledge()) : (a = new Blob([t], { type: "text/plain" }), u.put(o || n, a)))
                    }, getSource: (e, t) => {
                        const n = e + c, o = p[n]
                        ;
                        return o ? r.Deferred.Pledge(!1).then(() => {
                            if (t && u.compare) return u.compare(o, t)
                        }).then(e => e ? (s.a.log("si: remote source data matches, skip download of", n), r.Deferred.Pledge(t)) : u.get(o).then(a.a.readAsText)) : (s.a.warn("si: list cache does not contain this UUID", e), r.Deferred.Breach())
                    }, getMeta: e => {
                        let t;
                        return (t = p[e + A]) ? u.get(t).then(a.a.readAsText).then(n => {
                            let r;
                            if ((r = (e => {
                                let t = null;
                                try {
                                    t = JSON.parse(e)
                                } catch (e) {
                                }
                                return t && t.uuid ? t : (s.a.log("si: unable to parse extended info of " + void 0), null)
                            })(n)) && (r.uuid = e)) return r.lastModified = t.modified || r.lastModified, r.precision = t.precision, r.options = r.options || {}, r
                        }) : r.Deferred.Breach()
                    }, setMeta: (e, t) => {
                        const n = new Blob([JSON.stringify(e)], { type: "text/plain" }), r = e.uuid + A, s = p[r];
                        return u.put(s || r, n, t)
                    }, remove: e => {
                        e.options.removed = !0;
                        const t = new Blob([JSON.stringify(e)], { type: "text/plain" });
                        return u.put(e.uuid + A, t).then(() => {
                            let t;
                            if (t = p[e.uuid + c]) return u.delete(t)
                        })
                    }, reset: () => u.list(!0).then(e => e.filter(e => {
                        const t = new RegExp(".meta.json$"), n = new RegExp(".user.js$");
                        return e.name.match(t) || e.name.match(n)
                    })).then(e => {
                        const t = [];
                        return e.forEach(e => {
                            t.push((() => {
                                const t = Object(r.Deferred)();
                                return u.delete(e).always(() => {
                                    t.resolve()
                                }), t.promise()
                            })())
                        }), r.Deferred.when(t).always(() => {
                            p = {}
                        })
                    }), getRemoteUrl: function (e) {
                        if (u.getRemoteUrl) return u.getRemoteUrl(e.uuid + c)
                    }, getRemoteDomains: function () {
                        if (u.getRemoteDomains) return u.getRemoteDomains()
                    }
                }
            }, t = e({ type: "drive", id: A.eGDRIVE }), n = e({
                type: "dropbox",
                id: A.eDROPBOX
            }), c = e({ type: "onedrive", id: A.eONEDRIVE }), u = e({ type: "webdav", id: A.eWEBDAV }),
            p = e({ type: "yandex", id: A.eYANDEX }), f = (() => {
                let e, t = !1;
                const n = (t, n) => {
                    i == A.eCHROMESYNC && "sync" == n && r.Deferred.Pledge().then(() => {
                        const r = new RegExp(e + "$");
                        t && Object.keys(t).forEach(e => {
                            const o = t[e];
                            if (s.a.log('si: storage key "%s" in namespace "%s" changed. Old value was "%s", new value is "%s".', e, n, o.oldValue, o.newValue), -1 != e.search(r)) for (let t = 0; t < l.length; t++) if (f[e]) ; else {
                                const n = c(o.newValue, e)
                                ;n && l[t](e, n)
                            }
                        })
                    })
                }, o = e => {
                    const t = Object(r.Deferred)();
                    let n = [];
                    return e ? a().done(r => {
                        n = r.filter(t => t.item && t.item.uuis == e), t.resolve(n)
                    }).fail(e => {
                        t.reject(e)
                    }) : t.resolve(n), t.promise()
                };
                var a = () => d(() => {
                    const t = Object(r.Deferred)(), n = new RegExp(e + "$");
                    return rea.storage.sync.get(null, e => {
                        const r = [];
                        e && Object.keys(e).forEach(t => {
                            -1 != t.search(n) && r.push({ key: t, item: c(e[t], t) })
                        }), t.resolve(r)
                    }), t.promise()
                }), c = (e, t) => {
                    let n = null;
                    try {
                        n = JSON.parse(e)
                    } catch (e) {
                    }
                    return n && (n.url || n.options) ? n : (s.a.log("si: unable to parse extended info of " + t), null)
                };
                const u = e => e.then(e => {
                    const t = {};
                    if ((e = e.filter(e => {
                        if (!t[e.key]) return t[e.key] = !0, !0
                    })).length > 1) {
                        const t = Object(r.Deferred)(), n = [], s = e.pop();
                        return e.forEach(e => {
                            n.push(m(e.key))
                        }), r.Deferred.when(n).done(() => {
                            t.resolve(s)
                        }), t.promise()
                    }
                    return r.Deferred.Pledge(e[0])
                });
                let p = null;
                var f = {}, m = e => {
                    const t = Object(r.Deferred)();
                    return rea.storage.sync.remove(e, () => {
                        const e = rea.runtime.lastError
                        ;e ? t.reject(e) : t.resolve()
                    }), t.promise()
                }, g = () => {
                    const e = Object(r.Deferred)();
                    return rea.storage.sync.set(f, () => {
                        const t = rea.runtime.lastError;
                        t ? e.reject(t) : (f = {}, e.resolve())
                    }), e.promise()
                };
                return {
                    init: function () {
                        let o = !0;
                        if (!t) try {
                            rea.storage.onChanged.addListener(n), t = !0
                        } catch (e) {
                            s.a.warn("si: error registering sync callback: " + e.message), o = !1
                        }
                        return e = "@v2", r.Deferred.Pledge(o)
                    }, list: () => r.Deferred.Pledge().then(() => a()).then(t => {
                        const n = new RegExp(e + "$"), s = [];
                        return t.forEach(e => {
                            const t = e.key, r = e.item, o = t.replace(n, "");
                            let a = null;
                            if (a = f[t] ? c(f[t], t) : r, !a) return;
                            const i = a.options || {}, A = !!i.removed;
                            s.push({
                                id: o,
                                uuid: A ? o : a.uuid,
                                lastModified: A ? i.removed : a.lastModified,
                                url: a.url,
                                options: i
                            })
                        }), r.Deferred.Pledge(s)
                    }), setMeta: (t, n) => {
                        const s = Object(r.Deferred)();
                        return u(o(t.uuid)).done(r => {
                            let o, a;
                            r ? (o = r.key, a = r.item) : (o = t.uuid + e, a = {}), a.url = t.url, a.options = t.options || {}, a.uuid = t.uuid, n.lastModified && (a.lastModified = n.lastModified), f[o] = JSON.stringify(a),
                            p && window.clearTimeout(p), p = window.setTimeout(g, 3e3), s.resolve()
                        }), s.promise()
                    }, remove: t => {
                        const n = Object(r.Deferred)();
                        return u(o(t.uuid)).done(r => {
                            let s, o;
                            r ? (s = r.key, o = r.item) : (s = t.uuid + e, o = {}), o.options = o.options || {}, o.options.removed = !0, f[s] = JSON.stringify(o), p && window.clearTimeout(p), p = window.setTimeout(g, 3e3), n.resolve()
                        }), n.promise()
                    }, reset: () => d(() => {
                        const e = Object(r.Deferred)();
                        return rea.storage.sync.clear(() => {
                            f = {}, e.resolve()
                        }), e.promise()
                    })
                }
            })(), m = {}
        ;
        return rea.storage.sync.supported && (m[A.eCHROMESYNC] = f), m[A.eGDRIVE] = t, m[A.eDROPBOX] = n, m[A.eONEDRIVE] = c, m[A.eWEBDAV] = u, m[A.eYANDEX] = p, m
    })();
    var d = (e, t) => {
        const n = Object(r.Deferred)();
        void 0 === t && (t = 3);
        const o = () => {
            if (c) window.setTimeout(o, 500); else {
                c = !0;
                try {
                    e().always(() => {
                        c = !1
                    }).done((function () {
                        n.resolve.apply(this, arguments)
                    })).fail(() => {
                        --t > 0 ? (s.a.log("si: some retries left, wait for", 6e4, "ms"), window.setTimeout(o, 6e4)) : (s.a.warn("si: no retries left, skipping this sync request!"),
                            n.reject("no retries left"))
                    })
                } catch (e) {
                    s.a.warn(e), c = !1, n.reject(e)
                }
            }
        };
        return o(), n.promise()
    };
    const p = {
        init: (e, t) => (l = [], i = e, u[i] ? u[i].init(t) : r.Deferred.Breach()), debug: function () {
        }, addChangeListener: function (e) {
            l.push(e)
        }, getRemoteUrl: function (e) {
            if (u[i] && u[i].getRemoteUrl) return u[i].getRemoteUrl(e)
        }, getRemoteDomains: function () {
            if (u[i] && u[i].getRemoteDomains) return u[i].getRemoteDomains()
        }, caps: (() => {
            const e = {};
            return Object.defineProperties(e, {
                specialMeta: {
                    get: function () {
                        return u[i] && !!u[i].getMeta
                    }, enumerable: !0
                }, syncsSource: {
                    get: function () {
                        return u[i] && !!u[i].getSource
                    }, enumerable: !0
                }
            }), e
        })(), types: A
    };
    ["list", "setMeta", "getMeta", "setSource", "getSource", "reset", "remove"].forEach(e => {
        p[e] = function () {
            return u[i] && u[i][e] ? u[i][e].apply(this, arguments) : r.Deferred.Pledge()
        }
    }), t.a = e => (o.a.init(t => {
        let n = Object(r.Deferred)();
        const s = e.openAndWatch({ url: t.url }, e => {
            e ? n && n.notify(e) : n && (n.resolve("tab closed"), n = null)
        });
        return {
            promise: n.promise(), close: function () {
                s.cancel()
            }
        }
    }), p)
}, function (e, t, n) {
    "use strict";
    var r = n(1), s = n(3), o = n(12);
    const a = rea.FEATURES;
    let i;
    const A = a.RUNTIME.BROWSER_VERSION;
    let l = !0;
    i = a.RUNTIME.CHROME ? A >= 83 ? 2020 : A >= 64 ? 2018 : A >= 59 ? 2017 : A >= 47 ? 2015 : 5 : a.RUNTIME.SAFARI ? A >= 14 ? 2020 : A >= 11 ? 2018 : A >= 10 ? 2017 : A >= 6 ? 2015 : 3 : a.RUNTIME.EDGE ? A >= 83 ? 2020 : A >= 16 ? 2017 : 2016 : a.RUNTIME.FIREFOX ? A >= 77 ? 2020 : A >= 58 ? 2018 : A >= 52 ? 2017 : 2016 : 5;
    const c = {};
    a.RUNTIME.CHROME && A < 77 ? (l = !1,
        console.warn("hint: disable inline ESLint config due to web worker CSP issues", "https://bugs.chromium.org/p/chromium/issues/detail?id=777076", "https://bugs.chromium.org/p/chromium/issues/detail?id=159303")) : a.RUNTIME.EDGE ? (l = !1, console.warn("hint: disable inline ESLint config due to web worker CSP issues")) : window.Worker || (l = !1,
        console.warn("hint: disable inline ESLint config because web workers are unavailable and this extension's CSP doesn't allow unsafe eval, which is required for ESLint's dynamic reconfigration"));
    const u = {
        env: { es6: i >= 2015, browser: !0 },
        parserOptions: { ecmaVersion: i, sourceType: "script", ecmaFeatures: { globalReturn: !0 } },
        rules: {
            curly: [1, "multi-line"],
            "dot-location": 0,
            "dot-notation": [1, { allowKeywords: !0 }],
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
    }, d = {};
    let p
    ;Object(s.each)(["uneval", "unsafeWindow", "TM_info", "GM_info", "GM", "GM_addStyle", "GM_deleteValue", "GM_listValues", "GM_getValue", "GM_download", "GM_log", "GM_registerMenuCommand", "GM_unregisterMenuCommand", "GM_openInTab", "GM_setValue", "GM_addValueChangeListener", "GM_removeValueChangeListener", "GM_xmlhttpRequest", "GM_getTab", "GM_setTab", "GM_saveTab", "GM_getTabs", "GM_setClipboard", "GM_notification", "GM_getResourceText", "GM_getResourceURL"], e => {
        d[e] = "writeable"
    }), u.globals = d;
    const f = {};
    let m;
    const g = {
        hint: function (e, t, n) {
            const i = Object(r.Deferred)(), A = i.promise(), g = n || c;
            let h;
            if (t ? (h = t, h.globals = { ...h.globals || {}, ...d }) : h = u, window.Worker && !a.RUNTIME.SAFARI) {
                const t = () => {
                    p = new Worker("worker/lint.js"), p.onmessage = e => {
                        const t = e.data, n = t.id;
                        let r, s, o;
                        n && (r = f[n]) && (s = r.d) && (delete f[n], (o = t.results) ? (l || (o = o.map(e => {
                            let t
                            ;
                            return e.message && (t = e.message.match(/Configuration for rule "([^"]+)"[\s\S]*evaluate a string as JavaScript[\s\S]*/)) && (e.message = 'Rule "' + t[1] + '": ESLint inline configuration is not supported by this browser.', e.severity = 1), e
                        })), s.resolve(o)) : s.reject(t.error || "Unknown error")), R(n)
                    }, p.postMessage({ method: "base_uri", value: rea.extension.getURL("/") }), m = null
                };
                var R = e => {
                    if (p || t(), e) m = null; else if (m) return;
                    let n, r = Date.now();
                    Object.keys(f).forEach(e => {
                        f[e].ts <= r && (n = f[e], r = n.ts)
                    }), n && (m = n.id,
                        p.postMessage({ method: n.method, id: n.id, config: n.c, options: n.o, text: n.t }))
                };
                A.abort = () => {
                    p && (p.terminate(), p = null, R())
                }, p || t();
                const n = Object(s.createUUID)();
                f[n] = { method: "lint", id: n, d: i, t: `(async () => {${e}})();`, c: h, o: g, ts: Date.now() }, R()
            } else Object(o.vendor)("vendor/eslint/eslint", () => {
                try {
                    const t = { problem: "error", layout: 1, suggestion: 1 }, n = new window.eslint.Linter;
                    h.extends && h.extends.includes("eslint:recommended") && (h.rules = h.rules || [], n.getRules().forEach((function (e, n) {
                        let r, s, o, a, i
                        ;
                        if (!(e && (s = e.meta) && void 0 === h.rules[n] && (r = s.docs) && r.recommended)) return;
                        const A = [(s.type ? t[s.type] : null) || 1];
                        (o = s.schema) && (a = {}, o.forEach(e => {
                            "object" == e.type && Object.keys(e.properties).forEach(t => {
                                const n = e.properties[t].default;
                                void 0 !== n && !1 !== n && (a[t] = e.properties[t].default, i = !0)
                            })
                        }), i && A.push(a)), h.rules[n] = A
                    })));
                    const r = n.verify(`(async () => {${e}})();`, h, g);
                    i.resolve(r || [])
                } catch (e) {
                    i.reject(e)
                }
            });
            return A
        }, globals: d, config: u, options: c, autoHintMaxLength: 5e4
    };
    t.a = g
}, function (e, t) {
    "use strict";
    Object.defineProperties(Promise.prototype, {
        done: {
            value: function (e) {
                return this.then((...t) => e.apply(this, t))
            }
        }, fail: {
            value: function (e) {
                return this.then(() => {
                }, (...t) => e.apply(this, t))
            }
        }, always: {
            value: function (e) {
                return this.then((...t) => e.apply(this, t), (...t) => e.apply(this, t))
            }
        }
    }), t.a = Promise
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(16), s = n(1), o = n(10), a = n.n(o), i = n(3), A = n(8);
    const l = rea.FEATURES, c = [];
    let u = !0;
    const d = 31457280, p = (() => {
            const e = [l.CONSTANTS.STORAGE.VERSION, l.CONSTANTS.STORAGE.TYPE], t = {};
            return e.forEach(e => {
                t[e] = !0
            }), {
                keys: e, has: function (e) {
                    return !!t[e]
                }
            }
        })(), f = l.HTML5.LOCALSTORAGE, m = () => rea.other.openDatabase("tmStorage", "1.0", "TM Storage", d),
        g = (e, t) => {
            if (!e) return t;
            const n = e[0];
            switch (e = e.substring(1), n) {
                case"b":
                    return "true" == e;
                case"n":
                    return Number(e);
                case"o":
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        console.error("Storage: getValue ERROR: " + e.message)
                    }
                    return t;
                default:
                    return e
            }
        }, h = e => {
            const t = (typeof e)[0]
            ;
            switch (t) {
                case"o":
                    try {
                        e = t + JSON.stringify(e)
                    } catch (e) {
                        return void console.error("Storage: setValue ERROR: " + e.message)
                    }
                    break;
                default:
                    e = t + e
            }
            return e
        }, R = function (e, t) {
            const n = Object(s.Deferred)(), r = [].slice.call(arguments, 2);
            let o;
            if ("string" == typeof e ? e == l.DB.USE && "clean" == t ? console.warn("Storage: can't clean currently active storage") : o = b.implementations[e][t] : o = e[t], o) {
                const e = o.apply(this, r);
                if ("object" != typeof e || !e.then) return e;
                e.then((function () {
                    n.resolve.apply(this, arguments)
                }), () => {
                    n.reject()
                })
            } else n.resolve();
            return n.promise()
        }, v = (e, t) => {
            const n = Object(s.Deferred)(), r = [];
            return Object.getOwnPropertyNames(t).forEach(n => {
                void 0 !== t[n] && r.push(R(e, "setValue", n, t[n]))
            }), s.Deferred.when(r).done(() => {
                n.resolve()
            }), n.promise()
        }, w = (e, t) => {
            const n = {};
            return t.forEach(t => {
                n[t] = R(e, "getValue", t)
            }), n
        };
    var b = {
        secure: {
            cookie: (() => {
                const e = "s_", t = t => {
                    document.cookie = e + t + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"
                }, n = {
                    setValue: function (t, n) {
                        const r = Object(s.Deferred)()
                        ;
                        return ((t, n) => {
                            const r = new Date;
                            r.setTime(r.getTime() + 47304e7);
                            const s = "expires=" + r.toUTCString();
                            document.cookie = e + t + "=" + n + ";" + s + ";path=/"
                        })(t, n = h(n)), r.resolve(), r.promise()
                    }, setValues: function (e) {
                        const t = [];
                        return Object.keys(e).forEach(r => {
                            t.push(n.setValue(r, e[r]))
                        }), s.Deferred.sidebyside(t)
                    }, getValue: function (t, n) {
                        return g((t => {
                            const n = e + t + "=", r = document.cookie.split(";");
                            for (let e = 0; e < r.length; e++) {
                                let t = r[e];
                                for (; " " == t.charAt(0);) t = t.substring(1)
                                ;
                                if (0 == t.indexOf(n)) return t.substring(n.length, t.length)
                            }
                            return null
                        })(t), n)
                    }, deleteAll: function () {
                        const e = Object(s.Deferred)();
                        return n.listValues().forEach(e => {
                            t(e)
                        }), e.resolve(), e.promise()
                    }, deleteValue: function (e) {
                        const n = Object(s.Deferred)();
                        return t(e), n.resolve(), n.promise()
                    }, listValues: function () {
                        return (() => {
                            const t = document.cookie.split(";"), n = [];
                            for (let r = 0; r < t.length; r++) {
                                const s = t[r].trim(), o = s.indexOf("="), a = s.substr(0, o);
                                a.substr(0, e.length) == e && n.push(a.substr(e.length))
                            }
                            return n
                        })().map(e => e)
                    }
                };
                return n
            })()
        }, implementations: {
            localStorage: (() => {
                const e = {
                    setValue: function (e, t) {
                        const n = Object(s.Deferred)(), r = e, o = h(t);
                        return u && f.setItem(r, o), n.resolve(), n.promise()
                    }, setValues: function (t) {
                        const n = [];
                        return Object.keys(t).forEach(r => {
                            n.push(e.setValue(r, t[r]))
                        }), s.Deferred.sidebyside(n)
                    }, getValue: function (e, t) {
                        const n = e;
                        return g(f.getItem(n, t), t)
                    }, deleteAll: function () {
                        const t = Object(s.Deferred)();
                        return u && e.listValues().forEach(e => {
                            p.has(e) || f.removeItem(e)
                        }), t.resolve(),
                            t.promise()
                    }, deleteValue: function (e) {
                        const t = Object(s.Deferred)(), n = e;
                        return u && f.removeItem(n), t.resolve(), t.promise()
                    }, listValues: function () {
                        const e = [];
                        for (let t = 0; t < f.length; t++) e.push(f.key(t));
                        return e
                    }
                };
                return { options: {}, methods: e }
            })(), sql: (() => {
                let e = null, t = null;
                const n = () => {
                    const e = Object(s.Deferred)();
                    return t.db.transaction(n => {
                        n.executeSql("CREATE TABLE IF NOT EXISTS config(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT)", [], e.resolve, t.onError)
                    }), e.promise()
                }, r = {
                    setValue: function (n, r) {
                        const o = Object(s.Deferred)(), a = n, i = h(r);
                        return u && (e[a] ? t.db.transaction(e => {
                            e.executeSql("UPDATE config SET value=? WHERE name=?", [i, a], () => {
                                rea.runtime.lastError && console.warn(rea.runtime.lastError), o.resolve()
                            }, t.onError)
                        }) : t.db.transaction(e => {
                            e.executeSql("INSERT INTO config(name, value) VALUES (?,?)", [a, i], () => {
                                rea.runtime.lastError && console.warn(rea.runtime.lastError), o.resolve()
                            }, t.onError)
                        })), e[a] = i, u || o.resolve(), o.promise()
                    }, setValues: function (e) {
                        const t = []
                        ;
                        return Object.keys(e).forEach(n => {
                            t.push(r.setValue(n, e[n]))
                        }), s.Deferred.sidebyside(t)
                    }, getValue: function (t, n) {
                        return g(e[t], n)
                    }, deleteAll: function () {
                        const o = Object(s.Deferred)(), a = w(r, p.keys);
                        return e = a, u ? t.db.transaction(e => {
                            e.executeSql("DROP TABLE config", [], () => {
                                n().done(() => {
                                    v(r, a).done(o.resolve)
                                })
                            }, t.onError)
                        }) : o.resolve(), o.promise()
                    }, deleteValue: function (n) {
                        const r = Object(s.Deferred)(), o = n;
                        return delete e[o], u ? t.db.transaction(e => {
                            e.executeSql("DELETE FROM config WHERE name=?", [o], r.resolve, t.onError)
                        }) : r.resolve(), r.promise()
                    }, listValues: function () {
                        const t = [];
                        return Object.getOwnPropertyNames(e).forEach(e => {
                            t.push(e)
                        }), t
                    }, isWorking: function () {
                        return s.Deferred.Pledge()
                    }
                };
                return {
                    init: function () {
                        const r = Object(s.Deferred)(), o = (t, n) => {
                            if (e = {}, n) for (let t = 0; t < n.rows.length; t++) e[n.rows.item(t).name] = n.rows.item(t).value;
                            r.resolve()
                        }, a = () => {
                            e ? r.resolve() : t.db.transaction(e => {
                                e.executeSql("SELECT * FROM config", [], o, t.onError)
                            })
                        };
                        return t ? a() : (() => {
                            const e = Object(s.Deferred)();
                            return t = {
                                db: m(), onSuccess: function () {
                                }, onError: function (e, t) {
                                    console.error("webSQL: localDB Error ", t)
                                }
                            }, t.db ? n().done(e.resolve) : (t = null, e.reject()), e.promise()
                        })().done(a).fail(r.reject), r.promise()
                    }, clean: function () {
                        return e = null, s.Deferred.Pledge()
                    }, options: {}, methods: r
                }
            })(), chromeStorage: (() => {
                let e = null, t = !1, n = !1;
                const r = rea.extension.inIncognitoContext ? "incognito" : "normal", o = (t, s) => {
                    u && n && "local" == s && t && Object.keys(t).forEach(n => {
                        const s = t[n];
                        s.newValue ? s.newValue.origin !== r && (e[n] = s.newValue.value, b.notifyDifferentOriginChangeListeners(n, s.newValue)) : s.oldValue && s.oldValue.origin !== r && delete e[n]
                    })
                }, a = {
                    setValue: function (t, n) {
                        const o = Object(s.Deferred)(), a = t;
                        if (e[a] = n, u) {
                            const e = {};
                            e[a] = { origin: r, value: n }, rea.storage.local.set(e, o.resolve)
                        } else o.resolve();
                        return o.promise()
                    }, setValues: function (t) {
                        const n = Object(s.Deferred)(), o = {};
                        return Object.keys(t).forEach(n => {
                            const s = n, a = t[n];
                            e[s] = a, u && (o[s] = { origin: r, value: a })
                        }),
                            u ? rea.storage.local.set(o, n.resolve) : n.resolve(), n.promise()
                    }, getValue: function (t, n) {
                        const r = t;
                        return void 0 === e[r] ? n : e[r]
                    }, deleteAll: function () {
                        const t = Object(s.Deferred)(), n = w(a, p.keys);
                        return e = n, u ? rea.storage.local.clear(() => {
                            v(a, n).done(t.resolve)
                        }) : t.resolve(), t.promise()
                    }, deleteValue: function (t) {
                        const n = Object(s.Deferred)(), r = t;
                        return delete e[r], u ? rea.storage.local.remove(r, n.resolve) : n.resolve(), n.promise()
                    }, listValues: function () {
                        const t = []
                        ;
                        return Object.getOwnPropertyNames(e).forEach(e => {
                            t.push(e)
                        }), t
                    }, setTemporary: function (e) {
                        u = !e, n = !0
                    }, isSupported: function () {
                        return s.Deferred.Pledge()
                    }, isWorking: function () {
                        const e = Object(s.Deferred)();
                        let t = 0;
                        const n = Date.now(), r = "foo", o = {};
                        o[r] = n;
                        const a = () => {
                            window.clearTimeout(l), l = null
                        }, i = e => {
                            ++t <= 5 ? (console.warn("storage:", e || "storage set/get test failed!"), window.setTimeout(c, t * t * 100)) : (console.warn("storage: storage set/get test finally failed!"), A())
                        };
                        var A = () => {
                            l && (a(), e.reject())
                        }, l = window.setTimeout(() => {
                            l = null, A()
                        }, 18e4), c = () => {
                            console.log("Storage: test -> start");
                            const t = Date.now();
                            rea.storage.local.set(o, () => {
                                console.log("Storage: test -> set after " + (Date.now() - t) + "ms"), rea.storage.local.get(r, s => (console.log("Storage: test -> get after " + (Date.now() - t) + "ms"),
                                    s ? s[r] !== n ? i("read value is different " + JSON.stringify(s[r]) + " != " + JSON.stringify(n)) : rea.runtime.lastError ? i(rea.runtime.lastError && rea.runtime.lastError.message || "lastError is set") : void rea.storage.local.remove(r, () => {
                                        console.log("Storage: test -> remove after " + (Date.now() - t) + "ms"), l && (a(), e.resolve())
                                    }) : i("read value is" + s)))
                            })
                        };
                        return c(), e.promise()
                    }
                };
                return {
                    init: function () {
                        const n = Object(s.Deferred)();
                        if (e) n.resolve(); else {
                            const r = r => {
                                e = {}, r && Object.keys(r).forEach(t => {
                                    const n = r[t]
                                    ;e[t] = n && n.hasOwnProperty("origin") && n.hasOwnProperty("value") ? n.value : n
                                }), t || (rea.storage.onChanged.addListener(o), t = !0), n.resolve()
                            };
                            rea.storage.local.get(null, r)
                        }
                        return n.promise()
                    }, clean: function () {
                        const t = Object(s.Deferred)();
                        return e = null, t.resolve(), t.promise()
                    }, options: {}, methods: a
                }
            })(), file: (() => {
                let e = null, t = null;
                const n = e => {
                    const n = Object(s.Deferred)(), r = t => {
                        console.warn("fileStorage: getFileData(", e, ") error:", t), n.reject()
                    }, o = e => {
                        const t = new FileReader;
                        t.onloadend = function () {
                            n.resolve(this.result)
                        }, t.onerror = r, t.onabort = r, t.readAsText(e)
                    };
                    return t.root.getDirectory("data", { create: !0 }, t => {
                        t.getFile(e, {}, e => {
                            e.file(e => {
                                o(e)
                            }, r)
                        }, r)
                    }, r), n.promise()
                }, r = {
                    isSupported: function () {
                        const e = Object(s.Deferred)();
                        return window.File && window.FileReader && window.FileList && window.Blob ? e.resolve() : e.reject(), e.promise()
                    }, isWorking: function () {
                        return s.Deferred.Pledge()
                    }, setValue: function (n, r) {
                        const o = Object(s.Deferred)(), a = n, i = h(r);
                        return e[a] = i, u ? ((e, n) => {
                            const r = Object(s.Deferred)(), o = t => {
                                console.warn("fileStorage: writeFileData(", e, ") error:", t), r.reject()
                            };
                            return t.root.getDirectory("data", { create: !0 }, t => {
                                t.getFile(e, { create: !0 }, e => {
                                    e.createWriter(e => {
                                        e.onwriteend = () => {
                                            e.onwriteend = () => {
                                                r.resolve()
                                            }, e.onerror = o;
                                            const t = new Blob([n], { type: "text/plain" });
                                            e.write(t)
                                        }, e.truncate(0)
                                    }, o)
                                }, o)
                            }, o), r.promise()
                        })(a, i).always(o.resolve) : o.resolve(), o.promise()
                    }, setValues: function (e) {
                        const t = [];
                        return Object.keys(e).forEach(n => {
                            t.push(r.setValue(n, e[n]))
                        }), s.Deferred.sidebyside(t)
                    }, getValue: function (t, n) {
                        return g(e[t], n)
                    }, deleteAll: function () {
                        const n = Object(s.Deferred)(), o = w(r, p.keys);
                        return e = o, u ? (() => {
                            const e = Object(s.Deferred)(), n = t => {
                                console.warn("fileStorage: removeDir() error:", t), e.reject()
                            };
                            return t.root.getDirectory("data", { create: !0 }, t => {
                                t.removeRecursively(e.resolve, n)
                            }, n), e.promise()
                        })().always(() => {
                            v(r, o).always(n.resolve)
                        }) : n.resolve(), n.promise()
                    }, deleteValue: function (n) {
                        const r = Object(s.Deferred)(), o = n;
                        return delete e[o], u ? (e => {
                            const n = Object(s.Deferred)(), r = t => {
                                console.warn("fileStorage: deleteFile(", e, ") error:", t), n.reject()
                            };
                            return t.root.getDirectory("data", { create: !0 }, t => {
                                t.getFile(e, { create: !1 }, e => {
                                    e.remove(n.resolve, r)
                                }, r)
                            }, r), n.promise()
                        })(o).always(r.resolve) : r.resolve(), r.promise()
                    }, listValues: function () {
                        const t = [];
                        return Object.getOwnPropertyNames(e).forEach(e => {
                            t.push(e)
                        }), t
                    }
                };
                return {
                    init: () => {
                        const r = Object(s.Deferred)();
                        if (e) r.resolve(); else {
                            const o = e => {
                                e && console.warn("fileStorage: ", e), r.reject()
                            }, a = o => {
                                t = o, (() => {
                                    const r = Object(s.Deferred)();
                                    e = {};
                                    const o = [];
                                    return (() => {
                                        const e = Object(s.Deferred)(), n = t => {
                                            console.warn("fileStorage: listFiles() error:", t), e.reject()
                                        };
                                        return t.root.getDirectory("data", { create: !0 }, t => {
                                            const r = t.createReader();
                                            let s = [];
                                            const o = () => {
                                                r.readEntries(t => {
                                                    t.length ? (s = s.concat(t), o()) : e.resolve(s)
                                                }, n)
                                            };
                                            o()
                                        }, n), e.promise()
                                    })().done(t => {
                                        t.forEach(t => {
                                            "string" != typeof t && (t = t.name), o.push(n(t).always(n => {
                                                e[t] = n
                                            }))
                                        }), s.Deferred.when(o).always(() => {
                                            r.resolve()
                                        })
                                    }).fail(r.resolve), r.promise()
                                })().done(r.resolve)
                            };
                            rea.other.requestFileSystem(window.PERSISTENT, d, a, o)
                        }
                        return r.promise()
                    }, clean: function () {
                        return e = null, s.Deferred.Pledge()
                    }, options: {}, methods: r
                }
            })()
        }, migrate: function (e, t, n) {
            const r = Object(s.Deferred)(), o = b.implementations[e], a = b.implementations[t];
            return n = n || {}, o && a ? R(e, "init").then(() => R(t, "init")).then(() => {
                const e = Object(s.Deferred)(), t = [];
                return o.methods.listValues().forEach(e => {
                    const r = o.methods.getValue(e)
                    ;n.drop && t.push(o.methods.deleteValue(e)), t.push(a.methods.setValue(e, r))
                }), s.Deferred.when(t).done(() => {
                    e.resolve()
                }), e.promise()
            }).then(() => R(t, "clean")).then(() => R(e, "clean")).done(() => {
                r.resolve()
            }).fail(() => {
                r.reject()
            }) : (console.error("Migration: unknown storage implementation(s) ", e, t), r.reject()), r.promise()
        }, isSupported: function () {
            return s.Deferred.Pledge()
        }, isWorking: function () {
            return s.Deferred.Pledge()
        }, setTemporary: function (e) {
            u = !e
        }, init: function () {
            return console.debug("Storage: use " + l.DB.USE), Object.getOwnPropertyNames(b.implementations[l.DB.USE].methods).forEach(e => {
                Object.defineProperty(b, e, { get: () => b.implementations[l.DB.USE].methods[e], enumerable: !0 })
            }), b.implementations[l.DB.USE].init ? b.implementations[l.DB.USE].init() : s.Deferred.Pledge()
        }, getValues: function (e, t) {
            const n = {};
            return t || (t = {}), Object.getOwnPropertyNames(e).forEach(e => {
                n[e] = b.implementations[l.DB.USE].getValue(e, t[e])
            }), n
        }, factoryReset: function () {
            return f && f.removeItem(l.CONSTANTS.STORAGE.LEGACY_VERSION), b.deleteAll()
        }, isWiped: function () {
            if ("localStorage" === l.DB.USE || !f) return s.Deferred.Pledge(!1);
            const e = Object(s.Deferred)(), t = b.getValue(l.CONSTANTS.STORAGE.VERSION);
            let n = !1;
            return f.getItem(l.CONSTANTS.STORAGE.LEGACY_VERSION) && !t && (b.listValues().length ? console.warn("storage: unable to find version information") : n = !0), e.resolve(n), e.promise()
        }, setVersion: function (e, t) {
            const n = Object(s.Deferred)()
            ;
            return u ? (f && f.setItem(l.CONSTANTS.STORAGE.LEGACY_VERSION, e), b.setValue(l.CONSTANTS.STORAGE.VERSION, e).then(() => t ? b.setValue(l.CONSTANTS.STORAGE.SCHEMA, t) : s.Deferred.Pledge()).always(n.resolve)) : n.resolve(), n.promise()
        }, getVersion: function (e) {
            const t = Object(s.Deferred)();
            let n = b.getValue(l.CONSTANTS.STORAGE.VERSION) || b.getValue(l.CONSTANTS.STORAGE.LEGACY_VERSION) || (f ? f.getItem(l.CONSTANTS.STORAGE.LEGACY_VERSION) : null);
            if (n) t.resolve(n); else {
                const r = "sql"
                ;R(r, "init").then(() => (n = b.implementations.sql.methods.getValue(l.CONSTANTS.STORAGE.LEGACY_VERSION) || e, R(r, "clean"))).always(() => {
                    t.resolve(n || e)
                })
            }
            return t.promise()
        }, getSchemaVersion: function () {
            return b.getValue(l.CONSTANTS.STORAGE.SCHEMA, "3.5")
        }, addDifferentOriginChangeListener: function (e, t) {
            c.push({ search: e, cb: t })
        }, notifyDifferentOriginChangeListeners: function (e, t) {
            c.forEach(n => {
                0 == e.indexOf(n.search) && n.cb(e, t)
            })
        }, recover: function (e, t) {
            "string" == typeof e && (e = {
                method: e,
                storages: ["sql", "chromeStorage"]
            });
            const n = {};
            if (e.storages.forEach(e => {
                n[e] = !0
            }), "log" == e.method) {
                let e, r, s = null;
                const o = [{
                    method: "sql", fn: function (e) {
                        console.debug("check sql storage for data...");
                        try {
                            if (r = m(), rea.runtime.lastError || !r) return s = rea.runtime.lastError, e();
                            r.transaction(t => {
                                t.executeSql("CREATE TABLE IF NOT EXISTS config(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT)", [], () => {
                                    console.debug("sql table found/created"), e()
                                }, (t, n) => {
                                    s = n, e()
                                })
                            })
                        } catch (t) {
                            s = t, window.setTimeout(e, 1)
                        }
                    }
                }, {
                    method: "sql", fn: function (t) {
                        const n = {};
                        r.transaction(r => {
                            r.executeSql("SELECT * FROM config", [], (r, s) => {
                                if (s) for (let e = 0; e < s.rows.length; e++) n[s.rows.item(e).name] = s.rows.item(e).value;
                                e = n, window.setTimeout(t, 1)
                            }, (e, n) => {
                                s = n, t()
                            })
                        })
                    }
                }, {
                    method: "sql", fn: function (t) {
                        const r = e ? Object.getOwnPropertyNames(e) : [];
                        e && r.length ? (console.debug("found values:"), r.forEach(t => {
                            console.debug("    ", t, e[t] && e[t].length > 30 ? e[t].substr(0, 30) : e[t])
                        })) : (console.warn("no data found"), n.sql = !1),
                            window.setTimeout(t, 1)
                    }
                }, {
                    method: "chromeStorage", fn: function (t) {
                        console.debug("check chromeStorage for data..."), rea.storage.local.get(null, n => {
                            e = n, t()
                        })
                    }
                }, {
                    method: "chromeStorage", fn: function (t) {
                        const r = e ? Object.getOwnPropertyNames(e) : [];
                        e && r.length ? (console.debug("found values:"), r.forEach(t => {
                            console.debug("    ", t, e[t] && e[t].length > 30 ? e[t].substr(0, 30) : e[t])
                        })) : (console.warn("no data found"), n.chromeStorage = !1, window.setTimeout(t, 1))
                    }
                }];
                let a = 0;
                const i = () => {
                    if (s) return console.warn("error:", s), void (t && t());
                    for (; o[a];) {
                        if (n[o[a].method]) return o[a].fn(i), void a++;
                        a++
                    }
                    t && t()
                };
                i()
            }
        }
    }, k = b;
    var _ = function (e) {
        const t = Object(s.Deferred)();
        let n = document.createElement("img"), r = !1, o = null;
        const a = document.body || document.documentElement || document;
        a.appendChild(n);
        const i = () => {
            o && window.clearTimeout(o), r || t.reject()
        };
        return o = window.setTimeout(() => {
            o = null, i(), r = !0
        }, 5e3), n.onload = () => {
            let e, s;
            o && window.clearTimeout(o);
            try {
                s = document.createElement("canvas"),
                    s.width = n.width, s.height = n.height, s.getContext("2d").drawImage(n, 0, 0), e = s.toDataURL(), a.removeChild(n), n = null
            } catch (e) {
            }
            r || t.resolve(e)
        }, n.onerror = i, n.src = e, t.promise()
    }, y = n(2);
    const E = rea.FEATURES, x = (() => {
        const e = {};
        let t, n = null, r = 0;
        const o = {
            init: function () {
                if (t) return t;
                const r = Object(s.Deferred)(), o = e => {
                    n = e || "unknown", y.a.log("notify: chronos level", e), r.resolve()
                };
                return rea.notifications.supported ? (rea.notifications.getPermissionLevel(o),
                    rea.notifications.onPermissionLevelChanged.addListener(o), rea.notifications.onClicked.addListener(t => {
                    y.a.log("notify: chronos click", t), e[t] && (e[t].cb.click && e[t].cb.click(), e[t].cancel(), delete e[t])
                }), rea.notifications.onClosed.addListener(t => {
                    y.a.log("notify: chronos close", t), e[t] && e[t].cb.close && e[t].cb.close(), delete e[t]
                })) : o("unsupported"), t = r.promise()
            }, create: function (t, a, A, l) {
                return o.init().then(() => {
                    const o = Object(s.Deferred)();
                    let c = 10;
                    const u = () => {
                        if (n) if ("granted" == n) {
                            const n = {
                                nid: null, cb: {}, on: function (e, t) {
                                    n.cb[e] = t
                                }, cancel: function () {
                                }, show: function () {
                                    const s = { type: "basic", title: a || "", message: A || "" };
                                    s.iconUrl = 0 == r ? t : "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", (E.RUNTIME.CHROME && E.RUNTIME.BROWSER_VERSION >= 70 || E.RUNTIME.SAFARI) && void 0 !== l.silent && (s.silent = l.silent), E.RUNTIME.CHROME && E.RUNTIME.BROWSER_VERSION >= 50 && (s.requireInteraction = !0);
                                    const c = Object(i.createUUID)();
                                    rea.notifications.create(c, s, () => {
                                        if (rea.runtime.lastError) {
                                            if (r < 1) return y.a.log("notify: chronos creating failed, retry...", rea.runtime.lastError), r++, void n.show();
                                            y.a.log("notify: chronos creating finally failed", rea.runtime.lastError), o.reject()
                                        } else y.a.log("notify: chronos created", c), n.cancel = () => {
                                            e[c] && rea.notifications.clear(c, () => {
                                            })
                                        }, e[c] = n
                                    })
                                }
                            };
                            o.resolve(n)
                        } else o.resolve(); else {
                            const e = () => {
                                n ? u() : c-- ? window.setTimeout(e, 200) : o.resolve()
                            };
                            e()
                        }
                    };
                    return u(), o.promise()
                })
            }
        };
        return o
    })(), T = (() => {
        const e = {};
        let t, n = null
        ;const r = {
            init: function () {
                if (t) return t;
                const e = e => {
                    n = e || "unknown", y.a.log("notify: notification level", e)
                };
                return window.Notification ? e(Notification.permission) : e("unsupported"), t = s.Deferred.Pledge()
            }, create: function (t, o, a, A) {
                return r.init().then(() => {
                    const r = Object(s.Deferred)(), l = () => {
                        if ("granted" == n || "default" == n) {
                            const n = {
                                nid: null, cb: {}, on: function (e, t) {
                                    n.cb[e] = t
                                }, cancel: function () {
                                }, show: function () {
                                    const r = { body: a || "", icon: t }
                                    ;E.RUNTIME.CHROME && (E.RUNTIME.BROWSER_VERSION >= 43 && void 0 !== A.silent && (r.silent = A.silent), r.requireInteraction = !0);
                                    const s = Object(i.createUUID)(), l = new window.Notification(o || "", r);
                                    l.onclick = () => {
                                        y.a.log("notify: notification click", s), e[s] && (e[s].cb.click && e[s].cb.click(), e[s].cancel(), delete e[s])
                                    }, l.onclose = l.onerror = t => {
                                        y.a.log("notify: notification close", s, t), e[s] && e[s].cb.close && e[s].cb.close(), delete e[s]
                                    }, n.cancel = () => {
                                        e[s] && l.close()
                                    }, e[s] = n
                                }
                            };
                            r.resolve(n)
                        } else if ("denied" == n) r.resolve(); else if ("unsupported" == n) r.resolve(); else {
                            const e = e => {
                                n = "granted" == e ? "granted" : "denied", l()
                            };
                            E.RUNTIME.SAFARI ? Notification.requestPermission(e) : Notification.requestPermission().then(e)
                        }
                    };
                    return l(), r.promise()
                })
            }
        };
        return r
    })(), G = {
        notify: function (e, t, n, r, o) {
            const a = (r = r || {}).timeout;
            let i = !1;
            o || (i = !0, o = () => {
            });
            let A, l = null, c = !1, u = !1, d = null;
            const p = () => {
                    d && window.clearTimeout(d), c || o({}), u = !0
                }, f = () => {
                    c = !0;
                    o && o({ clicked: c }), l && l.cancel()
                }
            ;
            return n = n || rea.extension.getURL("images/icon128.png"), _(n).then(e => (A = e || n, s.Deferred.Pledge())).then(() => x.create(A, e, t, r)).then(n => {
                if (!n && window.webkitNotifications) try {
                    const r = window.webkitNotifications.createNotification(A, e || "", t || "");
                    n = {
                        on: function (e, t) {
                            r["on" + e] = t
                        }, cancel: function () {
                            u || r.cancel()
                        }, show: function () {
                            r.show()
                        }
                    }
                } catch (e) {
                    y.a.warn("notify: webkitNotifications creation failed with: " + e.message)
                }
                return n
            }).then(n => n || T.create(A, e, t, r)).then(n => (n || (n = {
                cb: {}, on: function (e, t) {
                    n.cb[e] = t
                }, cancel: function () {
                }, show: function () {
                    i || window.setTimeout(() => {
                        confirm((e ? e + "\n\n" : "") + t) ? n.cb.click && n.cb.click() : n.cb.close && n.cb.close()
                    }, 1)
                }
            }), n)).then(r => {
                l = r, l.on("close", p), l.on("click", f), d = window.setTimeout(() => {
                    d = null, l.cancel()
                }, a || 6e5), y.a.log("notify:", e, t, n, a), l.show()
            }), {
                cancel: function () {
                    l && l.cancel()
                }
            }
        }, showUpdate: function (e, t, n, r) {
            return G.notify(e, t, n, { timeout: 3e5 }, r)
        }, show: function (e, t, n, r, s) {
            return G.notify(e, t, n, r, s)
        }, highlight: function (e, t) {
            rea.tabs.highlight({
                tabs: e
            }, t)
        }
    };
    var M = G;
    let S = {}, U = null;
    const O = () => {
        const e = Date.now(), t = S;
        S = {};
        const n = Object.keys(t);
        n.forEach(n => {
            const r = t[n];
            r && e - r.ts < Z ? S[n] = r : r.com.reject()
        }), U && 0 === n.length && (window.clearInterval(U), U = null)
    }, Z = 15e3;
    let I = !1;
    const C = (e, t) => {
        I || D.init(), null === U && (U = window.setInterval(O, 5e3));
        const n = Object(s.Deferred)();
        return ((e, t) => {
            const n = Object(s.Deferred)();
            return void 0 === t && (t = !0), rea.tabs.getSelected(null, r => {
                const s = r ? r.index + 1 : void 0;
                rea.tabs.create({
                    url: rea.extension.getURL("ask.html") + "?aid=" + e, active: t, index: s, parent: r
                }, e => {
                    if (!e) {
                        const e = "rea.tabs.create failed -> giving up now!";
                        console.error(e), n.reject({ error: e })
                    }
                    n.resolve({
                        id: e.id, close: function () {
                            rea.tabs.remove(e.id)
                        }
                    })
                })
            }), n.promise()
        })((e => {
            const t = Object(i.createUUID)();
            return S[t] = e, t
        })({ ts: Date.now(), com: n, preparat: t, type: e }), t.active).then(e => n.promise().done(t => {
            (t.ok || t.aborted) && e.close()
        }))
    }, D = {
        init: function () {
            I || (I = !0)
        }, onMessage: function (e) {
            const t = Object(s.Deferred)(), n = e.aid, r = S[n];
            if (r) if (r.aborter && (window.clearTimeout(r.aborter), delete r.aborter), "ping" == e.method) S[n].ts = Date.now(), t.resolve({ pong: !0 }); else if ("preparat" == e.method) t.resolve({
                preparat: r.preparat,
                type: r.type
            }); else if ("install" == e.method) r.com.resolve({ ok: !0 }), t.resolve({}), delete S[n]; else if ("import" == e.method) r.com.resolve({
                ok: !0,
                import_ids: e.import_ids,
                global_settings: e.global_settings
            }), t.resolve({}),
                delete S[n]; else if ("permission" == e.method) r.com.resolve({
                ok: !0,
                granted: e.granted,
                permissions: e.permissions,
                origins: e.origins
            }), t.resolve({}), delete S[n]; else if ("unload" == e.method || "abort" == e.method) {
                t.resolve({});
                const s = () => {
                    r.com.resolve({ ok: !1, aborted: !0 }), delete S[n]
                };
                "abort" == e.method ? s() : r.aborter = window.setTimeout(s, 3e3)
            } else "connect" == e.method && (r.com.resolve(e), t.resolve({}), delete S[n]); else t.reject({
                error: "unknown_id",
                please_close: !0
            });
            return t.promise()
        }, install: function (e) {
            return C("install", e)
        }, import: function (e) {
            return C("import", e)
        }, askForPermission: function (e, t, n) {
            return C("permission", { permissions: e.permissions, origins: e.origins, title: t, message: n })
        }, installError: function (e) {
            return C("install_error", e)
        }, askForConnect: function (e) {
            return C("connect", e)
        }
    };
    var j = D;
    let F = !1, N = null, B = null;
    const P = () => F || s.Deferred.Pledge(), L = e => {
        rea.permissions.supported && (rea.permissions.onAdded.addListener(t => {
            e({ added: t })
        }), rea.permissions.onRemoved.addListener(t => {
            e({ removed: t })
        }))
    }, V = {
        permDownloads: "downloads", get: function () {
            const e = Object(s.Deferred)();
            return N = {}, B = {}, F = e.promise(), rea.permissions.supported ? rea.permissions.getAll(t => {
                t.permissions && Object(i.each)(t.permissions, e => {
                    N[e] = !0
                }), t.origins && Object(i.each)(t.origins, e => {
                    B[e] = !0
                }), F = null, e.resolve()
            }) : e.resolve(), e.promise()
        }, has: function (e) {
            return P().then(() => !rea.permissions.supported || (N ? !!N[e] || !!B[e] : (L(() => {
                P().then(V.get)
            }), V.get().then(() => V.has(e)))))
        }, hasOrigin: function (e) {
            return Array.isArray(e) || (e = [e]), P().then(() => {
                const t = Object(s.Deferred)();
                return rea.permissions.supported ? rea.permissions.contains({ origins: e }, e => {
                    t.resolve(e)
                }) : t.resolve(!0), t.promise()
            })
        }, ask: function (e, t, n) {
            Array.isArray(e) || (e = [e]);
            const r = Object(s.Deferred)();
            return rea.permissions.supported ? j.askForPermission({ permissions: e }, t, n).done(t => {
                t.granted && (N || (N = {}), N[e] = !0), r.resolve(t.granted)
            }) : r.resolve(!1), r.promise()
        }, askOrigin: function (e, t, n) {
            Array.isArray(e) || (e = [e])
            ;const r = Object(s.Deferred)();
            return rea.permissions.supported ? j.askForPermission({ origins: e }, t, n).done(e => {
                r.resolve(e.granted)
            }) : r.resolve(!1), r.promise()
        }, remove: function (e) {
            return P().then(() => {
                const t = Object(s.Deferred)();
                return rea.permissions.supported ? (F = t.promise(), rea.permissions.remove({ permissions: [e] }, n => {
                    F = null, N && (N[e] = !1), t.resolve(n)
                })) : t.resolve(!0), t.promise()
            })
        }, addListener: L
    };
    var Q = V, H = n(9), X = n(4), q = n(0), z = n.n(q), Y = n(11), W = n(5), J = n(12);
    const K = rea.FEATURES, $ = {
        DEFAULT: "default",
        OFF: "off",
        NATIVE: "native",
        CHROME: "chrome",
        NOT_ENABLED: "not_enabled",
        NOT_WHITELISTED: "not_whitelisted",
        NOT_PERMITTED: "not_permitted",
        NOT_SUPPORTED: "not_supported",
        NOT_SUCCEEDED: "not_succeeded"
    }, ee = Y.a.run;
    let te = $.OFF, ne = [], re = null, se = !1;
    const oe = {};
    let ae = !1, ie = () => {
            const e = Object(s.Deferred)();
            return Object(J.vendor)(["vendor/saveas/filesaver"], () => {
                ie = s.Deferred.Pledge, e.resolve()
            }), e.promise()
        }
    ;const Ae = () => null !== re ? s.Deferred.Pledge(re) : !rea.permissions.supported && rea.downloads.supported ? (re = !0, s.Deferred.Pledge(re)) : Q.has(Q.permDownloads).then(e => (re = e, y.a.log("downs: permission to use rea.downloads ->", e), Ae())),
        le = function (e, t) {
            this[e] && this[e]("function" == typeof t ? t() : t)
        }, ce = function (e) {
            this[e] && (le.apply(this, arguments), this[e] = null)
        };
    let ue = 0;
    var de = (e, t, n) => {
        var r = Object(s.Deferred)();
        fe();
        const o = { filename: e.name };
        let a
        ;
        if (K.RUNTIME.FIREFOX && K.RUNTIME.BROWSER_VERSION < 52) a = ["url"]; else {
            a = ["url", "method", "saveAs"], o.body = e.data;
            const t = e.headers;
            t && (Array.isArray(t) ? y.a.warn("downs: invalid type of headers property", t) : o.headers = Object.keys(t).map(e => ({
                name: e,
                value: t[e]
            })))
        }
        a.forEach(t => {
            o[t] = e[t]
        });
        const i = oe[t.download_id] = {
                callbacks: {
                    onprogress: n.onprogress, onload: e => {
                        r.resolve(), A("onload", e)
                    }, onerror: e => {
                        r.reject(e), A("onerror", e)
                    }
                }, url: e.url, name: e.name
            }, A = (...e) => ce.apply(n, e)
        ;
        if (rea.downloads.download(o, (e, t) => {
            if (void 0 === e) return r.reject(t), void A("onerror", { error: t });
            i.id = e;
            const n = t => {
                rea.downloads.cancel(e, () => {
                    s(), t && t()
                })
            };
            var s = () => {
                rea.downloads.search({ id: e }, t => {
                    let n;
                    (n = t[0]) ? pe(n) : y.a.warn("downs: unable to query download ID", e)
                })
            };
            !0 === i.cancel ? n() : (i.cancel = n, i.interval = window.setInterval(s, 1e3))
        }), rea.runtime.lastError) {
            const e = rea.runtime.lastError.message;
            r.reject(e), A("onerror", { error: e })
        }
        return r.promise()
    }, pe = e => {
        const { item: t, key: n } = (e => {
            let t, n
            ;
            return Object.keys(oe).every(r => {
                let s;
                return !(s = oe[r]) || s.id != e || (n = r, t = s, !1)
            }), { item: t, key: n }
        })(e.id);
        if (t) {
            const r = t.callbacks, s = (...e) => ce.apply(r, e), o = () => {
                t.interval && (window.clearInterval(t.interval), t.interval = null), delete oe[n]
            };
            e.error || [e.state, e.state && e.state.current].includes("interrupted") ? (y.a.warn("downs: download of", t.name, "(" + t.url + ")", "failed", e.error), s("onerror", {
                error: $.NOT_SUCCEEDED,
                details: e.error
            }),
                o()) : e.endTime || [e.state, e.state && e.state.current].includes("complete") ? (y.a.log("downs: download of", t.name, "(" + t.url + ")", "finished"), s("onload", {}), o()) : void 0 === e.totalBytes && void 0 === e.bytesReceived || s("onprogress", {
                loaded: e.bytesReceived,
                total: e.totalBytes,
                estimatedEndTime: e.estimatedEndTime
            })
        }
    }, fe = () => {
        re && !ae && rea.downloads.supported && (rea.downloads.onChanged.addListener(pe), ae = !0)
    }, me = e => {
        let t = !1;
        return Object(i.each)(ne, n => {
            if (n && n.length) try {
                let r
                ;
                if ("/" === n[0]) "$" !== (n = n.replace(/^\//g, "").replace(/\/$/g, ""))[n.length - 1] && (y.a.log("downs: patching $ into", n), n += "$"), r = new RegExp(n, "i"); else if ("." === n[0]) {
                    const e = [Object(i.escapeForRegExp)(n), "$"].join("");
                    r = new RegExp(e, "i")
                } else y.a.warn("downs: invalid file extension:", '"' + n + '"', 'starts neither with "." nor with "/"');
                if (r && -1 !== e.search(r)) return y.a.log("downs:", n, "matched @", e), t = !0, !0
            } catch (e) {
                y.a.warn("downs: can't process", n, e)
            }
        }), t
    }, ge = {
        start: function (e, t, n) {
            n = n || {}
            ;const r = ++ue, o = (...e) => ce.apply(t, e);
            if (oe[r] = {}, y.a.log("downs: start", e), !n.internal) {
                if (te == $.OFF) return y.a.warn("downs: feature is not enabled"), void o("onerror", { error: $.NOT_ENABLED });
                if (!e.name || !me(e.name)) return y.a.warn("downs:", e.name, "is not whitelisted"), void o("onerror", { error: $.NOT_WHITELISTED });
                if (!rea.downloads.supported && te == $.CHROME) return y.a.warn("downs: this download mode is not supported"), void o("onerror", { error: $.NOT_SUPPORTED })
            }
            const a = () => {
                if (oe[r].cancel) return o("onerror", { error: "aborted" }), s.Deferred.Breach("aborted")
            }, A = e.name;
            let l;
            return A && (e.name = Object(i.safeFileName)(A, !0), A != e.name && y.a.warn(`downs: changed file name from ${A} to ${e.name} for safety`)), s.Deferred.Pledge().then(() => {
                if (rea.downloads.supported && (n.internal || te == $.CHROME || te == $.DEFAULT)) return Ae().then(e => l = e).then(a);
                l = !1
            }).then(() => "data:" == X.default.parse(e.url).protocol ? W.default.dataUri2Blob(e.url) : !l || !n.internal && (K.RUNTIME.FIREFOX || K.RUNTIME.SAFARI) && te == $.DEFAULT ? ((e, t, n) => {
                var r = Object(s.Deferred)();
                void 0 === n && (n = {});
                const o = (...e) => ce.apply(n, e);
                e.responseType = "blob", e.method = e.method || "GET";
                const a = ee(e, {
                    onload: t => {
                        if (4 != t.readyState || 200 != t.status && 0 != t.status || t.error) {
                            const e = t.error || t.statusText || "xhr_failed";
                            r.reject(e), o("onerror", { error: e })
                        } else {
                            const n = Y.a.parseHeaders(t.responseHeaders)["content-type"],
                                s = new Blob([t.response], { type: e.overrideMimeType || n || "binary/octet-stream" });
                            r.resolve(s), o("onload", {})
                        }
                    }, onerror: e => {
                        r.reject(), o("onerror", e)
                    }, onabort: () => {
                        r.reject(), o("onerror", { error: "aborted" })
                    }, ontimeout: e => {
                        r.reject(), o("ontimeout", e)
                    }, onprogress: n.onprogress
                }, { internal: t.internal });
                return oe[t.download_id] = {
                    cancel: a ? a.abort : () => {
                    }
                }, r.promise()
            })(e, { internal: n.internal, download_id: r }, {
                onerror: t.onerror, ontimeout: t.ontimeout,
                onprogress: t.onprogress
            }) : void 0).then(a => {
                if (a && l) {
                    let n;
                    return s.Deferred.Pledge().then(() => {
                        if (K.RUNTIME.SHARED_OBJECT_URLS) return n = URL.createObjectURL(a);
                        var e = Object(s.Deferred)();
                        return W.default.blob2dataUri(a, e.resolve), e.promise()
                    }).then(s => de({
                        url: s,
                        name: e.name,
                        saveAs: e.saveAs
                    }, { download_id: r }, { onerror: t.onerror, onload: t.onload }).always(() => {
                        n && URL.revokeObjectURL(n)
                    }))
                }
                return a ? (e.name = e.name || "File.download", ie().then(() => {
                    saveAs(a, e.name), o("onload", {})
                })) : l ? de(e, {
                    download_id: r
                }, t) : void (n.internal || te != $.CHROME ? (y.a.warn("downs: download failed"), o("onerror", { error: "failed" })) : (y.a.warn("downs: download permission is missing"), o("onerror", { error: $.NOT_PERMITTED })))
            }).always(() => {
                delete oe[r], window.setTimeout(() => o("ondone", {}), 1)
            }), r
        }, cancel: e => {
            let t;
            if (t = oe[e]) return t.cancel ? "function" == typeof t.cancel && t.cancel() : t.cancel = !0, !0
        }, set_mode: e => {
            te = e, te == $.CHROME && Ae().done(e => {
                e || Q.has(Q.permDownloads).then(e => {
                    const t = Object(s.Deferred)();
                    return se || e ? t.resolve({
                        permission: e, asked: !1
                    }) : Q.ask(Q.permDownloads, z.a.getMessage("Browser_API_Downloads"), z.a.getMessage("Click_here_to_allow_TM_to_start_downloads")).done(e => {
                        t.resolve({ permission: e, asked: !0 })
                    }), se = !0, t.promise()
                }).done(e => {
                    e.permission && e.asked && rea.page.reload()
                })
            })
        }, set_whitelist: e => {
            "Array" === Object(i.toType)(e) && (ne = e)
        }, is_whitelisted: me, remove_permission: () => Q.remove(Q.permDownloads), staticVars: $
    }, he = n(15);
    const Re = {
        mkCompat: function (e, t, n, r) {
            return t && ((t.options.compat_wrappedjsobject || r) && (e = Re.unWrappedJsObjectify(e)), (t.options.compat_metadata || r) && (e = Re.unMetaDataify(e)), (t.options.compat_foreach || r) && (e = Re.unEachify(e))), n || (e = e.replace(/([\'\"]{1,1})use strict([\'\"]{1,1})/g, "$1use strict$2")), e
        }, findPrototypes: function (e) {
            if (e.includes(".toSource(")) return !0;
            const t = ["indexOf", "lastIndexOf", "filter", "forEach", "every", "map", "some", "slice"];
            for (const n in t) if (e.includes("Array." + t[n] + "(")) return !0;
            return !1
        },
        unEachify: function (e) {
            const t = (e = e.replace(/for each[ \t]*\(/gi, "for each(")).split("for each");
            for (let e = 1; e < t.length; e++) {
                const n = t[e];
                if ("(" != n.substr(0, 1)) {
                    t[e] = " each" + t[e];
                    continue
                }
                const r = Object(i.getStringBetweenTags)(n, "(", ")"), s = r.split(" ");
                let o = null, a = null, A = null;
                for (const e in s) "" != s[e] && "var" != s[e] && (o ? a ? A || (A = s[e]) : a = s[e] : o = s[e]);
                if (!o || !A) {
                    t[e] = " each" + t[e];
                    continue
                }
                const l = "var __kk in " + A;
                let c = "";
                c += "{\n    if (!" + A + ".hasOwnProperty(__kk)) continue;",
                    c += " \n    var " + o + " = " + A + "[__kk];", t[e] = t[e].replace(r, l).replace("{", c)
            }
            return t.join("for")
        }, unMetaDataify: function (e) {
            let t = e, n = e;
            const r = "<><![CDATA[", s = "]]></>";
            let o = t.indexOf(r);
            for (; -1 != o;) {
                const e = t.substr(0, o), a = e.lastIndexOf("\n");
                let A = "";
                -1 != a && (A = e.substr(a, e.length - a)), t = t.substr(o, t.length - o);
                const l = A.indexOf("/*"), c = A.indexOf("//");
                if (-1 == l && -1 == c) {
                    const e = Object(i.getStringBetweenTags)(t, r, s);
                    let o = e;
                    o = o.replace(/\\/g, "\\\\"),
                        o = o.replace(/\"/g, '\\"').replace(/\n/g, '\\n" + \n"'), o = o.replace(/^\n/g, "").replace(/\n$/g, ""), o = o.replace(/\r/g, "");
                    const a = r + e + s;
                    n = n.replace(a, '(new CDATA("' + o + '"))')
                }
                t = t.substr(1, t.length - 1), o = t.indexOf(r)
            }
            return n
        }, unWrappedJsObjectify: function (e) {
            const t = e.split("\n");
            for (let e = 0; e < t.length; e++) {
                const n = t[e].indexOf(".wrappedJSObject");
                if (-1 == n) continue;
                const r = t[e].indexOf("//");
                -1 != r && r < n || (t[e] = t[e].replace(/\.wrappedJSObject/g, ""))
            }
            return t.join("\n")
        }
    };
    var ve = Re, we = n(6), be = n(14)
    ;const ke = "root", _e = ["http://*/*", "https://*/*", "file://*/*"];
    let ye, Ee, xe, Te = {}, Ge = {};
    const Me = (e, t) => {
        const n = e.id;
        Te[n] ? (delete e.id, rea.contextMenus.update(n, e)) : rea.contextMenus.create(e), Ge[n] = !0, window.setTimeout(t, 1)
    }, Se = () => {
        const e = Object(s.Deferred)();
        return rea.contextMenus.removeAll(() => {
            ye = null, Te = {}, e.resolve()
        }), e.promise()
    };
    var Ue = {
        init: ({ onclick: e }) => rea.contextMenus.supported ? (rea.contextMenus.onClicked.addListener((t, n) => {
            console.debug(t, n),
            n && t.menuItemId && t.parentMenuItemId && e && e({
                id: t.menuItemId,
                tabId: n.id,
                frameId: t.frameId,
                url: t.frameUrl || t.pageUrl,
                isMenuCommand: t.parentMenuItemId != ke
            })
        }), Se()) : s.Deferred.Pledge(), clean: e => {
            const t = Object(s.Deferred)();
            return e.forEach(e => {
                rea.contextMenus.remove(e, () => {
                    const e = rea.runtime.lastError;
                    e && console.warn(e.message)
                })
            }), t.resolve(), t.promise()
        }, update: ({ contexters: e, commands: t }) => {
            if (Ee) {
                xe && xe.deferred.reject();
                const n = Object(s.Deferred)();
                return xe = {
                    contexters: e, commands: t,
                    deferred: n
                }, n.promise()
            }
            if (!e.length && !t.length) return Se();
            const n = Object.keys(Te);
            return Ge = {}, Ee = s.Deferred.Pledge().then(() => ye || (() => {
                const e = Object(s.Deferred)();
                return Se().then(() => {
                    ye = rea.contextMenus.create({
                        id: ke,
                        contexts: ["all"],
                        title: "Tampermonkey",
                        type: "normal",
                        documentUrlPatterns: _e
                    }, () => {
                        e.resolve()
                    })
                }), e.promise()
            })()).then(() => {
                if (t.length) return s.Deferred.when(t.map(e => {
                    return t = e.uuid, n = e.scriptName, s.Deferred.Pledge().then(() => {
                        const e = Object(s.Deferred)();
                        return Me({
                            id: t,
                            parentId: ke, contexts: ["all"], title: "🛠 " + n, type: "normal", documentUrlPatterns: _e
                        }, () => e.resolve()), e.promise()
                    });
                    var t, n
                }))
            }).then(() => ((e, t) => {
                const n = [];
                return Object(i.each)(e, e => {
                    const t = Object(s.Deferred)();
                    Me({
                        id: e.uuid,
                        contexts: ["all"],
                        parentId: ke,
                        title: "🖱 " + e.name,
                        type: "normal",
                        documentUrlPatterns: _e
                    }, () => t.resolve()), n.push(t.promise())
                }), Object(i.each)(t, e => {
                    const t = Object(s.Deferred)();
                    let r;
                    try {
                        const t = new RegExp("^" + Object(i.escapeForRegExp)(e.scriptName) + "[ -:+/]*")
                        ;r = e.name.replace(t, "")
                    } catch (e) {
                        console.warn(e)
                    }
                    Me({
                        id: e.menuId,
                        contexts: ["all"],
                        parentId: e.uuid,
                        title: "🔧 " + (r || e.name),
                        type: "normal",
                        documentUrlPatterns: _e
                    }, () => t.resolve()), n.push(t.promise())
                }), s.Deferred.when(n)
            })(e, t)).always(() => {
                const e = Object(i.adiff)(Object.keys(Ge), n, "notinfirst");
                e.length && Ue.clean(e), Te = Ge;
                const t = xe;
                Ee = xe = null, t && Ue.update(t).then(t.deferred.resolve)
            }), Ee
        }
    }, Oe = Ue;
    const Ze = A.a.cache.create("us_search").setOptions({
        timeout: 600, check_interval: 300, retimeout_on_get: !0
    }).init();
    let Ie, Ce, De, je;
    const Fe = () => ({ utm_source: "ext", utm_medium: De.substr(0, 3), utm_campaign: rea.runtime.short_id }),
        Ne = e => Ie + "/api?" + X.default.hash2params(Object.assign({ l: Ce, q: e }, Fe()));
    let Be;
    var Pe = (e, { url: t, mode: n }) => {
        je = e.internal, Ie = t, De = n, Ce = z.a.getLocale() || z.a.getUiLocale()
    }, Le = e => {
        const t = Ne(e), n = Ze.get(t);
        if (n) return n;
        const r = Object(s.Deferred)(), o = r.promise(), a = e => {
            r.resolve({ error: e })
        };
        if (Be && Be > Date.now()) return a("rate limit or backoff"), o;
        Be = void 0;
        let i = 1;
        const A = je({
                url: t,
                headers: { Accept: "application/json, */*" }, fetch: !0, responseType: "json"
            }, {
                onload: e => {
                    if (200 == e.status) {
                        const { count: t, url: n } = e.response, s = `${Ie}${n}`;
                        i = 1, r.resolve({ count: Number(t || 0), url: s })
                    } else if (429 === e.status) {
                        const t = Y.a.parseHeaders(e.responseHeaders), n = Number(t["retry-after"] || 15);
                        i = 1, n && (Be = Date.now() + 1e3 * n, a("rate limit"))
                    } else i = Math.min(2 * i, 300), Be = Date.now() + 1e3 * i, a(e.responseText || "unknown error")
                }, onerror: e => {
                    a(e)
                }, onabort: () => {
                    a("aborted")
                }, ontimeout: e => {
                    a(e)
                }
            }, { internal: !0 })
        ;
        return o.abort = () => A.abort(), Ze.set(t, o), o
    }, Ve = e => (e => {
        let t, n = "", r = "";
        return "click" == De ? (n = "?" + X.default.hash2params(Object.assign({ l: Ce }, Fe())), r = "#" + X.default.hash2params(Object.assign({ q: e })), t = Ie + "/" + n + r) : (n = "?" + X.default.hash2params(Object.assign({
            l: Ce,
            q: e
        }, Fe())), t = Ie + "/search?" + n + r), t
    })(e), Qe = () => {
        const e = "?" + X.default.hash2params(Object.assign({ l: Ce }, Fe()));
        return Ie + "/privacy?" + e
    };
    const He = A.a.cache, Xe = window.Tests;
    const qe = rea.FEATURES, ze = new Date, Ye = (() => {
        const e = [], t = (e, t, n) => {
            const r = { title: e.join("\n\n") }, s = t.frag ? "_" + t.frag : "";
            t.path = rea.extension.getURL("images/icon" + s + ".png"), y.a.warn(e.join("\n")), rea.browserAction.setIcon({ path: t.path }), rea.browserAction.setTitle(r), n || rea.extension.onMessage.addListener((t, n, r) => {
                const s = { name: "1", id: "1", sub_menu_item: !0, pos: "left", items: [] };
                s.items.push({
                    name: e[0],
                    image: "info"
                }), e.length > 1 && s.items.push({ name: e[1] }), r({ items: [s], options: { enabled: !1 } })
            })
        };
        return {
            run: () => {
                if ("chromeStorage" == qe.DB.USE && !qe.DB.NO_WARNING) {
                    const e = () => {
                        if (!k) return window.setTimeout(e, 2e3);
                        k.isWorking().fail(() => {
                            if (confirm("Tampermonkey detected that the extension storage is unreliable!\n\nUnfortunately this means that all your settings and userscripts are inaccessible at the moment.\n\nDo you want to visit the FAQ entry that explains how to recover from that?")) {
                                const e = { url: "https://www.tampermonkey.net/faq#Q206" };
                                rea.tabs.create(e, () => {
                                })
                            }
                            t(["Tampermonkey detected that the extension storage is unreliable!"], { frag: "paused" }, !0)
                        })
                    };
                    window.setTimeout(e, 1e3)
                }
                return !0
            }, pause: t, setWarning: function (t, n, r) {
                e.push({ text: t, description: n, url: r })
            }, getWarnings: function () {
                return e
            }
        }
    })();
    if (!Ye.run()) throw"Quitting now";
    window.uris = X.default, window.down = ge, window.perm = Q, window.dast = k;
    const We = Object(i.createUUID)(), Je = {};
    y.a.debug("Starting background fred @" + We), He.create("rundata").setOptions({
        timeout: 5,
        check_interval: 10,
        retimeout_on_get: !0
    }).init(), He.create("regexp").setOptions({
        timeout: 300, check_interval: 120,
        retimeout_on_get: !0
    }).init();
    const Ke = () => {
        const e = Object(s.Deferred)(), t = "0.0.0.0";
        let n, r;
        const o = rea.extension.manifest.version, a = k.getSchemaVersion();
        let A = a;
        return k.getVersion(t).then(e => (r = e, n = we.Parser.versionCmp(o, r) == we.Parser.versionCmp.eNEWER, k.isWiped())).then((function (e) {
            if (!n && e) {
                const e = ["Tampermonkey detected inconsistencies that indicate that your browser wiped the extension database!", "You can continue to use Tampermonkey normally, but your settings and scripts might be lost. Click here to get more information.", "https://www.tampermonkey.net/faq.php#Q207"];
                y.a.warn(e.join("\n")), Ye.setWarning.apply(this, e)
            }
        })).always(() => {
            let l = [], c = 0;
            const u = () => {
                if (c < l.length) {
                    const t = () => {
                        c++, u()
                    }, n = l[c].schema;
                    l[c].cond(n) ? l[c].fn().done(() => {
                        n && (y.a.info("Converted database from", A, "to", n), A = n), t()
                    }).fail(() => {
                        e.reject()
                    }) : t()
                }
            }, d = () => {
                y.a.warn("Incognito mode detected. Database conversion can only be done in non-incognito mode! Stopping now..."), Ye.pause(["Tampermonkey needs to convert its database but this can't be done in incogonito mode!", "Please open a non-incognito mode window and/or restart your browser."], { frag: "paused" })
            };
            l = [{
                cond: function () {
                    return n && !qe.RUNTIME.FIREFOX && !qe.RUNTIME.EDGE && "chromeStorage" == qe.DB.USE && !k.getValue(qe.CONSTANTS.STORAGE.LEGACY_VERSION) && we.Parser.versionCmp("3.5.3603", r) == we.Parser.versionCmp.eNEWER
                }, fn: function () {
                    const e = Object(s.Deferred)();
                    return rea.extension.inIncognitoContext ? (d(), e.reject()) : (y.a.info("Update database..."), A = "3.5.3603", k.migrate("sql", "chromeStorage").done(() => {
                        y.a.info("Copied config for default usage of chrome storage"), e.resolve()
                    }).fail(() => {
                        e.resolve()
                    })), e.promise()
                }
            }, {
                cond: function () {
                    return n && we.Parser.versionCmp("3.6.3650", A) == we.Parser.versionCmp.eNEWER && we.Parser.versionCmp("3.5.3650", r) == we.Parser.versionCmp.eNEWER
                }, fn: function () {
                    const e = Object(s.Deferred)();
                    if (rea.extension.inIncognitoContext) d(), e.reject(); else {
                        A = "3.6.3650";
                        const t = [];
                        [{ o: "TM_config", n: qe.CONSTANTS.STORAGE.CONFIG }, {
                            o: "TM_update_check",
                            n: qe.CONSTANTS.STORAGE.UPDATE
                        }, { o: "TM_version" }, { o: "TM_unload_ts" }].forEach(e => {
                            if (e.n) {
                                const n = k.getValue(e.o);
                                void 0 !== n && t.push(k.setValue(e.n, n))
                            }
                            t.push(k.deleteValue(e.o))
                        });
                        let n = new RegExp("@re$");
                        const o = [];
                        k.listValues().forEach(e => {
                            if (-1 == e.search(n)) return;
                            const t = e.replace(n, "");
                            o.push(t)
                        }), o.forEach(e => {
                            const n = k.getValue(e + "@st"), r = k.getValue(e), s = k.getValue(e + "@re"),
                                o = k.getValue(e + "@source"), a = Rt.getUidByName(e) || Object(i.createUUID)();
                            t.push(k.deleteValue(e + "@st")), t.push(k.deleteValue(e)), t.push(k.deleteValue(e + "@re")), t.push(k.deleteValue(e + "@source")), r && s && o ? (t.push(k.setValue(qe.CONSTANTS.PREFIX.SCRIPT_UID + a, e)),
                                t.push(k.setValue(qe.CONSTANTS.PREFIX.COND + a, s)), t.push(k.setValue(qe.CONSTANTS.PREFIX.STORE + a, n)), t.push(k.setValue(qe.CONSTANTS.PREFIX.SCRIPT + a, o)), t.push(k.setValue(qe.CONSTANTS.PREFIX.META + a, r))) : y.a.warn("invalid script entry", {
                                source: o,
                                meta: r,
                                cond: s
                            })
                        }), n = new RegExp("@st$"), k.listValues().forEach(e => {
                            -1 != e.search(n) && t.push(k.deleteValue(e))
                        }), s.Deferred.when(t).done(() => {
                            y.a.info("Converted database from", r, "to", A), e.resolve()
                        })
                    }
                    return e.promise()
                }
            }, {
                schema: "3.7.0", cond: function (e) {
                    return we.Parser.versionCmp(e, A) == we.Parser.versionCmp.eNEWER
                }, fn: function () {
                    const e = Object(s.Deferred)();
                    if (rea.extension.inIncognitoContext) d(), e.reject(); else {
                        const t = [], n = new RegExp("^" + qe.CONSTANTS.PREFIX.META);
                        k.listValues().forEach(e => {
                            if (-1 == e.search(n)) return;
                            const r = k.getValue(e);
                            r.options && r.options.override && !r.options.override.orig_run_at && (r.options.override.orig_run_at = r.options.run_at || "document-idle", r.options.run_at = null, t.push(k.setValue(e, r)))
                        }), s.Deferred.when(t).done(() => {
                            e.resolve()
                        })
                    }
                    return e.promise()
                }
            }, {
                schema: "4526", cond: function (e) {
                    return n && qe.RUNTIME.SAFARI && "chromeStorage" == qe.DB.USE && we.Parser.versionCmp(e, A) == we.Parser.versionCmp.eNEWER
                }, fn: function () {
                    const e = Object(s.Deferred)();
                    if (rea.extension.inIncognitoContext) d(), e.reject(); else {
                        y.a.info("Update database...");
                        const t = k.migrate("localStorage", "chromeStorage").done(() => {
                            y.a.info("Copied config for default usage of setting storage")
                        }).fail(() => {
                            e.resolve()
                        });
                        e.consume(t)
                    }
                    return e.promise()
                }
            }, {
                schema: "4871", cond: function (e) {
                    return n && we.Parser.versionCmp(e, A) == we.Parser.versionCmp.eNEWER
                }, fn: function () {
                    const e = Object(s.Deferred)();
                    let t, n;
                    const r = k.getValue(qe.CONSTANTS.STORAGE.CONFIG);
                    return r && r.scriptTemplate && (n = it.getDefaults()) && (t = n.script_templates) && t[0] && t[0].value && (t[0].value = r.scriptTemplate, delete r.scriptTemplate, k.setValue(qe.CONSTANTS.STORAGE.CONFIG, r)), e.resolve(), e.promise()
                }
            }, {
                schema: "5465", cond: function (e) {
                    return we.Parser.versionCmp(e, A) == we.Parser.versionCmp.eNEWER
                }, fn: function () {
                    const e = Object(s.Deferred)();
                    if (rea.extension.inIncognitoContext) d(), e.reject(); else {
                        const t = k.getValue(qe.CONSTANTS.STORAGE.CONFIG);
                        t && 1 == t.sync_version && (t.sync_enabled = !1, k.setValue(qe.CONSTANTS.STORAGE.CONFIG, t)), e.resolve()
                    }
                    return e.promise()
                }
            }, {
                cond: function () {
                    return n || we.Parser.versionCmp(A, a) == we.Parser.versionCmp.eNEWER
                }, fn: function () {
                    const e = Object(s.Deferred)();
                    return k.setVersion(o, A).done(() => {
                        e.resolve()
                    }), e.promise()
                }
            }, {
                cond: function () {
                    return n
                }, fn: function () {
                    return y.a.info("First run of version " + o + "!"), Dt.scheduleNotification(r, r == t), s.Deferred.Pledge()
                }
            }, {
                cond: function () {
                    return !0
                }, fn: function () {
                    const t = Object(s.Deferred)();
                    return e.resolve(), window.setTimeout(t.resolve, qe.MISC.TIMEOUT), t.promise()
                }
            }], u()
        }), e.promise()
    }, $e = function (e, t) {
        const n = (0 == e) + "#" + t;
        let r = He.items.rundata.getj(n);
        if (r) r = r.oldret; else {
            const s = [], o = [], a = [], i = [], A = {};
            if (t) {
                const n = ht.determineScriptsToRun(t, !0)
                ;
                for (let r = 0; r < n.length; r++) {
                    const l = n[r];
                    0 != e && (!0 === l.options.noframes || null === l.options.noframes && !0 === l.options.override.orig_noframes) || (l.evilness && l.evilness >= Math.min(ot.SEVERITY_MAX, it.values.script_blacklist_severity) ? a.push(l) : l.enabled ? (A[l.uuid] = t, ht.isContexter(l) ? i.push(l) : s.push(l)) : o.push(l))
                }
            }
            r = {
                contexters: i,
                runners: s,
                disabled: o,
                evilness: a,
                script_map: A
            }, t && He.items.rundata.setj(n, { frameId: e, oldret: r })
        }
        return r
    }, et = function (e, t) {
        const { runners: n, contexters: r } = e, s = [{
                m: "native",
                t: [ge.staticVars.DEFAULT, ge.staticVars.NATIVE]
            }, { m: "disabled", t: [ge.staticVars.OFF] }, { m: "browser", t: [ge.staticVars.CHROME] }].filter(e => {
                if (e.t.includes(it.values.downloads_mode)) return !0
            }).map(e => e.m)[0] || "disabled",
            o = !rea.extension.inIncognitoContext && "off" != it.values.external_connect && ht.validUrl(t, _t.externally_connectable_reg);
        return {
            scripts: n,
            contexters: r.length,
            raw: {},
            external_connect: o,
            isFirstPartyIsolation: yt.fpi,
            downloadMode: s,
            enforce_strict_mode: "on" == it.values.runtime_strict_mode,
            measure_scripts: it.values.debug,
            logLevel: it.values.logLevel
        }
    }, tt = (() => {
        const e = {};
        let t = 1;
        const n = t++, r = t++, o = t++, a = t++, A = t++, l = t++, c = t++, u = () => {
            const e = {
                frames: { 0: { state: n } },
                tabs: { reset_ts: Date.now() },
                scripts: {},
                urls: {},
                maps: {},
                contexts: { onUnload: {} },
                stats: { running: 0, disabled: 0, searched: -1 },
                extra: {}
            };
            return Object.defineProperties(e.urls, {
                length: {
                    value: 0,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e
        }, d = function (t, n, r) {
            let s
            ;st.isAllowed(r) ? s = $e(n, r) : (y.a.log("This URL is filtered by the security settings:", r, "-> Do nothing!"), tt.set.forbidden(t, n), s = {
                contexters: [],
                runners: [],
                disabled: [],
                evilness: [],
                script_map: {}
            }), e[t].scripts[r] = s, s.runners.forEach(e => {
                e.webRequest && Zt.scripts.set(t, n, e.uuid, e.webRequest)
            })
        }, p = function (e, t, n, r, o) {
            const a = [];
            for (let e = 0; e < r.length; e++) {
                const t = r[e];
                a.push(pt.bundle({ url: n }, t))
            }
            let i;
            return s.Deferred.when(a).always(e => {
                o ? o(e) : i = e
            }), i
        }, f = (t, n) => {
            it.values.userscript_search_url && "badge" == it.values.userscript_search_mode && Le(t).then(r => {
                let s, o;
                (s = e[n]) && (o = s.urls[t]) && 0 === o.frameId && (s.stats.searched = r.count, Ut.setBadge(n))
            })
        };
        const m = {}, g = {}, h = {}, R = {};
        let v, w;
        const b = {
            getActive: () => ({ windowId: v, tabId: w }), listeners: {
                once: {
                    whenReady: function (t, n) {
                        !e[t] || e[t].frames[0].state < o ? b.listeners.once.onReady(t, n) : n()
                    }, onReady: function (e, t) {
                        const n = e => {
                                b.listeners.remove.onCommited(r), b.listeners.remove.onCompleted(s), e && t()
                            }
                        ;var r = b.listeners.add.onCommited(t => {
                            t === e && n(!0)
                        }), s = b.listeners.add.onCompleted(t => {
                            t === e && n(!0)
                        })
                    }
                }, add: {
                    onReset: function (e) {
                        const t = Object(i.createUUID)();
                        return m[t] = e, t
                    }, onCommited: function (e) {
                        const t = Object(i.createUUID)();
                        return g[t] = e, t
                    }, onCompleted: function (e) {
                        const t = Object(i.createUUID)();
                        return h[t] = e, t
                    }, onRemoved: function (e) {
                        const t = Object(i.createUUID)();
                        return R[t] = e, t
                    }
                }, remove: (() => {
                    const e = (e, t) => {
                        delete e[t]
                    };
                    return {
                        onReset: function (t) {
                            e(m, t)
                        }, onCommited: function (t) {
                            e(g, t)
                        },
                        onCompleted: function (t) {
                            e(h, t)
                        }, onRemoved: function (t) {
                            e(R, t)
                        }
                    }
                })()
            }, events: {
                active: (e, t) => {
                    v = t, w = e, rea.tabs.getSelected(t, t => {
                        t.id == e && f(t.url, e)
                    })
                }, reset: function (t, r) {
                    let s;
                    qe.RUNTIME.FAST_EXEC_SUPPORT && (s = e[t]) && Object.keys(s.frames).forEach(e => {
                        b.events.clean(t, e)
                    }), s = e[t] = u(), s.frames[0].state = n, Object(i.each)(m, e => {
                        e && e(t, r)
                    })
                }, response: function (t, s, o) {
                    if (!it.values.enabled) return;
                    const a = e[t] = e[t] || u(), i = a.frames[s] = a.frames[s] || {}, A = i.state || n;
                    0 === s && (a.tabs.response_ts = Date.now())
                    ;const l = X.default.woHash(o);
                    A < r && (d(t, s, l), i.state = r);
                    const c = a.scripts[l];
                    return c ? c.runners.length + c.contexters.length : 0
                }, commited: function (t, s, a) {
                    if (!it.values.enabled) return;
                    const A = X.default.parse(a);
                    if ("http:" !== A.protocol && "https:" !== A.protocol && "file:" !== A.protocol) return;
                    const l = e[t] = e[t] || u(), c = l.frames[s] = l.frames[s] || {}, p = c.state || n;
                    if (!(p >= o)) {
                        if (c.state = o, p < r) {
                            const e = X.default.woHash(a);
                            d(t, s, e)
                        }
                        Object(i.each)(g, e => {
                            e && e(t)
                        })
                    }
                }, loading: function (t, s, o) {
                    if (!it.values.enabled) return
                        ;
                    const i = X.default.parse(o);
                    if (("http:" === i.protocol || "https:" === i.protocol || "file:" === i.protocol) && 0 === s && "file:" === i.protocol) {
                        const i = e[t] = e[t] || u();
                        i.frames[s] = i.frames[s] || {};
                        const A = i.frames[s].state || n;
                        if (A >= a) return;
                        if (i.frames[s].state = a, A < r) {
                            const e = X.default.woHash(o);
                            d(t, s, e)
                        }
                    }
                }, run: function (t, n, r, s, o) {
                    if (!it.values.enabled) return;
                    const a = 0 === n || qe.RUNTIME.FAST_EXEC_SUPPORT ? n : r, l = e[t] = e[t] || u();
                    l.frames[a] = l.frames[a] || {};
                    const c = X.default.woHash(s);
                    let f = l.scripts[c]
                    ;
                    if (!f && (y.a.log("tv: lazy init @ events.run(" + t + ", " + n + ", " + r + ", " + s + ")"), d(t, n, c), f = l.scripts[c], !f)) return void y.a.warn("tv: no script run info for tab " + t + " @ " + c, y.a.D ? l.scripts : "");
                    const m = l.frames[a].state;
                    l.frames[a].state = A, m != A && (function (t, n, r) {
                        let s = 1;
                        const o = (n, r) => {
                            const o = 1 === s;
                            void 0 === e[t].maps[r] && o && (e[t].maps[r] = {
                                count: 0,
                                all_time: 0,
                                urls: []
                            }), o && (e[t].maps[r].urls.push(n), e[t].maps[r].all_time++), e[t].maps[r].count += s
                        };
                        Object(i.each)(r, o),
                            e[t].contexts.onUnload[n] = e[t].contexts.onUnload[n] || [], e[t].contexts.onUnload[n].push(() => {
                            e[t] && (s = -1, Object(i.each)(r, o))
                        })
                    }(t, a, f.script_map), function (t, n, r) {
                        const s = s => {
                            1 === s && (void 0 === e[t].urls[r] ? e[t].urls[r] = {
                                frameId: n,
                                count: 0
                            } : 0 === n && (e[t].urls[r].frameId = n)), e[t].urls[r].count += s, e[t].urls.length = -1
                        };
                        s(1), e[t].contexts.onUnload[n] = e[t].contexts.onUnload[n] || [], e[t].contexts.onUnload[n].push(() => {
                            e[t] && s(-1)
                        })
                    }(t, a, c), function (t, n, r, s) {
                        e[t].stats.running += r, e[t].stats.disabled += s,
                            e[t].contexts.onUnload[n] = e[t].contexts.onUnload[n] || [], e[t].contexts.onUnload[n].push(() => {
                            e[t].stats.running -= r, e[t].stats.disabled -= s
                        }), e[t].tabs.ts = Date.now()
                    }(t, a, f.runners.length, f.disabled.length));
                    const g = f.contexters;
                    return {
                        runners: p(0, 0, c, f.runners, o ? e => {
                            b.events.clean(t, a, s), o({ runners: e, contexters: g })
                        } : null), contexters: g
                    }
                }, clean: function (t, n, r) {
                    if (!it.values.enabled) return;
                    let s, o, a;
                    (o = e[t]) && (r && (s = X.default.woHash(r), delete o.scripts[s]),
                    (a = tt.get.objurl(t, n)) && URL.revokeObjectURL(a))
                }, complete: function (t, r, s) {
                    const o = X.default.parse(s);
                    if (it.values.enabled && ("http:" === o.protocol || "https:" === o.protocol || "file:" === o.protocol)) {
                        if (0 === r) {
                            const a = e[t] = e[t] || u();
                            a.frames[r] = a.frames[r] || {};
                            const i = a.frames[r].state || n;
                            if (a.frames[r].state = l, !tt.get.empty(t) && tt.get.stats(t).running) {
                                if (i < A) return void y.a.warn("tv: no script run info!");
                                "file:" === o.protocol ? window.setTimeout(() => {
                                    rea.tabs.sendMessage(t, { method: "onLoad" }, { frameId: r })
                                }, 500) : rea.tabs.sendMessage(t, { method: "onLoad" }, { frameId: r })
                            }
                            w == t && f(s, t)
                        }
                        Object(i.each)(h, e => {
                            e && e(t)
                        })
                    }
                }, unload: function (t, n, r) {
                    const s = 0 === n || qe.RUNTIME.FAST_EXEC_SUPPORT ? n : r;
                    qe.RUNTIME.FAST_EXEC_SUPPORT && b.events.clean(t, n);
                    const o = e[t] = e[t] || u();
                    if (o.frames[s] = o.frames[s] || {}, o.frames[s].state = c, o.contexts.onUnload[s]) {
                        for (let e = 0; e < o.contexts.onUnload[s].length; e++) o.contexts.onUnload[s][e]();
                        o.contexts.onUnload[s] = []
                    }
                    delete o.frames[s]
                }, remove: function (t) {
                    let n
                    ;qe.RUNTIME.FAST_EXEC_SUPPORT && (n = e[t]) && Object.keys(n.frames).forEach(e => {
                        b.events.clean(t, e)
                    }), delete e[t], Object(i.each)(R, e => {
                        e && e(t)
                    })
                }
            }, set: {
                extra: function (t, n, r, s) {
                    const o = e[t] = e[t] || u();
                    null === n ? o.extra[r] = s : (o.extra[r] = o.extra[r] || {}, o.extra[r][n] = s)
                }, objurl: function (e, t, n) {
                    b.set.extra(e, t, "objurl", n)
                }, blocker: function (e) {
                    b.set.extra(e, null, "blocker", !0)
                }, forbidden: function (e, t) {
                    0 === t && b.set.extra(e, null, "forbidden", !0)
                }, requests: function (t, n, r, s) {
                    let o, a, i;
                    o = e[t] = e[t] || u(),
                        a = o.frames[n] = o.frames[n] || {}, i = a.requests = a.requests || {}, i[r] = s
                }
            }, get: {
                extra: function (t, n, r, s, o) {
                    void 0 === s && (s = null);
                    let a = null;
                    const i = (e[t] ? e[t].extra : {})[r];
                    return null !== n ? i && (a = i[n], o && delete i[n]) : a = i, a || s
                }, empty: function (t) {
                    let n = !0;
                    if (e[t]) if (0 == e[t].urls.length) ; else {
                        if (-1 == e[t].urls.length) return e[t].urls.length = 0, Object(i.each)(e[t].urls, (n, r) => {
                            "length" !== r && n.count > 0 && e[t].urls.length++
                        }), b.get.empty(t);
                        n = !1
                    }
                    return n
                }, urls: function (t, n) {
                    let r
                    ;
                    return n ? (r = e[t].maps[n]) ? r.urls : [] : (r = e[t]) ? r.urls : {}
                }, history: function (t) {
                    return e[t].maps
                }, stats: function (t, n) {
                    const r = {};
                    return e[t] && (r.running = e[t].stats.running, r.disabled = e[t].stats.disabled, r.searched = e[t].stats.searched, n && (r.unique = 0, Object.keys(e[t].maps).forEach(n => {
                        e[t].maps[n].count > 0 && r.unique++
                    }))), r
                }, tabs: function () {
                    const t = {};
                    return Object(i.each)(e, (e, n) => {
                        t[n] = { ts: e.response_ts }
                    }), t
                }, objurl: function (e, t) {
                    return b.get.extra(e, t, "objurl", null, !0)
                }, blocker: function (e) {
                    return b.get.extra(e, null, "blocker")
                }, forbidden: function (e) {
                    return b.get.extra(e, null, "forbidden")
                }, requests: function (t, n) {
                    return e[t] && e[t].frames[n] ? e[t].frames[n].requests : null
                }
            }
        };
        return b
    })(), nt = (() => {
        const e = {};
        return {
            get: function (t, n) {
                return e[t] || (e[t] = {}), e[t][n] || (e[t][n] = {}), e[t][n]
            }, getAll: function (t) {
                const n = {};
                return Object.keys(e).forEach(r => {
                    n[r] = {}, n[r] = e[r][t]
                }), n
            }, set: function (t, n, r) {
                e[t] || (e[t] = {});
                const s = {};
                r && Object.keys(r).forEach(e => {
                    s[e] = r[e]
                }), e[t][n] = s
            },
            cleanTab: function (t) {
                delete e[t]
            }
        }
    })(), rt = function (e, t) {
        if (!e || -1 != e.search(/#bypass=true/) || -1 != e.search(qe.REQUESTS.GET_INTERNAL_PAGE_REGEXP()) || !["https:", "http:", "file:", "ftp:"].some(t => e.startsWith(t))) return !1;
        const n = t ? e : e.split(/[?#$]/)[0],
            r = -1 != n.search(/[^/]{1}\.user\.(js#|js\?|js$)/) || -1 != n.search(/[^/]{1}\.tamper\.(js#|js\?|js$)/)
        ;
        return r ? !(-1 != n.search(/^htt[ps]{1,2}:\/\/code\.google\.com/) || -1 != n.search(/^htt[ps]{1,2}:\/\/(github|gitlab)\.com/) && !ht.determineOriginOfUrl(n) || -1 != n.search(/^htt[ps]{1,2}:\/\/bitbucket\.org/) && !ht.determineOriginOfUrl(n)) : r
    };
    var st = (() => {
        const e = "PageFilter";
        return {
            init: function () {
                const t = () => {
                    He.items.regexp.remove(e)
                };
                it.addChangeListener("forbiddenPages", t), it.addChangeListener("page_whitelist", t), it.addChangeListener("page_filter_mode", t)
            }, isAllowed: function (t) {
                let n = !1, r = !1
                ;const s = at.getSyncRemoteDomains().map(e => "*://" + e + "/*"),
                    o = it.values.forbiddenPages.concat(s), a = o.length > 0, i = it.values.page_whitelist.length > 0;
                switch (it.values.page_filter_mode) {
                    case"black":
                        r = a;
                        break;
                    case"off":
                        break;
                    case"white":
                        n = i;
                        break;
                    default:
                        n = i, r = a
                }
                let A;
                return (A = He.items.regexp.get(e)) || (A = ht.regexify({
                    inc: n ? it.values.page_whitelist : void 0,
                    exc: r ? o : void 0
                }), He.items.regexp.set(e, A)), !r && !n || ht.validUrl(t, A)
            }
        }
    })(), ot = (() => {
        const e = "https://blacklist.tampermonkey.net/get.php", t = (e, t) => {
            let n = !1;
            if (t.length) return n = "/" == t.substr(0, 1) ? ht.matchUrl(e, ht.convertToRegExp(t)) : -1 != e.indexOf(t), n && y.a.log('black: entry "' + t + '" matched'), n
        }, n = {
            SEVERITY_MAX: 10, SEVERITY_MANUALLY_DEFINED: 11, SEVERITY_FOISTED_SCRIPT: 12, init: function () {
                const e = Object(s.Deferred)(), t = () => {
                    "server" === it.values.script_blacklist_type && window.setTimeout(n.checkUpdate, 2e4)
                };
                return t(), it.addChangeListener("script_blacklist_type", t), e.resolve(), e.promise()
            }, getWarningsFor: function (e) {
                const n = []
                ;
                return e && Object(i.each)(it.values.script_blacklist_server, r => {
                    if (!r) return;
                    let s;
                    if (Object(i.each)(r.rules, n => (s |= t(e, n), 1 != s)), s) if (r.reasons) {
                        const e = z.a.getBestLocale(Object.keys(r.reasons));
                        n.push(r.reasons[e || "en"])
                    } else r.reason && n.push(r.reason)
                }), n
            }, getEvilnessOf: function (e) {
                if ("off" === it.values.script_blacklist_type) return !1;
                if (!e) return 0;
                let r = !1, s = 0;
                return Object(i.each)(it.values.require_blacklist, n => (r |= t(e, n), 1 != r)),
                    r ? s = n.SEVERITY_MANUALLY_DEFINED : "server" === it.values.script_blacklist_type && Object(i.each)(it.values.script_blacklist_server, n => {
                        if (n) return Object(i.each)(n.rules, n => (r |= t(e, n), 1 != r)), r ? (s = n.severity, !1) : void 0
                    }), Number(s)
            }, checkUpdate: function (t) {
                const n = Object(s.Deferred)();
                let r, o = mt.getConfig();
                if (t || Date.now() - o.black.last > 6048e5) {
                    const a = (e, t) => {
                        const n = Object(s.Deferred)(), r = {
                            method: "GET", url: e, nocache: t, retries: qe.XMLHTTPREQUEST.RETRIES,
                            overrideMimeType: "text/plain; charset=x-user-defined"
                        };
                        return At.internal(r, {
                            ondone: function (e) {
                                n.resolve(e)
                            }
                        }), n.promise()
                    };
                    a(e + "?version=get").then(n => {
                        if (4 == n.readyState && 200 == n.status) {
                            try {
                                const e = JSON.parse(n.responseText);
                                r = e.version
                            } catch (e) {
                                y.a.warn("black: unable to parse version response! " + n.responseText)
                            }
                            if (y.a.info("black: local version: " + o.black.version + " remote: " + r), r > o.black.version || t) return a(e, !0)
                        }
                    }).then(e => {
                        if (e && 4 == e.readyState && 200 == e.status) try {
                            const t = JSON.parse(e.responseText);
                            t && t.blacklist && 1 == t.version && (it.values.script_blacklist_server = t.blacklist), y.a.info("black: updated blacklist to ", t)
                        } catch (t) {
                            y.a.warn("black: blacklist update failed! ", e.responseText)
                        }
                    }).always(() => {
                        o = mt.getConfig(), o.black.last = Date.now(), o.black.version = r || o.black.version, mt.setConfig(o), n.resolve()
                    })
                } else n.resolve();
                return n.promise()
            }
        };
        return n
    })();
    window.blak = ot;
    var at = (() => {
        let e = 0;
        const t = [], n = {
            to: null, force: null, t: 0
        }, r = {}, o = A.a.createQueue(1), a = {}, i = (e, t) => o.add(() => {
            if (!Lt.caps.syncsSource) {
                let t;
                if (!e.url || !(t = X.default.parse(e.url)) || !t.protocol.match(/https?:/)) return y.a.log("sync: skip export due to missing URL", e.name, e.url), s.Deferred.Pledge(!1)
            }
            return y.a.log("sync: export", e.name, e.url), Lt.setMeta(e, { lastModified: e.lastModified }).then(() => {
                if (Lt.setSource && t) return Lt.setSource(e.uuid, t)
            }).then(() => !0)
        }), l = e => {
            const t = e.downloadURL ? e.downloadURL.split("#")[0] : null,
                n = e.fileURL ? e.fileURL.split("#")[0] : null, r = [n, t].filter(e => {
                    if (!e || "file:" !== X.default.parse(e).protocol) return e
                })[0], s = {
                    uuid: e.uuid,
                    name: e.name,
                    options: {},
                    durl: t,
                    furl: n,
                    url: r,
                    lastModified: e.lastModified || e.lastUpdated
                };
            for (const t in p.SYNCED) !0 === p.SYNCED[t] && null !== e.options[t] && (s.options[t] = e.options[t]);
            return s
        }, c = () => {
            const e = [];
            return Rt.getUidList().forEach(t => {
                const n = Rt.getByUid(t);
                if (n.script && n.cond) {
                    const t = l(n.script)
                    ;
                    if (!t.lastModified && !Xe) return void y.a.warn("sync: script without updated/modified timestamps found", n.script);
                    if (n.script.evilness && n.script.evilness >= Math.min(ot.SEVERITY_MAX, it.values.script_blacklist_severity)) return void y.a.warn("sync: ignore evil script", n.script);
                    e.push(t)
                }
            }), e
        }, u = () => {
            p.enabled && p.sync(500, !0)
        };
        let d = null;
        var p = {
            enabled: !1, SYNCED: { comment: !0 }, configChangeListener: function () {
                d || (d = window.setTimeout(() => {
                    d = null, p.init().done(() => {
                        p.enabled && p.sync(3e3)
                    })
                }, 3e3))
            },
            init: function () {
                const e = Object(s.Deferred)();
                return p.enabled = !1, (() => {
                    if (it.values.sync_enabled && it.values.sync_type) {
                        let e;
                        return it.values.sync_type == Lt.types.eWEBDAV && (e = {
                            url: it.values.cloud_url,
                            basic_auth: W.default.Base64.encode(it.values.cloud_user + ":" + it.values.cloud_pass)
                        }), Lt.init(it.values.sync_type, e).done(e => {
                            p.enabled = e, p.enabled ? Lt.addChangeListener(u) : y.a.warn("sync: init failed!")
                        }).fail(() => {
                            y.a.warn("sync: init failed!")
                        })
                    }
                    return s.Deferred.Pledge()
                })().always(() => {
                    e.resolve(p.enabled)
                }), e.promise()
            }, finalize: function () {
            }, reset: function () {
                return p.enabled ? Lt.reset() : s.Deferred.Breach()
            }, addSyncDoneCallback: function (e) {
                t.push(e)
            }, sync: function (A, l) {
                const u = Date.now();
                A = A || 500, l = n.force || l, n.to ? (window.clearTimeout(n.to), n.ts < u + A && (A = n.ts - u) < 1 && (A = 1)) : y.a.log("sync: schedule sync for run in " + A + " ms"), n.force = l, n.ts = u + A, n.to = window.setTimeout(() => {
                    (n => {
                        if (!p.enabled) return;
                        if (e > 0) return void (n && p.addSyncDoneCallback(e => {
                            e && p.sync(50, n)
                        }));
                        e++
                        ;let A = null, l = null, u = 0, d = 0, f = !0;
                        const m = e => {
                            if (e) for (let t = 0; t < l.length; t++) if (l[t].uuid == e) return l[t];
                            return null
                        }, g = (e, t, n) => n ? Math.floor(e / n) * n < Math.floor(t / n) * n : e < t;
                        ft.all("status", {
                            key: "sync_status",
                            class: "information",
                            title: z.a.getMessage("Script_Sync"),
                            text: z.a.getMessage("Sync_is_running"),
                            timeout: 9e5
                        }), s.Deferred.Pledge().then(() => (A = c(), Lt.list().done(e => {
                            l = e
                        }).fail(() => {
                            y.a.warn("sync: unable to get remotelist!")
                        }))).then(() => {
                            const e = l.map(e => {
                                let t;
                                const n = (e => {
                                    if (!e) return null
                                        ;
                                    for (let t = 0; t < A.length; t++) if (A[t].uuid == e) return A[t]
                                })(e.uuid);
                                let i, l;
                                if (n) {
                                    if (!e.lastModified && it.values.sync_type == Lt.types.eCHROMESYNC) for (const t in p.SYNCED) if (!0 === p.SYNCED[t] && n.options[t] != e.options[t]) {
                                        y.a.log("sync: importable change detected!", e.name, "key:", t, e), i = !0;
                                        break
                                    }
                                    e.lastModified && g(n.lastModified, e.lastModified, e.precision) && (l = e.lastModified, i = !0,
                                        y.a.log("sync: importable change detected!", e.name, "local ts:", new Date(n.lastModified), "remote ts:", new Date(e.lastModified), e))
                                } else (t = a[e.uuid]) && e.lastModified && g(t.lastModified, e.lastModified, e.precision) && (l = e.lastModified, i = !0, y.a.log("sync: changed cache entry detected!", e.name, "local ts:", new Date(t.lastModified), "remote ts:", new Date(e.lastModified), e));
                                if (!n && !t || i) return () => s.Deferred.Pledge().then(() => Lt.caps.specialMeta ? Lt.getMeta(e.uuid) : s.Deferred.Pledge(e)).then(e => {
                                    if (!e) return
                                        ;
                                    let A;
                                    if (n) {
                                        if (e.options.removed) u++, y.a.log("sync: remove local script", e.uuid, e.name, e.url), ht.doRemove(n.uuid, !1); else if (i) return c = l, d = e.lastModified, ((f = e.precision) ? Math.floor(c / f) * f != Math.floor(d / f) * f : c != d) && (e.lastModified && y.a.warn("sync: list and meta data lastModified differ, this will cause extra traffic!", "file ts:", new Date(l), "meta ts:", new Date(e.lastModified), e), e.lastModified = l), u++, y.a.log("sync: update local script", e.uuid, e.name, e.url), s.Deferred.Pledge().then(() => {
                                            if (Lt.caps.syncsSource) {
                                                const t = Object(s.Deferred)();
                                                return Lt.getSource(e.uuid, null).then(t => t ? ht.doSave({
                                                    uuid: e.uuid,
                                                    src: t,
                                                    ask: !1,
                                                    internal: !0,
                                                    save: !0
                                                }) : s.Deferred.Breach()).fail(() => {
                                                    y.a.warn("sync: getting source of", e.uuid, "failed", e)
                                                }).always(t.resolve), t.promise()
                                            }
                                        }).then(() => {
                                            const t = Rt.getByUid(n.uuid);
                                            for (A in p.SYNCED) !0 === p.SYNCED[A] && (t.script.options[A] = e.options[A]);
                                            return t.script.lastModified = e.lastModified, ht.doModify(t.script.uuid, t.script, !1)
                                        })
                                    } else if (n || e.options.removed) !t && e.options.removed && (a[e.uuid] = e); else {
                                        const t = Object(s.Deferred)();
                                        if (!(e.url && r[e.url] || e.uuid && r[e.uuid])) return (e => o.add(() => {
                                            y.a.log("sync: import", e.uuid, e.name, e.url);
                                            const t = { imported: it.values.sync_type }, n = {};
                                            for (const t in p.SYNCED) !0 === p.SYNCED[t] && (n[t] = e.options[t]);
                                            const r = {
                                                    uuid: e.uuid,
                                                    ask: !1,
                                                    internal: !0,
                                                    sync: t,
                                                    force_meta: { lastModified: e.lastModified, fileURL: e.url },
                                                    force_options: n
                                                }, s = { silent_fail: !0 }
                                            ;
                                            return (Lt.caps.syncsSource ? Lt.getSource(e.uuid).then(e => ht.installFromSource(e, r, s)) : ht.installFromUrl(e.url, r, s)).then(() => {
                                                He.items.rundata.removeAll()
                                            })
                                        }))(e).done(t => {
                                            t ? u++ : (y.a.warn("sync: unable to import", e), r[e.url] = !0, r[e.uuid] = !0)
                                        }).fail(() => {
                                            y.a.warn("sync: unable to load", e), r[e.url] = !0, r[e.uuid] = !0
                                        }).always(t.resolve), t.promise();
                                        y.a.warn("sync: skip previously failed import", e)
                                    }
                                    var c, d, f
                                })
                            }).filter(e => e);
                            return s.Deferred.onebyone(e)
                        }).then(() => (u && (ht.reorderScripts(),
                            ft.all("status", {
                                key: "sync",
                                class: "information",
                                title: z.a.getMessage("Script_Sync"),
                                text: z.a.getMessage("0count0_changes_imported", u),
                                timeout: 1e4
                            })), A = c(), s.Deferred.Pledge())).then(() => {
                            const e = [];
                            for (let t = 0; t < A.length; t++) e.push((() => {
                                const e = A[t];
                                let n, r;
                                if (!Lt.caps.syncsSource && !e.url) return s.Deferred.Pledge();
                                const o = m(e.uuid);
                                var a, l, c;
                                if (o ? o.lastModified && (a = e.lastModified, l = o.lastModified, !((c = o.precision) ? Math.floor(a / c) * c > Math.floor(l / c) * c : a > l)) || (n = !0,
                                    y.a.log("sync: exportable change detected!", e.name, "remote ts:", new Date(o.lastModified), "local ts:", new Date(e.lastModified), e)) : y.a.log("sync: export because remotely missing!", e.name, "local ts:", new Date(e.lastModified), e), !o || n || Lt.caps.syncsSource && !o.source) {
                                    if (Lt.caps.syncsSource) {
                                        const t = Rt.getByUid(e.uuid);
                                        t.script && t.cond && (r = t.script.textContent)
                                    }
                                    return i(e, r).then(e => {
                                        e && d++
                                    })
                                }
                                return s.Deferred.Pledge()
                            })());
                            return s.Deferred.when(e)
                        }).fail(() => {
                            f = !1
                        }).done(() => {
                            f = !0
                        }).always(() => {
                            y.a.log("sync: finished"), 0 == --e && (ft.all("status", {
                                key: "sync_status",
                                class: "information",
                                title: z.a.getMessage("Script_Sync"),
                                text: z.a.getMessage("Sync_finished"),
                                timeout: 15e3
                            }), d && ft.all("status", {
                                key: "sync",
                                class: "information",
                                title: z.a.getMessage("Script_Sync"),
                                text: z.a.getMessage("0count0_changes_exported", d),
                                timeout: 5e3
                            }), (e => {
                                for (; t.length;) t.shift()(e)
                            })(f))
                        })
                    })(n.force), n.to = null, n.force = null
                }, A)
            }, scriptAddedCb: function (e, t) {
                if (!p.enabled) return;
                const n = l(t);
                i(n, t.textContent)
            },
            scriptChangedCb: function () {
                p.enabled && p.sync(6e4)
            }, scriptRemovedCb: function (e, t) {
                var n;
                p.enabled && (n = l(t), y.a.log("sync: remove", n.name, n.url), Lt.remove(n))
            }, getSyncRemoteUrl: function (e) {
                if (p.enabled) return Lt.getRemoteUrl(e)
            }, getSyncRemoteDomains: function () {
                return Lt.getRemoteDomains() || []
            }
        };
        return p
    })();
    window.sycl = at;
    var it = (() => {
        const e = [{
            name: "ECMAScript 5",
            value: ["// ==UserScript==", "// @name         New Userscript", "// @namespace    http://tampermonkey.net/", "// @version      0.1", "// @description  try to take over the world!", "// @author       You", "// @match        <$URL$>", "// @icon         <$ICON$>", "// @grant        none", "// ==/UserScript==", "", "(function() {", "    'use strict';", "", "    // Your code here...", "})();"].join("\n")
        }, {
            name: "ECMAScript 6",
            value: ["// ==UserScript==", "// @name         New ES6-Userscript", "// @namespace    http://tampermonkey.net/", "// @version      0.1", "// @description  shows how to use babel compiler", "// @author       You", "// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js", "// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js", "// @match        <$URL$>", "// @icon         <$ICON$>", "// ==/UserScript==", "", "var inline_src = (<><![CDATA[", "", "    // Your code here...", "", "]]></>).toString();", 'var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });', "eval(c.code);"].join("\n")
        }, {
            name: "CoffeeScript",
            value: ["// ==UserScript==", "// @name         New Coffee-Userscript", "// @namespace    http://tampermonkey.net/", "// @version      0.1", "// @description  shows how to use coffeescript compiler", "// @author       You", "// @require      http://coffeescript.org/browser-compiler/coffeescript.js", "// @match        <$URL$>", "// @icon         <$ICON$>", "// ==/UserScript==", "", "var inline_src = (<><![CDATA[", "", "    // Your code here", "", "]]></>).toString();", "var compiled = this.CoffeeScript.compile(inline_src);", "eval(compiled);"].join("\n")
        }], t = {}, n = {
            enabled: !0,
            configMode: 0,
            debug: !1,
            logLevel: 0,
            showFixedSrc: !1,
            webrequest_modHeaders: "yes",
            webrequest_fixCSP: "yes",
            webrequest_fixContentCSP: "no",
            notification_showUpdate: "changelog",
            notification_silentScriptUpdate: !0,
            script_templates: e,
            scriptUpdateCheckPeriod: 864e5,
            scriptUpdateHideNotificationAfter: 15e3,
            scriptUpdateCheckDisabled: !1,
            scriptUrlDetection: "auto",
            script_file_access: qe.RUNTIME.FIREFOX ? "off" : "externals",
            runtime_strict_mode: "byscript",
            runtime_inject_mode: "default",
            autoReload: !1,
            appearance_badges: "running",
            appearance_badge_color: "gcal" === rea.runtime.short_id ? "#444" : "#ee3131",
            appearance_badge_text_color: "#ffffff",
            editor_enabled: !0,
            editor_fontSize: 100,
            editor_theme: "default",
            editor_keyMap: "windows",
            editor_indentUnit: 4,
            editor_tabSize: 4,
            editor_indentWithTabs: "spaces",
            editor_tabMode: "indent",
            editor_electricChars: !0,
            editor_autoSave: !1,
            editor_easySave: !0,
            editor_autoLint: !0,
            editor_autoLintMaxLen: 3e5,
            editor_lineWrapping: !1,
            userscript_search_url: "https://www.userscript.zone",
            userscript_search_mode: "disabled",
            editor_highlightTrailingWhitespace: !0,
            editor_trimTrailingSpacesFromModifiedLines: !0,
            editor_linter_config: null,
            favicon_service: "google",
            i18n: null,
            action_menu_columns: 1,
            action_menu_scripts_hide_disabled: !1,
            action_menu_scripts_sort: "auto",
            incognito_mode: "temporary",
            layout: "default",
            layout_user_css: "",
            sync_enabled: !1,
            sync_type: 2,
            statistics_enabled: !qe.RUNTIME.FIREFOX && !qe.RUNTIME.SAFARI || "firb" == rea.runtime.short_id || null,
            downloads_mode: "default",
            downloads_extension_whitelist: ["/^[^\\.]*$/", "/\\.mp[34]$/", ".wav", "/\\.(avi|mkv|flv|divx|mpe?g|webm)$/", "/\\.(ico|gif|png|jpe?g)/", "/\\.(srt|sub|idx)$/", ".txt", ".iso", ".zip", "/\\.r(ar|[0-9]{2,2})$/"],
            external_update_interval: 6048e5,
            external_connect: "all",
            require_timeout: 2e4,
            require_blacklist: ["/^https?:\\/\\/example.com(:[0-9]{1,5})?\\/.*/"],
            require_sri_mode: "supported",
            script_blacklist_server: [],
            script_blacklist_type: "server",
            script_blacklist_severity: 4,
            connect_mode: "ask",
            page_filter_mode: "black",
            page_whitelist: ["/https?:\\/\\/greasyfork\\.org\\/.*/", "http://xkcd.com/970/"],
            forbiddenPages: ["*example.org/*", "*paypal.tld/*", "*stripe.com/*", "https://*deutsche-bank-24.tld/*", "https://*bankofamerica.tld/*", "/^.*:\\/\\/apis\\.google\\.com\\/((?!render)([^\\/]+)\\/)+([^\\/]+)?$/", "*://www.facebook.com/plugins/*", "*://platform.twitter.com/widgets/*"]
        }, r = { cloud_url: null, cloud_user: null, cloud_pass: null }, o = e => {
            let t
            ;
            return void 0 !== (t = k.getValue(qe.CONSTANTS.STORAGE.CONFIG, {})[e]) ? t : "function" == typeof (t = n[e]) ? t() : t
        }, a = (e, n) => {
            const r = k.getValue(qe.CONSTANTS.STORAGE.CONFIG, {}), s = o(e);
            r[e] = n;
            const a = k.setValue(qe.CONSTANTS.STORAGE.CONFIG, r);
            return t[e] && JSON.stringify(s) != JSON.stringify(n) && t[e].forEach(t => {
                try {
                    t(e, s, n, a)
                } catch (e) {
                    y.a.warn("config: changeListener error", e)
                }
            }), a
        };
        let i, A;
        if (qe.HTML5.LOCALSTORAGE && (A = qe.HTML5.LOCALSTORAGE.getItem(qe.CONSTANTS.STORAGE.SESSION))) try {
            i = JSON.parse(W.default.Base64.decode(A))
        } catch (e) {
        }
        i = i || {};
        const l = e => {
            let t;
            return void 0 !== (t = i[e]) ? t : r[e]
        }, c = (e, n) => {
            const r = l(e);
            return void 0 === n ? delete i[e] : i[e] = n, qe.HTML5.LOCALSTORAGE && qe.HTML5.LOCALSTORAGE.setItem(qe.CONSTANTS.STORAGE.SESSION, W.default.Base64.encode(JSON.stringify(i))), t[e] && JSON.stringify(r) != JSON.stringify(n) && t[e].forEach(t => {
                try {
                    t(e, r, n)
                } catch (e) {
                    y.a.warn("config: changeListener error", e)
                }
            }), s.Deferred.Pledge()
        }, u = {
            init: function () {
                const e = Object(s.Deferred)()
                ;
                return u.values = {}, Object.defineProperty(u, "snapshot", {
                    get: function () {
                        return { ...u.values }
                    }, enumerable: !0
                }), Object.keys(n).forEach(e => {
                    Object.defineProperty(u.values, e, {
                        get: function () {
                            return o(e)
                        }, set: function (t) {
                            a(e, t)
                        }, enumerable: !0
                    })
                }), Object.keys(r).forEach(e => {
                    Object.defineProperty(u.values, e, {
                        get: function () {
                            return l(e)
                        }, set: function (t) {
                            c(e, t)
                        }, enumerable: !0
                    })
                }), u.initialized = !0, t = [], Object.keys(t).forEach(e => {
                    const n = t[e];
                    window.setTimeout(() => {
                        ht.doSave({
                            url: null, src: n, ask: !1, replace: !0,
                            internal: !0
                        })
                    }, 1)
                }), e.resolve(), e.promise();
                var t
            }, getValue: function (e) {
                return r.hasOwnProperty(e) ? l(e) : o(e)
            }, setValue: function (e, t) {
                return r.hasOwnProperty(e) ? c(e, t) : a(e, t)
            }, getDefaults: function () {
                return n
            }, addChangeListener: function (e, n) {
                Array.isArray(e) || (e = [e]), e.forEach(e => {
                    t[e] || (t[e] = []), t[e].push(n)
                })
            }
        };
        return u
    })(), At = (() => {
        let e, t, n, r, o, a = {}
        ;const i = "runtime_host_permissions",
            A = () => s.Deferred.sleep(1).then(() => !rea.permissions.supported || Q.has(qe.PERMISSIONS.ALL_URLS).then(e => e, () => !0)).always(e => {
                t = e, t ? ft.removeAll(i) : (ft.all("status", {
                    key: i,
                    class: "warning",
                    text: z.a.getMessage("Limited_runtime_host_permissions_might_break_some_Tampermonkey_features_"),
                    timeout: 31536e6
                }), l && (Zt.addRedirectListener(l), l = null)), n = null
            });
        let l = e => {
            u(e.url, 1e3)
        };
        let c;
        const u = (e, i) => {
            if (c || (c = window.setTimeout(() => {
                c = null, s.Deferred.Pledge().then(() => {
                    if (void 0 === t) return o || (Q.addListener(e => {
                        y.a.info("pcx: detected permission change", e), t = void 0, n = A()
                    }), o = !0), n = n || A(), n
                }).then(() => r).then(() => {
                    const e = Object.values(a);
                    if (a = {}, t) return e;
                    {
                        let t;
                        const n = {}, o = e.map(e => {
                            const t = (r = e.url, X.default.woPath(r) + "/*");
                            var r;
                            return Q.hasOrigin(t).then(e => {
                                e || (n[t] = !0)
                            })
                        });
                        return t = r = s.Deferred.sidebyside(o).then(() => {
                            const t = Object.keys(n);
                            return t.length ? (y.a.info("pcx: need to ask for some permissions", t),
                                Q.askOrigin(t, z.a.getMessage("Cross_Origin_Request_Permission"), z.a.getMessage("Click_here_to_allow_TM_to_access_the_following_hosts_0host_list0", t.join("\n"))).then(() => (r = null, e))) : e
                        }).always(() => {
                            r = null
                        }), t
                    }
                }).always(e => {
                    e.forEach(e => e.deferred.resolve()), Object.keys(a).length && u()
                })
            }, i || 100)), !e) return s.Deferred.Pledge();
            if (a[e]) return a[e].deferred.promise();
            const l = Object(s.Deferred)();
            return a[e] = { url: e, deferred: l }, l.promise()
        }, d = (t, n, r) => {
            let s, o;
            return u(t.url).then(() => {
                if (o) return n.onabort && n.onabort(), void (n.ondone && n.ondone({}));
                s = e(t, n, r ? { internal: !0 } : void 0)
            }), {
                abort: function () {
                    if (s) return s.abort();
                    o = !0
                }
            }
        };
        return {
            init: function () {
                e = Y.a.run
            }, internal: (e, t) => d(e, t, !0), external: (e, t) => d(e, t, !1)
        }
    })();
    const lt = () => {
        const e = Object(s.Deferred)();
        return rea.tabs.getSelected(null, t => {
            e.resolve(t)
        }), e.promise()
    }, ct = (() => {
        const e = {}, t = e => e && e.includes("*"), n = () => {
            const e = e => {
                for (let t = 0; t < o.length; t++) if (o[t].tabId === e) return o.splice(t, 1)[0];
                return o.pop()
            };
            let t
            ;lt().then(n => {
                for (; !r && (t = e(n.id));) t.fn()
            })
        };
        var r, o = [];
        const a = (A, l, c, u) => {
            const d = ((e, t) => {
                const n = e => e ? e.map(e => {
                    if (e.match(/^'?self'?$/)) e = X.default.parse(t.url).hostname || null; else if ("'none'" == e) e = "none"; else {
                        if (["none", "localhost", "*"].includes(e)) return e;
                        if (X.default.isIpOrHostname(e)) return e;
                        if (0 === e.indexOf(".")) return null;
                        if (1 === (e.match(/\./g) || []).length && X.default.isSecondLevelDomain(e)) return null
                    }
                    return e
                }) : [];
                return {
                    connects: e.options.override.merge_connects && "paranoid" != it.values.connect_mode ? n(e.connects) : [],
                    userconnects: n(e.options.override.use_connects),
                    blockers: n(e.options.override.use_blockers)
                }
            })(A, l);
            return (e => {
                const t = Object(s.Deferred)();
                return st.isAllowed(e) ? t.resolve({ allowed: !0 }) : t.resolve({ allowed: !1 }), t.promise()
            })(c).then(n => {
                if (!0 !== n.allowed) return s.Deferred.Breach("URL is blacklisted");
                let r, o
                ;
                return (r = X.default.parse(c)) && r.origin && (o = X.default.parse(l.url)) && o.origin && r.origin === o.origin ? s.Deferred.Pledge({ permitted: !0 }) : ((n, r, o) => {
                    const a = Object(s.Deferred)(), A = () => {
                        a.resolve({ permitted: !0 })
                    }, l = e => {
                        a.resolve({ permitted: !1, reason: e })
                    }, c = () => {
                        a.resolve({ unknown: !0 })
                    };
                    let u, d;
                    const p = e => t(e) ? A : null, f = (e, t) => {
                        let n = null;
                        const r = X.default.isIpOrHostname(e);
                        return t.every(t => {
                            if (t.a) for (let s = 0; s < t.a.length; s++) if (t.a[s] && (r || X.default.isIpOrHostname(t.a[s]) ? t.a[s] === e : -1 != e.search(new RegExp("(^|.+\\.)" + Object(i.escapeForRegExp)(t.a[s]) + "$")))) return n = t.blocker ? l : A, !1;
                            return !0
                        }), n
                    };
                    return "off" == it.values.connect_mode ? A() : (u = X.default.parse(o)) && u.hostname ? (d = f(u.hostname, [{
                        a: e[n.uuid]
                    }])) || (d = p(e[n.uuid])) ? d() : 0 === r.connects.length && 0 === r.userconnects.length && 0 === r.blockers.length ? "casual" == it.values.connect_mode ? A() : "strict" == it.values.connect_mode ? l("No @connects given, but strict mode enabled") : c() : r.connects.includes("none") ? l("None value found") : ("casual" == it.values.connect_mode && !t(r.blockers) && (d = p(r.connects)) || (d = p(r.userconnects)) || (d = f(u.hostname, [{
                        a: r.blockers,
                        blocker: !0
                    }, { a: r.connects }, { a: r.userconnects }]) || c), d()) : l("URL can not be parsed"), a.promise()
                })(A, d, c)
            }).then(i => {
                if (!1 === i.permitted) return s.Deferred.Breach("URL is not permitted" + (i.reason ? ": " + i.reason : ""));
                if (!0 === i.permitted) return s.Deferred.Pledge();
                if (0 === d.connects.length || t(d.connects)) {
                    if (["ask", "paranoid"].includes(it.values.connect_mode)) {
                        if (t(d.blockers)) return s.Deferred.Breach("URL was permanently blocked by the user");
                        if (r) {
                            y.a.log('cor: queuing access permission check from "' + A.name + '" to', c, l);
                            const e = Object(s.Deferred)();
                            return o.push({
                                tabId: l.tab ? l.tab.id : null,
                                fn: function () {
                                    e.consume(a.apply(this, [A, l, c, u]))
                                }
                            }), e.promise()
                        }
                        return ((a, i, A, l, c) => {
                            let u;
                            const d = Object(s.Deferred)(), p = () => {
                                d.resolve({ approved: !0 })
                            }, f = () => {
                                d.resolve({ forbidden: !0 })
                            };
                            if (y.a.log('cor: "' + a.name + '" is asking for permission to access', l, i), (u = X.default.parse(l)) && u.hostname) {
                                const s = (e => {
                                    if (X.default.isIpOrHostname(e)) return null;
                                    const t = e.split(".");
                                    if (t.length < 3) return e;
                                    const n = X.default.isSecondLevelDomain(t.slice(-2).join(".")) ? -3 : -2;
                                    return t.slice(n).join(".")
                                })(u.hostname), d = i.tab ? i.tab.id : null;
                                r = !0, lt().then(e => j.askForConnect({
                                    src_url: i.url,
                                    hostname: u.hostname,
                                    domain: s,
                                    all_domains: t(A.connects),
                                    tabid: d,
                                    active: d === e.id,
                                    timeout: c,
                                    url: l,
                                    settings_url: rea.extension.getURL("options.html") + "#nav=" + a.uuid + "+settings",
                                    connect_url: "https://www.tampermonkey.net/documentation.php#_connect",
                                    script: {
                                        name: a.name,
                                        uuid: a.uuid,
                                        icon: a.icon64 || a.icon || H.a.images.origin("unknown")
                                    }
                                })).done(t => {
                                    let n;
                                    const r = t.whole_domain ? s : u.hostname
                                    ;t.allow ? t.once ? (y.a.log('cor: allowing "' + a.name + '" to access', r, "once"), p()) : t.temporary ? (y.a.log('cor: allowing "' + a.name + '" to access', r, "temporarily"), void 0 === e[a.uuid] && (e[a.uuid] = []), e[a.uuid].includes(r) || e[a.uuid].push(r), p()) : (n = p, t.all_domains ? (y.a.log('cor: allowing "' + a.name + '" to access all domains always'), a.options.override.use_connects.push("*")) : (y.a.log('cor: allowing "' + a.name + '" to access', r, "always"), a.options.override.use_connects.push(r),
                                        n = p)) : t.once || t.aborted ? (y.a.log('cor: denying "' + a.name + '" to access', r, "once"), f()) : (a.options.override.use_blockers || (a.options.override.use_blockers = []), n = f, t.all_domains ? (y.a.log('cor: denying "' + a.name + '" to access any domains (additional) domain'), a.options.override.use_blockers.push("*")) : (y.a.log('cor: denying "' + a.name + '" to access', r, "always"), a.options.override.use_blockers.push(r))), n && ht.doModify(a.uuid, a, !1).always(n)
                                }).fail(f).always(() => {
                                    r = !1, o.length && window.setTimeout(n, 1)
                                })
                            } else f();
                            return d.promise()
                        })(A, l, d, c, u).then(e => !0 === e.approved ? s.Deferred.Pledge() : s.Deferred.Breach("Request was blocked by the user"))
                    }
                    return s.Deferred.Breach()
                }
                return s.Deferred.Breach("URL is not a part of the @connect list")
            })
        };
        return {
            getSessionConnects: function (t) {
                return e[t] || []
            }, setSessionConnects: function (t, n) {
                e[t] = n || []
            }, purgeAppeals: function (e) {
                o = o.filter(t => t.tabId !== e)
            }, exec: function (e, t, n, r) {
                let s, o, i, A, l, c = e.url;
                const u = [], d = Math.max(Math.min(e.timeout || 0, 6e4), 2e4), p = () => {
                    let e;
                    for (; !l && (e = u.shift());) e()
                }, f = (t, n) => {
                    const s = 'Refused to connect to "' + (n || e.url) + '": ' + (t || "Blocked by @connect CORS check"),
                        o = Y.a.makeErrorResponse(s);
                    ["onerror", "ondone"].forEach(e => {
                        r[e] && r[e]({ response: o, exception: s })
                    })
                };
                return n && n.url && n.tab && e.url && t && (o = Rt.getByUid(t)) && o.script && o.cond ? (a(o.script, n, e.url, d).done(() => {
                    if (A) return;
                    const t = {};
                    Object.keys(r).forEach(e => {
                        t[e] = (m, ...g) => {
                            i || (l ? u.push((function () {
                                t[e].apply(this, [m, ...g])
                            })) : (m && m.finalUrl && c !== m.finalUrl ? (l = !0,
                                a(o.script, n, m.finalUrl, d).fail(() => {
                                    A || i || (s && s.abort(), i = !0, f("Request was redirected to a not whitelisted URL", m.finalUrl), y.a.warn("cor: request to", c, "was redirect to a not whitelisted URL", m.finalUrl))
                                }).always(() => {
                                    c = m.finalUrl, l = !1, u.length && window.setTimeout(p, 1)
                                })) : {
                                always: function (e) {
                                    e()
                                }
                            }).always(() => {
                                i || r[e]({ response: m })
                            }))
                        }
                    }), s = At.external(e, t)
                }).fail(e => {
                    A || (f(e), y.a.warn("cor: access to", c, "was denied"))
                }).always(() => {
                    A && (r.onabort && r.onabort(), r.ondone && r.ondone({}))
                }), {
                    abort: () => {
                        s ? s.abort() : A = !0
                    }
                }) : f()
            }
        }
    })(), ut = (() => {
        const e = e => {
            const t = [], n = new DataView(e);
            for (let e = 0; e < n.byteLength; e += 4) {
                const r = "00000000", s = (r + n.getUint32(e).toString(16)).slice(-r.length);
                t.push(s)
            }
            return t.join("")
        }, t = t => {
            try {
                return e(W.default.str2arrbuf(W.default.Base64.decode(t)))
            } catch (e) {
                return null
            }
        }, n = {
            md5: function (e, t) {
                return s.Deferred.Pledge(W.default.MD5(e, t))
            }, sha256: function (e, t) {
                return s.Deferred.Pledge(forge_sha256(e, t))
            }
        }, r = {};
        ["SHA-1", "SHA-384", "SHA-512"].forEach(t => {
            const n = t.toLowerCase().replace("-", "");
            r[n] = () => {
                const n = (n, r) => {
                    const o = Object(s.Deferred)();
                    return window.crypto.subtle.digest(t, W.default.str2arrbuf(n, r)).then(t => {
                        o.resolve(e(t))
                    }, () => {
                        o.reject()
                    }), o.promise()
                };
                try {
                    return n("").then(e => {
                        if (e && e.substr(0, 4).toLowerCase().match(/[0-9a-f]{4,4}/)) return n
                    })
                } catch (e) {
                    return s.Deferred.Breach()
                }
            }
        });
        const o = e => Object.keys(n).includes(e), a = e => function (...t) {
            if (!1 !== i) {
                const n = Object(s.Deferred)();
                return i.push((function () {
                    n.consume(e.apply(this, t))
                })), n.promise()
            }
            return e.apply(this, t)
        };
        var i = [];
        return {
            init: function () {
                return y.a.D && Object.keys(n).forEach(e => {
                    y.a.log("sri:", e, "is supported")
                }), s.Deferred.sidebyside(Object.keys(r).map(e => r[e]().done(t => {
                    y.a.log("sri:", e, "is supported"), n[e] = t
                }).fail(() => {
                    y.a.log("sri:", e, "is unsupported")
                }))).always(() => {
                    i.forEach(e => {
                        e()
                    }), i = !1
                })
            },
            isSupported: a(e => s.Deferred.Pledge(o(e))),
            getHash: a((e, n) => {
                const r = Object(s.Deferred)();
                if ("string" == typeof e && (e = X.default.parse(e)), e && e.hash) {
                    let s, a
                    ;const i = e.hash.replace(/^#/, "").split(/,|;/g);
                    for (let e = 0; e < i.length; e++) {
                        if (!(a = i[e].match(/([^=|:|-]+)[=|:|-](.+)/)) || 3 != a.length || !o(a[1])) continue;
                        let n = a[2];
                        /^[0-9a-fA-F]+$/.exec(n) || (n = t(decodeURIComponent(n)) || n), s = { type: a[1], value: n }
                    }
                    r.resolve(s || (n ? s : { type: "unsupported", value: "" }))
                } else r.resolve();
                return r.promise()
            }),
            check: a((e, t, r) => t && e && o(e.type) ? n[e.type](t, r).then((t, n) => ((n = t === e.value) ? s.Deferred.Pledge : s.Deferred.Breach)(n || {
                type: e.type,
                value: t
            })) : s.Deferred.Breach())
        }
    })(), dt = (() => {
        const e = {
            key: function (e, t) {
                return qe.CONSTANTS.PREFIX.EXTERNAL + [e, t ? W.default.MD5(t) : null].filter(e => e).join(":")
            }, list: function (e) {
                const t = new RegExp("^" + e);
                return k.listValues().filter(e => -1 != e.search(t))
            }, set: function (t, n, r, s) {
                const o = e.key(t, n), a = {};
                Object(i.each)(r, (e, t) => {
                    "content" == t && (t = "base", e = W.default.encodeS(e)), a[t] = e
                }), k.setValue(o, { ts: Date.now(), url: n, resource: a, modified: s })
            }, get: function (t, n) {
                const r = e.key(t, n), s = k.getValue(r);
                let o;
                if (s && s.resource) {
                    const e = {}
                    ;Object(i.each)(s.resource, (t, n) => {
                        "base" == n && (n = "content", t = W.default.decodeS(t)), e[n] = t
                    }), o = { ts: s.ts, url: s.url, data: e, modified: s.modified }
                }
                return o
            }, clean: function (t, n) {
                const r = e.key(t, n);
                k.deleteValue(r)
            }, cleanAll: function (t, n) {
                let r;
                const s = e.list(e.key(t));
                if (n) {
                    const o = {};
                    Object(i.each)(n, n => {
                        const r = e.key(t, n);
                        o[r] = !0
                    }), r = [], Object(i.each)(s, e => {
                        o[e] || r.push(e)
                    })
                } else r = s;
                r.forEach(e => {
                    k.deleteValue(e)
                })
            }
        }, t = Object(i.getDebouncer)(9e3), n = (t, n, r, o) => {
            const a = Object(s.Deferred)(), A = {
                sync: !1
            };
            return ((e, t) => {
                const n = Object(s.Deferred)(), r = r => {
                        const s = { content: "" };
                        if (4 != r.readyState || 200 != r.status && 0 != r.status || r.error) n.reject(s); else {
                            let o, a;
                            const A = Y.a.parseHeaders(r.responseHeaders)["content-type"];
                            A && A.match("(image/|text/)([.-a-zA-Z0-9]+)") && (o = A),
                            o || ((a = e.match(".*.(ico|jpg|jpeg)+($|\\?|#).*")) ? o = "image/x-icon" : (a = e.match(".*.(gif|png)+($|\\?|#).*")) ? o = "image/" + a[1] : -1 != e.search(".*.(js)+($|\\?|#).*") ? o = "text/javascript" : (a = e.match(".*.(css|html|xml)+($|\\?|#).*")) ? o = "text/" + a[1] : Object(i.isLocalImage)(e) && (o = "image/x-icon")), s.meta = o, s.content = W.default.arrbuf2str(r.response, t.encoding) || "", n.resolve(s)
                        }
                    }, o = () => {
                        n.reject({})
                    }, a = X.default.parse(e)
                ;
                if (["file:"].concat(qe.REQUESTS.INTERNAL_PAGE_PROTOCOLS).includes(a.protocol)) if ("file:" != a.protocol || qe.RUNTIME.ALLOWS_FILE_SCHEME_ACCESS && ["externals", "all"].includes(it.values.script_file_access)) rea.file.get(e, e => {
                    r({ readyState: 4, status: 0, response: e })
                }, () => {
                    o()
                }); else {
                    const t = "Access to this local file is forbidden!";
                    y.a.warn("externals:", t, "Loading the following @resource failed:", e, "-> more info:", "https://www.tampermonkey.net/faq.php#Q204"), o()
                } else {
                    const t = {
                        method: "GET", url: e,
                        retries: qe.XMLHTTPREQUEST.RETRIES, nocache: !1, responseType: "arraybuffer"
                    };
                    t.timeout = it.values.require_timeout, At.internal(t, { onload: r, onerror: o, ontimeout: o })
                }
                return n.promise()
            })(n, { encoding: o.encoding }).done(s => {
                r && (s.sri = r);
                const i = r => {
                    const s = X.default.parse(n);
                    s.protocol && !["file:"].concat(qe.REQUESTS.INTERNAL_PAGE_PROTOCOLS).includes(s.protocol) && e.set(t, n, r)
                };
                r && ["supported", "given"].includes(it.values.require_sri_mode) ? ut.check(r, s.content, o.encoding).done(() => {
                    A.resource = s, i(A.resource),
                        a.resolve(A)
                }).fail(e => {
                    A.resource = {
                        forbidden: !0,
                        sri: { mode: it.values.require_sri_mode, type: r.type, value: "invalid" },
                        determined: e,
                        content: ""
                    }, i(A.resource), a.reject(A)
                }) : (A.resource = s, i(A.resource), a.resolve(A))
            }).fail(e => {
                y.a.log("externals: get.failed", t, n, e), A.resource = { failed: !0, content: "" }, a.reject(A)
            }), a.promise()
        }, r = (r, o, a) => {
            const i = Object(s.Deferred)(), A = X.default.parse(o), l = { sync: a.sync };
            let c;
            return o ? ot.getEvilnessOf(o) >= it.values.script_blacklist_severity ? (l.resource = {
                blacklisted: !0,
                content: ""
            }, i.reject(l)) : ut.getHash(A, "supported" == it.values.require_sri_mode).done(s => {
                if ("enforce" != it.values.require_sri_mode || s) if ("file:" !== A.protocol && (c = e.get(r, o))) {
                    const A = e.key(r, o), u = Date.now();
                    it.values.external_update_interval > 0 && u - c.ts > it.values.external_update_interval && (t.is(A) || (it.values.external_update_interval > 1 && t.add(A),
                        c.modified ? y.a.log("externals: resource is not updated due to user modifications", o, new Date(c.ts).toISOString(), new Date(u).toISOString()) : (y.a.log("externals: resource needs update", o, new Date(c.ts).toISOString(), new Date(u).toISOString()), window.setTimeout(() => {
                            n(r, o, s, a)
                        }, 3e3)))), l.resource = c.data, l.resource.forbidden || l.resource.blacklisted ? i.reject(l) : i.resolve(l)
                } else i.consume(n(r, o, s, a)); else l.resource = {
                    forbidden: !0,
                    sri: { mode: it.values.require_sri_mode },
                    content: ""
                }, i.reject(l)
            }) : (l.resource = { forbidden: !0, content: "" }, i.reject(l)), i.promise()
        }, o = {
            setElement: function (t, n, r, s) {
                return e.set(t, n, r, s)
            }, getElement: function (t, n) {
                return e.get(t, n)
            }, cleanElement: function (t, n) {
                return e.clean(t, n)
            }, dropAll: function (t) {
                return e.cleanAll(t), s.Deferred.Pledge()
            }, dropAllBut: function (t, n) {
                return e.cleanAll(t, n), s.Deferred.Pledge()
            }, loadResources: function (e, t) {
                const n = Object(s.Deferred)();
                return o.getResources(e, t).always(() => {
                    n.resolve()
                }), n.promise()
            }, loadRequires: function (e, t) {
                const n = Object(s.Deferred)();
                return o.getRequires(e, t).always(() => {
                    n.resolve()
                }), n.promise()
            }, getResources: function (e, t) {
                const n = { elements: [] }, o = Object(s.Deferred)(), a = [], i = { sync: !0 };
                return t.forEach(t => {
                    const o = t.url || X.default.sanitize(t.unsafe_url, t.abs_url), A = { name: t.name, url: o },
                        l = r(e, o, i), c = Object(s.Deferred)();
                    l.done(e => {
                        const t = e.resource;
                        A.content = t.content, A.meta = t.meta || "application"
                    }).fail(e => {
                        e.resource && e.resource.forbidden ? e.resource.sri ? y.a.warn("externals: can't load @resource", t.name, "from URL", t.unsafe_url, "due to a SRI error") : y.a.warn("externals: can't load @resource", t.name, "from forbidden URL", t.unsafe_url) : e.resource && e.resource.blacklisted ? y.a.warn("externals: can't load @resource", t.name, "from blacklisted URL", t.unsafe_url) : (y.a.warn("externals: can't load @resource", t.name, "from URL", t.unsafe_url), A.failed = !0), A.content = null
                    }).always(e => {
                        i.sync &= e.sync,
                            n.elements.push(A), c.resolve()
                    }), a.push(c)
                }), s.Deferred.when(a).always(() => {
                    n.sync = i.sync, o.resolve(n)
                }), o.promise()
            }, getRequires: function (e, t) {
                const n = { elements: [] }, o = Object(s.Deferred)(), a = [], A = { encoding: "UTF-8", sync: !0 };
                return Object(i.each)(t, (t, o) => {
                    const i = t.url || X.default.sanitize(t.unsafe_url, t.abs_url), l = {}, c = r(e, i, A),
                        u = Object(s.Deferred)();
                    c.done(e => {
                        l.textContent = e.resource.content || ""
                    }).fail(e => {
                        let n
                        ;n = e.resource && e.resource.forbidden ? e.resource.sri ? "couldn't load @require from URL " + t.unsafe_url + " due to a SRI error" : "couldn't load @require from forbidden URL " + t.unsafe_url : e.resource && e.resource.blacklisted ? "couldn't load @require from blacklisted URL " + t.unsafe_url : "couldn't load @require from URL " + t.unsafe_url, l.textContent = (e => 'console.warn("Tampermonkey: " + decodeURIComponent("' + encodeURIComponent(e) + '"));')(n) + "\n", y.a.warn("externals: " + n)
                    }).always(e => {
                        A.sync &= e.sync,
                            n.elements[o] = l, u.resolve()
                    }), a.push(u)
                }), s.Deferred.when(a).always(() => {
                    n.sync = A.sync, n.elements = n.elements.filter(e => e), o.resolve(n)
                }), o.promise()
            }
        };
        return o
    })();
    window.exts = dt;
    var pt = (() => {
        const e = {};
        return {
            bundle: function (t, n) {
                let r, o, a = !0;
                if (r = e[n.uuid]) return r;
                const A = {},
                    l = ["includes", "matches", "requires", "resources", "excludes", "connects", "textContent"];
                return Object.keys(n).forEach(e => {
                    l.includes(e) || ("options" == e ? (A[e] = JSON.parse(JSON.stringify(n[e])),
                        A[e].run_at = A[e].run_at || n.options.override.orig_run_at || "document-idle") : A[e] = n[e])
                }), r = dt.getResources(A.uuid, n.resources).then(e => (a && !e.sync && (y.a.log("ri: uncached @external detected -> fast script start disabled"), a = e.sync), A.resources = e.elements, dt.getRequires(A.uuid, n.requires))).then(e => {
                    a && !e.sync && (y.a.log("ri: uncached @external detected -> fast script start disabled"), a = e.sync);
                    const r = e.elements;
                    return y.a.log("run script " + A.name + " @ " + t.url), ((e, t, n) => {
                        const r = Object(s.Deferred)(), o = [];
                        n.forEach(t => {
                            let n = t.textContent || "";
                            n = ve.mkCompat(n, e.options.compatopts_for_requires ? e : null, "off" != it.values.runtime_strict_mode), o.push(n)
                        });
                        const a = "\n" + o.join("\n") + "\n", A = Rt.getStorageByUid(e.uuid);
                        let l = ve.mkCompat(t, e, "off" != it.values.runtime_strict_mode);
                        if (it.values.debug) {
                            const e = l.split("\n");
                            let t, n = !1;
                            for (let r = 0; r < e.length; r++) {
                                const s = e[r];
                                if (!s.match(/^\s*$|^\s*\/\/\s*|^\s*\/\*.*\*\/\s*$|^\s*["']+use strict["']+;*\s*$/)) {
                                    if (s.match(/^\s*\/\*/) && (n = !0), !n) {
                                        e[r] = "debugger;" + e[r];
                                        break
                                    }
                                    if (s.match(/\*\/\s*$/)) n = !1; else if (-1 != (t = s.search(/\*\//))) {
                                        e[r] = Object(i.insert)(e[r], t + 2, 0, "debugger;");
                                        break
                                    }
                                }
                            }
                            l = e.join("\n")
                        }
                        const c = encodeURIComponent(e.name) + ".user.js";
                        let u;
                        u = qe.RUNTIME.FIREFOX ? rea.extension.getURL("userscripts/") + c + "?" + X.default.hash2params({ id: e.uuid }) : rea.extension.getURL("userscript.html") + "?" + X.default.hash2params({
                            name: c,
                            id: e.uuid
                        });
                        const d = {
                            header: e.header, code: l, requires: a, storage: A, script: e,
                            source_url: u
                        };
                        return r.resolve(d), r.promise()
                    })(A, n.textContent, r)
                }).always(() => {
                    o = !0, delete e[A.uuid]
                }), o || (e[A.uuid] = r), r
            }
        }
    })(), ft = (() => {
        const e = {}, t = {}, n = (e, t) => {
            let n;
            const r = t.key || "general", s = t.timeout || 3e5, o = window.setTimeout(() => {
                delete e[r]
            }, s);
            (n = e[r]) && window.clearTimeout(n.to), e[r] = { ts: Date.now() + s, options: t, to: o }
        }, r = e => {
            const t = Date.now();
            return Object.keys(e).map(n => {
                const r = e[n], s = Object(i.copy)(r.options, {});
                let o;
                if (o = Math.max(0, r.ts - t)) return s.timeout = o, s
            }).filter(e => e)
        }, s = {
            all: function (e, t) {
                s.actionPage(e, t), s.optionsPage(e, t)
            }, removeAll: function (n) {
                delete e[n], delete t[n]
            }, actionPage: function (t, r) {
                const s = rea.extension.getViews({ type: "popup" });
                s && s.length && rea.extension.sendMessage({ method: t, options: r }, () => {
                }), r && n(e, r)
            }, optionsPage: function (e, r) {
                const s = rea.extension.getViews({ type: "tab" });
                s && s.length && rea.extension.sendMessage({ method: e, options: r }, () => {
                }), r && n(t, r)
            }, actionStatus: function () {
                return r(t)
            }, optionsStatus: function () {
                return r(e)
            }
        };
        return s
    })(), mt = {
        getConfig: function () {
            const e = { scripts: 0 };
            let t = k.getValue(qe.CONSTANTS.STORAGE.UPDATE, e);
            return "object" != typeof t && (t = e), t || (t = e), null == t.black && (t.black = {
                version: 0,
                last: 0
            }), null == t.scripts && (t.scripts = 0), t
        }, setConfig: function (e) {
            e && k.setValue(qe.CONSTANTS.STORAGE.UPDATE, e)
        }
    };
    const gt = (() => {
        let e = null;
        const t = 36e5;
        var n = {
            check: function (e, r, o) {
                if (!e && it.values.scriptUpdateCheckPeriod <= 0) return s.Deferred.Breach();
                let a, i, A = mt.getConfig()
                ;
                return !e && Date.now() - A.scripts < Math.max(it.values.scriptUpdateCheckPeriod, t) ? s.Deferred.Breach() : s.Deferred.Pledge().then(() => {
                    const e = () => {
                        i = null;
                        const e = z.a.getMessage("Script_Update"),
                            t = z.a.getMessage("Waiting_for_sync_to_finish") + "...";
                        i = M.show(e, t, H.a.images.brand("tampermonkey"), { timeout: 6e4 })
                    };
                    if (at.enabled) {
                        const t = Object(s.Deferred)();
                        return at.addSyncDoneCallback(t.resolve), at.sync(50, !1), r && (a = window.setTimeout(e, 500)), t.promise()
                    }
                }).then(() => {
                    if (e) return
                        ;
                    const t = Object(s.Deferred)(), n = () => {
                        rea.idle.queryState(qe.MISC.IDLE_TIMEOUT, e => {
                            "active" == e ? window.setTimeout(n, 1e3 * Math.round(qe.MISC.IDLE_TIMEOUT / 2)) : r()
                        })
                    };
                    var r = () => {
                        let e;
                        rea.windows.getAll({}, r => {
                            r.forEach(t => {
                                "fullscreen" === t.state && (e = !0)
                            }), e ? window.setTimeout(n, 1e3 * qe.MISC.IDLE_TIMEOUT) : t.resolve()
                        })
                    };
                    return n(), t.promise()
                }).then(() => {
                    const e = Object(s.Deferred)();
                    return a && (window.clearTimeout(a), a = null), i && i.cancel(), ((e, t) => {
                        let r = 0, o = 0, a = 0
                        ;const i = z.a.getMessage("Script_Update"),
                            A = z.a.getMessage("Check_for_userscripts_updates") + "...";
                        e && M.show(i, A, H.a.images.brand("tampermonkey"), { timeout: 1e4 });
                        const l = Rt.getUidList().map(e => {
                            let i, A, l, c;
                            return (() => {
                                if (i = Rt.getByUid(e), !i.script || !i.cond) return y.a.warn("update: inconsistent script entry", e, i), s.Deferred.Breach();
                                const n = t && i.script.uuid !== t,
                                    o = !it.values.scriptUpdateCheckDisabled && !i.script.enabled && !t || !i.script.options.check_for_updates
                                ;
                                if (n || o || !(c = ht.determineSourceURL(i.script))) return s.Deferred.Breach();
                                if (i.script.evilness && i.script.evilness >= Math.min(ot.SEVERITY_MAX, it.values.script_blacklist_severity)) return s.Deferred.Breach();
                                let a;
                                return (a = ht.determineOrigin(i.script)) && a.updates_allowed && !a.updates_allowed(c) ? s.Deferred.Breach() : (r++, y.a.info("update: check for script updates @", e), s.Deferred.Pledge())
                            })().then(() => {
                                const e = ht.determineMetaURL(i.script);
                                if (!e) return s.Deferred.Pledge()
                                    ;
                                if ("none" == e) return y.a.debug("update: ignore non-updatable script", i.script.name), s.Deferred.Breach();
                                const t = Object(s.Deferred)(), n = {
                                    method: "GET",
                                    retries: qe.XMLHTTPREQUEST.RETRIES,
                                    timeout: 1e3 * qe.SCRIPT_DOWNLOAD.TIMEOUT,
                                    revalidate: !0,
                                    headers: { Accept: "text/x-userscript-meta, */*" },
                                    url: e
                                };
                                return At.internal(n, {
                                    ondone: function (n) {
                                        4 == n.readyState && 200 == n.status ? A = we.Parser.processMetaHeader(n.responseText) : y.a.warn("update: unable to find meta data @ " + e + " req.status = " + n.status), t.resolve()
                                    }
                                }),
                                    t.promise()
                            }).then(() => {
                                const e = !!A, t = e && !!A.version,
                                    n = t && (!i.script.version || we.Parser.versionCmp(A.version, i.script.version) == we.Parser.versionCmp.eNEWER);
                                return e && t && !n ? s.Deferred.Breach() : s.Deferred.Pledge()
                            }).then(() => {
                                let e;
                                if (e = X.default.parse(c)) {
                                    if (e.protocol.match(/(https?|file):/)) return n.getScriptFromURL(c).fail(() => {
                                        y.a.warn("update: failed", i.script.name, c)
                                    });
                                    y.a.warn("update: can't download URL", i.script.name, c)
                                } else y.a.warn("update: can't parse URL", i.script.name, c)
                            }).then(e => ((e, t) => {
                                const n = we.Parser.createScriptFromSrc(t);
                                if (!n.name || "" == n.name || void 0 === n.version) return we.Parser.versionCmp.eERROR;
                                let r;
                                return (r = Rt.getMetaByUid(e)) ? r.system ? null : n.version == r.version ? we.Parser.versionCmp.eEQUAL : we.Parser.versionCmp(n.version, r.version) : we.Parser.versionCmp.eNEWER
                            })(i.script.uuid, e) == we.Parser.versionCmp.eNEWER ? (o++, l = {
                                name: i.script.name,
                                url: c,
                                code: e
                            }, s.Deferred.Pledge()) : s.Deferred.Breach()).then(() => {
                                if (it.values.notification_silentScriptUpdate) return s.Deferred.Pledge();
                                {
                                    const e = z.a.getMessage("There_is_an_update_for_0name0_avaiable_", l.name) + "\n" + z.a.getMessage("Click_here_to_install_it_"),
                                        t = z.a.getMessage("Just_another_service_provided_by_your_friendly_script_updater_") + ":",
                                        n = Object(s.Deferred)();
                                    return M.show(t, e, H.a.images.brand("tampermonkey"), { timeout: it.values.scriptUpdateHideNotificationAfter }, n.resolve), n.promise()
                                }
                            }).then(t => {
                                const n = e || i.script.uuid
                                ;
                                return void 0 === t || t.clicked ? ht.doSave({
                                    url: l.url,
                                    uuid: n,
                                    replace: !n,
                                    src: l.code,
                                    ask: !it.values.notification_silentScriptUpdate
                                }).done(e => {
                                    e && e.installed && a++
                                }) : s.Deferred.Breach()
                            })
                        });
                        return r && ft.all("status", {
                            key: "script_update",
                            class: "information",
                            title: i,
                            text: A,
                            timeout: 1e4
                        }), s.Deferred.sidebyside(l).then(() => (l.length && 0 == o && (y.a.debug("No update found"), e && M.show("Narf!", z.a.getMessage("No_update_found__sry_"), H.a.images.brand("tampermonkey"), { timeout: 1e4 }), ft.all("status", {
                            key: "script_update",
                            class: "information",
                            text: z.a.getMessage("No_update_found__sry_"),
                            timeout: 1e4
                        })), { found: o, installed: a }))
                    })(r, o).done(t => {
                        e.resolve(t.installed)
                    }).fail(() => {
                        e.resolve(null)
                    }), A = mt.getConfig(), A.scripts = Date.now(), mt.setConfig(A), e.promise()
                })
            }, getScriptFromURL: function (e) {
                const t = Object(s.Deferred)();
                if (["file:"].concat(qe.REQUESTS.INTERNAL_PAGE_PROTOCOLS).includes(X.default.parse(e).protocol)) rea.file.get(e, e => {
                    t.resolve(W.default.arrbuf2str(e, "UTF-8"))
                }, e => {
                    t.reject({
                        error: !0, responseText: e
                    })
                }); else {
                    const n = {
                        method: "GET",
                        retries: qe.XMLHTTPREQUEST.RETRIES,
                        timeout: 1e3 * qe.SCRIPT_DOWNLOAD.TIMEOUT,
                        revalidate: !0,
                        headers: { Accept: "text/x-userscript, */*" },
                        url: e
                    };
                    At.internal(n, {
                        onload: function (e) {
                            4 != e.readyState || 200 != e.status && 0 != e.status || e.error ? t.reject({
                                error: !0,
                                responseText: e.responseText
                            }) : t.resolve(e.responseText)
                        }, onerror: function (e) {
                            t.reject({ error: !0, responseText: e.responseText })
                        }, ontimeout: function () {
                            t.reject({ timeout: !0, responseText: "" })
                        }
                    })
                }
                return t.promise()
            }, init: function () {
                const r = () => {
                    e && (window.clearTimeout(e), e = null), it.values.scriptUpdateCheckPeriod > 0 && (e = window.setTimeout(() => {
                        e = null, n.check(), r()
                    }, t))
                };
                r(), it.addChangeListener("scriptUpdateCheckPeriod", r)
            }
        };
        return n
    })();
    window.trup = gt;
    var ht = (() => {
        const e = e => (e.sort((e, t) => e.position - t.position), e), t = e => {
            void 0 === e.ask && (e.ask = !0), void 0 !== e.url && null != e.url || (e.url = ""), "" === e.force_url && (e.force_url = null);
            let t = we.Parser.createScriptFromSrc(e.src), n = null;
            const r = {
                heading: null, errors: [], info: [], warnings: [], flags: {}
            }, a = Object(s.Deferred)(), A = Date.now(), l = e.save && !e.ask && it.values.editor_easySave;
            let c, u = e.uuid;
            return (t.name && null != t.version ? s.Deferred.Pledge() : (r.errors.push(z.a.getMessage("Invalid_UserScript__Sry_") + "\n\n"), e.name && r.errors.push(z.a.getMessage("Script_name_0name0", e.name) + "\n\n"), e.url && r.errors.push(z.a.getMessage("Downloaded_from_0url0", e.url)), y.a.warn("scriptman: invalid userscript", r, t), s.Deferred.Breach())).then(() => {
                if (e.replace && !u && (u = Rt.getUidsByName(t.name, t.namespace)[0]), u) n = Rt.getMetaByUid(u); else if (t.uuid) u = t.uuid; else {
                    if (!e.replace) return y.a.warn("scriptman: neither UUID, @uuid nor replace option set"), s.Deferred.Breach();
                    u = Object(i.createUUID)()
                }
                return "" !== u.replace(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/, "") ? (y.a.warn("scriptman: invalid UUID", u), s.Deferred.Breach()) : !e.clean && !e.defaultscript && n && n.system ? s.Deferred.Breach() : void 0
            }).then(() => {
                if (e.clean && e.name && e.name != t.name || -1 != t.name.indexOf("\n")) return r.errors.push(z.a.getMessage("Invalid_UserScript_name__Sry_")), s.Deferred.Breach()
            }).then(() => {
                if (n) {
                    if (n.name != t.name && (r.flags.renamed = !0), e.internal || n.evilness != ot.SEVERITY_FOISTED_SCRIPT || (r.warnings.push(z.a.getMessage("This_is_a_possibly_foisted_script_and_a_modification_will_enable_it_")), r.flags.forceAsk = !0), n.lastModified && void 0 !== e.lastModTime && n.lastModified !== e.lastModTime) {
                        let e = z.a.getMessage("some_secs");
                        try {
                            const t = Math.max(1, Math.floor((A - n.lastModified) / 1e3));
                            isNaN(t) || (e = t)
                        } catch (e) {
                        }
                        r.warnings.push(z.a.getMessage("CONFLICT__This_script_was_modified_0t0_seconds_ago_", e)), r.flags.forceAsk = !0
                    }
                    t.version == n.version && (e.save ? r.flags.modification = !0 : r.flags.reset = !0), e.clean && (r.flags.factory = !0), c = !e.internal
                } else r.flags.first_install = !0, c = !e.internal || e.save;
                t.includes.length || t.matches.length || l || e.internal || r.warnings.push(z.a.getMessage("This_script_does_not_provide_any__include_information_")),
                t.antifeatures && !e.internal && Object.keys(t.antifeatures).forEach(e => {
                    const s = t.antifeatures[e];
                    let o;
                    o = "ads" == e ? z.a.getMessage("Antifeature_ads") : "miner" == e ? z.a.getMessage("Antifeature_miner") : "tracking" == e ? z.a.getMessage("Antifeature_tracking") : z.a.getMessage("Antifeature_other");
                    const a = s[z.a.getBestLocale(Object.keys(s)) || "default"] || s.en || z.a.getMessage("Antifeature_no_details");
                    let i, A
                    ;n && n.antifeatures && (A = n.antifeatures[e]) && (i = A[z.a.getBestLocale(Object.keys(A)) || "default"] || A.en || z.a.getMessage("Antifeature_no_details")), l && i && a === i || r.warnings.push(z.a.getMessage("Antifeature__0name0__0description0", o, a))
                }), r.flags.sync = !!e.sync, r.flags.internal = e.internal, r.flags.ask = e.ask, r.flags.save = e.save, r.flags.whitewash = e.whitewash
            }).then(() => {
                if (t.uuid = u, t.system = e.defaultscript, t.evilness = ht.getEvilness(t), t.position = ht.determineLastPosition() + 1, t.lastModified = A, e.force_meta) {
                    let n;
                    (n = e.force_meta.fileURL) && (t.fileURL = n), (n = e.force_meta.lastModified) && (t.lastModified = n)
                }
                r.flags.factory || r.flags.reset ? n && (t.lastModified = n.lastModified) : (e.force_url && (t.updateURL = null, t.downloadURL = e.force_url), n && (t.options.override = Object(i.copy)(n.options.override, {}), t.options.comment = n.options.comment, e.save && t.textContent != n.textContent ? t.options.check_for_updates = !1 : t.options.check_for_updates = n.options.check_for_updates)),
                    ["includes", "excludes", "matches", "connects"].forEach(e => {
                        t.options.override["orig_" + e] = t[e]
                    }), t.options.override.orig_noframes = t.options.noframes, t.options.override.orig_run_at = t.options.run_at || "document-idle", t.options.noframes = null, t.options.run_at = null
            }).then(() => {
                if (n && (t.fileURL = n.fileURL, t.position = n.position, n.sync && (t.sync = n.sync), !r.flags.factory && !r.flags.reset)) {
                    t.enabled = n.enabled, t.options.noframes = n.options.noframes, t.options.run_at = n.options.run_at,
                    e.save && !e.force_url && (t.downloadURL = n.downloadURL || t.downloadURL);
                    const s = o.determineSourceURL(n), a = o.determineSourceURL(t),
                        A = s ? X.default.woHash(s) : s || z.a.getMessage("_not_set_"),
                        c = a ? X.default.woHash(a) : a || z.a.getMessage("_not_set_");
                    if (A == c || l || e.internal || r.warnings.push(z.a.getMessage("The_update_url_has_changed_from_0oldurl0_to__0newurl0", [A, c])), !e.save) {
                        const e = n.options.override.orig_includes || n.includes,
                            s = n.options.override.orig_matches || n.matches,
                            o = n.options.override.orig_excludes || n.excludes;
                        Object(i.adiff)(e, t.includes, "notinfirst").length + Object(i.adiff)(s, t.matches, "notinfirst").length + Object(i.adiff)(t.excludes, o, "notinfirst").length && r.warnings.push(z.a.getMessage("At_least_one_of_the_include_match_or_exclude_statements_was_changed_")),
                        Object(i.adiff)(n.connects || [], t.connects || [], "notinfirst").length && r.warnings.push(z.a.getMessage("At_least_one_new_connect_statement_was_added_"))
                    }
                }
            }).then(() => {
                if (n && !r.flags.factory && t.version == n.version) {
                    if (e.defaultscript) return s.Deferred.Breach();
                    if (e.noreinstall) return s.Deferred.Breach()
                }
            }).then(() => {
                n ? (r.flags.factory || r.flags.reset ? (r.flags.reset ? (r.heading = z.a.getMessage("You_are_about_to_reinstall_a_UserScript_"),
                    r.flags.reinstall = !0) : (r.heading = z.a.getMessage("You_are_about_to_install_a_UserScript_"), r.flags.install = !0), e.internal || r.warnings.splice(0, 0, z.a.getMessage("All_script_settings_will_be_reset_"))) : r.flags.modification ? r.heading = z.a.getMessage("You_are_about_to_modify_a_UserScript_") : we.Parser.versionCmp(t.version, n.version) == we.Parser.versionCmp.eOLDER ? (r.heading = z.a.getMessage("You_are_about_to_downgrade_a_UserScript"), r.flags.downgrade = !0,
                l || e.internal || r.warnings.splice(0, 0, z.a.getMessage("The_downgraded_script_might_have_problems_to_read_its_stored_data_"))) : (r.heading = z.a.getMessage("You_are_about_to_update_a_UserScript_"), r.flags.update = !0), r.info.push({
                    label: z.a.getMessage("Installed_Version_"),
                    value: "v" + n.version
                })) : (r.heading = z.a.getMessage("You_are_about_to_install_a_UserScript_"), l || e.internal || (r.info.splice(0, 0, z.a.getMessage("Malicious_scripts_can_violate_your_privacy_")),
                    ot.getWarningsFor(o.determineSourceURL(t)).forEach(e => {
                        r.warnings.splice(0, 0, e)
                    })), r.flags.install = !0), r.flags.whitewash ? r.action = z.a.getMessage("Enable") : r.flags.install ? r.action = z.a.getMessage("Install") : r.flags.reinstall ? r.action = z.a.getMessage("Reinstall") : r.flags.modification ? r.action = z.a.getMessage("Modify") : r.flags.downgrade ? r.action = z.a.getMessage("Downgrade") : r.flags.update && (r.action = z.a.getMessage("Update"))
            }).then(() => {
                e.url && (t.fileURL = e.url), e.sync && (t.sync = e.sync),
                e.force_options && Object(i.copy)(e.force_options, t.options, we.Parser.createScript().options, !0), e.force_settings && Object(i.copy)(e.force_settings, t, ["enabled", "position"]), t = ht.mergeCludes(t)
            }).then(() => {
                let n, s, a = !1;
                for (const e in t.options) if (-1 != e.indexOf("compat_") && !0 === t.options[e]) {
                    a = !0;
                    break
                }
                if (a && r.info.push({
                    label: z.a.getMessage("Note"),
                    value: z.a.getMessage("A_recheck_of_the_GreaseMonkey_FF_compatibility_options_may_be_required_in_order_to_run_this_script_")
                }),
                (n = o.determineOrigin(t)) && (s = n.convert)) {
                    const n = s(t);
                    n.warning && (e.internal ? r.info.push(n.warning) : r.warnings.push(n.warning)), t = n.script
                }
            }).then(() => {
                ["requires", "resources"].forEach(e => {
                    t[e] = t[e].map(e => (e.unsafe_url = e.url, e.abs_url = t.fileURL ? t.fileURL.split("/").slice(0, -1).join("/") : null, e.url = null, e))
                })
            }).done(() => {
                a.resolve({
                    script: t,
                    oldscript: n,
                    messages: r,
                    trigger_sync: !!c,
                    short_info: [{
                        label: z.a.getMessage("Author"),
                        prop: "author"
                    }, { label: z.a.getMessage("Description"), prop: "description" }, {
                        label: z.a.getMessage("Source"), prop: "fileURL"
                    }]
                })
            }).fail(() => {
                a.reject({ messages: r })
            }), a.promise()
        }, n = e => {
            const t = Object(s.Deferred)(), n = e.messages, r = e.script, i = n.warnings.length || n.flags.ask,
                A = e.trigger_sync, l = () => {
                    n.flags.modification || dt.dropAll(r.uuid), t.notify();
                    const e = o.doModify(r.uuid, r, A) || {};
                    return n.flags.save || !n.flags.install && !n.flags.update || n.flags.factory || n.flags.reset || a.a.tS(r.name, n.flags.install ? "i" : "u", ht.determineOrigin(r), r.fileURL),
                    (n.flags.first_install || n.flags.factory) && Rt.setStorageByUid(r.uuid, { ts: Date.now() }), e
                }, c = { uuid: r.uuid, lastModified: void 0, installed: !0, renamed: n.flags.renamed };
            return i ? (rea.extension.inIncognitoContext && "temporary" == it.values.incognito_mode && (e.hints = e.hints || [], e.hints.push({
                globalhint: !0,
                options: {
                    image: "critical",
                    text: z.a.getMessage("All_modifications_are_only_kept_until_this_incognito_session_is_closed_")
                }
            })), j.install(e).done(e => {
                e.ok && l(), c.installed = e.ok, c.aborted = e.aborted, t.resolve(c)
            }).fail(e => {
                t.reject(e)
            })) : window.setTimeout(() => {
                l(), t.resolve(c)
            }, 1), t.promise()
        }, r = Object(i.getDebouncer)(1e3);
        var o = {
            determineSourceURL: function (e) {
                return e ? [e.downloadURL, e.fileURL].filter(e => {
                    if (!e || "file:" !== X.default.parse(e).protocol) return e
                })[0] : null
            }, determineMetaURL: function (e) {
                if (!e) return null;
                let t;
                const n = ht.determineOrigin(e);
                return n && n.meta_header ? t = e.fileURL : !e.fileURL || n && !n.meta_url || (t = e.fileURL.replace(".user.js", ".meta.js"),
                e.fileURL == t && (t = e.fileURL.replace(".tamper.js", ".meta.js")), e.fileURL == t && (t = null)), [e.updateURL, e.downloadURL, t].filter(e => {
                    if (!e || "file:" !== X.default.parse(e).protocol) return e
                })[0]
            }, mergeCludes: function (e) {
                let t, n;
                const r = e.options.override;
                if (["includes", "excludes", "matches"].forEach(t => {
                    e[t] = r["merge_" + t] && r["orig_" + t] ? r["orig_" + t].slice() : []
                }), r.use_includes) for (t = 0; t < r.use_includes.length; t++) n = e.excludes.indexOf(r.use_includes[t]), n >= 0 && e.excludes.splice(n, 1),
                    e.includes.push(r.use_includes[t]);
                if (r.use_matches) for (t = 0; t < r.use_matches.length; t++) n = e.excludes.indexOf(r.use_matches[t]), n >= 0 && e.excludes.splice(n, 1), e.matches.push(r.use_matches[t]);
                if (r.use_excludes) for (t = 0; t < r.use_excludes.length; t++) e.excludes.push(r.use_excludes[t]);
                return e
            }, doSave: function (e) {
                return t(e).then(n)
            }, doRemove: function (e, t) {
                return Rt.removeByUid(e, t), Rt.setStorageByUid(e, null), dt.dropAll(e), s.Deferred.Pledge()
            }, doModify: function (e, t, n) {
                return void 0 === n && (n = !0),
                    Rt.setByUid(e, t, n), n ? dt.loadResources(e, t.resources).then(() => dt.loadRequires(e, t.requires)).then(() => {
                    const n = [].concat(t.resources).concat(t.requires).map(e => X.default.sanitize(e.unsafe_url, e.abs_url));
                    return dt.dropAllBut(e, n)
                }) : s.Deferred.Pledge()
            }, exportToJson: function (e, t) {
                const n = Object(s.Deferred)();
                let r = ht.determineScriptsToRun(null);
                e && (r = r.filter(t => e[t.uuid])), r = Mt(r, {
                    options_page: !0,
                    externals: t.externals
                }), t && !t.storage || r.forEach(e => {
                    e.storage = Rt.getStorageByUid(e.uuid)
                })
                ;const o = { scripts: r };
                return t && !t.global_settings || (o.global_settings = k.getValue(qe.CONSTANTS.STORAGE.CONFIG, {})), n.resolve(o), n.promise()
            }, importFromJson: function (e) {
                if (!e || !e.scripts || !e.scripts.length) return s.Deferred.Breach();
                const r = {}, o = [], a = {}, A = { requires: {}, resources: {} };
                for (let n, l = 0; n = e.scripts[l]; l++) try {
                    const e = Object(s.Deferred)();
                    if ("new-user-script" == n.uuid) continue;
                    n.storage && (a[n.uuid] = n.storage), ["resources", "requires"].forEach(e => {
                        let t;
                        (t = n[e]) && (A[e][n.uuid] = t)
                    })
                    ;const l = n.file_url || n.update_url;
                    t({
                        uuid: n.uuid,
                        name: n.name,
                        src: n.source,
                        force_settings: { enabled: n.enabled, position: n.position },
                        force_options: n.options,
                        force_meta: { lastModified: n.lastModified },
                        replace: !0,
                        url: l,
                        ask: !1
                    }).done(t => {
                        r[Object(i.createUUID)()] = t, e.resolve()
                    }).fail(t => {
                        y.a.warn("import: Error @ script", n.name, t), e.resolve()
                    }), o.push(e.promise())
                } catch (e) {
                    y.a.warn("import: Error while importing script", n.name, e)
                }
                const l = (() => {
                    const e = Object(s.Deferred)()
                    ;
                    return s.Deferred.when(o).always(() => {
                        e.resolve()
                    }), e.promise()
                })().then(() => j.import({
                    scripts: r,
                    global_settings: e.global_settings,
                    hints: rea.extension.inIncognitoContext && "temporary" == it.values.incognito_mode ? [{
                        globalhint: !0,
                        options: {
                            image: "critical",
                            text: z.a.getMessage("All_modifications_are_only_kept_until_this_incognito_session_is_closed_")
                        }
                    }] : []
                })).then(e => {
                    const t = Object(s.Deferred)(), o = [], i = [];
                    if (e.ok) for (let t, s = 0; t = e.import_ids[s]; s++) (() => {
                        const e = t;
                        if (r[e]) {
                            r[e].messages.warnings = []
                            ;const t = r[e].script.uuid, s = n(r[e]).progress(() => {
                                ["resources", "requires"].forEach(e => {
                                    let n;
                                    (n = A[e][t]) && n.length && n.forEach(e => {
                                        dt.setElement(t, e.url, {
                                            content: e.content || "",
                                            meta: e.mimetype || "text/javascript"
                                        }, e.modified)
                                    })
                                })
                            }).done(() => {
                                let e;
                                a[t] && (e = Rt.setStorageByUid(t, {
                                    data: a[t].data || {},
                                    ts: Date.now()
                                }), i.push(e))
                            });
                            o.push(s)
                        }
                    })();
                    return s.Deferred.when(o).always(() => {
                        ht.reorderScripts(), s.Deferred.when(i).always(() => {
                            t.resolve(e)
                        })
                    }), t.promise()
                }).then(t => {
                    if (e.global_settings && t.global_settings) {
                        const t = k.setValue(qe.CONSTANTS.STORAGE.CONFIG, e.global_settings).then(() => (l.done(() => {
                            window.setTimeout(St.reset, 1)
                        }), s.Deferred.Pledge({ global_settings: !0 })));
                        return k.setTemporary(!0), t
                    }
                    return s.Deferred.Pledge({})
                });
                return l
            }, installFromUrl: function (e, t, n) {
                const a = Object(s.Deferred)();
                let A;
                const l = {
                    messages: {
                        errors: [z.a.getMessage("Unable_to_load_script_from_url_0url0", e)],
                        warnings: []
                    }
                };
                t = t || {}, n = n || {};
                const c = ["url", e, JSON.stringify(t)].join("_")
                ;
                return r.is(c) ? (y.a.debug("scriptman: de-bounced installFromUrl", e), s.Deferred.Breach()) : (r.add(c), (A = X.default.parse(e)) && A.protocol.match(/(https?|file):/) ? ("file:" != A.protocol || qe.RUNTIME.ALLOWS_FILE_SCHEME_ACCESS || y.a.warn("scriptman: Access to local files is forbidden! Loading the following script for installation may fail:", e, "-> more info:", "https://www.tampermonkey.net/faq.php#Q204"), gt.getScriptFromURL(e).then(r => {
                    const s = { url: e, src: r, ask: !0, replace: !0 };
                    t && Object(i.each)(t, (e, n) => {
                        s[n] = t[n]
                    }), a.consume(o.installFromSource(r, s, n))
                }).fail(e => {
                    let t;
                    e ? (t = l, "file:" != A.protocol || qe.RUNTIME.ALLOWS_FILE_SCHEME_ACCESS || t.messages.warnings.unshift(z.a.getMessage("Tampermonkey_has_no_file_access_permission_")), t.heading = z.a.getMessage("You_are_about_to_install_a_UserScript_"), n.silent_fail ? a.reject(t) : j.installError(t).always(e => {
                        a.reject(e)
                    })) : a.reject()
                }), a.promise()) : (y.a.warn("scriptman: can't install from ", e), s.Deferred.Breach(l)))
            }, installFromSource: function (e, t, n) {
                const r = Object(s.Deferred)(), a = { src: e, ask: !0, replace: !0 };
                return t && Object(i.each)(t, (e, n) => {
                    a[n] = t[n]
                }), o.doSave(a).done(e => {
                    r.resolve(e.installed)
                }).fail(e => {
                    e ? (e.heading = z.a.getMessage("You_are_about_to_install_a_UserScript_"), n.silent_fail ? r.reject(e) : j.installError(e).always(e => {
                        r.reject(e)
                    })) : r.reject()
                }), r.promise()
            }, determineLastPosition: function () {
                let e = 0;
                Rt.getUidList().forEach(t => {
                    const n = Rt.getByUid(t)
                    ;n.script && n.cond ? n.script.position && n.script.position > e && (e = n.script.position) : y.a.warn("scriptman: inconsistent script entry", t)
                });
                const t = we.Parser.createScript();
                return t.position > e && (e = t.position), e
            }, convertToRegExp: function (e, t) {
                let n, r;
                try {
                    t || "/" != e.substr(0, 1) ? t ? (r = X.default.getRegExpFromMatch(e), n = new RegExp(r)) : (r = X.default.getRegExpFromInclude(e), n = new RegExp(r, "i")) : (r = ("^" == e.substr(1, 1) ? "" : ".*") + e.replace(/^\//g, "").replace(/\/$/g, "") + ("$" == e.substr(-2, 1) ? "" : ".*"),
                        r = r.replace(/(\.\*){1,}/g, ".*"), n = new RegExp(r, "i"))
                } catch (t) {
                    return y.a.warn("scriptman: invalid regexp ", e), !1
                }
                return n
            }, matchUrl: function (e, t) {
                return "" === e.replace(t, "")
            }, regexify: function (e, t) {
                const n = {}, r = { inc: "rinc", match: "rinc", exc: "rexc" };
                return Object.keys(r).forEach(s => {
                    const a = e[s] && e[s].length ? e[s].map(e => o.convertToRegExp(e, "match" === s)).filter(e => !1 !== e) : null;
                    (a || t) && (n[r[s]] = (n[r[s]] || []).concat(a || []))
                }), n
            }, validUrl: function (e, t, n) {
                let r = !1;
                if (t.rinc) {
                    if (t.rinc.every(t => !o.matchUrl(e, t) || (y.a.debug('scriptman: @include "' + t + '" matched' + (n ? " (" + n + ")" : '"')), r = !0, !1)), !r) return r
                } else r = !0;
                return t.rexc && t.rexc.every(t => !o.matchUrl(e, t) || (y.a.debug('scriptman: @exclude "' + t + '" matched' + (n ? " (" + n + ")" : '"')), r = !1, !1)), r
            }, getEvilness: function (e) {
                let t = 0
                ;
                return e.fileURL && (t = ot.getEvilnessOf(e.fileURL)) || e.downloadURL && (t = ot.getEvilnessOf(e.downloadURL)) || e.updateURL && (t = ot.getEvilnessOf(e.updateURL)) ? (y.a.debug("scriptman: found blacklisted script", e), t) : 0
            }, blackCheckAll: function () {
                Rt.getUidList().forEach(e => {
                    const t = Rt.getByUid(e);
                    if (!t.script || !t.cond) return;
                    const n = ht.getEvilness(t.script);
                    n !== t.script.evilness && (t.script.evilness = n, o.doModify(e, t.script, !1))
                })
            }, reorderScripts: function (t, n) {
                let r = o.determineScriptsToRun()
                ;
                if (t) for (let e = 0; e < r.length; e++) {
                    const s = r[e];
                    if (s.uuid == t) {
                        const e = s.position < n ? .5 : -.5;
                        s.position = Number(n) + e
                    }
                }
                r = e(r);
                let s = 1;
                for (let e = 0; e < r.length; e++) {
                    const t = r[e];
                    t.position = s++, o.doModify(t.uuid, t, !1)
                }
            }, getScriptHistoryForTab: function (e) {
                return tt.get.empty(e.id) ? (y.a.debug("bg: WARN: Tabs.get.urls[" + e.id + "] is empty!"), {}) : tt.get.history(e.id)
            }, getUniqueScriptsForTab: function (e) {
                const t = {};
                if (tt.get.empty(e.id)) y.a.debug("bg: WARN: Tabs.get.urls[" + e.id + "] is empty!"); else {
                    const n = (e, n) => {
                        if (!st.isAllowed(n)) return;
                        const { runners: r, contexters: s, disabled: o, evilness: a } = $e(e.frameId, n);
                        [r, s, o, a].forEach(e => {
                            e.forEach(e => {
                                t[e.uuid] = { script: e }
                            })
                        })
                    };
                    Object(i.each)(tt.get.urls(e.id), n)
                }
                return t
            }, scriptWillRun: function (e, t) {
                if (!t || !e) return;
                let n = He.items.regexp.get(e);
                if (!n) {
                    if (!(n = k.getValue(qe.CONSTANTS.PREFIX.COND + e, null))) return;
                    n = o.regexify(n, !0), He.items.regexp.set(e, n)
                }
                return !!o.validUrl(t, n, e)
            }, determineScriptsToRun: function (t, n) {
                const r = []
                ;
                return y.a.log("scriptman: determineScriptsToRun @" + t), Rt.getUidList().forEach(e => {
                    let s = !0, a = 0;
                    if (t) {
                        const n = Date.now();
                        s = o.scriptWillRun(e, t), a = Date.now() - n
                    }
                    const i = Rt.getByUid(e);
                    if (i.script && i.cond) {
                        if (n && a > 1e3 && (y.a.warn("scriptman: checking " + i.script.name + "'s (" + e + ") includes and excludes took " + a + "ms!"), ft.all("status", {
                            key: "slowdown",
                            class: "warning",
                            text: z.a.getMessage("Script_0name0_is_slowing_down_some_page_loads_", i.script.name),
                            timeout: 3e5
                        })), !s) return;
                        r.push(i.script)
                    } else y.a.warn("scriptman: inconsistent script entry", e, i)
                }), e(r)
            }, isContexter: function (e) {
                return e.options && ("context-menu" === e.options.run_at || null === e.options.run_at && "context-menu" === e.options.override.orig_run_at)
            }, determineOrigin: function (e) {
                const t = e.fileURL || e.downloadURL || e.updateURL;
                return o.determineOriginOfUrl(t)
            }, determineOriginOfUrl: function (e) {
                if (e) {
                    let t
                    ;const n = e.match(new RegExp("https?://userscripts\\.org/scripts/(source|version)/([0-9]{1,9})\\.user\\.js")) || e.match(new RegExp("https?://userscripts-mirror\\.org/scripts/(source|version)/([0-9]{1,9})\\.user\\.js"));
                    if (n && 3 == n.length) return {
                        id: n[2],
                        token: "uso",
                        meta_url: !0,
                        url: "http://userscripts-mirror.org/scripts/show/" + n[2],
                        issue_url: "http://contactbyweb.com/userscripts-mirror"
                    };
                    const r = e.match(new RegExp("https?://greasyfork\\.org/(?:[^/]+/)?scripts/([^/-]+).*/code.*\\.user\\.js"))
                    ;
                    if (r && 2 == r.length) return t = r[1], {
                        id: t,
                        token: "gf",
                        meta_url: !0,
                        url: "https://greasyfork.org/scripts/" + t,
                        issue_url: "https://greasyfork.org/scripts/" + t + "/feedback",
                        updates_allowed: function (e) {
                            return !e.match(new RegExp("https?://greasyfork\\.org/scripts/([^/]+)/code/.*\\.user\\.js.*version=[0-9]+.*"))
                        }
                    };
                    const s = e.match(new RegExp("https?://openuserjs\\.org/install/([^/]+)+/(.+?)(?:\\.min)?\\.user\\.js"));
                    if (s && 3 == s.length) return s.shift(), {
                        id: s.join("/"),
                        token: "ouj",
                        meta_header: !0,
                        url: "https://openuserjs.org/scripts/" + s[0] + "/" + s[1],
                        issue_url: "https://openuserjs.org/scripts/" + s[0] + "/" + s[1] + "/issues"
                    };
                    const o = e.match(new RegExp("https?://raw\\.githubusercontent\\.com/([^/]+)/([^/]+)/.*\\.user\\.js")) || e.match(new RegExp("https?://github\\.com/([^/]+)/([^/]+)/raw/.*\\.user\\.js")) || e.match(new RegExp("https?://github\\.com/([^/]+)/([^/]+)/releases/download/.*\\.user\\.js"));
                    if (o && 3 == o.length) return o.shift(), t = o.join("/"), {
                        id: t, token: "gh", url: "https://github.com/" + t,
                        issue_url: "https://github.com/" + t + "/issues"
                    };
                    const a = e.match(new RegExp("https?://gist\\.github\\.com/([^/]+)/([^/]+)/raw/(.*/)?.*\\.user\\.js")) || e.match(new RegExp("https?://gist\\.githubusercontent\\.com/([^/]+)/([^/]+)/raw/(.*/)?.*\\.user\\.js"));
                    if (a && (3 == a.length || 4 == a.length)) {
                        const n = 4 == a.length;
                        return t = `${a[1]}/${a[2]}`, {
                            id: t,
                            token: "gst",
                            url: "https://gist.github.com/" + t,
                            issue_url: `https://gist.github.com/${t}#new_comment_field`,
                            convert: function (t) {
                                return n && ht.determineSourceURL(t) == e && t.options && (t.options.check_for_updates = !1), { script: t }
                            }
                        }
                    }
                    const i = e.match(new RegExp("https?://gitlab\\.com/([^/]+/?[^/]*)/([^/]+)/raw/.*\\.user\\.js"));
                    if (i && 3 == i.length) return i.shift(), t = i.join("/"), {
                        id: t,
                        token: "gl",
                        url: "https://gitlab.com/" + t,
                        issue_url: "https://gitlab.com/" + t + "/issues"
                    };
                    const A = e.match(new RegExp("https?://bitbucket\\.org/([^/]+)/([^/]+)/(?:raw|downloads)/.*\\.user\\.js"));
                    if (A && 3 == A.length) return A.shift(), t = A.join("/"), {
                        id: t,
                        token: "bb",
                        url: "https://bitbucket.org/" + t,
                        issue_url: "https://bitbucket.org/" + t + "/issues"
                    };
                    const l = e.match(new RegExp("https?://userstyles\\.org/styles/userjs/([^/]+)/.*\\.user\\.js"));
                    if (l && 2 == l.length) return l.shift(), {
                        id: l[0],
                        token: "usty",
                        url: "https://userstyles.org/styles/" + l[0],
                        issue_url: "https://forum.userstyles.org/post/discussion?Discussion/StyleID=" + l[0],
                        convert: function (e) {
                            let t, n, r, s;
                            const o = [{
                                    tag: "includes",
                                    re: /(?: \|\| \(new RegExp\("\^)([^$]+)(?:\$"\)\)\.test\(document\.location\.href\))/g,
                                    idx: 1,
                                    value: function (e) {
                                        return "/^" + e.replace(/\\\\(.)/g, "\\$1") + "$/"
                                    }
                                }, {
                                    tag: "includes",
                                    re: /(?: \|\| \(document\.location\.href\.indexOf\(")([^\"]+)"(?:\) == 0\))/g,
                                    idx: 1,
                                    value: function (e) {
                                        return e + "*"
                                    }
                                }, {
                                    tag: "matches",
                                    re: /(?: \|\| \(document\.domain == ")([^\"]+)"(?: \|\| document\.domain\.substring\(document\.domain\.indexOf\("[^\"]+"\) \+ 1\) == "[^\"]+"\))/g,
                                    idx: 1,
                                    value: function (e) {
                                        return "*." + e
                                    }
                                }],
                                a = new RegExp("(?:if \\(false)(" + o.map(e => "(?:" + e.re.source + ")").join("|") + ")+", "g");
                            return 0 === e.includes.length && 0 === e.matches.length && 0 === e.excludes.length && e.options && e.options.override && e.options.override.orig_includes && 0 === e.options.override.orig_includes.length && e.options.override.orig_matches && 0 === e.options.override.orig_matches.length && (n = e.textContent.match(a)) && (n.forEach(t => {
                                o.forEach(n => {
                                    for (; r = n.re.exec(t);) if (r.length > n.idx) {
                                        const t = n.value(r[n.idx])
                                        ;e.options.override["orig_" + n.tag].push(t), e[n.tag].push(t), s = !0
                                    }
                                })
                            }), s && (t = z.a.getMessage("Automatically_added_user_includes_for_compatibility_reasons_"))), {
                                script: e,
                                warning: t
                            }
                        }
                    }
                }
            }, clean: function (e) {
                Rt.getUidList().forEach(t => {
                    const n = Rt.getByUid(t);
                    if (!n.script || !n.cond) return e ? y.a.warn("scriptman: inconsistent script entry", t, n) : void o.doRemove(t, !0)
                })
            }
        };
        return o
    })();
    window.scma = ht;
    var Rt = (() => {
        let e = [];
        const t = {
            init: function () {
                k.addDifferentOriginChangeListener(qe.CONSTANTS.PREFIX.STORE, (e, n) => {
                    if (!n || !n.hasOwnProperty("value") || !n.origin) return;
                    const r = e.replace(qe.CONSTANTS.PREFIX.STORE, "");
                    for (const e in n.value.data) n.value.data.hasOwnProperty(e) && (() => {
                        const s = e, o = n.value.data[e];
                        t.notifyStorageListeners({ uuid: r }, null, e => {
                            const t = { data: {}, ts: 0 };
                            t.data[s] = o, t.ts = n.value.data.ts;
                            const r = { storage: t };
                            void 0 === t.data[s] && (r.removed = s), e(r)
                        })
                    })()
                })
            }, getUidList: function () {
                const e = new RegExp("^" + qe.CONSTANTS.PREFIX.SCRIPT_UID), t = [];
                return k.listValues().forEach(n => {
                    -1 != n.search(e) && t.push(n.replace(e, ""))
                }), t
            }, getUidsByName: function (e, n) {
                const r = [];
                return t.getUidList().forEach(s => {
                    const o = t.getMetaByUid(s);
                    !o || o.name != e || n && n != o.namespace || r.push(s)
                }), r
            }, getUidByName: function (e) {
                return t.getUidsByName(e)[0]
            }, getStorageByUid: function (e) {
                const t = k.getValue(qe.CONSTANTS.PREFIX.STORE + e, { ts: 0, data: {} });
                return void 0 === t.ts && (t.ts = 0), void 0 === t.data && (t.data = {}), t
            },
            setStorageByUid: function (e, t) {
                return t ? k.setValue(qe.CONSTANTS.PREFIX.STORE + e, t) : k.deleteValue(qe.CONSTANTS.PREFIX.STORE + e)
            }, getMetaByUid: function (e) {
                return k.getValue(qe.CONSTANTS.PREFIX.META + e, null)
            }, getByUid: function (e, t) {
                if (!e) return y.a.error("sb: no UUID set"), {};
                let n, r = k.getValue(qe.CONSTANTS.PREFIX.META + e, null);
                if (r) {
                    const s = e => {
                        if (e) for (let t = 0, n = null; n = e[t]; t++) delete n.loaded, delete n.textContent, delete n.resURL, delete n.resText
                    };
                    s(r.requires), s(r.resources), r.uuid = e,
                        r.grant = r.grant || [], r.options.override.use_connects || (r.connects = r.connects || [], r.options.override.merge_connects = !0, r.options.override.use_connects = []), void 0 === r.options.check_for_updates && (r.options.check_for_updates = !0), t && (r = Object(i.copy)(r, {})), r.textContent = k.getValue(qe.CONSTANTS.PREFIX.SCRIPT + e, r.textContent), r.textContent && (n = r)
                }
                return { script: n, cond: k.getValue(qe.CONSTANTS.PREFIX.COND + e, null) }
            }, setByUid: function (e, t, n) {
                const r = {};
                if (!e) return y.a.error("sb: no UUID set", t), r
                    ;
                if (null === t.textContent || void 0 === t.textContent) throw new Error("No script code set!");
                const s = k.getValue(qe.CONSTANTS.PREFIX.META + e), o = !s, a = {}, A = Object(i.copy)(t, {});
                return A.textContent = null, a[qe.CONSTANTS.PREFIX.META + e] = A, a[qe.CONSTANTS.PREFIX.SCRIPT_UID + e] = t.name, a[qe.CONSTANTS.PREFIX.COND + e] = {
                    inc: t.includes,
                    match: t.matches,
                    exc: t.excludes
                }, a[qe.CONSTANTS.PREFIX.SCRIPT + e] = t.textContent, k.setValues(a), n && (o ? at.scriptAddedCb(t.name, t) : at.scriptChangedCb(t.name, t, s)),
                    He.items.rundata.removeAll(), He.items.regexp.remove(e), r
            }, removeByUid: function (e, n) {
                void 0 === n && (n = !0);
                const r = t.getByUid(e);
                return k.deleteValue(qe.CONSTANTS.PREFIX.SCRIPT_UID + e), k.deleteValue(qe.CONSTANTS.PREFIX.COND + e), k.deleteValue(qe.CONSTANTS.PREFIX.SCRIPT + e), k.deleteValue(qe.CONSTANTS.PREFIX.META + e), k.deleteValue(qe.CONSTANTS.PREFIX.STORE + e), n && r.script && r.cond && (at.scriptRemovedCb(r.script.name, r.script), it.values && a.a.tS(r.script.name, "r", ht.determineOrigin(r.script))),
                    He.items.rundata.removeAll(), He.items.regexp.remove(e), {}
            }, addStorageListener: function (t, n, r, s, o) {
                e.push({ tabid: t, id: n, uuid: r, time: s, response: o })
            }, removeStorageListeners: function (t, n) {
                void 0 === n && (n = !0);
                const r = e;
                e = [], r.forEach(r => {
                    try {
                        void 0 !== t.tabid && t.tabid !== r.tabid || void 0 !== t.uuid && t.uuid !== r.uuid || void 0 !== t.id && t.id !== r.id ? e.push(r) : n && r.response({})
                    } catch (e) {
                        y.a.debug("sb: listener clear for script", t, "failed! Page reload?!")
                    }
                })
            }, notifyStorageListeners: function (t, n, r) {
                t = t || {}, n = n || {},
                    e.forEach(e => {
                        try {
                            void 0 !== n.uuid && e.uuid === n.uuid || void 0 !== n.tabid && e.tabid === n.tabid || void 0 !== n.id && e.id === n.id || void 0 !== t.tabid && t.tabid !== e.tabid || void 0 !== t.uuid && t.uuid !== e.uuid || void 0 !== t.id && t.id !== e.id || r && r(e.response)
                        } catch (e) {
                            y.a.warn("sb: listener notification for script", t, "failed! Page reload?!")
                        }
                    })
            }
        };
        return t
    })();
    window.scbr = Rt;
    const vt = function () {
        return s.Deferred.Pledge()
    }, wt = function () {
        return s.Deferred.Pledge()
    }, bt = function () {
        qe.DB.SECURE || Rt.getUidList().forEach(e => {
            const t = Rt.getByUid(e);
            console.log('ttt', t)
            t.script && t.cond && t.script.evilness != ot.SEVERITY_FOISTED_SCRIPT && (y.a.warn("content security: found unfamiliar script", t.script.name), t.script.evilness = ot.SEVERITY_FOISTED_SCRIPT, ht.doModify(e, t.script, !1))
        })
    }, kt = function () {
    };
    var _t = (() => {
        const e = {
            ping: {
                allow: { insecure: !0 }, exec: function (e, t, n) {
                    n({
                        pong: !0,
                        instanceID: We,
                        config: { layout: it.values.layout, dark: rea.runtime.isDarkMode() }
                    })
                }
            }, newTab: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    ("options" == t.extpage || "options" == e.origin ? s.Deferred.Pledge(t.tab) : lt()).then(t => {
                        rea.tabs.create({ url: e.url, parent: t }, e => {
                            n({ tabId: e.id })
                        })
                    })
                }
            }, tabs: {
                allow: { script: !0 }, exec: function (e, t, n) {
                    "get" == e.action ? t.tab && e.uuid ? n({ data: nt.get(t.tab.id, e.uuid) }) : (y.a.warn("bg: unable to process request", t, e), n({ data: null })) : "list" == e.action ? e.uuid ? n({ data: nt.getAll(e.uuid) }) : (y.a.warn("bg: unable to process request", t, e), n({
                        data: null
                    })) : "set" == e.action ? (t.tab && e.uuid ? nt.set(t.tab.id, e.uuid, e.tab) : y.a.warn("bg: unable to process request", t, e), n({})) : n({ error: "unknown action" })
                }
            }, focusTab: {
                allow: { script: !0 }, exec: function (e, t, n) {
                    const r = t && t.tab ? t.tab.id : null;
                    r ? rea.tabs.update(r, { active: !0 }, () => {
                        const e = rea.runtime.lastError;
                        n({ error: e ? e.message : void 0 })
                    }) : n({ error: "internal error" })
                }
            }, closeTab: {
                allow: { script: !0 }, exec: function (e, t, n) {
                    const r = t && t.tab ? t.tab.id : null;
                    r ? rea.tabs.query({ windowType: "normal" }, e => {
                        if (e.length <= 1) {
                            const e = "refused to close last tab!";
                            y.a.warn("bg:", e), n({ error: e })
                        } else rea.tabs.remove(r, () => {
                            const e = rea.runtime.lastError;
                            n({ error: e ? e.message : void 0 })
                        })
                    }) : n({ error: "internal error" })
                }
            }, setOption: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    const r = "options" == t.extpage || "options" == e.origin;
                    it.setValue(e.name, e.value).always(() => {
                        r ? Tt.create("options.settings").done(e => {
                            n({ items: e, options: it.snapshot })
                        }).fail(e => {
                            n({ error: e, options: it.snapshot })
                        }) : n({})
                    })
                }
            }, reportAnIssue: {
                allow: { extpage: !0 },
                exec: function (e, t, n) {
                    ("options" == t.extpage || "options" == e.origin ? s.Deferred.Pledge(t.tab) : lt()).then(t => {
                        let r, s, o;
                        if (e.uuid && (r = Rt.getByUid(e.uuid)) && r.script && r.cond) {
                            let n;
                            s = ht.determineOrigin(r.script), "hoster" == e.to && s ? o = s : (n = r.script.supportURL || s.issue_url || s.url) && (o = { issue_url: n }), o && (a.a.tS(r.script.name, "m", ht.determineOrigin(r.script)), rea.tabs.create({
                                url: o.abuse_url || o.issue_url,
                                active: !0,
                                parent: t
                            }, () => {
                            }))
                        }
                        n({})
                    })
                }
            }, begEvent: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    if ("dialog" == e.action) Ot.dialog.shown(e.extra); else if ("clicked" == e.action) {
                        let t, n;
                        e.extra && (t = e.extra.amount, n = e.extra.currency), Ot.clicked(e.type, t, n)
                    } else Ot.button[e.action] ? Ot.button[e.action](e.type, e.extra) : y.a.warn("bg: Warning: unknown request ", e);
                    n({})
                }
            }, buttonPress: {
                allow: { extpage: !0 }, exec: function (t, n, r) {
                    const { name: s, data: o, scriptuid: a } = t, i = () => {
                            r({})
                        }
                    ;
                    if ("reset_simple" == s) St.reset(i); else if ("reset_factory" == s) St.factoryReset(i); else if ("reset_sync" == s) at.reset().always(i); else if ("install_tests" == s) {
                        const e = Xe.framework.prepare(ht, Rt, qe.RUNTIME.BROWSER, qe.RUNTIME.BROWSER_VERSION, i);
                        e && y.a.error(e)
                    } else if ("enabled" == s) it.setValue(s, !it.values[s]).always(() => {
                        r({})
                    }); else if ("installFromUrl" == s) ht.installFromUrl(o).always(() => {
                        r({})
                    }); else if ("externals_delete" == s) dt.cleanElement(a, t.safe_url), Tt.create("options.scripts").done(e => {
                        r({
                            items: e, options: it.snapshot
                        })
                    }).fail(e => {
                        r({ error: e, options: it.snapshot })
                    }); else if ("focus_tab" == s) e.focusTab.exec({}, { tab: { id: t.tabid } }, r); else if ("run_script_updates" == s) if (a) {
                        let e;
                        gt.check(!0, !1, a).done(t => {
                            e = t
                        }).always(() => {
                            r({ scriptuid: a, updatable: e })
                        })
                    } else gt.check(!0, !0), r({}); else if ("blacklist_page" == s) {
                        const e = o.domain;
                        if (!e) throw new Error("Blacklisted domain is missing!");
                        const t = "/" + X.default.getRegExpFromMatch(`*://*.${e}/*`, !0) + "/"
                        ;it.setValue("forbiddenPages", it.values.forbiddenPages.concat([t])).always(() => {
                            r({})
                        })
                    } else if ("script_search" == s) {
                        const { url: e, result_url: t } = o;
                        if (e) {
                            const t = { url: Ve(e), active: !0 };
                            rea.tabs.create(t, () => {
                            })
                        } else {
                            if (!t) throw new Error("Search URL is missing!");
                            {
                                const e = { url: t, active: !0 };
                                rea.tabs.create(e, () => {
                                })
                            }
                        }
                    } else y.a.warn("bg: Warning: unknown button " + s), r({})
                }
            }, loadTree: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    Tt.create(e.referrer, {
                        complete: e.complete, url: e.url, uuid: e.uuid, filter: e.filter,
                        tabId: e.tabId
                    }).done(t => {
                        const r = { items: t }, s = 1 == Tt.level(e.referrer) ? {
                            i18n: it.values.i18n,
                            options: it.snapshot,
                            xhr: Y.a.getConfig(),
                            begging: Ot.needed()
                        } : {};
                        n(Object.assign(r, s))
                    }).fail(e => {
                        n({ error: e, options: it.snapshot })
                    })
                }
            }, modifyScriptOptions: {
                allow: { extpage: !0 }, exec: function (t, n, r) {
                    if (!t.uuid) return void r({});
                    const s = "options" == n.extpage || "options" == t.origin;
                    let o = null == t.reload || 1 == t.reload, a = !1;
                    const i = Rt.getByUid(t.uuid, !0), A = () => {
                            o ? (void 0 !== t.position && ht.reorderScripts(t.uuid, t.position), s ? e.loadTree.exec({ referrer: "options.scripts" }, n, r) : rea.tabs.getSelected(null, e => {
                                Tt.create("actions").done(e => {
                                    r({ items: e, i18n: it.values.i18n, options: { enabled: it.values.enabled } })
                                }).fail(() => {
                                    r({ i18n: it.values.i18n, options: { enabled: it.values.enabled } })
                                }), !e || e.id < 0 || t.uuid && it.values.autoReload && rea.tabs.sendMessage(e.id, { method: "reload" }, { frameId: 0 })
                            })) : r({})
                        }
                    ;
                    if (i.script && i.cond) if (t.whitewash && i.script.evilness == ot.SEVERITY_FOISTED_SCRIPT) o = !0, i.script && i.cond ? ht.doSave({
                        uuid: t.uuid,
                        src: i.script.textContent,
                        force_settings: { enabled: !0 },
                        whitewash: !0,
                        save: !0
                    }).always(A) : (y.a.error(z.a.getMessage("fatal_error") + " (" + t.uuid + ")!!!"), A()); else {
                        let e = !1;
                        const n = we.Parser.createScript();
                        Object.keys(n.options).forEach(e => {
                            void 0 !== t[e] && (i.script.options[e] = t[e], a |= !0 === at.SYNCED[e])
                        }), Object.keys(n.options.override).forEach(n => {
                            -1 != n.indexOf("merge_") && void 0 !== t[n] && (i.script.options.override[n] = t[n], e = !0)
                        }), ["includes", "excludes", "matches"].forEach(n => {
                            void 0 !== t[n] && (e = !0, i.script.options.override["use_" + n] = t[n])
                        }), ["connects", "blockers"].forEach(e => {
                            void 0 !== t[e] && (i.script.options.override["use_" + e] = t[e])
                        }), t.add_excludes && (i.script.options.override.use_excludes = i.script.options.override.use_excludes.concat(t.add_excludes), e = !0), e && (i.script = ht.mergeCludes(i.script)),
                        t.temp_connects && ct.setSessionConnects(i.script.uuid, t.temp_connects), void 0 !== t.enabled && (i.script.enabled = t.enabled), a && (i.script.lastModified = Date.now()), void 0 !== t.file_url && (i.script.downloadURL = t.file_url), ht.doModify(i.script.uuid, i.script, a).done(A).fail(() => {
                            r({})
                        })
                    } else r({})
                }
            }, saveScript: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    const r = void 0 === e.reload || !!e.reload, s = e => {
                        r ? Tt.create("options.scripts").done(t => {
                            e.items = t, e.options = it.snapshot, n(e)
                        }).fail(e => {
                            n({
                                error: e,
                                options: it.snapshot
                            })
                        }) : n({})
                    };
                    if (e.clean) {
                        y.a.debug("bg: clean userscript " + e.uuid);
                        const t = Rt.getByUid(e.uuid), r = t => {
                            Tt.create("options.scripts").done(r => {
                                n({
                                    cleaned: t.installed,
                                    items: r,
                                    options: it.snapshot
                                }), t.installed && Rt.notifyStorageListeners({ uuid: e.uuid }, null, t => {
                                    t({ storage: Rt.getStorageByUid(e.uuid) })
                                })
                            }).fail(e => {
                                n({ error: e, options: it.snapshot })
                            })
                        };
                        t.script && t.cond ? ht.doSave({
                            name: e.name,
                            uuid: e.uuid,
                            src: t.script.textContent,
                            clean: !0,
                            ask: !1,
                            internal: !0,
                            save: !0
                        }).always(e => {
                            r(e || {
                                installed: !1
                            })
                        }) : (y.a.error(z.a.getMessage("fatal_error") + " (" + e.uuid + ")!!!"), r({ installed: !1 }))
                    } else if (e.code) {
                        let t = n;
                        r && (t = e => {
                            ht.reorderScripts(), s(e)
                        }), e.new_script && (e.uuid = Object(i.createUUID)()), ht.doSave({
                            name: e.name,
                            uuid: e.uuid,
                            force_url: e.force_url,
                            src: e.code,
                            ask: !it.values.editor_easySave,
                            lastModTime: e.lastModTime,
                            save: !0
                        }).always(e => {
                            t(e || { installed: !1 })
                        })
                    } else e.auto_save || (ht.doRemove(e.uuid), ht.reorderScripts()), s({})
                }
            }, saveExternal: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    dt.setElement(e.uuid, e.url, {
                        content: e.code || "",
                        meta: e.mimetype || "text/javascript"
                    }, !0), Tt.create("options.scripts").done(e => {
                        n({ success: !0, items: e, options: it.snapshot })
                    }).fail(e => {
                        n({ error: e, options: it.snapshot })
                    })
                }
            }, saveStorageKey: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    o.saveStorageKey.exec(null, e, t, n)
                }
            }, importFromJson: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    const r = void 0 === e.reload || !!e.reload;
                    ht.importFromJson(e.json).fail(e => {
                        n({
                            error: e || z.a.getMessage("An_error_occured_during_import_")
                        })
                    }).done(e => {
                        const t = { reload: e.global_settings };
                        r && !t.reload ? Tt.create("options.scripts").done(e => {
                            t.items = e, t.options = it.snapshot, n(t)
                        }).fail(e => {
                            n({ error: e, options: it.snapshot })
                        }) : n(t)
                    })
                }
            }, download: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    o.download.exec(null, e, t, e => {
                        (e.error || e.load) && n(e)
                    })
                }
            }, askCom: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    j.onMessage(e.data).always(e => {
                        e.i18n = it.values.i18n, e.options = it.snapshot, n(e)
                    })
                }
            }, installScript: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    if (t.tab) {
                        let t = {};
                        (e.code ? ht.installFromSource(e.code, {}, { silent_fail: !0 }) : ht.installFromUrl(e.url, {}, { silent_fail: !0 })).done(e => {
                            t = { data: null, found: !0, installed: e }
                        }).fail(e => {
                            e && e.messages && e.messages.errors ? t.err = e.messages.errors[0] : t.err = z.a.getMessage("Unable_to_parse_this_")
                        }).always(() => {
                            n(t)
                        })
                    } else y.a.warn("bg: Error: unable to install script due to empty tabID!")
                }
            }, execMenuCmd: {
                allow: { extpage: !0 }, exec: function (e, t, n) {
                    const r = Et.getById(e.id);
                    r ? r.response({
                        run: !0, menuId: r.menuId
                    }) : y.a.warn("bg: Error: unable to find MC id " + r.menuId), n({})
                }
            }, unLoad: {
                allow: { script: !0 }, exec: function (e, t) {
                    return e.topframe || e.id && t.tab && t.frameId && tt.events.unload(t.tab.id, t.frameId, e.id), !1
                }
            }, prepare: {
                allow: { script: !0 }, exec: function (e, t, n) {
                    if (t.tab) {
                        const r = void 0 !== t.frameId ? t.frameId : e.topframe ? 0 : null, s = X.default.woHash(e.url);
                        e.cleanup ? (tt.events.clean(t.tab.id, r, s), Ut.setIcon(t.tab.id), Ut.setBadge(t.tab.id), n({})) : tt.events.run(t.tab.id, r, e.id, s, r => {
                            const s = r ? et(r, e.url) : { fast: !0 }
                            ;n(s), Ut.setIcon(t.tab.id), Ut.setBadge(t.tab.id)
                        })
                    } else n({})
                }
            }, contextmenu: {
                allow: { script: !0 }, exec: function (e, t, n) {
                    const { tab: r } = t;
                    if (r) {
                        const n = void 0 !== t.frameId ? t.frameId : e.topframe ? 0 : null,
                            s = X.default.woHash(e.url), { contexters: o } = $e(n, s), a = Et.listByTabId(r.id);
                        Oe.update({ contexters: o, commands: a })
                    } else n({})
                }
            }, notification: {
                allow: { script: !0, extpage: !0 }, exec: function (e, t, n) {
                    const r = e.image ? e.image : H.a.images.brand("tampermonkey");
                    (() => {
                        const n = Object(s.Deferred)()
                        ;
                        return e.highlight && t.tab ? M.highlight(t.tab.id, n.resolve) : n.resolve(), n.promise()
                    })().then(() => {
                        const t = Object(s.Deferred)();
                        return e.text ? M.show(e.title, e.text, r, {
                            timeout: e.timeout,
                            silent: e.silent
                        }, t.resolve) : t.resolve(), t.promise()
                    }).always(e => {
                        n({ clicked: e && e.clicked })
                    })
                }
            }, clipboard: {
                allow: { script: !0, extpage: !0 }, exec: function (e, t, n) {
                    rea.clipboard ? rea.clipboard.set({ mimetype: e.mimetype, content: e.content }, () => {
                        n({ success: !0 })
                    }) : n({ error: "unsupported" })
                }
            }, determineScriptsToRun: {
                allow: {
                    extpage: !0
                }, exec: function (e, t, n) {
                    n({ scripts: ht.determineScriptsToRun(e.url).map(e => e.uuid) })
                }
            }, syntaxCheck: {
                allow: { script: !0, extpage: !0 }, exec: function (e, t, n) {
                    he.a.hint(e.code, it.values.editor_linter_config || void 0).always(e => {
                        n({ errors: e })
                    })
                }
            }, externalMessage: {
                allow: { insecure: !0 }, exec: function (e, t, n) {
                    return r(e.request, t, n)
                }
            }, cookie: {
                allow: { script: !0 }, exec: function (e, t, n) {
                    const r = ["expirationDate", "domain", "httpOnly", "secure", "session", "name", "path", "sameSite", "value"].concat(["url"]),
                        s = r.concat(["hostOnly"]), o = e.url || t.url || null,
                        a = e.details.url ? X.default.sanitize(e.details.url, o) || e.details.url : o,
                        i = t.tab ? t.tab.cookieStoreId : void 0;
                    let A;
                    if (yt.fpi && (A = X.default.parse(o).domain), qe.DB.SECURE || "dhdg" != rea.runtime.short_id) if (a) if (st.isAllowed(X.default.woHash(a))) if (ht.scriptWillRun(e.uuid, a)) if ("list" == e.action) yt.getAll({
                        url: a, domain: e.details.domain,
                        name: e.details.name, path: e.details.path, firstPartyDomain: A ? null : void 0, storeId: i
                    }).done(e => {
                        const t = e.map(e => {
                            const t = {};
                            return s.forEach(n => {
                                t[n] = e[n]
                            }), t
                        });
                        n({ data: { cookies: t } })
                    }); else if ("delete" == e.action) yt.remove({
                        url: a,
                        name: e.details.name,
                        firstPartyDomain: A,
                        storeId: i
                    }).done(() => {
                        n({ data: { success: !0 } })
                    }).fail(e => {
                        n({ data: { error: e } })
                    }); else if ("set" == e.action) {
                        const t = { firstPartyDomain: A, storeId: i }, s = e.details;
                        r.forEach(e => {
                            void 0 !== s[e] && (["value", "name"].includes(e) ? t[e] = String(s[e]) : t[e] = s[e])
                        }), t.url = t.url || a, yt.set(t).done(() => n({ data: { success: !0 } })).fail(e => n({ data: { error: e } }))
                    } else n({ data: { error: "unknown action" } }); else n({ data: { error: "the URL needs to be included by the scripts @include or @match tag" } }); else n({ data: { error: "the URL is filtered by the security settings" } }); else n({ data: { error: "invalid URL" } }); else n({ data: { error: "not supported" } })
                }
            }
        }, t = e => {
            const t = rea.runtime.id, n = !qe.REQUESTS.HAS_SENDER_ID && e.tab || e.id === t;
            let r = null;
            const s = qe.REQUESTS.INTERNAL_PAGE_PROTOCOLS[0], o = s ? s + "//" : null,
                a = qe.REQUESTS.GET_INTERNAL_PAGE_REGEXP(), i = e.url ? e.url : e.tab ? e.tab.url : null;
            let A = n && (!i || !!o && 0 == i.indexOf(o));
            if (A || !o) {
                if (i) {
                    const e = i.match(a);
                    e && 2 == e.length && (r = e[1])
                } else r = "*";
                !o && r && (A = !0)
            }
            return { id_valid: n, url: i, page: r, extpage: A }
        }, n = (r, s, o) => {
            if (!It.late) return It.registerLateCallback(() => {
                n(r, s, o)
            }), !0;
            const a = e[r.method]
            ;
            if (!a) return y.a.warn("mh: unknown method " + r.method), !1;
            if (!a.allow || !a.exec) return y.a.warn("mh: invalid implementation of " + r.method), !1;
            const i = t(s), A = i.extpage, l = i.page, c = i.id_valid;
            A ? s.extpage = l : delete r.origin;
            const u = "options" == l, d = c && !A;
            let p = !0;
            if ("background" == l || a.allow.insecure || a.allow.extpage && A || a.allow.options && u || a.allow.script && d) {
                const e = a.exec(r, s, e => {
                    p = !1, o(e)
                });
                return !1 !== p && !1 !== e || void 0
            }
            return !1 === r.topframe && (A || u) || y.a.warn("mh: this context doesn't have the permission to call \"" + r.method + '"'), !1
        };
        var r = (e, t, n) => {
            let r, s, o, a, i;
            if ("off" == it.values.external_connect || !(r = t.url) || !st.isAllowed(r)) return;
            const A = Object.keys(l.externally_connectable);
            for (let t = 0; t < A.length; t++) if (o = A[t], s = l.externally_connectable[o], (a = ht.regexify({ match: [o] })) && ht.validUrl(r, a) && (s.includes("*") || s.includes(e.method))) {
                i = !0;
                break
            }
            if (i) if ("getVersion" == e.method) n({
                version: rea.extension.manifest.version, id: rea.runtime.short_id
            }); else if ("all" != it.values.external_connect) y.a.warn("mh: calling external method " + e.method + " is not permitted to " + r + " by the user"); else if ("isInstalled" == e.method) {
                let t, r, s, o, a = !1;
                const i = e.script.name, A = e.script.namespace;
                (r = Rt.getUidsByName(i, A)[0]) && (t = Rt.getByUid(r)) && t.script && (a = !0, o = t.script.enabled, s = t.script.version), n({
                    name: i,
                    installed: a,
                    enabled: o,
                    version: s
                })
            } else y.a.warn("mh: unknown external method " + e.method); else y.a.warn("mh: calling external method " + e.method + " is not permitted to " + r)
        }, o = {
            xhr: {
                allow: { script: !0 }, exec: function (e, t, n, r) {
                    let o = !1;
                    const a = qe.RUNTIME.FIREFOX && !t.details.anonymous && (n.tab && n.tab.incognito || yt.fpi);
                    let i;
                    const A = n.tab ? n.tab.cookieStoreId : void 0;
                    a && (t.details.anonymous = !0, yt.fpi && n.url && (i = X.default.parse(n.url).domain || ""));
                    const l = n => {
                        e.disconnect();
                        const r = n.response, s = r ? r.responseHeaders : null;
                        if (a && s) {
                            const e = Y.a.parseHeaders(s)["set-cookie"];
                            if (!e) return;
                            e.split(",").forEach(e => {
                                const n = Y.a.parseCookie(e);
                                if (!n) return;
                                const {
                                    expires: s,
                                    httpOnly: o,
                                    name: a,
                                    path: l,
                                    sameSite: c,
                                    secure: u,
                                    value: d
                                } = n;
                                yt.set({
                                    expirationDate: s ? s.getTime() : void 0,
                                    httpOnly: o,
                                    name: a,
                                    path: l,
                                    sameSite: c,
                                    secure: u,
                                    storeId: A,
                                    url: r.finalUrl || t.details.url,
                                    value: d,
                                    firstPartyDomain: i
                                })
                            })
                        }
                    };
                    t.details.convertBinary = !0, t.details.partialSize = t.details.partialSize || qe.XMLHTTPREQUEST.PARTIAL_SIZE;
                    const c = {};
                    let u
                    ;Object.keys(t.callbacks).forEach(e => {
                        const n = "ondone" === e;
                        (t.callbacks[e] || n || "onload" === e) && (c[e] = t => {
                            t = t || {}, n && t.response && delete t.response.response_data;
                            const s = { data: t.response, exception: t.exception };
                            s[e] = !0, r(s), n && l(t)
                        })
                    }), c.ondone || (c.ondone = l);
                    const d = t.url || n.url || null;
                    t.details.url = X.default.sanitize(t.details.url, d) || t.details.url, qe.RUNTIME.WEBREQUEST_XHR_SUPPORT && "no" != it.values.webrequest_modHeaders && (t.details.headers = t.details.headers || {}, t.details.headers.internal = t.uuid,
                    qe.REQUESTS.SENDS_ORIGIN && !Object.keys(t.details.headers).map(e => e.toLowerCase()).includes("origin") && (t.details.headers.origin = null)), ((t.details.cookie || a) && t.details.url ? yt.getAll({
                        url: t.details.url,
                        storeId: A,
                        firstPartyDomain: i ? null : void 0
                    }).then(e => {
                        const n = e.map(e => e.name + "=" + encodeURIComponent(e.value)).concat([t.details.cookie]).join(";");
                        delete t.details.cookie, t.details.headers = t.details.headers || {}, t.details.headers.cookie = n
                    }) : s.Deferred.Pledge()).then(() => {
                        if (o) return c.onabort && c.onabort(), void c.ondone({});
                        let e;
                        if (t.details.url && (e = X.default.parse(t.details.url).protocol) && ["file:"].concat(qe.REQUESTS.INTERNAL_PAGE_PROTOCOLS).includes(e)) {
                            const n = e => {
                                const n = 'Refused to connect to "' + t.details.url + '": ' + e,
                                    r = Y.a.makeErrorResponse(n);
                                ["onerror", "ondone"].forEach(e => {
                                    c[e] && c[e]({ response: r, exception: n })
                                })
                            };
                            if ("file:" == e) {
                                let e, r
                                ;
                                if (qe.RUNTIME.ALLOWS_FILE_SCHEME_ACCESS && ("all" == it.values.script_file_access ? e = !0 : "externals" != it.values.script_file_access || (r = Rt.getByUid(t.uuid)) && r.script && r.cond && [].concat(r.script.resources).concat(r.script.requires).map(e => X.default.sanitize(e.unsafe_url, e.abs_url)).includes(t.details.url) && (e = !0)), !e) return n("Access to this local file is forbidden!")
                            }
                            rea.file.get(t.details.url, e => {
                                const t = {
                                        response_data: W.default.arrbuf2str(e),
                                        readyState: 4,
                                        responseHeaders: "",
                                        status: 0,
                                        statusText: ""
                                    }
                                ;["onload", "ondone"].forEach(e => {
                                    c[e] && c[e]({ response: t })
                                })
                            }, n)
                        } else u = ct.exec(t.details, t.uuid, n || {}, c)
                    });
                    const p = () => {
                        o || (u ? u.abort() : o = !0)
                    };
                    return e && e.onMessage.addListener(e => {
                        e.cancel && p()
                    }), p
                }
            }, download: {
                allow: { script: !0 }, exec: function (e, t, n, r) {
                    const s = t.details;
                    let o = ge.start(s, {
                        onload: e => {
                            r && r({ load: !0, data: e })
                        }, onprogress: e => {
                            r && r({ progress: !0, data: e })
                        }, onerror: e => {
                            r && r({ error: !0, data: e })
                        }, ontimeout: e => {
                            r && r({ timeout: !0, data: e })
                        }, ondone: () => {
                            e && e.disconnect(), e = null
                        }
                    }, {
                        internal: null === e
                    });
                    return e && void 0 !== o && e.onMessage.addListener(e => {
                        e.cancel && null !== o && (ge.cancel(o), o = null)
                    }), () => {
                        e = null, r = null
                    }
                }
            }, webRequest: {
                allow: { script: !0 }, exec: function (e, t, n, r) {
                    const s = n.tab.id, o = n.frameId;
                    (void 0 !== s && void 0 !== o || !t.uuid) && Zt.scripts.set(s, o, t.uuid, t.rules, e => {
                        r(e)
                    })
                }
            }, addStorageListener: {
                allow: { script: !0 }, exec: function (e, t, n, r) {
                    if (n.tab) return Rt.addStorageListener(n.tab.id, t.id, t.uuid, Date.now(), r), () => {
                        Rt.removeStorageListeners({ uuid: t.uuid, id: t.id }, !1)
                    };
                    r({
                        error: !0
                    })
                }
            }, saveStorageKey: {
                allow: { script: !0 }, exec: function (e, t, n, r) {
                    if (n.tab) {
                        if (t.uuid) {
                            const e = Rt.getStorageByUid(t.uuid), n = t.value, r = t.key;
                            e.data[r] = n, e.ts = t.ts, Rt.setStorageByUid(t.uuid, e), Rt.notifyStorageListeners({ uuid: t.uuid }, { id: t.id }, e => {
                                const s = { data: {}, ts: t.ts }, o = { storage: s };
                                void 0 === n ? o.removed = r : s.data[r] = n, e(o)
                            })
                        }
                    } else y.a.warn("storage: unable to save storage due to empty tabID!");
                    r({})
                }
            }, exportToJson: {
                allow: { extpage: !0 }, exec: function (e, t, n, r) {
                    ht.exportToJson(t.ids, t.options).done(e => {
                        const t = JSON.stringify(e);
                        Object(i.splitSlice)(t, parseInt(qe.XMLHTTPREQUEST.PARTIAL_SIZE)).forEach(e => r({ partial: e })), r({ done: !0 })
                    }).fail(() => {
                        r({ error: !0 })
                    })
                }
            }, openInTab: {
                allow: { script: !0 }, exec: function (e, t, n, r) {
                    let s;
                    const o = ["active"], a = { url: t.details.url };
                    let i = null;
                    if (s = t.details.options) {
                        for (let e = 0; e < o.length; e++) void 0 !== s[o[e]] && (a[o[e]] = s[o[e]]);
                        s.incognito ? a.incognito = !0 : (s.insert && (a.index = n.tab.index + 1), s.setParent ? a.parent = n.tab : a.parent = {
                            windowId: n.tab.windowId
                        })
                    }
                    return rea.tabs.create(a, t => {
                        t && (i = t.id, e && (Je[i] = {
                            onClose: function () {
                                e && r({ closed: !0 })
                            }
                        }, r({ success: !0, tabId: i })))
                    }), e.onMessage.addListener(e => {
                        if (null !== i) if (e.close) rea.tabs.remove(i, () => {
                            const e = rea.runtime.lastError;
                            e ? y.a.warn("tab.close", e.message) : i = null
                        }); else if (void 0 !== e.name) {
                            const t = 5;
                            let n = 0;
                            const s = () => {
                                tt.listeners.once.whenReady(i, () => {
                                    rea.tabs.sendMessage(i, {
                                        method: "setForeignAttr",
                                        attr: "name",
                                        value: e.name
                                    }, { frameId: 0 }, o => {
                                        o ? r({
                                            name: e.name
                                        }) : n++ < t ? window.setTimeout(s, 100 * n) : y.a.warn("foreignAttr: error setting attr")
                                    })
                                })
                            };
                            s()
                        }
                    }), () => {
                        null !== i && delete Je[i], e = null
                    }
                }
            }, registerMenuCommand: {
                allow: { script: !0 }, exec: function (e, t, n, r) {
                    if (n.tab) {
                        const { name: e, uuid: s, accessKey: o, menuId: a } = t, i = n.tab.id;
                        let A;
                        const l = Rt.getByUid(s);
                        return A = l.script && l.cond ? z.a.getTranslation(l.script, "name") : z.a.getMessage("This_script_was_deleted"), Et.add({
                            tabId: i,
                            name: e,
                            uuid: s,
                            accessKey: o,
                            menuId: a,
                            scriptName: A
                        }, r), ft.actionPage("update"), () => {
                            Et.clearById(t.menuId), ft.actionPage("update")
                        }
                    }
                    y.a.warn("Unable to register menu cmd due to empty tabID!"), e.disconnect()
                }
            }, observeUrlChanges: {
                allow: { script: !0 }, exec: function (e, t, n, r) {
                    const s = n.frameId, o = n.tab.id, a = e => {
                        e.tabId == o && e.frameId == s && r({ url: e.url })
                    };
                    return Ft.addListener(o, a), () => {
                        Ft.removeListener(o, a)
                    }
                }
            }, tabWatch: {
                allow: { extpage: !0 }, exec: function (e, t, n, r) {
                    let s;
                    const o = Nt.openAndWatch({ url: t.url, index: (n.tab.index || 0) + 1, parent: n.tab }, t => {
                        t ? (s = s || t.id, r({ tab: t })) : (a(),
                            e.disconnect())
                    });
                    var a = () => {
                        o.cancel()
                    };
                    return a
                }
            }
        };
        const A = e => {
            It.late ? e.onMessage.addListener(n => {
                void 0 !== n.method && ((e, n) => {
                    const r = e.sender, s = o[n.method];
                    if (!s) return y.a.warn("mh: unknown method " + n.method), !1;
                    if (!s.allow || !s.exec) return y.a.warn("mh: invalid implementation of " + n.method), !1;
                    const a = t(r), i = a.extpage, A = a.page, l = "options" == A, c = a.id_valid && !i
                    ;
                    if (!("background" == A || s.allow.insecure || s.allow.extpage && i || s.allow.options && l || s.allow.script && c)) return !1 === n.topframe && (i || l) || y.a.warn("mh: this context doesn't have the permission to call \"" + n.method + '"'), !1;
                    {
                        const t = s.exec(e, n, r, t => {
                            try {
                                e.postMessage(t)
                            } catch (n) {
                                y.a.debug("bg: Error sending port (" + e.name + ") message", t)
                            }
                        });
                        t && e.onDisconnect.addListener(t)
                    }
                })(e, n)
            }) : It.registerLateCallback(() => {
                A(e)
            })
        };
        var l = {
            init: function () {
                l.externally_connectable_reg = ht.regexify({
                    match: Object.keys(l.externally_connectable)
                }), rea.extension.onMessage.addListener(n), rea.extension.onConnect.addListener(A), rea.extension.onConnectExternal.addListener(e => {
                    e.disconnect()
                })
            },
            externally_connectable: {
                "*://www.tampermonkey.net/*": ["getVersion"],
                "https://greasyfork.org/*": ["*"],
                "https://userstyles.org/*": ["*"],
                "*://*.userscript.zone/*": ["*"]
            }
        };
        return l
    })(), yt = (() => {
        const e = (e, t) => (qe.RUNTIME.FPI ? void 0 !== t && (e.firstPartyDomain = e.firstPartyDomain || t) : delete e.firstPartyDomain, e);
        let t
        ;const n = {
                getAll: function (t) {
                    const n = Object(s.Deferred)();
                    return rea.cookies.getAll(e(t, null), n.resolve), n.promise()
                }, remove: function (t) {
                    const n = Object(s.Deferred)();
                    return rea.cookies.remove(e(t), e => {
                        if (e) n.resolve(); else {
                            const e = rea.runtime.lastError;
                            n.reject(e ? e.message : "unknown error")
                        }
                    }), n.promise()
                }, set: function (t) {
                    const n = Object(s.Deferred)();
                    return rea.cookies.set(e(t), e => {
                        if (e) n.resolve(); else {
                            const e = rea.runtime.lastError;
                            n.reject(e ? e.message : "unknown error")
                        }
                    }), n.promise()
                }
            }
        ;
        return Object.defineProperties(n, { fpi: { get: () => t } }), qe.RUNTIME.FPI && rea.cookies.remove({
            url: "https://www.tampermonkey.net",
            name: "doesnotexist"
        }, () => {
            rea.runtime.lastError && (t = !0)
        }), n
    })(), Et = (() => {
        let e = [];
        return {
            add: function ({ tabId: t, name: n, uuid: r, accessKey: s, menuId: o, scriptName: a }, i) {
                e.push({ tabId: t, name: n, uuid: r, accessKey: s, menuId: o, scriptName: a, response: i })
            }, list: function () {
                return e
            }, listByTabId: function (t) {
                const n = {};
                return e.filter(e => {
                    const r = e.uuid + e.name
                    ;
                    return e.tabId == t && !n[r] && (n[r] = !0)
                })
            }, clearByTabId: function (t) {
                e = e.filter(e => e.tabId != t)
            }, getByTabId: function (t) {
                return e.filter(e => e.tabId == t)[0]
            }, clearById: function (t) {
                e = e.filter(e => e.menuId != t)
            }, getById: function (t) {
                return e.filter(e => e.menuId == t)[0]
            }
        }
    })();
    const xt = function () {
        let e, t, n, r, s, o, a, i, A, l, c, u, d, p, f, m, g, h = null;
        e = { id: "general", name: z.a.getMessage("General"), sub_menu_item: !0, items: [] }, e.items.push({
            name: z.a.getMessage("Config_Mode"),
            id: "configMode",
            level: 0,
            option: !0,
            select: [{
                name: z.a.getMessage("Novice"), value: 0
            }, { name: z.a.getMessage("Beginner"), value: 50 }, { name: z.a.getMessage("Advanced"), value: 100 }],
            value: it.values.configMode,
            desc: z.a.getMessage("Changes_the_number_of_visible_config_options")
        }), e.items.push({
            name: z.a.getMessage("Language"),
            id: "i18n",
            level: 0,
            option: !0,
            reload: !0,
            warning: z.a.getMessage("A_reload_is_required"),
            select: [{ name: "Browser Default", value: null }].concat(z.a.supported),
            value: it.values.i18n,
            validation: {
                image: "info",
                opacity: .9,
                msg: z.a.getMessage("Your_language_is_not_supported__Click_here_to_get_intructions_how_to_translate_TM_"),
                url: "https://www.tampermonkey.net/faq.php#Q500"
            }
        }), e.items.push({
            name: z.a.getMessage("Auto_reload_on_script_enabled"),
            level: 20,
            id: "autoReload",
            option: !0,
            checkbox: !0,
            enabled: it.values.autoReload,
            desc: z.a.getMessage("Auto_reload_on_script_enabled_desc")
        }), e.items.push({
            name: z.a.getMessage("Anonymous_statistics"),
            level: 0,
            id: "statistics_enabled",
            option: !0,
            checkbox: !0,
            enabled: !!it.values.statistics_enabled,
            validation: {
                image: "info",
                opacity: .9,
                msg: z.a.getMessage("Allow_Tampermonkey_to_collect_anonymous_statistics_via_Google_Analytics"),
                url: "https://www.tampermonkey.net/privacy.php#extension"
            }
        }), e.items.push({
            name: z.a.getMessage("Debug_scripts"),
            level: 100,
            id: "debug",
            option: !0,
            checkbox: !0,
            enabled: it.values.debug,
            desc: ""
        }), e.items.push({
            name: z.a.getMessage("Show_fixed_source"),
            level: 100,
            id: "showFixedSrc",
            option: !0,
            checkbox: !0,
            enabled: it.values.showFixedSrc,
            desc: ""
        }), e.items.push({
            name: z.a.getMessage("LogLevel"),
            id: "logLevel",
            level: 0,
            option: !0,
            select: [].concat(qe.RUNTIME.SAFARI ? [{
                name: z.a.getMessage("Verbose"),
                value: 90
            }] : []).concat([{ name: z.a.getMessage("Debug"), value: 80 }, {
                name: z.a.getMessage("Info"),
                value: 60
            }, { name: z.a.getMessage("Warning"), value: 30 }, { name: z.a.getMessage("Error"), value: 0 }]),
            value: it.values.logLevel,
            desc: ""
        }), f = {
            id: "script_sync",
            name: z.a.getMessage("Script_Sync"),
            sub_menu_item: !0,
            level: 50,
            need_save: !0,
            items: []
        }, f.items.push({
            name: z.a.getMessage("Enable_Script_Sync"),
            id: "sync_enabled",
            level: 50,
            option: !0,
            checkbox: !0,
            enabled: it.values.sync_enabled,
            desc: z.a.getMessage("Synchronize_your_scripts_across_browsers_and_operation_systems")
        });
        const R = (() => {
            const e = [], t = { reset_sync: !0, cloud_url: !1, cloud_user: !1, cloud_pass: !1 };
            return rea.storage.sync.supported && e.push({
                name: z.a.getMessage("Browser_Sync"),
                value: Lt.types.eCHROMESYNC,
                enable: t
            }), e.push({ name: z.a.getMessage("Google_Drive"), value: Lt.types.eGDRIVE, enable: t }),
                qe.RUNTIME.CHROME && qe.RUNTIME.BROWSER_VERSION < 37 || qe.RUNTIME.SAFARI && qe.RUNTIME.BROWSER_VERSION < 8 || qe.RUNTIME.DOLPHIN ? y.a.info("Script Sync: no Dropbox support due to missing SHA-256 capabilities") : e.push({
                    name: z.a.getMessage("Dropbox"),
                    value: Lt.types.eDROPBOX,
                    enable: t
                }), e.push({
                name: z.a.getMessage("OneDrive"),
                value: Lt.types.eONEDRIVE,
                enable: t
            }), qe.RUNTIME.SAFARI || (e.push({
                name: z.a.getMessage("Yandex_Disk"),
                value: Lt.types.eYANDEX,
                enable: t
            }), e.push({
                name: z.a.getMessage("WebDAV"),
                value: Lt.types.eWEBDAV, enable: { reset_sync: !0, cloud_url: !0, cloud_user: !0, cloud_pass: !0 }
            })), e
        })();
        if (f.items.push({
            name: z.a.getMessage("Sync_Type"),
            id: "sync_type",
            enabler: !0,
            level: 50,
            option: !0,
            select: R,
            value: it.values.sync_type
        }), f.items.push({
            name: z.a.getMessage("URL"),
            id: "cloud_url",
            enabledBy: "sync_type",
            level: 50,
            option: !0,
            text: !0,
            width: 2,
            value: it.values.cloud_url
        }), f.items.push({
            name: z.a.getMessage("Login"),
            id: "cloud_user",
            enabledBy: "sync_type",
            level: 50,
            option: !0,
            text: !0,
            width: 2,
            value: it.values.cloud_user
        }), f.items.push({
            name: z.a.getMessage("Password"),
            id: "cloud_pass",
            enabledBy: "sync_type",
            level: 50,
            option: !0,
            text: !0,
            password: !0,
            width: 2,
            value: it.values.cloud_pass
        }), f.items.push({
            name: z.a.getMessage("Sync_Reset"),
            id: "reset_sync",
            enabledBy: "sync_type",
            level: 80,
            button: !0,
            reload: !0,
            value: 0,
            warning: z.a.getMessage("This_will_remove_all_remote_data_from_sync_Ok_")
        }), a = {
            id: "appearance", name: z.a.getMessage("Appearance"), sub_menu_item: !0, need_save: !0, items: [],
            warning: z.a.getMessage("A_reload_is_required"), reload: !0
        }, a.items.push({
            name: z.a.getMessage("Layout"),
            id: "layout",
            level: 0,
            option: !0,
            select: H.a.getLayouts(),
            value: it.values.layout,
            desc: ""
        }), a.items.push({
            name: z.a.getMessage("Custom_CSS"),
            id: "layout_user_css",
            level: 100,
            option: !0,
            input: !0,
            value: it.values.layout_user_css,
            desc: z.a.getMessage("You_can_add_your_custom_CSS_rules_here_")
        }), h = {}, "off" == it.values.notification_showUpdate && (h = {
            image: "critical",
            msg: z.a.getMessage("Are_you_sure_that_you_don_t_want_to_be_notified_of_updates_")
        }), a.items.push({
            name: z.a.getMessage("Update_Notification"),
            id: "notification_showUpdate",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Disabled"), value: "off" }, {
                name: z.a.getMessage("Show_notification"),
                value: "notification"
            }, { name: z.a.getMessage("Open_changelog"), value: "changelog" }],
            value: it.values.notification_showUpdate,
            validation: h
        }), a.items.push({
            name: z.a.getMessage("Favicon_Service"),
            id: "favicon_service",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Google"), value: "google" }, {
                name: z.a.getMessage("DuckDuckGo"),
                value: "duckduckgo"
            }, {
                name: z.a.getMessage("Native"),
                value: "native",
                warning: z.a.getMessage("Warning_unsafe_site_warnings_might_appear_")
            }],
            value: it.values.favicon_service
        }), i = {
            id: "action_menu",
            name: z.a.getMessage("Action_Menu"),
            sub_menu_item: !0,
            need_save: !0,
            items: [],
            level: 50
        }, i.items.push({
            name: z.a.getMessage("Hide_disabled_scripts"), id: "action_menu_scripts_hide_disabled", level: 100,
            option: !0, checkbox: !0, enabled: it.values.action_menu_scripts_hide_disabled, desc: ""
        }), i.items.push({
            name: z.a.getMessage("Columns"),
            id: "action_menu_columns",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("1"), value: "1" }, {
                name: z.a.getMessage("2"),
                value: "2"
            }, { name: z.a.getMessage("3"), value: "3" }],
            value: it.values.action_menu_columns
        }), i.items.push({
            name: z.a.getMessage("Script_order"),
            id: "action_menu_scripts_sort",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Auto"), value: "auto" }, {
                name: z.a.getMessage("Position_"), value: "position"
            }, { name: z.a.getMessage("Name"), value: "name" }, { name: z.a.getMessage("Enabled"), value: "enabled" }],
            value: it.values.action_menu_scripts_sort
        }), i.items.push({
            name: z.a.getMessage("Icon_badge_info"),
            id: "appearance_badges",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Disabled"), value: "off" }, {
                name: z.a.getMessage("Running_scripts"),
                value: "running"
            }, { name: z.a.getMessage("Unique_running_scripts"), value: "running_unique" }, {
                name: z.a.getMessage("Disabled_scripts"), value: "disabled"
            }],
            value: it.values.appearance_badges
        }), (qe.RUNTIME.CHROME || qe.RUNTIME.FIREFOX) && i.items.push({
            name: z.a.getMessage("Icon_badge_color"),
            id: "appearance_badge_color",
            level: 100,
            color: !0,
            value: it.values.appearance_badge_color
        }), qe.RUNTIME.FIREFOX && i.items.push({
            name: z.a.getMessage("Icon_badge_text_color"),
            id: "appearance_badge_text_color",
            level: 100,
            color: !0,
            value: it.values.appearance_badge_text_color
        }), it.values.userscript_search_url && (r = {
            id: "userscript_search",
            name: z.a.getMessage("Userscript_Search"),
            sub_menu_item: !0,
            level: 0,
            items: [],
            reload: !0
        }, r.items.push({
            name: z.a.getMessage("Userscript_search_integration_mode"),
            id: "userscript_search_mode",
            level: 0,
            option: !0,
            select: [{ name: z.a.getMessage("Disabled"), value: "off" }, {
                name: z.a.getMessage("On_Click"),
                value: "click"
            }, {
                name: z.a.getMessage("On_Action_Menu"),
                value: "action_menu"
            }, { name: z.a.getMessage("Add_to_icon_badge_text"), value: "badge" }],
            value: it.values.userscript_search_mode,
            validation: {
                image: "info",
                opacity: .9,
                msg: z.a.getMessage("In_order_to_search_for_userscripts__0on_action_menu0__and__0icon_badge_number0__automatically_transfer_the_tab_s_url_to_the_search_website__0on_click0_opens_the_search_page_on_click_Please_click_at_this_icon_to_open_the_privacy_policy_", z.a.getMessage("Add_to_icon_badge_text"), z.a.getMessage("On_Action_Menu"), z.a.getMessage("On_Click")),
                url: Qe()
            }
        })), n = {
            id: "editor", name: z.a.getMessage("Editor"), sub_menu_item: !0, level: 20, need_save: !0,
            items: [], warning: z.a.getMessage("A_reload_is_required"), reload: !0
        }, n.items.push({
            name: z.a.getMessage("Enable_Editor"),
            id: "editor_enabled",
            level: 100,
            option: !0,
            checkbox: !0,
            enabled: it.values.editor_enabled,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("Theme"),
            id: "editor_theme",
            level: 50,
            option: !0,
            select: H.a.getEditorThemes(),
            value: it.values.editor_theme
        }), n.items.push({
            name: z.a.getMessage("Font_Size"),
            id: "editor_fontSize",
            level: 50,
            option: !0,
            select: [{ name: "50%", value: 50 }, { name: "70%", value: 70 }, {
                name: "80%", value: 80
            }, { name: "90%", value: 90 }, { name: "100%", value: 100 }, { name: "110%", value: 110 }, {
                name: "120%",
                value: 120
            }, { name: "150%", value: 150 }],
            value: it.values.editor_fontSize
        }), n.items.push({
            name: z.a.getMessage("Key_Mapping"),
            id: "editor_keyMap",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Windows"), value: "windows" }, {
                name: z.a.getMessage("Sublime"),
                value: "sublime"
            }, { name: z.a.getMessage("Emacs"), value: "emacs" }, { name: z.a.getMessage("Vim"), value: "vim" }],
            value: it.values.editor_keyMap
        }), n.items.push({
            name: z.a.getMessage("Indentation_Width"),
            id: "editor_indentUnit",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("1"), value: 1 }, {
                name: z.a.getMessage("2"),
                value: 2
            }, { name: z.a.getMessage("3"), value: 3 }, {
                name: z.a.getMessage("4"),
                value: 4
            }, { name: z.a.getMessage("5"), value: 5 }, {
                name: z.a.getMessage("6"),
                value: 6
            }, { name: z.a.getMessage("7"), value: 7 }, {
                name: z.a.getMessage("8"),
                value: 8
            }, { name: z.a.getMessage("9"), value: 9 }, {
                name: z.a.getMessage("10"),
                value: 10
            }, { name: z.a.getMessage("11"), value: 11 }],
            value: it.values.editor_indentUnit,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("Tab_Size"),
            id: "editor_tabSize",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("1"), value: 1 }, {
                name: z.a.getMessage("2"),
                value: 2
            }, { name: z.a.getMessage("3"), value: 3 }, {
                name: z.a.getMessage("4"),
                value: 4
            }, { name: z.a.getMessage("5"), value: 5 }, {
                name: z.a.getMessage("6"),
                value: 6
            }, { name: z.a.getMessage("7"), value: 7 }, {
                name: z.a.getMessage("8"),
                value: 8
            }, { name: z.a.getMessage("9"), value: 9 }, { name: z.a.getMessage("10"), value: 10 }, {
                name: z.a.getMessage("11"), value: 11
            }],
            value: it.values.editor_tabSize,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("Indent_with"),
            id: "editor_indentWithTabs",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Tabs"), value: "tabs" }, {
                name: z.a.getMessage("Spaces"),
                value: "spaces"
            }],
            value: it.values.editor_indentWithTabs,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("TabMode"),
            id: "editor_tabMode",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Classic"), value: "classic" }, {
                name: z.a.getMessage("Smart"),
                value: "smart"
            }, { name: z.a.getMessage("Indent"), value: "indent" }],
            value: it.values.editor_tabMode,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("Line_break"),
            id: "editor_lineWrapping",
            level: 50,
            option: !0,
            checkbox: !0,
            enabled: it.values.editor_lineWrapping,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("Reindent_on_typing"),
            id: "editor_electricChars",
            level: 50,
            option: !0,
            checkbox: !0,
            enabled: it.values.editor_electricChars,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("Enable_autoSave"), id: "editor_autoSave",
            level: 20, option: !0, checkbox: !0, enabled: it.values.editor_autoSave, desc: ""
        }), n.items.push({
            name: z.a.getMessage("Enable_easySave"),
            id: "editor_easySave",
            level: 20,
            option: !0,
            checkbox: !0,
            enabled: it.values.editor_easySave,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("Highlight_trailing_whitespace"),
            id: "editor_highlightTrailingWhitespace",
            level: 50,
            option: !0,
            checkbox: !0,
            enabled: it.values.editor_highlightTrailingWhitespace,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("Trim_trailing_whitespace_from_modified_lines"),
            id: "editor_trimTrailingSpacesFromModifiedLines",
            level: 50,
            option: !0,
            checkbox: !0,
            enabled: it.values.editor_trimTrailingSpacesFromModifiedLines,
            desc: ""
        }), n.items.push({
            name: z.a.getMessage("Auto_syntax_check_on_typing"),
            id: "editor_autoLint",
            level: 50,
            option: !0,
            checkbox: !0,
            enabled: it.values.editor_autoLint,
            desc: z.a.getMessage("Enable_this_option_to_automatically_check_the_code_on_typing_")
        }), n.items.push({
            name: z.a.getMessage("Auto_syntax_check_max_length"),
            id: "editor_autoLintMaxLen",
            level: 50,
            option: !0,
            text: !0,
            value: it.values.editor_autoLintMaxLen,
            desc: z.a.getMessage("Check_only_scripts_up_to_this_size_automatically_")
        }), n.items.push({
            name: z.a.getMessage("Custom_Linter_Config"),
            id: "editor_linter_config",
            level: 100,
            option: !0,
            input: !0,
            json: !0,
            value: it.values.editor_linter_config,
            validation: {
                image: "info", opacity: .9, msg: z.a.getMessage("You_can_add_your_custom_linter_config_here_"),
                url: "https://eslint.org/docs/user-guide/configuring"
            }
        }), o = {
            id: "script_update",
            name: z.a.getMessage("Script_Update"),
            sub_menu_item: !0,
            level: 0,
            items: []
        }, o.items.push({
            name: z.a.getMessage("Check_disabled_scripts"),
            id: "scriptUpdateCheckDisabled",
            level: 0,
            option: !0,
            checkbox: !0,
            enabled: it.values.scriptUpdateCheckDisabled,
            desc: ""
        }), o.items.push({
            name: z.a.getMessage("Dont_ask_me_for_simple_script_updates"),
            id: "notification_silentScriptUpdate",
            level: 80,
            option: !0,
            checkbox: !0,
            enabled: it.values.notification_silentScriptUpdate,
            desc: ""
        }), o.items.push({
            name: z.a.getMessage("Check_interval"),
            id: "scriptUpdateCheckPeriod",
            level: 0,
            option: !0,
            select: [{ name: z.a.getMessage("Never"), value: 0 }, {
                name: z.a.getMessage("Every_6_Hours"),
                value: 216e5
            }, { name: z.a.getMessage("Every_12_Hour"), value: 432e5 }, {
                name: z.a.getMessage("Every_Day"),
                value: 864e5
            }, { name: z.a.getMessage("Every_Week"), value: 6048e5 }],
            value: it.values.scriptUpdateCheckPeriod,
            desc: ""
        }), o.items.push({
            name: z.a.getMessage("Hide_notification_after"),
            id: "scriptUpdateHideNotificationAfter",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Never"), value: 0 }, {
                name: z.a.getMessage("15_Seconds"),
                value: 15e3
            }, { name: z.a.getMessage("30_Seconds"), value: 3e4 }, {
                name: z.a.getMessage("1_Minute"),
                value: 6e4
            }, { name: z.a.getMessage("5_Minutes"), value: 3e5 }, { name: z.a.getMessage("1_Hour"), value: 36e5 }],
            value: it.values.scriptUpdateHideNotificationAfter,
            desc: ""
        }), s = {
            id: "externals", name: z.a.getMessage("Externals"),
            sub_menu_item: !0, level: 0, items: []
        }, s.items.push({
            name: z.a.getMessage("Update_interval"),
            id: "external_update_interval",
            level: 0,
            option: !0,
            select: [{ name: z.a.getMessage("Always"), value: 1 }, {
                name: z.a.getMessage("Every_Day"),
                value: 864e5
            }, { name: z.a.getMessage("Every_Week"), value: 6048e5 }, {
                name: z.a.getMessage("Every_Month"),
                value: 2592e6
            }, { name: z.a.getMessage("Never"), value: 0 }],
            value: it.values.external_update_interval,
            desc: ""
        }), A = {
            id: "security", name: z.a.getMessage("Security"), sub_menu_item: !0, need_save: !0,
            level: 50, items: []
        }, qe.OPTIONS.HAS_CSP && (A.items.push({
            name: z.a.getMessage("Add_TM_to_CSP"),
            id: "webrequest_fixCSP",
            level: 80,
            option: !0,
            select: [{
                name: z.a.getMessage("Remove__possibly_unsecure_"),
                value: "remove"
            }, { name: z.a.getMessage("Yes"), value: "yes" }, { name: z.a.getMessage("No"), value: "no" }],
            value: it.values.webrequest_fixCSP,
            desc: z.a.getMessage("Tampermonkey_might_not_be_able_to_provide_access_to_the_unsafe_context_when_this_is_disabled")
        }), A.items.push({
            name: z.a.getMessage("Allow_headers_to_be_modified_by_scripts"),
            id: "webrequest_modHeaders",
            level: 80,
            option: !0,
            reload: !0,
            select: [{ name: z.a.getMessage("Yes"), value: "yes" }, {
                name: z.a.getMessage("Auto"),
                value: "auto"
            }, { name: z.a.getMessage("No"), value: "no" }],
            value: it.values.webrequest_modHeaders,
            warning: z.a.getMessage("Tampermonkey_needs_to_be_restarted_to_make_this_change_apply_Do_you_want_to_continue_"),
            desc: ""
        })), qe.RUNTIME.ALLOWS_FILE_SCHEME_ACCESS && A.items.push({
            name: z.a.getMessage("Script_local_files_access"),
            id: "script_file_access",
            level: 80,
            option: !0,
            select: [{
                name: z.a.getMessage("All_local_files"),
                value: "all"
            }, { name: z.a.getMessage("require_and_resource"), value: "externals" }, {
                name: z.a.getMessage("Disabled"),
                value: "off"
            }],
            value: it.values.script_file_access
        }), A.items.push({
            name: z.a.getMessage("Allow_communication_with_cooperate_pages"),
            id: "external_connect",
            level: 80,
            option: !0,
            reload: !0,
            select: [{
                name: z.a.getMessage("Tampermonkey_and_script_version"),
                value: "all"
            }, { name: z.a.getMessage("Tampermonkey_version"), value: "version" }, {
                name: z.a.getMessage("Disabled"),
                value: "off"
            }],
            value: it.values.external_connect,
            desc: z.a.getMessage("This_option_allows_the_Tampermonkey_homepage_and_some_script_hosting_pages_to_determine_the_Tampermonkey_version_and_whether_a_script_is_installed_")
        }), A.items.push({
            name: z.a.getMessage("Subresource_Integrity"),
            id: "require_sri_mode",
            level: 80,
            option: !0,
            select: [{ name: z.a.getMessage("Disabled"), value: "ignore" }, {
                name: z.a.getMessage("Validate_if_supported"), value: "supported"
            }, { name: z.a.getMessage("Validate_if_given"), value: "given" }, {
                name: z.a.getMessage("Enforce"),
                value: "enforce"
            }],
            value: it.values.require_sri_mode,
            desc: z.a.getMessage("Script_authors_can_secure_external_resources_by_adding_a_SRI_hash_to_the_URL_")
        }), A.items.push({
            name: z.a.getMessage("connect_mode"),
            id: "connect_mode",
            level: 50,
            option: !0,
            select: (it.values.configMode >= 80 || ["off", "casual"].includes(it.values.connect_mode) ? [{
                name: z.a.getMessage("Disabled"), value: "off"
            }, {
                name: z.a.getMessage("Casual"),
                value: "casual"
            }] : []).concat([{ name: z.a.getMessage("Ask_if_unknown"), value: "ask" }, {
                name: z.a.getMessage("Strict"),
                value: "strict"
            }, { name: z.a.getMessage("Always_ask"), value: "paranoid" }]),
            value: it.values.connect_mode,
            desc: ""
        }), qe.RUNTIME.INCOGNITO_MODE && !rea.extension.inIncognitoContext && (h = "temporary" == it.values.incognito_mode ? {} : {
            image: "critical",
            msg: "Permanent mode is still a BETA feature!"
        }, A.items.push({
            name: z.a.getMessage("Store_data_in_incognito_mode"),
            id: "incognito_mode",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Temporary"), value: "temporary" }, {
                name: z.a.getMessage("Permanent"),
                value: "permanent"
            }],
            value: it.values.incognito_mode,
            validation: h
        })), A.items.push({
            name: z.a.getMessage("Page_Filter_Mode"),
            id: "page_filter_mode",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Disabled"), value: "off" }, {
                name: z.a.getMessage("Blacklist"),
                value: "black"
            }, {
                name: z.a.getMessage("Whitelist"), value: "white"
            }, { name: z.a.getMessage("Both"), value: "black+white" }],
            value: it.values.page_filter_mode,
            desc: ""
        }), A.items.push({
            name: z.a.getMessage("Whitelisted_Pages"),
            id: "page_whitelist",
            level: 50,
            option: !0,
            input: !0,
            array: !0,
            value: it.values.page_whitelist,
            desc: ""
        }), A.items.push({
            name: z.a.getMessage("Blacklisted_Pages"),
            id: "forbiddenPages",
            level: 50,
            option: !0,
            input: !0,
            array: !0,
            value: it.values.forbiddenPages,
            desc: ""
        }), l = {
            id: "blackcheck", name: z.a.getMessage("BlackCheck"), sub_menu_item: !0, need_save: !0, level: 50,
            items: []
        }, l.items.push({
            name: z.a.getMessage("Script_Blacklist_Source"),
            id: "script_blacklist_type",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("Disabled"), value: "off" }, {
                name: z.a.getMessage("Server_And_Manual"),
                value: "server"
            }, { name: z.a.getMessage("Only_Manual"), value: "only_manual" }],
            value: it.values.script_blacklist_type
        }), l.items.push({
            name: z.a.getMessage("Blacklist_Severity"),
            id: "script_blacklist_severity",
            level: 50,
            option: !0,
            select: [{ name: z.a.getMessage("severity_1"), value: 1 }, {
                name: z.a.getMessage("severity_2"), value: 2
            }, { name: z.a.getMessage("severity_3"), value: 3 }, {
                name: z.a.getMessage("severity_4"),
                value: 4
            }, { name: z.a.getMessage("severity_5"), value: 5 }, {
                name: z.a.getMessage("severity_6"),
                value: 6
            }, { name: z.a.getMessage("severity_7"), value: 7 }, {
                name: z.a.getMessage("severity_8"),
                value: 8
            }, { name: z.a.getMessage("severity_9"), value: 9 }, {
                name: z.a.getMessage("severity_10"),
                value: ot.SEVERITY_MAX
            }],
            value: it.values.script_blacklist_severity
        }), l.items.push({
            name: z.a.getMessage("Manual_Script_Blacklist"),
            id: "require_blacklist",
            level: 50,
            option: !0,
            input: !0,
            array: !0,
            value: it.values.require_blacklist,
            desc: ""
        }), qe.OPTIONS.CAN_DOWNLOAD) {
            let e = !1;
            h = {}, ["exe", "sh", "crx", "com", "bat", "scr"].map(e => "name." + e).forEach(t => {
                e |= ge.is_whitelisted(t)
            }), e && (h = {
                image: "critical",
                msg: z.a.getMessage("Your_whitelist_seems_to_include_executable_files_This_means_your_userscripts_may_download_malware_or_spyware_to_your_harddisk_")
            }), g = {
                id: "downloads",
                name: z.a.getMessage("Downloads") + " BETA", sub_menu_item: !0, need_save: !0, level: 50, items: []
            }, g.items.push({
                name: z.a.getMessage("Download_Mode"),
                id: "downloads_mode",
                level: 50,
                option: !0,
                select: [{
                    name: z.a.getMessage("Default"),
                    value: ge.staticVars.DEFAULT
                }, { name: z.a.getMessage("Disabled"), value: ge.staticVars.OFF }, {
                    name: z.a.getMessage("Native"),
                    value: ge.staticVars.NATIVE
                }, {
                    name: z.a.getMessage("Browser_API"),
                    value: rea.downloads.supported ? ge.staticVars.CHROME : null
                }].filter(e => e.value),
                value: it.values.downloads_mode,
                desc: z.a.getMessage("The_Browser_API_mode_requires_a_special_permission_")
            }), g.items.push({
                name: z.a.getMessage("Whitelisted_File_Extensions"),
                id: "downloads_extension_whitelist",
                level: 50,
                option: !0,
                input: !0,
                array: !0,
                value: it.values.downloads_extension_whitelist,
                desc: z.a.getMessage("Only_files_with_these_extensions_can_be_saved_to_the_harddisk_Be_careful_to_not_allow_file_extensions_that_represent_executables_at_your_operating_system_"),
                validation: h
            })
        }
        return p = {
            id: "experimental", name: z.a.getMessage("Experimental"), sub_menu_item: !0, level: 80, items: []
        }, qe.RUNTIME.FAST_EXEC_SUPPORT && p.items.push({
            name: z.a.getMessage("Inject_Mode"),
            id: "runtime_inject_mode",
            level: 80,
            option: !0,
            select: [{ name: z.a.getMessage("Default"), value: "default" }, {
                name: z.a.getMessage("Instant"),
                value: "instant"
            }, { name: z.a.getMessage("Normal"), value: "normal" }],
            value: it.values.runtime_inject_mode
        }), p.items.push({
            name: z.a.getMessage("strict_mode"), id: "runtime_strict_mode", level: 80, option: !0,
            select: [{ name: z.a.getMessage("Default"), value: "byscript" }, {
                name: z.a.getMessage("Always"),
                value: "on"
            }, { name: z.a.getMessage("Disabled"), value: "off" }], value: it.values.runtime_strict_mode
        }), rea.webRequest.filterResponseData && qe.OPTIONS.HAS_CSP && p.items.push({
            name: z.a.getMessage("Add_Tampermonkey_to_the_site_s_content_csp"),
            id: "webrequest_fixContentCSP",
            level: 80,
            option: !0,
            select: [{ name: z.a.getMessage("Yes"), value: "yes" }, { name: z.a.getMessage("No"), value: "no" }],
            value: it.values.webrequest_fixContentCSP,
            warning: "Warning: enabling this option is may break pages!"
        }), d = {
            id: "userscripts",
            name: z.a.getMessage("Userscripts"),
            sub_menu_item: !0,
            need_save: !0,
            level: 80,
            items: []
        }, d.items.push({
            name: z.a.getMessage("Script_URL_detection"),
            id: "scriptUrlDetection",
            level: 80,
            option: !0,
            select: [{ name: z.a.getMessage("Auto"), value: "auto" }, {
                name: z.a.getMessage("Disabled"),
                value: "manual"
            }],
            value: it.values.scriptUrlDetection
        }), d.items.push({
            name: z.a.getMessage("New_script_template_"), id: "script_templates", level: 80,
            option: !0, input: !0, array: !0, named: !0, value: it.values.script_templates
        }), m = {
            id: "reset",
            name: z.a.getMessage("Reset_Section"),
            sub_menu_item: !0,
            level: 50,
            items: []
        }, m.items.push({
            name: z.a.getMessage("Restart_Tampermonkey"),
            id: "reset_simple",
            level: 50,
            button: !0,
            reload: !0,
            value: 0,
            warning: z.a.getMessage("This_will_restart_Tampermonkey_Ok_")
        }), m.items.push({
            name: z.a.getMessage("Factory_Reset"), id: "reset_factory", level: 80, button: !0, reload: !0, value: 0,
            warning: z.a.getMessage("This_will_remove_all_scripts_and_reset_all_settings_Ok_")
        }), Xe && m.items.push({
            name: "Install Tests",
            id: "install_tests",
            level: 80,
            button: !0,
            reload: !1,
            ignore: !0,
            value: 0,
            warning: "This will install a lot of test scripts!"
        }), [e, a, i, r, o, s, c, f, t, u, n, A, l, g, d, p, m].filter(e => !!e)
    };
    var Tt = {
        create: (e, t) => {
            e = e || "", t = t || {};
            const n = e => s.Deferred.onebyone(e).fail(() => {
                y.a.warn("tree: wait failed!")
            }).then(e => e.reduce((e, t) => e.concat(t), []).filter(e => e)), r = (e, n) => {
                const r = e.replace(/\.$/, "").split(".");
                let a = o;
                for (; r.length;) {
                    const o = r.shift();
                    if (!a[o]) return y.a.warn("tree: unable to find", e, t), () => s.Deferred.Pledge([]);
                    if ("function" == typeof a[o]) return () => a[o](t, !n);
                    a = a[o], r.length || r.unshift("root")
                }
                return y.a.warn("tree: unable to find", e, t), () => s.Deferred.Pledge([])
            };
            var o = {
                actions: {
                    root: function (e) {
                        const o = Object(s.Deferred)();
                        return rea.tabs.getSelected(null, s => {
                            s && s.id >= 0 ? t.tab = s : e.tabId && (t.tab = { id: e.tabId, url: null })
                            ;const a = n([r("actions.general"), r("actions.scripts"), r("actions.commands")]);
                            o.consume(a)
                        }), o.promise()
                    }, general: function () {
                        const e = t.tab, n = e ? e.url : null,
                            r = n && n.length > 4 && "" == n.substr(0, 4).replace(/file|http/, "") ? n : "", o = [],
                            a = {
                                name: "enabled",
                                id: "enabled",
                                sub_menu_item: !0,
                                pos: "top",
                                items: [],
                                tabId: e ? e.id : null
                            };
                        let i;
                        a.items.push({
                            name: z.a.getMessage("Enabled"),
                            display: it.values.enabled ? null : "greyed",
                            id: "enabled",
                            button: !0,
                            reload: !0,
                            enabler: !0
                        }), a.items = a.items.concat(ft.actionStatus().map(e => ({
                            options: e, globalhint: !0
                        }))), o.push(a), !rt(n, !0) || (i = rt(n)) && "manual" != it.values.scriptUrlDetection || a.items.push({
                            name: i ? z.a.getMessage("Install_this_script") : z.a.getMessage("Try_to_install_as_script"),
                            image: "script_download",
                            id: "installFromUrl",
                            data: n,
                            button: !0,
                            reload: !0
                        });
                        const A = { name: "about", id: "about", sub_menu_item: !0, pos: "bottom", items: [] };
                        A.items.push({
                            name: z.a.getMessage("Dashboard"),
                            image: "utilities",
                            url: rea.extension.getURL("options.html") + "#" + ["url=" + W.default.Base64.encode(r), "nav=dashboard"].join("&"),
                            newtab: !0
                        });
                        const l = "version=" + rea.extension.manifest.version + "&ext=" + rea.runtime.short_id;
                        return A.items.push({
                            image: "about",
                            id: "about",
                            urls: [{
                                name: " " + z.a.getMessage("Help"),
                                url: "https://www.tampermonkey.net/faq.php?" + l,
                                newtab: !0
                            }, {
                                name: " " + z.a.getMessage("Changelog"),
                                url: "https://www.tampermonkey.net/changelog.php?" + l,
                                newtab: !0
                            }, { social: !0, newtab: !0 }]
                        }), o.push(A), s.Deferred.Pledge(o)
                    },
                    scripts: {
                        root: function (e) {
                            const n = t.tab, r = n ? n.url : null, o = [], a = r ? X.default.parse(r) : null,
                                i = a && ["http:", "https:", "file:"].includes(a.protocol) ? X.default.woHash(a) : "";
                            let A;
                            const l = { name: "scripts", id: "scripts", sub_menu_item: !0, pos: "center", items: [] },
                                c = {}, u = {}, d = {};
                            let p = {};
                            const f = {}, m = a ? qe.REQUESTS.INTERNAL_PAGE_PROTOCOLS.includes(a.protocol) : null;
                            let g;
                            n && [ht.getUniqueScriptsForTab(n), ht.getScriptHistoryForTab(n)].forEach((e, t) => {
                                let n;
                                Object.keys(e).forEach(r => {
                                    const s = e[r];
                                    if (t) {
                                        if (c[r] = s.urls,
                                            u[r] = s.count, d[r] = s.all_time, !(n = p[r])) {
                                            const e = Rt.getByUid(r);
                                            e.script && e.cond ? p[r] = n = e.script : p[r] = n = {
                                                uuid: r,
                                                name: z.a.getMessage("This_script_was_deleted"),
                                                enabled: !0,
                                                deleted: !0
                                            }
                                        }
                                        f[r] = "a" + n.name.toLowerCase() + n.position
                                    } else p[r] = n = s.script, f[r] = "z" + n.name.toLowerCase() + n.position
                                })
                            }),
                                g = "position" == it.values.action_menu_scripts_sort ? (e, t) => e.position - t.position : "name" == it.values.action_menu_scripts_sort ? (e, t) => e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0 : "enabled" == it.values.action_menu_scripts_sort ? (e, t) => 1e4 * (e.enabled ? 0 : 1) + e.position - (1e4 * (t.enabled ? 0 : 1) + t.position) : (e, t) => f[e.uuid].localeCompare(f[t.uuid]), p = Object.values(p).sort(g);
                            let h = Mt([].concat(p), { active_urls: c, active_counts: u, all_time_active_counts: d })
                            ;const R = n ? Gt(n.id) : {};
                            it.values.action_menu_scripts_hide_disabled && (h = h.filter(e => e.enabled || u[e.uuid])), h.forEach(e => {
                                let t;
                                (t = R[e.uuid]) && (e.menu_cmds = t)
                            }), !it.values.action_menu_scripts_hide_disabled && Math.min(it.values.action_menu_columns, (e ? e.available_columns : null) || 99) > 2 ? (A = {
                                name: "scripts_right",
                                id: "scripts_right",
                                sub_menu_item: !0,
                                pos: "right",
                                items: []
                            }, h.forEach(e => {
                                (e.enabled || u[e.uuid] ? l : A).items.push(e)
                            }), o.push(l), A.items.length && o.push(A)) : (A = l, l.items = l.items.concat(h), o.push(l)),
                            it.values.enabled && !h.length && r && (m ? l.items.push({
                                name: z.a.getMessage("Tampermonkey_has_no_access_to_this_page"),
                                image: "no_script",
                                class: "disabled"
                            }) : st.isAllowed(r) ? l.items.push({
                                name: z.a.getMessage("No_script_is_running"),
                                image: "no_script",
                                class: "disabled"
                            }) : l.items.push({
                                name: z.a.getMessage("This_page_is_blacklisted_at_the_security_settings"),
                                image: "critical",
                                class: "disabled"
                            }));
                            const v = z.a.getLocale();
                            if (it.values.enabled) {
                                let e;
                                h.length ? (e = {
                                    name: "scripts_new", id: "scripts_new",
                                    sub_menu_item: !0, pos: "center", items: []
                                }, o.push(e)) : e = l;
                                const t = !!it.values.userscript_search_url, n = it.values.userscript_search_mode;
                                t && i && "click" == n ? e.items.push({
                                    name: z.a.getMessage("Search_for_userscripts_for_this_tab"),
                                    image: "script_search",
                                    data: { url: i },
                                    id: "script_search",
                                    button: !0
                                }) : t && i && ["action_menu", "badge"].includes(n) ? e.items.push({
                                    name: z.a.getMessage("Searching_for_userscripts_for_this_tab"),
                                    image: "script_search",
                                    data: { url: i },
                                    id: "script_search",
                                    class: "disabled",
                                    partial: !0,
                                    referrer: "actions.script_search"
                                }) : e.items.push({
                                    name: z.a.getMessage("Get_new_scripts___"),
                                    image: "script_search",
                                    url: "https://www.tampermonkey.net/scripts.php" + (v ? "?locale=" + v : ""),
                                    newtab: !0
                                }), e.items.push({
                                    name: z.a.getMessage("Add_new_script___"),
                                    image: "script_add",
                                    url: rea.extension.getURL("options.html") + "#nav=new-user-script" + (m ? "" : "&url=" + W.default.Base64.encode(i)),
                                    newtab: !0
                                })
                            }
                            return s.Deferred.Pledge(o)
                        }
                    }, script_search: {
                        root: async e => {
                            let t, n, r;
                            return t = e.url ? await Le(e.url) : { count: 0 },
                                t.error || !t.url ? (n = z.a.getMessage("Search_for_userscripts_for_this_tab"), r = { url: e.url }) : (n = t.count ? z.a.getMessage("Found_0count0_available_scripts", t.count) : z.a.getMessage("No_available_scripts"), r = { result_url: t.url }), [{
                                name: n,
                                data: r,
                                button: !0,
                                image: "script_search",
                                id: "script_search"
                            }]
                        }
                    }, commands: function () {
                        const e = [], n = z.a.getLocale(),
                            r = { name: "commands", id: "commands", sub_menu_item: !0, pos: "left", items: [] }, o = {
                                name: z.a.getMessage("Utilities"),
                                id: "commands",
                                sub_menu_item: !0,
                                more_menu: !0,
                                pos: "left",
                                items: []
                            };
                        if (o.items.push({
                            name: z.a.getMessage("Check_for_userscripts_updates"),
                            id: "run_script_updates",
                            button: !0,
                            image: "update"
                        }), it.values.configMode >= 80 && o.items.push({
                            name: z.a.getMessage("Report_a_bug"),
                            image: "bug",
                            url: "https://www.tampermonkey.net/bug",
                            newtab: !0
                        }), it.values.configMode >= 50) {
                            let e, n, r, s
                            ;["black", "black+white"].includes(it.values.page_filter_mode) && (e = t.tab) && (n = e.url) && (r = X.default.parse(n)) && !qe.REQUESTS.INTERNAL_PAGE_PROTOCOLS.includes(r.protocol) && (s = r.hostname) && st.isAllowed(n) && o.items.push({
                                name: z.a.getMessage("Blacklist_0domain0", s),
                                image: "no",
                                button: !0,
                                id: "blacklist_page",
                                data: { domain: s }
                            })
                        }
                        return qe.RUNTIME.SAFARI || r.items.push({
                            name: z.a.getMessage("Please_consider_a_contribution"),
                            image: "contrib",
                            url: "https://www.tampermonkey.net/contrib.php?src=a" + rea.runtime.short_id + (n ? "&locale=" + n : ""),
                            newtab: !0
                        }), r.items.push(o), e.push(r), s.Deferred.Pledge(e)
                    }
                }, options: {
                    root: function () {
                        return n([r("options.general"), r("options.verification"), r("options.scripts"), r("options.settings")])
                    }, general: function () {
                        let e, t = [];
                        return rea.extension.inIncognitoContext && "temporary" == it.values.incognito_mode ? t.push({
                            globalhint: !0, options: {
                                image: "critical",
                                text: z.a.getMessage("All_modifications_are_only_kept_until_this_incognito_session_is_closed_")
                            }
                        }) : (e = ft.optionsStatus().map(e => ({
                            options: e,
                            globalhint: !0
                        }))) && e.length ? t = t.concat(e) : (e = Dt.updateAvailable()) && t.push({
                            globalhint: !0,
                            options: {
                                image: "info",
                                class: "information",
                                text: z.a.getMessage("0name0_0version0_is_available__Please_re_start_your_browser_to_update_", rea.extension.manifest.name, e)
                            }
                        }), s.Deferred.Pledge(t)
                    }, verification: function () {
                        const e = [];
                        return Ye.getWarnings().forEach(t => {
                            e.push({
                                globalhint: !0,
                                options: {
                                    image: "critical",
                                    class: "warning",
                                    text: t.text,
                                    title: t.description,
                                    info_url: t.url
                                }
                            })
                        }), s.Deferred.Pledge(e)
                    }, scripts: {
                        root: function (e, t) {
                            const o = Object(s.Deferred)(), a = {
                                name: z.a.getMessage("Installed_userscripts"),
                                main_menu_item: !0,
                                scriptTab: !0,
                                id: "dashboard"
                            };
                            return (e.complete || !t ? n(["options.scripts.userscripts", "options.scripts.new"].map(e => r(e))) : (a.referrer = "options.scripts", a.partial = !0, n([r("options.scripts.new")]))).done(e => {
                                a.items = e, o.resolve([a])
                            }).fail(o.reject),
                                o.promise()
                        }, new: function () {
                            const e = [];
                            return e.push({
                                name: z.a.getMessage("New_userscript"),
                                id: null,
                                image: "script_add",
                                icon: H.a.images.origin("unknown"),
                                nnew: !0,
                                uuid: "new-user-script",
                                position: -1,
                                positionof: qe.RUNTIME.MAX_SCRIPTS,
                                enabled: !0,
                                userscript: !0
                            }), s.Deferred.Pledge(e)
                        }, userscripts: {
                            root: function (e, t) {
                                const n = e.complete || !t ? null : "options.scripts.userscripts",
                                    r = Mt(ht.determineScriptsToRun(null), { options_page: !0, referrer: n }),
                                    o = r.length, a = z.a.getLocale();
                                return r.push({
                                    name: z.a.getMessage("No_script_is_installed"),
                                    image: "info",
                                    class: "disabled",
                                    visible: !o
                                }), r.push({
                                    name: z.a.getMessage("Get_some_scripts___"),
                                    image: "edit_add",
                                    url: "https://www.tampermonkey.net/scripts.php" + (a ? "?locale=" + a : ""),
                                    newtab: !0,
                                    visible: !o
                                }), s.Deferred.Pledge(r)
                            }, matches: function (e) {
                                let t, n = e.filter;
                                if (!n) return s.Deferred.Pledge([]);
                                const r = /\/(.*)\/(.*)/.exec(n.code), o = new RegExp(r[1], r[2]);
                                if (e.uuid) {
                                    const n = Rt.getByUid(e.uuid);
                                    n.script && n.cond && (t = [n.script])
                                } else t = ht.determineScriptsToRun(null);
                                if (t) {
                                    const e = t.map(e => -1 != e.textContent.search(o) ? e.uuid : null).filter(e => e);
                                    return s.Deferred.Pledge(e)
                                }
                                return s.Deferred.Pledge([])
                            }, source: function (e) {
                                if (!e.uuid) return s.Deferred.Pledge([]);
                                const t = Rt.getByUid(e.uuid);
                                if (t.script && t.cond) {
                                    let e;
                                    return e = it.values.showFixedSrc ? ve.mkCompat(t.script.textContent, t.script, "off" != it.values.runtime_strict_mode) : t.script.textContent, s.Deferred.Pledge([e])
                                }
                                return y.a.warn("tree: unable to process ", t),
                                    s.Deferred.Breach()
                            }, storage: function (e) {
                                return e.uuid ? s.Deferred.Pledge([Rt.getStorageByUid(e.uuid).data]) : s.Deferred.Pledge([])
                            }, external: function (e) {
                                if (!e.uuid) return s.Deferred.Pledge([]);
                                const t = Rt.getByUid(e.uuid);
                                if (t.script && t.cond) {
                                    let n;
                                    return [].concat(t.script.requires).concat(t.script.resources).some(t => {
                                        const r = t.url || X.default.sanitize(t.unsafe_url, t.abs_url);
                                        if (r != e.url) return;
                                        const s = dt.getElement(e.uuid, r);
                                        return s && s.data && s.data.content ? (n = s.data.content, !0) : void 0
                                    }),
                                        s.Deferred.Pledge([n])
                                }
                                return y.a.warn("tree: unable to process ", t), s.Deferred.Breach()
                            }
                        }
                    }, settings: function (e, t) {
                        const n = Object(s.Deferred)(), r = {
                            name: z.a.getMessage("Settings"),
                            main_menu_item: !0,
                            id: "settings",
                            selected_default: !0
                        };
                        return (e.complete || !t ? s.Deferred.Pledge(xt()) : (r.referrer = "options.settings", s.Deferred.Pledge())).done(e => {
                            r.items = e, n.resolve([r])
                        }).fail(n.reject), n.promise()
                    }
                }
            };
            return y.a.debug("tree: loading", e, t), r(e, !0)()
        }, level: e => e.replace(/\.$/, "").split(".").length
    }, Gt = e => {
        const t = {}, n = null == e || null == e ? Et.list() : Et.listByTabId(e);
        for (const e in n) {
            if (!n.hasOwnProperty(e)) continue;
            const r = n[e];
            (t[r.uuid] = t[r.uuid] || []).push({
                name: r.name,
                uuid: r.uuid,
                id: r.menuId,
                accessKey: r.accessKey,
                image: "menu_cmd",
                menucmd: !0
            })
        }
        return t
    }, Mt = (e, t) => {
        const n = [];
        t = t || {};
        const r = we.Parser.createScript();
        return ["author", "copyright"].forEach(e => {
            r[e] = !1
        }), Object.keys(e).forEach(s => {
            const o = e[s];
            let a;
            if (t.options_page) {
                a = {};
                const e = ["textContent", "requires", "resources"]
                ;Object.keys(r).forEach(t => {
                    e.includes(t) || (Object(i.toType)(r[t]), a[t] = o[t])
                }), t.referrer ? (a.referrer = t.referrer, a.length = o.textContent.length) : a.code = o.textContent, ["requires", "resources"].forEach(e => {
                    a[e] = o[e].map(n => {
                        const r = n.url || X.default.sanitize(n.unsafe_url, n.abs_url), s = dt.getElement(o.uuid, r);
                        let a, i, A, l, c = 0, u = null, d = null;
                        return s && s.data && (s.data.content && (l = s.data.content, c = l.length), d = s.data.sri, u = s.ts, a = s.modified, A = s.data.meta || "text/plain",
                            i = "requires" == e || /text\/.*|application\/(?:x-)?(?:java|ecma)script/.test(A)), {
                            display_url: n.url || n.unsafe_url,
                            abs_url: n.abs_url,
                            unsafe_url: n.unsafe_url,
                            url: r,
                            data: { length: c, content: t.externals ? l : void 0 },
                            sri: d,
                            ts: u,
                            mimetype: A,
                            editable: i,
                            modified: a
                        }
                    })
                }), a.origin = ht.determineOrigin(o), a.contexter = ht.isContexter(o), a.temp_connects = ct.getSessionConnects(o.uuid);
                const n = Rt.getStorageByUid(o.uuid);
                a.storage_key_count = Object.keys(n.data).length, a.remote_url = at.getSyncRemoteUrl(o),
                    a.lastUpdated = o.lastUpdated
            } else {
                const e = ht.determineOrigin(o), n = t.active_urls || {}, r = t.active_counts || {},
                    s = t.all_time_active_counts || {};
                a = {
                    name: o.name,
                    name_i18n: o.name_i18n,
                    uuid: o.uuid,
                    system: o.system,
                    support: !!o.supportURL || e && !!e.issue_url,
                    abuse: e && !!e.abuse_url,
                    active_urls: n[o.uuid],
                    active_count: r[o.uuid],
                    all_time_active_count: s[o.uuid],
                    referrer: t.referrer,
                    contexter: ht.isContexter(o),
                    enabled: o.enabled,
                    position: o.position,
                    deleted: o.deleted
                }
            }
            o.evilness && (o.evilness == ot.SEVERITY_FOISTED_SCRIPT ? a.foisted = z.a.getMessage("The_origin_of_this_script_cant_be_determined_") : o.evilness >= Math.min(ot.SEVERITY_MAX, it.values.script_blacklist_severity) && (a.blacklisted = z.a.getMessage("This_script_is_blacklisted_"))), o.evilness && (a.warnings = ot.getWarningsFor(ht.determineSourceURL(o))), a.file_url = o.downloadURL || o.fileURL, a.positionof = e.length, a.userscript = !0, o.icon64 || o.icon || (a.icon64 = H.a.images.origin("unknown")),
            o.options && Object.keys(r.options).forEach(e => {
                a[e] = o.options[e]
            }), n.push(a)
        }), n
    }, St = {
        run: function (e, t) {
            let n = 1;
            const r = () => {
                0 == --n && (t && t(), rea.page.reload())
            };
            if ("config" == e) {
                const e = k.listValues();
                Object.keys(e).forEach(t => {
                    const s = e[t];
                    -1 == s.indexOf(qe.CONSTANTS.PREFIX.SCRIPT) && -1 == s.indexOf(qe.CONSTANTS.PREFIX.COND) && -1 == s.indexOf(qe.CONSTANTS.PREFIX.STORE) && -1 == s.indexOf(qe.CONSTANTS.PREFIX.META) && (n++, k.deleteValue(s).always(r))
                })
            } else "factory" == e && (n++, ge.remove_permission().done(r), n++,
                k.factoryReset().always(r));
            r()
        }, reset: function (e) {
            St.run(null, e)
        }, factoryReset: function (e) {
            St.run("factory", e)
        }, configReset: function (e) {
            St.run("config", e)
        }
    }, Ut = (() => {
        const e = () => {
            rea.runtime.lastError && rea.runtime.lastError
        }, t = {
            init: function () {
                t.setIcon();
                let e = it.values.appearance_badge_color || "#ee3131";
                "#" !== e[0] && (e = "#" + e), rea.browserAction.setBadgeBackgroundColor({ color: e }), e = it.values.appearance_badge_text_color || "#ffffff", "#" !== e[0] && (e = "#" + e), rea.browserAction.setBadgeTextColor({
                    color: e
                })
            }, setIcon: t => {
                let n, r, s, o = null, a = !1, i = !1;
                void 0 === t || tt.get.empty(t) || (a = tt.get.blocker(t), i = tt.get.forbidden(t)), i ? (s = "_forbidden", o = z.a.getMessage("At_least_one_part_of_this_page_is_listed_at_the_forbidden_pages_setting_")) : a ? (s = "_blocker", o = z.a.getMessage("Some_scripts_might_be_blocked_by_the_javascript_settings_for_this_page_or_a_script_blocker_")) : s = it.values.enabled && void 0 !== t ? "" : "_grey", y.a.debug("badge: set icon " + s), n = { path: rea.extension.getURL("images/icon" + s + ".png") }, r = {
                    title: o || rea.extension.manifest.name
                }, null != t && (n.tabId = t, r.tabId = t);
                try {
                    rea.browserAction.setIcon(n, e), rea.browserAction.setTitle(r)
                } catch (e) {
                    y.a.warn("bg: ERROR while setIcon! " + e.message)
                }
            }, setBadge: e => {
                let t = ""
                ;
                if ("off" == it.values.appearance_badges ? t = "" : "running" == it.values.appearance_badges ? e && !tt.get.empty(e) && (t = tt.get.stats(e).running || "") : "running_unique" == it.values.appearance_badges ? e && !tt.get.empty(e) && (t = tt.get.stats(e, !0).unique || "") : "disabled" == it.values.appearance_badges && e && !tt.get.empty(e) && (t = tt.get.stats(e).disabled || ""), it.values.userscript_search_url && "badge" == it.values.userscript_search_mode) {
                    let n = tt.get.stats(e).searched;
                    n > 0 && (t > 999 ? n = "" : (t > 99 || `${t}+${n}`.length > 4) && (n = "+"),
                        t = `${t}+${n}`)
                }
                y.a.debug("badge: set " + t), rea.browserAction.setBadgeText({ text: t.toString(), tabId: e })
            }
        };
        return t
    })(), Ot = (() => {
        const e = 12096e5;
        let t = null;
        const n = {
            init: function () {
                let r;
                t = k.getValue(qe.CONSTANTS.STORAGE.BEGGING, null);
                const s = Date.now();
                t ? (r = k.getValue(qe.CONSTANTS.STORAGE.LAST_START, 0)) && s - r > e && (t.later = {
                    type: "after_pause",
                    ts: s
                }, n.save()) : (t = { first_run: { type: "from_init", ts: s } }, n.save())
            }, save: function () {
                k.setValue(qe.CONSTANTS.STORAGE.BEGGING, t)
            }, needed: function () {
                const n = Date.now(), r = !t.first_run || t.first_run.ts + e < n, s = !t.hide, o = !t.contributed,
                    a = !t.later || t.later.ts + e < n;
                if (!qe.RUNTIME.SAFARI && !qe.RUNTIME.DOLPHIN && r && s && o && a) return t.later ? "l" : "i"
            }, clicked: function (e, t, n) {
                a.a.tG("clicked", e, t + n)
            }, dialog: {
                shown: function (e) {
                    const r = Date.now();
                    t.dialog = { ts: r, extra: e }, n.save(), a.a.tG("dialog")
                }
            }, button: (() => {
                const e = {};
                return ["contributed", "later", "hide"].forEach(r => {
                    e[r] = (e, s) => {
                        const o = Date.now();
                        t[r] = { ts: o, type: e, extra: s }, n.save(), a.a.tG("button", r)
                    }
                }), e
            })()
        };
        return n
    })(), Zt = (() => {
        const e = {}, t = {}, n = ("TM_" + Object(i.createUUID)().substr(0, 5)).toLowerCase(),
            r = ["content-security-policy", "x-content-security-policy", "x-webkit-csp"], s = "feature-policy",
            o = rea.webRequest.extraHeaderNeeded, a = [], A = e => {
                const t = e.split(",").map(e => {
                        let t, n, r, s, o;
                        const a = e.split(";");
                        let i, A;
                        return a.forEach((e, t) => {
                            0 === e.search(/^\s*script-src /) ? n = t : 0 === e.search(/^\s*default-src /) ? r = t : 0 === e.search(/^\s*img-src /) && (s = t)
                        }), void 0 !== r && void 0 === n && (t = !0,
                            a.push(a[r].replace(/default-src /, "script-src ")), n = a.length - 1), void 0 !== r && void 0 === s && (t = !0, a.push(a[r].replace(/default-src /, "img-src ")), s = a.length - 1), void 0 !== s && (A = !1, i = a[s], -1 == i.search(/'data:'/) && (A = !0, i = i.replace(/img-src /, "img-src data: ")), -1 != i.search(/'none'/) && (A = !0, i = i.replace(/ 'none'/, "")), A && (a[s] = i, t = !0)), void 0 !== n && (A = !1, i = a[n], -1 == i.search(/'unsafe-eval'/) && (A = !0, i = i.replace(/script-src /, "script-src 'unsafe-eval' ")), -1 != i.search(/'none'/) && (A = !0,
                            i = i.replace(/ 'none'/, "")), qe.RUNTIME.FIREFOX && (-1 == i.search(/'unsafe-inline'/) && (A = o = !0, i = i.replace(/script-src /, "script-src 'unsafe-inline' ")), -1 == i.search(/'strict-dynamic'/) && -1 != i.search(/ '(nonce|sha[0-9]+)-[^\']+'/) && (A = !0, i = i.replace(/ '(nonce|sha[0-9]+)-[^\']+'/g, " *"))), A && (a[n] = i, t = !0)), void 0 !== r && (A = !1, i = a[r], o && -1 != i.search(/ 'self'/) && (A = !0, a[r] = i.replace(/default-src /, "default-src blob: data: ")), A && (t = !0)), t ? a.filter(e => e).join(";") : null
                    }).filter(e => e).join(",")
                ;
                return "" === t ? null : t
            }, l = e => {
                if ((e => {
                    let t;
                    return qe.RUNTIME.CHROME && qe.RUNTIME.BROWSER_VERSION >= 63 ? t = e.initiator : qe.RUNTIME.FIREFOX && (t = e.originUrl), t && 0 !== (t + "/").indexOf(rea.extension.getURL("/")) ? t : null
                })(e)) return;
                const r = [];
                let s, o, a = e.requestHeaders || [];
                const i = {}, A = new RegExp("^" + n);
                return a = a.filter(n => !n.name || 0 != n.name.search(A) || (o = n.name.replace(A, ""), i[o.toLowerCase()] = !0, "internal" == o ? t[e.requestId] = n.value : n.value && r.push({
                    name: o,
                    value: W.default.decodeS(n.value)
                }), void (s = !0))), s ? {
                    requestHeaders: a.filter(e => !e.name || !i[e.name.toLowerCase()]).concat(r)
                } : void 0
            }, c = e => {
                if (It.late) if ("main_frame" == e.type) {
                    if (tt.events.reset(e.tabId, !0), e.tabId > 0 && "POST" != e.method && "auto" == it.values.scriptUrlDetection && rt(e.url)) return ht.installFromUrl(e.url, {}, { silent_fail: !0 }).fail(t => {
                        y.a.info("webRequest: user script detected @ " + e.url + " was invalid", t ? t.messages : ""), rea.tabs.update(e.tabId, { url: e.url + "#bypass=true" }, () => {
                        })
                    }).done(() => {
                        qe.RUNTIME.EDGE && rea.tabs.query({
                            windowType: "normal"
                        }, t => {
                            t.forEach(t => {
                                t.id === e.tabId && rea.tabs.update(t.id, { url: t.url }, () => {
                                })
                            })
                        })
                    }), qe.RUNTIME.EDGE ? { cancel: !0 } : { redirectUrl: "javascript:history.back()" }
                } else {
                    let t, n;
                    if ((t = tt.get.requests(e.tabId, e.frameId)) && (n = ((e, t) => {
                        let n = {};
                        const r = e.url;
                        return Object.keys(t).forEach(e => {
                            const s = t[e];
                            Object(i.each)(s.rules, (e, t) => {
                                let o, a, i;
                                if (!(o = e.selector) || !(a = e.action)) return;
                                const A = s.id + "/" + t;
                                if ((i = He.items.regexp.get(A)) || (i = ht.regexify({
                                    inc: o.include,
                                    match: o.match,
                                    exc: o.exclude
                                }),
                                    He.items.regexp.set(A, i)), ht.validUrl(r, i)) {
                                    if (a.cancel) return y.a.log("webRequest: request was canceled by script " + s.uuid, r, e, s), s.callback && s.callback({
                                        type: "cancel",
                                        details: { rule: e, url: r }
                                    }), n = { cancel: !0 }, !1;
                                    if (a.redirect) {
                                        let t, o, i, A;
                                        a.redirect.url ? t = a.redirect.url : (o = a.redirect.from) && (i = a.redirect.to) && (A = r.match(o, i)) && (A.shift(), t = i, A.concat(["", "", ""]).forEach((e, n) => {
                                            t = t.replace("$" + (n + 1), e || "")
                                        }));
                                        const l = n => {
                                            y.a.warn("webRequest: error while request redirect by script " + s.uuid, r, e, s), s.callback && s.callback({
                                                type: "redirect",
                                                message: "error",
                                                details: { description: n, rule: e, url: r, redirect_url: t }
                                            })
                                        };
                                        if (!t) return void l("unable to determine the redirect URL");
                                        t = X.default.woHash(t), st.isAllowed(t) ? ht.scriptWillRun(s.uuid, t) ? (y.a.log("webRequest: request was redirected by script " + s.uuid, r, t, e, s), s.callback && s.callback({
                                            type: "redirect",
                                            details: { rule: e, url: r, redirect_url: t }
                                        }),
                                            n.redirectUrl = t) : l("the redirect URL needs to be included by the scripts @include or @match tag") : l("the redirect URL is filtered by the security settings")
                                    }
                                }
                            })
                        }), n
                    })(e, t))) return n
                } else It.registerLateCallback(() => {
                    c(e)
                })
            }, u = (n, o) => {
                if (!It.late) return void It.registerLateCallback(() => {
                    u(n, !0)
                });
                let a, i, l, c, d = n.responseHeaders || [];
                if ("xmlhttprequest" == n.type) {
                    let r, s;
                    if (t[n.requestId]) return qe.XMLHTTPREQUEST.COOKIE_PASSTHROUGH || d.forEach(e => {
                        e.name && e.value && e.name.toLowerCase().includes("set-cookie") && (d.push({
                            name: "tm-setcookie" + rea.runtime.short_id.toLowerCase(),
                            value: e.value
                        }), s = !0)
                    }), (r = e[n.requestId]) && (d.push({
                        name: "tm-finalurl" + rea.runtime.short_id.toLowerCase(),
                        value: r
                    }), s = !0), s ? { responseHeaders: d } : void 0;
                    if (!qe.RUNTIME.FIREFOX || -1 !== n.parentFrameId || -1 !== n.tabId || !d.some(e => e.name && e.value && "content-type" === e.name.toLowerCase() && -1 != e.value.toLowerCase().indexOf("text/html"))) return
                        ;
                    y.a.log("webRequest: service worker cache request detected", n)
                }
                const p = qe.OPTIONS.HAS_CSP && "remove" == it.values.webrequest_fixCSP,
                    f = p || qe.OPTIONS.HAS_CSP && "yes" == it.values.webrequest_fixCSP,
                    m = f && qe.RUNTIME.CHROME && qe.RUNTIME.BROWSER_VERSION >= 60;
                if (d.some(e => {
                    if (!e.name) return;
                    const t = e.name.toLowerCase();
                    return i |= "location" == t, f && (l |= r.includes(t)), m && (c |= t == s), i
                }), i) return;
                let g, h;
                if ("xmlhttprequest" == n.type) {
                    const { runners: e, contexters: t } = $e(n.frameId, n.url);
                    g = e.length + t.length
                } else g = tt.events.response(n.tabId, n.frameId, n.url);
                if (g && (l || c) && d.forEach((e, t) => {
                    if (!e.name || !e.value) return;
                    const n = e.name.toLowerCase();
                    if (r.includes(n)) {
                        let n;
                        p ? (a = !0, d[t] = {
                            name: e.name,
                            value: void 0
                        }) : (n = A(e.value)) && (a = !0, qe.RUNTIME.FIREFOX ? (d[t] = {
                            name: e.name,
                            value: void 0
                        }, e.name !== r[1] && d.push({ name: r[1], value: n })) : d[t] = { name: e.name, value: n })
                    }
                    if (n == s) {
                        let n;
                        (n = (e => {
                            let t, n;
                            const r = e.split(";");
                            let s, o;
                            return r.forEach((e, t) => {
                                0 === e.search(/^\s*sync-xhr /) && (n = t)
                            }), void 0 !== n && (o = !1,
                                s = r[n], -1 != s.search(/'none'/) && (o = !0, s = s.replace(/ 'none'/, " *")), o && (r[n] = s, t = !0)), t ? r.join(";") : null
                        })(e.value)) && (a = !0, d[t] = { name: e.name, value: n })
                    }
                }), qe.RUNTIME.FAST_EXEC_SUPPORT && ["instant"].includes(it.values.runtime_inject_mode) && (!qe.RUNTIME.FIREFOX || "firefox-default" === n.cookieStoreId) && (h = tt.events.run(n.tabId, n.frameId, null, n.url))) {
                    const e = X.default.parse(n.url), t = e.pathname + e.search,
                        r = "TM_" + rea.runtime.short_id + W.default.Base64.encode(t.length + t).substr(0, 255).replace(/[#=\/]/g, "_") + Date.now(),
                        s = et(h, n.url), o = JSON.stringify(s), i = new Blob([o], { type: "binary/octet-stream" }),
                        A = URL.createObjectURL(i);
                    tt.set.objurl(n.tabId, n.frameId, A), d.push({
                        name: "set-cookie",
                        value: r + "=" + window.encodeURIComponent(A) + "; max-age=15;"
                    }), a = !0
                }
                if (g && !o && rea.webRequest.filterResponseData && qe.OPTIONS.HAS_CSP && ["yes", "remove"].includes(it.values.webrequest_fixCSP) && "yes" == it.values.webrequest_fixContentCSP && ["main_frame", "sub_frame"].includes(n.type)) {
                    let e;
                    if (d.some(t => {
                        if (t.name && t.value) return "content-type" == t.name.toLowerCase() && "text/html" == t.value.split(";")[0].toLowerCase().trim() ? (e = !0, !0) : void 0
                    }), e) {
                        let e = rea.webRequest.filterResponseData(n.requestId);
                        e.ondata = t => {
                            const n = new TextDecoder("x-user-defined").decode(t.data, {
                                    stream: !0
                                }),
                                s = new RegExp('(<head>[\\s\\S]*)(<meta[^>]+http-equiv="(?:' + r.join("|") + ')"[^>]*>)([\\s\\S]*?<\\/head>)', "i");
                            let o;
                            const a = n.replace(s, (e, t, n, r) => {
                                const s = new RegExp('(content=")([^">]+)(")');
                                return t + n.replace(s, (e, t, n, r) => {
                                    let s;
                                    return (s = A(n || "")) && (o = !0), t + (s || n) + r
                                }) + r
                            });
                            o ? e.write(W.default.str2arrbuf(a)) : e.write(t.data), e.disconnect(), e = null
                        }, e.onstop = () => {
                            e && e.disconnect()
                        }
                    }
                }
                return a ? (qe.RUNTIME.FIREFOX && (d = d.filter(e => "cache-control" != e.name.toLowerCase()), d.push({
                    name: "cache-control", value: "no-cache, no-store, must-revalidate"
                })), d = d.filter(e => void 0 !== e.value), { responseHeaders: d }) : void 0
            }, d = n => {
                e[n.requestId] = n.redirectUrl, t[n.requestId] && a.forEach(e => e({ url: n.redirectUrl }))
            }, p = n => {
                It.late ? "xmlhttprequest" == n.type ? (delete t[n.requestId], delete e[n.requestId]) : n.fromCache && tt.events.response(n.tabId, n.frameId, n.url) : It.registerLateCallback(() => {
                    p(n)
                })
            }, f = n => {
                "xmlhttprequest" == n.type ? (delete t[n.requestId],
                    delete e[n.requestId]) : tt.events.reset(n.tabId, !0)
            };
        return {
            getPrefix: function () {
                return n
            }, init: function (e) {
                try {
                    let t;
                    t = qe.RUNTIME.EDGE ? ["http://*/*", "https://*/*"] : ["http://*/*", "https://*/*", "ftp://*/*", "file:///*"].concat(qe.RUNTIME.WEBREQUEST_WEBSOCKET ? ["ws://*/*", "wss://*/*"] : []), e ? (rea.webRequest.onBeforeRequest.addListener(c, {
                        urls: t,
                        types: ["main_frame", "sub_frame", "script", "xmlhttprequest"].concat(qe.RUNTIME.WEBREQUEST_WEBSOCKET ? ["websocket"] : [])
                    }, ["blocking"]),
                        rea.webRequest.onHeadersReceived.addListener(u, {
                            urls: t,
                            types: ["main_frame", "sub_frame", "xmlhttprequest"]
                        }, ["blocking", "responseHeaders"].concat(o ? ["extraHeaders"] : [])), qe.RUNTIME.WEBREQUEST_XHR_SUPPORT && rea.webRequest.onBeforeRedirect.addListener(d, {
                        urls: t,
                        types: ["xmlhttprequest"]
                    }, []), rea.webRequest.onResponseStarted.addListener(p, {
                        urls: t,
                        types: ["main_frame", "sub_frame", "xmlhttprequest"]
                    }, []), rea.webRequest.onErrorOccurred.addListener(f, {
                        urls: t, types: ["main_frame", "xmlhttprequest"]
                    })) : qe.RUNTIME.WEBREQUEST_XHR_SUPPORT && "no" != it.values.webrequest_modHeaders && rea.webRequest.onBeforeSendHeaders.addListener(l, {
                        urls: t,
                        types: ["xmlhttprequest"]
                    }, ["blocking", "requestHeaders"].concat(o ? ["extraHeaders"] : [])), rea.webRequest.handlerBehaviorChanged()
                } catch (e) {
                    y.a.warn("webRequest: error initializings", e.message)
                }
            }, addRedirectListener: e => a.push(e), scripts: {
                set: function (e, t, n, r, s) {
                    const o = [];
                    r.forEach(e => {
                        const t = "string" == typeof e.selector ? { include: [e.selector] } : e.selector
                        ;["include", "match", "exclude"].forEach(t => {
                            "string" == typeof e.selector[t] && (e.selector[t] = [e.selector[t]])
                        });
                        let n = e.action;
                        if ("string" == typeof n) {
                            const e = n;
                            n = {}, n[e] = !0
                        }
                        "string" == typeof e.action.redirect && (e.action.redirect = { url: e.action.redirect }), o.push({
                            selector: t,
                            action: n
                        })
                    }), tt.set.requests(e, t, n, {
                        id: n + "@" + e + ":" + t + "#" + Date.now(),
                        rules: o,
                        uuid: n,
                        callback: s
                    })
                }
            }
        }
    })(), It = {
        late: !1, callbacks: [], init: function () {
        }, registerLateCallback: function (e) {
            y.a.debug("toea: register callback"),
                It.callbacks.push(e)
        }, ensureLate: function (e) {
            It.late ? e() : It.registerLateCallback(e)
        }, setReady: function () {
            y.a.debug("toea: run " + It.callbacks.length + " callbacks"), It.late = !0;
            for (let e = 0; e < It.callbacks.length; e++) It.callbacks[e]();
            It.callbacks = []
        }
    };
    const Ct = (() => {
        let e = !1, t = null;
        const n = () => {
            e || (y.a.debug("Unloader.onbeforeunload()"), t && t(), e = !0)
        };
        return {
            init: function (e) {
                t = e, window.addEventListener("beforeunload", n, !1)
            }
        }
    })();
    var Dt = (() => {
        let e = null;
        const t = {
            newV: rea.extension.manifest.version,
            oldV: null, first_run: !1, active: !1
        }, n = () => {
            if (!It.late) return void It.registerLateCallback(n);
            let e, r = "version=" + t.newV + "&ext=" + rea.runtime.short_id + "&updated=true";
            if (t.first_run ? (e = "https://www.tampermonkey.net/installed.php?" + r, t.active = !0) : (r += "&old=" + t.oldV, e = "https://www.tampermonkey.net/changelog.php?" + r),
            "off" == it.values.notification_showUpdate) ; else if ("notification" == it.values.notification_showUpdate) M.showUpdate(z.a.getMessage("Updated_to__0version0", t.newV), z.a.getMessage("Click_here_to_see_the_recent_changes"), H.a.images.brand("tampermonkey"), t => {
                if (t.clicked) {
                    const t = { url: e };
                    rea.tabs.create(t, () => {
                    })
                }
            }); else if ("changelog" == it.values.notification_showUpdate) {
                t.active || (e += "&intr=true"), t.active = !0;
                const n = { url: e, active: t.active };
                rea.tabs.create(n, () => {
                })
            }
        }, r = (() => {
            const e = Object(s.Deferred)(), t = () => {
                const t = Date.now(), n = k.getValue(qe.CONSTANTS.STORAGE.LAST_START, 0), r = Math.round((t - n) / 1e3),
                    s = r <= qe.MISC.DISTURBANCE_ALLOWED;
                y.a.log("upd: restart?", s, "(", r, "seconds ago)"), e.resolve(s)
            };
            return It.late ? t() : It.registerLateCallback(t), e.promise()
        })(), o = () => {
            let e = !1, o = !1;
            (() => {
                let e, t = null;
                const n = Object(s.Deferred)(), r = () => {
                    e && (e = null, n.resolve(!!t))
                };
                return e = window.setTimeout(r, 300), rea.idle.queryState(qe.MISC.IDLE_TIMEOUT, e => {
                    t = "active" == e, r()
                }), n.promise()
            })().then(e => (o = e, r)).then(t => {
                e = t
            }).always(() => {
                t.active = !o || e, n(), i = !0
            })
        };
        let a = null;
        var i = !1;
        const A = {
            scheduleNotification: function (e, n) {
                i || (t.oldV = e, t.first_run |= n, a && window.clearTimeout(a), a = window.setTimeout(o, 1e3))
            }, updateAvailable: function () {
                return e
            }, onInstalled: function () {
                A.scheduleNotification(null, !0)
            }, onUpdated: function (e) {
                A.scheduleNotification(e, !1)
            }, onUpdateAvailable: t => {
                y.a.info("An update to version", t.version, "is available"), e = t.version, window.setTimeout(() => {
                    M.show(z.a.getMessage("Update"), z.a.getMessage("0name0_0version0_is_available__Please_re_start_your_browser_to_update_", rea.extension.manifest.name, t.version), H.a.images.brand("tampermonkey"), { timeout: 6e4 })
                }, 864e5)
            }
        };
        return It.registerLateCallback(() => {
            k.setValue(qe.CONSTANTS.STORAGE.LAST_START, Date.now())
        }), A
    })();
    const jt = e => {
        (() => {
            const t = Object(s.Deferred)();
            return "activate" == e ? (rea.browserAction.openPopup(), t.resolve()) : "toggle-enable" == e ? (it.values.enabled = !it.values.enabled,
                t.resolve()) : rea.tabs.getSelected(null, n => {
                let r;
                "open-dashboard" == e ? r = rea.extension.getURL("options.html") + "#nav=dashboard" : "open-dashboard-with-running-scripts" == e ? r = rea.extension.getURL("options.html") + "#nav=dashboard&filter=" + encodeURIComponent(n.url) : "open-new-script" == e && (r = rea.extension.getURL("options.html") + "#url=" + W.default.Base64.encode(n.url) + "&nav=new-user-script"), t.resolve(r ? {
                    url: r,
                    active: !0,
                    parent: n
                } : null)
            }), t.promise()
        })().then(e => {
            e && rea.tabs.create(e)
        })
    };
    var Ft = (() => {
        const e = {};
        let t;
        const n = ({ tabId: t, frameId: n, url: r }) => {
            const s = e[t];
            s && s.forEach(e => {
                e({ tabId: t, frameId: n, url: r })
            })
        };
        return {
            addListener: (r, s) => {
                e[r] = e[r] || [], e[r].push(s), !t && Object.keys(e).length && (rea.webNavigation.supported && rea.webNavigation.onUrlUpdated && rea.webNavigation.onUrlUpdated.addListener(n), t = !0)
            }, removeListener: (t, n) => {
                let r;
                const s = e[t];
                s && (r = s.indexOf(n)) > -1 && s.splice(r, 1), 0 === s.length && delete e[t]
            }, removeListeners: t => {
                delete e[t]
            }
        }
    })(), Nt = (() => {
        const e = [], t = e => {
            tt.events.active(e.tabId, e.windowId)
        }, n = (t, r, s) => {
            if (!It.late) return void window.setTimeout(() => {
                n(t, r, s)
            }, 100);
            const o = s.pendingUrl || s.url;
            "auto" == it.values.scriptUrlDetection && rt(o) && ht.installFromUrl(o, {}, { silent_fail: !0 }), o ? "loading" == r.status ? tt.events.loading(s.id, 0, o) : "complete" == r.status && tt.events.complete(s.id, 0, o) : y.a.warn("tabUpdates: no tab url set! ", s), e.forEach(e => {
                e({ reason: "updated", status: r.status }, s)
            })
        }, r = t => {
            Je[t] && (Je[t].onClose(), delete Je[t]), tt.events.remove(t),
                e.forEach(e => {
                    e({ reason: "removed" }, { id: t })
                })
        }, s = (t, n) => {
            r(n), Ut.setIcon(t), Ut.setBadge(t), e.forEach(e => {
                e({ reason: "replaced" }, t)
            })
        }, o = t => {
            It.late ? (tt.events.commited(t.tabId, t.frameId, t.url), 0 === t.frameId && e.forEach(e => {
                e({ reason: "commited" }, { url: t.url, id: t.tabId })
            })) : window.setTimeout(() => {
                o(t)
            }, 100)
        }, a = {
            init: function () {
                rea.tabs.onUpdated.addListener(n), rea.tabs.onRemoved.addListener(r), rea.tabs.onReplaced.addListener(s), rea.tabs.onActivated.addListener(t),
                rea.webNavigation.supported && rea.webNavigation.onCommitted.addListener(o)
            }, openAndWatch: function (e, t) {
                let n = null;
                const r = (e, s) => {
                    null !== n && s.id === n && (["updated", "commited"].includes(e.reason) ? t(s) : "removed" == e.reason && (a.removeListener(r), t()))
                };
                return rea.tabs.create(e, e => {
                    n = e.id, t(e)
                }), a.addListener(r), {
                    cancel: function () {
                        a.removeListener(r), null !== n && rea.tabs.remove(n, () => {
                            const e = rea.runtime.lastError;
                            e ? y.a.warn("tab.close", e.message) : n = null
                        })
                    }
                }
            }, addListener: function (t) {
                e.push(t)
            },
            removeListener: function (t) {
                let n;
                e && (n = e.indexOf(t)) > -1 && e.splice(n, 1)
            }
        };
        return a
    })(), Bt = () => {
        const e = "temporary" == it.values.incognito_mode && rea.extension.inIncognitoContext;
        k.setTemporary(e), e && (it.values.sync_enabled = !1, it.values.scriptUpdateCheckPeriod = 0, it.values.sync_type = 0, it.values.statistics_enabled = !1)
    };
    const Pt = (() => {
        const e = "tm_content", t = async () => {
            ["instant"].includes(it.values.runtime_inject_mode) ? await (async () => {
                await new r.a(e => {
                    rea.declarativeContent.onPageChanged.removeRules(void 0, e)
                })
            })() : await (async () => {
                await new r.a(t => {
                    rea.declarativeContent.onPageChanged.getRules([e], async n => {
                        if (n.length) return t();
                        rea.declarativeContent.onPageChanged.addRules([{
                            id: e,
                            conditions: [new rea.declarativeContent.PageStateMatcher({ pageUrl: { urlContains: "://" } })],
                            actions: [new rea.declarativeContent.RequestContentScript({ js: rea.extension.manifest.content_scripts[0].js })]
                        }], t)
                    })
                })
            })()
        };
        return {
            init: () => {
                rea.declarativeContent.supported && (t(), it.addChangeListener("runtime_inject_mode", t))
            }
        }
    })();
    let Lt;
    (window.init = () => {
        z.a.init(), It.init(), Zt.init(!0), Nt.init(), Lt = Object(be.a)(Nt), _t.init(), rea.commands.supported && rea.commands.onCommand.addListener(jt), rea.runtime.setUninstallURL("https://www.tampermonkey.net/uninstall.php?ext=" + rea.runtime.short_id), Ct.init(() => {
            at.finalize()
        }), we.Parser.init(ve), rea.browserAction.setIcon({ path: rea.extension.getURL("images/icon_grey.png") }),
            rea.browserAction.setPopup({ popup: "action.html" }), rea.browserAction.setTitle({ title: "Tampermonkey" }), rea.runtime.onUpdateAvailable.addListener(Dt.onUpdateAvailable), rea.runtime.onInstalled.addListener(e => {
            y.a.log("bg: onInstalled", e), e || (e = { reason: "mandatory_argument_is_not_set" }), "install" == e.reason ? bt() : "update" == e.reason && kt(e.previousVersion), It.ensureLate(() => {
                "install" == e.reason ? Dt.onInstalled() : "update" == e.reason && Dt.onUpdated(e.previousVersion)
            })
        }),
            k.init().then(Ke).then(vt).then(it.init).then(() => {
                window.cfgo = it, Bt(), (() => {
                    if (y.a.set(it.values.logLevel), z.a.setLocale(it.values.i18n), it.values.userscript_search_url) {
                        const e = () => {
                            Pe(At, { url: it.values.userscript_search_url, mode: it.values.userscript_search_mode })
                        };
                        it.addChangeListener("userscript_search_mode", e), e()
                    }
                    const e = qe.RUNTIME.WEBREQUEST_XHR_SUPPORT && "no" != it.values.webrequest_modHeaders;
                    Y.a.setConfig({ prefix: e ? Zt.getPrefix() : null, mozAnon: qe.RUNTIME.FIREFOX }), At.init(),
                        a.a.init("bg", it.values.statistics_enabled, {
                            trackView: !0,
                            version: rea.extension.manifest.version,
                            started: ze
                        }), tt.listeners.add.onReset((e, t) => {
                        Et.clearByTabId(e), Rt.removeStorageListeners({ tabid: e }, !1), t || Ut.setIcon(e)
                    });
                    const t = e => {
                        e >= 0 && rea.tabs.get(e, t => {
                            !rea.runtime.lastError && t && (Ut.setIcon(e), Ut.setBadge(e))
                        })
                    };
                    tt.listeners.add.onCommited(t), tt.listeners.add.onCompleted(t), tt.listeners.add.onReset(ct.purgeAppeals), tt.listeners.add.onRemoved(ct.purgeAppeals),
                        tt.listeners.add.onRemoved(nt.cleanTab), at.init().done(e => {
                        e && at.sync()
                    }), st.init(), ot.init(), Rt.init();
                    const n = () => {
                        ge.set_mode(it.values.downloads_mode), ge.set_whitelist(it.values.downloads_extension_whitelist)
                    };
                    n(), ge.config_changed_listener = n, ut.init(), Zt.init(), Oe.init({
                        onclick: ({ id: e, frameId: t, tabId: n, url: r, isMenuCommand: o }) => {
                            if (o) {
                                const t = Et.getById(e);
                                t ? t.response({
                                    run: !0,
                                    menuId: t.menuId
                                }) : y.a.warn("bg: Error: unable to find MC id " + t.menuId)
                            } else {
                                const o = Rt.getByUid(e)
                                ;
                                if (!o || !o.script) return void y.a.log("ctxm: unable to find script " + e);
                                const a = o.script;
                                pt.bundle({ url: r || "<unknown>" }, a, !0).then(e => {
                                    const o = Object(s.Deferred)(), a = {};
                                    return e.method = "executeScript", void 0 !== t ? e.frameId = a.frameId = t : r ? e.url = X.default.woHash(r) : e.topframe = !0, rea.tabs.sendMessage(n, e, a, o.resolve), o.promise()
                                })
                            }
                        }
                    }), Ot.init(), gt.init()
                })(), it.addChangeListener(["sync_enabled", "sync_type", "cloud_url", "cloud_user", "cloud_pass"], at.configChangeListener),
                    it.addChangeListener("logLevel", () => {
                        y.a.set(it.values.logLevel)
                    }), it.addChangeListener("i18n", () => {
                    z.a.setLocale(it.values.i18n)
                }), it.addChangeListener("incognito_mode", () => {
                    Bt()
                }), it.addChangeListener("statistics_enabled", () => {
                    a.a.setEnabled(it.values.statistics_enabled, !0)
                }), it.addChangeListener(["require_blacklist", "script_blacklist_server", "script_blacklist_type"], ht.blackCheckAll), it.addChangeListener(["downloads_extension_whitelist", "downloads_mode"], ge.config_changed_listener),
                    it.addChangeListener("webrequest_modHeaders", (e, t, n, r) => {
                        r.done(window.setTimeout(St.reset, 1))
                    }), it.addChangeListener(["appearance_badge_color", "appearance_badge_text_color"], Ut.init), Ut.init(), window.setTimeout(gt.check, 1e4), Pt.init(), wt().then(() => {
                    y.a.log("Listeners registered!"), window.setTimeout(It.setReady, 1)
                })
            })
    })()
}]);
//# sourceMappingURL=http://localhost:8000/sourcemaps/background.js.map