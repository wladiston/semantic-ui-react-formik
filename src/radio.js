import React from 'react'
import PropTypes from 'prop-types'
import {Form} from 'semantic-ui-react'
import withFormikField from './with-formik-field'

const Radio = ({field, form, name, value, ...props}) => (
  <Form.Radio
    {...props}
    checked={field.value.includes(value)}
    onChange={() => {
      form.setFieldValue(name, value)
    }}
    onBlur={() => form.setFieldTouched(name)}
  />
)

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  field: PropTypes.object,
  form: PropTypes.object,
}

export default withFormikField(Radio)
