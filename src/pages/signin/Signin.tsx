import { ReactElement, useState } from 'react';

function Signin(): ReactElement {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleLogin = (event: React.FormEvent): void => {
    event.preventDefault();

    if (!userData.email || !userData.password) {
      setError('Please enter email and password.');
      return;
    }

    const usersString = localStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === userData.email && user.password === userData.password,
      );
      if (user) {
        setError('');
        alert('Login successful!');
        window.location.href = '/';
      } else {
        setError('Invalid email or password.');
      }
    } else {
      setError('No users found.');
    }
  };

  return (
    <section>
      <div>
        <h1>Sign in</h1>
        <form onSubmit={handleLogin}>
          <label>
            <input
              type="text"
              placeholder="Email"
              value={userData.email}
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              onChange={e =>
                setUserData({ ...userData, email: e.target.value })
              }
              required
            />
          </label>

          <label>
            <input
              type="password"
              placeholder="Password"
              value={userData.password}
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              onChange={e =>
                setUserData({ ...userData, password: e.target.value })
              }
              required
            />
          </label>

          <button type="submit">Login</button>
          {error && (
            <span style={{ marginTop: '10px', fontSize: '12px', color: 'red' }}>
              {error}
            </span>
          )}
        </form>
        <p>
          You dont have an account?
          <a href="/signup">Sign up</a>
        </p>
      </div>
    </section>
  );
}

export default Signin;
