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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/.pnpm/next@13.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NewTaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NewTaskForm */ \"./components/NewTaskForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_TaskItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TaskItem */ \"./components/TaskItem.tsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ \"./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst sampleTasks = [\n    {\n        id: \"1\",\n        title: \"Complete online javascript course\",\n        completed: true\n    },\n    {\n        id: \"2\",\n        title: \"Jog around the park 3x\",\n        completed: false\n    },\n    {\n        id: \"3\",\n        title: \"10 minute meditation\",\n        completed: false\n    },\n    {\n        id: \"4\",\n        title: \"Read for 1 hour\",\n        completed: false\n    },\n    {\n        id: \"5\",\n        title: \"Pick up groceries\",\n        completed: false\n    },\n    {\n        id: \"6\",\n        title: \"Complete Todo App from Frontend Mentors\",\n        completed: false\n    }\n];\nconst Index = (param)=>{\n    let {} = param;\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(sampleTasks);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"all\");\n    const handleCompleted = (id)=>{};\n    const handleDelete = (id)=>{};\n    const clearCompleted = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/bitwhys-sketch-logo.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Frontend Mentor: Todo App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"relative h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-80\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"max-h-full w-full object-cover\",\n                                src: \"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute inset-0 h-full w-full bg-gradient-to-tr from-purple-600 to-cyan-300 dark:from-purple-700 dark:to-cyan-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mx-auto -mt-60 flex w-[327px] flex-col md:w-[540px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                                className: \"mb-10 flex items-center justify-between text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-4xl font-bold uppercase tracking-widest\",\n                                        children: \"todo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        strokeWidth: \"2\",\n                                        stroke: \"currentColor\",\n                                        className: \"h-8 w-8 dark:hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            d: \"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        strokeWidth: \"2\",\n                                        stroke: \"currentColor\",\n                                        className: \"hidden h-8 w-8 dark:inline-block\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            d: \"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewTaskForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"container\",\n                                className: \"full relative grid max-h-[440px] grid-rows-[1fr_50px] divide-y rounded-lg bg-white shadow-2xl dark:divide-zinc-700 dark:bg-zinc-800\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"grid divide-y overflow-y-auto rounded-t-lg dark:divide-zinc-700\",\n                                        children: tasks.map((param)=>/*#__PURE__*/ {\n                                            let { title , id , completed  } = param;\n                                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                title: title,\n                                                id: id,\n                                                completed: completed,\n                                                onDelete: handleDelete,\n                                                onCompleted: handleCompleted\n                                            }, id, false, {\n                                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, undefined);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                                        className: \" flex w-full items-center justify-between px-6 py-4 text-sm text-zinc-500 dark:text-zinc-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                id: \"remaining-items\",\n                                                children: \"5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"flex items-center space-x-2 font-medium tracking-wide\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        \"data-filter\": \"all\",\n                                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"hover:text-zinc-600 dark:hover:text-zinc-500\", filter === \"all\" ? \"font-bold text-blue-600 dark:text-blue-500\" : \"hover:text-zinc-600 dark:hover:text-zinc-500\"),\n                                                        children: \"All\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        \"data-filter\": \"active\",\n                                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"hover:text-zinc-600 dark:hover:text-zinc-500\", filter === \"active\" ? \"font-bold text-blue-600 dark:text-blue-500\" : \"hover:text-zinc-600 dark:hover:text-zinc-500\"),\n                                                        children: \"Active\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        \"data-filter\": \"completed\",\n                                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"hover:text-zinc-600 dark:hover:text-zinc-500\", filter === \"completed\" ? \"font-bold text-blue-600 dark:text-blue-500\" : \"hover:text-zinc-600 dark:hover:text-zinc-500\"),\n                                                        children: \"Completed\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: clearCompleted,\n                                                \"data-action\": \"clear-completed\",\n                                                className: \"hover:text-zinc-600 dark:hover:text-zinc-500\",\n                                                children: \"Clear completed\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-20 text-center text-sm text-zinc-400 dark:text-zinc-700\",\n                                children: \"Drag and drop to reorder list\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bitwhys/Projects/playground/todo-app/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"Py5IDqeMOgtBsOcMwxVb5gt82c0=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ3NCO0FBQ2xCO0FBQ1k7QUFDckI7QUFJdkIsTUFBTUssY0FBYztJQUNsQjtRQUFFQyxJQUFJO1FBQUtDLE9BQU87UUFBcUNDLFdBQVcsSUFBSTtJQUFDO0lBQ3ZFO1FBQUVGLElBQUk7UUFBS0MsT0FBTztRQUEwQkMsV0FBVyxLQUFLO0lBQUM7SUFDN0Q7UUFBRUYsSUFBSTtRQUFLQyxPQUFPO1FBQXdCQyxXQUFXLEtBQUs7SUFBQztJQUMzRDtRQUFFRixJQUFJO1FBQUtDLE9BQU87UUFBbUJDLFdBQVcsS0FBSztJQUFDO0lBQ3REO1FBQUVGLElBQUk7UUFBS0MsT0FBTztRQUFxQkMsV0FBVyxLQUFLO0lBQUM7SUFDeEQ7UUFBRUYsSUFBSTtRQUFLQyxPQUFPO1FBQTJDQyxXQUFXLEtBQUs7SUFBQztDQUMvRTtBQUNELE1BQU1DLFFBQVEsU0FBb0I7UUFBbkIsRUFBYzs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDRztJQUNuQyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQWlDO0lBQ3JFLE1BQU1ZLGtCQUFrQixDQUFDUixLQUFlLENBQUM7SUFDekMsTUFBTVMsZUFBZSxDQUFDVCxLQUFlLENBQUM7SUFDdEMsTUFBTVUsaUJBQWlCLElBQU0sQ0FBQztJQUM5QixxQkFDRTs7MEJBQ0UsOERBQUNoQixrREFBSUE7O2tDQUNILDhEQUFDaUI7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7OztrQ0FDdEIsOERBQUNaO2tDQUFNOzs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNhO2dCQUFLQyxXQUFVOztrQ0FDZCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FDQ0YsV0FBVTtnQ0FDVkcsS0FBSTtnQ0FDSkMsS0FBSTs7Ozs7OzBDQUVOLDhEQUFDSDtnQ0FBSUQsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FBT0wsV0FBVTs7a0RBQ2hCLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFBK0M7Ozs7OztrREFDN0QsOERBQUNPO3dDQUNDQyxPQUFNO3dDQUNOQyxNQUFLO3dDQUNMQyxTQUFRO3dDQUNSQyxhQUFZO3dDQUNaQyxRQUFPO3dDQUNQWixXQUFVO2tEQUVWLDRFQUFDYTs0Q0FDQ0MsZUFBYzs0Q0FDZEMsZ0JBQWU7NENBQ2ZDLEdBQUU7Ozs7Ozs7Ozs7O2tEQUdOLDhEQUFDVDt3Q0FDQ0MsT0FBTTt3Q0FDTkMsTUFBSzt3Q0FDTEMsU0FBUTt3Q0FDUkMsYUFBWTt3Q0FDWkMsUUFBTzt3Q0FDUFosV0FBVTtrREFFViw0RUFBQ2E7NENBQ0NDLGVBQWM7NENBQ2RDLGdCQUFlOzRDQUNmQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJUiw4REFBQ3BDLCtEQUFXQTs7Ozs7MENBQ1osOERBQUNxQjtnQ0FDQ2hCLElBQUc7Z0NBQ0hlLFdBQVU7O2tEQUVWLDhEQUFDaUI7d0NBQUdqQixXQUFVO2tEQUNYWCxNQUFNNkIsR0FBRyxDQUFDLHVCQUNUO2dEQURVLEVBQUVoQyxNQUFLLEVBQUVELEdBQUUsRUFBRUUsVUFBUyxFQUFFO21EQUNsQyw4REFBQ0wsNERBQVFBO2dEQUNQSSxPQUFPQTtnREFFUEQsSUFBSUE7Z0RBQ0pFLFdBQVdBO2dEQUNYZ0MsVUFBVXpCO2dEQUNWMEIsYUFBYTNCOytDQUpSUjs7Ozs7d0NBS047Ozs7OztrREFHTCw4REFBQ29DO3dDQUFPckIsV0FBVTs7MERBQ2hCLDhEQUFDc0I7Z0RBQUtyQyxJQUFHOzBEQUFrQjs7Ozs7OzBEQUMzQiw4REFBQ3FDO2dEQUFLdEIsV0FBVTs7a0VBQ2QsOERBQUN1Qjt3REFDQ0MsZUFBWTt3REFDWnhCLFdBQVdqQixnREFBSUEsQ0FDYixnREFDQVEsV0FBVyxRQUNQLCtDQUNBLDhDQUE4QztrRUFFckQ7Ozs7OztrRUFHRCw4REFBQ2dDO3dEQUNDQyxlQUFZO3dEQUNaeEIsV0FBV2pCLGdEQUFJQSxDQUNiLGdEQUNBUSxXQUFXLFdBQ1AsK0NBQ0EsOENBQThDO2tFQUVyRDs7Ozs7O2tFQUdELDhEQUFDZ0M7d0RBQ0NDLGVBQVk7d0RBQ1p4QixXQUFXakIsZ0RBQUlBLENBQ2IsZ0RBQ0FRLFdBQVcsY0FDUCwrQ0FDQSw4Q0FBOEM7a0VBRXJEOzs7Ozs7Ozs7Ozs7MERBSUgsOERBQUNnQztnREFDQ0UsU0FBUzlCO2dEQUNUK0IsZUFBWTtnREFDWjFCLFdBQVU7MERBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLTCw4REFBQzJCO2dDQUFFM0IsV0FBVTswQ0FBNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BGO0dBM0hNWjtLQUFBQTtBQTRITiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmV3VGFza0Zvcm0gZnJvbSAnQC9jb21wb25lbnRzL05ld1Rhc2tGb3JtJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUYXNrSXRlbSBmcm9tICdAL2NvbXBvbmVudHMvVGFza0l0ZW0nXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgdHlwZSBJbmRleFByb3BzID0ge31cblxuY29uc3Qgc2FtcGxlVGFza3MgPSBbXG4gIHsgaWQ6ICcxJywgdGl0bGU6ICdDb21wbGV0ZSBvbmxpbmUgamF2YXNjcmlwdCBjb3Vyc2UnLCBjb21wbGV0ZWQ6IHRydWUgfSxcbiAgeyBpZDogJzInLCB0aXRsZTogJ0pvZyBhcm91bmQgdGhlIHBhcmsgM3gnLCBjb21wbGV0ZWQ6IGZhbHNlIH0sXG4gIHsgaWQ6ICczJywgdGl0bGU6ICcxMCBtaW51dGUgbWVkaXRhdGlvbicsIGNvbXBsZXRlZDogZmFsc2UgfSxcbiAgeyBpZDogJzQnLCB0aXRsZTogJ1JlYWQgZm9yIDEgaG91cicsIGNvbXBsZXRlZDogZmFsc2UgfSxcbiAgeyBpZDogJzUnLCB0aXRsZTogJ1BpY2sgdXAgZ3JvY2VyaWVzJywgY29tcGxldGVkOiBmYWxzZSB9LFxuICB7IGlkOiAnNicsIHRpdGxlOiAnQ29tcGxldGUgVG9kbyBBcHAgZnJvbSBGcm9udGVuZCBNZW50b3JzJywgY29tcGxldGVkOiBmYWxzZSB9LFxuXVxuY29uc3QgSW5kZXggPSAoe306IEluZGV4UHJvcHMpID0+IHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShzYW1wbGVUYXNrcylcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlPCdhbGwnIHwgJ2FjdGl2ZScgfCAnY29tcGxldGVkJz4oJ2FsbCcpXG4gIGNvbnN0IGhhbmRsZUNvbXBsZXRlZCA9IChpZDogc3RyaW5nKSA9PiB7fVxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQ6IHN0cmluZykgPT4ge31cbiAgY29uc3QgY2xlYXJDb21wbGV0ZWQgPSAoKSA9PiB7fVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvYml0d2h5cy1za2V0Y2gtbG9nby5zdmdcIiAvPlxuICAgICAgICA8dGl0bGU+RnJvbnRlbmQgTWVudG9yOiBUb2RvIEFwcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXNjcmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlICBoLTgwXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LWgtZnVsbCB3LWZ1bGwgIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1NTIxMjY5Ny0xOTRkMDkyZTNiOGY/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE4ODcmcT04MFwiXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1wdXJwbGUtNjAwIHRvLWN5YW4tMzAwIGRhcms6ZnJvbS1wdXJwbGUtNzAwIGRhcms6dG8tY3lhbi02MDBcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byAtbXQtNjAgZmxleCB3LVszMjdweF0gZmxleC1jb2wgbWQ6dy1bNTQwcHhdXCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYi0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+dG9kbzwvaDE+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04IGRhcms6aGlkZGVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMjEuNzUyIDE1LjAwMkE5LjcxOCA5LjcxOCAwIDAxMTggMTUuNzVjLTUuMzg1IDAtOS43NS00LjM2NS05Ljc1LTkuNzUgMC0xLjMzLjI2Ni0yLjU5Ny43NDgtMy43NTJBOS43NTMgOS43NTMgMCAwMDMgMTEuMjVDMyAxNi42MzUgNy4zNjUgMjEgMTIuNzUgMjFhOS43NTMgOS43NTMgMCAwMDkuMDAyLTUuOTk4elwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTggdy04IGRhcms6aW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgM3YyLjI1bTYuMzY0LjM4NmwtMS41OTEgMS41OTFNMjEgMTJoLTIuMjVtLS4zODYgNi4zNjRsLTEuNTkxLTEuNTkxTTEyIDE4Ljc1VjIxbS00Ljc3My00LjIyN2wtMS41OTEgMS41OTFNNS4yNSAxMkgzbTQuMjI3LTQuNzczTDUuNjM2IDUuNjM2TTE1Ljc1IDEyYTMuNzUgMy43NSAwIDExLTcuNSAwIDMuNzUgMy43NSAwIDAxNy41IDB6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxOZXdUYXNrRm9ybSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPVwiY29udGFpbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ1bGwgcmVsYXRpdmUgZ3JpZCBtYXgtaC1bNDQwcHhdIGdyaWQtcm93cy1bMWZyXzUwcHhdIGRpdmlkZS15IHJvdW5kZWQtbGcgYmctd2hpdGUgc2hhZG93LTJ4bCBkYXJrOmRpdmlkZS16aW5jLTcwMCBkYXJrOmJnLXppbmMtODAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBkaXZpZGUteSBvdmVyZmxvdy15LWF1dG8gcm91bmRlZC10LWxnIGRhcms6ZGl2aWRlLXppbmMtNzAwXCI+XG4gICAgICAgICAgICAgIHt0YXNrcy5tYXAoKHsgdGl0bGUsIGlkLCBjb21wbGV0ZWQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxUYXNrSXRlbVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkPXtoYW5kbGVDb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCIgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC02IHB5LTQgICB0ZXh0LXNtIHRleHQtemluYy01MDAgZGFyazp0ZXh0LXppbmMtNjAwXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwicmVtYWluaW5nLWl0ZW1zXCI+NTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBkYXRhLWZpbHRlcj1cImFsbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICdob3Zlcjp0ZXh0LXppbmMtNjAwIGRhcms6aG92ZXI6dGV4dC16aW5jLTUwMCcsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlciA9PT0gJ2FsbCdcbiAgICAgICAgICAgICAgICAgICAgICA/ICdmb250LWJvbGQgdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnaG92ZXI6dGV4dC16aW5jLTYwMCBkYXJrOmhvdmVyOnRleHQtemluYy01MDAnXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFsbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAgICAgJ2hvdmVyOnRleHQtemluYy02MDAgZGFyazpob3Zlcjp0ZXh0LXppbmMtNTAwJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyID09PSAnYWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgICAgID8gJ2ZvbnQtYm9sZCB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdob3Zlcjp0ZXh0LXppbmMtNjAwIGRhcms6aG92ZXI6dGV4dC16aW5jLTUwMCdcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWN0aXZlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgZGF0YS1maWx0ZXI9XCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAnaG92ZXI6dGV4dC16aW5jLTYwMCBkYXJrOmhvdmVyOnRleHQtemluYy01MDAnLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIgPT09ICdjb21wbGV0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZm9udC1ib2xkIHRleHQtYmx1ZS02MDAgZGFyazp0ZXh0LWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ2hvdmVyOnRleHQtemluYy02MDAgZGFyazpob3Zlcjp0ZXh0LXppbmMtNTAwJ1xuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJDb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJjbGVhci1jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtemluYy02MDAgZGFyazpob3Zlcjp0ZXh0LXppbmMtNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENsZWFyIGNvbXBsZXRlZFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIwIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC16aW5jLTQwMCBkYXJrOnRleHQtemluYy03MDBcIj5cbiAgICAgICAgICAgIERyYWcgYW5kIGRyb3AgdG8gcmVvcmRlciBsaXN0XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTmV3VGFza0Zvcm0iLCJ1c2VTdGF0ZSIsIlRhc2tJdGVtIiwiY2xzeCIsInNhbXBsZVRhc2tzIiwiaWQiLCJ0aXRsZSIsImNvbXBsZXRlZCIsIkluZGV4IiwidGFza3MiLCJzZXRUYXNrcyIsImZpbHRlciIsInNldEZpbHRlciIsImhhbmRsZUNvbXBsZXRlZCIsImhhbmRsZURlbGV0ZSIsImNsZWFyQ29tcGxldGVkIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwiaGVhZGVyIiwiaDEiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCIsInVsIiwibWFwIiwib25EZWxldGUiLCJvbkNvbXBsZXRlZCIsImZvb3RlciIsInNwYW4iLCJidXR0b24iLCJkYXRhLWZpbHRlciIsIm9uQ2xpY2siLCJkYXRhLWFjdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});