webpackJsonp([75],{

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_split_pane", function() { return SplitPane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_3c7f3790_js__ = __webpack_require__(430);


var SPLIT_PANE_MAIN = 'split-pane-main';
var SPLIT_PANE_SIDE = 'split-pane-side';
var QUERY = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
    'never': ''
};
var SplitPane = /** @class */ (function () {
    function SplitPane(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the split pane will be hidden.
         */
        this.disabled = false;
        /**
         * When the split-pane should be shown.
         * Can be a CSS media query expression, or a shortcut expression.
         * Can also be a boolean expression.
         */
        this.when = QUERY['lg'];
        this.ionSplitPaneVisible = Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["d" /* c */])(this, "ionSplitPaneVisible", 7);
    }
    SplitPane.prototype.visibleChanged = function (visible) {
        var detail = { visible: visible, isPane: this.isPane.bind(this) };
        this.ionSplitPaneVisible.emit(detail);
    };
    SplitPane.prototype.connectedCallback = function () {
        this.styleChildren();
        this.updateState();
    };
    SplitPane.prototype.disconnectedCallback = function () {
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
    };
    SplitPane.prototype.componentWillLoad = function () {
        if (this.contentId === undefined) {
            console.warn("[DEPRECATED][ion-split-pane] Using the [main] attribute is deprecated, please use the \"contentId\" property instead:\nBEFORE:\n  <ion-split-pane>\n    ...\n    <div main>...</div>\n  </ion-split-pane>\n\nAFTER:\n  <ion-split-pane contentId=\"main-content\">\n    ...\n    <div id=\"main-content\">...</div>\n  </ion-split-pane>\n");
        }
    };
    SplitPane.prototype.updateState = function () {
        var _this = this;
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
        // Check if the split-pane is disabled
        if (this.disabled) {
            this.visible = false;
            return;
        }
        // When query is a boolean
        var query = this.when;
        if (typeof query === 'boolean') {
            this.visible = query;
            return;
        }
        // When query is a string, let's find first if it is a shortcut
        var mediaQuery = QUERY[query] || query;
        // Media query is empty or null, we hide it
        if (mediaQuery.length === 0) {
            this.visible = false;
            return;
        }
        if (window.matchMedia) {
            // Listen on media query
            var callback_1 = function (q) {
                _this.visible = q.matches;
            };
            var mediaList_1 = window.matchMedia(mediaQuery);
            mediaList_1.addListener(callback_1);
            this.rmL = function () { return mediaList_1.removeListener(callback_1); };
            this.visible = mediaList_1.matches;
        }
    };
    SplitPane.prototype.isPane = function (element) {
        if (!this.visible) {
            return false;
        }
        return element.parentElement === this.el
            && element.classList.contains(SPLIT_PANE_SIDE);
    };
    SplitPane.prototype.styleChildren = function () {
        var contentId = this.contentId;
        var children = this.el.children;
        var nu = this.el.childElementCount;
        var foundMain = false;
        for (var i = 0; i < nu; i++) {
            var child = children[i];
            var isMain = contentId !== undefined ? child.id === contentId : child.hasAttribute('main');
            if (isMain) {
                if (foundMain) {
                    console.warn('split pane cannot have more than one main node');
                    return;
                }
                foundMain = true;
            }
            setPaneClass(child, isMain);
        }
        if (!foundMain) {
            console.warn('split pane does not have a specified main node');
        }
    };
    SplitPane.prototype.render = function () {
        var _a;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["e" /* d */])(this);
        return (Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["a" /* H */], { class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["split-pane-" + mode] = true,
                _a['split-pane-visible'] = this.visible,
                _a) }));
    };
    Object.defineProperty(SplitPane.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_0__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitPane, "watchers", {
        get: function () {
            return {
                "visible": ["visibleChanged"],
                "disabled": ["updateState"],
                "when": ["updateState"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitPane, "style", {
        get: function () { return "ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"; },
        enumerable: true,
        configurable: true
    });
    return SplitPane;
}());
var setPaneClass = function (el, isMain) {
    var toAdd;
    var toRemove;
    if (isMain) {
        toAdd = SPLIT_PANE_MAIN;
        toRemove = SPLIT_PANE_SIDE;
    }
    else {
        toAdd = SPLIT_PANE_SIDE;
        toRemove = SPLIT_PANE_MAIN;
    }
    var classList = el.classList;
    classList.add(toAdd);
    classList.remove(toRemove);
};



/***/ })

});
//# sourceMappingURL=75.js.map