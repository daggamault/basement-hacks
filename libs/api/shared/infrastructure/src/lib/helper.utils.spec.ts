import { SortOrder } from '@bh/shared/domain';
import { createSort, parseUsername } from './helper.utils';

describe('Helpers', () => {
  it('should create sorts', () => {
    expect(createSort('id', SortOrder.ASC)).toEqual({ id: 'ASC' });
    expect(createSort('id', SortOrder.DESC)).toEqual({ id: 'DESC' });
  });

  it('should parse username', () => {
    expect(parseUsername()).toEqual('unknown');
    expect(parseUsername({ username: 'test' } as never)).toEqual('test');
  });
});
