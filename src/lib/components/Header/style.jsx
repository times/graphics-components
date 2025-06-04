import styled from 'styled-components';

export const HeadingContainer = styled.div`
    .headline {
        font-family: ${props => 
            props.theme.utils.typography('fontFamily', 'robotoRegular')?.join(', ')
        };
        font-size: ${props => props.theme.utils.typography('fontSize', 'editorialMd')};
        font-weight: ${props => props.theme.utils.typography('fontWeight', 'bold')};
        color: ${props => props.theme.utils.color('ink.inkContrast.light')};
        text-align: left;
        line-height: ${props => props.theme.utils.typography('lineHeight', 'editorial')};
        letter-spacing: ${props => props.theme.utils.typography('letterSpacing', 'editorial')};
        margin-bottom: ${props => props.theme.utils.spacing('2')};
        margin-top: 0;
    }

    .standfirst {
        font-family: ${props => 
            props.theme.utils.typography('fontFamily', 'robotoRegular')?.join(', ')
        };
        font-size: ${props => props.theme.utils.typography('fontSize', 'editorialLg')};
        font-weight: ${props => props.theme.utils.typography('fontWeight', 'normal')};
        color: ${props => props.theme.utils.color('ink.inkBase.light')};
        text-align: left;
        line-height: ${props => props.theme.utils.typography('lineHeight', 'relaxed')};
        letter-spacing: ${props => props.theme.utils.typography('letterSpacing', 'editorial')};
        margin-bottom: ${props => props.theme.utils.spacing('3')};
        margin-top: 0;
    }

    padding-inline-start: ${props => props.theme.utils.spacing('3')};
    padding-inline-end: ${props => props.theme.utils.spacing('3')};

    @media (min-width: 768px) {
        .headline {
            font-size: ${props => props.theme.utils.typography('fontSize', 'editorialXl')};
        }

        .standfirst {
            font-size: ${props => props.theme.utils.typography('fontSize', 'editorialSm')};
        }
    }
`;
