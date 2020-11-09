import './bar.scss'
import { Menu } from 'antd'
import coffee from '../image/coffee.svg'
import { Link } from 'react-router-dom'

const Bar = () => {

    return (
        <div className="bar">
            <div className="flex-row flex-center m-b-20">
                <img src={coffee} className="custom-logo" />
                <div className="center text-semibold">
                    B-coffee
                </div>
            </div>
            <Menu mode="inline">
                <Menu.Item key="1" >
                    <Link to="/order">Order</Link>
                </Menu.Item>
                <Menu.Item key="2" >
                    <Link to="/inventory">Inventory</Link>
                </Menu.Item>
                <Menu.Item key="3" >
                    <Link to="/employee">Employee</Link>
                </Menu.Item>
                <Menu.Item key="4" >
                    Logout
            </Menu.Item>
            </Menu>
        </div>

    )
}

export default Bar;