import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HomePage } from './pages/Home';
import { ReportPage } from './pages/Report';
import { CheckReportPage } from './pages/CheckReport';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
