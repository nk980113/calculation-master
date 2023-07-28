'use client';

import { useState } from 'react';

export default function Tutorial({ back, components }: {
    back(): void;
    components: React.ReactNode[];
}) {
    const [index, setIndex] = useState(0);
    return (
        <>
            {components[index]}
            <div>
                {index + 1}/{components.length}
                {index > 0 && <button className='level-button' onClick={() => setIndex((v) => v - 1)}>上一頁</button>}
                {index + 1 < components.length ? (
                    <button className='level-button' onClick={() => setIndex((v) => v + 1)}>下一頁</button>
                ) : (
                    <button className='level-button' onClick={back}>結束教學</button>
                )}
            </div>
        </>
    );
}
