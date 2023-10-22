import { UploadFile } from 'antd';
import { submitFiles, submitReportFormRequest } from 'api/resources/requests';
import { Category, Subcategory } from 'api/resources/types';
import { useState, Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';

export interface ReportFormFields {
  category: Category | null;
  subcategory: Subcategory | null;
  firstName: string;
  lastName: string;
  description: string;
  localization: string;
  personInvolved: string;
  occurence: string;
  sourceOfTruth: string;
  hasBeenAlreadyReported: boolean;
  additionalInformation: string;
  files: UploadFile[];
}

export interface ReportSubmitForm {
  occurence: string;
  description: string;
  relation_with_the_company?: string;
  person_involved: string; // INFORMACJE O PODMIOCIE NARUSZENIA
  full_name?: string; // IMIE I NAZWISKO OSOBY ZGŁASZAJĄCEJ
  localization: string;
  source_of_truth?: string; // XD
  already_reported: boolean;
  additional_information?: string;
  category_id: string;
  // files?: FormData;
}

export interface ReportFormContextType {
  formState: ReportFormFields;
  setFormState: Dispatch<SetStateAction<ReportFormFields>>;
  currentView: View;
  setCurrentView: Dispatch<SetStateAction<View>>;
  goToNextView: () => void;
  goToPreviousView: () => void;
  submitForm: () => void;
}

export type View = 'category' | 'subcategory' | 'reportForm';

export const useReportForm = (): ReportFormContextType => {
  const [currentView, setCurrentView] = useState<View>('category');
  const [formState, setFormState] = useState<ReportFormFields>({
    category: null,
    subcategory: null,
    firstName: '',
    lastName: '',
    description: '',
    localization: '',
    personInvolved: '',
    occurence: '',
    sourceOfTruth: '',
    hasBeenAlreadyReported: false,
    additionalInformation: '',
    files: [],
  });

  const sendFilesMutation = useMutation(submitFiles, {
    onSuccess: (data) => {
      console.log('success!!! pliki poszły i nie ogladaja sie za siebie', data);
    },
    onError: (err) => {
      console.error('error!!! kto by sie spodziewal', err);
      // toast('Wystąpił problem podczas wysyłania plików. Spróbuj ponownie.');
    },
  });

  const submitFormMutation = useMutation(submitReportFormRequest, {
    onSuccess: (data) => {
      console.log('DATA:', data);
      if (formState.files && formState.files.length <= 0) {
        return;
      }

      //  @ts-ignore
      sendFiles(data.data.id);
    },
  });

  const sendFiles = (reportId: string) => {
    console.log('reportId:', reportId);
    console.log('formState.files:', formState.files);

    const formData = new FormData();

    formState.files.forEach((file: any) => {
      formData.append('files[]', file as any);
    });

    sendFilesMutation.mutate({
      reportId,
      files: formData,
    });
  };

  const goToNextView = () => {
    setCurrentView((current) => {
      if (current === 'category') {
        return 'subcategory';
      } else if (current === 'subcategory') {
        return 'reportForm';
      }
      return current;
    });
  };

  const goToPreviousView = () => {
    setCurrentView((current) => {
      if (current === 'subcategory') {
        return 'category';
      } else if (current === 'reportForm') {
        return 'subcategory';
      }
      return current;
    });
  };

  const getReportSubmitForm = (): ReportSubmitForm => {
    return {
      occurence: formState.occurence,
      description: formState.description,
      person_involved: `${formState.firstName} ${formState.lastName}`,
      localization: formState.localization,
      already_reported: formState.hasBeenAlreadyReported,
      category_id: formState.subcategory!.id,
      ...(formState.firstName && {
        full_name: `${formState.firstName} ${formState.lastName}`,
      }),
      ...(formState.additionalInformation && {
        additional_information: formState.additionalInformation,
      }),
      ...(formState.sourceOfTruth && {
        source_of_truth: formState.sourceOfTruth,
      }),
      ...(formState.personInvolved && {
        relation_with_the_company: formState.personInvolved,
      }),
    };
  };

  const submitForm = () => {
    submitFormMutation.mutate(getReportSubmitForm());
  };

  return {
    formState,
    setFormState,
    currentView,
    goToNextView,
    goToPreviousView,
    setCurrentView,
    submitForm,
  };
};
