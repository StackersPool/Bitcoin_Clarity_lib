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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_cryptosmith_Documents_Web3_Projects_Stackers_Pool_blockchain_clarity_contract_call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_cryptosmith_Documents_Web3_Projects_Stackers_Pool_blockchain_clarity_contract_call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_cryptosmith_Documents_Web3_Projects_Stackers_Pool_blockchain_clarity_contract_call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ConnectWallet */ \"./components/ConnectWallet.js\");\n/* harmony import */ var _components_ContractCallVote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ContractCallVote */ \"./components/ContractCallVote.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _stacks_transactions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stacks/transactions */ \"./node_modules/@stacks/transactions/dist/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _stacks_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stacks/network */ \"./node_modules/@stacks/network/dist/esm/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\n\n\n\n//==\n\n\nfunction Home() {\n    var getWasTxMined = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_cryptosmith_Documents_Web3_Projects_Stackers_Pool_blockchain_clarity_contract_call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var btc_TXID, blockhash, block, options;\n            return _home_cryptosmith_Documents_Web3_Projects_Stackers_Pool_blockchain_clarity_contract_call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        btc_TXID = \"1a5b9c6c279bd807aec9923495b8b913aab210e7b9b7bfbe3b0fc1e3281c8fbb\";\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"https://btc.getblock.io/rest/tx/\".concat(process.env.API_KEY, \"/\").concat(btc_TXID, \".json\"));\n                    case 3:\n                        blockhash = _ctx.sent.data;\n                        _ctx.next = 6;\n                        return axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"https://btc.getblock.io/rest/block/\".concat(process.env.API_KEY, \"/\").concat(blockhash.blockhash, \".json\"));\n                    case 6:\n                        block = _ctx.sent.data;\n                        console.log(blockhash);\n                        console.log(block);\n                        options = {\n                            contractAddress: \"STT4SQP5RC1BFAJEQKBHZMXQ8NQ7G118F0XRWTMV\",\n                            contractName: \"clarity-bitcoin\",\n                            functionName: \"was-tx-mined\",\n                            functionArgs: [\n                                (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.tupleCV)({\n                                    version: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.bufferCV)(block.version),\n                                    parent: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.bufferCV)(block.previousblockhash),\n                                    merkle_root: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.bufferCV)(block.merkleroot),\n                                    timestamp: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.bufferCV)(block.time),\n                                    nbits: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.bufferCV)(block.bits),\n                                    nonce: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.bufferCV)(block.nonce),\n                                    height: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.uintCV)(block.height)\n                                }),\n                                (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.bufferCV)(btc_TXID),\n                                (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.tupleCV)({\n                                    tx_index: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.uintCV)(block.nTx),\n                                    hashes: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.listCV)(block.tx.filter(function(param, index) {\n                                        var hash = param.hash;\n                                        return index < 12;\n                                    }).map(function(param) {\n                                        var hash = param.hash;\n                                        return (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.bufferCV)(hash);\n                                    })),\n                                    tree_depth: (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.uintCV)(block.weight)\n                                })\n                            ],\n                            network: new _stacks_network__WEBPACK_IMPORTED_MODULE_9__.StacksTestnet(),\n                            senderAddress: _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_4__.userSession.loadUserData().profile.stxAddress.testnet\n                        };\n                        console.log(options);\n                        try {\n                            (0,_stacks_transactions__WEBPACK_IMPORTED_MODULE_8__.callReadOnlyFunction)(options).then(function(result) {\n                                console.log(result);\n                            });\n                        } catch (error) {\n                            console.log(error);\n                        }\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getWasTxMined(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                        children: \"Next.js + Stacks.js \\uD83D\\uDC4B\"\n                    }, void 0, false, {\n                        fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().components),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ContractCallVote__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"Connect\",\n                        onClick: getWasTxMined,\n                        children: \"Retrieve info on Was-Tx-Mined\"\n                    }, void 0, false, {\n                        fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cryptosmith/Documents/Web3-Projects/Stackers-Pool/blockchain-clarity-contract-call/pages/index.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLHdHQUF3RztvQkFDN0dRLE1BQU0sRUFBQyxRQUFRO29CQUNmVCxHQUFHLEVBQUMscUJBQXFCOzt3QkFDMUIsWUFDVzt3QkFBQyxHQUFHO3NDQUNkLDhEQUFDVSxNQUFJOzRCQUFDakIsU0FBUyxFQUFFMUQsc0VBQVc7c0NBQzFCLDRFQUFDSixtREFBSztnQ0FBQ2lGLEdBQUcsRUFBQyxhQUFhO2dDQUFDQyxHQUFHLEVBQUMsYUFBYTtnQ0FBQ0MsS0FBSyxFQUFFLEVBQUU7Z0NBQUUxQyxNQUFNLEVBQUUsRUFBRTs7Ozs7b0NBQUk7Ozs7O2dDQUMvRDs7Ozs7O3dCQUNMOzs7OztvQkFDRzs7Ozs7O1lBQ0wsQ0FDTjtDQUNIO0FBcEZ1QjVCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBDb25uZWN0V2FsbGV0LCB7IHVzZXJTZXNzaW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldFwiO1xuaW1wb3J0IENvbnRyYWN0Q2FsbFZvdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udHJhY3RDYWxsVm90ZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgY2FsbFJlYWRPbmx5RnVuY3Rpb24sIHVpbnRDViwgbGlzdENWLCB0dXBsZUNWLCBidWZmZXJDViwgYnVmZmVyQ1ZGcm9tU3RyaW5nLCB9IGZyb20gJ0BzdGFja3MvdHJhbnNhY3Rpb25zJztcbi8vPT1cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFN0YWNrc1Rlc3RuZXQgfSBmcm9tIFwiQHN0YWNrcy9uZXR3b3JrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGdldFdhc1R4TWluZWQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IGJ0Y19UWElEID0gJzFhNWI5YzZjMjc5YmQ4MDdhZWM5OTIzNDk1YjhiOTEzYWFiMjEwZTdiOWI3YmZiZTNiMGZjMWUzMjgxYzhmYmInO1xuICAgIGNvbnN0IGJsb2NraGFzaCA9IChhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYnRjLmdldGJsb2NrLmlvL3Jlc3QvdHgvJHtwcm9jZXNzLmVudi5BUElfS0VZfS8ke2J0Y19UWElEfS5qc29uYCkpLmRhdGE7XG4gICAgY29uc3QgYmxvY2sgPSAoYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2J0Yy5nZXRibG9jay5pby9yZXN0L2Jsb2NrLyR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0vJHtibG9ja2hhc2guYmxvY2toYXNofS5qc29uYCkpLmRhdGE7XG4gICAgY29uc29sZS5sb2coYmxvY2toYXNoKTtcbiAgICBjb25zb2xlLmxvZyhibG9jayk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNvbnRyYWN0QWRkcmVzczogJ1NUVDRTUVA1UkMxQkZBSkVRS0JIWk1YUThOUTdHMTE4RjBYUldUTVYnLFxuICAgICAgY29udHJhY3ROYW1lOiAnY2xhcml0eS1iaXRjb2luJyxcbiAgICAgIGZ1bmN0aW9uTmFtZTogJ3dhcy10eC1taW5lZCcsXG4gICAgICBmdW5jdGlvbkFyZ3M6IFtcbiAgICAgICAgdHVwbGVDVihcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2ZXJzaW9uOiBidWZmZXJDVihibG9jay52ZXJzaW9uKSwgcGFyZW50OiBidWZmZXJDVihibG9jay5wcmV2aW91c2Jsb2NraGFzaCksIFxuICAgICAgICAgICAgbWVya2xlX3Jvb3Q6IGJ1ZmZlckNWKGJsb2NrLm1lcmtsZXJvb3QpLCB0aW1lc3RhbXA6IGJ1ZmZlckNWKGJsb2NrLnRpbWUpLFxuICAgICAgICAgICAgbmJpdHM6IGJ1ZmZlckNWKGJsb2NrLmJpdHMpLCBub25jZTogYnVmZmVyQ1YoYmxvY2subm9uY2UpLCBoZWlnaHQ6IHVpbnRDVihibG9jay5oZWlnaHQpXG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBidWZmZXJDVihidGNfVFhJRCksXG4gICAgICAgIHR1cGxlQ1YoXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHhfaW5kZXg6IHVpbnRDVihibG9jay5uVHgpLFxuICAgICAgICAgICAgaGFzaGVzOiBsaXN0Q1YoXG4gICAgICAgICAgICAgIGJsb2NrLnR4XG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeyBoYXNoIH0sIGluZGV4KSA9PiBpbmRleCA8IDEyKVxuICAgICAgICAgICAgICAgIC5tYXAoKHsgaGFzaCB9KSA9PiBidWZmZXJDVihoYXNoKSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0cmVlX2RlcHRoOiB1aW50Q1YoYmxvY2sud2VpZ2h0KVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIG5ldHdvcms6IG5ldyBTdGFja3NUZXN0bmV0KCksXG4gICAgICBzZW5kZXJBZGRyZXNzOiB1c2VyU2Vzc2lvbi5sb2FkVXNlckRhdGEoKS5wcm9maWxlLnN0eEFkZHJlc3MudGVzdG5ldCxcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIHRyeSB7XG4gICAgICBjYWxsUmVhZE9ubHlGdW5jdGlvbihvcHRpb25zKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pk5leHQuanMgKyBTdGFja3MuanMg8J+RizwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wb25lbnRzfT5cbiAgICAgICAgICB7LyogQ29ubmVjdFdhbGxldCBmaWxlOiBgLi4vY29tcG9uZW50cy9Db25uZWN0V2FsbGV0LmpzYCAqL31cbiAgICAgICAgICA8Q29ubmVjdFdhbGxldCAvPlxuICAgICAgICAgIHsvKiBDb250cmFjdENhbGxWb3RlIGZpbGU6IGAuLi9jb21wb25lbnRzL0NvbnRyYWN0Q2FsbFZvdGUuanNgICovfVxuICAgICAgICAgIDxDb250cmFjdENhbGxWb3RlIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29ubmVjdFwiIG9uQ2xpY2s9e2dldFdhc1R4TWluZWR9PlxuICAgICAgICAgIFJldHJpZXZlIGluZm8gb24gV2FzLVR4LU1pbmVkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIkNvbm5lY3RXYWxsZXQiLCJ1c2VyU2Vzc2lvbiIsIkNvbnRyYWN0Q2FsbFZvdGUiLCJzdHlsZXMiLCJjYWxsUmVhZE9ubHlGdW5jdGlvbiIsInVpbnRDViIsImxpc3RDViIsInR1cGxlQ1YiLCJidWZmZXJDViIsImJ1ZmZlckNWRnJvbVN0cmluZyIsImF4aW9zIiwiU3RhY2tzVGVzdG5ldCIsIkhvbWUiLCJnZXRXYXNUeE1pbmVkIiwiZSIsImJ0Y19UWElEIiwiYmxvY2toYXNoIiwiYmxvY2siLCJvcHRpb25zIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIkFQSV9LRVkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0TmFtZSIsImZ1bmN0aW9uTmFtZSIsImZ1bmN0aW9uQXJncyIsInZlcnNpb24iLCJwYXJlbnQiLCJwcmV2aW91c2Jsb2NraGFzaCIsIm1lcmtsZV9yb290IiwibWVya2xlcm9vdCIsInRpbWVzdGFtcCIsInRpbWUiLCJuYml0cyIsImJpdHMiLCJub25jZSIsImhlaWdodCIsInR4X2luZGV4IiwiblR4IiwiaGFzaGVzIiwidHgiLCJmaWx0ZXIiLCJpbmRleCIsImhhc2giLCJtYXAiLCJ0cmVlX2RlcHRoIiwid2VpZ2h0IiwibmV0d29yayIsInNlbmRlckFkZHJlc3MiLCJsb2FkVXNlckRhdGEiLCJwcm9maWxlIiwic3R4QWRkcmVzcyIsInRlc3RuZXQiLCJ0aGVuIiwicmVzdWx0IiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiY29tcG9uZW50cyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb290ZXIiLCJhIiwidGFyZ2V0Iiwic3BhbiIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});