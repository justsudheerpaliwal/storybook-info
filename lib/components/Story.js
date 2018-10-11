"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _global = _interopRequireDefault(require("global"));

var _components = require("@storybook/components");

var _marksy = _interopRequireDefault(require("marksy"));

var _Node = _interopRequireDefault(require("./Node"));

var _markdown = require("./markdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_global.default.STORYBOOK_REACT_CLASSES = _global.default.STORYBOOK_REACT_CLASSES || [];
var STORYBOOK_REACT_CLASSES = _global.default.STORYBOOK_REACT_CLASSES;

var getName = function getName(type) {
  return type.displayName || type.name;
};

var stylesheetBase = {
  button: {
    base: {
      fontFamily: 'sans-serif',
      fontSize: '12px',
      display: 'block',
      position: 'fixed',
      border: 'none',
      background: '#28c',
      color: '#fff',
      padding: '5px 15px',
      cursor: 'pointer'
    },
    topRight: {
      top: 0,
      right: 0,
      borderRadius: '0 0 0 5px'
    }
  },
  info: {
    position: 'fixed',
    background: 'white',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 40px',
    overflow: 'auto',
    zIndex: 99999
  },
  children: {
    position: 'relative',
    zIndex: 0
  },
  infoBody: _objectSpread({}, _components.baseFonts, {
    fontWeight: 300,
    lineHeight: 1.45,
    fontSize: '15px',
    border: '1px solid #eee',
    padding: '20px 40px 40px',
    borderRadius: '2px',
    backgroundColor: '#fff',
    marginTop: '20px',
    marginBottom: '20px'
  }),
  infoContent: {
    marginBottom: 0
  },
  infoStory: {},
  jsxInfoContent: {
    borderTop: '1px solid #eee',
    margin: '20px 0 0 0'
  },
  header: {
    h1: {
      margin: 0,
      padding: 0,
      fontSize: '35px'
    },
    h2: {
      margin: '0 0 10px 0',
      padding: 0,
      fontWeight: 400,
      fontSize: '22px'
    },
    body: {
      borderBottom: '1px solid #eee',
      paddingTop: 10,
      marginBottom: 10
    }
  },
  source: {
    h1: {
      margin: '20px 0 0 0',
      padding: '0 0 5px 0',
      fontSize: '25px',
      borderBottom: '1px solid #EEE'
    }
  },
  propTableHead: {
    margin: '20px 0 0 0'
  }
};

var Story =
/*#__PURE__*/
function (_Component) {
  _inherits(Story, _Component);

  function Story(props) {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Story);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Story)).call.apply(_getPrototypeOf2, [this, props].concat(args)));
    _this.state = {
      open: false
    };
    _this.marksy = (0, _marksy.default)({
      createElement: _react.createElement,
      elements: props.components
    });
    return _this;
  }

  _createClass(Story, [{
    key: "_renderStory",
    value: function _renderStory() {
      var stylesheet = this.state.stylesheet;
      var children = this.props.children;
      return _react.default.createElement("div", {
        style: stylesheet.infoStory
      }, children);
    }
  }, {
    key: "_renderInline",
    value: function _renderInline() {
      var stylesheet = this.state.stylesheet;
      return _react.default.createElement("div", null, this._renderInlineHeader(), this._renderStory(), _react.default.createElement("div", {
        style: stylesheet.infoPage
      }, _react.default.createElement("div", {
        style: stylesheet.infoBody
      }, this._getInfoContent(), this._getComponentDescription(), this._getSourceCode(), this._getPropTables())));
    }
  }, {
    key: "_renderInlineHeader",
    value: function _renderInlineHeader() {
      var stylesheet = this.state.stylesheet;

      var infoHeader = this._getInfoHeader();

      return infoHeader && _react.default.createElement("div", {
        style: stylesheet.infoPage
      }, _react.default.createElement("div", {
        style: stylesheet.infoBody
      }, infoHeader));
    }
  }, {
    key: "_renderOverlay",
    value: function _renderOverlay() {
      var _this2 = this;

      var _this$state = this.state,
          stylesheet = _this$state.stylesheet,
          open = _this$state.open;
      var children = this.props.children;

      var buttonStyle = _objectSpread({}, stylesheet.button.base, stylesheet.button.topRight);

      var infoStyle = Object.assign({}, stylesheet.info);

      if (!open) {
        infoStyle.display = 'none';
      }

      var openOverlay = function openOverlay() {
        _this2.setState({
          open: true
        });

        return false;
      };

      var closeOverlay = function closeOverlay() {
        _this2.setState({
          open: false
        });

        return false;
      };

      return _react.default.createElement("div", null, _react.default.createElement("div", {
        style: stylesheet.children
      }, children), _react.default.createElement("button", {
        type: "button",
        style: buttonStyle,
        onClick: openOverlay
      }, "Show Info"), _react.default.createElement("div", {
        style: infoStyle
      }, _react.default.createElement("button", {
        type: "button",
        style: buttonStyle,
        onClick: closeOverlay
      }, "\xD7"), _react.default.createElement("div", {
        style: stylesheet.infoPage
      }, _react.default.createElement("div", {
        style: stylesheet.infoBody
      }, this._getInfoHeader(), this._getInfoContent(), this._getComponentDescription(), this._getSourceCode(), this._getPropTables()))));
    }
  }, {
    key: "_getInfoHeader",
    value: function _getInfoHeader() {
      var stylesheet = this.state.stylesheet;
      var _this$props = this.props,
          context = _this$props.context,
          showHeader = _this$props.showHeader;

      if (!context || !showHeader) {
        return null;
      }

      return _react.default.createElement("div", {
        style: stylesheet.header.body
      }, _react.default.createElement("h1", {
        style: stylesheet.header.h1
      }, context.kind), _react.default.createElement("h2", {
        style: stylesheet.header.h2
      }, context.story));
    }
  }, {
    key: "_getInfoContent",
    value: function _getInfoContent() {
      var _this$props2 = this.props,
          info = _this$props2.info,
          showInline = _this$props2.showInline;
      var stylesheet = this.state.stylesheet;

      if (!info) {
        return '';
      }

      if (_react.default.isValidElement(info)) {
        return _react.default.createElement("div", {
          style: showInline ? stylesheet.jsxInfoContent : stylesheet.infoContent
        }, info);
      }

      var lines = info.split('\n');

      while (lines[0].trim() === '') {
        lines.shift();
      }

      var padding = 0;
      var matches = lines[0].match(/^ */);

      if (matches) {
        padding = matches[0].length;
      }

      var source = lines.map(function (s) {
        return s.slice(padding);
      }).join('\n');
      return _react.default.createElement("div", {
        style: stylesheet.infoContent
      }, this.marksy(source).tree);
    }
  }, {
    key: "_getComponentDescription",
    value: function _getComponentDescription() {
      var context = this.props.context;
      var retDiv = null;

      if (Object.keys(STORYBOOK_REACT_CLASSES).length) {
        Object.keys(STORYBOOK_REACT_CLASSES).forEach(function (key) {
          if (STORYBOOK_REACT_CLASSES[key].name === context.story) {
            retDiv = _react.default.createElement("div", null, STORYBOOK_REACT_CLASSES[key].docgenInfo.description);
          }
        });
      }

      return retDiv;
    }
  }, {
    key: "_getSourceCode",
    value: function _getSourceCode() {
      var _this$props3 = this.props,
          showSource = _this$props3.showSource,
          maxPropsIntoLine = _this$props3.maxPropsIntoLine,
          maxPropObjectKeys = _this$props3.maxPropObjectKeys,
          maxPropArrayLength = _this$props3.maxPropArrayLength,
          maxPropStringLength = _this$props3.maxPropStringLength,
          children = _this$props3.children;
      var stylesheet = this.state.stylesheet;

      if (!showSource) {
        return null;
      }

      return _react.default.createElement("div", null, _react.default.createElement("h1", {
        style: stylesheet.source.h1
      }, "Story Source"), _react.default.createElement(_markdown.Pre, null, _react.default.Children.map(children, function (root, idx) {
        return _react.default.createElement(_Node.default, {
          key: idx,
          node: root,
          depth: 0,
          maxPropsIntoLine: maxPropsIntoLine,
          maxPropObjectKeys: maxPropObjectKeys,
          maxPropArrayLength: maxPropArrayLength,
          maxPropStringLength: maxPropStringLength
        });
      })));
    }
  }, {
    key: "_getPropTables",
    value: function _getPropTables() {
      var _this3 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          propTablesExclude = _this$props4.propTablesExclude,
          maxPropObjectKeys = _this$props4.maxPropObjectKeys,
          maxPropArrayLength = _this$props4.maxPropArrayLength,
          maxPropStringLength = _this$props4.maxPropStringLength,
          excludedPropTypes = _this$props4.excludedPropTypes;
      var propTables = this.props.propTables;
      var stylesheet = this.state.stylesheet;
      var types = new Map();

      if (propTables === null) {
        return null;
      }

      if (!children) {
        return null;
      }

      if (propTables) {
        propTables.forEach(function (type) {
          types.set(type, true);
        });
      } // // depth-first traverse and collect types
      // const extract = innerChildren => {
      //   if (!innerChildren) {
      //     return;
      //   }
      //   if (Array.isArray(innerChildren)) {
      //     innerChildren.forEach(extract);
      //     return;
      //   }
      //   if (innerChildren.props && innerChildren.props.children) {
      //     extract(innerChildren.props.children);
      //   }
      //   if (
      //     typeof innerChildren === 'string' ||
      //     typeof innerChildren.type === 'string' ||
      //     (Array.isArray(propTablesExclude) && // also ignore excluded types
      //       ~propTablesExclude.indexOf(innerChildren.type)) // eslint-disable-line no-bitwise
      //   ) {
      //     return;
      //   }
      //   if (innerChildren.type && !types.has(innerChildren.type)) {
      //     types.set(innerChildren.type, true);
      //   }
      // };
      // // extract components from children
      // extract(children);


      var array = Array.from(types.keys());
      array.sort(function (a, b) {
        return getName(a) > getName(b);
      });
      propTables = array.map(function (type, i) {
        return (// eslint-disable-next-line react/no-array-index-key
          _react.default.createElement("div", {
            key: "".concat(getName(type), "_").concat(i)
          }, _react.default.createElement("h2", {
            style: stylesheet.propTableHead
          }, "\"", getName(type), "\" Component"), _react.default.createElement(_this3.props.PropTable, {
            type: type,
            maxPropObjectKeys: maxPropObjectKeys,
            maxPropArrayLength: maxPropArrayLength,
            maxPropStringLength: maxPropStringLength,
            excludedPropTypes: excludedPropTypes
          }))
        );
      });

      if (!propTables || propTables.length === 0) {
        return null;
      }

      return _react.default.createElement("div", null, _react.default.createElement("h1", {
        style: stylesheet.source.h1
      }, "Prop Types"), propTables);
    }
  }, {
    key: "render",
    value: function render() {
      var showInline = this.props.showInline; // <ThemeProvider theme={stylesheet}></ThemeProvider>

      return showInline ? this._renderInline() : this._renderOverlay();
    }
  }]);

  return Story;
}(_react.Component);

Story.getDerivedStateFromProps = function (_ref) {
  var styles = _ref.styles;
  return {
    stylesheet: styles(stylesheetBase)
  };
};

Story.displayName = 'Story';
Story.propTypes = {
  context: _propTypes.default.shape({
    kind: _propTypes.default.string,
    story: _propTypes.default.string
  }),
  info: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  propTables: _propTypes.default.arrayOf(_propTypes.default.func),
  propTablesExclude: _propTypes.default.arrayOf(_propTypes.default.func),
  showInline: _propTypes.default.bool,
  showHeader: _propTypes.default.bool,
  showSource: _propTypes.default.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  styles: _propTypes.default.func.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  components: _propTypes.default.shape({}),
  maxPropsIntoLine: _propTypes.default.number.isRequired,
  maxPropObjectKeys: _propTypes.default.number.isRequired,
  maxPropArrayLength: _propTypes.default.number.isRequired,
  maxPropStringLength: _propTypes.default.number.isRequired,
  excludedPropTypes: _propTypes.default.arrayOf(_propTypes.default.string)
};
Story.defaultProps = {
  context: null,
  info: '',
  children: null,
  propTables: null,
  propTablesExclude: [],
  showInline: false,
  showHeader: true,
  showSource: true,
  components: {},
  excludedPropTypes: []
};
(0, _reactLifecyclesCompat.polyfill)(Story);
var _default = Story;
exports.default = _default;