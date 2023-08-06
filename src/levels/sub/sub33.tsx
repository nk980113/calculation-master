import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const sub33: Level = {
    title: '多位數減法',
    description: '3~4位數-3~4位數',
    maxQuestionCountThreshold: [0.05, 0.075, 0.1],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>一樣，看過減掉二位數之後，減掉三位數的示範就自己體會吧。</h2>, (
        <h2>
            示範：9276-832<br />
            先減百位：92-8=84<br />
            減完減十位：847-3=844<br />
            最後減個位：8446-2=8444<br />
            答案：8444<br />
        </h2>
    )],
    questionGen() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const [a, b] = [randInt(100, 9999), randInt(100, 9999)].sort((a, b) => b - a);
        return [`${a}  -  ${b}`, [a - b], Math.random()];
    },
    req: ['sub22'],
    time: 200,
    difficulty: 1,
    inputBox: SingleInputForm,
};

export default sub33;
