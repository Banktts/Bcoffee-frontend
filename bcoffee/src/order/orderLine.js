import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
import './orderLine.scss'

const OrderLine = () => {
    const { orderId } = useParams();

    return (
        <div className="order-line-container">
            <div className="text-title">
                Order
            </div>
            <Row justify="space-between" align="middle" className="m-y-16">
                <div className="text-normal">
                    Order Id: {orderId}
                </div>
                <Row justify="" align="middle" gutter={["16", "0"]}>
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
            </Row>
            {/* start */}
            <div className="box">
                <Row justify="space-between" align="middle">
                    <Row justify="center" align="middle" gutter={["16", "0"]}>
                        <Col>
                            <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />
                        </Col>
                        <Col>
                            <div>
                                Menu :
                        </div>
                            <div>
                                Price :
                        </div>
                            <div>
                                Amount :
                        </div>
                        </Col>
                    </Row>

                    <div className="box-small">
                        $10
                    </div>
                </Row>
            </div>
            <div className="box">
                <Row justify="space-between" align="middle">
                    <Row justify="center" align="middle" gutter={["16", "0"]}>
                        <Col>
                            <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />
                        </Col>
                        <Col>
                            <div>
                                Menu :
                        </div>
                            <div>
                                Price :
                        </div>
                            <div>
                                Amount :
                        </div>
                        </Col>
                    </Row>

                    <div className="box-small">
                        $10
                    </div>
                </Row>
            </div>
            <div className="box">
                <Row justify="space-between" align="middle">
                    <Row justify="center" align="middle" gutter={["16", "0"]}>
                        <Col>
                            <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />
                        </Col>
                        <Col>
                            <div>
                                Menu :
                        </div>
                            <div>
                                Price :
                        </div>
                            <div>
                                Amount :
                        </div>
                        </Col>
                    </Row>

                    <div className="box-small">
                        $10
                    </div>
                </Row>
            </div>
            <div className="box">
                <Row justify="space-between" align="middle">
                    <Row justify="center" align="middle" gutter={["16", "0"]}>
                        <Col>
                            <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />
                        </Col>
                        <Col>
                            <div>
                                Menu :
                        </div>
                            <div>
                                Price :
                        </div>
                            <div>
                                Amount :
                        </div>
                        </Col>
                    </Row>

                    <div className="box-small">
                        $10
                    </div>
                </Row>
            </div>
            <div className="box">
                <Row justify="space-between" align="middle">
                    <Row justify="center" align="middle" gutter={["16", "0"]}>
                        <Col>
                            <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />
                        </Col>
                        <Col>
                            <div>
                                Menu :
                        </div>
                            <div>
                                Price :
                        </div>
                            <div>
                                Amount :
                        </div>
                        </Col>
                    </Row>

                    <div className="box-small">
                        $10
                    </div>
                </Row>
            </div>
            <div className="box">
                <Row justify="space-between" align="middle">
                    <Row justify="center" align="middle" gutter={["16", "0"]}>
                        <Col>
                            <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />
                        </Col>
                        <Col>
                            <div>
                                Menu :
                        </div>
                            <div>
                                Price :
                        </div>
                            <div>
                                Amount :
                        </div>
                        </Col>
                    </Row>

                    <div className="box-small">
                        $10
                    </div>
                </Row>
            </div>
            <div className="box">
                <Row justify="space-between" align="middle">
                    <Row justify="center" align="middle" gutter={["16", "0"]}>
                        <Col>
                            <img src="https://images.mummypages.ie/images/3122/156/7/8_2/cold+rink+chocolate.jpg" className="custom-img" />
                        </Col>
                        <Col>
                            <div>
                                Menu :
                        </div>
                            <div>
                                Price :
                        </div>
                            <div>
                                Amount :
                        </div>
                        </Col>
                    </Row>

                    <div className="box-small">
                        $10
                    </div>
                </Row>
            </div>
            <Row justify="space-between" align="middle" className="box-total">
                <div>
                    total :
                </div>
                <div>
                    $50
                </div>
            </Row>
            {/* end */}
        </div>
    )
}
export default OrderLine