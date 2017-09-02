/**
 * @file Boilerplate for standard modules.
 * @version 2.1.1
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
