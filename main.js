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

const scratchPad = localStorage.getItem("scratchPadTOODOO")
  ? Object.assign(
      new _Project__WEBPACK_IMPORTED_MODULE_3__["default"](),
      JSON.parse(localStorage.getItem("scratchPadTOODOO"))
    )
  : new _Project__WEBPACK_IMPORTED_MODULE_3__["default"]("Scratch Pad");
let projectList = localStorage.getItem("projectListTOODOO")
  ? JSON.parse(localStorage.getItem("projectListTOODOO")).map((project) =>
      Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_3__["default"](), project)
    )
  : [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQXlCLGlFQUFrQjtBQUMzQzs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL0h0bWxFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL01vZGFsT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL05vdGUuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9uby1ub3Rlcy5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnM6d2dodEA0MDA7NzAwJmZhbWlseT1UaXRhbitPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU5Y2Q7XFxuICBjb2xvcjogIzlkYmViYjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNzVweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDdlbSAxZnIgNWVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIsXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTkyNjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGl0YW4gT25lXFxcIjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ociB7XFxuICB3aWR0aDogNGVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxLjRlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5saS5hY3RpdmUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwZDEzO1xcbn1cXG5cXG4ucHJvamVjdCBpIHtcXG4gIGNvbG9yOiAjZjRlOWNkO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjZlbTtcXG59XFxuXFxuLnJlbW92ZSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnJlbW92ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlOWNkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6ICMwMzE5MjY7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyLFxcbi5wcm9qZWN0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjJlNDU7XFxufVxcblxcbi5wcm9qZWN0IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICM5ZGJlYmI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjdlbSAyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLWNhdGVnb3J5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU5Y2Q7XFxuICBjb2xvcjogIzAzMTkyNjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzE5MjY5OTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBkaXNwbGF5OiBub25lOyAvKiBJdCBuZWVkcyB0byBiZSBzZXQgdG8gZmxleCBzbyB0aGF0IGl0IGNhbiB3b3JrIHByb3Blcmx5ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1wcm9qZWN0LFxcbi5tb2RhbC1ub3RlIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxOTI2O1xcbiAgY29sb3I6ICNmNGU5Y2Q7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5idG4tYWRkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmY3YjA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdhZmExO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1vZGFsLW5vdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU5Y2Q7XFxuICBjb2xvcjogIzAzMTkyNjtcXG59XFxubWFpbiB7XFxuICBjb2xvcjogIzAzMTkyNjtcXG4gIHBhZGRpbmc6IDEuMmVtO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlOWNkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMWVtIDEuNGVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbjtcXG59XFxuXFxuLmVtcHR5IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3RlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pLmZhLXNvbGlkW2RhdGEtcHJpb3JpdHk9XFxcIjBcXFwiXSB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcbmkuZmEtc29saWRbZGF0YS1wcmlvcml0eT1cXFwiMVxcXCJdIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5pLmZhLXNvbGlkW2RhdGEtcHJpb3JpdHk9XFxcIjJcXFwiXSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZWRpdC1ub3RlIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogMC4yZW07XFxufVxcblxcbi5lZGl0LW5vdGU6aG92ZXIsXFxuLmVkaXQtbm90ZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxOTI2O1xcbiAgY29sb3I6ICNmNGU5Y2Q7XFxufVxcblxcbi5yZW1vdmUtbm90ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAycHggNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucmVtb3ZlLW5vdGU6aG92ZXIsXFxuLnJlbW92ZS1ub3RlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzE5MjY7XFxuICBjb2xvcjogI2Y0ZTljZDtcXG59XFxuXFxuLm5vdGVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5uZXctbm90ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxOTI2O1xcbiAgY29sb3I6ICNmNGU5Y2Q7XFxuICB3aWR0aDogN2VtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5ub3RlIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMzE5MjY7XFxufVxcblxcbi5ub3RlOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6ICMwMzE5MjYgMCAwIDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW46IDAuNWVtIDA7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwgaSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC42ZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG5mb290ZXIgYTpmb2N1cyB7XFxuICBjb2xvcjogIzVmOWE5MDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VB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ZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2Fuczp3Z2h0QDQwMDs3MDAmZmFtaWx5PVRpdGFuK09uZSZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlOWNkO1xcbiAgY29sb3I6ICM5ZGJlYmI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjc1cHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3ZW0gMWZyIDVlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyLFxcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzE5MjY7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgYSB7XFxuICBmb250LWZhbWlseTogXFxcIlRpdGFuIE9uZVxcXCI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYXNpZGUge1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMWVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHIge1xcbiAgd2lkdGg6IDRlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMS40ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGkuYWN0aXZlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMGQxMztcXG59XFxuXFxuLnByb2plY3QgaSB7XFxuICBjb2xvcjogI2Y0ZTljZDtcXG4gIG1hcmdpbi1yaWdodDogMC42ZW07XFxufVxcblxcbi5yZW1vdmUge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5yZW1vdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTljZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjMDMxOTI2O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlcixcXG4ucHJvamVjdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyZTQ1O1xcbn1cXG5cXG4ucHJvamVjdCBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjOWRiZWJiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC43ZW0gMmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW47XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1jYXRlZ29yeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlOWNkO1xcbiAgY29sb3I6ICMwMzE5MjY7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxOTI2OTk7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgZGlzcGxheTogbm9uZTsgLyogSXQgbmVlZHMgdG8gYmUgc2V0IHRvIGZsZXggc28gdGhhdCBpdCBjYW4gd29yayBwcm9wZXJseSAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtcHJvamVjdCxcXG4ubW9kYWwtbm90ZSB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTkyNjtcXG4gIGNvbG9yOiAjZjRlOWNkO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4uYnRuLWFkZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJmN2IwO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ0bi1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3YWZhMTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tb2RhbC1ub3RlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlOWNkO1xcbiAgY29sb3I6ICMwMzE5MjY7XFxufVxcbm1haW4ge1xcbiAgY29sb3I6ICMwMzE5MjY7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL25vLW5vdGVzLmpwZWdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTljZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDFlbSAxLjRlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW47XFxufVxcblxcbi5lbXB0eSBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm90ZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaS5mYS1zb2xpZFtkYXRhLXByaW9yaXR5PVxcXCIwXFxcIl0ge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5pLmZhLXNvbGlkW2RhdGEtcHJpb3JpdHk9XFxcIjFcXFwiXSB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuaS5mYS1zb2xpZFtkYXRhLXByaW9yaXR5PVxcXCIyXFxcIl0ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmVkaXQtbm90ZSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xcbn1cXG5cXG4uZWRpdC1ub3RlOmhvdmVyLFxcbi5lZGl0LW5vdGU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTkyNjtcXG4gIGNvbG9yOiAjZjRlOWNkO1xcbn1cXG5cXG4ucmVtb3ZlLW5vdGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMnB4IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnJlbW92ZS1ub3RlOmhvdmVyLFxcbi5yZW1vdmUtbm90ZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxOTI2O1xcbiAgY29sb3I6ICNmNGU5Y2Q7XFxufVxcblxcbi5ub3RlcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4ubmV3LW5vdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTkyNjtcXG4gIGNvbG9yOiAjZjRlOWNkO1xcbiAgd2lkdGg6IDdlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubm90ZSB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDMxOTI2O1xcbn1cXG5cXG4ubm90ZTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAjMDMxOTI2IDAgMCA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbWFyZ2luOiAwLjVlbSAwO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIGkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIsXFxuZm9vdGVyIGE6Zm9jdXMge1xcbiAgY29sb3I6ICM1ZjlhOTA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImV4cG9ydCBmdW5jdGlvbiBnZXROZXdOb3RlRWxlbWVudChub3RlKSB7XG4gIGNvbnN0IG5ld05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdOb3RlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICBuZXdOb3RlLmRhdGFzZXQuaWQgPSBub3RlLmlkO1xuICBjb25zdCBpY29uID1cbiAgICBub3RlLnByaW9yaXR5ID09PSBcIjBcIlxuICAgICAgPyBcImhvdXJnbGFzc1wiXG4gICAgICA6IG5vdGUucHJpb3JpdHkgPT09IFwiMVwiXG4gICAgICA/IFwiYW5nbGVzLXJpZ2h0XCJcbiAgICAgIDogXCJleGNsYW1hdGlvblwiO1xuICBuZXdOb3RlLmlubmVySFRNTCA9IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cIm5vdGUtaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke25vdGUudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmUgZWRpdC1ub3RlXCI+PC9pPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVtb3ZlLW5vdGVcIj4mQ3Jvc3M7PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtub3RlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1sYWJlbFwiPlxuICAgICAgPGkgZGF0YS1wcmlvcml0eT0ke25vdGUucHJpb3JpdHl9IGNsYXNzPVwiZmEtc29saWQgZmEtJHtpY29ufVwiPjwvaT5cbiAgICAgIDxkaXYgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7bm90ZS5kdWVEYXRlfTwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICByZXR1cm4gbmV3Tm90ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1Byb2plY3RFbGVtZW50KHByb2plY3QpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgbmV3UHJvamVjdC5kYXRhc2V0LmlkID0gcHJvamVjdC5wcm9qZWN0SWQ7XG4gIG5ld1Byb2plY3QuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24+XG4gICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLW1hcmtlclwiPjwvaT4gPHNwYW4+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj4mQ3Jvc3M7PC9idXR0b24+XG4gIGA7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SHRtbEZvclByb2plY3RMaXN0KHByb2plY3RMaXN0KSB7XG4gIHJldHVybiBwcm9qZWN0TGlzdFxuICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBgXG4gICAgPGxpIGNsYXNzPVwicHJvamVjdFwiIGRhdGEtaWQ9JHtwcm9qZWN0LnByb2plY3RJZH0+XG4gICAgPGJ1dHRvbj5cbiAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWFya2VyXCI+PC9pPiA8c3Bhbj4ke3Byb2plY3QubmFtZX08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPiZDcm9zczs8L2J1dHRvbj5cbiAgPC9saT5cbiAgICBgO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdG1sRm9yTm90ZUxpc3QocHJvamVjdCkge1xuICByZXR1cm4gcHJvamVjdC5ub3Rlc1xuICAgIC5tYXAoKG5vdGUpID0+IHtcbiAgICAgIGNvbnN0IGljb24gPVxuICAgICAgICBub3RlLnByaW9yaXR5ID09PSBcIjBcIlxuICAgICAgICAgID8gXCJob3VyZ2xhc3NcIlxuICAgICAgICAgIDogbm90ZS5wcmlvcml0eSA9PT0gXCIxXCJcbiAgICAgICAgICA/IFwiYW5nbGVzLXJpZ2h0XCJcbiAgICAgICAgICA6IFwiZXhjbGFtYXRpb25cIjtcbiAgICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cIm5vdGVcIiBkYXRhLWlkPSR7bm90ZS5pZH0+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cIm5vdGUtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7bm90ZS50aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmUgZWRpdC1ub3RlXCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZW1vdmUtbm90ZVwiPiZDcm9zczs8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke25vdGUuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktbGFiZWxcIj5cbiAgICAgICAgPGkgZGF0YS1wcmlvcml0eT0ke25vdGUucHJpb3JpdHl9IGNsYXNzPVwiZmEtc29saWQgZmEtJHtpY29ufVwiPjwvaT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHtub3RlLmR1ZURhdGV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gXG4gICAgYDtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG9wZW5Ob3RlTW9kYWwoKSB7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBub3RlTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3RNb2RhbCgpIHtcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3ZlcmxheVwiKSkge1xuICAgIG5ld1Byb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgbmV3Tm90ZUZvcm0ucmVzZXQoKTtcbiAgfVxuICBpZiAoXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm92ZXJsYXlcIikgfHxcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWNhbmNlbFwiKSB8fFxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tYWRkXCIpXG4gICkge1xuICAgIG5vdGVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5jb25zdCBub3RlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW5vdGVcIik7XG5jb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXByb2plY3RcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNhdGVnb3J5XCIpO1xuY29uc3QgYWRkTm90ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LW5vdGVcIik7XG5jb25zdCBjYW5jZWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tY2FuY2VsXCIpO1xuY29uc3QgZW1wdHlOb3RlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbXB0eS1ub3Rlcy1idXR0b25cIik7XG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpO1xuY29uc3QgbmV3Tm90ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtZm9ybVwiKTtcblxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvamVjdE1vZGFsKTtcbmVtcHR5Tm90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk5vdGVNb2RhbCk7XG5hZGROb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTm90ZU1vZGFsKTtcbmNhbmNlbEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG59KTtcbiIsImNsYXNzIE5vdGUge1xuICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGU7XG4iLCJpbXBvcnQgTm90ZSBmcm9tIFwiLi9Ob3RlXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgbm90ZXMgPSBbXTtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMucHJvamVjdElkID0gdXVpZHY0KCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBhZGROb3RlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBpZCA9IHV1aWR2NCgpO1xuICAgIGNvbnN0IG5vdGUgPSBuZXcgTm90ZShpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgdGhpcy5ub3Rlcy5wdXNoKG5vdGUpO1xuICB9XG4gIHJlbW92ZU5vdGUoaWQpIHtcbiAgICB0aGlzLm5vdGVzID0gdGhpcy5ub3Rlcy5maWx0ZXIoKG5vdGUpID0+IG5vdGUuaWQgIT0gaWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL1RvZG9fTG9nby5wbmdcIjtcbmltcG9ydCBcIi4vTW9kYWxPcGVyYXRpb25zXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQge1xuICBnZXRIdG1sRm9yTm90ZUxpc3QsXG4gIGdldEh0bWxGb3JQcm9qZWN0TGlzdCxcbiAgZ2V0TmV3Tm90ZUVsZW1lbnQsXG4gIGdldE5ld1Byb2plY3RFbGVtZW50LFxufSBmcm9tIFwiLi9IdG1sRWxlbWVudHNcIjtcbmltcG9ydCB7IG9wZW5Ob3RlTW9kYWwgfSBmcm9tIFwiLi9Nb2RhbE9wZXJhdGlvbnNcIjtcblxuY29uc3QgbG9nb0ltYWdlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9fbG9nb1wiKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm1cIik7XG5jb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xuY29uc3QgbmV3Tm90ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtZm9ybVwiKTtcbmNvbnN0IG5ld05vdGVUaXRsZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLXRpdGxlXCIpO1xuY29uc3QgbmV3Tm90ZURlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtZGVzY3JpcHRpb25cIik7XG5jb25zdCBuZXdOb3RlRHVlRGF0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWRhdGVcIik7XG5jb25zdCBuZXdOb3RlUHJpb3JpdHlFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1wcmlvcml0eVwiKTtcbmNvbnN0IGVkaXROb3RlSWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1pZFwiKTtcbmNvbnN0IHByb2plY3RMaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdC1pdGVtc1wiKTtcbmNvbnN0IG5vdGVMaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzLWxpc3QtaXRlbXNcIik7XG5jb25zdCBzY3JhdGNoUGFkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcmF0Y2hwYWRcIik7XG5jb25zdCBlbXB0eU5vdGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHlcIik7XG5jb25zdCBhZGROb3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctbm90ZVwiKTtcblxubG9nb0ltYWdlRWwuc3JjID0gTG9nbztcblxuY29uc3Qgc2NyYXRjaFBhZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NyYXRjaFBhZFRPT0RPT1wiKVxuICA/IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgUHJvamVjdCgpLFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjcmF0Y2hQYWRUT09ET09cIikpXG4gICAgKVxuICA6IG5ldyBQcm9qZWN0KFwiU2NyYXRjaCBQYWRcIik7XG5sZXQgcHJvamVjdExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0VE9PRE9PXCIpXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0VE9PRE9PXCIpKS5tYXAoKHByb2plY3QpID0+XG4gICAgICBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpXG4gICAgKVxuICA6IFtdO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gc2NyYXRjaFBhZDtcblxubmV3Tm90ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGROZXdOb3RlKTtcbm5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkTmV3UHJvamVjdCk7XG5cbmZ1bmN0aW9uIGFkZE5ld05vdGUoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGl0bGUgPSBuZXdOb3RlVGl0bGVFbC52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBuZXdOb3RlRGVzY3JpcHRpb25FbC52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IG5ld05vdGVEdWVEYXRlRWwudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gbmV3Tm90ZVByaW9yaXR5RWwudmFsdWU7XG4gIGlmIChlZGl0Tm90ZUlkRWwudmFsdWUgIT09IFwiXCIpIHtcbiAgICBjb25zdCBub3RlID0gY3VycmVudFByb2plY3Qubm90ZXMuZmluZChcbiAgICAgIChub3RlKSA9PiBub3RlLmlkID09PSBlZGl0Tm90ZUlkRWwudmFsdWVcbiAgICApO1xuICAgIG5vdGUudGl0bGUgPSB0aXRsZTtcbiAgICBub3RlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbm90ZS5kdWVEYXRlID0gZGF0ZTtcbiAgICBub3RlLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgY29uc29sZS5sb2cobm90ZSk7XG4gICAgbm90ZUxpc3RFbC5pbm5lckhUTUwgPSBnZXRIdG1sRm9yTm90ZUxpc3QoY3VycmVudFByb2plY3QpO1xuICAgIG5ld05vdGVGb3JtLnJlc2V0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFRPT0RPT1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NyYXRjaFBhZFRPT0RPT1wiLCBKU09OLnN0cmluZ2lmeShzY3JhdGNoUGFkKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGN1cnJlbnRQcm9qZWN0LmFkZE5vdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0Lm5vdGVzKTtcbiAgaWYgKGN1cnJlbnRQcm9qZWN0Lm5vdGVzLmxlbmd0aCA+IDApIHtcbiAgICBhZGROb3RlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBlbXB0eU5vdGVFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbiAgbmV3Tm90ZUZvcm0ucmVzZXQoKTtcbiAgbm90ZUxpc3RFbC5hcHBlbmRDaGlsZChcbiAgICBnZXROZXdOb3RlRWxlbWVudChjdXJyZW50UHJvamVjdC5ub3Rlc1tjdXJyZW50UHJvamVjdC5ub3Rlcy5sZW5ndGggLSAxXSlcbiAgKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFRPT0RPT1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjcmF0Y2hQYWRUT09ET09cIiwgSlNPTi5zdHJpbmdpZnkoc2NyYXRjaFBhZCkpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdE5hbWUudmFsdWU7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gIG5ld1Byb2plY3RGb3JtLnJlc2V0KCk7XG4gIHByb2plY3RMaXN0RWwuYXBwZW5kQ2hpbGQoZ2V0TmV3UHJvamVjdEVsZW1lbnQobmV3UHJvamVjdCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0VE9PRE9PXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NyYXRjaFBhZFRPT0RPT1wiLCBKU09OLnN0cmluZ2lmeShzY3JhdGNoUGFkKSk7XG59XG5cbnByb2plY3RMaXN0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RDbGlja0hhbmRsZXIpO1xubm90ZUxpc3RFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbm90ZUNsaWNrSGFuZGxlcik7XG5zY3JhdGNoUGFkRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RDbGlja0hhbmRsZXIpO1xuXG5mdW5jdGlvbiBub3RlQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gIGxldCBub3RlSWQ7XG4gIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5ub3RlXCIpO1xuICBpZiAoZWxlbWVudCkge1xuICAgIG5vdGVJZCA9IGVsZW1lbnQuZGF0YXNldC5pZDtcbiAgfVxuXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLW5vdGVcIikpIHtcbiAgICBjdXJyZW50UHJvamVjdC5ub3RlcyA9IGN1cnJlbnRQcm9qZWN0Lm5vdGVzLmZpbHRlcihcbiAgICAgIChub3RlKSA9PiBub3RlLmlkICE9PSBub3RlSWRcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RUT09ET09cIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjcmF0Y2hQYWRUT09ET09cIiwgSlNPTi5zdHJpbmdpZnkoc2NyYXRjaFBhZCkpO1xuICAgIG5vdGVMaXN0RWwuaW5uZXJIVE1MID0gZ2V0SHRtbEZvck5vdGVMaXN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICBpZiAoY3VycmVudFByb2plY3Qubm90ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbXB0eU5vdGVFbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBhZGROb3RlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1wdHlOb3RlRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgYWRkTm90ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1ub3RlXCIpKSB7XG4gICAgbGV0IGNsaWNrZWROb3RlID0gY3VycmVudFByb2plY3Qubm90ZXMuZmluZCgobm90ZSkgPT4gbm90ZS5pZCA9PT0gbm90ZUlkKTtcblxuICAgIGVkaXROb3RlSWRFbC52YWx1ZSA9IGNsaWNrZWROb3RlLmlkO1xuICAgIG5ld05vdGVUaXRsZUVsLnZhbHVlID0gY2xpY2tlZE5vdGUudGl0bGU7XG4gICAgbmV3Tm90ZURlc2NyaXB0aW9uRWwudmFsdWUgPSBjbGlja2VkTm90ZS5kZXNjcmlwdGlvbjtcbiAgICBuZXdOb3RlRHVlRGF0ZUVsLnZhbHVlID0gY2xpY2tlZE5vdGUuZHVlRGF0ZTtcbiAgICBuZXdOb3RlUHJpb3JpdHlFbC52YWx1ZSA9IGNsaWNrZWROb3RlLnByaW9yaXR5O1xuICAgIG9wZW5Ob3RlTW9kYWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gIGxldCBpZDtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3RcIik7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIilcbiAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJvamVjdFwiKSk7XG4gICAgaWQgPSBlbGVtZW50LmRhdGFzZXQuaWQ7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgY3VycmVudFByb2plY3QgPSBpZFxuICAgICAgPyBwcm9qZWN0TGlzdC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3RJZCA9PT0gaWQpXG4gICAgICA6IHNjcmF0Y2hQYWQ7XG4gICAgbm90ZUxpc3RFbC5pbm5lckhUTUwgPSBnZXRIdG1sRm9yTm90ZUxpc3QoY3VycmVudFByb2plY3QpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdC5ub3Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGVtcHR5Tm90ZUVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGFkZE5vdGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbXB0eU5vdGVFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBhZGROb3RlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZVwiKSkge1xuICAgIHByb2plY3RMaXN0ID0gcHJvamVjdExpc3QuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3RJZCAhPT0gaWQpO1xuICAgIHByb2plY3RMaXN0RWwuaW5uZXJIVE1MID0gZ2V0SHRtbEZvclByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0VE9PRE9PXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXByb2plY3RcIikpIHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gc2NyYXRjaFBhZDtcbiAgICAgIHNjcmF0Y2hQYWRFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgICBsb2FkU2NyYXRjaFBhZCgpO1xuICAgICAgbm90ZUxpc3RFbC5pbm5lckhUTUwgPSBnZXRIdG1sRm9yTm90ZUxpc3QoY3VycmVudFByb2plY3QpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkU2NyYXRjaFBhZCgpIHtcbiAgaWYgKGN1cnJlbnRQcm9qZWN0Lm5vdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGVtcHR5Tm90ZUVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBhZGROb3RlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIHtcbiAgICBlbXB0eU5vdGVFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYWRkTm90ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICBwcm9qZWN0TGlzdEVsLmlubmVySFRNTCA9IGdldEh0bWxGb3JQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIG5vdGVMaXN0RWwuaW5uZXJIVE1MID0gZ2V0SHRtbEZvck5vdGVMaXN0KHNjcmF0Y2hQYWQpO1xufVxuXG5sb2FkU2NyYXRjaFBhZCgpO1xuXG5sb2FkUHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==