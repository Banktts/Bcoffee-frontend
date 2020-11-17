import React, { useState, useCallback, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd'
import { CustomInput } from '../component/customInput'
import { CustomSelect } from '../component/customSelect'
import { CustomDatepicker } from '../component/customDatepicker'
import './customerAdd.scss'
const CustomerAdd = () => {
    const [form] = Form.useForm();
    const gender = ["Men", "Women"]
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [values, setValues] = useState({});

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(true);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };
    const submitForm = useCallback(
        () => {
            showModal();
            setValues(values);
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
                    <CustomInput name="customerId" label="Customer Id" />
                    <CustomInput name="customerName" label="Customer Name" />
                    <CustomInput name="ssn" label="ID card number" rule="required" />
                    <CustomSelect name="gender" label="Gender" values={gender} rule="required" />
                    <CustomDatepicker name="birthday" label="Birth date" />
                    <CustomInput name="memberPoint" label="Member Point" />
                    <CustomInput name="phone" label="Phone Number" rule="phoneRequired" />
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