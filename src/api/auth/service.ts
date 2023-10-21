import { useMutation } from 'react-query';
import { verifyRequest } from './requests';
import { TVerifyRequest } from './types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useAuthorizationService = () => {
  const navigate = useNavigate();

  const useVerify = () =>
    useMutation<{}, string, TVerifyRequest>(verifyRequest, {
      onSuccess: () => {
        navigate('/wybierz-akcje', { replace: true });
      },
      onError: () => {
        toast('Wystąpił problem podczas weryfikowania klucza');
      },
    });

  return {
    useVerify,
  };
};
