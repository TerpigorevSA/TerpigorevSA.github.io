"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[684],{"./src/stories/LanguageSwitcherViewer/LanguageSwitcherViewer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LanguageSwitcher:()=>LanguageSwitcherViewer_stories_LanguageSwitcher,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LanguageSwitcherViewer_stories});__webpack_require__("./node_modules/react/index.js");var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),LanguageProvider=__webpack_require__("./src/shared/providers/LanguageProvider/LanguageProvider.tsx"),LanguageSwitcher=__webpack_require__("./src/shared/ui/LanguageSwitcher/LanguageSwitcher.tsx"),ProductItem=__webpack_require__("./src/entities/Product/ui/ProductItem/ProductItem.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LanguageSwitcherViewer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/stories/LanguageSwitcherViewer/LanguageSwitcherViewer.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LanguageSwitcherViewer_module.Z,options);const LanguageSwitcherViewer_LanguageSwitcherViewer_module=LanguageSwitcherViewer_module.Z&&LanguageSwitcherViewer_module.Z.locals?LanguageSwitcherViewer_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LanguageSwitcherViewer=function LanguageSwitcherViewer(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(LanguageProvider.i,{children:[(0,jsx_runtime.jsx)("div",{className:(0,clsx.Z)(LanguageSwitcherViewer_LanguageSwitcherViewer_module.wrapper),children:(0,jsx_runtime.jsx)(LanguageSwitcher.Z,{})}),(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)(ProductItem.Z,{name:"Lorem ipsum",price:19.95,desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit nostra.",photo:"https://via.placeholder.com/500.png?text=Lorem+ipsum"})]})})};const LanguageSwitcherViewer_LanguageSwitcherViewer=LanguageSwitcherViewer;try{LanguageSwitcherViewer.displayName="LanguageSwitcherViewer",LanguageSwitcherViewer.__docgenInfo={description:"",displayName:"LanguageSwitcherViewer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/LanguageSwitcherViewer/LanguageSwitcherViewer.tsx#LanguageSwitcherViewer"]={docgenInfo:LanguageSwitcherViewer.__docgenInfo,name:"LanguageSwitcherViewer",path:"src/stories/LanguageSwitcherViewer/LanguageSwitcherViewer.tsx#LanguageSwitcherViewer"})}catch(__react_docgen_typescript_loader_error){}const LanguageSwitcherViewer_stories={title:"Shared/LanguageSwitcherViewer",component:LanguageSwitcherViewer_LanguageSwitcherViewer,tags:["autodocs"],parameters:{},argTypes:{}};var LanguageSwitcherViewer_stories_LanguageSwitcher={};LanguageSwitcherViewer_stories_LanguageSwitcher.parameters={...LanguageSwitcherViewer_stories_LanguageSwitcher.parameters,docs:{...LanguageSwitcherViewer_stories_LanguageSwitcher.parameters?.docs,source:{originalSource:"{}",...LanguageSwitcherViewer_stories_LanguageSwitcher.parameters?.docs?.source}}};const __namedExportsOrder=["LanguageSwitcher"]},"./src/app/localization/settings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Languages});var i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");const en_namespaceObject=JSON.parse('{"category":{},"operation":{"amount":"{{amount, currency}}","description_undefined":"undefined"},"product":{"price":"{{price, currency}}","oldPrice":"{{oldPrice, currency}}","description_undefined":"undefined","photo_alt":"Product {{name}}"},"OperationDetail":{"edit":"Edit"},"ProductDetail":{},"ProductItem":{},"CartButton":{"button":"Add to cart"},"CartItem":{"button":"Remove"},"EditProfile":{"title":"Profile editing","userName":"Name","userNamePlaceholder":"Enter name","about":"Description","aboutPlaceholder":"Enter description","button":"Save","errors":{"userNameRequired":"Name is required"}},"ChangePassword":{"title":"Password change","oldPassword":"Old password","oldPasswordPlaceholder":"Enter old password","newPassword":"New password","newPasswordPlaceholder":"Enter new password","confirmPassword":"Confirm password","confirmPasswordPlaceholder":"Confirm password","button":"Save","errors":{"oldPasswordRequired":"Old password is required","newPasswordRequired":"New password is required","confirmPasswordRequired":"Password confirmation is required","confirmPasswordMatch":"Passwords do not match"}},"ProfileScreen":{"title":"Profile"},"SignIn":{"title":"Sign In","email":"Email","emailPlaceholder":"Enter your email","password":"Password","passwordPlaceholder":"Enter your password","button":"Log In","errors":{"emailRequired":"Email is required","invalidEmail":"Invalid email","passwordRequired":"Password is required"}},"SignUp":{"title":"Sign Up","email":"Email","emailPlaceholder":"Enter your email","password":"Password","passwordPlaceholder":"Enter your password","confirmPassword":"Confirm Password","confirmPasswordPlaceholder":"Confirm your password","button":"Register","errors":{"emailRequired":"Email is required","invalidEmail":"Invalid email","passwordRequired":"Password is required","passwordLength":"Password must be at least {{passwordLength}} characters long","confirmPasswordRequired":"Password confirmation is required","confirmPasswordMatch":"Passwords do not match"}},"ProductEdit":{"name":"Name","namePlaceholder":"Enter name","photos":"Photos","photoPlaceholder":"Enter photo URL","addPhoto":"Add photo","removePhoto":"Remove","description":"Description","descriptionPlaceholder":"Enter description","price":"Price","pricePlaceholder":"Enter price","oldPrice":"Old Price","oldPricePlaceholder":"Enter old price","category":"Category","selectCategory":"Select category","errors":{"nameRequired":"Name is required","photosRequired":"Photo is required","photosInvalid":"Each URL must be valid","priceRequired":"Price is required","priceMin":"Price must be at least 0","categoryRequired":"Category is required"},"button":"Save"}}'),ru_namespaceObject=JSON.parse('{"categoty":{},"operation":{"amount":"{{amount, currency}}","description_undefined":"неописуемо"},"product":{"price":"{{price, currency}}","oldPrice":"{{oldPrice, currency}}","description_undefined":"неописуемо","photo_alt":"Продукт {{name}}"},"OperationDetail":{"edit":"Редактировать"},"ProductDetail":{},"ProductItem":{},"CartButton":{"button":"В корзину"},"CartItem":{"button":"Удалить"},"EditProfile":{"title":"Редактирование профиля","userName":"Имя","userNamePlaceholder":"Введите имя","about":"Описание","aboutPlaceholder":"Введите описание","button":"Сохранить","errors":{"userNameRequired":"Имя обязательно"}},"ChangePassword":{"title":"Смена пароля","oldPassword":"Старый пароль","oldPasswordPlaceholder":"Введите старый пароль","newPassword":"Новый пароль","newPasswordPlaceholder":"Введите новый пароль","confirmPassword":"Подтвердите пароль","confirmPasswordPlaceholder":"Подтвердите пароль","button":"Сохранить","errors":{"oldPasswordRequired":"Старый пароль обязателен","newPasswordRequired":"Новый пароль обязателен","confirmPasswordRequired":"Подтверждение пароля обязательно","confirmPasswordMatch":"Пароли не совпадают"}},"ProfileScreen":{"title":"Профиль"},"SignIn":{"title":"Вход","email":"Email","emailPlaceholder":"Введите email","password":"Пароль","passwordPlaceholder":"Введите пароль","button":"Войти","errors":{"emailRequired":"Email обязателен","invalidEmail":"Некорректный email","passwordRequired":"Пароль обязателен"}},"SignUp":{"title":"Регистрация","email":"Email","emailPlaceholder":"Введите email","password":"Пароль","passwordPlaceholder":"Введите пароль","confirmPassword":"Подтвердите пароль","confirmPasswordPlaceholder":"Подтвердите пароль","button":"Зарегистрироваться","errors":{"emailRequired":"Email обязателен","invalidEmail":"Некорректный email","passwordRequired":"Пароль обязателен","passwordLength":"Пароль должен быть не менее {{passwordLength}} символов","confirmPasswordRequired":"Подтверждение пароля обязательно","confirmPasswordMatch":"Пароли не совпадают"}},"ProductEdit":{"name":"Имя","namePlaceholder":"Введите имя","photos":"Фотографии","photoPlaceholder":"Введите URL фотографии","addPhoto":"Добавить фото","removePhoto":"Удалить","description":"Описание","descriptionPlaceholder":"Введите описание","price":"Цена","pricePlaceholder":"Введите цену","oldPrice":"Старая цена","oldPricePlaceholder":"Введите старую цену","category":"Категория","selectCategory":"Выберите категорию","errors":{"nameRequired":"Имя обязательно","photosRequired":"Укажите фотографию","photosInvalid":"Каждая ссылка должна быть корректным URL","priceRequired":"Цена обязательна","priceMin":"Цена должна быть не меньше 0","categoryRequired":"Категория обязательна"},"button":"Сохранить"}}');var Languages=function(Languages){return Languages.en="en",Languages.ru="ru",Languages}({});i18next.ZP.use(i18nextBrowserLanguageDetector.Z).use(es.Db).init({resources:{en:{translation:en_namespaceObject},ru:{translation:ru_namespaceObject}},fallbackLng:Languages.ru,interpolation:{format:function format(value,_format,lng){if("currency"===_format){return new Intl.NumberFormat(lng,{style:"currency",currency:"RUB",currencyDisplay:"symbol"}).format(value).replace("RUB","₽")}return"date"===_format?new Intl.DateTimeFormat(lng).format(value):value},escapeValue:!1}})},"./src/shared/contexts/LanguageContext/LanguageContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LanguageContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),LanguageContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);const __WEBPACK_DEFAULT_EXPORT__=function useLanguage(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LanguageContext);if(!context)throw new Error("useLanguage must be used within a LanguageProvider");return context}},"./src/shared/providers/LanguageProvider/LanguageProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>LanguageProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),_contexts_LanguageContext_LanguageContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/contexts/LanguageContext/LanguageContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var LanguageProvider=function LanguageProvider(_ref){var children=_ref.children,i18n=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)().i18n,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(i18n.language),2),currentLanguage=_useState2[0],setCurrentLanguage=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_contexts_LanguageContext_LanguageContext__WEBPACK_IMPORTED_MODULE_2__.A.Provider,{value:{currentLanguage,switchLanguage:function switchLanguage(language){i18n.changeLanguage(language),setCurrentLanguage(language)}},children})};LanguageProvider.displayName="LanguageProvider";try{LanguageProvider.displayName="LanguageProvider",LanguageProvider.__docgenInfo={description:"",displayName:"LanguageProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/providers/LanguageProvider/LanguageProvider.tsx#LanguageProvider"]={docgenInfo:LanguageProvider.__docgenInfo,name:"LanguageProvider",path:"src/shared/providers/LanguageProvider/LanguageProvider.tsx#LanguageProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/LanguageSwitcher/LanguageSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>LanguageSwitcher_LanguageSwitcher});__webpack_require__("./node_modules/react/index.js");var LanguageContext=__webpack_require__("./src/shared/contexts/LanguageContext/LanguageContext.tsx"),settings=__webpack_require__("./src/app/localization/settings.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LanguageSwitcher_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/ui/LanguageSwitcher/LanguageSwitcher.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LanguageSwitcher_module.Z,options);const LanguageSwitcher_LanguageSwitcher_module=LanguageSwitcher_module.Z&&LanguageSwitcher_module.Z.locals?LanguageSwitcher_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LanguageSwitcher=function LanguageSwitcher(){var _useLanguage=(0,LanguageContext.Z)(),currentLanguage=_useLanguage.currentLanguage,switchLanguage=_useLanguage.switchLanguage;return(0,jsx_runtime.jsxs)("div",{className:LanguageSwitcher_LanguageSwitcher_module.wrapper,children:[(0,jsx_runtime.jsx)("button",{className:LanguageSwitcher_LanguageSwitcher_module.button,onClick:function onClick(){return switchLanguage(settings.l.en)},hidden:currentLanguage===settings.l.en,children:"English"}),(0,jsx_runtime.jsx)("button",{className:LanguageSwitcher_LanguageSwitcher_module.button,onClick:function onClick(){return switchLanguage(settings.l.ru)},hidden:currentLanguage===settings.l.ru,children:"Русский"})]})};LanguageSwitcher.displayName="LanguageSwitcher";const LanguageSwitcher_LanguageSwitcher=LanguageSwitcher;try{LanguageSwitcher.displayName="LanguageSwitcher",LanguageSwitcher.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/LanguageSwitcher/LanguageSwitcher.tsx#LanguageSwitcher"]={docgenInfo:LanguageSwitcher.__docgenInfo,name:"LanguageSwitcher",path:"src/shared/ui/LanguageSwitcher/LanguageSwitcher.tsx#LanguageSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/ui/LanguageSwitcher/LanguageSwitcher.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".m8Pe03d8uW8kRJMhBfUw {\n    /* background-color: var(--background-color);\n    color: var(--text-color);\n    border-color: var(--border-color); */\n    height: 100%;\n    /* aspect-ratio: 1 / 1; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.jFLaLRwknACPSzWnjMtG {\n    background-color: var(--background-color);\n    color: var(--text-color);\n    border-color: var(--border-color);\n    height: 100%;\n    width: 100%;\n }","",{version:3,sources:["webpack://./src/shared/ui/LanguageSwitcher/LanguageSwitcher.module.css"],names:[],mappings:"AAAA;IACI;;wCAEoC;IACpC,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,yCAAyC;IACzC,wBAAwB;IACxB,iCAAiC;IACjC,YAAY;IACZ,WAAW;CACd",sourcesContent:[".wrapper {\n    /* background-color: var(--background-color);\n    color: var(--text-color);\n    border-color: var(--border-color); */\n    height: 100%;\n    /* aspect-ratio: 1 / 1; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.button {\n    background-color: var(--background-color);\n    color: var(--text-color);\n    border-color: var(--border-color);\n    height: 100%;\n    width: 100%;\n }"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"m8Pe03d8uW8kRJMhBfUw",button:"jFLaLRwknACPSzWnjMtG"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/stories/LanguageSwitcherViewer/LanguageSwitcherViewer.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".s6sjbTvMrIJsA7zwcllw {\n    height: 30px;\n    width: 300px;\n}","",{version:3,sources:["webpack://./src/stories/LanguageSwitcherViewer/LanguageSwitcherViewer.module.css"],names:[],mappings:"AAAA;IACI,YAAY;IACZ,YAAY;AAChB",sourcesContent:[".wrapper {\n    height: 30px;\n    width: 300px;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"s6sjbTvMrIJsA7zwcllw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);