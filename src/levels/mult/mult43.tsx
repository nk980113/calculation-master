import randInt from '@/utils/randInt';
import { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const mult43: Level = {
    title: '乘法挑戰(3)',
    description: '4位數*3位數',
    maxQuestionCountThreshold: [0.01, 0.013, 0.015],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>恭喜你來到最終的乘法挑戰關卡！</h2>, <h2>一樣，沒什麼好教學的，直式算吧。</h2>],
    questionGen() {
        const a = randInt(1000, 9999);
        const b = randInt(100, 999);
        return [`${a} * ${b}`, [a * b], Math.random()];
    },
    req: ['mult42', 'mult33'],
    time: 300,
    difficulty: 2,
    inputBox: SingleInputForm,
};

export default mult43;
