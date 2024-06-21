import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";
import Header from "../components/Header";
import InputTitle from "../components/InputTitle";
import InputContents from "../components/InputContents";
import SmallButton from "../components/SmallButton"; // SmallButton 컴포넌트 import

const Detail = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <MainContainer>
        <ContentContainer>
          <InputTitle />
          <InputContents />
          <InfoText>※ 작성된 게시물은 수정이 불가합니다.</InfoText>
          <ButtonContainer>
            <StyledSmallButton buttonText="삭제하기" />
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
};

const MainContainer = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const InfoText = styled.p`
  ${({ theme }) => theme.fonts.subText2};
  width: 100%;
  text-align: left;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledSmallButton = styled(SmallButton)`
  && {
    color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
  }
`;

export default Detail;
