'use client';

import useSetLevel from '@/hooks/useSetLevel';

export default function BackButton() {
    const { menu } = useSetLevel();
    return <button className='back-button' onClick={menu}>返回關卡選擇</button>;
}
