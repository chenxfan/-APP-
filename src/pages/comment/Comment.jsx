/**
 *   @品论管理
 */
import React, { Component, Suspense, lazy } from 'react';
import { Breadcrumb,DatePicker,Input,Button,Table, Divider, Tag,Pagination, Row, Col,Tabs,InputNumber } from 'antd';
import { BrowserRouter as Router,Route ,Link, NavLink,Redirect,Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Comment.css';
import CommentTable from "./CommentTable";
import "./CommentTable.css";


const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const operations = <div>收起^</div>;
const TabPane = Tabs.TabPane;
class Comment extends Component {
    state={
        isVideo:true,
        isArticle:false,
    }
    handleClick(e,el){
        // e.target.toggle="changeNav"
        if(el == 1){
            e.target.className="changeNav";
            e.target.nextElementSibling.className="nowNav";
            this.setState({
                isVideo:true,
                isArticle:false,
            })
        }
        if(el == 2){
            e.target.className="changeNav";
            e.target.previousElementSibling.className="nowNav";
            this.setState({
                isVideo:false,
                isArticle:true,
            })
        }
    }
    render() {
        //搜索框
        const Search = Input.Search;
        return (
            <React.Fragment>
            <Router>
            <Suspense>
            <div className="changeWidth">
                {/*面包屑*/}
                <div>
                    <Breadcrumb className="map">
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">评论管理</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                {/*评论管理搜索*/}
                <div className="Comment_Search">
                    <Search
                        placeholder="请输入视频或文章名称"
                        enterButton="搜索"
                        size="large"
                        onSearch={value => console.log(value)}
                        className="search"
                    />
                </div>
                {/*导航栏与主体内容*/}
                <div className="nav">
                    <nav onClick={(e)=>{this.handleClick(e,1)}}>视频</nav>
                    <nav onClick={(e)=>{this.handleClick(e,2)}}>文章</nav>
                </div>
            </div>
            {/*内容*/}
            <div className="comment_content">
                <div className="contentShow">
                    {this.state.isVideo?<Video/>:<Article/>}
                </div>
            </div>
            </Suspense>
            </Router>
            </React.Fragment>
        );
    }
}


{/*视频评论*/}
class Video extends Component{
    constructor(){
        super();
    }
    state={
        data:CommentData,
        isSearch: false,
    }
    pindao=(e)=>{

    }

    filter=(e)=>{

    }
    //更改isSearch
    onhandleSearch(isBool){
        this.setState({
            isSearch:isBool,
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="listTitle">
                    <div className="listItem listSolid">
                        <Col span={2} style={{display:"flex",alignItems:"center"}}>所属频道:</Col>
                        <Col span={20}>
                            <Tabs defaultActiveKey="1" onChange={this.pindao} tabBarExtraContent={operations}>
                                <TabPane tab="全部" key="1"></TabPane>
                                <TabPane tab="中医养生" key="2"></TabPane>
                                <TabPane tab="育儿保健" key="3"></TabPane>
                                <TabPane tab="糖尿病" key="4"></TabPane>
                                <TabPane tab="孕产妇" key="5"></TabPane>
                                <TabPane tab="老年人" key="6"> </TabPane>
                            </Tabs>
                        </Col>
                    </div>
                    <div className="listItem">
                        <Col span={2} style={{marginTop:20}}>过滤条件:</Col>
                        <Col span={20}>
                            <Tabs defaultActiveKey="1" onChange={this.filter} >
                                <TabPane tab="按上传时间" key="1" ></TabPane>
                                <TabPane tab="按字母顺序" key="2"></TabPane>
                            </Tabs>
                        </Col>
                    </div>
                    <div className="listItem">
                        <Col span={2} style={{marginTop:25}}>高级搜索:</Col>
                        <Col span={20} style={{marginTop:20}}>
                            <div>
                                <span>上传日期：</span><RangePicker/>
                                <div style={{display:"inline",marginLeft:15}}>
                                    <span>播放次数:&nbsp; &nbsp;</span>
                                    <InputNumber min={1}  /> &nbsp;&nbsp;~&nbsp;&nbsp;
                                    <InputNumber min={1}  />&nbsp;&nbsp;
                                    <Button type="primary">搜索</Button>
                                </div>
                            </div>

                        </Col>
                    </div>
                </div>
                <div>
                    <CommentTable data={this.state.data} onSearch={(e)=>{this.handleSearch(e)}}/>
                </div>
            </React.Fragment>
        )
    }
}
{/*文章评论*/}
class Article extends Component{
    constructor(){
        super();
    }
    state={
        data:CommentData,
        isSearch: false,
    }
    pindao=(e)=>{

    }

    filter=(e)=>{

    }
    //更改isSearch
    onhandleSearch(isBool){
        this.setState({
            isSearch:isBool,
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="listTitle">
                    <div className="listItem listSolid">
                        <Col span={2} style={{display:"flex",alignItems:"center"}}>所属类目：</Col>
                        <Col span={20}>
                            <Tabs defaultActiveKey="1" onChange={this.pindao} tabBarExtraContent={operations}>
                                <TabPane tab="全部" key="1"></TabPane>
                                <TabPane tab="0-6岁儿童" key="2"></TabPane>
                                <TabPane tab="高血压" key="3"></TabPane>
                                <TabPane tab="糖尿病" key="4"></TabPane>
                                <TabPane tab="孕产妇" key="5"></TabPane>
                                <TabPane tab="老年人" key="6"> </TabPane>
                            </Tabs>
                        </Col>
                    </div>
                    <div className="listItem">
                        <Col span={2} style={{marginTop:20}}>过滤条件:</Col>
                        <Col span={20}>
                            <Tabs defaultActiveKey="1" onChange={this.filter} >
                                <TabPane tab="按上传时间" key="1" ></TabPane>
                                <TabPane tab="按阅读次数" key="2"></TabPane>
                            </Tabs>
                        </Col>
                    </div>
                    <div className="listItem">
                        <Col span={2} style={{marginTop:25}}>高级搜索:</Col>
                        <Col span={20} style={{marginTop:20}}>
                            <div>
                                <span>上传日期：</span><RangePicker/>
                                <div style={{display:"inline",marginLeft:15}}>
                                    <span>播放次数:&nbsp; &nbsp;</span>
                                    <InputNumber min={1}  /> &nbsp;&nbsp;~&nbsp;&nbsp;
                                    <InputNumber min={1}  />&nbsp;&nbsp;
                                    <Button type="primary">搜索</Button>
                                </div>
                            </div>

                        </Col>
                    </div>
                </div>
                <div>
                    <CommentTable data={this.state.data} onSearch={(e)=>{this.handleSearch(e)}}/>
                </div>
            </React.Fragment>
        )
    }
}


//数据
const CommentData= [{
    name:"关于高血压的防治",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"职业病防治",
    channel:"医博士官方",
    type:"职业病",
    num:"2299",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"0-6岁儿童如何防治感冒",
    channel:"医博士官方",
    type:"儿童专题",
    num:"2128",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"老年疾病康复与治疗",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},{
    name:"糖尿病防治与诊断",
    channel:"医博士官方",
    type:"慢性病",
    num:"2001",
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
}]

export default Comment
