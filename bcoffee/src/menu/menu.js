import './menu.scss'
import { Button, Col, Row, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import { getMenu, getBranch, deleteMenu } from '../service/user.service'
import Modal from 'antd/lib/modal/Modal'

const Menu = () => {
    const [data, setData] = useState([])
    const [branchId, setBranchId] = useState("all")
    const [branchList, setBranchList] = useState([])
    const [deleteModalVisible, setDeleteModalVisible] = useState(false)
    const [menuId, setMenuId] = useState("")


    useEffect(() => {
        menuData(branchId)
        branchData()
    }, [])

    const menuData = async (branchId) => {
        try {
            const res = await getMenu(branchId)
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
            title: "",
            dataIndex: "imgUrl",
            key: "imgUrl",
            render: (text, record) => (
                <img src={record.imgUrl} className="size-image" />
            )
        },
        {
            title: "Menu Id",
            dataIndex: "menu_id",
            key: "menu_id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
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
            renden: (text, record) => (
                <div>a</div>
            )
        },

        {
            title: "",
            dataIndex: "edit",
            key: "edit",
            render: (text, record) => (
                <Button onClick={() => handledeleteMenu(record.menu_id)}>
                    <DeleteOutlined />
                </Button>
            )
        }
    ]

    const handleChangeBranch = (e) => {
        setBranchId(e) //branch id
        console.log(e)
        menuData(e)
    }

    const handledeleteMenu = (menu_id) => {
        setDeleteModalVisible(true)
        setMenuId(menu_id)
    }

    const handleCanceldelete = () => {
        setDeleteModalVisible(false)
    }

    const handleNoDelete = () => {
        setDeleteModalVisible(false)
    }

    const handleYesDelete = async () => {
        try {
            const res = await deleteMenu({ branchId, menuId })
            setDeleteModalVisible(false)
            menuData(branchId)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="menu-container">
            <div className="text-title">
                Menu
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
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Add Menu</Link>
                </div> */}
            </Row>

            <Table dataSource={data} columns={columns} pagination={false} className="table" />
            <Modal visible={deleteModalVisible}
                onCancel={handleCanceldelete}
                centered
                footer={false}>
                <div className="text-modal">
                    Delete menu ?
                </div>
                <div className="m-t-30 text-center">
                    <Button onClick={handleYesDelete} className="button green">
                        Yes
                </Button>
                    <Button onClick={handleNoDelete} className="button red">
                        No
                </Button>
                </div>
            </Modal>
        </div>
    )
}
export default Menu