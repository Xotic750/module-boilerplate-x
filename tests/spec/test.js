'use strict';

var testSubject;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  testSubject = require('../../index.js');
} else {
  testSubject = returnExports;
}

describe('testSubject', function () {
  it('is a function', function () {
    expect(typeof testSubject).toBe('function');
  });

  it('should throw when target not undefined', function () {
    expect(function () {
      testSubject(null);
    }).toThrow();
  });

  it('should return an object when target undefined', function () {
    expect(typeof testSubject()).toBe('object');
    expect(testSubject()).not.toBe(null);
  });

  it('returned object should have a reserved property of true, IE<9', function () {
    var obj = testSubject();
    expect(obj['delete']).toBe(true);
    expect(obj['throws']).toBe(true);
    expect(obj.blah).toBe(true);
    expect(obj.foo).toBe(undefined);
  });
});
