import React, { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(): ReactElement {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!userData.email.includes('@')) {
      setEmailError('Invalid email format');
      return;
    } else {
      setEmailError('');
    }

    if (userData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    } else {
      setPasswordError('');
    }

    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];

    users.push(userData);

    localStorage.setItem('users', JSON.stringify(users));

    navigate('/');
  };

  return (
    <section>
      <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              onChange={e =>
                setUserData({ ...userData, email: e.target.value })
              }
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              required
            />
            <span style={{ marginTop: '10px', fontSize: '12px', color: 'red' }}>
              {emailError}
            </span>
          </label>

          <label>
            <input
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              onChange={e =>
                setUserData({ ...userData, password: e.target.value })
              }
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <span style={{ marginTop: '10px', fontSize: '12px', color: 'red' }}>
              {passwordError}
            </span>
          </label>

          <button type="submit">Sign up</button>
        </form>
        <p>
          Already registered?
          <a href="/signin">Sign in</a>
        </p>
      </div>
    </section>
  );
}

export default Signup;
