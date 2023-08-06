import randInt from '@/utils/randInt';
import { Level } from '..';
import DivisionForm from '@/components/DivisionForm';

const div42: Level = {
    title: '除以二位數(2)',
    description: '4位數/2位數',
    maxQuestionCountThreshold: [0.02, 0.025, 0.03],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>沒什麼好教學的了，除就對了。</h2>],
    questionGen() {
        const a = randInt(1000, 9999);
        const b = randInt(10, 99);
        return [`${a} / ${b}`, [Math.floor(a / b), a % b], Math.random()];
    },
    req: ['div32'],
    time: 180,
    difficulty: 0,
    inputBox: DivisionForm,
};

export default div42;
