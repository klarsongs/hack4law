import { Typography } from 'antd';

import { useState } from 'react';

import { Input } from 'components/Input';
import { Layout } from 'components/Layout';
import { Button } from 'components/Button';
import { Label } from 'components/Label';
import { InfoBox } from 'components/InfoBox';
import { OrganizationLogo } from 'components/OrganizationLogo';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowLeftIcon } from 'assets/arrowLeftIcon.svg';

export const EnterReportPage = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('');

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
      <Typography.Title level={1} style={{ marginBottom: 24 }}>
        Sprawdź status sprawy
      </Typography.Title>
      <Label>
        Podaj kod zgłoszenia
        <InfoBox>Gdzie go znajdę?</InfoBox>
      </Label>
      <Input isBig value={value} onChange={(e) => setValue(e.target.value)} />
      <div
        style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Button
          style={{ marginTop: 48 }}
          type='primary'
          onClick={() => navigate(`/sprawdz-raport/${value}`)}
        >
          Potwierdź
        </Button>
      </div>
    </Layout>
  );
};
