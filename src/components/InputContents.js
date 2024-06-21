import React from "react";
import styled from "styled-components";

const InputContents = ({ contents, onContentsChange }) => {
  return (
    <Container>
      <ContentsInput
        value={contents}
        onChange={onContentsChange}
        placeholder="text"
        maxLength="140"
      />
      <CharacterCount> ( {contents.length} / 140 )</CharacterCount>
    </Container>
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
  overflow: scroll;
  ${({ theme }) => theme.fonts.subText1}
  &:focus {
    outline: none;
  }
`;

const CharacterCount = styled.div`
  position: absolute;
  bottom: 53px;
  right: 45px;
  ${({ theme }) => theme.fonts.subText1}
  color: ${({ theme }) => theme.colors.gray};
`;

export default InputContents;
