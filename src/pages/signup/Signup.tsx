import { ReactElement } from 'react';
import AuthForm from '@components/App/common/AuthForm';

function Signup(): ReactElement {
  return (
    <AuthForm formType="signup">
      Already registered? <a href="/signin">Sign in</a>
    </AuthForm>
  );
}

export default Signup;
