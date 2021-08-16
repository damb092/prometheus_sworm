/*! For license information please see module.js.LICENSE.txt */
define(["@grafana/data","lodash","@grafana/runtime","jquery","@grafana/ui","app/plugins/sdk"],(function(e,t,n,r,a,o){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=6)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t);var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function o(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var l=n(3),i=n.n(l),s=n(1),u=n(0),p=n(4),c=n(2),f=n(5);function d(e,t){if(!Object(s.isFinite)(t))return null;for(var n=e.thresholds.length;n>0;n--)if(t>=e.thresholds[n-1])return e.colorMap[n];return Object(s.first)(e.colorMap)}var h=function(e,t){var n,r;void 0===t&&(t=!1);try{for(var l=o(e.fields),i=l.next();!i.done;i=l.next()){var s=i.value;if(!s.type||s.type===u.FieldType.other||t)return a(a({},e),{fields:e.fields.map((function(e){return e.type&&e.type!==u.FieldType.other&&!t?e:a(a({},e),{type:Object(u.guessFieldTypeForField)(e)||u.FieldType.other})}))})}}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return e};n.d(t,"SingleStatCtrl",(function(){return g})),n.d(t,"PanelCtrl",(function(){return g})),n.d(t,"getColorForValue",(function(){return d}));var g=function(e){function t(t,n,r,a){var o=e.call(this,t,n)||this;return o.linkSrv=r,o.$sanitize=a,o.useDataFrames=!0,o.dataList=[],o.data={},o.fontSizes=[],o.fieldNames=[],o.invalidGaugeRange=!1,o.valueNameOptions=[{value:"min",text:"Min"},{value:"max",text:"Max"},{value:"avg",text:"Average"},{value:"current",text:"Current"},{value:"total",text:"Total"},{value:"name",text:"Name"},{value:"first",text:"First"},{value:"delta",text:"Delta"},{value:"diff",text:"Difference"},{value:"diffperc",text:"Difference percent"},{value:"range",text:"Range"},{value:"last_time",text:"Time of last point"}],o.panelDefaults={links:[],datasource:null,maxDataPoints:100,interval:null,targets:[{}],cacheTimeout:null,format:"none",prefix:"",postfix:"",nullText:null,valueMaps:[{value:"null",op:"=",text:"N/A"}],mappingTypes:[{name:"value to text",value:1},{name:"range to text",value:2}],rangeMaps:[{from:"null",to:"null",text:"N/A"}],mappingType:1,nullPointMode:"connected",valueName:"avg",prefixFontSize:"50%",valueFontSize:"80%",postfixFontSize:"50%",thresholds:"",colorBackground:!1,colorValue:!1,colors:["#299c46","rgba(237, 129, 40, 0.89)","#d44a3a"],sparkline:{show:!1,full:!1,ymin:null,ymax:null,lineColor:"rgb(31, 120, 193)",fillColor:"rgba(31, 118, 189, 0.18)"},gauge:{show:!1,minValue:0,maxValue:100,thresholdMarkers:!0,thresholdLabels:!1},tableColumn:""},Object(s.defaults)(o.panel,o.panelDefaults),o.events.on(u.PanelEvents.dataFramesReceived,o.onFramesReceived.bind(o)),o.events.on(u.PanelEvents.dataSnapshotLoad,o.onSnapshotLoad.bind(o)),o.events.on(u.PanelEvents.editModeInitialized,o.onInitEditMode.bind(o)),o.onSparklineColorChange=o.onSparklineColorChange.bind(o),o.onSparklineFillChange=o.onSparklineFillChange.bind(o),o}return t.$inject=["$scope","$injector","linkSrv","$sanitize"],function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.onInitEditMode=function(){this.fontSizes=["20%","30%","50%","70%","80%","100%","110%","120%","150%","170%","200%"],this.addEditorTab("Options","public/plugins/grafana-singlestat-panel/editor.html",2),this.addEditorTab("Value Mappings","public/plugins/grafana-singlestat-panel/mappings.html",3)},t.prototype.setUnitFormat=function(){var e=this;return function(t){e.panel.format=t,e.refresh()}},t.prototype.onSnapshotLoad=function(e){this.onFramesReceived(function(e){var t,n,r,a;if(!e||!Object(s.isArray)(e))return[];var l=[];try{for(var i=o(e),p=i.next();!p.done;p=i.next()){var c=p.value,f=h(Object(u.toDataFrame)(c));if(f.fields&&f.fields.length)try{for(var d=(r=void 0,o(f.fields)),g=d.next();!g.done;g=d.next()){g.value.state=null}}catch(e){r={error:e}}finally{try{g&&!g.done&&(a=d.return)&&a.call(d)}finally{if(r)throw r.error}}l.push(f)}}catch(e){t={error:e}}finally{try{p&&!p.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return l}(e))},t.prototype.onFramesReceived=function(e){var t=this.panel;if(this.dataList=e,e&&e.length>1)return this.data={value:0,display:{text:"Only queries that return single series/table is supported",numeric:NaN}},void this.render();var n=function(e){var t,n,r,a,l={byName:{},names:[]};try{for(var i=o(e),s=i.next();!s.done;s=i.next()){var p=s.value,c={frame:p};try{for(var f=(r=void 0,o(p.fields)),d=f.next();!d.done;d=f.next()){var h=d.value;if(h.type===u.FieldType.time)c.firstTimeField||(c.firstTimeField=h);else{var g={field:h,frame:c};l.first||(l.first=g);var m=h.config.displayName;m&&!l.byName[m]&&(l.byName[m]=g,l.names.push(m)),(m=h.name)&&!l.byName[m]&&(l.byName[m]=g,l.names.push(m))}}}catch(e){r={error:e}}finally{try{d&&!d.done&&(a=f.return)&&a.call(f)}finally{if(r)throw r.error}}}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return l}(e),r=n.byName[t.tableColumn];if(this.fieldNames=n.names,r||(r=n.first),r)this.data=this.processField(r);else{var a=Object(u.getDisplayProcessor)({field:{config:{mappings:Object(p.convertOldAngularValueMapping)(this.panel),noValue:"No Data"}},theme:c.config.theme,timeZone:this.dashboard.getTimezone()});this.data={value:null,display:a(null)}}this.render()},t.prototype.processField=function(e){var t=this.panel,n=this.dashboard,r=Object(u.getFieldDisplayName)(e.field,e.frame.frame,this.dataList),o=t.valueName,l=e.field,i=void 0;if("name"===o)i=r;else{"last_time"===o&&e.frame.firstTimeField&&(l=e.frame.firstTimeField,o=u.ReducerID.last);var f=u.fieldReducers.getIfExists(o);if(f){if(o=f.id,l.type===u.FieldType.string)[u.ReducerID.mean,u.ReducerID.sum].includes(o)&&(o=t.valueName=u.ReducerID.first)}else o=u.ReducerID.lastNotNull;i=Object(u.reduceField)({field:l,reducers:[o]})[o]}var d=Object(u.getDisplayProcessor)({field:a(a({},e.field),{config:a(a({},e.field.config),{unit:t.format,decimals:t.decimals,mappings:Object(p.convertOldAngularValueMapping)(t)})}),theme:c.config.theme,timeZone:n.getTimezone()}),h={field:e.field,value:i,display:d(i),scopedVars:Object(s.extend)({},t.scopedVars),sparkline:[]};return h.scopedVars.__name={value:r},t.tableColumn=this.fieldNames.length>1?r:"",t.sparkline&&t.sparkline.show&&e.frame.firstTimeField&&(h.sparkline=Object(u.getFlotPairs)({xField:e.frame.firstTimeField,yField:e.field,nullValueMode:t.nullPointMode})),h},t.prototype.canModifyText=function(){return!this.panel.gauge.show},t.prototype.setColoring=function(e){e.background?(this.panel.colorValue=!1,this.panel.colors=["rgba(71, 212, 59, 0.4)","rgba(245, 150, 40, 0.73)","rgba(225, 40, 40, 0.59)"]):(this.panel.colorBackground=!1,this.panel.colors=["rgba(50, 172, 45, 0.97)","rgba(237, 129, 40, 0.89)","rgba(245, 54, 54, 0.9)"]),this.render()},t.prototype.invertColorOrder=function(){var e=this.panel.colors[0];this.panel.colors[0]=this.panel.colors[2],this.panel.colors[2]=e,this.render()},t.prototype.onColorChange=function(e){var t=this;return function(n){t.panel.colors[e]=n,t.render()}},t.prototype.onSparklineColorChange=function(e){this.panel.sparkline.lineColor=e,this.render()},t.prototype.onSparklineFillChange=function(e){this.panel.sparkline.fillColor=e,this.render()},t.prototype.removeValueMap=function(e){var t=Object(s.indexOf)(this.panel.valueMaps,e);this.panel.valueMaps.splice(t,1),this.render()},t.prototype.addValueMap=function(){this.panel.valueMaps.push({value:"",op:"=",text:""})},t.prototype.removeRangeMap=function(e){var t=Object(s.indexOf)(this.panel.rangeMaps,e);this.panel.rangeMaps.splice(t,1),this.render()},t.prototype.addRangeMap=function(){this.panel.rangeMaps.push({from:"",to:"",text:""})},t.prototype.link=function(e,t,n,r){var a,o=this.$location,l=this.linkSrv,s=this.$timeout,p=this.$sanitize,f=r.panel,h=this.templateSrv,g=null;function m(){return t.closest(".panel-container")}function v(e,t,n,a){var o,l,i;return a=p(h.replace(a,r.data.scopedVars)),a=n?(o=a,l=r.data,(i=d(l,l.value))?'<span style="color:'+i+'">'+o+"</span>":o):a,'<span class="'+e+'" style="font-size:'+parseInt(t,10)/100*38+'px">'+a+"</span>"}function y(){var e=r.data,t='<div class="singlestat-panel-value-container">';return f.prefix&&(t+=v("singlestat-panel-prefix",f.prefixFontSize,f.colorPrefix,f.prefix)),t+=v("singlestat-panel-value",f.valueFontSize,f.colorValue,Object(u.formattedValueToString)(e.display)),f.postfix&&(t+=v("singlestat-panel-postfix",f.postfixFontSize,f.colorPostfix,f.postfix)),t+="</div>"}function b(){var e=r.data,n=t.width()||10,a=t.height()||10,o=Math.min(n,1.3*a);if(r.invalidGaugeRange=!1,f.gauge.minValue>f.gauge.maxValue)r.invalidGaugeRange=!0;else{var l=i()("<div></div>"),s={top:"5px",margin:"auto",position:"relative",height:.9*a+"px",width:o+"px"};l.css(s);for(var p=[],g=0;g<e.thresholds.length;g++)p.push({value:e.thresholds[g],color:e.colorMap[g]});p.push({value:f.gauge.maxValue,color:e.colorMap[e.colorMap.length-1]});var m=c.config.bootData.user.lightTheme?"rgb(230,230,230)":"rgb(38,38,38)",v=parseInt(f.valueFontSize,10)/100,y=Math.min(o/5,100)*v,b=f.gauge.thresholdLabels?1.5:1,x=Math.min(o/6,60)/b,k=x/5,O=y/2.5,F={series:{gauges:{gauge:{min:f.gauge.minValue,max:f.gauge.maxValue,background:{color:m},border:{color:null},shadow:{show:!1},width:x},frame:{show:!1},label:{show:!1},layout:{margin:0,thresholdWidth:0},cell:{border:{width:0}},threshold:{values:p,label:{show:f.gauge.thresholdLabels,margin:k+1,font:{size:O}},show:f.gauge.thresholdMarkers,width:k},value:{color:f.colorValue?d(e,e.display.numeric):null,formatter:function(){return function(){var e=r.data,t=f.prefix?h.replace(f.prefix,e.scopedVars):"";return t+=Object(u.formattedValueToString)(e.display),t+=f.postfix?h.replace(f.postfix,e.scopedVars):""}()},font:{size:y,family:c.config.theme.typography.fontFamily.sansSerif}},show:!0}}};t.append(l);var M={data:[[0,e.value]]};i.a.plot(l,[M],F)}}function x(){var e=r.data,n=t.width()||30;if(n&&n<30)setTimeout(x,30);else if(e.sparkline&&e.sparkline.length){var a=r.height,o=i()("<div></div>"),l={position:"absolute",bottom:"0px"};if(f.sparkline.full){l.left="0px",l.width=n+"px";var s=a<=100?5:15*Math.round(a/100)+5;l.height=a-s+"px"}else l.left="0px",l.width=n+"px",l.height=Math.floor(.25*a)+"px";o.css(l);var p={legend:{show:!1},series:{lines:{show:!0,fill:1,lineWidth:1,fillColor:Object(u.getColorForTheme)(f.sparkline.fillColor,c.config.theme),zero:!1}},yaxis:{show:!1,min:f.sparkline.ymin,max:f.sparkline.ymax},xaxis:{show:!1,mode:"time",min:r.range.from.valueOf(),max:r.range.to.valueOf()},grid:{hoverable:!1,show:!1}};t.append(o);var d={data:e.sparkline,color:Object(u.getColorForTheme)(f.sparkline.lineColor,c.config.theme)};i.a.plot(o,[d],p)}}t=t.find(".singlestat-panel"),a=i()('<div id="tooltip" class="">hello</div>"'),t.mouseleave((function(){0!==f.links.length&&s((function(){a.detach()}))})),t.click((function(e){g&&(i()(e).parents(".panel-header").length>0||("_blank"!==g.target?(0===g.href.indexOf("http")?window.location.href=g.href:s((function(){o.url(u.locationUtil.stripBaseFromUrl(g.href))})),a.detach()):window.open(g.href,"_blank")))})),t.mousemove((function(e){g&&(a.text("click to go to: "+g.title),a.place_tt(e.pageX,e.pageY-50))})),this.events.on(u.PanelEvents.render,(function(){!function(){if(r.data){var n=r.data,a=r.panel;n.thresholds=a.thresholds?a.thresholds.split(",").map((function(e){return Number(e.trim())})):[],a.colors&&(n.colorMap=a.colors.map((function(e){return Object(u.getColorForTheme)(e,c.config.theme)})));var o=a.gauge.show?"":y();if(a.colorBackground){var i=d(n,n.display.numeric);i?(m().css("background-color",i),e.fullscreen?t.css("background-color",i):t.css("background-color","")):(m().css("background-color",""),t.css("background-color",""))}else m().css("background-color",""),t.css("background-color","");t.html(o),a.sparkline.show&&x(),a.gauge.show&&b(),t.toggleClass("pointer",a.links.length>0),g=a.links.length>0?l.getDataLinkUIModel(a.links[0],n.scopedVars,{}):null}}(),r.renderingCompleted()}))},t.templateUrl="module.html",t}(f.MetricsPanelCtrl)}])}));
//# sourceMappingURL=module.js.map