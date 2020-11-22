import './makeOrder.scss'
import { Row, Col, Divider, Button, InputNumber, Modal, Select, Input } from 'antd'
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMenu, getEmployee, getCustomer, placeOrder } from '../service/user.service'
import { Option } from 'antd/lib/mentions';

const MakeOrder = () => {
    const [total, setTotal] = useState(0)
    const [dataCustomer, setDataCustomer] = useState([])
    const [dataEmployee, setDataEmployee] = useState([])
    const [customerName, setCustomerName] = useState("none")
    const [customerId, setCustomerId] = useState("")
    const [currentEmployee, setCurrentEmployee] = useState("")
    let [itemList, setItemList] = useState([])
    const [cart, setCart] = useState([])
    const [confirmVisible, setConfirmVisible] = useState(false)
    const history = useHistory()
    const branchId = useParams().branchId
    let localCart = localStorage.getItem("cart");

    useEffect(() => {

        menu(branchId)
        employee(branchId)
        customer(customerName)
        localCart = JSON.parse(localCart);
        if (localCart) setCart(localCart)
    }, [])

    const menu = async (branchId) => {
        try {
            const resMenu = await getMenu(branchId)
            console.log(resMenu.data)
            let itemList = [...resMenu.data]
            itemList = resMenu.data.map(data => ({ ...data, amount: 0, priceNow: 0 }))
            setItemList(itemList)
        } catch (error) {
            console.log(error)
        }
    }

    const employee = async (branchId) => {
        try {
            const resEmployee = await getEmployee(branchId)
            setDataEmployee(resEmployee.data)
        } catch (error) {
            console.log(error)
        }
    }

    const customer = async (customerName) => {
        try {
            const resCustomer = await getCustomer(customerName)
            setDataCustomer(resCustomer.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeAmount = (itemInCart, e) => {
        let cartCopy = [...cart]
        let existentItem = cartCopy.find(item => item.menu_id == itemInCart.menu_id);
        if (existentItem.amount > e) {
            let t = total - existentItem.price
            setTotal(t)
        } else {
            let t = total + existentItem.price
            setTotal(t)
        }
        existentItem.amount = e
        existentItem.priceNow = e * existentItem.price
        if (existentItem.amount <= 0) {
            cartCopy = cartCopy.filter(item => item.menu_id != itemInCart.menu_id)
        }
        console.log("cartCopy", cartCopy)
        setCart(cartCopy)
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart)
        console.log(cart)
    }

    const handleClickCheckout = (e) => {
        setConfirmVisible(true)
    }

    const handleClickCancel = (e) => {
        history.push("/order")
    }

    const handleClickItem = (item) => {
        let cartCopy = [...cart];
        let existingItem = cartCopy.find(cartItem => cartItem.menu_id == item.menu_id);
        if (existingItem) {
            existingItem.amount += 1
            existingItem.priceNow = existingItem.amount * existingItem.price
            let t = total + existingItem.price
            setTotal(t)
        } else {
            item.amount = 1
            item.priceNow = item.price
            let t = total + item.price
            setTotal(t)
            cartCopy.push(item)
        }
        console.log("exist", existingItem)
        setCart(cartCopy)
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart)
        console.log(JSON.parse(localCart))
    }

    const handleClear = () => {
        localStorage.clear()
    }

    const handleYesCheckOut = async () => {
        setConfirmVisible(false)
        // if (!localCart) {
        let bill = JSON.parse(localCart)
        console.log("cart", bill)
        console.log("emp_id", currentEmployee)
        console.log("branch_id", branchId)
        console.log("customer_id", customerId)
        await placeOrder({ branchId, customerId, currentEmployee, bill })
        history.push("/order")
    }

    const handleNoCheckout = () => {
        setConfirmVisible(false)
    }

    const handleCancelConfirm = () => {
        setConfirmVisible(false)
    }

    const handleSeleteEmp = (e) => {
        setCurrentEmployee(e)
        console.log("current employee", e)
    }

    const handleSeleteCustomer = (e) => {
        setCustomerId(e)
        console.log("current customer", e)
    }

    console.log("total", total)

    return (
        <div className="make-order-container">
            <div className="text-title">
                Place Order
        </div>
            <Row justify="start" align="bottom" gutter={["32", "0"]} className="m-y-16">

                <Col>
                    <div className="flex-col text">
                        Select Employee
                    <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            placeholder="select employee" onChange={handleSeleteEmp} className="m-t-10">
                            {dataEmployee.map((emp) => (
                                <Option value={emp.emp_id} key={emp.emp_id}>
                                    {emp.name}
                                </Option>
                            ))}
                        </Select>
                    </div>

                </Col>
                <Col>
                    <div className="flex-col text">
                        Select Customer
                    <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            placeholder="select customer" onChange={handleSeleteCustomer} className="m-t-10">
                            {dataCustomer.map((customer) => (
                                <Option value={customer.customer_id} key={customer.customer_id}>
                                    {customer.name}
                                </Option>
                            ))}
                        </Select></div>

                </Col>
                <Col>
                    <Button onClick={handleClear}>Clear</Button>
                </Col>
            </Row>
            <Row className="h-100">
                <Col span={16}>
                    <div className="grid">
                        {itemList.map((item) => (
                            <div key={item.menu_id} className="text-16">
                                <div className="card">
                                    <img src={item.imgUrl} key={item.menu_id} className="custom-img" onClick={() => handleClickItem(item)} />
                                </div>
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    {item.price}
                                </div>

                            </div>
                        ))}
                    </div>
                </Col>
                <Col span={8}>
                    <div className="box-cart">
                        <div className="box">
                            Cart
                    </div>
                        {localCart ? JSON.parse(localCart).map((itemInCart) => (
                            <div key={itemInCart.menu_id}>
                                <div className="text">
                                    {itemInCart.name}
                                </div>
                                <Row align="bottom" justify="space-between" className="m-t-10">
                                    <Col>
                                        <InputNumber min={0} max={10} value={itemInCart.amount} onChange={(e) => handleChangeAmount(itemInCart, e)} />
                                    </Col>
                                    <Col className="text">{itemInCart.priceNow}
                                    </Col>
                                </Row>
                                <Divider />
                            </div>
                        )) : <></>}

                        <div className="position-bottom">
                            <div className="box-total">
                                total : {total}
                            </div>
                            <div className="flex-row flex-center m-t-10">
                                {currentEmployee == "" || customerId == "" || !localCart ?
                                    <Button className="btn-check-disable m-r-10">Checkout</Button>
                                    :
                                    <Button className="btn-check m-r-10" onClick={handleClickCheckout}>Checkout</Button>
                                }
                                <Button className="btn-cancel" onClick={handleClickCancel}>Cancel</Button>
                            </div>
                        </div>

                    </div>

                </Col>
            </Row>
            <Modal visible={confirmVisible}
                onCancel={handleCancelConfirm}
                centered
                footer={false}>
                <div className="text-modal">
                    Confirm checkout order ?
                </div>
                <div className="m-t-30 text-center">
                    <Button onClick={handleYesCheckOut} className="button green">
                        Yes
                </Button>
                    <Button onClick={handleNoCheckout} className="button red">
                        No
                </Button>
                </div>

            </Modal>
        </div >
    );
    // }

}
export default MakeOrder

