webpackJsonp([57],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_thumbnail", function() { return Thumbnail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_3c7f3790_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_18cbe2cc_js__ = __webpack_require__(534);



var Avatar = /** @class */ (function () {
    function Avatar(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    Avatar.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["a" /* H */], { class: Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["e" /* d */])(this) }, Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("slot", null)));
    };
    Object.defineProperty(Avatar, "style", {
        get: function () { return ":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}"; },
        enumerable: true,
        configurable: true
    });
    return Avatar;
}());
var Badge = /** @class */ (function () {
    function Badge(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    Badge.prototype.render = function () {
        var _a;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["e" /* d */])(this);
        return (Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["a" /* H */], { class: Object.assign(Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_2__theme_18cbe2cc_js__["a" /* c */])(this.color)), (_a = {}, _a[mode] = true, _a)) }, Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("slot", null)));
    };
    Object.defineProperty(Badge, "style", {
        get: function () { return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}"; },
        enumerable: true,
        configurable: true
    });
    return Badge;
}());
var Thumbnail = /** @class */ (function () {
    function Thumbnail(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    Thumbnail.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["a" /* H */], { class: Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["e" /* d */])(this) }, Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("slot", null)));
    };
    Object.defineProperty(Thumbnail, "style", {
        get: function () { return ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"; },
        enumerable: true,
        configurable: true
    });
    return Thumbnail;
}());



/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return openURL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    var router;
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ })

});
//# sourceMappingURL=57.js.map