import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";

const InputContents = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <ContentsInput placeholder="text" maxLength="140" />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  position: relative;
`;

const ContentsInput = styled.textarea`
  width: 794px;
  height: 751px;
  padding: 35px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 25px;
  gap: 10px;
  font-size: 20px;

  ${({ theme }) => theme.fonts.sumText1}
`;

export default InputContents;
