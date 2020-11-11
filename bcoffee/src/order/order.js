import { Button, Col, DatePicker, Row, Select, Table } from 'antd'
import React from 'react'
import './order.scss'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import moment from "moment";

const data = [
    {
        key: "1",
        orderNo: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "2",
        orderNo: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "3",
        orderNo: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "4",
        orderNo: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "5",
        orderNo: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },

]



const Order = () => {
    const dateFormat = "DD/MM/YYYY";
    const columns = [
        {
            title: "Order No",
            dataIndex: "orderNo",
            key: "orderNo",
        },
        {
            title: "CustomerId",
            dataIndex: "customerId",
            key: "customerId",
        },
        {
            title: "Branch Name",
            dataIndex: "branchName",
            key: "branchName",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "Total Price",
            dataIndex: "totalPrice",
            key: "totalPrice",
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
