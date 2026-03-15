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
                label: '3歳以下（未就園児）',
                scores: { swimming: 3, programming: 0, piano: 5, english: 5, 'martial-arts': 1, art: 3, dance: 3 },
            },
            {
                label: '4〜6歳（幼稚園・保育園）',
                scores: { swimming: 5, programming: 1, piano: 5, english: 4, 'martial-arts': 4, art: 4, dance: 4 },
            },
            {
                label: '7〜9歳（小学校低学年）',
                scores: { swimming: 4, programming: 4, piano: 4, english: 4, 'martial-arts': 5, art: 4, dance: 5 },
            },
            {
                label: '10歳以上（小学校高学年〜）',
                scores: { swimming: 3, programming: 5, piano: 3, english: 5, 'martial-arts': 4, art: 3, dance: 4 },
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
                scores: { swimming: 5, programming: 1, piano: 1, english: 2, 'martial-arts': 5, art: 1, dance: 5 },
            },
            {
                label: '好奇心旺盛で色んなことに興味を持つ',
                scores: { swimming: 3, programming: 4, piano: 3, english: 4, 'martial-arts': 3, art: 4, dance: 3 },
            },
            {
                label: 'じっくり集中して取り組むタイプ',
                scores: { swimming: 2, programming: 5, piano: 5, english: 3, 'martial-arts': 3, art: 5, dance: 2 },
            },
            {
                label: '人と関わるのが好きで社交的',
                scores: { swimming: 4, programming: 2, piano: 3, english: 5, 'martial-arts': 4, art: 3, dance: 5 },
            },
        ],
    },
    {
        id: 3,
        text: 'どんな力を一番伸ばしてあげたいですか？',
        options: [
            {
                label: '体力・運動能力',
                scores: { swimming: 5, programming: 0, piano: 0, english: 0, 'martial-arts': 5, art: 0, dance: 4 },
            },
            {
                label: '思考力・論理的思考',
                scores: { swimming: 1, programming: 5, piano: 2, english: 2, 'martial-arts': 2, art: 2, dance: 1 },
            },
            {
                label: '感性・表現力・創造力',
                scores: { swimming: 0, programming: 1, piano: 5, english: 1, 'martial-arts': 1, art: 5, dance: 5 },
            },
            {
                label: 'コミュニケーション力・社会性',
                scores: { swimming: 3, programming: 2, piano: 3, english: 5, 'martial-arts': 4, art: 3, dance: 4 },
            },
        ],
    },
    {
        id: 4,
        text: 'お子さまが夢中になりやすいのはどれですか？',
        options: [
            {
                label: 'ゲーム・パソコン・タブレット',
                scores: { swimming: 1, programming: 5, piano: 1, english: 2, 'martial-arts': 0, art: 2, dance: 1 },
            },
            {
                label: '音楽を聴く・歌う・楽器に触る',
                scores: { swimming: 0, programming: 0, piano: 5, english: 1, 'martial-arts': 0, art: 1, dance: 4 },
            },
            {
                label: '外遊び・スポーツ・かけっこ',
                scores: { swimming: 5, programming: 0, piano: 0, english: 0, 'martial-arts': 5, art: 0, dance: 4 },
            },
            {
                label: 'お絵かき・工作・ものづくり',
                scores: { swimming: 0, programming: 3, piano: 1, english: 0, 'martial-arts': 0, art: 5, dance: 1 },
            },
        ],
    },
    {
        id: 5,
        text: '習い事に期待することは何ですか？',
        subtext: '保護者として最も重視するポイント',
        options: [
            {
                label: '将来の受験や就職に役立ててほしい',
                scores: { swimming: 2, programming: 5, piano: 2, english: 5, 'martial-arts': 2, art: 2, dance: 1 },
            },
            {
                label: '心身を鍛え、たくましく育ってほしい',
                scores: { swimming: 5, programming: 1, piano: 1, english: 1, 'martial-arts': 5, art: 1, dance: 3 },
            },
            {
                label: '自分らしい個性や才能を見つけてほしい',
                scores: { swimming: 2, programming: 3, piano: 4, english: 2, 'martial-arts': 2, art: 5, dance: 5 },
            },
            {
                label: '友達を作り、協調性を身につけてほしい',
                scores: { swimming: 4, programming: 2, piano: 3, english: 4, 'martial-arts': 4, art: 3, dance: 4 },
            },
        ],
    },
    {
        id: 6,
        text: '通わせる頻度はどのくらいを考えていますか？',
        options: [
            {
                label: '週1回がちょうどいい',
                scores: { swimming: 4, programming: 4, piano: 4, english: 3, 'martial-arts': 3, art: 5, dance: 4 },
            },
            {
                label: '週2〜3回しっかり通わせたい',
                scores: { swimming: 5, programming: 3, piano: 3, english: 5, 'martial-arts': 5, art: 3, dance: 5 },
            },
            {
                label: '自宅でも練習できるものがいい',
                scores: { swimming: 1, programming: 4, piano: 5, english: 4, 'martial-arts': 2, art: 4, dance: 2 },
            },
            {
                label: 'まだ決めていない',
                scores: { swimming: 3, programming: 3, piano: 3, english: 3, 'martial-arts': 3, art: 3, dance: 3 },
            },
        ],
    },
    {
        id: 7,
        text: 'お子さまに一番身につけてほしいのは？',
        options: [
            {
                label: '礼儀正しさ・規律',
                scores: { swimming: 3, programming: 1, piano: 2, english: 2, 'martial-arts': 5, art: 1, dance: 3 },
            },
            {
                label: '自分で考え、やり抜く力',
                scores: { swimming: 3, programming: 5, piano: 4, english: 3, 'martial-arts': 4, art: 4, dance: 3 },
            },
            {
                label: '自己表現力・発信力',
                scores: { swimming: 1, programming: 2, piano: 4, english: 4, 'martial-arts': 2, art: 5, dance: 5 },
            },
            {
                label: '健康な体と基礎体力',
                scores: { swimming: 5, programming: 0, piano: 0, english: 0, 'martial-arts': 4, art: 0, dance: 4 },
            },
        ],
    },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
    swimming: [
        {
            condition: (answers) => answers[1] === 0 && answers[2] === 0,
            text: '活発でエネルギーにあふれたお子さまには、全身運動であるスイミングが最適です。体力向上だけでなく、水の安全スキルも身につき一石二鳥。進級テストが目標になり、達成感を味わいながら成長できます。',
        },
        {
            condition: (answers) => answers[4] === 1,
            text: 'たくましく育ってほしいというお気持ち、スイミングなら叶えられます。全身をバランスよく使う水泳は、免疫力アップや姿勢改善にも効果的。段階的な指導で無理なくステップアップできます。',
        },
        {
            condition: (answers) => answers[6] === 3,
            text: '健康な体と基礎体力を重視されるなら、スイミングは理想的な選択です。関節への負担が少なく、心肺機能の発達にも優れた全身運動。幅広い年齢で始められるのも魅力です。',
        },
        {
            condition: () => true,
            text: 'お子さまの回答から、体を動かすことが好きで活動的な傾向が見られます。スイミングなら楽しみながら体力づくりができ、進級制度で成長を実感できます。',
        },
    ],
    programming: [
        {
            condition: (answers) => answers[3] === 0,
            text: 'ゲームやパソコンに夢中になれるお子さまには、プログラミングがぴったり。「遊ぶ側」から「作る側」へ変わることで、創造力と論理的思考力が同時に育ちます。ゲーム感覚で学べるカリキュラムなので、楽しみながら将来のスキルが身につきます。',
        },
        {
            condition: (answers) => answers[2] === 1,
            text: '思考力・論理的思考を伸ばしたいというご希望に、プログラミングは直球でお応えできます。「順序立てて考える力」「問題を分解する力」は、学校の勉強にも応用できる一生モノのスキルです。',
        },
        {
            condition: (answers) => answers[4] === 0,
            text: '将来の受験や就職を見据えるなら、プログラミングは最も将来性のある習い事の一つ。2025年から大学入試にも導入され、IT人材の需要は今後も高まる一方です。',
        },
        {
            condition: () => true,
            text: 'お子さまの回答から、じっくり考えることが好きな傾向が見られます。プログラミングなら、自分のアイデアを形にする喜びを体験しながら、論理的思考力を自然に伸ばせます。',
        },
    ],
    piano: [
        {
            condition: (answers) => answers[3] === 1,
            text: '音楽に自然と惹かれるお子さまには、ピアノが最適です。ヤマハ独自の「きく・うたう・ひく」メソッドで、耳の発達が著しい今の時期に音感の基礎を築けます。将来の趣味や特技として一生の財産になります。',
        },
        {
            condition: (answers) => answers[1] === 2 && answers[2] === 2,
            text: 'じっくり集中できるお子さまの性格と、感性を伸ばしたいというご希望はピアノにぴったり。練習を通じて忍耐力も育ち、発表会では自信と達成感を味わえます。',
        },
        {
            condition: (answers) => answers[5] === 2,
            text: '自宅でも練習できる習い事をお探しなら、ピアノは最適です。教室で学んだことを家庭でも反復でき、日常の中で音楽に触れる時間が自然と増えます。',
        },
        {
            condition: () => true,
            text: 'お子さまの回答から、感性や表現力に関心が高いことがうかがえます。ピアノは脳の発達にも良い影響があり、集中力・記憶力・表現力をバランスよく育てることができます。',
        },
    ],
    english: [
        {
            condition: (answers) => answers[0] === 0 || answers[0] === 1,
            text: '幼少期から英語に触れるチャンスは一生に一度。この時期の「英語耳」は大人になってからは身につきにくい貴重な能力です。ネイティブ講師との楽しいレッスンで、自然な英語力が育ちます。',
        },
        {
            condition: (answers) => answers[4] === 0,
            text: '将来の受験や就職に英語力は必須の時代。早期から英語に馴染んでおくことで、学校の英語が「得意科目」になり、自信につながります。英検対策にも対応しているので目標を持って学べます。',
        },
        {
            condition: (answers) => answers[1] === 3,
            text: '社交的なお子さまには、外国人の先生やお友達と交流できる英会話がぴったり。コミュニケーションを楽しみながら、異文化への理解も深まります。',
        },
        {
            condition: () => true,
            text: 'お子さまの回答から、コミュニケーション力を大切にされていることがわかります。英会話なら、言葉の壁を越えて世界と繋がる力を、楽しみながら身につけることができます。',
        },
    ],
    'martial-arts': [
        {
            condition: (answers) => answers[6] === 0,
            text: '礼儀正しさ・規律を重視されるなら、武道は最高の選択です。道場での「押忍」の挨拶から始まり、相手を尊重する心、最後までやり抜く精神力が自然と身につきます。',
        },
        {
            condition: (answers) => answers[1] === 0 && answers[4] === 1,
            text: '活発なお子さまのエネルギーを正しい方向に導きたいなら、空手がおすすめ。体を思い切り動かしながら、礼儀作法や自制心を学べる武道は、心身をバランスよく育てます。',
        },
        {
            condition: (answers) => answers[2] === 0,
            text: '体力・運動能力の向上に加え、精神面も鍛えられる武道。試合や昇級審査を通じて「努力が報われる経験」を積み重ね、自信とたくましさが育ちます。',
        },
        {
            condition: () => true,
            text: 'お子さまの回答から、心身を鍛えることへの関心が高いことがうかがえます。空手を通じて、礼儀・忍耐・自信を武道の精神とともに自然と身につけていくことができます。',
        },
    ],
    art: [
        {
            condition: (answers) => answers[3] === 3,
            text: 'お絵かきやものづくりが大好きなお子さまにとって、美術教室は才能を開花させる最高の場所。「正解がない」のがアートの魅力で、自由な発想を大切にしてもらえる環境で自己肯定感も育ちます。',
        },
        {
            condition: (answers) => answers[2] === 2 && answers[1] === 2,
            text: 'じっくり集中できるお子さまの性格と、感性・創造力を伸ばしたいというご希望は美術教室にぴったり。絵画・工作・デザインなど多彩な体験を通じて、お子さまの「好き」が見つかります。',
        },
        {
            condition: (answers) => answers[4] === 2,
            text: '個性や才能を見つけてほしいというご希望に、アートは最適です。他の子と比べるのではなく、自分だけの表現を追求できる環境で、お子さまの隠れた才能が見えてきます。',
        },
        {
            condition: () => true,
            text: 'お子さまの回答から、創造力や自己表現への関心が高いことがわかります。美術教室では、自由な発想を肯定してもらいながら、想像力と手先の器用さを伸ばすことができます。',
        },
    ],
    dance: [
        {
            condition: (answers) => answers[3] === 1 && answers[1] === 0,
            text: '音楽好きで体を動かすのが大好きなお子さまには、ダンスがぴったり。リズムに乗って踊ることで、体力・リズム感・表現力が同時に育ちます。ステージでの発表は大きな自信につながります。',
        },
        {
            condition: (answers) => answers[2] === 2 && answers[6] === 2,
            text: '自己表現力を伸ばしたいというご希望に、ダンスは直球でお応えできます。体全体を使った表現活動は、言葉だけでは伝えきれない感情や個性を発信する力を育てます。',
        },
        {
            condition: (answers) => answers[1] === 3,
            text: '社交的なお子さまには、仲間と一緒にステージを作り上げるダンスがおすすめ。チームワークや協調性を学びながら、一体感のある達成体験を味わえます。',
        },
        {
            condition: () => true,
            text: 'お子さまの回答から、表現することや体を動かすことへの関心が見られます。ダンスなら多彩なジャンルから好みを見つけられ、楽しみながらリズム感と表現力を磨けます。',
        },
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
    services.forEach((s) => {
        scoreMap[s.id] = 0;
    });
    answers.forEach((optionIndex, questionIndex) => {
        const question = questions[questionIndex];
        if (question && question.options[optionIndex]) {
            Object.entries(question.options[optionIndex].scores).forEach(([serviceId, score]) => {
                if (scoreMap[serviceId] !== undefined) {
                    scoreMap[serviceId] += score;
                }
            });
        }
    });
    const results: DiagnosisResult[] = services
        .map((service) => ({
            service,
            score: scoreMap[service.id] || 0,
            matchRate: 0,
            reason: selectReason(service.id, answers, service.tagline),
        }))
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
