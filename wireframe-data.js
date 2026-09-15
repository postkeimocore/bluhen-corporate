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
            {title:'Global IR',copy:'企業価値を、世界へ。',tags:['IR Translation','English Review & Editing','Executive Communication','IR Language Management','Global IR Communication'],href:'?page=global-ir'},
            {title:'Global Marketing',copy:'商品・サービスを、世界へ。',tags:['Market Strategy','Branding & Localization','Marketing / Content','Cross-border EC / Sales Base','Sales & Distribution'],href:'?page=global-marketing'}
          ],
          note:'事業分類は2本柱で固定。Solutionsは初期はページ内セクションとして見せ、薄い独立ページを量産しない。'
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
          items:['Mission / Vision','Story','4 Capabilities','Organization / Workstyle','CEO Message','History','Company Profile'],
          note:'About / Companyは分割せず `/about/` 1ページに統合。会社規模に対して不要な階層を作らない。'
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
      nav:'Global IR', route:'/work/global-ir/', title:'Global IR / 下層構造', mode:'outline',
      purpose:'IR翻訳会社ではなく、企業価値を海外投資家へ継続的・一貫的に届ける英文IRコミュニケーション支援として理解させる。',
      outline:[
        ['FV','企業価値を、世界へ。対象ユーザーと提供価値を明示'],
        ['課題','英文開示・統合報告書で起こる品質、一貫性、運用負荷の課題'],
        ['Solutions','IR Translation / English Review & Editing / Executive Communication / IR Language Management / Global IR Communication'],
        ['IR品質設計','企業理解 → 過去開示調査 → 用語・表現設計 → 翻訳 → Review → QA'],
        ['支援プロセス','相談から納品・継続運用まで。価格訴求ではなく品質管理負荷の低減を見せる'],
        ['Experience / Proof','公開可能な顧客属性・文書種別・継続実績。具体数値は確認要'],
        ['Related Cases','IR事例へ接続。匿名事例でも業界・文書・支援範囲で成立'],
        ['FAQ','納期 / 対応文書 / 用語管理 / 過去訳踏襲 / NDA等、営業質問を先回り'],
        ['CTA','Global IRについて相談する']
      ],
      note:'Solutionsは初期はページ内。検索需要や単独受注が強い項目のみ将来独立ページ化。'
    },
    'global-marketing': {
      nav:'Global Marketing', route:'/work/global-marketing/', title:'Global Marketing / 下層構造', mode:'outline',
      purpose:'「何でもできます」ではなく、海外展開の時間軸に沿って、どこからどこまで任せられるかを理解させる。',
      outline:[
        ['FV','商品・サービスを、世界へ。海外展開支援の対象と価値を明示'],
        ['課題','海外市場理解・伝え方・販売基盤・集客・販路が分断される課題'],
        ['海外展開プロセス','市場を知る → 現地で伝わる形にする → 売る基盤を作る → 集客 → 販路拡大'],
        ['Solutions','Market Strategy / Branding & Localization / Marketing & Promotion / Cross-border EC / Sales & Distribution'],
        ['支援体制・強み','Global Sense / Language / Technology / Orchestrationが各工程を横断'],
        ['Related Cases','海外展開事例を課題 → 戦略 → 支援 → 成果で見せる。具体数値は確認要'],
        ['FAQ','支援開始地点 / 対象国 / ECのみ可否 / 調査のみ可否 / 期間など'],
        ['CTA','海外展開について相談する']
      ],
      note:'Agentic Commerceは最新版会社案内の現提供サービスから外れているため、現時点のSolutionsには含めない。'
    }
  }
};
