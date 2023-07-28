import { useEffect } from 'react';
import useSaveData from './useSaveData';
import { invoke } from '@tauri-apps/api/tauri';
import { toBackend } from '@/utils/backend';

export default function useAutoSave() {
    const [data] = useSaveData();
    useEffect(() => {
        invoke('write', { data: toBackend(data) });
    }, [data]);
}
