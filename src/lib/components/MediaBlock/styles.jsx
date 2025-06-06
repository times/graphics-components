import styled, { css } from 'styled-components';

export const MediaContainer = styled.div`
    display: block;
    margin: ${props => props.theme.utils.spacing('5')} auto;
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
        padding: 0 ${props => props.theme.utils.spacing('3')} !important;
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
        bottom: ${props => props.theme.utils.spacing('2')};
        left: ${props => props.theme.utils.spacing('16')};
        color: ${props => props.theme.utils.color('neutral.black')};
        width: ${props => props.theme.utils.spacing('16')};
        height: ${props => props.theme.utils.spacing('16')};
        background-color: ${props => props.theme.utils.color('neutral.nel010')};
        border-radius: ${props => props.theme.utils.borderRadius('none')};
        font-size: ${props => props.theme.utils.typography('fontSize', '4xl')};
        line-height: 1.35;
    }
`;

export const SlideText = styled.div`
    margin-top: ${props => props.theme.utils.spacing('3')};
    text-align: left;
    font-family: ${props => props.theme.utils.typography('fontFamily', 'timesModernRegular')?.join(', ')};
    
    p {
        font-size: ${props => props.theme.utils.typography('fontSize', 'sm')};
        color: ${props => props.theme.utils.color('neutral.ne060')};
        line-height: ${props => props.theme.utils.typography('lineHeight', 'normal')};
        margin-bottom: ${props => props.theme.utils.spacing('1')};
        text-align: left;
    }
`;

export const CaptionText = styled.div`
    position: absolute;
    top: 0;
    background-color: ${props => props.theme.utils.color('neutral.black')};
    color: ${props => props.theme.utils.color('whiteTint.white')};
    padding: ${props => props.theme.utils.spacing('3')};
    border-radius: ${({ $imgBorderRadius, theme }) => 
        `${$imgBorderRadius || theme.utils.borderRadius('md')} 0 0 0`};

    p {
        color: ${props => props.theme.utils.color('whiteTint.white')};
        font-size: ${props => props.theme.utils.typography('fontSize', 'xs')};
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
        ${({ $containerWidth, $fixedImgHeight, $imgBorderRadius, theme }) => {
            const borderRadius = $imgBorderRadius || theme.utils.borderRadius('md');
            
            if ($containerWidth === 'edge-to-edge') {
                return css`
                    height: 100vh;
                    object-fit: cover;
                    border-radius: ${borderRadius};
                `;
            } else if (
                $containerWidth === 'bleed' ||
                ($containerWidth === 'inline' && $fixedImgHeight)
            ) {
                return css`
                    height: ${$fixedImgHeight};
                    object-fit: cover;
                    border-radius: ${borderRadius};
                `;
            }
            return css`
                border-radius: ${borderRadius};
            `;
        }}
    }
`;
