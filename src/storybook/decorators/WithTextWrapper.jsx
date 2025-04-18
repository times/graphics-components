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

const SMALL = styled.small`
    font-size: 12px;
    text-align: left;
    margin: 0 auto;
    color: #333333;
    display: block;
    @media (min-width: 768px) {
        font-size: 12px;
        line-height: 30px;
        padding-left: 0;
        padding-right: 0;
    }
`;

const H1 = styled.h1`
    font-size: 24px;
    text-align: left;
    margin: 0 auto;
    color: #333333;
    display: block;
    @media (min-width: 768px) {
        font-size: 34px;
        line-height: 30px;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 20px;
        font-weight: 700;
    }
`;

const Text = styled.p`
    font-size: 16px;
    line-height: 28px;
    text-align: left;
    margin: 0 auto;
    color: #333333;
    display: block;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 30px;
        padding-left: 0;
        padding-right: 0;
    }
`;

const WithTextWrapper = ({ children }) => {
    return (
        <>
            <Wrapper>
                <SMALL>INTERACTIVE</SMALL>
                <H1>Times article harness</H1>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ut justo at risus euismod dictum. Proin maximus purus
                    ex, sit amet lobortis sapien pretium sit amet. Curabitur
                    vehicula ipsum ac suscipit congue. Cras dignissim et dui
                    pharetra blandit. Aenean ex odio, congue ut tincidunt eu,
                    auctor ut lectus. Nam venenatis diam nec scelerisque tempus.
                    Pellentesque laoreet semper est ac condimentum. Suspendisse
                    posuere nisl et malesuada sollicitudin. Vivamus eget
                    vehicula felis. Pellentesque sollicitudin pretium tortor,
                    vitae rhoncus diam euismod in. Etiam nec tincidunt neque.
                    Nullam facilisis elementum nisl cursus finibus. Cras quis
                    faucibus lacus.
                </Text>
                {children}
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ut justo at risus euismod dictum. Proin maximus purus
                    ex, sit amet lobortis sapien pretium sit amet. Curabitur
                    vehicula ipsum ac suscipit congue. Cras dignissim et dui
                    pharetra blandit. Aenean ex odio, congue ut tincidunt eu,
                    auctor ut lectus. Nam venenatis diam nec scelerisque tempus.
                    Pellentesque laoreet semper est ac condimentum. Suspendisse
                    posuere nisl et malesuada sollicitudin. Vivamus eget
                    vehicula felis. Pellentesque sollicitudin pretium tortor,
                    vitae rhoncus diam euismod in. Etiam nec tincidunt neque.
                    Nullam facilisis elementum nisl cursus finibus. Cras quis
                    faucibus lacus.
                </Text>
            </Wrapper>
        </>
    );
};

export default WithTextWrapper;
