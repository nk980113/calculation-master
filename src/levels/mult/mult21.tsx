import randInt from '@/utils/randInt';
import { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const mult21: Level = {
    title: '乘以一位數',
    description: '2~3位數*1位數',
    maxQuestionCountThreshold: [0.09, 0.11, 0.13],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>乘以一位數也是乘法中一個重要且基礎的步驟。</h2>, <h2>其實乘以一位數沒什麼好講的，就是九九乘法和加上一位數的結合而已。</h2>],
    questionGen() {
        const a = randInt(10, 999);
        const b = randInt(1, 9);
        return [`${a} * ${b}`, [a * b], Math.random()];
    },
    req: ['mult1', 'add21'],
    time: 80,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default mult21;
