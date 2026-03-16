import { services, Service } from './services';

export interface Question {
    id: number;
    text: string;
    subtext?: string;
    options: Option[];
}

export interface Option {
    label: string;
    scores: Record<string, number>;
}

export interface DiagnosisResult {
    service: Service;
    score: number;
    matchRate: number;
    reason: string;
}

interface ConditionalReason {
    condition: (answers: number[]) => boolean;
    text: string;
}

export const questions: Question[] = [
    {
        id: 1,
        text: 'お子さまの年齢はどのくらいですか？',
        options: [
            {
                label: '0〜3歳（乳幼児）',
                scores: { programming: 0, english: 4, 'english-online': 2, 'music-dance': 2, steam: 2, learning: 0, chikuiku: 5, 'be-studio': 3 },
            },
            {
                label: '4〜6歳（幼稚園・保育園）',
                scores: { programming: 1, english: 5, 'english-online': 4, 'music-dance': 5, steam: 5, learning: 2, chikuiku: 4, 'be-studio': 3 },
            },
            {
                label: '7〜9歳（小学校低学年）',
                scores: { programming: 4, english: 4, 'english-online': 5, 'music-dance': 4, steam: 5, learning: 5, chikuiku: 2, 'be-studio': 3 },
            },
            {
                label: '10歳以上（小学校高学年〜）',
                scores: { programming: 5, english: 5, 'english-online': 5, 'music-dance': 3, steam: 4, learning: 5, chikuiku: 0, 'be-studio': 3 },
            },
        ],
    },
    {
        id: 2,
        text: 'お子さまの性格に近いのはどれですか？',
        subtext: '普段の様子を思い浮かべてください',
        options: [
            {
                label: '活発で体を動かすのが大好き',
                scores: { programming: 1, english: 2, 'english-online': 2, 'music-dance': 5, steam: 3, learning: 1, chikuiku: 2, 'be-studio': 3 },
            },
            {
                label: '好奇心旺盛で色んなことに興味を持つ',
                scores: { programming: 4, english: 4, 'english-online': 4, 'music-dance': 3, steam: 5, learning: 4, chikuiku: 5, 'be-studio': 3 },
            },
            {
                label: 'じっくり集中して取り組むタイプ',
                scores: { programming: 5, english: 3, 'english-online': 3, 'music-dance': 4, steam: 4, learning: 5, chikuiku: 3, 'be-studio': 3 },
            },
            {
                label: '人と関わるのが好きで社交的',
                scores: { programming: 2, english: 5, 'english-online': 5, 'music-dance': 5, steam: 3, learning: 2, chikuiku: 2, 'be-studio': 3 },
            },
        ],
    },
    {
        id: 3,
        text: 'どんな力を一番伸ばしてあげたいですか？',
        options: [
            {
                label: '思考力・論理的思考',
                scores: { programming: 5, english: 2, 'english-online': 2, 'music-dance': 1, steam: 5, learning: 4, chikuiku: 4, 'be-studio': 3 },
            },
            {
                label: '語学力・コミュニケーション力',
                scores: { programming: 1, english: 5, 'english-online': 5, 'music-dance': 2, steam: 1, learning: 3, chikuiku: 1, 'be-studio': 3 },
            },
            {
                label: '感性・表現力・創造力',
                scores: { programming: 2, english: 1, 'english-online': 1, 'music-dance': 5, steam: 4, learning: 2, chikuiku: 4, 'be-studio': 3 },
            },
            {
                label: '読解力・学力・教養',
                scores: { programming: 2, english: 3, 'english-online': 3, 'music-dance': 1, steam: 3, learning: 5, chikuiku: 3, 'be-studio': 3 },
            },
        ],
    },
    {
        id: 4,
        text: 'お子さまが夢中になりやすいのはどれですか？',
        options: [
            {
                label: 'ゲーム・パソコン・タブレット',
                scores: { programming: 5, english: 2, 'english-online': 3, 'music-dance': 1, steam: 4, learning: 2, chikuiku: 1, 'be-studio': 3 },
            },
            {
                label: '音楽を聴く・歌う・踊る',
                scores: { programming: 0, english: 1, 'english-online': 1, 'music-dance': 5, steam: 1, learning: 1, chikuiku: 2, 'be-studio': 3 },
            },
            {
                label: '本を読む・お話を聞く',
                scores: { programming: 2, english: 3, 'english-online': 3, 'music-dance': 1, steam: 2, learning: 5, chikuiku: 3, 'be-studio': 3 },
            },
            {
                label: 'お絵かき・工作・実験',
                scores: { programming: 3, english: 0, 'english-online': 0, 'music-dance': 2, steam: 5, learning: 1, chikuiku: 5, 'be-studio': 3 },
            },
        ],
    },
    {
        id: 5,
        text: '習い事のスタイルで理想的なのは？',
        subtext: '保護者として最も重視するポイント',
        options: [
            {
                label: '教室に通って対面で学ばせたい',
                scores: { programming: 4, english: 3, 'english-online': 1, 'music-dance': 5, steam: 1, learning: 1, chikuiku: 1, 'be-studio': 3 },
            },
            {
                label: 'オンラインで自宅から学ばせたい',
                scores: { programming: 3, english: 5, 'english-online': 5, 'music-dance': 1, steam: 3, learning: 2, chikuiku: 2, 'be-studio': 3 },
            },
            {
                label: '自宅に届く教材で自分のペースで',
                scores: { programming: 2, english: 2, 'english-online': 2, 'music-dance': 1, steam: 5, learning: 5, chikuiku: 5, 'be-studio': 3 },
            },
            {
                label: 'まだ決めていない',
                scores: { programming: 3, english: 3, 'english-online': 3, 'music-dance': 3, steam: 3, learning: 3, chikuiku: 3, 'be-studio': 3 },
            },
        ],
    },
    {
        id: 6,
        text: '習い事に期待することは何ですか？',
        options: [
            {
                label: '将来の受験や就職に役立ててほしい',
                scores: { programming: 5, english: 5, 'english-online': 5, 'music-dance': 2, steam: 3, learning: 5, chikuiku: 2, 'be-studio': 3 },
            },
            {
                label: '自分らしい個性や才能を見つけてほしい',
                scores: { programming: 3, english: 2, 'english-online': 2, 'music-dance': 5, steam: 5, learning: 2, chikuiku: 4, 'be-studio': 3 },
            },
            {
                label: '楽しみながら自然に学んでほしい',
                scores: { programming: 3, english: 4, 'english-online': 4, 'music-dance': 4, steam: 5, learning: 4, chikuiku: 5, 'be-studio': 3 },
            },
            {
                label: '友達を作り、協調性を身につけてほしい',
                scores: { programming: 2, english: 4, 'english-online': 3, 'music-dance': 5, steam: 2, learning: 2, chikuiku: 2, 'be-studio': 3 },
            },
        ],
    },
    {
        id: 7,
        text: 'お子さまに一番身につけてほしいのは？',
        options: [
            {
                label: '自分で考え、やり抜く力',
                scores: { programming: 5, english: 3, 'english-online': 3, 'music-dance': 3, steam: 5, learning: 4, chikuiku: 3, 'be-studio': 3 },
            },
            {
                label: '世界で通用するスキル',
                scores: { programming: 4, english: 5, 'english-online': 5, 'music-dance': 2, steam: 3, learning: 2, chikuiku: 1, 'be-studio': 3 },
            },
            {
                label: '自己表現力・発信力',
                scores: { programming: 2, english: 4, 'english-online': 4, 'music-dance': 5, steam: 4, learning: 3, chikuiku: 3, 'be-studio': 3 },
            },
            {
                label: '知的好奇心・学ぶ楽しさ',
                scores: { programming: 3, english: 3, 'english-online': 3, 'music-dance': 3, steam: 5, learning: 5, chikuiku: 5, 'be-studio': 3 },
            },
        ],
    },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
    programming: [
        { condition: (a) => a[3] === 0, text: 'ゲームやパソコンに夢中になれるお子さまには、プログラミングがぴったり。サイバーエージェントが運営するTech Kids Schoolでは、「遊ぶ側」から「作る側」へ。ゲーム開発を通じて創造力と論理的思考力が同時に育ちます。' },
        { condition: (a) => a[2] === 0, text: '思考力・論理的思考を伸ばしたいというご希望に、プログラミングは直球でお応えできます。「順序立てて考える力」「問題を分解する力」は、学校の勉強にも応用できる一生モノのスキルです。' },
        { condition: (a) => a[5] === 0, text: '将来の受験や就職を見据えるなら、プログラミングは最も将来性のある習い事の一つ。大学入試にも導入され、IT人材の需要は今後も高まる一方です。' },
        { condition: () => true, text: 'サイバーエージェントが運営する本格的なプログラミングスクール。ゲーム開発を通じて、お子さまの論理的思考力と創造力を楽しく伸ばせます。' },
    ],
    english: [
        { condition: (a) => a[0] <= 1, text: '幼少期から英語に触れるチャンスは一生に一度。GLOBAL CROWNはバイリンガル講師が日本語でサポートしてくれるので、英語が初めてのお子さまでも安心してスタートできます。' },
        { condition: (a) => a[4] === 1, text: 'オンラインで自宅から学ばせたいとのこと。GLOBAL CROWNなら送迎不要で、自宅からマンツーマンレッスンが受けられます。バイリンガル講師だから日本語でフォローしてもらえて安心です。' },
        { condition: (a) => a[1] === 3, text: '社交的なお子さまには、先生と楽しく会話しながら学べるGLOBAL CROWNがぴったり。バイリンガル講師との対話を通じて、コミュニケーション力と英語力が同時に育ちます。' },
        { condition: () => true, text: 'バイリンガル講師だから日本語でサポートOK。英語初心者のお子さまでも安心して始められるオンライン英会話です。自宅からマンツーマンで効率的に上達できます。' },
    ],
    'english-online': [
        { condition: (a) => a[6] === 1, text: '世界で通用するスキルを身につけさせたいとのこと。NovaKidはアメリカ発のプログラムで、ネイティブ講師からの本場の英語に自然と触れられます。世界49カ国で利用される実績が品質の証です。' },
        { condition: (a) => a[0] >= 2, text: '小学生のお子さまなら、NovaKidのオールイングリッシュレッスンでグンと英語力が伸びます。ゲーム感覚のカリキュラムで楽しみながら、ネイティブの発音と表現が自然に身につきます。' },
        { condition: (a) => a[4] === 1, text: 'オンラインで自宅から学ばせたいとのこと。NovaKidならネイティブ講師のマンツーマンレッスンを自宅から受けられます。送迎不要で忙しいご家庭にも最適です。' },
        { condition: () => true, text: 'アメリカ発のオンライン英会話。ネイティブ講師によるゲーム感覚のレッスンで、楽しみながら本場の英語が身につきます。世界49カ国で利用される信頼の品質。' },
    ],
    'music-dance': [
        { condition: (a) => a[3] === 1, text: '音楽を聴いたり歌ったり踊ったりが大好きなお子さまにはEYS-Kidsがぴったり。ピアノ・バイオリン・ダンス・バレエなど多彩なコースから選べ、楽器プレゼントで初期費用もお得です。' },
        { condition: (a) => a[1] === 0, text: '活発なお子さまのエネルギーを表現に変えるなら、EYS-Kidsのダンスやバレエがおすすめ。音楽教室としてピアノやバイオリンも選べるので、お子さまの興味に合わせて始められます。' },
        { condition: (a) => a[2] === 2, text: '感性・表現力を伸ばしたいというご希望に、音楽とダンスは最適です。EYS-Kidsなら楽器プレゼントで手軽に始められ、発表会でのステージ経験がお子さまの大きな自信につながります。' },
        { condition: () => true, text: '楽器プレゼントや月謝無料キャンペーンで始めやすいEYS-Kids。ピアノ・バイオリン・ダンス・バレエなど多彩なコースから、お子さまの「好き」を見つけられます。' },
    ],
    steam: [
        { condition: (a) => a[3] === 3, text: 'お絵かきや工作が好きなお子さまには、ワンダーボックスのSTEAM教材がぴったり。毎月届くキットで実験・工作を楽しみながら、プログラミングやサイエンスの思考力も自然に身につきます。' },
        { condition: (a) => a[1] === 1, text: '好奇心旺盛なお子さまの「知りたい！」を刺激するワンダーボックス。プログラミング・サイエンス・アートなど多彩なコンテンツで、飽きることなく学びを深められます。' },
        { condition: (a) => a[4] === 2, text: '自宅に届く教材をご希望とのこと。ワンダーボックスなら毎月届くキットとアプリで、自分のペースで楽しく取り組めます。送迎不要で保護者の負担も少なく続けやすいです。' },
        { condition: () => true, text: 'デジタルとアナログを融合したSTEAM教材。遊び感覚で思考力・創造力を育てながら、プログラミングやサイエンスの基礎も自然に身につきます。' },
    ],
    learning: [
        { condition: (a) => a[3] === 2, text: '本やお話が好きなお子さまには、読売KODOMO新聞がぴったり。子ども向けにわかりやすく書かれたニュースや科学記事で、読解力・語彙力が自然にアップ。月額550円で始められます。' },
        { condition: (a) => a[2] === 3, text: '読解力・学力を伸ばしたいというご希望に、子ども新聞は効果的です。時事問題から科学・文化まで幅広い知識が身につき、中学受験の対策にもなります。' },
        { condition: (a) => a[5] === 0, text: '将来の受験を見据えるなら、読売KODOMO新聞は隠れた最強ツール。読解力・語彙力・時事問題の知識は、あらゆる教科の基礎となります。月額550円と圧倒的にリーズナブルです。' },
        { condition: () => true, text: '月額550円で始められる子ども新聞。楽しく読めるニュースや科学記事で、読解力・語彙力・社会への関心が自然に育ちます。受験対策としても効果的です。' },
    ],
    chikuiku: [
        { condition: (a) => a[0] === 0, text: '0〜3歳のお子さまには、月齢に合った知育玩具が届くCha Cha Chaが最適。保育士や専門家が監修した厳選おもちゃで、遊びながら五感の発達を促します。初月980円で試せます。' },
        { condition: (a) => a[1] === 1, text: '好奇心旺盛なお子さまには、毎月新しい刺激が届くCha Cha Chaがぴったり。月齢に合わせたパーソナライズ配送で、「ちょうどいい」おもちゃが次々届きます。' },
        { condition: (a) => a[5] === 2, text: '楽しみながら自然に学んでほしいというご希望に、知育玩具の定期便は理想的。遊びの中に学びの要素が詰まった良質なおもちゃで、無理なく成長をサポートします。' },
        { condition: () => true, text: '専門家監修の知育玩具が月齢に合わせて届くサブスクサービス。遊びの中で自然に学べる環境を、初月980円から手軽に始められます。' },
    ],
    'be-studio': [
        { condition: (a) => a[2] === 1, text: '語学力・コミュニケーション力を伸ばしたいなら、ベネッセのビースタジオがおすすめ。大手ベネッセのノウハウで、楽しみながら本物の英語力が身につきます。全国に教室があり通いやすいのも魅力です。' },
        { condition: (a) => a[4] === 0, text: '教室に通って対面で学ばせたいとのこと。ビースタジオは全国に教室があり、お近くで通いやすい英語教室です。年齢に合ったカリキュラムで、楽しく英語が学べます。' },
        { condition: () => true, text: 'ベネッセが運営するこども英語教室。大手ブランドの安心感と、年齢に合わせたカリキュラムで、お子さまの英語力を楽しく伸ばせます。全国展開で通いやすさも抜群。' },
    ],
};

function selectReason(serviceId: string, answers: number[], fallbackReason: string): string {
    const reasons = conditionalReasons[serviceId];
    if (reasons) {
        for (const r of reasons) {
            if (r.condition(answers)) return r.text;
        }
    }
    return fallbackReason;
}

export function calculateResults(answers: number[]): DiagnosisResult[] {
    const scoreMap: Record<string, number> = {};
    services.forEach((s) => { scoreMap[s.id] = 0; });
    answers.forEach((optionIndex, questionIndex) => {
        const question = questions[questionIndex];
        if (question && question.options[optionIndex]) {
            Object.entries(question.options[optionIndex].scores).forEach(([serviceId, score]) => {
                if (scoreMap[serviceId] !== undefined) { scoreMap[serviceId] += score; }
            });
        }
    });
    const results: DiagnosisResult[] = services
        .map((service) => ({ service, score: scoreMap[service.id] || 0, matchRate: 0, reason: selectReason(service.id, answers, service.tagline) }))
        .sort((a, b) => b.score - a.score);
    const top3 = results.slice(0, 3);
    const topScore = top3[0]?.score || 1;
    return top3.map((r, i) => {
        const scoreRatio = topScore > 0 ? r.score / topScore : 0.5;
        let displayRate: number;
        if (i === 0) displayRate = 73 + Math.round(scoreRatio * 12);
        else if (i === 1) displayRate = 67 + Math.round(scoreRatio * 11);
        else displayRate = 60 + Math.round(scoreRatio * 12);
        return { ...r, matchRate: displayRate };
    });
}
