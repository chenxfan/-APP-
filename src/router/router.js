/**
 *   @路由
 */
import React, { Component,Suspense, lazy } from 'react';
import {Route ,Link, NavLink} from 'react-router-dom';

//具体路由
// const Login = lazy(()=> import("../pages/login/login"));                                              //登录
// const AdAnnouncement = lazy(()=> import("../pages/ad/adAnnouncement/adAnnouncement"));             //消息管理
// const AdDevelop = lazy(()=> import("../pages/ad/ad-Develop/ad-Develop"));                             //开屏广告页管理
// const Banner = lazy(()=> import("../pages/ad/banner/banner"));                                        //banner管理
// const CommentArticle = lazy(()=> import("../pages/comment/comment-article/comment-article"));         //文章评论管理
// const CommentVideo = lazy(()=> import("../pages/comment/comment-video/comment-video"));               //视频品论管理
// const CommodityShop = lazy(()=> import("../pages/commodity/commodity-shop/commodity-shop"));          //商品管理
// const CommodityAddress = lazy(()=> import("../pages/commodity/commodityAddress/commodityAddress"));  //商品地址管理
const ContentArticle = lazy(()=> import("../pages/content/content-article/content-article"));         //文章内容管理
// const ContentVideo = lazy(()=> import("../pages/content/content-video/content-video"));               //视频内容管理
// const ContentChannel = lazy(()=> import("../pages/content/content-channel/content-channel"));         //频道管理
// const ContentLabel = lazy(()=> import("../pages/content/content-label/content-label"));               //标签管理
// const ContentToExamine = lazy(()=> import("../pages/content/content-toExamine/content-toExamine"));   //内容待审核列表
// const Account = lazy(()=> import("../pages/dAnalysis/account/account"));                              //账户数据统计
// const Article = lazy(()=> import("../pages/dAnalysis/article/dAnalysis-article"));                    //文章核心数据统计
// const Fans = lazy(()=> import("../pages/dAnalysis/fans/fans"));                                       //粉丝数据统计
// const Video = lazy(()=> import("../pages/dAnalysis/video/dAnalysis-video"));                          //视频核心数据统计
// const Channel = lazy(()=> import("../pages/iAccount/channel/channel"));                               //频道子账号管理
// // const Mechanism = lazy(()=> import("../pages/iAccount/mechanism/mechanism"));    //机构管理--废弃
// // const Official = lazy(()=> import("../pages/iAccount/official/official"));       //官方频道--废弃
// const Personnel = lazy(()=> import("../pages/iAccount/personnel/personnel"));                         //人员管理
// const Role = lazy(()=> import("../pages/iAccount/role/role"));                                        //角色管理
// const UserList = lazy(()=> import("../pages/user/userList"));                                         //用户列表

const routes =[{
	    path:"/content-article",
	    component:ContentArticle,
	    msg:"文章内容管理"
	
}]
// const routes = [{
//     path:"/login",
//     component:Login,
//     msg:"登录"
// },{
//     path:"/banner",
//     component:Banner,
//     msg:"banner管理"
// },{
//     path:"/adAnnouncement",
//     component:AdAnnouncement,
//     msg:"消息管理"
// },{
//     path:"/ad-Develop",
//     component:AdDevelop,
//     msg:"开屏广告页管理"
// },{
//     path:"/comment-video",
//     component:CommentVideo,
//     msg:"视频品论管理"
// },{
//     path:"/comment-article",
//     component:CommentArticle,
//     msg:"文章评论管理"
// },{
//     path:"/content-video",
//     component:ContentVideo,
//     msg:"视频内容管理"
// },{
//     path:"/content-article",
//     component:ContentArticle,
//     msg:"文章内容管理"
// },{
//     path:"/content-toExamine",
//     component:ContentToExamine,
//     msg:"内容待审核列表"
// },{
//     path:"/content-channel",
//     component:ContentChannel,
//     msg:"频道管理"
// },{
//     path:"/commodity-shop",
//     component:CommodityShop,
//     msg:"商品管理"
// },{
//     path:"/commodityAddress",
//     component:CommodityAddress,
//     msg:"商品地址管理"
// },{
//     path:"/dAnalysis-video",
//     component:Video,
//     msg:"视频核心数据统计"
// },{
//     path:"/dAnalysis-article",
//     component:Article,
//     msg:"文章核心数据统计"
// },{
//     path:"/account",
//     component:Account,
//     msg:"账户数据统计"
// },{
//     path:"/fans",
//     component:Fans,
//     msg:"粉丝数据统计"
// },{
//     path:"/userList",
//     component:UserList,
//     msg:"用户列表"
// },{
//     path:"/channel",
//     component:Channel,
//     msg:"频道子账号管理"
// },{
//     path:"/personnel",
//     component:Personnel,
//     msg:"人员管理"
// },{
//     path:"/role",
//     component:Role,
//     msg:"角色管理"
// }];

//暴露routes
export default routes

//暴露路由函数
export function RouteWithSubRoutes(route) {
        return (
                <Route
            path={route.path}
            render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
            />
    );
}
