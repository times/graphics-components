import { useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const useWaveSurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null);

    // Initialize wavesurfer when the container mounts
    useEffect(() => {
        if (!containerRef.current) return;

        const ws = WaveSurfer.create({
            ...options,
            container: containerRef.current,
        });

        setWavesurfer(ws);

        return () => {
            ws.destroy();
        };
    }, [options, containerRef]);

    return wavesurfer;
};

export default useWaveSurfer;
