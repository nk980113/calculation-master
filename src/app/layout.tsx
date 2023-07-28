import '@/css/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Calculation Master',
    description: 'No description provided.',
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang='zh-TW'>
            <body>{children}</body>
        </html>
    );
}
