import React, { useState, useCallback, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd'
import { CustomInput } from '../component/customInput'
import { CustomSelect } from '../component/customSelect'
import { CustomDatepicker } from '../component/customDatepicker'
import { addCustomer } from './../service/user.service'
import { useHistory } from "react-router-dom";
import { AlertTwoTone, ExclamationCircleOutlined, CheckCircleTwoTone, WarningTwoTone } from '@ant-design/icons';
import './customerAdd.scss'
const CustomerAdd = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const gender = ["Men", "Women"]
    const [values, setValues] = useState({});
    const { confirm, info } = Modal;

    function showConfirm() {
        confirm({
            title: 'Add Employee',
            icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
            content: 'Are you sure to add new employee.',
            onOk() {
                return new Promise(async(resolve, reject) => {
                    let st = await addCustomer(values)
                    if (st == true) {
                        resolve(history.push('/customer'))
                    } else if (st == false) {
                        resolve(showInfo())
                    }
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    function showInfo() {
        info({
            title: 'Add Employee',
            icon: <ExclamationCircleOutlined />,
            content: 'Opps! Customer Id cannot duplicate.',
            onOk() {
            }
        });
    }

    const submitForm = useCallback(
        (values) => {
            showConfirm()
            values.birthdate = values.birthdate._d.getDate() + "/" + (values.birthdate._d.getMonth() + 1) + "/" + values.birthdate._d.getFullYear()
            setValues(values)


        },
        [values]
    )



    return (
        <>
            <div className="container"  >
                <div className="text-title" >
                    Add Customer
            </div>
                <div className="text-title">
                    Personal Info
            </div>
                <Form

                    form={form}
                    layout="vertical"
                    onFinish={submitForm}
                >
                    <CustomInput name="customer_id" label="Customer Id" rule="required" />
                    <CustomInput name="name" label="Customer Name" rule="required" />
                    <CustomInput name="SSN" label="ID card number" rule="required" />
                    <CustomSelect name="sex" label="Gender" values={gender} rule="required" />
                    <CustomDatepicker name="birthdate" label="Birth date" rule="required" />
                    <CustomInput name="memberpoint" label="Member Point" rule="required" />
                    <CustomInput name="phone_no" label="Phone Number" rule="phoneRequired" rule="required" />
                    <Button type="primary" htmlType="submit"  > Add Customer</Button>
                </Form>
            </div>
        </>
    )
}

export default CustomerAdd