import { Modal, Button } from 'antd';
import React from "react";
class Delete extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
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
        <a type="primary" onClick={this.showModal}>
          删除
        </a>
        <Modal
          title="删除提示"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="保存"
          cancelText="取消"
        >
          <p>是否删除当前分类标签信息 ？</p>
        </Modal>
      </div>
    );
  }
}

export default Delete;