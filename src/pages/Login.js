import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import Header from "../components/Header";
import InputFilled from "../components/InputFilled";
import BigButton from "../components/BigButton";

const Login = () => {
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const validateUserId = async (value) => {
    const schema = Yup.string()
      .matches(
        /^[a-zA-Z0-9]{5,10}$/,
        "아이디를 잘못 입력하셨습니다. 다시 입력해주세요."
      )
      .required("아이디를 입력해주세요.");
    await schema.validate(value);
    setIsUserIdValid(true);
  };

  const validatePassword = async (value) => {
    const schema = Yup.string()
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,14})/,
        "비밀번호를 잘못입력하셨습니다. 다시 입력해주세요."
      )
      .required("비밀번호를 입력해주세요.");
    await schema.validate(value);
    setIsPasswordValid(true);
  };

  return (
    <Container>
      <Header />
      <Title>로그인</Title>
      <FormContainer>
        <InputFilled
          placeholder="아이디"
          type="text"
          validate={validateUserId}
          hint="영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요."
        />
        <InputFilled
          placeholder="비밀번호"
          type="password"
          validate={validatePassword}
          hint="영문, 숫자, 특수문자를 조합하여 8~14글자 미만으로 입력하여 주세요."
        />
        <Button>
          <BigButton
            buttonText="로그인"
            isEnabled={isUserIdValid && isPasswordValid}
          />
        </Button>
        <Join>회원가입</Join>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.mainTitle};
  margin-bottom: 65px;
`;

const Button = styled.div`
  margin-top: 22px;
`;

const Join = styled.p`
  margin-top: 10px;
  text-align: right;
  width: 100%;
  margin-right: 38px;
`;

export default Login;
