'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var semanticUiReact = require('semantic-ui-react');
var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var formik = require('formik');

/**
 * see: https://jaredpalmer.com/formik/docs/api/formik#props
 * @param {*} props any prop that can be used in the Formik component
 * @returns {Formik} Formik component
 */

var Form = function Form(props) {
  return React.createElement(formik.Formik, props, function (formprops) {
    return React.createElement(semanticUiReact.Form, {
      onSubmit: formprops.handleSubmit
    }, props.children(formprops));
  });
};

Form.propTypes = {
  children: PropTypes.func.isRequired
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
/**
 * see: https://jaredpalmer.com/formik/docs/api/field#props
 * @param {*} WrappedComponent The component that is going to be wrapped
 * @returns {HOC} A High order component for the Formik Field component 
 */


var withField = function withField(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(withFieldHOC, _React$Component);

    function withFieldHOC() {
      _classCallCheck(this, withFieldHOC);

      return _possibleConstructorReturn(this, _getPrototypeOf(withFieldHOC).apply(this, arguments));
    }

    _createClass(withFieldHOC, [{
      key: "render",
      value: function render() {
        var _this = this;

        var name = this.props.name;
        return React.createElement(formik.Field, {
          name: name
        }, function (fieldProps) {
          return React.createElement(WrappedComponent, _extends({
            error: Boolean(fieldProps.form.touched[name] && fieldProps.form.errors[name])
          }, _this.props, fieldProps));
        });
      }
    }]);

    return withFieldHOC;
  }(React.Component), _defineProperty(_class, "displayName", "withField(".concat(getDisplayName(WrappedComponent), ")")), _defineProperty(_class, "propTypes", {
    name: PropTypes.string.isRequired
  }), _temp;
};

var Checkbox = function Checkbox(_ref) {
  var field = _ref.field,
      form = _ref.form,
      name = _ref.name,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["field", "form", "name", "value"]);

  return React.createElement(semanticUiReact.Form.Checkbox, _extends({}, props, {
    checked: field.value.includes(value),
    onChange: function onChange() {
      if (field.value.includes(value)) {
        var nextValue = field.value.filter(function (v) {
          return v !== value;
        });
        form.setFieldValue(name, nextValue);
      } else {
        var _nextValue = field.value.concat(value);

        form.setFieldValue(name, _nextValue);
      }
    },
    onBlur: function onBlur() {
      return form.setFieldTouched(name);
    }
  }));
};

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  field: PropTypes.object,
  form: PropTypes.object
};
var Checkbox$1 = withField(Checkbox);

var Input = function Input(_ref) {
  var field = _ref.field,
      form = _ref.form,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["field", "form", "name"]);

  return React.createElement(semanticUiReact.Form.Input, _extends({}, props, field, {
    name: name
  }));
};

Input.propTypes = {
  name: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object
};
var Input$1 = withField(Input);

var Dropdown = function Dropdown(_ref) {
  var field = _ref.field,
      form = _ref.form,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["field", "form", "name"]);

  return React.createElement(semanticUiReact.Form.Dropdown, _extends({}, props, field, {
    name: name,
    onChange: function onChange(e, _ref2) {
      var value = _ref2.value;
      form.setFieldValue(name, value);
    },
    onBlur: function onBlur() {
      return form.setFieldTouched(name);
    }
  }));
};

Dropdown.propTypes = {
  name: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object
};
var Dropdown$1 = withField(Dropdown);

var Radio = function Radio(_ref) {
  var field = _ref.field,
      form = _ref.form,
      name = _ref.name,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["field", "form", "name", "value"]);

  return React.createElement(semanticUiReact.Form.Radio, _extends({}, props, {
    checked: field.value.includes(value),
    onChange: function onChange() {
      form.setFieldValue(name, value);
    },
    onBlur: function onBlur() {
      return form.setFieldTouched(name);
    }
  }));
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  field: PropTypes.object,
  form: PropTypes.object
};
var Radio$1 = withField(Radio);

var Select = function Select(props) {
  return React.createElement(Dropdown$1, _extends({
    selection: true
  }, props));
};

var TextArea = function TextArea(_ref) {
  var field = _ref.field,
      form = _ref.form,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["field", "form", "name"]);

  return React.createElement(semanticUiReact.Form.TextArea, _extends({}, props, field, {
    name: name
  }));
};

TextArea.propTypes = {
  name: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object
};
var TextArea$1 = withField(TextArea);

var Group = semanticUiReact.Form.Group;
var Button = semanticUiReact.Form.Button;
Form.Checkbox = Checkbox$1;
Form.Input = Input$1;
Form.Dropdown = Dropdown$1;
Form.Radio = Radio$1;
Form.Select = Select;
Form.TextArea = TextArea$1;
Form.Group = Group;
Form.Button = Button;

exports.Button = Button;
exports.Checkbox = Checkbox$1;
exports.Dropdown = Dropdown$1;
exports.Group = Group;
exports.Input = Input$1;
exports.Radio = Radio$1;
exports.Select = Select;
exports.TextArea = TextArea$1;
exports.default = Form;
//# sourceMappingURL=index.js.map
