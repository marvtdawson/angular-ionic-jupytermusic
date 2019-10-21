webpackJsonp([61],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_action_sheet_controller", function() { return ActionSheetController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_alert_controller", function() { return AlertController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_anchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading_controller", function() { return LoadingController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal_controller", function() { return ModalController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker_controller", function() { return PickerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_popover_controller", function() { return PopoverController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toast_controller", function() { return ToastController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_18cbe2cc_js__ = __webpack_require__(534);





var ActionSheetController = /** @class */ (function () {
    function class_1(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    /**
     * Create an action sheet overlay with action sheet options.
     *
     * @param options The options to use to create the action sheet.
     */
    class_1.prototype.create = function (options) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["i" /* h */])('ion-action-sheet', options);
    };
    /**
     * Dismiss the open action sheet overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the action sheet to dismiss. If an id is not provided, it will dismiss the most recently opened action sheet.
     */
    class_1.prototype.dismiss = function (data, role, id) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["k" /* j */])(document, data, role, 'ion-action-sheet', id);
    };
    /**
     * Get the most recently opened action sheet overlay.
     */
    class_1.prototype.getTop = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["l" /* k */])(document, 'ion-action-sheet')];
            });
        });
    };
    return class_1;
}());
var AlertController = /** @class */ (function () {
    function class_2(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    /**
     * Create an alert overlay with alert options.
     *
     * @param options The options to use to create the alert.
     */
    class_2.prototype.create = function (options) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["i" /* h */])('ion-alert', options);
    };
    /**
     * Dismiss the open alert overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the alert to dismiss. If an id is not provided, it will dismiss the most recently opened alert.
     */
    class_2.prototype.dismiss = function (data, role, id) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["k" /* j */])(document, data, role, 'ion-alert', id);
    };
    /**
     * Get the most recently opened alert overlay.
     */
    class_2.prototype.getTop = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["l" /* k */])(document, 'ion-alert')];
            });
        });
    };
    return class_2;
}());
var Anchor = /** @class */ (function () {
    function Anchor(hostRef) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        this.onClick = function (ev) {
            Object(__WEBPACK_IMPORTED_MODULE_4__theme_18cbe2cc_js__["d" /* o */])(_this.href, ev, _this.routerDirection);
        };
    }
    Anchor.prototype.componentDidLoad = function () {
        console.warn('[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.');
    };
    Anchor.prototype.render = function () {
        var _a;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        var attrs = {
            href: this.href,
            rel: this.rel
        };
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_4__theme_18cbe2cc_js__["a" /* c */])(this.color)), (_a = {}, _a[mode] = true, _a['ion-activatable'] = true, _a)) }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("a", Object.assign({}, attrs), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", null))));
    };
    Object.defineProperty(Anchor, "style", {
        get: function () { return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return Anchor;
}());
var LoadingController = /** @class */ (function () {
    function class_3(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    /**
     * Create a loading overlay with loading options.
     *
     * @param options The options to use to create the loading.
     */
    class_3.prototype.create = function (options) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["i" /* h */])('ion-loading', options);
    };
    /**
     * Dismiss the open loading overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the loading to dismiss. If an id is not provided, it will dismiss the most recently opened loading.
     */
    class_3.prototype.dismiss = function (data, role, id) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["k" /* j */])(document, data, role, 'ion-loading', id);
    };
    /**
     * Get the most recently opened loading overlay.
     */
    class_3.prototype.getTop = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["l" /* k */])(document, 'ion-loading')];
            });
        });
    };
    return class_3;
}());
var ModalController = /** @class */ (function () {
    function class_4(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    /**
     * Create a modal overlay with modal options.
     *
     * @param options The options to use to create the modal.
     */
    class_4.prototype.create = function (options) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["i" /* h */])('ion-modal', options);
    };
    /**
     * Dismiss the open modal overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the modal.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the modal to dismiss. If an id is not provided, it will dismiss the most recently opened modal.
     */
    class_4.prototype.dismiss = function (data, role, id) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["k" /* j */])(document, data, role, 'ion-modal', id);
    };
    /**
     * Get the most recently opened modal overlay.
     */
    class_4.prototype.getTop = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["l" /* k */])(document, 'ion-modal')];
            });
        });
    };
    return class_4;
}());
var PickerController = /** @class */ (function () {
    function class_5(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    /**
     * Create a picker overlay with picker options.
     *
     * @param options The options to use to create the picker.
     */
    class_5.prototype.create = function (options) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["i" /* h */])('ion-picker', options);
    };
    /**
     * Dismiss the open picker overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the picker to dismiss. If an id is not provided, it will dismiss the most recently opened picker.
     */
    class_5.prototype.dismiss = function (data, role, id) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["k" /* j */])(document, data, role, 'ion-picker', id);
    };
    /**
     * Get the most recently opened picker overlay.
     */
    class_5.prototype.getTop = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["l" /* k */])(document, 'ion-picker')];
            });
        });
    };
    return class_5;
}());
var PopoverController = /** @class */ (function () {
    function class_6(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    /**
     * Create a popover overlay with popover options.
     *
     * @param options The options to use to create the popover.
     */
    class_6.prototype.create = function (options) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["i" /* h */])('ion-popover', options);
    };
    /**
     * Dismiss the open popover overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the popover.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the popover.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the popover to dismiss. If an id is not provided, it will dismiss the most recently opened popover.
     */
    class_6.prototype.dismiss = function (data, role, id) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["k" /* j */])(document, data, role, 'ion-popover', id);
    };
    /**
     * Get the most recently opened popover overlay.
     */
    class_6.prototype.getTop = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["l" /* k */])(document, 'ion-popover')];
            });
        });
    };
    return class_6;
}());
var ToastController = /** @class */ (function () {
    function class_7(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
    }
    /**
     * Create a toast overlay with toast options.
     *
     * @param options The options to use to create the toast.
     */
    class_7.prototype.create = function (options) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["i" /* h */])('ion-toast', options);
    };
    /**
     * Dismiss the open toast overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast. For example, 'cancel' or 'backdrop'.
     * @param id The id of the toast to dismiss. If an id is not provided, it will dismiss the most recently opened toast.
     */
    class_7.prototype.dismiss = function (data, role, id) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["k" /* j */])(document, data, role, 'ion-toast', id);
    };
    /**
     * Get the most recently opened toast overlay.
     */
    class_7.prototype.getTop = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_3__overlays_10640d86_js__["l" /* k */])(document, 'ion-toast')];
            });
        });
    };
    return class_7;
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
//# sourceMappingURL=61.js.map