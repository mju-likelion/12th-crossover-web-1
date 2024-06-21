import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";

const SmallButton = ({ buttonText, isEnabled }) => {
    return (
    <ThemeProvider theme={Theme}>
        <Container ainer>
        <Button isEnabled={isEnabled}>{buttonText}</Button>
        </Container>
    </ThemeProvider>
    );
};
const Container = styled.div``;

const Button = styled.button`
    width: 233px;
    height: 70px;
    background-color: ${({ theme, isEnabled }) =>
    isEnabled ? theme.colors.blue2 : theme.colors.blue1};
    color: #fff;
    text-align: center;
    border-radius: 25px;
    ${({ theme }) => theme.fonts.subText2};
`;
export default SmallButton;
