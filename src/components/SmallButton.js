import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";

const SmallButton = ({ buttonText }) => {
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
  width: 233px;
  height: 78px;
  background-color: ${({ theme }) => theme.colors.blue1};
  color: #fff;
  text-align: center;
  border-radius: 25px;
  ${({ theme }) => theme.fonts.subText2};
`;
export default SmallButton;
