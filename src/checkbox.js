import React from 'react'
import PropTypes from 'prop-types'
import {Form} from 'semantic-ui-react'
import withFormikField from './with-formik-field'

const Checkbox = ({field, form, name, value, ...props}) => (
  <Form.Checkbox
    {...props}
    checked={field.value.includes(value)}
    onChange={() => {
      if (field.value.includes(value)) {
        const nextValue = field.value.filter(v => v !== value)
        form.setFieldValue(name, nextValue)
      } else {
        const nextValue = field.value.concat(value)
        form.setFieldValue(name, nextValue)
      }
    }}
    onBlur={() => form.setFieldTouched(name)}
  />
)

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  field: PropTypes.object,
  form: PropTypes.object,
}

export default withFormikField(Checkbox)
