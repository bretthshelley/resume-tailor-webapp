(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{44:function(e,t,a){"use strict";a.r(t);var l=a(6),s=a(7),r=a(8),n=a(43),i=a(20),c=a(9),o=a(13),h=a(0),d=a.n(h),u=a(10),p=a.n(u),g=a(42),b=a(3),y=(a(59),a(21)),j=a.n(y),m=a(36),v=a.n(m),k=a(37),O=a(39),f=(a(80),a(81),a(40)),w=a.n(f),x=a(41),C=a.n(x),F=a(1),S=function(e){var t=Object(h.useState)(!1),a=Object(c.a)(t,2),l=a[0],s=a[1],r=function(){return s(!1)},n=e.tooltip;return Object(F.jsxs)("div",{className:"tooltipDiv",children:[Object(F.jsx)("svg",{onClick:function(){return s((function(e){return!e}))},width:"14",height:"16",viewBox:"0 0 14 16",children:Object(F.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}),Object(F.jsx)(O.a,{open:l,closeOnDocumentClick:!0,onClose:r,arrow:"true",position:"right center",children:Object(F.jsxs)("div",{className:"modal",children:[Object(F.jsx)("a",{className:"close",onClick:r,children:"\xd7"}),Object(F.jsx)("span",{className:"tooltipSentence",children:Object(o.a)(n)})]})})]})},H="Keywords separated by commas",N="Optional word or phrase",B="Optional word or phrase",A="Optional words or phrases separated by commas",R="application/vnd.openxmlformats-officedocument.wordprocessingml.document",K=[{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"lightGray",label:"Light Gray"},{value:"magenta",label:"Magenta"},{value:"red",label:"Red"},{value:"blue",label:"Blue"},{value:"cyan",label:"Cyan"},{value:"darkBlue",label:"Dark Blue"},{value:"darkCyan",label:"Dark Cyan"},{value:"darkGray",label:"Dark Gray"},{value:"darkMagenta",label:"Dark Magenta"},{value:"darkRed",label:"Dark Red"},{value:"darkYellow",label:"Dark Yellow"},{value:"darkGreen",label:"Dark Green"},{value:"black",label:"Black"},{value:"white",label:"White"}],M={yellow:"black",green:"white",lightGray:"black",magenta:"white",red:"white",blue:"white",cyan:"black",darkBlue:"white",darkCyan:"white",darkGray:"white",darkMagenta:"white",darkRed:"white",darkYellow:"black",darkGreen:"white",black:"white",white:"black"},D={yellow:"yellow",green:"green",lightGray:"lightGray",magenta:"magenta",red:"red",blue:"blue",cyan:"cyan",darkBlue:"darkBlue",darkCyan:"darkCyan",darkGray:"darkGray",darkMagenta:"darkMagenta",darkRed:"darkRed",darkYellow:"#CCCC00",darkGreen:"darkGreen",black:"black",white:"white"},z={singleValue:function(e,t){var a=t.data;return Object(i.a)(Object(i.a)({},e),{},{color:M[a.value]?M[a.value]:"black",background:D[a.value]?D[a.value]:"white",innerWidth:200,outerWidth:220})}};function E(e){var t=e.highlightColorChangeHandler,a=e.highlightColor,l={label:e.highlightColorLabel,value:a};return Object(F.jsx)("div",{style:{marginLeft:"120px",marginTop:"10px"},children:Object(F.jsx)("div",{style:{width:"170px"},children:Object(F.jsx)(g.a,{options:K,styles:z,onChange:function(e){return t(e)},defaultValue:l,menuPlacement:"auto",menuPosition:"fixed"})})})}var V=function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleDownload=function(e,t){j.a.get(e,{responseType:"blob"}).then((function(e){v()(e.data,t)}))},s.onFileChange=function(e){void 0!==e.target&&null!==e.target&&null!==e.target.files[0]&&void 0!==e.target.files[0]?(console.log("selected file target: "+e.target.files[0].name),s.setState({selectedFile:e.target.files[0]})):(console.log("selected file : null"),s.setState({selectedFile:null}))},s.doResumeUpload=function(){s.setState({uploadError:null,uploadResponse:null,outputFilename:null,unmatchedKeywords:null,stats:null,percentageMatch:null,loaderVisible:!0,generationComplete:!1});var e=new FormData;e.append("file",s.state.selectedFile,s.state.selectedFile.name);var t=s.buildMainRequestBody();e.append("json",t),j.a.post("resume/upload",e,{}).then((function(e){s.setState({outputFilename:e.data.outputFilename,unmatchedKeywords:e.data.unmatchedKeywords,stats:e.data.stats,percentageMatch:e.data.percentageMatch,loaderVisible:!1,generationComplete:!0})})).catch((function(e){s.setState({uploadError:e,loaderVisible:!1,generationComplete:!1})}))},s.handleChange=function(e){s.setState({selectedOption:e})},s.state={keywords:null,keywordArray:[],styleKeywords:!0,underline:!1,underlineApproach:"keyword",italicize:!1,italicizeApproach:"keyword",highlight:!1,highlightApproach:"keyword",highlightColor:"yellow",highlightColorLabel:"Yellow",boldface:!1,boldfaceApproach:"keyword",selectedOption:null,searchReplace:!1,search:"",replace:"",removeBullets:!1,startFrom:"",endAt:"",keep:"",brackets:!1,showBracketDetails:!1,validationErrors:[],validationInProgress:!1,mainRequestBody:"",selectedFile:null,uploadError:null,uploadResponse:null,outputFilename:null,stats:null,unmatchedKeywords:[],percentageMatch:null,loaderVisible:!1,generationComplete:!1},s}return Object(s.a)(a,[{key:"doReset",value:function(){this.setState({generationComplete:!1,loaderVisible:!1,stats:null,unmatchedKeywords:null,outputFilename:null,percentageMatch:null})}},{key:"doSubmit",value:function(){if(this.setState({validationInProgress:!0}),this.isInputValid()){var e=this.buildMainRequestBody();this.setState({mainRequestBody:e}),this.doResumeUpload()}}},{key:"buildMainRequestBody",value:function(){var e="{";this.buildKeywordsArrayString(),"{"!==(e+=this.buildKeywordStyleRequest())&&(e+=","),e+=this.buildSearchAndReplaceRequest();var t=this.buildTrimBulletsRequest();return"{"!==e&&!0!==e.endsWith(",")&&(e+=","),"{"!==(e+=t)&&!0!==e.endsWith(",")&&(e+=","),"{"!==(e+='"removeKeywordlessBullets":'+this.state.removeBullets)&&!0!==e.endsWith(",")&&(e+=","),e+='"removeBracketedStrings":'+this.state.brackets,e+="}"}},{key:"buildTrimBulletsRequest",value:function(){var e="";return!1===this.state.removeBullets?e:(e+='"trimBulletsRequest": {',""!==this.state.startFrom&&(e+='"fromMarker": '+JSON.stringify(this.state.startFrom)+","),""!==this.state.endAt&&(e+='"toMarker": '+JSON.stringify(this.state.endAt)+","),""!==this.state.keep&&(e+='"keepBulletMarkers": '+JSON.stringify(this.buildKeepWordsArray())),e.endsWith(",")&&(e=e.substring(0,e.length-1)),e+="}")}},{key:"buildSearchAndReplaceRequest",value:function(){var e="";return!1===this.state.searchReplace?e:(e+='"searchAndReplaceRequest":{"searchReplaceMap":{',e+=JSON.stringify(this.state.search),e+=": ",e+=JSON.stringify(this.state.replace),e+="}}")}},{key:"buildKeepWordsArray",value:function(){var e=[];return-1===this.state.keep.indexOf(",")?(e.push(this.state.keep.trim()),e):(this.state.keep.split(",").forEach((function(t){var a=t.trim();""!==a&&e.push(a)})),e)}},{key:"buildKeywordsArrayString",value:function(){var e=[];return-1===this.state.keywords.indexOf(",")?(e.push(this.state.keywords.trim()),this.setState({keywordArray:e}),JSON.stringify(e)):(this.state.keywords.split(",").forEach((function(t){var a=t.trim();""!==a&&e.push(a)})),this.setState({keywordArray:e}),JSON.stringify(e))}},{key:"buildKeywordStyleRequest",value:function(){var e="";return!1===this.state.styleKeywords?e:(e+='"keywordStyleRequest": {',e+='"highlightKeywords":'+(this.state.highlight&&"keyword"===this.state.highlightApproach)+",",e+='"highlightSentence":'+(this.state.highlight&&"sentence"===this.state.highlightApproach)+",",e+='"boldfaceKeywords":'+(this.state.boldface&&"keyword"===this.state.boldfaceApproach)+",",e+='"boldfaceSentence":'+(this.state.boldface&&"sentence"===this.state.boldfaceApproach)+",",e+='"italicizeKeywords":'+(this.state.italicize&&"keyword"===this.state.italicizeApproach)+",",e+='"italicizeSentence":'+(this.state.italicize&&"sentence"===this.state.italicizeApproach)+",",e+='"underlineKeywords":'+(this.state.underline&&"keyword"===this.state.underlineApproach)+",",e+='"underlineSentence":'+(this.state.underline&&"sentence"===this.state.underlineApproach)+",",e+='"highlightColor":"'+this.state.highlightColor+'",',e+='"keywords":'+this.buildKeywordsArrayString(),e+="}")}},{key:"isInputValid",value:function(){if(!this.state.styleKeywords&&!this.state.searchReplace&&!this.state.removeBullets&&!this.state.brackets)return console.log("no options selected"),!1;if(this.state.styleKeywords){if(!this.state.underline&&!this.state.italicize&&!this.state.boldface&&!this.state.highlight)return console.log("no styling options selected"),!1;if(""===this.state.keywords.trim())return console.log("no keywords added"),!1}if(this.state.searchReplace){if(""===this.state.search.trim()&&""===this.state.replace.trim())return console.log("no search/replace criteria defined"),!1;if(""===this.state.search.trim()&&""!==this.state.replace.trim())return console.log("no search criteria defined to replace"),!1}return null===this.state.selectedFile?(console.log("no file selected"),!1):!0!==this.state.selectedFile.name.toLowerCase().endsWith(".docx")?(console.log("selected file not a .docx"),!1):this.state.selectedFile.type!==R?(console.log("selected file not word document type"),!1):!(this.state.selectedFile.size>6291456)||(console.log("max file size exceeded"),!1)}},{key:"keywordsOnBlurHandler",value:function(e){var t=e.target.value.trim();console.log("onBlur: keywords are now: "+t),t===H&&(t=""),""===t&&(e.target.value=H),this.setState({keywords:t})}},{key:"keywordsOnFocusHandler",value:function(e){var t=this.state.keywords;e.target.value=t}},{key:"startFromOnFocusHandler",value:function(e){var t=this.state.startFrom;e.target.value=t}},{key:"startFromOnBlurHandler",value:function(e){var t=e.target.value.trim();t===N&&(t=""),""===t&&(e.target.value=N),this.setState({startFrom:t})}},{key:"endAtOnFocusHandler",value:function(e){var t=this.state.endAt;e.target.value=t}},{key:"endAtOnBlurHandler",value:function(e){var t=e.target.value.trim();t===B&&(t=""),""===t&&(e.target.value=B),this.setState({endAt:t})}},{key:"keepOnFocusHandler",value:function(e){var t=this.state.keep;e.target.value=t}},{key:"keepOnBlurHandler",value:function(e){var t=e.target.value.trim();t===A&&(t=""),""===t&&(e.target.value=A),this.setState({keep:t})}},{key:"searchOnFocusHandler",value:function(e){var t=this.state.search;e.target.value=t}},{key:"searchOnBlurHandler",value:function(e){var t=e.target.value.trim();""===t&&(t=""),""===t&&(e.target.value=""),this.setState({search:t})}},{key:"replaceOnFocusHandler",value:function(e){var t=this.state.replace;e.target.value=t}},{key:"replaceOnBlurHandler",value:function(e){var t=e.target.value.trim();""===t&&(t=""),""===t&&(e.target.value=""),this.setState({replace:t})}},{key:"handleStartFromChange",value:function(e){var t=e.target.value.trim();t.trim()===N&&(t=""),""===t.trim()&&(e.target.value=N),this.setState({startFrom:t})}},{key:"handleEndAtChange",value:function(e){var t=e.target.value.trim();t.trim()===B&&(t=""),""===t.trim()&&(e.target.value=B),this.setState({endAt:t})}},{key:"handleDontRemoveChange",value:function(e){var t=e.target.value.trim();t.trim()===A&&(t=""),""===t.trim()&&(e.target.value=A),this.setState({keep:t})}},{key:"handleReplaceChange",value:function(e){var t=e.target.value.trim();this.setState({replace:t})}},{key:"handleHighlightColorChange",value:function(e){this.setState({highlightColor:String(e.value),highlightColorLabel:e.label})}},{key:"getSpanStyleForColor",value:function(e){return"<span className='"+e+"Highlight'>"}},{key:"getExampleSentence",value:function(){var e="Example: ",t=this.state.boldface&&"sentence"===this.state.boldfaceApproach,a=this.state.italicize&&"sentence"===this.state.italicizeApproach,l=this.state.underline&&"sentence"===this.state.underlineApproach,s=this.state.highlight&&"sentence"===this.state.highlightApproach,r=this.state.boldface&&"keyword"===this.state.boldfaceApproach,n=this.state.italicize&&"keyword"===this.state.italicizeApproach,i=this.state.underline&&"keyword"===this.state.underlineApproach,c=this.state.highlight&&"keyword"===this.state.highlightApproach;return e+=t?"<b>":"",e+=a?"<i>":"",e+=l?"<u>":"",e+=s?this.getSpanStyleForColor(this.state.highlightColor):"",e+="This sentence contains keywords ",e+=r?"<b>":"",e+=n?"<i>":"",e+=i?"<u>":"",e+=c?this.getSpanStyleForColor(this.state.highlightColor):"",e+="Java",e+=c?"</span>":"",e+=i?"</u>":"",e+=n?"</i>":"",e+=r?"</b>":"",e+=" and ",e+=r?"<b>":"",e+=n?"<i>":"",e+=i?"<u>":"",e+=c?this.getSpanStyleForColor(this.state.highlightColor):"",e+="Oracle",e+=c?"</span>":"",e+=i?"</u>":"",e+=n?"</i>":"",e+=r?"</b>":"",e+=".",e+=s?"</span>":"",e+=l?"</u>":"",e+=a?"</i>":"",e+=t?"</b>":"",e+=" This second sentence has no keywords and will not be styled."}},{key:"htmlDecode",value:function(e){var t=document.createElement("div");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue}},{key:"getChartDataColor",value:function(e){var t=e%10;return 0===t?"green":1===t?"black":2===t?"blue":3===t?"orange":4===t?"purple":5===t?"yellow":6===t?"magenta":7===t?"gray":8===t?"cyan":9===t?"red":void 0}},{key:"assembleChartData",value:function(){var e=this,t=this.state.stats,a=[["Keyword","Matches Found",{role:"style"},{sourceColumn:0,role:"annotation",type:"string",calc:"stringify"}]];if(null!==t){var l=0;Object.entries(t).map((function(t){var s=Object(c.a)(t,2),r=s[0],n=s[1];return a.push([r,n,e.getChartDataColor(l),null]),++l}));var s=0;for(s=0;s<this.state.unmatchedKeywords.length;s++){var r=this.state.unmatchedKeywords[s];a.push([r,0,this.getChartDataColor(l+s),null])}}return a.length<2?[]:a}},{key:"render",value:function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(X,{uploadError:this.state.uploadError}),this.state.validationInProgress?Object(F.jsx)(Z,{validationErrors:this.state.validationErrors,styleKeywords:this.state.styleKeywords,searchReplace:this.state.searchReplace,removeBullets:this.state.removeBullets,brackets:this.state.brackets,underline:this.state.underline,italicize:this.state.italicize,boldface:this.state.boldface,highlight:this.state.highlight,keywords:this.state.keywords,search:this.state.search,replace:this.state.replace,selectedFile:this.state.selectedFile}):"",!0!==this.state.generationComplete?Object(F.jsx)(L,{text:"Resume Tailor Setup"}):"",!0!==this.state.generationComplete?Object(F.jsx)(T,{onFileChange:this.onFileChange.bind(this),selectedFile:this.state.selectedFile}):"",!0!==this.state.generationComplete?Object(F.jsx)(ge,{keywords:this.state.keywords,keywordsOnBlurHandler:this.keywordsOnBlurHandler.bind(this),keywordsOnFocusHandler:this.keywordsOnFocusHandler.bind(this)}):"",!0!==this.state.generationComplete?Object(F.jsx)(L,{text:"Choose Options and Generate Resume"}):"",!0!==this.state.generationComplete?Object(F.jsx)(se,{styleKeywords:this.state.styleKeywords,styleKeywordsChangeHandler:this.handleStyleKeywordsChange.bind(this),changeHandler:this.handleStylingChange.bind(this),approachHandler:this.handleApproach.bind(this),highlight:this.state.highlight,highlightColor:this.state.highlightColor,highlightColorLabel:this.state.highlightColorLabel,highlightColorChangeHandler:this.handleHighlightColorChange.bind(this),italicizeApproach:this.state.italicizeApproach,underlineApproach:this.state.underlineApproach,boldfaceApproach:this.state.boldfaceApproach,highlightApproach:this.state.highlightApproach,underline:this.state.underline,italicize:this.state.italicize,boldface:this.state.boldface}):"",!0!==this.state.generationComplete?Object(F.jsx)(W,{styleKeywords:this.state.styleKeywords,getExampleSentence:this.getExampleSentence.bind(this)}):"",!0!==this.state.generationComplete?Object(F.jsx)(te,{searchReplaceOnChangeHandler:this.searchReplaceOnChangeHandler.bind(this),searchOnFocusHandler:this.searchOnFocusHandler.bind(this),searchOnBlurHandler:this.searchOnBlurHandler.bind(this),replaceOnFocusHandler:this.replaceOnFocusHandler.bind(this),replaceOnBlurHandler:this.replaceOnBlurHandler.bind(this),search:this.state.search,replace:this.state.replace,searchReplace:this.state.searchReplace}):"",!0!==this.state.generationComplete?Object(F.jsx)(_,{removeBulletsChangeHandler:this.handleDeleteBulletsChange.bind(this),removeBullets:this.state.removeBullets,startFrom:this.state.startFrom,endAt:this.state.endAt,keep:this.state.keep,startFromOnFocusHandler:this.startFromOnFocusHandler.bind(this),startFromOnBlurHandler:this.startFromOnBlurHandler.bind(this),endAtOnFocusHandler:this.endAtOnFocusHandler.bind(this),endAtOnBlurHandler:this.endAtOnBlurHandler.bind(this),keepOnFocusHandler:this.keepOnFocusHandler.bind(this),keepOnBlurHandler:this.keepOnBlurHandler.bind(this)}):"",!0!==this.state.generationComplete?Object(F.jsx)($,{bracketsChangeHandler:this.handleBracketsChange.bind(this)}):"",!0!==this.state.generationComplete?Object(F.jsx)(q,{loaderVisible:this.state.loaderVisible,doSubmit:this.doSubmit.bind(this),generationComplete:this.state.generationComplete}):"",Object(F.jsx)(J,{doReset:this.doReset.bind(this),generationComplete:this.state.generationComplete}),this.state.generationComplete?Object(F.jsx)(P,{outputFilename:this.state.outputFilename,filename:this.state.selectedFile.name,handleDownload:this.handleDownload.bind(this),percentageMatch:this.state.percentageMatch,chartData:this.assembleChartData(),keywordArray:this.state.keywordArray,stats:this.state.stats,unmatchedKeywords:this.state.unmatchedKeywords}):""]})}},{key:"handleUnderlineChange",value:function(e){this.setState({underline:e.target.checked})}},{key:"handleDeleteBulletsChange",value:function(e){this.setState({removeBullets:e.target.checked})}},{key:"searchReplaceOnChangeHandler",value:function(e){this.setState({searchReplace:e.target.checked})}},{key:"handleStyleKeywordsChange",value:function(e){this.setState({styleKeywords:e.target.checked})}},{key:"handleBracketsChange",value:function(e){this.setState({brackets:e.target.checked})}},{key:"handleStylingChange",value:function(e){var t="UnderlineCheckbox"===e.target.id,a="ItalicizeCheckbox"===e.target.id,l="HighlightCheckbox"===e.target.id,s="BoldfaceCheckbox"===e.target.id,r=e.target.checked;t?this.setState({underline:r}):a?this.setState({italicize:r}):l?this.setState({highlight:r}):s&&this.setState({boldface:r})}},{key:"handleApproach",value:function(e){var t="UnderlineApproach"===e.target.id,a="ItalicizeApproach"===e.target.id,l="HighlightApproach"===e.target.id,s="BoldfaceApproach"===e.target.id,r=e.target.value;t?this.setState({underlineApproach:r}):a?this.setState({italicizeApproach:r}):l?this.setState({highlightApproach:r}):s&&this.setState({boldfaceApproach:r})}}]),a}(d.a.Component);function L(e){var t=e.text;return Object(F.jsxs)(b.Fragment,{children:[Object(F.jsx)("div",{className:"facet-group-header-text",children:t}),Object(F.jsx)("hr",{className:"rounded"})]})}function T(e){var t=e.onFileChange,a=e.selectedFile,l=d.a.useRef(null);return Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsx)("span",{className:"select-resume-label",children:"Select a Resume"})}),Object(F.jsxs)("div",{className:"search-replace-line",children:[Object(F.jsx)("input",{type:"button",onClick:function(e){l.current.click()},value:"Upload in .docx format",className:"cust-button"}),Object(F.jsx)("input",{type:"file",ref:l,onChange:t,className:"cust-button",style:{display:"none"}})]}),Object(F.jsx)(G,{selectedFile:a})]})}function G(e){var t=e.selectedFile;return console.log("Selected File: "+t),Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsxs)("span",{children:["\xa0\xa0",null!==t&&void 0!==t?t.name:"No file selected"]})})}function W(e){var t=e.styleKeywords,a=e.getExampleSentence;return Object(F.jsx)(b.Fragment,{children:t?Object(F.jsx)("div",{className:"example-sentence-indented",children:Object(o.a)(a())}):""})}function q(e){var t=e.loaderVisible,a=e.doSubmit,l=e.generationComplete;return Object(F.jsx)(b.Fragment,{children:t?Object(F.jsx)(w.a,{type:"ThreeDots",color:"#00BFFF",height:60,width:60,timeout:3e5,visible:t}):Object(F.jsx)(I,{doSubmit:a,generationComplete:l})})}function I(e){var t=e.doSubmit,a=e.generationComplete;return Object(F.jsx)(b.Fragment,{children:a?"":Object(F.jsx)("p",{children:Object(F.jsx)("input",{type:"button",onClick:t,value:"Generate Tailored Resume",className:"cust-button2"})})})}function J(e){var t=e.doReset,a=e.generationComplete;return Object(F.jsx)(b.Fragment,{children:a?Object(F.jsx)("p",{children:Object(F.jsx)("input",{type:"button",onClick:t,value:"Return to Setup",className:"cust-button"})}):""})}function U(e){return Object(F.jsxs)(b.Fragment,{children:[Object(F.jsx)("div",{className:"facet-group-header-text",children:"Results"}),Object(F.jsx)("hr",{className:"rounded"})]})}function Y(e){return Object(F.jsxs)(b.Fragment,{children:[Object(F.jsx)("div",{className:"facet-group-header-text",children:"Detailed Results"}),Object(F.jsx)("hr",{className:"rounded"})]})}function P(e){var t=e.filename,a=e.outputFilename,l=e.handleDownload,s=e.percentageMatch,r=e.chartData,n="./resume/download?filename="+a,i=e.keywordArray,c=e.stats,o=e.unmatchedKeywords;return console.log("ResultsSection: filename "+t+" keywordArray: "+JSON.stringify(i)),Object(F.jsxs)(b.Fragment,{children:[Object(F.jsx)(U,{}),null!==a?Object(F.jsxs)("div",{children:[Object(F.jsxs)("button",{onClick:function(){l(n,a)},className:"cust-button2",children:["Download Tailored Resume",Object(F.jsx)("br",{}),a]}),Object(F.jsx)("p",{children:Object(F.jsx)(Q,{chartData:r,percentageMatch:s})})]}):"",Object(F.jsx)(Y,{}),Object(F.jsx)(ue,{percentageMatch:s}),Object(F.jsx)(pe,{keywordArray:i}),Object(F.jsx)(ne,{stats:c}),Object(F.jsx)(ie,{unmatchedKeywords:o}),Object(F.jsx)(oe,{filename:t}),Object(F.jsx)(he,{filename:a}),Object(F.jsx)(ce,{})]})}function Q(e){var t=e.chartData,a=t.length>6?300+30*(t.length-6):300;a>800&&(a=800);var l=a+"px",s=a-50;return t.length>0?Object(F.jsx)(k.a,{width:"100%",height:l,chartType:"BarChart",loader:Object(F.jsx)("div",{children:"Loading Chart"}),data:t,options:{title:"Keyword Search Statistics",height:s,bar:{groupWidth:"95%"},legend:{position:"none"}}}):""}function X(e){var t=[];if(null!==e.uploadError){t.push("Server Error occurred ")}var a="";return t.forEach((function(e){a+='<img src="./error-icon.png" alt="errors present" className="validation-image"/> '+e+"<br/>"})),Object(F.jsx)(b.Fragment,{children:t.length>0?Object(F.jsx)("div",{className:"validation-message",children:Object(o.a)(a)}):""})}function Z(e){var t=e.styleKeywords,a=e.searchReplace,l=e.removeBullets,s=e.brackets,r=e.underline,n=e.italicize,i=e.boldface,c=e.highlight,h=e.keywords,d=e.search,u=e.replace,p=e.selectedFile,g=[];t||a||l||s||g.push("Missing option(s): Select at least one option (Style Keywords, Find and Replace, Remove Bullets..., Remove Brackets...)"),t&&(r||n||i||c||g.push("Missing style option(s): Select one or more options (italicize,underline,boldface,highlight)"),null!==h&&""!==h.trim()||g.push("Missing keyword(s): Enter at least one keyword to style")),a&&(""===d.trim()&&""===u.trim()&&g.push("Missing Find and Replace Values: Enter values or deselect 'Find and Replace'"),""===d.trim()&&""!==u.trim()&&g.push("Missing 'Find what' value: Enter a value"));null===p?g.push("No file selected"):!0!==p.name.toLowerCase().endsWith(".docx")?g.push("Invalid Resume Format: 'Choose File' in Word .docx format"):p.type!==R?g.push("Invalid Resume Format: Word .docx format must be of type "+R):p.size>6291456&&g.push("Uploaded File cannot be greater than 6 MB");var y="";return g.forEach((function(e){y+='<img src="./error-icon.png" alt="errors present" className="validation-image"/> '+e+"<br/>"})),Object(F.jsx)(b.Fragment,{children:g.length>0?Object(F.jsx)("div",{className:"validation-message",children:Object(o.a)(y)}):""})}function $(e){var t=e.bracketsChangeHandler;return Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{className:"facet-group-option",children:[Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("input",{type:"checkbox",id:"bracketsCheckbox",onChange:function(e){return t(e)}})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("span",{className:"remove-bullets-styling-label",children:"Remove Brackets (Advanced)"})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)(S,{tooltip:"<p><b>Remove Brackets Explanation</b>:<br/>'Removing Brackets' results in the following:<ul><li>Before: Filled in as the Team's Database administrator [#Oracle,#DBA,#keepme,#leadership].</li><li>After: Filled in as the Team's Database administrator.</li></ul>This enables you to hide the keywords you are focused on by placing them in brackets. Imagine a resume with 20 bullets. And you want to only keep the six bullets with '#leadership' in brackets. Selecting both 'Remove Bullets without keywords' and 'Remove Brackets', then adding '#leadership' as a keyword enables this. And if you always want to show a bulleted paragraph, then adding a 'Keep' marker like '#keepme' makes it happen. </p><p>This feature ultimately can transform a big generic resume into a smaller resume focused on a job requirement. </p>"})})]}),Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsx)("span",{className:"indent-span"})})]})}function _(e){var t=e.removeBulletsChangeHandler,a=e.removeBullets,l=e.startFromOnFocusHandler,s=e.endAtOnFocusHandler,r=e.keepOnFocusHandler,n=e.startFromOnBlurHandler,i=e.endAtOnBlurHandler,c=e.keepOnBlurHandler,o=e.startFrom,h=e.endAt,d=e.keep;return Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{className:"facet-group-option",children:[Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("input",{type:"checkbox",id:"removeBulletsCheckbox",onChange:function(e){return t(e)}})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("span",{className:"remove-bullets-styling-label",children:"Remove Bullets without keywords"})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)(S,{tooltip:"<b>Remove Bullets without Keywords Explanation</b>: This removes bullet paragraphs without keyword matches. 'Start From' defines the word or phrase where bullet removal begins in the Word document. 'End at' defines the word or phrase where bullet removal ends. 'Keep' words keeps bullets even though they have no matching keywords."})})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)(ee,{show:a,onFocusHandler:l,onBlurHandler:n,labelText:"Start from:",defaultValue:""===o?N:o}),Object(F.jsx)(ee,{show:a,onFocusHandler:s,onBlurHandler:i,labelText:"End at:",defaultValue:""===h?B:h}),Object(F.jsx)(ee,{show:a,onFocusHandler:r,onBlurHandler:c,labelText:"Keep:",defaultValue:""===d?A:d})]})]})}function ee(e){var t=e.show,a=e.onFocusHandler,l=e.onBlurHandler,s=e.labelText,r=e.defaultValue;return Object(F.jsx)(b.Fragment,{children:t?Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsx)("span",{className:"indent-span"})}),Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsx)("span",{className:"search-replace-label",children:s})}),Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsx)("input",{type:"text",className:"keyword",defaultValue:r,onBlur:function(e){l(e)},onFocus:function(e){return a(e)}})})]}):""})}function te(e){var t=e.searchReplaceOnChangeHandler,a=e.searchOnFocusHandler,l=e.searchOnBlurHandler,s=e.replaceOnFocusHandler,r=e.replaceOnBlurHandler,n=e.search,i=e.replace,c=e.searchReplace;return Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{className:"facet-group-option",children:[Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("input",{type:"checkbox",id:"searchReplaceCheckbox",onChange:function(e){return t(e)}})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("span",{className:"find-replace-styling-label",children:"Find and Replace"})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)(S,{tooltip:"<b>Find and Replace Hint</b>: You might replace the words <i>'Resume Title'</i> with the Job Title you are applying for."})})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)(ee,{show:c,onFocusHandler:a,onBlurHandler:l,labelText:"Find what:",defaultValue:n}),Object(F.jsx)(ee,{show:c,onFocusHandler:s,onBlurHandler:r,labelText:"Replace with:",defaultValue:i})]})]})}function ae(e){var t=e.changeHandler,a=e.approachHandler,l=e.keywordStyling,s=l+"Checkbox",r=e.styleKeywords,n=e.approach,i=e.checked;return Object(F.jsx)(b.Fragment,{children:r?Object(F.jsxs)("div",{className:"facet-group-option",children:[Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("span",{className:"indent-span"})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("input",{type:"checkbox",id:s,onChange:function(e){return t(e)},checked:i})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("span",{className:"keyword-styling-label",children:l})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)(re,{approachHandler:a,keywordStyling:l,approach:n})})]}):""})}function le(e){var t=e.changeHandler,a=e.approachHandler,l=e.keywordStyling,s=l+"Checkbox",r=e.highlight,n=e.highlightColorChangeHandler,i=e.highlightColor,c=e.highlightColorLabel,o=e.styleKeywords,h=e.approach;return Object(F.jsx)(b.Fragment,{children:o?Object(F.jsxs)("div",{className:"facet-group-option",children:[Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("span",{className:"indent-span"})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("input",{type:"checkbox",id:s,onChange:function(e){return t(e)},checked:r})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("span",{className:"keyword-styling-label",children:l})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)(re,{approachHandler:a,keywordStyling:l,approach:h})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:!0===r?Object(F.jsx)(E,{className:"highlightColor",highlightColorChangeHandler:n,highlightColor:i,highlightColorLabel:c}):""})]}):""})}function se(e){var t=e.changeHandler,a=e.approachHandler,l=e.highlight,s=e.highlightColorChangeHandler,r=e.highlightColor,n=e.highlightColorLabel,i=e.styleKeywordsChangeHandler,c=e.styleKeywords,o=e.italicizeApproach,h=e.boldfaceApproach,d=e.underlineApproach,u=e.highlightApproach,p=e.italicize,g=e.underline,y=e.boldface;return Object(F.jsxs)(b.Fragment,{children:[Object(F.jsxs)("div",{className:"facet-group-option",children:[Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("input",{type:"checkbox",id:"styleKeywordsCheckbox",onChange:function(e){return i(e)},checked:c})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)("span",{className:"remove-bullets-styling-label",children:"Style Keywords"})}),Object(F.jsx)("div",{className:"keyword-styling-line",children:Object(F.jsx)(S,{tooltip:"<b>Style Keywords Hint</b>: Select the <i>Italics</i>, <i>Boldface</i>, <i>Highlight</i>, <i>Underline</i> checkboxes to see the effect on the Example Sentence. Also try out the <i>Keywords</i> and <i>Sentences with Keywords</i> drop down values.  The chosen combination of styling effects seen in the Example Sentence are applied to the generated Word document."})})]}),Object(F.jsx)(ae,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Italicize",approach:o,checked:p}),Object(F.jsx)(ae,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Underline",approach:d,checked:g}),Object(F.jsx)(ae,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Boldface",approach:h,checked:y}),Object(F.jsx)(le,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Highlight",highlight:l,highlightColorChangeHandler:s,highlightColor:r,highlightColorLabel:n,approach:u})]})}function re(e){var t=e.approachHandler,a=e.keywordStyling,l=String(a).concat("Approach"),s=e.approach;return Object(F.jsxs)("select",{className:"facet-group-option",onChange:function(e){return t(e)},id:l,value:s,children:[Object(F.jsx)("option",{value:"keyword",children:"Keywords"}),Object(F.jsx)("option",{value:"sentence",children:"Sentences with Keywords"})]})}function ne(e){var t=e.stats,a="No matches found",l=[];if(null!==t){var s=0;Object.entries(t).map((function(e){var t=Object(c.a)(e,2),a=t[0]+" ("+t[1]+")";return l.push(a),s++})),l.length>0&&(a=l.join(", "))}return Object(F.jsx)(de,{resultLabel:"Matches Found",resultValue:a})}function ie(e){var t=e.unmatchedKeywords,a="No unmatched keywords";return null!==t&&t.length>0&&(a=(t=t.sort((function(e,t){return e.localeCompare(t)}))).join(", ")),Object(F.jsx)(de,{resultLabel:"Unmatched Keywords",resultValue:a})}function ce(e){var t=C()().format("MMM-DD-YYYY hh:mm:ss a");return Object(F.jsx)(de,{resultLabel:"Results Timestamp",resultValue:t})}function oe(e){var t=e.filename;return Object(F.jsx)(de,{resultLabel:"Original Doc",resultValue:t})}function he(e){var t=e.filename;return Object(F.jsx)(de,{resultLabel:"Updated Doc",resultValue:t})}function de(e){var t=e.resultLabel,a=e.resultValue;return Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsx)("span",{className:"add-keywords-label",children:Object(F.jsxs)("b",{children:[t,":\xa0"]})})}),Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsx)("span",{className:"keywords-listing-label",children:a})})]})}function ue(e){var t=e.percentageMatch,a="Not Applicable";return null!==t&&""!==t.trim()&&(a=t),Object(F.jsx)(de,{resultLabel:"Overall Match",resultValue:a})}function pe(e){var t=e.keywordArray;console.log(":KeywordResultsListing: keywordArray = "+JSON.stringify(t));var a="None";return null!==t&&t.length>0&&(t=t.sort((function(e,t){return e.localeCompare(t)}))).length>0&&(a=t.join(", ")),Object(F.jsx)(de,{resultLabel:"Keywords Sought",resultValue:a})}function ge(e){var t=e.keywordsOnBlurHandler,a=e.keywordsOnFocusHandler,l=e.keywords,s="200";return e.maxLength&&(s=String(e.maxLength)),Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsx)("span",{className:"add-keywords-label",children:"Add Keywords\xa0"})}),Object(F.jsx)("div",{className:"search-replace-line",children:Object(F.jsx)("input",{type:"text",className:"keyword",maxLength:s,defaultValue:null===l||""===l.trim()?H:l,onBlur:function(e){t(e)},onFocus:function(e){return a(e)}})})]})}p.a.render(Object(F.jsx)(V,{}),document.getElementById("root"))},59:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.061df11e.chunk.js.map