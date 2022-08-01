"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tapas",{

/***/ "./components/Menu/FoodSection.js":
/*!****************************************!*\
  !*** ./components/Menu/FoodSection.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_tapas_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tapas.json */ \"./components/data/tapas.json\");\n/* harmony import */ var _BackLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BackLink */ \"./components/Menu/BackLink.js\");\n/* harmony import */ var _FoodCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FoodCard */ \"./components/Menu/FoodCard.js\");\n\n\n\n\n\n\n\nfunction TapasSection(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    var _this = this;\n    var DisplayData = _data_tapas_json__WEBPACK_IMPORTED_MODULE_3__.map(function(param) {\n        var title = param.title, src = param.src, price = param.price;\n        //Destructure the objects returned from the json and get the employee information.\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FoodCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            title: title,\n            price: price,\n            src: src\n        }, title, false, {\n            fileName: \"/Users/Jaedan/Documents/GitHub/saint-tropez/components/Menu/FoodSection.js\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-plant \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl px-10 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" pt-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/Jaedan/Documents/GitHub/saint-tropez/components/Menu/FoodSection.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white py-10 text-3xl lg:text-4xl serif font-bold uppercase\",\n                            children: \"Tapas\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Jaedan/Documents/GitHub/saint-tropez/components/Menu/FoodSection.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Jaedan/Documents/GitHub/saint-tropez/components/Menu/FoodSection.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" pb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10\",\n                    children: DisplayData\n                }, void 0, false, {\n                    fileName: \"/Users/Jaedan/Documents/GitHub/saint-tropez/components/Menu/FoodSection.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Jaedan/Documents/GitHub/saint-tropez/components/Menu/FoodSection.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Jaedan/Documents/GitHub/saint-tropez/components/Menu/FoodSection.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = TapasSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TapasSection);\nvar _c;\n$RefreshReg$(_c, \"TapasSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUvRm9vZFNlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDSDtBQUNpQjtBQUNUO0FBQ0E7QUFFakMsU0FBU0ssWUFBWSxDQUFDLEtBQUUsRUFBRTtRQUFKLEtBQUUsR0FBRixLQUFFLFlBQUYsS0FBRTs7SUFDdEIsSUFBTUMsV0FBVyxHQUFHSixpREFBYSxDQUFDLGdCQUEyQjtZQUF4Qk0sS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7UUFDcEQsa0ZBQWtGO1FBQ2xGLHFCQUFPLDhEQUFDTixpREFBUTtZQUFhSSxLQUFLLEVBQUVBLEtBQUs7WUFBRUUsS0FBSyxFQUFFQSxLQUFLO1lBQUVELEdBQUcsRUFBRUEsR0FBRztXQUEzQ0QsS0FBSzs7OztpQkFBMEM7S0FDdEUsQ0FBQztJQUNGLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXO2tCQUN4Qiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMseUJBQXlCOzs4QkFDdEMsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxRQUFROztzQ0FDckIsOERBQUNULGlEQUFROzs7O2dDQUFHO3NDQUNaLDhEQUFDVSxJQUFFOzRCQUFDRCxTQUFTLEVBQUMsaUVBQWlFO3NDQUFDLE9BRWhGOzs7OztnQ0FBSzs7Ozs7O3dCQUNEOzhCQUVOLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMseUVBQXlFOzhCQUNyRk4sV0FBVzs7Ozs7d0JBQ1I7Ozs7OztnQkFDRjs7Ozs7WUFDRixDQUNQO0NBQ0Y7QUFyQlFELEtBQUFBLFlBQVk7QUF1QnJCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVudS9Gb29kU2VjdGlvbi5qcz9mMDI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVGFwYXNEYXRhIGZyb20gXCIuLi9kYXRhL3RhcGFzLmpzb25cIlxuaW1wb3J0IEJhY2tMaW5rIGZyb20gXCIuL0JhY2tMaW5rXCJcbmltcG9ydCBGb29kQ2FyZCBmcm9tIFwiLi9Gb29kQ2FyZFwiXG5cbmZ1bmN0aW9uIFRhcGFzU2VjdGlvbih7fSkge1xuICBjb25zdCBEaXNwbGF5RGF0YSA9IFRhcGFzRGF0YS5tYXAoKHsgdGl0bGUsIHNyYywgcHJpY2UgfSkgPT4ge1xuICAgIC8vRGVzdHJ1Y3R1cmUgdGhlIG9iamVjdHMgcmV0dXJuZWQgZnJvbSB0aGUganNvbiBhbmQgZ2V0IHRoZSBlbXBsb3llZSBpbmZvcm1hdGlvbi5cbiAgICByZXR1cm4gPEZvb2RDYXJkIGtleT17dGl0bGV9IHRpdGxlPXt0aXRsZX0gcHJpY2U9e3ByaWNlfSBzcmM9e3NyY30gLz5cbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXBsYW50IFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgcHgtMTAgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwdC0xMFwiPlxuICAgICAgICAgIDxCYWNrTGluayAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHB5LTEwIHRleHQtM3hsIGxnOnRleHQtNHhsIHNlcmlmIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgIFRhcGFzXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcGItMjAgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAteC0xMCBnYXAteS0xMFwiPlxuICAgICAgICAgIHtEaXNwbGF5RGF0YX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXBhc1NlY3Rpb25cbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJUYXBhc0RhdGEiLCJCYWNrTGluayIsIkZvb2RDYXJkIiwiVGFwYXNTZWN0aW9uIiwiRGlzcGxheURhdGEiLCJtYXAiLCJ0aXRsZSIsInNyYyIsInByaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu/FoodSection.js\n"));

/***/ })

});