module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/career.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/assets/accordion-arrow-e.svg":
/*!******************************************!*\
  !*** ./src/assets/accordion-arrow-e.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE2IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04LjMyODQxIDguNzc0MjFDOC4wNTk2NSA4Ljc2ODIyIDcuNzkzMjEgOC42NTk2MiA3LjU5Mjg2IDguNDUwMjRMMS4yODg0NSAxLjg1ODQ0QzAuODg3NDA0IDEuNDM5MTIgMC45MDIyMiAwLjc3NDA4MSAxLjMyMTU0IDAuMzczMjA0QzEuNzQwNjkgLTAuMDI3Njc3MSAyLjQwNTU5IC0wLjAxMjg2MzMgMi44MDY2NyAwLjQwNjI5Mkw4LjM4NDkgNi4yMzkwOEwxNC4yMTc0IDAuNjYwNzE2QzE0LjYzNjcgMC4yNTk4MzkgMTUuMzAxNSAwLjI3NDY1MSAxNS43MDI0IDAuNjkzODAyQzE2LjEwMzYgMS4xMTI5NiAxNi4wODg4IDEuNzc4IDE1LjY2OTMgMi4xNzkwNEw5LjA3NzY2IDguNDgzNTJDOC44NjgwOSA4LjY4MzggOC41OTcwOCA4Ljc4MDIgOC4zMjg0MSA4Ljc3NDIxWiIgZmlsbD0iIzAyMDczRSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/accordion-arrow.svg":
/*!****************************************!*\
  !*** ./src/assets/accordion-arrow.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDkgMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04LjY5ODg4IDcuNTAwMDNDOC42OTg4OCA3Ljc2ODg2IDguNTk2MjMgOC4wMzc2NSA4LjM5MTM3IDguMjQyNjFMMS45NDE2MyAxNC42OTIzQzEuNTMxMzUgMTUuMTAyNiAwLjg2NjE0MyAxNS4xMDI2IDAuNDU2MDI2IDE0LjY5MjNDMC4wNDU5MDgxIDE0LjI4MjIgMC4wNDU5MDgxIDEzLjYxNzEgMC40NTYwMjYgMTMuMjA2OEw2LjE2MzExIDcuNTAwMDNMMC40NTYyMjUgMS43OTMyNEMwLjA0NjEwNzQgMS4zODI5NSAwLjA0NjEwNzQgMC43MTc5NDggMC40NTYyMjUgMC4zMDc4NjNDMC44NjYzNDMgLTAuMTAyNjE5IDEuNTMxNTUgLTAuMTAyNjE5IDEuOTQxODMgMC4zMDc4NjNMOC4zOTE1NyA2Ljc1NzQ0QzguNTk2NDYgNi45NjI1IDguNjk4ODggNy4yMzEyOSA4LjY5ODg4IDcuNTAwMDNaIiBmaWxsPSIjMDIwNzNFIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/arrowEven.svg":
/*!**********************************!*\
  !*** ./src/assets/arrowEven.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC40ODEyMDEgMTAuMjU3MUMwLjQ4MTIwMSAxMC4yNTcxIDkyLjc4MTIgODEuNzg0NyAxOTUuNDgxIDEwLjI1NzEiIHN0cm9rZT0iI0MyQ0JERSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNSIvPgo8cGF0aCBkPSJNMTgwLjcgMy40NzQ1NUMxODAuNyAzLjQ3NDU1IDE5OS44MTUgLTIuMDUxNzcgMjAxLjYzNyA0LjIwOTE2QzIwMy40NTkgMTAuNDcwMSAyMDIuMDkzIDE2Ljk0NDQgMTk2LjE3NiAyNS44MTQyIiBzdHJva2U9IiNDMkNCREUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/arrowOdd.svg":
/*!*********************************!*\
  !*** ./src/assets/arrowOdd.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC45OTk3NTYgMzIuNzE5NUMwLjk5OTc1NiAzMi43MTk1IDkzLjI5OTggLTM4LjgwODEgMTk2IDMyLjcxOTUiIHN0cm9rZT0iI0MyQ0JERSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNSIvPgo8cGF0aCBkPSJNMTgxLjIxOSAzOS40OTc2QzE4MS4yMTkgMzkuNDk3NiAyMDAuMzM0IDQ1LjAyNCAyMDIuMTU2IDM4Ljc2M0MyMDMuOTc4IDMyLjUwMTkgMjAyLjYxMSAyNi4wMjc1IDE5Ni42OTQgMTcuMTU3NSIgc3Ryb2tlPSIjQzJDQkRFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/banner-icon-1-1.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-1.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0MyA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjIgMTMuMzkxMUwwIDE3Ljk5MTFMMTIuNSA0Ny45OTExTDQyLjUgMzUuNDkxMUwzNy43IDIzLjg5MTFDMzcuNiAyMy43OTExIDM3LjYgMjMuNzkxMSAzNy41IDIzLjc5MTFDMzcuNCAyMy43OTExIDM3LjQgMjMuNjkxMSAzNy4zIDIzLjY5MTFDMzcuMiAyMy41OTExIDM3LjEgMjMuNTkxMSAzNi45IDIzLjU5MTFDMzYuOSAyMy41OTExIDM2LjkgMjMuNTkxMSAzNi44IDIzLjU5MTFIMzYuN0gzNi42SDM2LjVDMzYuNCAyMy41OTExIDM2LjQgMjMuNTkxMSAzNi4zIDIzLjU5MTFIMzYuMkMzNi4xIDIzLjU5MTEgMzYgMjMuNTkxMSAzNS45IDIzLjY5MTFDMzUuNCAyMy44OTExIDM1LjEgMjQuMjkxMSAzNSAyNC42OTExQzM0LjYgMjYuMTkxMSAzMy41IDI3LjU5MTEgMzEuOSAyOC4xOTExQzI5LjIgMjkuMjkxMSAyNi4xIDI3Ljk5MTEgMjQuOSAyNS4yOTExQzIzLjggMjIuNTkxMSAyNS4xIDE5LjQ5MTEgMjcuOCAxOC4yOTExQzI5LjQgMTcuNTkxMSAzMS4xIDE3Ljc5MTEgMzIuNSAxOC41OTExQzMyLjkgMTguNzkxMSAzMy40IDE4Ljg5MTEgMzMuOSAxOC42OTExQzM0IDE4LjY5MTEgMzQuMSAxOC41OTExIDM0LjEgMTguNTkxMUMzNC4xIDE4LjU5MTEgMzQuMiAxOC41OTExIDM0LjIgMTguNDkxMUwzNC4zIDE4LjM5MTFMMzQuNCAxOC4yOTExTDM0LjUgMTguMTkxMUwzNC42IDE4LjA5MTFDMzQuNiAxOC4wOTExIDM0LjYgMTguMDkxMSAzNC42IDE3Ljk5MTFDMzQuNyAxNy44OTExIDM0LjcgMTcuNzkxMSAzNC44IDE3LjY5MTFDMzQuOCAxNy41OTExIDM0LjggMTcuNTkxMSAzNC44IDE3LjQ5MTFDMzQuOCAxNy4zOTExIDM0LjggMTcuMzkxMSAzNC44IDE3LjI5MTFMMzAgNS41OTExMUwxOC44IDEwLjI5MTFDMTggMTAuNDkxMSAxNy4yIDEwLjE5MTEgMTYuOSA5LjM5MTExQzE2LjcgOC44OTExMSAxNi44IDguMzkxMTIgMTcgNy45OTExMkMxNy44IDYuNTkxMTEgMTggNC44OTExMSAxNy4zIDMuMjkxMTFDMTYuMiAwLjU5MTExNSAxMy4xIC0wLjcwODg4NSAxMC4zIDAuMzkxMTE1QzcuNiAxLjQ5MTExIDYuMyA0LjU5MTExIDcuNCA3LjM5MTEyQzggOC45OTExMiA5LjQgOS45OTExMSAxMC45IDEwLjQ5MTFDMTEuMyAxMC41OTExIDExLjcgMTAuODkxMSAxMS45IDExLjM5MTFDMTIuMyAxMi4wOTExIDExLjkgMTIuOTkxMSAxMS4yIDEzLjM5MTFaIiBmaWxsPSIjREFFMkU4Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/banner-icon-1-2.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-2.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA1MyA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ5LjAxNDYgMjQuNDk5NkM0OC43OTM2IDI1LjQ3NDkgNDcuODM2NiAyNi4wNzgzIDQ2Ljg2MTMgMjUuODU3M0w0My4zNTAzIDI1LjA2MTdMNDEuODI1NSAzMS43OTExTDM0Ljg2NTQgMjMuMTM5MUwyMy40NTQ3IDIwLjU1MzRDMjIuNDc5NCAyMC4zMzI1IDIxLjg3NiAxOS4zNzU0IDIyLjA5NyAxOC40MDAyTDI1LjY3NzEgMi42MDA3MUMyNS44OTgxIDEuNjI1NDMgMjYuODU1MSAxLjAyMjAxIDI3LjgzMDQgMS4yNDMwMUw1MS4yMzcgNi41NDY4OEM1Mi4yMTIzIDYuNzY3ODggNTIuODE1NyA3LjcyNDg5IDUyLjU5NDcgOC43MDAxN0w0OS4wMTQ2IDI0LjQ5OTZaIiBmaWxsPSIjREFFMkU4Ii8+CjxwYXRoIGQ9Ik01LjI2NjYgMzguMzc0OEw3LjI1NTU2IDI5LjU5NzNMNS42OTUxMiAyOS4yNDM3QzMuNjQ3MDQgMjguNzc5NiAyLjM2NDc2IDI2Ljc0NiAyLjgyODg1IDI0LjY5NzlMNi40MDg5NyA4Ljg5ODQzQzYuODczMDYgNi44NTAzNSA4LjkwNjcyIDUuNTY4MDcgMTAuOTU0OCA2LjAzMjE2TDM0LjM2MTQgMTEuMzM2QzM2LjQwOTUgMTEuODAwMSAzNy42OTE3IDEzLjgzMzggMzcuMjI3NyAxNS44ODE5TDMzLjY2OTYgMzEuNTgzOEMzMy4yMDU2IDMzLjYzMTkgMzEuMTcxOSAzNC45MTQxIDI5LjEyMzggMzQuNDUwMUwxOC4zOTU4IDMyLjAxOTFMNS4yNjY2IDM4LjM3NDhaTTUuNzk2MjUgMjYuMjg5M0wxMi4wNjI3IDI3LjQ4MjdMMTAuMDAyIDMzLjE2NEwxOC4wMTE5IDI4LjgzMDdMMzAuOTEwMyAzMS41MjY5TDM0LjQwMiAxNC4xMTc1TDEwLjI4OCA4Ljg3OTk0TDUuNzk2MjUgMjYuMjg5M1oiIGZpbGw9IiNEQUUyRTgiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/banner-icon-1-3.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-3.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM5IiBoZWlnaHQ9IjQ1NiIgdmlld0JveD0iMCAwIDMzOSA0NTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMDEuODQgNjAuMjg0M0wzMDMuNzk4IDU1LjkwMjFDMjg3LjYxOCA1OS4xMjE3IDI3My40MDEgNjUuMjYyMiAyNjEuNDUyIDc0LjMxMDhDMjQ0LjYgODcuMDY0IDIzNi4yNjMgMTAyLjUxNiAyMzIuMjIzIDExMy4yMjdDMjMwLjQzMSAxMTguMDAyIDIyOS4wOTcgMTIyLjg5OCAyMjguMzE0IDEyNy42MTRDMjIyLjYzMiAxMjcuMzczIDIxNi4yNjIgMTI4LjMzNiAyMDkuNSAxMzAuNDY1QzE5Ni45OTkgMTM0LjM5MiAxODguMTY2IDE0NC4yNTkgMTgxLjY1NCAxNjEuNTA2QzE3NS45IDE3Ni43NzEgMTcyLjU2OSAxOTUuODg3IDE2OC43MDEgMjE4LjAyQzE2NS4xMiAyMzguNTU2IDE2MS4wNiAyNjEuODM3IDE1NC4yOCAyODQuNjA2QzE0Ni41NjUgMzEwLjYxNiAxMzYuNDQ3IDMzMi4xMDYgMTIzLjM4OSAzNTAuMjhDMTEyLjU5OCAzNjUuMjk1IDk5LjY3MzMgMzc3LjEgODQuOTkzNiAzODUuMzc1QzcyLjIxMDggMzkyLjU2MSA1Ny42ODYyIDM5Ny4yODcgNDEuNzcyIDM5OS40MzNDMjcuNzgzNyA0MDEuMzM0IDEzLjcyNTYgNDAxLjI4NyAwLjAxNDg3OTkgMzk5Ljg0MkwxMC4zOTYzIDQwNC40ODJDMjAuODk1NCA0MDUuMTMgMzEuNjI2OCA0MDQuNzMzIDQyLjMxOTQgNDAzLjI3NUM1OC43MTg2IDQwMS4wNDcgNzMuNzI0MyAzOTYuMTUzIDg2LjkzMjggMzg4LjczMkMxMDIuMTE1IDM4MC4xOTIgMTE1LjQ0MiAzNjguMDEzIDEyNi41NyAzNTIuNTMxQzEzOS44NzQgMzMzLjk5OSAxNTAuMTc1IDMxMi4xNDUgMTU4LjAyIDI4NS43MDJDMTY0Ljg1MSAyNjIuNzIzIDE2OC45NDEgMjM5LjMyOCAxNzIuNTI2IDIxOC42ODdDMTc2LjM1IDE5Ni43NDcgMTc5LjY3MSAxNzcuNzk3IDE4NS4yOTMgMTYyLjg3N0MxOTEuMzM1IDE0Ni44MjUgMTk5LjQwNyAxMzcuNzA0IDIxMC42NjkgMTM0LjE1OUMyMTcuNjgxIDEzMS45NSAyMjMuMzQyIDEzMS4zMyAyMjcuNzYzIDEzMS40NzZDMjI3LjUzOCAxMzMuNjUzIDIyNy40MjQgMTM1Ljc3MyAyMjcuNDM2IDEzNy44QzIyNy41MDQgMTQ1LjE1MyAyMjkuMjQzIDE1MC44NjkgMjMyLjMyNyAxNTMuODY0QzIzNC43OTkgMTU2LjI2OCAyMzguMDQ0IDE1Ni44NDYgMjQxLjQ0NiAxNTUuNDVDMjQ0Ljk5MyAxNTQuMDEzIDI0Ny42MDQgMTUxLjcxIDI0OC45OTkgMTQ4Ljc3OUMyNTAuMzM5IDE0NS45NzIgMjUwLjQ1NiAxNDIuNzQ2IDI0OS4zNDIgMTM5LjY5NEMyNDcuNTMzIDEzNC43NTYgMjQyLjgzNyAxMzAuODI3IDIzNi40MjYgMTI4LjkxOUMyMzUuMDcyIDEyOC41MDYgMjMzLjY2MyAxMjguMjE3IDIzMi4xODcgMTI3Ljk4M0MyMzIuOTUgMTIzLjU5OCAyMzQuMTg3IDExOS4wNjQgMjM1Ljg2MiAxMTQuNTk3QzIzOS43MzEgMTA0LjM2NCAyNDcuNjggODkuNTg5OSAyNjMuNzkgNzcuMzk4OEMyNzQuNjE4IDY5LjIzMjggMjg3LjM2MiA2My41MTk2IDMwMS44NCA2MC4yODQzWk0yMzUuMzI5IDEzMi42NjVDMjQwLjUyOSAxMzQuMjIzIDI0NC4zMTMgMTM3LjI3NiAyNDUuNjg2IDE0MS4wNEMyNDcuMzE5IDE0NS41NTkgMjQ1LjA3NiAxNDkuODE0IDIzOS45NiAxNTEuODkxQzIzOC4wMDYgMTUyLjY3OCAyMzYuMzg5IDE1Mi40MjMgMjM1LjA0OCAxNTEuMTIyQzIzMi43NTggMTQ4Ljg4NSAyMzEuMzk4IDE0NC4wNDEgMjMxLjMzNyAxMzcuODJDMjMxLjMxMiAxMzUuOTE0IDIzMS40MTUgMTMzLjkxNyAyMzEuNjU0IDEzMS44NTJDMjMzLjA1OSAxMzIuMDU1IDIzNC4yNzYgMTMyLjM0MyAyMzUuMzI5IDEzMi42NjVaIiBmaWxsPSIjREFFMkU4Ii8+CjxwYXRoIGQ9Ik0zMzguNzQ5IDQ5Ljc0NkwyODQuODg5IDM4LjI1MTVMMjkyLjYzNyA1Mi42NTgzTDMyNS4wNTQgNTEuNjY5M0wyOTUuNDk4IDU3Ljk3NzRMMjk1LjUwNSA1Ny45OTEyTDI5NS40OTUgNTcuOTc1MkwyODYuNzUxIDY3Ljg5MTdMMjk5Ljg0MSA2Ni4wNTM0TDMwNS4zNDYgNzYuMjg4MkwzMzguNzQ5IDQ5Ljc0NloiIGZpbGw9IiNEQUUyRTgiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/banner-icon-1-4.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-4.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM4IiBoZWlnaHQ9IjMxNiIgdmlld0JveD0iMCAwIDMzOCAzMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMTguMzI4IDg1LjgyODFDMTEzLjQzMyA3NC4zMjA1IDEwNi4wMSA2NC4wMzUgOTYuODY2MyA1Ni4xMTlDODkuMDgzNyA0OS4zNTMgNzkuNzQ4IDQ0LjA4MjEgNjkuNjkwNiA0MC43MDM2TDcxLjc2OTEgMzcuMTc3M0M4Mi4xNCA0MC44MSA5MS41MTQxIDQ2LjE3MzEgOTkuNDkyOSA1My4wNzc5QzEwOS4wOTIgNjEuNDAxMiAxMTYuODc0IDcyLjE3NyAxMjIuMDE3IDg0LjI0NzZDMTI3LjE1OSA5Ni4zMTgyIDEyOS41MDIgMTA5LjQwNCAxMjguODI5IDEyMi4xMDNDMTI4LjY0NCAxMjUuNjggMTI4LjIxMyAxMjkuMjAzIDEyNy41NjEgMTMyLjY2N0MxMzguNzg1IDE0NyAxNDUuODcxIDE2My44MzIgMTUxLjgxOSAxODAuMDRDMTUzLjI3MyAxODMuOTggMTU0LjY5NCAxODguMDE2IDE1Ni4wNjMgMTkxLjkwNUMxNjEuMTAyIDIwNi4xMTcgMTY2LjMwNSAyMjAuNzk2IDE3My42MTUgMjM0LjE0NEMxODEuODYxIDI0OS4yMDMgMTkzLjI4MyAyNjMuMDA0IDIwNi42NDggMjc0LjA1OEMyMjAuMzg1IDI4NS40MjMgMjM1LjY2IDI5My43MDggMjUyLjA2IDI5OC42NjlDMjU4Ljc5MyAzMDAuNjkxIDI2NS43IDMwMi4xNDIgMjcyLjYxMiAzMDIuOTk1TDI3MC40MTEgMzA2LjcyOEMyNjMuNzgzIDMwNS43ODcgMjU3LjMwMSAzMDQuNDAxIDI1MC45MTIgMzAyLjQ2NkMyNDAuOTE5IDI5OS40NSAyMzEuMzE0IDI5NS4yMjUgMjIyLjIzNCAyODkuODczQzIxNS45NCAyODYuMTY0IDIwOS44ODIgMjgxLjg5NyAyMDQuMSAyNzcuMTIyQzE5MC4zNjMgMjY1Ljc1NyAxNzguNjAzIDI1MS41NDcgMTcwLjExIDIzNi4wNDJDMTYyLjY1OCAyMjIuNDI0IDE1Ny4zODUgMjA3LjU4OCAxNTIuMzEgMTkzLjI0QzE1MC45NDIgMTg5LjM1IDE0OS41MTEgMTg1LjMzMiAxNDguMDYzIDE4MS40MTlDMTQyLjU4IDE2Ni41MDUgMTM2LjE1NiAxNTEuMTA2IDEyNi40MDIgMTM3Ljc3OEMxMjMuMDQgMTUwLjY3NyAxMTYuNDY4IDE2Mi4xMDEgMTA3LjQwMSAxNzAuNDA4QzEwMC42ODMgMTc2LjU3NyA5Mi40MjE0IDE4MS4wMDIgODMuNTE2MiAxODMuMjE3Qzc0LjI4MyAxODUuNTE2IDY0Ljk4NTYgMTg1LjI1MSA1Ni42MTY5IDE4Mi40MjhDNDguMDQ1OSAxNzkuNTU0IDQwLjQwNzEgMTczLjY4NCAzNS4wNTQ3IDE2NS45NEMyOS41NzM5IDE1Ny45ODEgMjcuMTA2NyAxNDguNzYyIDI4LjA3MzIgMTM5Ljk2OEMyOS4xMzg4IDEzMC4yNTkgMzQuMzM3NiAxMjEuMDg1IDQyLjcxMDIgMTE0LjE1M0M1MC42MjY5IDEwNy42MDEgNjAuODg0MSAxMDMuNTY0IDcwLjg3NzYgMTAzLjA4QzgwLjU1NjMgMTAyLjYyIDkwLjM1NDggMTA0LjgyNiA5OS45NDcxIDEwOS42MjJDMTA4LjYzMiAxMTMuOTUzIDExNi44NDMgMTIwLjM0NiAxMjMuNjk5IDEyOC4wOTVDMTIzLjg0NyAxMjguMjc2IDEyNC4wMDYgMTI4LjQzOSAxMjQuMTU1IDEyOC42MTlDMTI0LjQ3NyAxMjYuNDIyIDEyNC42ODUgMTI0LjE4IDEyNC44MDUgMTIxLjkzM0MxMjUuNDY1IDEwOS44MDYgMTIzLjIyMyA5Ny4zMzU3IDExOC4zMjggODUuODI4MVpNMTIwLjczMyAxMzAuNzI4QzExNC4yMDkgMTIzLjM2IDEwNi40MDUgMTE3LjI5OSA5OC4xNzAxIDExMy4xODdDODkuMTgyOCAxMDguNzAxIDgwLjA2MzMgMTA2LjY0IDcxLjA3NiAxMDcuMDY4QzYxLjk0NDkgMTA3LjUwNCA1Mi41MzQxIDExMS4yMDUgNDUuMjgwOSAxMTcuMjIxQzM3LjcxNDcgMTIzLjQ5MyAzMy4wMTg5IDEzMS43MzUgMzIuMDYxNyAxNDAuMzk1QzMwLjI5NDIgMTU2LjM2NiA0MS42NTk3IDE3My4xNzEgNTcuOTE2NCAxNzguNjUxQzY1LjU1MDQgMTgxLjIyNiA3NC4wODA3IDE4MS40NTYgODIuNTc1OCAxNzkuMzQ4QzkwLjgzNTEgMTc3LjI4NiA5OC40ODMxIDE3My4xOTUgMTA0LjcyMiAxNjcuNDg1QzExMy45MjIgMTU5LjA3IDEyMC4zOTQgMTQ3LjE0NyAxMjMuMjczIDEzMy43MzJDMTIyLjQ1IDEzMi42OSAxMjEuNTk3IDEzMS43MDEgMTIwLjczMyAxMzAuNzI4WiIgZmlsbD0iI0RBRTJFOCIvPgo8cGF0aCBkPSJNMzMuOTk5MyAyNi42MDUxTDg1LjEzMTQgMjAuMzQzOEw3Ni43MjIzIDMzLjEyNzFMNDYuNjAwNCAyOS41MjgyTDczLjYxNzcgMzcuODQ2OEw3My42MDk3IDM3Ljg1OUw3My42MjAyIDM3Ljg0NDlMODAuOTQ4MiA0Ny44MDY2TDY4LjkwMzYgNDUuMDEyN0w2Mi45Mjk4IDU0LjA5NDFMMzMuOTk5MyAyNi42MDUxWiIgZmlsbD0iI0RBRTJFOCIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/banner-icon-1-5.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-5.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-icon-1-5-6f6037481c286ac1b5b7ede808e0a314.svg";

/***/ }),

/***/ "./src/assets/banner-icon-1-6.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-6.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-icon-1-6-0de6ddc0c0bb50bda0b3e0348e02891f.svg";

/***/ }),

/***/ "./src/assets/gaurav.png":
/*!*******************************!*\
  !*** ./src/assets/gaurav.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/gmail.png":
/*!******************************!*\
  !*** ./src/assets/gmail.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gmail-2c1a7560c88ea83e6b2593cd07af8ad8.png";

/***/ }),

/***/ "./src/assets/hero.png":
/*!*****************************!*\
  !*** ./src/assets/hero.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hero-bdd71ba1bdab49b214f8174a81063078.png";

/***/ }),

/***/ "./src/assets/patternBG.png":
/*!**********************************!*\
  !*** ./src/assets/patternBG.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/patternBG-f25af38e357096ca23290d5f5bcb3355.png";

/***/ }),

/***/ "./src/assets/placeholder.png":
/*!************************************!*\
  !*** ./src/assets/placeholder.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/placeholder-cfc4da7810da241e0e6b2d8f3772ef84.png";

/***/ }),

/***/ "./src/assets/service/service1.png":
/*!*****************************************!*\
  !*** ./src/assets/service/service1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/service/service2.png":
/*!*****************************************!*\
  !*** ./src/assets/service/service2.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/service/service3.png":
/*!*****************************************!*\
  !*** ./src/assets/service/service3.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/social/facebook.png":
/*!****************************************!*\
  !*** ./src/assets/social/facebook.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHzSURBVHgBrVVPKHxRFD7nmpqffqnZKKNotiR/tv5krJGxEVZjZSjFTigkSyELZjWz828zQrIyg2xNUQqLGYoNpQya0bzj3GdmMPPumwVfvW7fffd959xz7v0eggGcLp8tXvjmRhDNTGsRwCHnCSDCQxiItk7WBvxG32L2RFOX16VZNB8Q2sAcESKazhYu+E4aerzzJGiB4/yD/LAhoqusuh1uz3ZCOYL13d5JRBpVfW0vLoKi/1beEkLiPZmZ5y06y2vabCy6n+JSbNnN0XwqoaWJdijhUeL04g6GZrZz1okkdh5t9AfEZxicBAXG+lsyYmbQCsAnm2nRs0t10Qh1lXZ9vIo+wtjcvokk8clIuC2AokM/EHkQe43D/cOz6RokzSlU2dVVlsLmYu8Xr/jk4x6nWhCxhmtItaoF9qza2fPX0iFUb64iDzC7cvDFuYaSr++dgRlE6jrlIPaagL3Dy288rvNrFlYCIcwZYhj+CKRRlDNMhuDvEBBWa9zP/X6C3yMijUIE/SNPgqgPfgnpPHLUu3y0Ohjg87hotFAeZvnEXhJKMTaVjI398MPG7uUpMrnXhmKcyPGqZzjNf/jhzflusKyqNcohpUubGyzXXSRFz/G6ZyErgDGkabBwB/ufI32b0r8AAi1kfSv0BwN9Oc38AOIjthXcxvpnAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/social/github.png":
/*!**************************************!*\
  !*** ./src/assets/social/github.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIdSURBVHgBlVSxVttAENw96RlH+BERS0Apf0FU0sV06XCZLrhLF1IlHbgLVZwvCPmCJGWqmC4lZTrkDox4TxQoiW35mLMEPtsIy1P4dHuzc3fr2SMqABugguA8AdMUe8xil1n6oGWCMpKSTzF+HQySThRFwUJB1332lpkPJyJ5kAF4ny8uwrYeNfTJxob7BaQPECvTQow3fGlZlh3H8c85Qdd1PjHTG1oSyNm2rCdeHP/9cS/oulXUiz9mVzmWMmmC+h+xbYwBgoGU9Af1VKf6h9hRvz9sGgav49sHz69UrOubm/g3p1etnmHByzZt9XrhYYHDIc9RvINsGmGTmlCn08QI/2Jhi0gpda69smLuCdRgVycZxqBdUA/cpD29AdUFxroW6Jyfz3srD4qrciYRfi50v6HoAS0J5HQnM+mJmeV1Wh5P9YnIbHGHF7Q8fO37FIKjEy1gb246+1QQqk11hwBdo1y2SAh+pRqfUtM2VlctgklP8oTU47G2Vnk/aYYUsNGRZmycdZQ0mc0DWKmeviz0/fLyqqkngfuNxs6Y9asMer2rmkiFWLWaJ4QJMr9TtUhJ4nr2dNik+9BLhHhrnKF+wjDsYFABEOVrtNBOv5/UHjI5rhnRPFq4yfG9oELWvy1cd79UMs5KJfPXcCgatBhTvT/lQ7WAwqqaqVP4QohH+loGoxHtFH1IqFqtNlzX9mfjW1u25zhOPS/vFgZWwWhRHTC0AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/social/twitter.png":
/*!***************************************!*\
  !*** ./src/assets/social/twitter.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGpSURBVHgBnZRLTsMwEIb/cVuExCblJbELJ6HcIIgGwQpyAsQJUG8AJ6CsAKWIcIL2BpQTNDsWvIIEEmoSD3YoJSltUvovEntm8nmcGZugZJ31DM9ZD1CguvtYIyofA1xT0wDEXtjvN7y9NT/xMQekA+3WazsMPx3tmATbvnqyREnc/HEQfLDCEMPdXlyn3YtXM65wTztYxk7LXumMA9rXLz0wzAnrJdkKiXsxNKlgolLbvn4+sy4ezNGt5sC0DMl4u7KXTgZbfmmrVy27FW7KiG9jGXYrpZIBUb7LAcKtLyYs0gWpLCyY6gMNNTCbAgWs6oGYnzeMBEYorPIkMdD9GYvLvaoPbcj/RwVAvh8Ck6eMjoDZMySWXgbo7qx2meMtlXoH/5Vqt3Sr/bYNRI1GKz2NYtnI8lOqu09NIrGP6dNruvWqk7aI9KRlLx9ASh3QQSELfhiiMWoWowYm9lWwiXx1wz5tet8dkl1Hn+VoTh4ShAFmC/nNHTDzafQuTjynGoxPHIOzCnFAgjYm9KOvQOd5oAwwLevmwSxHZTNxqvst/Kj4RZC0vgBNcLLqAVu18wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/team/arrow-right.png":
/*!*****************************************!*\
  !*** ./src/assets/team/arrow-right.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADlSURBVHgBlZC7DcIwEEAvxhR0jMAIsAkbgDdIAQEqoOEbCZjAfAaBDcgGyQakQUiRcoejJCJFQuxXuDjr6dlnjdbyzHjjFb3j5XEhQtCEJQch2c0We9pr2TESMzpNxnxnf5ubipDWcTHeXvy6OquY19arxGK99O9/xYyuqj+drbRNxYQ2ATuMd1eZ13XFFKKhqt+dleybiQkWtNGC0Egkokcjxp47Ew+uZagCES7dqTjmo1oxqXAksZmJoDjnJhUd0QNA4U6EV3FfIhKc9tOBDTXw38sgQFQVtTHQgOWV6JOuGTT5AqWrZsg3kwliAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/team/member1.png":
/*!*************************************!*\
  !*** ./src/assets/team/member1.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member1-c7a57e2722bbb9f847c7675f26aece15.png";

/***/ }),

/***/ "./src/assets/team/member2.png":
/*!*************************************!*\
  !*** ./src/assets/team/member2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member2-41ac94d8b0fee3910a12563fb6957a93.png";

/***/ }),

/***/ "./src/assets/team/member3.png":
/*!*************************************!*\
  !*** ./src/assets/team/member3.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member3-143a30cf7323eee43eb4c1dd38a170b9.png";

/***/ }),

/***/ "./src/assets/team/member4.png":
/*!*************************************!*\
  !*** ./src/assets/team/member4.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member4-806a2be6de64d40098cdc1f069a3b60a.png";

/***/ }),

/***/ "./src/assets/techvestors-logo.png":
/*!*****************************************!*\
  !*** ./src/assets/techvestors-logo.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/telephone.png":
/*!**********************************!*\
  !*** ./src/assets/telephone.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/telephone-e32444726264e197038d4e56a63758f1.png";

/***/ }),

/***/ "./src/assets/whyus/erp.png":
/*!**********************************!*\
  !*** ./src/assets/whyus/erp.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/erp-5864bb01f3df46abcae9d49c81635fa5.png";

/***/ }),

/***/ "./src/assets/whyus/social.png":
/*!*************************************!*\
  !*** ./src/assets/whyus/social.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/social-2ab464bea643f4036390f86581422812.png";

/***/ }),

/***/ "./src/components/SectionHeading.js":
/*!******************************************!*\
  !*** ./src/components/SectionHeading.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Zoom */ "react-reveal/Zoom");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\SectionHeading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsxRuntime classic */

/** @jsx jsx */



const SectionHeading = _ref => {
  let {
    title,
    description
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "description"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    sx: styles.heading
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_2___default.a, {
    left: true,
    cascade: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, title)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_2___default.a, {
    left: true,
    cascade: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, description)));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionHeading);
const styles = {
  heading: {
    textAlign: 'center',
    maxWidth: 660,
    margin: ['0 auto 60px']
  },
  title: {
    fontFamily: 'heading',
    fontWeight: 700,
    fontSize: [5, null, null, 26, null, 30, 9],
    lineHeight: [1.33, 1.33, 1.48],
    letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px'
    }
  },
  description: {
    color: 'heading',
    fontSize: [1, null, null, 2],
    lineHeight: [1.58, 1.58, 1.58, 2.2],
    maxWidth: ['none', 'none', 'none', 'none', 790],
    margin: '15px auto 0'
  }
};

/***/ }),

/***/ "./src/components/accordion/accordion.js":
/*!***********************************************!*\
  !*** ./src/components/accordion/accordion.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-accordion */ "./src/components/accordion/base-accordion.js");
/* harmony import */ var assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/accordion-arrow.svg */ "./src/assets/accordion-arrow.svg");
/* harmony import */ var assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/accordion-arrow-e.svg */ "./src/assets/accordion-arrow-e.svg");
/* harmony import */ var assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "./src/components/accordion/shared.js");
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\accordion\\accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Accordion(_ref) {
  let {
    items
  } = _ref,
      props = _objectWithoutProperties(_ref, ["items"]);

  const openIcon = __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "open icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 20
    }
  });

  const closeIcon = __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "close icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  });

  return __jsx(_base_accordion__WEBPACK_IMPORTED_MODULE_2__["BaseAccordion"], _extends({
    stateReducer: Object(_shared__WEBPACK_IMPORTED_MODULE_5__["combineReducers"])(_shared__WEBPACK_IMPORTED_MODULE_5__["single"], _shared__WEBPACK_IMPORTED_MODULE_5__["preventClose"])
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), ({
    openIndexes,
    handleItemClick
  }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, items.map((item, index) => __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["AccordionItem"], {
    key: item.title,
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["AccordionButton"], {
    onClick: () => handleItemClick(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, openIndexes.includes(index) ? openIcon : closeIcon), item.title), __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["AccordionContents"], {
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, item.contents)))));
}

/***/ }),

/***/ "./src/components/accordion/base-accordion.js":
/*!****************************************************!*\
  !*** ./src/components/accordion/base-accordion.js ***!
  \****************************************************/
/*! exports provided: BaseAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAccordion", function() { return BaseAccordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BaseAccordion extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      openIndexes: [0]
    });

    _defineProperty(this, "handleItemClick", index => {
      this.internalSetState(state => {
        const closing = state.openIndexes.includes(index);
        return {
          type: closing ? 'closing' : 'opening',
          openIndexes: closing ? state.openIndexes.filter(i => i !== index) : [...state.openIndexes, index]
        };
      });
      console.log('clicked');
    });
  }

  getState(state = this.state) {
    return {
      openIndexes: this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes
    };
  }

  internalSetState(changes, callback = () => {}) {
    let allChanges;
    this.setState(state => {
      const actualState = this.getState(state);
      const changesObject = typeof changes === 'function' ? changes(actualState) : changes;
      allChanges = this.props.stateReducer(actualState, changesObject);
      return allChanges;
    }, () => {
      this.props.onStateChange(allChanges);
      callback();
    });
  }

  render() {
    return this.props.children({
      openIndexes: this.getState().openIndexes,
      handleItemClick: this.handleItemClick
    });
  }

}

_defineProperty(BaseAccordion, "defaultProps", {
  stateReducer: (state, changes) => changes,
  onStateChange: () => {}
});



/***/ }),

/***/ "./src/components/accordion/shared.js":
/*!********************************************!*\
  !*** ./src/components/accordion/shared.js ***!
  \********************************************/
/*! exports provided: AccordionButton, AccordionContents, AccordionItem, preventClose, single, combineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionButton", function() { return AccordionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContents", function() { return AccordionContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventClose", function() { return preventClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\accordion\\shared.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


const AccordionButton = _ref => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: {
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '-0.2px',
      cursor: 'pointer',
      fontSize: '17px',
      lineHeight: 1.5,
      fontWeight: '500',
      border: 'none',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '15px',
      paddingRight: '30px',
      position: 'relative',
      color: '#0F2137',
      '@media(min-width: 768px)': {
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '20px',
        paddingBottom: '20px',
        fontSize: '15px'
      },
      ':focus': {
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
      },
      span: {
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#fff',
        '@media(min-width: 768px)': {
          right: '30px'
        },
        img: {
          width: '7px',
          '@media(min-width: 768px)': {
            width: 'auto'
          }
        }
      }
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), children);
};
const variants = {
  open: {
    // maxHeight: 200,
    height: 'auto',
    marginBottom: 10,
    '@media(min-width: 768px)': {
      marginBottom: 30
    }
  },
  closed: {
    height: 0,
    marginTop: 0,
    marginBottom: 0
  }
};
function AccordionContents(_ref2) {
  let {
    isOpen
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["isOpen"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    initial: "closed",
    animate: isOpen ? 'open' : 'closed',
    variants: variants,
    css: {
      overflowY: 'hidden',
      fontSize: 15,
      padding: '0 15px',
      paddingRight: '40px',
      lineHeight: '30px',
      color: '#343D48',
      '@media(min-width: 768px)': {
        padding: '0 30px'
      }
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }));
}
const AccordionItem = _ref3 => {
  let {
    isOpen,
    children
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, ["isOpen", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: {
      borderRadius: 5,
      marginBottom: 10,
      border: '1px solid #EDEFF2',
      padding: 0,
      overflow: 'hidden'
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 3
    }
  }), children);
};
const preventClose = (state, changes) => changes.type === 'closing' && state.openIndexes.length < 2 ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: state.openIndexes
}) : changes;
const single = (state, changes) => changes.type === 'opening' ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: changes.openIndexes.slice(-1)
}) : changes;
const combineReducers = (...reducers) => (state, changes) => reducers.reduce((acc, reducer) => reducer(state, acc), changes);

/***/ }),

/***/ "./src/components/cards/Service.js":
/*!*****************************************!*\
  !*** ./src/components/cards/Service.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Slide */ "react-reveal/Slide");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\cards\\Service.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsxRuntime classic */

/** @jsx jsx */



const Service = ({
  item
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.serviceItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bottom: true,
    cascade: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    sx: styles.figure,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: item === null || item === void 0 ? void 0 : item.icon,
    alt: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, item === null || item === void 0 ? void 0 : item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, item === null || item === void 0 ? void 0 : item.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);
const styles = {
  serviceItem: {
    display: [null, null, null, null, null, 'flex'],
    textAlign: ['center', null, null, null, null, 'left']
  },
  figure: {
    minWidth: [88, null, null, null, null, 70, 88],
    mr: [null, null, null, null, null, 30],
    mb: [2, null, null, null, null, 0],
    img: {
      maxWidth: [42, null, null, 60, 70, '100%']
    }
  },
  content: {
    h3: {
      color: 'heading',
      fontWeight: 700,
      fontFamily: 'body',
      fontSize: [2, null, null, 17, 3],
      lineHeight: [1.68]
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: [1.88],
      mt: [2]
    },
    a: {
      mt: [2, null, null, 3]
    }
  }
};

/***/ }),

/***/ "./src/components/cards/TeamMember.js":
/*!********************************************!*\
  !*** ./src/components/cards/TeamMember.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ "react-icons/si");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\cards\\TeamMember.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsxRuntime classic */

/** @jsx jsx */




const TeamMember = ({
  member
}) => {
  var _member$socialLinks;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "figure",
    sx: styles.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: member === null || member === void 0 ? void 0 : member.avatar,
    alt: member === null || member === void 0 ? void 0 : member.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.about,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, member === null || member === void 0 ? void 0 : member.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, member === null || member === void 0 ? void 0 : member.designation), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.socialLinks,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, member === null || member === void 0 ? void 0 : (_member$socialLinks = member.socialLinks) === null || _member$socialLinks === void 0 ? void 0 : _member$socialLinks.map((social, index) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: social === null || social === void 0 ? void 0 : social.link,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, (social === null || social === void 0 ? void 0 : social.name) === 'twitter' && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTwitter"], {
    size: "18px",
    color: "#55ACEE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), (social === null || social === void 0 ? void 0 : social.name) === 'github' && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
    size: "18px",
    color: "#161614",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), (social === null || social === void 0 ? void 0 : social.name) === 'linkedIn' && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiLinkedin"], {
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 47
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamMember);
const styles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  about: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4]
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2]
    }
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'left'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2]
    }
  }
};

/***/ }),

/***/ "./src/components/cards/TestimonialCard.js":
/*!*************************************************!*\
  !*** ./src/components/cards/TestimonialCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\cards\\TestimonialCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TestimonialsCard = ({
  image,
  text,
  name,
  username
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, text), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, username))));
};

/* harmony default export */ __webpack_exports__["default"] = (TestimonialsCard);
const styles = {
  testimonialsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    mb: '20px',
    px: ['20px', null, null, null, null, '25px', '35px'],
    py: ['20px', null, null, null, null, '20px', '25px'],
    pb: ['25px', null, null, null, null, '25px', '35px'],
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48'
    }
  },
  testimonialsInfo: {
    display: 'flex',
    alignItems: 'center',
    mt: '20px'
  },
  testimonialsImage: {
    img: {
      display: 'block',
      mr: '15px'
    }
  },
  testimonialsContent: {
    h3: {
      m: 0,
      color: '#0f074b',
      fontSize: '17px',
      fontWeight: 500,
      lineHeight: 1
    },
    p: {
      m: 0,
      lineHeight: 1,
      color: '#362c88',
      fontSize: '14px',
      fontWeight: 500,
      mt: '10px'
    }
  }
};

/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Drawer = _ref => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className ? className : ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: "0.4s"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: drawerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget */ "./src/components/footer/widget.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_techvestors_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/techvestors-logo.png */ "./src/assets/techvestors-logo.png");
/* harmony import */ var assets_techvestors_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_techvestors_logo_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\footer\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsxRuntime classic */

/** @jsx jsx */





function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_techvestors_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Logo",
    sx: {
      mx: 'auto',
      variant: 'links.logo'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_4__["menuItems"].map(({
    id,
    title,
    items
  }) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_widget__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: id,
    title: title,
    items: items,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      mx: 'auto',
      justifyContent: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_4__["social"].map(({
    path,
    label,
    icon
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: icon,
    alt: label,
    sx: styles.footer.icon,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "\xA9 ", new Date().getFullYear(), " TechVestors. All rights reserved."))));
}
const styles = {
  footer: {
    borderTop: '1px solid #e6e6e6',
    boxShadow: '0 -1px 0 rgba(0, 0, 0, 0.1)',
    footerBottomArea: {
      pt: [6],
      pb: [6],
      display: 'grid',
      alignContent: 'center'
    },
    menus: {
      mt: [4, null, null, 6],
      gap: [30, null, 50, '20px 50px', 17, 50],
      display: ['grid'],
      gridTemplateColumns: ['repeat(2, 1fr)', null, null, 'repeat(2, 1fr)', 'repeat(3, 1fr)']
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary'
      }
    },
    icon: {
      width: ['20px', null, '30px'],
      height: ['20px', null, '30px'],
      mr: [2, null, 3],
      my: [4, null, 6],
      transition: 'all 0.35s',
      ':hover': {
        transform: 'scale(1.2)'
      }
    },
    copyright: {
      mt: [2],
      fontSize: [1, '15px'],
      width: '100%',
      textAlign: 'center'
    }
  }
};

/***/ }),

/***/ "./src/components/footer/footer.data.js":
/*!**********************************************!*\
  !*** ./src/components/footer/footer.data.js ***!
  \**********************************************/
/*! exports provided: menuItems, footerNav, social */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerNav", function() { return footerNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "social", function() { return social; });
/* harmony import */ var assets_social_facebook_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/social/facebook.png */ "./src/assets/social/facebook.png");
/* harmony import */ var assets_social_facebook_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_social_facebook_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_social_twitter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/social/twitter.png */ "./src/assets/social/twitter.png");
/* harmony import */ var assets_social_twitter_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_social_twitter_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_social_github_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/social/github.png */ "./src/assets/social/github.png");
/* harmony import */ var assets_social_github_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_social_github_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_placeholder_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/placeholder.png */ "./src/assets/placeholder.png");
/* harmony import */ var assets_placeholder_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_placeholder_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_gmail_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/gmail.png */ "./src/assets/gmail.png");
/* harmony import */ var assets_gmail_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_gmail_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_telephone_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/telephone.png */ "./src/assets/telephone.png");
/* harmony import */ var assets_telephone_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_telephone_png__WEBPACK_IMPORTED_MODULE_5__);






const menuItems = [{
  id: 2,
  title: 'About Us',
  items: [{
    path: '#!',
    label: 'Support Center'
  }, {
    path: '#!',
    label: 'Customer Support'
  }, {
    path: '#!',
    label: 'About Us'
  }, {
    path: '#!',
    label: 'Copyright'
  }]
}, {
  id: 3,
  title: 'Our Information',
  items: [{
    path: '#!',
    label: 'Return Policy '
  }, {
    path: '#!',
    label: 'Privacy Policy'
  }, {
    path: '#!',
    label: 'Terms & Conditions'
  }, {
    path: 'career',
    nextPage: true,
    label: 'Career'
  }]
}, {
  id: 4,
  title: 'Contact Us',
  items: [{
    path: '#!',
    icon: assets_telephone_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    label: '+91 8884937987'
  }, {
    path: '#!',
    icon: assets_telephone_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    label: '+916266609994'
  }, {
    path: '#!',
    icon: assets_placeholder_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    label: 'Bangalore, India'
  }, {
    path: '#!',
    icon: assets_gmail_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    label: 'support@techvestors.tech '
  }]
}];
const footerNav = [{
  path: '#!',
  label: 'Home'
}, {
  path: '#!',
  label: 'Advertise'
}, {
  path: '#!',
  label: 'Supports'
}, {
  path: '#!',
  label: 'Marketing'
}, {
  path: '#!',
  label: 'FAQ'
}];
const social = [{
  path: '/',
  label: 'Facebook',
  icon: assets_social_facebook_png__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  path: '/',
  label: 'Twitter',
  icon: assets_social_twitter_png__WEBPACK_IMPORTED_MODULE_1___default.a
}, {
  path: '/',
  label: 'Github',
  icon: assets_social_github_png__WEBPACK_IMPORTED_MODULE_2___default.a
}];

/***/ }),

/***/ "./src/components/footer/widget.js":
/*!*****************************************!*\
  !*** ./src/components/footer/widget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\footer\\widget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsxRuntime classic */

/** @jsx jsx */




const Widget = ({
  title,
  items
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footerWidget,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, items.map(({
    path,
    label,
    icon
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, icon && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: icon,
    alt: label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 22
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    path: path,
    key: i,
    label: label,
    variant: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Widget);
const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading'
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      columns: [1, null, null, 1, 1, 1, 2],
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px',
          width: '20px'
        }
      },
      a: {
        color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#02073E', 0.8)
      }
    }
  }
};

/***/ }),

/***/ "./src/components/form/ContactUs.js":
/*!******************************************!*\
  !*** ./src/components/form/ContactUs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_SectionHeading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/SectionHeading */ "./src/components/SectionHeading.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\form\\ContactUs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function ContactUs() {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitting
    }
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    mode: 'onTouched'
  });
  const [isSuccess, setIsSuccess] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false);
  const [Message, setMessage] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('');

  const onSubmit = async (values, e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
    emailjs.sendForm('service_jsagzuy', 'template_ucuhh4q', JSON.stringify(values, null, 2), 'user_sIqJp1RQ7DDudqNuvQogl').then(result => {
      console.log(result.text);
    }, error => {
      console.log(error.text);
    });
    reset();
  };

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    as: "form",
    onSubmit: handleSubmit(onSubmit),
    sx: styles.form,
    id: "contactus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(components_SectionHeading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: styles.contact__heading,
    title: "Get in touch",
    description: "We're here to help and answer any questions you might have. We look forward to hearing from you.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    sx: styles.flex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.formInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Input"], _extends({
    name: "fname",
    id: "fname",
    placeholder: "First name"
  }, register('fname', {
    required: 'First name is required'
  }), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), errors.fname && __jsx("div", {
    className: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, errors.fname.message)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.formInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Input"], _extends({
    name: "lname",
    id: "lname",
    placeholder: "Last name"
  }, register('lname', {
    required: 'Last name is required'
  }), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })), errors.lname && __jsx("div", {
    className: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, errors.lname.message))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    sx: styles.flex,
    mt: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.formInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Input"], _extends({
    name: "email",
    id: "email",
    placeholder: "Email address"
  }, register('email', {
    required: 'Required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'invalid email address'
    }
  }), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  })), errors.email && __jsx("div", {
    className: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, errors.email.message)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.formInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Input"], _extends({
    name: "phone",
    id: "phone",
    placeholder: "Contact Number"
  }, register('phone', {
    required: 'Phone no. is Required'
  }), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  })), errors.phone && __jsx("div", {
    className: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, errors.phone.message))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.formInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Textarea"], _extends({
    name: "query",
    id: "query",
    placeholder: "Queries",
    rows: 8,
    sx: styles.textArea
  }, register('query', {
    required: 'Query is required'
  }), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  })), errors.query && __jsx("div", {
    className: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 28
    }
  }, errors.query.message)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "Submit"))));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactUs);
const styles = {
  form: {
    backgroundColor: '#F4F4F6',
    // p: 3,
    maxWidth: 'container',
    mx: 'auto',
    pt: [3, 4, 5],
    pb: [3, 4, 5]
  },
  flex: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    input: {
      flex: 1,
      gap: [2, null, null, 3],
      mb: [3],
      borderRadius: '15px',
      px: 5
    }
  },
  textArea: {
    mb: [3],
    borderRadius: '15px',
    p: 5,
    mt: 3
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: 5
  },
  contact__heading: {
    textAlign: 'center',
    ml: 'auto',
    mr: 'auto',
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57]
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33]
    }
  },
  formInput: {
    flex: 1,
    flexDirection: 'column',
    '.error': {
      color: '#ff0000',
      fontSize: [1, null, null, 2],
      lineHeight: [1.87, null, null, 2.33],
      mb: [2],
      ml: 'auto'
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.career.js":
/*!************************************************!*\
  !*** ./src/components/header/header.career.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'home',
  label: 'Home'
}, {
  path: 'joinus',
  label: 'Join Us'
}, {
  path: 'team',
  label: 'Team'
}, {
  path: 'position',
  label: 'Positions'
}, {
  path: 'contactus',
  label: 'Contact Us'
}]);

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'home',
  label: 'Home'
}, {
  path: 'services',
  label: 'Services'
}, {
  path: 'team',
  label: 'Team'
}, {
  path: 'testimonial',
  label: 'Testimonial'
}, {
  path: 'contactus',
  label: 'Contact Us'
}]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_techvestors_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/techvestors-logo.png */ "./src/assets/techvestors-logo.png");
/* harmony import */ var assets_techvestors_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_techvestors_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.js");
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var _header_career__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.career */ "./src/components/header/header.career.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */










function Header({
  className
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  console.log(router.pathname === '/career');
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_6__["DrawerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.header__container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_techvestors_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, router.pathname === '/career' ? _header_career__WEBPACK_IMPORTED_MODULE_9__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "active",
    to: path,
    spy: true,
    smooth: true,
    offset: -30,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, label)) : _header_data__WEBPACK_IMPORTED_MODULE_8__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "active",
    to: path,
    spy: true,
    smooth: true,
    offset: -30,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, label))), router.pathname === '/' && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "join__us",
    onClick: () => router.push('/career'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Join Us"), router.pathname === '/career' && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "join__us",
    href: "/www.linkedin.com",
    sx: {
      textDecoration: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Apply"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isCareer: router.pathname === '/career',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }))));
}
const positionAnim = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;
const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.join__us': {
      borderRadius: '45px',
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      cursor: 'pointer',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text'
      }
    }
  },
  header__container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block'
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var _contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/drawer/drawer.context */ "./src/contexts/drawer/drawer.context.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var _header_career__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.career */ "./src/components/header/header.career.js");
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\header\\mobile-drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const social = [{
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaGithubAlt"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })
}];

const MobileDrawer = ({
  isCareer
}) => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__["DrawerContext"]); // Toggle drawer

  const toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);
  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.mobileDrawer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdMenu"], {
      size: "26px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdClose"], {
      size: "24px",
      color: "#000000",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.mobileDrawer__content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, isCareer ? _header_career__WEBPACK_IMPORTED_MODULE_9__["default"].map(({
    path,
    label
  }, i) => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    activeClass: "active",
    to: path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    onClick: toggleHandler,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, label)) : _header_data__WEBPACK_IMPORTED_MODULE_8__["default"].map(({
    path,
    label
  }, i) => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    activeClass: "active",
    to: path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    onClick: toggleHandler,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu__Footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, social.map(({
    path,
    icon
  }, i) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "span",
    key: i,
    sx: styles.social.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, icon))))))));
};

const styles = {
  mobileDrawer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },
  mobileDrawer__content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },
  menu__Footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-messenger-customer-chat */ "react-messenger-customer-chat");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_ContactUs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/ContactUs */ "./src/components/form/ContactUs.js");
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */







function Layout({
  children
}) {
  const {
    0: isSticky,
    1: setIsSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleStateChange = status => {
    if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    innerZ: 1001,
    top: 0,
    onStateChange: handleStateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: `${isSticky ? 'sticky' : 'unSticky'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    id: "content",
    sx: {
      variant: 'layout.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_form_ContactUs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5___default.a, {
    pageId: "100082619443721",
    appId: "514267963053701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["NavLink"], _extends({
    sx: {
      cursor: 'pointer',
      fontWeight: 'normal',
      '&:hover': {
        color: 'text'
      }
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), children ? children : label));
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, rest, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), children ? children : label);
}

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */
 // import { Link } from 'components/link';


function Logo(_ref) {
  let {
    src
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["src"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    href: "/",
    sx: {
      variant: 'links.logo',
      display: 'flex',
      cursor: 'pointer',
      mr: 15
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: "techvestors",
    sx: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/contexts/app/app.provider.js":
/*!******************************************!*\
  !*** ./src/contexts/app/app.provider.js ***!
  \******************************************/
/*! exports provided: useStickyState, useStickyDispatch, StickyProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyState", function() { return useStickyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyDispatch", function() { return useStickyDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyProvider", function() { return StickyProvider; });
/* harmony import */ var _create_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context */ "./src/contexts/create-context.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.reducer */ "./src/contexts/app/app.reducer.js");


const [state, useDispatch, provider] = Object(_create_context__WEBPACK_IMPORTED_MODULE_0__["useCreateContext"])(_app_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"], _app_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]);
const useStickyState = state;
const useStickyDispatch = useDispatch;
const StickyProvider = provider;

/***/ }),

/***/ "./src/contexts/app/app.reducer.js":
/*!*****************************************!*\
  !*** ./src/contexts/app/app.reducer.js ***!
  \*****************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isSticky: false,
  isSidebarSticky: true
};
function reducer(state, {
  type
}) {
  switch (type) {
    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });

    default:
      {
        throw new Error(`Unsupported action type: ${type}`);
      }
  }
}

/***/ }),

/***/ "./src/contexts/create-context.js":
/*!****************************************!*\
  !*** ./src/contexts/create-context.js ***!
  \****************************************/
/*! exports provided: useCreateContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateContext", function() { return useCreateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\contexts\\create-context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function useCreateContext(defaultValue, reducer) {
  const defaultDispatch = () => defaultValue;

  const stateCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);
  const dispatchCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dispatchCtx);
  }

  function Provider({
    children
  }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, defaultValue);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx(stateCtx.Provider, {
      value: state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, children));
  }

  return [useStateCtx, useDispatchCtx, Provider];
}

/***/ }),

/***/ "./src/contexts/drawer/drawer.context.js":
/*!***********************************************!*\
  !*** ./src/contexts/drawer/drawer.context.js ***!
  \***********************************************/
/*! exports provided: DrawerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DrawerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./src/contexts/drawer/drawer.provider.js":
/*!************************************************!*\
  !*** ./src/contexts/drawer/drawer.provider.js ***!
  \************************************************/
/*! exports provided: DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _drawer_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.context */ "./src/contexts/drawer/drawer.context.js");
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\contexts\\drawer\\drawer.provider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(_drawer_context__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"].Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/pages/career.js":
/*!*****************************!*\
  !*** ./src/pages/career.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Career; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/app/app.provider */ "./src/contexts/app/app.provider.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sections */ "./src/sections/index.js");
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sections/faq */ "./src/sections/faq.js");
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\pages\\career.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Career({
  meta
}) {
  const metaData = [{
    name: `description`,
    content: `description`
  }, {
    property: `og:title`,
    content: `Techvestors`
  }, {
    property: `og:description`,
    content: `description`
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }].concat(meta);
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__["StickyProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Techvestors | Careers"), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }))), __jsx(sections__WEBPACK_IMPORTED_MODULE_6__["Hero"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(sections__WEBPACK_IMPORTED_MODULE_6__["WhyUs"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(sections_faq__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }))));
}
Career.defaultProps = {
  lang: `en`,
  meta: []
};

/***/ }),

/***/ "./src/sections/faq.js":
/*!*****************************!*\
  !*** ./src/sections/faq.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_SectionHeading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/SectionHeading */ "./src/components/SectionHeading.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/accordion/accordion */ "./src/components/accordion/accordion.js");
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\sections\\faq.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const accordionData = [{
  isExpanded: false,
  title: 'Full Stack Developer',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "ul",
    sx: {
      py: 2,
      pl: 3,
      fontSize: [1, null, null, 2],
      lineHeight: [1.58, 1.58, 1.58, 2.2],
      maxWidth: ['none', 'none', 'none', 'none', 790]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Experienced"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Minimum of 6 months of real-time experience in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Experience in implementing well-known React workflows such as Redux"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Experience with Javascript backend framework like Express.js"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Experience with Restful API services"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    sx: {
      mt: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Fresher"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Freshers with basic coding knowledge/course/certification in React/Node.js/Angular are preferred"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Must have basic real-time knowledge in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Good knowledge in Javascript and able to handle Array & Objects built-in methods"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Critical thinking and problem-solving skills")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary",
    sx: {
      mt: 3,
      mb: 3,
      fontSize: [1, null, null, 2],
      lineHeight: [1.58, 1.58, 1.58, 2.2],
      letterSpacing: '0.05em',
      // hover
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Apply"))
}, {
  isExpanded: true,
  title: 'Software Tester',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "ul",
    sx: {
      py: 2,
      pl: 3,
      fontSize: [1, null, null, 2],
      lineHeight: [1.58, 1.58, 1.58, 2.2],
      maxWidth: ['none', 'none', 'none', 'none', 790]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Experienced"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "Minimum of 6 months of real-time experience in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "Experience in implementing well-known React workflows such as Redux"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Experience with Javascript backend framework like Express.js"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "Experience with Restful API services"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    sx: {
      mt: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Fresher"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "Freshers with basic coding knowledge/course/certification in React/Node.js/Angular are preferred"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, "Must have basic real-time knowledge in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, "Good knowledge in Javascript and able to handle Array & Objects built-in methods"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Critical thinking and problem-solving skills")))
}, {
  isExpanded: false,
  title: 'Front End Developer',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "ul",
    sx: {
      py: 2,
      pl: 3,
      fontSize: [1, null, null, 2],
      lineHeight: [1.58, 1.58, 1.58, 2.2],
      maxWidth: ['none', 'none', 'none', 'none', 790]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, "Experienced"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, "Minimum of 6 months of real-time experience in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, "Experience in implementing well-known React workflows such as Redux"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, "Experience with Javascript backend framework like Express.js"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, "Experience with Restful API services"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    sx: {
      mt: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, "Fresher"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, "Freshers with basic coding knowledge/course/certification in React/Node.js/Angular are preferred"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, "Must have basic real-time knowledge in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, "Good knowledge in Javascript and able to handle Array & Objects built-in methods"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, "Critical thinking and problem-solving skills")))
}, {
  isExpanded: false,
  title: 'Back End Developer',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "ul",
    sx: {
      py: 2,
      pl: 3,
      fontSize: [1, null, null, 2],
      lineHeight: [1.58, 1.58, 1.58, 2.2],
      maxWidth: ['none', 'none', 'none', 'none', 790]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, "Experienced"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }, "Minimum of 6 months of real-time experience in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }, "Experience in implementing well-known React workflows such as Redux"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, "Experience with Javascript backend framework like Express.js"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, "Experience with Restful API services"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    sx: {
      mt: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 11
    }
  }, "Fresher"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 11
    }
  }, "Freshers with basic coding knowledge/course/certification in React/Node.js/Angular are preferred"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }, "Must have basic real-time knowledge in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, "Good knowledge in Javascript and able to handle Array & Objects built-in methods"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 11
    }
  }, "Critical thinking and problem-solving skills")))
}, {
  isExpanded: false,
  title: 'Graphic Desinger',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "ul",
    sx: {
      py: 2,
      pl: 3,
      fontSize: [1, null, null, 2],
      lineHeight: [1.58, 1.58, 1.58, 2.2],
      maxWidth: ['none', 'none', 'none', 'none', 790]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }, "Experienced"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, "Minimum of 6 months of real-time experience in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 11
    }
  }, "Experience in implementing well-known React workflows such as Redux"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, "Experience with Javascript backend framework like Express.js"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }, "Experience with Restful API services"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    sx: {
      mt: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 11
    }
  }, "Fresher"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }
  }, "Freshers with basic coding knowledge/course/certification in React/Node.js/Angular are preferred"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 11
    }
  }, "Must have basic real-time knowledge in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 11
    }
  }, "Good knowledge in Javascript and able to handle Array & Objects built-in methods"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 11
    }
  }, "Critical thinking and problem-solving skills")))
}, {
  isExpanded: false,
  title: 'Mobile App Developer',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "ul",
    sx: {
      py: 2,
      pl: 3,
      fontSize: [1, null, null, 2],
      lineHeight: [1.58, 1.58, 1.58, 2.2],
      maxWidth: ['none', 'none', 'none', 'none', 790]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 11
    }
  }, "Experienced"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 11
    }
  }, "Minimum of 6 months of real-time experience in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 11
    }
  }, "Experience in implementing well-known React workflows such as Redux"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 11
    }
  }, "Experience with Javascript backend framework like Express.js"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 11
    }
  }, "Experience with Restful API services"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    sx: {
      mt: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 11
    }
  }, "Fresher"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 11
    }
  }, "Freshers with basic coding knowledge/course/certification in React/Node.js/Angular are preferred"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 11
    }
  }, "Must have basic real-time knowledge in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 11
    }
  }, "Good knowledge in Javascript and able to handle Array & Objects built-in methods"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 11
    }
  }, "Critical thinking and problem-solving skills")))
}, {
  isExpanded: false,
  title: 'Content Writer',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "ul",
    sx: {
      py: 2,
      pl: 3,
      fontSize: [1, null, null, 2],
      lineHeight: [1.58, 1.58, 1.58, 2.2],
      maxWidth: ['none', 'none', 'none', 'none', 790]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 11
    }
  }, "Experienced"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 11
    }
  }, "Minimum of 6 months of real-time experience in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 11
    }
  }, "Experience in implementing well-known React workflows such as Redux"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 11
    }
  }, "Experience with Javascript backend framework like Express.js"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 11
    }
  }, "Experience with Restful API services"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h4",
    sx: {
      mt: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 11
    }
  }, "Fresher"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 11
    }
  }, "Freshers with basic coding knowledge/course/certification in React/Node.js/Angular are preferred"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 11
    }
  }, "Must have basic real-time knowledge in React/Node.js/Angular"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 11
    }
  }, "Good knowledge in Javascript and able to handle Array & Objects built-in methods"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 11
    }
  }, "Good understanding of structured and unstructured databases (MySQL and MongoDB)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 11
    }
  }, "Proficient understanding of code versioning tools, such as Git"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 11
    }
  }, "Critical thinking and problem-solving skills")))
}];

function faq() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "section",
    id: "testimonial",
    sx: styles.position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.pos__header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 7
    }
  }, __jsx(components_SectionHeading__WEBPACK_IMPORTED_MODULE_0__["default"], {
    sx: styles.pos__heading,
    title: "What client say about us",
    description: "Customer testimonial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 9
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    sx: styles.flex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.faqWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 11
    }
  }, __jsx(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: accordionData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (faq);
const styles = {
  position: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px']
  },
  pos__header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  pos__heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57]
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33]
    }
  },
  flex: {
    flexWrap: 'wrap',
    pb: ['70px', null, null, null, '90px', null, '130px']
  },
  faqWrapper: {
    mx: 'auto'
  }
};

/***/ }),

/***/ "./src/sections/hero.js":
/*!******************************!*\
  !*** ./src/sections/hero.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_SectionHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SectionHeading */ "./src/components/SectionHeading.js");
/* harmony import */ var assets_hero_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/hero.png */ "./src/assets/hero.png");
/* harmony import */ var assets_hero_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_hero_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/banner-icon-1-1.svg */ "./src/assets/banner-icon-1-1.svg");
/* harmony import */ var assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/banner-icon-1-2.svg */ "./src/assets/banner-icon-1-2.svg");
/* harmony import */ var assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/banner-icon-1-3.svg */ "./src/assets/banner-icon-1-3.svg");
/* harmony import */ var assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/banner-icon-1-4.svg */ "./src/assets/banner-icon-1-4.svg");
/* harmony import */ var assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/banner-icon-1-5.svg */ "./src/assets/banner-icon-1-5.svg");
/* harmony import */ var assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/banner-icon-1-6.svg */ "./src/assets/banner-icon-1-6.svg");
/* harmony import */ var assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-reveal/Slide */ "react-reveal/Slide");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\sections\\hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsxRuntime classic */

/** @jsx jsx */














const Hero = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "home",
    sx: styles.hero__section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon1,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon2,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon3,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon4,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon5,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon6,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.hero__contents,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_SectionHeading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: styles.hero__heading,
    title: "techvestors (noun) /tech\u02C8v\u025Bst\u0259rs/",
    description: "A team of highly enthusiastic and passionate techies who are working together to innovate and develop technologies to invest in companies which has the potential to achieve new heights.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    sx: styles.hero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.hero__button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "services",
    spy: true,
    smooth: true,
    duration: 500,
    sx: {
      borderRadius: '45px',
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      border: '2px solid',
      borderColor: 'primary',
      color: 'background',
      bg: 'primary',
      cursor: 'pointer',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "Get started")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_13___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_hero_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "hero",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);
const bannerAnim1 = _emotion_core__WEBPACK_IMPORTED_MODULE_5__["keyframes"]`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;
const bannerAnim2 = _emotion_core__WEBPACK_IMPORTED_MODULE_5__["keyframes"]`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;
const bannerAnim3 = _emotion_core__WEBPACK_IMPORTED_MODULE_5__["keyframes"]`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;
const styles = {
  hero__section: {
    position: 'relative',
    pt: ['110px', null, null, null, '130px'],
    zIndex: 0,
    ':before': {
      backgroundColor: Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#FFF5ED', 0.5),
      content: ['none', null, null, `''`],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1
    }
  },
  hero__contents: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  hero__heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57]
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33]
    }
  },
  hero: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['block', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto']
    }
  },
  hero__button: {
    zIndex: 1,
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)']
  },
  container: {
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block']
    }
  },
  bannerIcon1: {
    top: '10%',
    left: '10%',
    animation: `${bannerAnim2} 8s linear infinite`
  },
  bannerIcon2: {
    top: '10%',
    right: '10%',
    animation: `${bannerAnim2} 8s linear infinite`
  },
  bannerIcon3: {
    bottom: '40px',
    right: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`
  },
  bannerIcon4: {
    bottom: '130px',
    left: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`
  },
  bannerIcon5: {
    bottom: '50%',
    left: '15%'
  },
  bannerIcon6: {
    bottom: '-65px',
    left: '0px',
    animation: `${bannerAnim3} 9s linear infinite`
  },
  bannerIcon7: {
    bottom: '30%',
    right: '0%'
  }
};

/***/ }),

/***/ "./src/sections/index.js":
/*!*******************************!*\
  !*** ./src/sections/index.js ***!
  \*******************************/
/*! exports provided: Hero, Services, Testimonials, Team, WorkFlow, WhyUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/sections/hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/sections/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonials */ "./src/sections/testimonials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Testimonials", function() { return _testimonials__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team */ "./src/sections/team.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return _team__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _workflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workflow */ "./src/sections/workflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkFlow", function() { return _workflow__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _whyus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whyus */ "./src/sections/whyus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhyUs", function() { return _whyus__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/sections/services.js":
/*!**********************************!*\
  !*** ./src/sections/services.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_SectionHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SectionHeading */ "./src/components/SectionHeading.js");
/* harmony import */ var components_cards_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/Service */ "./src/components/cards/Service.js");
/* harmony import */ var assets_service_service1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/service/service1.png */ "./src/assets/service/service1.png");
/* harmony import */ var assets_service_service1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_service_service1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_service_service2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/service/service2.png */ "./src/assets/service/service2.png");
/* harmony import */ var assets_service_service2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_service_service2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_service_service3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/service/service3.png */ "./src/assets/service/service3.png");
/* harmony import */ var assets_service_service3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_service_service3_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\sections\\services.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsxRuntime classic */

/** @jsx jsx */







const data = [{
  id: 1,
  icon: assets_service_service1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Marketing & advertising',
  description: `Lorem ipsum Fuga inventore quam odio numquam veniam?`
}, {
  id: 3,
  icon: assets_service_service2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Web development',
  description: `Lorem ipsum Fuga inventore quam odio numquam veniam?`
}, {
  id: 4,
  icon: assets_service_service3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Mobile Development',
  description: `Lorem ipsum Fuga inventore quam odio numquam veniam?`
}];

const Services = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "services",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_SectionHeading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: styles.heading,
    title: "Our Service",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi similique voluptatum inventore, atque praesentium?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_Service__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: item.id,
    item: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);
const styles = {
  section: {
    backgroundColor: Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#FFF5ED', 0.5),
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px']
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [30]
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: ['repeat(1, 285px)', 'repeat(1, 325px)', 'repeat(1, 285px)', 'repeat(3, 1fr)']
  }
};

/***/ }),

/***/ "./src/sections/team.js":
/*!******************************!*\
  !*** ./src/sections/team.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_SectionHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SectionHeading */ "./src/components/SectionHeading.js");
/* harmony import */ var assets_team_member1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/team/member1.png */ "./src/assets/team/member1.png");
/* harmony import */ var assets_team_member1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_team_member1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_team_member2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/team/member2.png */ "./src/assets/team/member2.png");
/* harmony import */ var assets_team_member2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_team_member2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_team_member3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/team/member3.png */ "./src/assets/team/member3.png");
/* harmony import */ var assets_team_member3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_team_member3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_team_member4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/team/member4.png */ "./src/assets/team/member4.png");
/* harmony import */ var assets_team_member4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_team_member4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_team_arrow_right_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/team/arrow-right.png */ "./src/assets/team/arrow-right.png");
/* harmony import */ var assets_team_arrow_right_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_team_arrow_right_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_cards_TeamMember__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/cards/TeamMember */ "./src/components/cards/TeamMember.js");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-reveal/Slide */ "react-reveal/Slide");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\sections\\team.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxRuntime classic */

/** @jsx jsx */












swiper__WEBPACK_IMPORTED_MODULE_2___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_2__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_2__["Pagination"]]);
const data = [{
  id: 1,
  avatar: assets_team_member1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  name: 'Gourav Mahto',
  designation: 'Co-founder',
  socialLinks: [{
    name: 'twitter',
    link: 'http://twitter.com'
  }, {
    name: 'github',
    link: 'http://github.com'
  }, {
    name: 'linkedIn',
    link: 'http://linkedin.com/in/'
  }]
}, {
  id: 2,
  avatar: assets_team_member3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'R Adarsh',
  designation: 'Co-Founder',
  socialLinks: [{
    name: 'twitter',
    link: 'http://twitter.com'
  }, {
    name: 'linkedIn',
    link: 'http://linkedIn.com/in'
  }]
}, {
  id: 3,
  avatar: assets_team_member1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  name: 'Mr. Rahul',
  designation: 'Co-Founder',
  socialLinks: [{
    name: 'twitter',
    link: 'http://twitter.com'
  }, {
    name: 'github',
    link: 'http://github.com'
  }]
}, {
  id: 4,
  avatar: assets_team_member3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Vaubhav Sinha',
  designation: 'Web Developer',
  socialLinks: [{
    name: 'twitter',
    link: 'http://twitter.com'
  }, {
    name: 'github',
    link: 'http://github.com'
  }, {
    name: 'dribbble',
    link: 'http://linkedIn.com/in'
  }]
}, {
  id: 5,
  avatar: assets_team_member1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  name: 'Vikram Rana',
  designation: 'Full Stack Developer',
  socialLinks: [{
    name: 'twitter',
    link: 'http://twitter.com'
  }, {
    name: 'github',
    link: 'http://github.com'
  }, {
    name: 'dribbble',
    link: 'http://linkedin.com/in'
  }]
}, {
  id: 6,
  avatar: assets_team_member2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: 'Sudreesha Das',
  designation: 'intern',
  socialLinks: [{
    name: 'twitter',
    link: 'http://twitter.com'
  }, {
    name: 'github',
    link: 'http://github.com/sudreesha'
  }, {
    name: 'dribbble',
    link: 'http://linkedIn.com'
  }]
}, {
  id: 7,
  avatar: assets_team_member3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Mr. Pratap',
  designation: 'intern',
  socialLinks: [{
    name: 'twitter',
    link: 'http://twitter.com'
  }, {
    name: 'linkedIn',
    link: 'http://linkedIn.com/in'
  }, {
    name: 'github',
    link: 'http://github.com'
  }]
}, {
  id: 8,
  avatar: assets_team_member1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  name: 'Shahbaz Alam',
  designation: 'Software Develoepr',
  socialLinks: [{
    name: 'twitter',
    link: 'http://twitter.com'
  }, {
    name: 'github',
    link: 'http://github.com'
  }, {
    name: 'linkedIn',
    link: 'http://linkedIn.com/in'
  }]
}];

const Team = () => {
  var _swiperRef$current, _swiperRef$current$sw;

  const swiperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: containerOffset,
    1: setContainerOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    left: null,
    top: null
  });
  const isEnd = swiperRef === null || swiperRef === void 0 ? void 0 : (_swiperRef$current = swiperRef.current) === null || _swiperRef$current === void 0 ? void 0 : (_swiperRef$current$sw = _swiperRef$current.swiper) === null || _swiperRef$current$sw === void 0 ? void 0 : _swiperRef$current$sw.isEnd;

  const handlePrev = () => {
    var _swiperRef$current2, _swiperRef$current2$s;

    swiperRef === null || swiperRef === void 0 ? void 0 : (_swiperRef$current2 = swiperRef.current) === null || _swiperRef$current2 === void 0 ? void 0 : (_swiperRef$current2$s = _swiperRef$current2.swiper) === null || _swiperRef$current2$s === void 0 ? void 0 : _swiperRef$current2$s.slidePrev();
    setInterval(() => {
      var _swiperRef$current3, _swiperRef$current3$s;

      setCurrentIndex(swiperRef === null || swiperRef === void 0 ? void 0 : (_swiperRef$current3 = swiperRef.current) === null || _swiperRef$current3 === void 0 ? void 0 : (_swiperRef$current3$s = _swiperRef$current3.swiper) === null || _swiperRef$current3$s === void 0 ? void 0 : _swiperRef$current3$s.activeIndex);
    }, 100);
    clearInterval();
  };

  const handleNext = () => {
    var _swiperRef$current4, _swiperRef$current4$s;

    swiperRef === null || swiperRef === void 0 ? void 0 : (_swiperRef$current4 = swiperRef.current) === null || _swiperRef$current4 === void 0 ? void 0 : (_swiperRef$current4$s = _swiperRef$current4.swiper) === null || _swiperRef$current4$s === void 0 ? void 0 : _swiperRef$current4$s.slideNext();
    setInterval(() => {
      var _swiperRef$current5, _swiperRef$current5$s;

      setCurrentIndex(swiperRef === null || swiperRef === void 0 ? void 0 : (_swiperRef$current5 = swiperRef.current) === null || _swiperRef$current5 === void 0 ? void 0 : (_swiperRef$current5$s = _swiperRef$current5.swiper) === null || _swiperRef$current5$s === void 0 ? void 0 : _swiperRef$current5$s.activeIndex);
    }, 100);
    clearInterval();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop
    });
  }, [containerRef]);
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "team",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    ref: containerRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_SectionHeading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: styles.heading,
    title: "Meet our superheros",
    description: "Alone we can do so little. Together we can do so much.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _objectSpread({
      ml: currentIndex === 0 ? containerOffset === null || containerOffset === void 0 ? void 0 : containerOffset.left : 0
    }, styles.teamWrapper),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, currentIndex !== 0 && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: handlePrev,
    className: "swiper-arrow swiper-arrow-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_team_arrow_right_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "arrow left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  })), !isEnd && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    className: "swiper-arrow swiper-arrow-right",
    onClick: handleNext,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_team_arrow_right_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "arrow right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_11___default.a, {
    right: true,
    cascade: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], {
    ref: swiperRef,
    spaceBetween: 30,
    watchSlidesVisibility: true,
    slidesPerView: 5,
    breakpoints: breakpoints,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, data === null || data === void 0 ? void 0 : data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
    key: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_TeamMember__WEBPACK_IMPORTED_MODULE_10__["default"], {
    member: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 17
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);
const styles = {
  section: {
    pt: ['110px', null, null, null, '120px'],
    pb: ['110px', null, null, null, '120px']
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33]
    }
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%']
      }
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px'
      }
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px'
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/testimonials.js":
/*!**************************************!*\
  !*** ./src/sections/testimonials.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_SectionHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SectionHeading */ "./src/components/SectionHeading.js");
/* harmony import */ var assets_gaurav_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/gaurav.png */ "./src/assets/gaurav.png");
/* harmony import */ var assets_gaurav_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_gaurav_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_cards_TestimonialCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/cards/TestimonialCard */ "./src/components/cards/TestimonialCard.js");
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\sections\\testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













swiper__WEBPACK_IMPORTED_MODULE_2___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_2__["Autoplay"]]);
const TESTIMONIALS_DATA = [[{
  image: assets_gaurav_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
  username: '@Darshan',
  name: 'Mr Darshan'
}, {
  image: assets_gaurav_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
  username: '@Vikram',
  name: 'Mr. Vikram'
}], [{
  image: assets_gaurav_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
  username: '@Rahul',
  name: 'Mr. Rahul'
}, {
  image: assets_gaurav_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
  username: '@Vaibhav',
  name: 'Mr. Baibhav'
}], [{
  image: assets_gaurav_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'Thank you for all your help. Your service was excellent and very FAST.',
  username: '@pratap',
  name: 'Mr. Pratap'
}, {
  image: assets_gaurav_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
  username: '@sudreesha',
  name: 'Miss Sudhreesa'
}]];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  };
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "testimonial",
    sx: styles.testimonials,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonial__header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(components_SectionHeading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: styles.testimonial__heading,
    title: "What client say about us",
    description: "Customer testimonial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], _extends({}, testimonialCarousel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), TESTIMONIALS_DATA.map((item, index) => __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, item.map(({
    image,
    text,
    name,
    username
  }, _index) => __jsx(components_cards_TestimonialCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    image: image,
    text: text,
    name: name,
    key: _index,
    username: username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);
const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px']
  },
  testimonial__header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  testimonial__heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57]
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33]
    }
  }
};

/***/ }),

/***/ "./src/sections/whyus.js":
/*!*******************************!*\
  !*** ./src/sections/whyus.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tabs */ "rc-tabs");
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_whyus_social_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/whyus/social.png */ "./src/assets/whyus/social.png");
/* harmony import */ var assets_whyus_social_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_whyus_social_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_whyus_erp_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/whyus/erp.png */ "./src/assets/whyus/erp.png");
/* harmony import */ var assets_whyus_erp_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_whyus_erp_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-reveal/Slide */ "react-reveal/Slide");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\sections\\whyus.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsxRuntime classic */

/** @jsx jsx */







const data = [{
  id: 1,
  tabTitle: 'What we invest in?',
  title: `We will turn your idea in the successful business model framework`,
  description: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus aspernatur error voluptatem cupiditate.`,
  image: assets_whyus_social_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  list: ['ERP System', 'App Development', 'Web Development', 'Social Marketing']
}, {
  id: 2,
  tabTitle: 'Why invest through us?',
  title: `We will turn your idea in the successful business model framework`,
  description: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus aspernatur error voluptatem cupiditate.`,
  moreLink: '#explore-more',
  image: assets_whyus_erp_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  list: ['Growth', 'Trust', 'Collabration', 'Innovation']
}];

const WhyUs = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "why-us",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(rc_tabs__WEBPACK_IMPORTED_MODULE_2___default.a, {
    sx: styles.tabs,
    animated: {
      tabPane: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(rc_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    key: item.id,
    tab: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: "h4",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 20
      }
    }, item.tabTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_7___default.a, {
    bottom: true,
    cascade: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.list,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, item.list.map((item, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    key: i,
    className: "list-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 23
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__["RiCheckboxCircleFill"], {
    color: "#3FDBB1",
    size: "20px",
    sx: {
      mr: 2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, item))))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.illustration,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: item.image,
    alt: "illustration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (WhyUs);
const styles = {
  section: {
    pt: [11, null, null, 12],
    pb: [8, null, null, 9, null, 11]
  },
  tabs: {
    border: 0,
    '.rc-tabs-nav': {
      mb: [8, null, null, 9, 10, 9, 12]
    },
    '.rc-tabs-nav-wrap': {
      borderBottom: `1px solid ${Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])('#01070D', 0.1)}`,
      justifyContent: 'center'
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pb: [3, null, null, 5, null, 6]
    },
    '.rc-tabs-tab-btn': {
      outline: 0,
      alignItems: 'center',
      img: {
        outline: 0
      }
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
      h4: {
        fontFamily: 'body',
        fontSize: [0, null, null, 17, null, null, 4],
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: ['center', null, null, null, 'left'],
        whiteSpace: ['break-spaces', null, null, null, 'unset']
      }
    },
    '.rc-tabs-tabpane': {
      display: ['flex', null, null, 'grid'],
      flexDirection: ['column-reverse', null, null, 'unset'],
      alignItems: 'center',
      justifyContent: 'center',
      gridTemplateColumns: [null, null, null, '0.9fr 1.1fr'],
      outline: 0,
      gap: [5, null, null, 11],
      h2: {
        color: 'heading',
        fontSize: [24, null, null, 6, 26, 8, 40],
        fontWeight: 700,
        lineHeight: [1.45, null, null, 1.5],
        letterSpacing: [null, null, null, '0.5px', null, '-1px'],
        textAlign: ['center', null, null, 'left']
      },
      p: {
        color: 'textSecondary',
        fontSize: [1, null, null, 2, 17],
        lineHeight: [1.87, null, null, 2, 2.48],
        textAlign: ['center', null, null, 'left'],
        mt: [4]
      },
      '.list-item': {
        fontSize: [0, null, null, 1, 2],
        fontWeight: 500,
        lineHeight: [2.8],
        display: 'flex',
        alignItems: 'center'
      }
    }
  },
  list: {
    mt: [5],
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: ['repeat(2, 164px)', null, null, 'repeat(2, 180px)']
  },
  illustration: {
    display: ['flex'],
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: [null, null, null, null, null, 'center'],
    img: {
      maxWidth: ['65%', null, null, '100%', null, '90%', '100%']
    }
  }
};

/***/ }),

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_SectionHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SectionHeading */ "./src/components/SectionHeading.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowOdd.svg */ "./src/assets/arrowOdd.svg");
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/arrowEven.svg */ "./src/assets/arrowEven.svg");
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\sections\\workflow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







const data = [{
  id: 1,
  title: 'Apply',
  text: 'Apply for the position of your choice'
}, {
  id: 2,
  title: 'Screening',
  text: 'Screening process lorem ipsum dolor sit amet'
}, {
  id: 3,
  title: 'Package',
  text: 'Package selection lorem ipsum dolor sit amet'
}, {
  id: 4,
  title: 'Team',
  text: 'Team selection lorem ipsum dolor sit amet'
}];
function WorkFlow() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_SectionHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Whats the function",
    title: "Let\u2019s see how it works",
    isWhite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    key: item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.iconBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, `0${item.id}`), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, item.text)))))));
}
const arrowAnim = _emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"]`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;
const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${assets_patternBG_png__WEBPACK_IMPORTED_MODULE_4___default.a})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10]
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_5___default.a})`,
      animation: `${arrowAnim} 5s ease-out infinite`
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_6___default.a})`,
      animation: `${arrowAnim} 5s ease-out infinite`,
      top: 17
    },
    '&:last-child::before': {
      display: 'none'
    }
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'background',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: 'secondary'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'background',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'background',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
    }
  }
};

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    text: '#343D48',
    text_secondary: '#02073E',
    heading: '#0F2137',
    heading_secondary: '#0F2137',
    background: '#FFFFFF',
    primary: '#362c88',
    secondary: '#0f074b',
    muted: '#E4E4E4',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderColor: 'primary',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: `0 0 0 2px primary`,
        outline: 'none'
      }
    },
    textarea: {
      borderColor: 'primary',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: `0 0 0 2px primary`,
        outline: 'none'
      }
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    default: {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "rc-tabs":
/*!**************************!*\
  !*** external "rc-tabs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react-icons/si":
/*!*********************************!*\
  !*** external "react-icons/si" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/si");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-messenger-customer-chat":
/*!************************************************!*\
  !*** external "react-messenger-customer-chat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-messenger-customer-chat");

/***/ }),

/***/ "react-reveal/Slide":
/*!*************************************!*\
  !*** external "react-reveal/Slide" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Slide");

/***/ }),

/***/ "react-reveal/Zoom":
/*!************************************!*\
  !*** external "react-reveal/Zoom" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Zoom");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2FjY29yZGlvbi1hcnJvdy1lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2FjY29yZGlvbi1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd0V2ZW4uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYXJyb3dPZGQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS0xLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS00LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtNS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTYuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZ2F1cmF2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2dtYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2hlcm8ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGF0dGVybkJHLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BsYWNlaG9sZGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2Uvc2VydmljZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS9zZXJ2aWNlMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlL3NlcnZpY2UzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvY2lhbC9mYWNlYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb2NpYWwvZ2l0aHViLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvY2lhbC90d2l0dGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlYW0vYXJyb3ctcmlnaHQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9tZW1iZXIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlYW0vbWVtYmVyMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21lbWJlcjMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9tZW1iZXI0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlY2h2ZXN0b3JzLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVsZXBob25lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3doeXVzL2VycC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93aHl1cy9zb2NpYWwucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25IZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2Jhc2UtYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9UZWFtTWVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL1Rlc3RpbW9uaWFsQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL0NvbnRhY3RVcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNhcmVlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbW9iaWxlLWRyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9hcHAvYXBwLnJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2NyZWF0ZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NhcmVlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmFxLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9oZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3RlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvd2h5dXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9saXNoZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1kcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy10YWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL3NpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJldmVhbC9TbGlkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJldmVhbC9ab29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlci9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJyZXNvbHZlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJTZWN0aW9uSGVhZGluZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdHlsZXMiLCJoZWFkaW5nIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJpbWciLCJtbCIsInBvc2l0aW9uIiwidG9wIiwiY29sb3IiLCJBY2NvcmRpb24iLCJpdGVtcyIsIm9wZW5JY29uIiwiYWNjb3JkaW9uSWNvbk9wZW4iLCJjbG9zZUljb24iLCJhY2NvcmRpb25JY29uQ2xvc2UiLCJjb21iaW5lUmVkdWNlcnMiLCJzaW5nbGUiLCJwcmV2ZW50Q2xvc2UiLCJvcGVuSW5kZXhlcyIsImhhbmRsZUl0ZW1DbGljayIsIm1hcCIsImluZGV4IiwiaW5jbHVkZXMiLCJjb250ZW50cyIsIkJhc2VBY2NvcmRpb24iLCJpbnRlcm5hbFNldFN0YXRlIiwiY2xvc2luZyIsInR5cGUiLCJmaWx0ZXIiLCJsb2ciLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsImNoYW5nZXMiLCJjYWxsYmFjayIsImFsbENoYW5nZXMiLCJzZXRTdGF0ZSIsImFjdHVhbFN0YXRlIiwiY2hhbmdlc09iamVjdCIsInN0YXRlUmVkdWNlciIsIm9uU3RhdGVDaGFuZ2UiLCJyZW5kZXIiLCJBY2NvcmRpb25CdXR0b24iLCJyZXN0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjdXJzb3IiLCJib3JkZXIiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0Iiwib3V0bGluZSIsImJhY2tncm91bmRDb2xvciIsInNwYW4iLCJyaWdodCIsInRyYW5zZm9ybSIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJ2YXJpYW50cyIsIm9wZW4iLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJjbG9zZWQiLCJtYXJnaW5Ub3AiLCJBY2NvcmRpb25Db250ZW50cyIsImlzT3BlbiIsIm92ZXJmbG93WSIsInBhZGRpbmciLCJBY2NvcmRpb25JdGVtIiwib3ZlcmZsb3ciLCJsZW5ndGgiLCJzbGljZSIsInJlZHVjZXJzIiwicmVkdWNlIiwiYWNjIiwicmVkdWNlciIsIlNlcnZpY2UiLCJzZXJ2aWNlSXRlbSIsImZpZ3VyZSIsImljb24iLCJjb250ZW50IiwibWluV2lkdGgiLCJtciIsIm1iIiwiaDMiLCJtdCIsImEiLCJUZWFtTWVtYmVyIiwibWVtYmVyIiwic2VjdGlvbiIsImF2YXRhciIsImFib3V0IiwiZGVzaWduYXRpb24iLCJzb2NpYWxMaW5rcyIsInNvY2lhbCIsImxpbmsiLCJUZXN0aW1vbmlhbHNDYXJkIiwiaW1hZ2UiLCJ0ZXh0IiwidXNlcm5hbWUiLCJ0ZXN0aW1vbmlhbHNDYXJkIiwidGVzdGltb25pYWxzSW5mbyIsInRlc3RpbW9uaWFsc0ltYWdlIiwidGVzdGltb25pYWxzQ29udGVudCIsInB4IiwicHkiLCJwYiIsIkRyYXdlciIsImNsYXNzTmFtZSIsImNsb3NlQnV0dG9uIiwiY2xvc2VCdXR0b25TdHlsZSIsImRyYXdlckhhbmRsZXIiLCJ0b2dnbGVIYW5kbGVyIiwicGxhY2VtZW50IiwiZHJhd2VyU3R5bGUiLCJjbG9zZUJ0blN0eWxlIiwidHJpbSIsImRlZmF1bHRQcm9wcyIsIkZvb3RlciIsImZvb3RlciIsImZvb3RlckJvdHRvbUFyZWEiLCJGb290ZXJMb2dvIiwibXgiLCJ2YXJpYW50IiwibWVudXMiLCJtZW51SXRlbXMiLCJpZCIsImxhYmVsIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYm9yZGVyVG9wIiwiYm94U2hhZG93IiwicHQiLCJhbGlnbkNvbnRlbnQiLCJnYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwidHJhbnNpdGlvbiIsInRleHREZWNvcmF0aW9uIiwibXkiLCJuZXh0UGFnZSIsInRlbGVwaG9uZSIsImxvY2F0aW9uIiwiZ21haWwiLCJmb290ZXJOYXYiLCJmYWNlYm9vayIsInR3aXR0ZXIiLCJnaXRodWIiLCJXaWRnZXQiLCJmb290ZXJXaWRnZXQiLCJoNCIsInVsIiwibGlzdFN0eWxlIiwiY29sdW1ucyIsImxpIiwicmdiYSIsIkNvbnRhY3RVcyIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwicmVzZXQiLCJjb250cm9sIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiaXNTdWJtaXRTdWNjZXNzZnVsIiwiaXNTdWJtaXR0aW5nIiwidXNlRm9ybSIsIm1vZGUiLCJpc1N1Y2Nlc3MiLCJzZXRJc1N1Y2Nlc3MiLCJ1c2VTdGF0ZSIsIk1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRoZW4iLCJmb3JtIiwiY29udGFjdF9faGVhZGluZyIsImZsZXgiLCJmb3JtSW5wdXQiLCJyZXF1aXJlZCIsImZuYW1lIiwibG5hbWUiLCJwYXR0ZXJuIiwiZW1haWwiLCJwaG9uZSIsInRleHRBcmVhIiwiYnV0dG9ucyIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dCIsImgyIiwiSGVhZGVyIiwidXNlUm91dGVyIiwiaGVhZGVyIiwiaGVhZGVyX19jb250YWluZXIiLCJMb2dvRGFyayIsIm5hdiIsIm1lbnVDYXJlZXJJdGVtcyIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsImxlZnQiLCJhbmltYXRpb24iLCJmbGV4U2hyaW5rIiwiYm9yZGVyQ29sb3IiLCJiZyIsIk1vYmlsZURyYXdlciIsImlzQ2FyZWVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsInVzZUNhbGxiYWNrIiwibW9iaWxlRHJhd2VyIiwiZHJhd2VyIiwiY2xvc2UiLCJtb2JpbGVEcmF3ZXJfX2NvbnRlbnQiLCJtZW51IiwibWVudV9fRm9vdGVyIiwiekluZGV4IiwiYm9yZGVyQm90dG9tIiwiYnV0dG9uIiwiZnciLCJMYXlvdXQiLCJpc1N0aWNreSIsInNldElzU3RpY2t5IiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0dXMiLCJTdGlja3kiLCJTVEFUVVNfRklYRUQiLCJTVEFUVVNfT1JJR0lOQUwiLCJOYXZMaW5rIiwiTG9nbyIsInNyYyIsInVzZURpc3BhdGNoIiwicHJvdmlkZXIiLCJ1c2VDcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwidXNlU3RpY2t5U3RhdGUiLCJ1c2VTdGlja3lEaXNwYXRjaCIsIlN0aWNreVByb3ZpZGVyIiwiaXNTaWRlYmFyU3RpY2t5IiwiRXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0RGlzcGF0Y2giLCJzdGF0ZUN0eCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwYXRjaEN0eCIsInVzZVN0YXRlQ3R4IiwicHJvcGVydHkiLCJ1c2VEaXNwYXRjaEN0eCIsIlByb3ZpZGVyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsIkRyYXdlclByb3ZpZGVyIiwiQ2FyZWVyIiwibWV0YSIsIm1ldGFEYXRhIiwiY29uY2F0IiwidGhlbWUiLCJsYW5nIiwiYWNjb3JkaW9uRGF0YSIsImlzRXhwYW5kZWQiLCJwbCIsImZhcSIsInBvc19faGVhZGVyIiwicG9zX19oZWFkaW5nIiwiZmFxV3JhcHBlciIsImZsZXhXcmFwIiwiSGVybyIsImhlcm9fX3NlY3Rpb24iLCJjb250YWluZXIiLCJiYW5uZXJJY29uMSIsImJhbm5lckljb24yIiwiYmFubmVySWNvbjMiLCJiYW5uZXJJY29uNCIsImJhbm5lckljb241IiwiYmFubmVySWNvbjYiLCJoZXJvX19jb250ZW50cyIsImhlcm9fX2hlYWRpbmciLCJoZXJvIiwiaGVyb19fYnV0dG9uIiwiSGVyb0ltYWdlIiwiYmFubmVyQW5pbTEiLCJiYW5uZXJBbmltMiIsImJhbm5lckFuaW0zIiwiYm90dG9tIiwiYmFubmVySWNvbjciLCJpY29uMSIsImljb24yIiwiaWNvbjMiLCJTZXJ2aWNlcyIsImNvbnRlbnRXcmFwcGVyIiwiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiYXZhdGFyMSIsImF2YXRhcjMiLCJhdmF0YXIyIiwiVGVhbSIsInN3aXBlclJlZiIsInVzZVJlZiIsImNvbnRhaW5lclJlZiIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImNvbnRhaW5lck9mZnNldCIsInNldENvbnRhaW5lck9mZnNldCIsImlzRW5kIiwiY3VycmVudCIsInN3aXBlciIsImhhbmRsZVByZXYiLCJzbGlkZVByZXYiLCJzZXRJbnRlcnZhbCIsImFjdGl2ZUluZGV4IiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZU5leHQiLCJzbGlkZU5leHQiLCJ1c2VFZmZlY3QiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwidGVhbVdyYXBwZXIiLCJhcnJvd1JpZ2h0IiwicHIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJBdXRvcGxheSIsIlRFU1RJTU9OSUFMU19EQVRBIiwidGVzdGltb25pYWxzSW1hZ2UxIiwidGVzdGltb25pYWxzSW1hZ2UyIiwidGVzdGltb25pYWxzSW1hZ2UzIiwidGVzdGltb25pYWxzSW1hZ2U0IiwidGVzdGltb25pYWxzSW1hZ2U1IiwidGVzdGltb25pYWxzSW1hZ2U2IiwiVGVzdGltb25pYWxzIiwidGVzdGltb25pYWxDYXJvdXNlbCIsImxvb3AiLCJzcGVlZCIsImNlbnRlcmVkU2xpZGVzIiwiYXV0b0hlaWdodCIsImF1dG9wbGF5Iiwid2FpdEZvclRyYW5zaXRpb24iLCJkZWxheSIsInRlc3RpbW9uaWFscyIsInRlc3RpbW9uaWFsX19oZWFkZXIiLCJ0ZXN0aW1vbmlhbF9faGVhZGluZyIsIl9pbmRleCIsInRhYlRpdGxlIiwidGFiSW1hZ2UxIiwibGlzdCIsIm1vcmVMaW5rIiwidGFiSW1hZ2UyIiwiV2h5VXMiLCJ0YWJzIiwidGFiUGFuZSIsImlsbHVzdHJhdGlvbiIsImZsZXhHcm93Iiwid2hpdGVTcGFjZSIsIldvcmtGbG93Iiwid29ya2Zsb3ciLCJncmlkIiwiY2FyZCIsImljb25Cb3giLCJ3cmFwcGVyIiwic3ViVGl0bGUiLCJhcnJvd0FuaW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJncmlkR2FwIiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJvcGFjaXR5IiwiY29sb3JzIiwidGV4dF9zZWNvbmRhcnkiLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwibXV0ZWQiLCJtb2RlcyIsImRhcmsiLCJmb250cyIsImJvZHkiLCJmb250U2l6ZXMiLCJmb250V2VpZ2h0cyIsImJvbGQiLCJsaW5lSGVpZ2h0cyIsImxldHRlclNwYWNpbmdzIiwiY2FwcyIsInNwYWNlIiwibGF5b3V0IiwidG9vbGJhciIsIm1haW4iLCJzZWN0aW9uSGVhZGVyIiwidGV4dFRyYW5zZm9ybSIsImZvcm1zIiwidGV4dGFyZWEiLCJoZXJvUHJpbWFyeSIsImhlcm9TZWNvbmRhcnkiLCJsZWFkIiwibGlua3MiLCJkZWZhdWx0IiwibG9nbyIsImltYWdlcyIsImRlZmF1bHRCdG4iLCJ3aGl0ZUJ1dHRvbiIsInRleHRCdXR0b24iLCJzdmciLCJyb290IiwiZm9udFNtb290aGluZyIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvY2FyZWVyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhcyxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcylcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSlcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG4gIGRlY29kZTogZGVjb2RlUGFyYW0sXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0ocGFyYW06IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKVxuICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgKVxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2VuY29kZVVSSShcbiAgICAgIGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU9TSWdkbWxsZDBKdmVEMGlNQ0F3SURFMklEa2lJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4d1lYUm9JR1E5SWswNExqTXlPRFF4SURndU56YzBNakZET0M0d05UazJOU0E0TGpjMk9ESXlJRGN1Tnprek1qRWdPQzQyTlRrMk1pQTNMalU1TWpnMklEZ3VORFV3TWpSTU1TNHlPRGcwTlNBeExqZzFPRFEwUXpBdU9EZzNOREEwSURFdU5ETTVNVElnTUM0NU1ESXlNaUF3TGpjM05EQTRNU0F4TGpNeU1UVTBJREF1TXpjek1qQTBRekV1TnpRd05qa2dMVEF1TURJM05qYzNNU0F5TGpRd05UVTVJQzB3TGpBeE1qZzJNek1nTWk0NE1EWTJOeUF3TGpRd05qSTVNa3c0TGpNNE5Ea2dOaTR5TXprd09Fd3hOQzR5TVRjMElEQXVOall3TnpFMlF6RTBMall6TmpjZ01DNHlOVGs0TXprZ01UVXVNekF4TlNBd0xqSTNORFkxTVNBeE5TNDNNREkwSURBdU5qa3pPREF5UXpFMkxqRXdNellnTVM0eE1USTVOaUF4Tmk0d09EZzRJREV1TnpjNElERTFMalkyT1RNZ01pNHhOemt3TkV3NUxqQTNOelkySURndU5EZ3pOVEpET0M0NE5qZ3dPU0E0TGpZNE16Z2dPQzQxT1Rjd09DQTRMamM0TURJZ09DNHpNamcwTVNBNExqYzNOREl4V2lJZ1ptbHNiRDBpSXpBeU1EY3pSU0l2UGdvOEwzTjJaejRLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1NJZ2FHVnBaMmgwUFNJeE5TSWdkbWxsZDBKdmVEMGlNQ0F3SURrZ01UVWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4d1lYUm9JR1E5SWswNExqWTVPRGc0SURjdU5UQXdNRE5ET0M0Mk9UZzRPQ0EzTGpjMk9EZzJJRGd1TlRrMk1qTWdPQzR3TXpjMk5TQTRMak01TVRNM0lEZ3VNalF5TmpGTU1TNDVOREUyTXlBeE5DNDJPVEl6UXpFdU5UTXhNelVnTVRVdU1UQXlOaUF3TGpnMk5qRTBNeUF4TlM0eE1ESTJJREF1TkRVMk1ESTJJREUwTGpZNU1qTkRNQzR3TkRVNU1EZ3hJREUwTGpJNE1qSWdNQzR3TkRVNU1EZ3hJREV6TGpZeE56RWdNQzQwTlRZd01qWWdNVE11TWpBMk9FdzJMakUyTXpFeElEY3VOVEF3TUROTU1DNDBOVFl5TWpVZ01TNDNPVE15TkVNd0xqQTBOakV3TnpRZ01TNHpPREk1TlNBd0xqQTBOakV3TnpRZ01DNDNNVGM1TkRnZ01DNDBOVFl5TWpVZ01DNHpNRGM0TmpORE1DNDROall6TkRNZ0xUQXVNVEF5TmpFNUlERXVOVE14TlRVZ0xUQXVNVEF5TmpFNUlERXVPVFF4T0RNZ01DNHpNRGM0TmpOTU9DNHpPVEUxTnlBMkxqYzFOelEwUXpndU5UazJORFlnTmk0NU5qSTFJRGd1TmprNE9EZ2dOeTR5TXpFeU9TQTRMalk1T0RnNElEY3VOVEF3TUROYUlpQm1hV3hzUFNJak1ESXdOek5GSWk4K0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQTBJaUJvWldsbmFIUTlJalF6SWlCMmFXVjNRbTk0UFNJd0lEQWdNakEwSURReklpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284Y0dGMGFDQmtQU0pOTUM0ME9ERXlNREVnTVRBdU1qVTNNVU13TGpRNE1USXdNU0F4TUM0eU5UY3hJRGt5TGpjNE1USWdPREV1TnpnME55QXhPVFV1TkRneElERXdMakkxTnpFaUlITjBjbTlyWlQwaUkwTXlRMEpFUlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4TGpVaUlITjBjbTlyWlMxa1lYTm9ZWEp5WVhrOUlqVWdOU0l2UGdvOGNHRjBhQ0JrUFNKTk1UZ3dMamNnTXk0ME56UTFOVU14T0RBdU55QXpMalEzTkRVMUlERTVPUzQ0TVRVZ0xUSXVNRFV4TnpjZ01qQXhMall6TnlBMExqSXdPVEUyUXpJd015NDBOVGtnTVRBdU5EY3dNU0F5TURJdU1Ea3pJREUyTGprME5EUWdNVGsyTGpFM05pQXlOUzQ0TVRReUlpQnpkSEp2YTJVOUlpTkRNa05DUkVVaUlITjBjbTlyWlMxM2FXUjBhRDBpTVM0MUlpQnpkSEp2YTJVdFpHRnphR0Z5Y21GNVBTSTBJRFFpTHo0S1BDOXpkbWMrQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQTBJaUJvWldsbmFIUTlJalF6SWlCMmFXVjNRbTk0UFNJd0lEQWdNakEwSURReklpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284Y0dGMGFDQmtQU0pOTUM0NU9UazNOVFlnTXpJdU56RTVOVU13TGprNU9UYzFOaUF6TWk0M01UazFJRGt6TGpJNU9UZ2dMVE00TGpnd09ERWdNVGsySURNeUxqY3hPVFVpSUhOMGNtOXJaVDBpSTBNeVEwSkVSU0lnYzNSeWIydGxMWGRwWkhSb1BTSXhMalVpSUhOMGNtOXJaUzFrWVhOb1lYSnlZWGs5SWpVZ05TSXZQZ284Y0dGMGFDQmtQU0pOTVRneExqSXhPU0F6T1M0ME9UYzJRekU0TVM0eU1Ua2dNemt1TkRrM05pQXlNREF1TXpNMElEUTFMakF5TkNBeU1ESXVNVFUySURNNExqYzJNME15TURNdU9UYzRJRE15TGpVd01Ua2dNakF5TGpZeE1TQXlOaTR3TWpjMUlERTVOaTQyT1RRZ01UY3VNVFUzTlNJZ2MzUnliMnRsUFNJalF6SkRRa1JGSWlCemRISnZhMlV0ZDJsa2RHZzlJakV1TlNJZ2MzUnliMnRsTFdSaGMyaGhjbkpoZVQwaU5DQTBJaTgrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTkRNaUlHaGxhV2RvZEQwaU5EZ2lJSFpwWlhkQ2IzZzlJakFnTUNBME15QTBPQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRURXhMaklnTVRNdU16a3hNVXd3SURFM0xqazVNVEZNTVRJdU5TQTBOeTQ1T1RFeFREUXlMalVnTXpVdU5Ea3hNVXd6Tnk0M0lESXpMamc1TVRGRE16Y3VOaUF5TXk0M09URXhJRE0zTGpZZ01qTXVOemt4TVNBek55NDFJREl6TGpjNU1URkRNemN1TkNBeU15NDNPVEV4SURNM0xqUWdNak11TmpreE1TQXpOeTR6SURJekxqWTVNVEZETXpjdU1pQXlNeTQxT1RFeElETTNMakVnTWpNdU5Ua3hNU0F6Tmk0NUlESXpMalU1TVRGRE16WXVPU0F5TXk0MU9URXhJRE0yTGprZ01qTXVOVGt4TVNBek5pNDRJREl6TGpVNU1URklNell1TjBnek5pNDJTRE0yTGpWRE16WXVOQ0F5TXk0MU9URXhJRE0yTGpRZ01qTXVOVGt4TVNBek5pNHpJREl6TGpVNU1URklNell1TWtNek5pNHhJREl6TGpVNU1URWdNellnTWpNdU5Ua3hNU0F6TlM0NUlESXpMalk1TVRGRE16VXVOQ0F5TXk0NE9URXhJRE0xTGpFZ01qUXVNamt4TVNBek5TQXlOQzQyT1RFeFF6TTBMallnTWpZdU1Ua3hNU0F6TXk0MUlESTNMalU1TVRFZ016RXVPU0F5T0M0eE9URXhRekk1TGpJZ01qa3VNamt4TVNBeU5pNHhJREkzTGprNU1URWdNalF1T1NBeU5TNHlPVEV4UXpJekxqZ2dNakl1TlRreE1TQXlOUzR4SURFNUxqUTVNVEVnTWpjdU9DQXhPQzR5T1RFeFF6STVMalFnTVRjdU5Ua3hNU0F6TVM0eElERTNMamM1TVRFZ016SXVOU0F4T0M0MU9URXhRek15TGprZ01UZ3VOemt4TVNBek15NDBJREU0TGpnNU1URWdNek11T1NBeE9DNDJPVEV4UXpNMElERTRMalk1TVRFZ016UXVNU0F4T0M0MU9URXhJRE0wTGpFZ01UZ3VOVGt4TVVNek5DNHhJREU0TGpVNU1URWdNelF1TWlBeE9DNDFPVEV4SURNMExqSWdNVGd1TkRreE1Vd3pOQzR6SURFNExqTTVNVEZNTXpRdU5DQXhPQzR5T1RFeFRETTBMalVnTVRndU1Ua3hNVXd6TkM0MklERTRMakE1TVRGRE16UXVOaUF4T0M0d09URXhJRE0wTGpZZ01UZ3VNRGt4TVNBek5DNDJJREUzTGprNU1URkRNelF1TnlBeE55NDRPVEV4SURNMExqY2dNVGN1TnpreE1TQXpOQzQ0SURFM0xqWTVNVEZETXpRdU9DQXhOeTQxT1RFeElETTBMamdnTVRjdU5Ua3hNU0F6TkM0NElERTNMalE1TVRGRE16UXVPQ0F4Tnk0ek9URXhJRE0wTGpnZ01UY3VNemt4TVNBek5DNDRJREUzTGpJNU1URk1NekFnTlM0MU9URXhNVXd4T0M0NElERXdMakk1TVRGRE1UZ2dNVEF1TkRreE1TQXhOeTR5SURFd0xqRTVNVEVnTVRZdU9TQTVMak01TVRFeFF6RTJMamNnT0M0NE9URXhNU0F4Tmk0NElEZ3VNemt4TVRJZ01UY2dOeTQ1T1RFeE1rTXhOeTQ0SURZdU5Ua3hNVEVnTVRnZ05DNDRPVEV4TVNBeE55NHpJRE11TWpreE1URkRNVFl1TWlBd0xqVTVNVEV4TlNBeE15NHhJQzB3TGpjd09EZzROU0F4TUM0eklEQXVNemt4TVRFMVF6Y3VOaUF4TGpRNU1URXhJRFl1TXlBMExqVTVNVEV4SURjdU5DQTNMak01TVRFeVF6Z2dPQzQ1T1RFeE1pQTVMalFnT1M0NU9URXhNU0F4TUM0NUlERXdMalE1TVRGRE1URXVNeUF4TUM0MU9URXhJREV4TGpjZ01UQXVPRGt4TVNBeE1TNDVJREV4TGpNNU1URkRNVEl1TXlBeE1pNHdPVEV4SURFeExqa2dNVEl1T1RreE1TQXhNUzR5SURFekxqTTVNVEZhSWlCbWFXeHNQU0lqUkVGRk1rVTRJaTgrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRNaUlHaGxhV2RvZEQwaU5EVWlJSFpwWlhkQ2IzZzlJakFnTUNBMU15QTBOU0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRUUTVMakF4TkRZZ01qUXVORGs1TmtNME9DNDNPVE0ySURJMUxqUTNORGtnTkRjdU9ETTJOaUF5Tmk0d056Z3pJRFEyTGpnMk1UTWdNalV1T0RVM00wdzBNeTR6TlRBeklESTFMakEyTVRkTU5ERXVPREkxTlNBek1TNDNPVEV4VERNMExqZzJOVFFnTWpNdU1UTTVNVXd5TXk0ME5UUTNJREl3TGpVMU16UkRNakl1TkRjNU5DQXlNQzR6TXpJMUlESXhMamczTmlBeE9TNHpOelUwSURJeUxqQTVOeUF4T0M0ME1EQXlUREkxTGpZM056RWdNaTQyTURBM01VTXlOUzQ0T1RneElERXVOakkxTkRNZ01qWXVPRFUxTVNBeExqQXlNakF4SURJM0xqZ3pNRFFnTVM0eU5ETXdNVXcxTVM0eU16Y2dOaTQxTkRZNE9FTTFNaTR5TVRJeklEWXVOelkzT0RnZ05USXVPREUxTnlBM0xqY3lORGc1SURVeUxqVTVORGNnT0M0M01EQXhOMHcwT1M0d01UUTJJREkwTGpRNU9UWmFJaUJtYVd4c1BTSWpSRUZGTWtVNElpOCtDanh3WVhSb0lHUTlJazAxTGpJMk5qWWdNemd1TXpjME9FdzNMakkxTlRVMklESTVMalU1TnpOTU5TNDJPVFV4TWlBeU9TNHlORE0zUXpNdU5qUTNNRFFnTWpndU56YzVOaUF5TGpNMk5EYzJJREkyTGpjME5pQXlMamd5T0RnMUlESTBMalk1TnpsTU5pNDBNRGc1TnlBNExqZzVPRFF6UXpZdU9EY3pNRFlnTmk0NE5UQXpOU0E0TGprd05qY3lJRFV1TlRZNE1EY2dNVEF1T1RVME9DQTJMakF6TWpFMlRETTBMak0yTVRRZ01URXVNek0yUXpNMkxqUXdPVFVnTVRFdU9EQXdNU0F6Tnk0Mk9URTNJREV6TGpnek16Z2dNemN1TWpJM055QXhOUzQ0T0RFNVRETXpMalkyT1RZZ016RXVOVGd6T0VNek15NHlNRFUySURNekxqWXpNVGtnTXpFdU1UY3hPU0F6TkM0NU1UUXhJREk1TGpFeU16Z2dNelF1TkRVd01Vd3hPQzR6T1RVNElETXlMakF4T1RGTU5TNHlOalkySURNNExqTTNORGhhVFRVdU56azJNalVnTWpZdU1qZzVNMHd4TWk0d05qSTNJREkzTGpRNE1qZE1NVEF1TURBeUlETXpMakUyTkV3eE9DNHdNVEU1SURJNExqZ3pNRGRNTXpBdU9URXdNeUF6TVM0MU1qWTVURE0wTGpRd01pQXhOQzR4TVRjMVRERXdMakk0T0NBNExqZzNPVGswVERVdU56azJNalVnTWpZdU1qZzVNMW9pSUdacGJHdzlJaU5FUVVVeVJUZ2lMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpNNUlpQm9aV2xuYUhROUlqUTFOaUlnZG1sbGQwSnZlRDBpTUNBd0lETXpPU0EwTlRZaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHUTlJazB6TURFdU9EUWdOakF1TWpnME0wd3pNRE11TnprNElEVTFMamt3TWpGRE1qZzNMall4T0NBMU9TNHhNakUzSURJM015NDBNREVnTmpVdU1qWXlNaUF5TmpFdU5EVXlJRGMwTGpNeE1EaERNalEwTGpZZ09EY3VNRFkwSURJek5pNHlOak1nTVRBeUxqVXhOaUF5TXpJdU1qSXpJREV4TXk0eU1qZERNak13TGpRek1TQXhNVGd1TURBeUlESXlPUzR3T1RjZ01USXlMamc1T0NBeU1qZ3VNekUwSURFeU55NDJNVFJETWpJeUxqWXpNaUF4TWpjdU16Y3pJREl4Tmk0eU5qSWdNVEk0TGpNek5pQXlNRGt1TlNBeE16QXVORFkxUXpFNU5pNDVPVGtnTVRNMExqTTVNaUF4T0RndU1UWTJJREUwTkM0eU5Ua2dNVGd4TGpZMU5DQXhOakV1TlRBMlF6RTNOUzQ1SURFM05pNDNOekVnTVRjeUxqVTJPU0F4T1RVdU9EZzNJREUyT0M0M01ERWdNakU0TGpBeVF6RTJOUzR4TWlBeU16Z3VOVFUySURFMk1TNHdOaUF5TmpFdU9ETTNJREUxTkM0eU9DQXlPRFF1TmpBMlF6RTBOaTQxTmpVZ016RXdMall4TmlBeE16WXVORFEzSURNek1pNHhNRFlnTVRJekxqTTRPU0F6TlRBdU1qaERNVEV5TGpVNU9DQXpOalV1TWprMUlEazVMalkzTXpNZ016YzNMakVnT0RRdU9Ua3pOaUF6T0RVdU16YzFRemN5TGpJeE1EZ2dNemt5TGpVMk1TQTFOeTQyT0RZeUlETTVOeTR5T0RjZ05ERXVOemN5SURNNU9TNDBNek5ETWpjdU56Z3pOeUEwTURFdU16TTBJREV6TGpjeU5UWWdOREF4TGpJNE55QXdMakF4TkRnM09Ua2dNems1TGpnME1rd3hNQzR6T1RZeklEUXdOQzQwT0RKRE1qQXVPRGsxTkNBME1EVXVNVE1nTXpFdU5qSTJPQ0EwTURRdU56TXpJRFF5TGpNeE9UUWdOREF6TGpJM05VTTFPQzQzTVRnMklEUXdNUzR3TkRjZ056TXVOekkwTXlBek9UWXVNVFV6SURnMkxqa3pNamdnTXpnNExqY3pNa014TURJdU1URTFJRE00TUM0eE9USWdNVEUxTGpRME1pQXpOamd1TURFeklERXlOaTQxTnlBek5USXVOVE14UXpFek9TNDROelFnTXpNekxqazVPU0F4TlRBdU1UYzFJRE14TWk0eE5EVWdNVFU0TGpBeUlESTROUzQzTURKRE1UWTBMamcxTVNBeU5qSXVOekl6SURFMk9DNDVOREVnTWpNNUxqTXlPQ0F4TnpJdU5USTJJREl4T0M0Mk9EZERNVGMyTGpNMUlERTVOaTQzTkRjZ01UYzVMalkzTVNBeE56Y3VOemszSURFNE5TNHlPVE1nTVRZeUxqZzNOME14T1RFdU16TTFJREUwTmk0NE1qVWdNVGs1TGpRd055QXhNemN1TnpBMElESXhNQzQyTmprZ01UTTBMakUxT1VNeU1UY3VOamd4SURFek1TNDVOU0F5TWpNdU16UXlJREV6TVM0ek15QXlNamN1TnpZeklERXpNUzQwTnpaRE1qSTNMalV6T0NBeE16TXVOalV6SURJeU55NDBNalFnTVRNMUxqYzNNeUF5TWpjdU5ETTJJREV6Tnk0NFF6SXlOeTQxTURRZ01UUTFMakUxTXlBeU1qa3VNalF6SURFMU1DNDROamtnTWpNeUxqTXlOeUF4TlRNdU9EWTBRekl6TkM0M09Ua2dNVFUyTGpJMk9DQXlNemd1TURRMElERTFOaTQ0TkRZZ01qUXhMalEwTmlBeE5UVXVORFZETWpRMExqazVNeUF4TlRRdU1ERXpJREkwTnk0Mk1EUWdNVFV4TGpjeElESTBPQzQ1T1RrZ01UUTRMamMzT1VNeU5UQXVNek01SURFME5TNDVOeklnTWpVd0xqUTFOaUF4TkRJdU56UTJJREkwT1M0ek5ESWdNVE01TGpZNU5FTXlORGN1TlRNeklERXpOQzQzTlRZZ01qUXlMamd6TnlBeE16QXVPREkzSURJek5pNDBNallnTVRJNExqa3hPVU15TXpVdU1EY3lJREV5T0M0MU1EWWdNak16TGpZMk15QXhNamd1TWpFM0lESXpNaTR4T0RjZ01USTNMams0TTBNeU16SXVPVFVnTVRJekxqVTVPQ0F5TXpRdU1UZzNJREV4T1M0d05qUWdNak0xTGpnMk1pQXhNVFF1TlRrM1F6SXpPUzQzTXpFZ01UQTBMak0yTkNBeU5EY3VOamdnT0RrdU5UZzVPU0F5TmpNdU56a2dOemN1TXprNE9FTXlOelF1TmpFNElEWTVMakl6TWpnZ01qZzNMak0yTWlBMk15NDFNVGsySURNd01TNDROQ0EyTUM0eU9EUXpXazB5TXpVdU16STVJREV6TWk0Mk5qVkRNalF3TGpVeU9TQXhNelF1TWpJeklESTBOQzR6TVRNZ01UTTNMakkzTmlBeU5EVXVOamcySURFME1TNHdORU15TkRjdU16RTVJREUwTlM0MU5Ua2dNalExTGpBM05pQXhORGt1T0RFMElESXpPUzQ1TmlBeE5URXVPRGt4UXpJek9DNHdNRFlnTVRVeUxqWTNPQ0F5TXpZdU16ZzVJREUxTWk0ME1qTWdNak0xTGpBME9DQXhOVEV1TVRJeVF6SXpNaTQzTlRnZ01UUTRMamc0TlNBeU16RXVNems0SURFME5DNHdOREVnTWpNeExqTXpOeUF4TXpjdU9ESkRNak14TGpNeE1pQXhNelV1T1RFMElESXpNUzQwTVRVZ01UTXpMamt4TnlBeU16RXVOalUwSURFek1TNDROVEpETWpNekxqQTFPU0F4TXpJdU1EVTFJREl6TkM0eU56WWdNVE15TGpNME15QXlNelV1TXpJNUlERXpNaTQyTmpWYUlpQm1hV3hzUFNJalJFRkZNa1U0SWk4K0NqeHdZWFJvSUdROUlrMHpNemd1TnpRNUlEUTVMamMwTmt3eU9EUXVPRGc1SURNNExqSTFNVFZNTWpreUxqWXpOeUExTWk0Mk5UZ3pURE15TlM0d05UUWdOVEV1TmpZNU0wd3lPVFV1TkRrNElEVTNMamszTnpSTU1qazFMalV3TlNBMU55NDVPVEV5VERJNU5TNDBPVFVnTlRjdU9UYzFNa3d5T0RZdU56VXhJRFkzTGpnNU1UZE1Nams1TGpnME1TQTJOaTR3TlRNMFRETXdOUzR6TkRZZ056WXVNamc0TWt3ek16Z3VOelE1SURRNUxqYzBObG9pSUdacGJHdzlJaU5FUVVVeVJUZ2lMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpNNElpQm9aV2xuYUhROUlqTXhOaUlnZG1sbGQwSnZlRDBpTUNBd0lETXpPQ0F6TVRZaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHUTlJazB4TVRndU16STRJRGcxTGpneU9ERkRNVEV6TGpRek15QTNOQzR6TWpBMUlERXdOaTR3TVNBMk5DNHdNelVnT1RZdU9EWTJNeUExTmk0eE1UbERPRGt1TURnek55QTBPUzR6TlRNZ056a3VOelE0SURRMExqQTRNakVnTmprdU5qa3dOaUEwTUM0M01ETTJURGN4TGpjMk9URWdNemN1TVRjM00wTTRNaTR4TkNBME1DNDRNU0E1TVM0MU1UUXhJRFEyTGpFM016RWdPVGt1TkRreU9TQTFNeTR3TnpjNVF6RXdPUzR3T1RJZ05qRXVOREF4TWlBeE1UWXVPRGMwSURjeUxqRTNOeUF4TWpJdU1ERTNJRGcwTGpJME56WkRNVEkzTGpFMU9TQTVOaTR6TVRneUlERXlPUzQxTURJZ01UQTVMalF3TkNBeE1qZ3VPREk1SURFeU1pNHhNRE5ETVRJNExqWTBOQ0F4TWpVdU5qZ2dNVEk0TGpJeE15QXhNamt1TWpBeklERXlOeTQxTmpFZ01UTXlMalkyTjBNeE16Z3VOemcxSURFME55QXhORFV1T0RjeElERTJNeTQ0TXpJZ01UVXhMamd4T1NBeE9EQXVNRFJETVRVekxqSTNNeUF4T0RNdU9UZ2dNVFUwTGpZNU5DQXhPRGd1TURFMklERTFOaTR3TmpNZ01Ua3hMamt3TlVNeE5qRXVNVEF5SURJd05pNHhNVGNnTVRZMkxqTXdOU0F5TWpBdU56azJJREUzTXk0Mk1UVWdNak0wTGpFME5FTXhPREV1T0RZeElESTBPUzR5TURNZ01Ua3pMakk0TXlBeU5qTXVNREEwSURJd05pNDJORGdnTWpjMExqQTFPRU15TWpBdU16ZzFJREk0TlM0ME1qTWdNak0xTGpZMklESTVNeTQzTURnZ01qVXlMakEySURJNU9DNDJOamxETWpVNExqYzVNeUF6TURBdU5qa3hJREkyTlM0M0lETXdNaTR4TkRJZ01qY3lMall4TWlBek1ESXVPVGsxVERJM01DNDBNVEVnTXpBMkxqY3lPRU15TmpNdU56Z3pJRE13TlM0M09EY2dNalUzTGpNd01TQXpNRFF1TkRBeElESTFNQzQ1TVRJZ016QXlMalEyTmtNeU5EQXVPVEU1SURJNU9TNDBOU0F5TXpFdU16RTBJREk1TlM0eU1qVWdNakl5TGpJek5DQXlPRGt1T0RjelF6SXhOUzQ1TkNBeU9EWXVNVFkwSURJd09TNDRPRElnTWpneExqZzVOeUF5TURRdU1TQXlOemN1TVRJeVF6RTVNQzR6TmpNZ01qWTFMamMxTnlBeE56Z3VOakF6SURJMU1TNDFORGNnTVRjd0xqRXhJREl6Tmk0d05ESkRNVFl5TGpZMU9DQXlNakl1TkRJMElERTFOeTR6T0RVZ01qQTNMalU0T0NBeE5USXVNekVnTVRrekxqSTBRekUxTUM0NU5ESWdNVGc1TGpNMUlERTBPUzQxTVRFZ01UZzFMak16TWlBeE5EZ3VNRFl6SURFNE1TNDBNVGxETVRReUxqVTRJREUyTmk0MU1EVWdNVE0yTGpFMU5pQXhOVEV1TVRBMklERXlOaTQwTURJZ01UTTNMamMzT0VNeE1qTXVNRFFnTVRVd0xqWTNOeUF4TVRZdU5EWTRJREUyTWk0eE1ERWdNVEEzTGpRd01TQXhOekF1TkRBNFF6RXdNQzQyT0RNZ01UYzJMalUzTnlBNU1pNDBNakUwSURFNE1TNHdNRElnT0RNdU5URTJNaUF4T0RNdU1qRTNRemMwTGpJNE15QXhPRFV1TlRFMklEWTBMams0TlRZZ01UZzFMakkxTVNBMU5pNDJNVFk1SURFNE1pNDBNamhETkRndU1EUTFPU0F4TnprdU5UVTBJRFF3TGpRd056RWdNVGN6TGpZNE5DQXpOUzR3TlRRM0lERTJOUzQ1TkVNeU9TNDFOek01SURFMU55NDVPREVnTWpjdU1UQTJOeUF4TkRndU56WXlJREk0TGpBM016SWdNVE01TGprMk9FTXlPUzR4TXpnNElERXpNQzR5TlRrZ016UXVNek0zTmlBeE1qRXVNRGcxSURReUxqY3hNRElnTVRFMExqRTFNME0xTUM0Mk1qWTVJREV3Tnk0Mk1ERWdOakF1T0RnME1TQXhNRE11TlRZMElEY3dMamczTnpZZ01UQXpMakE0UXpnd0xqVTFOak1nTVRBeUxqWXlJRGt3TGpNMU5EZ2dNVEEwTGpneU5pQTVPUzQ1TkRjeElERXdPUzQyTWpKRE1UQTRMall6TWlBeE1UTXVPVFV6SURFeE5pNDRORE1nTVRJd0xqTTBOaUF4TWpNdU5qazVJREV5T0M0d09UVkRNVEl6TGpnME55QXhNamd1TWpjMklERXlOQzR3TURZZ01USTRMalF6T1NBeE1qUXVNVFUxSURFeU9DNDJNVGxETVRJMExqUTNOeUF4TWpZdU5ESXlJREV5TkM0Mk9EVWdNVEkwTGpFNElERXlOQzQ0TURVZ01USXhMamt6TTBNeE1qVXVORFkxSURFd09TNDRNRFlnTVRJekxqSXlNeUE1Tnk0ek16VTNJREV4T0M0ek1qZ2dPRFV1T0RJNE1WcE5NVEl3TGpjek15QXhNekF1TnpJNFF6RXhOQzR5TURrZ01USXpMak0ySURFd05pNDBNRFVnTVRFM0xqSTVPU0E1T0M0eE56QXhJREV4TXk0eE9EZERPRGt1TVRneU9DQXhNRGd1TnpBeElEZ3dMakEyTXpNZ01UQTJMalkwSURjeExqQTNOaUF4TURjdU1EWTRRell4TGprME5Ea2dNVEEzTGpVd05DQTFNaTQxTXpReElERXhNUzR5TURVZ05EVXVNamd3T1NBeE1UY3VNakl4UXpNM0xqY3hORGNnTVRJekxqUTVNeUF6TXk0d01UZzVJREV6TVM0M016VWdNekl1TURZeE55QXhOREF1TXprMVF6TXdMakk1TkRJZ01UVTJMak0yTmlBME1TNDJOVGszSURFM015NHhOekVnTlRjdU9URTJOQ0F4TnpndU5qVXhRelkxTGpVMU1EUWdNVGd4TGpJeU5pQTNOQzR3T0RBM0lERTRNUzQwTlRZZ09ESXVOVGMxT0NBeE56a3VNelE0UXprd0xqZ3pOVEVnTVRjM0xqSTROaUE1T0M0ME9ETXhJREUzTXk0eE9UVWdNVEEwTGpjeU1pQXhOamN1TkRnMVF6RXhNeTQ1TWpJZ01UVTVMakEzSURFeU1DNHpPVFFnTVRRM0xqRTBOeUF4TWpNdU1qY3pJREV6TXk0M016SkRNVEl5TGpRMUlERXpNaTQyT1NBeE1qRXVOVGszSURFek1TNDNNREVnTVRJd0xqY3pNeUF4TXpBdU56STRXaUlnWm1sc2JEMGlJMFJCUlRKRk9DSXZQZ284Y0dGMGFDQmtQU0pOTXpNdU9UazVNeUF5Tmk0Mk1EVXhURGcxTGpFek1UUWdNakF1TXpRek9FdzNOaTQzTWpJeklETXpMakV5TnpGTU5EWXVOakF3TkNBeU9TNDFNamd5VERjekxqWXhOemNnTXpjdU9EUTJPRXczTXk0Mk1EazNJRE0zTGpnMU9VdzNNeTQyTWpBeUlETTNMamcwTkRsTU9EQXVPVFE0TWlBME55NDRNRFkyVERZNExqa3dNellnTkRVdU1ERXlOMHcyTWk0NU1qazRJRFUwTGpBNU5ERk1Nek11T1RrNU15QXlOaTQyTURVeFdpSWdabWxzYkQwaUkwUkJSVEpGT0NJdlBnbzhMM04yWno0S1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci1pY29uLTEtNS02ZjYwMzc0ODFjMjg2YWMxYjViN2VkZTgwOGUwYTMxNC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLWljb24tMS02LTBkZTZkZGMwYzBiYjUwYmRhMGIzZTAzNDhlMDI4OTFmLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUMwQUFBQXRDQU1BQUFBTnhCS29BQUFDOTFCTVZFVUFBQUNabFlQQ3Q2ZS9uWW1lbW9tWmxvVzJyNTdsNDkyOHVMQ3BvcEdibG9PWmxJUFgwOGkvdDZlV2tvQ3Bvby9ZenIrZW1ZbmExY3VzcUpmTXdLeWFsWVVWSWkzbDR0N0p3YkhhMTh6SHdMS1NrSUd3cXBldW1ZZkt0YUFhSmpEajQ5Njl0cVVhS0MrZm00dmw1T0Rkd3F5c3BKVG01dUhDeGIyMnVyek1xWlJRU1VqZzN0WFp1Si9tNXVCWlMwaWFlbW5IdjdDcW9wTGJ1NlhrMzl1TGNtYkh2Ni9rMzlxQVpXRGczZGJrNHQzZDJ0REh2N0M3dGFNYUtERVNJeS9OeHJqRnZhM0R1NnpCdXFxK3RxV21vSkNnbTRzcExUUVVKVExqNE52aTM5alB5YnpMeExhMnJwMFlKaXplM05QYjE4MjRzWjZ3cXBqV3NaZXZwNWFwbzVHSWFGdFhSa1JOUHo1SFBqN2w1Ti9aMWNyVjBzYS91S2R5VlUxSE9UY2hMRFlkS2pNZ0tUQVhKQy9Jd2JIbnhhM2Z1cUc1c3FIYXM1czdOenNrTERFVkp5N1gxTW5TemNIS3c3TGp2NmFkbVlpWWxJS1dkMmg0WGxWdVZFeEFPVG8zTkRjZUp5ekp3clhhdXFDenJKbllxNWVzcFpUTnBZdUFZVnA3VzFEVHpzTHB5TERtd3FyRW9vdVNrSU91algxL2FHRjNWMDFkU2taT1JFTXlNVExrNE5ucXpybnF5N1Rqd3F6UnRKeXpySnlYbFlpeGcyK3FmV3AxVzFSdldsSmdUVXhqVFVoV1FUOHdOamhRT2pmbDR0M3R6N3JPdXFqZHZhVFFxSkdobm8zTW40bTJsSVcra0h1ZWVXdWpkMmVlZFdTWmNHR0ZZMWVBWGxGalVreGFTMGxxVUVoYlFqOHVMelltS0NybHg3SGR3cXZZdktYaHU2UGV0NXZLcnByUnE1U2xub3pGbm9xNm1vZkVtWVhCbFlDQ2dudTBqWGk2aUhhdGhuV3NnVzlwYldoYVdsaHBVazlNVUV4VVJVSmpTVUVSSXlyZjM5dmgzTk8xcjZIWHNwNjJwcHU4bjVPb201T05pSDZqZzNGdGMzQjJlRytEZVc2YmdHeURjR21WYzJTUGJXTm5XVk5kVkZGdVRVVXVMaTg3TVMzeTE4VFUwTVMydGF2cXZLbXFxSnk5cHBlam9aZWRucFdwazRXVWJsNlNaMW8wTzBIU3pML0h1S1hWckkydmw0MmNoSG1pZm15S2QycDFiV2gyYUdOY1gxNXhZMXRGUjBmejRkUEN4OFc5dmJTanBxZkRySm16b3BPdWIyU1NYRlhVTGRvUUFBQUFPWFJTVGxNQUlDRDlmKy9uSUJEbDJycXduNTl3YTJWS1NqQXdJTy92NTkvZng3K29vSUNBZ0VEdjcrL2YzOS9mMzgvUHY3K3ZuNStBY0hCZ01EQTJkbmVCQUFBRjZVbEVRVlJJeDMyVVpWaVRVUmlHUDhYdTd1N3VBdGtHQ0d3b1RHQ3dRRjJ5c1ExMXNqRnd6akdKYld3UzBpVWdxWFFqM1dGTHQ5M2Q3US9QOXdHMjNyL3Y4NXpuUGRlNVh1aDNKbzhkTTJLRW40UEQ0SkVqeDArRy9zdUFRWU9OalkwUEhmTHpLR21xckd3c21UbG13TC9kMmFjQXhzWitqVFZZSmg2UHB6K3N1dXJ4RDMvWUlDT0VVMDFoZUJZT2h3R3crRFVlSGg2RC9oWTgzTnJhK3FpMXRkOXI1M3FnSXJvOUd2c2FqRER6ai9pRlM0NWFBZTQwZGJNd09FdzlIczNBcy9CNEJ2MWhpUU9ZZU9LdjhuZ3JLMHZMUzVhbjNqTEEvZmIyOW1nMG5ZNUdNK2owOUU0SE1MVEQrSi9saVpZbkFCZHUxZUJ4c0FrOE5JUFBwTlBwVEw3WUEzNGtoNFUvNUlGRFRwZ0JMbFNpY1RoN1BKcVBUZGRvZW1nVW1waEd5OENXZU1DUE92aEg5eUZtWmhaMmRuWVh3bGc0ZXhZVHl5T1RVdVZFb2JDTjJOS1NnZzJyOFRNNmEzeG94TEErZWI2ZEhRcm1GaC8wWUtUenlIWHkrd24rY1RIUitVK2V4SFprT0ZjWndmcWd2aDRvbENIQ0hXZlFBOHVqaEtZbUpmaVh4ZVJ6SmJtNUZ4VTlyREJqUk8vdE1ucmZ2aDBJd01ZNTh5aHFUOGN6QVdYRkJJS0V3eEZ3ZlVWTS90V2oxa0FmaVVRYkdCam9JOXgxeHFHeFluSnRpT3BCUUZ3TWdjQ0pZcnR4SkxFYVpyTVZvc1BoNjNWaGJHMXRkV0c3bXhMcW1acDAzNzg0aGt2ZytHUzZ1dVVRZ3AyYkxTMkJiZ1EzbjNFWXh0VDA4T0ViVERSVFE2NEZSVTc3RjhtNEJFS09UeVpid0ZVeW00NVlnblRyNFJBMFNlODdONXdaNlJRU0tTVllSQ3lQa1hLalpia0NkcVlnVjhqM09OS3JUNGJHN2ZwQkdKYmlTVktMblhqaWp2Sm9pVlFtaTcyY0orRW9LTGNzekU3QStsaG8xSUUrSGowNlVLVkpDYTUxNmlGVHdycnJTdk9sTWlVNVBKVkkwSHFEc2pBemc5TTNRS091WHovV3h5V2FVMmRLZUpveU9DV1lSR3FUeVFwS0ZiRmFDcUg3QzBPVW5RV3N6NEttNyszbit1MXFjbldJcDZNNm8rcHpFRG0xS0pmUUhuVHZPYmZRdmNFUWhiS0E5ZUhRbnYxNzlzTUEvYkpMaUNOVnBBb05mWlovT3BSVzdoYmRkZVZka1V4dzBmM3hQaEJ1Y2VLSUZXUnVicjRIQUI5NW1oWklsUk5kNUE4U0t1TFR5RzJjbkdpZmEyeUJhMVRlNDMxOVhhRHQyNEhmZTZJMVhFbWxFdHNTRXdJUzVLSGhaM0xZYmlldlhmUHk5b2swMkFIcllGSm8rbllFNEp0ZlNWTUdVb21KRlFHSkQ2aWg1Q1FwMjlYN3BKZTNxMCtrUHF5RDZrT2dWZHE3QWNpQlhVR0JJcXJMNlFwLy8wUkhHcTJGNiticTQ1UHA3WjBGMjBpWFdkQW9iY0J1YmVTQ1ZwRUxzQVBLNHVMRGFXU0YxRTNneHZiMjhzcUsxQVc2SVFpZkEyMHkyYmtUK0VqOHJsWVhhdExwaXVLQytIQjFUMWRBRVlmRFBublNLenRTVjdjM2ZDeTBWY2ZFeEtUUE4yOFdCUWJlRDRpTGkzY01yNnVRU204S1lEc1NmRSs0Q3dvMUNZS21SdWpvOU9XZnY1b2NCRDVnSWpFMWphb29rc3E0WUU2dnpFOEhEeU8yNFJEd1krZnBBUHM0MElGOUpUa2toT3FpcXFNRnQ1ZkZjS01LdEhKY1hiTnVJemJRUndON3FBMndJeEQ5L0lVT0VzblRVWlVtcG5WOS9WSVdWNXprem83S3UzVFExbFlmRGg4SUFkYlkyT2hFSVBydUF4MHA2dG9nb2lpa21oZ3J2WGxUVU9vdThiMXRZSG9RS1E2aWtYQWJtd2dUdU16dTg2L0lhcEpuWFpkS0pWZXBGQkkzRG9HZzlWUVAyT0JWREpCbzBCem9PaWJBMTlhK291WlJLR0l5VlppWUpIUVhFTndMdEZyMEVWdGZmMzcvNWw0S1Y0ZEhQYmUveGlrTWkzVWlFUlBLaS9PNTdnM0NGMGE3OUV4TkQrcnF6b0Q2R2JySVJnZHcvTno3cXk4MVdEb0Q2K1I1cHR5L29QQ1o0NXNTUFQzRW5nWjY5RE1CTkluUU9kZm9uUEd5RnN0QW8vazhrdEpGMkZwRlM2NzgwR3RQZ0g1aUhJaldicXpIWkx4eUZQTmhQWjNIRXpzNVZWL1NNTzhDMlhZTDlBc1RwcDc3aU1kZ0tJR0J5WlIwSmhQc2VheUdFaFNkbDRIaDN6Q2ROaEg2amFITEg3SXdlSFcxWEJSRUFxbTh0NTNOOXk1ekxuYlc0eXVYZ2M1L3NJQ0ZZZkdTUldmYWxTR2taT1c5UEY5ZjN5ako1ZTc2QmNPZ3Z6RmxMZ3NMOWxSOGcxQXVieS9NbHZobVowVmRYRHNGQXZ6RFgrbENmRjVhR2k5c2lQWE56czVhdkJHVStCL2JOcSticlZXb0tGeXhlczY0U2RCdmZBTXhyOTBQVkxGVDBnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ21haWwtMmMxYTc1NjBjODhlYTgzZTZiMjU5M2NkMDdhZjhhZDgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2hlcm8tYmRkNzFiYTFiZGFiNDliMjE0ZjgxNzRhODEwNjMwNzgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhdHRlcm5CRy1mMjVhZjM4ZTM1NzA5NmNhMjMyOTBkNWY1YmNiMzM1NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGxhY2Vob2xkZXItY2ZjNGRhNzgxMGRhMjQxZTBlNmIyZDhmMzc3MmVmODQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBWUFBQUJ4bFRBMEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFkU1NVUkJWSGdCN1oxUGJGUkZITWUvTTkwV1VyR3VnbGpvWlNzWHVVRFJtS2pSdUtpbDlVU0pKeE9FY2xBVEV3UEVpMEVzVzBCaWpJWnlJUnBEMmhvdUhyUVFEclFTdzZLSm1oaGo1U0lIaUpzbVZmNjA5TkZTWE5ydUcyZm1kZHUzZjk3K25WbjN6M3lTOXUzN3Q3eCs5OHR2Zm05bTl2Y0lTZ3c3ME42R09yUUIxQStLemJBaGxuNHdCQmFQOEFQRWo0SmdGai9Ya2k4SkluSnBZeFNFM1pGTG0wWElzUXVqS0NFRUdtSDdnbjZzOHJXQjFHM24vMUtRYjJwRE9VQVFsb0l6ZGdsMzU4S2tMMnhCRTFvRVpnZGZDWEpSRDNIbnRCWHV4aExDY0laYi9TdzVjbUVBaWxFbXNIUnJVOE5lL25KZlJZaWFuZ2ovU3dZd1J3Zkp4OE1SS0tCb2dhdEUyR1FpcW9RdVNtRDJZWHMzQ0RsZVJjSW1Fd0d6ZTRzSkhRVUp6Tjd2REtDZTlTODJYTlVQd3dEbVNXOGhiczViWU5tQTBicCsvaktBMmlLQ0JYdEh2bWtlemVkZzF0T3hsNHQ3RWJVbnJpQUFILzJkOVd3N2xNOUpPUXU4K01aOXFIbElLQitSY3dvUnpodVNFQXd1V0lnYy9xNDMyMUZaQlRiaVpvQmhQemt5a3ZGL2RVYUJaYjhCanpzd2VHT1RyZVRvY05ocnQyY01scW1Zanc3QmtCbksrcVZXWHJzOVQ2eG5JcEFIWU1oR0FDdFl2OWZPdEFJN2Qyam9oaUUzR0lKU3N6U2t4R0JwOXdaV3E3bHVNVmlZdnQrYTNQV1o2dUFHZXplTXVJVWdPcjMySlc5TWNMQnhiOUdrdURqUndjYTl4WkxpNHFRUVFicGhLQkt5MTcyMkpQQmlLeGlBb1ZqODdHQm5NTDdpY2pEWkRvTWE2dGhTWjVCczVGaUlEL3ZZSzZaZ1VNVlNZK2M0ZUtFaENJTksvRmkxVWs1UmNBU21KQWlEWWxpWCtPMElUTEFaQnJWUXZPZ3NCS3hHQmk5TGl3d1J4UFQ1YW9UYVd5aVB2d0VZOUJCREd4ZTRUQ2JrVlNYVTc2dVlXVG4reDREbXg1M1gxazNnK2pXVVBSU2JmVEtEWUNoZkFwdUFyVHVkcFJ2ckJqRDBHUkM1akxLRjRXRWZkTk84QVZqNWdPTzQ2R3hlcDBwaGd6dlQ3eE9PM3ZNSkVENE5YRHlObkJEWDRXOTJsbTdFaHlWK1ZFUHdrRzk1WnJsaWhMQ3Y5emhDeFBubERIRCs4OXpQOXhMWGpUam1yOHZablJ6L1FOelg0MFpjbDdnK2xYQnQ5VGc0L3Nja08rV1pMbWRiTG81NzllMkUxZWpZRlZnL09BS3M3dHlGK2pYcmwzY0twNHR3a1FrUllyekVGVHk3UTczQUVIbHd6N1lwNVExZDEzdkFsbmFvUW9oNzdlQnJDZHRhRHd5ZzhZbW5vUXdSSW83dmhtSkVaNCtHTEtKMUUxUnk2OXVUS2RzbVI3NUNCZURQYTNabE9SRzdONE5LUUkvQWYvNEVsVFJ1VEEwRi91ZTdVQW5vYWVSRVk3SHh1YlNOeXV6NVV4ajd1ZysyYldkOEMzZU1YZDN4aG5Uc3pHL2Y4K1UwWDk4Ri93dkxBbHMvbnNINGx4OWtmRDl4Zk11Ykgza2ZrRzhLbVNPOGtldlFjNXNoeEJVcFZMeXg0MytBZGU0TGpKODdsZFBwOVd0YXNPSG9ONmhyZkREamNUWVgvaXB2QU9jbnhwRU5JYkQ3ZzFsQ2lEdjBLWERsWjZoR244QnVlR28yYzNzQ1l6Y204anF0NmNtWHNQNnRZNTRpQzNISCt0N0Y3SlZma1N1MHNRbnJXbHJnWCtWS0lYWGNaQ3hTRW9IbkYySzRPbjQ5YTFoSWgzRHkyaDN2b09tcGw3azRqdEJDMkdrZUxtNE9uY3pKdWNuVVVZckF1clZZMlZBUDNXZ1gyTGFaRkhkK1lRSEZFcis1bUovNEc4VlM3L05oUTBzekYxdnJ0NG1oUFUzNzUvYVVFbkVGUWxnVjRzcjM0dGQwYStvT2RLTlZZQkVhckJrOXJiTUtKcWRuY0M5Nkh6clJLdkQ0clVtVU96YzF1MWlid0xQY0diT2EzYUVDY1kwNlhheE5ZT3R1K1lhR1pDYnY2THZ0MWlKd2pLZGo1Ung3a3hFdWp0bDZraW5xbEdGUnkreS81UjhhM0FoRDNJdEdvUUhaWGFsZVlEMFhxeFZOcHJDMGhJajdjL09vTkhTWmdpNVZaMUpJdEFJRkZqbTdjcmkyRkxiYUdDemlXYXlBUG9mL0crZTYxVGQwd3NGS00yMjdBc1dOWTl1S1hSekRIeFNNbExSUVcwMUJtY1ZITkd4TFpUb3NlcWxhSG4wRWMvTnFPbmhLUlFPL2JuSHRTckV4NnVNMkhsVTljSlRRbVYzTCtGakUrUkpNS1VZMWFoQnllSVFzeGdabTRyQnFSSDFNTEFWZmNna0d0ZkFNUWl3Y2dXMmlmbEpXemNQQzRyY2pzQzg2cXFQVHA2YTVPeGNXQ3lrd0NZVXRFSk1QSytSc3ZLVEJjZ0ljSTFscmdCbHloQzJIM01TQ0hEcW1zdFllRVo2ZXRjWlhrbS9oVHNCUUpHVFF2WllvTUozck00MWRVVVM0b2dQdURRa0N5OGJPdUxnSXlDQUpKZFlZVHUzbE1TNHVsQlQzQ2xJRWxpNW1kRDhNK2NGSWI3SjdCWjR6MzlpaGpvdm1XL2c1UWpCQWVrZjJwTnZsM1JGTWlEZ2hBa00ySWx3cnozdUl6T1Z0UmZVa0tndlZHYnlnOWhZUzhxN3JubkVvUTliRlpURHgyQk1SZHpNWHpjODZWdVJVZURhMzBhbHdjUThQaDdJZWhSeGhQWjBoMGZUQmdGekZsVWNpRDR6SXlLbHV1NXY4SDFRU2FtK0RMVXVQQjFCYlJQakF4SjVNOWRyVGtmZDR2UXpxbEd6bFVnK2lWbUI4ZkkxbUxvYnZSWkVQaStyc0Jxbm1XdTlNM3RXU0k4TURLSkRpSDNjVzZnekFGdlhlV1JYVkhoWjlNZlFFYUxSdnNRT3NZTlE5c0s4cWhGWW5iQnc5ajV3VW9ZT3k3VHgyVmNCWDRrVVk0T09Sb3JPbWdCaWJEYjBQVFJWbGMwVmxWMUY4MUtsdUZVUlpJQ2Jha0V0eXVnSWZVVmZsMW5Uby9SNXBHbVNhdDBBQ1RrRThQdjRYTDB5cTU3Ry9sdnl4eFNRUXZyMHVOcHJ0MWxZMS93R0xTTFFvSERGR3hBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGZ0FBQUJZQ0FZQUFBQnhsVEEwQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWR6U1VSQlZIZ0I3WjFMakJSVkZJYi82aG5IU1NCeDJLZ0pMQnBNY0lNQ2JoQmlZa01nVEV6TTRCTEh4R0hsUWhNZUpyb3l6T2hLRXhVU1hiaGlpSU82WTlqZ0dGQ2FhRlEyT2lJYlNJQmE2RUkzREltRWg5RGwrYnZxRHRXMzY5bFZ0eDI2NzVmMG83cXI2M2I5OTlTNTU1NnFQdTJneSt3NDVtMFlBRFo0RGtZY0IrdWJqeDVHNUswcTMvZTg1dXNqNkFENTdJSjhkaUZZZEp1dk9aaDM3dUc2dkQ1LzE0TjdhdHlaUnhkeFlKRGFFVzlrZUZERWZBaGpGVmtVQVRaZ2FWQ244SlVHenQ2OGpYcDlqN01BUXhnUmVQUnpyNFpCSEtTZ25WcGpOeEd4WjhYS1Q4eU5POU1vbWRJRWJscnJNUGFLcVBzZUJGRmpjT1UyTGJlamM3c2RGeVZRV09BZUVWYkhSVWxDRnhKNDlKZzNJWWZYeHowa3JJNkxCcWFLdUk2T0JCNzkwcXZLd3hHNTFkQWZUTXR0cWhOcnppMXdNSUJSM0NyNkMvZGVBeS9sRGZNcWVWYmUrWlczVjhROWcvNFRsMVFIS3ZoVmp0NkRlVDZVV1dCdVdDWUVoMkNaekNOeUpoY1JiSEFTbGpDVDRwT24wbFpLRmRpS0c0OGMwZnUvZnRsSlBLb1RCWDVCOGdZTjhUdXdKTEZWTExrZTkyYXNEMllvSnVJZWh5V05JMEhZR2tuU0lFZlhVSVVsalNyOE9VRWtrUUp6aGlZUEU3QmtwUlpvMWthYkR3N012VjlqM1k1aEh2cm1UYXpXVTU5UkZ2d3FyTGk1NFltQzRTSHMwMTl2c1dCcnZjV0lzbUxkZ3EzMUZpREtpbldCSjJBcGhET0F2ZUhsUllHRFViQUtTeUZveGVKcWEycDVVV0J2QUdPd2xNVmlNcWc1eUFXbmZhN0JVZ3Jod2E1cHdVTVA5ODJaaWE3UUhPeUcvVXNVbWdJUDlNK3BuNjRoSXUvaVkxTmdPWEc1SHBaeXFlQjUvOEduQmt1cE9NRlZURTd6V2pHYjh6V0NuQ1RkV0pFUnJ3cUxFWGlSWTZXeWRDN0k2emw0UVU2bGg2L0srZDloOEZDeEVZUTVQR0JGcmd0UExQbVFhZklqZytoaWd1ZXBSNEhOSzRFdHE0RGxROEN5aDRBYi93S1hyL20zRTVlQXYyNmdFR3pqNmFDZHg1ZjdiUkJ1LzRwa2FVOWRCWDcvRzkyaTZram01eW9NaTh5ZGZtV2R2K05wVUlCakYvSUwvZGd5NE1DbWJHMXcyeCtkQTg2YkY5cDFkbjdoWFRNNTBJMnY4OFhOQXdWNDkzdmY0ckx3eEFyZy9XMzNyVFVyTXhmOHpqUUZrejYwWUErR2lCT1hib0VpL25QSGR4VnJZcnIzczErQTJVdElaUHRxNE0xTjBlK3hnOWdHWVNkRWRZQnBrUWRoaUIycjI4V2xxTnlobi83d1JWYnc4T2I2NDlyNnJ6MGpvZ3pGQ3hEVmdkenU3RVhnK01YV050UjM0bWZZbm9LZnAwODI1UzZNUlJHNldCeGtYcDhEVGw5dDMzRWwvQnZmdFB2ZXVHdTc2RytqT3ZEdDcveHQ2VzBRK25lK3I3dWVBekZIUUJrWUVaaVdFcllTN3ZoN1AwVHZkQmgyQWdWUUl0TkZ6R2pXeThQOGs1MStHMkdVdUpkVFRodHd2YmUrYmUxSWZ0Zk5xMkFFSXdJL3U3SjFlU1pIVktDRTRrMzN2eFRpMDFIZm40Ymg0YzJqSTJzYlRUZWliVnZ2c0xJd0lqRGp6ekQwdVhtZ1VMcFBaS2hIY2NOSEJxRy9aV2VrSFIwNnA2NjBMcTh4RkVjWkdlVENYNVppNWQxNW5WMVB5b0Mzc2YxMURuNHpIVVlBS3BKUkhhWjNYRmtZaXlMS0lpN1U0MFNCZzlaU3g0akF1bVdvS1hGZWFMVzAzakRjVHBiQkxBMStwN0RWWnAzVTVNV0lEOVozUHU4QXdwM256RXdYbHgzSHdVemZQdjF6M2xuY2xsWHQyemFCRVlGUHU2M0xGQ3FyQUNwUzBITUtLbzdXaGVDMlA5Z1dQUUFtdGFISDZUL21ISWl6WWtSZ1JnMTZuRW1MVEJOQTVSVDA5VGc1NFNSRWR6TVVTUTErV2R0Z1I3L3pYSHVjZnRxUVB6YzJrK01nRkVhSnR6M0NYWENuS1ZhVVFJd1VQandYMlVUYkxJK2ZuWDZ4ZlRxczJxQ3Jpb3FqWjB3bWZFd21lemo2ajhja2U1UWY1WTdyTzZ6SWt1elp0ZGJQV1VUQk50Z1cyd2puaHNNVUNmV3lZRHhkR1NkeUVoU0Y2Y3FzQ1JoMmtIN1laOEc0dUVHNjBuakNuUU1XRXlwWkJLQ29kQytkSk56WmtWa2lGclpCY2J1U2NPK0d3QW9LVFI5TWkxT3pQVFdqNHNCNHZvUzBJWVVlVyt1M29YTEFiSU41WVVZS1AvL1pGV0VWVFlINW00d2FMQ2FvODdTOXNZcExGZ25UbkFhdXcySUVpYzkrcTBpTTF0VkNiZjJFNDJHaHdqdFlqTkJnOGJ0NzFvS05JUzdDYmM0MlRjN20rcG01M1k3ai80VEFzMVpzZ0RydktzSGRXVmhLaFJFRUg5V1BZR1poS1JVdmJNRzNibUhlczlGRXFkeTVIUktZdjBoa0FXTllTa0dzOTRRcWFSQk91S2ZXQUxOa1EwS3oyZER6KzVqT0RmY0pyb1JuaTBuVGxsTkdNcXM3REV0UmpvWVhXZ1MrZFFlSDdHQlhDQmQrS2R4RldnUnVEbmJXaW92UVZqRzc3YXl5dGVLT2NhRlpMMmtUT0FqWjlzT1NsOGdLMmJIRlFlMnBwRnhNaTdoN290NUl1dkNFSDNCaFNjTkZ3aHdpc2J4dFVEM3BEQ3l4VkJyWWVES2hybnZpcFZPc2k4c2l4TERFTVhVeXBXaCs2clZwUVlWbk80MXVoNFBhWk5wS21mL21RZHpGSkVMMXdQcWNUT0tTekFJVEszSzJ1dTB0NnlNblFWMTNsaDZ2b3I5dzViWW5xVjU3RkxtdkR3NmMrbFpKZWg1Ri8xQkhTakg4T0hKYmNCaHhHUlBvNFZydndUOHM3aGRocDlFaGhRUW1RVkhuQ2ZSUTdlRkEyTU55S3UxUTBYOUxMQ3l3b2hlRUxsTllSV2tDaDZIcmtDODZwdW8zTG1VQ1VUbXVUSFhpWTlNd0lyQ0NaWE5aMlZVYXFUbCtkYXNhbGdEQmhUWm41VHZOOG96NkEvZW5xVWt3ekx2cm9NcUNlT3F2ZjRPM3Fyd3I4MjkvK1p5djhTSVFQcGU4d2Z6Skx2L3Q3MzhoOTlreGlWN0Znd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBWUFBQUJ4bFRBMEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFhRVNVUkJWSGdCN1oxYmJ4TkhGTWYvTTc2VUVOSWFIb3BhZ1dSYUZTazhOS1lrU05DSG1rOEEvUVFOYjVXNDVndVUwQzhRb0kzVXQ0WlBVSGp0QythbFNPR1NwWDBBdFFKWmdLQXRGWmdtSVlrdk01Mnp0bFBmcnp1ekczdCtFbDZ2dlY2YnY4NmVQWFBtNUF5RFlSS0w4d21FQ2drSXhEZ1BUVUFpSmlGajZxMTQ4UWg2em1Mb0NabFJuODJVZHRMMHdCZ2NJZVFicUMwRVR6dUhUemt3Q0lOR0VrdHpNZVREQ2M3WmNTbVJwSmNRREZLdThGTGVSQ2lmY2c3T1pLQUpMUUluYm4rWFpJeGRVQmFWNk4wYXpjSEFyZ2xSdU80Y1Byc0FqL0ZNWUxKV0xxTG5wQlRudDRLb1RVZ3J3MWdRMmV4VjU4aE1HaDdRdDhBREltd3RuZ25kbDhDSnUxZW1tV1J6QXlSc0xXa3B4TVYrWEVkUEFpZHV6Y1ZaSlBLamVwckVFS0J1aU1xYWN4ZDdzZWF1QlM3ZHdFamNPSVlMWmMzc3kyN0RQTjdOd1lmdXpKOVQ0dDdBOElsTHhCbVhTNS9kbmIvUXpZYzZGcGhPTENBdlljaVJVczUySTNKSExvSk9TQ2VHWlJOMUpjL2VPM1RxWXR2ajJoMWd4VzJPR3AzT09GT25XMTdWTFFWT0xNNGxHSThzd2RJVVpYekhuS2t6cVdidk4vWEJiaWpHSXovQjBoS0txRWlyWnU4M0ZaaEhJdVRJNDdDMG96d21hRWhEZ1dtRUpvRnBXRG9sbVZpOE10M29qVG9mWEJxbERXdXMydzhaR2NydHEwMTkxbGt3ajBhL2doVzNGeWozZmI3MnhTb0x0dGJiTjNWV1hHWEIxbnI3cHM2S3F3UldNZDAwTEgyaHdyWnpsZnViQWxQa0FHdTlYaENqakdONVoxTmdMdGx4V0R5aE9COVplazRQTk8zRENwSFhzSGpGNXMwdTdPNFd3a240d01ydFA3RDI4QWwwTWpLK0Z6c205OE13YnJtQzJxYktMaUlKdzJUL2ZLMWRYR0x0d1ZQay92TGg0bVE0UVJ0ZWZNNG1ZQml4dWdaVEZGYk1mVmNacGVrWHRQWE5nb2NBdDRxSnU3VmlGaTJRdGh4Y3hHSFJSRUVKTEFOVGtEZDRNQjdqeWh2N1VwVVQyakVDVTVqOHJpbzRtd2o3RVVFUWtkMDdNVHF4RHh0UC9vSEk1cUNMN1FmMnV0L2xDMEx1RE1OSHRuLzZrZnR2VUdFTTcxR1lGb2RGRDR6RmpWZ3dqZHF5ejE0cWQvQVNmc09qWVlSM2plR2RqejlBMUlEcklJRzEzZVNrOHEzTEt0K3c4ZmdGZ29KWUJmS3ZWN0QrNkFXMktaRkhKejlSb2tlZ0JTbGo1Q0swQ2J6OHk0TkFpVnNMaWZ4djZqZG9KTlpWZFdVMzBJL2ZlT3EvUzJnSEpZTGVxb1NRTHJRSi9QYlh4d2dTRktwUjZqS3l1LzZDM1hqOEhMclFjcE9UMmJ6S1lLMGpLSkN2SFR0NllITi85Yzd2VlZhYmY3V0N3dW82UXFQYjREVmFMRGozYWhsQm90WnFHdzA4aEthVXBqWVhFU1NFdXFMOFlpZ0VYbi80Rk5uU3JBYkY1Q3ZLUlpqQzE2R3lLZWgrOE9ibmUvQ0RvYkJnUDdFQ2E4WUtySmxBK2VCYjMveUFQYnZlUno4OGUvVTNqbno3TllKQ29DeTRYM0c5T29lWFdCZWhHUkpZVzdjUEN6SldZSjB3bHRIaUlrTFJMVGgrMGZTYlNlQTBQQ2FrcG1TMnE5VGdWc0ZOWSs0Y2crZEltVmJUOWpJak5mUkdHcDNjanhHYU1jN1ZKMXJLK1FCcEtBbkRSMGZ3N3Vmamplc2pJbUYzbms0WFlRRzgwZFhieS8zaERYNDg1V2RKWEZOSmw1SHhQYjdVUmtqSSt4eVNHVzNVVm9aRlF6QUY5K3VlSUNtSzRNSkdFYnBnY0RnS0lWOHN1QkUwekEzQ09UeEQ4TFRyZmcvZStWN0NNT3VQbnJ2VCtpWVlPenF1L1A2SE1NM1M1R2xXam9NRFk4VURSSW9lWElIVjNlNG1ERFBvNWFzVVFkQ1dsL2F1d1RBVU5wa1lqQlJySVh3cFgwM1JRekYrQ2VjZEZDSVVUUmd0eHFiQnlLajV2MkV6UXlpZm9vMXJ3YVUvdjdkKzJDT2t4UFZ5U3dQKy80dXliUTh3UzRkSXNlbHlxMGJKS2x5ajRvRkI3YVJxaXJRS3ovYVZkMnI3UlZ5R3BTK1VobGNyOTZ2endlRThkYkd6UStmZVNTT2ZYNmg4b1VwZ2NzeldpbnVIckxlMngzRDlqSWExNGw2cHMxNmlUbURYaXBtWWdhVXIzRmJrRFRwa044MjFxNGlDMm5zbFlXbUxaRmh3RHAwKzJlaTlwcE9lTXBlakQ2UmhhVWNhMlZ6VE1VVHI5cmJGZnUwM1lHbUtGTG1EenVHWnBxUGdsdFAyMUJkWFN1dVBtMEdqMzFiaUVtM3JJcHlwczVmc01Mb2VWOXlwTTdQdGp1dDRRbG01aTluS2ZtRERUS2ZpRWwzTjJGdVJPK3ZiWGtuM0M1VXN6aWNZbDlSNlBJN2hJcTBzOTJTcmZ1Mk42TG8yalZaQ1VTSGNNU21xa3hvRFRvcit6OTJLUzNpd1dCUWY0Rjd2TXFNTWFjYjRZbEdWdUIzNHcrRnA1WnNIcVBld0VsYmlNdVZsK2wwdDBic0Yrd1pDYU8rRUxhTm55VW5sT3JnTUhWZFQxeWNRZU55RlZwMVM2SldDeCtncXJIUnhGMDB0ZG5aTmxycGJKUkVNSExjV2hNb1YxSXo2bGxzMHRSVnVLMGZxTmtnTjhSaGlGVzNGNHNXTmQ4ditNbnJPa0JHaWNGL0ZTeG1xd3pPOTdPOS9vRStJbzNvWEJtRUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUh6U1VSQlZIZ0JyVlZQS0h4UkZEN25tcHFmZnFuWktLTm90aVIvdHY1a3JKR3hFVlpqWlNqRlRpZ2tTeUVMWmpXejgyOHpRckl5ZzJ4TlVRcUxHWW9OcFF5YTBiemozR2RtTVBQdW13VmZ2VzdmZmZkOTU5eHo3djBlZ2dHY0xwOHRYdmptUmhETlRHc1J3Q0huQ1NEQ1F4aUl0azdXQnZ4RzMyTDJSRk9YMTZWWk5COFEyc0FjRVNLYXpoWXUrRTRhZXJ6ekpHaUI0L3lEL0xBaG9xdXN1aDF1ejNaQ09ZTDEzZDVKUkJwVmZXMHZMb0tpLzFiZUVrTGlQWm1aNXkwNnkydmFiQ3k2bitKU2JObk4wWHdxb2FXSmRpamhVZUwwNGc2R1pyWnoxb2trZGg1dDlBZkVaeGljQkFYRytsc3lZbWJRQ3NBbm0yblJzMHQxMFFoMWxYWjl2SW8rd3RqY3Zva2s4Y2xJdUMyQW9rTS9FSGtRZTQzRC9jT3o2Um9relNsVTJkVlZsc0xtWXU4WHIvams0eDZuV2hDeGhtdEl0YW9GOXF6YTJmUFgwaUZVYjY0aUR6QzdjdkRGdVlhU3IrK2RnUmxFNmpybElQYWFnTDNEeTI4OHJ2TnJGbFlDSWN3WlloaitDS1JSbEROTWh1RHZFQkJXYTl6UC9YNkMzeU1palVJRS9TTlBncWdQZmducFBITFV1M3kwT2hqZzg3aG90RkFlWnZuRVhoSktNVGFWakkzOThNUEc3dVVwTXJuWGhtS2N5UEdxWnpqTmYvamh6Zmx1c0t5cU5jb2hwVXViR3l6WFhTUkZ6L0c2WnlFcmdER2thYkJ3Qi91ZkkzMmIwcjhBQWkxa2ZTdjBCd045T2MzOEFPSWp0aFhjeHZwbkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVZDQVlBQUFCRzFjNm9BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSWRTVVJCVkhnQmxWU3hWdHRBRU53OTZSbEgrQkVSUzBBcGYwRlUwc1YwNlhDWkxyaExGMUlsSGJnTFZad3ZDUG1DSkdXcW1DNGxaVHJrRG94NFR4UW9pVzM1bUxNRVB0c0l5MVA0ZEh1emMzZnIyU01xQUJ1Z2d1QThBZE1VZTh4aWwxbjZvR1dDTXBLU1R6RitIUXlTVGhSRndVSkIxMzMybHBrUEp5SjVrQUY0bnk4dXdyWWVOZlRKeG9iN0JhUVBFQ3ZUUW93M2ZHbFpsaDNIOGM4NVFkZDFQakhURzFvU3lObTJyQ2RlSFAvOWNTL291bFhVaXo5bVZ6bVdNbW1DK2greGJZd0Jnb0dVOUFmMVZLZjZoOWhSdno5c0dnYXY0OXNIejY5VXJPdWJtL2czcDFldG5tSEJ5elp0OVhyaFlZSERJYzlSdklOc0dtR1RtbENuMDhRSS8ySmhpMGdwZGE2OXNtTHVDZFJnVnljWnhxQmRVQS9jcEQyOUFkVUZ4cm9XNkp5Znozc3JENHFyY2lZUmZpNTB2NkhvQVMwSjVIUW5NK21KbWVWMVdoNVA5WW5JYkhHSEY3UThmTzM3RklLakV5MWdiMjQ2KzFRUXFrMTFod0JkbzF5MlNBaCtwUnFmVXRNMlZsY3Rna2xQOG9UVTQ3RzJWbmsvYVlZVXNOR1JabXljZFpRMG1jMERXS21ldml6MC9mTHlxcWtuZ2Z1TnhzNlk5YXNNZXIycm1raUZXTFdhSjRRSk1yOVR0VWhKNG5yMmROaWsrOUJMaEhocm5LRit3akRzWUZBQkVPVnJ0TkJPdjUvVUhqSTVyaG5SUEZxNHlmRzlvRUxXdnkxY2Q3OVVNczVLSmZQWGNDZ2F0QmhUdlQvbFE3V0F3cXFhcVZQNFFvaEgrbG9Hb3hIdEZIMUlxRnF0Tmx6WDltZmpXMXUyNXpoT1BTL3ZGZ1pXd1doUkhUQzBBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFSQ0FZQUFBRGRSSXkrQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUdwU1VSQlZIZ0JuWlJMVHNNd0VJYi9jVnVFeENibEpiRUxKNkhjSUlnR3dRcHlBc1FKVUc4QUo2Q3NBS1dJY0lMMkJwUVRORHNXdklJRUVtb1NEM1lvSlNsdFV2b3ZFbnRtOG5tY0dadWdaSjMxRE05WkQxQ2d1dnRZSXlvZkExeFQwd0RFWHRqdk43eTlOVC94TVFla0ErM1dhenNNUHgzdG1BVGJ2bnF5UkVuYy9IRVFmTERDRU1QZFhseW4zWXRYTTY1d1R6dFl4azdMWHVtTUE5clhMejB3ekFuckpka0tpWHN4TktsZ29sTGJ2bjQrc3k0ZXpOR3Q1c0MwRE1sNHU3S1hUZ1piZm1tclZ5MjdGVzdLaUc5akdYWXJwWklCVWI3TEFjS3RMeVlzMGdXcExDeVk2Z01OTlRDYkFnV3M2b0dZbnplTUJFWW9yUElrTWREOUdZdkx2YW9QYmNqL1J3VkF2aDhDazZlTWpvRFpNeVNXWGdibzdxeDJtZU10bFhvSC81VnF0M1NyL2JZTlJJMUdLejJOWXRuSThsT3F1MDlOSXJHUDZkTnJ1dldxazdhSTlLUmxMeDlBU2gzUVFTRUxmaGlpTVdvV293WW05bFd3aVh4MXd6NXRldDhka2wxSG4rVm9UaDRTaEFGbUMvbk5IVER6YWZRdVRqeW5Hb3hQSElPekNuRkFnalltOUtPdlFPZDVvQXd3TGV2bXdTeEhaVE54cXZzdC9LajRSWkMwdmdCTmNMTHFBVnUxOHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQVNDQVlBQUFCclhPOHhBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRGxTVVJCVkhnQmxaQzdEY0l3RUVBdnhoUjBqTUFJc0FrYmdEZElBUUVxb09FYkNaakFmQWFCRGNnR3lRYWtRVWlSY29lakpDSkZRdXhYdURqcjZkbG5qZGJ5ekhqakZiM2o1WEVoUXRDRUpRY2gyYzBXZTlwcjJURVNNenBOeG54bmY1dWJpcERXY1RIZVh2eTZPcXVZMTlhcnhHSzk5TzkveFl5dXFqK2RyYlJOeFlRMkFUdU1kMWVaMTNYRkZLS2hxdCtkbGV5YmlRa1d0TkdDMEVna29rY2p4cDQ3RXcrdVphZ0NFUzdkcVRqbW8xb3hxWEFrc1ptSm9Eam5KaFVkMFFOQTRVNkVWM0ZmSWhLYzl0T0JEVFh3MzhzZ1FGUVZ0VEhRZ09XVjZKT3VHVFQ1QXFXclpzZzNrd2xpQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlcjEtYzdhNTdlMjcyMmJiYjlmODQ3Yzc2NzVmMjZhZWNlMTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlcjItNDFhYzk0ZDhiMGZlZTM5MTBhMTI1NjNmYjY5NTdhOTMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlcjMtMTQzYTMwY2Y3MzIzZWVlNDNlYjRjMWRkMzhhMTcwYjkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlcjQtODA2YTJiZTZkZTY0ZDQwMDk4Y2RjMWYwNjlhM2I2MGEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTklBQUFBb0NBWUFBQUNMa0tROUFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUM0akFBQXVJd0Y0cFQ5MkFBQUFCM1JKVFVVSDVnSVRFQndTUFUxMlN3QUFFUzlKUkVGVWVOcnRuSG1jWFdWNXg3K3paWkpKWnB6TWhLeG9JQUUwSzhtd3RDeXBFV3habEpwYWk2MmcwcGJxeDZWQmFtMExLdFdLMVk5TGE0T1dXbkNoZ3JVZ2FJR3dOQWpZRUtLVUVCS3lBSkd3SnBrSjJTYVRtY2xNWnU3MGo5L3p6bm5QZTg2OWMyOW1KbVBpK1gwKzk1UE1PZWQ5Ny9zKzc3TS96N21RSVVPR0RCa3laTWlRSVVPR0RCa2N5a1o2QVVjQzh4Y3VLM2gvL2RxbEk3M0VERWM1S3YwL0NqSGNNY0pzWmNBWSsvOUJJRGZTQ3pwYU1XM0NsWG52YmR0MTgwZ3Y3NGlqM1AzSEU2SktZQzd3TzhBTWpoMnJWUVg4S2ZBbzhCandDYUJtcEJkMU5NSVRvbXBnSWJBSU9INmsxeldTS0UvNSs0K0Fud0lQQVQ4QzNqN1NpeHdpekFhK0FKeUJEdi9Ud0Z0SGVsRkhNVVlCZndIY2kzamwrOERwSTcyb2tVSW9TS09CRHdNemtRWS9BL2d6b0h5Z09PTW93R3lnMGZ1N0RqaDFwQmQxRktNUitBZ3dGUW5WK2NCN29iRGJkNndpRktRM0FDY0UxMlp5YkxoQVZTbDdQeGIyTlZKb0pPbk9uVVFRZC8rbUlCU2tNVUJGY0swU1dhcWpIWDBqdllCakREVWsrV2NVaXB0KzQxQSsrQ2t5Wk1oUUdjUSszU1ExZDg2dUo5TGpZVXE4bERpcWxIVDZjTTFieXZ6aHZBUEZBZmxTd0tXa2pVdUpOWXBOT1E5bXptRHNJUXJ3aXY5czJ0cUdhbStEaWNmY3ZLWE9rYlllNTg5T0FuNFhtQVhVQnM5TUJxNEMyb0VXNEFGZ3QvOUF3SWhWd0p0UmJIVWlrZFhiQTJ3RW5nZGEvVEZwekovQzNMWElCeitadUcvZURHd0NuZ002M2JqREVLampnVG4yQVRIRjg4RFR3UFk4ODVZQjg0QnpFV005QUx5YTd3dThBenNPdUJpb1I2bjROWG1lSzVxZUpUTHVST0F0Nkx6SGVudDVBZGhpL3g3TXcyQW5BT2NCODVFcjUyTW04RWtrVEM4RER3SUhDcXlqQmlXQlRrRjg1dkFhT3M5ZkFlMzU5dVpkcjBUbG1nVTI5aUdqenlqdmZDb1IvNjRHWGdSeXdWcktnT2xHNjFPSVl1bys0Qm5nSmZ2MHBLMm4wZ1pjYlorUU1BRFRnSCt3LzNjQ1g3Vy9leUhHOEtPQnMxR1c3d3pFTE9POWVicUFiWFpRdHdFL0NZbWNCN1hBTzRBcjdLQW1FUmYyRG1BN3NCbTRGZmdmWU4vOGhjdUtFYVljeXQ1ZENmeXhFWEtpZDMrWEVlL2J0dWJPWU41NXdIZFEyamNIZkJmVnA5b1RSSXlJWHdWOEhMalc2TDhHWlVyWEJNOE5HVDI5T1J1Qjl3UHZzYjFPSmU3ZTcwWE05aXp3UStDK1lDODF3T2RzanJTd1lCYndKZnYvUGxSaStOZVVkWXhIaXVReXhMaVRpQVFhb0EzWUFXd0ZiZ0dXMjdWOE9CLzRGdUtQZGxUbXVNSG8rbEdrZ0VIOHV3VzR5Kzd2c2VzbkFYOE9YSUQ0ZldJd2Z6UHdPdkNrcldjVjBPTS9VRFovNGJJNnU3bUU0bkFYWXJwRDNyVUdKSWhMRVdNT2hBUEFqMjNEV3lIUzlJRWxtZzE4QnZqOWdORDUwQVg4RjNDOUVjekgrNEdiaUlMaFhzU0F2ZWhBUnhXWXR3MzRDdkIxT3d4MnY3b2VPNlJsUkFtYXZjQzdnSldRVjN2T0EvNGJXUmVNamxjalJoZ3llcWE0TFcrMFBmd2h5UXhtdmozZmlnUm5wMTJiQ053RG5GbkVlSUJ2QW44WlhKc0YvRDNpdDJJU0UrMUdyODhqNjR2Ym4rMnRFdmdHOERGdnpDUElLdjBOeWtTSDZBYisxc2FkRHZ3TFVsckZvQm40SjNUdVhXNHRsY0IrcEZXUFEyWjdNdkhNWFRmU1VyM0FCdUJyeElXb0ZtbWVqeExQN25VakY3QUxIVndEVVh2T09HUmhhcEYyYms2eElDZmJnaThJTnRLRk5FbmF2TlhBQjJ3dkgwTW1QQi9LZ1hjVFpaOTJFMm4wUmx1anY4ZS9BcDVBRnM5aHU2M0RwZEhyZ1Vzd1FjcURDNG1FQ1B2T1Y0YWFudE1tWE9rTGNnMWluRXVKVzVMOXlITGtqSFlUdmJPdkJUNkVHUGxhTy9OZHlNSlVFR2x1Zjc1T3BMbDdnVjhDL3hicy9SU2tNTjRXWE8rME16MWs2MmdnRXJLeHdQdU10cDhncVNEcmJDMCtGdG9uVFloQVN2TVVaSW11Snk1RWZiWVd4d3MxaUo4Y0ppUGx2Z3Y0bnJ2b2lMRGNEdmlkU0doOFBHc2JYNGdLYnF1RCs1ZWxIUHByd0hVMmJnSHlVYThHbmdyR0xrRkZ2U3FJV1NOMzhLRVFiYkZEWFd6ekxnTCtHc1ZJUGk1Q0RCV204bjJVSVFZOGFBVDVBK0Ewb01uR3ZoQThQeDUxZmZoMWtsK2dPTVdmY3pFbUtDa3hScjNSMk1kNjRQSGhvS2YzL2ZQdDdOeDU1MUQ4OGtHa2tSZmEzRjlEZ3VCUWdTelliRy9jRDJ5UGx5TzMyc2RqaUNtYlVEdVdUNXM2Ync4K25rRkthcEh0YlRGd0RYTFZmVnlNZUNLcy9aV1R0TEQxOXVrQUhrWXU5My9hZDNVaFB2cUowZkU4YjF3SDhCK0lGNXd3dmhOWlpuK3ZkVWk0SjdrTGppbjZrQVMya216azdFRmFheDlKbkdBRTh3OTlIL0FwNEhadnJsWVVaMndDYmlRSzZDc1E0OXdlRVAxY1pDMTgvQW94ejNMdldpdlNrT3RzL2puZXZkOEQvcEVnTVJJZ2g2enhaMjB1aDF1UTRIeVp1UHR4dWgza2Z2dTdCYmtkWjNqUHpBSitDODhhZWd4OXV0MTM2QVh1OU5ZNFhQU2NUZHhGUElEY3ZJZUQ3L2tzaXJ1K1RNU3dZNEt4T1J1L255UU9JZmUySStYZWVTalc5ZkVzaW1OODVkeUtYTGhOeURVOHlidjNidFMrZG0rZ3BOSnFoRjNJWmZzR2NrMHJrUlU2QWJsbm00RXZFaGZDRjFIOHY5Vzc5Z1J5VDF1UmduTzlwN1ZFSGdIbDY5Y3U5VjJxdEFiVk1uYzllQmJnSE5UZzZ1TWV4Rnc1TjhiRFN1QU80c0o2SW5DVzk3ZnI5L01ENjBPSWNmcUZLSmgzRlRLM3ZqWGRpYVZpQzJDZEhWWnJ5cHcvSTJtZHh3WHI2a09adWhlQ1o5NkJNV0tRWkxpRXVKdndITENpRkhvR0dibGk2Sm1HYW50bVhIRDlFTkxlWDBldVM2dDkvMGIzM2Q3MzUydG1Ma3Q1ZGd5S0hldTk1M3JRbWZZTFViQzNCKzIrSDBhTVIxYTNtUHJuQmhUSHVQaXVCd25uZmNpUzk2U01hUUIrbTZRbnN3OHA1ZHVRcTdzZFdiUWQ3b0hCRkdTcmlEUzBUNXdIc0lBY1V0UFl2MEJheTEvRFhHL3hVNUNKOTlFQzNPMytjQXdmTVA1OXlDWFlnQUxOejFNNDB3UEt5UG5heDUvejVaVHhWU1NaYnlNU1pCOXZSVmt4SHpOUmRzbkhDdS83aTZKbmlyczRFRDFCMmFhZDN0L1ZLQkMvRGJteFp3TVRFTU8zSTZaNUQ0cXByaUhLYmgwdWprZHVrbzlYMERrQmtSQUZ3blIzc0c1UWYrU1VJcjV6SmVhbU9xRU9oUHVRMGE3VEd6TUZ1YmMzSTg5Z1BoTGVhaVE4VnlFbGZ5bFN3RjF1NEdENm9zWUNid3F1ZGFOMDVydElqMC82a0drTlRmRnhpQUY2amVnTndmM25rVGxPcExUWHIxM3FoTFViK2JmM0dwSDJGYkdIVnpITmxKSXE3NmJBKzBwZTF1Z2c2cEpmUXVRQ1RVWkM0L3Y1WjZIYWpjTU9sQUYxVm5PNDZJbXQ0d1prdFYzcG9BNWxReTlFd3JNVCtEOWtwWjlBOFVTL0FBM3lIYU42bEdyM3NZV2trSVMwYlVIdWxwOU1jRDErMndwOFh4K3lQcjBVeHM5UXpIY2xrVkdaZ2hJMzcwVXU2c3RHbDZmdDMwZlFtY2ZvTWhoQnFpUlp2SzFCQVdXcDJPWnR1cDZrMW04aDNSUURNV0hxSlI0cysvZEM1RWgzNllwZmRIVGdqOXZuUXJ0VmhRcmN0eUNyTmhveHJTOE1hNUNsR0c1NmdoVEx0Mnd0SDBleGdqdjdVZllaajRUMmN1VFdyVUZ1NDUzQXZpQUxXQ3BxaUx0MUlDSHRkSFRNZzE2U3dsYk53S1dRUGdvVXhyMXoyMjMwM1dQN25rYmtzbzZ4VHlOS25vQ0U2cGNvK2ZBZzBPM29NaGpYcm96QmQvcTJJYmVvUHdhd09VUHRtOWE2VkJTTzBPc2ZyU2dJOXYzNTA0aGMxRk5SQXNMQjFidjhvSHhZNk9reGFUdEtSeTlCV2JLSFVBSW5EUk5ReHZRR0ZHZE1oVUcxNC9USDJSNzZHTDVHNGs0R2NPczl1clFnWVZxQzZuQ1BveXhwR3FZanQrNzdLSHM4enRGbE1BZlhRN0tDMzRiOHkrY29uSHAyaEd4RzV0SmYrSDdFWVA2N1ExTXB3R1RCMjcxbklyZmxDUWJ2MjVlQ1IxQzh0TUQrbm9ZeVZhdFFCdEd2bHE4RGZnNHg3VGdzOUV4aC9pMzJ1UVhWNmhhZ21HcUIwVzRNY2ExOEdkTGNuMGxaWDdIb1FNckdQOU42bS85QUFXdFhUdExON3lZZTE2U2gyK2haYkovZklXU0IxeURML1JhanlVS2tFT2NRTDlnM29GYW9IY0MvQTMyREVhUjJGS3o3cUVCKzUvSWk1NWlRUXBSOUpBL3NaSHUyTFN6Y2VrSlVnUXFJMXlKWDRuWlVkMmhsR09FSndoYVVQRGlWaUJFdlFDN0FSVVNDMElNeVBxSHJNVnowQkRIcytZZ3BIa0x1eVg0aTVxbEN4Y3RaU0hBdUozS2Z5cEhMZWlOZVowR0phRVZDN2d2U1RGdnY2K0hEUVV2VGpPRDJIaFQ0RHdVYVVZWjFHdklvTmlOWGNpZnd2MGEzZXBRRStwRFJ3Y25NT0JTNzNncTBoNjVkS2FhMkd4MUNsM2V0Qm1uZi90eDhTc29jVzl3bkViTi9rM2lsL3dXU0REVUZNU01RQ1UvZ3RwMkpNbEhUaU5La1IvSU4yRDRVVS9ncDgzbW9oMnUrZCsxbGxJazdMSG9HbWFkaTZJblI0bnVvM2VjSEpGK3hkMTBMSzFFdDZlZkIvUWtrNDVKU2VHVWJLano3bUlGU3pVQWtQSUcxdUFpdjZHbllSSDdYcXhSVW9TemN0MUdXOGliaU5TdVFVdHFCU2dEWGtDelNUN0Y1RXU1U0svR0RkTStNaHRSNFl6VXFxdmtNK3llb3duMG5rRXNaY3lJNnJQY1JGVHNmSlNwZ2RxQnMxdHU4KzlXb2NQY00xbjRUekR2RDVneFR6a2ZrVjRJOHE3UVJ0UkI5d0c2TlJkcmRMN0ErakZlWEtaV2VLVzdKUVBRRWFkUUozdlBYRVhWWWh6aElrZ2Y2RXdNZTlwSk1BTG5FUlh1d1R0Y0xlREZSMjA0VmF1TjZFcDFyS0VTTDBKbjdCZkUybEJJZktCdFhES3BSM09yTzVoemc3NUFYazFiRTcwelo3MDUzTGJSSTNTbVRUTFZOalVMYWZqSEsrbUFIOFYzaVFmWnh3RCtqYXJ6ekxhdVEyM0FWYXRYNG9FZWczU1JUbWZjU3oyaUJ0UG95bEpxY2FuT09SMFhPbTBtMkU2MG1xUVdIR3gwbzBIZDlXbVhFaGFnZEtRbWZYcjVBRFJjOXR4Sm5na1hJUWwxRzlKc0xiczVQazJ6aldZZFhmRFFjSkJtRG5vUzZQS3FRd0o1SGxOSmZnZHhjSDZlaEJNaWxLSWFzc3ZWY2djNTZmdkQ4Y3N5YUQ4RlBmblVUMUJDUjB2c084Z0lhaU43NFBRZlZKVU9MdFFwTEdJVVdxUWVaTDcrN3Q1SG9JRWNqNXQyT2ZrSG1LZVFxbklxMHNKdHZtbjN4aDRtS2hmVjIzZGN3ZmNqSERQdjNkcUFNaW11TmQxaGdCSDROYVFoSCtNWmcvRWIwdW9mZnhwSldpUi9JUGNtbFBEL1FtRldvMEpmMjYwdVBvUGdrd1FpZVZSc09ldDZEbU1TNVVtV29yalVIQ1Yybk4rZDA0b21ORmx0VEdHdDJJaGZjajJHbUk2WDJPb29oM29BczdCWDI3QmRzemVkNFk4NUdMVXpia0NVY2crcEVZU25nTWRTNkZHYmowczZrR0xlekc5WC9MaVlTOW1vVTk1eEYxQmxUaHR6THNBNzJORktLT1VoYXBJTklvNFo5VkpOUUJtTVdLalkyZVFUY2k3VFlqY1NUQk5WSUt6VjV6L3VIM29yU3ExOTA0NEpZNmtIVTdSczJadGJhT3BwUURPSUxVWjhSL0NQRUcwRkJTUXlmd0wwVXp1cjFwZHh2SjAraE4waW4zazFnZFl5MmR4SHZRa2pEa05IVFc5TXJLSVphR2RDZ3pxT2xtOU1Yb21hYkx5M1pzZGYyNmJ1QlplaDFqU2JrdFV4Q3d1c0txaHVRTzNjM2NTVlZqNFM2aWVUTHBkM0EvYWpmYlYzS09nNlFyRFcxTVhCbUQ2VDBQa1d5bzN3aXl0bzFJYjRQaFdpam5kRUdkNkdmYUpPbTlNZnlMOW5pWnlBZjN5ZHNEd3BLZjRwY0E2Y2REdGdoclVFbXNjWU9MSHpmcE0wMnZSSzlrM0lUeHBoT2lGcWE3NmVsK1g2M251ZFI5bVF2Y25IY0w2WDYxdVVRY21jMkl3dDJ2VS93OVd1WHVyazZVRFBzRyszV1p2U2FSa3RMOC8yeFJkcnpPU1NrNXlJVDMyVjdYZzdrd2pFQWJSMVBVVmZUQklwUHBpT21LTGMxM282c2FhZDd0c0Q0UWRQVENaSE5COG9TUG9xVVpKMmQ2MmlTeW5RUEVxQVZLSmI2TWRDN2JkZk4vV3UyT2ZzUUE0NUNHbjFzTUZjWHNreTNvcHFaNndab3NYVnNzNzFWMlJ3VktXT2ZSYzIxWDhJQy9aUjE5TnI0YzVFQTlocXQ3d0M2QnFCekRnbkZhaHRYWjd3VmRwajNJYjUveGVhOUR2RmwvM3BpN2s2UVNwNkxUUENKOW9YbHlLVnpGZm0wRGw4UW84OUZMdGs4STFTZnpmRU0zbXZoYmtDUnI1b2ZUMVR2YUxBNXk1Q2J0eEZZaTJkQlVsTGtaVGIyRXVReXJVQWFLVmZndHlkcVVjZnhYRlM4L0JFRGRFTjRBZk5FOUFMa200d0o3ckRER05DL0Q0THVrdWs1d0c4dGxDR2xOTS9vTWRubUtrUE0vcVROdHhYUHFoYVlzeHJGTW90UUZzdk45UkxpbGFmeFhvQUwxdEtBTlA0Y08xOTNwaTk2ZTR0NUJYbGVscXhBTWZKaSs5NytodElTZnUraHdzNXFOa3JPalBYV3N3ZDVScHRzM3Y1a2g1cy9ueUFWalR4dnRwWThQZzJENlVySVUyc3FhZzJIODJNb0RzVlUvNHNKbEErM2krQndmblRsY09ZOG5QbFNCR25ZOTFXaTBocVNOV1hJa0NGRGhnd1pNbVRJa0NGRGhnd1pNbVRJa09IWEFmOFBFd21qQ2V5ejFWOEFBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TWpJdE1ESXRNVGxVTVRZNk1qYzZNVGNyTURBNk1EQ0M4czRkQUFBQUpYUkZXSFJrWVhSbE9tMXZaR2xtZVFBeU1ESXlMVEF5TFRFNVZERTJPakkzT2pFM0t6QXdPakF3ODY5Mm9RQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdGVsZXBob25lLWUzMjQ0NDcyNjI2NGUxOTcwMzhkNGU1NmE2Mzc1OGYxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9lcnAtNTg2NGJiMDFmM2RmNDZhYmNhZTlkNDljODE2MzVmYTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NvY2lhbC0yYWI0NjRiZWE2NDNmNDAzNjM5MGY4NjU4MTQyMjgxMi5wbmdcIjsiLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBab29tIGZyb20gJ3JlYWN0LXJldmVhbC9ab29tJztcblxuY29uc3QgU2VjdGlvbkhlYWRpbmcgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGluZ30gey4uLnByb3BzfT5cbiAgICAgIDxab29tIGxlZnQgY2FzY2FkZT5cbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgIDwvWm9vbT5cbiAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICA8Wm9vbSBsZWZ0IGNhc2NhZGU+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1pvb20+XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGluZztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkaW5nOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtYXhXaWR0aDogNjYwLFxuICAgIG1hcmdpbjogWycwIGF1dG8gNjBweCddLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgZm9udFNpemU6IFs1LCBudWxsLCBudWxsLCAyNiwgbnVsbCwgMzAsIDldLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjMzLCAxLjMzLCAxLjQ4XSxcbiAgICBsZXR0ZXJTcGFjaW5nOiBbJy0wLjVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICctMXB4J10sXG4gICAgaW1nOiB7XG4gICAgICBtbDogWycxNXB4J10sXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRvcDogJzhweCcsXG4gICAgfSxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgbGluZUhlaWdodDogWzEuNTgsIDEuNTgsIDEuNTgsIDIuMl0sXG4gICAgbWF4V2lkdGg6IFsnbm9uZScsICdub25lJywgJ25vbmUnLCAnbm9uZScsIDc5MF0sXG4gICAgbWFyZ2luOiAnMTVweCBhdXRvIDAnLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IEJhc2VBY2NvcmRpb24gfSBmcm9tICcuL2Jhc2UtYWNjb3JkaW9uJztcbmltcG9ydCBhY2NvcmRpb25JY29uQ2xvc2UgZnJvbSAnYXNzZXRzL2FjY29yZGlvbi1hcnJvdy5zdmcnO1xuaW1wb3J0IGFjY29yZGlvbkljb25PcGVuIGZyb20gJ2Fzc2V0cy9hY2NvcmRpb24tYXJyb3ctZS5zdmcnO1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uQnV0dG9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25Db250ZW50cyxcbiAgc2luZ2xlLFxuICBwcmV2ZW50Q2xvc2UsXG4gIGNvbWJpbmVSZWR1Y2Vycyxcbn0gZnJvbSAnLi9zaGFyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvcmRpb24oeyBpdGVtcywgLi4ucHJvcHMgfSkge1xuICBjb25zdCBvcGVuSWNvbiA9IDxJbWFnZSBzcmM9e2FjY29yZGlvbkljb25PcGVufSBhbHQ9XCJvcGVuIGljb25cIiAvPjtcbiAgY29uc3QgY2xvc2VJY29uID0gPEltYWdlIHNyYz17YWNjb3JkaW9uSWNvbkNsb3NlfSBhbHQ9XCJjbG9zZSBpY29uXCIgLz47XG4gIHJldHVybiAoXG4gICAgPEJhc2VBY2NvcmRpb25cbiAgICAgIHN0YXRlUmVkdWNlcj17Y29tYmluZVJlZHVjZXJzKHNpbmdsZSwgcHJldmVudENsb3NlKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7KHsgb3BlbkluZGV4ZXMsIGhhbmRsZUl0ZW1DbGljayB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXG4gICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKGluZGV4KX0+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpID8gb3Blbkljb24gOiBjbG9zZUljb259XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRzIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50c31cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50cz5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQmFzZUFjY29yZGlvbj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEJhc2VBY2NvcmRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBjaGFuZ2VzKSA9PiBjaGFuZ2VzLFxuICAgIG9uU3RhdGVDaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuICBzdGF0ZSA9IHsgb3BlbkluZGV4ZXM6IFswXSB9O1xuICBnZXRTdGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbkluZGV4ZXM6XG4gICAgICAgIHRoaXMucHJvcHMub3BlbkluZGV4ZXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXNcbiAgICAgICAgICA6IHRoaXMucHJvcHMub3BlbkluZGV4ZXMsXG4gICAgfTtcbiAgfVxuICBpbnRlcm5hbFNldFN0YXRlKGNoYW5nZXMsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgICBsZXQgYWxsQ2hhbmdlcztcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIGNvbnN0IGNoYW5nZXNPYmplY3QgPVxuICAgICAgICAgIHR5cGVvZiBjaGFuZ2VzID09PSAnZnVuY3Rpb24nID8gY2hhbmdlcyhhY3R1YWxTdGF0ZSkgOiBjaGFuZ2VzO1xuICAgICAgICBhbGxDaGFuZ2VzID0gdGhpcy5wcm9wcy5zdGF0ZVJlZHVjZXIoYWN0dWFsU3RhdGUsIGNoYW5nZXNPYmplY3QpO1xuICAgICAgICByZXR1cm4gYWxsQ2hhbmdlcztcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25TdGF0ZUNoYW5nZShhbGxDaGFuZ2VzKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGhhbmRsZUl0ZW1DbGljayA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBzdGF0ZS5vcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBjbG9zaW5nID8gJ2Nsb3NpbmcnIDogJ29wZW5pbmcnLFxuICAgICAgICBvcGVuSW5kZXhlczogY2xvc2luZ1xuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleClcbiAgICAgICAgICA6IFsuLi5zdGF0ZS5vcGVuSW5kZXhlcywgaW5kZXhdLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgb3BlbkluZGV4ZXM6IHRoaXMuZ2V0U3RhdGUoKS5vcGVuSW5kZXhlcyxcbiAgICAgIGhhbmRsZUl0ZW1DbGljazogdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQmFzZUFjY29yZGlvbiB9O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZm9udFNpemU6ICcxN3B4JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgICBwYWRkaW5nTGVmdDogJzE1cHgnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAnMzBweCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgICAnQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpJzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzMwcHgnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICczMHB4JyxcbiAgICAgICAgcGFkZGluZ1RvcDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnMjBweCcsXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXG4gICAgICB9LFxuXG4gICAgICAnOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXG4gICAgICB9LFxuICAgICAgc3Bhbjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgcmlnaHQ6ICcyMHB4JyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgICAgICByaWdodDogJzMwcHgnLFxuICAgICAgICB9LFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICB3aWR0aDogJzdweCcsXG4gICAgICAgICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfX1cbiAgICB7Li4ucmVzdH1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgb3Blbjoge1xuICAgIC8vIG1heEhlaWdodDogMjAwLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgfSxcbiAgfSxcbiAgY2xvc2VkOiB7IGhlaWdodDogMCwgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IDAgfSxcbn07XG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uQ29udGVudHMoeyBpc09wZW4sIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgIGNzcz17e1xuICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgIHBhZGRpbmc6ICcwIDE1cHgnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc0MHB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxuICAgICAgICBjb2xvcjogJyMzNDNENDgnLFxuICAgICAgICAnQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDMwcHgnLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uSXRlbSA9ICh7IGlzT3BlbiwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjInLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9fVxuICAgIHsuLi5yZXN0fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBwcmV2ZW50Q2xvc2UgPSAoc3RhdGUsIGNoYW5nZXMpID0+XG4gIGNoYW5nZXMudHlwZSA9PT0gJ2Nsb3NpbmcnICYmIHN0YXRlLm9wZW5JbmRleGVzLmxlbmd0aCA8IDJcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IHN0YXRlLm9wZW5JbmRleGVzIH1cbiAgICA6IGNoYW5nZXM7XG5cbmV4cG9ydCBjb25zdCBzaW5nbGUgPSAoc3RhdGUsIGNoYW5nZXMpID0+XG4gIGNoYW5nZXMudHlwZSA9PT0gJ29wZW5pbmcnXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBjaGFuZ2VzLm9wZW5JbmRleGVzLnNsaWNlKC0xKSB9XG4gICAgOiBjaGFuZ2VzO1xuXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiAoc3RhdGUsIGNoYW5nZXMpID0+XG4gIHJlZHVjZXJzLnJlZHVjZSgoYWNjLCByZWR1Y2VyKSA9PiByZWR1Y2VyKHN0YXRlLCBhY2MpLCBjaGFuZ2VzKTtcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBJbWFnZSwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTbGlkZSBmcm9tICdyZWFjdC1yZXZlYWwvU2xpZGUnO1xuXG5jb25zdCBTZXJ2aWNlID0gKHsgaXRlbSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLnNlcnZpY2VJdGVtfT5cbiAgICAgIDxTbGlkZSBib3R0b20gY2FzY2FkZT5cbiAgICAgICAgPEJveCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMuZmlndXJlfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtPy5pY29ufSBhbHQ9XCJpY29uXCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+e2l0ZW0/LnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBhcz1cInBcIj57aXRlbT8uZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2xpZGU+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlcnZpY2VJdGVtOiB7XG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdmbGV4J10sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gIH0sXG4gIGZpZ3VyZToge1xuICAgIG1pbldpZHRoOiBbODgsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcwLCA4OF0sXG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzMF0sXG4gICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAwXSxcbiAgICBpbWc6IHtcbiAgICAgIG1heFdpZHRoOiBbNDIsIG51bGwsIG51bGwsIDYwLCA3MCwgJzEwMCUnXSxcbiAgICB9LFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgaDM6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250U2l6ZTogWzIsIG51bGwsIG51bGwsIDE3LCAzXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjY4XSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44OF0sXG4gICAgICBtdDogWzJdLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgbXQ6IFsyLCBudWxsLCBudWxsLCAzXSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgRmxleCwgQm94LCBJbWFnZSwgVGV4dCwgSGVhZGluZywgTGluayB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IEZhVHdpdHRlciwgRmFHaXRodWIsIEZhTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBTaUxpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvc2knO1xuXG5jb25zdCBUZWFtTWVtYmVyID0gKHsgbWVtYmVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICA8RmxleCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMuYXZhdGFyfT5cbiAgICAgICAgPEltYWdlIHNyYz17bWVtYmVyPy5hdmF0YXJ9IGFsdD17bWVtYmVyPy5uYW1lfSAvPlxuICAgICAgPC9GbGV4PlxuICAgICAgPEJveCBzeD17c3R5bGVzLmFib3V0fT5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPnttZW1iZXI/Lm5hbWV9PC9IZWFkaW5nPlxuICAgICAgICA8VGV4dCBhcz1cInBcIj57bWVtYmVyPy5kZXNpZ25hdGlvbn08L1RleHQ+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWxMaW5rc30+XG4gICAgICAgICAge21lbWJlcj8uc29jaWFsTGlua3M/Lm1hcCgoc29jaWFsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17c29jaWFsPy5saW5rfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge3NvY2lhbD8ubmFtZSA9PT0gJ3R3aXR0ZXInICYmIChcbiAgICAgICAgICAgICAgICA8RmFUd2l0dGVyIHNpemU9XCIxOHB4XCIgY29sb3I9XCIjNTVBQ0VFXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3NvY2lhbD8ubmFtZSA9PT0gJ2dpdGh1YicgJiYgKFxuICAgICAgICAgICAgICAgIDxGYUdpdGh1YiBzaXplPVwiMThweFwiIGNvbG9yPVwiIzE2MTYxNFwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtzb2NpYWw/Lm5hbWUgPT09ICdsaW5rZWRJbicgJiYgPFNpTGlua2VkaW4gc2l6ZT1cIjE4cHhcIiAvPn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYXZhdGFyOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBhYm91dDoge1xuICAgIG10OiBbNF0sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgaDM6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDE3LCBudWxsLCA0XSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGNvbG9yOiAnIzc1ODlBMScsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcbiAgICAgIG10OiBbMl0sXG4gICAgfSxcbiAgfSxcbiAgc29jaWFsTGlua3M6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgICBtdDogWzNdLFxuICAgIGE6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBtcjogWzJdLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5cbmNvbnN0IFRlc3RpbW9uaWFsc0NhcmQgPSAoeyBpbWFnZSwgdGV4dCwgbmFtZSwgdXNlcm5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHNDYXJkfT5cbiAgICAgIDxUZXh0IGFzPVwicFwiPnt0ZXh0fTwvVGV4dD5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHNJbmZvfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc0ltYWdlfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc0NvbnRlbnR9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57bmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCI+e3VzZXJuYW1lfTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc0NhcmQ7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdGVzdGltb25pYWxzQ2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgbWI6ICcyMHB4JyxcbiAgICBweDogWycyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzI1cHgnLCAnMzVweCddLFxuICAgIHB5OiBbJzIwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMjBweCcsICcyNXB4J10sXG4gICAgcGI6IFsnMjVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcyNXB4JywgJzM1cHgnXSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgbGluZUhlaWdodDogMS44NyxcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXG4gICAgfSxcbiAgfSxcbiAgdGVzdGltb25pYWxzSW5mbzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJzIwcHgnLFxuICB9LFxuICB0ZXN0aW1vbmlhbHNJbWFnZToge1xuICAgIGltZzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgfSxcbiAgfSxcbiAgdGVzdGltb25pYWxzQ29udGVudDoge1xuICAgIGgzOiB7XG4gICAgICBtOiAwLFxuICAgICAgY29sb3I6ICcjMGYwNzRiJyxcbiAgICAgIGZvbnRTaXplOiAnMTdweCcsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgbTogMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBjb2xvcjogJyMzNjJjODgnLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIG10OiAnMTBweCcsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSAncmMtZHJhd2VyJztcblxuY29uc3QgRHJhd2VyID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgY2xvc2VCdXR0b24sXG4gIGNsb3NlQnV0dG9uU3R5bGUsXG4gIGRyYXdlckhhbmRsZXIsXG4gIHRvZ2dsZUhhbmRsZXIsXG4gIG9wZW4sXG4gIHdpZHRoLFxuICBwbGFjZW1lbnQsXG4gIGRyYXdlclN0eWxlLFxuICBjbG9zZUJ0blN0eWxlLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSY0RyYXdlclxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICBjbGFzc05hbWU9e2BkcmF3ZXIgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gLnRyaW0oKX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgaGFuZGxlcj17ZmFsc2V9XG4gICAgICAgIGxldmVsPXtudWxsfVxuICAgICAgICBkdXJhdGlvbj1cIjAuNHNcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cbiAgICAgICAgICAgIHtjbG9zZUJ1dHRvbn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBzeD17ZHJhd2VyU3R5bGV9PntjaGlsZHJlbn08L0JveD5cbiAgICAgIDwvUmNEcmF3ZXI+XG4gICAgICA8Qm94XG4gICAgICAgIGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICA+XG4gICAgICAgIHtkcmF3ZXJIYW5kbGVyfVxuICAgICAgPC9Cb3g+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiAnMzIwcHgnLFxuICBwbGFjZW1lbnQ6ICdsZWZ0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi93aWRnZXQnO1xuaW1wb3J0IHsganN4LCBCb3gsIEdyaWQsIENvbnRhaW5lciwgSW1hZ2UsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCB7IG1lbnVJdGVtcywgc29jaWFsIH0gZnJvbSAnLi9mb290ZXIuZGF0YSc7XG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tICdhc3NldHMvdGVjaHZlc3RvcnMtbG9nby5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzeD17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlckJvdHRvbUFyZWF9PlxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIvXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtGb290ZXJMb2dvfVxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBteDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBpZCwgdGl0bGUsIGl0ZW1zIH0pID0+IChcbiAgICAgICAgICAgICAgPFdpZGdldCBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIG14OiAnYXV0bycsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NvY2lhbC5tYXAoKHsgcGF0aCwgbGFiZWwsIGljb24gfSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpY29ufSBhbHQ9e2xhYmVsfSBzeD17c3R5bGVzLmZvb3Rlci5pY29ufSBrZXk9e2l9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxuICAgICAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gVGVjaFZlc3RvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3Rlcjoge1xuICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZTZlNmU2JyxcbiAgICBib3hTaGFkb3c6ICcwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgIGZvb3RlckJvdHRvbUFyZWE6IHtcbiAgICAgIHB0OiBbNl0sXG4gICAgICBwYjogWzZdLFxuICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIG1lbnVzOiB7XG4gICAgICBtdDogWzQsIG51bGwsIG51bGwsIDZdLFxuICAgICAgZ2FwOiBbMzAsIG51bGwsIDUwLCAnMjBweCA1MHB4JywgMTcsIDUwXSxcbiAgICAgIGRpc3BsYXk6IFsnZ3JpZCddLFxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgICAncmVwZWF0KDIsIDFmciknLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICAncmVwZWF0KDIsIDFmciknLFxuICAgICAgICAncmVwZWF0KDMsIDFmciknLFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAgbGluazoge1xuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgICAgbWI6IDIsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zNXMnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCAxLjhdLFxuICAgICAgcHg6IFsyLCBudWxsLCA0XSxcbiAgICAgICc6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgd2lkdGg6IFsnMjBweCcsIG51bGwsICczMHB4J10sXG4gICAgICBoZWlnaHQ6IFsnMjBweCcsIG51bGwsICczMHB4J10sXG4gICAgICBtcjogWzIsIG51bGwsIDNdLFxuICAgICAgbXk6IFs0LCBudWxsLCA2XSxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zNXMnLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29weXJpZ2h0OiB7XG4gICAgICBtdDogWzJdLFxuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgZmFjZWJvb2sgZnJvbSAnYXNzZXRzL3NvY2lhbC9mYWNlYm9vay5wbmcnO1xuaW1wb3J0IHR3aXR0ZXIgZnJvbSAnYXNzZXRzL3NvY2lhbC90d2l0dGVyLnBuZyc7XG5pbXBvcnQgZ2l0aHViIGZyb20gJ2Fzc2V0cy9zb2NpYWwvZ2l0aHViLnBuZyc7XG5cbmltcG9ydCBsb2NhdGlvbiBmcm9tICdhc3NldHMvcGxhY2Vob2xkZXIucG5nJztcbmltcG9ydCBnbWFpbCBmcm9tICdhc3NldHMvZ21haWwucG5nJztcbmltcG9ydCB0ZWxlcGhvbmUgZnJvbSAnYXNzZXRzL3RlbGVwaG9uZS5wbmcnO1xuXG5leHBvcnQgY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdBYm91dCBVcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdTdXBwb3J0IENlbnRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdBYm91dCBVcycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0NvcHlyaWdodCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ091ciBJbmZvcm1hdGlvbicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdSZXR1cm4gUG9saWN5ICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1ByaXZhY3kgUG9saWN5JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnVGVybXMgJiBDb25kaXRpb25zJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdjYXJlZXInLFxuICAgICAgICBuZXh0UGFnZTogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdDYXJlZXInLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6ICdDb250YWN0IFVzJyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBpY29uOiB0ZWxlcGhvbmUsXG4gICAgICAgIGxhYmVsOiAnKzkxIDg4ODQ5Mzc5ODcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgaWNvbjogdGVsZXBob25lLFxuICAgICAgICBsYWJlbDogJys5MTYyNjY2MDk5OTQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgaWNvbjogbG9jYXRpb24sXG4gICAgICAgIGxhYmVsOiAnQmFuZ2Fsb3JlLCBJbmRpYScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBpY29uOiBnbWFpbCxcbiAgICAgICAgbGFiZWw6ICdzdXBwb3J0QHRlY2h2ZXN0b3JzLnRlY2ggJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmb290ZXJOYXYgPSBbXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnQWR2ZXJ0aXNlJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcjIScsXG4gICAgbGFiZWw6ICdTdXBwb3J0cycsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnTWFya2V0aW5nJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcjIScsXG4gICAgbGFiZWw6ICdGQVEnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbCA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBsYWJlbDogJ0ZhY2Vib29rJyxcbiAgICBpY29uOiBmYWNlYm9vayxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBsYWJlbDogJ1R3aXR0ZXInLFxuICAgIGljb246IHR3aXR0ZXIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbGFiZWw6ICdHaXRodWInLFxuICAgIGljb246IGdpdGh1YixcbiAgfSxcbl07XG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IFdpZGdldCA9ICh7IHRpdGxlLCBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmZvb3RlcldpZGdldH0+XG4gICAgICA8SGVhZGluZyBhcz1cImg0XCI+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgIDx1bD5cbiAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCwgaWNvbiB9LCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICB7aWNvbiAmJiA8SW1hZ2Ugc3JjPXtpY29ufSBhbHQ9e2xhYmVsfSAvPn1cbiAgICAgICAgICAgIDxOYXZMaW5rIHBhdGg9e3BhdGh9IGtleT17aX0gbGFiZWw9e2xhYmVsfSB2YXJpYW50PVwiZm9vdGVyXCIgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9vdGVyV2lkZ2V0OiB7XG4gICAgaDQ6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGluZUhlaWdodDogMS42OCxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIHVsOiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIG1hcmdpbjogJzI4cHggMCAwJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBjb2x1bW5zOiBbMSwgbnVsbCwgbnVsbCwgMSwgMSwgMSwgMl0sXG5cbiAgICAgIGxpOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGltZzoge1xuICAgICAgICAgIG1yOiAnMTVweCcsXG4gICAgICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhOiB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC44KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBCb3gsIEdyaWQsIEZsZXgsIEJ1dHRvbiwgSW5wdXQsIFRleHRhcmVhLCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uSGVhZGluZyc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENvbnRhY3RVcygpIHtcbiAgY29uc3Qge1xuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZWdpc3RlcixcbiAgICByZXNldCxcbiAgICBjb250cm9sLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMsIGlzU3VibWl0U3VjY2Vzc2Z1bCwgaXNTdWJtaXR0aW5nIH0sXG4gIH0gPSB1c2VGb3JtKHtcbiAgICBtb2RlOiAnb25Ub3VjaGVkJyxcbiAgfSk7XG5cbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW01lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcywgZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuICAgIGVtYWlsanNcbiAgICAgIC5zZW5kRm9ybShcbiAgICAgICAgJ3NlcnZpY2VfanNhZ3p1eScsXG4gICAgICAgICd0ZW1wbGF0ZV91Y3VoaDRxJyxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSxcbiAgICAgICAgJ3VzZXJfc0lxSnAxUlE3RER1ZHFOdXZRb2dsJyxcbiAgICAgIClcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgcmVzZXQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwiZm9ybVwiXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgIHN4PXtzdHlsZXMuZm9ybX1cbiAgICAgIGlkPVwiY29udGFjdHVzXCJcbiAgICA+XG4gICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgc3g9e3N0eWxlcy5jb250YWN0X19oZWFkaW5nfVxuICAgICAgICB0aXRsZT1cIkdldCBpbiB0b3VjaFwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiV2UncmUgaGVyZSB0byBoZWxwIGFuZCBhbnN3ZXIgYW55IHF1ZXN0aW9ucyB5b3UgbWlnaHQgaGF2ZS4gV2UgbG9vayBmb3J3YXJkIHRvIGhlYXJpbmcgZnJvbSB5b3UuXCJcbiAgICAgIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmZsZXh9PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZm9ybUlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImZuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdmbmFtZScsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0ZpcnN0IG5hbWUgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLmZuYW1lICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvcnMuZm5hbWUubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZm9ybUlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwibG5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImxuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIlxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2xuYW1lJywge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9ycy5sbmFtZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLmxuYW1lLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZmxleH0gbXQ9ezN9PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZm9ybUlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbnZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5lbWFpbC5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICA8RmxleCBzeD17c3R5bGVzLmZvcm1JbnB1dH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBOdW1iZXJcIlxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3Bob25lJywge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnUGhvbmUgbm8uIGlzIFJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9ycy5waG9uZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLnBob25lLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZm9ybUlucHV0fT5cbiAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXG4gICAgICAgICAgICBpZD1cInF1ZXJ5XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUXVlcmllc1wiXG4gICAgICAgICAgICByb3dzPXs4fVxuICAgICAgICAgICAgc3g9e3N0eWxlcy50ZXh0QXJlYX1cbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncXVlcnknLCB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAnUXVlcnkgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZXJyb3JzLnF1ZXJ5ICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLnF1ZXJ5Lm1lc3NhZ2V9PC9kaXY+fVxuICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9ybToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGNEY0RjYnLFxuICAgIC8vIHA6IDMsXG4gICAgbWF4V2lkdGg6ICdjb250YWluZXInLFxuICAgIG14OiAnYXV0bycsXG4gICAgcHQ6IFszLCA0LCA1XSxcbiAgICBwYjogWzMsIDQsIDVdLFxuICB9LFxuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxuICAgIGlucHV0OiB7XG4gICAgICBmbGV4OiAxLFxuICAgICAgZ2FwOiBbMiwgbnVsbCwgbnVsbCwgM10sXG4gICAgICBtYjogWzNdLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgICBweDogNSxcbiAgICB9LFxuICB9LFxuICB0ZXh0QXJlYToge1xuICAgIG1iOiBbM10sXG4gICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgcDogNSxcbiAgICBtdDogMyxcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBtdDogNSxcbiAgfSxcblxuICBjb250YWN0X19oZWFkaW5nOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtbDogJ2F1dG8nLFxuICAgIG1yOiAnYXV0bycsXG4gICAgbWI6IFszMF0sXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1MDAsIDU2MCwgNzMwXSxcbiAgICBoMjoge1xuICAgICAgZm9udFNpemU6IFs4LCBudWxsLCBudWxsLCA4LCA5LCAxMCwgMTFdLFxuICAgICAgbGluZUhlaWdodDogWzEuNTddLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAzXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg3LCBudWxsLCBudWxsLCAyLjMzXSxcbiAgICB9LFxuICB9LFxuICBmb3JtSW5wdXQ6IHtcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICcuZXJyb3InOiB7XG4gICAgICBjb2xvcjogJyNmZjAwMDAnLFxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg3LCBudWxsLCBudWxsLCAyLjMzXSxcbiAgICAgIG1iOiBbMl0sXG4gICAgICBtbDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgcGF0aDogJ2hvbWUnLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnam9pbnVzJyxcbiAgICBsYWJlbDogJ0pvaW4gVXMnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3RlYW0nLFxuICAgIGxhYmVsOiAnVGVhbScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncG9zaXRpb24nLFxuICAgIGxhYmVsOiAnUG9zaXRpb25zJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdjb250YWN0dXMnLFxuICAgIGxhYmVsOiAnQ29udGFjdCBVcycsXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgcGF0aDogJ2hvbWUnLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnc2VydmljZXMnLFxuICAgIGxhYmVsOiAnU2VydmljZXMnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3RlYW0nLFxuICAgIGxhYmVsOiAnVGVhbScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAndGVzdGltb25pYWwnLFxuICAgIGxhYmVsOiAnVGVzdGltb25pYWwnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2NvbnRhY3R1cycsXG4gICAgbGFiZWw6ICdDb250YWN0IFVzJyxcbiAgfSxcbl07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24sIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IExvZ29EYXJrIGZyb20gJ2Fzc2V0cy90ZWNodmVzdG9ycy1sb2dvLnBuZyc7XG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL21vYmlsZS1kcmF3ZXInO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcbmltcG9ydCBtZW51Q2FyZWVySXRlbXMgZnJvbSAnLi9oZWFkZXIuY2FyZWVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSA9PT0gJy9jYXJlZXInKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJQcm92aWRlcj5cbiAgICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cImhlYWRlclwiPlxuICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuaGVhZGVyX19jb250YWluZXJ9PlxuICAgICAgICAgIDxMb2dvIHNyYz17TG9nb0Rhcmt9IC8+XG5cbiAgICAgICAgICA8RmxleCBhcz1cIm5hdlwiIHN4PXtzdHlsZXMubmF2fT5cbiAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZWVyJ1xuICAgICAgICAgICAgICA/IG1lbnVDYXJlZXJJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTMwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICA6IG1lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTMwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSAnLycgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJqb2luX191c1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2FyZWVyJyl9PlxuICAgICAgICAgICAgICBKb2luIFVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gJy9jYXJlZXInICYmIChcbiAgICAgICAgICAgIDxBXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImpvaW5fX3VzXCJcbiAgICAgICAgICAgICAgaHJlZj1cIi93d3cubGlua2VkaW4uY29tXCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBcHBseVxuICAgICAgICAgICAgPC9BPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8TW9iaWxlRHJhd2VyIGlzQ2FyZWVyPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZWVyJ30gLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L0RyYXdlclByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgcHk6IDQsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxuICAgICcuam9pbl9fdXMnOiB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgICBib3JkZXI6ICcycHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgcGFkZGluZzogWycxMHB4IDE1cHgnLCBudWxsLCAnMTVweCAzMHB4J10sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYuc3RpY2t5Jzoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICBweTogMyxcbiAgICAgICduZXYgPiBhJzoge1xuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBoZWFkZXJfX2NvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBuYXY6IHtcbiAgICBteDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogMixcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIHB4OiA1LFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4xNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9kcmF3ZXInO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dCc7XG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFUd2l0dGVyLCBGYUdpdGh1YkFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5pbXBvcnQgbWVudUNhcmVlckl0ZW1zIGZyb20gJy4vaGVhZGVyLmNhcmVlcic7XG5cbmNvbnN0IHNvY2lhbCA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhVHdpdHRlciAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFHaXRodWJBbHQgLz4sXG4gIH0sXG5dO1xuXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoeyBpc0NhcmVlciB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xuXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVE9HR0xFJyxcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xuICAgICAgICA8Qm94IHN4PXtzdHlsZXMubW9iaWxlRHJhd2VyfT5cbiAgICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjI2cHhcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIH1cbiAgICAgIG9wZW49e3N0YXRlLmlzT3Blbn1cbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwMDAwMFwiIC8+fVxuICAgICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XG4gICAgPlxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tb2JpbGVEcmF3ZXJfX2NvbnRlbnR9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cbiAgICAgICAgICAgIHtpc0NhcmVlclxuICAgICAgICAgICAgICA/IG1lbnVDYXJlZXJJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICA6IG1lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51X19Gb290ZXJ9PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XG4gICAgICAgICAgICAgIHtzb2NpYWwubWFwKCh7IHBhdGgsIGljb24gfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIga2V5PXtpfSBzeD17c3R5bGVzLnNvY2lhbC5pY29ufT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwYXRofT57aWNvbn08L0xpbms+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TY3JvbGxiYXJzPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBtb2JpbGVEcmF3ZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhTaHJpbms6ICcwJyxcbiAgICB3aWR0aDogJzI2cHgnLFxuXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmsnLFxuICB9LFxuXG4gIGNsb3NlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcyNXB4JyxcbiAgICByaWdodDogJzMwcHgnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxuXG4gIG1vYmlsZURyYXdlcl9fY29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHB0OiAnMTAwcHgnLFxuICAgIHBiOiAnNDBweCcsXG4gICAgcHg6ICczMHB4JyxcbiAgfSxcblxuICBtZW51OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYToge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgY29sb3I6ICd0ZXh0X3doaXRlJyxcbiAgICAgIHB5OiAnMTVweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlNWU1JyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBtZW51X19Gb290ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJ2F1dG8nLFxuICB9LFxuXG4gIHNvY2lhbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblxuICAgIGljb246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtcjogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmdzogJzcwMCcsXG4gICAgaGVpZ2h0OiAnNDVweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHk6ICcwJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZURyYXdlcjtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvRm9vdGVyJztcbmltcG9ydCBNZXNzZW5nZXJDdXN0b21lckNoYXQgZnJvbSAncmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXQnO1xuaW1wb3J0IENvbnRhY3RVcyBmcm9tICcuL2Zvcm0vQ29udGFjdFVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbaXNTdGlja3ksIHNldElzU3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XG4gICAgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfRklYRUQpIHtcbiAgICAgIHNldElzU3RpY2t5KHRydWUpO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19PUklHSU5BTCkge1xuICAgICAgc2V0SXNTdGlja3koZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U3RpY2t5IGlubmVyWj17MTAwMX0gdG9wPXswfSBvblN0YXRlQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX0+XG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtgJHtpc1N0aWNreSA/ICdzdGlja3knIDogJ3VuU3RpY2t5J31gfSAvPlxuICAgICAgPC9TdGlja3k+XG4gICAgICA8bWFpblxuICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxDb250YWN0VXMgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxNZXNzZW5nZXJDdXN0b21lckNoYXQgcGFnZUlkPVwiMTAwMDgyNjE5NDQzNzIxXCIgYXBwSWQ9XCI1MTQyNjc5NjMwNTM3MDFcIiAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgTmF2TGluayBhcyBNZW51TGluaywgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XG4gICAgICA8TWVudUxpbmtcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9XG4gICAgICA8L01lbnVMaW5rPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEEgey4uLnJlc3R9IGhyZWY9e3BhdGh9PlxuICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH1cbiAgICA8L0E+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oeyBzcmMsIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBocmVmPVwiL1wiXG4gICAgICBzeD17e1xuICAgICAgICB2YXJpYW50OiAnbGlua3MubG9nbycsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIG1yOiAxNSxcbiAgICAgIH19XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgIGFsdD1cInRlY2h2ZXN0b3JzXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gJy4uL2NyZWF0ZS1jb250ZXh0JztcbmltcG9ydCB7IHJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vYXBwLnJlZHVjZXInO1xuXG5jb25zdCBbc3RhdGUsIHVzZURpc3BhdGNoLCBwcm92aWRlcl0gPSB1c2VDcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSwgcmVkdWNlcik7XG5leHBvcnQgY29uc3QgdXNlU3RpY2t5U3RhdGUgPSBzdGF0ZTtcbmV4cG9ydCBjb25zdCB1c2VTdGlja3lEaXNwYXRjaCA9IHVzZURpc3BhdGNoO1xuZXhwb3J0IGNvbnN0IFN0aWNreVByb3ZpZGVyID0gcHJvdmlkZXI7XG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc1N0aWNreTogZmFsc2UsXG4gIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHR5cGUgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdTRVRfU1RJQ0tZJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1N0aWNreTogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSAnUkVNT1ZFX1NUSUNLWSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTdGlja3k6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlICdTRVRfU0lERUJBUl9TVElDS1knOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSAnUkVNT1ZFX1NJREVCQVJfU1RJQ0tZJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1NpZGViYXJTdGlja3k6IGZhbHNlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGFjdGlvbiB0eXBlOiAke3R5cGV9YCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCByZWR1Y2VyKSB7XG4gIGNvbnN0IGRlZmF1bHREaXNwYXRjaCA9ICgpID0+IGRlZmF1bHRWYWx1ZTtcbiAgY29uc3Qgc3RhdGVDdHggPSBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSk7XG4gIGNvbnN0IGRpc3BhdGNoQ3R4ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0RGlzcGF0Y2gpO1xuXG4gIGZ1bmN0aW9uIHVzZVN0YXRlQ3R4KHByb3BlcnR5KSB7XG4gICAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KHN0YXRlQ3R4KTtcbiAgICByZXR1cm4gc3RhdGVbcHJvcGVydHldOyAvLyBvbmx5IG9uZSBkZXB0aCBzZWxlY3RvciBmb3IgY29tcGFyaXNvblxuICB9XG5cbiAgZnVuY3Rpb24gdXNlRGlzcGF0Y2hDdHgoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoZGlzcGF0Y2hDdHgpO1xuICB9XG5cbiAgZnVuY3Rpb24gUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIGRlZmF1bHRWYWx1ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXNwYXRjaEN0eC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgICA8c3RhdGVDdHguUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9zdGF0ZUN0eC5Qcm92aWRlcj5cbiAgICAgIDwvZGlzcGF0Y2hDdHguUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gW3VzZVN0YXRlQ3R4LCB1c2VEaXNwYXRjaEN0eCwgUHJvdmlkZXJdO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IERyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4vZHJhd2VyLmNvbnRleHQnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc09wZW46IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdUT0dHTEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzT3BlbjogIXN0YXRlLmlzT3BlbixcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IERyYXdlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgU3RpY2t5UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyJztcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBIZXJvLCBUZXN0aW1vbmlhbHMsIFRlYW0sIFdvcmtGbG93LCBTZXJ2aWNlcywgV2h5VXMgfSBmcm9tICdzZWN0aW9ucyc7XG5pbXBvcnQgRkFRIGZyb20gJ3NlY3Rpb25zL2ZhcSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmVlcih7IG1ldGEgfSkge1xuICBjb25zdCBtZXRhRGF0YSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogYGRlc2NyaXB0aW9uYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6dGl0bGVgLFxuICAgICAgY29udGVudDogYFRlY2h2ZXN0b3JzYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogYGRlc2NyaXB0aW9uYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcbiAgICAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcbiAgICB9LFxuICBdLmNvbmNhdChtZXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8U3RpY2t5UHJvdmlkZXI+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+VGVjaHZlc3RvcnMgfCBDYXJlZXJzPC90aXRsZT5cbiAgICAgICAgICAgIHttZXRhRGF0YS5tYXAoKHsgbmFtZSwgY29udGVudCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgIDxXaHlVcyAvPlxuICAgICAgICAgIDxGQVEgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1N0aWNreVByb3ZpZGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuQ2FyZWVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFuZzogYGVuYCxcbiAgbWV0YTogW10sXG59O1xuIiwiaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvU2VjdGlvbkhlYWRpbmcnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBUZXh0LCBGbGV4LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbic7XG5cbmNvbnN0IGFjY29yZGlvbkRhdGEgPSBbXG4gIHtcbiAgICBpc0V4cGFuZGVkOiBmYWxzZSxcbiAgICB0aXRsZTogJ0Z1bGwgU3RhY2sgRGV2ZWxvcGVyJyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBhcz1cInVsXCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcHk6IDIsXG4gICAgICAgICAgICBwbDogMyxcbiAgICAgICAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBbMS41OCwgMS41OCwgMS41OCwgMi4yXSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBbJ25vbmUnLCAnbm9uZScsICdub25lJywgJ25vbmUnLCA3OTBdLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dCBhcz1cImg0XCI+RXhwZXJpZW5jZWQ8L1RleHQ+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgTWluaW11bSBvZiA2IG1vbnRocyBvZiByZWFsLXRpbWUgZXhwZXJpZW5jZSBpbiBSZWFjdC9Ob2RlLmpzL0FuZ3VsYXJcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEdvb2QgdW5kZXJzdGFuZGluZyBvZiBzdHJ1Y3R1cmVkIGFuZCB1bnN0cnVjdHVyZWQgZGF0YWJhc2VzIChNeVNRTFxuICAgICAgICAgICAgYW5kIE1vbmdvREIpXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBFeHBlcmllbmNlIGluIGltcGxlbWVudGluZyB3ZWxsLWtub3duIFJlYWN0IHdvcmtmbG93cyBzdWNoIGFzIFJlZHV4XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBQcm9maWNpZW50IHVuZGVyc3RhbmRpbmcgb2YgY29kZSB2ZXJzaW9uaW5nIHRvb2xzLCBzdWNoIGFzIEdpdFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPkV4cGVyaWVuY2Ugd2l0aCBKYXZhc2NyaXB0IGJhY2tlbmQgZnJhbWV3b3JrIGxpa2UgRXhwcmVzcy5qczwvbGk+XG4gICAgICAgICAgPGxpPkV4cGVyaWVuY2Ugd2l0aCBSZXN0ZnVsIEFQSSBzZXJ2aWNlczwvbGk+XG5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgYXM9XCJoNFwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtdDogMyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRnJlc2hlclxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBGcmVzaGVycyB3aXRoIGJhc2ljIGNvZGluZyBrbm93bGVkZ2UvY291cnNlL2NlcnRpZmljYXRpb24gaW5cbiAgICAgICAgICAgIFJlYWN0L05vZGUuanMvQW5ndWxhciBhcmUgcHJlZmVycmVkXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+TXVzdCBoYXZlIGJhc2ljIHJlYWwtdGltZSBrbm93bGVkZ2UgaW4gUmVhY3QvTm9kZS5qcy9Bbmd1bGFyPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHb29kIGtub3dsZWRnZSBpbiBKYXZhc2NyaXB0IGFuZCBhYmxlIHRvIGhhbmRsZSBBcnJheSAmIE9iamVjdHNcbiAgICAgICAgICAgIGJ1aWx0LWluIG1ldGhvZHNcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEdvb2QgdW5kZXJzdGFuZGluZyBvZiBzdHJ1Y3R1cmVkIGFuZCB1bnN0cnVjdHVyZWQgZGF0YWJhc2VzIChNeVNRTFxuICAgICAgICAgICAgYW5kIE1vbmdvREIpXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBQcm9maWNpZW50IHVuZGVyc3RhbmRpbmcgb2YgY29kZSB2ZXJzaW9uaW5nIHRvb2xzLCBzdWNoIGFzIEdpdFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPkNyaXRpY2FsIHRoaW5raW5nIGFuZCBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzPC9saT5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIG10OiAzLFxuICAgICAgICAgICAgbWI6IDMsXG4gICAgICAgICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgICAgICAgICAgbGluZUhlaWdodDogWzEuNTgsIDEuNTgsIDEuNTgsIDIuMl0sXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wNWVtJyxcbiAgICAgICAgICAgIC8vIGhvdmVyXG4gICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBcHBseVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG4gIHtcbiAgICBpc0V4cGFuZGVkOiB0cnVlLFxuICAgIHRpdGxlOiAnU29mdHdhcmUgVGVzdGVyJyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBhcz1cInVsXCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcHk6IDIsXG4gICAgICAgICAgICBwbDogMyxcbiAgICAgICAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBbMS41OCwgMS41OCwgMS41OCwgMi4yXSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBbJ25vbmUnLCAnbm9uZScsICdub25lJywgJ25vbmUnLCA3OTBdLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dCBhcz1cImg0XCI+RXhwZXJpZW5jZWQ8L1RleHQ+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgTWluaW11bSBvZiA2IG1vbnRocyBvZiByZWFsLXRpbWUgZXhwZXJpZW5jZSBpbiBSZWFjdC9Ob2RlLmpzL0FuZ3VsYXJcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEdvb2QgdW5kZXJzdGFuZGluZyBvZiBzdHJ1Y3R1cmVkIGFuZCB1bnN0cnVjdHVyZWQgZGF0YWJhc2VzIChNeVNRTFxuICAgICAgICAgICAgYW5kIE1vbmdvREIpXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBFeHBlcmllbmNlIGluIGltcGxlbWVudGluZyB3ZWxsLWtub3duIFJlYWN0IHdvcmtmbG93cyBzdWNoIGFzIFJlZHV4XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBQcm9maWNpZW50IHVuZGVyc3RhbmRpbmcgb2YgY29kZSB2ZXJzaW9uaW5nIHRvb2xzLCBzdWNoIGFzIEdpdFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPkV4cGVyaWVuY2Ugd2l0aCBKYXZhc2NyaXB0IGJhY2tlbmQgZnJhbWV3b3JrIGxpa2UgRXhwcmVzcy5qczwvbGk+XG4gICAgICAgICAgPGxpPkV4cGVyaWVuY2Ugd2l0aCBSZXN0ZnVsIEFQSSBzZXJ2aWNlczwvbGk+XG5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgYXM9XCJoNFwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtdDogMyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRnJlc2hlclxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBGcmVzaGVycyB3aXRoIGJhc2ljIGNvZGluZyBrbm93bGVkZ2UvY291cnNlL2NlcnRpZmljYXRpb24gaW5cbiAgICAgICAgICAgIFJlYWN0L05vZGUuanMvQW5ndWxhciBhcmUgcHJlZmVycmVkXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+TXVzdCBoYXZlIGJhc2ljIHJlYWwtdGltZSBrbm93bGVkZ2UgaW4gUmVhY3QvTm9kZS5qcy9Bbmd1bGFyPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHb29kIGtub3dsZWRnZSBpbiBKYXZhc2NyaXB0IGFuZCBhYmxlIHRvIGhhbmRsZSBBcnJheSAmIE9iamVjdHNcbiAgICAgICAgICAgIGJ1aWx0LWluIG1ldGhvZHNcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEdvb2QgdW5kZXJzdGFuZGluZyBvZiBzdHJ1Y3R1cmVkIGFuZCB1bnN0cnVjdHVyZWQgZGF0YWJhc2VzIChNeVNRTFxuICAgICAgICAgICAgYW5kIE1vbmdvREIpXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBQcm9maWNpZW50IHVuZGVyc3RhbmRpbmcgb2YgY29kZSB2ZXJzaW9uaW5nIHRvb2xzLCBzdWNoIGFzIEdpdFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPkNyaXRpY2FsIHRoaW5raW5nIGFuZCBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzPC9saT5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIGlzRXhwYW5kZWQ6IGZhbHNlLFxuICAgIHRpdGxlOiAnRnJvbnQgRW5kIERldmVsb3BlcicsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgYXM9XCJ1bFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHB5OiAyLFxuICAgICAgICAgICAgcGw6IDMsXG4gICAgICAgICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgICAgICAgICAgbGluZUhlaWdodDogWzEuNTgsIDEuNTgsIDEuNTgsIDIuMl0sXG4gICAgICAgICAgICBtYXhXaWR0aDogWydub25lJywgJ25vbmUnLCAnbm9uZScsICdub25lJywgNzkwXSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRleHQgYXM9XCJoNFwiPkV4cGVyaWVuY2VkPC9UZXh0PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIE1pbmltdW0gb2YgNiBtb250aHMgb2YgcmVhbC10aW1lIGV4cGVyaWVuY2UgaW4gUmVhY3QvTm9kZS5qcy9Bbmd1bGFyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHb29kIHVuZGVyc3RhbmRpbmcgb2Ygc3RydWN0dXJlZCBhbmQgdW5zdHJ1Y3R1cmVkIGRhdGFiYXNlcyAoTXlTUUxcbiAgICAgICAgICAgIGFuZCBNb25nb0RCKVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgRXhwZXJpZW5jZSBpbiBpbXBsZW1lbnRpbmcgd2VsbC1rbm93biBSZWFjdCB3b3JrZmxvd3Mgc3VjaCBhcyBSZWR1eFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgUHJvZmljaWVudCB1bmRlcnN0YW5kaW5nIG9mIGNvZGUgdmVyc2lvbmluZyB0b29scywgc3VjaCBhcyBHaXRcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5FeHBlcmllbmNlIHdpdGggSmF2YXNjcmlwdCBiYWNrZW5kIGZyYW1ld29yayBsaWtlIEV4cHJlc3MuanM8L2xpPlxuICAgICAgICAgIDxsaT5FeHBlcmllbmNlIHdpdGggUmVzdGZ1bCBBUEkgc2VydmljZXM8L2xpPlxuXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGFzPVwiaDRcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbXQ6IDMsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZyZXNoZXJcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgRnJlc2hlcnMgd2l0aCBiYXNpYyBjb2Rpbmcga25vd2xlZGdlL2NvdXJzZS9jZXJ0aWZpY2F0aW9uIGluXG4gICAgICAgICAgICBSZWFjdC9Ob2RlLmpzL0FuZ3VsYXIgYXJlIHByZWZlcnJlZFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPk11c3QgaGF2ZSBiYXNpYyByZWFsLXRpbWUga25vd2xlZGdlIGluIFJlYWN0L05vZGUuanMvQW5ndWxhcjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgR29vZCBrbm93bGVkZ2UgaW4gSmF2YXNjcmlwdCBhbmQgYWJsZSB0byBoYW5kbGUgQXJyYXkgJiBPYmplY3RzXG4gICAgICAgICAgICBidWlsdC1pbiBtZXRob2RzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHb29kIHVuZGVyc3RhbmRpbmcgb2Ygc3RydWN0dXJlZCBhbmQgdW5zdHJ1Y3R1cmVkIGRhdGFiYXNlcyAoTXlTUUxcbiAgICAgICAgICAgIGFuZCBNb25nb0RCKVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgUHJvZmljaWVudCB1bmRlcnN0YW5kaW5nIG9mIGNvZGUgdmVyc2lvbmluZyB0b29scywgc3VjaCBhcyBHaXRcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5Dcml0aWNhbCB0aGlua2luZyBhbmQgcHJvYmxlbS1zb2x2aW5nIHNraWxsczwvbGk+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG4gIHtcbiAgICBpc0V4cGFuZGVkOiBmYWxzZSxcbiAgICB0aXRsZTogJ0JhY2sgRW5kIERldmVsb3BlcicsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgYXM9XCJ1bFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHB5OiAyLFxuICAgICAgICAgICAgcGw6IDMsXG4gICAgICAgICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgICAgICAgICAgbGluZUhlaWdodDogWzEuNTgsIDEuNTgsIDEuNTgsIDIuMl0sXG4gICAgICAgICAgICBtYXhXaWR0aDogWydub25lJywgJ25vbmUnLCAnbm9uZScsICdub25lJywgNzkwXSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRleHQgYXM9XCJoNFwiPkV4cGVyaWVuY2VkPC9UZXh0PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIE1pbmltdW0gb2YgNiBtb250aHMgb2YgcmVhbC10aW1lIGV4cGVyaWVuY2UgaW4gUmVhY3QvTm9kZS5qcy9Bbmd1bGFyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHb29kIHVuZGVyc3RhbmRpbmcgb2Ygc3RydWN0dXJlZCBhbmQgdW5zdHJ1Y3R1cmVkIGRhdGFiYXNlcyAoTXlTUUxcbiAgICAgICAgICAgIGFuZCBNb25nb0RCKVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgRXhwZXJpZW5jZSBpbiBpbXBsZW1lbnRpbmcgd2VsbC1rbm93biBSZWFjdCB3b3JrZmxvd3Mgc3VjaCBhcyBSZWR1eFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgUHJvZmljaWVudCB1bmRlcnN0YW5kaW5nIG9mIGNvZGUgdmVyc2lvbmluZyB0b29scywgc3VjaCBhcyBHaXRcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5FeHBlcmllbmNlIHdpdGggSmF2YXNjcmlwdCBiYWNrZW5kIGZyYW1ld29yayBsaWtlIEV4cHJlc3MuanM8L2xpPlxuICAgICAgICAgIDxsaT5FeHBlcmllbmNlIHdpdGggUmVzdGZ1bCBBUEkgc2VydmljZXM8L2xpPlxuXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGFzPVwiaDRcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbXQ6IDMsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZyZXNoZXJcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgRnJlc2hlcnMgd2l0aCBiYXNpYyBjb2Rpbmcga25vd2xlZGdlL2NvdXJzZS9jZXJ0aWZpY2F0aW9uIGluXG4gICAgICAgICAgICBSZWFjdC9Ob2RlLmpzL0FuZ3VsYXIgYXJlIHByZWZlcnJlZFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPk11c3QgaGF2ZSBiYXNpYyByZWFsLXRpbWUga25vd2xlZGdlIGluIFJlYWN0L05vZGUuanMvQW5ndWxhcjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgR29vZCBrbm93bGVkZ2UgaW4gSmF2YXNjcmlwdCBhbmQgYWJsZSB0byBoYW5kbGUgQXJyYXkgJiBPYmplY3RzXG4gICAgICAgICAgICBidWlsdC1pbiBtZXRob2RzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHb29kIHVuZGVyc3RhbmRpbmcgb2Ygc3RydWN0dXJlZCBhbmQgdW5zdHJ1Y3R1cmVkIGRhdGFiYXNlcyAoTXlTUUxcbiAgICAgICAgICAgIGFuZCBNb25nb0RCKVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgUHJvZmljaWVudCB1bmRlcnN0YW5kaW5nIG9mIGNvZGUgdmVyc2lvbmluZyB0b29scywgc3VjaCBhcyBHaXRcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5Dcml0aWNhbCB0aGlua2luZyBhbmQgcHJvYmxlbS1zb2x2aW5nIHNraWxsczwvbGk+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG4gIHtcbiAgICBpc0V4cGFuZGVkOiBmYWxzZSxcbiAgICB0aXRsZTogJ0dyYXBoaWMgRGVzaW5nZXInLFxuICAgIGNvbnRlbnRzOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGFzPVwidWxcIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBweTogMixcbiAgICAgICAgICAgIHBsOiAzLFxuICAgICAgICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFsxLjU4LCAxLjU4LCAxLjU4LCAyLjJdLFxuICAgICAgICAgICAgbWF4V2lkdGg6IFsnbm9uZScsICdub25lJywgJ25vbmUnLCAnbm9uZScsIDc5MF0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0IGFzPVwiaDRcIj5FeHBlcmllbmNlZDwvVGV4dD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBNaW5pbXVtIG9mIDYgbW9udGhzIG9mIHJlYWwtdGltZSBleHBlcmllbmNlIGluIFJlYWN0L05vZGUuanMvQW5ndWxhclxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgR29vZCB1bmRlcnN0YW5kaW5nIG9mIHN0cnVjdHVyZWQgYW5kIHVuc3RydWN0dXJlZCBkYXRhYmFzZXMgKE15U1FMXG4gICAgICAgICAgICBhbmQgTW9uZ29EQilcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEV4cGVyaWVuY2UgaW4gaW1wbGVtZW50aW5nIHdlbGwta25vd24gUmVhY3Qgd29ya2Zsb3dzIHN1Y2ggYXMgUmVkdXhcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIFByb2ZpY2llbnQgdW5kZXJzdGFuZGluZyBvZiBjb2RlIHZlcnNpb25pbmcgdG9vbHMsIHN1Y2ggYXMgR2l0XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+RXhwZXJpZW5jZSB3aXRoIEphdmFzY3JpcHQgYmFja2VuZCBmcmFtZXdvcmsgbGlrZSBFeHByZXNzLmpzPC9saT5cbiAgICAgICAgICA8bGk+RXhwZXJpZW5jZSB3aXRoIFJlc3RmdWwgQVBJIHNlcnZpY2VzPC9saT5cblxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBhcz1cImg0XCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIG10OiAzLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGcmVzaGVyXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEZyZXNoZXJzIHdpdGggYmFzaWMgY29kaW5nIGtub3dsZWRnZS9jb3Vyc2UvY2VydGlmaWNhdGlvbiBpblxuICAgICAgICAgICAgUmVhY3QvTm9kZS5qcy9Bbmd1bGFyIGFyZSBwcmVmZXJyZWRcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5NdXN0IGhhdmUgYmFzaWMgcmVhbC10aW1lIGtub3dsZWRnZSBpbiBSZWFjdC9Ob2RlLmpzL0FuZ3VsYXI8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEdvb2Qga25vd2xlZGdlIGluIEphdmFzY3JpcHQgYW5kIGFibGUgdG8gaGFuZGxlIEFycmF5ICYgT2JqZWN0c1xuICAgICAgICAgICAgYnVpbHQtaW4gbWV0aG9kc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgR29vZCB1bmRlcnN0YW5kaW5nIG9mIHN0cnVjdHVyZWQgYW5kIHVuc3RydWN0dXJlZCBkYXRhYmFzZXMgKE15U1FMXG4gICAgICAgICAgICBhbmQgTW9uZ29EQilcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIFByb2ZpY2llbnQgdW5kZXJzdGFuZGluZyBvZiBjb2RlIHZlcnNpb25pbmcgdG9vbHMsIHN1Y2ggYXMgR2l0XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+Q3JpdGljYWwgdGhpbmtpbmcgYW5kIHByb2JsZW0tc29sdmluZyBza2lsbHM8L2xpPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuICB7XG4gICAgaXNFeHBhbmRlZDogZmFsc2UsXG4gICAgdGl0bGU6ICdNb2JpbGUgQXBwIERldmVsb3BlcicsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgYXM9XCJ1bFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHB5OiAyLFxuICAgICAgICAgICAgcGw6IDMsXG4gICAgICAgICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgICAgICAgICAgbGluZUhlaWdodDogWzEuNTgsIDEuNTgsIDEuNTgsIDIuMl0sXG4gICAgICAgICAgICBtYXhXaWR0aDogWydub25lJywgJ25vbmUnLCAnbm9uZScsICdub25lJywgNzkwXSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRleHQgYXM9XCJoNFwiPkV4cGVyaWVuY2VkPC9UZXh0PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIE1pbmltdW0gb2YgNiBtb250aHMgb2YgcmVhbC10aW1lIGV4cGVyaWVuY2UgaW4gUmVhY3QvTm9kZS5qcy9Bbmd1bGFyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHb29kIHVuZGVyc3RhbmRpbmcgb2Ygc3RydWN0dXJlZCBhbmQgdW5zdHJ1Y3R1cmVkIGRhdGFiYXNlcyAoTXlTUUxcbiAgICAgICAgICAgIGFuZCBNb25nb0RCKVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgRXhwZXJpZW5jZSBpbiBpbXBsZW1lbnRpbmcgd2VsbC1rbm93biBSZWFjdCB3b3JrZmxvd3Mgc3VjaCBhcyBSZWR1eFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgUHJvZmljaWVudCB1bmRlcnN0YW5kaW5nIG9mIGNvZGUgdmVyc2lvbmluZyB0b29scywgc3VjaCBhcyBHaXRcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5FeHBlcmllbmNlIHdpdGggSmF2YXNjcmlwdCBiYWNrZW5kIGZyYW1ld29yayBsaWtlIEV4cHJlc3MuanM8L2xpPlxuICAgICAgICAgIDxsaT5FeHBlcmllbmNlIHdpdGggUmVzdGZ1bCBBUEkgc2VydmljZXM8L2xpPlxuXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGFzPVwiaDRcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbXQ6IDMsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZyZXNoZXJcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgRnJlc2hlcnMgd2l0aCBiYXNpYyBjb2Rpbmcga25vd2xlZGdlL2NvdXJzZS9jZXJ0aWZpY2F0aW9uIGluXG4gICAgICAgICAgICBSZWFjdC9Ob2RlLmpzL0FuZ3VsYXIgYXJlIHByZWZlcnJlZFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPk11c3QgaGF2ZSBiYXNpYyByZWFsLXRpbWUga25vd2xlZGdlIGluIFJlYWN0L05vZGUuanMvQW5ndWxhcjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgR29vZCBrbm93bGVkZ2UgaW4gSmF2YXNjcmlwdCBhbmQgYWJsZSB0byBoYW5kbGUgQXJyYXkgJiBPYmplY3RzXG4gICAgICAgICAgICBidWlsdC1pbiBtZXRob2RzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHb29kIHVuZGVyc3RhbmRpbmcgb2Ygc3RydWN0dXJlZCBhbmQgdW5zdHJ1Y3R1cmVkIGRhdGFiYXNlcyAoTXlTUUxcbiAgICAgICAgICAgIGFuZCBNb25nb0RCKVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgUHJvZmljaWVudCB1bmRlcnN0YW5kaW5nIG9mIGNvZGUgdmVyc2lvbmluZyB0b29scywgc3VjaCBhcyBHaXRcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5Dcml0aWNhbCB0aGlua2luZyBhbmQgcHJvYmxlbS1zb2x2aW5nIHNraWxsczwvbGk+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG4gIHtcbiAgICBpc0V4cGFuZGVkOiBmYWxzZSxcbiAgICB0aXRsZTogJ0NvbnRlbnQgV3JpdGVyJyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBhcz1cInVsXCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcHk6IDIsXG4gICAgICAgICAgICBwbDogMyxcbiAgICAgICAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBbMS41OCwgMS41OCwgMS41OCwgMi4yXSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBbJ25vbmUnLCAnbm9uZScsICdub25lJywgJ25vbmUnLCA3OTBdLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dCBhcz1cImg0XCI+RXhwZXJpZW5jZWQ8L1RleHQ+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgTWluaW11bSBvZiA2IG1vbnRocyBvZiByZWFsLXRpbWUgZXhwZXJpZW5jZSBpbiBSZWFjdC9Ob2RlLmpzL0FuZ3VsYXJcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEdvb2QgdW5kZXJzdGFuZGluZyBvZiBzdHJ1Y3R1cmVkIGFuZCB1bnN0cnVjdHVyZWQgZGF0YWJhc2VzIChNeVNRTFxuICAgICAgICAgICAgYW5kIE1vbmdvREIpXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBFeHBlcmllbmNlIGluIGltcGxlbWVudGluZyB3ZWxsLWtub3duIFJlYWN0IHdvcmtmbG93cyBzdWNoIGFzIFJlZHV4XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBQcm9maWNpZW50IHVuZGVyc3RhbmRpbmcgb2YgY29kZSB2ZXJzaW9uaW5nIHRvb2xzLCBzdWNoIGFzIEdpdFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPkV4cGVyaWVuY2Ugd2l0aCBKYXZhc2NyaXB0IGJhY2tlbmQgZnJhbWV3b3JrIGxpa2UgRXhwcmVzcy5qczwvbGk+XG4gICAgICAgICAgPGxpPkV4cGVyaWVuY2Ugd2l0aCBSZXN0ZnVsIEFQSSBzZXJ2aWNlczwvbGk+XG5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgYXM9XCJoNFwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtdDogMyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRnJlc2hlclxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBGcmVzaGVycyB3aXRoIGJhc2ljIGNvZGluZyBrbm93bGVkZ2UvY291cnNlL2NlcnRpZmljYXRpb24gaW5cbiAgICAgICAgICAgIFJlYWN0L05vZGUuanMvQW5ndWxhciBhcmUgcHJlZmVycmVkXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+TXVzdCBoYXZlIGJhc2ljIHJlYWwtdGltZSBrbm93bGVkZ2UgaW4gUmVhY3QvTm9kZS5qcy9Bbmd1bGFyPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBHb29kIGtub3dsZWRnZSBpbiBKYXZhc2NyaXB0IGFuZCBhYmxlIHRvIGhhbmRsZSBBcnJheSAmIE9iamVjdHNcbiAgICAgICAgICAgIGJ1aWx0LWluIG1ldGhvZHNcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEdvb2QgdW5kZXJzdGFuZGluZyBvZiBzdHJ1Y3R1cmVkIGFuZCB1bnN0cnVjdHVyZWQgZGF0YWJhc2VzIChNeVNRTFxuICAgICAgICAgICAgYW5kIE1vbmdvREIpXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBQcm9maWNpZW50IHVuZGVyc3RhbmRpbmcgb2YgY29kZSB2ZXJzaW9uaW5nIHRvb2xzLCBzdWNoIGFzIEdpdFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPkNyaXRpY2FsIHRoaW5raW5nIGFuZCBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzPC9saT5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGZhcSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwidGVzdGltb25pYWxcIiBzeD17c3R5bGVzLnBvc2l0aW9ufT5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5wb3NfX2hlYWRlcn0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgIHN4PXtzdHlsZXMucG9zX19oZWFkaW5nfVxuICAgICAgICAgIHRpdGxlPVwiV2hhdCBjbGllbnQgc2F5IGFib3V0IHVzXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkN1c3RvbWVyIHRlc3RpbW9uaWFsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5mbGV4fT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZmFxV3JhcHBlcn0+XG4gICAgICAgICAgICA8QWNjb3JkaW9uIGl0ZW1zPXthY2NvcmRpb25EYXRhfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmFxO1xuY29uc3Qgc3R5bGVzID0ge1xuICBwb3NpdGlvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGNEY0RjYnLFxuICAgIHB0OiBbJzgwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIHBiOiBbJzYwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsIG51bGwsICcxMjBweCddLFxuICB9LFxuXG4gIHBvc19faGVhZGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gIHBvc19faGVhZGluZzoge1xuICAgIG1iOiBbMzBdLFxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNTAwLCA1NjAsIDczMF0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRTaXplOiBbOCwgbnVsbCwgbnVsbCwgOCwgOSwgMTAsIDExXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjU3XSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgM10sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NywgbnVsbCwgbnVsbCwgMi4zM10sXG4gICAgfSxcbiAgfSxcbiAgZmxleDoge1xuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgcGI6IFsnNzBweCcsIG51bGwsIG51bGwsIG51bGwsICc5MHB4JywgbnVsbCwgJzEzMHB4J10sXG4gIH0sXG4gIGZhcVdyYXBwZXI6IHtcbiAgICBteDogJ2F1dG8nLFxuICB9LFxufTtcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvU2VjdGlvbkhlYWRpbmcnO1xuaW1wb3J0IEhlcm9JbWFnZSBmcm9tICdhc3NldHMvaGVyby5wbmcnO1xuXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW1wb3J0IGJhbm5lckljb24xIGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTEuc3ZnJztcbmltcG9ydCBiYW5uZXJJY29uMiBmcm9tICdhc3NldHMvYmFubmVyLWljb24tMS0yLnN2Zyc7XG5pbXBvcnQgYmFubmVySWNvbjMgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtMy5zdmcnO1xuaW1wb3J0IGJhbm5lckljb240IGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTQuc3ZnJztcbmltcG9ydCBiYW5uZXJJY29uNSBmcm9tICdhc3NldHMvYmFubmVyLWljb24tMS01LnN2Zyc7XG5pbXBvcnQgYmFubmVySWNvbjYgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtNi5zdmcnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgU2xpZGUgZnJvbSAncmVhY3QtcmV2ZWFsL1NsaWRlJztcblxuY29uc3QgSGVybyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwiaG9tZVwiIHN4PXtzdHlsZXMuaGVyb19fc2VjdGlvbn0+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uMX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uMX1cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uMn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uMn1cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uM31cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uM31cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uNH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uNH1cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uNX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uNX1cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uNn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uNn1cbiAgICAgICAgLz5cblxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGVyb19fY29udGVudHN9PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgICAgc3g9e3N0eWxlcy5oZXJvX19oZWFkaW5nfVxuICAgICAgICAgICAgdGl0bGU9XCJ0ZWNodmVzdG9ycyAobm91bilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgL3RlY2jLiHbJm3N0yZlycy9cIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBIHRlYW0gb2YgaGlnaGx5IGVudGh1c2lhc3RpYyBhbmQgcGFzc2lvbmF0ZSB0ZWNoaWVzIHdobyBhcmUgd29ya2luZyB0b2dldGhlciB0byBpbm5vdmF0ZSBhbmQgZGV2ZWxvcCB0ZWNobm9sb2dpZXMgdG8gaW52ZXN0IGluIGNvbXBhbmllcyB3aGljaCBoYXMgdGhlIHBvdGVudGlhbCB0byBhY2hpZXZlIG5ldyBoZWlnaHRzLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm94IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZXJvX19idXR0b259PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPVwic2VydmljZXNcIlxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXG4gICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxuICAgICAgICAgICAgICAgICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgICAgICAgICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogWycxMHB4IDE1cHgnLCBudWxsLCAnMTVweCAzMHB4J10sXG4gICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAncmdiYSgyMzMsIDc2LCA4NCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgR2V0IHN0YXJ0ZWRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8U2xpZGUgYm90dG9tPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtIZXJvSW1hZ2V9IGFsdD1cImhlcm9cIiAvPlxuICAgICAgICAgICAgPC9TbGlkZT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG5cbmNvbnN0IGJhbm5lckFuaW0xID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcbiAgICB9XG5cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xuICAgIH1cblxuICAgIDYwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMCwgMCwgMGRlZyk7XG4gICAgfVxuXG4gICAgODAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcbiAgICB9XG5gO1xuXG5jb25zdCBiYW5uZXJBbmltMiA9IGtleWZyYW1lc2BcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKDApO1xuICAgIH1cblxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KSB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSgxNWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpIHRyYW5zbGF0ZVgoNTBweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAgIH1cblxuICAgIDgwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KSB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSgxNWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICB9XG5gO1xuXG5jb25zdCBiYW5uZXJBbmltMyA9IGtleWZyYW1lc2BcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZykgdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWigyMHB4KSB0cmFuc2xhdGVZKDIwcHgpIHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZXJvX19zZWN0aW9uOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcHQ6IFsnMTEwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcbiAgICB6SW5kZXg6IDAsXG4gICAgJzpiZWZvcmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJnYmEoJyNGRkY1RUQnLCAwLjUpLFxuICAgICAgY29udGVudDogWydub25lJywgbnVsbCwgbnVsbCwgYCcnYF0sXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGhlaWdodDogNzIsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgIH0sXG4gIH0sXG4gIGhlcm9fX2NvbnRlbnRzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICB9LFxuICBoZXJvX19oZWFkaW5nOiB7XG4gICAgbWI6IFszMF0sXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1MDAsIDU2MCwgNzMwXSxcbiAgICBoMjoge1xuICAgICAgZm9udFNpemU6IFs4LCBudWxsLCBudWxsLCA4LCA5LCAxMCwgMTFdLFxuICAgICAgbGluZUhlaWdodDogWzEuNTddLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAzXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg3LCBudWxsLCBudWxsLCAyLjMzXSxcbiAgICB9LFxuICB9LFxuICBoZXJvOiB7XG4gICAgZGlzcGxheTogWydibG9jaycsIG51bGwsIG51bGwsICdmbGV4J10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgaW1nOiB7XG4gICAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXG4gICAgICBtYXhXaWR0aDogWyc5MCUnXSxcbiAgICAgIG06IFsnMCBhdXRvJ10sXG4gICAgfSxcbiAgfSxcbiAgaGVyb19fYnV0dG9uOiB7XG4gICAgekluZGV4OiAxLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInXSxcbiAgICBwb3NpdGlvbjogWydzdGF0aWMnLCBudWxsLCBudWxsLCAnYWJzb2x1dGUnXSxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0b3A6IDAsXG4gICAgdHJhbnNmb3JtOiBbJ3Vuc2V0JywgbnVsbCwgbnVsbCwgJ3RyYW5zbGF0ZVgoLTUwJSknXSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJy5iYW5uZXJJY29uJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnYmxvY2snXSxcbiAgICB9LFxuICB9LFxuICBiYW5uZXJJY29uMToge1xuICAgIHRvcDogJzEwJScsXG4gICAgbGVmdDogJzEwJScsXG4gICAgYW5pbWF0aW9uOiBgJHtiYW5uZXJBbmltMn0gOHMgbGluZWFyIGluZmluaXRlYCxcbiAgfSxcbiAgYmFubmVySWNvbjI6IHtcbiAgICB0b3A6ICcxMCUnLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0yfSA4cyBsaW5lYXIgaW5maW5pdGVgLFxuICB9LFxuICBiYW5uZXJJY29uMzoge1xuICAgIGJvdHRvbTogJzQwcHgnLFxuICAgIHJpZ2h0OiAnLTEyMHB4JyxcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0xfSA1cyBlYXNlLW91dCBpbmZpbml0ZWAsXG4gIH0sXG4gIGJhbm5lckljb240OiB7XG4gICAgYm90dG9tOiAnMTMwcHgnLFxuICAgIGxlZnQ6ICctMTIwcHgnLFxuICAgIGFuaW1hdGlvbjogYCR7YmFubmVyQW5pbTF9IDVzIGVhc2Utb3V0IGluZmluaXRlYCxcbiAgfSxcbiAgYmFubmVySWNvbjU6IHtcbiAgICBib3R0b206ICc1MCUnLFxuICAgIGxlZnQ6ICcxNSUnLFxuICB9LFxuICBiYW5uZXJJY29uNjoge1xuICAgIGJvdHRvbTogJy02NXB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0zfSA5cyBsaW5lYXIgaW5maW5pdGVgLFxuICB9LFxuICBiYW5uZXJJY29uNzoge1xuICAgIGJvdHRvbTogJzMwJScsXG4gICAgcmlnaHQ6ICcwJScsXG4gIH0sXG59O1xuIiwiaW1wb3J0IEhlcm8gZnJvbSAnLi9oZXJvJztcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnLi90ZXN0aW1vbmlhbHMnO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi90ZWFtJztcbmltcG9ydCBXb3JrRmxvdyBmcm9tICcuL3dvcmtmbG93JztcbmltcG9ydCBXaHlVcyBmcm9tICcuL3doeXVzJztcbmV4cG9ydCB7IEhlcm8sIFNlcnZpY2VzLCBUZXN0aW1vbmlhbHMsIFRlYW0sIFdvcmtGbG93LCBXaHlVcyB9O1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uSGVhZGluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL1NlcnZpY2UnO1xuaW1wb3J0IGljb24xIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlL3NlcnZpY2UxLnBuZyc7XG5pbXBvcnQgaWNvbjIgZnJvbSAnYXNzZXRzL3NlcnZpY2Uvc2VydmljZTIucG5nJztcbmltcG9ydCBpY29uMyBmcm9tICdhc3NldHMvc2VydmljZS9zZXJ2aWNlMy5wbmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaWNvbjogaWNvbjEsXG4gICAgdGl0bGU6ICdNYXJrZXRpbmcgJiBhZHZlcnRpc2luZycsXG4gICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSBGdWdhIGludmVudG9yZSBxdWFtIG9kaW8gbnVtcXVhbSB2ZW5pYW0/YCxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGljb246IGljb24yLFxuICAgIHRpdGxlOiAnV2ViIGRldmVsb3BtZW50JyxcbiAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIEZ1Z2EgaW52ZW50b3JlIHF1YW0gb2RpbyBudW1xdWFtIHZlbmlhbT9gLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaWNvbjogaWNvbjMsXG4gICAgdGl0bGU6ICdNb2JpbGUgRGV2ZWxvcG1lbnQnLFxuICAgIGRlc2NyaXB0aW9uOiBgTG9yZW0gaXBzdW0gRnVnYSBpbnZlbnRvcmUgcXVhbSBvZGlvIG51bXF1YW0gdmVuaWFtP2AsXG4gIH0sXG5dO1xuXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwic2VydmljZXNcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICAgIHRpdGxlPVwiT3VyIFNlcnZpY2VcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQmxhbmRpdGlpcyBzZXF1aSBzaW1pbGlxdWUgdm9sdXB0YXR1bSBpbnZlbnRvcmUsIGF0cXVlIHByYWVzZW50aXVtP1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50V3JhcHBlcn0+XG4gICAgICAgICAge2RhdGE/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPFNlcnZpY2Uga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2VjdGlvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogcmdiYSgnI0ZGRjVFRCcsIDAuNSksXG4gICAgcHQ6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgcGI6IFsnNjBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEyMHB4J10sXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDQ1NSwgNjYwXSxcbiAgICBtYjogWzMwXSxcbiAgfSxcbiAgY29udGVudFdyYXBwZXI6IHtcbiAgICBnYXA6IDMwLFxuICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICBqdXN0aWZ5Q29udGVudDogWydjZW50ZXInLCBudWxsLCBudWxsLCAndW5zZXQnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsIDI4NXB4KScsXG4gICAgICAncmVwZWF0KDEsIDMyNXB4KScsXG4gICAgICAncmVwZWF0KDEsIDI4NXB4KScsXG4gICAgICAncmVwZWF0KDMsIDFmciknLFxuICAgIF0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvU2VjdGlvbkhlYWRpbmcnO1xuXG5pbXBvcnQgYXZhdGFyMSBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXIxLnBuZyc7XG5pbXBvcnQgYXZhdGFyMiBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXIyLnBuZyc7XG5pbXBvcnQgYXZhdGFyMyBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXIzLnBuZyc7XG5pbXBvcnQgYXZhdGFyNCBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXI0LnBuZyc7XG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICdhc3NldHMvdGVhbS9hcnJvdy1yaWdodC5wbmcnO1xuaW1wb3J0IFRlYW1NZW1iZXIgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9UZWFtTWVtYmVyJztcbmltcG9ydCBTbGlkZSBmcm9tICdyZWFjdC1yZXZlYWwvU2xpZGUnO1xuXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0pO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgYXZhdGFyOiBhdmF0YXIxLFxuICAgIG5hbWU6ICdHb3VyYXYgTWFodG8nLFxuICAgIGRlc2lnbmF0aW9uOiAnQ28tZm91bmRlcicsXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgICAgICBsaW5rOiAnaHR0cDovL3R3aXR0ZXIuY29tJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdnaXRodWInLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2xpbmtlZEluJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9saW5rZWRpbi5jb20vaW4vJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGF2YXRhcjogYXZhdGFyMyxcbiAgICBuYW1lOiAnUiBBZGFyc2gnLFxuICAgIGRlc2lnbmF0aW9uOiAnQ28tRm91bmRlcicsXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgICAgICBsaW5rOiAnaHR0cDovL3R3aXR0ZXIuY29tJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdsaW5rZWRJbicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vbGlua2VkSW4uY29tL2luJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGF2YXRhcjogYXZhdGFyMSxcbiAgICBuYW1lOiAnTXIuIFJhaHVsJyxcbiAgICBkZXNpZ25hdGlvbjogJ0NvLUZvdW5kZXInLFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly90d2l0dGVyLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZ2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGF2YXRhcjogYXZhdGFyMyxcbiAgICBuYW1lOiAnVmF1YmhhdiBTaW5oYScsXG4gICAgZGVzaWduYXRpb246ICdXZWIgRGV2ZWxvcGVyJyxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vdHdpdHRlci5jb20nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZHJpYmJibGUnLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2xpbmtlZEluLmNvbS9pbicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBhdmF0YXI6IGF2YXRhcjEsXG4gICAgbmFtZTogJ1Zpa3JhbSBSYW5hJyxcbiAgICBkZXNpZ25hdGlvbjogJ0Z1bGwgU3RhY2sgRGV2ZWxvcGVyJyxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vdHdpdHRlci5jb20nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZHJpYmJibGUnLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2xpbmtlZGluLmNvbS9pbicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBhdmF0YXI6IGF2YXRhcjIsXG4gICAgbmFtZTogJ1N1ZHJlZXNoYSBEYXMnLFxuICAgIGRlc2lnbmF0aW9uOiAnaW50ZXJuJyxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vdHdpdHRlci5jb20nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbS9zdWRyZWVzaGEnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2RyaWJiYmxlJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9saW5rZWRJbi5jb20nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDcsXG4gICAgYXZhdGFyOiBhdmF0YXIzLFxuICAgIG5hbWU6ICdNci4gUHJhdGFwJyxcbiAgICBkZXNpZ25hdGlvbjogJ2ludGVybicsXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgICAgICBsaW5rOiAnaHR0cDovL3R3aXR0ZXIuY29tJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdsaW5rZWRJbicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vbGlua2VkSW4uY29tL2luJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdnaXRodWInLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDgsXG4gICAgYXZhdGFyOiBhdmF0YXIxLFxuICAgIG5hbWU6ICdTaGFoYmF6IEFsYW0nLFxuICAgIGRlc2lnbmF0aW9uOiAnU29mdHdhcmUgRGV2ZWxvZXByJyxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vdHdpdHRlci5jb20nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbGlua2VkSW4nLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2xpbmtlZEluLmNvbS9pbicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5jb25zdCBUZWFtID0gKCkgPT4ge1xuICBjb25zdCBzd2lwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY29udGFpbmVyT2Zmc2V0LCBzZXRDb250YWluZXJPZmZzZXRdID0gdXNlU3RhdGUoe1xuICAgIGxlZnQ6IG51bGwsXG4gICAgdG9wOiBudWxsLFxuICB9KTtcblxuICBjb25zdCBpc0VuZCA9IHN3aXBlclJlZj8uY3VycmVudD8uc3dpcGVyPy5pc0VuZDtcblxuICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgIHN3aXBlclJlZj8uY3VycmVudD8uc3dpcGVyPy5zbGlkZVByZXYoKTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoc3dpcGVyUmVmPy5jdXJyZW50Py5zd2lwZXI/LmFjdGl2ZUluZGV4KTtcbiAgICB9LCAxMDApO1xuXG4gICAgY2xlYXJJbnRlcnZhbCgpO1xuICB9O1xuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHN3aXBlclJlZj8uY3VycmVudD8uc3dpcGVyPy5zbGlkZU5leHQoKTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoc3dpcGVyUmVmPy5jdXJyZW50Py5zd2lwZXI/LmFjdGl2ZUluZGV4KTtcbiAgICB9LCAxMDApO1xuXG4gICAgY2xlYXJJbnRlcnZhbCgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29udGFpbmVyT2Zmc2V0KHtcbiAgICAgIGxlZnQ6IGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldExlZnQsXG4gICAgICB0b3A6IGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldFRvcCxcbiAgICB9KTtcbiAgfSwgW2NvbnRhaW5lclJlZl0pO1xuXG4gIGNvbnN0IGJyZWFrcG9pbnRzID0ge1xuICAgIDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSxcbiAgICAxNjAxOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInRlYW1cIiBzeD17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgPENvbnRhaW5lciByZWY9e2NvbnRhaW5lclJlZn0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgICB0aXRsZT1cIk1lZXQgb3VyIHN1cGVyaGVyb3NcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWxvbmUgd2UgY2FuIGRvIHNvIGxpdHRsZS4gVG9nZXRoZXIgd2UgY2FuIGRvIHNvIG11Y2guXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1sOiBjdXJyZW50SW5kZXggPT09IDAgPyBjb250YWluZXJPZmZzZXQ/LmxlZnQgOiAwLFxuICAgICAgICAgIC4uLnN0eWxlcy50ZWFtV3JhcHBlcixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2N1cnJlbnRJbmRleCAhPT0gMCAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci1hcnJvdyBzd2lwZXItYXJyb3ctbGVmdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17YXJyb3dSaWdodH0gYWx0PVwiYXJyb3cgbGVmdFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHshaXNFbmQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci1hcnJvdyBzd2lwZXItYXJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXthcnJvd1JpZ2h0fSBhbHQ9XCJhcnJvdyByaWdodFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG5cbiAgICAgICAgPFNsaWRlIHJpZ2h0IGNhc2NhZGU+XG4gICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgcmVmPXtzd2lwZXJSZWZ9XG4gICAgICAgICAgICBzcGFjZUJldHdlZW49ezMwfVxuICAgICAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5PXt0cnVlfVxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17NX1cbiAgICAgICAgICAgIGJyZWFrcG9pbnRzPXticmVha3BvaW50c31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxUZWFtTWVtYmVyIG1lbWJlcj17aXRlbX0gLz5cbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICA8L1NsaWRlPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWFtO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlY3Rpb246IHtcbiAgICBwdDogWycxMTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxMjBweCddLFxuICAgIHBiOiBbJzExMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzEyMHB4J10sXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBtYjogWzMwXSxcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDUwMCwgNTYwLCA3MzBdLFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgM10sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NywgbnVsbCwgbnVsbCwgMi4zM10sXG4gICAgfSxcbiAgfSxcbiAgdGVhbVdyYXBwZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwbDogWzZdLFxuICAgIHByOiBbNiwgbnVsbCwgbnVsbCwgMF0sXG4gICAgdHJhbnNpdGlvbjogJzAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICcuc3dpcGVyLWFycm93Jzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogWzMwLCBudWxsLCBudWxsLCBudWxsLCA0MCwgNjBdLFxuICAgICAgaGVpZ2h0OiBbMzAsIG51bGwsIG51bGwsIG51bGwsIDQwLCA2MF0sXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGJveFNoYWRvdzogJzBweCA3cHggMTRweCByZ2JhKDI1LCA2MCwgMTAxLCAwLjA2KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB6SW5kZXg6IDIsXG4gICAgICB0b3A6ICdjYWxjKDUwJSAtIDQwcHgpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgb3V0bGluZTogMCxcbiAgICAgIGltZzoge1xuICAgICAgICBtYXhXaWR0aDogWzgsIDEwLCBudWxsLCBudWxsLCAnMTAwJSddLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuc3dpcGVyLWFycm93LWxlZnQnOiB7XG4gICAgICBsZWZ0OiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgMjAsIDUwXSxcbiAgICAgIGltZzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICctNHB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLnN3aXBlci1hcnJvdy1yaWdodCc6IHtcbiAgICAgIHJpZ2h0OiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgMjAsIDUwXSxcbiAgICAgIGltZzoge1xuICAgICAgICBtYXJnaW5SaWdodDogJy00cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1NlY3Rpb25IZWFkaW5nJztcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTEgZnJvbSAnYXNzZXRzL2dhdXJhdi5wbmcnO1xuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlMiBmcm9tICdhc3NldHMvZ2F1cmF2LnBuZyc7XG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2UzIGZyb20gJ2Fzc2V0cy9nYXVyYXYucG5nJztcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTQgZnJvbSAnYXNzZXRzL2dhdXJhdi5wbmcnO1xuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlNSBmcm9tICdhc3NldHMvZ2F1cmF2LnBuZyc7XG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2U2IGZyb20gJ2Fzc2V0cy9nYXVyYXYucG5nJztcbmltcG9ydCBUZXN0aW1vbmlhbHNDYXJkIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvVGVzdGltb25pYWxDYXJkJztcblxuU3dpcGVyQ29yZS51c2UoW0F1dG9wbGF5XSk7XG5cbmNvbnN0IFRFU1RJTU9OSUFMU19EQVRBID0gW1xuICBbXG4gICAge1xuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMSxcbiAgICAgIHRleHQ6ICdJIHdvdWxkIGxpa2UgdG8gdGFrZSB0aGlzIG9wcGVydHVuaXR5IHRvIHRoYW5rIFNBIFBsYWNlcyBmb3IgdGhlIGdyZWF0IHNlcnZpY2UgcmVuZGVyZWQgdG8gdXMgYW5kIGluIHBhcnRpY3VsYXIgRXN0ZWxsZS4gWW91IGdvdCBtZSB0aGUgYmVzdCBwbGFjZSBldmVyIGluIGp1c3QgYSBmZXcgbW9tZW50cyBhZnRlciBJIHNwb2tlIHRvIHlvdS4nLFxuICAgICAgdXNlcm5hbWU6ICdARGFyc2hhbicsXG4gICAgICBuYW1lOiAnTXIgRGFyc2hhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2UyLFxuICAgICAgdGV4dDogJ01hbnkgdGhhbmtzIGZvciB5b3Uga2luZCBhbmQgZWZmaWNpZW50IHNlcnZpY2UuIEkgaGF2ZSBhbHJlYWR5IGFuZCB3aWxsIGRlZmluaXRlbHkgY29udGludWUgdG8gcmVjb21tZW5kIHlvdXIgc2VydmljZXMgdG8gb3RoZXJzIGluIHRoZSBmdXR1cmUuJyxcbiAgICAgIHVzZXJuYW1lOiAnQFZpa3JhbScsXG4gICAgICBuYW1lOiAnTXIuIFZpa3JhbScsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTMsXG4gICAgICB0ZXh0OiAnSSB3b3VsZCBqdXN0IGxpa2UgdG8gY29tcGxpbWVudCBFc3RlbGxlIFBlc3RhbmEuIFNoZSBoYXMgYmVlbiBtb3N0IHByb2Zlc3Npb25hbCBhbmQgZ29uZSB0byBncmVhdCBsZW5ndGhzIHRvIGFzc2lzdCBtZS4gSGVyIHBhdGllbmNlIHdpdGggbWUgYXMgSSBjb250aW51b3VzbHkgY2hhbmdlZCBteSBwbGFucyBpcyB0byBiZSBjb21tZW5kZWQuIEhlciBzZXJ2aWNlIHJlLWFmZmlybXMgd2h5IEkgYWx3YXlzIGNob29zZSB0byBib29rIHRocm91Z2ggYW4gYWdlbmN5IGluc3RlYWQgb2YgZGlyZWN0bHkuIFRoYW5rIHlvdScsXG4gICAgICB1c2VybmFtZTogJ0BSYWh1bCcsXG4gICAgICBuYW1lOiAnTXIuIFJhaHVsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTQsXG4gICAgICB0ZXh0OiAnSSBoYXZlIHNlbGRvbSBleHBlcmllbmNlZCBzdWNoIGFuIGVmZmljaWVudCBoZWxwIGFuZCBzdXBwb3J0IGxpa2UgZnJvbSB5b3UhIFRoYW5rIHlvdSBzbyBtdWNoLiBXZSB3aWxsIGRvIGFsbCB0aGUgYm9va2luZ3MgZHVyaW5nIHRoZSBuZXh0IGZldyBkYXlzIGFuZCBJIHdpbGwgcmV2ZXJ0IHRvIHlvdSB3aXRoIHRoZSBlbmQgcmVzdWx0JyxcbiAgICAgIHVzZXJuYW1lOiAnQFZhaWJoYXYnLFxuICAgICAgbmFtZTogJ01yLiBCYWliaGF2JyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNSxcbiAgICAgIHRleHQ6ICdUaGFuayB5b3UgZm9yIGFsbCB5b3VyIGhlbHAuIFlvdXIgc2VydmljZSB3YXMgZXhjZWxsZW50IGFuZCB2ZXJ5IEZBU1QuJyxcbiAgICAgIHVzZXJuYW1lOiAnQHByYXRhcCcsXG4gICAgICBuYW1lOiAnTXIuIFByYXRhcCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2U2LFxuICAgICAgdGV4dDogJ0ZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQSBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5IHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvIHJlY29tbWVuZCcsXG4gICAgICB1c2VybmFtZTogJ0BzdWRyZWVzaGEnLFxuICAgICAgbmFtZTogJ01pc3MgU3VkaHJlZXNhJyxcbiAgICB9LFxuICBdLFxuXTtcblxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xuICBjb25zdCB0ZXN0aW1vbmlhbENhcm91c2VsID0ge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIHNwZWVkOiAxMDAwLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIHdhaXRGb3JUcmFuc2l0aW9uOiBmYWxzZSxcbiAgICAgIGRlbGF5OiA0MDAwLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDY0MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIDc2ODoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIDEwMjQ6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIH0sXG4gICAgICAxMjAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHN9PlxuICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsX19oZWFkZXJ9PlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgICBzeD17c3R5bGVzLnRlc3RpbW9uaWFsX19oZWFkaW5nfVxuICAgICAgICAgIHRpdGxlPVwiV2hhdCBjbGllbnQgc2F5IGFib3V0IHVzXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkN1c3RvbWVyIHRlc3RpbW9uaWFsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8U3dpcGVyIHsuLi50ZXN0aW1vbmlhbENhcm91c2VsfT5cbiAgICAgICAge1RFU1RJTU9OSUFMU19EQVRBLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7aXRlbS5tYXAoKHsgaW1hZ2UsIHRleHQsIG5hbWUsIHVzZXJuYW1lIH0sIF9pbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8VGVzdGltb25pYWxzQ2FyZFxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAga2V5PXtfaW5kZXh9XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgKSl9XG4gICAgICA8L1N3aXBlcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcblxuY29uc3Qgc3R5bGVzID0ge1xuICB0ZXN0aW1vbmlhbHM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjRGNEY2JyxcbiAgICBwdDogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICBwYjogWyc2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTIwcHgnXSxcbiAgfSxcblxuICB0ZXN0aW1vbmlhbF9faGVhZGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gIHRlc3RpbW9uaWFsX19oZWFkaW5nOiB7XG4gICAgbWI6IFszMF0sXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1MDAsIDU2MCwgNzMwXSxcbiAgICBoMjoge1xuICAgICAgZm9udFNpemU6IFs4LCBudWxsLCBudWxsLCA4LCA5LCAxMCwgMTFdLFxuICAgICAgbGluZUhlaWdodDogWzEuNTddLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAzXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg3LCBudWxsLCBudWxsLCAyLjMzXSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFRhYnMsIHsgVGFiUGFuZSB9IGZyb20gJ3JjLXRhYnMnO1xuaW1wb3J0IHsgUmlDaGVja2JveENpcmNsZUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IHRhYkltYWdlMSBmcm9tICdhc3NldHMvd2h5dXMvc29jaWFsLnBuZyc7XG5pbXBvcnQgdGFiSW1hZ2UyIGZyb20gJ2Fzc2V0cy93aHl1cy9lcnAucG5nJztcbmltcG9ydCBTbGlkZSBmcm9tICdyZWFjdC1yZXZlYWwvU2xpZGUnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGFiVGl0bGU6ICdXaGF0IHdlIGludmVzdCBpbj8nLFxuICAgIHRpdGxlOiBgV2Ugd2lsbCB0dXJuIHlvdXIgaWRlYSBpbiB0aGUgc3VjY2Vzc2Z1bCBidXNpbmVzcyBtb2RlbCBmcmFtZXdvcmtgLFxuICAgIGRlc2NyaXB0aW9uOiBgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNYWduYW0gYWNjdXNhbXVzIGFzcGVybmF0dXIgZXJyb3Igdm9sdXB0YXRlbSBjdXBpZGl0YXRlLmAsXG4gICAgaW1hZ2U6IHRhYkltYWdlMSxcbiAgICBsaXN0OiBbXG4gICAgICAnRVJQIFN5c3RlbScsXG4gICAgICAnQXBwIERldmVsb3BtZW50JyxcbiAgICAgICdXZWIgRGV2ZWxvcG1lbnQnLFxuICAgICAgJ1NvY2lhbCBNYXJrZXRpbmcnLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0YWJUaXRsZTogJ1doeSBpbnZlc3QgdGhyb3VnaCB1cz8nLFxuICAgIHRpdGxlOiBgV2Ugd2lsbCB0dXJuIHlvdXIgaWRlYSBpbiB0aGUgc3VjY2Vzc2Z1bCBidXNpbmVzcyBtb2RlbCBmcmFtZXdvcmtgLFxuICAgIGRlc2NyaXB0aW9uOiBgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNYWduYW0gYWNjdXNhbXVzIGFzcGVybmF0dXIgZXJyb3Igdm9sdXB0YXRlbSBjdXBpZGl0YXRlLmAsXG4gICAgbW9yZUxpbms6ICcjZXhwbG9yZS1tb3JlJyxcbiAgICBpbWFnZTogdGFiSW1hZ2UyLFxuICAgIGxpc3Q6IFsnR3Jvd3RoJywgJ1RydXN0JywgJ0NvbGxhYnJhdGlvbicsICdJbm5vdmF0aW9uJ10sXG4gIH0sXG5dO1xuXG5jb25zdCBXaHlVcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwid2h5LXVzXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxUYWJzIHN4PXtzdHlsZXMudGFic30gYW5pbWF0ZWQ9e3sgdGFiUGFuZTogdHJ1ZSB9fT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VGFiUGFuZVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIHRhYj17PEhlYWRpbmcgYXM9XCJoNFwiPntpdGVtLnRhYlRpdGxlfTwvSGVhZGluZz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTbGlkZSBib3R0b20gY2FzY2FkZT5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmc+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5saXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaUNoZWNrYm94Q2lyY2xlRmlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMzRkRCQjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbGx1c3RyYXRpb259PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWFnZX0gYWx0PVwiaWxsdXN0cmF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9TbGlkZT5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWJzPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaHlVcztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzZWN0aW9uOiB7XG4gICAgcHQ6IFsxMSwgbnVsbCwgbnVsbCwgMTJdLFxuICAgIHBiOiBbOCwgbnVsbCwgbnVsbCwgOSwgbnVsbCwgMTFdLFxuICB9LFxuICB0YWJzOiB7XG4gICAgYm9yZGVyOiAwLFxuICAgICcucmMtdGFicy1uYXYnOiB7XG4gICAgICBtYjogWzgsIG51bGwsIG51bGwsIDksIDEwLCA5LCAxMl0sXG4gICAgfSxcbiAgICAnLnJjLXRhYnMtbmF2LXdyYXAnOiB7XG4gICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtyZ2JhKCcjMDEwNzBEJywgMC4xKX1gLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgJy5yYy10YWJzLW5hdi1saXN0Jzoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG4gICAgICBwYjogWzMsIG51bGwsIG51bGwsIDUsIG51bGwsIDZdLFxuICAgIH0sXG4gICAgJy5yYy10YWJzLXRhYi1idG4nOiB7XG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBpbWc6IHtcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLnJjLXRhYnMtdGFiJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgLy8gbTogWycwIDQ1cHgnXSxcbiAgICAgIGg0OiB7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAxNywgbnVsbCwgbnVsbCwgNF0sXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgICAgICAgd2hpdGVTcGFjZTogWydicmVhay1zcGFjZXMnLCBudWxsLCBudWxsLCBudWxsLCAndW5zZXQnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLnJjLXRhYnMtdGFicGFuZSc6IHtcbiAgICAgIGRpc3BsYXk6IFsnZmxleCcsIG51bGwsIG51bGwsICdncmlkJ10sXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbi1yZXZlcnNlJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtudWxsLCBudWxsLCBudWxsLCAnMC45ZnIgMS4xZnInXSxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBnYXA6IFs1LCBudWxsLCBudWxsLCAxMV0sXG4gICAgICBoMjoge1xuICAgICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgICBmb250U2l6ZTogWzI0LCBudWxsLCBudWxsLCA2LCAyNiwgOCwgNDBdLFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFsxLjQ1LCBudWxsLCBudWxsLCAxLjVdLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiBbbnVsbCwgbnVsbCwgbnVsbCwgJzAuNXB4JywgbnVsbCwgJy0xcHgnXSxcbiAgICAgICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgICB9LFxuICAgICAgcDoge1xuICAgICAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxuICAgICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDIsIDE3XSxcbiAgICAgICAgbGluZUhlaWdodDogWzEuODcsIG51bGwsIG51bGwsIDIsIDIuNDhdLFxuICAgICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgICAgICAgbXQ6IFs0XSxcbiAgICAgIH0sXG4gICAgICAnLmxpc3QtaXRlbSc6IHtcbiAgICAgICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAxLCAyXSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsaW5lSGVpZ2h0OiBbMi44XSxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGlzdDoge1xuICAgIG10OiBbNV0sXG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICd1bnNldCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDIsIDE2NHB4KScsIG51bGwsIG51bGwsICdyZXBlYXQoMiwgMTgwcHgpJ10sXG4gIH0sXG5cbiAgaWxsdXN0cmF0aW9uOiB7XG4gICAgZGlzcGxheTogWydmbGV4J10sXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHRleHRBbGlnbjogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdjZW50ZXInXSxcbiAgICBpbWc6IHtcbiAgICAgIG1heFdpZHRoOiBbJzY1JScsIG51bGwsIG51bGwsICcxMDAlJywgbnVsbCwgJzkwJScsICcxMDAlJ10sXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uSGVhZGluZyc7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xuaW1wb3J0IEFycm93T2RkIGZyb20gJ2Fzc2V0cy9hcnJvd09kZC5zdmcnO1xuaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnN2Zyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ0FwcGx5JyxcbiAgICB0ZXh0OiAnQXBwbHkgZm9yIHRoZSBwb3NpdGlvbiBvZiB5b3VyIGNob2ljZScsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ1NjcmVlbmluZycsXG4gICAgdGV4dDogJ1NjcmVlbmluZyBwcm9jZXNzIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0JyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnUGFja2FnZScsXG4gICAgdGV4dDogJ1BhY2thZ2Ugc2VsZWN0aW9uIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0JyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnVGVhbScsXG4gICAgdGV4dDogJ1RlYW0gc2VsZWN0aW9uIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICBzbG9nYW49XCJXaGF0cyB0aGUgZnVuY3Rpb25cIlxuICAgICAgICAgIHRpdGxlPVwiTGV04oCZcyBzZWUgaG93IGl0IHdvcmtzXCJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PntgMCR7aXRlbS5pZH1gfTwvQm94PlxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBhcnJvd0FuaW0gPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIH1cblxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XG4gICAgfVxuXG4gICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAwLCAwLCAwZGVnKTtcbiAgICB9XG5cbiAgICA4MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgd29ya2Zsb3c6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBtYjogLTEsXG4gICAgcHQ6IDAsXG4gICAgZ3JpZEdhcDogW1xuICAgICAgJzM1cHggMCcsXG4gICAgICBudWxsLFxuICAgICAgJzQ1cHggMzBweCcsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggMjVweCcsXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgICc1MHB4IDY1cHgnLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgxLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDQsMWZyKScsXG4gICAgXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6IFsnYXV0byddLFxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuICAgICAgd2lkdGg6IDIxNSxcbiAgICAgIGhlaWdodDogNjAsXG4gICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxuICAgICAgYW5pbWF0aW9uOiBgJHthcnJvd0FuaW19IDVzIGVhc2Utb3V0IGluZmluaXRlYCxcbiAgICB9LFxuICAgICcmOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlJzoge1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dFdmVufSlgLFxuICAgICAgYW5pbWF0aW9uOiBgJHthcnJvd0FuaW19IDVzIGVhc2Utb3V0IGluZmluaXRlYCxcbiAgICAgIHRvcDogMTcsXG4gICAgfSxcbiAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuICBpY29uQm94OiB7XG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcbiAgICBmb250U2l6ZTogWzYsIG51bGwsIDcsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogJy01cHgnLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIG1iOiBbMiwgM10sXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIG9wYWNpdHk6IDAuNzUsXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsXG4gICAgdGV4dF9zZWNvbmRhcnk6ICcjMDIwNzNFJyxcbiAgICBoZWFkaW5nOiAnIzBGMjEzNycsXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JyxcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXG4gICAgcHJpbWFyeTogJyMzNjJjODgnLFxuICAgIHNlY29uZGFyeTogJyMwZjA3NGInLFxuICAgIG11dGVkOiAnI0U0RTRFNCcsXG5cbiAgICBtb2Rlczoge1xuICAgICAgZGFyazoge1xuICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcbiAgICAgICAgbXV0ZWQ6ICcjMTExJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IFtcbiAgICAnNDgwcHgnLFxuICAgICc2NDBweCcsXG4gICAgJzc2OHB4JyxcbiAgICAnMTAyNHB4JyxcbiAgICAnMTIyMHB4JyxcbiAgICAnMTM2NnB4JyxcbiAgICAnMTYyMHB4JyxcbiAgXSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxuICAgIGhlYWRpbmc6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXG4gIH0sXG4gIGZvbnRTaXplczogWzEyLCAxNSwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyOCwgMzIsIDM2LCA0MiwgNDgsIDUyLCA2NF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9keTogJ25vcm1hbCcsXG4gICAgaGVhZGluZzogNTAwLFxuICAgIGJvbGQ6IDcwMCxcbiAgfSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBib2R5OiAxLjgsXG4gICAgaGVhZGluZzogMS41LFxuICB9LFxuICBsZXR0ZXJTcGFjaW5nczoge1xuICAgIGJvZHk6ICdub3JtYWwnLFxuICAgIGNhcHM6ICcwLjJlbScsXG4gICAgaGVhZGluZzogJy0wLjVweCcsXG4gIH0sXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxuICBsYXlvdXQ6IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIG1heFdpZHRoOiBbXG4gICAgICAgICcxMDAlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJzc4MHB4JyxcbiAgICAgICAgJzEwMjBweCcsXG4gICAgICAgICcxMjAwcHgnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnMTMxMHB4JyxcbiAgICAgIF0sXG4gICAgICBweDogWzQsIDZdLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBweTogMyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRvb2xiYXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9LFxuICAgIG1haW46IHt9LFxuICB9LFxuXG4gIHNlY3Rpb25IZWFkZXI6IHtcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJzU0MHB4J10sXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG10OiBbJy0zcHgnLCBudWxsLCAtMV0sXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc2NXB4JywgbnVsbCwgJzgwcHgnXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yNV0sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFswLCAnMTNweCcsIG51bGwsICcxNHB4J10sXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgbWI6IDIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgfSxcbiAgfSxcbiAgZm9ybXM6IHtcbiAgICBsYWJlbDoge1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCBwcmltYXJ5YCxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRleHRhcmVhOiB7XG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMnB4IHByaW1hcnlgLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBoZWFkaW5nOiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogWzRdLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNTVweCcsXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIH0sXG4gICAgaGVyb1ByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogW1xuICAgICAgICAnMzJweCcsXG4gICAgICAgICczNnB4JyxcbiAgICAgICAgJzQycHgnLFxuICAgICAgICAnNDBweCcsXG4gICAgICAgICc0MnB4JyxcbiAgICAgICAgJzUycHgnLFxuICAgICAgICAnNThweCcsXG4gICAgICAgICc2NnB4JyxcbiAgICAgIF0sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjJdLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcbiAgICB9LFxuICAgIGhlcm9TZWNvbmRhcnk6IHtcbiAgICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgJzE3cHgnLCBudWxsLCBudWxsLCAnMTlweCcsIDRdLFxuICAgICAgbGluZUhlaWdodDogWzEuOSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBtYjogNSxcbiAgICAgIHB4OiBbMCwgbnVsbCwgNSwgNiwgbnVsbCwgOCwgOV0sXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0XSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMjUsXG4gICAgICBtYjogMSxcbiAgICB9LFxuICAgIGxlYWQ6IHtcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgIH0sXG4gICAgbXV0ZWQ6IHtcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNnB4JyxcbiAgICAgIGNvbG9yOiAnbXV0ZWQnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxuICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfSxcbiAgICBib2xkOiB7XG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgfSxcbiAgICBuYXY6IHtcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgICAgIHB4OiAyNSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIH0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBweDogMCxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gIH0sXG4gIGltYWdlczoge1xuICAgIGF2YXRhcjoge1xuICAgICAgd2lkdGg6IDQ4LFxuICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgIG1lbnU6IHtcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxuICAgIH0sXG4gICAgZGVmYXVsdEJ0bjoge1xuICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBsZXR0ZXJTcGFjaW5nczogJy0wLjE1cHgnLFxuICAgICAgcGFkZGluZzogWycxMnB4IDIwcHgnLCBudWxsLCAnMTVweCAzMHB4J10sXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcHJpbWFyeToge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgyMzMsIDc2LCA4NCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdoaXRlQnV0dG9uOiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgYmc6ICd3aGl0ZScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjUpIDBweCAxMnB4IDI0cHggLTEwcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXG4gICAgICBib3JkZXI6ICcycHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIHBhZGRpbmc6IFsnMTBweCAxNXB4JywgbnVsbCwgJzE1cHggMzBweCddLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBiZzogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRleHRCdXR0b246IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIHN2Zzoge1xuICAgICAgICBmb250U2l6ZTogWzQsIDZdLFxuICAgICAgICBtcjogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBzdHlsZXM6IHtcbiAgICByb290OiB7XG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICAgIH0sXG4gICAgaHI6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxuICAgIH0sXG4gICAgdWw6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIH0sXG4gICAgc3JPbmx5OiB7XG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICB9LFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9saXNoZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtZHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLXRhYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3JpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3NpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJldmVhbC9TbGlkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXZlYWwvWm9vbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRoZW1lLXVpXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=