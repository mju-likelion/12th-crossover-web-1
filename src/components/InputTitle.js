import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";

const InputTitle = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <TitleInput placeholder="제목 : " maxLength="20" />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  position: relative;
`;

const TitleInput = styled.input`
  width: 794px;
  height: 134px;
  padding: 55px 35px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 25px;
  gap: 10px;
  font-size: 24px;
  ${({ theme }) => theme.fonts.subTitle}
`;

export default InputTitle;
