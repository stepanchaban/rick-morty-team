import React, { ReactElement } from 'react';
import logo from './sources/icons/logo.png';
import { Link } from 'react-router-dom';

function Header(): ReactElement {
    return (
        <header>
            <Link to='/'><img src={logo}></img></Link>
            <Link to='/signin'><button>Log In</button></Link>
            <Link to='/signup'><button>Sign up</button></Link>
        </header>
    )
}

export function App(): ReactElement {
    return (
        <Header/>
    )   
}