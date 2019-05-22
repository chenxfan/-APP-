

import { Divider} from 'antd';
import React,{Component} from 'react';
let data = [{
    num: '1',
    addTime: '2016-05-15 15:20:00',
    name: '赵国辉',
    role:'公司职员',
    managerChannel:'详情',
    stateing:'启用'

},{
    num: '2',
    addTime: '2016-05-15 15:20:00',
    name: '赵国辉',
    role:'公司职员',
    managerChannel:'详情',
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
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '角色',
    key: 'role',
    dataIndex: 'role'
}, {
    title: '管理频道',
    key: 'managerChannel',
    dataIndex: 'managerChannel'
}, {
    title: '状态',
    key: 'stateing',
    dataIndex: 'stateing'
}];


let obj={
    data,columns
}
export default obj;


