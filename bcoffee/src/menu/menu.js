import './menu.scss'
import { Button, Col, Row, Select, Table } from 'antd'
import React from 'react'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'

const data = [
    {
        key: "1",
        imgUrl: "12",
        menuNo: "salt",
        menuName: "33",
        type: "100",
        price: "g",
        ingredient: "xxx",
    },
    {
        key: "2",
        imgUrl: "12",
        menuNo: "salt",
        menuName: "33",
        type: "100",
        price: "g",
        ingredient: "xxx",
    },
    {
        key: "3",
        imgUrl: "12",
        menuNo: "salt",
        menuName: "33",
        type: "100",
        price: "g",
        ingredient: "xxx",
    },
    {
        key: "4",
        imgUrl: "12",
        menuNo: "salt",
        menuName: "33",
        type: "100",
        price: "g",
        ingredient: "xxx",
    },
    {
        key: "5",
        imgUrl: "12",
        menuNo: "salt",
        menuName: "33",
        type: "100",
        price: "g",
        ingredient: "xxx",
    },
    {
        key: "6",
        imgUrl: "12",
        menuNo: "salt",
        menuName: "33",
        type: "100",
        price: "g",
        ingredient: "xxx",
    },
]

const Menu = () => {

    const columns = [
        {
            title: "",
            dataIndex: "imgUrl",
            key: "imgUrl",
        },
        {
            title: "Menu No",
            dataIndex: "menuNo",
            key: "menuNo",
        },
        {
            title: "Menu Name",
            dataIndex: "menuName",
            key: "menuName",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Ingredient",
            dataIndex: "ingredient",
            key: "ingredient",
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
        <div className="menu-container">
            <div className="text-title">
                Menu
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">

                <Col>
                    <Select defaultValue="all" onChange={handleChangeFilter} >
                        <Option value="all">All</Option>
                    </Select>
                </Col>
                <div className="link-button">
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Add Menu</Link>
                </div>
            </Row>

            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}
export default Menu