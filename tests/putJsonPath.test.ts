import { putJsonPath } from '../src/putJsonPath';

describe('#putJsonPath', () => {
  test('it should exist', () => {
    expect(putJsonPath).toBeDefined();
  });

  test('it should add the value provided to the supplied object at the specified path', () => {
    const data = { foo: 'bar' };
    const result = putJsonPath('hello', 'world', data);
    expect(result.hello).toEqual('world');
  });

  test('it should add the value provided to the supplied object at the specified nested path', () => {
    const data = { foo: 'bar' };
    const result = putJsonPath('hello.world', 'foobar', data);
    expect(result).toEqual({ foo: 'bar', hello: { world: 'foobar' } });
  });
});
