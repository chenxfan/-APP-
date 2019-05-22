
const columns = [{
    title: '序号',
    dataIndex: 'num',
    key: 'num'
}, {
    title: '注册时间',
    dataIndex: 'addTime',
    key: 'addTime',
}, {
    title: '昵称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '地区',
    key: 'role',
    dataIndex: 'role'
}, {
    title: '身份证号码',
    key: 'managerChannel',
    dataIndex: 'managerChannel'
}, {
    title: '是否家签用户',
    key: 'state',
    dataIndex: 'state'
}, {
    title: '操作',
    key: 'operation',
    dataIndex: 'operation',

}];

const data = [{
    key: '1',
    num: '1',
    addTime: '2016-05-15 15:20:00',
    name: '赵国辉',
    role:'公司职员',
    managerChannel:'详情',
    state:'启用',

},{
    key: '2',
    num: '2',
    addTime: '2016-05-15 15:20:00',
    name: '赵国辉',
    role:'公司职员',
    managerChannel:'详情',
    state:'启用'

}];



module.exports={
    data ,
    columns
}