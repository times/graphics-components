import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import ThemeProvider from '../../themes/ThemeProvider';

const pulse = keyframes`
  0% { opacity: 1 }
  50% { opacity: 0 }
  100% { opacity: 1 }
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => 
        theme.utils.spacing('2')
    };
    margin-bottom: ${({ theme }) => 
        theme.utils.spacing('2')
    };

    ${({ withContainer, theme }) =>
        withContainer &&
        `
    margin-bottom: ${theme.utils.spacing('4')};
    margin-top: ${theme.utils.spacing('1')};
  `}
`;

const FlagFlex = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    p {
        color: ${({ theme }) => 
            theme.utils.color('ink.inkBase.light')
        };
        font-family: ${({ theme }) => 
            theme.utils.typography('fontFamily', 'timesModernRegular')?.join(', ')
        };
        font-size: ${({ theme }) => 
            theme.utils.typography('fontSize', 'sm')
        };
        line-height: ${({ theme }) => 
            theme.utils.typography('lineHeight', 'tight')
        };
    }
`;

const FlagBox = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => 
        theme.utils.color('red.red090')
    };
    height: ${({ theme }) => 
        theme.utils.spacing('6')
    };
    padding: ${({ theme }) => 
        theme.utils.spacing('2')
    };
    display: flex;
    flex-direction: row;
    width: fit-content;
    color: white;
    gap: ${({ theme }) => 
        theme.utils.spacing('2')
    };
    font-family: ${({ theme }) => 
        theme.utils.typography('fontFamily', 'timesModernRegular')?.join(', ')
    };
    font-weight: ${({ theme }) => 
        theme.utils.typography('fontWeight', 'extralight')
    };
    font-size: ${({ theme }) => 
        theme.utils.typography('fontSize', 'xs')
    };
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const PulseSquare = styled.div`
    width: ${({ theme }) => 
        theme.utils.spacing('2')
    };
    height: ${({ theme }) => 
        theme.utils.spacing('2')
    };
    background: white;
    animation: ${pulse} 1.2s infinite;
`;

const FlagDot = styled.div`
    font-size: ${({ theme }) => 
        theme.utils.typography('fontSize', 'xs')
    };
    font-weight: ${({ theme }) => 
        theme.utils.typography('fontWeight', 'normal')
    };
    letter-spacing: ${({ theme }) => 
        theme.utils.typography('letterSpacing', 'wide')
    };
    line-height: ${({ theme }) => 
        theme.utils.typography('fontSize', 'xs')
    };
    display: flex;
    align-items: center;
    gap: ${({ theme }) => 
        theme.utils.spacing('2')
    };
    font-family: ${({ theme }) => 
        theme.utils.typography('fontFamily', 'TimesDigitalWRegular')?.join(', ')
    };
    font-weight: ${({ theme }) => 
        theme.utils.typography('fontWeight', 'bold')
    };
    text-transform: uppercase;
    color: ${({ $type, theme }) => {
        switch ($type) {
            case 'UPDATED':
                return theme.utils.color('blue.blue070');
            case 'EXCLUSIVE':
                return theme.utils.color('red.red060');
            case 'SPONSORED':
                return theme.utils.color('neutral.ne070');
            case 'NEW':
                return theme.utils.color('amber.amber070');
            case 'LONGREAD':
                return theme.utils.color('neutral.ne070');
            default:
                return theme.utils.color('neutral.black');
        }
    }};
`;

const Dot = styled.span`
    width: ${({ theme }) => 
        theme.utils.spacing('2')
    };
    height: ${({ theme }) => 
        theme.utils.spacing('2')
    };
    border-radius: 50%;
    background: currentColor;
`;

const formatUpdatedTime = (isoString) => {
    if (!isoString) return null;
    const date = new Date(isoString);

    const options = { month: 'long', day: 'numeric' };
    const datePart = date.toLocaleDateString('en-US', options);

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const suffix = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;

    const timePart = `${hours}.${minutes}${suffix}`;
    return `Updated ${datePart}, ${timePart}`;
};

const ArticleFlags = ({
    flags = [],
    longRead = false,
    withContainer = true,
    theme,
}) => {
    if (!flags.length && !longRead) return null;

    const content = (
        <>
            <GlobalStyle />
            <Wrapper withContainer={withContainer}>
                {flags.map((flag, i) => {
                    const type = flag.type;

                    if (
                        flag.expiryTime &&
                        new Date(flag.expiryTime) <= new Date()
                    ) {
                        return null;
                    }

                    const label = formatUpdatedTime(flag.updatedTime);

                    if (type === 'LIVE' || type === 'BREAKING') {
                        return (
                            <FlagFlex key={i}>
                                <FlagBox $type={type}>
                                    <PulseSquare />
                                    <span className="live-breaking">
                                        {type}
                                    </span>
                                </FlagBox>
                                {label && (
                                    <p
                                        className="live-breaking"
                                        style={{
                                            fontWeight: 400,
                                            marginLeft: theme?.utils?.spacing?.('2'),
                                        }}
                                    >
                                        {label}
                                    </p>
                                )}
                            </FlagFlex>
                        );
                    }

                    return (
                        <FlagDot key={i} $type={type}>
                            <Dot />
                            <span>{type}</span>
                        </FlagDot>
                    );
                })}

                {longRead && (
                    <FlagDot key="longread" $type="LONGREAD">
                        <Dot />
                        <span>Long Read</span>
                    </FlagDot>
                )}
            </Wrapper>
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

export default ArticleFlags;
