(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{43:function(e,t,a){"use strict";a.r(t);var l=a(6),s=a(7),n=a(8),r=a(42),i=a(20),o=a(9),c=a(13),h=a(0),d=a.n(h),u=a(10),p=a.n(u),g=a(41),b=a(3),y=(a(58),a(21)),m=a.n(y),j=a(36),v=a.n(j),k=a(37),O=a(39),w=(a(79),a(80),a(40)),f=a.n(w),x=a(1),C=function(e){var t=Object(h.useState)(!1),a=Object(o.a)(t,2),l=a[0],s=a[1],n=function(){return s(!1)},r=e.tooltip;return Object(x.jsxs)("div",{className:"tooltipDiv",children:[Object(x.jsx)("svg",{onClick:function(){return s((function(e){return!e}))},width:"14",height:"16",viewBox:"0 0 14 16",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}),Object(x.jsx)(O.a,{open:l,closeOnDocumentClick:!0,onClose:n,arrow:"true",position:"right center",children:Object(x.jsxs)("div",{className:"modal",children:[Object(x.jsx)("a",{className:"close",onClick:n,children:"\xd7"}),Object(x.jsx)("span",{className:"tooltipSentence",children:Object(c.a)(r)})]})})]})},F="Keywords separated by commas",S="Optional word or phrase",H="Optional word or phrase",B="Optional words or phrases separated by commas",N="application/vnd.openxmlformats-officedocument.wordprocessingml.document",R=[{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"lightGray",label:"Light Gray"},{value:"magenta",label:"Magenta"},{value:"red",label:"Red"},{value:"blue",label:"Blue"},{value:"cyan",label:"Cyan"},{value:"darkBlue",label:"Dark Blue"},{value:"darkCyan",label:"Dark Cyan"},{value:"darkGray",label:"Dark Gray"},{value:"darkMagenta",label:"Dark Magenta"},{value:"darkRed",label:"Dark Red"},{value:"darkYellow",label:"Dark Yellow"},{value:"darkGreen",label:"Dark Green"},{value:"black",label:"Black"},{value:"white",label:"White"}],A={yellow:"black",green:"white",lightGray:"black",magenta:"white",red:"white",blue:"white",cyan:"black",darkBlue:"white",darkCyan:"white",darkGray:"white",darkMagenta:"white",darkRed:"white",darkYellow:"black",darkGreen:"white",black:"white",white:"black"},K={yellow:"yellow",green:"green",lightGray:"lightGray",magenta:"magenta",red:"red",blue:"blue",cyan:"cyan",darkBlue:"darkBlue",darkCyan:"darkCyan",darkGray:"darkGray",darkMagenta:"darkMagenta",darkRed:"darkRed",darkYellow:"#CCCC00",darkGreen:"darkGreen",black:"black",white:"white"},M={singleValue:function(e,t){var a=t.data;return Object(i.a)(Object(i.a)({},e),{},{color:A[a.value]?A[a.value]:"black",background:K[a.value]?K[a.value]:"white",innerWidth:200,outerWidth:220})}};function z(e){var t=e.highlightColorChangeHandler,a=e.highlightColor,l={label:e.highlightColorLabel,value:a};return Object(x.jsx)("div",{style:{marginLeft:"120px",marginTop:"10px"},children:Object(x.jsx)("div",{style:{width:"170px"},children:Object(x.jsx)(g.a,{options:R,styles:M,onChange:function(e){return t(e)},defaultValue:l,menuPlacement:"auto",menuPosition:"fixed"})})})}var D=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleDownload=function(e,t){m.a.get(e,{responseType:"blob"}).then((function(e){v()(e.data,t)}))},s.onFileChange=function(e){console.log("selected file target: "+String(e.target.files[0])),s.setState({selectedFile:e.target.files[0]})},s.doResumeUpload=function(){s.setState({uploadError:null,uploadResponse:null,outputFilename:null,unmatchedKeywords:null,stats:null,percentageMatch:null,loaderVisible:!0,generationComplete:!1});var e=new FormData;e.append("file",s.state.selectedFile,s.state.selectedFile.name);var t=s.buildMainRequestBody();e.append("json",t),m.a.post("resume/upload",e,{}).then((function(e){s.setState({outputFilename:e.data.outputFilename,unmatchedKeywords:e.data.unmatchedKeywords,stats:e.data.stats,percentageMatch:e.data.percentageMatch,loaderVisible:!1,generationComplete:!0})})).catch((function(e){s.setState({uploadError:e,loaderVisible:!1,generationComplete:!1})}))},s.handleChange=function(e){s.setState({selectedOption:e})},s.state={keywords:null,styleKeywords:!0,underline:!1,underlineApproach:"keyword",italicize:!1,italicizeApproach:"keyword",highlight:!1,highlightApproach:"keyword",highlightColor:"yellow",highlightColorLabel:"Yellow",boldface:!1,boldfaceApproach:"keyword",selectedOption:null,searchReplace:!1,search:"",replace:"",removeBullets:!1,startFrom:"",endAt:"",keep:"",brackets:!1,showBracketDetails:!1,validationErrors:[],validationInProgress:!1,mainRequestBody:"",selectedFile:null,uploadError:null,uploadResponse:null,outputFilename:null,stats:null,unmatchedKeywords:[],percentageMatch:null,loaderVisible:!1,generationComplete:!1},s}return Object(s.a)(a,[{key:"doReset",value:function(){this.setState({generationComplete:!1,loaderVisible:!1,stats:null,unmatchedKeywords:null,outputFilename:null,percentageMatch:null})}},{key:"doSubmit",value:function(){if(this.setState({validationInProgress:!0}),this.isInputValid()){var e=this.buildMainRequestBody();this.setState({mainRequestBody:e}),this.doResumeUpload()}}},{key:"buildMainRequestBody",value:function(){var e="{";"{"!==(e+=this.buildKeywordStyleRequest())&&(e+=","),e+=this.buildSearchAndReplaceRequest();var t=this.buildTrimBulletsRequest();return"{"!==e&&!0!==e.endsWith(",")&&(e+=","),"{"!==(e+=t)&&!0!==e.endsWith(",")&&(e+=","),"{"!==(e+='"removeKeywordlessBullets":'+this.state.removeBullets)&&!0!==e.endsWith(",")&&(e+=","),e+='"removeBracketedStrings":'+this.state.brackets,e+="}"}},{key:"buildTrimBulletsRequest",value:function(){var e="";return!1===this.state.removeBullets?e:(e+='"trimBulletsRequest": {',""!==this.state.startFrom&&(e+='"fromMarker": '+JSON.stringify(this.state.startFrom)+","),""!==this.state.endAt&&(e+='"toMarker": '+JSON.stringify(this.state.endAt)+","),""!==this.state.keep&&(e+='"keepBulletMarkers": '+JSON.stringify(this.buildKeepWordsArray())),e.endsWith(",")&&(e=e.substring(0,e.length-1)),e+="}")}},{key:"buildSearchAndReplaceRequest",value:function(){var e="";return!1===this.state.searchReplace?e:(e+='"searchAndReplaceRequest":{"searchReplaceMap":{',e+=JSON.stringify(this.state.search),e+=": ",e+=JSON.stringify(this.state.replace),e+="}}")}},{key:"buildKeepWordsArray",value:function(){var e=[];return-1===this.state.keep.indexOf(",")?(e.push(this.state.keep.trim()),e):(this.state.keep.split(",").forEach((function(t){var a=t.trim();""!==a&&e.push(a)})),e)}},{key:"buildKeywordsArrayString",value:function(){var e=[];return-1===this.state.keywords.indexOf(",")?(e.push(this.state.keywords.trim()),JSON.stringify(e)):(this.state.keywords.split(",").forEach((function(t){var a=t.trim();""!==a&&e.push(a)})),JSON.stringify(e))}},{key:"buildKeywordStyleRequest",value:function(){var e="";return!1===this.state.styleKeywords?e:(e+='"keywordStyleRequest": {',e+='"highlightKeywords":'+(this.state.highlight&&"keyword"===this.state.highlightApproach)+",",e+='"highlightSentence":'+(this.state.highlight&&"sentence"===this.state.highlightApproach)+",",e+='"boldfaceKeywords":'+(this.state.boldface&&"keyword"===this.state.boldfaceApproach)+",",e+='"boldfaceSentence":'+(this.state.boldface&&"sentence"===this.state.boldfaceApproach)+",",e+='"italicizeKeywords":'+(this.state.italicize&&"keyword"===this.state.italicizeApproach)+",",e+='"italicizeSentence":'+(this.state.italicize&&"sentence"===this.state.italicizeApproach)+",",e+='"underlineKeywords":'+(this.state.underline&&"keyword"===this.state.underlineApproach)+",",e+='"underlineSentence":'+(this.state.underline&&"sentence"===this.state.underlineApproach)+",",e+='"highlightColor":"'+this.state.highlightColor+'",',e+='"keywords":'+this.buildKeywordsArrayString(),e+="}")}},{key:"isInputValid",value:function(){if(!this.state.styleKeywords&&!this.state.searchReplace&&!this.state.removeBullets&&!this.state.brackets)return console.log("no options selected"),!1;if(this.state.styleKeywords){if(!this.state.underline&&!this.state.italicize&&!this.state.boldface&&!this.state.highlight)return console.log("no styling options selected"),!1;if(""===this.state.keywords.trim())return console.log("no keywords added"),!1}if(this.state.searchReplace){if(""===this.state.search.trim()&&""===this.state.replace.trim())return console.log("no search/replace criteria defined"),!1;if(""===this.state.search.trim()&&""!==this.state.replace.trim())return console.log("no search criteria defined to replace"),!1}return null===this.state.selectedFile?(console.log("no file selected"),!1):!0!==this.state.selectedFile.name.toLowerCase().endsWith(".docx")?(console.log("selected file not a .docx"),!1):this.state.selectedFile.type!==N?(console.log("selected file not word document type"),!1):!(this.state.selectedFile.size>6291456)||(console.log("max file size exceeded"),!1)}},{key:"keywordsOnBlurHandler",value:function(e){var t=e.target.value.trim();t===F&&(t=""),""===t&&(e.target.value=F),this.setState({keywords:t})}},{key:"keywordsOnFocusHandler",value:function(e){var t=this.state.keywords;e.target.value=t}},{key:"startFromOnFocusHandler",value:function(e){var t=this.state.startFrom;e.target.value=t}},{key:"startFromOnBlurHandler",value:function(e){var t=e.target.value.trim();t===S&&(t=""),""===t&&(e.target.value=S),this.setState({startFrom:t})}},{key:"endAtOnFocusHandler",value:function(e){var t=this.state.endAt;e.target.value=t}},{key:"endAtOnBlurHandler",value:function(e){var t=e.target.value.trim();t===H&&(t=""),""===t&&(e.target.value=H),this.setState({endAt:t})}},{key:"keepOnFocusHandler",value:function(e){var t=this.state.keep;e.target.value=t}},{key:"keepOnBlurHandler",value:function(e){var t=e.target.value.trim();t===B&&(t=""),""===t&&(e.target.value=B),this.setState({keep:t})}},{key:"searchOnFocusHandler",value:function(e){var t=this.state.search;e.target.value=t}},{key:"searchOnBlurHandler",value:function(e){var t=e.target.value.trim();""===t&&(t=""),""===t&&(e.target.value=""),this.setState({search:t})}},{key:"replaceOnFocusHandler",value:function(e){var t=this.state.replace;e.target.value=t}},{key:"replaceOnBlurHandler",value:function(e){var t=e.target.value.trim();""===t&&(t=""),""===t&&(e.target.value=""),this.setState({replace:t})}},{key:"handleStartFromChange",value:function(e){var t=e.target.value.trim();t.trim()===S&&(t=""),""===t.trim()&&(e.target.value=S),this.setState({startFrom:t})}},{key:"handleEndAtChange",value:function(e){var t=e.target.value.trim();t.trim()===H&&(t=""),""===t.trim()&&(e.target.value=H),this.setState({endAt:t})}},{key:"handleDontRemoveChange",value:function(e){var t=e.target.value.trim();t.trim()===B&&(t=""),""===t.trim()&&(e.target.value=B),this.setState({keep:t})}},{key:"handleReplaceChange",value:function(e){var t=e.target.value.trim();this.setState({replace:t})}},{key:"handleHighlightColorChange",value:function(e){this.setState({highlightColor:String(e.value),highlightColorLabel:e.label})}},{key:"getSpanStyleForColor",value:function(e){return"<span className='"+e+"Highlight'>"}},{key:"getExampleSentence",value:function(){var e="Example: ",t=this.state.boldface&&"sentence"===this.state.boldfaceApproach,a=this.state.italicize&&"sentence"===this.state.italicizeApproach,l=this.state.underline&&"sentence"===this.state.underlineApproach,s=this.state.highlight&&"sentence"===this.state.highlightApproach,n=this.state.boldface&&"keyword"===this.state.boldfaceApproach,r=this.state.italicize&&"keyword"===this.state.italicizeApproach,i=this.state.underline&&"keyword"===this.state.underlineApproach,o=this.state.highlight&&"keyword"===this.state.highlightApproach;return e+=t?"<b>":"",e+=a?"<i>":"",e+=l?"<u>":"",e+=s?this.getSpanStyleForColor(this.state.highlightColor):"",e+="This sentence contains keywords ",e+=n?"<b>":"",e+=r?"<i>":"",e+=i?"<u>":"",e+=o?this.getSpanStyleForColor(this.state.highlightColor):"",e+="Java",e+=o?"</span>":"",e+=i?"</u>":"",e+=r?"</i>":"",e+=n?"</b>":"",e+=" and ",e+=n?"<b>":"",e+=r?"<i>":"",e+=i?"<u>":"",e+=o?this.getSpanStyleForColor(this.state.highlightColor):"",e+="Oracle",e+=o?"</span>":"",e+=i?"</u>":"",e+=r?"</i>":"",e+=n?"</b>":"",e+=".",e+=s?"</span>":"",e+=l?"</u>":"",e+=a?"</i>":"",e+=t?"</b>":"",e+=" This second sentence has no keywords and will not be styled."}},{key:"htmlDecode",value:function(e){var t=document.createElement("div");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue}},{key:"getChartDataColor",value:function(e){var t=e%10;return 0===t?"green":1===t?"black":2===t?"blue":3===t?"orange":4===t?"purple":5===t?"yellow":6===t?"magenta":7===t?"gray":8===t?"cyan":9===t?"red":void 0}},{key:"assembleChartData",value:function(){var e=this,t=this.state.stats,a=[["Keyword","Matches Found",{role:"style"},{sourceColumn:0,role:"annotation",type:"string",calc:"stringify"}]];if(null!==t){var l=0;Object.entries(t).map((function(t){var s=Object(o.a)(t,2),n=s[0],r=s[1];return a.push([n,r,e.getChartDataColor(l),null]),++l}));var s=0;for(s=0;s<this.state.unmatchedKeywords.length;s++){var n=this.state.unmatchedKeywords[s];a.push([n,0,this.getChartDataColor(l+s),null])}}return a.length<2?[]:a}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(U,{uploadError:this.state.uploadError}),this.state.validationInProgress?Object(x.jsx)(Y,{validationErrors:this.state.validationErrors,styleKeywords:this.state.styleKeywords,searchReplace:this.state.searchReplace,removeBullets:this.state.removeBullets,brackets:this.state.brackets,underline:this.state.underline,italicize:this.state.italicize,boldface:this.state.boldface,highlight:this.state.highlight,keywords:this.state.keywords,search:this.state.search,replace:this.state.replace,selectedFile:this.state.selectedFile}):"",!0!==this.state.generationComplete?Object(x.jsx)(E,{text:"Resume Tailor Setup"}):"",!0!==this.state.generationComplete?Object(x.jsx)(T,{onFileChange:this.onFileChange.bind(this),selectedFile:this.state.selectedFile}):"",!0!==this.state.generationComplete?Object(x.jsx)(ae,{keywords:this.state.keywords,keywordsOnBlurHandler:this.keywordsOnBlurHandler.bind(this),keywordsOnFocusHandler:this.keywordsOnFocusHandler.bind(this)}):"",!0!==this.state.generationComplete?Object(x.jsx)(E,{text:"Choose Options and Generate Resume"}):"",!0!==this.state.generationComplete?Object(x.jsx)(ee,{styleKeywords:this.state.styleKeywords,styleKeywordsChangeHandler:this.handleStyleKeywordsChange.bind(this),changeHandler:this.handleStylingChange.bind(this),approachHandler:this.handleApproach.bind(this),highlight:this.state.highlight,highlightColor:this.state.highlightColor,highlightColorLabel:this.state.highlightColorLabel,highlightColorChangeHandler:this.handleHighlightColorChange.bind(this),italicizeApproach:this.state.italicizeApproach,underlineApproach:this.state.underlineApproach,boldfaceApproach:this.state.boldfaceApproach,highlightApproach:this.state.highlightApproach,underline:this.state.underline,italicize:this.state.italicize,boldface:this.state.boldface}):"",!0!==this.state.generationComplete?Object(x.jsx)(V,{styleKeywords:this.state.styleKeywords,getExampleSentence:this.getExampleSentence.bind(this)}):"",!0!==this.state.generationComplete?Object(x.jsx)(Z,{searchReplaceOnChangeHandler:this.searchReplaceOnChangeHandler.bind(this),searchOnFocusHandler:this.searchOnFocusHandler.bind(this),searchOnBlurHandler:this.searchOnBlurHandler.bind(this),replaceOnFocusHandler:this.replaceOnFocusHandler.bind(this),replaceOnBlurHandler:this.replaceOnBlurHandler.bind(this),search:this.state.search,replace:this.state.replace,searchReplace:this.state.searchReplace}):"",!0!==this.state.generationComplete?Object(x.jsx)(Q,{removeBulletsChangeHandler:this.handleDeleteBulletsChange.bind(this),removeBullets:this.state.removeBullets,startFrom:this.state.startFrom,endAt:this.state.endAt,keep:this.state.keep,startFromOnFocusHandler:this.startFromOnFocusHandler.bind(this),startFromOnBlurHandler:this.startFromOnBlurHandler.bind(this),endAtOnFocusHandler:this.endAtOnFocusHandler.bind(this),endAtOnBlurHandler:this.endAtOnBlurHandler.bind(this),keepOnFocusHandler:this.keepOnFocusHandler.bind(this),keepOnBlurHandler:this.keepOnBlurHandler.bind(this)}):"",!0!==this.state.generationComplete?Object(x.jsx)(P,{bracketsChangeHandler:this.handleBracketsChange.bind(this)}):"",!0!==this.state.generationComplete?Object(x.jsx)(G,{loaderVisible:this.state.loaderVisible,doSubmit:this.doSubmit.bind(this),generationComplete:this.state.generationComplete}):"",Object(x.jsx)(W,{doReset:this.doReset.bind(this),generationComplete:this.state.generationComplete}),this.state.generationComplete?Object(x.jsx)(I,{outputFilename:this.state.outputFilename,handleDownload:this.handleDownload.bind(this),percentageMatch:this.state.percentageMatch,chartData:this.assembleChartData()}):""]})}},{key:"handleUnderlineChange",value:function(e){this.setState({underline:e.target.checked})}},{key:"handleDeleteBulletsChange",value:function(e){this.setState({removeBullets:e.target.checked})}},{key:"searchReplaceOnChangeHandler",value:function(e){this.setState({searchReplace:e.target.checked})}},{key:"handleStyleKeywordsChange",value:function(e){this.setState({styleKeywords:e.target.checked})}},{key:"handleBracketsChange",value:function(e){this.setState({brackets:e.target.checked})}},{key:"handleStylingChange",value:function(e){var t="UnderlineCheckbox"===e.target.id,a="ItalicizeCheckbox"===e.target.id,l="HighlightCheckbox"===e.target.id,s="BoldfaceCheckbox"===e.target.id,n=e.target.checked;t?this.setState({underline:n}):a?this.setState({italicize:n}):l?this.setState({highlight:n}):s&&this.setState({boldface:n})}},{key:"handleApproach",value:function(e){var t="UnderlineApproach"===e.target.id,a="ItalicizeApproach"===e.target.id,l="HighlightApproach"===e.target.id,s="BoldfaceApproach"===e.target.id,n=e.target.value;t?this.setState({underlineApproach:n}):a?this.setState({italicizeApproach:n}):l?this.setState({highlightApproach:n}):s&&this.setState({boldfaceApproach:n})}}]),a}(d.a.Component);function E(e){var t=e.text;return Object(x.jsxs)(b.Fragment,{children:[Object(x.jsx)("div",{className:"facet-group-header-text",children:t}),Object(x.jsx)("hr",{className:"rounded"})]})}function T(e){var t=e.onFileChange,a=e.selectedFile,l=Object(h.useState)(0),s=Object(o.a)(l,2);s[0],s[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"search-replace-line",children:Object(x.jsx)("span",{className:"select-resume-label",children:"Select a Resume"})}),Object(x.jsx)("div",{className:"search-replace-line",children:Object(x.jsx)("input",{type:"file",onChange:t,className:"cust-button",defaultValue:a})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)(C,{tooltip:"<b>Select a Resume Details</b>: Select a resume in MS Word *.docx format. Please note that you will have to select the file to tailor each time due to security reasons"})})]})}function V(e){var t=e.styleKeywords,a=e.getExampleSentence;return Object(x.jsx)(b.Fragment,{children:t?Object(x.jsx)("div",{className:"example-sentence-indented",children:Object(c.a)(a())}):""})}function G(e){var t=e.loaderVisible,a=e.doSubmit,l=e.generationComplete;return Object(x.jsx)(b.Fragment,{children:t?Object(x.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:60,width:60,timeout:3e5,visible:t}):Object(x.jsx)(L,{doSubmit:a,generationComplete:l})})}function L(e){var t=e.doSubmit,a=e.generationComplete;return Object(x.jsx)(b.Fragment,{children:a?"":Object(x.jsx)("p",{children:Object(x.jsx)("input",{type:"button",onClick:t,value:"Generate Tailored Resume",className:"cust-button2"})})})}function W(e){var t=e.doReset,a=e.generationComplete;return Object(x.jsx)(b.Fragment,{children:a?Object(x.jsx)("p",{children:Object(x.jsx)("input",{type:"button",onClick:t,value:"Return to Setup",className:"cust-button"})}):""})}function q(e){var t=e.percentageMatch;return Object(x.jsxs)(b.Fragment,{children:[Object(x.jsxs)("div",{className:"facet-group-header-text",children:["Results ",null!==t?" - "+t+" Keyword Matches":""]}),Object(x.jsx)("hr",{className:"rounded"})]})}function I(e){var t=e.outputFilename,a=e.handleDownload,l=e.percentageMatch,s=e.chartData,n="./resume/download?filename="+t;return Object(x.jsxs)(b.Fragment,{children:[Object(x.jsx)(q,{percentageMatch:l,outputFilename:t}),null!==t?Object(x.jsxs)("div",{children:[Object(x.jsxs)("button",{onClick:function(){a(n,t)},className:"cust-button3",children:["Download Tailored Resume ",Object(x.jsx)("br",{})," ",t]}),Object(x.jsx)("p",{children:Object(x.jsx)(J,{chartData:s,percentageMatch:l})})]}):""]})}function J(e){var t=e.chartData,a=t.length>6?300+30*(t.length-6):300;a>800&&(a=800);var l=a+"px",s=a-50;return t.length>0?Object(x.jsx)(k.a,{width:"100%",height:l,chartType:"BarChart",loader:Object(x.jsx)("div",{children:"Loading Chart"}),data:t,options:{title:"Keyword Search Statistics",height:s,bar:{groupWidth:"95%"},legend:{position:"none"}}}):""}function U(e){var t=[];if(null!==e.uploadError){t.push("Server Error occurred ")}var a="";return t.forEach((function(e){a+='<img src="./error-icon.png" alt="errors present" className="validation-image"/> '+e+"<br/>"})),Object(x.jsx)(b.Fragment,{children:t.length>0?Object(x.jsx)("div",{className:"validation-message",children:Object(c.a)(a)}):""})}function Y(e){var t=e.styleKeywords,a=e.searchReplace,l=e.removeBullets,s=e.brackets,n=e.underline,r=e.italicize,i=e.boldface,o=e.highlight,h=e.keywords,d=e.search,u=e.replace,p=e.selectedFile,g=[];t||a||l||s||g.push("Missing option(s): Select at least one option (Style Keywords, Find and Replace, Remove Bullets..., Remove Brackets...)"),t&&(n||r||i||o||g.push("Missing style option(s): Select one or more options (italicize,underline,boldface,highlight)"),""===h.trim()&&g.push("Missing keyword(s): Enter at least one keyword to style")),a&&(""===d.trim()&&""===u.trim()&&g.push("Missing Find and Replace Values: Enter values or deselect 'Find and Replace'"),""===d.trim()&&""!==u.trim()&&g.push("Missing 'Find what' value: Enter a value"));null===p?g.push("No file selected"):!0!==p.name.toLowerCase().endsWith(".docx")?g.push("Invalid Resume Format: 'Choose File' in Word .docx format"):p.type!==N?g.push("Invalid Resume Format: Word .docx format must be of type "+N):p.size>6291456&&g.push("Uploaded File cannot be greater than 6 MB");var y="";return g.forEach((function(e){y+='<img src="./error-icon.png" alt="errors present" className="validation-image"/> '+e+"<br/>"})),Object(x.jsx)(b.Fragment,{children:g.length>0?Object(x.jsx)("div",{className:"validation-message",children:Object(c.a)(y)}):""})}function P(e){var t=e.bracketsChangeHandler;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"facet-group-option",children:[Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("input",{type:"checkbox",id:"bracketsCheckbox",onChange:function(e){return t(e)}})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("span",{className:"remove-bullets-styling-label",children:"Remove Brackets (Advanced)"})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)(C,{tooltip:"<p><b>Remove Brackets Explanation</b>:<br/>'Removing Brackets' results in the following:<ul><li>Before: Filled in as the Team's Database administrator [#Oracle,#DBA,#keepme,#leadership].</li><li>After: Filled in as the Team's Database administrator.</li></ul>This enables you to hide the keywords you are focused on by placing them in brackets. Imagine a resume with 20 bullets. And you want to only keep the six bullets with '#leadership' in brackets. Selecting both 'Remove Bullets without keywords' and 'Remove Brackets', then adding '#leadership' as a keyword enables this. And if you always want to show a bulleted paragraph, then adding a 'Keep' marker like '#keepme' makes it happen. </p><p>This feature ultimately can transform a big generic resume into a smaller resume focused on a job requirement. </p>"})})]}),Object(x.jsx)("div",{className:"search-replace-line",children:Object(x.jsx)("span",{className:"indent-span"})})]})}function Q(e){var t=e.removeBulletsChangeHandler,a=e.removeBullets,l=e.startFromOnFocusHandler,s=e.endAtOnFocusHandler,n=e.keepOnFocusHandler,r=e.startFromOnBlurHandler,i=e.endAtOnBlurHandler,o=e.keepOnBlurHandler,c=e.startFrom,h=e.endAt,d=e.keep;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"facet-group-option",children:[Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("input",{type:"checkbox",id:"removeBulletsCheckbox",onChange:function(e){return t(e)}})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("span",{className:"remove-bullets-styling-label",children:"Remove Bullets without keywords"})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)(C,{tooltip:"<b>Remove Bullets without Keywords Explanation</b>: This removes bullet paragraphs without keyword matches. 'Start From' defines the word or phrase where bullet removal begins in the Word document. 'End at' defines the word or phrase where bullet removal ends. 'Keep' words keeps bullets even though they have no matching keywords."})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(X,{show:a,onFocusHandler:l,onBlurHandler:r,labelText:"Start from:",defaultValue:""===c?S:c}),Object(x.jsx)(X,{show:a,onFocusHandler:s,onBlurHandler:i,labelText:"End at:",defaultValue:""===h?H:h}),Object(x.jsx)(X,{show:a,onFocusHandler:n,onBlurHandler:o,labelText:"Keep:",defaultValue:""===d?B:d})]})]})}function X(e){var t=e.show,a=e.onFocusHandler,l=e.onBlurHandler,s=e.labelText,n=e.defaultValue;return Object(x.jsx)(b.Fragment,{children:t?Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"search-replace-line",children:Object(x.jsx)("span",{className:"indent-span"})}),Object(x.jsx)("div",{className:"search-replace-line",children:Object(x.jsx)("span",{className:"search-replace-label",children:s})}),Object(x.jsx)("div",{className:"search-replace-line",children:Object(x.jsx)("input",{type:"text",className:"keyword",defaultValue:n,onBlur:function(e){l(e)},onFocus:function(e){return a(e)}})})]}):""})}function Z(e){var t=e.searchReplaceOnChangeHandler,a=e.searchOnFocusHandler,l=e.searchOnBlurHandler,s=e.replaceOnFocusHandler,n=e.replaceOnBlurHandler,r=e.search,i=e.replace,o=e.searchReplace;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"facet-group-option",children:[Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("input",{type:"checkbox",id:"searchReplaceCheckbox",onChange:function(e){return t(e)}})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("span",{className:"find-replace-styling-label",children:"Find and Replace"})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)(C,{tooltip:"<b>Find and Replace Hint</b>: You might replace the words <i>'Resume Title'</i> with the Job Title you are applying for."})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(X,{show:o,onFocusHandler:a,onBlurHandler:l,labelText:"Find what:",defaultValue:r}),Object(x.jsx)(X,{show:o,onFocusHandler:s,onBlurHandler:n,labelText:"Replace with:",defaultValue:i})]})]})}function $(e){var t=e.changeHandler,a=e.approachHandler,l=e.keywordStyling,s=l+"Checkbox",n=e.styleKeywords,r=e.approach,i=e.checked;return Object(x.jsx)(b.Fragment,{children:n?Object(x.jsxs)("div",{className:"facet-group-option",children:[Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("span",{className:"indent-span"})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("input",{type:"checkbox",id:s,onChange:function(e){return t(e)},checked:i})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("span",{className:"keyword-styling-label",children:l})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)(te,{approachHandler:a,keywordStyling:l,approach:r})})]}):""})}function _(e){var t=e.changeHandler,a=e.approachHandler,l=e.keywordStyling,s=l+"Checkbox",n=e.highlight,r=e.highlightColorChangeHandler,i=e.highlightColor,o=e.highlightColorLabel,c=e.styleKeywords,h=e.approach;return Object(x.jsx)(b.Fragment,{children:c?Object(x.jsxs)("div",{className:"facet-group-option",children:[Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("span",{className:"indent-span"})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("input",{type:"checkbox",id:s,onChange:function(e){return t(e)},checked:n})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("span",{className:"keyword-styling-label",children:l})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)(te,{approachHandler:a,keywordStyling:l,approach:h})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:!0===n?Object(x.jsx)(z,{className:"highlightColor",highlightColorChangeHandler:r,highlightColor:i,highlightColorLabel:o}):""})]}):""})}function ee(e){var t=e.changeHandler,a=e.approachHandler,l=e.highlight,s=e.highlightColorChangeHandler,n=e.highlightColor,r=e.highlightColorLabel,i=e.styleKeywordsChangeHandler,o=e.styleKeywords,c=e.italicizeApproach,h=e.boldfaceApproach,d=e.underlineApproach,u=e.highlightApproach,p=e.italicize,g=e.underline,y=e.boldface;return Object(x.jsxs)(b.Fragment,{children:[Object(x.jsxs)("div",{className:"facet-group-option",children:[Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("input",{type:"checkbox",id:"styleKeywordsCheckbox",onChange:function(e){return i(e)},checked:o})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)("span",{className:"remove-bullets-styling-label",children:"Style Keywords"})}),Object(x.jsx)("div",{className:"keyword-styling-line",children:Object(x.jsx)(C,{tooltip:"<b>Style Keywords Hint</b>: Select the <i>Italics</i>, <i>Boldface</i>, <i>Highlight</i>, <i>Underline</i> checkboxes to see the effect on the Example Sentence. Also try out the <i>Keywords</i> and <i>Sentences with Keywords</i> drop down values.  The chosen combination of styling effects seen in the Example Sentence are applied to the generated Word document."})})]}),Object(x.jsx)($,{styleKeywords:o,changeHandler:t,approachHandler:a,keywordStyling:"Italicize",approach:c,checked:p}),Object(x.jsx)($,{styleKeywords:o,changeHandler:t,approachHandler:a,keywordStyling:"Underline",approach:d,checked:g}),Object(x.jsx)($,{styleKeywords:o,changeHandler:t,approachHandler:a,keywordStyling:"Boldface",approach:h,checked:y}),Object(x.jsx)(_,{styleKeywords:o,changeHandler:t,approachHandler:a,keywordStyling:"Highlight",highlight:l,highlightColorChangeHandler:s,highlightColor:n,highlightColorLabel:r,approach:u})]})}function te(e){var t=e.approachHandler,a=e.keywordStyling,l=String(a).concat("Approach"),s=e.approach;return Object(x.jsxs)("select",{className:"facet-group-option",onChange:function(e){return t(e)},id:l,value:s,children:[Object(x.jsx)("option",{value:"keyword",children:"Keywords"}),Object(x.jsx)("option",{value:"sentence",children:"Sentences with Keywords"})]})}function ae(e){var t=e.keywordsOnBlurHandler,a=e.keywordsOnFocusHandler,l=e.keywords,s="200";return e.maxLength&&(s=String(e.maxLength)),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"search-replace-line",children:Object(x.jsx)("span",{className:"add-keywords-label",children:"Add Keywords"})}),Object(x.jsx)("div",{className:"search-replace-line",children:Object(x.jsx)("input",{type:"text",className:"keyword",maxLength:s,defaultValue:null===l||""===l.trim()?F:l,onBlur:function(e){t(e)},onFocus:function(e){return a(e)}})})]})}p.a.render(Object(x.jsx)(D,{}),document.getElementById("root"))},58:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.6c64f52b.chunk.js.map