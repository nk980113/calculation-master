import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const sub39: Level = {
    title: '尾數為9的減法',
    description: '3~4位數-...99',
    maxQuestionCountThreshold: [0.1, 0.125, 0.15],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>減掉尾數為99的數也很簡單，可以把減數和被減數都加一。這個技巧對倒數第二位是9的數一樣很好用。</h2>, (
        <h2>
            示範：8864-699<br />
            補1：(8864+1)-(699+1)=8865-700<br />
            減掉一位數：88-7=81<br />
            答案：8165<br />
        </h2>
    )],
    questionGen() {
        const a = randInt(100, 9999);
        const b = randInt(1, Math.min(Math.floor((a + 1) / 100), 10)) * 100 - 1;
        return [`${a}  -  ${b}`, [a - b], Math.random()];
    },
    req: ['sub33', 'add21'],
    time: 120,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default sub39;
