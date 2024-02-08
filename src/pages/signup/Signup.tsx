import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setIsAuth } from '../../store/modules/auth/reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Form from '../../components/common/Form';

interface User {
  email: string;
  password: string;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passLength = 6;

const errorMessages = {
  emptyEmail: 'Please enter email',
  invalidEmailFormat: 'Invalid email format',
  emptyPassword: 'Please enter password',
  invalidPasswordLength: `Password must be exactly ${passLength} characters long`,
  passwordsDoNotMatch: 'Passwords do not match',
  emailAlreadyRegistered: 'This email is already registered',
};

const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

const isPasswordValid = (password: string): boolean => {
  return password.length === passLength;
};

const validateEmail = (email: string): string => {
  return isValidEmail(email) ? '' : errorMessages.invalidEmailFormat;
};

const validatePassword = (password: string): string => {
  return isPasswordValid(password) ? '' : errorMessages.invalidPasswordLength;
};

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
    if (name === 'email') {
      setErrors(prevState => ({ ...prevState, email: '' }));
    } else if (name === 'password') {
      setErrors(prevState => ({ ...prevState, password: '' }));
    } else if (name === 'confirmPassword') {
      setErrors(prevState => ({ ...prevState, confirmPassword: '' }));
    }
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setUserData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const emailError = validateEmail(userData.email);
    const passwordError = validatePassword(userData.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError || '',
        password: passwordError || '',
        confirmPassword: '',
      });
      return;
    }

    if (userData.password !== confirmPassword) {
      setErrors(prevState => ({
        ...prevState,
        confirmPassword: errorMessages.passwordsDoNotMatch,
      }));
      return;
    }

    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    const isUser = users.some(user => user.email === userData.email);
    if (isUser) {
      setErrors(prevState => ({
        ...prevState,
        email: errorMessages.emailAlreadyRegistered,
        password: '',
        confirmPassword: '',
      }));
      return;
    }

    dispatch(setIsAuth(true));
    localStorage.setItem('isAuth', 'true');
    users.push(userData);
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
