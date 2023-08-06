import add1 from './add/add1';
import add2 from './add/add2';
import add21 from './add/add21';
import add22 from './add/add22';
import add33 from './add/add33';
import add39 from './add/add39';
import div1 from './div/div1';
import div21 from './div/div21';
import div32 from './div/div32';
import div42 from './div/div42';
import div43 from './div/div43';
import div52 from './div/div52';
import div53 from './div/div53';
import as44 from './misc/as44';
import mult1 from './mult/mult1';
import mult21 from './mult/mult21';
import mult22 from './mult/mult22';
import mult33 from './mult/mult33';
import mult39 from './mult/mult39';
import mult42 from './mult/mult42';
import mult43 from './mult/mult43';
import sub1 from './sub/sub1';
import sub2 from './sub/sub2';
import sub21 from './sub/sub21';
import sub22 from './sub/sub22';
import sub33 from './sub/sub33';
import sub39 from './sub/sub39';

export type Level = {
    title: string;
    description: string;
    maxQuestionCountThreshold: [number, number, number];
    tutorial: React.ReactNode[];
    questionGen(): [string, number[], number];
    req: LevelID[];
    time: number;
    difficulty: number;
    inputBox: React.FC<{ confirm(ans: number[]): void; }>;
};

const levelIndex = {
    add1,
    add2,
    add21,
    add22,
    sub1,
    sub2,
    sub21,
    sub22,
    mult1,
    mult21,
    mult22,
    div1,
    div21,
    div32,
    div42,
    add33,
    sub33,
    mult42,
    mult33,
    mult43,
    div43,
    div52,
    div53,
    add39,
    sub39,
    mult39,
    as44,
} satisfies {
    [levelId: string]: Level;
};

export default levelIndex;

export type LevelID = keyof typeof levelIndex;
