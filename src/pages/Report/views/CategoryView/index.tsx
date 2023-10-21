import { Button } from '../../../../components/Button';
import { useReportForm } from '../../useReportForm';
import { Typography } from '../../../../components/Typography';
import { CategoriesList } from './components/CategoriesList';
import { ReactComponent as ArrowLeftIcon } from '../../../../assets/arrowLeftIcon.svg';

export interface Category {
  id: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: string;
  title: string;
  description: string;
}

const categoriesData: Category[] = [
  {
    id: 'id-kategorii',
    title: 'Kategoria 1',
    description: 'Opis kategorii 1',
    subcategories: [
      {
        id: 'id-subkategorii-1',
        title: 'Subkategoria 1',
        description: 'Opis subkategorii 1',
      },
    ],
  },
  {
    id: 'id-kategorii-2',
    title: 'Kategoria 2',
    description: 'Opis kategorii 2',
    subcategories: [
      {
        id: 'id-subkategorii-2',
        title: 'Subkategoria 2',
        description: 'Opis subkategorii 2',
      },
    ],
  },
];

export const CategoryView = () => {
  const { formState, setFormState, goToNextView } = useReportForm();

  const handleCategoryClick = (categoryId: string) => {
    setFormState({ ...formState, category: categoryId });
    goToNextView();
  };

  return (
    <>
      <Button type='text' icon={<ArrowLeftIcon />}>
        Powrót
      </Button>
      <Typography.Title level={1}>Zgłoś sprawę</Typography.Title>
      <Typography.Title level={2}>Wybierz kategorię sprawy</Typography.Title>
      <CategoriesList
        categories={categoriesData}
        onCategoryClick={handleCategoryClick}
        selectedSubcategoryId={formState.subcategory}
      />
    </>
  );
};
