!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bar_image=t():e.bar_image=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(l=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var l,o,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(a[l]=!0)}for(var o=0;o<e.length;o++){var s=[].concat(e[o]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var r=n(2),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function o(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],s=t.base?i[0]+t.base:i[0],c=n[s]||0,d="".concat(s," ").concat(c);n[s]=c+1;var u=o(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(l[u].references++,l[u].updater(f)):l.push({identifier:d,updater:b(f,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=i(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var i=document.createTextNode(a),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,y=0;function b(e,t){var n,r,a;if(t.singleton){var i=y++;n=m||(m=c(t)),r=f.bind(null,n,i,!1),a=f.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=o(n[r]);l[a].references--}for(var i=s(e,t),c=0;c<n.length;c++){var d=o(n[c]);0===l[d].references&&(l[d].updater(),l.splice(d,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r)()(!1);a.push([e.i,"#vg-tooltip-element.vg-tooltip.custom-theme {\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  border-color: rgba(0, 0, 0, 0.7);\r\n  border-radius: 5px;\r\n  width: auto;\r\n}\r\n\r\n#vg-tooltip-element > table tr td.key {\r\n  text-align: left;\r\n  color: #ffffff;\r\n}\r\n\r\n#vg-tooltip-element > table tr td.value {\r\n  text-align: right;\r\n  color: #ffffff;\r\n}\r\n",""]),t.default=a},function(e,t,n){"use strict";n.r(t);n(1);const r={options:{bin_type:{label:"Binning Type",section:"  Values",type:"string",order:2,display:"select",values:[{"Max Bins":"bins"},{Steps:"steps"},{Breakpoints:"breakpoints"}],default:"bins"},bin_style:{label:"Chart Type",section:"  Values",type:"string",order:1,display:"select",default:"simple_hist",values:[{"Simple Histogram":"simple_hist"},{"Scatter Histogram":"binned_hist"}]},winsorization:{label:"Limit Outliers (Winsorize)",section:"  Values",type:"boolean",order:7,default:!1},color_col:{type:"string",section:" Style",label:"Color",display:"color",display_size:"half",default:"#1A73E8",order:3},color_on_hover:{type:"string",section:" Style",label:"Color On Hover",display:"color",display_size:"half",default:"#338bff",order:4},x_axis_label_divider:{label:"X Axis -------------------------------------------------------",section:"Labels",type:"string",display:"divider",order:6},x_axis_override:{label:"X Axis Title Override",section:"Labels",type:"string",display:"text",default:"",order:7},x_grids:{label:"X Axis Gridlines",section:" Style",type:"boolean",display:"select",display_size:"half",default:!0},x_axis_title_font_size:{label:"X Axis Title Size",section:"Labels",type:"number",default:16,display_size:"half",order:9},x_axis_label_font_size:{label:"X Axis Label Size",section:"Labels",type:"number",default:12,display_size:"half",order:10},x_axis_label_angle:{label:"X Axis Label Angle",section:"Labels",type:"number",display:"range",default:0,order:11,min:0,max:90,step:1,display_size:"half"},x_label_separation:{label:"X Axis Label Density",section:"Labels",type:"number",display:"range",default:100,order:12,min:1,max:100,step:1,display_size:"half"},y_axis_label_divider:{label:"Y Axis -------------------------------------------------------",section:"Labels",type:"string",display:"divider",order:13},y_axis_override:{label:"Y Axis Title Override",section:"Labels",type:"string",display:"text",default:"",order:14},y_grids:{label:"Y Axis Gridlines",section:" Style",type:"boolean",display:"select",display_size:"half",order:15,default:!0},y_axis_title_font_size:{label:"Y Axis Title Size",section:"Labels",type:"number",default:16,display_size:"half",order:16},y_axis_label_font_size:{label:"Y Axis Label Size",section:"Labels",type:"number",default:12,display_size:"half",order:17},y_axis_label_angle:{label:"Y Axis Label Angle",section:"Labels",type:"number",display:"range",default:0,order:18,min:0,max:90,step:1,display_size:"half"},y_label_separation:{label:"Y Axis Label Density",section:"Labels",type:"number",display:"range",default:100,order:19,min:1,max:100,step:1,display_size:"half"},x_axis_value_format:{label:"X Axis Value Format",order:200,section:"  Values",type:"string",display:"text",default:"",placeholder:"Spreadsheet Style Value Format"}},create:function(e,t){e.appendChild(document.createElement("div")).setAttribute("id","my-vega")},updateAsync:function(e,t,n,r,a,i){if(0===e.length)return t.innerHTML="<h1>No Results</h1>",void done();if(3!=r.fields.dimensions.length)return t.innerHTML="<h1>There is a problem with your dimensions</h1><br>this chart requires three dimensions",void this.addError({title:"There is a problem with your dimensions",message:"this chart requires three dimensions"});if(1!=r.fields.measures.length)return t.innerHTML="<h1>No Dimensions</h1><br>This chart requires a measure.",void this.addError({title:"No measure",message:"This chart requires a measure."});options=[];var l=this,o=(n.default_icon,n.title_graphic,140),s=20,c=30,d=20,u=960-d-s,f=500-o-c,p=d3.scaleBand().range([0,u]).padding(.1),m=d3.scaleLinear().range([f,0]),y=d3.select("#vis").append("svg").attr("width",u+d+s).attr("height",f+o+c).append("g").attr("class","main").attr("transform","translate("+d+","+o+")");formattedData=[],e.forEach((function(e){formattedData.push({count:e[r.fields.measures[0].name].value,my_dimension:e[r.fields.dimensions[0].name].value,style:e[r.fields.dimensions[1].name].value,patch_d:e[r.fields.dimensions[2].name].value})})),p.domain(formattedData.map((function(e){return e.my_dimension}))),m.domain([0,d3.max(formattedData,(function(e){return e.count}))]),y.selectAll(".bar").data(formattedData).enter().append("rect").attr("class","bar").attr("rx","10px").attr("style",(function(e){return"fill: "+e.style+";"})).attr("title",(function(e){return e.my_dimension})).attr("x",(function(e){return p(e.my_dimension)})).attr("width",p.bandwidth()).attr("y",(function(e){return m(e.count)-80})).attr("height",(function(e){return f-m(e.count)})),y.append("g").attr("class","append_text").attr("transform","translate(0,"+f+")").call(d3.axisBottom(p)),y.selectAll(".tick").data(formattedData).append("text").attr("class","count").attr("fill","#333"),y.selectAll(".count").data(formattedData).html((function(e){return e.count})).attr("width",p.bandwidth()).attr("height","100%").attr("transform",(function(e){return`translate(0,-${f-m(e.count)+90})`})),y.selectAll("rect").data(formattedData).append("title").attr("class","tooltip").text((function(e){return"Valor "+e.my_dimension+" \n"+e.count})),y.selectAll(".tick").data(formattedData).append("circle").attr("fill",(function(e){return e.style})).attr("cx","29").attr("cy","29").attr("r","30").attr("transform","translate(-29,-70)"),y.selectAll(".tick").data(formattedData).append("g").attr("class","image_logo").html((function(e){var t=String(e.patch_d);return t=(t=t.replace("<image ",`<circle transform="translate(-29,-70)" xmlns="http://www.w3.org/2000/svg" r="29" fill="${e.style}" cy="29" cx="29"/><image transform="translate(-29,-70)" `)).replace("<path ",`<circle transform="translate(-29,-70)" xmlns="http://www.w3.org/2000/svg" r="29" fill="${e.style}" cy="29" cx="29"/><path transform="translate(-29,-70)" `)})),y.selectAll(".tick").selectAll("line").remove(),y.selectAll(".domain").attr("stroke","#fff"),y.selectAll(".tick").selectAll("text").attr("fill","#fff"),y.selectAll(".tick").selectAll(".count").attr("fill","#333").attr("style","font-size:12px"),$(t).find(".bar").click((function(e){l.trigger("filter",[{field:r.fields.dimensions[0].name,value:e.delegateTarget.__data__.my_dimension,run:!0}])})),i()}};looker.plugins.visualizations.add(r)}])}));