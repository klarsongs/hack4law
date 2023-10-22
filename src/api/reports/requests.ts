import request from '../../utils/request';
import { GetReportResponse } from './types';

export const getReportRequest = (slug: string) =>
  request<GetReportResponse>(`/v1/search_report?slug=${slug}`, {
    method: 'GET',
  });
