import React from "react";
import styled from "styled-components";
import airplaneLetter from '../assets/images/airplane_logo.svg';
import logout from '../assets/images/logout_icon.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoginPage = location.pathname === '/auth/login';
    const isJoinPage = location.pathname === '/auth/signin';

    const handleLogoClick = () => {
        navigate('/boards/page');
        window.scrollTo(0, 0);
    };

    return(
    <Wrapper>
        {(!isLoginPage && !isJoinPage) ? (
                <Link to="/boards/page">
        <Logo src={airplaneLetter} alt="비행기레터" onClick={handleLogoClick} />
        </Link>
            ) : (
                <Logo src={airplaneLetter} alt="비행기레터" />
            )}
        {(!isLoginPage && !isJoinPage) && (
            <Link to="/auth/login"><LogOut src= {logout} alt="로그아웃"/></Link>
        )}
        </Wrapper>
    );

}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 116px;
    box-shadow: ${({ theme }) => theme.colors.gray} 0px 1px 0px 0px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 40px 360px;
    z-index: 1000;
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