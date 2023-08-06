'use client';

import useLevelData from '@/hooks/useLevelData';
import useSaveData from '@/hooks/useSaveData';
import type { LevelID } from '@/levels';
import { useState } from 'react';

export default function LevelResult({ questionCount, totalTime = 60, levelId }: {
    questionCount: [number, number];
    totalTime: number;
    levelId: LevelID;
}) {
    const [updated, setUpdated] = useState(false);
    const [, dispatchSave] = useSaveData();
    const { speedUnlocked, raw: { maxAccuracy, maxQuestionCount }, accStarCount, questionStarCount } = useLevelData(levelId);
    const [wasSpeedUnlocked] = useState(speedUnlocked);
    const acc = (questionCount[0] / questionCount[1] * 100) || 0;
    const [newRecAcc] = useState(acc > maxAccuracy);
    const speed = (questionCount[0] / totalTime);
    const [newRecSpeed] = useState((speed > maxQuestionCount) && speedUnlocked);
    if (!updated) {
        if (newRecAcc) dispatchSave({
            levelId,
            updateKey: 'maxAccuracy',
            value: acc,
        });
        if (newRecSpeed) dispatchSave({
            levelId,
            updateKey: 'maxQuestionCount',
            value: speed,
        });
        setUpdated(true);
    }
    return (
        <>
            <h2>答對題數：{questionCount[0]}(共{questionCount[1]}題)</h2>
            <h2>準確度：{acc.toFixed(2)}% {newRecAcc && <span style={{ color: 'red' }}>新紀錄！</span>}</h2>
            <h3>{'⭐'.repeat(accStarCount) + '★'.repeat(3 - accStarCount)}</h3>
            {wasSpeedUnlocked && (
                <>
                    <h2>每秒答對{speed.toFixed(3)}題 {newRecSpeed && <span style={{ color: 'red' }}>新紀錄！</span>}</h2>
                    <h3>{'⭐'.repeat(questionStarCount) + '★'.repeat(3 - questionStarCount)}</h3>
                </>
            )}
            {(speedUnlocked && !wasSpeedUnlocked) && <h2 style={{ color: 'darkgreen' }}>速度挑戰已解鎖</h2>}
        </>
    );
}
