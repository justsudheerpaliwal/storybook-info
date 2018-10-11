"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@storybook/components");

var _PrettyPropType = _interopRequireDefault(require("./PrettyPropType"));

var _PropertyLabel = _interopRequireDefault(require("./PropertyLabel"));

var _proptypes = require("./proptypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MARGIN_SIZE = 15;

var Shape =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Shape, _React$Component);

  function Shape(props) {
    var _this;

    _classCallCheck(this, Shape);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shape).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggle", function () {
      var minimized = _this.state.minimized;

      _this.setState({
        minimized: !minimized
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseEnter", function () {
      _this.setState({
        hover: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseLeave", function () {
      _this.setState({
        hover: false
      });
    });

    _this.state = {
      minimized: false
    };
    return _this;
  }

  _createClass(Shape, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          propType = _this$props.propType,
          depth = _this$props.depth;
      var _this$state = this.state,
          hover = _this$state.hover,
          minimized = _this$state.minimized;
      var propTypes = (0, _proptypes.getPropTypes)(propType);
      return _react.default.createElement("span", null, _react.default.createElement(_components.HighlightButton, {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        highlight: hover,
        onClick: this.handleToggle
      }, '{'), _react.default.createElement(_components.HighlightButton, {
        onClick: this.handleToggle
      }, "..."), !minimized && Object.keys(propTypes).map(function (childProperty) {
        return _react.default.createElement("div", {
          key: childProperty,
          style: {
            marginLeft: depth * MARGIN_SIZE
          }
        }, _react.default.createElement(_PropertyLabel.default, {
          property: childProperty,
          required: propTypes[childProperty].required
        }), _react.default.createElement(_PrettyPropType.default, {
          depth: depth + 1,
          propType: propTypes[childProperty]
        }), ",");
      }), _react.default.createElement(_components.HighlightButton, {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        highlight: hover,
        onClick: this.handleToggle
      }, '}'));
    }
  }]);

  return Shape;
}(_react.default.Component);

Shape.propTypes = {
  propType: _proptypes.TypeInfo,
  depth: _propTypes.default.number.isRequired
};
Shape.defaultProps = {
  propType: null
};
var _default = Shape;
exports.default = _default;