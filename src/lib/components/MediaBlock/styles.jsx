import styled, { css } from 'styled-components';

export const MediaContainer = styled.div`
    display: block;
    margin: 20px auto;
    position: relative;

    &.bleed {
        width: 80vw;
        margin-left: calc(-50vw + 50%);
        padding: 0 10vw;
    }

    &.edge-to-edge {
        width: 96vw;
        margin-left: calc(-48vw + 50%);
    }

    @media (max-width: 767px) {
        padding: 0 14px !important;
        &.bleed {
            padding: 0;
        }
    }
`;

export const SlideText = styled.div`
    margin-top: 10px;
    text-align: left;
    p {
        font-size: 14px;
        color: rgb(105, 105, 105);
        line-height: 19px;
        margin-bottom: 4px;
        text-align: left;
    }
`;

export const CaptionText = styled.div`
    position: absolute;
    top: 0;
    background-color: black;
    color: #fff;
    padding: 10px;
    border-radius: ${({ $imgBorderRadius }) => `${$imgBorderRadius} 0 0 0`};

    p {
        color: #fff;
        font-size: 12px;
        margin: 0;
    }
`;

export const StyledMedia = styled.div`
    position: relative;

    iframe,
    video,
    img {
        width: 100%;
        height: auto;
        border: none;
        ${({ $containerWidth, $fixedImgHeight, $imgBorderRadius }) => {
            if ($containerWidth === 'edge-to-edge') {
                return css`
                    height: 100vh;
                    object-fit: cover;
                    border-radius: ${$imgBorderRadius};
                `;
            } else if (
                $containerWidth === 'bleed' ||
                ($containerWidth === 'inline' && $fixedImgHeight)
            ) {
                return css`
                    height: ${$fixedImgHeight};
                    object-fit: cover;
                    border-radius: ${$imgBorderRadius};
                `;
            }
            return css`
                border-radius: ${$imgBorderRadius};
            `;
        }}
    }
`;
