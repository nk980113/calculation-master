import randInt from '@/utils/randInt';
import { Level } from '..';
import DivisionForm from '@/components/DivisionForm';

const div32: Level = {
    title: '除以二位數(1)',
    description: '3位數/2位數',
    maxQuestionCountThreshold: [0.03, 0.045, 0.06],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>除數為二位數的除法最重要的就是估商。估商的技巧很多，最好是可以自己在練習過程中慢慢體會。</h2>],
    questionGen() {
        const a = randInt(100, 999);
        const b = randInt(10, 99);
        return [`${a} / ${b}`, [Math.floor(a / b), a % b], Math.random()];
    },
    req: ['div1', 'mult21', 'sub22'],
    time: 150,
    difficulty: 0,
    inputBox: DivisionForm,
};

export default div32;
