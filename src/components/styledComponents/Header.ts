import { ThemeProps } from '@projectTypes/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderHead = styled.header<ThemeProps>`
  background-color: ${({ theme = 'light' }): string =>
    theme === 'light' ? '#fdfdff' : '#565656'};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  flex: 0 1 auto;
  max-width: 100%;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;
  padding: 40px 20px;
`;

export const HeaderImg = styled.img`
  width: 105px;
  height: 100px;
`;

export const HeaderNavWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
`;

export const HeaderNav = styled.nav`
  margin-right: 20px;
`;

export const HeaderNavigationList = styled.ul`
  align-items: center;
  display: flex;
  gap: 18px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const HeaderLink = styled(Link)<ThemeProps>`
  color: ${({ theme = 'light' }): string =>
    theme === 'light' ? '#6078ed ' : '#fff '};
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

export const HeaderButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: lightgray;
  }
`;
