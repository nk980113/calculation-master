import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const sub22: Level = {
    title: '減掉兩位數',
    description: '2~3位數-2位數',
    maxQuestionCountThreshold: [0.1, 0.15, 0.2],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>和加上兩位數差不多，減掉兩位數就是減掉一位數用兩次。</h2>, <h2>我一樣習慣從高位減到低位，這樣可以使數字比較小，運氣好的話還能消掉一位數。</h2>, <h2>以862-97舉例，先計算86-9得到77，和第一個數的個位結合得到772。</h2>, <h2>接著計算772-7，得到765，因此答案就是765。</h2>],
    /* eslint-enable react/jsx-key */
    questionGen() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const [a, b] = [randInt(10, 999), randInt(10, 99)].sort((a, b) => b - a);
        return [`${a}  -  ${b}`, [a - b], Math.random()];
    },
    req: ['sub21'],
    time: 100,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default sub22;
