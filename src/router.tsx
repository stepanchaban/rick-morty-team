import { App } from '@components/App/App';
import Main from '@pages/main/Main';
import Signin from '@pages/signin/Signin';
import Signup from '@pages/signup/Signup';
import Favorites from '@pages/favorites/Favorites';
import History from '@pages/history/History';
import Character from '@pages/character/Character';
import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/characters',
        element: <Main />,
      },
      {
        path: '/characters/:characterId',
        element: <Character />,
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
