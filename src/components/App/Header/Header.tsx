import { ReactElement } from 'react';
import logo from '@sources/icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setIsAuth } from '@store/slice/formSlice';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderImg = styled.img`
  width: 20%;
`;

const HeaderButton = styled.button`
  background-color: #4fb4f5;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  letter-spacing: normal;
  line-height: normal;
  padding: 3px 6px;
  transition: background-color 0.4s ease;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #6078ed;
  }
`;

const HeaderLink = styled.a`
  width: 85px;
  height: 30px;
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
    <HeaderWrapper>
      <Link to="/">
        <HeaderImg src={logo}></HeaderImg>
      </Link>
      {auth ? (
        <>
          <HeaderLink>
            <Link to="/favorites">
              <HeaderButton>Favorite</HeaderButton>
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/history">
              <HeaderButton>History</HeaderButton>
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/">
              <HeaderButton onClick={handleLogout}>Log out</HeaderButton>
            </Link>
          </HeaderLink>
        </>
      ) : (
        <>
          <HeaderLink>
            <Link to="/signin">
              <HeaderButton>Log In</HeaderButton>
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link to="/signup">
              <HeaderButton>Sign up</HeaderButton>
            </Link>
          </HeaderLink>
        </>
      )}
    </HeaderWrapper>
  );
}

export default Header;
