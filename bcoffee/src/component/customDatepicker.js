import { Form, DatePicker} from 'antd'
import React from "react";
import PropTypes from 'prop-types';
import { ruleError } from './customInput'
export const CustomDatepicker = (props) => {
   
 
    return (
        <Form.Item name={props.name}  label={props.label+" :"}  >
        <DatePicker style={{width:"200px"}} format='DD/MM/YY'/>
      </Form.Item>

    )

}
CustomDatepicker.defaultProps = {
   
}

CustomDatepicker.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string
}
    