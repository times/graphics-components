/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   @media (prefers-color-scheme: dark) {
        :root {
            --color-bg: #121212;
            --color-page: #1b1b1b;
            --color-font: #b6b6b6;
        }
        body {
            background-color: var(--color-bg);
            color: var(--color-font) !important;
        }
        h1, h2, h3, h4, h5, h6, p {
            color: var(--color-font) !important;
        }
        .Page {
            background-color: var(--color-page);
        } 
        .MainContainer {
            background-color: var(--color-bg);
        }
        #article-main{
            border-color: rgb(49 49 49) black !important;
        }
        @media (min-width: 520px) {
            .MainContainer {
                border-right: 1px solid rgb(0 0 0 / 50%);
                border-left: 1px solid rgb(0 0 0 / 50%);
        }    
    }
`;

export const Container = styled.div`
    margin-block-start: 1em;
    margin-block-end: 100px;
`;

export const CardContainer = styled.div`
    background-color: black;
    color: white;
    margin: 40px 0;
    padding-block-start: 16px;
    padding-block-end: 8px;
    padding-inline: 12px;

    .card-image {
        width: 172px;
        aspect-ratio: 1 / 1;
    }

    .card-name {
        margin-block-start: 8px;
        margin-block-end: 0;
    }

    .card-quote {
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
        text-align: left;

        color: #d9d9d9;
        margin-block-start: 12px;
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1em;

        .waveform-container {
            grid-column: 2 / 3;
            margin-block: 0.5em;
        }

        .card-image--container {
            grid-row: 1 / 3;
        }

        .card-quote {
            margin-block: 0;
        }

        .card-image {
            width: 100%;
        }

        .card-name {
            font-size: 1rem;
        }
    }
`;
