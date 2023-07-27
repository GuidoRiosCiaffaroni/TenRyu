/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/slider/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/slider/edit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var _jsxFileName="/Users/denis/Local Sites/slider-free/app/public/wp-content/plugins/bubiblock-slider/src/blocks/slider/edit.js";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// Font Family
var bubiOptionsFont=[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Anton','bubiblock-slider'),value:'Anton'+',sans-serif'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('IBM Plex Sans','bubiblock-slider'),value:'IBM Plex Sans'+',sans-serif'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inconsolata','bubiblock-slider'),value:'Inconsolata'+',monospace'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Montserrat','bubiblock-slider'),value:'Montserrat'+',sans-serif'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Orbitron','bubiblock-slider'),value:'Orbitron'+',sans-serif'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Oxygen','bubiblock-slider'),value:'Oxygen'+',sans-serif'}];var bubiOptionsWeight=[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider'),value:'100'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider'),value:'200'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider'),value:'300'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('400','bubiblock-slider'),value:'400'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('500','bubiblock-slider'),value:'500'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('600','bubiblock-slider'),value:'600'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('700','bubiblock-slider'),value:'700'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('800','bubiblock-slider'),value:'800'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('900','bubiblock-slider'),value:'900'}];// Effect Slider
var bubiOptionsEffectAnimate=[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No Effect','bubiblock-slider'),value:'df-no-effect'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bounce','bubiblock-slider'),value:'animate__bounce'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Swing','bubiblock-slider'),value:'animate__swing'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tada','bubiblock-slider'),value:'animate__tada'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fade In','bubiblock-slider'),value:'animate__fadeIn'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fade In Down','bubiblock-slider'),value:'animate__fadeInDown'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fade In Left','bubiblock-slider'),value:'animate__fadeInLeft'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fade In Right','bubiblock-slider'),value:'animate__fadeInRight'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fade In Up','bubiblock-slider'),value:'animate__fadeInUp'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fade Out','bubiblock-slider'),value:'animate__fadeOut'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Flip In X','bubiblock-slider'),value:'animate__flipInX'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Rotate In','bubiblock-slider'),value:'animate__rotateIn'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Zoom In','bubiblock-slider'),value:'animate__zoomIn'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Zoom In Down','bubiblock-slider'),value:'animate__zoomInDown'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Zoom In Left','bubiblock-slider'),value:'animate__zoomInLeft'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Zoom In Right','bubiblock-slider'),value:'animate__zoomInRight'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Zoom In Up','bubiblock-slider'),value:'animate__zoomInUp'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slide In Down','bubiblock-slider'),value:'animate__slideInDown'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slide In Left','bubiblock-slider'),value:'animate__slideInLeft'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slide In Right','bubiblock-slider'),value:'animate__slideInRight'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slide In Up','bubiblock-slider'),value:'animate__slideInUp'}];var bubiOptionEffectSpeed=[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fast','bubiblock-slider'),value:'animate__fast'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slow','bubiblock-slider'),value:'animate__slow'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slower','bubiblock-slider'),value:'animate__slower'}];var bubiOptionEffectDalay=[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),value:'animate__delay-0s'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('One second','bubiblock-slider'),value:'animate__delay-1s'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Four seconds','bubiblock-slider'),value:'animate__delay-4s'}];var bubiOptionEffectRepeat=[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Repeat 1','bubiblock-slider'),value:'animate__repeat-1'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Repeat 2','bubiblock-slider'),value:'animate__repeat-2'}];// Custom color palette
var bubiColors=[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('purple','bubiblock-slider'),color:'#8321D2'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('turquoise','bubiblock-slider'),color:'#6FE1DA'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('yellow','bubiblock-slider'),color:'#fbe901'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('pink','bubiblock-slider'),color:'#f0b9ff'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('black','bubiblock-slider'),color:'#000'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('white','bubiblock-slider'),color:'#fff'}];// Custom color gradient
var bubiGradients=[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Aqua Spray','bubiblock-slider'),gradient:'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)',slug:'aqua-spray'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Shady Lane','bubiblock-slider'),gradient:'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)',slug:'shady-lane'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Disco Club','bubiblock-slider'),gradient:'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',slug:'disco-club'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Kale Salad','bubiblock-slider'),gradient:'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',slug:'kale-salad'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bloody Mimosa','bubiblock-slider'),gradient:'linear-gradient(90deg, #d53369 0%, #daae51 100%)',slug:'bloody-mimosa'},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mello Yellow','bubiblock-slider'),gradient:'linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)',slug:'mello-yellow'}];var SliderEdit=/*#__PURE__*/function(_Component){_inherits(SliderEdit,_Component);var _super=_createSuper(SliderEdit);function SliderEdit(){var _this;_classCallCheck(this,SliderEdit);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_defineProperty(_assertThisInitialized(_this),"state",{selectedLink:null});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblcok_fontfamily",function(bubiblcok_fontfamily){_this.props.setAttributes({bubiblcok_fontfamily:bubiblcok_fontfamily});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblcok_fontfamily_weight",function(bubiblcok_fontfamily_weight){_this.props.setAttributes({bubiblcok_fontfamily_weight:bubiblcok_fontfamily_weight});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblcok_fontfamily_descritpion",function(bubiblcok_fontfamily_descritpion){_this.props.setAttributes({bubiblcok_fontfamily_descritpion:bubiblcok_fontfamily_descritpion});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblcok_fontfamily_weight_description",function(bubiblcok_fontfamily_weight_description){_this.props.setAttributes({bubiblcok_fontfamily_weight_description:bubiblcok_fontfamily_weight_description});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblcok_fontfamily_button",function(bubiblcok_fontfamily_button){_this.props.setAttributes({bubiblcok_fontfamily_button:bubiblcok_fontfamily_button});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblcok_fontfamily_weight_button",function(bubiblcok_fontfamily_weight_button){_this.props.setAttributes({bubiblcok_fontfamily_weight_button:bubiblcok_fontfamily_weight_button});});_defineProperty(_assertThisInitialized(_this),"onChangeHeight_slider",function(height_slider){_this.props.setAttributes({height_slider:height_slider});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_slider_auto",function(df_height_slider_auto){_this.props.setAttributes({df_height_slider_auto:df_height_slider_auto});});_defineProperty(_assertThisInitialized(_this),"onChangeHeight_slider_table",function(height_slider_table){_this.props.setAttributes({height_slider_table:height_slider_table});});_defineProperty(_assertThisInitialized(_this),"onChangeHeight_slider_mobile",function(height_slider_mobile){_this.props.setAttributes({height_slider_mobile:height_slider_mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_full_slider",function(bubiblock_full_slider){_this.props.setAttributes({bubiblock_full_slider:bubiblock_full_slider});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_padding_slider",function(bubiblock_padding_slider){_this.props.setAttributes({bubiblock_padding_slider:bubiblock_padding_slider});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_padding_b_slider",function(bubiblock_padding_b_slider){_this.props.setAttributes({bubiblock_padding_b_slider:bubiblock_padding_b_slider});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_padding_slider_table",function(bubiblock_padding_block_slider_table){_this.props.setAttributes({bubiblock_padding_block_slider_table:bubiblock_padding_block_slider_table});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_padding_b_slider_table",function(bubiblock_padding_b_block_slider_table){_this.props.setAttributes({bubiblock_padding_b_block_slider_table:bubiblock_padding_b_block_slider_table});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_padding_block_slider_mobile",function(bubiblock_padding_block_slider_mobile){_this.props.setAttributes({bubiblock_padding_block_slider_mobile:bubiblock_padding_block_slider_mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_padding_b_block_slider_mobile",function(bubiblock_padding_b_block_slider_mobile){_this.props.setAttributes({bubiblock_padding_b_block_slider_mobile:bubiblock_padding_b_block_slider_mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_radius_slider",function(bubiblock_radius_slider){_this.props.setAttributes({bubiblock_radius_slider:bubiblock_radius_slider});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_carousle_touch",function(bubiblock_carousle_touch){_this.props.setAttributes({bubiblock_carousle_touch:bubiblock_carousle_touch});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_padding_block_slider",function(bubiblock_padding_block_slider){_this.props.setAttributes({bubiblock_padding_block_slider:bubiblock_padding_block_slider});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_padding_b_block_slider",function(bubiblock_padding_b_block_slider){_this.props.setAttributes({bubiblock_padding_b_block_slider:bubiblock_padding_b_block_slider});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiopacityblock_slider",function(bubiopacityblock_slider){_this.props.setAttributes({bubiopacityblock_slider:bubiopacityblock_slider});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_arrow_slider_type",function(df_arrow_slider_type){_this.props.setAttributes({df_arrow_slider_type:df_arrow_slider_type});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_size_arrow",function(df_size_arrow){_this.props.setAttributes({df_size_arrow:df_size_arrow});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_size_arrow_table",function(df_size_arrow_table){_this.props.setAttributes({df_size_arrow_table:df_size_arrow_table});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_size_arrow_mobile",function(df_size_arrow_mobile){_this.props.setAttributes({df_size_arrow_mobile:df_size_arrow_mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeBubi_marginarrow",function(bubi_marginarrow){_this.props.setAttributes({bubi_marginarrow:bubi_marginarrow});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiopacityarrow",function(bubiopacityarrow){_this.props.setAttributes({bubiopacityarrow:bubiopacityarrow});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiopacityhoverarrow",function(bubiopacityhoverarrow){_this.props.setAttributes({bubiopacityhoverarrow:bubiopacityhoverarrow});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_dot_slider_type",function(df_dot_slider_type){_this.props.setAttributes({df_dot_slider_type:df_dot_slider_type});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_width_dot",function(df_width_dot){_this.props.setAttributes({df_width_dot:df_width_dot});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_dot",function(df_height_dot){_this.props.setAttributes({df_height_dot:df_height_dot});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_height_dot_active",function(bubiblock_height_dot_active){_this.props.setAttributes({bubiblock_height_dot_active:bubiblock_height_dot_active});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_bottom_dot",function(df_bottom_dot){_this.props.setAttributes({df_bottom_dot:df_bottom_dot});});_defineProperty(_assertThisInitialized(_this),"onSelectImage",function(_ref){var id=_ref.id,url=_ref.url,alt=_ref.alt;_this.props.setAttributes({id:id,url:url,alt:alt});});_defineProperty(_assertThisInitialized(_this),"onSelectURL",function(url){_this.props.setAttributes({url:url,id:null,alt:''});});_defineProperty(_assertThisInitialized(_this),"onUploadError",function(message){var noticeOperations=_this.props.noticeOperations;noticeOperations.createErrorNotice(message);});_defineProperty(_assertThisInitialized(_this),"removeImage",function(){_this.props.setAttributes({id:null,url:'',alt:''});});_defineProperty(_assertThisInitialized(_this),"updateAlt",function(alt){_this.props.setAttributes({alt:alt});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_cover_img1",function(df_cover_img1){_this.props.setAttributes({df_cover_img1:df_cover_img1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_focalPoint_img_1",function(df_focalPoint_img_1){_this.props.setAttributes({df_focalPoint_img_1:df_focalPoint_img_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_focalPoint_y_img_1",function(df_focalPoint_y_img_1){_this.props.setAttributes({df_focalPoint_y_img_1:df_focalPoint_y_img_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_mask_slider_1",function(df_mask_slider_1){_this.props.setAttributes({df_mask_slider_1:df_mask_slider_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_opacity_mask_1",function(df_opacity_mask_1){_this.props.setAttributes({df_opacity_mask_1:df_opacity_mask_1});});_defineProperty(_assertThisInitialized(_this),"onChangeEffectcaption1",function(effectcaption1){_this.props.setAttributes({effectcaption1:effectcaption1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_speed_effectcaption1",function(df_speed_effectcaption1){_this.props.setAttributes({df_speed_effectcaption1:df_speed_effectcaption1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_delay_effectcaption1",function(df_delay_effectcaption1){_this.props.setAttributes({df_delay_effectcaption1:df_delay_effectcaption1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_repeat_effectcaption1",function(df_repeat_effectcaption1){_this.props.setAttributes({df_repeat_effectcaption1:df_repeat_effectcaption1});});_defineProperty(_assertThisInitialized(_this),"onChangeEffectinfo1",function(effectinfo1){_this.props.setAttributes({effectinfo1:effectinfo1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_speed_effectinfo1",function(df_speed_effectinfo1){_this.props.setAttributes({df_speed_effectinfo1:df_speed_effectinfo1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_delay_effectinfo1",function(df_delay_effectinfo1){_this.props.setAttributes({df_delay_effectinfo1:df_delay_effectinfo1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_repeat_effectinfo1",function(df_repeat_effectinfo1){_this.props.setAttributes({df_repeat_effectinfo1:df_repeat_effectinfo1});});_defineProperty(_assertThisInitialized(_this),"onChangeEffectbutton1",function(effectbutton1){_this.props.setAttributes({effectbutton1:effectbutton1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_speed_effectbutton1",function(df_speed_effectbutton1){_this.props.setAttributes({df_speed_effectbutton1:df_speed_effectbutton1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_delay_effectbutton1",function(df_delay_effectbutton1){_this.props.setAttributes({df_delay_effectbutton1:df_delay_effectbutton1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_repeat_effectbutton1",function(df_repeat_effectbutton1){_this.props.setAttributes({df_repeat_effectbutton1:df_repeat_effectbutton1});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_caption1",function(margin_bottom_caption1){_this.props.setAttributes({margin_bottom_caption1:margin_bottom_caption1});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_table_caption1",function(margin_bottom_table_caption1){_this.props.setAttributes({margin_bottom_table_caption1:margin_bottom_table_caption1});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_mobile_caption1",function(margin_bottom_mobile_caption1){_this.props.setAttributes({margin_bottom_mobile_caption1:margin_bottom_mobile_caption1});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_info1",function(margin_bottom_info1){_this.props.setAttributes({margin_bottom_info1:margin_bottom_info1});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_table_info1",function(margin_bottom_table_info1){_this.props.setAttributes({margin_bottom_table_info1:margin_bottom_table_info1});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_mobile_info1",function(margin_bottom_mobile_info1){_this.props.setAttributes({margin_bottom_mobile_info1:margin_bottom_mobile_info1});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_button1",function(margin_bottom_button1){_this.props.setAttributes({margin_bottom_button1:margin_bottom_button1});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_table_button1",function(margin_bottom_table_button1){_this.props.setAttributes({margin_bottom_table_button1:margin_bottom_table_button1});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_mobile_button1",function(margin_bottom_mobile_button1){_this.props.setAttributes({margin_bottom_mobile_button1:margin_bottom_mobile_button1});});_defineProperty(_assertThisInitialized(_this),"onChangeTitle1",function(title1){_this.props.setAttributes({title1:title1});});_defineProperty(_assertThisInitialized(_this),"onChangeInfo1",function(info1){_this.props.setAttributes({info1:info1});});_defineProperty(_assertThisInitialized(_this),"onChangeButton1",function(button1){_this.props.setAttributes({button1:button1});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizetitle1",function(fontsizetitle1){_this.props.setAttributes({fontsizetitle1:fontsizetitle1});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizetitle1table",function(fontsizetitle1table){_this.props.setAttributes({fontsizetitle1table:fontsizetitle1table});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizetitle1mobile",function(fontsizetitle1mobile){_this.props.setAttributes({fontsizetitle1mobile:fontsizetitle1mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizeinfo1",function(fontsizeinfo1){_this.props.setAttributes({fontsizeinfo1:fontsizeinfo1});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizeinfo1table",function(fontsizeinfo1table){_this.props.setAttributes({fontsizeinfo1table:fontsizeinfo1table});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizeinfo1mobile",function(fontsizeinfo1mobile){_this.props.setAttributes({fontsizeinfo1mobile:fontsizeinfo1mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizebutton1",function(fontsizebutton1){_this.props.setAttributes({fontsizebutton1:fontsizebutton1});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizebutton1table",function(fontsizebutton1table){_this.props.setAttributes({fontsizebutton1table:fontsizebutton1table});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizebutton1mobile",function(fontsizebutton1mobile){_this.props.setAttributes({fontsizebutton1mobile:fontsizebutton1mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_enable_divide_1",function(df_enable_divide_1){_this.props.setAttributes({df_enable_divide_1:df_enable_divide_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_divide_1",function(df_height_divide_1){_this.props.setAttributes({df_height_divide_1:df_height_divide_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_table_divide_1",function(df_height_table_divide_1){_this.props.setAttributes({df_height_table_divide_1:df_height_table_divide_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_mobile_divide_1",function(df_height_mobile_divide_1){_this.props.setAttributes({df_height_mobile_divide_1:df_height_mobile_divide_1});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_dalay_divide_1",function(bubiblock_dalay_divide_1){_this.props.setAttributes({bubiblock_dalay_divide_1:bubiblock_dalay_divide_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_enable_divide_bottom_1",function(df_enable_divide_bottom_1){_this.props.setAttributes({df_enable_divide_bottom_1:df_enable_divide_bottom_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_divide_bottom_1",function(df_height_divide_bottom_1){_this.props.setAttributes({df_height_divide_bottom_1:df_height_divide_bottom_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_table_divide_bottom_1",function(df_height_table_divide_bottom_1){_this.props.setAttributes({df_height_table_divide_bottom_1:df_height_table_divide_bottom_1});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_mobile_divide_bottom_1",function(df_height_mobile_divide_bottom_1){_this.props.setAttributes({df_height_mobile_divide_bottom_1:df_height_mobile_divide_bottom_1});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_dalay_divide_1_bottom",function(bubiblock_dalay_divide_1_bottom){_this.props.setAttributes({bubiblock_dalay_divide_1_bottom:bubiblock_dalay_divide_1_bottom});});_defineProperty(_assertThisInitialized(_this),"onSelectURL2",function(imageUrl_2){_this.props.setAttributes({imageUrl_2:imageUrl_2,id2:null,alt2:''});});_defineProperty(_assertThisInitialized(_this),"onUploadError2",function(message){var noticeOperations=_this.props.noticeOperations;noticeOperations.createErrorNotice(message);});_defineProperty(_assertThisInitialized(_this),"removeImage2",function(){_this.props.setAttributes({id2:null,imageUrl_2:'',alt2:''});});_defineProperty(_assertThisInitialized(_this),"updateAlt2",function(alt2){_this.props.setAttributes({alt2:alt2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_cover_img2",function(df_cover_img2){_this.props.setAttributes({df_cover_img2:df_cover_img2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_focalPoint_img_2",function(df_focalPoint_img_2){_this.props.setAttributes({df_focalPoint_img_2:df_focalPoint_img_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_focalPoint_y_img_2",function(df_focalPoint_y_img_2){_this.props.setAttributes({df_focalPoint_y_img_2:df_focalPoint_y_img_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_mask_slider_2",function(df_mask_slider_2){_this.props.setAttributes({df_mask_slider_2:df_mask_slider_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_opacity_mask_2",function(df_opacity_mask_2){_this.props.setAttributes({df_opacity_mask_2:df_opacity_mask_2});});_defineProperty(_assertThisInitialized(_this),"onChangeEffectcaption2",function(effectcaption2){_this.props.setAttributes({effectcaption2:effectcaption2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_speed_effectcaption2",function(df_speed_effectcaption2){_this.props.setAttributes({df_speed_effectcaption2:df_speed_effectcaption2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_delay_effectcaption2",function(df_delay_effectcaption2){_this.props.setAttributes({df_delay_effectcaption2:df_delay_effectcaption2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_repeat_effectcaption2",function(df_repeat_effectcaption2){_this.props.setAttributes({df_repeat_effectcaption2:df_repeat_effectcaption2});});_defineProperty(_assertThisInitialized(_this),"onChangeEffectinfo2",function(effectinfo2){_this.props.setAttributes({effectinfo2:effectinfo2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_speed_effectinfo2",function(df_speed_effectinfo2){_this.props.setAttributes({df_speed_effectinfo2:df_speed_effectinfo2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_delay_effectinfo2",function(df_delay_effectinfo2){_this.props.setAttributes({df_delay_effectinfo2:df_delay_effectinfo2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_repeat_effectinfo2",function(df_repeat_effectinfo2){_this.props.setAttributes({df_repeat_effectinfo2:df_repeat_effectinfo2});});_defineProperty(_assertThisInitialized(_this),"onChangeEffectbutton2",function(effectbutton2){_this.props.setAttributes({effectbutton2:effectbutton2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_speed_effectbutton2",function(df_speed_effectbutton2){_this.props.setAttributes({df_speed_effectbutton2:df_speed_effectbutton2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_delay_effectbutton2",function(df_delay_effectbutton2){_this.props.setAttributes({df_delay_effectbutton2:df_delay_effectbutton2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_repeat_effectbutton2",function(df_repeat_effectbutton2){_this.props.setAttributes({df_repeat_effectbutton2:df_repeat_effectbutton2});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_caption2",function(margin_bottom_caption2){_this.props.setAttributes({margin_bottom_caption2:margin_bottom_caption2});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_table_caption2",function(margin_bottom_table_caption2){_this.props.setAttributes({margin_bottom_table_caption2:margin_bottom_table_caption2});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_mobile_caption2",function(margin_bottom_mobile_caption2){_this.props.setAttributes({margin_bottom_mobile_caption2:margin_bottom_mobile_caption2});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_info2",function(margin_bottom_info2){_this.props.setAttributes({margin_bottom_info2:margin_bottom_info2});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_table_info2",function(margin_bottom_table_info2){_this.props.setAttributes({margin_bottom_table_info2:margin_bottom_table_info2});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_mobile_info2",function(margin_bottom_mobile_info2){_this.props.setAttributes({margin_bottom_mobile_info2:margin_bottom_mobile_info2});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_button2",function(margin_bottom_button2){_this.props.setAttributes({margin_bottom_button2:margin_bottom_button2});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_table_button2",function(margin_bottom_table_button2){_this.props.setAttributes({margin_bottom_table_button2:margin_bottom_table_button2});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_mobile_button2",function(margin_bottom_mobile_button2){_this.props.setAttributes({margin_bottom_mobile_button2:margin_bottom_mobile_button2});});_defineProperty(_assertThisInitialized(_this),"onChangeTitle2",function(title2){_this.props.setAttributes({title2:title2});});_defineProperty(_assertThisInitialized(_this),"onChangeInfo2",function(info2){_this.props.setAttributes({info2:info2});});_defineProperty(_assertThisInitialized(_this),"onChangeButton2",function(button2){_this.props.setAttributes({button2:button2});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizetitle2",function(fontsizetitle2){_this.props.setAttributes({fontsizetitle2:fontsizetitle2});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizetitle2table",function(fontsizetitle2table){_this.props.setAttributes({fontsizetitle2table:fontsizetitle2table});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizetitle2mobile",function(fontsizetitle2mobile){_this.props.setAttributes({fontsizetitle2mobile:fontsizetitle2mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizeinfo2",function(fontsizeinfo2){_this.props.setAttributes({fontsizeinfo2:fontsizeinfo2});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizeinfo2table",function(fontsizeinfo2table){_this.props.setAttributes({fontsizeinfo2table:fontsizeinfo2table});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizeinfo2mobile",function(fontsizeinfo2mobile){_this.props.setAttributes({fontsizeinfo2mobile:fontsizeinfo2mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizebutton2",function(fontsizebutton2){_this.props.setAttributes({fontsizebutton2:fontsizebutton2});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizebutton2table",function(fontsizebutton2table){_this.props.setAttributes({fontsizebutton2table:fontsizebutton2table});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizebutton2mobile",function(fontsizebutton2mobile){_this.props.setAttributes({fontsizebutton2mobile:fontsizebutton2mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_enable_divide_2",function(df_enable_divide_2){_this.props.setAttributes({df_enable_divide_2:df_enable_divide_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_divide_2",function(df_height_divide_2){_this.props.setAttributes({df_height_divide_2:df_height_divide_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_table_divide_2",function(df_height_table_divide_2){_this.props.setAttributes({df_height_table_divide_2:df_height_table_divide_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_mobile_divide_2",function(df_height_mobile_divide_2){_this.props.setAttributes({df_height_mobile_divide_2:df_height_mobile_divide_2});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_dalay_divide_2",function(bubiblock_dalay_divide_2){_this.props.setAttributes({bubiblock_dalay_divide_2:bubiblock_dalay_divide_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_enable_divide_bottom_2",function(df_enable_divide_bottom_2){_this.props.setAttributes({df_enable_divide_bottom_2:df_enable_divide_bottom_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_divide_bottom_2",function(df_height_divide_bottom_2){_this.props.setAttributes({df_height_divide_bottom_2:df_height_divide_bottom_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_table_divide_bottom_2",function(df_height_table_divide_bottom_2){_this.props.setAttributes({df_height_table_divide_bottom_2:df_height_table_divide_bottom_2});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_mobile_divide_bottom_2",function(df_height_mobile_divide_bottom_2){_this.props.setAttributes({df_height_mobile_divide_bottom_2:df_height_mobile_divide_bottom_2});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_dalay_divide_2_bottom",function(bubiblock_dalay_divide_2_bottom){_this.props.setAttributes({bubiblock_dalay_divide_2_bottom:bubiblock_dalay_divide_2_bottom});});_defineProperty(_assertThisInitialized(_this),"onSelectURL3",function(imageUrl_3){_this.props.setAttributes({imageUrl_3:imageUrl_3,id3:null,alt3:''});});_defineProperty(_assertThisInitialized(_this),"onUploadError3",function(message){var noticeOperations=_this.props.noticeOperations;noticeOperations.createErrorNotice(message);});_defineProperty(_assertThisInitialized(_this),"removeImage3",function(){_this.props.setAttributes({id3:null,imageUrl_3:'',alt3:''});});_defineProperty(_assertThisInitialized(_this),"updateAlt3",function(alt3){_this.props.setAttributes({alt3:alt3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_cover_img3",function(df_cover_img3){_this.props.setAttributes({df_cover_img3:df_cover_img3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_focalPoint_img_3",function(df_focalPoint_img_3){_this.props.setAttributes({df_focalPoint_img_3:df_focalPoint_img_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_focalPoint_y_img_3",function(df_focalPoint_y_img_3){_this.props.setAttributes({df_focalPoint_y_img_3:df_focalPoint_y_img_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_mask_slider_3",function(df_mask_slider_3){_this.props.setAttributes({df_mask_slider_3:df_mask_slider_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_opacity_mask_3",function(df_opacity_mask_3){_this.props.setAttributes({df_opacity_mask_3:df_opacity_mask_3});});_defineProperty(_assertThisInitialized(_this),"onChangeEffectcaption3",function(effectcaption3){_this.props.setAttributes({effectcaption3:effectcaption3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_speed_effectcaption3",function(df_speed_effectcaption3){_this.props.setAttributes({df_speed_effectcaption3:df_speed_effectcaption3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_delay_effectcaption3",function(df_delay_effectcaption3){_this.props.setAttributes({df_delay_effectcaption3:df_delay_effectcaption3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_repeat_effectcaption3",function(df_repeat_effectcaption3){_this.props.setAttributes({df_repeat_effectcaption3:df_repeat_effectcaption3});});_defineProperty(_assertThisInitialized(_this),"onChangeEffectinfo3",function(effectinfo3){_this.props.setAttributes({effectinfo3:effectinfo3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_speed_effectinfo3",function(df_speed_effectinfo3){_this.props.setAttributes({df_speed_effectinfo3:df_speed_effectinfo3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_delay_effectinfo3",function(df_delay_effectinfo3){_this.props.setAttributes({df_delay_effectinfo3:df_delay_effectinfo3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_repeat_effectinfo3",function(df_repeat_effectinfo3){_this.props.setAttributes({df_repeat_effectinfo3:df_repeat_effectinfo3});});_defineProperty(_assertThisInitialized(_this),"onChangeEffectbutton3",function(effectbutton3){_this.props.setAttributes({effectbutton3:effectbutton3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_speed_effectbutton3",function(df_speed_effectbutton3){_this.props.setAttributes({df_speed_effectbutton3:df_speed_effectbutton3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_delay_effectbutton3",function(df_delay_effectbutton3){_this.props.setAttributes({df_delay_effectbutton3:df_delay_effectbutton3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_repeat_effectbutton3",function(df_repeat_effectbutton3){_this.props.setAttributes({df_repeat_effectbutton3:df_repeat_effectbutton3});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_caption3",function(margin_bottom_caption3){_this.props.setAttributes({margin_bottom_caption3:margin_bottom_caption3});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_table_caption3",function(margin_bottom_table_caption3){_this.props.setAttributes({margin_bottom_table_caption3:margin_bottom_table_caption3});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_mobile_caption3",function(margin_bottom_mobile_caption3){_this.props.setAttributes({margin_bottom_mobile_caption3:margin_bottom_mobile_caption3});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_info3",function(margin_bottom_info3){_this.props.setAttributes({margin_bottom_info3:margin_bottom_info3});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_table_info3",function(margin_bottom_table_info3){_this.props.setAttributes({margin_bottom_table_info3:margin_bottom_table_info3});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_mobile_info3",function(margin_bottom_mobile_info3){_this.props.setAttributes({margin_bottom_mobile_info3:margin_bottom_mobile_info3});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_button3",function(margin_bottom_button3){_this.props.setAttributes({margin_bottom_button3:margin_bottom_button3});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_table_button3",function(margin_bottom_table_button3){_this.props.setAttributes({margin_bottom_table_button3:margin_bottom_table_button3});});_defineProperty(_assertThisInitialized(_this),"onChangeMargin_bottom_mobile_button3",function(margin_bottom_mobile_button3){_this.props.setAttributes({margin_bottom_mobile_button3:margin_bottom_mobile_button3});});_defineProperty(_assertThisInitialized(_this),"onChangeTitle3",function(title3){_this.props.setAttributes({title3:title3});});_defineProperty(_assertThisInitialized(_this),"onChangeInfo3",function(info3){_this.props.setAttributes({info3:info3});});_defineProperty(_assertThisInitialized(_this),"onChangeButton3",function(button3){_this.props.setAttributes({button3:button3});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizetitle3",function(fontsizetitle3){_this.props.setAttributes({fontsizetitle3:fontsizetitle3});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizetitle3table",function(fontsizetitle3table){_this.props.setAttributes({fontsizetitle3table:fontsizetitle3table});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizetitle3mobile",function(fontsizetitle3mobile){_this.props.setAttributes({fontsizetitle3mobile:fontsizetitle3mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizeinfo3",function(fontsizeinfo3){_this.props.setAttributes({fontsizeinfo3:fontsizeinfo3});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizeinfo3table",function(fontsizeinfo3table){_this.props.setAttributes({fontsizeinfo3table:fontsizeinfo3table});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizeinfo3mobile",function(fontsizeinfo3mobile){_this.props.setAttributes({fontsizeinfo3mobile:fontsizeinfo3mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizebutton3",function(fontsizebutton3){_this.props.setAttributes({fontsizebutton3:fontsizebutton3});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizebutton3table",function(fontsizebutton3table){_this.props.setAttributes({fontsizebutton3table:fontsizebutton3table});});_defineProperty(_assertThisInitialized(_this),"onChangeFontsizebutton3mobile",function(fontsizebutton3mobile){_this.props.setAttributes({fontsizebutton3mobile:fontsizebutton3mobile});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_enable_divide_3",function(df_enable_divide_3){_this.props.setAttributes({df_enable_divide_3:df_enable_divide_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_divide_3",function(df_height_divide_3){_this.props.setAttributes({df_height_divide_3:df_height_divide_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_table_divide_3",function(df_height_table_divide_3){_this.props.setAttributes({df_height_table_divide_3:df_height_table_divide_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_mobile_divide_3",function(df_height_mobile_divide_3){_this.props.setAttributes({df_height_mobile_divide_3:df_height_mobile_divide_3});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_dalay_divide_3",function(bubiblock_dalay_divide_3){_this.props.setAttributes({bubiblock_dalay_divide_3:bubiblock_dalay_divide_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_enable_divide_bottom_3",function(df_enable_divide_bottom_3){_this.props.setAttributes({df_enable_divide_bottom_3:df_enable_divide_bottom_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_divide_bottom_3",function(df_height_divide_bottom_3){_this.props.setAttributes({df_height_divide_bottom_3:df_height_divide_bottom_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_table_divide_bottom_3",function(df_height_table_divide_bottom_3){_this.props.setAttributes({df_height_table_divide_bottom_3:df_height_table_divide_bottom_3});});_defineProperty(_assertThisInitialized(_this),"onChangeDf_height_mobile_divide_bottom_3",function(df_height_mobile_divide_bottom_3){_this.props.setAttributes({df_height_mobile_divide_bottom_3:df_height_mobile_divide_bottom_3});});_defineProperty(_assertThisInitialized(_this),"onChangeBubiblock_dalay_divide_3_bottom",function(bubiblock_dalay_divide_3_bottom){_this.props.setAttributes({bubiblock_dalay_divide_3_bottom:bubiblock_dalay_divide_3_bottom});});_defineProperty(_assertThisInitialized(_this),"onSelectURL4",function(imageUrl_4){_this.props.setAttributes({imageUrl_4:imageUrl_4,id4:null,alt4:''});});_defineProperty(_assertThisInitialized(_this),"onUploadError4",function(message){var noticeOperations=_this.props.noticeOperations;noticeOperations.createErrorNotice(message);});_defineProperty(_assertThisInitialized(_this),"removeImage4",function(){_this.props.setAttributes({id4:null,imageUrl_4:'',alt4:''});});_defineProperty(_assertThisInitialized(_this),"updateAlt4",function(alt4){_this.props.setAttributes({alt4:alt4});});_defineProperty(_assertThisInitialized(_this),"onChangeTitle4",function(title4){_this.props.setAttributes({title4:title4});});_defineProperty(_assertThisInitialized(_this),"onChangeInfo4",function(info4){_this.props.setAttributes({info4:info4});});_defineProperty(_assertThisInitialized(_this),"onChangeButton4",function(button4){_this.props.setAttributes({button4:button4});});_defineProperty(_assertThisInitialized(_this),"onSelectURL5",function(imageUrl_5){_this.props.setAttributes({imageUrl_5:imageUrl_5,id5:null,alt5:''});});_defineProperty(_assertThisInitialized(_this),"onUploadError5",function(message){var noticeOperations=_this.props.noticeOperations;noticeOperations.createErrorNotice(message);});_defineProperty(_assertThisInitialized(_this),"removeImage5",function(){_this.props.setAttributes({id5:null,imageUrl_5:'',alt5:''});});_defineProperty(_assertThisInitialized(_this),"updateAlt5",function(alt5){_this.props.setAttributes({alt5:alt5});});_defineProperty(_assertThisInitialized(_this),"onChangeTitle5",function(title5){_this.props.setAttributes({title5:title5});});_defineProperty(_assertThisInitialized(_this),"onChangeInfo5",function(info5){_this.props.setAttributes({info5:info5});});_defineProperty(_assertThisInitialized(_this),"onChangeButton5",function(button5){_this.props.setAttributes({button5:button5});});return _this;}_createClass(SliderEdit,[{key:"componentDidMount",value:function componentDidMount(){var _this$props=this.props,attributes=_this$props.attributes,setAttributes=_this$props.setAttributes;var url=attributes.url,id=attributes.id;if(url&&Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url)&&!id){setAttributes({url:'',alt:''});}}// Slider 1
},{key:"render",value:function render(){var _this2=this;var _this$props2=this.props,className=_this$props2.className,attributes=_this$props2.attributes,setAttributes=_this$props2.setAttributes,noticeUI=_this$props2.noticeUI,noticeUI2=_this$props2.noticeUI2,noticeUI3=_this$props2.noticeUI3,noticeUI4=_this$props2.noticeUI4,noticeUI5=_this$props2.noticeUI5;var bubiblock_padding_caption=attributes.bubiblock_padding_caption,bubiblock_padding_table_caption=attributes.bubiblock_padding_table_caption,bubiblock_padding_mobile_caption=attributes.bubiblock_padding_mobile_caption,bubiblock_padding_table_slider=attributes.bubiblock_padding_table_slider,bubiblock_padding_b_table_slider=attributes.bubiblock_padding_b_table_slider,bubiblock_padding_mobile_slider=attributes.bubiblock_padding_mobile_slider,bubiblock_padding_b_mobile_slider=attributes.bubiblock_padding_b_mobile_slider,bubiblock_display_button_table_caption=attributes.bubiblock_display_button_table_caption,bubiblock_display_button_mobile_caption=attributes.bubiblock_display_button_mobile_caption,bubiblcok_fontfamily=attributes.bubiblcok_fontfamily,bubiblock_typography_custom=attributes.bubiblock_typography_custom,bubiblcok_fontfamily_weight=attributes.bubiblcok_fontfamily_weight,bubiblock_line_height_title=attributes.bubiblock_line_height_title,bubiblcok_fontfamily_descritpion=attributes.bubiblcok_fontfamily_descritpion,bubiblcok_fontfamily_weight_description=attributes.bubiblcok_fontfamily_weight_description,bubiblock_line_height_info=attributes.bubiblock_line_height_info,bubiblcok_fontfamily_button=attributes.bubiblcok_fontfamily_button,bubiblcok_fontfamily_weight_button=attributes.bubiblcok_fontfamily_weight_button,df_resp=attributes.df_resp,height_slider=attributes.height_slider,df_height_slider_auto=attributes.df_height_slider_auto,height_slider_table=attributes.height_slider_table,height_slider_mobile=attributes.height_slider_mobile,bubiblock_full_slider=attributes.bubiblock_full_slider,bubiblock_padding_slider=attributes.bubiblock_padding_slider,bubiblock_padding_b_slider=attributes.bubiblock_padding_b_slider,bubiblock_radius_slider=attributes.bubiblock_radius_slider,bubiblock_background_color_slider=attributes.bubiblock_background_color_slider,bubiblock_background_gradient_slider=attributes.bubiblock_background_gradient_slider,df_interval_slider=attributes.df_interval_slider,bubiblock_speed_slider=attributes.bubiblock_speed_slider,bubiblock_speed_flip_slider=attributes.bubiblock_speed_flip_slider,bubiblock_id_slider=attributes.bubiblock_id_slider,df_pause_slider=attributes.df_pause_slider,df_effect_slider=attributes.df_effect_slider,bubiblock_show_slider_desktop=attributes.bubiblock_show_slider_desktop,bubiblock_show_slider_table=attributes.bubiblock_show_slider_table,bubiblock_show_slider_mobile=attributes.bubiblock_show_slider_mobile,bubiblock_carousle_touch=attributes.bubiblock_carousle_touch,bubi_block_content_slider=attributes.bubi_block_content_slider,bubiblock_padding_block_slider=attributes.bubiblock_padding_block_slider,bubiblock_padding_b_block_slider=attributes.bubiblock_padding_b_block_slider,bubiblock_padding_block_slider_table=attributes.bubiblock_padding_block_slider_table,bubiblock_padding_b_block_slider_table=attributes.bubiblock_padding_b_block_slider_table,bubiblock_padding_block_slider_mobile=attributes.bubiblock_padding_block_slider_mobile,bubiblock_padding_b_block_slider_mobile=attributes.bubiblock_padding_b_block_slider_mobile,bubiblock_background_color_block_slider=attributes.bubiblock_background_color_block_slider,bubiopacityblock_slider=attributes.bubiopacityblock_slider,df_arrow_slider=attributes.df_arrow_slider,df_arrow_slider_table=attributes.df_arrow_slider_table,df_arrow_slider_mobile=attributes.df_arrow_slider_mobile,bubi_arrow_position=attributes.bubi_arrow_position,df_color_arrow=attributes.df_color_arrow,bubiopacityarrow=attributes.bubiopacityarrow,bubiopacityhoverarrow=attributes.bubiopacityhoverarrow,df_padding_arrow=attributes.df_padding_arrow,df_arrow_slider_type=attributes.df_arrow_slider_type,df_radius_arrow=attributes.df_radius_arrow,df_size_arrow=attributes.df_size_arrow,df_size_arrow_table=attributes.df_size_arrow_table,df_size_arrow_mobile=attributes.df_size_arrow_mobile,bubi_marginarrow=attributes.bubi_marginarrow,df_dot_slider=attributes.df_dot_slider,df_dot_slider_table=attributes.df_dot_slider_table,df_dot_slider_mobile=attributes.df_dot_slider_mobile,df_dot_slider_type=attributes.df_dot_slider_type,df_width_dot=attributes.df_width_dot,df_height_dot=attributes.df_height_dot,bubiblock_height_dot_active=attributes.bubiblock_height_dot_active,df_color_progress_dot=attributes.df_color_progress_dot,df_bottom_dot=attributes.df_bottom_dot,df_color_dot=attributes.df_color_dot,df_slider_chose_1=attributes.df_slider_chose_1,df_mask_slider_1=attributes.df_mask_slider_1,background_color_solid_mask_1=attributes.background_color_solid_mask_1,df_opacity_mask_1=attributes.df_opacity_mask_1,effectcaption1=attributes.effectcaption1,df_speed_effectcaption1=attributes.df_speed_effectcaption1,df_delay_effectcaption1=attributes.df_delay_effectcaption1,df_repeat_effectcaption1=attributes.df_repeat_effectcaption1,margin_bottom_caption1=attributes.margin_bottom_caption1,margin_bottom_table_caption1=attributes.margin_bottom_table_caption1,margin_bottom_mobile_caption1=attributes.margin_bottom_mobile_caption1,margin_bottom_info1=attributes.margin_bottom_info1,margin_bottom_table_info1=attributes.margin_bottom_table_info1,margin_bottom_mobile_info1=attributes.margin_bottom_mobile_info1,effectinfo1=attributes.effectinfo1,df_speed_effectinfo1=attributes.df_speed_effectinfo1,df_delay_effectinfo1=attributes.df_delay_effectinfo1,df_repeat_effectinfo1=attributes.df_repeat_effectinfo1,title1=attributes.title1,fontsizetitle1=attributes.fontsizetitle1,fontsizetitle1table=attributes.fontsizetitle1table,fontsizetitle1mobile=attributes.fontsizetitle1mobile,info1=attributes.info1,fontsizeinfo1=attributes.fontsizeinfo1,fontsizeinfo1table=attributes.fontsizeinfo1table,fontsizeinfo1mobile=attributes.fontsizeinfo1mobile,margin_bottom_button1=attributes.margin_bottom_button1,margin_bottom_table_button1=attributes.margin_bottom_table_button1,margin_bottom_mobile_button1=attributes.margin_bottom_mobile_button1,effectbutton1=attributes.effectbutton1,df_speed_effectbutton1=attributes.df_speed_effectbutton1,df_delay_effectbutton1=attributes.df_delay_effectbutton1,df_repeat_effectbutton1=attributes.df_repeat_effectbutton1,alignment_title1=attributes.alignment_title1,alignment_info1=attributes.alignment_info1,button1=attributes.button1,fontsizebutton1=attributes.fontsizebutton1,fontsizebutton1table=attributes.fontsizebutton1table,fontsizebutton1mobile=attributes.fontsizebutton1mobile,alignment_button1=attributes.alignment_button1,padding_link_button1=attributes.padding_link_button1,padding_right_link_button1=attributes.padding_right_link_button1,border_radius_top_left_link_button1=attributes.border_radius_top_left_link_button1,border_radius_top_right_link_button1=attributes.border_radius_top_right_link_button1,border_radius_bottom_left_link_button1=attributes.border_radius_bottom_left_link_button1,border_radius_bottom_right_link_button1=attributes.border_radius_bottom_right_link_button1,border_size_link_button1=attributes.border_size_link_button1,df_background_color_link_button1=attributes.df_background_color_link_button1,df_background_color_hover_link_button1=attributes.df_background_color_hover_link_button1,df_color_link_button1=attributes.df_color_link_button1,df_color_hover_link_button1=attributes.df_color_hover_link_button1,df_border_color_link_button1=attributes.df_border_color_link_button1,df_background_color_transparent_link_button1=attributes.df_background_color_transparent_link_button1,alt=attributes.alt,id=attributes.id,url=attributes.url,df_cover_img1=attributes.df_cover_img1,df_focalPoint_img_1=attributes.df_focalPoint_img_1,df_focalPoint_y_img_1=attributes.df_focalPoint_y_img_1,df_background_color_slider_1=attributes.df_background_color_slider_1,df_enable_divide_1=attributes.df_enable_divide_1,divide_1=attributes.divide_1,df_color_divide_1=attributes.df_color_divide_1,df_height_divide_1=attributes.df_height_divide_1,df_height_table_divide_1=attributes.df_height_table_divide_1,df_height_mobile_divide_1=attributes.df_height_mobile_divide_1,bubiblock_dalay_divide_1=attributes.bubiblock_dalay_divide_1,df_enable_divide_bottom_1=attributes.df_enable_divide_bottom_1,divide_bottom_1=attributes.divide_bottom_1,df_color_divide_bottom_1=attributes.df_color_divide_bottom_1,df_height_divide_bottom_1=attributes.df_height_divide_bottom_1,df_height_table_divide_bottom_1=attributes.df_height_table_divide_bottom_1,df_height_mobile_divide_bottom_1=attributes.df_height_mobile_divide_bottom_1,bubiblock_dalay_divide_1_bottom=attributes.bubiblock_dalay_divide_1_bottom,bubiblock_link_slider_1=attributes.bubiblock_link_slider_1,bubiblock_link_tab_slider_1=attributes.bubiblock_link_tab_slider_1,df_slider_chose_2=attributes.df_slider_chose_2,df_mask_slider_2=attributes.df_mask_slider_2,background_color_solid_mask_2=attributes.background_color_solid_mask_2,background_color_gradient_mask_2=attributes.background_color_gradient_mask_2,df_opacity_mask_2=attributes.df_opacity_mask_2,effectcaption2=attributes.effectcaption2,df_speed_effectcaption2=attributes.df_speed_effectcaption2,df_delay_effectcaption2=attributes.df_delay_effectcaption2,df_repeat_effectcaption2=attributes.df_repeat_effectcaption2,margin_bottom_caption2=attributes.margin_bottom_caption2,margin_bottom_table_caption2=attributes.margin_bottom_table_caption2,margin_bottom_mobile_caption2=attributes.margin_bottom_mobile_caption2,margin_bottom_info2=attributes.margin_bottom_info2,margin_bottom_table_info2=attributes.margin_bottom_table_info2,margin_bottom_mobile_info2=attributes.margin_bottom_mobile_info2,effectinfo2=attributes.effectinfo2,df_speed_effectinfo2=attributes.df_speed_effectinfo2,df_delay_effectinfo2=attributes.df_delay_effectinfo2,df_repeat_effectinfo2=attributes.df_repeat_effectinfo2,title2=attributes.title2,fontsizetitle2=attributes.fontsizetitle2,fontsizetitle2table=attributes.fontsizetitle2table,fontsizetitle2mobile=attributes.fontsizetitle2mobile,info2=attributes.info2,fontsizeinfo2=attributes.fontsizeinfo2,fontsizeinfo2table=attributes.fontsizeinfo2table,fontsizeinfo2mobile=attributes.fontsizeinfo2mobile,margin_bottom_button2=attributes.margin_bottom_button2,margin_bottom_table_button2=attributes.margin_bottom_table_button2,margin_bottom_mobile_button2=attributes.margin_bottom_mobile_button2,effectbutton2=attributes.effectbutton2,df_speed_effectbutton2=attributes.df_speed_effectbutton2,df_delay_effectbutton2=attributes.df_delay_effectbutton2,df_repeat_effectbutton2=attributes.df_repeat_effectbutton2,alignment_title2=attributes.alignment_title2,alignment_info2=attributes.alignment_info2,button2=attributes.button2,fontsizebutton2=attributes.fontsizebutton2,fontsizebutton2table=attributes.fontsizebutton2table,fontsizebutton2mobile=attributes.fontsizebutton2mobile,alignment_button2=attributes.alignment_button2,padding_link_button2=attributes.padding_link_button2,padding_right_link_button2=attributes.padding_right_link_button2,border_radius_top_left_link_button2=attributes.border_radius_top_left_link_button2,border_radius_top_right_link_button2=attributes.border_radius_top_right_link_button2,border_radius_bottom_left_link_button2=attributes.border_radius_bottom_left_link_button2,border_radius_bottom_right_link_button2=attributes.border_radius_bottom_right_link_button2,border_size_link_button2=attributes.border_size_link_button2,df_background_color_link_button2=attributes.df_background_color_link_button2,df_background_color_hover_link_button2=attributes.df_background_color_hover_link_button2,df_color_link_button2=attributes.df_color_link_button2,df_color_hover_link_button2=attributes.df_color_hover_link_button2,df_border_color_link_button2=attributes.df_border_color_link_button2,df_background_color_transparent_link_button2=attributes.df_background_color_transparent_link_button2,alt2=attributes.alt2,id2=attributes.id2,imageUrl_2=attributes.imageUrl_2,df_cover_img2=attributes.df_cover_img2,df_focalPoint_img_2=attributes.df_focalPoint_img_2,df_focalPoint_y_img_2=attributes.df_focalPoint_y_img_2,df_background_color_slider_2=attributes.df_background_color_slider_2,df_enable_divide_2=attributes.df_enable_divide_2,divide_2=attributes.divide_2,df_color_divide_2=attributes.df_color_divide_2,df_height_divide_2=attributes.df_height_divide_2,df_height_table_divide_2=attributes.df_height_table_divide_2,df_height_mobile_divide_2=attributes.df_height_mobile_divide_2,bubiblock_dalay_divide_2=attributes.bubiblock_dalay_divide_2,df_enable_divide_bottom_2=attributes.df_enable_divide_bottom_2,divide_bottom_2=attributes.divide_bottom_2,df_color_divide_bottom_2=attributes.df_color_divide_bottom_2,df_height_divide_bottom_2=attributes.df_height_divide_bottom_2,df_height_table_divide_bottom_2=attributes.df_height_table_divide_bottom_2,df_height_mobile_divide_bottom_2=attributes.df_height_mobile_divide_bottom_2,bubiblock_dalay_divide_2_bottom=attributes.bubiblock_dalay_divide_2_bottom,bubiblock_link_slider_2=attributes.bubiblock_link_slider_2,bubiblock_link_tab_slider_2=attributes.bubiblock_link_tab_slider_2,bubiblock_add_slider_3=attributes.bubiblock_add_slider_3,df_slider_chose_3=attributes.df_slider_chose_3,df_mask_slider_3=attributes.df_mask_slider_3,background_color_solid_mask_3=attributes.background_color_solid_mask_3,background_color_gradient_mask_3=attributes.background_color_gradient_mask_3,df_opacity_mask_3=attributes.df_opacity_mask_3,effectcaption3=attributes.effectcaption3,df_speed_effectcaption3=attributes.df_speed_effectcaption3,df_delay_effectcaption3=attributes.df_delay_effectcaption3,df_repeat_effectcaption3=attributes.df_repeat_effectcaption3,margin_bottom_caption3=attributes.margin_bottom_caption3,margin_bottom_table_caption3=attributes.margin_bottom_table_caption3,margin_bottom_mobile_caption3=attributes.margin_bottom_mobile_caption3,margin_bottom_info3=attributes.margin_bottom_info3,margin_bottom_table_info3=attributes.margin_bottom_table_info3,margin_bottom_mobile_info3=attributes.margin_bottom_mobile_info3,effectinfo3=attributes.effectinfo3,df_speed_effectinfo3=attributes.df_speed_effectinfo3,df_delay_effectinfo3=attributes.df_delay_effectinfo3,df_repeat_effectinfo3=attributes.df_repeat_effectinfo3,title3=attributes.title3,fontsizetitle3=attributes.fontsizetitle3,fontsizetitle3table=attributes.fontsizetitle3table,fontsizetitle3mobile=attributes.fontsizetitle3mobile,info3=attributes.info3,fontsizeinfo3=attributes.fontsizeinfo3,fontsizeinfo3table=attributes.fontsizeinfo3table,fontsizeinfo3mobile=attributes.fontsizeinfo3mobile,margin_bottom_button3=attributes.margin_bottom_button3,margin_bottom_table_button3=attributes.margin_bottom_table_button3,margin_bottom_mobile_button3=attributes.margin_bottom_mobile_button3,effectbutton3=attributes.effectbutton3,df_speed_effectbutton3=attributes.df_speed_effectbutton3,df_delay_effectbutton3=attributes.df_delay_effectbutton3,df_repeat_effectbutton3=attributes.df_repeat_effectbutton3,alignment_title3=attributes.alignment_title3,alignment_info3=attributes.alignment_info3,button3=attributes.button3,fontsizebutton3=attributes.fontsizebutton3,fontsizebutton3table=attributes.fontsizebutton3table,fontsizebutton3mobile=attributes.fontsizebutton3mobile,alignment_button3=attributes.alignment_button3,padding_link_button3=attributes.padding_link_button3,padding_right_link_button3=attributes.padding_right_link_button3,border_radius_top_left_link_button3=attributes.border_radius_top_left_link_button3,border_radius_top_right_link_button3=attributes.border_radius_top_right_link_button3,border_radius_bottom_left_link_button3=attributes.border_radius_bottom_left_link_button3,border_radius_bottom_right_link_button3=attributes.border_radius_bottom_right_link_button3,border_size_link_button3=attributes.border_size_link_button3,df_background_color_link_button3=attributes.df_background_color_link_button3,df_background_color_hover_link_button3=attributes.df_background_color_hover_link_button3,df_color_link_button3=attributes.df_color_link_button3,df_color_hover_link_button3=attributes.df_color_hover_link_button3,df_border_color_link_button3=attributes.df_border_color_link_button3,df_background_color_transparent_link_button3=attributes.df_background_color_transparent_link_button3,alt3=attributes.alt3,id3=attributes.id3,imageUrl_3=attributes.imageUrl_3,df_cover_img3=attributes.df_cover_img3,df_focalPoint_img_3=attributes.df_focalPoint_img_3,df_focalPoint_y_img_3=attributes.df_focalPoint_y_img_3,df_background_color_slider_3=attributes.df_background_color_slider_3,df_enable_divide_3=attributes.df_enable_divide_3,divide_3=attributes.divide_3,df_color_divide_3=attributes.df_color_divide_3,df_height_divide_3=attributes.df_height_divide_3,df_height_table_divide_3=attributes.df_height_table_divide_3,df_height_mobile_divide_3=attributes.df_height_mobile_divide_3,bubiblock_dalay_divide_3=attributes.bubiblock_dalay_divide_3,df_enable_divide_bottom_3=attributes.df_enable_divide_bottom_3,divide_bottom_3=attributes.divide_bottom_3,df_color_divide_bottom_3=attributes.df_color_divide_bottom_3,df_height_divide_bottom_3=attributes.df_height_divide_bottom_3,df_height_table_divide_bottom_3=attributes.df_height_table_divide_bottom_3,df_height_mobile_divide_bottom_3=attributes.df_height_mobile_divide_bottom_3,bubiblock_dalay_divide_3_bottom=attributes.bubiblock_dalay_divide_3_bottom,bubiblock_link_slider_3=attributes.bubiblock_link_slider_3,bubiblock_link_tab_slider_3=attributes.bubiblock_link_tab_slider_3,bubiblock_add_slider_4=attributes.bubiblock_add_slider_4,df_slider_chose_4=attributes.df_slider_chose_4,df_mask_slider_4=attributes.df_mask_slider_4,background_color_solid_mask_4=attributes.background_color_solid_mask_4,background_color_gradient_mask_4=attributes.background_color_gradient_mask_4,df_opacity_mask_4=attributes.df_opacity_mask_4,effectcaption4=attributes.effectcaption4,df_speed_effectcaption4=attributes.df_speed_effectcaption4,df_delay_effectcaption4=attributes.df_delay_effectcaption4,df_repeat_effectcaption4=attributes.df_repeat_effectcaption4,margin_bottom_caption4=attributes.margin_bottom_caption4,margin_bottom_table_caption4=attributes.margin_bottom_table_caption4,margin_bottom_mobile_caption4=attributes.margin_bottom_mobile_caption4,margin_bottom_info4=attributes.margin_bottom_info4,margin_bottom_table_info4=attributes.margin_bottom_table_info4,margin_bottom_mobile_info4=attributes.margin_bottom_mobile_info4,effectinfo4=attributes.effectinfo4,df_speed_effectinfo4=attributes.df_speed_effectinfo4,df_delay_effectinfo4=attributes.df_delay_effectinfo4,df_repeat_effectinfo4=attributes.df_repeat_effectinfo4,title4=attributes.title4,fontsizetitle4=attributes.fontsizetitle4,fontsizetitle4table=attributes.fontsizetitle4table,fontsizetitle4mobile=attributes.fontsizetitle4mobile,info4=attributes.info4,fontsizeinfo4=attributes.fontsizeinfo4,fontsizeinfo4table=attributes.fontsizeinfo4table,fontsizeinfo4mobile=attributes.fontsizeinfo4mobile,margin_bottom_button4=attributes.margin_bottom_button4,margin_bottom_table_button4=attributes.margin_bottom_table_button4,margin_bottom_mobile_button4=attributes.margin_bottom_mobile_button4,effectbutton4=attributes.effectbutton4,df_speed_effectbutton4=attributes.df_speed_effectbutton4,df_delay_effectbutton4=attributes.df_delay_effectbutton4,df_repeat_effectbutton4=attributes.df_repeat_effectbutton4,alignment_title4=attributes.alignment_title4,alignment_info4=attributes.alignment_info4,button4=attributes.button4,fontsizebutton4=attributes.fontsizebutton4,fontsizebutton4table=attributes.fontsizebutton4table,fontsizebutton4mobile=attributes.fontsizebutton4mobile,alignment_button4=attributes.alignment_button4,padding_link_button4=attributes.padding_link_button4,padding_right_link_button4=attributes.padding_right_link_button4,border_radius_top_left_link_button4=attributes.border_radius_top_left_link_button4,border_radius_top_right_link_button4=attributes.border_radius_top_right_link_button4,border_radius_bottom_left_link_button4=attributes.border_radius_bottom_left_link_button4,border_radius_bottom_right_link_button4=attributes.border_radius_bottom_right_link_button4,border_size_link_button4=attributes.border_size_link_button4,df_background_color_link_button4=attributes.df_background_color_link_button4,df_background_color_hover_link_button4=attributes.df_background_color_hover_link_button4,df_color_link_button4=attributes.df_color_link_button4,df_color_hover_link_button4=attributes.df_color_hover_link_button4,df_border_color_link_button4=attributes.df_border_color_link_button4,df_background_color_transparent_link_button4=attributes.df_background_color_transparent_link_button4,alt4=attributes.alt4,id4=attributes.id4,imageUrl_4=attributes.imageUrl_4,df_cover_img4=attributes.df_cover_img4,df_focalPoint_img_4=attributes.df_focalPoint_img_4,df_focalPoint_y_img_4=attributes.df_focalPoint_y_img_4,df_background_color_slider_4=attributes.df_background_color_slider_4,df_enable_divide_4=attributes.df_enable_divide_4,divide_4=attributes.divide_4,df_color_divide_4=attributes.df_color_divide_4,df_height_divide_4=attributes.df_height_divide_4,df_height_table_divide_4=attributes.df_height_table_divide_4,df_height_mobile_divide_4=attributes.df_height_mobile_divide_4,bubiblock_dalay_divide_4=attributes.bubiblock_dalay_divide_4,df_enable_divide_bottom_4=attributes.df_enable_divide_bottom_4,divide_bottom_4=attributes.divide_bottom_4,df_color_divide_bottom_4=attributes.df_color_divide_bottom_4,df_height_divide_bottom_4=attributes.df_height_divide_bottom_4,df_height_table_divide_bottom_4=attributes.df_height_table_divide_bottom_4,df_height_mobile_divide_bottom_4=attributes.df_height_mobile_divide_bottom_4,bubiblock_dalay_divide_4_bottom=attributes.bubiblock_dalay_divide_4_bottom,bubiblock_link_slider_4=attributes.bubiblock_link_slider_4,bubiblock_link_tab_slider_4=attributes.bubiblock_link_tab_slider_4,bubiblock_add_slider_5=attributes.bubiblock_add_slider_5,df_slider_chose_5=attributes.df_slider_chose_5,df_mask_slider_5=attributes.df_mask_slider_5,background_color_solid_mask_5=attributes.background_color_solid_mask_5,background_color_gradient_mask_5=attributes.background_color_gradient_mask_5,df_opacity_mask_5=attributes.df_opacity_mask_5,effectcaption5=attributes.effectcaption5,df_speed_effectcaption5=attributes.df_speed_effectcaption5,df_delay_effectcaption5=attributes.df_delay_effectcaption5,df_repeat_effectcaption5=attributes.df_repeat_effectcaption5,margin_bottom_caption5=attributes.margin_bottom_caption5,margin_bottom_table_caption5=attributes.margin_bottom_table_caption5,margin_bottom_mobile_caption5=attributes.margin_bottom_mobile_caption5,margin_bottom_info5=attributes.margin_bottom_info5,margin_bottom_table_info5=attributes.margin_bottom_table_info5,margin_bottom_mobile_info5=attributes.margin_bottom_mobile_info5,effectinfo5=attributes.effectinfo5,df_speed_effectinfo5=attributes.df_speed_effectinfo5,df_delay_effectinfo5=attributes.df_delay_effectinfo5,df_repeat_effectinfo5=attributes.df_repeat_effectinfo5,title5=attributes.title5,fontsizetitle5=attributes.fontsizetitle5,fontsizetitle5table=attributes.fontsizetitle5table,fontsizetitle5mobile=attributes.fontsizetitle5mobile,info5=attributes.info5,fontsizeinfo5=attributes.fontsizeinfo5,fontsizeinfo5table=attributes.fontsizeinfo5table,fontsizeinfo5mobile=attributes.fontsizeinfo5mobile,margin_bottom_button5=attributes.margin_bottom_button5,margin_bottom_table_button5=attributes.margin_bottom_table_button5,margin_bottom_mobile_button5=attributes.margin_bottom_mobile_button5,effectbutton5=attributes.effectbutton5,df_speed_effectbutton5=attributes.df_speed_effectbutton5,df_delay_effectbutton5=attributes.df_delay_effectbutton5,df_repeat_effectbutton5=attributes.df_repeat_effectbutton5,alignment_title5=attributes.alignment_title5,alignment_info5=attributes.alignment_info5,button5=attributes.button5,fontsizebutton5=attributes.fontsizebutton5,fontsizebutton5table=attributes.fontsizebutton5table,fontsizebutton5mobile=attributes.fontsizebutton5mobile,alignment_button5=attributes.alignment_button5,padding_link_button5=attributes.padding_link_button5,padding_right_link_button5=attributes.padding_right_link_button5,border_radius_top_left_link_button5=attributes.border_radius_top_left_link_button5,border_radius_top_right_link_button5=attributes.border_radius_top_right_link_button5,border_radius_bottom_left_link_button5=attributes.border_radius_bottom_left_link_button5,border_radius_bottom_right_link_button5=attributes.border_radius_bottom_right_link_button5,border_size_link_button5=attributes.border_size_link_button5,df_background_color_link_button5=attributes.df_background_color_link_button5,df_background_color_hover_link_button5=attributes.df_background_color_hover_link_button5,df_color_link_button5=attributes.df_color_link_button5,df_color_hover_link_button5=attributes.df_color_hover_link_button5,df_border_color_link_button5=attributes.df_border_color_link_button5,df_background_color_transparent_link_button5=attributes.df_background_color_transparent_link_button5,alt5=attributes.alt5,id5=attributes.id5,imageUrl_5=attributes.imageUrl_5,df_cover_img5=attributes.df_cover_img5,df_focalPoint_img_5=attributes.df_focalPoint_img_5,df_focalPoint_y_img_5=attributes.df_focalPoint_y_img_5,df_background_color_slider_5=attributes.df_background_color_slider_5,df_enable_divide_5=attributes.df_enable_divide_5,divide_5=attributes.divide_5,df_color_divide_5=attributes.df_color_divide_5,df_height_divide_5=attributes.df_height_divide_5,df_height_table_divide_5=attributes.df_height_table_divide_5,df_height_mobile_divide_5=attributes.df_height_mobile_divide_5,bubiblock_dalay_divide_5=attributes.bubiblock_dalay_divide_5,df_enable_divide_bottom_5=attributes.df_enable_divide_bottom_5,divide_bottom_5=attributes.divide_bottom_5,df_color_divide_bottom_5=attributes.df_color_divide_bottom_5,df_height_divide_bottom_5=attributes.df_height_divide_bottom_5,df_height_table_divide_bottom_5=attributes.df_height_table_divide_bottom_5,df_height_mobile_divide_bottom_5=attributes.df_height_mobile_divide_bottom_5,bubiblock_dalay_divide_5_bottom=attributes.bubiblock_dalay_divide_5_bottom,bubiblock_link_slider_5=attributes.bubiblock_link_slider_5,bubiblock_link_tab_slider_5=attributes.bubiblock_link_tab_slider_5;var dateFormat=Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["__experimentalGetSettings"])().formats.date;// Editor Responsive
{df_resp=='desktop'&&document.styleSheets[0].addRule('.editor-styles-wrapper','height:100%;width:100%;margin:0;min-height:100%;max-height:100%');}{df_resp=='table'&&document.styleSheets[0].addRule('.editor-styles-wrapper','height:1024px; width: 780px; margin: 72px auto!important; flex-grow: 0;min-height: 1024px; max-height: 1024px;overflow-y: auto;');}{df_resp=='mobile'&&document.styleSheets[0].addRule('.editor-styles-wrapper','height:768px; width: 360px; margin: 72px auto!important; flex-grow: 0;min-height: 768px; max-height: 768px;overflow-y: auto;');}// Padding Slider
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop','padding-left:'+bubiblock_padding_slider+'px;'+'padding-right:'+bubiblock_padding_slider+'px;'+'padding-top:'+bubiblock_padding_b_slider+'px;'+'padding-bottom:'+bubiblock_padding_b_slider+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table','padding-left:'+bubiblock_padding_table_slider+'px;'+'padding-right:'+bubiblock_padding_table_slider+'px;'+'padding-top:'+bubiblock_padding_b_table_slider+'px;'+'padding-bottom:'+bubiblock_padding_b_table_slider+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile','padding-left:'+bubiblock_padding_mobile_slider+'px;'+'padding-right:'+bubiblock_padding_mobile_slider+'px;'+'padding-top:'+bubiblock_padding_b_mobile_slider+'px;'+'padding-bottom:'+bubiblock_padding_b_mobile_slider+'px');// Padding Caption
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-caption','margin-left:'+bubiblock_padding_caption+'px;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-caption','margin-left:'+bubiblock_padding_table_caption+'px;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-caption','margin-left:'+bubiblock_padding_mobile_caption+'px;');// Button Caption
if(bubiblock_display_button_table_caption!=1){document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-caption button','display: none;');}if(bubiblock_display_button_table_caption!=0){document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-caption button','display: initial;');}if(bubiblock_display_button_mobile_caption!=1){document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-caption button','display: none;');}if(bubiblock_display_button_mobile_caption!=0){document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-caption button','display: initial;');}// Height slider
if(df_height_slider_auto!=1){document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item.active','height:'+height_slider+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item.active img.img-cap','min-height:'+height_slider+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item.active video','min-height:'+height_slider+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item','height:'+height_slider+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item img.img-cap','min-height:'+height_slider+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item video','min-height:'+height_slider+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item.active','height:'+height_slider_table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item.active img.img-cap','min-height:'+height_slider_table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item.active video','min-height:'+height_slider_table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item','height:'+height_slider_table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item img.img-cap','min-height:'+height_slider_table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item video','min-height:'+height_slider_table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item.active','height:'+height_slider_mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item.active img.img-cap','min-height:'+height_slider_mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item.active video','min-height:'+height_slider_mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item','height:'+height_slider_mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item img.img-cap','min-height:'+height_slider_mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item video','min-height:'+height_slider_mobile+'px!important;');}if(df_height_slider_auto!=0){document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item.active','height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item.active img.img-cap','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item.active video','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item','height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item img.img-cap','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .carousel-item video','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item.active','height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item.active img.img-cap','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item.active video','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item','height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item img.img-cap','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .carousel-item video','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item.active','height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item.active img.img-cap','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item.active video','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item','height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item img.img-cap','min-height:auto!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .carousel-item video','min-height:auto!important;');}// Caption block
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .bubiblock-block','padding-left:'+bubiblock_padding_block_slider+'px;'+'padding-right:'+bubiblock_padding_block_slider+'px;'+'padding-top:'+bubiblock_padding_b_block_slider+'px;'+'padding-bottom:'+bubiblock_padding_b_block_slider+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .bubiblock-block','padding-left:'+bubiblock_padding_block_slider_table+'px;'+'padding-right:'+bubiblock_padding_block_slider_table+'px;'+'padding-top:'+bubiblock_padding_b_block_slider_table+'px;'+'padding-bottom:'+bubiblock_padding_b_block_slider_table+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .bubiblock-block','padding-left:'+bubiblock_padding_block_slider_mobile+'px;'+'padding-right:'+bubiblock_padding_block_slider_mobile+'px;'+'padding-top:'+bubiblock_padding_b_block_slider_mobile+'px;'+'padding-bottom:'+bubiblock_padding_b_block_slider_mobile+'px');// Arrow
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-carousel-control-prev.df-arrow-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-carousel-control-next.df-arrow-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-carousel-control-prev.df-arrow-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-carousel-control-next.df-arrow-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-carousel-control-prev.df-arrow-mobile-false','display:none');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-carousel-control-next.df-arrow-mobile-false','display:none');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-carousel-control-prev i','font-size:'+df_size_arrow_table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-carousel-control-next i','font-size:'+df_size_arrow_table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-carousel-control-prev i','font-size:'+df_size_arrow_mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-carousel-control-next i','font-size:'+df_size_arrow_mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-control-next.df-carousel-control-next:hover','opacity:'+bubiopacityhoverarrow+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-control-prev.df-carousel-control-prev:hover','opacity:'+bubiopacityhoverarrow+'!important');// Dots
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-dot-false.carousel-indicators','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-dot-table-false.carousel-indicators','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-dot-mobile-false.carousel-indicators','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-indicators.difftrue li.active::after','height:'+bubiblock_height_dot_active+'px; width: 100%;position: absolute; transition: height .25s ease-in-out;bottom: 0;background-color:'+df_color_dot);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-indicators.difftrue li','transition:height .25s ease-in-out;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-indicators.progtrue li.active::after','width: 100%!important;  transition: width '+df_interval_slider+'ms ease-out;top: 0;height:'+df_height_dot+'px;background-color:'+df_color_progress_dot);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-indicators.progtrue li::after','width:0!important;transition: width '+df_interval_slider+'ms ease-in;position: absolute;top: 0; height:'+df_height_dot+'px;');//Speed slider
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.df-slider-slide','-webkit-transition: -webkit-transform '+bubiblock_speed_slider+'s ease-in-out;transition: -webkit-transform '+bubiblock_speed_slider+'s ease-in-out;-o-transition: -o-transform '+bubiblock_speed_slider+'s ease-in-out;transition: transform '+bubiblock_speed_slider+'s ease-in-out;transition: transform '+bubiblock_speed_slider+'s ease-in-out, -webkit-transform '+bubiblock_speed_slider+'s ease-in-out, -o-transform '+bubiblock_speed_slider+'s ease-in-out;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.bubiblock-flip',' transition: '+bubiblock_speed_flip_slider+'s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;-webkit-transition: '+bubiblock_speed_flip_slider+'s cubic-bezier(0.175, 0.885, 0.32, 1.275);transform-style: preserve-3d;-webkit-style: preserve-3d;');// Border radius item
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item img.img-cap,#carouselDFControlslider'+bubiblock_id_slider+',#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item video,#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item .bubiblock-color-slider-item,#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item iframe','border-radius:'+bubiblock_radius_slider+'%');// Font Family
if(bubiblock_typography_custom!=0){document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' h4','font-family:'+bubiblcok_fontfamily);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' h4','font-weight:'+bubiblcok_fontfamily_weight);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' h4','line-height:'+bubiblock_line_height_title);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' p','font-family:'+bubiblcok_fontfamily_descritpion);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' p','font-weight:'+bubiblcok_fontfamily_weight_description);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' p.bubiblock-p-capt','line-height:'+bubiblock_line_height_info);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button p','font-family:'+bubiblcok_fontfamily_button);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button p','font-weight:'+bubiblcok_fontfamily_weight_button);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button a','font-family:'+bubiblcok_fontfamily_button);document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button a','font-weight:'+bubiblcok_fontfamily_weight_button);}// Slider 1
// title
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title','bottom:'+margin_bottom_table_caption1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title','bottom:'+margin_bottom_mobile_caption1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title','font-size:'+fontsizetitle1table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title','font-size:'+fontsizetitle1mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-1.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-1.df-caption-mobile-false','display:none!important;');// info
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info','bottom:'+margin_bottom_table_info1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info','bottom:'+margin_bottom_mobile_info1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info','font-size:'+fontsizeinfo1table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info','font-size:'+fontsizeinfo1mobile+'px!important;');// button
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-1','bottom:'+margin_bottom_table_button1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-1','bottom:'+margin_bottom_mobile_button1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .button-slider p','font-size:'+fontsizebutton1table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .button-slider p','font-size:'+fontsizebutton1mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider:hover','background-color:'+df_background_color_hover_link_button1+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider:hover','background:'+df_background_color_hover_link_button1+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider:hover p','color:'+df_color_hover_link_button1+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider:hover span','color:'+df_color_hover_link_button1+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider:hover a','color:'+df_color_hover_link_button1+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider.df-trasparent-color-button1-true','background-color: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider.df-trasparent-color-button1-true','background: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider.df-trasparent-color-button1-true:hover','background-color: '+df_background_color_hover_link_button1+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider.df-trasparent-color-button1-true:hover','background: '+df_background_color_hover_link_button1+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider.df-trasparent-color-button1-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 button.button-slider.df-trasparent-color-button1-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 a','color: '+df_color_link_button1+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 p','color: '+df_color_link_button1+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-1 span','color: '+df_color_link_button1+'!important');// divide top
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-1','height:'+df_height_divide_1+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-1','height:'+df_height_table_divide_1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-1','height:'+df_height_mobile_divide_1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-1','transition: max-height '+bubiblock_dalay_divide_1+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-1','transition: max-height '+bubiblock_dalay_divide_1+'s ease-out;');// divide bottom
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-bottom-1','height:'+df_height_divide_bottom_1+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-bottom-1','height:'+df_height_table_divide_bottom_1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-bottom-1','height:'+df_height_mobile_divide_bottom_1+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-bottom-1','transition: max-height '+bubiblock_dalay_divide_1_bottom+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-bottom-1','transition: max-height '+bubiblock_dalay_divide_1_bottom+'s ease-out;');// Slider 2
// title
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_2','bottom:'+margin_bottom_table_caption2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_2','bottom:'+margin_bottom_mobile_caption2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_2','font-size:'+fontsizetitle2table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_2','font-size:'+fontsizetitle2mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_2.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_2.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_2.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_2.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-2.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-2.df-caption-mobile-false','display:none!important;');// info
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_2','bottom:'+margin_bottom_table_info2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_2','bottom:'+margin_bottom_mobile_info2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_2','font-size:'+fontsizeinfo2table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_2','font-size:'+fontsizeinfo2mobile+'px!important;');// button
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-2','bottom:'+margin_bottom_table_button2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-2','bottom:'+margin_bottom_mobile_button2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .button-slider2 p','font-size:'+fontsizebutton2table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .button-slider2 p','font-size:'+fontsizebutton2mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2:hover','background-color:'+df_background_color_hover_link_button2+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2:hover','background:'+df_background_color_hover_link_button2+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider2:hover p','color:'+df_color_hover_link_button2+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider2:hover span','color:'+df_color_hover_link_button2+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider2:hover a','color:'+df_color_hover_link_button2+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2.df-trasparent-color-button2-true','background-color: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2.df-trasparent-color-button2-true','background: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2.df-trasparent-color-button2-true:hover','background-color: '+df_background_color_hover_link_button2+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2.df-trasparent-color-button2-true:hover','background: '+df_background_color_hover_link_button2+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2.df-trasparent-color-button2-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 button.button-slider2.df-trasparent-color-button2-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 a','color: '+df_color_link_button2+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 p','color: '+df_color_link_button2+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-2 span','color: '+df_color_link_button2+'!important');// divide top
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-2','height:'+df_height_divide_2+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-2','height:'+df_height_table_divide_2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-2','height:'+df_height_mobile_divide_2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-2','transition: max-height '+bubiblock_dalay_divide_2+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-2','transition: max-height '+bubiblock_dalay_divide_2+'s ease-out;');// divide bottom
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-bottom-2','height:'+df_height_divide_bottom_2+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-bottom-2','height:'+df_height_table_divide_bottom_2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-bottom-2','height:'+df_height_mobile_divide_bottom_2+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-bottom-2','transition: max-height '+bubiblock_dalay_divide_2_bottom+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-bottom-2','transition: max-height '+bubiblock_dalay_divide_2_bottom+'s ease-out;');// Slider 3
// title
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_3','bottom:'+margin_bottom_table_caption3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_3','bottom:'+margin_bottom_mobile_caption3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_3','font-size:'+fontsizetitle3table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_3','font-size:'+fontsizetitle3mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_3.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_3.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_3.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_3.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-3.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-3.df-caption-mobile-false','display:none!important;');// info
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_3','bottom:'+margin_bottom_table_info3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_3','bottom:'+margin_bottom_mobile_info3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_3','font-size:'+fontsizeinfo3table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_3','font-size:'+fontsizeinfo3mobile+'px!important;');// button
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-3','bottom:'+margin_bottom_table_button3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-3','bottom:'+margin_bottom_mobile_button3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .button-slider3 p','font-size:'+fontsizebutton3table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .button-slider3 p','font-size:'+fontsizebutton3mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3:hover','background-color:'+df_background_color_hover_link_button3+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3:hover','background:'+df_background_color_hover_link_button3+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider3:hover p','color:'+df_color_hover_link_button3+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider3:hover span','color:'+df_color_hover_link_button3+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider3:hover a','color:'+df_color_hover_link_button3+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3.df-trasparent-color-button3-true','background-color: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3.df-trasparent-color-button3-true','background: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3.df-trasparent-color-button3-true:hover','background-color: '+df_background_color_hover_link_button3+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3.df-trasparent-color-button3-true:hover','background: '+df_background_color_hover_link_button3+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3.df-trasparent-color-button3-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 button.button-slider3.df-trasparent-color-button3-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 a','color: '+df_color_link_button3+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 p','color: '+df_color_link_button3+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-3 span','color: '+df_color_link_button3+'!important');// divide top
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-3','height:'+df_height_divide_3+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-3','height:'+df_height_table_divide_3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-3','height:'+df_height_mobile_divide_3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-3','transition: max-height '+bubiblock_dalay_divide_3+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-3','transition: max-height '+bubiblock_dalay_divide_3+'s ease-out;');// divide bottom
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-bottom-3','height:'+df_height_divide_bottom_3+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-bottom-3','height:'+df_height_table_divide_bottom_3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-bottom-3','height:'+df_height_mobile_divide_bottom_3+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-bottom-3','transition: max-height '+bubiblock_dalay_divide_3_bottom+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-bottom-3','transition: max-height '+bubiblock_dalay_divide_3_bottom+'s ease-out;');// Slider 4
// title
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_4','bottom:'+margin_bottom_table_caption4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_4','bottom:'+margin_bottom_mobile_caption4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_4','font-size:'+fontsizetitle4table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_4','font-size:'+fontsizetitle4mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_4.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_4.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_4.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_4.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-4.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-4.df-caption-mobile-false','display:none!important;');// info
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_4','bottom:'+margin_bottom_table_info4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_4','bottom:'+margin_bottom_mobile_info4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_4','font-size:'+fontsizeinfo4table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_4','font-size:'+fontsizeinfo4mobile+'px!important;');// button
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-4','bottom:'+margin_bottom_table_button4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-4','bottom:'+margin_bottom_mobile_button4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .button-slider4 p','font-size:'+fontsizebutton4table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .button-slider4 p','font-size:'+fontsizebutton4mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4:hover','background-color:'+df_background_color_hover_link_button4+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4:hover','background:'+df_background_color_hover_link_button4+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider4:hover p','color:'+df_color_hover_link_button4+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider4:hover span','color:'+df_color_hover_link_button4+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider4:hover a','color:'+df_color_hover_link_button4+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4.df-trasparent-color-button4-true','background-color: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4.df-trasparent-color-button4-true','background: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4.df-trasparent-color-button4-true:hover','background-color: '+df_background_color_hover_link_button4+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4.df-trasparent-color-button4-true:hover','background: '+df_background_color_hover_link_button4+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4.df-trasparent-color-button4-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 button.button-slider4.df-trasparent-color-button4-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 a','color: '+df_color_link_button4+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 p','color: '+df_color_link_button4+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-4 span','color: '+df_color_link_button4+'!important');// divide top
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-4','height:'+df_height_divide_4+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-4','height:'+df_height_table_divide_4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-4','height:'+df_height_mobile_divide_4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-4','transition: max-height '+bubiblock_dalay_divide_4+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-4','transition: max-height '+bubiblock_dalay_divide_4+'s ease-out;');// divide bottom
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-bottom-4','height:'+df_height_divide_bottom_4+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-bottom-4','height:'+df_height_table_divide_bottom_4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-bottom-4','height:'+df_height_mobile_divide_bottom_4+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-bottom-4','transition: max-height '+bubiblock_dalay_divide_4_bottom+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-bottom-4','transition: max-height '+bubiblock_dalay_divide_4_bottom+'s ease-out;');// Slider 5
// title
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_5','bottom:'+margin_bottom_table_caption5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_5','bottom:'+margin_bottom_mobile_caption5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_5','font-size:'+fontsizetitle5table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_5','font-size:'+fontsizetitle5mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table h4.wp-block-bubiblock-slider-slider__title_5.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile h4.wp-block-bubiblock-slider-slider__title_5.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_5.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_5.df-caption-mobile-false','display:none!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-5.df-caption-table-false','display:none;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-5.df-caption-mobile-false','display:none!important;');// info
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_5','bottom:'+margin_bottom_table_info5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_5','bottom:'+margin_bottom_mobile_info5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table p.wp-block-bubiblock-slider-slider__info_5','font-size:'+fontsizeinfo5table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile p.wp-block-bubiblock-slider-slider__info_5','font-size:'+fontsizeinfo5mobile+'px!important;');// button
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .link-button-5','bottom:'+margin_bottom_table_button5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .link-button-5','bottom:'+margin_bottom_mobile_button5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .button-slider5 p','font-size:'+fontsizebutton5table+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .button-slider5 p','font-size:'+fontsizebutton5mobile+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5:hover','background-color:'+df_background_color_hover_link_button5+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5:hover','background:'+df_background_color_hover_link_button5+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider5:hover p','color:'+df_color_hover_link_button5+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider5:hover span','color:'+df_color_hover_link_button5+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' button.button-slider5:hover a','color:'+df_color_hover_link_button5+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5.df-trasparent-color-button5-true','background-color: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5.df-trasparent-color-button5-true','background: transparent!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5.df-trasparent-color-button5-true:hover','background-color: '+df_background_color_hover_link_button5+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5.df-trasparent-color-button5-true:hover','background: '+df_background_color_hover_link_button5+'!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5.df-trasparent-color-button5-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 button.button-slider5.df-trasparent-color-button5-true:hover');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 a','color: '+df_color_link_button5+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 p','color: '+df_color_link_button5+'!important');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .link-button-5 span','color: '+df_color_link_button5+'!important');// divide top
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-5','height:'+df_height_divide_5+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-5','height:'+df_height_table_divide_5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-5','height:'+df_height_mobile_divide_5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-5','transition: max-height '+bubiblock_dalay_divide_5+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-5','transition: max-height '+bubiblock_dalay_divide_5+'s ease-out;');// divide bottom
document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.desktop .df-divide-bottom-5','height:'+df_height_divide_bottom_5+'px');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.table .df-divide-bottom-5','height:'+df_height_table_divide_bottom_5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+'.mobile .df-divide-bottom-5','height:'+df_height_mobile_divide_bottom_5+'px!important;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .carousel-item.active .df-divide-bottom-5','transition: max-height '+bubiblock_dalay_divide_5_bottom+'s ease-in;');document.styleSheets[0].addRule('#carouselDFControlslider'+bubiblock_id_slider+' .df-divide-bottom-5','transition: max-height '+bubiblock_dalay_divide_5_bottom+'s ease-out;');// Divide Slider
var bubiOptionsDivideTop=[{label:wp.element.createElement("svg",{className:'df-flip-editor',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",fill:"#007cba",__self:this,__source:{fileName:_jsxFileName,lineNumber:1852,columnNumber:22}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:1852,columnNumber:148}})),value:'svg-1'},{label:wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",fill:"#007cba",__self:this,__source:{fileName:_jsxFileName,lineNumber:1853,columnNumber:22}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:1853,columnNumber:117}})),value:'svg-2'},{label:wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",fill:"#007cba",__self:this,__source:{fileName:_jsxFileName,lineNumber:1854,columnNumber:22}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:1854,columnNumber:117}})),value:'svg-3'},{label:wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",fill:"#007cba",__self:this,__source:{fileName:_jsxFileName,lineNumber:1855,columnNumber:22}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:1855,columnNumber:120}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:1855,columnNumber:123}}))),value:'svg-4'}];var bubiOptionsDivideBottom=[{label:wp.element.createElement("svg",{className:'df-flip-bottom',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",fill:"#007cba",__self:this,__source:{fileName:_jsxFileName,lineNumber:1859,columnNumber:22}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:1859,columnNumber:148}})),value:'svg-1'},{label:wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",fill:"#007cba",__self:this,__source:{fileName:_jsxFileName,lineNumber:1860,columnNumber:23}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:1860,columnNumber:118}})),value:'svg-2'},{label:wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",fill:"#007cba",__self:this,__source:{fileName:_jsxFileName,lineNumber:1861,columnNumber:22}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:1861,columnNumber:117}})),value:'svg-3'},{label:wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",fill:"#007cba",__self:this,__source:{fileName:_jsxFileName,lineNumber:1862,columnNumber:22}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:1862,columnNumber:120}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:1862,columnNumber:123}}))),value:'svg-4'}];return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:1867,columnNumber:17}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// General
,{icon:'admin-tools',className:'bubiblock-variation',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General','bubiblock-slider'),initialOpen:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:1868,columnNumber:21}},wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:1874,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Multiple Slider on the same page','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("ID","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('If you insert more sliders on the same page you have to set different ID! Important: when you have many sliders on the same page when using responsive controls, always return the control to "Desktop" before saving!','bubiblocks-slider'),options:[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('One','bubiblock-slider'),value:'one'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Two','bubiblock-slider'),value:'two'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Three','bubiblock-slider'),value:'three'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Four','bubiblock-slider'),value:'four'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Five','bubiblock-slider'),value:'five'}],onChange:function onChange(val){return setAttributes({bubiblock_id_slider:val});},value:bubiblock_id_slider,__self:this,__source:{fileName:_jsxFileName,lineNumber:1875,columnNumber:25}}),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:1888,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Slider','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show on Desktop','bubiblock-slider'),checked:bubiblock_show_slider_desktop,onChange:function onChange(newValue){return setAttributes({bubiblock_show_slider_desktop:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:1889,columnNumber:25}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show on Table','bubiblock-slider'),checked:bubiblock_show_slider_table,onChange:function onChange(newValue){return setAttributes({bubiblock_show_slider_table:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:1894,columnNumber:25}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show on Mobile','bubiblock-slider'),checked:bubiblock_show_slider_mobile,onChange:function onChange(newValue){return setAttributes({bubiblock_show_slider_mobile:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:1899,columnNumber:25}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-width-two',__self:this,__source:{fileName:_jsxFileName,lineNumber:1904,columnNumber:26}},wp.element.createElement("h6",{className:"df-inspector bubi-mt-0",__self:this,__source:{fileName:_jsxFileName,lineNumber:1907,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slide Content','bubiblock-slider')),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:1908,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Each slide can have its own content or are child blocks fixed on top of all slides.','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubi_block_content_slider=='bubiblock-block-slider',onClick:function onClick(){return setAttributes({bubi_block_content_slider:'bubiblock-block-slider'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:1909,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fixed Content','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubi_block_content_slider=='bubiblock-content-slider',onClick:function onClick(){return setAttributes({bubi_block_content_slider:'bubiblock-content-slider'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:1915,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Changing Content','bubiblock-slider'))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-width-one bubi-mt-1',__self:this,__source:{fileName:_jsxFileName,lineNumber:1922,columnNumber:25}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubi_block_content_slider=='bubiblock-blockcontent-slider',onClick:function onClick(){return setAttributes({bubi_block_content_slider:'bubiblock-blockcontent-slider'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:1925,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fixed and Changing Content','bubiblock-slider'))),bubi_block_content_slider=='bubiblock-blockcontent-slider'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"],{status:"info",isDismissible:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:1933,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('First enter the Changing Content, then the Fixed Content!','bubiblock-slider')),bubi_block_content_slider=='bubiblock-block-slider'==!(bubi_block_content_slider=='bubiblock-blockcontent-slider')&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:1942,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group',__self:this,__source:{fileName:_jsxFileName,lineNumber:1943,columnNumber:25}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:1946,columnNumber:29}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:1947,columnNumber:33}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:1948,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:1950,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:1951,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:1958,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:1965,columnNumber:37}})))),df_resp=='desktop'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Desktop)','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:15,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:90,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('90','bubiblock-slider')},{value:120,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('120','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_block_slider,onChange:this.onChangeBubiblock_padding_block_slider,min:0,max:150,__self:this,__source:{fileName:_jsxFileName,lineNumber:1977,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Desktop)','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:15,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:90,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('90','bubiblock-slider')},{value:120,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('120','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_b_block_slider,onChange:this.onChangeBubiblock_padding_b_block_slider,min:0,max:150,__self:this,__source:{fileName:_jsxFileName,lineNumber:2020,columnNumber:29}})),df_resp=='table'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Table)','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:10,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:90,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('90','bubiblock-slider')},{value:120,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('120','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_block_slider_table,onChange:this.onChangeBubiblock_padding_slider_table,min:0,max:150,__self:this,__source:{fileName:_jsxFileName,lineNumber:2067,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Table)','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:10,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:90,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('90','bubiblock-slider')},{value:120,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('120','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_b_block_slider_table,onChange:this.onChangeBubiblock_padding_b_slider_table,min:0,max:150,__self:this,__source:{fileName:_jsxFileName,lineNumber:2110,columnNumber:33}})),df_resp=='mobile'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Mobile)','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:90,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('90','bubiblock-slider')},{value:120,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('120','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_block_slider_mobile,onChange:this.onChangeBubiblock_padding_block_slider_mobile,min:0,max:150,__self:this,__source:{fileName:_jsxFileName,lineNumber:2157,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Mobile)','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:90,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('90','bubiblock-slider')},{value:120,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('120','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_b_block_slider_mobile,onChange:this.onChangeBubiblock_padding_b_block_slider_mobile,min:0,max:150,__self:this,__source:{fileName:_jsxFileName,lineNumber:2200,columnNumber:33}})),wp.element.createElement("h6",{id:'bg',class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:2245,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),bubiblock_background_color_block_slider&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:bubiblock_background_color_block_slider,__self:this,__source:{fileName:_jsxFileName,lineNumber:2247,columnNumber:33}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:2252,columnNumber:29}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:bubiblock_background_color_block_slider,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({bubiblock_background_color_block_slider:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2253,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity','bubiblock-slider'),beforeIcon:'hidden',afterIcon:'visibility',allowReset:true,resetFallbackValue:1,step:.1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:.2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.2','bubiblock-slider')},{value:.4,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.4','bubiblock-slider')},{value:.6,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.6','bubiblock-slider')},{value:.8,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.8','bubiblock-slider')},{value:1,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('1','bubiblock-slider')}],railColor:"#02abff",value:bubiopacityblock_slider,onChange:this.onChangeBubiopacityblock_slider,min:0,max:1,__self:this,__source:{fileName:_jsxFileName,lineNumber:2259,columnNumber:29}})),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:2305,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Carousel Touch','bubiblock-slider')),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:2306,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('This setting will only be visible in the Front-end!','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{checked:bubiblock_carousle_touch,onChange:this.onChangeBubiblock_carousle_touch,__self:this,__source:{fileName:_jsxFileName,lineNumber:2307,columnNumber:25}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Styles
,{icon:'admin-appearance',className:'bubiblock-variation',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Styles','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:2312,columnNumber:21}},wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:2318,columnNumber:21}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group',__self:this,__source:{fileName:_jsxFileName,lineNumber:2319,columnNumber:21}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:2322,columnNumber:25}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:2323,columnNumber:29}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:2324,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:2326,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2327,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2334,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2341,columnNumber:33}}))),df_height_slider_auto!=1&&wp.element.createElement(wp.element.Fragment,null,df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Fixed (Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Px unit","bubiblock-slider"),value:height_slider,onChange:this.onChangeHeight_slider,min:200,max:2000,__self:this,__source:{fileName:_jsxFileName,lineNumber:2353,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Fixed (Tablet)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Px unit","bubiblock-slider"),value:height_slider_table,onChange:this.onChangeHeight_slider_table,min:200,max:1800,__self:this,__source:{fileName:_jsxFileName,lineNumber:2363,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Fixed (Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Px unit","bubiblock-slider"),value:height_slider_mobile,onChange:this.onChangeHeight_slider_mobile,min:100,max:1500,__self:this,__source:{fileName:_jsxFileName,lineNumber:2373,columnNumber:37}})),df_resp=='desktop'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Adaptive Height Slider','bubiblock-slider'),checked:df_height_slider_auto,onChange:this.onChangeDf_height_slider_auto,__self:this,__source:{fileName:_jsxFileName,lineNumber:2386,columnNumber:29}}),df_height_slider_auto&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"],{status:"info",isDismissible:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:2392,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Important: if you set height auto you have to insert images of equal size! Do not use this function if you have background color slides!If you use video and images together we recommend using this function, the size for the images must be 1024x576 px','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Full width Background Slider','bubiblock-slider'),checked:bubiblock_full_slider,onChange:this.onChangeBubiblock_full_slider,__self:this,__source:{fileName:_jsxFileName,lineNumber:2399,columnNumber:29}}),bubiblock_full_slider&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"],{status:"info",isDismissible:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:2405,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Full Width Background Slider preview is not available in the editor, check the live site to see it in action. Alternatively, if your theme supports it, you can use the "Change Alignment" block from the Toolbar and select "Full Width".','bubiblock-slider')))),wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:2415,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group',__self:this,__source:{fileName:_jsxFileName,lineNumber:2416,columnNumber:25}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:2419,columnNumber:29}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:2420,columnNumber:33}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:2421,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:2423,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2424,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2431,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2438,columnNumber:37}}))),df_resp=='desktop'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Desktop)','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_slider,onChange:this.onChangeBubiblock_padding_slider,min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:2449,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Desktop)','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_b_slider,onChange:this.onChangeBubiblock_padding_b_slider,min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:2492,columnNumber:33}})),df_resp=='table'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Table)','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_table_slider,onChange:function onChange(val){return setAttributes({bubiblock_padding_table_slider:val});},min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:2539,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Table)','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_b_table_slider,onChange:function onChange(val){return setAttributes({bubiblock_padding_b_table_slider:val});},min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:2582,columnNumber:33}})),df_resp=='mobile'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Mobile)','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_mobile_slider,onChange:function onChange(val){return setAttributes({bubiblock_padding_mobile_slider:val});},min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:2629,columnNumber:34}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit(Mobile)','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_b_mobile_slider,onChange:function onChange(val){return setAttributes({bubiblock_padding_b_mobile_slider:val});},min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:2672,columnNumber:34}}))),wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:2718,columnNumber:26}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding Caption','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group',__self:this,__source:{fileName:_jsxFileName,lineNumber:2719,columnNumber:25}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:2722,columnNumber:29}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:2723,columnNumber:33}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:2724,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:2726,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2727,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2734,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2741,columnNumber:37}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left(Desktop)','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_caption,onChange:function onChange(val){return setAttributes({bubiblock_padding_caption:val});},min:-50,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:2751,columnNumber:33}}),df_resp=='table'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left(Table)','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_table_caption,onChange:function onChange(val){return setAttributes({bubiblock_padding_table_caption:val});},min:-50,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:2790,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Button(Table)','bubiblock-slider'),checked:bubiblock_display_button_table_caption,onChange:function onChange(val){return setAttributes({bubiblock_display_button_table_caption:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2826,columnNumber:33}})),df_resp=='mobile'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left(Mobile)','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_padding_mobile_caption,onChange:function onChange(val){return setAttributes({bubiblock_padding_mobile_caption:val});},min:-50,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:2835,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Button(Mobile)','bubiblock-slider'),checked:bubiblock_display_button_mobile_caption,onChange:function onChange(val){return setAttributes({bubiblock_display_button_mobile_caption:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2871,columnNumber:33}}))),wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:2879,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Radius Item','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_radius_slider,onChange:this.onChangeBubiblock_radius_slider,min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:2880,columnNumber:25}}),wp.element.createElement("h6",{id:'bg',class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:2924,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),bubiblock_background_color_slider&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:bubiblock_background_color_slider,__self:this,__source:{fileName:_jsxFileName,lineNumber:2926,columnNumber:29}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:2931,columnNumber:25}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:bubiblock_background_color_slider,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({bubiblock_background_color_slider:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2932,columnNumber:29}}))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Typography
,{icon:'editor-spellcheck',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:2939,columnNumber:21}},wp.element.createElement("div",{className:'bubi-mt-2 bubi-mb-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:2944,columnNumber:25}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable or disable Custom Typography','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('You can use the general typography of your site, or choose the BubiBlock typography.To see the result you need to refresh the page!','bubiblock-slider'),checked:bubiblock_typography_custom,onChange:function onChange(val){return setAttributes({bubiblock_typography_custom:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:2945,columnNumber:25}})),bubiblock_typography_custom&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TabPanel"],{className:"bubiblock-tab-panel",activeClass:"bubiblock-active-tab",orientation:"horizontal",initialTabName:"tab1",onSelect:function onSelect(className){return console.log(className);},tabs:[{name:'tab1',icon:'admin-site-alt',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title','bubiblock-slider'),className:'tab-one'},{name:'tab2',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Descritpion','bubiblock-slider'),className:'tab-two'},{name:'tab3',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button','bubiblock-slider'),className:'tab-three'}],__self:this,__source:{fileName:_jsxFileName,lineNumber:2953,columnNumber:25}},function(tab){return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"],{className:'bubi-tab-1 '+tab.name,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:2982,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Family","bubiblock-slider"),options:bubiOptionsFont,onChange:_this2.onChangeBubiblcok_fontfamily,value:bubiblcok_fontfamily,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:2985,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Weight","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Not all fonts support all weights!','bubiblocks-slider'),options:bubiOptionsWeight,onChange:_this2.onChangeBubiblcok_fontfamily_weight,value:bubiblcok_fontfamily_weight,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:2991,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Line Height','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:2,step:.5,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:.5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.5','bubiblock-slider')},{value:1,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('1','bubiblock-slider')},{value:1.5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('1.5','bubiblock-slider')},{value:2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('2','bubiblock-slider')},{value:2.5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('2.5','bubiblock-slider')},{value:3,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('3','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_line_height_title,onChange:function onChange(val){return setAttributes({bubiblock_line_height_title:val});},min:.5,max:3,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:2998,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"],{className:'bubi-tab-2 '+tab.name,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:3042,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Family","bubiblock-slider"),options:bubiOptionsFont,onChange:_this2.onChangeBubiblcok_fontfamily_descritpion,value:bubiblcok_fontfamily_descritpion,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:3045,columnNumber:38}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Weight","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Not all fonts support all weights!','bubiblocks-slider'),options:bubiOptionsWeight,onChange:_this2.onChangeBubiblcok_fontfamily_weight_description,value:bubiblcok_fontfamily_weight_description,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:3051,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Line Height','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:2,step:.5,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:.5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.5','bubiblock-slider')},{value:1,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('1','bubiblock-slider')},{value:1.5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('1.5','bubiblock-slider')},{value:2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('2','bubiblock-slider')},{value:2.5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('2.5','bubiblock-slider')},{value:3,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('3','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_line_height_info,onChange:function onChange(val){return setAttributes({bubiblock_line_height_info:val});},min:.5,max:3,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:3058,columnNumber:46}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"],{className:'bubi-tab-3 '+tab.name,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:3102,columnNumber:34}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Family","bubiblock-slider"),options:bubiOptionsFont,onChange:_this2.onChangeBubiblcok_fontfamily_button,value:bubiblcok_fontfamily_button,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:3105,columnNumber:38}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Weight","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Not all fonts support all weights!','bubiblocks-slider'),options:bubiOptionsWeight,onChange:_this2.onChangeBubiblcok_fontfamily_weight_button,value:bubiblcok_fontfamily_weight_button,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:3111,columnNumber:37}})));})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Settings
,{icon:'admin-generic',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Settings','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:3125,columnNumber:21}},wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3130,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Animation','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-width-three',__self:this,__source:{fileName:_jsxFileName,lineNumber:3131,columnNumber:25}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_effect_slider=='df-slider-slide',onClick:function onClick(){return setAttributes({df_effect_slider:'df-slider-slide'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3134,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slider','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_effect_slider=='carousel-fade',onClick:function onClick(){return setAttributes({df_effect_slider:'carousel-fade'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3140,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fade','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_effect_slider=='bubiblock-flip',onClick:function onClick(){return setAttributes({df_effect_slider:'bubiblock-flip'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3146,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Flip','bubiblock-slider')),df_effect_slider=='carousel-fade'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"],{status:"info",isDismissible:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:3153,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('With this effect you cannot view fixed content!','bubiblock-slider'))),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3161,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Autoplay','bubiblock-slider')),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3162,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('To see the result immediately, you need to refresh and reload the page!','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-width-two',__self:this,__source:{fileName:_jsxFileName,lineNumber:3163,columnNumber:25}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_interval_slider=='5000',onClick:function onClick(){return setAttributes({df_interval_slider:'5000'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3166,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_interval_slider=='0',onClick:function onClick(){return setAttributes({df_interval_slider:'0'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3172,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider'))),df_interval_slider=='5000'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3181,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pause','bubiblock-slider')),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3182,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('This setting will only be visible in the Front-end!','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-width-two',__self:this,__source:{fileName:_jsxFileName,lineNumber:3183,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_pause_slider=='hover',onClick:function onClick(){return setAttributes({df_pause_slider:'hover'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3186,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_pause_slider=='false',onClick:function onClick(){return setAttributes({df_pause_slider:'false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3192,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider'))))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Arrow Settings
,{icon:'arrow-right-alt2',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Arrow Settings','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:3202,columnNumber:21}},wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3207,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Arrows','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:3208,columnNumber:25}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:3211,columnNumber:29}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:3212,columnNumber:33}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:3213,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:3215,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',className:'df-resp-button',isSecondary:true,isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3216,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',className:'df-resp-button',isSecondary:true,isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3223,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',className:'df-resp-button',isSecondary:true,isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3230,columnNumber:37}}))),df_resp=='desktop'&&wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:3240,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_arrow_slider=='df-arrow-true',onClick:function onClick(){return setAttributes({df_arrow_slider:'df-arrow-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3241,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_arrow_slider=='df-arrow-false',onClick:function onClick(){return setAttributes({df_arrow_slider:'df-arrow-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3247,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider'))),df_resp=='table'&&df_arrow_slider=='df-arrow-true'&&wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:3256,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_arrow_slider_table=='df-arrow-table-true',onClick:function onClick(){return setAttributes({df_arrow_slider_table:'df-arrow-table-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3257,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_arrow_slider_table=='df-arrow-table-false',onClick:function onClick(){return setAttributes({df_arrow_slider_table:'df-arrow-table-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3263,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider'))),df_arrow_slider_table=='df-arrow-table-true'&&df_resp=='mobile'&&df_arrow_slider=='df-arrow-true'&&wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:3272,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_arrow_slider_mobile=='df-arrow-mobile-true',onClick:function onClick(){return setAttributes({df_arrow_slider_mobile:'df-arrow-mobile-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3273,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_arrow_slider_mobile=='df-arrow-mobile-false',onClick:function onClick(){return setAttributes({df_arrow_slider_mobile:'df-arrow-mobile-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3279,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))),df_arrow_slider=='df-arrow-true'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3291,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Arrow type','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-icon-group bubi-mb-2 bubi-width-five',__self:this,__source:{fileName:_jsxFileName,lineNumber:3292,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'arrow-right',isSecondary:true,isPrimary:df_arrow_slider_type=='bubi-arrow-right',onClick:function onClick(){return setAttributes({df_arrow_slider_type:'bubi-arrow-right'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3295,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'arrow-right-alt',isSecondary:true,isPrimary:df_arrow_slider_type=='bubi-arrow-right-alt',onClick:function onClick(){return setAttributes({df_arrow_slider_type:'bubi-arrow-right-alt'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3301,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'arrow-right-alt2',isSecondary:true,isPrimary:df_arrow_slider_type=='bubi-arrow-right-alt2',onClick:function onClick(){return setAttributes({df_arrow_slider_type:'bubi-arrow-right-alt2'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3307,columnNumber:33}})),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3314,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Position','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-icon-group bubi-mb-1 bubi-width-three',__self:this,__source:{fileName:_jsxFileName,lineNumber:3315,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubi_arrow_position=='arrowtop',onClick:function onClick(){return setAttributes({bubi_arrow_position:'arrowtop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3318,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubi_arrow_position=='arrowcenter',onClick:function onClick(){return setAttributes({bubi_arrow_position:'arrowcenter'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3324,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubi_arrow_position=='arrowbottom',onClick:function onClick(){return setAttributes({bubi_arrow_position:'arrowbottom'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3330,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom','bubiblock-slider'))),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3337,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_arrow&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_arrow,__self:this,__source:{fileName:_jsxFileName,lineNumber:3339,columnNumber:33}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:3344,columnNumber:29}},wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3345,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_arrow,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_arrow:newValue});},disableCustomColors:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:3346,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity','bubiblock-slider'),beforeIcon:'hidden',afterIcon:'visibility',allowReset:true,resetFallbackValue:.5,step:.1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:.2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.2','bubiblock-slider')},{value:.4,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.4','bubiblock-slider')},{value:.6,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.6','bubiblock-slider')},{value:.8,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.8','bubiblock-slider')},{value:1,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('1','bubiblock-slider')}],railColor:"#02abff",value:bubiopacityarrow,onChange:this.onChangeBubiopacityarrow,min:0,max:1,__self:this,__source:{fileName:_jsxFileName,lineNumber:3353,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity Hover','bubiblock-slider'),beforeIcon:'hidden',afterIcon:'visibility',allowReset:true,resetFallbackValue:1,step:.1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:.2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.2','bubiblock-slider')},{value:.4,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.4','bubiblock-slider')},{value:.6,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.6','bubiblock-slider')},{value:.8,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('.8','bubiblock-slider')},{value:1,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('1','bubiblock-slider')}],railColor:"#02abff",value:bubiopacityhoverarrow,onChange:this.onChangeBubiopacityhoverarrow,min:0,max:1,__self:this,__source:{fileName:_jsxFileName,lineNumber:3397,columnNumber:29}}),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3442,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Interspace','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-120,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-120','bubiblock-slider')},{value:-60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-60','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:120,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('120','bubiblock-slider')}],railColor:"#02abff",value:bubi_marginarrow,onChange:this.onChangeBubi_marginarrow,min:-120,max:120,__self:this,__source:{fileName:_jsxFileName,lineNumber:3443,columnNumber:29}}),wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3484,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group',__self:this,__source:{fileName:_jsxFileName,lineNumber:3485,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:3488,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:3489,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:3490,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:3492,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',className:'df-resp-button',isSecondary:true,isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3493,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',className:'df-resp-button',isSecondary:true,isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3500,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',className:'df-resp-button',isSecondary:true,isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3507,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Size(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),value:df_size_arrow,onChange:this.onChangeDf_size_arrow,min:1,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:3517,columnNumber:37}}),df_resp=='table'&&df_arrow_slider_table=='df-arrow-table-true'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Size(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),value:df_size_arrow_table,onChange:this.onChangeDf_size_arrow_table,min:1,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:3527,columnNumber:37}}),df_resp=='mobile'&&df_arrow_slider_table=='df-arrow-table-true'&&df_arrow_slider_mobile=='df-arrow-mobile-true'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Size(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),value:df_size_arrow_mobile,onChange:this.onChangeDf_size_arrow_mobile,min:1,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:3537,columnNumber:37}})))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Dot Settings
,{icon:'ellipsis',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dot Settings','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:3550,columnNumber:21}},wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3555,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Dots','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:3556,columnNumber:25}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:3559,columnNumber:29}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:3560,columnNumber:33}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:3561,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:3563,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3564,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3571,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3578,columnNumber:37}}))),df_resp=='desktop'&&wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:3588,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_dot_slider=='df-dot-true',onClick:function onClick(){return setAttributes({df_dot_slider:'df-dot-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3589,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_dot_slider=='df-dot-false',onClick:function onClick(){return setAttributes({df_dot_slider:'df-dot-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3595,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider'))),df_resp=='table'&&df_dot_slider=='df-dot-true'&&wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:3604,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_dot_slider_table=='df-dot-table-true',onClick:function onClick(){return setAttributes({df_dot_slider_table:'df-dot-table-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3605,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_dot_slider_table=='df-dot-table-false',onClick:function onClick(){return setAttributes({df_dot_slider_table:'df-dot-table-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3611,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider'))),df_dot_slider_table=='df-dot-table-true'&&df_resp=='mobile'&&df_dot_slider=='df-dot-true'&&wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:3620,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_dot_slider_mobile=='df-dot-mobile-true',onClick:function onClick(){return setAttributes({df_dot_slider_mobile:'df-dot-mobile-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3621,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_dot_slider_mobile=='df-dot-mobile-false',onClick:function onClick(){return setAttributes({df_dot_slider_mobile:'df-dot-mobile-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3627,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))),df_dot_slider=='df-dot-true'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3638,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dots type','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{options:[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Linear','bubiblock-slider'),value:'df-dot-linear'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Round','bubiblock-slider'),value:'df-dot-round'}],onChange:this.onChangeDf_dot_slider_type,value:df_dot_slider_type,__self:this,__source:{fileName:_jsxFileName,lineNumber:3639,columnNumber:33}}),wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3647,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Width","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),value:df_width_dot,onChange:this.onChangeDf_width_dot,min:1,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:3648,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),value:df_height_dot,onChange:this.onChangeDf_height_dot,min:1,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:3656,columnNumber:33}}),wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3664,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:10,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_bottom_dot,onChange:this.onChangeDf_bottom_dot,min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:3665,columnNumber:33}}),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:3709,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_dot&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_dot,__self:this,__source:{fileName:_jsxFileName,lineNumber:3711,columnNumber:37}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:3716,columnNumber:33}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_dot,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_dot:newValue});},disableCustomColors:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:3717,columnNumber:37}})))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Slider 1
,{icon:'format-image',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slides 1','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:3727,columnNumber:21}},wp.element.createElement("h6",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:3732,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background type','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-three bubibutton-icon",__self:this,__source:{fileName:_jsxFileName,lineNumber:3733,columnNumber:25}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:3734,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:3737,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_1=='df-slider-color-1',icon:"admin-appearance",onClick:function onClick(){return setAttributes({df_slider_chose_1:'df-slider-color-1'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3740,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:3747,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_1=='df-slider-image-1',icon:"format-image",onClick:function onClick(){return setAttributes({df_slider_chose_1:'df-slider-image-1'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3750,columnNumber:37}})))),df_slider_chose_1=='df-slider-image-1'&&wp.element.createElement(wp.element.Fragment,null,url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:url,className:'bubi-mt-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:3763,columnNumber:37}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:3764,columnNumber:56}})):wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"],{className:'bubi-mt-2 bubi-mb-2',icon:"format-image df-icon-img-upload",onSelect:this.onSelectImage,onSelectURL:this.onSelectURL,onError:this.onUploadError,accept:"image/*",allowedTypes:['image'],notices:noticeUI,__self:this,__source:{fileName:_jsxFileName,lineNumber:3767,columnNumber:37}}),url&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["MenuItem"],{icon:'trash',className:'df-remov-img',onClick:this.removeImage,__self:this,__source:{fileName:_jsxFileName,lineNumber:3780,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Image','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alt Text (Alternative Text)','bubiblock-slider'),value:alt,onChange:this.updateAlt,help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alternative text describes your image to people who cant see it. Add a short description with its key details.','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:3787,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Dispaly Size","bubiblock-slider"),options:[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),value:'none'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Containe','bubiblock-slider'),value:'contain'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cover','bubiblock-slider'),value:'cover'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fill','bubiblock-slider'),value:'fill'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Scale down','bubiblock-slider'),value:'scale-down'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Unset','bubiblock-slider'),value:'unset'}],onChange:this.onChangeDf_cover_img1,value:df_cover_img1,__self:this,__source:{fileName:_jsxFileName,lineNumber:3793,columnNumber:37}}),df_cover_img1=='none'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_img_1,onChange:this.onChangeDf_focalPoint_img_1,min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:3808,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_y_img_1,onChange:this.onChangeDf_focalPoint_y_img_1,min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:3852,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show mask','bubiblock-slider'),checked:df_mask_slider_1,onChange:this.onChangeDf_mask_slider_1,__self:this,__source:{fileName:_jsxFileName,lineNumber:3898,columnNumber:37}}),df_mask_slider_1&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"],{status:"info",isDismissible:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:3905,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('If you have set the border radius for the slider this control will not work well!','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:background_color_solid_mask_1,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({background_color_solid_mask_1:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3911,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity','bubiblock-slider'),beforeIcon:'hidden',afterIcon:'visibility',allowReset:true,resetFallbackValue:.4,step:.1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:0.2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('2','bubiblock-slider')},{value:0.4,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('4','bubiblock-slider')},{value:0.6,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('6','bubiblock-slider')},{value:0.8,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('8','bubiblock-slider')},{value:1.0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')}],railColor:"#02abff",value:df_opacity_mask_1,onChange:this.onChangeDf_opacity_mask_1,min:.0,max:1.0,__self:this,__source:{fileName:_jsxFileName,lineNumber:3916,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link Image','bubiblock-slider'),value:bubiblock_link_slider_1,onChange:function onChange(newValue){return setAttributes({bubiblock_link_slider_1:newValue});},type:"url",__self:this,__source:{fileName:_jsxFileName,lineNumber:3961,columnNumber:37}}),bubiblock_link_slider_1&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-mb-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:3968,columnNumber:41}},wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:3971,columnNumber:49}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new tab','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:3972,columnNumber:49}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_1=='_blank',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_1:'_blank'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3973,columnNumber:49}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_1=='',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_1:''});},__self:this,__source:{fileName:_jsxFileName,lineNumber:3979,columnNumber:49}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))),df_slider_chose_1=='df-slider-color-1'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:3994,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_slider_1&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_slider_1,__self:this,__source:{fileName:_jsxFileName,lineNumber:3996,columnNumber:33}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:4001,columnNumber:29}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_slider_1,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_slider_1:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4002,columnNumber:32}}))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Top','bubiblock-slider'),checked:df_enable_divide_1,onChange:this.onChangeDf_enable_divide_1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4010,columnNumber:25}}),df_enable_divide_1&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_1,className:'bubiblock-radio-image',onChange:function onChange(val){return setAttributes({divide_1:val});},options:bubiOptionsDivideTop,__self:this,__source:{fileName:_jsxFileName,lineNumber:4017,columnNumber:29}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:4024,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_1&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4026,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_1,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_1:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4031,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:4035,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:4038,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4039,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:4040,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4042,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4043,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4050,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4057,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_1,onChange:this.onChangeDf_height_divide_1,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:4067,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_1,onChange:this.onChangeDf_height_table_divide_1,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:4077,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_1,onChange:this.onChangeDf_height_mobile_divide_1,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:4087,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:3,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_1,onChange:this.onChangeBubiblock_dalay_divide_1,min:0,max:30,__self:this,__source:{fileName:_jsxFileName,lineNumber:4097,columnNumber:29}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Bottom','bubiblock-slider'),checked:df_enable_divide_bottom_1,onChange:this.onChangeDf_enable_divide_bottom_1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4147,columnNumber:26}}),df_enable_divide_bottom_1&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_bottom_1,className:'df-radio-control-divide-bottom',onChange:function onChange(val){return setAttributes({divide_bottom_1:val});},options:bubiOptionsDivideBottom,__self:this,__source:{fileName:_jsxFileName,lineNumber:4154,columnNumber:29}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:4161,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_bottom_1&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_bottom_1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4163,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_bottom_1,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_bottom_1:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4168,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:4172,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:4175,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4176,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:4177,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4179,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4180,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4187,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4194,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_bottom_1,onChange:this.onChangeDf_height_divide_bottom_1,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:4204,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_bottom_1,onChange:this.onChangeDf_height_table_divide_bottom_1,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:4214,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_bottom_1,onChange:this.onChangeDf_height_mobile_divide_bottom_1,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:4224,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:3,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_1_bottom,onChange:this.onChangeBubiblock_dalay_divide_1_bottom,min:0,max:30,__self:this,__source:{fileName:_jsxFileName,lineNumber:4234,columnNumber:29}})),title1&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:4286,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:4287,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:4290,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4291,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:4292,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4294,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4295,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4302,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4309,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:35,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_caption1,onChange:this.onChangeMargin_bottom_caption1,min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:4319,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:25,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_caption1,onChange:this.onChangeMargin_bottom_table_caption1,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:4361,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:15,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_caption1,onChange:this.onChangeMargin_bottom_mobile_caption1,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:4407,columnNumber:37}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{className:'bubiblock-slider-inspectorcontrols',value:fontsizetitle1,onChange:function onChange(val){return setAttributes({fontsizetitle1:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:4453,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle1table,onChange:function onChange(val){return setAttributes({fontsizetitle1table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:4468,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle1mobile,onChange:function onChange(val){return setAttributes({fontsizetitle1mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:4482,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_title1,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_title1:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4496,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:this.onChangeEffectcaption1,value:effectcaption1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4506,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:this.onChangeDf_speed_effectcaption1,value:df_speed_effectcaption1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4512,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:this.onChangeDf_delay_effectcaption1,value:df_delay_effectcaption1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4518,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:this.onChangeDf_repeat_effectcaption1,value:df_repeat_effectcaption1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4524,columnNumber:29}})),info1&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:4534,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Info','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:4535,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:4538,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4539,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:4540,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4542,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4543,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4550,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4557,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:40,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_info1,onChange:this.onChangeMargin_bottom_info1,min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:4567,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:30,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_info1,onChange:this.onChangeMargin_bottom_table_info1,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:4609,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:10,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_info1,onChange:this.onChangeMargin_bottom_mobile_info1,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:4655,columnNumber:37}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo1,onChange:function onChange(val){return setAttributes({fontsizeinfo1:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:4701,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo1table,onChange:function onChange(val){return setAttributes({fontsizeinfo1table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:4715,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo1mobile,onChange:function onChange(val){return setAttributes({fontsizeinfo1mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:4729,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_info1,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_info1:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4743,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:this.onChangeEffectinfo1,value:effectinfo1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4753,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:this.onChangeDf_speed_effectinfo1,value:df_speed_effectinfo1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4759,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:this.onChangeDf_delay_effectinfo1,value:df_delay_effectinfo1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4765,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:this.onChangeDf_repeat_effectinfo1,value:df_repeat_effectinfo1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4771,columnNumber:29}})),button1&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:4781,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:4782,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:4785,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4786,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:4787,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:4789,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4790,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4797,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4804,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_button1,onChange:this.onChangeMargin_bottom_button1,min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:4814,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_button1,onChange:this.onChangeMargin_bottom_table_button1,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:4856,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_button1,onChange:this.onChangeMargin_bottom_mobile_button1,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:4902,columnNumber:37}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton1,onChange:function onChange(val){return setAttributes({fontsizebutton1:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:4948,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton1table,onChange:function onChange(val){return setAttributes({fontsizebutton1table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:4961,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton1mobile,onChange:function onChange(val){return setAttributes({fontsizebutton1mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:4974,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_button1,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_button1:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:4987,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:this.onChangeEffectbutton1,value:effectbutton1,__self:this,__source:{fileName:_jsxFileName,lineNumber:4997,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:this.onChangeDf_speed_effectbutton1,value:df_speed_effectbutton1,__self:this,__source:{fileName:_jsxFileName,lineNumber:5003,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:this.onChangeDf_delay_effectbutton1,value:df_delay_effectbutton1,__self:this,__source:{fileName:_jsxFileName,lineNumber:5009,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:this.onChangeDf_repeat_effectbutton1,value:df_repeat_effectbutton1,__self:this,__source:{fileName:_jsxFileName,lineNumber:5015,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding top/bottom','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:8,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_link_button1,onChange:function onChange(val){return setAttributes({padding_link_button1:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:5021,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding left/right','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:20,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_right_link_button1,onChange:function onChange(val){return setAttributes({padding_right_link_button1:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:5065,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border solid','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),beforeIcon:'star-empty',afterIcon:'star-filled',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_size_link_button1,onChange:function onChange(val){return setAttributes({border_size_link_button1:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:5109,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_left_link_button1,onChange:function onChange(val){return setAttributes({border_radius_top_left_link_button1:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:5153,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_right_link_button1,onChange:function onChange(val){return setAttributes({border_radius_top_right_link_button1:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:5197,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_left_link_button1,onChange:function onChange(val){return setAttributes({border_radius_bottom_left_link_button1:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:5241,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_right_link_button1,onChange:function onChange(val){return setAttributes({border_radius_bottom_right_link_button1:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:5285,columnNumber:29}}),wp.element.createElement("h6",{id:'bg',class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:5329,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_transparent_link_button1=='df-trasparent-color-button1-false'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_link_button1&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_link_button1,__self:this,__source:{fileName:_jsxFileName,lineNumber:5333,columnNumber:37}})),df_background_color_hover_link_button1&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_hover_link_button1,__self:this,__source:{fileName:_jsxFileName,lineNumber:5340,columnNumber:33}})),df_background_color_transparent_link_button1=='df-trasparent-color-button1-false'&&wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:5346,columnNumber:33}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_link_button1,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_link_button1:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5347,columnNumber:37}})),wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:5354,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover','bubiblock-slider')),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:5355,columnNumber:29}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_hover_link_button1,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_hover_link_button1:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5356,columnNumber:33}})),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:5362,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_link_button1&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_link_button1,__self:this,__source:{fileName:_jsxFileName,lineNumber:5364,columnNumber:33}}),df_color_hover_link_button1&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_hover_link_button1,__self:this,__source:{fileName:_jsxFileName,lineNumber:5369,columnNumber:33}}),df_border_color_link_button1&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_border_color_link_button1,__self:this,__source:{fileName:_jsxFileName,lineNumber:5374,columnNumber:33}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:5379,columnNumber:29}},wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:5380,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_link_button1,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_link_button1:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5381,columnNumber:33}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:5386,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color hover','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_hover_link_button1,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_hover_link_button1:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5387,columnNumber:33}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:5392,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_border_color_link_button1,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_border_color_link_button1:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5393,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:5399,columnNumber:29}},wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:5402,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color transparent','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:5403,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button1=='df-trasparent-color-button1-true',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button1:'df-trasparent-color-button1-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5404,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button1=='df-trasparent-color-button1-false',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button1:'df-trasparent-color-button1-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5410,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Slider 2
,{icon:'format-image',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slides 2','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:5421,columnNumber:21}},wp.element.createElement("h6",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:5426,columnNumber:25}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background type','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-three bubibutton-icon",__self:this,__source:{fileName:_jsxFileName,lineNumber:5427,columnNumber:25}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:5428,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:5431,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_2=='df-slider-color-2',icon:"admin-appearance",onClick:function onClick(){return setAttributes({df_slider_chose_2:'df-slider-color-2'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5434,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:5441,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_2=='df-slider-image-2',icon:"format-image",onClick:function onClick(){return setAttributes({df_slider_chose_2:'df-slider-image-2'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5444,columnNumber:37}})))),df_slider_chose_2=='df-slider-image-2'&&wp.element.createElement(wp.element.Fragment,null,imageUrl_2?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:imageUrl_2,className:'bubi-mt-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:5457,columnNumber:37}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imageUrl_2)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:5458,columnNumber:63}})):wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"],{className:'bubi-mt-2 bubi-mb-2',icon:"format-image df-icon-img-upload",onSelect:function onSelect(media){setAttributes({imageAlt_2:media.alt,imageUrl_2:media.url});},onSelectURL:this.onSelectURL2,onError:this.onUploadError2,accept:"image/*",allowedTypes:['image'],notices:noticeUI2,__self:this,__source:{fileName:_jsxFileName,lineNumber:5461,columnNumber:37}}),imageUrl_2&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["MenuItem"],{icon:'trash',className:'df-remov-img',onClick:this.removeImage2,__self:this,__source:{fileName:_jsxFileName,lineNumber:5474,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Image','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alt Text (Alternative Text)','bubiblock-slider'),value:alt2,onChange:this.updateAlt2,help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alternative text describes your image to people who cant see it. Add a short description with its key details.','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:5481,columnNumber:37}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Dispaly Size","bubiblock-slider"),options:[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),value:'none'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Containe','bubiblock-slider'),value:'contain'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cover','bubiblock-slider'),value:'cover'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fill','bubiblock-slider'),value:'fill'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Scale down','bubiblock-slider'),value:'scale-down'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Unset','bubiblock-slider'),value:'unset'}],onChange:this.onChangeDf_cover_img2,value:df_cover_img2,__self:this,__source:{fileName:_jsxFileName,lineNumber:5487,columnNumber:37}}),df_cover_img2=='none'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_img_2,onChange:this.onChangeDf_focalPoint_img_2,min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:5502,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_y_img_2,onChange:this.onChangeDf_focalPoint_y_img_2,min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:5546,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show mask','bubiblock-slider'),checked:df_mask_slider_2,onChange:this.onChangeDf_mask_slider_2,__self:this,__source:{fileName:_jsxFileName,lineNumber:5592,columnNumber:37}}),df_mask_slider_2&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"],{status:"info",isDismissible:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:5599,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('If you have set the border radius for the slider this control will not work well!','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["__experimentalColorGradientControl"],{colorValue:background_color_solid_mask_2,gradientValue:background_color_gradient_mask_2,colors:bubiColors,gradients:bubiGradients,onColorChange:function onColorChange(newValue){return setAttributes({background_color_solid_mask_2:newValue});},onGradientChange:function onGradientChange(newValue){return setAttributes({background_color_gradient_mask_2:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5605,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity','bubiblock-slider'),beforeIcon:'hidden',afterIcon:'visibility',allowReset:true,resetFallbackValue:.4,step:.1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:0.2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('2','bubiblock-slider')},{value:0.4,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('4','bubiblock-slider')},{value:0.6,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('6','bubiblock-slider')},{value:0.8,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('8','bubiblock-slider')},{value:1.0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')}],railColor:"#02abff",value:df_opacity_mask_2,onChange:this.onChangeDf_opacity_mask_2,min:.0,max:1.0,__self:this,__source:{fileName:_jsxFileName,lineNumber:5613,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link Image','bubiblock-slider'),value:bubiblock_link_slider_2,onChange:function onChange(newValue){return setAttributes({bubiblock_link_slider_2:newValue});},type:"url",__self:this,__source:{fileName:_jsxFileName,lineNumber:5658,columnNumber:37}}),bubiblock_link_slider_2&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-mb-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:5665,columnNumber:41}},wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:5668,columnNumber:49}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new tab','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:5669,columnNumber:49}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_2=='_blank',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_2:'_blank'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5670,columnNumber:49}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_2=='',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_2:''});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5676,columnNumber:49}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))),df_slider_chose_2=='df-slider-color-2'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:5691,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_slider_2&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_slider_2,__self:this,__source:{fileName:_jsxFileName,lineNumber:5693,columnNumber:33}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:5698,columnNumber:29}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_slider_2,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_slider_2:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5699,columnNumber:33}}))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Top','bubiblock-slider'),checked:df_enable_divide_2,onChange:this.onChangeDf_enable_divide_2,__self:this,__source:{fileName:_jsxFileName,lineNumber:5707,columnNumber:25}}),df_enable_divide_2&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_2,className:'bubiblock-radio-image',onChange:function onChange(val){return setAttributes({divide_2:val});},options:bubiOptionsDivideTop,__self:this,__source:{fileName:_jsxFileName,lineNumber:5714,columnNumber:29}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:5721,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_2&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_2,__self:this,__source:{fileName:_jsxFileName,lineNumber:5723,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_2,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_2:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5728,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:5732,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:5735,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:5736,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:5737,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:5739,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5740,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5747,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5754,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_2,onChange:this.onChangeDf_height_divide_2,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:5764,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_2,onChange:this.onChangeDf_height_table_divide_2,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:5774,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_2,onChange:this.onChangeDf_height_mobile_divide_2,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:5784,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:2,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_2,onChange:this.onChangeBubiblock_dalay_divide_2,min:0,max:20,__self:this,__source:{fileName:_jsxFileName,lineNumber:5794,columnNumber:29}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Bottom','bubiblock-slider'),checked:df_enable_divide_bottom_2,onChange:this.onChangeDf_enable_divide_bottom_2,__self:this,__source:{fileName:_jsxFileName,lineNumber:5844,columnNumber:25}}),df_enable_divide_bottom_2&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_bottom_2,className:'df-radio-control-divide-bottom',onChange:function onChange(val){return setAttributes({divide_bottom_2:val});},options:bubiOptionsDivideBottom,__self:this,__source:{fileName:_jsxFileName,lineNumber:5851,columnNumber:29}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:5858,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_bottom_2&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_bottom_2,__self:this,__source:{fileName:_jsxFileName,lineNumber:5860,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_bottom_2,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_bottom_2:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5865,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:5869,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:5872,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:5873,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:5874,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:5876,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5877,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5884,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5891,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_bottom_2,onChange:this.onChangeDf_height_divide_bottom_2,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:5901,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_bottom_2,onChange:this.onChangeDf_height_table_divide_bottom_2,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:5911,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_bottom_2,onChange:this.onChangeDf_height_mobile_divide_bottom_2,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:5921,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:2,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_2_bottom,onChange:this.onChangeBubiblock_dalay_divide_2_bottom,min:0,max:20,__self:this,__source:{fileName:_jsxFileName,lineNumber:5931,columnNumber:29}})),title2&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:5983,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:5984,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:5987,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:5988,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:5989,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:5991,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5992,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:5999,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6006,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:25,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_caption2,onChange:this.onChangeMargin_bottom_caption2,min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:6016,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:25,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_caption2,onChange:this.onChangeMargin_bottom_table_caption2,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:6058,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:15,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_caption2,onChange:this.onChangeMargin_bottom_mobile_caption2,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:6104,columnNumber:37}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{className:'bubiblock-slider-inspectorcontrols',value:fontsizetitle2,onChange:function onChange(val){return setAttributes({fontsizetitle2:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:6150,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle2table,onChange:function onChange(val){return setAttributes({fontsizetitle2table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:6165,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle2mobile,onChange:function onChange(val){return setAttributes({fontsizetitle2mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:6179,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_title2,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_title2:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6193,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:this.onChangeEffectcaption2,value:effectcaption2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6203,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:this.onChangeDf_speed_effectcaption2,value:df_speed_effectcaption2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6209,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:this.onChangeDf_delay_effectcaption2,value:df_delay_effectcaption2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6215,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:this.onChangeDf_repeat_effectcaption2,value:df_repeat_effectcaption2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6221,columnNumber:29}})),info2&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:6231,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Info','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:6232,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:6235,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:6236,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:6237,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:6239,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6240,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6247,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6254,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:40,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_info2,onChange:this.onChangeMargin_bottom_info2,min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:6264,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:20,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_info2,onChange:this.onChangeMargin_bottom_table_info2,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:6306,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:10,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_info2,onChange:this.onChangeMargin_bottom_mobile_info2,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:6352,columnNumber:37}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo2,onChange:function onChange(val){return setAttributes({fontsizeinfo2:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:6398,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo2table,onChange:function onChange(val){return setAttributes({fontsizeinfo2table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:6412,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo2mobile,onChange:function onChange(val){return setAttributes({fontsizeinfo2mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:6426,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_info2,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_info2:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6440,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:this.onChangeEffectinfo2,value:effectinfo2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6450,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:this.onChangeDf_speed_effectinfo2,value:df_speed_effectinfo2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6456,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:this.onChangeDf_delay_effectinfo2,value:df_delay_effectinfo2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6462,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:this.onChangeDf_repeat_effectinfo2,value:df_repeat_effectinfo2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6468,columnNumber:29}})),button2&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:6478,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:6479,columnNumber:29}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:6482,columnNumber:33}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:6483,columnNumber:37}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:6484,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:6486,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6487,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6494,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6501,columnNumber:41}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_button2,onChange:this.onChangeMargin_bottom_button2,min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:6511,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_button2,onChange:this.onChangeMargin_bottom_table_button2,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:6553,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_button2,onChange:this.onChangeMargin_bottom_mobile_button2,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:6599,columnNumber:37}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton2,onChange:function onChange(val){return setAttributes({fontsizebutton2:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:6645,columnNumber:37}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton2table,onChange:function onChange(val){return setAttributes({fontsizebutton2table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:6658,columnNumber:37}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton2mobile,onChange:function onChange(val){return setAttributes({fontsizebutton2mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:6671,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_button2,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_button2:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:6684,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:this.onChangeEffectbutton2,value:effectbutton2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6694,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:this.onChangeDf_speed_effectbutton2,value:df_speed_effectbutton2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6700,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:this.onChangeDf_delay_effectbutton2,value:df_delay_effectbutton2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6706,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:this.onChangeDf_repeat_effectbutton2,value:df_repeat_effectbutton2,__self:this,__source:{fileName:_jsxFileName,lineNumber:6712,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding top/bottom','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:8,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_link_button2,onChange:function onChange(val){return setAttributes({padding_link_button2:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:6718,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding left/right','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:20,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_right_link_button2,onChange:function onChange(val){return setAttributes({padding_right_link_button2:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:6762,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border solid','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),beforeIcon:'star-empty',afterIcon:'star-filled',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_size_link_button2,onChange:function onChange(val){return setAttributes({border_size_link_button2:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:6806,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_left_link_button2,onChange:function onChange(val){return setAttributes({border_radius_top_left_link_button2:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:6850,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_right_link_button2,onChange:function onChange(val){return setAttributes({border_radius_top_right_link_button2:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:6894,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_left_link_button2,onChange:function onChange(val){return setAttributes({border_radius_bottom_left_link_button2:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:6938,columnNumber:29}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_right_link_button2,onChange:function onChange(val){return setAttributes({border_radius_bottom_right_link_button2:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:6982,columnNumber:29}}),wp.element.createElement("h6",{id:'bg',class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:7026,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_transparent_link_button2=='df-trasparent-color-button2-false'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_link_button2&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_link_button2,__self:this,__source:{fileName:_jsxFileName,lineNumber:7030,columnNumber:37}})),df_background_color_hover_link_button2&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_hover_link_button2,__self:this,__source:{fileName:_jsxFileName,lineNumber:7037,columnNumber:33}})),df_background_color_transparent_link_button2=='df-trasparent-color-button2-false'&&wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:7043,columnNumber:33}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_link_button2,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_link_button2:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7044,columnNumber:37}})),wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:7051,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover','bubiblock-slider')),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:7052,columnNumber:29}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_hover_link_button2,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_hover_link_button2:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7053,columnNumber:37}})),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:7059,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_link_button2&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_link_button2,__self:this,__source:{fileName:_jsxFileName,lineNumber:7061,columnNumber:33}}),df_color_hover_link_button2&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_hover_link_button2,__self:this,__source:{fileName:_jsxFileName,lineNumber:7066,columnNumber:33}}),df_border_color_link_button2&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_border_color_link_button2,__self:this,__source:{fileName:_jsxFileName,lineNumber:7071,columnNumber:33}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:7076,columnNumber:29}},wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:7077,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_link_button2,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_link_button2:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7078,columnNumber:33}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:7083,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color hover','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_hover_link_button2,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_hover_link_button2:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7084,columnNumber:33}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:7089,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_border_color_link_button2,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_border_color_link_button2:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7090,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:7096,columnNumber:29}},wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:7099,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color transparent','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:7100,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button2=='df-trasparent-color-button2-true',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button2:'df-trasparent-color-button2-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7101,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button2=='df-trasparent-color-button2-false',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button2:'df-trasparent-color-button2-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7107,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Panel"],{className:'bubiblock-add-slider',__self:this,__source:{fileName:_jsxFileName,lineNumber:7118,columnNumber:21}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add Slides','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Important: if you want to remove this slider make sure you are with the carousel on the first or second slider!','bubiblock-slider'),checked:bubiblock_add_slider_3,onChange:function onChange(val){return setAttributes({bubiblock_add_slider_3:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7121,columnNumber:25}})),bubiblock_add_slider_3&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Slider 3
,{icon:'format-image',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slides 3','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:7130,columnNumber:25}},wp.element.createElement("h6",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:7135,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background type','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-three bubibutton-icon",__self:this,__source:{fileName:_jsxFileName,lineNumber:7136,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:7137,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:7140,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_3=='df-slider-color-3',icon:"admin-appearance",onClick:function onClick(){return setAttributes({df_slider_chose_3:'df-slider-color-3'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7143,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:7150,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_3=='df-slider-image-3',icon:"format-image",onClick:function onClick(){return setAttributes({df_slider_chose_3:'df-slider-image-3'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7153,columnNumber:41}})))),df_slider_chose_3=='df-slider-image-3'&&wp.element.createElement(wp.element.Fragment,null,imageUrl_3?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:imageUrl_3,className:'bubi-mt-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:7166,columnNumber:41}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imageUrl_3)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:7167,columnNumber:67}})):wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"],{className:'bubi-mt-2 bubi-mb-2',icon:"format-image df-icon-img-upload",onSelect:function onSelect(media){setAttributes({imageAlt_3:media.alt,imageUrl_3:media.url});},onSelectURL:this.onSelectURL3,onError:this.onUploadError3,accept:"image/*",allowedTypes:['image'],notices:noticeUI3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7170,columnNumber:41}}),imageUrl_3&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["MenuItem"],{icon:'trash',className:'df-remov-img',onClick:this.removeImage3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7183,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Image','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alt Text (Alternative Text)','bubiblock-slider'),value:alt3,onChange:this.updateAlt3,help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alternative text describes your image to people who cant see it. Add a short description with its key details.','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:7190,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Dispaly Size","bubiblock-slider"),options:[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),value:'none'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Containe','bubiblock-slider'),value:'contain'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cover','bubiblock-slider'),value:'cover'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fill','bubiblock-slider'),value:'fill'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Scale down','bubiblock-slider'),value:'scale-down'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Unset','bubiblock-slider'),value:'unset'}],onChange:this.onChangeDf_cover_img3,value:df_cover_img3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7196,columnNumber:41}}),df_cover_img3=='none'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_img_3,onChange:this.onChangeDf_focalPoint_img_3,min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:7211,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_y_img_3,onChange:this.onChangeDf_focalPoint_y_img_3,min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:7255,columnNumber:45}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show mask','bubiblock-slider'),checked:df_mask_slider_3,onChange:this.onChangeDf_mask_slider_3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7301,columnNumber:41}}),df_mask_slider_3&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"],{status:"info",isDismissible:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:7308,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('If you have set the border radius for the slider this control will not work well!','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["__experimentalColorGradientControl"],{colorValue:background_color_solid_mask_3,gradientValue:background_color_gradient_mask_3,colors:bubiColors,gradients:bubiGradients,onColorChange:function onColorChange(newValue){return setAttributes({background_color_solid_mask_3:newValue});},onGradientChange:function onGradientChange(newValue){return setAttributes({background_color_gradient_mask_3:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7314,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity','bubiblock-slider'),beforeIcon:'hidden',afterIcon:'visibility',allowReset:true,resetFallbackValue:.4,step:.1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:0.2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('2','bubiblock-slider')},{value:0.4,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('4','bubiblock-slider')},{value:0.6,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('6','bubiblock-slider')},{value:0.8,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('8','bubiblock-slider')},{value:1.0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')}],railColor:"#02abff",value:df_opacity_mask_3,onChange:this.onChangeDf_opacity_mask_3,min:.0,max:1.0,__self:this,__source:{fileName:_jsxFileName,lineNumber:7322,columnNumber:45}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link Image','bubiblock-slider'),value:bubiblock_link_slider_3,onChange:function onChange(newValue){return setAttributes({bubiblock_link_slider_3:newValue});},type:"url",__self:this,__source:{fileName:_jsxFileName,lineNumber:7367,columnNumber:41}}),bubiblock_link_slider_3&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-mb-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:7374,columnNumber:45}},wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:7377,columnNumber:53}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new tab','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:7378,columnNumber:53}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_3=='_blank',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_3:'_blank'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7379,columnNumber:53}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_3=='',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_3:''});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7385,columnNumber:53}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))),df_slider_chose_3=='df-slider-color-3'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:7400,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_slider_3&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_slider_3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7402,columnNumber:37}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:7407,columnNumber:33}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_slider_3,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_slider_3:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7408,columnNumber:37}}))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Top','bubiblock-slider'),checked:df_enable_divide_3,onChange:this.onChangeDf_enable_divide_3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7416,columnNumber:29}}),df_enable_divide_3&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_3,className:'bubiblock-radio-image',onChange:function onChange(val){return setAttributes({divide_3:val});},options:bubiOptionsDivideTop,__self:this,__source:{fileName:_jsxFileName,lineNumber:7423,columnNumber:33}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:7430,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_3&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7432,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_3,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_3:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7437,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:7441,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:7444,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:7445,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:7446,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:7448,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7449,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7456,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7463,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_3,onChange:this.onChangeDf_height_divide_3,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:7473,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_3,onChange:this.onChangeDf_height_table_divide_3,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:7483,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_3,onChange:this.onChangeDf_height_mobile_divide_3,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:7493,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:3,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_3,onChange:this.onChangeBubiblock_dalay_divide_3,min:0,max:30,__self:this,__source:{fileName:_jsxFileName,lineNumber:7503,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Bottom','bubiblock-slider'),checked:df_enable_divide_bottom_3,onChange:this.onChangeDf_enable_divide_bottom_3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7553,columnNumber:29}}),df_enable_divide_bottom_3&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_bottom_3,className:'df-radio-control-divide-bottom',onChange:function onChange(val){return setAttributes({divide_bottom_3:val});},options:bubiOptionsDivideBottom,__self:this,__source:{fileName:_jsxFileName,lineNumber:7560,columnNumber:33}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:7567,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_bottom_3&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_bottom_3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7569,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_bottom_3,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_bottom_3:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7574,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:7578,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:7581,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:7582,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:7583,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:7585,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7586,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7593,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7600,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_bottom_3,onChange:this.onChangeDf_height_divide_bottom_3,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:7610,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_bottom_3,onChange:this.onChangeDf_height_table_divide_bottom_3,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:7620,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_bottom_3,onChange:this.onChangeDf_height_mobile_divide_bottom_3,min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:7630,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:3,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_3_bottom,onChange:this.onChangeBubiblock_dalay_divide_3_bottom,min:0,max:30,__self:this,__source:{fileName:_jsxFileName,lineNumber:7640,columnNumber:33}})),title3&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:7692,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:7693,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:7696,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:7697,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:7698,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:7700,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7701,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7708,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7715,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:35,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_caption3,onChange:this.onChangeMargin_bottom_caption3,min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:7725,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:25,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_caption3,onChange:this.onChangeMargin_bottom_table_caption3,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:7767,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:15,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_caption3,onChange:this.onChangeMargin_bottom_mobile_caption3,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:7813,columnNumber:41}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{className:'bubiblock-slider-inspectorcontrols',value:fontsizetitle3,onChange:function onChange(val){return setAttributes({fontsizetitle3:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:7859,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle3table,onChange:function onChange(val){return setAttributes({fontsizetitle3table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:7874,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle3mobile,onChange:function onChange(val){return setAttributes({fontsizetitle3mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:7888,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_title3,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_title3:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7902,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:this.onChangeEffectcaption3,value:effectcaption3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7912,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:this.onChangeDf_speed_effectcaption3,value:df_speed_effectcaption3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7918,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:this.onChangeDf_delay_effectcaption3,value:df_delay_effectcaption3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7924,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:this.onChangeDf_repeat_effectcaption3,value:df_repeat_effectcaption3,__self:this,__source:{fileName:_jsxFileName,lineNumber:7930,columnNumber:33}})),info3&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:7940,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Info','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:7941,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:7944,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:7945,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:7946,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:7948,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7949,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7956,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:7963,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:40,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_info3,onChange:this.onChangeMargin_bottom_info3,min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:7973,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:30,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_info3,onChange:this.onChangeMargin_bottom_table_info3,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:8015,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:10,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_info3,onChange:this.onChangeMargin_bottom_mobile_info3,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:8061,columnNumber:41}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo3,onChange:function onChange(val){return setAttributes({fontsizeinfo3:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:8107,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo3table,onChange:function onChange(val){return setAttributes({fontsizeinfo3table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:8121,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo3mobile,onChange:function onChange(val){return setAttributes({fontsizeinfo3mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:8135,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_info3,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_info3:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8149,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:this.onChangeEffectinfo3,value:effectinfo3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8159,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:this.onChangeDf_speed_effectinfo3,value:df_speed_effectinfo3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8165,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:this.onChangeDf_delay_effectinfo3,value:df_delay_effectinfo3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8171,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:this.onChangeDf_repeat_effectinfo3,value:df_repeat_effectinfo3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8177,columnNumber:33}})),button3&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:8187,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:8188,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:8191,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:8192,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:8193,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:8195,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8196,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8203,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8210,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_button3,onChange:this.onChangeMargin_bottom_button3,min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:8220,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_button3,onChange:this.onChangeMargin_bottom_table_button3,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:8262,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_button3,onChange:this.onChangeMargin_bottom_mobile_button3,min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:8308,columnNumber:41}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton3,onChange:function onChange(val){return setAttributes({fontsizebutton3:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:8354,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton3table,onChange:function onChange(val){return setAttributes({fontsizebutton3table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:8367,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton3mobile,onChange:function onChange(val){return setAttributes({fontsizebutton3mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:8380,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_button3,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_button3:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8393,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:this.onChangeEffectbutton3,value:effectbutton3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8403,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:this.onChangeDf_speed_effectbutton3,value:df_speed_effectbutton3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8409,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:this.onChangeDf_delay_effectbutton3,value:df_delay_effectbutton3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8415,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:this.onChangeDf_repeat_effectbutton3,value:df_repeat_effectbutton3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8421,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding top/bottom','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:8,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_link_button3,onChange:function onChange(val){return setAttributes({padding_link_button3:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:8427,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding left/right','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:20,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_right_link_button3,onChange:function onChange(val){return setAttributes({padding_right_link_button3:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:8471,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border solid','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),beforeIcon:'star-empty',afterIcon:'star-filled',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_size_link_button3,onChange:function onChange(val){return setAttributes({border_size_link_button3:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:8515,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_left_link_button3,onChange:function onChange(val){return setAttributes({border_radius_top_left_link_button3:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:8559,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_right_link_button3,onChange:function onChange(val){return setAttributes({border_radius_top_right_link_button3:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:8603,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_left_link_button3,onChange:function onChange(val){return setAttributes({border_radius_bottom_left_link_button3:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:8647,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_right_link_button3,onChange:function onChange(val){return setAttributes({border_radius_bottom_right_link_button3:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:8691,columnNumber:33}}),wp.element.createElement("h6",{id:'bg',class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:8735,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_transparent_link_button3=='df-trasparent-color-button3-false'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_link_button3&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_link_button3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8739,columnNumber:41}})),df_background_color_hover_link_button3&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_hover_link_button3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8746,columnNumber:37}})),df_background_color_transparent_link_button3=='df-trasparent-color-button3-false'&&wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:8752,columnNumber:37}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_link_button3,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_link_button3:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8753,columnNumber:41}})),wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:8760,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover','bubiblock-slider')),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:8761,columnNumber:33}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_hover_link_button3,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_hover_link_button3:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8762,columnNumber:37}})),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:8768,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_link_button3&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_link_button3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8770,columnNumber:37}}),df_color_hover_link_button3&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_hover_link_button3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8775,columnNumber:37}}),df_border_color_link_button3&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_border_color_link_button3,__self:this,__source:{fileName:_jsxFileName,lineNumber:8780,columnNumber:37}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:8785,columnNumber:33}},wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:8786,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_link_button3,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_link_button3:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8787,columnNumber:37}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:8792,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color hover','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_hover_link_button3,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_hover_link_button3:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8793,columnNumber:37}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:8798,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_border_color_link_button3,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_border_color_link_button3:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8799,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:8805,columnNumber:33}},wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:8808,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color transparent','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:8809,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button3=='df-trasparent-color-button3-true',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button3:'df-trasparent-color-button3-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8810,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button3=='df-trasparent-color-button3-false',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button3:'df-trasparent-color-button3-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8816,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Panel"],{className:'bubiblock-add-slider',__self:this,__source:{fileName:_jsxFileName,lineNumber:8827,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add Slides','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Important: if you want to remove this slider make sure you are with the carousel on the first or second slider!','bubiblock-slider'),checked:bubiblock_add_slider_4,onChange:function onChange(val){return setAttributes({bubiblock_add_slider_4:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8830,columnNumber:33}}))),bubiblock_add_slider_4&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Slider 4
,{icon:'format-image',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slides 4','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:8841,columnNumber:25}},wp.element.createElement("h6",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:8846,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background type','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-three bubibutton-icon",__self:this,__source:{fileName:_jsxFileName,lineNumber:8847,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:8848,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:8851,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_4=='df-slider-color-4',icon:"admin-appearance",onClick:function onClick(){return setAttributes({df_slider_chose_4:'df-slider-color-4'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8854,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:8861,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_4=='df-slider-image-4',icon:"format-image",onClick:function onClick(){return setAttributes({df_slider_chose_4:'df-slider-image-4'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:8864,columnNumber:41}})))),df_slider_chose_4=='df-slider-image-4'&&wp.element.createElement(wp.element.Fragment,null,imageUrl_4?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:imageUrl_4,className:'bubi-mt-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:8877,columnNumber:41}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imageUrl_4)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:8878,columnNumber:67}})):wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"],{className:'bubi-mt-2 bubi-mb-2',icon:"format-image df-icon-img-upload",onSelect:function onSelect(media){setAttributes({imageAlt_4:media.alt,imageUrl_4:media.url});},onSelectURL:this.onSelectURL4,onError:this.onUploadError4,accept:"image/*",allowedTypes:['image'],notices:noticeUI4,__self:this,__source:{fileName:_jsxFileName,lineNumber:8881,columnNumber:41}}),imageUrl_4&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["MenuItem"],{icon:'trash',className:'df-remov-img',onClick:this.removeImage4,__self:this,__source:{fileName:_jsxFileName,lineNumber:8894,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Image','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alt Text (Alternative Text)','bubiblock-slider'),value:alt4,onChange:this.updateAlt4,help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alternative text describes your image to people who cant see it. Add a short description with its key details.','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:8901,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Dispaly Size","bubiblock-slider"),options:[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),value:'none'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Containe','bubiblock-slider'),value:'contain'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cover','bubiblock-slider'),value:'cover'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fill','bubiblock-slider'),value:'fill'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Scale down','bubiblock-slider'),value:'scale-down'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Unset','bubiblock-slider'),value:'unset'}],onChange:function onChange(val){return setAttributes({df_cover_img4:val});},value:df_cover_img4,__self:this,__source:{fileName:_jsxFileName,lineNumber:8907,columnNumber:41}}),df_cover_img4=='none'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_img_4,onChange:function onChange(val){return setAttributes({df_focalPoint_img_4:val});},min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:8922,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_y_img_4,onChange:function onChange(val){return setAttributes({df_focalPoint_y_img_4:val});},min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:8966,columnNumber:45}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show mask','bubiblock-slider'),checked:df_mask_slider_4,onChange:function onChange(val){return setAttributes({df_mask_slider_4:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9012,columnNumber:41}}),df_mask_slider_4&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"],{status:"info",isDismissible:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:9019,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('If you have set the border radius for the slider this control will not work well!','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["__experimentalColorGradientControl"],{colorValue:background_color_solid_mask_4,gradientValue:background_color_gradient_mask_4,colors:bubiColors,gradients:bubiGradients,onColorChange:function onColorChange(newValue){return setAttributes({background_color_solid_mask_4:newValue});},onGradientChange:function onGradientChange(newValue){return setAttributes({background_color_gradient_mask_4:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9025,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity','bubiblock-slider'),beforeIcon:'hidden',afterIcon:'visibility',allowReset:true,resetFallbackValue:.4,step:.1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:0.2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('2','bubiblock-slider')},{value:0.4,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('4','bubiblock-slider')},{value:0.6,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('6','bubiblock-slider')},{value:0.8,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('8','bubiblock-slider')},{value:1.0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')}],railColor:"#02abff",value:df_opacity_mask_4,onChange:function onChange(val){return setAttributes({df_opacity_mask_4:val});},min:.0,max:1.0,__self:this,__source:{fileName:_jsxFileName,lineNumber:9033,columnNumber:45}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link Image','bubiblock-slider'),value:bubiblock_link_slider_4,onChange:function onChange(newValue){return setAttributes({bubiblock_link_slider_4:newValue});},type:"url",__self:this,__source:{fileName:_jsxFileName,lineNumber:9078,columnNumber:41}}),bubiblock_link_slider_4&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-mb-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:9085,columnNumber:45}},wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:9088,columnNumber:53}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new tab','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:9089,columnNumber:53}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_4=='_blank',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_4:'_blank'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9090,columnNumber:53}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_4=='',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_4:''});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9096,columnNumber:53}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))),df_slider_chose_4=='df-slider-color-4'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:9111,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_slider_4&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_slider_4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9113,columnNumber:37}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:9118,columnNumber:33}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_slider_4,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_slider_4:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9119,columnNumber:37}}))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Top','bubiblock-slider'),checked:df_enable_divide_4,onChange:function onChange(newValue){return setAttributes({df_enable_divide_4:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9127,columnNumber:29}}),df_enable_divide_4&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_4,className:'bubiblock-radio-image',onChange:function onChange(val){return setAttributes({divide_4:val});},options:bubiOptionsDivideTop,__self:this,__source:{fileName:_jsxFileName,lineNumber:9134,columnNumber:33}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:9141,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_4&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9143,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_4,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_4:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9148,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:9152,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:9155,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9156,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:9157,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9159,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9160,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9167,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9174,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_4,onChange:function onChange(val){return setAttributes({df_height_divide_4:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:9184,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_4,onChange:function onChange(val){return setAttributes({df_height_table_divide_4:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:9194,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_4,onChange:function onChange(val){return setAttributes({df_height_mobile_divide_4:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:9204,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:3,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_4,onChange:function onChange(val){return setAttributes({bubiblock_dalay_divide_4:val});},min:0,max:30,__self:this,__source:{fileName:_jsxFileName,lineNumber:9214,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Bottom','bubiblock-slider'),checked:df_enable_divide_bottom_4,onChange:function onChange(val){return setAttributes({df_enable_divide_bottom_4:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9264,columnNumber:29}}),df_enable_divide_bottom_4&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_bottom_4,className:'df-radio-control-divide-bottom',onChange:function onChange(val){return setAttributes({divide_bottom_4:val});},options:bubiOptionsDivideBottom,__self:this,__source:{fileName:_jsxFileName,lineNumber:9271,columnNumber:33}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:9278,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_bottom_4&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_bottom_4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9280,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_bottom_4,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_bottom_4:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9285,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:9289,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:9292,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9293,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:9294,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9296,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9297,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9304,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9311,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_bottom_4,onChange:function onChange(val){return setAttributes({df_height_divide_bottom_4:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:9321,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_bottom_4,onChange:function onChange(val){return setAttributes({df_height_table_divide_bottom_4:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:9331,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_bottom_4,onChange:function onChange(val){return setAttributes({df_height_mobile_divide_bottom_4:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:9341,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:3,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_4_bottom,onChange:function onChange(val){return setAttributes({bubiblock_dalay_divide_4_bottom:val});},min:0,max:30,__self:this,__source:{fileName:_jsxFileName,lineNumber:9351,columnNumber:33}})),title4&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:9403,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:9404,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:9407,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9408,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:9409,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9411,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9412,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9419,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9426,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:35,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_caption4,onChange:function onChange(val){return setAttributes({margin_bottom_caption4:val});},min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:9436,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:25,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_caption4,onChange:function onChange(val){return setAttributes({margin_bottom_table_caption4:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:9478,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:15,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_caption4,onChange:function onChange(val){return setAttributes({margin_bottom_mobile_caption4:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:9524,columnNumber:41}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{className:'bubiblock-slider-inspectorcontrols',value:fontsizetitle4,onChange:function onChange(val){return setAttributes({fontsizetitle4:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:9570,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle4table,onChange:function onChange(val){return setAttributes({fontsizetitle4table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:9585,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle4mobile,onChange:function onChange(val){return setAttributes({fontsizetitle4mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:9599,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_title4,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_title4:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9613,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:function onChange(val){return setAttributes({effectcaption4:val});},value:effectcaption4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9623,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:function onChange(val){return setAttributes({df_speed_effectcaption4:val});},value:df_speed_effectcaption4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9629,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:function onChange(val){return setAttributes({df_delay_effectcaption4:val});},value:df_delay_effectcaption4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9635,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:function onChange(val){return setAttributes({df_repeat_effectcaption4:val});},value:df_repeat_effectcaption4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9641,columnNumber:33}})),info4&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:9651,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Info','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:9652,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:9655,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9656,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:9657,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9659,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9660,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9667,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9674,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:40,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_info4,onChange:function onChange(val){return setAttributes({margin_bottom_info4:val});},min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:9684,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:30,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_info4,onChange:function onChange(val){return setAttributes({margin_bottom_table_info4:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:9726,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:10,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_info4,onChange:function onChange(val){return setAttributes({margin_bottom_mobile_info4:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:9772,columnNumber:41}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo4,onChange:function onChange(val){return setAttributes({fontsizeinfo4:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:9818,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo4table,onChange:function onChange(val){return setAttributes({fontsizeinfo4table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:9832,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo4mobile,onChange:function onChange(val){return setAttributes({fontsizeinfo4mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:9846,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_info4,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_info4:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9860,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:function onChange(val){return setAttributes({effectinfo4:val});},value:effectinfo4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9870,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:function onChange(val){return setAttributes({df_speed_effectinfo4:val});},value:df_speed_effectinfo4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9876,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:function onChange(val){return setAttributes({df_delay_effectinfo4:val});},value:df_delay_effectinfo4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9882,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:function onChange(val){return setAttributes({df_repeat_effectinfo4:val});},value:df_repeat_effectinfo4,__self:this,__source:{fileName:_jsxFileName,lineNumber:9888,columnNumber:33}})),button4&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:9898,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:9899,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:9902,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9903,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:9904,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:9906,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9907,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9914,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:9921,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_button4,onChange:function onChange(val){return setAttributes({margin_bottom_button4:val});},min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:9931,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_button4,onChange:function onChange(val){return setAttributes({margin_bottom_table_button4:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:9973,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_button4,onChange:function onChange(val){return setAttributes({margin_bottom_mobile_button4:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:10019,columnNumber:41}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton4,onChange:function onChange(val){return setAttributes({fontsizebutton4:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:10065,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton4table,onChange:function onChange(val){return setAttributes({fontsizebutton4table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:10078,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton4mobile,onChange:function onChange(val){return setAttributes({fontsizebutton4mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:10091,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_button4,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_button4:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10104,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:function onChange(val){return setAttributes({effectbutton4:val});},value:effectbutton4,__self:this,__source:{fileName:_jsxFileName,lineNumber:10114,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:function onChange(val){return setAttributes({df_speed_effectbutton4:val});},value:df_speed_effectbutton4,__self:this,__source:{fileName:_jsxFileName,lineNumber:10120,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:function onChange(val){return setAttributes({df_delay_effectbutton4:val});},value:df_delay_effectbutton4,__self:this,__source:{fileName:_jsxFileName,lineNumber:10126,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:function onChange(val){return setAttributes({df_repeat_effectbutton4:val});},value:df_repeat_effectbutton4,__self:this,__source:{fileName:_jsxFileName,lineNumber:10132,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding top/bottom','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:8,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_link_button4,onChange:function onChange(val){return setAttributes({padding_link_button4:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:10138,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding left/right','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:20,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_right_link_button4,onChange:function onChange(val){return setAttributes({padding_right_link_button4:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:10182,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border solid','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),beforeIcon:'star-empty',afterIcon:'star-filled',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_size_link_button4,onChange:function onChange(val){return setAttributes({border_size_link_button4:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:10226,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_left_link_button4,onChange:function onChange(val){return setAttributes({border_radius_top_left_link_button4:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:10270,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_right_link_button4,onChange:function onChange(val){return setAttributes({border_radius_top_right_link_button4:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:10314,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_left_link_button4,onChange:function onChange(val){return setAttributes({border_radius_bottom_left_link_button4:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:10358,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_right_link_button4,onChange:function onChange(val){return setAttributes({border_radius_bottom_right_link_button4:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:10402,columnNumber:33}}),wp.element.createElement("h6",{id:'bg',class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:10446,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_transparent_link_button4=='df-trasparent-color-button4-false'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_link_button4&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_link_button4,__self:this,__source:{fileName:_jsxFileName,lineNumber:10450,columnNumber:41}})),df_background_color_hover_link_button4&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_hover_link_button4,__self:this,__source:{fileName:_jsxFileName,lineNumber:10457,columnNumber:37}})),df_background_color_transparent_link_button4=='df-trasparent-color-button4-false'&&wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:10463,columnNumber:37}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_link_button4,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_link_button4:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10464,columnNumber:41}})),wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:10471,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover','bubiblock-slider')),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:10472,columnNumber:33}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_hover_link_button4,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_hover_link_button4:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10473,columnNumber:37}})),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:10479,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_link_button4&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_link_button4,__self:this,__source:{fileName:_jsxFileName,lineNumber:10481,columnNumber:37}}),df_color_hover_link_button4&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_hover_link_button4,__self:this,__source:{fileName:_jsxFileName,lineNumber:10486,columnNumber:37}}),df_border_color_link_button4&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_border_color_link_button4,__self:this,__source:{fileName:_jsxFileName,lineNumber:10491,columnNumber:37}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:10496,columnNumber:33}},wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:10497,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_link_button4,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_link_button4:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10498,columnNumber:37}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:10503,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color hover','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_hover_link_button4,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_hover_link_button4:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10504,columnNumber:37}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:10509,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_border_color_link_button4,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_border_color_link_button4:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10510,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:10516,columnNumber:33}},wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:10519,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color transparent','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:10520,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button4=='df-trasparent-color-button4-true',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button4:'df-trasparent-color-button4-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10521,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button4=='df-trasparent-color-button4-false',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button4:'df-trasparent-color-button4-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10527,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Panel"],{className:'bubiblock-add-slider',__self:this,__source:{fileName:_jsxFileName,lineNumber:10538,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add Slides','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Important: if you want to remove this slider make sure you are with the carousel on the first or second slider!','bubiblock-slider'),checked:bubiblock_add_slider_5,onChange:function onChange(val){return setAttributes({bubiblock_add_slider_5:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10541,columnNumber:33}}))),bubiblock_add_slider_5&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"]// Slider 5
,{icon:'format-image',title:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slides 5','bubiblock-slider'),initialOpen:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:10552,columnNumber:25}},wp.element.createElement("h6",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:10557,columnNumber:29}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background type','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-three bubibutton-icon",__self:this,__source:{fileName:_jsxFileName,lineNumber:10558,columnNumber:29}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:10559,columnNumber:33}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:10562,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_5=='df-slider-color-5',icon:"admin-appearance",onClick:function onClick(){return setAttributes({df_slider_chose_5:'df-slider-color-5'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10565,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],{text:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:10572,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isPrimary:df_slider_chose_5=='df-slider-image-5',icon:"format-image",onClick:function onClick(){return setAttributes({df_slider_chose_5:'df-slider-image-5'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10575,columnNumber:41}})))),df_slider_chose_5=='df-slider-image-5'&&wp.element.createElement(wp.element.Fragment,null,imageUrl_5?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:imageUrl_5,className:'bubi-mt-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:10588,columnNumber:41}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imageUrl_5)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:10589,columnNumber:67}})):wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"],{className:'bubi-mt-2 bubi-mb-2',icon:"format-image df-icon-img-upload",onSelect:function onSelect(media){setAttributes({imageAlt_5:media.alt,imageUrl_5:media.url});},onSelectURL:this.onSelectURL5,onError:this.onUploadError5,accept:"image/*",allowedTypes:['image'],notices:noticeUI5,__self:this,__source:{fileName:_jsxFileName,lineNumber:10592,columnNumber:41}}),imageUrl_5&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["MenuItem"],{icon:'trash',className:'df-remov-img',onClick:this.removeImage5,__self:this,__source:{fileName:_jsxFileName,lineNumber:10605,columnNumber:41}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Image','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alt Text (Alternative Text)','bubiblock-slider'),value:alt5,onChange:this.updateAlt5,help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alternative text describes your image to people who cant see it. Add a short description with its key details.','bubiblock-slider'),__self:this,__source:{fileName:_jsxFileName,lineNumber:10612,columnNumber:41}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Dispaly Size","bubiblock-slider"),options:[{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),value:'none'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Containe','bubiblock-slider'),value:'contain'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cover','bubiblock-slider'),value:'cover'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fill','bubiblock-slider'),value:'fill'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Scale down','bubiblock-slider'),value:'scale-down'},{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Unset','bubiblock-slider'),value:'unset'}],onChange:function onChange(val){return setAttributes({df_cover_img5:val});},value:df_cover_img5,__self:this,__source:{fileName:_jsxFileName,lineNumber:10618,columnNumber:41}}),df_cover_img5=='none'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_img_5,onChange:function onChange(val){return setAttributes({df_focalPoint_img_5:val});},min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:10633,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Position','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:50,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:60,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('60','bubiblock-slider')},{value:80,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('80','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')}],railColor:"#02abff",value:df_focalPoint_y_img_5,onChange:function onChange(val){return setAttributes({df_focalPoint_y_img_5:val});},min:0,max:100,__self:this,__source:{fileName:_jsxFileName,lineNumber:10677,columnNumber:45}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show mask','bubiblock-slider'),checked:df_mask_slider_5,onChange:function onChange(val){return setAttributes({df_mask_slider_5:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10723,columnNumber:41}}),df_mask_slider_5&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"],{status:"info",isDismissible:false,__self:this,__source:{fileName:_jsxFileName,lineNumber:10730,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('If you have set the border radius for the slider this control will not work well!','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["__experimentalColorGradientControl"],{colorValue:background_color_solid_mask_5,gradientValue:background_color_gradient_mask_5,colors:bubiColors,gradients:bubiGradients,onColorChange:function onColorChange(newValue){return setAttributes({background_color_solid_mask_5:newValue});},onGradientChange:function onGradientChange(newValue){return setAttributes({background_color_gradient_mask_5:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10736,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity','bubiblock-slider'),beforeIcon:'hidden',afterIcon:'visibility',allowReset:true,resetFallbackValue:.4,step:.1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:0.2,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('2','bubiblock-slider')},{value:0.4,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('4','bubiblock-slider')},{value:0.6,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('6','bubiblock-slider')},{value:0.8,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('8','bubiblock-slider')},{value:1.0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')}],railColor:"#02abff",value:df_opacity_mask_5,onChange:function onChange(val){return setAttributes({df_opacity_mask_5:val});},min:.0,max:1.0,__self:this,__source:{fileName:_jsxFileName,lineNumber:10744,columnNumber:45}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link Image','bubiblock-slider'),value:bubiblock_link_slider_5,onChange:function onChange(newValue){return setAttributes({bubiblock_link_slider_5:newValue});},type:"url",__self:this,__source:{fileName:_jsxFileName,lineNumber:10789,columnNumber:41}}),bubiblock_link_slider_5&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin bubi-mb-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:10796,columnNumber:45}},wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:10799,columnNumber:53}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new tab','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:10800,columnNumber:53}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_5=='_blank',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_5:'_blank'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10801,columnNumber:53}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:bubiblock_link_tab_slider_5=='',onClick:function onClick(){return setAttributes({bubiblock_link_tab_slider_5:''});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10807,columnNumber:53}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))),df_slider_chose_5=='df-slider-color-5'&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:10822,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_slider_5&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_slider_5,__self:this,__source:{fileName:_jsxFileName,lineNumber:10824,columnNumber:37}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:10829,columnNumber:33}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_slider_5,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_slider_5:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10830,columnNumber:37}}))),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Top','bubiblock-slider'),checked:df_enable_divide_5,onChange:function onChange(newValue){return setAttributes({df_enable_divide_5:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10838,columnNumber:29}}),df_enable_divide_5&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_5,className:'bubiblock-radio-image',onChange:function onChange(val){return setAttributes({divide_5:val});},options:bubiOptionsDivideTop,__self:this,__source:{fileName:_jsxFileName,lineNumber:10845,columnNumber:33}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:10852,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_5&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_5,__self:this,__source:{fileName:_jsxFileName,lineNumber:10854,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_5,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_5:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10859,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:10863,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:10866,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:10867,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:10868,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:10870,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10871,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10878,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10885,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_5,onChange:function onChange(val){return setAttributes({df_height_divide_5:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:10895,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_5,onChange:function onChange(val){return setAttributes({df_height_table_divide_5:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:10905,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_5,onChange:function onChange(val){return setAttributes({df_height_mobile_divide_5:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:10915,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:3,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_5,onChange:function onChange(val){return setAttributes({bubiblock_dalay_divide_5:val});},min:0,max:30,__self:this,__source:{fileName:_jsxFileName,lineNumber:10925,columnNumber:33}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dividers Bottom','bubiblock-slider'),checked:df_enable_divide_bottom_5,onChange:function onChange(val){return setAttributes({df_enable_divide_bottom_5:val});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10975,columnNumber:29}}),df_enable_divide_bottom_5&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','df-sidebar-gutenberg'),selected:divide_bottom_5,className:'df-radio-control-divide-bottom',onChange:function onChange(val){return setAttributes({divide_bottom_5:val});},options:bubiOptionsDivideBottom,__self:this,__source:{fileName:_jsxFileName,lineNumber:10982,columnNumber:33}}),wp.element.createElement("h6",{className:"df-inspector bubi-not-background",__self:this,__source:{fileName:_jsxFileName,lineNumber:10989,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_divide_bottom_5&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_divide_bottom_5,__self:this,__source:{fileName:_jsxFileName,lineNumber:10991,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"],{color:df_color_divide_bottom_5,onChangeComplete:function onChangeComplete(newval){return setAttributes({df_color_divide_bottom_5:'rgba('+newval.rgb.r+', '+newval.rgb.g+', '+newval.rgb.b+', '+newval.rgb.a+')'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:10996,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:11000,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:11003,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:11004,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:11005,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:11007,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11008,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11015,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11022,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Desktop)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_divide_bottom_5,onChange:function onChange(val){return setAttributes({df_height_divide_bottom_5:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:11032,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Table)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_table_divide_bottom_5,onChange:function onChange(val){return setAttributes({df_height_table_divide_bottom_5:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:11042,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Height(Mobile)","bubiblock-slider"),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),value:df_height_mobile_divide_bottom_5,onChange:function onChange(val){return setAttributes({df_height_mobile_divide_bottom_5:val});},min:20,max:1000,__self:this,__source:{fileName:_jsxFileName,lineNumber:11052,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Delayed appearance','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S Unit. In the Safari Browser this transition is not supported!','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:3,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:5,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('5','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:15,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('15','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:25,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('25','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')}],railColor:"#02abff",value:bubiblock_dalay_divide_5_bottom,onChange:function onChange(val){return setAttributes({bubiblock_dalay_divide_5_bottom:val});},min:0,max:30,__self:this,__source:{fileName:_jsxFileName,lineNumber:11062,columnNumber:33}})),title5&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:11114,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:11115,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:11118,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:11119,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:11120,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:11122,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11123,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11130,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11137,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:35,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_caption5,onChange:function onChange(val){return setAttributes({margin_bottom_caption5:val});},min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:11147,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:25,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_caption5,onChange:function onChange(val){return setAttributes({margin_bottom_table_caption5:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:11189,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:15,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_caption5,onChange:function onChange(val){return setAttributes({margin_bottom_mobile_caption5:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:11235,columnNumber:41}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{className:'bubiblock-slider-inspectorcontrols',value:fontsizetitle5,onChange:function onChange(val){return setAttributes({fontsizetitle5:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:11281,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle5table,onChange:function onChange(val){return setAttributes({fontsizetitle5table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:11296,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizetitle5mobile,onChange:function onChange(val){return setAttributes({fontsizetitle5mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:22},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:52},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:82}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:11310,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_title5,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_title5:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11324,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:function onChange(val){return setAttributes({effectcaption5:val});},value:effectcaption5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11334,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:function onChange(val){return setAttributes({df_speed_effectcaption5:val});},value:df_speed_effectcaption5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11340,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:function onChange(val){return setAttributes({df_delay_effectcaption5:val});},value:df_delay_effectcaption5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11346,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:function onChange(val){return setAttributes({df_repeat_effectcaption5:val});},value:df_repeat_effectcaption5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11352,columnNumber:33}})),info5&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:11362,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Info','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:11363,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:11366,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:11367,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:11368,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:11370,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11371,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11378,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11385,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:40,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_info5,onChange:function onChange(val){return setAttributes({margin_bottom_info5:val});},min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:11395,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:30,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_info5,onChange:function onChange(val){return setAttributes({margin_bottom_table_info5:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:11437,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:10,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_info5,onChange:function onChange(val){return setAttributes({margin_bottom_mobile_info5:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:11483,columnNumber:41}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo5,onChange:function onChange(val){return setAttributes({fontsizeinfo5:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:11529,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo5table,onChange:function onChange(val){return setAttributes({fontsizeinfo5table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:11543,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizeinfo5mobile,onChange:function onChange(val){return setAttributes({fontsizeinfo5mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None','bubiblock-slider'),slug:'none',size:0},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:11557,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_info5,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_info5:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11571,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:function onChange(val){return setAttributes({effectinfo5:val});},value:effectinfo5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11581,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:function onChange(val){return setAttributes({df_speed_effectinfo5:val});},value:df_speed_effectinfo5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11587,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:function onChange(val){return setAttributes({df_delay_effectinfo5:val});},value:df_delay_effectinfo5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11593,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:function onChange(val){return setAttributes({df_repeat_effectinfo5:val});},value:df_repeat_effectinfo5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11599,columnNumber:33}})),button5&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h6",{class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:11609,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:11610,columnNumber:33}},wp.element.createElement("div",{class:"df-group-button-resp",__self:this,__source:{fileName:_jsxFileName,lineNumber:11613,columnNumber:37}},wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:11614,columnNumber:41}},wp.element.createElement("h6",{__self:this,__source:{fileName:_jsxFileName,lineNumber:11615,columnNumber:45}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose','bubiblock-slider'))),wp.element.createElement("div",{class:"bubi-col-6",__self:this,__source:{fileName:_jsxFileName,lineNumber:11617,columnNumber:41}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'laptop',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='desktop',onClick:function onClick(){return setAttributes({df_resp:'desktop'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11618,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'tablet',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='table',onClick:function onClick(){return setAttributes({df_resp:'table'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11625,columnNumber:45}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{icon:'smartphone',isSecondary:true,className:'df-resp-button',isPrimary:df_resp=='mobile',onClick:function onClick(){return setAttributes({df_resp:'mobile'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11632,columnNumber:45}}))),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-100','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')},{value:300,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('300','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_button5,onChange:function onChange(val){return setAttributes({margin_bottom_button5:val});},min:-100,max:300,__self:this,__source:{fileName:_jsxFileName,lineNumber:11642,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_table_button5,onChange:function onChange(val){return setAttributes({margin_bottom_table_button5:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:11684,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:5,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:-50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('-50','bubiblock-slider')},{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')},{value:100,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('100','bubiblock-slider')},{value:150,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('150','bubiblock-slider')},{value:200,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('200','bubiblock-slider')}],railColor:"#02abff",value:margin_bottom_mobile_button5,onChange:function onChange(val){return setAttributes({margin_bottom_mobile_button5:val});},min:-50,max:200,__self:this,__source:{fileName:_jsxFileName,lineNumber:11730,columnNumber:41}}),df_resp=='desktop'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton5,onChange:function onChange(val){return setAttributes({fontsizebutton5:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:11776,columnNumber:41}}),df_resp=='table'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton5table,onChange:function onChange(val){return setAttributes({fontsizebutton5table:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:11789,columnNumber:41}}),df_resp=='mobile'&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"],{value:fontsizebutton5mobile,onChange:function onChange(val){return setAttributes({fontsizebutton5mobile:val});},fontSizes:[{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small','bubiblock-slider'),slug:'small',size:18},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium','bubiblock-slider'),slug:'medium',size:24},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large','bubiblock-slider'),slug:'large',size:32},{name:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Big','bubiblock-slider'),slug:'large',size:52}],withSlider:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:11802,columnNumber:41}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Align','bubiblock-slider'),selected:alignment_button5,options:[{label:'Left',value:'left'},{label:'Center',value:'center'},{label:'Right',value:'right'}],onChange:function onChange(newAlign){return setAttributes({alignment_button5:newAlign});},__self:this,__source:{fileName:_jsxFileName,lineNumber:11815,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect","bubiblock-slider"),options:bubiOptionsEffectAnimate,onChange:function onChange(val){return setAttributes({effectbutton5:val});},value:effectbutton5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11825,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect speed","bubiblock-slider"),options:bubiOptionEffectSpeed,onChange:function onChange(val){return setAttributes({df_speed_effectbutton5:val});},value:df_speed_effectbutton5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11831,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect delay","bubiblock-slider"),options:bubiOptionEffectDalay,onChange:function onChange(val){return setAttributes({df_delay_effectbutton5:val});},value:df_delay_effectbutton5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11837,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Effect repeat","bubiblock-slider"),options:bubiOptionEffectRepeat,onChange:function onChange(val){return setAttributes({df_repeat_effectbutton5:val});},value:df_repeat_effectbutton5,__self:this,__source:{fileName:_jsxFileName,lineNumber:11843,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding top/bottom','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-down-alt',afterIcon:'arrow-up-alt',allowReset:true,resetFallbackValue:8,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_link_button5,onChange:function onChange(val){return setAttributes({padding_link_button5:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:11849,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding left/right','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('px Unit','bubiblock-slider'),beforeIcon:'arrow-left-alt',afterIcon:'arrow-right-alt',allowReset:true,resetFallbackValue:20,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:padding_right_link_button5,onChange:function onChange(val){return setAttributes({padding_right_link_button5:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:11893,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border solid','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Px Unit','bubiblock-slider'),beforeIcon:'star-empty',afterIcon:'star-filled',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_size_link_button5,onChange:function onChange(val){return setAttributes({border_size_link_button5:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:11937,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_left_link_button5,onChange:function onChange(val){return setAttributes({border_radius_top_left_link_button5:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:11981,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border top right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_top_right_link_button5,onChange:function onChange(val){return setAttributes({border_radius_top_right_link_button5:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:12025,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom left radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_left_link_button5,onChange:function onChange(val){return setAttributes({border_radius_bottom_left_link_button5:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:12069,columnNumber:33}}),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"],{label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border bottom right radius','bubiblock-slider'),help:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('% Unit','bubiblock-slider'),beforeIcon:'fullscreen-alt',afterIcon:'fullscreen-exit-alt',allowReset:true,resetFallbackValue:0,step:1,withInputField:false,separatorType:"none",trackColor:"#007cba",isShiftStepEnabled:true,marks:[{value:0,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('0','bubiblock-slider')},{value:10,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('10','bubiblock-slider')},{value:20,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('20','bubiblock-slider')},{value:30,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('30','bubiblock-slider')},{value:40,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('40','bubiblock-slider')},{value:50,label:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('50','bubiblock-slider')}],railColor:"#02abff",value:border_radius_bottom_right_link_button5,onChange:function onChange(val){return setAttributes({border_radius_bottom_right_link_button5:val});},min:0,max:50,__self:this,__source:{fileName:_jsxFileName,lineNumber:12113,columnNumber:33}}),wp.element.createElement("h6",{id:'bg',class:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:12157,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color','bubiblock-slider'),df_background_color_transparent_link_button5=='df-trasparent-color-button5-false'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_link_button5&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_link_button5,__self:this,__source:{fileName:_jsxFileName,lineNumber:12161,columnNumber:41}})),df_background_color_hover_link_button5&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_background_color_hover_link_button5,__self:this,__source:{fileName:_jsxFileName,lineNumber:12168,columnNumber:37}})),df_background_color_transparent_link_button5=='df-trasparent-color-button5-false'&&wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:12174,columnNumber:37}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_link_button5,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_link_button5:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:12175,columnNumber:41}})),wp.element.createElement("p",{className:"df-inspector bubi-mt-1",__self:this,__source:{fileName:_jsxFileName,lineNumber:12182,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover','bubiblock-slider')),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:12183,columnNumber:33}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_background_color_hover_link_button5,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_background_color_hover_link_button5:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:12184,columnNumber:37}})),wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:12190,columnNumber:33}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider'),df_color_link_button5&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_link_button5,__self:this,__source:{fileName:_jsxFileName,lineNumber:12192,columnNumber:37}}),df_color_hover_link_button5&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_color_hover_link_button5,__self:this,__source:{fileName:_jsxFileName,lineNumber:12197,columnNumber:37}}),df_border_color_link_button5&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorIndicator"],{colorValue:df_border_color_link_button5,__self:this,__source:{fileName:_jsxFileName,lineNumber:12202,columnNumber:37}})),wp.element.createElement("div",{class:'legend-color-none',__self:this,__source:{fileName:_jsxFileName,lineNumber:12207,columnNumber:33}},wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:12208,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_link_button5,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_link_button5:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:12209,columnNumber:37}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:12214,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color hover','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_color_hover_link_button5,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_color_hover_link_button5:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:12215,columnNumber:37}}),wp.element.createElement("p",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:12220,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color','bubiblock-slider')),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPaletteControl"],{value:df_border_color_link_button5,colors:bubiColors,onChange:function onChange(newValue){return setAttributes({df_border_color_link_button5:newValue});},__self:this,__source:{fileName:_jsxFileName,lineNumber:12221,columnNumber:37}})),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],{className:'df-button-group bubiblock-no-margin',__self:this,__source:{fileName:_jsxFileName,lineNumber:12227,columnNumber:33}},wp.element.createElement("h6",{className:"df-inspector",__self:this,__source:{fileName:_jsxFileName,lineNumber:12230,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color transparent','bubiblock-slider')),wp.element.createElement("div",{class:"bubi-width-two",__self:this,__source:{fileName:_jsxFileName,lineNumber:12231,columnNumber:37}},wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button5=='df-trasparent-color-button5-true',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button5:'df-trasparent-color-button5-true'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:12232,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('True','bubiblock-slider')),wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"],{isSecondary:true,isPrimary:df_background_color_transparent_link_button5=='df-trasparent-color-button5-false',onClick:function onClick(){return setAttributes({df_background_color_transparent_link_button5:'df-trasparent-color-button5-false'});},__self:this,__source:{fileName:_jsxFileName,lineNumber:12238,columnNumber:37}},Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('False','bubiblock-slider')))))))),wp.element.createElement("div",{id:'carouselDFControlslider'+bubiblock_id_slider,className:className+' df_height_carousel_block carousel slide caption-animate touch'+bubiblock_carousle_touch+' '+df_effect_slider+' '+df_resp+' '+df_pause_slider,"data-ride":"carousel","data-interval":df_interval_slider,style:{background:bubiblock_background_color_slider,backgroundImage:bubiblock_background_gradient_slider},__self:this,__source:{fileName:_jsxFileName,lineNumber:12253,columnNumber:17}},wp.element.createElement("ol",{className:df_dot_slider+' '+df_dot_slider_table+' '+df_dot_slider_mobile+' carousel-indicators',style:{bottom:df_bottom_dot},__self:this,__source:{fileName:_jsxFileName,lineNumber:12254,columnNumber:21}},wp.element.createElement("li",{"data-target":'#carouselDFControlslider'+bubiblock_id_slider,"data-slide-to":"0",className:'active '+df_dot_slider_type,style:{maxWidth:df_width_dot+'px',height:df_height_dot+'px',backgroundColor:df_color_dot},onclick:"move()",__self:this,__source:{fileName:_jsxFileName,lineNumber:12255,columnNumber:25}}),wp.element.createElement("li",{"data-target":'#carouselDFControlslider'+bubiblock_id_slider,"data-slide-to":"1",className:df_dot_slider_type,style:{maxWidth:df_width_dot+'px',height:df_height_dot+'px',backgroundColor:df_color_dot},__self:this,__source:{fileName:_jsxFileName,lineNumber:12256,columnNumber:25}}),bubiblock_add_slider_3&&wp.element.createElement("li",{"data-target":'#carouselDFControlslider'+bubiblock_id_slider,"data-slide-to":"2",className:df_dot_slider_type,style:{maxWidth:df_width_dot+'px',height:df_height_dot+'px',backgroundColor:df_color_dot},__self:this,__source:{fileName:_jsxFileName,lineNumber:12258,columnNumber:29}}),bubiblock_add_slider_4&&wp.element.createElement("li",{"data-target":'#carouselDFControlslider'+bubiblock_id_slider,"data-slide-to":"3",className:df_dot_slider_type,style:{maxWidth:df_width_dot+'px',height:df_height_dot+'px',backgroundColor:df_color_dot},__self:this,__source:{fileName:_jsxFileName,lineNumber:12261,columnNumber:29}}),bubiblock_add_slider_5&&wp.element.createElement("li",{"data-target":'#carouselDFControlslider'+bubiblock_id_slider,"data-slide-to":"4",className:df_dot_slider_type,style:{maxWidth:df_width_dot+'px',height:df_height_dot+'px',backgroundColor:df_color_dot},__self:this,__source:{fileName:_jsxFileName,lineNumber:12264,columnNumber:29}})),wp.element.createElement("div",{className:'carousel-inner',__self:this,__source:{fileName:_jsxFileName,lineNumber:12267,columnNumber:21}},bubi_block_content_slider=='bubiblock-block-slider'==!(bubi_block_content_slider=='bubiblock-blockcontent-slider')&&wp.element.createElement("div",{className:df_resp+' bubiblock-block',style:{backgroundColor:bubiblock_background_color_block_slider,opacity:bubiopacityblock_slider},__self:this,__source:{fileName:_jsxFileName,lineNumber:12269,columnNumber:29}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:12270,columnNumber:33}})),wp.element.createElement("div",{className:'carousel-item '+df_effect_slider+' '+bubiblock_id_slider+' active ',__self:this,__source:{fileName:_jsxFileName,lineNumber:12273,columnNumber:25}},df_enable_divide_1&&wp.element.createElement("div",{className:'df-divide-1',style:{color:df_color_divide_1},__self:this,__source:{fileName:_jsxFileName,lineNumber:12275,columnNumber:33}},divide_1=='svg-1'&&wp.element.createElement("svg",{className:'df-flip',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12277,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12277,columnNumber:145}})),divide_1=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12280,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12280,columnNumber:121}})),divide_1=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12283,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12283,columnNumber:121}})),divide_1=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12286,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12286,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12286,columnNumber:127}})))),df_enable_divide_bottom_1&&wp.element.createElement("div",{className:'df-divide-bottom-1',style:{color:df_color_divide_bottom_1},__self:this,__source:{fileName:_jsxFileName,lineNumber:12291,columnNumber:33}},divide_bottom_1=='svg-1'&&wp.element.createElement("svg",{className:'df-flip-bottom',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12293,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12293,columnNumber:152}})),divide_bottom_1=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12296,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12296,columnNumber:121}})),divide_bottom_1=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12299,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12299,columnNumber:121}})),divide_bottom_1=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12302,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12302,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12302,columnNumber:127}})))),df_slider_chose_1=='df-slider-image-1'&&wp.element.createElement(wp.element.Fragment,null,url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("a",{href:bubiblock_link_slider_1,target:bubiblock_link_tab_slider_1,rel:"noopener",__self:this,__source:{fileName:_jsxFileName,lineNumber:12310,columnNumber:37}},wp.element.createElement("img",{src:url,alt:alt,className:'img-cap',style:{objectFit:df_cover_img1,objectPosition:df_focalPoint_img_1+'% '+df_focalPoint_y_img_1+'%'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12311,columnNumber:41}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:12312,columnNumber:56}}),df_mask_slider_1&&wp.element.createElement("div",{className:'mask',style:{backgroundColor:background_color_solid_mask_1,opacity:df_opacity_mask_1},__self:this,__source:{fileName:_jsxFileName,lineNumber:12314,columnNumber:41}}))):wp.element.createElement("div",{className:'df-upload-img',__self:this,__source:{fileName:_jsxFileName,lineNumber:12319,columnNumber:37}})),df_slider_chose_1=='df-slider-color-1'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_slider_1?wp.element.createElement("div",{className:'df-slider-color bubiblock-color-slider-item',style:{backgroundColor:df_background_color_slider_1},__self:this,__source:{fileName:_jsxFileName,lineNumber:12326,columnNumber:37}}):wp.element.createElement("div",{className:'df-color-default-background-slider bubiblock-color-slider-item',__self:this,__source:{fileName:_jsxFileName,lineNumber:12328,columnNumber:37}})),bubi_block_content_slider=='bubiblock-content-slider'==!(bubi_block_content_slider=='bubiblock-blockcontent-slider')&&wp.element.createElement("div",{className:'carousel-caption caption-1',__self:this,__source:{fileName:_jsxFileName,lineNumber:12333,columnNumber:33}},wp.element.createElement("div",{className:'bubiblock-slider-row',__self:this,__source:{fileName:_jsxFileName,lineNumber:12334,columnNumber:37}},wp.element.createElement("div",{className:'bubiblock-col-md-8',__self:this,__source:{fileName:_jsxFileName,lineNumber:12335,columnNumber:41}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__title  '+df_repeat_effectcaption1+' '+df_delay_effectcaption1+' '+df_speed_effectcaption1+' '+effectcaption1,tagName:"h4",style:{textAlign:alignment_title1,fontSize:fontsizetitle1+'px',bottom:margin_bottom_caption1+'px'},onChange:this.onChangeTitle1,value:title1,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Title","bubiblock-slider"),allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12336,columnNumber:45}}),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'bubiblock-p-capt wp-block-bubiblock-slider-slider__info '+df_repeat_effectinfo1+' '+df_delay_effectinfo1+' '+df_speed_effectinfo1+' '+effectinfo1,tagName:"p",onChange:this.onChangeInfo1,value:info1,style:{textAlign:alignment_info1,fontSize:fontsizeinfo1+'px',bottom:margin_bottom_info1+'px'},placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Info","bubiblock-slider"),allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12345,columnNumber:45}}),wp.element.createElement("div",{className:'link-button-1 '+df_repeat_effectbutton1+' '+df_delay_effectbutton1+' '+df_speed_effectbutton1+' '+effectbutton1,style:{textAlign:alignment_button1,bottom:margin_bottom_button1+'px'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12354,columnNumber:45}},wp.element.createElement("button",{className:'button-slider '+df_background_color_transparent_link_button1,style:{paddingTop:padding_link_button1+'px',paddingBottom:padding_link_button1+'px',paddingLeft:padding_right_link_button1+'px',paddingRight:padding_right_link_button1+'px',borderTopLeftRadius:border_radius_top_left_link_button1+'px',borderTopRightRadius:border_radius_top_right_link_button1+'px',borderBottomLeftRadius:border_radius_bottom_left_link_button1+'px',borderBottomRightRadius:border_radius_bottom_right_link_button1+'px',border:border_size_link_button1+'px solid'+df_border_color_link_button1,backgroundColor:df_background_color_link_button1,background:df_background_color_link_button1},__self:this,__source:{fileName:_jsxFileName,lineNumber:12355,columnNumber:49}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__link',tagName:"p",onChange:this.onChangeButton1,value:button1,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button","bubiblock-slider"),fotmattingControls:[],style:{fontSize:fontsizebutton1+'px'},allowedFormats:['core/link','core/code','core/image','core/strikethrough','core/underline','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12371,columnNumber:53}}))))))),wp.element.createElement("div",{className:'carousel-item '+df_effect_slider+' '+bubiblock_id_slider,__self:this,__source:{fileName:_jsxFileName,lineNumber:12389,columnNumber:25}},df_enable_divide_2&&wp.element.createElement("div",{className:'df-divide-2',style:{color:df_color_divide_2},__self:this,__source:{fileName:_jsxFileName,lineNumber:12391,columnNumber:33}},divide_2=='svg-1'&&wp.element.createElement("svg",{className:'df-flip',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12393,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12393,columnNumber:145}})),divide_2=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12396,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12396,columnNumber:121}})),divide_2=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12399,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12399,columnNumber:121}})),divide_2=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12402,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12402,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12402,columnNumber:127}})))),df_enable_divide_bottom_2&&wp.element.createElement("div",{className:'df-divide-bottom-2',style:{color:df_color_divide_bottom_2},__self:this,__source:{fileName:_jsxFileName,lineNumber:12407,columnNumber:33}},divide_bottom_2=='svg-1'&&wp.element.createElement("svg",{className:'df-flip-bottom',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12409,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12409,columnNumber:152}})),divide_bottom_2=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12412,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12412,columnNumber:121}})),divide_bottom_2=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12415,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12415,columnNumber:121}})),divide_bottom_2=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12418,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12418,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12418,columnNumber:127}})))),df_slider_chose_2=='df-slider-image-2'&&wp.element.createElement(wp.element.Fragment,null,imageUrl_2?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("a",{href:bubiblock_link_slider_2,target:bubiblock_link_tab_slider_2,rel:"noopener",__self:this,__source:{fileName:_jsxFileName,lineNumber:12426,columnNumber:37}},wp.element.createElement("img",{src:imageUrl_2,alt:alt2,className:'img-cap image-slider-2',style:{objectFit:df_cover_img2,objectPosition:df_focalPoint_img_2+'% '+df_focalPoint_y_img_2+'%'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12427,columnNumber:41}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imageUrl_2)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:12428,columnNumber:63}}),df_mask_slider_2&&wp.element.createElement("div",{className:'mask',style:{backgroundColor:background_color_solid_mask_2,background:background_color_gradient_mask_2,opacity:df_opacity_mask_2},__self:this,__source:{fileName:_jsxFileName,lineNumber:12430,columnNumber:41}}))):wp.element.createElement("div",{className:'df-upload-img',__self:this,__source:{fileName:_jsxFileName,lineNumber:12435,columnNumber:37}})),df_slider_chose_2=='df-slider-color-2'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_slider_2?wp.element.createElement("div",{className:'df-slider-color bubiblock-color-slider-item',style:{backgroundColor:df_background_color_slider_2},__self:this,__source:{fileName:_jsxFileName,lineNumber:12442,columnNumber:37}}):wp.element.createElement("div",{className:'df-color-default-background-slider-2 bubiblock-color-slider-item',__self:this,__source:{fileName:_jsxFileName,lineNumber:12444,columnNumber:37}})),bubi_block_content_slider=='bubiblock-content-slider'==!(bubi_block_content_slider=='bubiblock-blockcontent-slider')&&wp.element.createElement("div",{className:'carousel-caption caption-2',__self:this,__source:{fileName:_jsxFileName,lineNumber:12449,columnNumber:33}},wp.element.createElement("div",{className:'bubiblock-slider-row',__self:this,__source:{fileName:_jsxFileName,lineNumber:12450,columnNumber:37}},wp.element.createElement("div",{className:'bubiblock-col-md-8',__self:this,__source:{fileName:_jsxFileName,lineNumber:12451,columnNumber:41}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__title_2 '+df_repeat_effectcaption2+' '+df_delay_effectcaption2+' '+df_speed_effectcaption2+' '+effectcaption2,tagName:"h4",style:{textAlign:alignment_title2,fontSize:fontsizetitle2+'px',bottom:margin_bottom_caption2+'px'},onChange:this.onChangeTitle2,value:title2,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Title","bubiblock-slider"),allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12452,columnNumber:45}}),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'bubiblock-p-capt wp-block-bubiblock-slider-slider__info_2 '+df_repeat_effectinfo2+' '+df_delay_effectinfo2+' '+df_speed_effectinfo2+' '+effectinfo2,tagName:"p",onChange:this.onChangeInfo2,value:info2,style:{textAlign:alignment_info2,fontSize:fontsizeinfo2+'px',bottom:margin_bottom_info2+'px'},placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Info","bubiblock-slider"),fotmattingControls:[],allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12461,columnNumber:45}}),wp.element.createElement("div",{className:'link-button-2 '+df_repeat_effectbutton2+' '+df_delay_effectbutton2+' '+df_speed_effectbutton2+' '+effectbutton2,style:{textAlign:alignment_button2,bottom:margin_bottom_button2+'px'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12471,columnNumber:45}},wp.element.createElement("button",{className:'button-slider2 '+df_background_color_transparent_link_button2,style:{paddingTop:padding_link_button2+'px',paddingBottom:padding_link_button2+'px',paddingLeft:padding_right_link_button2+'px',paddingRight:padding_right_link_button2+'px',borderTopLeftRadius:border_radius_top_left_link_button2+'px',borderTopRightRadius:border_radius_top_right_link_button2+'px',borderBottomLeftRadius:border_radius_bottom_left_link_button2+'px',borderBottomRightRadius:border_radius_bottom_right_link_button2+'px',border:border_size_link_button2+'px solid'+df_border_color_link_button2,backgroundColor:df_background_color_link_button2,background:df_background_color_link_button2},__self:this,__source:{fileName:_jsxFileName,lineNumber:12472,columnNumber:49}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__link_2',tagName:"p",onChange:this.onChangeButton2,value:button2,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button","bubiblock-slider"),fotmattingControls:[],allowedFormats:['core/link','core/code','core/image','core/strikethrough','core/underline','core/subscript','core/superscript'],style:{fontSize:fontsizebutton2+'px'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12488,columnNumber:53}}))))))),bubiblock_add_slider_3&&// Slider 3
wp.element.createElement("div",{className:'carousel-item '+df_effect_slider,__self:this,__source:{fileName:_jsxFileName,lineNumber:12507,columnNumber:25}},df_enable_divide_3&&wp.element.createElement("div",{className:'df-divide-3',style:{color:df_color_divide_3},__self:this,__source:{fileName:_jsxFileName,lineNumber:12509,columnNumber:33}},divide_3=='svg-1'&&wp.element.createElement("svg",{className:'df-flip',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12511,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12511,columnNumber:145}})),divide_3=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12514,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12514,columnNumber:121}})),divide_3=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12517,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12517,columnNumber:121}})),divide_3=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12520,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12520,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12520,columnNumber:127}})))),df_enable_divide_bottom_3&&wp.element.createElement("div",{className:'df-divide-bottom-3',style:{color:df_color_divide_bottom_3},__self:this,__source:{fileName:_jsxFileName,lineNumber:12525,columnNumber:33}},divide_bottom_3=='svg-1'&&wp.element.createElement("svg",{className:'df-flip-bottom',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12527,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12527,columnNumber:152}})),divide_bottom_3=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12530,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12530,columnNumber:121}})),divide_bottom_3=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12533,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12533,columnNumber:121}})),divide_bottom_3=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12536,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12536,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12536,columnNumber:127}})))),df_slider_chose_3=='df-slider-image-3'&&wp.element.createElement(wp.element.Fragment,null,imageUrl_3?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("a",{href:bubiblock_link_slider_3,target:bubiblock_link_tab_slider_3,rel:"noopener",__self:this,__source:{fileName:_jsxFileName,lineNumber:12544,columnNumber:37}},wp.element.createElement("img",{src:imageUrl_3,alt:alt3,className:'img-cap image-slider-3',style:{objectFit:df_cover_img3,objectPosition:df_focalPoint_img_3+'% '+df_focalPoint_y_img_3+'%'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12545,columnNumber:41}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imageUrl_3)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:12546,columnNumber:63}}),df_mask_slider_3&&wp.element.createElement("div",{className:'mask',style:{backgroundColor:background_color_solid_mask_3,background:background_color_gradient_mask_3,opacity:df_opacity_mask_3},__self:this,__source:{fileName:_jsxFileName,lineNumber:12548,columnNumber:41}}))):wp.element.createElement("div",{className:'df-upload-img',__self:this,__source:{fileName:_jsxFileName,lineNumber:12553,columnNumber:37}})),df_slider_chose_3=='df-slider-color-3'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_slider_3?wp.element.createElement("div",{className:'df-slider-color bubiblock-color-slider-item',style:{backgroundColor:df_background_color_slider_3},__self:this,__source:{fileName:_jsxFileName,lineNumber:12560,columnNumber:37}}):wp.element.createElement("div",{className:'df-color-default-background-slider bubiblock-color-slider-item',__self:this,__source:{fileName:_jsxFileName,lineNumber:12562,columnNumber:37}})),bubi_block_content_slider=='bubiblock-content-slider'==!(bubi_block_content_slider=='bubiblock-blockcontent-slider')&&wp.element.createElement("div",{className:'carousel-caption caption-3',__self:this,__source:{fileName:_jsxFileName,lineNumber:12567,columnNumber:33}},wp.element.createElement("div",{className:'bubiblock-slider-row',__self:this,__source:{fileName:_jsxFileName,lineNumber:12568,columnNumber:37}},wp.element.createElement("div",{className:'bubiblock-col-md-8',__self:this,__source:{fileName:_jsxFileName,lineNumber:12569,columnNumber:41}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__title_3 '+df_repeat_effectcaption3+' '+df_delay_effectcaption3+' '+df_speed_effectcaption3+' '+effectcaption3,tagName:"h4",style:{textAlign:alignment_title3,fontSize:fontsizetitle3+'px',bottom:margin_bottom_caption3+'px'},onChange:this.onChangeTitle3,value:title3,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Title","bubiblock-slider"),allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12570,columnNumber:45}}),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'bubiblock-p-capt wp-block-bubiblock-slider-slider__info_3 '+df_repeat_effectinfo3+' '+df_delay_effectinfo3+' '+df_speed_effectinfo3+' '+effectinfo3,tagName:"p",onChange:this.onChangeInfo3,value:info3,style:{textAlign:alignment_info3,fontSize:fontsizeinfo3+'px',bottom:margin_bottom_info3+'px'},placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Info","bubiblock-slider"),fotmattingControls:[],allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12579,columnNumber:45}}),wp.element.createElement("div",{className:'link-button-3 '+df_repeat_effectbutton3+' '+df_delay_effectbutton3+' '+df_speed_effectbutton3+' '+effectbutton3,style:{textAlign:alignment_button3,bottom:margin_bottom_button3+'px'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12589,columnNumber:45}},wp.element.createElement("button",{className:'button-slider3 '+df_background_color_transparent_link_button3,style:{paddingTop:padding_link_button3+'px',paddingBottom:padding_link_button3+'px',paddingLeft:padding_right_link_button3+'px',paddingRight:padding_right_link_button3+'px',borderTopLeftRadius:border_radius_top_left_link_button3+'px',borderTopRightRadius:border_radius_top_right_link_button3+'px',borderBottomLeftRadius:border_radius_bottom_left_link_button3+'px',borderBottomRightRadius:border_radius_bottom_right_link_button3+'px',border:border_size_link_button3+'px solid'+df_border_color_link_button3,backgroundColor:df_background_color_link_button3,background:df_background_color_link_button3},__self:this,__source:{fileName:_jsxFileName,lineNumber:12590,columnNumber:49}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__link_3',tagName:"p",onChange:this.onChangeButton3,value:button3,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button","bubiblock-slider"),fotmattingControls:[],style:{fontSize:fontsizebutton3+'px'},allowedFormats:['core/link','core/code','core/image','core/strikethrough','core/underline','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12606,columnNumber:53}}))))))),bubiblock_add_slider_4&&// Slider 4
wp.element.createElement("div",{className:'carousel-item '+df_effect_slider,__self:this,__source:{fileName:_jsxFileName,lineNumber:12626,columnNumber:25}},df_enable_divide_4&&wp.element.createElement("div",{className:'df-divide-4',style:{color:df_color_divide_4},__self:this,__source:{fileName:_jsxFileName,lineNumber:12628,columnNumber:33}},divide_4=='svg-1'&&wp.element.createElement("svg",{className:'df-flip',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12630,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12630,columnNumber:145}})),divide_4=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12633,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12633,columnNumber:121}})),divide_4=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12636,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12636,columnNumber:121}})),divide_4=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12639,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12639,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12639,columnNumber:127}})))),df_enable_divide_bottom_4&&wp.element.createElement("div",{className:'df-divide-bottom-4',style:{color:df_color_divide_bottom_4},__self:this,__source:{fileName:_jsxFileName,lineNumber:12644,columnNumber:33}},divide_bottom_4=='svg-1'&&wp.element.createElement("svg",{className:'df-flip-bottom',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12646,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12646,columnNumber:152}})),divide_bottom_4=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12649,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12649,columnNumber:121}})),divide_bottom_4=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12652,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12652,columnNumber:121}})),divide_bottom_4=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12655,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12655,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12655,columnNumber:127}})))),df_slider_chose_4=='df-slider-image-4'&&wp.element.createElement(wp.element.Fragment,null,imageUrl_4?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("a",{href:bubiblock_link_slider_4,target:bubiblock_link_tab_slider_4,rel:"noopener",__self:this,__source:{fileName:_jsxFileName,lineNumber:12663,columnNumber:37}},wp.element.createElement("img",{src:imageUrl_4,alt:alt4,className:'img-cap image-slider-4',style:{objectFit:df_cover_img4,objectPosition:df_focalPoint_img_4+'% '+df_focalPoint_y_img_4+'%'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12664,columnNumber:41}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imageUrl_4)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:12665,columnNumber:63}}),df_mask_slider_4&&wp.element.createElement("div",{className:'mask',style:{backgroundColor:background_color_solid_mask_4,background:background_color_gradient_mask_4,opacity:df_opacity_mask_4},__self:this,__source:{fileName:_jsxFileName,lineNumber:12667,columnNumber:41}}))):wp.element.createElement("div",{className:'df-upload-img',__self:this,__source:{fileName:_jsxFileName,lineNumber:12672,columnNumber:37}})),df_slider_chose_4=='df-slider-color-4'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_slider_4?wp.element.createElement("div",{className:'df-slider-color bubiblock-color-slider-item',style:{backgroundColor:df_background_color_slider_4},__self:this,__source:{fileName:_jsxFileName,lineNumber:12679,columnNumber:37}}):wp.element.createElement("div",{className:'df-color-default-background-slider-2 bubiblock-color-slider-item',__self:this,__source:{fileName:_jsxFileName,lineNumber:12681,columnNumber:37}})),bubi_block_content_slider=='bubiblock-content-slider'==!(bubi_block_content_slider=='bubiblock-blockcontent-slider')&&wp.element.createElement("div",{className:'carousel-caption caption-4',__self:this,__source:{fileName:_jsxFileName,lineNumber:12686,columnNumber:33}},wp.element.createElement("div",{className:'bubiblock-slider-row',__self:this,__source:{fileName:_jsxFileName,lineNumber:12687,columnNumber:37}},wp.element.createElement("div",{className:'bubiblock-col-md-8',__self:this,__source:{fileName:_jsxFileName,lineNumber:12688,columnNumber:41}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__title_4 '+df_repeat_effectcaption4+' '+df_delay_effectcaption4+' '+df_speed_effectcaption4+' '+effectcaption4,tagName:"h4",style:{textAlign:alignment_title4,fontSize:fontsizetitle4+'px',bottom:margin_bottom_caption4+'px'},onChange:this.onChangeTitle4,value:title4,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Title","bubiblock-slider"),allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12689,columnNumber:45}}),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'bubiblock-p-capt wp-block-bubiblock-slider-slider__info_4 '+df_repeat_effectinfo4+' '+df_delay_effectinfo4+' '+df_speed_effectinfo4+' '+effectinfo4,tagName:"p",onChange:this.onChangeInfo4,value:info4,style:{textAlign:alignment_info4,fontSize:fontsizeinfo4+'px',bottom:margin_bottom_info4+'px'},placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Info","bubiblock-slider"),fotmattingControls:[],allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12698,columnNumber:45}}),wp.element.createElement("div",{className:'link-button-4 '+df_repeat_effectbutton4+' '+df_delay_effectbutton4+' '+df_speed_effectbutton4+' '+effectbutton4,style:{textAlign:alignment_button4,bottom:margin_bottom_button4+'px'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12708,columnNumber:45}},wp.element.createElement("button",{className:'button-slider4 '+df_background_color_transparent_link_button4,style:{paddingTop:padding_link_button4+'px',paddingBottom:padding_link_button4+'px',paddingLeft:padding_right_link_button4+'px',paddingRight:padding_right_link_button4+'px',borderTopLeftRadius:border_radius_top_left_link_button4+'px',borderTopRightRadius:border_radius_top_right_link_button4+'px',borderBottomLeftRadius:border_radius_bottom_left_link_button4+'px',borderBottomRightRadius:border_radius_bottom_right_link_button4+'px',border:border_size_link_button4+'px solid'+df_border_color_link_button4,backgroundColor:df_background_color_link_button4,background:df_background_color_link_button4},__self:this,__source:{fileName:_jsxFileName,lineNumber:12709,columnNumber:49}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__link_4',tagName:"p",onChange:this.onChangeButton4,value:button4,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button","bubiblock-slider"),fotmattingControls:[],style:{fontSize:fontsizebutton4+'px'},allowedFormats:['core/link','core/code','core/image','core/strikethrough','core/underline','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12725,columnNumber:53}}))))))),bubiblock_add_slider_5&&// Slider 5
wp.element.createElement("div",{className:'carousel-item '+df_effect_slider,__self:this,__source:{fileName:_jsxFileName,lineNumber:12744,columnNumber:25}},df_enable_divide_5&&wp.element.createElement("div",{className:'df-divide-5',style:{color:df_color_divide_5},__self:this,__source:{fileName:_jsxFileName,lineNumber:12746,columnNumber:33}},divide_5=='svg-1'&&wp.element.createElement("svg",{className:'df-flip',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12748,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12748,columnNumber:145}})),divide_5=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12751,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12751,columnNumber:121}})),divide_5=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12754,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12754,columnNumber:121}})),divide_5=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12757,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12757,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12757,columnNumber:127}})))),df_enable_divide_bottom_5&&wp.element.createElement("div",{className:'df-divide-bottom-5',style:{color:df_color_divide_bottom_5},__self:this,__source:{fileName:_jsxFileName,lineNumber:12762,columnNumber:33}},divide_bottom_5=='svg-1'&&wp.element.createElement("svg",{className:'df-flip-bottom',viewBox:"0 0 1000 100",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12764,columnNumber:41}},wp.element.createElement("path",{d:"M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12764,columnNumber:152}})),divide_bottom_5=='svg-2'&&wp.element.createElement("svg",{viewBox:"0 0 500 65",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12767,columnNumber:41}},wp.element.createElement("polygon",{points:"500 0 0 0 0 65 250 25 500 65 500 0",__self:this,__source:{fileName:_jsxFileName,lineNumber:12767,columnNumber:121}})),divide_bottom_5=='svg-3'&&wp.element.createElement("svg",{viewBox:"0 0 500 81",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12770,columnNumber:41}},wp.element.createElement("path",{d:"M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",transform:"translate(0 0)",__self:this,__source:{fileName:_jsxFileName,lineNumber:12770,columnNumber:121}})),divide_bottom_5=='svg-4'&&wp.element.createElement("svg",{viewBox:"0 0 500 46.42",height:"100%",width:"100%",preserveAspectRatio:"none",__self:this,__source:{fileName:_jsxFileName,lineNumber:12773,columnNumber:41}},wp.element.createElement("g",{__self:this,__source:{fileName:_jsxFileName,lineNumber:12773,columnNumber:124}},wp.element.createElement("path",{d:"M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",__self:this,__source:{fileName:_jsxFileName,lineNumber:12773,columnNumber:127}})))),df_slider_chose_5=='df-slider-image-5'&&wp.element.createElement(wp.element.Fragment,null,imageUrl_5?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("a",{href:bubiblock_link_slider_5,target:bubiblock_link_tab_slider_5,rel:"noopener",__self:this,__source:{fileName:_jsxFileName,lineNumber:12781,columnNumber:37}},wp.element.createElement("img",{src:imageUrl_5,alt:alt5,className:'img-cap image-slider-5',style:{objectFit:df_cover_img5,objectPosition:df_focalPoint_img_5+'% '+df_focalPoint_y_img_5+'%'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12782,columnNumber:41}}),Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(imageUrl_5)&&wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:12783,columnNumber:63}}),df_mask_slider_5&&wp.element.createElement("div",{className:'mask',style:{backgroundColor:background_color_solid_mask_5,background:background_color_gradient_mask_5,opacity:df_opacity_mask_5},__self:this,__source:{fileName:_jsxFileName,lineNumber:12785,columnNumber:41}}))):wp.element.createElement("div",{className:'df-upload-img',__self:this,__source:{fileName:_jsxFileName,lineNumber:12790,columnNumber:37}})),df_slider_chose_5=='df-slider-color-5'&&wp.element.createElement(wp.element.Fragment,null,df_background_color_slider_5?wp.element.createElement("div",{className:'df-slider-color bubiblock-color-slider-item',style:{backgroundColor:df_background_color_slider_5},__self:this,__source:{fileName:_jsxFileName,lineNumber:12797,columnNumber:37}}):wp.element.createElement("div",{className:'df-color-default-background-slider bubiblock-color-slider-item',__self:this,__source:{fileName:_jsxFileName,lineNumber:12799,columnNumber:37}})),bubi_block_content_slider=='bubiblock-content-slider'==!(bubi_block_content_slider=='bubiblock-blockcontent-slider')&&wp.element.createElement("div",{className:'carousel-caption caption-5',__self:this,__source:{fileName:_jsxFileName,lineNumber:12804,columnNumber:33}},wp.element.createElement("div",{className:'bubiblock-slider-row',__self:this,__source:{fileName:_jsxFileName,lineNumber:12805,columnNumber:37}},wp.element.createElement("div",{className:'bubiblock-col-md-8',__self:this,__source:{fileName:_jsxFileName,lineNumber:12806,columnNumber:41}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__title_5 '+df_repeat_effectcaption5+' '+df_delay_effectcaption5+' '+df_speed_effectcaption5+' '+effectcaption5,tagName:"h4",style:{textAlign:alignment_title5,fontSize:fontsizetitle5+'px',bottom:margin_bottom_caption5+'px'},onChange:this.onChangeTitle5,value:title5,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Title","bubiblock-slider"),allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12807,columnNumber:45}}),wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'bubiblock-p-capt wp-block-bubiblock-slider-slider__info_5 '+df_repeat_effectinfo5+' '+df_delay_effectinfo5+' '+df_speed_effectinfo5+' '+effectinfo5,tagName:"p",onChange:this.onChangeInfo5,value:info5,style:{textAlign:alignment_info5,fontSize:fontsizeinfo5+'px',bottom:margin_bottom_info5+'px'},placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Info","bubiblock-slider"),fotmattingControls:[],allowedFormats:['core/code','core/image','core/strikethrough','core/underline','core/text-color','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12816,columnNumber:45}}),wp.element.createElement("div",{className:'link-button-5 '+df_repeat_effectbutton5+' '+df_delay_effectbutton5+' '+df_speed_effectbutton5+' '+effectbutton5,style:{textAlign:alignment_button5,bottom:margin_bottom_button5+'px'},__self:this,__source:{fileName:_jsxFileName,lineNumber:12826,columnNumber:45}},wp.element.createElement("button",{className:'button-slider5 '+df_background_color_transparent_link_button5,style:{paddingTop:padding_link_button5+'px',paddingBottom:padding_link_button5+'px',paddingLeft:padding_right_link_button5+'px',paddingRight:padding_right_link_button5+'px',borderTopLeftRadius:border_radius_top_left_link_button5+'px',borderTopRightRadius:border_radius_top_right_link_button5+'px',borderBottomLeftRadius:border_radius_bottom_left_link_button5+'px',borderBottomRightRadius:border_radius_bottom_right_link_button5+'px',border:border_size_link_button5+'px solid'+df_border_color_link_button5,backgroundColor:df_background_color_link_button5,background:df_background_color_link_button5},__self:this,__source:{fileName:_jsxFileName,lineNumber:12827,columnNumber:49}},wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"],{className:'wp-block-bubiblock-slider-slider__link_5',tagName:"p",onChange:this.onChangeButton5,value:button5,placeholder:Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button","bubiblock-slider"),fotmattingControls:[],style:{fontSize:fontsizebutton5+'px'},allowedFormats:['core/link','core/code','core/image','core/strikethrough','core/underline','core/subscript','core/superscript'],__self:this,__source:{fileName:_jsxFileName,lineNumber:12843,columnNumber:53}})))))))),wp.element.createElement("a",{className:'carousel-control-prev df-carousel-control-prev bubi-img-3 '+bubi_arrow_position+' '+df_arrow_slider+' '+df_arrow_slider_table+' '+df_arrow_slider_mobile,type:"button","data-target":'#carouselDFControlslider'+bubiblock_id_slider,"data-slide":"prev",style:{left:bubi_marginarrow+'px',opacity:bubiopacityarrow},__self:this,__source:{fileName:_jsxFileName,lineNumber:12863,columnNumber:21}},wp.element.createElement("i",{className:'bubi-icon '+df_arrow_slider_type,style:{color:df_color_arrow,padding:df_padding_arrow,borderRadius:df_radius_arrow,fontSize:df_size_arrow},"aria-hidden":"true",__self:this,__source:{fileName:_jsxFileName,lineNumber:12864,columnNumber:25}})),wp.element.createElement("a",{className:'carousel-control-next df-carousel-control-next bubi-img-3 '+bubi_arrow_position+' '+df_arrow_slider+' '+df_arrow_slider_table+' '+df_arrow_slider_mobile,type:"button","data-target":'#carouselDFControlslider'+bubiblock_id_slider,"data-slide":"next",style:{right:bubi_marginarrow+'px',opacity:bubiopacityarrow},__self:this,__source:{fileName:_jsxFileName,lineNumber:12866,columnNumber:21}},wp.element.createElement("i",{className:'bubi-icon '+df_arrow_slider_type,style:{color:df_color_arrow,padding:df_padding_arrow,borderRadius:df_radius_arrow,fontSize:df_size_arrow},"aria-hidden":"true",__self:this,__source:{fileName:_jsxFileName,lineNumber:12867,columnNumber:25}}))));}}]);return SliderEdit;}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function(select,props){var _ref2;var id=props.attributes.id;var id2=props.attributes.id2;var id3=props.attributes.id3;var id4=props.attributes.id4;var id5=props.attributes.id5;return _ref2={image:id?select('core').getMedia(id):null},_defineProperty(_ref2,"image",id2?select('core').getMedia(id2):null),_defineProperty(_ref2,"image",id3?select('core').getMedia(id3):null),_defineProperty(_ref2,"image",id4?select('core').getMedia(id4):null),_defineProperty(_ref2,"image",id5?select('core').getMedia(id5):null),_ref2;})(SliderEdit));

/***/ }),

/***/ "./src/blocks/slider/index.js":
/*!************************************!*\
  !*** ./src/blocks/slider/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/slider/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/slider/edit.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/denis/Local Sites/slider-free/app/public/wp-content/plugins/bubiblock-slider/src/blocks/slider/index.js",
    _this = undefined;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var attributes = {
  // Geeral 
  bubiblock_padding_caption: {
    type: 'number',
    default: 0
  },
  bubiblock_padding_table_caption: {
    type: 'number',
    default: 0
  },
  bubiblock_padding_mobile_caption: {
    type: 'number',
    default: 0
  },
  bubiblock_display_button_table_caption: {
    type: 'boolean',
    default: true
  },
  bubiblock_display_button_mobile_caption: {
    type: 'boolean',
    default: true
  },
  bubiblcok_fontfamily: {
    type: 'string',
    default: 'IBM Plex Sans' + ',sans-serif'
  },
  bubiblock_typography_custom: {
    type: 'boolean',
    default: true
  },
  bubiblcok_fontfamily_weight: {
    type: 'string',
    default: '400'
  },
  bubiblock_line_height_title: {
    type: 'number',
    default: 2
  },
  bubiblcok_fontfamily_descritpion: {
    type: 'string',
    default: 'IBM Plex Sans' + ',sans-serif'
  },
  bubiblcok_fontfamily_weight_description: {
    type: 'string',
    default: '300'
  },
  bubiblock_line_height_info: {
    type: 'number',
    default: 2
  },
  bubiblcok_fontfamily_button: {
    type: 'string',
    default: 'IBM Plex Sans' + ',sans-serif'
  },
  bubiblcok_fontfamily_weight_button: {
    type: 'string',
    default: '400'
  },
  height_slider: {
    type: 'number',
    default: 500
  },
  df_height_slider_auto: {
    type: 'bolean',
    default: false
  },
  df_resp: {
    type: 'string',
    default: 'desktop'
  },
  height_slider_table: {
    type: 'number',
    default: 400
  },
  height_slider_mobile: {
    type: 'number',
    default: 300
  },
  bubiblock_full_slider: {
    type: 'boolean',
    default: false
  },
  df_interval_slider: {
    type: 'string',
    default: '0'
  },
  bubiblock_speed_flip_slider: {
    type: 'number',
    default: 3
  },
  df_pause_slider: {
    type: 'string',
    default: 'hover'
  },
  df_effect_slider: {
    type: 'string',
    default: 'df-slider-slide'
  },
  bubiblock_show_slider_desktop: {
    type: 'boolean',
    default: true
  },
  bubiblock_show_slider_table: {
    type: 'boolean',
    default: true
  },
  bubiblock_show_slider_mobile: {
    type: 'boolean',
    default: true
  },
  bubiblock_carousle_touch: {
    type: 'boolean',
    default: true
  },
  bubi_block_content_slider: {
    type: 'string',
    default: 'bubiblock-content-slider'
  },
  bubiblock_padding_block_slider: {
    type: 'number',
    default: 15
  },
  bubiblock_padding_b_block_slider: {
    type: 'number',
    default: 15
  },
  bubiblock_padding_block_slider_table: {
    type: 'number',
    default: 10
  },
  bubiblock_padding_b_block_slider_table: {
    type: 'number',
    default: 10
  },
  bubiblock_padding_block_slider_mobile: {
    type: 'number',
    default: 5
  },
  bubiblock_padding_b_block_slider_mobile: {
    type: 'number',
    default: 5
  },
  bubiblock_background_color_block_slider: {
    type: 'string'
  },
  bubiopacityblock_slider: {
    type: 'number',
    default: 1
  },
  df_arrow_slider: {
    type: 'string',
    default: 'df-arrow-true'
  },
  df_arrow_slider_table: {
    type: 'string',
    default: 'df-arrow-table-true'
  },
  df_arrow_slider_mobile: {
    type: 'string',
    default: 'df-arrow-mobile-false'
  },
  bubiblock_padding_slider: {
    type: 'number',
    default: 0
  },
  bubiblock_padding_table_slider: {
    type: 'number',
    default: 0
  },
  bubiblock_padding_b_table_slider: {
    type: 'number',
    default: 0
  },
  bubiblock_padding_mobile_slider: {
    type: 'number',
    default: 0
  },
  bubiblock_padding_b_mobile_slider: {
    type: 'number',
    default: 0
  },
  bubiblock_padding_b_slider: {
    type: 'number',
    default: .0
  },
  bubiblock_radius_slider: {
    type: 'number',
    default: .0
  },
  bubiblock_background_color_slider: {
    type: 'string'
  },
  df_arrow_slider_type: {
    type: 'string',
    default: 'bubi-arrow-right-alt2'
  },
  df_arrow_border_solid_slider: {
    type: 'number',
    default: 0
  },
  bubiblock_id_slider: {
    type: 'string',
    default: 'one'
  },
  df_color_arrow: {
    type: 'string'
  },
  bubiopacityarrow: {
    type: 'number',
    default: .5
  },
  bubiopacityhoverarrow: {
    type: 'number',
    default: 1
  },
  df_padding_arrow: {
    type: 'number',
    default: 0
  },
  df_radius_arrow: {
    type: 'number',
    default: 0
  },
  df_size_arrow: {
    type: 'number',
    default: 30
  },
  df_size_arrow_table: {
    type: 'number',
    default: 16
  },
  df_size_arrow_mobile: {
    type: 'number',
    default: 16
  },
  bubi_marginarrow: {
    type: 'number',
    default: 0
  },
  df_dot_slider: {
    type: 'string',
    default: 'df-dot-true'
  },
  df_dot_slider_table: {
    type: 'string',
    default: 'df-dot-table-true'
  },
  df_dot_slider_mobile: {
    type: 'string',
    default: 'df-dot-mobile-false'
  },
  df_dot_slider_type: {
    type: 'string',
    default: 'df-dot-linear'
  },
  bubi_arrow_position: {
    type: 'string',
    default: 'arrowcenter'
  },
  df_width_dot: {
    type: 'number',
    default: 20
  },
  df_height_dot: {
    type: 'number',
    default: 3
  },
  bubiblock_height_dot_active_enable: {
    type: 'boolean',
    default: false
  },
  bubiblock_height_dot_active: {
    type: 'number',
    default: 8
  },
  bubiblock_progress_dot_enable: {
    type: 'boolean',
    default: false
  },
  df_color_progress_dot: {
    type: 'string',
    default: '#007cba'
  },
  df_spacing_dot: {
    type: 'number',
    default: 3
  },
  df_bottom_dot: {
    type: 'number',
    default: 10
  },
  df_color_dot: {
    type: 'string',
    default: '#fff'
  },
  // Slider 1
  df_slider_chose_1: {
    type: 'string',
    default: 'df-slider-color-1'
  },
  id: {
    type: 'number'
  },
  alt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
    default: ''
  },
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  },
  df_cover_img1: {
    type: 'string',
    default: 'cover'
  },
  df_focalPoint_img_1: {
    type: 'number',
    default: 50
  },
  df_focalPoint_y_img_1: {
    type: 'number',
    default: 50
  },
  df_background_color_slider_1: {
    type: 'string'
  },
  effectcaption1: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectcaption1: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectcaption1: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectcaption1: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  margin_bottom_caption1: {
    type: 'number',
    default: 80
  },
  margin_bottom_table_caption1: {
    type: 'number',
    default: 25
  },
  margin_bottom_mobile_caption1: {
    type: 'number',
    default: 15
  },
  df_info_table_slider_1: {
    type: 'string',
    default: 'df-caption-table-true'
  },
  df_info_mobile_slider_1: {
    type: 'string',
    default: 'df-caption-mobile-false'
  },
  margin_bottom_info1: {
    type: 'number',
    default: 40
  },
  margin_bottom_table_info1: {
    type: 'number',
    default: 30
  },
  margin_bottom_mobile_info1: {
    type: 'number',
    default: 10
  },
  margin_bottom_button1: {
    type: 'number',
    default: 5
  },
  margin_bottom_table_button1: {
    type: 'number',
    default: 5
  },
  margin_bottom_mobile_button1: {
    type: 'number',
    default: 5
  },
  effectinfo1: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectinfo1: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectinfo1: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectinfo1: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  effectbutton1: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectbutton1: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectbutton1: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectbutton1: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  title1: {
    type: 'string',
    source: 'html',
    selector: 'h4'
  },
  fontsizetitle1: {
    type: 'number',
    default: 24
  },
  fontsizetitle1table: {
    type: 'number',
    default: 22
  },
  fontsizetitle1mobile: {
    type: 'number',
    default: 18
  },
  info1: {
    type: 'string',
    source: 'html',
    selector: 'p'
  },
  fontsizeinfo1: {
    type: 'number',
    default: 16
  },
  fontsizeinfo1table: {
    type: 'number',
    default: 16
  },
  fontsizeinfo1mobile: {
    type: 'number',
    default: 16
  },
  alignment_title1: {
    type: 'string',
    default: 'left'
  },
  alignment_info1: {
    type: 'string',
    default: 'left'
  },
  button1: {
    type: 'string',
    source: 'html',
    selector: 'p.wp-block-bubiblock-slider-slider__link'
  },
  fontsizebutton1: {
    type: 'number',
    default: 15
  },
  fontsizebutton1table: {
    type: 'number',
    default: 15
  },
  fontsizebutton1mobile: {
    type: 'number',
    default: 15
  },
  alignment_button1: {
    type: 'string',
    default: 'right'
  },
  padding_link_button1: {
    type: 'number',
    default: 8
  },
  padding_right_link_button1: {
    type: 'number',
    default: 20
  },
  border_radius_top_left_link_button1: {
    type: 'number',
    default: 4
  },
  border_radius_top_right_link_button1: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_left_link_button1: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_right_link_button1: {
    type: 'number',
    default: 4
  },
  border_size_link_button1: {
    type: 'number',
    default: 0
  },
  df_background_color_link_button1: {
    type: 'string'
  },
  df_background_color_hover_link_button1: {
    type: 'string'
  },
  df_color_link_button1: {
    type: 'string',
    default: '#fff'
  },
  df_color_hover_link_button1: {
    type: 'string',
    default: '#fff'
  },
  df_border_color_link_button1: {
    type: 'string',
    default: '#fff'
  },
  df_background_color_transparent_link_button1: {
    type: 'string',
    default: 'df-trasparent-color-button1-false'
  },
  df_mask_slider_1: {
    type: 'boolean',
    default: false
  },
  background_color_solid_mask_1: {
    type: 'string'
  },
  df_opacity_mask_1: {
    type: 'number',
    default: .4
  },
  df_enable_divide_1: {
    type: 'bolean',
    default: false
  },
  divide_1: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_1: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_1: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_1: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_1: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_1: {
    type: 'number',
    default: 3
  },
  df_enable_divide_bottom_1: {
    type: 'bolean',
    default: false
  },
  divide_bottom_1: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_bottom_1: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_bottom_1: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_bottom_1: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_bottom_1: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_1_bottom: {
    type: 'number',
    default: 3
  },
  bubiblock_link_slider_1: {
    type: 'url'
  },
  bubiblock_link_tab_slider_1: {
    type: 'string',
    default: ''
  },
  bubiblock_sec_img_1: {
    type: 'bolean',
    default: false
  },
  id1: {
    type: 'number'
  },
  // Slider 2
  bubiblock_add_slider_2: {
    type: 'boolean',
    default: false
  },
  df_slider_chose_2: {
    type: 'string',
    default: 'df-slider-color-2'
  },
  id2: {
    type: 'number'
  },
  alt2: {
    type: 'string',
    source: 'attribute',
    selector: 'img.image-slider-2',
    attribute: 'alt',
    default: ''
  },
  imageUrl_2: {
    type: 'string',
    source: 'attribute',
    selector: 'img.image-slider-2',
    attribute: 'src'
  },
  df_cover_img2: {
    type: 'string',
    default: 'cover'
  },
  df_focalPoint_img_2: {
    type: 'number',
    default: 50
  },
  df_focalPoint_y_img_2: {
    type: 'number',
    default: 50
  },
  df_background_color_slider_2: {
    type: 'string'
  },
  effectcaption2: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectcaption2: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectcaption2: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectcaption2: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  margin_bottom_caption2: {
    type: 'number',
    default: 80
  },
  margin_bottom_table_caption2: {
    type: 'number',
    default: 25
  },
  margin_bottom_mobile_caption2: {
    type: 'number',
    default: 15
  },
  df_info_table_slider_2: {
    type: 'string',
    default: 'df-caption-table-true'
  },
  df_info_mobile_slider_2: {
    type: 'string',
    default: 'df-caption-mobile-false'
  },
  margin_bottom_info2: {
    type: 'number',
    default: 40
  },
  margin_bottom_table_info2: {
    type: 'number',
    default: 20
  },
  margin_bottom_mobile_info2: {
    type: 'number',
    default: 10
  },
  margin_bottom_button2: {
    type: 'number',
    default: 5
  },
  margin_bottom_table_button2: {
    type: 'number',
    default: 5
  },
  margin_bottom_mobile_button2: {
    type: 'number',
    default: 5
  },
  effectinfo2: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectinfo2: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectinfo2: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectinfo2: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  effectbutton2: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectbutton2: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectbutton2: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectbutton2: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  title2: {
    type: 'string',
    source: 'html',
    selector: 'h4.wp-block-bubiblock-slider-slider__title_2'
  },
  fontsizetitle2: {
    type: 'number',
    default: 24
  },
  fontsizetitle2table: {
    type: 'number',
    default: 22
  },
  fontsizetitle2mobile: {
    type: 'number',
    default: 18
  },
  info2: {
    type: 'string',
    source: 'html',
    selector: 'p.wp-block-bubiblock-slider-slider__info_2'
  },
  fontsizeinfo2: {
    type: 'number',
    default: 16
  },
  fontsizeinfo2table: {
    type: 'number',
    default: 16
  },
  fontsizeinfo2mobile: {
    type: 'number',
    default: 16
  },
  alignment_title2: {
    type: 'string',
    default: 'left'
  },
  alignment_info2: {
    type: 'string',
    default: 'left'
  },
  button2: {
    type: 'string',
    source: 'html',
    selector: 'p.wp-block-bubiblock-slider-slider__link_2'
  },
  fontsizebutton2: {
    type: 'number',
    default: 15
  },
  fontsizebutton2table: {
    type: 'number',
    default: 15
  },
  fontsizebutton2mobile: {
    type: 'number',
    default: 15
  },
  alignment_button2: {
    type: 'string',
    default: 'right'
  },
  padding_link_button2: {
    type: 'number',
    default: 8
  },
  padding_right_link_button2: {
    type: 'number',
    default: 20
  },
  border_radius_top_left_link_button2: {
    type: 'number',
    default: 4
  },
  border_radius_top_right_link_button2: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_left_link_button2: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_right_link_button2: {
    type: 'number',
    default: 4
  },
  border_size_link_button2: {
    type: 'number',
    default: 0
  },
  df_background_color_link_button2: {
    type: 'string'
  },
  df_background_color_hover_link_button2: {
    type: 'string'
  },
  df_color_link_button2: {
    type: 'string',
    default: '#fff'
  },
  df_color_hover_link_button2: {
    type: 'string',
    default: '#fff'
  },
  df_border_color_link_button2: {
    type: 'string',
    default: '#fff'
  },
  df_background_color_transparent_link_button2: {
    type: 'string',
    default: 'df-trasparent-color-button2-false'
  },
  df_mask_slider_2: {
    type: 'boolean',
    default: false
  },
  background_color_solid_mask_2: {
    type: 'string'
  },
  df_opacity_mask_2: {
    type: 'number',
    default: .4
  },
  df_enable_divide_2: {
    type: 'bolean',
    default: false
  },
  divide_2: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_2: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_2: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_2: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_2: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_2: {
    type: 'number',
    default: 2
  },
  df_enable_divide_bottom_2: {
    type: 'bolean',
    default: false
  },
  divide_bottom_2: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_bottom_2: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_bottom_2: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_bottom_2: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_bottom_2: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_2_bottom: {
    type: 'number',
    default: 2
  },
  bubiblock_link_slider_2: {
    type: 'url'
  },
  bubiblock_link_tab_slider_2: {
    type: 'string',
    default: ''
  },
  // Slider 3
  bubiblock_add_slider_3: {
    type: 'boolean',
    default: false
  },
  df_slider_chose_3: {
    type: 'string',
    default: 'df-slider-color-3'
  },
  id3: {
    type: 'number'
  },
  alt3: {
    type: 'string',
    source: 'attribute',
    selector: 'img.image-slider-3',
    attribute: 'alt',
    default: ''
  },
  imageUrl_3: {
    type: 'string',
    source: 'attribute',
    selector: 'img.image-slider-3',
    attribute: 'src'
  },
  df_cover_img3: {
    type: 'string',
    default: 'cover'
  },
  df_focalPoint_img_3: {
    type: 'number',
    default: 50
  },
  df_focalPoint_y_img_3: {
    type: 'number',
    default: 50
  },
  df_background_color_slider_3: {
    type: 'string'
  },
  effectcaption3: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectcaption3: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectcaption3: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectcaption3: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  margin_bottom_caption3: {
    type: 'number',
    default: 80
  },
  margin_bottom_table_caption3: {
    type: 'number',
    default: 25
  },
  margin_bottom_mobile_caption3: {
    type: 'number',
    default: 15
  },
  df_info_table_slider_3: {
    type: 'string',
    default: 'df-caption-table-true'
  },
  df_info_mobile_slider_3: {
    type: 'string',
    default: 'df-caption-mobile-false'
  },
  margin_bottom_info3: {
    type: 'number',
    default: 40
  },
  margin_bottom_table_info3: {
    type: 'number',
    default: 30
  },
  margin_bottom_mobile_info3: {
    type: 'number',
    default: 10
  },
  margin_bottom_button3: {
    type: 'number',
    default: 5
  },
  margin_bottom_table_button3: {
    type: 'number',
    default: 5
  },
  margin_bottom_mobile_button3: {
    type: 'number',
    default: 5
  },
  effectinfo3: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectinfo3: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectinfo3: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectinfo3: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  effectbutton3: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectbutton3: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectbutton3: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectbutton3: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  title3: {
    type: 'string',
    source: 'html',
    selector: 'h4.wp-block-bubiblock-slider-slider__title_3'
  },
  fontsizetitle3: {
    type: 'number',
    default: 24
  },
  fontsizetitle3table: {
    type: 'number',
    default: 22
  },
  fontsizetitle3mobile: {
    type: 'number',
    default: 18
  },
  info3: {
    type: 'string',
    source: 'html',
    selector: 'p.wp-block-bubiblock-slider-slider__info_3'
  },
  fontsizeinfo3: {
    type: 'number',
    default: 16
  },
  fontsizeinfo3table: {
    type: 'number',
    default: 16
  },
  fontsizeinfo3mobile: {
    type: 'number',
    default: 16
  },
  alignment_title3: {
    type: 'string',
    default: 'left'
  },
  alignment_info3: {
    type: 'string',
    default: 'left'
  },
  button3: {
    type: 'string',
    source: 'html',
    selector: 'p.wp-block-bubiblock-slider-slider__link_3'
  },
  fontsizebutton3: {
    type: 'number',
    default: 15
  },
  fontsizebutton3table: {
    type: 'number',
    default: 15
  },
  fontsizebutton3mobile: {
    type: 'number',
    default: 15
  },
  alignment_button3: {
    type: 'string',
    default: 'right'
  },
  padding_link_button3: {
    type: 'number',
    default: 8
  },
  padding_right_link_button3: {
    type: 'number',
    default: 20
  },
  border_radius_top_left_link_button3: {
    type: 'number',
    default: 4
  },
  border_radius_top_right_link_button3: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_left_link_button3: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_right_link_button3: {
    type: 'number',
    default: 4
  },
  border_size_link_button3: {
    type: 'number',
    default: 0
  },
  df_background_color_link_button3: {
    type: 'string'
  },
  df_background_color_hover_link_button3: {
    type: 'string'
  },
  df_color_link_button3: {
    type: 'string',
    default: '#fff'
  },
  df_color_hover_link_button3: {
    type: 'string',
    default: '#fff'
  },
  df_border_color_link_button3: {
    type: 'string',
    default: '#fff'
  },
  df_background_color_transparent_link_button3: {
    type: 'string',
    default: 'df-trasparent-color-button3-false'
  },
  df_mask_slider_3: {
    type: 'boolean',
    default: false
  },
  background_color_solid_mask_3: {
    type: 'string'
  },
  df_opacity_mask_3: {
    type: 'number',
    default: .4
  },
  df_enable_divide_3: {
    type: 'bolean',
    default: false
  },
  divide_3: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_3: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_3: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_3: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_3: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_3: {
    type: 'number',
    default: 3
  },
  df_enable_divide_bottom_3: {
    type: 'bolean',
    default: false
  },
  divide_bottom_3: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_bottom_3: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_bottom_3: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_bottom_3: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_bottom_3: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_3_bottom: {
    type: 'number',
    default: 3
  },
  bubiblock_link_slider_3: {
    type: 'url'
  },
  bubiblock_link_tab_slider_3: {
    type: 'string',
    default: ''
  },
  // Slider 4
  bubiblock_add_slider_4: {
    type: 'boolean',
    default: false
  },
  df_slider_chose_4: {
    type: 'string',
    default: 'df-slider-color-4'
  },
  id4: {
    type: 'number'
  },
  alt4: {
    type: 'string',
    source: 'attribute',
    selector: 'img.image-slider-4',
    attribute: 'alt',
    default: ''
  },
  imageUrl_4: {
    type: 'string',
    source: 'attribute',
    selector: 'img.image-slider-4',
    attribute: 'src'
  },
  df_cover_img4: {
    type: 'string',
    default: 'cover'
  },
  df_focalPoint_img_4: {
    type: 'number',
    default: 50
  },
  df_focalPoint_y_img_4: {
    type: 'number',
    default: 50
  },
  df_background_color_slider_4: {
    type: 'string'
  },
  effectcaption4: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectcaption4: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectcaption4: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectcaption4: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  margin_bottom_caption4: {
    type: 'number',
    default: 80
  },
  margin_bottom_table_caption4: {
    type: 'number',
    default: 25
  },
  margin_bottom_mobile_caption4: {
    type: 'number',
    default: 15
  },
  df_info_table_slider_4: {
    type: 'string',
    default: 'df-caption-table-true'
  },
  df_info_mobile_slider_4: {
    type: 'string',
    default: 'df-caption-mobile-false'
  },
  margin_bottom_info4: {
    type: 'number',
    default: 40
  },
  margin_bottom_table_info4: {
    type: 'number',
    default: 30
  },
  margin_bottom_mobile_info4: {
    type: 'number',
    default: 10
  },
  margin_bottom_button4: {
    type: 'number',
    default: 5
  },
  margin_bottom_table_button4: {
    type: 'number',
    default: 5
  },
  margin_bottom_mobile_button4: {
    type: 'number',
    default: 5
  },
  effectinfo4: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectinfo4: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectinfo4: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectinfo4: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  effectbutton4: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectbutton4: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectbutton4: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectbutton4: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  title4: {
    type: 'string',
    source: 'html',
    selector: 'h4.wp-block-bubiblock-slider-slider__title_4'
  },
  fontsizetitle4: {
    type: 'number',
    default: 24
  },
  fontsizetitle4table: {
    type: 'number',
    default: 22
  },
  fontsizetitle4mobile: {
    type: 'number',
    default: 18
  },
  info4: {
    type: 'string',
    source: 'html',
    selector: 'p.wp-block-bubiblock-slider-slider__info_4'
  },
  fontsizeinfo4: {
    type: 'number',
    default: 16
  },
  fontsizeinfo4table: {
    type: 'number',
    default: 16
  },
  fontsizeinfo4mobile: {
    type: 'number',
    default: 16
  },
  alignment_title4: {
    type: 'string',
    default: 'left'
  },
  alignment_info4: {
    type: 'string',
    default: 'left'
  },
  button4: {
    type: 'string',
    source: 'html',
    selector: 'p.wp-block-bubiblock-slider-slider__link_4'
  },
  fontsizebutton4: {
    type: 'number',
    default: 15
  },
  fontsizebutton4table: {
    type: 'number',
    default: 15
  },
  fontsizebutton4mobile: {
    type: 'number',
    default: 15
  },
  alignment_button4: {
    type: 'string',
    default: 'right'
  },
  padding_link_button4: {
    type: 'number',
    default: 8
  },
  padding_right_link_button4: {
    type: 'number',
    default: 20
  },
  border_radius_top_left_link_button4: {
    type: 'number',
    default: 4
  },
  border_radius_top_right_link_button4: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_left_link_button4: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_right_link_button4: {
    type: 'number',
    default: 4
  },
  border_size_link_button4: {
    type: 'number',
    default: 0
  },
  df_background_color_link_button4: {
    type: 'string'
  },
  df_background_color_hover_link_button4: {
    type: 'string'
  },
  df_color_link_button4: {
    type: 'string',
    default: '#fff'
  },
  df_color_hover_link_button4: {
    type: 'string',
    default: '#fff'
  },
  df_border_color_link_button4: {
    type: 'string',
    default: '#fff'
  },
  df_background_color_transparent_link_button4: {
    type: 'string',
    default: 'df-trasparent-color-button4-false'
  },
  df_mask_slider_4: {
    type: 'boolean',
    default: false
  },
  background_color_solid_mask_4: {
    type: 'string'
  },
  df_opacity_mask_4: {
    type: 'number',
    default: .4
  },
  df_enable_divide_4: {
    type: 'bolean',
    default: false
  },
  divide_4: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_4: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_4: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_4: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_4: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_4: {
    type: 'number',
    default: 3
  },
  df_enable_divide_bottom_4: {
    type: 'bolean',
    default: false
  },
  divide_bottom_4: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_bottom_4: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_bottom_4: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_bottom_4: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_bottom_4: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_4_bottom: {
    type: 'number',
    default: 3
  },
  bubiblock_link_slider_4: {
    type: 'url'
  },
  bubiblock_link_tab_slider_4: {
    type: 'string',
    default: ''
  },
  // Slider 5
  bubiblock_add_slider_5: {
    type: 'boolean',
    default: false
  },
  df_slider_chose_5: {
    type: 'string',
    default: 'df-slider-color-5'
  },
  id5: {
    type: 'number'
  },
  alt5: {
    type: 'string',
    source: 'attribute',
    selector: 'img.image-slider-5',
    attribute: 'alt',
    default: ''
  },
  imageUrl_5: {
    type: 'string',
    source: 'attribute',
    selector: 'img.image-slider-5',
    attribute: 'src'
  },
  df_cover_img5: {
    type: 'string',
    default: 'cover'
  },
  df_focalPoint_img_5: {
    type: 'number',
    default: 50
  },
  df_focalPoint_y_img_5: {
    type: 'number',
    default: 50
  },
  df_background_color_slider_5: {
    type: 'string'
  },
  effectcaption5: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectcaption5: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectcaption5: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectcaption5: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  margin_bottom_caption5: {
    type: 'number',
    default: 80
  },
  margin_bottom_table_caption5: {
    type: 'number',
    default: 25
  },
  margin_bottom_mobile_caption5: {
    type: 'number',
    default: 15
  },
  df_info_table_slider_5: {
    type: 'string',
    default: 'df-caption-table-true'
  },
  df_info_mobile_slider_5: {
    type: 'string',
    default: 'df-caption-mobile-false'
  },
  margin_bottom_info5: {
    type: 'number',
    default: 40
  },
  margin_bottom_table_info5: {
    type: 'number',
    default: 30
  },
  margin_bottom_mobile_info5: {
    type: 'number',
    default: 10
  },
  margin_bottom_button5: {
    type: 'number',
    default: 5
  },
  margin_bottom_table_button5: {
    type: 'number',
    default: 5
  },
  margin_bottom_mobile_button5: {
    type: 'number',
    default: 5
  },
  effectinfo5: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectinfo5: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectinfo5: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectinfo5: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  effectbutton5: {
    type: 'string',
    default: 'df-no-effect'
  },
  df_speed_effectbutton5: {
    type: 'string',
    default: 'animate__slow'
  },
  df_delay_effectbutton5: {
    type: 'string',
    default: 'animate__delay-0s'
  },
  df_repeat_effectbutton5: {
    type: 'string',
    default: 'animate__repeat-1'
  },
  title5: {
    type: 'string',
    source: 'html',
    selector: 'h4.wp-block-bubiblock-slider-slider__title_5'
  },
  fontsizetitle5: {
    type: 'number',
    default: 24
  },
  fontsizetitle5table: {
    type: 'number',
    default: 22
  },
  fontsizetitle5mobile: {
    type: 'number',
    default: 18
  },
  info5: {
    type: 'string',
    source: 'html',
    selector: 'p.wp-block-bubiblock-slider-slider__info_5'
  },
  fontsizeinfo5: {
    type: 'number',
    default: 16
  },
  fontsizeinfo5table: {
    type: 'number',
    default: 16
  },
  fontsizeinfo5mobile: {
    type: 'number',
    default: 16
  },
  alignment_title5: {
    type: 'string',
    default: 'left'
  },
  alignment_info5: {
    type: 'string',
    default: 'left'
  },
  button5: {
    type: 'string',
    source: 'html',
    selector: 'p.wp-block-bubiblock-slider-slider__link_5'
  },
  fontsizebutton5: {
    type: 'number',
    default: 15
  },
  fontsizebutton5table: {
    type: 'number',
    default: 15
  },
  fontsizebutton5mobile: {
    type: 'number',
    default: 15
  },
  alignment_button5: {
    type: 'string',
    default: 'right'
  },
  padding_link_button5: {
    type: 'number',
    default: 8
  },
  padding_right_link_button5: {
    type: 'number',
    default: 20
  },
  border_radius_top_left_link_button5: {
    type: 'number',
    default: 4
  },
  border_radius_top_right_link_button5: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_left_link_button5: {
    type: 'number',
    default: 4
  },
  border_radius_bottom_right_link_button5: {
    type: 'number',
    default: 4
  },
  border_size_link_button5: {
    type: 'number',
    default: 0
  },
  df_background_color_link_button5: {
    type: 'string'
  },
  df_background_color_hover_link_button5: {
    type: 'string'
  },
  df_color_link_button5: {
    type: 'string',
    default: '#fff'
  },
  df_color_hover_link_button5: {
    type: 'string',
    default: '#fff'
  },
  df_border_color_link_button5: {
    type: 'string',
    default: '#fff'
  },
  df_background_color_transparent_link_button5: {
    type: 'string',
    default: 'df-trasparent-color-button5-false'
  },
  df_mask_slider_5: {
    type: 'boolean',
    default: false
  },
  background_color_solid_mask_5: {
    type: 'string'
  },
  df_opacity_mask_5: {
    type: 'number',
    default: .4
  },
  df_enable_divide_5: {
    type: 'bolean',
    default: false
  },
  divide_5: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_5: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_5: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_5: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_5: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_5: {
    type: 'number',
    default: 3
  },
  df_enable_divide_bottom_5: {
    type: 'bolean',
    default: false
  },
  divide_bottom_5: {
    type: 'string',
    default: 'svg-1'
  },
  df_color_divide_bottom_5: {
    type: 'string',
    default: '#fff'
  },
  df_height_divide_bottom_5: {
    type: 'number',
    default: 60
  },
  df_height_table_divide_bottom_5: {
    type: 'number',
    default: 60
  },
  df_height_mobile_divide_bottom_5: {
    type: 'number',
    default: 60
  },
  bubiblock_dalay_divide_5_bottom: {
    type: 'number',
    default: 3
  },
  bubiblock_link_slider_5: {
    type: 'url'
  },
  bubiblock_link_tab_slider_5: {
    type: 'string',
    default: ''
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('bubiblock-slider/slider', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bubiblock Slider', 'bubiblock-slider'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Slider Block for Gutenberg, highlight your works in a few clicks!', 'bubiblock-slider'),
  category: 'media',
  icon: {
    foreground: '#8321D2',
    src: 'embed-photo bubiblock-icon-description'
  },
  supports: _defineProperty({
    reusable: false,
    html: false,
    align: true
  }, "align", ['center', 'full']),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('slider', 'bubiblock-slider'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('carousel', 'bubiblock-slider')],
  attributes: attributes,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var bubiblock_padding_caption = attributes.bubiblock_padding_caption,
        bubiblock_padding_table_caption = attributes.bubiblock_padding_table_caption,
        bubiblock_padding_mobile_caption = attributes.bubiblock_padding_mobile_caption,
        bubiblock_display_button_table_caption = attributes.bubiblock_display_button_table_caption,
        bubiblock_display_button_mobile_caption = attributes.bubiblock_display_button_mobile_caption,
        bubiblock_speed_flip_slider = attributes.bubiblock_speed_flip_slider,
        bubiblcok_fontfamily = attributes.bubiblcok_fontfamily,
        bubiblock_typography_custom = attributes.bubiblock_typography_custom,
        bubiblcok_fontfamily_weight = attributes.bubiblcok_fontfamily_weight,
        bubiblock_line_height_title = attributes.bubiblock_line_height_title,
        bubiblcok_fontfamily_descritpion = attributes.bubiblcok_fontfamily_descritpion,
        bubiblcok_fontfamily_weight_description = attributes.bubiblcok_fontfamily_weight_description,
        bubiblock_line_height_info = attributes.bubiblock_line_height_info,
        bubiblcok_fontfamily_button = attributes.bubiblcok_fontfamily_button,
        bubiblcok_fontfamily_weight_button = attributes.bubiblcok_fontfamily_weight_button,
        height_slider = attributes.height_slider,
        df_height_slider_auto = attributes.df_height_slider_auto,
        height_slider_table = attributes.height_slider_table,
        height_slider_mobile = attributes.height_slider_mobile,
        bubiblock_full_slider = attributes.bubiblock_full_slider,
        bubiblock_padding_slider = attributes.bubiblock_padding_slider,
        bubiblock_padding_table_slider = attributes.bubiblock_padding_table_slider,
        bubiblock_padding_b_table_slider = attributes.bubiblock_padding_b_table_slider,
        bubiblock_padding_mobile_slider = attributes.bubiblock_padding_mobile_slider,
        bubiblock_padding_b_mobile_slider = attributes.bubiblock_padding_b_mobile_slider,
        bubiblock_padding_b_slider = attributes.bubiblock_padding_b_slider,
        bubiblock_radius_slider = attributes.bubiblock_radius_slider,
        bubiblock_background_color_slider = attributes.bubiblock_background_color_slider,
        df_interval_slider = attributes.df_interval_slider,
        bubiblock_id_slider = attributes.bubiblock_id_slider,
        df_pause_slider = attributes.df_pause_slider,
        df_effect_slider = attributes.df_effect_slider,
        bubiblock_show_slider_desktop = attributes.bubiblock_show_slider_desktop,
        bubiblock_show_slider_table = attributes.bubiblock_show_slider_table,
        bubiblock_show_slider_mobile = attributes.bubiblock_show_slider_mobile,
        bubiblock_carousle_touch = attributes.bubiblock_carousle_touch,
        bubi_block_content_slider = attributes.bubi_block_content_slider,
        bubiblock_padding_block_slider = attributes.bubiblock_padding_block_slider,
        bubiblock_padding_b_block_slider = attributes.bubiblock_padding_b_block_slider,
        bubiblock_padding_block_slider_table = attributes.bubiblock_padding_block_slider_table,
        bubiblock_padding_b_block_slider_table = attributes.bubiblock_padding_b_block_slider_table,
        bubiblock_padding_block_slider_mobile = attributes.bubiblock_padding_block_slider_mobile,
        bubiblock_padding_b_block_slider_mobile = attributes.bubiblock_padding_b_block_slider_mobile,
        bubiblock_background_color_block_slider = attributes.bubiblock_background_color_block_slider,
        bubiopacityblock_slider = attributes.bubiopacityblock_slider,
        df_arrow_slider = attributes.df_arrow_slider,
        df_arrow_slider_table = attributes.df_arrow_slider_table,
        df_arrow_slider_mobile = attributes.df_arrow_slider_mobile,
        df_color_arrow = attributes.df_color_arrow,
        bubiopacityarrow = attributes.bubiopacityarrow,
        bubiopacityhoverarrow = attributes.bubiopacityhoverarrow,
        df_padding_arrow = attributes.df_padding_arrow,
        df_radius_arrow = attributes.df_radius_arrow,
        df_size_arrow = attributes.df_size_arrow,
        df_size_arrow_table = attributes.df_size_arrow_table,
        df_size_arrow_mobile = attributes.df_size_arrow_mobile,
        bubi_marginarrow = attributes.bubi_marginarrow,
        df_arrow_slider_type = attributes.df_arrow_slider_type,
        bubi_arrow_position = attributes.bubi_arrow_position,
        df_dot_slider = attributes.df_dot_slider,
        df_dot_slider_table = attributes.df_dot_slider_table,
        df_dot_slider_mobile = attributes.df_dot_slider_mobile,
        df_dot_slider_type = attributes.df_dot_slider_type,
        df_width_dot = attributes.df_width_dot,
        df_height_dot = attributes.df_height_dot,
        bubiblock_height_dot_active_enable = attributes.bubiblock_height_dot_active_enable,
        bubiblock_height_dot_active = attributes.bubiblock_height_dot_active,
        bubiblock_progress_dot_enable = attributes.bubiblock_progress_dot_enable,
        df_color_progress_dot = attributes.df_color_progress_dot,
        df_spacing_dot = attributes.df_spacing_dot,
        df_bottom_dot = attributes.df_bottom_dot,
        df_color_dot = attributes.df_color_dot,
        df_slider_chose_1 = attributes.df_slider_chose_1,
        effectcaption1 = attributes.effectcaption1,
        df_speed_effectcaption1 = attributes.df_speed_effectcaption1,
        df_delay_effectcaption1 = attributes.df_delay_effectcaption1,
        df_repeat_effectcaption1 = attributes.df_repeat_effectcaption1,
        df_mask_slider_1 = attributes.df_mask_slider_1,
        background_color_solid_mask_1 = attributes.background_color_solid_mask_1,
        df_opacity_mask_1 = attributes.df_opacity_mask_1,
        margin_bottom_caption1 = attributes.margin_bottom_caption1,
        margin_bottom_table_caption1 = attributes.margin_bottom_table_caption1,
        margin_bottom_mobile_caption1 = attributes.margin_bottom_mobile_caption1,
        margin_bottom_info1 = attributes.margin_bottom_info1,
        margin_bottom_table_info1 = attributes.margin_bottom_table_info1,
        margin_bottom_mobile_info1 = attributes.margin_bottom_mobile_info1,
        margin_bottom_button1 = attributes.margin_bottom_button1,
        margin_bottom_table_button1 = attributes.margin_bottom_table_button1,
        margin_bottom_mobile_button1 = attributes.margin_bottom_mobile_button1,
        effectinfo1 = attributes.effectinfo1,
        df_speed_effectinfo1 = attributes.df_speed_effectinfo1,
        df_delay_effectinfo1 = attributes.df_delay_effectinfo1,
        df_repeat_effectinfo1 = attributes.df_repeat_effectinfo1,
        effectbutton1 = attributes.effectbutton1,
        df_speed_effectbutton1 = attributes.df_speed_effectbutton1,
        df_delay_effectbutton1 = attributes.df_delay_effectbutton1,
        df_repeat_effectbutton1 = attributes.df_repeat_effectbutton1,
        title1 = attributes.title1,
        fontsizetitle1 = attributes.fontsizetitle1,
        fontsizetitle1table = attributes.fontsizetitle1table,
        fontsizetitle1mobile = attributes.fontsizetitle1mobile,
        info1 = attributes.info1,
        fontsizeinfo1 = attributes.fontsizeinfo1,
        fontsizeinfo1table = attributes.fontsizeinfo1table,
        fontsizeinfo1mobile = attributes.fontsizeinfo1mobile,
        alignment_title1 = attributes.alignment_title1,
        alignment_info1 = attributes.alignment_info1,
        button1 = attributes.button1,
        fontsizebutton1 = attributes.fontsizebutton1,
        fontsizebutton1table = attributes.fontsizebutton1table,
        fontsizebutton1mobile = attributes.fontsizebutton1mobile,
        alignment_button1 = attributes.alignment_button1,
        padding_link_button1 = attributes.padding_link_button1,
        padding_right_link_button1 = attributes.padding_right_link_button1,
        border_radius_top_left_link_button1 = attributes.border_radius_top_left_link_button1,
        border_radius_top_right_link_button1 = attributes.border_radius_top_right_link_button1,
        border_radius_bottom_left_link_button1 = attributes.border_radius_bottom_left_link_button1,
        border_radius_bottom_right_link_button1 = attributes.border_radius_bottom_right_link_button1,
        border_size_link_button1 = attributes.border_size_link_button1,
        df_background_color_link_button1 = attributes.df_background_color_link_button1,
        df_background_color_hover_link_button1 = attributes.df_background_color_hover_link_button1,
        df_color_link_button1 = attributes.df_color_link_button1,
        df_color_hover_link_button1 = attributes.df_color_hover_link_button1,
        df_border_color_link_button1 = attributes.df_border_color_link_button1,
        df_background_color_transparent_link_button1 = attributes.df_background_color_transparent_link_button1,
        url = attributes.url,
        alt = attributes.alt,
        id = attributes.id,
        df_cover_img1 = attributes.df_cover_img1,
        df_focalPoint_img_1 = attributes.df_focalPoint_img_1,
        df_focalPoint_y_img_1 = attributes.df_focalPoint_y_img_1,
        df_background_color_slider_1 = attributes.df_background_color_slider_1,
        df_background_gradient_slider_1 = attributes.df_background_gradient_slider_1,
        df_enable_divide_1 = attributes.df_enable_divide_1,
        divide_1 = attributes.divide_1,
        df_color_divide_1 = attributes.df_color_divide_1,
        df_height_divide_1 = attributes.df_height_divide_1,
        bubiblock_dalay_divide_1 = attributes.bubiblock_dalay_divide_1,
        df_height_table_divide_1 = attributes.df_height_table_divide_1,
        df_height_mobile_divide_1 = attributes.df_height_mobile_divide_1,
        df_enable_divide_bottom_1 = attributes.df_enable_divide_bottom_1,
        divide_bottom_1 = attributes.divide_bottom_1,
        df_color_divide_bottom_1 = attributes.df_color_divide_bottom_1,
        df_height_divide_bottom_1 = attributes.df_height_divide_bottom_1,
        df_height_table_divide_bottom_1 = attributes.df_height_table_divide_bottom_1,
        df_height_mobile_divide_bottom_1 = attributes.df_height_mobile_divide_bottom_1,
        bubiblock_dalay_divide_1_bottom = attributes.bubiblock_dalay_divide_1_bottom,
        bubiblock_link_slider_1 = attributes.bubiblock_link_slider_1,
        bubiblock_link_tab_slider_1 = attributes.bubiblock_link_tab_slider_1,
        id1 = attributes.id1,
        df_slider_chose_2 = attributes.df_slider_chose_2,
        df_mask_slider_2 = attributes.df_mask_slider_2,
        background_color_solid_mask_2 = attributes.background_color_solid_mask_2,
        df_opacity_mask_2 = attributes.df_opacity_mask_2,
        effectcaption2 = attributes.effectcaption2,
        df_speed_effectcaption2 = attributes.df_speed_effectcaption2,
        df_delay_effectcaption2 = attributes.df_delay_effectcaption2,
        df_repeat_effectcaption2 = attributes.df_repeat_effectcaption2,
        margin_bottom_caption2 = attributes.margin_bottom_caption2,
        margin_bottom_table_caption2 = attributes.margin_bottom_table_caption2,
        margin_bottom_mobile_caption2 = attributes.margin_bottom_mobile_caption2,
        margin_bottom_info2 = attributes.margin_bottom_info2,
        margin_bottom_table_info2 = attributes.margin_bottom_table_info2,
        margin_bottom_mobile_info2 = attributes.margin_bottom_mobile_info2,
        effectinfo2 = attributes.effectinfo2,
        df_speed_effectinfo2 = attributes.df_speed_effectinfo2,
        df_delay_effectinfo2 = attributes.df_delay_effectinfo2,
        df_repeat_effectinfo2 = attributes.df_repeat_effectinfo2,
        title2 = attributes.title2,
        fontsizetitle2 = attributes.fontsizetitle2,
        fontsizetitle2table = attributes.fontsizetitle2table,
        fontsizetitle2mobile = attributes.fontsizetitle2mobile,
        info2 = attributes.info2,
        fontsizeinfo2 = attributes.fontsizeinfo2,
        fontsizeinfo2table = attributes.fontsizeinfo2table,
        fontsizeinfo2mobile = attributes.fontsizeinfo2mobile,
        margin_bottom_button2 = attributes.margin_bottom_button2,
        margin_bottom_table_button2 = attributes.margin_bottom_table_button2,
        margin_bottom_mobile_button2 = attributes.margin_bottom_mobile_button2,
        effectbutton2 = attributes.effectbutton2,
        df_speed_effectbutton2 = attributes.df_speed_effectbutton2,
        df_delay_effectbutton2 = attributes.df_delay_effectbutton2,
        df_repeat_effectbutton2 = attributes.df_repeat_effectbutton2,
        alignment_title2 = attributes.alignment_title2,
        alignment_info2 = attributes.alignment_info2,
        button2 = attributes.button2,
        fontsizebutton2 = attributes.fontsizebutton2,
        fontsizebutton2table = attributes.fontsizebutton2table,
        fontsizebutton2mobile = attributes.fontsizebutton2mobile,
        alignment_button2 = attributes.alignment_button2,
        padding_link_button2 = attributes.padding_link_button2,
        padding_right_link_button2 = attributes.padding_right_link_button2,
        border_radius_top_left_link_button2 = attributes.border_radius_top_left_link_button2,
        border_radius_top_right_link_button2 = attributes.border_radius_top_right_link_button2,
        border_radius_bottom_left_link_button2 = attributes.border_radius_bottom_left_link_button2,
        border_radius_bottom_right_link_button2 = attributes.border_radius_bottom_right_link_button2,
        border_size_link_button2 = attributes.border_size_link_button2,
        df_background_color_link_button2 = attributes.df_background_color_link_button2,
        df_background_color_hover_link_button2 = attributes.df_background_color_hover_link_button2,
        df_color_link_button2 = attributes.df_color_link_button2,
        df_color_hover_link_button2 = attributes.df_color_hover_link_button2,
        df_border_color_link_button2 = attributes.df_border_color_link_button2,
        df_background_color_transparent_link_button2 = attributes.df_background_color_transparent_link_button2,
        alt2 = attributes.alt2,
        id2 = attributes.id2,
        imageUrl_2 = attributes.imageUrl_2,
        df_cover_img2 = attributes.df_cover_img2,
        df_focalPoint_img_2 = attributes.df_focalPoint_img_2,
        df_focalPoint_y_img_2 = attributes.df_focalPoint_y_img_2,
        df_background_color_slider_2 = attributes.df_background_color_slider_2,
        df_enable_divide_2 = attributes.df_enable_divide_2,
        divide_2 = attributes.divide_2,
        df_color_divide_2 = attributes.df_color_divide_2,
        df_height_divide_2 = attributes.df_height_divide_2,
        df_height_table_divide_2 = attributes.df_height_table_divide_2,
        df_height_mobile_divide_2 = attributes.df_height_mobile_divide_2,
        bubiblock_dalay_divide_2 = attributes.bubiblock_dalay_divide_2,
        df_enable_divide_bottom_2 = attributes.df_enable_divide_bottom_2,
        divide_bottom_2 = attributes.divide_bottom_2,
        df_color_divide_bottom_2 = attributes.df_color_divide_bottom_2,
        df_height_divide_bottom_2 = attributes.df_height_divide_bottom_2,
        df_height_table_divide_bottom_2 = attributes.df_height_table_divide_bottom_2,
        df_height_mobile_divide_bottom_2 = attributes.df_height_mobile_divide_bottom_2,
        bubiblock_dalay_divide_2_bottom = attributes.bubiblock_dalay_divide_2_bottom,
        bubiblock_link_slider_2 = attributes.bubiblock_link_slider_2,
        bubiblock_link_tab_slider_2 = attributes.bubiblock_link_tab_slider_2,
        bubiblock_add_slider_3 = attributes.bubiblock_add_slider_3,
        df_slider_chose_3 = attributes.df_slider_chose_3,
        df_mask_slider_3 = attributes.df_mask_slider_3,
        background_color_solid_mask_3 = attributes.background_color_solid_mask_3,
        df_opacity_mask_3 = attributes.df_opacity_mask_3,
        effectcaption3 = attributes.effectcaption3,
        df_speed_effectcaption3 = attributes.df_speed_effectcaption3,
        df_delay_effectcaption3 = attributes.df_delay_effectcaption3,
        df_repeat_effectcaption3 = attributes.df_repeat_effectcaption3,
        margin_bottom_caption3 = attributes.margin_bottom_caption3,
        margin_bottom_table_caption3 = attributes.margin_bottom_table_caption3,
        margin_bottom_mobile_caption3 = attributes.margin_bottom_mobile_caption3,
        margin_bottom_info3 = attributes.margin_bottom_info3,
        margin_bottom_table_info3 = attributes.margin_bottom_table_info3,
        margin_bottom_mobile_info3 = attributes.margin_bottom_mobile_info3,
        effectinfo3 = attributes.effectinfo3,
        df_speed_effectinfo3 = attributes.df_speed_effectinfo3,
        df_delay_effectinfo3 = attributes.df_delay_effectinfo3,
        df_repeat_effectinfo3 = attributes.df_repeat_effectinfo3,
        title3 = attributes.title3,
        fontsizetitle3 = attributes.fontsizetitle3,
        fontsizetitle3table = attributes.fontsizetitle3table,
        fontsizetitle3mobile = attributes.fontsizetitle3mobile,
        info3 = attributes.info3,
        fontsizeinfo3 = attributes.fontsizeinfo3,
        fontsizeinfo3table = attributes.fontsizeinfo3table,
        fontsizeinfo3mobile = attributes.fontsizeinfo3mobile,
        margin_bottom_button3 = attributes.margin_bottom_button3,
        margin_bottom_table_button3 = attributes.margin_bottom_table_button3,
        margin_bottom_mobile_button3 = attributes.margin_bottom_mobile_button3,
        effectbutton3 = attributes.effectbutton3,
        df_speed_effectbutton3 = attributes.df_speed_effectbutton3,
        df_delay_effectbutton3 = attributes.df_delay_effectbutton3,
        df_repeat_effectbutton3 = attributes.df_repeat_effectbutton3,
        alignment_title3 = attributes.alignment_title3,
        alignment_info3 = attributes.alignment_info3,
        button3 = attributes.button3,
        fontsizebutton3 = attributes.fontsizebutton3,
        fontsizebutton3table = attributes.fontsizebutton3table,
        fontsizebutton3mobile = attributes.fontsizebutton3mobile,
        alignment_button3 = attributes.alignment_button3,
        padding_link_button3 = attributes.padding_link_button3,
        padding_right_link_button3 = attributes.padding_right_link_button3,
        border_radius_top_left_link_button3 = attributes.border_radius_top_left_link_button3,
        border_radius_top_right_link_button3 = attributes.border_radius_top_right_link_button3,
        border_radius_bottom_left_link_button3 = attributes.border_radius_bottom_left_link_button3,
        border_radius_bottom_right_link_button3 = attributes.border_radius_bottom_right_link_button3,
        border_size_link_button3 = attributes.border_size_link_button3,
        df_background_color_link_button3 = attributes.df_background_color_link_button3,
        df_background_color_hover_link_button3 = attributes.df_background_color_hover_link_button3,
        df_color_link_button3 = attributes.df_color_link_button3,
        df_color_hover_link_button3 = attributes.df_color_hover_link_button3,
        df_border_color_link_button3 = attributes.df_border_color_link_button3,
        df_background_color_transparent_link_button3 = attributes.df_background_color_transparent_link_button3,
        alt3 = attributes.alt3,
        id3 = attributes.id3,
        imageUrl_3 = attributes.imageUrl_3,
        df_cover_img3 = attributes.df_cover_img3,
        df_focalPoint_img_3 = attributes.df_focalPoint_img_3,
        df_focalPoint_y_img_3 = attributes.df_focalPoint_y_img_3,
        df_background_color_slider_3 = attributes.df_background_color_slider_3,
        df_enable_divide_3 = attributes.df_enable_divide_3,
        divide_3 = attributes.divide_3,
        df_color_divide_3 = attributes.df_color_divide_3,
        df_height_divide_3 = attributes.df_height_divide_3,
        df_height_table_divide_3 = attributes.df_height_table_divide_3,
        df_height_mobile_divide_3 = attributes.df_height_mobile_divide_3,
        bubiblock_dalay_divide_3 = attributes.bubiblock_dalay_divide_3,
        df_enable_divide_bottom_3 = attributes.df_enable_divide_bottom_3,
        divide_bottom_3 = attributes.divide_bottom_3,
        df_color_divide_bottom_3 = attributes.df_color_divide_bottom_3,
        df_height_divide_bottom_3 = attributes.df_height_divide_bottom_3,
        df_height_table_divide_bottom_3 = attributes.df_height_table_divide_bottom_3,
        df_height_mobile_divide_bottom_3 = attributes.df_height_mobile_divide_bottom_3,
        bubiblock_dalay_divide_3_bottom = attributes.bubiblock_dalay_divide_3_bottom,
        bubiblock_link_slider_3 = attributes.bubiblock_link_slider_3,
        bubiblock_link_tab_slider_3 = attributes.bubiblock_link_tab_slider_3,
        bubiblock_add_slider_4 = attributes.bubiblock_add_slider_4,
        df_slider_chose_4 = attributes.df_slider_chose_4,
        df_mask_slider_4 = attributes.df_mask_slider_4,
        background_color_solid_mask_4 = attributes.background_color_solid_mask_4,
        df_opacity_mask_4 = attributes.df_opacity_mask_4,
        effectcaption4 = attributes.effectcaption4,
        df_speed_effectcaption4 = attributes.df_speed_effectcaption4,
        df_delay_effectcaption4 = attributes.df_delay_effectcaption4,
        df_repeat_effectcaption4 = attributes.df_repeat_effectcaption4,
        margin_bottom_caption4 = attributes.margin_bottom_caption4,
        margin_bottom_table_caption4 = attributes.margin_bottom_table_caption4,
        margin_bottom_mobile_caption4 = attributes.margin_bottom_mobile_caption4,
        margin_bottom_info4 = attributes.margin_bottom_info4,
        margin_bottom_table_info4 = attributes.margin_bottom_table_info4,
        margin_bottom_mobile_info4 = attributes.margin_bottom_mobile_info4,
        effectinfo4 = attributes.effectinfo4,
        df_speed_effectinfo4 = attributes.df_speed_effectinfo4,
        df_delay_effectinfo4 = attributes.df_delay_effectinfo4,
        df_repeat_effectinfo4 = attributes.df_repeat_effectinfo4,
        title4 = attributes.title4,
        fontsizetitle4 = attributes.fontsizetitle4,
        fontsizetitle4table = attributes.fontsizetitle4table,
        fontsizetitle4mobile = attributes.fontsizetitle4mobile,
        info4 = attributes.info4,
        fontsizeinfo4 = attributes.fontsizeinfo4,
        fontsizeinfo4table = attributes.fontsizeinfo4table,
        fontsizeinfo4mobile = attributes.fontsizeinfo4mobile,
        margin_bottom_button4 = attributes.margin_bottom_button4,
        margin_bottom_table_button4 = attributes.margin_bottom_table_button4,
        margin_bottom_mobile_button4 = attributes.margin_bottom_mobile_button4,
        effectbutton4 = attributes.effectbutton4,
        df_speed_effectbutton4 = attributes.df_speed_effectbutton4,
        df_delay_effectbutton4 = attributes.df_delay_effectbutton4,
        df_repeat_effectbutton4 = attributes.df_repeat_effectbutton4,
        alignment_title4 = attributes.alignment_title4,
        alignment_info4 = attributes.alignment_info4,
        button4 = attributes.button4,
        fontsizebutton4 = attributes.fontsizebutton4,
        fontsizebutton4table = attributes.fontsizebutton4table,
        fontsizebutton4mobile = attributes.fontsizebutton4mobile,
        alignment_button4 = attributes.alignment_button4,
        padding_link_button4 = attributes.padding_link_button4,
        padding_right_link_button4 = attributes.padding_right_link_button4,
        border_radius_top_left_link_button4 = attributes.border_radius_top_left_link_button4,
        border_radius_top_right_link_button4 = attributes.border_radius_top_right_link_button4,
        border_radius_bottom_left_link_button4 = attributes.border_radius_bottom_left_link_button4,
        border_radius_bottom_right_link_button4 = attributes.border_radius_bottom_right_link_button4,
        border_size_link_button4 = attributes.border_size_link_button4,
        df_background_color_link_button4 = attributes.df_background_color_link_button4,
        df_background_color_hover_link_button4 = attributes.df_background_color_hover_link_button4,
        df_color_link_button4 = attributes.df_color_link_button4,
        df_color_hover_link_button4 = attributes.df_color_hover_link_button4,
        df_border_color_link_button4 = attributes.df_border_color_link_button4,
        df_background_color_transparent_link_button4 = attributes.df_background_color_transparent_link_button4,
        alt4 = attributes.alt4,
        id4 = attributes.id4,
        imageUrl_4 = attributes.imageUrl_4,
        df_cover_img4 = attributes.df_cover_img4,
        df_focalPoint_img_4 = attributes.df_focalPoint_img_4,
        df_focalPoint_y_img_4 = attributes.df_focalPoint_y_img_4,
        df_background_color_slider_4 = attributes.df_background_color_slider_4,
        df_enable_divide_4 = attributes.df_enable_divide_4,
        divide_4 = attributes.divide_4,
        df_color_divide_4 = attributes.df_color_divide_4,
        df_height_divide_4 = attributes.df_height_divide_4,
        df_height_table_divide_4 = attributes.df_height_table_divide_4,
        df_height_mobile_divide_4 = attributes.df_height_mobile_divide_4,
        bubiblock_dalay_divide_4 = attributes.bubiblock_dalay_divide_4,
        df_enable_divide_bottom_4 = attributes.df_enable_divide_bottom_4,
        divide_bottom_4 = attributes.divide_bottom_4,
        df_color_divide_bottom_4 = attributes.df_color_divide_bottom_4,
        df_height_divide_bottom_4 = attributes.df_height_divide_bottom_4,
        df_height_table_divide_bottom_4 = attributes.df_height_table_divide_bottom_4,
        df_height_mobile_divide_bottom_4 = attributes.df_height_mobile_divide_bottom_4,
        bubiblock_dalay_divide_4_bottom = attributes.bubiblock_dalay_divide_4_bottom,
        bubiblock_link_slider_4 = attributes.bubiblock_link_slider_4,
        bubiblock_link_tab_slider_4 = attributes.bubiblock_link_tab_slider_4,
        bubiblock_add_slider_5 = attributes.bubiblock_add_slider_5,
        df_slider_chose_5 = attributes.df_slider_chose_5,
        df_mask_slider_5 = attributes.df_mask_slider_5,
        background_color_solid_mask_5 = attributes.background_color_solid_mask_5,
        df_opacity_mask_5 = attributes.df_opacity_mask_5,
        effectcaption5 = attributes.effectcaption5,
        df_speed_effectcaption5 = attributes.df_speed_effectcaption5,
        df_delay_effectcaption5 = attributes.df_delay_effectcaption5,
        df_repeat_effectcaption5 = attributes.df_repeat_effectcaption5,
        margin_bottom_caption5 = attributes.margin_bottom_caption5,
        margin_bottom_table_caption5 = attributes.margin_bottom_table_caption5,
        margin_bottom_mobile_caption5 = attributes.margin_bottom_mobile_caption5,
        margin_bottom_info5 = attributes.margin_bottom_info5,
        margin_bottom_table_info5 = attributes.margin_bottom_table_info5,
        margin_bottom_mobile_info5 = attributes.margin_bottom_mobile_info5,
        effectinfo5 = attributes.effectinfo5,
        df_speed_effectinfo5 = attributes.df_speed_effectinfo5,
        df_delay_effectinfo5 = attributes.df_delay_effectinfo5,
        df_repeat_effectinfo5 = attributes.df_repeat_effectinfo5,
        title5 = attributes.title5,
        fontsizetitle5 = attributes.fontsizetitle5,
        fontsizetitle5table = attributes.fontsizetitle5table,
        fontsizetitle5mobile = attributes.fontsizetitle5mobile,
        info5 = attributes.info5,
        fontsizeinfo5 = attributes.fontsizeinfo5,
        fontsizeinfo5table = attributes.fontsizeinfo5table,
        fontsizeinfo5mobile = attributes.fontsizeinfo5mobile,
        margin_bottom_button5 = attributes.margin_bottom_button5,
        margin_bottom_table_button5 = attributes.margin_bottom_table_button5,
        margin_bottom_mobile_button5 = attributes.margin_bottom_mobile_button5,
        effectbutton5 = attributes.effectbutton5,
        df_speed_effectbutton5 = attributes.df_speed_effectbutton5,
        df_delay_effectbutton5 = attributes.df_delay_effectbutton5,
        df_repeat_effectbutton5 = attributes.df_repeat_effectbutton5,
        alignment_title5 = attributes.alignment_title5,
        alignment_info5 = attributes.alignment_info5,
        button5 = attributes.button5,
        fontsizebutton5 = attributes.fontsizebutton5,
        fontsizebutton5table = attributes.fontsizebutton5table,
        fontsizebutton5mobile = attributes.fontsizebutton5mobile,
        alignment_button5 = attributes.alignment_button5,
        padding_link_button5 = attributes.padding_link_button5,
        padding_right_link_button5 = attributes.padding_right_link_button5,
        border_radius_top_left_link_button5 = attributes.border_radius_top_left_link_button5,
        border_radius_top_right_link_button5 = attributes.border_radius_top_right_link_button5,
        border_radius_bottom_left_link_button5 = attributes.border_radius_bottom_left_link_button5,
        border_radius_bottom_right_link_button5 = attributes.border_radius_bottom_right_link_button5,
        border_size_link_button5 = attributes.border_size_link_button5,
        df_background_color_link_button5 = attributes.df_background_color_link_button5,
        df_background_color_hover_link_button5 = attributes.df_background_color_hover_link_button5,
        df_color_link_button5 = attributes.df_color_link_button5,
        df_color_hover_link_button5 = attributes.df_color_hover_link_button5,
        df_border_color_link_button5 = attributes.df_border_color_link_button5,
        df_background_color_transparent_link_button5 = attributes.df_background_color_transparent_link_button5,
        alt5 = attributes.alt5,
        id5 = attributes.id5,
        imageUrl_5 = attributes.imageUrl_5,
        df_cover_img5 = attributes.df_cover_img5,
        df_focalPoint_img_5 = attributes.df_focalPoint_img_5,
        df_focalPoint_y_img_5 = attributes.df_focalPoint_y_img_5,
        df_background_color_slider_5 = attributes.df_background_color_slider_5,
        df_enable_divide_5 = attributes.df_enable_divide_5,
        divide_5 = attributes.divide_5,
        df_color_divide_5 = attributes.df_color_divide_5,
        df_height_divide_5 = attributes.df_height_divide_5,
        df_height_table_divide_5 = attributes.df_height_table_divide_5,
        df_height_mobile_divide_5 = attributes.df_height_mobile_divide_5,
        bubiblock_dalay_divide_5 = attributes.bubiblock_dalay_divide_5,
        df_enable_divide_bottom_5 = attributes.df_enable_divide_bottom_5,
        divide_bottom_5 = attributes.divide_bottom_5,
        df_color_divide_bottom_5 = attributes.df_color_divide_bottom_5,
        df_height_divide_bottom_5 = attributes.df_height_divide_bottom_5,
        df_height_table_divide_bottom_5 = attributes.df_height_table_divide_bottom_5,
        df_height_mobile_divide_bottom_5 = attributes.df_height_mobile_divide_bottom_5,
        bubiblock_dalay_divide_5_bottom = attributes.bubiblock_dalay_divide_5_bottom,
        bubiblock_link_slider_5 = attributes.bubiblock_link_slider_5,
        bubiblock_link_tab_slider_5 = attributes.bubiblock_link_tab_slider_5;
    return wp.element.createElement("div", {
      id: 'carouselDFControlslider' + bubiblock_id_slider,
      className: 'df_height_carousel_block bubiblock_on_slider_desktop' + bubiblock_show_slider_desktop + ' bubiblock_on_slider_table' + bubiblock_show_slider_table + ' bubiblock_on_slider_mobile' + bubiblock_show_slider_mobile + ' carousel slide caption-animate touch' + bubiblock_carousle_touch + ' ' + df_effect_slider + ' ' + df_pause_slider,
      "data-ride": "carousel",
      "data-interval": df_interval_slider,
      style: {
        background: bubiblock_background_color_slider
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2389,
        columnNumber: 13
      }
    }, wp.element.createElement("ol", {
      className: df_dot_slider + ' ' + df_dot_slider_table + ' ' + df_dot_slider_mobile + ' carousel-indicators prog' + bubiblock_progress_dot_enable + ' diff' + bubiblock_height_dot_active_enable,
      style: {
        bottom: df_bottom_dot
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2390,
        columnNumber: 21
      }
    }, wp.element.createElement("li", {
      "data-target": '#carouselDFControlslider' + bubiblock_id_slider,
      "data-slide-to": "0",
      className: 'active ' + df_dot_slider_type,
      style: {
        maxWidth: df_width_dot + 'px',
        height: df_height_dot + 'px',
        marginLeft: df_spacing_dot + 'px',
        marginRight: df_spacing_dot + 'px',
        backgroundColor: df_color_dot
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2391,
        columnNumber: 25
      }
    }), wp.element.createElement("li", {
      "data-target": '#carouselDFControlslider' + bubiblock_id_slider,
      "data-slide-to": "1",
      className: df_dot_slider_type,
      style: {
        maxWidth: df_width_dot + 'px',
        height: df_height_dot + 'px',
        marginLeft: df_spacing_dot + 'px',
        marginRight: df_spacing_dot + 'px',
        backgroundColor: df_color_dot
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2392,
        columnNumber: 25
      }
    }), bubiblock_add_slider_3 && wp.element.createElement("li", {
      "data-target": '#carouselDFControlslider' + bubiblock_id_slider,
      "data-slide-to": "2",
      className: df_dot_slider_type,
      style: {
        maxWidth: df_width_dot + 'px',
        height: df_height_dot + 'px',
        marginLeft: df_spacing_dot + 'px',
        marginRight: df_spacing_dot + 'px',
        backgroundColor: df_color_dot
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2394,
        columnNumber: 29
      }
    }), bubiblock_add_slider_4 && wp.element.createElement("li", {
      "data-target": '#carouselDFControlslider' + bubiblock_id_slider,
      "data-slide-to": "3",
      className: df_dot_slider_type,
      style: {
        maxWidth: df_width_dot + 'px',
        height: df_height_dot + 'px',
        marginLeft: df_spacing_dot + 'px',
        marginRight: df_spacing_dot + 'px',
        backgroundColor: df_color_dot
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2397,
        columnNumber: 29
      }
    }), bubiblock_add_slider_5 && wp.element.createElement("li", {
      "data-target": '#carouselDFControlslider' + bubiblock_id_slider,
      "data-slide-to": "4",
      className: df_dot_slider_type,
      style: {
        maxWidth: df_width_dot + 'px',
        height: df_height_dot + 'px',
        marginLeft: df_spacing_dot + 'px',
        marginRight: df_spacing_dot + 'px',
        backgroundColor: df_color_dot
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2400,
        columnNumber: 29
      }
    })), wp.element.createElement("div", {
      className: 'carousel-inner',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2403,
        columnNumber: 21
      }
    }, bubi_block_content_slider == 'bubiblock-block-slider' == !(bubi_block_content_slider == 'bubiblock-blockcontent-slider') && wp.element.createElement("div", {
      className: 'bubiblock-block',
      style: {
        backgroundColor: bubiblock_background_color_block_slider,
        opacity: bubiopacityblock_slider
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2405,
        columnNumber: 25
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2406,
        columnNumber: 29
      }
    })), wp.element.createElement("div", {
      className: 'carousel-item ' + df_effect_slider + ' ' + bubiblock_id_slider + ' active ',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2409,
        columnNumber: 25
      }
    }, df_enable_divide_1 && wp.element.createElement("div", {
      className: 'df-divide-1',
      style: {
        color: df_color_divide_1
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2411,
        columnNumber: 33
      }
    }, divide_1 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2413,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2413,
        columnNumber: 145
      }
    })), divide_1 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2416,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2416,
        columnNumber: 121
      }
    })), divide_1 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2419,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2419,
        columnNumber: 121
      }
    })), divide_1 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2422,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2422,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2422,
        columnNumber: 127
      }
    })))), df_enable_divide_bottom_1 && wp.element.createElement("div", {
      className: 'df-divide-bottom-1',
      style: {
        color: df_color_divide_bottom_1
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2427,
        columnNumber: 33
      }
    }, divide_bottom_1 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip-bottom',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2429,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2429,
        columnNumber: 152
      }
    })), divide_bottom_1 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2432,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2432,
        columnNumber: 121
      }
    })), divide_bottom_1 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2435,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2435,
        columnNumber: 121
      }
    })), divide_bottom_1 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2438,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2438,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2438,
        columnNumber: 127
      }
    })))), df_slider_chose_1 == 'df-slider-image-1' && wp.element.createElement(wp.element.Fragment, null, url && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("a", {
      href: bubiblock_link_slider_1,
      target: bubiblock_link_tab_slider_1,
      rel: "noopener",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2446,
        columnNumber: 33
      }
    }, wp.element.createElement("img", {
      src: url,
      alt: alt,
      className: 'img-cap',
      style: {
        objectFit: df_cover_img1,
        objectPosition: df_focalPoint_img_1 + '% ' + df_focalPoint_y_img_1 + '%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2447,
        columnNumber: 37
      }
    }), df_mask_slider_1 && wp.element.createElement("div", {
      className: 'mask',
      style: {
        backgroundColor: background_color_solid_mask_1,
        opacity: df_opacity_mask_1
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2449,
        columnNumber: 37
      }
    })))), df_slider_chose_1 == 'df-slider-color-1' && wp.element.createElement(wp.element.Fragment, null, df_background_gradient_slider_1 + df_background_color_slider_1 ? wp.element.createElement("div", {
      className: 'df-slider-color bubiblock-color-slider-item',
      style: {
        background: df_background_gradient_slider_1,
        backgroundColor: df_background_color_slider_1
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2459,
        columnNumber: 37
      }
    }) : wp.element.createElement("div", {
      className: 'df-color-default-background-slider bubiblock-color-slider-item',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2461,
        columnNumber: 37
      }
    })), bubi_block_content_slider == 'bubiblock-content-slider' == !(bubi_block_content_slider == 'bubiblock-blockcontent-slider') && wp.element.createElement("div", {
      className: 'carousel-caption caption-1',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2466,
        columnNumber: 33
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-slider-row',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2467,
        columnNumber: 37
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-col-md-8',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2468,
        columnNumber: 41
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__title ' + df_repeat_effectcaption1 + ' ' + df_delay_effectcaption1 + ' ' + df_speed_effectcaption1 + ' ' + effectcaption1,
      tagName: "h4",
      style: {
        textAlign: alignment_title1,
        fontSize: fontsizetitle1 + 'px',
        bottom: margin_bottom_caption1 + 'px'
      },
      value: title1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2469,
        columnNumber: 45
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'bubiblock-p-capt wp-block-bubiblock-slider-slider__info ' + df_repeat_effectinfo1 + ' ' + df_delay_effectinfo1 + ' ' + df_speed_effectinfo1 + ' ' + effectinfo1,
      tagName: "p",
      value: info1,
      style: {
        textAlign: alignment_info1,
        fontSize: fontsizeinfo1 + 'px',
        bottom: margin_bottom_info1 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2475,
        columnNumber: 45
      }
    }), button1 && wp.element.createElement("div", {
      className: 'link-button-1 ' + df_repeat_effectbutton1 + ' ' + df_delay_effectbutton1 + ' ' + df_speed_effectbutton1 + ' ' + effectbutton1,
      style: {
        textAlign: alignment_button1,
        bottom: margin_bottom_button1 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2482,
        columnNumber: 49
      }
    }, wp.element.createElement("button", {
      className: 'button-slider ' + df_background_color_transparent_link_button1,
      style: {
        paddingTop: padding_link_button1 + 'px',
        paddingBottom: padding_link_button1 + 'px',
        paddingLeft: padding_right_link_button1 + 'px',
        paddingRight: padding_right_link_button1 + 'px',
        borderTopLeftRadius: border_radius_top_left_link_button1 + 'px',
        borderTopRightRadius: border_radius_top_right_link_button1 + 'px',
        borderBottomLeftRadius: border_radius_bottom_left_link_button1 + 'px',
        borderBottomRightRadius: border_radius_bottom_right_link_button1 + 'px',
        border: border_size_link_button1 + 'px solid' + df_border_color_link_button1,
        backgroundColor: df_background_color_link_button1,
        background: df_background_color_link_button1
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2483,
        columnNumber: 53
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__link',
      tagName: "p",
      value: button1,
      style: {
        fontSize: fontsizebutton1 + 'px',
        color: df_color_link_button1
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2498,
        columnNumber: 57
      }
    }))))))), wp.element.createElement("div", {
      className: 'carousel-item ' + df_effect_slider + ' ' + bubiblock_id_slider,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2513,
        columnNumber: 25
      }
    }, df_enable_divide_2 && wp.element.createElement("div", {
      className: 'df-divide-2',
      style: {
        color: df_color_divide_2
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2515,
        columnNumber: 33
      }
    }, divide_2 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2517,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2517,
        columnNumber: 145
      }
    })), divide_2 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2520,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2520,
        columnNumber: 121
      }
    })), divide_2 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2523,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2523,
        columnNumber: 121
      }
    })), divide_2 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2526,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2526,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2526,
        columnNumber: 127
      }
    })))), df_enable_divide_bottom_2 && wp.element.createElement("div", {
      className: 'df-divide-bottom-2',
      style: {
        color: df_color_divide_bottom_2
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2531,
        columnNumber: 33
      }
    }, divide_bottom_2 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip-bottom',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2533,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2533,
        columnNumber: 152
      }
    })), divide_bottom_2 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2536,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2536,
        columnNumber: 121
      }
    })), divide_bottom_2 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2539,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2539,
        columnNumber: 121
      }
    })), divide_bottom_2 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2542,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2542,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2542,
        columnNumber: 127
      }
    })))), df_slider_chose_2 == 'df-slider-image-2' && wp.element.createElement(wp.element.Fragment, null, imageUrl_2 && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("a", {
      href: bubiblock_link_slider_2,
      target: bubiblock_link_tab_slider_2,
      rel: "noopener",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2550,
        columnNumber: 37
      }
    }, wp.element.createElement("img", {
      src: imageUrl_2,
      alt: alt2,
      className: 'img-cap image-slider-2',
      style: {
        objectFit: df_cover_img2,
        objectPosition: df_focalPoint_img_2 + '% ' + df_focalPoint_y_img_2 + '%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2551,
        columnNumber: 41
      }
    }), df_mask_slider_2 && wp.element.createElement("div", {
      className: 'mask',
      style: {
        backgroundColor: background_color_solid_mask_2,
        opacity: df_opacity_mask_2
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2553,
        columnNumber: 41
      }
    })))), df_slider_chose_2 == 'df-slider-color-2' && wp.element.createElement(wp.element.Fragment, null, df_background_color_slider_2 ? wp.element.createElement("div", {
      className: 'df-slider-color bubiblock-color-slider-item',
      style: {
        backgroundColor: df_background_color_slider_2
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2563,
        columnNumber: 37
      }
    }) : wp.element.createElement("div", {
      className: 'df-color-default-background-slider-2 bubiblock-color-slider-item',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2565,
        columnNumber: 37
      }
    })), bubi_block_content_slider == 'bubiblock-content-slider' == !(bubi_block_content_slider == 'bubiblock-blockcontent-slider') && wp.element.createElement("div", {
      className: 'carousel-caption caption-2',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2570,
        columnNumber: 33
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-slider-row',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2571,
        columnNumber: 37
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-col-md-8',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2572,
        columnNumber: 41
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__title_2 ' + df_repeat_effectcaption2 + ' ' + df_delay_effectcaption2 + ' ' + df_speed_effectcaption2 + ' ' + effectcaption2,
      tagName: "h4",
      style: {
        textAlign: alignment_title2,
        fontSize: fontsizetitle2 + 'px',
        bottom: margin_bottom_caption2 + 'px'
      },
      value: title2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2573,
        columnNumber: 45
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'bubiblock-p-capt wp-block-bubiblock-slider-slider__info_2 ' + df_repeat_effectinfo2 + ' ' + df_delay_effectinfo2 + ' ' + df_speed_effectinfo2 + ' ' + effectinfo2,
      tagName: "p",
      value: info2,
      style: {
        textAlign: alignment_info2,
        fontSize: fontsizeinfo2 + 'px',
        bottom: margin_bottom_info2 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2579,
        columnNumber: 45
      }
    }), button2 && wp.element.createElement("div", {
      className: 'link-button-2 ' + df_repeat_effectbutton2 + ' ' + df_delay_effectbutton2 + ' ' + df_speed_effectbutton2 + ' ' + effectbutton2,
      style: {
        textAlign: alignment_button2,
        bottom: margin_bottom_button2 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2586,
        columnNumber: 49
      }
    }, wp.element.createElement("button", {
      className: 'button-slider2 ' + df_background_color_transparent_link_button2,
      style: {
        paddingTop: padding_link_button2 + 'px',
        paddingBottom: padding_link_button2 + 'px',
        paddingLeft: padding_right_link_button2 + 'px',
        paddingRight: padding_right_link_button2 + 'px',
        borderTopLeftRadius: border_radius_top_left_link_button2 + 'px',
        borderTopRightRadius: border_radius_top_right_link_button2 + 'px',
        borderBottomLeftRadius: border_radius_bottom_left_link_button2 + 'px',
        borderBottomRightRadius: border_radius_bottom_right_link_button2 + 'px',
        border: border_size_link_button2 + 'px solid' + df_border_color_link_button2,
        backgroundColor: df_background_color_link_button2,
        background: df_background_color_link_button2
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2587,
        columnNumber: 53
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__link_2',
      tagName: "p",
      value: button2,
      style: {
        fontSize: fontsizebutton2 + 'px',
        color: df_color_link_button2
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2603,
        columnNumber: 57
      }
    }))))))), bubiblock_add_slider_3 && // Slider 3
    wp.element.createElement("div", {
      className: 'carousel-item ' + df_effect_slider,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2619,
        columnNumber: 25
      }
    }, df_enable_divide_3 && wp.element.createElement("div", {
      className: 'df-divide-3',
      style: {
        color: df_color_divide_3
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2621,
        columnNumber: 33
      }
    }, divide_3 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2623,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2623,
        columnNumber: 145
      }
    })), divide_3 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2626,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2626,
        columnNumber: 121
      }
    })), divide_3 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2629,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2629,
        columnNumber: 121
      }
    })), divide_3 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2632,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2632,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2632,
        columnNumber: 127
      }
    })))), df_enable_divide_bottom_3 && wp.element.createElement("div", {
      className: 'df-divide-bottom-3',
      style: {
        color: df_color_divide_bottom_3
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2637,
        columnNumber: 33
      }
    }, divide_bottom_3 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip-bottom',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2639,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2639,
        columnNumber: 152
      }
    })), divide_bottom_3 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2642,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2642,
        columnNumber: 121
      }
    })), divide_bottom_3 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2645,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2645,
        columnNumber: 121
      }
    })), divide_bottom_3 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2648,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2648,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2648,
        columnNumber: 127
      }
    })))), df_slider_chose_3 == 'df-slider-image-3' && wp.element.createElement(wp.element.Fragment, null, imageUrl_3 && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("a", {
      href: bubiblock_link_slider_3,
      target: bubiblock_link_tab_slider_3,
      rel: "noopener",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2656,
        columnNumber: 37
      }
    }, wp.element.createElement("img", {
      src: imageUrl_3,
      alt: alt3,
      className: 'img-cap image-slider-3',
      style: {
        objectFit: df_cover_img3,
        objectPosition: df_focalPoint_img_3 + '% ' + df_focalPoint_y_img_3 + '%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2657,
        columnNumber: 41
      }
    }), df_mask_slider_3 && wp.element.createElement("div", {
      className: 'mask',
      style: {
        backgroundColor: background_color_solid_mask_3,
        opacity: df_opacity_mask_3
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2659,
        columnNumber: 41
      }
    })))), df_slider_chose_3 == 'df-slider-color-3' && wp.element.createElement(wp.element.Fragment, null, df_background_color_slider_3 ? wp.element.createElement("div", {
      className: 'df-slider-color bubiblock-color-slider-item',
      style: {
        backgroundColor: df_background_color_slider_3
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2669,
        columnNumber: 37
      }
    }) : wp.element.createElement("div", {
      className: 'df-color-default-background-slider bubiblock-color-slider-item',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2671,
        columnNumber: 37
      }
    })), bubi_block_content_slider == 'bubiblock-content-slider' == !(bubi_block_content_slider == 'bubiblock-blockcontent-slider') && wp.element.createElement("div", {
      className: 'carousel-caption caption-3',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2676,
        columnNumber: 33
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-slider-row',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2677,
        columnNumber: 37
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-col-md-8',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2678,
        columnNumber: 41
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__title_3 ' + df_repeat_effectcaption3 + ' ' + df_delay_effectcaption3 + ' ' + df_speed_effectcaption3 + ' ' + effectcaption3,
      tagName: "h4",
      style: {
        textAlign: alignment_title3,
        fontSize: fontsizetitle3 + 'px',
        bottom: margin_bottom_caption3 + 'px'
      },
      value: title3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2679,
        columnNumber: 45
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'bubiblock-p-capt wp-block-bubiblock-slider-slider__info_3 ' + df_repeat_effectinfo3 + ' ' + df_delay_effectinfo3 + ' ' + df_speed_effectinfo3 + ' ' + effectinfo3,
      tagName: "p",
      value: info3,
      style: {
        textAlign: alignment_info3,
        fontSize: fontsizeinfo3 + 'px',
        bottom: margin_bottom_info3 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2685,
        columnNumber: 45
      }
    }), button3 && wp.element.createElement("div", {
      className: 'link-button-3 ' + df_repeat_effectbutton3 + ' ' + df_delay_effectbutton3 + ' ' + df_speed_effectbutton3 + ' ' + effectbutton3,
      style: {
        textAlign: alignment_button3,
        bottom: margin_bottom_button3 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2692,
        columnNumber: 49
      }
    }, wp.element.createElement("button", {
      className: 'button-slider3 ' + df_background_color_transparent_link_button3,
      style: {
        paddingTop: padding_link_button3 + 'px',
        paddingBottom: padding_link_button3 + 'px',
        paddingLeft: padding_right_link_button3 + 'px',
        paddingRight: padding_right_link_button3 + 'px',
        borderTopLeftRadius: border_radius_top_left_link_button3 + 'px',
        borderTopRightRadius: border_radius_top_right_link_button3 + 'px',
        borderBottomLeftRadius: border_radius_bottom_left_link_button3 + 'px',
        borderBottomRightRadius: border_radius_bottom_right_link_button3 + 'px',
        border: border_size_link_button3 + 'px solid' + df_border_color_link_button3,
        backgroundColor: df_background_color_link_button3,
        background: df_background_color_link_button3
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2693,
        columnNumber: 53
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__link_3',
      tagName: "p",
      value: button3,
      style: {
        fontSize: fontsizebutton3 + 'px',
        color: df_color_link_button3
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2709,
        columnNumber: 57
      }
    }))))))), bubiblock_add_slider_4 && // Slider 4
    wp.element.createElement("div", {
      className: 'carousel-item ' + df_effect_slider,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2726,
        columnNumber: 25
      }
    }, df_enable_divide_4 && wp.element.createElement("div", {
      className: 'df-divide-4',
      style: {
        color: df_color_divide_4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2728,
        columnNumber: 33
      }
    }, divide_4 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2730,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2730,
        columnNumber: 145
      }
    })), divide_4 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2733,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2733,
        columnNumber: 121
      }
    })), divide_4 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2736,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2736,
        columnNumber: 121
      }
    })), divide_4 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2739,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2739,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2739,
        columnNumber: 127
      }
    })))), df_enable_divide_bottom_4 && wp.element.createElement("div", {
      className: 'df-divide-bottom-4',
      style: {
        color: df_color_divide_bottom_4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2744,
        columnNumber: 33
      }
    }, divide_bottom_4 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip-bottom',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2746,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2746,
        columnNumber: 152
      }
    })), divide_bottom_4 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2749,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2749,
        columnNumber: 121
      }
    })), divide_bottom_4 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2752,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2752,
        columnNumber: 121
      }
    })), divide_bottom_4 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2755,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2755,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2755,
        columnNumber: 127
      }
    })))), df_slider_chose_4 == 'df-slider-image-4' && wp.element.createElement(wp.element.Fragment, null, imageUrl_4 && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("a", {
      href: bubiblock_link_slider_4,
      target: bubiblock_link_tab_slider_4,
      rel: "noopener",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2763,
        columnNumber: 37
      }
    }, wp.element.createElement("img", {
      src: imageUrl_4,
      alt: alt4,
      className: 'img-cap image-slider-4',
      style: {
        objectFit: df_cover_img4,
        objectPosition: df_focalPoint_img_4 + '% ' + df_focalPoint_y_img_4 + '%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2764,
        columnNumber: 41
      }
    }), df_mask_slider_4 && wp.element.createElement("div", {
      className: 'mask',
      style: {
        backgroundColor: background_color_solid_mask_4,
        opacity: df_opacity_mask_4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2766,
        columnNumber: 41
      }
    })))), df_slider_chose_4 == 'df-slider-color-4' && wp.element.createElement(wp.element.Fragment, null, df_background_color_slider_4 ? wp.element.createElement("div", {
      className: 'df-slider-color bubiblock-color-slider-item',
      style: {
        backgroundColor: df_background_color_slider_4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2776,
        columnNumber: 37
      }
    }) : wp.element.createElement("div", {
      className: 'df-color-default-background-slider-2 bubiblock-color-slider-item',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2778,
        columnNumber: 37
      }
    })), bubi_block_content_slider == 'bubiblock-content-slider' == !(bubi_block_content_slider == 'bubiblock-blockcontent-slider') && wp.element.createElement("div", {
      className: 'carousel-caption caption-4',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2783,
        columnNumber: 33
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-slider-row',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2784,
        columnNumber: 37
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-col-md-8',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2785,
        columnNumber: 41
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__title_4 ' + df_repeat_effectcaption4 + ' ' + df_delay_effectcaption4 + ' ' + df_speed_effectcaption4 + ' ' + effectcaption4,
      tagName: "h4",
      style: {
        textAlign: alignment_title4,
        fontSize: fontsizetitle4 + 'px',
        bottom: margin_bottom_caption4 + 'px'
      },
      value: title4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2786,
        columnNumber: 45
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'bubiblock-p-capt wp-block-bubiblock-slider-slider__info_4 ' + df_repeat_effectinfo4 + ' ' + df_delay_effectinfo4 + ' ' + df_speed_effectinfo4 + ' ' + effectinfo4,
      tagName: "p",
      value: info4,
      style: {
        textAlign: alignment_info4,
        fontSize: fontsizeinfo4 + 'px',
        bottom: margin_bottom_info4 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2792,
        columnNumber: 45
      }
    }), button4 && wp.element.createElement("div", {
      className: 'link-button-4 ' + df_repeat_effectbutton4 + ' ' + df_delay_effectbutton4 + ' ' + df_speed_effectbutton4 + ' ' + effectbutton4,
      style: {
        textAlign: alignment_button4,
        bottom: margin_bottom_button4 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2799,
        columnNumber: 49
      }
    }, wp.element.createElement("button", {
      className: 'button-slider4 ' + df_background_color_transparent_link_button4,
      style: {
        paddingTop: padding_link_button4 + 'px',
        paddingBottom: padding_link_button4 + 'px',
        paddingLeft: padding_right_link_button4 + 'px',
        paddingRight: padding_right_link_button4 + 'px',
        borderTopLeftRadius: border_radius_top_left_link_button4 + 'px',
        borderTopRightRadius: border_radius_top_right_link_button4 + 'px',
        borderBottomLeftRadius: border_radius_bottom_left_link_button4 + 'px',
        borderBottomRightRadius: border_radius_bottom_right_link_button4 + 'px',
        border: border_size_link_button4 + 'px solid' + df_border_color_link_button4,
        backgroundColor: df_background_color_link_button4,
        background: df_background_color_link_button4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2800,
        columnNumber: 53
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__link_4',
      tagName: "p",
      value: button4,
      style: {
        fontSize: fontsizebutton4 + 'px',
        color: df_color_link_button4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2816,
        columnNumber: 57
      }
    }))))))), bubiblock_add_slider_5 && // Slider 5
    wp.element.createElement("div", {
      className: 'carousel-item ' + df_effect_slider,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2832,
        columnNumber: 25
      }
    }, df_enable_divide_5 && wp.element.createElement("div", {
      className: 'df-divide-5',
      style: {
        color: df_color_divide_5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2834,
        columnNumber: 33
      }
    }, divide_5 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2836,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2836,
        columnNumber: 145
      }
    })), divide_5 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2839,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2839,
        columnNumber: 121
      }
    })), divide_5 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2842,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2842,
        columnNumber: 121
      }
    })), divide_5 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2845,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2845,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2845,
        columnNumber: 127
      }
    })))), df_enable_divide_bottom_5 && wp.element.createElement("div", {
      className: 'df-divide-bottom-5',
      style: {
        color: df_color_divide_bottom_5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2850,
        columnNumber: 33
      }
    }, divide_bottom_5 == 'svg-1' && wp.element.createElement("svg", {
      className: 'df-flip-bottom',
      viewBox: "0 0 1000 100",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2852,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M1000,40c0,0 -120.077,-38.076 -250,-38c-129.923,0.076 -345.105,78 -500,78c-154.895,0 -250,-30 -250,-30l0,50l1000,0l0,-60Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2852,
        columnNumber: 152
      }
    })), divide_bottom_5 == 'svg-2' && wp.element.createElement("svg", {
      viewBox: "0 0 500 65",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2855,
        columnNumber: 41
      }
    }, wp.element.createElement("polygon", {
      points: "500 0 0 0 0 65 250 25 500 65 500 0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2855,
        columnNumber: 121
      }
    })), divide_bottom_5 == 'svg-3' && wp.element.createElement("svg", {
      viewBox: "0 0 500 81",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2858,
        columnNumber: 41
      }
    }, wp.element.createElement("path", {
      d: "M0,45.68C59,60,146,81.07,250,81c103-.07,192-19,250-35.32V0H0Z",
      transform: "translate(0 0)",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2858,
        columnNumber: 121
      }
    })), divide_bottom_5 == 'svg-4' && wp.element.createElement("svg", {
      viewBox: "0 0 500 46.42",
      height: "100%",
      width: "100%",
      preserveAspectRatio: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2861,
        columnNumber: 41
      }
    }, wp.element.createElement("g", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2861,
        columnNumber: 124
      }
    }, wp.element.createElement("path", {
      d: "M500,22.64s-194.23,1.13-213,5.44c-34.74,8-37,18.34-37,18.34s-2-11.25-30.5-18.24C198.56,23.05,0,22.64,0,22.64V0H500Z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2861,
        columnNumber: 127
      }
    })))), df_slider_chose_5 == 'df-slider-image-5' && wp.element.createElement(wp.element.Fragment, null, imageUrl_5 && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("a", {
      href: bubiblock_link_slider_5,
      target: bubiblock_link_tab_slider_5,
      rel: "noopener",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2869,
        columnNumber: 37
      }
    }, wp.element.createElement("img", {
      src: imageUrl_5,
      alt: alt5,
      className: 'img-cap image-slider-5',
      style: {
        objectFit: df_cover_img5,
        objectPosition: df_focalPoint_img_5 + '% ' + df_focalPoint_y_img_5 + '%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2870,
        columnNumber: 41
      }
    }), df_mask_slider_5 && wp.element.createElement("div", {
      className: 'mask',
      style: {
        backgroundColor: background_color_solid_mask_5,
        opacity: df_opacity_mask_5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2872,
        columnNumber: 41
      }
    })))), df_slider_chose_5 == 'df-slider-color-5' && wp.element.createElement(wp.element.Fragment, null, df_background_color_slider_5 ? wp.element.createElement("div", {
      className: 'df-slider-color bubiblock-color-slider-item',
      style: {
        backgroundColor: df_background_color_slider_5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2882,
        columnNumber: 37
      }
    }) : wp.element.createElement("div", {
      className: 'df-color-default-background-slider bubiblock-color-slider-item',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2884,
        columnNumber: 37
      }
    })), bubi_block_content_slider == 'bubiblock-content-slider' == !(bubi_block_content_slider == 'bubiblock-blockcontent-slider') && wp.element.createElement("div", {
      className: 'carousel-caption caption-5',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2889,
        columnNumber: 33
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-slider-row',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2890,
        columnNumber: 37
      }
    }, wp.element.createElement("div", {
      className: 'bubiblock-col-md-8',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2891,
        columnNumber: 41
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__title_5 ' + df_repeat_effectcaption5 + ' ' + df_delay_effectcaption5 + ' ' + df_speed_effectcaption5 + ' ' + effectcaption5,
      tagName: "h4",
      style: {
        textAlign: alignment_title5,
        fontSize: fontsizetitle5 + 'px',
        bottom: margin_bottom_caption5 + 'px'
      },
      value: title5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2892,
        columnNumber: 45
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'bubiblock-p-capt wp-block-bubiblock-slider-slider__info_5 ' + df_repeat_effectinfo5 + ' ' + df_delay_effectinfo5 + ' ' + df_speed_effectinfo5 + ' ' + effectinfo5,
      tagName: "p",
      value: info5,
      style: {
        textAlign: alignment_info5,
        fontSize: fontsizeinfo5 + 'px',
        bottom: margin_bottom_info5 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2898,
        columnNumber: 45
      }
    }), button5 && wp.element.createElement("div", {
      className: 'link-button-5 ' + df_repeat_effectbutton5 + ' ' + df_delay_effectbutton5 + ' ' + df_speed_effectbutton5 + ' ' + effectbutton5,
      style: {
        textAlign: alignment_button5,
        bottom: margin_bottom_button5 + 'px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2905,
        columnNumber: 49
      }
    }, wp.element.createElement("button", {
      className: 'button-slider5 ' + df_background_color_transparent_link_button5,
      style: {
        paddingTop: padding_link_button5 + 'px',
        paddingBottom: padding_link_button5 + 'px',
        paddingLeft: padding_right_link_button5 + 'px',
        paddingRight: padding_right_link_button5 + 'px',
        borderTopLeftRadius: border_radius_top_left_link_button5 + 'px',
        borderTopRightRadius: border_radius_top_right_link_button5 + 'px',
        borderBottomLeftRadius: border_radius_bottom_left_link_button5 + 'px',
        borderBottomRightRadius: border_radius_bottom_right_link_button5 + 'px',
        border: border_size_link_button5 + 'px solid' + df_border_color_link_button5,
        backgroundColor: df_background_color_link_button5,
        background: df_background_color_link_button5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2906,
        columnNumber: 53
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: 'wp-block-bubiblock-slider-slider__link_5',
      tagName: "p",
      value: button5,
      style: {
        fontSize: fontsizebutton5 + 'px',
        color: df_color_link_button5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2922,
        columnNumber: 57
      }
    })))))))), wp.element.createElement("a", {
      className: 'carousel-control-prev df-carousel-control-prev bubi-img-3 ' + bubi_arrow_position + ' ' + df_arrow_slider + ' ' + df_arrow_slider_table + ' ' + df_arrow_slider_mobile,
      type: "button",
      "data-target": '#carouselDFControlslider' + bubiblock_id_slider,
      "data-slide": "prev",
      style: {
        left: bubi_marginarrow + 'px',
        opacity: bubiopacityarrow
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2938,
        columnNumber: 21
      }
    }, wp.element.createElement("i", {
      className: 'bubi-icon ' + df_arrow_slider_type,
      style: {
        color: df_color_arrow,
        padding: df_padding_arrow,
        borderRadius: df_radius_arrow,
        fontSize: df_size_arrow
      },
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2939,
        columnNumber: 25
      }
    })), wp.element.createElement("a", {
      className: 'carousel-control-next df-carousel-control-next bubi-img-3 ' + bubi_arrow_position + ' ' + df_arrow_slider + ' ' + df_arrow_slider_table + ' ' + df_arrow_slider_mobile,
      type: "button",
      "data-target": '#carouselDFControlslider' + bubiblock_id_slider,
      "data-slide": "next",
      style: {
        right: bubi_marginarrow + 'px',
        opacity: bubiopacityarrow
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2941,
        columnNumber: 21
      }
    }, wp.element.createElement("i", {
      className: 'bubi-icon ' + df_arrow_slider_type,
      style: {
        color: df_color_arrow,
        padding: df_padding_arrow,
        borderRadius: df_radius_arrow,
        fontSize: df_size_arrow
      },
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2942,
        columnNumber: 25
      }
    })), wp.element.createElement("style", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2944,
        columnNumber: 17
      }
    }, "\n                        #carouselDFControlslider" + bubiblock_id_slider + "{\n                            padding-left:" + bubiblock_padding_slider + "px;\n                            padding-right:" + bubiblock_padding_slider + "px;\n                            padding-top:" + bubiblock_padding_b_slider + "px;\n                            padding-bottom:" + bubiblock_padding_b_slider + "px;\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .carousel-caption{\n                            margin-left:" + bubiblock_padding_caption + "px;\n                        }\n                        @media only screen and (max-width: 767px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-caption{\n                                margin-left:" + bubiblock_padding_table_caption + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + "{\n                                padding-left:" + bubiblock_padding_table_slider + "px;\n                                padding-right:" + bubiblock_padding_table_slider + "px;\n                                padding-top:" + bubiblock_padding_b_table_slider + "px;\n                                padding-bottom:" + bubiblock_padding_b_table_slider + "px;\n                            }\n                        }\n                        @media only screen and (max-width: 480px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-caption{\n                                margin-left:" + bubiblock_padding_mobile_caption + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + "{\n                                padding-left:" + bubiblock_padding_mobile_slider + "px;\n                                padding-right:" + bubiblock_padding_mobile_slider + "px;\n                                padding-top:" + bubiblock_padding_b_mobile_slider + "px;\n                                padding-bottom:" + bubiblock_padding_b_mobile_slider + "px;\n                            }\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .df_height_carousel_block.bubiblock_on_slider_desktopfalse{\n                            display:none;\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .df_height_carousel_block.bubiblock_on_slider_desktoptrue{\n                            display:block;\n                        }\n                        @media only screen and (max-width: 767px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df_height_carousel_block.bubiblock_on_slider_tablefalse{\n                                display:none;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df_height_carousel_block.bubiblock_on_slider_tabletrue{\n                                display:block;\n                            }\n                        }\n                        @media only screen and (max-width: 480px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df_height_carousel_block.bubiblock_on_slider_mobilefalse{\n                                display:none;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df_height_carousel_block.bubiblock_on_slider_mobiletrue{\n                                display:block;\n                            }\n                        }\n                    ", bubiblock_display_button_table_caption != 1 && wp.element.createElement(wp.element.Fragment, null, "\n                            @media only screen and (max-width: 767px){\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-caption button{\n                                   display:none;\n                                }\n                            }\n                        "), bubiblock_display_button_table_caption != 0 && wp.element.createElement(wp.element.Fragment, null, "\n                            @media only screen and (max-width: 767px){\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-caption button{\n                                   display:initial;\n                                }\n                            }\n                        "), bubiblock_display_button_mobile_caption != 1 && wp.element.createElement(wp.element.Fragment, null, "\n                            @media only screen and (max-width: 480px){\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-caption button{\n                                   display:none;\n                                }\n                            }\n                        "), bubiblock_display_button_mobile_caption != 0 && wp.element.createElement(wp.element.Fragment, null, "\n                            @media only screen and (max-width: 480px){\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-caption button{\n                                   display:initial;\n                                }\n                            }\n                        "), df_height_slider_auto != 0 && wp.element.createElement(wp.element.Fragment, null, "\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active{\n                                    height:auto!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active img.img-cap{\n                                    min-height:auto!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active video{\n                                    min-height:auto!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item{\n                                    height:auto!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item img.img-cap{\n                                    min-height:auto!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item video{\n                                    min-height:auto!important;\n                                }\n                            "), df_height_slider_auto != 1 && wp.element.createElement(wp.element.Fragment, null, "\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active,.bubiblock-color-slider-item{\n                                    height:" + height_slider + "px!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active img.img-cap{\n                                    min-height:" + height_slider + "px!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active video{\n                                    min-height:" + height_slider + "px!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item{\n                                    height:" + height_slider + "px!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item img.img-cap{\n                                    min-height:" + height_slider + "px!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item video{\n                                    min-height:" + height_slider + "px!important;\n                                }\n                                @media only screen and (max-width: 767px){\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active{\n                                        height:" + height_slider_table + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.one.active img.img-cap{\n                                    min-height:" + height_slider_table + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.one.active video{\n                                    min-height:" + height_slider_table + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.one{\n                                    height:" + height_slider_table + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.one img.img-cap{\n                                    min-height:" + height_slider_table + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.one video{\n                                    min-height:" + height_slider_table + "px!important;\n                                    }\n                                }\n                                @media only screen and (max-width: 480px){\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active{\n                                    height:" + height_slider_mobile + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.one.active img.img-cap{\n                                    min-height:" + height_slider_mobile + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.one.active video{\n                                    min-height:" + height_slider_mobile + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item{\n                                    height:" + height_slider_mobile + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item img.img-cap{\n                                    min-height:" + height_slider_mobile + "px!important;\n                                    }\n                                    #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item video{\n                                    min-height:" + height_slider_mobile + "px!important;\n                                    }\n                                }\n                            "), bubiblock_full_slider != 0 && wp.element.createElement(wp.element.Fragment, null, "\n                        #carouselDFControlslider" + bubiblock_id_slider + "{\n                            width: 100vw;\n                            max-width: initial;\n                            position: relative;\n                            left: 50%;\n                            right: 50%;\n                            margin-left: -50vw;\n                            margin-right: -50vw\n                        }\n                        "), bubiblock_height_dot_active_enable && wp.element.createElement(wp.element.Fragment, null, "\n                        #carouselDFControlslider" + bubiblock_id_slider + " .carousel-indicators li.active::after{\n                            height:" + bubiblock_height_dot_active + "px;\n                            background-color:" + df_color_dot + ";\n                        }\n                        "), "\n                        #carouselDFControlslider" + bubiblock_id_slider + " .carousel-indicators.difftrue li.active::after{\n                            height:" + bubiblock_height_dot_active + "px;\n                            width: 100%;\n                            position: absolute; \n                            transition: height .25s ease-in-out;\n                            bottom: 0;\n                            background-color:" + df_color_dot + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .carousel-indicators.difftrue li{\n                            transition:height .25s ease-in-out;\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .carousel-indicators.progtrue li.active::after{\n                            width: 100%!important;\n                            transition: width " + df_interval_slider + "ms ease-out;\n                            top: 0;\n                            height:" + df_height_dot + "px;\n                            background-color:" + df_color_progress_dot + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .carousel-indicators.progtrue li::after{\n                            width:0!important;\n                            transition: width " + df_interval_slider + "ms ease-in;\n                            position: absolute;\n                            top: 0; \n                            height:" + df_height_dot + "px;\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .bubiblock-block{\n                            padding-left:" + bubiblock_padding_block_slider + "px;\n                            padding-right:" + bubiblock_padding_block_slider + "px;\n                            padding-top:" + bubiblock_padding_b_block_slider + "px;\n                            padding-bottom:" + bubiblock_padding_b_block_slider + "px;\n                        }\n                        ", bubiblock_typography_custom && wp.element.createElement(wp.element.Fragment, null, "\n                        #carouselDFControlslider" + bubiblock_id_slider + " h4{\n                            font-family:" + bubiblcok_fontfamily + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " h4{\n                            font-weight:" + bubiblcok_fontfamily_weight + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " h4{\n                            line-height:" + bubiblock_line_height_title + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " p{\n                            font-family:" + bubiblcok_fontfamily_descritpion + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " p{\n                            font-weight:" + bubiblcok_fontfamily_weight_description + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " p.bubiblock-p-capt{\n                            line-height:" + bubiblock_line_height_info + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " button p{\n                            font-family:" + bubiblcok_fontfamily_button + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " button p{\n                            font-weight:" + bubiblcok_fontfamily_weight_button + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " button a{\n                            font-family:" + bubiblcok_fontfamily_button + ";\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " button a{\n                            font-weight:" + bubiblcok_fontfamily_weight_button + ";\n                        }\n                        "), "\n                        #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item img.img-cap,#carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .bubiblock-color-slider-item,#carouselDFControlslider" + bubiblock_id_slider + " .carousel-item video,#carouselDFControlslider" + bubiblock_id_slider + ",#carouselDFControlslider" + bubiblock_id_slider + " .carousel-item iframe{\n                            border-radius:" + bubiblock_radius_slider + "%;\n                        }\n                        .carousel-control-next.df-carousel-control-next:hover,.carousel-control-prev.df-carousel-control-prev:hover{\n                            opacity: " + bubiopacityhoverarrow + "!important;\n                        }                        \n                        @media only screen and (max-width: 767px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-carousel-control-prev i,#carouselDFControlslider" + bubiblock_id_slider + " .df-carousel-control-next i{\n                                font-size:" + df_size_arrow_table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .bubiblock-block{\n                                padding-left:" + bubiblock_padding_block_slider_table + "px;\n                                padding-right:" + bubiblock_padding_block_slider_table + "px;\n                                padding-top:" + bubiblock_padding_b_block_slider_table + "px;\n                                padding-bottom:" + bubiblock_padding_b_block_slider_table + "px;\n                            }\n                        }\n                        @media only screen and (max-width: 480px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-carousel-control-prev i,.df-carousel-control-next i{\n                                font-size:" + df_size_arrow_mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .bubiblock-block{\n                                padding-left:" + bubiblock_padding_block_slider_mobile + "px;\n                                padding-right:" + bubiblock_padding_block_slider_mobile + "px;\n                                padding-top:" + bubiblock_padding_b_block_slider_mobile + "px;\n                                padding-bottom:" + bubiblock_padding_b_block_slider_mobile + "px;\n                            }\n                        }\n                        @media only screen and (max-width: 767px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title{\n                                bottom:" + margin_bottom_table_caption1 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info{\n                                bottom:" + margin_bottom_table_info1 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-1{\n                                bottom:" + margin_bottom_table_button1 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title{\n                                font-size:" + fontsizetitle1table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info{\n                                font-size:" + fontsizeinfo1table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider p{\n                                font-size:" + fontsizebutton1table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_2{\n                                bottom:" + margin_bottom_table_caption2 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_2{\n                                bottom:" + margin_bottom_table_info2 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-2{\n                                bottom:" + margin_bottom_table_button2 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_2{\n                                font-size:" + fontsizetitle2table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_2{\n                                font-size:" + fontsizeinfo2table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider2 p{\n                                font-size:" + fontsizebutton2table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_3{\n                                bottom:" + margin_bottom_table_caption3 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_3{\n                                bottom:" + margin_bottom_table_info3 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-3{\n                                bottom:" + margin_bottom_table_button3 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_3{\n                                font-size:" + fontsizetitle3table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_3{\n                                font-size:" + fontsizeinfo3table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider3 p{\n                                font-size:" + fontsizebutton3table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_4{\n                                bottom:" + margin_bottom_table_caption4 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_4{\n                                bottom:" + margin_bottom_table_info4 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-4{\n                                bottom:" + margin_bottom_table_button4 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_4{\n                                font-size:" + fontsizetitle4table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_4{\n                                font-size:" + fontsizeinfo4table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider4 p{\n                                font-size:" + fontsizebutton4table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_5{\n                                bottom:" + margin_bottom_table_caption5 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_5{\n                                bottom:" + margin_bottom_table_info5 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-5{\n                                bottom:" + margin_bottom_table_button5 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_5{\n                                font-size:" + fontsizetitle5table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_5{\n                                font-size:" + fontsizeinfo5table + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider5 p{\n                                font-size:" + fontsizebutton5table + "px!important;\n                            }\n                        }\n                        @media only screen and (max-width: 480px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title{\n                                bottom:" + margin_bottom_mobile_caption1 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info{\n                                bottom:" + margin_bottom_mobile_info1 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-1{\n                                bottom:" + margin_bottom_mobile_button1 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title{\n                                font-size:" + fontsizetitle1mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info{\n                                font-size:" + fontsizeinfo1mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider p{\n                                font-size:" + fontsizebutton1mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_2{\n                                bottom:" + margin_bottom_mobile_caption2 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_2{\n                                bottom:" + margin_bottom_mobile_info2 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-2{\n                                bottom:" + margin_bottom_mobile_button2 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_2{\n                                font-size:" + fontsizetitle2mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_2{\n                                font-size:" + fontsizeinfo2mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider2 p{\n                                font-size:" + fontsizebutton2mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_3{\n                                bottom:" + margin_bottom_mobile_caption3 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_3{\n                                bottom:" + margin_bottom_mobile_info3 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-3{\n                                bottom:" + margin_bottom_mobile_button3 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_3{\n                                font-size:" + fontsizetitle3mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_3{\n                                font-size:" + fontsizeinfo3mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider3 p{\n                                font-size:" + fontsizebutton3mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_4{\n                                bottom:" + margin_bottom_mobile_caption4 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_4{\n                                bottom:" + margin_bottom_mobile_info4 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-4{\n                                bottom:" + margin_bottom_mobile_button4 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_4{\n                                font-size:" + fontsizetitle4mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_4{\n                                font-size:" + fontsizeinfo4mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider4 p{\n                                font-size:" + fontsizebutton4mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_5{\n                                bottom:" + margin_bottom_mobile_caption5 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_5{\n                                bottom:" + margin_bottom_mobile_info5 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-5{\n                                bottom:" + margin_bottom_mobile_button5 + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " h4.wp-block-bubiblock-slider-slider__title_5{\n                                font-size:" + fontsizetitle5mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " p.wp-block-bubiblock-slider-slider__info_5{\n                                font-size:" + fontsizeinfo5mobile + "px!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .button-slider5 p{\n                                font-size:" + fontsizebutton5mobile + "px!important;\n                            }\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.bubiblock-flip{\n                            transition: " + bubiblock_speed_flip_slider + "s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n                            -webkit-transition: " + bubiblock_speed_flip_slider + "s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n                            transform-style: preserve-3d;\n                            -webkit-style: preserve-3d;\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .df-carousel-control-prev.df-arrow-false{\n                            display:none;\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .df-carousel-control-next.df-arrow-false{\n                            display:none;\n                        }\n                        @media only screen and (max-width: 767px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-carousel-control-prev.df-arrow-table-false{\n                            display:none;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-carousel-control-next.df-arrow-table-false{\n                            display:none;\n                            }\n                        }\n                    \n                        @media only screen and (max-width: 480px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-carousel-control-prev.df-arrow-mobile-false{\n                            display:none;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-carousel-control-next.df-arrow-mobile-false{\n                            display:none;\n                            }\n                        }\n                        #carouselDFControlslider" + bubiblock_id_slider + " .df-dot-false.carousel-indicators{\n                            display:none;\n                        }\n                        @media only screen and (max-width: 767px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-dot-table-false.carousel-indicators{\n                            display:none;\n                            }\n                        }\n                        @media only screen and (max-width: 480px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-dot-mobile-false.carousel-indicators{\n                            display:none!important;\n                            }\n                        }\n                        @media only screen and (max-width: 767px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title.df-caption-table-false,.wp-block-bubiblock-slider-slider__info.df-caption-table-false,.link-button-1.df-caption-table-false{\n                            display:none;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-1{\n                                height:" + df_height_table_divide_1 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-bottom-1{\n                                height:" + df_height_table_divide_bottom_1 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title_2.df-caption-table-false,.wp-block-bubiblock-slider-slider__info_2.df-caption-table-false,.link-button-2.df-caption-table-false{\n                                display:none;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-2{\n                                height:" + df_height_table_divide_2 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-bottom-2{\n                                height:" + df_height_table_divide_bottom_2 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title_3.df-caption-table-false,.wp-block-bubiblock-slider-slider__info_3.df-caption-table-false,.link-button-3.df-caption-table-false{\n                                display:none;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-3{\n                                height:" + df_height_table_divide_3 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-bottom-3{\n                                height:" + df_height_table_divide_bottom_3 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title_4.df-caption-table-false,.wp-block-bubiblock-slider-slider__info_4.df-caption-table-false,.link-button-4.df-caption-table-false{\n                                display:none;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-4{\n                                height:" + df_height_table_divide_4 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-bottom-4{\n                                height:" + df_height_table_divide_bottom_4 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title_5.df-caption-table-false,.wp-block-bubiblock-slider-slider__info_5.df-caption-table-false,.link-button-5.df-caption-table-false{\n                                display:none;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-5{\n                                height:" + df_height_table_divide_5 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item .df-divide-bottom-5{\n                                height:" + df_height_table_divide_bottom_5 + "px;\n                            }\n                        }\n                        @media only screen and (max-width: 480px){\n                            #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title.df-caption-mobile-false,.wp-block-bubiblock-slider-slider__info.df-caption-mobile-false,.link-button-1.df-caption-mobile-false{\n                            display:none!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-1{\n                                height:" + df_height_mobile_divide_1 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-bottom-1{\n                                height:" + df_height_mobile_divide_bottom_1 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title_2.df-caption-mobile-false,.wp-block-bubiblock-slider-slider__info_2.df-caption-mobile-false,.link-button-2.df-caption-mobile-false{\n                                display:none!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-2{\n                                height:" + df_height_mobile_divide_2 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-bottom-2{\n                                height:" + df_height_mobile_divide_bottom_2 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title_3.df-caption-mobile-false,.wp-block-bubiblock-slider-slider__info_3.df-caption-mobile-false,.link-button-3.df-caption-mobile-false{\n                                display:none!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-3{\n                                    height:" + df_height_mobile_divide_3 + "px;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-bottom-3{\n                                    height:" + df_height_mobile_divide_bottom_3 + "px;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title_4.df-caption-mobile-false,.wp-block-bubiblock-slider-slider__info_4.df-caption-mobile-false,.link-button-4.df-caption-mobile-false{\n                                    display:none!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-4{\n                                    height:" + df_height_mobile_divide_4 + "px;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-bottom-4{\n                                    height:" + df_height_mobile_divide_bottom_4 + "px;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .wp-block-bubiblock-slider-slider__title_5.df-caption-mobile-false,.wp-block-bubiblock-slider-slider__info_5.df-caption-mobile-false,.link-button-5.df-caption-mobile-false{\n                                    display:none!important;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-5{\n                                    height:" + df_height_mobile_divide_5 + "px;\n                                }\n                                #carouselDFControlslider" + bubiblock_id_slider + " .carousel-inner .carousel-item .df-divide-bottom-5{\n                                    height:" + df_height_mobile_divide_bottom_5 + "px;\n                                }\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider:hover{\n                                background-color:" + df_background_color_hover_link_button1 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider:hover{\n                                background:" + df_background_color_hover_link_button1 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider:hover p{\n                                color:" + df_color_hover_link_button1 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider:hover span{\n                                color:" + df_color_hover_link_button1 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider:hover a{\n                                color:" + df_color_hover_link_button1 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-1 a{\n                                color:" + df_color_link_button1 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-1 span{\n                                color:" + df_color_link_button1 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-2 a{\n                                color:" + df_color_link_button2 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-2 span{\n                                color:" + df_color_link_button2 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-3 a{\n                                color:" + df_color_link_button3 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-3 span{\n                                color:" + df_color_link_button3 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-4 a{\n                                color:" + df_color_link_button4 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-4 span{\n                                color:" + df_color_link_button4 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-5 a{\n                                color:" + df_color_link_button5 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-5 span{\n                                color:" + df_color_link_button5 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-1 button.button-slider.df-trasparent-color-button1-true{\n                                background-color:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-1 button.button-slider.df-trasparent-color-button1-true{\n                                background:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-1 button.button-slider.df-trasparent-color-button1-true{\n                                background-image:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-1 button.button-slider.df-trasparent-color-button1-true:hover{\n                                background-color:" + df_background_color_hover_link_button1 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-1{\n                                height:" + df_height_divide_1 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-1{\n                                transition: max-height " + bubiblock_dalay_divide_1 + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-1{\n                                transition: max-height " + bubiblock_dalay_divide_1 + "s ease-out;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-1{\n                                height:" + df_height_divide_bottom_1 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-bottom-1{\n                                transition: max-height " + bubiblock_dalay_divide_1_bottom + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-1{\n                                transition: max-height " + bubiblock_dalay_divide_1_bottom + "s ease-out;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider2:hover{\n                                background-color:" + df_background_color_hover_link_button2 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider2:hover{\n                                background:" + df_background_color_hover_link_button2 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider2:hover p{\n                                color:" + df_color_hover_link_button2 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider2:hover span{\n                                color:" + df_color_hover_link_button2 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider2:hover a{\n                                color:" + df_color_hover_link_button2 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-2 button.button-slider2.df-trasparent-color-button2-true{\n                                background-color:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-2 button.button-slider2.df-trasparent-color-button2-true{\n                                background-image:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-2 button.button-slider2.df-trasparent-color-button2-true{\n                                background:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-2 button.button-slider2.df-trasparent-color-button2-true:hover{\n                                background-color:" + df_background_color_hover_link_button2 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-2{\n                                height:" + df_height_divide_2 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-2{\n                                transition: max-height " + bubiblock_dalay_divide_2 + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-2{\n                                transition: max-height " + bubiblock_dalay_divide_2 + "s ease-out;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-2{\n                                height:" + df_height_divide_bottom_2 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-bottom-2{\n                                transition: max-height " + bubiblock_dalay_divide_2_bottom + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-2{\n                                transition: max-height " + bubiblock_dalay_divide_2_bottom + "s ease-out;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider3:hover{\n                                background-color:" + df_background_color_hover_link_button3 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider3:hover{\n                                background:" + df_background_color_hover_link_button3 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider3:hover p{\n                                color:" + df_color_hover_link_button3 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider3:hover span{\n                                color:" + df_color_hover_link_button3 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider3:hover a{\n                                color:" + df_color_hover_link_button3 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-3 button.button-slider3.df-trasparent-color-button3-true{\n                                background-color:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-3 button.button-slider3.df-trasparent-color-button3-true{\n                                background-image:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-3 button.button-slider3.df-trasparent-color-button3-true{\n                                background:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-3 button.button-slider3.df-trasparent-color-button3-true:hover{\n                                background-color:" + df_background_color_hover_link_button3 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-3{\n                                height:" + df_height_divide_3 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-3{\n                                transition: max-height " + bubiblock_dalay_divide_3 + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-3{\n                                transition: max-height " + bubiblock_dalay_divide_3 + "s ease-out;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-3{\n                                height:" + df_height_divide_bottom_3 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-bottom-3{\n                                transition: max-height " + bubiblock_dalay_divide_3_bottom + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-3{\n                                transition: max-height " + bubiblock_dalay_divide_3_bottom + "s ease-out;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider4:hover{\n                                background-color:" + df_background_color_hover_link_button4 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider4:hover{\n                                background:" + df_background_color_hover_link_button4 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slide4:hover p{\n                                color:" + df_color_hover_link_button4 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider4:hover span{\n                                color:" + df_color_hover_link_button4 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider4:hover a{\n                                color:" + df_color_hover_link_button4 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-4 button.button-slider4.df-trasparent-color-button4-true{\n                                background-color:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-4 button.button-slider4.df-trasparent-color-button4-true{\n                                background-image:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-4 button.button-slider4.df-trasparent-color-button4-true{\n                                background:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-4 button.button-slider4.df-trasparent-color-button4-true:hover{\n                                background-color:" + df_background_color_hover_link_button4 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-4{\n                                height:" + df_height_divide_4 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-4{\n                                transition: max-height " + bubiblock_dalay_divide_4 + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-4{\n                                transition: max-height " + bubiblock_dalay_divide_4 + "s ease-out;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-4{\n                                height:" + df_height_divide_bottom_4 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-bottom-4{\n                                transition: max-height " + bubiblock_dalay_divide_4_bottom + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-4{\n                                transition: max-height " + bubiblock_dalay_divide_4_bottom + "s ease-out;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider5:hover{\n                                background-color:" + df_background_color_hover_link_button5 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider5:hover{\n                                background:" + df_background_color_hover_link_button5 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slide5:hover p{\n                                color:" + df_color_hover_link_button5 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider5:hover span{\n                                color:" + df_color_hover_link_button5 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " button.button-slider5:hover a{\n                                color:" + df_color_hover_link_button5 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-5 button.button-slider5.df-trasparent-color-button5-true{\n                                background-color:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-5 button.button-slider5.df-trasparent-color-button5-true{\n                                background-image:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-5 button.button-slider5.df-trasparent-color-button5-true{\n                                background:transparent!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .link-button-5 button.button-slider5.df-trasparent-color-button5-true:hover{\n                                background-color:" + df_background_color_hover_link_button5 + "!important;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-5{\n                                height:" + df_height_divide_5 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-5{\n                                transition: max-height " + bubiblock_dalay_divide_5 + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-5{\n                                transition: max-height " + bubiblock_dalay_divide_5 + "s ease-out;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-5{\n                                height:" + df_height_divide_bottom_5 + "px;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .carousel-item.active .df-divide-bottom-5{\n                                transition: max-height " + bubiblock_dalay_divide_5_bottom + "s ease-in;\n                            }\n                            #carouselDFControlslider" + bubiblock_id_slider + " .df-divide-bottom-5{\n                                transition: max-height " + bubiblock_dalay_divide_5_bottom + "s ease-out;\n                            }\n                    "));
  },
  //Preview
  example: function example() {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/slider/style.editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/slider/style.editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/slider */ "./src/blocks/slider/index.js");


/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["i18n"];

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map