import React from 'react'
import PropTypes from 'prop-types'
import {Form} from 'semantic-ui-react'
import withFormikField from './with-formik-field'

const Dropdown = ({field, form, name, ...props}) => (
  <Form.Dropdown
    {...props}
    {...field}
    name={name}
    onChange={(e, {value}) => {
      form.setFieldValue(name, value)
    }}
    onBlur={() => form.setFieldTouched(name)}
  />
)

Dropdown.propTypes = {
  name: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
}

export default withFormikField(Dropdown)
