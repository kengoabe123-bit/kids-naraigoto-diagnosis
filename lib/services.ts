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
        id: 'swimming',
        slug: 'swimming',
        name: 'コナミスポーツクラブ（スイミング）',
        nameEn: 'Konami Sports Club',
        tagline: '体力と自信を育てる、日本No.1のスイミングスクール',
        description: '全国展開のコナミスポーツクラブのキッズスイミング。年齢・レベルに合わせた段階指導で、水に慣れるところから泳法習得まで一貫サポート。',
        category: 'スポーツ',
        target: '体力をつけたい・水が好き・集団行動を学びたいお子さま',
        targetAge: ['3歳〜', '幼児', '小学生', '中学生'],
        features: [
            '全国に展開する大手スポーツクラブ',
            '年齢・レベル別のきめ細かいクラス分け',
            '進級テストで成長を実感できる仕組み',
            '体験レッスンあり',
        ],
        pros: [
            '全身運動で体力・免疫力アップ',
            '水の安全スキルが身につく',
            '進級制度でモチベーションを維持しやすい',
        ],
        cons: [
            '送迎が必要な場合がある',
            '繁忙期は定員に達しやすい',
        ],
        recommended: ['体力をつけたい', '集団行動を学ばせたい', '水が好き'],
        affiliateUrl: '#',
        ctaText: '体験レッスンを予約する',
        color: '#2196F3',
    },
    {
        id: 'programming',
        slug: 'programming',
        name: 'QUREO（キュレオ）プログラミング教室',
        nameEn: 'QUREO Programming School',
        tagline: 'ゲーム感覚で学べる、小学生向けプログラミング教室',
        description: 'サイバーエージェントグループが開発した教材を使用。ゲームづくりを通じて楽しみながらプログラミング的思考を身につけられる。全国3,000教室以上。',
        category: 'プログラミング',
        target: 'ゲームやパソコンが好き・論理的思考力を伸ばしたいお子さま',
        targetAge: ['小学生', '中学生'],
        features: [
            'ゲーム感覚で楽しく学べるビジュアルプログラミング',
            '全国3,000教室以上の圧倒的な教室数',
            'プログラミング検定にも対応',
            '個別指導で自分のペースで進められる',
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
        affiliateUrl: '#',
        ctaText: '無料体験に申し込む',
        color: '#FF6B35',
    },
    {
        id: 'piano',
        slug: 'piano',
        name: 'ヤマハ音楽教室',
        nameEn: 'Yamaha Music School',
        tagline: '「きく」「うたう」「ひく」で音楽の基礎を育てる',
        description: '60年以上の実績を持つヤマハ独自の教育メソッド。耳の発達が著しい幼児期から音楽に触れることで、豊かな感性と表現力を育む。',
        category: '音楽',
        target: '音楽が好き・感性を育てたい・集中力を伸ばしたいお子さま',
        targetAge: ['1歳〜', '幼児', '小学生'],
        features: [
            '60年以上の実績がある独自の教育メソッド',
            '年齢に合わせた段階的なカリキュラム',
            'グループレッスンで協調性も育つ',
            '発表会で表現力を磨ける',
        ],
        pros: [
            '感性・表現力・集中力が育つ',
            '脳の発達に良い影響がある',
            '一生の趣味になる',
        ],
        cons: [
            '自宅での練習が必要',
            '楽器の購入費用がかかる場合がある',
        ],
        recommended: ['音楽が好き', '感性を育てたい', '集中力を伸ばしたい'],
        affiliateUrl: '#',
        ctaText: '無料体験レッスンを見る',
        color: '#9C27B0',
    },
    {
        id: 'english',
        slug: 'english',
        name: 'ペッピーキッズクラブ',
        nameEn: 'Peppy Kids Club',
        tagline: '楽しいから続く、子ども専門の英会話教室',
        description: '全国1,400教室以上の子ども英会話教室。ネイティブ講師と日本人講師のダブルティーチングで、楽しみながら本格的な英語力が身につく。',
        category: '語学',
        target: '英語に興味がある・グローバルな視野を持たせたいお子さま',
        targetAge: ['1歳〜', '幼児', '小学生', '中学生'],
        features: [
            '日本人講師とネイティブ講師のダブルティーチング',
            '全国1,400教室以上の展開',
            'オリジナル教材で楽しく学べる',
            '英検対策にも対応',
        ],
        pros: [
            '幼少期からの英語耳が育つ',
            '異文化理解が深まる',
            '学校の英語に自信がつく',
        ],
        cons: [
            '週1回だと上達に時間がかかる',
            '日常で英語を使う機会が少ない',
        ],
        recommended: ['英語に興味がある', 'グローバルな視野を持たせたい', '英検に挑戦したい'],
        affiliateUrl: '#',
        ctaText: '無料体験を申し込む',
        color: '#4CAF50',
    },
    {
        id: 'martial-arts',
        slug: 'martial-arts',
        name: '極真空手 少年部',
        nameEn: 'Kyokushin Karate Junior',
        tagline: '心・技・体を磨き、強い心を育てる',
        description: '世界最大の空手団体による少年部。礼儀・忍耐・自信を武道を通じて自然に身につけることができる。全国に道場あり。',
        category: '武道',
        target: '礼儀作法を学ばせたい・自信をつけさせたいお子さま',
        targetAge: ['幼児', '小学生', '中学生'],
        features: [
            '武道を通じた礼儀作法の習得',
            '試合や昇級審査で成長を実感',
            '護身術としても役立つ',
            '精神力・忍耐力が鍛えられる',
        ],
        pros: [
            '礼儀正しさ・規律が身につく',
            '自己防衛能力が高まる',
            '精神的にたくましくなる',
        ],
        cons: [
            'ケガのリスクがある',
            '子どもによっては厳しく感じることも',
        ],
        recommended: ['礼儀作法を学ばせたい', '精神力を鍛えたい', '運動が好き'],
        affiliateUrl: '#',
        ctaText: '見学・体験を申し込む',
        color: '#F44336',
    },
    {
        id: 'art',
        slug: 'art',
        name: 'アトリエぱお（こども美術教室）',
        nameEn: 'Atelier Pao',
        tagline: '自由な発想で、創造力と自己表現力を伸ばす',
        description: '絵画・工作・デザインなど多彩なカリキュラムで子どもの創造力を引き出す美術教室。正解のないアートだからこそ、自己肯定感が育つ。',
        category: 'アート',
        target: '絵を描くのが好き・ものづくりが好き・自己表現力を伸ばしたいお子さま',
        targetAge: ['幼児', '小学生', '中学生'],
        features: [
            '絵画・工作・デザインなど幅広いカリキュラム',
            '自由な発想を大切にする指導方針',
            '展覧会への出展機会あり',
            '少人数制で丁寧な指導',
        ],
        pros: [
            '創造力・発想力が育つ',
            '自己肯定感が高まる',
            '手先の器用さが向上する',
        ],
        cons: [
            '汚れやすいので服装に注意が必要',
            '作品の保管場所が必要',
        ],
        recommended: ['絵を描くのが好き', '自由な発想を大切にしたい', 'ものづくりが好き'],
        affiliateUrl: '#',
        ctaText: '教室を探す',
        color: '#FF9800',
    },
    {
        id: 'dance',
        slug: 'dance',
        name: 'NOAダンスアカデミー KIDS',
        nameEn: 'NOA Dance Academy KIDS',
        tagline: 'リズム感と表現力を、ダンスで楽しく育てる',
        description: '都内最大規模のダンススクールのキッズクラス。ヒップホップ・ジャズ・バレエなど多彩なジャンルから選べ、初心者でも安心して始められる。',
        category: 'ダンス',
        target: '音楽が好き・体を動かすのが好き・表現力を伸ばしたいお子さま',
        targetAge: ['幼児', '小学生', '中学生'],
        features: [
            'ヒップホップ・ジャズ・バレエなど多彩なジャンル',
            '初心者向けクラスが充実',
            '発表会やイベントでステージ経験',
            '体幹・リズム感が鍛えられる',
        ],
        pros: [
            'リズム感・表現力が育つ',
            '体力・柔軟性が向上する',
            '仲間との一体感が味わえる',
        ],
        cons: [
            '発表会の衣装代がかかる場合がある',
            '教室が都市部に集中しがち',
        ],
        recommended: ['音楽に合わせて体を動かすのが好き', '表現力を伸ばしたい', 'ステージに立ちたい'],
        affiliateUrl: '#',
        ctaText: '無料体験に申し込む',
        color: '#E91E63',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
