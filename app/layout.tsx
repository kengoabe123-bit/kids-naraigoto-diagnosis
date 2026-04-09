import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NaraiGo - お子さまにぴったりの習い事診断',
  description: '7つの質問に答えるだけで、お子さまにぴったりの習い事が見つかる無料診断テスト。プログラミング、ピアノ、水泳、英会話など人気の習い事からAIがマッチング。',
  verification: {
    google: 'KvzKu39UZd83_x3idpa06ZQbeXzlo5J-Mn1ACXskPf0',
  },
  openGraph: {
    title: 'NaraiGo - お子さまにぴったりの習い事診断',
    description: '7つの質問に答えるだけで、お子さまにぴったりの習い事が見つかる無料診断テスト。プログラミング、ピアノ、水泳、英会話など人気の習い事からAIがマッチング。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
