import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';

const Container = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    user-select: none;
    margin: 20px 0 0;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const BeforeImage = styled(Image)`
    clip-path: ${({ position }) => `inset(0 ${100 - position}% 0 0)`};
    z-index: 2;
`;

const AfterImage = styled(Image)`
    z-index: 1;
`;

const Slider = styled.div`
    position: absolute;
    top: 0;
    left: ${({ position }) => `${position}%`};
    height: 100%;
    width: 3px;
    background: white;
    cursor: ew-resize;
    z-index: 3;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 80px;
        background: white;
    }

    & > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 40px;
    }

    & > span::before,
    & > span::after {
        content: '';
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    & > span::before {
        border-right: 8px solid white;
    }

    & > span::after {
        border-left: 8px solid white;
    }
`;

const Label = styled.span`
    position: absolute;
    top: 10px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 4px 8px;
    font-size: 12px;
    z-index: 4;
    font-family: 'RobotoRegular', sans-serif;
`;

const Credits = styled.p`
    margin-top: 8px;
    font-size: 12px;
    color: #666;
    text-align: left;
    margin-bottom: 20px;
    font-family: 'RobotoRegular', sans-serif;
`;

const ImageSlider = ({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After',
    photoCredits = {},
}) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState(50);
    const [dragging, setDragging] = useState(false);

    const handleMouseMove = (e) => {
        if (!dragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const newPos = ((e.clientX - rect.left) / rect.width) * 100;
        setPosition(Math.max(0, Math.min(100, newPos)));
    };

    const handleMouseDown = () => setDragging(true);
    const handleMouseUp = () => setDragging(false);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    return (
        <>
            <GlobalStyle />
            <Container ref={containerRef}>
                <AfterImage src={afterImage} alt="After" />
                <BeforeImage
                    src={beforeImage}
                    alt="Before"
                    position={position}
                />
                <Slider
                    position={position}
                    onMouseDown={handleMouseDown}
                    role="separator"
                    aria-valuenow={position}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    tabIndex={0}
                >
                    <span />
                </Slider>
                <Label style={{ left: '10px' }}>{beforeLabel}</Label>
                <Label style={{ right: '10px' }}>{afterLabel}</Label>
            </Container>

            {photoCredits?.before || photoCredits?.after ? (
                <Credits>
                    {photoCredits.before && <>Before: {photoCredits.before} </>}
                    {photoCredits.after && <>After: {photoCredits.after}</>}
                </Credits>
            ) : null}
        </>
    );
};

export default ImageSlider;
