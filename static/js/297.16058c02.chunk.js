"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[297],{587:function(e,r,a){a.r(r),a.d(r,{default:function(){return L}});var t=a(861),n=a(433),s=a(439),c=a(757),o=a.n(c),u=a(791),l="UsersPage_usersSection__YErj5",i="UsersPage_wrap__ho9OE",p="UsersPage_users__3oCRY",f="UsersPage_noUsers__wdONe",d="UsersPage_loadMore__XyDx4",h="UsersPage_btnText__SAa52",g="UsersPage_mainBG__B8gSQ",m=a(243).Z.create({baseURL:"https://6478ea36362560649a2ea40e.mockapi.io/api"}),_=function(){var e=(0,t.Z)(o().mark((function e(){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/users?page=1&limit=3");case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,t.Z)(o().mark((function e(r){var a,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/users?page=".concat(r,"&limit=3"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(o().mark((function e(r){var a,t,n,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.id,t=r.subscribers,n=r.sub,e.prev=1,s=n?t-1:t+1,e.next=5,m.put("/users/".concat(a),{followers:s});case 5:return c=e.sent,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),b={card:"Card_card__zQfcO",logo:"Card_logo__-ayHN",avatarWrapper:"Card_avatarWrapper__PF0uv",userName:"Card_userName__5qEdz",avatar:"Card_avatar__7FJg3",tweets:"Card_tweets__rIcWe",followers:"Card_followers__d3zvM",button:"Card_button__hEwJW",active:"Card_active__BqLM7"},A=a.p+"static/media/bg.b3d9942b3f9d5dad1ff0.png",x=function(e){if(e.toString().length<=3)return e;if(e.toString().length<=6){var r=e.toString().split("");return r.splice(-3,0,","),r.join("")}var a=e.toString().split("");return a.splice(-3,0,","),a.splice(-7,0,","),a.join("")},N=a(184),j=function(e){var r=e.user,a=e.storageHandler,t=r.id,n=r.tweets,c=r.followers,o=r.avatar,l=r.user,i=(0,u.useState)((function(){var e=localStorage.getItem("subs");return!!e&&e.includes(l)})),p=(0,s.Z)(i,2),f=p[0],d=p[1],h=(0,u.useState)(c),g=(0,s.Z)(h,2),m=g[0],_=g[1];return(0,N.jsxs)("li",{className:b.card,children:[(0,N.jsx)("img",{src:A,alt:"bg",className:b.img}),(0,N.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ0SURBVHgB7VixbhNBEB0jjHQURsKRSBEkoEjhJi5o3FCk5psjQUNDkSYULqDISYTCSKawJTjJvOebjcabPe86kHiQeNLo9vZm93bfzbxZXW+1Wr2V/WMJe9fr9ZouB6xzjMuR7BkPxAcq2Fj+AXghjDhEFB2Lc3gijDgGac/EMbwRRoxB2mNxCo+E9WETkPZQHKJ0Ub9gX2AzaStapfYcNkz4z2E17LuOpe+R+pcgFIGPcjtcwT5p+wXslbY/SLv+be+dbHleRNiCL0LJX0Z9RK1CbcV6Ct9pYo4ZfKe6oJKUWxeBxFwlaDBuvUbMYY8qy9CfAnwlh1xKbpCFCfuwQaQxT0z70m5Q/a99dR5+5UbKwCJQGpUl4NqHatfBEvrQfJqbIBdhM0MWN/4mjME9U5TpZquaJYtpMNL2mih+Xc6H+8+yGZXbMIL/TP4OXpv2GazRfU1KJ8hFWG3aJ9KSRVLOpdWphbYZMfOI3JEZW+n4gF0IWBcBKdfbO0VuEVa3Kr0y6jY2rDrWJHylo2+b8KZAcemLA+QiLLXJihFEfYp8B6b9Q27qVIr8EjDtc9Xt3pAjzB4ZmHpMQZb7U7kpkH0VToo7N3lhnoXUDdhFyC+iCr1X5FLyJUiog1jj/kz16WfHnwWmJqOBpF3C9yuaj2wp1/GHUgYeUWpxhFyEhVO3PRosLFmqX+E5y/NJKNn0S5BVKuBXtzyD3SlKFk69OWWk4cqIaXTcgbSpFc/BvgM9dszNe7r8U4hTeFcM9f8ZMejwGemhdqdi0nPyA9GC+vc+1q3/PxC7ce5J5GN4I4wi/00cwxNhLkU+hhfC/lTk7w2/AbK0DT3l4b3DAAAAAElFTkSuQmCC",alt:"logo",className:b.logo}),(0,N.jsxs)("div",{className:b.avatarWrapper,children:[(0,N.jsx)("img",{src:o,alt:"avatar",className:b.avatar}),(0,N.jsx)("p",{className:b.userName,children:l})]}),(0,N.jsxs)("p",{className:b.tweets,children:[n," tweets"]}),(0,N.jsxs)("p",{className:b.followers,children:[x(m)," followers"]}),(0,N.jsx)("button",{type:"button",className:f?"".concat(b.button," ").concat(b.active):b.button,onClick:function(){d((function(e){return!e})),a({creator:l,sub:f}),_((function(e){return f?e-1:e+1})),v({id:t,subscribers:c,sub:f})},children:f?"following":"follow"})]},t)},C=a(315),S="Dropdown_dropdown__5wnDN",U="Dropdown_placeholder__Qfdrd",k="Dropdown_menu__9x7jq",Z="Dropdown_option__Ppp-c",B=[{value:"show all",label:"Show all",className:"".concat(Z)},{value:"follow",label:"Follow",className:"".concat(Z)},{value:"followings",label:"Followings",className:"".concat(Z)}],E=function(e){var r=e.onChange;return(0,N.jsx)(C.Z,{className:S,placeholderClassName:U,menuClassName:k,options:B,onChange:function(e){return r(e.value)},placeholder:"Select an option",arrowOpen:!0})},J=a(87),W="Header_header__OKWO7",F="Header_link__qAkBV",y=function(){return(0,N.jsx)("header",{className:W,children:(0,N.jsx)(J.rU,{className:F,to:"/",children:"Back to main Page"})})},L=function(){var e=(0,u.useState)("show all"),r=(0,s.Z)(e,2),a=r[0],c=r[1],m=(0,u.useState)(1),v=(0,s.Z)(m,2),b=v[0],A=v[1],x=(0,u.useState)([]),C=(0,s.Z)(x,2),S=C[0],U=C[1],k=(0,u.useState)(JSON.parse(localStorage.getItem("subs"))||[]),Z=(0,s.Z)(k,2),B=Z[0],J=Z[1],W=function(e){var r=e.creator,a=e.sub;B.length?J((function(e){return a?(0,n.Z)(e.filter((function(e){return e!==r}))):[].concat((0,n.Z)(e),[r])})):J([r])},F=function(){var e=(0,t.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return r=e.sent,e.abrupt("return",U(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){F()}),[]),(0,u.useEffect)((function(){localStorage.setItem("subs",JSON.stringify(B))}),[B]),(0,u.useEffect)((function(){if(1!==b){var e=function(){var e=(0,t.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(b);case 2:return r=e.sent,e.abrupt("return",U((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(r))})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[b]);var L=S.length?S.filter((function(e){switch(a){case"follow":return!B.includes(e.user);case"followings":return B.includes(e.user);default:return e}})).map((function(e){return(0,N.jsx)(j,{user:e,storageHandler:W},e.id)})):(0,N.jsx)("p",{className:f,children:"There are no Users to show!"});return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("main",{className:g,children:(0,N.jsx)("section",{className:l,children:(0,N.jsxs)("div",{className:"container",children:[(0,N.jsx)("h1",{className:"visually-hidden",children:"Users List Section "}),(0,N.jsxs)("div",{className:i,children:[(0,N.jsx)(E,{onChange:c})," ",(0,N.jsx)(y,{})]}),(0,N.jsx)("ul",{className:p,children:L}),16!==L.length&&(0,N.jsx)("button",{type:"button",className:d,onClick:function(){A((function(e){return e+1}))},children:(0,N.jsx)("p",{className:h,children:"Load More"})})]})})})})}}}]);
//# sourceMappingURL=297.16058c02.chunk.js.map