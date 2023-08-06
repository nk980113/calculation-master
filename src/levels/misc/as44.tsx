import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const as44: Level = {
    title: '四位數加減',
    description: '4位數+/-4位數',
    maxQuestionCountThreshold: [0.05, 0.075, 0.1],
    /* eslint-disable react/jsx-key */
    tutorial: [<h2>四位數加減也沒什麼好說的了，把之前學到的技巧套用上去就好了。</h2>],
    questionGen() {
        if (randInt(0, 1)) {
            const a = randInt(1000, 9999);
            const b = randInt(1000, 9999);
            return [`${a} + ${b}`, [a + b], Math.random()];
        }
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const [a, b] = [randInt(1000, 9999), randInt(1000, 9999)].sort((a, b) => b - a);
        return [`${a} - ${b}`, [a - b], Math.random()];
    },
    req: ['add33', 'sub33'],
    time: 200,
    difficulty: 1,
    inputBox: SingleInputForm,
};

export default as44;
