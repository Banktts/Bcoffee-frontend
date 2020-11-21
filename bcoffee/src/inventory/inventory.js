import './inventory.scss'
import { Button, Col, Row, Select, Table, Modal, Form, Input } from 'antd'
import React, { useEffect, useState, useCallback } from 'react'
import { CustomInput } from '../component/customInput'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import { editInventory, getBranch, getInventory } from '../service/user.service'

const Inventory = () => {
    const [branchList, setBranchList] = useState([])
    const [branchId, setBranchId] = useState("all")
    const [data, setData] = useState([])
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [amount, setAmount] = useState();
    const [currentBranch, setCurrentBranch] = useState();
    const [itemId, setItemId] = useState("")
    const [amountItem, setAmountItem] = useState("")
    const [branchIdEdit, setBranchIdEdit] = useState("")

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
            render: (text, record) => (
                <Button onClick={() => showModal(record)}>
                    <EditOutlined />
                </Button>
            )
        }
    ]

    const handleChangeBranch = (e) => {
        setBranchId(e)
        console.log(e)
        inventory(e)
    }

    const showModal = (record) => {
        setEditModalVisible(true)
        setItemId(record.item_id)
        setAmountItem(record.amount)
        setBranchIdEdit(record.branch_id)
        console.log(amountItem)
    };

    const handleCancelEdit = () => {
        setEditModalVisible(false)
    }

    const handleSubmitEdit = async () => {
        try {
            console.log("itemid", itemId)
            console.log("amountitem", amountItem)
            console.log("branchid", branchId)
            const res = await editInventory({ itemId, amountItem, branchIdEdit })
            setEditModalVisible(false)
            inventory(branchId)
            branchData()
        } catch (error) {
            console.log(error)
        }
    }

    const changeAmount = (e) => {
        console.log(e.target)
        setAmountItem(e.target.value)
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
            <Modal visible={editModalVisible}
                onCancel={handleCancelEdit}
                centered
                footer={false}>
                <div className="text-modal">
                    Edit amount of item ?
                </div>
                <Input name="amount" value={amountItem} label="Amount" rule="required" onChange={changeAmount} />
                <div className="m-t-30 text-center">
                    <Button onClick={handleSubmitEdit} className="button green">
                        Submit
                </Button>
                    <Button onClick={handleCancelEdit} className="button red">
                        Cancel
                </Button>
                </div>
            </Modal>

            <Table dataSource={data} columns={columns} pagination={false} className="table" />
        </div>
    )
}
export default Inventory