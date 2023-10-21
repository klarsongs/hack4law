import { useState, Dispatch, SetStateAction } from 'react';

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
  goToNextView: () => void;
  goToPreviousView: () => void;
}

export type View = 'category' | 'categoryInfo' | 'reportForm';

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

  const goToNextView = () => {
    if (currentView === 'category') {
      setCurrentView('categoryInfo');
    } else if (currentView === 'categoryInfo') {
      setCurrentView('reportForm');
    }
  };

  const goToPreviousView = () => {
    if (currentView === 'reportForm') {
      setCurrentView('categoryInfo');
    } else if (currentView === 'categoryInfo') {
      setCurrentView('category');
    }
  };

  return {
    formState,
    setFormState,
    currentView,
    goToNextView,
    goToPreviousView,
  };
};
