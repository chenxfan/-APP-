import { Table, Divider, Tag ,Popconfirm} from 'antd';
import React ,{Component} from "react";

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  time:"2016-05-15 15:20:00",
  time1:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  pindao:"医博士官方母婴频道",
  tap:"高血压",
  content:"文章",
  status: "待审核",
  action:"1"
},
{
  key: '2',
  time:"2016-05-15 15:20:00",
  time1:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  pindao:"医博士官方母婴频道",
  tap:"高血压",
  content:"文章",
  status: "待审核",
  action:"1"
},
{
  key: '3',
  time:"2016-05-15 15:20:00",
  time1:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  pindao:"医博士官方母婴频道",
  tap:"高血压",
  content:"文章",
  status: "待审核",
  action:"1"
},
{
  key: '4',
  time:"2016-05-15 15:20:00",
  time1:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  pindao:"医博士官方母婴频道",
  tap:"0-6岁儿童 ",
  content:"视频",
  status: "已审核",
  action:"3"
},
{
  key: '5',
  time:"2016-05-15 15:20:00",
  time1:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  pindao:"医博士官方母婴频道",
  tap:"高血压",
  content:"文章",
  status: "待审核",
  action:"2"
},
{
  key: '6',
  time:"2016-05-15 15:20:00",
  time1:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  pindao:"医博士官方母婴频道",
  tap:"0-6岁儿童 ",
  content:"视频",
  status: "已发布",
  action:"1"
},
{
  key: '7',
  time:"2016-05-15 15:20:00",
  time1:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  pindao:"医博士官方母婴频道",
  tap:"老年人",
  content:"视频",
  status: "待审核",
  action:"1"
},
{
  key: '8',
  time:"2016-05-15 15:20:00",
  time1:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  pindao:"医博士官方母婴频道",
  tap:"高血压",
  content:"文章",
  status: "已发布",
  action:"1"
},
{
  key: '9',
  time:"2016-05-15 15:20:00",
  time1:"2016-05-15 15:20:00",
  channelName: '母婴育儿',
  pindao:"医博士官方母婴频道",
  tap:"孕产妇",
  content:"文章",
  status: "待审核",
  action:"1"
},];

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
                title="发布时间"
                dataIndex="time1"
                key="time1"
              />
              <Column
                title="隶属频道"
                dataIndex="pindao"
                key="pindao"
              />
             <Column
                title="分类标签"
                dataIndex="tap"
                key="tap"
              />
            <Column 
                title="附件内容"
                dataIndex="content"
                key="content"
              />
            <Column
                title="状态"
                dataIndex="status"
                key="status"
              />


              <Column
                title="操作"
                render={(text, record,index) => (
                  <span>
                    <a>审核</a>
                  </span>
                )}
              />
            </Table>
      )
  }
}

export default ListChannel;
 

                    
