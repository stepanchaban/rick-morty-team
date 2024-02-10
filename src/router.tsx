import { App } from '@components/App/App';
import Main from '@pages/main/Main';
import Signin from '@pages/signin/Signin';
import Signup from '@pages/signup/Signup';
import Favorites from '@pages/favorites/Favorites';
import History from '@pages/history/History';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/history',
        element: <History />,
      },
    ],
  },
]);

export default router;
