import { Form, Input } from 'antd'
import React from "react";
import PropTypes from 'prop-types';
import './customInput.scss'

export function ruleError(e) {
    console.log(e)
    switch (e) {
      case 'required':
        return {
          required: true,
          message: 'required',
        }
      case 'phoneRequired':
        return {
          required: true,
          pattern: new RegExp(/^\d{3}\d{3}\d{4}$/gm),
          message: 'Wrong format plase try again',
        }
      default:
        return {
          required: false,
        }
    }
  }
  
export const CustomInput = (props) => {
   
 
    return (
        <Form.Item name={props.name} label={props.label+" :"}  rules={[ruleError(props.rule)]}>
            <Input placeholder={props.placeholder} />
        </Form.Item>
    )

}
CustomInput.defaultProps = {
    placeholder: "",
    rule: ""
}

CustomInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rule: PropTypes.string,
    name: PropTypes.string
}