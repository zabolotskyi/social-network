(this.webpackJsonpsamurai=this.webpackJsonpsamurai||[]).push([[0],{12:function(e,a,t){e.exports={top_header:"UserCard_top_header__13dr2",top_header_thumb:"UserCard_top_header_thumb__t4Hla",profile_section:"UserCard_profile_section__rEm-s",row:"UserCard_row__2To53",row_nav:"UserCard_row_nav__1F_OP",top_header_author:"UserCard_top_header_author__1l4_8",author_content:"UserCard_author_content__2Etmk",author_name:"UserCard_author_name__1Z9_n",author_location:"UserCard_author_location__1I1a_"}},14:function(e,a,t){e.exports={link:"Dialog_link__wwpYM",dialog:"Dialog_dialog__1yJX2",info:"Dialog_info__1A0Df",username:"Dialog_username__2MOcs",message:"Dialog_message__tVW_F",message_info:"Dialog_message_info__v-BH6",message_count:"Dialog_message_count__3YT-P"}},15:function(e,a,t){e.exports={messages_container:"Messages_messages_container__yuIJy",dialogs:"Messages_dialogs__2JTnZ",messages:"Messages_messages__3aEnZ",messages_list:"Messages_messages_list__30TYU",new_message:"Messages_new_message__1cap8",write_message:"Messages_write_message__1b3Ua",send:"Messages_send__2i8_c",empty_state:"Messages_empty_state__U37NT"}},16:function(e,a,t){e.exports={pagination:"Pagination_pagination__vrSEf",pagination_navigation:"Pagination_pagination_navigation__2-HEj",pagination_button:"Pagination_pagination_button__3Wkke",page_input:"Pagination_page_input__OqjAZ",search_page:"Pagination_search_page__23db5"}},18:function(e,a,t){e.exports={user:"User_user__15pzq",user_info_left:"User_user_info_left__1ExMn",user_info_right:"User_user_info_right__2tyb_",user_name_status:"User_user_name_status__1rRap",user_location:"User_user_location__22aF0",status:"User_status__3Vv7A"}},25:function(e,a,t){e.exports={message_wrapper:"Message_message_wrapper__35Ti3",info:"Message_info__27sgH",username:"Message_username__hhkHe",message:"Message_message__2fRuY",message_info:"Message_message_info__2NT9m"}},27:function(e,a,t){e.exports={post:"Post_post__Zz_OG",circle:"Post_circle__JYhCe",message:"Post_message__E_sHY",likes:"Post_likes__3DZaP"}},30:function(e,a,t){e.exports={new_post:"Posts_new_post___NDiN",button:"Posts_button__3ulIQ",posts:"Posts_posts__3KEFS"}},33:function(e,a,t){e.exports={header:"Header_header__pqNse",login:"Header_login__jbFJm"}},47:function(e,a,t){e.exports={loader:"Loader_loader__1j2Bs",load1:"Loader_load1__1JbEz"}},48:function(e,a,t){e.exports={users:"Users_users__2UBjx"}},49:function(e,a,t){e.exports=t(78)},6:function(e,a,t){e.exports={nav:"Navbar_nav__2JTFI",item:"Navbar_item__3-7Kl",active:"Navbar_active__3OQ3B"}},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(28),o=t.n(r),i=t(10),c=t(4),l=t(3),u=t(20),m=t(21),_=t(24),d=t(22),g=t(13),p="https://image.flaticon.com/icons/svg/147/147144.svg",E="https://social-network.samuraijs.com/api/1.0",v=t(33),f=t.n(v),h=function(e){var a=e.login,t=e.isLoggedIn;return n.a.createElement("header",{className:f.a.header},n.a.createElement("div",null,n.a.createElement("img",{alt:"logo",src:"https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png"})),n.a.createElement("div",{className:f.a.login},t?"Hi, ".concat(a,"!"):n.a.createElement(c.b,{to:"test"},"Login")))},b=t(1),P={id:null,login:null,email:null,isLoggedIn:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"auth/SET_AUTH_USER_DATA":return Object(b.a)(Object(b.a)(Object(b.a)({},e),a.payload.authUserData),{},{isLoggedIn:!0});default:return e}},C=function(e){Object(_.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(a){0===a.data.resultCode&&e.props.setAuthUserData(a.data.data)}))}},{key:"render",value:function(){return n.a.createElement(h,this.props)}}]),t}(n.a.Component),O={setAuthUserData:function(e){return{type:"auth/SET_AUTH_USER_DATA",payload:{authUserData:e}}}},U=Object(i.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,login:e.auth.login}}),O)(C),w=t(14),y=t.n(w),j=function(e){var a="/messages/".concat(e.id);return n.a.createElement("div",null,n.a.createElement(c.b,{to:a,className:y.a.link},n.a.createElement("div",{className:y.a.dialog},n.a.createElement("div",null,n.a.createElement("img",{alt:"user",src:p})),n.a.createElement("div",{className:y.a.info},n.a.createElement("div",null,n.a.createElement("div",{className:y.a.username},e.name),n.a.createElement("div",{className:y.a.message},"Hi, how about...")),n.a.createElement("div",{className:y.a.message_info},n.a.createElement("div",null,"5:14 PM"),n.a.createElement("div",{className:y.a.message_count},e.messages))))))},T=t(25),S=t.n(T),M=function(e){return n.a.createElement("div",{className:S.a.message_wrapper},n.a.createElement("div",null,n.a.createElement("img",{alt:"user",src:p})),n.a.createElement("div",{className:S.a.info},n.a.createElement("div",null,n.a.createElement("div",{className:S.a.username},e.name),n.a.createElement("div",{className:S.a.message},e.message)),n.a.createElement("div",{className:S.a.message_info},"5:14:00 PM")))},F=t(15),k=t.n(F),A=function(e){return n.a.createElement("div",{className:k.a.messages_container},n.a.createElement("div",{className:k.a.dialogs},e.dialogs.map((function(e){var a=e.id,t=e.name,s=e.messages;return n.a.createElement(j,{key:a,id:a,name:t,messages:s})}))),n.a.createElement("div",{className:k.a.messages},n.a.createElement("div",{className:k.a.messages_list},e.privateMessages.map((function(e){var a=e.id,t=e.name,s=e.message;return n.a.createElement(M,{key:a,id:a,name:t,message:s})}))),n.a.createElement("div",{className:k.a.new_message},n.a.createElement("input",{className:k.a.write_message,type:"text",placeholder:"Write a message...",onChange:function(a){var t=a.target.value;e.addTempPrivateMessage(t)},value:e.tempPrivateMessage}),n.a.createElement("button",{className:k.a.send,onClick:function(){e.addPrivateMessage()}},"Send"))))},I=t(23),D={dialogs:[{id:1,name:"User 1",messages:2},{id:2,name:"User 2",messages:21},{id:3,name:"User 3",messages:3},{id:4,name:"User 4",messages:1},{id:5,name:"User 5",messages:2},{id:6,name:"User 6",messages:3e3},{id:7,name:"User 7",messages:2},{id:8,name:"User 8",messages:2}],privateMessages:[{id:1,name:"User 1",message:"hi"},{id:2,name:"User 2",message:"bye"}],tempPrivateMessage:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"messages/ADD_PRIVATE_MESSAGE":var t={id:3,name:"User 3",message:e.tempPrivateMessage};return Object(b.a)(Object(b.a)({},e),{},{privateMessages:[].concat(Object(I.a)(e.privateMessages),[t]),tempPrivateMessage:""});case"messages/ADD_TEMP_PRIVATE_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{tempPrivateMessage:a.payload.tempMessage});default:return e}},x={addPrivateMessage:function(){return{type:"messages/ADD_PRIVATE_MESSAGE"}},addTempPrivateMessage:function(e){return{type:"messages/ADD_TEMP_PRIVATE_MESSAGE",payload:{tempMessage:e}}}},R=Object(i.b)((function(e){var a=e.messages;return{dialogs:a.dialogs,privateMessages:a.privateMessages,tempPrivateMessage:a.tempPrivateMessage}}),x)((function(e){return n.a.createElement(A,e)})),H=function(){return n.a.createElement("div",null,"Music")},G=t(6),Y=t.n(G),J=function(){return n.a.createElement("nav",{className:Y.a.nav},n.a.createElement("div",{className:Y.a.item},n.a.createElement(c.b,{to:"/profile",activeClassName:Y.a.active},"Profile")),n.a.createElement("div",{className:Y.a.item},n.a.createElement(c.b,{to:"/messages",activeClassName:Y.a.active},"Messages")),n.a.createElement("div",{className:Y.a.item},n.a.createElement(c.b,{to:"/users",activeClassName:Y.a.active},"Users")),n.a.createElement("div",{className:Y.a.item},n.a.createElement(c.b,{to:"/news",activeClassName:Y.a.active},"News")),n.a.createElement("div",{className:Y.a.item},n.a.createElement(c.b,{to:"/music",activeClassName:Y.a.active},"Music")),n.a.createElement("div",{className:Y.a.item},n.a.createElement(c.b,{to:"/settings",activeClassName:Y.a.active},"Settings")))},V=function(){return n.a.createElement("div",null,"News")},W=t(17),Z=t(27),B=t.n(Z),K=function(e){return n.a.createElement("div",{className:B.a.post},n.a.createElement("div",{className:B.a.circle}),n.a.createElement("div",{className:B.a.message},n.a.createElement("div",null,e.message),n.a.createElement("div",{className:B.a.likes},"Likes: ",e.likes)))},q=t(30),z=t.n(q),Q=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:z.a.new_post},n.a.createElement("div",null,"My posts"),n.a.createElement("textarea",{placeholder:"Your news...",onChange:function(a){var t=a.target.value;e.addTempPost(t)},value:e.tempPost}),n.a.createElement("div",{className:z.a.button},n.a.createElement("button",{onClick:function(){e.addPost()}},"Send"))),n.a.createElement("div",{className:z.a.posts},e.posts.map((function(e){var a=e.id,t=e.message,s=e.likes;return n.a.createElement(K,{key:a,id:a,message:t,likes:s})}))))},X="profile/ADD_POST",$={userProfile:null,posts:[{id:1,message:"First comment",likes:10},{id:2,message:"Stop spamming!",likes:23}],tempPost:"",isFetching:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"profile/SET_USER_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{userProfile:a.payload.userProfile});case X:var t={id:3,message:e.tempPost,likes:1};return Object(b.a)(Object(b.a)({},e),{},{posts:[].concat(Object(I.a)(e.posts),[t]),tempPost:""});case"profile/ADD_TEMP_POST":return Object(b.a)(Object(b.a)({},e),{},{tempPost:a.payload.tempText});case"profile/SET_IS_FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:a.payload.isFetching});default:return e}},ae={addPost:function(){return{type:X}},addTempPost:function(e){return{type:"profile/ADD_TEMP_POST",payload:{tempText:e}}}},te=Object(i.b)((function(e){return{posts:e.profile.posts,tempPost:e.profile.tempPost}}),ae)((function(e){return n.a.createElement(Q,e)})),se=t(47),ne=t.n(se),re=function(){return n.a.createElement("div",{className:ne.a.loader})},oe=t(12),ie=t.n(oe),ce=function(e){return e.userProfile?n.a.createElement("div",{className:ie.a.top_header},n.a.createElement("div",{className:ie.a.top_header_thumb},n.a.createElement("img",{alt:"nature",src:"https://html.crumina.net/html-olympus/img/top-header1.jpg"})),n.a.createElement("div",{className:ie.a.profile_section},n.a.createElement("div",{className:ie.a.row},n.a.createElement("div",{className:ie.a.row_nav},n.a.createElement("div",null,"Timeline"),n.a.createElement("div",null,"About"),n.a.createElement("div",null,"Friends")),n.a.createElement("div",{className:ie.a.row_nav},n.a.createElement("div",null,"Photos"),n.a.createElement("div",null,"Videos"),n.a.createElement("div",null,"...")))),n.a.createElement("div",{className:ie.a.top_header_author},n.a.createElement("img",{alt:"theme",src:e.userProfile.photos.small?e.userProfile.photos.small:"https://html.crumina.net/html-olympus/img/author-main1.jpg"}),n.a.createElement("div",{className:ie.a.author_content},n.a.createElement("div",{className:ie.a.author_name},e.userProfile.fullName),n.a.createElement("div",{className:ie.a.author_location},e.userProfile.aboutMe)))):n.a.createElement(re,null)},le=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ce,e),n.a.createElement(te,null))},ue=function(e){Object(_.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e,a=this;this.props.setIsFetching(!0);var t=null!==(e=this.props.match.params.id)&&void 0!==e?e:"9096";g.get("".concat(E,"/profile/").concat(t),{withCredentials:!0}).then((function(e){a.props.setIsFetching(!1),a.props.setUserProfile(e.data)}))}},{key:"render",value:function(){return n.a.createElement(le,{userProfile:this.props.userProfile})}}]),t}(n.a.Component),me={setUserProfile:function(e){return{type:"profile/SET_USER_PROFILE",payload:{userProfile:e}}},setIsFetching:function(e){return{type:"profile/SET_IS_FETCHING",payload:{isFetching:e}}}},_e=Object(W.c)(l.e,Object(i.b)((function(e){return{userProfile:e.profile.userProfile}}),me))(ue),de=function(){return n.a.createElement("div",null,"Settings")},ge=t(16),pe=t.n(ge),Ee=function(e){return n.a.createElement("div",{className:pe.a.pagination},n.a.createElement("div",{className:pe.a.pagination_navigation},n.a.createElement("div",null,n.a.createElement("button",{className:pe.a.pagination_button,disabled:1===e.currentPage,onClick:function(){return e.onSetCurrentPage(e.currentPage-1)}},"Previous")),n.a.createElement("div",null,n.a.createElement("input",{className:pe.a.page_input,type:"number",value:e.currentPage,min:"1",max:e.pagesCount,onChange:function(a){return e.onSetCurrentPage(Number(a.target.value))}}),n.a.createElement("span",null,"of ",e.pagesCount)),n.a.createElement("div",null,n.a.createElement("button",{className:pe.a.pagination_button,disabled:e.currentPage===e.pagesCount,onClick:function(){return e.onSetCurrentPage(e.currentPage+1)}},"Next"))),n.a.createElement("div",{className:pe.a.search_page},n.a.createElement("button",{className:pe.a.pagination_button,onClick:e.onLoadUsers},"Search")))},ve=t(18),fe=t.n(ve),he=function(e){var a,t=e.user,s=t.id,r=t.photos,o=t.followed,i=t.name,l=t.status;return n.a.createElement("div",{className:fe.a.user},n.a.createElement("div",{className:fe.a.user_info_left},n.a.createElement(c.b,{to:"/profile/".concat(s)},n.a.createElement("img",{alt:"user",src:null!==(a=r.small)&&void 0!==a?a:p})),n.a.createElement("button",{onClick:e.onToggleFollow},o?"Unfollow":"Follow")),n.a.createElement("div",{className:fe.a.user_info_right},n.a.createElement("div",{className:fe.a.user_name_status},n.a.createElement(c.b,{to:"/profile/".concat(s)},i),n.a.createElement("div",{className:fe.a.status},null!==l&&void 0!==l?l:"No status")),n.a.createElement("div",{className:fe.a.user_location},n.a.createElement("div",null,"Ukraine"),n.a.createElement("div",null,"Zhovti Vody"))))},be=t(48),Pe=t.n(be),Ne=function(e){return n.a.createElement("div",{className:Pe.a.users},n.a.createElement(Ee,{currentPage:e.currentPage,pagesCount:e.pagesCount,onLoadUsers:e.onLoadUsers,onSetCurrentPage:e.onSetCurrentPage}),e.isFetching?n.a.createElement(re,null):e.users.map((function(a){return n.a.createElement(he,{key:a.id,user:a,onToggleFollow:e.onToggleFollow(a)})})))},Ce="users/FOLLOW",Oe={users:[],pageCount:5,currentPage:1,totalUsersCount:0,isFetching:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"users/LOAD_USERS":return Object(b.a)(Object(b.a)({},e),{},{users:Object(I.a)(a.payload.users)});case"users/SET_CURRENT_PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:a.payload.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:a.payload.totalUsersCount});case Ce:return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===a.payload.userId?Object(b.a)(Object(b.a)({},e),{},{followed:!0}):e}))});case"users/UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===a.payload.userId?Object(b.a)(Object(b.a)({},e),{},{followed:!1}):e}))});case"users/SET_IS_FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:a.payload.isFetching});default:return e}},we=function(e){Object(_.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(u.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).onLoadUsers=function(){var a=e.props,t=a.pageCount,s=a.currentPage,n=a.loadUsers,r=a.setIsFetching;r(!0),g.get("".concat(E,"/users?count=").concat(t,"&page=").concat(s),{withCredentials:!0,headers:{"API-KEY":"17595c62-ba18-4475-be9c-85ddf88bea8a"}}).then((function(e){r(!1),n(e.data.items)}))},e.onSetCurrentPage=function(a){e.props.setCurrentPage(a)},e.onToggleFollow=function(a){return function(){var t=e.props,s=t.follow,n=t.unfollow;a.followed?g.delete("".concat(E,"/follow/").concat(a.id),{withCredentials:!0,headers:{"API-KEY":"17595c62-ba18-4475-be9c-85ddf88bea8a"}}).then((function(e){0===e.data.resultCode&&n(a.id)})):g.post("".concat(E,"/follow/").concat(a.id),{},{withCredentials:!0,headers:{"API-KEY":"17595c62-ba18-4475-be9c-85ddf88bea8a"}}).then((function(e){0===e.data.resultCode&&s(a.id)}))}},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.pageCount,t=e.currentPage,s=e.loadUsers,n=e.setTotalUsersCount,r=e.setIsFetching;r(!0),g.get("".concat(E,"/users?count=").concat(a,"&page=").concat(t),{withCredentials:!0,headers:{"API-KEY":"17595c62-ba18-4475-be9c-85ddf88bea8a"}}).then((function(e){r(!1),s(e.data.items),n(e.data.totalCount)}))}},{key:"render",value:function(){var e=this.props,a=e.users,t=e.totalUsersCount,s=e.pageCount,r=e.currentPage,o=e.isFetching,i=Math.ceil(t/s);return n.a.createElement(Ne,{users:a,pagesCount:i,currentPage:r,isFetching:o,onLoadUsers:this.onLoadUsers,onSetCurrentPage:this.onSetCurrentPage,onToggleFollow:this.onToggleFollow})}}]),t}(n.a.Component),ye={loadUsers:function(e){return{type:"users/LOAD_USERS",payload:{users:e}}},setCurrentPage:function(e){return{type:"users/SET_CURRENT_PAGE",payload:{currentPage:e}}},setTotalUsersCount:function(e){return{type:"users/SET_TOTAL_USERS_COUNT",payload:{totalUsersCount:e}}},follow:function(e){return{type:Ce,payload:{userId:e}}},unfollow:function(e){return{type:"users/UNFOLLOW",payload:{userId:e}}},setIsFetching:function(e){return{type:"users/SET_IS_FETCHING",payload:{isFetching:e}}}},je=Object(i.b)((function(e){var a=e.users;return{users:a.users,pageCount:a.pageCount,currentPage:a.currentPage,totalUsersCount:a.totalUsersCount,isFetching:a.isFetching}}),ye)(we),Te=(t(76),function(){return n.a.createElement("div",{className:"app-wrapper"},n.a.createElement(U,null),n.a.createElement(J,null),n.a.createElement("div",{className:"app-wrapper-content"},n.a.createElement(l.a,{path:"/profile/:id?",component:_e}),n.a.createElement(l.a,{exact:!0,path:"/messages",component:R}),n.a.createElement(l.a,{path:"/users",component:je}),n.a.createElement(l.a,{path:"/news",component:V}),n.a.createElement(l.a,{path:"/music",component:H}),n.a.createElement(l.a,{path:"/settings",component:de})))});t(77),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=Object(W.b)({auth:N,profile:ee,messages:L,users:Ue}),Me=Object(W.d)(Se),Fe=function(){return o.a.render(n.a.createElement(c.a,null,n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,{store:Me},n.a.createElement(Te,null)))),document.getElementById("root"))};Fe(),Me.subscribe(Fe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.0ee5afb4.chunk.js.map