import request from '../../utils/request';
import { GetCategoryResponse } from './types';

export const getCategoriesRequest = () =>
  request<GetCategoryResponse>('/v1/categories', { method: 'GET' });
