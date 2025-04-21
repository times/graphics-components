/* eslint-disable linebreak-style */
import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Wrapper from '../Wrapper';
import { GlobalStyle } from '../GlobalStyle';
import { CaptionText, MediaContainer, SlideText, StyledMedia } from './styles';

const VideoJS = ({ options, onReady, controlsTop = false }) => {
    const videoRef  = useRef(null);
    const playerRef = useRef(null);
  
    useEffect(() => {
      if (!playerRef.current && videoRef.current) {
        playerRef.current = videojs(videoRef.current, options, () => {
          onReady?.(playerRef.current);
        });
      }
      return () => {
        playerRef.current?.dispose();
        playerRef.current = null;
      };
    }, []);
  
    useEffect(() => {
      if (!playerRef.current) return;
  
      const { autoplay, controls, loop, muted } = options;
  
      playerRef.current.autoplay(autoplay);
      playerRef.current.controls(controls);
      playerRef.current.loop(loop);
      playerRef.current.muted(muted);
  
    }, [
      options.autoplay,
      options.controls,
      options.loop,
      options.muted,
    ]);
  
    return (
        <div
        data-vjs-player
        className={controlsTop ? 'controls-top' : ''}
      >
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered"
        />
      </div>
    );
  };
  

const getEmbedUrl = (mediaUrl, autoplay, loop, controls, mute) => {
    if (mediaUrl.includes('youtube.com')) {
        const videoId = mediaUrl.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=${
            autoplay ? 1 : 0
        }&loop=${loop ? 1 : 0}&controls=${controls ? 1 : 0}&mute=${
            mute ? 1 : 0
        }&playlist=${videoId}`;
    } else if (mediaUrl.includes('vimeo.com')) {
        const videoId = mediaUrl.split('/').pop();
        return `https://player.vimeo.com/video/${videoId}?autoplay=${
            autoplay ? 1 : 0
        }&loop=${loop ? 1 : 0}&controls=${controls ? 1 : 0}&muted=${mute ? 1 : 0}`;
    }
    return mediaUrl;
};

const MediaBlock = ({ data }) => {
    if (!data) return null;

    const {
        fixedImgHeight = null,
        containerWidth = 'inline',
        imgBorderRadius = null,
        media = '',
        videoLoop = 'true',
        videoAutoplay = 'true',
        videoControls = 'false',
        videoMute = 'true',
        text,
        caption,
        altText,
    } = data;

    const parsedLoop = videoLoop === true;
    const parsedAutoplay = videoAutoplay === true;
    const parsedControls = videoControls === true;
    const parsedMute = videoMute === true;

    const embedUrl = getEmbedUrl(
        media,
        parsedAutoplay,
        parsedLoop,
        parsedControls,
        parsedMute
    );

    // Video.js options
    const videoJsOptions = {
        autoplay: parsedAutoplay,
        controls: parsedControls,
        loop: parsedLoop,
        muted: parsedMute,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: media,
                type: 'video/mp4',
            },
        ],
    };

    const mediaElement = (
        <StyledMedia
            $containerWidth={containerWidth}
            $fixedImgHeight={fixedImgHeight}
            $imgBorderRadius={imgBorderRadius}
        >
            {media.includes('youtube.com') || media.includes('vimeo.com') ? (
                <iframe
                    src={embedUrl}
                    title="Embedded media"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : media.endsWith('.mp4') ? (
                <VideoJS options={videoJsOptions} />
            ) : (
                <img src={media} alt={altText} />
            )}
            {text && (
                <SlideText
                    $imgBorderRadius={imgBorderRadius}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            {caption && (
                <CaptionText
                    $imgBorderRadius={imgBorderRadius}
                    dangerouslySetInnerHTML={{ __html: caption }}
                />
            )}
        </StyledMedia>
    );

    return (
        <>
            <GlobalStyle />
            <MediaContainer className={containerWidth}>
                <Wrapper data={data}>{mediaElement}</Wrapper>
            </MediaContainer>
        </>
    );
};

export default MediaBlock;
