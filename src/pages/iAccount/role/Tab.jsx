

import { Divider} from 'antd';
import React,{Component} from 'react';
let data = [{
    num: '1',
    addTime: '2016-05-15 15:20:00',
    name: '管理',
    role:'管理员A',
    managerChannel:'医博士总部',
    stateing:'启用'

},{
    num: '2',
    addTime: '2016-05-15 15:20:00',
    name: '管理',
    role:'公司职员',
    managerChannel:'医博士一分公司',
    stateing:'启用'

}];
let columns = [{
    title: '序号',
    dataIndex: 'num',
    key: 'num'
}, {
    title: '添加时间',
    dataIndex: 'addTime',
    key: 'addTime',
}, {
    title: '角色名称',
    key: 'role',
    dataIndex: 'role'
}, {
    title: '隶属机构',
    key: 'managerChannel',
    dataIndex: 'managerChannel'
}, {
    title: '权限',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '状态',
    key: 'stateing',
    dataIndex: 'stateing'
}];


let obj={
    data,columns
}
export default obj;


