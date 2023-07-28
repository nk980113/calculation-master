'use client';

import levelIndex, { LevelID } from '@/levels';
import LevelBox from './LevelBox';
import LockedLevelBox from './LockedLevelBox';
import useLevelData from '@/hooks/useLevelData';

export default function Menu() {
    const levelIds = Object.keys(levelIndex) as LevelID[];
    const playerRecords: {
        [levelId in LevelID]?: number;
    } = {};
    return (
        <>
            {
                levelIds.map((id) => {
                    /* eslint-disable @typescript-eslint/no-shadow */
                    // The level list doesn't change, so this is safe
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const saveData = useLevelData(id);
                    const level = levelIndex[id];
                    playerRecords[id] = saveData.totalStarCount;
                    const reqCount = level.req.length;
                    const potentialsWithCount = level.req.map((id) => [id, playerRecords[id] ?? 0] as const).filter(([, starCount]) => starCount >= 2);
                    const potentials = potentialsWithCount.filter(([, starCount]) => starCount < 4).map(([id]) => id);
                    const completedCount = potentialsWithCount.length - potentials.length;
                    if (reqCount === completedCount) {
                        return <LevelBox key={id} id={id} />;
                    } else if (potentials.length > 0) {
                        return <LockedLevelBox
                            key={id}
                            title={level.title}
                            plural={reqCount - completedCount > 1}
                            firstConditionTitle={levelIndex[potentials[0]].title}
                        />;
                    } else {
                        return null;
                    }
                })
            }
        </>
    );
}
