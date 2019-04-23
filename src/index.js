import {Form} from 'semantic-ui-react'
import MyForm from './form'
import Checkbox from './checkbox'
import Input from './input'
import Dropdown from './dropdown'
import Radio from './radio'
import Select from './select'
import TextArea from './textarea'

const Group = Form.Group
const Button = Form.Button

export {
    Checkbox,
    Input,
    Dropdown,
    Radio,
    Select,
    TextArea,
    Group,
    Button
}
  
MyForm.Checkbox = Checkbox
MyForm.Input = Input
MyForm.Dropdown = Dropdown
MyForm.Radio = Radio
MyForm.Select = Select
MyForm.TextArea = TextArea
MyForm.Group = Group
MyForm.Button = Button

export default MyForm
