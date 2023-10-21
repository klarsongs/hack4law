import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'components/Alert';
import { Layout } from 'components/Layout';
import { OrganizationLogo } from 'components/OrganizationLogo';
import { ReactComponent as InfoIcon } from 'assets/infoIcon.svg';
import { ActionBox, AlertContainer, Box } from './styled';
import { Button } from 'components/Button';
import { ReactComponent as ArrowLeftIcon } from 'assets/arrowLeftIcon.svg';
import { TokenManager } from 'utils/TokenManager';
import { ReactComponent as TalkPencilIcon } from 'assets/talkPencil.svg';
import { ReactComponent as FileSearch } from 'assets/fileSearch.svg';
import { theme } from 'theme';

export const ChooseActionPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <OrganizationLogo />
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
            <InfoIcon />
            <div>
              <Typography.Text
                style={{ fontSize: 20, fontWeight: 500, marginBottom: 8 }}
              >
                Alert
              </Typography.Text>
              <Typography.Text style={{ fontSize: 16 }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit lorem
                ipsum.
              </Typography.Text>
            </div>
          </AlertContainer>
        }
      />
      <ActionBox>
        <Box to='/sygnalizuj'>
          <TalkPencilIcon />
          <Typography.Text
            style={{ fontSize: 20, marginBottom: 9, fontWeight: 500 }}
          >
            Zgłoś nową sprawę
          </Typography.Text>
          <Typography.Text style={{ color: theme.colors.dark }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum.
          </Typography.Text>
        </Box>
        <Box to='/sprawdz-raport'>
          <FileSearch />
          <Typography.Text
            style={{ fontSize: 20, marginBottom: 9, fontWeight: 500 }}
          >
            Sprawdź status sprawy
          </Typography.Text>
          <Typography.Text style={{ color: theme.colors.dark }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum.
          </Typography.Text>
        </Box>
      </ActionBox>
    </Layout>
  );
};
