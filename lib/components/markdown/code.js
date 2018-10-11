"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blockquote = Blockquote;
Object.defineProperty(exports, "Pre", {
  enumerable: true,
  get: function get() {
    return _pre.default;
  }
});
exports.Code = void 0;

var _global = require("global");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pre = _interopRequireDefault(require("./pre/pre"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Code =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, _getPrototypeOf(Code).apply(this, arguments));
  }

  _createClass(Code, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.highlight();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: "highlight",
    value: function highlight() {
      if (typeof _global.Prism !== 'undefined') {
        _global.Prism.highlightAll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          language = _this$props.language,
          code = _this$props.code;
      var codeStyle = {
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        backgroundColor: '#fafafa'
      };
      var preStyle = {
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        backgroundColor: '#fafafa',
        padding: '.5rem',
        lineHeight: 1.5,
        overflowX: 'scroll'
      };
      var className = language ? "language-".concat(language) : '';
      return _react.default.createElement("pre", {
        style: preStyle,
        className: className
      }, _react.default.createElement("code", {
        style: codeStyle,
        className: className
      }, code));
    }
  }]);

  return Code;
}(_react.default.Component);

exports.Code = Code;
Code.propTypes = {
  language: _propTypes.default.string,
  code: _propTypes.default.node
};
Code.defaultProps = {
  language: null,
  code: null
};

function Blockquote(_ref) {
  var children = _ref.children;
  var style = {
    fontSize: '1.88em',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    borderLeft: '8px solid #fafafa',
    padding: '1rem'
  };
  return _react.default.createElement("blockquote", {
    style: style
  }, children);
}

Blockquote.propTypes = {
  children: _propTypes.default.node
};
Blockquote.defaultProps = {
  children: null
};