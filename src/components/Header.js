import React from "react";
import styled from "styled-components";
import airplaneLetter from '../assets/images/airplane_logo.svg';
import logout from '../assets/images/logout icon.svg';

function Header() {
    return(
    <>
    <Wrapper>
        <Logo src={airplaneLetter} alt="비행기레터" />
        <LogOut src= {logout} alt="로그아웃" />
        </Wrapper>
    </>
    );

}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 116px;
    box-shadow: #717171 0px 1px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;

    & > *:first-child {
        margin-left: 360px;
    }

    & > *:last-child {
        margin-right: 363px;
    }
`;

const Logo = styled.img`
    width: 174px;
    height: 34px;
    cursor: pointer;
`;

const LogOut = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export default Header;