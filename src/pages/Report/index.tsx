import { ReportFormProvider } from './ReportFormContext';
import { useReportForm } from './useReportForm';
import { CategoryView } from './views/CategoryView';
import { Layout } from '../../components/Layout';

export const ReportPage = () => {
  return (
    <ReportFormProvider>
      <PageContent />
    </ReportFormProvider>
  );
};

const PageContent = () => {
  const { currentView } = useReportForm();

  const renderView = () => {
    switch (currentView) {
      case 'category':
        return <CategoryView />;
      default:
        return <div>view not yet implemented: {currentView}</div>;
    }
  };

  return <Layout>{renderView()}</Layout>;
};
