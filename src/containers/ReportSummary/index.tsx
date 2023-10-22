import { Report } from 'api/reports/types';
import {
  Container,
  DownloadLink,
  GreyBox,
  TextGrid,
  TextGridItem,
} from './styled';
import { Box } from 'components/Box';

import { ReactComponent as OpenReportIcon } from 'assets/openReportIcon.svg';
import { Typography } from 'components/Typography';

import { File } from 'api/reports/types';

export const ReportSummary = ({ report }: { report: Report }) => {
  function download(url: string, filename: string) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      })
      .catch(console.error);
  }

  return (
    <Container>
      <Box
        title={report.subcategory.title}
        label='WYBRANA KATEGORIA'
        description={report.subcategory.description}
        icon={<OpenReportIcon />}
        button={null}
        style={{
          maxWidth: 852,
        }}
      />
      <GreyBox>
        <Typography.Text style={{ fontWeight: 500, marginBottom: 3 }}>
          Opis naruszenia
        </Typography.Text>
        <Typography.Text>{report.description}</Typography.Text>
      </GreyBox>
      <TextGrid>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Typ zgłoszenia
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report?.full_name ? 'Nieanonimowe' : 'Anonimowe'}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Data zgłoszenia
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.occurrence.slice(0, 10)}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Zgłoszenie w interesie
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.person_involved}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Miejsce naruszenia
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.localization}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Źródło informacji
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.source_of_truth}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Relacja z pracodawcą
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.relation_with_the_company}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Czy naruszenie było już zgłaszane?
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.already_reported ? 'Tak' : 'Nie'}
          </Typography.Text>
        </TextGridItem>
      </TextGrid>
      <div>
        <Typography.Text style={{ fontWeight: 500 }}>
          Załączniki
        </Typography.Text>
        <div style={{ marginTop: 4 }}>
          {report.files.map((file: File) => (
            <DownloadLink
              style={{ cursor: 'pointer', marginBottom: 3 }}
              onClick={() => download(file.url, file.name)}
            >
              {file.name}
            </DownloadLink>
          ))}
        </div>
      </div>
    </Container>
  );
};
