import { css, styled } from 'styled-components';

const authSectionStyles = css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const AuthSection = styled.section`
  ${authSectionStyles}
`;

export const AuthWrapper = styled.div`
  ${authSectionStyles}
  border-radius: 12px;
  margin-top: 40px;
  max-width: 500px;
  padding: 20px;
`;

export const AuthTitle = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: normal;
  margin: 0 0 20px;
`;

export const AuthText = styled.p`
  color: #929393;
  font-family: Jost, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: normal;
  margin: 20px 0 0;
`;
