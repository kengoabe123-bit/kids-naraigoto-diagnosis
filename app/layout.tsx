import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WebsiteSchema } from '@/components/StructuredData';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const SITE_NAME = 'NaraiGo';
const SITE_URL = 'https://naraigo.com';

export const metadata: Metadata = {
  title: 'NaraiGo - お子さまにぴったりの習い事診断',
  description: '7つの質問に答えるだけで、お子さまにぴったりの習い事が見つかる無料診断テスト。プログラミング、ピアノ、水泳、英会話など人気の習い事からAIがマッチング。',
  verification: {
    google: 'MIqh5zm0FnokIIIavzUIGMbvBVSdL-3x8VQhTys_fuQ',
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
        <WebsiteSchema
          siteName={SITE_NAME}
          siteUrl={SITE_URL}
          description="お子さまにぴったりの習い事が見つかる無料診断テスト"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
