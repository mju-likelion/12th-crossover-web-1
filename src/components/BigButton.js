import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";

const BigButton = ({ buttonText }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Button>{buttonText}</Button>
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
  background-color: ${({ theme }) => theme.colors.blue1};
  color: #fff;
  text-align: center;
  border-radius: 25px;
  ${({ theme }) => theme.fonts.button};
`;
export default BigButton;
