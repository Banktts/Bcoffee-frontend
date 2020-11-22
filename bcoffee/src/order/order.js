import { Col, DatePicker, Row, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import './order.scss'
import { Link, useHistory } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import moment from "moment";
import { getBranch, getOrder } from '../service/user.service'

const Order = () => {
    const dateFormat = "YYYY-MM-DD";
    const dateFormatt = "DD-MM-YYYY"
    const timeFormat = "HH:mm";
    const history = useHistory()
    const [data, setData] = useState([])
    const [branchList, setBranchList] = useState([])
    const [branchId, setBranchId] = useState("all")
    const [date, setDate] = useState(moment().format(dateFormat))

    useEffect(() => {
        order(branchId, date)
        branchData()
    }, [])

    const order = async (branchId, date) => {
        try {
            const res = await getOrder(branchId, date)
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
            title: "Order Id",
            dataIndex: "order_id",
            key: "order_id",
        },
        {
            title: "CustomerId",
            dataIndex: "customer_id",
            key: "customer_id",
        },
        {
            title: "Branch Id",
            dataIndex: "branch_id",
            key: "branch_id",
        },
        {
            title: "Employee Id",
            dataIndex: "emp_id",
            key: "emp_id",
        },
        {
            title: "Date",
            dataIndex: "created_at",
            key: "create_at",
            render: (text, record) => (
                <>{moment(record.created_at).format(dateFormatt)}</>
            ),
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "time",
            render: (text, record) => (
                <>{moment(record.created_at).format(timeFormat)}</>
            ),
        },
        {
            title: "Total Price",
            dataIndex: "totalpriceb",
            key: "totalpriceb",
        },
    ]

    const handleChangeBranch = (e) => {
        setBranchId(e) //branch id
        order(e, date)
    }

    const handleChangeDate = (e) => {
        setDate(moment(e).format(dateFormat))
        order(branchId, moment(e).format(dateFormat))
    }

    const handleClickRow = (record) => {
        return {
            onClick: () => {
                history.push(`order/${record.order_id}`)
            }
        }
    }

    const disabledDate = (current) => {
        return current && current > moment().endOf("day");
    };

    return (
        <div className="order-container">
            <div className="text-title">
                Order
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">
                <Row justify="start" align="middle" gutter={["16", "0"]}>
                    <Col>
                        <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            defaultValue="all" onChange={handleChangeBranch} >
                            <Option value="all" key="all">All</Option>
                            {branchList.map((a) => (
                                <Option value={a.branch_id} key={a.branch_id}>
                                    {a.street}
                                </Option>
                            ))}
                        </Select>
                    </Col>
                    <Col>
                        <DatePicker onChange={handleChangeDate} defaultValue={moment()} format={dateFormatt} disabledDate={disabledDate} />
                    </Col>
                </Row>
                {branchId === "all" ?
                    <div className="link-button-disable">
                        <div className="text-link">
                            <PlusOutlined /> Place Order
                        </div>
                    </div> :
                    <div className="link-button">
                        <Link to={`/order/make/${branchId}`} className="text-link"><PlusOutlined /> Place Order</Link>
                    </div>}

            </Row>
            <Table dataSource={data} columns={columns} pagination={false} className="table" onRow={handleClickRow} />
        </div>
    )
}

export default Order
