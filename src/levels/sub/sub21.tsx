import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const sub21: Level = {
    title: '減掉一位數',
    description: '2~3位數-1位數',
    maxQuestionCountThreshold: [0.25, 0.3, 0.35],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>和加上一位數差不多，減掉一位數也是心算減法一個重要且基礎的步驟。</h2>, <h2>以964-8舉例，個位(4-8)看起來需要借位，先計算14-8得到6，寫下6。</h2>, <h2>接著處理96-1，6-1不需要借位，算出來得到5，9照抄，最後答案是956。</h2>],
    /* eslint-enable react/jsx-key */
    questionGen() {
        const a = randInt(10, 999);
        const b = randInt(0, 9);
        return [`${a}  -  ${b}`, [a - b], Math.random()];
    },
    req: ['sub2'],
    time: 90,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default sub21;
