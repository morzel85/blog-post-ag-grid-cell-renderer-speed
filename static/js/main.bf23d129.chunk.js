(this["webpackJsonpcell-renderer-speed"]=this["webpackJsonpcell-renderer-speed"]||[]).push([[0],{12:function(e,a,t){e.exports=t(32)},17:function(e,a,t){},18:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t.n(l),c=(t(17),t(18),t(11)),o=t(1),u=t(2),s=t(4),d=t(3),m=t(10),p=(t(30),t(31),function(e,a){for(var t=[],n=[],r=0;r<e;r++)t.push({field:"field_"+r,headerName:"Col "+r},{field:"field_vf_"+r,headerName:"Col VF "+r,cellRenderer:"VANILLA_FUNCTION",hide:!0},{field:"field_rc_"+r,headerName:"Col RC "+r,cellRenderer:"REACT_CLASS",hide:!0},{field:"field_rf_"+r,headerName:"Col RF "+r,cellRenderer:"REACT_FUNCTION",hide:!0});for(var l=0;l<a;l++){for(var i={id:l},c=0;c<e;c++){var o="(".concat(l,", ").concat(c,")");i["field_"+c]=o,i["field_vf_"+c]=o,i["field_rc_"+c]=o,i["field_rf_"+c]=o}n.push(i)}return[t,n]});function h(e){return"<span>VF: ".concat(e.value,"</span>")}var f=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,"RC: ",this.props.value)}}]),t}(n.Component);function C(e){return r.a.createElement("span",null,"RF: ",e.value)}var E=function(e){return r.a.createElement("div",{className:"RendererTypeChoice"},r.a.createElement("span",null,"Cell renderer type:"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"rendererType",value:"NO_RENDERER",onChange:e.onChange,defaultChecked:!0}),"Not set"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"rendererType",value:"VANILLA_FUNCTION",onChange:e.onChange}),"Vanilla JS function"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"rendererType",value:"REACT_CLASS",onChange:e.onChange}),"React class component"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"rendererType",value:"REACT_FUNCTION",onChange:e.onChange}),"React function component"))},v=function(e){return r.a.createElement("div",{className:"StaticMarkupChoice"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"disableStaticMarkup",onChange:e.onChange,checked:e.disableStaticMarkup}),"disableStaticMarkup (grid option)"))},g=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;Object(o.a)(this,t),(n=a.call(this,e)).setColumnsVisiblity=function(e){var a=n.gridColumnApi.getAllColumns(),t=a.filter((function(a){return a.colDef.cellRenderer!==e})),r="NO_RENDERER"===e?a.filter((function(e){return void 0===e.colDef.cellRenderer})):a.filter((function(a){return a.colDef.cellRenderer===e}));n.gridColumnApi.setColumnsVisible(t,!1),n.gridColumnApi.setColumnsVisible(r,!0)},n.handleGridReady=function(e){n.gridApi=e.api,n.gridColumnApi=e.columnApi},n.handleRendererTypeChange=function(e){n.setColumnsVisiblity(e.target.value)},n.handleDisableStaticMarkupOptionChange=function(e){n.setState({disableStaticMarkup:e.target.checked})};var r=p(100,100),l=Object(c.a)(r,2),i=l[0],u=l[1];return n.state={columnDefs:i,rowData:u,disableStaticMarkup:!1},n}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"settings"},r.a.createElement(E,{type:this.state.rendererType,onChange:this.handleRendererTypeChange}),r.a.createElement(v,{type:this.state.disableStaticMarkup,onChange:this.handleDisableStaticMarkupOptionChange})),r.a.createElement("div",{className:"ag-theme-balham"},r.a.createElement(m.AgGridReact,{defaultColDef:{width:90},components:{VANILLA_FUNCTION:h},frameworkComponents:{REACT_CLASS:f,REACT_FUNCTION:C},columnDefs:this.state.columnDefs,rowData:this.state.rowData,disableStaticMarkup:this.state.disableStaticMarkup,onGridReady:this.handleGridReady})))}}]),t}(n.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement("div",{className:"about"},"Example app for ",r.a.createElement("a",{href:"https://morzel.net"},"morzel.net")," blog post"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.bf23d129.chunk.js.map