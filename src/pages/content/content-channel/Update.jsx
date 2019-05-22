import { Modal, Button,Form, Input, Radio} from 'antd';
import React from "react";
class Update extends React.Component {
  state = { 
  checkValue:1,
  visible: false ,
  update:this.props.statu
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div  style={{display:"inline"}}>
        {this.state.update =="add" ? (
          <Button type="default" style={{marginLeft:15}} onClick={this.showModal}>新增频道标签</Button>
          ):(
      
        <a type="primary" onClick={this.showModal}>
          编辑
        </a>
        ) }
          
      
        <Modal
          title={this.state.update=="add"?"新增频道标签分类":"编辑频道标签分类"}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="保存"
          cancelText="取消"
        >
        <Form>
          <Form.Item   
            labelCol={ {span: 6 }}
            wrapperCol={ {span: 14} }
            layout="horizontal"
            label="频道标签名称:">
            <Input placeholder="请输入频道标签名称" />
          </Form.Item>
          <Form.Item 
            labelCol={ {span: 6 }}
            wrapperCol={ {span: 14} }
            label="状态">
            <Radio.Group onChange={this.onChange} value={this.state.checkValue}>
              <Radio value={1}>显示</Radio>
              <Radio value={2}>隐藏</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
        </Modal>
      </div>
    );
  }
}

export default Update;