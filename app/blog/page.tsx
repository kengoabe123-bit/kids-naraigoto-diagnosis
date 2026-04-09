import type { Metadata } from 'next';
import { getAllArticles } from '@/content/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { BlogCTA } from '@/components/BlogCTA';

export const metadata: Metadata = {
  title: 'お役立ち記事 | NaraiGo 子供の習い事診断',
  description: 'プログラミング・水泳・ピアノ・英会話など、子供の習い事選びに役立つ記事をまとめました。',
  openGraph: {
    title: 'お役立ち記事 | NaraiGo 子供の習い事診断',
    description: '子供の習い事選びに役立つ記事をまとめました。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function BlogPage() {
  const articles = getAllArticles();
  return (
    <main className="blog-page">
      <section className="blog-hero">
        <h1>子供の習い事お役立ち記事</h1>
        <p>プログラミング・水泳・ピアノ・英会話など、習い事の選び方と費用を徹底解説します。</p>
      </section>
      <section className="blog-list">
        {articles.map((article) => (
          <ArticleCard key={article.slug} slug={article.slug} title={article.title} description={article.description} publishedAt={article.publishedAt} category={article.category} />
        ))}
      </section>
      <BlogCTA />
    </main>
  );
}
