import { ReactElement } from 'react';
import AuthForm from '@components/App/common/AuthForm';
import styled from 'styled-components';

const AuthLink = styled.a`
  color: #6078ed;
  text-decoration: none;
  transition: opacity 0.4s ease;

  &:hover {
    color: #4fb4f5;
  }
`;

function Signup(): ReactElement {
  return (
    <AuthForm formType="signup">
      Already registered? <AuthLink href="/signin">Sign in</AuthLink>
    </AuthForm>
  );
}

export default Signup;
