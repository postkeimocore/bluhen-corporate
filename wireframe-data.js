window.BLUHEN_WIREFRAME = {
  pages: {
    top: {
      nav: 'TOP', route: '/', title: 'TOP / Corporate Home', mode: 'full',
      purpose: '何の会社かを最速で理解させ、実績で信頼を作り、2事業・Case・Knowledge・Contactへ振り分ける。',
      sections: [
        {
          type:'hero', eyebrow:'GLOBAL BUSINESS / CORPORATE',
          title:'日本企業の価値を世界へ届けるため、\nグローバル展開を支援します。',
          lead:'Global IR × Global Marketing',
          body:'会社案内最新版の定義をワーキングコピーとして使用。ブランドスローガンの再定義は今回の制作要件に含めず、Web上で「何の会社か」が先に伝わる構造にする。',
          visual:'Typography / Motion / Information Flow\n※新規撮影を前提にしない',
          ctas:['事業を見る','相談する'],
          note:'目的：5秒以内の事業理解。Vector的な速度・強さは最終デザイン時にタイポグラフィとモーションで表現する。'
        },
        {
          type:'business', eyebrow:'BUSINESS', title:'日本企業の価値を世界へ届ける、\n2つのグローバル事業。',
          cards:[
            {title:'Global IR',copy:'企業価値を、世界へ。',solutions:['IR Translation','English Review & Editing','Executive Communication','IR Language Management','Global IR Communication'],href:'?page=global-ir'},
            {title:'Global Marketing',copy:'商品・サービスを、世界へ。',solutions:['市場調査・戦略設計','Branding / Localization','販売基盤・越境EC','Content / Marketing','販路開拓'],href:'?page=global-marketing'}
          ],
          note:'事業分類は2本柱で固定。Solutionsは「具体的に依頼できること」として読みやすいリストで見せ、初期はページ内セクションとして扱う。'
        },
        {
          type:'cases', eyebrow:'SELECTED CASES / PROVEN EXPERIENCE', title:'実績が、品質と実行力を証明する。',
          proofs:[
            ['対応業界・企業属性','公開可能範囲を確認要'],['支援領域','IR / 海外展開'],['継続・案件規模','公開可能範囲を確認要'],['対応市場・言語','公開可能範囲を確認要']
          ],
          pending:'確認要：会社案内の実績値・顧客属性・案件数等は、Web公開可否を先方確認後に具体値へ置換。',
          cases:[
            {cat:'GLOBAL IR',title:'上場企業等の英文IR支援',challenge:'正確性と企業固有表現の一貫性',scope:'過去資料調査 / 翻訳 / レビュー / 品質管理',result:'成果表現は公開可能情報を確認要'},
            {cat:'GLOBAL MARKETING',title:'海外展開支援の代表事例',challenge:'市場理解から販売・販路までの分断',scope:'戦略 / ローカライズ / 集客 / 販路',result:'成果表現は公開可能情報を確認要'}
          ],
          note:'Businessの直後に証拠を置く。TOPでは原則「IR 1件 + Marketing 1件」。事例数が増えたらFeatured形式へ拡張。'
        },
        {
          type:'capabilities', eyebrow:'WHAT POWERS BLÜHEN', title:'言葉とテクノロジーで\n人をつなぎ、事業を動かす。',
          items:[
            ['Global Sense','世界の文脈を読む力'],['Language','言葉で本質を伝える力'],['Technology','テクノロジーで実現する力'],['Orchestration','人と知を束ねる力']
          ],
          note:'4カードの羅列ではなく、4能力が組み合わさって顧客価値になることを視覚化。'
        },
        {
          type:'knowledge', eyebrow:'KNOWLEDGE', title:'グローバル展開の知見',
          cards:[
            ['Global IR','英文IR / 統合報告書 / 品質設計','英文IRで品質を落とさないためのチェックポイント'],
            ['Global IR','IR Translation','統合報告書の英訳で過年度表現を統一する理由'],
            ['Global Marketing','海外展開 / Localization','海外市場に合わせて価値の伝え方を変える考え方']
          ],
          note:'Knowledge一覧名で検索流入を取るのではなく、個別記事が検索・生成AI・情報収集層の入口になる。初期記事が不足する場合はNav非表示でもCMS設計は残す。'
        },
        {
          type:'other', eyebrow:'OTHER BUSINESSES', title:'その他の事業',
          items:['人材・採用','PATHOS ↗','AI・業務','地域'],
          note:'主事業と同格に見せない。「その他にも展開している」ことが分かる程度に圧縮。PATHOSは外部サービスサイトへ。'
        },
        {
          type:'about', eyebrow:'ABOUT BLÜHEN', title:'可能性を、活躍へ。',
          lead:'創業思想は残す。ただし事業理解と実績の後に置き、現サイトの「思想が先に来て何屋かわからない」問題を解消する。',
          groups:[
            ['Purpose','Mission / Vision'],
            ['Story & Identity','Story / 4 Capabilities'],
            ['People & Organization','Organization / Workstyle / CEO Message'],
            ['Company','History / Company Profile']
          ],
          note:'About / Companyは分割せず `/about/` 1ページに統合。ここに並ぶ項目は「遷移後に何が読めるか」を示す情報構造。'
        },
        {
          type:'news', eyebrow:'NEWS', title:'News',
          rows:[['2026.xx.xx','Corporate','お知らせタイトル'],['2026.xx.xx','Global IR','お知らせタイトル'],['2026.xx.xx','Global Marketing','お知らせタイトル']],
          note:'企業活動の鮮度・実在感を担保する最小構成。microCMS管理。既存記事URLは可能な限り維持。'
        },
        {
          type:'contact', eyebrow:'CONTACT', title:'日本企業の価値を、\n世界へ届けるために。',
          cards:[['Global IRについて相談する','英文IR・統合報告書・IRコミュニケーション'],['海外展開について相談する','戦略・ローカライゼーション・EC・販路']],
          other:'その他のお問い合わせ',
          note:'問い合わせ種別を入口で分け、社内の担当振り分けと商談化をしやすくする。'
        }
      ]
    },
    'global-ir': {
      nav:'Global IR', route:'/work/global-ir/', title:'Global IR', mode:'service',
      purpose:'IR翻訳会社ではなく、企業価値を海外投資家へ継続的・一貫的に届ける英文IRコミュニケーション支援として理解させる。',
      sections:[
        {
          type:'serviceHero', eyebrow:'GLOBAL IR', title:'企業価値を、世界へ。',
          lead:'英文IRコミュニケーションを、正確さだけでなく「伝わる品質」まで設計する。',
          body:'統合報告書・英文レビュー・経営メッセージ等を対象に、企業固有の表現や過年度開示との整合を踏まえて支援する。具体的な対応範囲・実績表現は公開可能情報を確認後に確定。',
          visual:'IR DOCUMENT / LANGUAGE SYSTEM\n企業理解 → 表現管理 → Review → QA',
          ctas:['Global IRについて相談する','Solutionsを見る'],
          note:'FVは「翻訳会社」だけに閉じない。ただし実態以上のコンサルティング表現には広げず、実務品質を中心に据える。'
        },
        {
          type:'pain', eyebrow:'CHALLENGES', title:'英文IRで起こりやすい課題',
          cards:[
            ['正しいだけでは伝わらない','財務・IR文書では正確性が前提。その上で、経営意図や企業らしさまで自然な英語で伝える必要がある。'],
            ['過年度表現との不整合','毎年・毎資料で表現が変わると、用語・トーン・企業固有表現の一貫性が崩れる。'],
            ['確認・修正の負荷','翻訳後に発注側で大きな修正や再確認が必要になる状態を減らし、納品時点の完成度を高める。']
          ],
          note:'会議で聞けている実務課題を顧客側の言葉に翻訳。定量効果は未確認のため書かない。'
        },
        {
          type:'solutions', eyebrow:'SOLUTIONS', title:'Global IR Solutions',
          intro:'現在の会社案内にある提供領域を、Web上では「何を依頼できるか」が理解できる単位で整理する。',
          cards:[
            ['IR Translation','統合報告書・IR資料等の英訳。企業固有表現・過年度資料を踏まえて品質を揃える。'],
            ['English Review & Editing','既存英文のレビュー・編集。正確性だけでなく読み手に伝わる自然さを整える。'],
            ['Executive Communication','トップメッセージ等、経営者の意図やニュアンスが重要な英文コミュニケーション。'],
            ['IR Language Management','用語・表現・過年度訳を管理し、継続的な英文開示の一貫性を支える。'],
            ['Global IR Communication','海外投資家向けコミュニケーション全体の表現・運用品質を支援。具体範囲は確認要。']
          ],
          note:'初期は独立ページ化しない。検索需要・単独受注・事例・FAQが揃ったSolutionだけ将来ページ化。'
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
          pending:'確認要：実際の標準工程・担当分担・ツール利用範囲を先方確認後に確定。',
          note:'「高品質」と言うだけでなく、品質が生まれる工程を可視化する。'
        },
        {
          type:'proof', eyebrow:'PROVEN EXPERIENCE', title:'専門性を、実績で証明する。',
          proofs:[['対応企業・業界','公開可否を確認要'],['文書種別','統合報告書ほか / 詳細確認要'],['継続支援','公開可能な範囲で表示'],['品質指標','掲載可能な根拠を確認要']],
          pending:'顧客名を出せない案件は、業界・上場区分・文書種別・支援範囲・継続期間などで匿名事例化する。',
          note:'数字やロゴを無理に作らず、公開可能な一次情報が揃ったものだけ掲載。'
        },
        {
          type:'serviceCase', eyebrow:'CASE STUDY', title:'Global IR Case',
          cat:'GLOBAL IR', caseTitle:'上場企業等の英文IR支援',
          challenge:'高い正確性に加え、企業固有表現と過年度開示の一貫性が必要。',
          scope:'過去資料調査 / 翻訳 / Review / QA',
          result:'公開可能な成果・継続情報を確認後に記載。',
          note:'詳細ページへ進む前の代表事例。会社名非公開でも成立する設計にする。'
        },
        {
          type:'faq', eyebrow:'FAQ', title:'よくあるご相談',
          items:[
            ['どのIR文書に対応できますか？','統合報告書を含む対応文書を整理して掲載。最終範囲は確認要。'],
            ['過年度の訳や用語を踏襲できますか？','既存公開資料を参照して表現整合を取る運用を前提に説明。'],
            ['英文レビューだけでも依頼できますか？','会社案内上のReview & Editingを独立メニューとして案内。'],
            ['納期や進め方は？','案件規模により異なるため、標準フローと相談起点を示す。'],
            ['NDAや非公開情報の扱いは？','契約・運用ルールを先方確認後に掲載。']
          ],
          note:'営業で頻出する質問をWeb上で先回りし、問い合わせ前の不安を減らす。'
        },
        {
          type:'serviceContact', eyebrow:'CONTACT', title:'英文IRコミュニケーションについて、\nまずはご相談ください。',
          body:'対象文書・スケジュール・現在の課題を確認し、必要な支援範囲を整理します。',
          cta:'Global IRについて相談する',
          note:'価格訴求ではなく、案件条件を確認して適切な支援範囲へつなぐ。'
        }
      ]
    },
    'global-marketing': {
      nav:'Global Marketing', route:'/work/global-marketing/', title:'Global Marketing', mode:'service',
      purpose:'「何でもできます」ではなく、海外展開の時間軸に沿って、どこからどこまで任せられるかを理解させる。',
      sections:[
        {
          type:'serviceHero', eyebrow:'GLOBAL MARKETING', title:'商品・サービスを、世界へ。',
          lead:'市場を知るところから、現地で伝わり、売れる仕組みをつくるところまで。',
          body:'国内向けの価値をそのまま翻訳するのではなく、海外市場・文化・販売文脈に合わせて再設計し、実行までつなげる。',
          visual:'MARKET → LOCALIZE → SELL → GROW\nStrategy / Brand / Content / Channel',
          ctas:['海外展開について相談する','支援プロセスを見る'],
          note:'「ワンストップ」だけでは差別化しない。言語・ローカライゼーション起点の実務力と、工程をつなぐ実行力を見せる。'
        },
        {
          type:'pain', eyebrow:'CHALLENGES', title:'海外展開で分断されやすいポイント',
          cards:[
            ['市場は分かっても、価値の見せ方が定まらない','市場調査とブランド・訴求設計が別々だと、現地で何を強みにするかがつながりにくい。'],
            ['販売基盤を作っても、集客につながらない','EC・販売環境とコンテンツ・集客施策を別々に進めると、顧客獲得まで一続きになりにくい。'],
            ['集客しても、販路拡大へつながらない','短期施策だけでなく、継続的に売るチャネルや営業展開まで見据える必要がある。']
          ],
          note:'Global Marketingを「施策メニューの羅列」ではなく、海外展開のつながりを設計する事業として見せる。'
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
          pending:'支援可能地域・各工程の具体的対応範囲・外部パートナー領域は確認要。',
          note:'ユーザーは自社の現在地から入り、必要なSolutionへ進める。URL階層を深くせずページ内で理解させる。'
        },
        {
          type:'solutions', eyebrow:'SOLUTIONS', title:'Global Marketing Solutions',
          intro:'海外展開の各段階に対応する支援メニュー。名称は最終原稿時に先方の正式名称へ整える。',
          cards:[
            ['Market Research & Strategy','市場・競合・顧客を把握し、進出方針と優先順位を整理。'],
            ['Branding & Localization','商品・サービスの価値を、現地の文化・言語・利用文脈に合わせて再編集。'],
            ['Commerce / Sales Base','越境EC等、海外で販売するための基盤・導線を設計。'],
            ['Content Marketing','現地向けコンテンツと集客施策を企画・実行。'],
            ['Sales & Distribution','販路開拓・販売先との接点づくりを支援。']
          ],
          note:'会社案内の5領域を、顧客が「何を頼めるか」で理解できる名称へ仮置き。正式名称は確認後に確定。'
        },
        {
          type:'capabilityCards', eyebrow:'WHY BLÜHEN', title:'海外展開を支える4つの力',
          cards:[
            ['Global Sense','市場・文化・商習慣の文脈を読む'],
            ['Language','価値を現地で伝わる言葉へ変える'],
            ['Technology','実行速度・再現性を高める'],
            ['Orchestration','必要な専門家・知見を束ねる']
          ],
          note:'TOPの4能力を、Global Marketingでは海外展開プロセスにどう効くかへ具体化する。'
        },
        {
          type:'serviceCase', eyebrow:'CASE STUDY', title:'Global Marketing Case',
          cat:'GLOBAL MARKETING', caseTitle:'海外市場への展開支援',
          challenge:'市場理解・訴求・販売基盤・集客が分断されていた。',
          scope:'市場調査 / Localization / EC・販売基盤 / Content / Channel',
          result:'公開可能な成果・対象市場を確認後に記載。',
          note:'代表事例で「どこまで任せられるか」を具体化する。'
        },
        {
          type:'faq', eyebrow:'FAQ', title:'よくあるご相談',
          items:[
            ['市場調査だけでも相談できますか？','単独支援の可否・最小範囲を確認後に明記。'],
            ['すでにECがある場合、途中工程から相談できますか？','現在地から必要な工程へ入れる設計にするが、実対応範囲は確認要。'],
            ['どの国・地域に対応していますか？','得意市場・対応可能地域を先方確認後に掲載。'],
            ['ブランディングやローカライズだけでも依頼できますか？','提供範囲と案件条件を確認後に回答。'],
            ['支援期間はどれくらいですか？','単発 / 継続の代表的な進め方を整理して掲載。']
          ],
          note:'具体条件は先方確認が必要なため、ワイヤーでは質問テーマまで固定する。'
        },
        {
          type:'serviceContact', eyebrow:'CONTACT', title:'海外展開の現在地から、\n必要な支援を整理します。',
          body:'市場調査・ブランド・販売基盤・集客・販路のうち、どこから相談すべきか決まっていない段階でも課題整理から始める想定。実対応範囲は確認後に最終原稿化。',
          cta:'海外展開について相談する',
          note:'「全部依頼しないといけない」印象を避け、相談起点をつくる。'
        }
      ]
    }
  }
};
