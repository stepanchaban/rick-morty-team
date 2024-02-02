import { ReactElement } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

export function App(): ReactElement {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}