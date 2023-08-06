import randInt from '@/utils/randInt';
import { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const mult39: Level = {
    title: '尾數為9的乘法',
    description: '3位數*...99',
    maxQuestionCountThreshold: [0.02, 0.025, 0.03],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>尾數為9的乘法可以用分配律簡化。</h2>, (
        <h2>
            示範：521*499<br />
            分配律：521*(500-1)=521*500-521*1<br />
            乘法：260500-521<br />
            答案：259979<br />
        </h2>
    )],
    questionGen() {
        const a = randInt(100, 999);
        const b = randInt(1, 10) * 100 - 1;
        return [`${a} * ${b}`, [a * b], Math.random()];
    },
    req: ['mult33', 'sub33'],
    time: 150,
    difficulty: 1,
    inputBox: SingleInputForm,
};

export default mult39;
