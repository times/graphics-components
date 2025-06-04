import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import ThemeProvider from '../../themes/ThemeProvider';

const TextWrapper = styled.p`
    font-family: ${({ theme }) => 
        theme.utils.typography('fontFamily', 'timesModernRegular')?.join(', ')
    };
    font-size: ${({ theme }) => 
        theme.utils.typography('fontSize', 'editorialMd')
    };
    line-height: ${({ theme }) => 
        theme.utils.typography('lineHeight', 'tight')
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
    text-align: ${({ align }) => align || 'left'};
    font-weight: ${({ theme }) => 
        theme.utils.typography('fontWeight', 'normal')
    };
    letter-spacing: ${({ theme }) => 
        theme.utils.typography('letterSpacing', 'editorial')
    };
`;

const Text = ({ text, align = 'left', theme }) => {
    if (!text) return null;
    
    const content = (
        <>
            <GlobalStyle />
            <TextWrapper align={align} dangerouslySetInnerHTML={{ __html: text }} />
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

export default Text;
