import { useEffect, useState } from 'react';

export default function useTimer(seconds: number, updateInterval: number, onEnd: () => void) {
    const [currentTime, setCurrentTime] = useState(seconds);
    const [isEnded, setIsEnded] = useState(false);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime((v) => v - updateInterval);
        }, updateInterval * 1_000);
        const timeoutId = setTimeout(() => {
            setIsEnded(true);
            clearInterval(intervalId);
        }, seconds * 1_000);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (isEnded) onEnd();
    return currentTime;
}
