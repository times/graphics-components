import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';

const DescriptionWrapper = styled.p`
    font-family: TimesModern-Regular, TimesModern-Regular-fallback, serif;
    font-size: 20px;
    line-height: 26px;
    color: rgb(51, 51, 51);
    padding-bottom: 10px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    text-align: ${({ align }) => align || 'left'};
`;

const Description = ({ text, align = 'left' }) => {
    if (!text) return null;
    return (
        <>
            <GlobalStyle />
            <DescriptionWrapper align={align}>{text}</DescriptionWrapper>
        </>
    );
};

export default Description;
