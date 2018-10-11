"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = _styled.default.button({
  overflow: 'hidden',
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 13,
  padding: '3px 10px',
  alignSelf: 'flex-start',
  flexShrink: 0,
  ':hover': {
    backgroundColor: '#f4f7fa',
    borderColor: '#ddd'
  },
  ':active': {
    backgroundColor: '#e9ecef',
    borderColor: '#ccc'
  }
}, function (_ref) {
  var styles = _ref.styles;
  return styles;
});

var ContentWrapper = _styled.default.div({
  transition: 'transform .2s ease',
  height: 16
}, function (_ref2) {
  var styles = _ref2.styles,
      toggled = _ref2.toggled;
  return _objectSpread({}, styles, {
    transform: toggled ? 'translateY(0px)' : 'translateY(-100%) translateY(-6px)'
  });
});

function CopyButton(_ref3) {
  var theme = _ref3.theme,
      onClick = _ref3.onClick,
      toggled = _ref3.toggled;
  var _theme$copyButton = theme.copyButton,
      copyButton = _theme$copyButton === void 0 ? {} : _theme$copyButton,
      copyButtonContent = theme.copyButtonContent;

  var _copyButton$toggleTex = copyButton.toggleText,
      toggleText = _copyButton$toggleTex === void 0 ? 'Copied!' : _copyButton$toggleTex,
      _copyButton$text = copyButton.text,
      text = _copyButton$text === void 0 ? 'Copy' : _copyButton$text,
      copyButtonStyles = _objectWithoutProperties(copyButton, ["toggleText", "text"]);

  return _react.default.createElement(Button, {
    onClick: onClick,
    styles: copyButtonStyles
  }, _react.default.createElement(ContentWrapper, {
    styles: copyButtonContent,
    toggled: toggled
  }, _react.default.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, toggleText), _react.default.createElement("div", null, text)));
}

CopyButton.propTypes = {
  onClick: _propTypes.default.func,
  toggled: _propTypes.default.bool,
  theme: _propTypes.default.shape({
    copyButton: _propTypes.default.object
  })
};
CopyButton.defaultProps = {
  onClick: function onClick() {},
  toggled: false,
  theme: {}
};
var _default = CopyButton;
exports.default = _default;