import './inventory.scss'
import { Button, Col, Row, Select, Table } from 'antd'
import React from 'react'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'

const data = [
    {
        key: "1",
        itemNo: "12",
        type: "salt",
        branchNo: "33",
        amount: "100",
        unit: "g"
    },
    {
        key: "2",
        itemNo: "12",
        type: "salt",
        branchNo: "33",
        amount: "100",
        unit: "g"
    },
    {
        key: "3",
        itemNo: "12",
        type: "salt",
        branchNo: "33",
        amount: "100",
        unit: "g"
    },
    {
        key: "4",
        itemNo: "12",
        type: "salt",
        branchNo: "33",
        amount: "100",
        unit: "g"
    },
    {
        key: "5",
        itemNo: "12",
        type: "salt",
        branchNo: "33",
        amount: "100",
        unit: "g"
    },
    {
        key: "6",
        itemNo: "12",
        type: "salt",
        branchNo: "33",
        amount: "100",
        unit: "g"
    },
    {
        key: "7",
        itemNo: "12",
        type: "salt",
        branchNo: "33",
        amount: "100",
        unit: "g"
    },
    {
        key: "8",
        itemNo: "12",
        type: "salt",
        branchNo: "33",
        amount: "100",
        unit: "g"
    },
]

const Inventory = () => {

    const columns = [
        {
            title: "Item No",
            dataIndex: "itemNo",
            key: "itemNo",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Branch No",
            dataIndex: "branchNo",
            key: "branchNo",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "Unit",
            dataIndex: "unit",
            key: "unit",
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

    return (
        <div className="inventory-container">
            <div className="text-title">
                Inventory
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">

                <Col>
                    <Select defaultValue="all" onChange={handleChangeFilter} >
                        <Option value="all">All</Option>
                    </Select>
                </Col>
                <div className="link-button">
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Add Inventory</Link>
                </div>
            </Row>

            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}
export default Inventory