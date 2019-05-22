import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router,Route ,Link, NavLink,Redirect,Switch } from 'react-router-dom';
import routes,{ RouteWithSubRoutes } from "./router/router.js";
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import ContentArticle from "./pages/content/content-article/content-article.jsx"

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  render() {
    return (
      <div className="App">
          <SiderDemo />s
      </div>
    );
  }
}


class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                  <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
        className="aside" width="17%"
                  >
                  <div className="aside_title">医站到家APP系统</div>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <SubMenu
                        key="sub1"
                        title={<span><img src={require('./images/index/u36.png')} className="item_img" /><span>广告位及标题内容管理</span></span>}
                    >
                    <Menu.Item key="3">banner管理</Menu.Item>
                    <Menu.Item key="4">消息管理</Menu.Item>
                    <Menu.Item key="5">开屏广告页管理</Menu.Item>
                    </SubMenu>
                    <SubMenu
                            key="sub2"
                            title={<span><img src={require('./images/index/u40.png')} className="item_img" /><span>评论管理</span></span>}
                        >
                        <Menu.Item key="6">视频品论管理</Menu.Item>
                        <Menu.Item key="7">文章品论管理</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={<span><img src={require('./images/index/u45.png')} className="item_img" /><span>内容管理</span></span>}
                    >
                    <Menu.Item key="8">视频内容管理</Menu.Item>
                    <Menu.Item key="9">文章内容管理</Menu.Item>
                    <Menu.Item key="10">内容待审核列表</Menu.Item>
                    <Menu.Item key="11">频道标签管理</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={<span><img src={require('./images/index/u49.png')} className="item_img" /><span>商城管理</span></span>}
                    >
                    <Menu.Item key="12">商品管理</Menu.Item>
                    <Menu.Item key="13">商品地址管理</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub5"
                        title={<span><img src={require('./images/index/u49.png')} className="item_img" /><span>数据分析管理</span></span>}
                    >
                    <Menu.Item key="14">视频核心数据统计</Menu.Item>
                    <Menu.Item key="15">文章核心数据统计</Menu.Item>
                    <Menu.Item key="16">账号数据统计</Menu.Item>
                    <Menu.Item key="17">粉丝数据统计</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub6"
                        title={<span><img src={require('./images/index/u53.png')} className="item_img" /><span>用户管理</span></span>}
                    >
                    <Menu.Item key="18">用户列表</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub7"
                        title={<span><img src={require('./images/index/u57.png')} className="item_img" /><span>内部账户管理</span></span>}
                    >
                    <Menu.Item key="19">频道子账号管理</Menu.Item>
                    <Menu.Item key="20">人员管理</Menu.Item>
                    <Menu.Item key="21">角色管理</Menu.Item>
                    </SubMenu>
              </Menu>
              </Sider>
              <Layout className="content" width="100px">
              <Header style={{ background: '#fff', padding: 0 ,textIndent: 10,fontSize:"30px"}}>
          <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              />
              </Header>
              <Content style={{

                      }}
                  >
                      <ContentArticle/>
              </Content>
              </Layout>
        </Layout>
    );
    }
}



export default App;
