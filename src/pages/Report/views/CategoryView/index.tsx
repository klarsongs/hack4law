import { useNavigate } from 'react-router-dom';
import { Category } from 'api/resources/types';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import { ReactComponent as ArrowLeftIcon } from 'assets/arrowLeftIcon.svg';
import { useReportFormContext } from 'pages/Report/ReportFormContext';
import { CategoriesList } from '../../components/CategoriesList';
import { useResourcesService } from 'api/resources/service';
import { Spin } from 'antd';

export const CategoryView = () => {
  const navigate = useNavigate();
  const { formState, setFormState, goToNextView } = useReportFormContext();
  const { useGetCategories } = useResourcesService();
  const { data, isLoading } = useGetCategories();

  const handleCategoryClick = (category: Category) => {
    setFormState({ ...formState, category });
    goToNextView();
  };

  const renderData = () => {
    if (isLoading || !data) {
      return <Spin />;
    }

    return (
      <CategoriesList
        categories={data.data}
        onCategoryClick={handleCategoryClick}
      />
    );
  };

  return (
    <>
      <Button
        type='text'
        icon={<ArrowLeftIcon />}
        onClick={() => navigate('/wybierz-akcje')}
      >
        Powrót
      </Button>
      <Typography.Title level={1}>Zgłoś naruszenie</Typography.Title>
      <Typography.Title level={2}>Wybierz kategorię</Typography.Title>
      {renderData()}
    </>
  );
};
