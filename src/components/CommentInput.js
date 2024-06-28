import styled from 'styled-components';
import send from '../assets/images/send.svg';

const CommentInput = () => {
    return (
        <Container>
        <Input placeholder="댓글" />
        <Button>
            <img src={send} alt="전송 아이콘" />
        </Button>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 100px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    gap: 10px;
`;
const Input = styled.input`
    width: 615px;
    padding: 20px;
    border: 2px solid ${({ theme }) => theme.colors.gray};
    border-radius: 16px;
    ${({ theme }) => theme.fonts.default}
`;
const Button = styled.button`
    padding: 20px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.blue1};
`;

export default CommentInput;