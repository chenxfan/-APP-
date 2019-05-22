/**
 *   @ 登录
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import {Layout, Icon, Button, Input, message, Tooltip} from 'antd';
import 'antd/dist/antd.css';
import jhdata from '../../api/JH-data.js'





class Wrap extends Component {

    login_btn(e) {

        let nameipt=e.target.previousSibling.previousSibling.lastChild.value
        let pwdipt=e.target.previousSibling.childNodes[1].value

        !nameipt && !pwdipt ?
            message.info('账户或密码不能为空')
            :

            jhdata.acconut.forEach((item, i) => {

                if (jhdata.acconut[i].userName == nameipt && jhdata.acconut[i].userPwd == pwdipt) {
                    // message.success('登录成功')
                    console.log('ok')
                    let isLogin = true;
                    this.props.onIsLogin(isLogin)
                } else {
                    // message.error('账户或密码错误');
                    console.log('no')

                }
            });
    }

    render() {
        return (
            <div className='login_Wrap'>
                <h2 className='login_h2'>医博士全民医疗APP后台系统</h2>
                <Layout className="login_wrap">
                    <Input placeholder="请输入账号" className='login_input' style={{marginBottom: "20px",width:'368px'}}
                           prefix={<Icon className='userImg' type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                    />
                    <Input.Password  placeholder="请输入密码" className='login_input' style={{marginBottom: "20px"}}
                           prefix={<Icon className='pwdImg' type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                    />
                    <Button block type="primary" onClick={this.login_btn.bind(this)} style={{width:'300px',marginTop:'10px',marginLeft:'10px'}}>登录</Button>
                </Layout>

            </div>
        )
    }
}


export default Wrap;