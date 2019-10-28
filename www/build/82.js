webpackJsonp([82],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function() { return Backdrop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_3c7f3790_js__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_46f4a262_js__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_624eea58_js__ = __webpack_require__(435);




var Backdrop = /** @class */ (function () {
    function Backdrop(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.lastClick = -10000;
        this.blocker = __WEBPACK_IMPORTED_MODULE_3__index_624eea58_js__["GESTURE_CONTROLLER"].createBlocker({
            disableScroll: true
        });
        /**
         * If `true`, the backdrop will be visible.
         */
        this.visible = true;
        /**
         * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdrop will stop propagation on tap.
         */
        this.stopPropagation = true;
        this.ionBackdropTap = Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["d" /* c */])(this, "ionBackdropTap", 7);
    }
    Backdrop.prototype.connectedCallback = function () {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    };
    Backdrop.prototype.disconnectedCallback = function () {
        this.blocker.unblock();
    };
    Backdrop.prototype.onTouchStart = function (ev) {
        this.lastClick = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_46f4a262_js__["i" /* n */])(ev);
        this.emitTap(ev);
    };
    Backdrop.prototype.onMouseDown = function (ev) {
        if (this.lastClick < Object(__WEBPACK_IMPORTED_MODULE_2__helpers_46f4a262_js__["i" /* n */])(ev) - 2500) {
            this.emitTap(ev);
        }
    };
    Backdrop.prototype.emitTap = function (ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    };
    Backdrop.prototype.render = function () {
        var _a;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["e" /* d */])(this);
        return (Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["a" /* H */], { tabindex: "-1", class: (_a = {},
                _a[mode] = true,
                _a['backdrop-hide'] = !this.visible,
                _a['backdrop-no-tappable'] = !this.tappable,
                _a) }));
    };
    Object.defineProperty(Backdrop, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"; },
        enumerable: true,
        configurable: true
    });
    return Backdrop;
}());



/***/ })

});
//# sourceMappingURL=82.js.map