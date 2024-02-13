import { ReactElement } from 'react';
import AuthForm from '@components/App/common/AuthForm';
import styled from 'styled-components';

const AuthLink = styled.a`
  color: #6078ed;
  text-decoration: none;
  transition: opacity 0.4s ease;
`;

function Signin(): ReactElement {
  return (
    <AuthForm formType="signin">
      You dont have an account? <AuthLink href="/signup">Sign up</AuthLink>
    </AuthForm>
  );
}

export default Signin;
