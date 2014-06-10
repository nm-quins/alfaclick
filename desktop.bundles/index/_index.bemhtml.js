(function(g) {
  var __bem_xjst = (function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    try {
        return applyc(ctx || this, __$ref);
    } catch (e) {
        e.xjstContext = ctx || this;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "js") {
        return undefined;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                if (__$ctx.ctx.url) {
                    return {
                        src: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return "script";
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return "link";
                }
                return "style";
            } else if (__$t === "favicon") {
                return "link";
            } else if (__$t === "link") {
                return "link";
            } else if (__$t === "meta") {
                return "meta";
            } else if (__$t === "head") {
                return "head";
            } else if (__$t === "body") {
                return "body";
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        }
        return undefined;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            } else if (__$t === "head") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "page") {
            if ($$elem === "body" && (__$ctx.__$a0 & 2) === 0) {
                return [ function __$lb__$3() {
                    var __$r__$4;
                    var __$l0__$5 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2;
                    __$r__$4 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$5;
                    return __$r__$4;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "page") {
            if ($$elem === "body" && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b27(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b28(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b29(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b32(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b33(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b35(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b36(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b27(__$ctx, __$ref) {
    __$ctx.ctx.elem = null;
    var __$r__$1;
    var __$l0__$2 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1;
    __$r__$1 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$2;
    return;
}

function __$b28(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    var __$r__$8;
    var __$l0__$9 = $$mode;
    $$mode = "";
    var __$l1__$10 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$6.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, {
                tag: "title",
                content: ctx__$6.title
            }, {
                block: "ua"
            }, ctx__$6.head, ctx__$6.styles, ctx__$6.favicon ? {
                elem: "favicon",
                url: ctx__$6.favicon
            } : "" ]
        }, __$ctx.extend(ctx__$6, {
            elem: "body"
        }) ]
    } ];
    var __$r__$12;
    var __$l2__$13 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$12 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$13;
    __$r__$8 = __$r__$12;
    $$mode = __$l0__$9;
    __$ctx.ctx = __$l1__$10;
    return;
}

function __$b29(__$ctx, __$ref) {
    var _this__$14 = __$ctx, BEM_INTERNAL__$15 = _this__$14.BEM.INTERNAL, ctx__$16 = __$ctx.ctx, isBEM__$17, tag__$18, res__$19;
    var __$r__$21;
    var __$l0__$22 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$23 = $$block;
    var __$r__$25;
    var __$l1__$26 = $$mode;
    $$mode = "tag";
    __$r__$25 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$26;
    tag__$18 = __$r__$25;
    typeof tag__$18 !== "undefined" || (tag__$18 = ctx__$16.tag);
    typeof tag__$18 !== "undefined" || (tag__$18 = "div");
    if (tag__$18) {
        var jsParams__$27, js__$28;
        if (vBlock__$23 && ctx__$16.js !== false) {
            var __$r__$29;
            var __$l2__$30 = $$mode;
            $$mode = "js";
            __$r__$29 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$30;
            js__$28 = __$r__$29;
            js__$28 = js__$28 ? __$ctx.extend(ctx__$16.js, js__$28 === true ? {} : js__$28) : ctx__$16.js === true ? {} : ctx__$16.js;
            js__$28 && ((jsParams__$27 = {})[BEM_INTERNAL__$15.buildClass(vBlock__$23, ctx__$16.elem)] = js__$28);
        }
        __$ctx._str += "<" + tag__$18;
        var __$r__$31;
        var __$l3__$32 = $$mode;
        $$mode = "bem";
        __$r__$31 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$32;
        isBEM__$17 = __$r__$31;
        typeof isBEM__$17 !== "undefined" || (isBEM__$17 = typeof ctx__$16.bem !== "undefined" ? ctx__$16.bem : ctx__$16.block || ctx__$16.elem);
        var __$r__$34;
        var __$l4__$35 = $$mode;
        $$mode = "cls";
        __$r__$34 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$35;
        var cls__$33 = __$r__$34;
        cls__$33 || (cls__$33 = ctx__$16.cls);
        var addJSInitClass__$36 = ctx__$16.block && jsParams__$27;
        if (isBEM__$17 || cls__$33) {
            __$ctx._str += ' class="';
            if (isBEM__$17) {
                __$ctx._str += BEM_INTERNAL__$15.buildClasses(vBlock__$23, ctx__$16.elem, ctx__$16.elemMods || ctx__$16.mods);
                var __$r__$38;
                var __$l5__$39 = $$mode;
                $$mode = "mix";
                __$r__$38 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$39;
                var mix__$37 = __$r__$38;
                ctx__$16.mix && (mix__$37 = mix__$37 ? mix__$37.concat(ctx__$16.mix) : ctx__$16.mix);
                if (mix__$37) {
                    var visited__$40 = {}, visitedKey__$41 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$40[visitedKey__$41(vBlock__$23, $$elem)] = true;
                    __$ctx.isArray(mix__$37) || (mix__$37 = [ mix__$37 ]);
                    for (var i__$42 = 0; i__$42 < mix__$37.length; i__$42++) {
                        var mixItem__$43 = mix__$37[i__$42], hasItem__$44 = mixItem__$43.block || mixItem__$43.elem, mixBlock__$45 = mixItem__$43.block || mixItem__$43._block || _this__$14.block, mixElem__$46 = mixItem__$43.elem || mixItem__$43._elem || _this__$14.elem;
                        hasItem__$44 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$15[hasItem__$44 ? "buildClasses" : "buildModsClasses"](mixBlock__$45, mixItem__$43.elem || mixItem__$43._elem || (mixItem__$43.block ? undefined : _this__$14.elem), mixItem__$43.elemMods || mixItem__$43.mods);
                        if (mixItem__$43.js) {
                            (jsParams__$27 || (jsParams__$27 = {}))[BEM_INTERNAL__$15.buildClass(mixBlock__$45, mixItem__$43.elem)] = mixItem__$43.js === true ? {} : mixItem__$43.js;
                            addJSInitClass__$36 || (addJSInitClass__$36 = mixBlock__$45 && !mixItem__$43.elem);
                        }
                        if (hasItem__$44 && !visited__$40[visitedKey__$41(mixBlock__$45, mixElem__$46)]) {
                            visited__$40[visitedKey__$41(mixBlock__$45, mixElem__$46)] = true;
                            var __$r__$48;
                            var __$l6__$49 = $$mode;
                            $$mode = "mix";
                            var __$l7__$50 = $$block;
                            $$block = mixBlock__$45;
                            var __$l8__$51 = $$elem;
                            $$elem = mixElem__$46;
                            __$r__$48 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$49;
                            $$block = __$l7__$50;
                            $$elem = __$l8__$51;
                            var nestedMix__$47 = __$r__$48;
                            if (nestedMix__$47) {
                                for (var j__$52 = 0; j__$52 < nestedMix__$47.length; j__$52++) {
                                    var nestedItem__$53 = nestedMix__$47[j__$52];
                                    if (!nestedItem__$53.block && !nestedItem__$53.elem || !visited__$40[visitedKey__$41(nestedItem__$53.block, nestedItem__$53.elem)]) {
                                        nestedItem__$53._block = mixBlock__$45;
                                        nestedItem__$53._elem = mixElem__$46;
                                        mix__$37.splice(i__$42 + 1, 0, nestedItem__$53);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$33 && (__$ctx._str += isBEM__$17 ? " " + cls__$33 : cls__$33);
            __$ctx._str += addJSInitClass__$36 ? ' i-bem"' : '"';
        }
        if (isBEM__$17 && jsParams__$27) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$27)) + '"';
        }
        var __$r__$55;
        var __$l9__$56 = $$mode;
        $$mode = "attrs";
        __$r__$55 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$56;
        var attrs__$54 = __$r__$55;
        attrs__$54 = __$ctx.extend(attrs__$54, ctx__$16.attrs);
        if (attrs__$54) {
            var name__$57, attr__$58;
            for (name__$57 in attrs__$54) {
                attr__$58 = attrs__$54[name__$57];
                if (typeof attr__$58 === "undefined") continue;
                __$ctx._str += " " + name__$57 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$58) ? attr__$58 : __$ctx.reapply(attr__$58)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$18)) {
        __$ctx._str += "/>";
    } else {
        tag__$18 && (__$ctx._str += ">");
        var __$r__$60;
        var __$l10__$61 = $$mode;
        $$mode = "content";
        __$r__$60 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$61;
        var content__$59 = __$r__$60;
        if (content__$59 || content__$59 === 0) {
            isBEM__$17 = vBlock__$23 || $$elem;
            var __$r__$62;
            var __$l11__$63 = $$mode;
            $$mode = "";
            var __$l12__$64 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$65 = __$ctx.position;
            __$ctx.position = isBEM__$17 ? 1 : __$ctx.position;
            var __$l14__$66 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$17 ? 1 : __$ctx._listLength;
            var __$l15__$67 = __$ctx.ctx;
            __$ctx.ctx = content__$59;
            __$r__$62 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$63;
            __$ctx._notNewList = __$l12__$64;
            __$ctx.position = __$l13__$65;
            __$ctx._listLength = __$l14__$66;
            __$ctx.ctx = __$l15__$67;
        }
        tag__$18 && (__$ctx._str += "</" + tag__$18 + ">");
    }
    res__$19 = __$ctx._str;
    __$r__$21 = undefined;
    __$ctx._str = __$l0__$22;
    __$ctx._buf.push(res__$19);
    return;
}

function __$b32(__$ctx, __$ref) {
    var __$r__$69;
    var __$l0__$70 = $$mode;
    $$mode = "";
    var __$l1__$71 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$73;
    var __$l2__$74 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$73 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$74;
    __$r__$69 = __$r__$73;
    $$mode = __$l0__$70;
    __$ctx.ctx = __$l1__$71;
    return;
}

function __$b33(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$75 = __$ctx.ctx;
    if (ctx__$75 && ctx__$75 !== true || ctx__$75 === 0) {
        __$ctx._str += ctx__$75 + "";
    }
    return;
}

function __$b34(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b35(__$ctx, __$ref) {
    var ctx__$76 = __$ctx.ctx, len__$77 = ctx__$76.length, i__$78 = 0, prevPos__$79 = __$ctx.position, prevNotNewList__$80 = __$ctx._notNewList;
    if (prevNotNewList__$80) {
        __$ctx._listLength += len__$77 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$77;
    }
    __$ctx._notNewList = true;
    while (i__$78 < len__$77) (function __$lb__$81() {
        var __$r__$82;
        var __$l0__$83 = __$ctx.ctx;
        __$ctx.ctx = ctx__$76[i__$78++];
        __$r__$82 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$83;
        return __$r__$82;
    })();
    prevNotNewList__$80 || (__$ctx.position = prevPos__$79);
    return;
}

function __$b36(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$84 = __$ctx.ctx.block, vElem__$85 = __$ctx.ctx.elem, block__$86 = __$ctx._currBlock || $$block;
    var __$r__$88;
    var __$l0__$89 = $$mode;
    $$mode = "default";
    var __$l1__$90 = $$block;
    $$block = vBlock__$84 || (vElem__$85 ? block__$86 : undefined);
    var __$l2__$91 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$84 || vElem__$85 ? undefined : block__$86;
    var __$l3__$92 = $$elem;
    $$elem = vElem__$85;
    var __$l4__$93 = $$mods;
    $$mods = vBlock__$84 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$94 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$88 = undefined;
    $$mode = __$l0__$89;
    $$block = __$l1__$90;
    __$ctx._currBlock = __$l2__$91;
    $$elem = __$l3__$92;
    $$mods = __$l4__$93;
    $$elemMods = __$l5__$94;
    return;
};
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
                   function(provide) { provide(__bem_xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst);
})(this);