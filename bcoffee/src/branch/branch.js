import {  Table } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import './branch.scss'
import { getBranch } from '../service/user.service'


const Branch = () => {

    const [data, setData] = useState([])

    const [totalIncome,setTotalIncome] =useState(0)
    const [topAll,setTopAll]=useState()


    const branch = async (branchId) => {
        try {
            const res = await getBranch(branchId)
            setData(res.data)
            console.log(res.data)
            setTotalIncome( res.data.map(i => i.income).reduce((a, b) => a + b))
            setTopAll(res.data[0].topAll)
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
            title: "Total Spender",
            dataIndex: "top_spender",
            key: "top_spender",
        },
        {
            title: "Total Income",
            dataIndex: "income",
            key: "income",
        },
    ]

    useEffect(async () => {
        await branch()
        

    }, [])

    

    return (
        <div className="branch-container">
            <div className="text-title">
                Branch
            </div>
            <Table dataSource={data} columns={columns} pagination={false} className="table" summary={() => (
                <Table.Summary.Row>
                    <Table.Summary.Cell >All</Table.Summary.Cell>
                    <Table.Summary.Cell ></Table.Summary.Cell>
            <Table.Summary.Cell >{topAll}</Table.Summary.Cell>

            <Table.Summary.Cell >{totalIncome}</Table.Summary.Cell>
                </Table.Summary.Row>

            )} />
        </div>
    )
}

export default Branch

