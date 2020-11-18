import { DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Row, Select, Table } from 'antd'
import Search from 'antd/lib/input/Search'
import { Option } from 'antd/lib/mentions'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import './customer.scss'
// import { getCustomer } from '../service/user.service'

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
    const [name, setName] = useState("")
    const [data, setData] = useState([])

    // useEffect(() => {
    //     customer(name)
    // })

    // const customer = async (name) => {
    //     try {
    //         const res = await getCustomer(name)
    //         setData(res.data)
    //         console.log(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const columns = [
        {
            title: "Customer Id",
            dataIndex: "customerId",
            key: "customerId",
        },
        {
            title: "Customer Name",
            dataIndex: "customerName",
            key: "customerName",
        },
        {
            title: "SSN",
            dataIndex: "ssn",
            key: "ssn",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
        },
        {
            title: "Birth Date",
            dataIndex: "birthDate",
            key: "birthDate",
        },
        {
            title: "Phone Number",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
        },
        {
            title: "Member Point",
            dataIndex: "totalPrice",
            key: "totalPrice",
        },
        // {
        //     title: "",
        //     dataIndex: "edit",
        //     key: "edit",
        //     render: (text) => (
        //         <Row align="middle" justify="center" gutter={["16", "0"]}>
        //             <Col>
        //                 <Button>
        //                     <EditOutlined />
        //                 </Button>

        //             </Col>
        //             <Col>
        //                 <Button>
        //                     <DeleteOutlined />
        //                 </Button>
        //             </Col>
        //         </Row>

        //     )


        // }
    ]

    const handleSearch = (e) => {
        setName(e)
        // customer(name)
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
