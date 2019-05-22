/**
 *   @ 视频评论详情管理页
 */
import React, { Component, Suspense, lazy } from 'react';
import { Breadcrumb,DatePicker,Input,Button,Table, Divider, Tag,Pagination, Row, Col,Tabs,InputNumber,Radio } from 'antd';
import { BrowserRouter as Router,Route ,Link, NavLink,Redirect,Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../comment-video/comment-video.css';
import '../Comment.css';
import CommentList from "../CommentList";
import CommentTable from "../CommentTable";


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Search = Input.Search;

class CommentArticle extends Component{
    constructor(){
        super();
    }
    state={
        data:videoData,
        isSearch: false,
    }
    //更改isSearch
    onhandleSearch(isBool){
        this.setState({
            isSearch:isBool,
        })
    }
    render() {
        return (
            <div style={{backgroundColor:"rgb(240,242,245)"}}>
                {/*面包屑*/}
                <div>
                    <Breadcrumb className="map" style={{backgroundColor:"rgb(255,255,255)"}}>
                        <Breadcrumb.Item style={{marginLeft:"20px"}}>首页</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">评论管理</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">文章评论详情</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="changeWidth">
                    <div className="showContent">
                        <div className="bigTitle">
                            <div className="minTitle line">
                                <div>当日合计评论数</div>
                                <div>8</div>
                            </div>
                            <div className="minTitle line">
                                <div>本周合计评论数</div>
                                <div>32</div>
                            </div>
                            <div className="minTitle">
                                <div>本月合计评论数</div>
                                <div>843</div>
                            </div>
                        </div>
                        <div className="comList">
                            <div className="comList_title">
                                <div>评论列表</div>
                                <div className="comList_search">
                                    <div>
                                        <RadioGroup defaultValue="a">
                                            <RadioButton value="a">全部</RadioButton>
                                            <RadioButton value="b">IOS</RadioButton>
                                            <RadioButton value="d">Android</RadioButton>
                                        </RadioGroup>
                                    </div>
                                    <div>
                                        <Search
                                            placeholder="请输入查询条件"
                                            onSearch={value => console.log(value)}
                                            style={{ width: 200 }}
                                        />
                                    </div>
                                    <div><Button>查询</Button></div>
                                    <div><Button>新增</Button></div>
                                </div>
                            </div>
                            <CommentList data={this.state.data} onSearch={(e)=>{this.handleSearch(e)}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const videoData=[{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
},{
    name:"张三",
    detail:"这是一个悲伤的故事，在很久很久以前....",
    time:"2019-04-22",
    phone:"IOS",
    brower:"Google Chrome 7.0",
    img:"1.png"
}]

export default CommentArticle