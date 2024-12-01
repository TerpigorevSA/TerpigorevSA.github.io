"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[789],{"./src/stories/ComponentFetchListViewer/OperationFetchListViewer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SimpleOperationFetchListViewer:()=>SimpleOperationFetchListViewer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OperationFetchListViewer_stories});var react=__webpack_require__("./node_modules/react/index.js"),OperationItem=__webpack_require__("./src/entities/Operation/ui/OperationItem/OperationItem.tsx"),fakeGenerators=__webpack_require__("./src/shared/lib/fakeGenerators/fakeGenerators.ts"),ComponentFetchList=__webpack_require__("./src/shared/ui/ComponentFetchList/ComponentFetchList.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var OperationFetchListViewer=function OperationFetchListViewer(){var _useState2=_slicedToArray((0,react.useState)(Array.from({length:20}).map((function(){return(0,fakeGenerators.ZB)((0,fakeGenerators.yN)(new Date("2022-01-01"),new Date("2022-12-31")))}))),2),items=_useState2[0],setItems=_useState2[1],fetchItems=(0,react.useCallback)((function(){setItems([].concat(_toConsumableArray(items),_toConsumableArray(Array.from({length:20}).map((function(){return(0,fakeGenerators.ZB)((0,fakeGenerators.yN)(new Date("2022-01-01"),new Date("2022-12-31")))})))))}),[items]),renderCallback=(0,react.useCallback)((function(item){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(OperationItem.Z,{name:item.name,desc:item.desc,amount:item.amount,categoryName:item.category.name})},item.id)}),[]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(ComponentFetchList.Z,{items,doFetch:fetchItems,render:renderCallback})})};const ComponentFetchListViewer_OperationFetchListViewer=OperationFetchListViewer;try{OperationFetchListViewer.displayName="OperationFetchListViewer",OperationFetchListViewer.__docgenInfo={description:"",displayName:"OperationFetchListViewer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ComponentFetchListViewer/OperationFetchListViewer.tsx#OperationFetchListViewer"]={docgenInfo:OperationFetchListViewer.__docgenInfo,name:"OperationFetchListViewer",path:"src/stories/ComponentFetchListViewer/OperationFetchListViewer.tsx#OperationFetchListViewer"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/app/localization/index.ts");var ThemeProvider=__webpack_require__("./src/shared/providers/ThemeProvider/ThemeProvider.tsx"),LanguageProvider=__webpack_require__("./src/shared/providers/LanguageProvider/LanguageProvider.tsx");const OperationFetchListViewer_stories={title:"Shared/ComponentFetchListViewer/Operation",component:ComponentFetchListViewer_OperationFetchListViewer,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[function(story){return(0,jsx_runtime.jsx)(ThemeProvider.Z,{children:(0,jsx_runtime.jsx)(LanguageProvider.i,{children:story()})})}]};var SimpleOperationFetchListViewer={};SimpleOperationFetchListViewer.parameters={...SimpleOperationFetchListViewer.parameters,docs:{...SimpleOperationFetchListViewer.parameters?.docs,source:{originalSource:"{}",...SimpleOperationFetchListViewer.parameters?.docs?.source}}};const __namedExportsOrder=["SimpleOperationFetchListViewer"]},"./src/app/localization/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/app/localization/settings.ts")},"./src/app/localization/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Languages});var i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");const en_namespaceObject=JSON.parse('{"category":{},"operation":{"amount":"{{amount, currency}}","description_undefined":"undefined"},"product":{"price":"{{price, currency}}","oldPrice":"{{oldPrice, currency}}","description_undefined":"undefined","photo_alt":"Product {{name}}"},"OperationDetail":{"edit":"Edit"},"ProductDetail":{},"ProductItem":{},"CartButton":{"button":"Add to cart"},"CartItem":{"button":"Remove"}}'),ru_namespaceObject=JSON.parse('{"categoty":{},"operation":{"amount":"{{amount, currency}}","description_undefined":"неописуемо"},"product":{"price":"{{price, currency}}","oldPrice":"{{oldPrice, currency}}","description_undefined":"неописуемо","photo_alt":"Продукт {{name}}"},"OperationDetail":{"edit":"Редактировать"},"ProductDetail":{},"ProductItem":{},"CartButton":{"button":"В корзину"},"CartItem":{"button":"Удалить"}}');var Languages=function(Languages){return Languages.en="en",Languages.ru="ru",Languages}({});i18next.ZP.use(i18nextBrowserLanguageDetector.Z).use(es.Db).init({resources:{en:{translation:en_namespaceObject},ru:{translation:ru_namespaceObject}},fallbackLng:Languages.ru,interpolation:{format:function format(value,_format,lng){if("currency"===_format){return new Intl.NumberFormat(lng,{style:"currency",currency:"RUB",currencyDisplay:"symbol"}).format(value).replace("RUB","₽")}return"date"===_format?new Intl.DateTimeFormat(lng).format(value):value},escapeValue:!1}})},"./src/entities/Operation/ui/OperationItem/OperationItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>OperationItem_OperationItem});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OperationItem_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/entities/Operation/ui/OperationItem/OperationItem.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(OperationItem_module.Z,options);const OperationItem_OperationItem_module=OperationItem_module.Z&&OperationItem_module.Z.locals?OperationItem_module.Z.locals:void 0;var cutStringHelper=__webpack_require__("./src/shared/lib/cutStringHelper.ts"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OperationItem=function OperationItem(_ref){var name=_ref.name,categoryName=_ref.categoryName,desc=_ref.desc,amount=_ref.amount,t=(0,es.$G)().t;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx.Z)(OperationItem_OperationItem_module.wrapper),children:[(0,jsx_runtime.jsxs)("div",{className:(0,clsx.Z)(OperationItem_OperationItem_module.infoWrapper),children:[(0,jsx_runtime.jsx)("span",{className:(0,clsx.Z)(OperationItem_OperationItem_module.name),children:name}),(0,jsx_runtime.jsx)("span",{className:(0,clsx.Z)(OperationItem_OperationItem_module.category),children:categoryName})]}),(0,jsx_runtime.jsx)("div",{className:(0,clsx.Z)(OperationItem_OperationItem_module.description),children:(0,cutStringHelper.Z)(desc,100)||t("operation.description_undefined")}),(0,jsx_runtime.jsx)("div",{className:(0,clsx.Z)(OperationItem_OperationItem_module.total),style:{color:amount>=0?"green":"red"},children:t("operation.amount",{amount})})]})};OperationItem.displayName="OperationItem";const OperationItem_OperationItem=(0,react.memo)(OperationItem);try{OperationItem.displayName="OperationItem",OperationItem.__docgenInfo={description:"",displayName:"OperationItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"Operation"}},desc:{defaultValue:null,description:"",name:"desc",required:!0,type:{name:"Operation"}},amount:{defaultValue:null,description:"",name:"amount",required:!0,type:{name:"Operation"}},categoryName:{defaultValue:null,description:"",name:"categoryName",required:!0,type:{name:"Category"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/entities/Operation/ui/OperationItem/OperationItem.tsx#OperationItem"]={docgenInfo:OperationItem.__docgenInfo,name:"OperationItem",path:"src/entities/Operation/ui/OperationItem/OperationItem.tsx#OperationItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/contexts/LanguageContext/LanguageContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LanguageContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),LanguageContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);const __WEBPACK_DEFAULT_EXPORT__=function useLanguage(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LanguageContext);if(!context)throw new Error("useLanguage must be used within a LanguageProvider");return context}},"./src/shared/contexts/ThemeContext/ThemeContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>darkTheme,Ni:()=>ThemeContext,Wb:()=>lightTheme,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lightTheme="light",darkTheme="dark",ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);const __WEBPACK_DEFAULT_EXPORT__=function useTheme(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);if(!context)throw new Error("useTheme must be used within a ThemeProvider");return context}},"./src/shared/lib/cutStringHelper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function cutStringHelper(value,length){return value&&value.length>length?value.substring(0,length-3)+"...":value}},"./src/shared/lib/fakeGenerators/fakeGenerators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZB:()=>createRandomOperation,qN:()=>createRandomProduct,yN:()=>getRandomDate});var uuid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),createRandomProduct=function createRandomProduct(createdAt){var id=getRandomId(),category=getRandomCategory(),price=getRandom(10,1e3,2);return{id,name:"Продукт ".concat(id),photo:"store/photos/products/".concat(id,".jpeg"),createdAt,category,price,oldPrice:Math.random()<.5?price+Math.trunc(100*price*getRandom(-.2,.2,2))/100:void 0,desc:Math.random()<.5?"Это ".concat(category.name.toLowerCase(),"."):void 0}},createRandomOperation=function createRandomOperation(createdAt){var id=getRandomId(),category=getRandomCategory(),type=Math.random()<.5?"Cost":"Profit";return{id,name:"Операция ".concat(id),createdAt,category,amount:getRandom(10,1e3,2)*("Cost"===type?-1:1),desc:Math.random()<.5?"Операция ".concat(type," id(").concat(id,")."):void 0,type}},getRandomId=function getRandomId(){return(0,uuid__WEBPACK_IMPORTED_MODULE_0__.Z)()},getRandomDate=function getRandomDate(start,end){var date=new Date(+start+Math.random()*(end.getTime()-start.getTime())),hour=Math.floor(24*Math.random()),minute=0===hour?1:Math.floor(60*Math.random());return date.setHours(hour),date.setMinutes(minute),date.toLocaleString("ru-RU",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})},getRandom=function getRandom(min,max,digits){return Math.round((min+Math.random()*(max-min))*Math.pow(10,digits))/Math.pow(10,digits)},getRandomCategory=function getRandomCategory(){var categories=[{id:"1",name:"Прям вот очень нужное"},{id:"2",name:"Не так, что бы нужное",photo:"store/photos/categories/2.jpeg"},{id:"3",name:"Совсем выбрось",photo:"store/photos/categories/3.jpeg"},{id:"4",name:"Необходимое"},{id:"5",name:"Вроде некуда, а жаль"}];return categories[Math.trunc(Math.random()*categories.length)]}},"./src/shared/providers/LanguageProvider/LanguageProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>LanguageProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),_contexts_LanguageContext_LanguageContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/contexts/LanguageContext/LanguageContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var LanguageProvider=function LanguageProvider(_ref){var children=_ref.children,i18n=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)().i18n,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(i18n.language),2),currentLanguage=_useState2[0],setCurrentLanguage=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_contexts_LanguageContext_LanguageContext__WEBPACK_IMPORTED_MODULE_2__.A.Provider,{value:{currentLanguage,switchLanguage:function switchLanguage(language){i18n.changeLanguage(language),setCurrentLanguage(language)}},children})};LanguageProvider.displayName="LanguageProvider";try{LanguageProvider.displayName="LanguageProvider",LanguageProvider.__docgenInfo={description:"",displayName:"LanguageProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/providers/LanguageProvider/LanguageProvider.tsx#LanguageProvider"]={docgenInfo:LanguageProvider.__docgenInfo,name:"LanguageProvider",path:"src/shared/providers/LanguageProvider/LanguageProvider.tsx#LanguageProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/providers/ThemeProvider/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/contexts/ThemeContext/ThemeContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Wb),2),theme=_useState2[0],setTheme=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){document.body.parentElement.setAttribute("data-theme",theme)}),[theme]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Ni.Provider,{value:{theme,toggleTheme:function toggleTheme(){setTheme((function(prevTheme){return prevTheme===_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Wb?_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.$_:_contexts_ThemeContext_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.Wb}))}},children})};ThemeProvider.displayName="ThemeProvider";const __WEBPACK_DEFAULT_EXPORT__=ThemeProvider;try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/providers/ThemeProvider/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/shared/providers/ThemeProvider/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/ComponentFetchList/ComponentFetchList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ComponentFetchList_ComponentFetchList});var react=__webpack_require__("./node_modules/react/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const useIntersectionObserver=function useIntersectionObserve(ref,onIntersect,options){(0,react.useEffect)((function(){var observer=new IntersectionObserver((function(_ref){_slicedToArray(_ref,1)[0].isIntersecting&&onIntersect()}),options),currentRef=ref.current;return currentRef&&observer.observe(currentRef),function(){currentRef&&observer.unobserve(currentRef)}}),[options,ref])};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ComponentFetchList=function ComponentFetchList(_ref){var items=_ref.items,render=_ref.render,doFetch=_ref.doFetch,targetRef=(0,react.useRef)(null);return useIntersectionObserver(targetRef,doFetch,{threshold:.5}),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map((function(item,index){return index===items.length-2?react.cloneElement(render(item),{ref:targetRef}):render(item)}))})};const ComponentFetchList_ComponentFetchList=(0,react.memo)(ComponentFetchList);try{ComponentFetchList.displayName="ComponentFetchList",ComponentFetchList.__docgenInfo={description:"",displayName:"ComponentFetchList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},doFetch:{defaultValue:null,description:"",name:"doFetch",required:!0,type:{name:"() => void"}},render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"(item: T) => ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/ComponentFetchList/ComponentFetchList.tsx#ComponentFetchList"]={docgenInfo:ComponentFetchList.__docgenInfo,name:"ComponentFetchList",path:"src/shared/ui/ComponentFetchList/ComponentFetchList.tsx#ComponentFetchList"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/entities/Operation/ui/OperationItem/OperationItem.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ZsqXL0_Rqm4TTcHNo1Yt {\n    display: flex;\n    width: 100%;\n    margin-bottom: 10px;\n    gap:5%;\n    color: var(--text-color);\n    background-color: var(--background-color);\n    border-color: var(--border-color);\n}\n\n.VyAKRgqPc0c5HJfcI0KQ {\n    width: calc((100% - 5% - 15ch) * 2 / 3);\n}\n\n.zlB_yOYoaBnAYUBX_PR_{\n    font-size: 1rem;\n    font-weight: bolder;\n    display: block;\n    text-align: justify;\n}\n\n.D1xhTlMWXKx_WsI4IDie {\n    font-size: 0.95rem;\n    display: block;\n    text-align: justify;\n}\n\n.XF7hXfqKpcjmyGmc6M7k {\n    font-size: 1rem;\n    width: calc((100% - 5% - 15ch) / 3);\n    text-align: justify;\n}\n\n.lwVhBAraIVrEeOA2gE8L {\n    font-size: 1rem;\n    width: 15ch;\n    text-align: right;\n    font-family: monospace;\n}","",{version:3,sources:["webpack://./src/entities/Operation/ui/OperationItem/OperationItem.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,MAAM;IACN,wBAAwB;IACxB,yCAAyC;IACzC,iCAAiC;AACrC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,sBAAsB;AAC1B",sourcesContent:[".wrapper {\n    display: flex;\n    width: 100%;\n    margin-bottom: 10px;\n    gap:5%;\n    color: var(--text-color);\n    background-color: var(--background-color);\n    border-color: var(--border-color);\n}\n\n.infoWrapper {\n    width: calc((100% - 5% - 15ch) * 2 / 3);\n}\n\n.name{\n    font-size: 1rem;\n    font-weight: bolder;\n    display: block;\n    text-align: justify;\n}\n\n.category {\n    font-size: 0.95rem;\n    display: block;\n    text-align: justify;\n}\n\n.description {\n    font-size: 1rem;\n    width: calc((100% - 5% - 15ch) / 3);\n    text-align: justify;\n}\n\n.total {\n    font-size: 1rem;\n    width: 15ch;\n    text-align: right;\n    font-family: monospace;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"ZsqXL0_Rqm4TTcHNo1Yt",infoWrapper:"VyAKRgqPc0c5HJfcI0KQ",name:"zlB_yOYoaBnAYUBX_PR_",category:"D1xhTlMWXKx_WsI4IDie",description:"XF7hXfqKpcjmyGmc6M7k",total:"lwVhBAraIVrEeOA2gE8L"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);