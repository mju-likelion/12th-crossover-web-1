import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputTitle from "../components/InputTitle";
import InputContents from "../components/InputContents";
import SmallButton from "../components/SmallButton";
import CommentInput from "../components/CommentInput";
import Comment from "../components/Comment";
import { Link, useParams } from "react-router-dom";
import { Axios } from "../api/Axios";

const Detail = () => {
  const { boardId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchBoardDetail = async () => {
      try {
        const response = await Axios.get(`/boards/${boardId}`);
        const title = response.data.data.title;
        const content = response.data.data.content;
        const commentList = response.data.data.commentList;
        console.log("Detail: ", response.data.data);
        setTitle(title);
        setContent(content);
        setComments(commentList || []);
      } catch (error) {
        console.error("에러", error);
      }
    };

    fetchBoardDetail();
  }, [boardId]);

  const handleDelete = async () => {
    try {
      await Axios.delete(`/boards/${boardId}`);
      window.location.href = "/boards/page";
    } catch (error) {
      console.error("에러", error);
    }
  };

  const handleCommentSubmit = async (newComment) => {
    try {
      setComments((prevComments) => [...prevComments, newComment]);

      window.location.reload();
    } catch (error) {
      console.error("error: ", error);
    }
  };

  return (
    <>
      <MainContainer>
        <ContentContainer>
          <InputTitle title={title} readOnly={true} />
          <InputContents contents={content} readOnly={true} />
          <InfoText>※ 작성된 게시물은 수정이 불가합니다.</InfoText>
          <ButtonContainer>
            <Link to="/boards/page">
              <SmallButton
                isEnabled={true}
                onClick={handleDelete}
                backgroundColor={true}
                buttonText="삭제하기"
              />
            </Link>
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
      <CommentWrapper>
        <CommentInput boardId={boardId} onCommentSubmit={handleCommentSubmit} />{" "}
        <CommentList>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              isMyPost={false}
              name={comment.name}
              content={comment.content}
              timeStamp={new Date(comment.createdTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              commentid={comment.id}
            />
          ))}
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

const CommentWrapper = styled.div``;
const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Detail;
