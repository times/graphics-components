import styled from 'styled-components';

export const TooltipContainer = styled.div`
    position: absolute;
    left: 0px;
    top: ${(props) =>
        props.isImageInLastRow
            ? props.tooltipPos[1] - 380
            : props.tooltipPos[1]}px;

    margin-inline: 15%;
    padding: ${props => props.theme.utils.spacing('4')};
    border: 1px solid ${props => props.theme.utils.color('neutral.ne090')};
    border-radius: ${props => props.theme.utils.borderRadius('md')};
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.utils.spacing('4')};
    justify-content: center;
    align-items: flex-start;

    background-color: ${props => props.theme.utils.color('whiteTint.white')};
    box-shadow: ${props => props.theme.utils.shadow('shadow030')};

    @media (prefers-color-scheme: dark) {
        background-color: ${props => props.theme.utils.color('theme.dark.bg')};
        border-color: ${props => props.theme.utils.color('theme.dark.border')};
    }

    font-family: ${props => 
        props.theme.utils.typography('fontFamily', 'robotoRegular')?.join(', ')
    };
    font-size: ${props => props.theme.utils.typography('fontSize', 'base')};

    opacity: ${(props) => (props.showTooltip ? '1' : '0')};
    transition: opacity 250ms ease-in;

    .tooltip-image {
        object-fit: cover;
        width: 150px;
        height: 130px;
        border-radius: ${props => props.theme.utils.borderRadius('sm')};

        @media (min-width: 768px) {
            height: 180px;
            margin-inline: auto;
            margin-block-start: 0;
            margin-block-end: ${props => props.theme.utils.spacing('4')};
        }
    }

    .tooltip-content {
        h3 {
            font-family: ${props => 
                props.theme.utils.typography('fontFamily', 'robotoRegular')?.join(', ')
            };
            font-size: ${props => props.theme.utils.typography('fontSize', 'editorialLg')};
            font-weight: ${props => props.theme.utils.typography('fontWeight', 'bold')};
            color: ${props => props.theme.utils.color('ink.inkContrast.light')};
            margin-block-end: ${props => props.theme.utils.spacing('2')};
            margin-block-start: 0;
            text-align: left;
            line-height: ${props => props.theme.utils.typography('lineHeight', 'editorial')};
            letter-spacing: ${props => props.theme.utils.typography('letterSpacing', 'editorial')};

            @media (prefers-color-scheme: dark) {
                color: ${props => props.theme.utils.color('theme.dark.font')};
            }
        }
        
        p {
            font-family: ${props => 
                props.theme.utils.typography('fontFamily', 'robotoRegular')?.join(', ')
            };
            text-align: left;
            font-size: ${props => props.theme.utils.typography('fontSize', 'base')};
            font-weight: ${props => props.theme.utils.typography('fontWeight', 'normal')};
            color: ${props => props.theme.utils.color('ink.inkBase.light')};
            line-height: ${props => props.theme.utils.typography('lineHeight', 'relaxed')};
            letter-spacing: ${props => props.theme.utils.typography('letterSpacing', 'editorial')};
            margin: 0;

            @media (prefers-color-scheme: dark) {
                color: ${props => props.theme.utils.color('theme.dark.font')};
            }
        }
    }

    .tooltip-close {
        font-family: ${props => 
            props.theme.utils.typography('fontFamily', 'robotoRegular')?.join(', ')
        } !important;
        font-size: ${props => props.theme.utils.typography('fontSize', 'lg')};
        font-weight: ${props => props.theme.utils.typography('fontWeight', 'bold')};

        position: absolute;
        top: ${props => props.theme.utils.spacing('4')};
        right: ${props => props.theme.utils.spacing('4')};

        cursor: pointer;

        background-color: transparent;
        border: none;
        color: ${props => props.theme.utils.color('ink.inkBase.light')};

        opacity: 0.8;
        transition: opacity 250ms ease-in;

        &:hover {
            opacity: 1;
        }

        &:focus {
            outline: 2px solid ${props => props.theme.utils.color('focus.focus010')};
            outline-offset: 2px;
        }

        @media (prefers-color-scheme: dark) {
            color: ${props => props.theme.utils.color('theme.dark.font')};
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: ${props => props.theme.utils.spacing('6')};

        .tooltip-content > h3 {
            margin-block-start: ${props => props.theme.utils.spacing('2')};
        }
    }
`;
