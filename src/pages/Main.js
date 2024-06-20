import React, { useState, useEffect, useCallback } from 'react';
import MainContents from '../components/MainContents';
import SmallButton from '../components/SmallButton';
import styled from 'styled-components';

const Main = () => {
    const initialContents = [
        <MainContents key={0} />,
        <MainContents key={1} />,
        <MainContents key={2} />
    ];

    const [contents, setContents] = useState(initialContents);

    const loadMore = useCallback(() => {
        setContents((prevContents) => [
            ...prevContents,
            <MainContents key={prevContents.length} />,
        ]);
    }, []);

    const handleScroll = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            loadMore();
        }
    }, [loadMore]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <Wrapper1>
            <Wrapper2>
                <BtnWrapper>
                    <SmallButton buttonText = "작성하기"/>
                    </BtnWrapper>
                    <Box>
                    {contents.map((content, index) => (
                        <ContentWrapper key={index}>{content}</ContentWrapper>
                    ))}
                </Box>
            </Wrapper2>
        </Wrapper1>
    );
}

const Wrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper2 = styled.div`
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px 0 23px 0;
    `;

const Box = styled.div`
`;

const ContentWrapper = styled.div`
    margin-bottom: 54px;
`;

export default Main;