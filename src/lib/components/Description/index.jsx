import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import ThemeProvider from '../../themes/ThemeProvider';

const DescriptionWrapper = styled.p`
    font-family: ${({ theme }) => 
        theme.utils.typography('fontFamily', 'timesModernRegular')?.join(', ')
    };
    font-size: ${({ theme }) => 
        theme.utils.typography('fontSize', 'editorialMd')
    };
    line-height: ${({ theme }) => 
        theme.utils.typography('lineHeight', 'relaxed')
    };
    color: ${({ theme }) => 
        theme.utils.color('ink.inkBase.light')
    };
    padding-bottom: ${({ theme }) => 
        theme.utils.spacing('3')
    };
    margin: ${({ theme }) => 
        `0px 0px ${theme.utils.spacing('3')} 0px`
    };
    white-space: pre-wrap;
    overflow-wrap: break-word;
    text-align: ${({ align }) => align || 'left'};
    font-weight: ${({ theme }) => 
        theme.utils.typography('fontWeight', 'normal')
    };
    letter-spacing: ${({ theme }) => 
        theme.utils.typography('letterSpacing', 'editorial')
    };
`;

const Description = ({ text, align = 'left', theme }) => {
    if (!text) return null;
    
    const content = (
        <>
            <GlobalStyle />
            <DescriptionWrapper align={align}>{text}</DescriptionWrapper>
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

export default Description;
