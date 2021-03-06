webpackJsonp([90],{

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);

var startHardwareBackButton = function () {
    var doc = document;
    var busy = false;
    doc.addEventListener('backbutton', function () {
        if (busy) {
            return;
        }
        var handlers = [];
        var ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
                register: function (priority, handler) {
                    handlers.push({ priority: priority, handler: handler });
                }
            }
        });
        doc.dispatchEvent(ev);
        if (handlers.length > 0) {
            var selectedPriority_1 = Number.MIN_SAFE_INTEGER;
            var selectedHandler_1;
            handlers.forEach(function (_a) {
                var priority = _a.priority, handler = _a.handler;
                if (priority >= selectedPriority_1) {
                    selectedPriority_1 = priority;
                    selectedHandler_1 = handler;
                }
            });
            busy = true;
            executeAction(selectedHandler_1).then(function () { return busy = false; });
        }
    });
};
var executeAction = function (handler) { return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */])(void 0, void 0, void 0, function () {
    var result, e_1;
    return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __generator */])(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!handler) return [3 /*break*/, 2];
                result = handler();
                if (!(result != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, result];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.error(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };



/***/ })

});
//# sourceMappingURL=90.js.map