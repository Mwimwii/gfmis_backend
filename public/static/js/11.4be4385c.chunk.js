(this["webpackJsonpgfmis-react"]=this["webpackJsonpgfmis-react"]||[]).push([[11],{1259:function(e,t,a){"use strict";var n=a(589);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(590)),i=a(2),s=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=s},1260:function(e,t,a){"use strict";var n=a(589);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(590)),i=a(2),s=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=s},1413:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(1395),i=a(501),s=a(93),c=a(9),o=a(15),d=a(5),l=a(6),u=a(24),b=a(25),p=a(12),m=a(552),j=a(527),g=a(1394),f=a(729),O=a(1401),h=a(523),x=a(526),v=a(525),y=a(570),T=a(614),C=a(312),F=a(569),I=a(322),M=a(506),k=a(1259),N=a.n(k),L=a(1260),S=a.n(L),P=a(208),w=a(66),q=a(1),B=a(604),R=a(133),_=a(611),G=a(164),V=a(204),E=a(30),z=a(31),A=a.n(z),D=a(2),U=Object(p.a)(B.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),W=(B.ValidatorComponent,function(){var e=Object(q.useState)({}),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(q.useState)(!1),s=Object(o.a)(i,2),d=s[0],l=s[1],u=Object(P.b)().enqueueSnackbar;Object(_.a)(": Add Beneficiary");var b=Object(V.b)(),p=Object(q.useState)({paddingTop:Object(R.d)()?"12px":"24px",paddingTopUnder:"12px",paddingTopUnderSelect:Object(R.d)()?"28px":"12px",marginTop:Object(R.d)()?0:4}),k=Object(o.a)(p,1)[0],L=Object(q.useRef)(null),z=Object(q.useState)(0),W=Object(o.a)(z,2),H=W[0],J=W[1];Object(q.useEffect)((function(){J(L.current.offsetWidth)}),[]);var $=Object(E.f)(),Y=function(e){e.persist&&e.persist(),r(Object(c.a)(Object(c.a)({},a),{},Object(n.a)({},e.target.name,e.target.value)))},K=a.firstName,Q=a.lastName,X=a.gender,Z=a.dateOfBirth,ee=a.schoolId,te=a.gradeId,ae=a.parentFirstName,ne=a.parentLastName,re=a.parentNRC,ie=a.parentMobile,se=a.parentAddress,ce=Object(q.useState)([]),oe=Object(o.a)(ce,2),de=oe[0],le=oe[1],ue=Object(q.useState)([]),be=Object(o.a)(ue,2),pe=be[0],me=be[1],je=Object(q.useState)(null),ge=Object(o.a)(je,2),fe=ge[0],Oe=ge[1];return Object(q.useEffect)((function(){0===de.length&&0===pe.length&&(r(Object(c.a)(Object(c.a)({},a),{},{gender:"Male"})),A.a.get("".concat("/","api/schools")).then((function(e){var t=e.data.data;le(t.map((function(e){return{label:e.attributes.name,value:e.id}})))})),A.a.get("".concat("/","api/grades")).then((function(e){var t=e.data.data;me(t.map((function(e){return{label:e.attributes.name,value:e.id}})))})))}),[de.length,pe.length]),Object(q.useEffect)((function(){re&&re.length>=0&&(console.log("Fetching Parent"),A.a.get("".concat("/","api/users?limit=1&populate[0]=parent&filters[nrc][$startsWith]=")+re).then((function(e){var t=e.data,a=Object(o.a)(t,1)[0];if(a){var n=null!==a&&void 0!==a&&a.parent?null===a||void 0===a?void 0:a.parent.address:"",r={firstName:a.firstName,lastName:a.lastName,mobile:a.mobile,address:n};fe!==r&&Oe(r)}else fe&&Oe(null)})))}),[re]),Object(q.useEffect)((function(){fe&&r(Object(c.a)(Object(c.a)({},a),{},{parentFirstName:null===fe||void 0===fe?void 0:fe.firstName,parentLastName:null===fe||void 0===fe?void 0:fe.lastName,parentMobile:null===fe||void 0===fe?void 0:fe.mobile,parentAddress:null===fe||void 0===fe?void 0:fe.address}))}),[fe]),Object(D.jsx)("div",{children:Object(D.jsxs)(B.ValidatorForm,{debounceTime:500,onSubmit:function(e){b(Object(G.c)(a)),setTimeout((function(){u("Beneficiary sucessfully entered",{variant:"success"}),$("/beneficiaries"),l(!1)}),500)},onError:function(){return null},children:[Object(D.jsx)(m.a,{style:{marginTop:"8px"}}),Object(D.jsx)("h4",{style:{marginTop:"16px"},children:"Beneficiary Details"}),Object(D.jsxs)(j.a,{container:!0,spacing:6,children:[Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:4},style:{paddingTop:k.paddingTop},children:Object(D.jsx)(U,{type:"text",name:"firstName",label:"First Name",onChange:Y,value:K||"",validators:["required"],errorMessages:["this field is required"],InputLabelProps:{shrink:!0}})}),Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:k.marginTop},style:{paddingTop:k.paddingTop},children:Object(D.jsx)(U,{type:"text",name:"lastName",label:"Last Name",onChange:Y,value:Q||"",validators:["required"],errorMessages:["this field is required"],InputLabelProps:{shrink:!0}})}),Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:k.marginTop},style:{paddingTop:k.paddingTopUnder},children:Object(D.jsx)(U,{label:"Date of Birth",type:"date",name:"dateOfBirth",value:Z,onChange:Y,defaultValue:"2017-05-24",InputLabelProps:{shrink:!0}})}),Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:k.marginTop},style:{paddingTop:k.paddingTopUnder},children:Object(D.jsxs)(g.a,{row:!0,name:"gender",sx:{mb:2},value:X||"",onChange:Y,children:[Object(D.jsx)(f.a,{value:"Male",label:"Male",labelPlacement:"end",control:Object(D.jsx)(O.a,{color:"primary"})}),Object(D.jsx)(f.a,{value:"Female",label:"Female",labelPlacement:"end",control:Object(D.jsx)(O.a,{color:"primary"})})]})})]}),Object(D.jsx)(m.a,{}),Object(D.jsx)("h4",{style:{marginTop:"16px"},children:"Beneficiary School Details"}),Object(D.jsxs)(j.a,{container:!0,spacing:6,children:[Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:k.marginTop},style:{paddingTop:k.paddingTop},children:Object(D.jsxs)(h.a,{fullWidth:!0,variant:"outlined",children:[Object(D.jsx)(x.a,{shrink:!0,ref:L,htmlFor:"school-select",style:{backgroundColor:"#FFF",paddingLeft:8,paddingRight:8},children:"Insitution"}),Object(D.jsx)(v.a,{labelId:"school-select",id:"mtx-school-select",name:"schoolId",value:ee||"",label:"School",disabled:0===de.length,onChange:Y,input:Object(D.jsx)(y.a,{notched:!0,labelwidth:H,name:"school",id:"school-select"}),children:de&&de.map((function(e){return Object(D.jsx)(T.a,{value:e.value,children:e.label},e.value)}))})]})}),Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:k.marginTop},style:{paddingTop:k.paddingTop},children:Object(D.jsxs)(h.a,{fullWidth:!0,variant:"outlined",children:[Object(D.jsx)(x.a,{shrink:!0,ref:L,htmlFor:"grade-select",style:{backgroundColor:"#FFF",paddingLeft:8,paddingRight:8},children:"Grade"}),Object(D.jsx)(v.a,{labelId:"grade-select",id:"mtx-grade-select",name:"gradeId",value:te||"",label:"Grade",disabled:0===pe.length,onChange:Y,input:Object(D.jsx)(y.a,{notched:!0,labelwidth:H,name:"grades",id:"grades-select"}),children:pe&&pe.map((function(e){return Object(D.jsx)(T.a,{value:e.value,children:e.label},e.value)}))})]})})]}),Object(D.jsx)(m.a,{style:{marginTop:"16px"}}),Object(D.jsx)("h4",{style:{marginTop:"16px"},children:"Parent Details"}),Object(D.jsxs)(j.a,{container:!0,spacing:6,children:[Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:k.marginTop},style:{paddingTop:k.paddingTopUnder},children:Object(D.jsx)(U,{type:"text",name:"parentNRC",label:"National Registration Number",onChange:Y,value:re||"",validators:["required","matchRegexp:^\\d{8}1$"],errorMessages:["This field is required","Input must be 9 digits and end with 1"],InputLabelProps:{shrink:!0}})}),Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:4},style:{paddingTop:k.paddingTop},children:fe?Object(D.jsxs)(C.a,{style:{alignItems:"center",display:"flex"},children:[Object(D.jsx)(F.a,{style:{color:"#A2F0A2"},children:Object(D.jsx)(N.a,{})}),Object(D.jsx)("p",{style:{marginLeft:4},children:"Parent Found ".concat(fe.nrc)})]}):Object(D.jsxs)(C.a,{style:{alignItems:"center",display:"flex"},children:[Object(D.jsx)(F.a,{style:{color:"#8282F0"},children:Object(D.jsx)(S.a,{})}),Object(D.jsx)("p",{style:{marginLeft:4},children:"No Record Exist"})]})})]}),Object(D.jsxs)(j.a,{container:!0,spacing:6,children:[Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:4},style:{paddingTop:k.paddingTop},children:Object(D.jsx)(U,{type:"text",name:"parentFirstName",label:"Parent First Name",onChange:Y,value:ae||"",validators:["required"],errorMessages:["this field is required"],InputLabelProps:{shrink:!0},style:{backgroundColor:fe&&"#F0F0F0"},disabled:fe})}),Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:4},style:{paddingTop:k.paddingTop},children:Object(D.jsx)(U,{type:"text",name:"parentLastName",label:"Parent Last Name",onChange:Y,value:ne||"",validators:["required"],errorMessages:["this field is required"],InputLabelProps:{shrink:!0},style:{backgroundColor:fe&&"#F0F0F0"},disabled:fe})})]}),Object(D.jsxs)(j.a,{container:!0,spacing:6,children:[Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:4},style:{paddingTop:k.paddingTop},children:Object(D.jsx)(U,{type:"text",name:"parentAddress",label:"Address",onChange:Y,value:se||"",validators:["required"],errorMessages:["this field is required"],InputLabelProps:{shrink:!0},style:{backgroundColor:fe&&(null===fe||void 0===fe?void 0:fe.address)&&"#F0F0F0"},disabled:fe&&(null===fe||void 0===fe?void 0:fe.address)})}),Object(D.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:4},style:{paddingTop:k.paddingTop},children:Object(D.jsx)(U,{type:"text",name:"parentMobile",label:"Mobile Number",onChange:Y,value:ie||"",validators:["required"],errorMessages:["this field is required"],InputLabelProps:{shrink:!0},style:{backgroundColor:fe&&(null===fe||void 0===fe?void 0:fe.mobile)&&"#F0F0F0"},disabled:fe&&(null===fe||void 0===fe?void 0:fe.mobile)})})]}),Object(D.jsx)(I.a,{color:"primary",variant:"contained",type:"submit",disabled:d,children:Object(D.jsx)(w.e,{sx:{textTransform:"capitalize"},children:d?Object(D.jsx)(M.a,{style:{margin:"auto",height:15,width:15,color:"white"}}):"Submit"})})]})})}),H=Object(i.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(n.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(n.a)(t,"& .breadcrumb",Object(n.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t}));t.default=function(){return Object(D.jsx)(H,{children:Object(D.jsx)(r.a,{spacing:3,children:Object(D.jsx)(s.g,{title:"Add Beneficiary",children:Object(D.jsx)(W,{})})})})}},314:function(e,t,a){"use strict";a.r(t),a.d(t,"capitalize",(function(){return r.a})),a.d(t,"createChainedFunction",(function(){return i.a})),a.d(t,"createSvgIcon",(function(){return s.a})),a.d(t,"debounce",(function(){return c.a})),a.d(t,"deprecatedPropType",(function(){return o})),a.d(t,"isMuiElement",(function(){return d.a})),a.d(t,"ownerDocument",(function(){return l.a})),a.d(t,"ownerWindow",(function(){return u.a})),a.d(t,"requirePropFactory",(function(){return b.a})),a.d(t,"setRef",(function(){return p})),a.d(t,"unstable_useEnhancedEffect",(function(){return m.a})),a.d(t,"unstable_useId",(function(){return j.a})),a.d(t,"unsupportedProp",(function(){return g.a})),a.d(t,"useControlled",(function(){return f.a})),a.d(t,"useEventCallback",(function(){return O.a})),a.d(t,"useForkRef",(function(){return h.a})),a.d(t,"useIsFocusVisible",(function(){return x.a})),a.d(t,"unstable_ClassNameGenerator",(function(){return v}));var n=a(309),r=a(18),i=a(641),s=a(92),c=a(135);var o=function(e,t){return function(){return null}},d=a(134),l=a(78),u=a(118),b=a(510),p=a(127).a,m=a(74),j=a(607),g=a(644),f=a(166),O=a(112),h=a(35),x=a(209),v={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),n.a.configure(e)}}},510:function(e,t,a){"use strict";a(4);t.a=function(e,t){return function(){return null}}},587:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(49),r=a(53);function i(e){return Object(n.a)("MuiMenuItem",e)}var s=Object(r.a)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);t.a=s},589:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},590:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=a(314)},598:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(49),r=a(53);function i(e){return Object(n.a)("MuiListItemText",e)}var s=Object(r.a)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.a=s},611:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1),r=function(e){Object(n.useEffect)((function(){document.title="GFMIS"+e}),[e])}},614:function(e,t,a){"use strict";var n=a(8),r=a(11),i=a(4),s=a(1),c=a(14),o=a(84),d=a(129),l=a(12),u=a(20),b=a(203),p=a(503),m=a(74),j=a(35),g=a(299),f=(a(49),a(53));var O=Object(f.a)("MuiListItemIcon",["root","alignItemsFlexStart"]),h=a(598),x=a(587),v=a(2),y=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],T=Object(l.a)(p.a,{shouldForwardProp:function(e){return Object(l.b)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,r=e.ownerState;return Object(i.a)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},Object(n.a)(t,"&.".concat(x.a.selected),Object(n.a)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(x.a.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),Object(n.a)(t,"&.".concat(x.a.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),Object(n.a)(t,"&.".concat(x.a.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),Object(n.a)(t,"&.".concat(x.a.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),Object(n.a)(t,"& + .".concat(g.a.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),Object(n.a)(t,"& + .".concat(g.a.inset),{marginLeft:52}),Object(n.a)(t,"& .".concat(h.a.root),{marginTop:0,marginBottom:0}),Object(n.a)(t,"& .".concat(h.a.inset),{paddingLeft:36}),Object(n.a)(t,"& .".concat(O.root),{minWidth:36}),t),!r.dense&&Object(n.a)({},a.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&Object(i.a)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,Object(n.a)({},"& .".concat(O.root," svg"),{fontSize:"1.25rem"})))})),C=s.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiMenuItem"}),n=a.autoFocus,d=void 0!==n&&n,l=a.component,p=void 0===l?"li":l,g=a.dense,f=void 0!==g&&g,O=a.divider,h=void 0!==O&&O,C=a.disableGutters,F=void 0!==C&&C,I=a.focusVisibleClassName,M=a.role,k=void 0===M?"menuitem":M,N=a.tabIndex,L=Object(r.a)(a,y),S=s.useContext(b.a),P={dense:f||S.dense||!1,disableGutters:F},w=s.useRef(null);Object(m.a)((function(){d&&w.current&&w.current.focus()}),[d]);var q,B=Object(i.a)({},a,{dense:P.dense,divider:h,disableGutters:F}),R=function(e){var t=e.disabled,a=e.dense,n=e.divider,r=e.disableGutters,s=e.selected,c=e.classes,d={root:["root",a&&"dense",t&&"disabled",!r&&"gutters",n&&"divider",s&&"selected"]},l=Object(o.a)(d,x.b,c);return Object(i.a)({},c,l)}(a),_=Object(j.a)(w,t);return a.disabled||(q=void 0!==N?N:-1),Object(v.jsx)(b.a.Provider,{value:P,children:Object(v.jsx)(T,Object(i.a)({ref:_,role:k,tabIndex:q,component:p,focusVisibleClassName:Object(c.default)(R.focusVisible,I)},L,{ownerState:B,classes:R}))})}));t.a=C},644:function(e,t,a){"use strict";t.a=function(e,t,a,n,r){return null}}}]);
//# sourceMappingURL=11.4be4385c.chunk.js.map