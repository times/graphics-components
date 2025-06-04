/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   @media (prefers-color-scheme: dark) {
        :root {
            --color-bg: ${props => props.theme.utils.color('theme.dark.bg')};
            --color-page: ${props => props.theme.utils.color('theme.dark.page')};
            --color-font: ${props => props.theme.utils.color('theme.dark.font')};
            --color-border: ${props => props.theme.utils.color('theme.dark.border')};
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
            border-color: ${props => props.theme.utils.color('neutral.ne080')} black !important;
        }
        @media (min-width: 768px) {
            .MainContainer {
                border-right: 1px solid ${props => props.theme.utils.color('neutral.ne080')};
                border-left: 1px solid ${props => props.theme.utils.color('neutral.ne080')};
            }    
        }
    }

    @media (prefers-color-scheme: light) {
        :root {
            --color-bg: ${props => props.theme.utils.color('theme.light.bg')};
            --color-page: ${props => props.theme.utils.color('theme.light.page')};
            --color-font: ${props => props.theme.utils.color('theme.light.font')};
            --color-border: ${props => props.theme.utils.color('theme.light.border')};
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
            border-color: var(--color-border) !important;
        }
        @media (min-width: 768px) {
            .MainContainer {
                border-right: 1px solid var(--color-border);
                border-left: 1px solid var(--color-border);
            }    
        }
    }
`;

export const Container = styled.div`
    margin-block-start: ${props => props.theme.utils.spacing('4')};
    margin-block-end: ${props => props.theme.utils.spacing('32')};
    position: relative;
`;

export const CardContainer = styled.div`
    background-color: ${props => props.theme.utils.color('neutral.black')};
    color: ${props => props.theme.utils.color('whiteTint.white')};
    margin: ${props => props.theme.utils.spacing('10')} 0;
    padding-block-start: ${props => props.theme.utils.spacing('4')};
    padding-block-end: ${props => props.theme.utils.spacing('2')};
    padding-inline: ${props => props.theme.utils.spacing('3')};
    border-radius: ${props => props.theme.utils.borderRadius('md')};

    .card-image {
        width: 172px;
        aspect-ratio: 1 / 1;
        border-radius: ${props => props.theme.utils.borderRadius('lg')};
    }

    .card-name {
        margin-block-start: ${props => props.theme.utils.spacing('2')};
        margin-block-end: 0;
        font-weight: ${props => props.theme.utils.typography('fontWeight', 'medium')};
        font-family: ${props => 
            props.theme.utils.typography('fontFamily', 'timesModernMedium')?.join(', ')
        };
        font-size: ${props => props.theme.utils.typography('fontSize', 'base')};
        color: ${props => props.theme.utils.color('whiteTint.white')};
    }

    .card-quote {
        font-size: ${props => props.theme.utils.typography('fontSize', '2xl')};
        line-height: ${props => props.theme.utils.typography('lineHeight', 'tight')};
        font-weight: ${props => props.theme.utils.typography('fontWeight', 'bold')};
        font-family: ${props => 
            props.theme.utils.typography('fontFamily', 'timesModernBold')?.join(', ')
        };
        text-align: left;
        color: ${props => props.theme.utils.color('neutral.ne030')};
        margin-block-start: ${props => props.theme.utils.spacing('3')};
        letter-spacing: ${props => props.theme.utils.typography('letterSpacing', 'editorial')};
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: ${props => props.theme.utils.spacing('4')};

        .waveform-container {
            grid-column: 2 / 3;
            margin-block: ${props => props.theme.utils.spacing('2')};
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
            font-size: ${props => props.theme.utils.typography('fontSize', 'base')};
        }
    }
`;
