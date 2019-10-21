webpackJsonp([38],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_progress_bar", function() { return ProgressBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_3c7f3790_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_46f4a262_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_18cbe2cc_js__ = __webpack_require__(534);




var ProgressBar = /** @class */ (function () {
    function ProgressBar(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        /**
         * The state of the progress bar, based on if the time the process takes is known or not.
         * Default options are: `"determinate"` (no animation), `"indeterminate"` (animate from left to right).
         */
        this.type = 'determinate';
        /**
         * If true, reverse the progress bar direction.
         */
        this.reversed = false;
        /**
         * The value determines how much of the active bar should display when the
         * `type` is `"determinate"`.
         * The value should be between [0, 1].
         */
        this.value = 0;
        /**
         * If the buffer and value are smaller than 1, the buffer circles will show.
         * The buffer should be between [0, 1].
         */
        this.buffer = 1;
    }
    ProgressBar.prototype.render = function () {
        var _a;
        var _b = this, color = _b.color, type = _b.type, reversed = _b.reversed, value = _b.value, buffer = _b.buffer;
        var paused = __WEBPACK_IMPORTED_MODULE_1__config_3c7f3790_js__["b"].getBoolean('_testing');
        var mode = Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["e" /* d */])(this);
        return (Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["a" /* H */], { role: "progressbar", "aria-valuenow": type === 'determinate' ? value : null, "aria-valuemin": "0", "aria-valuemax": "1", class: Object.assign(Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_3__theme_18cbe2cc_js__["a" /* c */])(color)), (_a = {}, _a[mode] = true, _a["progress-bar-" + type] = true, _a['progress-paused'] = paused, _a['progress-bar-reversed'] = document.dir === 'rtl' ? !reversed : reversed, _a)) }, type === 'indeterminate'
            ? renderIndeterminate()
            : renderProgress(value, buffer)));
    };
    Object.defineProperty(ProgressBar, "style", {
        get: function () { return ":host{--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.2);--progress-background:var(--ion-color-primary,#3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}:host(.ion-color){--progress-background:var(--ion-color-base);--buffer-background:rgba(var(--ion-color-base-rgb),0.2)}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.buffer-circles,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress,.progress-buffer-bar,.progress-buffer-bar:before,.progress-indeterminate{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s linear;transition:-webkit-transform .15s linear;transition:transform .15s linear;transition:transform .15s linear,-webkit-transform .15s linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:#fff;z-index:1}.progress-buffer-bar:before{background:var(--buffer-background);content:\"\"}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s linear infinite;animation:primary-indeterminate-translate 2s linear infinite}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s linear infinite;animation:primary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s linear infinite;animation:secondary-indeterminate-translate 2s linear infinite}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s linear infinite;animation:secondary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background:radial-gradient(ellipse at center,var(--buffer-background) 0,var(--buffer-background) 30%,transparent 0) repeat-x 5px;background-size:10px 10px;z-index:0;-webkit-animation:buffering .45s linear infinite;animation:buffering .45s linear infinite}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{-webkit-transform-origin:right top;transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .buffer-circles,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .indeterminate-bar-secondary{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}\@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}\@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}to{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}\@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}to{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}\@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}\@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:3px}"; },
        enumerable: true,
        configurable: true
    });
    return ProgressBar;
}());
var renderIndeterminate = function () {
    return [
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("div", { class: "indeterminate-bar-primary" }, Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("span", { class: "progress-indeterminate" })),
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("div", { class: "indeterminate-bar-secondary" }, Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("span", { class: "progress-indeterminate" }))
    ];
};
var renderProgress = function (value, buffer) {
    var finalValue = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_46f4a262_js__["c"])(0, value, 1);
    var finalBuffer = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_46f4a262_js__["c"])(0, buffer, 1);
    return [
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("div", { class: "progress", style: { transform: "scaleX(" + finalValue + ")" } }),
        finalBuffer !== 1 && Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("div", { class: "buffer-circles" }),
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])("div", { class: "progress-buffer-bar", style: { transform: "scaleX(" + finalBuffer + ")" } }),
    ];
};



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
//# sourceMappingURL=38.js.map