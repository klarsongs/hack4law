import { ReportFormProvider, useReportFormContext } from './ReportFormContext';
import { CategoryView } from './views/CategoryView';
import { SubcategoryView } from './views/SubcategoryView';
import { Layout } from '../../components/Layout';
import { ReportFormView } from './views/ReportFormView';
import { useReportForm } from './useReportForm';
import { useEffect } from 'react';
import { ReportSummaryView } from './views/ReportSummaryView';
import { ThanksForSubmittingView } from './views/thanksForSubmitting';

export const ReportPage = () => {
  return (
    <ReportFormProvider>
      <PageContent />
    </ReportFormProvider>
  );
};

const PageContent = () => {
  const { currentView } = useReportFormContext();
  const { formState } = useReportForm();

  useEffect(() => {
    console.log('formState:', formState);
  }, [formState]);

  const renderView = () => {
    switch (currentView) {
      case 'category':
        return <CategoryView />;
      case 'subcategory':
        return <SubcategoryView />;
      case 'reportForm':
        return <ReportFormView />;
      case 'reviewForm':
        return <ReportSummaryView />;
      case 'thanksForSubmitting':
        return <ThanksForSubmittingView />;
      default:
        return <div>view not yet implemented: {currentView}</div>;
    }
  };

  return <Layout>{renderView()}</Layout>;
};
