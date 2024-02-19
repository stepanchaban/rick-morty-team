import logo from '@sources/icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setIsAuth } from '@store/slice/formSlice';
import {
  HeaderHead,
  HeaderImg,
  HeaderLink,
  HeaderNav,
  HeaderNavWrapper,
  HeaderNavigationList,
  HeaderWrapper,
} from '@components/styledComponents/Header';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    dispatch(setIsAuth(false));
    localStorage.setItem('isAuth', 'false');
    navigate('/');
  };

  return (
    <HeaderHead>
      <HeaderWrapper>
        <Link to="/">
          <HeaderImg src={logo}></HeaderImg>
        </Link>
        {auth ? (
          <HeaderNavWrapper>
            <HeaderNav>
              <HeaderNavigationList>
                <li>
                  <HeaderLink to="/favorites">
                    <span>Favorite</span>
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink to="/history">
                    <span>History</span>
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink to="/">
                    <span onClick={handleLogout}>Log out</span>
                  </HeaderLink>
                </li>
              </HeaderNavigationList>
            </HeaderNav>
          </HeaderNavWrapper>
        ) : (
          <HeaderNavWrapper>
            <HeaderNav>
              <HeaderNavigationList>
                <li>
                  <HeaderLink to="/signin">
                    <span>Log In</span>
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink to="/signup">
                    <span>Sign up</span>
                  </HeaderLink>
                </li>
              </HeaderNavigationList>
            </HeaderNav>
          </HeaderNavWrapper>
        )}
      </HeaderWrapper>
    </HeaderHead>
  );
};

export default Header;
