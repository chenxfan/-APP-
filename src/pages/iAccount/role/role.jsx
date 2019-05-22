/**
 *  @内部账户管理-角色管理
 */
/**
 *  @内部账户管理-人员管理
 *//**
 *  @内部账户管理-人员管理
 */

import React,{Component} from 'react';//引入react组件
import './personnel.css'
import {Table,Divider,Popconfirm , Row, Col } from 'antd';  //表格插件
import 'antd/dist/antd.css';
import DateRange from './starttime-end' //时间框
import Adduser from './alerting' //新增用户弹窗
import  Check from "./check";
import Selsecting from "./select";
import Write from './write';
import TitlePath from './path'
//人员管理
let data = [{
    num: '1',
    addTime: '2016-05-15 15:20:00',
    name: '管理',
    role:'管理员A',
    managerChannel:'医博士总部',
    stateing:'启用'

},{
    num: '2',
    addTime: '2016-05-15 15:20:00',
    name: '管理',
    role:'公司职员',
    managerChannel:'医博士一分公司',
    stateing:'启用'

}];
class Role extends Component{
    constructor(){
        super();
        this.state={
            usersDate:data,
            role:""
        }
        this.columns = [{
            title: '序号',
            dataIndex: 'num',
            key: 'num'
        }, {
            title: '添加时间',
            dataIndex: 'addTime',
            key: 'addTime',
        }, {
            title: '角色名称',
            key: 'role',
            dataIndex: 'role'
        }, {
            title: '隶属机构',
            key: 'managerChannel',
            dataIndex: 'managerChannel'
        },{
            title: '权限',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '状态',
            key: 'stateing',
            dataIndex: 'stateing'
        }, {
            title: '操作',
            key: 'operation',
            dataIndex: 'operation',
            render: (text, record) => (
                <React.Fragment>
                    <div className="write">  <Write /></div>
                    <Divider type="vertical"/>
                    <Popconfirm title="确认修改该成员状态？"  onConfirm={()=>{this.changestate(record)}} okText="Yes" cancelText="No"><a href="#">状态</a></Popconfirm>
                    <Divider type="vertical"/>
                    <Popconfirm  title="确认删除该成员？" onConfirm={()=>{this.del(record)}} okText="Yes" cancelText="No"><a href="#">删除</a></Popconfirm>
                </React.Fragment>
            )
        }];
    }

    adduser=(e,userData)=>{
        let data = userData;
        let newData = this.state.usersDate;
        newData.push(data);
        this.setState({
            usersDate:newData
        })
    }
    RoleChange=(e,val)=>{
        this.setState({
            role:val
        })
    }
    //编辑




    //状态改变
    changestate=(e)=>{
        let number = e.num;
        let statenow = e.stateing;
        let another=[];
        this.state.usersDate.map((item,index)=>{
            // console.log(item.stateing);
            if (number != item.num){
                another.push(item)
            }else {
                if(statenow == "停用"){
                    item.stateing = "启用"
                }else if(statenow == "启用"){
                    item.stateing = "停用"
                }
                another.push(item)
            }
        })
        this.setState({
            usersDate:another
        })
    }

    //删除
    del=(e)=>{
        let num = e.num;
        let another=[];
        this.state.usersDate.map((item,index)=>{
            if (item.num != num){
                another.push(item)
            }
        })
        this.setState({
            usersDate:another
        })
    }
    render() {
        return (
            <div>
                <p  style={{height:"20px",marginTop:"20px"}}><TitlePath /></p>
                <Row style={{height:"50px",marginLeft:"15px"}}>

                    <Col span={2}>
                        <span style={{lineHeight:"30px"}}>添加时间：</span>

                    </Col>
                    <Col span={8}>
                        <DateRange  />
                    </Col>

                    <Col span={5}>
                        <span>查询:&nbsp;&nbsp;&nbsp;</span><Selsecting role={this.state.role} onRoleChange={this.RoleChange} />
                    </Col>

                    <Col span={2}>
                        <Check role={this.state.role} usersDate={this.state.usersDate} />
                    </Col>
                    <Col span={2}>
                        <Adduser onAdduser={this.adduser}/>
                    </Col>
                </Row>

                <Row>
                    <Table columns={this.columns} dataSource={this.state.usersDate} pagination={{showSizeChanger:true, showQuickJumper:true, pageSize:10, pageSizeOptions: ['10', '15', '20', '25 ']}} />
                </Row>
            </div>
        )
    }
}
export default Role;



