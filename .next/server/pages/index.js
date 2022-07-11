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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAC91BMVEUAAACZlYPCt6e/nYmemomZloW2r57l4928uLCpopGbloOZlIPX08i/t6eWkoCpoo/Yzr+emYna1cusqJfMwKyalYUVIi3l4t7JwbHa18zHwLKSkIGwqpeumYfKtaAaJjDj4969tqUaKC+fm4vl5ODdwqyspJTm5uHCxb22urzMqZRQSUjg3tXZuJ/m5uBZS0iaemnHv7CqopLbu6Xk39uLcmbHv6/k39qAZWDg3dbk4t3d2tDHv7C7taMaKDESIy/NxrjFva3Du6zBuqq+tqWmoJCgm4spLTQUJTLj4Nvi39jPybzLxLa2rp0YJize3NPb1824sZ6wqpjWsZevp5apo5GIaFtXRkRNPz5HPj7l5N/Z1crV0sa/uKdyVU1HOTchLDYdKjMgKTAXJC/IwbHnxa3fuqG5sqHas5s7NzskLDEVJy7X1MnSzcHKw7Ljv6admYiYlIKWd2h4XlVuVExAOTo3NDceJyzJwrXauqCzrJnYq5espZTNpYuAYVp7W1DTzsLpyLDmwqrEoouSkIOujX1/aGF3V01dSkZOREMyMTLk4Nnqzrnqy7TjwqzRtJyzrJyXlYixg2+qfWp1W1RvWlJgTUxjTUhWQT8wNjhQOjfl4t3tz7rOuqjdvaTQqJGhno3Mn4m2lIW+kHueeWujd2eedWSZcGGFY1eAXlFjUkxaS0lqUEhbQj8uLzYmKCrlx7HdwqvYvKXhu6Pet5vKrprRq5SlnozFnoq6mofEmYXBlYCCgnu0jXi6iHathnWsgW9pbWhaWlhpUk9MUExURUJjSUERIyrf39vh3NO1r6HXsp62ppu8n5Oom5ONiH6jg3Ftc3B2eG+DeW6bgGyDcGmVc2SPbWNnWVNdVFFuTUUuLi87MS3y18TU0MS2tavqvKmqqJy9ppejoZednpWpk4WUbl6SZ1o0O0HSzL/HuKXVrI2vl42chHmifmyKd2p1bWh2aGNcX15xY1tFR0fz4dPCx8W9vbSjpqfDrJmzopOub2SSXFXULdoQAAAAOXRSTlMAICD9f+/nIBDl2rqwn59wa2VKSjAwIO/v59/fx7+ooICAgEDv7+/f39/f38/Pv7+vn5+AcHBgMDA2dneBAAAF6UlEQVRIx32UZViTURiGP8Xu7u7uAtkGCGwoTGCwQF2ysQ11sjFwzjGJbWwS0iUgqXQj3WFLt93d7Q/P9wG23r/v85znPde5Xuh3Jo8dM2KEn4PD4JEjx0+G/suAQYONjY0PHfLzKGmqrGwsmTlmwL/d2acAxsZ+jTVYJh6Ppz+suurxD3/YICOEU01heBYOhwGw+DUeHh6D/hY83Nra+qi1td9r53qgIro9GvsajDDzj/iFS45aAe40dbMwOEw9Hs3As/B4Bv1hiQOYeOKv8ngrK0vLS5an3jLA/fb29mg0nY5GM+j09E4HMLTD+J/liZYnABdu1eBxsAk8NIPPpNPpTL7YA34kh4U/5IFDTpgBLlSicTh7PJqPTddoemgUmphGy8CWeMCPOvhH9yFmZhZ2dnYXwlg4exYTyyOTUuVEobCN2NKSgg2r8TM6a3xoxLA+eb6dHQrmFh/0YKTzyHXy+wn+cTHR+U+exHZkOFcZwfqgvh4olCHCHWfQA8ujhKYmJfiXxeRzJbm5FxU9rDBjRO/tMnrfvh0IwMY58yhqT8czAWXFBIKEwxFwfUVM/tWj1kAfiUQbGBjoI9x1xqGxYnJtiOpBQFwMgcCJYrtxJLEaZrMVosPh63VhbG1tdWG7mxLqmZp03784hkvg+GS6uuUQgp2bLS2BbgQ3n3EYxtT08OEbTDRTQ64FRU77F8m4BEKOTyZbwFUym45YgnTr4RA0Se87N5wZ6RQSKSVYRCyPkXKjZbkCdqYgV8j3ONKrT4bG7fpBGJbiSVKLnXjijvJoiVQmi72cJ+EoKLcszE7A+lho1IE+Hj06UKVJCa516iFTwrrrSvOlMiU5PJVI0HqDsjAzg9M3QKOuXz/WxyWaU2dKeJoyOCWYRGqTyQpKFbFaCqH7C0OUnQWsz4Km7+3n+u1qcnWIp6M6o+pzEDm1KJfQHnTvObfQvcEQhbKA9eHQnv179sMA/bJLiCNVpAoNfZZ/OpRW7hbddeVdkUxw0f3xPhBuceKIFWRubr4HAB95mhZIlRNd5A8SKuLTyG2cnGifa2yBa1Te4319XaDt24Hfe6I1XEmlEtsSEwIS5KHhZ3LYbievXfPy9ok02AHrYFJo+nYE4JtfSVMGUomJFQGJD6ih5CQp29X7pJe3q0+kPqyD6kOgVdq7AciBXUGBIqrL6Qp//0RHGq2F6+bq45Pp7Z0F20iXWdAobcBubeSCVpELsAPK4uLDaWSF1E3gxvb28sqK1AW6IQifA20y2bkT+Ej8rlYXatLpiuKC+HB1T1dAEYfDPnnSKztSV7c3fCy0VcfExKTPN28WBQbeD4iLi3cMr6uQSm8KYDsSfE+4Cwo1CYKmRujo9OWfv5ocBD5gIjE1jaooksq4YE6vzE8HDyO24RDwY+fpAPs40IF9JTkkhOqiqqMFt5fFcKMKtHJcXbNuIzbQRwN7qA2wIxD9/IUOEsnTUZUmpnV9/VIWV5zkzo7Ku3TQ1lYfDh8IAdbY2OhEIPruAx0p6togoiikmhgrvXlTUOou8b1tYHoQKQ6ikXAbmwgTuMzu86/IapJnXZdKJVepFBI3DoGg9VQP2OBVDJBo0BzoOibA19a+ouZRKGIyVZiYJHQXENwLtFr0EVtff37/5l4KV4dHPbe/xikMi3UiERPKi/O57g3CF0a79ExND+rqzoD6GbrIRgdw/Nz7qy81WDoD6+R5pty/oPCZ45sSPT3EngZ69DMBNInQOdfonPGyFstAo/k8ktJF2FpFS6780GtPgH5iHIjWbqzHZLxyFPNhPZ3HEzs5VV/SMO8C2XYL9AsTpp77iMdgKIGByZR0JhPseayGEhSdl4Hh3zCdNhH6jaHLH7IweHW1XBREAqm8t53N9y5zLnbW4yuXgc5/sICFYfGSRWfalSGkZOW9PF9f3yjJ5e76BcOgvzFlLgsL9lR8g1Auby/MlvhmZ0VdXDsFAvzDX+lCfF5aGi9siPXNzs5avBGU+B/bNq+brVWoKFyxes64SdBvfAMxr90PVLFT0gAAAABJRU5ErkJggg=="

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdSSURBVHgB7Z1PbFRFHMe/M90WUrGugljoZSsXuUDRmKjRuKil9USJJxOEclATEwPEi0EsW0BijIZyIRpD2houHrQQDrQSw6KJmhhj5SIHiJsmVf609NFSXNruG2fmddu3f97+nVn3z3yS9u37t7x+98tvfm9m9vcISgw70N6GOrQB1A+KzbAhln4wBBaP8APEj4JgFj/Xki8JInJpYxSE3ZFLm0XIsQujKCEEGmH7gn6s8rWB1G3n/1KQb2pDOUAQloIzdgl358KkL2xBE1oEZgdfCXJRD3HntBXuxhLCcIZb/Sw5cmEAilEmsHRrU8Ne/nJfRYiangj/SwYwRwfJx8MRKKBogatE2GQiqoQuSmD2YXs3CDleRcImEwGze4sJHQUJzN7vDKCe9S82XNUPwwDmSW8hbs5bYNmA0bp+/jKA2iKCBXtHvmkezedg1tOxl4t7EbUnriAAH/2d9Ww7lM9JOQu8+MZ9qHlIKB+RcwoRzhuSEAwuWIgc/q4321FZBTbiZoBhPzkykvF/dUaBZb8BjzsweGOTreTocNhrt2cMlqmYjw7BkBnK+qVWXrs9T6xnIpAHYMhGACtYv9fOtAI7d2johiE3GIJSszSkxGBp9wZWq7luMViYvt+a3PWZ6uAGezeMuIUgOr32JW9McLBxb9GkuDjRwca9xZLi4qQQQbphKBKy1722JPBiKxiAoVj87GBnML7icjDZDoMa6thSZ5Bs5FiID/vYK6ZgUMVSY+c4eKEhCINK/Fi1Uk5RcASmJAiDYliX+O0ITLAZBrVQvOgsBKxGBi9LiwwRxPT5aoTaWyiPvwEY9BBDGxe4TCbkVSXU76uYWTn+x4Dmx53X1k3g+jWUPRSbfTKDYChfApuArTudpRvrBjD0GRC5jLKF4WEfdNO8AVj5gOO46Gxep0phgzvT7xOO3vMJED4NXDyNnBDX4W92lm7EhyV+VEPwkG95ZrlihLCv9zhCxPnlDHD+89zP9xLXjTjmr8vZnRz/QNzX40Zcl7g+lXBt9Tg4/sckO+WZLmdbLo579e2E1ejYFVg/OAKs7tyF+jXrl3cKp4twkQkRYrzEFTy7Q73AEHlwz7Yp5Q1d13vAlnaoQoh77eBrCdtaDwyg8YmnoQwRIo7vhmJEZ4+GLKJ1E1Ry69uTKdsmR75CBeDPa3ZlORG7N4NKQI/Af/4ElTRuTA0F/ue7UAnoaeREY7HxubSNyuz5Uxj7ug+2bWd8C3eMXd3xhnTszG/f8+U0X98F/wvLAls/nsH4lx9kfD9xfMubH3kfkG8KmSO8kevQc5shxBUpVLyx43+Ade4LjJ87ldPp9WtasOHoN6hrfDDjcTYX/ipvAOcnxpENIbD7g1lCiDv0KXDlZ6hGn8BueGo2c3sCYzcm8jqt6cmXsP6tY54iC3HH+t7F7JVfkSu0sQnrWlrgX+VKIXXcZCxSEoHnF2K4On49a1hIh3Dy2h3voOmpl7k4jtBC2GkeLm4OnczJucnUUYrAurVY2VAP3WgX2LaZFHd+YQHFEr+5mJ/4G8VS7/NhQ0szF1vrt4mhPU375/aUEnEFQlgV4sr34td0a+oOdKNVYBEarBk9rbMKJqdncC96HzrRKvD4rUmUOzc1u1ibwLPcGbOa3aECcY06XaxNYOtu+YaGZCbv6Lvt1iJwjKdj5Rx7kxEujtl6kinqlGFRy+y/5R8a3AhD3ItGoQHZXaleYD0XqxVNprC0hIj7c/OoNHSZgi5VZ1JItAIFFjm7cri2FLbaGCziWayAPof/G+e61Td0wsFKM227AsWNY9uKXRzDHxSMlLRQW01BmcVHNGxLZToseqlaHn0Ec/NqOnhKRQO/bnHtSrEx6uM2HlU9cJTQmV3L+FjE+RJMKUY1ahByeIQsxgZm4rBqRH1MLAVfcgkGtfAMQiwcgW2iflJWzcPC4rcjsC86qqPTp6a5OxcWCykwCYUtEJMPK+RsvKTBcgIcI1lrgBlyhC2H3MSCHDqmstYeEZ6etcZXkm/hTsBQJGTQvZYoMJ3rM41dUUS4ogPuDQkCy8bOuLgIyCAJJdYYTu3lMS4ulBT3ClIEli5mdD8M+cFIb7J7BZ4z39ihjovmW/g5QjBAekf2pNvl3RFMiDghAkM2Ilwrz3uIzOVtRfUkKgvVGbyg9hYS8q7rnnEoQ9bFZTDx2BMRdzMXzc86VuRUeDa30alwcQ8Ph7IehRxhPZ0h0fTBgFzFlUciD4zIyKluu5v8H1QSam+DLUuPB1BbRPjAxJ5M9drTkfd4vQzqlGzlUg+iVmB8fI1mLobvRZEPi+rsBqnmWu9M3tWSI8MDKJDiH3cW6gzAFvXeWRXVHhZ9MfQEaLRvsQOsYNQ9sK8qhFYnbBw9j5wUoYOy7Tx2VcBX4kUY4OORorOmgBibDb0PTRVlc0VlV1F81KluFURZICbakEtyugIfUVfl1nTo/R5pGmSat0ACTkE8Pv4XL0yq57G/lvyxxSQQvr0uNprt1lY1/wGLSLQoHDFGxAAAAABJRU5ErkJggg=="

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
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
var _jsxFileName = "C:\\Users\\goura\\OneDrive\\Pictures\\Desktop\\tech-app-master\\tech-app-master\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Home({
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
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__["StickyProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Techvestors"), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }))), __jsx(sections__WEBPACK_IMPORTED_MODULE_6__["Hero"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx(sections__WEBPACK_IMPORTED_MODULE_6__["Services"], {
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
  }), __jsx(sections__WEBPACK_IMPORTED_MODULE_6__["Team"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(sections__WEBPACK_IMPORTED_MODULE_6__["Testimonials"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx(sections__WEBPACK_IMPORTED_MODULE_6__["WorkFlow"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }))));
}
Home.defaultProps = {
  lang: `en`,
  meta: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93RXZlbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd09kZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTEuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS0yLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtMy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS01LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtNi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9nYXVyYXYucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZ21haWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaGVyby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXR0ZXJuQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGxhY2Vob2xkZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS9zZXJ2aWNlMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlL3NlcnZpY2UyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2Uvc2VydmljZTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc29jaWFsL2ZhY2Vib29rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvY2lhbC9naXRodWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc29jaWFsL3R3aXR0ZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9hcnJvdy1yaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21lbWJlcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9tZW1iZXIyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlYW0vbWVtYmVyMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21lbWJlcjQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVjaHZlc3RvcnMtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWxlcGhvbmUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd2h5dXMvZXJwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3doeXVzL3NvY2lhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9UZWFtTWVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL1Rlc3RpbW9uaWFsQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL0NvbnRhY3RVcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNhcmVlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbW9iaWxlLWRyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9hcHAvYXBwLnJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2NyZWF0ZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9oZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3RlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvd2h5dXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb2xpc2hlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLWRyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLXRhYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaG9vay1mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL3JpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvc2lcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmV2ZWFsL1NsaWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmV2ZWFsL1pvb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3lub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dpcGVyL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhlbWUtdWlcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiZGVjb2RlIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwidmFsdWUiLCJBcnJheSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcmFtcyIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwiZW5jb2RlVVJJIiwic2VhcmNoUGFyYW1zIiwicmVzdWx0IiwiaXRlbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIlNlY3Rpb25IZWFkaW5nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0eWxlcyIsImhlYWRpbmciLCJ0ZXh0QWxpZ24iLCJtYXhXaWR0aCIsIm1hcmdpbiIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImltZyIsIm1sIiwicG9zaXRpb24iLCJ0b3AiLCJjb2xvciIsIlNlcnZpY2UiLCJzZXJ2aWNlSXRlbSIsImZpZ3VyZSIsImljb24iLCJjb250ZW50IiwiZGlzcGxheSIsIm1pbldpZHRoIiwibXIiLCJtYiIsImgzIiwibXQiLCJhIiwiVGVhbU1lbWJlciIsIm1lbWJlciIsInNlY3Rpb24iLCJhdmF0YXIiLCJhYm91dCIsImRlc2lnbmF0aW9uIiwic29jaWFsTGlua3MiLCJtYXAiLCJzb2NpYWwiLCJpbmRleCIsImxpbmsiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJUZXN0aW1vbmlhbHNDYXJkIiwiaW1hZ2UiLCJ0ZXh0IiwidXNlcm5hbWUiLCJ0ZXN0aW1vbmlhbHNDYXJkIiwidGVzdGltb25pYWxzSW5mbyIsInRlc3RpbW9uaWFsc0ltYWdlIiwidGVzdGltb25pYWxzQ29udGVudCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInB4IiwicHkiLCJwYiIsIkRyYXdlciIsImNsYXNzTmFtZSIsImNsb3NlQnV0dG9uIiwiY2xvc2VCdXR0b25TdHlsZSIsImRyYXdlckhhbmRsZXIiLCJ0b2dnbGVIYW5kbGVyIiwib3BlbiIsIndpZHRoIiwicGxhY2VtZW50IiwiZHJhd2VyU3R5bGUiLCJjbG9zZUJ0blN0eWxlIiwidHJpbSIsImRlZmF1bHRQcm9wcyIsIkZvb3RlciIsImZvb3RlciIsImZvb3RlckJvdHRvbUFyZWEiLCJGb290ZXJMb2dvIiwibXgiLCJ2YXJpYW50IiwibWVudXMiLCJtZW51SXRlbXMiLCJpZCIsIml0ZW1zIiwibGFiZWwiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJib3JkZXJUb3AiLCJib3hTaGFkb3ciLCJwdCIsImFsaWduQ29udGVudCIsImdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJoZWlnaHQiLCJteSIsInRyYW5zZm9ybSIsIm5leHRQYWdlIiwidGVsZXBob25lIiwibG9jYXRpb24iLCJnbWFpbCIsImZvb3Rlck5hdiIsImZhY2Vib29rIiwidHdpdHRlciIsImdpdGh1YiIsIldpZGdldCIsImZvb3RlcldpZGdldCIsImg0IiwidWwiLCJsaXN0U3R5bGUiLCJwYWRkaW5nIiwiY29sdW1ucyIsImxpIiwicmdiYSIsIkNvbnRhY3RVcyIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwicmVzZXQiLCJjb250cm9sIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiaXNTdWJtaXRTdWNjZXNzZnVsIiwiaXNTdWJtaXR0aW5nIiwidXNlRm9ybSIsIm1vZGUiLCJpc1N1Y2Nlc3MiLCJzZXRJc1N1Y2Nlc3MiLCJ1c2VTdGF0ZSIsIk1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRoZW4iLCJsb2ciLCJmb3JtIiwiY29udGFjdF9faGVhZGluZyIsImZsZXgiLCJmb3JtSW5wdXQiLCJyZXF1aXJlZCIsImZuYW1lIiwibG5hbWUiLCJwYXR0ZXJuIiwiZW1haWwiLCJwaG9uZSIsInRleHRBcmVhIiwiYnV0dG9ucyIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dCIsImgyIiwiSGVhZGVyIiwidXNlUm91dGVyIiwiaGVhZGVyIiwiaGVhZGVyX19jb250YWluZXIiLCJMb2dvRGFyayIsIm5hdiIsIm1lbnVDYXJlZXJJdGVtcyIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsImxlZnQiLCJhbmltYXRpb24iLCJmbGV4U2hyaW5rIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJiZyIsIk1vYmlsZURyYXdlciIsImlzQ2FyZWVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIm1vYmlsZURyYXdlciIsImlzT3BlbiIsImRyYXdlciIsImNsb3NlIiwibW9iaWxlRHJhd2VyX19jb250ZW50IiwibWVudSIsIm1lbnVfX0Zvb3RlciIsInJpZ2h0IiwiekluZGV4IiwiYm9yZGVyQm90dG9tIiwiYnV0dG9uIiwiZnciLCJMYXlvdXQiLCJpc1N0aWNreSIsInNldElzU3RpY2t5IiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0dXMiLCJTdGlja3kiLCJTVEFUVVNfRklYRUQiLCJTVEFUVVNfT1JJR0lOQUwiLCJOYXZMaW5rIiwicmVzdCIsIkxvZ28iLCJzcmMiLCJ1c2VEaXNwYXRjaCIsInByb3ZpZGVyIiwidXNlQ3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJ1c2VTdGlja3lTdGF0ZSIsInVzZVN0aWNreURpc3BhdGNoIiwiU3RpY2t5UHJvdmlkZXIiLCJpc1NpZGViYXJTdGlja3kiLCJFcnJvciIsImRlZmF1bHRWYWx1ZSIsImRlZmF1bHREaXNwYXRjaCIsInN0YXRlQ3R4IiwiY3JlYXRlQ29udGV4dCIsImRpc3BhdGNoQ3R4IiwidXNlU3RhdGVDdHgiLCJwcm9wZXJ0eSIsInVzZURpc3BhdGNoQ3R4IiwiUHJvdmlkZXIiLCJ1c2VSZWR1Y2VyIiwiYWN0aW9uIiwiRHJhd2VyUHJvdmlkZXIiLCJIb21lIiwibWV0YSIsIm1ldGFEYXRhIiwiY29uY2F0IiwidGhlbWUiLCJsYW5nIiwiSGVybyIsImhlcm9fX3NlY3Rpb24iLCJjb250YWluZXIiLCJiYW5uZXJJY29uMSIsImJhbm5lckljb24yIiwiYmFubmVySWNvbjMiLCJiYW5uZXJJY29uNCIsImJhbm5lckljb241IiwiYmFubmVySWNvbjYiLCJoZXJvX19jb250ZW50cyIsImhlcm9fX2hlYWRpbmciLCJoZXJvIiwiaGVyb19fYnV0dG9uIiwiSGVyb0ltYWdlIiwiYmFubmVyQW5pbTEiLCJiYW5uZXJBbmltMiIsImJhbm5lckFuaW0zIiwiYm90dG9tIiwiYmFubmVySWNvbjciLCJpY29uMSIsImljb24yIiwiaWNvbjMiLCJTZXJ2aWNlcyIsImNvbnRlbnRXcmFwcGVyIiwiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiYXZhdGFyMSIsImF2YXRhcjMiLCJhdmF0YXIyIiwiVGVhbSIsInN3aXBlclJlZiIsInVzZVJlZiIsImNvbnRhaW5lclJlZiIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImNvbnRhaW5lck9mZnNldCIsInNldENvbnRhaW5lck9mZnNldCIsImlzRW5kIiwiY3VycmVudCIsInN3aXBlciIsImhhbmRsZVByZXYiLCJzbGlkZVByZXYiLCJzZXRJbnRlcnZhbCIsImFjdGl2ZUluZGV4IiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZU5leHQiLCJzbGlkZU5leHQiLCJ1c2VFZmZlY3QiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwidGVhbVdyYXBwZXIiLCJhcnJvd1JpZ2h0IiwicGwiLCJwciIsIm91dGxpbmUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJBdXRvcGxheSIsIlRFU1RJTU9OSUFMU19EQVRBIiwidGVzdGltb25pYWxzSW1hZ2UxIiwidGVzdGltb25pYWxzSW1hZ2UyIiwidGVzdGltb25pYWxzSW1hZ2UzIiwidGVzdGltb25pYWxzSW1hZ2U0IiwidGVzdGltb25pYWxzSW1hZ2U1IiwidGVzdGltb25pYWxzSW1hZ2U2IiwiVGVzdGltb25pYWxzIiwidGVzdGltb25pYWxDYXJvdXNlbCIsImxvb3AiLCJzcGVlZCIsImNlbnRlcmVkU2xpZGVzIiwiYXV0b0hlaWdodCIsImF1dG9wbGF5Iiwid2FpdEZvclRyYW5zaXRpb24iLCJkZWxheSIsInRlc3RpbW9uaWFscyIsInRlc3RpbW9uaWFsX19oZWFkZXIiLCJ0ZXN0aW1vbmlhbF9faGVhZGluZyIsIl9pbmRleCIsInRhYlRpdGxlIiwidGFiSW1hZ2UxIiwibGlzdCIsIm1vcmVMaW5rIiwidGFiSW1hZ2UyIiwiV2h5VXMiLCJ0YWJzIiwidGFiUGFuZSIsImlsbHVzdHJhdGlvbiIsImZsZXhHcm93Iiwid2hpdGVTcGFjZSIsIldvcmtGbG93Iiwid29ya2Zsb3ciLCJncmlkIiwiY2FyZCIsImljb25Cb3giLCJ3cmFwcGVyIiwic3ViVGl0bGUiLCJhcnJvd0FuaW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJncmlkR2FwIiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJvcGFjaXR5IiwiY29sb3JzIiwidGV4dF9zZWNvbmRhcnkiLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwibXV0ZWQiLCJtb2RlcyIsImRhcmsiLCJmb250cyIsImJvZHkiLCJmb250U2l6ZXMiLCJmb250V2VpZ2h0cyIsImJvbGQiLCJsaW5lSGVpZ2h0cyIsImxldHRlclNwYWNpbmdzIiwiY2FwcyIsInNwYWNlIiwibGF5b3V0IiwidG9vbGJhciIsIm1haW4iLCJzZWN0aW9uSGVhZGVyIiwibWFyZ2luQm90dG9tIiwidGV4dFRyYW5zZm9ybSIsImZvcm1zIiwidGV4dGFyZWEiLCJoZXJvUHJpbWFyeSIsImhlcm9TZWNvbmRhcnkiLCJsZWFkIiwibGlua3MiLCJkZWZhdWx0IiwibG9nbyIsImltYWdlcyIsImRlZmF1bHRCdG4iLCJ3aGl0ZUJ1dHRvbiIsInRleHRCdXR0b24iLCJzdmciLCJyb290IiwiZm9udFNtb290aGluZyIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBOztBQU9BOztBQXNCQTtBQUNBLE1BQU1BLFNBQVMsR0FBRyxJ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Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQTBJaUJvWldsbmFIUTlJalF6SWlCMmFXVjNRbTk0UFNJd0lEQWdNakEwSURReklpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284Y0dGMGFDQmtQU0pOTUM0ME9ERXlNREVnTVRBdU1qVTNNVU13TGpRNE1USXdNU0F4TUM0eU5UY3hJRGt5TGpjNE1USWdPREV1TnpnME55QXhPVFV1TkRneElERXdMakkxTnpFaUlITjBjbTlyWlQwaUkwTXlRMEpFUlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4TGpVaUlITjBjbTlyWlMxa1lYTm9ZWEp5WVhrOUlqVWdOU0l2UGdvOGNHRjBhQ0JrUFNKTk1UZ3dMamNnTXk0ME56UTFOVU14T0RBdU55QXpMalEzTkRVMUlERTVPUzQ0TVRVZ0xUSXVNRFV4TnpjZ01qQXhMall6TnlBMExqSXdPVEUyUXpJd015NDBOVGtnTVRBdU5EY3dNU0F5TURJdU1Ea3pJREUyTGprME5EUWdNVGsyTGpFM05pQXlOUzQ0TVRReUlpQnpkSEp2YTJVOUlpTkRNa05DUkVVaUlITjBjbTlyWlMxM2FXUjBhRDBpTVM0MUlpQnpkSEp2YTJVdFpHRnphR0Z5Y21GNVBTSTBJRFFpTHo0S1BDOXpkbWMrQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQTBJaUJvWldsbmFIUTlJalF6SWlCMmFXVjNRbTk0UFNJd0lEQWdNakEwSURReklpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284Y0dGMGFDQmtQU0pOTUM0NU9UazNOVFlnTXpJdU56RTVOVU13TGprNU9UYzFOaUF6TWk0M01UazFJRGt6TGpJNU9UZ2dMVE00TGpnd09ERWdNVGsySURNeUxqY3hPVFVpSUhOMGNtOXJaVDBpSTBNeVEwSkVSU0lnYzNSeWIydGxMWGRwWkhSb1BTSXhMalVpSUhOMGNtOXJaUzFrWVhOb1lYSnlZWGs5SWpVZ05TSXZQZ284Y0dGMGFDQmtQU0pOTVRneExqSXhPU0F6T1M0ME9UYzJRekU0TVM0eU1Ua2dNemt1TkRrM05pQXlNREF1TXpNMElEUTFMakF5TkNBeU1ESXVNVFUySURNNExqYzJNME15TURNdU9UYzRJRE15TGpVd01Ua2dNakF5TGpZeE1TQXlOaTR3TWpjMUlERTVOaTQyT1RRZ01UY3VNVFUzTlNJZ2MzUnliMnRsUFNJalF6SkRRa1JGSWlCemRISnZhMlV0ZDJsa2RHZzlJakV1TlNJZ2MzUnliMnRsTFdSaGMyaGhjbkpoZVQwaU5DQTBJaTgrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTkRNaUlHaGxhV2RvZEQwaU5EZ2lJSFpwWlhkQ2IzZzlJakFnTUNBME15QTBPQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRURXhMaklnTVRNdU16a3hNVXd3SURFM0xqazVNVEZNTVRJdU5TQTBOeTQ1T1RFeFREUXlMalVnTXpVdU5Ea3hNVXd6Tnk0M0lESXpMamc1TVRGRE16Y3VOaUF5TXk0M09URXhJRE0zTGpZZ01qTXVOemt4TVNBek55NDFJREl6TGpjNU1URkRNemN1TkNBeU15NDNPVEV4SURNM0xqUWdNak11TmpreE1TQXpOeTR6SURJekxqWTVNVEZETXpjdU1pQXlNeTQxT1RFeElETTNMakVnTWpNdU5Ua3hNU0F6Tmk0NUlESXpMalU1TVRGRE16WXVPU0F5TXk0MU9URXhJRE0yTGprZ01qTXVOVGt4TVNBek5pNDRJREl6TGpVNU1URklNell1TjBnek5pNDJTRE0yTGpWRE16WXVOQ0F5TXk0MU9URXhJRE0yTGpRZ01qTXVOVGt4TVNBek5pNHpJREl6TGpVNU1URklNell1TWtNek5pNHhJREl6TGpVNU1URWdNellnTWpNdU5Ua3hNU0F6TlM0NUlESXpMalk1TVRGRE16VXVOQ0F5TXk0NE9URXhJRE0xTGpFZ01qUXVNamt4TVNBek5TQXlOQzQyT1RFeFF6TTBMallnTWpZdU1Ua3hNU0F6TXk0MUlESTNMalU1TVRFZ016RXVPU0F5T0M0eE9URXhRekk1TGpJZ01qa3VNamt4TVNBeU5pNHhJREkzTGprNU1URWdNalF1T1NBeU5TNHlPVEV4UXpJekxqZ2dNakl1TlRreE1TQXlOUzR4SURFNUxqUTVNVEVnTWpjdU9DQXhPQzR5T1RFeFF6STVMalFnTVRjdU5Ua3hNU0F6TVM0eElERTNMamM1TVRFZ016SXVOU0F4T0M0MU9URXhRek15TGprZ01UZ3VOemt4TVNBek15NDBJREU0TGpnNU1URWdNek11T1NBeE9DNDJPVEV4UXpNMElERTRMalk1TVRFZ016UXVNU0F4T0M0MU9URXhJRE0wTGpFZ01UZ3VOVGt4TVVNek5DNHhJREU0TGpVNU1URWdNelF1TWlBeE9DNDFPVEV4SURNMExqSWdNVGd1TkRreE1Vd3pOQzR6SURFNExqTTVNVEZNTXpRdU5DQXhPQzR5T1RFeFRETTBMalVnTVRndU1Ua3hNVXd6TkM0MklERTRMakE1TVRGRE16UXVOaUF4T0M0d09URXhJRE0wTGpZZ01UZ3VNRGt4TVNBek5DNDJJREUzTGprNU1URkRNelF1TnlBeE55NDRPVEV4SURNMExqY2dNVGN1TnpreE1TQXpOQzQ0SURFM0xqWTVNVEZETXpRdU9DQXhOeTQxT1RFeElETTBMamdnTVRjdU5Ua3hNU0F6TkM0NElERTNMalE1TVRGRE16UXVPQ0F4Tnk0ek9URXhJRE0wTGpnZ01UY3VNemt4TVNBek5DNDRJREUzTGpJNU1URk1NekFnTlM0MU9URXhNVXd4T0M0NElERXdMakk1TVRGRE1UZ2dNVEF1TkRreE1TQXhOeTR5SURFd0xqRTVNVEVnTVRZdU9TQTVMak01TVRFeFF6RTJMamNnT0M0NE9URXhNU0F4Tmk0NElEZ3VNemt4TVRJZ01UY2dOeTQ1T1RFeE1rTXhOeTQ0SURZdU5Ua3hNVEVnTVRnZ05DNDRPVEV4TVNBeE55NHpJRE11TWpreE1URkRNVFl1TWlBd0xqVTVNVEV4TlNBeE15NHhJQzB3TGpjd09EZzROU0F4TUM0eklEQXVNemt4TVRFMVF6Y3VOaUF4TGpRNU1URXhJRFl1TXlBMExqVTVNVEV4SURjdU5DQTNMak01TVRFeVF6Z2dPQzQ1T1RFeE1pQTVMalFnT1M0NU9URXhNU0F4TUM0NUlERXdMalE1TVRGRE1URXVNeUF4TUM0MU9URXhJREV4TGpjZ01UQXVPRGt4TVNBeE1TNDVJREV4TGpNNU1URkRNVEl1TXlBeE1pNHdPVEV4SURFeExqa2dNVEl1T1RreE1TQXhNUzR5SURFekxqTTVNVEZhSWlCbWFXeHNQU0lqUkVGRk1rVTRJaTgrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRNaUlHaGxhV2RvZEQwaU5EVWlJSFpwWlhkQ2IzZzlJakFnTUNBMU15QTBOU0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRUUTVMakF4TkRZZ01qUXVORGs1TmtNME9DNDNPVE0ySURJMUxqUTNORGtnTkRjdU9ETTJOaUF5Tmk0d056Z3pJRFEyTGpnMk1UTWdNalV1T0RVM00wdzBNeTR6TlRBeklESTFMakEyTVRkTU5ERXVPREkxTlNBek1TNDNPVEV4VERNMExqZzJOVFFnTWpNdU1UTTVNVXd5TXk0ME5UUTNJREl3TGpVMU16UkRNakl1TkRjNU5DQXlNQzR6TXpJMUlESXhMamczTmlBeE9TNHpOelUwSURJeUxqQTVOeUF4T0M0ME1EQXlUREkxTGpZM056RWdNaTQyTURBM01VTXlOUzQ0T1RneElERXVOakkxTkRNZ01qWXVPRFUxTVNBeExqQXlNakF4SURJM0xqZ3pNRFFnTVM0eU5ETXdNVXcxTVM0eU16Y2dOaTQxTkRZNE9FTTFNaTR5TVRJeklEWXVOelkzT0RnZ05USXVPREUxTnlBM0xqY3lORGc1SURVeUxqVTVORGNnT0M0M01EQXhOMHcwT1M0d01UUTJJREkwTGpRNU9UWmFJaUJtYVd4c1BTSWpSRUZGTWtVNElpOCtDanh3WVhSb0lHUTlJazAxTGpJMk5qWWdNemd1TXpjME9FdzNMakkxTlRVMklESTVMalU1TnpOTU5TNDJPVFV4TWlBeU9TNHlORE0zUXpNdU5qUTNNRFFnTWpndU56YzVOaUF5TGpNMk5EYzJJREkyTGpjME5pQXlMamd5T0RnMUlESTBMalk1TnpsTU5pNDBNRGc1TnlBNExqZzVPRFF6UXpZdU9EY3pNRFlnTmk0NE5UQXpOU0E0TGprd05qY3lJRFV1TlRZNE1EY2dNVEF1T1RVME9DQTJMakF6TWpFMlRETTBMak0yTVRRZ01URXVNek0yUXpNMkxqUXdPVFVnTVRFdU9EQXdNU0F6Tnk0Mk9URTNJREV6TGpnek16Z2dNemN1TWpJM055QXhOUzQ0T0RFNVRETXpMalkyT1RZZ016RXVOVGd6T0VNek15NHlNRFUySURNekxqWXpNVGtnTXpFdU1UY3hPU0F6TkM0NU1UUXhJREk1TGpFeU16Z2dNelF1TkRVd01Vd3hPQzR6T1RVNElETXlMakF4T1RGTU5TNHlOalkySURNNExqTTNORGhhVFRVdU56azJNalVnTWpZdU1qZzVNMHd4TWk0d05qSTNJREkzTGpRNE1qZE1NVEF1TURBeUlETXpMakUyTkV3eE9DNHdNVEU1SURJNExqZ3pNRGRNTXpBdU9URXdNeUF6TVM0MU1qWTVURE0wTGpRd01pQXhOQzR4TVRjMVRERXdMakk0T0NBNExqZzNPVGswVERVdU56azJNalVnTWpZdU1qZzVNMW9pSUdacGJHdzlJaU5FUVVVeVJUZ2lMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpNNUlpQm9aV2xuYUhROUlqUTFOaUlnZG1sbGQwSnZlRDBpTUNBd0lETXpPU0EwTlRZaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHUTlJazB6TURFdU9EUWdOakF1TWpnME0wd3pNRE11TnprNElEVTFMamt3TWpGRE1qZzNMall4T0NBMU9TNHhNakUzSURJM015NDBNREVnTmpVdU1qWXlNaUF5TmpFdU5EVXlJRGMwTGpNeE1EaERNalEwTGpZZ09EY3VNRFkwSURJek5pNHlOak1nTVRBeUxqVXhOaUF5TXpJdU1qSXpJREV4TXk0eU1qZERNak13TGpRek1TQXhNVGd1TURBeUlESXlPUzR3T1RjZ01USXlMamc1T0NBeU1qZ3VNekUwSURFeU55NDJNVFJETWpJeUxqWXpNaUF4TWpjdU16Y3pJREl4Tmk0eU5qSWdNVEk0TGpNek5pQXlNRGt1TlNBeE16QXVORFkxUXpFNU5pNDVPVGtnTVRNMExqTTVNaUF4T0RndU1UWTJJREUwTkM0eU5Ua2dNVGd4TGpZMU5DQXhOakV1TlRBMlF6RTNOUzQ1SURFM05pNDNOekVnTVRjeUxqVTJPU0F4T1RVdU9EZzNJREUyT0M0M01ERWdNakU0TGpBeVF6RTJOUzR4TWlBeU16Z3VOVFUySURFMk1TNHdOaUF5TmpFdU9ETTNJREUxTkM0eU9DQXlPRFF1TmpBMlF6RTBOaTQxTmpVZ016RXdMall4TmlBeE16WXVORFEzSURNek1pNHhNRFlnTVRJekxqTTRPU0F6TlRBdU1qaERNVEV5TGpVNU9DQXpOalV1TWprMUlEazVMalkzTXpNZ016YzNMakVnT0RRdU9Ua3pOaUF6T0RVdU16YzFRemN5TGpJeE1EZ2dNemt5TGpVMk1TQTFOeTQyT0RZeUlETTVOeTR5T0RjZ05ERXVOemN5SURNNU9TNDBNek5ETWpjdU56Z3pOeUEwTURFdU16TTBJREV6TGpjeU5UWWdOREF4TGpJNE55QXdMakF4TkRnM09Ua2dNems1TGpnME1rd3hNQzR6T1RZeklEUXdOQzQwT0RKRE1qQXVPRGsxTkNBME1EVXVNVE1nTXpFdU5qSTJPQ0EwTURRdU56TXpJRFF5TGpNeE9UUWdOREF6TGpJM05VTTFPQzQzTVRnMklEUXdNUzR3TkRjZ056TXVOekkwTXlBek9UWXVNVFV6SURnMkxqa3pNamdnTXpnNExqY3pNa014TURJdU1URTFJRE00TUM0eE9USWdNVEUxTGpRME1pQXpOamd1TURFeklERXlOaTQxTnlBek5USXVOVE14UXpFek9TNDROelFnTXpNekxqazVPU0F4TlRBdU1UYzFJRE14TWk0eE5EVWdNVFU0TGpBeUlESTROUzQzTURKRE1UWTBMamcxTVNBeU5qSXVOekl6SURFMk9DNDVOREVnTWpNNUxqTXlPQ0F4TnpJdU5USTJJREl4T0M0Mk9EZERNVGMyTGpNMUlERTVOaTQzTkRjZ01UYzVMalkzTVNBeE56Y3VOemszSURFNE5TNHlPVE1nTVRZeUxqZzNOME14T1RFdU16TTFJREUwTmk0NE1qVWdNVGs1TGpRd055QXhNemN1TnpBMElESXhNQzQyTmprZ01UTTBMakUxT1VNeU1UY3VOamd4SURFek1TNDVOU0F5TWpNdU16UXlJREV6TVM0ek15QXlNamN1TnpZeklERXpNUzQwTnpaRE1qSTNMalV6T0NBeE16TXVOalV6SURJeU55NDBNalFnTVRNMUxqYzNNeUF5TWpjdU5ETTJJREV6Tnk0NFF6SXlOeTQxTURRZ01UUTFMakUxTXlBeU1qa3VNalF6SURFMU1DNDROamtnTWpNeUxqTXlOeUF4TlRNdU9EWTBRekl6TkM0M09Ua2dNVFUyTGpJMk9DQXlNemd1TURRMElERTFOaTQ0TkRZZ01qUXhMalEwTmlBeE5UVXVORFZETWpRMExqazVNeUF4TlRRdU1ERXpJREkwTnk0Mk1EUWdNVFV4TGpjeElESTBPQzQ1T1RrZ01UUTRMamMzT1VNeU5UQXVNek01SURFME5TNDVOeklnTWpVd0xqUTFOaUF4TkRJdU56UTJJREkwT1M0ek5ESWdNVE01TGpZNU5FTXlORGN1TlRNeklERXpOQzQzTlRZZ01qUXlMamd6TnlBeE16QXVPREkzSURJek5pNDBNallnTVRJNExqa3hPVU15TXpVdU1EY3lJREV5T0M0MU1EWWdNak16TGpZMk15QXhNamd1TWpFM0lESXpNaTR4T0RjZ01USTNMams0TTBNeU16SXVPVFVnTVRJekxqVTVPQ0F5TXpRdU1UZzNJREV4T1M0d05qUWdNak0xTGpnMk1pQXhNVFF1TlRrM1F6SXpPUzQzTXpFZ01UQTBMak0yTkNBeU5EY3VOamdnT0RrdU5UZzVPU0F5TmpNdU56a2dOemN1TXprNE9FTXlOelF1TmpFNElEWTVMakl6TWpnZ01qZzNMak0yTWlBMk15NDFNVGsySURNd01TNDROQ0EyTUM0eU9EUXpXazB5TXpVdU16STVJREV6TWk0Mk5qVkRNalF3TGpVeU9TQXhNelF1TWpJeklESTBOQzR6TVRNZ01UTTNMakkzTmlBeU5EVXVOamcySURFME1TNHdORU15TkRjdU16RTVJREUwTlM0MU5Ua2dNalExTGpBM05pQXhORGt1T0RFMElESXpPUzQ1TmlBeE5URXVPRGt4UXpJek9DNHdNRFlnTVRVeUxqWTNPQ0F5TXpZdU16ZzVJREUxTWk0ME1qTWdNak0xTGpBME9DQXhOVEV1TVRJeVF6SXpNaTQzTlRnZ01UUTRMamc0TlNBeU16RXVNems0SURFME5DNHdOREVnTWpNeExqTXpOeUF4TXpjdU9ESkRNak14TGpNeE1pQXhNelV1T1RFMElESXpNUzQwTVRVZ01UTXpMamt4TnlBeU16RXVOalUwSURFek1TNDROVEpETWpNekxqQTFPU0F4TXpJdU1EVTFJREl6TkM0eU56WWdNVE15TGpNME15QXlNelV1TXpJNUlERXpNaTQyTmpWYUlpQm1hV3hzUFNJalJFRkZNa1U0SWk4K0NqeHdZWFJvSUdROUlrMHpNemd1TnpRNUlEUTVMamMwTmt3eU9EUXVPRGc1SURNNExqSTFNVFZNTWpreUxqWXpOeUExTWk0Mk5UZ3pURE15TlM0d05UUWdOVEV1TmpZNU0wd3lPVFV1TkRrNElEVTNMamszTnpSTU1qazFMalV3TlNBMU55NDVPVEV5VERJNU5TNDBPVFVnTlRjdU9UYzFNa3d5T0RZdU56VXhJRFkzTGpnNU1UZE1Nams1TGpnME1TQTJOaTR3TlRNMFRETXdOUzR6TkRZZ056WXVNamc0TWt3ek16Z3VOelE1SURRNUxqYzBObG9pSUdacGJHdzlJaU5FUVVVeVJUZ2lMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpNNElpQm9aV2xuYUhROUlqTXhOaUlnZG1sbGQwSnZlRDBpTUNBd0lETXpPQ0F6TVRZaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHUTlJazB4TVRndU16STRJRGcxTGpneU9ERkRNVEV6TGpRek15QTNOQzR6TWpBMUlERXdOaTR3TVNBMk5DNHdNelVnT1RZdU9EWTJNeUExTmk0eE1UbERPRGt1TURnek55QTBPUzR6TlRNZ056a3VOelE0SURRMExqQTRNakVnTmprdU5qa3dOaUEwTUM0M01ETTJURGN4TGpjMk9URWdNemN1TVRjM00wTTRNaTR4TkNBME1DNDRNU0E1TVM0MU1UUXhJRFEyTGpFM016RWdPVGt1TkRreU9TQTFNeTR3TnpjNVF6RXdPUzR3T1RJZ05qRXVOREF4TWlBeE1UWXVPRGMwSURjeUxqRTNOeUF4TWpJdU1ERTNJRGcwTGpJME56WkRNVEkzTGpFMU9TQTVOaTR6TVRneUlERXlPUzQxTURJZ01UQTVMalF3TkNBeE1qZ3VPREk1SURFeU1pNHhNRE5ETVRJNExqWTBOQ0F4TWpVdU5qZ2dNVEk0TGpJeE15QXhNamt1TWpBeklERXlOeTQxTmpFZ01UTXlMalkyTjBNeE16Z3VOemcxSURFME55QXhORFV1T0RjeElERTJNeTQ0TXpJZ01UVXhMamd4T1NBeE9EQXVNRFJETVRVekxqSTNNeUF4T0RNdU9UZ2dNVFUwTGpZNU5DQXhPRGd1TURFMklERTFOaTR3TmpNZ01Ua3hMamt3TlVNeE5qRXVNVEF5SURJd05pNHhNVGNnTVRZMkxqTXdOU0F5TWpBdU56azJJREUzTXk0Mk1UVWdNak0wTGpFME5FTXhPREV1T0RZeElESTBPUzR5TURNZ01Ua3pMakk0TXlBeU5qTXVNREEwSURJd05pNDJORGdnTWpjMExqQTFPRU15TWpBdU16ZzFJREk0TlM0ME1qTWdNak0xTGpZMklESTVNeTQzTURnZ01qVXlMakEySURJNU9DNDJOamxETWpVNExqYzVNeUF6TURBdU5qa3hJREkyTlM0M0lETXdNaTR4TkRJZ01qY3lMall4TWlBek1ESXVPVGsxVERJM01DNDBNVEVnTXpBMkxqY3lPRU15TmpNdU56Z3pJRE13TlM0M09EY2dNalUzTGpNd01TQXpNRFF1TkRBeElESTFNQzQ1TVRJZ016QXlMalEyTmtNeU5EQXVPVEU1SURJNU9TNDBOU0F5TXpFdU16RTBJREk1TlM0eU1qVWdNakl5TGpJek5DQXlPRGt1T0RjelF6SXhOUzQ1TkNBeU9EWXVNVFkwSURJd09TNDRPRElnTWpneExqZzVOeUF5TURRdU1TQXlOemN1TVRJeVF6RTVNQzR6TmpNZ01qWTFMamMxTnlBeE56Z3VOakF6SURJMU1TNDFORGNnTVRjd0xqRXhJREl6Tmk0d05ESkRNVFl5TGpZMU9DQXlNakl1TkRJMElERTFOeTR6T0RVZ01qQTNMalU0T0NBeE5USXVNekVnTVRrekxqSTBRekUxTUM0NU5ESWdNVGc1TGpNMUlERTBPUzQxTVRFZ01UZzFMak16TWlBeE5EZ3VNRFl6SURFNE1TNDBNVGxETVRReUxqVTRJREUyTmk0MU1EVWdNVE0yTGpFMU5pQXhOVEV1TVRBMklERXlOaTQwTURJZ01UTTNMamMzT0VNeE1qTXVNRFFnTVRVd0xqWTNOeUF4TVRZdU5EWTRJREUyTWk0eE1ERWdNVEEzTGpRd01TQXhOekF1TkRBNFF6RXdNQzQyT0RNZ01UYzJMalUzTnlBNU1pNDBNakUwSURFNE1TNHdNRElnT0RNdU5URTJNaUF4T0RNdU1qRTNRemMwTGpJNE15QXhPRFV1TlRFMklEWTBMams0TlRZZ01UZzFMakkxTVNBMU5pNDJNVFk1SURFNE1pNDBNamhETkRndU1EUTFPU0F4TnprdU5UVTBJRFF3TGpRd056RWdNVGN6TGpZNE5DQXpOUzR3TlRRM0lERTJOUzQ1TkVNeU9TNDFOek01SURFMU55NDVPREVnTWpjdU1UQTJOeUF4TkRndU56WXlJREk0TGpBM016SWdNVE01TGprMk9FTXlPUzR4TXpnNElERXpNQzR5TlRrZ016UXVNek0zTmlBeE1qRXVNRGcxSURReUxqY3hNRElnTVRFMExqRTFNME0xTUM0Mk1qWTVJREV3Tnk0Mk1ERWdOakF1T0RnME1TQXhNRE11TlRZMElEY3dMamczTnpZZ01UQXpMakE0UXpnd0xqVTFOak1nTVRBeUxqWXlJRGt3TGpNMU5EZ2dNVEEwTGpneU5pQTVPUzQ1TkRjeElERXdPUzQyTWpKRE1UQTRMall6TWlBeE1UTXVPVFV6SURFeE5pNDRORE1nTVRJd0xqTTBOaUF4TWpNdU5qazVJREV5T0M0d09UVkRNVEl6TGpnME55QXhNamd1TWpjMklERXlOQzR3TURZZ01USTRMalF6T1NBeE1qUXVNVFUxSURFeU9DNDJNVGxETVRJMExqUTNOeUF4TWpZdU5ESXlJREV5TkM0Mk9EVWdNVEkwTGpFNElERXlOQzQ0TURVZ01USXhMamt6TTBNeE1qVXVORFkxSURFd09TNDRNRFlnTVRJekxqSXlNeUE1Tnk0ek16VTNJREV4T0M0ek1qZ2dPRFV1T0RJNE1WcE5NVEl3TGpjek15QXhNekF1TnpJNFF6RXhOQzR5TURrZ01USXpMak0ySURFd05pNDBNRFVnTVRFM0xqSTVPU0E1T0M0eE56QXhJREV4TXk0eE9EZERPRGt1TVRneU9DQXhNRGd1TnpBeElEZ3dMakEyTXpNZ01UQTJMalkwSURjeExqQTNOaUF4TURjdU1EWTRRell4TGprME5Ea2dNVEEzTGpVd05DQTFNaTQxTXpReElERXhNUzR5TURVZ05EVXVNamd3T1NBeE1UY3VNakl4UXpNM0xqY3hORGNnTVRJekxqUTVNeUF6TXk0d01UZzVJREV6TVM0M016VWdNekl1TURZeE55QXhOREF1TXprMVF6TXdMakk1TkRJZ01UVTJMak0yTmlBME1TNDJOVGszSURFM015NHhOekVnTlRjdU9URTJOQ0F4TnpndU5qVXhRelkxTGpVMU1EUWdNVGd4TGpJeU5pQTNOQzR3T0RBM0lERTRNUzQwTlRZZ09ESXVOVGMxT0NBeE56a3VNelE0UXprd0xqZ3pOVEVnTVRjM0xqSTROaUE1T0M0ME9ETXhJREUzTXk0eE9UVWdNVEEwTGpjeU1pQXhOamN1TkRnMVF6RXhNeTQ1TWpJZ01UVTVMakEzSURFeU1DNHpPVFFnTVRRM0xqRTBOeUF4TWpNdU1qY3pJREV6TXk0M016SkRNVEl5TGpRMUlERXpNaTQyT1NBeE1qRXVOVGszSURFek1TNDNNREVnTVRJd0xqY3pNeUF4TXpBdU56STRXaUlnWm1sc2JEMGlJMFJCUlRKRk9DSXZQZ284Y0dGMGFDQmtQU0pOTXpNdU9UazVNeUF5Tmk0Mk1EVXhURGcxTGpFek1UUWdNakF1TXpRek9FdzNOaTQzTWpJeklETXpMakV5TnpGTU5EWXVOakF3TkNBeU9TNDFNamd5VERjekxqWXhOemNnTXpjdU9EUTJPRXczTXk0Mk1EazNJRE0zTGpnMU9VdzNNeTQyTWpBeUlETTNMamcwTkRsTU9EQXVPVFE0TWlBME55NDRNRFkyVERZNExqa3dNellnTkRVdU1ERXlOMHcyTWk0NU1qazRJRFUwTGpBNU5ERk1Nek11T1RrNU15QXlOaTQyTURVeFdpSWdabWxzYkQwaUkwUkJSVEpGT0NJdlBnbzhMM04yWno0S1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci1pY29uLTEtNS02ZjYwMzc0ODFjMjg2YWMxYjViN2VkZTgwOGUwYTMxNC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLWljb24tMS02LTBkZTZkZGMwYzBiYjUwYmRhMGIzZTAzNDhlMDI4OTFmLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUMwQUFBQXRDQU1BQUFBTnhCS29BQUFDOTFCTVZFVUFBQUNabFlQQ3Q2ZS9uWW1lbW9tWmxvVzJyNTdsNDkyOHVMQ3BvcEdibG9PWmxJUFgwOGkvdDZlV2tvQ3Bvby9ZenIrZW1ZbmExY3VzcUpmTXdLeWFsWVVWSWkzbDR0N0p3YkhhMTh6SHdMS1NrSUd3cXBldW1ZZkt0YUFhSmpEajQ5Njl0cVVhS0MrZm00dmw1T0Rkd3F5c3BKVG01dUhDeGIyMnVyek1xWlJRU1VqZzN0WFp1Si9tNXVCWlMwaWFlbW5IdjdDcW9wTGJ1NlhrMzl1TGNtYkh2Ni9rMzlxQVpXRGczZGJrNHQzZDJ0REh2N0M3dGFNYUtERVNJeS9OeHJqRnZhM0R1NnpCdXFxK3RxV21vSkNnbTRzcExUUVVKVExqNE52aTM5alB5YnpMeExhMnJwMFlKaXplM05QYjE4MjRzWjZ3cXBqV3NaZXZwNWFwbzVHSWFGdFhSa1JOUHo1SFBqN2w1Ti9aMWNyVjBzYS91S2R5VlUxSE9UY2hMRFlkS2pNZ0tUQVhKQy9Jd2JIbnhhM2Z1cUc1c3FIYXM1czdOenNrTERFVkp5N1gxTW5TemNIS3c3TGp2NmFkbVlpWWxJS1dkMmg0WGxWdVZFeEFPVG8zTkRjZUp5ekp3clhhdXFDenJKbllxNWVzcFpUTnBZdUFZVnA3VzFEVHpzTHB5TERtd3FyRW9vdVNrSU91algxL2FHRjNWMDFkU2taT1JFTXlNVExrNE5ucXpybnF5N1Rqd3F6UnRKeXpySnlYbFlpeGcyK3FmV3AxVzFSdldsSmdUVXhqVFVoV1FUOHdOamhRT2pmbDR0M3R6N3JPdXFqZHZhVFFxSkdobm8zTW40bTJsSVcra0h1ZWVXdWpkMmVlZFdTWmNHR0ZZMWVBWGxGalVreGFTMGxxVUVoYlFqOHVMelltS0NybHg3SGR3cXZZdktYaHU2UGV0NXZLcnByUnE1U2xub3pGbm9xNm1vZkVtWVhCbFlDQ2dudTBqWGk2aUhhdGhuV3NnVzlwYldoYVdsaHBVazlNVUV4VVJVSmpTVUVSSXlyZjM5dmgzTk8xcjZIWHNwNjJwcHU4bjVPb201T05pSDZqZzNGdGMzQjJlRytEZVc2YmdHeURjR21WYzJTUGJXTm5XVk5kVkZGdVRVVXVMaTg3TVMzeTE4VFUwTVMydGF2cXZLbXFxSnk5cHBlam9aZWRucFdwazRXVWJsNlNaMW8wTzBIU3pML0h1S1hWckkydmw0MmNoSG1pZm15S2QycDFiV2gyYUdOY1gxNXhZMXRGUjBmejRkUEN4OFc5dmJTanBxZkRySm16b3BPdWIyU1NYRlhVTGRvUUFBQUFPWFJTVGxNQUlDRDlmKy9uSUJEbDJycXduNTl3YTJWS1NqQXdJTy92NTkvZng3K29vSUNBZ0VEdjcrL2YzOS9mMzgvUHY3K3ZuNStBY0hCZ01EQTJkbmVCQUFBRjZVbEVRVlJJeDMyVVpWaVRVUmlHUDhYdTd1N3VBdGtHQ0d3b1RHQ3dRRjJ5c1ExMXNqRnd6akdKYld3UzBpVWdxWFFqM1dGTHQ5M2Q3US9QOXdHMjNyL3Y4NXpuUGRlNVh1aDNKbzhkTTJLRW40UEQ0SkVqeDArRy9zdUFRWU9OalkwUEhmTHpLR21xckd3c21UbG13TC9kMmFjQXhzWitqVFZZSmg2UHB6K3N1dXJ4RDMvWUlDT0VVMDFoZUJZT2h3R3crRFVlSGg2RC9oWTgzTnJhK3FpMXRkOXI1M3FnSXJvOUd2c2FqRER6ai9pRlM0NWFBZTQwZGJNd09FdzlIczNBcy9CNEJ2MWhpUU9ZZU9LdjhuZ3JLMHZMUzVhbjNqTEEvZmIyOW1nMG5ZNUdNK2owOUU0SE1MVEQrSi9saVpZbkFCZHUxZUJ4c0FrOE5JUFBwTlBwVEw3WUEzNGtoNFUvNUlGRFRwZ0JMbFNpY1RoN1BKcVBUZGRvZW1nVW1waEd5OENXZU1DUE92aEg5eUZtWmhaMmRuWVh3bGc0ZXhZVHl5T1RVdVZFb2JDTjJOS1NnZzJyOFRNNmEzeG94TEErZWI2ZEhRcm1GaC8wWUtUenlIWHkrd24rY1RIUitVK2V4SFprT0ZjWndmcWd2aDRvbENIQ0hXZlFBOHVqaEtZbUpmaVh4ZVJ6SmJtNUZ4VTlyREJqUk8vdE1ucmZ2aDBJd01ZNTh5aHFUOGN6QVdYRkJJS0V3eEZ3ZlVWTS90V2oxa0FmaVVRYkdCam9JOXgxeHFHeFluSnRpT3BCUUZ3TWdjQ0pZcnR4SkxFYVpyTVZvc1BoNjNWaGJHMXRkV0c3bXhMcW1acDAzNzg0aGt2ZytHUzZ1dVVRZ3AyYkxTMkJiZ1EzbjNFWXh0VDA4T0ViVERSVFE2NEZSVTc3RjhtNEJFS09UeVpid0ZVeW00NVlnblRyNFJBMFNlODdONXdaNlJRU0tTVllSQ3lQa1hLalpia0NkcVlnVjhqM09OS3JUNGJHN2ZwQkdKYmlTVktMblhqaWp2Sm9pVlFtaTcyY0orRW9LTGNzekU3QStsaG8xSUUrSGowNlVLVkpDYTUxNmlGVHdycnJTdk9sTWlVNVBKVkkwSHFEc2pBemc5TTNRS091WHovV3h5V2FVMmRLZUpveU9DV1lSR3FUeVFwS0ZiRmFDcUg3QzBPVW5RV3N6NEttNyszbit1MXFjbldJcDZNNm8rcHpFRG0xS0pmUUhuVHZPYmZRdmNFUWhiS0E5ZUhRbnYxNzlzTUEvYkpMaUNOVnBBb05mWlovT3BSVzdoYmRkZVZka1V4dzBmM3hQaEJ1Y2VLSUZXUnVicjRIQUI5NW1oWklsUk5kNUE4U0t1TFR5RzJjbkdpZmEyeUJhMVRlNDMxOVhhRHQyNEhmZTZJMVhFbWxFdHNTRXdJUzVLSGhaM0xZYmlldlhmUHk5b2swMkFIcllGSm8rbllFNEp0ZlNWTUdVb21KRlFHSkQ2aWg1Q1FwMjlYN3BKZTNxMCtrUHF5RDZrT2dWZHE3QWNpQlhVR0JJcXJMNlFwLy8wUkhHcTJGNiticTQ1UHA3WjBGMjBpWFdkQW9iY0J1YmVTQ1ZwRUxzQVBLNHVMRGFXU0YxRTNneHZiMjhzcUsxQVc2SVFpZkEyMHkyYmtUK0VqOHJsWVhhdExwaXVLQytIQjFUMWRBRVlmRFBublNLenRTVjdjM2ZDeTBWY2ZFeEtUUE4yOFdCUWJlRDRpTGkzY01yNnVRU204S1lEc1NmRSs0Q3dvMUNZS21SdWpvOU9XZnY1b2NCRDVnSWpFMWphb29rc3E0WUU2dnpFOEhEeU8yNFJEd1krZnBBUHM0MElGOUpUa2toT3FpcXFNRnQ1ZkZjS01LdEhKY1hiTnVJemJRUndON3FBMndJeEQ5L0lVT0VzblRVWlVtcG5WOS9WSVdWNXprem83S3UzVFExbFlmRGg4SUFkYlkyT2hFSVBydUF4MHA2dG9nb2lpa21oZ3J2WGxUVU9vdThiMXRZSG9RS1E2aWtYQWJtd2dUdU16dTg2L0lhcEpuWFpkS0pWZXBGQkkzRG9HZzlWUVAyT0JWREpCbzBCem9PaWJBMTlhK291WlJLR0l5VlppWUpIUVhFTndMdEZyMEVWdGZmMzcvNWw0S1Y0ZEhQYmUveGlrTWkzVWlFUlBLaS9PNTdnM0NGMGE3OUV4TkQrcnF6b0Q2R2JySVJnZHcvTno3cXk4MVdEb0Q2K1I1cHR5L29QQ1o0NXNTUFQzRW5nWjY5RE1CTkluUU9kZm9uUEd5RnN0QW8vazhrdEpGMkZwRlM2NzgwR3RQZ0g1aUhJaldicXpIWkx4eUZQTmhQWjNIRXpzNVZWL1NNTzhDMlhZTDlBc1RwcDc3aU1kZ0tJR0J5WlIwSmhQc2VheUdFaFNkbDRIaDN6Q2ROaEg2amFITEg3SXdlSFcxWEJSRUFxbTh0NTNOOXk1ekxuYlc0eXVYZ2M1L3NJQ0ZZZkdTUldmYWxTR2taT1c5UEY5ZjN5ako1ZTc2QmNPZ3Z6RmxMZ3NMOWxSOGcxQXVieS9NbHZobVowVmRYRHNGQXZ6RFgrbENmRjVhR2k5c2lQWE56czVhdkJHVStCL2JOcSticlZXb0tGeXhlczY0U2RCdmZBTXhyOTBQVkxGVDBnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ21haWwtMmMxYTc1NjBjODhlYTgzZTZiMjU5M2NkMDdhZjhhZDgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2hlcm8tYmRkNzFiYTFiZGFiNDliMjE0ZjgxNzRhODEwNjMwNzgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhdHRlcm5CRy1mMjVhZjM4ZTM1NzA5NmNhMjMyOTBkNWY1YmNiMzM1NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGxhY2Vob2xkZXItY2ZjNGRhNzgxMGRhMjQxZTBlNmIyZDhmMzc3MmVmODQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBWUFBQUJ4bFRBMEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFkU1NVUkJWSGdCN1oxUGJGUkZITWUvTTkwV1VyR3VnbGpvWlNzWHVVRFJtS2pSdUtpbDlVU0pKeE9FY2xBVEV3UEVpMEVzVzBCaWpJWnlJUnBEMmhvdUhyUVFEclFTdzZLSm1oaGo1U0lIaUpzbVZmNjA5TkZTWE5ydUcyZm1kZHUzZjk3K25WbjN6M3lTOXUzN3Q3eCs5OHR2Zm05bTl2Y0lTZ3c3ME42R09yUUIxQStLemJBaGxuNHdCQmFQOEFQRWo0SmdGai9Ya2k4SkluSnBZeFNFM1pGTG0wWElzUXVqS0NFRUdtSDdnbjZzOHJXQjFHM24vMUtRYjJwRE9VQVFsb0l6ZGdsMzU4S2tMMnhCRTFvRVpnZGZDWEpSRDNIbnRCWHV4aExDY0laYi9TdzVjbUVBaWxFbXNIUnJVOE5lL25KZlJZaWFuZ2ovU3dZd1J3Zkp4OE1SS0tCb2dhdEUyR1FpcW9RdVNtRDJZWHMzQ0RsZVJjSW1Fd0d6ZTRzSkhRVUp6Tjd2REtDZTlTODJYTlVQd3dEbVNXOGhiczViWU5tQTBicCsvaktBMmlLQ0JYdEh2bWtlemVkZzF0T3hsNHQ3RWJVbnJpQUFILzJkOVd3N2xNOUpPUXU4K01aOXFIbElLQitSY3dvUnpodVNFQXd1V0lnYy9xNDMyMUZaQlRiaVpvQmhQemt5a3ZGL2RVYUJaYjhCanpzd2VHT1RyZVRvY05ocnQyY01scW1Zanc3QmtCbksrcVZXWHJzOVQ2eG5JcEFIWU1oR0FDdFl2OWZPdEFJN2Qyam9oaUUzR0lKU3N6U2t4R0JwOXdaV3E3bHVNVmlZdnQrYTNQV1o2dUFHZXplTXVJVWdPcjMySlc5TWNMQnhiOUdrdURqUndjYTl4WkxpNHFRUVFicGhLQkt5MTcyMkpQQmlLeGlBb1ZqODdHQm5NTDdpY2pEWkRvTWE2dGhTWjVCczVGaUlEL3ZZSzZaZ1VNVlNZK2M0ZUtFaENJTksvRmkxVWs1UmNBU21KQWlEWWxpWCtPMElUTEFaQnJWUXZPZ3NCS3hHQmk5TGl3d1J4UFQ1YW9UYVd5aVB2d0VZOUJCREd4ZTRUQ2JrVlNYVTc2dVlXVG4reDREbXg1M1gxazNnK2pXVVBSU2JmVEtEWUNoZkFwdUFyVHVkcFJ2ckJqRDBHUkM1akxLRjRXRWZkTk84QVZqNWdPTzQ2R3hlcDBwaGd6dlQ3eE9PM3ZNSkVENE5YRHlObkJEWDRXOTJsbTdFaHlWK1ZFUHdrRzk1WnJsaWhMQ3Y5emhDeFBubERIRCs4OXpQOXhMWGpUam1yOHZablJ6L1FOelg0MFpjbDdnK2xYQnQ5VGc0L3Nja08rV1pMbWRiTG81NzllMkUxZWpZRlZnL09BS3M3dHlGK2pYcmwzY0twNHR3a1FrUllyekVGVHk3UTczQUVIbHd6N1lwNVExZDEzdkFsbmFvUW9oNzdlQnJDZHRhRHd5ZzhZbW5vUXdSSW83dmhtSkVaNCtHTEtKMUUxUnk2OXVUS2RzbVI3NUNCZURQYTNabE9SRzdONE5LUUkvQWYvNEVsVFJ1VEEwRi91ZTdVQW5vYWVSRVk3SHh1YlNOeXV6NVV4ajd1ZysyYldkOEMzZU1YZDN4aG5Uc3pHL2Y4K1UwWDk4Ri93dkxBbHMvbnNINGx4OWtmRDl4Zk11Ykgza2ZrRzhLbVNPOGtldlFjNXNoeEJVcFZMeXg0MytBZGU0TGpKODdsZFBwOVd0YXNPSG9ONmhyZkREamNUWVgvaXB2QU9jbnhwRU5JYkQ3ZzFsQ2lEdjBLWERsWjZoR244QnVlR28yYzNzQ1l6Y204anF0NmNtWHNQNnRZNTRpQzNISCt0N0Y3SlZma1N1MHNRbnJXbHJnWCtWS0lYWGNaQ3hTRW9IbkYySzRPbjQ5YTFoSWgzRHkyaDN2b09tcGw3azRqdEJDMkdrZUxtNE9uY3pKdWNuVVVZckF1clZZMlZBUDNXZ1gyTGFaRkhkK1lRSEZFcis1bUovNEc4VlM3L05oUTBzekYxdnJ0NG1oUFUzNzUvYVVFbkVGUWxnVjRzcjM0dGQwYStvT2RLTlZZQkVhckJrOXJiTUtKcWRuY0M5Nkh6clJLdkQ0clVtVU96YzF1MWlid0xQY0diT2EzYUVDY1kwNlhheE5ZT3R1K1lhR1pDYnY2THZ0MWlKd2pLZGo1Ung3a3hFdWp0bDZraW5xbEdGUnkreS81UjhhM0FoRDNJdEdvUUhaWGFsZVlEMFhxeFZOcHJDMGhJajdjL09vTkhTWmdpNVZaMUpJdEFJRkZqbTdjcmkyRkxiYUdDemlXYXlBUG9mL0crZTYxVGQwd3NGS00yMjdBc1dOWTl1S1hSekRIeFNNbExSUVcwMUJtY1ZITkd4TFpUb3NlcWxhSG4wRWMvTnFPbmhLUlFPL2JuSHRTckV4NnVNMkhsVTljSlRRbVYzTCtGakUrUkpNS1VZMWFoQnllSVFzeGdabTRyQnFSSDFNTEFWZmNna0d0ZkFNUWl3Y2dXMmlmbEpXemNQQzRyY2pzQzg2cXFQVHA2YTVPeGNXQ3lrd0NZVXRFSk1QSytSc3ZLVEJjZ0ljSTFscmdCbHloQzJIM01TQ0hEcW1zdFllRVo2ZXRjWlhrbS9oVHNCUUpHVFF2WllvTUozck00MWRVVVM0b2dQdURRa0N5OGJPdUxnSXlDQUpKZFlZVHUzbE1TNHVsQlQzQ2xJRWxpNW1kRDhNK2NGSWI3SjdCWjR6MzlpaGpvdm1XL2c1UWpCQWVrZjJwTnZsM1JGTWlEZ2hBa00ySWx3cnozdUl6T1Z0UmZVa0tndlZHYnlnOWhZUzhxN3JubkVvUTliRlpURHgyQk1SZHpNWHpjODZWdVJVZURhMzBhbHdjUThQaDdJZWhSeGhQWjBoMGZUQmdGekZsVWNpRDR6SXlLbHV1NXY4SDFRU2FtK0RMVXVQQjFCYlJQakF4SjVNOWRyVGtmZDR2UXpxbEd6bFVnK2lWbUI4ZkkxbUxvYnZSWkVQaStyc0Jxbm1XdTlNM3RXU0k4TURLSkRpSDNjVzZnekFGdlhlV1JYVkhoWjlNZlFFYUxSdnNRT3NZTlE5c0s4cWhGWW5iQnc5ajV3VW9ZT3k3VHgyVmNCWDRrVVk0T09Sb3JPbWdCaWJEYjBQVFJWbGMwVmxWMUY4MUtsdUZVUlpJQ2Jha0V0eXVnSWZVVmZsMW5Uby9SNXBHbVNhdDBBQ1RrRThQdjRYTDB5cTU3Ry9sdnl4eFNRUXZyMHVOcHJ0MWxZMS93R0xTTFFvSERGR3hBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGZ0FBQUJZQ0FZQUFBQnhsVEEwQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWR6U1VSQlZIZ0I3WjFMakJSVkZJYi82aG5IU1NCeDJLZ0pMQnBNY0lNQ2JoQmlZa01nVEV6TTRCTEh4R0hsUWhNZUpyb3l6T2hLRXhVU1hiaGlpSU82WTlqZ0dGQ2FhRlEyT2lJYlNJQmE2RUkzREltRWg5RGwrYnZxRHRXMzY5bFZ0eDI2NzVmMG83cXI2M2I5OTlTNTU1NnFQdTJneSt3NDVtMFlBRFo0RGtZY0IrdWJqeDVHNUswcTMvZTg1dXNqNkFENTdJSjhkaUZZZEp1dk9aaDM3dUc2dkQ1LzE0TjdhdHlaUnhkeFlKRGFFVzlrZUZERWZBaGpGVmtVQVRaZ2FWQ244SlVHenQ2OGpYcDlqN01BUXhnUmVQUnpyNFpCSEtTZ25WcGpOeEd4WjhYS1Q4eU5POU1vbWRJRWJscnJNUGFLcVBzZUJGRmpjT1UyTGJlamM3c2RGeVZRV09BZUVWYkhSVWxDRnhKNDlKZzNJWWZYeHowa3JJNkxCcWFLdUk2T0JCNzkwcXZLd3hHNTFkQWZUTXR0cWhOcnppMXdNSUJSM0NyNkMvZGVBeS9sRGZNcWVWYmUrWlczVjhROWcvNFRsMVFIS3ZoVmp0NkRlVDZVV1dCdVdDWUVoMkNaekNOeUpoY1JiSEFTbGpDVDRwT24wbFpLRmRpS0c0OGMwZnUvZnRsSlBLb1RCWDVCOGdZTjhUdXdKTEZWTExrZTkyYXNEMllvSnVJZWh5V05JMEhZR2tuU0lFZlhVSVVsalNyOE9VRWtrUUp6aGlZUEU3QmtwUlpvMWthYkR3N012VjlqM1k1aEh2cm1UYXpXVTU5UkZ2d3FyTGk1NFltQzRTSHMwMTl2c1dCcnZjV0lzbUxkZ3EzMUZpREtpbldCSjJBcGhET0F2ZUhsUllHRFViQUtTeUZveGVKcWEycDVVV0J2QUdPd2xNVmlNcWc1eUFXbmZhN0JVZ3Jod2E1cHdVTVA5ODJaaWE3UUhPeUcvVXNVbWdJUDlNK3BuNjRoSXUvaVkxTmdPWEc1SHBaeXFlQjUvOEduQmt1cE9NRlZURTd6V2pHYjh6V0NuQ1RkV0pFUnJ3cUxFWGlSWTZXeWRDN0k2emw0UVU2bGg2L0srZDloOEZDeEVZUTVQR0JGcmd0UExQbVFhZklqZytoaWd1ZXBSNEhOSzRFdHE0RGxROEN5aDRBYi93S1hyL20zRTVlQXYyNmdFR3pqNmFDZHg1ZjdiUkJ1LzRwa2FVOWRCWDcvRzkyaTZram01eW9NaTh5ZGZtV2R2K05wVUlCakYvSUwvZGd5NE1DbWJHMXcyeCtkQTg2YkY5cDFkbjdoWFRNNTBJMnY4OFhOQXdWNDkzdmY0ckx3eEFyZy9XMzNyVFVyTXhmOHpqUUZrejYwWUErR2lCT1hib0VpL25QSGR4VnJZcnIzczErQTJVdElaUHRxNE0xTjBlK3hnOWdHWVNkRWRZQnBrUWRoaUIycjI4V2xxTnlobi83d1JWYnc4T2I2NDlyNnJ6MGpvZ3pGQ3hEVmdkenU3RVhnK01YV050UjM0bWZZbm9LZnAwODI1UzZNUlJHNldCeGtYcDhEVGw5dDMzRWwvQnZmdFB2ZXVHdTc2RytqT3ZEdDcveHQ2VzBRK25lK3I3dWVBekZIUUJrWUVaaVdFcllTN3ZoN1AwVHZkQmgyQWdWUUl0TkZ6R2pXeThQOGs1MStHMkdVdUpkVFRodHd2YmUrYmUxSWZ0Zk5xMkFFSXdJL3U3SjFlU1pIVktDRTRrMzN2eFRpMDFIZm40Ymg0YzJqSTJzYlRUZWliVnZ2c0xJd0lqRGp6ekQwdVhtZ1VMcFBaS2hIY2NOSEJxRy9aV2VrSFIwNnA2NjBMcTh4RkVjWkdlVENYNVppNWQxNW5WMVB5b0Mzc2YxMURuNHpIVVlBS3BKUkhhWjNYRmtZaXlMS0lpN1U0MFNCZzlaU3g0akF1bVdvS1hGZWFMVzAzakRjVHBiQkxBMStwN0RWWnAzVTVNV0lEOVozUHU4QXdwM256RXdYbHgzSHdVemZQdjF6M2xuY2xsWHQyemFCRVlGUHU2M0xGQ3FyQUNwUzBITUtLbzdXaGVDMlA5Z1dQUUFtdGFISDZUL21ISWl6WWtSZ1JnMTZuRW1MVEJOQTVSVDA5VGc1NFNSRWR6TVVTUTErV2R0Z1I3L3pYSHVjZnRxUVB6YzJrK01nRkVhSnR6M0NYWENuS1ZhVVFJd1VQandYMlVUYkxJK2ZuWDZ4ZlRxczJxQ3Jpb3FqWjB3bWZFd21lemo2ajhja2U1UWY1WTdyTzZ6SWt1elp0ZGJQV1VUQk50Z1cyd2puaHNNVUNmV3lZRHhkR1NkeUVoU0Y2Y3FzQ1JoMmtIN1laOEc0dUVHNjBuakNuUU1XRXlwWkJLQ29kQytkSk56WmtWa2lGclpCY2J1U2NPK0d3QW9LVFI5TWkxT3pQVFdqNHNCNHZvUzBJWVVlVyt1M29YTEFiSU41WVVZS1AvL1pGV0VWVFlINW00d2FMQ2FvODdTOXNZcExGZ25UbkFhdXcySUVpYzkrcTBpTTF0VkNiZjJFNDJHaHdqdFlqTkJnOGJ0NzFvS05JUzdDYmM0MlRjN20rcG01M1k3ai80VEFzMVpzZ0RydktzSGRXVmhLaFJFRUg5V1BZR1poS1JVdmJNRzNibUhlczlGRXFkeTVIUktZdjBoa0FXTllTa0dzOTRRcWFSQk91S2ZXQUxOa1EwS3oyZER6KzVqT0RmY0pyb1JuaTBuVGxsTkdNcXM3REV0UmpvWVhXZ1MrZFFlSDdHQlhDQmQrS2R4RldnUnVEbmJXaW92UVZqRzc3YXl5dGVLT2NhRlpMMmtUT0FqWjlzT1NsOGdLMmJIRlFlMnBwRnhNaTdoN290NUl1dkNFSDNCaFNjTkZ3aHdpc2J4dFVEM3BEQ3l4VkJyWWVES2hybnZpcFZPc2k4c2l4TERFTVhVeXBXaCs2clZwUVlWbk80MXVoNFBhWk5wS21mL21RZHpGSkVMMXdQcWNUT0tTekFJVEszSzJ1dTB0NnlNblFWMTNsaDZ2b3I5dzViWW5xVjU3RkxtdkR3NmMrbFpKZWg1Ri8xQkhTakg4T0hKYmNCaHhHUlBvNFZydndUOHM3aGRocDlFaGhRUW1RVkhuQ2ZSUTdlRkEyTU55S3UxUTBYOUxMQ3l3b2hlRUxsTllSV2tDaDZIcmtDODZwdW8zTG1VQ1VUbXVUSFhpWTlNd0lyQ0NaWE5aMlZVYXFUbCtkYXNhbGdEQmhUWm41VHZOOG96NkEvZW5xVWt3ekx2cm9NcUNlT3F2ZjRPM3Fyd3I4MjkvK1p5djhTSVFQcGU4d2Z6Skx2L3Q3MzhoOTlreGlWN0Znd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBWUFBQUJ4bFRBMEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFhRVNVUkJWSGdCN1oxYmJ4TkhGTWYvTTc2VUVOSWFIb3BhZ1dSYUZTazhOS1lrU05DSG1rOEEvUVFOYjVXNDVndVUwQzhRb0kzVXQ0WlBVSGp0QythbFNPR1NwWDBBdFFKWmdLQXRGWmdtSVlrdk01Mnp0bFBmcnp1ekczdCtFbDZ2dlY2YnY4NmVQWFBtNUF5RFlSS0w4d21FQ2drSXhEZ1BUVUFpSmlGajZxMTQ4UWg2em1Mb0NabFJuODJVZHRMMHdCZ2NJZVFicUMwRVR6dUhUemt3Q0lOR0VrdHpNZVREQ2M3WmNTbVJwSmNRREZLdThGTGVSQ2lmY2c3T1pLQUpMUUluYm4rWFpJeGRVQmFWNk4wYXpjSEFyZ2xSdU80Y1Byc0FqL0ZNWUxKV0xxTG5wQlRudDRLb1RVZ3J3MWdRMmV4VjU4aE1HaDdRdDhBREltd3RuZ25kbDhDSnUxZW1tV1J6QXlSc0xXa3B4TVYrWEVkUEFpZHV6Y1ZaSlBLamVwckVFS0J1aU1xYWN4ZDdzZWF1QlM3ZHdFamNPSVlMWmMzc3kyN0RQTjdOd1lmdXpKOVQ0dDdBOElsTHhCbVhTNS9kbmIvUXpZYzZGcGhPTENBdlljaVJVczUySTNKSExvSk9TQ2VHWlJOMUpjL2VPM1RxWXR2ajJoMWd4VzJPR3AzT09GT25XMTdWTFFWT0xNNGxHSThzd2RJVVpYekhuS2t6cVdidk4vWEJiaWpHSXovQjBoS0txRWlyWnU4M0ZaaEhJdVRJNDdDMG96d21hRWhEZ1dtRUpvRnBXRG9sbVZpOE10M29qVG9mWEJxbERXdXMydzhaR2NydHEwMTkxbGt3ajBhL2doVzNGeWozZmI3MnhTb0x0dGJiTjNWV1hHWEIxbnI3cHM2S3F3UldNZDAwTEgyaHdyWnpsZnViQWxQa0FHdTlYaENqakdONVoxTmdMdGx4V0R5aE9COVplazRQTk8zRENwSFhzSGpGNXMwdTdPNFd3a240d01ydFA3RDI4QWwwTWpLK0Z6c205OE13YnJtQzJxYktMaUlKdzJUL2ZLMWRYR0x0d1ZQay92TGg0bVE0UVJ0ZWZNNG1ZQml4dWdaVEZGYk1mVmNacGVrWHRQWE5nb2NBdDRxSnU3VmlGaTJRdGh4Y3hHSFJSRUVKTEFOVGtEZDRNQjdqeWh2N1VwVVQyakVDVTVqOHJpbzRtd2o3RVVFUWtkMDdNVHF4RHh0UC9vSEk1cUNMN1FmMnV0L2xDMEx1RE1OSHRuLzZrZnR2VUdFTTcxR1lGb2RGRDR6RmpWZ3dqZHF5ejE0cWQvQVNmc09qWVlSM2plR2RqejlBMUlEcklJRzEzZVNrOHEzTEt0K3c4ZmdGZ29KWUJmS3ZWN0QrNkFXMktaRkhKejlSb2tlZ0JTbGo1Q0swQ2J6OHk0TkFpVnNMaWZ4djZqZG9KTlpWZFdVMzBJL2ZlT3EvUzJnSEpZTGVxb1NRTHJRSi9QYlh4d2dTRktwUjZqS3l1LzZDM1hqOEhMclFjcE9UMmJ6S1lLMGpLSkN2SFR0NllITi85Yzd2VlZhYmY3V0N3dW82UXFQYjREVmFMRGozYWhsQm90WnFHdzA4aEthVXBqWVhFU1NFdXFMOFlpZ0VYbi80Rk5uU3JBYkY1Q3ZLUlpqQzE2R3lLZWgrOE9ibmUvQ0RvYkJnUDdFQ2E4WUtySmxBK2VCYjMveUFQYnZlUno4OGUvVTNqbno3TllKQ29DeTRYM0c5T29lWFdCZWhHUkpZVzdjUEN6SldZSjB3bHRIaUlrTFJMVGgrMGZTYlNlQTBQQ2FrcG1TMnE5VGdWc0ZOWSs0Y2crZEltVmJUOWpJak5mUkdHcDNjanhHYU1jN1ZKMXJLK1FCcEtBbkRSMGZ3N3Vmamplc2pJbUYzbms0WFlRRzgwZFhieS8zaERYNDg1V2RKWEZOSmw1SHhQYjdVUmtqSSt4eVNHVzNVVm9aRlF6QUY5K3VlSUNtSzRNSkdFYnBnY0RnS0lWOHN1QkUwekEzQ09UeEQ4TFRyZmcvZStWN0NNT3VQbnJ2VCtpWVlPenF1L1A2SE1NM1M1R2xXam9NRFk4VURSSW9lWElIVjNlNG1ERFBvNWFzVVFkQ1dsL2F1d1RBVU5wa1lqQlJySVh3cFgwM1JRekYrQ2VjZEZDSVVUUmd0eHFiQnlLajV2MkV6UXlpZm9vMXJ3YVUvdjdkKzJDT2t4UFZ5U3dQKy80dXliUTh3UzRkSXNlbHlxMGJKS2x5ajRvRkI3YVJxaXJRS3ovYVZkMnI3UlZ5R3BTK1VobGNyOTZ2endlRThkYkd6UStmZVNTT2ZYNmg4b1VwZ2NzeldpbnVIckxlMngzRDlqSWExNGw2cHMxNmlUbURYaXBtWWdhVXIzRmJrRFRwa044MjFxNGlDMm5zbFlXbUxaRmh3RHAwKzJlaTlwcE9lTXBlakQ2UmhhVWNhMlZ6VE1VVHI5cmJGZnUwM1lHbUtGTG1EenVHWnBxUGdsdFAyMUJkWFN1dVBtMEdqMzFiaUVtM3JJcHlwczVmc01Mb2VWOXlwTTdQdGp1dDRRbG01aTluS2ZtRERUS2ZpRWwzTjJGdVJPK3ZiWGtuM0M1VXN6aWNZbDlSNlBJN2hJcTBzOTJTcmZ1Mk42TG8yalZaQ1VTSGNNU21xa3hvRFRvcit6OTJLUzNpd1dCUWY0Rjd2TXFNTWFjYjRZbEdWdUIzNHcrRnA1WnNIcVBld0VsYmlNdVZsK2wwdDBic0Yrd1pDYU8rRUxhTm55VW5sT3JnTUhWZFQxeWNRZU55RlZwMVM2SldDeCtncXJIUnhGMDB0ZG5aTmxycGJKUkVNSExjV2hNb1YxSXo2bGxzMHRSVnVLMGZxTmtnTjhSaGlGVzNGNHNXTmQ4ditNbnJPa0JHaWNGL0ZTeG1xd3pPOTdPOS9vRStJbzNvWEJtRUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUh6U1VSQlZIZ0JyVlZQS0h4UkZEN25tcHFmZnFuWktLTm90aVIvdHY1a3JKR3hFVlpqWlNqRlRpZ2tTeUVMWmpXejgyOHpRckl5ZzJ4TlVRcUxHWW9OcFF5YTBiemozR2RtTVBQdW13VmZ2VzdmZmZkOTU5eHo3djBlZ2dHY0xwOHRYdmptUmhETlRHc1J3Q0huQ1NEQ1F4aUl0azdXQnZ4RzMyTDJSRk9YMTZWWk5COFEyc0FjRVNLYXpoWXUrRTRhZXJ6ekpHaUI0L3lEL0xBaG9xdXN1aDF1ejNaQ09ZTDEzZDVKUkJwVmZXMHZMb0tpLzFiZUVrTGlQWm1aNXkwNnkydmFiQ3k2bitKU2JObk4wWHdxb2FXSmRpamhVZUwwNGc2R1pyWnoxb2trZGg1dDlBZkVaeGljQkFYRytsc3lZbWJRQ3NBbm0yblJzMHQxMFFoMWxYWjl2SW8rd3RqY3Zva2s4Y2xJdUMyQW9rTS9FSGtRZTQzRC9jT3o2Um9relNsVTJkVlZsc0xtWXU4WHIvams0eDZuV2hDeGhtdEl0YW9GOXF6YTJmUFgwaUZVYjY0aUR6QzdjdkRGdVlhU3IrK2RnUmxFNmpybElQYWFnTDNEeTI4OHJ2TnJGbFlDSWN3WlloaitDS1JSbEROTWh1RHZFQkJXYTl6UC9YNkMzeU1palVJRS9TTlBncWdQZmducFBITFV1M3kwT2hqZzg3aG90RkFlWnZuRVhoSktNVGFWakkzOThNUEc3dVVwTXJuWGhtS2N5UEdxWnpqTmYvamh6Zmx1c0t5cU5jb2hwVXViR3l6WFhTUkZ6L0c2WnlFcmdER2thYkJ3Qi91ZkkzMmIwcjhBQWkxa2ZTdjBCd045T2MzOEFPSWp0aFhjeHZwbkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVZDQVlBQUFCRzFjNm9BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSWRTVVJCVkhnQmxWU3hWdHRBRU53OTZSbEgrQkVSUzBBcGYwRlUwc1YwNlhDWkxyaExGMUlsSGJnTFZad3ZDUG1DSkdXcW1DNGxaVHJrRG94NFR4UW9pVzM1bUxNRVB0c0l5MVA0ZEh1emMzZnIyU01xQUJ1Z2d1QThBZE1VZTh4aWwxbjZvR1dDTXBLU1R6RitIUXlTVGhSRndVSkIxMzMybHBrUEp5SjVrQUY0bnk4dXdyWWVOZlRKeG9iN0JhUVBFQ3ZUUW93M2ZHbFpsaDNIOGM4NVFkZDFQakhURzFvU3lObTJyQ2RlSFAvOWNTL291bFhVaXo5bVZ6bVdNbW1DK2greGJZd0Jnb0dVOUFmMVZLZjZoOWhSdno5c0dnYXY0OXNIejY5VXJPdWJtL2czcDFldG5tSEJ5elp0OVhyaFlZSERJYzlSdklOc0dtR1RtbENuMDhRSS8ySmhpMGdwZGE2OXNtTHVDZFJnVnljWnhxQmRVQS9jcEQyOUFkVUZ4cm9XNkp5Znozc3JENHFyY2lZUmZpNTB2NkhvQVMwSjVIUW5NK21KbWVWMVdoNVA5WW5JYkhHSEY3UThmTzM3RklLakV5MWdiMjQ2KzFRUXFrMTFod0JkbzF5MlNBaCtwUnFmVXRNMlZsY3Rna2xQOG9UVTQ3RzJWbmsvYVlZVXNOR1JabXljZFpRMG1jMERXS21ldml6MC9mTHlxcWtuZ2Z1TnhzNlk5YXNNZXIycm1raUZXTFdhSjRRSk1yOVR0VWhKNG5yMmROaWsrOUJMaEhocm5LRit3akRzWUZBQkVPVnJ0TkJPdjUvVUhqSTVyaG5SUEZxNHlmRzlvRUxXdnkxY2Q3OVVNczVLSmZQWGNDZ2F0QmhUdlQvbFE3V0F3cXFhcVZQNFFvaEgrbG9Hb3hIdEZIMUlxRnF0Tmx6WDltZmpXMXUyNXpoT1BTL3ZGZ1pXd1doUkhUQzBBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFSQ0FZQUFBRGRSSXkrQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUdwU1VSQlZIZ0JuWlJMVHNNd0VJYi9jVnVFeENibEpiRUxKNkhjSUlnR3dRcHlBc1FKVUc4QUo2Q3NBS1dJY0lMMkJwUVRORHNXdklJRUVtb1NEM1lvSlNsdFV2b3ZFbnRtOG5tY0dadWdaSjMxRE05WkQxQ2d1dnRZSXlvZkExeFQwd0RFWHRqdk43eTlOVC94TVFla0ErM1dhenNNUHgzdG1BVGJ2bnF5UkVuYy9IRVFmTERDRU1QZFhseW4zWXRYTTY1d1R6dFl4azdMWHVtTUE5clhMejB3ekFuckpka0tpWHN4TktsZ29sTGJ2bjQrc3k0ZXpOR3Q1c0MwRE1sNHU3S1hUZ1piZm1tclZ5MjdGVzdLaUc5akdYWXJwWklCVWI3TEFjS3RMeVlzMGdXcExDeVk2Z01OTlRDYkFnV3M2b0dZbnplTUJFWW9yUElrTWREOUdZdkx2YW9QYmNqL1J3VkF2aDhDazZlTWpvRFpNeVNXWGdibzdxeDJtZU10bFhvSC81VnF0M1NyL2JZTlJJMUdLejJOWXRuSThsT3F1MDlOSXJHUDZkTnJ1dldxazdhSTlLUmxMeDlBU2gzUVFTRUxmaGlpTVdvV293WW05bFd3aVh4MXd6NXRldDhka2wxSG4rVm9UaDRTaEFGbUMvbk5IVER6YWZRdVRqeW5Hb3hQSElPekNuRkFnalltOUtPdlFPZDVvQXd3TGV2bXdTeEhaVE54cXZzdC9LajRSWkMwdmdCTmNMTHFBVnUxOHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQVNDQVlBQUFCclhPOHhBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRGxTVVJCVkhnQmxaQzdEY0l3RUVBdnhoUjBqTUFJc0FrYmdEZElBUUVxb09FYkNaakFmQWFCRGNnR3lRYWtRVWlSY29lakpDSkZRdXhYdURqcjZkbG5qZGJ5ekhqakZiM2o1WEVoUXRDRUpRY2gyYzBXZTlwcjJURVNNenBOeG54bmY1dWJpcERXY1RIZVh2eTZPcXVZMTlhcnhHSzk5TzkveFl5dXFqK2RyYlJOeFlRMkFUdU1kMWVaMTNYRkZLS2hxdCtkbGV5YmlRa1d0TkdDMEVna29rY2p4cDQ3RXcrdVphZ0NFUzdkcVRqbW8xb3hxWEFrc1ptSm9Eam5KaFVkMFFOQTRVNkVWM0ZmSWhLYzl0T0JEVFh3MzhzZ1FGUVZ0VEhRZ09XVjZKT3VHVFQ1QXFXclpzZzNrd2xpQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlcjEtYzdhNTdlMjcyMmJiYjlmODQ3Yzc2NzVmMjZhZWNlMTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlcjItNDFhYzk0ZDhiMGZlZTM5MTBhMTI1NjNmYjY5NTdhOTMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlcjMtMTQzYTMwY2Y3MzIzZWVlNDNlYjRjMWRkMzhhMTcwYjkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlcjQtODA2YTJiZTZkZTY0ZDQwMDk4Y2RjMWYwNjlhM2I2MGEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTklBQUFBb0NBWUFBQUNMa0tROUFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUM0akFBQXVJd0Y0cFQ5MkFBQUFCM1JKVFVVSDVnSVRFQndTUFUxMlN3QUFFUzlKUkVGVWVOcnRuSG1jWFdWNXg3K3paWkpKWnB6TWhLeG9JQUUwSzhtd3RDeXBFV3habEpwYWk2MmcwcGJxeDZWQmFtMExLdFdLMVk5TGE0T1dXbkNoZ3JVZ2FJR3dOQWpZRUtLVUVCS3lBSkd3SnBrSjJTYVRtY2xNWnU3MGo5L3p6bm5QZTg2OWMyOW1KbVBpK1gwKzk1UE1PZWQ5Ny9zKzc3TS96N21RSVVPR0RCa3laTWlRSVVPR0RCa2N5a1o2QVVjQzh4Y3VLM2gvL2RxbEk3M0VERWM1S3YwL0NqSGNNY0pzWmNBWSsvOUJJRGZTQ3pwYU1XM0NsWG52YmR0MTgwZ3Y3NGlqM1AzSEU2SktZQzd3TzhBTWpoMnJWUVg4S2ZBbzhCandDYUJtcEJkMU5NSVRvbXBnSWJBSU9INmsxeldTS0UvNSs0K0Fud0lQQVQ4QzNqN1NpeHdpekFhK0FKeUJEdi9Ud0Z0SGVsRkhNVVlCZndIY2kzamwrOERwSTcyb2tVSW9TS09CRHdNemtRWS9BL2d6b0h5Z09PTW93R3lnMGZ1N0RqaDFwQmQxRktNUitBZ3dGUW5WK2NCN29iRGJkNndpRktRM0FDY0UxMlp5YkxoQVZTbDdQeGIyTlZKb0pPbk9uVVFRZC8rbUlCU2tNVUJGY0swU1dhcWpIWDBqdllCakREVWsrV2NVaXB0KzQxQSsrQ2t5Wk1oUUdjUSszU1ExZDg2dUo5TGpZVXE4bERpcWxIVDZjTTFieXZ6aHZBUEZBZmxTd0tXa2pVdUpOWXBOT1E5bXptRHNJUXJ3aXY5czJ0cUdhbStEaWNmY3ZLWE9rYlllNTg5T0FuNFhtQVhVQnM5TUJxNEMyb0VXNEFGZ3QvOUF3SWhWd0p0UmJIVWlrZFhiQTJ3RW5nZGEvVEZwekovQzNMWElCeitadUcvZURHd0NuZ002M2JqREVLampnVG4yQVRIRjg4RFR3UFk4ODVZQjg0QnpFV005QUx5YTd3dThBenNPdUJpb1I2bjROWG1lSzVxZUpUTHVST0F0Nkx6SGVudDVBZGhpL3g3TXcyQW5BT2NCODVFcjUyTW04RWtrVEM4RER3SUhDcXlqQmlXQlRrRjg1dkFhT3M5ZkFlMzU5dVpkcjBUbG1nVTI5aUdqenlqdmZDb1IvNjRHWGdSeXdWcktnT2xHNjFPSVl1bys0Qm5nSmZ2MHBLMm4wZ1pjYlorUU1BRFRnSCt3LzNjQ1g3Vy9leUhHOEtPQnMxR1c3d3pFTE9POWVicUFiWFpRdHdFL0NZbWNCN1hBTzRBcjdLQW1FUmYyRG1BN3NCbTRGZmdmWU4vOGhjdUtFYVljeXQ1ZENmeXhFWEtpZDMrWEVlL2J0dWJPWU41NXdIZFEyamNIZkJmVnA5b1RSSXlJWHdWOEhMalc2TDhHWlVyWEJNOE5HVDI5T1J1Qjl3UHZzYjFPSmU3ZTcwWE05aXp3UStDK1lDODF3T2RzanJTd1lCYndKZnYvUGxSaStOZVVkWXhIaXVReXhMaVRpQVFhb0EzWUFXd0ZiZ0dXMjdWOE9CLzRGdUtQZGxUbXVNSG8rbEdrZ0VIOHV3VzR5Kzd2c2VzbkFYOE9YSUQ0ZldJd2Z6UHdPdkNrcldjVjBPTS9VRFovNGJJNnU3bUU0bkFYWXJwRDNyVUdKSWhMRVdNT2hBUEFqMjNEV3lIUzlJRWxtZzE4QnZqOWdORDUwQVg4RjNDOUVjekgrNEdiaUlMaFhzU0F2ZWhBUnhXWXR3MzRDdkIxT3d4MnY3b2VPNlJsUkFtYXZjQzdnSldRVjN2T0EvNGJXUmVNamxjalJoZ3llcWE0TFcrMFBmd2h5UXhtdmozZmlnUm5wMTJiQ053RG5GbkVlSUJ2QW44WlhKc0YvRDNpdDJJU0UrMUdyODhqNjR2Ym4rMnRFdmdHOERGdnpDUElLdjBOeWtTSDZBYisxc2FkRHZ3TFVsckZvQm40SjNUdVhXNHRsY0IrcEZXUFEyWjdNdkhNWFRmU1VyM0FCdUJyeElXb0ZtbWVqeExQN25VakY3QUxIVndEVVh2T09HUmhhcEYyYms2eElDZmJnaThJTnRLRk5FbmF2TlhBQjJ3dkgwTW1QQi9LZ1hjVFpaOTJFMm4wUmx1anY4ZS9BcDVBRnM5aHU2M0RwZEhyZ1Vzd1FjcURDNG1FQ1B2T1Y0YWFudE1tWE9rTGNnMWluRXVKVzVMOXlITGtqSFlUdmJPdkJUNkVHUGxhTy9OZHlNSlVFR2x1Zjc1T3BMbDdnVjhDL3hicy9SU2tNTjRXWE8rME16MWs2MmdnRXJLeHdQdU10cDhncVNEcmJDMCtGdG9uVFloQVN2TVVaSW11Snk1RWZiWVd4d3MxaUo4Y0ppUGx2Z3Y0bnJ2b2lMRGNEdmlkU0doOFBHc2JYNGdLYnF1RCs1ZWxIUHByd0hVMmJnSHlVYThHbmdyR0xrRkZ2U3FJV1NOMzhLRVFiYkZEWFd6ekxnTCtHc1ZJUGk1Q0RCV204bjJVSVFZOGFBVDVBK0Ewb01uR3ZoQThQeDUxZmZoMWtsK2dPTVdmY3pFbUtDa3hScjNSMk1kNjRQSGhvS2YzL2ZQdDdOeDU1MUQ4OGtHa2tSZmEzRjlEZ3VCUWdTelliRy9jRDJ5UGx5TzMyc2RqaUNtYlVEdVdUNXM2Ync4K25rRkthcEh0YlRGd0RYTFZmVnlNZUNLcy9aV1R0TEQxOXVrQUhrWXU5My9hZDNVaFB2cUowZkU4YjF3SDhCK0lGNXd3dmhOWlpuK3ZkVWk0SjdrTGppbjZrQVMya216azdFRmFheDlKbkdBRTh3OTlIL0FwNEhadnJsWVVaMndDYmlRSzZDc1E0OXdlRVAxY1pDMTgvQW94ejNMdldpdlNrT3RzL2puZXZkOEQvcEVnTVJJZ2g2enhaMjB1aDF1UTRIeVp1UHR4dWgza2Z2dTdCYmtkWjNqUHpBSitDODhhZWd4OXV0MTM2QVh1OU5ZNFhQU2NUZHhGUElEY3ZJZUQ3L2tzaXJ1K1RNU3dZNEt4T1J1L255UU9JZmUySStYZWVTalc5ZkVzaW1OODVkeUtYTGhOeURVOHlidjNidFMrZG0rZ3BOSnFoRjNJWmZzR2NrMHJrUlU2QWJsbm00RXZFaGZDRjFIOHY5Vzc5Z1J5VDF1UmduTzlwN1ZFSGdIbDY5Y3U5VjJxdEFiVk1uYzllQmJnSE5UZzZ1TWV4Rnc1TjhiRFN1QU80c0o2SW5DVzk3ZnI5L01ENjBPSWNmcUZLSmgzRlRLM3ZqWGRpYVZpQzJDZEhWWnJ5cHcvSTJtZHh3WHI2a09adWhlQ1o5NkJNV0tRWkxpRXVKdndITENpRkhvR0dibGk2Sm1HYW50bVhIRDlFTkxlWDBldVM2dDkvMGIzM2Q3MzUydG1Ma3Q1ZGd5S0hldTk1M3JRbWZZTFViQzNCKzIrSDBhTVIxYTNtUHJuQmhUSHVQaXVCd25uZmNpUzk2U01hUUIrbTZRbnN3OHA1ZHVRcTdzZFdiUWQ3b0hCRkdTcmlEUzBUNXdIc0lBY1V0UFl2MEJheTEvRFhHL3hVNUNKOTlFQzNPMytjQXdmTVA1OXlDWFlnQUxOejFNNDB3UEt5UG5heDUvejVaVHhWU1NaYnlNU1pCOXZSVmt4SHpOUmRzbkhDdS83aTZKbmlyczRFRDFCMmFhZDN0L1ZLQkMvRGJteFp3TVRFTU8zSTZaNUQ0cXByaUhLYmgwdWprZHVrbzlYMERrQmtSQUZ3blIzc0c1UWYrU1VJcjV6SmVhbU9xRU9oUHVRMGE3VEd6TUZ1YmMzSTg5Z1BoTGVhaVE4VnlFbGZ5bFN3RjF1NEdENm9zWUNid3F1ZGFOMDVydElqMC82a0drTlRmRnhpQUY2amVnTndmM25rVGxPcExUWHIxM3FoTFViK2JmM0dwSDJGYkdIVnpITmxKSXE3NmJBKzBwZTF1Z2c2cEpmUXVRQ1RVWkM0L3Y1WjZIYWpjTU9sQUYxVm5PNDZJbXQ0d1prdFYzcG9BNWxReTlFd3JNVCtEOWtwWjlBOFVTL0FBM3lIYU42bEdyM3NZV2trSVMwYlVIdWxwOU1jRDErMndwOFh4K3lQcjBVeHM5UXpIY2xrVkdaZ2hJMzcwVXU2c3RHbDZmdDMwZlFtY2ZvTWhoQnFpUlp2SzFCQVdXcDJPWnR1cDZrMW04aDNSUURNV0hxSlI0cysvZEM1RWgzNllwZmRIVGdqOXZuUXJ0VmhRcmN0eUNyTmhveHJTOE1hNUNsR0c1NmdoVEx0Mnd0SDBleGdqdjdVZllaajRUMmN1VFdyVUZ1NDUzQXZpQUxXQ3BxaUx0MUlDSHRkSFRNZzE2U3dsYk53S1dRUGdvVXhyMXoyMjMwM1dQN25rYmtzbzZ4VHlOS25vQ0U2cGNvK2ZBZzBPM29NaGpYcm96QmQvcTJJYmVvUHdhd09VUHRtOWE2VkJTTzBPc2ZyU2dJOXYzNTA0aGMxRk5SQXNMQjFidjhvSHhZNk9reGFUdEtSeTlCV2JLSFVBSW5EUk5ReHZRR0ZHZE1oVUcxNC9USDJSNzZHTDVHNGs0R2NPczl1clFnWVZxQzZuQ1BveXhwR3FZanQrNzdLSHM4enRGbE1BZlhRN0tDMzRiOHkrY29uSHAyaEd4RzV0SmYrSDdFWVA2N1ExTXB3R1RCMjcxbklyZmxDUWJ2MjVlQ1IxQzh0TUQrbm9ZeVZhdFFCdEd2bHE4RGZnNHg3VGdzOUV4aC9pMzJ1UVhWNmhhZ21HcUIwVzRNY2ExOEdkTGNuMGxaWDdIb1FNckdQOU42bS85QUFXdFhUdExON3lZZTE2U2gyK2haYkovZklXU0IxeURML1JhanlVS2tFT2NRTDlnM29GYW9IY0MvQTMyREVhUjJGS3o3cUVCKzUvSWk1NWlRUXBSOUpBL3NaSHUyTFN6Y2VrSlVnUXFJMXlKWDRuWlVkMmhsR09FSndoYVVQRGlWaUJFdlFDN0FSVVNDMElNeVBxSHJNVnowQkRIcytZZ3BIa0x1eVg0aTVxbEN4Y3RaU0hBdUozS2Z5cEhMZWlOZVowR0phRVZDN2d2U1RGdnY2K0hEUVV2VGpPRDJIaFQ0RHdVYVVZWjFHdklvTmlOWGNpZnd2MGEzZXBRRStwRFJ3Y25NT0JTNzNncTBoNjVkS2FhMkd4MUNsM2V0Qm1uZi90eDhTc29jVzl3bkViTi9rM2lsL3dXU0REVUZNU01RQ1UvZ3RwMkpNbEhUaU5La1IvSU4yRDRVVS9ncDgzbW9oMnUrZCsxbGxJazdMSG9HbWFkaTZJblI0bnVvM2VjSEpGK3hkMTBMSzFFdDZlZkIvUWtrNDVKU2VHVWJLano3bUlGU3pVQWtQSUcxdUFpdjZHbllSSDdYcXhSVW9TemN0MUdXOGliaU5TdVFVdHFCU2dEWGtDelNUN0Y1RXU1U0svR0RkTStNaHRSNFl6VXFxdmtNK3llb3duMG5rRXNaY3lJNnJQY1JGVHNmSlNwZ2RxQnMxdHU4KzlXb2NQY00xbjRUekR2RDVneFR6a2ZrVjRJOHE3UVJ0UkI5d0c2TlJkcmRMN0ErakZlWEtaV2VLVzdKUVBRRWFkUUozdlBYRVhWWWh6aElrZ2Y2RXdNZTlwSk1BTG5FUlh1d1R0Y0xlREZSMjA0VmF1TjZFcDFyS0VTTDBKbjdCZkUybEJJZktCdFhES3BSM09yTzVoemc3NUFYazFiRTcwelo3MDUzTGJSSTNTbVRUTFZOalVMYWZqSEsrbUFIOFYzaVFmWnh3RCtqYXJ6ekxhdVEyM0FWYXRYNG9FZWczU1JUbWZjU3oyaUJ0UG95bEpxY2FuT09SMFhPbTBtMkU2MG1xUVdIR3gwbzBIZDlXbVhFaGFnZEtRbWZYcjVBRFJjOXR4Sm5na1hJUWwxRzlKc0xiczVQazJ6aldZZFhmRFFjSkJtRG5vUzZQS3FRd0o1SGxOSmZnZHhjSDZlaEJNaWxLSWFzc3ZWY2djNTZmdkQ4Y3N5YUQ4RlBmblVUMUJDUjB2c084Z0lhaU43NFBRZlZKVU9MdFFwTEdJVVdxUWVaTDcrN3Q1SG9JRWNqNXQyT2ZrSG1LZVFxbklxMHNKdHZtbjN4aDRtS2hmVjIzZGN3ZmNqSERQdjNkcUFNaW11TmQxaGdCSDROYVFoSCtNWmcvRWIwdW9mZnhwSldpUi9JUGNtbFBEL1FtRldvMEpmMjYwdVBvUGdrd1FpZVZSc09ldDZEbU1TNVVtV29yalVIQ1Yybk4rZDA0b21ORmx0VEdHdDJJaGZjajJHbUk2WDJPb29oM29BczdCWDI3QmRzemVkNFk4NUdMVXpia0NVY2crcEVZU25nTWRTNkZHYmowczZrR0xlekc5WC9MaVlTOW1vVTk1eEYxQmxUaHR6THNBNzJORktLT1VoYXBJTklvNFo5VkpOUUJtTVdLalkyZVFUY2k3VFlqY1NUQk5WSUt6VjV6L3VIM29yU3ExOTA0NEpZNmtIVTdSczJadGJhT3BwUURPSUxVWjhSL0NQRUcwRkJTUXlmd0wwVXp1cjFwZHh2SjAraE4waW4zazFnZFl5MmR4SHZRa2pEa05IVFc5TXJLSVphR2RDZ3pxT2xtOU1Yb21hYkx5M1pzZGYyNmJ1QlplaDFqU2JrdFV4Q3d1c0txaHVRTzNjM2NTVlZqNFM2aWVUTHBkM0EvYWpmYlYzS09nNlFyRFcxTVhCbUQ2VDBQa1d5bzN3aXl0bzFJYjRQaFdpam5kRUdkNkdmYUpPbTlNZnlMOW5pWnlBZjN5ZHNEd3BLZjRwY0E2Y2REdGdoclVFbXNjWU9MSHpmcE0wMnZSSzlrM0lUeHBoT2lGcWE3NmVsK1g2M251ZFI5bVF2Y25IY0w2WDYxdVVRY21jMkl3dDJ2VS93OVd1WHVyazZVRFBzRyszV1p2U2FSa3RMOC8yeFJkcnpPU1NrNXlJVDMyVjdYZzdrd2pFQWJSMVBVVmZUQklwUHBpT21LTGMxM282c2FhZDd0c0Q0UWRQVENaSE5COG9TUG9xVVpKMmQ2MmlTeW5RUEVxQVZLSmI2TWRDN2JkZk4vV3UyT2ZzUUE0NUNHbjFzTUZjWHNreTNvcHFaNndab3NYVnNzNzFWMlJ3VktXT2ZSYzIxWDhJQy9aUjE5TnI0YzVFQTlocXQ3d0M2QnFCekRnbkZhaHRYWjd3VmRwajNJYjUveGVhOUR2RmwvM3BpN2s2UVNwNkxUUENKOW9YbHlLVnpGZm0wRGw4UW84OUZMdGs4STFTZnpmRU0zbXZoYmtDUnI1b2ZUMVR2YUxBNXk1Q2J0eEZZaTJkQlVsTGtaVGIyRXVReXJVQWFLVmZndHlkcVVjZnhYRlM4L0JFRGRFTjRBZk5FOUFMa200d0o3ckRER05DL0Q0THVrdWs1d0c4dGxDR2xOTS9vTWRubUtrUE0vcVROdHhYUHFoYVlzeHJGTW90UUZzdk45UkxpbGFmeFhvQUwxdEtBTlA0Y08xOTNwaTk2ZTR0NUJYbGVscXhBTWZKaSs5NytodElTZnUraHdzNXFOa3JPalBYV3N3ZDVScHRzM3Y1a2g1cy9ueUFWalR4dnRwWThQZzJENlVySVUyc3FhZzJIODJNb0RzVlUvNHNKbEErM2krQndmblRsY09ZOG5QbFNCR25ZOTFXaTBocVNOV1hJa0NGRGhnd1pNbVRJa0NGRGhnd1pNbVRJa09IWEFmOFBFd21qQ2V5ejFWOEFBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TWpJdE1ESXRNVGxVTVRZNk1qYzZNVGNyTURBNk1EQ0M4czRkQUFBQUpYUkZXSFJrWVhSbE9tMXZaR2xtZVFBeU1ESXlMVEF5TFRFNVZERTJPakkzT2pFM0t6QXdPakF3ODY5Mm9RQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdGVsZXBob25lLWUzMjQ0NDcyNjI2NGUxOTcwMzhkNGU1NmE2Mzc1OGYxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9lcnAtNTg2NGJiMDFmM2RmNDZhYmNhZTlkNDljODE2MzVmYTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NvY2lhbC0yYWI0NjRiZWE2NDNmNDAzNjM5MGY4NjU4MTQyMjgxMi5wbmdcIjsiLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBab29tIGZyb20gJ3JlYWN0LXJldmVhbC9ab29tJztcblxuY29uc3QgU2VjdGlvbkhlYWRpbmcgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGluZ30gey4uLnByb3BzfT5cbiAgICAgIDxab29tIGxlZnQgY2FzY2FkZT5cbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgIDwvWm9vbT5cbiAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICA8Wm9vbSBsZWZ0IGNhc2NhZGU+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1pvb20+XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGluZztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkaW5nOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtYXhXaWR0aDogNjYwLFxuICAgIG1hcmdpbjogWycwIGF1dG8gNjBweCddLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgZm9udFNpemU6IFs1LCBudWxsLCBudWxsLCAyNiwgbnVsbCwgMzAsIDldLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjMzLCAxLjMzLCAxLjQ4XSxcbiAgICBsZXR0ZXJTcGFjaW5nOiBbJy0wLjVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICctMXB4J10sXG4gICAgaW1nOiB7XG4gICAgICBtbDogWycxNXB4J10sXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRvcDogJzhweCcsXG4gICAgfSxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgbGluZUhlaWdodDogWzEuNTgsIDEuNTgsIDEuNTgsIDIuMl0sXG4gICAgbWF4V2lkdGg6IFsnbm9uZScsICdub25lJywgJ25vbmUnLCAnbm9uZScsIDc5MF0sXG4gICAgbWFyZ2luOiAnMTVweCBhdXRvIDAnLFxuICB9LFxufTtcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBJbWFnZSwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTbGlkZSBmcm9tICdyZWFjdC1yZXZlYWwvU2xpZGUnO1xuXG5jb25zdCBTZXJ2aWNlID0gKHsgaXRlbSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLnNlcnZpY2VJdGVtfT5cbiAgICAgIDxTbGlkZSBib3R0b20gY2FzY2FkZT5cbiAgICAgICAgPEJveCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMuZmlndXJlfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtPy5pY29ufSBhbHQ9XCJpY29uXCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+e2l0ZW0/LnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBhcz1cInBcIj57aXRlbT8uZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2xpZGU+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlcnZpY2VJdGVtOiB7XG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdmbGV4J10sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gIH0sXG4gIGZpZ3VyZToge1xuICAgIG1pbldpZHRoOiBbODgsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcwLCA4OF0sXG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzMF0sXG4gICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAwXSxcbiAgICBpbWc6IHtcbiAgICAgIG1heFdpZHRoOiBbNDIsIG51bGwsIG51bGwsIDYwLCA3MCwgJzEwMCUnXSxcbiAgICB9LFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgaDM6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250U2l6ZTogWzIsIG51bGwsIG51bGwsIDE3LCAzXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjY4XSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44OF0sXG4gICAgICBtdDogWzJdLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgbXQ6IFsyLCBudWxsLCBudWxsLCAzXSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgRmxleCwgQm94LCBJbWFnZSwgVGV4dCwgSGVhZGluZywgTGluayB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IEZhVHdpdHRlciwgRmFHaXRodWIsIEZhTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBTaUxpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvc2knO1xuXG5jb25zdCBUZWFtTWVtYmVyID0gKHsgbWVtYmVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICA8RmxleCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMuYXZhdGFyfT5cbiAgICAgICAgPEltYWdlIHNyYz17bWVtYmVyPy5hdmF0YXJ9IGFsdD17bWVtYmVyPy5uYW1lfSAvPlxuICAgICAgPC9GbGV4PlxuICAgICAgPEJveCBzeD17c3R5bGVzLmFib3V0fT5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPnttZW1iZXI/Lm5hbWV9PC9IZWFkaW5nPlxuICAgICAgICA8VGV4dCBhcz1cInBcIj57bWVtYmVyPy5kZXNpZ25hdGlvbn08L1RleHQ+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWxMaW5rc30+XG4gICAgICAgICAge21lbWJlcj8uc29jaWFsTGlua3M/Lm1hcCgoc29jaWFsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17c29jaWFsPy5saW5rfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge3NvY2lhbD8ubmFtZSA9PT0gJ3R3aXR0ZXInICYmIChcbiAgICAgICAgICAgICAgICA8RmFUd2l0dGVyIHNpemU9XCIxOHB4XCIgY29sb3I9XCIjNTVBQ0VFXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3NvY2lhbD8ubmFtZSA9PT0gJ2dpdGh1YicgJiYgKFxuICAgICAgICAgICAgICAgIDxGYUdpdGh1YiBzaXplPVwiMThweFwiIGNvbG9yPVwiIzE2MTYxNFwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtzb2NpYWw/Lm5hbWUgPT09ICdsaW5rZWRJbicgJiYgPFNpTGlua2VkaW4gc2l6ZT1cIjE4cHhcIiAvPn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYXZhdGFyOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBhYm91dDoge1xuICAgIG10OiBbNF0sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgaDM6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDE3LCBudWxsLCA0XSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGNvbG9yOiAnIzc1ODlBMScsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcbiAgICAgIG10OiBbMl0sXG4gICAgfSxcbiAgfSxcbiAgc29jaWFsTGlua3M6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgICBtdDogWzNdLFxuICAgIGE6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBtcjogWzJdLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5cbmNvbnN0IFRlc3RpbW9uaWFsc0NhcmQgPSAoeyBpbWFnZSwgdGV4dCwgbmFtZSwgdXNlcm5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHNDYXJkfT5cbiAgICAgIDxUZXh0IGFzPVwicFwiPnt0ZXh0fTwvVGV4dD5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHNJbmZvfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc0ltYWdlfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc0NvbnRlbnR9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57bmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCI+e3VzZXJuYW1lfTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc0NhcmQ7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdGVzdGltb25pYWxzQ2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgbWI6ICcyMHB4JyxcbiAgICBweDogWycyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzI1cHgnLCAnMzVweCddLFxuICAgIHB5OiBbJzIwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMjBweCcsICcyNXB4J10sXG4gICAgcGI6IFsnMjVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcyNXB4JywgJzM1cHgnXSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgbGluZUhlaWdodDogMS44NyxcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXG4gICAgfSxcbiAgfSxcbiAgdGVzdGltb25pYWxzSW5mbzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJzIwcHgnLFxuICB9LFxuICB0ZXN0aW1vbmlhbHNJbWFnZToge1xuICAgIGltZzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgfSxcbiAgfSxcbiAgdGVzdGltb25pYWxzQ29udGVudDoge1xuICAgIGgzOiB7XG4gICAgICBtOiAwLFxuICAgICAgY29sb3I6ICcjMGYwNzRiJyxcbiAgICAgIGZvbnRTaXplOiAnMTdweCcsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgbTogMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBjb2xvcjogJyMzNjJjODgnLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIG10OiAnMTBweCcsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSAncmMtZHJhd2VyJztcblxuY29uc3QgRHJhd2VyID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgY2xvc2VCdXR0b24sXG4gIGNsb3NlQnV0dG9uU3R5bGUsXG4gIGRyYXdlckhhbmRsZXIsXG4gIHRvZ2dsZUhhbmRsZXIsXG4gIG9wZW4sXG4gIHdpZHRoLFxuICBwbGFjZW1lbnQsXG4gIGRyYXdlclN0eWxlLFxuICBjbG9zZUJ0blN0eWxlLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSY0RyYXdlclxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICBjbGFzc05hbWU9e2BkcmF3ZXIgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gLnRyaW0oKX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgaGFuZGxlcj17ZmFsc2V9XG4gICAgICAgIGxldmVsPXtudWxsfVxuICAgICAgICBkdXJhdGlvbj1cIjAuNHNcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cbiAgICAgICAgICAgIHtjbG9zZUJ1dHRvbn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBzeD17ZHJhd2VyU3R5bGV9PntjaGlsZHJlbn08L0JveD5cbiAgICAgIDwvUmNEcmF3ZXI+XG4gICAgICA8Qm94XG4gICAgICAgIGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICA+XG4gICAgICAgIHtkcmF3ZXJIYW5kbGVyfVxuICAgICAgPC9Cb3g+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiAnMzIwcHgnLFxuICBwbGFjZW1lbnQ6ICdsZWZ0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi93aWRnZXQnO1xuaW1wb3J0IHsganN4LCBCb3gsIEdyaWQsIENvbnRhaW5lciwgSW1hZ2UsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCB7IG1lbnVJdGVtcywgc29jaWFsIH0gZnJvbSAnLi9mb290ZXIuZGF0YSc7XG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tICdhc3NldHMvdGVjaHZlc3RvcnMtbG9nby5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzeD17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlckJvdHRvbUFyZWF9PlxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIvXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtGb290ZXJMb2dvfVxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBteDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBpZCwgdGl0bGUsIGl0ZW1zIH0pID0+IChcbiAgICAgICAgICAgICAgPFdpZGdldCBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIG14OiAnYXV0bycsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NvY2lhbC5tYXAoKHsgcGF0aCwgbGFiZWwsIGljb24gfSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpY29ufSBhbHQ9e2xhYmVsfSBzeD17c3R5bGVzLmZvb3Rlci5pY29ufSBrZXk9e2l9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxuICAgICAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gVGVjaFZlc3RvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3Rlcjoge1xuICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZTZlNmU2JyxcbiAgICBib3hTaGFkb3c6ICcwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgIGZvb3RlckJvdHRvbUFyZWE6IHtcbiAgICAgIHB0OiBbNl0sXG4gICAgICBwYjogWzZdLFxuICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIG1lbnVzOiB7XG4gICAgICBtdDogWzQsIG51bGwsIG51bGwsIDZdLFxuICAgICAgZ2FwOiBbMzAsIG51bGwsIDUwLCAnMjBweCA1MHB4JywgMTcsIDUwXSxcbiAgICAgIGRpc3BsYXk6IFsnZ3JpZCddLFxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgICAncmVwZWF0KDIsIDFmciknLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICAncmVwZWF0KDIsIDFmciknLFxuICAgICAgICAncmVwZWF0KDMsIDFmciknLFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAgbGluazoge1xuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgICAgbWI6IDIsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zNXMnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCAxLjhdLFxuICAgICAgcHg6IFsyLCBudWxsLCA0XSxcbiAgICAgICc6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgd2lkdGg6IFsnMjBweCcsIG51bGwsICczMHB4J10sXG4gICAgICBoZWlnaHQ6IFsnMjBweCcsIG51bGwsICczMHB4J10sXG4gICAgICBtcjogWzIsIG51bGwsIDNdLFxuICAgICAgbXk6IFs0LCBudWxsLCA2XSxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zNXMnLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29weXJpZ2h0OiB7XG4gICAgICBtdDogWzJdLFxuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgZmFjZWJvb2sgZnJvbSAnYXNzZXRzL3NvY2lhbC9mYWNlYm9vay5wbmcnO1xuaW1wb3J0IHR3aXR0ZXIgZnJvbSAnYXNzZXRzL3NvY2lhbC90d2l0dGVyLnBuZyc7XG5pbXBvcnQgZ2l0aHViIGZyb20gJ2Fzc2V0cy9zb2NpYWwvZ2l0aHViLnBuZyc7XG5cbmltcG9ydCBsb2NhdGlvbiBmcm9tICdhc3NldHMvcGxhY2Vob2xkZXIucG5nJztcbmltcG9ydCBnbWFpbCBmcm9tICdhc3NldHMvZ21haWwucG5nJztcbmltcG9ydCB0ZWxlcGhvbmUgZnJvbSAnYXNzZXRzL3RlbGVwaG9uZS5wbmcnO1xuXG5leHBvcnQgY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdBYm91dCBVcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdTdXBwb3J0IENlbnRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdBYm91dCBVcycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0NvcHlyaWdodCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ091ciBJbmZvcm1hdGlvbicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdSZXR1cm4gUG9saWN5ICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1ByaXZhY3kgUG9saWN5JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnVGVybXMgJiBDb25kaXRpb25zJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdjYXJlZXInLFxuICAgICAgICBuZXh0UGFnZTogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdDYXJlZXInLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6ICdDb250YWN0IFVzJyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBpY29uOiB0ZWxlcGhvbmUsXG4gICAgICAgIGxhYmVsOiAnKzkxIDg4ODQ5Mzc5ODcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgaWNvbjogdGVsZXBob25lLFxuICAgICAgICBsYWJlbDogJys5MTYyNjY2MDk5OTQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgaWNvbjogbG9jYXRpb24sXG4gICAgICAgIGxhYmVsOiAnQmFuZ2Fsb3JlLCBJbmRpYScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBpY29uOiBnbWFpbCxcbiAgICAgICAgbGFiZWw6ICdzdXBwb3J0QHRlY2h2ZXN0b3JzLnRlY2ggJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmb290ZXJOYXYgPSBbXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnQWR2ZXJ0aXNlJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcjIScsXG4gICAgbGFiZWw6ICdTdXBwb3J0cycsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnTWFya2V0aW5nJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcjIScsXG4gICAgbGFiZWw6ICdGQVEnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbCA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBsYWJlbDogJ0ZhY2Vib29rJyxcbiAgICBpY29uOiBmYWNlYm9vayxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBsYWJlbDogJ1R3aXR0ZXInLFxuICAgIGljb246IHR3aXR0ZXIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbGFiZWw6ICdHaXRodWInLFxuICAgIGljb246IGdpdGh1YixcbiAgfSxcbl07XG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IFdpZGdldCA9ICh7IHRpdGxlLCBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmZvb3RlcldpZGdldH0+XG4gICAgICA8SGVhZGluZyBhcz1cImg0XCI+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgIDx1bD5cbiAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCwgaWNvbiB9LCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICB7aWNvbiAmJiA8SW1hZ2Ugc3JjPXtpY29ufSBhbHQ9e2xhYmVsfSAvPn1cbiAgICAgICAgICAgIDxOYXZMaW5rIHBhdGg9e3BhdGh9IGtleT17aX0gbGFiZWw9e2xhYmVsfSB2YXJpYW50PVwiZm9vdGVyXCIgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9vdGVyV2lkZ2V0OiB7XG4gICAgaDQ6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGluZUhlaWdodDogMS42OCxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIHVsOiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIG1hcmdpbjogJzI4cHggMCAwJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBjb2x1bW5zOiBbMSwgbnVsbCwgbnVsbCwgMSwgMSwgMSwgMl0sXG5cbiAgICAgIGxpOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGltZzoge1xuICAgICAgICAgIG1yOiAnMTVweCcsXG4gICAgICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhOiB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC44KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBCb3gsIEdyaWQsIEZsZXgsIEJ1dHRvbiwgSW5wdXQsIFRleHRhcmVhLCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uSGVhZGluZyc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENvbnRhY3RVcygpIHtcbiAgY29uc3Qge1xuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZWdpc3RlcixcbiAgICByZXNldCxcbiAgICBjb250cm9sLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMsIGlzU3VibWl0U3VjY2Vzc2Z1bCwgaXNTdWJtaXR0aW5nIH0sXG4gIH0gPSB1c2VGb3JtKHtcbiAgICBtb2RlOiAnb25Ub3VjaGVkJyxcbiAgfSk7XG5cbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW01lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcywgZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuICAgIGVtYWlsanNcbiAgICAgIC5zZW5kRm9ybShcbiAgICAgICAgJ3NlcnZpY2VfanNhZ3p1eScsXG4gICAgICAgICd0ZW1wbGF0ZV91Y3VoaDRxJyxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSxcbiAgICAgICAgJ3VzZXJfc0lxSnAxUlE3RER1ZHFOdXZRb2dsJyxcbiAgICAgIClcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgcmVzZXQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwiZm9ybVwiXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgIHN4PXtzdHlsZXMuZm9ybX1cbiAgICAgIGlkPVwiY29udGFjdHVzXCJcbiAgICA+XG4gICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgc3g9e3N0eWxlcy5jb250YWN0X19oZWFkaW5nfVxuICAgICAgICB0aXRsZT1cIkdldCBpbiB0b3VjaFwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiV2UncmUgaGVyZSB0byBoZWxwIGFuZCBhbnN3ZXIgYW55IHF1ZXN0aW9ucyB5b3UgbWlnaHQgaGF2ZS4gV2UgbG9vayBmb3J3YXJkIHRvIGhlYXJpbmcgZnJvbSB5b3UuXCJcbiAgICAgIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmZsZXh9PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZm9ybUlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImZuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdmbmFtZScsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0ZpcnN0IG5hbWUgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLmZuYW1lICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvcnMuZm5hbWUubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZm9ybUlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwibG5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImxuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIlxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2xuYW1lJywge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9ycy5sbmFtZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLmxuYW1lLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZmxleH0gbXQ9ezN9PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZm9ybUlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbnZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5lbWFpbC5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICA8RmxleCBzeD17c3R5bGVzLmZvcm1JbnB1dH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBOdW1iZXJcIlxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3Bob25lJywge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnUGhvbmUgbm8uIGlzIFJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9ycy5waG9uZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLnBob25lLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZm9ybUlucHV0fT5cbiAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXG4gICAgICAgICAgICBpZD1cInF1ZXJ5XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUXVlcmllc1wiXG4gICAgICAgICAgICByb3dzPXs4fVxuICAgICAgICAgICAgc3g9e3N0eWxlcy50ZXh0QXJlYX1cbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncXVlcnknLCB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAnUXVlcnkgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZXJyb3JzLnF1ZXJ5ICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLnF1ZXJ5Lm1lc3NhZ2V9PC9kaXY+fVxuICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9ybToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGNEY0RjYnLFxuICAgIC8vIHA6IDMsXG4gICAgbWF4V2lkdGg6ICdjb250YWluZXInLFxuICAgIG14OiAnYXV0bycsXG4gICAgcHQ6IFszLCA0LCA1XSxcbiAgICBwYjogWzMsIDQsIDVdLFxuICB9LFxuICBmbGV4OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxuICAgIGlucHV0OiB7XG4gICAgICBmbGV4OiAxLFxuICAgICAgZ2FwOiBbMiwgbnVsbCwgbnVsbCwgM10sXG4gICAgICBtYjogWzNdLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgICBweDogNSxcbiAgICB9LFxuICB9LFxuICB0ZXh0QXJlYToge1xuICAgIG1iOiBbM10sXG4gICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgcDogNSxcbiAgICBtdDogMyxcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBtdDogNSxcbiAgfSxcblxuICBjb250YWN0X19oZWFkaW5nOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtbDogJ2F1dG8nLFxuICAgIG1yOiAnYXV0bycsXG4gICAgbWI6IFszMF0sXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1MDAsIDU2MCwgNzMwXSxcbiAgICBoMjoge1xuICAgICAgZm9udFNpemU6IFs4LCBudWxsLCBudWxsLCA4LCA5LCAxMCwgMTFdLFxuICAgICAgbGluZUhlaWdodDogWzEuNTddLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAzXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg3LCBudWxsLCBudWxsLCAyLjMzXSxcbiAgICB9LFxuICB9LFxuICBmb3JtSW5wdXQ6IHtcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICcuZXJyb3InOiB7XG4gICAgICBjb2xvcjogJyNmZjAwMDAnLFxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg3LCBudWxsLCBudWxsLCAyLjMzXSxcbiAgICAgIG1iOiBbMl0sXG4gICAgICBtbDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgcGF0aDogJ2hvbWUnLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnam9pbnVzJyxcbiAgICBsYWJlbDogJ0pvaW4gVXMnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3RlYW0nLFxuICAgIGxhYmVsOiAnVGVhbScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncG9zaXRpb24nLFxuICAgIGxhYmVsOiAnUG9zaXRpb25zJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdjb250YWN0dXMnLFxuICAgIGxhYmVsOiAnQ29udGFjdCBVcycsXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgcGF0aDogJ2hvbWUnLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnc2VydmljZXMnLFxuICAgIGxhYmVsOiAnU2VydmljZXMnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3RlYW0nLFxuICAgIGxhYmVsOiAnVGVhbScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAndGVzdGltb25pYWwnLFxuICAgIGxhYmVsOiAnVGVzdGltb25pYWwnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2NvbnRhY3R1cycsXG4gICAgbGFiZWw6ICdDb250YWN0IFVzJyxcbiAgfSxcbl07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24sIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IExvZ29EYXJrIGZyb20gJ2Fzc2V0cy90ZWNodmVzdG9ycy1sb2dvLnBuZyc7XG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL21vYmlsZS1kcmF3ZXInO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcbmltcG9ydCBtZW51Q2FyZWVySXRlbXMgZnJvbSAnLi9oZWFkZXIuY2FyZWVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSA9PT0gJy9jYXJlZXInKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJQcm92aWRlcj5cbiAgICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cImhlYWRlclwiPlxuICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuaGVhZGVyX19jb250YWluZXJ9PlxuICAgICAgICAgIDxMb2dvIHNyYz17TG9nb0Rhcmt9IC8+XG5cbiAgICAgICAgICA8RmxleCBhcz1cIm5hdlwiIHN4PXtzdHlsZXMubmF2fT5cbiAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZWVyJ1xuICAgICAgICAgICAgICA/IG1lbnVDYXJlZXJJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTMwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICA6IG1lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTMwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSAnLycgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJqb2luX191c1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2FyZWVyJyl9PlxuICAgICAgICAgICAgICBKb2luIFVzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gJy9jYXJlZXInICYmIChcbiAgICAgICAgICAgIDxBXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImpvaW5fX3VzXCJcbiAgICAgICAgICAgICAgaHJlZj1cIi93d3cubGlua2VkaW4uY29tXCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBcHBseVxuICAgICAgICAgICAgPC9BPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8TW9iaWxlRHJhd2VyIGlzQ2FyZWVyPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY2FyZWVyJ30gLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L0RyYXdlclByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgcHk6IDQsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxuICAgICcuam9pbl9fdXMnOiB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgICBib3JkZXI6ICcycHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgcGFkZGluZzogWycxMHB4IDE1cHgnLCBudWxsLCAnMTVweCAzMHB4J10sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYuc3RpY2t5Jzoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICBweTogMyxcbiAgICAgICduZXYgPiBhJzoge1xuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBoZWFkZXJfX2NvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBuYXY6IHtcbiAgICBteDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogMixcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIHB4OiA1LFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4xNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9kcmF3ZXInO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dCc7XG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFUd2l0dGVyLCBGYUdpdGh1YkFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5pbXBvcnQgbWVudUNhcmVlckl0ZW1zIGZyb20gJy4vaGVhZGVyLmNhcmVlcic7XG5cbmNvbnN0IHNvY2lhbCA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhVHdpdHRlciAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFHaXRodWJBbHQgLz4sXG4gIH0sXG5dO1xuXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoeyBpc0NhcmVlciB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xuXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVE9HR0xFJyxcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xuICAgICAgICA8Qm94IHN4PXtzdHlsZXMubW9iaWxlRHJhd2VyfT5cbiAgICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjI2cHhcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIH1cbiAgICAgIG9wZW49e3N0YXRlLmlzT3Blbn1cbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwMDAwMFwiIC8+fVxuICAgICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XG4gICAgPlxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tb2JpbGVEcmF3ZXJfX2NvbnRlbnR9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cbiAgICAgICAgICAgIHtpc0NhcmVlclxuICAgICAgICAgICAgICA/IG1lbnVDYXJlZXJJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICA6IG1lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51X19Gb290ZXJ9PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XG4gICAgICAgICAgICAgIHtzb2NpYWwubWFwKCh7IHBhdGgsIGljb24gfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIga2V5PXtpfSBzeD17c3R5bGVzLnNvY2lhbC5pY29ufT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwYXRofT57aWNvbn08L0xpbms+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TY3JvbGxiYXJzPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBtb2JpbGVEcmF3ZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhTaHJpbms6ICcwJyxcbiAgICB3aWR0aDogJzI2cHgnLFxuXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmsnLFxuICB9LFxuXG4gIGNsb3NlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcyNXB4JyxcbiAgICByaWdodDogJzMwcHgnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxuXG4gIG1vYmlsZURyYXdlcl9fY29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHB0OiAnMTAwcHgnLFxuICAgIHBiOiAnNDBweCcsXG4gICAgcHg6ICczMHB4JyxcbiAgfSxcblxuICBtZW51OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYToge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgY29sb3I6ICd0ZXh0X3doaXRlJyxcbiAgICAgIHB5OiAnMTVweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlNWU1JyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBtZW51X19Gb290ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJ2F1dG8nLFxuICB9LFxuXG4gIHNvY2lhbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblxuICAgIGljb246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtcjogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmdzogJzcwMCcsXG4gICAgaGVpZ2h0OiAnNDVweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHk6ICcwJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZURyYXdlcjtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvRm9vdGVyJztcbmltcG9ydCBNZXNzZW5nZXJDdXN0b21lckNoYXQgZnJvbSAncmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXQnO1xuaW1wb3J0IENvbnRhY3RVcyBmcm9tICcuL2Zvcm0vQ29udGFjdFVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbaXNTdGlja3ksIHNldElzU3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XG4gICAgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfRklYRUQpIHtcbiAgICAgIHNldElzU3RpY2t5KHRydWUpO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19PUklHSU5BTCkge1xuICAgICAgc2V0SXNTdGlja3koZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U3RpY2t5IGlubmVyWj17MTAwMX0gdG9wPXswfSBvblN0YXRlQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX0+XG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtgJHtpc1N0aWNreSA/ICdzdGlja3knIDogJ3VuU3RpY2t5J31gfSAvPlxuICAgICAgPC9TdGlja3k+XG4gICAgICA8bWFpblxuICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxDb250YWN0VXMgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxNZXNzZW5nZXJDdXN0b21lckNoYXQgcGFnZUlkPVwiMTAwMDgyNjE5NDQzNzIxXCIgYXBwSWQ9XCI1MTQyNjc5NjMwNTM3MDFcIiAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgTmF2TGluayBhcyBNZW51TGluaywgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XG4gICAgICA8TWVudUxpbmtcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9XG4gICAgICA8L01lbnVMaW5rPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEEgey4uLnJlc3R9IGhyZWY9e3BhdGh9PlxuICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH1cbiAgICA8L0E+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oeyBzcmMsIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBocmVmPVwiL1wiXG4gICAgICBzeD17e1xuICAgICAgICB2YXJpYW50OiAnbGlua3MubG9nbycsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIG1yOiAxNSxcbiAgICAgIH19XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgIGFsdD1cInRlY2h2ZXN0b3JzXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gJy4uL2NyZWF0ZS1jb250ZXh0JztcbmltcG9ydCB7IHJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vYXBwLnJlZHVjZXInO1xuXG5jb25zdCBbc3RhdGUsIHVzZURpc3BhdGNoLCBwcm92aWRlcl0gPSB1c2VDcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSwgcmVkdWNlcik7XG5leHBvcnQgY29uc3QgdXNlU3RpY2t5U3RhdGUgPSBzdGF0ZTtcbmV4cG9ydCBjb25zdCB1c2VTdGlja3lEaXNwYXRjaCA9IHVzZURpc3BhdGNoO1xuZXhwb3J0IGNvbnN0IFN0aWNreVByb3ZpZGVyID0gcHJvdmlkZXI7XG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc1N0aWNreTogZmFsc2UsXG4gIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHR5cGUgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdTRVRfU1RJQ0tZJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1N0aWNreTogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSAnUkVNT1ZFX1NUSUNLWSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTdGlja3k6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlICdTRVRfU0lERUJBUl9TVElDS1knOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSAnUkVNT1ZFX1NJREVCQVJfU1RJQ0tZJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1NpZGViYXJTdGlja3k6IGZhbHNlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGFjdGlvbiB0eXBlOiAke3R5cGV9YCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCByZWR1Y2VyKSB7XG4gIGNvbnN0IGRlZmF1bHREaXNwYXRjaCA9ICgpID0+IGRlZmF1bHRWYWx1ZTtcbiAgY29uc3Qgc3RhdGVDdHggPSBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSk7XG4gIGNvbnN0IGRpc3BhdGNoQ3R4ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0RGlzcGF0Y2gpO1xuXG4gIGZ1bmN0aW9uIHVzZVN0YXRlQ3R4KHByb3BlcnR5KSB7XG4gICAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KHN0YXRlQ3R4KTtcbiAgICByZXR1cm4gc3RhdGVbcHJvcGVydHldOyAvLyBvbmx5IG9uZSBkZXB0aCBzZWxlY3RvciBmb3IgY29tcGFyaXNvblxuICB9XG5cbiAgZnVuY3Rpb24gdXNlRGlzcGF0Y2hDdHgoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoZGlzcGF0Y2hDdHgpO1xuICB9XG5cbiAgZnVuY3Rpb24gUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIGRlZmF1bHRWYWx1ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXNwYXRjaEN0eC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgICA8c3RhdGVDdHguUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9zdGF0ZUN0eC5Qcm92aWRlcj5cbiAgICAgIDwvZGlzcGF0Y2hDdHguUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gW3VzZVN0YXRlQ3R4LCB1c2VEaXNwYXRjaEN0eCwgUHJvdmlkZXJdO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IERyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4vZHJhd2VyLmNvbnRleHQnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc09wZW46IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdUT0dHTEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzT3BlbjogIXN0YXRlLmlzT3BlbixcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IERyYXdlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgU3RpY2t5UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyJztcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBIZXJvLCBUZXN0aW1vbmlhbHMsIFRlYW0sIFdvcmtGbG93LCBTZXJ2aWNlcywgV2h5VXMgfSBmcm9tICdzZWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBtZXRhIH0pIHtcbiAgY29uc3QgbWV0YURhdGEgPSBbXG4gICAge1xuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcbiAgICAgIGNvbnRlbnQ6IGBkZXNjcmlwdGlvbmAsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcbiAgICAgIGNvbnRlbnQ6IGBUZWNodmVzdG9yc2AsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCxcbiAgICAgIGNvbnRlbnQ6IGBkZXNjcmlwdGlvbmAsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxuICAgICAgY29udGVudDogYHdlYnNpdGVgLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXG4gICAgfSxcbiAgXS5jb25jYXQobWV0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFN0aWNreVByb3ZpZGVyPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlRlY2h2ZXN0b3JzPC90aXRsZT5cbiAgICAgICAgICAgIHttZXRhRGF0YS5tYXAoKHsgbmFtZSwgY29udGVudCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgIDxTZXJ2aWNlcyAvPlxuICAgICAgICAgIDxXaHlVcyAvPlxuICAgICAgICAgIDxUZWFtIC8+XG4gICAgICAgICAgPFRlc3RpbW9uaWFscyAvPlxuICAgICAgICAgIDxXb3JrRmxvdyAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvU3RpY2t5UHJvdmlkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5Ib21lLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFuZzogYGVuYCxcbiAgbWV0YTogW10sXG59O1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uSGVhZGluZyc7XG5pbXBvcnQgSGVyb0ltYWdlIGZyb20gJ2Fzc2V0cy9oZXJvLnBuZyc7XG5cbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgYmFubmVySWNvbjEgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtMS5zdmcnO1xuaW1wb3J0IGJhbm5lckljb24yIGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTIuc3ZnJztcbmltcG9ydCBiYW5uZXJJY29uMyBmcm9tICdhc3NldHMvYmFubmVyLWljb24tMS0zLnN2Zyc7XG5pbXBvcnQgYmFubmVySWNvbjQgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtNC5zdmcnO1xuaW1wb3J0IGJhbm5lckljb241IGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTUuc3ZnJztcbmltcG9ydCBiYW5uZXJJY29uNiBmcm9tICdhc3NldHMvYmFubmVyLWljb24tMS02LnN2Zyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBTbGlkZSBmcm9tICdyZWFjdC1yZXZlYWwvU2xpZGUnO1xuXG5jb25zdCBIZXJvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJob21lXCIgc3g9e3N0eWxlcy5oZXJvX19zZWN0aW9ufT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzeD17c3R5bGVzLmJhbm5lckljb24xfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcbiAgICAgICAgICBzcmM9e2Jhbm5lckljb24xfVxuICAgICAgICAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzeD17c3R5bGVzLmJhbm5lckljb24yfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcbiAgICAgICAgICBzcmM9e2Jhbm5lckljb24yfVxuICAgICAgICAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzeD17c3R5bGVzLmJhbm5lckljb24zfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcbiAgICAgICAgICBzcmM9e2Jhbm5lckljb24zfVxuICAgICAgICAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzeD17c3R5bGVzLmJhbm5lckljb240fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcbiAgICAgICAgICBzcmM9e2Jhbm5lckljb240fVxuICAgICAgICAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzeD17c3R5bGVzLmJhbm5lckljb241fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcbiAgICAgICAgICBzcmM9e2Jhbm5lckljb241fVxuICAgICAgICAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzeD17c3R5bGVzLmJhbm5lckljb242fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcbiAgICAgICAgICBzcmM9e2Jhbm5lckljb242fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZXJvX19jb250ZW50c30+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgICBzeD17c3R5bGVzLmhlcm9fX2hlYWRpbmd9XG4gICAgICAgICAgICB0aXRsZT1cInRlY2h2ZXN0b3JzIChub3VuKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvdGVjaMuIdsmbc3TJmXJzL1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkEgdGVhbSBvZiBoaWdobHkgZW50aHVzaWFzdGljIGFuZCBwYXNzaW9uYXRlIHRlY2hpZXMgd2hvIGFyZSB3b3JraW5nIHRvZ2V0aGVyIHRvIGlubm92YXRlIGFuZCBkZXZlbG9wIHRlY2hub2xvZ2llcyB0byBpbnZlc3QgaW4gY29tcGFuaWVzIHdoaWNoIGhhcyB0aGUgcG90ZW50aWFsIHRvIGFjaGlldmUgbmV3IGhlaWdodHMuXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3ggYXM9XCJmaWd1cmVcIiBzeD17c3R5bGVzLmhlcm99PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmhlcm9fX2J1dHRvbn0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89XCJzZXJ2aWNlc1wiXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcbiAgICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgICAgICAgICAgICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXG4gICAgICAgICAgICAgICAgICBiZzogJ3ByaW1hcnknLFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbJzEwcHggMTVweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcbiAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDIzMywgNzYsIDg0LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxTbGlkZSBib3R0b20+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0hlcm9JbWFnZX0gYWx0PVwiaGVyb1wiIC8+XG4gICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuY29uc3QgYmFubmVyQW5pbTEgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIH1cblxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XG4gICAgfVxuXG4gICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAwLCAwLCAwZGVnKTtcbiAgICB9XG5cbiAgICA4MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIH1cbmA7XG5cbmNvbnN0IGJhbm5lckFuaW0yID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoMCk7XG4gICAgfVxuXG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKDE1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCkgdHJhbnNsYXRlWCg1MHB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgfVxuXG4gICAgODAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKDE1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIH1cbmA7XG5cbmNvbnN0IGJhbm5lckFuaW0zID0ga2V5ZnJhbWVzYFxuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVaKDIwcHgpIHRyYW5zbGF0ZVkoMjBweCkgdHJhbnNsYXRlWCgyMHB4KTtcbiAgICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlcm9fX3NlY3Rpb246IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwdDogWycxMTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxMzBweCddLFxuICAgIHpJbmRleDogMCxcbiAgICAnOmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcmdiYSgnI0ZGRjVFRCcsIDAuNSksXG4gICAgICBjb250ZW50OiBbJ25vbmUnLCBudWxsLCBudWxsLCBgJydgXSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgaGVpZ2h0OiA3MixcbiAgICAgIHpJbmRleDogLTEsXG4gICAgfSxcbiAgfSxcbiAgaGVyb19fY29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gIH0sXG4gIGhlcm9fX2hlYWRpbmc6IHtcbiAgICBtYjogWzMwXSxcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDUwMCwgNTYwLCA3MzBdLFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogWzgsIG51bGwsIG51bGwsIDgsIDksIDEwLCAxMV0sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41N10sXG4gICAgfSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDNdLFxuICAgICAgbGluZUhlaWdodDogWzEuODcsIG51bGwsIG51bGwsIDIuMzNdLFxuICAgIH0sXG4gIH0sXG4gIGhlcm86IHtcbiAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgbnVsbCwgbnVsbCwgJ2ZsZXgnXSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBpbWc6IHtcbiAgICAgIGRpc3BsYXk6IFsnYmxvY2snLCBudWxsLCBudWxsLCAnYmxvY2snXSxcbiAgICAgIG1heFdpZHRoOiBbJzkwJSddLFxuICAgICAgbTogWycwIGF1dG8nXSxcbiAgICB9LFxuICB9LFxuICBoZXJvX19idXR0b246IHtcbiAgICB6SW5kZXg6IDEsXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlciddLFxuICAgIHBvc2l0aW9uOiBbJ3N0YXRpYycsIG51bGwsIG51bGwsICdhYnNvbHV0ZSddLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRvcDogMCxcbiAgICB0cmFuc2Zvcm06IFsndW5zZXQnLCBudWxsLCBudWxsLCAndHJhbnNsYXRlWCgtNTAlKSddLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnLmJhbm5lckljb24nOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsICdibG9jayddLFxuICAgIH0sXG4gIH0sXG4gIGJhbm5lckljb24xOiB7XG4gICAgdG9wOiAnMTAlJyxcbiAgICBsZWZ0OiAnMTAlJyxcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0yfSA4cyBsaW5lYXIgaW5maW5pdGVgLFxuICB9LFxuICBiYW5uZXJJY29uMjoge1xuICAgIHRvcDogJzEwJScsXG4gICAgcmlnaHQ6ICcxMCUnLFxuICAgIGFuaW1hdGlvbjogYCR7YmFubmVyQW5pbTJ9IDhzIGxpbmVhciBpbmZpbml0ZWAsXG4gIH0sXG4gIGJhbm5lckljb24zOiB7XG4gICAgYm90dG9tOiAnNDBweCcsXG4gICAgcmlnaHQ6ICctMTIwcHgnLFxuICAgIGFuaW1hdGlvbjogYCR7YmFubmVyQW5pbTF9IDVzIGVhc2Utb3V0IGluZmluaXRlYCxcbiAgfSxcbiAgYmFubmVySWNvbjQ6IHtcbiAgICBib3R0b206ICcxMzBweCcsXG4gICAgbGVmdDogJy0xMjBweCcsXG4gICAgYW5pbWF0aW9uOiBgJHtiYW5uZXJBbmltMX0gNXMgZWFzZS1vdXQgaW5maW5pdGVgLFxuICB9LFxuICBiYW5uZXJJY29uNToge1xuICAgIGJvdHRvbTogJzUwJScsXG4gICAgbGVmdDogJzE1JScsXG4gIH0sXG4gIGJhbm5lckljb242OiB7XG4gICAgYm90dG9tOiAnLTY1cHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIGFuaW1hdGlvbjogYCR7YmFubmVyQW5pbTN9IDlzIGxpbmVhciBpbmZpbml0ZWAsXG4gIH0sXG4gIGJhbm5lckljb243OiB7XG4gICAgYm90dG9tOiAnMzAlJyxcbiAgICByaWdodDogJzAlJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICcuL3Rlc3RpbW9uaWFscyc7XG5pbXBvcnQgVGVhbSBmcm9tICcuL3RlYW0nO1xuaW1wb3J0IFdvcmtGbG93IGZyb20gJy4vd29ya2Zsb3cnO1xuaW1wb3J0IFdoeVVzIGZyb20gJy4vd2h5dXMnO1xuZXhwb3J0IHsgSGVybywgU2VydmljZXMsIFRlc3RpbW9uaWFscywgVGVhbSwgV29ya0Zsb3csIFdoeVVzIH07XG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1NlY3Rpb25IZWFkaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvU2VydmljZSc7XG5pbXBvcnQgaWNvbjEgZnJvbSAnYXNzZXRzL3NlcnZpY2Uvc2VydmljZTEucG5nJztcbmltcG9ydCBpY29uMiBmcm9tICdhc3NldHMvc2VydmljZS9zZXJ2aWNlMi5wbmcnO1xuaW1wb3J0IGljb24zIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlL3NlcnZpY2UzLnBuZyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpY29uOiBpY29uMSxcbiAgICB0aXRsZTogJ01hcmtldGluZyAmIGFkdmVydGlzaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIEZ1Z2EgaW52ZW50b3JlIHF1YW0gb2RpbyBudW1xdWFtIHZlbmlhbT9gLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaWNvbjogaWNvbjIsXG4gICAgdGl0bGU6ICdXZWIgZGV2ZWxvcG1lbnQnLFxuICAgIGRlc2NyaXB0aW9uOiBgTG9yZW0gaXBzdW0gRnVnYSBpbnZlbnRvcmUgcXVhbSBvZGlvIG51bXF1YW0gdmVuaWFtP2AsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpY29uOiBpY29uMyxcbiAgICB0aXRsZTogJ01vYmlsZSBEZXZlbG9wbWVudCcsXG4gICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSBGdWdhIGludmVudG9yZSBxdWFtIG9kaW8gbnVtcXVhbSB2ZW5pYW0/YCxcbiAgfSxcbl07XG5cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJzZXJ2aWNlc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XG4gICAgICAgICAgdGl0bGU9XCJPdXIgU2VydmljZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBCbGFuZGl0aWlzIHNlcXVpIHNpbWlsaXF1ZSB2b2x1cHRhdHVtIGludmVudG9yZSwgYXRxdWUgcHJhZXNlbnRpdW0/XCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRXcmFwcGVyfT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8U2VydmljZSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlcztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzZWN0aW9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByZ2JhKCcjRkZGNUVEJywgMC41KSxcbiAgICBwdDogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICBwYjogWyc2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTIwcHgnXSxcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNDU1LCA2NjBdLFxuICAgIG1iOiBbMzBdLFxuICB9LFxuICBjb250ZW50V3JhcHBlcjoge1xuICAgIGdhcDogMzAsXG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICd1bnNldCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwgMjg1cHgpJyxcbiAgICAgICdyZXBlYXQoMSwgMzI1cHgpJyxcbiAgICAgICdyZXBlYXQoMSwgMjg1cHgpJyxcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXG4gICAgXSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uSGVhZGluZyc7XG5cbmltcG9ydCBhdmF0YXIxIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlcjEucG5nJztcbmltcG9ydCBhdmF0YXIyIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlcjIucG5nJztcbmltcG9ydCBhdmF0YXIzIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlcjMucG5nJztcbmltcG9ydCBhdmF0YXI0IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlcjQucG5nJztcbmltcG9ydCBhcnJvd1JpZ2h0IGZyb20gJ2Fzc2V0cy90ZWFtL2Fycm93LXJpZ2h0LnBuZyc7XG5pbXBvcnQgVGVhbU1lbWJlciBmcm9tICdjb21wb25lbnRzL2NhcmRzL1RlYW1NZW1iZXInO1xuaW1wb3J0IFNsaWRlIGZyb20gJ3JlYWN0LXJldmVhbC9TbGlkZSc7XG5cblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uXSk7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBhdmF0YXI6IGF2YXRhcjEsXG4gICAgbmFtZTogJ0dvdXJhdiBNYWh0bycsXG4gICAgZGVzaWduYXRpb246ICdDby1mb3VuZGVyJyxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vdHdpdHRlci5jb20nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbGlua2VkSW4nLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2xpbmtlZGluLmNvbS9pbi8nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgYXZhdGFyOiBhdmF0YXIzLFxuICAgIG5hbWU6ICdSIEFkYXJzaCcsXG4gICAgZGVzaWduYXRpb246ICdDby1Gb3VuZGVyJyxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vdHdpdHRlci5jb20nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2xpbmtlZEluJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9saW5rZWRJbi5jb20vaW4nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgYXZhdGFyOiBhdmF0YXIxLFxuICAgIG5hbWU6ICdNci4gUmFodWwnLFxuICAgIGRlc2lnbmF0aW9uOiAnQ28tRm91bmRlcicsXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgICAgICBsaW5rOiAnaHR0cDovL3R3aXR0ZXIuY29tJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdnaXRodWInLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2dpdGh1Yi5jb20nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgYXZhdGFyOiBhdmF0YXIzLFxuICAgIG5hbWU6ICdWYXViaGF2IFNpbmhhJyxcbiAgICBkZXNpZ25hdGlvbjogJ1dlYiBEZXZlbG9wZXInLFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly90d2l0dGVyLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZ2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdkcmliYmJsZScsXG4gICAgICAgIGxpbms6ICdodHRwOi8vbGlua2VkSW4uY29tL2luJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGF2YXRhcjogYXZhdGFyMSxcbiAgICBuYW1lOiAnVmlrcmFtIFJhbmEnLFxuICAgIGRlc2lnbmF0aW9uOiAnRnVsbCBTdGFjayBEZXZlbG9wZXInLFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly90d2l0dGVyLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZ2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdkcmliYmJsZScsXG4gICAgICAgIGxpbms6ICdodHRwOi8vbGlua2VkaW4uY29tL2luJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIGF2YXRhcjogYXZhdGFyMixcbiAgICBuYW1lOiAnU3VkcmVlc2hhIERhcycsXG4gICAgZGVzaWduYXRpb246ICdpbnRlcm4nLFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly90d2l0dGVyLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZ2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tL3N1ZHJlZXNoYScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZHJpYmJibGUnLFxuICAgICAgICBsaW5rOiAnaHR0cDovL2xpbmtlZEluLmNvbScsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBhdmF0YXI6IGF2YXRhcjMsXG4gICAgbmFtZTogJ01yLiBQcmF0YXAnLFxuICAgIGRlc2lnbmF0aW9uOiAnaW50ZXJuJyxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vdHdpdHRlci5jb20nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2xpbmtlZEluJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9saW5rZWRJbi5jb20vaW4nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vZ2l0aHViLmNvbScsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICBhdmF0YXI6IGF2YXRhcjEsXG4gICAgbmFtZTogJ1NoYWhiYXogQWxhbScsXG4gICAgZGVzaWduYXRpb246ICdTb2Z0d2FyZSBEZXZlbG9lcHInLFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly90d2l0dGVyLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZ2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9naXRodWIuY29tJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdsaW5rZWRJbicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vbGlua2VkSW4uY29tL2luJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmNvbnN0IFRlYW0gPSAoKSA9PiB7XG4gIGNvbnN0IHN3aXBlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjb250YWluZXJPZmZzZXQsIHNldENvbnRhaW5lck9mZnNldF0gPSB1c2VTdGF0ZSh7XG4gICAgbGVmdDogbnVsbCxcbiAgICB0b3A6IG51bGwsXG4gIH0pO1xuXG4gIGNvbnN0IGlzRW5kID0gc3dpcGVyUmVmPy5jdXJyZW50Py5zd2lwZXI/LmlzRW5kO1xuXG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgc3dpcGVyUmVmPy5jdXJyZW50Py5zd2lwZXI/LnNsaWRlUHJldigpO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEN1cnJlbnRJbmRleChzd2lwZXJSZWY/LmN1cnJlbnQ/LnN3aXBlcj8uYWN0aXZlSW5kZXgpO1xuICAgIH0sIDEwMCk7XG5cbiAgICBjbGVhckludGVydmFsKCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc3dpcGVyUmVmPy5jdXJyZW50Py5zd2lwZXI/LnNsaWRlTmV4dCgpO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEN1cnJlbnRJbmRleChzd2lwZXJSZWY/LmN1cnJlbnQ/LnN3aXBlcj8uYWN0aXZlSW5kZXgpO1xuICAgIH0sIDEwMCk7XG5cbiAgICBjbGVhckludGVydmFsKCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb250YWluZXJPZmZzZXQoe1xuICAgICAgbGVmdDogY29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCxcbiAgICAgIHRvcDogY29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0VG9wLFxuICAgIH0pO1xuICB9LCBbY29udGFpbmVyUmVmXSk7XG5cbiAgY29uc3QgYnJlYWtwb2ludHMgPSB7XG4gICAgMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICAgIDE2MDE6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwidGVhbVwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICA8Q29udGFpbmVyIHJlZj17Y29udGFpbmVyUmVmfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICAgIHRpdGxlPVwiTWVldCBvdXIgc3VwZXJoZXJvc1wiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJBbG9uZSB3ZSBjYW4gZG8gc28gbGl0dGxlLiBUb2dldGhlciB3ZSBjYW4gZG8gc28gbXVjaC5cIlxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Qm94XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWw6IGN1cnJlbnRJbmRleCA9PT0gMCA/IGNvbnRhaW5lck9mZnNldD8ubGVmdCA6IDAsXG4gICAgICAgICAgLi4uc3R5bGVzLnRlYW1XcmFwcGVyLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y3VycmVudEluZGV4ICE9PSAwICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyLWFycm93IHN3aXBlci1hcnJvdy1sZWZ0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXthcnJvd1JpZ2h0fSBhbHQ9XCJhcnJvdyBsZWZ0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpc0VuZCAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyLWFycm93IHN3aXBlci1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Fycm93UmlnaHR9IGFsdD1cImFycm93IHJpZ2h0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cblxuICAgICAgICA8U2xpZGUgcmlnaHQgY2FzY2FkZT5cbiAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICByZWY9e3N3aXBlclJlZn1cbiAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XG4gICAgICAgICAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk9e3RydWV9XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXs1fVxuICAgICAgICAgICAgYnJlYWtwb2ludHM9e2JyZWFrcG9pbnRzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPFRlYW1NZW1iZXIgbWVtYmVyPXtpdGVtfSAvPlxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgIDwvU2xpZGU+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2VjdGlvbjoge1xuICAgIHB0OiBbJzExMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzEyMHB4J10sXG4gICAgcGI6IFsnMTEwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTIwcHgnXSxcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIG1iOiBbMzBdLFxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNTAwLCA1NjAsIDczMF0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAzXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg3LCBudWxsLCBudWxsLCAyLjMzXSxcbiAgICB9LFxuICB9LFxuICB0ZWFtV3JhcHBlcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBsOiBbNl0sXG4gICAgcHI6IFs2LCBudWxsLCBudWxsLCAwXSxcbiAgICB0cmFuc2l0aW9uOiAnMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgJy5zd2lwZXItYXJyb3cnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiBbMzAsIG51bGwsIG51bGwsIG51bGwsIDQwLCA2MF0sXG4gICAgICBoZWlnaHQ6IFszMCwgbnVsbCwgbnVsbCwgbnVsbCwgNDAsIDYwXSxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDdweCAxNHB4IHJnYmEoMjUsIDYwLCAxMDEsIDAuMDYpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHpJbmRleDogMixcbiAgICAgIHRvcDogJ2NhbGMoNTAlIC0gNDBweCknLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgaW1nOiB7XG4gICAgICAgIG1heFdpZHRoOiBbOCwgMTAsIG51bGwsIG51bGwsICcxMDAlJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy5zd2lwZXItYXJyb3ctbGVmdCc6IHtcbiAgICAgIGxlZnQ6IFszLCBudWxsLCBudWxsLCBudWxsLCAyMCwgNTBdLFxuICAgICAgaW1nOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgICAgICAgbWFyZ2luTGVmdDogJy00cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuc3dpcGVyLWFycm93LXJpZ2h0Jzoge1xuICAgICAgcmlnaHQ6IFszLCBudWxsLCBudWxsLCBudWxsLCAyMCwgNTBdLFxuICAgICAgaW1nOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAnLTRweCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTd2lwZXJDb3JlLCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvU2VjdGlvbkhlYWRpbmcnO1xuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlMSBmcm9tICdhc3NldHMvZ2F1cmF2LnBuZyc7XG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2UyIGZyb20gJ2Fzc2V0cy9nYXVyYXYucG5nJztcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTMgZnJvbSAnYXNzZXRzL2dhdXJhdi5wbmcnO1xuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlNCBmcm9tICdhc3NldHMvZ2F1cmF2LnBuZyc7XG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2U1IGZyb20gJ2Fzc2V0cy9nYXVyYXYucG5nJztcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTYgZnJvbSAnYXNzZXRzL2dhdXJhdi5wbmcnO1xuaW1wb3J0IFRlc3RpbW9uaWFsc0NhcmQgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9UZXN0aW1vbmlhbENhcmQnO1xuXG5Td2lwZXJDb3JlLnVzZShbQXV0b3BsYXldKTtcblxuY29uc3QgVEVTVElNT05JQUxTX0RBVEEgPSBbXG4gIFtcbiAgICB7XG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2UxLFxuICAgICAgdGV4dDogJ0kgd291bGQgbGlrZSB0byB0YWtlIHRoaXMgb3BwZXJ0dW5pdHkgdG8gdGhhbmsgU0EgUGxhY2VzIGZvciB0aGUgZ3JlYXQgc2VydmljZSByZW5kZXJlZCB0byB1cyBhbmQgaW4gcGFydGljdWxhciBFc3RlbGxlLiBZb3UgZ290IG1lIHRoZSBiZXN0IHBsYWNlIGV2ZXIgaW4ganVzdCBhIGZldyBtb21lbnRzIGFmdGVyIEkgc3Bva2UgdG8geW91LicsXG4gICAgICB1c2VybmFtZTogJ0BEYXJzaGFuJyxcbiAgICAgIG5hbWU6ICdNciBEYXJzaGFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTIsXG4gICAgICB0ZXh0OiAnTWFueSB0aGFua3MgZm9yIHlvdSBraW5kIGFuZCBlZmZpY2llbnQgc2VydmljZS4gSSBoYXZlIGFscmVhZHkgYW5kIHdpbGwgZGVmaW5pdGVseSBjb250aW51ZSB0byByZWNvbW1lbmQgeW91ciBzZXJ2aWNlcyB0byBvdGhlcnMgaW4gdGhlIGZ1dHVyZS4nLFxuICAgICAgdXNlcm5hbWU6ICdAVmlrcmFtJyxcbiAgICAgIG5hbWU6ICdNci4gVmlrcmFtJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMyxcbiAgICAgIHRleHQ6ICdJIHdvdWxkIGp1c3QgbGlrZSB0byBjb21wbGltZW50IEVzdGVsbGUgUGVzdGFuYS4gU2hlIGhhcyBiZWVuIG1vc3QgcHJvZmVzc2lvbmFsIGFuZCBnb25lIHRvIGdyZWF0IGxlbmd0aHMgdG8gYXNzaXN0IG1lLiBIZXIgcGF0aWVuY2Ugd2l0aCBtZSBhcyBJIGNvbnRpbnVvdXNseSBjaGFuZ2VkIG15IHBsYW5zIGlzIHRvIGJlIGNvbW1lbmRlZC4gSGVyIHNlcnZpY2UgcmUtYWZmaXJtcyB3aHkgSSBhbHdheXMgY2hvb3NlIHRvIGJvb2sgdGhyb3VnaCBhbiBhZ2VuY3kgaW5zdGVhZCBvZiBkaXJlY3RseS4gVGhhbmsgeW91JyxcbiAgICAgIHVzZXJuYW1lOiAnQFJhaHVsJyxcbiAgICAgIG5hbWU6ICdNci4gUmFodWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNCxcbiAgICAgIHRleHQ6ICdJIGhhdmUgc2VsZG9tIGV4cGVyaWVuY2VkIHN1Y2ggYW4gZWZmaWNpZW50IGhlbHAgYW5kIHN1cHBvcnQgbGlrZSBmcm9tIHlvdSEgVGhhbmsgeW91IHNvIG11Y2guIFdlIHdpbGwgZG8gYWxsIHRoZSBib29raW5ncyBkdXJpbmcgdGhlIG5leHQgZmV3IGRheXMgYW5kIEkgd2lsbCByZXZlcnQgdG8geW91IHdpdGggdGhlIGVuZCByZXN1bHQnLFxuICAgICAgdXNlcm5hbWU6ICdAVmFpYmhhdicsXG4gICAgICBuYW1lOiAnTXIuIEJhaWJoYXYnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2U1LFxuICAgICAgdGV4dDogJ1RoYW5rIHlvdSBmb3IgYWxsIHlvdXIgaGVscC4gWW91ciBzZXJ2aWNlIHdhcyBleGNlbGxlbnQgYW5kIHZlcnkgRkFTVC4nLFxuICAgICAgdXNlcm5hbWU6ICdAcHJhdGFwJyxcbiAgICAgIG5hbWU6ICdNci4gUHJhdGFwJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTYsXG4gICAgICB0ZXh0OiAnRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHkgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmQgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2Egc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc28gcmVjb21tZW5kJyxcbiAgICAgIHVzZXJuYW1lOiAnQHN1ZHJlZXNoYScsXG4gICAgICBuYW1lOiAnTWlzcyBTdWRocmVlc2EnLFxuICAgIH0sXG4gIF0sXG5dO1xuXG5jb25zdCBUZXN0aW1vbmlhbHMgPSAoKSA9PiB7XG4gIGNvbnN0IHRlc3RpbW9uaWFsQ2Fyb3VzZWwgPSB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgc3BlZWQ6IDEwMDAsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgYXV0b0hlaWdodDogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgd2FpdEZvclRyYW5zaXRpb246IGZhbHNlLFxuICAgICAgZGVsYXk6IDQwMDAsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNjQwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgICAgNzY4OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgICAgMTAyNDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIDEyMDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwidGVzdGltb25pYWxcIiBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc30+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMudGVzdGltb25pYWxfX2hlYWRlcn0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgIHN4PXtzdHlsZXMudGVzdGltb25pYWxfX2hlYWRpbmd9XG4gICAgICAgICAgdGl0bGU9XCJXaGF0IGNsaWVudCBzYXkgYWJvdXQgdXNcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ3VzdG9tZXIgdGVzdGltb25pYWxcIlxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxTd2lwZXIgey4uLnRlc3RpbW9uaWFsQ2Fyb3VzZWx9PlxuICAgICAgICB7VEVTVElNT05JQUxTX0RBVEEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtpdGVtLm1hcCgoeyBpbWFnZSwgdGV4dCwgbmFtZSwgdXNlcm5hbWUgfSwgX2luZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxUZXN0aW1vbmlhbHNDYXJkXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBrZXk9e19pbmRleH1cbiAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRlc3RpbW9uaWFsczoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGNEY0RjYnLFxuICAgIHB0OiBbJzgwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIHBiOiBbJzYwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsIG51bGwsICcxMjBweCddLFxuICB9LFxuXG4gIHRlc3RpbW9uaWFsX19oZWFkZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgdGVzdGltb25pYWxfX2hlYWRpbmc6IHtcbiAgICBtYjogWzMwXSxcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDUwMCwgNTYwLCA3MzBdLFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogWzgsIG51bGwsIG51bGwsIDgsIDksIDEwLCAxMV0sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41N10sXG4gICAgfSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDNdLFxuICAgICAgbGluZUhlaWdodDogWzEuODcsIG51bGwsIG51bGwsIDIuMzNdLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgVGFicywgeyBUYWJQYW5lIH0gZnJvbSAncmMtdGFicyc7XG5pbXBvcnQgeyBSaUNoZWNrYm94Q2lyY2xlRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgdGFiSW1hZ2UxIGZyb20gJ2Fzc2V0cy93aHl1cy9zb2NpYWwucG5nJztcbmltcG9ydCB0YWJJbWFnZTIgZnJvbSAnYXNzZXRzL3doeXVzL2VycC5wbmcnO1xuaW1wb3J0IFNsaWRlIGZyb20gJ3JlYWN0LXJldmVhbC9TbGlkZSc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0YWJUaXRsZTogJ1doYXQgd2UgaW52ZXN0IGluPycsXG4gICAgdGl0bGU6IGBXZSB3aWxsIHR1cm4geW91ciBpZGVhIGluIHRoZSBzdWNjZXNzZnVsIGJ1c2luZXNzIG1vZGVsIGZyYW1ld29ya2AsXG4gICAgZGVzY3JpcHRpb246IGAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1hZ25hbSBhY2N1c2FtdXMgYXNwZXJuYXR1ciBlcnJvciB2b2x1cHRhdGVtIGN1cGlkaXRhdGUuYCxcbiAgICBpbWFnZTogdGFiSW1hZ2UxLFxuICAgIGxpc3Q6IFtcbiAgICAgICdFUlAgU3lzdGVtJyxcbiAgICAgICdBcHAgRGV2ZWxvcG1lbnQnLFxuICAgICAgJ1dlYiBEZXZlbG9wbWVudCcsXG4gICAgICAnU29jaWFsIE1hcmtldGluZycsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRhYlRpdGxlOiAnV2h5IGludmVzdCB0aHJvdWdoIHVzPycsXG4gICAgdGl0bGU6IGBXZSB3aWxsIHR1cm4geW91ciBpZGVhIGluIHRoZSBzdWNjZXNzZnVsIGJ1c2luZXNzIG1vZGVsIGZyYW1ld29ya2AsXG4gICAgZGVzY3JpcHRpb246IGAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1hZ25hbSBhY2N1c2FtdXMgYXNwZXJuYXR1ciBlcnJvciB2b2x1cHRhdGVtIGN1cGlkaXRhdGUuYCxcbiAgICBtb3JlTGluazogJyNleHBsb3JlLW1vcmUnLFxuICAgIGltYWdlOiB0YWJJbWFnZTIsXG4gICAgbGlzdDogWydHcm93dGgnLCAnVHJ1c3QnLCAnQ29sbGFicmF0aW9uJywgJ0lubm92YXRpb24nXSxcbiAgfSxcbl07XG5cbmNvbnN0IFdoeVVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJ3aHktdXNcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFRhYnMgc3g9e3N0eWxlcy50YWJzfSBhbmltYXRlZD17eyB0YWJQYW5lOiB0cnVlIH19PlxuICAgICAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxUYWJQYW5lXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgdGFiPXs8SGVhZGluZyBhcz1cImg0XCI+e2l0ZW0udGFiVGl0bGV9PC9IZWFkaW5nPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNsaWRlIGJvdHRvbSBjYXNjYWRlPlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZz57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubGlzdH0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpc3QubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpQ2hlY2tib3hDaXJjbGVGaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzNGREJCMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmlsbHVzdHJhdGlvbn0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltYWdlfSBhbHQ9XCJpbGx1c3RyYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdoeVVzO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlY3Rpb246IHtcbiAgICBwdDogWzExLCBudWxsLCBudWxsLCAxMl0sXG4gICAgcGI6IFs4LCBudWxsLCBudWxsLCA5LCBudWxsLCAxMV0sXG4gIH0sXG4gIHRhYnM6IHtcbiAgICBib3JkZXI6IDAsXG4gICAgJy5yYy10YWJzLW5hdic6IHtcbiAgICAgIG1iOiBbOCwgbnVsbCwgbnVsbCwgOSwgMTAsIDksIDEyXSxcbiAgICB9LFxuICAgICcucmMtdGFicy1uYXYtd3JhcCc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3JnYmEoJyMwMTA3MEQnLCAwLjEpfWAsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICAnLnJjLXRhYnMtbmF2LWxpc3QnOiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcbiAgICAgIHBiOiBbMywgbnVsbCwgbnVsbCwgNSwgbnVsbCwgNl0sXG4gICAgfSxcbiAgICAnLnJjLXRhYnMtdGFiLWJ0bic6IHtcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGltZzoge1xuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcucmMtdGFicy10YWInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAvLyBtOiBbJzAgNDVweCddLFxuICAgICAgaDQ6IHtcbiAgICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsIDE3LCBudWxsLCBudWxsLCA0XSxcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxuICAgICAgICB3aGl0ZVNwYWNlOiBbJ2JyZWFrLXNwYWNlcycsIG51bGwsIG51bGwsIG51bGwsICd1bnNldCddLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcucmMtdGFicy10YWJwYW5lJzoge1xuICAgICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgJ2dyaWQnXSxcbiAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uLXJldmVyc2UnLCBudWxsLCBudWxsLCAndW5zZXQnXSxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW251bGwsIG51bGwsIG51bGwsICcwLjlmciAxLjFmciddLFxuICAgICAgb3V0bGluZTogMCxcbiAgICAgIGdhcDogWzUsIG51bGwsIG51bGwsIDExXSxcbiAgICAgIGgyOiB7XG4gICAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICAgIGZvbnRTaXplOiBbMjQsIG51bGwsIG51bGwsIDYsIDI2LCA4LCA0MF0sXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgbGluZUhlaWdodDogWzEuNDUsIG51bGwsIG51bGwsIDEuNV0sXG4gICAgICAgIGxldHRlclNwYWNpbmc6IFtudWxsLCBudWxsLCBudWxsLCAnMC41cHgnLCBudWxsLCAnLTFweCddLFxuICAgICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgICAgIH0sXG4gICAgICBwOiB7XG4gICAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXG4gICAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMiwgMTddLFxuICAgICAgICBsaW5lSGVpZ2h0OiBbMS44NywgbnVsbCwgbnVsbCwgMiwgMi40OF0sXG4gICAgICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxuICAgICAgICBtdDogWzRdLFxuICAgICAgfSxcbiAgICAgICcubGlzdC1pdGVtJzoge1xuICAgICAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsIDEsIDJdLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFsyLjhdLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBsaXN0OiB7XG4gICAgbXQ6IFs1XSxcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMiwgMTY0cHgpJywgbnVsbCwgbnVsbCwgJ3JlcGVhdCgyLCAxODBweCknXSxcbiAgfSxcblxuICBpbGx1c3RyYXRpb246IHtcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgdGV4dEFsaWduOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxuICAgIGltZzoge1xuICAgICAgbWF4V2lkdGg6IFsnNjUlJywgbnVsbCwgbnVsbCwgJzEwMCUnLCBudWxsLCAnOTAlJywgJzEwMCUnXSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL1NlY3Rpb25IZWFkaW5nJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XG5pbXBvcnQgQXJyb3dPZGQgZnJvbSAnYXNzZXRzL2Fycm93T2RkLnN2Zyc7XG5pbXBvcnQgQXJyb3dFdmVuIGZyb20gJ2Fzc2V0cy9hcnJvd0V2ZW4uc3ZnJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnQXBwbHknLFxuICAgIHRleHQ6ICdBcHBseSBmb3IgdGhlIHBvc2l0aW9uIG9mIHlvdXIgY2hvaWNlJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnU2NyZWVuaW5nJyxcbiAgICB0ZXh0OiAnU2NyZWVuaW5nIHByb2Nlc3MgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdQYWNrYWdlJyxcbiAgICB0ZXh0OiAnUGFja2FnZSBzZWxlY3Rpb24gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6ICdUZWFtJyxcbiAgICB0ZXh0OiAnVGVhbSBzZWxlY3Rpb24gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy53b3JrZmxvd30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIldoYXRzIHRoZSBmdW5jdGlvblwiXG4gICAgICAgICAgdGl0bGU9XCJMZXTigJlzIHNlZSBob3cgaXQgd29ya3NcIlxuICAgICAgICAgIGlzV2hpdGU9e3RydWV9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWNvbkJveH0+e2AwJHtpdGVtLmlkfWB9PC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IGFycm93QW5pbSA9IGtleWZyYW1lc2BcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XG4gICAgfVxuXG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcbiAgICB9XG5cbiAgICA2MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDEsIDAsIDAsIDBkZWcpO1xuICAgIH1cblxuICAgIDgwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XG4gICAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICB3b3JrZmxvdzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIG1iOiAtMSxcbiAgICBwdDogMCxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzVweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDVweCAzMHB4JyxcbiAgICAgIG51bGwsXG4gICAgICAnNTBweCAyNXB4JyxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggNjVweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgICBdLFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbiAgICBteDogWydhdXRvJ10sXG4gICAgcHg6IFs0LCBudWxsLCBudWxsLCAwXSxcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICB3aWR0aDogMjE1LFxuICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJjpudGgtb2YtdHlwZSgybi0xKTo6YmVmb3JlJzoge1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dPZGR9KWAsXG4gICAgICBhbmltYXRpb246IGAke2Fycm93QW5pbX0gNXMgZWFzZS1vdXQgaW5maW5pdGVgLFxuICAgIH0sXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXG4gICAgICBhbmltYXRpb246IGAke2Fycm93QW5pbX0gNXMgZWFzZS1vdXQgaW5maW5pdGVgLFxuICAgICAgdG9wOiAxNyxcbiAgICB9LFxuICAgICcmOmxhc3QtY2hpbGQ6OmJlZm9yZSc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuXG4gIGljb25Cb3g6IHtcbiAgICB3aWR0aDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxuICAgIGhlaWdodDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiBbMTUsIG51bGwsIDIzLCBudWxsLCBudWxsLCAzMF0sXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG10OiAnLTVweCcsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgbGluZUhlaWdodDogWzEuNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS41NV0sXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxuICAgICAgbWI6IFsyLCAzXSxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgb3BhY2l0eTogMC43NSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbG9yczoge1xuICAgIHRleHQ6ICcjMzQzRDQ4JyxcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMjA3M0UnLFxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JyxcbiAgICBoZWFkaW5nX3NlY29uZGFyeTogJyMwRjIxMzcnLFxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcbiAgICBwcmltYXJ5OiAnIzM2MmM4OCcsXG4gICAgc2Vjb25kYXJ5OiAnIzBmMDc0YicsXG4gICAgbXV0ZWQ6ICcjRTRFNEU0JyxcblxuICAgIG1vZGVzOiB7XG4gICAgICBkYXJrOiB7XG4gICAgICAgIHRleHQ6ICcjZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxuICAgICAgICBwcmltYXJ5OiAnIzBjZicsXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxuICAgICAgICBtdXRlZDogJyMxMTEnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBicmVha3BvaW50czogW1xuICAgICc0ODBweCcsXG4gICAgJzY0MHB4JyxcbiAgICAnNzY4cHgnLFxuICAgICcxMDI0cHgnLFxuICAgICcxMjIwcHgnLFxuICAgICcxMzY2cHgnLFxuICAgICcxNjIwcHgnLFxuICBdLFxuICBmb250czoge1xuICAgIGJvZHk6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXG4gICAgaGVhZGluZzogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcbiAgfSxcbiAgZm9udFNpemVzOiBbMTIsIDE1LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDI4LCAzMiwgMzYsIDQyLCA0OCwgNTIsIDY0XSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiAnbm9ybWFsJyxcbiAgICBoZWFkaW5nOiA1MDAsXG4gICAgYm9sZDogNzAwLFxuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuOCxcbiAgICBoZWFkaW5nOiAxLjUsXG4gIH0sXG4gIGxldHRlclNwYWNpbmdzOiB7XG4gICAgYm9keTogJ25vcm1hbCcsXG4gICAgY2FwczogJzAuMmVtJyxcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcbiAgfSxcbiAgc3BhY2U6IFswLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDUwLCA4MCwgMTAwLCAxMjAsIDE1MF0sXG4gIGxheW91dDoge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWF4V2lkdGg6IFtcbiAgICAgICAgJzEwMCUnLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICAnNzgwcHgnLFxuICAgICAgICAnMTAyMHB4JyxcbiAgICAgICAgJzEyMDBweCcsXG4gICAgICAgIG51bGwsXG4gICAgICAgICcxMzEwcHgnLFxuICAgICAgXSxcbiAgICAgIHB4OiBbNCwgNl0sXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIHB5OiAzLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgdG9vbGJhcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH0sXG4gICAgbWFpbjoge30sXG4gIH0sXG5cbiAgc2VjdGlvbkhlYWRlcjoge1xuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnNTQwcHgnXSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbXQ6IFsnLTNweCcsIG51bGwsIC0xXSxcbiAgICBtYXJnaW5Cb3R0b206IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzY1cHgnLCBudWxsLCAnODBweCddLFxuICAgIG14OiAnYXV0bycsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgbnVsbCwgJzM2cHgnXSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCAxLjI1XSxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzAsICcxM3B4JywgbnVsbCwgJzE0cHgnXSxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgbGV0dGVyU3BhY2luZzogWycxLjVweCcsIG51bGwsICcycHgnXSxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBtYjogMixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxuICB9LFxuICBmb3Jtczoge1xuICAgIGxhYmVsOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMnB4IHByaW1hcnlgLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGV4dGFyZWE6IHtcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAycHggcHJpbWFyeWAsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIGhlYWRpbmc6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiBbNF0sXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41NXB4JyxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICBoZXJvUHJpbWFyeToge1xuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiBbXG4gICAgICAgICczMnB4JyxcbiAgICAgICAgJzM2cHgnLFxuICAgICAgICAnNDJweCcsXG4gICAgICAgICc0MHB4JyxcbiAgICAgICAgJzQycHgnLFxuICAgICAgICAnNTJweCcsXG4gICAgICAgICc1OHB4JyxcbiAgICAgICAgJzY2cHgnLFxuICAgICAgXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuMl0sXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxuICAgIH0sXG4gICAgaGVyb1NlY29uZGFyeToge1xuICAgICAgZm9udFNpemU6IFsyLCBudWxsLCAnMTdweCcsIG51bGwsIG51bGwsICcxOXB4JywgNF0sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS45LCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIG1iOiA1LFxuICAgICAgcHg6IFswLCBudWxsLCA1LCA2LCBudWxsLCA4LCA5XSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDRdLFxuICAgICAgbGluZUhlaWdodDogMS4yNSxcbiAgICAgIG1iOiAxLFxuICAgIH0sXG4gICAgbGVhZDoge1xuICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxuICAgICAgY29sb3I6ICdtdXRlZCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGNvbG9yOiAnIzAwQTk5RCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gICAgfSxcbiAgfSxcbiAgbGlua3M6IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9LFxuICAgIGJvbGQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIG5hdjoge1xuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgJ2lubGluZS1ibG9jayddLFxuICAgICAgcHg6IDI1LFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHB4OiAwLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgfSxcbiAgICBsb2dvOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2VzOiB7XG4gICAgYXZhdGFyOiB7XG4gICAgICB3aWR0aDogNDgsXG4gICAgICBoZWlnaHQ6IDQ4LFxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcbiAgICB9LFxuICB9LFxuICBidXR0b25zOiB7XG4gICAgbWVudToge1xuICAgICAgZGlzcGxheTogW251bGwsIG51bGwsICdub25lJ10sXG4gICAgfSxcbiAgICBkZWZhdWx0QnRuOiB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGxldHRlclNwYWNpbmdzOiAnLTAuMTVweCcsXG4gICAgICBwYWRkaW5nOiBbJzEycHggMjBweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDIzMywgNzYsIDg0LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgd2hpdGVCdXR0b246IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBiZzogJ3doaXRlJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDEycHggMjRweCAtMTBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgcGFkZGluZzogWycxMHB4IDE1cHgnLCBudWxsLCAnMTVweCAzMHB4J10sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGV4dEJ1dHRvbjoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgc3ZnOiB7XG4gICAgICAgIGZvbnRTaXplOiBbNCwgNl0sXG4gICAgICAgIG1yOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHN0eWxlczoge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gICAgfSxcbiAgICBocjoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Q5RTBFNycsXG4gICAgfSxcbiAgICB1bDoge1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgfSxcbiAgICBzck9ubHk6IHtcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxuICAgIH0sXG4gIH0sXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9saXNoZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtZHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLXRhYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3JpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3NpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJldmVhbC9TbGlkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXZlYWwvWm9vbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRoZW1lLXVpXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=