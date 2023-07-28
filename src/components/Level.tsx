import levelIndex, { LevelID } from '@/levels';
import { useState } from 'react';
import LevelMenu from './LevelMenu';
import Tutorial from './Tutorial';
import Game from './Game';
import useLevelData from '@/hooks/useLevelData';

/* eslint-disable @typescript-eslint/no-shadow */

enum LevelState {
    Menu,
    Tutorial,
    Game,
}

/* eslint-enable @typescript-eslint/no-shadow */

export default function Level({ id }: {
    id: LevelID;
}) {
    const { played } = useLevelData(id);
    // eslint-disable-next-line prefer-const
    const [state, setState] = useState(played ? LevelState.Menu : LevelState.Tutorial);
    const level = levelIndex[id];
    switch (state) {
        case LevelState.Menu: return <LevelMenu setter={setState} />;
        case LevelState.Tutorial: return <Tutorial back={() => setState(LevelState.Menu)} components={level.tutorial} />;
        case LevelState.Game: return <Game back={() => setState(LevelState.Menu)} levelId={id} />;
    }
}
