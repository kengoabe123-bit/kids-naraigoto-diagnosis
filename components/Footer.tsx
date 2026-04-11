import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">NaraiGo</div>
        <p className="footer-text">
          お子さまの可能性を、一緒に見つけよう。
        </p>
        <nav className="footer-nav">
          <Link href="/about">運営者情報</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/contact">お問い合わせ</Link>
          <Link href="/services">サービス一覧</Link>
        </nav>
        <p className="footer-disclaimer">
          ※ 本サイトはアフィリエイトプログラムに参加しています
          <br />※ 診断結果はあくまで参考情報です。最終的なご判断は保護者の皆さまにお任せいたします。
        </p>
      </div>
    </footer>
  );
}
