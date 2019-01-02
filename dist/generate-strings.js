module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(977);
/******/ })
/************************************************************************/
/******/ ({

/***/ 977:
/***/ (function(__unusedmodule, exports) {

(function(a,b){'function'==typeof define&&define.amd?define([],b): true?exports.generate=b:undefined})(this,function(a={}){let b='',c=a.amount===void 0?1:a.amount;const d=!(a.upperCase!==void 0)||a.upperCase,e=a.upperCases===void 0?'ABCDEFGHIJKLMNOPQRSTUVWXYZ':a.upperCases,f=!(a.lowerCase!==void 0)||a.lowerCase,g=a.lowerCases===void 0?'abcdefghijklmnopqrstuvwxyz':a.lowerCases,h=a.special!==void 0&&a.special,j=a.specials=a.specials,k=!(a.number!==void 0)||a.number,l=a.numbers===void 0?'0123456789':a.numbers,m=a.mode===void 0?'random':a.mode;if(!(0<c))throw new Error('Amount should be > 0');if('random'===m){const n=void 0===a.length?8:a.length,o=(!0===d?e:'')+(!0===f?g:'')+(!0===h?j:'')+(!0===k?l:''),p=[];do{for(let q=0;q<n;q++)b+=o[parseInt(Math.random()*o.length)];p.push(b),b='',c--}while(0<c);return 1===p.length?p[0]:p}if('password'===m){const n=void 0===a.length?8:a.length,o=void 0!==a.showStrength&&a.showStrength,p=void 0===a.firstCharType?'random':a.firstCharType,q=(!0===d?e:'')+(!0===f?g:'')+(!0===h?j:'')+(!0===k?l:''),r=[];if(6>n)throw new Error('Length should be > 5');do{b+='upperCase'===p?e[parseInt(Math.random()*e.length)]:'lowerCase'===p?g[parseInt(Math.random()*g.length)]:'special'===p?j[parseInt(Math.random()*j.length)]:'number'===p?l[parseInt(Math.random()*l.length)]:q[parseInt(Math.random()*q.length)];for(let t,s=0;s<n;s++){for(t=q[parseInt(Math.random()*q.length)];b[s]===t;)t=q[parseInt(Math.random()*q.length)];b+=t}o?r.push({password:b,strength:checkStrength(b)}):r.push(b),b='',c--}while(0<c);return 1===r.length?r[0]:r}if('mask'===m){const n=void 0===a.mask?'@#$%-@#$%-@#$%-@#$%':a.mask,o=[];if(0===n.length)throw new Error('Mask wrong. Please do something like "@#$%-@#$%-#@$%-@#$%"');do{for(let p=0;p<n.length;p++)b+='@'===n[p]?e[parseInt(Math.random()*e.length)]:'#'===n[p]?g[parseInt(Math.random()*g.length)]:'$'===n[p]?j[parseInt(Math.random()*j.length)]:'%'===n[p]?l[parseInt(Math.random()*l.length)]:n[p];o.push(b),b='',c--}while(0<c);return 1===o.length?o[0]:o}throw new Error('Wrong mode, please set "mode" to "random" or "password" or "mask"')});function checkStrength(a=String){let b=0;b+=10*Math.min(6,a.length),b+=5*Math.min(2,a.length-a.replace(/[A-Z]/g,'').length),b+=5*Math.min(2,a.length-a.replace(/[a-z]/g,'').length),b+=5*Math.min(2,a.length-a.replace(/[0-9]/g,'').length),b+=5*Math.min(2,a.replace(/[a-zA-Z0-9]/g,'').length);for(let c=1;c<a.length;c++)if(a[c-1]===a[c]){b-=30;break}return 50>b?'unacceptable':60>b?'terrible':80>b?'medium':100>b?'good':'high'}

/***/ })

/******/ });