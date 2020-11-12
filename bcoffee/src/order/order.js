import { Button, Col, DatePicker, Row, Select, Table } from 'antd'
import React from 'react'
import './order.scss'
import { Link, useHistory } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import moment from "moment";

const data = [
    {
        key: "1",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "2",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "3",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "4",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "5",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD/MM/YY",
        time: "HH:MM",
        totalPrice: "30000"
    },

]



const Order = () => {
    const dateFormat = "DD/MM/YYYY";
    const history = useHistory()
    const columns = [
        {
            title: "Order Id",
            dataIndex: "orderId",
            key: "orderId",
        },
        {
            title: "CustomerId",
            dataIndex: "customerId",
            key: "customerId",
        },
        {
            title: "Branch Id",
            dataIndex: "branchId",
            key: "branchId",
        },
        {
            title: "Employee Id",
            dataIndex: "employeeId",
            key: "employeeId",
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

    const handleClickRow = (record) => {
        return {
            onClick: () => {
                history.push(`order/${record.orderId}`) //change 5 to orderId that record
                console.log(record)
            }
        }
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
                            <Select.Option value="all">All</Select.Option>
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
            <Table dataSource={data} columns={columns} pagination={false} className="table" onRow={handleClickRow} />
        </div>
    )
}

export default Order
