import React from 'react'
import PropTypes from 'prop-types'
import {Form} from 'semantic-ui-react'
import withFormikField from './with-formik-field'

const TextArea = ({field, form, name, ...props}) => (
  <Form.TextArea
    {...props}
    {...field}
    name={name}
  />
)

TextArea.propTypes = {
  name: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
}

export default withFormikField(TextArea)
