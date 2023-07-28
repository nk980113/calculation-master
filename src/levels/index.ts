import add1 from './add/add1';
import add2 from './add/add2';
import mult1 from './mult/mult1';

export type Level = {
    title: string;
    description: string;
    maxQuestionCountThreshold: [number, number, number];
    tutorial: React.ReactNode[];
    questionGen(): [string, number[], number];
    req: LevelID[];
};

const levelIndex = {
    add1,
    add2,
    mult1,
} satisfies {
    [levelId: string]: Level;
};

export default levelIndex;

export type LevelID = keyof typeof levelIndex;
