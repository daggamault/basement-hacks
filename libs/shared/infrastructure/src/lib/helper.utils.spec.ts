import { ignoreCaseCompare, replaceCommas } from './helper.utils';

describe('Helpers', () => {
  it('should ignore case & compare', () => {
    expect(ignoreCaseCompare('test', 'TEST')).toBe(true);
    expect(ignoreCaseCompare('test', 'test')).toBe(true);
    expect(ignoreCaseCompare('TEST', 'TEST')).toBe(true);
    expect(ignoreCaseCompare('test', 'test1')).toBe(false);
  });

  it('should replace commas', () => {
    expect(replaceCommas('test')).toBe('test');
    expect(replaceCommas('test,')).toBe('test');
    expect(replaceCommas(',test')).toBe('test');
    expect(replaceCommas(',test,')).toBe('test');
  });
});
