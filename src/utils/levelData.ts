import levelIndex from '@/levels';
import { LevelData } from './backend';

const accThreshold = [80, 90, 100];

export default function levelData(saveData: LevelData) {
    const level = levelIndex[saveData.levelId];
    const accStarCount = accThreshold.findLastIndex(v => v <= saveData.maxAccuracy) + 1;
    const { maxQuestionCountThreshold } = level;
    const questionStarCount = maxQuestionCountThreshold.findIndex(v => v <= saveData.maxQuestionCount) + 1;
    const totalStarCount = accStarCount + questionStarCount;
    const speedUnlocked = accStarCount > 1;

    return {
        raw: saveData,
        accStarCount,
        questionStarCount,
        totalStarCount,
        speedUnlocked,
    };
}
