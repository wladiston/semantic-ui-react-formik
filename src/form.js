import React from 'react'
import PropTypes from 'prop-types'
import {Formik} from 'formik'
import {Form as SForm} from 'semantic-ui-react'

/**
 * see: https://jaredpalmer.com/formik/docs/api/formik#props
 * @param {*} props any prop that can be used in the Formik component
 * @returns {Formik} Formik component
 */
const Form = props => {
  return (
    <Formik {...props}>
      {formprops => (
        <SForm onSubmit={formprops.handleSubmit}>
          {props.children(formprops)}
        </SForm>
      )}
    </Formik>
  )
}

Form.propTypes = {
  children: PropTypes.func.isRequired
}

export default Form
