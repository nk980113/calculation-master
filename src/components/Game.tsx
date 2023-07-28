'use client';

import LevelMenuButton from './LevelMenuButton';
import { useMemo, useState } from 'react';
import SingleInputForm from './SingleInputForm';
import levelIndex, { LevelID } from '@/levels';
import StatusBar from './StatusBar';
import useLevelData from '@/hooks/useLevelData';
import LevelResult from './LevelResult';

export default function Game({ back, levelId }: {
    back(): void;
    levelId: LevelID;
}) {
    const [isEnded, setIsEnded] = useState(false);
    const [questionCount, setQuestionCount] = useState<[number, number]>([0, 0]);
    const { speedUnlocked } = useLevelData(levelId);
    const level = levelIndex[levelId];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const question = useMemo(level.questionGen, [questionCount]);
    return (
        <>
            {isEnded ? (
                <LevelResult
                    questionCount={questionCount}
                    totalTime={60}
                    levelId={levelId}
                />
            ) : (
                <>
                    <StatusBar
                        onEnd={() => setIsEnded(true)}
                        questionCount={questionCount}
                        speedUnlocked={speedUnlocked}
                    />
                    <h2>{question[0]}</h2>
                    <SingleInputForm confirm={(ans) => {
                        setQuestionCount(([correct, total]) => [correct + Number(ans.every((v, i) => question[1][i] === v)), total + 1]);
                    }} key={question[2]} />
                </>
            )}
            <LevelMenuButton back={back} />
        </>
    );
}
