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
`;

const Description = ({ text }) => {
    if (!text) return null;
    return (
        <>
            <GlobalStyle />
            <DescriptionWrapper>{text}</DescriptionWrapper>
        </>
    );
};

export default Description;
