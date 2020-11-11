import { Col, Row, Select, Table } from 'antd'
import React from 'react'
import './employee.scss'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'

const data = [
    {
        key: "1",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "2",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "3",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "4",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "5",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "6",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    }
]

const Employee = () => {

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
        },
        {
            title: "Position",
            dataIndex: "position",
            key: "position",
        },
        {
            title: "Birthdate",
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
                <DeleteOutlined />
            )


        }
    ]

    const handleChangeFilter = () => {

    }

    return (
        <div className="employee-container">
            <div className="text-title">
                Employee
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">

                <Col>
                    <Select defaultValue="all" onChange={handleChangeFilter} >
                        <Option value="all">All</Option>
                    </Select>
                </Col>
                <div className="link-button">
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Add Employee</Link>
                </div>
            </Row>

            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}

export default Employee