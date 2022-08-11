!function (e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var s = n[o] = { i: o, l: !1, exports: {} };
        return e[o].call(s.exports, s, s.exports, t), s.l = !0, s.exports
    }

    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e
            ;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var s in e) t.d(o, s, function (t) {
            return e[t]
        }.bind(null, s));
        return o
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return {}.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 55)
}({
    55: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = (e, t, n, o) => {
            let s, r, a, i, c, d, l, u, p, g, m, f;
            const h = {};
            let v = {
                safeWindow: h, safeDocument: {}, eval, Context: { D: o }, exec_fn: (e, t, n) => {
                    s(new h.Function(e), t, n)
                }, exec_csp: (e, t, n) => {
                    const o = "__u__" + (19831206 * v.Context.M_r() + 1);
                    v.Message.send("csp", { id: o, src: e }), v.exec_script(o, t, n)
                }, exec_script: (t, n, o) => {
                    const r = e[t];
                    delete e[t], s(r, n, o)
                }
            };
            const w = (t, n) => {
                if (e.console.error(`Tampermonkey sandbox preparation ${n ? "(" + n + ") " : ""}failed. This usually is caused by a third-party extension.`, t), n) return () => {
                }
            };
            try {
                (() => {
                    const o = e => {
                        const t = (t, ...n) => s(e, t, n);
                        return t.wrappedJSObject = e, t
                    }, _ = (e, t) => {
                        let n;
                        for (; null != e && !(n = u(e, t));) e = l(e);
                        return n
                    }, y = {
                        i_N: () => p = e => !("prototype" in e),
                        i_SS: () => g = (e, t, n) => {
                            const o = _(e, t);
                            if (!o || !o.set || p(o.set)) return e[t] = n, !0
                        },
                        i_SG: () => m = (e, t) => {
                            const n = _(e, t);
                            if (!n || !n.get || p(n.get)) return e[t]
                        },
                        F_a: () => s = (() => {
                            const t = e.Function.apply, o = n;
                            return (e, n, s) => {
                                let r;
                                return m(e, "apply") === t ? r = e.apply(n, s) : g(e, o, t) && (r = e[o](n, s), delete e[o]), r
                            }
                        })(),
                        E_u: () => function (t, n) {
                            if (v.exec_eval) {
                                const o = "__u__" + (19831206 * v.Context.M_r() + 1);
                                return e[o] = n, v.Context.F_c(v.Context.eval, e, `(function(that){${t}})((()=>{const k="${o}",r=this[k];delete this[k];return r;})())`)
                            }
                            v.exec_csp(`(function(that){${t}})(this)`, n)
                        },
                        F_c: () => o(e.Function.call),
                        F_b: () => r = o(e.Function.bind),
                        F_tS: () => o(e.Function.toString),
                        A_fE: () => i = o(e.Array.prototype.forEach),
                        A_sl: () => o(e.Array.prototype.slice),
                        A_sp: () => o(e.Array.prototype.splice),
                        A_sh: () => o(e.Array.prototype.shift),
                        A_j: () => o(e.Array.prototype.join),
                        A_pu: () => a = o(e.Array.prototype.push),
                        A_po: () => o(e.Array.prototype.pop),
                        A_m: () => o(e.Array.prototype.map),
                        A_c: () => o(e.Array.prototype.concat),
                        A_f: () => o(e.Array.prototype.filter),
                        A_iO: () => o(e.Array.prototype.indexOf),
                        O_k: () => e.Object.keys,
                        O_dP: () => e.Object.defineProperties,
                        O_dPy: () => e.Object.defineProperty,
                        O_gOPN: () => e.Object.getOwnPropertyNames,
                        O_gOPD: () => u = e.Object.getOwnPropertyDescriptor,
                        O_gOPDs: () => e.Object.getOwnPropertyDescriptors || (e => {
                            const t = {};
                            for (const n in e) t[n] = y.O_gOPD(e, n);
                            return t
                        }),
                        O_gPO: () => l = e.Object.getPrototypeOf,
                        O_tS: () => o(e.Object.prototype.toString),
                        J_p: () => d = e.JSON.parse,
                        J_s: () => c = e.JSON.stringify,
                        c_l: () => (e.console.log || e.console.log).bind(e.console),
                        c_i: () => (e.console.info || e.console.log).bind(e.console),
                        c_w: () => (e.console.warn || e.console.log).bind(e.console),
                        c_e: () => (e.console.error || e.console.log).bind(e.console),
                        c_d: () => (e.console.debug || e.console.log).bind(e.console),
                        M_f: () => e.Math.floor,
                        M_r: () => e.Math.random,
                        M_m: () => e.Math.max,
                        M_i: () => f = o(e.MutationEvent.prototype.initMutationEvent),
                        N_tS: () => o(e.Number.prototype.toString),
                        P_r: () => e.Promise ? e.Promise.resolve.bind(e.Promise) : void 0,
                        P_t: () => e.Promise ? o(e.Promise.prototype.then) : void 0,
                        P_c: () => e.Promise ? o(e.Promise.prototype.catch) : void 0,
                        R_rAAB: () => e.FileReader ? o(e.FileReader.prototype.readAsArrayBuffer) : void 0,
                        S_fCC: () => e.String.fromCharCode,
                        S_m: () => o(e.String.prototype.match),
                        S_su: () => o(e.String.prototype.substr),
                        S_se: () => o(e.String.prototype.search),
                        S_sp: () => o(e.String.prototype.split),
                        S_r: () => o(e.String.prototype.replace),
                        S_cCA: () => o(e.String.prototype.charCodeAt),
                        S_tLC: () => o(e.String.prototype.toLowerCase),
                        S_tUC: () => o(e.String.prototype.toUpperCase),
                        D_pFS: () => o(e.DOMParser.prototype.parseFromString),
                        X_o: () => o(e.XMLHttpRequest.prototype.open),
                        X_sRH: () => o(e.XMLHttpRequest.prototype.setRequestHeader),
                        X_oMT: () => o(e.XMLHttpRequest.prototype.overrideMimeType),
                        X_gARH: () => o(e.XMLHttpRequest.prototype.getAllResponseHeaders),
                        X_gRH: () => o(e.XMLHttpRequest.prototype.getResponseHeader),
                        X_s: () => o(e.XMLHttpRequest.prototype.send),
                        X_a: () => o(e.XMLHttpRequest.prototype.abort),
                        D_n: () => e.Date.now
                    };
                    var b;
                    Object.keys(y).forEach(e => {
                        try {
                            v.Context[e] = y[e]()
                        } catch (t) {
                            v.Context[e] = w(t, "internal." + e)
                        }
                    }),
                        ["String", "Array", "Object", "Number", "parseInt", "JSON", "Math", "Date", "Event", "MutationEvent", "console", "location", "Error", "Uint8Array", "Blob", "FileReader", "DOMParser", "XMLHttpRequest", "Function", "RegExp", "frames", "self", "top", "document", "location", "Promise"].forEach(t => {
                            try {
                                h[t] = e[t]
                            } catch (e) {
                                h[t] = w(e, "window." + t)
                            }
                        }), ["postMessage", "addEventListener", "removeEventListener", "setTimeout", "setInterval", "clearTimeout", "clearInterval", "alert", "prompt", "confirm", "encodeURIComponent", (b = {
                        a: "decodeURI",
                        b: "Component"
                    }, b.a + b.b), "encodeURI", "decodeURI", "escape", "unescape", "atob", "btoa", "close"].forEach(t => {
                        try {
                            const n = e[t];
                            h[t] = function () {
                                return s(n, e, arguments)
                            }
                        } catch (e) {
                            h[t] = w(e, "window." + t)
                        }
                    }), v.createSafeDocument = e => {
                        ["getElementById", "createEvent", "createElement", "dispatchEvent", "addEventListener", "removeEventListener"].forEach(t => {
                            try {
                                const n = e[t];
                                v.safeDocument[t] = function () {
                                    return s(n, e, arguments)
                                }
                            } catch (e) {
                                v.safeDocument[t] = w(e, "document." + t)
                            }
                        })
                    }, v.createSafeDocument(t)
                })()
            } catch (e) {
                return w(e)
            }
            try {
                v.Message = ((e, t) => {
                    let n, o, r, l, u = 1;
                    const p = {};
                    let g = [];
                    const m = e => {
                        const t = ++u;
                        return p[u] = e, t
                    }, h = e => {
                        const { m: n, a: o, r: a, n: i } = e;
                        !function () {
                            s(t.dispatchEvent, t, arguments)
                        }(((e, n, o) => {
                            const s = t.createEvent("MutationEvent");
                            return f(s, e, !1, !1, o || null, null, null, c(n), s.ADDITION), s
                        })(r, { m: n, a: o, r: a }, i))
                    };
                    let v = e => {
                        const t = d(e.attrName);
                        if ("message.response" == t.m) ((e, t) => {
                            let n;
                            e && (n = p[e]) && (n(t), delete p[e])
                        })(t.r, t.a); else if (n) {
                            const o = t.r ? e => {
                                h({ m: "message.response", a: e, r: t.r })
                            } : () => {
                            };
                            !1 === n({ method: t.m, args: t.a, node: e.relatedNode, sendResponse: o }) && a(g, e)
                        }
                    };
                    return {
                        init: e => {
                            l || (l = e), r = "2C_" + l, o = "2P_" + l, function () {
                                s(t.addEventListener, t, arguments)
                            }(o, v, !1)
                        }, send: (...e) => {
                            let t, n, o, s;
                            "function" != typeof e[2] ? [t, n, o, s] = e : [t, n, s] = e, h({
                                m: t,
                                a: n,
                                r: s ? m(s) : null,
                                n: o
                            })
                        }, onMessage: {
                            setListener: (e, t) => {
                                n = e, t || (i(g, e => {
                                    v(e)
                                }), g = null)
                            }
                        }, cleanup: () => {
                            v && function () {
                                s(t.removeEventListener, t, arguments)
                            }(o, v, !1), v = null
                        }
                    }
                })(0, v.safeDocument), v.Message.init(n),
                    v.Message.onMessage.setListener(({ method: t, args: n }) => {
                        if (v) if ("load" == t) v.Context.pageLoaded = !0; else if ("DOMContentLoaded" == t) v.Context.domContentLoaded = !0; else if ("cleanup" == t) v.Message.cleanup(), v = null; else {
                            if ("next" != t) return !1;
                            if (n.id) v.exec_script(n.id, v), v.exec_eval = !1; else {
                                if (void 0 === v.exec_eval) try {
                                    v.exec_eval = r(v.eval, e)("true")
                                } catch (e) {
                                    v.exec_eval = !1
                                }
                                v.exec_eval ? v.exec_fn(n.src, v) : v.exec_csp(n.src, v)
                            }
                        }
                    }, !0)
            } catch (e) {
                return w(e)
            }
        }, s = function (e, t) {
            const n = e.V, o = e.EV, s = e.D, r = e.Message, a = e.safeWindow, i = window, c = e.safeDocument,
                d = e.flags, l = e.i_N, u = e.i_SS, p = e.i_SG, g = e.F_a, m = e.F_c, f = e.F_b, h = e.F_tS, v = e.A_fE,
                w = e.A_sl, _ = e.A_sp, y = e.A_pu, b = e.A_po, x = e.A_sh, M = e.A_j, L = e.A_f, E = e.A_iO, T = e.A_c,
                S = e.O_k, C = e.O_dP, O = e.O_dPy, R = e.O_gOPN, A = e.O_gOPD, k = e.O_gOPDs, D = e.O_tS, I = e.J_p,
                P = e.J_s, U = e.c_l, N = e.c_i, $ = e.c_w, j = e.c_e, F = e.c_d, V = e.M_f, X = e.M_r, q = e.M_m,
                G = e.P_r, H = e.P_t, B = e.P_c, J = e.S_fCC, W = e.S_m, z = e.S_su, K = e.S_sp, Q = e.S_r, Z = e.S_se,
                Y = e.S_cCA, ee = e.S_tLC, te = e.S_tUC, ne = e.R_rAAB, oe = e.D_pFS, se = e.X_o, re = e.X_sRH,
                ae = e.X_oMT, ie = e.X_gARH, ce = e.X_gRH, de = e.X_s, le = e.X_a, ue = e.N_tS, pe = e.D_n,
                ge = a.Promise || (() => {
                    $("There is no browser Promise support!")
                }), me = "DOMContentLoaded", fe = "load", he = "DOMNodeInserted";
            e.domContentLoaded |= !1, e.pageLoaded |= !1, e.domNodeInserted |= !1, e.props = {};
            const ve = (() => {
                const t = [], n = e => {
                    e()
                }, o = e => {
                    if (document.body) e && (e(), e = null); else {
                        const t = [fe, he, me], n = () => {
                            v(t, e => {
                                c.removeEventListener(e, n, !1)
                            }), o(e)
                        };
                        v(t, e => {
                            c.addEventListener(e, n, !1)
                        })
                    }
                };
                var r = {
                    runListeners: () => {
                        let e;
                        for (; e = x(t);) e()
                    }, run: i => {
                        const c = () => {
                            Le.create(i)
                        };
                        var d
                        ;"document-start" == i.script.options.run_at ? (s && F(`env: run "${i.script.name}" ASAP -> document-start`), n(c)) : "document-body" == i.script.options.run_at ? (s && F(`env: schedule "${i.script.name}" for document-body`), o(c)) : "context-menu" == i.script.options.run_at ? (s && F(`env: run "${i.script.name}" ASAP -> context-menu`), n(c)) : "document-end" == i.script.options.run_at ? (s && F(`env: schedule "${i.script.name}" for document-end`), y(t, c),
                        e.domContentLoaded && r.runListeners()) : (s && F(`env: schedule "${i.script.name}" for document-idle`), d = c, y(t, () => {
                            a.setTimeout(d, 1)
                        }), e.domContentLoaded && r.runListeners())
                    }
                };
                return r
            })();
            (n || s) && F(`env: initialized (content, id:${z(t, 0, 10)}..., ${a.location.origin}${a.location.pathname}) `);
            const we = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                const t = 16 * X() | 0;
                return ue("x" == e ? t : 3 & t | 8, 16)
            }), _e = e => W(D(e, {}), new a.RegExp("\\s([a-z|A-Z]+)"))[1], ye = {
                UTF8: {
                    encode: e => a.unescape(a.encodeURIComponent(e)), decode: e => a.decodeURIComponent(a.escape(e))
                }, Base64: {
                    encode: e => {
                        let t = "";
                        for (let n = 0; n < e.length; n++) t += J(255 & Y(e, n));
                        return a.btoa(t)
                    }, decode: e => a.atob(e)
                }, str2arrbuf: e => {
                    const t = new a.Uint8Array(e.length);
                    for (let n = 0; n < e.length; n++) t[n] = Y(e, n);
                    return t.buffer
                }, arrbuf2str: e => {
                    let t = "";
                    const n = new a.Uint8Array(e);
                    for (let e = 0; e < n.length; e += 32687) t += g(J, null, n.subarray(e, e + 32687));
                    return t
                }, blob2str: (e, t) => {
                    const n = new a.FileReader;
                    n.onload = () => {
                        t(ye.arrbuf2str(n.result))
                    }, ne(n, e)
                }
            }, be = (() => {
                const e = {};
                let t;
                const n = t => {
                    let n = [], o = [];
                    const s = () => {
                        n = null, o = null, a = null, delete e[t]
                    };
                    var a = {
                        postMessage: e => {
                            r.send("port.message", { response_id: t, value: e })
                        }, onMessage: {
                            addListener: e => {
                                y(n, e)
                            }
                        }, onDisconnect: {
                            addListener: e => {
                                y(o, e)
                            }
                        }, disconnect: () => {
                            r.send("port.message", { response_id: t, disconnect: !0 }), s()
                        }
                    };
                    return e[t] = {
                        message: e => {
                            n && v(n, t => {
                                t(e)
                            })
                        }, disconnect: e => {
                            o && v(o, t => {
                                t(e)
                            }), s()
                        }
                    }, a
                };
                return {
                    message: o => {
                        let r
                        ;
                        if (o.connect) t && t(o.destination, n(o.response_id)); else {
                            if (!(r = e[o.response_id])) return void (s && $("ports: unkown id", o.response_id, o));
                            o.disconnect ? r.disconnect() : r.message(o.value)
                        }
                    }, connect: e => {
                        const t = we();
                        return r.send("port.message", { response_id: t, connect: !0, destination: e }), n(t)
                    }, onConnect: {
                        addListener: e => {
                            t = e
                        }
                    }
                }
            })(), xe = (() => {
                const e = {
                    objs: {}, push: (t, n) => {
                        0 !== n && 1 !== n && (n = 0);
                        const o = V(19831206 * X() + 1);
                        return e.objs[o] = { fn: t, prio: n }, o
                    }, remove: t => delete e.objs[t], get: t => {
                        const n = []
                        ;
                        for (let o = 0; o <= 1; o++) v(S(e.objs), s => {
                            e.objs[s].prio !== o || void 0 !== t && s != t || y(n, e.objs[s].fn)
                        });
                        return void 0 === t ? n : n[0]
                    }, finalize: t => {
                        if (void 0 !== t) {
                            let n;
                            return e.objs[t] && (n = e.objs[t].fn(), delete e.objs[t]), n
                        }
                        {
                            const t = e.get();
                            for (let e = 0; e < t.length; e++) t[e]()
                        }
                    }
                };
                return e
            })(), Me = (() => {
                const e = (e, t) => {
                    let n, o = null, r = !1, a = null;
                    const i = (() => {
                        const e = [];
                        return {
                            run: t => {
                                if (t && y(e, t), o) for (; e.length;) b(e)()
                            }
                        }
                    })();
                    let c = be.connect("openInTab");
                    const d = () => {
                            c && c.postMessage({ close: !0 })
                        }
                    ;c.onMessage.addListener(e => {
                        e.tabId ? r ? d() : (o = e.tabId, i.run()) : e.name ? n = e.name : e.closed && (r = !0, a && (a(), a = void 0))
                    }), c.onDisconnect.addListener(() => {
                        c = null
                    }), c.postMessage({ method: "openTab", url: e, options: t });
                    const l = {};
                    return C(l, {
                        close: {
                            value: () => {
                                r ? s && F("env: attempt to close already closed tab!") : d()
                            }
                        }, closed: { get: () => r }, onclose: {
                            get: () => a, set: e => {
                                a = e
                            }
                        }, name: {
                            get: () => n, set: e => {
                                i.run(() => {
                                    c && c.postMessage({ name: e })
                                })
                            }
                        }
                    }), l
                }, o = (...e) => {
                    const t = "Object" === _e(e[0]) ? e[0] : {
                        url: e[0], name: e[1]
                    }, n = (e, t) => {
                        t = t || {}, e && a.setTimeout(() => {
                            g(e, t, [t])
                        }, 1)
                    };
                    let o = be.connect("download");
                    return o.onMessage.addListener(e => {
                        try {
                            e.load ? t.onload && n(t.onload, e.data) : e.progress ? t.onprogress && n(t.onprogress, e.data) : e.timeout ? t.ontimeout && n(t.ontimeout, e.data) : t.onerror && n(t.onerror, e.data)
                        } catch (e) {
                            U("env: Error: TM_download - ", e, t)
                        }
                    }), o.onDisconnect.addListener(() => {
                        o = null
                    }), (e => {
                        const n = () => {
                            e && (e(), e = null)
                        };
                        if (!d.blob_download_supported && t.url.startsWith("blob:")) {
                            const e = new a.XMLHttpRequest
                            ;se(e, "GET", t.url), e.responseType = "blob", e.onload = () => {
                                4 == e.readyState && ye.blob2str(e.response, e => {
                                    try {
                                        t.url = "data:application/octet-stream;base64," + ye.Base64.encode(e)
                                    } catch (e) {
                                        $("env: Error: TM_download - ", e, t)
                                    }
                                    n()
                                })
                            }, e.onerror = e.ontimeout = () => {
                                n()
                            }, de(e)
                        } else n()
                    })(() => {
                        o && o.postMessage({ details: t })
                    }), {
                        abort: () => {
                            o && o.postMessage({ cancel: !0 })
                        }
                    }
                }, i = ({ root: e, tag: t, properties: n, cb: o }) => {
                    const s = we(), a = { tag: t, properties: n, id: s };
                    return r.send("addElement", a, e, o ? () => o() : null), c.getElementById(s)
                }, l = {};
                return {
                    log: function () {
                        g(U, this, arguments)
                    },
                    addStyle: (e, t) => i({ tag: "style", properties: { textContent: e }, cb: t }),
                    addElement: (...e) => {
                        let t, n, o, s;
                        return "string" == typeof e[0] ? [n, o, s] = e : [t, n, o, s] = e, i({
                            root: t,
                            tag: n,
                            properties: o,
                            cb: s
                        })
                    },
                    closeTab: e => {
                        r.send("closeTab", null, e ? () => e() : null)
                    },
                    focusTab: e => {
                        r.send("focusTab", null, e ? () => e() : null)
                    },
                    setClipboard: (e, n, o) => {
                        r.send("setClipboard", { content: e, info: n, id: t }, o ? () => o() : null)
                    },
                    syntaxCheck: (e, t) => {
                        r.send("syntaxCheck", { code: e }, t)
                    },
                    of: i => {
                        const c = i.script, u = (() => {
                            let e = [];
                            const o = i.storage;
                            let r = 0;
                            const d = (e, t) => {
                                if ("string" != typeof e) return t;
                                {
                                    const n = e[0];
                                    switch (e = z(e, 1), n) {
                                        case"b":
                                            return "true" === e;
                                        case"n":
                                            return a.Number(e);
                                        case"x":
                                            return ye.UTF8.decode(ye.Base64.decode(e));
                                        case"o":
                                            try {
                                                return I(e)
                                            } catch (e) {
                                                U("values: parseValueFromStorage: " + e)
                                            }
                                            return t;
                                        default:
                                            return e
                                    }
                                }
                            }, l = (t, n, o, r) => {
                                n != o && v(e, e => {
                                    if (e && e.key == t && e.cb) try {
                                        e.cb(t, d(n), d(o), r)
                                    } catch (e) {
                                        s && $(`values: change listener of

                                        "${t}"
                                        failed with: ${e.message}`)
                                    }
                                })
                            }, u = e => {
                                p && p.postMessage({
                                    method: "saveStorageKey",
                                    uuid: c.uuid,
                                    key: e,
                                    value: o.data[e],
                                    id: t,
                                    ts: o.ts
                                })
                            };
                            var p = be.connect("values");
                            return p.onMessage.addListener(e => {
                                if (!e.storage) return;
                                const t = e.storage.data;
                                e.removed && (t[e.removed] = void 0), v(S(t), e => {
                                    const s = o.data[e], r = t[e];
                                    void 0 === r ? delete o.data[e] : o.data[e] = r, n && U(`values: message - config key ${e}: ${s} -> ${r}`), l(e, s, r, !0)
                                })
                            }), p.onDisconnect.addListener(() => {
                                s && U("values: port disconnected"), p = null
                            }), p.postMessage({
                                method: "addStorageListener", uuid: c.uuid, id: t
                            }), {
                                set: (e, t) => {
                                    const n = o.data[e];
                                    o.ts = pe(), o.data[e] = (e => {
                                        let t = (typeof e)[0];
                                        switch (t) {
                                            case"o":
                                                try {
                                                    e = t + P(e)
                                                } catch (e) {
                                                    return void U(e)
                                                }
                                                break;
                                            case"s":
                                                -1 === Z(e, J(8232)) && -1 === Z(e, J(8233)) || (t = "x", e = ye.Base64.encode(ye.UTF8.encode(e))), e = t + e;
                                                break;
                                            default:
                                                e = t + e
                                        }
                                        return e
                                    })(t), u(e), l(e, n, o.data[e], !1)
                                }, get: (e, t) => d(o.data[e], t), remove: e => {
                                    const t = o.data[e];
                                    o.ts = pe(), delete o.data[e], u(e), l(e, t, o.data[e], !1)
                                }, list: () => S(o.data),
                                registerChangeListener: (t, n) => {
                                    const o = ++r;
                                    return y(e, { id: o, key: t, cb: n }), o
                                }, unregisterChangeListener: t => {
                                    e = L(e, e => e.id !== t)
                                }
                            }
                        })(), p = (() => {
                            const e = [];
                            let n;
                            return {
                                register: o => {
                                    y(e, o), n || (n = be.connect("onurlchange"), n.onMessage.addListener(({ url: t }) => {
                                        t && v(e, e => e({ url: t }))
                                    }), n.postMessage({ method: "observeUrlChanges", uuid: c.uuid, id: t }))
                                }, unregister: t => {
                                    let o;
                                    t && (o = E(e, t)) > -1 && _(e, o, 1), n && 0 === e.length && (n.disconnect(), n = null)
                                }
                            }
                        })(), m = {
                            getText: e => {
                                for (let t = 0; t < c.resources.length; t++) {
                                    const n = c.resources[t];
                                    if (n.name == e && !n.failed) {
                                        try {
                                            if (null !== n.content) return ye.UTF8.decode(n.content)
                                        } catch (e) {
                                        }
                                        return ""
                                    }
                                }
                                return null
                            }, getURL: e => {
                                for (let t = 0; t < c.resources.length; t++) {
                                    const n = c.resources[t];
                                    if (n.name == e && !n.failed) {
                                        if (null === n.content) return "";
                                        try {
                                            return `data:${n.meta || "application/octet-stream"};base64,${ye.Base64.encode(n.content)}`
                                        } catch (e) {
                                        }
                                        return n.url
                                    }
                                }
                                return null
                            }
                        }, f = {
                            set: (e, t) => {
                                r.send("tabs", { action: "set", uuid: c.uuid, tab: e }, t ? () => t() : null)
                            }, get: e => {
                                r.send("tabs", {
                                    action: "get", uuid: c.uuid
                                }, e ? t => {
                                    e(t || {})
                                } : null)
                            }, getAll: e => {
                                r.send("tabs", { action: "list", uuid: c.uuid }, e ? t => {
                                    e(t || {})
                                } : null)
                            }
                        };
                        let w, x;
                        const T = (() => {
                            let e = 0;
                            const t = {}, o = {
                                register: (s, r, i) => {
                                    const d = "registerMenuCommand", l = ++e, u = be.connect(d);
                                    return u.onMessage.addListener(e => {
                                        "run" === e && a.setTimeout(r, 1)
                                    }), u.onDisconnect.addListener(() => {
                                        o.unregister(l)
                                    }), u.postMessage({
                                        method: "register",
                                        name: s,
                                        uuid: c.uuid,
                                        accessKey: i
                                    }), n && U(`env: ${d} ${h(r)}`), t[l] = u.disconnect, l
                                }, unregister: e => {
                                    let o
                                    ;n && U("env: unregisterMenuCommand " + e), (o = t[e]) && (o(), delete t[e])
                                }
                            };
                            return o
                        })(), C = (() => {
                            const e = (e, t) => ({ action: e, uuid: c.uuid, url: a.location.href, details: t });
                            return {
                                set: (t, n) => {
                                    r.send("cookie", e("set", t), n ? e => {
                                        n(e.error)
                                    } : null)
                                }, delete: (t, n) => {
                                    r.send("cookie", e("delete", t), n ? e => {
                                        n(e.error)
                                    } : null)
                                }, list: (t, n) => {
                                    r.send("cookie", e("list", t), n ? e => {
                                        n(e.cookies, e.error)
                                    } : null)
                                }
                            }
                        })();
                        return l[i.script.uuid] = l[i.script.uuid] || {
                            getInfo: () => {
                                if (w) return w;
                                const e = i.script, t = {
                                    id: 1, enabled: 1, hash: 1,
                                    fileURL: 1
                                }, n = { script: {} };
                                v(S(e), o => {
                                    t[o] || (n.script[o] = e[o])
                                });
                                const o = e.options.updateURL || e.options.fileURL;
                                return n.script["run-at"] = e.options.override.run_at || e.options.run_at, n.script.excludes = e.options.override.orig_excludes, n.script.includes = e.options.override.orig_includes, n.script.matches = e.options.override.orig_matches, n.script.grant = e.grant, n.script.unwrap = !1, n.scriptMetaStr = i.header, n.scriptSource = i.code, n.scriptWillUpdate = !!o, n.scriptUpdateURL = o, n.version = d.version,
                                    n.scriptHandler = "Tampermonkey", n.isIncognito = d.inIncognitoContext, n.isFirstPartyIsolation = d.isFirstPartyIsolation, n.downloadMode = d.downloadMode, w = n
                            },
                            registerMenuCommand: T.register,
                            unregisterMenuCommand: T.unregister,
                            download: o,
                            webRequest: (e, t) => {
                                const n = () => {
                                    x == o && (x = null), o = null
                                };
                                x && x.disconnect();
                                var o = x = be.connect("webRequest");
                                return t && o.onMessage.addListener(e => {
                                    t(e.type, e.message || "ok", e.details)
                                }), o.onDisconnect.addListener(n), o.postMessage({ rules: e, uuid: c.uuid }), {
                                    abort: () => {
                                        o && o.disconnect(), n()
                                    }
                                }
                            },
                            openInTab: e,
                            setValue: u.set,
                            getValue: u.get,
                            deleteValue: u.remove,
                            listValues: u.list,
                            addUrlChangeListener: p.register,
                            removeUrlChangeListener: p.unregister,
                            addValueChangeListener: u.registerChangeListener,
                            removeValueChangeListener: u.unregisterChangeListener,
                            getResourceText: m.getText,
                            getResourceURL: m.getURL,
                            notification: e => {
                                const n = {};
                                v(S(e), t => {
                                    n[t] = e[t]
                                }), n.id = t, n.text || n.highlight ? r.send("notification", n, e => {
                                    n.onclick && e.clicked && n.onclick(), n.ondone && n.ondone(!0 === e.clicked)
                                }) : $("GM_notification: neither a message text nor highlight options were given!")
                            },
                            xmlhttpRequest: e => {
                                const n = "GM_xmlhttpRequest";
                                let o = !1;
                                const s = e.context;
                                delete e.context;
                                const r = (() => {
                                    const e = {};
                                    v(S(a.XMLHttpRequest.__proto__), t => {
                                        e[t] = !0
                                    });
                                    const t = () => {
                                    };
                                    return v(S(a.XMLHttpRequest), n => {
                                        e[n] || (t[n] = a.XMLHttpRequest[n])
                                    }), t
                                })();
                                let i = () => {
                                    o = !0
                                };
                                const l = (e, t) => {
                                    t = t || {}, e && a.setTimeout(() => {
                                        t.__proto__ = r, g(e, t, [t])
                                    }, 1)
                                };
                                "object" == typeof e.url && e.url.href && (e.url = e.url.href);
                                const u = (e, t) => {
                                    let n, o, s, r = _e(e);
                                    if ("Blob" === r || "File" === r) ye.blob2str(e, n => {
                                        t({
                                            type: r,
                                            value: n,
                                            meta: e.type,
                                            name: e.name,
                                            lastModified: e.lastModified
                                        })
                                    }); else if ("FormData" === r) if (o = e.keys && e.getAll ? e.keys() : null, o) {
                                        let r;
                                        const a = {};
                                        for (n = []; !(r = o.next()).done;) y(n, r.value);
                                        s = () => {
                                            if (n.length) {
                                                const t = b(n);
                                                let o = e.getAll(t);
                                                -1 === Z(t, /\[\]$/) && (o = o[0]), u(o, e => {
                                                    a[t] = e, s()
                                                })
                                            } else t({ type: "FormData", value: a })
                                        }, s()
                                    } else t({ error: r }); else if (!(r = _e(e)) || "Array" !== r && "Object" !== r) t({ value: e }); else {
                                        let i, c, d = 0;
                                        o = 0,
                                            "Object" === r ? (n = S(e), c = e => e < n.length ? n[e] : null, i = {}) : (c = t => t < e.length ? t : null, i = []), s = () => {
                                            const n = c(d);
                                            null === n ? t({ type: r, value: i }) : u(e[n], e => {
                                                e.error ? t(e) : (i[n] = e, d++, o++ < 1024 ? s() : (o = 0, a.setTimeout(s, 1)))
                                            })
                                        }, s()
                                    }
                                }, p = (e, t, o, s) => {
                                    let r;
                                    if ("text" == o) r = "document" == t ? e.document : e; else if ("arraybuffer" == t) r = ye.str2arrbuf(e); else if ("blob" == t) r = new a.Blob([ye.str2arrbuf(e)], { type: s }); else if ("json" == t) r = I(e); else {
                                        if ("document" == t) {
                                            if (e.error) return void $(n + ":", e.error);
                                            {
                                                const t = new a.DOMParser, n = K(e.contentType, ";")[0];
                                                return oe(t, e.document, n)
                                            }
                                        }
                                        r = e
                                    }
                                    return r
                                };
                                let m = !0;
                                return (t => {
                                    if (e.url) {
                                        const n = e.url.substr(0, 5);
                                        if (-1 != ["data:", "blob:"].indexOf(n)) return m = !1, t()
                                    }
                                    if (!e.data) return t();
                                    u(e.data, o => {
                                        o.error ? (m = !1, $(n + ":", `unable to handle data type ${o.error}. Going to use default xhr as fallback.`)) : (e.binary && (o.type = "Blob"), e.data = o, e.data_type = "typified"), t()
                                    })
                                })(() => {
                                    if (o) return o = !1, void l(e.onabort);
                                    if (m) {
                                        let o = be.connect("xhr"), r = []
                                        ;e.headers && v(S(e.headers), t => {
                                            "cookie" === ee(t) && (e.cookie = e.headers[t], delete e.headers[t])
                                        }), o.postMessage({
                                            method: "xhr",
                                            details: e,
                                            callbacks: {
                                                onloadstart: !!e.onloadstart,
                                                onload: !!e.onload,
                                                ondone: !!e.onloadend,
                                                onreadystatechange: !!e.onreadystatechange,
                                                onerror: !0,
                                                onabort: !!e.onabort,
                                                ontimeout: !!e.ontimeout,
                                                onprogress: !!e.onprogress,
                                                onpartial: !0
                                            },
                                            id: t,
                                            url: a.location.href,
                                            uuid: c.uuid
                                        }), o.onMessage.addListener(t => {
                                            if (t.data && s && (t.data.context = s), t.data && t.onload) {
                                                if (r.length && (t.data.response_data = M(r, ""), r = null), t.data.response_data) {
                                                    const o = t.data.response_data, s = t.data;
                                                    v(["response_data"], e => {
                                                        delete t.data[e]
                                                    });
                                                    const r = {
                                                        response: (t, n) => {
                                                            const o = e.responseType ? ee(e.responseType) : "";
                                                            let s = "binary/octet-stream";
                                                            return n && (s = (e => {
                                                                const t = {};
                                                                return e && e.split("\n").forEach(e => {
                                                                    const n = e.match(/^([^:]+): ?(.*)/);
                                                                    n && (t[n[1].toLowerCase()] = n[2] || "")
                                                                }), t
                                                            })(n.responseHeaders)["content-type"] || s), p(t, o, null, s)
                                                        },
                                                        responseText: t => {
                                                            const n = e.responseType ? ee(e.responseType) : "";
                                                            return p(t, n, "text")
                                                        },
                                                        responseXML: e => p({
                                                            document: e,
                                                            contentType: "text/xml"
                                                        }, "document")
                                                    };
                                                    v(S(r), e => {
                                                        O(t.data, e, {
                                                            get: () => {
                                                                try {
                                                                    return r[e](o, s)
                                                                } catch (e) {
                                                                    $(n + ":", e)
                                                                }
                                                            }
                                                        })
                                                    })
                                                }
                                                l(e.onreadystatechange, t.data), l(e.onload, t.data)
                                            } else if (t.onreadystatechange) 4 != t.data.readyState && l(e.onreadystatechange, t.data); else if (t.onpartial) y(r, t.data.partial); else if (t.onerror) t.exception && j(t.exception),
                                                l(e.onerror, t.data); else if (t.onabort) l(e.onabort, t.data); else if (t.ondone) l(e.onloadend, t.data); else {
                                                const n = L(["onloadstart", "onprogress", "ontimeout"], e => !!t[e])[0] || "onerror";
                                                l(e[n], t.data)
                                            }
                                        }), o.onDisconnect.addListener(() => {
                                            o = null
                                        }), i = () => {
                                            o && o.postMessage({ cancel: !0 })
                                        }
                                    } else {
                                        const t = new a.XMLHttpRequest;
                                        void 0 === e.async && (e.async = !0), se(t, e.method, e.url, e.async, e.user, e.password), e.headers && v(S(e.headers), n => {
                                            re(t, n, e.headers[n])
                                        }), e.overrideMimeType && ae(t, e.overrideMimeType),
                                        e.responseType && (t.responseType = e.responseType), v(["abort", "error", "load", "loadstart", "progress", "readystatechange", "timeout"], n => {
                                            t["on" + n] = () => {
                                                let o = "", r = e.url;
                                                if (t.readyState > 2 && (o = ie(t), 4 == t.readyState)) {
                                                    let e;
                                                    o && (o = Q(o, /TM-finalURL[0-9a-zA-Z]*\: .*[\r\n]{1,2}/, ""));
                                                    try {
                                                        e = ce(t, "TM-finalURL" + d.short_id)
                                                    } catch (e) {
                                                    }
                                                    e && (r = e)
                                                }
                                                const a = {
                                                        readyState: t.readyState,
                                                        status: "",
                                                        statusText: "",
                                                        responseHeaders: o,
                                                        finalUrl: r,
                                                        context: s
                                                    }
                                                ;4 == t.readyState && (t.responseType ? a.response = t.response : (a.responseText = t.responseText, a.responseXML = t.responseXML), a.status = t.status, a.statusText = t.statusText), l(e["on" + n], a)
                                            }
                                        }), de(t, e.data), i = () => {
                                            le(t)
                                        }
                                    }
                                }), {
                                    abort: () => {
                                        i()
                                    }
                                }
                            },
                            cookie: C,
                            setTab: f.set,
                            getTab: f.get,
                            getTabs: f.getAll
                        }, l[i.script.uuid]
                    }
                }
            })();
            var Le = (() => {
                const t = (e, t, n, o, s) => {
                        const r = t[n], c = typeof r;
                        return o && "string" === c ? t[n] = new a.Function(r) : s && "function" === c && (t[n] = function () {
                            return g(r, s, arguments)
                        }), g(e, i, t)
                    }, c = (e, t, n, o) => {
                        const s = {
                            attrChange: 0,
                            attrName: null,
                            bubbles: !0,
                            cancelBubble: !1,
                            cancelable: !1,
                            clipboardData: void 0,
                            currentTarget: null,
                            defaultPrevented: !1,
                            eventPhase: 0,
                            newValue: null,
                            prevValue: null,
                            relatedNode: null,
                            returnValue: !0,
                            srcElement: null,
                            target: null,
                            timeStamp: pe()
                        }, r = "string" == typeof n ? new a.Function(n) : n, i = new Event;
                        v(S(s), e => {
                            i[e] = s[e]
                        }), v(S(t), e => {
                            i[e] = t[e]
                        }), i.type = e, g(r, o, [i])
                    }, h = (e, t, s) => {
                        (n || o) && U("env: postLoadEvent!"), s = s || document;
                        const r = {
                            attrName: "null",
                            newValue: "null",
                            prevValue: "null",
                            eventPhase: a.Event.AT_TARGET,
                            attrChange: a.MutationEvent.ADDITION,
                            target: s,
                            relatedNode: s,
                            srcElement: s
                        };
                        c(fe, r, e, t)
                    }, b = (e, t, s) => {
                        (n || o) && U("env: postDomEventListener!"), s = s || document;
                        const r = {
                            attrName: "null",
                            newValue: "null",
                            prevValue: "null",
                            eventPhase: a.Event.AT_TARGET,
                            attrChange: a.MutationEvent.ADDITION,
                            target: s,
                            relatedNode: s,
                            srcElement: s
                        };
                        c(me, r, e, t)
                    }, L = (e, t) => (void 0 === t && (t = 100), t && e && (e == document || L(e.parentNode, t - 1))),
                    D = (() => {
                        let t = null;
                        return n => {
                            t || (t = { instance: n, is_open: !1 },
                                v(["write", "writeln", "open", "close"], o => {
                                    t[o] = n[o], n[o] = function () {
                                        let s = !1;
                                        -1 != E(["write", "writeln", "open"], o) ? t.is_open ? s = !0 : t.is_open = !0 : "close" === o && (t.is_open = !1), !s && t.is_open && r.send("document.write");
                                        const a = document.documentElement, i = g(t[o], n, arguments);
                                        if (!s && t.is_open) return a !== document.documentElement && (t.instance !== n && (t = null, D(document)), v(e.write_listeners, e => {
                                            e(document)
                                        })), i
                                    }
                                }))
                        }
                    })(), I = {}, V = [], X = [], J = (r, i, c) => {
                        let d;
                        if (X.forEach(e => {
                            e.object === r && (d = !0)
                        }), !d) {
                            const d = {
                                object: r,
                                addEventListener: r.addEventListener, removeEventListener: r.removeEventListener
                            };
                            X.push(d);
                            const l = [], p = e => {
                                for (let t = 0; t < l.length; t++) if (l[t].fn === e) return t
                            };
                            r.removeEventListener = function (e, t, n) {
                                let o, s, r;
                                if (n = !!n, void 0 === (o = p(t)) || !(s = l[o].listeners)) return g(d.removeEventListener, this, arguments);
                                (r = s[`${e}-${n}`]) && (g(d.removeEventListener, this, [e, r, n]), delete s[`${e}-${n}`]), R(s).length || _(l, o, 1)
                            };
                            const f = (e, t, n, o) => {
                                if (t) {
                                    let s = V.length
                                    ;const r = a.parseInt(M([n == me ? 1 : 2, o ? 1 : 2, o ? t : 3 - t, pe()], "0"));
                                    for (let e = 0; e < V.length; e++) {
                                        const t = V[e];
                                        if (!t || !t.prio || t.prio > r) {
                                            s = e;
                                            break
                                        }
                                    }
                                    _(V, s, 0, { prio: r, fn: e })
                                } else y(V, { fn: e })
                            };
                            r.addEventListener = function (r, u, v) {
                                (n || o) && U("env: addEventListener " + r);
                                const w = this;
                                if (u && (1 == i && r == fe || r == me || r == he)) {
                                    let n, o;
                                    v = !!v;
                                    try {
                                        try {
                                            throw new a.Error
                                        } catch (e) {
                                            const t = /tms_[0-9a-f_]+/, o = e.stack || e.stacktrace;
                                            if (o) {
                                                const e = K(o, "\n");
                                                for (let o, s = 0; s < e.length && (!(o = W(e[s], t)) || !(n = I[o[0]])); s++) ;
                                            }
                                        }
                                    } catch (e) {
                                        s && j("env: Error: event " + r, e)
                                    }
                                    if (n && "document-idle" !== n.run_at) {
                                        let t = null;
                                        if (r == fe ? e.pageLoaded && (t = () => {
                                            h(u, w, w.document || w)
                                        }, f(t, i, r, v)) : r == me && e.domContentLoaded && (t = () => {
                                            b(u, w, w.document || w)
                                        }, f(t, i, r, v)), t) {
                                            const e = () => {
                                                if (V.length) {
                                                    const e = x(V);
                                                    e && e.fn && e.fn()
                                                }
                                            };
                                            return void a.setTimeout(e, 1)
                                        }
                                    }
                                    const _ = function (e) {
                                        return t(m, [u, this, c(e)], 0, !0, w)
                                    };
                                    return void 0 === (o = p(u)) && (o = l.length, y(l, {
                                        fn: u,
                                        listeners: {}
                                    })), l[o].listeners[`${r}-${v}`] = _, g(d.addEventListener, w, [r, _, v])
                                }
                                return g(d.addEventListener, w, arguments)
                            };
                            try {
                                const e = () => "[native code]";
                                [r.addEventListener, r.removeEventListener].forEach(t => {
                                    u(t, "toString", e)
                                })
                            } catch (e) {
                            }
                        }
                    }, z = e => {
                        e.__evaluate || (C(e, {
                            __evaluate: {
                                value: e.evaluate,
                                enumerable: !1,
                                configurable: !1
                            }
                        }), e.evaluate = function (e, t, o, s, r) {
                            let a;
                            if (n && U("env: document.evaluate " + e), t || (t = this), "undefined" != typeof XPathResult) {
                                let i = e, c = null;
                                try {
                                    a = this.__evaluate(i, t, o, s, r)
                                } catch (e) {
                                    c = e
                                }
                                let d = !1;
                                try {
                                    d |= !!a.snapshotLength
                                } catch (e) {
                                }
                                try {
                                    d |= !!a.singleNodeValue
                                } catch (e) {
                                }
                                if (d || "." == e[0] || L(t)) n && U("env: queried document for " + i); else {
                                    n && U("env: query added elem for " + i), i = ("/" == e[0] ? "." : "./") + e;
                                    try {
                                        a = this.__evaluate(i, t, o, s, r)
                                    } catch (e) {
                                    }
                                }
                                if (n && U("env: query returned ", a, c), !d && c) throw c
                            } else n && U("env: XPathResult == undefined, but selectNodes via ", e), a = t.selectNodes(e);
                            return a
                        }, y(xe, () => {
                            e.evaluate = e.__evaluate
                        }))
                    }, Z = () => new Window, Y = (n, o, s) => {
                        const r = ["eval"], c = {};
                        v(S(n), e => {
                            n[e].context_prop && (c[(e.split(".") || [])[1]] = !0)
                        })
                        ;const m = (e, t, n, o) => {
                            const s = n => n === t ? e : n, u = (n, o, r, a) => {
                                let i, c, d;
                                const l = { enumerable: !0, configurable: !0 };
                                (d = "function" == typeof o) ? l.get = o : l.get = function () {
                                    return a && a.get_cb && g(a.get_cb, this, [arguments, u]), c ? i : s(t[n])
                                }, "function" == typeof r ? l.set = r : d && !r || (l.set = function (t) {
                                    a && a.overwrite ? O(e, n, {
                                        value: t,
                                        enumerable: !0,
                                        configurable: !0
                                    }) : (i = t, c = !0)
                                }), O(e, n, l)
                            };
                            v(S(o), e => {
                                n[e] = n[e] || !1 !== o[e]
                            });
                            const p = d.sandbox_allow_getters, m = d.detect_constructors_by_keys;
                            return v(S(n), d => {
                                let h, v, w, _, y, b, x, M, L, T, C, R, k, D;
                                try {
                                    let I;
                                    (I = A(t, d)) && I.get && (y = !l(I.get));
                                    try {
                                        if (!(v = o[d]) || v.needs_grant && !0 !== c[d]) if ((h = n[d]) && h.event) k = !0; else if (I && I.get) if (y) {
                                            if (!p) return;
                                            x = !0
                                        } else x = () => s(g(I.get, i)); else "function" == (_ = typeof (w = t[d])) ? h.proto ? b = !0 : !I.enumerable && (m && S(w).length || !l(w)) || -1 != E(r, d) || !("bind" in w) ? T = !0 : C = !0 : "number" === _ || "string" === _ ? x = !0 : T = !0; else v.wrap ? (b = !0, R = v.that) : v.direct ? T = !0 : v.enhance ? D = v.enhance : (v.get || v.set) && (x = v.get, M = v.set, L = v.opts)
                                    } catch (e) {
                                        x = M = !0
                                    }
                                    if (D) e[d] = D; else {
                                        if (y && !p) return;
                                        k ? (t => {
                                            let n;
                                            const o = t.substr(2);
                                            let s;
                                            O(e, t, {
                                                get: () => n, set: t => {
                                                    n = t, n && !s ? (s = function () {
                                                        if ("function" == typeof n) return g(n, e, arguments)
                                                    }, a.addEventListener(o, s, !0)) : !n && s && (a.removeEventListener(o, s, !0), s = null)
                                                }
                                            })
                                        })(d) : x || M ? u(d, x, M, L) : b ? e[d] = ((e, t, n, o) => {
                                            n || (n = e);
                                            const s = e[t], r = function () {
                                                let e = g(s, n, arguments);
                                                return o && (e = o(e)), e
                                            };
                                            return r.__proto__ = s, r.prototype = s.prototype, r
                                        })(t, d, R, s) : T ? e[d] = s(t[d]) : C && (e[d] = f(t[d], t))
                                    }
                                } catch (e) {
                                    $(`env: error while creating a new sandbox[${d}]: ${e.message}`)
                                }
                            }), e
                        };
                        return (() => {
                            const n = Z(), r = function (e, n) {
                                if ("urlchange" != e || !c.onurlchange) return t(a.addEventListener, arguments, 1, !0);
                                o.addUrlChangeListener(n)
                            }, d = function (e, n) {
                                if ("urlchange" != e || !c.onurlchange) return t(a.removeEventListener, arguments, 1, !0);
                                o.removeUrlChangeListener(n)
                            }, l = {
                                setTimeout: {
                                    enhance: function () {
                                        return t(a.setTimeout, arguments, 0, !0, n)
                                    }
                                },
                                setInterval: {
                                    enhance: function () {
                                        return t(a.setInterval, arguments, 0, !0, n)
                                    }
                                },
                                close: { needs_grant: !0, get: () => a.self == a.top ? e => Me.closeTab(e) : a.close },
                                focus: { needs_grant: !0, get: () => e => Me.focusTab(e) },
                                onurlchange: (f = null, {
                                    needs_grant: !0, get: () => f, set: e => {
                                        f && d("urlchange", f), r("urlchange", f = e)
                                    }
                                }),
                                location: {
                                    get: !0, set: e => {
                                        a.location.href = e
                                    }
                                },
                                name: {
                                    get: () => p(i, "name"), set: e => {
                                        u(i, "name", e)
                                    }
                                },
                                event: { get: !0, set: !0, opts: { overwrite: !0 } },
                                document: {
                                    get: () => {
                                        const e = a.document;
                                        return s(e), e
                                    }
                                },
                                clearInterval: { get: () => a.clearInterval },
                                clearTimeout: { get: () => a.clearTimeout },
                                addEventListener: { enhance: r },
                                removeEventListener: { enhance: d }
                            };
                            var f;
                            (() => {
                                let e = q(a.frames.length, 7);
                                l.length = {
                                    get: !0, opts: {
                                        get_cb: (t, n) => {
                                            const o = a.frames.length;
                                            for (let t = e; t < o; t++) n(a.String(t), { get: !0 });
                                            e = q(o, e)
                                        }
                                    }
                                };
                                for (let t = 0; t < e; t++) l[a.String(t)] = { get: !0 }
                            })(), v(S(a), e => {
                                a[e] != i && (l[e] = l[e] || { enhance: a[e] })
                            });
                            const h = m(n, i, e.windowProps, l), w = {
                                context: h, filter: e => e == i ? h : e, filterEvent: function (e) {
                                    const t = {};
                                    for (const n in e) if ("function" == typeof e[n]) t[n] = (() => {
                                        const t = n;
                                        return function () {
                                            return g(e[t], e, arguments)
                                        }
                                    })(); else {
                                        const o = w.filter(e[n]);
                                        t[n] = o
                                    }
                                    return t
                                }
                            };
                            return w
                        })()
                    }, ee = () => ((e, t, n) => {
                        const o = k(t);
                        return v(S(o), n => {
                            const s = o[n];
                            s && s.get && !l(s.get) || ("function" == typeof t[n] ? e[n] = f(t[n], t) : (() => {
                                const o = n;
                                O(e, o, { get: () => t[o] })
                            })())
                        }), v(S(n), t => {
                            e[t] = n[t]
                        }), e
                    })({}, a.console, { debug: F, log: U, info: N, warn: $, error: j });
                return {
                    create: t => {
                        const o = t.script, r = {}, c = -1 !== E(o.grant, "none"), l = `${o.namespace}_${c}`;
                        void 0 === e.props[l] && (e.props[l] = { sandboxes: {}, elements: {} }, y(xe, () => {
                            e.props[l] = null
                        })), r.CDATA = {
                            value: function (e) {
                                this.src = e, this.toString = function () {
                                    return this.src
                                }, this.toXMLString = this.toString
                            }
                        }, r.uneval = {
                            value: e => {
                                try {
                                    return `\\$1 = ${P(e)};`
                                } catch (e) {
                                    U(e)
                                }
                            }
                        }, r.define = { value: void 0 }, r.module = { value: void 0 }, r.exports = { value: void 0 };
                        const p = {}, m = {}, f = {}, h = {}, _ = Me.of(t);
                        if (c) ; else {
                            r.window = { value: "context", overwrite: !0 };
                            const e = { window: i };
                            v(S(e), t => {
                                const n = Q(t, /^(.)/g, e => te(e));
                                r["unsafe" + n] = { value: e[t] }
                            }), r.console = { value: ee() }, r.cloneInto = { value: e => e },
                                r.exportFunction = { value: (e, t, n) => (n && void 0 !== n.defineAs && (t[n.defineAs] = e), e) }, r.createObjectIn = {
                                value: (e, t) => {
                                    const n = {};
                                    return t && void 0 !== t.defineAs && (e[t.defineAs] = n), n
                                }
                            }, p.addStyle = Me.addStyle, p.addElement = Me.addElement, p.deleteValue = _.deleteValue, p.listValues = _.listValues, p.getValue = _.getValue, p.setValue = _.setValue, p.log = Me.log, p.registerMenuCommand = _.registerMenuCommand, p.unregisterMenuCommand = _.unregisterMenuCommand, p.openInTab = _.openInTab,
                                p.addValueChangeListener = _.addValueChangeListener, p.removeValueChangeListener = _.removeValueChangeListener, h.xmlhttpRequest = _.xmlhttpRequest, h.download = _.download, p.webRequest = _.webRequest, m.getTab = _.getTab, p.setTab = _.setTab, p.saveTab = _.setTab, m.getTabs = _.getTabs, p.getResourceText = _.getResourceText, h.getResourceURL = _.getResourceURL, m.setClipboard = {
                                cb: 2,
                                fn: Me.setClipboard
                            };
                            const t = e => function () {
                                const t = G(g(e, this, arguments));
                                return u(t, "then", e => H(t, e)), u(t, "catch", e => B(t, e)), t
                            }, n = (e, t) => {
                                let n
                                ;const o = new ge((o, s) => {
                                    const r = {}, a = t.onload, i = t.ontimeout, c = t.onerror;
                                    v(S(t), e => {
                                        r[e] = t[e]
                                    }), r.onerror = function (e) {
                                        s(e), c && g(c, this, arguments)
                                    }, r.ontimeout = function (e) {
                                        s(e), i && g(i, this, arguments)
                                    }, r.onload = function (e) {
                                        o(e), a && g(a, this, arguments)
                                    };
                                    const d = e(r).abort;
                                    !0 === n ? d() : n = d
                                });
                                return u(o, "abort", () => {
                                    n ? n() : n = !0
                                }), o
                            };
                            v(S(h), e => {
                                f["GM_" + e] = { value: h[e] }
                            }), v(S(m), e => {
                                const t = m[e];
                                f["GM_" + e] = { value: t.fn || t }, f["GM." + e] = {
                                    value: function () {
                                        let e, n = [];
                                        if (void 0 === t.cb) e = t; else {
                                            e = t.fn
                                            ;
                                            for (let e = 0; e < t.cb; e++) n.push(arguments[e] || void 0)
                                        }
                                        return new ge(t => {
                                            g(e, this, [...n, t])
                                        })
                                    }
                                }
                            }), v(S(p), e => {
                                const n = p[e];
                                f["GM_" + e] = { value: n }, f["GM." + e] = { getter: () => t(n) }
                            }), f["GM.getResourceUrl"] = { getter: () => t(h.getResourceURL) }, f["GM.xmlHttpRequest"] = { value: e => n(h.xmlhttpRequest, e) }, f["GM.download"] = { value: e => n(h.download, e) };
                            const s = (e, t, n, s) => {
                                let r = null, a = null;
                                const i = {};
                                "object" == typeof e && (a = e), a ? (v(["timeout", "text", "image", "title", "highlight", "silent"], e => {
                                    i[e] = a[e]
                                }), r = a.ondone,
                                    s = a.onclick, "function" == typeof t && (r = t)) : (i.image = n, i.title = t, i.text = e), i.text && (i.image = i.image || o.icon64 || o.icon, i.title = i.title || o.name), i.onclick = s, i.ondone = r, _.notification(i)
                            };
                            f.GM_notification = { value: s }, f["GM.notification"] = {
                                value: e => "object" != typeof e ? $("GM.notification(details): received no details") : new ge(t => {
                                    let n = {};
                                    v(S(e), t => {
                                        n[t] = e[t]
                                    });
                                    const o = n.ondone;
                                    n.ondone = (...e) => {
                                        o && o(...e), t(...e)
                                    }, s(n)
                                })
                            }, f.GM_cookie = {
                                value: (() => {
                                    const e = _.cookie, t = (t, n, o) => (e[t] || (() => {
                                        }))(n, o)
                                    ;
                                    return v(S(e), n => {
                                        t[n] = e[n]
                                    }), t
                                })()
                            }, f["GM.cookie"] = {
                                value: (() => {
                                    const e = _.cookie, t = (e, t) => new ge((n, o) => {
                                        "list" == e ? f.GM_cookie.value(e, t, (e, t) => {
                                            t ? o(t) : n(e)
                                        }) : f.GM_cookie.value(e, t, e => {
                                            e ? o(e) : n()
                                        })
                                    });
                                    return v(S(e), e => {
                                        t[e] = n => t(e, n)
                                    }), t
                                })()
                            }, f["window.close"] = { context_prop: !0 }, f["window.focus"] = { context_prop: !0 }, f["window.onurlchange"] = { context_prop: !0 }
                        }
                        f.GM_info = f["GM.info"] = { getter: _.getInfo };
                        const b = {};
                        var x, L, R, A;
                        r.GM = { value: b, protect: !0 }, x = r, L = o.grant, R = f, void 0 === (A = (e, t) => {
                            if ("GM." !== e.substr(0, 3)) return t.protect = !0, t;
                            e = e.split(".")[1], O(b, e, { get: t.getter ? t.getter : () => t.value })
                        }) && (A = (e, t) => t), v(T(["GM_info", "GM.info"], L), e => {
                            let t;
                            const n = R[e];
                            n && (t = A(e, n)) && (x[e] = t)
                        }), o.options.compat_prototypes && ((n || s) && U("env: option: add toSource"), a.Object.prototype.toSource || C(a.Object.prototype, {
                            toSource: {
                                value: function () {
                                    const e = _e(this);
                                    if ("String" === e) return `(String("${Q(this, new a.RegExp('"', "g"), '\\"')}"))`;
                                    if ("Number" === e) return `(Number("${a.Number(this)}"))`
                                        ;
                                    if ("Array" === e) {
                                        let e = "(new Array(";
                                        for (let t = 0; t < this.length; t++) {
                                            const n = this[t], o = _e(n);
                                            e += "Null" === o ? "null" : "Undefined" === o ? "undefined" : this[t].toSource(), t + 1 < this.length && (e += ",")
                                        }
                                        return e += "))", e
                                    }
                                    return `JSON.parse(unescape("${a.escape(P(this))}"))`
                                }, enumerable: !1, writable: !0, configurable: !0
                            }
                        }), (n || s) && U("env: option: add some array generics"), v(["indexOf", "lastIndexOf", "filter", "forEach", "every", "map", "some", "slice"], e => {
                            if ("function" != typeof a.Array[e]) {
                                const t = {};
                                t[e] = {
                                    value: function (t) {
                                        return g(a.Array.prototype[e], t, g(w.wrappedJSObject, arguments, [1]))
                                    }, enumerable: !1, writable: !0, configurable: !0
                                }, C(a.Array, t)
                            }
                        }));
                        let k, N = "";
                        if (c) k = Z(); else {
                            const e = Y(r, _, t => {
                                z(t), D(t), J(t, 2, e.filterEvent)
                            }), t = { run_at: o.options.run_at, uuid: o.uuid };
                            N = "tms_" + Q(o.uuid, /-/g, "_"), ((e, t) => {
                                I[e] = t
                            })(N, t), J(e.context, 1, e.filterEvent), k = e.context
                        }
                        e.props[l].sandboxes[o.uuid] = k, e.props[l].elements[o.uuid] = r, (n || s) && F(`env: execute script ${o.name} @ the ${c ? "un" : ""}safe context now!`),
                            ((t, n, o, r, i, c) => {
                                let l = null;
                                const p = () => "[Tampermonkey property]";
                                try {
                                    const s = r.sandboxes[t.uuid], f = ["context", "fapply"], h = [void 0, void 0],
                                        w = r.elements[t.uuid];
                                    let _;
                                    v(S(w), e => {
                                        const t = w[e];
                                        t.overwrite ? (y(f, e), y(h, t.value)) : t.context_prop || (y(f, e), y(h, "context." + e), t.getter ? O(s, e, { get: t.getter }) : s[e] = t.value), t.protect && s[e] && u(s[e], "toString", p)
                                    }),
                                        l = M(
                                            ["((context, fapply, console) => {", "with (context) {", "(module => {", '"use strict";', "try {", d.measure_scripts ? `console.time("${_ = `SCRIPT RUN TIME[${t.name.replace(/\W+/g, " ")}]`}");\n` : "", "fapply(module, context, [", M(h, ","), "]);", d.measure_scripts ? `console.timeEnd("${_}");\n` : "", "} catch (e) {", "if (e.message && e.stack) {", "console.error(\"ERROR: Execution of script '", (m = t.name,
                                                Q(m, new a.RegExp("[\"']", "g"), "\\$1")), "' failed! \" + e.message);", 'console.log(e.stack.replace(/(\\\\(eval at )?<anonymous>[: ]?)|([\\s.]*at Object.tms_[\\s\\S.]*)/g, ""));', "} else {", "console.error(e);", "}", "}", "})", "(async function ", i, "(", M(f, ","), ") {", d.enforce_strict_mode ? '"use strict";\n' : "", o, n, "\n", "})", "}", "})(that.context, that.fapply, that.console);\n", c ? `//# sourceURL=${c}\n` : ""
                                            ], "");
                                    const b = { context: s, fapply: g, console: ee() };
                                    e.E_u(l, b)
                                } catch (e) {
                                    return void Me.syntaxCheck(M([o, n], ""), r => {
                                        let i = "";
                                        if (r.errors) {
                                            const e = K(o, "\n").length - 1;
                                            let t = "";
                                            r.errors && v(S(r.errors), n => {
                                                const o = r.errors[n];
                                                if (o && o.line >= 0 && o.reason) {
                                                    const n = o.line;
                                                    t += M([n > e ? "script:" : "require:", " (", o.code, ") ", Q(o.reason, /.$/, ""), " on line: ", n > e ? n - e : n, " at character: ", o.character, "\n"], "")
                                                }
                                            }), i = "JSHINT output:\n" + t
                                        } else i = n;
                                        const c = e.stack ? Q(e.stack, /(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g, "") : ""
                                        ;s || r.errors ? j(`Syntax error @ "${t.name}"!\n##########################\n${i}##########################\n\n${c}`) : j(`Syntax error @ "${t.name}"!\n\n`, c), a.setTimeout(() => {
                                            throw e
                                        }, 1)
                                    })
                                }
                                var m
                            })(o, t.code, t.requires, e.props[l], N, t.source_url)
                    }
                }
            })();
            (() => {
                if (!d.external_connect) return;
                let e;
                if (e = i.external) {
                    const t = (e, t) => {
                        r.send("external.message", e, t)
                    };
                    try {
                        C(e, {
                            Tampermonkey: {
                                get: () => ({
                                    getVersion: e => {
                                        t({ method: "getVersion" }, e)
                                    }, isInstalled: (e, n, o) => {
                                        "function" == typeof n && (o = n, n = null), t({
                                            method: "isInstalled", script: { name: e, namespace: n }
                                        }, o)
                                    }
                                }), configurable: !0
                            }
                        })
                    } catch (e) {
                    }
                }
            })(), r.onMessage.setListener(({ method: t, args: n }) => {
                "load" == t ? (e.pageLoaded = !0, ve.runListeners()) : "DOMContentLoaded" == t ? (e.domContentLoaded = !0, ve.runListeners()) : "setForeignAttr" == t ? i[n.attr] = n.value : "port.message" == t ? be.message(n) : "executeScript" == t ? ve.run(n) : "cleanup" == t ? r.cleanup() : s && U("env: unkown method", t, n)
            }), s && U("Tampermonkey started"), v(e.scripts, e => {
                ve.run(e)
            })
        }, r = e => {
            const t = e.rea;
            let n
            ;const r = (() => {
                const e = e => ({}.toString.apply(e).match(/\s([a-z|A-Z]+)/)[1]), t = n => {
                    if ("Object" == e(n)) {
                        const e = [];
                        for (const o in n) n.hasOwnProperty(o) && e.push(o + ":" + t(n[o]));
                        return "{" + e.join(",") + "}"
                    }
                    if ("Array" == e(n)) {
                        const e = [];
                        return n.forEach(n => {
                            e.push(t(n))
                        }), "[" + e.join(",") + "]"
                    }
                    return void 0 === n ? "undefined" : null === n ? "null" : "Function" == e(n) ? n.toString() : '"' + n.toString() + '"'
                };
                return {
                    createUUID: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                        const t = 16 * Math.random() | 0
                        ;
                        return ("x" == e ? t : 3 & t | 8).toString(16)
                    }), processQueue: e => {
                        let t;
                        for (; t = e.shift();) t()
                    }, serialize: t, toType: e
                }
            })(), a = (() => {
                const e = { _content: !0, JSHINT: !0 },
                    t = new RegExp("(" + ["webkitStorageInfo", "webkitIDB.*", "webkitIndexedDB", "webkitOfflineAudioContext", "webkitAudioContext", "webkitURL", "webkitSpeech.*", "Bluetooth.*", "MIDI.*", "StorageManager"].join("|") + ")");
                return () => {
                    const n = {};
                    let o, s;
                    const r = Object.getOwnPropertyNames(window), a = ((e, t) => {
                        for (; (e = Object.getPrototypeOf(e)) && e !== Object.prototype;) t = t.concat(Object.getOwnPropertyNames(e));
                        return t
                    })(window, []);
                    for (o = 0, s = null; s = a[o]; o++) e[s] || t.exec(s) || (s.length > 2 && "on" === s.substr(0, 2) ? n[s] = {
                        proto: !0,
                        event: !0
                    } : n[s] = { proto: !0 });
                    for (o = 0, s = null; s = r[o]; o++) e[s] || n[s] || t.exec(s) || (s.length > 2 && "on" === s.substr(0, 2) ? n[s] = {
                        window: !0,
                        event: !0
                    } : n[s] = { window: !0 });
                    const i = {
                        addEventListener: { window: 1 },
                        alert: { window: 1 },
                        atob: { window: 1 },
                        blur: { window: 1 },
                        btoa: { window: 1 },
                        clearInterval: { window: 1 },
                        clearTimeout: { window: 1 },
                        close: { window: 1 },
                        confirm: { window: 1 },
                        decodeURI: { window: 1 },
                        decodeURIComponent: { window: 1 },
                        dispatchEvent: { window: 1 },
                        encodeURI: { window: 1 },
                        encodeURIComponent: { window: 1 },
                        eval: { window: 1 },
                        find: { window: 1 },
                        focus: { window: 1 },
                        getComputedStyle: { window: 1 },
                        getSelection: { window: 1 },
                        isFinite: { window: 1 },
                        isNaN: { window: 1 },
                        location: { window: 1 },
                        open: { window: 1 },
                        openDialog: { window: 1 },
                        parseFloat: { window: 1 },
                        parseInt: { window: 1 },
                        postMessage: { window: 1 },
                        print: { window: 1 },
                        prompt: { window: 1 },
                        removeEventListener: { window: 1 },
                        resizeBy: { window: 1 },
                        resizeTo: { window: 1 },
                        scroll: { window: 1 },
                        scrollBy: { window: 1 },
                        scrollByLines: { window: 1 },
                        scrollByPages: { window: 1 },
                        scrollTo: { window: 1 },
                        setInterval: { window: 1 },
                        setTimeout: { window: 1 },
                        stop: { window: 1 }
                    };
                    return Object.keys(i).forEach(e => {
                        n[e] || (n[e] = i[e])
                    }), n
                }
            })(), i = r.createUUID(), c = window.self == window.top;
            let d = 0;
            const l = (e => {
                const t = e => {
                    const t = ++i;
                    return c[i] = e, t
                }, n = t => {
                    const { m: n, a: o, r: s, n: a } = t;
                    ((...t) => {
                        e.dispatchEvent.apply(e, t)
                    })(((t, n, o) => {
                        const s = e.createEvent("MutationEvent");
                        return s.initMutationEvent(t, !1, !1, o || null, null, null, JSON.stringify(n), s.ADDITION), s
                    })(r, { m: n, a: o, r: s }, a))
                };
                let o, s;
                var r;
                let a;
                var i = 1, c = {};
                return {
                    init: t => {
                        a || (a = t), r = "2P_" + a, s = "2C_" + a, ((...t) => {
                            e.addEventListener.apply(e, t)
                        })(s, e => {
                            const t = (s = e, JSON.parse(s.attrName));
                            var s;
                            if ("message.response" == t.m) ((e, t) => {
                                let n;
                                e && (n = c[e]) && (n(t), delete c[e])
                            })(t.r, t.a); else if (o) {
                                const s = t.r ? e => {
                                    n({ m: "message.response", a: e, r: t.r })
                                } : () => {
                                };
                                o({
                                    method: t.m, args: t.a,
                                    node: e.relatedNode, sendResponse: s
                                })
                            }
                        }, !1)
                    }, send: (e, o, s) => {
                        n({ m: e, a: o, r: s ? t(s) : null })
                    }, onMessage: {
                        addListener: e => {
                            o = e
                        }
                    }, cleanup: () => {
                        ((...t) => {
                            e.removeEventListener.apply(e, t)
                        })(s, o, !1)
                    }
                }
            })(document), u = (() => {
                const e = {};
                let t;
                const o = t => {
                    let n = [], o = [];
                    const s = () => {
                        n = null, o = null, r = null, delete e[t]
                    };
                    var r = {
                        postMessage: e => {
                            l.send("port.message", { response_id: t, value: e })
                        }, onMessage: {
                            addListener: e => {
                                n.push(e)
                            }
                        }, onDisconnect: {
                            addListener: e => {
                                o.push(e)
                            }
                        }, disconnect: () => {
                            l.send("port.message", {
                                response_id: t, disconnect: !0
                            }), s()
                        }
                    };
                    return e[t] = {
                        message: e => {
                            n && n.forEach(t => {
                                t(e)
                            })
                        }, disconnect: e => {
                            o && o.forEach(t => {
                                t(e)
                            }), s()
                        }
                    }, r
                };
                return {
                    message: s => {
                        let r;
                        if (s.connect) t && t(s.destination, o(s.response_id)); else {
                            if (!(r = e[s.response_id])) return void (n && console.warn("ports: unkown id", s.response_id, s));
                            s.disconnect ? r.disconnect() : r.message(s.value)
                        }
                    }, connect: e => {
                        const t = r.createUUID();
                        return l.send("port.message", { response_id: t, connect: !0, destination: e }), o(t)
                    }, onConnect: {
                        addListener: e => {
                            t = e
                        }
                    }
                }
            })(), p = (() => {
                let e, t;
                const o = [], s = [];
                let a = () => {
                    n && console.log("content: detected DOMContentLoaded " + i), t = !0, window.removeEventListener("DOMContentLoaded", a, !1), a = null, r.processQueue(o)
                }, c = () => {
                    n && console.log("content: detected load " + i), t = !0, e = !0, d.cleanup(), r.processQueue(s)
                };
                window.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", c, !1);
                var d = {
                    registerDomListener: n => {
                        t || e ? n() : o.push(n)
                    }, registerPageListener: t => {
                        e ? t() : s.push(t)
                    }, forcedLoad: () => {
                        e || t || !c || (n && console.log("content: use forced load " + i), c(!0))
                    }, seen: (() => {
                        const n = {};
                        return Object.defineProperties(n, {
                            load: { get: () => e, enumerable: !0 },
                            DOMContentLoaded: { get: () => t, enumerable: !0 }
                        }), n
                    })(), cleanup: () => {
                        a && (window.removeEventListener("DOMContentLoaded", a, !1), a = null), c && (window.removeEventListener("load", c, !1), c = null)
                    }
                };
                return d
            })(), g = e => {
                t.page.eval("(" + o + ')(window, document,"' + e + '",' + n + ");\n")
            }, m = () => {
                l.send("cleanup")
            }, f = (e, o, a) => {
                const c = { short_id: t.runtime.short_id }
                ;["isFirstPartyIsolation", "downloadMode", "enforce_strict_mode", "measure_scripts", "version", "external_connect"].forEach(t => {
                    c[t] = e[t]
                }), c.sandbox_allow_getters = !0, c.detect_constructors_by_keys = t.FEATURES.RUNTIME.DETECT_CONSTRUCTORS_BY_KEYS, c.inIncognitoContext = t.extension.inIncognitoContext, c.blob_download_supported = !t.FEATURES.RUNTIME.FIREFOX,
                n && (p.seen.load ? console.log("content: Start ENV with page loaded " + i) : p.seen.DOMContentLoaded ? console.log("content: Start ENV with DOMContentLoaded " + i) : console.log("content: Start ENV normally " + i))
                ;const u = ((e, t, n, o, s, r, a, i, c, d, l, u, p, g, m) => ["const backup = this;", "(function TM_back() {", "const Context = backup.Context;", "const copy = function(src) {", '"use strict";', "const props = Context.O_gOPN(src);", "for (let kk, ii=0; (kk=props[ii]) !== undefined; ii++) {", "Context[kk] = src[kk];", "};", "};", "copy(backup);", "with (Context) {", "(() => {", '"use strict";', "copy({", "Context: Context,", `V:!!${i},`, `ENV:!!${c},`, `TS:!!${l},`, `D:!!${u},`, `use:${r},`, `windowProps:${o},`, `scripts:${t},`, `powers:${n},`, "_content: false,", `flags:${s},`, "write_listeners: []", "});", "const cleanup = evt => {", "Message.cleanup();", 'safeWindow.removeEventListener("unload", cleanup, false);', "};", 'safeWindow.addEventListener("unload", cleanup, false);', "Context.write_listeners.push(d => {", "Context.createSafeDocument(d);", "Message.init();", "});", (() => {
                    let t = "";
                    i && (t += "let V = true;"), d && (t += "let EV = true;"), c && (t += "let ENV = true;"), t += `let logLevel = ${a};`;
                    const n = `let contextId = "${e}";`;
                    let o = "";
                    return p || "complete" == document.readyState ? (o += "Context.pageLoaded |= true;", o += "Context.domContentLoaded |= true;") : (g || "interactive" == document.readyState) && (o += "Context.domContentLoaded |= true;"), `${t + n + "const Event = function() {};const Window = function() {};Window.prototype = {};" + o}(${m})(Context, contextId);\n`
                })(), "})();", "};", "})();"].join(""))(i, JSON.stringify(e.scripts), r.serialize(o), JSON.stringify(a), JSON.stringify(c), JSON.stringify({}), d, undefined, void 0, undefined, undefined, n, p.seen.load, p.seen.DOMContentLoaded, s);
                l.send("next", { src: u })
            }, h = (() => {
                const e = {
                    registerMenuCommand: e => {
                        const n = t.extension.connect("registerMenuCommand");
                        n.onMessage.addListener(t => {
                            t.run && null !== n && e.postMessage("run")
                        }), n.onDisconnect.addListener(() => {
                            e.disconnect()
                        }), e.onMessage.addListener(e => {
                            if ("register" !== e.method) return;
                            const t = e.name, o = e.uuid, s = e.accessKey, r = [i, t, o].join("#");
                            n.postMessage({ method: "registerMenuCommand", name: t, uuid: o, menuId: r, accessKey: s })
                        }), e.onDisconnect.addListener(() => {
                            n.disconnect()
                        })
                    }, openInTab: e => {
                        const n = t.extension.connect("openInTab");
                        n.onMessage.addListener(t => {
                            e.postMessage(t)
                        }), n.onDisconnect.addListener(() => {
                            e.disconnect()
                        }), e.onMessage.addListener(e => {
                            if ("openTab" == e.method) {
                                let t = e.url, o = e.options;
                                "boolean" != typeof o && void 0 !== o || (o = {
                                    loadInBackground: o
                                });
                                const s = void 0 === o.active ? void 0 !== o.loadInBackground && !o.loadInBackground : o.active,
                                    r = void 0 === o.insert || o.insert;
                                t && 0 === t.search(/^\/\//) && (t = location.protocol + t), n.postMessage({
                                    method: "openInTab",
                                    details: {
                                        url: t,
                                        options: {
                                            active: !!s,
                                            insert: !!r,
                                            incognito: !!o.incognito,
                                            setParent: !o.incognito && !!o.setParent
                                        }
                                    }
                                })
                            } else void 0 !== e.name ? n.postMessage({ name: e.name }) : e.close && n.postMessage({ close: !0 })
                        }), e.onDisconnect.addListener(() => {
                            n.disconnect()
                        })
                    }, download: e => {
                        const n = t.extension.connect("download");
                        n.onMessage.addListener(t => {
                            e.postMessage(t)
                        }), n.onDisconnect.addListener(() => {
                            e.disconnect()
                        }), e.onMessage.addListener(e => {
                            if (e.cancel) n.postMessage({ cancel: !0, id: i }); else {
                                const t = e.details;
                                t.url && "/" === t.url[0] && (t.url = location.origin + t.url), n.postMessage({
                                    method: "download",
                                    details: t,
                                    id: i
                                })
                            }
                        }), e.onDisconnect.addListener(() => {
                            n.disconnect()
                        })
                    }, webRequest: e => {
                        const n = t.extension.connect("webRequest");
                        n.onMessage.addListener(t => {
                            e.postMessage(t)
                        }),
                            n.onDisconnect.addListener(() => {
                                e.disconnect()
                            }), e.onMessage.addListener(e => {
                            n.postMessage({ method: "webRequest", rules: e.rules, uuid: e.uuid })
                        }), e.onDisconnect.addListener(() => {
                            n.disconnect()
                        })
                    }, xhr: e => {
                        const n = t.extension.connect("xhr");
                        n.onMessage.addListener(t => {
                            e.postMessage(t)
                        }), n.onDisconnect.addListener(() => {
                            e.disconnect()
                        }), e.onMessage.addListener(e => {
                            n.postMessage(e)
                        }), e.onDisconnect.addListener(() => {
                            n.disconnect()
                        })
                    }, onurlchange: e => {
                        const n = t.extension.connect("onurlchange");
                        let o = () => {
                            e.postMessage({ url: document.location.href })
                        };
                        const s = () => {
                            o && (window.removeEventListener("hashchange", o), o = null)
                        };
                        window.addEventListener("hashchange", o), n.onMessage.addListener(t => {
                            e.postMessage(t)
                        }), n.onDisconnect.addListener(() => {
                            e.disconnect(), s()
                        }), e.onMessage.addListener(e => {
                            n.postMessage(e)
                        }), e.onDisconnect.addListener(() => {
                            n.disconnect(), s()
                        })
                    }, values: e => {
                        const n = t.extension.connect("values");
                        n.onMessage.addListener(t => {
                            e.postMessage(t)
                        }), n.onDisconnect.addListener(() => {
                            e.disconnect()
                        }),
                            e.onMessage.addListener(e => {
                                n.postMessage(e)
                            }), e.onDisconnect.addListener(() => {
                            n.disconnect()
                        })
                    }
                }, n = {
                    setClipboard: ({ args: e, cb: n }) => {
                        const o = e.content, s = e.info, r = typeof s;
                        let a, i;
                        "object" === r ? (s.type && (a = s.type), s.mimetype && (i = s.mimetype)) : "string" === r && (a = s);
                        const c = i || ("html" == a ? "text/html" : "text/plain");
                        if (t.FEATURES.RUNTIME.CLIPBOARD_API) t.extension.sendMessage({
                            method: "clipboard",
                            mimetype: c,
                            content: o
                        }, () => n()); else {
                            const e = t => {
                                document.removeEventListener("copy", e, !0),
                                    t.stopImmediatePropagation(), t.preventDefault(), t.clipboardData.setData(c, o)
                            };
                            document.addEventListener("copy", e, !0), document.execCommand("copy"), n()
                        }
                    }, notification: ({ args: e, cb: n }) => {
                        e.method = "notification", t.extension.sendMessage(e, n)
                    }, syntaxCheck: ({ args: e, cb: n }) => {
                        e.method = "syntaxCheck", t.extension.sendMessage(e, n)
                    }, closeTab: ({ cb: e }) => {
                        t.extension.sendMessage({ method: "closeTab", id: i }, t => {
                            t.error && console.warn(t.error), e()
                        })
                    }, focusTab: ({ cb: e }) => {
                        t.extension.sendMessage({
                            method: "focusTab", id: i
                        }, t => {
                            t.error && console.warn(t.error), e()
                        })
                    }, addElement: ({ args: e, node: t, cb: n }) => {
                        try {
                            const o = document.createElement(e.tag), s = e.properties;
                            let r;
                            Object.keys(s).forEach(e => {
                                "textContent" == e ? o.textContent = s[e] : o.setAttribute(e, s[e])
                            }), e.id && o.setAttribute("id", e.id), r = t || document.head || document.body || document.documentElement || document, r.appendChild(o), n()
                        } catch (e) {
                            console.warn("content: error adding script", e)
                        }
                    }, tabs: ({ args: e, cb: n }) => {
                        e.method = "tabs", t.extension.sendMessage(e, e => {
                            n(e.data)
                        })
                    },
                    cookie: ({ args: e, cb: n }) => {
                        e.method = "cookie", t.extension.sendMessage(e, e => {
                            n(e.data)
                        })
                    }
                };
                return {
                    init: () => {
                    }, getApi: () => {
                        const t = {};
                        return [n, e].forEach(e => {
                            Object.keys(e).map(n => {
                                t["GM_" + n] = e[n]
                            })
                        }), t
                    }, processMessage: ({ method: e, args: t, node: o, sendResponse: s }) => {
                        let r;
                        if (r = n[e]) return r({ args: t, node: o, cb: s });
                        s()
                    }, processConnect: (t, n) => {
                        let o;
                        if (o = e[t]) return o(n)
                    }
                }
            })();
            (t.FEATURES.RUNTIME.FIREFOX ? new Promise(e => p.registerDomListener(() => e(document.body))) : Promise.resolve(document)).then(e => {
                e.addEventListener("mouseenter", () => {
                    t.extension.sendMessage({ method: "contextmenu", url: window.location.href, id: i })
                }, !1)
            }), t.extension.onMessage.addListener((e, t, o) => {
                e.id && e.id != i ? console.warn("content: Not for me! " + i.substr(0, 10) + "!=" + e.id) : "executeScript" == e.method ? (e.url && 0 !== window.location.href.indexOf(e.url) ? n && console.log("exec: URL doesn't match", window.location, e) : void 0 !== e.topframe && e.topframe != c ? n && console.log("exec: topframe doesn't match", window.self, e) : l.send("executeScript", e),
                    o({})) : "onLoad" == e.method ? (document.readyState && "complete" !== document.readyState || p.forcedLoad(), o({})) : c && ("loadUrl" == e.method ? (window.location = e.url, o({})) : "reload" == e.method ? (window.location.reload(), o({})) : "confirm" == e.method ? window.setTimeout(() => {
                    const t = window.confirm(e.msg);
                    o({ confirm: t })
                }, 100) : "showMsg" == e.method ? window.setTimeout(() => {
                    window.setTimeout(() => {
                        window.alert(e.msg)
                    }, 1), o({})
                }, 100) : "setForeignAttr" == e.method ? (l.send(e.method, e),
                    o({})) : window.console.log("content: unknown method " + e.method))
            }), u.onConnect.addListener((e, t) => {
                h.processConnect(e, t)
            }), l.onMessage.addListener(e => {
                const { method: n, args: o, sendResponse: s } = e;
                if ("document.write" == n) {
                    const e = document.documentElement;
                    window.setTimeout(() => {
                        e !== document.documentElement && l.init()
                    }, 0)
                } else "port.message" == n ? u.message(o) : "csp" == n ? t.page.eval('window["' + o.id + '"] = function() { ' + o.src + " };\n") : "external.message" == n ? t.extension.sendMessage({
                    method: "externalMessage",
                    request: o
                }, e => {
                    s(e)
                }) : h.processMessage(e)
            });
            let v = !1;
            const w = (e, o, s) => {
                    let r = 1;
                    const a = () => {
                        n && console.debug('content: send "prepare" message'), t.extension.sendMessage({
                            method: "prepare",
                            id: i,
                            topframe: c,
                            url: window.location.href
                        }, t => {
                            if (!v) {
                                if (!t) return n && console.debug("content: _early_ execution, connection to bg failed -> retry!"), window.setTimeout(a, r), void (r *= 2);
                                v = !0, t.contexters || t.scripts && t.scripts.length || t.external_connect ? (s && s(), o(t)) : (m(), e())
                            }
                        })
                    };
                    t.content.onReady(a)
                }, _ = location.pathname + location.search,
                y = "TM_" + t.runtime.short_id + window.btoa(_.length + _).substr(0, 255).replace(/[#=\/]/g, "_"),
                b = document.contentType && "text/html" != document.contentType;
            var x, M, L;
            x = (o, s) => {
                let r;
                n && console.log("content: Started (" + i + ", " + window.location.origin + window.location.pathname + ")", e.tm_info), t.FEATURES.RUNTIME.FAST_EXEC_SUPPORT && (r = (() => {
                    let e, t, n, o;
                    try {
                        o = document.cookie.split(";")
                    } catch (e) {
                        return
                    }
                    for (e = 0; e < o.length; e++) if (t = o[e].substr(0, o[e].indexOf("=")),
                        n = o[e].substr(o[e].indexOf("=") + 1), t = t.replace(/^\s+|\s+$/g, ""), 0 === t.indexOf(y)) {
                        document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                        const e = window.decodeURIComponent(n);
                        if (0 !== e.indexOf("blob:")) continue;
                        const o = new XMLHttpRequest;
                        try {
                            if (o.open("GET", e, !1), o.send(null), 200 === o.status || 0 === o.status) return JSON.parse(o.responseText)
                        } catch (e) {
                            console.warn("content: unable to decode " + (o.responseText || "unknown"))
                        }
                    }
                })()) || (r = e.tm_info) ? (delete e.tm_info,
                    r.contexters || r.scripts && r.scripts.length || r.external_connect ? (g(i), l.init(i), s(r, "sync")) : o(), t.FEATURES.RUNTIME.FAST_EXEC_SUPPORT && t.extension.sendMessage({
                    method: "prepare",
                    url: window.location.href,
                    cleanup: !0
                }, () => {
                })) : b ? w(o, s, () => {
                    g(i), l.init(i)
                }) : (g(i), l.init(i), w(o, s))
            }, M = () => {
                n && console.log("content: disable event processing for " + i), p.cleanup(), m(), l.cleanup()
            }, L = (e, o) => {
                d = e.logLevel, n |= d >= 60, p.registerDomListener(() => {
                    l.send("DOMContentLoaded")
                }), p.registerPageListener(() => {
                    l.send("load")
                }), n && console.log("content: " + (o || "normal") + " start event processing for " + i + " (" + e.scripts.length + " to run)"), h.init(e.scripts), f(e, h.getApi(), a()), c || window.addEventListener("unload", () => {
                    t.extension.sendMessage({
                        method: "unLoad",
                        id: i,
                        topframe: !1,
                        url: window.location.href
                    }, () => {
                    }), p.cleanup(), m(), l.cleanup()
                }, !1)
            }, b ? window.setTimeout(() => {
                x(M, L)
            }, 1) : x(M, L)
        };
        (async () => {
            const e = window.rea;
            void 0 === e.globals._content && (e.globals._content = !0, r(window))
        })()
    }
});
//# sourceMappingURL=http://localhost:8000/sourcemaps/content.js.map