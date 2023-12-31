export const replaceCommas = (value?: string) =>
  value?.replace(/^,/, '')?.replace(/,\s*$/, '');

export const ignoreCaseCompare = (a?: string, b?: string) =>
  (a || '').toLowerCase() === (b || '').toLowerCase();
