import {Modal, Button, Radio,Input , Upload, Icon } from 'antd';
import React, {Component} from 'react';
import './commodity-shop.css';
import Shops from  './commodity-shop'


let today = new Date(),
    mytime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

const RadioGroup = Radio.Group;
const { TextArea } = Input;

class EditShop extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            key: '',
            num: '3',
            addTime: mytime,
            name: '',
            role: '',
            salesVolume: '',
            img: '',

        }
    }

    showModal (e) {
        console.log(commodity)
        let key = e.key;
        // let edit = this.state.data.map((el, idx) => {
        //     if (el.key == key && el.isTags==false ) {
        //         el.tags = '上架';
        //         el.isTags = true;
        //
        //     }else{
        //         el.tags = '下架';
        //         el.isTags = false;
        //
        //     }
        //     return el;
        // });
        this.setState({
            visible: true,
        });


    }

    handleOk = (e) => {//确认点击
        console.log(e);
        this.setState({
            visible: false
        });
        let userData = this.state;
        this.props.onAdduser(e, userData)
    }

    handleCancel = (e) => {//取消点击
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    username = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    rolename = (e) => {
        this.setState({
            role: e.target.value
        })
    }
    managerAccount = (e) => {
        this.setState({
            salesVolume: e.target.value
        })
    }
    // restate = (e) => {
    //     this.setState({
    //         img: e.target.value
    //     })
    // }

    render() {
        return (
            <React.Fragment>
                <a className='btn' type="primary" onClick={(e)=>{this.showModal(e)}} >编辑</a>
                <Modal  visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <p className="title">编辑商品信息</p>
                        <hr/>
                        <p className='M_shop'>商品名称：</p><Input type="text"  value={this.state.name} onChange={this.username}/><br/>
                        <p className='M_shop'>商品库存数：</p><Input type="text"  value={this.state.role} onChange={this.rolename}/><br/>
                        <p className='M_shop'>商品价格：</p><Input type="text"  value={this.state.salesVolume} onChange={this.managerAccount}/><br/>
                        <p className='M_shop'>商品对应图片：</p>
                        <Upload {...props} >
                            <Button className='upload'>
                                <Icon type="upload" /> Upload
                            </Button>
                        </Upload>
                        <br/>
                        <span className='M_shop' style={{marginBottom:'85px'}}>商品描述内容:</span><TextArea rows={4} />
                        <p className='M_shop'>状态：</p>
                        <RadioGroup  name="radiogroup" defaultValue={1}>
                            <Radio value={1}>上架</Radio>
                            <Radio value={2}>下架</Radio>
                        </RadioGroup>
                </Modal>
            </React.Fragment>
        );
    }
}


const fileList = [{
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
};

const props2 = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
};








export default EditShop;
