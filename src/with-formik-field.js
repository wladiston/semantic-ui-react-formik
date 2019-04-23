import React from 'react'
import {Field} from 'formik'
import PropTypes from 'prop-types'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

/**
 * see: https://jaredpalmer.com/formik/docs/api/field#props
 * @param {*} WrappedComponent The component that is going to be wrapped
 * @returns {HOC} A High order component for the Formik Field component 
 */
const withField = WrappedComponent => {
  return class withFieldHOC extends React.Component {
    static displayName = `withField(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      name: PropTypes.string.isRequired,
    }

    render() {
      const {name} = this.props
      return (
        <Field name={name}>
          {fieldProps => (
            <WrappedComponent
              error={Boolean(
                fieldProps.form.touched[name] && fieldProps.form.errors[name],
              )}
              {...this.props}
              {...fieldProps}
            />
          )}
        </Field>
      )
    }
  }
}

export default withField
