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

    [data-vjs-player] {
        position: relative; /* garantía para posicionar la barra */
    }

    [data-vjs-player] .vjs-control-bar {
        position: absolute;
        left: 0;
        right: 0;
        opacity: 0;
        pointer-events: none;
        transition:
            transform 0.2s ease,
            opacity 0.2s ease;
    }

    [data-vjs-player] .vjs-control-bar {
        bottom: 0;
        transform: translateY(100%); /* oculta: se desliza hacia abajo */
    }

    [data-vjs-player]:hover .vjs-control-bar {
        transform: translateY(0); /* visible: sube */
        opacity: 1;
        pointer-events: auto;
    }

    [data-vjs-player].controls-top .vjs-control-bar {
        top: 0;
        bottom: auto;
        transform: translateY(-100%); /* oculta: se desliza hacia arriba */
    }

    [data-vjs-player].controls-top:hover .vjs-control-bar {
        transform: translateY(0); /* visible: baja */
        opacity: 1;
        pointer-events: auto;
    }

    .vjs-modal-dialog .vjs-modal-dialog-content,
    .video-js .vjs-modal-dialog,
    .vjs-button > .vjs-icon-placeholder:before,
    .video-js .vjs-big-play-button .vjs-icon-placeholder:before {
        bottom: 0 !important;
    }

    .video-js .vjs-big-play-button {
        top: unset;
        bottom: 0.3em;
        left: 1.8em;
        color: black;
        width: 4rem;
        height: 4rem;
        background-color: white;
        border-radius: 0;
        font-size: 5em;
        line-height: 1.15em;
    }
`;

export const SlideText = styled.div`
    margin-top: 10px;
    text-align: left;
    font-family: Roboto-Regular, Roboto-Regular-fallback, sans-serif;
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
