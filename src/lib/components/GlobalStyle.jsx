/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   @media (prefers-color-scheme: dark) {
        :root {
            --color-bg: ${props => props.theme?.utils?.themeColor?.('bg', 'dark') || '#121212'};
            --color-page: ${props => props.theme?.utils?.themeColor?.('page', 'dark') || '#1b1b1b'};
            --color-font: ${props => props.theme?.utils?.themeColor?.('font', 'dark') || '#b6b6b6'};
            --color-border: ${props => props.theme?.utils?.themeColor?.('border', 'dark') || '#374151'};
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
            border-color: ${props => props.theme?.utils?.color?.('neutral.700') || 'rgb(49 49 49)'} black !important;
        }
        ${props => props.theme?.utils?.media?.up?.('md') || '@media (min-width: 768px)'} {
            .MainContainer {
                border-right: 1px solid ${props => props.theme?.utils?.color?.('neutral.800', 0.5) || 'rgb(0 0 0 / 50%)'};
                border-left: 1px solid ${props => props.theme?.utils?.color?.('neutral.800', 0.5) || 'rgb(0 0 0 / 50%)'};
            }    
        }
    }

    @media (prefers-color-scheme: light) {
        :root {
            --color-bg: ${props => props.theme?.utils?.themeColor?.('bg', 'light') || '#ffffff'};
            --color-page: ${props => props.theme?.utils?.themeColor?.('page', 'light') || '#f9fafb'};
            --color-font: ${props => props.theme?.utils?.themeColor?.('font', 'light') || '#111827'};
            --color-border: ${props => props.theme?.utils?.themeColor?.('border', 'light') || '#e5e7eb'};
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
        ${props => props.theme?.utils?.media?.up?.('md') || '@media (min-width: 768px)'} {
            .MainContainer {
                border-right: 1px solid var(--color-border);
                border-left: 1px solid var(--color-border);
            }    
        }
    }
`;

export const Container = styled.div`
    margin-block-start: ${props => props.theme?.utils?.spacing?.('4') || '1em'};
    margin-block-end: ${props => props.theme?.utils?.spacing?.('32') || '100px'};
    position: relative;
`;

export const CardContainer = styled.div`
    background-color: ${props => props.theme?.utils?.color?.('neutral.900') || 'black'};
    color: ${props => props.theme?.utils?.color?.('neutral.50') || 'white'};
    margin: ${props => props.theme?.utils?.spacing?.('10') || '40px'} 0;
    padding-block-start: ${props => props.theme?.utils?.spacing?.('4') || '16px'};
    padding-block-end: ${props => props.theme?.utils?.spacing?.('2') || '8px'};
    padding-inline: ${props => props.theme?.utils?.spacing?.('3') || '12px'};
    border-radius: ${props => props.theme?.utils?.borderRadius?.('md') || '0.375rem'};

    .card-image {
        width: 172px;
        aspect-ratio: 1 / 1;
        border-radius: ${props => props.theme?.utils?.borderRadius?.('lg') || '0.5rem'};
    }

    .card-name {
        margin-block-start: ${props => props.theme?.utils?.spacing?.('2') || '8px'};
        margin-block-end: 0;
        font-weight: ${props => props.theme?.utils?.typography?.('fontWeight', 'medium') || '500'};
    }

    .card-quote {
        font-size: ${props => props.theme?.utils?.typography?.('fontSize', '2xl') || '24px'};
        line-height: ${props => props.theme?.utils?.typography?.('lineHeight', 'tight') || '30px'};
        font-weight: ${props => props.theme?.utils?.typography?.('fontWeight', 'bold') || '700'};
        text-align: left;
        color: ${props => props.theme?.utils?.color?.('neutral.300') || '#d9d9d9'};
        margin-block-start: ${props => props.theme?.utils?.spacing?.('3') || '12px'};
    }

    ${props => props.theme?.utils?.media?.up?.('md') || '@media (min-width: 768px)'} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: ${props => props.theme?.utils?.spacing?.('4') || '1em'};

        .waveform-container {
            grid-column: 2 / 3;
            margin-block: ${props => props.theme?.utils?.spacing?.('2') || '0.5em'};
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
            font-size: ${props => props.theme?.utils?.typography?.('fontSize', 'base') || '1rem'};
        }
    }
`;
