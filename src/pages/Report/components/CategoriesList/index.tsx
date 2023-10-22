import { List } from 'antd';
import { ReactComponent as ArrowRightIcon } from 'assets/arrowRightIcon.svg';
import { Typography } from 'components/Typography';
import { Category, IconType, Subcategory } from 'api/resources/types';
import { ReactComponent as ConsumerIcon } from 'assets/consumerIcon.svg';
import { ReactComponent as EnvironmentIcon } from 'assets/environmentIcon.svg';
import { ReactComponent as FinancesIcon } from 'assets/financesIcon.svg';
import { ReactComponent as FoodIcon } from 'assets/foodIcon.svg';
import { ReactComponent as HealthIcon } from 'assets/healthIcon.svg';
import { ReactComponent as HomeIcon } from 'assets/homeIcon.svg';
import { ReactComponent as NuclearIcon } from 'assets/nuclearIcon.svg';
import { ReactComponent as PrivacyIcon } from 'assets/privacyIcon.svg';
import { ReactComponent as PublicOrderIcon } from 'assets/publicOrderIcon.svg';
import { ReactComponent as TransportIcon } from 'assets/transportIcon.svg';
import { CategoryContainer, CategoryOuterContainer } from './styled';

interface Props<T> {
  categories: T[];
  onCategoryClick: (category: T) => void;
}

function mapIconToCategory(icon: IconType | undefined) {
  switch (icon) {
    case 'consumer':
      return <ConsumerIcon />;
    case 'environment':
      return <EnvironmentIcon />;
    case 'finances':
      return <FinancesIcon />;
    case 'food':
      return <FoodIcon />;
    case 'health':
      return <HealthIcon />;
    case 'home':
      return <HomeIcon />;
    case 'nuclear':
      return <NuclearIcon />;
    case 'privacy':
      return <PrivacyIcon />;
    case 'public':
      return <PublicOrderIcon />;
    case 'transport':
      return <TransportIcon />;
    default:
      return <></>;
  }
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
          <CategoryOuterContainer
            onClick={() => onCategoryClick(category)}
            $hasIcon={category.icon !== undefined}
          >
            {mapIconToCategory(category.icon)}
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
