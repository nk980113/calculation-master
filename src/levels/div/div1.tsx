import randInt from '@/utils/randInt';
import { Level } from '..';
import DivisionForm from '@/components/DivisionForm';

const div1: Level = {
    title: '基礎除法',
    description: '1~2位數/1位數',
    maxQuestionCountThreshold: [0.2, 0.3, 0.4],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>是時候檢核你乘法和減法的能力了。這部分的商都是一位數。</h2>, <h2>遊戲內作答小技巧：用tab可以跳到餘數欄，若餘數為0可不填。</h2>],
    questionGen() {
        const b = randInt(1, 9);
        const a = randInt(1, b * 10 - 1);
        return [`${a} / ${b}`, [Math.floor(a / b), a % b], Math.random()];
    },
    req: ['sub21', 'mult1'],
    time: 70,
    difficulty: 0,
    inputBox: DivisionForm,
};

export default div1;
