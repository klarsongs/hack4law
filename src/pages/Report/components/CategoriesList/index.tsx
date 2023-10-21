import { List } from 'antd';
import { ReactComponent as OpenReportIcon } from 'assets/openReportIcon.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/arrowRightIcon.svg';
import { Typography } from 'components/Typography';
import { Category, Subcategory } from 'api/resources/types';
import { CategoryContainer, CategoryOuterContainer } from './styled';

interface Props<T> {
  categories: T[];
  onCategoryClick: (category: T) => void;
}

export const CategoriesList = <T extends Category | Subcategory>({
  categories,
  onCategoryClick,
}: Props<T>) => {
  return (
    <List
      dataSource={categories}
      renderItem={(category) => (
        <List.Item>
          <CategoryOuterContainer onClick={() => onCategoryClick(category)}>
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
