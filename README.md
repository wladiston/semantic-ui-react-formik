# semantic-ui-react-formik

>

[![NPM](https://img.shields.io/npm/v/semantic-ui-react-formik.svg)](https://www.npmjs.com/package/semantic-ui-react-formik) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Formik components using Semantic UI as presentation UI

## Install

```bash
npm install --save semantic-ui-react-formik
# or
yarn add semantic-ui-react-formik
```

## Usage

This package expose the Form components of the `semantic-ui-react` package wrapped with the Formik components.

### List of components:

| Component     | Description                                 | Reference                                       |
|---------------|---------------------------------------------|-------------------------------------------------|
| Form          | Sugar for <Formik />                        | https://jaredpalmer.com/formik/docs/api/formik  |
| Form.Button   | Sugar for <Form.Field control={Button} />   | https://react.semantic-ui.com/elements/button/  |
| Form.Checkbox | Sugar for <Form.Field control={Checkbox} /> | https://react.semantic-ui.com/modules/checkbox/ |
| Form.Dropdown | Sugar for <Form.Field control={Dropdown} /> | https://react.semantic-ui.com/modules/dropdown/ |
| Form.Group    | A set of fields can appear grouped together | https://react.semantic-ui.com/collections/form/ |
| Form.Input    | Sugar for <Form.Field control={Input} />    | https://react.semantic-ui.com/collections/form/ |
| Form.Radio    | Sugar for <Form.Field control={Radio} />    | https://react.semantic-ui.com/collections/form/ |
| Form.Select   | Sugar for <Form.Field control={Select} />   | https://react.semantic-ui.com/collections/form/ |
| Form.TextArea | Sugar for <Form.Field control={TextArea} /> | https://react.semantic-ui.com/collections/form/ |

## Example

```jsx
import React, {Component} from 'react'
import Form from 'semantic-ui-react-formik'
// or
// import Form, {Checkbox, Input, Radio ...} from 'semantic-ui-react-formik'

class Example extends Component {
  render() {
    return (
      <Form initialValues={{}} onSubmit={() => {}}>
        {({isSubmitting}) => (
          <>
            <Form.Input
              label="Email"
              name="email"
              type="email"
              placeholder="someemail@email.com"
            />

            <Form.Group widths="equal">
              <Form.Checkbox
                label="I like apples"
                name="preference"
                value="apple"
              />
              <Form.Checkbox
                label="and also bananas."
                name="preference"
                value="banana"
              />

              <Form.Button loading={isSubmitting} type="submit">
                Submit
              </Form.Button>
            </Form.Group>
          </>
        )}
      </Form>
    )
  }
}
```

## License

MIT © [wladiston](https://github.com/wladiston)
