import { ReportFormProvider, useReportFormContext } from './ReportFormContext';
import { CategoryView } from './views/CategoryView';
import { SubcategoryView } from './views/SubcategoryView';
import { Layout } from '../../components/Layout';

export const ReportPage = () => {
  return (
    <ReportFormProvider>
      <PageContent />
    </ReportFormProvider>
  );
};

const PageContent = () => {
  const { currentView } = useReportFormContext();

  const renderView = () => {
    switch (currentView) {
      case 'category':
        return <CategoryView />;
      case 'subcategory':
        return <SubcategoryView />;
      default:
        return <div>view not yet implemented: {currentView}</div>;
    }
  };

  return <Layout>{renderView()}</Layout>;
};
