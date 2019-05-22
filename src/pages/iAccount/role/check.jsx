import { Modal, Button } from 'antd';
import React,{Component} from 'react';
import {Table, Divider, Tag, Row, Col } from 'antd';  //表格插件
import obj from  './Tab.jsx';//引入表格
let allData =[{
    key: '1',
    num: '1',
    addTime: '2016-05-15 15:20:00',
    name: '管理',
    role:'公司职员',
    managerChannel:'市医院',
    state:'启用'
}];//所有数据
class Check extends React.Component {
    state = { visible: false ,condition:""}
    showModal = (e,data) => {
        this.setState({
            visible: true,
            condition:data,
        });
        allData = this.props.usersDate;
        // console.log(allData)
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        let checkResult = [];
        allData.map((item)=> {
            if(item.role == this.state.condition && this.state.condition != ""){
                checkResult.push(item)
            }
        })
        return (
            <div>
                <Button type="primary" onClick={(e)=>{this.showModal(e,this.props.role.props.value)}} style={{height:"28px"}}>
                    查询
                </Button>
                <Modal
                    title="Information"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Table columns={obj.columns} dataSource={checkResult}  />
                </Modal>
            </div>
        );
    }
}

export default Check