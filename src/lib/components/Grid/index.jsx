import React from 'react';

import { GridContainer, ImageProfile } from './style';

function Grid({
    data,
    clickedImage,
    setClickedImage,
    setShowTooltip,
    setTooltipPos,
}) {
    function handleClick(e, d) {
        setClickedImage(d);
        setShowTooltip(true);
        setTooltipPos([
            e.clientX,
            e.target.offsetTop + e.target.offsetHeight - 20,
        ]);
    }

    const imageEls = data.map((d) => {
        return (
            <ImageProfile
                key={d.id}
                src={`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${d.imgSrc}.jpg`}
                alt={d.name}
                grayscale={false}
                lazy={true} // Lazy load the images
                onClick={(e) => handleClick(e, d)}
                isHovered={clickedImage === d}
            />
        );
    });

    return <GridContainer>{imageEls}</GridContainer>;
}

export default Grid;
