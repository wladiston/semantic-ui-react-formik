import React from 'react'
import {Container, Header, Segment} from 'semantic-ui-react'
import Form from 'semantic-ui-react-formik'

import 'semantic-ui-css/semantic.min.css'

const App = () => (
  <Container>
    <Form
      initialValues={{email: '', options: null, agree: []}}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }}
      onSubmit={(values, actions) => {
        alert('Submitted')
        console.log('Submitted', values)
        actions.setSubmitting(false)
      }}
    >
      {({values, errors, isSubmitting}) => (
        <React.Fragment>
          <Header as="h1">Form</Header>
          <Form.Dropdown
            name="options"
            label="My Options"
            options={[
              {key: 1, text: 'One', value: 3},
              {key: 2, text: 'Two', value: 2},
              {key: 3, text: 'Three', value: 1},
            ]}
            placeholder="Choose an option"
            selection
          />
          <Form.Input
            label="Email"
            name="email"
            type="email"
            required
            placeholder="desenvolvedormg@gmail.com"
          />

          <Form.Group widths="equal">
            <Form.Checkbox
              label="I agree to the Terms and Conditions"
              name="agree"
              value="admin"
            />
            <Form.Checkbox
              label="I agree to the Terms and wilson"
              name="agree"
              value="wilson"
            />
          </Form.Group>

          <Form.Button loading={isSubmitting} type="submit">
            Submit
          </Form.Button>

          <Segment.Group>
            <Segment>
              <Header as="h4">Values:</Header>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Segment>
            <Segment>
              <Header as="h4">Errors:</Header>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </Segment>
          </Segment.Group>
        </React.Fragment>
      )}
    </Form>
  </Container>
)

export default App
