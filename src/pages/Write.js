import React, { useState } from "react";
import styled from "styled-components";
import InputTitle from "../components/InputTitle";
import InputContents from "../components/InputContents";
import SmallButton from "../components/SmallButton";

const Write = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  const isButtonEnabled = title.length > 0 && contents.length > 0;

  return (
    <MainContainer>
      <ContentContainer>
        <InputTitle title={title} onTitleChange={handleTitleChange} />
        <InputContents
          contents={contents}
          onContentsChange={handleContentsChange}
        />
        <InfoText>※ 작성된 게시물은 수정이 불가합니다.</InfoText>
        <ButtonContainer>
          <SmallButton buttonText="작성하기" isEnabled={isButtonEnabled} />
        </ButtonContainer>
      </ContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin-top: 58px;
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
  ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  text-align: left;
  margin-left: 35px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 33px;
`;

export default Write;
