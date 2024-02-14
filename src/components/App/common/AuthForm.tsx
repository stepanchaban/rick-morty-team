import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setIsAuth } from '@store/slice/formSlice';
import Form from '@components/App/common/Form';
import {
  validateEmail,
  validatePassword,
} from '@utils/validation/validationUtils';
import { css, styled } from 'styled-components';

const authSectionStyles = css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const AuthSection = styled.section`
  ${authSectionStyles}
`;

const AuthWrapper = styled.div`
  ${authSectionStyles}
  border-radius: 12px;
  margin-top: 40px;
  max-width: 500px;
  padding: 20px;
`;

const AuthTitle = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: normal;
  margin: 0 0 20px;
`;

const AuthText = styled.p`
  color: #929393;
  font-family: Jost, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: normal;
  margin: 20px 0 0;
`;

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface AuthFormProps {
  formType: 'signin' | 'signup';
  children: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({
  formType,
  children,
}): ReactElement => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);
  const navigate = useNavigate();

  const [userData, setUserData] = useState<User>({ email: '', password: '' });
  const [errors, setErrors] = useState<{
    email: string;
    password: string;
    confirmPassword?: string;
  }>({ email: '', password: '', confirmPassword: '' });

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { email, password } = userData;
    const emailValidationResult = validateEmail(email);
    const passwordValidationResult = validatePassword(password);

    if (!emailValidationResult.isValid || !passwordValidationResult.isValid) {
      setErrors({
        email: emailValidationResult.message,
        password: passwordValidationResult.message,
      });
      return;
    }

    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    if (formType === 'signup') {
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

      if (userData.password !== userData.confirmPassword) {
        setErrors(prevState => ({
          ...prevState,
          confirmPassword: 'Passwords do not match',
        }));
        return;
      }

      dispatch(setIsAuth(true));
      localStorage.setItem('isAuth', 'true');
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/');
    } else {
      const existingUser = users.find(user => user.email === email);
      if (!existingUser || existingUser.password !== password) {
        setErrors({
          email: 'Invalid email or password',
          password: 'Invalid email or password',
        });
        return;
      }

      dispatch(setIsAuth(true));
      localStorage.setItem('isAuth', 'true');
      alert('Login successful!');
      navigate('/');
    }
  };

  return (
    <AuthSection>
      <AuthWrapper>
        <AuthTitle>{formType === 'signin' ? 'Sign in' : 'Sign up'}</AuthTitle>
        <Form
          formType={formType}
          userData={userData}
          formErrors={errors}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonText={formType === 'signin' ? 'Login' : 'Sign up'}
          showConfirmPasswordInput={formType === 'signup'}
        />
        <AuthText>{children}</AuthText>
      </AuthWrapper>
    </AuthSection>
  );
};

export default AuthForm;
