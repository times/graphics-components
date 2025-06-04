import React, { useState } from 'react';
import { Container, GlobalStyle } from '../GlobalStyle';
import Header from '../Header';
import Grid from '../Grid';
import Tooltip from '../Tooltip';
import ThemeProvider from '../../themes/ThemeProvider';

export default function ImageGrid({ data, theme }) {
    const [clickedImage, setClickedImage] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPos, setTooltipPos] = useState([0, 0]);

    const dataLength = data.length;

    let isImageInLastRow = dataLength - data.indexOf(clickedImage) <= 7;

    const content = (
        <>
            <GlobalStyle />
            <Container>
                <Header
                    headline="Lorem ipsum dolor sit amet"
                    standfirst="Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"
                />
                <Grid
                    data={data}
                    clickedImage={clickedImage}
                    setClickedImage={setClickedImage}
                    setShowTooltip={setShowTooltip}
                    setTooltipPos={setTooltipPos}
                />
                <Tooltip
                    clickedImage={clickedImage}
                    setClickedImage={setClickedImage}
                    showTooltip={showTooltip}
                    setShowTooltip={setShowTooltip}
                    tooltipPos={tooltipPos}
                    isImageInLastRow={isImageInLastRow}
                />
            </Container>
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
