webpackJsonp([19],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlays_10640d86_js__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_18cbe2cc_js__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_3476b023_js__ = __webpack_require__(535);








/**
 * iOS Loading Enter Animation
 */
var iosEnterAnimation = function (baseEl) {
    var baseAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    var backdropAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    var wrapperAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.3);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Loading Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    var backdropAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    var wrapperAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.3, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Enter Animation
 */
var mdEnterAnimation = function (baseEl) {
    var baseAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    var backdropAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    var wrapperAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    var backdropAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    var wrapperAnimation = Object(__WEBPACK_IMPORTED_MODULE_4__animation_7ed5bc6a_js__["a" /* c */])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var Loading = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.presented = false;
        this.mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * Number of milliseconds to wait before dismissing the loading indicator.
         */
        this.duration = 0;
        /**
         * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = false;
        /**
         * If `true`, a backdrop will be displayed behind the loading indicator.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the loading indicator will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the loading indicator will animate.
         */
        this.animated = true;
        this.onBackdropTap = function () {
            _this.dismiss(undefined, __WEBPACK_IMPORTED_MODULE_5__overlays_10640d86_js__["a" /* B */]);
        };
        Object(__WEBPACK_IMPORTED_MODULE_5__overlays_10640d86_js__["e" /* d */])(this.el);
        this.didPresent = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionLoadingDidPresent", 7);
        this.willPresent = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionLoadingWillPresent", 7);
        this.willDismiss = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionLoadingWillDismiss", 7);
        this.didDismiss = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionLoadingDidDismiss", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        if (this.spinner === undefined) {
            var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
            this.spinner = __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].get('loadingSpinner', __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    };
    /**
     * Present the loading overlay after it has been created.
     */
    class_1.prototype.present = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_5__overlays_10640d86_js__["f" /* e */])(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined)];
                    case 1:
                        _a.sent();
                        if (this.duration > 0) {
                            this.durationTimeout = setTimeout(function () { return _this.dismiss(); }, this.duration + 10);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Dismiss the loading overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    class_1.prototype.dismiss = function (data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_5__overlays_10640d86_js__["g" /* f */])(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
    };
    /**
     * Returns a promise that resolves when the loading did dismiss.
     */
    class_1.prototype.onDidDismiss = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_5__overlays_10640d86_js__["h" /* g */])(this.el, 'ionLoadingDidDismiss');
    };
    /**
     * Returns a promise that resolves when the loading will dismiss.
     */
    class_1.prototype.onWillDismiss = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_5__overlays_10640d86_js__["h" /* g */])(this.el, 'ionLoadingWillDismiss');
    };
    class_1.prototype.render = function () {
        var _a;
        var _b = this, message = _b.message, spinner = _b.spinner;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { onIonBackdropTap: this.onBackdropTap, style: {
                zIndex: "" + (40000 + this.overlayIndex)
            }, class: Object.assign(Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_6__theme_18cbe2cc_js__["b" /* g */])(this.cssClass)), (_a = {}, _a[mode] = true, _a['loading-translucent'] = this.translucent, _a)) }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "loading-wrapper", role: "dialog" }, spinner && (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "loading-spinner" }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-spinner", { name: spinner }))), message && Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "loading-content", innerHTML: Object(__WEBPACK_IMPORTED_MODULE_7__index_3476b023_js__["a" /* s */])(message) }))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
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

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ })

});
//# sourceMappingURL=19.js.map