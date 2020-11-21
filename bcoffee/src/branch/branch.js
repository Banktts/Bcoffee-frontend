import { Button, Col, DatePicker, Row, Select, Table } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import './branch.scss'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import moment from "moment";
import { getBranch } from '../service/user.service'

const data = [
    {
        key: "1",
        branchId: "23",
        branchName: "Chula",
        topSpender: "mint, bam, amp",
        income: "2000000",
    },
    {
        key: "2",
        branchId: "23",
        branchName: "Chula",
        topSpender: "mint, bam, amp",
        income: "2000000",
    },
    {
        key: "3",
        branchNo: "23",
        branchName: "Chula",
        topSpender: "mint, bam, amp",
        income: "2000000",
    },
    {
        key: "4",
        branchNo: "23",
        branchName: "Chula",
        topSpender: "mint, bam, amp",
        income: "2000000",
    },
    {
        key: "5",
        branchNo: "23",
        branchName: "Chula",
        topSpender: "mint, bam, amp",
        income: "2000000",
    },
    {
        key: "6",
        branchNo: "23",
        branchName: "Chula",
        topSpender: "mint, bam, amp",
        income: "2000000",
    }
]



const Branch = () => {
    const dateFormat = "DD-MM-YYYY";
    const [data, setData] = useState([])
    const [branchId, setBranchId] = useState("all")
    const [totalIncome,setTotalIncome] =useState(0)


    const branch = async (branchId) => {
        try {
            const res = await getBranch(branchId)
            setData(res.data)
            console.log(res.data)
            setTotalIncome( res.data.map(i => i.totalprice).reduce((a, b) => a + b))
        } catch (error) {
            console.log(error);
        }
    }

    const columns = [
        {
            title: "BranchId",
            dataIndex: "branch_id",
            key: "branch_id",
        },
        {
            title: "Branch Name",
            dataIndex: "street",
            key: "street",
        },
        {
            title: "Total Income",
            dataIndex: "totalprice",
            key: "income",
        },
    ]

    useEffect(async () => {
        await branch(branchId)
        

    }, [])

    

    return (
        <div className="branch-container">
            <div className="text-title">
                Branch
            </div>
            {/* <Row justify="space-between" align="middle" className="m-y-16">
                <Row justify="start" align="middle" gutter={["16", "0"]}> */}


            {/* </Row>

                <div className="link-button">
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Add Branch</Link>
                </div>
            </Row> */}
            <Table dataSource={data} columns={columns} pagination={false} className="table" summary={() => (
                <Table.Summary.Row>
                    <Table.Summary.Cell >All</Table.Summary.Cell>
                    <Table.Summary.Cell ></Table.Summary.Cell>

            <Table.Summary.Cell >{totalIncome}</Table.Summary.Cell>
                </Table.Summary.Row>

            )} />
        </div>
    )
}

export default Branch

{/* <Table dataSource={data} columns={columns} pagination={false} className="table" footer={() => (
                <Row>
                    <Col span={4}>All</Col>
                    <Col span={4} offset={4}>mint</Col>
                    <Col span={4}>10000000</Col>
                </Row>
            )} /> */}