import { useQuery } from 'react-query';
import { getCategoriesRequest } from './requests';

export const useResourcesService = () => {
  const useGetCategories = () =>
    useQuery({ queryKey: 'categories', queryFn: getCategoriesRequest });

  return { useGetCategories };
};
