import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";

const BigButton = ({ buttonText, isEnabled }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Button isEnabled={isEnabled}>{buttonText}</Button>
      </Container>
    </ThemeProvider>
  );
};
const Container = styled.div`
  margin: 20px;
`;
const Button = styled.button`
  width: 540px;
  height: 90px;
  background-color: ${({ theme, isEnabled }) =>
    isEnabled ? theme.colors.blue2 : theme.colors.blue1};
  color: #fff;
  text-align: center;
  border-radius: 25px;
  ${({ theme }) => theme.fonts.button};
`;
export default BigButton;
