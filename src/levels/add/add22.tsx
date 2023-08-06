import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const add22: Level = {
    title: '加上兩位數',
    description: '2~3位數+2位數',
    maxQuestionCountThreshold: [0.15, 0.2, 0.25],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>要看加上一位數最簡單的應用就是加上兩位數。</h2>, <h2>加上兩位數，基本上就是加上一位數用兩次。</h2>, <h2>以688+56舉例，我習慣從高位加到低位，所以先加十位以上的68+5，得到73，和第一個數的個位結合得到738。</h2>, <h2>738加上第二個數剩下的6，得到744。</h2>],
    questionGen() {
        const a = randInt(10, 999);
        const b = randInt(10, 99);
        return [`${a} + ${b}`, [a + b], Math.random()];
    },
    req: ['add21'],
    time: 100,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default add22;
