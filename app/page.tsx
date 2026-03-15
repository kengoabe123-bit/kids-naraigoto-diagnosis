import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>お子さまの可能性を、<br />一緒に見つけよう。</h1>
        <p>7つの質問に答えるだけで、お子さまにぴったりの習い事が見つかります。</p>
        <div className="hero-features">
          <span className="hero-feature">約60秒で完了</span>
          <span className="hero-feature">7問の簡単な質問</span>
          <span className="hero-feature">個人情報不要</span>
        </div>
        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">
          無料で診断する
        </Link>
      </div>
    </section>
  );
}
