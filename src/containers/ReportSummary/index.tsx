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
import { formatDateToPL } from 'utils/dateFormatter';
import { mapRelationship } from 'pages/Report/views/ReportSummaryView';

interface Props {
  report: Omit<
    Report,
    | 'category'
    | 'comments'
    | 'slug'
    | 'id'
    | 'created_at'
    | 'status'
    | 'organization_id'
  >;
}

export const ReportSummary = ({ report }: Props) => {
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
            {report.occurrence
              ? formatDateToPL(new Date(report.occurrence))
              : 'Nieznana'}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Zgłoszenie w interesie
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.person_involved ? 'Swoim' : 'Innej osoby'}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Miejsce naruszenia
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.localization ? report.localization : 'Nieznane'}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Źródło informacji
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.source_of_truth ? report.source_of_truth : 'Nieznane'}
          </Typography.Text>
        </TextGridItem>
        <TextGridItem>
          <Typography.Text style={{ fontWeight: 500 }}>
            Relacja z pracodawcą
          </Typography.Text>
          <Typography.Text style={{ fontSize: 16 }}>
            {report.relation_with_the_company
              ? mapRelationship(report.relation_with_the_company)
              : 'Nieznane'}
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
          {report.files.length > 0
            ? report.files.map((file: File) => (
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
  );
};
