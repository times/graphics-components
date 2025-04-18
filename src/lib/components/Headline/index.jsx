import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';

const HeadlineWrapper = styled.h1`
    box-sizing: border-box;
    padding: 0px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin: 0px 0px 7px;
    font-weight: 600;
    font-size: 30px;
    line-height: 33px;
    color: rgb(29, 29, 27);
    text-align: ${({ align }) => align || 'left'};

    font-family: TimesModern-Bold, TimesModern-Bold-fallback, serif;
    @media (min-width: 768px) {
        font-size: 45px;
        line-height: 45px;
    }
`;

const Headline = ({ text, align = 'left' }) => {
    if (!text) return null;
    return (
        <>
            <GlobalStyle />
            <HeadlineWrapper align={align}>{text}</HeadlineWrapper>
        </>
    );
};

export default Headline;
