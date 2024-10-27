"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[167],{"./src/features/Cart/ui/CartItem/CartItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MissingPhotoCartItem:()=>MissingPhotoCartItem,OrdinaryCartItem:()=>OrdinaryCartItem,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CartItem_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CartItem_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/features/Cart/ui/CartItem/CartItem.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CartItem_module.Z,options);const CartItem_CartItem_module=CartItem_module.Z&&CartItem_module.Z.locals?CartItem_module.Z.locals:void 0;var Counter=__webpack_require__("./src/shared/ui/Counter/Counter.tsx"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartItem=function CartItem(_ref){var name=_ref.name,count=_ref.count,photo=_ref.photo,price=_ref.price,t=(0,es.$G)().t;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:CartItem_CartItem_module.wrapper,children:[(0,jsx_runtime.jsx)("div",{className:CartItem_CartItem_module.imageWrapper,children:(0,jsx_runtime.jsx)("img",{className:CartItem_CartItem_module.image,src:photo,alt:t("product.photo",{name})})}),(0,jsx_runtime.jsx)("div",{className:CartItem_CartItem_module.infoWrapper,children:(0,jsx_runtime.jsx)("div",{className:CartItem_CartItem_module.title,children:name})}),(0,jsx_runtime.jsxs)("div",{className:CartItem_CartItem_module.cartWrapper,children:[(0,jsx_runtime.jsx)("div",{className:CartItem_CartItem_module.counter,children:(0,jsx_runtime.jsx)(Counter.Z,{count})}),(0,jsx_runtime.jsx)("div",{className:CartItem_CartItem_module.price,children:t("product.price",{price:count*price})}),(0,jsx_runtime.jsx)("div",{className:CartItem_CartItem_module.removeWrapper,children:(0,jsx_runtime.jsx)(Button.Z,{className:CartItem_CartItem_module.remove,lable:t("CartItem.button")})})]})]})})};const CartItem_CartItem=CartItem;try{CartItem.displayName="CartItem",CartItem.__docgenInfo={description:"",displayName:"CartItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"Product"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"Product"}},photo:{defaultValue:null,description:"",name:"photo",required:!0,type:{name:"Product"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/Cart/ui/CartItem/CartItem.tsx#CartItem"]={docgenInfo:CartItem.__docgenInfo,name:"CartItem",path:"src/features/Cart/ui/CartItem/CartItem.tsx#CartItem"})}catch(__react_docgen_typescript_loader_error){}var ThemeProvider=__webpack_require__("./src/shared/providers/ThemeProvider/ThemeProvider.tsx"),LanguageProvider=__webpack_require__("./src/shared/providers/LanguageProvider/LanguageProvider.tsx");const CartItem_stories={title:"Features/CartItem",component:CartItem_CartItem,tags:["autodocs"],parameters:{},argTypes:{count:{control:"number"},name:{control:"text"},price:{control:"number"},photo:{control:"text"}},decorators:[function(story){return(0,jsx_runtime.jsx)(ThemeProvider.Z,{children:(0,jsx_runtime.jsx)(LanguageProvider.i,{children:story()})})}]};var OrdinaryCartItem={args:{count:5,name:"Lorem ipsum",price:19.95,photo:"https://via.placeholder.com/500.png?text=Lorem+ipsum"}},MissingPhotoCartItem={args:{count:5,name:"Lorem ipsum",price:19.95,photo:"https://wrong.com/miss.png"}};OrdinaryCartItem.parameters={...OrdinaryCartItem.parameters,docs:{...OrdinaryCartItem.parameters?.docs,source:{originalSource:"{\n  args: {\n    count: 5,\n    name: 'Lorem ipsum',\n    price: 19.95,\n    photo: 'https://via.placeholder.com/500.png?text=Lorem+ipsum'\n  }\n}",...OrdinaryCartItem.parameters?.docs?.source}}},MissingPhotoCartItem.parameters={...MissingPhotoCartItem.parameters,docs:{...MissingPhotoCartItem.parameters?.docs,source:{originalSource:"{\n  args: {\n    count: 5,\n    name: 'Lorem ipsum',\n    price: 19.95,\n    photo: 'https://wrong.com/miss.png'\n  }\n}",...MissingPhotoCartItem.parameters?.docs?.source}}};const __namedExportsOrder=["OrdinaryCartItem","MissingPhotoCartItem"]},"./src/shared/contexts/LanguageContext/LanguageContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LanguageContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),LanguageContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);const __WEBPACK_DEFAULT_EXPORT__=function useLanguage(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LanguageContext);if(!context)throw new Error("useLanguage must be used within a LanguageProvider");return context}},"./src/shared/contexts/ThemeContext/ThemeContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);const __WEBPACK_DEFAULT_EXPORT__=function useTheme(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);if(!context)throw new Error("useTheme must be used within a ThemeProvider");return context}},"./src/shared/providers/LanguageProvider/LanguageProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>LanguageProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),_contexts_LanguageContext_LanguageContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/contexts/LanguageContext/LanguageContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var LanguageProvider=function LanguageProvider(_ref){var children=_ref.children,i18n=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)().i18n,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(i18n.language),2),currentLanguage=_useState2[0],setCurrentLanguage=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_contexts_LanguageContext_LanguageContext__WEBPACK_IMPORTED_MODULE_2__.A.Provider,{value:{currentLanguage,switchLanguage:function switchLanguage(language){i18n.changeLanguage(language),setCurrentLanguage(language)}},children})};LanguageProvider.displayName="LanguageProvider";try{LanguageProvider.displayName="LanguageProvider",LanguageProvider.__docgenInfo={description:"",displayName:"LanguageProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/providers/LanguageProvider/LanguageProvider.tsx#LanguageProvider"]={docgenInfo:LanguageProvider.__docgenInfo,name:"LanguageProvider",path:"src/shared/providers/LanguageProvider/LanguageProvider.tsx#LanguageProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/providers/ThemeProvider/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/contexts/ThemeContext/ThemeContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("light"),2),theme=_useState2[0],setTheme=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){document.body.parentElement.setAttribute("data-theme",theme)}),[theme]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.N.Provider,{value:{theme,toggleTheme:function toggleTheme(){setTheme((function(prevTheme){return"light"===prevTheme?"dark":"light"}))}},children})};ThemeProvider.displayName="ThemeProvider";const __WEBPACK_DEFAULT_EXPORT__=ThemeProvider;try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/providers/ThemeProvider/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/shared/providers/ThemeProvider/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_Button_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/Button/Button.module.css"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Button=function Button(_ref){var _cn,lable=_ref.lable,className=_ref.className,_ref$disabled=_ref.disabled,disabled=void 0===_ref$disabled||_ref$disabled,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?function(){}:_ref$onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.wrapper,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)((_cn={},_defineProperty(_cn,_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.button_disable,disabled),_defineProperty(_cn,_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.button_enable,!disabled),_defineProperty(_cn,className,!disabled),_defineProperty(_cn,_Button_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.button,!0),_cn)),disabled,onClick,children:lable})})};Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{lable:{defaultValue:null,description:"",name:"lable",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},onClick:{defaultValue:{value:"() => {\n    /* do nothing */\n  }"},description:"",name:"onClick",required:!1,type:{name:"() => void"}},disabled:{defaultValue:{value:"true"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Counter/Counter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Counter_Counter});__webpack_require__("./node_modules/react/index.js");var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Counter_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/ui/Counter/Counter.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Counter_module.Z,options);const Counter_Counter_module=Counter_module.Z&&Counter_module.Z.locals?Counter_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Counter=function Counter(_ref){var count=_ref.count,min=_ref.min,max=_ref.max,_ref$disabled=_ref.disabled,disabled=void 0===_ref$disabled||_ref$disabled,_ref$onIncrement=_ref.onIncrement,onIncrement=void 0===_ref$onIncrement?function(){}:_ref$onIncrement,_ref$onDecrement=_ref.onDecrement,onDecrement=void 0===_ref$onDecrement?function(){}:_ref$onDecrement,_ref$onInputChange=_ref.onInputChange,onInputChange=void 0===_ref$onInputChange?function(value){}:_ref$onInputChange;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx.Z)(Counter_Counter_module.wrapper),children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return onDecrement()},className:(0,clsx.Z)(Counter_Counter_module.counter,_defineProperty({},Counter_Counter_module.counter_enable,!disabled&&(void 0===min||count>min))),disabled:disabled||void 0!==min&&count<=min,children:"-"}),(0,jsx_runtime.jsx)("input",{className:(0,clsx.Z)(Counter_Counter_module.input),type:"number",value:count,disabled,onChange:function onChange(event){return(void 0===max||Number(event.target.value)<=max)&&(void 0===min||Number(event.target.value)>=min)?onInputChange(Number(event.target.value)):event.target.value=count.toString()}}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return onIncrement()},className:(0,clsx.Z)(Counter_Counter_module.counter,_defineProperty({},Counter_Counter_module.counter_enable,!disabled&&(void 0===max||count<max))),disabled:disabled||void 0!==max&&count>=max,children:"+"})]})};Counter.displayName="Counter";const Counter_Counter=Counter;try{Counter.displayName="Counter",Counter.__docgenInfo={description:"",displayName:"Counter",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"true"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onIncrement:{defaultValue:{value:"() => {\n    /* do nothing */\n  }"},description:"",name:"onIncrement",required:!1,type:{name:"() => void"}},onDecrement:{defaultValue:{value:"() => {\n    /* do nothing */\n  }"},description:"",name:"onDecrement",required:!1,type:{name:"() => void"}},onInputChange:{defaultValue:{value:"(value: number) => {\n    /* do nothing */\n  }"},description:"",name:"onInputChange",required:!1,type:{name:"(value: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Counter/Counter.tsx#Counter"]={docgenInfo:Counter.__docgenInfo,name:"Counter",path:"src/shared/ui/Counter/Counter.tsx#Counter"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/features/Cart/ui/CartItem/CartItem.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".kv5fwiOimDSO11YP3WrX {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5%;\n    color: var(--text-color);\n    background-color: var(--background-color);\n    border-color: var(--border-color);\n}\n\n.Y2bqJnrS7w7wZJurmiGA {\n    display: flex;\n    align-items: center;\n}\n\n.AIVNmhbEsymjvgWI3_oh {\n    max-height: 10rem;\n}\n\n.v8YCX4JVTf72wxw4zImh {\n    display: flex;\n    align-items: center;\n    gap: 5%;\n}\n\n.QXdwsPColTfOxuTbW0Ko {\n    white-space:nowrap;\n}\n\n.Gtf2E4EBO4kEPMgqGgxW {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 5%;\n}\n\n.Zyj8zhnDD1wOvv0R_SjD {\n    /* padding: 0.5rem; */\n    width: 6rem;\n    height: 30px;\n}\n\n.S0Y6Et5OGrGoG7o8dOAy {\n    white-space: nowrap;\n}\n\n.avwyL7OaSfPpw4yI5ewH {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.uH4LcfO9D3XlYh5IJjLS {\n    color: var(--text-color);\n    background-color: #f00000;\n}","",{version:3,sources:["webpack://./src/features/Cart/ui/CartItem/CartItem.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,eAAe;IACf,OAAO;IACP,wBAAwB;IACxB,yCAAyC;IACzC,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,OAAO;AACX;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;IACxB,yBAAyB;AAC7B",sourcesContent:[".wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5%;\n    color: var(--text-color);\n    background-color: var(--background-color);\n    border-color: var(--border-color);\n}\n\n.imageWrapper {\n    display: flex;\n    align-items: center;\n}\n\n.image {\n    max-height: 10rem;\n}\n\n.infoWrapper {\n    display: flex;\n    align-items: center;\n    gap: 5%;\n}\n\n.title {\n    white-space:nowrap;\n}\n\n.cartWrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 5%;\n}\n\n.counter {\n    /* padding: 0.5rem; */\n    width: 6rem;\n    height: 30px;\n}\n\n.price {\n    white-space: nowrap;\n}\n\n.removeWrapper {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.remove {\n    color: var(--text-color);\n    background-color: #f00000;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"kv5fwiOimDSO11YP3WrX",imageWrapper:"Y2bqJnrS7w7wZJurmiGA",image:"AIVNmhbEsymjvgWI3_oh",infoWrapper:"v8YCX4JVTf72wxw4zImh",title:"QXdwsPColTfOxuTbW0Ko",cartWrapper:"Gtf2E4EBO4kEPMgqGgxW",counter:"Zyj8zhnDD1wOvv0R_SjD",price:"S0Y6Et5OGrGoG7o8dOAy",removeWrapper:"avwyL7OaSfPpw4yI5ewH",remove:"uH4LcfO9D3XlYh5IJjLS"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/ui/Button/Button.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"\n.KnbWRst5OWsvw_AfhgzV {\n    text-align: center;\n    width: 100%;\n    height: 100%;\n}\n\n.yrZCaXywqaTn3zvYTZ9X {\n    width: 100%;\n    height: 100%;\n    border-style: none;\n    /* background-color: #ffd700; */\n}\n\n.hjImmWmbZlBtZrkKZEst{\n    background-color: var(--disable-color);\n    color: var(--disable-text-color);\n}\n\n.AI3HENxisCPgacwJe7SO{\n    color: var(--text-color);\n    background-color: var(--secondary-color);\n    /* background-color: #999999; */\n}\n\n.AI3HENxisCPgacwJe7SO:active {\n    background: var(--active-color);\n    outline: none;\n}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.css"],names:[],mappings:";AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,+BAA+B;AACnC;;AAEA;IACI,sCAAsC;IACtC,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;IACxB,wCAAwC;IACxC,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,aAAa;AACjB",sourcesContent:["\n.wrapper {\n    text-align: center;\n    width: 100%;\n    height: 100%;\n}\n\n.button {\n    width: 100%;\n    height: 100%;\n    border-style: none;\n    /* background-color: #ffd700; */\n}\n\n.button_disable{\n    background-color: var(--disable-color);\n    color: var(--disable-text-color);\n}\n\n.button_enable{\n    color: var(--text-color);\n    background-color: var(--secondary-color);\n    /* background-color: #999999; */\n}\n\n.button_enable:active {\n    background: var(--active-color);\n    outline: none;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"KnbWRst5OWsvw_AfhgzV",button:"yrZCaXywqaTn3zvYTZ9X",button_disable:"hjImmWmbZlBtZrkKZEst",button_enable:"AI3HENxisCPgacwJe7SO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/ui/Counter/Counter.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.ecXpuiiXotz47q9nuRNj {\n    height: calc(100% - 2px);\n    width: calc(100% - 2px);\n    border: 1px solid var(--border-color);\n}\n\n.MFhbggUAQgRlaAt66aRG {\n    width: 20%;\n    height: 100%;\n    border-style: none;\n}\n\n.Rqmgj5RR7eGqc7eQylYE:active {\n    background: var(--active-color);\n    outline: none;\n}\n\n.F4O3up2ykkeFcebwLHYQ {\n    width: 60%;\n    height: 100%;\n    text-align: center;\n    border-style: none;\n    box-sizing: border-box;\n    outline: none;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type="number"] {\n    /* -moz-appearance:textfield; */\n    appearance: textfield;\n}',"",{version:3,sources:["webpack://./src/shared/ui/Counter/Counter.module.css"],names:[],mappings:"AAAA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;AACjB;;AAEA;;IAEI,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,+BAA+B;IAC/B,qBAAqB;AACzB",sourcesContent:['.wrapper {\n    height: calc(100% - 2px);\n    width: calc(100% - 2px);\n    border: 1px solid var(--border-color);\n}\n\n.counter {\n    width: 20%;\n    height: 100%;\n    border-style: none;\n}\n\n.counter_enable:active {\n    background: var(--active-color);\n    outline: none;\n}\n\n.input {\n    width: 60%;\n    height: 100%;\n    text-align: center;\n    border-style: none;\n    box-sizing: border-box;\n    outline: none;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type="number"] {\n    /* -moz-appearance:textfield; */\n    appearance: textfield;\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"ecXpuiiXotz47q9nuRNj",counter:"MFhbggUAQgRlaAt66aRG",counter_enable:"Rqmgj5RR7eGqc7eQylYE",input:"F4O3up2ykkeFcebwLHYQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/ui/Button/Button.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_Button_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/ui/Button/Button.module.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_Button_module_css__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_Button_module_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_Button_module_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_use_1_Button_module_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);