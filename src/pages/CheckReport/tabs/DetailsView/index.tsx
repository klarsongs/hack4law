import { GreyBox } from 'pages/CheckReport/styled';
import { Container } from './styled';
import { ReportSummary } from 'containers/ReportSummary';
import { Report } from 'api/reports/types';

export const DetailsView = ({ report }: { report: Report }) => {
  return <ReportSummary report={report} />;
};
