import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import useWaveSurfer from '../../hooks/useWaveSurfer';
import { EqualizerContainer } from './style';

const Equalizer = memo((props) => {
    const containerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(
        millisToMinutesAndSeconds(0)
    );
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);

    const wavesurfer = useWaveSurfer(containerRef, props);
    const inputRef = useRef(null);
    const { onPlay, onReady } = props;

    // Handle on play button click
    const onPlayClick = useCallback(() => {
        wavesurfer.playPause();
    }, [wavesurfer]);

    // * Initialise wavesurfer when the component mounts or any of the props change
    useEffect(() => {
        if (!wavesurfer) return;

        wavesurfer.setVolume(volume);

        const getPlayerParams = () => ({
            media: wavesurfer.getMediaElement(),
            peaks: wavesurfer.exportPeaks(),
        });

        const subscriptions = [
            wavesurfer.on('ready', () => {
                onReady && onReady(getPlayerParams());

                setTotalTime(
                    millisToMinutesAndSeconds(
                        Math.round(wavesurfer.getDuration() * 1000)
                    )
                );

                setIsPlaying(wavesurfer.isPlaying());
            }),
            wavesurfer.on('play', () => {
                onPlay &&
                    onPlay((prev) => {
                        const newParams = getPlayerParams();

                        if (!prev || prev.media !== newParams.media) {
                            if (prev) {
                                prev.media.pause();
                                prev.media.currentTime = 0;
                            }

                            return newParams;
                        }
                        return prev;
                    });

                setIsPlaying(true);
            }),

            wavesurfer.on('audioprocess', () => {
                setCurrentTime(
                    millisToMinutesAndSeconds(
                        Math.round(wavesurfer.getCurrentTime() * 1000)
                    )
                );
            }),

            wavesurfer.on('pause', () => setIsPlaying(false)),
        ];

        return () => {
            subscriptions.forEach((unsub) => unsub());
        };
    }, [wavesurfer, onPlay, onReady, volume]);

    useEffect(() => {
        // Calculate the progress of the volume slider on mount
        const el = inputRef.current;

        el.style.setProperty('--value', el.value);
        el.style.setProperty('--min', el.min === '' ? '0' : el.min);
        el.style.setProperty('--max', el.max === '' ? '100' : el.max);
        el.style.setProperty('--value', el.value);
    }, []);

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    function handleChange(e) {
        setVolume(e.target.value);

        // Calculate the progress of the volume slider on change
        const el = e.target;

        el.style.setProperty('--value', el.value);
        el.style.setProperty('--min', el.min === '' ? '0' : el.min);
        el.style.setProperty('--max', el.max === '' ? '100' : el.max);
        el.style.setProperty('--value', el.value);
    }

    function handleVolumeSlider() {
        setShowVolumeSlider(!showVolumeSlider);
    }

    return (
        <EqualizerContainer>
            {!isPlaying ? (
                <img
                    className="play-icon"
                    src="https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png"
                    onClick={onPlayClick}
                />
            ) : (
                <img
                    className="play-icon"
                    src="https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png"
                    onClick={onPlayClick}
                />
            )}

            <div ref={containerRef} style={{ width: '100%' }} />
            <p className="waveform-time">
                <span>{currentTime}</span> / <span>{totalTime}</span>
            </p>
            <div className="volume-container">
                <img
                    className="volume-icon"
                    src="https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png"
                    onClick={handleVolumeSlider}
                />
                <input
                    ref={inputRef}
                    className="styled-slider slider-progress"
                    type="range"
                    id="volume-slider"
                    min={0}
                    max={1}
                    step={0.1}
                    value={volume}
                    onChange={handleChange}
                    style={{
                        opacity: showVolumeSlider ? 1 : 0,
                        pointerEvents: showVolumeSlider ? 'all' : 'none',
                    }}
                />
            </div>
        </EqualizerContainer>
    );
});

export default Equalizer;
