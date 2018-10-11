"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Node;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Props = _interopRequireDefault(require("./Props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
  containerStyle: {},
  tagStyle: {
    color: '#777'
  }
};

function getData(element) {
  var data = {
    name: null,
    text: null,
    children: null
  };

  if (element === null) {
    return data;
  }

  if (typeof element === 'string') {
    data.text = element;
    return data;
  }

  if (typeof element === 'number') {
    data.text = String.toString(element);
    return data;
  }

  data.children = element.props.children;
  var type = element.type;

  if (typeof type === 'string') {
    data.name = type;
  } else {
    data.name = type.displayName || type.name || 'Unknown';
  }

  return data;
}

function Node(props) {
  var node = props.node,
      depth = props.depth,
      maxPropsIntoLine = props.maxPropsIntoLine,
      maxPropObjectKeys = props.maxPropObjectKeys,
      maxPropArrayLength = props.maxPropArrayLength,
      maxPropStringLength = props.maxPropStringLength;
  var tagStyle = stylesheet.tagStyle,
      containerStyle = stylesheet.containerStyle;
  var leftPad = {
    paddingLeft: 3 + (depth + 1) * 15,
    paddingRight: 3
  }; // Keep a copy so that further mutations to containerStyle don't impact us:

  var containerStyleCopy = Object.assign({}, containerStyle, leftPad);

  var _getData = getData(node),
      name = _getData.name,
      text = _getData.text,
      children = _getData.children; // Just text


  if (!name) {
    return _react.default.createElement("div", {
      style: containerStyleCopy
    }, _react.default.createElement("span", {
      style: tagStyle
    }, text));
  } // Single-line tag


  if (!children) {
    return _react.default.createElement("div", {
      style: containerStyleCopy
    }, _react.default.createElement("span", {
      style: tagStyle
    }, "<", name), _react.default.createElement(_Props.default, {
      node: node,
      singleLine: true,
      maxPropsIntoLine: maxPropsIntoLine,
      maxPropObjectKeys: maxPropObjectKeys,
      maxPropArrayLength: maxPropArrayLength,
      maxPropStringLength: maxPropStringLength
    }), _react.default.createElement("span", {
      style: tagStyle
    }, "/>"));
  } // tag with children


  return _react.default.createElement("div", null, _react.default.createElement("div", {
    style: containerStyleCopy
  }, _react.default.createElement("span", {
    style: tagStyle
  }, "<", name), _react.default.createElement(_Props.default, {
    node: node,
    maxPropsIntoLine: maxPropsIntoLine,
    maxPropObjectKeys: maxPropObjectKeys,
    maxPropArrayLength: maxPropArrayLength,
    maxPropStringLength: maxPropStringLength
  }), _react.default.createElement("span", {
    style: tagStyle
  }, ">")), _react.default.Children.map(children, function (childElement) {
    return _react.default.createElement(Node, {
      node: childElement,
      depth: depth + 1,
      maxPropsIntoLine: maxPropsIntoLine,
      maxPropObjectKeys: maxPropObjectKeys,
      maxPropArrayLength: maxPropArrayLength,
      maxPropStringLength: maxPropStringLength
    });
  }), _react.default.createElement("div", {
    style: containerStyleCopy
  }, _react.default.createElement("span", {
    style: tagStyle
  }, "</", name, ">")));
}

Node.defaultProps = {
  node: null,
  depth: 0
};
Node.propTypes = {
  node: _propTypes.default.node,
  depth: _propTypes.default.number,
  maxPropsIntoLine: _propTypes.default.number.isRequired,
  maxPropObjectKeys: _propTypes.default.number.isRequired,
  maxPropArrayLength: _propTypes.default.number.isRequired,
  maxPropStringLength: _propTypes.default.number.isRequired
};