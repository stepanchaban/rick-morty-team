import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderHead = styled.header`
  background-color: #fdfdff;
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

export const HeaderLink = styled(Link)`
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
