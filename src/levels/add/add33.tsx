import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const add33: Level = {
    title: '多位數加法',
    description: '3~4位數+3~4位數',
    maxQuestionCountThreshold: [0.05, 0.075, 0.1],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>看過加上二位數之後，加上三位數的示範就自己體會吧。等下的題目也有可能出現加上四位數，記得要把位數比較多的放前面。</h2>, (
        <h2>
            示範：679+7682<br />
            高位放前面：7682+679<br />
            先加百位：76+6=82<br />
            加完加十位：828+7=835<br />
            最後加個位：8352+9=8361<br />
            答案：8361<br />
        </h2>
    )],
    questionGen() {
        const a = randInt(100, 9999);
        const b = randInt(100, 9999);
        return [`${a} + ${b}`, [a + b], Math.random()];
    },
    req: ['add22'],
    time: 200,
    difficulty: 1,
    inputBox: SingleInputForm,
};

export default add33;
