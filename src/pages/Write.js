import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputTitle from "../components/InputTitle";
import InputContents from "../components/InputContents";
import SmallButton from "../components/SmallButton";
import { Axios } from "../api/Axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  const isButtonEnabled = title.length > 0 && contents.length > 0;

  const handleSubmit = async () => {
    if (isButtonEnabled) {
      try {
        const response = await Axios.post("/boards", {
          title: title,
          content: contents,
        });

        if (response.status === 200 || response.status === 201) {
          const newBoardId = response.data.data.id;
          navigate(`/boards/${newBoardId}`);
        } else {
          console.error("에러", response.data);
          alert("제출 실패. 다시 시도");
        }
      } catch (error) {
        console.error("에러", error);
        alert("에러발생. 다시 시도");
      }
    }
  };

  return (
    <MainContainer>
      <ContentContainer>
        <InputTitle
          title={title}
          onTitleChange={handleTitleChange}
          readOnly={false}
        />
        <InputContents
          contents={contents}
          onContentsChange={handleContentsChange}
        />
        <InfoText>※ 작성된 게시물은 수정이 불가합니다.</InfoText>
        <ButtonContainer>
          <SmallButton
            buttonText="작성하기"
            isEnabled={isButtonEnabled}
            onClick={handleSubmit}
            readOnly={false}
          />
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
