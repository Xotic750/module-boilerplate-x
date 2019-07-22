import testSubject from '../src/module-boilerplate-x';

describe('testSubject', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof testSubject).toBe('function');
  });

  it('should throw when target not undefined', function() {
    expect.assertions(1);
    expect(function() {
      testSubject(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return an object when target undefined', function() {
    expect.assertions(2);
    expect(typeof testSubject()).toBe('object');
    expect(testSubject()).not.toBeNull();
  });

  it('returned object should have a reserved property of true, IE<9', function() {
    expect.assertions(4);
    const obj = testSubject();
    expect(obj.delete).toBe(true);
    expect(obj.throws).toBe(true);
    expect(obj.blah).toBe(true);
    expect(obj.foo).toBeUndefined();
  });
});
