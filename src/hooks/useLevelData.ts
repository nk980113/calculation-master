import type { LevelID } from '@/levels';
import useSaveData from './useSaveData';
import levelDataInfo from '@/utils/levelData';

export default function useLevelData(id: LevelID) {
    const [fullLevelData] = useSaveData();
    const saveData = fullLevelData.find((v) => v.levelId === id);
    const played = !!saveData;
    const levelData = saveData ?? {
        levelId: id,
        maxAccuracy: 0,
        maxQuestionCount: 0,
    };

    return {
        played,
        ...levelDataInfo(levelData),
    };
}
