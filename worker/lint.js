'use strict';
(() => {
    let k = "/";
    self.onmessage = a => {
        a = a.data;
        if ("base_uri" == a.method) k = a.value; else if ("lint" == a.method) try {
            self.eslint || self.importScripts(k + "vendor/eslint/eslint.js");
            const f = { problem: "error", layout: 1, suggestion: 1 }, l = new self.eslint.Linter, b = a.config;
            b.extends && b.extends.includes("eslint:recommended") && (b.rules = b.rules || [], l.getRules().forEach(function (d, m) {
                let n;
                var c;
                let g, p;
                if (d && (c = d.meta) && void 0 === b.rules[m] && (n = c.docs) && n.recommended) {
                    d = [(c.type ? f[c.type] : null) || 1];
                    if (c = c.schema) g =
                        {}, c.forEach(e => {
                        "object" == e.type && Object.keys(e.properties).forEach(h => {
                            const q = e.properties[h].default;
                            void 0 !== q && !1 !== q && (g[h] = e.properties[h].default, p = !0)
                        })
                    }), p && d.push(g);
                    b.rules[m] = d
                }
            }));
            const r = l.verify(a.text, b, a.options);
            self.postMessage({ results: r, id: a.id })
        } catch (f) {
            self.postMessage({ error: f, id: a.id })
        }
    }
})();
