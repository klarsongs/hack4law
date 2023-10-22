import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'components/Alert';
import { Layout } from 'components/Layout';
import { ReactComponent as LockIcon } from 'assets/lockIcon.svg';
import { ActionBox, AlertContainer, Box } from './styled';
import { Button } from 'components/Button';
import { ReactComponent as ArrowLeftIcon } from 'assets/arrowLeftIcon.svg';
import { TokenManager } from 'utils/TokenManager';
import { ReactComponent as TalkPencilIcon } from 'assets/talkPencil.svg';
import { ReactComponent as FileSearch } from 'assets/fileSearch.svg';
import { theme } from 'theme';
import { FooterLogo } from 'components/FooterLogo';
import { ClientOrganizationLogo } from 'components/ClientOrganizationLogo';

export const ChooseActionPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <ClientOrganizationLogo />
      <Button
        type='text'
        icon={<ArrowLeftIcon />}
        onClick={() => {
          TokenManager.removeToken();
          navigate('/');
        }}
        style={{ marginBottom: 24, fontSize: 14 }}
      >
        Zmień organizację
      </Button>
      <Alert
        style={{ padding: 16 }}
        message={
          <AlertContainer>
            <LockIcon width={30} />
            <div>
              <Typography.Text style={{ fontSize: 14 }}>
                Be Twoje bezpieczeństwo i anonimowość są dla nas priorytetem.
                Zgłaszaj sprawy pewne i w dobrej wierze, wiedząc, że Twój głos
                jest zawsze chroniony.
              </Typography.Text>
            </div>
          </AlertContainer>
        }
      />
      <ActionBox>
        <Box to='/sygnalizuj'>
          <TalkPencilIcon />
          <Typography.Text
            style={{
              fontSize: 20,
              marginBottom: 9,
              fontWeight: 500,
            }}
          >
            Zgłoś nową sprawę
          </Typography.Text>
        </Box>
        <Box to='/sprawdz-raport'>
          <FileSearch />
          <Typography.Text
            style={{
              fontSize: 20,
              marginBottom: 9,
              fontWeight: 500,
            }}
          >
            Sprawdź status sprawy
          </Typography.Text>
        </Box>
      </ActionBox>
      <FooterLogo />
    </Layout>
  );
};
