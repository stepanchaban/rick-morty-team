import { ReactElement } from 'react';
import AuthForm from '@components/App/common/AuthForm';
import styled from 'styled-components';

const AuthLink = styled.a`
  color: #6078ed;
  text-decoration: none;
  transition: opacity 0.4s ease;
`;

function Signup(): ReactElement {
  return (
    <AuthForm formType="signup">
      Already registered? <AuthLink href="/signin">Sign in</AuthLink>
    </AuthForm>
  );
}

export default Signup;
