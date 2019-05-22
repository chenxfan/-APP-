import { Modal, Button, Row, Col,Input,Select,Upload,message, Icon,Radio ,Checkbox } from 'antd';
import React from "react";
import "../content-article/content-article.css";
import MyTag from "./MyTag.jsx"
import EditorDemo from "./RichText.jsx"

const RadioGroup = Radio.Group;
const Option = Select.Option;
const {TextArea} =Input;
class Fcomfirm extends React.Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <div style={{marginLeft:15,display:"inline"}}>
        <Button type="primary"   style={{marginTop:25}} onClick={this.showModal}>
          新增富文本
        </Button>
        <Modal width="1000px"  visible={visible} title="新增富文本内容"
          onCancel={this.handleCancel}  maskClosable="true"  destroyOnClose="true"
          footer={[
            <Button key="back" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              保存
            </Button>,
          ]} 
        >
        <Row className="rowStyle">
			<Col span={4}>
				<span className="span">文章名称&nbsp; :</span>
			</Col>
			<Col span={6}>
				<Input placeholder="请输入文章名称" />
			</Col>
		</Row>
		<Row className="rowStyle">
			<Col span={4}>
				<span className="span">官方频道&nbsp; :</span>
			</Col>
			<Col span={14}>
				<Select  style={{ width: 120 }} >
				  <Option value="中医养生">中医养生</Option>
				  <Option value="母婴家居">母婴家居</Option>
				</Select>
			</Col>
		</Row>  
		
	    <Row className="rowStyle">
			<Col span={4}>
				<span className="span">文章说明&nbsp; :</span>
			</Col>
			<Col span={14}>
				<TextArea rows={4} />
			</Col>
	    </Row>  
		
		<Row className="rowStyle">
			<Col span={4}>
				<span className="span">文章内容编辑&nbsp; :</span>
			</Col>
			<Col span={18}>
				<EditorDemo />
			</Col>
		</Row> 

		<Row className="rowStyle">
			<Col span={4}>
				<span className="span">文章图片附件&nbsp; :</span>
			</Col>
			<Col span={14}>
			  <Upload>
				<Button>
				  <Icon type="upload" /> 点击上传图片
				</Button>
			  </Upload>
			  <div >支持扩展名：.jpg，.jpeg，.png</div>
			</Col>
		</Row> 
		<Row className="rowStyle">
			<Col span={4}>
				<span className="span">展示端口&nbsp; :</span>
			</Col>
			<Col span={14}>
				<Checkbox.Group>
					<Checkbox value="IOS">IOS</Checkbox>
					<Checkbox value="Android">Android</Checkbox>
				</Checkbox.Group>
			</Col>
		</Row> 
		
		<Row className="rowStyle">
			<Col span={4}>
				<span className="span">优先级&nbsp; :</span>
			</Col>
			<Col span={6}>
				<Input placeholder="输入优先级大小"/>
			</Col>
		</Row> 
		
		<Row className="rowStyle">
			<Col span={4}>
				<span className="span">状态&nbsp; :</span>
			</Col>
			<Col span={14}>
			  <RadioGroup >
				<Radio value={1}>显示</Radio>
				<Radio value={2}>隐藏</Radio>
			  </RadioGroup>
			</Col>
		</Row> 
		
		<Row className="rowStyle">
			<Col span={4}>
				<span className="span">文章标签&nbsp; :</span>
			</Col>
			<Col span={14}>
				<MyTag>疾病史</MyTag>
				<MyTag>养生健康</MyTag>
				<MyTag>遗传病</MyTag>
			</Col>
		</Row>  
        </Modal>
      </div>
    );
  }
}

export default Fcomfirm;