(this["webpackJsonpmaterial-ui-lesson"]=this["webpackJsonpmaterial-ui-lesson"]||[]).push([[5],{560:function(e,a,t){"use strict";t.r(a);var o=t(14),i=t(27),n=t(0),c=t.n(n),s=t(212),l=t(163),r=t(445),m=t(440),u=t(1),d=t(2),g=(t(4),t(3)),b=t(5),f=t(110),p=n.forwardRef((function(e,a){var t=e.children,o=e.classes,i=e.className,c=e.focusVisibleClassName,s=Object(d.a)(e,["children","classes","className","focusVisibleClassName"]);return n.createElement(f.a,Object(u.a)({className:Object(g.a)(o.root,i),focusVisibleClassName:Object(g.a)(c,o.focusVisible),ref:a},s),t,n.createElement("span",{className:o.focusHighlight}))})),h=Object(b.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(p),O=n.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,c=e.className,s=Object(d.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(u.a)({className:Object(g.a)(i.root,c,!o&&i.spacing),ref:a},s))})),j=Object(b.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(O),w=t(441),E=["video","audio","picture","iframe","img"],v=n.forwardRef((function(e,a){var t=e.children,o=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,l=e.image,r=e.src,m=e.style,b=Object(d.a)(e,["children","classes","className","component","image","src","style"]),f=-1!==E.indexOf(s),p=!f&&l?Object(u.a)({backgroundImage:'url("'.concat(l,'")')},m):m;return n.createElement(s,Object(u.a)({className:Object(g.a)(o.root,i,f&&o.media,-1!=="picture img".indexOf(s)&&o.img),ref:a,style:p,src:f?l||r:void 0},b),t)})),N=Object(b.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(v),y=t(261),k=t(57),F=t(432),C=t(543),x=t(66),H=t(31),S=t(124);const U=Object(F.a)({root:{maxWidth:"100%"},media:{minHeight:140,maxHeight:250}}),V=c.a.memo(({totalCount:e,setFollowingUsersThunk:a,isFetching:t,followingUsers:o,unFollowFriend:u})=>{const d=U(),g=Object(n.useState)(1),b=Object(i.a)(g,2),f=b[0],p=b[1];let O;return Object(n.useEffect)(()=>{a(f)},[f]),o&&(O=o.map(e=>c.a.createElement(l.a,{item:!0,xs:12,sm:6,md:4,key:e.name},c.a.createElement(m.a,{className:d.root},c.a.createElement(h,{component:H.c,to:"/profile/".concat(e.id)},c.a.createElement(N,{className:d.media,image:e.photos.large}),c.a.createElement(w.a,null,c.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),c.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},e.status))),c.a.createElement(j,null,c.a.createElement(y.a,{variant:"outlined",onClick:()=>u(e.id,f)},"Unfollow")))))),c.a.createElement(n.Fragment,null,t&&c.a.createElement(x.a,null),c.a.createElement(r.a,{m:3},Object(s.a)("Following","App","Socials","Following"),c.a.createElement(r.a,{mt:1},c.a.createElement(l.a,{container:!0,spacing:1},O),c.a.createElement(C.a,{count:Math.ceil(e/10),onChange:(e,a)=>p(a)}))))});var A=Object(S.a)(V),M=t(218);a.default=Object(o.b)(e=>({totalCount:e.profile.followingCount,followingUsers:e.following.followingUsers,isFetching:e.following.isFetching}),{setFollowingUsersThunk:M.b,unFollowFriend:M.c})(A)}}]);
//# sourceMappingURL=5.a8cc7a77.chunk.js.map