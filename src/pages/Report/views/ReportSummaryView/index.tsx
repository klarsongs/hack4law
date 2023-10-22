import { useReportFormContext } from 'pages/Report/ReportFormContext';
import { ReactComponent as OpenReportIcon } from 'assets/openReportIcon.svg';
import {
  ButtonsContainer,
  Container,
  DownloadLink,
  GreyBox,
  TextGrid,
  TextGridItem,
} from './styled';
import { Box } from 'components/Box';
import { Typography } from 'components/Typography';
import { employerRelationshipOptions } from '../ReportFormView';
import { Button } from 'components/Button';
import { ReactComponent as ArrowRightIcon } from 'assets/arrowRightIcon.svg';
import { ReactComponent as ArrowLeftIcon } from 'assets/arrowLeftIcon.svg';
import { useEffect } from 'react';

export function mapRelationship(relationship: string) {
  return employerRelationshipOptions.find(
    (option) => option.value === relationship,
  )?.label;
}

export const ReportSummaryView = () => {
  const { formState, goToPreviousView, submitForm } = useReportFormContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function download(url: string, name: string) {
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <>
      <Button type='text' icon={<ArrowLeftIcon />} onClick={goToPreviousView}>
        Powrót
      </Button>
      <Typography.Title level={1}>Podsumowanie zgłoszenia</Typography.Title>
      <Container>
        <Box
          title={formState.category!.title}
          label='WYBRANA KATEGORIA'
          description={formState.subcategory!.title}
          icon={<OpenReportIcon />}
          button={
            <Button type='text' onClick={goToPreviousView}>
              Zmień
            </Button>
          }
          style={{
            maxWidth: 852,
          }}
        />
        <GreyBox>
          <Typography.Text style={{ fontWeight: 500, marginBottom: 3 }}>
            Opis naruszenia
          </Typography.Text>
          <Typography.Text>{formState.description}</Typography.Text>
        </GreyBox>
        <TextGrid>
          <TextGridItem>
            <Typography.Text style={{ fontWeight: 500 }}>
              Typ zgłoszenia
            </Typography.Text>
            <Typography.Text style={{ fontSize: 16 }}>
              {formState.firstName ? 'Nieanonimowe' : 'Anonimowe'}
            </Typography.Text>
          </TextGridItem>
          <TextGridItem>
            <Typography.Text style={{ fontWeight: 500 }}>
              Data zgłoszenia
            </Typography.Text>
            <Typography.Text style={{ fontSize: 16 }}>
              {formState.occurence
                ? new Date(formState.occurence).toLocaleDateString()
                : 'Nieznana'}
            </Typography.Text>
          </TextGridItem>
          <TextGridItem>
            <Typography.Text style={{ fontWeight: 500 }}>
              Zgłoszenie w interesie
            </Typography.Text>
            <Typography.Text style={{ fontSize: 16 }}>
              {formState.personInvolved ? 'Swoim' : 'Innej osoby'}
            </Typography.Text>
          </TextGridItem>
          <TextGridItem>
            <Typography.Text style={{ fontWeight: 500 }}>
              Miejsce naruszenia
            </Typography.Text>
            <Typography.Text style={{ fontSize: 16 }}>
              {formState.localization ? formState.localization : 'Nieznane'}
            </Typography.Text>
          </TextGridItem>
          <TextGridItem>
            <Typography.Text style={{ fontWeight: 500 }}>
              Źródło informacji
            </Typography.Text>
            <Typography.Text style={{ fontSize: 16 }}>
              {formState.sourceOfTruth ? formState.sourceOfTruth : 'Nieznane'}
            </Typography.Text>
          </TextGridItem>
          <TextGridItem>
            <Typography.Text style={{ fontWeight: 500 }}>
              Relacja z pracodawcą
            </Typography.Text>
            <Typography.Text style={{ fontSize: 16 }}>
              {formState.relationship
                ? mapRelationship(formState.relationship)
                : 'Nieznana'}
            </Typography.Text>
          </TextGridItem>
          <TextGridItem>
            <Typography.Text style={{ fontWeight: 500 }}>
              Czy naruszenie było już zgłaszane?
            </Typography.Text>
            <Typography.Text style={{ fontSize: 16 }}>
              {formState.hasBeenAlreadyReported ? 'Tak' : 'Nie'}
            </Typography.Text>
          </TextGridItem>
        </TextGrid>
        <div>
          <Typography.Text style={{ fontWeight: 500 }}>
            Załączniki
          </Typography.Text>
          <div style={{ marginTop: 4 }}>
            {formState.files.length > 0
              ? formState.files.map((file: any) => (
                  <DownloadLink
                    style={{ cursor: 'pointer', marginBottom: 3 }}
                    onClick={() => download(file.url, file.name)}
                  >
                    {file.name}
                  </DownloadLink>
                ))
              : 'Brak załączników'}
          </div>
        </div>
      </Container>
      <ButtonsContainer>
        <Button type='default' onClick={goToPreviousView}>
          Dokonaj zmian
        </Button>
        <Button type='primary' onClick={submitForm}>
          <span>Prześlij zgłoszenie</span>
          <ArrowRightIcon />
        </Button>
      </ButtonsContainer>
    </>
  );
};
