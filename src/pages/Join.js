import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import InputFilled from "../components/InputFilled";
import BigButton from "../components/BigButton";
import Privacy from "../components/Privacy";

const Join = () => {
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateUserId = async (value) => {
    const schema = Yup.string()
      .matches(/^[a-zA-Z0-9]{5,10}$/, "사용하실 수 없는 아이디 입니다.")
      .required("아이디를 입력해주세요.");
    await schema.validate(value);
    setIsUserIdValid(true);
  };
  const validatePassword = async (value) => {
    const schema = Yup.string()
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,14})/,
        "사용하실 수 없는 비밀번호 입니다."
      )
      .required("비밀번호를 입력해주세요.");
    await schema.validate(value);
    setIsPasswordValid(true);
  };
  const validateEmail = async (value) => {
    const schema = Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "이메일 형식에 맞지 않습니다."
      )
      .required("사용하실 이메일을 입력해주세요.");
    await schema.validate(value);
    setIsEmailValid(true);
  };

  return (
    <JoinContainer>
      <Title>회원가입</Title>
      <InputFilled
        placeholder="아이디"
        type="text"
        validate={validateUserId}
        hint="영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요."
        validBorderColor="green"
        successMessage="사용 가능한 아이디 입니다."
      />
      <InputFilled
        placeholder="비밀번호"
        type="password"
        validate={validatePassword}
        hint="영문, 숫자, 특수문자를 조합하여 8~14글자 미만으로 입력하여 주세요."
        validBorderColor="green"
        successMessage="사용 가능한 비밀번호 입니다."
      />
      <InputFilled
        placeholder="이메일"
        type="email"
        validate={validateEmail}
        hint="사용하실 이메일을 입력해주세요."
        validBorderColor="green"
        successMessage="사용 가능한 이메일 입니다."
      />
      <InputFilled
        placeholder="닉네임"
        type="text"
        hint="사용하실 닉네임을 입력해주세요."
      />
      <Privacy />
      <Button>
        <BigButton
          buttonText="완료하기"
          isEnabled={isUserIdValid && isPasswordValid && isEmailValid}
        />
      </Button>
    </JoinContainer>
  );
};

const JoinContainer = styled.div`
  margin-top: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.mainTitle};
  margin-bottom: 65px;
`;

const Button = styled.div`
  margin-top: 56px;
`;

export default Join;
