'use strict';
(t=>{
        const h = t.FEATURES;
        t.extend({
            extension: {
                onConnect: {
                    addListener: function(a) {
                        return chrome.runtime.onConnect.addListener(a)
                    }
                },
                onConnectExternal: {
                    addListener: function(a) {
                        return chrome.runtime.onConnectExternal.addListener(a)
                    }
                },
                onMessageExternal: {
                    addListener: function(a) {
                        return chrome.runtime.onMessageExternal.addListener(a)
                    }
                },
                manifest: chrome.runtime.getManifest(),
                getViews: function(a) {
                    return chrome.extension.getViews(a)
                },
                urls: {
                    prepareForReport: function(a) {
                        return a
                    }
                }
            },
            runtime: {
                onInstalled: {
                    addListener: function(a) {
                        chrome.runtime.onInstalled && chrome.runtime.onInstalled.addListener(a)
                    }
                },
                onUpdateAvailable: {
                    addListener: function(a) {
                        chrome.runtime.onUpdateAvailable && chrome.runtime.onUpdateAvailable.addListener(a)
                    }
                },
                setUninstallURL: a=>{
                    chrome.runtime.setUninstallURL && chrome.runtime.setUninstallURL(a)
                }
                ,
                isDarkMode: (()=>{
                        let a;
                        return ()=>{
                            if (void 0 === a) {
                                {
                                    var b = document.body || document.documentElement || document;
                                    const c = document.createElement("div");
                                    c.setAttribute("id", "isdark");
                                    c.setAttribute("style", "height: 10px");
                                    const d = document.createElement("style");
                                    d.textContent = "@media (prefers-color-scheme: dark) { #isdark { height: 20px !important; } };";
                                    b.appendChild(d);
                                    b.appendChild(c);
                                    b = 20 == c.offsetHeight
                                }
                                b = a = b
                            } else
                                b = a;
                            return b
                        }
                    }
                )()
            },
            tabs: {
                onActivated: {
                    addListener: function(a) {
                        return chrome.tabs.onActivated.addListener(a)
                    }
                },
                onUpdated: {
                    addListener: function(a) {
                        return chrome.tabs.onUpdated.addListener(a)
                    }
                },
                onReplaced: {
                    addListener: function(a) {
                        if (chrome.tabs.onReplaced)
                            return chrome.tabs.onReplaced.addListener(a)
                    }
                },
                onRemoved: {
                    addListener: function(a) {
                        return chrome.tabs.onRemoved.addListener(a)
                    }
                },
                executeScript: function(a, b, c) {
                    return chrome.tabs.executeScript(a, b, c)
                },
                create: function(a, b) {
                    var c;
                    let d;
                    if (c = a.parent)
                        void 0 !== (d = c.id) && (0 > d ? console.warn(`tabs.create: openerTabId lower than 0 is not supported -> ${d}!`) : a.openerTabId = d),
                        void 0 !== (c = c.windowId) && (a.windowId = c);
                    delete a.parent;
                    a.incognito ? (delete a.incognito,
                        chrome.windows.getAll({
                                windowTypes: ["normal"]
                            }, f=>{
                                let l;
                                f.some(m=>m.incognito ? l = m.id : null);
                                if (void 0 === l)
                                    return chrome.windows.create({
                                        url: a.url,
                                        incognito: !0
                                    }, b);
                                a.windowId = l;
                                return chrome.tabs.create(a, b)
                            }
                        )) : chrome.tabs.create(a, b)
                },
                update: function(a, b, c) {
                    return chrome.tabs.update(a, b, c)
                },
                remove: function(a, b) {
                    return chrome.tabs.remove(a, b)
                },
                highlight: function(a, b) {
                    if (a && a.tabs) {
                        a.tabs instanceof Array || (a.tabs = [a.tabs]);
                        const c = [];
                        let d;
                        const f = ()=>{
                                if (a.tabs.length) {
                                    const l = a.tabs.pop();
                                    chrome.tabs.get(l, m=>{
                                            void 0 === d && (d = m.windowId);
                                            m.windowId === d && c.push(m.index);
                                            f()
                                        }
                                    )
                                } else
                                    return chrome.tabs.highlight({
                                        windowId: d,
                                        tabs: c
                                    }, b)
                            }
                        ;
                        f()
                    } else
                        b && b()
                },
                getSelected: function(a, b) {
                    return chrome.tabs.getSelected(a, b)
                },
                get: function(a, b) {
                    return chrome.tabs.get(a, b)
                },
                query: function(a, b) {
                    return chrome.tabs.query(a, b)
                },
                sendMessage: function(a, b, c, d) {
                    "function" == typeof c && (d = c,
                        c = {});
                    return chrome.tabs.sendMessage(a, b, c, d)
                }
            },
            windows: {
                getAll: function(a, b) {
                    chrome.windows.getAll(a, b)
                }
            },
            webRequest: {
                headerModificationSupported: !0,
                extraHeaderNeeded: chrome.webRequest && chrome.webRequest.OnBeforeSendHeadersOptions && chrome.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty("EXTRA_HEADERS"),
                onBeforeRequest: {
                    addListener: function(a, b, c) {
                        return chrome.webRequest.onBeforeRequest.addListener(a, b, c)
                    },
                    removeListener: function(a) {
                        return chrome.webRequest.onBeforeRequest.removeListener(a)
                    }
                },
                onBeforeSendHeaders: {
                    addListener: function(a, b, c) {
                        return chrome.webRequest.onBeforeSendHeaders.addListener(a, b, c)
                    },
                    removeListener: function(a) {
                        return chrome.webRequest.onBeforeSendHeaders.removeListener(a)
                    }
                },
                onHeadersReceived: {
                    addListener: function(a, b, c) {
                        return chrome.webRequest.onHeadersReceived.addListener(a, b, c)
                    },
                    removeListener: function(a) {
                        return chrome.webRequest.onHeadersReceived.removeListener(a)
                    }
                },
                onBeforeRedirect: {
                    addListener: function(a, b, c) {
                        return chrome.webRequest.onBeforeRedirect.addListener(a, b, c)
                    },
                    removeListener: function(a) {
                        return chrome.webRequest.onBeforeRedirect.removeListener(a)
                    }
                },
                onResponseStarted: {
                    addListener: function(a, b) {
                        return chrome.webRequest.onResponseStarted.addListener(a, b)
                    },
                    removeListener: function(a) {
                        return chrome.webRequest.onResponseStarted.removeListener(a)
                    }
                },
                onErrorOccurred: {
                    addListener: function(a, b) {
                        return chrome.webRequest.onErrorOccurred.addListener(a, b)
                    },
                    removeListener: function(a) {
                        return chrome.webRequest.onErrorOccurred.removeListener(a)
                    }
                },
                handlerBehaviorChanged: function(a) {
                    return chrome.webRequest.handlerBehaviorChanged(a)
                }
            },
            webNavigation: {
                supported: !!chrome.webNavigation,
                onCommitted: {
                    addListener: function(a) {
                        if (chrome.webNavigation.onCommitted)
                            return chrome.webNavigation.onCommitted.addListener(a)
                    }
                },
                onUrlUpdated: {
                    addListener: function(a) {
                        if (chrome.webNavigation.onHistoryStateUpdated)
                            return chrome.webNavigation.onHistoryStateUpdated.addListener(a);
                        if (chrome.webNavigation.onReferenceFragmentUpdated)
                            return chrome.webNavigation.onReferenceFragmentUpdated.addListener(a)
                    }
                },
                onErrorOccurred: {
                    addListener: function(a) {
                        if (chrome.webNavigation.onErrorOccurred)
                            return chrome.webNavigation.onErrorOccurred.addListener(a)
                    }
                }
            },
            browserAction: {
                setIcon: function(a, b) {
                    const c = a.path;
                    c && (a.path = 53 <= h.RUNTIME.BROWSER_VERSION ? {
                        19: c.replace(/\.png$/, "19.png"),
                        38: c.replace(/\.png$/, "38.png"),
                        16: c.replace(/\.png$/, "16.png"),
                        24: c.replace(/\.png$/, "24.png"),
                        32: c.replace(/\.png$/, "32.png")
                    } : {
                        19: c.replace(/\.png$/, "19.png"),
                        38: c.replace(/\.png$/, "38.png")
                    });
                    return chrome.browserAction.setIcon(a, b)
                },
                setTitle: function(a) {
                    return chrome.browserAction.setTitle(a)
                },
                setBadgeText: function(a) {
                    return chrome.browserAction.setBadgeText(a)
                },
                setBadgeBackgroundColor: function(a) {
                    return chrome.browserAction.setBadgeBackgroundColor(a)
                },
                setBadgeTextColor: ()=>{}
                ,
                setPopup: function(a) {
                    return chrome.browserAction.setPopup(a)
                },
                openPopup: ()=>{}
            },
            declarativeContent: (()=>chrome.declarativeContent && chrome.declarativeContent.onPageChanged ? {
                supported: !0,
                onPageChanged: {
                    addRules: (a,b)=>chrome.declarativeContent.onPageChanged.addRules(a, b),
                    getRules: (a,b)=>chrome.declarativeContent.onPageChanged.getRules(a, b),
                    removeRules: (a,b)=>chrome.declarativeContent.onPageChanged.removeRules(a, b)
                },
                PageStateMatcher: chrome.declarativeContent.PageStateMatcher,
                RequestContentScript: chrome.declarativeContent.RequestContentScript
            } : {
                supported: !1
            })(),
            storage: {
                onChanged: {
                    addListener: function(a) {
                        return chrome.storage.onChanged.addListener(a)
                    }
                },
                local: (()=>{
                        let a = {}
                            , b = {}
                            , c = null
                            , d = !1
                            , f = [];
                        const l = e=>{
                                d ? f.push(e) : e()
                            }
                            , m = (e,g)=>{
                                c && window.clearTimeout(c);
                                const k = ()=>{
                                        d = !0;
                                        let n = 1;
                                        const p = ()=>{
                                                var q;
                                                (q = chrome.runtime.lastError) && console.warn(q);
                                                0 === --n && (d = !1,
                                                    q = f,
                                                    f = [],
                                                    a = {},
                                                    b = {},
                                                    q.forEach(w=>{
                                                            w()
                                                        }
                                                    ),
                                                g && g())
                                            }
                                            , r = ()=>{
                                                Object.keys(a).length && (n++,
                                                    chrome.storage.local.set(a, p))
                                            }
                                        ;
                                        let u;
                                        (u = Object.keys(b)).length ? (n++,
                                            chrome.storage.local.remove(u, ()=>{
                                                    r();
                                                    p()
                                                }
                                            )) : r();
                                        p();
                                        c = null
                                    }
                                ;
                                e ? k() : c = window.setTimeout(k, 500)
                            }
                            , v = (e,g)=>{
                                if (e instanceof Array) {
                                    let k = 1;
                                    const n = {};
                                    e.forEach(p=>{
                                            k++;
                                            v(p, r=>{
                                                    n[p] = r[p];
                                                    0 === --k && g(n)
                                                }
                                            )
                                        }
                                    );
                                    0 === --k && g(n)
                                } else if (void 0 !== a[e]) {
                                    const k = {};
                                    k[e] = a[e];
                                    g(k)
                                } else
                                    chrome.storage.local.get(e, g)
                            }
                        ;
                        return {
                            set: function(e, g) {
                                l(()=>{
                                        g && f.push(g);
                                        Object.keys(e).forEach(k=>{
                                                a[k] = e[k];
                                                delete b[k]
                                            }
                                        );
                                        m()
                                    }
                                )
                            },
                            get: function(e, g) {
                                null === e ? m(!0, ()=>{
                                        chrome.storage.local.get(null, g)
                                    }
                                ) : l(()=>{
                                        v(e, g)
                                    }
                                )
                            },
                            remove: function(e, g) {
                                l(()=>{
                                        g && f.push(g);
                                        b[e] = !0;
                                        delete a[e];
                                        m()
                                    }
                                )
                            },
                            clear: function(e) {
                                l(()=>{
                                        c && window.clearTimeout(c);
                                        f = [];
                                        a = {};
                                        b = {};
                                        chrome.storage.local.clear(e)
                                    }
                                )
                            }
                        }
                    }
                )(),
                sync: {
                    supported: !0,
                    set: function(a, b) {
                        return chrome.storage.sync.set(a, b)
                    },
                    get: function(a, b) {
                        return chrome.storage.sync.get(a, b)
                    },
                    remove: function(a, b) {
                        return chrome.storage.sync.remove(a, b)
                    },
                    clear: function(a) {
                        return chrome.storage.sync.clear(a)
                    }
                }
            },
            downloads: {
                supported: !0,
                onChanged: {
                    addListener: function(a) {
                        return chrome.downloads.onChanged.addListener(a)
                    }
                },
                search: function(a, b) {
                    return chrome.downloads.search(a, b)
                },
                cancel: function(a, b) {
                    return chrome.downloads.cancel(a, b)
                },
                download: function(a, b) {
                    return chrome.downloads.download(a, b)
                }
            },
            file: {
                isAllowed: function(a) {
                    return chrome.extension.isAllowedFileSchemeAccess(a)
                },
                get: function(a, b, c) {
                    try {
                        const d = new XMLHttpRequest;
                        d.open("GET", a, !0);
                        d.responseType = "arraybuffer";
                        d.onload = ()=>{
                            b(d.response)
                        }
                        ;
                        d.onerror = ()=>{
                            c(d.statusText)
                        }
                        ;
                        d.send()
                    } catch (d) {
                        c(d.message)
                    }
                }
            },
            cookies: {
                getAll: function(a, b) {
                    return chrome.cookies.getAll(a, b)
                },
                remove: function(a, b) {
                    return chrome.cookies.remove(a, b)
                },
                set: function(a, b) {
                    return chrome.cookies.set(a, b)
                }
            },
            commands: {
                supported: !(!chrome.commands || !chrome.commands.onCommand),
                onCommand: {
                    addListener: function(a) {
                        return chrome.commands.onCommand.addListener(a)
                    }
                }
            },
            notifications: {
                onPermissionLevelChanged: {
                    addListener: function(a) {
                        return chrome.notifications.onPermissionLevelChanged.addListener(a)
                    }
                },
                onClicked: {
                    addListener: function(a) {
                        return chrome.notifications.onClicked.addListener(a)
                    }
                },
                onClosed: {
                    addListener: function(a) {
                        return chrome.notifications.onClosed.addListener(a)
                    }
                },
                supported: !!(chrome.notifications && chrome.notifications.getPermissionLevel && chrome.notifications.onPermissionLevelChanged && chrome.notifications.onClicked),
                getPermissionLevel: function(a) {
                    return chrome.notifications.getPermissionLevel(a)
                },
                create: function(a, b, c) {
                    return chrome.notifications.create(a, b, c)
                },
                clear: function(a, b) {
                    return chrome.notifications.clear(a, b)
                }
            },
            contextMenus: (()=>{
                    const a = !!(h.RUNTIME.CONTEXT_MENU && chrome.contextMenus && chrome.contextMenus.create && chrome.contextMenus.update && chrome.contextMenus.remove);
                    return a ? {
                        supported: a,
                        create: function(b, c) {
                            return chrome.contextMenus.create(b, c)
                        },
                        update: function(b, c, d) {
                            return chrome.contextMenus.update(b, c, d)
                        },
                        remove: function(b, c) {
                            return chrome.contextMenus.remove(b, c)
                        },
                        removeAll: function(b) {
                            return chrome.contextMenus.removeAll(b)
                        },
                        onClicked: {
                            addListener: function(b) {
                                return chrome.contextMenus.onClicked.addListener(b)
                            }
                        }
                    } : {
                        supported: !1
                    }
                }
            )(),
            permissions: {
                supported: !0,
                getAll: function(a) {
                    return chrome.permissions.getAll(a)
                },
                contains: function(a, b) {
                    return chrome.permissions.contains(a, b)
                },
                request: function(a, b) {
                    return chrome.permissions.request(a, b)
                },
                remove: function(a, b) {
                    return chrome.permissions.remove(a, b)
                },
                onAdded: {
                    addListener: function(a) {
                        if (chrome.permissions.onAdded)
                            return chrome.permissions.onAdded.addListener(a)
                    }
                },
                onRemoved: {
                    addListener: function(a) {
                        if (chrome.permissions.onRemoved)
                            return chrome.permissions.onRemoved.addListener(a)
                    }
                }
            },
            i18n: {
                native_support: !0,
                getMessage: function() {
                    return chrome.i18n.getMessage.apply(this, arguments)
                },
                getUILanguage: function() {
                    return chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : navigator.language
                },
                getAcceptLanguages: function(a) {
                    return chrome.i18n.getAcceptLanguages ? chrome.i18n.getAcceptLanguages(a) : a([])
                }
            },
            idle: {
                queryState: function(a, b) {
                    return chrome.idle ? chrome.idle.queryState(a, b) : b("unknown")
                }
            },
            other: (()=>({
                openDatabase: function(a, b, c, d) {
                    const f = window.openDatabase;
                    if (f)
                        return f(a, b, c, d)
                },
                requestFileSystem: function(a, b, c, d) {
                    const f = window.requestFileSystem || window.webkitRequestFileSystem;
                    if (f)
                        return f(a, b, c, d);
                    d("not supported")
                }
            }))()
        });
        (()=>{
                try {
                    h.HTML5.LOCALSTORAGE = window.localStorage
                } catch (a) {
                    console.warn("prep: window.localStorage will be unavailable")
                }
                h.DB.USE = h.DB.DEFAULT;
                try {
                    h.HTML5.LOCALSTORAGE && (h.DB.NO_WARNING = "nowarning" === h.HTML5.LOCALSTORAGE.getItem("#brokenprofile"),
                        h.DB.USE = h.HTML5.LOCALSTORAGE.getItem(h.CONSTANTS.STORAGE.TYPE) || h.DB.DEFAULT)
                } catch (a) {
                    console.warn("prep: error at storage type detection", a)
                }
                t.file.isAllowed(a=>{
                        h.RUNTIME.ALLOWS_FILE_SCHEME_ACCESS = a;
                        h.INITIALIZED = !0
                    }
                )
            }
        )()
    }
)(window.rea);
