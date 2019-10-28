webpackJsonp([11],{

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_option", function() { return SelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_popover", function() { return SelectPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_3c7f3790_js__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlays_10640d86_js__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_18cbe2cc_js__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__watch_options_2af96011_js__ = __webpack_require__(542);







var Select = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.inputId = "ion-sel-" + selectIds++;
        this.didInit = false;
        this.isExpanded = false;
        /**
         * If `true`, the user cannot interact with the select.
         */
        this.disabled = false;
        /**
         * The text to display on the cancel button.
         */
        this.cancelText = 'Cancel';
        /**
         * The text to display on the ok button.
         */
        this.okText = 'OK';
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the select can accept multiple values.
         */
        this.multiple = false;
        /**
         * The interface the select should use: `action-sheet`, `popover` or `alert`.
         */
        this.interface = 'alert';
        /**
         * Any additional options that the `alert`, `action-sheet` or `popover` interface
         * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
         * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
         * [PopoverController API docs](../../popover/PopoverController/#create) for the
         * create options for each interface.
         */
        this.interfaceOptions = {};
        this.onClick = function (ev) {
            _this.setFocus();
            _this.open(ev);
        };
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
        this.ionChange = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionChange", 7);
        this.ionCancel = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionCancel", 7);
        this.ionFocus = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionFocus", 7);
        this.ionBlur = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionBlur", 7);
        this.ionStyle = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["d" /* c */])(this, "ionStyle", 7);
    }
    class_1.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    class_1.prototype.valueChanged = function () {
        this.updateOptions();
        this.emitStyle();
        if (this.didInit) {
            this.ionChange.emit({
                value: this.value,
            });
        }
    };
    class_1.prototype.connectedCallback = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var checked, checked;
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                if (this.value === undefined) {
                    if (this.multiple) {
                        checked = this.childOpts.filter(function (o) { return o.selected; });
                        this.value = checked.map(function (o) { return getOptionValue(o); });
                    }
                    else {
                        checked = this.childOpts.find(function (o) { return o.selected; });
                        if (checked) {
                            this.value = getOptionValue(checked);
                        }
                    }
                }
                this.updateOptions();
                this.updateOverlayOptions();
                this.emitStyle();
                this.mutationO = Object(__WEBPACK_IMPORTED_MODULE_6__watch_options_2af96011_js__["b" /* w */])(this.el, 'ion-select-option', function () { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(_this, void 0, void 0, function () {
                    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                        this.updateOptions();
                        this.updateOverlayOptions();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
        }
    };
    class_1.prototype.componentDidLoad = function () {
        this.didInit = true;
    };
    /**
     * Open the select overlay. The overlay is either an alert, action sheet, or popover,
     * depending on the `interface` property on the `ion-select`.
     *
     * @param event The user interface event that called the open.
     */
    class_1.prototype.open = function (event) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var overlay, _a;
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.disabled || this.isExpanded) {
                            return [2 /*return*/, undefined];
                        }
                        _a = this;
                        return [4 /*yield*/, this.createOverlay(event)];
                    case 1:
                        overlay = _a.overlay = _b.sent();
                        this.isExpanded = true;
                        overlay.onDidDismiss().then(function () {
                            _this.overlay = undefined;
                            _this.isExpanded = false;
                            _this.setFocus();
                        });
                        return [4 /*yield*/, overlay.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, overlay];
                }
            });
        });
    };
    class_1.prototype.createOverlay = function (ev) {
        var selectInterface = this.interface;
        if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
            console.warn("Select interface cannot be \"" + selectInterface + "\" with a multi-value select. Using the \"alert\" interface instead.");
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover' && !ev) {
            console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover') {
            return this.openPopover(ev);
        }
        if (selectInterface === 'action-sheet') {
            return this.openActionSheet();
        }
        return this.openAlert();
    };
    class_1.prototype.updateOverlayOptions = function () {
        var overlay = this.overlay;
        if (!overlay) {
            return;
        }
        var childOpts = this.childOpts;
        switch (this.interface) {
            case 'action-sheet':
                overlay.buttons = this.createActionSheetButtons(childOpts);
                break;
            case 'popover':
                var popover = overlay.querySelector('ion-select-popover');
                if (popover) {
                    popover.options = this.createPopoverOptions(childOpts);
                }
                break;
            case 'alert':
                var inputType = (this.multiple ? 'checkbox' : 'radio');
                overlay.inputs = this.createAlertInputs(childOpts, inputType);
                break;
        }
    };
    class_1.prototype.createActionSheetButtons = function (data) {
        var _this = this;
        var actionSheetButtons = data.map(function (option) {
            return {
                role: (option.selected ? 'selected' : ''),
                text: option.textContent,
                handler: function () {
                    _this.value = getOptionValue(option);
                }
            };
        });
        // Add "cancel" button
        actionSheetButtons.push({
            text: this.cancelText,
            role: 'cancel',
            handler: function () {
                _this.ionCancel.emit();
            }
        });
        return actionSheetButtons;
    };
    class_1.prototype.createAlertInputs = function (data, inputType) {
        return data.map(function (o) {
            return {
                type: inputType,
                label: o.textContent,
                value: getOptionValue(o),
                checked: o.selected,
                disabled: o.disabled
            };
        });
    };
    class_1.prototype.createPopoverOptions = function (data) {
        var _this = this;
        return data.map(function (o) {
            var value = getOptionValue(o);
            return {
                text: o.textContent,
                value: value,
                checked: o.selected,
                disabled: o.disabled,
                handler: function () {
                    _this.value = value;
                    _this.close();
                }
            };
        });
    };
    class_1.prototype.openPopover = function (ev) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var interfaceOptions, mode, popoverOpts;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                interfaceOptions = this.interfaceOptions;
                mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
                popoverOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], event: ev, componentProps: {
                        header: interfaceOptions.header,
                        subHeader: interfaceOptions.subHeader,
                        message: interfaceOptions.message,
                        value: this.value,
                        options: this.createPopoverOptions(this.childOpts)
                    } });
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_4__overlays_10640d86_js__["d" /* c */].create(popoverOpts)];
            });
        });
    };
    class_1.prototype.openActionSheet = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var mode, interfaceOptions, actionSheetOpts;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
                interfaceOptions = this.interfaceOptions;
                actionSheetOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { buttons: this.createActionSheetButtons(this.childOpts), cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_4__overlays_10640d86_js__["c" /* b */].create(actionSheetOpts)];
            });
        });
    };
    class_1.prototype.openAlert = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(this, void 0, void 0, function () {
            var label, labelText, interfaceOptions, inputType, mode, alertOpts;
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
                label = this.getLabel();
                labelText = (label) ? label.textContent : null;
                interfaceOptions = this.interfaceOptions;
                inputType = (this.multiple ? 'checkbox' : 'radio');
                mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
                alertOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.createAlertInputs(this.childOpts, inputType), buttons: [
                        {
                            text: this.cancelText,
                            role: 'cancel',
                            handler: function () {
                                _this.ionCancel.emit();
                            }
                        },
                        {
                            text: this.okText,
                            handler: function (selectedValues) {
                                _this.value = selectedValues;
                            }
                        }
                    ], cssClass: ['select-alert', interfaceOptions.cssClass,
                        (this.multiple ? 'multiple-select-alert' : 'single-select-alert')] });
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_4__overlays_10640d86_js__["b" /* a */].create(alertOpts)];
            });
        });
    };
    /**
     * Close the select interface.
     */
    class_1.prototype.close = function () {
        // TODO check !this.overlay || !this.isFocus()
        if (!this.overlay) {
            return Promise.resolve(false);
        }
        return this.overlay.dismiss();
    };
    class_1.prototype.updateOptions = function () {
        // iterate all options, updating the selected prop
        var canSelect = true;
        var _a = this, value = _a.value, childOpts = _a.childOpts, compareWith = _a.compareWith, multiple = _a.multiple;
        for (var _i = 0, childOpts_1 = childOpts; _i < childOpts_1.length; _i++) {
            var selectOption = childOpts_1[_i];
            var optValue = getOptionValue(selectOption);
            var selected = canSelect && isOptionSelected(value, optValue, compareWith);
            selectOption.selected = selected;
            // if current option is selected and select is single-option, we can't select
            // any option more
            if (selected && !multiple) {
                canSelect = false;
            }
        }
    };
    class_1.prototype.getLabel = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["f"])(this.el);
    };
    class_1.prototype.hasValue = function () {
        return this.getText() !== '';
    };
    Object.defineProperty(class_1.prototype, "childOpts", {
        get: function () {
            return Array.from(this.el.querySelectorAll('ion-select-option'));
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.getText = function () {
        var selectedText = this.selectedText;
        if (selectedText != null && selectedText !== '') {
            return selectedText;
        }
        return generateText(this.childOpts, this.value, this.compareWith);
    };
    class_1.prototype.setFocus = function () {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    };
    class_1.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'select': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
            'select-disabled': this.disabled
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, placeholder = _b.placeholder, name = _b.name, disabled = _b.disabled, isExpanded = _b.isExpanded, value = _b.value, el = _b.el;
        var mode = Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this);
        var labelId = this.inputId + '-lbl';
        var label = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["f"])(el);
        if (label) {
            label.id = labelId;
        }
        var addPlaceholderClass = false;
        var selectText = this.getText();
        if (selectText === '' && placeholder != null) {
            selectText = placeholder;
            addPlaceholderClass = true;
        }
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_46f4a262_js__["a"])(true, el, name, parseValue(value), disabled);
        var selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
        };
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { onClick: this.onClick, role: "combobox", "aria-haspopup": "dialog", "aria-disabled": disabled ? 'true' : null, "aria-expanded": "" + isExpanded, "aria-labelledby": labelId, class: (_a = {},
                _a[mode] = true,
                _a['in-item'] = Object(__WEBPACK_IMPORTED_MODULE_5__theme_18cbe2cc_js__["c" /* h */])('ion-item', el),
                _a['select-disabled'] = disabled,
                _a) }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: selectTextClasses }, selectText), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "select-icon", role: "presentation" }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("div", { class: "select-icon-inner" })), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled, ref: (function (btnEl) { return _this.buttonEl = btnEl; }) })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledChanged"],
                "placeholder": ["disabledChanged"],
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var getOptionValue = function (el) {
    var value = el.value;
    return (value === undefined)
        ? el.textContent || ''
        : value;
};
var parseValue = function (value) {
    if (value == null) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.join(',');
    }
    return value.toString();
};
var isOptionSelected = function (currentValue, compareValue, compareWith) {
    if (currentValue === undefined) {
        return false;
    }
    if (Array.isArray(currentValue)) {
        return currentValue.some(function (val) { return compareOptions(val, compareValue, compareWith); });
    }
    else {
        return compareOptions(currentValue, compareValue, compareWith);
    }
};
var compareOptions = function (currentValue, compareValue, compareWith) {
    if (typeof compareWith === 'function') {
        return compareWith(currentValue, compareValue);
    }
    else if (typeof compareWith === 'string') {
        return currentValue[compareWith] === compareValue[compareWith];
    }
    else {
        return currentValue === compareValue;
    }
};
var generateText = function (opts, value, compareWith) {
    if (value === undefined) {
        return '';
    }
    if (Array.isArray(value)) {
        return value
            .map(function (v) { return textForValue(opts, v, compareWith); })
            .filter(function (opt) { return opt !== null; })
            .join(', ');
    }
    else {
        return textForValue(opts, value, compareWith) || '';
    }
};
var textForValue = function (opts, value, compareWith) {
    var selectOpt = opts.find(function (opt) {
        return compareOptions(getOptionValue(opt), value, compareWith);
    });
    return selectOpt
        ? selectOpt.textContent
        : null;
};
var selectIds = 0;
var SelectOption = /** @class */ (function () {
    function SelectOption(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        this.inputId = "ion-selopt-" + selectOptionIds++;
        /**
         * If `true`, the user cannot interact with the select option.
         */
        this.disabled = false;
        /**
         * If `true`, the element is selected.
         */
        this.selected = false;
    }
    SelectOption.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { role: "option", id: this.inputId, class: Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this) }));
    };
    Object.defineProperty(SelectOption.prototype, "el", {
        get: function () { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["f" /* e */])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectOption, "style", {
        get: function () { return ":host{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return SelectOption;
}());
var selectOptionIds = 0;
var SelectPopover = /** @class */ (function () {
    function SelectPopover(hostRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["l" /* r */])(this, hostRef);
        /** Array of options for the popover */
        this.options = [];
    }
    SelectPopover.prototype.onSelect = function (ev) {
        var option = this.options.find(function (o) { return o.value === ev.target.value; });
        if (option) {
            Object(__WEBPACK_IMPORTED_MODULE_4__overlays_10640d86_js__["p" /* s */])(option.handler);
        }
    };
    SelectPopover.prototype.render = function () {
        return (Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["a" /* H */], { class: Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["e" /* d */])(this) }, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-list", null, this.header !== undefined && Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
            Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-item", null, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-label", { class: "ion-text-wrap" }, this.subHeader !== undefined && Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("h3", null, this.subHeader), this.message !== undefined && Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("p", null, this.message))), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-radio-group", null, this.options.map(function (option) { return Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-item", null, Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-label", null, option.text), Object(__WEBPACK_IMPORTED_MODULE_1__core_ca0488fc_js__["i" /* h */])("ion-radio", { checked: option.checked, value: option.value, disabled: option.disabled })); })))));
    };
    Object.defineProperty(SelectPopover, "style", {
        get: function () { return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"; },
        enumerable: true,
        configurable: true
    });
    return SelectPopover;
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

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ })

});
//# sourceMappingURL=11.js.map