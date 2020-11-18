import React, { useState, useCallback, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd'
import { CustomInput } from '../component/customInput'
import { CustomSelect } from '../component/customSelect'
import { CustomDatepicker } from '../component/customDatepicker'
import { addCustomer } from './../service/user.service'
import { useHistory } from "react-router-dom";
import './customerAdd.scss'
const CustomerAdd = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const gender = ["Men", "Women"]
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [values, setValues] = useState({});

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = async () => {

        setConfirmLoading(true)
        let st = await addCustomer(values)
        console.log(st)
        if (st == true) {
            setConfirmLoading(false)
            setVisible(false);
            history.push('/customer')

        }

    };

    const handleCancel = () => {
        setVisible(false);
        setConfirmLoading(false)
    };
    const submitForm = useCallback(
        (values) => {

            values.birthdate = values.birthdate._d.getDate() + "/" + (values.birthdate._d.getMonth() + 1) + "/" + values.birthdate._d.getFullYear()
            setValues(values)
            showModal()
        },
        [values, visible]
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
                <Modal
                    title="Title"
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p>confirm</p>
                </Modal>
            </div>
        </>
    )
}

export default CustomerAdd