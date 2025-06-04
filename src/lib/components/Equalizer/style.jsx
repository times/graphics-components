import styled from 'styled-components';

export const EqualizerContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: ${props => props.theme.utils.spacing('2')};
    width: 100%;

    justify-content: center;
    align-items: center;

    .waveform-time {
        margin-top: 0 !important;
        margin-block-start: 0;
        margin-block-end: 0;
        font-family: ${props => 
            props.theme.utils.typography('fontFamily', 'timesModernRegular')?.join(', ')
        };
        font-size: ${props => props.theme.utils.typography('fontSize', 'sm')};
        color: ${props => props.theme.utils.color('whiteTint.white')};
        font-weight: ${props => props.theme.utils.typography('fontWeight', 'normal')};
    }

    .play-icon {
        cursor: pointer;
        width: 48px;
        aspect-ratio: 1 / 1;
        transition: opacity 0.2s ease;
        
        &:hover {
            opacity: 0.8;
        }
    }

    .volume-container {
        display: none;

        @media (min-width: 1024px) {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: ${props => props.theme.utils.spacing('2')};
            margin-inline-start: ${props => props.theme.utils.spacing('2')};
        }
    }

    .volume-icon {
        cursor: pointer;
        width: 20px;
        aspect-ratio: 1 / 1;
        transition: opacity 0.2s ease;
        
        &:hover {
            opacity: 0.8;
        }
    }

    input[type='range'].styled-slider {
        height: 2.2em;
        -webkit-appearance: none;
        background: transparent;
        cursor: pointer;
    }

    /*progress support*/
    input[type='range'].styled-slider.slider-progress {
        --range: calc(var(--max) - var(--min));
        --ratio: calc((var(--value) - var(--min)) / var(--range));
        --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));
    }

    input[type='range'].styled-slider:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.utils.color('focus.focus010')};
    }

    /*webkit*/
    input[type='range'].styled-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: ${props => props.theme.utils.color('whiteTint.white')};
        border: none;
        box-shadow: 0 0 2px ${props => props.theme.utils.color('blackTint.black')};
        margin-top: calc(max((1em - 1px - 1px) * 0.5, 0px) - 2em * 0.5);
    }

    input[type='range'].styled-slider::-webkit-slider-runnable-track {
        height: 1em;
        border: 1px solid ${props => props.theme.utils.color('neutral.ne060')};
        border-radius: ${props => props.theme.utils.borderRadius('lg')};
        background: ${props => props.theme.utils.color('neutral.ne090')};
        box-shadow: none;
    }

    input[type='range'].styled-slider.slider-progress::-webkit-slider-runnable-track {
        background:
            linear-gradient(
                ${props => props.theme.utils.color('red.red090')}, 
                ${props => props.theme.utils.color('red.red090')}
            ) 0 / var(--sx) 100% no-repeat,
            ${props => props.theme.utils.color('neutral.ne090')};
    }

    /*mozilla*/
    input[type='range'].styled-slider::-moz-range-thumb {
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: ${props => props.theme.utils.color('whiteTint.white')};
        border: none;
        box-shadow: 0 0 2px ${props => props.theme.utils.color('blackTint.black')};
    }

    input[type='range'].styled-slider::-moz-range-track {
        height: max(calc(1em - 1px - 1px), 0px);
        border: 1px solid ${props => props.theme.utils.color('neutral.ne060')};
        border-radius: ${props => props.theme.utils.borderRadius('lg')};
        background: ${props => props.theme.utils.color('neutral.ne090')};
        box-shadow: none;
    }

    input[type='range'].styled-slider.slider-progress::-moz-range-track {
        background:
            linear-gradient(
                ${props => props.theme.utils.color('red.red090')}, 
                ${props => props.theme.utils.color('red.red090')}
            ) 0 / var(--sx) 100% no-repeat,
            ${props => props.theme.utils.color('neutral.ne090')};
    }

    /*ms*/
    input[type='range'].styled-slider::-ms-fill-upper {
        background: transparent;
        border-color: transparent;
    }

    input[type='range'].styled-slider::-ms-fill-lower {
        background: transparent;
        border-color: transparent;
    }

    input[type='range'].styled-slider::-ms-thumb {
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: ${props => props.theme.utils.color('whiteTint.white')};
        border: none;
        box-shadow: 0 0 2px ${props => props.theme.utils.color('blackTint.black')};
        margin-top: 0;
        box-sizing: border-box;
    }

    input[type='range'].styled-slider::-ms-track {
        height: 1em;
        border-radius: ${props => props.theme.utils.borderRadius('lg')};
        background: ${props => props.theme.utils.color('neutral.ne090')};
        border: 1px solid ${props => props.theme.utils.color('neutral.ne060')};
        box-shadow: none;
        box-sizing: border-box;
    }

    input[type='range'].styled-slider.slider-progress::-ms-fill-lower {
        height: max(calc(1em - 1px - 1px), 0px);
        border-radius: ${props => props.theme.utils.borderRadius('lg')} 0 0 ${props => props.theme.utils.borderRadius('lg')};
        margin: -1px 0 -1px -1px;
        background: ${props => props.theme.utils.color('red.red090')};
        border: 1px solid ${props => props.theme.utils.color('neutral.ne060')};
        border-right-width: 0;
    }
`;
