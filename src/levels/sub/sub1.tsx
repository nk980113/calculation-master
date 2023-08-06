import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const sub1: Level = {
    title: '基礎減法(1)',
    description: '1位數或十幾-1位數',
    maxQuestionCountThreshold: [0.35, 0.55, 0.75],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>一位數減法和一位數加法非常類似。</h2>, <h2>我把基礎減法分成兩部分，這一部分可以透過數字檢查有沒有必要借位。這部分先打好基礎，下一部份要自己檢查了。</h2>],
    /* eslint-enable react/jsx-key */
    questionGen() {
        const a = randInt(0, 9);
        const b = randInt(0, 9);
        return [`${a + b}  -  ${a}`, [b], Math.random()];
    },
    req: ['add2'],
    time: 60,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default sub1;
