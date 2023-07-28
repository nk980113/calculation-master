'use client';

import { useState } from 'react';
import Menu from './Menu';
import { SetLevelContext } from '@/hooks/useSetLevel';
import levelIndex, { LevelID } from '@/levels';
import Level from './Level';
import useAutoSave from '@/hooks/useAutoSave';
import BackButton from './BackButton';

export default function App() {
    useAutoSave();
    const [level, setLevel] = useState<LevelID | ''>('');
    return (
        <SetLevelContext.Provider value={setLevel}>
            <h1>計算大師{level ? ` - ${levelIndex[level].title}` : ''}</h1>
            {level === '' ? <Menu /> : (
                <>
                    <Level id={level} />
                    <BackButton />
                </>
            )}
        </SetLevelContext.Provider>
    );
}
