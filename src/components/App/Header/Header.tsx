import { ReactElement } from 'react';
import logo from '@sources/icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { setIsAuth } from '@store/store';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';

function Header(): ReactElement {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    dispatch(setIsAuth(false));
    localStorage.setItem('isAuth', 'false');
    navigate('/');
  };

  return (
    <header
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/">
        <img style={{ width: '20%' }} src={logo}></img>
      </Link>
      {auth ? (
        <>
          <Link to="/favorites">
            <button>Favorite</button>
          </Link>
          <Link to="/history">
            <button>History</button>
          </Link>
          <Link to="/">
            <button onClick={handleLogout}>Log out</button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signin">
            <button>Log In</button>
          </Link>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;
