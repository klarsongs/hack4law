import { createContext, useContext, FC, ReactNode } from 'react';
import { useReportForm, ReportFormContextType } from './useReportForm';

interface ReportFormProviderProps {
  children: ReactNode;
}

const ReportFormContext = createContext<ReportFormContextType | undefined>(
  undefined,
);

export const ReportFormProvider: FC<ReportFormProviderProps> = ({
  children,
}) => {
  const contextValue = useReportForm();

  return (
    <ReportFormContext.Provider value={contextValue}>
      {children}
    </ReportFormContext.Provider>
  );
};

export const useReportFormContext = (): ReportFormContextType => {
  const context = useContext(ReportFormContext);
  if (!context) {
    throw new Error(
      'useReportFormContext must be used within a ReportFormProvider',
    );
  }
  return context;
};
