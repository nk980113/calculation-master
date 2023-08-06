import randInt from '@/utils/randInt';
import { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const mult33: Level = {
    title: '乘法挑戰(2)',
    description: '3位數*3位數',
    maxQuestionCountThreshold: [0.015, 0.02, 0.025],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>沒什麼好教學的了，直式算吧。</h2>],
    questionGen() {
        const a = randInt(100, 999);
        const b = randInt(100, 999);
        return [`${a} * ${b}`, [a * b], Math.random()];
    },
    req: ['mult22'],
    time: 200,
    difficulty: 2,
    inputBox: SingleInputForm,
};

export default mult33;
