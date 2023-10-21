import { useState } from 'react';
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
import {
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

const employerRelationshipOptions = [
  { value: 'employee', label: 'Pracownik' },
  { value: 'contractor', label: 'Kontraktor' },
  { value: 'other', label: 'Inne' },
];

export const ReportFormView = () => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isDifferentPersonInvolved, setIsDifferentPersonInvolved] =
    useState(false);
  const { formState, setFormState, goToNextView, goToPreviousView } =
    useReportFormContext();

  if (!formState.subcategory) {
    throw new Error('ReportFormView: subcategory is not defined');
  }

  return (
    <>
      <Button type='text' icon={<ArrowLeftIcon />} onClick={goToPreviousView}>
        Powrót
      </Button>
      <TitleContainer>
        <Typography.Title level={1}>Zgłoś sprawę</Typography.Title>
        <Box
          title={formState.subcategory.title}
          label='WYBRANA KATEGORIA'
          description={formState.subcategory.description}
          icon={<OpenReportIcon />}
          button={
            <Button type='text' onClick={goToPreviousView}>
              Zmień
            </Button>
          }
          style={{ maxWidth: 400 }}
        />
      </TitleContainer>
      <FormContainer>
        <InputWrapper>
          <Label>
            Czy chcesz dokonać zgłoszenia anonimowego, czy podać swoje dane?
          </Label>
          <RadioButtonsContainer>
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

        <InputWrapper>
          <Label>
            <AsteriskIcon style={{ color: 'red' }} /> Opisz swoje zgłoszenie
          </Label>
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
          <Label>
            <AsteriskIcon style={{ color: 'red' }} /> Data i czas zdarzenia
          </Label>
          <DatePicker
            showTime={{ format: 'HH:mm' }}
            locale={locale}
            popupStyle={{ color: 'red' }}
            style={{ width: '100%' }}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Kto jest podmiotem zgłoszenia?</Label>
          <RadioButtonsContainer>
            <ButtonLikeRadioButton
              icon={<PersonIcon />}
              $isSelected={!isDifferentPersonInvolved}
              onClick={() => setIsDifferentPersonInvolved(false)}
            >
              Ja (niem. tak)
            </ButtonLikeRadioButton>
            <ButtonLikeRadioButton
              icon={<OtherPersonIcon />}
              $isSelected={isDifferentPersonInvolved}
              onClick={() => setIsDifferentPersonInvolved(true)}
            >
              Inna osoba
            </ButtonLikeRadioButton>
          </RadioButtonsContainer>
        </InputWrapper>

        {isDifferentPersonInvolved && (
          <InputWrapper>
            <Label>Napisz, kto jest podmiotem zgłoszenia</Label>
            <Input
              value={formState.description}
              onChange={(e) =>
                setFormState((state) => ({
                  ...state,
                  description: e.target.value,
                }))
              }
              placeholder='Podmiot zgłoszenia'
              $fullWidth
            />
          </InputWrapper>
        )}

        <InputWrapper>
          <Label>Gdzie miało miejsce zdarzenie?</Label>
          <Input
            value={formState.description}
            onChange={(e) =>
              setFormState((state) => ({
                ...state,
                description: e.target.value,
              }))
            }
            placeholder='Miejsce zdarzenia'
            $fullWidth
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Jaka relacja łączy cię z pracodawcą?</Label>
          <Select options={employerRelationshipOptions} />
          {/* <Input
            value={formState.description}
            onChange={(e) =>
              setFormState((state) => ({
                ...state,
                description: e.target.value,
              }))
            }
            placeholder='Miejsce zdarzenia'
            $fullWidth
          /> */}
        </InputWrapper>

        <Button
          type='primary'
          onClick={goToNextView}
          style={{ alignSelf: 'flex-end' }}
        >
          Kontynuuj
        </Button>
        <DataWillBeEditable style={{ alignSelf: 'flex-end' }}>
          Będziesz mieć jeszcze możliwość weryfikacji wprowadzonych informacji.
        </DataWillBeEditable>
      </FormContainer>
    </>
  );
};
