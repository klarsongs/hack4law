import { ReportFormProvider, useReportFormContext } from './ReportFormContext';
import { CategoryView } from './views/CategoryView';
import { SubcategoryView } from './views/SubcategoryView';
import { Layout } from '../../components/Layout';
import { ReportFormView } from './views/ReportFormView';
import { ReportSummary } from 'containers/ReportSummary';
import { useReportForm } from './useReportForm';
import { Category, Subcategory } from 'api/resources/types';
import { Report } from 'api/reports/types';

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

  const renderView = () => {
    switch (currentView) {
      case 'category':
        return <CategoryView />;
      case 'subcategory':
        return <SubcategoryView />;
      case 'reportForm':
        return <ReportFormView />;
      case 'reviewForm':
        return (
          <ReportSummary
            report={
              {
                category: formState.category as Category,
                description: formState.description,
                full_name: `${formState.firstName} ${formState.lastName}`,
                localization: formState.localization,
                occurrence: formState.occurence,
                person_involved: formState.personInvolved,
                source_of_truth: formState.sourceOfTruth,
                relation_with_the_company: formState.relationship,
                already_reported: formState.hasBeenAlreadyReported,
                files: formState.files as any,
              } as any
            }
          />
        );
      default:
        return <div>view not yet implemented: {currentView}</div>;
    }
  };

  return <Layout>{renderView()}</Layout>;
};
