// /**
//  *  @用户列表
//  */
import React,{ Component } from 'react';
import { Table,DatePicker,Input ,Button} from 'antd';
import {data,columns} from './columnss' ;
import "./userList.css"
class DateRange extends Component {
    state = {
      startValue: null,
      endValue: null,
      endOpen: false,
    };
    disabledStartDate = (startValue) => {
      const endValue = this.state.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    }
  
    disabledEndDate = (endValue) => {
      const startValue = this.state.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return endValue.valueOf() <= startValue.valueOf();
    }
  
    onChange = (field, value) => {
      this.setState({
        [field]: value,
      });
    }
  
    onStartChange = (value) => {
      this.onChange('startValue', value);
    }
  
    onEndChange = (value) => {
      this.onChange('endValue', value);
    }
  
    handleStartOpenChange = (open) => {
      if (!open) {
        this.setState({ endOpen: true });
      }
    }
  
    handleEndOpenChange = (open) => {
      this.setState({ endOpen: open });
    }
  
    render() {
      const { startValue, endValue, endOpen } = this.state;
      return (
        <div className="boox">
            <div className="first">
                <span>首页 &nbsp;</span> / <span>&nbsp;用户管理&nbsp;</span>  /  <span>&nbsp;用户列表</span>
            </div>注册时间&nbsp;&nbsp;:&nbsp;&nbsp;
          <DatePicker 
            className="oo"
            style={{marginLeft:" 20px",marginRight: "10px"}}
            disabledDate={this.disabledStartDate}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={startValue}
            placeholder="请选择开始时间"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
          />
            ~
          <DatePicker 
            className="kk"
            style={{marginLeft:" 10px",marginRight: "20px"}}
            disabledDate={this.disabledEndDate}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={endValue}
            placeholder="请选择结束时间"
            onChange={this.onEndChange}
            open={endOpen}
            onOpenChange={this.handleEndOpenChange}
          />
          查询&nbsp;&nbsp;:
          <Input 
            className="jj"
            defaultValue="fafds"
            style={{width:"200px", marginLeft:" 20px" ,marginRight:" 20px"}}
          />
          <Button type="dashed"  >查询</Button>
        </div>
      );
    }
  }
  class Column extends Component{
    render(){
        return(

            <Table 
            columns={columns} dataSource={data} 
            pagination={{
                showSizeChanger:true, //是否允许快速跳转至某页
                showQuickJumper:true, //是否允许改变 pageSize
                pageSize:10,          //每页显示数据数量
                pageSizeOptions: ['10', '15', '20', '25 '], // 可选的每页显示数据数量
            }}
            />
        )

    }
}

class Userlist extends Component{

    render(){
        return(
            <div>
            <DateRange />
            <Column />
            </div>
        )
    }
}

export default Userlist



