import randInt from '@/utils/randInt';
import { Level } from '..';
import SingleInputForm from '@/components/SingleInputForm';

const mult22: Level = {
    title: '乘以二位數',
    description: '2~3位數*2位數',
    maxQuestionCountThreshold: [0.03, 0.04, 0.05],
    // eslint-disable-next-line react/jsx-key
    tutorial: [<h2>和加減法不一樣，心算乘以二位數的難度會比乘以一位數大非常多。</h2>, <h2>如果你前面都是用心算的，那辛苦你了，你可以開始拿紙跟筆算了。不是說這邊不能心算，而是要開始練習拿紙跟筆了，這關接下來的兩關基本上不拿紙跟筆很難算出來。</h2>, <h2>理論上，這邊還是可以心算，不過效率很差，不過如果要練習半心算的算法的話，下一頁有教學。</h2>, <h2>拿紙跟筆的做法就是把已經確定的位數寫下來，這樣要記的位數就會少很多。</h2>, <h2>這邊最快的做法還是直式計算，但如果不趕時間，可以試試前面半心算的做法。實際題目中，還是以乘以一位數和二位數乘以二位數居多，兩種方法都值得一試。</h2>],
    questionGen() {
        const a = randInt(10, 999);
        const b = randInt(10, 99);
        return [`${a} * ${b}`, [a * b], Math.random()];
    },
    req: ['mult21'],
    time: 120,
    difficulty: 1,
    inputBox: SingleInputForm,
};

export default mult22;
