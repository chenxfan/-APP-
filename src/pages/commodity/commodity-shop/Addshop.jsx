import {Modal, Button, Radio,Input , Upload, Icon } from 'antd';
import React, {Component} from 'react';
import './commodity-shop.css';
import jhdata from '../../../api/JH-data.js'


let today = new Date(),
    mytime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const RadioGroup = Radio.Group;
const { TextArea } = Input;

class AddShop extends React.Component {

        state = {
            visible: false,
            key: '',
            address: mytime,
            name: '',
            salesVolume: '',
            tags: '',
            sale:'',
            remark:''
        }


    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        let isAdd= true;
        this.props.onIsAdd(isAdd)
        this.setState({
            confirmLoading: false
        });
        let info={
            key: jhdata.falseData.length+1,
            name:this.state.name,
            salesVolume: this.state.salesVolume,
            tags:this.state.tags,
            sale: this.state.sale,
            remark:this.state.remark

        }
        // console.log("teste")
        setTimeout(()=>{
            jhdata.falseData.unshift(info);
            this.setState({
                visible: false,
                key:null,
                name:null,
                salesVolume:null,
                tags:null,
                sale:null,
                remark:null

            })
            isAdd = false;
            this.props.onIsAdd(isAdd);
            this.props.onAddInfo(jhdata.falseData);
        },100)

    }

    handleCancel = (e) => {
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
            salesVolume: e.target.value
        })
    }
    managerAccount = (e) => {
        this.setState({
            sale: e.target.value
        })
    }
    restate = (e) => {
        this.setState({
            remark: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Button className='btn' type="primary" onClick={this.showModal} >
                    新增商品信息
                </Button>
                <Modal  visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <p className="title">新增商品信息</p>
                        <hr/>
                        <p className='M_shop'>商品名称：</p><Input type="text"  value={this.state.name} onChange={this.username}/><br/>
                        <p className='M_shop'>商品库存数：</p><Input type="text"  value={this.state.salesVolume} onChange={this.rolename}/><br/>
                        <p className='M_shop'>商品价格：</p><Input type="text"  value={this.state.sale} onChange={this.managerAccount}/><br/>
                        <p className='M_shop'>商品对应图片：</p>
                                <Upload {...props} >
                                    <Button className='upload'>
                                        <Icon type="upload" /> Upload
                                    </Button>
                                </Upload>
                        <br/>
                        <span className='M_shop' style={{marginBottom:'85px'}}>商品描述内容:</span><TextArea rows={4} value={this.state.remark} onChange={this.restate} />
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








export default AddShop;
