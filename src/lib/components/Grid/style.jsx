import styled from 'styled-components';

export const GridContainer = styled.div`
    margin-block: 1em;
    margin-inline: 10px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5em;

    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        gap: 1em;
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(7, 1fr);
        gap: 1em;
    }
`;

export const ImageProfile = styled.img`
    width: 100%;
    height: 80px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${(props) => (props.isHovered ? '1' : '0.5')};

    -webkit-filter: ${(props) =>
        props.grayscale ? 'grayscale(100%)' : 'none'};
    filter: ${(props) => (props.grayscale ? 'grayscale(100%)' : 'none')};

    transition: opacity 250ms ease-in;
`;
