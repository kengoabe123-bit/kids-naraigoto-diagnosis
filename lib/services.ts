export interface Service {
    id: string;
    slug: string;
    name: string;
    nameEn: string;
    tagline: string;
    description: string;
    category: string;
    target: string;
    targetAge: string[];
    features: string[];
    pros: string[];
    cons: string[];
    recommended: string[];
    affiliateUrl: string;
    ctaText: string;
    color: string;
}

export const services: Service[] = [
    {
        id: 'programming',
        slug: 'programming',
        name: 'Tech Kids School',
        nameEn: 'Tech Kids School',
        tagline: 'サイバーエージェントが運営する、本格的な小学生向けプログラミングスクール',
        description: 'サイバーエージェントが運営する小学生向けプログラミングスクール。ゲームやアプリ開発を通じてプログラミング的思考を身につけ、将来のIT人材の基礎を育む。',
        category: 'プログラミング',
        target: 'ゲームやパソコンが好き・論理的思考力を伸ばしたいお子さま',
        targetAge: ['小学生', '中学生'],
        features: [
            'サイバーエージェントが運営する本格スクール',
            'ゲーム開発を通じて楽しく学べる',
            '少人数制で個別サポート充実',
            'プログラミング検定にも対応',
        ],
        pros: [
            '論理的思考力・問題解決力が身につく',
            '将来のIT人材としての基礎が作れる',
            '自分の作品を作る達成感がある',
        ],
        cons: [
            'パソコン操作に慣れが必要',
            '月謝がやや高め',
        ],
        recommended: ['ゲームが好き', '論理的思考を伸ばしたい', 'ものづくりが好き'],
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZH49+3VX7II+4380+BX3J6',
        ctaText: '詳細を見る',
        color: '#FF6B35',
    },
    {
        id: 'english',
        slug: 'english',
        name: 'GLOBAL CROWN（グローバルクラウン）',
        nameEn: 'GLOBAL CROWN',
        tagline: 'バイリンガル講師だから安心。子ども専門のオンライン英会話',
        description: 'バイリンガル講師が日本語でサポートしながら英語を教えるオンライン英会話。初めての英語でも安心して始められ、自宅からマンツーマンレッスンが受けられる。',
        category: 'オンライン英会話',
        target: '英語を楽しく学ばせたい・自宅で学ばせたいお子さま',
        targetAge: ['3歳〜', '幼児', '小学生'],
        features: [
            'バイリンガル講師で日本語サポートOK',
            '自宅からオンラインでマンツーマンレッスン',
            '子ども専門だから初心者でも安心',
            'AIを活用した自習教材も充実',
        ],
        pros: [
            '送迎不要で親の負担が少ない',
            '日本語が通じるから英語初心者でも安心',
            'マンツーマンで効率的に上達',
        ],
        cons: [
            '対面でのコミュニケーションは少ない',
            '自宅学習の環境を整える必要がある',
        ],
        recommended: ['英語に興味がある', '自宅で学ばせたい', '初めての英語学習'],
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZH49+3C9WJU+45WY+5ZEMQ',
        ctaText: '詳細を見る',
        color: '#4CAF50',
    },
    {
        id: 'english-online',
        slug: 'english-online',
        name: 'NovaKid（ノバキッド）',
        nameEn: 'NovaKid',
        tagline: 'アメリカ発。ネイティブ講師と本格的なオンライン英会話',
        description: 'アメリカ発の子ども向けオンライン英会話。ネイティブ講師によるゲーム感覚のレッスンで、楽しみながら本場の英語が身につく。世界49カ国で利用される実績。',
        category: 'オンライン英会話',
        target: 'ネイティブの英語に触れさせたい・本格的な英語力をつけたいお子さま',
        targetAge: ['4歳〜', '幼児', '小学生', '中学生'],
        features: [
            'アメリカ発のグローバルプログラム',
            'ネイティブ講師によるオールイングリッシュ',
            'ゲーム感覚で楽しく学べるカリキュラム',
            '世界49カ国で利用される実績',
        ],
        pros: [
            'ネイティブの発音・表現が自然に身につく',
            '自宅から気軽にレッスンを受けられる',
            'ゲーム形式で子どもが飽きにくい',
        ],
        cons: [
            'オールイングリッシュなので最初は戸惑うことも',
            'ネイティブ講師のため料金は少し高め',
        ],
        recommended: ['本格的な英語力をつけたい', 'ネイティブの発音に触れさせたい', 'グローバルな教育を重視'],
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZH49+2Z6D8Q+4KYW+61RIA',
        ctaText: '詳細を見る',
        color: '#1976D2',
    },
    {
        id: 'music-dance',
        slug: 'music-dance',
        name: 'EYS-Kids（イーワイエスキッズ）',
        nameEn: 'EYS-Kids',
        tagline: '楽器プレゼント！音楽・バレエ・ダンスが学べるキッズスクール',
        description: '楽器や2ヶ月分のお月謝が無料になるキャンペーンが魅力のキッズスクール。ピアノ、バイオリン、ダンス、バレエなど多彩なコースから選べ、初心者でも始めやすい。',
        category: '音楽・ダンス',
        target: '音楽やダンスが好き・表現力を伸ばしたいお子さま',
        targetAge: ['幼児', '小学生', '中学生'],
        features: [
            '楽器プレゼントや月謝無料キャンペーンあり',
            'ピアノ・バイオリン・ダンス・バレエなど多彩なコース',
            'マンツーマンレッスンで丁寧な指導',
            '発表会でステージ経験ができる',
        ],
        pros: [
            '楽器プレゼントで初期費用を抑えられる',
            '感性・表現力・集中力が育つ',
            '多彩なジャンルから合うものを見つけられる',
        ],
        cons: [
            '自宅での練習が必要',
            '教室が都市部に集中',
        ],
        recommended: ['音楽が好き', 'ダンスに興味がある', '表現力を伸ばしたい'],
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZH49+2ZRSUI+3H64+15OK2A',
        ctaText: '詳細を見る',
        color: '#9C27B0',
    },
    {
        id: 'steam',
        slug: 'steam',
        name: 'ワンダーボックス',
        nameEn: 'WonderBox',
        tagline: '遊びながら思考力と創造力を育てるSTEAM通信教材',
        description: 'デジタルとアナログを融合したSTEAM教育の通信教材。プログラミング・サイエンス・アートなど多彩なコンテンツで、子どもの「知的好奇心」を刺激しながら思考力を育む。',
        category: 'STEAM教育',
        target: '好奇心旺盛・ものづくりが好き・考えることが好きなお子さま',
        targetAge: ['4歳〜', '幼児', '小学生'],
        features: [
            'デジタル×アナログのハイブリッド教材',
            'プログラミング・サイエンス・アートをカバー',
            '毎月届くキットで楽しく実験・工作',
            '自宅で好きな時間に取り組める',
        ],
        pros: [
            '遊び感覚で思考力・創造力が育つ',
            '送迎不要で自宅で完結',
            '教育のプロが設計した良質な教材',
        ],
        cons: [
            '対面の指導はない',
            '子どもによっては一人で取り組むのが難しい場合も',
        ],
        recommended: ['好奇心旺盛', 'ものづくりが好き', '自宅で学ばせたい'],
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZH49+383VBE+4GM8+61Z82',
        ctaText: '詳細を見る',
        color: '#FF9800',
    },
    {
        id: 'learning',
        slug: 'learning',
        name: '読売KODOMO新聞',
        nameEn: 'Yomiuri KODOMO Newspaper',
        tagline: '楽しく読める、学力アップにつながる子ども新聞',
        description: '小学生向けのわかりやすい新聞。時事ニュース・科学・文化など幅広いテーマを、イラストや写真を交えて楽しく解説。読解力・語彙力・社会への関心を自然に育む。',
        category: '学習・読解',
        target: '読書習慣をつけたい・読解力を伸ばしたいお子さま',
        targetAge: ['小学生'],
        features: [
            '週1回届く読みやすい子ども新聞',
            'ニュース・科学・文化を幅広くカバー',
            '中学受験対策にも効果的',
            '月額550円とリーズナブル',
        ],
        pros: [
            '読解力・語彙力が自然に向上',
            '時事問題に強くなり受験にも有利',
            '月額550円で始めやすい',
        ],
        cons: [
            '能動的な学習ではないため本人の関心が必要',
            '紙媒体なのでかさばる',
        ],
        recommended: ['読解力を伸ばしたい', '受験対策をしたい', '社会に関心を持たせたい'],
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZH49+39AQIY+4M9A+626XU',
        ctaText: '詳細を見る',
        color: '#E53935',
    },
    {
        id: 'chikuiku',
        slug: 'chikuiku',
        name: 'Cha Cha Cha（知育玩具の定期便）',
        nameEn: 'Cha Cha Cha',
        tagline: '年齢に合った知育玩具が毎月届く、プロ監修のサブスク',
        description: '保育士や教育の専門家が監修した知育玩具が、お子さまの月齢・年齢に合わせて定期的に届くサブスクリプションサービス。遊びながら自然に学べる環境を提供。',
        category: '知育・幼児教育',
        target: '知育に関心がある・おもちゃ選びに迷っている保護者の方',
        targetAge: ['0歳〜', '1歳〜', '幼児'],
        features: [
            '専門家監修の厳選知育玩具',
            '月齢・年齢に合わせたパーソナライズ配送',
            'おもちゃの交換制度あり',
            '初月980円のお試しプラン',
        ],
        pros: [
            'プロが選んだ良質な知育玩具で迷わない',
            '月齢に合った刺激で発達をサポート',
            'おもちゃが増えすぎず衛生的',
        ],
        cons: [
            '特定の玩具を選べない場合がある',
            '返却の手間がある',
        ],
        recommended: ['知育に関心がある', '0〜3歳のお子さま', 'おもちゃ選びに迷っている'],
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZH49+21U3D6+4OIO+5YRHE',
        ctaText: '詳細を見る',
        color: '#26A69A',
    },
    {
        id: 'be-studio',
        slug: 'be-studio',
        name: 'ベネッセ ビースタジオ',
        nameEn: 'BE studio',
        tagline: 'ベネッセのこども英語教室で本物の英語力を',
        description: 'ベネッセが運営するこども英語教室。年齢や発達段階に合わせたカリキュラムで、楽しみながら本物の英語力を身につけられる。全国に教室があり通いやすい。',
        category: '英語教室',
        target: '英語を楽しく学ばせたいお子さま',
        targetAge: ['幼児', '小学生', '中学生'],
        features: ['ベネッセのノウハウを凝縮したカリキュラム', '年齢別の最適なレッスン設計', '全国展開で通いやすい', '日本人講師と外国人講師から選べる'],
        pros: ['大手ベネッセブランドの安心感', '全国に教室があり通いやすい', '年齢に合ったカリキュラム'],
        cons: ['教室によって講師の質に差がある場合も', '他の英語教室より月謝がやや高め'],
        recommended: ['英語教育を始めたいご家庭', 'ベネッセブランドが好きな方', '通いやすい教室を探している方'],
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AZH49+3VBRWQ+5JRY+5YJRM',
        ctaText: '詳細を見る',
        color: '#FF6B6B',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
