/**
 *  @商品管理
 */

import './commodity-shop.css';
import {Table, Divider, Tag,Button, Row, Icon,Modal,Popconfirm , DatePicker ,Radio,Input,Upload } from 'antd';
import React, {Component} from "react"
import jhdata from '../../../api/JH-data.js'
// import obj from "../../iAccount/personnel/Tab";
import AddShop from './Addshop' //添加商品
// import EditShop from './EditShop' //修改商品
import PicturesWall from './IMG'


const { MonthPicker, RangePicker } = DatePicker;

let today = new Date(),
    mytime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();


class Commodity extends React.Component {
    constructor() {
        super()
    }
    state={
        data:data,
    }

    //增加数据
    changeData(el){
        this.setState({
            data:el
        })
    }

    render() {
        return (
            <React.Fragment>
                <Personnel data={this.state.data} onChangedata={(e)=>{this.changeData(e)}} />
                <Shop data={this.state.data}/>
            </React.Fragment>
        );
    }
}

const data = []
for (let i = 0; i < jhdata.falseData.length; i++) {
    data.push({
        address: mytime,
        name: jhdata.falseData[i].productName,
        salesVolume: jhdata.falseData[i].salesVolume,
        key: jhdata.falseData[i].count,
        sale:jhdata.falseData[i].sale,
        tags: '下架',
        operate:'',
        isTags: false,
    });

}
//商品渲染
class Shop extends React.Component {
    constructor() {
        super()

        let key = React.createRef();
        this.state = {
            des: '详情',
            data:data
            // data: this.props.data,
        }

        this.columns = [{
            title: '序号',
            dataIndex: 'key',
            }, {
                title: '商品添加时间',
                dataIndex: 'address',
            }, {
                title: '商品名称',
                dataIndex: 'name',

            }, {
            title: '商品价格',
            dataIndex: 'sale',

            }, {
                title: '商品描述',
                dataIndex: 'des',
                render: (text, record) => (
                <React.Fragment>
                    <a href="" >描述</a>
                </React.Fragment>
                ),
            }, {
                title: '库存',
                dataIndex: 'salesVolume',

            }, {
                title: '状态',
                dataIndex: 'tags',
                render: (text, record) => (
                <React.Fragment>
                    <a href="javascript:;">{text}</a>
                </React.Fragment>
                ),
            }, {
                title: '操作',
                dataIndex: 'operate',
                render: (text, record) => (
                    <React.Fragment>
                        <a href="javascript:;"  ><EditShop /></a>
                        <Divider type="vertical"/>
                        <Popconfirm title="是否删除本商品？"  onConfirm={()=>{this.confirm(record)}} onCancel={this.cancel} okText='ok'cancelText="No" ><a href="#">删除</a></Popconfirm>
                        <Divider type="vertical"/>
                        <a href="javascript:;" onClick={() => {this.tagsOutClick(record)}} style={{color:''}}>上架</a>
                    </React.Fragment>
                )
        }];
    }

    tagsOutClick(comData) {//上架下架
        let key = comData.key;
        let newData = this.state.data.map((el, idx) => {
            if (el.key == key && el.isTags==false ) {
                el.tags = '上架';
                el.isTags = true;

            }else{
                el.tags = '下架';
                el.isTags = false;

            }
            return el;
        });
        this.setState({
            data: newData,
            tags:'下架'
        })
    }
    confirm(e) {//确认删除
        let key = e.key;
        let okDel=[]
        this.state.data.forEach((el,idx)=>{
            if (el.key != key ) {
                okDel.push(el)
            }
        })
        this.setState({
            data:okDel
        })

    }
    cancel(e) {//取消删除
        console.log("no")
    }
    render() {
        return (
            <React.Fragment>
                <Table columns={this.columns} dataSource={this.props.data} className='C_table'/>
            </React.Fragment>
        );
    }
}


//头部
class Personnel extends Component{
    constructor(){
        super();

    }
    state={
        // shopDate:this.props.data
    }

    addInfo(el){
        this.setState({
            data:el
        })
    }
    onIsadd(el){
        this.setState({
            isAdd:el
        })
        console.log(el,"okjasldkfwoejfwkjfodijoifjdoifsdoifsoifsadoifj")
    }

    render() {
        console.log(jhdata.falseData)
        return (
            <div className='C_header'>
                <p  style={{height:"20px",marginTop:"20px"}}>
                    <span className='nav'>首页</span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
                    <span className='nav'>内部账户管理</span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
                    <span className='nav' style={{color:'rgb(24 144 255)'}}>人员管理</span>
                </p>
                <Row style={{height:"60px"}}>
                    <span style={{lineHeight:"30px"}}>添加时间：</span>
                    <RangePicker dateRender={(current) => {
                            const style = {};
                            if (current.date() === 1) {
                                style.border = '1px solid #1890ff';
                                style.borderRadius = '50%';
                            }
                            return (
                                <div className="ant-calendar-date" style={style}>
                                    {current.date()}
                                </div>
                            );
                        }}
                    />
                    <span>查询:&nbsp;&nbsp;&nbsp;</span><input className='checkinput' placeholder="查询条件"  style={{height:"30px"}}/>

                    <Button className='btn' type="primary"  >查询</Button>

                    <AddShop  onAddInfo={(e)=>{this.addInfo(e)}} onIsAdd={(e)=>{this.onIsadd(e)}} data={this.props.data} addInfo={(e)=>{this.props.changeData(e)}} />

                </Row>

            </div>
        )
    }
}


//编辑商品信息
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
            datas:data
        }
    }

    showModal (e) {
        console.log(e)
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
    // username = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // rolename = (e) => {
    //     this.setState({
    //         role: e.target.value
    //     })
    // }
    // managerAccount = (e) => {
    //     this.setState({
    //         salesVolume: e.target.value
    //     })
    // }
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




export default Commodity;
