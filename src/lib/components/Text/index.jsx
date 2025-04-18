import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';

const TextWrapper = styled.p`
    font-family: TimesModern-Regular, TimesModern-Regular-fallback, serif;
    font-size: 20px;
    line-height: 26px;
    color: rgb(51, 51, 51);
    padding-bottom: 10px;
`;

const Text = ({ text }) => {
    if (!text) return null;
    return (
        <>
            <GlobalStyle />
            <TextWrapper dangerouslySetInnerHTML={{ __html: text }} />
        </>
    );
};

export default Text;
