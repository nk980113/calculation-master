import randInt from '@/utils/randInt';
import { Level } from '..';
import DivisionForm from '@/components/DivisionForm';

const div52: Level = {
    title: '除以二位數(3)',
    description: '5位數/2位數',
    maxQuestionCountThreshold: [0.015, 0.02, 0.025],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>沒什麼好教學的了，除就對了。</h2>],
    questionGen() {
        const a = randInt(10000, 99999);
        const b = randInt(10, 99);
        return [`${a} / ${b}`, [Math.floor(a / b), a % b], Math.random()];
    },
    req: ['div42'],
    time: 240,
    difficulty: 1,
    inputBox: DivisionForm,
};

export default div52;
