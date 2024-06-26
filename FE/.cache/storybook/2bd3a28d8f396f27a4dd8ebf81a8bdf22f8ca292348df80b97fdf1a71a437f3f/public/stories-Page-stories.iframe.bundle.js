"use strict";
(globalThis["webpackChunkzeroback"] = globalThis["webpackChunkzeroback"] || []).push([["stories-Page-stories"],{

/***/ "./src/stories/Page.stories.js":
/*!*************************************!*\
  !*** ./src/stories/Page.stories.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedIn: () => (/* binding */ LoggedIn),
/* harmony export */   LoggedOut: () => (/* binding */ LoggedOut),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/test */ "./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./src/stories/Page.jsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Example/Page',
  component: _Page__WEBPACK_IMPORTED_MODULE_1__.Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
});
const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
const LoggedIn = {
  play: async ({
    canvasElement
  }) => {
    const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.within)(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.expect)(loginButton).toBeInTheDocument();
    await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.userEvent.click(loginButton);
    await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.expect)(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.expect)(logoutButton).toBeInTheDocument();
  }
};
LoggedOut.parameters = {
  ...LoggedOut.parameters,
  docs: {
    ...LoggedOut.parameters?.docs,
    source: {
      originalSource: "{}",
      ...LoggedOut.parameters?.docs?.source
    }
  }
};
LoggedIn.parameters = {
  ...LoggedIn.parameters,
  docs: {
    ...LoggedIn.parameters?.docs,
    source: {
      originalSource: "{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await expect(loginButton).toBeInTheDocument();\n    await userEvent.click(loginButton);\n    await expect(loginButton).not.toBeInTheDocument();\n    const logoutButton = canvas.getByRole('button', {\n      name: /Log out/i\n    });\n    await expect(logoutButton).toBeInTheDocument();\n  }\n}",
      ...LoggedIn.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["LoggedOut","LoggedIn"];

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/stories/Page.jsx":
/*!******************************!*\
  !*** ./src/stories/Page.jsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/stories/Header.jsx");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ "./src/stories/page.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/mac/Documents/GitHub/2024_1_WEB_2TEAM/FE/src/stories/Page.jsx",
  _s = __webpack_require__.$Refresh$.signature();




const Page = () => {
  _s();
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("article", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {
      user: user,
      onLogin: () => setUser({
        name: 'Jane Doe'
      }),
      onLogout: () => setUser(undefined),
      onCreateAccount: () => setUser({
        name: 'Jane Doe'
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: "storybook-page",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        children: "Pages in Storybook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: ["We recommend building UIs with a", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://componentdriven.org",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
            children: "component-driven"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), ' ', "process starting with atomic components and ending with pages."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: "Assemble data in the page component from your services. You can mock these services out using Storybook."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: ["Get a guided tutorial on component-driven development at", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://storybook.js.org/tutorials/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Storybook tutorials"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined), ". Read more in the", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://storybook.js.org/docs",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "docs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "tip-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "tip",
          children: "Tip"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), " Adjust the width of the canvas with the", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
          width: "10",
          height: "10",
          viewBox: "0 0 12 12",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
              d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
              id: "a",
              fill: "#999"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), "Viewports addon in the toolbar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};
_s(Page, "kGLk6m4BT90iK1d91zRYm0C2usk=");
_c = Page;
;
Page.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Page"
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Page");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[2]!./src/stories/page.css":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[2]!./src/stories/page.css ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.storybook-page {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
  color: #333;
}

.storybook-page h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
}

.storybook-page p {
  margin: 1em 0;
}

.storybook-page a {
  text-decoration: none;
  color: #1ea7fd;
}

.storybook-page ul {
  padding-left: 30px;
  margin: 1em 0;
}

.storybook-page li {
  margin-bottom: 8px;
}

.storybook-page .tip {
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  background: #e7fdd8;
  color: #66bf3c;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
}

.storybook-page .tip-wrapper {
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.storybook-page .tip-wrapper svg {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: top;
  margin-top: 3px;
}

.storybook-page .tip-wrapper svg path {
  fill: #1ea7fd;
}
`, "",{"version":3,"sources":["webpack://./src/stories/page.css"],"names":[],"mappings":"AAAA;EACE,0EAA0E;EAC1E,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":[".storybook-page {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\n.storybook-page h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\n.storybook-page ul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.storybook-page .tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/stories/page.css":
/*!******************************!*\
  !*** ./src/stories/page.css ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[2]!./page.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[2]!./src/stories/page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[2]!./page.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[2]!./src/stories/page.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[2]!./page.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[5].use[2]!./src/stories/page.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_oneOf_5_use_2_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=stories-Page-stories.iframe.bundle.js.map