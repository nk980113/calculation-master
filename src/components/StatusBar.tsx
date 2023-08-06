'use client';

import useTimer from '@/hooks/useTimer';

export default function StatusBar({ onEnd, questionCount, speedUnlocked, totalTime }: {
    onEnd(): void;
    questionCount: [number, number];
    speedUnlocked: boolean;
    totalTime: number;
}) {
    const time = useTimer(totalTime, 0.1, onEnd);
    return (
        <div className="status-bar">
            <span>準確度：{(questionCount[0] + questionCount[1]) ? (questionCount[0] / questionCount[1] * 100).toFixed(2) : '0.00'}%</span>
            <span>{time.toFixed(1)}秒</span>
            {speedUnlocked && <span>每秒答對{time === totalTime ? 0 : (questionCount[0] / (totalTime - time)).toFixed(3)}題</span>}
        </div>
    );
}
