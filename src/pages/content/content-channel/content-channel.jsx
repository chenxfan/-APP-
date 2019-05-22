/**
 *   @频道管理
 */

import React , {Component} from "react";
import {Button, Row, Col ,Input,Tabs,DatePicker,InputNumber ,Pagination } from 'antd';
import ListChannel from "./ListChannel.jsx";
import Update from "./Update.jsx"
const { MonthPicker, RangePicker } = DatePicker;
class ContentChannel extends Component{
	constructor (){
		  super();
	}
	pindao=(e)=>{
		console.log(e.target)
	}

	  onChangePages = (page) => {
	    console.log(page);
	    this.setState({
	      current: page,
	    });
	  }
	 ChangeDate=(date, dateString)=>{
	 	console.log(date, dateString);
	 }

	filter=()=>{
		console.log(this.key)
	}

	render (){
		return (
		<div className="colStyle">

			<Row >
				<Col>首页 /  内容管理  /   频道管理 </Col>
			</Row>

		   <Row>
			<Col span={2} style={{marginTop:25,fontWeight:600}}>添加时间:</Col>
			<Col span={20} style={{marginTop:20}}>
			    <div>
					<RangePicker onChange={this.ChangeDate} placeholder={["请选择开始时间","请选择结束时间"]}/>
					<div style={{display:"inline",marginLeft:15}}>
						<span style={{marginLeft:20}}>查询:&nbsp; &nbsp;</span>
						<Input style={{width:200}} placeholder="请输入查询条件"/> 
					
						<Button type="default" style={{marginLeft:35}}>查询</Button>
						<Update statu="add"/>
					</div>
				</div>
				
			 </Col>
			</Row>
			<Row>			
			<ListChannel />
			</Row>

		</div>
		)
	}
}

export default ContentChannel;