import { Col, DatePicker, Row, Select, Table } from 'antd'
import React from 'react'
import './order.scss'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import moment from "moment";

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
    const dateFormat = "DD/MM/YYYY";
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

    const handleChangeFilter = (e) => {

    }

    const handleChangeDate = (e) => {

    }

    return (
        <div className="order-container">
            <div className="text-title">
                Order
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">
                <Row justify="start" align="middle" gutter={["16", "0"]}>
                    <Col>
                        <Select defaultValue="all" onChange={handleChangeFilter} >
                            <Option value="all">All</Option>
                        </Select>
                    </Col>
                    <Col>
                        <DatePicker onChange={handleChangeDate} defaultValue={moment()} format={dateFormat} />
                    </Col>
                </Row>

                <div className="link-button">
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Make an order</Link>
                </div>
            </Row>
            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}

export default Order
