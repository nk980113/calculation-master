import randInt from '@/utils/randInt';
import { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const mult42: Level = {
    title: '乘法挑戰(1)',
    description: '4位數*2位數',
    maxQuestionCountThreshold: [0.02, 0.025, 0.03],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>沒什麼好教學的了，直式算吧。</h2>],
    questionGen() {
        const a = randInt(1000, 9999);
        const b = randInt(10, 99);
        return [`${a} * ${b}`, [a * b], Math.random()];
    },
    req: ['mult22'],
    time: 180,
    difficulty: 1,
    inputBox: SingleInputForm,
};

export default mult42;
