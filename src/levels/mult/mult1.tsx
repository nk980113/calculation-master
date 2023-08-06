import randInt from '@/utils/randInt';
import { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const mult1: Level = {
    title: '九九乘法',
    description: '1位數*1位數',
    maxQuestionCountThreshold: [0.3, 0.45, 0.6],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>九九乘法和一位數加法很像，都是要多練習的類型。</h2>],
    questionGen() {
        const a = randInt(1, 9);
        const b = randInt(0, 9);
        return [`${a} * ${b}`, [a * b], Math.random()];
    },
    req: ['add2'],
    time: 60,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default mult1;
