import { ReactElement } from 'react';
import AuthForm from '@components/App/common/AuthForm';
import { AuthLink } from '@components/styledComponents/Link';

function Signin(): ReactElement {
  return (
    <AuthForm formType="signin">
      You dont have an account? <AuthLink href="/signup">Sign up</AuthLink>
    </AuthForm>
  );
}

export default Signin;
