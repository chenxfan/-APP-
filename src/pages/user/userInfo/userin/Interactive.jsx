import React, { Component } from 'react';
import { Radio ,DatePicker,Button ,Table, Divider, Tag } from 'antd';
import './Interactive.css';
import {datas} from './Interactives' ;


class Interactive extends Component {

  columnss = [{
    title: '服务类型',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '服务医生',
    dataIndex: 'age',
    key: 'age',
  },{
    title: '检查结果',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = 'geekblue' ;
          return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
        })}
      </span>
    ),
  } ,
  {
    title: '就诊时间',
    dataIndex: 'address',
    key: 'address',
  }
   , {
    title: '耗时',
    key: 'action',
    render: (record) => (
      <span>
         {record.time}
      </span>
      
    ),
  }];

  
  render() {
    return (
      <div className="InteractiveHeader">
        <h3 className="InteractiveNav">条件筛选</h3>
        <div className="InteractiveTop">
          <Radio.Group  defaultValue="a" buttonStyle="solid" >
            <div className="InteractiveTopone">
                <span>祖父:</span>
                <Radio.Button  value="a" className="InteractiveToponeRadio">张三</Radio.Button>
                <span>祖母:</span>
                <Radio.Button value="b" className="InteractiveToponeRadio">李四</Radio.Button>
                <span>外祖父:</span>
                <Radio.Button value="c" className="InteractiveToponeRadio">王麻子</Radio.Button>
                <span>外祖母:</span>
                <Radio.Button value="d" className="InteractiveToponeRadio">王麻子</Radio.Button>
            </div>
            <div className="InteractiveTopone">
                <span>爷爷:</span>
                <Radio.Button value="e" className="InteractiveToponeRadio">杰克</Radio.Button>
                <span>奶奶:</span>
                <Radio.Button value="f" className="InteractiveToponeRadio">朱丽叶</Radio.Button>
            </div>
            <div className="InteractiveTopone">
                <span>父亲:</span>
                <Radio.Button value="g" className="InteractiveToponeRadio">小明</Radio.Button>
                <span>母亲:</span>
                <Radio.Button value="h" className="InteractiveToponeRadio">小刘</Radio.Button>
            </div>
          </Radio.Group>
        </div>
        <div className="InteractiveBouttom">
          <span className="InteractiveBouttomk">查询日期:</span>
          <DatePicker style={{marginRight:"30px"}} placeholder="请选择日期"/>
          <Button type="primary">搜索</Button>
        </div>
        <div className="InteractiveContent">
            <div className="InteractiveContentherder">基本信息</div>
            <div className="InteractiveContentherdert">
                <div className="InteractiveLeftt">
                    <div className="InteractiveLefttOne">
                      <p>
                        <span>姓名:&nbsp;</span><span>刘令</span>
                      </p>
                      <p>
                        <span>年龄:&nbsp;</span><span>75</span>
                      </p>
                      <p>
                        <span>名族:&nbsp;</span><span>汉族</span>
                      </p>
                      <p>
                        <span>婚姻状况:&nbsp;</span><span>已婚</span>
                      </p>
                      <p>
                        <span>文化程度:&nbsp;</span><span>高中</span>
                      </p>
                      <p>
                        <span>订购服务包:&nbsp;</span><span>基础包</span>
                      </p>
                    </div>

                    <div className="InteractiveLefttTow">
                    <p>
                        <span>性别:&nbsp;</span><span>男</span>
                      </p>
                      <p>
                        <span>家庭关系:&nbsp;</span><span>祖父</span>
                      </p>
                      <p>
                        <span>血型:&nbsp;</span><span>A型</span>
                      </p>
                      <p>
                        <span>联系电话:&nbsp;</span><span>18326598456</span>
                      </p>
                      <p>
                        <span>职业:&nbsp;</span><span>退休职工</span>
                      </p>
                    </div>
                </div>

                <div className="InteractiveRightt"> I M G</div>


                <div className="InteractiveButtow">
                    <p>
                      <span>既往史:</span><span>既往慢性胃病10余年，否认高血压，否认糖尿病，肾病病史。无外伤，手术史，无输血史。</span>
                    </p>
                    <p>
                      <span>个人史:</span><span>生于河北，久居河北，否认疫区，疫水接触史，否认毒物，放射性物质接触，否认烟酒嗜好</span>
                    </p>
                    <p>
                      <span>家族史:</span><span>否认家族遗传病史及类似疾病史</span>
                    </p> 
                </div>
            </div>
        </div>
        <div className="InteractiveFoter">
          <div className="InteractiveFoterHeader">测量纪录</div>
            <div className="InteractiveFoterButton">
              <Button>血压纪录</Button>
              <Button>血糖纪录</Button>
            </div>
            <Table columns={this.columnss} dataSource={datas} />
        </div>
        <div className="InteractiveFoter">
          <div className="InteractiveFoterHeader">家庭成员近半年家签使用记录</div>
            <Table columns={this.columnss} dataSource={datas} />
        </div>
      </div>
      
    )
  }
}
// class InteractiveContent extends Component{
//     render(){
//       return(
//           <div>
//             2132
//           </div>
//       )
//     }
// }

export default Interactive;