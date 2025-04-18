import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px;
    text-align: center;
    max-width: 1182px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
        width: 80.8%;
    }

    @media (min-width: 1024px) {
        width: 56.2%;
    }
`;

const WithWrapper = ({ children }) => {
    return (
        <>
            <Wrapper>{children}</Wrapper>
        </>
    );
};

export default WithWrapper;
