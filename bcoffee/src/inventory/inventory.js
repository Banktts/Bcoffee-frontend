import './inventory.scss'
import { Button, Col, Row, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import { getBranch, getInventory } from '../service/user.service'

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
    const [branchList, setBranchList] = useState([])
    const [branchId, setBranchId] = useState("all")
    const [data, setData] = useState([])

    useEffect(() => {
        inventory(branchId)
        branchData()
    }, [])

    const inventory = async (branchId) => {
        try {
            const res = await getInventory(branchId)
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
            title: "Item Id",
            dataIndex: "item_id",
            key: "item_id",
        },
        {
            title: "Type",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Branch Id",
            dataIndex: "branch_id",
            key: "branch_id",
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
                // <Row align="middle" justify="center" gutter={["16", "0"]}>
                // <Col>
                <Button>
                    <EditOutlined />
                </Button>

                // </Col>
                //     <Col>
                //         <Button>
                //             <DeleteOutlined />
                //         </Button>
                //     </Col>
                // </Row>
            )
        }
    ]

    const handleChangeBranch = (e) => {
        setBranchId(e)
        console.log(e)
        inventory(e)
    }

    return (
        <div className="inventory-container">
            <div className="text-title">
                Inventory
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
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Add Inventory</Link>
                </div> */}
            </Row>

            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}
export default Inventory