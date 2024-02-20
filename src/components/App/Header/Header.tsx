import { ReactElement } from 'react';
import logo from '@sources/icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setIsAuth } from '@store/slice/formSlice';
import styled from 'styled-components';

const HeaderHead = styled.header`
  background-color: #fdfdff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  flex: 0 1 auto;
  max-width: 100%;
  position: relative;
`;

const HeaderWrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;
  padding: 40px 20px;
`;

const HeaderImg = styled.img`
  width: 105px;
  height: 100px;
`;

const HeaderNavWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
`;

const HeaderNav = styled.nav`
  margin-right: 20px;
`;

const HeaderNavigationList = styled.ul`
  align-items: center;
  display: flex;
  gap: 18px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const HeaderLink = styled(Link)`
  color: #6078ed;
  font-family: Jost, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: normal;
  padding-bottom: 5px;
  text-decoration: none;
  transition: opacity 0.4s ease;

  &:hover {
    color: #4fb4f5;
  }
`;

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
}

export default Header;
