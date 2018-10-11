"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _PropTable = _interopRequireWildcard(require("./PropTable"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('PropTable', function () {
  describe('multiLineText', function () {
    var singleLine = 'Foo bar baz';
    var unixMultiLineText = 'foo \n bar \n baz';
    var windowsMultiLineText = 'foo \r bar \r baz';
    var duplicatedMultiLine = 'foo\nfoo\nfoo';
    var propDefinitions = [{
      defaultValue: undefined,
      description: '',
      propType: {
        name: 'string'
      },
      property: 'foo',
      required: false
    }];

    var FooComponent = function FooComponent() {
      return _react.default.createElement("div", null);
    };

    var propTableProps = {
      type: FooComponent,
      maxPropArrayLength: 5,
      maxPropObjectKeys: 5,
      maxPropStringLength: 5,
      propDefinitions: propDefinitions
    };
    it('should include all propTypes by default', function () {
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_PropTable.default, propTableProps));
      expect(wrapper).toMatchSnapshot();
    });
    it('should exclude excluded propTypes', function () {
      var props = _objectSpread({}, propTableProps, {
        excludedPropTypes: ['foo']
      });

      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_PropTable.default, props));
      expect(wrapper).toMatchSnapshot();
    });
    it('should return a blank string for a null input', function () {
      expect((0, _PropTable.multiLineText)(null)).toBe(null);
    });
    it('should return a blank string for an undefined input', function () {
      expect((0, _PropTable.multiLineText)(undefined)).toBe(undefined);
    });
    it('should cast a number to a string', function () {
      expect((0, _PropTable.multiLineText)(1)).toBe('1');
    });
    it('should return its input for a single line of text', function () {
      expect((0, _PropTable.multiLineText)(singleLine)).toBe(singleLine);
    });
    it('should return an array for unix multiline text', function () {
      expect((0, _PropTable.multiLineText)(unixMultiLineText)).toHaveLength(3);
    });
    it('should return an array for windows multiline text', function () {
      expect((0, _PropTable.multiLineText)(windowsMultiLineText)).toHaveLength(3);
    });
    it('should return an array with unique keys for duplicated multiline text', function () {
      var wrappers = (0, _PropTable.multiLineText)(duplicatedMultiLine).map(function (tag) {
        return (0, _enzyme.shallow)(tag);
      });
      var keys = wrappers.map(function (wrapper) {
        return wrapper.key();
      });
      var deDup = new Set(keys);
      expect(keys).toHaveLength(deDup.size);
    });
    it('should have 2 br tags for 3 lines of text', function () {
      var tree = _reactTestRenderer.default.create((0, _PropTable.multiLineText)(unixMultiLineText)).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});