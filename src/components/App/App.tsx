import { ReactElement } from 'react';
import CommonLayer from './CommonLayer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AppWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export function App(): ReactElement {
    return (
        <AppWrap>
            <CommonLayer>
                <Outlet />
            </CommonLayer>
        </AppWrap>
    )
}