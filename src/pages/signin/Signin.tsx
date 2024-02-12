import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import Form from '@components/App/common/Form';
import { setIsAuth } from '@store/slice/formSlice';
import {
  validateEmail,
  validatePassword,
} from '@utils/validation/validationUtils';

interface User {
  email: string;
  password: string;
}

function Signin(): ReactElement {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);
  const navigate = useNavigate();

  const [userData, setUserData] = useState<User>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { email, password } = userData;

    const emailValidationResult = validateEmail(email);
    const passwordValidationResult = validatePassword(password);

    if (!emailValidationResult.isValid || !passwordValidationResult.isValid) {
      setError({
        email: emailValidationResult.message,
        password: passwordValidationResult.message,
      });
      return;
    }

    const usersString = localStorage.getItem('users');
    if (!usersString) {
      setError({
        email: 'No users found',
        password: 'No users found',
      });
      return;
    }

    const users: User[] = JSON.parse(usersString);
    const isAuth = users.some(
      user => user.email === email && user.password === password,
    );
    if (isAuth) {
      dispatch(setIsAuth(true));
      localStorage.setItem('isAuth', 'true');
      alert('Login successful!');
      navigate('/');
    } else {
      setError({
        email: 'Invalid email or password',
        password: 'Invalid email or password',
      });
    }
  };

  return (
    <section>
      <div>
        <h1>Sign in</h1>
        <Form
          formType="signin"
          userData={userData}
          formErrors={error}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonText="Login"
          showConfirmPasswordInput={false}
        />
        <p>
          You dont have an account?
          <a href="/signup">Sign up</a>
        </p>
      </div>
    </section>
  );
}

export default Signin;
