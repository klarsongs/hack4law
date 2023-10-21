import { List, Collapse } from 'antd';
import { useState } from 'react';
import { InfoCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Alert } from '../../../../components/Alert';
import { Button } from '../../../../components/Button';
import {
  CategoryContainer,
  SubcategoryContainer,
  SubcategoryDataWrapper,
} from './styled';
import { useReportForm } from '../../useReportForm';
import { Input } from '../../../../components/Input';
import { Typography } from '../../../../components/Typography';

interface Category {
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
      <List
        dataSource={categoriesData}
        renderItem={(category) => (
          <List.Item>
            <Collapse style={{ width: '100%' }}>
              <Collapse.Panel
                header={
                  <CategoryContainer
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <h2>{category.title}</h2>
                    <h3>{category.description}</h3>
                  </CategoryContainer>
                }
                key={category.title}
              >
                <List
                  dataSource={category.subcategories}
                  renderItem={(subcategory) => (
                    <SubcategoryContainer
                      onClick={() => handleSubcategoryClick(subcategory.id)}
                      $isSelected={formState.subcategory === subcategory.id}
                    >
                      <SubcategoryDataWrapper>
                        <h4>{subcategory.title}</h4>
                        <p>{subcategory.description}</p>
                      </SubcategoryDataWrapper>
                      <Button
                        type='primary'
                        shape='circle'
                        icon={<InfoCircleOutlined />}
                      />
                    </SubcategoryContainer>
                  )}
                />
              </Collapse.Panel>
            </Collapse>
          </List.Item>
        )}
      />
      {renderValidationError()}
      <Button type='primary' onClick={handleNextClick}>
        Dalej
      </Button>
      <Alert
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
      <Typography.Text>Text</Typography.Text>
    </div>
  );
};
