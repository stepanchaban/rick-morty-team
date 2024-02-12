import { ReactElement } from 'react';
import AuthForm from '@components/App/common/AuthForm';

function Signin(): ReactElement {
  return (
    <AuthForm formType="signin">
      You dont have an account? <a href="/signup">Sign up</a>
    </AuthForm>
  );
}

export default Signin;
