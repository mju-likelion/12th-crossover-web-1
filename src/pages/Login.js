import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import InputFilled from "../components/InputFilled";
import BigButton from "../components/BigButton";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

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

  const handleLogin = () => {
    if (isUserIdValid && isPasswordValid) {
      navigate("/boards/page");
    }};

  return (
    <Container>
      <AllBox>
        <Title>로그인</Title>
        <FormContainer>
            <InputFilled
              placeholder="아이디"
              type="text"
              validate={validateUserId}
              hint="영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요."
              showSuccessIcon={false}
            />
          <InputFilled
            placeholder="비밀번호"
            type="password"
            validate={validatePassword}
            hint="영문, 숫자, 특수문자를 조합하여 8~14글자 미만으로 입력하여 주세요."
            showSuccessIcon={false}
          />
            <Button>
              <BigButton
                buttonText="로그인"
                isEnabled={isUserIdValid && isPasswordValid}
                onClick={handleLogin}
              />
            </Button>
          <Link to="/auth/signin">
          <Join>회원가입</Join>
          </Link>
        </FormContainer>
      </AllBox>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AllBox = styled.div`
  width: 540px;
  height: 572px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  margin-top: 56px;
`;

const Join = styled.p`
  text-align: right;
  margin-top: 31px;
  width: 540px;
  margin-right: 15px;
  cursor: pointer;
`;

export default Login;
