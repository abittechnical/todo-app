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

/***/ "./components/TaskItem.tsx":
/*!*********************************!*\
  !*** ./components/TaskItem.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js\");\n\n\n\nconst checkBoxClasses = {\n    completed: [\n        \"border-none\",\n        \"text-white\",\n        \"bg-gradient-to-tr\",\n        \"from-purple-500\",\n        \"to-cyan-500\"\n    ],\n    pending: [\n        \"border-2\",\n        \"dark:border-zinc-700\"\n    ]\n};\nconst listItemTitleClasses = {\n    completed: [\n        \"line-through\",\n        \"text-zinc-300\",\n        \"dark:text-zinc-700\"\n    ],\n    pending: []\n};\nconst TaskItem = (param)=>{\n    let { title , id , completed  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"group flex items-center justify-between px-6 py-4 text-zinc-600 dark:text-zinc-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        \"data-action\": \"toggle-completed\",\n                        \"data-role\": \"check-box\",\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"group inline-flex aspect-square h-7 w-7 items-center justify-center rounded-full border-2\", completed ? \"border-none bg-gradient-to-tr from-purple-500 to-cyan-500 text-white\" : \"border-zinc-200 text-transparent dark:border-zinc-700\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            strokeWidth: \"3\",\n                            stroke: \"currentColor\",\n                            className: \"h-4 w-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M4.5 12.75l6 6 9-13.5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/components/TaskItem.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/bitwhys/Projects/playground/todo-app/components/TaskItem.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/components/TaskItem.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        \"data-role\": \"title\",\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"w-full px-2\", {\n                            \"line-through text-zinc-300 dark:text-zinc-700\": completed\n                        }),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/components/TaskItem.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bitwhys/Projects/playground/todo-app/components/TaskItem.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                \"data-action\": \"delete-item\",\n                className: \"hidden group-hover:inline-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    strokeWidth: \"1.5\",\n                    stroke: \"currentColor\",\n                    className: \"h-6 w-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        d: \"M6 18L18 6M6 6l12 12\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/components/TaskItem.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bitwhys/Projects/playground/todo-app/components/TaskItem.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bitwhys/Projects/playground/todo-app/components/TaskItem.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bitwhys/Projects/playground/todo-app/components/TaskItem.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TaskItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskItem);\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2tJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBQ0Y7QUFPdkIsTUFBTUUsa0JBQWtCO0lBQ3RCQyxXQUFXO1FBQUM7UUFBZTtRQUFjO1FBQXFCO1FBQW1CO0tBQWM7SUFDL0ZDLFNBQVM7UUFBQztRQUFZO0tBQXVCO0FBQy9DO0FBQ0EsTUFBTUMsdUJBQXVCO0lBQzNCRixXQUFXO1FBQUM7UUFBZ0I7UUFBaUI7S0FBcUI7SUFDbEVDLFNBQVMsRUFBRTtBQUNiO0FBRUEsTUFBTUUsV0FBVyxTQUE2QztRQUE1QyxFQUFFQyxNQUFLLEVBQUVDLEdBQUUsRUFBRUwsVUFBUyxFQUFpQjtJQUN2RCxxQkFDRSw4REFBQ007UUFBR0MsV0FBVTs7MEJBQ1osOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NDLGVBQVk7d0JBQ1pDLGFBQVU7d0JBQ1ZKLFdBQVdULGdEQUFJQSxDQUNiLDZGQUNBRSxZQUNJLHlFQUNBLHVEQUF1RDtrQ0FHN0QsNEVBQUNZOzRCQUNDQyxPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxTQUFROzRCQUNSQyxhQUFZOzRCQUNaQyxRQUFPOzRCQUNQVixXQUFVO3NDQUVWLDRFQUFDVztnQ0FBS0MsZUFBYztnQ0FBUUMsZ0JBQWU7Z0NBQVFDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pELDhEQUFDQzt3QkFBS1gsYUFBVTt3QkFBUUosV0FBV1QsZ0RBQUlBLENBQUMsZUFBZTs0QkFBQyxpREFBaURFO3dCQUFTO2tDQUMvR0k7Ozs7Ozs7Ozs7OzswQkFHTCw4REFBQ0s7Z0JBQU9DLGVBQVk7Z0JBQWNILFdBQVU7MEJBQzFDLDRFQUFDSztvQkFDQ0MsT0FBTTtvQkFDTkMsTUFBSztvQkFDTEMsU0FBUTtvQkFDUkMsYUFBWTtvQkFDWkMsUUFBTztvQkFDUFYsV0FBVTs4QkFFViw0RUFBQ1c7d0JBQUtDLGVBQWM7d0JBQVFDLGdCQUFlO3dCQUFRQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9EO0tBM0NNbEI7QUE2Q04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXNrSXRlbS50c3g/M2VmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgdHlwZSBMaXN0SXRlbVByb3BzID0ge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29tcGxldGVkOiBib29sZWFuXG59XG5jb25zdCBjaGVja0JveENsYXNzZXMgPSB7XG4gIGNvbXBsZXRlZDogWydib3JkZXItbm9uZScsICd0ZXh0LXdoaXRlJywgJ2JnLWdyYWRpZW50LXRvLXRyJywgJ2Zyb20tcHVycGxlLTUwMCcsICd0by1jeWFuLTUwMCddLFxuICBwZW5kaW5nOiBbJ2JvcmRlci0yJywgJ2Rhcms6Ym9yZGVyLXppbmMtNzAwJ10sXG59XG5jb25zdCBsaXN0SXRlbVRpdGxlQ2xhc3NlcyA9IHtcbiAgY29tcGxldGVkOiBbJ2xpbmUtdGhyb3VnaCcsICd0ZXh0LXppbmMtMzAwJywgJ2Rhcms6dGV4dC16aW5jLTcwMCddLFxuICBwZW5kaW5nOiBbXSxcbn1cblxuY29uc3QgVGFza0l0ZW0gPSAoeyB0aXRsZSwgaWQsIGNvbXBsZXRlZCB9OiBMaXN0SXRlbVByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC02IHB5LTQgdGV4dC16aW5jLTYwMCBkYXJrOnRleHQtemluYy02MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBkYXRhLWFjdGlvbj1cInRvZ2dsZS1jb21wbGV0ZWRcIlxuICAgICAgICAgIGRhdGEtcm9sZT1cImNoZWNrLWJveFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgJ2dyb3VwIGlubGluZS1mbGV4IGFzcGVjdC1zcXVhcmUgaC03IHctNyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlci0yJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICAgICAgICA/ICdib3JkZXItbm9uZSBiZy1ncmFkaWVudC10by10ciBmcm9tLXB1cnBsZS01MDAgdG8tY3lhbi01MDAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgOiAnYm9yZGVyLXppbmMtMjAwIHRleHQtdHJhbnNwYXJlbnQgZGFyazpib3JkZXItemluYy03MDAnXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTQuNSAxMi43NWw2IDYgOS0xMy41XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzcGFuIGRhdGEtcm9sZT1cInRpdGxlXCIgY2xhc3NOYW1lPXtjbHN4KFwidy1mdWxsIHB4LTJcIiwgeydsaW5lLXRocm91Z2ggdGV4dC16aW5jLTMwMCBkYXJrOnRleHQtemluYy03MDAnOiBjb21wbGV0ZWR9KX0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gZGF0YS1hY3Rpb249XCJkZWxldGUtaXRlbVwiIGNsYXNzTmFtZT1cImhpZGRlbiBncm91cC1ob3ZlcjppbmxpbmUtZmxleFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrSXRlbVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2xzeCIsImNoZWNrQm94Q2xhc3NlcyIsImNvbXBsZXRlZCIsInBlbmRpbmciLCJsaXN0SXRlbVRpdGxlQ2xhc3NlcyIsIlRhc2tJdGVtIiwidGl0bGUiLCJpZCIsImxpIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwiZGF0YS1hY3Rpb24iLCJkYXRhLXJvbGUiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TaskItem.tsx\n"));

/***/ })

});