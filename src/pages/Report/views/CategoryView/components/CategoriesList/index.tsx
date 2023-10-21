import { List } from 'antd';
import { ReactComponent as OpenReportIcon } from '../../../../../../assets/openReportIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../../../../../../assets/arrowRightIcon.svg';
import { Category } from '../..';
import { CategoryContainer, CategoryOuterContainer } from './styled';
import { Typography } from '../../../../../../components/Typography';

interface Props {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
  selectedSubcategoryId: string;
}

export const CategoriesList = ({ categories, onCategoryClick }: Props) => {
  return (
    <List
      dataSource={categories}
      renderItem={(category) => (
        <List.Item>
          <CategoryOuterContainer onClick={() => onCategoryClick(category.id)}>
            <OpenReportIcon />
            <CategoryContainer>
              <Typography.Title level={3}>{category.title}</Typography.Title>
              <Typography.Text>{category.description}</Typography.Text>
            </CategoryContainer>
            <ArrowRightIcon />
          </CategoryOuterContainer>
        </List.Item>
      )}
    />
  );
};
