import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";

const InputFilled = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <ThemeProvider theme={Theme}>
      <InputContainer>
        <Filled
          placeholder={placeholder}
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        {inputValue && <ClearButton onClick={clearInput}>X</ClearButton>}
      </InputContainer>
    </ThemeProvider>
  );
};

const InputContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const Filled = styled.input`
  width: 484px;
  min-height: 36px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 25px;
  ${({ theme }) => theme.fonts.default};
  padding: 29px 27px;
  gap: 10px;
  &:focus {
    outline: none;
  }
`;

const ClearButton = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 28.5px;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.gray};
  color: #fff;
  border-radius: 50px;
  font-size: 20px;
`;

export default InputFilled;
