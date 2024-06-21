import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
    return (
        <>
        <Header />
        <MainWrapper>
            <Outlet />
        </MainWrapper>
        </>
    );
}

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 116px;
`;

export default Layout;