(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.returnExports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/module-boilerplate-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/module-boilerplate-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/module-boilerplate-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/module-boilerplate-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/module-boilerplate-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/module-boilerplate-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/module-boilerplate-x" title="npm version">
 * <img src="https://badge.fury.io/js/module-boilerplate-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Boilerplate for standard modules.
 *
 * Requires ES3 or above.
 *
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module module-boilerplate-x
 */

'use strict';

var placeHolder = function _placeHolder(target) {
  if (typeof target !== 'undefined') {
    throw new TypeError('target is not undefined');
  }

  return {
    blah: true,
    'delete': true,
    'throws': true
  };
};

/**
 * This method is just a placeholder.
 *
 * @param {*} [target] The target.
 * @throws {Error} If target is not undefined.
 * @return {*} The target.
 * @example
 * var placeHolder = require('module-boilerplate-x');
 */
module.exports = placeHolder;

},{}]},{},[1])(1)
});