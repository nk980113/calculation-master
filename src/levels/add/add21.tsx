import randInt from '@/utils/randInt';
import type { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const add21: Level = {
    title: '加上一位數',
    description: '2~3位數+1位數',
    maxQuestionCountThreshold: [0.2, 0.3, 0.4],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>這邊是心算加法的一個重要且基礎的步驟。為什麼要心算呢？心算可以節省紙的空間，讓你有更多空間寫下重要的算式。</h2>, <h2>用327+4來舉例，能放一張紙在旁邊一起算更好。</h2>, <h2>首先看個位相加(7+4)，寫下1，剩下變成32+1。</h2>, <h2>接著用同樣的步驟處理32+1，2+1沒有進位，因此3不變，結果是33。</h2>, <h2>和剛剛寫下的1結合，就是331了。</h2>, <h2>知道這個技巧後，就可以來實戰了。</h2>],
    questionGen() {
        const a = randInt(10, 999);
        const b = randInt(0, 9);
        return [`${a} + ${b}`, [a + b], Math.random()];
    },
    req: ['add2'],
    time: 90,
    difficulty: 0,
    inputBox: SingleInputForm,
};

export default add21;
