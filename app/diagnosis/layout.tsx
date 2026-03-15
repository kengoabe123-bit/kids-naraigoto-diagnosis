import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'NaraiGo - 習い事診断テスト',
    description: '7つの質問に答えるだけで、お子さまにぴったりの習い事が見つかる無料診断テスト。',
    openGraph: {
        title: 'NaraiGo - 習い事診断テスト',
        description: '7つの質問に答えるだけで、お子さまにぴったりの習い事が見つかる無料診断テスト。',
        type: 'website',
        locale: 'ja_JP',
    },
};

export default function DiagnosisLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
