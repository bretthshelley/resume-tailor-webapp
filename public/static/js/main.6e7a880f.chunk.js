(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{40:function(e,t,a){"use strict";a.r(t);var s=a(8),l=a(5),r=a(6),n=a(7),i=a(39),c=a(19),o=a(16),h=a(0),d=a.n(h),u=a(10),p=a.n(u),g=a(38),b=a(4),y=(a(55),a(20)),m=a.n(y),k=a(35),v=a.n(k),j=a(36),w=a(1),O="Keyword(s) separated by commas",f="Optional word or phrase",x="Optional word or phrase",C="Optional words or phrases separated by commas",H="application/vnd.openxmlformats-officedocument.wordprocessingml.document",F=[{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"lightGray",label:"Light Gray"},{value:"magenta",label:"Magenta"},{value:"red",label:"Red"},{value:"blue",label:"Blue"},{value:"cyan",label:"Cyan"},{value:"darkBlue",label:"Dark Blue"},{value:"darkCyan",label:"Dark Cyan"},{value:"darkGray",label:"Dark Gray"},{value:"darkMagenta",label:"Dark Magenta"},{value:"darkRed",label:"Dark Red"},{value:"darkYellow",label:"Dark Yellow"},{value:"darkGreen",label:"Dark Green"},{value:"black",label:"Black"},{value:"white",label:"White"}],S={yellow:"black",green:"white",lightGray:"black",magenta:"white",red:"white",blue:"white",cyan:"black",darkBlue:"white",darkCyan:"white",darkGray:"white",darkMagenta:"white",darkRed:"white",darkYellow:"black",darkGreen:"white",black:"white",white:"black"},B={yellow:"yellow",green:"green",lightGray:"lightGray",magenta:"magenta",red:"red",blue:"blue",cyan:"cyan",darkBlue:"darkBlue",darkCyan:"darkCyan",darkGray:"darkGray",darkMagenta:"darkMagenta",darkRed:"darkRed",darkYellow:"#CCCC00",darkGreen:"darkGreen",black:"black",white:"white"},A={singleValue:function(e,t){var a=t.data;return Object(c.a)(Object(c.a)({},e),{},{color:S[a.value]?S[a.value]:"black",background:B[a.value]?B[a.value]:"white",innerWidth:200,outerWidth:220})}};function N(e){var t=e.highlightColorChangeHandler,a=e.highlightColor,s={label:e.highlightColorLabel,value:a};return Object(w.jsx)("div",{style:{marginLeft:"120px",marginTop:"10px"},children:Object(w.jsx)("div",{style:{width:"170px"},children:Object(w.jsx)(g.a,{options:F,styles:A,onChange:function(e){return t(e)},defaultValue:s,menuPlacement:"auto",menuPosition:"fixed"})})})}var R=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleDownload=function(e,t){m.a.get(e,{responseType:"blob"}).then((function(e){v()(e.data,t)}))},s.onFileChange=function(e){console.log("selected file target: "+String(e.target.files[0])),s.setState({selectedFile:e.target.files[0]})},s.doResumeUpload=function(){s.setState({uploadError:null,uploadResponse:null});var e=new FormData;e.append("file",s.state.selectedFile,s.state.selectedFile.name);var t=s.buildMainRequestBody();e.append("json",t),m.a.post("resume/upload",e,{}).then((function(e){console.log("getting percentage match from resonse: "+e.data.percentageMatch),s.setState({outputFilename:e.data.outputFilename,unmatchedKeywords:e.data.unmatchedKeywords,stats:e.data.stats,percentageMatch:e.data.percentageMatch})})).catch((function(e){console.error("Upload Error: "+{err:e}),console.log("error status: "+e.response.status),s.setState({uploadError:e})}))},s.handleChange=function(e){s.setState({selectedOption:e})},s.state={keywords:"",styleKeywords:!0,underline:!1,underlineApproach:"keyword",italicize:!1,italicizeApproach:"keyword",highlight:!1,highlightApproach:"keyword",highlightColor:"yellow",highlightColorLabel:"Yellow",boldface:!1,boldfaceApproach:"keyword",selectedOption:null,searchReplace:!1,search:"",replace:"",removeBullets:!1,startFrom:"",endAt:"",keep:"",brackets:!1,showBracketDetails:!1,validationErrors:[],validationInProgress:!1,mainRequestBody:"",selectedFile:null,uploadError:null,uploadResponse:null,outputFilename:null,stats:null,unmatchedKeywords:[],percentageMatch:null},s}return Object(r.a)(a,[{key:"doSubmit",value:function(){if(console.log("doSubmit"),this.setState({validationInProgress:!0}),this.isInputValid()){var e=this.buildMainRequestBody();this.setState({mainRequestBody:e}),this.doResumeUpload()}}},{key:"buildMainRequestBody",value:function(){var e="{";"{"!==(e+=this.buildKeywordStyleRequest())&&(e+=","),e+=this.buildSearchAndReplaceRequest();var t=this.buildTrimBulletsRequest();return"{"!==e&&!0!==e.endsWith(",")&&(e+=","),"{"!==(e+=t)&&!0!==e.endsWith(",")&&(e+=","),"{"!==(e+='"removeKeywordlessBullets":'+this.state.removeBullets)&&!0!==e.endsWith(",")&&(e+=","),e+='"removeBracketedStrings":'+this.state.brackets,e+="}"}},{key:"buildTrimBulletsRequest",value:function(){var e="";return!1===this.state.removeBullets?e:(e+='"trimBulletsRequest": {',""!==this.state.startFrom&&(e+='"fromMarker": '+JSON.stringify(this.state.startFrom)+","),""!==this.state.endAt&&(e+='"toMarker": '+JSON.stringify(this.state.endAt)+","),""!==this.state.keep&&(e+='"keepBulletMarkers": '+JSON.stringify(this.buildKeepWordsArray())),e.endsWith(",")&&(e=e.substring(0,e.length-1)),e+="}")}},{key:"buildSearchAndReplaceRequest",value:function(){var e="";return!1===this.state.searchReplace?e:(e+='"searchAndReplaceRequest":{"searchReplaceMap":{',e+=JSON.stringify(this.state.search),e+=": ",e+=JSON.stringify(this.state.replace),e+="}}")}},{key:"buildKeepWordsArray",value:function(){var e=[];return-1===this.state.keep.indexOf(",")?(e.push(this.state.keep.trim()),e):(this.state.keep.split(",").forEach((function(t){var a=t.trim();""!==a&&e.push(a)})),e)}},{key:"buildKeywordsArrayString",value:function(){var e=[];return-1===this.state.keywords.indexOf(",")?(e.push(this.state.keywords.trim()),JSON.stringify(e)):(this.state.keywords.split(",").forEach((function(t){var a=t.trim();""!==a&&e.push(a)})),JSON.stringify(e))}},{key:"buildKeywordStyleRequest",value:function(){var e="";return!1===this.state.styleKeywords?e:(e+='"keywordStyleRequest": {',e+='"highlightKeywords":'+(this.state.highlight&&"keyword"===this.state.highlightApproach)+",",e+='"highlightSentence":'+(this.state.highlight&&"sentence"===this.state.highlightApproach)+",",e+='"boldfaceKeywords":'+(this.state.boldface&&"keyword"===this.state.boldfaceApproach)+",",e+='"boldfaceSentence":'+(this.state.boldface&&"sentence"===this.state.boldfaceApproach)+",",e+='"italicizeKeywords":'+(this.state.italicize&&"keyword"===this.state.italicizeApproach)+",",e+='"italicizeSentence":'+(this.state.italicize&&"sentence"===this.state.italicizeApproach)+",",e+='"underlineKeywords":'+(this.state.underline&&"keyword"===this.state.underlineApproach)+",",e+='"underlineSentence":'+(this.state.underline&&"sentence"===this.state.underlineApproach)+",",e+='"highlightColor":"'+this.state.highlightColor+'",',e+='"keywords":'+this.buildKeywordsArrayString(),e+="}")}},{key:"isInputValid",value:function(){if(!this.state.styleKeywords&&!this.state.searchReplace&&!this.state.removeBullets&&!this.state.brackets)return console.log("no options selected"),!1;if(this.state.styleKeywords){if(!this.state.underline&&!this.state.italicize&&!this.state.boldface&&!this.state.highlight)return console.log("no styling options selected"),!1;if(""===this.state.keywords.trim())return console.log("no keywords added"),!1}if(this.state.searchReplace){if(""===this.state.search.trim()&&""===this.state.replace.trim())return console.log("no search/replace criteria defined"),!1;if(""===this.state.search.trim()&&""!==this.state.replace.trim())return console.log("no search criteria defined to replace"),!1}return null===this.state.selectedFile?(console.log("no file selected"),!1):!0!==this.state.selectedFile.name.toLowerCase().endsWith(".docx")?(console.log("selected file not a .docx"),!1):this.state.selectedFile.type!==H?(console.log("selected file not word document type"),!1):!(this.state.selectedFile.size>6291456)||(console.log("max file size exceeded"),!1)}},{key:"keywordsOnBlurHandler",value:function(e){var t=e.target.value.trim();t===O&&(t=""),""===t&&(e.target.value=O),this.setState({keywords:t})}},{key:"keywordsOnFocusHandler",value:function(e){var t=this.state.keywords;e.target.value=t}},{key:"startFromOnFocusHandler",value:function(e){var t=this.state.startFrom;e.target.value=t}},{key:"startFromOnBlurHandler",value:function(e){var t=e.target.value.trim();t===f&&(t=""),""===t&&(e.target.value=f),this.setState({startFrom:t})}},{key:"endAtOnFocusHandler",value:function(e){var t=this.state.endAt;e.target.value=t}},{key:"endAtOnBlurHandler",value:function(e){var t=e.target.value.trim();t===x&&(t=""),""===t&&(e.target.value=x),this.setState({endAt:t})}},{key:"keepOnFocusHandler",value:function(e){var t=this.state.keep;e.target.value=t}},{key:"keepOnBlurHandler",value:function(e){var t=e.target.value.trim();t===C&&(t=""),""===t&&(e.target.value=C),this.setState({keep:t})}},{key:"searchOnFocusHandler",value:function(e){var t=this.state.search;e.target.value=t}},{key:"searchOnBlurHandler",value:function(e){var t=e.target.value.trim();""===t&&(t=""),""===t&&(e.target.value=""),this.setState({search:t})}},{key:"replaceOnFocusHandler",value:function(e){var t=this.state.replace;e.target.value=t}},{key:"replaceOnBlurHandler",value:function(e){var t=e.target.value.trim();""===t&&(t=""),""===t&&(e.target.value=""),this.setState({replace:t})}},{key:"handleStartFromChange",value:function(e){var t=e.target.value.trim();t.trim()===f&&(t=""),""===t.trim()&&(e.target.value=f),this.setState({startFrom:t})}},{key:"handleEndAtChange",value:function(e){var t=e.target.value.trim();t.trim()===x&&(t=""),""===t.trim()&&(e.target.value=x),this.setState({endAt:t})}},{key:"handleDontRemoveChange",value:function(e){var t=e.target.value.trim();t.trim()===C&&(t=""),""===t.trim()&&(e.target.value=C),this.setState({keep:t})}},{key:"handleReplaceChange",value:function(e){var t=e.target.value.trim();this.setState({replace:t})}},{key:"handleHighlightColorChange",value:function(e){this.setState({highlightColor:String(e.value),highlightColorLabel:e.label})}},{key:"getSpanStyleForColor",value:function(e){return"<span className='"+e+"Highlight'>"}},{key:"getExampleSentence",value:function(){var e="Example: ",t=this.state.boldface&&"sentence"===this.state.boldfaceApproach,a=this.state.italicize&&"sentence"===this.state.italicizeApproach,s=this.state.underline&&"sentence"===this.state.underlineApproach,l=this.state.highlight&&"sentence"===this.state.highlightApproach,r=this.state.boldface&&"keyword"===this.state.boldfaceApproach,n=this.state.italicize&&"keyword"===this.state.italicizeApproach,i=this.state.underline&&"keyword"===this.state.underlineApproach,c=this.state.highlight&&"keyword"===this.state.highlightApproach;return e+=t?"<b>":"",e+=a?"<i>":"",e+=s?"<u>":"",e+=l?this.getSpanStyleForColor(this.state.highlightColor):"",e+="This sentence contains keywords ",e+=r?"<b>":"",e+=n?"<i>":"",e+=i?"<u>":"",e+=c?this.getSpanStyleForColor(this.state.highlightColor):"",e+="Java",e+=c?"</span>":"",e+=i?"</u>":"",e+=n?"</i>":"",e+=r?"</b>":"",e+=" and ",e+=r?"<b>":"",e+=n?"<i>":"",e+=i?"<u>":"",e+=c?this.getSpanStyleForColor(this.state.highlightColor):"",e+="Oracle",e+=c?"</span>":"",e+=i?"</u>":"",e+=n?"</i>":"",e+=r?"</b>":"",e+=".",e+=l?"</span>":"",e+=s?"</u>":"",e+=a?"</i>":"",e+=t?"</b>":"",e+=" This second sentence has no keywords and will not be styled."}},{key:"htmlDecode",value:function(e){var t=document.createElement("div");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue}},{key:"getChartDataColor",value:function(e){var t=e%10;return 0===t?"green":1===t?"black":2===t?"blue":3===t?"orange":4===t?"purple":5===t?"yellow":6===t?"magenta":7===t?"gray":8===t?"cyan":9===t?"red":void 0}},{key:"assembleChartData",value:function(){var e=this,t=[["Keyword","Matches Found",{role:"style"},{sourceColumn:0,role:"annotation",type:"string",calc:"stringify"}]],a=this.state.stats;if(null!==a){var l=0;Object.entries(a).map((function(a){var r=Object(s.a)(a,2),n=r[0],i=r[1];return t.push([n,i,e.getChartDataColor(l),null]),++l}));var r=0;for(r=0;r<this.state.unmatchedKeywords.length;r++){var n=this.state.unmatchedKeywords[r];t.push([n,0,this.getChartDataColor(l+r),null])}}return t}},{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(z,{uploadError:this.state.uploadError}),this.state.validationInProgress?Object(w.jsx)(E,{validationErrors:this.state.validationErrors,styleKeywords:this.state.styleKeywords,searchReplace:this.state.searchReplace,removeBullets:this.state.removeBullets,brackets:this.state.brackets,underline:this.state.underline,italicize:this.state.italicize,boldface:this.state.boldface,highlight:this.state.highlight,keywords:this.state.keywords,search:this.state.search,replace:this.state.replace,selectedFile:this.state.selectedFile}):"",Object(w.jsx)("div",{className:"facet-group-header-text",children:"Select A Resume and Add Keywords"}),Object(w.jsx)("hr",{className:"rounded"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"file",onChange:this.onFileChange})}),Object(w.jsx)(U,{keywordsOnBlurHandler:this.keywordsOnBlurHandler.bind(this),keywordsOnFocusHandler:this.keywordsOnFocusHandler.bind(this)}),Object(w.jsx)("div",{className:"facet-group-header-text",children:"Choose Tailoring Options"}),Object(w.jsx)("hr",{className:"rounded"}),Object(w.jsx)(I,{styleKeywords:this.state.styleKeywords,styleKeywordsChangeHandler:this.handleStyleKeywordsChange.bind(this),changeHandler:this.handleStylingChange.bind(this),approachHandler:this.handleApproach.bind(this),highlight:this.state.highlight,highlightColor:this.state.highlightColor,highlightColorLabel:this.state.highlightColorLabel,highlightColorChangeHandler:this.handleHighlightColorChange.bind(this),italicizeApproach:this.state.italicizeApproach,underlineApproach:this.state.underlineApproach,boldfaceApproach:this.state.boldfaceApproach,highlightApproach:this.state.highlightApproach,underline:this.state.underline,italicize:this.state.italicize,boldface:this.state.boldface}),this.state.styleKeywords?Object(w.jsx)("div",{className:"example-sentence-indented",children:Object(o.a)(this.getExampleSentence())}):"",Object(w.jsx)(G,{searchReplaceOnChangeHandler:this.searchReplaceOnChangeHandler.bind(this),searchOnFocusHandler:this.searchOnFocusHandler.bind(this),searchOnBlurHandler:this.searchOnBlurHandler.bind(this),replaceOnFocusHandler:this.replaceOnFocusHandler.bind(this),replaceOnBlurHandler:this.replaceOnBlurHandler.bind(this),search:this.state.search,replace:this.state.replace,searchReplace:this.state.searchReplace}),Object(w.jsx)(L,{removeBulletsChangeHandler:this.handleDeleteBulletsChange.bind(this),removeBullets:this.state.removeBullets,startFrom:this.state.startFrom,endAt:this.state.endAt,keep:this.state.keep,startFromOnFocusHandler:this.startFromOnFocusHandler.bind(this),startFromOnBlurHandler:this.startFromOnBlurHandler.bind(this),endAtOnFocusHandler:this.endAtOnFocusHandler.bind(this),endAtOnBlurHandler:this.endAtOnBlurHandler.bind(this),keepOnFocusHandler:this.keepOnFocusHandler.bind(this),keepOnBlurHandler:this.keepOnBlurHandler.bind(this)}),Object(w.jsx)(M,{bracketsChangeHandler:this.handleBracketsChange.bind(this),bracketsOnClickHandler:this.handleBracketsOnClick.bind(this),showBracketDetails:this.state.showBracketDetails,brackets:this.state.brackets}),Object(w.jsx)("p",{children:Object(w.jsx)("input",{type:"button",onClick:this.doSubmit.bind(this),value:"Submit"})}),Object(w.jsx)("div",{className:"facet-group-header-text",children:"Results"}),Object(w.jsx)("hr",{className:"rounded"}),Object(w.jsx)(K,{outputFilename:this.state.outputFilename,handleDownload:this.handleDownload.bind(this)}),null!==this.state.outputFilename?Object(w.jsx)(D,{chartData:this.assembleChartData(),percentageMatch:this.state.percentageMatch}):""]})}},{key:"handleUnderlineChange",value:function(e){this.setState({underline:e.target.checked})}},{key:"handleDeleteBulletsChange",value:function(e){this.setState({removeBullets:e.target.checked})}},{key:"searchReplaceOnChangeHandler",value:function(e){this.setState({searchReplace:e.target.checked})}},{key:"handleStyleKeywordsChange",value:function(e){this.setState({styleKeywords:e.target.checked})}},{key:"handleBracketsChange",value:function(e){this.setState({brackets:e.target.checked})}},{key:"handleBracketsOnClick",value:function(e){this.setState({showBracketDetails:!this.state.showBracketDetails})}},{key:"handleStylingChange",value:function(e){var t="UnderlineCheckbox"===e.target.id,a="ItalicizeCheckbox"===e.target.id,s="HighlightCheckbox"===e.target.id,l="BoldfaceCheckbox"===e.target.id,r=e.target.checked;t?this.setState({underline:r}):a?this.setState({italicize:r}):s?this.setState({highlight:r}):l&&this.setState({boldface:r})}},{key:"handleApproach",value:function(e){var t="UnderlineApproach"===e.target.id,a="ItalicizeApproach"===e.target.id,s="HighlightApproach"===e.target.id,l="BoldfaceApproach"===e.target.id,r=e.target.value;t?this.setState({underlineApproach:r}):a?this.setState({italicizeApproach:r}):s?this.setState({highlightApproach:r}):l&&this.setState({boldfaceApproach:r})}}]),a}(d.a.Component);function K(e){var t=e.outputFilename,a=e.handleDownload,s="./resume/download?filename="+t;return Object(w.jsx)(b.Fragment,{children:null!==t?Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{onClick:function(){a(s,t)},children:"Download Tailored Resume"}),Object(w.jsx)("p",{})]}):""})}function D(e){var t=e.chartData,a=e.percentageMatch;console.log("percentage match: "+a);var s="Keyword Search Statistics ("+a+" Match)";return console.log("chart title: "+s),Object(w.jsx)(j.a,{width:"100%",height:"300px",chartType:"BarChart",loader:Object(w.jsx)("div",{children:"Loading Chart"}),data:t,options:{title:"Keyword Search Statistics",height:250,bar:{groupWidth:"95%"},legend:{position:"none"}}})}function z(e){var t=e.uploadError,a=[];if(null!==t){var s="Upload Error occurred with status "+t.response.status;a.push(s)}var l="";return a.forEach((function(e){l+='<img src="./error-icon.png" alt="errors present" className="validation-image"/> '+e+"<br/>"})),Object(w.jsx)(b.Fragment,{children:a.length>0?Object(w.jsx)("div",{className:"validation-message",children:Object(o.a)(l)}):""})}function E(e){var t=e.styleKeywords,a=e.searchReplace,s=e.removeBullets,l=e.brackets,r=e.underline,n=e.italicize,i=e.boldface,c=e.highlight,h=e.keywords,d=e.search,u=e.replace,p=e.selectedFile,g=[];t||a||s||l||g.push("Missing option(s): Select at least one option (Style Keywords, Find and Replace, Remove Bullets..., Remove Brackets...)"),t&&(r||n||i||c||g.push("Missing style option(s): Select one or more options (italicize,underline,boldface,highlight)"),""===h.trim()&&g.push("Missing keyword(s): Enter at least one keyword to style")),a&&(""===d.trim()&&""===u.trim()&&g.push("Missing Find and Replace Values: Enter values or deselect 'Find and Replace'"),""===d.trim()&&""!==u.trim()&&g.push("Missing 'Find what' value: Enter a value"));null===p?g.push("No file selected"):!0!==p.name.toLowerCase().endsWith(".docx")?g.push("Invalid Resume Format: 'Choose File' in Word .docx format"):p.type!==H?g.push("Invalid Resume Format: Word .docx format must be of type "+H):p.size>6291456&&g.push("Uploaded File cannot be greater than 6 MB");var y="";return g.forEach((function(e){y+='<img src="./error-icon.png" alt="errors present" className="validation-image"/> '+e+"<br/>"})),Object(w.jsx)(b.Fragment,{children:g.length>0?Object(w.jsx)("div",{className:"validation-message",children:Object(o.a)(y)}):""})}function M(e){var t=e.bracketsChangeHandler,a=e.bracketsOnClickHandler,s=e.showBracketDetails,l=e.brackets;return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"facet-group-option",children:[Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("input",{type:"checkbox",id:"bracketsCheckbox",onChange:function(e){return t(e)}})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("span",{className:"remove-bullets-styling-label",children:"Remove Brackets (Advanced)"})})]}),Object(w.jsx)("div",{className:"search-replace-line",children:Object(w.jsx)("span",{className:"indent-span"})}),l?Object(w.jsx)(T,{showBracketDetails:s,bracketsOnClickHandler:a}):""]})}function T(e){var t=e.bracketsOnClickHandler,a=e.showBracketDetails;return Object(w.jsx)(b.Fragment,{children:a?Object(w.jsxs)("div",{className:"show-bracket-details",children:[Object(w.jsx)("input",{type:"button",value:"Hide Explanation...",id:"hideBracketDetails",onClick:function(e){return t(e)}}),Object(w.jsxs)("p",{children:["'Removing Brackets' hides the rapid customization magic from those who view the document. 'Remove Brackets' removes the texts inside brackets so you may use keyword matching without showing the keyword.",Object(w.jsx)("br",{})," For example, imagine the following bullets in a resume:",Object(w.jsx)("ul",{children:Object(w.jsx)("li",{children:"Filled in as the Team's Database administrator [#Oracle,#DBA,#keepme,#leadership]."})}),"Selecting 'Remove Brackets' results in the following modified bullets.",Object(w.jsx)("ul",{children:Object(w.jsx)("li",{children:"Filled in as the Team's Database administrator."})}),"This advanced capability enables you to rapidly trim down a 'big' resume to match a specific job requirement. Imagine a resume with 20 bullets. And you want to only keep the six bullets with '#leadership' in brackets. Selecting both 'Remove Bullets without keywords' and 'Remove Brackets', then adding '#leadership' as a 'Keep' word allows you to do this. And if you always want to show a bulleted paragraph, then adding a 'Keep' marker like '#keepme' enables this."]}),Object(w.jsx)("p",{children:"Using this feature takes a bit of thought and preparation.  But if you want to produce a resume that is exactly focused on a job requirement, then this feature is extremely powerful."})]}):Object(w.jsx)("div",{className:"search-replace-line",children:Object(w.jsx)("input",{type:"button",value:"Show Explanation...",id:"showBracketDetails",onClick:function(e){return t(e)}})})})}function L(e){var t=e.removeBulletsChangeHandler,a=e.removeBullets,s=e.startFromOnFocusHandler,l=e.endAtOnFocusHandler,r=e.keepOnFocusHandler,n=e.startFromOnBlurHandler,i=e.endAtOnBlurHandler,c=e.keepOnBlurHandler,o=e.startFrom,h=e.endAt,d=e.keep;return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"facet-group-option",children:[Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("input",{type:"checkbox",id:"removeBulletsCheckbox",onChange:function(e){return t(e)}})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("span",{className:"remove-bullets-styling-label",children:"Remove Bullets without keywords"})})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(q,{show:a,onFocusHandler:s,onBlurHandler:n,labelText:"Start from:",defaultValue:""===o?f:o}),Object(w.jsx)(q,{show:a,onFocusHandler:l,onBlurHandler:i,labelText:"End at:",defaultValue:""===h?x:h}),Object(w.jsx)(q,{show:a,onFocusHandler:r,onBlurHandler:c,labelText:"Keep:",defaultValue:""===d?C:d}),a?Object(w.jsx)("div",{className:"example-sentence-indented",children:"Explanation: This removes bullet paragraphs without keyword matches. 'Start From' defines the word or phrase where bullet removal begins in the Word document. 'End at' defines the word or phrase where bullet removal ends. 'Keep' words keeps bullets even though they have no matching keywords."}):""]})]})}function q(e){var t=e.show,a=e.onFocusHandler,s=e.onBlurHandler,l=e.labelText,r=e.defaultValue;return Object(w.jsx)(b.Fragment,{children:t?Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"search-replace-line",children:Object(w.jsx)("span",{className:"indent-span"})}),Object(w.jsx)("div",{className:"search-replace-line",children:Object(w.jsx)("span",{className:"search-replace-label",children:l})}),Object(w.jsx)("div",{className:"search-replace-line",children:Object(w.jsx)("input",{type:"text",className:"keyword",defaultValue:r,onBlur:function(e){s(e)},onFocus:function(e){return a(e)}})})]}):""})}function G(e){var t=e.searchReplaceOnChangeHandler,a=e.searchOnFocusHandler,s=e.searchOnBlurHandler,l=e.replaceOnFocusHandler,r=e.replaceOnBlurHandler,n=e.search,i=e.replace,c=e.searchReplace;return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"facet-group-option",children:[Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("input",{type:"checkbox",id:"searchReplaceCheckbox",onChange:function(e){return t(e)}})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("span",{className:"remove-bullets-styling-label",children:"Find and Replace"})})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(q,{show:c,onFocusHandler:a,onBlurHandler:s,labelText:"Find what:",defaultValue:n}),Object(w.jsx)(q,{show:c,onFocusHandler:l,onBlurHandler:r,labelText:"Replace with:",defaultValue:i}),c?Object(w.jsx)("div",{className:"example-sentence-indented",children:"Hint: You might replace the words 'Resume Title' with the Job Title you are applying for."}):""]})]})}function W(e){var t=e.changeHandler,a=e.approachHandler,s=e.keywordStyling,l=s+"Checkbox",r=e.styleKeywords,n=e.approach,i=e.checked;return Object(w.jsx)(b.Fragment,{children:r?Object(w.jsxs)("div",{className:"facet-group-option",children:[Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("span",{className:"indent-span"})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("input",{type:"checkbox",id:l,onChange:function(e){return t(e)},checked:i})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("span",{className:"keyword-styling-label",children:s})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)(J,{approachHandler:a,keywordStyling:s,approach:n})})]}):""})}function V(e){var t=e.changeHandler,a=e.approachHandler,s=e.keywordStyling,l=s+"Checkbox",r=e.highlight,n=e.highlightColorChangeHandler,i=e.highlightColor,c=e.highlightColorLabel,o=e.styleKeywords,h=e.approach;return Object(w.jsx)(b.Fragment,{children:o?Object(w.jsxs)("div",{className:"facet-group-option",children:[Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("span",{className:"indent-span"})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("input",{type:"checkbox",id:l,onChange:function(e){return t(e)},checked:r})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("span",{className:"keyword-styling-label",children:s})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)(J,{approachHandler:a,keywordStyling:s,approach:h})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:!0===r?Object(w.jsx)(N,{className:"highlightColor",highlightColorChangeHandler:n,highlightColor:i,highlightColorLabel:c}):""})]}):""})}function I(e){var t=e.changeHandler,a=e.approachHandler,s=e.highlight,l=e.highlightColorChangeHandler,r=e.highlightColor,n=e.highlightColorLabel,i=e.styleKeywordsChangeHandler,c=e.styleKeywords,o=e.italicizeApproach,h=e.boldfaceApproach,d=e.underlineApproach,u=e.highlightApproach,p=e.italicize,g=e.underline,y=e.boldface;return Object(w.jsxs)(b.Fragment,{children:[Object(w.jsxs)("div",{className:"facet-group-option",children:[Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("input",{type:"checkbox",id:"styleKeywordsCheckbox",onChange:function(e){return i(e)},checked:c})}),Object(w.jsx)("div",{className:"keyword-styling-line",children:Object(w.jsx)("span",{className:"remove-bullets-styling-label",children:"Style Keywords"})})]}),Object(w.jsx)(W,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Italicize",approach:o,checked:p}),Object(w.jsx)(W,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Underline",approach:d,checked:g}),Object(w.jsx)(W,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Boldface",approach:h,checked:y}),Object(w.jsx)(V,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Highlight",highlight:s,highlightColorChangeHandler:l,highlightColor:r,highlightColorLabel:n,approach:u})]})}function J(e){var t=e.approachHandler,a=e.keywordStyling,s=String(a).concat("Approach"),l=e.approach;return Object(w.jsxs)("select",{className:"facet-group-option",onChange:function(e){return t(e)},id:s,value:l,children:[Object(w.jsx)("option",{value:"keyword",children:"Keywords"}),Object(w.jsx)("option",{value:"sentence",children:"Sentences with Keywords"})]})}function U(e){var t="200";e.maxLength&&(t=String(e.maxLength));var a=e.keywordsOnBlurHandler,s=e.keywordsOnFocusHandler;return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"search-replace-line",children:Object(w.jsx)("span",{className:"search-replace-label",children:"Keywords"})}),Object(w.jsx)("div",{className:"search-replace-line",children:Object(w.jsx)("input",{type:"text",className:"keyword",maxLength:t,defaultValue:O,onBlur:function(e){a(e)},onFocus:function(e){return s(e)}})})]})}p.a.render(Object(w.jsx)(R,{}),document.getElementById("root"))},55:function(e,t,a){}},[[40,1,2]]]);
//# sourceMappingURL=main.6e7a880f.chunk.js.map