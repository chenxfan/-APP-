import { Select } from 'antd';
import React,{Component} from 'react';//引入react组件
const Option = Select.Option;
function handleBlur() {
    console.log('blur');
}

function handleFocus() {
    console.log('focus');
}

class Selsecting extends React.Component {
       constructor(){
           super()

       }
       render(){
           return(
               <Select
                   showSearch
                   style={{ width: 200 }}
                   placeholder="请选择角色"
                   optionFilterProp="children"
                   onChange={this.props.onRoleChange}
                   onFocus={handleFocus}
                   onBlur={handleBlur}
                   filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
               >
                   <Option value="公司职员">公司职员</Option>
                   <Option value="运营人员">运营人员</Option>
                   <Option value="营销人员">营销人员</Option>
                   <Option value="管理员A">管理员A</Option>
                   <Option value="管理员B">管理员B</Option>
                   <Option value="BOSS">BOSS</Option>
               </Select>
           )
       }
}
export default Selsecting;
