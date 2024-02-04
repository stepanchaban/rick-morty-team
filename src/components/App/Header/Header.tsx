import { ReactElement } from 'react';
import logo from '../../../sources/icons/logo.png';
import { Link } from 'react-router-dom';

function Header(): ReactElement {
  return (
    <header
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/">
        <img style={{ width: '20%' }} src={logo}></img>
      </Link>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </header>
  );
}

export default Header;
