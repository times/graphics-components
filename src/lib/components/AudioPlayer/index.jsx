/* eslint-disable linebreak-style */
import React from 'react';
import { CardContainer, GlobalStyle } from '../GlobalStyle';
import Equalizer from '../Equalizer';

function AudioPlayer({ data }) {
    return (
        <>
            <GlobalStyle />
            <CardContainer>
                <div className="card-image--container">
                    <img
                        src={`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${data.imgSrc}.jpg`}
                        className="card-image"
                    />
                    <p className="card-name">{data.name}</p>
                </div>
                <p className="card-quote">{data.quote}</p>
                <Equalizer
                    key={data.id}
                    height={100}
                    waveColor="#ff0000"
                    progressColor="#940000"
                    url={`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${data.audioSrc}.m4a`}
                    normalize={true}
                    barWidth={2}
                    barGap={2}
                    barRadius={2}
                    cursorWidth={2}
                />
            </CardContainer>
        </>
    );
}

export default AudioPlayer;
