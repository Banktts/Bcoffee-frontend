import { Button, Col, DatePicker, Row, Select, Table } from 'antd'
import React from 'react'
import './branch.scss'
import { Link } from "react-router-dom"
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Option } from 'antd/lib/mentions'
import moment from "moment";

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

//topspender: show top three name of customer 

const Branch = () => {
    const dateFormat = "DD/MM/YYYY";
    const columns = [
        {
            title: "BranchId",
            dataIndex: "branchId",
            key: "branchId",
        },
        {
            title: "Branch Name",
            dataIndex: "branchName",
            key: "branchName",
        },
        {
            title: "Top Spender",
            dataIndex: "topSpender",
            key: "topSpender",
        },
        {
            title: "Income",
            dataIndex: "income",
            key: "income",
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

    return (
        <div className="branch-container">
            <div className="text-title">
                Branch
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">
                <Row justify="start" align="middle" gutter={["16", "0"]}>
                    <Col>
                        <Select defaultValue="all" onChange={handleChangeFilter} >
                            <Option value="all">All</Option>
                        </Select>
                    </Col>
                    <Col>
                        <DatePicker onChange={handleChangeDate} defaultValue={moment()} format={dateFormat} />
                    </Col>
                </Row>

                <div className="link-button">
                    <Link to="/order/make" className="text-link"><PlusOutlined /> Add Branch</Link>
                </div>
            </Row>
            <Table dataSource={data} columns={columns} pagination={false} className="table" summary={() => (
                <Table.Summary.Row>
                    <Table.Summary.Cell >All</Table.Summary.Cell>
                    <Table.Summary.Cell ></Table.Summary.Cell>
                    <Table.Summary.Cell >xxxxxx</Table.Summary.Cell>
                    <Table.Summary.Cell >xxxxxx</Table.Summary.Cell>
                    <Table.Summary.Cell ></Table.Summary.Cell>
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