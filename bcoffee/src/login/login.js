import './login.scss'
import coffee from '../image/coffee.svg'
import { Button, Input, Space } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { useState } from 'react'

const Login = () => {

    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")

    const handleChangeUser = (e) => {
        setUserName(e.target.value)
    }
    const handleChangePassWord = (e) => {
        setPassWord(e.target.value)
    }
    return (
        <div className="login">
            <div className="flex-row row-center">
                <img src={coffee} className="img-coffee" />
                <div className="m-left text-center">
                    <div className="text-big">
                        B-coffee
                </div>
                    <Space direction="vertical" align="center" className="margin">
                        <Input placeholder="username" value={userName} onChange={handleChangeUser} className="input" />
                        <Input placeholder="password" value={passWord} onChange={handleChangePassWord} className="input" />
                    </Space>
                    <Button className="button">
                        Login
                </Button>
                </div>
            </div>
        </div>

    )
}

export default Login;