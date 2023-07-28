'use client';

import useLevelData from '@/hooks/useLevelData';
import useSetLevel from '@/hooks/useSetLevel';
import levelIndex, { LevelID } from '@/levels';

export default function LevelBox({ id }: {
    id: LevelID;
}) {
    const { setLevel } = useSetLevel();
    const level = levelIndex[id];
    const { played, accStarCount, questionStarCount, raw } = useLevelData(id);
    return (
        <div className='level-box' onClick={() => setLevel(id)}>
            <div className='level-title'>{level.title}</div>
            <div className='level-description'>{played || <sub style={{ color: 'red' }}>[NEW]</sub>}{level.description}</div>
            <div className='max-acc'>{'⭐'.repeat(accStarCount) + '★'.repeat(3 - accStarCount) + `${raw.maxAccuracy.toFixed(2)}%`}</div>
            <div className='max-question-count'>{accStarCount > 1 ? '⭐'.repeat(questionStarCount) + '★'.repeat(3 - questionStarCount) + `${raw.maxQuestionCount.toFixed(2)}題/秒` : '🔒尚未解鎖'}</div>
        </div>
    );
}
