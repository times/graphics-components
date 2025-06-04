import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import ThemeProvider from '../../themes/ThemeProvider';

const HeadlineWrapper = styled.h1`
    box-sizing: border-box;
    padding: 0px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin: ${({ theme }) => 
        `0px 0px ${theme.utils.spacing('2')} 0px`
    };
    font-weight: ${({ theme }) => 
        theme.utils.typography('fontWeight', 'semibold')
    };
    font-size: ${({ theme }) => 
        theme.utils.typography('fontSize', 'editorialXl')
    };
    line-height: ${({ theme }) => 
        theme.utils.typography('lineHeight', 'editorial')
    };
    color: ${({ theme }) => 
        theme.utils.color('ink.inkContrast.light')
    };
    text-align: ${({ align }) => align || 'left'};
    font-family: ${({ theme }) => 
        theme.utils.typography('fontFamily', 'timesModernBold')?.join(', ')
    };
    letter-spacing: ${({ theme }) => 
        theme.utils.typography('letterSpacing', 'editorial')
    };

    @media (min-width: 768px) {
        font-size: ${({ theme }) => 
            theme.utils.typography('fontSize', 'editorial4xl')
        };
        line-height: ${({ theme }) => 
            theme.utils.typography('lineHeight', 'editorial')
        };
    }
`;

const Headline = ({ text, align = 'left', theme }) => {
    if (!text) return null;
    
    const content = (
        <>
            <GlobalStyle />
            <HeadlineWrapper align={align}>{text}</HeadlineWrapper>
        </>
    );

    // If no custom theme is provided, use default ThemeProvider
    if (!theme) {
        return (
            <ThemeProvider>
                {content}
            </ThemeProvider>
        );
    }

    // If theme is provided, wrap with ThemeProvider
    return (
        <ThemeProvider customTheme={theme}>
            {content}
        </ThemeProvider>
    );
};

export default Headline;
