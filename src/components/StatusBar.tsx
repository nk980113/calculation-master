'use client';

import useTimer from '@/hooks/useTimer';

export default function StatusBar({ onEnd, questionCount, speedUnlocked }: {
    onEnd(): void;
    questionCount: [number, number];
    speedUnlocked: boolean;
}) {
    const time = useTimer(60, 0.1, onEnd);
    return (
        <div className="status-bar">
            <span>準確度：{(questionCount[0] + questionCount[1]) ? (questionCount[0] / questionCount[1] * 100).toFixed(2) : '0.00'}%</span>
            <span>{time.toFixed(1)}秒</span>
            {speedUnlocked && <span>每秒答對{(questionCount[0] / (60 - time)).toFixed(2)}題</span>}
        </div>
    );
}
