import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';

const IframeWrapper = styled.div`
    width: 100%;
    position: relative;
    margin: 20px auto;
`;

const StyledIframe = styled.iframe`
    width: 100%;
    border: 0;
    display: block;
`;

export default function DataWrapperEmbed({
    chartId,
    version = '1',
    title = '',
}) {
    const embedId = `datawrapper-chart-${chartId}`;
    const embedUrl = `https://datawrapper.dwcdn.net/${chartId}/${version}/`;
    const height = 400;

    const iframeRef = useRef(null);
    const [iframeHeight, setIframeHeight] = useState(height);

    useEffect(() => {
        function handleMessage(event) {
            if (!iframeRef.current || !event.data?.['datawrapper-height'])
                return;
            const newHeight =
                event.data['datawrapper-height'][iframeRef.current.id];
            if (newHeight) setIframeHeight(newHeight);
        }

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <>
            <GlobalStyle />
            <IframeWrapper>
                <StyledIframe
                    ref={iframeRef}
                    id={embedId}
                    title={title}
                    src={embedUrl}
                    height={iframeHeight}
                    allowFullScreen
                />
            </IframeWrapper>
        </>
    );
}
