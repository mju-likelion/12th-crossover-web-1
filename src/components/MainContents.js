import React from 'react';
import styled from 'styled-components';
//import GrayProfile from "../assets/images/gray_profile.svg";
import BlueProfile from "../assets/images/profile.svg";

const MainContents = () => {
    return (
        <>
        <WrapperBox>
            <Box>
                <ProfileBox>
                    <TextBox>
                        <ProfileImg src={BlueProfile} alt="profileImg"/>
                        <Right>
                            <Title>제목: text</Title>
                            <ContentBox>
                                <Contents>text</Contents>
                            </ContentBox>
                        </Right>
                    </TextBox>
                </ProfileBox>
                <Time>6:30</Time>
            </Box>
        </WrapperBox>
        </>
    );
};

const WrapperBox = styled.div`
    width: 783px;
    height: 343px;
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.colors.gray};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const Box = styled.div`
    width: 699px;
    height: 277px;
`;

const Time = styled.p`
    color: ${({ theme }) => theme.colors.gray};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 17px;
`;

const ProfileBox = styled.div`
    width: 699px;
    height: 239px;
    display: flex;
    justify-content: right;
`;

const TextBox = styled.div`
    width: 699px;
    height: 239px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const ProfileImg = styled.img`
    width: 62px;
    height: 62px;
`;

const Right = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
    justify-content: space-between;
    `;


const Title = styled.p`
    width: 598px;
    height: 24px;
    font-weight: 600;
    font-size: 24px;
`;

const ContentBox = styled.p`
    margin-top: 13px;
    width: 598px;
    height: 198px;
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.colors.blue1};
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contents = styled.p`
    width: 550px;
    height: 162px;
`;

export default MainContents;