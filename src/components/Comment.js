import styled from 'styled-components';
import myProfile from '../assets/images/profile.svg';
import defaultProfile from '../assets/images/gray_profile.svg';
import more from '../assets/images/send.svg';

const Comment = ({ isMyPost, name, content, timeStamp }) => {
    const profileImg = isMyPost ? myProfile : defaultProfile;

    return (
        <BigContainer>
            <Container>
        <UserInfo>
            <ProfileImg src={profileImg} alt="프로필 이미지" />
            <Name>{name}</Name>
            {isMyPost && (
                <MoreButton>
                <img src={more} alt="더보기 버튼" />
            </MoreButton>
            )}
        </UserInfo>
        <ContentBox>
            <Content>{content}</Content>
            <TimeStamp>{timeStamp}</TimeStamp>
        </ContentBox>
        </Container>
        </BigContainer>
    );
};

const BigContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    padding: 20px;
    width: 740px;
    display: flex;
    flex-direction: column;
    border: 2px solid ${({ theme }) => theme.colors.gray};
    border-radius: 16px;
`;
const UserInfo = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 4px;
    ${({ theme }) => theme.fonts.default}
`;
const ContentBox = styled.div`
    margin-left: 10px;
`;
const ProfileImg = styled.img`
    width: 36px;
`;
const Name = styled.p``;
const MoreButton = styled.button`
    margin-left: auto;
`;
const Content = styled.p`
    margin-bottom: 4px;
    ${({ theme }) => theme.fonts.default}
`;
const TimeStamp = styled.p`
    color: ${({ theme }) => theme.colors.gray};
`;

export default Comment;