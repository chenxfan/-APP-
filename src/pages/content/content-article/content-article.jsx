/**
 *  @文章内容管理
 */
import React , {Component} from "react";
import {Button, Row, Col ,Input,Tabs,DatePicker,InputNumber ,Pagination } from 'antd';
import MyCard from "../component/card.jsx"
import NomalComfirm from "../component/NomalComfirm.jsx"
import Fcomfirm from "../component/Fcomfirm.jsx"


import "./content-article.css";
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY','DD/MM/YY']

const operations = <div>收起^</div>;
const TabPane = Tabs.TabPane;
const Search = Input.Search;



class ContentArticle extends Component{
	constructor (){
		  super();
		  this.state = {   
		    current: 3, //分页
		  }
	}
	pindao=(e)=>{
		console.log(e.target)
	}

	  onChange = (page) => {
	    console.log(page);
	    this.setState({
	      current: page,
	    });
	  }

	filter=()=>{
		console.log(this.key)
	}
	render (){
		return (
		<div className="colStyle">

			<Row >
				<Col>首页 /  内容管理  /   文章内容管理 </Col>
			</Row>
			<Row style={{marginTop:30}}>
				<Col span={6} >文章搜索</Col>
				<Col span={17} >
					<Search
					  className="search"
					  placeholder="请输入视频或文章名称"
					  enterButton="搜索"
					  
					/>
					<NomalComfirm />
					<Fcomfirm />
				</Col>
			</Row>

			<Row style={{marginTop:30}}>
			<Col span={2} style={{marginTop:20}}>所属频道:</Col>
			<Col span={20}>
			  <Tabs defaultActiveKey="1" onChange={this.pindao} tabBarExtraContent={operations}>
				<TabPane tab="全部" key="1"></TabPane>
				<TabPane tab="中医养生" key="2"></TabPane>
				<TabPane tab="育儿保健" key="3"></TabPane>
				<TabPane tab="糖尿病" key="4"></TabPane>
				<TabPane tab="儿童" key="5"></TabPane>
				<TabPane tab="老年人" key="6"> </TabPane>
			  </Tabs>
			  </Col>
			</Row>
			
		   <Row style={{marginTop:20}}>
			<Col span={2} style={{marginTop:20}}>过滤条件:</Col>
			<Col span={20}>
			  <Tabs defaultActiveKey="1" onChange={this.filter} >
				<TabPane tab="按上传时间" key="1"></TabPane>
				<TabPane tab="按字母顺序" key="2"></TabPane>
			  </Tabs>
			  </Col>
			</Row>
			
			
		   <Row>
			<Col span={2} style={{marginTop:25}}>高级搜索:</Col>
			<Col span={20} style={{marginTop:20}}>
			    <div>
					<RangePicker
					  defaultValue={[moment('2019/01/01', dateFormat), moment('2019/01/01', dateFormat)]}
					  format={dateFormat}
					/>
					<div style={{display:"inline",marginLeft:15}}>
						<span>播放次数:&nbsp; &nbsp;</span>
						<InputNumber min={1}  /> &nbsp;&nbsp;--&nbsp;&nbsp;
						<InputNumber min={1}  />&nbsp;&nbsp;
						<Button type="primary">搜索</Button>
					</div>
				</div>
				
			 </Col>
			</Row>			

			<Row className="rowStyle">
				<Col className="rowStyle" span={5}>
					<MyCard/>
				</Col>
				<Col className="rowStyle" span={5}>
					<MyCard/>
				</Col>
				<Col className="rowStyle" span={5}>
					<MyCard/>
				</Col>
				<Col className="rowStyle" span={5}>
					<MyCard/>
				</Col>
				<Col className="rowStyle" span={5}>
					<MyCard/>
				</Col>
				<Col  className="rowStyle"span={5}>
					<MyCard/>
				</Col>
			</Row>

			<Row>
				<Pagination current={this.state.current} onChange={this.onChange} total={50}  className="pages"/>
			</Row>
		</div>
		)
	}
}

export default ContentArticle;