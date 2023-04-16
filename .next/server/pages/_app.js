/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ConnectWallet.js":
/*!*************************************!*\
  !*** ./components/ConnectWallet.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"userSession\": () => (/* binding */ userSession)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stacks/connect */ \"@stacks/connect\");\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stacks_connect__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst appConfig = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.AppConfig([\n    \"store_write\",\n    \"publish_data\"\n]);\nconst userSession = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.UserSession({\n    appConfig\n});\nfunction authenticate() {\n    (0,_stacks_connect__WEBPACK_IMPORTED_MODULE_2__.showConnect)({\n        appDetails: {\n            name: \"Stacks Next.js Starter\",\n            icon: window.location.origin + \"/logo512.png\"\n        },\n        redirectTo: \"/\",\n        onFinish: ()=>{\n            window.location.reload();\n        },\n        userSession\n    });\n}\nfunction disconnect() {\n    userSession.signUserOut(\"/\");\n}\nconst ConnectWallet = ()=>{\n    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);\n    if (mounted && userSession.isUserSignedIn()) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"Connect\",\n                    onClick: disconnect,\n                    children: \"Disconnect Wallet\"\n                }, void 0, false, {\n                    fileName: \"/home/cryptosmithb/Documents/Stackerspool-Projects/Bitcoin_Clarity_lib/components/ConnectWallet.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"mainnet: \",\n                        userSession.loadUserData().profile.stxAddress.mainnet\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cryptosmithb/Documents/Stackerspool-Projects/Bitcoin_Clarity_lib/components/ConnectWallet.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"testnet: \",\n                        userSession.loadUserData().profile.stxAddress.testnet\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cryptosmithb/Documents/Stackerspool-Projects/Bitcoin_Clarity_lib/components/ConnectWallet.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/cryptosmithb/Documents/Stackerspool-Projects/Bitcoin_Clarity_lib/components/ConnectWallet.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"Connect\",\n        onClick: authenticate,\n        children: \"Connect Wallet\"\n    }, void 0, false, {\n        fileName: \"/home/cryptosmithb/Documents/Stackerspool-Projects/Bitcoin_Clarity_lib/components/ConnectWallet.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWallet);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNtQjtBQUV0RSxNQUFNTSxTQUFTLEdBQUcsSUFBSUgsc0RBQVMsQ0FBQztJQUFDLGFBQWE7SUFBRSxjQUFjO0NBQUMsQ0FBQztBQUV6RCxNQUFNSSxXQUFXLEdBQUcsSUFBSUYsd0RBQVcsQ0FBQztJQUFFQyxTQUFTO0NBQUUsQ0FBQyxDQUFDO0FBRTFELFNBQVNFLFlBQVksR0FBRztJQUN0QkosNERBQVcsQ0FBQztRQUNWSyxVQUFVLEVBQUU7WUFDVkMsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QkMsSUFBSSxFQUFFQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLGNBQWM7U0FDOUM7UUFDREMsVUFBVSxFQUFFLEdBQUc7UUFDZkMsUUFBUSxFQUFFLElBQU07WUFDZEosTUFBTSxDQUFDQyxRQUFRLENBQUNJLE1BQU0sRUFBRSxDQUFDO1NBQzFCO1FBQ0RWLFdBQVc7S0FDWixDQUFDLENBQUM7Q0FDSjtBQUVELFNBQVNXLFVBQVUsR0FBRztJQUNwQlgsV0FBVyxDQUFDWSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDOUI7QUFFRCxNQUFNQyxhQUFhLEdBQUcsSUFBTTtJQUMxQixNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJcEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDN0NELGdEQUFTLENBQUMsSUFBTXFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV0QyxJQUFJRCxPQUFPLElBQUlkLFdBQVcsQ0FBQ2dCLGNBQWMsRUFBRSxFQUFFO1FBQzNDLHFCQUNFLDhEQUFDQyxLQUFHOzs4QkFDRiw4REFBQ0MsUUFBTTtvQkFBQ0MsU0FBUyxFQUFDLFNBQVM7b0JBQUNDLE9BQU8sRUFBRVQsVUFBVTs4QkFBRSxtQkFFakQ7Ozs7OzZCQUFTOzhCQUNULDhEQUFDVSxHQUFDOzt3QkFBQyxXQUFTO3dCQUFDckIsV0FBVyxDQUFDc0IsWUFBWSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPOzs7Ozs7NkJBQUs7OEJBQ3ZFLDhEQUFDSixHQUFDOzt3QkFBQyxXQUFTO3dCQUFDckIsV0FBVyxDQUFDc0IsWUFBWSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDRSxPQUFPOzs7Ozs7NkJBQUs7Ozs7OztxQkFDbkUsQ0FDTjtLQUNIO0lBRUQscUJBQ0UsOERBQUNSLFFBQU07UUFBQ0MsU0FBUyxFQUFDLFNBQVM7UUFBQ0MsT0FBTyxFQUFFbkIsWUFBWTtrQkFBRSxnQkFFbkQ7Ozs7O2lCQUFTLENBQ1Q7Q0FDSDtBQUVELGlFQUFlWSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja2NoYWluLWNsYXJpdHktY29udHJhY3QtY2FsbC8uL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldC5qcz83OTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBDb25maWcsIHNob3dDb25uZWN0LCBVc2VyU2Vzc2lvbiB9IGZyb20gXCJAc3RhY2tzL2Nvbm5lY3RcIjtcblxuY29uc3QgYXBwQ29uZmlnID0gbmV3IEFwcENvbmZpZyhbXCJzdG9yZV93cml0ZVwiLCBcInB1Ymxpc2hfZGF0YVwiXSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyU2Vzc2lvbiA9IG5ldyBVc2VyU2Vzc2lvbih7IGFwcENvbmZpZyB9KTtcblxuZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICBzaG93Q29ubmVjdCh7XG4gICAgYXBwRGV0YWlsczoge1xuICAgICAgbmFtZTogXCJTdGFja3MgTmV4dC5qcyBTdGFydGVyXCIsXG4gICAgICBpY29uOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvbG9nbzUxMi5wbmdcIixcbiAgICB9LFxuICAgIHJlZGlyZWN0VG86IFwiL1wiLFxuICAgIG9uRmluaXNoOiAoKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSxcbiAgICB1c2VyU2Vzc2lvbixcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gIHVzZXJTZXNzaW9uLnNpZ25Vc2VyT3V0KFwiL1wiKTtcbn1cblxuY29uc3QgQ29ubmVjdFdhbGxldCA9ICgpID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xuXG4gIGlmIChtb3VudGVkICYmIHVzZXJTZXNzaW9uLmlzVXNlclNpZ25lZEluKCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb25uZWN0XCIgb25DbGljaz17ZGlzY29ubmVjdH0+XG4gICAgICAgICAgRGlzY29ubmVjdCBXYWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwPm1haW5uZXQ6IHt1c2VyU2Vzc2lvbi5sb2FkVXNlckRhdGEoKS5wcm9maWxlLnN0eEFkZHJlc3MubWFpbm5ldH08L3A+XG4gICAgICAgIDxwPnRlc3RuZXQ6IHt1c2VyU2Vzc2lvbi5sb2FkVXNlckRhdGEoKS5wcm9maWxlLnN0eEFkZHJlc3MudGVzdG5ldH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbm5lY3RcIiBvbkNsaWNrPXthdXRoZW50aWNhdGV9PlxuICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RXYWxsZXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcENvbmZpZyIsInNob3dDb25uZWN0IiwiVXNlclNlc3Npb24iLCJhcHBDb25maWciLCJ1c2VyU2Vzc2lvbiIsImF1dGhlbnRpY2F0ZSIsImFwcERldGFpbHMiLCJuYW1lIiwiaWNvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicmVkaXJlY3RUbyIsIm9uRmluaXNoIiwicmVsb2FkIiwiZGlzY29ubmVjdCIsInNpZ25Vc2VyT3V0IiwiQ29ubmVjdFdhbGxldCIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiaXNVc2VyU2lnbmVkSW4iLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicCIsImxvYWRVc2VyRGF0YSIsInByb2ZpbGUiLCJzdHhBZGRyZXNzIiwibWFpbm5ldCIsInRlc3RuZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ConnectWallet.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stacks_connect_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stacks/connect-react */ \"@stacks/connect-react\");\n/* harmony import */ var _stacks_connect_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stacks_connect_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ConnectWallet */ \"./components/ConnectWallet.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    let icon;\n    if (false) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stacks_connect_react__WEBPACK_IMPORTED_MODULE_2__.Connect, {\n        authOptions: {\n            appDetails: {\n                name: \"Stacks Next.js Template\",\n                icon\n            },\n            redirectTo: \"/\",\n            onFinish: ()=>{\n                window.location.reload();\n            },\n            userSession: _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__.userSession\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/cryptosmithb/Documents/Stackerspool-Projects/Bitcoin_Clarity_lib/pages/_app.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/cryptosmithb/Documents/Stackerspool-Projects/Bitcoin_Clarity_lib/pages/_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFFaUI7QUFFVTtBQUUxRCxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxJQUFJQyxJQUFJO0lBQ1IsSUFBSSxLQUE2QixFQUFFLEVBRWxDO0lBRUQscUJBQ0UsOERBQUNMLDBEQUFPO1FBQ05TLFdBQVcsRUFBRTtZQUNYQyxVQUFVLEVBQUU7Z0JBQ1ZDLElBQUksRUFBRSx5QkFBeUI7Z0JBQy9CTixJQUFJO2FBQ0w7WUFDRE8sVUFBVSxFQUFFLEdBQUc7WUFDZkMsUUFBUSxFQUFFLElBQU07Z0JBQ2RQLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDTyxNQUFNLEVBQUUsQ0FBQzthQUMxQjtZQUNEYixXQUFXO1NBQ1o7a0JBRUQsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDcEIsQ0FDVjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrY2hhaW4tY2xhcml0eS1jb250cmFjdC1jYWxsLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQgeyBDb25uZWN0IH0gZnJvbSBcIkBzdGFja3MvY29ubmVjdC1yZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VyU2Vzc2lvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGxldCBpY29uO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGljb24gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvbmZ0LWxvZ28ucG5nXCI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb25uZWN0XG4gICAgICBhdXRoT3B0aW9ucz17e1xuICAgICAgICBhcHBEZXRhaWxzOiB7XG4gICAgICAgICAgbmFtZTogXCJTdGFja3MgTmV4dC5qcyBUZW1wbGF0ZVwiLFxuICAgICAgICAgIGljb24sXG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG86IFwiL1wiLFxuICAgICAgICBvbkZpbmlzaDogKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXNlclNlc3Npb24sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0Nvbm5lY3Q+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNvbm5lY3QiLCJ1c2VyU2Vzc2lvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaWNvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiYXV0aE9wdGlvbnMiLCJhcHBEZXRhaWxzIiwibmFtZSIsInJlZGlyZWN0VG8iLCJvbkZpbmlzaCIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@stacks/connect":
/*!**********************************!*\
  !*** external "@stacks/connect" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stacks/connect");

/***/ }),

/***/ "@stacks/connect-react":
/*!****************************************!*\
  !*** external "@stacks/connect-react" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stacks/connect-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();