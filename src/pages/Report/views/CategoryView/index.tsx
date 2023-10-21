import { List, Collapse } from 'antd';
import { useState } from 'react';
import { InfoCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Alert } from '../../../../components/Alert';
import { Button } from '../../../../components/Button';
import { useReportForm } from '../../useReportForm';
import { Input } from '../../../../components/Input';
import { Typography } from '../../../../components/Typography';
import { CategoriesList } from './components/CategoriesList';

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
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setFormState({ ...formState, category: categoryId });
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setFormState({ ...formState, subcategory: subcategoryId });
  };

  const handleNextClick = () => {
    if (!formState.category || !formState.subcategory) {
      setValidationError('Wybierz kategorię zgłoszenia');
      return;
    }

    goToNextView();
  };

  const renderValidationError = () => {
    if (!validationError) {
      return null;
    }

    return <Alert message={validationError} type='error' />;
  };

  return (
    <div>
      <h1>Wybierz kategorię zgłoszenia</h1>
      <CategoriesList
        categories={categoriesData}
        onCategoryClick={handleCategoryClick}
        selectedSubcategoryId={formState.subcategory}
      />
      {renderValidationError()}

      {/* <Alert
        message='Success Tips'
        description='Detailed description and advice about successful copywriting.'
        type='info'
        showIcon
        icon={<InfoCircleOutlined />}
      />
      <Input placeholder='Basic usage' />
      <Input placeholder='Basic usage' disabled />
      <Button type='text' icon={<ArrowLeftOutlined />}>
        Zmień organizację
      </Button>
      <Typography.Title level={1}>Title</Typography.Title>
      <Typography.Text>Text</Typography.Text> */}
    </div>
  );
};
