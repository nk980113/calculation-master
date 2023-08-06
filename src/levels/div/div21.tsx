import randInt from '@/utils/randInt';
import { Level } from '..';
import DivisionForm from '@/components/DivisionForm';

const div21: Level = {
    title: '除以一位數',
    description: '2~4位數/1位數',
    maxQuestionCountThreshold: [0.05, 0.075, 0.1],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>除以一位數應該沒什麼難的吧？</h2>],
    questionGen() {
        const a = randInt(10, 9999);
        const b = randInt(1, 9);
        return [`${a} / ${b}`, [Math.floor(a / b), a % b], Math.random()];
    },
    req: ['div1'],
    time: 100,
    difficulty: 0,
    inputBox: DivisionForm,
};

export default div21;
