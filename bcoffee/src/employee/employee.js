import { Button, Col, Row, Select, Table,Form,Modal } from 'antd'
import React, { useEffect, useState, useCallback } from 'react'
import { CustomInput } from '../component/customInput'
import './employee.scss'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import { getBranch, getEmployee } from '../service/user.service'

// const data = [
//     {
//         key: "1",
//         name: "Chaninart",
//         gender: "Female",
//         position: "Manager",
//         birthdate: "xx/xx/xx",
//         startDate: "xx/xx/xx",
//         salary: "30000"
//     },
//     {
//         key: "2",
//         name: "Chaninart",
//         gender: "Female",
//         position: "Manager",
//         birthdate: "xx/xx/xx",
//         startDate: "xx/xx/xx",
//         salary: "30000"
//     },
//     {
//         key: "3",
//         name: "Chaninart",
//         gender: "Female",
//         position: "Manager",
//         birthdate: "xx/xx/xx",
//         startDate: "xx/xx/xx",
//         salary: "30000"
//     },
//     {
//         key: "4",
//         name: "Chaninart",
//         gender: "Female",
//         position: "Manager",
//         birthdate: "xx/xx/xx",
//         startDate: "xx/xx/xx",
//         salary: "30000"
//     },
//     {
//         key: "5",
//         name: "Chaninart",
//         gender: "Female",
//         position: "Manager",
//         birthdate: "xx/xx/xx",
//         startDate: "xx/xx/xx",
//         salary: "30000"
//     },
//     {
//         key: "6",
//         name: "Chaninart",
//         gender: "Female",
//         position: "Manager",
//         birthdate: "xx/xx/xx",
//         startDate: "xx/xx/xx",
//         salary: "30000"
//     }
// ]

const Employee = () => {
    const [data, setData] = useState([])
    const [branchList, setBranchList] = useState([])
    const [branchId, setBranchId] = useState("all")
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm();
    const [position, setPosition] = useState();
    const [currentEmployee,setCurrentEmployee]=useState();
    useEffect(() => {
        employee(branchId)
        branchData()
    }, [])

    const employee = async (branchId) => {
        try {
            const res = await getEmployee(branchId)
            setData(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const branchData = async () => {
        try {
            const resBranch = await getBranch()
            console.log(resBranch.data)
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
            render: (text) => (
                <Row align="middle" justify="center" gutter={["16", "0"]}>
                    <Col>
                        <Button>
                            <EditOutlined />
                        </Button>

                    </Col>
                    <Col>
                        <Button>
                            <DeleteOutlined />
                        </Button>
                    </Col>
                </Row>
            )


        }
    ]

    const handleChangeBranch = (e) => {
        setBranchId(e) //branch id
        console.log(e)
        employee(e)
    }

    const showModal = () => {
        setVisible(true)

    };

    const handleOk = e => {
        console.log(e);
        setVisible(false)
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };
    const submitForm = useCallback(
        (position) => {
            console.log(position)
            console.log(currentEmployee)
            /// patch api
            setPosition(position.position)
            handleOk()

        },
        [position,currentEmployee]
    )

    return (
        <div className="employee-container">
            <div className="text-title">
                Employee
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">

                <Col>
                    <Select defaultValue="all" onChange={handleChangeBranch} >
                        <Option value="all" key="all">All</Option>
                        {branchList.map((a) => (
                            <Option value={a.branch_id} key={a.branch_id}>
                                {a.street}
                            </Option>
                        ))}
                    </Select>
                </Col>
                {/* <div className="link-button">
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Add Employee</Link>
                </div> */}
            </Row>
            <Button type="primary" onClick={showModal}>
                Open Modal
        </Button>

            <Modal
                
                title="Edit position of employee."
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
            >
                <Form

                    form={form}
                    layout="horizontal"
                    onFinish={submitForm}
                >
                    <CustomInput  name="position" label="Position" rule="required" />
                    <Row justify="center" gutter={{ xs: 9}}> 
                        <Col span={7}><Button type="primary" htmlType="submit"  onClick={()=>setCurrentEmployee("EmployeeName")} >Submit</Button></Col>
                        <Col span={6}><Button key="back" onClick={handleCancel}>
                       Cancel
                    </Button></Col>
                    </Row>
                    
                    
                </Form>
            </Modal>

            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}

export default Employee