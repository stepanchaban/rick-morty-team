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

const validateEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

const passLength = 6;

const validatePassword = (password: string): boolean => {
  return password.length === passLength;
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

  const [userData, setUserData] = useState<{ email: string; password: string }>(
    {
      email: '',
      password: '',
    },
  );

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

  const validateUserData = (): boolean => {
    let isValid = true;
    const newError = {
      email: '',
      password: '',
    };

    if (!userData.email) {
      newError.email = 'Please enter email';
      isValid = false;
    } else if (!validateEmail(userData.email)) {
      newError.email = 'Invalid email format';
      isValid = false;
    }

    if (!userData.password) {
      newError.password = 'Please enter password';
      isValid = false;
    } else if (!validatePassword(userData.password)) {
      newError.password = 'Password must be exactly 6 characters long';
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (!validateUserData()) {
      return;
    }

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
          email: 'Invalid email or password',
          password: 'Invalid email or password',
        });
      }
    } else {
      setError({
        email: 'No users found',
        password: 'No users found',
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
