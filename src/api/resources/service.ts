import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import {
  SubmitFilesRequest,
  getCategoriesRequest,
  submitFiles,
  submitReportFormRequest,
} from './requests';
import { ReportSubmitForm } from 'pages/Report/useReportForm';

export const useResourcesService = () => {
  const useGetCategories = () =>
    useQuery({ queryKey: 'categories', queryFn: getCategoriesRequest });

  const useSubmitReportForm = () =>
    useMutation<{}, string, ReportSubmitForm>(submitReportFormRequest, {
      onSuccess: (data) => {
        console.log('success!!! nie wierze');
      },
      onError: (err) => {
        console.error('error!!! kto by sie spodziewal', err);
        toast(
          'Wystąpił problem podczas wysyłania zgłoszenia. Spróbuj ponownie.',
        );
      },
    });

  const useSendFiles = () =>
    useMutation<{}, { id: string }, SubmitFilesRequest>(submitFiles, {
      onSuccess(data) {
        console.log('success!!! pliki poszły i nie ogladaja sie za siebie');
      },
      onError(err) {
        console.error('error!!! kto by sie spodziewal', err);
        toast('Wystąpił problem podczas wysyłania plików. Spróbuj ponownie.');
      },
    });

  return { useGetCategories, useSubmitReportForm, useSendFiles };
};
