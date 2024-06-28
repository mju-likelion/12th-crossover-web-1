import React from "react";
import styled from "styled-components";
import InputTitle from "../components/InputTitle";
import InputContents from "../components/InputContents";
import SmallButton from "../components/SmallButton";
import CommentInput from "../components/CommentInput";
import Comment from "../components/Comment";
import { Link } from "react-router-dom";

const Detail = () => {
  const title = "멋사 최고입니다요 🫶🏻"
  const content = "멋사 정말 재밌어요! 최고에요!"

  return (
    <>
  <MainContainer>
        <ContentContainer>
          <InputTitle  title={title} readOnly = {true}/>
          <InputContents contents={content} readOnly={true} />
          <InfoText>※ 작성된 게시물은 수정이 불가합니다.</InfoText>
          <ButtonContainer>
            <Link to="/boards/page">
            <SmallButton backgroundColor={true} buttonText="삭제하기" />
            </Link>
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
      <CommentWrapper>
  <CommentInput />
  <CommentList>
    {/* 임시 value 지정 */}
    <Comment
      isMyPost
      name="댓글 작성자 이름"
      content="댓글 내용"
      timeStamp="16:28"
    />
    <Comment
      isMyPost={false}
      name="댓글 작성자 이름"
      content="댓글 내용"
      timeStamp="16:28"
    />
    <Comment
      isMyPost
      name="댓글 작성자 이름"
      content="댓글 내용"
      timeStamp="16:28"
    />
    <Comment
      isMyPost={false}
      name="댓글 작성자 이름"
      content="댓글 내용"
      timeStamp="16:28"
    />
  </CommentList>
</CommentWrapper>

    </>
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

const CommentWrapper = styled.div``
const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Detail;
