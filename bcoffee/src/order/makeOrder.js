import './makeOrder.scss'
import { Row, Col, Divider, Button, InputNumber, Modal } from 'antd'
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMenu } from '../service/user.service'
import { ExclamationCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';

const data = {
    name: "Cocoa",
    price: "$10",
    amount: "2"
}

//total operate in this method

const MakeOrder = () => {
    let total = 0
    const [dataMenu, setDataMenu] = useState([])
    let [itemList, setItemList] = useState([])
    const [cart, setCart] = useState([])
    const [confirmVisible, setConfirmVisible] = useState(false)
    const history = useHistory()
    const branchId = useParams().branchId
    let localCart = localStorage.getItem("cart");
    let itemMatchAmount = {}

    useEffect(() => {
        localStorage.clear()
        menu(branchId)
        localCart = JSON.parse(localCart);
        //load persisted cart into state if it exists
        if (localCart) setCart(localCart)
    }, [])

    const menu = async (branchId) => {
        try {
            const resMenu = await getMenu(branchId)
            console.log(resMenu.data)
            setDataMenu(resMenu.data)
            let itemList = [...resMenu.data]
            itemList = resMenu.data.map(data => ({ ...data, amount: 0, priceNow: 0 }))
            setItemList(itemList)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeAmount = (itemInCart, e) => {
        let cartCopy = [...cart]
        let existentItem = cartCopy.find(item => item.menu_id == itemInCart.menu_id);
        console.log(itemInCart, "e", e)
        existentItem.amount = e
        existentItem.priceNow = e * itemInCart.price
        console.log("itemInCart amount", itemInCart.amount)
        if (existentItem.amount <= 0) {
            //remove item  by filtering it from cart array
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
        console.log("77", item)
        if (existingItem) {
            existingItem.amount += 1 //update item
            console.log("add item", existingItem.priceNow)
        } else { //if item doesn't exist, simply add it
            item.amount = 1
            item.priceNow = item.price
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

    const handleYesCheckOut = () => {
        setConfirmVisible(false)
        history.push("/order")
    }

    const handleNoCheckout = () => {
        setConfirmVisible(false)
    }

    const handleCancelConfirm = () => {
        setConfirmVisible(false)
    }

    return (
        <div className="make-order-container">
            <div className="text-title">
                Place Order
        </div>
            <Button onClick={handleClear}>clear</Button>
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
                            <div>
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
                                <Button className="btn-check m-r-10" onClick={handleClickCheckout}>Checkout</Button>
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

