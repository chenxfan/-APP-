import { Tag } from 'antd';
import React , {Component} from "react";
import "../content-article/content-article.css";
const { CheckableTag } = Tag;

class MyTag extends Component {
  state = { checked: false };

  handleChange = (checked) => {
    this.setState({ checked });
  }

  render() {
    return (
		<CheckableTag {...this.props}  checked={this.state.checked} onChange={this.handleChange} className="box" />
	);
  }
}
export  default MyTag;