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
        if (__$ctx._.isSimple(__$ctx.ctx)) {
            var __$r = __$b33(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx._.isArray(__$ctx.ctx)) {
            var __$r = __$b35(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b36(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports) {
    var BEM_ = {}, toString = Object.prototype.toString, isArray = Array.isArray || function(obj) {
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
                        elem = undefined;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undefined;
                } else if (elem && typeof elem !== "string") {
                    elem = undefined;
                }
                if (!(elem || modName)) {
                    return block;
                }
                if (elem) return buildElemClass(block, elem, modName, modVal); else return buildBlockClass(block, modName, modVal);
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
                if (elem) res += buildElemClass(block, elem); else res += buildBlockClass(block);
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
    function BEMContext(context, apply_) {
        this.ctx = typeof context === null ? "" : context;
        this.apply = apply_;
        this._str = "";
        var self = this;
        this._buf = {
            push: function() {
                var chunks = Array.prototype.slice.call(arguments).join("");
                self._str += chunks;
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
        this.block = undefined;
        this.elem = undefined;
        this.mods = undefined;
        this.elemMods = undefined;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        var t = typeof obj;
        return t === "string" || t === "number" || t === "boolean";
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
    exports.apply = BEMContext.apply = function _apply(context) {
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
    var _this__$14 = __$ctx, BEM___$15 = _this__$14.BEM, v__$16 = __$ctx.ctx, isBEM__$17, tag__$18, result__$19;
    var __$r__$21;
    var __$l0__$22 = __$ctx._str;
    __$ctx._str = "";
    var __$r__$24;
    var __$l1__$25 = $$mode;
    $$mode = "tag";
    __$r__$24 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$25;
    tag__$18 = __$r__$24;
    typeof tag__$18 !== "undefined" || (tag__$18 = v__$16.tag);
    typeof tag__$18 !== "undefined" || (tag__$18 = "div");
    if (tag__$18) {
        var jsParams__$26, js__$27;
        if ($$block && v__$16.js !== false) {
            var __$r__$28;
            var __$l2__$29 = $$mode;
            $$mode = "js";
            __$r__$28 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$29;
            js__$27 = __$r__$28;
            js__$27 = js__$27 ? __$ctx._.extend(v__$16.js, js__$27 === true ? {} : js__$27) : v__$16.js === true ? {} : v__$16.js;
            js__$27 && ((jsParams__$26 = {})[BEM___$15.INTERNAL.buildClass($$block, v__$16.elem)] = js__$27);
        }
        __$ctx._str += "<" + tag__$18;
        var __$r__$30;
        var __$l3__$31 = $$mode;
        $$mode = "bem";
        __$r__$30 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$31;
        isBEM__$17 = __$r__$30;
        typeof isBEM__$17 !== "undefined" || (isBEM__$17 = typeof v__$16.bem !== "undefined" ? v__$16.bem : v__$16.block || v__$16.elem);
        var __$r__$33;
        var __$l4__$34 = $$mode;
        $$mode = "cls";
        __$r__$33 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$34;
        var cls__$32 = __$r__$33;
        cls__$32 || (cls__$32 = v__$16.cls);
        var addJSInitClass__$35 = v__$16.block && jsParams__$26;
        if (isBEM__$17 || cls__$32) {
            __$ctx._str += ' class="';
            if (isBEM__$17) {
                __$ctx._str += BEM___$15.INTERNAL.buildClasses($$block, v__$16.elem, v__$16.elemMods || v__$16.mods);
                var __$r__$37;
                var __$l5__$38 = $$mode;
                $$mode = "mix";
                __$r__$37 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$38;
                var mix__$36 = __$r__$37;
                v__$16.mix && (mix__$36 = mix__$36 ? mix__$36.concat(v__$16.mix) : v__$16.mix);
                if (mix__$36) {
                    var visited__$39 = {}, visitedKey__$40 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$39[visitedKey__$40($$block, $$elem)] = true;
                    if (!__$ctx._.isArray(mix__$36)) mix__$36 = [ mix__$36 ];
                    for (var i__$41 = 0; i__$41 < mix__$36.length; i__$41++) {
                        var mixItem__$42 = mix__$36[i__$41], hasItem__$43 = mixItem__$42.block || mixItem__$42.elem, block__$44 = mixItem__$42.block || mixItem__$42._block || _this__$14.block, elem__$45 = mixItem__$42.elem || mixItem__$42._elem || _this__$14.elem;
                        if (hasItem__$43) __$ctx._str += " ";
                        __$ctx._str += BEM___$15.INTERNAL[hasItem__$43 ? "buildClasses" : "buildModsClasses"](block__$44, mixItem__$42.elem || mixItem__$42._elem || (mixItem__$42.block ? undefined : _this__$14.elem), mixItem__$42.elemMods || mixItem__$42.mods);
                        if (mixItem__$42.js) {
                            (jsParams__$26 || (jsParams__$26 = {}))[BEM___$15.INTERNAL.buildClass(block__$44, mixItem__$42.elem)] = mixItem__$42.js === true ? {} : mixItem__$42.js;
                            addJSInitClass__$35 || (addJSInitClass__$35 = block__$44 && !mixItem__$42.elem);
                        }
                        if (hasItem__$43 && !visited__$39[visitedKey__$40(block__$44, elem__$45)]) {
                            visited__$39[visitedKey__$40(block__$44, elem__$45)] = true;
                            var __$r__$47;
                            var __$l6__$48 = $$mode;
                            $$mode = "mix";
                            var __$l7__$49 = $$block;
                            $$block = block__$44;
                            var __$l8__$50 = $$elem;
                            $$elem = elem__$45;
                            __$r__$47 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$48;
                            $$block = __$l7__$49;
                            $$elem = __$l8__$50;
                            var nestedMix__$46 = __$r__$47;
                            if (nestedMix__$46) {
                                for (var j__$51 = 0; j__$51 < nestedMix__$46.length; j__$51++) {
                                    var nestedItem__$52 = nestedMix__$46[j__$51];
                                    if (!nestedItem__$52.block && !nestedItem__$52.elem || !visited__$39[visitedKey__$40(nestedItem__$52.block, nestedItem__$52.elem)]) {
                                        nestedItem__$52._block = block__$44;
                                        nestedItem__$52._elem = elem__$45;
                                        mix__$36.splice(i__$41 + 1, 0, nestedItem__$52);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (cls__$32) __$ctx._str += isBEM__$17 ? " " + cls__$32 : cls__$32;
            if (addJSInitClass__$35) __$ctx._str += ' i-bem"'; else __$ctx._str += '"';
        }
        if (isBEM__$17 && jsParams__$26) {
            __$ctx._str += ' data-bem="' + __$ctx._.attrEscape(JSON.stringify(jsParams__$26)) + '"';
        }
        var __$r__$54;
        var __$l9__$55 = $$mode;
        $$mode = "attrs";
        __$r__$54 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$55;
        var attrs__$53 = __$r__$54;
        attrs__$53 = __$ctx._.extend(attrs__$53, v__$16.attrs);
        if (attrs__$53) {
            var name__$56, attr__$57;
            for (name__$56 in attrs__$53) {
                attr__$57 = attrs__$53[name__$56];
                if (attr__$57 === undefined) continue;
                __$ctx._str += " " + name__$56 + '="' + __$ctx._.attrEscape(__$ctx._.isSimple(attr__$57) ? attr__$57 : __$ctx.reapply(attr__$57)) + '"';
            }
        }
    }
    if (__$ctx._.isShortTag(tag__$18)) {
        __$ctx._str += "/>";
    } else {
        if (tag__$18) __$ctx._str += ">";
        var __$r__$59;
        var __$l10__$60 = $$mode;
        $$mode = "content";
        __$r__$59 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$60;
        var content__$58 = __$r__$59;
        if (content__$58 || content__$58 === 0) {
            isBEM__$17 = $$block || $$elem;
            var __$r__$61;
            var __$l11__$62 = $$mode;
            $$mode = "";
            var __$l12__$63 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$64 = __$ctx.position;
            __$ctx.position = isBEM__$17 ? 1 : __$ctx.position;
            var __$l14__$65 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$17 ? 1 : __$ctx._listLength;
            var __$l15__$66 = __$ctx.ctx;
            __$ctx.ctx = content__$58;
            __$r__$61 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$62;
            __$ctx._notNewList = __$l12__$63;
            __$ctx.position = __$l13__$64;
            __$ctx._listLength = __$l14__$65;
            __$ctx.ctx = __$l15__$66;
        }
        if (tag__$18) __$ctx._str += "</" + tag__$18 + ">";
    }
    result__$19 = __$ctx._str;
    __$r__$21 = undefined;
    __$ctx._str = __$l0__$22;
    __$ctx._buf.push(result__$19);
    return;
}

function __$b32(__$ctx, __$ref) {
    var __$r__$68;
    var __$l0__$69 = $$mode;
    $$mode = "";
    var __$l1__$70 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$72;
    var __$l2__$73 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$72 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$73;
    __$r__$68 = __$r__$72;
    $$mode = __$l0__$69;
    __$ctx.ctx = __$l1__$70;
    return;
}

function __$b33(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$74 = __$ctx.ctx;
    if (ctx__$74 && ctx__$74 !== true || ctx__$74 === 0) {
        __$ctx._buf.push(ctx__$74 + "");
    }
    return;
}

function __$b34(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b35(__$ctx, __$ref) {
    var v__$75 = __$ctx.ctx, l__$76 = v__$75.length, i__$77 = 0, prevPos__$78 = __$ctx.position, prevNotNewList__$79 = __$ctx._notNewList;
    if (prevNotNewList__$79) {
        __$ctx._listLength += l__$76 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = l__$76;
    }
    __$ctx._notNewList = true;
    while (i__$77 < l__$76) (function __$lb__$80() {
        var __$r__$81;
        var __$l0__$82 = __$ctx.ctx;
        __$ctx.ctx = v__$75[i__$77++];
        __$r__$81 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$82;
        return __$r__$81;
    })();
    prevNotNewList__$79 || (__$ctx.position = prevPos__$78);
    return;
}

function __$b36(__$ctx, __$ref) {
    var vBlock__$83 = __$ctx.ctx.block, vElem__$84 = __$ctx.ctx.elem, block__$85 = __$ctx._currBlock || $$block;
    __$ctx.ctx || (__$ctx.ctx = {});
    var __$r__$87;
    var __$l0__$88 = $$mode;
    $$mode = "default";
    var __$l1__$89 = $$block;
    $$block = vBlock__$83 || (vElem__$84 ? block__$85 : undefined);
    var __$l2__$90 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$83 || vElem__$84 ? undefined : block__$85;
    var __$l3__$91 = $$elem;
    $$elem = __$ctx.ctx.elem;
    var __$l4__$92 = $$mods;
    $$mods = vBlock__$83 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$93 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$87 = undefined;
    $$mode = __$l0__$88;
    $$block = __$l1__$89;
    __$ctx._currBlock = __$l2__$90;
    $$elem = __$l3__$91;
    $$mods = __$l4__$92;
    $$elemMods = __$l5__$93;
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