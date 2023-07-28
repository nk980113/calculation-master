import { LevelID } from '@/levels';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const SetLevelContext = createContext<Dispatch<SetStateAction<LevelID | ''>>>(null!);

export default function useSetLevel() {
    const setLevel = useContext(SetLevelContext);
    return {
        setLevel(level: LevelID) {
            setLevel(level);
        },
        menu() {
            setLevel('');
        },
    };
}
