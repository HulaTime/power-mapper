import { getJsonPath } from '../src/getJsonPath';

describe('#getJsonPath', () => {
  test('it should exist', () => {
    expect(getJsonPath).toBeDefined();
  })

  test('it should return the value defined at the supplied key in a given object', () => {
    const data = { foo: 'bar' }
    expect(getJsonPath('foo', data)).toEqual('bar');
  })

  test('it should return the value at a nested path, defined by a "." delimited path', () => {
    const data = { foo: 'bar', hello: { world: 'result' } }
    expect(getJsonPath('hello.world', data)).toEqual('result');
  })

  test('it should return the value at a deeply nested path', () => {
    const data = { foo: { bar: { hello: { world: 13 } } } };
    expect(getJsonPath('foo.bar.hello.world', data)).toEqual(13);
  })

  test('it should work with objects that have a number as a key', () => {
    const data = { 2: 'foo' }
    expect(getJsonPath('2', data)).toEqual('foo');
  })
})
