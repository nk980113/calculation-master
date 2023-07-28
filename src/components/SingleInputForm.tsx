'use client';

import { useEffect, useRef, useState } from 'react';

export default function SingleInputForm({ confirm }: {
    confirm(ans: number[]): void;
}) {
    const ref = useRef<HTMLInputElement>(null);
    const [content, setContent] = useState('');
    useEffect(() => {
        ref.current?.focus();
    }, []);
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const num = Number(content);
            if (!isNaN(num) && content) {
                confirm([num]);
            }
        }}>
            <input
                type='text'
                className='ans'
                value={content}
                onChange={(event) => setContent(event.target.value)}
                ref={ref}
            />
        </form>
    );
}
