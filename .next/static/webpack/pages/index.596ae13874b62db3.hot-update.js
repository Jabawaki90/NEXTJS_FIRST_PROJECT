"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Header = function(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\srimayeni\\\\Desktop\\\\next-js-project\\\\pages\\\\index.js\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, _this);\n};\n_c = Header;\nvar Homepage = function() {\n    var _this1 = _this;\n    _s();\n    var names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likes = ref[0], setLikes = ref[1];\n    var handleClick = function() {\n        setLikes(likes + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srimayeni\\\\Desktop\\\\next-js-project\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map(function(e) {\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: e\n                    }, e, false, {\n                        fileName: \"C:\\\\Users\\\\srimayeni\\\\Desktop\\\\next-js-project\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srimayeni\\\\Desktop\\\\next-js-project\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\srimayeni\\\\Desktop\\\\next-js-project\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srimayeni\\\\Desktop\\\\next-js-project\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, _this);\n};\n_s(Homepage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = Homepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFpQzs7QUFFakMsSUFBTUMsTUFBTSxHQUFHLGdCQUFXO1FBQVRDLEtBQUssU0FBTEEsS0FBSztJQUNsQixxQkFBTyw4REFBQ0MsSUFBRTtrQkFBRUQsS0FBSyxHQUFHQSxLQUFLLEdBQUcsZUFBZTs7Ozs7YUFBTTtDQUNwRDtBQUZLRCxLQUFBQSxNQUFNO0FBSVosSUFBTUcsUUFBUSxHQUFHLFdBQUk7OztJQUNqQixJQUFNQyxLQUFLLEdBQUc7UUFBQyxjQUFjO1FBQUUsY0FBYztRQUFFLG1CQUFtQjtLQUFDO0lBRXJFLElBQTBCTCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTlCTSxLQUFLLEdBQWNOLEdBQVcsR0FBekIsRUFBRU8sUUFBUSxHQUFJUCxHQUFXLEdBQWY7SUFFdEIsSUFBTVEsV0FBVyxHQUFHLFdBQUk7UUFDdEJELFFBQVEsQ0FBQ0QsS0FBSyxHQUFDLENBQUMsQ0FBQztLQUNsQjtJQUVELHFCQUFPLDhEQUFDRyxLQUFHOzswQkFDVCw4REFBQ1IsTUFBTTtnQkFBQ0MsS0FBSyxFQUFDLDBCQUEwQjs7Ozs7cUJBQUc7MEJBQzNDLDhEQUFDUSxJQUFFOzBCQUNFTCxLQUFLLENBQUNNLEdBQUcsQ0FBQyxTQUFDQyxDQUFDLEVBQUc7a0NBQ1osOERBQUNDLElBQUU7a0NBQVVELENBQUM7dUJBQUxBLENBQUM7Ozs7OEJBQVU7aUJBQ3ZCLENBQUM7Ozs7O3FCQUNEOzBCQUNMLDhEQUFDRSxRQUFNO2dCQUFDQyxPQUFPLEVBQUVQLFdBQVc7O29CQUFFLFFBQU07b0JBQUNGLEtBQUs7b0JBQUMsR0FBQzs7Ozs7O3FCQUFTOzs7Ozs7YUFDakQ7Q0FDUDtHQWxCS0YsUUFBUTtBQUFSQSxNQUFBQSxRQUFRO0FBb0JkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHt0aXRsZX0pPT57XHJcbiAgICByZXR1cm4gPGgxPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgdGl0bGUnfTwvaDE+XHJcbn1cclxuXHJcbmNvbnN0IEhvbWVwYWdlID0gKCk9PntcclxuICAgIGNvbnN0IG5hbWVzID0gWydBZGEgTG92ZWxhY2UnLCAnR3JhY2UgSG9wcGVyJywgJ01hcmdhcmV0IEhhbWlsdG9uJ107XHJcblxyXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCk9PntcclxuICAgIHNldExpa2VzKGxpa2VzKzEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkZXIgdGl0bGU9XCJEZXZlbG9wLiBQcmV2aWV3LiBTaGlwLiBcIiAvPlxyXG4gICAgPHVsPlxyXG4gICAgICAgIHtuYW1lcy5tYXAoKGUpPT57XHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2V9PntlfTwvbGk+XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L3VsPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TGlrZSAoe2xpa2VzfSk8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVwYWdlIiwibmFtZXMiLCJsaWtlcyIsInNldExpa2VzIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJ1bCIsIm1hcCIsImUiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});