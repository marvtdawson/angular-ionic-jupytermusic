webpackJsonp([88],{

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_3c7f3790_js__ = __webpack_require__(63);


var startStatusTap = function () {
    var win = window;
    win.addEventListener('statusTap', function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["g" /* f */])(function () {
            var width = win.innerWidth;
            var height = win.innerHeight;
            var el = document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return;
            }
            var contentEl = el.closest('ion-content');
            if (contentEl) {
                contentEl.componentOnReady().then(function () {
                    Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["m" /* w */])(function () { return contentEl.scrollToTop(300); });
                });
            }
        });
    });
};



/***/ })

});
//# sourceMappingURL=88.js.map