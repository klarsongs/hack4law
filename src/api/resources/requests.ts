import { ReportSubmitForm } from 'pages/Report/useReportForm';
import { GetCategoryResponse } from './types';
import request from '../../utils/request';

export interface SubmitFilesRequest {
  reportId: string;
  files: FormData;
}

export const getCategoriesRequest = () =>
  request<GetCategoryResponse>('/v1/categories', { method: 'GET' });

export const submitReportFormRequest = (data: ReportSubmitForm) =>
  request<{}>('/v1/reports', { method: 'POST', data });

export const submitFiles = (data: SubmitFilesRequest) => {
  console.log('data inside requests.ts', data);
  return request<{}>(`/v1/reports/${data.reportId}/files`, {
    method: 'POST',
    data: data.files,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
