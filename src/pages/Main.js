import React, { useState, useEffect, useCallback } from 'react';
import MainContents from '../components/MainContents';
import SmallButton from '../components/SmallButton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Axios } from '../api/Axios';

const Main = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchBoards = async (page) => {
        setIsLoading(true);
        try {
            const response = await Axios.get(`/boards?page=${page}`);
            const newContents = response.data.data.boardList;
            setContent((prevContents) => [...prevContents, ...newContents]);
            setHasMore(newContents.length > 0);
        } catch (error) {
            console.error('Error: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    const loadMore = useCallback(() => {
        if (!isLoading && hasMore) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchBoards(nextPage);
        }
    }, [isLoading, hasMore, page]);

    const handleScroll = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            loadMore();
        }
    }, [loadMore]);

    useEffect(() => {
        fetchBoards(1);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Wrapper1>
            <Wrapper2>
                <BtnWrapper>
                    <Link to="/boards">
                        <SmallButton isEnabled="true" buttonText="작성하기" />
                    </Link>
                </BtnWrapper>
                <Box>
                    {content.map((contents) => (
                        <Link key={contents.id} to={`/boards/${contents.id}`}>
                            <ContentWrapper>
                                <MainContents 
                                title={contents.title} 
                                content={contents.content} 
                                time={contents.createdTime}
                                />
                            </ContentWrapper>
                        </Link>
                    ))}
                    {isLoading && <Loading>Loading...</Loading>}
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

const Wrapper2 = styled.div``;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px 0 23px 0;
`;

const Box = styled.div``;

const ContentWrapper = styled.div`
    margin-bottom: 54px;
    cursor: pointer;
`;

const Loading = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 18px;
`;

export default Main;
