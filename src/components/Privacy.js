import React,{useState, useEffect} from 'react';
import styled from "styled-components";
import emptyCheck from "../assets/images/empty_check box.svg";
import fullCheck from "../assets/images/full_check box.svg";
import { Axios } from '../api/Axios';

const Privacy = ({isChecked, toggleCheck}) => {

    const [terms, setTerms] = useState("");
    
    useEffect(() => {
        const getTerms = async () => {
            try {
                const response = await Axios.get("/terms");
                setTerms(response.data.data.terms[0].terms);
                console.log("콘솔",response.data);
            } catch (error) {
                console.log(error);
                }
            };
            getTerms();
        }, []);

    return (
        <WrapperBox>
            <TitleBox>
                <LeftBox>
                    <Necessary>[필수]</Necessary>
                    <Title>개인정보보호정책</Title>
                </LeftBox>
                <RightBox>
                    <AgreeText>약관동의</AgreeText>
                    <Check
                        src={isChecked ? fullCheck : emptyCheck}
                        alt="체크박스"
                        onClick={toggleCheck}
                    />
                </RightBox>
            </TitleBox>
            <PrivacyBox>
                <ScrollBox>
                    <Text>{terms}</Text>
                </ScrollBox>
            </PrivacyBox>
        </WrapperBox>
    );
};

const WrapperBox = styled.div`
    width: 1166px;
    height: 410px;
    background-color: white;
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > *:first-child {
        margin-left: 19px;
    }

    & > *:last-child {
        margin-right: 60px;
    }
`;

const LeftBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Necessary = styled.p`
    ${({ theme }) => theme.fonts.subTitle};
    color: ${({ theme }) => theme.colors.green};
`;

const Title = styled.p`
    ${({ theme }) => theme.fonts.subTitle};
`;

const RightBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const AgreeText = styled.p`
    ${({ theme }) => theme.fonts.subTitle};
    margin-right: 6px;
`;

const Check = styled.img`

`;

const PrivacyBox = styled.div`
    background-color: #FFFFFF;
    width: 1113px;
    height: 342px;
    margin-left: 19px;
    margin-right: 34px;
    margin-top: 13px;
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;

`;

const ScrollBox = styled.div`
    margin: 19px 0px;
    overflow-y: scroll;
    scrollbar-color: ${({ theme }) => theme.colors.gray};

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.gray};
        border-radius: 99px;
    }
`;

const Text = styled.p`
    ${({ theme }) => theme.fonts.helperText};
    width: 1034px;
    height: 304px;
    margin: 0px 30px;
    line-height: 22px;
`;

export default Privacy;