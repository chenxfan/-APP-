/**
 *  @内部账户管理-频道子账号管理
 */
import React, { Component } from 'react';
import { Breadcrumb,DatePicker,Form,Avatar,Input,Radio,Button,Table, Divider, Tag,Pagination ,Modal,Upload, message,Icon,Select} from 'antd';
import 'antd/dist/antd.css';
import './channel.css';
import TableBox from "../Table";
import SearchBox from "../Search";
import "../Table.css";

class Channel extends Component {
    constructor(){
        super();
    }
    state = {
        data:data,
        searchData:null,
        isSearch:false,
        isAdd:false,
        isState:false,
    }
    //输入框的值
    handleValue(e){
        this.setState({
            searchData:e.target.value,
        })
    }
    //搜索数据
    handleSearch(e,el){
        el?(
            data.map((item,i)=>{
                if(item.name.includes(el.trim())){
                    let nowData = data.splice(i,1);
                    this.setState({
                        data:nowData,
                        isSearch:true,
                    })
                    setTimeout(()=>{
                        this.setState({
                            data:nowData,
                            isSearch:false,
                        })
                    },100)
                }
            })
        ):(alert("搜索内容不能为空，请重新输入"));
    }
    //更改isSearch
    onhandleSearch(isBool){
        this.setState({
            isSearch:isBool,
        })
    }

    //增加广告
    addInfo(el){
        this.setState({
            data:el
        })
    }
    onIsadd(el){
        this.setState({
            isAdd:el
        })
    }

    //显示模块
    render(){
        const {searchData,isSearch,ShowModule,isAdd} = this.state;
        return (
            <React.Fragment>
                <div>
                    <Breadcrumb className="map" style={{marginLeft:"20px"}}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">内部账户管理</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">官方频道管理</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                {/*搜索栏*/}
                <div className="bar_searchRow" style={{marginLeft:"10px"}}>
                    <DateRange/>
                    <div className="searchBox">
                        <span>查询：</span>
                        <Input
                            placeholder="请输入查询条件"
                            style={{width:"150px",margin:"0 10px"}}
                            value={searchData}
                            onChange={(e)=>{this.handleValue(e)}}
                        />
                        <Button
                            style={{margin:"0 10px"}}
                            onClick={(e)=>{this.handleSearch(e,searchData)}}
                        >
                            查询
                        </Button>
                        <AdBanner onAddInfo={(e)=>{this.addInfo(e)}} onIsAdd={(e)=>{this.onIsadd(e)}}></AdBanner>
                    </div>
                </div>
                <dvi>
                    <div className="table_title" style={{marginLeft:"20px"}}>
                        <div className="listID">序号</div>
                        <div className="infoTime">添加时间</div>
                        <div className="infoName">官方账号名称</div>
                        <div className="infoPath">账号简介</div>
                        <div className="infoImg">账号头像</div>
                        <div className="infoState">状态</div>
                        <div className="infoAction">操作</div>
                    </div>
                    {isAdd?
                        (<div><SearchBox data={this.state.data} onSearch={(e)=>{this.handleSearch(e)}}/></div>)
                        :(isSearch ?
                            (<div><SearchBox data={this.state.data} onSearch={(e)=>{this.handleSearch(e)}}/></div>)
                            :(<div><TableBox data={this.state.data} onSearch={(e)=>{this.handleSearch(e)}}/></div>))}
                </dvi>
            </React.Fragment>
        )
    }
}

//选择时间
class DateRange extends React.Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
    };

    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }

    render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div>
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    showTime
                    format="YYYY-MM-DD"
                    value={startValue}
                    placeholder="请输入开始时间"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                />
                <span style={{margin:"0 5px"}}>~</span>
                <DatePicker
                    disabledDate={this.disabledEndDate}
                    showTime
                    format="YYYY-MM-DD"
                    value={endValue}
                    placeholder="请输入结束时间"
                    onChange={this.onEndChange}
                    open={endOpen}
                    onOpenChange={this.handleEndOpenChange}
                />
            </div>
        );
    }
}


const data = [{
    listID: '1',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '2',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '3',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '4',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '5',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '6',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '7',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '8',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '9',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '10',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}, {
    listID: '11',
    name: '医养生—治疗',
    time: "2019-04-21",
    address: 'New York No. 1 Lake Park',
    show: "详情",
    path:"这是一个悲伤的故事，很久很久以前，有一个.......",
    state:"启用",
    img:"../images/comment/comment-video/u1532.jpg",
}];

//新增banner广告
class AdBanner extends Component {
    state = {
        visible: false,
        confirmLoading: false,
        listID: null,
        name: null,
        time: "2018-02-02",
        address: 'New York No. 1 Lake Park',
        show: "预览",
        path:null,
        state:"停用",
        img:"../images/comment/comment-video/u1532.jpg",
        selectValue:"中医养生",
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        let isAdd = true;
        this.props.onIsAdd(isAdd);
        this.setState({
            confirmLoading: true,
        });
        let info ={
            listID: data.length+1,
            name: (this.state.selectValue+"—"+this.state.name),
            time: this.state.time,
            address: this.state.address,
            show: this.state.show,
            path:this.state.path,
            state:this.state.state,
            img:this.state.img,
        }
        setTimeout(() => {
            data.unshift(info)
            this.setState({
                visible: false,
                confirmLoading: false,
                listID: null,
                name: null,
                path:null,
            });
            isAdd = false;
            this.props.onIsAdd(isAdd);
            this.props.onAddInfo(data);
        }, 1);
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    //获取输入框内容
    handleName(e){
        this.setState({
            name:e.target.value
        })
    }
    handlePath(e){
        this.setState({
            path:e.target.value
        })
    }
    handleState(e){
        this.setState({
            state:e.target.value
        })
    }

    //选择器
    handleSelect(value) {
        this.setState({
            selectValue:value
        })
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        const { formLayout } = this.state;
        //图片信息
        const fileInfo = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        //单选框
        const RadioGroup = Radio.Group;

        //选择器
        const Option = Select.Option;
        //文本域
        const { TextArea } = Input;
        return (
            <div>
                <Button onClick={this.showModal}>新增频道</Button>
                <Modal
                    title="新增子账号信息"           //对话框标题
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                    okText="确认"                     //确认按钮文字
                    cancelText="取消"                 //取消按钮文字
                    destroyOnClose={true}
                >
                    {/*新增banner广告内容*/}
                    <div>
                        <div className="inputRow inputHeight">
                            <span className="inputTitle">子账号名称：</span>
                            <Input placeholder="请输入频道名称" value={this.state.name} onChange={(e)=>{this.handleName(e)}} />
                        </div>
                        <div className="inputRow inputHeight">
                            <span className="inputTitle">隶属频道：</span>
                            {/*<Input placeholder="请输入广告链接" value={this.state.path} onChange={(e)=>{this.handlePath(e)}} />*/}
                            <div style={{width:"75%"}}>
                                <Select defaultValue="options" style={{ width: 120 }} onChange={(e)=>{this.handleSelect(e)}}>
                                    <Option value="options">--请选择--</Option>
                                    <Option value="中医养生">中医养生</Option>
                                    <Option value="母婴家居">母婴家居</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="inputRow inputHeight" style={{alignItems:"self-start"}}>
                            <span className="inputTitle">子账号简介：</span>
                            <div style={{width:"75%"}}>
                                <TextArea rows={4} placeholder="请输入广告链接" value={this.state.path} onChange={(e)=>{this.handlePath(e)}} />
                            </div>
                        </div>
                        <div className="inputRow inputHeight">
                            <span className="inputTitle">子账号头像：</span>
                            <div className="fileBox">
                                <Upload {...fileInfo}>
                                    <Button style={{
                                        textAlign:"left",
                                        textOverflow: "clip",
                                        whiteSpace: "nowrap",
                                    }}>
                                        <Icon type="upload" /> 上传文件
                                    </Button>
                                </Upload>
                            </div>
                        </div>
                        <div className="inputRow fileInfo">
                            <span></span>
                            <div style={{width:"75%"}}>
                                支持扩展名：.jpg，.bmp，.jpeg，.png
                            </div>
                        </div>
                        <div className="inputHeight bannerState">
                            <p className="inputTitle">状态：</p>
                            <div>
                                <RadioGroup name="radiogroup" defaultValue={"启用"} onChange={(e)=>{this.handleState(e)}}>
                                    <Radio value={"启用"}>启用</Radio>
                                    <Radio value={"停用"}>停用</Radio>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

{/*<TableBox data={this.state.data} isSearch={isSearch} onSearch={(e)=>{this.handleSearch(e)}}/>*/}


export default Channel