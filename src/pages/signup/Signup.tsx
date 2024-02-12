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

function Signup(): ReactElement {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);
  const navigate = useNavigate();

  const [userData, setUserData] = useState<User>({
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [errors, setErrors] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setErrors(prevState => ({ ...prevState, [name]: '' }));

    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setUserData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { email, password } = userData;

    const emailValidationResult = validateEmail(email);
    const passwordValidationResult = validatePassword(password);

    if (
      !emailValidationResult.isValid ||
      !passwordValidationResult.isValid ||
      password !== confirmPassword
    ) {
      setErrors({
        email: emailValidationResult.message,
        password: passwordValidationResult.message,
        confirmPassword:
          password !== confirmPassword ? 'Passwords do not match' : '',
      });
      return;
    }

    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    const isUser = users.some(user => user.email === email);
    if (isUser) {
      setErrors(prevState => ({
        ...prevState,
        email: 'This email is already registered',
        password: '',
        confirmPassword: '',
      }));
      return;
    }

    dispatch(setIsAuth(true));
    localStorage.setItem('isAuth', 'true');
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    navigate('/');
  };

  return (
    <section>
      <div>
        <h1>Sign up</h1>
        <Form
          formType="signup"
          userData={userData}
          formErrors={errors}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonText="Sign up"
          showConfirmPasswordInput={true}
        />
        <p>
          Already registered?
          <a href="/signin">Sign in</a>
        </p>
      </div>
    </section>
  );
}

export default Signup;
