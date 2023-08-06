import randInt from '@/utils/randInt';
import { Level } from '..';
import DivisionForm from '@/components/DivisionForm';

const div53: Level = {
    title: '除以三位數(2)',
    description: '5位數/3位數',
    maxQuestionCountThreshold: [0.003, 0.006, 0.01],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>歡迎來到除法最終挑戰。</h2>, <h2>一樣，沒什麼好教學的了，除就對了。</h2>],
    questionGen() {
        const a = randInt(10000, 99999);
        const b = randInt(100, 999);
        return [`${a} / ${b}`, [Math.floor(a / b), a % b], Math.random()];
    },
    req: ['div43', 'div52'],
    time: 300,
    difficulty: 2,
    inputBox: DivisionForm,
};

export default div53;
