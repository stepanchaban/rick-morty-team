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
  invalidPasswordLength: 'Password must be exactly 6 characters long',
  invalidCredentials: 'Invalid email or password',
  noUsersFound: 'No users found',
};

const validateEmail = (email: string): string => {
  return emailRegex.test(email) ? '' : errorMessages.invalidEmailFormat;
};

const validatePassword = (password: string): string => {
  return password.length === passLength
    ? ''
    : errorMessages.invalidPasswordLength;
};

const validateUserData = (userData: {
  email: string;
  password: string;
}): { email: string; password: string } => {
  const { email, password } = userData;
  const errors = {
    email: !email ? errorMessages.emptyEmail : validateEmail(email),
    password: !password
      ? errorMessages.emptyPassword
      : validatePassword(password),
  };

  return errors;
};

const authUser = (
  userData: { email: string; password: string },
  users: User[],
): boolean => {
  const user = users.find(
    (user: User) =>
      user.email === userData.email && user.password === userData.password,
  );
  return !!user;
};

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

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    const errors = validateUserData(userData);
    setError(errors);

    if (Object.values(errors).every(error => !error)) {
      const usersString = localStorage.getItem('users');
      if (usersString) {
        const users: User[] = JSON.parse(usersString);
        if (authUser(userData, users)) {
          dispatch(setIsAuth(true));
          localStorage.setItem('isAuth', 'true');
          alert('Login successful!');
          navigate('/');
        } else {
          setError({
            email: errorMessages.invalidCredentials,
            password: errorMessages.invalidCredentials,
          });
        }
      } else {
        setError({
          email: errorMessages.noUsersFound,
          password: errorMessages.noUsersFound,
        });
      }
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
