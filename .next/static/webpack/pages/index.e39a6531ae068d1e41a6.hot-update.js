webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ \"./src/components/footer/footer.data.js\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/reshawn/ecs-clone/ecs-website/src/components/footer/footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\nfunction Footer() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"footer\", {\n    sx: styles.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.footer.footerBottomArea,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"Logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"nav\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].menuItem.map(function (item, i) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      path: item.path,\n      key: i,\n      label: item.label,\n      sx: styles.footer.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }\n    });\n  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    sx: styles.footer.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Copyright by \", new Date().getFullYear(), \" ECS Images\"))));\n}\n_c = Footer;\nvar styles = {\n  footer: {\n    footerBottomArea: {\n      borderTop: '1px solid',\n      borderTopColor: 'border_color',\n      display: 'flex',\n      pt: [7, null, 8],\n      pb: ['40px', null, '100px'],\n      textAlign: 'center',\n      flexDirection: 'column'\n    },\n    menus: {\n      mt: [3, 4],\n      mb: 2,\n      nav: {\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center',\n        flexWrap: 'wrap'\n      }\n    },\n    link: {\n      fontSize: [1, '15px'],\n      color: 'text',\n      fontWeight: '400',\n      mb: 2,\n      cursor: 'pointer',\n      transition: 'all 0.35s',\n      display: 'block',\n      textDecoration: 'none',\n      lineHeight: [1.5, null, 1.8],\n      px: [2, null, 4],\n      ':hover': {\n        color: 'primary'\n      }\n    },\n    copyright: {\n      fontSize: [1, '15px'],\n      width: '100%'\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcz83YzhiIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsImZvb3RlckJvdHRvbUFyZWEiLCJGb290ZXJMb2dvIiwiZGF0YSIsIm1lbnVJdGVtIiwibWFwIiwiaXRlbSIsImkiLCJwYXRoIiwibGFiZWwiLCJsaW5rIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwicHQiLCJwYiIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJtZW51cyIsIm10IiwibWIiLCJuYXYiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInRleHREZWNvcmF0aW9uIiwibGluZUhlaWdodCIsInB4Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixTQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRUMsc0RBQVo7QUFBd0IsT0FBRyxFQUFDLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUscURBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msb0RBQUksQ0FBQ0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ2pCLHFEQUFDLG9EQUFEO0FBQ0EsVUFBSSxFQUFFRCxJQUFJLENBQUNFLElBRFg7QUFFQSxTQUFHLEVBQUVELENBRkw7QUFHQSxXQUFLLEVBQUVELElBQUksQ0FBQ0csS0FIWjtBQUlBLFFBQUUsRUFBRVYsTUFBTSxDQUFDQyxNQUFQLENBQWNVLElBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEaUI7QUFBQSxHQUFsQixDQURILENBREYsQ0FKRixFQWdCRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBRVgsTUFBTSxDQUFDQyxNQUFQLENBQWNXLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ2dCLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQURoQixnQkFoQkYsQ0FERixDQURGLENBREY7QUEwQkQ7S0EzQnVCZixNO0FBNkJ4QixJQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFO0FBQ05DLG9CQUFnQixFQUFFO0FBQ2hCYSxlQUFTLEVBQUUsV0FESztBQUVoQkMsb0JBQWMsRUFBRSxjQUZBO0FBR2hCQyxhQUFPLEVBQUUsTUFITztBQUloQkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBSlk7QUFLaEJDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsT0FBZixDQUxZO0FBTWhCQyxlQUFTLEVBQUUsUUFOSztBQU9oQkMsbUJBQWEsRUFBRTtBQVBDLEtBRFo7QUFVTkMsU0FBSyxFQUFFO0FBQ0xDLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBREM7QUFFTEMsUUFBRSxFQUFFLENBRkM7QUFHTEMsU0FBRyxFQUFFO0FBQ0hSLGVBQU8sRUFBRSxNQUROO0FBRUhTLGtCQUFVLEVBQUUsUUFGVDtBQUdIQyxzQkFBYyxFQUFFLFFBSGI7QUFJSEMsZ0JBQVEsRUFBRTtBQUpQO0FBSEEsS0FWRDtBQXFCTmpCLFFBQUksRUFBRTtBQUNKa0IsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FETjtBQUVKQyxXQUFLLEVBQUUsTUFGSDtBQUdKQyxnQkFBVSxFQUFFLEtBSFI7QUFJSlAsUUFBRSxFQUFFLENBSkE7QUFLSlEsWUFBTSxFQUFFLFNBTEo7QUFNSkMsZ0JBQVUsRUFBRSxXQU5SO0FBT0poQixhQUFPLEVBQUUsT0FQTDtBQVFKaUIsb0JBQWMsRUFBRSxNQVJaO0FBU0pDLGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLEdBQVosQ0FUUjtBQVVKQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FWQTtBQVdKLGdCQUFVO0FBQ1JOLGFBQUssRUFBRTtBQURDO0FBWE4sS0FyQkE7QUFvQ05sQixhQUFTLEVBQUU7QUFDVGlCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBREQ7QUFFVFEsV0FBSyxFQUFFO0FBRkU7QUFwQ0w7QUFESyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgSW1hZ2UsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBkYXRhIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xuaW1wb3J0IEZvb3RlckxvZ28gZnJvbSAnYXNzZXRzL2xvZ28uc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJCb3R0b21BcmVhfT5cbiAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0Zvb3RlckxvZ299IGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAge2RhdGEubWVudUl0ZW0ubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuZm9vdGVyLmxpbmt9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxuICAgICAgICAgICAgQ29weXJpZ2h0IGJ5IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEVDUyBJbWFnZXNcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9vdGVyOiB7XG4gICAgZm9vdGVyQm90dG9tQXJlYToge1xuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcbiAgICAgIGJvcmRlclRvcENvbG9yOiAnYm9yZGVyX2NvbG9yJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXG4gICAgICBwYjogWyc0MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBtZW51czoge1xuICAgICAgbXQ6IFszLCA0XSxcbiAgICAgIG1iOiAyLFxuICAgICAgbmF2OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGxpbms6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICAgIG1iOiAyLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMzVzJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgMS44XSxcbiAgICAgIHB4OiBbMiwgbnVsbCwgNF0sXG4gICAgICAnOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvcHlyaWdodDoge1xuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/footer/footer.js\n");

/***/ })

})