import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RoutePage from './pages/RoutePage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RoutePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
