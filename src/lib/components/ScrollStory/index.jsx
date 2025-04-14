import React, { useEffect, useRef, useState } from 'react';
import { Board, Section, SlidesContainer, SlidesWrapper, Text } from './styles';
import { Container } from '../GlobalStyle';

export default function ScrollStory({ data }) {
    const {
        slides = [],
        imgFit = 'cover',
        containerWidth = 'edge-to-edge',
        borderRadius = '0',
        fixedImgHeight,
        fontSize = 'md',
        videoLoop = true,
        videoAutoplay = true,
        videoControls = false,
        videoMute = true,
    } = data;

    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState([]);
    const triggersRef = useRef([]);
    const boardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index, 10);
                        setActiveIndex(index);
                    }
                });
            },
            { threshold: 0.6 }
        );

        triggersRef.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [slides.length]);

    useEffect(() => {
        const newVisibleSlides = slides.map((_, i) => i === activeIndex);
        setVisibleSlides(newVisibleSlides);
    }, [activeIndex, slides]);

    const getZIndex = (i) => {
        return visibleSlides[i] ? 2 : 1;
    };

    const getEmbedUrl = (url) => {
        if (url.includes('youtube.com')) {
            const videoId = url.split('v=')[1]?.split('&')[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=${
                videoAutoplay ? 1 : 0
            }&loop=${videoLoop ? 1 : 0}&controls=${videoControls ? 1 : 0}&mute=${
                videoMute ? 1 : 0
            }&playlist=${videoId}`;
        } else if (url.includes('vimeo.com')) {
            const videoId = url.split('/').pop();
            return `https://player.vimeo.com/video/${videoId}?autoplay=${
                videoAutoplay ? 1 : 0
            }&loop=${videoLoop ? 1 : 0}&controls=${videoControls ? 1 : 0}&muted=${
                videoMute ? 1 : 0
            }`;
        }
        return url;
    };

    const isYouTube = (url) =>
        url.includes('youtube.com') || url.includes('youtu.be');
    const isMP4 = (url) => url.endsWith('.mp4');

    return (
        <Container>
            <SlidesWrapper
                style={{
                    height: fixedImgHeight || '500px',
                }}
                className={
                    containerWidth === 'edge-to-edge'
                        ? 'edge-to-edge'
                        : containerWidth === 'bleed'
                          ? 'bleed'
                          : ''
                }
            >
                <SlidesContainer>
                    {slides.map((slide, i) => (
                        <Board
                            key={i}
                            ref={(el) => (boardRefs.current[i] = el)}
                            className={visibleSlides[i] ? 'overlap' : ''}
                            style={{ zIndex: getZIndex(i) }}
                        >
                            {isYouTube(slide.media) ? (
                                <iframe
                                    title="YouTube video"
                                    src={getEmbedUrl(slide.media)}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    style={{
                                        objectFit: imgFit,
                                        width: '100%',
                                        height: fixedImgHeight
                                            ? fixedImgHeight
                                            : containerWidth === 'edge-to-edge'
                                              ? '100vh'
                                              : '100%',
                                        borderRadius,
                                    }}
                                />
                            ) : isMP4(slide.media) ? (
                                <video
                                    autoPlay={videoAutoplay}
                                    loop={videoLoop}
                                    controls={videoControls}
                                    muted={videoMute}
                                    style={{
                                        objectFit: imgFit,
                                        width: '100%',
                                        height: fixedImgHeight
                                            ? fixedImgHeight
                                            : '100%',
                                        borderRadius,
                                    }}
                                >
                                    <source
                                        src={slide.media}
                                        type="video/mp4"
                                    />
                                </video>
                            ) : (
                                <img
                                    src={slide.media}
                                    alt={slide.altText || 'Slide image'}
                                    style={{
                                        objectFit: imgFit,
                                        width: '100%',
                                        height: fixedImgHeight
                                            ? fixedImgHeight
                                            : '100%',
                                        borderRadius,
                                    }}
                                />
                            )}
                        </Board>
                    ))}
                </SlidesContainer>
            </SlidesWrapper>

            <div className="scroller-sections">
                {slides.map((slide, i) => (
                    <Section
                        key={i}
                        className="trigger"
                        data-index={i}
                        ref={(el) => (triggersRef.current[i] = el)}
                    >
                        {slide.text && (
                            <Text
                                size={fontSize}
                                dangerouslySetInnerHTML={{ __html: slide.text }}
                            />
                        )}
                    </Section>
                ))}
            </div>
        </Container>
    );
}
