import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const add2: Level = {
    title: '基礎加法(2)',
    description: '1位數+1位數',
    maxQuestionCountThreshold: [0.4, 0.6, 0.8],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>你剛剛應該已經熟練了不進位的一位數加法了。</h2>, <h2>接下來，就讓我們加上有進位的加法一起練習吧！</h2>],
    questionGen() {
        const a = randInt(0, 9);
        const b = randInt(0, 9);
        return [`${a} + ${b}`, [a + b], Math.random()];
    },
    req: ['add1'],
    time: 60,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default add2;
