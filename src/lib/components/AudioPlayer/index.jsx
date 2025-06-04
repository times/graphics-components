/* eslint-disable linebreak-style */
import React from 'react';
import { CardContainer, GlobalStyle } from '../GlobalStyle';
import Equalizer from '../Equalizer';
import ThemeProvider from '../../themes/ThemeProvider';

function AudioPlayer({ data, theme }) {
    const content = (
        <>
            <GlobalStyle />
            <CardContainer>
                <div className="card-image--container">
                    <img
                        src={`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${data.imgSrc}.jpg`}
                        className="card-image"
                        alt={data.name || 'Audio player image'}
                    />
                    <p className="card-name">{data.name}</p>
                </div>
                <p className="card-quote">{data.quote}</p>
                <div className="waveform-container">
                    <Equalizer
                        key={data.id}
                        height={100}
                        waveColor="#ff0000"
                        progressColor="#9f0000"
                        url={`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${data.audioSrc}.m4a`}
                        normalize={true}
                        barWidth={2}
                        barGap={2}
                        barRadius={2}
                        cursorWidth={2}
                    />
                </div>
            </CardContainer>
        </>
    );

    // If no custom theme is provided, use default ThemeProvider
    if (!theme) {
        return (
            <ThemeProvider>
                {content}
            </ThemeProvider>
        );
    }

    // If theme is provided, wrap with ThemeProvider
    return (
        <ThemeProvider customTheme={theme}>
            {content}
        </ThemeProvider>
    );
}

export default AudioPlayer;
