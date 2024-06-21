import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";
import errorIcon from "../assets/images/ error.svg";

const InputFilled = ({
  placeholder,
  type,
  validate,
  hint,
  validBorderColor,
  successMessage,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (validate) {
      try {
        await validate(value);
        setError("");
        setIsValid(true);
      } catch (validationError) {
        setError(validationError.message);
        setIsValid(false);
      }
    }
  };

  const clearInput = () => {
    setInputValue("");
    setError("");
    setIsValid(false);
  };

  return (
    <ThemeProvider theme={Theme}>
      <InputContainer>
        <Filled
          placeholder={placeholder}
          type={type}
          value={inputValue}
          onChange={handleChange}
          error={error}
          isValid={isValid}
          validBorderColor={validBorderColor}
        />
        {inputValue && (
          <ErrorIconContainer error={error}>
            {error && <ErrorIcon src={errorIcon} alt="Error" />}
          </ErrorIconContainer>
        )}
        {inputValue && <ClearButton onClick={clearInput}>X</ClearButton>}
        {error && <ErrorText>{error}</ErrorText>}
        {!inputValue && !error && <HintText>{hint}</HintText>}
        {isValid && (
          <SuccessText validBorderColor={validBorderColor}>
            {successMessage}
          </SuccessText>
        )}
      </InputContainer>
    </ThemeProvider>
  );
};

const InputContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const ErrorIconContainer = styled.div`
  display: ${({ error }) => (error ? "block" : "none")};
`;

const ErrorIcon = styled.img`
  position: absolute;
  right: 72.5px;
  top: 35%;
  transform: translateY(-50%);
`;

const Filled = styled.input`
  width: 484px;
  min-height: 36px;
  border: 2px solid
    ${({ theme, error, isValid, validBorderColor }) =>
      error ? "red" : isValid ? validBorderColor : theme.colors.gray};
  border-radius: 25px;
  ${({ theme }) => theme.fonts.default};
  padding: 29px 27px;
  margin-bottom: 16px;
  &:focus {
    outline: none;
  }
`;

const ClearButton = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 28.5px;
  top: 35%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.gray};
  color: #fff;
  border-radius: 50px;
  font-size: 20px;
`;

const ErrorText = styled.p`
  margin-left: 22.5px;
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.red};
  margin-top: -6px;
  margin-bottom: 18px;
`;

const HintText = styled.p`
  margin-left: 22.5px;
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: -6px;
  margin-bottom: 18px;
`;

const SuccessText = styled.p`
  margin-left: 22.5px;
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ validBorderColor }) => validBorderColor};
  margin-top: -6px;
  margin-bottom: 18px;
`;

export default InputFilled;
