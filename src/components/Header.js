import React from "react";
import styled from "styled-components";
import airplaneLetter from '../assets/images/airplane_logo.svg';
import logout from '../assets/images/logout_icon.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Axios } from "../api/Axios";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoginPage = location.pathname === '/auth/login';
    const isJoinPage = location.pathname === '/auth/signin';

    const handleLogoClick = () => {
        navigate('/boards/page');
        window.scrollTo(0, 0);
    };

    const handleLogout = async () => {
        try {
            const response = await Axios.get("/auth/logout");
            if(response.data.statusCode === "200") {
                navigate('/auth/login');
            }
            else {
                console.error('로그아웃 요청 실패');
            }
        }catch (error) {
            console.error('로그아웃 중 오류 발생: ', error);
        }
    }


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
            <LogOutButton onClick={handleLogout}>
            <LogOut src={logout} alt="로그아웃" />
        </LogOutButton>
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

const LogOutButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`;

export default Header;