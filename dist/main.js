/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./no-notes.jpeg */ "./src/no-notes.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Titan+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Noto Sans\", sans-serif;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #f4e9cd;\n  color: #9dbebb;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 275px 1fr;\n  grid-template-rows: 7em 1fr 5em;\n  min-height: 100vh;\n}\n\nheader,\nfooter {\n  grid-column: 1/-1;\n}\n\nheader,\nfooter,\naside {\n  background-color: #031926;\n}\n\nheader {\n  font-size: 3rem;\n  padding-left: 1em;\n  display: flex;\n  align-items: center;\n}\n\nheader a {\n  font-family: \"Titan One\";\n  text-decoration: none;\n  color: inherit;\n}\n\n.logo {\n  height: 2em;\n}\n\n.logo img {\n  width: 100%;\n  height: 100%;\n}\n\naside {\n  padding: 0.5em;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  padding: 0;\n}\n\nhr {\n  width: 4em;\n}\n\n.project {\n  list-style: none;\n  padding: 0.5em;\n  border-radius: 1.4em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nli.active-project {\n  background-color: #020d13;\n}\n\n.project i {\n  color: #f4e9cd;\n  margin-right: 0.6em;\n}\n\n.remove {\n  height: 25px;\n  width: 25px;\n}\n\n.remove:hover {\n  background-color: #f4e9cd;\n  border-radius: 50%;\n  color: #031926;\n}\n\n.project:hover,\n.project:focus {\n  background-color: #062e45;\n}\n\n.project button {\n  background-color: inherit;\n  border: none;\n  color: #9dbebb;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  text-align: left;\n}\n\n.btn {\n  border: none;\n  padding: 0.7em 2em;\n  display: block;\n  margin: 0 auto;\n  border-radius: 2em;\n  transition: transform 0.1s ease-in;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n\n.add-category {\n  background-color: #f4e9cd;\n  color: #031926;\n}\n\n.overlay {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: #03192699;\n  z-index: 1000;\n  display: none; /* It needs to be set to flex so that it can work properly */\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-project,\n.modal-note {\n  padding: 2em;\n  border-radius: 10px;\n}\n\n.modal-title {\n  margin-top: 0;\n}\n\ninput,\ntextarea,\nselect {\n  margin: 10px auto;\n  border: none;\n  padding: 0.5em;\n  border-radius: 0.2em;\n  width: 90%;\n  background-color: #fff;\n}\n\n.modal-project {\n  display: none;\n  background-color: #031926;\n  color: #f4e9cd;\n}\n\n.buttons {\n  display: flex;\n  margin-top: 10px;\n  gap: 2em;\n}\n\n.btn-add {\n  background-color: #a2f7b0;\n  font-weight: 700;\n}\n\n.btn-cancel {\n  background-color: #f7afa1;\n  font-weight: 700;\n}\n\n.modal-note {\n  display: none;\n  background-color: #f4e9cd;\n  color: #031926;\n}\nmain {\n  color: #031926;\n  padding: 1.2em;\n}\n\n.empty {\n  width: 100%;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: bottom center;\n  object-fit: cover;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.empty button {\n  border: none;\n  background-color: #f4e9cd;\n  border-radius: 50%;\n  padding: 1em 1.4em;\n  font-size: 1.2rem;\n  font-weight: 700;\n  transition: transform 0.1s ease-in;\n}\n\n.empty button:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.note-header {\n  display: flex;\n  justify-content: space-between;\n}\n\ni.fa-solid[data-priority=\"0\"] {\n  color: green;\n}\ni.fa-solid[data-priority=\"1\"] {\n  color: blue;\n}\ni.fa-solid[data-priority=\"2\"] {\n  color: red;\n}\n\n.edit-note {\n  padding: 5px;\n  border-radius: 50%;\n  margin-right: 0.2em;\n}\n\n.edit-note:hover,\n.edit-note:focus {\n  background-color: #031926;\n  color: #f4e9cd;\n}\n\n.remove-note {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n\n.remove-note:hover,\n.remove-note:focus {\n  background-color: #031926;\n  color: #f4e9cd;\n}\n\n.notes {\n  display: grid;\n  gap: 1em;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.new-note {\n  background-color: #031926;\n  color: #f4e9cd;\n  width: 7em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.note {\n  padding: 1em;\n  border-radius: 5px;\n  position: relative;\n  border: 1px solid #031926;\n}\n\n.note:hover {\n  box-shadow: #031926 0 0 8px;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n\n.title {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.description {\n  font-size: 0.9rem;\n  margin: 0.5em 0;\n}\n\n.priority-label {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  margin: 1rem;\n  margin-bottom: 0;\n}\n\n.priority-label i {\n  color: red;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.6em;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\nfooter a {\n  text-decoration: none;\n  color: inherit;\n}\n\nfooter a:hover,\nfooter a:focus {\n  color: #5f9a90;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Titan+One&display=swap\");\n* {\n  font-family: \"Noto Sans\", sans-serif;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #f4e9cd;\n  color: #9dbebb;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 275px 1fr;\n  grid-template-rows: 7em 1fr 5em;\n  min-height: 100vh;\n}\n\nheader,\nfooter {\n  grid-column: 1/-1;\n}\n\nheader,\nfooter,\naside {\n  background-color: #031926;\n}\n\nheader {\n  font-size: 3rem;\n  padding-left: 1em;\n  display: flex;\n  align-items: center;\n}\n\nheader a {\n  font-family: \"Titan One\";\n  text-decoration: none;\n  color: inherit;\n}\n\n.logo {\n  height: 2em;\n}\n\n.logo img {\n  width: 100%;\n  height: 100%;\n}\n\naside {\n  padding: 0.5em;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  padding: 0;\n}\n\nhr {\n  width: 4em;\n}\n\n.project {\n  list-style: none;\n  padding: 0.5em;\n  border-radius: 1.4em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nli.active-project {\n  background-color: #020d13;\n}\n\n.project i {\n  color: #f4e9cd;\n  margin-right: 0.6em;\n}\n\n.remove {\n  height: 25px;\n  width: 25px;\n}\n\n.remove:hover {\n  background-color: #f4e9cd;\n  border-radius: 50%;\n  color: #031926;\n}\n\n.project:hover,\n.project:focus {\n  background-color: #062e45;\n}\n\n.project button {\n  background-color: inherit;\n  border: none;\n  color: #9dbebb;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  text-align: left;\n}\n\n.btn {\n  border: none;\n  padding: 0.7em 2em;\n  display: block;\n  margin: 0 auto;\n  border-radius: 2em;\n  transition: transform 0.1s ease-in;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n\n.add-category {\n  background-color: #f4e9cd;\n  color: #031926;\n}\n\n.overlay {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: #03192699;\n  z-index: 1000;\n  display: none; /* It needs to be set to flex so that it can work properly */\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-project,\n.modal-note {\n  padding: 2em;\n  border-radius: 10px;\n}\n\n.modal-title {\n  margin-top: 0;\n}\n\ninput,\ntextarea,\nselect {\n  margin: 10px auto;\n  border: none;\n  padding: 0.5em;\n  border-radius: 0.2em;\n  width: 90%;\n  background-color: #fff;\n}\n\n.modal-project {\n  display: none;\n  background-color: #031926;\n  color: #f4e9cd;\n}\n\n.buttons {\n  display: flex;\n  margin-top: 10px;\n  gap: 2em;\n}\n\n.btn-add {\n  background-color: #a2f7b0;\n  font-weight: 700;\n}\n\n.btn-cancel {\n  background-color: #f7afa1;\n  font-weight: 700;\n}\n\n.modal-note {\n  display: none;\n  background-color: #f4e9cd;\n  color: #031926;\n}\nmain {\n  color: #031926;\n  padding: 1.2em;\n}\n\n.empty {\n  width: 100%;\n  height: 100%;\n  background-image: url(\"./no-notes.jpeg\");\n  background-position: bottom center;\n  object-fit: cover;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.empty button {\n  border: none;\n  background-color: #f4e9cd;\n  border-radius: 50%;\n  padding: 1em 1.4em;\n  font-size: 1.2rem;\n  font-weight: 700;\n  transition: transform 0.1s ease-in;\n}\n\n.empty button:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.note-header {\n  display: flex;\n  justify-content: space-between;\n}\n\ni.fa-solid[data-priority=\"0\"] {\n  color: green;\n}\ni.fa-solid[data-priority=\"1\"] {\n  color: blue;\n}\ni.fa-solid[data-priority=\"2\"] {\n  color: red;\n}\n\n.edit-note {\n  padding: 5px;\n  border-radius: 50%;\n  margin-right: 0.2em;\n}\n\n.edit-note:hover,\n.edit-note:focus {\n  background-color: #031926;\n  color: #f4e9cd;\n}\n\n.remove-note {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n\n.remove-note:hover,\n.remove-note:focus {\n  background-color: #031926;\n  color: #f4e9cd;\n}\n\n.notes {\n  display: grid;\n  gap: 1em;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.new-note {\n  background-color: #031926;\n  color: #f4e9cd;\n  width: 7em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.note {\n  padding: 1em;\n  border-radius: 5px;\n  position: relative;\n  border: 1px solid #031926;\n}\n\n.note:hover {\n  box-shadow: #031926 0 0 8px;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n\n.title {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.description {\n  font-size: 0.9rem;\n  margin: 0.5em 0;\n}\n\n.priority-label {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  margin: 1rem;\n  margin-bottom: 0;\n}\n\n.priority-label i {\n  color: red;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.6em;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\nfooter a {\n  text-decoration: none;\n  color: inherit;\n}\n\nfooter a:hover,\nfooter a:focus {\n  color: #5f9a90;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/HtmlElements.js":
/*!*****************************!*\
  !*** ./src/HtmlElements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHtmlForNoteList": () => (/* binding */ getHtmlForNoteList),
/* harmony export */   "getHtmlForProjectList": () => (/* binding */ getHtmlForProjectList),
/* harmony export */   "getNewNoteElement": () => (/* binding */ getNewNoteElement),
/* harmony export */   "getNewProjectElement": () => (/* binding */ getNewProjectElement)
/* harmony export */ });
function getNewNoteElement(note) {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.dataset.id = note.id;
  const icon =
    note.priority === "0"
      ? "hourglass"
      : note.priority === "1"
      ? "angles-right"
      : "exclamation";
  newNote.innerHTML = `
    <section class="note-header">
      <div class="title">${note.title}</div>
      <div>
        <i class="fa-solid fa-pen-to-square edit-note"></i>
        <div class="remove-note">&Cross;</div>
      </div>
    </section>
    <div class="description">${note.description}</div>
    <div class="priority-label">
      <i data-priority=${note.priority} class="fa-solid fa-${icon}"></i>
      <div class="due-date">${note.dueDate}</div>
    </div>
  `;
  return newNote;
}

function getNewProjectElement(project) {
  const newProject = document.createElement("li");
  newProject.classList.add("project");
  newProject.dataset.id = project.projectId;
  newProject.innerHTML = `
    <button>
      <i class="fa-solid fa-marker"></i> <span>${project.name}</span>
    </button>
    <button class="remove">&Cross;</button>
  `;
  return newProject;
}

function getHtmlForProjectList(projectList) {
  return projectList
    .map((project) => {
      return `
    <li class="project" data-id=${project.projectId}>
    <button>
      <i class="fa-solid fa-marker"></i> <span>${project.name}</span>
    </button>
    <button class="remove">&Cross;</button>
  </li>
    `;
    })
    .join("");
}

function getHtmlForNoteList(project) {
  return project.notes
    .map((note) => {
      const icon =
        note.priority === "0"
          ? "hourglass"
          : note.priority === "1"
          ? "angles-right"
          : "exclamation";
      return `
    <div class="note" data-id=${note.id}>
      <section class="note-header">
        <div class="title">${note.title}</div>
        <div>
          <i class="fa-solid fa-pen-to-square edit-note"></i>
          <div class="remove-note">&Cross;</div>
        </div>
      </section>
      <div class="description">${note.description}</div>
      <div class="priority-label">
        <i data-priority=${note.priority} class="fa-solid fa-${icon}"></i>
        <div class="due-date">${note.dueDate}</div>
      </div>
    </div> 
    `;
    })
    .join("");
}


/***/ }),

/***/ "./src/ModalOperations.js":
/*!********************************!*\
  !*** ./src/ModalOperations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openNoteModal": () => (/* binding */ openNoteModal)
/* harmony export */ });
function openNoteModal() {
  overlay.style.display = "flex";
  noteModal.style.display = "block";
}

function openProjectModal() {
  overlay.style.display = "flex";
  projectModal.style.display = "block";
}

function closeModal(event) {
  if (event.target.classList.contains("overlay")) {
    newProjectForm.reset();
    newNoteForm.reset();
  }
  if (
    event.target.classList.contains("overlay") ||
    event.target.classList.contains("btn-cancel") ||
    event.target.classList.contains("btn-add")
  ) {
    noteModal.style.display = "none";
    projectModal.style.display = "none";
    overlay.style.display = "none";
  }
}

const noteModal = document.querySelector(".modal-note");
const projectModal = document.querySelector(".modal-project");
const overlay = document.querySelector(".overlay");
const addProjectBtn = document.querySelector(".add-category");
const addNoteBtn = document.querySelector(".new-note");
const cancelBtns = document.querySelectorAll(".btn-cancel");
const emptyNoteBtn = document.getElementById("empty-notes-button");
const newProjectForm = document.getElementById("project-form");
const newNoteForm = document.getElementById("note-form");

overlay.addEventListener("click", closeModal);
addProjectBtn.addEventListener("click", openProjectModal);
emptyNoteBtn.addEventListener("click", openNoteModal);
addNoteBtn.addEventListener("click", openNoteModal);
cancelBtns.forEach((button) => {
  button.addEventListener("click", closeModal);
});


/***/ }),

/***/ "./src/Note.js":
/*!*********************!*\
  !*** ./src/Note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Note {
  constructor(id, title, description, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);


/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Note */ "./src/Note.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");



class Project {
  notes = [];
  constructor(name) {
    this.projectId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this.name = name;
  }
  addNote(title, description, dueDate, priority) {
    const id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const note = new _Note__WEBPACK_IMPORTED_MODULE_0__["default"](id, title, description, dueDate, priority);
    this.notes.push(note);
  }
  removeNote(id) {
    this.notes = this.notes.filter((note) => note.id != id);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/Todo_Logo.png":
/*!***************************!*\
  !*** ./src/Todo_Logo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b2bdfb6a26bc141eb46.png";

/***/ }),

/***/ "./src/no-notes.jpeg":
/*!***************************!*\
  !*** ./src/no-notes.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9e883e5dd44e48f1a6b.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Todo_Logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo_Logo.png */ "./src/Todo_Logo.png");
/* harmony import */ var _ModalOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalOperations */ "./src/ModalOperations.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HtmlElements */ "./src/HtmlElements.js");







const logoImageEl = document.getElementById("todo_logo");
const newProjectForm = document.getElementById("project-form");
const newProjectName = document.getElementById("project-name");
const newNoteForm = document.getElementById("note-form");
const newNoteTitleEl = document.getElementById("note-title");
const newNoteDescriptionEl = document.getElementById("note-description");
const newNoteDueDateEl = document.getElementById("note-date");
const newNotePriorityEl = document.getElementById("note-priority");
const editNoteIdEl = document.getElementById("note-id");
const projectListEl = document.getElementById("project-list-items");
const noteListEl = document.getElementById("notes-list-items");
const scratchPadEl = document.getElementById("scratchpad");
const emptyNoteEl = document.querySelector(".empty");
const addNoteBtn = document.querySelector(".new-note");

logoImageEl.src = _Todo_Logo_png__WEBPACK_IMPORTED_MODULE_1__;

const scratchPad =
  Object.assign(
    new _Project__WEBPACK_IMPORTED_MODULE_3__["default"](),
    JSON.parse(localStorage.getItem("scratchPadTOODOO"))
  ) || new _Project__WEBPACK_IMPORTED_MODULE_3__["default"]("Scratch Pad");
let projectList =
  JSON.parse(localStorage.getItem("projectListTOODOO")).map((project) =>
    Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_3__["default"](), project)
  ) || [];
let currentProject = scratchPad;

newNoteForm.addEventListener("submit", addNewNote);
newProjectForm.addEventListener("submit", addNewProject);

function addNewNote(event) {
  event.preventDefault();
  const title = newNoteTitleEl.value;
  const description = newNoteDescriptionEl.value;
  const date = newNoteDueDateEl.value;
  const priority = newNotePriorityEl.value;
  if (editNoteIdEl.value !== "") {
    const note = currentProject.notes.find(
      (note) => note.id === editNoteIdEl.value
    );
    note.title = title;
    note.description = description;
    note.dueDate = date;
    note.priority = priority;
    console.log(note);
    noteListEl.innerHTML = (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.getHtmlForNoteList)(currentProject);
    newNoteForm.reset();
    localStorage.setItem("projectListTOODOO", JSON.stringify(projectList));
    localStorage.setItem("scratchPadTOODOO", JSON.stringify(scratchPad));
    return;
  }
  currentProject.addNote(title, description, date, priority);
  console.log(currentProject.notes);
  if (currentProject.notes.length > 0) {
    addNoteBtn.style.display = "flex";
    emptyNoteEl.style.display = "none";
  }
  newNoteForm.reset();
  noteListEl.appendChild(
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.getNewNoteElement)(currentProject.notes[currentProject.notes.length - 1])
  );
  localStorage.setItem("projectListTOODOO", JSON.stringify(projectList));
  localStorage.setItem("scratchPadTOODOO", JSON.stringify(scratchPad));
}

function addNewProject(event) {
  event.preventDefault();
  const projectName = newProjectName.value;
  const newProject = new _Project__WEBPACK_IMPORTED_MODULE_3__["default"](projectName);
  projectList.push(newProject);
  newProjectForm.reset();
  projectListEl.appendChild((0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.getNewProjectElement)(newProject));
  localStorage.setItem("projectListTOODOO", JSON.stringify(projectList));
  localStorage.setItem("scratchPadTOODOO", JSON.stringify(scratchPad));
}

projectListEl.addEventListener("click", projectClickHandler);
noteListEl.addEventListener("click", noteClickHandler);
scratchPadEl.addEventListener("click", projectClickHandler);

function noteClickHandler(event) {
  let noteId;
  const element = event.target.closest(".note");
  if (element) {
    noteId = element.dataset.id;
  }

  if (event.target.classList.contains("remove-note")) {
    currentProject.notes = currentProject.notes.filter(
      (note) => note.id !== noteId
    );
    localStorage.setItem("projectListTOODOO", JSON.stringify(projectList));
    localStorage.setItem("scratchPadTOODOO", JSON.stringify(scratchPad));
    noteListEl.innerHTML = (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.getHtmlForNoteList)(currentProject);
    if (currentProject.notes.length === 0) {
      emptyNoteEl.style.display = "flex";
      addNoteBtn.style.display = "none";
    } else {
      emptyNoteEl.style.display = "none";
      addNoteBtn.style.display = "flex";
    }
  }
  if (event.target.classList.contains("edit-note")) {
    let clickedNote = currentProject.notes.find((note) => note.id === noteId);

    editNoteIdEl.value = clickedNote.id;
    newNoteTitleEl.value = clickedNote.title;
    newNoteDescriptionEl.value = clickedNote.description;
    newNoteDueDateEl.value = clickedNote.dueDate;
    newNotePriorityEl.value = clickedNote.priority;
    (0,_ModalOperations__WEBPACK_IMPORTED_MODULE_2__.openNoteModal)();
  }
}

function projectClickHandler(event) {
  let id;
  const element = event.target.closest(".project");
  if (element) {
    document
      .querySelectorAll(".project")
      .forEach((project) => project.classList.remove("active-project"));
    id = element.dataset.id;
    element.classList.add("active-project");
    currentProject = id
      ? projectList.find((project) => project.projectId === id)
      : scratchPad;
    noteListEl.innerHTML = (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.getHtmlForNoteList)(currentProject);
    if (currentProject.notes.length === 0) {
      emptyNoteEl.style.display = "flex";
      addNoteBtn.style.display = "none";
    } else {
      emptyNoteEl.style.display = "none";
      addNoteBtn.style.display = "flex";
    }
  }

  if (event.target.classList.contains("remove")) {
    projectList = projectList.filter((project) => project.projectId !== id);
    projectListEl.innerHTML = (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.getHtmlForProjectList)(projectList);
    localStorage.setItem("projectListTOODOO", JSON.stringify(projectList));
    if (element.classList.contains("active-project")) {
      currentProject = scratchPad;
      scratchPadEl.classList.add("active-project");
      loadScratchPad();
      noteListEl.innerHTML = (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.getHtmlForNoteList)(currentProject);
    }
  }
}

function loadScratchPad() {
  if (currentProject.notes.length === 0) {
    emptyNoteEl.style.display = "flex";
    addNoteBtn.style.display = "none";
  } else {
    emptyNoteEl.style.display = "none";
    addNoteBtn.style.display = "flex";
  }
}

function loadProjects() {
  projectListEl.innerHTML = (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.getHtmlForProjectList)(projectList);
  noteListEl.innerHTML = (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.getHtmlForNoteList)(scratchPad);
}

loadScratchPad();

loadProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJHQUFrQztBQUM5RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSCxtQ0FBbUM7QUFDckoseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDZDQUE2QywyQ0FBMkMsR0FBRyxpQkFBaUIsY0FBYyxlQUFlLDhCQUE4QixtQkFBbUIsR0FBRyxnQkFBZ0Isa0JBQWtCLHFDQUFxQyxvQ0FBb0Msc0JBQXNCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxZQUFZLG9CQUFvQixzQkFBc0Isa0JBQWtCLHdCQUF3QixHQUFHLGNBQWMsK0JBQStCLDBCQUEwQixtQkFBbUIsR0FBRyxXQUFXLGdCQUFnQixHQUFHLGVBQWUsZ0JBQWdCLGlCQUFpQixHQUFHLFdBQVcsbUJBQW1CLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLGFBQWEsZUFBZSxHQUFHLFFBQVEsZUFBZSxHQUFHLGNBQWMscUJBQXFCLG1CQUFtQix5QkFBeUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsZ0JBQWdCLG1CQUFtQix3QkFBd0IsR0FBRyxhQUFhLGlCQUFpQixnQkFBZ0IsR0FBRyxtQkFBbUIsOEJBQThCLHVCQUF1QixtQkFBbUIsR0FBRyxxQ0FBcUMsOEJBQThCLEdBQUcscUJBQXFCLDhCQUE4QixpQkFBaUIsbUJBQW1CLG9CQUFvQixrQkFBa0Isd0JBQXdCLGtDQUFrQyxxQkFBcUIsR0FBRyxVQUFVLGlCQUFpQix1QkFBdUIsbUJBQW1CLG1CQUFtQix1QkFBdUIsdUNBQXVDLEdBQUcsZ0JBQWdCLDJCQUEyQixvQkFBb0IsR0FBRyxtQkFBbUIsOEJBQThCLG1CQUFtQixHQUFHLGNBQWMsb0JBQW9CLGtCQUFrQixpQkFBaUIsZ0NBQWdDLGtCQUFrQixtQkFBbUIseUZBQXlGLHdCQUF3QixHQUFHLGtDQUFrQyxpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLCtCQUErQixzQkFBc0IsaUJBQWlCLG1CQUFtQix5QkFBeUIsZUFBZSwyQkFBMkIsR0FBRyxvQkFBb0Isa0JBQWtCLDhCQUE4QixtQkFBbUIsR0FBRyxjQUFjLGtCQUFrQixxQkFBcUIsYUFBYSxHQUFHLGNBQWMsOEJBQThCLHFCQUFxQixHQUFHLGlCQUFpQiw4QkFBOEIscUJBQXFCLEdBQUcsaUJBQWlCLGtCQUFrQiw4QkFBOEIsbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsbUJBQW1CLEdBQUcsWUFBWSxnQkFBZ0IsaUJBQWlCLHNFQUFzRSx1Q0FBdUMsc0JBQXNCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsbUJBQW1CLGlCQUFpQiw4QkFBOEIsdUJBQXVCLHVCQUF1QixzQkFBc0IscUJBQXFCLHVDQUF1QyxHQUFHLHlCQUF5QiwwQkFBMEIsb0JBQW9CLEdBQUcsa0JBQWtCLGtCQUFrQixtQ0FBbUMsR0FBRyxxQ0FBcUMsaUJBQWlCLEdBQUcsbUNBQW1DLGdCQUFnQixHQUFHLG1DQUFtQyxlQUFlLEdBQUcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsd0JBQXdCLEdBQUcseUNBQXlDLDhCQUE4QixtQkFBbUIsR0FBRyxrQkFBa0IsMEJBQTBCLHFCQUFxQix1QkFBdUIsR0FBRyw2Q0FBNkMsOEJBQThCLG1CQUFtQixHQUFHLFlBQVksa0JBQWtCLGFBQWEsMENBQTBDLEdBQUcsZUFBZSw4QkFBOEIsbUJBQW1CLGVBQWUsa0JBQWtCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLEdBQUcsV0FBVyxpQkFBaUIsdUJBQXVCLHVCQUF1Qiw4QkFBOEIsR0FBRyxpQkFBaUIsZ0NBQWdDLG9CQUFvQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsWUFBWSxzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLHNCQUFzQixvQkFBb0IsR0FBRyxxQkFBcUIsa0JBQWtCLG1DQUFtQyxzQkFBc0IsaUJBQWlCLHFCQUFxQixHQUFHLHVCQUF1QixlQUFlLEdBQUcsWUFBWSxrQkFBa0IsNEJBQTRCLHdCQUF3QixlQUFlLHNCQUFzQixxQkFBcUIsR0FBRyxjQUFjLDBCQUEwQixtQkFBbUIsR0FBRyxxQ0FBcUMsbUJBQW1CLG9CQUFvQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsc0JBQXNCLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLG9HQUFvRyxxQ0FBcUMsS0FBSywyQ0FBMkMsR0FBRyxpQkFBaUIsY0FBYyxlQUFlLDhCQUE4QixtQkFBbUIsR0FBRyxnQkFBZ0Isa0JBQWtCLHFDQUFxQyxvQ0FBb0Msc0JBQXNCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxZQUFZLG9CQUFvQixzQkFBc0Isa0JBQWtCLHdCQUF3QixHQUFHLGNBQWMsK0JBQStCLDBCQUEwQixtQkFBbUIsR0FBRyxXQUFXLGdCQUFnQixHQUFHLGVBQWUsZ0JBQWdCLGlCQUFpQixHQUFHLFdBQVcsbUJBQW1CLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLGFBQWEsZUFBZSxHQUFHLFFBQVEsZUFBZSxHQUFHLGNBQWMscUJBQXFCLG1CQUFtQix5QkFBeUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsZ0JBQWdCLG1CQUFtQix3QkFBd0IsR0FBRyxhQUFhLGlCQUFpQixnQkFBZ0IsR0FBRyxtQkFBbUIsOEJBQThCLHVCQUF1QixtQkFBbUIsR0FBRyxxQ0FBcUMsOEJBQThCLEdBQUcscUJBQXFCLDhCQUE4QixpQkFBaUIsbUJBQW1CLG9CQUFvQixrQkFBa0Isd0JBQXdCLGtDQUFrQyxxQkFBcUIsR0FBRyxVQUFVLGlCQUFpQix1QkFBdUIsbUJBQW1CLG1CQUFtQix1QkFBdUIsdUNBQXVDLEdBQUcsZ0JBQWdCLDJCQUEyQixvQkFBb0IsR0FBRyxtQkFBbUIsOEJBQThCLG1CQUFtQixHQUFHLGNBQWMsb0JBQW9CLGtCQUFrQixpQkFBaUIsZ0NBQWdDLGtCQUFrQixtQkFBbUIseUZBQXlGLHdCQUF3QixHQUFHLGtDQUFrQyxpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLCtCQUErQixzQkFBc0IsaUJBQWlCLG1CQUFtQix5QkFBeUIsZUFBZSwyQkFBMkIsR0FBRyxvQkFBb0Isa0JBQWtCLDhCQUE4QixtQkFBbUIsR0FBRyxjQUFjLGtCQUFrQixxQkFBcUIsYUFBYSxHQUFHLGNBQWMsOEJBQThCLHFCQUFxQixHQUFHLGlCQUFpQiw4QkFBOEIscUJBQXFCLEdBQUcsaUJBQWlCLGtCQUFrQiw4QkFBOEIsbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsbUJBQW1CLEdBQUcsWUFBWSxnQkFBZ0IsaUJBQWlCLCtDQUErQyx1Q0FBdUMsc0JBQXNCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsbUJBQW1CLGlCQUFpQiw4QkFBOEIsdUJBQXVCLHVCQUF1QixzQkFBc0IscUJBQXFCLHVDQUF1QyxHQUFHLHlCQUF5QiwwQkFBMEIsb0JBQW9CLEdBQUcsa0JBQWtCLGtCQUFrQixtQ0FBbUMsR0FBRyxxQ0FBcUMsaUJBQWlCLEdBQUcsbUNBQW1DLGdCQUFnQixHQUFHLG1DQUFtQyxlQUFlLEdBQUcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsd0JBQXdCLEdBQUcseUNBQXlDLDhCQUE4QixtQkFBbUIsR0FBRyxrQkFBa0IsMEJBQTBCLHFCQUFxQix1QkFBdUIsR0FBRyw2Q0FBNkMsOEJBQThCLG1CQUFtQixHQUFHLFlBQVksa0JBQWtCLGFBQWEsMENBQTBDLEdBQUcsZUFBZSw4QkFBOEIsbUJBQW1CLGVBQWUsa0JBQWtCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLEdBQUcsV0FBVyxpQkFBaUIsdUJBQXVCLHVCQUF1Qiw4QkFBOEIsR0FBRyxpQkFBaUIsZ0NBQWdDLG9CQUFvQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsWUFBWSxzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLHNCQUFzQixvQkFBb0IsR0FBRyxxQkFBcUIsa0JBQWtCLG1DQUFtQyxzQkFBc0IsaUJBQWlCLHFCQUFxQixHQUFHLHVCQUF1QixlQUFlLEdBQUcsWUFBWSxrQkFBa0IsNEJBQTRCLHdCQUF3QixlQUFlLHNCQUFzQixxQkFBcUIsR0FBRyxjQUFjLDBCQUEwQixtQkFBbUIsR0FBRyxxQ0FBcUMsbUJBQW1CLG9CQUFvQixHQUFHLHFCQUFxQjtBQUN0Mlk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNYMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkEsaUVBQWUsY0FBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwZ0JBQTBnQjtBQUMxZ0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyx3REFBUTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JHO0FBQ1k7O0FBRXZDO0FBQ0E7QUFDQSwrQ0FBK0MsK0NBQUcsS0FBSzs7QUFFdkQ7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMseURBQVM7QUFDbEI7O0FBRUEsaUVBQWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJjOztBQUUvQjtBQUNBLHFDQUFxQyxzREFBVTtBQUMvQzs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQ05oQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0EseUJBQXlCLGVBQWUscUJBQXFCLEtBQUs7QUFDbEUsOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGFBQWE7QUFDOUQ7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBLGlEQUFpRCxhQUFhO0FBQzlEO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEM7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBLDJCQUEyQixlQUFlLHFCQUFxQixLQUFLO0FBQ3BFLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRk87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWTTtBQUNVOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnREFBTTtBQUNyQixxQkFBcUIsNkNBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNSO0FBQ0s7QUFNUjtBQUMwQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsMkNBQUk7O0FBRXRCO0FBQ0E7QUFDQSxRQUFRLGdEQUFPO0FBQ2Y7QUFDQSxXQUFXLGdEQUFPO0FBQ2xCO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpRUFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQU87QUFDaEM7QUFDQTtBQUNBLDRCQUE0QixtRUFBb0I7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlFQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFhO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlFQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixvRUFBcUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpRUFBa0I7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG9FQUFxQjtBQUNqRCx5QkFBeUIsaUVBQWtCO0FBQzNDOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvSHRtbEVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvTW9kYWxPcGVyYXRpb25zLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvTm90ZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL25vLW5vdGVzLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2Fuczp3Z2h0QDQwMDs3MDAmZmFtaWx5PVRpdGFuK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTljZDtcXG4gIGNvbG9yOiAjOWRiZWJiO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI3NXB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogN2VtIDFmciA1ZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlcixcXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxOTI2O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaXRhbiBPbmVcXFwiO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogMmVtO1xcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmFzaWRlIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmhyIHtcXG4gIHdpZHRoOiA0ZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNGVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmxpLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjBkMTM7XFxufVxcblxcbi5wcm9qZWN0IGkge1xcbiAgY29sb3I6ICNmNGU5Y2Q7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNmVtO1xcbn1cXG5cXG4ucmVtb3ZlIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4ucmVtb3ZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU5Y2Q7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogIzAzMTkyNjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIsXFxuLnByb2plY3Q6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MmU0NTtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzlkYmViYjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuN2VtIDJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtY2F0ZWdvcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTljZDtcXG4gIGNvbG9yOiAjMDMxOTI2O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTkyNjk5O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEl0IG5lZWRzIHRvIGJlIHNldCB0byBmbGV4IHNvIHRoYXQgaXQgY2FuIHdvcmsgcHJvcGVybHkgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLXByb2plY3QsXFxuLm1vZGFsLW5vdGUge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsLXByb2plY3Qge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzE5MjY7XFxuICBjb2xvcjogI2Y0ZTljZDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmJ0bi1hZGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyZjdiMDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5idG4tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2FmYTE7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubW9kYWwtbm90ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTljZDtcXG4gIGNvbG9yOiAjMDMxOTI2O1xcbn1cXG5tYWluIHtcXG4gIGNvbG9yOiAjMDMxOTI2O1xcbiAgcGFkZGluZzogMS4yZW07XFxufVxcblxcbi5lbXB0eSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHkgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU5Y2Q7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAxZW0gMS40ZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluO1xcbn1cXG5cXG4uZW1wdHkgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdGUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmkuZmEtc29saWRbZGF0YS1wcmlvcml0eT1cXFwiMFxcXCJdIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuaS5mYS1zb2xpZFtkYXRhLXByaW9yaXR5PVxcXCIxXFxcIl0ge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcbmkuZmEtc29saWRbZGF0YS1wcmlvcml0eT1cXFwiMlxcXCJdIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5lZGl0LW5vdGUge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcXG59XFxuXFxuLmVkaXQtbm90ZTpob3ZlcixcXG4uZWRpdC1ub3RlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzE5MjY7XFxuICBjb2xvcjogI2Y0ZTljZDtcXG59XFxuXFxuLnJlbW92ZS1ub3RlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDJweCA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5yZW1vdmUtbm90ZTpob3ZlcixcXG4ucmVtb3ZlLW5vdGU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTkyNjtcXG4gIGNvbG9yOiAjZjRlOWNkO1xcbn1cXG5cXG4ubm90ZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMWVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLm5ldy1ub3RlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzE5MjY7XFxuICBjb2xvcjogI2Y0ZTljZDtcXG4gIHdpZHRoOiA3ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm5vdGUge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzMTkyNjtcXG59XFxuXFxuLm5vdGU6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogIzAzMTkyNiAwIDAgOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbjogMC41ZW0gMDtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCBpIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjZlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyLFxcbmZvb3RlciBhOmZvY3VzIHtcXG4gIGNvbG9yOiAjNWY5YTkwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsYUFBYSxFQUFFLDREQUE0RDtFQUMzRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUF3QztFQUN4QyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zOndnaHRANDAwOzcwMCZmYW1pbHk9VGl0YW4rT25lJmRpc3BsYXk9c3dhcFxcXCIpO1xcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU5Y2Q7XFxuICBjb2xvcjogIzlkYmViYjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNzVweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDdlbSAxZnIgNWVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIsXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTkyNjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGl0YW4gT25lXFxcIjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ociB7XFxuICB3aWR0aDogNGVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxLjRlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5saS5hY3RpdmUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwZDEzO1xcbn1cXG5cXG4ucHJvamVjdCBpIHtcXG4gIGNvbG9yOiAjZjRlOWNkO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjZlbTtcXG59XFxuXFxuLnJlbW92ZSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnJlbW92ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlOWNkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6ICMwMzE5MjY7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyLFxcbi5wcm9qZWN0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjJlNDU7XFxufVxcblxcbi5wcm9qZWN0IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICM5ZGJlYmI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjdlbSAyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLWNhdGVnb3J5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU5Y2Q7XFxuICBjb2xvcjogIzAzMTkyNjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzE5MjY5OTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBkaXNwbGF5OiBub25lOyAvKiBJdCBuZWVkcyB0byBiZSBzZXQgdG8gZmxleCBzbyB0aGF0IGl0IGNhbiB3b3JrIHByb3Blcmx5ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1wcm9qZWN0LFxcbi5tb2RhbC1ub3RlIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxOTI2O1xcbiAgY29sb3I6ICNmNGU5Y2Q7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5idG4tYWRkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmY3YjA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhZmExO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1vZGFsLW5vdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU5Y2Q7XFxuICBjb2xvcjogIzAzMTkyNjtcXG59XFxubWFpbiB7XFxuICBjb2xvcjogIzAzMTkyNjtcXG4gIHBhZGRpbmc6IDEuMmVtO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vbm8tbm90ZXMuanBlZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlOWNkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMWVtIDEuNGVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbjtcXG59XFxuXFxuLmVtcHR5IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3RlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pLmZhLXNvbGlkW2RhdGEtcHJpb3JpdHk9XFxcIjBcXFwiXSB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcbmkuZmEtc29saWRbZGF0YS1wcmlvcml0eT1cXFwiMVxcXCJdIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5pLmZhLXNvbGlkW2RhdGEtcHJpb3JpdHk9XFxcIjJcXFwiXSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZWRpdC1ub3RlIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogMC4yZW07XFxufVxcblxcbi5lZGl0LW5vdGU6aG92ZXIsXFxuLmVkaXQtbm90ZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxOTI2O1xcbiAgY29sb3I6ICNmNGU5Y2Q7XFxufVxcblxcbi5yZW1vdmUtbm90ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAycHggNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucmVtb3ZlLW5vdGU6aG92ZXIsXFxuLnJlbW92ZS1ub3RlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzE5MjY7XFxuICBjb2xvcjogI2Y0ZTljZDtcXG59XFxuXFxuLm5vdGVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5uZXctbm90ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxOTI2O1xcbiAgY29sb3I6ICNmNGU5Y2Q7XFxuICB3aWR0aDogN2VtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5ub3RlIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMzE5MjY7XFxufVxcblxcbi5ub3RlOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6ICMwMzE5MjYgMCAwIDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW46IDAuNWVtIDA7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwgaSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC42ZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG5mb290ZXIgYTpmb2N1cyB7XFxuICBjb2xvcjogIzVmOWE5MDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5ld05vdGVFbGVtZW50KG5vdGUpIHtcbiAgY29uc3QgbmV3Tm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld05vdGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XG4gIG5ld05vdGUuZGF0YXNldC5pZCA9IG5vdGUuaWQ7XG4gIGNvbnN0IGljb24gPVxuICAgIG5vdGUucHJpb3JpdHkgPT09IFwiMFwiXG4gICAgICA/IFwiaG91cmdsYXNzXCJcbiAgICAgIDogbm90ZS5wcmlvcml0eSA9PT0gXCIxXCJcbiAgICAgID8gXCJhbmdsZXMtcmlnaHRcIlxuICAgICAgOiBcImV4Y2xhbWF0aW9uXCI7XG4gIG5ld05vdGUuaW5uZXJIVE1MID0gYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwibm90ZS1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7bm90ZS50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZSBlZGl0LW5vdGVcIj48L2k+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZW1vdmUtbm90ZVwiPiZDcm9zczs8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke25vdGUuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWxhYmVsXCI+XG4gICAgICA8aSBkYXRhLXByaW9yaXR5PSR7bm90ZS5wcmlvcml0eX0gY2xhc3M9XCJmYS1zb2xpZCBmYS0ke2ljb259XCI+PC9pPlxuICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHtub3RlLmR1ZURhdGV9PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG4gIHJldHVybiBuZXdOb3RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3UHJvamVjdEVsZW1lbnQocHJvamVjdCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBuZXdQcm9qZWN0LmRhdGFzZXQuaWQgPSBwcm9qZWN0LnByb2plY3RJZDtcbiAgbmV3UHJvamVjdC5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbj5cbiAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWFya2VyXCI+PC9pPiA8c3Bhbj4ke3Byb2plY3QubmFtZX08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPiZDcm9zczs8L2J1dHRvbj5cbiAgYDtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdG1sRm9yUHJvamVjdExpc3QocHJvamVjdExpc3QpIHtcbiAgcmV0dXJuIHByb2plY3RMaXN0XG4gICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIGBcbiAgICA8bGkgY2xhc3M9XCJwcm9qZWN0XCIgZGF0YS1pZD0ke3Byb2plY3QucHJvamVjdElkfT5cbiAgICA8YnV0dG9uPlxuICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1tYXJrZXJcIj48L2k+IDxzcGFuPiR7cHJvamVjdC5uYW1lfTwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlXCI+JkNyb3NzOzwvYnV0dG9uPlxuICA8L2xpPlxuICAgIGA7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEh0bWxGb3JOb3RlTGlzdChwcm9qZWN0KSB7XG4gIHJldHVybiBwcm9qZWN0Lm5vdGVzXG4gICAgLm1hcCgobm90ZSkgPT4ge1xuICAgICAgY29uc3QgaWNvbiA9XG4gICAgICAgIG5vdGUucHJpb3JpdHkgPT09IFwiMFwiXG4gICAgICAgICAgPyBcImhvdXJnbGFzc1wiXG4gICAgICAgICAgOiBub3RlLnByaW9yaXR5ID09PSBcIjFcIlxuICAgICAgICAgID8gXCJhbmdsZXMtcmlnaHRcIlxuICAgICAgICAgIDogXCJleGNsYW1hdGlvblwiO1xuICAgICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibm90ZVwiIGRhdGEtaWQ9JHtub3RlLmlkfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwibm90ZS1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHtub3RlLnRpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZSBlZGl0LW5vdGVcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlbW92ZS1ub3RlXCI+JkNyb3NzOzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7bm90ZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1sYWJlbFwiPlxuICAgICAgICA8aSBkYXRhLXByaW9yaXR5PSR7bm90ZS5wcmlvcml0eX0gY2xhc3M9XCJmYS1zb2xpZCBmYS0ke2ljb259XCI+PC9pPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke25vdGUuZHVlRGF0ZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PiBcbiAgICBgO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gb3Blbk5vdGVNb2RhbCgpIHtcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIG5vdGVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdE1vZGFsKCkge1xuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJvdmVybGF5XCIpKSB7XG4gICAgbmV3UHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBuZXdOb3RlRm9ybS5yZXNldCgpO1xuICB9XG4gIGlmIChcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3ZlcmxheVwiKSB8fFxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY2FuY2VsXCIpIHx8XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi1hZGRcIilcbiAgKSB7XG4gICAgbm90ZU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbmNvbnN0IG5vdGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtbm90ZVwiKTtcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtcHJvamVjdFwiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtY2F0ZWdvcnlcIik7XG5jb25zdCBhZGROb3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctbm90ZVwiKTtcbmNvbnN0IGNhbmNlbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1jYW5jZWxcIik7XG5jb25zdCBlbXB0eU5vdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtcHR5LW5vdGVzLWJ1dHRvblwiKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm1cIik7XG5jb25zdCBuZXdOb3RlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1mb3JtXCIpO1xuXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qcm9qZWN0TW9kYWwpO1xuZW1wdHlOb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTm90ZU1vZGFsKTtcbmFkZE5vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Ob3RlTW9kYWwpO1xuY2FuY2VsQnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbn0pO1xuIiwiY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcbiIsImltcG9ydCBOb3RlIGZyb20gXCIuL05vdGVcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICBub3RlcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0SWQgPSB1dWlkdjQoKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIGFkZE5vdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IGlkID0gdXVpZHY0KCk7XG4gICAgY29uc3Qgbm90ZSA9IG5ldyBOb3RlKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB0aGlzLm5vdGVzLnB1c2gobm90ZSk7XG4gIH1cbiAgcmVtb3ZlTm90ZShpZCkge1xuICAgIHRoaXMubm90ZXMgPSB0aGlzLm5vdGVzLmZpbHRlcigobm90ZSkgPT4gbm90ZS5pZCAhPSBpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vVG9kb19Mb2dvLnBuZ1wiO1xuaW1wb3J0IFwiLi9Nb2RhbE9wZXJhdGlvbnNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCB7XG4gIGdldEh0bWxGb3JOb3RlTGlzdCxcbiAgZ2V0SHRtbEZvclByb2plY3RMaXN0LFxuICBnZXROZXdOb3RlRWxlbWVudCxcbiAgZ2V0TmV3UHJvamVjdEVsZW1lbnQsXG59IGZyb20gXCIuL0h0bWxFbGVtZW50c1wiO1xuaW1wb3J0IHsgb3Blbk5vdGVNb2RhbCB9IGZyb20gXCIuL01vZGFsT3BlcmF0aW9uc1wiO1xuXG5jb25zdCBsb2dvSW1hZ2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb19sb2dvXCIpO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybVwiKTtcbmNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIik7XG5jb25zdCBuZXdOb3RlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1mb3JtXCIpO1xuY29uc3QgbmV3Tm90ZVRpdGxlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtdGl0bGVcIik7XG5jb25zdCBuZXdOb3RlRGVzY3JpcHRpb25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1kZXNjcmlwdGlvblwiKTtcbmNvbnN0IG5ld05vdGVEdWVEYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtZGF0ZVwiKTtcbmNvbnN0IG5ld05vdGVQcmlvcml0eUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLXByaW9yaXR5XCIpO1xuY29uc3QgZWRpdE5vdGVJZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWlkXCIpO1xuY29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0LWl0ZW1zXCIpO1xuY29uc3Qgbm90ZUxpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXMtbGlzdC1pdGVtc1wiKTtcbmNvbnN0IHNjcmF0Y2hQYWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NyYXRjaHBhZFwiKTtcbmNvbnN0IGVtcHR5Tm90ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXB0eVwiKTtcbmNvbnN0IGFkZE5vdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1ub3RlXCIpO1xuXG5sb2dvSW1hZ2VFbC5zcmMgPSBMb2dvO1xuXG5jb25zdCBzY3JhdGNoUGFkID1cbiAgT2JqZWN0LmFzc2lnbihcbiAgICBuZXcgUHJvamVjdCgpLFxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY3JhdGNoUGFkVE9PRE9PXCIpKVxuICApIHx8IG5ldyBQcm9qZWN0KFwiU2NyYXRjaCBQYWRcIik7XG5sZXQgcHJvamVjdExpc3QgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RUT09ET09cIikpLm1hcCgocHJvamVjdCkgPT5cbiAgICBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpXG4gICkgfHwgW107XG5sZXQgY3VycmVudFByb2plY3QgPSBzY3JhdGNoUGFkO1xuXG5uZXdOb3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFkZE5ld05vdGUpO1xubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGROZXdQcm9qZWN0KTtcblxuZnVuY3Rpb24gYWRkTmV3Tm90ZShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0aXRsZSA9IG5ld05vdGVUaXRsZUVsLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IG5ld05vdGVEZXNjcmlwdGlvbkVsLnZhbHVlO1xuICBjb25zdCBkYXRlID0gbmV3Tm90ZUR1ZURhdGVFbC52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBuZXdOb3RlUHJpb3JpdHlFbC52YWx1ZTtcbiAgaWYgKGVkaXROb3RlSWRFbC52YWx1ZSAhPT0gXCJcIikge1xuICAgIGNvbnN0IG5vdGUgPSBjdXJyZW50UHJvamVjdC5ub3Rlcy5maW5kKFxuICAgICAgKG5vdGUpID0+IG5vdGUuaWQgPT09IGVkaXROb3RlSWRFbC52YWx1ZVxuICAgICk7XG4gICAgbm90ZS50aXRsZSA9IHRpdGxlO1xuICAgIG5vdGUuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBub3RlLmR1ZURhdGUgPSBkYXRlO1xuICAgIG5vdGUucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBjb25zb2xlLmxvZyhub3RlKTtcbiAgICBub3RlTGlzdEVsLmlubmVySFRNTCA9IGdldEh0bWxGb3JOb3RlTGlzdChjdXJyZW50UHJvamVjdCk7XG4gICAgbmV3Tm90ZUZvcm0ucmVzZXQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0VE9PRE9PXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY3JhdGNoUGFkVE9PRE9PXCIsIEpTT04uc3RyaW5naWZ5KHNjcmF0Y2hQYWQpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY3VycmVudFByb2plY3QuYWRkTm90ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3Qubm90ZXMpO1xuICBpZiAoY3VycmVudFByb2plY3Qubm90ZXMubGVuZ3RoID4gMCkge1xuICAgIGFkZE5vdGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGVtcHR5Tm90ZUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBuZXdOb3RlRm9ybS5yZXNldCgpO1xuICBub3RlTGlzdEVsLmFwcGVuZENoaWxkKFxuICAgIGdldE5ld05vdGVFbGVtZW50KGN1cnJlbnRQcm9qZWN0Lm5vdGVzW2N1cnJlbnRQcm9qZWN0Lm5vdGVzLmxlbmd0aCAtIDFdKVxuICApO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0VE9PRE9PXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NyYXRjaFBhZFRPT0RPT1wiLCBKU09OLnN0cmluZ2lmeShzY3JhdGNoUGFkKSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0TmFtZS52YWx1ZTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgbmV3UHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgcHJvamVjdExpc3RFbC5hcHBlbmRDaGlsZChnZXROZXdQcm9qZWN0RWxlbWVudChuZXdQcm9qZWN0KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RUT09ET09cIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY3JhdGNoUGFkVE9PRE9PXCIsIEpTT04uc3RyaW5naWZ5KHNjcmF0Y2hQYWQpKTtcbn1cblxucHJvamVjdExpc3RFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdENsaWNrSGFuZGxlcik7XG5ub3RlTGlzdEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBub3RlQ2xpY2tIYW5kbGVyKTtcbnNjcmF0Y2hQYWRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdENsaWNrSGFuZGxlcik7XG5cbmZ1bmN0aW9uIG5vdGVDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgbGV0IG5vdGVJZDtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5vdGVcIik7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgbm90ZUlkID0gZWxlbWVudC5kYXRhc2V0LmlkO1xuICB9XG5cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZW1vdmUtbm90ZVwiKSkge1xuICAgIGN1cnJlbnRQcm9qZWN0Lm5vdGVzID0gY3VycmVudFByb2plY3Qubm90ZXMuZmlsdGVyKFxuICAgICAgKG5vdGUpID0+IG5vdGUuaWQgIT09IG5vdGVJZFxuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFRPT0RPT1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NyYXRjaFBhZFRPT0RPT1wiLCBKU09OLnN0cmluZ2lmeShzY3JhdGNoUGFkKSk7XG4gICAgbm90ZUxpc3RFbC5pbm5lckhUTUwgPSBnZXRIdG1sRm9yTm90ZUxpc3QoY3VycmVudFByb2plY3QpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdC5ub3Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGVtcHR5Tm90ZUVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGFkZE5vdGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbXB0eU5vdGVFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBhZGROb3RlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LW5vdGVcIikpIHtcbiAgICBsZXQgY2xpY2tlZE5vdGUgPSBjdXJyZW50UHJvamVjdC5ub3Rlcy5maW5kKChub3RlKSA9PiBub3RlLmlkID09PSBub3RlSWQpO1xuXG4gICAgZWRpdE5vdGVJZEVsLnZhbHVlID0gY2xpY2tlZE5vdGUuaWQ7XG4gICAgbmV3Tm90ZVRpdGxlRWwudmFsdWUgPSBjbGlja2VkTm90ZS50aXRsZTtcbiAgICBuZXdOb3RlRGVzY3JpcHRpb25FbC52YWx1ZSA9IGNsaWNrZWROb3RlLmRlc2NyaXB0aW9uO1xuICAgIG5ld05vdGVEdWVEYXRlRWwudmFsdWUgPSBjbGlja2VkTm90ZS5kdWVEYXRlO1xuICAgIG5ld05vdGVQcmlvcml0eUVsLnZhbHVlID0gY2xpY2tlZE5vdGUucHJpb3JpdHk7XG4gICAgb3Blbk5vdGVNb2RhbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3RDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgbGV0IGlkO1xuICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdFwiKTtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxuICAgICAgLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpKTtcbiAgICBpZCA9IGVsZW1lbnQuZGF0YXNldC5pZDtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICBjdXJyZW50UHJvamVjdCA9IGlkXG4gICAgICA/IHByb2plY3RMaXN0LmZpbmQoKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdElkID09PSBpZClcbiAgICAgIDogc2NyYXRjaFBhZDtcbiAgICBub3RlTGlzdEVsLmlubmVySFRNTCA9IGdldEh0bWxGb3JOb3RlTGlzdChjdXJyZW50UHJvamVjdCk7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0Lm5vdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZW1wdHlOb3RlRWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgYWRkTm90ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtcHR5Tm90ZUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGFkZE5vdGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgfVxuXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlXCIpKSB7XG4gICAgcHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdElkICE9PSBpZCk7XG4gICAgcHJvamVjdExpc3RFbC5pbm5lckhUTUwgPSBnZXRIdG1sRm9yUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RUT09ET09cIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtcHJvamVjdFwiKSkge1xuICAgICAgY3VycmVudFByb2plY3QgPSBzY3JhdGNoUGFkO1xuICAgICAgc2NyYXRjaFBhZEVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICAgIGxvYWRTY3JhdGNoUGFkKCk7XG4gICAgICBub3RlTGlzdEVsLmlubmVySFRNTCA9IGdldEh0bWxGb3JOb3RlTGlzdChjdXJyZW50UHJvamVjdCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRTY3JhdGNoUGFkKCkge1xuICBpZiAoY3VycmVudFByb2plY3Qubm90ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgZW1wdHlOb3RlRWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGFkZE5vdGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2Uge1xuICAgIGVtcHR5Tm90ZUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBhZGROb3RlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gIHByb2plY3RMaXN0RWwuaW5uZXJIVE1MID0gZ2V0SHRtbEZvclByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcbiAgbm90ZUxpc3RFbC5pbm5lckhUTUwgPSBnZXRIdG1sRm9yTm90ZUxpc3Qoc2NyYXRjaFBhZCk7XG59XG5cbmxvYWRTY3JhdGNoUGFkKCk7XG5cbmxvYWRQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9