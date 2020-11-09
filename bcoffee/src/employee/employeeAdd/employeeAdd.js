import React, { useState,useCallback,useEffect } from 'react';
import { Form,Input , Button} from 'antd'
import {CustomInput} from '../../component/CustomInput'
import {CustomSelect} from '../../component/CustomSelect'
const EmployeeAdd = () =>{
    const [form] = Form.useForm();
    const gender =["Men","Women"]
    const position =["Manager","Cashier","Barista"]
    useEffect(() => {
       console.log("test")
      }, [form.getFieldValue("position")])

    
    const submitForm=useCallback(
        async (values) => {
           console.log(values)
          
           console.log(form.getFieldValue("phone"))
          },
          []
      
    )
    
    return(
        <div>
      <Form
        style={{marginLeft:"20px",marginRight:"20px",marginTop:"20px"}}
        form={form}
        layout="vertical"  
        onFinish={submitForm}
      >
        <CustomInput name="firstname" label="First name" />
        <CustomInput name="birthday" label="Date of birth" />
        <CustomInput name="ssn" label="ID card number" rule="required"/>
        <CustomSelect name="gender" label="Gender" values={gender} rule="required"/>
        <CustomInput name="street" label="Street" />
        <CustomInput name="province" label="Province" />
        <CustomInput name="city" label="City" />
        <CustomInput name="zip" label="Zipcode" />
        <CustomInput name="phone" label="Phone Number" rule="phoneRequired" />
        <CustomSelect name="position" label="Position" onClick={console.log("test")} values={position} rule="required"/>
        <CustomInput name="skill" label="Skill"  />
        <CustomInput name="epy" label="Experience year"  />
        <CustomInput name="salary" label="Salary"  />
        <CustomInput name="startdate" label="Start date"  />
        <Button type="primary" htmlType="submit">test</Button>
        
      </Form>
            </div>
    )
}

export default EmployeeAdd