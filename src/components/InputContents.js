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
  width: 724px;
  height: 681px;
  padding: 35px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 25px;
  gap: 10px;
  font-size: 20px;
  resize: none;
  overflow: hidden;

  ${({ theme }) => theme.fonts.subText1}
`;

export default InputContents;
