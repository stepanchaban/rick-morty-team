import { ReactElement } from 'react';
import AuthForm from '@components/App/common/AuthForm';
import { AuthLink } from '@components/styledComponents/Link';

function Signup(): ReactElement {
  return (
    <AuthForm formType="signup">
      Already registered? <AuthLink href="/signin">Sign in</AuthLink>
    </AuthForm>
  );
}

export default Signup;
