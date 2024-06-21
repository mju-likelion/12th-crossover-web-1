import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";

const SmallButton = ({ buttonText, isEnabled, backgroundColor, onClick}) => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Button isEnabled={isEnabled} backgroundColor={backgroundColor} onClick={isEnabled ? onClick : null}>
          {buttonText}
        </Button>
      </Container>
    </ThemeProvider>
  );
};
const Container = styled.div``;

const Button = styled.button`
  width: 233px;
  height: 70px;
  background-color: ${({ theme, isEnabled, backgroundColor }) =>
    backgroundColor
      ? theme.colors.gray
      : isEnabled
      ? theme.colors.blue2
      : theme.colors.blue1};
  color: #fff;
  text-align: center;
  border-radius: 25px;
  ${({ theme }) => theme.fonts.subText2};
`;
export default SmallButton;
