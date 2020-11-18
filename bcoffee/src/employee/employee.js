import { Button, Col, Row, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
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

            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}

export default Employee