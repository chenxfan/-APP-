import { Table, Divider, Tag ,Popconfirm} from 'antd';
import React ,{Component} from "react";
import Delete from "./Delete.jsx";
import Update from "./Update.jsx"
const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  time:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  status: true,
},
{
  key: '2',
  time:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  status: true,
},
{
  key: '3',
  time:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  status: false,
},
{
  key: '4',
  time:"2016-05-15 15:20:00",
  channelName: '心理健康',
  status: true,
},
{
  key: '5',
  time:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  status: false,
},
{
  key: '6',
  time:"2016-05-15 15:20:00",
  channelName: '心理健康',
  status: true,
},
{
  key: '7',
  time:"2016-05-15 15:20:00",
  channelName: '中医养生',
  status: false,
},
{
  key: '8',
  time:"2016-05-15 15:20:00",
  channelName: '中医养生',
  status: false,
},
{
  key: '9',
  time:"2016-05-15 15:20:00",
  channelName: '中医养生',
  status: false,
},{
  key: '10',
  time:"2016-05-15 15:20:00",
  channelName: '中医养生',
  status: false,
},{
  key: '11',
  time:"2016-05-15 15:20:00",
  channelName: '中医养生',
  status: false,
}];

class ListChannel extends Component{
  constructor (){
    super();
    this.state={
      data:data
    };
  }

  delete = (index)=>{
    console.log(index)
  }
  render(){
    return(
           <Table style={{width:"80%",marginTop:35}} dataSource={data}>
              
                <Column
                  title="序号"
                  dataIndex="key"
                  key="key"
                />
                <Column
                  title="添加时间"
                  dataIndex="time"
                  key="time"
                />
              <Column
                title="频道标签名称"
                dataIndex="channelName"
                key="channelName"
              />
            <Column
                title="状态"
                key="status"
                render={(text, record,index) => (
                  <span>
                   {record.status?(<a  onClick={console.log(1)}>显示</a>):(<a>隐藏</a>)}
                  </span>
                )}
              />

              <Column
                title="操作"
                render={(text, record,index) => (
                  <span>
                    <Update statu="update"/>
                    <Divider type="vertical" />
                    <Delete />
                  </span>
                )}
              />
            </Table>
      )
  }
}

export default ListChannel;
 

                    
