webpackJsonp([92],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function() { return mdTransitionAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_3c7f3790_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_46f4a262_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_af478fe9_js__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_3c3e1099_js__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_6826f2f6_js__ = __webpack_require__(537);






var mdTransitionAnimation = function (_, opts) {
    var OFF_BOTTOM = '40px';
    var CENTER = '0px';
    var backDirection = (opts.direction === 'back');
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    var ionPageElement = Object(__WEBPACK_IMPORTED_MODULE_5__index_6826f2f6_js__["b" /* g */])(enteringEl);
    var enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
    var rootTransition = Object(__WEBPACK_IMPORTED_MODULE_3__animation_af478fe9_js__["a" /* c */])();
    rootTransition
        .addElement(ionPageElement)
        .fill('both')
        .beforeRemoveClass('ion-page-invisible');
    // animate the component itself
    if (backDirection) {
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition
            .duration(opts.duration || 280)
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .fromTo('transform', "translateY(" + OFF_BOTTOM + ")", "translateY(" + CENTER + ")")
            .fromTo('opacity', 0.01, 1);
    }
    // Animate toolbar if it's there
    if (enteringToolbarEle) {
        var enteringToolBar = Object(__WEBPACK_IMPORTED_MODULE_3__animation_af478fe9_js__["a" /* c */])();
        enteringToolBar.addElement(enteringToolbarEle);
        rootTransition.addAnimation(enteringToolBar);
    }
    // setup leaving view
    if (leavingEl && backDirection) {
        // leaving content
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
        var leavingPage = Object(__WEBPACK_IMPORTED_MODULE_3__animation_af478fe9_js__["a" /* c */])();
        leavingPage
            .addElement(Object(__WEBPACK_IMPORTED_MODULE_5__index_6826f2f6_js__["b" /* g */])(leavingEl))
            .afterStyles({ 'display': 'none' })
            .fromTo('transform', "translateY(" + CENTER + ")", "translateY(" + OFF_BOTTOM + ")")
            .fromTo('opacity', 1, 0);
        rootTransition.addAnimation(leavingPage);
    }
    return rootTransition;
};



/***/ })

});
//# sourceMappingURL=92.js.map