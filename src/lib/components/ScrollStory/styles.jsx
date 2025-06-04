// ScrollStory.styles.js
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
`;

export const SlidesWrapper = styled.div`
    position: sticky;
    top: 30vh;
    width: 100%;
    overflow: hidden;
    border-radius: ${props => 
        props.theme.utils.borderRadius('lg')
    };
    box-shadow: ${props => 
        props.theme.utils.shadow('shadow030')
    };

    &.edge-to-edge {
        top: 0;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        height: 100vh !important;
        border-radius: 0;
        box-shadow: none;
    }

    &.bleed {
        top: 30vh;
        width: 40vw;
        margin-left: calc(50% - 20vw);
        height: 500px !important;
    }

    &.edge-to-edge iframe {
        height: 100vh;
    }
`;

export const SlidesContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
`;

export const Board = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 0.4s ease;

    &.overlap {
        opacity: 1;
        pointer-events: auto;
    }

    img, video, iframe {
        border-radius: inherit;
    }
`;

export const Section = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => 
        `${props.theme.utils.spacing('4')} 0`
    };
`;

export const Text = styled.p`
    font-size: ${({ size, theme }) => {
        const sizeMap = {
            sm: theme.utils.typography('fontSize', 'editorialXs'),
            md: theme.utils.typography('fontSize', 'editorialSm'), 
            lg: theme.utils.typography('fontSize', 'editorialMd'),
        };
        return sizeMap[size] || sizeMap.md;
    }};
    font-family: ${props => 
        (props.theme?.utils?.fontFamily && props.theme.utils.fontFamily('timesModernRegular')?.join(', ')) || 'TimesModern-Regular, serif'
    };
    font-weight: ${props => 
        props.theme.utils.typography('fontWeight', 'normal')
    };
    padding: ${props => 
        props.theme.utils.spacing('6')
    };
    margin: ${props => 
        `${props.theme.utils.spacing('4')} auto`
    };
    max-width: 600px;
    background: ${props => 
        props.theme.utils.color('whiteTint.white')
    };
    color: ${props => 
        props.theme.utils.color('ink.inkBase.light')
    };
    border-radius: ${props => 
        props.theme.utils.borderRadius('lg')
    };
    z-index: 1;
    letter-spacing: ${props => 
        props.theme.utils.typography('letterSpacing', 'normal')
    };
    line-height: ${props => 
        props.theme.utils.typography('lineHeight', 'relaxed')
    };

    @media (prefers-color-scheme: dark) {
        background: ${props => 
            props.theme.utils.color('theme.dark.bg')
        };
        color: ${props => 
            props.theme.utils.color('theme.dark.font')
        };
        border: 1px solid ${props => 
            props.theme.utils.color('theme.dark.border')
        };
    }

    /* Responsive font sizes */
    @media (min-width: 768px) {
        font-size: ${({ size, theme }) => {
            const sizeMap = {
                sm: theme.utils.typography('fontSize', 'editorialMd'),
                md: theme.utils.typography('fontSize', 'editorialMd'),
                lg: theme.utils.typography('fontSize', 'editorialLg'),
            };
            return sizeMap[size] || sizeMap.md;
        }};
        padding: ${props => 
            props.theme.utils.spacing('8')
        };
    }

    /* Typography enhancements for content */
    strong {
        font-weight: ${props => 
            props.theme.utils.typography('fontWeight', 'semibold')
        };
        color: ${props => 
            props.theme.utils.color('ink.inkContrast.light')
        };
        
        @media (prefers-color-scheme: dark) {
            color: ${props => 
                props.theme.utils.color('ink.inkContrast.dark')
            };
        }
    }

    em {
        font-style: italic;
        color: ${props => 
            props.theme.utils.color('ink.inkSubtle.light')
        };
        
        @media (prefers-color-scheme: dark) {
            color: ${props => 
                props.theme.utils.color('ink.inkSubtle.dark')
            };
        }
    }

    a {
        color: ${props => 
            props.theme.utils.color('blue.blue070')
        };
        text-decoration: underline;
        transition: color 0.2s ease;

        &:hover {
            color: ${props => 
                props.theme.utils.color('blue.blue060')
            };
        }

        &:focus {
            outline: 2px solid ${props => 
                props.theme.utils.color('focus.focus010')
            };
            outline-offset: 2px;
        }

        @media (prefers-color-scheme: dark) {
            color: ${props => 
                props.theme.utils.color('blue.blue030')
            };
            
            &:hover {
                color: ${props => 
                    props.theme.utils.color('blue.blue020')
                };
            }
        }
    }
`;
