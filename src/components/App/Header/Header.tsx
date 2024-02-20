import React from 'react';
import logo from '@sources/icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setIsAuth } from '@store/slice/formSlice';
import { useTheme } from '@context/ThemeContext';
import {
  HeaderButton,
  HeaderHead,
  HeaderImg,
  HeaderLink,
  HeaderNav,
  HeaderNavWrapper,
  HeaderNavigationList,
  HeaderWrapper,
} from '@components/styledComponents/Header';
import { ReactComponent as MoonIcon } from '@sources/icons/moon.svg';
import { ReactComponent as SunIcon } from '@sources/icons/sun.svg';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = (): void => {
    dispatch(setIsAuth(false));
    localStorage.setItem('isAuth', 'false');
    navigate('/');
  };

  return (
    <HeaderHead theme={theme}>
      <HeaderWrapper>
        <Link to="/">
          <HeaderImg src={logo}></HeaderImg>
        </Link>
        {auth ? (
          <HeaderNavWrapper>
            <HeaderNav>
              <HeaderNavigationList>
                <li>
                  <HeaderLink theme={theme} to="/favorites">
                    <span>Favorite</span>
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink theme={theme} to="/history">
                    <span>History</span>
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink theme={theme} to="/">
                    <span onClick={handleLogout}>Log out</span>
                  </HeaderLink>
                </li>
                <HeaderButton onClick={toggleTheme}>
                  {theme === 'light' ? <SunIcon /> : <MoonIcon />}
                </HeaderButton>
              </HeaderNavigationList>
            </HeaderNav>
          </HeaderNavWrapper>
        ) : (
          <HeaderNavWrapper>
            <HeaderNav>
              <HeaderNavigationList>
                <li>
                  <HeaderLink theme={theme} to="/signin">
                    <span>Log In</span>
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink theme={theme} to="/signup">
                    <span>Sign up</span>
                  </HeaderLink>
                </li>
                <HeaderButton onClick={toggleTheme}>
                  {theme === 'light' ? <SunIcon /> : <MoonIcon />}
                </HeaderButton>
              </HeaderNavigationList>
            </HeaderNav>
          </HeaderNavWrapper>
        )}
      </HeaderWrapper>
    </HeaderHead>
  );
};

export default Header;
