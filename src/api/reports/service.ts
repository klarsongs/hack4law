import { useQuery } from 'react-query';
import { getReportRequest } from './requests';

export const useReportsService = () => {
  const useGetReport = (slug: string) =>
    useQuery('report', () => getReportRequest(slug));

  return { useGetReport };
};
