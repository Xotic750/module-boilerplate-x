var placeHolder = function placeHolder(target) {
  if (typeof target !== 'undefined') {
    throw new TypeError('target is not undefined');
  }

  return {
    blah: true,
    delete: true,
    throws: true
  };
};
/**
 * This method is just a placeholder.
 *
 * @param {*} [target] - The target.
 * @throws {Error} If target is not undefined.
 * @returns {*} The target.
 */


export default placeHolder;

//# sourceMappingURL=module-boilerplate-x.esm.js.map