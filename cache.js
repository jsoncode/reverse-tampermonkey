!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var s = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(s.exports, s, s.exports, t),
            s.l = !0,
            s.exports
    }
    var n = {};
    t.m = e,
        t.c = n,
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: r
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
            var r = Object.create(null);
            if (t.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & n && "string" != typeof e)
                for (var s in e)
                    t.d(r, s, function(t) {
                        return e[t]
                    }
                        .bind(null, s));
            return r
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
        t(t.s = 25)
}({
    25: function() {
        self.addEventListener("install", ()=>{
                console.log("SW: started"),
                    self.skipWaiting()
            }
        );
        const e = "x-sw-cache-timestamp";
        self.addEventListener("fetch", (function(t) {
                const n = t.request.url
                    , r = caches.match(n).then(r=>{
                        let s;
                        if (r && (!(s = r.headers.get(e)) || Date.now() < Number(s) + 6048e5))
                            return console.log("SW: delivering cached response for " + n),
                                r;
                        if (!n.startsWith("http") || !(n.startsWith("https://www.google.com/s2/favicons") || n.startsWith("https://icons.duckduckgo.com/ip2/") || n.endsWith("favicon.ico")))
                            return fetch(t.request, {
                                method: "GET",
                                redirect: "follow"
                            });
                        try {
                            return fetch(t.request).then(async t=>{
                                    if (t.ok) {
                                        console.log("SW: caching " + n);
                                        const r = await (async(e,t)=>new Promise(n=>{
                                                var r = t ? t((()=>{
                                                        var t = new Headers;
                                                        for (var [n,r] of e.headers.entries())
                                                            t.append(n, r);
                                                        return t
                                                    }
                                                )()) : e.headers;
                                                return e.blob().then(t=>{
                                                        n(new Response(t,{
                                                            status: e.status,
                                                            statusText: e.statusText,
                                                            headers: r
                                                        }))
                                                    }
                                                )
                                            }
                                        ))(t, t=>(t.set(e, Date.now()),
                                            t));
                                        return caches.open("dynamic").then(e=>(e.put(n, r.clone()),
                                            r))
                                    }
                                    return Promise.reject({
                                        status: r.status,
                                        statusText: r.statusText
                                    })
                                }
                            )
                        } catch (t) {
                            return caches.open("dynamic").then(r=>{
                                    console.log("SW: caching error response for " + n);
                                    const s = new Response(null,{
                                        status: 500,
                                        statusText: t.message,
                                        headers: {
                                            [e]: Date.now()
                                        }
                                    });
                                    return r.put(n, s.clone()),
                                        s
                                }
                            )
                        }
                    }
                ).catch(e=>{
                        const t = e.message || e.statusText;
                        return console.log("SW: unexpected error " + t),
                            new Response(null,{
                                status: 500,
                                statusText: t
                            })
                    }
                );
                t.respondWith(r)
            }
        ))
    }
});
//# sourceMappingURL=http://localhost:8000/sourcemaps/cache.js.map
