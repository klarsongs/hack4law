import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getReportRequest, sendMessage } from './requests';

export const useReportsService = () => {
  const queryClient = useQueryClient();

  const useGetReport = (slug: string) =>
    useQuery('report', () => getReportRequest(slug));

  const useSendMessage = () =>
    useMutation(sendMessage, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['report'] });
      },
    });

  return { useGetReport, useSendMessage };
};
