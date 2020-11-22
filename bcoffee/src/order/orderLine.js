import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './orderLine.scss'
import { getOrderEach } from '../service/user.service'

const OrderLine = () => {
    const { orderId } = useParams()
    const [dataOrder, setDataOrder] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        order(orderId)
    }, [])

    const order = async (orderId) => {
        try {
            const resOrder = await getOrderEach(orderId)
            console.log(resOrder.data)
            setDataOrder(resOrder.data)
            resOrder.data.map((orderLine) => {
                setTotal(orderLine.totalpriceb)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="order-line-container">
            <div className="text-title">
                Order
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">
                <div className="text-normal">
                    Order Id: {orderId}
                </div>
            </Row>
            {/* start */}
            {dataOrder.map((orderLine) => (
                <div className="box" key={orderLine.menu_id}>
                    <Row justify="space-between" align="middle">
                        <Row justify="center" align="middle" gutter={["16", "0"]}>
                            <Col>
                                <img src={orderLine.imgUrl} alt={`img-${orderLine.menu_id}`} className="custom-img" />
                            </Col>
                            <Col>
                                <div>
                                    Menu : {orderLine.name}
                                </div>
                                <div>
                                    Price : {orderLine.price}
                                </div>
                                <div>
                                    Amount : {orderLine.amount}
                                </div>
                            </Col>
                        </Row>

                        <div className="box-small">
                            {orderLine.eachPrice}
                        </div>
                    </Row>
                </div>
            ))}
            <Row justify="space-between" align="middle" className="box-total">
                <div>
                    total :
                </div>
                <div>
                    {total}
                </div>
            </Row>
            {/* end */}
        </div>
    )
}
export default OrderLine