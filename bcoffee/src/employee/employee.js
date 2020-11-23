import { Button, Col, Row, Select, Table, Form, Modal, Input } from 'antd'
import { CustomSelect } from '../component/customSelect'
import React, { useEffect, useState, useCallback } from 'react'
import { CustomInput } from '../component/customInput'
import './employee.scss'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import { deleteEmployee, getBranch, getEmployee, editEmployee } from '../service/user.service'

const Employee = () => {
    const [data, setData] = useState([])
    const [branchList, setBranchList] = useState([])
    const [branchId, setBranchId] = useState("all")
    const [empId, setEmpId] = useState("")
    const [deleteModalVisible, setDeleteModalVisible] = useState(false)
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [CurrentPosition, setCurrentPosition] = useState("")
    const [form] = Form.useForm();
    const PositionList = ["Barista","Cashier","Manager" ]
    useEffect(() => {
        employee(branchId)
        branchData()
    }, [])

    const employee = async (branchId) => {
        try {
            const res = await getEmployee(branchId)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const branchData = async () => {
        try {
            const resBranch = await getBranch()
            setBranchList(resBranch.data)
        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        {
            title: "Employee Id",
            dataIndex: "emp_id",
            key: "emp_id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Gender",
            dataIndex: "sex",
            key: "sex",
        },
        {
            title: "Position",
            dataIndex: "position",
            key: "position",
        },
        {
            title: "Birth Date",
            dataIndex: "birthdate",
            key: "birthdate",
        },
        {
            title: "Start date",
            dataIndex: "startDate",
            key: "startDate",
        },
        {
            title: "Salary",
            dataIndex: "salary",
            key: "salary",
        },
        {
            title: "",
            dataIndex: "edit",
            key: "edit",
            render: (text, record) => (
                <Row align="middle" justify="center" gutter={["16", "0"]}>
                    <Col>
                        <Button onClick={() => handleEditEmployee(record)}>
                            <EditOutlined />
                        </Button>

                    </Col>
                    <Col>
                        <Button onClick={() => handleDeleteEmployee(record.emp_id)}>
                            <DeleteOutlined />
                        </Button>
                    </Col>
                </Row>
            )
        }
    ]

    const handleDeleteEmployee = (empId) => {
        setDeleteModalVisible(true)
        setEmpId(empId)
    }

    const handleCanceldelete = () => {
        setDeleteModalVisible(false)
        form.resetFields();
    }

    const handleNoDelete = () => {
        setDeleteModalVisible(false)
        form.resetFields();
    }

    const handleYesDelete = async () => {
        try {
            const res = await deleteEmployee(empId)
            setDeleteModalVisible(false)
            employee(branchId)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeBranch = (e) => {
        setBranchId(e) //branch id
        employee(e)
    }

    const handleEditEmployee = (record) => {
        form.resetFields();
        setEmpId(record.emp_id)
        setCurrentPosition(data[record.emp_id-1].position)
        setEditModalVisible(true)       
    }


    const handleCancelEdit = () => {
        setEditModalVisible(false)
        employee(branchId)
        branchData()
    }

    const handleSubmitEdit = async (e) => {
        try {
            const res = await editEmployee(empId, e.position)
            setEditModalVisible(false)
            employee(branchId)
        } catch (error) {
            console.log(error)
        }
    }
   
   
    return (
        <div className="employee-container">
            <div className="text-title">
                Employee
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">

                <Col>
                    <Select
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        defaultValue="all" onChange={handleChangeBranch} >
                        <Option value="all" key="all">All</Option>
                        {branchList.map((a) => (
                            <Option value={a.branch_id} key={a.branch_id}>
                                {a.street}
                            </Option>
                        ))}
                    </Select>
                </Col>
            </Row>
            <Modal visible={deleteModalVisible}
                onCancel={handleCanceldelete}
                centered
                footer={false}>
                <div className="text-modal">
                    Delete employee ?
                </div>
                <div className="m-t-30 text-center">
                    <Button onClick={handleYesDelete} className="button green">
                        Yes
                </Button>
                    <Button onClick={handleNoDelete} className="button red">
                        No
                </Button>
                </div>
            </Modal>
            <Modal visible={editModalVisible}
                onCancel={handleCancelEdit}
                centered
                footer={false}
                className="modal-edit">
                <div className="text-modal">
                    Edit position of employee ?
                   
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmitEdit}
                    className="form"   
                >                 
                    <CustomSelect defaultValue={CurrentPosition}  name="position" label="" values={PositionList}  />
                <div className="m-t-30 text-center">
                    <Button  type="primary" htmlType="submit" className="button green">
                        Submit
                </Button>
                    <Button onClick={handleCancelEdit} className="button red">
                        Cancel
                </Button>
                
                </div>
                </Form>
            </Modal>
            <Table dataSource={data} columns={columns} pagination={false} className="table" />
           
        </div>
    )
}

export default Employee