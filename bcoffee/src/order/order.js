import { Row, Table } from 'antd'
import React from 'react'
import './order.scss'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'

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



const Order = () => {

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

    return (
        <div className="order-container">
            <Row justify="space-between" align="middle" className="m-b-16">
                <div className="text-title">
                    Order
                </div>
                <div className="link-button">
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Make an order</Link>
                </div>
            </Row>

            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}

export default Order
