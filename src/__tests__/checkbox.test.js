import React from 'react'
import {render, cleanup} from 'react-testing-library'
import Form, {Checkbox} from '../'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

const FormExample = props => (
  <Form initialValues={{field: []}} {...props}>
    {() => (
      <React.Fragment>
        <Checkbox id="field-1" label="My value 1" name="field" value="1" />
        <Checkbox id="field-2" label="My value 2" name="field" value="2" />
      </React.Fragment>
    )}
  </Form>
)

test('should render all checkbox', () => {
  const {getByText, container} = render(<FormExample />)
  expect(getByText(/my value 1/i))
  expect(getByText(/my value 2/i))
  expect(container.firstChild).toMatchSnapshot()
})