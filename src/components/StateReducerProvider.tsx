import { LevelData } from '@/utils/backend';
import { Dispatch, createContext } from 'react';
import { useImmerReducer } from 'use-immer';

export const LevelDataContext = createContext<LevelData[]>([]);

export type DispatchAction = {
    levelId: string;
    updateKey: 'maxAccuracy' | 'maxQuestionCount';
    value: number;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const ReducerContext = createContext<Dispatch<DispatchAction>>(null!);

export default function StateReducerProvider({ initialState, children }: {
    initialState: LevelData[];
    children: React.ReactNode;
}) {
    const [state, reducer] = useImmerReducer((draft, action: DispatchAction) => {
        const target = draft.find((v) => v.levelId === action.levelId);
        if (!target) {
            const newItem = {
                levelId: action.levelId,
                maxAccuracy: 0,
                maxQuestionCount: 0,
            };
            newItem[action.updateKey] = action.value;
            draft.push(newItem);
        } else {
            target[action.updateKey] = action.value;
        }
    }, initialState);
    return (
        <LevelDataContext.Provider value={state}>
            <ReducerContext.Provider value={reducer}>
                {children}
            </ReducerContext.Provider>
        </LevelDataContext.Provider>
    );
}
