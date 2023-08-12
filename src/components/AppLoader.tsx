'use client';

import { useEffect, useState, use } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { BackendLevelData, LevelData, fromBackend } from '@/utils/backend';
import StateReducerProvider from './StateReducerProvider';
import App from './App';

export default function AppLoader() {
    const [levelDataPromise, setLevelDataPromise] = useState<Promise<LevelData[]> | undefined>();
    // eslint-disable-next-line prefer-const
    let [levelData, setResolvedLevelData] = useState<LevelData[] | undefined>();
    useEffect(() => {
        setLevelDataPromise(invoke<BackendLevelData[]>('try_read').then(fromBackend).catch((r) => {
            throw r;
        }));
    }, []);
    if (!levelDataPromise) return null;
    if (!levelData) {
        levelData = use(levelDataPromise);
        setResolvedLevelData(levelData);
    }
    return (
        <StateReducerProvider initialState={levelData}>
            <App />
        </StateReducerProvider>
    );
}
