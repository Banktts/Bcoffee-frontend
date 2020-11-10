import { Table } from 'antd'
import React from 'react';
import './order.scss'
import { Link } from "react-router-dom";


const data = [
    {
        key: "1",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "2",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "3",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "4",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "5",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    },
    {
        key: "6",
        name: "Chaninart",
        gender: "Female",
        position: "Manager",
        birthdate: "xx/xx/xx",
        startDate: "xx/xx/xx",
        salary: "30000"
    }
]



const Order = () => {

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
            // render: (text, record) => {
            //     <>
            //         {record.gender}
            //     </>
            // }
        },
        {
            title: "Position",
            dataIndex: "position",
            key: "position",
            // render: (text, record) => {
            //     <>
            //         {record.position}
            //     </>
            // }
        },
        {
            title: "Birthdate",
            dataIndex: "birthdate",
            key: "birthdate",
            // render: (text, record) => {
            //     <>
            //         {record.birthdate}
            //     </>
            // }
        },
        {
            title: "Start date",
            dataIndex: "startDate",
            key: "startDate",
            // render: (text, record) => {
            //     <>
            //         {record.startDate}
            //     </>
            // }
        },
        {
            title: "Salary",
            dataIndex: "salary",
            key: "salary",
            // render: (text, record) => {
            //     <>
            //         {record.salary}
            //     </>
            // }
        },
    ]

    return (
        <div className="order-container">
            <div className="flex-row">
                <div>
                    Order
                </div>
                <div>
                    <Link to="/order/make" >Make an order</Link>
                </div>
            </div>
            <Table dataSource={data} columns={columns} pagination={false} />
        </div>
    )
}

export default Order
