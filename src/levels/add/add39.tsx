import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const add39: Level = {
    title: '尾數為9的加法',
    description: '3~4位數+...99',
    maxQuestionCountThreshold: [0.1, 0.125, 0.15],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>加上尾數為99的數其實很簡單，可以從被加數減掉1拿來補加數。這個技巧對倒數第二位是9的數也很好用。</h2>, (
        <h2>
            示範：8864+699<br />
            補1：(8864-1)+(699+1)=8863+700<br />
            加上一位數：88+7=95<br />
            答案：9563<br />
        </h2>
    )],
    questionGen() {
        const a = randInt(100, 9999);
        const b = randInt(1, 10) * 100 - 1;
        return [`${a} + ${b}`, [a + b], Math.random()];
    },
    req: ['add33', 'sub21'],
    time: 120,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default add39;
