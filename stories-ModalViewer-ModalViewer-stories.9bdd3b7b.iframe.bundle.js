/*! For license information please see stories-ModalViewer-ModalViewer-stories.9bdd3b7b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[282],{"./src/stories/ModalViewer/ModalViewer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VisibleModal:()=>VisibleModal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ModalViewer_stories});var react=__webpack_require__("./node_modules/react/index.js"),Modal=__webpack_require__("./src/shared/ui/Modal/Modal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ModalViewer=function ModalViewer(_ref){var text=_ref.text,_useState2=_slicedToArray((0,react.useState)(!1),2),visible=_useState2[0],SetVisible=_useState2[1],_useState4=_slicedToArray((0,react.useState)(text),2),inputText=_useState4[0],SetInputText=_useState4[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Modal.Z,{visible,setVisible:SetVisible,children:inputText}),(0,jsx_runtime.jsx)("input",{value:inputText,onChange:function onChange(e){return SetInputText((function(){return e.target.value}))}}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return SetVisible((function(){return!0}))},children:"Show modal"})]})};const ModalViewer_ModalViewer=ModalViewer;try{ModalViewer.displayName="ModalViewer",ModalViewer.__docgenInfo={description:"",displayName:"ModalViewer",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ModalViewer/ModalViewer.tsx#ModalViewer"]={docgenInfo:ModalViewer.__docgenInfo,name:"ModalViewer",path:"src/stories/ModalViewer/ModalViewer.tsx#ModalViewer"})}catch(__react_docgen_typescript_loader_error){}const ModalViewer_stories={title:"Shared/ModalViewer",component:ModalViewer_ModalViewer,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{}};var VisibleModal={args:{text:"Lorem ipsum dolor sit, amet consectetur. Sem viverra magna fusce mus torquent metus dictumst suspendisse lectus quis, laoreet natoque at tempus turpis orci maecenas egestas gravida sociis morbi, scelerisque tortor iaculis ante nunc a malesuada facilisis aptent. Pharetra integer senectus malesuada ridiculus sollicitudin fusce cum commodo purus rhoncus suscipit, diam nisi suspendisse dictumst litora quisque tellus duis vitae porta, sed cras scelerisque id praesent platea nam mollis phasellus non. Fusce molestie fringilla scelerisque ullamcorper justo auctor accumsan, quisque enim nibh vehicula aliquam."}};VisibleModal.parameters={...VisibleModal.parameters,docs:{...VisibleModal.parameters?.docs,source:{originalSource:"{\n  args: {\n    // visible: true,\n    text: 'Lorem ipsum dolor sit, amet consectetur. Sem viverra magna fusce mus torquent metus dictumst suspendisse lectus quis, laoreet natoque at tempus turpis orci maecenas egestas gravida sociis morbi, scelerisque tortor iaculis ante nunc a malesuada facilisis aptent. Pharetra integer senectus malesuada ridiculus sollicitudin fusce cum commodo purus rhoncus suscipit, diam nisi suspendisse dictumst litora quisque tellus duis vitae porta, sed cras scelerisque id praesent platea nam mollis phasellus non. Fusce molestie fringilla scelerisque ullamcorper justo auctor accumsan, quisque enim nibh vehicula aliquam.'\n  }\n}",...VisibleModal.parameters?.docs?.source}}};const __namedExportsOrder=["VisibleModal"]},"./src/shared/ui/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Modal_Modal});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/ui/Modal/Modal.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.Z,options);const Modal_Modal_module=Modal_module.Z&&Modal_module.Z.locals?Modal_module.Z.locals:void 0;var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal=function Modal(_ref){var visible=_ref.visible,setVisible=_ref.setVisible,children=_ref.children;return visible?(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.modal_overlay,children:(0,jsx_runtime.jsxs)("div",{className:Modal_Modal_module.modal_box,children:[(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.close,onClick:function onClick(){return setVisible(!1)}}),(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.text,children})]})}),document.body):null};const Modal_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},setVisible:{defaultValue:null,description:"",name:"setVisible",required:!0,type:{name:"(visible: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/shared/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/ui/Modal/Modal.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".PNH6EktSTpceVONFdBvy {\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    background: rgba(0, 0, 0, 0.7);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .XkeG89_0_rFz9CoZr92p {\n    display: block;\n    background: white;\n    width: 50%;\n    height: 70%;\n    padding: 1rem;\n    border-radius: 1rem;\n  }\n\n  .ih7RdRbk6n1ja5zrt6oQ {\n    display: flex;\n    position: absolute;\n    top: 15%;\n    right: 25%;\n    padding: .5em;\n    text-decoration: none;\n    font-size: 1em;\n    box-sizing: border-box;\n    background-color: black;\n    cursor: pointer;\n    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\n  }\n\n  .lWWYiLgUlhNROie_4B7E{\n    padding-top: 1rem;\n    padding-right: 1rem;\n  }\n  /* .close {\n    display: flex;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    padding: .5em;\n    text-decoration: none;\n    font-size: 1em;\n    box-sizing: border-box;\n    background-color: black;\n    cursor: pointer;\n    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\n  } */","",{version:3,sources:["webpack://./src/shared/ui/Modal/Modal.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,eAAe;IACf,MAAM;IACN,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,cAAc;IACd,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,aAAa;IACb,qBAAqB;IACrB,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,8HAA8H;EAChI;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;EACA;;;;;;;;;;;;KAYG",sourcesContent:[".modal_overlay {\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    background: rgba(0, 0, 0, 0.7);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .modal_box {\n    display: block;\n    background: white;\n    width: 50%;\n    height: 70%;\n    padding: 1rem;\n    border-radius: 1rem;\n  }\n\n  .close {\n    display: flex;\n    position: absolute;\n    top: 15%;\n    right: 25%;\n    padding: .5em;\n    text-decoration: none;\n    font-size: 1em;\n    box-sizing: border-box;\n    background-color: black;\n    cursor: pointer;\n    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\n  }\n\n  .text{\n    padding-top: 1rem;\n    padding-right: 1rem;\n  }\n  /* .close {\n    display: flex;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    padding: .5em;\n    text-decoration: none;\n    font-size: 1em;\n    box-sizing: border-box;\n    background-color: black;\n    cursor: pointer;\n    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\n  } */"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={modal_overlay:"PNH6EktSTpceVONFdBvy",modal_box:"XkeG89_0_rFz9CoZr92p",close:"ih7RdRbk6n1ja5zrt6oQ",text:"lWWYiLgUlhNROie_4B7E"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);