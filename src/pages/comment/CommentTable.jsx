import React, {Component} from 'react';
import {
    Breadcrumb,
    DatePicker,
    Form,
    Avatar,
    Input,
    Radio,
    Button,
    Table,
    Divider,
    Tag,
    Pagination,
    Modal,
    Upload,
    message,
    Icon,
    Select
} from 'antd';
import 'antd/dist/antd.css';
import './CommentTable.css';

function getPageData(data, page, limit) {
    let offset = (page - 1) * limit;
    return [...data].splice(offset, limit)
}

class CommentTable extends Component {
    constructor() {
        super();
    }

    state = {
        limit:8,
        len: 0,
        tableData: null,
        isState:false,
    }

    //初始化
    componentWillMount() {
        let showData = getPageData(this.props.data, 1, this.state.limit);
        this.setState({
            len: this.props.data.length,
            tableData: showData,
            getInfo: this.getInfo
        });
        //状态提升--修改isSearch
        let isBoll = false;

        // this.props.onSearch(isBoll)
    }
    changePageData = (page, limit) => {
        let showData = getPageData(this.props.data, page, limit);
        this.setState({
            tableData: showData,
        });
    }

    //删除信息
    delInfo(el) {
        this.setState({
            tableData: el
        })
    }

    //修改信息
    updInfo(el){
        this.setState({
            tableData:el
        })
    }

    render() {
        const {tableData, getInfo, len,limit} = this.state;
        return (
            <React.Fragment>
                <div className="docInfo">
                    {this.state.tableData.map((item, i) => {
                        return (
                            <div className="docList">
                               <img src={require("../../images/comment/comment-video/u1532.jpg")} />
                                <div className="docName">{item.name}</div>
                                <div className="docAnth">发布者：{item.channel+"<"+item.type+">"}</div>
                                <div className="docAnth">播放次数：{item.num}</div>
                                <Avatar className="iconUser" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>

                        )
                    })}
                </div>
                <div style={{display:"flex",justifyContent:"flex-end",marginTop:"30px"}}>
                    <Pagination
                        onChange={this.changePageData}
                        onShowSizeChange={this.changePageData}
                        total={len}
                        defaultPageSize = {limit}
                        showSizeChanger
                        showQuickJumper
                        pageSizeOptions={['8', '12', '16']}
                        style={{marginBottom:"100px"}}
                    />
                </div>
            </React.Fragment>
        )
    }
}

//编辑banner广告
class UpdBanner extends React.Component {
    state = {
        inputText: null,
        visible: false,
        confirmLoading: false,
        listID: this.props.data.listID,
        name: this.props.data.name,
        time: this.props.data.time,
        address: this.props.data.address,
        show: this.props.data.show,
        path:this.props.data.path,
        state:this.props.data.state,
        img:this.props.data.img,
        selectValue:"中医养生"
    }
    componentWillMount(){
        this.setState({
            inputText:this.props.data
        })
    }

    showModal = (e) => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
            this.updInfo(this.props.data, this.props.allData)
        }, 2000);
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    //修改数据
    changeName(e){
        this.setState({
            name:e.target.value
        })
    }
    changePath(e){
        this.setState({
            path:e.target.value
        })
    }

    updInfo(el, allData) {
        allData.map((item, i) => {
            if (el.listID == item.listID) {
                // array.splice(index,n,data1,data2,......);
                let info={
                    listID: this.state.listID,
                    name: this.state.name,
                    time: this.state.time,
                    address: this.state.address,
                    show: this.state.show,
                    path:this.state.path,
                    state:this.state.state,
                    img:this.state.img,
                }
                allData.splice(i, 1,info);
                console.log(allData,"修改后书就")
                this.props.onUpdInfo(allData)
            }
        })
    }

    render() {
        const {visible, confirmLoading, ModalText} = this.state;
        //单选框
        const RadioGroup = Radio.Group;
        //选择器
        const Option = Select.Option;
        //文本域
        const { TextArea } = Input;
        return (
            <React.Fragment>
                <a href="javascript:;" onClick={this.showModal}>编辑</a>
                {/*<Button type="primary" >
                    Open Modal with async logic
                </Button>*/}
                <Modal
                    title="编辑子账号信息"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <div className="inputRow inputHeight">
                            <i className="inputTitle">频道名称：</i>
                            <Input value={this.state.name} onChange={(e)=>{this.changeName(e)}}/>
                        </div>
                        <div className="inputRow inputHeight">
                            <span className="inputTitle">隶属频道：</span>
                            {/*<Input placeholder="请输入广告链接" value={this.state.path} onChange={(e)=>{this.handlePath(e)}} />*/}
                            <div style={{width:"75%"}}>
                                <Select defaultValue={this.state.selectValue} style={{ width: 120 }} onChange={(e)=>{this.handleSelect(e)}}>
                                    <Option value="options">--请选择--</Option>
                                    <Option value="中医养生">中医养生</Option>
                                    <Option value="母婴家居">母婴家居</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="inputRow inputHeight" style={{alignItems:"self-start"}}>
                            <span className="inputTitle">子账号简介：</span>
                            <div style={{width:"75%"}}>
                                <TextArea rows={4} value={this.state.path} onChange={(e)=>{this.changePath(e)}} />
                            </div>
                        </div>
                        <div className="inputRow inputHeight imgFile">
                            <i className="inputTitle">子账号头像：</i>
                            <div className="fileBox">
                                {/*图片显示*/}
                                <PicturesWall
                                    imgGo={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}/>
                            </div>
                        </div>
                        <div className="inputHeight bannerState">
                            <p className="inputTitle">状态：</p>
                            <div>
                                <RadioGroup name="radiogroup" defaultValue={1}>
                                    <Radio value={1}>启用</Radio>
                                    <Radio value={2}>停用</Radio>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}


//显示图片
class PicturesWall extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: this.props.imgGo
        }],
    };
    //imgGo = "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";
    handleCancel = () => this.setState({previewVisible: false})

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({fileList}) => this.setState({fileList})

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >

                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </div>
        );
    }
}

//删除广告组件
class DelInfo extends React.Component {
    state = {
        ModalText: '是否删除当前人员信息 ？',
        visible: false,
        confirmLoading: false,
    }

    showModal = (e) => {
        this.setState({
            visible: true,
        });
    }

    delInfo(el, allData) {
        allData.map((item, i) => {
            if (el.listID == item.listID) {
                allData.splice(i, 1);
                this.props.onDelInfo(allData)
            }
        })
    }

    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
            //调用删除
            this.delInfo(this.props.nowInfo, this.props.allData)
        }, 200);
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    render() {
        const {visible, confirmLoading, ModalText} = this.state;
        //单选框
        const RadioGroup = Radio.Group;
        return (
            <React.Fragment>
                <a href="javascript:;" onClick={this.showModal}>删除</a>
                <Modal
                    title="删除提示"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
            </React.Fragment>
        );
    }
}


export default CommentTable