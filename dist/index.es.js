import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { Form } from 'semantic-ui-react';

/**
 * see: https://jaredpalmer.com/formik/docs/api/formik#props
 * @param {*} props any prop that can be used in the Formik component
 * @returns {Formik} Formik component
 */
var Form$1 = function Form$$1(props) {
  return React.createElement(
    Formik,
    props,
    function (formprops) {
      return React.createElement(
        Form,
        { onSubmit: formprops.handleSubmit },
        props.children(formprops)
      );
    }
  );
};

Form$1.propTypes = {
  children: PropTypes.func.isRequired
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

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

  return _temp = _class = function (_React$Component) {
    inherits(withFieldHOC, _React$Component);

    function withFieldHOC() {
      classCallCheck(this, withFieldHOC);
      return possibleConstructorReturn(this, (withFieldHOC.__proto__ || Object.getPrototypeOf(withFieldHOC)).apply(this, arguments));
    }

    createClass(withFieldHOC, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var name = this.props.name;

        return React.createElement(
          Field,
          { name: name },
          function (fieldProps) {
            return React.createElement(WrappedComponent, _extends({
              error: Boolean(fieldProps.form.touched[name] && fieldProps.form.errors[name])
            }, _this2.props, fieldProps));
          }
        );
      }
    }]);
    return withFieldHOC;
  }(React.Component), _class.displayName = 'withField(' + getDisplayName(WrappedComponent) + ')', _class.propTypes = {
    name: PropTypes.string.isRequired
  }, _temp;
};

var Checkbox = function Checkbox(_ref) {
  var field = _ref.field,
      form = _ref.form,
      name = _ref.name,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['field', 'form', 'name', 'value']);
  return React.createElement(Form.Checkbox, _extends({}, props, {
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
      props = objectWithoutProperties(_ref, ['field', 'form', 'name']);
  return React.createElement(Form.Input, _extends({}, props, field, {
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
      props = objectWithoutProperties(_ref, ['field', 'form', 'name']);
  return React.createElement(Form.Dropdown, _extends({}, props, field, {
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
      props = objectWithoutProperties(_ref, ['field', 'form', 'name', 'value']);
  return React.createElement(Form.Radio, _extends({}, props, {
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
  return React.createElement(Dropdown$1, _extends({ selection: true }, props));
};

var TextArea = function TextArea(_ref) {
  var field = _ref.field,
      form = _ref.form,
      name = _ref.name,
      props = objectWithoutProperties(_ref, ['field', 'form', 'name']);
  return React.createElement(Form.TextArea, _extends({}, props, field, {
    name: name
  }));
};

TextArea.propTypes = {
  name: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object
};

var TextArea$1 = withField(TextArea);

var Group = Form.Group;
var Button = Form.Button;

Form$1.Checkbox = Checkbox$1;
Form$1.Input = Input$1;
Form$1.Dropdown = Dropdown$1;
Form$1.Radio = Radio$1;
Form$1.Select = Select;
Form$1.TextArea = TextArea$1;
Form$1.Group = Group;
Form$1.Button = Button;

export default Form$1;
export { Checkbox$1 as Checkbox, Input$1 as Input, Dropdown$1 as Dropdown, Radio$1 as Radio, Select, TextArea$1 as TextArea, Group, Button };
//# sourceMappingURL=index.es.js.map
