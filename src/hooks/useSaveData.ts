import { LevelDataContext, ReducerContext } from '@/components/StateReducerProvider';
import { useContext } from 'react';

export default function useSaveData() {
    return [useContext(LevelDataContext), useContext(ReducerContext)] as const;
}
