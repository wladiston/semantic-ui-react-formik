import React from 'react'
import PropTypes from 'prop-types'
import {Form} from 'semantic-ui-react'
import withFormikField from './with-formik-field'

const Input = ({field, form, name, ...props}) => (
  <Form.Input
    {...props}
    {...field}
    name={name}
  />
)

Input.propTypes = {
  name: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
}

export default withFormikField(Input)
