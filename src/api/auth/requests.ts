import request from '../../utils/request';
import { TVerifyRequest } from './types';

export const verifyRequest = (data: TVerifyRequest) =>
  request<{}>('/v1/verify', { method: 'POST', data });
