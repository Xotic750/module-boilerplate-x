/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/module-bolierplate-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/module-bolierplate-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/module-bolierplate-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/module-bolierplate-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/module-bolierplate-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/module-bolierplate-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/module-bolierplate-x" title="npm version">
 * <img src="https://badge.fury.io/js/module-bolierplate-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Boilerplate for standard modules.
 *
 * Requires ES3 or above.
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module module-bolierplate-x
 */

'use strict';

var placeHolder = function _placeHolder(target) {
  if (typeof target !== 'undefined') {
    throw new TypeError('target is not undefined');
  }

  return target;
};

/**
 * This method is just a placeholder.
 *
 * @param {*} [target] The target.
 * @throws {Error} If target is not undefined.
 * @return {*} The target.
 * @example
 * var placeHolder = require('module-bolierplate-x');
 */
module.exports = placeHolder;
