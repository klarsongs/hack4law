import { useReportFormContext } from 'pages/Report/ReportFormContext';
import { CategoriesList } from 'pages/Report/components/CategoriesList';
import { ReactComponent as OpenReportIcon } from '../../../../assets/openReportIcon.svg';
import { ReactComponent as ArrowLeftIcon } from '../../../../assets/arrowLeftIcon.svg';
import { Button } from '../../../../components/Button';
import { Typography } from '../../../../components/Typography';
import { TitleContainer } from './styled';
import { Box } from 'components/Box';

export const SubcategoryView = () => {
  const { formState, setFormState, goToPreviousView } = useReportFormContext();

  const handleSubcategoryClick = (subcategoryId: string) => {
    setFormState({ ...formState, subcategory: subcategoryId });
  };

  return (
    <>
      <Button type='text' icon={<ArrowLeftIcon />} onClick={goToPreviousView}>
        Powrót
      </Button>
      <TitleContainer>
        <Typography.Title level={1}>Zgłoś sprawę</Typography.Title>
        <Box
          title='Mobbing'
          label='WYBRANA KATEGORIA'
          icon={<OpenReportIcon />}
          button={
            <Button type='text' onClick={goToPreviousView}>
              Zmień
            </Button>
          }
          style={{ maxWidth: 400 }}
        />
      </TitleContainer>
      <Typography.Title level={2}>Wybierz podkategorię sprawy</Typography.Title>
      <CategoriesList
        categories={[]}
        onCategoryClick={handleSubcategoryClick}
        selectedSubcategoryId={formState.subcategory}
      />
    </>
  );
};
