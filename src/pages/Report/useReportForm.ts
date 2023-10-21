import { useState, Dispatch, SetStateAction, useEffect } from 'react';

export interface ReportFormFields {
  category: string;
  subcategory: string;
  firstName: string;
  lastName: string;
  localization: string;
  date: Date;
  source: string;
  hasBeenAlreadyReported: boolean;
  frequency: string;
}

export interface ReportFormContextType {
  formState: ReportFormFields;
  setFormState: Dispatch<SetStateAction<ReportFormFields>>;
  currentView: View;
  setCurrentView: Dispatch<SetStateAction<View>>;
  goToNextView: () => void;
  goToPreviousView: () => void;
}

export type View = 'category' | 'subcategory' | 'reportForm';

export const useReportForm = (): ReportFormContextType => {
  const [currentView, setCurrentView] = useState<View>('category');
  const [formState, setFormState] = useState<ReportFormFields>({
    category: '',
    subcategory: '',
    firstName: '',
    lastName: '',
    localization: '',
    date: new Date(),
    source: '',
    hasBeenAlreadyReported: false,
    frequency: '',
  });

  useEffect(() => {
    console.log('current view changed:', currentView);
  }, [currentView]);

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

  return {
    formState,
    setFormState,
    currentView,
    goToNextView,
    goToPreviousView,
    setCurrentView,
  };
};
