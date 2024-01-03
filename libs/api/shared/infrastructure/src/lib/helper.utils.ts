import { SortOrder, UserDto } from '@bh/shared/domain';

export const createSort = (sortField: string, sortOrder: SortOrder) => {
  sortField = sortField || 'id';
  return { [sortField]: sortOrder };
};

export const parseUsername = (user?: UserDto) => {
  return user?.username || 'unknown';
};
