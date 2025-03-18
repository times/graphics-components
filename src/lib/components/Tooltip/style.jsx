import styled from 'styled-components';

export const TooltipContainer = styled.div`
    position: absolute;
    left: 0px;
    top: ${(props) =>
        props.isImageInLastRow
            ? props.tooltipPos[1] - 380
            : props.tooltipPos[1]}px;

    margin-inline: 15%;
    padding: 0.5em;
    border: 1px solid #000;
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: flex-start;

    background-color: #ffffff;

    font-family: 'RobotoRegular', sans-serif;
    font-size: 1.6rem;

    opacity: ${(props) => (props.showTooltip ? '1' : '0')};
    transition: opacity 250ms ease-in;

    .tooltip-image {
        object-fit: cover;
        width: 150px;
        height: 130px;

        @media (min-width: 768px) {
            height: 180px;
            margin-inline: auto;
            margin-block-start: 0;
            margin-block-end: 15px;
        }
    }

    .tooltip-content {
        h3 {
            font-size: 20px;
            margin-block-end: 10px;
            text-align: left;
        }
        p {
            text-align: left;
            font-size: 16px;
        }
    }

    .tooltip-close {
        font-family: 'RobotoRegular', sans-serif !important;
        font-size: 20px;
        font-weight: bold;

        position: absolute;
        top: 1rem;
        right: 1rem;

        cursor: pointer;

        background-color: inherit;
        border: none;

        opacity: 0.8;
        transition: opacity 250ms ease-in;

        &:hover {
            opacity: 1;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;

        .tooltip-content > h3 {
            margin-block-start: 10px;
        }
    }
`;
