webpackJsonp([3],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_app", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_buttons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_outlet", function() { return RouterOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_title", function() { return ToolbarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toolbar", function() { return Toolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_3c3e1099_js__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_18cbe2cc_js__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_delegate_c2e2e1f4_js__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_35276576_js__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__ = __webpack_require__(539);









var App = /** @class */ (function () {
    function App(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    App.prototype.componentDidLoad = function () {
        {
            rIC(function () {
                var isHybrid = Object(__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["f" /* i */])(window, 'hybrid');
                if (!__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].getBoolean('_testing')) {
                    __webpack_require__.e/* import() */(87/* duplicate */).then(__webpack_require__.bind(null, 544)).then(function (module) { return module.startTapClick(__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"]); });
                }
                if (__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].getBoolean('statusTap', isHybrid)) {
                    __webpack_require__.e/* import() */(89/* duplicate */).then(__webpack_require__.bind(null, 545)).then(function (module) { return module.startStatusTap(); });
                }
                if (__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].getBoolean('inputShims', needInputShims())) {
                    __webpack_require__.e/* import() */(90/* duplicate */).then(__webpack_require__.bind(null, 546)).then(function (module) { return module.startInputShims(__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"]); });
                }
                if (__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].getBoolean('hardwareBackButton', isHybrid)) {
                    __webpack_require__.e/* import() */(91/* duplicate */).then(__webpack_require__.bind(null, 547)).then(function (module) { return module.startHardwareBackButton(); });
                }
                __webpack_require__.e/* import() */(92/* duplicate */).then(__webpack_require__.bind(null, 548)).then(function (module) { return module.startFocusVisible(); });
            });
        }
    };
    App.prototype.render = function () {
        var _a;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { class: (_a = {},
                _a[mode] = true,
                _a['ion-page'] = true,
                _a['force-statusbar-padding'] = __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].getBoolean('_forceStatusbarPadding'),
                _a) }));
    };
    Object.defineProperty(App.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "style", {
        get: function () { return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"; },
        enumerable: true,
        configurable: true
    });
    return App;
}());
var needInputShims = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["f" /* i */])(window, 'ios') && Object(__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["f" /* i */])(window, 'mobile');
};
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var Buttons = /** @class */ (function () {
    function Buttons(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        /**
         * If true, buttons will disappear when its
         * parent toolbar has fully collapsed if the toolbar
         * is not the first toolbar. If the toolbar is the
         * first toolbar, the buttons will be hidden and will
         * only be shown once all toolbars have fully collapsed.
         *
         * Only applies in `ios` mode with `collapse` set to
         * `true` on `ion-header`.
         *
         * Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)
         */
        this.collapse = false;
    }
    Buttons.prototype.render = function () {
        var _a;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { class: (_a = {},
                _a[mode] = true,
                _a['buttons-collapse'] = this.collapse,
                _a) }));
    };
    Object.defineProperty(Buttons, "style", {
        get: function () { return ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-tint);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:rgba(66,66,66,0.08)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a);--background-hover:rgba(66,66,66,0.92)}.sc-ion-buttons-md-s  .button-outline {--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear {--background:transparent;--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"; },
        enumerable: true,
        configurable: true
    });
    return Buttons;
}());
var Content = /** @class */ (function () {
    function class_1(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.isScrolling = false;
        this.lastScroll = 0;
        this.queued = false;
        this.cTop = -1;
        this.cBottom = -1;
        this.mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        // Detail is used in a hot loop in the scroll event, by allocating it here
        // V8 will be able to inline any read/write to it since it's a monomorphic class.
        // https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
        this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: 'scroll',
            event: undefined,
            startX: 0,
            startY: 0,
            startTimeStamp: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            timeStamp: 0,
            data: undefined,
            isScrolling: true,
        };
        /**
         * If `true`, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */
        this.fullscreen = false;
        /**
         * If you want to enable the content scrolling in the X axis, set this property to `true`.
         */
        this.scrollX = false;
        /**
         * If you want to disable the content scrolling in the Y axis, set this property to `false`.
         */
        this.scrollY = true;
        /**
         * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
         * and start listening from (ionScroll), set this property to `true`.
         */
        this.scrollEvents = false;
        this.ionScrollStart = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionScrollStart", 7);
        this.ionScroll = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionScroll", 7);
        this.ionScrollEnd = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionScrollEnd", 7);
    }
    class_1.prototype.disconnectedCallback = function () {
        this.onScrollEnd();
    };
    class_1.prototype.componentDidLoad = function () {
        this.resize();
    };
    class_1.prototype.onClick = function (ev) {
        if (this.isScrolling) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    class_1.prototype.shouldForceOverscroll = function () {
        var _a = this, forceOverscroll = _a.forceOverscroll, mode = _a.mode;
        return forceOverscroll === undefined
            ? mode === 'ios' && Object(__WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["f" /* i */])('ios')
            : forceOverscroll;
    };
    class_1.prototype.resize = function () {
        if (this.fullscreen) {
            Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["g" /* f */])(this.readDimensions.bind(this));
        }
        else if (this.cTop !== 0 || this.cBottom !== 0) {
            this.cTop = this.cBottom = 0;
            this.el.forceUpdate();
        }
    };
    class_1.prototype.readDimensions = function () {
        var page = getPageElement(this.el);
        var top = Math.max(this.el.offsetTop, 0);
        var bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        var dirty = top !== this.cTop || bottom !== this.cBottom;
        if (dirty) {
            this.cTop = top;
            this.cBottom = bottom;
            this.el.forceUpdate();
        }
    };
    class_1.prototype.onScroll = function (ev) {
        var _this = this;
        var timeStamp = Date.now();
        var shouldStart = !this.isScrolling;
        this.lastScroll = timeStamp;
        if (shouldStart) {
            this.onScrollStart();
        }
        if (!this.queued && this.scrollEvents) {
            this.queued = true;
            Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["g" /* f */])(function (ts) {
                _this.queued = false;
                _this.detail.event = ev;
                updateScrollDetail(_this.detail, _this.scrollEl, ts, shouldStart);
                _this.ionScroll.emit(_this.detail);
            });
        }
    };
    /**
     * Get the element where the actual scrolling takes place.
     * This element can be used to subscribe to `scroll` events or manually modify
     * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
     *
     * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
     * and `scrollToPoint()` to scroll the content into a certain point.
     */
    class_1.prototype.getScrollElement = function () {
        return Promise.resolve(this.scrollEl);
    };
    /**
     * Scroll to the top of the component.
     *
     * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
     */
    class_1.prototype.scrollToTop = function (duration) {
        if (duration === void 0) { duration = 0; }
        return this.scrollToPoint(undefined, 0, duration);
    };
    /**
     * Scroll to the bottom of the component.
     *
     * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
     */
    class_1.prototype.scrollToBottom = function (duration) {
        if (duration === void 0) { duration = 0; }
        var y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
        return this.scrollToPoint(undefined, y, duration);
    };
    /**
     * Scroll by a specified X/Y distance in the component.
     *
     * @param x The amount to scroll by on the horizontal axis.
     * @param y The amount to scroll by on the vertical axis.
     * @param duration The amount of time to take scrolling by that amount.
     */
    class_1.prototype.scrollByPoint = function (x, y, duration) {
        return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
    };
    /**
     * Scroll to a specified X/Y location in the component.
     *
     * @param x The point to scroll to on the horizontal axis.
     * @param y The point to scroll to on the vertical axis.
     * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
     */
    class_1.prototype.scrollToPoint = function (x, y, duration) {
        if (duration === void 0) { duration = 0; }
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var el, resolve, startTime, promise, fromY, fromX, deltaY, deltaX, step;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                el = this.scrollEl;
                if (duration < 32) {
                    if (y != null) {
                        el.scrollTop = y;
                    }
                    if (x != null) {
                        el.scrollLeft = x;
                    }
                    return [2 /*return*/];
                }
                startTime = 0;
                promise = new Promise(function (r) { return resolve = r; });
                fromY = el.scrollTop;
                fromX = el.scrollLeft;
                deltaY = y != null ? y - fromY : 0;
                deltaX = x != null ? x - fromX : 0;
                step = function (timeStamp) {
                    var linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
                    var easedT = Math.pow(linearTime, 3) + 1;
                    if (deltaY !== 0) {
                        el.scrollTop = Math.floor((easedT * deltaY) + fromY);
                    }
                    if (deltaX !== 0) {
                        el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
                    }
                    if (easedT < 1) {
                        // do not use DomController here
                        // must use nativeRaf in order to fire in the next frame
                        // TODO: remove as any
                        requestAnimationFrame(step);
                    }
                    else {
                        resolve();
                    }
                };
                // chill out for a frame first
                requestAnimationFrame(function (ts) {
                    startTime = ts;
                    step(ts);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    class_1.prototype.onScrollStart = function () {
        var _this = this;
        this.isScrolling = true;
        this.ionScrollStart.emit({
            isScrolling: true
        });
        if (this.watchDog) {
            clearInterval(this.watchDog);
        }
        // watchdog
        this.watchDog = setInterval(function () {
            if (_this.lastScroll < Date.now() - 120) {
                _this.onScrollEnd();
            }
        }, 100);
    };
    class_1.prototype.onScrollEnd = function () {
        clearInterval(this.watchDog);
        this.watchDog = null;
        if (this.isScrolling) {
            this.isScrolling = false;
            this.ionScrollEnd.emit({
                isScrolling: false
            });
        }
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, scrollX = _b.scrollX, scrollY = _b.scrollY;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        var forceOverscroll = this.shouldForceOverscroll();
        var transitionShadow = (mode === 'ios' && __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].getBoolean('experimentalTransitionShadow', true));
        this.resize();
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { class: Object.assign(Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_5__theme_18cbe2cc_js__["a" /* c */])(this.color)), (_a = {}, _a[mode] = true, _a['content-sizing'] = Object(__WEBPACK_IMPORTED_MODULE_5__theme_18cbe2cc_js__["c" /* h */])('ion-popover', this.el), _a['overscroll'] = forceOverscroll, _a)), style: {
                '--offset-top': this.cTop + "px",
                '--offset-bottom': this.cBottom + "px",
            } }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("main", { class: {
                'inner-scroll': true,
                'scroll-x': scrollX,
                'scroll-y': scrollY,
                'overscroll': (scrollX || scrollY) && forceOverscroll
            }, ref: function (el) { return _this.scrollEl = el; }, onScroll: function (ev) { return _this.onScroll(ev); } }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", null)), transitionShadow ? (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "transition-effect" }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "transition-cover" }), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "transition-shadow" }))) : null, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", { name: "fixed" })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var getParentElement = function (el) {
    if (el.parentElement) {
        // normal element with a parent element
        return el.parentElement;
    }
    if (el.parentNode && el.parentNode.host) {
        // shadow dom's document fragment
        return el.parentNode.host;
    }
    return null;
};
var getPageElement = function (el) {
    var tabs = el.closest('ion-tabs');
    if (tabs) {
        return tabs;
    }
    var page = el.closest('ion-app,ion-page,.ion-page,page-inner');
    if (page) {
        return page;
    }
    return getParentElement(el);
};
// ******** DOM READ ****************
var updateScrollDetail = function (detail, el, timestamp, shouldStart) {
    var prevX = detail.currentX;
    var prevY = detail.currentY;
    var prevT = detail.timeStamp;
    var currentX = el.scrollLeft;
    var currentY = el.scrollTop;
    var timeDelta = timestamp - prevT;
    if (shouldStart) {
        // remember the start positions
        detail.startTimeStamp = timestamp;
        detail.startX = currentX;
        detail.startY = currentY;
        detail.velocityX = detail.velocityY = 0;
    }
    detail.timeStamp = timestamp;
    detail.currentX = detail.scrollLeft = currentX;
    detail.currentY = detail.scrollTop = currentY;
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    if (timeDelta > 0 && timeDelta < 100) {
        var velocityX = (currentX - prevX) / timeDelta;
        var velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
};
var Footer = /** @class */ (function () {
    function Footer(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        /**
         * If `true`, the footer will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    Footer.prototype.render = function () {
        var _a;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        var translucent = this.translucent;
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { role: "contentinfo", class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["footer-" + mode] = true,
                _a["footer-translucent"] = translucent,
                _a["footer-translucent-" + mode] = translucent,
                _a) }));
    };
    Object.defineProperty(Footer, "style", {
        get: function () { return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return Footer;
}());
var TRANSITION = 'all 0.2s ease-in-out';
var cloneElement = function (tagName) {
    var getCachedEl = document.querySelector(tagName + ".ion-cloned-element");
    if (getCachedEl !== null) {
        return getCachedEl;
    }
    var clonedEl = document.createElement(tagName);
    clonedEl.classList.add('ion-cloned-element');
    clonedEl.style.setProperty('display', 'none');
    document.body.appendChild(clonedEl);
    return clonedEl;
};
var createHeaderIndex = function (headerEl) {
    if (!headerEl) {
        return;
    }
    var toolbars = headerEl.querySelectorAll('ion-toolbar');
    return {
        el: headerEl,
        toolbars: Array.from(toolbars).map(function (toolbar) {
            var ionTitleEl = toolbar.querySelector('ion-title');
            return {
                el: toolbar,
                background: toolbar.shadowRoot.querySelector('.toolbar-background'),
                ionTitleEl: ionTitleEl,
                innerTitleEl: (ionTitleEl) ? ionTitleEl.shadowRoot.querySelector('.toolbar-title') : null,
                ionButtonsEl: Array.from(toolbar.querySelectorAll('ion-buttons')) || []
            };
        }) || [[]]
    };
};
var handleContentScroll = function (scrollEl, mainHeaderIndex, scrollHeaderIndex, remainingHeight) {
    if (remainingHeight === void 0) { remainingHeight = 0; }
    Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["g" /* f */])(function () {
        var scrollTop = scrollEl.scrollTop;
        var lastMainToolbar = mainHeaderIndex.toolbars[mainHeaderIndex.toolbars.length - 1];
        var scale = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["c"])(1, 1 + (-scrollTop / 500), 1.1);
        var borderOpacity = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["c"])(0, (scrollTop - remainingHeight) / lastMainToolbar.el.clientHeight, 1);
        var maxOpacity = 1;
        var scaledOpacity = borderOpacity * maxOpacity;
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["m" /* w */])(function () {
            scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
            setToolbarBackgroundOpacity(mainHeaderIndex.toolbars[0], (scaledOpacity === 1) ? undefined : scaledOpacity);
        });
    });
};
var setToolbarBackgroundOpacity = function (toolbar, opacity) {
    if (opacity === undefined) {
        toolbar.background.style.removeProperty('--opacity');
    }
    else {
        toolbar.background.style.setProperty('--opacity', opacity.toString());
    }
};
/**
 * If toolbars are intersecting, hide the scrollable toolbar content
 * and show the primary toolbar content. If the toolbars are not intersecting,
 * hide the primary toolbar content and show the scrollable toolbar content
 */
var handleToolbarIntersection = function (ev, mainHeaderIndex, scrollHeaderIndex) {
    Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["m" /* w */])(function () {
        var event = ev[0];
        var intersection = event.intersectionRect;
        var intersectionArea = intersection.width * intersection.height;
        var rootArea = event.rootBounds.width * event.rootBounds.height;
        var isPageHidden = intersectionArea === 0 && rootArea === 0;
        var leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
        var rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
        var isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
        if (isPageHidden || isPageTransitioning) {
            return;
        }
        if (event.isIntersecting) {
            setHeaderActive(mainHeaderIndex, false);
            setHeaderActive(scrollHeaderIndex);
        }
        else {
            /**
             * There is a bug with IntersectionObserver on Safari
             * where `event.isIntersecting === false` when cancelling
             * a swipe to go back gesture. Checking the intersection
             * x, y, width, and height provides a workaround. This bug
             * does not happen when using Safari + Web Animations,
             * only Safari + CSS Animations.
             */
            var hasValidIntersection = (intersection.x === 0 && intersection.y === 0) || (intersection.width !== 0 && intersection.height !== 0);
            if (hasValidIntersection) {
                setHeaderActive(mainHeaderIndex);
                setHeaderActive(scrollHeaderIndex, false);
            }
        }
    });
};
var setHeaderActive = function (headerIndex, active) {
    if (active === void 0) { active = true; }
    Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["m" /* w */])(function () {
        if (active) {
            headerIndex.el.classList.remove('header-collapse-condense-inactive');
        }
        else {
            headerIndex.el.classList.add('header-collapse-condense-inactive');
        }
        setToolbarBackgroundOpacity(headerIndex.toolbars[0], (active) ? undefined : 0);
    });
};
var scaleLargeTitles = function (toolbars, scale, transition) {
    if (toolbars === void 0) { toolbars = []; }
    if (scale === void 0) { scale = 1; }
    if (transition === void 0) { transition = false; }
    toolbars.forEach(function (toolbar) {
        var ionTitle = toolbar.ionTitleEl;
        var titleDiv = toolbar.innerTitleEl;
        if (!ionTitle || ionTitle.size !== 'large') {
            return;
        }
        titleDiv.style.transformOrigin = 'left center';
        titleDiv.style.transition = (transition) ? TRANSITION : '';
        titleDiv.style.transform = "scale3d(" + scale + ", " + scale + ", 1)";
    });
};
var Header = /** @class */ (function () {
    function class_2(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.collapsibleHeaderInitialized = false;
        /**
         * If `true`, the header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    class_2.prototype.componentDidLoad = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkCollapsibleHeader()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.componentDidUpdate = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkCollapsibleHeader()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.componentDidUnload = function () {
        this.destroyCollapsibleHeader();
    };
    class_2.prototype.checkCollapsibleHeader = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var hasCollapse, canCollapse, tabs, page, pageEl, contentEl;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasCollapse = this.collapse === 'condense';
                        canCollapse = (hasCollapse && Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this) === 'ios') ? hasCollapse : false;
                        if (!(!canCollapse && this.collapsibleHeaderInitialized)) return [3 /*break*/, 1];
                        this.destroyCollapsibleHeader();
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(canCollapse && !this.collapsibleHeaderInitialized)) return [3 /*break*/, 3];
                        tabs = this.el.closest('ion-tabs');
                        page = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
                        pageEl = (tabs) ? tabs : (page) ? page : null;
                        contentEl = (pageEl) ? pageEl.querySelector('ion-content') : null;
                        return [4 /*yield*/, this.setupCollapsibleHeader(contentEl, pageEl)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.destroyCollapsibleHeader = function () {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = undefined;
        }
        if (this.scrollEl && this.contentScrollCallback) {
            this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
            this.contentScrollCallback = undefined;
        }
    };
    class_2.prototype.setupCollapsibleHeader = function (contentEl, pageEl) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!contentEl || !pageEl) {
                            console.error('ion-header requires a content to collapse, make sure there is an ion-content.');
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 1:
                        _a.scrollEl = _b.sent();
                        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["g" /* f */])(function () {
                            var headers = pageEl.querySelectorAll('ion-header');
                            var mainHeader = Array.from(headers).find(function (header) { return header.collapse !== 'condense'; });
                            if (!mainHeader || !_this.scrollEl) {
                                return;
                            }
                            var mainHeaderIndex = createHeaderIndex(mainHeader);
                            var scrollHeaderIndex = createHeaderIndex(_this.el);
                            if (!mainHeaderIndex || !scrollHeaderIndex) {
                                return;
                            }
                            setHeaderActive(mainHeaderIndex, false);
                            // TODO: Find a better way to do this
                            var remainingHeight = 0;
                            for (var i = 1; i <= scrollHeaderIndex.toolbars.length - 1; i++) {
                                remainingHeight += scrollHeaderIndex.toolbars[i].el.clientHeight;
                            }
                            /**
                             * Handle interaction between toolbar collapse and
                             * showing/hiding content in the primary ion-header
                             */
                            var toolbarIntersection = function (ev) { handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex); };
                            Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["g" /* f */])(function () {
                                var mainHeaderHeight = mainHeaderIndex.el.clientHeight;
                                _this.intersectionObserver = new IntersectionObserver(toolbarIntersection, { threshold: 0.25, rootMargin: "-" + mainHeaderHeight + "px 0px 0px 0px" });
                                _this.intersectionObserver.observe(scrollHeaderIndex.toolbars[0].el);
                            });
                            /**
                             * Handle scaling of large iOS titles and
                             * showing/hiding border on last toolbar
                             * in primary header
                             */
                            _this.contentScrollCallback = function () { handleContentScroll(_this.scrollEl, mainHeaderIndex, scrollHeaderIndex, remainingHeight); };
                            _this.scrollEl.addEventListener('scroll', _this.contentScrollCallback);
                        });
                        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["m" /* w */])(function () {
                            cloneElement('ion-title');
                            cloneElement('ion-back-button');
                        });
                        this.collapsibleHeaderInitialized = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.render = function () {
        var _a;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        var collapse = this.collapse || 'none';
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { role: "banner", class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["header-" + mode] = true,
                _a["header-translucent"] = this.translucent,
                _a["header-collapse-" + collapse] = true,
                _a["header-translucent-" + mode] = this.translucent,
                _a) }));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-collapse-condense,.header-md[no-border]:after{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var RouterOutlet = /** @class */ (function () {
    function class_3(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.animationEnabled = true;
        /**
         * The mode determines which platform styles to use.
         */
        this.mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        /**
         * If `true`, the router-outlet should animate the transition of components.
         */
        this.animated = true;
        this.ionNavWillLoad = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionNavDidChange", 3);
    }
    class_3.prototype.swipeHandlerChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeHandler === undefined);
        }
    };
    class_3.prototype.connectedCallback = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __webpack_require__.e/* import() */(86/* duplicate */).then(__webpack_require__.bind(null, 543))];
                    case 1:
                        _a.gesture = (_b.sent()).createSwipeBackGesture(this.el, function () { return !!_this.swipeHandler && _this.swipeHandler.canStart() && _this.animationEnabled; }, function () { return _this.swipeHandler && _this.swipeHandler.onStart(); }, function (step) { return _this.ani && _this.ani.progressStep(step); }, function (shouldComplete, step, dur) {
                            if (_this.ani) {
                                _this.animationEnabled = false;
                                _this.ani.onFinish(function () {
                                    _this.animationEnabled = true;
                                    if (_this.swipeHandler) {
                                        _this.swipeHandler.onEnd(shouldComplete);
                                    }
                                }, { oneTimeCallback: true });
                                // Account for rounding errors in JS
                                var newStepValue = (shouldComplete) ? -0.001 : 0.001;
                                /**
                                 * Animation will be reversed here, so need to
                                 * reverse the easing curve as well
                                 *
                                 * Additionally, we need to account for the time relative
                                 * to the new easing curve, as `stepValue` is going to be given
                                 * in terms of a linear curve.
                                 */
                                if (!shouldComplete) {
                                    _this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                                    newStepValue += Object(__WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["b" /* g */])(new __WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["a" /* P */](0, 0), new __WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["a" /* P */](1, 0), new __WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["a" /* P */](0.68, 0.28), new __WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["a" /* P */](1, 1), step);
                                }
                                else {
                                    newStepValue += Object(__WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["b" /* g */])(new __WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["a" /* P */](0, 0), new __WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["a" /* P */](0.32, 0.72), new __WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["a" /* P */](0, 1), new __WEBPACK_IMPORTED_MODULE_8__cubic_bezier_fc4a068b_js__["a" /* P */](1, 1), step);
                                }
                                _this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
                            }
                        });
                        this.swipeHandlerChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.componentWillLoad = function () {
        this.ionNavWillLoad.emit();
    };
    class_3.prototype.disconnectedCallback = function () {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    };
    /** @internal */
    class_3.prototype.commit = function (enteringEl, leavingEl, opts) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var unlock, changed, e_1;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lock()];
                    case 1:
                        unlock = _a.sent();
                        changed = false;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.transition(enteringEl, leavingEl, opts)];
                    case 3:
                        changed = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        unlock();
                        return [2 /*return*/, changed];
                }
            });
        });
    };
    /** @internal */
    class_3.prototype.setRouteId = function (id, params, direction) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var changed;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setRoot(id, params, {
                            duration: direction === 'root' ? 0 : undefined,
                            direction: direction === 'back' ? 'back' : 'forward',
                        })];
                    case 1:
                        changed = _a.sent();
                        return [2 /*return*/, {
                                changed: changed,
                                element: this.activeEl
                            }];
                }
            });
        });
    };
    /** @internal */
    class_3.prototype.getRouteId = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var active;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                active = this.activeEl;
                return [2 /*return*/, active ? {
                        id: active.tagName,
                        element: active,
                    } : undefined];
            });
        });
    };
    class_3.prototype.setRoot = function (component, params, opts) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var leavingEl, enteringEl;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.activeComponent === component) {
                            return [2 /*return*/, false];
                        }
                        leavingEl = this.activeEl;
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_6__framework_delegate_c2e2e1f4_js__["a"])(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params)];
                    case 1:
                        enteringEl = _a.sent();
                        this.activeComponent = component;
                        this.activeEl = enteringEl;
                        // commit animation
                        return [4 /*yield*/, this.commit(enteringEl, leavingEl, opts)];
                    case 2:
                        // commit animation
                        _a.sent();
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_6__framework_delegate_c2e2e1f4_js__["b" /* d */])(this.delegate, leavingEl)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_3.prototype.transition = function (enteringEl, leavingEl, opts) {
        if (opts === void 0) { opts = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _a, el, mode, animated, animationBuilder;
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (leavingEl === enteringEl) {
                            return [2 /*return*/, false];
                        }
                        // emit nav will change event
                        this.ionNavWillChange.emit();
                        _a = this, el = _a.el, mode = _a.mode;
                        animated = this.animated && __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].getBoolean('animated', true);
                        animationBuilder = this.animation || opts.animationBuilder || __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].get('navAnimation');
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_7__index_35276576_js__["d" /* t */])(Object.assign({ mode: mode,
                                animated: animated,
                                animationBuilder: animationBuilder,
                                enteringEl: enteringEl,
                                leavingEl: leavingEl, baseEl: el, progressCallback: (opts.progressAnimation
                                    ? function (ani) { return _this.ani = ani; }
                                    : undefined) }, opts))];
                    case 1:
                        _b.sent();
                        // emit nav changed event
                        this.ionNavDidChange.emit();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_3.prototype.lock = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var p, resolve;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = this.waitPromise;
                        this.waitPromise = new Promise(function (r) { return resolve = r; });
                        if (!(p !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, p];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolve];
                }
            });
        });
    };
    class_3.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", null));
    };
    Object.defineProperty(class_3.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "swipeHandler": ["swipeHandlerChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var ToolbarTitle = /** @class */ (function () {
    function ToolbarTitle(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.ionStyle = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionStyle", 7);
    }
    ToolbarTitle.prototype.sizeChanged = function () {
        this.emitStyle();
    };
    ToolbarTitle.prototype.connectedCallback = function () {
        this.emitStyle();
    };
    ToolbarTitle.prototype.emitStyle = function () {
        var _a;
        var size = this.getSize();
        this.ionStyle.emit((_a = {},
            _a["title-" + size] = true,
            _a));
    };
    ToolbarTitle.prototype.getSize = function () {
        return (this.size !== undefined) ? this.size : 'default';
    };
    ToolbarTitle.prototype.getMode = function () {
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        var toolbar = this.el.closest('ion-toolbar');
        return (toolbar && toolbar.mode) || mode;
    };
    ToolbarTitle.prototype.render = function () {
        var _a;
        var mode = this.getMode();
        var size = this.getSize();
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { class: Object.assign((_a = {}, _a[mode] = true, _a["title-" + mode] = true, _a["title-" + size] = true, _a), Object(__WEBPACK_IMPORTED_MODULE_5__theme_18cbe2cc_js__["a" /* c */])(this.color)) }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "toolbar-title" }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", null))));
    };
    Object.defineProperty(ToolbarTitle.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarTitle, "watchers", {
        get: function () {
            return {
                "size": ["sizeChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarTitle, "style", {
        get: function () { return ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"; },
        enumerable: true,
        configurable: true
    });
    return ToolbarTitle;
}());
var Toolbar = /** @class */ (function () {
    function Toolbar(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.childrenStyles = new Map();
    }
    Toolbar.prototype.componentWillLoad = function () {
        var buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
        var firstButtons = buttons.find(function (button) {
            return button.slot === 'start';
        });
        if (firstButtons) {
            firstButtons.classList.add('buttons-first-slot');
        }
        var buttonsReversed = buttons.reverse();
        var lastButtons = buttonsReversed.find(function (button) { return button.slot === 'end'; }) ||
            buttonsReversed.find(function (button) { return button.slot === 'primary'; }) ||
            buttonsReversed.find(function (button) { return button.slot === 'secondary'; });
        if (lastButtons) {
            lastButtons.classList.add('buttons-last-slot');
        }
    };
    Toolbar.prototype.childrenStyle = function (ev) {
        ev.stopPropagation();
        var tagName = ev.target.tagName;
        var updatedStyles = ev.detail;
        var newStyles = {};
        var childStyles = this.childrenStyles.get(tagName) || {};
        var hasStyleChange = false;
        Object.keys(updatedStyles).forEach(function (key) {
            var childKey = "toolbar-" + key;
            var newValue = updatedStyles[key];
            if (newValue !== childStyles[childKey]) {
                hasStyleChange = true;
            }
            if (newValue) {
                newStyles[childKey] = true;
            }
        });
        if (hasStyleChange) {
            this.childrenStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    };
    Toolbar.prototype.render = function () {
        var _a;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        var childStyles = {};
        this.childrenStyles.forEach(function (value) {
            Object.assign(childStyles, value);
        });
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { class: Object.assign(Object.assign((_a = { 'in-toolbar': Object(__WEBPACK_IMPORTED_MODULE_5__theme_18cbe2cc_js__["c" /* h */])('ion-toolbar', this.el) }, _a[mode] = true, _a), childStyles), Object(__WEBPACK_IMPORTED_MODULE_5__theme_18cbe2cc_js__["a" /* c */])(this.color)) }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "toolbar-background" }), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "toolbar-container" }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", { name: "start" }), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", { name: "secondary" }), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "toolbar-content" }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", null)), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", { name: "primary" }), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", { name: "end" }))));
    };
    Object.defineProperty(Toolbar.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "style", {
        get: function () { return ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"; },
        enumerable: true,
        configurable: true
    });
    return Toolbar;
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



/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);

var attachComponent = function (delegate, container, component, cssClasses, componentProps) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    var el;
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (delegate) {
                    return [2 /*return*/, delegate.attachViewToDom(container, component, componentProps, cssClasses)];
                }
                if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                    throw new Error('framework delegate is missing');
                }
                el = (typeof component === 'string')
                    ? container.ownerDocument && container.ownerDocument.createElement(component)
                    : component;
                if (cssClasses) {
                    cssClasses.forEach(function (c) { return el.classList.add(c); });
                }
                if (componentProps) {
                    Object.assign(el, componentProps);
                }
                container.appendChild(el);
                if (!el.componentOnReady) return [3 /*break*/, 2];
                return [4 /*yield*/, el.componentOnReady()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/, el];
        }
    });
}); };
var detachComponent = function (delegate, element) {
    if (element) {
        if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};



/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_3c3e1099_js__ = __webpack_require__(437);



var iosTransitionAnimation = function () { return __webpack_require__.e/* import() */(94).then(__webpack_require__.bind(null, 540)); };
var mdTransitionAnimation = function () { return __webpack_require__.e/* import() */(93).then(__webpack_require__.bind(null, 541)); };
var transition = function (opts) {
    return new Promise(function (resolve, reject) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["m" /* w */])(function () {
            beforeTransition(opts);
            runTransition(opts).then(function (result) {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, function (error) {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
var beforeTransition = function (opts) {
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
var runTransition = function (opts) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    var animationBuilder, ani;
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getAnimationBuilder(opts)];
            case 1:
                animationBuilder = _a.sent();
                ani = (animationBuilder)
                    ? animation(animationBuilder, opts)
                    : noAnimation(opts);
                return [2 /*return*/, ani];
        }
    });
}); };
var afterTransition = function (opts) {
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
var getAnimationBuilder = function (opts) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    var getAnimation, _a;
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
                    return [2 /*return*/, undefined];
                }
                if (opts.animationBuilder) {
                    return [2 /*return*/, opts.animationBuilder];
                }
                if (!(opts.mode === 'ios')) return [3 /*break*/, 2];
                return [4 /*yield*/, iosTransitionAnimation()];
            case 1:
                _a = (_b.sent()).iosTransitionAnimation;
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, mdTransitionAnimation()];
            case 3:
                _a = (_b.sent()).mdTransitionAnimation;
                _b.label = 4;
            case 4:
                getAnimation = _a;
                return [2 /*return*/, getAnimation];
        }
    });
}); };
var animation = function (animationBuilder, opts) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    var trans, mod, err_1, didComplete;
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, waitForReady(opts, true)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 6]);
                return [4 /*yield*/, __webpack_require__.e/* import() */(2/* duplicate */).then(__webpack_require__.bind(null, 450))];
            case 3:
                mod = _a.sent();
                return [4 /*yield*/, mod.create(animationBuilder, opts.baseEl, opts)];
            case 4:
                trans = _a.sent();
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                trans = animationBuilder(opts.baseEl, opts);
                return [3 /*break*/, 6];
            case 6:
                fireWillEvents(opts.enteringEl, opts.leavingEl);
                return [4 /*yield*/, playTransition(trans, opts)];
            case 7:
                didComplete = _a.sent();
                if (opts.progressCallback) {
                    opts.progressCallback(undefined);
                }
                if (didComplete) {
                    fireDidEvents(opts.enteringEl, opts.leavingEl);
                }
                return [2 /*return*/, {
                        hasCompleted: didComplete,
                        animation: trans
                    }];
        }
    });
}); };
var noAnimation = function (opts) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    var enteringEl, leavingEl;
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
        switch (_a.label) {
            case 0:
                enteringEl = opts.enteringEl;
                leavingEl = opts.leavingEl;
                return [4 /*yield*/, waitForReady(opts, false)];
            case 1:
                _a.sent();
                fireWillEvents(enteringEl, leavingEl);
                fireDidEvents(enteringEl, leavingEl);
                return [2 /*return*/, {
                        hasCompleted: true
                    }];
        }
    });
}); };
var waitForReady = function (opts, defaultDeep) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    var deep, promises;
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
        switch (_a.label) {
            case 0:
                deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                promises = deep ? [
                    deepReady(opts.enteringEl),
                    deepReady(opts.leavingEl),
                ] : [
                    shallowReady(opts.enteringEl),
                    shallowReady(opts.leavingEl),
                ];
                return [4 /*yield*/, Promise.all(promises)];
            case 1:
                _a.sent();
                return [4 /*yield*/, notifyViewReady(opts.viewIsReady, opts.enteringEl)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var notifyViewReady = function (viewIsReady, enteringEl) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!viewIsReady) return [3 /*break*/, 2];
                return [4 /*yield*/, viewIsReady(enteringEl)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
var playTransition = function (trans, opts) {
    var progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    var promise = new Promise(function (resolve) {
        trans.onFinish(function (currentStep) {
            if (typeof currentStep === 'number') {
                resolve(currentStep === 1);
            }
            else if (trans.hasCompleted !== undefined) {
                resolve(trans.hasCompleted);
            }
        });
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
var fireWillEvents = function (enteringEl, leavingEl) {
    lifecycle(leavingEl, __WEBPACK_IMPORTED_MODULE_2__constants_3c3e1099_js__["c" /* b */]);
    lifecycle(enteringEl, __WEBPACK_IMPORTED_MODULE_2__constants_3c3e1099_js__["a" /* L */]);
};
var fireDidEvents = function (enteringEl, leavingEl) {
    lifecycle(enteringEl, __WEBPACK_IMPORTED_MODULE_2__constants_3c3e1099_js__["b" /* a */]);
    lifecycle(leavingEl, __WEBPACK_IMPORTED_MODULE_2__constants_3c3e1099_js__["d" /* c */]);
};
var lifecycle = function (el, eventName) {
    if (el) {
        var ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
var shallowReady = function (el) {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
var deepReady = function (el) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    var element, stencilEl;
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
        switch (_a.label) {
            case 0:
                element = el;
                if (!element) return [3 /*break*/, 4];
                if (!(element.componentOnReady != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, element.componentOnReady()];
            case 1:
                stencilEl = _a.sent();
                if (stencilEl != null) {
                    return [2 /*return*/];
                }
                _a.label = 2;
            case 2: return [4 /*yield*/, Promise.all(Array.from(element.children).map(deepReady))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var setPageHidden = function (el, hidden) {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
var setZIndex = function (enteringEl, leavingEl, direction) {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};



/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ })

});
//# sourceMappingURL=3.js.map