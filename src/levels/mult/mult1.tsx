import randInt from '@/utils/randInt';
import { Level } from '..';

const mult1: Level = {
    title: '九九乘法',
    description: '1位數*1位數',
    maxQuestionCountThreshold: [0.5, 0.75, 1],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>九九乘法和一位數加法很像，都是要多練習的類型。</h2>],
    questionGen() {
        const a = randInt(1, 9);
        const b = randInt(0, 9);
        return [`${a} * ${b}`, [a * b], Math.random()];
    },
    req: ['add2'],
};

export default mult1;
