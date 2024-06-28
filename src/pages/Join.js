import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import InputFilled from "../components/InputFilled";
import BigButton from "../components/BigButton";
import Privacy from "../components/Privacy";
import { useNavigate } from "react-router-dom";
import { Theme } from "../styles/Theme";
import { Axios } from "../api/Axios";

const Join = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [termsAgreementList, setTermsAgreementList] = useState([]);
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    setTermsAgreementList([
      {
        termId: "4b631df1-b62c-4939-af78-1b1887ee6d2b",
        agreed: !isChecked,
      },
    ]);
  };

  const validateUserId = async (value) => {
    const schema = Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/,
        "사용하실 수 없는 아이디 입니다."
      )
      .required("아이디를 입력해주세요.");
    await schema.validate(value);
    setIsUserIdValid(true);
    setUserId(value);
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
    setPassword(value);
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
    setEmail(value);
  };

  const validateName = async (value) => {
    const schema = Yup.string().required("닉네임을 입력해주세요.");
    await schema.validate(value);
    setIsNameValid(true);
    setName(value);
  };

  const handleJoin = async () => {
    if (
      isUserIdValid &&
      isPasswordValid &&
      isEmailValid &&
      isNameValid &&
      isChecked
    ) {
      try {
        const response = await Axios.post("/auth/signin", {
          userId,
          password,
          email,
          name,
          termsAgreementList,
        });
        if (response.status === 201) {
          navigate("/auth/login");
        }
      } catch (error) {
        console.error("회원가입 중 에러 발생:", error);
        if (error.response) {
          if (error.response.status === 409) {
            console.error("이미 사용 중인 아이디나 비밀번호입니다.");
          } else {
            console.error("서버에서 에러 응답:", error.response.data);
          }
        } else {
          console.error("클라이언트 요청에서 에러 발생:", error.message);
        }
      }
    }
  };
  return (
    <JoinContainer>
      <Title>회원가입</Title>
      <InputFilled
        placeholder="아이디"
        type="text"
        validate={validateUserId}
        hint="영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요."
        validBorderColor={Theme.colors.green}
        successMessage="사용 가능한 아이디 입니다."
        showSuccessIcon={true}
      />
      <InputFilled
        placeholder="비밀번호"
        type="password"
        validate={validatePassword}
        hint="영문, 숫자, 특수문자를 조합하여 8~14글자 미만으로 입력하여 주세요."
        validBorderColor={Theme.colors.green}
        successMessage="사용 가능한 비밀번호 입니다."
        showSuccessIcon={true}
      />
      <InputFilled
        placeholder="이메일"
        type="email"
        validate={validateEmail}
        hint="사용하실 이메일을 입력해주세요."
        validBorderColor={Theme.colors.green}
        successMessage="사용 가능한 이메일 입니다."
        showSuccessIcon={true}
      />
      <InputFilled
        placeholder="닉네임"
        type="text"
        validate={validateName}
        hint="사용하실 닉네임을 입력해주세요."
      />
      <Privacy isChecked={isChecked} toggleCheck={toggleCheck} />
      <Button>
        <BigButton
          buttonText="완료하기"
          isEnabled={
            isUserIdValid &&
            isPasswordValid &&
            isEmailValid &&
            isNameValid &&
            isChecked
          }
          onClick={handleJoin}
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
