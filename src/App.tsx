import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HomePage } from './pages/Home';
import { OrganizationPage } from './pages/Organization';
import { ReportPage } from './pages/Report';
import { CheckReportPage } from './pages/CheckReport';
import { theme } from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/organizacja',
    element: <OrganizationPage />,
  },
  {
    path: '/sygnalizuj',
    element: <ReportPage />,
  },
  {
    path: '/sprawdz-raport/:id',
    element: <CheckReportPage />,
  },
  {
    path: '*',
    element: <div>§404: Sygnalizujemy brak strony</div>,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
