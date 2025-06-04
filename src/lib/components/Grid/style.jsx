import styled from 'styled-components';

export const GridContainer = styled.div`
    margin-block: ${props => props.theme.utils.spacing('4')};
    margin-inline: ${props => props.theme.utils.spacing('3')};

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${props => props.theme.utils.spacing('2')};

    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        gap: ${props => props.theme.utils.spacing('4')};
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(7, 1fr);
        gap: ${props => props.theme.utils.spacing('4')};
    }
`;

export const ImageProfile = styled.img`
    width: 100%;
    height: 80px;

    object-fit: cover;
    cursor: pointer;
    border-radius: ${props => props.theme.utils.borderRadius('sm')};

    // * CONDITIONAL STYLES
    opacity: ${(props) => (props.isHovered ? '1' : '0.5')};

    -webkit-filter: ${(props) =>
        props.grayscale ? 'grayscale(100%)' : 'none'};
    filter: ${(props) => (props.grayscale ? 'grayscale(100%)' : 'none')};

    transition: opacity 250ms ease-in, filter 250ms ease-in;

    &:hover {
        opacity: ${(props) => (props.isHovered ? '1' : '0.7')};
    }

    &:focus {
        outline: 2px solid ${props => props.theme.utils.color('focus.focus010')};
        outline-offset: 2px;
    }
`;
