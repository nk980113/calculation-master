import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const sub2: Level = {
    title: '基礎減法(2)',
    description: '十幾-1位數',
    maxQuestionCountThreshold: [0.35, 0.45, 0.55],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>其實在一位數減法中，要判斷有沒有借位很簡單，只需要看減數(後面)有沒有大於被減數(前面)的個位數，如果有就要借位了。</h2>, <h2>這邊出的題目，被減數都是十幾，如果不需要借位，就把個位相減的結果加10就好了。</h2>, <h2>只要完成這部分，你就會精通一位數的減法了！</h2>],
    /* eslint-enable react/jsx-key */
    questionGen() {
        const a = randInt(10, 19);
        const b = randInt(0, 9);
        return [`${a}  -  ${b}`, [a - b], Math.random()];
    },
    req: ['sub1'],
    time: 80,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default sub2;
