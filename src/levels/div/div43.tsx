import randInt from '@/utils/randInt';
import { Level } from '..';
import DivisionForm from '@/components/DivisionForm';

const div43: Level = {
    title: '除以三位數(1)',
    description: '4位數/3位數',
    maxQuestionCountThreshold: [0.015, 0.02, 0.025],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>沒什麼好教學的了，除就對了。</h2>],
    questionGen() {
        const a = randInt(1000, 9999);
        const b = randInt(100, 999);
        return [`${a} / ${b}`, [Math.floor(a / b), a % b], Math.random()];
    },
    req: ['div42', 'sub33'],
    time: 200,
    difficulty: 0,
    inputBox: DivisionForm,
};

export default div43;
