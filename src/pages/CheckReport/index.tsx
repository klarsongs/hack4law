import { useParams, Navigate } from 'react-router-dom';
import { useReportsService } from 'api/reports/service';
import { Layout } from 'components/Layout';
import { OrganizationLogo } from 'components/OrganizationLogo';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowLeftIcon } from 'assets/arrowLeftIcon.svg';
import { Typography } from 'components/Typography';
import { GreyBox } from './styled';

import { Spin, TabsProps } from 'antd';
import { Tabs } from 'components/Tabs';
import { DetailsView } from './tabs/DetailsView';
import { ComunicationView } from './tabs/ComunicationView';

export const CheckReportPage = () => {
  const { id } = useParams();
  const { useGetReport } = useReportsService();
  const { data, isLoading } = useGetReport(id || '');
  const navigate = useNavigate();

  if (isLoading) return <Spin />;
  if (!data && !isLoading) return <Navigate to='/sprawdz-raport' />;

  const report = data.data;

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Detale zgłoszenia',
      children: <DetailsView report={report} />,
    },
    {
      key: '2',
      label: 'Komunikacja',
      children: <ComunicationView id={report.id} comments={report.comments} />,
    },
  ];

  return (
    <Layout>
      <OrganizationLogo size='small' />
      <Button
        type='text'
        icon={<ArrowLeftIcon />}
        onClick={() => navigate('/wybierz-akcje')}
      >
        Powrót
      </Button>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography.Title level={1} style={{ marginRight: 16 }}>
          Zgłoszenie
        </Typography.Title>
        <GreyBox style={{ marginTop: 8 }}>
          <Typography.Text style={{ fontSize: 24 }}>{id}</Typography.Text>
        </GreyBox>
      </div>
      <Tabs defaultActiveKey='1' items={items} />
    </Layout>
  );
};
