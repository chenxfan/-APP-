import { Card, Icon, Avatar } from 'antd';
import React , {Component} from "react";
const { Meta } = Card;
class MyCard extends Component{
	constructor (){
		super();

	}
  aaa = () => {
    console.log('this is:', this);
  }
	render(){
		const actions = [
			<a href='javascript:;' >编辑</a>, 
			<a href='this.aaa;'>新建</a>
		]
		return (
			 <Card
			  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
			  actions={actions}
				
			>
			  <Meta
			    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
			    title="Card title"
			    description="This is the description"
			  />
			</Card>
		)
	}
}
export default MyCard;
