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
    Icon
} from 'antd';
import 'antd/dist/antd.css';
import './Table.css';

function getPageData(data, page, limit) {
    let offset = (page - 1) * limit;
    return [...data].splice(offset, limit)
}

class SearchBox extends Component {
    constructor() {
        super();
    }

    state = {
        limit:10,
        len: 0,
        tableData: null,
        getInfo: null,
        ModalText: 'Content of the modal',
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

    render() {
        const {tableData, getInfo, len,limit} = this.state;
        return (
            <React.Fragment>
                <div>
                    {this.state.tableData.map((item, i) => {
                        return (
                            <div className="infoList" key={i}>
                                <div className="listID">{item.listID}</div>
                                <div className="infoTime">{item.time}</div>
                                <div className="infoName">{item.name}</div>
                                <div className="infoPath"><a>{item.show}</a></div>
                                <div className="infoImg"><a>预览</a></div>
                                <div className="infoState"><a>{item.state}</a></div>
                                <div className="infoAction">
                                    <UpdBanner data={item}/>
                                    <i></i>
                                    <DelInfo nowInfo={item} allData={tableData} onDelInfo={(e) => {this.delInfo(e)}}/>
                                    <i></i>
                                    <a>停用</a>
                                </div>
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
        }, 2000);
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
                <a href="javascript:;" onClick={this.showModal}>编辑</a>
                {/*<Button type="primary" >
                    Open Modal with async logic
                </Button>*/}
                <Modal
                    title="编辑banner广告"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <div className="inputRow inputHeight">
                            <i className="inputTitle">banner名称：</i>
                            <Input placeholder="请输入广告名称" value={this.props.data.name}/>
                        </div>
                        <div className="inputRow inputHeight">
                            <i className="inputTitle">banner链接：</i>
                            <Input placeholder="请输入广告名称" value={this.props.data.path}/>
                        </div>
                        <div className="inputRow inputHeight imgFile">
                            <i className="inputTitle">对应图片：</i>
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
        ModalText: '是否删除当前banner广告信息 ？',
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


export default SearchBox