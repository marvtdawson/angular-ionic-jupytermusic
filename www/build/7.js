webpackJsonp([7],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_link", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_pop", function() { return NavPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_push", function() { return NavPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_set_root", function() { return NavSetRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_3c3e1099_js__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_delegate_c2e2e1f4_js__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_6826f2f6_js__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__ = __webpack_require__(539);








var VIEW_STATE_NEW = 1;
var VIEW_STATE_ATTACHED = 2;
var VIEW_STATE_DESTROYED = 3;
var ViewController = /** @class */ (function () {
    function ViewController(component, params) {
        this.component = component;
        this.params = params;
        this.state = VIEW_STATE_NEW;
    }
    ViewController.prototype.init = function (container) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var component, _a;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.state = VIEW_STATE_ATTACHED;
                        if (!!this.element) return [3 /*break*/, 2];
                        component = this.component;
                        _a = this;
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_5__framework_delegate_c2e2e1f4_js__["a"])(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params)];
                    case 1:
                        _a.element = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * DOM WRITE
     */
    ViewController.prototype._destroy = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
        var element = this.element;
        if (element) {
            if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
            }
            else {
                element.remove();
            }
        }
        this.nav = undefined;
        this.state = VIEW_STATE_DESTROYED;
    };
    return ViewController;
}());
var matches = function (view, id, params) {
    if (!view) {
        return false;
    }
    if (view.component !== id) {
        return false;
    }
    var currentParams = view.params;
    if (currentParams === params) {
        return true;
    }
    if (!currentParams && !params) {
        return true;
    }
    if (!currentParams || !params) {
        return false;
    }
    var keysA = Object.keys(currentParams);
    var keysB = Object.keys(params);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    for (var _i = 0, keysA_1 = keysA; _i < keysA_1.length; _i++) {
        var key = keysA_1[_i];
        if (currentParams[key] !== params[key]) {
            return false;
        }
    }
    return true;
};
var convertToView = function (page, params) {
    if (!page) {
        return null;
    }
    if (page instanceof ViewController) {
        return page;
    }
    return new ViewController(page, params);
};
var convertToViews = function (pages) {
    return pages.map(function (page) {
        if (page instanceof ViewController) {
            return page;
        }
        if ('page' in page) {
            return convertToView(page.page, page.params);
        }
        return convertToView(page, undefined);
    }).filter(function (v) { return v !== null; });
};
var Nav = /** @class */ (function () {
    function class_1(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.transInstr = [];
        this.animationEnabled = true;
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        /**
         * If `true`, the nav should animate the transition of components.
         */
        this.animated = true;
        this.ionNavWillLoad = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionNavDidChange", 3);
    }
    class_1.prototype.swipeGestureChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeGesture !== true);
        }
    };
    class_1.prototype.rootChanged = function () {
        if (this.root !== undefined) {
            if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
            }
        }
    };
    class_1.prototype.componentWillLoad = function () {
        this.useRouter =
            !!document.querySelector('ion-router') &&
                !this.el.closest('[no-router]');
        if (this.swipeGesture === undefined) {
            var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
            this.swipeGesture = __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].getBoolean('swipeBackEnabled', mode === 'ios');
        }
        this.ionNavWillLoad.emit();
    };
    class_1.prototype.componentDidLoad = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _a;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.rootChanged();
                        _a = this;
                        return [4 /*yield*/, __webpack_require__.e/* import() */(85/* duplicate */).then(__webpack_require__.bind(null, 543))];
                    case 1:
                        _a.gesture = (_b.sent()).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
                        this.swipeGestureChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidUnload = function () {
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            Object(__WEBPACK_IMPORTED_MODULE_6__index_6826f2f6_js__["c" /* l */])(view.element, __WEBPACK_IMPORTED_MODULE_4__constants_3c3e1099_js__["e" /* d */]);
            view._destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        // release swipe back gesture and transition
        this.transInstr.length = this.views.length = 0;
        this.destroyed = true;
    };
    /**
     * Push a new component onto the current navigation stack. Pass any additional
     * information along as an object. This additional information is accessible
     * through NavParams.
     *
     * @param component The component to push onto the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.push = function (component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: -1,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts
        }, done);
    };
    /**
     * Inserts a component into the navigation stack at the specified index.
     * This is useful to add a component at any point in the navigation stack.
     *
     * @param insertIndex The index to insert the component at in the stack.
     * @param component The component to insert into the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.insert = function (insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts
        }, done);
    };
    /**
     * Inserts an array of components into the navigation stack at the specified index.
     * The last component in the array will become instantiated as a view, and animate
     * in to become the active view.
     *
     * @param insertIndex The index to insert the components at in the stack.
     * @param insertComponents The components to insert into the navigation stack.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.insertPages = function (insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts: opts
        }, done);
    };
    /**
     * Pop a component off of the navigation stack. Navigates back from the current
     * component.
     *
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.pop = function (opts, done) {
        return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts
        }, done);
    };
    /**
     * Pop to a specific index in the navigation stack.
     *
     * @param indexOrViewCtrl The index or view controller to pop to.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.popTo = function (indexOrViewCtrl, opts, done) {
        var tiConfig = {
            removeStart: -1,
            removeCount: -1,
            opts: opts
        };
        if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
            tiConfig.removeView = indexOrViewCtrl;
            tiConfig.removeStart = 1;
        }
        else if (typeof indexOrViewCtrl === 'number') {
            tiConfig.removeStart = indexOrViewCtrl + 1;
        }
        return this.queueTrns(tiConfig, done);
    };
    /**
     * Navigate back to the root of the stack, no matter how far back that is.
     *
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.popToRoot = function (opts, done) {
        return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts: opts
        }, done);
    };
    /**
     * Removes a component from the navigation stack at the specified index.
     *
     * @param startIndex The number to begin removal at.
     * @param removeCount The number of components to remove.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.removeIndex = function (startIndex, removeCount, opts, done) {
        if (removeCount === void 0) { removeCount = 1; }
        return this.queueTrns({
            removeStart: startIndex,
            removeCount: removeCount,
            opts: opts
        }, done);
    };
    /**
     * Set the root for the current navigation stack to a component.
     *
     * @param component The component to set as the root of the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.setRoot = function (component, componentProps, opts, done) {
        return this.setPages([{ page: component, params: componentProps }], opts, done);
    };
    /**
     * Set the views of the current navigation stack and navigate to the last view.
     * By default animations are disabled, but they can be enabled by passing options
     * to the navigation controller. Navigation parameters can also be passed to the
     * individual pages in the array.
     *
     * @param views The list of views to set as the navigation stack.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.setPages = function (views, opts, done) {
        if (opts == null) {
            opts = {};
        }
        // if animation wasn't set to true then default it to NOT animate
        if (opts.animated !== true) {
            opts.animated = false;
        }
        return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts: opts
        }, done);
    };
    /** @internal */
    class_1.prototype.setRouteId = function (id, params, direction) {
        var _this = this;
        var active = this.getActiveSync();
        if (matches(active, id, params)) {
            return Promise.resolve({
                changed: false,
                element: active.element
            });
        }
        var resolve;
        var promise = new Promise(function (r) { return (resolve = r); });
        var finish;
        var commonOpts = {
            updateURL: false,
            viewIsReady: function (enteringEl) {
                var mark;
                var p = new Promise(function (r) { return (mark = r); });
                resolve({
                    changed: true,
                    element: enteringEl,
                    markVisible: function () { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(_this, void 0, void 0, function () {
                        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    mark();
                                    return [4 /*yield*/, finish];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                });
                return p;
            }
        };
        if (direction === 'root') {
            finish = this.setRoot(id, params, commonOpts);
        }
        else {
            var viewController = this.views.find(function (v) { return matches(v, id, params); });
            if (viewController) {
                finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), { direction: 'back' }));
            }
            else if (direction === 'forward') {
                finish = this.push(id, params, commonOpts);
            }
            else if (direction === 'back') {
                finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), { direction: 'back', animated: true }));
            }
        }
        return promise;
    };
    /** @internal */
    class_1.prototype.getRouteId = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var active;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                active = this.getActiveSync();
                return [2 /*return*/, active
                        ? {
                            id: active.element.tagName,
                            params: active.params,
                            element: active.element
                        }
                        : undefined];
            });
        });
    };
    /**
     * Get the active view.
     */
    class_1.prototype.getActive = function () {
        return Promise.resolve(this.getActiveSync());
    };
    /**
     * Get the view at the specified index.
     *
     * @param index The index of the view.
     */
    class_1.prototype.getByIndex = function (index) {
        return Promise.resolve(this.views[index]);
    };
    /**
     * Returns `true` if the current view can go back.
     *
     * @param view The view to check.
     */
    class_1.prototype.canGoBack = function (view) {
        return Promise.resolve(this.canGoBackSync(view));
    };
    /**
     * Get the previous view.
     *
     * @param view The view to get.
     */
    class_1.prototype.getPrevious = function (view) {
        return Promise.resolve(this.getPreviousSync(view));
    };
    class_1.prototype.getLength = function () {
        return this.views.length;
    };
    class_1.prototype.getActiveSync = function () {
        return this.views[this.views.length - 1];
    };
    class_1.prototype.canGoBackSync = function (view) {
        if (view === void 0) { view = this.getActiveSync(); }
        return !!(view && this.getPreviousSync(view));
    };
    class_1.prototype.getPreviousSync = function (view) {
        if (view === void 0) { view = this.getActiveSync(); }
        if (!view) {
            return undefined;
        }
        var views = this.views;
        var index = views.indexOf(view);
        return index > 0 ? views[index - 1] : undefined;
    };
    // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
    // 1. _nextTrns(): consumes the next transition in the queue
    // 2. _viewInit(): initializes enteringView if required
    // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
    // 4. _postViewInit(): add/remove the views from the navigation stack
    // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
    // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
    // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
    // 8. _transitionFinish(): called once the transition finishes
    // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.
    class_1.prototype.queueTrns = function (ti, done) {
        if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
            return Promise.resolve(false);
        }
        var promise = new Promise(function (resolve, reject) {
            ti.resolve = resolve;
            ti.reject = reject;
        });
        ti.done = done;
        // Normalize empty
        if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
        }
        // Enqueue transition instruction
        this.transInstr.push(ti);
        // if there isn't a transition already happening
        // then this will kick off this transition
        this.nextTrns();
        return promise;
    };
    class_1.prototype.success = function (result, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }
        ti.resolve(result.hasCompleted);
        if (ti.opts.updateURL !== false && this.useRouter) {
            var router = document.querySelector('ion-router');
            if (router) {
                var direction = result.direction === 'back' ? 'back' : 'forward';
                router.navChanged(direction);
            }
        }
    };
    class_1.prototype.failed = function (rejectReason, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        this.transInstr.length = 0;
        this.fireError(rejectReason, ti);
    };
    class_1.prototype.fireError = function (rejectReason, ti) {
        if (ti.done) {
            ti.done(false, false, rejectReason);
        }
        if (ti.reject && !this.destroyed) {
            ti.reject(rejectReason);
        }
        else {
            ti.resolve(false);
        }
    };
    class_1.prototype.nextTrns = function () {
        // this is the framework's bread 'n butta function
        // only one transition is allowed at any given time
        if (this.isTransitioning) {
            return false;
        }
        // there is no transition happening right now
        // get the next instruction
        var ti = this.transInstr.shift();
        if (!ti) {
            return false;
        }
        this.runTransition(ti);
        return true;
    };
    class_1.prototype.runTransition = function (ti) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var leavingView, enteringView, requiresTransition, result, _a, rejectReason_1;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        // set that this nav is actively transitioning
                        this.ionNavWillChange.emit();
                        this.isTransitioning = true;
                        this.prepareTI(ti);
                        leavingView = this.getActiveSync();
                        enteringView = this.getEnteringView(ti, leavingView);
                        if (!leavingView && !enteringView) {
                            throw new Error('no views in the stack to be removed');
                        }
                        if (!(enteringView && enteringView.state === VIEW_STATE_NEW)) return [3 /*break*/, 2];
                        return [4 /*yield*/, enteringView.init(this.el)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        this.postViewInit(enteringView, leavingView, ti);
                        requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
                            enteringView !== leavingView;
                        if (!requiresTransition) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.transition(enteringView, leavingView, ti)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = {
                            // transition is not required, so we are already done!
                            // they're inserting/removing the views somewhere in the middle or
                            // beginning, so visually nothing needs to animate/transition
                            // resolve immediately because there's no animation that's happening
                            hasCompleted: true,
                            requiresTransition: false
                        };
                        _b.label = 5;
                    case 5:
                        result = _a;
                        this.success(result, ti);
                        this.ionNavDidChange.emit();
                        return [3 /*break*/, 7];
                    case 6:
                        rejectReason_1 = _b.sent();
                        this.failed(rejectReason_1, ti);
                        return [3 /*break*/, 7];
                    case 7:
                        this.isTransitioning = false;
                        this.nextTrns();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.prepareTI = function (ti) {
        var viewsLength = this.views.length;
        ti.opts = ti.opts || {};
        if (ti.opts.delegate === undefined) {
            ti.opts.delegate = this.delegate;
        }
        if (ti.removeView !== undefined) {
            Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(ti.removeStart !== undefined, 'removeView needs removeStart');
            Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(ti.removeCount !== undefined, 'removeView needs removeCount');
            var index = this.views.indexOf(ti.removeView);
            if (index < 0) {
                throw new Error('removeView was not found');
            }
            ti.removeStart += index;
        }
        if (ti.removeStart !== undefined) {
            if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
            }
            if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
            }
            ti.leavingRequiresTransition =
                ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
        }
        if (ti.insertViews) {
            // allow -1 to be passed in to auto push it on the end
            // and clean up the index if it's larger then the size of the stack
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = ti.insertStart === viewsLength;
        }
        var insertViews = ti.insertViews;
        if (!insertViews) {
            return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(insertViews.length > 0, 'length can not be zero');
        var viewControllers = convertToViews(insertViews);
        if (viewControllers.length === 0) {
            throw new Error('invalid views to insert');
        }
        // Check all the inserted view are correct
        for (var _i = 0, viewControllers_1 = viewControllers; _i < viewControllers_1.length; _i++) {
            var view = viewControllers_1[_i];
            view.delegate = ti.opts.delegate;
            var nav = view.nav;
            if (nav && nav !== this) {
                throw new Error('inserted view was already inserted');
            }
            if (view.state === VIEW_STATE_DESTROYED) {
                throw new Error('inserted view was already destroyed');
            }
        }
        ti.insertViews = viewControllers;
    };
    class_1.prototype.getEnteringView = function (ti, leavingView) {
        var insertViews = ti.insertViews;
        if (insertViews !== undefined) {
            // grab the very last view of the views to be inserted
            // and initialize it as the new entering view
            return insertViews[insertViews.length - 1];
        }
        var removeStart = ti.removeStart;
        if (removeStart !== undefined) {
            var views = this.views;
            var removeEnd = removeStart + ti.removeCount;
            for (var i = views.length - 1; i >= 0; i--) {
                var view = views[i];
                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                    return view;
                }
            }
        }
        return undefined;
    };
    class_1.prototype.postViewInit = function (enteringView, leavingView, ti) {
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(ti.resolve, 'resolve must be valid');
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(ti.reject, 'reject must be valid');
        var opts = ti.opts;
        var insertViews = ti.insertViews;
        var removeStart = ti.removeStart;
        var removeCount = ti.removeCount;
        var destroyQueue;
        // there are views to remove
        if (removeStart !== undefined && removeCount !== undefined) {
            Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(removeStart >= 0, 'removeStart can not be negative');
            Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(removeCount >= 0, 'removeCount can not be negative');
            destroyQueue = [];
            for (var i = 0; i < removeCount; i++) {
                var view = this.views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            // default the direction to "back"
            opts.direction = opts.direction || 'back';
        }
        var finalBalance = this.views.length +
            (insertViews !== undefined ? insertViews.length : 0) -
            (removeCount !== undefined ? removeCount : 0);
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0) {
            console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el);
            throw new Error('navigation stack needs at least one root page');
        }
        // At this point the transition can not be rejected, any throw should be an error
        // there are views to insert
        if (insertViews) {
            // add the views to the
            var insertIndex = ti.insertStart;
            for (var _i = 0, insertViews_1 = insertViews; _i < insertViews_1.length; _i++) {
                var view = insertViews_1[_i];
                this.insertViewAt(view, insertIndex);
                insertIndex++;
            }
            if (ti.enteringRequiresTransition) {
                // default to forward if not already set
                opts.direction = opts.direction || 'forward';
            }
        }
        // if the views to be removed are in the beginning or middle
        // and there is not a view that needs to visually transition out
        // then just destroy them and don't transition anything
        // batch all of lifecycles together
        // let's make sure, callbacks are zoned
        if (destroyQueue && destroyQueue.length > 0) {
            for (var _a = 0, destroyQueue_1 = destroyQueue; _a < destroyQueue_1.length; _a++) {
                var view = destroyQueue_1[_a];
                Object(__WEBPACK_IMPORTED_MODULE_6__index_6826f2f6_js__["c" /* l */])(view.element, __WEBPACK_IMPORTED_MODULE_4__constants_3c3e1099_js__["c" /* b */]);
                Object(__WEBPACK_IMPORTED_MODULE_6__index_6826f2f6_js__["c" /* l */])(view.element, __WEBPACK_IMPORTED_MODULE_4__constants_3c3e1099_js__["d" /* c */]);
                Object(__WEBPACK_IMPORTED_MODULE_6__index_6826f2f6_js__["c" /* l */])(view.element, __WEBPACK_IMPORTED_MODULE_4__constants_3c3e1099_js__["e" /* d */]);
            }
            // once all lifecycle events has been delivered, we can safely detroy the views
            for (var _b = 0, destroyQueue_2 = destroyQueue; _b < destroyQueue_2.length; _b++) {
                var view = destroyQueue_2[_b];
                this.destroyView(view);
            }
        }
    };
    class_1.prototype.transition = function (enteringView, leavingView, ti) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var opts, progressCallback, mode, enteringEl, leavingEl, animationOpts, hasCompleted;
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = ti.opts;
                        progressCallback = opts.progressAnimation
                            ? function (ani) { return _this.sbAni = ani; }
                            : undefined;
                        mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
                        enteringEl = enteringView.element;
                        leavingEl = leavingView && leavingView.element;
                        animationOpts = Object.assign({ mode: mode, showGoBack: this.canGoBackSync(enteringView), baseEl: this.el, animationBuilder: this.animation || opts.animationBuilder || __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].get('navAnimation'), progressCallback: progressCallback, animated: this.animated && __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__["b"].getBoolean('animated', true), enteringEl: enteringEl,
                            leavingEl: leavingEl }, opts);
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_6__index_6826f2f6_js__["e" /* t */])(animationOpts)];
                    case 1:
                        hasCompleted = (_a.sent()).hasCompleted;
                        return [2 /*return*/, this.transitionFinish(hasCompleted, enteringView, leavingView, opts)];
                }
            });
        });
    };
    class_1.prototype.transitionFinish = function (hasCompleted, enteringView, leavingView, opts) {
        var cleanupView = hasCompleted ? enteringView : leavingView;
        if (cleanupView) {
            this.cleanup(cleanupView);
        }
        return {
            hasCompleted: hasCompleted,
            requiresTransition: true,
            enteringView: enteringView,
            leavingView: leavingView,
            direction: opts.direction
        };
    };
    class_1.prototype.insertViewAt = function (view, index) {
        var views = this.views;
        var existingIndex = views.indexOf(view);
        if (existingIndex > -1) {
            // this view is already in the stack!!
            // move it to its new location
            Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(view.nav === this, 'view is not part of the nav');
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        }
        else {
            Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(!view.nav, 'nav is used');
            // this is a new view to add to the stack
            // create the new entering view
            view.nav = this;
            // insert the entering view into the correct index in the stack
            views.splice(index, 0, view);
        }
    };
    class_1.prototype.removeView = function (view) {
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
        var views = this.views;
        var index = views.indexOf(view);
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["b"])(index > -1, 'view must be part of the stack');
        if (index >= 0) {
            views.splice(index, 1);
        }
    };
    class_1.prototype.destroyView = function (view) {
        view._destroy();
        this.removeView(view);
    };
    /**
     * DOM WRITE
     */
    class_1.prototype.cleanup = function (activeView) {
        // ok, cleanup time!! Destroy all of the views that are
        // INACTIVE and come after the active view
        // only do this if the views exist, though
        if (this.destroyed) {
            return;
        }
        var views = this.views;
        var activeViewIndex = views.indexOf(activeView);
        for (var i = views.length - 1; i >= 0; i--) {
            var view = views[i];
            var element = view.element;
            if (i > activeViewIndex) {
                // this view comes after the active view
                // let's unload it
                Object(__WEBPACK_IMPORTED_MODULE_6__index_6826f2f6_js__["c" /* l */])(element, __WEBPACK_IMPORTED_MODULE_4__constants_3c3e1099_js__["e" /* d */]);
                this.destroyView(view);
            }
            else if (i < activeViewIndex) {
                // this view comes before the active view
                // and it is not a portal then ensure it is hidden
                Object(__WEBPACK_IMPORTED_MODULE_6__index_6826f2f6_js__["d" /* s */])(element, true);
            }
        }
    };
    class_1.prototype.canStart = function () {
        return (!!this.swipeGesture &&
            !this.isTransitioning &&
            this.transInstr.length === 0 &&
            this.animationEnabled &&
            this.canGoBackSync());
    };
    class_1.prototype.onStart = function () {
        this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: {
                direction: 'back',
                progressAnimation: true
            }
        }, undefined);
    };
    class_1.prototype.onMove = function (stepValue) {
        if (this.sbAni) {
            this.sbAni.progressStep(stepValue);
        }
    };
    class_1.prototype.onEnd = function (shouldComplete, stepValue, dur) {
        var _this = this;
        if (this.sbAni) {
            this.animationEnabled = false;
            this.sbAni.onFinish(function () {
                _this.animationEnabled = true;
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
                this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                newStepValue += Object(__WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["b" /* g */])(new __WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["a" /* P */](0, 0), new __WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["a" /* P */](1, 0), new __WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["a" /* P */](0.68, 0.28), new __WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["a" /* P */](1, 1), stepValue);
            }
            else {
                newStepValue += Object(__WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["b" /* g */])(new __WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["a" /* P */](0, 0), new __WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["a" /* P */](0.32, 0.72), new __WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["a" /* P */](0, 1), new __WEBPACK_IMPORTED_MODULE_7__cubic_bezier_2812fda3_js__["a" /* P */](1, 1), stepValue);
            }
            this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
        }
    };
    class_1.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("slot", null));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "swipeGesture": ["swipeGestureChanged"],
                "root": ["rootChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var navLink = function (el, routerDirection, component, componentProps) {
    var nav = el.closest('ion-nav');
    if (nav) {
        if (routerDirection === 'forward') {
            if (component !== undefined) {
                return nav.push(component, componentProps, { skipIfBusy: true });
            }
        }
        else if (routerDirection === 'root') {
            if (component !== undefined) {
                return nav.setRoot(component, componentProps, { skipIfBusy: true });
            }
        }
        else if (routerDirection === 'back') {
            return nav.pop({ skipIfBusy: true });
        }
    }
    return Promise.resolve(false);
};
var NavLink = /** @class */ (function () {
    function NavLink(hostRef) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        /**
         * The transition direction when navigating to another page.
         */
        this.routerDirection = 'forward';
        this.onClick = function () {
            return navLink(_this.el, _this.routerDirection, _this.component, _this.componentProps);
        };
    }
    NavLink.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { onClick: this.onClick }));
    };
    Object.defineProperty(NavLink.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    return NavLink;
}());
var NavPop = /** @class */ (function () {
    function NavPop(hostRef) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.pop = function () {
            return navLink(_this.el, 'back');
        };
    }
    NavPop.prototype.componentDidLoad = function () {
        console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.');
    };
    NavPop.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { onClick: this.pop }));
    };
    Object.defineProperty(NavPop.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    return NavPop;
}());
var NavPush = /** @class */ (function () {
    function NavPush(hostRef) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.push = function () {
            return navLink(_this.el, 'forward', _this.component, _this.componentProps);
        };
    }
    NavPush.prototype.componentDidLoad = function () {
        console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.');
    };
    NavPush.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { onClick: this.push }));
    };
    Object.defineProperty(NavPush.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    return NavPush;
}());
var NavSetRoot = /** @class */ (function () {
    function NavSetRoot(hostRef) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.setRoot = function () {
            return navLink(_this.el, 'root', _this.component, _this.componentProps);
        };
    }
    NavSetRoot.prototype.componentDidLoad = function () {
        console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.');
    };
    NavSetRoot.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { onClick: this.setRoot }));
    };
    Object.defineProperty(NavSetRoot.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    return NavSetRoot;
}());



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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return transition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_3c3e1099_js__ = __webpack_require__(270);



var iosTransitionAnimation = function () { return __webpack_require__.e/* import() */(93).then(__webpack_require__.bind(null, 540)); };
var mdTransitionAnimation = function () { return __webpack_require__.e/* import() */(92).then(__webpack_require__.bind(null, 541)); };
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
                return [4 /*yield*/, __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 450))];
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
var getIonPageElement = function (element) {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
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
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
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
//# sourceMappingURL=7.js.map