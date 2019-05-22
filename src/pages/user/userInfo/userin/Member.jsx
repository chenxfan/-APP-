import React, { Component } from 'react'
import { Button, Radio, Input, List, Avatar, Skeleton, Pagination } from 'antd';
import reqwest from 'reqwest';
import './Member.css';
import { BrowserRouter as NavLink } from "react-router-dom";
const Search = Input.Search;


const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class LoadMoreList extends React.Component {

    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],

    }

    componentDidMount() {

        this.getData((res) => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = (callback) => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    }

    onLoadMore = () => {

        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData((res) => {
            const data = this.state.data.concat(res.results);
            this.setState({
                data,
                list: data,
                loading: false,
            }, () => {
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
        });
    }

    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore = !initLoading && !loading ? (
            <div style={{
                textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
            }}
            >
                <Button onClick={this.onLoadMore}>更多</Button>
            </div>
        ) : null;
        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <List.Item actions={[<NavLink to="">编辑</NavLink>, <NavLink to="">更多</NavLink>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                style={{ width: "1000px" }}
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description="生命就像一盒巧克力，结果往往出人意料"
                            />
                            <List.Item.Meta
                                description="正常"
                                style={{ marginLeft: "90px" }}
                            />
                            <List.Item.Meta
                                description={[
                                    <p>
                                        <span>评论时间</span>
                                        <br />
                                        <span>2016-06-16 14.03</span>
                                    </p>
                                ]} />
                            <List.Item.Meta
                                description={[
                                    <p>
                                        <span>发布终端</span>
                                        <br />
                                        <span>Ios</span>
                                    </p>
                                ]}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
                                
        )
    }
}

class Menber extends Component {
    render() {
        return (
            <div className="MenberBoox">
                <div className="MenberHeader">互动详情</div>
                <div className="MenberTop">
                    <div className="MenberLeft">
                        <p>
                            <span>参与后互动视频</span> : &nbsp;
                            <span>23</span>
                        </p>
                        <p>
                            <span>重点参与文章话题标签</span> : &nbsp;
                            <span>高血压</span>
                        </p>
                    </div>
                    <div className="MenberCenter">
                        <p>
                            <span>参与互动文章</span> : &nbsp;
                            <span>12</span>
                        </p>
                        <p>
                            <span>重点参与视频话题标题</span> : &nbsp;
                            <span>0-6岁儿童</span>
                        </p>
                    </div>
                    <div className="MenberRight">
                        <p>
                            <span>发表评论合计</span> : &nbsp;
                            <span>322</span>
                        </p>
                        <p>
                            <span>以关注的官方频道</span> : &nbsp;
                            <span>医博士慢性病频道</span>
                        </p>
                    </div>
                </div>
                <div className="MenberHeaderbottom">用户参与评论信息</div>
                <div className="MenverFoter">
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">全部成员</Radio.Button>
                        <Radio.Button value="b">仅个人</Radio.Button>
                    </Radio.Group>
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">全部</Radio.Button>
                        <Radio.Button value="b">文章</Radio.Button>
                        <Radio.Button value="c">视频</Radio.Button>
                    </Radio.Group>
                    <Search
                        placeholder="请输入"
                        onSearch={value => console.log(value)}
                        style={{ width: 300 }}
                    />
                </div>
                <LoadMoreList />
                <Pagination 
                    defaultCurrent={1} total={50} 
                    style={{float:"right",
                            marginRight:"20px"    
                }}
                    />
            </div>
    
            )
        }
    }
    
export default Menber