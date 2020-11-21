import { DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Row, Select, Table } from 'antd'
import Search from 'antd/lib/input/Search'
import { Option } from 'antd/lib/mentions'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import './customer.scss'
import { getCustomer } from '../service/user.service'

const data = [
    {
        key: "1",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD-MM-YYYY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "2",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD-MM-YYYY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "3",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD-MM-YYYY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "4",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD-MM-YYYY",
        time: "HH:MM",
        totalPrice: "30000"
    },
    {
        key: "5",
        orderId: "O001",
        customerId: "C002",
        branchName: "Chula",
        date: "DD-MM-YYYY",
        time: "HH:MM",
        totalPrice: "30000"
    },

]

const Customer = () => {
    const [customerId, setCustomerId] = useState("none")
    const [data, setData] = useState([])

    useEffect(() => {
        customer(customerId)
    }, [])

    const customer = async (customerId) => {
        try {
            const res = await getCustomer(customerId)
            setData(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        {
            title: "Customer Id",
            dataIndex: "customer_id",
            key: "customer_id",
        },
        {
            title: "Customer Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "SSN",
            dataIndex: "SSN",
            key: "SSN",
        },
        {
            title: "Gender",
            dataIndex: "sex",
            key: "sex",
        },
        {
            title: "Birth Date",
            dataIndex: "birthdate",
            key: "birthdate",
        },
        {
            title: "Phone Number",
            dataIndex: "phone_no",
            key: "phone_no",
        },
        {
            title: "Member Point",
            dataIndex: "memberpoint",
            key: "memberpoint",
        }
    ]

    const handleSearch = (e) => {
        setCustomerId(e)
        if (e != "") {
            customer(e)
        }
        else {
            customer("none")
        }
    }

    return (
        <div className="customer-container">
            <div className="text-title">
                Customer
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">
                <Col>
                    <Search
                        placeholder="Customer Id"
                        onSearch={(e) => {
                            handleSearch(e);
                        }}
                    />
                </Col>
                <div className="link-button">
                    <Link to="/customer/add" className="text-link"><PlusOutlined /> Add Customer</Link>
                </div>
            </Row>


            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}
export default Customer
