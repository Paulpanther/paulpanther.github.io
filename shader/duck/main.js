/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n}\\n\\ncanvas {\\n\\tposition: fixed;\\n\\twidth: 100vw;\\n\\theight: 100vh;\\n\\tmargin: 0;\\n\\tpadding: 0;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/duck.png":
/*!**********************!*\
  !*** ./src/duck.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c3fde9e1c857a9fd940f1e09743fc589.png\";\n\n//# sourceURL=webpack:///./src/duck.png?");

/***/ }),

/***/ "./src/gl.js":
/*!*******************!*\
  !*** ./src/gl.js ***!
  \*******************/
/*! exports provided: GLParams, GLContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLParams\", function() { return GLParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLContext\", function() { return GLContext; });\nconst resize = gl => {\n    const realToCSSPixels = window.devicePixelRatio;\n\n    const displayWidth  = Math.floor(gl.canvas.clientWidth  * realToCSSPixels);\n    const displayHeight = Math.floor(gl.canvas.clientHeight * realToCSSPixels);\n\n    if (gl.canvas.width  !== displayWidth ||\n        gl.canvas.height !== displayHeight) {\n\n        gl.canvas.width  = displayWidth;\n        gl.canvas.height = displayHeight;\n    }\n};\n\nconst createShader = (gl, type, source) => {\n    const shader = gl.createShader(type);\n    gl.shaderSource(shader, source);\n    gl.compileShader(shader);\n\n    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n    if (success) return shader;\n\n    console.log(\"Error compiling shader: \" + gl.getShaderInfoLog(shader));\n    gl.deleteShader(shader);\n};\n\nconst createProgram = (gl, vertexShader, fragmentShader) => {\n    const program = gl.createProgram();\n    gl.attachShader(program, vertexShader);\n    gl.attachShader(program, fragmentShader);\n    gl.linkProgram(program);\n\n    const success = gl.getProgramParameter(program, gl.LINK_STATUS);\n    if (success) return program;\n\n    console.log(\"Error linking program: \" + gl.getProgramInfoLog(program));\n    gl.deleteProgram(program);\n};\n\nconst texCoords = new Float32Array([\n\t\t0., 0.,\n\t\t1., 0.,\n\t\t0., 1.,\n\t\t0., 1.,\n\t\t1., 0.,\n\t\t1., 1.]);\n\nconst plane = new Float32Array([\n\t\t-1.,  1.,\n\t\t 1.,  1.,\n\t\t-1., -1.,\n\t\t-1., -1.,\n\t\t 1.,  1.,\n\t\t 1., -1.]);\n\nconst loadTexture = (gl, program) => {\n\tconst texCoordLocation = gl.getAttribLocation(program, 'a_texCoord')\n\tconst texCoordBuffer = gl.createBuffer();\n\tgl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);\n\tgl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);\n\tgl.enableVertexAttribArray(texCoordLocation);\n\tgl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);\n\n\tconst texture = gl.createTexture();\n\tgl.bindTexture(gl.TEXTURE_2D, texture);\n\n\tgl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n\tgl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n\tgl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);\n\tgl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);\n\n\treturn texture;\n};\n\nclass GLParams {\n\t\n\tconstructor() {\n\t\tthis.canvasId = 'c';\n\t\tthis.vertexShaderSource = false;\n\t\tthis.fragmentShaderSource = false;\n\t\tthis.uniforms = [];\n\t\tthis.image = false;\n\t}\n\n\taddImage(imgSrc) {\n\t\tconst img = new Image();\n\t\timg.src = imgSrc;\n\t\tthis.image = img;\n\t}\n\n\tvalidate() {\n\t\tif (!this.canvasId)\n\t\t\tconsole.error('Error: Canvas Id not defined');\n\t\tif (!this.vertexShaderSource)\n\t\t\tconsole.error('Error: Vertex-Shader Source not defined');\n\t\tif (!this.fragmentShaderSource)\n\t\t\tconsole.error('Error: Fragment-Shader Source not defined');\n\t}\n}\n\nclass GLContext {\n\n\tconstructor() {\n\t\tthis.clearColor = [0, 0, 0];\n\t\tthis.update = delta => {};\n\t}\n\n\tload(glParams) {\n\t\tglParams.validate();\n\t\n\t\tconst canvas = document.getElementById(glParams.canvasId);\n\t\tthis.gl = canvas.getContext('webgl');\n\n\t\tif (!this.gl)\n\t\t\tconsole.log('WebGL is not supported by your browser');\n\t\t\n   \t \tconst vertexShader = createShader(this.gl, this.gl.VERTEX_SHADER, glParams.vertexShaderSource);\n   \t\tconst fragmentShader = createShader(this.gl, this.gl.FRAGMENT_SHADER, glParams.fragmentShaderSource);\n\n    \tthis.program = createProgram(this.gl, vertexShader, fragmentShader);\n\n    \tthis.positionAttribLocation = this.gl.getAttribLocation(this.program, \"position\");\n\n\t    this.positionBuffer = this.gl.createBuffer();\n    \tthis.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);\n    \tthis.gl.bufferData(this.gl.ARRAY_BUFFER, plane, this.gl.STATIC_DRAW);\n\n\n\t\tthis.image = glParams.image;\n\t\tif (this.image) {\n\t\t\tloadTexture(this.gl, this.program);\n\t\t\tglParams.uniforms.push('texRes');\n\t\t}\n\n\t\tglParams.uniforms.push('resolution');\n\t\tglParams.uniforms.push('time');\n\n\t\tthis.uniforms = {};\n\t\tfor (let uniform of glParams.uniforms) {\n\t\t\tthis.uniforms[uniform] = {};\n\t\t\tthis.uniforms[uniform].id = this.gl.getUniformLocation(this.program, uniform);\n\t\t}\n\t}\n\n\tstartRender() {\n\t\tthis.start = Date.now();\n\t\t\n\t\tthis.running = true;\n\t\tthis.lastUpdateTime = Date.now();\n\t\t\n\t\tthis.interval = setInterval(this.selfUpdate.bind(this), 50);\n\t}\n\n\tselfUpdate() {\n\t\tif (!this.running)\n\t\t\tclearInterval(this.interval);\n\n\t\tconst delta = (Date.now() - this.lastUpdateTime) / 1000;\n\t\tthis.lastUpdateTime = Date.now();\n\n\t\tthis.uniforms['resolution'].value = [this.gl.canvas.width, this.gl.canvas.height];\n\t\tthis.uniforms['time'].value = (Date.now() - this.start) / 1000;\n\n\t\tthis.update(delta);\n\n\t\tif (this.image)\n\t\t\tthis.uniforms['texRes'].value = [this.image.width, this.image.height];\n\n\t\tthis.render(delta);\n\t}\n\n\trender(delta) {\n\t\t\n\t    resize(this.gl);\n\t    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);\n\t\n    \tthis.gl.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], 0);\n    \tthis.gl.clear(this.gl.COLOR_BUFFER_BIT);\n\n    \tthis.gl.useProgram(this.program);\n\n    \tthis.gl.enableVertexAttribArray(this.positionAttribLocation);\n    \tthis.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);\n    \tthis.gl.vertexAttribPointer(this.positionAttribLocation, 2, this.gl.FLOAT, false, 0, 0);\n\t\t\n\t\tfor (let i in this.uniforms) {\n\t\t\tconst uniform = this.uniforms[i];\n\t\t\tif (uniform.value instanceof Array) {\n\t\t\t\tif (uniform.value.length === 2) {\n\t\t\t\t\tthis.gl.uniform2fv(uniform.id, uniform.value);\n\t\t\t\t} else if (uniform.value.length === 3) {\n\t\t\t\t\tthis.gl.uniform3fv(uniform.id, uniform.value);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tthis.gl.uniform1f(uniform.id, uniform.value);\n\t\t\t}\n\t\t}\n\t\t\n\t\tif (this.image)\n\t\t\tthis.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.image);\n\n    \tthis.gl.drawArrays(this.gl.TRIANGLES, 0, 6);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/gl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gl.js */ \"./src/gl.js\");\n/* harmony import */ var _shader_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader/fragment.glsl */ \"./src/shader/fragment.glsl\");\n/* harmony import */ var _shader_fragment_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shader_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shader_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shader/vertex.glsl */ \"./src/shader/vertex.glsl\");\n/* harmony import */ var _shader_vertex_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shader_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _duck_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duck.png */ \"./src/duck.png\");\n/* harmony import */ var _duck_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_duck_png__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst params = new _gl_js__WEBPACK_IMPORTED_MODULE_1__[\"GLParams\"]();\nparams.canvasId = 'c';\nparams.fragmentShaderSource = _shader_fragment_glsl__WEBPACK_IMPORTED_MODULE_2___default.a;\nparams.vertexShaderSource = _shader_vertex_glsl__WEBPACK_IMPORTED_MODULE_3___default.a;\nparams.addImage(_duck_png__WEBPACK_IMPORTED_MODULE_4___default.a);\n\nconst gl = new _gl_js__WEBPACK_IMPORTED_MODULE_1__[\"GLContext\"]();\n\ngl.load(params);\ngl.startRender();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shader/fragment.glsl":
/*!**********************************!*\
  !*** ./src/shader/fragment.glsl ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform vec2 resolution;\\nuniform float time;\\n\\nvarying vec2 texCoord;\\nuniform sampler2D tex;\\nuniform vec2 texRes;\\n\\nvoid main() {\\n\\tvec2 coord = texCoord.xy;\\n\\tfloat coordModX = texRes.x / texRes.y;\\n\\tcoord.x *= coordModX;\\n\\tcoord.x += (1. - coordModX) / 2.;\\n\\n\\tfloat speed = mod(time * .5, 2.);\\n\\n\\tfloat dist = coord.y;\\n\\tfloat n = abs(log2(dist)) + speed;\\n\\n\\tfloat height = pow(2., ceil(n) - speed);\\n\\tfloat texOffsetY = 1. - mod(n, 1.);\\n\\tfloat mirror = mod(ceil(n), 2.) * 2. - 1.;\\n\\n\\tfloat xMargin = (1. - height) / 2.;\\n\\tfloat nMargin = mirror * .153;\\n\\n\\tfloat px = coord.x * height + xMargin + nMargin;\\n\\tpx = mirror < 0. ? 1. - px : px;\\n\\n\\tvec2 p = vec2(px, texOffsetY);\\n\\n\\tvec3 col = vec3(.1);\\n\\tvec4 img = texture2D(tex, p).rgba;\\n\\t\\n\\tcol += img.a;\\n\\n\\tgl_FragColor = vec4(col, 1.);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/shader/fragment.glsl?");

/***/ }),

/***/ "./src/shader/vertex.glsl":
/*!********************************!*\
  !*** ./src/shader/vertex.glsl ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"attribute vec2 position;\\nattribute vec2 a_texCoord;\\n\\nvarying vec2 texCoord;\\n\\nvoid main() {\\n\\tgl_Position = vec4(position, 0, 1);\\n\\ttexCoord = a_texCoord;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/shader/vertex.glsl?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });