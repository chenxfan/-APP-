import { Breadcrumb } from 'antd';

import React,{Component} from 'react';
class TitlePath  extends Component{
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>内部账户管理</Breadcrumb.Item>
                <Breadcrumb.Item>人员管理</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}
export default TitlePath
