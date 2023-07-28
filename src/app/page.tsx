import AppLoader from '@/components/AppLoader';
import { Suspense } from 'react';

export default function Home() {
    return <>
        <Suspense fallback={'Loading...'}>
            <AppLoader />
        </Suspense>
    </>;
}
