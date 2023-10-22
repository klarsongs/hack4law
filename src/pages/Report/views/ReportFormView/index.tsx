import { useEffect, useState } from 'react';
import locale from 'antd/es/date-picker/locale/pl_PL';
import { Button } from 'components/Button';
import { useReportFormContext } from 'pages/Report/ReportFormContext';
import { ReactComponent as ArrowLeftIcon } from 'assets/arrowLeftIcon.svg';
import { ReactComponent as OpenReportIcon } from 'assets/openReportIcon.svg';
import { Typography } from 'components/Typography';
import { Box } from 'components/Box';
import { ReactComponent as AnonymousIcon } from 'assets/anonymousIcon.svg';
import { ReactComponent as PersonIcon } from 'assets/personIcon.svg';
import { ReactComponent as OtherPersonIcon } from 'assets/otherPersonIcon.svg';
import { ReactComponent as AsteriskIcon } from 'assets/asteriskIcon.svg';
import { ReactComponent as CheckmarkIcon } from 'assets/checkmarkIcon.svg';
import { ReactComponent as CrossIcon } from 'assets/crossIcon.svg';
import { ReactComponent as UploadIcon } from 'assets/uploadIcon.svg';
import { ReactComponent as PublicIcon } from 'assets/publicIcon.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/arrowRightIcon.svg';
import { ReactComponent as InfoIcon } from 'assets/infoIcon.svg';
import {
  AlertContainer,
  ButtonLikeRadioButton,
  DataWillBeEditable,
  FormContainer,
  InputWrapper,
  RadioButtonsContainer,
  TitleContainer,
} from './styled';
import { Label } from 'components/Label';
import { Input } from 'components/Input';
import { DatePicker } from 'components/DatePicker';
import { Select } from 'components/Select';
import { Upload } from 'components/Upload';
import { Alert } from 'components/Alert';

export const employerRelationshipOptions = [
  { value: 'employee', label: 'Pracownik' },
  { value: 'formerEmployee', label: 'Były pracownik' },
  { value: 'contractor', label: 'Kontraktor' },
  { value: 'client', label: 'Kontrahent' },
  { value: 'provider', label: 'Dostawca' },
  { value: 'management', label: 'Kierownictwo' },
  { value: 'other', label: 'Inne' },
];

type PersonInvolved = false | 'differentPerson' | 'public';

export const ReportFormView = () => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isDifferentPersonInvolved, setIsDifferentPersonInvolved] =
    useState<PersonInvolved>(false);
  const { formState, setFormState, goToNextView, goToPreviousView } =
    useReportFormContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!formState.subcategory) {
    throw new Error('ReportFormView: subcategory is not defined');
  }

  return (
    <>
      <Button type='text' icon={<ArrowLeftIcon />} onClick={goToPreviousView}>
        Powrót
      </Button>
      <TitleContainer>
        <Typography.Title level={1} style={{ whiteSpace: 'nowrap' }}>
          Zgłoś sprawę
        </Typography.Title>
        <Box
          title={formState.category!.title}
          label='WYBRANA KATEGORIA'
          description={formState.subcategory.title}
          icon={<OpenReportIcon />}
          button={
            <Button type='text' onClick={goToPreviousView}>
              Zmień
            </Button>
          }
          style={{ maxWidth: 450 }}
        />
      </TitleContainer>
      <Alert
        style={{ padding: 16, marginTop: 24 }}
        message={
          <AlertContainer>
            <InfoIcon width={45} />
            <div>
              <Typography.Text style={{ fontSize: 14 }}>
                Osoby dokonujące zgłoszenia powinny mieć uzasadnione podstawy,
                by sądzić, że informacje, które zgłaszają, są prawdziwe i zgodne
                z rzeczywistością w świetle okoliczności i dostępnych im
                informacji w momencie dokonywania zgłoszenia.
              </Typography.Text>
            </div>
          </AlertContainer>
        }
      />
      <FormContainer>
        <InputWrapper>
          <Label.Text>
            Czy chcesz dokonać zgłoszenia anonimowego, czy podać swoje dane?
          </Label.Text>
          <RadioButtonsContainer style={{ marginTop: 4 }}>
            <ButtonLikeRadioButton
              icon={<AnonymousIcon />}
              $isSelected={isAnonymous}
              onClick={() => setIsAnonymous(true)}
            >
              Zgłaszam anonimowo
            </ButtonLikeRadioButton>
            <ButtonLikeRadioButton
              icon={<PersonIcon />}
              $isSelected={!isAnonymous}
              onClick={() => setIsAnonymous(false)}
            >
              Podam swoje dane
            </ButtonLikeRadioButton>
          </RadioButtonsContainer>
        </InputWrapper>

        {!isAnonymous && (
          <>
            <InputWrapper>
              <Label.Text>
                <AsteriskIcon style={{ color: 'red' }} /> Imię
              </Label.Text>
              <Input
                value={formState.firstName}
                onChange={(e) =>
                  setFormState((state) => ({
                    ...state,
                    firstName: e.target.value,
                  }))
                }
                placeholder='Twoje imię'
                $fullWidth
              />
            </InputWrapper>

            <InputWrapper>
              <Label.Text>
                <AsteriskIcon style={{ color: 'red' }} /> Nazwisko
              </Label.Text>
              <Input
                value={formState.lastName}
                onChange={(e) =>
                  setFormState((state) => ({
                    ...state,
                    lastName: e.target.value,
                  }))
                }
                placeholder='Twoje nazwisko'
                $fullWidth
              />
            </InputWrapper>
          </>
        )}

        <InputWrapper>
          <Label.Text>
            <AsteriskIcon style={{ color: 'red' }} /> Opisz swoje zgłoszenie
          </Label.Text>
          <Input
            value={formState.description}
            onChange={(e) =>
              setFormState((state) => ({
                ...state,
                description: e.target.value,
              }))
            }
            placeholder='Opis zgłoszenia'
            $fullWidth
          />
        </InputWrapper>

        <InputWrapper>
          <Label.Text>
            <AsteriskIcon style={{ color: 'red' }} /> Data i czas zdarzenia
          </Label.Text>
          <DatePicker
            showTime={{ format: 'HH:mm' }}
            locale={locale}
            popupStyle={{ color: 'red' }}
            style={{ width: '100%' }}
            onChange={(date) =>
              setFormState((state) => ({
                ...state,
                occurence: date!.toISOString(),
              }))
            }
          />
        </InputWrapper>

        <InputWrapper>
          <Label.Text>Kto jest podmiotem zgłoszenia?</Label.Text>
          <RadioButtonsContainer>
            <ButtonLikeRadioButton
              icon={<PersonIcon />}
              $isSelected={!isDifferentPersonInvolved}
              onClick={() => setIsDifferentPersonInvolved(false)}
            >
              Ja
            </ButtonLikeRadioButton>
            <ButtonLikeRadioButton
              icon={<OtherPersonIcon />}
              $isSelected={isDifferentPersonInvolved === 'differentPerson'}
              onClick={() => setIsDifferentPersonInvolved('differentPerson')}
            >
              Innej osoby
            </ButtonLikeRadioButton>
            <ButtonLikeRadioButton
              icon={<PublicIcon />}
              $isSelected={isDifferentPersonInvolved === 'public'}
              onClick={() => setIsDifferentPersonInvolved('public')}
            >
              Publicznym
            </ButtonLikeRadioButton>
          </RadioButtonsContainer>
        </InputWrapper>

        {isDifferentPersonInvolved && (
          <InputWrapper>
            <Label.Text>
              <AsteriskIcon style={{ color: 'red' }} />
              &nbsp;Informacje o podmiocie naruszenia
            </Label.Text>
            <Input
              value={formState.personInvolved}
              onChange={(e) =>
                setFormState((state) => ({
                  ...state,
                  personInvolved: e.target.value,
                }))
              }
              placeholder='Podmiot zgłoszenia'
              $fullWidth
            />
          </InputWrapper>
        )}

        <InputWrapper>
          <Label.Text>Gdzie miało miejsce naruszenie?</Label.Text>
          <Input
            value={formState.localization}
            onChange={(e) =>
              setFormState((state) => ({
                ...state,
                localization: e.target.value,
              }))
            }
            placeholder='Miejsce naruszenia'
            $fullWidth
          />
        </InputWrapper>

        <InputWrapper>
          <Label.Text>Skąd wiesz o naruszeniu?</Label.Text>
          <Input
            value={formState.sourceOfTruth}
            onChange={(e) =>
              setFormState((state) => ({
                ...state,
                sourceOfTruth: e.target.value,
              }))
            }
            placeholder='Źródło informacji'
            $fullWidth
          />
        </InputWrapper>

        <InputWrapper>
          <Label.Text>Jaka relacja łączy cię z pracodawcą?</Label.Text>
          <Select
            options={employerRelationshipOptions}
            placeholder='Relacja'
            onChange={(val) => {
              setFormState({ ...formState, relationship: val });
            }}
          />
        </InputWrapper>

        <InputWrapper>
          <Label.Text>
            Czy naruszenie było już wcześniej gdzieś zgłaszane?
          </Label.Text>
          <RadioButtonsContainer style={{ marginTop: 4 }}>
            <ButtonLikeRadioButton
              icon={<CrossIcon />}
              $isSelected={!formState.hasBeenAlreadyReported}
              onClick={() =>
                setFormState({ ...formState, hasBeenAlreadyReported: false })
              }
            >
              Nie
            </ButtonLikeRadioButton>
            <ButtonLikeRadioButton
              icon={<CheckmarkIcon />}
              $isSelected={formState.hasBeenAlreadyReported}
              onClick={() =>
                setFormState({ ...formState, hasBeenAlreadyReported: true })
              }
            >
              Tak
            </ButtonLikeRadioButton>
          </RadioButtonsContainer>
        </InputWrapper>

        {formState.hasBeenAlreadyReported && (
          <InputWrapper>
            <Label.Text>
              <AsteriskIcon style={{ color: 'red' }} />
              &nbsp; Gdzie i kiedy naruszenie było zgłaszane? Jaki był efekt
              zgłoszenia?
            </Label.Text>
            <Input
              value={formState.additionalInformation}
              onChange={(e) =>
                setFormState((state) => ({
                  ...state,
                  additionalInformation: e.target.value,
                }))
              }
              placeholder='Dodatkowe informacje'
              $fullWidth
            />
          </InputWrapper>
        )}

        <InputWrapper style={{ display: 'flex', flexDirection: 'column' }}>
          <Label.Text>Załączniki</Label.Text>
          <Upload
            name='file'
            multiple
            beforeUpload={() => false}
            onChange={(info) => {
              const { status } = info.file;
              if (status !== 'uploading') {
                setFormState((state) => ({
                  ...state,
                  files: [...state.files, info.file],
                }));
              }
              if (status === 'done') {
                console.log(`${info.file.name} file uploaded successfully.`);
              } else if (status === 'error') {
                console.log(`${info.file.name} file upload failed.`);
              }
            }}
          >
            <Button type='default' icon={<UploadIcon />}>
              Załaduj plik
            </Button>
          </Upload>
        </InputWrapper>

        <Button
          type='primary'
          onClick={goToNextView}
          style={{ alignSelf: 'flex-end' }}
        >
          <span>Kontynuuj</span>
          <ArrowRightIcon />
        </Button>
        <DataWillBeEditable style={{ alignSelf: 'flex-end' }}>
          Będziesz mieć jeszcze możliwość weryfikacji wprowadzonych informacji.
        </DataWillBeEditable>
      </FormContainer>
    </>
  );
};
