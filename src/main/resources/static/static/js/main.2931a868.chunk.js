(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{34:function(e,t,a){"use strict";a.r(t);var s=a(5),l=a(6),r=a(7),i=a(33),n=a(16),c=a(13),o=a(1),h=a.n(o),d=a(9),u=a.n(d),p=a(32),g=a(4),b=(a(49),a(31)),y=a.n(b),k=a(0),m="Keyword(s) separated by commas",v="Optional word or phrase",j="Optional word or phrase",O="Optional words or phrases separated by commas",w="application/vnd.openxmlformats-officedocument.wordprocessingml.document",f=[{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"lightGray",label:"Light Gray"},{value:"magenta",label:"Magenta"},{value:"red",label:"Red"},{value:"blue",label:"Blue"},{value:"cyan",label:"Cyan"},{value:"darkBlue",label:"Dark Blue"},{value:"darkCyan",label:"Dark Cyan"},{value:"darkGray",label:"Dark Gray"},{value:"darkMagenta",label:"Dark Magenta"},{value:"darkRed",label:"Dark Red"},{value:"darkYellow",label:"Dark Yellow"},{value:"darkGreen",label:"Dark Green"},{value:"black",label:"Black"},{value:"white",label:"White"}],x={yellow:"black",green:"white",lightGray:"black",magenta:"white",red:"white",blue:"white",cyan:"black",darkBlue:"white",darkCyan:"white",darkGray:"white",darkMagenta:"white",darkRed:"white",darkYellow:"black",darkGreen:"white",black:"white",white:"black"},C={yellow:"yellow",green:"green",lightGray:"lightGray",magenta:"magenta",red:"red",blue:"blue",cyan:"cyan",darkBlue:"darkBlue",darkCyan:"darkCyan",darkGray:"darkGray",darkMagenta:"darkMagenta",darkRed:"darkRed",darkYellow:"#CCCC00",darkGreen:"darkGreen",black:"black",white:"white"},H={singleValue:function(e,t){var a=t.data;return Object(n.a)(Object(n.a)({},e),{},{color:x[a.value]?x[a.value]:"black",background:C[a.value]?C[a.value]:"white",innerWidth:200,outerWidth:220})}};function F(e){var t=e.highlightColorChangeHandler,a=e.highlightColor,s={label:e.highlightColorLabel,value:a};return Object(k.jsx)("div",{style:{marginLeft:"120px",marginTop:"10px"},children:Object(k.jsx)("div",{style:{width:"170px"},children:Object(k.jsx)(p.a,{options:f,styles:H,onChange:function(e){return t(e)},defaultValue:s,menuPlacement:"auto",menuPosition:"fixed"})})})}var B=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onFileChange=function(e){console.log("selected file target: "+String(e.target.files[0])),l.setState({selectedFile:e.target.files[0]})},l.doResumeUpload=function(){l.setState({uploadError:null,uploadResponse:null}),console.log("doResumeUpload");var e=new FormData;e.append("file",l.state.selectedFile,l.state.selectedFile.name);var t=l.buildMainRequestBody();e.append("json",t),console.log("about to do resume upload"),y.a.post("resume/upload",e,{}).then((function(e){console.log("Upload Response: "+{res:e}),console.log("response details: "+e.data),console.log("response details: "+JSON.stringify(e.data)),console.log("output file name: "+e.data.outputFilename),l.setState({outputFilename:e.data.outputFilename})})).catch((function(e){console.error("Upload Error: "+{err:e}),console.log("error status: "+e.response.status),l.setState({uploadError:e})}))},l.handleChange=function(e){l.setState({selectedOption:e})},l.state={keywords:"",styleKeywords:!0,underline:!1,underlineApproach:"keyword",italicize:!1,italicizeApproach:"keyword",highlight:!1,highlightApproach:"keyword",highlightColor:"yellow",highlightColorLabel:"Yellow",boldface:!1,boldfaceApproach:"keyword",selectedOption:null,searchReplace:!1,search:"",replace:"",removeBullets:!1,startFrom:"",endAt:"",keep:"",brackets:!1,showBracketDetails:!1,validationErrors:[],validationInProgress:!1,mainRequestBody:"",selectedFile:null,uploadError:null,uploadResponse:null,outputFilename:null},l}return Object(l.a)(a,[{key:"doSubmit",value:function(){if(console.log("doSubmit"),this.setState({validationInProgress:!0}),this.isInputValid()){var e=this.buildMainRequestBody();this.setState({mainRequestBody:e}),this.doResumeUpload()}}},{key:"buildMainRequestBody",value:function(){var e="{";"{"!==(e+=this.buildKeywordStyleRequest())&&(e+=","),e+=this.buildSearchAndReplaceRequest();var t=this.buildTrimBulletsRequest();return"{"!==e&&!0!==e.endsWith(",")&&(e+=","),"{"!==(e+=t)&&!0!==e.endsWith(",")&&(e+=","),"{"!==(e+='"removeKeywordlessBullets":'+this.state.removeBullets)&&!0!==e.endsWith(",")&&(e+=","),e+='"removeBracketedStrings":'+this.state.brackets,e+="}"}},{key:"buildTrimBulletsRequest",value:function(){var e="";return!1===this.state.removeBullets?e:(e+='"trimBulletsRequest": {',""!==this.state.startFrom&&(e+='"fromMarker": '+JSON.stringify(this.state.startFrom)+","),""!==this.state.endAt&&(e+='"toMarker": '+JSON.stringify(this.state.endAt)+","),""!==this.state.keep&&(e+='"keepBulletMarkers": '+JSON.stringify(this.buildKeepWordsArray())),e.endsWith(",")&&(e=e.substring(0,e.length-1)),e+="}")}},{key:"buildSearchAndReplaceRequest",value:function(){var e="";return!1===this.state.searchReplace?e:(e+='"searchAndReplaceRequest":{"searchReplaceMap":{',e+=JSON.stringify(this.state.search),e+=": ",e+=JSON.stringify(this.state.replace),e+="}}")}},{key:"buildKeepWordsArray",value:function(){var e=[];return-1===this.state.keep.indexOf(",")?(e.push(this.state.keep.trim()),e):(this.state.keep.split(",").forEach((function(t){var a=t.trim();""!==a&&e.push(a)})),e)}},{key:"buildKeywordsArrayString",value:function(){var e=[];return-1===this.state.keywords.indexOf(",")?(e.push(this.state.keywords.trim()),JSON.stringify(e)):(this.state.keywords.split(",").forEach((function(t){var a=t.trim();""!==a&&e.push(a)})),JSON.stringify(e))}},{key:"buildKeywordStyleRequest",value:function(){var e="";return!1===this.state.styleKeywords?e:(e+='"keywordStyleRequest": {',e+='"highlightKeywords":'+(this.state.highlight&&"keyword"===this.state.highlightApproach)+",",e+='"highlightSentence":'+(this.state.highlight&&"sentence"===this.state.highlightApproach)+",",e+='"boldfaceKeywords":'+(this.state.boldface&&"keyword"===this.state.boldfaceApproach)+",",e+='"boldfaceSentence":'+(this.state.boldface&&"sentence"===this.state.boldfaceApproach)+",",e+='"italicizeKeywords":'+(this.state.italicize&&"keyword"===this.state.italicizeApproach)+",",e+='"italicizeSentence":'+(this.state.italicize&&"sentence"===this.state.italicizeApproach)+",",e+='"underlineKeywords":'+(this.state.underline&&"keyword"===this.state.underlineApproach)+",",e+='"underlineSentence":'+(this.state.underline&&"sentence"===this.state.underlineApproach)+",",e+='"highlightColor":"'+this.state.highlightColor+'",',e+='"keywords":'+this.buildKeywordsArrayString(),e+="}")}},{key:"isInputValid",value:function(){if(!this.state.styleKeywords&&!this.state.searchReplace&&!this.state.removeBullets&&!this.state.brackets)return console.log("no options selected"),!1;if(this.state.styleKeywords){if(!this.state.underline&&!this.state.italicize&&!this.state.boldface&&!this.state.highlight)return console.log("no styling options selected"),!1;if(""===this.state.keywords.trim())return console.log("no keywords added"),!1}if(this.state.searchReplace){if(""===this.state.search.trim()&&""===this.state.replace.trim())return console.log("no search/replace criteria defined"),!1;if(""===this.state.search.trim()&&""!==this.state.replace.trim())return console.log("no search criteria defined to replace"),!1}return null===this.state.selectedFile?(console.log("no file selected"),!1):!0!==this.state.selectedFile.name.toLowerCase().endsWith(".docx")?(console.log("selected file not a .docx"),!1):this.state.selectedFile.type!==w?(console.log("selected file not word document type"),!1):!(this.state.selectedFile.size>6291456)||(console.log("max file size exceeded"),!1)}},{key:"keywordsOnBlurHandler",value:function(e){var t=e.target.value.trim();t===m&&(t=""),""===t&&(e.target.value=m),this.setState({keywords:t})}},{key:"keywordsOnFocusHandler",value:function(e){var t=this.state.keywords;e.target.value=t}},{key:"startFromOnFocusHandler",value:function(e){var t=this.state.startFrom;e.target.value=t}},{key:"startFromOnBlurHandler",value:function(e){var t=e.target.value.trim();t===v&&(t=""),""===t&&(e.target.value=v),this.setState({startFrom:t})}},{key:"endAtOnFocusHandler",value:function(e){var t=this.state.endAt;e.target.value=t}},{key:"endAtOnBlurHandler",value:function(e){var t=e.target.value.trim();t===j&&(t=""),""===t&&(e.target.value=j),this.setState({endAt:t})}},{key:"keepOnFocusHandler",value:function(e){var t=this.state.keep;e.target.value=t}},{key:"keepOnBlurHandler",value:function(e){var t=e.target.value.trim();t===O&&(t=""),""===t&&(e.target.value=O),this.setState({keep:t})}},{key:"searchOnFocusHandler",value:function(e){var t=this.state.search;e.target.value=t}},{key:"searchOnBlurHandler",value:function(e){var t=e.target.value.trim();""===t&&(t=""),""===t&&(e.target.value=""),this.setState({search:t})}},{key:"replaceOnFocusHandler",value:function(e){var t=this.state.replace;e.target.value=t}},{key:"replaceOnBlurHandler",value:function(e){var t=e.target.value.trim();""===t&&(t=""),""===t&&(e.target.value=""),this.setState({replace:t})}},{key:"handleStartFromChange",value:function(e){var t=e.target.value.trim();t.trim()===v&&(t=""),""===t.trim()&&(e.target.value=v),this.setState({startFrom:t})}},{key:"handleEndAtChange",value:function(e){var t=e.target.value.trim();t.trim()===j&&(t=""),""===t.trim()&&(e.target.value=j),this.setState({endAt:t})}},{key:"handleDontRemoveChange",value:function(e){var t=e.target.value.trim();t.trim()===O&&(t=""),""===t.trim()&&(e.target.value=O),this.setState({keep:t})}},{key:"handleReplaceChange",value:function(e){var t=e.target.value.trim();this.setState({replace:t})}},{key:"handleHighlightColorChange",value:function(e){this.setState({highlightColor:String(e.value),highlightColorLabel:e.label})}},{key:"getSpanStyleForColor",value:function(e){return"<span className='"+e+"Highlight'>"}},{key:"getExampleSentence",value:function(){var e="Example: ",t=this.state.boldface&&"sentence"===this.state.boldfaceApproach,a=this.state.italicize&&"sentence"===this.state.italicizeApproach,s=this.state.underline&&"sentence"===this.state.underlineApproach,l=this.state.highlight&&"sentence"===this.state.highlightApproach,r=this.state.boldface&&"keyword"===this.state.boldfaceApproach,i=this.state.italicize&&"keyword"===this.state.italicizeApproach,n=this.state.underline&&"keyword"===this.state.underlineApproach,c=this.state.highlight&&"keyword"===this.state.highlightApproach;return e+=t?"<b>":"",e+=a?"<i>":"",e+=s?"<u>":"",e+=l?this.getSpanStyleForColor(this.state.highlightColor):"",e+="This sentence contains keywords ",e+=r?"<b>":"",e+=i?"<i>":"",e+=n?"<u>":"",e+=c?this.getSpanStyleForColor(this.state.highlightColor):"",e+="Java",e+=c?"</span>":"",e+=n?"</u>":"",e+=i?"</i>":"",e+=r?"</b>":"",e+=" and ",e+=r?"<b>":"",e+=i?"<i>":"",e+=n?"<u>":"",e+=c?this.getSpanStyleForColor(this.state.highlightColor):"",e+="Oracle",e+=c?"</span>":"",e+=n?"</u>":"",e+=i?"</i>":"",e+=r?"</b>":"",e+=".",e+=l?"</span>":"",e+=s?"</u>":"",e+=a?"</i>":"",e+=t?"</b>":"",e+=" This second sentence has no keywords and will not be styled."}},{key:"htmlDecode",value:function(e){var t=document.createElement("div");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(A,{uploadError:this.state.uploadError}),this.state.validationInProgress?Object(k.jsx)(N,{validationErrors:this.state.validationErrors,styleKeywords:this.state.styleKeywords,searchReplace:this.state.searchReplace,removeBullets:this.state.removeBullets,brackets:this.state.brackets,underline:this.state.underline,italicize:this.state.italicize,boldface:this.state.boldface,highlight:this.state.highlight,keywords:this.state.keywords,search:this.state.search,replace:this.state.replace,selectedFile:this.state.selectedFile}):"",Object(k.jsx)("div",{className:"facet-group-header-text",children:"Select A Resume"}),Object(k.jsx)("hr",{className:"rounded"}),Object(k.jsx)("div",{children:Object(k.jsx)("input",{type:"file",onChange:this.onFileChange})}),Object(k.jsx)("div",{className:"facet-group-header-text",children:"Add Keywords"}),Object(k.jsx)("hr",{className:"rounded"}),Object(k.jsx)(G,{keywordsOnBlurHandler:this.keywordsOnBlurHandler.bind(this),keywordsOnFocusHandler:this.keywordsOnFocusHandler.bind(this)}),Object(k.jsx)("div",{className:"facet-group-header-text",children:"Choose Tailoring Options"}),Object(k.jsx)("hr",{className:"rounded"}),Object(k.jsx)(L,{styleKeywords:this.state.styleKeywords,styleKeywordsChangeHandler:this.handleStyleKeywordsChange.bind(this),changeHandler:this.handleStylingChange.bind(this),approachHandler:this.handleApproach.bind(this),highlight:this.state.highlight,highlightColor:this.state.highlightColor,highlightColorLabel:this.state.highlightColorLabel,highlightColorChangeHandler:this.handleHighlightColorChange.bind(this),italicizeApproach:this.state.italicizeApproach,underlineApproach:this.state.underlineApproach,boldfaceApproach:this.state.boldfaceApproach,highlightApproach:this.state.highlightApproach,underline:this.state.underline,italicize:this.state.italicize,boldface:this.state.boldface}),this.state.styleKeywords?Object(k.jsx)("div",{className:"example-sentence-indented",children:Object(c.a)(this.getExampleSentence())}):"",Object(k.jsx)(D,{searchReplaceOnChangeHandler:this.searchReplaceOnChangeHandler.bind(this),searchOnFocusHandler:this.searchOnFocusHandler.bind(this),searchOnBlurHandler:this.searchOnBlurHandler.bind(this),replaceOnFocusHandler:this.replaceOnFocusHandler.bind(this),replaceOnBlurHandler:this.replaceOnBlurHandler.bind(this),search:this.state.search,replace:this.state.replace,searchReplace:this.state.searchReplace}),Object(k.jsx)(z,{removeBulletsChangeHandler:this.handleDeleteBulletsChange.bind(this),removeBullets:this.state.removeBullets,startFrom:this.state.startFrom,endAt:this.state.endAt,keep:this.state.keep,startFromOnFocusHandler:this.startFromOnFocusHandler.bind(this),startFromOnBlurHandler:this.startFromOnBlurHandler.bind(this),endAtOnFocusHandler:this.endAtOnFocusHandler.bind(this),endAtOnBlurHandler:this.endAtOnBlurHandler.bind(this),keepOnFocusHandler:this.keepOnFocusHandler.bind(this),keepOnBlurHandler:this.keepOnBlurHandler.bind(this)}),Object(k.jsx)(R,{bracketsChangeHandler:this.handleBracketsChange.bind(this),bracketsOnClickHandler:this.handleBracketsOnClick.bind(this),showBracketDetails:this.state.showBracketDetails,brackets:this.state.brackets}),Object(k.jsx)("p",{children:Object(k.jsx)("input",{type:"button",onClick:this.doSubmit.bind(this),value:"Submit"})}),Object(k.jsx)(S,{outputFilename:this.state.outputFilename})]})}},{key:"handleUnderlineChange",value:function(e){this.setState({underline:e.target.checked})}},{key:"handleDeleteBulletsChange",value:function(e){this.setState({removeBullets:e.target.checked})}},{key:"searchReplaceOnChangeHandler",value:function(e){this.setState({searchReplace:e.target.checked})}},{key:"handleStyleKeywordsChange",value:function(e){this.setState({styleKeywords:e.target.checked})}},{key:"handleBracketsChange",value:function(e){this.setState({brackets:e.target.checked})}},{key:"handleBracketsOnClick",value:function(e){this.setState({showBracketDetails:!this.state.showBracketDetails})}},{key:"handleStylingChange",value:function(e){var t="UnderlineCheckbox"===e.target.id,a="ItalicizeCheckbox"===e.target.id,s="HighlightCheckbox"===e.target.id,l="BoldfaceCheckbox"===e.target.id,r=e.target.checked;t?this.setState({underline:r}):a?this.setState({italicize:r}):s?this.setState({highlight:r}):l&&this.setState({boldface:r})}},{key:"handleApproach",value:function(e){var t="UnderlineApproach"===e.target.id,a="ItalicizeApproach"===e.target.id,s="HighlightApproach"===e.target.id,l="BoldfaceApproach"===e.target.id,r=e.target.value;t?this.setState({underlineApproach:r}):a?this.setState({italicizeApproach:r}):s?this.setState({highlightApproach:r}):l&&this.setState({boldfaceApproach:r})}}]),a}(h.a.Component);function S(e){var t=e.outputFilename;return Object(k.jsx)(g.Fragment,{children:null!==t?Object(k.jsx)("div",{children:t}):""})}function A(e){var t=e.uploadError,a=[];if(null!==t){var s="Upload Error occurred with status "+t.response.status;a.push(s)}var l="";return a.forEach((function(e){l+='<img src="./error-icon.png" alt="errors present" className="validation-image"/> '+e+"<br/>"})),Object(k.jsx)(g.Fragment,{children:a.length>0?Object(k.jsx)("div",{className:"validation-message",children:Object(c.a)(l)}):""})}function N(e){var t=e.styleKeywords,a=e.searchReplace,s=e.removeBullets,l=e.brackets,r=e.underline,i=e.italicize,n=e.boldface,o=e.highlight,h=e.keywords,d=e.search,u=e.replace,p=e.selectedFile,b=[];t||a||s||l||b.push("Missing option(s): Select at least one option (Style Keywords, Find and Replace, Remove Bullets..., Remove Brackets...)"),t&&(r||i||n||o||b.push("Missing style option(s): Select one or more options (italicize,underline,boldface,highlight)"),""===h.trim()&&b.push("Missing keyword(s): Enter at least one keyword to style")),a&&(""===d.trim()&&""===u.trim()&&b.push("Missing Find and Replace Values: Enter values or deselect 'Find and Replace'"),""===d.trim()&&""!==u.trim()&&b.push("Missing 'Find what' value: Enter a value"));null===p?b.push("No file selected"):!0!==p.name.toLowerCase().endsWith(".docx")?b.push("Invalid Resume Format: 'Choose File' in Word .docx format"):p.type!==w?b.push("Invalid Resume Format: Word .docx format must be of type "+w):p.size>6291456&&b.push("Uploaded File cannot be greater than 6 MB");var y="";return b.forEach((function(e){y+='<img src="./error-icon.png" alt="errors present" className="validation-image"/> '+e+"<br/>"})),Object(k.jsx)(g.Fragment,{children:b.length>0?Object(k.jsx)("div",{className:"validation-message",children:Object(c.a)(y)}):""})}function R(e){var t=e.bracketsChangeHandler,a=e.bracketsOnClickHandler,s=e.showBracketDetails,l=e.brackets;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"facet-group-option",children:[Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("input",{type:"checkbox",id:"bracketsCheckbox",onChange:function(e){return t(e)}})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("span",{className:"remove-bullets-styling-label",children:"Remove Brackets (Advanced)"})})]}),Object(k.jsx)("div",{className:"search-replace-line",children:Object(k.jsx)("span",{className:"indent-span"})}),l?Object(k.jsx)(K,{showBracketDetails:s,bracketsOnClickHandler:a}):""]})}function K(e){var t=e.bracketsOnClickHandler,a=e.showBracketDetails;return Object(k.jsx)(g.Fragment,{children:a?Object(k.jsxs)("div",{className:"show-bracket-details",children:[Object(k.jsx)("input",{type:"button",value:"Hide Explanation...",id:"hideBracketDetails",onClick:function(e){return t(e)}}),Object(k.jsxs)("p",{children:["'Removing Brackets' hides the rapid customization magic from those who view the document. 'Remove Brackets' removes the texts inside brackets so you may use keyword matching without showing the keyword.",Object(k.jsx)("br",{})," For example, imagine the following bullets in a resume:",Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:"Filled in as the Team's Database administrator [#Oracle,#DBA,#keepme,#leadership]."})}),"Selecting 'Remove Brackets' results in the following modified bullets.",Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:"Filled in as the Team's Database administrator."})}),"This advanced capability enables you to rapidly trim down a 'big' resume to match a specific job requirement. Imagine a resume with 20 bullets. And you want to only keep the six bullets with '#leadership' in brackets. Selecting both 'Remove Bullets without keywords' and 'Remove Brackets', then adding '#leadership' as a 'Keep' word allows you to do this. And if you always want to show a bulleted paragraph, then adding a 'Keep' marker like '#keepme' enables this."]}),Object(k.jsx)("p",{children:"Using this feature takes a bit of thought and preparation.  But if you want to produce a resume that is exactly focused on a job requirement, then this feature is extremely powerful."})]}):Object(k.jsx)("div",{className:"search-replace-line",children:Object(k.jsx)("input",{type:"button",value:"Show Explanation...",id:"showBracketDetails",onClick:function(e){return t(e)}})})})}function z(e){var t=e.removeBulletsChangeHandler,a=e.removeBullets,s=e.startFromOnFocusHandler,l=e.endAtOnFocusHandler,r=e.keepOnFocusHandler,i=e.startFromOnBlurHandler,n=e.endAtOnBlurHandler,c=e.keepOnBlurHandler,o=e.startFrom,h=e.endAt,d=e.keep;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"facet-group-option",children:[Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("input",{type:"checkbox",id:"removeBulletsCheckbox",onChange:function(e){return t(e)}})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("span",{className:"remove-bullets-styling-label",children:"Remove Bullets without keywords"})})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(E,{show:a,onFocusHandler:s,onBlurHandler:i,labelText:"Start from:",defaultValue:""===o?v:o}),Object(k.jsx)(E,{show:a,onFocusHandler:l,onBlurHandler:n,labelText:"End at:",defaultValue:""===h?j:h}),Object(k.jsx)(E,{show:a,onFocusHandler:r,onBlurHandler:c,labelText:"Keep:",defaultValue:""===d?O:d}),a?Object(k.jsx)("div",{className:"example-sentence-indented",children:"Explanation: This removes bullet paragraphs without keyword matches. 'Start From' defines the word or phrase where bullet removal begins in the Word document. 'End at' defines the word or phrase where bullet removal ends. 'Keep' words keeps bullets even though they have no matching keywords."}):""]})]})}function E(e){var t=e.show,a=e.onFocusHandler,s=e.onBlurHandler,l=e.labelText,r=e.defaultValue;return Object(k.jsx)(g.Fragment,{children:t?Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"search-replace-line",children:Object(k.jsx)("span",{className:"indent-span"})}),Object(k.jsx)("div",{className:"search-replace-line",children:Object(k.jsx)("span",{className:"search-replace-label",children:l})}),Object(k.jsx)("div",{className:"search-replace-line",children:Object(k.jsx)("input",{type:"text",className:"keyword",defaultValue:r,onBlur:function(e){s(e)},onFocus:function(e){return a(e)}})})]}):""})}function D(e){var t=e.searchReplaceOnChangeHandler,a=e.searchOnFocusHandler,s=e.searchOnBlurHandler,l=e.replaceOnFocusHandler,r=e.replaceOnBlurHandler,i=e.search,n=e.replace,c=e.searchReplace;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"facet-group-option",children:[Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("input",{type:"checkbox",id:"searchReplaceCheckbox",onChange:function(e){return t(e)}})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("span",{className:"remove-bullets-styling-label",children:"Find and Replace"})})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(E,{show:c,onFocusHandler:a,onBlurHandler:s,labelText:"Find what:",defaultValue:i}),Object(k.jsx)(E,{show:c,onFocusHandler:l,onBlurHandler:r,labelText:"Replace with:",defaultValue:n}),c?Object(k.jsx)("div",{className:"example-sentence-indented",children:"Hint: You might replace the words 'Resume Title' with the Job Title you are applying for."}):""]})]})}function M(e){var t=e.changeHandler,a=e.approachHandler,s=e.keywordStyling,l=s+"Checkbox",r=e.styleKeywords,i=e.approach,n=e.checked;return Object(k.jsx)(g.Fragment,{children:r?Object(k.jsxs)("div",{className:"facet-group-option",children:[Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("span",{className:"indent-span"})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("input",{type:"checkbox",id:l,onChange:function(e){return t(e)},checked:n})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("span",{className:"keyword-styling-label",children:s})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)(q,{approachHandler:a,keywordStyling:s,approach:i})})]}):""})}function T(e){var t=e.changeHandler,a=e.approachHandler,s=e.keywordStyling,l=s+"Checkbox",r=e.highlight,i=e.highlightColorChangeHandler,n=e.highlightColor,c=e.highlightColorLabel,o=e.styleKeywords,h=e.approach;return Object(k.jsx)(g.Fragment,{children:o?Object(k.jsxs)("div",{className:"facet-group-option",children:[Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("span",{className:"indent-span"})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("input",{type:"checkbox",id:l,onChange:function(e){return t(e)},checked:r})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("span",{className:"keyword-styling-label",children:s})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)(q,{approachHandler:a,keywordStyling:s,approach:h})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:!0===r?Object(k.jsx)(F,{className:"highlightColor",highlightColorChangeHandler:i,highlightColor:n,highlightColorLabel:c}):""})]}):""})}function L(e){var t=e.changeHandler,a=e.approachHandler,s=e.highlight,l=e.highlightColorChangeHandler,r=e.highlightColor,i=e.highlightColorLabel,n=e.styleKeywordsChangeHandler,c=e.styleKeywords,o=e.italicizeApproach,h=e.boldfaceApproach,d=e.underlineApproach,u=e.highlightApproach,p=e.italicize,b=e.underline,y=e.boldface;return Object(k.jsxs)(g.Fragment,{children:[Object(k.jsxs)("div",{className:"facet-group-option",children:[Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("input",{type:"checkbox",id:"styleKeywordsCheckbox",onChange:function(e){return n(e)},checked:c})}),Object(k.jsx)("div",{className:"keyword-styling-line",children:Object(k.jsx)("span",{className:"remove-bullets-styling-label",children:"Style Keywords"})})]}),Object(k.jsx)(M,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Italicize",approach:o,checked:p}),Object(k.jsx)(M,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Underline",approach:d,checked:b}),Object(k.jsx)(M,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Boldface",approach:h,checked:y}),Object(k.jsx)(T,{styleKeywords:c,changeHandler:t,approachHandler:a,keywordStyling:"Highlight",highlight:s,highlightColorChangeHandler:l,highlightColor:r,highlightColorLabel:i,approach:u})]})}function q(e){var t=e.approachHandler,a=e.keywordStyling,s=String(a).concat("Approach"),l=e.approach;return Object(k.jsxs)("select",{className:"facet-group-option",onChange:function(e){return t(e)},id:s,value:l,children:[Object(k.jsx)("option",{value:"keyword",children:"Keywords"}),Object(k.jsx)("option",{value:"sentence",children:"Sentences with Keywords"})]})}function G(e){var t="200";e.maxLength&&(t=String(e.maxLength));var a=e.keywordsOnBlurHandler,s=e.keywordsOnFocusHandler;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"search-replace-line",children:Object(k.jsx)("span",{className:"search-replace-label",children:"Keywords"})}),Object(k.jsx)("div",{className:"search-replace-line",children:Object(k.jsx)("input",{type:"text",className:"keyword",maxLength:t,defaultValue:m,onBlur:function(e){a(e)},onFocus:function(e){return s(e)}})})]})}u.a.render(Object(k.jsx)(B,{}),document.getElementById("root"))},49:function(e,t,a){}},[[34,1,2]]]);
//# sourceMappingURL=main.2931a868.chunk.js.map