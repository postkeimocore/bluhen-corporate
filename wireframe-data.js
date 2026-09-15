window.BLUHEN_WIREFRAME = {
  pages: {
    top: {
      nav: 'TOP', route: '/', title: 'TOP / Corporate Home', mode: 'full',
      purpose: '初見で事業内容を理解できるようにし、実績・事例から各事業、Knowledge、問い合わせへつなげる。',
      sections: [
        {
          type:'hero', eyebrow:'',
          title:'日本企業の価値を世界へ届けるため、\nグローバル展開を支援します。',
          lead:'Global IR × Global Marketing',
          body:'',
          visual:'KEY VISUAL / TYPOGRAPHY / MOTION',
          ctas:['事業を見る','相談する'],
          note:'FVでは「日本企業のグローバル展開を支援する会社」であることを最初に伝える。'
        },
        {
          type:'business', eyebrow:'BUSINESS', title:'日本企業の価値を世界へ届ける、\n2つのグローバル事業。',
          cards:[
            {title:'Global IR',copy:'企業価値を、世界へ。',solutions:['IR Translation','English Review & Editing','Executive Communication','IR Language Management','Global IR Communication'],href:'?page=global-ir'},
            {title:'Global Marketing',copy:'商品・サービスを、世界へ。',solutions:['市場調査・戦略設計','Branding / Localization','販売基盤・越境EC','Content / Marketing','販路開拓'],href:'?page=global-marketing'}
          ],
          note:'2つの主事業を最初に分けて見せ、各ページで具体的なSolutionsへつなげる。'
        },
        {
          type:'cases', eyebrow:'SELECTED CASES / PROVEN EXPERIENCE', title:'主な実績・事例',
          proofs:[
            ['対応業界・企業属性','掲載可能な実績情報'],['支援領域','IR / 海外展開'],['継続・案件規模','掲載可能な実績情報'],['対応市場・言語','掲載可能な実績情報']
          ],
          cases:[
            {cat:'GLOBAL IR',title:'上場企業等の英文IR支援',challenge:'正確性と企業固有表現の一貫性',scope:'過去資料調査 / 翻訳 / レビュー / 品質管理',result:'掲載可能な成果・実績'},
            {cat:'GLOBAL MARKETING',title:'海外展開支援の代表事例',challenge:'市場理解から販売・販路までの分断',scope:'戦略 / ローカライズ / 集客 / 販路',result:'掲載可能な成果・実績'}
          ],
          note:'事業紹介の直後に代表事例を置き、具体的な支援内容を早い段階で確認できるようにする。'
        },
        {
          type:'capabilities', eyebrow:'WHAT POWERS BLÜHEN', title:'言葉とテクノロジーで\n人をつなぎ、事業を動かす。',
          items:[
            ['Global Sense','世界の文脈を読む力'],['Language','言葉で本質を伝える力'],['Technology','テクノロジーで実現する力'],['Orchestration','人と知を束ねる力']
          ],
          note:'4つの強みを単独で並べるのではなく、相互に組み合わさる関係として見せる。'
        },
        {
          type:'knowledge', eyebrow:'KNOWLEDGE', title:'グローバル展開のナレッジ',
          cards:[
            ['Global IR','英文IR / 統合報告書 / 品質設計','英文IRで品質を落とさないためのチェックポイント'],
            ['Global IR','IR Translation','統合報告書の英訳で過年度表現を統一する理由'],
            ['Global Marketing','海外展開 / Localization','海外市場に合わせて価値の伝え方を変える考え方']
          ],
          note:'IR・海外展開に関する専門情報から、関連する事業・事例へつなげる。'
        },
        {
          type:'other', eyebrow:'OTHER BUSINESSES', title:'その他の事業',
          items:['人材・採用','PATHOS ↗','AI・業務','地域'],
          note:'主事業との優先順位を分け、その他の取り組みとしてまとめて紹介する。'
        },
        {
          type:'about', eyebrow:'ABOUT BLÜHEN', title:'可能性を、活躍へ。',
          lead:'Mission / Visionから、創業背景、組織、会社情報までをまとめて紹介する。',
          groups:[
            ['Purpose','Mission / Vision'],
            ['Story & Identity','Story / 4 Capabilities'],
            ['People & Organization','Organization / Workstyle / CEO Message'],
            ['Company','History / Company Profile']
          ],
          note:'About / Companyを1ページにまとめ、会社理解に必要な情報を一つの導線で確認できるようにする。'
        },
        {
          type:'news', eyebrow:'NEWS', title:'News',
          rows:[['2026.xx.xx','Corporate','お知らせタイトル'],['2026.xx.xx','Global IR','お知らせタイトル'],['2026.xx.xx','Global Marketing','お知らせタイトル']],
          note:'企業活動の更新情報を一覧で掲載し、各記事へつなげる。'
        },
        {
          type:'contact', eyebrow:'CONTACT', title:'日本企業の価値を、\n世界へ届けるために。',
          cards:[['英文IRについて相談する','英文IR・統合報告書・IRコミュニケーション'],['海外展開について相談する','戦略・ローカライゼーション・EC・販路']],
          note:'相談内容を2つの主事業に分け、問い合わせ先を選びやすくする。'
        }
      ]
    },
    'global-ir': {
      nav:'Global IR', route:'/work/global-ir/', title:'Global IR', mode:'service',
      purpose:'英文IR・統合報告書等の支援内容と、品質を支える考え方・工程を理解できるページにする。',
      sections:[
        {
          type:'serviceHero', eyebrow:'GLOBAL IR', title:'企業価値を、世界へ。',
          lead:'英文IRコミュニケーションを、正確さだけでなく「伝わる品質」まで設計する。',
          body:'統合報告書・英文レビュー・経営メッセージ等を対象に、企業固有の表現や過年度開示との整合を踏まえて支援する。',
          visual:'IR DOCUMENT / LANGUAGE SYSTEM\n企業理解 → 表現管理 → Review → QA',
          ctas:['英文IRについて相談する','Solutionsを見る'],
          note:'翻訳だけでなく、レビューや用語・表現管理まで含む支援範囲を示す。'
        },
        {
          type:'pain', eyebrow:'CHALLENGES', title:'英文IRで起こりやすい課題',
          cards:[
            ['正しいだけでは伝わらない','財務・IR文書では正確性が前提。その上で、経営意図や企業らしさまで自然な英語で伝える必要がある。'],
            ['過年度表現との不整合','毎年・毎資料で表現が変わると、用語・トーン・企業固有表現の一貫性が崩れる。'],
            ['確認・修正の負荷','翻訳後に発注側で大きな修正や再確認が必要になる状態を減らし、納品時点の完成度を高める。']
          ],
          note:'サービス説明の前に、依頼企業側で起こりやすい課題を整理する。'
        },
        {
          type:'solutions', eyebrow:'SOLUTIONS', title:'Global IR Solutions',
          intro:'提供領域を「何を依頼できるか」が分かる単位で整理する。',
          cards:[
            ['IR Translation','統合報告書・IR資料等の英訳。企業固有表現・過年度資料を踏まえて品質を揃える。'],
            ['English Review & Editing','既存英文のレビュー・編集。正確性だけでなく読み手に伝わる自然さを整える。'],
            ['Executive Communication','トップメッセージ等、経営者の意図やニュアンスが重要な英文コミュニケーション。'],
            ['IR Language Management','用語・表現・過年度訳を管理し、継続的な英文開示の一貫性を支える。'],
            ['Global IR Communication','海外投資家向けコミュニケーションの表現・運用品質を支援。']
          ],
          note:'初期はページ内で紹介し、検索需要や事例が蓄積したSolutionから必要に応じて個別ページ化する。'
        },
        {
          type:'process', eyebrow:'QUALITY DESIGN', title:'ブリューエンのIR品質設計',
          steps:[
            ['01','企業・文脈理解','対象企業・資料・読み手を確認'],
            ['02','過去開示調査','既存の公開英文・過年度表現を確認'],
            ['03','用語・表現設計','固有表現や用語の基準を揃える'],
            ['04','Translation / Editing','目的に応じて翻訳・編集'],
            ['05','Expert Review','専門性・自然さ・整合性をレビュー'],
            ['06','Final QA','数値・固有名詞・体裁等を最終確認']
          ],
          note:'品質を支える工程を順番に見せ、支援内容を具体的に理解できるようにする。'
        },
        {
          type:'proof', eyebrow:'PROVEN EXPERIENCE', title:'Global IRの主な実績',
          proofs:[['対応企業・業界','上場企業等 / 業界情報'],['文書種別','統合報告書 / IR資料等'],['継続支援','継続案件・支援期間'],['支援範囲','翻訳 / Review / 品質管理等']],
          note:'社名非公開の案件でも、業界・文書種別・支援範囲等で実績を伝えられる構成にする。'
        },
        {
          type:'serviceCase', eyebrow:'CASE STUDY', title:'Global IR Case',
          cat:'GLOBAL IR', caseTitle:'上場企業等の英文IR支援',
          challenge:'高い正確性に加え、企業固有表現と過年度開示の一貫性が必要。',
          scope:'過去資料調査 / 翻訳 / Review / QA',
          result:'成果・継続情報など掲載可能な内容を表示。',
          note:'代表事例から、課題・支援内容・成果の詳細ページへつなげる。'
        },
        {
          type:'faq', eyebrow:'FAQ', title:'よくあるご相談',
          items:[
            ['どのIR文書に対応できますか？','統合報告書をはじめ、対応文書の範囲を案内。'],
            ['過年度の訳や用語を踏襲できますか？','既存公開資料を参照して表現整合を取る進め方を案内。'],
            ['英文レビューだけでも依頼できますか？','Review & Editingの支援範囲を案内。'],
            ['納期や進め方は？','標準的な進行と相談時に必要な情報を案内。'],
            ['NDAや非公開情報の扱いは？','情報管理の方針・運用を案内。']
          ],
          note:'問い合わせ前に確認したい項目をFAQとしてまとめる。'
        },
        {
          type:'serviceContact', eyebrow:'CONTACT', title:'英文IRコミュニケーションについて、\nまずはご相談ください。',
          body:'対象文書・スケジュール・現在の課題を確認し、必要な支援範囲を整理します。',
          cta:'英文IRについて相談する',
          note:'対象文書や進行条件を確認できる相談導線を置く。'
        }
      ]
    },
    'global-marketing': {
      nav:'Global Marketing', route:'/work/global-marketing/', title:'Global Marketing', mode:'service',
      purpose:'海外展開の流れに沿って、どの段階からどこまで相談できるかを理解できるページにする。',
      sections:[
        {
          type:'serviceHero', eyebrow:'GLOBAL MARKETING', title:'商品・サービスを、世界へ。',
          lead:'市場を知るところから、現地で伝わり、売れる仕組みをつくるところまで。',
          body:'国内向けの価値をそのまま翻訳するのではなく、海外市場・文化・販売文脈に合わせて再設計し、実行までつなげる。',
          visual:'MARKET → LOCALIZE → SELL → GROW\nStrategy / Brand / Content / Channel',
          ctas:['海外展開について相談する','支援プロセスを見る'],
          note:'市場理解・ローカライゼーション・販売・集客・販路を一続きの支援として見せる。'
        },
        {
          type:'pain', eyebrow:'CHALLENGES', title:'海外展開で分断されやすいポイント',
          cards:[
            ['市場は分かっても、価値の見せ方が定まらない','市場調査とブランド・訴求設計が別々だと、現地で何を強みにするかがつながりにくい。'],
            ['販売基盤を作っても、集客につながらない','EC・販売環境とコンテンツ・集客施策を別々に進めると、顧客獲得まで一続きになりにくい。'],
            ['集客しても、販路拡大へつながらない','短期施策だけでなく、継続的に売るチャネルや営業展開まで見据える必要がある。']
          ],
          note:'個別施策の紹介だけでなく、海外展開全体で起こりやすい分断を先に示す。'
        },
        {
          type:'process', eyebrow:'PROCESS', title:'海外展開を、ひと続きのプロセスで支援する。',
          steps:[
            ['01','市場を知る','市場・競合・顧客・商習慣を把握'],
            ['02','価値を現地向けに再設計','ブランド / 言語 / ローカライゼーション'],
            ['03','売る基盤をつくる','越境EC・販売環境・チャネル設計'],
            ['04','知られる仕組みをつくる','Content / Marketing / Promotion'],
            ['05','販路を広げる','販売先・パートナー・営業展開へ']
          ],
          note:'現在地に応じて必要なSolutionを確認できる流れにする。'
        },
        {
          type:'solutions', eyebrow:'SOLUTIONS', title:'Global Marketing Solutions',
          intro:'海外展開の各段階に対応する支援メニュー。',
          cards:[
            ['Market Research & Strategy','市場・競合・顧客を把握し、進出方針と優先順位を整理。'],
            ['Branding & Localization','商品・サービスの価値を、現地の文化・言語・利用文脈に合わせて再編集。'],
            ['Commerce / Sales Base','越境EC等、海外で販売するための基盤・導線を設計。'],
            ['Content Marketing','現地向けコンテンツと集客施策を企画・実行。'],
            ['Sales & Distribution','販路開拓・販売先との接点づくりを支援。']
          ],
          note:'各メニューは、提供範囲が分かる名称と説明に統一する。'
        },
        {
          type:'capabilityCards', eyebrow:'WHY BLÜHEN', title:'海外展開を支える4つの力',
          cards:[
            ['Global Sense','市場・文化・商習慣の文脈を読む'],
            ['Language','価値を現地で伝わる言葉へ変える'],
            ['Technology','実行速度・再現性を高める'],
            ['Orchestration','必要な専門家・知見を束ねる']
          ],
          note:'TOPで示す4つの強みを、海外展開の支援内容に沿って具体化する。'
        },
        {
          type:'serviceCase', eyebrow:'CASE STUDY', title:'Global Marketing Case',
          cat:'GLOBAL MARKETING', caseTitle:'海外市場への展開支援',
          challenge:'市場理解・訴求・販売基盤・集客が分断されていた。',
          scope:'市場調査 / Localization / EC・販売基盤 / Content / Channel',
          result:'成果・対象市場など掲載可能な内容を表示。',
          note:'代表事例で支援範囲を具体的に見せ、詳細ページへつなげる。'
        },
        {
          type:'faq', eyebrow:'FAQ', title:'よくあるご相談',
          items:[
            ['市場調査だけでも相談できますか？','単独支援の可否や条件を案内。'],
            ['すでにECがある場合、途中工程から相談できますか？','途中工程からの支援可否や進め方を案内。'],
            ['どの国・地域に対応していますか？','対応可能地域・得意市場を案内。'],
            ['ブランディングやローカライズだけでも依頼できますか？','必要な領域のみ相談する場合の対応範囲を案内。'],
            ['支援期間はどれくらいですか？','単発・継続それぞれの代表的な進め方を案内。']
          ],
          note:'問い合わせ前に確認したい項目をFAQとしてまとめる。'
        },
        {
          type:'serviceContact', eyebrow:'CONTACT', title:'海外展開について、\nまずはご相談ください。',
          body:'市場調査・ブランド・販売基盤・集客・販路のうち、必要な支援範囲を整理して相談につなげます。',
          cta:'海外展開について相談する',
          note:'どの段階から相談できるかが分かる問い合わせ導線を置く。'
        }
      ]
    }
  }
};
