import { LevelID } from '@/levels';

export type BackendLevelData = {
    level_id: LevelID;
    max_accuracy: string;
    max_question_count: string;
};

export type LevelData = {
    levelId: LevelID;
    maxAccuracy: number;
    maxQuestionCount: number;
};

export function fromBackend(data: BackendLevelData[]): LevelData[] {
    return data.map(({ level_id, max_accuracy, max_question_count }) => ({
        levelId: level_id,
        maxAccuracy: Number(max_accuracy),
        maxQuestionCount: Number(max_question_count),
    }));
}

export function toBackend(data: LevelData[]): BackendLevelData[] {
    return data.map(({ levelId, maxAccuracy, maxQuestionCount }) => ({
        level_id: levelId,
        max_accuracy: maxAccuracy.toFixed(2),
        max_question_count: maxQuestionCount.toFixed(3),
    }));
}
