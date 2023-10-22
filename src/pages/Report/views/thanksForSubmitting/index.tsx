import { QRCode, Typography } from 'antd';
import { useReportFormContext } from 'pages/Report/ReportFormContext';
import { ReactComponent as SecureIcon } from 'assets/secureIcon.svg';
import { ReactComponent as CopyIcon } from 'assets/printIcon.svg';
import { ReactComponent as PrintIcon } from 'assets/copyIcon.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/arrowRightIcon.svg';
import {
  AlertContentWrapper,
  AlertWrapper,
  ChipButton,
  ChipButtonsContainer,
  QrCodeWrapper,
} from './styled';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';

export const ThanksForSubmittingView = () => {
  const { submissionResultSlug } = useReportFormContext();
  const navigate = useNavigate();

  return (
    <>
      <Typography.Title level={1}>
        Dziękujemy za przesłanie zgłoszenia!
      </Typography.Title>
      <Typography.Text style={{ fontSize: '16px' }}>
        Oto twój unikatowy kod zgłoszenia. Zachowaj go lub wydrukuj, aby mieć
        możliwość śledzenia postępów w zgłoszonej sprawie.
      </Typography.Text>
      <AlertWrapper>
        <SecureIcon />
        <AlertContentWrapper>
          <Typography.Text style={{ fontSize: '16px', fontWeight: 500 }}>
            Zachowaj kod w bezpiecznym miejscu!
          </Typography.Text>
          <Typography.Text style={{ fontSize: '14px', fontWeight: 300 }}>
            Pod żadnym pozorem nie udostępniaj nikomu tego kodu.
          </Typography.Text>
        </AlertContentWrapper>
      </AlertWrapper>
      <QrCodeWrapper>
        <Typography.Text style={{ fontSize: '14px', fontWeight: 500 }}>
          Kod zgłoszenia
        </Typography.Text>
        <Typography.Title level={1} style={{ margin: 0 }}>
          {submissionResultSlug}
        </Typography.Title>
        <QRCode
          value={submissionResultSlug ?? ''}
          size={240}
          style={{ background: 'white', marginTop: '24px' }}
        />
        <ChipButtonsContainer>
          <ChipButton>
            <CopyIcon />
            <span>Kopiuj kod</span>
          </ChipButton>
          <ChipButton>
            <PrintIcon />
            <span>Drukuj kod</span>
          </ChipButton>
        </ChipButtonsContainer>
      </QrCodeWrapper>
      <Button
        type='primary'
        style={{ marginTop: '24px', margin: '24px auto 0 auto' }}
        onClick={() => navigate(`/sprawdz-raport/${submissionResultSlug}`)}
      >
        <span>Zobacz zgłoszenie</span>
        <ArrowRightIcon />
      </Button>
    </>
  );
};
