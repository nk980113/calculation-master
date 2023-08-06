import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const add1: Level = {
    title: '基礎加法(1)',
    description: '1位數+1位數(不進位)',
    maxQuestionCountThreshold: [0.5, 0.7, 0.9],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>一位數加法是運算的基礎。</h2>, <h2>最快熟練的方法，就是多練。</h2>, <h2>讓我們先熟練一小部分吧！</h2>],
    questionGen() {
        const a = randInt(0, 9);
        const b = randInt(0, 9 - a);
        return [`${a} + ${b}`, [a + b], Math.random()];
    },
    req: [],
    time: 60,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default add1;
