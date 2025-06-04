import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import ThemeProvider from '../../themes/ThemeProvider';

const Container = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    user-select: none;
    margin: ${props => props.theme?.utils?.spacing?.('5') || '20px'} 0 0;
    border-radius: ${props => props.theme?.utils?.borderRadius?.('md') || '0.375rem'};
    box-shadow: ${props => props.theme?.utils?.shadow?.('shadow020') || '0 2px 4px 0 rgba(17, 17, 17, 0.08)'};
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
    background: ${props => props.theme?.utils?.color?.('whiteTint.white') || 'white'};
    cursor: ew-resize;
    z-index: 3;
    box-shadow: 0 0 8px ${props => props.theme?.utils?.color?.('blackTint.bTint050') || 'rgba(0, 0, 0, 0.3)'};

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 80px;
        background: ${props => props.theme?.utils?.color?.('whiteTint.white') || 'white'};
        border-radius: ${props => props.theme?.utils?.borderRadius?.('sm') || '0.125rem'};
        box-shadow: 0 0 8px ${props => props.theme?.utils?.color?.('blackTint.bTint050') || 'rgba(0, 0, 0, 0.3)'};
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
        border-right: 8px solid ${props => props.theme?.utils?.color?.('whiteTint.white') || 'white'};
    }

    & > span::after {
        border-left: 8px solid ${props => props.theme?.utils?.color?.('whiteTint.white') || 'white'};
    }

    &:focus {
        outline: 2px solid ${props => props.theme?.utils?.color?.('focus.focus010') || '#005c8a'};
        outline-offset: 2px;
    }
`;

const Label = styled.span`
    position: absolute;
    top: ${props => props.theme?.utils?.spacing?.('3') || '10px'};
    background: ${props => props.theme?.utils?.color?.('blackTint.bTint060') || 'rgba(0, 0, 0, 0.6)'};
    color: ${props => props.theme?.utils?.color?.('whiteTint.white') || '#fff'};
    padding: ${props => props.theme?.utils?.spacing?.('1') || '4px'} ${props => props.theme?.utils?.spacing?.('2') || '8px'};
    font-size: ${props => props.theme?.utils?.fontSize?.('xs') || '12px'};
    font-family: ${props => 
        (props.theme?.utils?.fontFamily && props.theme.utils.fontFamily('robotoRegular')?.join(', ')) || 'Roboto-Regular, sans-serif'
    };
    font-weight: ${props => props.theme?.utils?.fontWeight?.('medium') || '500'};
    z-index: 4;
    border-radius: ${props => props.theme?.utils?.borderRadius?.('sm') || '0.125rem'};
    letter-spacing: ${props => props.theme?.utils?.letterSpacing?.('wide') || '0.025em'};
`;

const Credits = styled.p`
    margin-top: ${props => props.theme?.utils?.spacing?.('2') || '8px'};
    font-size: ${props => props.theme?.utils?.fontSize?.('xs') || '12px'};
    color: ${props => props.theme?.utils?.color?.('ink.inkSubtle.light') || '#666'};
    text-align: left;
    margin-bottom: ${props => props.theme?.utils?.spacing?.('5') || '20px'};
    font-family: ${props => 
        (props.theme?.utils?.fontFamily && props.theme.utils.fontFamily('robotoRegular')?.join(', ')) || 'Roboto-Regular, sans-serif'
    };
    font-weight: ${props => props.theme?.utils?.fontWeight?.('normal') || '400'};
    line-height: ${props => props.theme?.utils?.lineHeight?.('relaxed') || '1.75'};

    @media (prefers-color-scheme: dark) {
        color: ${props => props.theme?.utils?.color?.('theme.dark.font') || '#b6b6b6'};
    }
`;

const ImageSlider = ({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After',
    photoCredits = {},
    theme,
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

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            setPosition(prev => Math.max(0, prev - 5));
        } else if (e.key === 'ArrowRight') {
            setPosition(prev => Math.min(100, prev + 5));
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    const content = (
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
                    onKeyDown={handleKeyDown}
                    role="separator"
                    aria-valuenow={position}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Image comparison slider"
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
};

export default ImageSlider;
