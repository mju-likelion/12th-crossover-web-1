import React from "react";
import styled from "styled-components";

const InputTitle = ({ title, onTitleChange }) => {
  return (
    <Container>
      <TitleInput
        value={title}
        onChange={onTitleChange}
        placeholder="제목 : "
        maxLength="20"
      />
      <CharacterCount> ( {title.length} / 20 )</CharacterCount>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const TitleInput = styled.input`
  width: 724px;
  height: 64px;
  padding: 55px 35px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 25px;
  gap: 10px;
  ${({ theme }) => theme.fonts.subTitle}
  &:focus {
    outline: none;
  }
`;

const CharacterCount = styled.div`
  position: absolute;
  bottom: 51px;
  right: 52px;
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.subText1}
`;

export default InputTitle;
