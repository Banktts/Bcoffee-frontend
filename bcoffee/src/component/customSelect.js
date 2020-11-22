import { Form, Input,Select } from 'antd'
import React from "react";
import PropTypes from 'prop-types';
import { ruleError } from './customInput'
export const CustomSelect = (props) => {
   
 
    return (
        <Form.Item name={props.name}  label={props.label} rules={[ruleError(props.rule)]} >
        <Select defaultValue={props.defaultValue}>
          {props.values.map((value) => (
            <Select.Option value={value} key={value}>
             {value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

    )

}
CustomSelect.defaultProps = {
   
}

CustomSelect.propTypes = {
    
}