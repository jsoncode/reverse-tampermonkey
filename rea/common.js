'use strict';
((g) => {
        let k;
        g.rea = k = {
            globals: window,
            extend: function (a) {
                // 此函数，会将a这个对象的所有属性，都拷贝到g.rea上去。

                const b = (e, f) => {
                        for (const c in e)
                            if (e.hasOwnProperty(c)) {
                                //getOwnPropertyDescriptor方法返回指定对象上一个自有属性对应的属性描述符
                                let d = Object.getOwnPropertyDescriptor(e, c);
                                if (d.get) {
                                    // 如果这个对象有get方法，则将这个属性c，和属性值d，绑定到对象f上。完成继承。
                                    Object.defineProperty(f, c, d);
                                } else {
                                    // 如果没有get方法，则取出当前值，赋值给d
                                    d = e[c];

                                    // 判断当前值的类型
                                    const h = typeof d;

                                    // 如果当前值类型不是undefined
                                    if ("undefined" !== h) {
                                        // 判断当前值是否是空
                                        if (null === d) {
                                            // 如果为空，则将当前值属性c的值d绑定到对象f上。
                                            f[c] = d
                                        } else if ("object" === h) {
                                            // 如果当前值是一个对象
                                            if (!f[c]) {
                                                // 根据d的类型，给f[c] 设置相同的默认对象类型
                                                f[c] = Array.isArray(d) ? [] : {}
                                            }
                                            // 递归继承
                                            b(d, f[c])
                                        } else {
                                            // 其他类型的值，直接赋值给f，比如函数类型，字符串，数字等。
                                            f[c] = d
                                        }
                                    }
                                }
                            }
                    }
                ;
                b(a, g.rea)
            }
        };
        g.rea.extend({
            page: {
                reload: function () {
                    window.location.reload()
                },
                eval: function (a) {
                    const b = document.createElementNS(document.lookupNamespaceURI(null) || "http://www.w3.org/1999/xhtml", "script");
                    b.textContent = a;
                    (document.head || document.body || document.documentElement || document).appendChild(b);
                    b.parentNode.removeChild(b)
                },
                addScript: function (a, b) {
                    const e = document.createElement("script");
                    e.setAttribute("src", a);
                    b && (e.onload = () => {
                            b(true)
                        }
                            ,
                            e.onerror = () => {
                                b(false)
                            }
                    );
                    (document.head || document.body || document.documentElement || document).appendChild(e)
                }
            },
            content: {
                onReady: function (a) {
                    const b = () => {
                        if ("complete" === document.readyState) {
                            document.removeEventListener("readystatechange", b, false);
                            a()
                        }
                    }
                    if ("complete" === document.readyState) {
                        a()
                    } else {
                        document.addEventListener("readystatechange", b, false)
                    }
                }
            },
            runtime: (() => {
                    const a = {};
                    Object.defineProperty(a, "lastError", {
                        get: function () {
                            return chrome.runtime.lastError
                        },
                        enumerable: true // 是否可被枚举
                    });
                    Object.defineProperty(a, "id", {
                        get: function () {
                            // 获取插件的id标识符。
                            return chrome.runtime.id
                        },
                        enumerable: true
                    });
                    Object.defineProperty(a, "short_id", {
                        get: function () {
                            return a.id.replace(/[^0-9a-zA-Z]/g, "").substring(0, 4)
                        },
                        enumerable: true
                    });
                    return a
                }
            )(),
            extension: {
                inIncognitoContext: chrome.extension.inIncognitoContext,
                getURL: function (a) {
                    return chrome.runtime.getURL(a)
                },
                sendMessage: function (a, b) {
                    return chrome.runtime.sendMessage(a, b)
                },
                onMessage: {
                    addListener: function (a) {
                        return chrome.runtime.onMessage.addListener(a)
                    }
                },
                connect: function (a) {
                    return chrome.runtime.connect({
                        name: a
                    })
                }
            }
        });
        g.rea.extend((() => {
                let browserVersion = parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2])
                let isOpera = navigator.userAgent.indexOf("OPR/") > -1
                let minDelay = navigator.userAgent.indexOf("Mac OS X") > -1 ? 150 : 0;
                let isMobile = navigator.userAgent.search(/Android|Mobile/) > -1
                let d = {
                    CONSTANTS: {
                        STORAGE: {
                            SCHEMA: "#schema",
                            TYPE: "#storage",
                            CONFIG: "#config",
                            SESSION: "#session",
                            VERSION: "#version",
                            LEGACY_VERSION: "TM_version",
                            LAST_START: "#laststart",
                            UPDATE: "#update",
                            BEGGING: "#begging"
                        },
                        PREFIX: {
                            SCRIPT_UID: "@uid#",
                            COND: "@re#",
                            STORE: "@st#",
                            SCRIPT: "@source#",
                            EXTERNAL: "@ext#",
                            META: "@meta#"
                        }
                    },
                    RUNTIME: {
                        BROWSER: isOpera ? "opera" : "chrome",
                        CHROME: !isOpera,
                        OPERA: isOpera,
                        MOBILE: isMobile,
                        BROWSER_VERSION: browserVersion,
                        FAST_EXEC_SUPPORT: true,
                        DETECT_CONSTRUCTORS_BY_KEYS: 60 <= browserVersion,
                        ALLOWS_FILE_SCHEME_ACCESS: null,
                        MAX_SCRIPTS: 1000,
                        WEBREQUEST_XHR_SUPPORT: true,
                        WEBREQUEST_WEBSOCKET: false,
                        CAN_SAVEAS_ZIP: true,
                        SHARED_OBJECT_URLS: true,
                        CONTEXT_MENU: true,
                        INCOGNITO_MODE: true
                    },
                    ACTIONMENU: {
                        CLOSE_ALLOWED: true,
                        MIN_DELAY: minDelay
                    },
                    OPTIONPAGE: {
                        CLOSE_ALLOWED: false
                    },
                    DB: {
                        USE: null,
                        DEFAULT: "chromeStorage",
                        SECURE: false
                    },
                    XMLHTTPREQUEST: {
                        RETRIES: 0,
                        PARTIAL_SIZE: 16777216,
                        COOKIE_PASSTHROUGH: false
                    },
                    SCRIPT_DOWNLOAD: {
                        TIMEOUT: 60
                    },
                    PINGPONG: {
                        RETRIES: 2
                    },
                    MISC: {
                        TIMEOUT: 1,
                        IDLE_TIMEOUT: 15,
                        DISTURBANCE_ALLOWED: 60
                    },
                    HTML5: {
                        LOCALSTORAGE: null
                    },
                    PERMISSIONS: {
                        ALL_URLS: "<all_urls>"
                    },
                    REQUESTS: {
                        HAS_SENDER_ID: true,
                        INTERNAL_PAGE_PROTOCOLS: ["chrome-extension:"],
                        SENDS_ORIGIN: true,
                        GET_INTERNAL_PATH_REGEXP: function (c, h) {
                            const l = /([/.+?|()\[\]{}\\])/g
                            // const l = /(\/|\.|\+|\?|\||\(|\)|\[|]|\{|}|\\)/g;
                            return new RegExp(("chrome-extension://" + k.runtime.id + "/").replace(l, "\\$1") + "([a-zA-Z" + (c ? "\\/" : "") + "]*)" + (h || "").replace(l, "\\$1"))
                        },
                        GET_INTERNAL_PAGE_REGEXP: function () {
                            return d.REQUESTS.GET_INTERNAL_PATH_REGEXP(false, ".html")
                        }
                    },
                    OPTIONS: {
                        HAS_CSP: true,
                        CAN_DOWNLOAD: true
                    }
                };
                return {
                    FEATURES: d
                }
            }
        )())
    }
)(window);
