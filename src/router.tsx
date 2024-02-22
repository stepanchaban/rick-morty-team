import { App } from '@components/App/App';
import Main from '@pages/main/Main';
import Signin from '@pages/signin/Signin';
import Signup from '@pages/signup/Signup';
import Favorites from '@pages/favorites/Favorites';
import History from '@pages/history/History';
import Character from '@pages/character/Character';
import { createHashRouter } from 'react-router-dom';
import { useAppSelector } from '@hooks/reduxHooks';
import { ReactElement } from 'react';

const ShowFavoritesOrSignin = (): ReactElement => {
  const isAuth = useAppSelector(state => state.auth.auth);

  return isAuth ? <Favorites /> : <Signin />;
};
const ShowHistoryOrSignin = (): ReactElement => {
  const isAuth = useAppSelector(state => state.auth.auth);

  return isAuth ? <History /> : <Signin />;
};

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
        element: <ShowFavoritesOrSignin />,
      },
      {
        path: '/history',
        element: <ShowHistoryOrSignin />,
      },
    ],
  },
]);

export default router;
