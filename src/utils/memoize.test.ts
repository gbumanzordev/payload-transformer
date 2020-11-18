import { memoize } from './memoize';

describe('memoize', () => {
  it('should memoize records and not call main function more than once with the same value', () => {
    const mockToCamel = jest.fn((key: string): string => key);
    const memoizedMock = memoize(mockToCamel);
    const keyOne = memoizedMock('key_one');
    const dKeyOne = memoizedMock('key_one');
    const keyTwo = memoizedMock('key_two');
    const dKeyTwo = memoizedMock('key_two');

    expect(mockToCamel.mock.calls.length).toBe(2);
  });
});
