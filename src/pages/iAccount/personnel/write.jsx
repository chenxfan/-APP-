import { Modal, Button } from 'antd';
import React,{Component} from 'react';
import './personnel.css';
import obj from "./Tab";
class Adduser extends React.Component {
    constructor(){
        super();
        this.state={
            visible: false,
            key: '',
            num: "",
            addTime: '',
            name: '',
            role:'',
            managerChannel:'',
            stateing:''
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    username=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    rolename=(e)=>{
        this.setState({
            role:e.target.value
        })
    }
    managerAccount=(e)=>{
        this.setState({
            managerChannel:e.target.value
        })
    }
    restate=(e)=>{
        // console.log(e.target.value)
        let statedo = "启用";
        let statestop = "停用";
        if (e.target.value == "0"){
            this.setState({
                stateing:statedo
            })
        }else if (e.target.value == "1") {
            this.setState({
                stateing:statestop
            })
        }
    }
    render() {
        return (
            <div>
                <a href="#" type="primary" onClick={this.showModal} style={{height:"28px"}}>
                    编辑
                </a>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="box">
                        <p className="title">编辑人员信息</p>
                        <hr/>
                        <div className="inputbox">
                            <span className="item">人员姓名：</span><input type="text" id='username' value={this.state.name} onChange={this.username}/><br/>
                            <span className="item">昵称：</span><input type="text" id='nickname' value={this.state.name} onChange={this.nickname}/><br/>
                            <span className="item">角色：</span> <select id="rolename"  value={this.state.role} onChange={this.rolename}>
                            <option>公司职员</option>
                            <option>运营人员</option>
                            <option>营销人员</option>
                            <option>管理员A</option>
                            <option>管理员B</option>
                            <option>BOSS</option>
                        </select><br/>
                            <span className="item">官方账号： </span><input id="managerAccount"  value={this.state.managerChannel}  type="text" onChange={this.managerAccount}/><br/>
                            <span className="item">状态：</span><input type="radio" name="restate"  value="0"   checked="checked"  onChange={this.restate} />启用
                            <input type="radio" name="restate"  value="1"  onChange={this.restate} />停用
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Adduser;