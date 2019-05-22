import React, { Component } from 'react';
import "./userInfo.css";
import { Typography, Button } from 'antd';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Menber from './userin/Member';
import Interactive from './userin/Interactive';
import Infomation from './userin/Information';
import Orders from './userin/Orders';
const { Title } = Typography;
class UserInfo extends Component {
    render() {
        return (
            <Router>
                <div className="hear">
                    <div className="nav">
                    <span>首页</span> /
                    <span>用户管理</span> /
                    <span>用户列表</span> /
                    <span>用户详情</span>
                        <Button onClick={this.Click} type="primary" style={{ float: "right", marginRight: "50px" }}>返回列表</Button>
                    </div>
                    <div className="contents">
                        <div className="left">
                            <div className="chang" >
                                <img src="" alt="" />
                                <h2  >用户ID:2018052900001</h2>
                            </div>
                            <div className="leftOne">
                                <p>
                                    <span>用户姓名</span> : &nbsp;
                                    <span>曲丽丽</span>
                                </p>
                                <p>
                                    <span >年龄</span> : &nbsp;
                                    <span>27</span>
                                </p>
                                <p>
                                    <span>订购服务包</span> : &nbsp;
                                    <span>基础包</span>
                                </p>
                                <p>
                                    <span>购买时间</span> : &nbsp;
                                    <span>2017-01-10</span>
                                </p>
                                <p>
                                    <span>已使用服务次数</span> : &nbsp;
                                    <span>2</span>
                                </p>
                            </div>
                            <div className="leftTow">
                                <p>
                                    <span>性别</span> : &nbsp;
                                    <span>女</span>
                                </p>
                                <p>
                                    <span>常住地址</span> : &nbsp;
                                    <span>四川省是成都市武侯区</span>
                                </p>
                                <p>
                                    <span>家庭成员</span> : &nbsp;
                                    <span>5</span>
                                </p>
                                <p>
                                    <span>服务包到期日</span> : &nbsp;
                                    <span>2017-01-10</span>
                                </p><p>
                                    <span>剩余服务次数</span> : &nbsp;
                                    <span>8</span>
                                </p>
                            </div>
                            <div className="buttom">
                                <div><NavLink to="/menber">SNS互动详情</NavLink></div>
                                <div><NavLink to="/interactive">家庭成员信息</NavLink></div>
                                <div><NavLink to="/infomation">公卫数据信息</NavLink></div>
                                <div><NavLink to="/orders">订单数据</NavLink></div>
                            </div>
                        </div>
                        <div className="right">
                                IMG
                        </div>
                    </div>
                    <div className="boot">
                                {/* path 表示路径 当路径是login的时候匹配 Login 路由  路径首字母小写 */}
                                <Route path="/menber" component={Menber}></Route>
                                <Route path="/interactive" component={Interactive}></Route>
                                <Route path="/infomation" component={Infomation}></Route>
                                <Route path="/orders" component={Orders}></Route>
                    </div>
                </div>
            </Router>



        )
    }
}
export default UserInfo