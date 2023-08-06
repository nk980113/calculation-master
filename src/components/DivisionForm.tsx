'use client';

import { useEffect, useRef, useState } from 'react';

export default function DivisionForm({ confirm }: {
    confirm(ans: number[]): void;
}) {
    const ref = useRef<HTMLInputElement>(null);
    const [quotientContent, setQuotientContent] = useState('');
    const [remContent, setRemContent] = useState('');
    useEffect(() => {
        ref.current?.focus();
    }, []);
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const quo = Number(quotientContent);
            if (!isNaN(quo) && quotientContent) {
                const rem = Number(remContent);
                if (!isNaN(rem)) {
                    confirm([quo, rem]);
                }
            }
        }}>
            <input
                type='text'
                className='ans'
                value={quotientContent}
                onChange={(event) => setQuotientContent(event.target.value)}
                ref={ref}
            />
            ...
            <input
                type='text'
                className='ans'
                value={remContent}
                onChange={(event) => setRemContent(event.target.value)}
            />
            <input type='submit' hidden />
        </form>
    );
}
