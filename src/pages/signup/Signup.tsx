import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setIsAuth } from '../../store/modules/auth/reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Form from '../../components/common/Form';

interface User {
  email: string;
  password: string;
  confirmPassword: string;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

const passLength = 6;

const isPasswordValid = (password: string): string | null => {
  if (password.length < passLength) {
    return 'Password must be at least 6 characters long';
  }
  return null;
};

function Signup(): ReactElement {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);
  const navigate = useNavigate();

  const [userData, setUserData] = useState<User>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
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
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isValidEmail(userData.email)) {
      setErrors(prevState => ({
        ...prevState,
        email: 'Invalid email format',
      }));
      return;
    }

    const passwordError = isPasswordValid(userData.password);
    if (passwordError) {
      setErrors(prevState => ({
        ...prevState,
        password: passwordError,
      }));
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      setErrors(prevState => ({
        ...prevState,
        confirmPassword: 'Passwords do not match',
      }));
      return;
    }

    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    const isUser = users.some((user: User) => user.email === userData.email);
    if (isUser) {
      setErrors({
        ...errors,
        email: 'This email is already registered',
      });
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
