import './makeOrder.scss'
import { Row, Col, Divider, Button, InputNumber } from 'antd'
import { useHistory } from "react-router-dom";

const data = {
    name: "Cocoa",
    price: "$10",
    amount: "2"
}

//total operate in this method

const MakeOrder = () => {
    let total = 0
    const history = useHistory()
    const handleChangeAmount = (e) => {

    }
    const handleClickCheckout = (e) => {
        history.push("/order")
    }
    const handleClickCancel = (e) => {
        history.push("/order")
    }

    return (
        <div className="make-order-container">
            <div className="text-title">
                Make an Order
            </div>
            <Row className="h-100">
                <Col flex={2}>
                    <div className="grid">
                        {/* start mock */}
                        <div className="text-16">
                            <div className="card">
                                <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />

                            </div>
                            <div>
                                {data.name}
                            </div>
                            <div>
                                {data.price}
                            </div>
                        </div>
                        <div className="text-16">
                            <div className="card">
                                <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />

                            </div>
                            <div>
                                {data.name}
                            </div>
                            <div>
                                {data.price}
                            </div>
                        </div>
                        <div className="text-16">
                            <div className="card">
                                <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />

                            </div>
                            <div>
                                {data.name}
                            </div>
                            <div>
                                {data.price}
                            </div>
                        </div>
                        <div className="text-16">
                            <div className="card">
                                <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />

                            </div>
                            <div>
                                {data.name}
                            </div>
                            <div>
                                {data.price}
                            </div>
                        </div>
                        <div className="text-16">
                            <div className="card">
                                <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />

                            </div>
                            <div>
                                {data.name}
                            </div>
                            <div>
                                {data.price}
                            </div>
                        </div>
                        <div className="text-16">
                            <div className="card">
                                <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />

                            </div>
                            <div>
                                {data.name}
                            </div>
                            <div>
                                {data.price}
                            </div>
                        </div>
                        <div className="text-16">
                            <div className="card">
                                <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />

                            </div>
                            <div>
                                {data.name}
                            </div>
                            <div>
                                {data.price}
                            </div>
                        </div>
                        {/* end mock */}
                    </div>

                </Col>
                <Col flex={1}>
                    <div className="box-cart">
                        <div className="box">
                            Cart
                        </div>
                        {/* start */}
                        <div className="text">
                            {data.name}
                        </div>
                        <Row align="bottom" justify="space-between" className="m-t-10">
                            <Col>
                                <InputNumber min={1} max={10} defaultValue={data.amount} onChange={handleChangeAmount} />
                            </Col>
                            <Col className="text">{data.price}
                            </Col>
                        </Row>
                        <Divider />
                        <div className="text">
                            {data.name}
                        </div>
                        <Row align="bottom" justify="space-between" className="m-t-10">
                            <Col>
                                <InputNumber min={1} max={10} defaultValue={data.amount} onChange={handleChangeAmount} />
                            </Col>
                            <Col className="text">{data.price}
                            </Col>
                        </Row>
                        <Divider />
                        <div className="text">
                            {data.name}
                        </div>
                        <Row align="bottom" justify="space-between" className="m-t-10">
                            <Col>
                                <InputNumber min={1} max={10} defaultValue={data.amount} onChange={handleChangeAmount} />
                            </Col>
                            <Col className="text">{data.price}
                            </Col>
                        </Row>
                        <Divider />
                        <div className="text">
                            {data.name}
                        </div>
                        <Row align="bottom" justify="space-between" className="m-t-10">
                            <Col>
                                <InputNumber min={1} max={10} defaultValue={data.amount} onChange={handleChangeAmount} />
                            </Col>
                            <Col className="text">{data.price}
                            </Col>
                        </Row>
                        <Divider />
                        <div className="text">
                            {data.name}
                        </div>
                        <Row align="bottom" justify="space-between" className="m-t-10">
                            <Col>
                                <InputNumber min={1} max={10} defaultValue={data.amount} onChange={handleChangeAmount} />
                            </Col>
                            <Col className="text">{data.price}
                            </Col>
                        </Row>
                        <Divider />
                        {/* end */}
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
        </div >
    )
}
export default MakeOrder

