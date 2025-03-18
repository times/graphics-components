import React from 'react';

import { TooltipContainer } from './style';

function Tooltip({
    clickedImage,
    setClickedImage,
    tooltipPos,
    showTooltip,
    setShowTooltip,
    isImageInLastRow,
}) {
    // If there is no clicked image, return
    if (!clickedImage) return;

    function handleClick() {
        setShowTooltip(false);
        setClickedImage(null);
    }

    return (
        <TooltipContainer
            showTooltip={showTooltip}
            tooltipPos={tooltipPos}
            isImageInLastRow={isImageInLastRow}
        >
            <img
                className="tooltip-image"
                src={`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${clickedImage.imgSrc}.jpg`}
                alt={clickedImage.name}
            />
            <div className="tooltip-content">
                <h3>{clickedImage.name}</h3>
                <p>{clickedImage.copy}</p>
            </div>
            <button className="tooltip-close" onClick={handleClick}>
                <img src="https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg" />
            </button>
        </TooltipContainer>
    );
}

export default Tooltip;
